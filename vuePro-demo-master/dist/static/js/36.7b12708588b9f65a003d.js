webpackJsonp([36,73],{83:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{data:{},knowShow:!1}},filters:{filterBankId:function(t){if(void 0==t)return"暂无";var a=t.substring(0,4),n=t.substring(4,8),s=t.substring(8,12),o=t.substring(12,16),e=t.substring(16,18);return a+" "+n+" "+s+" "+o+" "+e}},mounted:function(){var t=this.$route.params.id;this.data=JSON.parse(this.$store.state.borrowDetail[t])}}},230:function(t,a,n){var s,o;s=n(83);var e=n(333);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(o=s=s.default),"function"==typeof o&&(o=o.options),o.render=e.render,o.staticRenderFns=e.staticRenderFns,t.exports=s},333:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;return a("div",{staticClass:"container"},[a("topComponent",{attrs:{title:"更多详情"}},[a("span",{staticClass:"save",on:{click:function(a){t.$router.push("/user/repayRecord")}},slot:"right"},["还款记录"])])," ",a("div",{staticClass:"borrowInfoDetail"},[1===t.data.repayType?[a("p",["项目编号",a("span",[t._s(t.data.orderNo)])])," ",a("p",["申请金额(元)",a("i",{staticClass:"queryIcon",on:{click:function(a){t.alertKnow("sqje")}}},["?"]),a("span",[t._s(t.data.applyAmount)])])," ",a("p",["借款期限(天)",a("span",[t._s(t.data.borrowLimit)])])," ",a("p",["放款时间",a("span",[t._s(t.data.loanTime?t.data.loanTime:"待定")])])," ",a("p",["收款银行卡",a("i",{staticClass:"queryIcon",on:{click:function(a){t.alertKnow("skyhk")}}},["?"]),a("span",[t._s(t._f("filterBankId")(t.data.bankCard))])])," ",a("p",["逾期违约金(元)",a("span",[t._s(t.data.breachAmount?t.data.breachAmount:0)])])," ",a("p",["已归还金额(元)",a("span",[t._s(t.data.refundAmount?t.data.refundAmount:0)])])," ",a("p",["未归还金额(元)",a("span",[t._s(t.data.leftAmount?t.data.leftAmount:0)])])," ",a("p",["可用保证金(元)",a("i",{staticClass:"queryIcon",on:{click:function(a){t.alertKnow("kybzj")}}},["?"]),a("span",[t._s(t.data.rcvedDepositAmt-t.data.usedDepositAmt)])])]:[a("p",["申请金额(元)",a("i",{staticClass:"queryIcon",on:{click:function(a){t.alertKnow("sqje")}}},["?"]),a("span",[t._s(t.data.applyAmount)])])," ",a("p",["借款期限(月)",a("span",[t._s(t.data.borrowLimit)])])," ",a("p",["借款年利率(%)",a("span",[t._s(t.data.rate)])])," ",a("p",["收款银行卡",a("i",{staticClass:"queryIcon",on:{click:function(a){t.alertKnow("skyhk")}}},["?"]),a("span",[t._s(t._f("filterBankId")(t.data.bankCard))])])," ",a("p",["放款时间",a("span",[t._s(t.data.loanTime?t.data.loanTime:"待定")])])," ",a("p",["剩余期数(月)",a("span",[t._s(t.data.borrowLimit)])])," ",a("p",["项目编号",a("span",[t._s(t.data.orderNo)])])," ",a("p",["可用保证金(元)",a("i",{staticClass:"queryIcon",on:{click:function(a){t.alertKnow("kybzj")}}},["?"]),a("span",[t._s(t.data.rcvedDepositAmt-t.data.usedDepositAmt)])])]," "])," ",t.knowShow?a("alertKnow",{attrs:{title:t.knowTit,content:t.knowCon},on:{goHide:function(a){t.knowShow=!t.knowShow}}}):t._e()])},staticRenderFns:[]}}});