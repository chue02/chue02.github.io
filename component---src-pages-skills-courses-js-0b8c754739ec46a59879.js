"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[413],{9007:function(e,t,l){l.r(t);var n=l(5785),a=l(7294),r=l(5444),c=l(9086);const m={CS:{color:"#32a838",fontWeight:"bold"},Math:{color:"#328da8",fontWeight:"bold"},Stats:{color:"#a33441",fontWeight:"bold"}};t.default=()=>{const e=(0,a.useRef)([]),{0:t,1:l}=(0,a.useState)([]);return useEffect((()=>{const e=(0,n.Z)(t).sort(((e,t)=>e.subject===t.subject?e.no.localeCompare(t.no):e.subject.localeCompare(t.subject)));l(e)}),[t]),a.createElement(r.StaticQuery,{query:"3914367400",render:n=>{const r=n.allMarkdownRemark.edges.map((e=>{let{node:t}=e;return t.frontmatter}));return 0===t.length&&l(r),a.createElement(StyledTableContainer,null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Subject"),a.createElement("th",null,"Number"),a.createElement("th",null,"Name"),a.createElement("th",null,"Term"),a.createElement("th",null,"Registrar"))),a.createElement("tbody",null,t.map(((t,l)=>{const{subject:n,no:r,name:o,term:s,external:u}=t;return a.createElement("tr",{key:l,ref:t=>e.current[l]=t},a.createElement("td",{style:m[n]||{fontWeight:"bold"}},n),a.createElement("td",{className:"no"},r),a.createElement("td",{className:"name"},o),a.createElement("td",{className:"term"},s),a.createElement("td",{className:"links"},a.createElement("div",null,u&&a.createElement("a",{href:u,"aria-label":"External Link"},a.createElement(c.JO,{name:"External"})))))}))))}})}}}]);
//# sourceMappingURL=component---src-pages-skills-courses-js-0b8c754739ec46a59879.js.map