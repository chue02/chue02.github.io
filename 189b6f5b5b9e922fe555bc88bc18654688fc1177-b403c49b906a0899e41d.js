/*! For license information please see 189b6f5b5b9e922fe555bc88bc18654688fc1177-b403c49b906a0899e41d.js.LICENSE.txt */
(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[105],{537:function(e){e.exports={email:"chue02@ucla.edu",socialMedia:[{name:"Linkedin",url:"https://www.linkedin.com/in/eric-chu02"},{name:"Instagram",url:"https://www.instagram.com/eric.chu02/"},{name:"GitHub",url:"https://github.com/chue02"}],navLinks:[{name:"Home",url:"/"},{name:"About",url:"/#about"},{name:"Analytics",url:"/analytics"},{name:"Opinions",url:"/opinions"},{name:"Skills",url:"/skills"},{name:"Portfolio",url:"/portfolio"},{name:"Contact",url:"/#contact"}],colors:{green:"#64ffda",navy:"#07011F",darkNavy:"#020c1b"},srConfig:function(e,t){return void 0===e&&(e=200),void 0===t&&(t=.25),{origin:"bottom",distance:"20px",duration:500,delay:e,rotate:{x:0,y:0,z:0},opacity:0,scale:1,easing:"cubic-bezier(0.645, 0.045, 0.355, 1)",mobile:!0,reset:!1,useDelay:"always",viewFactor:t,viewOffset:{top:0,right:0,bottom:0,left:0}}}}},3082:function(e,t,n){"use strict";n.d(t,{t$:function(){return r},Tb:function(){return c},C7:function(){return u}});var i=n(7294),r=function(e,t){(0,i.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])},o="(prefers-reduced-motion: no-preference)",s="undefined"==typeof window,a=function(){return!!s||!window.matchMedia(o).matches};var c=function(){var e=(0,i.useState)(a),t=e[0],n=e[1];return(0,i.useEffect)((function(){var e=window.matchMedia(o),t=function(e){n(!e.matches)};return e.addListener(t),function(){e.removeListener(t)}}),[]),t},u=function(e){var t=void 0===e?{}:e,n=t.initialDirection,r=t.thresholdPixels,o=t.off,s=(0,i.useState)(n),a=s[0],c=s[1];return(0,i.useEffect)((function(){var e=r||0,t=window.pageYOffset,i=!1,s=function(){var n=window.pageYOffset;Math.abs(n-t)<e||(c(n>t?"down":"up"),t=n>0?n:0),i=!1},a=function(){i||(window.requestAnimationFrame(s),i=!0)};return o?c(n):window.addEventListener("scroll",a),function(){return window.removeEventListener("scroll",a)}}),[n,r,o]),a}},4165:function(e,t,n){"use strict";n.d(t,{fb:function(){return i},Cs:function(){return r},nx:function(){return o}});var i=1e3,r=2e3,o={ARROW_LEFT:"ArrowLeft",ARROW_LEFT_IE11:"Left",ARROW_RIGHT:"ArrowRight",ARROW_RIGHT_IE11:"Right",ARROW_UP:"ArrowUp",ARROW_UP_IE11:"Up",ARROW_DOWN:"ArrowDown",ARROW_DOWN_IE11:"Down",ESCAPE:"Escape",ESCAPE_IE11:"Esc",TAB:"Tab",SPACE:" ",SPACE_IE11:"Spacebar",ENTER:"Enter"}},9127:function(e,t,n){"use strict";n.d(t,{Z:function(){return te}});var i=function(e){return"object"==typeof window.Node?e instanceof window.Node:null!==e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName};var r=function(e){var t=Object.prototype.toString.call(e);return"object"==typeof window.NodeList?e instanceof window.NodeList:null!==e&&"object"==typeof e&&"number"==typeof e.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(t)&&(0===e.length||i(e[0]))};var o=function(e,t){if(void 0===t&&(t=document),e instanceof Array)return e.filter(i);if(i(e))return[e];if(r(e))return Array.prototype.slice.call(e);if("string"==typeof e)try{var n=t.querySelectorAll(e);return Array.prototype.slice.call(n)}catch(o){return[]}return[]};function s(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(16===e.length)return e;if(6===e.length){var t=a();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function a(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function c(e,t){for(var n=s(e),i=s(t),r=[],o=0;o<4;o++)for(var a=[n[o],n[o+4],n[o+8],n[o+12]],c=0;c<4;c++){var u=4*c,l=[i[u],i[u+1],i[u+2],i[u+3]],d=a[0]*l[0]+a[1]*l[1]+a[2]*l[2]+a[3]*l[3];r[o+u]=d}return r}function u(e){if("string"==typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return s(t[2].split(", ").map(parseFloat))}return a()}function l(e){var t=Math.PI/180*e,n=a();return n[0]=n[5]=Math.cos(t),n[1]=n[4]=Math.sin(t),n[4]*=-1,n}function d(e,t){var n=a();return n[0]=e,n[5]="number"==typeof t?t:e,n}var f,p=(f=Date.now(),function(e){var t=Date.now();t-f>16?(f=t,e(t)):setTimeout((function(){return p(e)}),0)}),h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||p,m={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};var v={success:function(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",(function(){document.body.style.height="100%"}))},failure:function(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}};function g(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function y(e,t){if(g(e))return Object.keys(e).forEach((function(n){return t(e[n],n,e)}));if(e instanceof Array)return e.forEach((function(n,i){return t(n,i,e)}));throw new TypeError("Expected either an array or object literal.")}function b(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach((function(e){return i+="\n — "+e})),console.log(i,"color: #ea654b;")}}function E(){var e=this,t={active:[],stale:[]},n={active:[],stale:[]},i={active:[],stale:[]};try{y(o("[data-sr-id]"),(function(e){var n=parseInt(e.getAttribute("data-sr-id"));t.active.push(n)}))}catch(r){throw r}y(this.store.elements,(function(e){-1===t.active.indexOf(e.id)&&t.stale.push(e.id)})),y(t.stale,(function(t){return delete e.store.elements[t]})),y(this.store.elements,(function(e){-1===i.active.indexOf(e.containerId)&&i.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===n.active.indexOf(e.sequence.id)&&n.active.push(e.sequence.id)})),y(this.store.containers,(function(e){-1===i.active.indexOf(e.id)&&i.stale.push(e.id)})),y(i.stale,(function(t){var n=e.store.containers[t].node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate),delete e.store.containers[t]})),y(this.store.sequences,(function(e){-1===n.active.indexOf(e.id)&&n.stale.push(e.id)})),y(n.stale,(function(t){return delete e.store.sequences[t]}))}var w=function(){var e={},t=document.documentElement.style;function n(n,i){if(void 0===i&&(i=t),n&&"string"==typeof n){if(e[n])return e[n];if("string"==typeof i[n])return e[n]=n;if("string"==typeof i["-webkit-"+n])return e[n]="-webkit-"+n;throw new RangeError('Unable to find "'+n+'" style property.')}throw new TypeError("Expected a string.")}return n.clearCache=function(){return e={}},n}();function x(e){var t=window.getComputedStyle(e.node),n=t.position,i=e.config,r={},o=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];r.computed=o?o.map((function(e){return e.trim()})).join("; ")+";":"",r.generated=o.some((function(e){return e.match(/visibility\s?:\s?visible/i)}))?r.computed:o.concat(["visibility: visible"]).map((function(e){return e.trim()})).join("; ")+";";var s,f,p,h=parseFloat(t.opacity),m=isNaN(parseFloat(i.opacity))?parseFloat(t.opacity):parseFloat(i.opacity),v={computed:h!==m?"opacity: "+h+";":"",generated:h!==m?"opacity: "+m+";":""},g=[];if(parseFloat(i.distance)){var y="top"===i.origin||"bottom"===i.origin?"Y":"X",b=i.distance;"top"!==i.origin&&"left"!==i.origin||(b=/^-/.test(b)?b.substr(1):"-"+b);var E=b.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),x=E[0];switch(E[1]){case"em":b=parseInt(t.fontSize)*x;break;case"px":b=x;break;case"%":b="Y"===y?e.node.getBoundingClientRect().height*x/100:e.node.getBoundingClientRect().width*x/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}"Y"===y?g.push(function(e){var t=a();return t[13]=e,t}(b)):g.push(function(e){var t=a();return t[12]=e,t}(b))}i.rotate.x&&g.push((s=i.rotate.x,f=Math.PI/180*s,(p=a())[5]=p[10]=Math.cos(f),p[6]=p[9]=Math.sin(f),p[9]*=-1,p)),i.rotate.y&&g.push(function(e){var t=Math.PI/180*e,n=a();return n[0]=n[10]=Math.cos(t),n[2]=n[8]=Math.sin(t),n[2]*=-1,n}(i.rotate.y)),i.rotate.z&&g.push(l(i.rotate.z)),1!==i.scale&&(0===i.scale?g.push(d(2e-4)):g.push(d(i.scale)));var C={};if(g.length){C.property=w("transform"),C.computed={raw:t[C.property],matrix:u(t[C.property])},g.unshift(C.computed.matrix);var O=g.reduce(c);C.generated={initial:C.property+": matrix3d("+O.join(", ")+");",final:C.property+": matrix3d("+C.computed.matrix.join(", ")+");"}}else C.generated={initial:"",final:""};var k={};if(v.generated||C.generated.initial){k.property=w("transition"),k.computed=t[k.property],k.fragments=[];var N=i.delay,T=i.duration,R=i.easing;v.generated&&k.fragments.push({delayed:"opacity "+T/1e3+"s "+R+" "+N/1e3+"s",instant:"opacity "+T/1e3+"s "+R+" 0s"}),C.generated.initial&&k.fragments.push({delayed:C.property+" "+T/1e3+"s "+R+" "+N/1e3+"s",instant:C.property+" "+T/1e3+"s "+R+" 0s"}),k.computed&&!k.computed.match(/all 0s|none 0s/)&&k.fragments.unshift({delayed:k.computed,instant:k.computed});var A=k.fragments.reduce((function(e,t,n){return e.delayed+=0===n?t.delayed:", "+t.delayed,e.instant+=0===n?t.instant:", "+t.instant,e}),{delayed:"",instant:""});k.generated={delayed:k.property+": "+A.delayed+";",instant:k.property+": "+A.instant+";"}}else k.generated={delayed:"",instant:""};return{inline:r,opacity:v,position:n,transform:C,transition:k}}function C(e,t){t.split(";").forEach((function(t){var n=t.split(":"),i=n[0],r=n.slice(1);i&&r&&(e.style[i.trim()]=r.join(":"))}))}function O(e){var t,n=this;try{y(o(e),(function(e){var i=e.getAttribute("data-sr-id");if(null!==i){t=!0;var r=n.store.elements[i];r.callbackTimer&&window.clearTimeout(r.callbackTimer.clock),C(r.node,r.styles.inline.generated),e.removeAttribute("data-sr-id"),delete n.store.elements[i]}}))}catch(i){return b.call(this,"Clean failed.",i.message)}if(t)try{E.call(this)}catch(i){return b.call(this,"Clean failed.",i.message)}}function k(){var e=this;y(this.store.elements,(function(e){C(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")})),y(this.store.containers,(function(t){var n=t.node===document.documentElement?window:t.node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate)})),this.store={containers:{},elements:{},history:[],sequences:{}}}function N(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(g(e))return y(t,(function(t){y(t,(function(t,n){g(t)?(e[n]&&g(e[n])||(e[n]={}),N(e[n],t)):e[n]=t}))})),e;throw new TypeError("Target must be an object literal.")}function T(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var R,A=(R=0,function(){return R++});function L(){var e=this;E.call(this),y(this.store.elements,(function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated.final),e.revealed=!0):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial),e.revealed=!1),C(e.node,t.filter((function(e){return""!==e})).join(" "))})),y(this.store.containers,(function(t){var n=t.node===document.documentElement?window:t.node;n.addEventListener("scroll",e.delegate),n.addEventListener("resize",e.delegate)})),this.delegate(),this.initTimeout=null}function S(e,t){void 0===t&&(t={});var n=t.pristine||this.pristine,i="always"===e.config.useDelay||"onload"===e.config.useDelay&&n||"once"===e.config.useDelay&&!e.seen,r=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;return t.reveal||r?j.call(this,e,i):t.reset||o?P.call(this,e):void 0}function j(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?n.push(e.styles.transition.generated.delayed):n.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,C(e.node,n.filter((function(e){return""!==e})).join(" ")),I.call(this,e,t)}function P(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,C(e.node,t.filter((function(e){return""!==e})).join(" ")),I.call(this,e)}function I(e,t){var n=this,i=t?e.config.duration+e.config.delay:e.config.duration,r=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),r(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout((function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&O.call(n,e.node)}),i-s)}}function M(e,t){if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return S.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],i=e.sequence.index;if(n){var r=new q(n,"visible",this.store),o=new q(n,"revealed",this.store);if(n.models={visible:r,revealed:o},!o.body.length){var s=n.members[r.body[0]],a=this.store.elements[s];if(a)return F.call(this,n,r.body[0],-1,t),F.call(this,n,r.body[0],1,t),S.call(this,a,{reveal:!0,pristine:t})}if(!n.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(r.body).shift())return F.call(this,n,i,-1,t),S.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(r.body).pop())return F.call(this,n,i,1,t),S.call(this,e,{reveal:!0,pristine:t})}}function D(e){var t=Math.abs(e);if(isNaN(t))throw new RangeError("Invalid sequence interval.");this.id=A(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function q(e,t,n){var i=this;this.head=[],this.body=[],this.foot=[],y(e.members,(function(e,r){var o=n.elements[e];o&&o[t]&&i.body.push(r)})),this.body.length&&y(e.members,(function(e,r){var o=n.elements[e];o&&!o[t]&&(r<i.body[0]?i.head.push(r):i.foot.push(r))}))}function F(e,t,n,i){var r=this,o=["head",null,"foot"][1+n],s=e.members[t+n],a=this.store.elements[s];e.blocked[o]=!0,setTimeout((function(){e.blocked[o]=!1,a&&M.call(r,a,i)}),e.interval)}function _(e,t,n){var i=this;void 0===t&&(t={}),void 0===n&&(n=!1);var r,s=[],a=t.interval||m.interval;try{a&&(r=new D(a));var c=o(e);if(!c.length)throw new Error("Invalid reveal target.");var u=c.reduce((function(e,n){var a={},c=n.getAttribute("data-sr-id");c?(N(a,i.store.elements[c]),C(a.node,a.styles.inline.computed)):(a.id=A(),a.node=n,a.seen=!1,a.revealed=!1,a.visible=!1);var u=N({},a.config||i.defaults,t);if(!u.mobile&&T()||!u.desktop&&!T())return c&&O.call(i,a),e;var l,d=o(u.container)[0];if(!d)throw new Error("Invalid container.");return d.contains(n)?(l=function(e){var t=[],n=arguments.length-1;for(;n-- >0;)t[n]=arguments[n+1];var i=null;return y(t,(function(t){y(t,(function(t){null===i&&t.node===e&&(i=t.id)}))})),i}(d,s,i.store.containers),null===l&&(l=A(),s.push({id:l,node:d})),a.config=u,a.containerId=l,a.styles=x(a),r&&(a.sequence={id:r.id,index:r.members.length},r.members.push(a.id)),e.push(a),e):e}),[]);y(u,(function(e){i.store.elements[e.id]=e,e.node.setAttribute("data-sr-id",e.id)}))}catch(l){return b.call(this,"Reveal failed.",l.message)}y(s,(function(e){i.store.containers[e.id]={id:e.id,node:e.node}})),r&&(this.store.sequences[r.id]=r),!0!==n&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(L.bind(this),0))}function W(){var e=this;y(this.store.history,(function(t){_.call(e,t.target,t.options,!0)})),L.call(this)}var z=Math.sign||function(e){return(e>0)-(e<0)||+e};function Z(e,t){var n=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,r=0,o=0,s=e.node;do{isNaN(s.offsetTop)||(r+=s.offsetTop),isNaN(s.offsetLeft)||(o+=s.offsetLeft),s=s.offsetParent}while(s);return{bounds:{top:r,right:o+i,bottom:r+n,left:o},height:n,width:i}}function U(e){var t,n;return e.node===document.documentElement?(t=window.pageYOffset,n=window.pageXOffset):(t=e.node.scrollTop,n=e.node.scrollLeft),{top:t,left:n}}function $(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,r=e.geometry.bounds.top+e.geometry.height*n,o=e.geometry.bounds.right-e.geometry.width*n,s=e.geometry.bounds.bottom-e.geometry.height*n,a=e.geometry.bounds.left+e.geometry.width*n,c=t.geometry.bounds.top+t.scroll.top+i.top,u=t.geometry.bounds.right+t.scroll.left-i.right,l=t.geometry.bounds.bottom+t.scroll.top-i.bottom,d=t.geometry.bounds.left+t.scroll.left+i.left;return r<l&&o>d&&s>c&&a<u||"fixed"===e.styles.position}}function H(e,t){var n=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),h((function(){var i="init"===e.type||"resize"===e.type;y(n.store.containers,(function(e){i&&(e.geometry=Z.call(n,e,!0));var t=U.call(n,e);e.scroll&&(e.direction={x:z(t.left-e.scroll.left),y:z(t.top-e.scroll.top)}),e.scroll=t})),y(t,(function(e){(i||void 0===e.geometry)&&(e.geometry=Z.call(n,e)),e.visible=$.call(n,e)})),y(t,(function(e){e.sequence?M.call(n,e):S.call(n,e)})),n.pristine=!1}))}var Y,G,X,B,V,J,K,Q;function ee(e){var t;if(void 0===e&&(e={}),void 0===this||Object.getPrototypeOf(this)!==ee.prototype)return new ee(e);if(!ee.isSupported())return b.call(this,"Instantiation failed.","This browser is not supported."),v.failure();try{t=N({},J||m,e)}catch(n){return b.call(this,"Invalid configuration.",n.message),v.failure()}try{if(!o(t.container)[0])throw new Error("Invalid container.")}catch(n){return b.call(this,n.message),v.failure()}return!(J=t).mobile&&T()||!J.desktop&&!T()?(b.call(this,"This device is disabled.","desktop: "+J.desktop,"mobile: "+J.mobile),v.failure()):(v.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,Y=Y||H.bind(this),G=G||k.bind(this),X=X||_.bind(this),B=B||O.bind(this),V=V||W.bind(this),Object.defineProperty(this,"delegate",{get:function(){return Y}}),Object.defineProperty(this,"destroy",{get:function(){return G}}),Object.defineProperty(this,"reveal",{get:function(){return X}}),Object.defineProperty(this,"clean",{get:function(){return B}}),Object.defineProperty(this,"sync",{get:function(){return V}}),Object.defineProperty(this,"defaults",{get:function(){return J}}),Object.defineProperty(this,"version",{get:function(){return"4.0.9"}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),Q||(Q=this))}ee.isSupported=function(){return function(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}()&&function(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}()},Object.defineProperty(ee,"debug",{get:function(){return K||!1},set:function(e){return K="boolean"==typeof e?e:K}}),ee();var te="undefined"==typeof window?null:ee()},5255:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var i=n(7462),r=n(3366),o=n(1721);function s(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var a=n(7294),c=n(3935),u=!1,l=n(2882),d="unmounted",f="exited",p="entering",h="entered",m="exiting",v=function(e){function t(t,n){var i;i=e.call(this,t,n)||this;var r,o=n&&!n.isMounting?t.enter:t.appear;return i.appearStatus=null,t.in?o?(r=f,i.appearStatus=p):r=h:r=t.unmountOnExit||t.mountOnEnter?d:f,i.state={status:r},i.nextCallback=null,i}(0,o.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===d?{status:f}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==p&&n!==h&&(t=p):n!==p&&n!==h||(t=m)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,i=this.props.timeout;return e=t=n=i,null!=i&&"number"!=typeof i&&(e=i.exit,t=i.enter,n=void 0!==i.appear?i.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===p?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===f&&this.setState({status:d})},n.performEnter=function(e){var t=this,n=this.props.enter,i=this.context?this.context.isMounting:e,r=this.props.nodeRef?[i]:[c.findDOMNode(this),i],o=r[0],s=r[1],a=this.getTimeouts(),l=i?a.appear:a.enter;!e&&!n||u?this.safeSetState({status:h},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,s),this.safeSetState({status:p},(function(){t.props.onEntering(o,s),t.onTransitionEnd(l,(function(){t.safeSetState({status:h},(function(){t.props.onEntered(o,s)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),i=this.props.nodeRef?void 0:c.findDOMNode(this);t&&!u?(this.props.onExit(i),this.safeSetState({status:m},(function(){e.props.onExiting(i),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:f},(function(){e.props.onExited(i)}))}))}))):this.safeSetState({status:f},(function(){e.props.onExited(i)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(i){n&&(n=!1,t.nextCallback=null,e(i))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:c.findDOMNode(this),i=null==e&&!this.props.addEndListener;if(n&&!i){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=r[0],s=r[1];this.props.addEndListener(o,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===d)return null;var t=this.props,n=t.children,i=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,r.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.createElement(l.Z.Provider,{value:null},"function"==typeof n?n(e,i):a.cloneElement(a.Children.only(n),i))},t}(a.Component);function g(){}v.contextType=l.Z,v.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:g,onEntering:g,onEntered:g,onExit:g,onExiting:g,onExited:g},v.UNMOUNTED=d,v.EXITED=f,v.ENTERING=p,v.ENTERED=h,v.EXITING=m;var y=v,b=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return i=t,void((n=e).classList?n.classList.remove(i):"string"==typeof n.className?n.className=s(n.className,i):n.setAttribute("class",s(n.className&&n.className.baseVal||"",i)));var n,i}))},E=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var i=t.resolveArguments(e,n),r=i[0],o=i[1];t.removeClasses(r,"exit"),t.addClass(r,o?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var i=t.resolveArguments(e,n),r=i[0],o=i[1]?"appear":"enter";t.addClass(r,o,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var i=t.resolveArguments(e,n),r=i[0],o=i[1]?"appear":"enter";t.removeClasses(r,o),t.addClass(r,o,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,i="string"==typeof n,r=i?""+(i&&n?n+"-":"")+e:n[e];return{baseClassName:r,activeClassName:i?r+"-active":n[e+"Active"],doneClassName:i?r+"-done":n[e+"Done"]}},t}(0,o.Z)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var i=this.getClassNames(t)[n+"ClassName"],r=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&r&&(i+=" "+r),"active"===n&&e&&e.scrollTop,i&&(this.appliedClasses[t][n]=i,function(e,t){e&&t&&t.split(" ").forEach((function(t){return i=t,void((n=e).classList?n.classList.add(i):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,i)||("string"==typeof n.className?n.className=n.className+" "+i:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+i)));var n,i}))}(e,i))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],i=n.base,r=n.active,o=n.done;this.appliedClasses[t]={},i&&b(e,i),r&&b(e,r),o&&b(e,o)},n.render=function(){var e=this.props,t=(e.classNames,(0,r.Z)(e,["classNames"]));return a.createElement(y,(0,i.Z)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(a.Component);E.defaultProps={classNames:""};var w=E},2882:function(e,t,n){"use strict";var i=n(7294);t.Z=i.createContext(null)},7462:function(e,t,n){"use strict";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},i.apply(this,arguments)}n.d(t,{Z:function(){return i}})},3366:function(e,t,n){"use strict";function i(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=189b6f5b5b9e922fe555bc88bc18654688fc1177-b403c49b906a0899e41d.js.map