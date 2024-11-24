"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6750],{34078:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=r(74848),a=r(28453);const i={title:"Aria2 OSSL_PROVIDER_load 'legacy' failed",Tags:["openwrt","openssl","aria2"]},o="Openwrt Legacy OpenSsl error #2152",c={permalink:"/blog/2024/11/24/aria2-legacy",source:"@site/blog/2024/11-24-aria2-legacy.md",title:"Aria2 OSSL_PROVIDER_load 'legacy' failed",description:"/etc/init.d/aria2 add BOLD line.",date:"2024-11-24T00:00:00.000Z",tags:[],readingTime:.26,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Aria2 OSSL_PROVIDER_load 'legacy' failed",Tags:["openwrt","openssl","aria2"]},unlisted:!1,nextItem:{title:"aria2 SSL/TLS error on openwrt",permalink:"/blog/2024/10/15/aria2-ssl"}},s={authorsImageUrls:[]},l=[];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:['/etc/init.d/aria2 add BOLD line.\nprocd_add_jail "$NAME.$section" log\n',(0,t.jsx)(n.strong,{children:'procd_add_jail_mount "/usr/lib" #fix "errorCode=1 OSSL_PROVIDER_load \'legacy\' failed"'}),'\nprocd_add_jail_mount "$ca_certificate" "$certificate" "$rpc_certificate" "$rpc_private_key"\nprocd_add_jail_mount_rw "$dir" "$config_dir" "$log"\nprocd_close_instance']}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Solution:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"opkg update && opkg install openssl-legacy\n"})}),"\n",(0,t.jsx)(n.h1,{id:"reference",children:"Reference:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/aria2/aria2/issues/2152",children:"Openwrt Legacy OpenSsl error \xb7 Issue #2152 \xb7 aria2/aria2"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var t=r(96540);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);