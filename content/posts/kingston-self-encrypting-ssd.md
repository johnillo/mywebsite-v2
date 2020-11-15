---
title: Kingston Self-Encrypting SSD (512 GB KC600)
description: A 120GB hard disk is hardly enough for software development. Upgraded my X220's to a 512GB self-encrypting SSD.  
tags: [personal]
createdAt: 2020-09-02
updatedAt: 2020-09-02
---

I recently upgraded my X220's storage to 512GB, because 128GB is just not enough for a web developer. The one I purchased is a [Kingston KC600 SATA SSD](https://www.kingston.com/en/ssd/kc600-sata-solid-state-drive?Capacity=512GB&Options=Drive%20Only).

<figure>
  <a href="/media/kingston-self-encrypted-ssd-01.jpg" target="_blank">
    <img src="/media/kingston-self-encrypted-ssd-01.jpg" />
  </a>
  <figcaption>Just received the new SSD from delivery</figcaption>
</figure>

Getting a [solid-state drive](https://en.wikipedia.org/wiki/Solid-state_drive) is an essential upgrade to capable computers if you want to make it usable with today's software. Because the IO performance of an SSD is 10~15 times faster than a HDD, your computer will enjoy improved boot times and file transfer speeds.

The prices of SSDs in 2020 are much lower than they were years ago when they started to become mainstream. I got my first SSD (Kingston 128GB) for more or less PHP 2,500. The same model now only costs around PHP 1,300.

<figure>
  <a href="/media/kingston-self-encrypted-ssd-02.jpg" target="_blank">
    <img src="/media/kingston-self-encrypted-ssd-02.jpg" />
  </a>
  <figcaption>My previous SSD was a SanDisk 128GB</figcaption>
</figure>

Unlike traditional hard disks, solid-state drives have no moving parts, making it more durable and more likely to survive a drop and still work. Depending on the manufacturer and technology, SSDs are generally reliable. Regardless, always back up important data to other storage drives!

<figure>
  <a href="/media/kingston-self-encrypted-ssd-03.jpg" target="_blank">
    <img src="/media/kingston-self-encrypted-ssd-03.jpg" />
  </a>
  <figcaption>The SSD is easy to install into the X220</figcaption>
</figure>

What's interesting in this product is the [self-encryption](https://en.wikipedia.org/wiki/Hardware-based_full_disk_encryption) feature. I encrypt my drives that will contain sensitive data so other people can't access it if I lose the device. I use [LUKS](https://en.wikipedia.org/wiki/Linux_Unified_Key_Setup) to secure regular hard drives, which is done during the disk partition phase of the OS installation. But with the new feature, encrypting it is easy, and you can enable or disable it anytime. It also frees the CPU from the encryption/decryption overhead.

I partitioned the new drive with the [basic layout for BIOS with MBR](https://wiki.archlinux.org/index.php/Installation_guide#Partition_the_disks) and skipped the `dm-crypt` setup altogether. After the OS installation, I used `sedutil` to setup the password, load the pre-boot authorization (PBA) image for Linux, and lock the drive. I also needed to install `sedutil-sleep` so the laptop can unlock the drive after waking up from suspend because the drive automatically locks itself when it loses power.

You can find a comprehensive setup guide for Linux in [this](https://wiki.archlinux.org/index.php/Self-encrypting_drives) Arch Wiki page.

<figure>
  <a href="/media/kingston-self-encrypted-ssd-04.jpg" target="_blank">
    <img src="/media/kingston-self-encrypted-ssd-04.jpg" />
  </a>
  <figcaption>Pre-boot Authorization prompt</figcaption>
</figure>

To access the encrypted drive, I input the password before the OS loads. This is different from the usual system login, so I need to unlock the computer twice before I can use it. Of course, the disk password is different from my account password.

I highly recommend buying storage devices that have built-in security or encryption. Although they are pricier than regular ones, I think it is worth the investment. And in case you can't afford one, you can still secure your data with software encryption utilities such as [VeraCrypt](https://www.veracrypt.fr/en/Home.html).
