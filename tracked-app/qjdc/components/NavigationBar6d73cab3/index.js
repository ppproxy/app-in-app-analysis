var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 39 ], {
    1090: function(t, e, i) {
        "use strict";
        i.r(e), function(t) {
            t.currentModuleId = "m6d73cab3", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "m6d73cab3",
                render: function() {
                    !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), "back" === this._c("type", this.type) && this._c("topStyle", this.topStyle), 
                    "my" !== this._c("type", this.type) && "indexback" !== this._c("type", this.type) || (this._c("titleBarColor", this.titleBarColor), 
                    "my" === this._c("type", this.type) && (this._c("isLogin", this.isLogin), this._c("isLogin", this.isLogin)), 
                    this._c("type", this.type)), "riding" === this._c("prePage", this.prePage) && this._c("searchBarHei", this.searchBarHei), 
                    this._r();
                }
            };
            i(417);
            t.currentModuleId;
        }.call(this, i(11));
    },
    417: function(t, e, i) {
        "use strict";
        var r = i(1), o = i.n(r), n = i(6), c = i.n(n), s = i(2), a = i(8), h = i(5), p = i(9), l = i(4), g = i(15), d = i(7), u = i.n(d);
        Object(s.b)({
            properties: {
                type: {
                    type: String,
                    value: "back"
                },
                prePage: {
                    type: String,
                    value: "back"
                },
                color: {
                    type: String,
                    value: "transparent"
                }
            },
            data: {
                topStyle: "",
                titleBarStyle: ""
            },
            methods: {
                goBackPage() {
                    "indexback" === this.type && getCurrentPages().length <= 1 ? wx.redirectTo({
                        url: "/home/pages/index"
                    }) : "returnBike" === this.prePage ? this.triggerEvent("closeFuseModel") : wx.navigateBack();
                },
                toSearch() {
                    Object(p.navigateTo)(g.u, {
                        prePage: "riding"
                    }), l.a.track("qj_wx_riding_search_ck", {
                        biz_type: u()(this.common, "curOrderInfo.bizType", 1)
                    }), this.triggerEvent("ridingStateCk", 1);
                },
                goPersonCenter(t) {
                    "level" != t && h.a.dispatch("setUserInfo", {
                        wxInfo: t.detail.userInfo
                    }), this.triggerEvent("goPersonCenter");
                }
            },
            computed: o()(o()({}, h.a.mapState([ "user", "common" ])), {}, {
                searchBarHei() {
                    var t, e = Object(a.h)(), i = e.top, r = e.height;
                    return c()(t = "position: fixed; top: ".concat(2 * i, "rpx; height: ")).call(t, 2 * r, "rpx;");
                },
                titleBarColor() {
                    var t = this.titleBarStyle;
                    return t += "background: ".concat(this.color, ";");
                },
                isLogin() {
                    return !!this.user.token;
                }
            }),
            ready() {
                try {
                    var t, e, i, r = Object(a.h)(), o = r.top, n = r.height;
                    this.topStyle = c()(t = c()(e = "position: fixed; top: ".concat(2 * o, "rpx; width: ")).call(e, 2 * n, "rpx; height: ")).call(t, 2 * n, "rpx;"), 
                    this.titleBarStyle = c()(i = "height: ".concat(160 + Object(a.m)(), "rpx; padding-top: ")).call(i, 2 * o, "rpx; ");
                } catch (t) {
                    console.log("navigationbar error", t);
                }
            }
        });
    }
}, [ [ 1090, 0 ] ] ]);
//# sourceMappingURL=index.js.map