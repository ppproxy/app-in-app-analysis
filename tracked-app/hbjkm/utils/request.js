function e(o) {
    var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
    return 0 === s ? Promise.reject(null) : new Promise(function(a, d) {
        c().then(function(e) {
            return n.request(t({}, o, {
                url: r(o.url),
                header: t({}, o.header, {
                    sessionid: e,
                    appid: i,
                    "X-ACCESS-TOKEN": wx.getStorageSync("wx-accesstoken")
                }),
                timeout: o.timeout || 15e3
            }));
        }).then(function(r) {
            r.statusCode;
            var t = r.data, n = t.errcode;
            return [ 110001005, 110001004, -1 ].includes(n) ? (wx.removeStorageSync("wx-sessionid"), 
            wx.removeStorageSync("wx-accesstoken"), e(o, s - 1).then(a)) : 0 === n ? a(t.data) : (t.errmsg && (t.errmsg = t.errmsg.replace("穗康", ""), 
            "Not Found" !== t.errmsg && wx.showToast({
                title: t.errmsg,
                icon: "none"
            })), console.log(t.errmsg), d(t));
        }).catch(function() {
            return u || (u = !0, wx.showModal({
                title: "温馨提示",
                content: "当前人数较多，请稍后再试",
                showCancel: !1,
                success: function() {
                    u = !1;
                }
            })), d(null);
        });
    });
}

function r(e) {
    return 0 === e.indexOf("http") ? e : "" + s + e;
}

var t = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
}, n = require("./wx-promise"), o = require("../config/index"), s = o.domain, i = o.appid, c = require("./session").getSessionId, u = !1;

module.exports = {
    request: e
};