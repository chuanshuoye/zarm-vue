(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{650:function(t,s,a){},657:function(t,s,a){"use strict";a.r(s);var l={data:()=>({action1:[{theme:"error",text:"右按钮1",onClick:()=>console.log("右按钮1")},{theme:"success",text:"右按钮2",onClick:()=>console.log("右按钮2")}]}),methods:{handleClose(t){console.log(t)},handleOpen(t){console.log(t)}}},e=a(0),n=Object(e.a)(l,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[t._m(0),t._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-swipe-action",{attrs:{autoClose:"",right:t.action1},on:{close:t.handleClose,open:t.handleOpen}},[a("za-cell",[t._v("左滑看看（自动关闭）")])],1),t._v(" "),a("za-swipe-action",{attrs:{left:t.action1},on:{close:t.handleClose,open:t.handleOpen}},[a("za-cell",[t._v("右滑看看")])],1),t._v(" "),a("za-swipe-action",{attrs:{left:t.action1,right:t.action1},on:{close:t.handleClose,open:t.handleOpen}},[a("za-cell",[t._v("左右都能滑动")])],1)],1)])]),t._m(1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel__header"},[s("div",{staticClass:"za-panel__title"},[this._v("基本\n\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"zarm-markdown-doc"},[a("h2",[t._v("滑动操作 SwipeAction")]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("基本")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-swipe-action")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("autoClose")]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("close")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleClose"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("open")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleOpen"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":right")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"action1"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("左滑看看（自动关闭）"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-swipe-action")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-swipe-action")]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("close")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleClose"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("open")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleOpen"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":left")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"action1"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("右滑看看"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-swipe-action")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-swipe-action")]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("close")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleClose"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("open")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleOpen"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":left")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"action1"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":right")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"action1"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("左右都能滑动"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-swipe-action")]),t._v(">")]),t._v("\n")])])]),t._v(" "),a("h3",[t._v("Vue Script")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("<script name="),a("span",{staticClass:"hljs-string"},[t._v('"vue"')]),t._v(">\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data() {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("action1")]),t._v(":[\n        {\n          "),a("span",{staticClass:"hljs-attr"},[t._v("theme")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'error'")]),t._v(",\n          "),a("span",{staticClass:"hljs-attr"},[t._v("text")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'右按钮1'")]),t._v(",\n          "),a("span",{staticClass:"hljs-attr"},[t._v("onClick")]),t._v(": "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[t._v("()")]),t._v(" =>")]),t._v(" "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),a("span",{staticClass:"hljs-string"},[t._v("'右按钮1'")]),t._v("),\n        },\n        {\n          "),a("span",{staticClass:"hljs-attr"},[t._v("theme")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'success'")]),t._v(",\n          "),a("span",{staticClass:"hljs-attr"},[t._v("text")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'右按钮2'")]),t._v(",\n          "),a("span",{staticClass:"hljs-attr"},[t._v("onClick")]),t._v(": "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[t._v("()")]),t._v(" =>")]),t._v(" "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),a("span",{staticClass:"hljs-string"},[t._v("'右按钮2'")]),t._v("),\n        },\n      ]\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    handleClose(reason) {\n      "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(reason);\n    },\n    handleOpen(reason) {\n      "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(reason);\n    },\n  },\n};\n"),a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")])]),t._v("\n")])]),t._v(" "),a("h3",[t._v("API")]),t._v(" "),a("h4",[t._v("SwipeAction Attributes")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("left")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("arrayOf(object)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("[ ]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("object: { theme, text, onClick }")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("左侧按钮组")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("right")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("arrayOf(object)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("[ ]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("object: { theme, text, onClick }")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("右侧按钮组")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("auto-close")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击按钮是否自动关闭")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("offset")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("回弹偏移的距离")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("move-distance-ratio")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.5")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("移动距离比例临界点")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("move-time-span")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("300")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("移动时间跨度临界点")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("animation-duration")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("300")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("动画执行时间，单位：毫秒")])])])]),t._v(" "),a("h4",[t._v("SwipeAction Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("open")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("打开时的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("direaction, 可能值 left, right")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("close")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("关闭时的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("reason, 可能值 retract, touchaway")])])])])])}],!1,null,null,null);s.default=n.exports},810:function(t,s,a){"use strict";a.r(s);var l=a(657),e=a(305),n=a(306),i=a(304),_=(a(650),{components:{Container:e.a,PageHeader:n.a,PageFooter:i.a,Demo:l.default}}),v=a(0),c=Object(v.a)(_,function(){var t=this.$createElement,s=this._self._c||t;return s("Container",{staticClass:"swipeAction-page"},[s("PageHeader",{attrs:{title:"滑动操作 SwipeAction"}}),this._v(" "),s("Demo"),this._v(" "),s("PageFooter")],1)},[],!1,null,null,null);s.default=c.exports}}]);