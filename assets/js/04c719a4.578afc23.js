"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5344],{85688:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=s(74848),r=s(28453);const i={title:"memory leak",tags:["memory","pstack","watch"],sidebar_position:1},c=void 0,a={permalink:"/blog/2022/06/30/2022/memory-leak",source:"@site/blog/2022/2022-06-30-memory-leak.md",title:"memory leak",description:"find memory leak of a running process ##",date:"2022-06-30T00:00:00.000Z",tags:[{inline:!0,label:"memory",permalink:"/blog/tags/memory"},{inline:!0,label:"pstack",permalink:"/blog/tags/pstack"},{inline:!0,label:"watch",permalink:"/blog/tags/watch"}],readingTime:.62,hasTruncateMarker:!1,authors:[],frontMatter:{title:"memory leak",tags:["memory","pstack","watch"],sidebar_position:1},unlisted:!1,prevItem:{title:"ideas of memory pool",permalink:"/blog/2022/07/03/2022/mem-pool"},nextItem:{title:"execute bash script remotely via curl",permalink:"/blog/2022/06/28/2022/curl-exec"}},o={authorsImageUrls:[]},l=[{value:"find memory leak of a running process",id:"find-memory-leak-of-a-running-process",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"find-memory-leak-of-a-running-process",children:(0,t.jsx)(n.a,{href:"https://unix.stackexchange.com/questions/36450/how-can-i-find-a-memory-leak-of-a-running-process",children:"find memory leak of a running process"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ cat /proc/$pid/smaps\n"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["find out the ",(0,t.jsx)(n.code,{children:"PID"})," of the process"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ ps -aux\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["capture ",(0,t.jsx)(n.code,{children:"/proc/PID/smaps"})," and save into some file like ",(0,t.jsx)(n.code,{children:"before_meminc.txt"})]}),"\n",(0,t.jsx)(n.li,{children:"wait till memory gets increased"}),"\n",(0,t.jsx)(n.li,{children:"try again step 2"}),"\n",(0,t.jsxs)(n.li,{children:["find the difference between first ",(0,t.jsx)(n.code,{children:"smaps"})," and 2nd ",(0,t.jsx)(n.code,{children:"smaps"}),", e.g. with"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ diff -u before_meminc.txt after_meminc.txt\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"note down the address range where memory got increased"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["use ",(0,t.jsx)(n.code,{children:"pstack"})," and ",(0,t.jsx)(n.code,{children:"watch"})," command to get the right call stack"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ watch -n 1 'pstack $PID | tee -a $PID.stack'\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"C-c"})," when we caputred right stack"]}),"\n",(0,t.jsxs)(n.ol,{start:"8",children:["\n",(0,t.jsx)(n.li,{children:"check our stack file, find the functions between address range which we got from step 6."}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>a});var t=s(96540);const r={},i=t.createContext(r);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);