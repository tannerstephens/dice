!function(e){var n={};function t(r){if(n[r])return n[r].exports;var c=n[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)t.d(r,c,function(n){return e[n]}.bind(null,c));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n){var t=function(e){if(!e[0].target.dataset.loaded&&!0===e[0].isIntersecting){var n=e[0].target.children[0].children[0],t=new Image;t.onload=function(){n.src=t.src},t.src=n.dataset.url,e[0].target.dataset.loaded=!0}};document.addEventListener("DOMContentLoaded",(function(){var e,n=document.getElementById("root"),r=n.parentElement;n.remove(),(e=new Headers,e.append("pragma","no-cache"),e.append("cache-control","no-cache"),fetch("assets/dice/dice.json",{method:"get",headers:e}).then((function(e){return e.json()}))).then((function(e){return e.map((function(e){return function(e){var n=document.createElement("div");n.classList.add("column"),n.classList.add("is-one-quarter"),n.id="column-".concat(e),n.dataset.dice=e;var r=document.createElement("div");r.id="box-".concat(e),r.classList.add("box"),r.classList.add("dice");var c=new Image;return c.id="image-".concat(e),c.width=300,c.height=300,c.dataset.url="assets/dice/".concat(e),r.append(c),n.append(r),new IntersectionObserver(t,{threshold:[0]}).observe(n),n}(e)}))})).then((function(e){return e.forEach((function(e){return r.append(e)}))})).then((function(){return function(e){var n=e.parentElement;Array.from(e.children).forEach((function(e){var t=e.dataset.dice,r=document.createElement("div");r.classList.add("modal"),r.id="modal-".concat(t),r.innerHTML='\n      <div class="modal-background"></div>\n      <div class="modal-content">\n        <div class="box">\n          <img data-src="assets/dice/'.concat(t,'">\n        </div>\n      </div>\n    '),n.append(r),e.children[0].onclick=function(){r.children[1].children[0].children[0].src=r.children[1].children[0].children[0].dataset.src,r.classList.add("is-active")},r.children[0].onclick=function(){r.classList.remove("is-active")}}))}(r)}))}))}]);