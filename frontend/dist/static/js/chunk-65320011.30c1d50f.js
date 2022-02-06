(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65320011"],{"2a93":function(e,t,r){},"67e6":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vue-tempalte"},[e.registered?r("div",[r("h2",[e._v("You're registered successfully!")]),r("p",[e._v("Please check your email for confirmation.")]),r("p",[e._v("Click "),r("router-link",{attrs:{to:"/"}},[e._v("here")]),e._v(" to visit our home page.")],1)]):e._e(),e.registered?e._e():r("form",{on:{submit:[function(e){e.preventDefault()},function(t){return e.signup()}]}},[r("h2",[e._v("Sign Up")]),r("div",{staticClass:"form-group"},[e._m(0),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.newUser.username,expression:"newUser.username",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",attrs:{type:"text",required:""},domProps:{value:e.newUser.username},on:{input:function(t){t.target.composing||e.$set(e.newUser,"username",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("ul",e._l(e.invalidEntry.username,(function(t,s){return r("li",{key:s,staticClass:"text-danger"},[e._v(e._s(t)+" ")])})),0)]),r("div",{staticClass:"form-group"},[e._m(1),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.newUser.email,expression:"newUser.email",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",attrs:{type:"email",required:""},domProps:{value:e.newUser.email},on:{input:function(t){t.target.composing||e.$set(e.newUser,"email",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("ul",e._l(e.invalidEntry.email,(function(t,s){return r("li",{key:s,staticClass:"text-danger"},[e._v(e._s(t)+" ")])})),0)]),r("div",{staticClass:"form-group"},[e._m(2),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.newUser.phone,expression:"newUser.phone",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",attrs:{type:"tel",required:""},domProps:{value:e.newUser.phone},on:{input:function(t){t.target.composing||e.$set(e.newUser,"phone",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("ul",e._l(e.invalidEntry.phone,(function(t,s){return r("li",{key:s,staticClass:"text-danger"},[e._v(e._s(t)+" ")])})),0)]),r("div",{staticClass:"form-group"},[r("label",[e._v("First Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.newUser.firstName,expression:"newUser.firstName",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",attrs:{type:"text"},domProps:{value:e.newUser.firstName},on:{input:function(t){t.target.composing||e.$set(e.newUser,"firstName",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("ul",e._l(e.invalidEntry.firstName,(function(t,s){return r("li",{key:s,staticClass:"text-danger"},[e._v(e._s(t)+" ")])})),0)]),r("div",{staticClass:"form-group"},[r("label",[e._v("Last Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.newUser.lastName,expression:"newUser.lastName",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",attrs:{type:"text"},domProps:{value:e.newUser.lastName},on:{input:function(t){t.target.composing||e.$set(e.newUser,"lastName",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("ul",e._l(e.invalidEntry.lastName,(function(t,s){return r("li",{key:s,staticClass:"text-danger"},[e._v(e._s(t)+" ")])})),0)]),r("div",{staticClass:"form-group"},[e._m(3),r("select",{directives:[{name:"model",rawName:"v-model",value:e.newUser.country,expression:"newUser.country"}],staticClass:"form-control",attrs:{name:"country",id:"country",required:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newUser,"country",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"null"}},[e._v("--Select Country--")]),e._l(e.countries.main,(function(t,s){return r("option",{key:s,domProps:{value:s}},[e._v(" "+e._s(t)+" ")])})),r("option",{attrs:{value:"null",disabled:""}},[e._v("---MORE---")]),e._l(e.countries.all,(function(t,s){return r("option",{key:s,domProps:{value:s}},[e._v(" "+e._s(t)+" ")])}))],2),r("ul",e._l(e.invalidEntry.country,(function(t,s){return r("li",{key:s,staticClass:"text-danger"},[e._v(e._s(t)+" ")])})),0)]),r("div",{staticClass:"form-group"},[e._m(4),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.password,expression:"newUser.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",required:""},domProps:{value:e.newUser.password},on:{input:function(t){t.target.composing||e.$set(e.newUser,"password",t.target.value)}}}),r("ul",e._l(e.invalidEntry.password,(function(t,s){return r("li",{key:s,staticClass:"text-danger"},[e._v(e._s(t)+" ")])})),0)]),r("div",{staticClass:"form-group"},[e._m(5),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.rePassword,expression:"newUser.rePassword"}],staticClass:"form-control form-control-lg",attrs:{type:"password",required:""},domProps:{value:e.newUser.rePassword},on:{input:function(t){t.target.composing||e.$set(e.newUser,"rePassword",t.target.value)}}})]),r("ul",e._l(e.invalidEntry.nonFieldErrors,(function(t,s){return r("li",{key:s,staticClass:"text-danger"},[e._v(e._s(t)+" ")])})),0),r("button",{staticClass:"btn btn-dark btn-lg btn-block",attrs:{type:"submit"}},[e._v(" Sign Up "),e.isLoading?r("span",{staticClass:"spinner-border"}):e._e()]),r("p",{staticClass:"forgot-password text-right"},[e._v(" Already registered "),r("router-link",{attrs:{to:"/login/",exact:""}},[e._v("sign in?")])],1)])])},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",[e._v("Username "),r("span",{staticClass:"text-danger"},[e._v("*")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",[e._v("Email address "),r("span",{staticClass:"text-danger"},[e._v("*")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",[e._v("Phone Number "),r("span",{staticClass:"text-danger"},[e._v("*")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",[e._v("Country "),r("span",{staticClass:"text-danger"},[e._v("*")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",[e._v("Password "),r("span",{staticClass:"text-danger"},[e._v(" *")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",[e._v("Retype Password "),r("span",{staticClass:"text-danger"},[e._v(" *")])])}],a=(r("96cf"),r("1da1")),i={data:function(){return{isLoading:!1,registered:!1,newUser:{username:"",email:"",phone:"",firstName:"",lastName:"",password:"",rePassword:"",country:null},invalidEntry:{username:[],email:[],phone:[],firstName:[],lastName:[],country:[],password:[],rePassword:[],nonFieldErrors:[]},countries:{all:this.$store.state.country.allCountries,main:this.$store.state.country.mainCountries}}},computed:{},methods:{signup:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.isLoading){t.next=2;break}return t.abrupt("return");case 2:return e.isLoading=!0,r={username:e.newUser.username,phone:e.newUser.phone,first_name:e.newUser.firstName,last_name:e.newUser.lastName,country:e.newUser.country,email:e.newUser.email,password:e.newUser.password,re_password:e.newUser.rePassword},t.next=6,e.$store.dispatch("user/register",r).then((function(t){console.log(t),e.registered=!0,window.scroll({top:0,left:0,behavior:"smooth"})})).catch((function(t){e.invalidEntry.username=t.username||[],e.invalidEntry.phone=t.phone||[],e.invalidEntry.firstName=t.firstName||[],e.invalidEntry.lastName=t.lastName||[],e.invalidEntry.email=t.email||[],e.invalidEntry.password=t.password||[],e.invalidEntry.country=t.country||[],e.invalidEntry.nonFieldErrors=e.newUser.password===e.newUser.rePassword?[]:["The two password fields didn't match."]}));case 6:e.isLoading=!1;case 7:case"end":return t.stop()}}),t)})))()}}},o=i,l=(r("d3cc"),r("2877")),u=Object(l["a"])(o,s,n,!1,null,"0759dc20",null);t["default"]=u.exports},d3cc:function(e,t,r){"use strict";r("2a93")}}]);
//# sourceMappingURL=chunk-65320011.30c1d50f.js.map