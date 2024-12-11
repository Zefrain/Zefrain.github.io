"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9806],{60306:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(74848),i=r(28453);const l={title:"Set Firewall for ZeroTier Interface",tags:["openwrt","uci","firewall"]},a="Set Firewall for Zerotier Interface",o={permalink:"/blog/2024/11/29/openwrt-firewall",source:"@site/blog/2024/11-29-openwrt-firewall.md",title:"Set Firewall for ZeroTier Interface",description:"0. Check interface name of zerotier",date:"2024-11-29T00:00:00.000Z",tags:[{inline:!0,label:"openwrt",permalink:"/blog/tags/openwrt"},{inline:!0,label:"uci",permalink:"/blog/tags/uci"},{inline:!0,label:"firewall",permalink:"/blog/tags/firewall"}],readingTime:1.075,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Set Firewall for ZeroTier Interface",tags:["openwrt","uci","firewall"]},unlisted:!1,prevItem:{title:"How to Find and Replace Project-wide in Vim",permalink:"/blog/2024/12/10/vim-multi-replace"},nextItem:{title:"Aria2 OSSL_PROVIDER_load 'legacy' failed",permalink:"/blog/2024/11/24/aria2-legacy"}},c={authorsImageUrls:[]},s=[{value:"0. Check interface name of zerotier",id:"0-check-interface-name-of-zerotier",level:2},{value:"1. Add zone",id:"1-add-zone",level:2},{value:"2. Add rule",id:"2-add-rule",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"0-check-interface-name-of-zerotier",children:"0. Check interface name of zerotier"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"root@ImmortalWrt:~# zerotier-cli listnetworks\n200 listnetworks <nwid> <name> <mac> <status> <type> <dev> <ZT assigned ips>\n200 listnetworks 565799d8f6d8da8f furious_draper 8e:da:a0:99:f2:2c OK PUBLIC ztr2qucatz 192.168.168.168/24\n\n\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"ztr2qucatz"})," is the interface name that we need to use later"]}),"\n",(0,n.jsx)(t.h2,{id:"1-add-zone",children:"1. Add zone"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# Add a new zone for ZeroTier\nuci add firewall zone\nuci set firewall.@zone[-1].name='zerotier'          # Set the zone name to 'zerotier' (can be any name you choose)\nuci set firewall.@zone[-1].network='ztr2qucatz'     # Set the network to the ZeroTier interface (ztr2qucatz)\nuci set firewall.@zone[-1].input='ACCEPT'           # Allow incoming traffic\nuci set firewall.@zone[-1].output='ACCEPT'          # Allow outgoing traffic\nuci set firewall.@zone[-1].forward='ACCEPT'         # Allow forwarding traffic (if needed)\nuci commit firewall\n/etc/init.d/firewall restart\n"})}),"\n",(0,n.jsx)(t.h2,{id:"2-add-rule",children:"2. Add rule"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# Allow all traffic from the zerotier zone to the lan zone\nuci add firewall rule\nuci set firewall.@rule[-1].name='Allow-Zerotier'               # Name for this rule\nuci set firewall.@rule[-1].src='zerotier'                      # Source is the zerotier zone (the name of zone just created)\nuci set firewall.@rule[-1].dest='lan'                          # Destination is the LAN zone (adjust if necessary)\nuci set firewall.@rule[-1].target='ACCEPT'                     # Allow the traffic\nuci set firewall.@rule[-1].family='ipv4'                       # Use IPv4 (you can set 'ipv6' or 'both' if needed)\nuci set firewall.@rule[-1].dest_port='80 22 445 139 8083 4000' # Specify service port need to be allowed\nuci commit firewall\n/etc/init.d/firewall restart\n"})})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(96540);const i={},l=n.createContext(i);function a(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);