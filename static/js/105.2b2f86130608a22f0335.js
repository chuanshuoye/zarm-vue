(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{396:function(s,t,a){"use strict";a.r(t);var l=a(1);const e={class:"zarm-vue-demo"},n={class:"za-panel"},c=Object(l.createVNode)("div",{class:"za-panel__header"},[Object(l.createVNode)("div",{class:"za-panel__title"},"基本 ")],-1),p={class:"za-panel__body"},h=Object(l.createStaticVNode)('<div class="zarm-markdown-doc"><h2>开关 Switch</h2><div class="demo custom-block"><p class="custom-block-title">基本</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;普通&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch1&quot;</span> @<span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;handleChange&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">za-switch</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;默认开&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-switch</span> <span class="hljs-attr">defaultChecked</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-switch</span>&gt;</span>\n  \n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot; 禁用的开关（默认关）&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-switch</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-switch</span>&gt;</span>\n \n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;禁用的开关（默认开）&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-switch</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">defaultChecked</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-switch</span>&gt;</span>\n  \n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n</code></pre></div><h3>Vue Script</h3><pre class="hljs"><code>&lt;script name=<span class="hljs-string">&quot;vue&quot;</span>&gt;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data() {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">switch1</span>: <span class="hljs-literal">false</span>,\n    }\n  },\n  <span class="hljs-attr">methods</span>: {\n    handleChange(checked){\n      <span class="hljs-built_in">console</span>.log(checked);\n    }\n  }\n};\n&lt;<span class="hljs-regexp">/script&gt;\n</span></code></pre><h3>API</h3><h4>Switch Attributes</h4><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值／参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">default-checked</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">-</td><td style="text-align:left;">初始值</td></tr><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">-</td><td style="text-align:left;">值</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">-</td><td style="text-align:left;">是否禁用</td></tr></tbody></table><h4>Switch Event</h4><table><thead><tr><th style="text-align:left;">事件名称</th><th style="text-align:left;">说明</th><th style="text-align:left;">回调参数</th></tr></thead><tbody><tr><td style="text-align:left;">checked</td><td style="text-align:left;">绑定值改变时的事件</td><td style="text-align:left;">event.target.checked</td></tr></tbody></table></div>',1);var d={data:()=>({switch1:!1}),methods:{handleChange(s){console.log(s)}},render:function(s,t,a,d,i,j){const o=Object(l.resolveComponent)("za-switch"),g=Object(l.resolveComponent)("za-cell");return Object(l.openBlock)(),Object(l.createBlock)("div",null,[Object(l.createVNode)("div",e,[Object(l.createVNode)("div",n,[c,Object(l.createVNode)("div",p,[Object(l.createVNode)(g,{title:"普通"},{description:Object(l.withCtx)(()=>[Object(l.createVNode)(o,{modelValue:i.switch1,"onUpdate:modelValue":t[1]||(t[1]=s=>i.switch1=s),onChecked:j.handleChange},null,8,["modelValue","onChecked"])]),_:1}),Object(l.createVNode)(g,{title:"默认开"},{description:Object(l.withCtx)(()=>[Object(l.createVNode)(o,{defaultChecked:""})]),_:1}),Object(l.createVNode)(g,{title:" 禁用的开关（默认关）"},{description:Object(l.withCtx)(()=>[Object(l.createVNode)(o,{disabled:""})]),_:1}),Object(l.createVNode)(g,{title:"禁用的开关（默认开）"},{description:Object(l.withCtx)(()=>[Object(l.createVNode)(o,{disabled:"",defaultChecked:""})]),_:1})])])]),h])}};t.default=d}}]);