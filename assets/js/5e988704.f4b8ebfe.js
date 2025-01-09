"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8577],{37275:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var s=o(47801),r=o(74848),t=o(28453);const c={title:"Docker: Enable Non-Root User Access",tags:["docker"]},l=void 0,a={authorsImageUrls:[]},i=[{value:"Enable Non-Root User Access",id:"enable-non-root-user-access",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"enable-non-root-user-access",children:(0,r.jsx)(n.a,{href:"https://phoenixnap.com/kb/docker-permission-denied#ftoc-heading-4",children:"Enable Non-Root User Access"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Enter the command below to create the ",(0,r.jsx)(n.strong,{children:"docker"})," group on the system."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"sudo groupadd -f docker\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Type the following ",(0,r.jsx)(n.code,{children:"usermod"})," command to add the active user to the ",(0,r.jsx)(n.strong,{children:"docker"})," group."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"sudo usermod -aG docker $USER\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Apply the group changes to the current terminal session by typing:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"newgrp docker\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["Check if the ",(0,r.jsx)(n.strong,{children:"docker"})," group is in the list of user groups."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"groups\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>l});var s=o(96540);const r={},t=s.createContext(r);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(t.Provider,{value:n},e.children)}},47801:e=>{e.exports=JSON.parse('{"permalink":"/blog/2023/03/16/docker-nonroot-user-access","source":"@site/blog/2023/03-16-docker-nonroot-user-access.md","title":"Docker: Enable Non-Root User Access","description":"Enable Non-Root User Access","date":"2023-03-16T00:00:00.000Z","tags":[{"inline":true,"label":"docker","permalink":"/blog/tags/docker"}],"readingTime":0.39,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Docker: Enable Non-Root User Access","tags":["docker"]},"unlisted":false,"prevItem":{"title":"Docker: Copy From Image","permalink":"/blog/2023/03/16/docker-copy-from-image"},"nextItem":{"title":"Why openldap doesn\'t sync from master","permalink":"/blog/2023/02/17/openldap-sync"}}')}}]);