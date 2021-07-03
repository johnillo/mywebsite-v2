---
title: Bypass Chrome "Connection is not private"
description: Bypass Google Chrome "Connection is not private" warning page
createdAt: 2021-07-03
updatedAt: 2021-07-03
---

I was trying to access a project with self-signed certificate on a Vagrant box, but Chrome doesn't allow me. There's no "Proceed to \<url\> (unsafe)" link.

### Solutions

1. Check and update the system time
2. Prevent the warning page
    - Click a blank area on the warning page
    - Type `thisisunsafe`

※ Google changes the unlock keyword from time to time.
