"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[215],{21544:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=t(74848),r=t(28453);const s={Title:"expand partition mounted /",Tags:["systemctl","partition"]},a="Manually expand partition scripts",d={permalink:"/blog/2024/05/21/auto-expand-partition",source:"@site/blog/2024/05-21-auto-expand-partition.md",title:"Manually expand partition scripts",description:"find partition for /",date:"2024-05-21T00:00:00.000Z",tags:[],readingTime:1.465,hasTruncateMarker:!0,authors:[],frontMatter:{Title:"expand partition mounted /",Tags:["systemctl","partition"]},unlisted:!1,prevItem:{title:"\u5728\u786c\u76d8\u4e0a\u8fd0\u884c\u865a\u62df\u673a\u7cfb\u7edf",permalink:"/blog/2024/06/07/vmdk2img"},nextItem:{title:"Set netplan configuration",permalink:"/blog/2024/05/20/HOWTO-configure-network-on-ubuntu"}},o={authorsImageUrls:[]},l=[{value:"find partition for /",id:"find-partition-for-",level:2},{value:"split disk and partition number",id:"split-disk-and-partition-number",level:2},{value:"resize2fs",id:"resize2fs",level:2},{value:"1. write go code",id:"1-write-go-code",level:2},{value:"2. build",id:"2-build",level:2},{value:"3. write system service <code>expand_disk.service</code>",id:"3-write-system-service-expand_diskservice",level:2},{value:"4. enable service",id:"4-enable-service",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"find-partition-for-",children:"find partition for /"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"findmnt -nosource /\n\n/dev/sda3\n"})}),"\n",(0,i.jsx)(n.h2,{id:"split-disk-and-partition-number",children:"split disk and partition number"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"growpart /dev/sda 3\n"})}),"\n",(0,i.jsx)(n.h2,{id:"resize2fs",children:"resize2fs"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"resize2fs /dev/sda3\n"})}),"\n",(0,i.jsxs)(n.h1,{id:"automatically-expand-partiton-mounted-",children:["Automatically expand partiton mounted ",(0,i.jsx)(n.code,{children:"/"})]}),"\n",(0,i.jsx)(n.h2,{id:"1-write-go-code",children:"1. write go code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"os"\n\t"os/exec"\n\t"strings"\n)\n\nfunc main() {\n\tif os.Geteuid() != 0 {\n\t\t// fmt.Println("This script must be run as root")\n\t\tos.Exit(1)\n\t}\n\n\t// Identify the device that / is mounted on\n\tout, err := exec.Command("df", "/").Output()\n\tif err != nil {\n\t\t// fmt.Println("Error running df command:", err)\n\t\tos.Exit(1)\n\t}\n\n\t// Parse the output to get the device\n\tlines := strings.Split(string(out), "\\n")\n\tif len(lines) < 2 {\n\t\t// fmt.Println("Unexpected output from df command")\n\t\tos.Exit(1)\n\t}\n\n\tfields := strings.Fields(lines[1])\n\tif len(fields) < 1 {\n\t\t// fmt.Println("Unexpected output from df command")\n\t\tos.Exit(1)\n\t}\n\n\tdevice := fields[0]\n\t// fmt.Println("Device:", device)\n\n\t// Extract the base device and partition number\n\tvar baseDevice, partNum string\n\tif strings.HasPrefix(device, "/dev/mapper/") {\n\t\tbaseDevice = strings.TrimSuffix(device, "1")\n\t\tpartNum = "1"\n\t} else {\n\t\tbaseDevice = strings.TrimRightFunc(device, func(r rune) bool {\n\t\t\treturn r >= \'0\' && r <= \'9\'\n\t\t})\n\t\tpartNum = strings.TrimPrefix(device, baseDevice)\n    \n\t}\n\n\t// Grow the partition\n\tif err := exec.Command("growpart", baseDevice, partNum).Run(); err != nil {\n\t\t// fmt.Println("Error running growpart command:", err)\n\t\tos.Exit(1)\n\t}\n\n\t// Resize the filesystem\n\tif err := exec.Command("resize2fs", device).Run(); err != nil {\n\t\t// fmt.Println("Error running resize2fs command:", err)\n\t\tos.Exit(1)\n\t}\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"2-build",children:"2. build"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"go mod init expand_disk\ngo mod tidy\n\nGOOS=linux GOARCH=amd64 go build .\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"3-write-system-service-expand_diskservice",children:["3. write system service ",(0,i.jsx)(n.code,{children:"expand_disk.service"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-conf",children:"[Unit]\nDescription=Expand disk partition mounted on /\nAfter=initrd-usr-fs.target\n\n[Service]\nExecStart=/usr/local/bin/expand_disk\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,i.jsx)(n.h2,{id:"4-enable-service",children:"4. enable service"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Install to system"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo cp expand_disk.service /usr/lib/system/systemd/\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Enable system"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo systemctl enable expand_disk\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var i=t(96540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);