"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[640,413,720],{9007:function(e,t,a){a.r(t);var n=a(7294),i=a(3044),l=a(9086),r={CS:{color:"#32a838",fontWeight:"bold"},Math:{color:"#328da8",fontWeight:"bold"},Stats:{color:"#a33441",fontWeight:"bold"}},o=i.default.table.withConfig({displayName:"courses__StyledTableContainer",componentId:"sc-1cia9oa-0"})(["width:100%;border-collapse:collapse;.hide-on-mobile{@media (max-width:768px){display:none;}}tbody tr{&:hover,&:focus{background-color:var(--light-navy);}}th,td{padding:10px;text-align:left;&:first-child{padding-left:20px;@media (max-width:768px){padding-left:10px;}}&:last-child{padding-right:20px;@media (max-width:768px){padding-right:10px;}}svg{width:20px;height:20px;}}tr{cursor:default;td:first-child{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius);}td:last-child{border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);}}td{&.year{padding-right:20px;@media (max-width:768px){padding-right:10px;font-size:var(--fz-sm);}}&.title{padding-top:15px;padding-right:20px;color:var(--lightest-slate);font-size:var(--fz-xl);font-weight:600;line-height:1.25;}&.category{padding-top:15px;padding-right:20px;color:var(--lightest-slate);font-size:var(--fz-xl);font-weight:600;line-height:1.25;}&.company{font-size:var(--fz-lg);white-space:nowrap;}&.tech{font-size:var(--fz-xxs);font-family:var(--font-mono);line-height:1.5;.separator{margin:0 5px;}span{display:inline-block;}}&.links{min-width:100px;div{display:flex;align-items:center;a{",";flex-shrink:0;}a + a{margin-left:10px;}}}}}"],(function(e){return e.theme.mixins.flexCenter}));t.default=function(e){var t=e.data,a=(0,n.useRef)([]);return n.createElement(o,null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Subject"),n.createElement("th",null,"Number"),n.createElement("th",null,"Name"),n.createElement("th",null,"Term"),n.createElement("th",null,"Link"))),n.createElement("tbody",null,t.map((function(e,t){var i=e.node.frontmatter,o=i.subject,d=i.no,s=i.name,c=i.term,m=i.external;return n.createElement("tr",{key:t,ref:function(e){return a.current[t]=e}},n.createElement("td",{style:r[o]||{fontWeight:"bold"}},o),n.createElement("td",{className:"no"},d),n.createElement("td",{className:"name"},s),n.createElement("td",{className:"term"},c),n.createElement("td",{className:"links"},n.createElement("div",null,m&&n.createElement("a",{href:m,"aria-label":"External Link"},n.createElement(l.JO,{name:"External"})))))}))))}},6592:function(e,t,a){a.r(t);var n=a(7294),i=a(1232),l=a(3044),r=a(5668),o=a(9892),d=a(9007),s=l.default.main.withConfig({displayName:"skills__StyledMainContainer",componentId:"sc-n4vrxl-0"})(["& > header{margin-bottom:100px;text-align:center;a{&:hover,&:focus{cursor:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>\") 20 0,auto;}}}footer{",";width:100%;margin-top:20px;}"],(function(e){return e.theme.mixins.flexBetween}));t.default=function(e){var t=e.location,a=e.data.allMarkdownRemark.edges;return n.createElement(r.Ar,{location:t},n.createElement(i.q,{title:"Skills"}),n.createElement(s,null,n.createElement("header",null,n.createElement("h1",{className:"big-heading"},"Skills and Courses"),n.createElement("h3",{className:"subtitle"},n.createElement("p",null,"This page contains detalied lists of my skills and the courses I've taken at UCLA!"))),n.createElement(o.default,null),n.createElement(d.default,{data:a})))}},9892:function(e,t,a){a.r(t);var n=a(7294),i=a(5444),l=a(5255),r=a(3044),o=a(537),d=a(4165),s=a(9127),c=a(3082),m=r.default.section.withConfig({displayName:"skillset__StyledSkillsetSection",componentId:"sc-vxvecj-0"})(["max-width:900px;.inner{display:flex;@media (max-width:600px){display:block;}@media (min-width:700px){min-height:340px;}}a{color:#1cf3ff;}"]),f=r.default.div.withConfig({displayName:"skillset__StyledTabList",componentId:"sc-vxvecj-1"})(["position:relative;z-index:3;width:max-content;padding:0;margin:0;list-style:none;@media (max-width:600px){display:flex;overflow-x:auto;width:calc(100% + 100px);padding-left:50px;margin-left:-50px;margin-bottom:30px;}@media (max-width:480px){width:calc(100% + 50px);padding-left:25px;margin-left:-25px;}li{&:first-of-type{@media (max-width:600px){margin-left:50px;}@media (max-width:480px){margin-left:25px;}}&:last-of-type{@media (max-width:600px){padding-right:50px;}@media (max-width:480px){padding-right:25px;}}}"]),p=r.default.button.withConfig({displayName:"skillset__StyledTabButton",componentId:"sc-vxvecj-2"})(["",";display:flex;align-items:center;width:100%;height:var(--tab-height);padding:0 20px 2px;border-left:2px solid var(--lightest-navy);background-color:transparent;color:",";font-family:var(--font-mono);font-size:var(--fz-xs);text-align:left;white-space:nowrap;@media (max-width:768px){padding:0 15px 2px;}@media (max-width:600px){",";min-width:120px;padding:0 15px;border-left:0;border-bottom:2px solid var(--lightest-navy);text-align:center;}&:hover,&:focus{background-color:var(--light-navy);}"],(function(e){return e.theme.mixins.link}),(function(e){return e.isActive?"var(--green)":"var(--slate)"}),(function(e){return e.theme.mixins.flexCenter})),h=r.default.div.withConfig({displayName:"skillset__StyledHighlight",componentId:"sc-vxvecj-3"})(["position:absolute;top:0;left:0;z-index:10;width:2px;height:var(--tab-height);border-radius:var(--border-radius);background:var(--green);transform:translateY(calc("," * var(--tab-height)));transition:transform 0.25s cubic-bezier(0.645,0.045,0.355,1);transition-delay:0.1s;@media (max-width:600px){top:auto;bottom:0;width:100%;max-width:var(--tab-width);height:2px;margin-left:50px;transform:translateX(calc("," * var(--tab-width)));}@media (max-width:480px){margin-left:25px;}"],(function(e){return e.activeTabId}),(function(e){return e.activeTabId})),u=r.default.div.withConfig({displayName:"skillset__StyledTabPanels",componentId:"sc-vxvecj-4"})(["position:relative;width:100%;margin-left:20px;@media (max-width:600px){margin-left:0;}"]),x=r.default.div.withConfig({displayName:"skillset__StyledTabPanel",componentId:"sc-vxvecj-5"})(["width:100%;height:auto;padding:10px 5px;ul{",";}h3{margin-bottom:2px;font-size:var(--fz-xxl);font-weight:500;line-height:1.3;.skill{color:var(--green);}}.range{margin-bottom:25px;color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xs);}"],(function(e){return e.theme.mixins.fancyList}));t.default=function(){var e=(0,i.useStaticQuery)("4273806204").Skillset.edges,t=(0,n.useState)(0),a=t[0],r=t[1],g=(0,n.useState)(null),v=g[0],b=g[1],w=(0,n.useRef)([]),y=(0,n.useRef)(null),k=(0,c.Tb)();(0,n.useEffect)((function(){k||s.Z.reveal(y.current,(0,o.srConfig)())}),[]);(0,n.useEffect)((function(){w.current[v]?w.current[v].focus():(v>=w.current.length&&b(0),v<0&&b(w.current.length-1))}),[v]);return n.createElement(m,{id:"Skillset",ref:y},n.createElement("h2",null,"My Skill Set"),n.createElement("div",{className:"inner"},n.createElement(f,{role:"tablist","aria-label":"Job tabs",onKeyDown:function(e){return function(e){switch(e.key){case d.nx.ARROW_UP:e.preventDefault(),b(v-1);break;case d.nx.ARROW_DOWN:e.preventDefault(),b(v+1)}}(e)}},e&&e.map((function(e,t){var i=e.node.frontmatter.skill;return n.createElement(p,{key:t,isActive:a===t,onClick:function(){return r(t)},ref:function(e){return w.current[t]=e},id:"tab-"+t,role:"tab",tabIndex:a===t?"0":"-1","aria-selected":a===t,"aria-controls":"panel-"+t},n.createElement("span",null,i))})),n.createElement(h,{activeTabId:a})),n.createElement(u,null,e&&e.map((function(e,t){var i=e.node,r=i.frontmatter,o=i.html,d=r.skill,s=r.url,c=r.rank;return n.createElement(l.Z,{key:t,in:a===t,timeout:250,classNames:"fade"},n.createElement(x,{id:"panel-"+t,role:"tabpanel",tabIndex:a===t?"0":"-1","aria-labelledby":"tab-"+t,"aria-hidden":a!==t,hidden:a!==t},n.createElement("h3",null,n.createElement("span",{className:"skill"},n.createElement("a",{href:s,target:"_blank",className:"inline-link",rel:"noreferrer"},c,". ",d))),n.createElement("div",{dangerouslySetInnerHTML:{__html:o}})))})))))}}}]);
//# sourceMappingURL=component---src-pages-skills-index-js-c639b7a51fe231fe5ec1.js.map