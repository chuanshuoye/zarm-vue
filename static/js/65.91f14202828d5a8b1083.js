(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{662:function(s,t,a){"use strict";a.r(t);var l={data:()=>({visible1:!1,visible2:!1,visible3:!1,visible4:!1,isLoading:!1}),methods:{toastClose(s,t){console.log(s,t)}}},i=a(0),v=Object(i.a)(l,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[s._m(0),s._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-cell",[a("za-button",{attrs:{slot:"description",size:"xs",theme:"error"},on:{click:function(t){s.visible1=!0}},slot:"description"},[s._v("开启")]),s._v("\n  错误提示\n")],1),s._v(" "),a("za-cell",[a("za-button",{attrs:{slot:"description",size:"xs",theme:"success"},on:{click:function(t){s.visible2=!0}},slot:"description"},[s._v("开启")]),s._v("\n  成功提示\n")],1),s._v(" "),a("za-cell",[a("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(t){s.visible3=!0}},slot:"description"},[s._v("开启")]),s._v("\n  指定关闭时间\n")],1),s._v(" "),a("za-toast",{attrs:{visible:s.visible1},on:{"update:visible":function(t){s.visible1=t},close:s.toastClose}},[s._v("默认3秒自动关闭")]),s._v(" "),a("za-toast",{attrs:{visible:s.visible2},on:{"update:visible":function(t){s.visible2=t},close:s.toastClose,maskClick:function(t){s.visible2=!1}}},[a("div",{staticClass:"box"},[a("za-icon",{staticClass:"box-icon",attrs:{type:"right-round-fill"}}),s._v(" "),a("div",{staticClass:"box-text"},[s._v("预约成功")])],1)]),s._v(" "),a("za-toast",{attrs:{visible:s.visible3,duration:1e4},on:{"update:visible":function(t){s.visible3=t},close:s.toastClose}},[s._v("指定10秒自动关闭")])],1)]),s._v(" "),a("div",{staticClass:"za-panel"},[s._m(1),s._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-cell",[a("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(t){s.visible4=!0}},slot:"description"},[s._v("开启")]),s._v("\n  Loading\n")],1),s._v(" "),a("za-loading",{attrs:{visible:s.visible4},on:{"update:visible":function(t){s.visible4=t}}})],1)])]),s._m(2)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel__header"},[t("div",{staticClass:"za-panel__title"},[this._v("提示信息\n\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel__header"},[t("div",{staticClass:"za-panel__title"},[this._v("加载中\n\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"zarm-markdown-doc"},[a("h2",[s._v("轻提示 Toast")]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("提示信息")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"xs"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("theme")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"error"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible1 = true"')]),s._v(">")]),s._v("开启"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n  错误提示\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"xs"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("theme")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"success"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible2 = true"')]),s._v(">")]),s._v("开启"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n  成功提示\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"xs"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible3 = true"')]),s._v(">")]),s._v("开启"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n  指定关闭时间\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-toast")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":visible.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible1"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("close")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"toastClose"')]),s._v(">")]),s._v("默认3秒自动关闭"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-toast")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-toast")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":visible.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible2"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("close")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"toastClose"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("maskClick")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible2 = false"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"box"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-icon")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"right-round-fill"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"box-icon"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-icon")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"box-text"')]),s._v(">")]),s._v("预约成功"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-toast")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-toast")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":visible.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible3"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("close")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"toastClose"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":duration")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"10000"')]),s._v(">")]),s._v("指定10秒自动关闭"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-toast")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("加载中")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"xs"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible4 = true"')]),s._v(">")]),s._v("开启"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n  Loading\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-loading")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":visible.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible4"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-loading")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("p",[a("code",[s._v("zarm-vue 为 Vue.prototype 上添加了全局方法：$zaToast 因此在 vue instance 内可以采用 this.$zaToast(messgae, options) 或 this.$zaToast(options) 的方式调用")]),s._v("。")]),s._v(" "),a("h4",[s._v("普通")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n      show() {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$zaToast("),a("span",{staticClass:"hljs-string"},[s._v("'this is toast'")]),s._v(")\n      }\n    }\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("h4",[s._v("指定停留时间")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n      show() {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$zaToast("),a("span",{staticClass:"hljs-string"},[s._v("'toast last for 5 sec'")]),s._v(", {\n          "),a("span",{staticClass:"hljs-attr"},[s._v("duration")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("5000")]),s._v("\n        })\n      }\n    }\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("h3",[s._v("Vue Script")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("<script name="),a("span",{staticClass:"hljs-string"},[s._v('"vue"')]),s._v(">\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("visible1")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("visible2")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("visible3")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("visible4")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("isLoading")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    toastClose(reason, event){\n      "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(reason, event);\n    }\n  },\n};\n"),a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")])]),s._v("\n")])]),s._v(" "),a("h3",[s._v("API")]),s._v(" "),a("h4",[s._v("Toast Attributes")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("属性")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("类型")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("默认值")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("可选值／参数")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("visible")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("boolean")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("false")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("是否显示, 支持.sync 修饰符 (v2.3.0+)")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("duration")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("number")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("3000")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("自动关闭前停留的时间（单位：毫秒）")])])])]),s._v(" "),a("h4",[s._v("Toast Event")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("事件名称")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("回调参数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("close")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("toast 关闭时触发")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("关闭时触发的回调函数")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("mask-click")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("点击遮罩后触发的事件")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("event 事件对象")])])])])])}],!1,null,null,null);t.default=v.exports},700:function(s,t,a){},816:function(s,t,a){"use strict";a.r(t);var l=a(662),i=a(305),v=a(306),n=a(304),_=(a(700),{components:{Container:i.a,PageHeader:v.a,PageFooter:n.a,Demo:l.default}}),e=a(0),c=Object(e.a)(_,function(){var s=this.$createElement,t=this._self._c||s;return t("Container",{staticClass:"toast-page"},[t("PageHeader",{attrs:{title:"轻提示 Toast"}}),this._v(" "),t("Demo"),this._v(" "),t("PageFooter")],1)},[],!1,null,null,null);t.default=c.exports}}]);