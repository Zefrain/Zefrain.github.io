---
title: Set up Meld as Difftool and Mergetool for Git
tags: [meld,git,difftool,meldtool]
---

## Configure Meld as Default Git Tools ##

### Edit Config File ###

- `.gitconfig`
```.gitconfig
[merge]
    tool = meld
[mergetool "meld"]
    # Choose one of these 2 lines
    cmd = meld "$LOCAL" "$MERGED" "$REMOTE" --output "$MERGED"
    cmd = meld "$LOCAL" "$BASE" "$REMOTE" --output "$MERGED"
```

### Commands for Windows and Linux ###

- for Windows
```bash
$ git config --global diff.tool meld
$ git config --global difftool.meld.path "C:\Program Files (x86)\Meld\Meld.exe"
$ git config --global difftool.prompt false

$ git config --global merge.tool meld
$ git config --global mergetool.meld.path "C:\Program Files (x86)\Meld\Meld.exe"
$ git config --global mergetool.prompt false
```

- For Linux
```bash
$ git config --global diff.tool meld
$ git config --global difftool.meld.path "C:\Program Files (x86)\Meld\Meld.exe"
$ git config --global difftool.prompt false

$ git config --global merge.tool meld
$ git config --global mergetool.meld.path "C:\Program Files (x86)\Meld\Meld.exe"
$ git config --global mergetool.prompt false
```
