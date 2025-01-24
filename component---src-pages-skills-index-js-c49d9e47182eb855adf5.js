"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[640,413,720],{9007:function(e,t,a){a.r(t);var l=a(5785),n=a(7294),r=a(5444),i=a(9086);const o={CS:{color:"#32a838",fontWeight:"bold"},Math:{color:"#328da8",fontWeight:"bold"},Stats:{color:"#a33441",fontWeight:"bold"}};t.default=()=>{const e=(0,n.useRef)([]),{0:t,1:a}=(0,n.useState)([]);return(0,n.useEffect)((()=>{const e=(0,l.Z)(t).sort(((e,t)=>e.subject===t.subject?e.no.localeCompare(t.no):e.subject.localeCompare(t.subject)));a(e)}),[t]),n.createElement(r.StaticQuery,{query:"3914367400",render:l=>{const r=l.allMarkdownRemark.edges.map((e=>{let{node:t}=e;return t.frontmatter}));return 0===t.length&&a(r),n.createElement(StyledTableContainer,null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Subject"),n.createElement("th",null,"Number"),n.createElement("th",null,"Name"),n.createElement("th",null,"Term"),n.createElement("th",null,"Registrar"))),n.createElement("tbody",null,t.map(((t,a)=>{const{subject:l,no:r,name:s,term:d,external:c}=t;return n.createElement("tr",{key:a,ref:t=>e.current[a]=t},n.createElement("td",{style:o[l]||{fontWeight:"bold"}},l),n.createElement("td",{className:"no"},r),n.createElement("td",{className:"name"},s),n.createElement("td",{className:"term"},d),n.createElement("td",{className:"links"},n.createElement("div",null,c&&n.createElement("a",{href:c,"aria-label":"External Link"},n.createElement(i.JO,{name:"External"})))))}))))}})}},6592:function(e,t,a){a.r(t);var l=a(7294),n=a(5414),r=a(9),i=a(6967),o=a(9892),s=a(9007);const d=r.default.main.withConfig({displayName:"skills__StyledMainContainer",componentId:"sc-n4vrxl-0"})(["& > header{margin-bottom:100px;text-align:center;a{&:hover,&:focus{cursor:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>\") 20 0,auto;}}}footer{",";width:100%;margin-top:20px;}"],(e=>{let{theme:t}=e;return t.mixins.flexBetween}));t.default=e=>{let{location:t}=e;return l.createElement(i.Ar,{location:t},l.createElement(n.q,{title:"Skills"}),l.createElement(d,null,l.createElement("header",null,l.createElement("h1",{className:"big-heading"},"Skills and Courses"),l.createElement("h3",{className:"subtitle"},l.createElement("p",null,"This page contains detalied lists of my skills and the courses I've taken at UCLA!"))),l.createElement(o.default,null),l.createElement(s.default,null)))}},9892:function(e,t,a){a.r(t);var l=a(7294),n=a(5444),r=a(6979),i=a(9),o=a(537),s=a(4165),d=a(355),c=a(3082);const m=i.default.section.withConfig({displayName:"skillset__StyledSkillsetSection",componentId:"sc-vxvecj-0"})(["max-width:900px;.inner{display:flex;@media (max-width:600px){display:block;}@media (min-width:700px){min-height:340px;}}a{color:#1cf3ff;}"]),p=i.default.div.withConfig({displayName:"skillset__StyledTabList",componentId:"sc-vxvecj-1"})(["position:relative;z-index:3;width:max-content;padding:0;margin:0;list-style:none;@media (max-width:600px){display:flex;overflow-x:auto;width:calc(100% + 100px);padding-left:50px;margin-left:-50px;margin-bottom:30px;}@media (max-width:480px){width:calc(100% + 50px);padding-left:25px;margin-left:-25px;}li{&:first-of-type{@media (max-width:600px){margin-left:50px;}@media (max-width:480px){margin-left:25px;}}&:last-of-type{@media (max-width:600px){padding-right:50px;}@media (max-width:480px){padding-right:25px;}}}"]),u=i.default.button.withConfig({displayName:"skillset__StyledTabButton",componentId:"sc-vxvecj-2"})(["display:flex;align-items:center;width:100%;height:var(--tab-height);padding:0 20px 2px;border-left:2px solid var(--lightest-navy);background-color:transparent;color:",";font-family:var(--font-mono);font-size:var(--fz-xs);text-align:left;white-space:nowrap;@media (max-width:768px){padding:0 15px 2px;}@media (max-width:600px){min-width:120px;padding:0 15px;border-left:0;border-bottom:2px solid var(--lightest-navy);text-align:center;}&:hover,&:focus{background-color:var(--light-navy);}"],(e=>{let{isActive:t}=e;return t?"var(--green)":"var(--slate)"})),h=i.default.div.withConfig({displayName:"skillset__StyledHighlight",componentId:"sc-vxvecj-3"})(["position:absolute;top:0;left:0;z-index:10;width:2px;height:var(--tab-height);border-radius:var(--border-radius);background:var(--green);transform:translateY(calc("," * var(--tab-height)));transition:transform 0.25s cubic-bezier(0.645,0.045,0.355,1);transition-delay:0.1s;@media (max-width:600px){top:auto;bottom:0;width:100%;max-width:var(--tab-width);height:2px;margin-left:50px;transform:translateX(calc("," * var(--tab-width)));}@media (max-width:480px){margin-left:25px;}"],(e=>{let{activeTabId:t}=e;return t}),(e=>{let{activeTabId:t}=e;return t})),f=i.default.div.withConfig({displayName:"skillset__StyledTabPanels",componentId:"sc-vxvecj-4"})(["position:relative;width:100%;margin-left:20px;@media (max-width:600px){margin-left:0;}"]),x=i.default.div.withConfig({displayName:"skillset__StyledTabPanel",componentId:"sc-vxvecj-5"})(["width:100%;height:auto;padding:10px 5px;h3{margin-bottom:2px;font-size:var(--fz-xxl);font-weight:500;line-height:1.3;.skill{color:var(--green);}}.range{margin-bottom:25px;color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xs);}"]);t.default=()=>{const e=(0,n.useStaticQuery)("4273806204").Skillset.edges,{0:t,1:a}=(0,l.useState)(0),{0:i,1:g}=(0,l.useState)(null),b=(0,l.useRef)([]),v=(0,l.useRef)(null),w=(0,c.Tb)();(0,l.useEffect)((()=>{w||d.Z.reveal(v.current,(0,o.srConfig)())}),[]);(0,l.useEffect)((()=>{b.current[i]?b.current[i].focus():(i>=b.current.length&&g(0),i<0&&g(b.current.length-1))}),[i]);return l.createElement(m,{id:"Skillset",ref:v},l.createElement("h2",null,"My Skill Set"),l.createElement("div",{className:"inner"},l.createElement(p,{role:"tablist","aria-label":"Job tabs",onKeyDown:e=>(e=>{switch(e.key){case s.nx.ARROW_UP:e.preventDefault(),g(i-1);break;case s.nx.ARROW_DOWN:e.preventDefault(),g(i+1)}})(e)},e&&e.map(((e,n)=>{let{node:r}=e;const{skill:i}=r.frontmatter;return l.createElement(u,{key:n,isActive:t===n,onClick:()=>a(n),ref:e=>b.current[n]=e,id:`tab-${n}`,role:"tab",tabIndex:t===n?"0":"-1","aria-selected":t===n,"aria-controls":`panel-${n}`},l.createElement("span",null,i))})),l.createElement(h,{activeTabId:t})),l.createElement(f,null,e&&e.map(((e,a)=>{let{node:n}=e;const{frontmatter:i,html:o}=n,{skill:s,url:d,rank:c}=i;return l.createElement(r.Z,{key:a,in:t===a,timeout:250,classNames:"fade"},l.createElement(x,{id:`panel-${a}`,role:"tabpanel",tabIndex:t===a?"0":"-1","aria-labelledby":`tab-${a}`,"aria-hidden":t!==a,hidden:t!==a},l.createElement("h3",null,l.createElement("span",{className:"skill"},l.createElement("a",{href:d,target:"_blank",className:"inline-link",rel:"noreferrer"},c,". ",s))),l.createElement("div",{dangerouslySetInnerHTML:{__html:o}})))})))))}}}]);
//# sourceMappingURL=component---src-pages-skills-index-js-c49d9e47182eb855adf5.js.map