(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-todolist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),r=a.n(s);r.a},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=n,t.exports=r,r.id="4678"},"55c6":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=a("bc3a"),n=a.n(r),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container is-fluid"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-one-third"},[a("h1",[t._v("Create / Update Task")]),a("task-form",{attrs:{task:t.task,errors:t.errors},on:{"save:task":t.saveTask}})],1),a("div",{staticClass:"column"},[a("h1",[t._v("Tasks")]),a("tasks",{attrs:{tasks:t.tasks,meta:t.meta},on:{"edit:task":t.editTask,"delete:task":t.deleteTask,"complete:task":t.completeTask}})],1)])])},o=[],c=(a("a4d3"),a("99af"),a("4de4"),a("4160"),a("4fad"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("159b"),a("e587")),l=a("2fa7"),u=(a("96cf"),a("c1df")),d=a.n(u),f=a("88bc"),p=a.n(f),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"data-controls"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.limit,expression:"limit"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.limit=e.target.multiple?a:a[0]},function(e){return t.changeLimit()}]}},[a("option",{attrs:{value:"5"}},[t._v("5")]),a("option",{attrs:{value:"10"}},[t._v("10")]),a("option",{attrs:{value:"15"}},[t._v("15")]),a("option",{attrs:{value:"20"}},[t._v("20")]),a("option",{attrs:{value:"25"}},[t._v("25")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"input",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.search},on:{keyup:function(e){return t.performSearch()},input:function(e){e.target.composing||(t.search=e.target.value)}}})]),0===t.tasks.length?a("p",[t._v("No tasks available")]):a("div",[a("table",{staticClass:"table is-striped is-fullwidth is-narrow"},[t._m(0),a("tbody",t._l(t.tasks,(function(e){return a("tr",{key:e._id,class:{"is-selected":e.completed}},[a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(t._f("ucfirst")(e.priority)))]),a("td",[t._v(t._s(t._f("formatDate")(e.start_date)))]),a("td",[t._v(t._s(t._f("formatDate")(e.due_date)))]),a("td",[t._v(t._s(t._f("fromNow")(e.created_at)))]),a("td",[a("button",{staticClass:"button is-small is-info is-light",on:{click:function(a){return t.$emit("edit:task",e)}}},[t._v("Edit")]),a("button",{staticClass:"button is-small is-danger is-light",on:{click:function(a){return t.$emit("delete:task",e)}}},[t._v("Delete")]),a("button",{staticClass:"button is-small is-light",class:{"is-success":!e.completed},on:{click:function(a){return t.$emit("complete:task",e)}}},[t._v(t._s("Mark as "+t.taskStatus(e)))])])])})),0)]),t.meta.total_pages>1?a("paginate",{attrs:{meta:t.meta}}):t._e()],1)])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Task")]),a("th",[t._v("Priority")]),a("th",[t._v("Start Date")]),a("th",[t._v("Due Date")]),a("th",[t._v("Created")]),a("th")])])}],v=(a("fb6a"),a("ac1f"),a("841c"),a("498a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"pagination is-centered",attrs:{role:"navigation","aria-label":"pagination"}},[t.meta.has_previous?a("a",{staticClass:"pagination-previous",on:{click:function(e){return e.preventDefault(),t.changeToPage(t.meta.previous_page)}}},[t._v("Previous")]):t._e(),t.meta.has_next?a("a",{staticClass:"pagination-next",on:{click:function(e){return e.preventDefault(),t.changeToPage(t.meta.next_page)}}},[t._v("Next page")]):t._e()])}),h=[],j={name:"paginate",props:{meta:{type:Object,required:!0}},methods:{changeToPage:function(t){L.$emit("changeToPage",t)}}},g=j,_=a("2877"),k=Object(_["a"])(g,v,h,!1,null,null,null),y=k.exports,w={name:"tasks",components:{Paginate:y},props:{meta:{type:Object,required:!0},tasks:{type:Array,required:!0}},data:function(){return{limit:5,search:""}},methods:{taskStatus:function(t){return t.completed?"incomplete":"complete"},changeLimit:function(){L.$emit("changeLimit",this.limit)},performSearch:function(){L.$emit("search",this.search.trim())}},filters:{ucfirst:function(t){var e=String(t);return e[0].toUpperCase()+e.slice(1).toLowerCase()},fromNow:function(t){return d()(t).fromNow()},formatDate:function(t){return d()(t).format("Do MMM YYYY")}}},P=w,O=(a("a066"),Object(_["a"])(P,m,b,!1,null,"9ba7de28",null)),C=O.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.saveTask(e)}}},[a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{for:"title"}},[t._v("Task / Title")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model.trim.lazy",value:t.task.title,expression:"task.title",modifiers:{trim:!0,lazy:!0}}],staticClass:"input",class:{"is-danger":t.hasError("title")},attrs:{type:"text",id:"title",placeholder:"Task"},domProps:{value:t.task.title},on:{change:function(e){t.$set(t.task,"title",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.hasError("title")?a("p",{staticClass:"help is-danger"},[t._v(t._s(t.getErrorMessage("title")))]):t._e()])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{for:"priority"}},[t._v("Priority")]),a("div",{staticClass:"control"},[a("div",{staticClass:"select is-fullwidth",class:{"is-danger":t.hasError("priority")}},[a("select",{directives:[{name:"model",rawName:"v-model.lazy",value:t.task.priority,expression:"task.priority",modifiers:{lazy:!0}}],attrs:{id:"priority"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.task,"priority",e.target.multiple?a:a[0])}}},t._l(t.priorityOptions,(function(e,s){return a("option",{key:s,domProps:{value:s}},[t._v(t._s(e))])})),0)]),t.hasError("priority")?a("p",{staticClass:"help is-danger"},[t._v(t._s(t.getErrorMessage("priority")))]):t._e()])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{for:"start_date"}},[t._v("Start Date")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model.trim.lazy",value:t.task.start_date,expression:"task.start_date",modifiers:{trim:!0,lazy:!0}}],staticClass:"input",class:{"is-danger":t.hasError("start_date")},attrs:{type:"text",id:"start_date",pattern:"\\d{4}-\\d{2}-\\d{2}",placeholder:"YYYY-MM-DD"},domProps:{value:t.task.start_date},on:{change:function(e){t.$set(t.task,"start_date",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.hasError("start_date")?a("p",{staticClass:"help is-danger"},[t._v(t._s(t.getErrorMessage("start_date")))]):t._e()])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{for:"due_date"}},[t._v("Due Date")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model.trim.lazy",value:t.task.due_date,expression:"task.due_date",modifiers:{trim:!0,lazy:!0}}],staticClass:"input",class:{"is-danger":t.hasError("due_date")},attrs:{type:"text",id:"due_date",pattern:"\\d{4}-\\d{2}-\\d{2}",placeholder:"YYYY-MM-DD"},domProps:{value:t.task.due_date},on:{change:function(e){t.$set(t.task,"due_date",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.hasError("due_date")?a("p",{staticClass:"help is-danger"},[t._v(t._s(t.getErrorMessage("due_date")))]):t._e()])]),t._m(0)])},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-link",attrs:{type:"submit"}},[t._v("Submit")])])])}],z={name:"task-form",props:{task:{type:Object,required:!0},errors:{type:Array,required:!0}},data:function(){return{priorityOptions:{"":"Select Priority",low:"Low",medium:"Medium",high:"High"}}},methods:{saveTask:function(){this.$emit("save:task",this.task)},hasError:function(t){for(var e=this.errors,a=0;a<e.length;a+=1)if(e[a][t])return!0;return!1},getErrorMessage:function(t){for(var e=this.errors,a=0;a<e.length;a+=1)if(e[a][t])return e[a][t];return""}}},D=z,E=Object(_["a"])(D,x,T,!1,null,null,null),$=E.exports;function M(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function S(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?M(a,!0).forEach((function(e){Object(l["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):M(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var Y={name:"app",components:{Tasks:C,TaskForm:$},data:function(){return{meta:{},task:{title:"",priority:"",start_date:"",due_date:""},tasks:[],errors:[],queryParams:{page:1,perPage:5,search:""}}},created:function(){var t=this;L.$on("search",(function(e){t.setQueryParam("page",1),t.setQueryParam("search",e)})),L.$on("changeLimit",(function(e){t.setQueryParam("page",1),t.setQueryParam("perPage",e)})),L.$on("changeToPage",(function(e){t.setQueryParam("page",e)})),this.getTasks()},watch:{queryParams:{deep:!0,handler:function(t,e){this.getTasks()}}},methods:{clearForm:function(){this.task={title:"",priority:"",start_date:"",due_date:""},this.errors=[]},getTasks:function(){var t,e,a,s;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return t="tasks",e=this.parseQueryParams(),e&&(t="".concat(t,"?").concat(e)),r.prev=3,r.next=6,regeneratorRuntime.awrap(n.a.get(t));case 6:a=r.sent,s=a.data,this.meta=s.meta,this.tasks=s.data,r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](3),console.log(r.t0);case 15:case"end":return r.stop()}}),null,this,[[3,12]])},saveTask:function(t){var e,a,s,r;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:return e=t._id?"tasks/".concat(t._id):"tasks",a=t._id?"PUT":"POST",s=["title","priority","completed","start_date","due_date"],i.prev=3,i.next=6,regeneratorRuntime.awrap(n()({url:e,method:a,data:p()(t,s),headers:{"Content-Type":"application/json"}}));case 6:this.clearForm(),this.getTasks(),i.next=14;break;case 10:i.prev=10,i.t0=i["catch"](3),r=i.t0.response,400===r.status?this.errors=r.data:console.log(r);case 14:case"end":return i.stop()}}),null,this,[[3,10]])},editTask:function(t){this.task=S({},t),this.task.due_date=d()(t.due_date).format("YYYY-MM-DD"),this.task.start_date=d()(t.start_date).format("YYYY-MM-DD")},deleteTask:function(t){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(confirm("Are you sure?")){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,regeneratorRuntime.awrap(n.a.delete("tasks/".concat(t._id)));case 5:this.clearForm(),this.getTasks(),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),console.log(e.t0);case 12:case"end":return e.stop()}}),null,this,[[2,9]])},completeTask:function(t){this.saveTask(S({},t,{completed:!t.completed}))},setQueryParam:function(t,e){this.queryParams[t]=e},parseQueryParams:function(){var t="";return Object.entries(this.queryParams).forEach((function(e){var a=Object(c["a"])(e,2),s=a[0],r=a[1];r&&(t+=t?"&".concat(s,"=").concat(r):"".concat(s,"=").concat(r))})),t}}},N=Y,q=(a("034f"),Object(_["a"])(N,i,o,!1,null,null,null)),U=q.exports;a.d(e,"eventBus",(function(){return L})),n.a.defaults.baseURL="https://mayatsa-todolist.herokuapp.com/api",n.a.defaults.headers.common.Accept="application/json",s["a"].config.productionTip=!1;var L=new s["a"];new s["a"]({render:function(t){return t(U)}}).$mount("#app")},"85ec":function(t,e,a){},a066:function(t,e,a){"use strict";var s=a("55c6"),r=a.n(s);r.a}});
//# sourceMappingURL=app.c5d40a20.js.map