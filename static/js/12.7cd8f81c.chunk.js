(this.webpackJsonplanunion_web=this.webpackJsonplanunion_web||[]).push([[12],{386:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a(147),i=a(296),u=a(149),o=a(367);function m(){var e=Object(n.useState)(!0),t=Object(r.a)(e,2),a=t[0],m=t[1];return l.a.createElement(c.a,{maxWidth:"md"},l.a.createElement(i.a,{in:a},l.a.createElement(u.a,{severity:"info",onClose:function(){return m(!1)}},l.a.createElement(o.a,null,"\u5c0a\u656c\u7684\u7528\u6237\u60a8\u597d\uff0c\u611f\u8c22\u60a8\u4f7f\u7528\u84dd\u76df\u7684\u670d\u52a1\uff01\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u4ee5\u4e0b\u6761\u6b3e\uff1a"),"1. \u84dd\u76df\u670d\u52a1\u4e3a\u65e0\u507f\u670d\u52a1\uff0c\u7528\u6237\u65e0\u9700\u4e3a\u84dd\u5ba2\u63d0\u4f9b\u7269\u8d28\u56de\u62a5\uff0c\u81ea\u613f\u9664\u5916\u3002",l.a.createElement("br",null),"2. \u539f\u5219\u4e0a\u4e0d\u63d0\u4f9b\u62c6\u673a\u670d\u52a1\uff0c\u82e5\u9700\u62c6\u673a\uff0c\u540e\u679c\u9700\u7528\u6237\u81ea\u884c\u627f\u62c5\u3002",l.a.createElement("br",null),"3. \u60a8\u62a5\u4fee\u540e\uff0c\u84dd\u5ba2\u4f1a\u4e3b\u52a8\u8054\u7cfb\u60a8\uff0c\u60a8\u9700\u8981\u7b49\u5f85\u5e76\u914d\u5408\u84dd\u5ba2\u7684\u5de5\u4f5c\u3002",l.a.createElement("br",null),"4. \u84dd\u5ba2\u5b8c\u6210\u7ef4\u4fee\u540e\uff0c\u8bf7\u56de\u5230\u62a5\u4fee\u7cfb\u7edf\uff0c\u4e3a\u84dd\u5ba2\u8fdb\u884c\u5982\u5b9e\u8bc4\u4ef7\u3002")))}var s=a(6),E=a(107),g=a(383),d=a(54),h=a(145),f=a(371),p=a(372),b=a(387),v=a(390),C=a(64),O=a(129),w=a(45),j=a(368),S=a(369),y=a(389),k=a(370),N=a(385);function I(e,t){var a=sessionStorage.getItem("repairInfo")||"{}";sessionStorage.setItem("repairInfo",JSON.stringify(Object(E.a)({},JSON.parse(a),Object(s.a)({},e,t))))}function q(e){var t=e.required,a=e.title,n=e.options,r=e.value,i=e.handleChange;return l.a.createElement(c.a,{style:{margin:10}},l.a.createElement(j.a,{component:"fieldset"},l.a.createElement(S.a,{component:"legend"},a),n?l.a.createElement(y.a,{value:r,onChange:i(a)},n.map((function(e){return l.a.createElement(k.a,{key:e,value:e,control:l.a.createElement(N.a,null),label:e})}))):l.a.createElement(g.a,{key:a,required:t,onChange:function(e){return I(a,e.target.value)}})))}var W=Object(C.a)((function(e){return Object(O.a)({root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)}})})),F=["\u6545\u969c\u7c7b\u522b","\u6545\u969c\u63cf\u8ff0","\u8054\u7cfb\u65b9\u5f0f"];function J(){var e=W(),t=Object(n.useState)(0),a=Object(r.a)(t,2),i=a[0],m=a[1],C=Object(n.useState)({"\u6545\u969c\u7c7b\u522b":"\u8f6f\u4ef6\u6545\u969c","\u6545\u969c\u673a\u578b":"\u7b14\u8bb0\u672c","\u64cd\u4f5c\u7cfb\u7edf":"Windows 10","\u80fd\u5426\u6b63\u5e38\u5f00\u673a":"\u53ef\u4ee5","\u8d2d\u4e70\u65f6\u95f4":"<1\u5e74","\u7cfb\u7edf\u4f4d\u6570":"64\u4f4d"}),O=Object(r.a)(C,2),j=O[0],S=O[1],y=function(e){return function(t){S(Object(E.a)({},j,Object(s.a)({},e,t.target.value)))}},k=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{severity:"warning"},l.a.createElement(o.a,null,"\u8bf7\u5c3d\u53ef\u80fd\u8be6\u7ec6\u5730\u63cf\u8ff0\u6545\u969c\uff0c\u4ee5\u4fbf\u84dd\u5ba2\u5927\u81f4\u63a8\u6d4b\u6545\u969c\u539f\u56e0\u3002\u53c2\u8003\u4e0b\u9762\u63d0\u793a:"),"1. \u6545\u969c\u90fd\u5305\u62ec\u54ea\u4e9b\u73b0\u8c61\uff08\u5c4f\u5e55\u663e\u793a\u3001\u7279\u6b8a\u58f0\u97f3\u3001\u8fd0\u884c\u901f\u5ea6\u3001\u98ce\u6247\u901f\u5ea6\u3001\u70ed\u91cf\u5927\u5c0f\u7b49\uff09",l.a.createElement("br",null),"2. \u6545\u969c\u51fa\u73b0\u65f6\u4f60\u6b63\u5728\u505a\u4ec0\u4e48\uff08\u6b63\u5728\u8fd0\u884c\u4ec0\u4e48\u8f6f\u4ef6\u3001\u5f00\u673a\u6216\u5173\u673a\u5230\u4e86\u54ea\u4e2a\u6b65\u9aa4\u3001\u662f\u5426\u6d78\u5165\u6db2\u4f53\u7b49\uff09",l.a.createElement("br",null),"3. \u6545\u969c\u53d1\u751f\u9891\u7387\uff08\u8fd9\u4e2a\u6545\u969c\u662f\u5076\u7136\u53d1\u751f\u8fd8\u662f\u89c4\u5f8b\u6027\u53d1\u751f\uff0c\u5728\u4ec0\u4e48\u6761\u4ef6\u4e0b\u4f1a\u53d1\u751f\uff0c\u5728\u8fd9\u4e2a\u6761\u4ef6\u4e0b\u662f\u53ef\u80fd\u53d1\u751f\u8fd8\u662f\u4e00\u5b9a\u4f1a\u53d1\u751f\uff09",l.a.createElement("br",null),"4. \u4f60\u7684\u5904\u7406\u63aa\u65bd\uff08\u4f60\u66fe\u7ecf\u5c1d\u8bd5\u8fc7\u54ea\u4e9b\u89e3\u51b3\u65b9\u6cd5\uff0c\u6bd4\u5982\u5378\u8f7d\u67d0\u4e9b\u8f6f\u4ef6\u3001\u91cd\u88c5\u9a71\u52a8\u3001\u91cd\u88c5\u7cfb\u7edf\uff0c\u662f\u5426\u4f7f\u7528\u67d0\u5b89\u5168\u536b\u58eb\u5c1d\u8bd5\u4fee\u590d\uff09"),l.a.createElement(g.a,{key:"\u8be6\u7ec6\u63cf\u8ff0",style:{margin:10,width:"80%"},label:"\u8be6\u7ec6\u63cf\u8ff0",multiline:!0,rows:"4",onChange:function(e){return I("\u8be6\u7ec6\u63cf\u8ff0",e.target.value)}}))},N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(q,{title:"\u64cd\u4f5c\u7cfb\u7edf",options:["Windows 10","Windows 8","Windows 7","Windows XP","Linux","Mac OS"],value:j.\u64cd\u4f5c\u7cfb\u7edf,handleChange:y}),l.a.createElement(q,{title:"\u7cfb\u7edf\u4f4d\u6570",options:["64\u4f4d","32\u4f4d","\u4e0d\u786e\u5b9a"],value:j.\u7cfb\u7edf\u4f4d\u6570,handleChange:y}),l.a.createElement(k,null))},J=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(q,{title:"\u80fd\u5426\u6b63\u5e38\u5f00\u673a",options:["\u53ef\u4ee5","\u4e0d\u53ef\u4ee5"],value:j.\u80fd\u5426\u6b63\u5e38\u5f00\u673a,handleChange:y}),l.a.createElement(q,{title:"\u6545\u969c\u673a\u578b",options:["\u7b14\u8bb0\u672c","\u53f0\u5f0f\u673a"],value:j.\u6545\u969c\u673a\u578b,handleChange:y}),l.a.createElement(q,{title:"\u8d2d\u4e70\u65f6\u95f4",options:["<1\u5e74","1\uff5e2\u5e74",">2\u5e74","\u4e0d\u786e\u5b9a"],value:j.\u8d2d\u4e70\u65f6\u95f4,handleChange:y}),l.a.createElement(q,{title:"\u7535\u8111\u54c1\u724c",handleChange:y}),l.a.createElement(q,{title:"\u7535\u8111\u578b\u53f7",handleChange:y}),l.a.createElement(k,null))},x=function(){return l.a.createElement(w.a,null,"*\u53cb\u60c5\u63d0\u793a\uff1a\u84dd\u76df\u4e0d\u8d1f\u8d23\u6559\u5b66\u533a\u548c\u529e\u516c\u533a\u7684\u7f51\u7edc\u6545\u969c\u5904\u7406\u3002\u8bf7\u62e8\u6253\u7f51\u7edc\u4e2d\u5fc3\u6545\u969c\u62a5\u4fee\u7535\u8bdd\uff1a65111500")},B=function(e){switch(e.step){case 0:return l.a.createElement(q,{title:"\u6545\u969c\u7c7b\u522b",options:["\u8f6f\u4ef6\u6545\u969c","\u786c\u4ef6\u6545\u969c","\u5bdd\u5ba4\u7f51\u6545\u969c"],value:j.\u6545\u969c\u7c7b\u522b,handleChange:y});case 1:switch(j.\u6545\u969c\u7c7b\u522b){case"\u786c\u4ef6\u6545\u969c":return l.a.createElement(J,null);case"\u8f6f\u4ef6\u6545\u969c":return l.a.createElement(N,null);case"\u5bdd\u5ba4\u7f51\u6545\u969c":return l.a.createElement(x,null);default:return l.a.createElement(w.a,null,"\u672a\u627e\u5230")}case 2:return l.a.createElement(l.a.Fragment,null,l.a.createElement(q,{required:!0,title:"\u7ef4\u4fee\u5730\u5740",handleChange:y}),l.a.createElement(q,{required:!0,title:"\u624b\u673a\u53f7\u7801",handleChange:y}),l.a.createElement(q,{required:!0,title:"QQ",handleChange:y}),l.a.createElement(q,{required:!0,title:"\u59d3\u540d",handleChange:y}));default:return l.a.createElement("br",null)}},Q=function(){i===F.length-1&&console.log(Object(E.a)({},j,{},JSON.parse(sessionStorage.getItem("repairInfo")||"{}"))),m((function(e){return e+1}))},_=function(){m((function(e){return e-1}))};return l.a.createElement(c.a,{maxWidth:"lg"},l.a.createElement("div",{className:e.root},l.a.createElement(w.a,{style:{padding:10}},"\u8bf7\u8ba4\u771f\u8be6\u7ec6\u5730\u586b\u5199\u4e0b\u9762\u7684\u9875\u9762\u63cf\u8ff0\u60a8\u6240\u9047\u5230\u7684\u6545\u969c\uff0c\u6211\u4eec\u5c06\u4f1a\u5c3d\u5feb\u5b89\u6392\u84dd\u5ba2\u4e0e\u60a8\u53d6\u5f97\u8054\u7cfb\u3002 \u84dd\u76df\u7684\u670d\u52a1\u8303\u56f4\u4e3a\u91cd\u5e86\u5927\u5b66A\u3001B\u3001C\u533a\u548c\u864e\u6eaa\u6821\u533a\u3002"),l.a.createElement(v.a,{activeStep:i,orientation:"vertical"},F.map((function(t,a){return l.a.createElement(f.a,{key:t},l.a.createElement(b.a,null,t),l.a.createElement(p.a,null,l.a.createElement(B,{step:a}),l.a.createElement("div",{className:e.actionsContainer},l.a.createElement("div",null,l.a.createElement(d.a,{disabled:0===i,onClick:_,className:e.button},"\u4e0a\u4e00\u6b65"),l.a.createElement(d.a,{variant:"contained",color:"primary",onClick:Q,className:e.button},i===F.length-1?"\u63d0\u4ea4":"\u4e0b\u4e00\u6b65")))))}))),i===F.length&&l.a.createElement(h.a,{square:!0,elevation:0,className:e.resetContainer},l.a.createElement(w.a,null,"\u5df2\u7ecf\u5b8c\u6210\u62a5\u4fee\uff0c\u6211\u4eec\u5c06\u4f1a\u5b89\u6392\u84dd\u5ba2\u7a0d\u540e\u4e0e\u60a8\u8fdb\u884c\u8054\u7cfb\u3002"),l.a.createElement(d.a,{onClick:function(){sessionStorage.removeItem("repairInfo"),m(0)},className:e.button,variant:"contained"},"\u91cd\u65b0\u5f00\u59cb"))))}function x(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,null),l.a.createElement(J,null))}a.d(t,"default",(function(){return x}))}}]);
//# sourceMappingURL=12.7cd8f81c.chunk.js.map