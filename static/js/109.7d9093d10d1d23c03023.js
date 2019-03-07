(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{530:function(s,a,t){"use strict";t.r(a);const l={en_US:{SearchBar:{placeholder:"Search",cancelText:"Cancel"},Alert:{cancelText:"Cancel"},Confirm:{okText:"Ok",cancelText:"Cancel"}},zh_CN:{SearchBar:{placeholder:"请输入搜索词...",cancelText:"关闭"},Alert:{cancelText:"知道了"},Confirm:{okText:"确定",cancelText:"关闭"}}};var n={data:()=>({visible6:!1,visible7:!1,locale:l,lang:"zh_CN",v1:"zh_CN",langData:[{value:"zh_CN",label:"中文"},{value:"en_US",label:"英文"}]}),watch:{lang(){this.$forceUpdate()}},methods:{handleOk(s){console.log(s),this.lang=s.value},handleOk2(){this.visible7=!1},handleCancel(){this.visible7=!1}}},v=t(6),_=Object(v.a)(n,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[t("div",{staticClass:"zarm-vue-demo"},[t("div",{staticClass:"za-panel"},[s._m(0),s._v(" "),t("div",{staticClass:"za-panel__body"},[t("za-locale-provider",{attrs:{lang:"zh_CN"}},[t("za-search-bar",{ref:"searchRef",attrs:{shape:"round",showCancel:!0}})],1)],1)]),s._v(" "),t("div",{staticClass:"za-panel"},[s._m(1),s._v(" "),t("div",{staticClass:"za-panel__body"},[t("za-cell",{attrs:{title:"切换语言包"}},[t("za-select",{attrs:{"data-source":s.langData},on:{ok:s.handleOk},model:{value:s.v1,callback:function(a){s.v1=a},expression:"v1"}})],1),s._v(" "),t("za-locale-provider",{attrs:{lang:s.lang,locale:s.locale}},[t("za-search-bar",{ref:"searchRef",attrs:{shape:"round",showCancel:!0}}),s._v(" "),t("za-cell",[t("za-button",{attrs:{slot:"description",size:"xs",theme:"warning"},on:{click:function(a){s.visible6=!0}},slot:"description"},[s._v("开启")]),s._v("\n    警告框 Alert\n    ")],1),s._v(" "),t("za-cell",[t("za-button",{attrs:{slot:"description",size:"xs",theme:"warning"},on:{click:function(a){s.visible7=!0}},slot:"description"},[s._v("开启")]),s._v("\n      确认框 Confirm\n    ")],1),s._v(" "),t("za-alert",{attrs:{visible:s.visible6,radius:"",title:"警告",message:"这里是警告信息"},on:{"update:visible":function(a){s.visible6=a}}}),s._v(" "),t("za-confirm",{attrs:{visible:s.visible7,title:"确认信息",message:"你确定要这样做吗？",ok:s.handleOk2,cancel:s.handleCancel},on:{"update:visible":function(a){s.visible7=a}}})],1)],1)])]),s._m(2)])},[function(){var s=this.$createElement,a=this._self._c||s;return a("div",{staticClass:"za-panel__header"},[a("div",{staticClass:"za-panel__title"},[this._v("默认语言包\n")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("div",{staticClass:"za-panel__header"},[a("div",{staticClass:"za-panel__title"},[this._v("自定义语言包\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"zarm-markdown-doc"},[t("h2",[s._v("国际化 LocaleProvider")]),s._v(" "),t("div",{staticClass:"demo custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("默认语言包")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v("  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("za-locale-provider")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("lang")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"zh_CN"')]),s._v(">")]),s._v("\n     "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("za-search-bar")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("shape")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"round"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":showCancel")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"true"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("ref")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"searchRef"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("za-search-bar")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("za-locale-provider")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("div",{staticClass:"demo custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("自定义语言包")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v("  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"切换语言包"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("za-select")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"v1"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":data-source")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"langData"')]),s._v(" @"),t("span",{staticClass:"hljs-attr"},[s._v("ok")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"handleOk"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("za-select")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n  \n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("za-locale-provider")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":lang")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"lang"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":locale")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"locale"')]),s._v(">")]),s._v("\n     "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("za-search-bar")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("shape")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"round"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":showCancel")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"true"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("ref")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"searchRef"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("za-search-bar")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"xs"')]),s._v(" @"),t("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"visible6 = true"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("theme")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"warning"')]),s._v(">")]),s._v("开启"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n    警告框 Alert\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"xs"')]),s._v(" @"),t("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"visible7 = true"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("theme")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"warning"')]),s._v(">")]),s._v("开启"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n      确认框 Confirm\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("za-alert")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":visible.sync")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"visible6"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("radius")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('""')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"警告"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("message")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"这里是警告信息"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("za-alert")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("za-confirm")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":visible.sync")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"visible7"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"确认信息"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("message")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"你确定要这样做吗？"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":ok")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"handleOk2"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":cancel")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"handleCancel"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("za-confirm")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("za-locale-provider")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("h3",[s._v("Vue Script")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v("<script name="),t("span",{staticClass:"hljs-string"},[s._v('"vue"')]),s._v(">\n"),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" Locale = {\n  "),t("span",{staticClass:"hljs-string"},[s._v("'en_US'")]),s._v(": {\n    "),t("span",{staticClass:"hljs-attr"},[s._v("SearchBar")]),s._v(": {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("placeholder")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'Search'")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("cancelText")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'Cancel'")]),s._v(",\n    },\n    "),t("span",{staticClass:"hljs-attr"},[s._v("Alert")]),s._v(": {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("cancelText")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'Cancel'")]),s._v(",\n    },\n    "),t("span",{staticClass:"hljs-attr"},[s._v("Confirm")]),s._v(": {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("okText")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'Ok'")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("cancelText")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'Cancel'")]),s._v(",\n    }\n  },\n  "),t("span",{staticClass:"hljs-string"},[s._v("'zh_CN'")]),s._v(": {\n    "),t("span",{staticClass:"hljs-attr"},[s._v("SearchBar")]),s._v(": {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("placeholder")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'请输入搜索词...'")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("cancelText")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'关闭'")]),s._v(",\n    },\n    "),t("span",{staticClass:"hljs-attr"},[s._v("Alert")]),s._v(": {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("cancelText")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'知道了'")]),s._v(",\n    },\n    "),t("span",{staticClass:"hljs-attr"},[s._v("Confirm")]),s._v(": {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("okText")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'确定'")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("cancelText")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'关闭'")]),s._v(",\n    }\n  }\n}\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data() {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("visible6")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("visible7")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("locale")]),s._v(": Locale,\n      "),t("span",{staticClass:"hljs-attr"},[s._v("lang")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'zh_CN'")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("v1")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'zh_CN'")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("langData")]),s._v(":[\n        { "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'zh_CN'")]),s._v(", "),t("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'中文'")]),s._v(" },\n        { "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'en_US'")]),s._v(", "),t("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'英文'")]),s._v(" },\n      ]\n    }\n  },\n  "),t("span",{staticClass:"hljs-attr"},[s._v("watch")]),s._v(": {\n    lang() {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$forceUpdate();\n    },\n  },\n  "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    handleOk(val){\n      "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(val);\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".lang = val.value;\n    },\n    handleOk2(){\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".visible7 = "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n    },\n    handleCancel(){\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".visible7 = "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n    }\n  },\n};\n"),t("span",{staticClass:"xml"},[t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")])]),s._v("\n")])]),s._v(" "),t("h2",[s._v("API")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[s._v("属性")]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("类型")]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("默认值")]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("locale")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("Object")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("-")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("语言包配置")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("lang")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("String")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("-")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("设置语言包类型，对应locale的key值")])])])])])}],!1,null,null,null);a.default=_.exports},657:function(s,a,t){var l={"./2.0.0/localeProvider.md":530};function n(s){var a=v(s);return t(a)}function v(s){var a=l[s];if(!(a+1)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return a}n.keys=function(){return Object.keys(l)},n.resolve=v,s.exports=n,n.id=657}}]);