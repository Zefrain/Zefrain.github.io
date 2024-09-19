"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2579],{83982:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(74848),s=t(28453);const r={},o="Chapter 12. TCP: The Transmission Control Protocol (Preliminaries)",a={id:"TOC/computer/network/tcpip/ch12",title:"Chapter 12. TCP: The Transmission Control Protocol (Preliminaries)",description:"12.1 Introduction",source:"@site/docs/TOC/computer/network/tcpip/ch12.md",sourceDirName:"TOC/computer/network/tcpip",slug:"/TOC/computer/network/tcpip/ch12",permalink:"/docs/TOC/computer/network/tcpip/ch12",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chapter 11. Name Resolution and the Domain Name System (DNS)",permalink:"/docs/TOC/computer/network/tcpip/ch11"},next:{title:"Chapter 13. TCP Connection Management",permalink:"/docs/TOC/computer/network/tcpip/ch13"}},c={},d=[{value:"12.1 Introduction",id:"121-introduction",level:2},{value:"12.1.1 ARQ and Retransmission",id:"1211-arq-and-retransmission",level:3},{value:"12.1.2 Windows of Packets and Sliding Windows",id:"1212-windows-of-packets-and-sliding-windows",level:3},{value:"12.3 TCP Header and Encapsulation",id:"123-tcp-header-and-encapsulation",level:2}];function l(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"chapter-12-tcp-the-transmission-control-protocol-preliminaries",children:"Chapter 12. TCP: The Transmission Control Protocol (Preliminaries)"})}),"\n",(0,i.jsx)(n.h2,{id:"121-introduction",children:"12.1 Introduction"}),"\n",(0,i.jsx)(n.h3,{id:"1211-arq-and-retransmission",children:"12.1.1 ARQ and Retransmission"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"resend"})," for dealing with packets drops. requires a way to determine:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"whether the receiver has received the packet"}),"\n",(0,i.jsx)(n.li,{children:"whether the packet it received was the same one the sender sent."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Questions"}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"How long should the sender wait for an ACK?"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Chapter 14"}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"What if the ACK is lost?"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"sends the packet again,"}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"What if the packet was received but had errors in it?"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Section 12.1"}),"\n",(0,i.jsx)(n.h3,{id:"1212-windows-of-packets-and-sliding-windows",children:"12.1.2 Windows of Packets and Sliding Windows"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Reference: ",(0,i.jsx)(n.a,{href:"https://cabulous.medium.com/tcp-send-window-receive-window-and-how-it-works-8629a4fad9ec",children:"TCP Send Window, Receive Window, and How it Works | by Carson | Medium"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20230409142709723",src:t(14830).A+"",width:"779",height:"391"})}),"\n",(0,i.jsx)(n.h2,{id:"123-tcp-header-and-encapsulation",children:"12.3 TCP Header and Encapsulation"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20230409145407070",src:t(74049).A+"",width:"763",height:"331"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20230409145423523",src:t(36250).A+"",width:"797",height:"448"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Seq Number"}),": the first byte of data in the containing segment represents. (to cope with the ",(0,i.jsx)(n.em,{children:"duplicate"})," packets)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"ACK Number"}),": The next sequence number that the sender of the ACK expects to receive. (the sequence number of the last successfully received byte of data plus 1 -- check packet state)."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},14830:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-20230409142709723-4367145b956ae3652e1d08d9c28e60ad.png"},74049:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-20230409145407070-53921fd3fb38ba043d0ead694e04f21f.png"},36250:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-20230409145423523-0aed3ee0d43ec6aceca427a564ba9a77.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);