"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4040],{57437:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>r,toc:()=>s});const r=JSON.parse('{"id":"TOC/computer/kernel/ldd/ch02","title":"\u7b2c\u4e8c\u7ae0 \u6784\u9020\u548c\u8fd0\u884c\u6a21\u5757","description":"Hello World","source":"@site/docs/TOC/computer/kernel/ldd/ch02.md","sourceDirName":"TOC/computer/kernel/ldd","slug":"/TOC/computer/kernel/ldd/ch02","permalink":"/docs/TOC/computer/kernel/ldd/ch02","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Linux \u8bbe\u5907\u9a71\u52a8\u7a0b\u5e8f","permalink":"/docs/category/linux-\u8bbe\u5907\u9a71\u52a8\u7a0b\u5e8f"},"next":{"title":"\u7b2c\u4e09\u7ae0 \u5b57\u7b26\u8bbe\u5907\u9a71\u52a8\u7a0b\u5e8f[^1]","permalink":"/docs/TOC/computer/kernel/ldd/ch03"}}');var t=l(74848),o=l(28453);const c={},i="\u7b2c\u4e8c\u7ae0 \u6784\u9020\u548c\u8fd0\u884c\u6a21\u5757",d={},s=[{value:"Hello World",id:"hello-world",level:2},{value:"\u5feb\u901f\u53c2\u8003",id:"\u5feb\u901f\u53c2\u8003",level:3}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u7b2c\u4e8c\u7ae0-\u6784\u9020\u548c\u8fd0\u884c\u6a21\u5757",children:"\u7b2c\u4e8c\u7ae0 \u6784\u9020\u548c\u8fd0\u884c\u6a21\u5757"})}),"\n",(0,t.jsx)(n.h2,{id:"hello-world",children:"Hello World"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"hello.c"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'/* the below headers are required for all modules */\n#include <linux/init.h>\n#include <linux/module.h>\n\n/* struct task_struct for current */\n#include <linux/sched.h>\n\n/* License statement */\nMODULE_LICENSE("GPL");\n\n/* init function */\nstatic int hello_init(void)\n{\n /* $current is the pointer of this process */\n printk(KERN_INFO "process name: %s\\n", current->comm);\n\n printk(KERN_ALERT "Hello, world\\n");\n return 0;\n}\n\n/* cleanup function */\nstatic void hello_exit(void)\n{\n printk(KERN_ALERT "Gooldbye, cruel world\\n");\n}\n\n/* init entry */\nmodule_init(hello_init);\n\n/* cleanup entry */\nmodule_exit(hello_exit);\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Makefile"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-makefile",children:"ifneq ($(KERNELRELEASE),)\n obj-m := hello.o\nelse\n KERN_DIR ?= /lib/modules/$(shell uname -r)/build\n PWD := $(shell pwd)\ndefault:\n $(MAKE) -C $(KERN_DIR) M=$(PWD) modules\nendif\n\nclean:\n rm -rf *.o *~ core .depend .*.cmd *.ko *.mod.c .tmp_versions\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u88c5\u8f7d\u4e0e\u4f7f\u7528:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"# \u88c5\u8f7d\nsudo insmod hello.ko\n\n# \u5378\u8f7d\nsudo rmmod hello\n\n# \u67e5\u770b\u8f93\u51fa\nsudo dmesg -T | grep -A 5 hello\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5feb\u901f\u53c2\u8003",children:"\u5feb\u901f\u53c2\u8003"})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>c,x:()=>i});var r=l(96540);const t={},o=r.createContext(t);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);