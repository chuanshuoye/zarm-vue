(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{535:function(s,t,a){"use strict";a.r(t);const l=[{url:"https://static.zhongan.com/website/health/zarm/images/banners/1.png",img:"1"},{url:"https://static.zhongan.com/website/health/zarm/images/banners/1.png",img:"2"},{url:"https://static.zhongan.com/website/health/zarm/images/banners/1.png",img:"3"}];var n={data:()=>({ITEMS:l,i:{}}),methods:{handleChangeStart(s){console.log(s)},handleChangeEnd(s){console.log(s)},onJumpTo(){this.$refs.carousel.onJumpTo(0)},onSlideTo(){this.$refs.carousel.onSlideTo(2)}}},i=a(6),v=Object(i.a)(n,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[s._m(0),s._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-carousel",{attrs:{direction:"left"},on:{changeStart:s.handleChangeStart,changeEnd:s.handleChangeEnd}},s._l(s.ITEMS,function(s,t){return a("za-carousel-item",{key:t},[a("div",{staticClass:"carousel-item-pic"},[a("img",{attrs:{src:s.url,alt:s.img,draggable:!1}})])])}))],1)]),s._v(" "),a("div",{staticClass:"za-panel"},[s._m(1),s._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-carousel",{attrs:{height:"180",direction:"bottom"},on:{changeStart:s.handleChangeStart,changeEnd:s.handleChangeEnd}},s._l(s.ITEMS,function(s,t){return a("za-carousel-item",{key:t},[a("div",{staticClass:"carousel-item-pic"},[a("img",{attrs:{src:s.url,alt:s.img,draggable:!1}})])])}))],1)]),s._v(" "),a("div",{staticClass:"za-panel"},[s._m(2),s._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-carousel",{ref:"carousel",attrs:{direction:"left",loop:""},on:{changeStart:s.handleChangeStart,changeEnd:s.handleChangeEnd}},s._l(s.ITEMS,function(s,t){return a("za-carousel-item",{key:t},[a("div",{staticClass:"carousel-item-pic"},[a("img",{attrs:{src:s.url,alt:s.img,draggable:!1}})])])})),s._v(" "),a("div",{staticClass:"controls",staticStyle:{"text-align":"center","padding-bottom":"20px"}},[a("za-button",{attrs:{size:"sm"},on:{click:s.onJumpTo}},[s._v("无动画切换指定页")]),s._v(" "),a("za-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"sm"},on:{click:s.onSlideTo}},[s._v("滑动到指定页")])],1)],1)]),s._v(" "),a("div",{staticClass:"za-panel"},[s._m(3),s._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-carousel",{attrs:{direction:"left",loop:"","auto-play":""}},s._l(s.ITEMS,function(s,t){return a("za-carousel-item",{key:t},[a("div",{staticClass:"carousel-item-pic"},[a("img",{attrs:{src:s.url,alt:s.img,draggable:!1}})])])}))],1)])]),s._m(4)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel__header"},[t("div",{staticClass:"za-panel__title"},[this._v("基本\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel__header"},[t("div",{staticClass:"za-panel__title"},[this._v("纵向\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel__header"},[t("div",{staticClass:"za-panel__title"},[this._v("循环轮播\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel__header"},[t("div",{staticClass:"za-panel__title"},[this._v("自动轮播\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"zarm-markdown-doc"},[a("h2",[s._v("走马灯 Carousel")]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("基本")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-carousel")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("direction")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"left"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("changeStart")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleChangeStart"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("changeEnd")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleChangeEnd"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-carousel-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":key")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"index"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"(i, index) in ITEMS"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"carousel-item-pic"')]),s._v(">")]),s._v("\n           "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("img")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"i.url"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":alt")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"i.img"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":draggable")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"false"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-carousel-item")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-carousel")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("纵向")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-carousel")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("height")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"180"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("direction")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"bottom"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("changeStart")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleChangeStart"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("changeEnd")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleChangeEnd"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-carousel-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":key")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"index"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"(i, index) in ITEMS"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"carousel-item-pic"')]),s._v(">")]),s._v("\n           "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("img")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"i.url"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":alt")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"i.img"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":draggable")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"false"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-carousel-item")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-carousel")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("循环轮播")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-carousel")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("ref")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"carousel"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("direction")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"left"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("loop")]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("changeStart")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleChangeStart"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("changeEnd")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleChangeEnd"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-carousel-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":key")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"index"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"(i, index) in ITEMS"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"carousel-item-pic"')]),s._v(">")]),s._v("\n           "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("img")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"i.url"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":alt")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"i.img"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":draggable")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"false"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-carousel-item")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-carousel")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"controls"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"text-align:center;padding-bottom:20px;"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"sm"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"onJumpTo"')]),s._v(">")]),s._v("无动画切换指定页"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"sm"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"margin-left:10px;"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"onSlideTo"')]),s._v(">")]),s._v("滑动到指定页"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("自动轮播")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-carousel")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("direction")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"left"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("loop")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("auto-play")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('""')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-carousel-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":key")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"index"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"(i, index) in ITEMS"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"carousel-item-pic"')]),s._v(">")]),s._v("\n          "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("img")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"i.url"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":alt")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"i.img"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":draggable")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"false"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-carousel-item")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-carousel")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("h3",[s._v("Vue Script")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("<script name="),a("span",{staticClass:"hljs-string"},[s._v('"vue"')]),s._v(">\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" ITEMS = [\n  {\n    "),a("span",{staticClass:"hljs-attr"},[s._v("url")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'https://static.zhongan.com/website/health/zarm/images/banners/1.png'")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v("img")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'1'")]),s._v(",\n  },\n  {\n    "),a("span",{staticClass:"hljs-attr"},[s._v("url")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'https://static.zhongan.com/website/health/zarm/images/banners/1.png'")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v("img")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'2'")]),s._v(",\n  },\n  {\n    "),a("span",{staticClass:"hljs-attr"},[s._v("url")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'https://static.zhongan.com/website/health/zarm/images/banners/1.png'")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v("img")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'3'")]),s._v(",\n  },\n];\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      ITEMS,\n      "),a("span",{staticClass:"hljs-attr"},[s._v("i")]),s._v(": {}\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    handleChangeStart(index){\n      "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(index);\n    },\n    handleChangeEnd(index){\n      "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(index);\n    },\n    onJumpTo(){\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$refs.carousel.onJumpTo("),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(")\n    },\n    onSlideTo(){\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$refs.carousel.onSlideTo("),a("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(")\n    }\n  },\n};\n"),a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")])]),s._v("\n")])]),s._v(" "),a("h3",[s._v("API")]),s._v(" "),a("h4",[s._v("Carousel Attributes")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("属性")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("类型")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("默认值")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("可选值／参数")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("prefixCls")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("za-carousel")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("类名前缀")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("direction")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'left'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'left', 'right', 'top', 'bottom'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("滑动方向")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("height")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("number, string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("高度")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("loop")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("bool")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("false")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("是否循环")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("autoPlay")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("bool")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("false")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("是否自动轮播")])])])]),s._v(" "),a("h4",[s._v("Carousel Events")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("事件名称")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("回调参数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("changeStart")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("动画开始时触发的事件")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("index, 当前处于激活状态幻灯片的index值")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("changeEnd")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("动画结束后触发的事件")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("index, 动画结束时处于激活状态幻灯片的index值")])])])])])}],!1,null,null,null);t.default=v.exports},585:function(s,t,a){},705:function(s,t,a){"use strict";a.r(t);var l=a(535),n=a(152),i=a(150),v=a(151),_=(a(585),{components:{Container:n.a,PageHeader:i.a,PageFooter:v.a,Demo:l.default}}),e=a(6),c=Object(e.a)(_,function(){var s=this.$createElement,t=this._self._c||s;return t("Container",{staticClass:"carousel-page"},[t("PageHeader",{attrs:{title:"走马灯 Carousel"}}),this._v(" "),t("Demo"),this._v(" "),t("PageFooter")],1)},[],!1,null,null,null);t.default=c.exports}}]);