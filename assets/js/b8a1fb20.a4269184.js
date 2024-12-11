"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2021],{79626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=n(74848),i=n(28453);const r={},a="16 Segmentation",o={id:"TOC/computer/system/ostep/Virtualization/ch16",title:"16 Segmentation",description:"see Chapter 9. Virtual Memory | Zefrain's Blog",source:"@site/docs/TOC/computer/system/ostep/Virtualization/ch16.md",sourceDirName:"TOC/computer/system/ostep/Virtualization",slug:"/TOC/computer/system/ostep/Virtualization/ch16",permalink:"/docs/TOC/computer/system/ostep/Virtualization/ch16",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"15 Mechanism: Address Translation",permalink:"/docs/TOC/computer/system/ostep/Virtualization/ch15"},next:{title:"17 Free-Space Management",permalink:"/docs/TOC/computer/system/ostep/Virtualization/ch17"}},c={},d=[{value:"16.2 Which Segment Are We Referring To?",id:"162-which-segment-are-we-referring-to",level:2},{value:"16.5 Fine-grained vs. Coarse-grained Segmentation",id:"165-fine-grained-vs-coarse-grained-segmentation",level:2}];function m(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"16-segmentation",children:"16 Segmentation"})}),"\n",(0,s.jsxs)(t.p,{children:["see ",(0,s.jsx)(t.a,{href:"https://zefrain.github.io/docs/TOC/computer/system/csapp/part2/ch09#994-fragmentation",children:"Chapter 9. Virtual Memory | Zefrain's Blog"})]}),"\n",(0,s.jsx)(t.h2,{id:"162-which-segment-are-we-referring-to",children:"16.2 Which Segment Are We Referring To?"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"image-20230312014428713",src:n(79382).A+"",width:"627",height:"135"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"// get top 2 bits of 14-bit VA\nSegment = (VirtualAddress & SEG_MASK) >> SEG_SHIFT;\n\n// now get offset\nOffset = VirtualAddress & OFFSET_MASK;\n\nif (Offset >= Bounds[Segment]) {\n    RaiseException(PROTECTION_FAULT);\n} else {\n    PhysAddr = Base[Segment] + Offset;\n    Register = AccessMemory(PhysAddr);\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"165-fine-grained-vs-coarse-grained-segmentation",children:"16.5 Fine-grained vs. Coarse-grained Segmentation"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"image-20230312015310284",src:n(20628).A+"",width:"826",height:"671"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},79382:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image-20230312014428713-01baa473a31d2d8797a149e908aa0f8d.png"},20628:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image-20230312015310284-5b797fdec38440bba5253d71862187d4.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);