webpackJsonp([27, 73], {
  72: function (t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0}), n.default = {
      data: function () {
        return {title: "微额借款", content: "应急首选，解你燃眉之急"}
      }, methods: {
        goFillData: function () {
          this.$router.push("/loan/dataMust")
        }
      }
    }
  }, 158: function (t, n, e) {
    t.exports = e.p + "static/img/loanBanner1.52bb9bb.jpg"
  }, 217: function (t, n, e) {
    var a, o;
    a = e(72);
    var s = e(305);
    o = a = a || {}, "object" != typeof a.default && "function" != typeof a.default || (o = a = a.default), "function" == typeof o && (o = o.options), o.render = s.render, o.staticRenderFns = s.staticRenderFns, t.exports = a
  }, 305: function (t, n, e) {
    t.exports = {
      render: function () {
        var t = this, n = t.$createElement;
        return n("div", {staticClass: "container no-top"}, [n("loanBanner", {
          attrs: {
            tit: t.title,
            des: t.content
          }
        }, [n("img", {
          attrs: {src: e(158)},
          slot: "banner"
        })]), " ", n("loanDetail", {attrs: {uid: "micro"}}, [n("span", {
          staticClass: "subBtn",
          on: {click: t.goFillData},
          slot: "apply"
        }, ["申请借款"])])])
      }, staticRenderFns: []
    }
  }
});
