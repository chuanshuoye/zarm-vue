(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{591:function(s,a,l){"use strict";l.r(a);var t=l(0);const n={class:"zarm-vue-demo"},e={class:"za-panel"},p=Object(t.i)("div",{class:"za-panel__header"},[Object(t.i)("div",{class:"za-panel__title"},"基本 ")],-1),c={class:"za-panel__body"},i=Object(t.h)("开启"),h=Object(t.h)("开启"),r=Object(t.h)("开启"),o=Object(t.h)("开启"),j={class:"za-panel"},d=Object(t.i)("div",{class:"za-panel__header"},[Object(t.i)("div",{class:"za-panel__title"},"表单选择器 ")],-1),g={class:"za-panel__body"},u={class:"za-panel"},q=Object(t.i)("div",{class:"za-panel__header"},[Object(t.i)("div",{class:"za-panel__title"},"城市选择器 ")],-1),b={class:"za-panel__body"},v={class:"za-panel"},m=Object(t.i)("div",{class:"za-panel__header"},[Object(t.i)("div",{class:"za-panel__title"},"平铺选择器 PickerView ")],-1),y={class:"za-panel__body"},f=Object(t.g)('<div class="zarm-markdown-doc"><h2>选择器 Picker &amp; Select</h2><div class="demo custom-block"><p class="custom-block-title">基本</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单列&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible1 = true&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;多列&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible2 = true&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;多列联动&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible3 = true&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;自定义格式&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:description</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;xs&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;visible4 = true&quot;</span>&gt;</span>开启<span class="hljs-tag">&lt;/<span class="hljs-name">za-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">za-picker</span> <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">&quot;visible1&quot;</span> <span class="hljs-attr">:data-source</span>=<span class="hljs-string">&quot;data1&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;handleOk1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-picker</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-picker</span> <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">&quot;visible2&quot;</span> <span class="hljs-attr">:data-source</span>=<span class="hljs-string">&quot;data2&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;handleOk&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-picker</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-picker</span> <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">&quot;visible3&quot;</span> <span class="hljs-attr">:data-source</span>=<span class="hljs-string">&quot;data3&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;handleOk&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-picker</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-picker</span> <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">&quot;visible4&quot;</span> <span class="hljs-attr">:data-source</span>=<span class="hljs-string">&quot;data4&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;handleOk2&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;自定义placeholder&quot;</span> <span class="hljs-attr">value-member</span>=<span class="hljs-string">&quot;code&quot;</span> <span class="hljs-attr">:item-render</span>=<span class="hljs-string">&quot;(item) =&gt; item.name&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-picker</span>&gt;</span>\n</code></pre></div><div class="demo custom-block"><p class="custom-block-title">表单选择器</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单项选择&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-select</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;v1&quot;</span> <span class="hljs-attr">:data-source</span>=<span class="hljs-string">&quot;data1&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;handleOk&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange&quot;</span> @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;handleCancel&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-select</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;多项选择&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-select</span> <span class="hljs-attr">:data-source</span>=<span class="hljs-string">&quot;data2&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;v2&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;handleOk&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange&quot;</span> @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;handleCancel&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-select</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n</code></pre></div><div class="demo custom-block"><p class="custom-block-title">城市选择器</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;省市选择&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-select</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;v6&quot;</span> <span class="hljs-attr">:data-source</span>=<span class="hljs-string">&quot;District&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;handleOk&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange&quot;</span> @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;handleCancel&quot;</span> <span class="hljs-attr">:cols</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-select</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">za-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;省市区选择&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">za-select</span> <span class="hljs-attr">:data-source</span>=<span class="hljs-string">&quot;District&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;v7&quot;</span> <span class="hljs-attr">:display-render</span>=<span class="hljs-string">&quot;selected =&gt; selected.map(item =&gt; item.label).join(&#39;／&#39;)&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;handleOk&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange&quot;</span> @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;handleCancel&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-select</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">za-cell</span>&gt;</span>\n</code></pre></div><div class="demo custom-block"><p class="custom-block-title">平铺选择器 PickerView</p><pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">za-picker-view</span> <span class="hljs-attr">:default-value</span>=<span class="hljs-string">&quot;v5&quot;</span> <span class="hljs-attr">:data-source</span>=<span class="hljs-string">&quot;data5&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">za-picker-view</span>&gt;</span>\n</code></pre></div><h3>Vue Script</h3><pre class="hljs"><code>&lt;script name=<span class="hljs-string">&quot;vue&quot;</span>&gt;\n<span class="hljs-keyword">const</span> District = [{\n  <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;340000&quot;</span>,\n  <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;安徽省&quot;</span>,\n  <span class="hljs-string">&quot;children&quot;</span>: [{\n    <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;340800&quot;</span>,\n    <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;安庆市&quot;</span>,\n    <span class="hljs-string">&quot;children&quot;</span>: [{\n      <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;340803&quot;</span>,\n      <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;大观区&quot;</span>,\n      <span class="hljs-string">&quot;children&quot;</span>: []\n    }, {\n      <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;340822&quot;</span>,\n      <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;怀宁县&quot;</span>,\n      <span class="hljs-string">&quot;children&quot;</span>: []\n    }, {\n      <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;340882&quot;</span>,\n      <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;其它区&quot;</span>,\n      <span class="hljs-string">&quot;children&quot;</span>: []\n    }]\n  }]\n},{\n  <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;310000&quot;</span>,\n  <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;上海&quot;</span>,\n  <span class="hljs-string">&quot;children&quot;</span>: [{\n    <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;310100&quot;</span>,\n    <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;上海市&quot;</span>,\n    <span class="hljs-string">&quot;children&quot;</span>: [{\n      <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;310113&quot;</span>,\n      <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;宝山区&quot;</span>,\n      <span class="hljs-string">&quot;children&quot;</span>: []\n    }, {\n      <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;310105&quot;</span>,\n      <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;长宁区&quot;</span>,\n      <span class="hljs-string">&quot;children&quot;</span>: []\n    }, {\n      <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;310230&quot;</span>,\n      <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;崇明县&quot;</span>,\n      <span class="hljs-string">&quot;children&quot;</span>: []\n    }, {\n      <span class="hljs-string">&quot;value&quot;</span>: <span class="hljs-string">&quot;310152&quot;</span>,\n      <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;川沙区&quot;</span>,\n      <span class="hljs-string">&quot;children&quot;</span>: []\n    }]\n  }]\n}];\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data() {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">visible1</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">visible2</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">visible3</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">visible4</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">visible6</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">visible7</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">v1</span>: [<span class="hljs-string">&#39;2&#39;</span>],\n      <span class="hljs-attr">v2</span>: [<span class="hljs-string">&#39;2&#39;</span>,<span class="hljs-string">&#39;3&#39;</span>],\n      <span class="hljs-attr">v3</span>: [<span class="hljs-string">&#39;2&#39;</span>,<span class="hljs-string">&#39;21&#39;</span>],\n      <span class="hljs-attr">v5</span>: [<span class="hljs-string">&#39;2&#39;</span>,<span class="hljs-string">&#39;22&#39;</span>],\n      <span class="hljs-attr">v6</span>: <span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">v7</span>: <span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">v10</span>: [],\n      District,\n      <span class="hljs-attr">data1</span>: [\n        { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;1&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项一&#39;</span> },\n        { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项二&#39;</span> },\n      ],\n      <span class="hljs-attr">data2</span>: [\n        [\n          { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;1&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项一&#39;</span> },\n          { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项二&#39;</span> },\n        ],\n        [\n          { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;3&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项A&#39;</span> },\n          { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;4&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;选项B&#39;</span> },\n        ],\n      ],\n      <span class="hljs-attr">data3</span>: [\n        {\n          <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;1&#39;</span>,\n          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;北京市&#39;</span>,\n          <span class="hljs-attr">children</span>: [\n            { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;11&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;海淀区&#39;</span> },\n            { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;12&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;西城区&#39;</span> },\n          ],\n        },\n        {\n          <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span>,\n          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;上海市&#39;</span>,\n          <span class="hljs-attr">children</span>: [\n            { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;21&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;杨浦区&#39;</span> },\n            { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;22&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;静安区&#39;</span> },\n          ],\n        },\n      ],\n      <span class="hljs-attr">data4</span>: [\n        {\n          <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;1&#39;</span>,\n          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;北京市&#39;</span>,\n          <span class="hljs-attr">children</span>: [\n            { <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;11&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;海淀区&#39;</span> },\n            { <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;12&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;西城区&#39;</span> },\n          ],\n        },\n        {\n          <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;2&#39;</span>,\n          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;上海市&#39;</span>,\n          <span class="hljs-attr">children</span>: [\n            { <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;21&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;黄埔区&#39;</span> },\n            { <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;22&#39;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;虹口区&#39;</span> },\n          ],\n        },\n      ],\n      <span class="hljs-attr">data5</span>: [\n        {\n          <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;1&#39;</span>,\n          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;北京市&#39;</span>,\n          <span class="hljs-attr">children</span>: [\n            { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;11&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;海淀区&#39;</span> },\n            { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;12&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;西城区&#39;</span> },\n          ],\n        },\n        {\n          <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;2&#39;</span>,\n          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;上海市&#39;</span>,\n          <span class="hljs-attr">children</span>: [\n            { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;21&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;杨浦区&#39;</span> },\n            { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;22&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;静安区&#39;</span> },\n          ],\n        },\n      ]\n    }\n  },\n  <span class="hljs-attr">methods</span>: {\n    handleOk1(v) {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;it may still scrolling when ok is clicked. so ues v-model or @change instead&#39;</span>)\n      <span class="hljs-built_in">console</span>.log(v);\n    },\n    handleOk(v) {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;it may still scrolling when ok is clicked. so ues v-model or @change instead&#39;</span>)\n      <span class="hljs-built_in">console</span>.log(v);\n    },\n    handleOk2(v) {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;it may still scrolling when ok is clicked. so ues v-model or @change instead&#39;</span>)\n      <span class="hljs-built_in">console</span>.log(v);\n    },\n    handleChange(v) {\n      <span class="hljs-built_in">console</span>.log(v);\n    },\n    handleCancel(event) {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;cancelled&#39;</span>);\n    },\n    displayGenerator(selected) {\n      <span class="hljs-keyword">return</span> selected.map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.name).join(<span class="hljs-string">&#39;/&#39;</span>)\n    }\n  },\n};\n&lt;<span class="hljs-regexp">/script&gt;\n</span></code></pre><h3>API</h3><h4>Attributes</h4><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值／参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">data-source</td><td style="text-align:left;">array</td><td style="text-align:left;">[ ]</td><td style="text-align:left;"></td><td style="text-align:left;">数据源</td></tr><tr><td style="text-align:left;">default-value</td><td style="text-align:left;">array, string</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">初始值</td></tr><tr><td style="text-align:left;">value-member</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;value&#39;</td><td style="text-align:left;"></td><td style="text-align:left;">值字段对应的 key</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">是否禁用</td></tr><tr><td style="text-align:left;">item-render</td><td style="text-align:left;">function</td><td style="text-align:left;">noop</td><td style="text-align:left;"></td><td style="text-align:left;">滚轮区域选项址值渲染</td></tr><tr><td style="text-align:left;">cols</td><td style="text-align:left;">number</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">级联选择器的级数</td></tr></tbody></table><h4>Picker &amp; Select Attributes</h4><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值／参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">title</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;请选择&#39;</td><td style="text-align:left;"></td><td style="text-align:left;">选择器标题</td></tr><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">array, string</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">绑定值</td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;请选择&#39;</td><td style="text-align:left;"></td><td style="text-align:left;">输入提示信息</td></tr><tr><td style="text-align:left;">okText</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;确定&#39;</td><td style="text-align:left;"></td><td style="text-align:left;">输入提示信息</td></tr><tr><td style="text-align:left;">cancel-text</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;取消&#39;</td><td style="text-align:left;"></td><td style="text-align:left;">输入提示信息</td></tr><tr><td style="text-align:left;">display-render</td><td style="text-align:left;">function</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">所选值的展示</td></tr><tr><td style="text-align:left;">visible</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">是否显示, 支持.sync 修饰符 (v2.3.0+)</td></tr></tbody></table><h4>Picker &amp; Select Events</h4><table><thead><tr><th style="text-align:left;">事件名称</th><th style="text-align:left;">说明</th><th style="text-align:left;">回调参数</th></tr></thead><tbody><tr><td style="text-align:left;">ok</td><td style="text-align:left;">点击确定时触发的回调函数</td><td style="text-align:left;">选中值的对象列表</td></tr><tr><td style="text-align:left;">cancel</td><td style="text-align:left;">点击取消时触发的回调函数</td><td style="text-align:left;">event 对象</td></tr><tr><td style="text-align:left;">change</td><td style="text-align:left;">滚动时值变化时触发的回调函数</td><td style="text-align:left;">选中值的对象列表</td></tr><tr><td style="text-align:left;">mask-click</td><td style="text-align:left;">点击遮罩后出发的回调函数</td><td style="text-align:left;"></td></tr></tbody></table></div>',1);const k=[{value:"340000",label:"安徽省",children:[{value:"340800",label:"安庆市",children:[{value:"340803",label:"大观区",children:[]},{value:"340822",label:"怀宁县",children:[]},{value:"340882",label:"其它区",children:[]}]}]},{value:"310000",label:"上海",children:[{value:"310100",label:"上海市",children:[{value:"310113",label:"宝山区",children:[]},{value:"310105",label:"长宁区",children:[]},{value:"310230",label:"崇明县",children:[]},{value:"310152",label:"川沙区",children:[]}]}]}];var x={data:()=>({visible1:!1,visible2:!1,visible3:!1,visible4:!1,visible6:!1,visible7:!1,v1:["2"],v2:["2","3"],v3:["2","21"],v5:["2","22"],v6:"",v7:"",v10:[],District:k,data1:[{value:"1",label:"选项一"},{value:"2",label:"选项二"}],data2:[[{value:"1",label:"选项一"},{value:"2",label:"选项二"}],[{value:"3",label:"选项A"},{value:"4",label:"选项B"}]],data3:[{value:"1",label:"北京市",children:[{value:"11",label:"海淀区"},{value:"12",label:"西城区"}]},{value:"2",label:"上海市",children:[{value:"21",label:"杨浦区"},{value:"22",label:"静安区"}]}],data4:[{code:"1",name:"北京市",children:[{code:"11",name:"海淀区"},{code:"12",name:"西城区"}]},{code:"2",name:"上海市",children:[{code:"21",name:"黄埔区"},{code:"22",name:"虹口区"}]}],data5:[{value:"1",label:"北京市",children:[{value:"11",label:"海淀区"},{value:"12",label:"西城区"}]},{value:"2",label:"上海市",children:[{value:"21",label:"杨浦区"},{value:"22",label:"静安区"}]}]}),methods:{handleOk1(s){console.log("it may still scrolling when ok is clicked. so ues v-model or @change instead"),console.log(s)},handleOk(s){console.log("it may still scrolling when ok is clicked. so ues v-model or @change instead"),console.log(s)},handleOk2(s){console.log("it may still scrolling when ok is clicked. so ues v-model or @change instead"),console.log(s)},handleChange(s){console.log(s)},handleCancel(s){console.log("cancelled")},displayGenerator:s=>s.map(s=>s.name).join("/")},render:function(s,a,l,k,x,O){const z=Object(t.B)("za-button"),C=Object(t.B)("za-cell"),_=Object(t.B)("za-picker"),w=Object(t.B)("za-select"),V=Object(t.B)("za-picker-view");return Object(t.t)(),Object(t.e)("div",null,[Object(t.i)("div",n,[Object(t.i)("div",e,[p,Object(t.i)("div",c,[Object(t.i)(C,{title:"单列"},{description:Object(t.K)(()=>[Object(t.i)(z,{size:"xs",onClick:a[1]||(a[1]=s=>x.visible1=!0)},{default:Object(t.K)(()=>[i]),_:1})]),_:1}),Object(t.i)(C,{title:"多列"},{description:Object(t.K)(()=>[Object(t.i)(z,{size:"xs",onClick:a[2]||(a[2]=s=>x.visible2=!0)},{default:Object(t.K)(()=>[h]),_:1})]),_:1}),Object(t.i)(C,{title:"多列联动"},{description:Object(t.K)(()=>[Object(t.i)(z,{size:"xs",onClick:a[3]||(a[3]=s=>x.visible3=!0)},{default:Object(t.K)(()=>[r]),_:1})]),_:1}),Object(t.i)(C,{title:"自定义格式"},{description:Object(t.K)(()=>[Object(t.i)(z,{size:"xs",onClick:a[4]||(a[4]=s=>x.visible4=!0)},{default:Object(t.K)(()=>[o]),_:1})]),_:1}),Object(t.i)(_,{visible:x.visible1,"data-source":x.data1,onOk:O.handleOk1},null,8,["visible","data-source","onOk"]),Object(t.i)(_,{visible:x.visible2,"data-source":x.data2,onOk:O.handleOk},null,8,["visible","data-source","onOk"]),Object(t.i)(_,{visible:x.visible3,"data-source":x.data3,onOk:O.handleOk},null,8,["visible","data-source","onOk"]),Object(t.i)(_,{visible:x.visible4,"data-source":x.data4,onOk:O.handleOk2,placeholder:"自定义placeholder","value-member":"code","item-render":s=>s.name},null,8,["visible","data-source","onOk","item-render"])])]),Object(t.i)("div",j,[d,Object(t.i)("div",g,[Object(t.i)(C,{title:"单项选择"},{default:Object(t.K)(()=>[Object(t.i)(w,{modelValue:x.v1,"onUpdate:modelValue":a[5]||(a[5]=s=>x.v1=s),"data-source":x.data1,onOk:O.handleOk,onChange:O.handleChange,onCancel:O.handleCancel},null,8,["modelValue","data-source","onOk","onChange","onCancel"])]),_:1}),Object(t.i)(C,{title:"多项选择"},{default:Object(t.K)(()=>[Object(t.i)(w,{"data-source":x.data2,modelValue:x.v2,"onUpdate:modelValue":a[6]||(a[6]=s=>x.v2=s),onOk:O.handleOk,onChange:O.handleChange,onCancel:O.handleCancel},null,8,["data-source","modelValue","onOk","onChange","onCancel"])]),_:1})])]),Object(t.i)("div",u,[q,Object(t.i)("div",b,[Object(t.i)(C,{title:"省市选择"},{default:Object(t.K)(()=>[Object(t.i)(w,{modelValue:x.v6,"onUpdate:modelValue":a[7]||(a[7]=s=>x.v6=s),"data-source":x.District,onOk:O.handleOk,onChange:O.handleChange,onCancel:O.handleCancel,cols:2},null,8,["modelValue","data-source","onOk","onChange","onCancel"])]),_:1}),Object(t.i)(C,{title:"省市区选择"},{default:Object(t.K)(()=>[Object(t.i)(w,{"data-source":x.District,modelValue:x.v7,"onUpdate:modelValue":a[8]||(a[8]=s=>x.v7=s),"display-render":s=>s.map(s=>s.label).join("／"),onOk:O.handleOk,onChange:O.handleChange,onCancel:O.handleCancel},null,8,["data-source","modelValue","display-render","onOk","onChange","onCancel"])]),_:1})])]),Object(t.i)("div",v,[m,Object(t.i)("div",y,[Object(t.i)(V,{"default-value":x.v5,"data-source":x.data5,onChange:O.handleChange},null,8,["default-value","data-source","onChange"])])])]),f])}};a.default=x}}]);