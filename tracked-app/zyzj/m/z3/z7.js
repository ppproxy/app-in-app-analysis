var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("../../@babel/runtime/helpers/objectSpread2"), r = e(require("../../@babel/runtime/regenerator")), n = require("../../@babel/runtime/helpers/asyncToGenerator"), a = require("../../@babel/runtime/helpers/classCallCheck"), s = require("../../@babel/runtime/helpers/createClass"), i = require("../../l/wh"), u = require("../../l/wa"), c = require("./ci"), o = require("./zf/ec"), l = require("../../l/wd/wb"), f = new (function() {
    function e() {
        a(this, e), this.options = null, this.$context = null, this.success = function() {}, 
        this.fail = function() {};
    }
    var f, p, h, v, d, g;
    return s(e, [ {
        key: "auth",
        value: (g = n(r.default.mark(function e(t, n, a) {
            var s, u = arguments;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (3 === u.length) {
                        e.next = 2;
                        break;
                    }
                    throw new Error("参数不合法，必须包含三个参数");

                  case 2:
                    this.options = t.event || {}, this.hasUserAgreement = t.hasUserAgreement, this.success = n, 
                    this.fail = a, this.getUserProfile = t.getUserProfile, this._isAuth() ? (s = (0, 
                    i.getUserDetlInfo)(), this.success(s)) : t.context ? (this.$context = t.context, 
                    this.$context.auth(n, a)) : this._preMiniUserAuth();

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e, t, r) {
            return g.apply(this, arguments);
        })
    }, {
        key: "_isAuth",
        value: function() {
            return null !== (0, i.getUserDetlInfo)();
        }
    }, {
        key: "getRealNickName",
        value: function(e) {
            var t = e;
            try {
                var r = l.Base64.decode(e);
                r && r.length > 0 && (t = r);
            } catch (e) {}
            return t;
        }
    }, {
        key: "isMinAuth",
        value: (d = n(r.default.mark(function e() {
            var t, n, a, s, i;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if ("wx" !== (0, u.getMiniType)()) {
                        e.next = 13;
                        break;
                    }
                    if (!wx.canIUse("getUserProfile")) {
                        e.next = 6;
                        break;
                    }
                    t = !1, e.next = 11;
                    break;

                  case 6:
                    return e.next = 8, (0, c.getWxMinSetting)();

                  case 8:
                    n = e.sent, a = n.authSetting || {}, t = a["scope.userInfo"];

                  case 11:
                    e.next = 18;
                    break;

                  case 13:
                    return e.next = 15, (0, c.getMyMinSetting)();

                  case 15:
                    s = e.sent, i = s.authSetting || {}, t = i.userInfo;

                  case 18:
                    return e.abrupt("return", t);

                  case 19:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function() {
            return d.apply(this, arguments);
        })
    }, {
        key: "getUserBaseInfo",
        value: (v = n(r.default.mark(function e() {
            var t, n, a;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!(t = (0, i.getUserDetlInfo)())) {
                        e.next = 3;
                        break;
                    }
                    return e.abrupt("return", t);

                  case 3:
                    if ("wx" !== (0, u.getMiniType)()) {
                        e.next = 8;
                        break;
                    }
                    return e.abrupt("return", null);

                  case 8:
                    return e.next = 10, (0, c.getMyMinSetting)();

                  case 10:
                    if (n = e.sent, !(n.authSetting || {}).userInfo) {
                        e.next = 19;
                        break;
                    }
                    return e.next = 16, this._getMyUserInfo();

                  case 16:
                    if (!(a = e.sent).avatarUrl || !a.nickName) {
                        e.next = 19;
                        break;
                    }
                    return e.abrupt("return", a);

                  case 19:
                    return e.abrupt("return", null);

                  case 20:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function() {
            return v.apply(this, arguments);
        })
    }, {
        key: "_getWxUserInfo",
        value: function() {
            return new Promise(function(e) {
                wx.getUserInfo({
                    success: function(t) {
                        e({
                            avatarUrl: t.userInfo.avatarUrl,
                            nickName: t.userInfo.nickName
                        });
                    },
                    fail: function(e) {}
                });
            });
        }
    }, {
        key: "_getMyUserInfo",
        value: function() {
            return new Promise(function(e) {
                my.getOpenUserInfo({
                    success: function(t) {
                        var r = JSON.parse(t.response).response;
                        r && "10000" === r.code && e({
                            avatarUrl: r.avatar,
                            nickName: r.nickName
                        });
                    },
                    fail: function(e) {}
                });
            });
        }
    }, {
        key: "_preMiniUserAuth",
        value: function() {
            var e = this;
            "wx" === (0, u.getMiniType)() ? wx.canIUse("getUserProfile") ? wx.getUserProfile({
                desc: "善用您的基础信息",
                success: function(t) {
                    e.options.detail = {
                        errMsg: t.errMsg,
                        userInfo: t.userInfo
                    }, e._preWxMiniUserAuth();
                },
                fail: function(t) {
                    e.options.detail = {
                        errMsg: t.errMsg,
                        userInfo: t.userInfo
                    }, e._preWxMiniUserAuth();
                }
            }) : this._preWxMiniUserAuth() : this._preMyMiniUserAuth();
        }
    }, {
        key: "_preWxMiniUserAuth",
        value: (h = n(r.default.mark(function e() {
            var t, n, a, s, i;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    i = this.options, "getUserInfo:ok" === (null === (t = i.detail) || void 0 === t ? void 0 : t.errMsg) ? this._saveUserDetlInfo(null === (n = i.detail) || void 0 === n ? void 0 : n.userInfo) : "getUserProfile:ok" === (null === (a = i.detail) || void 0 === a ? void 0 : a.errMsg) ? this._saveUserDetlInfo(null === (s = i.detail) || void 0 === s ? void 0 : s.userInfo) : this.fail("用户拒绝授权");

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function() {
            return h.apply(this, arguments);
        })
    }, {
        key: "_preMyMiniUserAuth",
        value: (p = n(r.default.mark(function e() {
            var t = this;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    my.getOpenUserInfo({
                        success: function(e) {
                            var r = JSON.parse(e.response).response;
                            if (r && "10000" === r.code) {
                                var n = r.avatar, a = r.city, s = r.gender, i = r.nickName, u = r.province;
                                t._saveUserDetlInfo({
                                    nickName: i,
                                    avatarUrl: n,
                                    gender: s,
                                    province: u,
                                    city: a
                                });
                            } else t.fail("用户授权失败");
                        },
                        fail: function() {
                            t.fail("用户拒绝授权");
                        }
                    });

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function() {
            return p.apply(this, arguments);
        })
    }, {
        key: "_saveUserDetlInfo",
        value: (f = n(r.default.mark(function e(n) {
            var a, s, c, f, p, h, v, d, g, U, k, x, y;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    s = (a = n || {}).nickName && a.nickName.length > 0 ? a.nickName : "欢迎光临", c = a.avatarUrl && a.avatarUrl.length > 0 ? a.avatarUrl : "https://img.alicdn.com/tfs/TB1cF2Yiz39YK4jSZPcXXXrUFXa-360-360.png", 
                    f = l.Base64.encode(s), p = a.gender, h = a.province, v = a.city, d = (0, i.getAppBaseInfo)(), 
                    g = d.appId, U = "", k = (0, u.getMiniType)(), e.t0 = k, e.next = "wx" === e.t0 ? 13 : "my" === e.t0 ? 15 : 17;
                    break;

                  case 13:
                    return U = "WECHAT", e.abrupt("break", 18);

                  case 15:
                    return U = "ALIPAY", e.abrupt("break", 18);

                  case 17:
                    return e.abrupt("break", 18);

                  case 18:
                    return x = {
                        appType: U,
                        appId: g,
                        nickName: f,
                        avatarUrl: c,
                        province: h,
                        city: v,
                        gender: p
                    }, this.hasUserAgreement && (x.hasUserAgreement = !0), e.next = 22, (0, o.saveUserInfo)(t({}, x));

                  case 22:
                    e.sent.data.data ? (y = {
                        avatarUrl: c,
                        nickName: s
                    }, (0, i.setGlobalUserInfo)(y), this.success(y)) : wx.showToast("保存用户信息失败");

                  case 24:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return f.apply(this, arguments);
        })
    } ]), e;
}())();

exports.default = f;