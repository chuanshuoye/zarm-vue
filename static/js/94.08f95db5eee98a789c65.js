(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{573:function(s,a,t){"use strict";t.r(a);var l=t(0);const n={class:"zarm-vue-demo"},p={class:"za-panel"},e=Object(l.i)("div",{class:"za-panel__header"},[Object(l.i)("div",{class:"za-panel__title"},"左侧渲染 ")],-1),c={class:"za-panel__body"},i=Object(l.i)("div",{slot:"title"},"这是标题",-1),h={class:"za-panel"},j=Object(l.i)("div",{class:"za-panel__header"},[Object(l.i)("div",{class:"za-panel__title"},"右侧渲染 ")],-1),r={class:"za-panel__body"},o=Object(l.i)("div",{slot:"title"},"这是标题",-1),g={class:"za-panel"},d=Object(l.i)("div",{class:"za-panel__header"},[Object(l.i)("div",{class:"za-panel__title"},"复数渲染 ")],-1),m={class:"za-panel__body"},u=Object(l.i)("div",null,"这是标题",-1),b=Object(l.g)('<div class="zarm-markdown-doc"><h2>导航栏 NavBar</h2><div class="demo custom-block"><p class="custom-block-title">左侧渲染</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-nav-bar</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:left</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-icon</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;arrow-left&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;clickHandle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:title</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>这是标题<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n \n<span class="hljs-tag">&lt;/<span class="hljs-name">za-nav-bar</span>&gt;</span>\n</code></pre></div><div class="demo custom-block"><p class="custom-block-title">右侧渲染</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-nav-bar</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:title</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>这是标题<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:right</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-icon</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;question-round&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;clickHandle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-icon</span>&gt;</span>\n   <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-nav-bar</span>&gt;</span>\n</code></pre></div><div class="demo custom-block"><p class="custom-block-title">复数渲染</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-nav-bar</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:left</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-icon</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;arrow-left&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;clickHandle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:title</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>这是标题<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:right</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-icon</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;add&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;clickHandle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-icon</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;question-round&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;clickHandle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-nav-bar</span>&gt;</span>\n</code></pre></div><h3>Vue Script</h3><pre class="hljs"><code>&lt;script name=<span class="hljs-string">&quot;vue&quot;</span>&gt;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data() {\n    <span class="hljs-keyword">return</span> {\n    }\n  },\n  <span class="hljs-attr">methods</span>: {\n    clickHandle() {\n      alert(<span class="hljs-string">&#39;clickHandle&#39;</span>);\n    },\n  },\n};\n&lt;<span class="hljs-regexp">/script&gt;\n</span></code></pre><h3>API</h3><h4>NavBar Attributes</h4><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值／参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">title</td><td style="text-align:left;">html</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">导航栏标题渲染</td></tr><tr><td style="text-align:left;">slot=&quot;left&quot;</td><td style="text-align:left;">html</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">导航栏左侧渲染</td></tr><tr><td style="text-align:left;">slot=&quot;right&quot;</td><td style="text-align:left;">html</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">导航栏右侧渲染</td></tr></tbody></table></div>',1);var v={data:()=>({}),methods:{clickHandle(){alert("clickHandle")}},render:function(s,a,t,v,y,q){const k=Object(l.B)("za-icon"),O=Object(l.B)("za-nav-bar");return Object(l.t)(),Object(l.e)("div",null,[Object(l.i)("div",n,[Object(l.i)("div",p,[e,Object(l.i)("div",c,[Object(l.i)(O,null,{left:Object(l.K)(()=>[Object(l.i)(k,{theme:"primary",type:"arrow-left",onClick:q.clickHandle},null,8,["onClick"])]),title:Object(l.K)(()=>[i]),_:1})])]),Object(l.i)("div",h,[j,Object(l.i)("div",r,[Object(l.i)(O,null,{title:Object(l.K)(()=>[o]),right:Object(l.K)(()=>[Object(l.i)(k,{theme:"primary",type:"question-round",onClick:q.clickHandle},null,8,["onClick"])]),_:1})])]),Object(l.i)("div",g,[d,Object(l.i)("div",m,[Object(l.i)(O,null,{left:Object(l.K)(()=>[Object(l.i)(k,{theme:"primary",type:"arrow-left",onClick:q.clickHandle},null,8,["onClick"])]),title:Object(l.K)(()=>[u]),right:Object(l.K)(()=>[Object(l.i)(k,{theme:"primary",type:"add",onClick:q.clickHandle},null,8,["onClick"]),Object(l.i)(k,{theme:"primary",type:"question-round",onClick:q.clickHandle},null,8,["onClick"])]),_:1})])])]),b])}};a.default=v}}]);