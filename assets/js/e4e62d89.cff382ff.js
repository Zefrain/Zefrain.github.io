"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2658],{37134:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"TOC/computer/system/apue/ch05","title":"Chapter 5. Standard I/O Library","description":"5.2 Streams and FILE Objects ##","source":"@site/docs/TOC/computer/system/apue/ch05.md","sourceDirName":"TOC/computer/system/apue","slug":"/TOC/computer/system/apue/ch05","permalink":"/docs/TOC/computer/system/apue/ch05","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Chapter 4. Fiiles and Directories","permalink":"/docs/TOC/computer/system/apue/ch04"},"next":{"title":"Chapter 6. System Data Files and Information","permalink":"/docs/TOC/computer/system/apue/ch06"}}');var i=t(74848),s=t(28453);const a={},o="Chapter 5. Standard I/O Library",c={},d=[{value:"5.2 Streams and FILE Objects",id:"52-streams-and-file-objects",level:2},{value:"5.4 Buffering",id:"54-buffering",level:2},{value:"5.13 Temporary Files",id:"513-temporary-files",level:2}];function l(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"chapter-5-standard-io-library",children:"Chapter 5. Standard I/O Library"})}),"\n",(0,i.jsx)(n.h2,{id:"52-streams-and-file-objects",children:"5.2 Streams and FILE Objects"}),"\n",(0,i.jsx)(n.p,{children:"Standard I/O file stremas can be used with both single-byte and multibyte ('wide') character sets."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"#include <stdio.h>\n#include <wchar.h>\n\n/**\n * @param   mode        negative try to make the specified stream _byte_ oriented\n *                      positive try to make the specified stream _wide_ oriented\n *                      0 not to try to set, but still return\n *\n * @return  positive    wide oriented\n *          negative    byte oriented\n *          0           no orientation\n */\nint fwide(FILE *fp, int mode);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"54-buffering",children:"5.4 Buffering"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"_IOFBF: fully buffered"}),"\n",(0,i.jsx)(n.li,{children:"_IOLBF: line buffered"}),"\n",(0,i.jsx)(n.li,{children:"_IONBF: unbuffered"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"513-temporary-files",children:"5.13 Temporary Files"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"#include <stdio.h>\n\nchar *tmpnam(char *ptr);\nFILE *tmpfile(void);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"tmpfile"})," function creates a temporary file (type wb+) that is automatically removed when it is closed or on program termination."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'#include "apue.h"\n\nint main(void)\n{\n\tchar name[L_tmpnam], line[MAXLINE];\n\tFILE *fp;\n\n\tprintf("%s\\n", tmpnam(NULL)); /* first temp name */\n\n\ttmpnam(name); /* second temp name */\n\tprintf("%s\\n", name);\n\n\tif ((fp = tmpfile()) == NULL) /* create temp file */\n\t\terr_sys("tmpfile: %s\\n", strerror(errno));\n\n\tfputs("one line of output\\n", fp); /* write to temp file */\n\trewind(fp);\n\n\tif (fgets(line, sizeof(line), fp) == NULL)\n\t\terr_sys("fgets: %s\\n", strerror(errno));\n\tfputs(line, stdout);\n\n\treturn 0;\n}\n'})}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Figure 5.12 Demonstrate tmpnam and tmpfile functions"})})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);