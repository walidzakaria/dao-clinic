(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ee67a16"],{4340:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vue-tempalte"},[r("form",{on:{submit:[function(t){t.preventDefault()},function(e){return t.login()}]}},[r("h2",[t._v("Sign In")]),r("div",{staticClass:"form-group"},[r("label",[t._v("Email address")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",attrs:{type:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"form-group"},[r("label",[t._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t.showError?r("p",{staticClass:"text-danger"},[t._v("Unable to log in with provided credentials. "),r("br"),t._v(" If you're new user, please activate your account first. ")]):t._e(),r("button",{staticClass:"btn btn-dark btn-lg btn-block",attrs:{type:"submit"}},[t._v(" Sign In "),t.isLoading?r("span",{staticClass:"spinner-border"}):t._e()]),r("p",{staticClass:"forgot-password text-right mt-2 mb-4"},[r("router-link",{attrs:{to:"/signup/",exact:""}},[t._v("Create account ? ")]),r("router-link",{attrs:{to:"/reset/",exact:""}},[t._v("Forgot password ?")])],1)])])},n=[],a=(r("96cf"),r("1da1")),s=r("a78e"),i=r.n(s),u={data:function(){return{isLoading:!1,cuurentUser:{},email:"",password:"",showError:!1}},methods:{login:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isLoading){e.next=2;break}return e.abrupt("return");case 2:return t.isLoading=!0,e.next=5,t.$store.dispatch("user/retrieveToken",{email:t.email,password:t.password}).then((function(e){console.log(e),t.showError=!1,t.$store.dispatch("user/retrieveUserData").then((function(){var e=i.a.get("currentLink");console.log(e),e?window.location.href=e:t.$router.push("/"),i.a.remove("currentLink"),t.isLoading=!1}))})).catch((function(e){console.log(e),t.showError=!0,t.isLoading=!1}));case 5:case"end":return e.stop()}}),e)})))()}}},c=u,l=(r("4591"),r("2877")),d=Object(l["a"])(c,o,n,!1,null,"e4e884e2",null);e["default"]=d.exports},4591:function(t,e,r){"use strict";r("6fa2")},"6fa2":function(t,e,r){}}]);
//# sourceMappingURL=chunk-0ee67a16.50bfe02c.js.map