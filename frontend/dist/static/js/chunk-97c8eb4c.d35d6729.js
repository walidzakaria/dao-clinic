(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-97c8eb4c"],{"25f0":function(e,t,n){"use strict";var s=n("6eeb"),a=n("825a"),o=n("d039"),c=n("ad6d"),r="toString",i=RegExp.prototype,u=i[r],l=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),h=u.name!=r;(l||h)&&s(RegExp.prototype,r,(function(){var e=a(this),t=String(e.source),n=e.flags,s=String(void 0===n&&e instanceof RegExp&&!("flags"in i)?c.call(e):n);return"/"+t+"/"+s}),{unsafe:!0})},"74eb":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"contact-profile"},[n("p",[e._v(e._s(e.chatHeader))])]),n("div",{ref:"chat-box",staticClass:"messages"},[n("ul",{attrs:{id:"message-container"}},e._l(e.chat,(function(t,s){return n("div",{key:s},[t.is_client?n("li",{staticClass:"sent"},[n("div",{staticClass:"chat-logo"},[e._v(e._s(e.clientLetter))]),n("p",{staticClass:"message-text"},[e._v(e._s(t.message))])]):n("li",{staticClass:"replies"},[n("div",{staticClass:"chat-logo"},[e._v("ME")]),n("p",{staticClass:"message-text"},[e._v(e._s(t.message))])])])})),0)]),n("div",{staticClass:"message-input"},[n("div",{staticClass:"wrap"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userMessage,expression:"userMessage"}],ref:"chat-input",attrs:{type:"text",placeholder:"Write your message..."},domProps:{value:e.userMessage},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage()},focus:function(t){return e.markRead()},input:function(t){t.target.composing||(e.userMessage=t.target.value)}}}),n("button",{staticClass:"submit btn",on:{click:function(t){return e.sendMessage()}}},[e._v("Send")])])])])},a=[],o=(n("99af"),n("d3b7"),n("25f0"),n("5530")),c=(n("96cf"),n("1da1")),r=n("2f62");function i(e){var t=e<10?"0".concat(e.toString()):e.toString();return t}var u={name:"ChatInstance",props:["room","userConnect","chatHeader"],data:function(){return{connection:null,chat:[],userMessage:null,username:"",userId:0,clientId:this.$store.state.chat.clientId,unreadNo:0}},computed:{clientLetter:function(){return this.chatHeader[0]},lastSenctence:function(){return this.chat[this.chat.length-1].message}},created:function(){this.scrollChat()},mounted:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$nextTick((function(){t.username=t.$store.state.user.userInfo.username,t.userId=t.$store.state.user.userInfo.id||0,t.clientId=t.$store.state.chat.clientId,t.chat=[],t.connectChat(e),t.scrollChat()}));case 1:case"end":return n.stop()}}),n)})))()},methods:Object(o["a"])(Object(o["a"])({},Object(r["b"])("chat",["getCSConversation"])),{},{getWebsocketLink:function(){console.log(this.room);var e="https:"===window.location.protocol?"wss":"ws",t=window.location.host;"127.0.0.1:8080"===t||"127.0.0.1:8000"===t?t="127.0.0.1:8000":t+=":8001";var n="".concat(e,"://").concat(t,"/ws/chat/").concat(this.room,"/admin/").concat(this.userConnect,"/");return console.log(n),n},connectChat:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.unreadNo=0,"0000"!==e.clientId){t.next=4;break}return t.next=4,e.$store.dispatch("chat/getClientId").then(e.clientId=e.$store.state.chat.clientId,e.scrollChat());case 4:if(console.log(e.chat.length),0!==e.chat.length){t.next=8;break}return t.next=8,e.getCSConversation(e.room).then((function(t){e.chat=t,console.log("current chat: ",e.chat),e.scrollChat()}));case 8:e.applyConnection();case 9:case"end":return t.stop()}}),t)})))()},markRead:function(){this.unreadNo=0;var e={type:"notification_read",message:"notification_read",user:this.$store.state.user.userInfo.username,user_id:this.$store.state.user.userInfo.id,is_client:!1};try{this.connection.send(JSON.stringify(e))}catch(t){console.log(t)}finally{this.userMessage=null}},sendMessage:function(){if(this.userMessage){console.log(this.userMessage);var e={type:"chat_message",message:this.userMessage,user:this.username,user_id:this.userId,is_client:!1};this.connection.send(JSON.stringify(e)),this.userMessage=null}},applyConnection:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.connection){t.next=7;break}return t.next=3,e.getCSConversation(e.room).then((function(t){e.chat=t,console.log("current chat: ",e.chat)}));case 3:e.connection=new WebSocket(e.getWebsocketLink()),e.connection.onclose=function(t){setTimeout((function(){console.log("connecting..."),e.connection.reconnet(t)}),1e3)},e.connection.onopen=function(e){console.log(e)},e.connection.onmessage=function(t){var n=JSON.parse(t.data);console.log("chat message data: ",n);var s={message:n.message,type:n.type,room:e.clientId,time:n.time,user:n.user,is_client:n.is_client,user_info:n.user_info};"notification_read"!==s.type&&(console.log(s.type),e.chat.push(s),e.scrollChat()),s.is_client&&"chat_message"===s.type&&(e.unreadNo+=1),e.scrollChat()};case 7:case"end":return t.stop()}}),t)})))()},calcTime:function(e){var t=new Date(e),n=new Date,s=Math.round((n-t)/1e3,0),a="";if(s<30)a="few sec.";else if(s<60)a="".concat(s," sec");else if(s<3600)a="".concat(Math.floor(s/60)," min");else if(s<86400)a="".concat(Math.floor(s/60/60)," hrs");else{var o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c=i(t.getDate()),r=i(t.getHours()),u=i(t.getMinutes());a="".concat(c).concat(o[t.getMonth()]," ").concat(r,":").concat(u)}return a},scrollChat:function(){var e=this;this.$nextTick((function(){var t=e.$refs["chat-box"];t&&t.scroll(0,t.scrollHeight)}))}}),watch:{unreadNo:function(){this.$emit("unreadChanged",{room:this.room,unread:this.unreadNo})}}},l=u,h=(n("81b0"),n("2877")),g=Object(h["a"])(l,s,a,!1,null,"396e4ba6",null);t["default"]=g.exports},"81b0":function(e,t,n){"use strict";n("852c")},"852c":function(e,t,n){},ad6d:function(e,t,n){"use strict";var s=n("825a");e.exports=function(){var e=s(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}}}]);
//# sourceMappingURL=chunk-97c8eb4c.d35d6729.js.map