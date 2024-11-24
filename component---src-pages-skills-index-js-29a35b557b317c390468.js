"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[640,413,720],{9007:function(e,t,a){a.r(t);var n=a(7294),l=a(3044),r=a(5444),i=a(9086),d={CS:{color:"#32a838",fontWeight:"bold"},Math:{color:"#328da8",fontWeight:"bold"},Stats:{color:"#a33441",fontWeight:"bold"}},o=l.default.table.withConfig({displayName:"courses__StyledTableContainer",componentId:"sc-1cia9oa-0"})(["width:100%;border-collapse:collapse;.hide-on-mobile{@media (max-width:768px){display:none;}}tbody tr{&:hover,&:focus{background-color:var(--light-navy);}}th,td{padding:10px;text-align:left;&:first-child{padding-left:20px;@media (max-width:768px){padding-left:10px;}}&:last-child{padding-right:20px;@media (max-width:768px){padding-right:10px;}}svg{width:20px;height:20px;}}tr{cursor:default;td:first-child{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius);}td:last-child{border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);}}}"]);t.default=function(){var e=(0,n.useRef)([]);return n.createElement(r.StaticQuery,{query:"3914367400",render:function(t){var a=t.allMarkdownRemark.edges;return n.createElement(o,null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Subject"),n.createElement("th",null,"Number"),n.createElement("th",null,"Name"),n.createElement("th",null,"Term"),n.createElement("th",null,"Registrar"))),n.createElement("tbody",null,a.map((function(t,a){var l=t.node.frontmatter,r=l.subject,o=l.no,s=l.name,c=l.term,m=l.external;return n.createElement("tr",{key:a,ref:function(t){return e.current[a]=t}},n.createElement("td",{style:d[r]||{fontWeight:"bold"}},r),n.createElement("td",{className:"no"},o),n.createElement("td",{className:"name"},s),n.createElement("td",{className:"term"},c),n.createElement("td",{className:"links"},n.createElement("div",null,m&&n.createElement("a",{href:m,"aria-label":"External Link"},n.createElement(i.JO,{name:"External"})))))}))))}})}},6592:function(e,t,a){a.r(t);var n=a(7294),l=a(1232),r=a(3044),i=a(7981),d=a(9892),o=a(9007),s=r.default.main.withConfig({displayName:"skills__StyledMainContainer",componentId:"sc-n4vrxl-0"})(["& > header{margin-bottom:100px;text-align:center;a{&:hover,&:focus{cursor:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>\") 20 0,auto;}}}footer{",";width:100%;margin-top:20px;}"],(function(e){return e.theme.mixins.flexBetween}));t.default=function(e){var t=e.location;return n.createElement(i.Ar,{location:t},n.createElement(l.q,{title:"Skills"}),n.createElement(s,null,n.createElement("header",null,n.createElement("h1",{className:"big-heading"},"Skills and Courses"),n.createElement("h3",{className:"subtitle"},n.createElement("p",null,"This page contains detalied lists of my skills and the courses I've taken at UCLA!"))),n.createElement(d.default,null),n.createElement(o.default,null)))}},9892:function(e,t,a){a.r(t);var n=a(7294),l=a(5444),r=a(5255),i=a(3044),d=a(537),o=a(4165),s=a(9127),c=a(3082),m=i.default.section.withConfig({displayName:"skillset__StyledSkillsetSection",componentId:"sc-vxvecj-0"})(["max-width:900px;.inner{display:flex;@media (max-width:600px){display:block;}@media (min-width:700px){min-height:340px;}}a{color:#1cf3ff;}"]),u=i.default.div.withConfig({displayName:"skillset__StyledTabList",componentId:"sc-vxvecj-1"})(["position:relative;z-index:3;width:max-content;padding:0;margin:0;list-style:none;@media (max-width:600px){display:flex;overflow-x:auto;width:calc(100% + 100px);padding-left:50px;margin-left:-50px;margin-bottom:30px;}@media (max-width:480px){width:calc(100% + 50px);padding-left:25px;margin-left:-25px;}li{&:first-of-type{@media (max-width:600px){margin-left:50px;}@media (max-width:480px){margin-left:25px;}}&:last-of-type{@media (max-width:600px){padding-right:50px;}@media (max-width:480px){padding-right:25px;}}}"]),f=i.default.button.withConfig({displayName:"skillset__StyledTabButton",componentId:"sc-vxvecj-2"})(["display:flex;align-items:center;width:100%;height:var(--tab-height);padding:0 20px 2px;border-left:2px solid var(--lightest-navy);background-color:transparent;color:",";font-family:var(--font-mono);font-size:var(--fz-xs);text-align:left;white-space:nowrap;@media (max-width:768px){padding:0 15px 2px;}@media (max-width:600px){min-width:120px;padding:0 15px;border-left:0;border-bottom:2px solid var(--lightest-navy);text-align:center;}&:hover,&:focus{background-color:var(--light-navy);}"],(function(e){return e.isActive?"var(--green)":"var(--slate)"})),p=i.default.div.withConfig({displayName:"skillset__StyledHighlight",componentId:"sc-vxvecj-3"})(["position:absolute;top:0;left:0;z-index:10;width:2px;height:var(--tab-height);border-radius:var(--border-radius);background:var(--green);transform:translateY(calc("," * var(--tab-height)));transition:transform 0.25s cubic-bezier(0.645,0.045,0.355,1);transition-delay:0.1s;@media (max-width:600px){top:auto;bottom:0;width:100%;max-width:var(--tab-width);height:2px;margin-left:50px;transform:translateX(calc("," * var(--tab-width)));}@media (max-width:480px){margin-left:25px;}"],(function(e){return e.activeTabId}),(function(e){return e.activeTabId})),h=i.default.div.withConfig({displayName:"skillset__StyledTabPanels",componentId:"sc-vxvecj-4"})(["position:relative;width:100%;margin-left:20px;@media (max-width:600px){margin-left:0;}"]),x=i.default.div.withConfig({displayName:"skillset__StyledTabPanel",componentId:"sc-vxvecj-5"})(["width:100%;height:auto;padding:10px 5px;h3{margin-bottom:2px;font-size:var(--fz-xxl);font-weight:500;line-height:1.3;.skill{color:var(--green);}}.range{margin-bottom:25px;color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xs);}"]);t.default=function(){var e=(0,l.useStaticQuery)("4273806204").Skillset.edges,t=(0,n.useState)(0),a=t[0],i=t[1],g=(0,n.useState)(null),v=g[0],b=g[1],w=(0,n.useRef)([]),y=(0,n.useRef)(null),E=(0,c.Tb)();(0,n.useEffect)((function(){E||s.Z.reveal(y.current,(0,d.srConfig)())}),[]);(0,n.useEffect)((function(){w.current[v]?w.current[v].focus():(v>=w.current.length&&b(0),v<0&&b(w.current.length-1))}),[v]);return n.createElement(m,{id:"Skillset",ref:y},n.createElement("h2",null,"My Skill Set"),n.createElement("div",{className:"inner"},n.createElement(u,{role:"tablist","aria-label":"Job tabs",onKeyDown:function(e){return function(e){switch(e.key){case o.nx.ARROW_UP:e.preventDefault(),b(v-1);break;case o.nx.ARROW_DOWN:e.preventDefault(),b(v+1)}}(e)}},e&&e.map((function(e,t){var l=e.node.frontmatter.skill;return n.createElement(f,{key:t,isActive:a===t,onClick:function(){return i(t)},ref:function(e){return w.current[t]=e},id:"tab-"+t,role:"tab",tabIndex:a===t?"0":"-1","aria-selected":a===t,"aria-controls":"panel-"+t},n.createElement("span",null,l))})),n.createElement(p,{activeTabId:a})),n.createElement(h,null,e&&e.map((function(e,t){var l=e.node,i=l.frontmatter,d=l.html,o=i.skill,s=i.url,c=i.rank;return n.createElement(r.Z,{key:t,in:a===t,timeout:250,classNames:"fade"},n.createElement(x,{id:"panel-"+t,role:"tabpanel",tabIndex:a===t?"0":"-1","aria-labelledby":"tab-"+t,"aria-hidden":a!==t,hidden:a!==t},n.createElement("h3",null,n.createElement("span",{className:"skill"},n.createElement("a",{href:s,target:"_blank",className:"inline-link",rel:"noreferrer"},c,". ",o))),n.createElement("div",{dangerouslySetInnerHTML:{__html:d}})))})))))}}}]);
//# sourceMappingURL=component---src-pages-skills-index-js-29a35b557b317c390468.js.map