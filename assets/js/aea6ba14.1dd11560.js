"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7968],{24714:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(74848),o=t(28453);const a={},s="Disadvantages of strlen() in Embedded Domain",i={permalink:"/blog/2024/09/20/strlen",source:"@site/blog/2024/09-20-strlen.md",title:"Disadvantages of strlen() in Embedded Domain",description:'To read from a "TCP Communication" you are probably using read. The prototype for read is',date:"2024-09-20T00:00:00.000Z",tags:[],readingTime:.57,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"aria2 SSL/TLS error on openwrt",permalink:"/blog/2024/10/15/aria2-ssl"},nextItem:{title:"KVM \u8fd0\u884c\u5e76\u7f16\u8f91iso\u955c\u50cf\u6587\u4ef6",permalink:"/blog/2024/07/25/kvm"}},d={authorsImageUrls:[]},c=[];function l(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:['To read from a "TCP Communication" you are probably using ',(0,r.jsx)(n.code,{children:"read"}),". The prototype for ",(0,r.jsx)(n.code,{children:"read"})," is"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"ssize_t read(int fildes, void *buf, size_t nbyte);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["and the return value is the number of bytes read (even if they are ",(0,r.jsx)(n.code,{children:"0"}),").\nSo, let's say you're about to read 10 bytes, all of which are 0. You have an array with more than enough to hold all the data"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int fildes;\nchar data[1000];\n// fildes = TCPConnection\nnbytes = read(fildes, data, 1000);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now, by inspecting ",(0,r.jsx)(n.code,{children:"nbytes"})," you know you have read 10 bytes. If you check ",(0,r.jsx)(n.code,{children:"data[0]"})," through ",(0,r.jsx)(n.code,{children:"data[9]"})," you will find they have ",(0,r.jsx)(n.code,{children:"0"}),";"]}),"\n",(0,r.jsx)(n.h1,{id:"reference",children:"Reference:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://stackoverflow.com/questions/9173017/disadvantages-of-strlen-in-embedded-domain",children:"Disadvantages of strlen() in Embedded Domain"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(96540);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);