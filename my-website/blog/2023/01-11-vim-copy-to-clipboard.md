---
title: How to copy to clipboard in Vim?
tags: [vim, clipboard]
---

## Requirements ##

```bash
$ vim --version | grep clipboard

+clipboard         +keymap            +printer           +vertsplit
+eval              -mouse_jsbterm     -sun_workshop      +xterm_clipboard
```

if clipboard is `-`, then we need install `vim-gtk`.

for example, on ubuntu:
```bash
$ sudo apt install -y vim-gtk
```

## Settings ##

vim `~/.vimrc`

On macOS and Windows set:

```vimrc
$ set clipboard=unnamed
```

On Linux set (vim 7.3.74+):

```vimrc
$ set clipboard=unnamedplus
```
