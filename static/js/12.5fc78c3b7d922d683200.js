(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{547:function(s,t,a){"use strict";a.r(t);const l=(s,t)=>"delete"==t?s.slice(0,-1):`${s}${t}`;var e={data:()=>({visible1:!1,visible2:!1,visible3:!1,v1:"",data1:[{value:"number",label:"数字"},{value:"price",label:"金额"},{value:"idcard",label:"证件"}]}),methods:{handleOk(s){const t=this;switch(s.value){case"number":t.visible1=!0;break;case"price":t.visible2=!0;break;case"idcard":t.visible3=!0}},handleCancel(s){this.v1=""},handleChange1(s){["close","ok"].indexOf(s)>-1||(this.v1=l(this.v1,s),console.log(this.v1))},handleChange2(s){["close","ok"].indexOf(s)>-1||(this.v2=l(this.v2,s),console.log(this.v2))},handleChange3(s){["close","ok"].indexOf(s)>-1||(this.v3=l(this.v3,s),console.log(this.v3))}}},v=a(6),i=Object(v.a)(e,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[s._m(0),s._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-keyboard",{attrs:{type:"number"}})],1)]),s._v(" "),a("div",{staticClass:"za-panel"},[s._m(1),s._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-cell",{attrs:{title:"键盘类型"}},[a("za-select",{attrs:{"data-source":s.data1},on:{ok:s.handleOk,cancel:s.handleCancel},model:{value:s.v1,callback:function(t){s.v1=t},expression:"v1"}})],1),s._v(" "),a("za-keyboard-picker",{attrs:{visible:s.visible1,type:"number"},on:{"update:visible":function(t){s.visible1=t},keyClick:s.handleChange1}}),s._v(" "),a("za-keyboard-picker",{attrs:{visible:s.visible2,type:"price"},on:{"update:visible":function(t){s.visible2=t},keyClick:s.handleChange2}}),s._v(" "),a("za-keyboard-picker",{attrs:{visible:s.visible3,type:"idcard"},on:{"update:visible":function(t){s.visible3=t},keyClick:s.handleChange3}})],1)])]),s._m(2)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel__header"},[t("div",{staticClass:"za-panel__title"},[this._v("平铺键盘 Keyboard\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel__header"},[t("div",{staticClass:"za-panel__title"},[this._v("键盘触发器 KeyboardPicker\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"zarm-markdown-doc"},[a("h2",[s._v("虚拟键盘 Keyboard & KeyboardPicker")]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("平铺键盘 Keyboard")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-keyboard")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"number"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-keyboard")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("键盘触发器 KeyboardPicker")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"键盘类型"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-select")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"v1"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":data-source")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"data1"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("ok")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleOk"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("cancel")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleCancel"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-select")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-keyboard-picker")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":visible.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible1"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"number"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("keyClick")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleChange1"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-keyboard-picker")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-keyboard-picker")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":visible.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible2"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"price"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("keyClick")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleChange2"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-keyboard-picker")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-keyboard-picker")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":visible.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible3"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"idcard"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("keyClick")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleChange3"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-keyboard-picker")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("h3",[s._v("Vue Script")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("<script name="),a("span",{staticClass:"hljs-string"},[s._v('"vue"')]),s._v(">\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" getValue = "),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("v, key")]),s._v(") =>")]),s._v(" {\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (key == "),a("span",{staticClass:"hljs-string"},[s._v("'delete'")]),s._v(") {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" v.slice("),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(", "),a("span",{staticClass:"hljs-number"},[s._v("-1")]),s._v(")\n  }\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("`"),a("span",{staticClass:"hljs-subst"},[s._v("${v}")]),a("span",{staticClass:"hljs-subst"},[s._v("${key}")]),s._v("`")]),s._v("\n}\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("visible1")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("visible2")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("visible3")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("v1")]),s._v(":"),a("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("data1")]),s._v(": [\n        { "),a("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'number'")]),s._v(", "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'数字'")]),s._v(" },\n        { "),a("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'price'")]),s._v(", "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'金额'")]),s._v(" },\n        { "),a("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'idcard'")]),s._v(", "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'证件'")]),s._v(" },\n      ]\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    handleOk(v) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" self = "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(";\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("switch")]),s._v("(v.value) {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("case")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'number'")]),s._v(": self.visible1 = "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(";"),a("span",{staticClass:"hljs-keyword"},[s._v("break")]),s._v(";\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("case")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'price'")]),s._v(": self.visible2 = "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(";"),a("span",{staticClass:"hljs-keyword"},[s._v("break")]),s._v(";\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("case")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'idcard'")]),s._v(": self.visible3 = "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(";"),a("span",{staticClass:"hljs-keyword"},[s._v("break")]),s._v(";\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(":"),a("span",{staticClass:"hljs-keyword"},[s._v("break")]),s._v(";\n      }\n    },\n    handleCancel(v) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".v1 = "),a("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(";\n    },\n    handleChange1(key) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (["),a("span",{staticClass:"hljs-string"},[s._v("'close'")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'ok'")]),s._v("].indexOf(key) > "),a("span",{staticClass:"hljs-number"},[s._v("-1")]),s._v(") {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(";\n      }\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".v1 = getValue("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".v1, key)\n      "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".v1);\n    },\n    handleChange2(key) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (["),a("span",{staticClass:"hljs-string"},[s._v("'close'")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'ok'")]),s._v("].indexOf(key) > "),a("span",{staticClass:"hljs-number"},[s._v("-1")]),s._v(") {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(";\n      }\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".v2 = getValue("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".v2, key)\n      "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".v2);\n    },\n    handleChange3(key) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (["),a("span",{staticClass:"hljs-string"},[s._v("'close'")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'ok'")]),s._v("].indexOf(key) > "),a("span",{staticClass:"hljs-number"},[s._v("-1")]),s._v(") {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(";\n      }\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".v3 = getValue("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".v3, key)\n      "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".v3);\n    },\n  },\n};\n"),a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")])]),s._v("\n")])]),s._v(" "),a("h3",[s._v("API")]),s._v(" "),a("h4",[s._v("keyboard Attributes")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("属性")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("类型")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("默认值")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("可选值／参数")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("prefixCls")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("za-keyboard")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("类名前缀")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("type")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'number'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("键盘类型，可选"),a("code",[s._v("number")]),s._v(","),a("code",[s._v("price")]),s._v(","),a("code",[s._v("idcard")])])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("className")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("追加类名")])])])]),s._v(" "),a("h4",[s._v("keyboardPicker Attributes")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("属性")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("类型")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("默认值")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("可选值／参数")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("visible")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("bool")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("false")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("是否显示, 支持.sync修饰符 (v2.3.0+)")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("type")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'number'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("键盘类型，可选"),a("code",[s._v("number")]),s._v(","),a("code",[s._v("price")]),s._v(","),a("code",[s._v("idcard")])])])])]),s._v(" "),a("h4",[s._v("keyboard & keyboardPicker Events")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("事件名称")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("回调参数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("keyClick")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("当点击键盘时触发的事件")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("最新点击的值")])])])])])}],!1,null,null,null);t.default=i.exports},669:function(s,t,a){"use strict";a.r(t);var l=a(547),e=a(152),v=a(150),i=a(151),n={components:{Container:e.a,PageHeader:v.a,PageFooter:i.a,Demo:l.default}},_=a(6),c=Object(_.a)(n,function(){var s=this.$createElement,t=this._self._c||s;return t("Container",[t("PageHeader",{attrs:{title:"虚拟键盘 Keyboard & KeyboardPicker"}}),this._v(" "),t("Demo"),this._v(" "),t("PageFooter")],1)},[],!1,null,null,null);t.default=c.exports}}]);