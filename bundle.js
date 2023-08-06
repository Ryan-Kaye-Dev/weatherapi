(()=>{var n={426:(n,e,t)=>{"use strict";t.d(e,{Z:()=>p});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),l=new URL(t(52),t.b),u=a()(o());u.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Anton&family=Roboto:wght@300&display=swap);"]);var d=s()(l);u.push([n.id,`* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background-image: url(${d});\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\n#header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  padding-bottom: 10px;\n}\n\ninput {\n  margin-top: 1vh;\n  font-family: "Roboto", sans-serif;\n  width: 12rem;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 0 0 0.2rem 2.2rem;\n  color: #ffffff;\n  font-size: 1.2rem;\n  border-radius: 0.5rem;\n}\n\n#search {\n  margin-top: 1vh;\n  fill: #ffffff;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  height: 5vh;\n  min-height: 5vh;\n  width: 5vh;\n  min-width: 5vh;\n  margin-left: 10px;\n  border: none;\n  outline: none;\n  background: rgba(255, 255, 255, 0.2);\n  color: #ffffff;\n  font-size: 1.2rem;\n  border-radius: 0.5rem;\n}\n\n#content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n}\n\n#weather-card {\n  padding-top: 20vh;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(min-content, max-content));\n  grid-template-rows: repeat(6, minmax(min-content, max-content)); /* Use minmax to control row height */\n  align-items: center;\n  justify-content: center;\n  width: 50vw;\n  font-family: "Roboto", sans-serif;\n  color: rgb(255, 255, 255);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  animation: popIn 0.5s ease-in-out; /* Add the animation */\n}\n\n\n.current-condition {\n  font-weight: 100;\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n}\n\n.location {\n  font-weight: 900;\n  grid-column: 1 / 3;\n  grid-row: 2 / 3;\n}\n\n.humidity {\n  font-weight: 600;\n  grid-column: 2 / 3;\n  grid-row: 4 / 5;\n}\n\n.temp-c, .temp-f {\n  position: relative;\n  top: -3vh;\n  grid-row: 3 / 6;\n  grid-column: 1 / 2;\n  font-size: 6rem;\n  font-weight: 200;\n  align-self: center;\n  justify-self: center;\n  font-family: 'Anton', sans-serif;\n  padding: 0;\n  margin-right: 1vw;\n}\n\n#weather-icon {\n  position: relative;\n  left: 2vw;\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  max-width: 4vw;\n  align-self: flex-start;\n  justify-self: flex-start;\n}\n\nsup {\n  font-size: 2rem;\n  font-family: 'Roboto', sans-serif;\n  position: relative;\n  top: -1.8rem;\n}\n\n#weather-card.hidden, .temp-f.hidden {\n  display: none;\n}\n\n/* Define the animation */\n@keyframes popIn {\n  0% {\n    transform: scale(0.5); /* Start with a smaller size */\n    opacity: 0; /* Start with opacity 0 to make it invisible */\n  }\n  100% {\n    transform: scale(1); /* Scale to regular size */\n    opacity: 1; /* Fully visible */\n  }\n}\n`,""]);const p=u},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},667:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),l=0;l<i.length;l++){var u=t(i[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=s}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},709:n=>{n.exports="data:image/svg+xml,%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e %3c!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --%3e %3csvg height='800px' width='800px' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 50 50' enable-background='new 0 0 50 50' xml:space='preserve'%3e %3cpath fill='%23231F20' d='M20.921,31.898c2.758,0,5.367-0.956,7.458-2.704l1.077,1.077l-0.358,0.358 c-0.188,0.188-0.293,0.442-0.293,0.707s0.105,0.52,0.293,0.707l8.257,8.256c0.195,0.195,0.451,0.293,0.707,0.293 s0.512-0.098,0.707-0.293l2.208-2.208c0.188-0.188,0.293-0.442,0.293-0.707s-0.105-0.52-0.293-0.707l-8.257-8.256 c-0.391-0.391-1.023-0.391-1.414,0l-0.436,0.436l-1.073-1.073c1.793-2.104,2.777-4.743,2.777-7.537c0-3.112-1.212-6.038-3.413-8.239 s-5.127-3.413-8.239-3.413s-6.038,1.212-8.238,3.413c-2.201,2.201-3.413,5.126-3.413,8.239c0,3.112,1.212,6.038,3.413,8.238 C14.883,30.687,17.809,31.898,20.921,31.898z M38.855,37.385l-0.794,0.793l-6.843-6.842l0.794-0.793L38.855,37.385z M14.097,13.423 c1.823-1.823,4.246-2.827,6.824-2.827s5.002,1.004,6.825,2.827c1.823,1.823,2.827,4.247,2.827,6.825 c0,2.578-1.004,5.001-2.827,6.824c-1.823,1.823-4.247,2.827-6.825,2.827s-5.001-1.004-6.824-2.827 c-1.823-1.823-2.827-4.247-2.827-6.824C11.27,17.669,12.273,15.246,14.097,13.423z'/%3e %3c/svg%3e"},52:(n,e,t)=>{"use strict";n.exports=t.p+"98a55a7ddf04bf9e039c.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.p="/",t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),l=t(216),u=t.n(l),d=t(589),p=t.n(d),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var h=t(709),g=t.n(h);const v=document.querySelector("input"),y=document.querySelector("img");y.src=g(),y.addEventListener("click",(()=>{!async function(n){const e=await fetch(`https://api.weatherapi.com/v1/current.json?key=442ebb5fc99c4cee850165546230208&q=${n}`),t=await e.json();console.log(t);const r=document.getElementById("weather-card"),o=r.querySelector(".current-condition"),i=r.querySelector(".location"),a=(r.querySelector(".region"),r.querySelector(".country"),r.querySelector(".date-and-time")),c=r.querySelector(".temp-c"),s=r.querySelector(".temp-f"),l=r.querySelector(".humidity"),u=r.querySelector("#weather-icon");o.textContent=t.current.condition.text.toUpperCase(),i.textContent=`${t.location.name}, ${t.location.country}`.toUpperCase(),a.textContent=t.location.localtime.substr(-5),c.innerHTML=`${t.current.temp_c}<sup>°C</sup>`,s.innerHTML=`${t.current.temp_f}<sup>°F</sup>`,l.textContent=`HUMIDITY: ${t.current.humidity}%`,u.src=t.current.condition.icon,r.classList.remove("hidden")}(v.value),v.value=""}))})()})();