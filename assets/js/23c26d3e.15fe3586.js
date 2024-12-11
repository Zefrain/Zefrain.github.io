"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5147],{25344:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var i=t(74848),r=t(28453);const l={title:"How to Find and Replace Project-wide in Vim",tags:["vim"]},s="How to Find and Replace Project-wide in Vim",c={permalink:"/blog/2024/12/10/vim-multi-replace",source:"@site/blog/2024/12-10-vim-multi-replace.md",title:"How to Find and Replace Project-wide in Vim",description:"0. Requirements",date:"2024-12-10T00:00:00.000Z",tags:[{inline:!0,label:"vim",permalink:"/blog/tags/vim"}],readingTime:.355,hasTruncateMarker:!1,authors:[],frontMatter:{title:"How to Find and Replace Project-wide in Vim",tags:["vim"]},unlisted:!1,nextItem:{title:"Set Firewall for ZeroTier Interface",permalink:"/blog/2024/11/29/openwrt-firewall"}},o={authorsImageUrls:[]},a=[{value:"0. Requirements",id:"0-requirements",level:2},{value:"1. Usage",id:"1-usage",level:2},{value:"2. Reference",id:"2-reference",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"0-requirements",children:"0. Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/junegunn/fzf",children:"fzf"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/junegunn/fzf.vim",children:"fzf.vim"})," are installed"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"%5Bhttps://github.com/BurntSushi/ripgrep",children:"Rg"})," or ",(0,i.jsx)(n.a,{href:"https://github.com/ggreer/the_silver_searcher",children:"ag"})," is installed"]}),"\n",(0,i.jsx)(n.li,{children:"set alt/option to ESC+"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"1-usage",children:"1. Usage"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:":Rg pattern"})," : search pattern in project"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<tab>"})," to select, ",(0,i.jsx)(n.code,{children:"<shift>-<tab>"})," to deselect to ",(0,i.jsx)(n.em,{children:"quickfix list"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<enter>"})," to pop quickfix list"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:":cfdo %s/pattern/string/g"})," to replace all instances in ",(0,i.jsx)(n.em,{children:"quickfix list"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"2-reference",children:"2. Reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://elliotec.com/how-to-find-and-replace-in-project-with-vim/",children:"elliotec | How to Find and Replace Project-wide in Vim"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(96540);const r={},l=i.createContext(r);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);