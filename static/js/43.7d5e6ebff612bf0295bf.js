(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{529:function(t,s,a){"use strict";a.r(s);var l={data:()=>({value:""}),methods:{handleClick(){this.$refs.searchRef.focus()},handleChange(t){this.value=t},handleSubmit(t){console.log(`搜索内容为${t}`)},handleChange(t){console.log(`搜索内容为${t}`)},handleFocus(){console.log("获取焦点")},handleBlur(){console.log("失去焦点")},handleClear(){console.log("点击了清除")},handleCancel(){console.log("点击了取消")}}},e=a(6),n=Object(e.a)(l,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[t._m(0),t._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-search-bar",{attrs:{showCancel:!1},on:{change:t.handleChange,submit:t.handleSubmit,blur:t.handleBlur,focus:t.handleFocus,clear:t.handleClear,cancel:t.handleCancel}})],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(1),t._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-search-bar",{attrs:{shape:"round",showCancel:!0,value:"默认搜索关键字"}})],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(2),t._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-search-bar",{ref:"searchRef",attrs:{shape:"round",showCancel:!0}}),t._v(" "),a("za-cell",[a("za-button",{attrs:{theme:"primary",size:"xs",shape:"radius"},on:{click:t.handleClick}},[t._v("点击获取焦点")])],1)],1)])]),t._m(3)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel__header"},[s("div",{staticClass:"za-panel__title"},[this._v("基本\n\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel__header"},[s("div",{staticClass:"za-panel__title"},[this._v("始终展示取消按钮\n\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel__header"},[s("div",{staticClass:"za-panel__title"},[this._v("点击获取焦点\n\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"zarm-markdown-doc"},[a("h2",[t._v("搜索框 SearchBar")]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("基本")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-search-bar")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":showCancel")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"false"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChange"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("submit")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleSubmit"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("blur")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleBlur"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("focus")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleFocus"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("clear")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleClear"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("cancel")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleCancel"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-search-bar")]),t._v(">")]),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("始终展示取消按钮")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-search-bar")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("shape")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"round"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":showCancel")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("value")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"默认搜索关键字"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-search-bar")]),t._v(">")]),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("点击获取焦点")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-search-bar")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("shape")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"round"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":showCancel")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("ref")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"searchRef"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-search-bar")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("theme")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"primary"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"xs"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("shape")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"radius"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleClick"')]),t._v(">")]),t._v("点击获取焦点"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-button")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n")])])]),t._v(" "),a("h3",[t._v("Vue Script")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("<script name="),a("span",{staticClass:"hljs-string"},[t._v('"vue"')]),t._v(">\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data() {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("value")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v('""')]),t._v(",\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    handleClick(){\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".$refs.searchRef.focus();\n    },\n    handleChange(val){\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".value = val\n    },\n    handleSubmit(val){\n      "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),a("span",{staticClass:"hljs-string"},[t._v("`搜索内容为"),a("span",{staticClass:"hljs-subst"},[t._v("${val}")]),t._v("`")]),t._v(");\n    },\n    handleChange(val){\n      "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),a("span",{staticClass:"hljs-string"},[t._v("`搜索内容为"),a("span",{staticClass:"hljs-subst"},[t._v("${val}")]),t._v("`")]),t._v(");\n    },\n    handleFocus(){\n      "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),a("span",{staticClass:"hljs-string"},[t._v("'获取焦点'")]),t._v(");\n    },\n    handleBlur(){\n      "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),a("span",{staticClass:"hljs-string"},[t._v("'失去焦点'")]),t._v(");\n    },\n    handleClear(){\n      "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),a("span",{staticClass:"hljs-string"},[t._v("'点击了清除'")]),t._v(");\n    },\n    handleCancel(){\n      "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),a("span",{staticClass:"hljs-string"},[t._v("'点击了取消'")]),t._v(");\n    }\n  },\n};\n"),a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")])]),t._v("\n")])]),t._v(" "),a("h3",[t._v("API")]),t._v(" "),a("h4",[t._v("SearchBar Attributes")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("placeholder")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("text")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("placeholder")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("default-value")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("初始值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string, number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("搜索关键字")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("shape")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("radius")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("形状，"),a("code",[t._v("round")]),t._v(","),a("code",[t._v("radius")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("cancel-text")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'取消'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("取消文本")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("show-cancel")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示取消操作")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("clearable")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否可以清除操作")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("max-length")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入字数上限")])])])]),t._v(" "),a("h4",[t._v("SearchBar Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("change")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当绑定值变化时触发的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最新的值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("focus")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当获取焦点时触发的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("blur")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当失去焦点时触发的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("clear")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当绑定值被清除时触发的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最新的值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("cancel")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当取消操作时触发的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("submit")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当绑定值变化时触发的 Form 搜索事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最新的值")])])])])])}],!1,null,null,null);s.default=n.exports},723:function(t,s,a){"use strict";a.r(s);var l=a(529),e=a(152),n=a(150),i=a(151),v={components:{Container:e.a,PageHeader:n.a,PageFooter:i.a,Demo:l.default}},_=a(6),c=Object(_.a)(v,function(){var t=this.$createElement,s=this._self._c||t;return s("Container",{staticClass:"noticebar-page"},[s("PageHeader",{attrs:{title:"搜索框 SearchBar"}}),this._v(" "),s("Demo"),this._v(" "),s("PageFooter")],1)},[],!1,null,null,null);s.default=c.exports}}]);