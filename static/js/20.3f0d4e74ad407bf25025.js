(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{378:function(t,e,o){},379:function(t,e,o){},380:function(t,e,o){"use strict";o(378)},381:function(t,e,o){"use strict";var n=o(1);const c=Object(n.withScopeId)("data-v-4d605d3f");Object(n.pushScopeId)("data-v-4d605d3f");const r={class:"main-container"};Object(n.popScopeId)();const a=c((function(t,e,o,c,a,s){return Object(n.openBlock)(),Object(n.createBlock)("main",null,[Object(n.createVNode)("div",r,[Object(n.renderSlot)(t.$slots,"default")])])}));var s={data:()=>({}),components:{},created(){},mounted(){},methods:{}};o(380);s.render=a,s.__scopeId="data-v-4d605d3f";e.a=s},382:function(t,e,o){"use strict";o(379)},383:function(t,e,o){"use strict";var n=o(1);const c=Object(n.withScopeId)("data-v-c1ca9bcc");Object(n.pushScopeId)("data-v-c1ca9bcc");const r={class:"simulator"};Object(n.popScopeId)();const a=c((function(t,e,o,c,a,s){return Object(n.openBlock)(),Object(n.createBlock)("div",r,[Object(n.createVNode)("iframe",{id:"simulatorFrame",src:s.componentPath,title:"simulator",frameBorder:"0",style:{width:"375px",height:"667px"}},null,8,["src"])])}));var s={props:{url:{type:String,default:""}},computed:{componentPath(){return"dark"===(window.zarmTheme||"")?`${window.CONFIG.pathname}dark.html#/${this.url}`:`${window.CONFIG.pathname}demo.html#/${this.url}`}}};o(382);s.render=a,s.__scopeId="data-v-c1ca9bcc";e.a=s},488:function(t,e,o){var n={"./3.0.0/collapse.md":[417,54]};function c(t){if(!o.o(n,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[t],c=e[0];return o.e(e[1]).then((function(){return o(c)}))}c.keys=function(){return Object.keys(n)},c.id=488,t.exports=c},563:function(t,e,o){"use strict";o.r(e);var n=o(1);var c=o(383),r={components:{Container:o(381).a,Simulator:c.a},data:()=>({path:null}),created(){const t=this.$store.state.version;this.path=this.$route.path.replace("/documents/","");const e=Object(n.defineAsyncComponent)(()=>o(488)(`./${t}/collapse.md`));window.app.component("Demo",e)},render:function(t,e,o,c,r,a){const s=Object(n.resolveComponent)("Demo"),d=Object(n.resolveComponent)("Simulator"),i=Object(n.resolveComponent)("Container");return Object(n.openBlock)(),Object(n.createBlock)(i,null,{default:Object(n.withCtx)(()=>[Object(n.createVNode)(s),Object(n.createVNode)(d,{url:r.path},null,8,["url"])]),_:1})}};e.default=r}}]);