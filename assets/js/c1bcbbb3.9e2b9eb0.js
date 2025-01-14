"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7555],{6433:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"TOC/computer/system/csapp/ch08","title":"Chapter 8 Exceptional Control Flow","description":"8.1 Exceptions","source":"@site/docs/TOC/computer/system/csapp/ch08.md","sourceDirName":"TOC/computer/system/csapp","slug":"/TOC/computer/system/csapp/ch08","permalink":"/docs/TOC/computer/system/csapp/ch08","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Chapter 7 Linking","permalink":"/docs/TOC/computer/system/csapp/ch07"},"next":{"title":"Chapter 9. Virtual Memory","permalink":"/docs/TOC/computer/system/csapp/ch09/"}}');var r=n(74848),i=n(28453);const l={},c="Chapter 8 Exceptional Control Flow",a={},d=[{value:"8.1 Exceptions",id:"81-exceptions",level:2},{value:"81.1 Exception Handling",id:"811-exception-handling",level:3},{value:"8.1.2 Classes of Exceptions",id:"812-classes-of-exceptions",level:3},{value:"Traps and System Calls",id:"traps-and-system-calls",level:4},{value:"Faults",id:"faults",level:4},{value:"Aborts",id:"aborts",level:4},{value:"8.1.3 Exceptions in Linux/x86-64 Systems",id:"813-exceptions-in-linuxx86-64-systems",level:3},{value:"Linux/x864-64 Faults and Aborts",id:"linuxx864-64-faults-and-aborts",level:4},{value:"Linux/x86-64 System Calls",id:"linuxx86-64-system-calls",level:4},{value:"8.2 Processes",id:"82-processes",level:2},{value:"8.2.1 Logical Control Flow",id:"821-logical-control-flow",level:3},{value:"8.2.2 Concurrent Flows",id:"822-concurrent-flows",level:3},{value:"Practice Problem 8.1",id:"practice-problem-81",level:4},{value:"8.2.3 Private Address Space",id:"823-private-address-space",level:3},{value:"8.2.4 User and Kernel Modes",id:"824-user-and-kernel-modes",level:3},{value:"8.2.5 Context Switches",id:"825-context-switches",level:3}];function h(e){const s={annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mrow:"mrow",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"chapter-8-exceptional-control-flow",children:"Chapter 8 Exceptional Control Flow"})}),"\n",(0,r.jsx)(s.h2,{id:"81-exceptions",children:"8.1 Exceptions"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"image-20230402170243542",src:n(85296).A+"",width:"510",height:"261"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Figure 8.1 Anatomy of an exception."})}),"\n",(0,r.jsx)(s.h3,{id:"811-exception-handling",children:"81.1 Exception Handling"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"image-20230402170658699",src:n(99271).A+"",width:"396",height:"259"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Figure 8.2 Exception table"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"image-20230402170718419",src:n(46138).A+"",width:"552",height:"126"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Figure 8.3 Generating the address of an exception handler."})}),"\n",(0,r.jsx)(s.h3,{id:"812-classes-of-exceptions",children:"8.1.2 Classes of Exceptions"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Class"}),(0,r.jsx)(s.th,{children:"Cause"}),(0,r.jsx)(s.th,{children:"Async/sync"}),(0,r.jsx)(s.th,{children:"Return behavior"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Interrupt"}),(0,r.jsx)(s.td,{children:"Signal from I/O device"}),(0,r.jsx)(s.td,{children:"Async"}),(0,r.jsx)(s.td,{children:"Always returns to next instruction"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Trap"}),(0,r.jsx)(s.td,{children:"Intentional exception"}),(0,r.jsx)(s.td,{children:"Sync"}),(0,r.jsx)(s.td,{children:"Always returns to next instruction"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Fault"}),(0,r.jsx)(s.td,{children:"Potentially recoverable error"}),(0,r.jsx)(s.td,{children:"Sync"}),(0,r.jsx)(s.td,{children:"Might return to current instruction"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Abort"}),(0,r.jsx)(s.td,{children:"Nonrecoverable error"}),(0,r.jsx)(s.td,{children:"Sync"}),(0,r.jsx)(s.td,{children:"Never returns"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Figure 8.4 Classes of exceptions."})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"image-20230402170933322",src:n(53562).A+"",width:"544",height:"220"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Figure 8.5 Interrupt handling."})}),"\n",(0,r.jsx)(s.p,{children:"returns control the next instruction in the application program's control flow."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"image-20230402170950341",src:n(90956).A+"",width:"553",height:"197"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Figure 8.6 Trap handling."})}),"\n",(0,r.jsx)(s.h4,{id:"traps-and-system-calls",children:"Traps and System Calls"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"Traps"})," are ",(0,r.jsx)(s.em,{children:"intentional"})," exceptions as a result of executing an instruction."]}),"\n",(0,r.jsx)(s.p,{children:"System calls are interfaces for user-space to access kernel-space resources."}),"\n",(0,r.jsx)(s.h4,{id:"faults",children:"Faults"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"image-20230402171914650",src:n(58018).A+"",width:"565",height:"174"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Figure 8.7 Fault handling."})}),"\n",(0,r.jsx)(s.p,{children:"Faults result from error conditions that a handler might be able to correct."}),"\n",(0,r.jsx)(s.h4,{id:"aborts",children:"Aborts"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"image-20230402171932530",src:n(78467).A+"",width:"566",height:"162"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Figure 8.8 Abort handling."})}),"\n",(0,r.jsxs)(s.p,{children:["Aborts result from ",(0,r.jsx)(s.strong,{children:"unrecoverable"})," fatal errors."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Exceptionnumber"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"Exceptionclass"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"Divideerror"}),(0,r.jsx)(s.td,{children:"Fault"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"13"}),(0,r.jsx)(s.td,{children:"Generalprotectionfault"}),(0,r.jsx)(s.td,{children:"Fault"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"14"}),(0,r.jsx)(s.td,{children:"Pagefault"}),(0,r.jsx)(s.td,{children:"Fault"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"18"}),(0,r.jsx)(s.td,{children:"Machinecheck"}),(0,r.jsx)(s.td,{children:"Abort"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"32-255"}),(0,r.jsx)(s.td,{children:"OS-definedexceptions"}),(0,r.jsx)(s.td,{children:"Interruptortrap"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Figure 8.9 Examples of exceptions in x86-64 systems."})}),"\n",(0,r.jsx)(s.h3,{id:"813-exceptions-in-linuxx86-64-systems",children:"8.1.3 Exceptions in Linux/x86-64 Systems"}),"\n",(0,r.jsx)(s.h4,{id:"linuxx864-64-faults-and-aborts",children:"Linux/x864-64 Faults and Aborts"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:"Divide error"}),". occurs when ",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsx)(s.mrow,{children:(0,r.jsxs)(s.mfrac,{children:[(0,r.jsx)(s.mi,{children:"x"}),(0,r.jsx)(s.mn,{children:"0"})]})}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\frac{x}{0}"})]})})}),(0,r.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1.0404em",verticalAlign:"-0.345em"}}),(0,r.jsxs)(s.span,{className:"mord",children:[(0,r.jsx)(s.span,{className:"mopen nulldelimiter"}),(0,r.jsx)(s.span,{className:"mfrac",children:(0,r.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,r.jsxs)(s.span,{className:"vlist-r",children:[(0,r.jsxs)(s.span,{className:"vlist",style:{height:"0.6954em"},children:[(0,r.jsxs)(s.span,{style:{top:"-2.655em"},children:[(0,r.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,r.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,r.jsx)(s.span,{className:"mord mtight",children:(0,r.jsx)(s.span,{className:"mord mtight",children:"0"})})})]}),(0,r.jsxs)(s.span,{style:{top:"-3.23em"},children:[(0,r.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,r.jsx)(s.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,r.jsxs)(s.span,{style:{top:"-3.394em"},children:[(0,r.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,r.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,r.jsx)(s.span,{className:"mord mtight",children:(0,r.jsx)(s.span,{className:"mord mathnormal mtight",children:"x"})})})]})]}),(0,r.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,r.jsx)(s.span,{className:"vlist-r",children:(0,r.jsx)(s.span,{className:"vlist",style:{height:"0.345em"},children:(0,r.jsx)(s.span,{})})})]})}),(0,r.jsx)(s.span,{className:"mclose nulldelimiter"})]})]})})]}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:"General protection fault"}),". refernce an undefined area of virtual memory or attempts to write to a read-only text segment."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:"Page fault"}),". the faulting instruction is restarted."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:"Machine check"}),". fatal hardware error"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"linuxx86-64-system-calls",children:"Linux/x86-64 System Calls"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-c",children:'int main()\n{\n        write(1, "hello world\\n", 13);\n        _exit(0);\n}\n'})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-assembly",children:'.section .data\nstring:\n        .ascii "hello, world\\n"\nstring_end:\n        .equ len, string_end - string\n.section .text\n.global main\nmain:\n        ;; First, call write (1, "hello, world\\n", 13);\n        movq $1, %rax           ; write is system call 1\n        movq $1, %rdi           ; Arg1: stdout has descriptor 1\n        movq $string, %rsi      ; Arg2: hello, world string\n        movq $len, %rdx         ; Arg3: string length\n        syscall                 ; Make the system call\n\n        ;; Next, call _exit(0)\n        movq $60, %rax          ; _exit is system call 60\n        movq $0, %rdi           ; Arg1: exit status is 0\n        syscall                 ; Make the system call\n\n'})}),"\n",(0,r.jsx)(s.h2,{id:"82-processes",children:"8.2 Processes"}),"\n",(0,r.jsx)(s.h3,{id:"821-logical-control-flow",children:"8.2.1 Logical Control Flow"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"image-20230402172446288",src:n(90802).A+"",width:"445",height:"199"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Figure 8.12 Logical control flows."})}),"\n",(0,r.jsx)(s.h3,{id:"822-concurrent-flows",children:"8.2.2 Concurrent Flows"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"multitasking"})}),"\n",(0,r.jsx)(s.h4,{id:"practice-problem-81",children:"Practice Problem 8.1"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Process"}),(0,r.jsx)(s.th,{children:"Start time"}),(0,r.jsx)(s.th,{children:"End time"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"A"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"B"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"4"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"C"}),(0,r.jsx)(s.td,{children:"3"}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Process pair"}),(0,r.jsx)(s.th,{children:"Concurrent?"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"AB"}),(0,r.jsx)(s.td,{children:"Y"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"AC"}),(0,r.jsx)(s.td,{children:"N"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"BC"}),(0,r.jsx)(s.td,{children:"Y"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"823-private-address-space",children:"8.2.3 Private Address Space"}),"\n",(0,r.jsx)(s.p,{children:"exclusive space for each program."}),"\n",(0,r.jsx)(s.h3,{id:"824-user-and-kernel-modes",children:"8.2.4 User and Kernel Modes"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"image-20230402173307741",src:n(99433).A+"",width:"531",height:"494"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Figure 8.13 Process address space"})}),"\n",(0,r.jsxs)(s.p,{children:["Processors provide capability with a ",(0,r.jsx)(s.em,{children:"mode"})," bit, when it is not set, process is running in ",(0,r.jsx)(s.em,{children:"user"})," mode, otherwise it is running in ",(0,r.jsx)(s.em,{children:"kernel"})," mode."]}),"\n",(0,r.jsxs)(s.p,{children:["A process in user mode is not allowed to execute ",(0,r.jsx)(s.em,{children:"privileged instructions"})]}),"\n",(0,r.jsx)(s.h3,{id:"825-context-switches",children:"8.2.5 Context Switches"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"image-20230402173356103",src:n(29555).A+"",width:"566",height:"215"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Figure 8.14 Anatomy of a process context switch."})}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"saves the context of the current process,"}),"\n",(0,r.jsx)(s.li,{children:"restore the saved context of some previously preempted process,"}),"\n",(0,r.jsx)(s.li,{children:"passes control to this newly restored process."}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("brachiopodist",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:'the remaining content is just the same as "Advanced Programming in the UNIX Environment"'})})]})}function o(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85296:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/image-20230402170243542-ef40101704b238aadb0235fbba663903.png"},99271:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/image-20230402170658699-8ddf134bf57c6847a689087cc686657c.png"},46138:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/image-20230402170718419-d564d7bddb0c5031af668c7549381e66.png"},53562:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/image-20230402170933322-b3a8cf579fc00f4e065afc18ec6f1fc6.png"},90956:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/image-20230402170950341-34dcaec925a6abc7f03d96f7d75e819a.png"},58018:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/image-20230402171914650-83c0f02cd842c8860587165e857ae8f2.png"},78467:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/image-20230402171932530-9f511824b3ef1cb6bdbb12af09895f2c.png"},90802:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/image-20230402172446288-5a528db99ea1948de791107fe2a1194f.png"},99433:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/image-20230402173307741-00760bfade90528729f397c8e3d474c0.png"},29555:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/image-20230402173356103-aedf68241081c8bc4a1705d70ce7b6ad.png"},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>c});var t=n(96540);const r={},i=t.createContext(r);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);