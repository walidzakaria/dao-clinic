(function(t){function s(s){for(var e,o,l=s[0],r=s[1],c=s[2],d=0,p=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);u&&u(s);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,s=0;s<i.length;s++){for(var a=i[s],e=!0,l=1;l<a.length;l++){var r=a[l];0!==n[r]&&(e=!1)}e&&(i.splice(s--,1),t=o(o.s=a[0]))}return t}var e={},n={app:0},i=[];function o(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=e,o.d=function(t,s,a){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)o.d(a,e,function(s){return t[s]}.bind(null,e));return a},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=s,l=l.slice();for(var c=0;c<l.length;c++)s(l[c]);var u=r;i.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"034f":function(t,s,a){"use strict";a("85ec")},"07c1":function(t,s,a){},"08cd":function(t,s,a){"use strict";a("246f")},"1bd6":function(t,s,a){t.exports=a.p+"static/img/DAO-LOGO.4419de6b.png"},"246f":function(t,s,a){},"35b6":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAQAAAD2e2DtAAACSElEQVR42u3aMW4TQRQG4N/rJopCk8oHSOkrpEmXXCDKRRASFFiCM0BJzkFOEKScwQ3EVSLK2GsPxa5sKwEK6Ha+753g7XuamTc7CQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPyPUZqMBxpNRgr8t9KPq8hzrA1+/1k6JznPZa4GGJc5z8mzbOk1SY7zOnd5ShlwPOUub3LcZ0y/9CfJZb73H2mT9UBj02f4I1d7mZPkQ0pKlmmzGXi0Waak5KOi7xb/tylZp03pP9Jwt4AuuzZtSt7ZCLoPcNYv+2Xgxd9vgW47ONMCSXKbklVKBcXfNUGX8a3RL7lI6Xf+UlF0p4GSi7pHwnGSzylZVtkAy5R8qv1OoMm3fgUolUW3AtzWfgY4zP32SFRbA6xTcp/DuhvgKA8pWVdX/tJn/ZCjuhvgIPOqV4B5DmqfBG5S0la5ArQp+WoMnFU9BczqngKaJNMqroBflr+7DJrWfhfYJLlOybKSi+DdZfAyJdeugkdJJllU1AK78i8y8Uu42wFPs9o7CWwGXPzd7r/KqZdB+y2w2L4I6J5ODC/WWW9fAyyU/3kLTPIlq0rGv+tMlP9lCyTTvM9N5nnMzwHGY+a5ySzTvYzZOw4229vBVwONg+3s4zXgH4bCcQVrnTdAAAAAAAAAAAAAAAAAAADAP/gFTRo+xS8U7EkAAAAASUVORK5CYII="},"39df":function(t,s,a){t.exports=a.p+"static/img/user-avatar.d7cca09f.png"},"442e":function(t,s,a){t.exports=a.p+"static/img/chat-logo.3b266c41.png"},"56d7":function(t,s,a){"use strict";a.r(s);a("b0c0"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),n=a("5f5b"),i=a("b1e0"),o=a("b408"),l=a.n(o),r=a("323e"),c=a.n(r),u=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("header",{staticClass:"container-fluid",attrs:{id:"app-header"}},[e("nav",{ref:"navbar",staticClass:"navbar navbar-expand-lg navbar-light bg-light is-transparent is-fixed-top",attrs:{id:"navbar"}},[e("router-link",{staticClass:"navbar-brand",attrs:{id:"logo-link",to:"/"}},[e("img",{attrs:{id:"logo",src:a("1bd6"),alt:"home logo"}})]),e("button",{staticClass:"navbar-toggler",attrs:{type:"button"},on:{click:function(s){return s.stopPropagation(),t.toggleNavbar()}}},[e("span",{staticClass:"navbar-toggler-icon"})]),e("div",{ref:"mynav",class:t.collapseClasses,style:t.collapseStyle,attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/",exact:""}},[t._v("HOME")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/about/",exact:""}},[t._v("ABOUT US")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/appointments/",exact:""}},[t._v(" APPOINTMENTS ")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/prices/",exact:""}},[t._v("PRICES")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/contact/"}},[t._v("CONTACT US")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("LOGIN")])],1),t._m(0)])])],1)]),e("main",{staticClass:"container content"},[e("router-view"),e("button",{staticClass:"btn btn-primary"},[t._v("GO")])],1),e("ChatBox"),e("Footer")],1)},d=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbardrop","data-toggle":"dropdown"}},[t._v(" Dropdown link ")]),a("div",{staticClass:"dropdown-menu"},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Link 1")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Link 2")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Link 3")])])])}],p=a("5530"),m=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("div",{staticClass:"row chat-window col-xs-3 col-md-3",staticStyle:{"margin-left":"10px"},attrs:{id:"chat_window_1"}},[e("div",{staticClass:"col-xs-12 col-md-12"},[e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-heading top-bar",on:{click:function(s){return t.toggleChat()}}},[e("h5",{},[t._v("Leave a Message "),t.open?t._e():e("span",{staticClass:"chat-logo-container"},[e("img",{attrs:{id:"chat-logo",src:a("442e"),alt:""}})]),t.open?e("span",{staticClass:"chat-logo-container"},[e("img",{attrs:{id:"chat-logo",src:a("35b6"),alt:""}})]):t._e()])]),t.open?t._t("default",[t._m(0),t._m(1)]):t._e()],2)])]),t._m(2)])},v=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"panel-body msg_container_base",attrs:{id:"dialog-container"}},[e("div",{staticClass:"row msg_container base_sent"},[e("div",{staticClass:"col-md-10 col-xs-10"},[e("div",{staticClass:"messages msg_sent"},[e("p",[t._v("that mongodb thing looks good, huh? tiny master db, and huge document store")]),e("time",{attrs:{datetime:"2009-11-13T20:00"}},[t._v("Timothy • 51 min")])])]),e("div",{staticClass:"col-md-2 col-xs-2 avatar"},[e("img",{staticClass:" img-responsive ",attrs:{src:a("39df")}})])]),e("div",{staticClass:"row msg_container base_receive"},[e("div",{staticClass:"col-md-2 col-xs-2 avatar"},[e("img",{staticClass:" img-responsive ",attrs:{src:"http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"}})]),e("div",{staticClass:"col-md-10 col-xs-10"},[e("div",{staticClass:"messages msg_receive"},[e("p",[t._v("that mongodb thing looks good, huh? tiny master db, and huge document store")]),e("time",{attrs:{datetime:"2009-11-13T20:00"}},[t._v("Timothy • 51 min")])])])]),e("div",{staticClass:"row msg_container base_receive"},[e("div",{staticClass:"col-md-2 col-xs-2 avatar"},[e("img",{staticClass:" img-responsive ",attrs:{src:"http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"}})]),e("div",{staticClass:"col-xs-10 col-md-10"},[e("div",{staticClass:"messages msg_receive"},[e("p",[t._v("that mongodb thing looks good, huh? tiny master db, and huge document store")]),e("time",{attrs:{datetime:"2009-11-13T20:00"}},[t._v("Timothy • 51 min")])])])]),e("div",{staticClass:"row msg_container base_sent"},[e("div",{staticClass:"col-xs-10 col-md-10"},[e("div",{staticClass:"messages msg_sent"},[e("p",[t._v("that mongodb thing looks good, huh? tiny master db, and huge document store")]),e("time",{attrs:{datetime:"2009-11-13T20:00"}},[t._v("Timothy • 51 min")])])]),e("div",{staticClass:"col-md-2 col-xs-2 avatar"},[e("img",{staticClass:" img-responsive ",attrs:{src:"http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"}})])]),e("div",{staticClass:"row msg_container base_receive"},[e("div",{staticClass:"col-md-2 col-xs-2 avatar"},[e("img",{staticClass:" img-responsive ",attrs:{src:"http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"}})]),e("div",{staticClass:"col-xs-10 col-md-10"},[e("div",{staticClass:"messages msg_receive"},[e("p",[t._v("that mongodb thing looks good, huh? tiny master db, and huge document store")]),e("time",{attrs:{datetime:"2009-11-13T20:00"}},[t._v("Timothy • 51 min")])])])]),e("div",{staticClass:"row msg_container base_sent"},[e("div",{staticClass:"col-md-10 col-xs-10 "},[e("div",{staticClass:"messages msg_sent"},[e("p",[t._v("that mongodb thing looks good, huh? tiny master db, and huge document store")]),e("time",{attrs:{datetime:"2009-11-13T20:00"}},[t._v("Timothy • 51 min")])])]),e("div",{staticClass:"col-md-2 col-xs-2 avatar"},[e("img",{staticClass:" img-responsive ",attrs:{src:"http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"}})])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"panel-footer"},[a("div",{staticClass:"input-group"},[a("input",{staticClass:"form-control input-sm chat_input",attrs:{id:"btn-input",type:"text",placeholder:"Write your message here..."}}),a("span",{staticClass:"input-group-btn"},[a("button",{staticClass:"btn btn-primary btn-sm",attrs:{id:"btn-chat"}},[t._v("Send")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"btn-group dropup"},[a("button",{staticClass:"btn btn-default dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[a("span",{staticClass:"glyphicon glyphicon-cog"}),a("span",{staticClass:"sr-only"},[t._v("Toggle Dropdown")])]),a("ul",{staticClass:"dropdown-menu",attrs:{role:"menu"}},[a("li",[a("a",{attrs:{href:"#",id:"new_chat"}},[a("span",{staticClass:"glyphicon glyphicon-plus"}),t._v(" Novo")])]),a("li",[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"glyphicon glyphicon-list"}),t._v(" Ver outras")])]),a("li",[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"glyphicon glyphicon-remove"}),t._v(" Fechar Tudo")])]),a("li",{staticClass:"divider"}),a("li",[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"glyphicon glyphicon-eye-close"}),t._v(" Invisivel")])])])])}],f={name:"ChatBox",data:function(){return{open:!1}},methods:{toggleChat:function(){this.open=!this.open,window.scrollTo(0,document.body.scrollHeight)}}},h=f,g=(a("08cd"),a("2877")),A=Object(g["a"])(h,m,v,!1,null,"d814ec84",null),b=A.exports,C=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("footer",{staticClass:"page-footer font-small pt-4 mt-4",attrs:{color:"stylish-color-dark"}},[a("div",{staticClass:"text-left"},[a("div",[a("div",{attrs:{md:"6"}},[a("h5",{staticClass:"text-uppercase mb-4 mt-3 font-weight-bold"},[t._v("Footer Content")]),a("p",[t._v("Here you can use rows and columns here to organize your footer content")])]),a("hr",{staticClass:"clearfix w-100 d-md-none"}),a("div",{attrs:{md:"2"}},[a("h5",{staticClass:"text-uppercase mb-4 mt-3 font-weight-bold"},[t._v("Links")]),a("ul",{staticClass:"list-unstyled"},[a("li",[a("a",{attrs:{href:"#!"}},[t._v("Link1")])]),a("li",[a("a",{attrs:{href:"#!"}},[t._v("Link2")])]),a("li",[a("a",{attrs:{href:"#!"}},[t._v("Link3")])]),a("li",[a("a",{attrs:{href:"#!"}},[t._v("Link4")])])]),a("hr",{staticClass:"clearfix w-100 d-md-none"})]),a("div",{attrs:{md:"2"}},[a("h5",{staticClass:"text-uppercase mb-4 mt-3 font-weight-bold"},[t._v("Links")]),a("ul",{staticClass:"list-unstyled"},[a("li",[a("a",{attrs:{href:"#!"}},[t._v("Link1")])]),a("li",[a("a",{attrs:{href:"#!"}},[t._v("Link2")])]),a("li",[a("a",{attrs:{href:"#!"}},[t._v("Link3")])]),a("li",[a("a",{attrs:{href:"#!"}},[t._v("Link4")])])]),a("hr",{staticClass:"clearfix w-100 d-md-none"})])])]),a("hr"),a("div",{staticClass:"text-center py-3"},[a("ul",{staticClass:"list-unstyled list-inline mb-0"},[a("li",{staticClass:"list-inline-item"},[a("h5",{staticClass:"mb-1"},[t._v("Register for free")])]),a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"btn btn-danger btn-rounded",attrs:{href:"#"}},[t._v("Sign up!")])])])]),a("div",{staticClass:"text-center"},[a("ul",{staticClass:"list-unstyled list-inline"},[a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"btn-floating btn-sm btn-fb mx-1",attrs:{href:"#"}},[a("i",{staticClass:"fab fa-facebook"})])]),a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"btn-floating btn-sm btn-tw mx-1",attrs:{href:"#"}},[a("i",{staticClass:"fab fa-twitter"})])]),a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"btn-floating btn-sm btn-li mx-1",attrs:{href:"#"}},[a("i",{staticClass:"fab fa-linked-in"})])])])]),a("div",{staticClass:"footer-copyright text-center py-3"},[a("div",{attrs:{fluid:""}},[t._v(" © 2020 Copyright: "),a("a",{attrs:{href:"#"}},[t._v("Walid")])])])])}],w={name:"Footer",components:{}},y=w,k=(a("c233"),Object(g["a"])(y,C,_,!1,null,"1117c9d3",null)),x=k.exports,O={created:function(){document.title="DAO World"},mounted:function(){this.$nextTick((function(){window.addEventListener("scroll",(function(){var t=document.getElementById("navbar"),s=document.getElementById("logo"),a=t.classList,e=s.classList;document.documentElement.scrollTop>=100?!1===a.contains("shrink-nav")&&(a.toggle("shrink-nav"),e.toggle("shrink-logo")):!0===a.contains("shrink-nav")&&(a.toggle("shrink-nav"),e.toggle("shrink-logo"))}))})),this.$options.sockets.onmessage=function(t){return console.log(t)}},components:{ChatBox:b,Footer:x},data:function(){return{collapseClasses:{"navbar-collapse":!0,collapse:!0,collapsing:!1,show:!1},collapseStyle:{}}},methods:{toggleNavbar:function(){var t=this,s=this.collapseClasses;this.collapseClasses=Object(p["a"])(Object(p["a"])({},s),{collapsing:!0,collapse:!1,show:!1}),setTimeout((function(){var a=t.$refs.mynav.clientHeight;console.log(a),t.collapseStyle={height:"195px"},t.collapseClasses=Object(p["a"])(Object(p["a"])({},s),{collapsing:!1,collapse:!0,show:!s.show})}),340)}}},T=O,S=(a("034f"),Object(g["a"])(T,u,d,!1,null,null,null)),E=S.exports,P=a("8c4f"),j=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home"},[a("HomePage"),a("h1",[t._v(" DAO Clinic ")]),a("h3",[t._v("Make the new you!")]),a("h2",[t._v(" Our Services ")]),a("h3",[t._v("Medical Care")]),a("h3",[t._v("Diet Plans and Weight Loss")]),a("h3",[t._v("DAO Academy")]),a("h3",[t._v("Golden Transformers")])],1)},L=[],$=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home"},[e("img",{attrs:{id:"staff-image",src:a("c5d5"),alt:"staff image"}}),t._m(0),e("Footer")],1)},G=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"slogan"},[a("h1",[t._v("We help people reach new era!")]),a("h4",[t._v("Our team of specialists is ready to help you. Book an appointment now!")])])}],F={name:"HomePage",props:{}},M=F,z=(a("586e"),Object(g["a"])(M,$,G,!1,null,null,null)),B=z.exports,U={name:"Home",components:{HomePage:B}},D=U,K=Object(g["a"])(D,j,L,!1,null,null,null),W=K.exports,J=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],H={},I=Object(g["a"])(H,J,N,!1,null,null,null),R=I.exports,Z=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"appointments"},[a("h1",[t._v("This is an appointments page")])])}],X={},Q=Object(g["a"])(X,Z,V,!1,null,null,null),q=Q.exports,Y=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},tt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"prices"},[a("h1",[t._v("This is prices page")])])}],st={},at=Object(g["a"])(st,Y,tt,!1,null,null,null),et=at.exports,nt=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},it=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"contact-us"},[a("h1",[t._v("This is contact us page")])])}],ot={},lt=Object(g["a"])(ot,nt,it,!1,null,null,null),rt=lt.exports,ct=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},ut=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"session"},[a("h1",[t._v("This is session")])])}],dt={name:"VideoSession",props:{sessionId:{type:String}},computed:{currentSession:function(){var t=this;return t}}},pt=dt,mt=Object(g["a"])(pt,ct,ut,!1,null,null,null),vt=mt.exports;e["default"].use(P["a"]);var ft=[{path:"/",name:"Home",component:W},{path:"/about",name:"About",component:R},{path:"/appointments",name:"Appointments",component:q},{path:"/prices",name:"Prices",component:et},{path:"/contact",name:"Contact",component:rt},{path:"/session/:sessionId",name:"Session",component:vt,props:!0}],ht=new P["a"]({mode:"history",routes:ft});ht.beforeResolve((function(t,s,a){a()})),ht.afterEach((function(t,s){}));var gt=ht,At=a("2f62");e["default"].use(At["a"]);var bt=new At["a"].Store({state:{},mutations:{},actions:{},modules:{}});a("f9e3"),a("2dd8"),a("a5d8");e["default"].config.productionTip=!1,e["default"].use(n["a"]),e["default"].use(i["a"]),e["default"].use(l.a,"ws://127.0.0.1:8000/ws/chat/5463360595343258887311041973949567202/",{reconnection:!0,reconnectionAttempts:5,reconnectionDelay:3e3}),new e["default"]({router:gt,store:bt,components:{},render:function(t){return t(E)}}).$mount("#app"),gt.beforeResolve((function(t,s,a){t.name&&c.a.start(),a()})),gt.afterEach((function(t,s){c.a.done()}))},"586e":function(t,s,a){"use strict";a("bfac")},"85ec":function(t,s,a){},bfac:function(t,s,a){},c233:function(t,s,a){"use strict";a("07c1")},c5d5:function(t,s,a){t.exports=a.p+"static/img/cropped-staff-1.2b9cf2cd.jpeg"}});
//# sourceMappingURL=app.95aa4158.js.map