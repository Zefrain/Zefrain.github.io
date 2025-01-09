"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6115],{59136:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"TOC/computer/system/csapp/ch10","title":"Chapter 10. System-Level I/O","description":"Section 10.5 Robust Reading and Writing with the RIO Package","source":"@site/docs/TOC/computer/system/csapp/ch10.md","sourceDirName":"TOC/computer/system/csapp","slug":"/TOC/computer/system/csapp/ch10","permalink":"/docs/TOC/computer/system/csapp/ch10","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Chapter 9. Virtual Memory","permalink":"/docs/TOC/computer/system/csapp/ch09/"},"next":{"title":"Chapter 11 Network Programming","permalink":"/docs/TOC/computer/system/csapp/ch11"}}');var t=r(74848),s=r(28453);const o={},c="Chapter 10. System-Level I/O",a={},d=[{value:"Section 10.5 Robust Reading and Writing with the RIO Package",id:"section-105-robust-reading-and-writing-with-the-rio-package",level:2},{value:"10.5.1 <code>RIO</code> Unbuffered Input and Output Functions",id:"1051-rio-unbuffered-input-and-output-functions",level:3},{value:"10.5.2 <code>RIO</code> Buffered Input Functions",id:"1052-rio-buffered-input-functions",level:3},{value:"10.8 Sharing Files",id:"108-sharing-files",level:2}];function l(n){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"chapter-10-system-level-io",children:"Chapter 10. System-Level I/O"})}),"\n",(0,t.jsx)(e.h2,{id:"section-105-robust-reading-and-writing-with-the-rio-package",children:"Section 10.5 Robust Reading and Writing with the RIO Package"}),"\n",(0,t.jsxs)(e.h3,{id:"1051-rio-unbuffered-input-and-output-functions",children:["10.5.1 ",(0,t.jsx)(e.code,{children:"RIO"})," Unbuffered Input and Output Functions"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:'#include "csapp.h"\n\n/**\n * @brief      transfers from file to memory\n *\n * @details    transfers up to n bytes form the current file position\n *             of descriptor fd to memory location usrbuf.\n *\n * @param      fd       current file descriptor\n *             usrbuf   memory location\n *             n        bytes numberd\n *\n * @return     number of bytes transffered if OK\n *             0 on EOF\n *             -1 on error\n */\nssize_t rio_readn(int fd, void *usrbuf, size_t n);\n\n/**\n * @brief      transfers from memory to file\n *\n * @details    transfers up to n bytes from the memory location usrbuf\n *             to current file position of descriptor\n *\n * @param      fd       current file descriptor\n *             usrbuf   memory location\n *             n        bytes numberd\n *\n * @return     number of bytes transffered if OK\n *             -1 on error\n */\nssize_t rio_writen(int fd, void *usrbuf, size_t n);\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"ssize_t rio_readn(int fd, void *usrbuf, size_t n)\n{\n        size_t nleft = n;\n        ssize_t nread = 0;\n        char *bufp = usrbuf;\n\n        while(nleft > 0) {\n                if ((nread = read(fd, bufp, nleft)) < 0) {\n                        if (errno == EINTR) { /* Interrupted by sig handler return */\n                                nread = 0;    /* and call read() again */\n                        } else {\n                                return -1;\n                        }\n                } else if (nread == 0) {\n                        break;  /* EOF */\n                }\n\n                nleft -= nread;\n                bufp += nread;\n        }\n\n        return (n - nleft);     /* return >= 0 */\n}\n\n\nssize_t rio_writen(int fd, void *usrbuf, size_t n)\n{\n        size_t nleft = n;\n        ssize_t nwritten = 0;\n        char *bufp = usrbuf;\n\n        while (nleft > 0) {\n                if ((nwritten = write(fd, bufp, nleft)) <= 0) {\n                        if (errno == EINTR) { /* Interrupted by sig handler return */\n                                nwritten = 0; /* and call write() again */\n                        } else {\n                                return -1; /* errno set by write() */\n                        }\n                }\n\n                nleft -= nwritten;\n                bufp += nwritten;\n        }\n        return n;\n}\n\n"})}),"\n",(0,t.jsxs)("div",{style:{textAlign:"center"},children:[(0,t.jsx)(e.p,{children:(0,t.jsxs)(e.em,{children:["Figure 10.4 The ",(0,t.jsx)(e.code,{children:"rio_readn"})," and ",(0,t.jsx)(e.code,{children:"rio_writen"})," functions"]})}),(0,t.jsx)(e.p,{children:"Each fucntion manually restarts the read and write function if it is interrupted by the return from an application signal handler."})]}),"\n",(0,t.jsxs)(e.h3,{id:"1052-rio-buffered-input-functions",children:["10.5.2 ",(0,t.jsx)(e.code,{children:"RIO"})," Buffered Input Functions"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:'#include "csapp.h"\n\n/* return: none */\nvoid rio_readinitb(rio_t *rp, int fd);\n\n\n/*\n * return: number of bytes read if OK,\n *         0 on EOF\n *         -1 on error\n */\nssize_t rio_readlineb(rio_t *rp, void *usrbuf, size_t maxlen);\n\nssize_t rio_readnb(rio_t *rp, void *usrbuf, size_t n);\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:'#include "csapp.h"\n\nint main(int argc, char **argv)\n{\n        int n;\n        rio_t rio;\n        char buf[MAXLINE];\n\n        rio_readinitb(&rio, STDIN_FILENO);\n        while((n = rio_readlineb(&rio, buf, MAXLINE)) != 0) {\n                rio_writen(STDOUT_FILENO, buf, 0);\n        }\n}\n'})}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)(e.p,{children:(0,t.jsx)(e.em,{children:"Figure 10.5 Copying a text file from standard input to standard output"})})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"#define RIO_BUFSIZE 8192\n\ntypedef struct {\n        int   rio_fd;           /* Descriptor for this internal buf */\n        int   rio_cnt;          /* Unread bytes in internal buf */\n        char *rio_bufptr;       /* Next unread byte in internal buf */\n        char  rio_buf[RIO_BUFSIZE]; /* Internal buffer */\n} rio_t;\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"void rio_readinitb(rio_t *rp, int fd)\n{\n        rp->rio_fd = fd;\n        rp->rio_cnt = 0;\n        rp->rio_bufptr = rp->rio_buf;\n}\n"})}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)(e.p,{children:(0,t.jsxs)(e.em,{children:["Figure 10.6 A read buffer of type ",(0,t.jsx)(e.code,{children:"rio_t"})," and ",(0,t.jsx)(e.code,{children:"rio_readinitb"})," function that initalizes it"]})})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"static ssize_t rio_read(rio_t *rp, char *usrbuf, size_t n)\n{\n        int cnt;\n\n        while(rp->rio_cnt <= 0) { /* Refil if buf is empty */\n                rp->rio_cnt = read(rp->rio_fd, rp->rio_buf, sizeof(rp->rio_buf));\n\n                if (rp->rio_cnt < 0) {\n                        if (errno != EINTR) { /* Interrupted by sig hander return */\n                                return -1;\n                        }\n                } else if (rp->rio_cnt == 0) {/* EOF */\n                        return 0;\n                } else {\n                        rp->rio_bufptr = rp->rio_buf;\n                }\n        }\n\n        /* Copy min(n, rp->rio_cnt) bytes from internal buf to user buf */\n        cnt = n;\n\n        if (rp->rio_cnt <0) {\n                cnt = rp->rio_cnt;\n        }\n\n        memcpy(usrbuf, rp->rio_bufptr, cnt);\n        rp->rio_bufptr  += cnt;\n        rp->rio_cnt -= cnt;\n        return cnt;\n}\n"})}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)(e.p,{children:(0,t.jsxs)(e.em,{children:["Figure 10.7 The internal ",(0,t.jsx)(e.code,{children:"rio_read"})," function."]})})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"ssize_t rio_readlineb(rio_t *rp, void *usrbuf, size_t maxlen)\n{\n int n, rc;\n char c, *bufp = usrbuf;\n\n for (n = 1; n < maxlen; n++) {\n  if ((rc = rio_read(rp, &c, 1)) == 1) {\n   *bufp++ = c;\n   if (c == '\\n') {\n    n ++;\n    break;\n   }\n  } else if (rc == 0) {\n   if (n == 1) {\n    return 0; /* EOF, no data read*/\n   } else {\n    break; /* EOF, some data was read*/\n   }\n  } else {\n   return -1;\n  }\n }\n\n *bufp = 0;\n return n-1;\n}\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"ssize_t rio_readnb(rio_t *rp, void *usrbuf, size_t n)\n{\n size_t nleft = n;\n ssize_t nread;\n char *bufp = usrbuf;\n\n while (nleft > 0) {\n  if ((nread = rio_read(rp, bufp, nleft)) < 0) {\n   return -1;         /* errno set by read() */\n  } else if (nread == 0) {\n   break;             /* EOF */\n  }\n\n  nleft -= nread;\n  bufp += nread;\n }\n\n return (n - nleft);\n}\n"})}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)(e.p,{children:(0,t.jsxs)(e.em,{children:["Figure 10.8 The ",(0,t.jsx)(e.code,{children:"rio_readlineb"})," and ",(0,t.jsx)(e.code,{children:"rio_readnb"})," functions."]})})}),"\n",(0,t.jsx)(e.h2,{id:"108-sharing-files",children:"10.8 Sharing Files"}),"\n",(0,t.jsxs)("div",{style:{textAlign:"center"},children:[(0,t.jsx)("img",{src:r(50141).A,style:{zoom:"30%"}}),(0,t.jsx)(e.p,{children:(0,t.jsxs)(e.em,{children:["Figure 10.12 ",(0,t.jsx)(e.strong,{children:"Typical kernel data structures for open files."})," In this example, two descriptors reference distinct files. There is no sharing"]})})]}),"\n",(0,t.jsxs)("div",{style:{textAlign:"center"},children:[(0,t.jsx)("img",{src:r(29012).A,style:{zoom:"30%"}}),(0,t.jsx)(e.p,{children:(0,t.jsxs)(e.em,{children:["Figure 10.13 ",(0,t.jsx)(e.strong,{children:"File sharing"}),". This example shows two descriptors sharing the same disk file through two open file table entries."]})})]}),"\n",(0,t.jsxs)("div",{style:{textAlign:"center"},children:[(0,t.jsx)("img",{src:r(78923).A,style:{zoom:"30%"}}),(0,t.jsx)(e.p,{children:(0,t.jsxs)(e.em,{children:["Figure 10.14 ",(0,t.jsx)(e.strong,{children:"How a child process inherits the parent's open files."})," The initial situation is in Figure 10.12."]})})]})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},50141:(n,e,r)=>{r.d(e,{A:()=>i});const i=r.p+"assets/images/fig10.12-63f2e77e5f5882b06eebeaabafd654c6.png"},29012:(n,e,r)=>{r.d(e,{A:()=>i});const i=r.p+"assets/images/fig10.13-9fc4e000ce2b29a2bf45a8e8fa946761.png"},78923:(n,e,r)=>{r.d(e,{A:()=>i});const i=r.p+"assets/images/fig10.14-9ab57c3981aae2fb5c450a9c4c8a42c4.png"},28453:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>c});var i=r(96540);const t={},s=i.createContext(t);function o(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);