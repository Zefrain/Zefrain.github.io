"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[502],{7007:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>S,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=t(74848),_=t(28453);const i={title:"Useful Macro that can be a template",tags:["c","macro"]},r=void 0,o={permalink:"/blog/2023/01/14/useful-macro",source:"@site/blog/2023/01-14-useful-macro.md",title:"Useful Macro that can be a template",description:"",date:"2023-01-14T00:00:00.000Z",tags:[{inline:!0,label:"c",permalink:"/blog/tags/c"},{inline:!0,label:"macro",permalink:"/blog/tags/macro"}],readingTime:.92,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Useful Macro that can be a template",tags:["c","macro"]},unlisted:!1,prevItem:{title:"How to associate assembly code to exact line in C program?",permalink:"/blog/2023/01/15/objdump-C-line"},nextItem:{title:"How to copy to clipboard in Vim?",permalink:"/blog/2023/01/11/vim-copy-to-clipboard"}},s={authorsImageUrls:[]},m=[];function c(e){const n={code:"code",pre:"pre",...(0,_.R)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"#define SYSCALL_DEFINE(name) static inline long SYSC_##name\n#define SYSCALL_DEFINE0(name)\t   asmlinkage long sys_##name(void)\n#define SYSCALL_DEFINE1(name, ...) SYSCALL_DEFINEx(1, _##name, __VA_ARGS__)\n#define SYSCALL_DEFINE2(name, ...) SYSCALL_DEFINEx(2, _##name, __VA_ARGS__)\n#define SYSCALL_DEFINE3(name, ...) SYSCALL_DEFINEx(3, _##name, __VA_ARGS__)\n#define SYSCALL_DEFINE4(name, ...) SYSCALL_DEFINEx(4, _##name, __VA_ARGS__)\n#define SYSCALL_DEFINE5(name, ...) SYSCALL_DEFINEx(5, _##name, __VA_ARGS__)\n#define SYSCALL_DEFINE6(name, ...) SYSCALL_DEFINEx(6, _##name, __VA_ARGS__)\n\n\n/*\n * Example\n */\n\n/**\n * sys_sched_setparam - set/change the RT priority of a thread\n * @pid: the pid in question.\n * @param: structure containing the new RT priority.\n */\nSYSCALL_DEFINE2(sched_setparam, pid_t, pid, struct sched_param __user *, param)\n{\n\treturn do_sched_setscheduler(pid, -1, param);\n}\n\n#define SYSCALL_DEFINE(name) static inline long SYSC_##name\n#define SYSCALL_DEFINE0(name)\t   asmlinkage long sys_##name(void)\n#define SYSCALL_DEFINE1(name, ...) SYSCALL_DEFINEx(1, _##name, __VA_ARGS__)\n#define SYSCALL_DEFINE2(name, ...) SYSCALL_DEFINEx(2, _##name, __VA_ARGS__)\n#define SYSCALL_DEFINE3(name, ...) SYSCALL_DEFINEx(3, _##name, __VA_ARGS__)\n#define SYSCALL_DEFINE4(name, ...) SYSCALL_DEFINEx(4, _##name, __VA_ARGS__)\n#define SYSCALL_DEFINE5(name, ...) SYSCALL_DEFINEx(5, _##name, __VA_ARGS__)\n#define SYSCALL_DEFINE6(name, ...) SYSCALL_DEFINEx(6, _##name, __VA_ARGS__)\n\n\n/*\n * Example\n */\n\n/**\n * sys_sched_setparam - set/change the RT priority of a thread\n * @pid: the pid in question.\n * @param: structure containing the new RT priority.\n */\nSYSCALL_DEFINE2(sched_setparam, pid_t, pid, struct sched_param __user *, param)\n{\n\treturn do_sched_setscheduler(pid, -1, param);\n}\n\n"})})}function S(e={}){const{wrapper:n}={...(0,_.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(96540);const _={},i=a.createContext(_);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(_):e.components||_:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);