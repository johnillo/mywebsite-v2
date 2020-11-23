---
title: How I do my computing
createdAt: 2020-07-01
updatedAt: 2020-11-23
---

I spend most of my time in front of computers and electronic devices. I thought of creating this journal to document the evolution of my computing setup from time to time.

## Computer

### Laptop (ThinkPad X220)

_Acquired on September 2018_

I use a second-hand Thinkpad X220 as my daily driver, which I purchased from [TipidPC](https://tipidpc.com/) in September 2018 for around $230. To those who aren't familiar, it's an old computer with a bit outdated specs in today's standards. However, it can still handle most of the basic tasks and web development very well. I don't play PC games, so the specs are good enough for me. Compiling (e.g. AUR builds) also works well enough, though a bit slow compared to a modern computer.

| Component | Specs                                        |
| ---       | -----                                        |
| Model     | 4291EM7 ThinkPad X220                        |
| CPU       | Intel i5-2520M @ 3.200GHz (2nd generation)   |
| GPU       | Intel 2nd Generation Core Processor Family   |
| RAM       | 16 GiB (DDR3)                                |
| Storage   | 512 GiB Kingston self-encrypting SSD (KC600) |
| OS        | Arch Linux (Kernel 5.4 LTS)                  |
| Display   | HD (1366x768), TN                            |

The reasons why I love this ThinkPad over other brands are:

* Sturdiness - Older ThinkPad models like the X220 are tough. You can also tilt the monitor up to 180 degrees, which most laptops can't do.
* Keyboard - The 7-row layout is the best keyboard I have ever used on a laptop. You'll appreciate the large escape key if you're a vim user.
* Linux support - Most ThinkPads are compatible with GNU/Linux OS and drivers. The ArchWiki has a comprehensive list [here](https://wiki.archlinux.org/index.php/Laptop/Lenovo).
* Repairability - Most parts are user-replaceable, which you can readily find on the internet. I replaced its keyboard once, and it is fairly easy to do.

The display is okay, but I find it insufficient for software development and graphic design. The speakers and track pad are also not that good. I disabled the track pad from the BIOS settings because I use the TrackPoint if not using my trackball mouse.

At work, I use a company-issued 2016 13" MacBook Pro with macOS Catalina. I like the minimal design, quality, excellent sound system, and display except for the keyboard, which I think is horrible. Though if given a choice, I would very much like to replace it with a ThinkPad or an XPS with GNU/Linux.

### Desktop (Intel NUC Core i7-10710U)

_Acquired on October 2020_

An urgent project at work prompted me to buy a new Windows machine to replace my malfunctioning and slow Fujitsu laptop. I bought an Intel NUC i7 10th gen (BXNUC10I7FNH1) from [Shopee](https://shopee.ph/).

| Component | Specs                                                     |
| ---       | -----                                                     |
| Model     | Intel NUC 10 Core i7-10710U Barebones Kit (BXNUC10I7FNH1) |
| CPU       | Intel i7-10710U (12) @ 4.7GHz                             |
| GPU       | Intel Device 9bca                                         |
| RAM       | 16 GiB (DDR4-2666 SO-DIMM)                                |
| Storage   | 500 GiB A2000 M.2 2280 NVMe                               |
| OS        | Manjaro Linux (Kernel 5.4 LTS)                            |

You can read more about it [here](/blog/got-a-new-intel-nuc).

#### M.2 SSD Crash Issues

Recently, I was encountering frequent hard drive crash/hang on the m.2 SSD. I still don't have any clue what causes the crash, whether if it's defective hardware or some incompatibility with Manjaro, because the SMART assessment of the drive isn't showing any errors at all.

## Accessories

I use a [Kingston HyperX tenkeyless mechanical keyboard](https://www.amazon.com/s?k=kingston+hyperx+tenkeyless&ref=nb_sb_noss_2) (Cherry MX red) that my sister gave to me. I find it more enjoyable to type on a mechanical keyboard. I'm hoping to get an ErgoDox EZ ergonomic keyboard soon once I earn enough moolah.

A [Logitech MX Ergo trackball](https://www.amazon.com/s?k=logitech+mx+ergo&i=electronics&ref=nb_sb_noss) mouse is my primary pointing device on all computers. It's initially a bit challenging to use, but once you get used to it, I think it's way more efficient than using a regular mouse. I wrote a review and repair summary of the device [here](http://localhost:3000/blog/repairing-my-logitech-mx-ergo).

## Software

I try to use free and open-source software as much as possible. Here are some of the frequent applications I use on my Linux machines:

| Type                        | Application                            |
|-----------------------------|----------------------------------------|
| OS                          | arch linux (kernel 5.4 lts)            |
| VCS                         | git                                    |
| Window manager              | i3-gaps                                |
| Display server              | X11                                    |
| Shell                       | zsh                                    |
| File explorer               | ranger, thunar                         |
| Terminal emulator           | termite                                |
| Terminal multiplexer        | tmux                                   |
| Editor                      | nvim, vs code/code-oss                 |
| Wireless connection manager | iwctl                                  |
| Web browser                 | firefox, chromium                      |
| Communications              | keybase                                |
| Disk encryption             | veracrypt, sedutil (opal)              |
| IME (Japanese)              | uim, anthy                             |
| Miscellaneous               | htop, gotop, flameshot, xsel, neofetch |

I install applications from the official Arch repository using `pacman` or from AUR via `yay`.

### Operating System - Arch Linux and Manjaro Linux

I tried using multiple GNU/Linux distribution in the past, but I settled with Arch Linux due to its simplicity. It runs buttery smooth on old machines like the X220. It seems to be quite popular within the Linux circle jerk because of the notorious "btw, I use arch" meme. Setting up an operating system like Arch Linux is not simple, so I can understand the elitist rewarding feeling of using an OS that you set up using just the command line and the [Arch bible](https://wiki.archlinux.org/).

An annoyance with this distro is that you can easily break the applications and packages if you update carelessly or use an application that depends on the kernel, like a hypervisor. Fortunately, it's fairly easy to switch kernel using `pacman`, and I recently switched to the LTS kernel (5.4) from the bleeding edge kernel. VirtualBox 6 just hangs my machine on the 5.8 kernel.

As a side note, I'd love to use a libre operating system (the FSF doesn't endorse Arch as one), but it would be impossible or hard to do because modern hardware requires some proprietary binaries to run. It wouldn't also be practical to use an even [older machine](https://www.fsf.org/resources/hw/systems).

On my NUC, I use [Manjaro Linux](https://manjaro.org/), a distro based on Arch Linux. I had to use it because the Arch Linux installer drivers doesn't detect the Wi-Fi device on the NUC and I don't want to attach a long LAN cable just to install it. The workflow is similar with the base operating system.

### Startup and X Server

I like to keep my computing environment simple. I start by logging in from the virtual terminal (VT); no fancy login screen/greeter whatsoever. Initially, I thought the VT would be enough, but I find myself needing to use the web frequently and type in Japanese, things that are impossible to do with the just the VT alone.

So for tasks that need a graphical user interface, I use X11, which I start from the VT though the `startx` command. To eliminate screen tearing and improve rendering, I use it with `picom`.

When I upgraded my SSD to 512GB, I took the time to try out Wayland and Sway (the i3 equivalent in Wayland). While the setup and performance of Wayland are superior to X, most apps still don't work with it, and screen sharing is broken (black screen). There are workarounds for this, but I think Wayland isn't practical for now, so I reverted to X11 and i3.

To be able to type Japanese characters, I bootstrap `uim` (universal input method) and `anthy` with X11. I toggle the Japanese input method using the `meta + /` combo.

I use `i3-gaps`, a tiling window manager, for navigating through my X11 applications. It is lightweight and fast compared to using the usual Linux desktop environments and comes with `i3-status` for monitoring the machine status, volume, connectivity, and time. I have configured it to use vi-like keybindings for more comfortable keyboard accessibility.

A tiling window manager is not for everyone as it is aimed for power users and terminal-centric workflows. It also doesn't work nicely with most GUI apps and dialog windows.

<figure class="mt-4">
  <a href="/media/how-i-do-my-computing-01.png" target="_blank">
    <img src="/media/how-i-do-my-computing-01.png" />
  </a>
  <figcaption>Firefox and Termite running on i3, captured with Flameshot</figcaption>
</figure>

My X220 has a resolution of only 1366x768, so I configured `i3-gaps` to maximize the screen estate, and adjusted the border and focus colors to make it less distracting. The default fonts are a bit blurry on small sizes, so I switched the `i3-status` fonts to a monospace pixel font called [Terminus](https://files.ax86.net/terminus-ttf/).

### Disk Encryption

Encryption is an essential setup that I have in all of my computers. I don't want anyone to access my files directly from my storage devices in case I accidentally lose them.

The X220 is equipped with a 512GiB Kingston self-encrypting SSD. The encryption is set up with `sedutil` and is easy to enable and disable anytime. Unlike `dm-crypt` locked partitions, hardware-level encryption is convenient and frees the CPU from encryption/decryption overhead.

I also have a Veracrypt-encrypted thumb drive (32GB) for storing sensitive files, which is always attached to my keychain. I don't entrust cloud storage with confidential files anymore, no matter how convenient they are.

### Colors

I prefer to apply a unified color scheme across my terminal emulators, text editors, and other customizable applications.

I prefer dark themes over light ones when coding. However, my eyes don't do very well in light over dark themes when reading articles and blog posts, perhaps because of my myopia.

My favorite color theme is the [Atom One Dark](https://github.com/atom/one-dark-ui), which is the default color set used by the Atom text editor. The colors in this palette are generally soft in the eye and have perfect contrast for displaying source codes. Many theme designers ported One Dark to applications I commonly use, such as Firefox, VS Code, and iTerm.

<figure class="mt-4">
  <a href="/media/how-i-do-my-computing-02.png" target="_blank">
    <img src="/media/how-i-do-my-computing-02.png" />
  </a>
  <figcaption>i3-status, code-oss and nvim with One Dark colorscheme</figcaption>
</figure>
