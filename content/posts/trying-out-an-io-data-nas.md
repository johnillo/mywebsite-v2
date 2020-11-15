---
title: Trying out an I-O Data HDL-GT NAS
description: I got a chance to bring home the network-attached storage (NAS) device from our office so I tried it out. 
tags: [personal]
createdAt: 2020-08-31
updatedAt: 2020-08-31
---

 My manager was kind enough to let me take home the [I-O Data HDL-GT NAS (RAID) device](https://www.iodata.jp/product/nas/general/hdl-gt/index.htm) that's gathering dust in the corner of our office. I've never seen it used even once since I started working at the company, so I don't have any idea how it works or how to set it up.
 
<figure>
  <a href="/media/trying-out-an-io-data-nas-01.jpg" target="_blank">
    <img src="/media/trying-out-an-io-data-nas-01.jpg" />
  </a>
</figure>

It is somewhat heavy with all the cartridges installed. There's a built-in lock to prevent unauthorized persons from removing the disks. I got it with five cartridges, each with a hard disk installed. Three of them have a capacity of 250GB, and the rest have 500GB.

<figure>
  <a href="/media/trying-out-an-io-data-nas-02.jpg" target="_blank">
    <img class="sm" src="/media/trying-out-an-io-data-nas-02.jpg" />
  </a>
  <a href="/media/trying-out-an-io-data-nas-03.jpg" target="_blank">
    <img class="sm" src="/media/trying-out-an-io-data-nas-03.jpg" />
  </a>
</figure>

My manager said that the device probably doesn't work anymore, but I think otherwise. So I tried setting up the device immediately once I got home.

<figure>
  <a href="/media/trying-out-an-io-data-nas-04.jpg" target="_blank">
    <img src="/media/trying-out-an-io-data-nas-04.jpg" />
  </a>
  <figcaption>Ruby Rose on the NAS</figcaption>
</figure>

This device seems to be marketed exclusively in Japan, thus the lack of English information and resources about it on the web. I was able to retrieve the [online product manual](https://www.iodata.jp/support/product/hdl-gt/HDLGTMAN.pdf) (in Japanese) from the company's product support page.

I can read basic Japanese, so I was able to navigate through the manual. However, to comprehend it completely, I still need the help of this handy [machine translator](https://www.deepl.com/translator).

I connected the device to my wireless router and turned it on. However, I wasn't able to find it in my current network. I needed to use a utility called [MagicalFinder](https://www.iodata.jp/lib/software/m/1551.htm#Windows%2010) to detect it, which only runs on Windows, so I used my Fujitsu FMV-A8290 laptop with Windows 10. As expected, the device had an inaccessible static IP address. I updated it to match my current LAN configuration. Then, I was able to access its admin screen.

<figure>
  <a href="/media/trying-out-an-io-data-nas-05.jpg" target="_blank">
    <img src="/media/trying-out-an-io-data-nas-05.jpg" />
  </a>
  <figcaption>LanDisk admin screen, showing "Please wait for a moment"</figcaption>
</figure>

The admin screen is also in Japanese, but I was able to understand most of it without needing translations. I reformated the drives with [RAID 10](https://en.wikipedia.org/wiki/Nested_RAID_levels#RAID_10_(RAID_1+0)) configuration, as recommended. I also set up two shared folders and accounts, one for me and the other for my girlfriend. The setup has a usable storage space of about 500GB (250GB + 500GB pair).

The shared folders are accessible via Windows sharing (SMB) and FTP. It also supports Apple sharing (AFS), but it is already too old to work with the current macOS. The SMB server still works in macOS Mojave, but not on Catalina as it probably doesn't support the SMB v.1 anymore.

I put the drive next to my Wi-Fi router and use it as my primary network storage for the time being. Once we need to work in an office again, I'll return it to my manager.

The device beeps from time to time, indicating an on-going drive restructuring operation. It probably means that the drives aren't in good condition, after all. However, I can still save and access my files as usual.

<figure>
  <a href="/media/trying-out-an-io-data-nas-06.jpg" target="_blank">
    <img src="/media/trying-out-an-io-data-nas-06.jpg" />
  </a>
  <figcaption>Access lights on (drives OK) and status lamp green (OK)</figcaption>
</figure>

I can access the drive using my MacBook Pro, ThinkPad X220, and iPhone 7. Having a NAS is pretty convenient for file sharing across devices (and an alternative to cloud storage), so I think I'll get one for my own someday.
