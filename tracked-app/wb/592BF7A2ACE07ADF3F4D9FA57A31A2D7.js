require("@babel/runtime/helpers/Arrayincludes.js");

var t = require("@babel/runtime/helpers/typeof.js"), n = require("75A81606ACE07ADF13CE7E01F651A2D7.js");

exports.exec = function(t, n, e) {
    var o = exports[n];
    "function" == typeof o && o(t, e);
}, exports.inputPhoneNumber = function(t, n) {
    t.setData({
        phoneNumber: n.detail.value,
        mobileErrMsgStr: ""
    });
}, exports.getSmsCode = function(e, o) {
    var a = e.data;
    if (a.phoneNumber) {
        e.setData({
            isSmsBtnLogin: !0
        });
        var r = a.phoneNumber, c = a.countryCode;
        n.sendSMS({
            phone: r,
            area: c || "86"
        }).then(function(n) {
            if (n) {
                e.setData({
                    isSmsBtnLogin: !1
                });
                var o = e.data && e.data.model, a = "", i = [];
                if ("object" === t(o)) {
                    for (var s in o) i.push("".concat(s, "=").concat(o[s]));
                    a = i.length > 0 ? "&".concat(i.join("&")) : "";
                }
                wx.redirectTo({
                    url: "../smscode/index?phone=".concat(r, "&area=").concat(c || "86").concat(a)
                });
            }
        }, function(n) {
            var o = "", a = null;
            "object" === t(n) ? 1006 !== n.errno ? (o = n.errmsg, a = [ 8517, 8513, -200 ].includes(n.errno) ? null : n) : a = n : o = n, 
            e.setData({
                mobileErrMsgStr: o,
                mobileErrMsg: a,
                isSmsBtnLogin: !1
            });
        });
    }
}, exports.changeLoginMode = function(t) {
    t.setData({
        isAccountLogin: !t.data.isAccountLogin,
        mobileErrMsgStr: "",
        accountErrMsg: ""
    });
}, exports.inputAccount = function(t, n) {
    t.setData({
        account: n.detail.value,
        isDisabledLogin: !t.data.pwd || !t.data.account,
        accountErrMsg: ""
    });
}, exports.inputPwd = function(t, n) {
    t.setData({
        pwd: n.detail.value,
        isDisabledLogin: !t.data.pwd || !t.data.account,
        accountErrMsg: ""
    });
}, exports.accountLogin = function(e, o) {
    var a = e.data, r = a.account, c = a.pwd;
    r && c && (e.setData({
        isAccntBtnLogin: !0
    }), n.accountLogin({
        account: r,
        pwd: c
    }).then(function(t) {
        console.log(t), e.setData({
            isAccntBtnLogin: !1
        }), wx.reLaunch({
            url: "/pages/index/index",
            fail: function() {}
        });
    }, function(n) {
        var o = "";
        o = "object" === t(n) ? n.errmsg : n, e.setData({
            accountErrMsg: o,
            isAccntBtnLogin: !1
        });
    }));
}, exports.cancel = function(t, n) {
    t.setData({
        mobileErrMsg: null
    });
}, exports.smslogin = function(t, n) {
    t.setData({
        mobileErrMsg: null
    });
}, exports.wxlogin = function(t, n) {
    t.setData({
        mobileErrMsg: null
    });
};