(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{590:function(s,a,t){"use strict";t.r(a);var l=t(0);const n={class:"zarm-vue-demo"},e={class:"za-panel"},p=Object(l.i)("div",{class:"za-panel__header"},[Object(l.i)("div",{class:"za-panel__title"},"基本 ")],-1),c={class:"za-panel__body"},i=Object(l.h)("开启"),h=Object(l.h)("开启"),j=Object(l.h)("开启"),o=Object(l.h)("开启"),r=Object(l.h)("开启"),g=Object(l.h)(" 模态框内容 "),d=Object(l.i)("div",{slot:"title",style:{textAlign:"left"}},"标题",-1),b=Object(l.h)(" 模态框内容 "),u=Object(l.h)(" 遮罩层可关闭 "),m=Object(l.h)(" 无头部 "),v=Object(l.i)("div",{style:{height:"100px"}},[Object(l.h)(" 当前使用的是rotate旋转效果。"),Object(l.i)("br"),Object(l.i)("br"),Object(l.h)(" 支持多种动画效果："),Object(l.i)("br"),Object(l.h)(" zoom：缩放效果（默认）"),Object(l.i)("br"),Object(l.h)(" rotate：旋转效果"),Object(l.i)("br"),Object(l.h)(" fade：淡出淡入效果"),Object(l.i)("br"),Object(l.h)(" door：开关门效果"),Object(l.i)("br"),Object(l.h)(" flip：翻转效果"),Object(l.i)("br"),Object(l.h)(" moveUp、moveDown、moveLeft、moveRight：移出移入效果"),Object(l.i)("br"),Object(l.h)(" slideUp、slideDown、slideLeft、slideRight：滑出滑入效果"),Object(l.i)("br")],-1),q={class:"za-panel"},f=Object(l.i)("div",{class:"za-panel__header"},[Object(l.i)("div",{class:"za-panel__title"},"特定场景 ")],-1),z={class:"za-panel__body"},y=Object(l.h)("开启"),O=Object(l.h)("开启"),x={class:"za-panel"},k=Object(l.i)("div",{class:"za-panel__header"},[Object(l.i)("div",{class:"za-panel__title"},"函数调用 ")],-1),C={class:"za-panel__body"},w=Object(l.h)("开启"),_=Object(l.h)("开启"),A=Object(l.g)('<div class="zarm-markdown-doc"><h2>模态框 Modal</h2><div class="demo custom-block"><p class="custom-block-title">基本</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;span普通&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible1 = true&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  \n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;圆角&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible2 = true&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;遮罩层可关闭&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible3 = true&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  \n  \n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;无头部&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible4 = true&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  \n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;动画效果&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n     <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible5 = true&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n \n  \n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-modal</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible1&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;handleClose&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span> <span class="hljs-attr">:showClose</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n  模态框内容\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-modal</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-modal</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible2&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;handleClose&quot;</span> <span class="hljs-attr">radius</span> <span class="hljs-attr">:showClose</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;textAlign:left&quot;</span>&gt;</span>标题<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  模态框内容\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-modal</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-modal</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible3&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;handleClose&quot;</span> @<span class="hljs-attr">maskClick</span>=<span class="hljs-string">&quot;visible3 = false&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span> <span class="hljs-attr">:showClose</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n  遮罩层可关闭\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-modal</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-modal</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible4&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;handleClose&quot;</span> @<span class="hljs-attr">maskClick</span>=<span class="hljs-string">&quot;visible4 = false&quot;</span>&gt;</span>\n  无头部\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-modal</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-modal</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible5&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;handleClose&quot;</span> <span class="hljs-attr">animationType</span>=<span class="hljs-string">&quot;rotate&quot;</span> @<span class="hljs-attr">maskClick</span>=<span class="hljs-string">&quot;visible5 = false&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span> <span class="hljs-attr">:showClose</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:100px&quot;</span>&gt;</span>\n  当前使用的是rotate旋转效果。<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n  支持多种动画效果：<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n  zoom：缩放效果（默认）<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n  rotate：旋转效果<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n  fade：淡出淡入效果<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n  door：开关门效果<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n  flip：翻转效果<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n  moveUp、moveDown、moveLeft、moveRight：移出移入效果<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n  slideUp、slideDown、slideLeft、slideRight：滑出滑入效果<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-modal</span>&gt;</span>\n</code></pre></div><div class="demo custom-block"><p class="custom-block-title">特定场景</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;警告框&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible6 = true&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;确认框&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible7 = true&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-alert</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible6&quot;</span> <span class="hljs-attr">radius</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;警告&quot;</span> <span class="hljs-attr">message</span>=<span class="hljs-string">&quot;这里是警告信息&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;handleClose&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-alert</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-confirm</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible7&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;确认信息&quot;</span> <span class="hljs-attr">message</span>=<span class="hljs-string">&quot;你确定要这样做吗？&quot;</span> <span class="hljs-attr">:ok</span>=<span class="hljs-string">&quot;handleOk&quot;</span> <span class="hljs-attr">:cancel</span>=<span class="hljs-string">&quot;handleCancel&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-confirm</span>&gt;</span>\n</code></pre></div><div class="demo custom-block"><p class="custom-block-title">函数调用</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;$zaAlert&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showAlert&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;$zaConfirm&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showConfirm&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n</code></pre></div><h4>警告框 使用全局方法 $zaAlert</h4><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showAlert&quot;</span>&gt;</span>$zaAlert<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      showAlert() {\n        <span class="hljs-keyword">this</span>.$zaAlert(<span class="hljs-string">&#39;警告&#39;</span>)\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code></pre><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showAlert&quot;</span>&gt;</span>$zaAlert<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{\n  <span class="hljs-attr">methods</span>:{\n    showAlert(){\n      <span class="hljs-comment">// 这里的message可以是VNode</span>\n      <span class="hljs-keyword">const</span> message = h(<span class="hljs-string">&#39;p&#39;</span>, <span class="hljs-literal">null</span>, [\n        h(<span class="hljs-string">&#39;span&#39;</span>, <span class="hljs-literal">null</span>, <span class="hljs-string">&#39;内容可以是 &#39;</span>),\n        h(<span class="hljs-string">&#39;i&#39;</span>, { <span class="hljs-attr">style</span>: <span class="hljs-string">&#39;color: teal&#39;</span> }, <span class="hljs-string">&#39;VNode&#39;</span>)\n      ]);\n      <span class="hljs-keyword">this</span>.$zaAlert(message)\n    }\n  }\n}\n</span></code></pre><h4>或者使用 Component</h4><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-alert</span>\n  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span>\n  <span class="hljs-attr">radius</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;警告&quot;</span>\n  <span class="hljs-attr">message</span>=<span class="hljs-string">&quot;这里是警告信息&quot;</span>\n  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;handleClose&quot;</span>\n&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-alert</span>&gt;</span>\n</code></pre><h4>确认框 使用全局方法 $zaConfirm</h4><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showConfirm&quot;</span>&gt;</span>$zaConfirm<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      showConfirm() {\n        <span class="hljs-comment">// message 可以是VNode 或者 String</span>\n        <span class="hljs-keyword">const</span> message = h(<span class="hljs-string">&#39;p&#39;</span>, <span class="hljs-literal">null</span>, [\n          h(<span class="hljs-string">&#39;span&#39;</span>, <span class="hljs-literal">null</span>, <span class="hljs-string">&#39;内容可以是 &#39;</span>),\n          h(<span class="hljs-string">&#39;i&#39;</span>, { <span class="hljs-attr">style</span>: <span class="hljs-string">&#39;color: teal&#39;</span> }, <span class="hljs-string">&#39;VNode&#39;</span>)\n        ])\n        <span class="hljs-comment">// $zaConfirm 参数为 &lt;?message: String, options: Object&gt;</span>\n        <span class="hljs-keyword">this</span>.$zaConfirm({\n          message,\n          <span class="hljs-attr">ok</span>: <span class="hljs-function"><span class="hljs-params">e</span> =&gt;</span> {\n            <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span> <span class="hljs-comment">// 此处返回true, 会关闭confirm</span>\n          },\n          <span class="hljs-attr">cancel</span>: <span class="hljs-function"><span class="hljs-params">e</span> =&gt;</span> {}\n        })\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code></pre><p>注意：这里的 <code>ok</code> 和 <code>cancel</code> 需要使用 Arrow Function, 这样内部的 this 才会指向当前的 vue 实例, 另外，ok 函数只有在返回 true 的时候会关闭 Confirm, 而 cancel 会自动关闭 Confirm</p><h4>或者使用 Component</h4><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-confirm</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;确认信息&quot;</span> <span class="hljs-attr">message</span>=<span class="hljs-string">&quot;你确定吗？&quot;</span> <span class="hljs-attr">:ok</span>=<span class="hljs-string">&quot;handleOk&quot;</span> <span class="hljs-attr">:cancel</span>=<span class="hljs-string">&quot;handleCancel&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-confirm</span>&gt;</span>\n</code></pre><h3>Vue Script</h3><pre class="hljs"><code>&lt;script name=<span class="hljs-string">&quot;vue&quot;</span>&gt;\n<span class="hljs-keyword">import</span> { h } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data() {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">visible1</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">visible2</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">visible3</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">visible4</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">visible5</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">visible6</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">visible7</span>: <span class="hljs-literal">false</span>,\n    };\n  },\n  <span class="hljs-attr">methods</span>: {\n    handleClose(reason, event){\n      <span class="hljs-built_in">console</span>.log(reason, event);\n    },\n    handleOk(){\n      <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;\n    },\n    handleCancel(){\n      <span class="hljs-keyword">this</span>.visible7 = <span class="hljs-literal">false</span>;\n    },\n    showAlert() {\n      <span class="hljs-keyword">this</span>.$zaAlert(<span class="hljs-string">&#39;警告12&#39;</span>);\n    },\n    showConfirm() {\n      <span class="hljs-keyword">this</span>.$zaConfirm(<span class="hljs-string">&#39;警告12&#39;</span>,{\n        <span class="hljs-attr">ok</span>: <span class="hljs-function"><span class="hljs-params">e</span> =&gt;</span> {\n          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;confirm is closed&#39;</span>);\n          <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span> <span class="hljs-comment">// 此处返回true, 会关闭confirm</span>\n        },\n        <span class="hljs-attr">cancel</span>: <span class="hljs-function"><span class="hljs-params">e</span> =&gt;</span> {}\n      });\n    }\n  },\n};\n&lt;<span class="hljs-regexp">/script&gt;\n</span></code></pre><h3>API</h3><h4>Modal Attributes</h4><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值／参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">shape</td><td style="text-align:left;">string</td><td style="text-align:left;">无</td><td style="text-align:left;">&#39;radius&#39;</td><td style="text-align:left;">形状</td></tr><tr><td style="text-align:left;">visible</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">是否显示, 支持.sync 修饰符</td></tr><tr><td style="text-align:left;">ok-text</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;确定&#39;</td><td style="text-align:left;"></td><td style="text-align:left;">确认按钮文案</td></tr><tr><td style="text-align:left;">cancel-text</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;关闭&#39;</td><td style="text-align:left;"></td><td style="text-align:left;">取消按钮文案</td></tr><tr><td style="text-align:left;">animation-type</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;fade&#39;</td><td style="text-align:left;">&#39;fade&#39;, &#39;door&#39;, &#39;flip&#39;, &#39;rotate&#39;, &#39;zoom&#39;,&#39;moveUp&#39;, &#39;moveDown&#39;, &#39;moveLeft&#39;, &#39;moveRight&#39;,&#39;slideUp&#39;, &#39;slideDown&#39;, &#39;slideLeft&#39;, &#39;slideRight&#39;</td><td style="text-align:left;">动画效果</td></tr><tr><td style="text-align:left;">animationDuration</td><td style="text-align:left;">number</td><td style="text-align:left;">200</td><td style="text-align:left;"></td><td style="text-align:left;">动画执行时间</td></tr><tr><td style="text-align:left;">width</td><td style="text-align:left;">string, number</td><td style="text-align:left;">&#39;70%&#39;</td><td style="text-align:left;"></td><td style="text-align:left;">宽度</td></tr><tr><td style="text-align:left;">get-container</td><td style="text-align:left;">Func</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">指定挂载的父容器 DOM 节点</td></tr></tbody></table><h4>Modal Events</h4><table><thead><tr><th style="text-align:left;">事件名称</th><th style="text-align:left;">说明</th><th style="text-align:left;">回调参数</th></tr></thead><tbody><tr><td style="text-align:left;">close</td><td style="text-align:left;">modal 关闭时触发的事件</td><td style="text-align:left;">reason, event 事件对象</td></tr><tr><td style="text-align:left;">mask-click</td><td style="text-align:left;">点击遮罩后触发的事件</td><td style="text-align:left;">event 事件对象</td></tr></tbody></table><h4>Alert Events</h4><table><thead><tr><th style="text-align:left;">事件名称</th><th style="text-align:left;">说明</th><th style="text-align:left;">回调参数</th></tr></thead><tbody><tr><td style="text-align:left;">close</td><td style="text-align:left;">alert 关闭时触发的事件</td><td style="text-align:left;">event 事件对象</td></tr></tbody></table><h4>Confirm Events</h4><table><thead><tr><th style="text-align:left;">事件名称</th><th style="text-align:left;">说明</th><th style="text-align:left;">回调参数</th></tr></thead><tbody><tr><td style="text-align:left;">ok</td><td style="text-align:left;">confirm 确定时触发的事件</td><td style="text-align:left;">event 事件对象</td></tr><tr><td style="text-align:left;">cancel</td><td style="text-align:left;">confirm 取消时触发的事件</td><td style="text-align:left;">event 事件对象</td></tr></tbody></table></div>',1);var K={data:()=>({visible1:!1,visible2:!1,visible3:!1,visible4:!1,visible5:!1,visible6:!1,visible7:!1}),methods:{handleClose(s,a){console.log(s,a)},handleOk:()=>!0,handleCancel(){this.visible7=!1},showAlert(){this.$zaAlert("警告12")},showConfirm(){this.$zaConfirm("警告12",{ok:s=>(console.log("confirm is closed"),!0),cancel:s=>{}})}},render:function(s,a,t,K,$,U){const D=Object(l.B)("za-button"),M=Object(l.B)("za-cell"),L=Object(l.B)("za-modal"),R=Object(l.B)("za-alert"),B=Object(l.B)("za-confirm");return Object(l.t)(),Object(l.e)("div",null,[Object(l.i)("div",n,[Object(l.i)("div",e,[p,Object(l.i)("div",c,[Object(l.i)(M,{title:"span普通"},{description:Object(l.K)(()=>[Object(l.i)(D,{size:"xs",onClick:a[1]||(a[1]=s=>$.visible1=!0)},{default:Object(l.K)(()=>[i]),_:1})]),_:1}),Object(l.i)(M,{title:"圆角"},{description:Object(l.K)(()=>[Object(l.i)(D,{size:"xs",onClick:a[2]||(a[2]=s=>$.visible2=!0)},{default:Object(l.K)(()=>[h]),_:1})]),_:1}),Object(l.i)(M,{title:"遮罩层可关闭"},{description:Object(l.K)(()=>[Object(l.i)(D,{size:"xs",onClick:a[3]||(a[3]=s=>$.visible3=!0)},{default:Object(l.K)(()=>[j]),_:1})]),_:1}),Object(l.i)(M,{title:"无头部"},{description:Object(l.K)(()=>[Object(l.i)(D,{size:"xs",onClick:a[4]||(a[4]=s=>$.visible4=!0)},{default:Object(l.K)(()=>[o]),_:1})]),_:1}),Object(l.i)(M,{title:"动画效果"},{description:Object(l.K)(()=>[Object(l.i)(D,{size:"xs",onClick:a[5]||(a[5]=s=>$.visible5=!0)},{default:Object(l.K)(()=>[r]),_:1})]),_:1}),Object(l.i)(L,{visible:$.visible1,"onUpdate:visible":a[6]||(a[6]=s=>$.visible1=s),onClose:U.handleClose,title:"标题",showClose:!0},{default:Object(l.K)(()=>[g]),_:1},8,["visible","onClose"]),Object(l.i)(L,{visible:$.visible2,"onUpdate:visible":a[7]||(a[7]=s=>$.visible2=s),onClose:U.handleClose,radius:"",showClose:!0},{default:Object(l.K)(()=>[d,b]),_:1},8,["visible","onClose"]),Object(l.i)(L,{visible:$.visible3,"onUpdate:visible":a[8]||(a[8]=s=>$.visible3=s),onClose:U.handleClose,onMaskClick:a[9]||(a[9]=s=>$.visible3=!1),title:"标题",showClose:!0},{default:Object(l.K)(()=>[u]),_:1},8,["visible","onClose"]),Object(l.i)(L,{visible:$.visible4,"onUpdate:visible":a[10]||(a[10]=s=>$.visible4=s),onClose:U.handleClose,onMaskClick:a[11]||(a[11]=s=>$.visible4=!1)},{default:Object(l.K)(()=>[m]),_:1},8,["visible","onClose"]),Object(l.i)(L,{visible:$.visible5,"onUpdate:visible":a[12]||(a[12]=s=>$.visible5=s),onClose:U.handleClose,animationType:"rotate",onMaskClick:a[13]||(a[13]=s=>$.visible5=!1),title:"标题",showClose:!0},{default:Object(l.K)(()=>[v]),_:1},8,["visible","onClose"])])]),Object(l.i)("div",q,[f,Object(l.i)("div",z,[Object(l.i)(M,{title:"警告框"},{description:Object(l.K)(()=>[Object(l.i)(D,{size:"xs",onClick:a[14]||(a[14]=s=>$.visible6=!0),theme:"warning"},{default:Object(l.K)(()=>[y]),_:1})]),_:1}),Object(l.i)(M,{title:"确认框"},{description:Object(l.K)(()=>[Object(l.i)(D,{size:"xs",onClick:a[15]||(a[15]=s=>$.visible7=!0),theme:"warning"},{default:Object(l.K)(()=>[O]),_:1})]),_:1}),Object(l.i)(R,{visible:$.visible6,"onUpdate:visible":a[16]||(a[16]=s=>$.visible6=s),radius:"",title:"警告",message:"这里是警告信息",onClose:U.handleClose},null,8,["visible","onClose"]),Object(l.i)(B,{visible:$.visible7,"onUpdate:visible":a[17]||(a[17]=s=>$.visible7=s),title:"确认信息",message:"你确定要这样做吗？",ok:U.handleOk,cancel:U.handleCancel},null,8,["visible","ok","cancel"])])]),Object(l.i)("div",x,[k,Object(l.i)("div",C,[Object(l.i)(M,{title:"$zaAlert"},{description:Object(l.K)(()=>[Object(l.i)(D,{size:"xs",onClick:U.showAlert},{default:Object(l.K)(()=>[w]),_:1},8,["onClick"])]),_:1}),Object(l.i)(M,{title:"$zaConfirm"},{description:Object(l.K)(()=>[Object(l.i)(D,{size:"xs",onClick:U.showConfirm},{default:Object(l.K)(()=>[_]),_:1},8,["onClick"])]),_:1})])])]),A])}};a.default=K}}]);