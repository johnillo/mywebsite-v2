---
title: Kingston NVMe SSD issues on Manjaro Linux
description: Troubleshooting a Kingston NVMe SSD that is randomly hanging on Manjaro Linux.
tags: [personal, computing]
createdAt: 2021-01-03
updatedAt: 2021-02-13
---

[I got myself a new Intel NUC](/blog/got-a-new-intel-nuc) in October 2020. At the same time, I bought a Kingston A2000 500GB M.2 SSD that takes its NVMe slot. The drive contains my [Manjaro Linux](https://manjaro.org/) installation.

Everything was fine at first. However, I would experience random crashes when I do some heavy (or sometimes normal) activities that involve disk I/O. When it crashes, the disk LED indicator blinks about three times or more (it flickers depending on disk activity) before turning off. After that, the desktop is either frozen or working but cannot load anything from the disk when I open an application or terminal.

As the standard troubleshooting procedure, I investigated the system logs for clues on why the drive crashed but didn't find anything at all. Most modern disk drives have SMART capabilities, so I installed `smartmontools` using pacman to access it and print a report for `/dev/nvme0n1`. To my chagrin, the report also shows no error logs.

```
smartctl 7.1 2019-12-30 r5022 [x86_64-linux-5.4.77-1-MANJARO] (local build)
Copyright (C) 2002-19, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF INFORMATION SECTION ===
Model Number:                       KINGSTON SA2000M8500G
Serial Number:                      50026B72826D0B6C
Firmware Version:                   S5Z42105
PCI Vendor/Subsystem ID:            0x2646
IEEE OUI Identifier:                0x0026b7
Controller ID:                      1
Number of Namespaces:               1
Namespace 1 Size/Capacity:          500,107,862,016 [500 GB]
Namespace 1 Utilization:            60,623,048,704 [60.6 GB]
Namespace 1 Formatted LBA Size:     512
Namespace 1 IEEE EUI-64:            0026b7 2826d0b6c5
Local Time is:                      Sun Jan  3 01:12:39 2021 PST
Firmware Updates (0x14):            2 Slots, no Reset required
Optional Admin Commands (0x0017):   Security Format Frmw_DL Self_Test
Optional NVM Commands (0x005f):     Comp Wr_Unc DS_Mngmt Wr_Zero Sav/Sel_Feat Timestmp
Maximum Data Transfer Size:         32 Pages
Warning  Comp. Temp. Threshold:     75 Celsius
Critical Comp. Temp. Threshold:     80 Celsius

Supported Power States
St Op     Max   Active     Idle   RL RT WL WT  Ent_Lat  Ex_Lat
 0 +     9.00W       -        -    0  0  0  0        0       0
 1 +     4.60W       -        -    1  1  1  1        0       0
 2 +     3.80W       -        -    2  2  2  2        0       0
 3 -   0.0450W       -        -    3  3  3  3     2000    2000
 4 -   0.0040W       -        -    4  4  4  4    15000   15000

Supported LBA Sizes (NSID 0x1)
Id Fmt  Data  Metadt  Rel_Perf
 0 +     512       0         0

=== START OF SMART DATA SECTION ===
SMART overall-health self-assessment test result: PASSED

SMART/Health Information (NVMe Log 0x02)
Critical Warning:                   0x00
Temperature:                        30 Celsius
Available Spare:                    100%
Available Spare Threshold:          10%
Percentage Used:                    0%
Data Units Read:                    1,318,500 [675 GB]
Data Units Written:                 1,782,547 [912 GB]
Host Read Commands:                 11,972,697
Host Write Commands:                16,505,085
Controller Busy Time:               190
Power Cycles:                       108
Power On Hours:                     242
Unsafe Shutdowns:                   14
Media and Data Integrity Errors:    0
Error Information Log Entries:      0
Warning  Comp. Temperature Time:    0
Critical Comp. Temperature Time:    0

Error Information (NVMe Log 0x01, max 256 entries)
No Errors Logged
```

The drive has 14 unsafe shutdowns to date due to the forced power-off needed to restart the machine.

If there aren't any error logs, then the SSD isn't broken. But I needed an idea on why or how the drive fails, and I can't use my new NUC for any serious work due to that fact. It is unwise to return the item because I didn't have any proof that it is indeed the hardware's fault.

#### Power Saving

I got a hunch that Linux may have compatibility issues with NVMe devices. So, I visited an Arch Wiki page about NVMe SSD and [discovered that NVMe SSDs can save power through APST (Autonomous Power State Transition)](https://wiki.archlinux.org/index.php/Solid_state_drive/NVMe#Power_Saving_APST).

On a [patch made by amluto](https://github.com/torvalds/linux/commit/c5552fde102fcc3f2cf9e502b8ac90e3500d8fdf) for the Linux kernel 4.11, he fixed the APST (power saving) for NVMe devices. NVMe devices can save power by entering a low-power state when idle:

> NVMe devices can advertise multiple power states. These states can be either "operational" (the device is fully functional but possibly slow) or "non-operational" (the device is asleep until woken up). Some devices can automatically enter a non-operational state when idle for a specified amount of time and then automatically wake back up when needed.

However, his Samsung 950 had issues with APST detection:

> In theory, the device can expose "default" APST table, but this doesn't seem to function correctly on my device (Samsung 950), nor does it seem particularly useful. There is also an optional mechanism by which a configuration can be "saved" so it will be automatically loaded on reset. This can be configured from userspace, but it doesn't seem useful to support in the driver.

When I checked my SSD using `nvme-cli`, APST was enabled. However, state 4 (non-operational) has a total (ent_lat + ex_lat) latency higher than the default 25 ms.

```
Supported Power States
St Op     Max   Active     Idle   RL RT WL WT  Ent_Lat  Ex_Lat
 0 +     9.00W       -        -    0  0  0  0        0       0
 1 +     4.60W       -        -    1  1  1  1        0       0
 2 +     3.80W       -        -    2  2  2  2        0       0
 3 -   0.0450W       -        -    3  3  3  3     2000    2000
 4 -   0.0040W       -        -    4  4  4  4    15000   15000
```

Based on the Arch Wiki:

> If the total latency of any state (enlat + xlat) is greater than 25000 (25ms) you must pass a value at least that high as parameter `default_ps_max_latency_us` for the `nvme_core` kernel module.

But if APST works correctly, that state wouldn't be used at all:

> The maximum acceptable latency is controlled using `dev_pm_qos` (e.g. `power`/`pm_qos_latency_tolerance_us` in sysfs); non-operational states with total latency greater than this value will not be used. As a special case, setting the latency tolerance to 0 will disable APST entirely. On hardware without APST support, the sysfs file will not be exposed.

Nevertheless, I still set the `default_ps_max_latency_us` for the `nvme_core` kernel module to 30000 (30 ms) to match the total latency of my SSD's 4th state.

My SSD hasn't failed six days after the fix, even when building Docker images (a rather disk I/O intensive task). It seems that this Kingston A2000 NVMe SSD also has issues exposing its APST table similar to the Samsung 950, making the system unstable due to a power-saving state that the drive cannot use.

###### 2021-01-09 Update

The problem resurfaced when I transferred my Nuxt.js project files (uncompressed) from my work MacBook Pro to the NUC's Linux partition via `scp`. Happened twice, and I was able to get the error logs in a separate terminal session using `dmesg -w` on the second attempt:

```
nvme nvme0: I/O 10 QID 2 timeout, aborting
nvme nvme0: I/O 11 QID 2 timeout, aborting
nvme nvme0: I/O 12 QID 2 timeout, aborting
nvme nvme0: I/O 13 QID 2 timeout, aborting
nvme nvme0: I/O 14 QID 2 timeout, aborting
nvme nvme0: I/O 10 QID 2 timeout, reset controller
nvme nvme0: I/O 24 QID 0 timeout, reset controller
nvme nvme0: Device not ready; aborting reset
nvme nvme0: Abort status: 0x371
nvme nvme0: Abort status: 0x371
nvme nvme0: Abort status: 0x371
nvme nvme0: Abort status: 0x371
nvme nvme0: Abort status: 0x371
nvme nvme0: Device not ready; aborting reset
nvme nvme0: Removing after probe failure status: -19
nvme nvme0: Device not ready; aborting reset
nvme nvme0: failed to set APST feature (-19)
```

Coincidentally, the ArchWiki SSD NVMe page [troubleshooting section](https://wiki.archlinux.org/index.php/Solid_state_drive/NVMe#Controller_failure_due_to_broken_APST_support) was updated on Jan 8th. It states that Kingston A2000 drives with firmware S5Z42105 exhibit controller issues related to power saving.

> As a workaround, add the kernel parameter `nvme_core.default_ps_max_latency_us=0` to completely disable APST, or set a custom threshold to disable specific states. 

I ended up disabling the APST altogether for the drive. I restarted the machine and got the file transfer successful on the third attempt.

Hoping this issue gets fixed on future kernel updates.

###### 2021-02-13 Update

Instead of completely disabling the APST, I only disabled the 4th power state. Nonetheless, my NUC doesn't crash anymore.

###### Kernel Updates

- [nvme-pci: avoid the deepest sleep state on Kingston A2000 SSDs](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=538e4a8c571efdf131834431e0c14808bcfb1004)

