(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[669],{7757:function(t,e,r){t.exports=r(5666)},2669:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}r.r(e),r.d(e,{renderImageToString:function(){return y},swapPlaceholderImage:function(){return v}});var o,i=r(7757),a=r.n(i),c=r(1664),u=r(7294),s=r(7762),l=(r(6879),new WeakMap),h=navigator.connection||navigator.mozConnection||navigator.webkitConnection,f=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function d(t,e){t.style.opacity="1",e&&(e.style.opacity="0")}function p(t,e,r,n,o,i){var a=t.querySelector("[data-main-image]"),c=t.querySelector("[data-placeholder-image]"),u=r.has(e);function s(t){var e=this;this.removeEventListener("load",s);var r=t.currentTarget,n=new Image;n.src=r.currentSrc,n.decode?n.decode().then((function(){d(e,c),null==o||o({wasCached:u})})).catch((function(t){d(e,c),null==i||i(t)})):(d(this,c),null==o||o({wasCached:u}))}return a.addEventListener("load",s),null==n||n({wasCached:u}),Array.from(a.parentElement.children).forEach((function(t){var e=t.getAttribute("data-src"),r=t.getAttribute("data-srcset");e&&(t.removeAttribute("data-src"),t.setAttribute("src",e)),r&&(t.removeAttribute("data-srcset"),t.setAttribute("srcset",r))})),r.add(e),a.complete&&s.call(a,{currentTarget:a}),function(){a&&a.removeEventListener("load",s)}}function v(t,e,i,u,s,f,d){if(!(0,c.h)()){var v,y,g,m=(x=function(){v=p(t,e,i,s,f,d)},"IntersectionObserver"in window?(o||(o=new IntersectionObserver((function(t){t.forEach((function(t){var e;t.isIntersecting&&(null==(e=l.get(t.target))||e(),l.delete(t.target))}))}),{rootMargin:"4g"!==(null==h?void 0:h.effectiveType)||null!=h&&h.saveData?"2500px":"1250px"})),function(t){return l.set(t,x),o.observe(t),function(){o&&t&&(l.delete(t),o.unobserve(t))}}):function(){return x(),function(){}}),w=m(t);return"objectFit"in document.documentElement.style||(t.dataset.objectFit=null!=(y=u.objectFit)?y:"cover",t.dataset.objectPosition=""+(null!=(g=u.objectPosition)?g:"50% 50%"),(b=a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0="objectFitPolyfill"in window,t.t0){t.next=4;break}return t.next=4,r.e(622).then(r.t.bind(r,9622,23));case 4:window.objectFitPolyfill(e);case 5:case"end":return t.stop()}}),t)})),L=function(){var t=this,e=arguments;return new Promise((function(r,o){var i=b.apply(t,e);function a(t){n(i,r,o,a,c,"next",t)}function c(t){n(i,r,o,a,c,"throw",t)}a(void 0)}))},function(t){return L.apply(this,arguments)})(t)),function(){v&&v(),w()}}var b,L,x;return p(t,e,i,s,f,d)}function y(t){var e=t.image,r=t.loading,n=void 0===r?"lazy":r,o=t.isLoading,i=t.isLoaded,a=t.imgClassName,l=t.imgStyle,h=void 0===l?{}:l,d=t.objectPosition,p=t.backgroundColor,v=t.objectFit,y=void 0===v?"cover":v,g=(0,c._)(t,f),m=e.width,w=e.height,b=e.layout,L=e.images,x=e.placeholder,E=e.backgroundColor;return h=(0,c.a)({objectFit:y,objectPosition:d,backgroundColor:p},h),(0,s.renderToStaticMarkup)(u.createElement(c.L,{layout:b,width:m,height:w},u.createElement(c.P,(0,c.a)({},(0,c.g)(x,i,b,m,w,E,y,d))),u.createElement(c.M,(0,c.a)({},g,{width:m,height:w,className:a},(0,c.b)(o,i,L,n,h)))))}},5666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new F(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:f,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function y(){}function g(){}function m(){}var w={};u(w,i,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(O([])));L&&L!==r&&n.call(L,i)&&(w=L);var x=m.prototype=y.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function O(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:C}}function C(){return{value:e,done:!0}}return g.prototype=m,u(x,"constructor",m),u(m,"constructor",g),g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(j.prototype),u(j.prototype,a,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(r){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}}]);
//# sourceMappingURL=669-19fa26ccb018cc3a393a.js.map