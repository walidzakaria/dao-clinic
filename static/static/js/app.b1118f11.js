(function(t){function e(e){for(var r,u,i=e[0],c=e[1],s=e[2],l=0,p=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function u(t){return i.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"5569cf4b"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(t);var s=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1bd6":function(t,e,n){t.exports=n.p+"static/img/DAO-LOGO.306f3575.png"},"514b":function(t,e,n){"use strict";n("d963")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("header",{staticClass:"is-scrolled"},[r("router-link",{attrs:{id:"logo-link",to:"/"}},[r("img",{attrs:{id:"logo",src:n("1bd6"),alt:"home logo"}})]),r("nav",[r("router-link",{attrs:{to:"/"}},[t._v("HOME")]),r("router-link",{attrs:{to:"about/"}},[t._v("ABOUT US")]),r("router-link",{attrs:{to:"/"}},[t._v("APPOINTMENTS")]),r("router-link",{attrs:{to:"/"}},[t._v("PRICES")]),r("router-link",{attrs:{to:"/"}},[t._v("CONTACT US")])],1)],1),r("main"),r("router-view"),r("footer")],1)},a=[],u={created:function(){document.title="DAO World"}},i=u,c=(n("514b"),n("2877")),s=Object(c["a"])(i,o,a,!1,null,"4285a3c1",null),l=s.exports,f=(n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HomePage")],1)},d=[],m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{id:"staff-image",src:n("c5d5"),alt:"staff image"}}),r("div",{staticClass:"slogan"},[r("h1",[t._v("We help people reach new era!")]),r("h4",[t._v("Our team of specialists is ready to help you. Book an appointment now!")])])])}],b={name:"HomePage",props:{}},h=b,g=(n("586e"),Object(c["a"])(h,m,v,!1,null,null,null)),y=g.exports,O={name:"Home",components:{HomePage:y}},_=O,w=Object(c["a"])(_,p,d,!1,null,null,null),j=w.exports;r["a"].use(f["a"]);var P=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],k=new f["a"]({routes:P}),x=k,E=n("2f62");r["a"].use(E["a"]);var S=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:x,store:S,render:function(t){return t(l)}}).$mount("#app")},"586e":function(t,e,n){"use strict";n("bfac")},bfac:function(t,e,n){},c5d5:function(t,e,n){t.exports=n.p+"static/img/cropped-staff-1.2b9cf2cd.jpeg"},d963:function(t,e,n){}});
//# sourceMappingURL=app.b1118f11.js.map