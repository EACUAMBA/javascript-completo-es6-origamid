/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={591:(t,e,n)=>{var o=n(8).default;function r(){"use strict";t.exports=r=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function h(t,e,n,o){var r=e&&e.prototype instanceof v?e:v,i=Object.create(r.prototype),a=new T(o||[]);return i._invoke=function(t,e,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return{value:void 0,done:!0}}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var c=x(a,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var s=d(t,e,n);if("normal"===s.type){if(o=n.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o="completed",n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var f={};function v(){}function p(){}function m(){}var y={};l(y,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(S([])));b&&b!==n&&i.call(b,c)&&(y=b);var L=m.prototype=v.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(r,a,c,s){var u=d(t[r],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==o(h)&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}var r;this._invoke=function(t,o){function i(){return new e((function(e,r){n(t,o,e,r)}))}return r=r?r.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var o=d(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var r=o.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=m,l(L,"constructor",m),l(m,"constructor",p),p.displayName=l(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},w(E.prototype),l(E.prototype,s,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,o,r,i){void 0===i&&(i=Promise);var a=new E(h(t,n,o,r),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(L),l(L,u,"Generator"),l(L,c,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var o=e.pop();if(o in t)return n.value=o,n.done=!1,n}return n.done=!0,n}},e.values=S,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(M),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=void 0),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],a=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var c=i.call(r,"catchLoc"),s=i.call(r,"finallyLoc");if(c&&s){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&i.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),M(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;M(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},8:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},757:(t,e,n)=>{var o=n(591)();t.exports=o;try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}var r=function(){function e(n,o){t(this,e),this.linksInternos=document.querySelectorAll(n),this.options=void 0===o?{behavior:"smooth",block:"start"}:o,this.scrollToSection=this.scrollToSection.bind(this)}return o(e,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href"),n=document.querySelector(e);n.offsetTop,n.scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.linksInternos&&this.addLinkEvent(),this}}]),e}(),i=function(){function e(n){t(this,e),this.accordionList=document.querySelectorAll(n),this.activeClass="activo"}return o(e,[{key:"init",value:function(){this.accordionList.length&&(this.addAccordionEvent(),this.toggleAccordion(this.accordionList[0]))}},{key:"toggleAccordion",value:function(t){t.classList.toggle(this.activoClass),t.nextElementSibling.classList.toggle(this.activoClass)}},{key:"addAccordionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){e.addEventListener("click",(function(){return t.toggleAccordion(e)}))}))}}]),e}(),a=function(){function e(n,o){t(this,e),this.menu=document.querySelectorAll(n),this.content=document.querySelectorAll(o),this.activo="activo"}return o(e,[{key:"activateTab",value:function(t){var e=this;this.content.forEach((function(t){return t.classList.remove(e.activo)}));var n=this.content[t].dataset.anime;this.content[t].classList.add(this.activo,n)}},{key:"addTabNavEvents",value:function(){var t=this;this.menu.forEach((function(e,n){e.addEventListener("click",(function(e){return t.activateTab(n)}))}))}},{key:"init",value:function(){this.menu.length&&this.content.length&&(this.addTabNavEvents(),this.activateTab(0),console.log("INIT"))}}]),e}(),c=function(){function e(n,o,r,i){t(this,e),this.botaoAbrir=document.querySelector(n),this.botaoFechar=document.querySelector(o),this.botaoLogin=document.querySelector(r),this.containerModal=document.querySelector(i),this.activo="activo",this.eventToggleModal=this.eventToggleModal.bind(this),this.clickForaDoModal=this.clickForaDoModal.bind(this)}return o(e,[{key:"eventToggleModal",value:function(t){t.preventDefault(),this.toggleModal(t)}},{key:"toggleModal",value:function(){this.containerModal.classList.toggle(this.activo)}},{key:"clickForaDoModal",value:function(t){t.target===this.containerModal&&this.eventToggleModal(t)}},{key:"addModalEvents",value:function(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.clickForaDoModal)}},{key:"init",value:function(){if(this.botaoAbrir&&this.botaoFechar&&this.botaoLogin)return this.addModalEvents(),this}}]),e}(),s=function(){function e(n){t(this,e),this.tooltips=document.querySelectorAll(n),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}return o(e,[{key:"addTooltipEvent",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"onMouseOver",value:function(t){var e=t.currentTarget;this.criarTooltipBox(e),e.addEventListener("mouseleave",this.onMouseLeave),e.addEventListener("mousemove",this.onMouseMove)}},{key:"onMouseLeave",value:function(t){var e=t.currentTarget;this.tooltipBox.remove(),e.removeEventListener("mouseleave",this.onMouseLeave),e.removeEventListener("mousemove",this.onMouseMove)}},{key:"onMouseMove",value:function(t){t.pageX+190>window.innerWidth?this.tooltipBox.style.left=t.pageX+190+"px":this.tooltipBox.style.left=t.pageX+20+"px",this.tooltipBox.style.top=t.pageY+20+"px"}},{key:"criarTooltipBox",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),this.tooltipBox=e}},{key:"init",value:function(){return this.tooltips.length&&this.addTooltipEvent(),this}}]),e}();function u(t,e,n,o,r,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(o,r)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function a(t){u(i,o,r,a,c,"next",t)}function c(t){u(i,o,r,a,c,"throw",t)}a(void 0)}))}}var h=n(757),d=n.n(h),f=function(){function e(n,o,r){t(this,e),this.numeros=document.querySelectorAll(n),this.observerClass=r,this.observerTarget=document.querySelector(o),this.handleMutation=this.handleMutation.bind(this)}return o(e,[{key:"animaNumeros",value:function(){var t=this;this.numeros.forEach((function(e){t.constructor.incrementarNumero(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}},{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}},{key:"init",value:function(){this.numeros.length&&this.observerTarget&&this.addMutationObserver()}}],[{key:"incrementarNumero",value:function(t){var e=+t.innerHTML,n=Math.floor(e/50),o=0,r=setInterval((function(){o+=n,t.innerHTML=o,o>e&&(t.innerHTML=e,clearInterval(r))}),25*Math.random())}}]),e}(),v=function(){function e(n){t(this,e),this.sections=document.querySelectorAll(n),this.windowMetade=.6*window.innerHeight,this.animaScroll=this.animaScroll.bind(this)}return o(e,[{key:"animaScroll",value:function(t){var e=this;this.sections.forEach((function(t){t.getBoundingClientRect().top-e.windowMetade<0?t.classList.add("activo"):t.classList.contains("activo")&&t.classList.remove("activo")}))}},{key:"init",value:function(){window.addEventListener("scroll",this.animaScroll)}}]),e}();function p(t,e,n){var o=document.documentElement,r="data-outside";function i(a){t.contains(a.target)||(t.removeAttribute(r),n(),e.forEach((function(t){o.removeEventListener(t,i)})))}t.hasAttribute(r)||(e.forEach((function(t){setTimeout((function(){return o.addEventListener(t,i)}))})),t.setAttribute(r,""))}var m=document.querySelector("[data-semana]"),y=m.dataset.semana.split(", ").map(Number),g=m.dataset.horario.split(", ").map(Number),b=new Date,L=b.getDay(),w=b.getHours()-1,E=w>=g[0]&&w<g[1],x=y.includes(L);E&&x?m.classList.add("aberto"):m.classList.add("fechado"),new r('[data-menu="suave"] a[href^="#"]').init(),new i('[data-anime="accordion"] dt').init(),new a('[data-tab="menu"] li','[data-tab="content"] section').init(),new c('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="login"]','[data-modal="container"]').init(),new s("[data-tooltip]").init(),function(){function t(){return(t=l(d().mark((function t(n){var o,r,i;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(n);case 3:return o=t.sent,t.next=6,o.json();case 6:r=t.sent,i=document.querySelector(".numeros-grid"),r.forEach((function(t){var n=e(t);i.appendChild(n)})),new f("[data-numero]",".numeros","activo").init(),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(Error(t.t0).message);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function e(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.especie,"</h3><span data-numero>").concat(t.totais,"</span>"),e}!function(e){t.apply(this,arguments)}("./animaisapi.json")}(),fetch("https://blockchain.info/ticker").then((function(t){return t.json()})).then((function(t){document.querySelector(".btc-preco").innerHTML=Number(1e3/t.BRL.sell).toFixed(4),console.log(t.BRL.sell)})).catch((function(t){console.log(Error(t).message)})),new v('[data-anime="scroll"]').init(),function(){var t=["click","touchstart"];function e(e){var n=this;e.preventDefault(),this.classList.toggle("active"),p(this,t,(function(){n.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((function(n){t.forEach((function(t){n.addEventListener(t,e)}))}))}(),function(){var t=document.querySelector('[data-menu="button"]'),e=document.querySelector('[data-menu="lista"]'),n=["click","touchstart"];if(t&&e){var o=function(o){t.classList.add("active"),e.classList.add("active"),p(e,n,(function(){t.classList.remove("active"),e.classList.remove("active")}))};n.forEach((function(e){t.addEventListener(e,o)}))}}()})()})();