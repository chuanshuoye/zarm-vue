(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{691:function(t,s,a){"use strict";a.r(s);var l={data:()=>({v1:!1,city:null,index:null,cities:["上海","北京","广州","深圳"],num:["选项一","选项二","选项三","选项四"],radioGroup1:"",radioGroup2:"上海",radioGroup3:"",radioGroup4:"",radioGroup5:"",radioGroup6:"",radioGroup7:"",radioGroup8:"",radioGroup9:"上海"}),methods:{handleChange(t,s){console.log(t,s)},handleGroupChange(t,s){console.log(t,s)}}},i=a(0),n=Object(i.a)(l,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[t._m(0),t._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-cell",[a("za-radio",{on:{change:t.handleChange}},[t._v("默认")])],1),t._v(" "),a("za-cell",[a("za-radio",{attrs:{checked:""},on:{change:t.handleChange}},[t._v("默认选中")])],1),t._v(" "),a("za-cell",[a("za-radio",{attrs:{disabled:""}},[t._v("禁用")])],1),t._v(" "),a("za-cell",[a("za-radio",{attrs:{checked:"",disabled:""}},[t._v("选中且禁用")])],1)],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(1),t._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-cell",[a("za-radio-group",{attrs:{slot:"description",type:"button"},on:{change:t.handleGroupChange},slot:"description",model:{value:t.radioGroup1,callback:function(s){t.radioGroup1=s},expression:"radioGroup1"}},t._l(t.cities,function(s,l){return a("za-radio",{key:s,attrs:{value:s}},[t._v(t._s(s))])}),1),t._v("\n  Button\n")],1),t._v(" "),a("za-cell",[a("za-radio-group",{attrs:{slot:"description",type:"button"},on:{change:t.handleGroupChange},slot:"description",model:{value:t.radioGroup2,callback:function(s){t.radioGroup2=s},expression:"radioGroup2"}},t._l(t.cities,function(s,l){return a("za-radio",{key:s,attrs:{value:s}},[t._v(t._s(s))])}),1),t._v("\n  指定默认值\n")],1),t._v(" "),a("za-cell",[a("za-radio-group",{attrs:{slot:"description",type:"button"},on:{change:t.handleGroupChange},slot:"description",model:{value:t.radioGroup3,callback:function(s){t.radioGroup3=s},expression:"radioGroup3"}},t._l(t.cities,function(s,l){return a("za-radio",{key:s,attrs:{value:s,disabled:1===l}},[t._v(t._s(s))])}),1),t._v("\n  禁用指定项\n")],1),t._v(" "),a("za-cell",[a("za-radio-group",{attrs:{slot:"description",shape:"rect",type:"button"},on:{change:t.handleGroupChange},slot:"description",model:{value:t.radioGroup4,callback:function(s){t.radioGroup4=s},expression:"radioGroup4"}},t._l(t.cities,function(s,l){return a("za-radio",{key:s,attrs:{value:s}},[t._v(t._s(s))])}),1),t._v("\n  直角\n")],1),t._v(" "),a("za-cell",[a("za-radio-group",{attrs:{slot:"description",shape:"round",type:"button"},on:{change:t.handleGroupChange},slot:"description",model:{value:t.radioGroup5,callback:function(s){t.radioGroup5=s},expression:"radioGroup5"}},t._l(t.cities,function(s,l){return a("za-radio",{key:s,attrs:{value:s}},[t._v(t._s(s))])}),1),t._v("\n  椭圆角\n")],1)],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(2),t._v(" "),a("div",{staticClass:"za-panel__body"},[a("div",{staticStyle:{padding:"10px"}},[a("za-radio-group",{attrs:{block:"",compact:"",shape:"radius",type:"button"},on:{change:t.handleGroupChange},model:{value:t.radioGroup6,callback:function(s){t.radioGroup6=s},expression:"radioGroup6"}},t._l(t.cities,function(s,l){return a("za-radio",{key:s,attrs:{value:s}},[t._v(t._s(s))])}),1)],1)])]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(3),t._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-radio-group",{attrs:{type:"cell"},on:{change:t.handleGroupChange},model:{value:t.radioGroup7,callback:function(s){t.radioGroup7=s},expression:"radioGroup7"}},t._l(t.num,function(s,l){return a("za-radio",{key:s,attrs:{value:s,disabled:1===l}},[t._v(t._s(s+(1===l?" disabled":"")))])}),1)],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(4),t._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-radio-group",{attrs:{type:"cell",disabled:""},on:{change:t.handleGroupChange},model:{value:t.radioGroup8,callback:function(s){t.radioGroup8=s},expression:"radioGroup8"}},t._l(t.num,function(s,l){return a("za-radio",{key:s,attrs:{value:s}},[t._v(t._s(s))])}),1)],1)])]),a("div",{staticClass:"zarm-markdown-doc"},[a("h2",[t._v("单选框 Radio")]),t._v(" "),t._m(5),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("按钮样式")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._m(6),t._v("\n  "),t._m(7),t._v("\n    "),t._m(8),t._v(t._s(t.city)),t._m(9),t._v("\n  "),t._m(10),t._v("\n  Button\n"),t._m(11),t._v("\n"),t._m(12),t._v("\n  "),t._m(13),t._v("\n    "),t._m(14),t._v(t._s(t.city)),t._m(15),t._v("\n  "),t._m(16),t._v("\n  指定默认值\n"),t._m(17),t._v("\n"),t._m(18),t._v("\n  "),t._m(19),t._v("\n    "),t._m(20),t._v(t._s(t.city)),t._m(21),t._v("\n  "),t._m(22),t._v("\n  禁用指定项\n"),t._m(23),t._v("\n"),t._m(24),t._v("\n  "),t._m(25),t._v("\n    "),t._m(26),t._v(t._s(t.city)),t._m(27),t._v("\n  "),t._m(28),t._v("\n  直角\n"),t._m(29),t._v("\n"),t._m(30),t._v("\n  "),t._m(31),t._v("\n    "),t._m(32),t._v(t._s(t.city)),t._m(33),t._v("\n  "),t._m(34),t._v("\n  椭圆角\n"),t._m(35),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("块级样式")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._m(36),t._v("\n  "),t._m(37),t._v("\n    "),t._m(38),t._v(t._s(t.city)),t._m(39),t._v("\n  "),t._m(40),t._v("\n"),t._m(41),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("列表样式")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._m(42),t._v("\n  "),t._m(43),t._v(t._s(t.city+(1===t.index?" disabled":""))),t._m(44),t._v("\n"),t._m(45),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("列表样式禁用状态")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._m(46),t._v("\n  "),t._m(47),t._v(t._s(t.city)),t._m(48),t._v("\n"),t._m(49),t._v("\n")])])]),t._v(" "),a("h3",[t._v("Vue Script")]),t._v(" "),t._m(50),t._v(" "),a("h3",[t._v("API")]),t._v(" "),a("h4",[t._v("Radio Group Attributes")]),t._v(" "),t._m(51),t._v(" "),a("h4",[t._v("Radio Attributes")]),t._v(" "),t._m(52),t._v(" "),a("h4",[t._v("Radio Events")]),t._v(" "),t._m(53),t._v(" "),a("h4",[t._v("Radio Group Events")]),t._v(" "),t._m(54)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel__header"},[s("div",{staticClass:"za-panel__title"},[this._v("普通\n\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel__header"},[s("div",{staticClass:"za-panel__title"},[this._v("按钮样式\n\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel__header"},[s("div",{staticClass:"za-panel__title"},[this._v("块级样式\n\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel__header"},[s("div",{staticClass:"za-panel__title"},[this._v("列表样式\n\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel__header"},[s("div",{staticClass:"za-panel__title"},[this._v("列表样式禁用状态\n\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("普通")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChange"')]),t._v(">")]),t._v("默认"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("checked")]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChange"')]),t._v(">")]),t._v("默认选中"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("disabled")]),t._v(">")]),t._v("禁用"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("checked")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("disabled")]),t._v(">")]),t._v("选中且禁用"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"radioGroup1"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"button"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in cities"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":value")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio-group")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"radioGroup2"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"button"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in cities"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":value")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio-group")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"radioGroup3"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"button"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in cities"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":value")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":disabled")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"index === 1"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio-group")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"radioGroup4"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("shape")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"rect"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"button"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in cities"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":value")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio-group")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"radioGroup5"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("shape")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"round"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"button"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in cities"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":value")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio-group")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(" "),s("span",{staticClass:"hljs-attr"},[this._v("style")]),this._v("="),s("span",{staticClass:"hljs-string"},[this._v('"padding:10px;"')]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("block")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("compact")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("shape")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"radius"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"button"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"radioGroup6"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in cities"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":value")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio-group")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"cell"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"radioGroup7"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in num"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":value")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":disabled")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"index === 1"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio-group")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio-group")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"cell"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"radioGroup8"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleGroupChange"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("disabled")]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-radio")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(city, index) in num"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":value")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"city"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-radio-group")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{staticClass:"hljs"},[a("code",[t._v("<script name="),a("span",{staticClass:"hljs-string"},[t._v('"vue"')]),t._v(">\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data() {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("v1")]),t._v(": "),a("span",{staticClass:"hljs-literal"},[t._v("false")]),t._v(",\n      "),a("span",{staticClass:"hljs-attr"},[t._v("city")]),t._v(": "),a("span",{staticClass:"hljs-literal"},[t._v("null")]),t._v(",\n      "),a("span",{staticClass:"hljs-attr"},[t._v("index")]),t._v(": "),a("span",{staticClass:"hljs-literal"},[t._v("null")]),t._v(",\n      "),a("span",{staticClass:"hljs-attr"},[t._v("cities")]),t._v(": ["),a("span",{staticClass:"hljs-string"},[t._v("'上海'")]),t._v(", "),a("span",{staticClass:"hljs-string"},[t._v("'北京'")]),t._v(", "),a("span",{staticClass:"hljs-string"},[t._v("'广州'")]),t._v(", "),a("span",{staticClass:"hljs-string"},[t._v("'深圳'")]),t._v("],\n      "),a("span",{staticClass:"hljs-attr"},[t._v("num")]),t._v(": ["),a("span",{staticClass:"hljs-string"},[t._v("'选项一'")]),t._v(", "),a("span",{staticClass:"hljs-string"},[t._v("'选项二'")]),t._v(", "),a("span",{staticClass:"hljs-string"},[t._v("'选项三'")]),t._v(", "),a("span",{staticClass:"hljs-string"},[t._v("'选项四'")]),t._v("],\n      "),a("span",{staticClass:"hljs-attr"},[t._v("radioGroup1")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("''")]),t._v(",\n      "),a("span",{staticClass:"hljs-attr"},[t._v("radioGroup2")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'上海'")]),t._v(",\n      "),a("span",{staticClass:"hljs-attr"},[t._v("radioGroup3")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("''")]),t._v(",\n      "),a("span",{staticClass:"hljs-attr"},[t._v("radioGroup4")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("''")]),t._v(",\n      "),a("span",{staticClass:"hljs-attr"},[t._v("radioGroup5")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("''")]),t._v(",\n      "),a("span",{staticClass:"hljs-attr"},[t._v("radioGroup6")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("''")]),t._v(",\n      "),a("span",{staticClass:"hljs-attr"},[t._v("radioGroup7")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("''")]),t._v(",\n      "),a("span",{staticClass:"hljs-attr"},[t._v("radioGroup8")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("''")]),t._v(",\n      "),a("span",{staticClass:"hljs-attr"},[t._v("radioGroup9")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'上海'")]),t._v(",\n    };\n  },\n  "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    handleChange(v, e) {\n      "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(v, e);\n    },\n    handleGroupChange(v, e) {\n      "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(v, e);\n    }\n  },\n};\n"),a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")])]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("v-model")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("绑定选中值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'button', 'cell'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("显示类型")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("shape")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'radius'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'rect', 'radius', 'round'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("形状")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("block")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否为块级元素")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("compact")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否启用紧凑模式")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'button', 'cell'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("显示类型")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("shape")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'radius'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'rect', 'radius', 'round'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("形状")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("block")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否为块级元素")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string,number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选项值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("checked")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否选中")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("change")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选择后触发的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("value 选中 radio 的 label 值")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("change")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选择后触发的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("value 选中 radio 的 label 值")])])])])}],!1,null,null,null);s.default=n.exports}}]);