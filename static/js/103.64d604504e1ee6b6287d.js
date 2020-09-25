(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{560:function(s,t,a){"use strict";a.r(t);var l=a(0);const n={class:"zarm-vue-demo"},e={class:"za-panel"},p=Object(l.i)("div",{class:"za-panel__header"},[Object(l.i)("div",{class:"za-panel__title"},"基本 ")],-1),c={class:"za-panel__body"},r={class:"za-panel"},h=Object(l.i)("div",{class:"za-panel__header"},[Object(l.i)("div",{class:"za-panel__title"},"多形状 ")],-1),i={class:"za-panel__body"},d=Object(l.g)('<div class="zarm-markdown-doc"><h2>步进器 Stepper</h2><div class="demo custom-block"><p class="custom-block-title">基本</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;默认&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-stepper</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;description&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;stepper6&quot;</span> @<span class="hljs-attr">inputChange</span>=<span class="hljs-string">&quot;handleChange&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-stepper</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;小号&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-stepper</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;description&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;stepper1&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-stepper</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;设置默认值&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-stepper</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;description&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;stepper2&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-stepper</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;设置上下限&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-stepper</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;description&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;stepper3&quot;</span> <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;-3&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-stepper</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;设置步长&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-stepper</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;description&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;stepper4&quot;</span> <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;0.5&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-stepper</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;禁用状态&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-stepper</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;description&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;stepper5&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-stepper</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n</code></pre></div><div class="demo custom-block"><p class="custom-block-title">多形状</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;圆角&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-stepper</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;description&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;stepper7&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;radius&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-stepper</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;圆型&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-stepper</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;description&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;stepper8&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;circle&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-stepper</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n</code></pre></div><h3>Vue Script</h3><pre class="hljs"><code>&lt;script name=<span class="hljs-string">&quot;vue&quot;</span>&gt;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data() {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">stepper1</span>: <span class="hljs-number">0</span>,\n      <span class="hljs-attr">stepper2</span>: <span class="hljs-number">2</span>,\n      <span class="hljs-attr">stepper3</span>: <span class="hljs-number">0</span>,\n      <span class="hljs-attr">stepper4</span>: <span class="hljs-number">0</span>,\n      <span class="hljs-attr">stepper5</span>: <span class="hljs-number">0</span>,\n      <span class="hljs-attr">stepper6</span>: <span class="hljs-number">0</span>,\n      <span class="hljs-attr">stepper7</span>: <span class="hljs-number">0</span>,\n      <span class="hljs-attr">stepper8</span>: <span class="hljs-number">0</span>,\n      <span class="hljs-attr">stepper9</span>: <span class="hljs-number">0</span>,\n      <span class="hljs-attr">stepper10</span>: <span class="hljs-number">0</span>,\n    }\n  },\n  <span class="hljs-attr">methods</span>: {\n    handleChange(event) {\n      <span class="hljs-built_in">console</span>.log(event);\n    },\n    handleInputChange(v) {\n      <span class="hljs-built_in">console</span>.log(v);\n    }\n  },\n};\n&lt;<span class="hljs-regexp">/script&gt;\n</span></code></pre><h3>API</h3><h4>Stepper Attributes</h4><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值／参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">size</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;md&#39;</td><td style="text-align:left;">&#39;md&#39;, &#39;sm&#39;</td><td style="text-align:left;">主题</td></tr><tr><td style="text-align:left;">shape</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">&#39;radius&#39;, &#39;circle&#39;</td><td style="text-align:left;">形状</td></tr><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">number</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">绑定值</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">是否禁用</td></tr><tr><td style="text-align:left;">min</td><td style="text-align:left;">number</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">最小值</td></tr><tr><td style="text-align:left;">max</td><td style="text-align:left;">number</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">最大值</td></tr><tr><td style="text-align:left;">step</td><td style="text-align:left;">number</td><td style="text-align:left;">1</td><td style="text-align:left;"></td><td style="text-align:left;">步长</td></tr></tbody></table><h4>Stepper Events</h4><table><thead><tr><th style="text-align:left;">事件名称</th><th style="text-align:left;">说明</th><th style="text-align:left;">回调参数</th></tr></thead><tbody><tr><td style="text-align:left;">input-change</td><td style="text-align:left;">点击加减后返回变化的值</td><td style="text-align:left;">number</td></tr></tbody></table></div>',1);var j={data:()=>({stepper1:0,stepper2:2,stepper3:0,stepper4:0,stepper5:0,stepper6:0,stepper7:0,stepper8:0,stepper9:0,stepper10:0}),methods:{handleChange(s){console.log(s)},handleInputChange(s){console.log(s)}},render:function(s,t,a,j,o,g){const u=Object(l.B)("za-stepper"),m=Object(l.B)("za-cell");return Object(l.t)(),Object(l.e)("div",null,[Object(l.i)("div",n,[Object(l.i)("div",e,[p,Object(l.i)("div",c,[Object(l.i)(m,{title:"默认"},{default:Object(l.K)(()=>[Object(l.i)(u,{slot:"description",modelValue:o.stepper6,"onUpdate:modelValue":t[1]||(t[1]=s=>o.stepper6=s),onInputChange:g.handleChange},null,8,["modelValue","onInputChange"])]),_:1}),Object(l.i)(m,{title:"小号"},{default:Object(l.K)(()=>[Object(l.i)(u,{slot:"description",modelValue:o.stepper1,"onUpdate:modelValue":t[2]||(t[2]=s=>o.stepper1=s),size:"sm"},null,8,["modelValue"])]),_:1}),Object(l.i)(m,{title:"设置默认值"},{default:Object(l.K)(()=>[Object(l.i)(u,{slot:"description",modelValue:o.stepper2,"onUpdate:modelValue":t[3]||(t[3]=s=>o.stepper2=s),size:"sm"},null,8,["modelValue"])]),_:1}),Object(l.i)(m,{title:"设置上下限"},{default:Object(l.K)(()=>[Object(l.i)(u,{slot:"description",modelValue:o.stepper3,"onUpdate:modelValue":t[4]||(t[4]=s=>o.stepper3=s),min:-3,max:3,size:"sm"},null,8,["modelValue"])]),_:1}),Object(l.i)(m,{title:"设置步长"},{default:Object(l.K)(()=>[Object(l.i)(u,{slot:"description",modelValue:o.stepper4,"onUpdate:modelValue":t[5]||(t[5]=s=>o.stepper4=s),step:.5,size:"sm"},null,8,["modelValue"])]),_:1}),Object(l.i)(m,{title:"禁用状态"},{default:Object(l.K)(()=>[Object(l.i)(u,{slot:"description",modelValue:o.stepper5,"onUpdate:modelValue":t[6]||(t[6]=s=>o.stepper5=s),disabled:"",size:"sm"},null,8,["modelValue"])]),_:1})])]),Object(l.i)("div",r,[h,Object(l.i)("div",i,[Object(l.i)(m,{title:"圆角"},{default:Object(l.K)(()=>[Object(l.i)(u,{slot:"description",modelValue:o.stepper7,"onUpdate:modelValue":t[7]||(t[7]=s=>o.stepper7=s),shape:"radius",size:"sm"},null,8,["modelValue"])]),_:1}),Object(l.i)(m,{title:"圆型"},{default:Object(l.K)(()=>[Object(l.i)(u,{slot:"description",modelValue:o.stepper8,"onUpdate:modelValue":t[8]||(t[8]=s=>o.stepper8=s),shape:"circle",size:"sm"},null,8,["modelValue"])]),_:1})])])]),d])}};t.default=j}}]);