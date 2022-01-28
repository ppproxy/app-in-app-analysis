var e = require("./wx-promise"), n = require("../components/gsd-lib/event/index"), t = require("../config/index"), s = t.domain, o = (t.appid, 
require("./aegisInstance")), i = require("./sha256.js"), c = (i.sha256_digest, !1);

function r() {
    if (c) return new Promise(function(e, t) {
        n.addEventListener("fetchSessionSuccess", function(n) {
            e(n.target);
        }), n.addEventListener("fetchSessionFail", function(e) {
            t(e.target);
        });
    });
    c = !0;
    var t = parseInt(new Date().getTime() / 1e3, 10), r = "123456789abcdefg", d = (0, 
    i.sha256_digest)("".concat(t).concat("LPDyeNiS18TToJQqSwtULTdGq1ZftoYY").concat(r).concat(t)).toUpperCase();
    return new Promise(function(i, u) {
        e.login().then(function(n) {
            var o = n.code, i = {
                url: s + "/auth/wll/account/login",
                method: "GET",
                data: {
                    js_code: o
                },
                header: {
                    "Content-Type": "application/json",
                    "x-tif-nonce": r,
                    "x-tif-paasid": "jxjxcxzcfu",
                    "x-tif-signature": d,
                    "x-tif-timestamp": t
                }
            };
            return console.log("before fetch sessionId", i), e.request(i);
        }).then(function(e) {
            var t = e.data;
            if (console.log("after fetch sessionId", e), "BIS:10200" === t.errcode) {
                c = !1;
                var s = t.data, r = s.sessionid, d = s.openId;
                return wx.setStorageSync("wx-openid", d), wx.setStorageSync("wx-sessionid", r), 
                o.setConfig({
                    uin: r
                }), n.dispatch("fetchSessionSuccess", r), n.removeEventListener("fetchSessionSuccess"), 
                n.removeEventListener("fetchSessionFail"), void i(r);
            }
            a(u);
        }).catch(function(e) {
            console.log("wx.login err", e), a(u);
        });
    });
}

function a(e) {
    c = !1, wx.showModal({
        title: "温馨提示",
        content: "可能由于信号偏弱、网络不稳等原因，请稍后再试。",
        showCancel: !1
    }), n.dispatch("fetchSessionFail", null), n.removeEventListener("fetchSessionSuccess"), 
    n.removeEventListener("fetchSessionFail"), e({
        errcode: -2e4,
        errmsg: "请求 sessionId 失败"
    });
}

module.exports = {
    fetchSessionId: r,
    getSessionId: function() {
        var n = wx.getStorageSync("wx-sessionid");
        return e.checkSession().then(function() {
            return n || r();
        }).catch(function(e) {
            return console.log("checkSession Invalid", e), r();
        });
    },
    handleSessionFail: a
};