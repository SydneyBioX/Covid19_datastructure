"use strict";(self.webpackChunkmultiview_dataset_downloader=self.webpackChunkmultiview_dataset_downloader||[]).push([[832],{7832:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var s=a(5043),i=a(7774),l=a(5328),n=a(8786),d=a(5766),r=a.n(d),c=a(579);const o=()=>{const[e,t]=(0,s.useState)("detail"),[a,d]=(0,s.useState)([]),[o,h]=(0,s.useState)([]);(0,s.useEffect)((()=>{fetch("/Covid19_datastructure/data/bulk_metadata.csv").then((e=>e.text())).then((e=>{r().parse(e,{header:!0,skipEmptyLines:!0,complete:e=>{d(e.data);const t=e.data.map((e=>e.level2)),a=new Set(t);h(Array.from(a))}})}))}),[]),console.log(a);const u=a.length>0?Object.keys(a[0]).map((e=>({name:e,selector:t=>t[e],sortable:!0}))):[],j=a.length>0?Object.keys(a[0]).map((e=>e)):[];return console.log("Bulk metadata colnames",j),(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{children:"Pseudobulk"}),(0,c.jsx)("hr",{}),(0,c.jsx)("h4",{children:"Descriptions"}),(0,c.jsx)("p",{children:"Detailed information about Pseudobulk."}),(0,c.jsx)("br",{}),(0,c.jsx)("h4",{children:"Data Structure"}),(0,c.jsx)("h5",{children:"Features"}),(0,c.jsx)("h4",{children:"Data Distribution"}),(0,c.jsx)("h4",{children:"File information"}),(0,c.jsxs)(i.A,{defaultActiveKey:"detail",id:"file-info",className:"mb-3",activeKey:e,onSelect:e=>t(e),justify:!0,children:[(0,c.jsx)(l.A,{eventKey:"detail",title:"Detail",children:a.length>0?(0,c.jsx)(n.Ay,{columns:u,data:a,pagination:!0,paginationPerPage:5,paginationRowsPerPageOptions:[5,10,15,20]}):(0,c.jsx)("div",{children:"Loading..."})}),(0,c.jsx)(l.A,{eventKey:"level2",title:"Level 2",children:(0,c.jsx)("ul",{children:o.map(((e,t)=>(0,c.jsx)("li",{children:e},t)))})})]})]})}}}]);
//# sourceMappingURL=832.7fa703df.chunk.js.map