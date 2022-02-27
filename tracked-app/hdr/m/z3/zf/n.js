var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bindMobile = function(e) {
    return p.apply(this, arguments);
}, exports.myPreLogin = function(e) {
    return u.apply(this, arguments);
}, exports.queryBrandInWhiteList = function(e) {
    return i.apply(this, arguments);
}, exports.wxPreLogin = function(e) {
    return a.apply(this, arguments);
};

var r = e(require("../../../@babel/runtime/regenerator")), t = require("../../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../../m/zl/5h"));

function a() {
    return (a = t(r.default.mark(function e(t) {
        var a;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = {
                    loginType: "WXAPP_LOGIN",
                    bizScene: "SECONDARY_CODE",
                    notNeedAckLogin: !0,
                    componentAppCode: "KERUYUN_MERCHANT_APP"
                }, Object.assign(a, {
                    appId: t.appId,
                    authCode: t.authCode
                }), e.abrupt("return", n.default.request({
                    api: "mtop.alsc.saas.clogin.login.preLogin",
                    param: a
                }));

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function u() {
    return (u = t(r.default.mark(function e(t) {
        var a;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = {
                    loginType: "ALIPAY_APP_LOGIN",
                    bizScene: "SECONDARY_CODE",
                    sourceApp: "alipay"
                }, Object.assign(a, {
                    appId: t.appId,
                    alipayAuthCode: t.authCode
                }), e.abrupt("return", n.default.request({
                    api: "mtop.alsc.saas.clogin.login.platformLogin",
                    param: a
                }));

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function p() {
    return (p = t(r.default.mark(function e(t) {
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", n.default.request({
                    api: "mtop.alsc.member.prod.customer.bindMobile",
                    param: t
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function i() {
    return (i = t(r.default.mark(function e(t) {
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", n.default.request({
                    api: "mtop.alsc.member.prod.customer.queryBrandInWhiteList",
                    param: t
                }).catch(function(e) {
                    wx.showToast({
                        title: e.message,
                        icon: "none"
                    });
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}