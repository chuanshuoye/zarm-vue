(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{537:function(t,e,n){},538:function(t,e,n){},539:function(t,e,n){"use strict";n(537)},540:function(t,e,n){"use strict";var o=n(0);const c=Object(o.N)("data-v-4d605d3f");Object(o.w)("data-v-4d605d3f");const r={class:"main-container"};Object(o.u)();const a=c((function(t,e,n,c,a,u){return Object(o.t)(),Object(o.e)("main",null,[Object(o.i)("div",r,[Object(o.A)(t.$slots,"default")])])}));var u={data:()=>({}),components:{},created(){},mounted(){},methods:{}};n(539);u.render=a,u.__scopeId="data-v-4d605d3f";e.a=u},541:function(t,e,n){"use strict";n(538)},542:function(t,e,n){"use strict";var o=n(0);const c=Object(o.N)("data-v-1196af06");Object(o.w)("data-v-1196af06");const r={class:"simulator"};Object(o.u)();const a=c((function(t,e,n,c,a,u){return Object(o.t)(),Object(o.e)("div",r,[Object(o.i)("iframe",{src:u.componentPath,title:"simulator",frameBorder:"0",style:{width:"375px",height:"667px"}},null,8,["src"])])}));var u={props:{url:{type:String,default:""}},computed:{componentPath(){return`${window.CONFIG.pathname}demo.html#/${this.url}`}}};n(541);u.render=a,u.__scopeId="data-v-1196af06";e.a=u},658:function(t,e,n){var o={"./3.0.0/popup.md":[563,97]};function c(t){if(!n.o(o,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[t],c=e[0];return n.e(e[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(o)},c.id=658,t.exports=c},731:function(t,e,n){"use strict";n.r(e);var o=n(0);var c=n(542),r={components:{Container:n(540).a,Simulator:c.a},data:()=>({path:null}),created(){const t=this.$store.state.version;this.path=this.$route.path.replace("/documents/","");const e=Object(o.j)(()=>n(658)(`./${t}/popup.md`));window.app.component("Demo",e)},render:function(t,e,n,c,r,a){const u=Object(o.B)("Demo"),i=Object(o.B)("Simulator"),s=Object(o.B)("Container");return Object(o.t)(),Object(o.e)(s,null,{default:Object(o.K)(()=>[Object(o.i)(u),Object(o.i)(i,{url:r.path},null,8,["url"])]),_:1})}};e.default=r}}]);