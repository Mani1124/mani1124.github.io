(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f55fab2a"],{"4bd4":function(t,e,s){"use strict";var r=s("58df"),a=s("7e2b"),i=s("3206");e["a"]=Object(r["a"])(a["a"],Object(i["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",r=>{r&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))}):s.valid=e(t),s},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const s=this.watchers.find(t=>t._uid===e._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"9b19":function(t,e,s){t.exports=s.p+"img/logo.63a7d78d.svg"},a523:function(t,e,s){"use strict";s("20f6"),s("4b85");var r=s("2b0e");function a(t){return r["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:s,data:r,children:a}){r.staticClass=`${t} ${r.staticClass||""}`.trim();const{attrs:i}=r;if(i){r.attrs={};const t=Object.keys(i).filter(t=>{if("slot"===t)return!1;const e=i[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(r.staticClass+=" "+t.join(" "))}return s.id&&(r.domProps=r.domProps||{},r.domProps.id=s.id),e(s.tag,r,a)}})}var i=s("d9f7");e["a"]=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:s,children:r}){let a;const{attrs:o}=s;return o&&(s.attrs={},a=Object.keys(o).filter(t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,Object(i["a"])(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(a||[])}),r)}})},abd3:function(t,e,s){},b920:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-breadcrumbs",{attrs:{items:t.items},scopedSlots:t._u([{key:"item",fn:function(e){var r=e.item;return[s("v-breadcrumbs-item",{staticStyle:{cursor:"pointer"},style:{color:t.$vuetify.theme.themes[t.$store.state.dark?"dark":"light"].primary},attrs:{disabled:r.disabled},on:{click:function(e){return t.$router.push(r.to)}}},[t._v(" "+t._s(r.text)+" ")])]}}])})},a=[],i={name:"breadcrumb",props:{items:{required:!0,type:Array}},data(){return{}},mounted(){console.log("items",this.items)}},o=i,n=s("2877"),d=s("6544"),l=s.n(d),u=(s("abd3"),s("1c87")),c=s("58df"),m=Object(c["a"])(u["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes(){return{"v-breadcrumbs__item":!0,[this.activeClass]:this.disabled}}},render(t){const{tag:e,data:s}=this.generateRouteLink();return t("li",[t(e,{...s,attrs:{...s.attrs,"aria-current":this.isActive&&this.isLink?"page":void 0}},this.$slots.default)])}}),p=s("80d2"),h=Object(p["i"])("v-breadcrumbs__divider","li"),f=s("7560"),b=Object(c["a"])(f["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:()=>[]},large:Boolean},computed:{classes(){return{"v-breadcrumbs--large":this.large,...this.themeClasses}}},methods:{genDivider(){return this.$createElement(h,this.$slots.divider?this.$slots.divider:this.divider)},genItems(){const t=[],e=!!this.$scopedSlots.item,s=[];for(let r=0;r<this.items.length;r++){const a=this.items[r];s.push(a.text),e?t.push(this.$scopedSlots.item({item:a})):t.push(this.$createElement(m,{key:s.join("."),props:a},[a.text])),r<this.items.length-1&&t.push(this.genDivider())}return t}},render(t){const e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}}),v=Object(n["a"])(o,r,a,!1,null,null,null);e["a"]=v.exports;l()(v,{VBreadcrumbs:b,VBreadcrumbsItem:m})},c7ba:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[this.$route.params.context?r("v-row",[r("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12"}},[r("breadcrumb",{attrs:{items:t.breadcrumbItems}})],1)],1):t._e(),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{staticClass:"xs",staticStyle:{margin:"0 auto"},attrs:{lg:"4",md:"6",sm:"12"}},[r("v-card",{staticClass:"mx-auto mt-5",attrs:{elevation:"5"}},[r("v-card-text",[r("div",{staticStyle:{padding:"15px","border-bottom-left-radius":"0px","border-bottom-right-radius":"0px","text-align":"center",position:"relative"}},[r("v-row",{staticClass:"mt-0",attrs:{justify:"center"}},[r("img",{staticStyle:{height:"80px",width:"70px"},attrs:{src:s("9b19"),alt:"Logo"}})]),r("h2",{staticClass:"text-md-center text-lg-center form-title mt-7"},[t._v(" "+t._s(t.$t("createyourount"))+" ")]),r("p",{staticClass:"font-weight-regular text-md-center text-lg-center body-1 mt-1"},[t._v(" Please fill in all the details ")])],1),r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{dense:"","prepend-inner-icon":"mdi-account",rules:t.rules.required,label:"Name",required:"",name:"name",outlined:""},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}}),r("v-text-field",{attrs:{dense:"","prepend-inner-icon":"mdi-email",rules:t.rules.required,label:"Email",required:"",name:"email",outlined:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),r("v-text-field",{attrs:{id:"otp",dense:"",type:t.showPassword?"text":"password",outlined:"","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",required:"",rules:t.rules.password,"prepend-inner-icon":"mdi-security",name:"password",label:"Password"},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),r("v-text-field",{attrs:{id:"otp",dense:"",type:t.showPassword2?"text":"password",outlined:"","append-icon":t.showPassword2?"mdi-eye":"mdi-eye-off",required:"",rules:[t.rules.password,t.passwordConfirmationRule],"prepend-inner-icon":"mdi-security",name:"password",label:"Confirm Password"},on:{"click:append":function(e){t.showPassword2=!t.showPassword2}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.validateForm.apply(null,arguments)}},model:{value:t.user.confirm_password,callback:function(e){t.$set(t.user,"confirm_password",e)},expression:"user.confirm_password"}})],1),r("v-btn",{staticClass:"mt-5 mb-5",attrs:{block:"",loading:t.submit,disabled:t.submit,color:"success"},on:{click:t.validateForm},scopedSlots:t._u([{key:"loader",fn:function(){return[r("span",{staticClass:"custom-loader"},[r("v-icon",{attrs:{light:""}},[t._v("mdi-cached")])],1)]},proxy:!0}])},[t._v(" Create ")])],1)],1)],1)],1)],1)},a=[],i=s("d4ac"),o=s("b920"),n={name:"user-sign-in-form",components:{breadcrumb:o["a"]},data(){return{breadcrumbItems:[{text:"Home",disabled:!1,to:{name:"Dashboard"}},{text:"Registration",disabled:!0,to:{name:"PageRegistration"}}],submit:!1,valid:!0,showPassword:!1,showPassword2:!1,user:{name:null,email:null,password:null,confirm_password:null},rules:{email:[t=>!!t||"Email is required"],required:[t=>!!t||"This field is required"],password:[t=>!!t||"Password is required"],confirm_password:[t=>!!t||"Confirm password is required"]}}},computed:{passwordConfirmationRule(){return this.user.password===this.user.confirm_password||"Password must match"}},mounted(){},methods:{getLogin(){this.$Progress.start(),this.submit=!1,this.$Progress.finish(),this.$refs.form.resetValidation(),console.log("token",Object(i["a"])(100)),this.$store.dispatch("setAuthenticatedData",{token:Object(i["a"])(100),user:{name:"John Doe",email:"vue-admin-template@domain.com"}}),this.$store.dispatch("setActiveNavigation","Dashboard"),this.$router.push({name:"Dashboard"})},resetPassword(){console.log("param",this.$route.params),this.$route.params.context||this.$router.push({name:"ForgetPassword"})},validateForm(){this.$refs.form.validate()&&(this.$route.params.context||this.getLogin())}}},d=n,l=s("2877"),u=s("6544"),c=s.n(u),m=s("8336"),p=s("b0af"),h=s("99d9"),f=s("62ad"),b=s("a523"),v=s("4bd4"),g=s("132d"),w=s("0fd9"),y=s("8654"),x=Object(l["a"])(d,r,a,!1,null,null,null);e["default"]=x.exports;c()(x,{VBtn:m["a"],VCard:p["a"],VCardText:h["b"],VCol:f["a"],VContainer:b["a"],VForm:v["a"],VIcon:g["a"],VRow:w["a"],VTextField:y["a"]})},d4ac:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));const r=t=>{let e="",s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=s.length;for(let a=0;a<t;a++)e+=s.charAt(Math.floor(Math.random()*r));return e}}}]);
//# sourceMappingURL=chunk-f55fab2a.e80cfa28.js.map