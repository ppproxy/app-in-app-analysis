function e(e) {
    return 0 === e.indexOf("http") ? e : "" + r + e;
}

var o = Object.assign || function(e) {
    for (var o = 1; o < arguments.length; o++) {
        var n = arguments[o];
        for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
    }
    return e;
}, n = require("./wx-promise"), t = require("../config/index"), r = t.domain, s = t.appid, i = require("./session").getSessionId, c = !1;

module.exports = {
    requestHb: function(t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return 0 === r ? Promise.reject(null) : new Promise(function(a, u) {
            i().then(function(r) {
                return n.request(o({}, t, {
                    url: e(t.url),
                    header: o({}, t.header, {
                        sessionid: r,
                        appid: s,
                        "X-ACCESS-TOKEN": wx.getStorageSync("wx-accesstoken")
                    }),
                    timeout: t.timeout || 15e3
                }));
            }).then(function(e) {
                e.statusCode;
                var o = e.data, n = o.errcode;
                return [ 110001005, 110001004, -1 ].includes(n) ? (wx.removeStorageSync("wx-sessionid"), 
                wx.removeStorageSync("wx-accesstoken"), request(t, r - 1).then(a)) : 0 === n ? a(o) : (o.errmsg && (101 == o.errcode ? wx.showModal({
                    title: "温馨提示",
                    content: "请先进行登录",
                    showCancel: !1,
                    confirmText: "去登录",
                    success: function() {
                        wx.navigateTo({
                            url: "/pages/mine/login/index"
                        });
                    }
                }) : 102 == o.errcode ? wx.showModal({
                    title: "温馨提示",
                    content: "请实名认证",
                    showCancel: !1,
                    confirmText: "去认证",
                    success: function() {
                        wx.navigateTo({
                            url: "/packages/health-code/pages/realname-submit/index"
                        });
                    }
                }) : 103 == o.errcode ? wx.showToast({
                    title: o.errmsg,
                    icon: "none",
                    duration: 5e3
                }) : 104 == o.errcode ? wx.showToast({
                    title: o.errmsg,
                    icon: "none",
                    duration: 5e3
                }) : 105 == o.errcode ? wx.showToast({
                    title: o.errmsg,
                    icon: "none",
                    duration: 5e3
                }) : 106 == o.errcode ? wx.showToast({
                    title: o.errmsg,
                    icon: "none",
                    duration: 5e3
                }) : 107 == o.errcode ? (wx.showToast({
                    title: o.errmsg,
                    icon: "none",
                    duration: 5e3
                }), setTimeout(function() {
                    wx.switchTab({
                        url: "/pages/index/index"
                    });
                }, 1500)) : 100003 == o.errcode ? wx.showToast({
                    title: "参数不合法",
                    icon: "none"
                }) : 1111 == o.errcode ? wx.showToast({
                    title: o.errmsg,
                    icon: "none",
                    duration: 5e3
                }) : wx.showToast({
                    title: "当前用户过多，请稍后重试",
                    icon: "none"
                })), u(o));
            }).catch(function() {
                return c || (c = !0, wx.showModal({
                    title: "温馨提示",
                    content: "国家接口响应超时，无法获取当前健康状态，请耐心等待，不要频繁刷新",
                    showCancel: !1,
                    success: function() {
                        c = !1;
                    }
                })), u(null);
            });
        });
    }
};