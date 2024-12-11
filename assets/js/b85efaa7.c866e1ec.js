"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5240],{85303:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var n=r(74848),o=r(28453);const c={title:"How to set coredump file path",tags:["coredump","crash","core"]},a=void 0,l={permalink:"/blog/2023/01/21/coredump-file-set",source:"@site/blog/2023/01-21-coredump-file-set.md",title:"How to set coredump file path",description:"Get coredump file path ##",date:"2023-01-21T00:00:00.000Z",tags:[{inline:!0,label:"coredump",permalink:"/blog/tags/coredump"},{inline:!0,label:"crash",permalink:"/blog/tags/crash"},{inline:!0,label:"core",permalink:"/blog/tags/core"}],readingTime:.115,hasTruncateMarker:!1,authors:[],frontMatter:{title:"How to set coredump file path",tags:["coredump","crash","core"]},unlisted:!1,prevItem:{title:"Why openldap doesn't sync from master",permalink:"/blog/2023/02/17/openldap-sync"},nextItem:{title:"How to associate assembly code to exact line in C program?",permalink:"/blog/2023/01/15/objdump-C-line"}},s={authorsImageUrls:[]},i=[{value:"Get coredump file path",id:"get-coredump-file-path",level:2},{value:"Set coredump file path",id:"set-coredump-file-path",level:2}];function p(e){const t={code:"code",h2:"h2",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"get-coredump-file-path",children:"Get coredump file path"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"$ sysctl kernel.core_pattern\n"})}),"\n",(0,n.jsx)(t.h2,{id:"set-coredump-file-path",children:"Set coredump file path"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"$ sysctl -w kernel.core_pattern=/var/crash/core.%u.%p.%t\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>l});var n=r(96540);const o={},c=n.createContext(o);function a(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);