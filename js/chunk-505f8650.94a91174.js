(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-505f8650"],{"4bd4":function(t,e,a){"use strict";var r=a("58df"),i=a("7e2b"),s=a("3206");e["a"]=Object(r["a"])(i["a"],Object(s["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",r=>{r&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))}):a.valid=e(t),a},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const a=this.watchers.find(t=>t._uid===e._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},a523:function(t,e,a){"use strict";a("20f6"),a("4b85");var r=a("2b0e");function i(t){return r["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:a,data:r,children:i}){r.staticClass=`${t} ${r.staticClass||""}`.trim();const{attrs:s}=r;if(s){r.attrs={};const t=Object.keys(s).filter(t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(r.staticClass+=" "+t.join(" "))}return a.id&&(r.domProps=r.domProps||{},r.domProps.id=a.id),e(a.tag,r,i)}})}var s=a("d9f7");e["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:a,children:r}){let i;const{attrs:n}=a;return n&&(a.attrs={},i=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(a.domProps=a.domProps||{},a.domProps.id=e.id),t(e.tag,Object(s["a"])(a,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(i||[])}),r)}})},cccf:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{outlined:"",tile:""}},[a("v-card-title",{staticClass:"text-h6"},[t._v(" Account Settings ")]),a("v-card-subtitle",[t._v(" Update your username and manage your account ")]),a("v-card-text",[a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"8"}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{outlined:"",dense:"",rules:t.rules.required,label:"Username",required:""},model:{value:t.account.username,callback:function(e){t.$set(t.account,"username",e)},expression:"account.username"}}),a("v-text-field",{attrs:{outlined:"",dense:"",rules:t.rules.required,label:"Login Mail",required:""},model:{value:t.account.email,callback:function(e){t.$set(t.account,"email",e)},expression:"account.email"}}),a("v-btn",{attrs:{color:"error"}},[t._v(" Delete your account? ")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""}},[t._v(" Cancel ")]),a("v-btn",{attrs:{color:"primary"}},[t._v(" Save ")])],1)],1)],1)],1)],1)],1)},i=[],s={data(){return{valid:!0,account:{username:"John Doe",email:"johndoe@example.com"},rules:{required:[t=>!!t||"This field is required"]}}}},n=s,o=a("2877"),d=a("6544"),l=a.n(d),u=a("8336"),c=a("b0af"),h=a("99d9"),f=a("62ad"),p=a("a523"),v=a("4bd4"),m=a("0fd9"),b=a("2fa4"),g=a("8654"),V=Object(o["a"])(n,r,i,!1,null,null,null);e["default"]=V.exports;l()(V,{VBtn:u["a"],VCard:c["a"],VCardActions:h["a"],VCardSubtitle:h["b"],VCardText:h["c"],VCardTitle:h["d"],VCol:f["a"],VContainer:p["a"],VForm:v["a"],VRow:m["a"],VSpacer:b["a"],VTextField:g["a"]})}}]);
//# sourceMappingURL=chunk-505f8650.94a91174.js.map