(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{372:function(t,e,n){},373:function(t,e,n){},374:function(t,e,n){"use strict";n(372)},375:function(t,e,n){"use strict";var o=n(1);const c=Object(o.withScopeId)("data-v-4d605d3f");Object(o.pushScopeId)("data-v-4d605d3f");const r={class:"main-container"};Object(o.popScopeId)();const a=c((function(t,e,n,c,a,s){return Object(o.openBlock)(),Object(o.createBlock)("main",null,[Object(o.createVNode)("div",r,[Object(o.renderSlot)(t.$slots,"default")])])}));var s={data:()=>({}),components:{},created(){},mounted(){},methods:{}};n(374);s.render=a,s.__scopeId="data-v-4d605d3f";e.a=s},376:function(t,e,n){"use strict";n(373)},377:function(t,e,n){"use strict";var o=n(1);const c=Object(o.withScopeId)("data-v-1196af06");Object(o.pushScopeId)("data-v-1196af06");const r={class:"simulator"};Object(o.popScopeId)();const a=c((function(t,e,n,c,a,s){return Object(o.openBlock)(),Object(o.createBlock)("div",r,[Object(o.createVNode)("iframe",{src:s.componentPath,title:"simulator",frameBorder:"0",style:{width:"375px",height:"667px"}},null,8,["src"])])}));var s={props:{url:{type:String,default:""}},computed:{componentPath(){return`${window.CONFIG.pathname}demo.html#/${this.url}`}}};n(376);s.render=a,s.__scopeId="data-v-1196af06";e.a=s},481:function(t,e,n){var o={"./3.0.0/panel.md":[409,96]};function c(t){if(!n.o(o,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[t],c=e[0];return n.e(e[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(o)},c.id=481,t.exports=c},554:function(t,e,n){"use strict";n.r(e);var o=n(1);var c=n(377),r={components:{Container:n(375).a,Simulator:c.a},data:()=>({path:null}),created(){const t=this.$store.state.version;this.path=this.$route.path.replace("/documents/","");const e=Object(o.defineAsyncComponent)(()=>n(481)(`./${t}/panel.md`));window.app.component("Demo",e)},render:function(t,e,n,c,r,a){const s=Object(o.resolveComponent)("Demo"),d=Object(o.resolveComponent)("Simulator"),i=Object(o.resolveComponent)("Container");return Object(o.openBlock)(),Object(o.createBlock)(i,null,{default:Object(o.withCtx)(()=>[Object(o.createVNode)(s),Object(o.createVNode)(d,{url:r.path},null,8,["url"])]),_:1})}};e.default=r}}]);