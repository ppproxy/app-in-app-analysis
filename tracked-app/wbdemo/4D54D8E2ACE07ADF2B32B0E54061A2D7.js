var t = require("@babel/runtime/helpers/typeof.js"), n = require("75A81606ACE07ADF13CE7E01F651A2D7.js");

exports.exec = function(t, n, o) {
    var e = exports[n];
    "function" == typeof e && e(t, o);
}, exports.ready = function(t) {
    exports.setCountdown(t);
}, exports.open = function(t, n) {}, exports.setCountdown = function(t) {
    var n = t.data;
    null == n.countdown && t.setData({
        countdown: 60,
        timing: !0
    }), 1 === n.countdown ? t.setData({
        countdown: 60,
        timing: !1
    }) : (t.setData({
        countdown: --n.countdown
    }), setTimeout(function() {
        exports.setCountdown(t);
    }, 1e3));
}, exports.getSmsCode = function(o) {
    var e = o.data;
    if (!e.timing) {
        o.setData({
            timing: !0
        }), exports.setCountdown(o);
        var s = e.options, a = s.phone, i = s.area;
        n.sendSMS({
            phone: a,
            area: i
        }).then(function(t) {
            console.log(t);
        }, function(n) {
            var e = "";
            e = "object" === t(n) ? n.errmsg : n, o.setData({
                codeErrMsg: e
            });
        });
    }
}, exports.inputSmsCode = function(t, n) {
    t.setData({
        smsCode: n.detail.value,
        codeErrMsg: ""
    });
}, exports.loginSuccss = function(t) {
    wx.redirectTo({
        url: "/pages/index/index"
    });
}, exports.smsLogin = function(o) {
    var e = o.data.smsCode, s = o.data.options, a = s.phone, i = s.area;
    e && (o.setData({
        isSmsLgnBtnLogin: !0
    }), n.smsLogin({
        phone: a,
        area: i,
        smscode: e
    }).then(function(t) {
        console.log(t), o.setData({
            isSmsLgnBtnLogin: !1
        }), exports.loginSuccss(o);
    }, function(n) {
        var e = "";
        e = "object" === t(n) ? n.errmsg : n, o.setData({
            codeErrMsg: e,
            isSmsLgnBtnLogin: !1
        });
    }));
};