(window.webpackJsonp=window.webpackJsonp||[]).push([[53,104],{545:function(t,s,a){},567:function(t,s,a){"use strict";a.r(s);var l=a(0);const e={class:"zarm-vue-demo"},n={class:"za-panel"},c=Object(l.i)("div",{class:"za-panel__header"},[Object(l.i)("div",{class:"za-panel__title"},"基本 ")],-1),p={class:"za-panel__body"},o=Object(l.h)("左滑看看（自动关闭）"),i=Object(l.h)("右滑看看"),d=Object(l.h)("左右都能滑动"),h=Object(l.g)('<div class="zarm-markdown-doc"><h2>滑动操作 SwipeAction</h2><div class="demo custom-block"><p class="custom-block-title">基本</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-swipe-action</span> <span class="hljs-attr">autoClose</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;handleClose&quot;</span> @<span class="hljs-attr">open</span>=<span class="hljs-string">&quot;handleOpen&quot;</span> <span class="hljs-attr">:right</span>=<span class="hljs-string">&quot;action1&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span>&gt;</span>左滑看看（自动关闭）<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-swipe-action</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-swipe-action</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;handleClose&quot;</span> @<span class="hljs-attr">open</span>=<span class="hljs-string">&quot;handleOpen&quot;</span> <span class="hljs-attr">:left</span>=<span class="hljs-string">&quot;action1&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span>&gt;</span>右滑看看<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-swipe-action</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-swipe-action</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;handleClose&quot;</span> @<span class="hljs-attr">open</span>=<span class="hljs-string">&quot;handleOpen&quot;</span> <span class="hljs-attr">:left</span>=<span class="hljs-string">&quot;action1&quot;</span> <span class="hljs-attr">:right</span>=<span class="hljs-string">&quot;action1&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span>&gt;</span>左右都能滑动<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-swipe-action</span>&gt;</span>\n</code></pre></div><h3>Vue Script</h3><pre class="hljs"><code>&lt;script name=<span class="hljs-string">&quot;vue&quot;</span>&gt;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data() {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">action1</span>:[\n        {\n          <span class="hljs-attr">theme</span>: <span class="hljs-string">&#39;error&#39;</span>,\n          <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;右按钮1&#39;</span>,\n          <span class="hljs-attr">onClick</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;右按钮1&#39;</span>),\n        },\n        {\n          <span class="hljs-attr">theme</span>: <span class="hljs-string">&#39;success&#39;</span>,\n          <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;右按钮2&#39;</span>,\n          <span class="hljs-attr">onClick</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;右按钮2&#39;</span>),\n        },\n      ]\n    }\n  },\n  <span class="hljs-attr">methods</span>: {\n    handleClose(reason) {\n      <span class="hljs-built_in">console</span>.log(reason);\n    },\n    handleOpen(reason) {\n      <span class="hljs-built_in">console</span>.log(reason);\n    },\n  },\n};\n&lt;<span class="hljs-regexp">/script&gt;\n</span></code></pre><h3>API</h3><h4>SwipeAction Attributes</h4><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值／参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">left</td><td style="text-align:left;">arrayOf(object)</td><td style="text-align:left;">[ ]</td><td style="text-align:left;">object: { theme, text, onClick }</td><td style="text-align:left;">左侧按钮组</td></tr><tr><td style="text-align:left;">right</td><td style="text-align:left;">arrayOf(object)</td><td style="text-align:left;">[ ]</td><td style="text-align:left;">object: { theme, text, onClick }</td><td style="text-align:left;">右侧按钮组</td></tr><tr><td style="text-align:left;">auto-close</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">点击按钮是否自动关闭</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">是否禁用</td></tr><tr><td style="text-align:left;">offset</td><td style="text-align:left;">number</td><td style="text-align:left;">10</td><td style="text-align:left;"></td><td style="text-align:left;">回弹偏移的距离</td></tr><tr><td style="text-align:left;">move-distance-ratio</td><td style="text-align:left;">number</td><td style="text-align:left;">0.5</td><td style="text-align:left;"></td><td style="text-align:left;">移动距离比例临界点</td></tr><tr><td style="text-align:left;">move-time-span</td><td style="text-align:left;">number</td><td style="text-align:left;">300</td><td style="text-align:left;"></td><td style="text-align:left;">移动时间跨度临界点</td></tr><tr><td style="text-align:left;">animation-duration</td><td style="text-align:left;">number</td><td style="text-align:left;">300</td><td style="text-align:left;"></td><td style="text-align:left;">动画执行时间，单位：毫秒</td></tr></tbody></table><h4>SwipeAction Events</h4><table><thead><tr><th style="text-align:left;">事件名称</th><th style="text-align:left;">说明</th><th style="text-align:left;">回调参数</th></tr></thead><tbody><tr><td style="text-align:left;">open</td><td style="text-align:left;">打开时的事件</td><td style="text-align:left;">direaction, 可能值 left, right</td></tr><tr><td style="text-align:left;">close</td><td style="text-align:left;">关闭时的事件</td><td style="text-align:left;">reason, 可能值 retract, touchaway</td></tr></tbody></table></div>',1);var r={data:()=>({action1:[{theme:"error",text:"右按钮1",onClick:()=>console.log("右按钮1")},{theme:"success",text:"右按钮2",onClick:()=>console.log("右按钮2")}]}),methods:{handleClose(t){console.log(t)},handleOpen(t){console.log(t)}},render:function(t,s,a,r,g,j){const f=Object(l.B)("za-cell"),u=Object(l.B)("za-swipe-action");return Object(l.t)(),Object(l.e)("div",null,[Object(l.i)("div",e,[Object(l.i)("div",n,[c,Object(l.i)("div",p,[Object(l.i)(u,{autoClose:"",onClose:j.handleClose,onOpen:j.handleOpen,right:g.action1},{default:Object(l.K)(()=>[Object(l.i)(f,null,{default:Object(l.K)(()=>[o]),_:1})]),_:1},8,["onClose","onOpen","right"]),Object(l.i)(u,{onClose:j.handleClose,onOpen:j.handleOpen,left:g.action1},{default:Object(l.K)(()=>[Object(l.i)(f,null,{default:Object(l.K)(()=>[i]),_:1})]),_:1},8,["onClose","onOpen","left"]),Object(l.i)(u,{onClose:j.handleClose,onOpen:j.handleOpen,left:g.action1,right:g.action1},{default:Object(l.K)(()=>[Object(l.i)(f,null,{default:Object(l.K)(()=>[d]),_:1})]),_:1},8,["onClose","onOpen","left","right"])])])]),h])}};s.default=r},694:function(t,s,a){"use strict";a.r(s);var l=a(0);var e=a(567),n=a(273),c=a(274),p=a(275),o=(a(545),{components:{Container:n.a,PageHeader:c.a,PageFooter:p.a,Demo:e.default},render:function(t,s,a,e,n,c){const p=Object(l.B)("PageHeader"),o=Object(l.B)("Demo"),i=Object(l.B)("PageFooter"),d=Object(l.B)("Container");return Object(l.t)(),Object(l.e)(d,{class:"swipeAction-page"},{default:Object(l.K)(()=>[Object(l.i)(p,{title:"滑动操作 SwipeAction"}),Object(l.i)(o),Object(l.i)(i)]),_:1})}});s.default=o}}]);