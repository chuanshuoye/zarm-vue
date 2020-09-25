(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{400:function(t,s,a){"use strict";a.r(s);var l=a(1);const e={class:"zarm-vue-demo"},n={class:"za-panel"},p=Object(l.createVNode)("div",{class:"za-panel__header"},[Object(l.createVNode)("div",{class:"za-panel__title"},"基本 ")],-1),d={class:"za-panel__body"},c=Object(l.createStaticVNode)('<div class="zarm-markdown-doc"><h2>滑动输入条 Slider</h2><div class="demo custom-block"><p class="custom-block-title">基本</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;普通&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-slider</span> <span class="hljs-attr">:default-value</span>=<span class="hljs-string">&quot;40&quot;</span> @<span class="hljs-attr">updated</span>=<span class="hljs-string">&quot;handleChange&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;设置默认值&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-slider</span> <span class="hljs-attr">:default-value</span>=<span class="hljs-string">&quot;20&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;设置上下限&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-slider</span> <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;-100&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;initvalue&quot;</span> @<span class="hljs-attr">updated</span>=<span class="hljs-string">&quot;handleChange&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;设置步长&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-slider</span> <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;10&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;禁用状态&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-slider</span> <span class="hljs-attr">:default-value</span>=<span class="hljs-string">&quot;20&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n</code></pre></div><h3>Vue Script</h3><pre class="hljs"><code>&lt;script name=<span class="hljs-string">&quot;vue&quot;</span>&gt;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data() {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">initvalue</span>: <span class="hljs-number">10</span>,\n    }\n  },\n  <span class="hljs-attr">methods</span>: {\n    handleChange(){\n      <span class="hljs-keyword">const</span> self = <span class="hljs-keyword">this</span>;\n      <span class="hljs-built_in">console</span>.log(self.initvalue)\n    }\n  },\n};\n&lt;<span class="hljs-regexp">/script&gt;\n</span></code></pre><h3>API</h3><h4>Slider Attributes</h4><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值／参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">number</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">绑定选项值</td></tr><tr><td style="text-align:left;">default-value</td><td style="text-align:left;">number</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">值</td></tr><tr><td style="text-align:left;">min</td><td style="text-align:left;">number</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">最小值</td></tr><tr><td style="text-align:left;">max</td><td style="text-align:left;">number</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">最大值</td></tr><tr><td style="text-align:left;">step</td><td style="text-align:left;">number</td><td style="text-align:left;">1</td><td style="text-align:left;"></td><td style="text-align:left;">步长</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">是否禁用</td></tr></tbody></table><h4>Slider Events</h4><table><thead><tr><th style="text-align:left;">事件名称</th><th style="text-align:left;">说明</th><th style="text-align:left;">回调参数</th></tr></thead><tbody><tr><td style="text-align:left;">updated</td><td style="text-align:left;">function</td><td style="text-align:left;">noop</td></tr></tbody></table></div>',1);var h={data:()=>({initvalue:10}),methods:{handleChange(){console.log(this.initvalue)}},render:function(t,s,a,h,i,r){const o=Object(l.resolveComponent)("za-slider"),g=Object(l.resolveComponent)("za-cell");return Object(l.openBlock)(),Object(l.createBlock)("div",null,[Object(l.createVNode)("div",e,[Object(l.createVNode)("div",n,[p,Object(l.createVNode)("div",d,[Object(l.createVNode)(g,{title:"普通"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(o,{"default-value":40,onUpdated:r.handleChange},null,8,["onUpdated"])]),_:1}),Object(l.createVNode)(g,{title:"设置默认值"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(o,{"default-value":20})]),_:1}),Object(l.createVNode)(g,{title:"设置上下限"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(o,{min:-100,max:100,modelValue:i.initvalue,"onUpdate:modelValue":s[1]||(s[1]=t=>i.initvalue=t),onUpdated:r.handleChange},null,8,["modelValue","onUpdated"])]),_:1}),Object(l.createVNode)(g,{title:"设置步长"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(o,{step:10})]),_:1}),Object(l.createVNode)(g,{title:"禁用状态"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(o,{"default-value":20,disabled:""})]),_:1})])])]),c])}};s.default=h}}]);