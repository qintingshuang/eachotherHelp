webpackJsonp([6, 73], {
  29: function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
      data: function () {
        return {
          lists: [{
            tit: "",
            img: "static\\img\\loanBanner2.2bd63e8.jpg",
            isOn: !1,
            href: "https://cgtzfiles.b0.upaiyun.com/cgjr/jrwx/html/huodong/sjRename.html"
          }, {
            tit: "",
            img: "https://cgtzimage.b0.upaiyun.com/191810/00/00/42/2016/10/21/AB697121-9758-072D-0C6F-28711778485A.jpg",
            isOn: !1,
            href: "https://cgtzfiles.b0.upaiyun.com/cgjr/jrwx/html/huodong/autoPay.html"
          }],
          hasTouch: "ontouchstart" in window,
          goTouchStart: "ontouchstart" in window ? "touchstart" : "mousedown",
          goTouchMove: "ontouchstart" in window ? "touchmove" : "mousemove",
          goTouchEnd: "ontouchstart" in window ? "touchend" : "mouseup",
          eachLeft: {},
          index: 0,
          flag: !1,
          $width: 0,
          $length: 0,
          $start: 0,
          $end: 0
        }
      }, methods: {
        tStart: function (t) {
          t.preventDefault(), this.flag = !0, this.$start = this.hasTouch ? t.changedTouches[0].screenX : t.screenX
        }, tMove: function (t) {
          this.flag && (this.$end = this.hasTouch ? t.changedTouches[0].screenX : t.screenX, (this.$end - this.$start > 0 && 0 != this.index || this.$end - this.$start < 0 && this.index != this.$length - 1) && (this.$refs.ul.style.marginLeft = this.eachLeft[this.index] + this.$end - this.$start + "px"))
        }, tEnd: function (t) {
          this.flag === !0 && (this.flag = !1, this.$end = this.hasTouch ? t.changedTouches[0].screenX : t.screenX, this.$end - this.$start > 20 ? (0 !== this.index && (this.lists[this.index].isOn = !1, this.index--, this.lists[this.index].isOn = !0), this.goAnimate(parseInt(this.$refs.ul.style.marginLeft), this.eachLeft[this.index])) : this.$start - this.$end > 20 ? (this.index !== this.$length - 1 && (this.lists[this.index].isOn = !1, this.index++, this.lists[this.index].isOn = !0), this.goAnimate(parseInt(this.$refs.ul.style.marginLeft), this.eachLeft[this.index])) : (console.log("效果测试用的新窗口打开，【实际需要router/本窗口打开其它链接】"), window.open(this.lists[this.index].href, "_blank"), this.goAnimate(parseInt(this.$refs.ul.style.marginLeft), this.eachLeft[this.index])))
        }, goAnimate: function (t, e) {
          var n = e - t, s = 200, i = 0, o = 10, r = n / s * o, h = this, a = setInterval(function () {
            i += o, i == s ? (clearInterval(a), h.$refs.ul.style.marginLeft = e + "px") : (t += r, h.$refs.ul.style.marginLeft = t + "px")
          }, o)
        }
      }, mounted: function () {
        this.$width = this.$refs.banner.clientWidth, this.$length = this.$refs.ul.childElementCount, this.lists[this.index].isOn = !0;
        for (var t = 0; t < this.$length; t++) this.eachLeft[t] = -this.$width * t;
        this.$refs.banner.children[0].children[0].style.width = this.$width + "px";
        for (var e = this, n = document.getElementById("bannerTag").getElementsByTagName("span"), s = document.getElementById("banner"), t = 0; t < n.length; t++) n[t].idx = t, n[t].addEventListener(this.goTouchStart, function (t) {
          t.stopPropagation(), e.index !== this.idx && (e.lists[e.index].isOn = !1, e.index = this.idx, e.lists[e.index].isOn = !0, e.goAnimate(parseInt(e.$refs.ul.style.marginLeft), e.eachLeft[e.index]))
        });
        s.addEventListener(this.goTouchStart, this.tStart), document.addEventListener(this.goTouchMove, this.tMove), document.addEventListener(this.goTouchEnd, this.tEnd)
      }, beforeDestroy: function () {
        document.removeEventListener(this.goTouchMove, this.tMove), document.removeEventListener(this.goTouchEnd, this.tEnd)
      }
    }
  }, 70: function (t, e, n) {
    "use strict";

    function s(t) {
      return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(170), o = s(i);
    e.default = {
      data: function () {
        return {
          list: [{cls: "", tit: "微额借款", con: "金额500、1000元，期限7天、14天、21天", push: "/loan/micro"}, {
            cls: "icon02",
            tit: "小额借款",
            con: "最高金额5000元，最长期限6个月",
            push: "/loan/samll"
          }, {cls: "icon03", tit: "相互借福利借款", con: "最高金额10000元，期限30天", push: "/loan/large"}]
        }
      }, components: {loanBanner: o.default}, mounted: function () {
        document.body.scrollTop = 0
      }
    }
  }, 170: function (t, e, n) {
    var s, i;
    s = n(29);
    var o = n(324);
    i = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (i = s = s.default), "function" == typeof i && (i = i.options), i.render = o.render, i.staticRenderFns = o.staticRenderFns, t.exports = s
  }, 215: function (t, e, n) {
    var s, i;
    s = n(70);
    var o = n(341);
    i = s = s || {}, "object" != typeof s.default && "function" != typeof s.default || (i = s = s.default), "function" == typeof i && (i = i.options), i.render = o.render, i.staticRenderFns = o.staticRenderFns, t.exports = s
  }, 324: function (t, e) {
    t.exports = {
      render: function () {
        var t = this, e = t.$createElement;
        return e("div", {ref: "banner", staticClass: "indexBanner", attrs: {id: "banner"}}, [e("ul", {
          ref: "ul",
          staticStyle: {"margin-left": "0"}
        }, [t._l(t.lists, function (t) {
          return e("li", [e("img", {attrs: {src: t.img, alert: t.tit}})])
        })]), " ", e("div", {staticClass: "tag", attrs: {id: "bannerTag"}}, [t._l(t.lists, function (n, s) {
          return [e("span", {class: {on: n.isOn}}, [t._s(s + 1)])]
        })])])
      }, staticRenderFns: []
    }
  }, 341: function (t, e) {
    t.exports = {
      render: function () {
        var t = this, e = t.$createElement;
        return e("div", {staticClass: "container"}, [e("topComponent", {
          attrs: {
            title: "相互借",
            showLeft: !1
          }
        }), " ", e("loanBanner"), " ", e("ul", {staticClass: "indexList mt20"}, [t._l(t.list, function (n) {
          return e("li", {
            class: n.cls, on: {
              click: function (e) {
                t.$router.push(n.push)
              }
            }
          }, [e("b", [t._s(n.tit)]), t._s(n.con)])
        })]), " ", e("footComponent", {attrs: {idx: 0}})])
      }, staticRenderFns: []
    }
  }
});
