(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{539:function(s,t,a){"use strict";a.r(t);var l={data:()=>({files:[],fileList:[],visible:!1}),methods:{handleChange(s){console.log(s),this.files.push(s)},handleChangeMulti(s){s.length+this.fileList.length>5?(alert("超过5张"),this.fileList=this.fileList.concat(...s.slice(0,5-this.fileList.length))):this.fileList=this.fileList.concat(...s)},remove(s){this.files.splice(s,1),this.visible=!0},remove2(s){this.fileList.splice(s,1),this.visible=!0},beforeSelect(){if(this.fileList.length>5)return alert("超过5张"),!1;alert("before select")}}},i=a(6),e=Object(i.a)(l,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[s._m(0),s._v(" "),a("div",{staticClass:"za-panel__body"},[a("div",{staticClass:"uploader-wrapper",staticStyle:{display:"flex",padding:"15px"}},[s._l(s.files,function(t,l){return a("za-badge",{key:l,staticClass:"uploader-item",staticStyle:{display:"inline-block","margin-right":"15px","align-items":"center","justify-content":"center",width:"74px",height:"74px",border:"2px solid #ddd"},attrs:{sup:"",shape:"circle"},on:{click:function(t){s.remove(l)}}},[a("za-icon",{staticStyle:{"font-size":"10px"},attrs:{slot:"text",type:"wrong"},slot:"text"}),s._v(" "),a("div",{staticClass:"uploader-item-img"},[a("a",{attrs:{href:t.thumbnail,target:"_blank"}},[a("img",{attrs:{src:t.thumbnail,alt:""}})])])],1)}),s._v(" "),a("div",{staticClass:"uploader-wrapper"},[a("za-file-picker",{staticClass:"uploader-btn",staticStyle:{display:"flex","align-items":"center","justify-content":"center",width:"74px",height:"74px",border:"2px dashed #ddd"},attrs:{accept:"image/jpg, image/jpeg, image/gif, image/png"},on:{change:s.handleChange}},[a("za-icon",{staticStyle:{fontSize:"30px"},attrs:{type:"add"}})],1)],1)],2)])]),s._v(" "),a("div",{staticClass:"za-panel"},[s._m(1),s._v(" "),a("div",{staticClass:"za-panel__body"},[a("div",{staticClass:"uploader-wrapper",staticStyle:{display:"flex",padding:"15px"}},[s._l(s.fileList,function(t,l){return a("za-badge",{key:l,staticClass:"uploader-item",staticStyle:{display:"inline-block","margin-right":"15px","align-items":"center","justify-content":"center",width:"74px",height:"74px",border:"2px solid #ddd"},attrs:{sup:"",shape:"circle"},on:{click:function(t){s.remove2(l)}}},[a("za-icon",{staticStyle:{"font-size":"10px"},attrs:{slot:"text",type:"wrong"},slot:"text"}),s._v(" "),a("div",{staticClass:"uploader-item-img"},[a("a",{attrs:{href:t.thumbnail,target:"_blank"}},[a("img",{attrs:{src:t.thumbnail,alt:""}})])])],1)}),s._v(" "),a("div",{staticClass:"uploader-wrapper"},[s.fileList.length<5?a("za-file-picker",{staticClass:"uploader-btn",staticStyle:{display:"flex","align-items":"center","justify-content":"center",width:"74px",height:"74px",border:"2px dashed #ddd"},attrs:{multiple:"","before-select":s.beforeSelect,accept:"image/jpg, image/jpeg, image/gif, image/png"},on:{change:s.handleChangeMulti}},[a("za-icon",{attrs:{type:"add"}})],1):s._e()],1)],2),s._v(" "),a("za-toast",{attrs:{visible:s.visible,duration:1e3},on:{"update:visible":function(t){s.visible=t}}},[s._v("删除成功")])],1)]),s._v(" "),a("div",{staticClass:"za-panel"},[s._m(2),s._v(" "),a("div",{staticClass:"za-panel__body"},[a("div",{staticClass:"uploader-wrapper",staticStyle:{display:"flex",padding:"15px"}},[a("div",{staticClass:"uploader-wrapper"},[a("za-file-picker",{staticClass:"uploader-btn",staticStyle:{display:"flex","align-items":"center","justify-content":"center",width:"74px",height:"74px",border:"2px dashed #ddd"},attrs:{disabled:""}},[a("za-icon",{staticStyle:{fontSize:"30px"},attrs:{type:"add"}})],1)],1)])])])]),s._m(3)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel__header"},[t("div",{staticClass:"za-panel__title"},[this._v("基本用法\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel__header"},[t("div",{staticClass:"za-panel__title"},[this._v("多选模式\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel__header"},[t("div",{staticClass:"za-panel__title"},[this._v("禁用状态\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"zarm-markdown-doc"},[a("h2",[s._v("文件选择器 FilePicker")]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("基本用法")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"uploader-wrapper"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"display:flex;padding:15px;"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-badge")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("sup")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('""')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"(i, index) in files"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"uploader-item"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("shape")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"circle"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":key")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"index"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"remove(index)"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"display:inline-block;margin-right:15px;align-items: center;justify-content: center;width:74px;height:74px;border:2px solid #ddd;"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-icon")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"wrong"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"text"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"font-size:10px;"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-icon")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"uploader-item-img"')]),s._v(">")]),s._v("\n          "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":href")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"i.thumbnail"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("target")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"_blank"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("img")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"i.thumbnail"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("alt")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('""')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-badge")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"uploader-wrapper"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-file-picker")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"uploader-btn"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"display:flex;align-items: center;justify-content: center;width:74px;height:74px;border:2px dashed #ddd;"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("accept")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"image/jpg, image/jpeg, image/gif, image/png"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("change")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleChange"')]),s._v(">")]),s._v("\n          "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-icon")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"add"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"fontSize:30px;"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-icon")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-file-picker")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("多选模式")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"uploader-wrapper"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"display:flex;padding:15px;"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-badge")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("sup")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('""')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"(i, index) in fileList"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"uploader-item"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("shape")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"circle"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":key")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"index"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"remove2(index)"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"display:inline-block;margin-right:15px;align-items: center;justify-content: center;width:74px;height:74px;border:2px solid #ddd;"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-icon")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"wrong"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"text"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"font-size:10px;"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-icon")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"uploader-item-img"')]),s._v(">")]),s._v("\n          "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":href")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"i.thumbnail"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("target")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"_blank"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("img")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"i.thumbnail"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("alt")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('""')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-badge")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"uploader-wrapper"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-file-picker")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-if")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"fileList.length < 5"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("multiple")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"uploader-btn"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"display:flex;align-items: center;justify-content: center;width:74px;height:74px;border:2px dashed #ddd;"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":before-select")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"beforeSelect"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("accept")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"image/jpg, image/jpeg, image/gif, image/png"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("change")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleChangeMulti"')]),s._v(">")]),s._v("\n          "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-icon")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"add"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-icon")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-file-picker")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-toast")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":visible.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":duration")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"1000"')]),s._v(">")]),s._v("删除成功"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-toast")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("禁用状态")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"uploader-wrapper"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"display:flex;padding:15px;"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"uploader-wrapper"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-file-picker")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"uploader-btn"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"display:flex;align-items: center;justify-content: center;width:74px;height:74px;border:2px dashed #ddd;"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("disabled")]),s._v(">")]),s._v("\n          "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-icon")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"add"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"fontSize:30px;"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-icon")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-file-picker")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("h3",[s._v("Vue Script")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("<script name="),a("span",{staticClass:"hljs-string"},[s._v('"vue"')]),s._v(">\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("files")]),s._v(": [],\n      "),a("span",{staticClass:"hljs-attr"},[s._v("fileList")]),s._v(": [],\n      "),a("span",{staticClass:"hljs-attr"},[s._v("visible")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    handleChange(data){\n      "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(data);\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".files.push(data)\n    },\n    handleChangeMulti(dataList){\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v("(dataList.length + "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".fileList.length > "),a("span",{staticClass:"hljs-number"},[s._v("5")]),s._v("){\n        alert("),a("span",{staticClass:"hljs-string"},[s._v("'超过5张'")]),s._v(")\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".fileList = "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".fileList.concat(...(dataList.slice("),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(", "),a("span",{staticClass:"hljs-number"},[s._v("5")]),s._v(" - "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".fileList.length)));\n      }"),a("span",{staticClass:"hljs-keyword"},[s._v("else")]),s._v("{\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".fileList = "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".fileList.concat(...dataList);\n      }\n    },\n    remove(index){\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".files.splice(index, "),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(");\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".visible = "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n    },\n    remove2(index){\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".fileList.splice(index, "),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(");\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".visible = "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n    },\n    beforeSelect(){\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v("("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".fileList.length > "),a("span",{staticClass:"hljs-number"},[s._v("5")]),s._v("){\n        alert("),a("span",{staticClass:"hljs-string"},[s._v("'超过5张'")]),s._v(")\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n      }"),a("span",{staticClass:"hljs-keyword"},[s._v("else")]),s._v("{\n        alert("),a("span",{staticClass:"hljs-string"},[s._v("'before select'")]),s._v(")\n      }\n    }\n  },\n};\n"),a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")])]),s._v("\n")])]),s._v(" "),a("h3",[s._v("API")]),s._v(" "),a("h4",[s._v("Uploader")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("属性")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("类型")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("默认值")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("可选值／参数")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("accept")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("允许上传的附件格式,参考File文件类型")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("multiple")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("bool")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("false")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("是否支持多选")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("disabled")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("bool")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("false")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("是否禁用")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("prefixCls")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("za-filepicker")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("类名前缀")])])])]),s._v(" "),a("h4",[s._v("Uploader Event")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("事件名称")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("回调参数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("beforeSelect")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("选择前触发的事件")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("() => boolean")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("change")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("值变化时触发的回调函数。multiple为true时，返回文件数组格式，否则为文件对象")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("(file?: object | object[]) => void")])])])])])}],!1,null,null,null);t.default=e.exports},637:function(s,t,a){var l={"./2.0.0/filePicker.md":539};function i(s){var t=e(s);return a(t)}function e(s){var t=l[s];if(!(t+1)){var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(l)},i.resolve=e,s.exports=i,i.id=637}}]);