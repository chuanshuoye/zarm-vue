(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{537:function(t,e,n){},538:function(t,e,n){},539:function(t,e,n){"use strict";n(537)},540:function(t,e,n){"use strict";var c=n(0);const o=Object(c.N)("data-v-4d605d3f");Object(c.w)("data-v-4d605d3f");const r={class:"main-container"};Object(c.u)();const a=o((function(t,e,n,o,a,i){return Object(c.t)(),Object(c.e)("main",null,[Object(c.i)("div",r,[Object(c.A)(t.$slots,"default")])])}));var i={data:()=>({}),components:{},created(){},mounted(){},methods:{}};n(539);i.render=a,i.__scopeId="data-v-4d605d3f";e.a=i},541:function(t,e,n){"use strict";n(538)},542:function(t,e,n){"use strict";var c=n(0);const o=Object(c.N)("data-v-1196af06");Object(c.w)("data-v-1196af06");const r={class:"simulator"};Object(c.u)();const a=o((function(t,e,n,o,a,i){return Object(c.t)(),Object(c.e)("div",r,[Object(c.i)("iframe",{src:i.componentPath,title:"simulator",frameBorder:"0",style:{width:"375px",height:"667px"}},null,8,["src"])])}));var i={props:{url:{type:String,default:""}},computed:{componentPath(){return`${window.CONFIG.pathname}demo.html#/${this.url}`}}};n(541);i.render=a,i.__scopeId="data-v-1196af06";e.a=i},641:function(t,e,n){var c={"./3.0.0/calendar.md":[570,85]};function o(t){if(!n.o(c,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=c[t],o=e[0];return n.e(e[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(c)},o.id=641,t.exports=o},714:function(t,e,n){"use strict";n.r(e);var c=n(0);var o=n(542),r={components:{Container:n(540).a,Simulator:o.a},data:()=>({path:null}),created(){const t=this.$store.state.version;this.path=this.$route.path.replace("/documents/","");const e=Object(c.j)(()=>n(641)(`./${t}/calendar.md`));window.app.component("Demo",e)},render:function(t,e,n,o,r,a){const i=Object(c.B)("Demo"),u=Object(c.B)("Simulator"),s=Object(c.B)("Container");return Object(c.t)(),Object(c.e)(s,null,{default:Object(c.K)(()=>[Object(c.i)(i),Object(c.i)(u,{url:r.path},null,8,["url"])]),_:1})}};e.default=r}}]);