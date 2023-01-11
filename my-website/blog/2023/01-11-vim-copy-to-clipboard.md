---
title: How to copy to clipboard in Vim?
tags: [vim, clipboard]
---



On macOS and Windows set:

```vimrc
set clipboard=unnamed
```

On Linux set (vim 7.3.74+):

```vimrc
set clipboard^=unnamed,unnamedplus
```
