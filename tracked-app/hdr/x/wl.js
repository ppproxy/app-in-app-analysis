var t = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../@babel/runtime/helpers/objectSpread2"), a = require("../@babel/runtime/helpers/toArray"), i = require("../@babel/runtime/helpers/typeof"), n = t(require("../m/zl/59")), o = t(require("../m/zl/5o")), r = require("../l/wm");

function l() {
    var t = getApp();
    t && (t.__trace_page_navigate_start_time = +new Date());
}

function u(t) {
    for (var e = arguments.length, a = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) a[i - 1] = arguments[i];
    return Object.keys(t).map(function(e) {
        "" !== t[e] && void 0 !== t[e] || a.push(e);
    }), (0, r.omit)(t, a);
}

function c(t) {
    return u(t);
}

function s(t) {
    wx.navigateTo({
        url: t,
        fail: function(t) {
            console.error("[Navigate]:", t.errMsg);
        }
    }), l();
}

function h(t) {
    wx.redirectTo({
        url: t,
        fail: function(t) {
            console.error("[Redirect]:" + t.errMsg);
        }
    }), l();
}

function p(t) {
    wx.navigateBack({
        delta: t,
        fail: function(t) {
            console.error("[navigateBack]:", t.errMsg);
        }
    });
}

function f(t) {
    wx.reLaunch({
        url: t,
        fail: function(t) {
            console.error("[reLaunch]:", t.errMsg);
        }
    }), l();
}

function d(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = a ? h : s;
    if (e = c.call(this, e), !(t = (0, r.setQueryParamsToUrl)(t, e))) throw new Error("需要指定跳转链接参数");
    i(t);
}

function m(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = !1;
    "object" === i(t) && (e = t, a = !0);
    var n = e, l = n.appId;
    if (!l) throw new Error("appId must not be empty!");
    var c = u(e, "appId");
    a ? wx.navigateToMiniProgram({
        appId: l,
        extraData: c,
        success: function(t) {},
        fail: function(t) {}
    }) : (t = (0, r.setQueryParamsToUrl)(t, c), l === o.default.get("APPID") ? this.$navigate(t, c) : wx.navigateToMiniProgram({
        appId: l,
        path: t,
        extraData: c,
        success: function(t) {},
        fail: function(t) {}
    }));
}

function v(t) {
    var e = p;
    if (0 === t) throw new Error("delta is must greater than 0");
    if (t && "number" != typeof t) throw new Error("delta is must number type");
    e(t || 1);
}

function g(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (e = c.call(this, e), !(t = (0, r.setQueryParamsToUrl)(t, e))) throw new Error("需要指定跳转链接参数");
    f(t);
}

function b(t) {
    if (!t) throw new Error("需要指定跳转链接参数");
    !function(t) {
        wx.switchTab({
            url: t,
            fail: function(t) {
                console.error("[switchTab]:", t.errMsg);
            }
        }), l();
    }(t);
}

var D = (0, r.debounce)(d, 800, !0), w = (0, r.debounce)(m, 800, !0), _ = (0, r.debounce)(v, 800, !0), j = (0, 
r.debounce)(g, 800, !0), T = (0, r.debounce)(b, 800, !0);

n.default.get("systemInfo").then(function(t) {
    t && "ios" === t.platform && (D = (0, r.debounce)(d, 300, !0), w = (0, r.debounce)(m, 300, !0), 
    _ = (0, r.debounce)(v, 300, !0), j = (0, r.debounce)(g, 300, !0), T = (0, r.debounce)(b, 800, !0));
});

var y = {
    methods: {
        $navigate: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            a ? d.call(this, t, e) : D.call(this, t, e);
        },
        $redirect: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            a ? d.call(this, t, e, !0) : D.call(this, t, e, !0);
        },
        $tomin: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            a ? m.call(this, t, e) : w.call(this, t, e);
        },
        $back: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            e ? v.call(this, t) : _.call(this, t);
        },
        $relaunch: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            a ? g.call(this, t, e) : j.call(this, t, e);
        },
        $switchTab: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            e ? g.call(this, t) : T.call(this, t);
        },
        $mylink: function(t, i) {
            var n = function(t) {
                var e = {};
                return t.slice(t.indexOf("?") + 1).split("&").forEach(function(t) {
                    var i = t.split("="), n = a(i), o = n[0], r = n.slice(1);
                    if (o) {
                        var l = r.length > 1 ? r.join("=") : r[0];
                        e[decodeURIComponent(o)] = decodeURIComponent(l);
                    }
                }), e;
            }(t), o = n.appId;
            delete n.appId, function(t, a, i, n) {
                var o = {
                    appId: t,
                    param: e(e({}, a), {}, {
                        startMultApp: "YES",
                        appClearTop: !1,
                        forceAppMode: "YES"
                    }),
                    closeSelfWindow: !1,
                    closeCurrentApp: i
                };
                my.call("startApp", o, function(t) {
                    n && "function" == typeof n && n(t);
                });
            }(o, n, !1, i);
        },
        $jumpDelay: function(t) {
            var e = this, a = t.method, i = t.url, n = t.params, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = function() {
                e.localData._jumpData = {
                    method: a,
                    url: i,
                    params: n
                };
            };
            this.localData || (this.localData = {});
            var l = this.localData._jumpTimeoutId, u = void 0 === l ? null : l;
            u && clearTimeout(u), this.setData({
                _jumpWaiting: !0
            }), this.localData._pageHide ? r() : u = setTimeout(function() {
                e.localData._pageHide ? r() : (e[a](i, n), e.setData({
                    _jumpWaiting: !1
                })), e.localData._jumpTimeoutId = null;
            }, o), this.localData._jumpTimeoutId = u;
        }
    },
    onShow: function() {
        if (this.localData || (this.localData = {}), this.localData._pageHide = !1, this.localData._jumpData) {
            var t = this.localData._jumpData, e = t.method, a = t.url, i = t.params;
            this[e](a, i), this.setData({
                _jumpWaiting: !1
            }), this.localData._jumpData = null, this.localData._jumpTimeoutId = null;
        }
    },
    onHide: function() {
        this.localData._pageHide = !0;
    }
};

exports.default = y;