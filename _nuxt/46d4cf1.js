(window.webpackJsonp=window.webpackJsonp||[]).push([[18,7],{599:function(t,e,n){"use strict";n.r(e);var r={name:"FloatToolsBtn",props:{data:{type:Array}},methods:{handleClick:function(t){console.log(t),window.location.href=t}}},o=n(23),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"float-tools-parent"},[e("div",{staticClass:"float-tools-conatiner"},[t._l(t.data,(function(n){return[e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:n.tooltip,placement:"left"}},[e("div",{staticClass:"float-tools-item",on:{click:function(e){return t.handleClick(n.goto)}}},[e("pre",[t._v(t._s(n.label))])])])]})),t._v(" "),t._t("back-to-top")],2)])}),[],!1,null,"6b38eebd",null);e.default=component.exports},613:function(t,e,n){var content=n(623);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("6fb3fbaa",content,!0,{sourceMap:!1})},622:function(t,e,n){"use strict";n(613)},623:function(t,e,n){var r=n(37)((function(i){return i[1]}));r.push([t.i,".slide-enter-active[data-v-0aee44c2],.slide-leave-active[data-v-0aee44c2]{transition:transform .25s ease-out,opacity .25s ease-out}.slide-enter[data-v-0aee44c2]{opacity:1;transform:translateX(100%)}.slide-leave-to[data-v-0aee44c2]{opacity:1;transform:translateX(-100%)}.slide-enter-active[data-v-0aee44c2]{animation:slide-in-0aee44c2 .2s ease-out}.slide-leave-active[data-v-0aee44c2]{animation:slide-out-0aee44c2 .25s ease-out}@keyframes slide-in-0aee44c2{0%{opacity:.95;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes slide-out-0aee44c2{0%{opacity:1;transform:translateX(0)}to{opacity:.95;transform:translateX(-100%)}}",""]),r.locals={},t.exports=r},644:function(t,e,n){"use strict";n.r(e);n(33),n(45),n(46),n(24),n(34),n(44),n(47),n(25),n(50),n(49),n(69),n(70);var r=n(10),o=n(28);n(57),n(12),n(39),n(21),n(59),n(89);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var h={name:"wiki",data:function(){return{wikiFloatBox:{enabled:!0,data:[{label:"回到\n旧版",tooltip:"回到旧版WIKI页面",goto:"/hugo-wiki"}]},data:[],defaultProps:{children:"children",label:"title",id:"id"},expandedKeys:[],article:{},showNav:!1,mobileSize:990}},methods:{handleShowNav:function(){this.showNav=!0;var t,e=d(document.getElementsByClassName("wiki-content-parent"));try{for(e.s();!(t=e.n()).done;){t.value.style.display="none"}}catch(t){e.e(t)}finally{e.f()}},handleCloseNav:function(){var t,e=d(document.getElementsByClassName("wiki-content-parent"));try{for(e.s();!(t=e.n()).done;){t.value.style.display="inherit"}}catch(t){e.e(t)}finally{e.f()}this.showNav=!1},handleResize:function(){this.showNav=!0;var t,e=d(document.getElementsByClassName("wiki-content-parent"));try{for(e.s();!(t=e.n()).done;){t.value.style.display="inherit"}}catch(t){e.e(t)}finally{e.f()}},traverseTree:function(t,e){var n=this;if(t){e(t);var r=t.root?t.root.childNodes:t.childNodes;r&&r.forEach((function(t){n.traverseTree(t,e)}))}},handleNodeClick:function(t){},buildTree:function(t){var e,n=[],r={},o=d(t);try{for(o.s();!(e=o.n()).done;){var l=e.value,f=l.id,h=l.pid;r[f]||(r[f]={children:[]}),r[f]=c(c({},l),{},{children:r[f].children});var v=r[f];0===h?n.push(v):(r[h]||(r[h]={children:[]}),r[h].children.push(v))}}catch(t){o.e(t)}finally{o.f()}return n},preProcess:function(t){t.forEach((function(t){t.filepath=t.filepath.replace("/_index","");var e=t.filepath.split("/");t.id=e[e.length-1],t.pid=2===e.length?0:e[e.length-2]}))},handleCollapseAll:function(){var t=this;this.$nextTick((function(){if(t.showNav){var e=t.$refs.navTree;t.traverseTree(e.store.root,(function(t){t.expanded=!1}))}}))},fetchIndex:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("wiki/_index").fetch();case 2:t.article=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={deep:!0},e.next=3,t.$content("wiki",n).only(["title","description","slug","author","filepath"]).sortBy("title","asc").fetch();case 3:r=e.sent,t.preProcess(r),t.data=t.buildTree(r)[0].children;case 6:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;if(window.onresize=function(){setTimeout((function(){window.innerWidth>t.mobileSize?t.handleResize():t.showNav&&(scrollTo(0,0),t.handleShowNav())}),400)},"wiki"===this.$route.name)this.expandedKeys=[];else{var e=this.$route.params.pathMatch.split("/"),n=e[e.length-1];this.expandedKeys=[n]}window.innerWidth>this.mobileSize&&this.handleResize()},updated:function(){},watch:{$route:{handler:function(){"wiki"===this.$route.name&&(this.fetchIndex(),this.expandedKeys=[],this.handleCollapseAll())},immediate:!0},showNav:{handler:function(){this.showNav}}}},v=(n(622),n(23)),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wiki-container"},[e("button",{attrs:{id:"nav-open"},on:{click:t.handleShowNav}},[e("i",{staticClass:"nav-open-icon"})]),t._v(" "),e("transition",{attrs:{name:"slide"}},[t.showNav?e("div",{staticClass:"wiki-nav-container"},[e("div",{staticClass:"wiki-nav"},[e("el-tree",{ref:"navTree",attrs:{data:t.data,props:t.defaultProps,"node-key":"id","default-expanded-keys":t.expandedKeys,accordion:""},on:{"node-click":t.handleNodeClick},scopedSlots:t._u([{key:"default",fn:function(n){n.node;var data=n.data;return[e("div",{staticClass:"leaf-parent"},[e("nuxt-link",{staticClass:"leaf-end",attrs:{to:"".concat(data.filepath)}},[t._v(t._s(data.title))])],1)]}}],null,!1,1589395802)}),t._v(" "),e("button",{attrs:{id:"nav-close"},on:{click:t.handleCloseNav}},[e("i",{staticClass:"el-icon-close"})])],1)]):t._e()]),t._v(" "),e("div",{staticClass:"wiki-content-parent"},["wiki"===t.$route.name?e("article",{staticClass:"wiki-page-content",attrs:{id:"md-content"}},[e("nuxt-content",{ref:"nuxtContent",attrs:{document:t.article}})],1):e("NuxtChild")],1),t._v(" "),t.wikiFloatBox.enabled?e("FloatToolsBtn",{attrs:{data:t.wikiFloatBox.data}},[e("template",{slot:"back-to-top"},[e("el-backtop")],1)],2):t._e()],1)}),[],!1,null,"0aee44c2",null);e.default=component.exports;installComponents(component,{FloatToolsBtn:n(599).default})}}]);