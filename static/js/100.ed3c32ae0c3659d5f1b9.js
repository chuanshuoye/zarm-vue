(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{398:function(s,a,t){"use strict";t.r(a);var l=t(1);const n={class:"zarm-vue-demo"},e={class:"za-panel"},p=Object(l.createVNode)("div",{class:"za-panel__header"},[Object(l.createVNode)("div",{class:"za-panel__title"},"基本 ")],-1),c={class:"za-panel__body"},i=Object(l.createTextVNode)("开启"),o=Object(l.createTextVNode)("开启"),h=Object(l.createTextVNode)("开启"),j=Object(l.createTextVNode)("开启"),r=Object(l.createTextVNode)("开启"),d={class:"popup-box",style:{height:"100%",padding:"20px 20px 100px",background:"#fff"}},g=Object(l.createTextVNode)("关闭弹层"),b=Object(l.createTextVNode)("二次弹窗"),u={class:"popup-box-left",style:{width:"160px",height:"100%",padding:"20px 20px 100px",background:"#fff"}},x=Object(l.createTextVNode)("关闭弹层"),m={class:"popup-box",style:{width:"160px",height:"100%",padding:"20px 20px 100px",background:"#fff"}},v=Object(l.createTextVNode)("关闭弹层"),f={class:"popup-box",style:{width:"160px",height:"160px",padding:"20px",background:"#fff",display:"flex","justify-content":"center","align-items":"center"}},q=Object(l.createTextVNode)("关闭弹层"),z={class:"za-panel"},y=Object(l.createVNode)("div",{class:"za-panel__header"},[Object(l.createVNode)("div",{class:"za-panel__title"},"设置挂载容器 ")],-1),O={class:"za-panel__body"},k=Object(l.createTextVNode)("开启"),V={class:"popup-box",style:{height:"100%",padding:"20px 20px 100px",background:"#fff"}},N=Object(l.createTextVNode)("设置挂载容器"),w=Object(l.createStaticVNode)('<div class="zarm-markdown-doc"><h2>弹出框 Popup</h2><div class="demo custom-block"><p class="custom-block-title">基本</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;从上方弹出&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible1 = true&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;从下方弹出&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible2 = true&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;从左侧弹出&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible3 = true&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;从右侧弹出&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible4 = true&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;从中间弹出&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible5 = true&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-popup</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;zIndex:2000&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible1&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;top&quot;</span> <span class="hljs-attr">maskType</span>=<span class="hljs-string">&quot;transparent&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;popup-box-top&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 100%;padding: 10px;background: rgba(0,0,0,.7);color: #fff;font-size: 14px;text-align: center;&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible1 = false&quot;</span>&gt;</span>\n    更新成功，点击关闭弹层\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-popup</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-popup</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible2&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;popup-box&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 100%;padding: 20px 20px 100px;background: #fff;&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible2 = false&quot;</span>&gt;</span>关闭弹层<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showAlert&quot;</span>&gt;</span>二次弹窗<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-popup</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-popup</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible3&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;popup-box-left&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width:160px;height: 100%;padding: 20px 20px 100px;background: #fff;&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible3 = false&quot;</span>&gt;</span>关闭弹层<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-popup</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-popup</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible4&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;popup-box&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width:160px;height: 100%;padding: 20px 20px 100px;background: #fff;&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible4 = false&quot;</span>&gt;</span>关闭弹层<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-popup</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-popup</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible5&quot;</span> <span class="hljs-attr">animation-type</span>=<span class="hljs-string">&quot;zoom&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;center&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;popup-box&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width:160px;height: 160px;padding: 20px;background: #fff;display: flex;justify-content: center;align-items: center;&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible5 = false&quot;</span>&gt;</span>关闭弹层<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-popup</span>&gt;</span>\n</code></pre></div><div class="demo custom-block"><p class="custom-block-title">设置挂载容器</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;从下方弹出&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible6 = true&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  \n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-popup</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible6&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">:get-container</span>=<span class="hljs-string">&quot;getContainer&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;popup-box&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 100%;padding: 20px 20px 100px;background: #fff;&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible6 = false&quot;</span>&gt;</span>设置挂载容器<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-popup</span>&gt;</span>\n</code></pre></div><h3>Vue Script</h3><pre class="hljs"><code>&lt;script name=<span class="hljs-string">&quot;vue&quot;</span>&gt;\n<span class="hljs-keyword">const</span> div1 = <span class="hljs-built_in">document</span>.body;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data() {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">visible1</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">visible2</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">visible3</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">visible4</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">visible5</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">visible6</span>: <span class="hljs-literal">false</span>,\n    }\n  },\n  <span class="hljs-attr">methods</span>: {\n    showAlert() {\n      <span class="hljs-keyword">this</span>.$zaAlert(<span class="hljs-string">&#39;二次弹窗&#39;</span>);\n    },\n    <span class="hljs-attr">getContainer</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> div1,\n  },\n};\n&lt;<span class="hljs-regexp">/script&gt;\n</span></code></pre><h3>API</h3><h4>Popup Attributes</h4><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值／参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">visible</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">是否显示, 支持.sync 修饰符</td></tr><tr><td style="text-align:left;">direction</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;center&#39;</td><td style="text-align:left;">&#39;top&#39;, &#39;bottom&#39;, &#39;left&#39;, &#39;right&#39;, &#39;center&#39;</td><td style="text-align:left;">弹出方向</td></tr><tr><td style="text-align:left;">get-container</td><td style="text-align:left;">func</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">自定义挂载 Dom 节点</td></tr><tr><td style="text-align:left;">animation-type</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;fade&#39;</td><td style="text-align:left;">&#39;fade&#39;, &#39;door&#39;, &#39;flip&#39;, &#39;rotate&#39;, &#39;zoom&#39;, &#39;moveUp&#39;, &#39;moveDown&#39;, &#39;moveLeft&#39;, &#39;moveRight&#39;, &#39;slideUp&#39;, &#39;slideDown&#39;, &#39;slideLeft&#39;, &#39;slideRight&#39;</td><td style="text-align:left;">动画类型（仅在 direction 为 center 时生效）</td></tr><tr><td style="text-align:left;">animation-duration</td><td style="text-align:left;">number</td><td style="text-align:left;">200</td><td style="text-align:left;"></td><td style="text-align:left;">动画执行时间</td></tr><tr><td style="text-align:left;">has-mask</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">是否包含遮罩</td></tr><tr><td style="text-align:left;">mask-type</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;normal&#39;</td><td style="text-align:left;">&#39;transparent&#39;, &#39;normal&#39;</td><td style="text-align:left;">遮罩层的类型</td></tr></tbody></table><h4>Popup Events</h4><table><thead><tr><th style="text-align:left;">事件名称</th><th style="text-align:left;">说明</th><th style="text-align:left;">回调参数</th></tr></thead><tbody><tr><td style="text-align:left;">mask-click</td><td style="text-align:left;">点击遮罩后触发的事件</td><td style="text-align:left;">event 事件对象</td></tr></tbody></table></div>',1);const C=document.body;var _={data:()=>({visible1:!1,visible2:!1,visible3:!1,visible4:!1,visible5:!1,visible6:!1}),methods:{showAlert(){this.$zaAlert("二次弹窗")},getContainer:()=>C},render:function(s,a,t,C,_,T){const A=Object(l.resolveComponent)("za-button"),U=Object(l.resolveComponent)("za-cell"),P=Object(l.resolveComponent)("za-popup");return Object(l.openBlock)(),Object(l.createBlock)("div",null,[Object(l.createVNode)("div",n,[Object(l.createVNode)("div",e,[p,Object(l.createVNode)("div",c,[Object(l.createVNode)(U,{title:"从上方弹出"},{description:Object(l.withCtx)(()=>[Object(l.createVNode)(A,{size:"xs",onClick:a[1]||(a[1]=s=>_.visible1=!0)},{default:Object(l.withCtx)(()=>[i]),_:1})]),_:1}),Object(l.createVNode)(U,{title:"从下方弹出"},{description:Object(l.withCtx)(()=>[Object(l.createVNode)(A,{size:"xs",onClick:a[2]||(a[2]=s=>_.visible2=!0)},{default:Object(l.withCtx)(()=>[o]),_:1})]),_:1}),Object(l.createVNode)(U,{title:"从左侧弹出"},{description:Object(l.withCtx)(()=>[Object(l.createVNode)(A,{size:"xs",onClick:a[3]||(a[3]=s=>_.visible3=!0)},{default:Object(l.withCtx)(()=>[h]),_:1})]),_:1}),Object(l.createVNode)(U,{title:"从右侧弹出"},{description:Object(l.withCtx)(()=>[Object(l.createVNode)(A,{size:"xs",onClick:a[4]||(a[4]=s=>_.visible4=!0)},{default:Object(l.withCtx)(()=>[j]),_:1})]),_:1}),Object(l.createVNode)(U,{title:"从中间弹出"},{description:Object(l.withCtx)(()=>[Object(l.createVNode)(A,{size:"xs",onClick:a[5]||(a[5]=s=>_.visible5=!0)},{default:Object(l.withCtx)(()=>[r]),_:1})]),_:1}),Object(l.createVNode)(P,{style:{zIndex:"2000"},visible:_.visible1,"onUpdate:visible":a[7]||(a[7]=s=>_.visible1=s),direction:"top",maskType:"transparent"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)("div",{class:"popup-box-top",style:{width:"100%",padding:"10px",background:"rgba(0,0,0,.7)",color:"#fff","font-size":"14px","text-align":"center"},onClick:a[6]||(a[6]=s=>_.visible1=!1)}," 更新成功，点击关闭弹层 ")]),_:1},8,["visible"]),Object(l.createVNode)(P,{visible:_.visible2,"onUpdate:visible":a[9]||(a[9]=s=>_.visible2=s),direction:"bottom"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)("div",d,[Object(l.createVNode)(A,{size:"sm",onClick:a[8]||(a[8]=s=>_.visible2=!1)},{default:Object(l.withCtx)(()=>[g]),_:1}),Object(l.createVNode)(A,{size:"sm",onClick:T.showAlert},{default:Object(l.withCtx)(()=>[b]),_:1},8,["onClick"])])]),_:1},8,["visible"]),Object(l.createVNode)(P,{visible:_.visible3,"onUpdate:visible":a[11]||(a[11]=s=>_.visible3=s),direction:"left"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)("div",u,[Object(l.createVNode)(A,{size:"sm",onClick:a[10]||(a[10]=s=>_.visible3=!1)},{default:Object(l.withCtx)(()=>[x]),_:1})])]),_:1},8,["visible"]),Object(l.createVNode)(P,{visible:_.visible4,"onUpdate:visible":a[13]||(a[13]=s=>_.visible4=s),direction:"right"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)("div",m,[Object(l.createVNode)(A,{size:"sm",onClick:a[12]||(a[12]=s=>_.visible4=!1)},{default:Object(l.withCtx)(()=>[v]),_:1})])]),_:1},8,["visible"]),Object(l.createVNode)(P,{visible:_.visible5,"onUpdate:visible":a[15]||(a[15]=s=>_.visible5=s),"animation-type":"zoom",direction:"center"},{default:Object(l.withCtx)(()=>[Object(l.createVNode)("div",f,[Object(l.createVNode)(A,{size:"sm",onClick:a[14]||(a[14]=s=>_.visible5=!1)},{default:Object(l.withCtx)(()=>[q]),_:1})])]),_:1},8,["visible"])])]),Object(l.createVNode)("div",z,[y,Object(l.createVNode)("div",O,[Object(l.createVNode)(U,{title:"从下方弹出"},{description:Object(l.withCtx)(()=>[Object(l.createVNode)(A,{size:"xs",onClick:a[16]||(a[16]=s=>_.visible6=!0)},{default:Object(l.withCtx)(()=>[k]),_:1})]),_:1}),Object(l.createVNode)(P,{visible:_.visible6,"onUpdate:visible":a[18]||(a[18]=s=>_.visible6=s),direction:"bottom","get-container":T.getContainer},{default:Object(l.withCtx)(()=>[Object(l.createVNode)("div",V,[Object(l.createVNode)(A,{size:"sm",onClick:a[17]||(a[17]=s=>_.visible6=!1)},{default:Object(l.withCtx)(()=>[N]),_:1})])]),_:1},8,["visible","get-container"])])])]),w])}};a.default=_}}]);