"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8281],{68073:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var o=n(74848),r=n(28453);const s={title:"Auth Login at Startup"},a="Auto Login at Startup",i={permalink:"/blog/2024/05/20/auto-login",source:"@site/blog/2024/05-20-auto-login.md",title:"Auth Login at Startup",description:"Runsudo systemctl edit getty@tty1.service",date:"2024-05-20T00:00:00.000Z",tags:[],readingTime:.17,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Auth Login at Startup"},unlisted:!1,prevItem:{title:"Set Dynamic IP address[^1][^2]",permalink:"/blog/2024/05/20/HOWTO-configure-network-on-ubuntu"},nextItem:{title:"Remove snapd on ubuntu",permalink:"/blog/2024/05/20/remove-snapd"}},c={authorsImageUrls:[]},u=[];function l(t){const e={code:"code",p:"p",pre:"pre",...(0,r.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["Run",(0,o.jsx)(e.code,{children:"sudo systemctl edit getty@tty1.service"})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-conf",children:"[Service]\nExecStart=\nExecStart=-/sbin/agetty --noissue --autologin myusername %I $TERM\nType=idle\n"})})]})}function d(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>i});var o=n(96540);const r={},s=o.createContext(r);function a(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:a(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);