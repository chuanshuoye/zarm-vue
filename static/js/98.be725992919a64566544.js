(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{406:function(s,a,t){"use strict";t.r(a);var n=t(1);const l={class:"zarm-vue-demo"},e={class:"za-panel"},p=Object(n.createVNode)("div",{class:"za-panel__header"},[Object(n.createVNode)("div",{class:"za-panel__title"},"基本 ")],-1),c={class:"za-panel__body"},r={class:"progress",style:{padding:"20px 0"}},h={class:"progress"},j={class:"progress-content"},o={class:"progress-text"},g=Object(n.createVNode)("span",{class:"progress-percent"},"%",-1),i={class:"progress"},d={class:"progress-content"},u={class:"progress-text"},m=Object(n.createVNode)("span",{class:"progress-percent"},"%",-1),q={class:"zarm-markdown-doc"},b=Object(n.createVNode)("h2",null,"进度条 Progress",-1),O={class:"demo custom-block"},y=Object(n.createVNode)("p",{class:"custom-block-title"},"基本",-1),v={class:"hljs"},V=Object(n.createStaticVNode)('<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;progress&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;padding:20px 0;&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-progress</span> <span class="hljs-attr">:percent</span>=<span class="hljs-string">&quot;percent&quot;</span> <span class="hljs-attr">:theme</span>=<span class="hljs-string">&quot;theme&quot;</span> <span class="hljs-attr">:shape</span>=<span class="hljs-string">&quot;shape&quot;</span> <span class="hljs-attr">:weight</span>=<span class="hljs-string">&quot;weight&quot;</span>&gt;</span>',3),w=Object(n.createStaticVNode)('<span class="hljs-tag">&lt;/<span class="hljs-name">za-progress</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;progress&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-progress</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span> <span class="hljs-attr">:percent</span>=<span class="hljs-string">&quot;percent&quot;</span> <span class="hljs-attr">:theme</span>=<span class="hljs-string">&quot;theme&quot;</span> <span class="hljs-attr">:shape</span>=<span class="hljs-string">&quot;shape&quot;</span> <span class="hljs-attr">:weight</span>=<span class="hljs-string">&quot;weight&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;progress-content&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;progress-text&quot;</span>&gt;</span>',11),x=Object(n.createStaticVNode)('<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;progress-percent&quot;</span>&gt;</span>%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">za-progress</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;progress&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-progress</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;semi-circle&quot;</span> <span class="hljs-attr">:percent</span>=<span class="hljs-string">&quot;percent&quot;</span> <span class="hljs-attr">:theme</span>=<span class="hljs-string">&quot;theme&quot;</span> <span class="hljs-attr">:shape</span>=<span class="hljs-string">&quot;shape&quot;</span> <span class="hljs-attr">:weight</span>=<span class="hljs-string">&quot;weight&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;progress-content&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;progress-text&quot;</span>&gt;</span>',18),f=Object(n.createStaticVNode)('<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;progress-percent&quot;</span>&gt;</span>%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">za-progress</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;进度&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-stepper</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;radius&quot;</span> <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;percent&quot;</span> @<span class="hljs-attr">step-change</span>=<span class="hljs-string">&quot;handleStepChange&quot;</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-stepper</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;主题&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-select</span> <span class="hljs-attr">:defaultValue</span>=<span class="hljs-string">&quot;theme&quot;</span> <span class="hljs-attr">:data-source</span>=<span class="hljs-string">&quot;dataSource&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;handleOk&quot;</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-select</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;线条形状&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-select</span> <span class="hljs-attr">:defaultValue</span>=<span class="hljs-string">&quot;shape&quot;</span> <span class="hljs-attr">:data-source</span>=<span class="hljs-string">&quot;shapeSource&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;handleShape&quot;</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-select</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;线条粗细&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-select</span> <span class="hljs-attr">:defaultValue</span>=<span class="hljs-string">&quot;weight&quot;</span> <span class="hljs-attr">:data-source</span>=<span class="hljs-string">&quot;weightSource&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;handleWeight&quot;</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-select</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n',39),N=Object(n.createStaticVNode)('<h3>Vue Script</h3><pre class="hljs"><code>&lt;script name=<span class="hljs-string">&quot;vue&quot;</span>&gt;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data() {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">percent</span>: <span class="hljs-number">10</span>,\n      <span class="hljs-attr">theme</span>: <span class="hljs-string">&#39;primary&#39;</span>,\n      <span class="hljs-attr">shape</span>: <span class="hljs-string">&#39;round&#39;</span>,\n      <span class="hljs-attr">weight</span>: <span class="hljs-string">&#39;normal&#39;</span>,\n      <span class="hljs-attr">dataSource</span>:[\n        { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;primary&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;primary&#39;</span> },\n        { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;warning&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;warning&#39;</span> },\n        { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;error&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;error&#39;</span> },\n      ],\n      <span class="hljs-attr">shapeSource</span>:[\n        { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;rect&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;rect&#39;</span> },\n        { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;round&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;round&#39;</span> },\n      ],\n      <span class="hljs-attr">weightSource</span>:[\n        { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;normal&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;normal&#39;</span> },\n        { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;thin&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;thin&#39;</span> },\n      ],\n    }\n  },\n  <span class="hljs-attr">methods</span>: {\n    handleStepChange(e) {\n\n    },\n    handleOk(v) {\n      <span class="hljs-keyword">this</span>.theme = v.value;\n    },\n    handleShape(v) {\n      <span class="hljs-keyword">this</span>.shape = v.value;\n    },\n    handleWeight(v) {\n      <span class="hljs-keyword">this</span>.weight = v.value;\n    },\n\n  },\n};\n&lt;<span class="hljs-regexp">/script&gt;\n</span></code></pre><h3>API</h3><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值／参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">theme</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;primary&#39;</td><td style="text-align:left;">&#39;primary&#39;, &#39;success&#39;, &#39;warning&#39;, &#39;error&#39;</td><td style="text-align:left;">主题</td></tr><tr><td style="text-align:left;">percent</td><td style="text-align:left;">number</td><td style="text-align:left;">0</td><td style="text-align:left;"></td><td style="text-align:left;">进度百分比（范围：0 ～ 100）</td></tr><tr><td style="text-align:left;">shape</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;rect&#39;</td><td style="text-align:left;">&#39;rect&#39;, &#39;round&#39;</td><td style="text-align:left;">线条形状</td></tr><tr><td style="text-align:left;">weight</td><td style="text-align:left;">string , number</td><td style="text-align:left;">&#39;normal&#39;</td><td style="text-align:left;">&#39;normal&#39;, &#39;thin&#39;</td><td style="text-align:left;">线条粗细</td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;line&#39;</td><td style="text-align:left;">&#39;line&#39;, &#39;circle&#39; , &#39;semi-circle&#39;</td><td style="text-align:left;">类型</td></tr></tbody></table>',4);var S={data:()=>({percent:10,theme:"primary",shape:"round",weight:"normal",dataSource:[{value:"primary",label:"primary"},{value:"warning",label:"warning"},{value:"error",label:"error"}],shapeSource:[{value:"rect",label:"rect"},{value:"round",label:"round"}],weightSource:[{value:"normal",label:"normal"},{value:"thin",label:"thin"}]}),methods:{handleStepChange(s){},handleOk(s){this.theme=s.value},handleShape(s){this.shape=s.value},handleWeight(s){this.weight=s.value}},render:function(s,a,t,S,z,k){const C=Object(n.resolveComponent)("za-progress"),_=Object(n.resolveComponent)("za-stepper"),D=Object(n.resolveComponent)("za-cell"),T=Object(n.resolveComponent)("za-select");return Object(n.openBlock)(),Object(n.createBlock)("div",null,[Object(n.createVNode)("div",l,[Object(n.createVNode)("div",e,[p,Object(n.createVNode)("div",c,[Object(n.createVNode)("div",r,[Object(n.createVNode)(C,{percent:z.percent,theme:z.theme,shape:z.shape,weight:z.weight},{default:Object(n.withCtx)(()=>[Object(n.createTextVNode)(Object(n.toDisplayString)(z.percent+"%"),1)]),_:1},8,["percent","theme","shape","weight"])]),Object(n.createVNode)("div",h,[Object(n.createVNode)(C,{type:"circle",percent:z.percent,theme:z.theme,shape:z.shape,weight:z.weight},{default:Object(n.withCtx)(()=>[Object(n.createVNode)("div",j,[Object(n.createVNode)("span",o,Object(n.toDisplayString)(z.percent),1),g])]),_:1},8,["percent","theme","shape","weight"])]),Object(n.createVNode)("div",i,[Object(n.createVNode)(C,{type:"semi-circle",percent:z.percent,theme:z.theme,shape:z.shape,weight:z.weight},{default:Object(n.withCtx)(()=>[Object(n.createVNode)("div",d,[Object(n.createVNode)("span",u,Object(n.toDisplayString)(z.percent),1),m])]),_:1},8,["percent","theme","shape","weight"])]),Object(n.createVNode)(D,{title:"进度"},{default:Object(n.withCtx)(()=>[Object(n.createVNode)(_,{shape:"radius",step:10,min:0,max:100,modelValue:z.percent,"onUpdate:modelValue":a[1]||(a[1]=s=>z.percent=s),"onStep-change":k.handleStepChange},null,8,["modelValue","onStep-change"])]),_:1}),Object(n.createVNode)(D,{title:"主题"},{default:Object(n.withCtx)(()=>[Object(n.createVNode)(T,{defaultValue:z.theme,"data-source":z.dataSource,onOk:k.handleOk},null,8,["defaultValue","data-source","onOk"])]),_:1}),Object(n.createVNode)(D,{title:"线条形状"},{default:Object(n.withCtx)(()=>[Object(n.createVNode)(T,{defaultValue:z.shape,"data-source":z.shapeSource,onOk:k.handleShape},null,8,["defaultValue","data-source","onOk"])]),_:1}),Object(n.createVNode)(D,{title:"线条粗细"},{default:Object(n.withCtx)(()=>[Object(n.createVNode)(T,{defaultValue:z.weight,"data-source":z.weightSource,onOk:k.handleWeight},null,8,["defaultValue","data-source","onOk"])]),_:1})])])]),Object(n.createVNode)("div",q,[b,Object(n.createVNode)("div",O,[y,Object(n.createVNode)("pre",v,[Object(n.createVNode)("code",null,[V,Object(n.createTextVNode)("\n    "+Object(n.toDisplayString)(z.percent+"%")+"\n  ",1),w,Object(n.createTextVNode)(Object(n.toDisplayString)(z.percent),1),x,Object(n.createTextVNode)(Object(n.toDisplayString)(z.percent),1),f])])]),N])])}};a.default=S}}]);