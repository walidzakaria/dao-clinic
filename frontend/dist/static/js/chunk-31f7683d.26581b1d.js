(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31f7683d"],{"2b72":function(t,e,s){},a7be:function(t,e,s){"use strict";s("2b72")},dbfa:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("section",{attrs:{id:"blog"}},[s("div",{attrs:{"data-aos":"fade-up"}},[t._m(0),s("div",{staticClass:"row"},t._l(t.blogs.results,(function(e,a){return s("article",{key:a,staticClass:"col-12 col-md-6 mt-2 mb-4"},[s("router-link",{attrs:{to:e.slug}},[s("img",{staticClass:"header-image",attrs:{src:"http://127.0.0.1:8000"+e.wallpaper,width:"536",height:"181",alt:e.title,sizes:"(min-width: 768px) 1280px, (min-width: 400px) 640px, 320px"}})]),s("div",{staticClass:"d-flex align-items-center mb-2"},[s("img",{staticClass:"blog-avatar mx-3 mx-sm-4",attrs:{src:"http://127.0.0.1:8000"+e.user_image,alt:e.by}}),s("div",{staticClass:"metadata-layout mr-1"},[s("address",{staticClass:"mb-0"},[t._v(" By: "+t._s(e.by)+" ")]),s("time",{attrs:{datetime:e.date}},[t._v(t._s(t.convertDate(e.date)))])])]),s("h2",{staticClass:"h3 font-lato mb-2 mb-md-3"},[s("router-link",{attrs:{to:e.slug}},[t._v(" "+t._s(e.title)+" ")])],1),s("p"),s("p",{staticClass:"font-lato"},[t._v(t._s(e.main_paragraph))]),s("p"),s("footer",{staticClass:"mt-4 d-flex align-items-center justify-content-between mr-1"},[s("router-link",{staticClass:"btn btn-secondary-blue btn-sm",attrs:{to:e.slug}},[t._v(" Read this post ")])],1)],1)})),0)])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"section-header"},[s("h1",[t._v("DAO Blog")]),t._v(" Follow our DAO blogs to get to know new tips and hints that could transform your entire life. ")])}],r={metaInfo:function(){return{title:"DAO World",titleTemplate:"%s | Blogs"}},created:function(){this.$store.dispatch("blog/retrieveBlogs",1)},computed:{blogs:function(){return this.$store.getters["blog/getBlogs"]||[]}},methods:{convertDate:function(t){var e={weekDay:"long",year:"numeric",month:"long",day:"numeric"},s=new Date(t);return s.toLocaleDateString("en-US",e)}}},n=r,o=(s("a7be"),s("2877")),l=Object(o["a"])(n,a,i,!1,null,"64f7b1ac",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-31f7683d.26581b1d.js.map