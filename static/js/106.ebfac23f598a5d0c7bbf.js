(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{578:function(s,a,t){"use strict";t.r(a);var l=t(0);const n={class:"zarm-vue-demo"},e={class:"za-panel"},p=Object(l.i)("div",{class:"za-panel__header"},[Object(l.i)("div",{class:"za-panel__title"},"基本用法 ")],-1),c={class:"za-panel__body"},h={class:"zarm-markdown-doc"},i=Object(l.i)("h2",null,"标签拦 TabBar",-1),j={class:"demo custom-block"},o=Object(l.i)("p",{class:"custom-block-title"},"基本用法",-1),g={class:"hljs"},r=Object(l.g)('<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;隐藏 | 展示&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showTabBar&quot;</span>&gt;</span>',5),b=Object(l.g)('<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-tab-bar</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">:defaultActiveKey</span>=<span class="hljs-string">&quot;1&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-tab-bar-item</span> <span class="hljs-attr">:item-key</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;首页&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:icon</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">za-icon</span> <span class="hljs-attr">tag</span>=<span class="hljs-string">&quot;symbol&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;home&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:activeIcon</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">za-icon</span> <span class="hljs-attr">tag</span>=<span class="hljs-string">&quot;symbol&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;home&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">za-tab-bar-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-tab-bar-item</span> <span class="hljs-attr">:item-key</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;保险&quot;</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:icon</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">za-badge</span> <span class="hljs-attr">sup</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;circle&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;3&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleClick&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">za-icon</span> <span class="hljs-attr">tag</span>=<span class="hljs-string">&quot;symbol&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;insurance&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-icon</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">za-badge</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:activeIcon</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">za-badge</span> <span class="hljs-attr">sup</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;circle&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;3&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleClick&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">za-icon</span> <span class="hljs-attr">tag</span>=<span class="hljs-string">&quot;symbol&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;insurance&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-icon</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">za-badge</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">za-tab-bar-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-tab-bar-item</span> <span class="hljs-attr">:item-key</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;用户&quot;</span>&gt;</span>\n     <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:icon</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">za-icon</span> <span class="hljs-attr">tag</span>=<span class="hljs-string">&quot;symbol&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;user&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-icon</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n       <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:activeIcon</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">za-icon</span> <span class="hljs-attr">tag</span>=<span class="hljs-string">&quot;symbol&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;user&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-icon</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">za-tab-bar-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-tab-bar</span>&gt;</span>\n',72),d=Object(l.g)('<h3>Vue Script</h3><pre class="hljs"><code>&lt;script name=<span class="hljs-string">&quot;vue&quot;</span>&gt;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data() {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">activeKey</span>: <span class="hljs-number">1</span>,\n      <span class="hljs-attr">visible</span>: <span class="hljs-literal">true</span>,\n    }\n  },\n  <span class="hljs-attr">methods</span>: {\n    showTabBar() {\n      <span class="hljs-keyword">this</span>.visible = !<span class="hljs-keyword">this</span>.visible;\n    },\n    handleChange(value) {\n      alert(value);\n    }\n  },\n};\n&lt;<span class="hljs-regexp">/script&gt;\n</span></code></pre><h3>API</h3><h4>TabBar</h4><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">number | string</td><td style="text-align:left;">-</td><td style="text-align:left;">当前选中项</td></tr><tr><td style="text-align:left;">defaultActiveKey</td><td style="text-align:left;">number | string</td><td style="text-align:left;">-</td><td style="text-align:left;">初始选中项, 默认第一个选中</td></tr><tr><td style="text-align:left;">visible</td><td style="text-align:left;">boolean</td><td style="text-align:left;"><code>true</code></td><td style="text-align:left;">是否显示</td></tr></tbody></table><h4>TabBarItem</h4><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">itemKey</td><td style="text-align:left;">number | string</td><td style="text-align:left;">-</td><td style="text-align:left;">唯一标识，对应<code>activeKey</code></td></tr><tr><td style="text-align:left;">title</td><td style="text-align:left;"></td><td style="text-align:left;">-</td><td style="text-align:left;">标题文字</td></tr><tr><td style="text-align:left;">icon</td><td style="text-align:left;">slot</td><td style="text-align:left;">-</td><td style="text-align:left;">图标</td></tr><tr><td style="text-align:left;">activeIcon</td><td style="text-align:left;">slot</td><td style="text-align:left;">-</td><td style="text-align:left;">选中时图标</td></tr></tbody></table><h4>TabBar Events</h4><table><thead><tr><th style="text-align:left;">事件名称</th><th style="text-align:left;">说明</th><th style="text-align:left;">回调参数</th></tr></thead><tbody><tr><td style="text-align:left;">change</td><td style="text-align:left;">点击<code>tabbarItem</code>触发的选中事件</td><td style="text-align:left;">值变化时触发的回调函数</td></tr></tbody></table>',9);var u={data:()=>({activeKey:1,visible:!0}),methods:{showTabBar(){this.visible=!this.visible},handleChange(s){alert(s)}},render:function(s,a,t,u,m,y){const q=Object(l.B)("za-button"),f=Object(l.B)("za-cell"),v=Object(l.B)("za-icon"),O=Object(l.B)("za-tab-bar-item"),x=Object(l.B)("za-badge"),z=Object(l.B)("za-tab-bar");return Object(l.t)(),Object(l.e)("div",null,[Object(l.i)("div",n,[Object(l.i)("div",e,[p,Object(l.i)("div",c,[Object(l.i)(f,{title:"隐藏 | 展示"},{description:Object(l.K)(()=>[Object(l.i)(q,{onClick:y.showTabBar},{default:Object(l.K)(()=>[Object(l.h)(Object(l.D)(m.visible?"隐藏":"展示"),1)]),_:1},8,["onClick"])]),_:1}),Object(l.i)(z,{visible:m.visible,"onUpdate:visible":a[1]||(a[1]=s=>m.visible=s),defaultActiveKey:1,onChange:y.handleChange},{default:Object(l.K)(()=>[Object(l.i)(O,{"item-key":1,title:"首页"},{icon:Object(l.K)(()=>[Object(l.i)(v,{tag:"symbol",type:"home",class:"icon"})]),activeIcon:Object(l.K)(()=>[Object(l.i)(v,{tag:"symbol",theme:"primary",type:"home",class:"icon"})]),_:1}),Object(l.i)(O,{"item-key":2,title:"保险"},{icon:Object(l.K)(()=>[Object(l.i)(x,{sup:"",shape:"circle",text:"3",onClick:s.handleClick},{default:Object(l.K)(()=>[Object(l.i)(v,{tag:"symbol",type:"insurance",class:"icon"})]),_:1},8,["onClick"])]),activeIcon:Object(l.K)(()=>[Object(l.i)(x,{sup:"",shape:"circle",text:"3",onClick:s.handleClick},{default:Object(l.K)(()=>[Object(l.i)(v,{tag:"symbol",theme:"primary",type:"insurance",class:"icon"})]),_:1},8,["onClick"])]),_:1}),Object(l.i)(O,{"item-key":3,title:"用户"},{icon:Object(l.K)(()=>[Object(l.i)(v,{tag:"symbol",type:"user",class:"icon"})]),activeIcon:Object(l.K)(()=>[Object(l.i)(v,{tag:"symbol",theme:"primary",type:"user",class:"icon"})]),_:1})]),_:1},8,["visible","onChange"])])])]),Object(l.i)("div",h,[i,Object(l.i)("div",j,[o,Object(l.i)("pre",g,[Object(l.i)("code",null,[r,Object(l.h)(Object(l.D)(m.visible?"隐藏":"展示"),1),b])])]),d])])}};a.default=u}}]);