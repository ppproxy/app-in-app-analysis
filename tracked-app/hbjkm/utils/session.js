function e() {
    return c ? new Promise(function(e, n) {
        i.addEventListener("fetchSessionSuccess", function(n) {
            e(n.target);
        }), i.addEventListener("fetchSessionFail", function(e) {
            n(e.target);
        });
    }) : (c = !0, new Promise(function(e, o) {
        s.login().then(function(e) {
            var n = e.code;
            return console.log(n), s.request({
                url: t + "/wll/account/login?js_code=" + n,
                header: {
                    appid: r
                }
            });
        }).then(function(s) {
            var t = s.data;
            if (0 === t.errcode) {
                c = !1;
                var r = t.data, a = r.sessionid, d = r.openid;
                return wx.setStorageSync("wx-openid", d), wx.setStorageSync("wx-sessionid", a), 
                i.dispatch("fetchSessionSuccess", a), i.removeEventListener("fetchSessionSuccess"), 
                i.removeEventListener("fetchSessionFail"), void e(a);
            }
            n(o);
        }).catch(function(e) {
            console.error("wx.login err", e), n(o);
        });
    }));
}

function n(e) {
    c = !1, wx.showModal({
        title: "温馨提示",
        content: "当前人数较多，请稍后再试",
        showCancel: !1
    }), i.dispatch("fetchSessionFail", null), i.removeEventListener("fetchSessionSuccess"), 
    i.removeEventListener("fetchSessionFail"), e({
        errcode: -2e4,
        errmsg: "请求 sessionId 失败"
    });
}

var s = require("./wx-promise"), i = require("../components/gsd-lib/event/index"), o = require("../config/index"), t = o.domain, r = o.appid, c = !1;

module.exports = {
    fetchSessionId: e,
    getSessionId: function() {
        var n = wx.getStorageSync("wx-sessionid");
        return n ? Promise.resolve(n) : e();
    },
    handleSessionFail: n
};