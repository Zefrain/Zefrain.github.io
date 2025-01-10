---
title: "No module named 'charset_normalizer.md__mypyc'"
tags: [pyinstaller, requests]
---

# pyinstaller missing file for requests module[^1]

- report message

```
Traceback (most recent call last):
  File "requests\compat.py", line 11, in <module>
ModuleNotFoundError: No module named 'chardet'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "minarca_client\main.py", line 15, in <module>
    from minarca_client.core import (
  File "PyInstaller\loader\pyimod03_importers.py", line 495, in exec_module
  File "minarca_client\core\__init__.py", line 23, in <module>
    import requests
  File "PyInstaller\loader\pyimod03_importers.py", line 495, in exec_module
  File "requests\__init__.py", line 45, in <module>
  File "PyInstaller\loader\pyimod03_importers.py", line 495, in exec_module
  File "requests\exceptions.py", line 9, in <module>
  File "PyInstaller\loader\pyimod03_importers.py", line 495, in exec_module
  File "requests\compat.py", line 13, in <module>
  File "PyInstaller\loader\pyimod03_importers.py", line 495, in exec_module
  File "charset_normalizer\__init__.py", line 24, in <module>
  File "PyInstaller\loader\pyimod03_importers.py", line 495, in exec_module
  File "charset_normalizer\api.py", line 5, in <module>
  File "PyInstaller\loader\pyimod03_importers.py", line 495, in exec_module
  File "charset_normalizer\cd.py", line 9, in <module>
ModuleNotFoundError: No module named 'charset_normalizer.md__mypyc'
```

- resolution

```python
pyinstaller --hiddenimport charset_normalizer.md__mypyc
```

[^1]: [Missing file for charset-normalizer==3.0.1 · Issue #534 · pyinstaller/pyinstaller-hooks-contrib (github.com)](https://github.com/pyinstaller/pyinstaller-hooks-contrib/issues/534)
