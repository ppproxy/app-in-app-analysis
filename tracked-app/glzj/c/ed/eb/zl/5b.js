var e = require("../../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.alipayBindElm = i, exports.alipayLoginElm = c, exports.eleBindOtherSite = o, 
exports.elemBindAp = function() {
    return o("alipay");
}, exports.elemBindTb = function() {
    return o("taobao");
}, exports.getAlipayCode = s, exports.getAuthCode = l, exports.tbBindElm = function() {
    return new Promise(function(e, t) {
        var n = {
            site: "eleme",
            needSession: 1
        }, a = my;
        a.uccBind ? a.uccBind(r(r({}, n), {}, {
            success: function() {
                e();
            },
            fail: function(e) {
                t(e);
            }
        })) : a.call("uccBind", r(r({}, n), {}, {
            success: function(t) {
                e();
            },
            fail: function(e) {
                t(e);
            }
        }));
    });
};

var t = e(require("../../../../@babel/runtime/regenerator")), n = require("../../../../@babel/runtime/helpers/asyncToGenerator"), r = require("../../../../@babel/runtime/helpers/objectSpread2"), a = require("../../../../l/wh");

function o(e) {
    return new Promise(function(t, n) {
        my.eleme.callWindVane({
            name: "WVBindSNSAPI.bindSNS",
            params: {
                type: e
            },
            success: function(e) {
                t(e);
            },
            fail: function(e) {
                n(new Error(JSON.stringify(e)));
            }
        });
    });
}

function i() {
    return u.apply(this, arguments);
}

function u() {
    return (u = n(t.default.mark(function e() {
        var n, r;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, l("auth_user");

              case 2:
                return n = e.sent, e.next = 5, s(n);

              case 5:
                return r = e.sent, e.abrupt("return", c(r));

              case 7:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function c(e) {
    return new Promise(function(t, n) {
        my.httpRequest({
            url: "https://restapi.ele.me/eus/login/alipay_login",
            method: "POST",
            data: "alipay_code=".concat(e, "&auth_type=", 2, "&auth_login=", 1),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            dataType: "text",
            success: function() {
                t();
            },
            fail: function(e) {
                var t = e.status, r = e.data;
                if (400 === t && r) {
                    var a;
                    try {
                        a = JSON.parse(r);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        return void n(e);
                    }
                    var o = (a || {}).name;
                    "ALIPAY_LOGIN_NEED_H5_LOGIN" === o || ("ALIPAY_LOGIN_NEED_AUTH_USER" === o ? my.confirm({
                        content: "授权失败，请重试",
                        confirmButtonText: "重新绑定",
                        success: function() {
                            i();
                        },
                        fail: function(e) {
                            n(e);
                        }
                    }) : n(e));
                } else n(e);
            }
        });
    });
}

function s(e) {
    var t = 0, n = 0, r = (0, a.getGeoInfo)();
    return r && (t = r.longitude, n = r.latitude), new Promise(function(r, a) {
        my.httpRequest({
            url: "https://openapi.ele.me/v2/koubei/l100_shop_new/",
            method: "POST",
            data: "auth_code=".concat(e, "&scope=auth_user"),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "x-shard": "loc=".concat(t, ",").concat(n)
            },
            dataType: "text",
            success: function(e) {
                var t;
                try {
                    t = JSON.parse(e.data);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void a(e);
                }
                var n = ((t || {}).data || {}).alipay_code;
                n ? r(n) : a(new Error("getAlipayCode empty alipay_code"));
            },
            fail: function(e) {
                a(e);
            }
        });
    });
}

function l(e) {
    return new Promise(function(t, n) {
        my.getAuthCode({
            scopes: e,
            success: function(e) {
                e.authCode ? t(e.authCode) : n(new Error("getAuthCode empty authCode"));
            },
            fail: function(e) {
                n(e), e.error;
            }
        });
    });
}