webpackJsonp([43,73],{68:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{allCls:"plus-two",list:[{cls:"icon-info",tit:"完善信息",push:"/credit/userInfo",isOk:!1,param:"userInfo"},{cls:"icon-credit",tit:"查询央行征信",push:"/creditReport",isOk:!1,param:"userCredit"},{cls:"icon-bank",tit:"银行卡信息",push:"/credit/bankInfo",isOk:!1,param:"userBank"},{cls:"icon-alipay",tit:"支付宝认证",push:"/credit/alipay",isOk:!1,param:"userIdpic"},{cls:"icon-fund",tit:'<span class="tit">储蓄卡流水导入</span><em class="bot">推荐导入工资卡，需要开通网银</em>',push:"/credit/gjjCity",isOk:!1,param:"userFund"},{cls:"icon-chuxu",tit:"储蓄卡流水导入",push:"/credit/waterBank",isOk:!1,param:"userChuxu"},{cls:"icon-other",tit:"其他资料",push:"/credit/otherData",isOk:!1,param:"userOhter"}]}},methods:{findLocal:function(t){for(var s=0;s<t.length;s++)t[s].isOk=this.$store.state.creditStatus[t[s].param]}},mounted:function(){this.findLocal(this.list)}}},213:function(t,s,i){var e,a;e=i(68);var n=i(271);a=e=e||{},"object"!=typeof e.default&&"function"!=typeof e.default||(a=e=e.default),"function"==typeof a&&(a=a.options),a.render=n.render,a.staticRenderFns=n.staticRenderFns,t.exports=e},271:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return s("div",{staticClass:"container"},[s("topComponent",{attrs:{title:"选填资料"}})," ",t._m(0)," ",s("ul",{staticClass:"listCom list-arrow list-icon list-plus no-top"},[t._l(t.list,function(i){return s("listComponent",{class:[t.allCls,i.cls],attrs:{title:i.tit},on:{click:function(s){t.$router.push(i.push)}}},[s("template",{slot:"right"},[s("i",{directives:[{name:"show",rawName:"v-show",value:i.isOk,expression:"data.isOk"}],staticClass:"hasSuc"},["已完成"])])])})])])},staticRenderFns:[function(){var t=this,s=t.$createElement;return s("div",{staticClass:"listTop"},[s("p",{staticClass:"tCenter col9"},["填写更多资料，审核通过率更高，借款费率更低"])])}]}}});