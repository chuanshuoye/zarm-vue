(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{420:function(s,a,l){"use strict";l.r(a);var n=l(1);const t={class:"zarm-vue-demo"},e={class:"za-panel"},p=Object(n.createVNode)("div",{class:"za-panel__header"},[Object(n.createVNode)("div",{class:"za-panel__title"},"语言包 ")],-1),c={class:"za-panel__body"},h=Object(n.createTextVNode)("开启"),r=Object(n.createTextVNode)("开启"),o=Object(n.createStaticVNode)('<div class="zarm-markdown-doc"><h2>国际化 LocaleProvider</h2><div class="demo custom-block"><p class="custom-block-title">语言包</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;切换语言包&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-select</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;v1&quot;</span> <span class="hljs-attr">:data-source</span>=<span class="hljs-string">&quot;langData&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;handleOk&quot;</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-select</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-locale-provider</span> <span class="hljs-attr">:lang</span>=<span class="hljs-string">&quot;lang&quot;</span> <span class="hljs-attr">:locale</span>=<span class="hljs-string">&quot;locale&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-search-bar</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span> <span class="hljs-attr">:showCancel</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;searchRef&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-search-bar</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;警告框&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible6 = true&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;确认框&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible7 = true&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-alert</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible6&quot;</span> <span class="hljs-attr">radius</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;警告&quot;</span> <span class="hljs-attr">message</span>=<span class="hljs-string">&quot;这里是警告信息&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;handleCancel&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-alert</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-confirm</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible7&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;确认信息&quot;</span> <span class="hljs-attr">message</span>=<span class="hljs-string">&quot;你确定要这样做吗？&quot;</span> <span class="hljs-attr">:ok</span>=<span class="hljs-string">&quot;handleOk2&quot;</span> <span class="hljs-attr">:cancel</span>=<span class="hljs-string">&quot;handleCancel&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-confirm</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-locale-provider</span>&gt;</span>\n</code></pre></div><h3>Vue Script</h3><pre class="hljs"><code>&lt;script name=<span class="hljs-string">&quot;vue&quot;</span>&gt;\n<span class="hljs-keyword">const</span> localeConfig = {\n  <span class="hljs-string">&#39;en_US&#39;</span>: {\n    <span class="hljs-attr">SearchBar</span>: {\n      <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;Search&#39;</span>,\n      <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#39;Cancel&#39;</span>,\n    },\n    <span class="hljs-attr">Alert</span>: {\n      <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#39;Cancel&#39;</span>,\n    },\n    <span class="hljs-attr">Confirm</span>: {\n      <span class="hljs-attr">okText</span>: <span class="hljs-string">&#39;Ok&#39;</span>,\n      <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#39;Cancel&#39;</span>,\n    }\n  },\n  <span class="hljs-string">&#39;zh_CN&#39;</span>: {\n    <span class="hljs-attr">SearchBar</span>: {\n      <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;请输入搜索词...&#39;</span>,\n      <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#39;关闭&#39;</span>,\n    },\n    <span class="hljs-attr">Alert</span>: {\n      <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#39;知道了&#39;</span>,\n    },\n    <span class="hljs-attr">Confirm</span>: {\n      <span class="hljs-attr">okText</span>: <span class="hljs-string">&#39;确定&#39;</span>,\n      <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#39;关闭&#39;</span>,\n    }\n  }\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data() {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">visible6</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">visible7</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">locale</span>: localeConfig[<span class="hljs-string">&#39;zh_CN&#39;</span>],\n      <span class="hljs-attr">lang</span>: <span class="hljs-string">&#39;zh_CN&#39;</span>,\n      <span class="hljs-attr">v1</span>: <span class="hljs-string">&#39;zh_CN&#39;</span>,\n      <span class="hljs-attr">langData</span>:[\n        { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;zh_CN&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;中文&#39;</span> },\n        { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;en_US&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;英文&#39;</span> },\n      ]\n    }\n  },\n  <span class="hljs-comment">// watch: {</span>\n  <span class="hljs-comment">//   lang() {</span>\n  <span class="hljs-comment">//     this.$forceUpdate();</span>\n  <span class="hljs-comment">//   },</span>\n  <span class="hljs-comment">// },</span>\n  <span class="hljs-attr">methods</span>: {\n    handleOk(val){\n      <span class="hljs-keyword">this</span>.lang = val.value;\n      <span class="hljs-keyword">this</span>.locale = localeConfig[val.value];\n    },\n    handleOk2(){\n      <span class="hljs-keyword">this</span>.visible7 = <span class="hljs-literal">false</span>\n    },\n    handleCancel(){\n      <span class="hljs-keyword">this</span>.visible7 = <span class="hljs-literal">false</span>\n    }\n  },\n};\n&lt;<span class="hljs-regexp">/script&gt;\n</span></code></pre><h2>API</h2><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">locale</td><td style="text-align:left;">Object</td><td style="text-align:left;">-</td><td style="text-align:left;">语言包配置</td></tr><tr><td style="text-align:left;">lang</td><td style="text-align:left;">String</td><td style="text-align:left;">-</td><td style="text-align:left;">设置语言包类型，对应 locale 的 key 值</td></tr></tbody></table></div>',1);const j={en_US:{SearchBar:{placeholder:"Search",cancelText:"Cancel"},Alert:{cancelText:"Cancel"},Confirm:{okText:"Ok",cancelText:"Cancel"}},zh_CN:{SearchBar:{placeholder:"请输入搜索词...",cancelText:"关闭"},Alert:{cancelText:"知道了"},Confirm:{okText:"确定",cancelText:"关闭"}}};var i={data:()=>({visible6:!1,visible7:!1,locale:j.zh_CN,lang:"zh_CN",v1:"zh_CN",langData:[{value:"zh_CN",label:"中文"},{value:"en_US",label:"英文"}]}),methods:{handleOk(s){this.lang=s.value,this.locale=j[s.value]},handleOk2(){this.visible7=!1},handleCancel(){this.visible7=!1}},render:function(s,a,l,j,i,g){const d=Object(n.resolveComponent)("za-select"),u=Object(n.resolveComponent)("za-cell"),b=Object(n.resolveComponent)("za-search-bar"),m=Object(n.resolveComponent)("za-button"),v=Object(n.resolveComponent)("za-alert"),q=Object(n.resolveComponent)("za-confirm"),C=Object(n.resolveComponent)("za-locale-provider");return Object(n.openBlock)(),Object(n.createBlock)("div",null,[Object(n.createVNode)("div",t,[Object(n.createVNode)("div",e,[p,Object(n.createVNode)("div",c,[Object(n.createVNode)(u,{title:"切换语言包"},{default:Object(n.withCtx)(()=>[Object(n.createVNode)(d,{modelValue:i.v1,"onUpdate:modelValue":a[1]||(a[1]=s=>i.v1=s),"data-source":i.langData,onOk:g.handleOk},null,8,["modelValue","data-source","onOk"])]),_:1}),Object(n.createVNode)(C,{lang:i.lang,locale:i.locale},{default:Object(n.withCtx)(()=>[Object(n.createVNode)(b,{shape:"round",showCancel:!0,ref:"searchRef"},null,512),Object(n.createVNode)(u,{title:"警告框"},{description:Object(n.withCtx)(()=>[Object(n.createVNode)(m,{size:"xs",onClick:a[2]||(a[2]=s=>i.visible6=!0),theme:"warning"},{default:Object(n.withCtx)(()=>[h]),_:1})]),_:1}),Object(n.createVNode)(u,{title:"确认框"},{description:Object(n.withCtx)(()=>[Object(n.createVNode)(m,{size:"xs",onClick:a[3]||(a[3]=s=>i.visible7=!0),theme:"warning"},{default:Object(n.withCtx)(()=>[r]),_:1})]),_:1}),Object(n.createVNode)(v,{visible:i.visible6,"onUpdate:visible":a[4]||(a[4]=s=>i.visible6=s),radius:"",title:"警告",message:"这里是警告信息",onClose:g.handleCancel},null,8,["visible","onClose"]),Object(n.createVNode)(q,{visible:i.visible7,"onUpdate:visible":a[5]||(a[5]=s=>i.visible7=s),title:"确认信息",message:"你确定要这样做吗？",ok:g.handleOk2,cancel:g.handleCancel},null,8,["visible","ok","cancel"])]),_:1},8,["lang","locale"])])])]),o])}};a.default=i}}]);