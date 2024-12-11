"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9695],{94842:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var t=r(74848),o=r(28453);const c={title:"generate coredump for docker container",tags:["coredump","docker"]},i=void 0,s={permalink:"/blog/2023/06/15/docker-coredump",source:"@site/blog/2023/06-15-docker-coredump.md",title:"generate coredump for docker container",description:"- use --cap-add=SYS_PTRACE flag when running the container",date:"2023-06-15T00:00:00.000Z",tags:[{inline:!0,label:"coredump",permalink:"/blog/tags/coredump"},{inline:!0,label:"docker",permalink:"/blog/tags/docker"}],readingTime:.16,hasTruncateMarker:!1,authors:[],frontMatter:{title:"generate coredump for docker container",tags:["coredump","docker"]},unlisted:!1,prevItem:{title:"coredump related settings",permalink:"/blog/2023/06/15/coredump-settings"},nextItem:{title:"yum error with SyntaxError: invalid syntax",permalink:"/blog/2023/03/21/yum-syntax-error"}},a={authorsImageUrls:[]},d=[];function l(e){const n={code:"code",li:"li",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["use ",(0,t.jsx)(n.code,{children:"--cap-add=SYS_PTRACE"})," flag when running the container"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker run --cap-add=SYS_PTRACE ...\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["add it to a ",(0,t.jsx)(n.code,{children:"docker-compose"})," file"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"version: '3'\r\nservices:\r\n  your-service:\r\n    image: your-image\r\n    cap_add:\r\n      - SYS_PTRACE\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var t=r(96540);const o={},c=t.createContext(o);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);