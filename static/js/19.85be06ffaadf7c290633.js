(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{643:function(t,e,n){},644:function(t,e,n){},645:function(t,e,n){"use strict";var a=n(643);n.n(a).a},646:function(t,e,n){"use strict";var a={data:()=>({}),components:{},created(){},mounted(){},methods:{}},i=(n(645),n(0)),s=Object(i.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("div",{staticClass:"main-container"},[this._t("default")],2)])},[],!1,null,"4d605d3f",null);e.a=s.exports},647:function(t,e,n){"use strict";var a=n(644);n.n(a).a},648:function(t,e,n){"use strict";var a={props:{url:{type:String,default:""}},computed:{componentPath(){return`${window.CONFIG.pathname}demo.html#/${this.url}`}}},i=(n(647),n(0)),s=Object(i.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"simulator"},[e("iframe",{staticStyle:{width:"375px",height:"667px"},attrs:{src:this.componentPath,title:"simulator",frameBorder:"0"}})])},[],!1,null,"1196af06",null);e.a=s.exports},788:function(t,e,n){"use strict";n.r(e);var a=n(2),i=n(648),s={components:{Container:n(646).a,Simulator:i.a},data:()=>({path:null}),created(){const t=this.$store.state.version;this.path=this.$route.path.replace("/documents/",""),a.default.component("Demo",function(e,a){n.e(78).then(function(){var a=[n(737)(`./${t}/carousel.md`)];e.apply(null,a)}.bind(this)).catch(n.oe)})}},r=n(0),o=Object(r.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("Container",[e("Demo"),this._v(" "),e("Simulator",{attrs:{url:this.path}})],1)},[],!1,null,null,null);e.default=o.exports}}]);