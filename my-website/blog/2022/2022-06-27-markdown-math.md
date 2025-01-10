---
title: latex (math) support for markdown
tags: [latex, markdown, math]
---

## [Math Equations](https://docusaurus.io/docs/markdown-features/math-equations)

- import tha plugins in `docusaurus.config.js`

```js
const math = require("remark-math");
const katex = require("rehype-katex");
```

```js
remarkPlugins: [math],
rehypePlugins: [katex],
```

under `stylesheets`

```js
stylesheets: [
  {
    href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
    type: 'text/css',
    integrity:
      'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
    crossorigin: 'anonymous',
  },
],
```

- install modules

```sh
npm install --save remark-math@3 rehype-katex@5 hast-util-is-element@1.1.0
```
