webpackJsonp([60,73],{38:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{name:"",pass:"",diglogShow:!1,diglogClass:"sort",diglogCont:"　"}},methods:{goSubmit:function(){var t=this,e=/[#\$%\^&\*]/;this.name.length<=6||e.test(this.name)===!0?this.callDialog("用户名不合法"):this.pass.length<=6||e.test(this.pass)===!0?this.callDialog("密码不合法"):(this.callDialog("需对接支付宝接口","true",1500),setTimeout(function(){t.$router.back()},2e3))}},mounted:function(){}}},180:function(t,e,s){var a,i;a=s(38);var o=s(343);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=a},343:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"container"},[e("topComponent",{attrs:{title:"支付宝认证"}})," ",e("ul",{staticClass:"formCom mt20"},[e("li",[e("label",[e("span",["支付宝账号"])," ",e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.name,expression:"name",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请输入支付宝账号"},domProps:{value:t._s(t.name)},on:{input:function(e){e.target.composing||(t.name=e.target.value.trim())}}})])])," ",e("li",[e("label",[e("span",["密码"])," ",e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.pass,expression:"pass",modifiers:{trim:!0}}],attrs:{type:"password",placeholder:"请输入支付宝密码"},domProps:{value:t._s(t.pass)},on:{input:function(e){e.target.composing||(t.pass=e.target.value.trim())}}})])])])," ",e("div",{staticClass:"btnWarp"},[e("span",{staticClass:"subBtn",on:{click:t.goSubmit}},["确认提交"])])," ",e("p",{staticClass:"formTips"},["温馨提示：我们会严格保护您的隐私，您的账号信息不会被记录"])," ",e("transition",{attrs:{name:"scale"}},[e("dialogPopup",{directives:[{name:"show",rawName:"v-show",value:t.diglogShow,expression:"diglogShow"}],class:t.diglogClass,attrs:{msg:t.diglogCont}})])])},staticRenderFns:[]}}});