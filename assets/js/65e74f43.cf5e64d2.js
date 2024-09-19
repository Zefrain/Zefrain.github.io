"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3505],{34286:(e,l,o)=>{o.r(l),o.d(l,{assets:()=>a,contentTitle:()=>d,default:()=>f,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var n=o(74848),t=o(28453);const i={title:"Set up Meld as Difftool and Mergetool for Git",tags:["meld","git","difftool","meldtool"]},d=void 0,r={permalink:"/blog/2022/11/22/2022/git-diff-meld-tool",source:"@site/blog/2022/2022-11-22-git-diff-meld-tool.md",title:"Set up Meld as Difftool and Mergetool for Git",description:"Configure Meld as Default Git Tools ##",date:"2022-11-22T00:00:00.000Z",tags:[{inline:!0,label:"meld",permalink:"/blog/tags/meld"},{inline:!0,label:"git",permalink:"/blog/tags/git"},{inline:!0,label:"difftool",permalink:"/blog/tags/difftool"},{inline:!0,label:"meldtool",permalink:"/blog/tags/meldtool"}],readingTime:.715,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Set up Meld as Difftool and Mergetool for Git",tags:["meld","git","difftool","meldtool"]},unlisted:!1,prevItem:{title:"docker  modify config for running container",permalink:"/blog/2022/12/16/2022/docker-container-config"},nextItem:{title:"gdb show list",permalink:"/blog/2022/11/08/2022/gdb-showlist"}},a={authorsImageUrls:[]},s=[{value:"Configure Meld as Default Git Tools",id:"configure-meld-as-default-git-tools",level:2},{value:"Edit Config File",id:"edit-config-file",level:3},{value:"Commands for Windows and Linux",id:"commands-for-windows-and-linux",level:3}];function g(e){const l={code:"code",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h2,{id:"configure-meld-as-default-git-tools",children:"Configure Meld as Default Git Tools"}),"\n",(0,n.jsx)(l.h3,{id:"edit-config-file",children:"Edit Config File"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:(0,n.jsx)(l.code,{children:".gitconfig"})}),"\n"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-.gitconfig",children:'[merge]\n    tool = meld\n[mergetool "meld"]\n    # Choose one of these 2 lines\n    cmd = meld "$LOCAL" "$MERGED" "$REMOTE" --output "$MERGED"\n    cmd = meld "$LOCAL" "$BASE" "$REMOTE" --output "$MERGED"\n'})}),"\n",(0,n.jsx)(l.h3,{id:"commands-for-windows-and-linux",children:"Commands for Windows and Linux"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"for Windows"}),"\n"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-sh",children:'$ git config --global diff.tool meld\n$ git config --global difftool.meld.path "C:\\Program Files (x86)\\Meld\\Meld.exe"\n$ git config --global difftool.prompt false\n\n$ git config --global merge.tool meld\n$ git config --global mergetool.meld.path "C:\\Program Files (x86)\\Meld\\Meld.exe"\n$ git config --global mergetool.prompt false\n'})}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"For Linux"}),"\n"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-sh",children:'$ git config --global diff.tool meld\n$ git config --global difftool.meld.path "C:\\Program Files (x86)\\Meld\\Meld.exe"\n$ git config --global difftool.prompt false\n\n$ git config --global merge.tool meld\n$ git config --global mergetool.meld.path "C:\\Program Files (x86)\\Meld\\Meld.exe"\n$ git config --global mergetool.prompt false\n'})})]})}function f(e={}){const{wrapper:l}={...(0,t.R)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},28453:(e,l,o)=>{o.d(l,{R:()=>d,x:()=>r});var n=o(96540);const t={},i=n.createContext(t);function d(e){const l=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:l},e.children)}}}]);