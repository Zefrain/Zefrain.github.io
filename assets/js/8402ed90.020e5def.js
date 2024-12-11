"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3537],{61244:(s,e,i)=>{i.r(e),i.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>o,frontMatter:()=>t,metadata:()=>r,toc:()=>h});var n=i(74848),a=i(28453);const t={},l="7 Scheduling: Introduction",r={id:"TOC/computer/system/ostep/Virtualization/ch07",title:"7 Scheduling: Introduction",description:"7.1 Workload Assumptions ##",source:"@site/docs/TOC/computer/system/ostep/Virtualization/ch07.md",sourceDirName:"TOC/computer/system/ostep/Virtualization",slug:"/TOC/computer/system/ostep/Virtualization/ch07",permalink:"/docs/TOC/computer/system/ostep/Virtualization/ch07",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"6 Mechanism: Limited Direct Execution",permalink:"/docs/TOC/computer/system/ostep/Virtualization/ch06"},next:{title:"8 Scheduling: The Multi-Level Feedback Queue",permalink:"/docs/TOC/computer/system/ostep/Virtualization/ch08"}},m={},h=[{value:"7.1 Workload Assumptions",id:"71-workload-assumptions",level:2},{value:"7.2 Scheduling Metrics",id:"72-scheduling-metrics",level:2},{value:"7.3 First In, First Out (FIFO)",id:"73-first-in-first-out-fifo",level:2},{value:"7.4 Shortest Job First (SJF)",id:"74-shortest-job-first-sjf",level:2},{value:"7.5 Shortest Time-to-Completion First (STCF)",id:"75-shortest-time-to-completion-first-stcf",level:2},{value:"7.6 A New Metric: Response Time",id:"76-a-new-metric-response-time",level:2},{value:"7.7 Round Robin",id:"77-round-robin",level:2},{value:"7.8 Incorporating I/O",id:"78-incorporating-io",level:2},{value:"7.9 No More Oracle",id:"79-no-more-oracle",level:2},{value:"7.10 Summary",id:"710-summary",level:2}];function c(s){const e={annotation:"annotation",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",msub:"msub",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"7-scheduling-introduction",children:"7 Scheduling: Introduction"})}),"\n",(0,n.jsx)(e.h2,{id:"71-workload-assumptions",children:"7.1 Workload Assumptions"}),"\n",(0,n.jsx)(e.p,{children:"a number of simplifying assumptions about the processes running in the system,\nsometimes collectively called the workload."}),"\n",(0,n.jsxs)(e.p,{children:["a ",(0,n.jsx)(e.strong,{children:"fully-operational scheduling discipline"})]}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"Each job runs for the same amount of time."}),"\n",(0,n.jsx)(e.li,{children:"All jobs arrive at the same time."}),"\n",(0,n.jsx)(e.li,{children:"Once started, each job runs to completion."}),"\n",(0,n.jsx)(e.li,{children:"All jobs only use the CPU."}),"\n",(0,n.jsx)(e.li,{children:"The run-time of each job is known."}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"72-scheduling-metrics",children:"7.2 Scheduling Metrics"}),"\n",(0,n.jsxs)(e.p,{children:["the ",(0,n.jsx)(e.strong,{children:"trunaround time"})," of a job is defined as the time at which the job completes minus the time at which the job arrived in the system."]}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"d"})]})]}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"n"})]})]}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"v"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"l"})]})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"T_{turnaround} = T_{completion} - T_{arrival}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"u"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"na"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"ro"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"u"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"d"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"co"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"m"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"pl"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"rr"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"v"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})]})]})}),"\n",(0,n.jsx)(e.h2,{id:"73-first-in-first-out-fifo",children:"7.3 First In, First Out (FIFO)"}),"\n",(0,n.jsx)(e.p,{children:"The most basic algorithm we can implement."}),"\n",(0,n.jsxs)(e.p,{children:["The problem is ",(0,n.jsx)(e.strong,{children:"convoy effect"}),", where a number of relatively-short potential consumers of resource get queued behind a heavyweight resource consumer."]}),"\n",(0,n.jsx)(e.h2,{id:"74-shortest-job-first-sjf",children:"7.4 Shortest Job First (SJF)"}),"\n",(0,n.jsx)(e.p,{children:"runs the shortest job first, then the next shortest, and so on."}),"\n",(0,n.jsx)(e.p,{children:"The problem is even though the shorter tasks (B and C) arrived shortly after the longer one (A), they still have to wait until A has completed."}),"\n",(0,n.jsx)(e.h2,{id:"75-shortest-time-to-completion-first-stcf",children:"7.5 Shortest Time-to-Completion First (STCF)"}),"\n",(0,n.jsx)(e.p,{children:"Any time a new job enters the system, the STCF scheduler determines which of the remaining jobs (including the new job) has the least time left,\nand schedules that one."}),"\n",(0,n.jsx)(e.h2,{id:"76-a-new-metric-response-time",children:"7.6 A New Metric: Response Time"}),"\n",(0,n.jsx)(e.p,{children:"the time from when the job arrives in a system to the first time it is scheduled."}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mi,{children:"e"})]})]}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"f"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mi,{children:"n"})]})]}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"T"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"v"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"l"})]})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"T_{response} = T_{firstrun} - T_{arrival}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"res"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"p"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"se"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"rs"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"u"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"rr"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"v"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})]})]})}),"\n",(0,n.jsxs)(e.p,{children:["If three jobs arrive at the same time, the third job has to wait for the previous two jobs to run ",(0,n.jsx)(e.em,{children:"in their entirely"})," before being scheduled just once."]}),"\n",(0,n.jsx)(e.h2,{id:"77-round-robin",children:"7.7 Round Robin"}),"\n",(0,n.jsxs)(e.p,{children:["The basic idea: instead of running jobs to completion, RR runs a job for a ",(0,n.jsx)(e.strong,{children:"time slice"})," (sometimes called a ",(0,n.jsx)(e.strong,{children:"scheduling quantum"})," )\nand then swithes to the next job in the run queue."]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"the length of the time slice is critical for RR."}),"\n",(0,n.jsxs)(e.li,{children:["RR is indeed one of the ",(0,n.jsx)(e.em,{children:"worst"})," policies if turnaround time is our metric.\nturnaround time only cares about when jobs finish, RR is nearly pessimal, even worse than simple FIFO in many cases."]}),"\n",(0,n.jsx)(e.li,{children:"if you are willing to be unfair, you can run shorter jobs to completion, but at the cost of response time;\nif you instead value fairness, response time is lowered, but at the cost of trunaround time."}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"switching to another job causes this state (CPU caches, TLBs, branch predictors, and other on-chip hardware) to be flushed and new state relevant to the\ncurrently-running job to be brought in may exact a noticeable performance cost."}),"\n",(0,n.jsx)(e.h2,{id:"78-incorporating-io",children:"7.8 Incorporating I/O"}),"\n",(0,n.jsxs)(e.p,{children:["allows for ",(0,n.jsx)(e.strong,{children:"overlap"}),", with the CPU being used by one process while wwwaiting for the I/O of another process to complete."]}),"\n",(0,n.jsx)(e.h2,{id:"79-no-more-oracle",children:"7.9 No More Oracle"}),"\n",(0,n.jsx)(e.p,{children:"In fact, in a general-purpose OS (like the ones we care about), the OS usually knows very little about the length of each job."}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["how can we build an approach that behaves SJF/STCF without such a ",(0,n.jsx)(e.em,{children:"priori"})," knowledge ?"]}),"\n",(0,n.jsx)(e.li,{children:"how can we incorporate some of the ideas we have seen with the RR scheduler so that response time is also good ?"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"710-summary",children:"7.10 Summary"}),"\n",(0,n.jsxs)(e.p,{children:["The scheduler is known as the ",(0,n.jsx)(e.strong,{children:"multi-level feedback queue"})]})]})}function o(s={}){const{wrapper:e}={...(0,a.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(c,{...s})}):c(s)}},28453:(s,e,i)=>{i.d(e,{R:()=>l,x:()=>r});var n=i(96540);const a={},t=n.createContext(a);function l(s){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(a):s.components||a:l(s.components),n.createElement(t.Provider,{value:e},s.children)}}}]);