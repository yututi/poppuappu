!function(n,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t=e();for(var o in t)("object"==typeof exports?exports:n)[o]=t[o]}}(window,function(){return function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(1);t(2);var r={install:function(n,e){n.prototype.$poppuappu=n.$poppuappu=new o.default(e)}};e.default=r},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={position:"top",duration:5e3,mode:"primary"},r=function(){function n(n){var e=this;this.el=n,this.removed=!1;var t=n.querySelector(".popup__close");t&&t.addEventListener("click",function(){e.hide()})}return n.prototype.show=function(){var n=this.el.querySelector(".popup");n&&(this.el.style.height=n.getBoundingClientRect().height+"px"),this.el.classList.add("popup-wrapper--show")},n.prototype.hide=function(){var n=this;this.removed||(this.removed=!0,this.el.style.height=null,this.el.classList.add("popup-wrapper--hide"),setTimeout(function(){return n.remove()},1e3))},n.prototype.remove=function(){this.el.parentNode&&this.el.parentNode.removeChild(this.el)},n}(),a=function(){function n(n){this.containerId="popup-container";var e=document.createElement("div");e.id=this.containerId,e.classList.add("popup-container"),document.body.appendChild(e),this.container=e,this.globalOptions=Object.assign({},o,n)}return n.prototype.show=function(n,e){var t=Object.assign({},this.globalOptions,e),o=this.createPupup(n,t);this.container.appendChild(o.el),setTimeout(function(){o.show(),setTimeout(function(){o.hide()},t.duration)},1)},n.prototype.createPupup=function(n,e){var t=document.createElement("div");t.classList.add("popup-wrapper");var o=document.createElement("div");o.classList.add("popup"),o.classList.add("popup--"+e.mode);var a=document.createElement("div");a.classList.add("popup__message"),a.innerHTML=n;var i=document.createElement("div");return i.classList.add("popup__close"),o.appendChild(a),o.appendChild(i),t.appendChild(o),new r(t)},n}();e.Popup=a,e.default=a},function(n,e,t){var o=t(3);"string"==typeof o&&(o=[[n.i,o,""]]);var r={insert:"head",singleton:!1};t(5)(o,r);o.locals&&(n.exports=o.locals)},function(n,e,t){(n.exports=t(4)(!1)).push([n.i,".popup-container {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  position: fixed;\n  z-index: 1000;\n  top: 5%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.popup-wrapper {\n  box-sizing: border-box;\n  height: 0px;\n  overflow: hidden;\n  transition: height 0.5s, margin-top 0.5s;\n}\n.popup-wrapper--show {\n  overflow: visible;\n  animation: popup 0.5s;\n  margin-top: 5px;\n}\n.popup-wrapper--hide {\n  opacity: 0;\n  margin-top: 0px;\n  animation: popuphide 0.5s reverse;\n}\n.popup {\n  box-sizing: border-box;\n  border: 1px solid transparent;\n  padding: 5px 10px;\n  border-radius: calc(0.5em + 10px);\n  cursor: default;\n  display: flex;\n  align-items: center;\n  box-shadow: 0 0 5px 1px rgba(150,150,150,0.5);\n}\n.popup__message {\n  flex: 1;\n  margin: 0 1em;\n}\n.popup__close {\n  position: relative;\n  height: 1em;\n  width: 1em;\n  cursor: pointer;\n}\n.popup__close:after,\n.popup__close:before {\n  position: absolute;\n  content: '';\n  left: calc(0.5em - 2px);\n  height: 1em;\n  width: 2px;\n  background-color: currentColor;\n}\n.popup__close:after {\n  transform: rotate(45deg);\n}\n.popup__close:before {\n  transform: rotate(-45deg);\n}\n.popup--primary,\n.popup--success {\n  background-color: #1e90ff;\n  border-color: #0a86ff;\n  color: #fff;\n}\n.popup--info {\n  background-color: #fff;\n  border-color: #dcdcdc;\n  color: #808080;\n  box-shadow: 0 0 5px 1px rgba(150,150,150,0.2);\n}\n.popup--warn {\n  background-color: #ffa500;\n  border-color: #eb9800;\n  color: #fff;\n}\n.popup--error {\n  background-color: #ff4500;\n  border-color: #eb3f00;\n  color: #fff;\n}\n@-moz-keyframes popup {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes popup {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@-o-keyframes popup {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes popup {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@-moz-keyframes popuphide {\n  0% {\n    margin-top: 0px;\n    opacity: 0;\n    transform: scale(0);\n  }\n  50% {\n    margin-top: 5px;\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    margin-top: 5px;\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes popuphide {\n  0% {\n    margin-top: 0px;\n    opacity: 0;\n    transform: scale(0);\n  }\n  50% {\n    margin-top: 5px;\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    margin-top: 5px;\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@-o-keyframes popuphide {\n  0% {\n    margin-top: 0px;\n    opacity: 0;\n    transform: scale(0);\n  }\n  50% {\n    margin-top: 5px;\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    margin-top: 5px;\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes popuphide {\n  0% {\n    margin-top: 0px;\n    opacity: 0;\n    transform: scale(0);\n  }\n  50% {\n    margin-top: 5px;\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    margin-top: 5px;\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n",""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(i=o,p=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(p),"/*# ".concat(s," */")),a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot).concat(n," */")});return[t].concat(a).concat([r]).join("\n")}var i,p,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var i=0;i<n.length;i++){var p=n[i];null!=p[0]&&o[p[0]]||(t&&!p[2]?p[2]=t:t&&(p[2]="(".concat(p[2],") and (").concat(t,")")),e.push(p))}},e}},function(n,e,t){"use strict";var o,r={},a=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}();function p(n,e){for(var t=[],o={},r=0;r<n.length;r++){var a=n[r],i=e.base?a[0]+e.base:a[0],p={css:a[1],media:a[2],sourceMap:a[3]};o[i]?o[i].parts.push(p):t.push(o[i]={id:i,parts:[p]})}return t}function s(n,e){for(var t=0;t<n.length;t++){var o=n[t],a=r[o.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](o.parts[i]);for(;i<o.parts.length;i++)a.parts.push(h(o.parts[i],e))}else{for(var p=[];i<o.parts.length;i++)p.push(h(o.parts[i],e));r[o.id]={id:o.id,refs:1,parts:p}}}}function c(n){var e=document.createElement("style");if(void 0===n.attributes.nonce){var o=t.nc;o&&(n.attributes.nonce=o)}if(Object.keys(n.attributes).forEach(function(t){e.setAttribute(t,n.attributes[t])}),"function"==typeof n.insert)n.insert(e);else{var r=i(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var u,l=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function f(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=l(e,r);else{var a=document.createTextNode(r),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}var d=null,m=0;function h(n,e){var t,o,r;if(e.singleton){var a=m++;t=d||(d=c(e)),o=f.bind(null,t,a,!1),r=f.bind(null,t,a,!0)}else t=c(e),o=function(n,e,t){var o=t.css,r=t.media,a=t.sourceMap;if(r&&n.setAttribute("media",r),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a());var t=p(n,e);return s(t,e),function(n){for(var o=[],a=0;a<t.length;a++){var i=t[a],c=r[i.id];c&&(c.refs--,o.push(c))}n&&s(p(n,e),e);for(var u=0;u<o.length;u++){var l=o[u];if(0===l.refs){for(var f=0;f<l.parts.length;f++)l.parts[f]();delete r[l.id]}}}}}])});
//# sourceMappingURL=poppuappu.js.map