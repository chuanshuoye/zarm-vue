(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{378:function(t,e,n){},379:function(t,e,n){},380:function(t,e,n){"use strict";n(378)},381:function(t,e,n){"use strict";var o=n(1);const c=Object(o.withScopeId)("data-v-4d605d3f");Object(o.pushScopeId)("data-v-4d605d3f");const r={class:"main-container"};Object(o.popScopeId)();const a=c((function(t,e,n,c,a,d){return Object(o.openBlock)(),Object(o.createBlock)("main",null,[Object(o.createVNode)("div",r,[Object(o.renderSlot)(t.$slots,"default")])])}));var d={data:()=>({}),components:{},created(){},mounted(){},methods:{}};n(380);d.render=a,d.__scopeId="data-v-4d605d3f";e.a=d},382:function(t,e,n){"use strict";n(379)},383:function(t,e,n){"use strict";var o=n(1);const c=Object(o.withScopeId)("data-v-c1ca9bcc");Object(o.pushScopeId)("data-v-c1ca9bcc");const r={class:"simulator"};Object(o.popScopeId)();const a=c((function(t,e,n,c,a,d){return Object(o.openBlock)(),Object(o.createBlock)("div",r,[Object(o.createVNode)("iframe",{id:"simulatorFrame",src:d.componentPath,title:"simulator",frameBorder:"0",style:{width:"375px",height:"667px"}},null,8,["src"])])}));var d={props:{url:{type:String,default:""}},computed:{componentPath(){return"dark"===(window.zarmTheme||"")?`${window.CONFIG.pathname}dark.html#/${this.url}`:`${window.CONFIG.pathname}demo.html#/${this.url}`}}};n(382);d.render=a,d.__scopeId="data-v-c1ca9bcc";e.a=d},489:function(t,e,n){var o={"./3.0.0/panel.md":[415,100]};function c(t){if(!n.o(o,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[t],c=e[0];return n.e(e[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(o)},c.id=489,t.exports=c},564:function(t,e,n){"use strict";n.r(e);var o=n(1);var c=n(383),r={components:{Container:n(381).a,Simulator:c.a},data:()=>({path:null}),created(){const t=this.$store.state.version;this.path=this.$route.path.replace("/documents/","");const e=Object(o.defineAsyncComponent)(()=>n(489)(`./${t}/panel.md`));window.app.component("Demo",e)},render:function(t,e,n,c,r,a){const d=Object(o.resolveComponent)("Demo"),s=Object(o.resolveComponent)("Simulator"),i=Object(o.resolveComponent)("Container");return Object(o.openBlock)(),Object(o.createBlock)(i,null,{default:Object(o.withCtx)(()=>[Object(o.createVNode)(d),Object(o.createVNode)(s,{url:r.path},null,8,["url"])]),_:1})}};e.default=r}}]);