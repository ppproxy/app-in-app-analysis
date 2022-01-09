(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], [ function(e, t, n) {
    (function(e) {
        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, o);
            }
            return n;
        }
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        n(4);
        var c = t(n(2)), u = t(n(5));
        n(9), c.default.config.productionTip = !1, u.default.mpType = "app", e(new c.default(function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach(function(t) {
                    r(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }({}, u.default))).$mount();
    }).call(this, n(1).createApp);
}, , , , , function(e, t, n) {
    n.r(t);
    var o = n(6);
    for (var r in o) "default" !== r && function(e) {
        n.d(t, e, function() {
            return o[e];
        });
    }(r);
    var c = n(8), u = Object(c.default)(o.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
    u.options.__file = "App.vue", t.default = u.exports;
}, function(e, t, n) {
    n.r(t);
    var o = n(7), r = n.n(o);
    for (var c in o) "default" !== c && function(e) {
        n.d(t, e, function() {
            return o[e];
        });
    }(c);
    t.default = r.a;
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var o = {
        onLaunch: function() {
            var e = wx.getUpdateManager();
            e.onCheckForUpdate(function(t) {
                t.hasUpdate && e.onUpdateReady(function(t) {
                    wx.showModal({
                        title: "更新提示",
                        content: "发现新版本，是否重启应用?",
                        success: function(t) {
                            t.confirm && e.applyUpdate();
                        }
                    });
                });
            }), e.onUpdateFailed(function(t) {
                wx.showModal({
                    title: "提示",
                    content: "新版本下载失败，请检查网络设置",
                    success: function(t) {
                        t.confirm && e.applyUpdate();
                    }
                });
            });
        },
        onShow: function() {},
        onHide: function() {}
    };
    t.default = o;
} ], [ [ 0, "common/runtime", "common/vendor" ] ] ]);