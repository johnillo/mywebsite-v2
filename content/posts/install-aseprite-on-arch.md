---
title: Install Aseprite on Archlinux
description: How to build Aseprite from source in ArchLinux.
tags: [tutorial]
createdAt: 2020-03-26
updatedAt: 2020-03-26
---

I wanted to do some pixel art so I looked for tools that will work on my ThinkPad Archlinux. This led me to discover [Aseprite](https://www.aseprite.org/), a rather popular cross-platform tool among digital artists.

Aseprite costs USD 14.99 but we can use it for free by compiling [the source code](https://github.com/aseprite/aseprite/) on our own.

To start, follow the instructions on the [INSTALL.md](https://github.com/aseprite/aseprite/blob/master/INSTALL.md) file of the repository. For Archlinux, we need to make slight modifications.

### Install Archlinux dependencies and build tools

Install the Archlinux equivalent of the dependencies and build tools required:

```bash
sudo pacman -S git gcc cmake ninja libx11 libxcursor mesa-libgl fontconfig
```

### Skia pre-built library

Get the Skia-m81 pre-built library (release) from the [aseprite/skia repository](https://github.com/aseprite/skia/releases) that's compatible with your system. In my case, I needed the x64.

Extract the archive then move the contents into `~/deps/skia` directory.

### Clone the Github repository and submodules

```bash
git clone --recursive https://github.com/aseprite/aseprite.git
```

To update an existing clone:

```bash
cd aseprite
git pull
git submodule update --init --recursive
```

### Build from source

```bash
cd aseprite
mkdir build
cd build
cmake \
  -DCMAKE_BUILD_TYPE=RelWithDebInfo \
  -DLAF_BACKEND=skia \
  -DSKIA_DIR=$HOME/deps/skia \
  -DSKIA_LIBRARY_DIR=$HOME/deps/skia/out/Release-x64 \
  -G Ninja \
  ..
ninja aseprite
```

Once the build is successful, it will create an `aseprite` executable file on `build/bin` directory. Copy or move it in a directory in your `$PATH`.

### Failing builds?

If your build fails, try to find what's wrong based on the build output then edit the affected files.

When I built mine, I got an error on `src/doc/color_scales.h` file, suggesting to insert `#include <cassert>` on line 12.

<figure>
  <a href="/media/install-aseprite-on-arch-01.png" target="_blank">
    <img src="/media/install-aseprite-on-arch-01.png" />
  </a>
  <figcaption>Aseprite on Archlinux</figcaption>
</figure>

That's all! I hope you enjoy using Aseprite on your Arch.
