(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{415:function(s,a,t){"use strict";t.r(a);var l=t(1);const n={class:"zarm-vue-demo"},e={class:"za-panel"},p=Object(l.createVNode)("div",{class:"za-panel__header"},[Object(l.createVNode)("div",{class:"za-panel__title"},"普通列表项 ")],-1),c={class:"za-panel__body"},h={class:"za-panel"},j=Object(l.createVNode)("div",{class:"za-panel__header"},[Object(l.createVNode)("div",{class:"za-panel__title"},"带描述的列表项 ")],-1),i={class:"za-panel__body"},o={class:"za-panel"},g=Object(l.createVNode)("div",{class:"za-panel__header"},[Object(l.createVNode)("div",{class:"za-panel__title"},"带图标、描述的列表项 ")],-1),r={class:"za-panel__body"},d=Object(l.createVNode)("div",null,"描述文字",-1),m=Object(l.createVNode)("img",{style:{width:"24px",height:"24px"},src:"https://static.zhongan.com/website/health/zarm/images/icons/state.png",alt:""},null,-1),b=Object(l.createVNode)("div",null,"描述文字",-1),u={class:"za-panel"},v=Object(l.createVNode)("div",{class:"za-panel__header"},[Object(l.createVNode)("div",{class:"za-panel__title"},"带跳转的列表项 ")],-1),O={class:"za-panel__body"},z=Object(l.createTextVNode)("标题文字"),x=Object(l.createTextVNode)("标题文字"),q={class:"za-panel"},N=Object(l.createVNode)("div",{class:"za-panel__header"},[Object(l.createVNode)("div",{class:"za-panel__title"},"带描述、箭头、跳转的列表项 ")],-1),V={class:"za-panel__body"},y=Object(l.createVNode)("div",null,"描述文字",-1),_=Object(l.createVNode)("div",null,"描述文字",-1),w={class:"za-panel"},k=Object(l.createVNode)("div",{class:"za-panel__header"},[Object(l.createVNode)("div",{class:"za-panel__title"},"带图标、描述、箭头、跳转的列表项 ")],-1),f={class:"za-panel__body"},C=Object(l.createVNode)("div",null,"描述文字",-1),L=Object(l.createVNode)("div",null,"描述文字",-1),A=Object(l.createVNode)("img",{style:{width:"24px",height:"24px"},src:"https://static.zhongan.com/website/health/zarm/images/icons/state.png",alt:""},null,-1),B=Object(l.createVNode)("div",null,"描述文字",-1),J=Object(l.createVNode)("div",{class:"box-title"},"标题文字",-1),T=Object(l.createVNode)("div",{class:"box-description"},"描述文字",-1),I=Object(l.createVNode)("img",{style:{width:"24px",height:"24px"},src:"https://static.zhongan.com/website/health/zarm/images/icons/state.png",alt:""},null,-1),M={class:"za-panel"},P=Object(l.createVNode)("div",{class:"za-panel__header"},[Object(l.createVNode)("div",{class:"za-panel__title"},"提示信息 ")],-1),S={class:"za-panel__body"},D=Object(l.createVNode)("span",{style:{marginLeft:"5px"}},"标题不能为空",-1),E=Object(l.createStaticVNode)('<div class="zarm-markdown-doc"><h2>列表项 Cell</h2><div class="demo custom-block"><p class="custom-block-title">普通列表项</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题文字&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n</code></pre></div><div class="demo custom-block"><p class="custom-block-title">带描述的列表项</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题文字&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;描述文字&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题文字&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-icon</span> <span class="hljs-attr">stype</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n</code></pre></div><div class="demo custom-block"><p class="custom-block-title">带图标、描述的列表项</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题文字&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-icon</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>描述文字<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题文字&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width:24px;height:24px&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://static.zhongan.com/website/health/zarm/images/icons/state.png&quot;</span> <span class="hljs-attr">alt</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>描述文字<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n</code></pre></div><div class="demo custom-block"><p class="custom-block-title">带跳转的列表项</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;() =&gt; {}&quot;</span>&gt;</span>标题文字<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;() =&gt; {}&quot;</span>&gt;</span>标题文字<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n</code></pre></div><div class="demo custom-block"><p class="custom-block-title">带描述、箭头、跳转的列表项</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题文字&quot;</span> <span class="hljs-attr">has-arrow</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;() =&gt; {}&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>描述文字<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题文字&quot;</span> <span class="hljs-attr">has-arrow</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;() =&gt; {}&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>描述文字<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n</code></pre></div><div class="demo custom-block"><p class="custom-block-title">带图标、描述、箭头、跳转的列表项</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题文字&quot;</span> <span class="hljs-attr">has-arrow</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;() =&gt; {}&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>描述文字<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-icon</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题文字&quot;</span> <span class="hljs-attr">has-arrow</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;() =&gt; {}&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>描述文字<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width:24px;height:24px&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://static.zhongan.com/website/health/zarm/images/icons/state.png&quot;</span> <span class="hljs-attr">alt</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">has-arrow</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;() =&gt; {}&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>描述文字<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:title</span>&gt;</span>\n <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box-title&quot;</span>&gt;</span>标题文字<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box-description&quot;</span>&gt;</span>描述文字<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width:24px;height:24px&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://static.zhongan.com/website/health/zarm/images/icons/state.png&quot;</span> <span class="hljs-attr">alt</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n</code></pre></div><div class="demo custom-block"><p class="custom-block-title">提示信息</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:help</span>&gt;</span>\n <span class="hljs-tag">&lt;<span class="hljs-name">za-message</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-icon</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info-round&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;marginLeft: 5px&quot;</span>&gt;</span>标题不能为空<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">za-message</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入标题&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-input</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n</code></pre></div><h3>API</h3><h4>Cell Attributes</h4><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值／参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">isLink</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">是否带激活样式</td></tr><tr><td style="text-align:left;">title</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">标题</td></tr><tr><td style="text-align:left;">help</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">下方提示信息 通常配合<code>Message</code>组件使用</td></tr><tr><td style="text-align:left;">description</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">描述</td></tr><tr><td style="text-align:left;">has-arrow</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">是否显示箭头</td></tr></tbody></table></div>',1);const F={render:function(s,a,t,F,G,H){const K=Object(l.resolveComponent)("za-cell"),Q=Object(l.resolveComponent)("za-icon"),R=Object(l.resolveComponent)("za-message"),U=Object(l.resolveComponent)("za-input");return Object(l.openBlock)(),Object(l.createBlock)("div",null,[Object(l.createVNode)("div",n,[Object(l.createVNode)("div",e,[p,Object(l.createVNode)("div",c,[Object(l.createVNode)(K,{title:"标题文字"})])]),Object(l.createVNode)("div",h,[j,Object(l.createVNode)("div",i,[Object(l.createVNode)(K,{title:"标题文字",description:"描述文字"}),Object(l.createVNode)(K,{title:"标题文字"},{description:Object(l.withCtx)(()=>[Object(l.createVNode)(Q,{stype:"right"})]),_:1})])]),Object(l.createVNode)("div",o,[g,Object(l.createVNode)("div",r,[Object(l.createVNode)(K,{title:"标题文字"},{icon:Object(l.withCtx)(()=>[Object(l.createVNode)(Q,{type:"right"})]),description:Object(l.withCtx)(()=>[d]),_:1}),Object(l.createVNode)(K,{title:"标题文字"},{icon:Object(l.withCtx)(()=>[m]),description:Object(l.withCtx)(()=>[b]),_:1})])]),Object(l.createVNode)("div",u,[v,Object(l.createVNode)("div",O,[Object(l.createVNode)(K,{"is-link":"",onClick:a[1]||(a[1]=()=>{})},{default:Object(l.withCtx)(()=>[z]),_:1}),Object(l.createVNode)(K,{"is-link":"",onClick:a[2]||(a[2]=()=>{})},{default:Object(l.withCtx)(()=>[x]),_:1})])]),Object(l.createVNode)("div",q,[N,Object(l.createVNode)("div",V,[Object(l.createVNode)(K,{"is-link":"",title:"标题文字","has-arrow":"",onClick:a[3]||(a[3]=()=>{})},{description:Object(l.withCtx)(()=>[y]),_:1}),Object(l.createVNode)(K,{"is-link":"",title:"标题文字","has-arrow":"",onClick:a[4]||(a[4]=()=>{})},{description:Object(l.withCtx)(()=>[_]),_:1})])]),Object(l.createVNode)("div",w,[k,Object(l.createVNode)("div",f,[Object(l.createVNode)(K,{"is-link":"",title:"标题文字","has-arrow":"",onClick:a[5]||(a[5]=()=>{})},{description:Object(l.withCtx)(()=>[C]),icon:Object(l.withCtx)(()=>[Object(l.createVNode)(Q,{type:"right"})]),_:1}),Object(l.createVNode)(K,{"is-link":"",title:"标题文字","has-arrow":"",onClick:a[6]||(a[6]=()=>{})},{description:Object(l.withCtx)(()=>[L]),icon:Object(l.withCtx)(()=>[A]),_:1}),Object(l.createVNode)(K,{"is-link":"","has-arrow":"",onClick:a[7]||(a[7]=()=>{})},{description:Object(l.withCtx)(()=>[B]),title:Object(l.withCtx)(()=>[J,T]),icon:Object(l.withCtx)(()=>[I]),_:1})])]),Object(l.createVNode)("div",M,[P,Object(l.createVNode)("div",S,[Object(l.createVNode)(K,{title:"标题"},{help:Object(l.withCtx)(()=>[Object(l.createVNode)(R,{theme:"error"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)(Q,{type:"info-round"}),D]),_:1})]),default:Object(l.withCtx)(()=>[Object(l.createVNode)(U,{type:"text",placeholder:"请输入标题"})]),_:1})])])]),E])}};a.default=F}}]);