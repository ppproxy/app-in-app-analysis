var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 48 ], {
    1103: function(t, e, i) {
        "use strict";
        i.r(e), function(t) {
            t.currentModuleId = "m9db5b8da", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "m9db5b8da",
                render: function() {
                    this._c("isAd", this.isAd) && (!this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), 
                    this._c("isCustom", this.isCustom) || this._c("unitId", this.unitId)), this._r();
                }
            };
            i(428);
            t.currentModuleId;
        }.call(this, i(11));
    },
    428: function(t, e, i) {
        "use strict";
        var r = i(2), s = i(8), o = i(4);
        Object(r.b)({
            properties: {
                unitId: {
                    type: String,
                    value: ""
                },
                type: {
                    type: String,
                    value: "wechat:ad:banner"
                }
            },
            computed: {
                isCustom() {
                    return "wechat:ad:style" === this.type || (this.type, !1);
                }
            },
            data: {
                isAd: !0
            },
            methods: {
                adLoad(t) {
                    this.triggerEvent("adLoad"), o.a.track("bike_miniapp_msg_ad_wechat_sw", {
                        url: Object(s.j)(),
                        style: this.isCustom ? 2 : 1
                    });
                },
                adError(t) {
                    this.triggerEvent("adError"), o.a.track("tech_bike_miniapp_msg_ad_wechat_load_fail", {
                        url: Object(s.j)(),
                        errcode: t.detail.errCode
                    }), Object(s.u)("广告加载失败错误码", t.detail.errCode);
                },
                adClose(t) {
                    this.isAd = !1, this.triggerEvent("adClose"), o.a.track("bike_miniapp_msg_ad_wechat_close_ck", {
                        url: Object(s.j)(),
                        style: this.isCustom ? 2 : 1
                    });
                }
            }
        });
    }
}, [ [ 1103, 0 ] ] ]);
//# sourceMappingURL=index.js.map