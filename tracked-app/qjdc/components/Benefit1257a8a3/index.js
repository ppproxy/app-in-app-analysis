var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 26 ], {
    1108: function(e, t, o) {
        "use strict";
        o.r(t), function(e) {
            e.currentModuleId = "m1257a8a3", e.currentCtor = Component, e.currentResourceType = "component", 
            e.currentCtorType = "component", e.currentSrcMode = "wx", e.currentInject = {
                moduleId: "m1257a8a3",
                render: function() {
                    this._c("isShowAd", this.isShowAd) && (!this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), 
                    this._c("enableAd", this.enableAd), this._c("welfareAdShow", this.welfareAdShow)), 
                    this._r();
                }
            };
            o(432);
            e.currentModuleId;
        }.call(this, o(11));
    },
    432: function(e, t, o) {
        "use strict";
        var n = o(3), r = o.n(n), s = o(0), i = o.n(s), a = o(2), d = (o(4), o(30));
        Object(a.b)({
            properties: {},
            data: {
                welfareAdShow: !1,
                isShowAd: !1,
                enableAd: !1
            },
            methods: {
                adLoad(e) {
                    console.log("福利组件加载成功了"), this.welfareAdShow = !0;
                },
                adError(e) {
                    console.log("福利组件加载失败", e.detail.errCode), this.welfareAdShow = !1, this.isShowAd = !1, 
                    d.a.emit("closeBenefit");
                },
                adClose(e) {
                    console.log("关闭福利组件"), this.isShowAd = !1, this.welfareAdShow = !1, d.a.emit("closeBenefit");
                },
                getAdStatus() {
                    var e = this;
                    d.a.on("showBenefitCom", function() {
                        var t = r()(i.a.mark(function t(o) {
                            var n, r;
                            return i.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    n = o.showBenefit, r = o.enableAd, n && (e.isShowAd = !0, e.enableAd = r);

                                  case 2:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }());
                }
            },
            created() {
                this.getAdStatus();
            }
        });
    }
}, [ [ 1108, 0 ] ] ]);
//# sourceMappingURL=index.js.map