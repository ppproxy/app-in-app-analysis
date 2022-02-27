var e = require("../../@babel/runtime/helpers/interopRequireDefault"), r = require("../../@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../../@babel/runtime/regenerator")), n = require("../../@babel/runtime/helpers/asyncToGenerator"), a = require("./zf/n"), o = require("../../l/wh"), u = require("../../l/wa"), i = function(e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || "object" !== r(e) && "function" != typeof e) return {
        default: e
    };
    var n = c(t);
    if (n && n.has(e)) return n.get(e);
    var a = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
        var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(a, u, i) : a[u] = e[u];
    }
    a.default = e, n && n.set(e, a);
    return a;
}(require("../../m/zd/n"));

function c(e) {
    if ("function" != typeof WeakMap) return null;
    var r = new WeakMap(), t = new WeakMap();
    return (c = function(e) {
        return e ? t : r;
    })(e);
}

var l = i.default.$ltracker, f = {
    getAppStartTime: function() {
        var e = getApp();
        return e ? e[i.logConstants.APP_START_TIME] : "";
    },
    recordPerformance: function(e) {
        try {
            var r = +new Date(), t = this.getAppStartTime();
            if (!t) return;
            if (r - t > 1e4) return;
            l.logPerf(i.PerfType.mark, {
                name: e,
                markDuration: r - t,
                instant: !1
            });
        } catch (e) {}
    },
    login: function() {
        var e = this;
        return n(t.default.mark(function r() {
            var n, i, c, l, f, s, d, p, b, g, m, h;
            return t.default.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    if (n = (0, u.getMiniType)(), i = (0, o.getAppBaseInfo)(), c = i.appId, l = Object.create(null), 
                    "wx" !== n) {
                        r.next = 15;
                        break;
                    }
                    return r.next = 6, e.wxLogin();

                  case 6:
                    return f = r.sent, e.recordPerformance("GET_AUTH_CODE"), r.next = 10, (0, a.wxPreLogin)({
                        authCode: f,
                        appId: c
                    }).catch(function(e) {});

                  case 10:
                    s = r.sent, e.recordPerformance("GLOBAL_DATA_FETCH_END"), s && s.data && (d = s.data.data || "", 
                    p = s.data.extInfo || {}, l = {
                        token: d,
                        boundMobileFlag: p.boundMobileFlag,
                        joinMemberFlag: p.joinMemberFlag,
                        customerId: p.customerId,
                        authPrivacyAgree: p.authPrivacyAgree
                    }), r.next = 24;
                    break;

                  case 15:
                    return r.next = 17, e.myLogin();

                  case 17:
                    return b = r.sent, e.recordPerformance("GET_AUTH_CODE"), r.next = 21, (0, a.myPreLogin)({
                        authCode: b,
                        appId: c
                    }).catch(function(e) {});

                  case 21:
                    g = r.sent, e.recordPerformance("GLOBAL_DATA_FETCH_END"), g && g.data && (m = g.data.data || {}, 
                    h = g.data.extInfo || {}, l = {
                        token: m.loginToken,
                        boundMobileFlag: m.boundMobileFlag,
                        joinMemberFlag: m.joinMemberFlag,
                        customerId: h.customerId,
                        authPrivacyAgree: h.authPrivacyAgree
                    });

                  case 24:
                    if (!(Object.keys(l).length > 0)) {
                        r.next = 29;
                        break;
                    }
                    return e.saveLoginDataToCache(l), r.abrupt("return", l);

                  case 29:
                    return r.abrupt("return", null);

                  case 30:
                  case "end":
                    return r.stop();
                }
            }, r);
        }))();
    },
    wxLogin: function() {
        return new Promise(function(e) {
            wx.login({
                success: function(r) {
                    e(r.code);
                },
                fail: function(e) {}
            });
        });
    },
    myLogin: function() {
        return new Promise(function(e) {
            my.getAuthCode({
                scopes: [ "auth_base" ],
                success: function(r) {
                    e(r.authCode);
                },
                fail: function(e) {}
            });
        });
    },
    saveLoginDataToCache: function(e) {
        var r = e.token, t = e.boundMobileFlag, n = e.joinMemberFlag;
        (0, o.setGlobalMemberFlag)(n), (0, o.setGlobalAuthPhoneFlag)(t), (0, o.setGlobalLoginToken)(r);
    }
};

exports.default = f;