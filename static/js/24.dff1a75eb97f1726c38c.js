(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{372:function(t,e,o){},373:function(t,e,o){},374:function(t,e,o){"use strict";o(372)},375:function(t,e,o){"use strict";var n=o(1);const c=Object(n.withScopeId)("data-v-4d605d3f");Object(n.pushScopeId)("data-v-4d605d3f");const r={class:"main-container"};Object(n.popScopeId)();const a=c((function(t,e,o,c,a,d){return Object(n.openBlock)(),Object(n.createBlock)("main",null,[Object(n.createVNode)("div",r,[Object(n.renderSlot)(t.$slots,"default")])])}));var d={data:()=>({}),components:{},created(){},mounted(){},methods:{}};o(374);d.render=a,d.__scopeId="data-v-4d605d3f";e.a=d},376:function(t,e,o){"use strict";o(373)},377:function(t,e,o){"use strict";var n=o(1);const c=Object(n.withScopeId)("data-v-1196af06");Object(n.pushScopeId)("data-v-1196af06");const r={class:"simulator"};Object(n.popScopeId)();const a=c((function(t,e,o,c,a,d){return Object(n.openBlock)(),Object(n.createBlock)("div",r,[Object(n.createVNode)("iframe",{src:d.componentPath,title:"simulator",frameBorder:"0",style:{width:"375px",height:"667px"}},null,8,["src"])])}));var d={props:{url:{type:String,default:""}},computed:{componentPath(){return`${window.CONFIG.pathname}demo.html#/${this.url}`}}};o(376);d.render=a,d.__scopeId="data-v-1196af06";e.a=d},485:function(t,e,o){var n={"./3.0.0/keyboard.md":[389,91]};function c(t){if(!o.o(n,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[t],c=e[0];return o.e(e[1]).then((function(){return o(c)}))}c.keys=function(){return Object.keys(n)},c.id=485,t.exports=c},558:function(t,e,o){"use strict";o.r(e);var n=o(1);var c=o(377),r={components:{Container:o(375).a,Simulator:c.a},data:()=>({path:null}),created(){const t=this.$store.state.version;this.path=this.$route.path.replace("/documents/","");const e=Object(n.defineAsyncComponent)(()=>o(485)(`./${t}/keyboard.md`));window.app.component("Demo",e)},render:function(t,e,o,c,r,a){const d=Object(n.resolveComponent)("Demo"),s=Object(n.resolveComponent)("Simulator"),i=Object(n.resolveComponent)("Container");return Object(n.openBlock)(),Object(n.createBlock)(i,null,{default:Object(n.withCtx)(()=>[Object(n.createVNode)(d),Object(n.createVNode)(s,{url:r.path},null,8,["url"])]),_:1})}};e.default=r}}]);