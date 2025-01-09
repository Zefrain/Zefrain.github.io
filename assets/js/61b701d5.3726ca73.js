"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[881],{15228:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"TOC/computer/system/ostep/ch08","title":"8 Scheduling: The Multi-Level Feedback Queue","description":"8.1 MLFQ: Basic Rules","source":"@site/docs/TOC/computer/system/ostep/ch08.md","sourceDirName":"TOC/computer/system/ostep","slug":"/TOC/computer/system/ostep/ch08","permalink":"/docs/TOC/computer/system/ostep/ch08","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"7 Scheduling: Introduction","permalink":"/docs/TOC/computer/system/ostep/ch07"},"next":{"title":"9 Scheduling: Proportional Share","permalink":"/docs/TOC/computer/system/ostep/ch09"}}');var n=s(74848),r=s(28453);const o={},l="8 Scheduling: The Multi-Level Feedback Queue",u={},c=[{value:"8.1 MLFQ: Basic Rules",id:"81-mlfq-basic-rules",level:2},{value:"8.2 Attempt #1: How to Change Priority",id:"82-attempt-1-how-to-change-priority",level:2},{value:"8.3 Attempt #2: The Priority Boost",id:"83-attempt-2-the-priority-boost",level:2},{value:"8.4 Attempt #3: Better Accounting",id:"84-attempt-3-better-accounting",level:2},{value:"8.5 Turning MLFQ And Other Issues",id:"85-turning-mlfq-and-other-issues",level:2},{value:"8.6 Summary",id:"86-summary",level:2}];function h(e){const t={em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"8-scheduling-the-multi-level-feedback-queue",children:"8 Scheduling: The Multi-Level Feedback Queue"})}),"\n",(0,n.jsx)(t.h2,{id:"81-mlfq-basic-rules",children:"8.1 MLFQ: Basic Rules"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Rule 1"})," : If Priority(A) > Priority(B), A runs (B doesn't)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Rule 2"})," : If Priority(A) = Priority(B), A & B run in RR"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"82-attempt-1-how-to-change-priority",children:"8.2 Attempt #1: How to Change Priority"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Rule 3"})," : When a job enters the system, it is placed at the highest priority ( the topmost queue)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Rule 4a"})," : If a job uses up an entire time slice while running, its priority is reduced"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Rule 4b"})," : If a job gives up the CPU before the time slice is up, it stays at the ",(0,n.jsx)(t.em,{children:"same"})," priority level."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"83-attempt-2-the-priority-boost",children:"8.3 Attempt #2: The Priority Boost"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Rule 5"})," : After some time period ",(0,n.jsx)(t.em,{children:"S"}),", move all the jobs in the system to the topmost queue."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"84-attempt-3-better-accounting",children:"8.4 Attempt #3: Better Accounting"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Rule 4"})," : Once a job uses up its time allotment at a given level (regardless of how many times it has given up the CPU), its priority is reduced (i.e, it moves down one queue)"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"85-turning-mlfq-and-other-issues",children:"8.5 Turning MLFQ And Other Issues"}),"\n",(0,n.jsxs)(t.p,{children:["how to ",(0,n.jsx)(t.strong,{children:"parameterize"})," such a scheduler."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"how many queues should there be ?"}),"\n",(0,n.jsx)(t.li,{children:"how big should the time slice per queue?"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"allow for varying time-slice length across different queues."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"how often should priority be boosted in order to avoid starvation and account for changes in behavior?"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Time-Sharing scheduling class, it provides a set of tables that determines different parameters"}),"\n",(0,n.jsx)(t.h2,{id:"86-summary",children:"8.6 Summary"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Rule 1"})," : If Priority(A) > Priority(B), A runs (B doesn't)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Rule 2"})," : If Priority(A) = Priority(B), A & B run in RR"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Rule 3"})," : When a job enters the system, it is placed at the highest priority ( the topmost queue)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Rule 4"})," : Once a job uses up its time allotment at a given level (regardless of how many times it has given up the CPU), its priority is reduced (i.e, it moves down one queue)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Rule 4"})," : Once a job uses up its time allotment at a given level (regardless of how many times it has given up the CPU), its priority is reduced (i.e, it moves down one queue)"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>l});var i=s(96540);const n={},r=i.createContext(n);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);