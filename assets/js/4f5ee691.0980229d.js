"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2580],{87381:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var n=t(74848),a=t(28453);const s={},r="The Google File System",l={id:"TOC/computer/Distributed_System/01 gfs",title:"The Google File System",description:"2. DESIGN OVERVIEW",source:"@site/docs/TOC/computer/Distributed_System/01 gfs.md",sourceDirName:"TOC/computer/Distributed_System",slug:"/TOC/computer/Distributed_System/01 gfs",permalink:"/docs/TOC/computer/Distributed_System/01 gfs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Distributed System",permalink:"/docs/category/distributed-system"},next:{title:"Bigtable: A Distributed Storage System for Structured Data",permalink:"/docs/TOC/computer/Distributed_System/02 bigtable"}},c={},o=[{value:"2. DESIGN OVERVIEW",id:"2-design-overview",level:2},{value:"2.3 Architecture",id:"23-architecture",level:3},{value:"2.6 Metadata",id:"26-metadata",level:3},{value:"3. SYSTEM INTERACTIONS",id:"3-system-interactions",level:2},{value:"3.1 Leases and Mutation Order",id:"31-leases-and-mutation-order",level:3},{value:"3.3 Atomic Record Appends",id:"33-atomic-record-appends",level:3},{value:"3.4 Snapshot",id:"34-snapshot",level:3},{value:"4. MASTER OPERATION",id:"4-master-operation",level:2},{value:"4.1 Namespace Management and Locking",id:"41-namespace-management-and-locking",level:3},{value:"4.2 Replica Placement",id:"42-replica-placement",level:3},{value:"4.3 Creation, Re-replication, Rebalancing",id:"43-creation-re-replication-rebalancing",level:3},{value:"4.4 Garbage Collection",id:"44-garbage-collection",level:3},{value:"4.4.1 Mechanism",id:"441-mechanism",level:4},{value:"4.5 Stale Replica Detection",id:"45-stale-replica-detection",level:3},{value:"5. FAULT TOLERANCE AND DIAGNOSIS",id:"5-fault-tolerance-and-diagnosis",level:2},{value:"5.1 High Availability",id:"51-high-availability",level:3},{value:"5.1.1 Fast Recovery",id:"511-fast-recovery",level:4},{value:"5.1.2 Chunk Replication",id:"512-chunk-replication",level:4},{value:"5.1.3 Master Replication",id:"513-master-replication",level:4},{value:"5.2 Data Integrity",id:"52-data-integrity",level:3},{value:"5.3 Diagnostic Tools",id:"53-diagnostic-tools",level:3}];function d(e){const i={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"the-google-file-system",children:"The Google File System"})}),"\n",(0,n.jsx)(i.h2,{id:"2-design-overview",children:"2. DESIGN OVERVIEW"}),"\n",(0,n.jsx)(i.h3,{id:"23-architecture",children:"2.3 Architecture"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"image-20230313223721219",src:t(83990).A+"",width:"1134",height:"509"})}),"\n",(0,n.jsx)(i.h3,{id:"26-metadata",children:"2.6 Metadata"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"the file and chunk namespaces"}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"the mapping from files to chunks"}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"the locations of each chunk's replicas"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"image-20230313224446860",src:t(25681).A+"",width:"629",height:"575"})}),"\n",(0,n.jsx)(i.h2,{id:"3-system-interactions",children:"3. SYSTEM INTERACTIONS"}),"\n",(0,n.jsx)(i.h3,{id:"31-leases-and-mutation-order",children:"3.1 Leases and Mutation Order"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"The client ask for server holds the current lease for the chunk and the locations of the other replicas."}),"\n",(0,n.jsx)(i.li,{children:"The master replies with the identity of the primary and the locations of the other replicas."}),"\n",(0,n.jsx)(i.li,{children:"The client pushes the data to all the replicas."}),"\n",(0,n.jsx)(i.li,{children:"Once all the replicas have acknowledged receiving the data, the client sends a write request to the primary."}),"\n",(0,n.jsx)(i.li,{children:"The primary forwards the write request to all secondary replicas."}),"\n",(0,n.jsx)(i.li,{children:"The secondaries all reply to the primary indicating that they have completed the operation."}),"\n",(0,n.jsx)(i.li,{children:"The primary replies to the client."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"33-atomic-record-appends",children:"3.3 Atomic Record Appends"}),"\n",(0,n.jsx)(i.p,{children:"GFS appends it to the file at least once atomically (i.e., as one continuous sequence of bytes) at an offset of GFS's choosing and returns that offset to the client."}),"\n",(0,n.jsx)(i.h3,{id:"34-snapshot",children:"3.4 Snapshot"}),"\n",(0,n.jsx)(i.p,{children:"The snapshot operation makes a copy of a file or a directory tree almost instantaneously, while minimizing any interruptions of ongoing mutations."}),"\n",(0,n.jsx)(i.h2,{id:"4-master-operation",children:"4. MASTER OPERATION"}),"\n",(0,n.jsx)(i.h3,{id:"41-namespace-management-and-locking",children:"4.1 Namespace Management and Locking"}),"\n",(0,n.jsx)(i.p,{children:"GFS logically represents its namespace as a lookup table mapping full pathnames to metadata."}),"\n",(0,n.jsx)(i.p,{children:"Each master operation acquires a set of locks before it runs."}),"\n",(0,n.jsxs)(i.p,{children:["multiple file creations can be executed concurrently in the same director: each acquires ",(0,n.jsx)(i.strong,{children:"a read lock on the directory name"})," and ",(0,n.jsx)(i.strong,{children:"a write lock on the file name"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"42-replica-placement",children:"4.2 Replica Placement"}),"\n",(0,n.jsx)(i.p,{children:"The chunk replica placement policy serves two purposes: maximize data reliability and availability, and maximize network bandwidth utilization."}),"\n",(0,n.jsx)(i.h3,{id:"43-creation-re-replication-rebalancing",children:"4.3 Creation, Re-replication, Rebalancing"}),"\n",(0,n.jsx)(i.p,{children:"master considers:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"place new replicas on chunkservers with below-average disk space utilization."}),"\n",(0,n.jsx)(i.li,{children:'limit the number of "recent" creations on each chunkserver.'}),"\n",(0,n.jsx)(i.li,{children:"spread replicas of a chunk across racks."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"44-garbage-collection",children:"4.4 Garbage Collection"}),"\n",(0,n.jsx)(i.p,{children:"GFS dose not immediately reclaim the available physical storage after a file is deleted"}),"\n",(0,n.jsx)(i.h4,{id:"441-mechanism",children:"4.4.1 Mechanism"}),"\n",(0,n.jsx)(i.p,{children:"the file is deleted is just renamed to a hidden name that includes the deletion timestamp. The master removes any such hidden files existed for specified times during the master's regular scan of the file system."}),"\n",(0,n.jsx)(i.h3,{id:"45-stale-replica-detection",children:"4.5 Stale Replica Detection"}),"\n",(0,n.jsxs)(i.p,{children:["the master maintains a ",(0,n.jsx)(i.em,{children:"chunk version number"})," to distinguish between up-to-date and stale replicas."]}),"\n",(0,n.jsx)(i.p,{children:"The master removes stale replicas in its regular garbage collection."}),"\n",(0,n.jsx)(i.h2,{id:"5-fault-tolerance-and-diagnosis",children:"5. FAULT TOLERANCE AND DIAGNOSIS"}),"\n",(0,n.jsx)(i.h3,{id:"51-high-availability",children:"5.1 High Availability"}),"\n",(0,n.jsx)(i.h4,{id:"511-fast-recovery",children:"5.1.1 Fast Recovery"}),"\n",(0,n.jsx)(i.p,{children:"Both the master and the chunkserver are designed to restore their state and start in seconds no matter how they terminated."}),"\n",(0,n.jsx)(i.h4,{id:"512-chunk-replication",children:"5.1.2 Chunk Replication"}),"\n",(0,n.jsx)(i.p,{children:"each chunk is replicated on multiple chunkservers on different racks."}),"\n",(0,n.jsx)(i.h4,{id:"513-master-replication",children:"5.1.3 Master Replication"}),"\n",(0,n.jsx)(i.p,{children:"Its operation log and checkpoints are replicated on multiple machines."}),"\n",(0,n.jsx)(i.h3,{id:"52-data-integrity",children:"5.2 Data Integrity"}),"\n",(0,n.jsx)(i.p,{children:"can recover from corruption using other chunk replicas, but impractical to detect corruption by comparing replicas across chunkservers. do not guarantee identical replicas."}),"\n",(0,n.jsx)(i.p,{children:"before a write overwrites an existing range of the chunk, must read and verify the first and last blocks of the range being overwritten."}),"\n",(0,n.jsx)(i.p,{children:"chunkservers can scan and verify the contents of inactive chunks during idle periods."}),"\n",(0,n.jsx)(i.h3,{id:"53-diagnostic-tools",children:"5.3 Diagnostic Tools"}),"\n",(0,n.jsx)(i.p,{children:"The RPC logs include the exact requests and responses sent on the wire, except for the file data being read or written."})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},83990:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/image-20230313223721219-4efc9accaf15a341e595de8606c915e0.png"},25681:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/image-20230313224446860-acc061bc0c727307dcbf5d5cd0734352.png"},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>l});var n=t(96540);const a={},s=n.createContext(a);function r(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);