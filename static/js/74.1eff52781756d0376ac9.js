(window.webpackJsonp=window.webpackJsonp||[]).push([[74,82],{566:function(s,t,a){"use strict";a.r(t);var l=a(0);const n={class:"zarm-vue-demo"},e={class:"za-panel"},c=Object(l.i)("div",{class:"za-panel__header"},[Object(l.i)("div",{class:"za-panel__title"},"基本 ")],-1),p={class:"za-panel__body"},i=Object(l.h)("开启"),o=Object(l.h)("开启"),h=Object(l.h)("开启"),j=Object(l.g)('<div class="zarm-markdown-doc"><h2>动作面板 ActionSheet</h2><div class="demo custom-block"><p class="custom-block-title">基本</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;普通&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible2 = true&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;带取消操作&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible1 = true&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  \n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;圆角，留边&quot;</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible3 = true&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  \n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-actionsheet</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible1&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions1&quot;</span> @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;cancelCb&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-actionsheet</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-actionsheet</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible2&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions2&quot;</span> <span class="hljs-attr">:showCancel</span>=<span class="hljs-string">&quot;false&quot;</span> @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;cancelCb&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-actionsheet</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-actionsheet</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible3&quot;</span> <span class="hljs-attr">:spacing</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;radius&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions2&quot;</span> @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;cancelCb&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-actionsheet</span>&gt;</span>\n</code></pre></div><h3>Vue Script</h3><pre class="hljs"><code>&lt;script name=<span class="hljs-string">&quot;vue&quot;</span>&gt;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data() {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">visible1</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">visible2</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">visible3</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">actions1</span>: [{\n        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;操作一&#39;</span>,\n        <span class="hljs-attr">onClick</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;action 1&#39;</span>),\n      },{\n        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;操作二&#39;</span>,\n        <span class="hljs-attr">onClick</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;action 2&#39;</span>),\n      },{\n        <span class="hljs-attr">theme</span>: <span class="hljs-string">&#39;error&#39;</span>,\n        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;操作三&#39;</span>,\n        <span class="hljs-attr">onClick</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;action 3&#39;</span>),\n      }],\n      <span class="hljs-attr">actions2</span>: [{\n        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;操作一&#39;</span>,\n        <span class="hljs-attr">onClick</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;action 1&#39;</span>),\n      },{\n        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;操作二&#39;</span>,\n        <span class="hljs-attr">onClick</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;action 2&#39;</span>),\n      }],\n    }\n  },\n  <span class="hljs-attr">methods</span>: {\n    cancelCb(reason, event){\n      <span class="hljs-built_in">console</span>.log(reason, event)\n    }\n  },\n};\n&lt;<span class="hljs-regexp">/script&gt;\n</span></code></pre><h3>API</h3><h4>ActionSheet Attributes</h4><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值／参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">shape</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">形状 ，可选<code>radius</code></td></tr><tr><td style="text-align:left;">spacing</td><td style="text-align:left;">boolean</td><td style="text-align:left;"></td><td style="text-align:left;">false</td><td style="text-align:left;">是否留边</td></tr><tr><td style="text-align:left;">visible</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">是否显示, 支持.sync 修饰符 (v2.3.0+)</td></tr><tr><td style="text-align:left;">actions</td><td style="text-align:left;">arrayOf(object)</td><td style="text-align:left;">[ ]</td><td style="text-align:left;">object: { theme, text, onClick }</td><td style="text-align:left;">动作列表</td></tr><tr><td style="text-align:left;">cancel-text</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;取消&#39;</td><td style="text-align:left;"></td><td style="text-align:left;">取消菜单的文案</td></tr></tbody></table><h4>ActionSheet Events</h4><table><thead><tr><th style="text-align:left;">事件名称</th><th style="text-align:left;">说明</th><th style="text-align:left;">回调参数</th></tr></thead><tbody><tr><td style="text-align:left;">cancel</td><td style="text-align:left;">关闭时触发的事件</td><td style="text-align:left;">event 事件对象</td></tr></tbody></table><h4>Actions 类型定义</h4><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">text</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">按钮文字</td></tr><tr><td style="text-align:left;">theme</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;default&#39;</td><td style="text-align:left;">按钮主题，可选值 <code>default</code>、<code>primary</code>、<code>success</code>、<code>warning</code>、<code>error</code></td></tr><tr><td style="text-align:left;">onClick</td><td style="text-align:left;">function</td><td style="text-align:left;">-</td><td style="text-align:left;">按钮点击后触发的回调函数</td></tr></tbody></table></div>',1);var r={data:()=>({visible1:!1,visible2:!1,visible3:!1,actions1:[{text:"操作一",onClick:()=>console.log("action 1")},{text:"操作二",onClick:()=>console.log("action 2")},{theme:"error",text:"操作三",onClick:()=>console.log("action 3")}],actions2:[{text:"操作一",onClick:()=>console.log("action 1")},{text:"操作二",onClick:()=>console.log("action 2")}]}),methods:{cancelCb(s,t){console.log(s,t)}},render:function(s,t,a,r,g,d){const b=Object(l.B)("za-button"),u=Object(l.B)("za-cell"),f=Object(l.B)("za-actionsheet");return Object(l.t)(),Object(l.e)("div",null,[Object(l.i)("div",n,[Object(l.i)("div",e,[c,Object(l.i)("div",p,[Object(l.i)(u,{title:"普通"},{description:Object(l.K)(()=>[Object(l.i)(b,{size:"xs",onClick:t[1]||(t[1]=s=>g.visible2=!0)},{default:Object(l.K)(()=>[i]),_:1})]),_:1}),Object(l.i)(u,{title:"带取消操作"},{description:Object(l.K)(()=>[Object(l.i)(b,{size:"xs",onClick:t[2]||(t[2]=s=>g.visible1=!0)},{default:Object(l.K)(()=>[o]),_:1})]),_:1}),Object(l.i)(u,{title:"圆角，留边"},{description:Object(l.K)(()=>[Object(l.i)(b,{size:"xs",onClick:t[3]||(t[3]=s=>g.visible3=!0)},{default:Object(l.K)(()=>[h]),_:1})]),_:1}),Object(l.i)(f,{visible:g.visible1,"onUpdate:visible":t[4]||(t[4]=s=>g.visible1=s),actions:g.actions1,onCancel:d.cancelCb},null,8,["visible","actions","onCancel"]),Object(l.i)(f,{visible:g.visible2,"onUpdate:visible":t[5]||(t[5]=s=>g.visible2=s),actions:g.actions2,showCancel:!1,onCancel:d.cancelCb},null,8,["visible","actions","onCancel"]),Object(l.i)(f,{visible:g.visible3,"onUpdate:visible":t[6]||(t[6]=s=>g.visible3=s),spacing:!0,shape:"radius",actions:g.actions2,onCancel:d.cancelCb},null,8,["visible","actions","onCancel"])])])]),j])}};t.default=r},692:function(s,t,a){"use strict";a.r(t);var l=a(0);var n=a(566),e=a(273),c=a(274),p=a(275),i={components:{Container:e.a,PageHeader:c.a,PageFooter:p.a,Demo:n.default},render:function(s,t,a,n,e,c){const p=Object(l.B)("PageHeader"),i=Object(l.B)("Demo"),o=Object(l.B)("PageFooter"),h=Object(l.B)("Container");return Object(l.t)(),Object(l.e)(h,{class:"actionsheet-page"},{default:Object(l.K)(()=>[Object(l.i)(p,{title:"动作面板 ActionSheet"}),Object(l.i)(i),Object(l.i)(o)]),_:1})}};t.default=i}}]);