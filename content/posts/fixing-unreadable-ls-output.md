---
title: Fixing unreadable ls output
description: Make the list command output readable by configuring the LS_COLORS environment variable.
tags: [tutorial]
createdAt: 2020-06-12
updatedAt: 2020-06-12
---

I encountered some readability issues of certain kinds of files displayed by the `ls` command on my ArchLinux terminal, specifically with other-writable (`o+w`) directories.

<figure>
  <a href="/media/fixing-unreadable-ls-output-01.png" target="_blank">
    <img src="/media/fixing-unreadable-ls-output-01.png" />
  </a>
  <figcaption>Contrast issue with other-writable directories printed by ls</figcaption>
</figure>

Thanks to [this StackExchange question](https://askubuntu.com/questions/466198/how-do-i-change-the-color-for-directories-with-ls-in-the-console), I learned that it's possible to change the `ls` output colors by specifying an environment variable `LS_COLORS` on the shell profile (e.g. `.zshrc` or `.bashrc`).

In your shell user profile, make an entry that look like this:

```bash
# sets directory text color to purple
export LS_COLORS=$LS_COLORS:'di=0;35:'
```

You can add more types separated by colon:

```bash
# change directory and symlink colors
export LS_COLORS=$LS_COLORS:'di=1;33:ln=36'
```

## Recommended color choices

Some quick styles that you can copy-paste:

```
Blue = 34
Green = 32
Light Green = 1;32
Cyan = 36
Red = 31
Purple = 35
Brown = 33
Yellow = 1;33
Bold White = 1;37
Light Grey = 0;37
Black = 30
Dark Grey= 1;30
```

## Syntax

```
LS_COLORS=$LS_COLORS:'<type>=<style|color>[;<style|color>...][:<another_type>]'
```

### Example

```
export LS_COLORS=$LS_COLORS:'di=1;4;31;42'
```

### Possible foreground colors

```
30  = black
31  = red
32  = green
33  = orange
34  = blue
35  = purple
36  = cyan
37  = grey
90  = dark grey
91  = light red
92  = light green
93  = yellow
94  = light blue
95  = light purple
96  = turquoise
97  = white
```

### Possible background colors

```
40  = black background
41  = red background
42  = green background
43  = orange background
44  = blue background
45  = purple background
46  = cyan background
47  = grey background
100 = dark grey background
101 = light red background
102 = light green background
103 = yellow background
104 = light blue background
105 = light purple background
106 = turquoise background
107 = white background
```

### Styles

```
0   = default colour
1   = bold
4   = underlined
5   = flashing text (disabled on some terminals)
7   = reverse field (exchange foreground and background color)
8   = concealed (invisible)
```

### File types

```
bd = (BLOCK, BLK) Block device (buffered) special file
cd = (CHAR, CHR) Character device (unbuffered) special file
di = (DIR)  Directory
do = (DOOR) [Door][1]
ex = (EXEC) Executable file (ie. has 'x' set in permissions)
fi = (FILE) Normal file
ln = (SYMLINK, LINK, LNK) Symbolic link. If you set this to ‘target’ instead of a numerical value, the color is as for the file pointed to.
mi = (MISSING) Non-existent file pointed to by a symbolic link (visible when you type ls -l)
no = (NORMAL, NORM) Normal (non-filename) text. Global default, although everything should be something
or = (ORPHAN) Symbolic link pointing to an orphaned non-existent file
ow = (OTHER_WRITABLE) Directory that is other-writable (o+w) and not sticky
pi = (FIFO, PIPE)   Named pipe (fifo file)
sg = (SETGID) File that is setgid (g+s)
so = (SOCK) Socket file
st = (STICKY) Directory with the sticky bit set (+t) and not other-writable
su = (SETUID) File that is setuid (u+s)
tw = (STICKY_OTHER_WRITABLE) Directory that is sticky and other-writable (+t,o+w)
*.extension = Every file using this extension e.g. *.rpm = files with the ending .rpm
```

## Conclusion

After adding a custom `LS_COLORS` to my `.zshrc`, `o+w` directories output in `ls` is now more readable.

<figure>
  <a href="/media/fixing-unreadable-ls-output-02.png" target="_blank">
    <img src="/media/fixing-unreadable-ls-output-02.png" />
  </a>
</figure>
