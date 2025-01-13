---
title: Exclude files from git diff
tags: [git]
---

Exclude specific files from git diff

```bash
git diff -wu ${hash} -- . ':(exclude)a' ':(exclude)dir/b'
```

## Explanation

- `git diff -wu` : Show the changes between two commits, ignoring whitespace
- `${hash}` : Commit hash
- `--` : Separate the commit hash from the file paths
- `.` : Include all files in the current directory
- `':(exclude)a'` : Exclude file `a`
