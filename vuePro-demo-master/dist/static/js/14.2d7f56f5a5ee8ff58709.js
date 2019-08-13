webpackJsonp([14,73],{1:function(t,a,e){t.exports={default:e(2),__esModule:!0}},2:function(t,a,e){var s=e(3),i=s.JSON||(s.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},40:function(t,a,e){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var i=e(1),n=s(i);a.default={data:function(){return{hasCard:!1,name:"",id:"",data:{cardId:"",phone:"",province:"请选择省",city:"请选择市",bankSub:"请选择开户行"},regDef:/请选择/,diglogShow:!1,diglogClass:"sort",diglogCont:"　"}},methods:{nextStep:function(){var t=/^(\d{16}|\d{19})$/,a=/^[1][3578][0-9]{9}$/;0==t.test(this.data.cardId)?this.callDialog("银行卡号格式不对"):0==a.test(this.data.phone)?this.callDialog("手机号码格式不对"):this.regDef.test(this.data.province)?this.callDialog("请选择开户省"):this.regDef.test(this.data.city)?this.callDialog("请选择开户市"):this.regDef.test(this.data.bankSub)?this.callDialog("请选择开户行"):(this.$store.commit("uploadCreditStatu",{name:"userBank",val:!0}),this.$store.commit("uploadCreditData",{name:"userBankTemp",val:(0,n.default)(this.data)}),this.$router.push("/credit/bankSMS"))},goDetail:function(){this.$router.push("/credit/bankDetail")}},mounted:function(){document.body.scrollTop=0,this.name="测试数据",this.id="320721199010022431",this.$store.state.creditStatus.userBank===!0&&(this.hasCard=!0)}}},183:function(t,a,e){var s,i;s=e(40);var n=e(260);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,t.exports=s},260:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;return a("div",{staticClass:"container"},[a("topComponent",{attrs:{title:"添加银行卡"}},[a("span",{staticClass:"save",on:{click:function(a){t.$router.push("/credit/bankHelp")}},slot:"right"},["帮助"])])," ",t.hasCard?t._e():[a("p",{staticClass:"listTop bg-blue"},["目前支持16家银行的储蓄卡，",a("span",{staticClass:"blue txtline",on:{click:function(a){t.$router.push("/credit/support")}}},["查看支持银行"])])," ",a("p",{staticClass:"listTop"},["请输入银行卡号添加银行卡的过程中，需要从您的银行卡暂扣3元到我们平台的资金账户, 添加银行卡成功之后，暂扣的3元会在24小时之内归还到您的银行卡中去"])," ",a("ul",{staticClass:"formCom"},[a("li",[a("label",[a("span",["姓名"])," ",a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:t._s(t.name)},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}})])])," ",a("li",[a("label",[a("span",["身份证"])," ",a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:t._s(t.id)},on:{input:function(a){a.target.composing||(t.id=a.target.value)}}})])])])," ",a("ul",{staticClass:"formCom mt20"},[a("li",[a("label",[a("span",["收款银行卡"])," ",a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.data.cardId,expression:"data.cardId",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"本人银行卡卡号"},domProps:{value:t._s(t.data.cardId)},on:{input:function(a){a.target.composing||(t.data.cardId=a.target.value.trim())}}})])])," ",a("li",[a("label",[a("span",["手机号码"])," ",a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.data.phone,expression:"data.phone",modifiers:{number:!0}}],attrs:{type:"number",placeholder:"银行卡预留手机号"},domProps:{value:t._s(t.data.phone)},on:{input:function(a){a.target.composing||(t.data.phone=t._n(a.target.value))}}})])])])," ",a("p",{staticClass:"listTop"},["开户行详情"])," ",a("ul",{staticClass:"formCom"},[a("li",{staticClass:"icon-arrow"},[a("span",["开户省"])," ",a("p",{staticClass:"gray",class:{col6:0==t.regDef.test(t.data.province)}},[t._s(t.data.province)])," ",a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.province,expression:"data.province"}],on:{change:function(a){t.data.province=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a})[0]}}},[a("option",["江苏省"])])])," ",a("li",{staticClass:"icon-arrow"},[a("span",["开户市"])," ",a("p",{staticClass:"gray",class:{col6:0==t.regDef.test(t.data.city)}},[t._s(t.data.city)])," ",a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.city,expression:"data.city"}],on:{change:function(a){t.data.city=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a})[0]}}},[a("option",["江苏省"])])])," ",a("li",{staticClass:"icon-arrow"},[a("span",["开户行"])," ",a("p",{staticClass:"gray",class:{col6:0==t.regDef.test(t.data.bankSub)}},[t._s(t.data.bankSub)])," ",a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.bankSub,expression:"data.bankSub"}],on:{change:function(a){t.data.bankSub=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a})[0]}}},[a("option",["江苏省"])])])])," ",a("div",{staticClass:"btnWarp"},[a("span",{staticClass:"subBtn",attrs:{getData:t.data},on:{click:t.nextStep}},["下一步"])])]," ",t.hasCard?[a("div",{staticClass:"bankList bank60 mt20",on:{click:t.goDetail}},[a("b",["建设银行"]),a("span",["尾号 2118"]),a("b",{staticClass:"bank-pay1 blue fr"},["收款卡"])," ",a("p",["限额：单笔1.00万元,单日2.00万元,单月3.00万元"])])]:t._e()," ",a("transition",{attrs:{name:"scale"}},[a("dialogPopup",{directives:[{name:"show",rawName:"v-show",value:t.diglogShow,expression:"diglogShow"}],class:t.diglogClass,attrs:{msg:t.diglogCont}})])])},staticRenderFns:[]}}});