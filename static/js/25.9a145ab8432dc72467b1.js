(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{540:function(s,t,a){"use strict";a.r(t);const l=document.body;var i={data:()=>({visible1:!1,visible2:!1,visible3:!1,visible4:!1,visible5:!1}),methods:{popupClose(s,t){console.log(s,t)},getContainer:()=>l}},v=a(6),n=Object(v.a)(i,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[s._m(0),s._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-cell",[a("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(t){s.visible1=!0}},slot:"description"},[s._v("开启")]),s._v("\n    从上方弹出\n  ")],1),s._v(" "),a("za-cell",[a("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(t){s.visible2=!0}},slot:"description"},[s._v("开启")]),s._v("\n    从下方弹出\n  ")],1),s._v(" "),a("za-cell",[a("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(t){s.visible3=!0}},slot:"description"},[s._v("开启")]),s._v("\n    从左侧弹出\n  ")],1),s._v(" "),a("za-cell",[a("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(t){s.visible4=!0}},slot:"description"},[s._v("开启")]),s._v("\n    从右侧弹出\n  ")],1),s._v(" "),a("za-popup",{staticStyle:{zIndex:"2000"},attrs:{visible:s.visible1,direction:"top",duration:3e3,maskType:"transparent",autoClose:""},on:{"update:visible":function(t){s.visible1=t},close:s.popupClose}},[a("div",{staticClass:"popup-box-top",staticStyle:{width:"100%",padding:"10px",background:"rgba(0,0,0,.7)",color:"#fff","font-size":"14px","text-align":"center"}},[s._v("更新成功")])]),s._v(" "),a("za-popup",{attrs:{visible:s.visible2,direction:"bottom"},on:{"update:visible":function(t){s.visible2=t},close:s.popupClose}},[a("div",{staticClass:"popup-box",staticStyle:{height:"100%",padding:"20px 20px 100px",background:"#fff"}},[a("za-button",{attrs:{size:"sm"},on:{click:function(t){s.visible2=!1}}},[s._v("关闭弹层")])],1)]),s._v(" "),a("za-popup",{attrs:{visible:s.visible3,direction:"left"},on:{"update:visible":function(t){s.visible3=t},close:s.popupClose}},[a("div",{staticClass:"popup-box-left",staticStyle:{width:"160px",height:"100%",padding:"20px 20px 100px",background:"#fff"}},[a("za-button",{attrs:{size:"sm"},on:{click:function(t){s.visible3=!1}}},[s._v("关闭弹层")])],1)]),s._v(" "),a("za-popup",{attrs:{visible:s.visible4,direction:"right"},on:{"update:visible":function(t){s.visible4=t},close:s.popupClose}},[a("div",{staticClass:"popup-box",staticStyle:{width:"160px",height:"100%",padding:"20px 20px 100px",background:"#fff"}},[a("za-button",{attrs:{size:"sm"},on:{click:function(t){s.visible4=!1}}},[s._v("关闭弹层")])],1)])],1)]),s._v(" "),a("div",{staticClass:"za-panel"},[s._m(1),s._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-cell",[a("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(t){s.visible5=!0}},slot:"description"},[s._v("开启")]),s._v("\n    从下方弹出\n  ")],1),s._v(" "),a("za-popup",{attrs:{visible:s.visible5,direction:"bottom","get-container":s.getContainer},on:{"update:visible":function(t){s.visible5=t},close:s.popupClose}},[a("div",{staticClass:"popup-box",staticStyle:{height:"100%",padding:"20px 20px 100px",background:"#fff"}},[a("za-button",{attrs:{size:"sm"},on:{click:function(t){s.visible5=!1}}},[s._v("设置挂载容器")])],1)])],1)])]),s._m(2)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel__header"},[t("div",{staticClass:"za-panel__title"},[this._v("基本\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel__header"},[t("div",{staticClass:"za-panel__title"},[this._v("设置挂载容器\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"zarm-markdown-doc"},[a("h2",[s._v("弹出框 Popup")]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("基本")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"xs"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible1 = true"')]),s._v(">")]),s._v("开启"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n    从上方弹出\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"xs"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible2 = true"')]),s._v(">")]),s._v("开启"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n    从下方弹出\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"xs"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible3 = true"')]),s._v(">")]),s._v("开启"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n    从左侧弹出\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"xs"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible4 = true"')]),s._v(">")]),s._v("开启"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n    从右侧弹出\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-popup")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"zIndex:2000"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":visible.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible1"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("direction")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"top"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":duration")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"3000"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("maskType")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"transparent"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("autoClose")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('""')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("close")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popupClose"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popup-box-top"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"width: 100%;padding: 10px;background: rgba(0,0,0,.7);color: #fff;font-size: 14px;text-align: center;"')]),s._v(">")]),s._v("更新成功"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-popup")]),s._v(">")]),s._v("\n\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-popup")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":visible.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible2"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("direction")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"bottom"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("close")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popupClose"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popup-box"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"height: 100%;padding: 20px 20px 100px;background: #fff;"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"sm"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible2 = false"')]),s._v(">")]),s._v("关闭弹层"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-popup")]),s._v(">")]),s._v("\n\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-popup")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":visible.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible3"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("direction")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"left"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("close")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popupClose"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popup-box-left"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"width:160px;height: 100%;padding: 20px 20px 100px;background: #fff;"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"sm"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible3 = false"')]),s._v(">")]),s._v("关闭弹层"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-popup")]),s._v(">")]),s._v("\n\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-popup")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":visible.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible4"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("direction")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"right"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("close")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popupClose"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popup-box"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"width:160px;height: 100%;padding: 20px 20px 100px;background: #fff;"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"sm"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible4 = false"')]),s._v(">")]),s._v("关闭弹层"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-popup")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("设置挂载容器")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"xs"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible5 = true"')]),s._v(">")]),s._v("开启"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n    从下方弹出\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-popup")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":visible.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible5"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("direction")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"bottom"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":get-container")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"getContainer"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("close")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popupClose"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popup-box"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"height: 100%;padding: 20px 20px 100px;background: #fff;"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"sm"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible5 = false"')]),s._v(">")]),s._v("设置挂载容器"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-popup")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("h3",[s._v("Vue Script")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("<script name="),a("span",{staticClass:"hljs-string"},[s._v('"vue"')]),s._v(">\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" div1 = "),a("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".body;\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("visible1")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("visible2")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("visible3")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("visible4")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("visible5")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    popupClose(reason, event) {\n      "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(reason, event);\n    },\n    "),a("span",{staticClass:"hljs-attr"},[s._v("getContainer")]),s._v(": "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" div1,\n  },\n};\n"),a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")])]),s._v("\n")])]),s._v(" "),a("h3",[s._v("API")]),s._v(" "),a("h4",[s._v("Popup Attributes")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("属性")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("类型")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("默认值")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("可选值／参数")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("prefixCls")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("za-popup")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("类名前缀")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("visible")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("bool")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("false")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("是否显示, 支持.sync修饰符")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("direction")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'bottom'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'top', 'bottom', 'left', 'right'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("弹出方向")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("getContainer")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("func")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("自定义挂载Dom节点")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("autoClose")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("bool")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("false")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("是否自动关闭")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("duration")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("number")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("3000")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("自动关闭前停留的时间（单位：毫秒）")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("maskType")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'normal'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'transparent', 'light', 'normal', 'dark'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("遮罩层的类型")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("onClose")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("func")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("noop")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("关闭后触发的回调函数")])])])]),s._v(" "),a("h4",[s._v("Popup Events")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("事件名称")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("回调参数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("close")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("关闭后触发的事件")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("reason, event 事件对象")])])])])])}],!1,null,null,null);t.default=n.exports},579:function(s,t,a){},693:function(s,t,a){"use strict";a.r(t);var l=a(540),i=a(152),v=a(150),n=a(151),_=(a(579),{components:{Container:i.a,PageHeader:v.a,PageFooter:n.a,Demo:l.default}}),e=a(6),c=Object(e.a)(_,function(){var s=this.$createElement,t=this._self._c||s;return t("Container",{staticClass:"popup-page"},[t("PageHeader",{attrs:{title:"弹出框 Popup"}}),this._v(" "),t("Demo"),this._v(" "),t("PageFooter")],1)},[],!1,null,null,null);t.default=c.exports}}]);