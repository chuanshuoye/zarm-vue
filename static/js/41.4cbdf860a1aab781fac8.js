(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{378:function(t,e,c){},379:function(t,e,c){},380:function(t,e,c){"use strict";c(378)},381:function(t,e,c){"use strict";var n=c(1);const o=Object(n.withScopeId)("data-v-4d605d3f");Object(n.pushScopeId)("data-v-4d605d3f");const r={class:"main-container"};Object(n.popScopeId)();const a=o((function(t,e,c,o,a,s){return Object(n.openBlock)(),Object(n.createBlock)("main",null,[Object(n.createVNode)("div",r,[Object(n.renderSlot)(t.$slots,"default")])])}));var s={data:()=>({}),components:{},created(){},mounted(){},methods:{}};c(380);s.render=a,s.__scopeId="data-v-4d605d3f";e.a=s},382:function(t,e,c){"use strict";c(379)},383:function(t,e,c){"use strict";var n=c(1);const o=Object(n.withScopeId)("data-v-c1ca9bcc");Object(n.pushScopeId)("data-v-c1ca9bcc");const r={class:"simulator"};Object(n.popScopeId)();const a=o((function(t,e,c,o,a,s){return Object(n.openBlock)(),Object(n.createBlock)("div",r,[Object(n.createVNode)("iframe",{id:"simulatorFrame",src:s.componentPath,title:"simulator",frameBorder:"0",style:{width:"375px",height:"667px"}},null,8,["src"])])}));var s={props:{url:{type:String,default:""}},computed:{componentPath(){return"dark"===(window.zarmTheme||"")?`${window.CONFIG.pathname}dark.html#/${this.url}`:`${window.CONFIG.pathname}demo.html#/${this.url}`}}};c(382);s.render=a,s.__scopeId="data-v-c1ca9bcc";e.a=s},500:function(t,e,c){var n={"./3.0.0/stackPicker.md":[410,106]};function o(t){if(!c.o(n,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[t],o=e[0];return c.e(e[1]).then((function(){return c(o)}))}o.keys=function(){return Object.keys(n)},o.id=500,t.exports=o},575:function(t,e,c){"use strict";c.r(e);var n=c(1);var o=c(383),r={components:{Container:c(381).a,Simulator:o.a},data:()=>({path:null}),created(){const t=this.$store.state.version;this.path=this.$route.path.replace("/documents/","");const e=Object(n.defineAsyncComponent)(()=>c(500)(`./${t}/stackPicker.md`));window.app.component("Demo",e)},render:function(t,e,c,o,r,a){const s=Object(n.resolveComponent)("Demo"),d=Object(n.resolveComponent)("Simulator"),i=Object(n.resolveComponent)("Container");return Object(n.openBlock)(),Object(n.createBlock)(i,null,{default:Object(n.withCtx)(()=>[Object(n.createVNode)(s),Object(n.createVNode)(d,{url:r.path},null,8,["url"])]),_:1})}};e.default=r}}]);