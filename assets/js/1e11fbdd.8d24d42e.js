"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4763],{47192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var s=n(55970),i=n(74848),r=n(28453);const o={title:"Windows set time server use w32tm",tags:["windows","time"]},a="Windows set time server to sync",l={authorsImageUrls:[]},c=[];function m(e){const t={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'w32tm /config /syncfromflags:manual /reliable:yes /update /manualpeerlist:"192.168.188.188 192.168.188.168"\n\nw32tm /resync\n'})})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}},55970:e=>{e.exports=JSON.parse('{"permalink":"/blog/2023/07/30/win-timsync","source":"@site/blog/2023/07-30-win-timsync.md","title":"Windows set time server use w32tm","description":"","date":"2023-07-30T00:00:00.000Z","tags":[{"inline":true,"label":"windows","permalink":"/blog/tags/windows"},{"inline":true,"label":"time","permalink":"/blog/tags/time"}],"readingTime":0.055,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Windows set time server use w32tm","tags":["windows","time"]},"unlisted":false,"prevItem":{"title":"gdb continue until if condition hit","permalink":"/blog/2023/08/09/gdb-break-if"},"nextItem":{"title":"No module named \'charset_normalizer.md__mypyc\'","permalink":"/blog/2023/07/03/pyinstaller-requests"}}')}}]);