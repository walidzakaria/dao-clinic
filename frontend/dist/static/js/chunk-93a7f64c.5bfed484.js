(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93a7f64c"],{2165:function(t,e,s){t.exports=s.p+"static/img/chat-logo.b47c8ced.svg"},"25f0":function(t,e,s){"use strict";var n=s("6eeb"),a=s("825a"),o=s("d039"),c=s("ad6d"),i="toString",r=RegExp.prototype,l=r[i],u=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),h=l.name!=i;(u||h)&&n(RegExp.prototype,i,(function(){var t=a(this),e=String(t.source),s=t.flags,n=String(void 0===s&&t instanceof RegExp&&!("flags"in r)?c.call(t):s);return"/"+e+"/"+n}),{unsafe:!0})},"33db":function(t,e,s){t.exports=s.p+"static/img/employee-avatar.ace33b7f.jpg"},"5be9":function(t,e,s){"use strict";s("8ecf")},"6ec7":function(t,e,s){t.exports=s.p+"static/img/user-avatar.ea787184.jpg"},"75d1":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row chat-window col-3",staticStyle:{"margin-left":"10px"},attrs:{id:"chat_window_1"}},[n("div",{staticClass:"col-12"},[!t.open&&t.unreadNo>0?n("span",{staticClass:"unread"},[t._v(t._s(t.unreadMsg))]):t._e(),n("div",{staticClass:"panel panel-default"},[n("div",{staticClass:"panel-heading top-bar",on:{click:function(e){return t.toggleChat()}}},[n("h5",{attrs:{id:"chat-header"}},[n("p",{attrs:{id:"chat-caption"}},[t._v("Chat Now")]),t.open?t._e():n("span",{staticClass:"chat-logo-container"},[n("img",{attrs:{id:"chat-logo",src:s("2165"),alt:""}})]),t.open?n("span",{staticClass:"chat-logo-container"},[n("img",{attrs:{id:"chat-logo",src:s("b2f0"),alt:""}})]):t._e()])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}]},[n("div",{ref:"chat-box",staticClass:"panel-body msg_container_base",class:{"hidden-chat-box":!t.open},attrs:{id:"dialog-container"}},t._l(t.chat,(function(e,s){return n("div",{key:s},[e.is_client?n("div",[n("div",{staticClass:"row msg_container base_sent"},[n("div",{staticClass:"col-10"},[n("div",{staticClass:"messages msg_sent"},[n("p",[t._v(t._s(e.message))]),n("time",{attrs:{datetime:"2009-11-13T20:00"}},[t._v(" Me • "+t._s(t.calcTime(e.time))+" ")])])]),t._m(0,!0)])]):n("div",[n("div",{staticClass:"row msg_container base_receive"},[t._m(1,!0),n("div",{staticClass:"col-10"},[n("div",{staticClass:"messages msg_receive"},[n("p",[t._v(t._s(e.message))]),n("time",{attrs:{datetime:"2009-11-13T20:00"}},[t._v(" "+t._s(e.user)+" • "+t._s(t.calcTime(e.time))+" ")])])])])])])})),0),n("div",{staticClass:"panel-footer"},[n("div",{staticClass:"input-group",class:{"hidden-chat-box":!t.open}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userMessage,expression:"userMessage"}],ref:"chat-input",staticClass:"form-control input-sm chat_input",attrs:{id:"btn-input",type:"text",placeholder:"Write your message here...",autocomplete:"off"},domProps:{value:t.userMessage},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMessage()},focus:function(e){return t.markRead()},input:function(e){e.target.composing||(t.userMessage=e.target.value)}}}),n("span",{staticClass:"input-group-btn"},[n("button",{staticClass:"btn btn-dark btn-sm",attrs:{id:"btn-chat"},on:{click:function(e){return t.sendMessage()}}},[t._v(" Send ")])])])])])])])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-2 avatar"},[n("img",{staticClass:"img-responsive",attrs:{src:s("6ec7")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-2 avatar"},[n("img",{staticClass:"img-responsive",attrs:{src:s("33db")}})])}],o=(s("99af"),s("d3b7"),s("25f0"),s("96cf"),s("1da1")),c=s("5530"),i=s("2f62");function r(t){var e=t<10?"0".concat(t.toString()):t.toString();return e}var l={name:"ChatBox",data:function(){return{open:!1,connection:null,chat:this.$store.state.chat.conversation,userMessage:null,username:this.$store.state.user.userInfo.username,userId:0,clientId:this.$store.state.chat.clientId,unreadNo:0}},computed:Object(c["a"])(Object(c["a"])({},Object(i["c"])("chat",["conversation"],"user",["userInfo","requestErrors","loginName"])),{},{unreadMsg:function(){var t=this.open?0:this.unreadNo;return t}}),created:function(){console.log("chatbox created")},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("chatbox mounted"),t.$nextTick((function(){t.username=t.$store.state.user.userInfo.username,t.userId=t.$store.state.user.userInfo.id||0,t.clientId=t.$store.state.chat.clientId,t.chat=t.$store.state.chat.conversation,console.log(t.$store.state.chat.clientId)}));case 2:case"end":return e.stop()}}),e)})))()},methods:Object(c["a"])(Object(c["a"])({},Object(i["b"])("chat",["getConversation"])),{},{getWebsocketLink:function(){console.log(this.clientId);var t="https:"===window.location.protocol?"wss":"ws",e=window.location.host;"127.0.0.1:8080"===e||"127.0.0.1:8000"===e?e="127.0.0.1:8000":e+=":8001";var s="".concat(t,"://").concat(e,"/ws/chat/").concat(this.clientId,"/client/").concat(this.userId,"/");return console.log("websocket is",s),s},toggleChat:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.open=!t.open,t.unreadNo=0,"0000"!==t.clientId){e.next=5;break}return e.next=5,t.$store.dispatch("chat/getClientId").then(t.clientId=t.$store.state.chat.clientId);case 5:if(console.log(t.chat.length),0!==t.chat.length){e.next=9;break}return e.next=9,t.$store.dispatch("chat/getConversation").then(t.chat=t.$store.state.chat.conversation,console.log(t.chat));case 9:t.applyConnection(),t.chat=t.$store.getters["chat/conversation"],t.scrollChat();case 12:case"end":return e.stop()}}),e)})))()},markRead:function(){var t={type:"notification_read",message:"notification_read",user:this.$store.state.user.userInfo.username,user_id:this.$store.state.user.userInfo.id,is_client:!0};try{this.connection.send(JSON.stringify(t))}catch(e){console.log(e)}finally{this.userMessage=null}},sendMessage:function(){if(this.userMessage){console.log(this.userMessage);var t={type:"chat_message",message:this.userMessage,user:this.$store.state.user.userInfo.username,user_id:this.$store.state.user.userInfo.id,is_client:!0};try{this.connection.send(JSON.stringify(t))}catch(e){console.log(e)}finally{this.userMessage=null}}},applyConnection:function(){var t=this;this.connection||(this.getConversation(this.clientId),this.connection=new WebSocket(this.getWebsocketLink()),this.connection.onclose=function(e){setTimeout((function(){console.log("connecting..."),t.connection.reconnet(e)}),1e3)},this.connection.onopen=function(t){console.log(t)},this.connection.onmessage=function(e){var s=JSON.parse(e.data);console.log("chat message data: ",s);var n={type:s.type,message:s.message,room:t.clientId,time:s.time,user:s.user,is_client:s.is_client};"chat_message"===n.type&&(t.chat.push(n),t.unreadNo+=1,t.scrollChat()),console.log(n.type)})},calcTime:function(t){var e=new Date(t),s=new Date,n=Math.round((s-e)/1e3,0),a="";if(n<30)a="few sec.";else if(n<60)a="".concat(n," sec");else if(n<3600)a="".concat(Math.floor(n/60)," min");else if(n<86400)a="".concat(Math.floor(n/60/60)," hrs");else{var o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c=r(e.getDate()),i=r(e.getHours()),l=r(e.getMinutes());a="".concat(c).concat(o[e.getMonth()]," ").concat(i,":").concat(l)}return a},scrollChat:function(){var t=this;this.$nextTick((function(){var e=t.$refs["chat-box"];e&&e.scroll(0,e.scrollHeight)}))}}),watch:{open:function(){var t=this;this.$nextTick((function(){t.scrollChat()}))}}},u=l,h=(s("5be9"),s("2877")),d=Object(h["a"])(u,n,a,!1,null,"2dd78901",null);e["default"]=d.exports},"8ecf":function(t,e,s){},ad6d:function(t,e,s){"use strict";var n=s("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b2f0:function(t,e,s){t.exports=s.p+"static/img/chat-minimize.89aa679f.svg"}}]);
//# sourceMappingURL=chunk-93a7f64c.5bfed484.js.map