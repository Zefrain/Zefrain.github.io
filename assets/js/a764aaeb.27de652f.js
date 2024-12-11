"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2818],{97077:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(74848),r=s(28453);const i={title:"insecurity proof failed resolving '$DOMAIN/A/IN'",tags:["dnssec","dns","forward","security"]},o=void 0,c={permalink:"/blog/2022/10/28/2022/dnssec-forward",source:"@site/blog/2022/2022-10-28-dnssec-forward.md",title:"insecurity proof failed resolving '$DOMAIN/A/IN'",description:"dns forward failed ##",date:"2022-10-28T00:00:00.000Z",tags:[{inline:!0,label:"dnssec",permalink:"/blog/tags/dnssec"},{inline:!0,label:"dns",permalink:"/blog/tags/dns"},{inline:!0,label:"forward",permalink:"/blog/tags/forward"},{inline:!0,label:"security",permalink:"/blog/tags/security"}],readingTime:.485,hasTruncateMarker:!1,authors:[],frontMatter:{title:"insecurity proof failed resolving '$DOMAIN/A/IN'",tags:["dnssec","dns","forward","security"]},unlisted:!1,prevItem:{title:"gdb show list",permalink:"/blog/2022/11/08/2022/gdb-showlist"},nextItem:{title:"How To Download Packages With Dependencies Locally In Ubuntu, Debian, Linux Mint, Pop OS",permalink:"/blog/2022/10/27/2022/download-with-deps"}},l={authorsImageUrls:[]},d=[{value:"dns forward failed",id:"dns-forward-failed",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"dns-forward-failed",children:"dns forward failed"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Error message:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"28-Oct-2022 09:49:09.251 managed-keys-zone: Key 20326 for zone . is now trusted (acceptance timer complete)\n28-Oct-2022 09:49:09.490 resolver priming query complete: success\n28-Oct-2022 09:49:14.088 chase DS servers resolving 'bdc500.com/DS/IN': 192.168.5.104#53\n28-Oct-2022 09:49:15.003 insecurity proof failed resolving 'bdc500.com/A/IN': 192.168.5.104#53\n28-Oct-2022 09:50:46.782 connection refused resolving 'bdc500.com/A/IN': 192.168.5.104#53\n28-Oct-2022 09:50:51.070 validating bdc500.com/A: got insecure response; parent indicates it should be secure\n28-Oct-2022 09:50:51.070 insecurity proof failed resolving 'bdc500.com/A/IN': 192.168.5.104#53\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Solution"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"it is because dnssec without key, the simpliest way is :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"dnssec-validation no;\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["reference","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://dnsinstitute.com/documentation/dnssec-guide/ch03s04.html#how-trust-anchors-are-used",children:"Trust Anchors"})}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(96540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);