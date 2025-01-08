---
title: How to Find and Replace Project-wide in Vim
tags: [vim]
---



# How to Find and Replace Project-wide in Vim

## 0. Requirements

- [fzf](https://github.com/junegunn/fzf) and [fzf.vim](https://github.com/junegunn/fzf.vim) are installed
- [Rg]([https://github.com/BurntSushi/ripgrep) or [ag](https://github.com/ggreer/the_silver_searcher) is installed
- set alt/option to ESC+

## 1. Usage

1. `:Rg pattern` : search pattern in project
2. `<tab>` to select, `<shift>-<tab>` to deselect to *quickfix list*
3. `<enter>` to pop quickfix list
4. `:cfdo %s/pattern/string/g` to replace all instances in *quickfix list*



## 2. Reference

- [elliotec | How to Find and Replace Project-wide in Vim](https://elliotec.com/how-to-find-and-replace-in-project-with-vim/)
