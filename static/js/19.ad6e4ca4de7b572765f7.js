(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{378:function(t,e,o){},379:function(t,e,o){},380:function(t,e,o){"use strict";o(378)},381:function(t,e,o){"use strict";var c=o(1);const n=Object(c.withScopeId)("data-v-4d605d3f");Object(c.pushScopeId)("data-v-4d605d3f");const r={class:"main-container"};Object(c.popScopeId)();const a=n((function(t,e,o,n,a,d){return Object(c.openBlock)(),Object(c.createBlock)("main",null,[Object(c.createVNode)("div",r,[Object(c.renderSlot)(t.$slots,"default")])])}));var d={data:()=>({}),components:{},created(){},mounted(){},methods:{}};o(380);d.render=a,d.__scopeId="data-v-4d605d3f";e.a=d},382:function(t,e,o){"use strict";o(379)},383:function(t,e,o){"use strict";var c=o(1);const n=Object(c.withScopeId)("data-v-c1ca9bcc");Object(c.pushScopeId)("data-v-c1ca9bcc");const r={class:"simulator"};Object(c.popScopeId)();const a=n((function(t,e,o,n,a,d){return Object(c.openBlock)(),Object(c.createBlock)("div",r,[Object(c.createVNode)("iframe",{id:"simulatorFrame",src:d.componentPath,title:"simulator",frameBorder:"0",style:{width:"375px",height:"667px"}},null,8,["src"])])}));var d={props:{url:{type:String,default:""}},computed:{componentPath(){return"dark"===(window.zarmTheme||"")?`${window.CONFIG.pathname}dark.html#/${this.url}`:`${window.CONFIG.pathname}demo.html#/${this.url}`}}};o(382);d.render=a,d.__scopeId="data-v-c1ca9bcc";e.a=d},487:function(t,e,o){var c={"./3.0.0/checkbox.md":[428,2]};function n(t){if(!o.o(c,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=c[t],n=e[0];return o.e(e[1]).then((function(){return o(n)}))}n.keys=function(){return Object.keys(c)},n.id=487,t.exports=n},562:function(t,e,o){"use strict";o.r(e);var c=o(1);var n=o(383),r={components:{Container:o(381).a,Simulator:n.a},data:()=>({path:null}),created(){const t=this.$store.state.version;this.path=this.$route.path.replace("/documents/","");const e=Object(c.defineAsyncComponent)(()=>o(487)(`./${t}/checkbox.md`));window.app.component("Demo",e)},render:function(t,e,o,n,r,a){const d=Object(c.resolveComponent)("Demo"),s=Object(c.resolveComponent)("Simulator"),i=Object(c.resolveComponent)("Container");return Object(c.openBlock)(),Object(c.createBlock)(i,null,{default:Object(c.withCtx)(()=>[Object(c.createVNode)(d),Object(c.createVNode)(s,{url:r.path},null,8,["url"])]),_:1})}};e.default=r}}]);