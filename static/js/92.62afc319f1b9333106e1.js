(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{579:function(s,a,l){"use strict";l.r(a);var n=l(0);const t={class:"zarm-vue-demo"},e={class:"za-panel"},p=Object(n.i)("div",{class:"za-panel__header"},[Object(n.i)("div",{class:"za-panel__title"},"默认语言包 ")],-1),c={class:"za-panel__body"},h={class:"za-panel"},r=Object(n.i)("div",{class:"za-panel__header"},[Object(n.i)("div",{class:"za-panel__title"},"自定义语言包 ")],-1),j={class:"za-panel__body"},i=Object(n.h)("开启"),o=Object(n.h)("开启"),g=Object(n.g)('<div class="zarm-markdown-doc"><h2>国际化 LocaleProvider</h2><div class="demo custom-block"><p class="custom-block-title">默认语言包</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-locale-provider</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;zh_CN&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-search-bar</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span> <span class="hljs-attr">:showCancel</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;searchRef&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-search-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-locale-provider</span>&gt;</span>\n</code></pre></div><div class="demo custom-block"><p class="custom-block-title">自定义语言包</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;切换语言包&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-select</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;v1&quot;</span> <span class="hljs-attr">:data-source</span>=<span class="hljs-string">&quot;langData&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;handleOk&quot;</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-select</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-locale-provider</span> <span class="hljs-attr">:lang</span>=<span class="hljs-string">&quot;lang&quot;</span> <span class="hljs-attr">:locale</span>=<span class="hljs-string">&quot;locale&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-search-bar</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span> <span class="hljs-attr">:showCancel</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;searchRef&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-search-bar</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;警告框&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible6 = true&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;确认框&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible7 = true&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-alert</span> <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">&quot;visible6&quot;</span> <span class="hljs-attr">radius</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;警告&quot;</span> <span class="hljs-attr">message</span>=<span class="hljs-string">&quot;这里是警告信息&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-alert</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-confirm</span> <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">&quot;visible7&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;确认信息&quot;</span> <span class="hljs-attr">message</span>=<span class="hljs-string">&quot;你确定要这样做吗？&quot;</span> <span class="hljs-attr">:ok</span>=<span class="hljs-string">&quot;handleOk2&quot;</span> <span class="hljs-attr">:cancel</span>=<span class="hljs-string">&quot;handleCancel&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-confirm</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-locale-provider</span>&gt;</span>\n</code></pre></div><h3>Vue Script</h3><pre class="hljs"><code>&lt;script name=<span class="hljs-string">&quot;vue&quot;</span>&gt;\n<span class="hljs-keyword">const</span> Locale = {\n  <span class="hljs-string">&#39;en_US&#39;</span>: {\n    <span class="hljs-attr">SearchBar</span>: {\n      <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;Search&#39;</span>,\n      <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#39;Cancel&#39;</span>,\n    },\n    <span class="hljs-attr">Alert</span>: {\n      <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#39;Cancel&#39;</span>,\n    },\n    <span class="hljs-attr">Confirm</span>: {\n      <span class="hljs-attr">okText</span>: <span class="hljs-string">&#39;Ok&#39;</span>,\n      <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#39;Cancel&#39;</span>,\n    }\n  },\n  <span class="hljs-string">&#39;zh_CN&#39;</span>: {\n    <span class="hljs-attr">SearchBar</span>: {\n      <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#39;请输入搜索词...&#39;</span>,\n      <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#39;关闭&#39;</span>,\n    },\n    <span class="hljs-attr">Alert</span>: {\n      <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#39;知道了&#39;</span>,\n    },\n    <span class="hljs-attr">Confirm</span>: {\n      <span class="hljs-attr">okText</span>: <span class="hljs-string">&#39;确定&#39;</span>,\n      <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#39;关闭&#39;</span>,\n    }\n  }\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data() {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">visible6</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">visible7</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">locale</span>: Locale,\n      <span class="hljs-attr">lang</span>: <span class="hljs-string">&#39;zh_CN&#39;</span>,\n      <span class="hljs-attr">v1</span>: <span class="hljs-string">&#39;zh_CN&#39;</span>,\n      <span class="hljs-attr">langData</span>:[\n        { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;zh_CN&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;中文&#39;</span> },\n        { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;en_US&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;英文&#39;</span> },\n      ]\n    }\n  },\n  <span class="hljs-attr">watch</span>: {\n    lang() {\n      <span class="hljs-keyword">this</span>.$forceUpdate();\n    },\n  },\n  <span class="hljs-attr">methods</span>: {\n    handleOk(val){\n      <span class="hljs-built_in">console</span>.log(val);\n      <span class="hljs-keyword">this</span>.lang = val.value;\n    },\n    handleOk2(){\n      <span class="hljs-keyword">this</span>.visible7 = <span class="hljs-literal">false</span>\n    },\n    handleCancel(){\n      <span class="hljs-keyword">this</span>.visible7 = <span class="hljs-literal">false</span>\n    }\n  },\n};\n&lt;<span class="hljs-regexp">/script&gt;\n</span></code></pre><h2>API</h2><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">locale</td><td style="text-align:left;">Object</td><td style="text-align:left;">-</td><td style="text-align:left;">语言包配置</td></tr><tr><td style="text-align:left;">lang</td><td style="text-align:left;">String</td><td style="text-align:left;">-</td><td style="text-align:left;">设置语言包类型，对应 locale 的 key 值</td></tr></tbody></table></div>',1);const d={en_US:{SearchBar:{placeholder:"Search",cancelText:"Cancel"},Alert:{cancelText:"Cancel"},Confirm:{okText:"Ok",cancelText:"Cancel"}},zh_CN:{SearchBar:{placeholder:"请输入搜索词...",cancelText:"关闭"},Alert:{cancelText:"知道了"},Confirm:{okText:"确定",cancelText:"关闭"}}};var u={data:()=>({visible6:!1,visible7:!1,locale:d,lang:"zh_CN",v1:"zh_CN",langData:[{value:"zh_CN",label:"中文"},{value:"en_US",label:"英文"}]}),watch:{lang(){this.$forceUpdate()}},methods:{handleOk(s){console.log(s),this.lang=s.value},handleOk2(){this.visible7=!1},handleCancel(){this.visible7=!1}},render:function(s,a,l,d,u,b){const v=Object(n.B)("za-search-bar"),m=Object(n.B)("za-locale-provider"),q=Object(n.B)("za-select"),z=Object(n.B)("za-cell"),O=Object(n.B)("za-button"),f=Object(n.B)("za-alert"),k=Object(n.B)("za-confirm");return Object(n.t)(),Object(n.e)("div",null,[Object(n.i)("div",t,[Object(n.i)("div",e,[p,Object(n.i)("div",c,[Object(n.i)(m,{lang:"zh_CN"},{default:Object(n.K)(()=>[Object(n.i)(v,{shape:"round",showCancel:!0,ref:"searchRef"},null,512)]),_:1})])]),Object(n.i)("div",h,[r,Object(n.i)("div",j,[Object(n.i)(z,{title:"切换语言包"},{default:Object(n.K)(()=>[Object(n.i)(q,{modelValue:u.v1,"onUpdate:modelValue":a[1]||(a[1]=s=>u.v1=s),"data-source":u.langData,onOk:b.handleOk},null,8,["modelValue","data-source","onOk"])]),_:1}),Object(n.i)(m,{lang:u.lang,locale:u.locale},{default:Object(n.K)(()=>[Object(n.i)(v,{shape:"round",showCancel:!0,ref:"searchRef"},null,512),Object(n.i)(z,{title:"警告框"},{description:Object(n.K)(()=>[Object(n.i)(O,{size:"xs",onClick:a[2]||(a[2]=s=>u.visible6=!0),theme:"warning"},{default:Object(n.K)(()=>[i]),_:1})]),_:1}),Object(n.i)(z,{title:"确认框"},{description:Object(n.K)(()=>[Object(n.i)(O,{size:"xs",onClick:a[3]||(a[3]=s=>u.visible7=!0),theme:"warning"},{default:Object(n.K)(()=>[o]),_:1})]),_:1}),Object(n.i)(f,{visible:u.visible6,radius:"",title:"警告",message:"这里是警告信息"},null,8,["visible"]),Object(n.i)(k,{visible:u.visible7,title:"确认信息",message:"你确定要这样做吗？",ok:b.handleOk2,cancel:b.handleCancel},null,8,["visible","ok","cancel"])]),_:1},8,["lang","locale"])])])]),g])}};a.default=u}}]);