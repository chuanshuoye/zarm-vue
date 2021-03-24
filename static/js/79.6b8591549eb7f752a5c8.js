(window.webpackJsonp=window.webpackJsonp||[]).push([[79,95],{395:function(s,t,e){"use strict";e.r(t);var a=e(1);const l={class:"zarm-vue-demo"},n={class:"za-panel"},c=Object(a.createVNode)("div",{class:"za-panel__header"},[Object(a.createVNode)("div",{class:"za-panel__title"},"平铺键盘 Keyboard ")],-1),p={class:"za-panel__body"},o={class:"za-panel"},r=Object(a.createVNode)("div",{class:"za-panel__header"},[Object(a.createVNode)("div",{class:"za-panel__title"},"键盘触发器 KeyboardPicker ")],-1),d={class:"za-panel__body"},i=Object(a.createTextVNode)("开启"),h=Object(a.createStaticVNode)('<div class="zarm-markdown-doc"><h2>虚拟键盘 Keyboard &amp; KeyboardPicker</h2><div class="demo custom-block"><p class="custom-block-title">平铺键盘 Keyboard</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-keyboard</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-keyboard</span>&gt;</span>\n</code></pre></div><div class="demo custom-block"><p class="custom-block-title">键盘触发器 KeyboardPicker</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;拾取器触发&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible1 = true&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-keyboard-picker</span> <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">&quot;visible1&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> @<span class="hljs-attr">keyClick</span>=<span class="hljs-string">&quot;handleChange1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-keyboard-picker</span>&gt;</span>\n</code></pre></div><h3>Vue Script</h3><pre class="hljs"><code>&lt;script name=<span class="hljs-string">&quot;vue&quot;</span>&gt;\n<span class="hljs-keyword">const</span> getValue = <span class="hljs-function">(<span class="hljs-params">v, key</span>) =&gt;</span> {\n  <span class="hljs-keyword">if</span> (key == <span class="hljs-string">&#39;delete&#39;</span>) {\n    <span class="hljs-keyword">return</span> v.slice(<span class="hljs-number">0</span>, <span class="hljs-number">-1</span>)\n  }\n  <span class="hljs-keyword">return</span> <span class="hljs-string">`<span class="hljs-subst">${v}</span><span class="hljs-subst">${key}</span>`</span>\n}\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data() {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">v1</span>:<span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">visible1</span>: <span class="hljs-literal">false</span>,\n    }\n  },\n  <span class="hljs-attr">methods</span>: {\n    handleChange1(key) {\n      <span class="hljs-keyword">if</span> ([<span class="hljs-string">&#39;close&#39;</span>, <span class="hljs-string">&#39;ok&#39;</span>].indexOf(key) &gt; <span class="hljs-number">-1</span>) {\n        <span class="hljs-keyword">return</span>;\n      }\n      <span class="hljs-keyword">this</span>.v1 = getValue(<span class="hljs-keyword">this</span>.v1, key)\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.v1);\n    },\n  },\n};\n&lt;<span class="hljs-regexp">/script&gt;\n</span></code></pre><h3>API</h3><h4>keyboard Attributes</h4><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值／参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">type</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;number&#39;</td><td style="text-align:left;"></td><td style="text-align:left;">键盘类型，可选<code>number</code>,<code>price</code>,<code>idcard</code></td></tr></tbody></table><h4>keyboardPicker Attributes</h4><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值／参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">visible</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">是否显示, 支持.sync 修饰符 (v2.3.0+)</td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;number&#39;</td><td style="text-align:left;"></td><td style="text-align:left;">键盘类型，可选<code>number</code>,<code>price</code>,<code>idcard</code></td></tr></tbody></table><h4>keyboard &amp; keyboardPicker Events</h4><table><thead><tr><th style="text-align:left;">事件名称</th><th style="text-align:left;">说明</th><th style="text-align:left;">回调参数</th></tr></thead><tbody><tr><td style="text-align:left;">key-click</td><td style="text-align:left;">当点击键盘时触发的事件</td><td style="text-align:left;">最新点击的值</td></tr></tbody></table></div>',1);var j={data:()=>({v1:"",visible1:!1}),methods:{handleChange1(s){["close","ok"].indexOf(s)>-1||(this.v1=((s,t)=>"delete"==t?s.slice(0,-1):`${s}${t}`)(this.v1,s),console.log(this.v1))}},render:function(s,t,e,j,b,y){const g=Object(a.resolveComponent)("za-keyboard"),u=Object(a.resolveComponent)("za-button"),k=Object(a.resolveComponent)("za-cell"),v=Object(a.resolveComponent)("za-keyboard-picker");return Object(a.openBlock)(),Object(a.createBlock)("div",null,[Object(a.createVNode)("div",l,[Object(a.createVNode)("div",n,[c,Object(a.createVNode)("div",p,[Object(a.createVNode)(g,{type:"number"})])]),Object(a.createVNode)("div",o,[r,Object(a.createVNode)("div",d,[Object(a.createVNode)(k,{title:"拾取器触发"},{description:Object(a.withCtx)(()=>[Object(a.createVNode)(u,{size:"xs",onClick:t[1]||(t[1]=s=>b.visible1=!0)},{default:Object(a.withCtx)(()=>[i]),_:1})]),_:1}),Object(a.createVNode)(v,{visible:b.visible1,type:"number",onKeyClick:y.handleChange1},null,8,["visible","onKeyClick"])])])]),h])}};t.default=j},519:function(s,t,e){"use strict";e.r(t);var a=e(1);var l=e(395),n=e(101),c=e(102),p=e(103),o={components:{Container:n.a,PageHeader:c.a,PageFooter:p.a,Demo:l.default},render:function(s,t,e,l,n,c){const p=Object(a.resolveComponent)("PageHeader"),o=Object(a.resolveComponent)("Demo"),r=Object(a.resolveComponent)("PageFooter"),d=Object(a.resolveComponent)("Container");return Object(a.openBlock)(),Object(a.createBlock)(d,null,{default:Object(a.withCtx)(()=>[Object(a.createVNode)(p,{title:"虚拟键盘 Keyboard & KeyboardPicker"}),Object(a.createVNode)(o),Object(a.createVNode)(r)]),_:1})}};t.default=o}}]);