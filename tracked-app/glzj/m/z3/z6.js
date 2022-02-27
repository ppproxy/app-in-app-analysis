var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0, require("../../@babel/runtime/helpers/Arrayincludes");

var t = e(require("../../@babel/runtime/regenerator")), n = require("../../@babel/runtime/helpers/asyncToGenerator"), r = require("../../@babel/runtime/helpers/classCallCheck"), i = require("../../@babel/runtime/helpers/createClass"), a = require("../../l/wh"), s = require("../../l/wa"), o = require("./ci"), u = e(require("../../m/zd/n")).default.$ltracker, c = new (function() {
    function e() {
        r(this, e), this.$context = null, this.success = function() {}, this.fail = function() {};
    }
    var c, l, h, f, p, d, y, x, g;
    return i(e, [ {
        key: "auth",
        value: (g = n(t.default.mark(function e(n, r, i) {
            var a = arguments;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (this.success = r, this.fail = i, !(a.length < 2 || a.length > 3)) {
                        e.next = 4;
                        break;
                    }
                    throw new Error("参数不合法，成功回调和失败回调是必填参数");

                  case 4:
                    2 === a.length && (this.success = n, this.fail = r), n.context ? (this.$context = n.context, 
                    this._authIndirect({
                        bodyText: n.bodyText,
                        title: n.title
                    })) : this._authDirect();

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e, t, n) {
            return g.apply(this, arguments);
        })
    }, {
        key: "_isAuth",
        value: function() {
            return null !== (0, a.getGeoInfo)();
        }
    }, {
        key: "isMinAuth",
        value: (x = n(t.default.mark(function e() {
            var n, r, i, a, u;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if ("wx" !== (0, s.getMiniType)()) {
                        e.next = 9;
                        break;
                    }
                    return e.next = 4, (0, o.getWxMinSetting)();

                  case 4:
                    r = e.sent, i = r.authSetting || {}, n = i["scope.userLocation"], e.next = 14;
                    break;

                  case 9:
                    return e.next = 11, (0, o.getMyMinSetting)();

                  case 11:
                    a = e.sent, u = a.authSetting || {}, n = u.location;

                  case 14:
                    return e.abrupt("return", n);

                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function() {
            return x.apply(this, arguments);
        })
    }, {
        key: "isSystemGPSOpen",
        value: function() {
            var e = null;
            e = "wx" === (0, s.getMiniType)() ? wx.getSystemInfoSync() : my.getSystemInfoSync();
            var t = Object.prototype.hasOwnProperty.call(e, "locationAuthorized"), n = Object.prototype.hasOwnProperty.call(e, "locationEnabled");
            return !t || !n || e.locationAuthorized && e.locationEnabled;
        }
    }, {
        key: "isGPSOpenAndGeoAuth",
        value: (y = n(t.default.mark(function e(n) {
            var r, i, a, s, o;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = this.isSystemGPSOpen(), e.next = 3, this.isMinAuth();

                  case 3:
                    if (i = e.sent, a = this.isGeoSysAuthFail(), s = this.getLocErrInstance(), r && i && !a || (r || (s.c1 = "GPS导航未开启"), 
                    i || (s.c1 = "小程序地理位置授权未开启"), a && (s.c1 = "地理位置API回调失败"), this.sendError(s)), "object" !== (void 0 === (o = (n || {}).valueType) ? "boolean" : o)) {
                        e.next = 10;
                        break;
                    }
                    return e.abrupt("return", {
                        isGPSOpen: r,
                        isMiniGeoAuth: i,
                        isSysAuthFail: a,
                        isGPSOpenAndGeoAuth: r && i && !a
                    });

                  case 10:
                    return e.abrupt("return", r && i && !a);

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return y.apply(this, arguments);
        })
    }, {
        key: "isGeoSysAuthFail",
        value: function() {
            return (0, a.getGeoAuthFailFlag)();
        }
    }, {
        key: "_reSetGeoInfo",
        value: (d = n(t.default.mark(function e() {
            var n;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = {}, "wx" !== (0, s.getMiniType)()) {
                        e.next = 8;
                        break;
                    }
                    return e.next = 5, this._getWxMinLocationInfo();

                  case 5:
                    n = e.sent, e.next = 11;
                    break;

                  case 8:
                    return e.next = 10, this._getMyMinLocationInfo();

                  case 10:
                    n = e.sent;

                  case 11:
                    return n && n.longitude && n.latitude && this._saveGeoLocationInfoToCache(n), e.abrupt("return", n);

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function() {
            return d.apply(this, arguments);
        })
    }, {
        key: "_authIndirect",
        value: function() {
            var e = this, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.$context.auth(n(t.default.mark(function n() {
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (!e._isAuth()) {
                            t.next = 6;
                            break;
                        }
                        return t.next = 3, e._reSetGeoInfo();

                      case 3:
                        e._noticeCall(), t.next = 8;
                        break;

                      case 6:
                        return t.next = 8, e._miniGeoAuth();

                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, n);
            })), {
                bodyText: r.bodyText,
                title: r.title
            });
        }
    }, {
        key: "_authDirect",
        value: (p = n(t.default.mark(function e() {
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!this._isAuth()) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 4, this._reSetGeoInfo();

                  case 4:
                    this._noticeCall(), e.next = 9;
                    break;

                  case 7:
                    return e.next = 9, this._preMiniGeoAuth();

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function() {
            return p.apply(this, arguments);
        })
    }, {
        key: "_preMiniGeoAuth",
        value: (f = n(t.default.mark(function e() {
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    "wx" === (0, s.getMiniType)() ? this._preWxMiniGeoAuth() : this._preMyMiniGeoAuth();

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function() {
            return f.apply(this, arguments);
        })
    }, {
        key: "_preWxMiniGeoAuth",
        value: (h = n(t.default.mark(function e() {
            var n, r, i, s;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, (0, o.getWxMinSetting)();

                  case 2:
                    if (n = e.sent, r = n.authSetting || {}, void 0 === (i = r["scope.userLocation"]) && this._miniGeoAuth(), 
                    !1 === r["scope.userLocation"] && this.fail("用户已经拒绝授权"), !i) {
                        e.next = 16;
                        break;
                    }
                    if (s = (0, a.getGeoInfo)()) {
                        e.next = 15;
                        break;
                    }
                    return e.next = 12, this._reSetGeoInfo();

                  case 12:
                    this._noticeCall(), e.next = 16;
                    break;

                  case 15:
                    this.success(s.location);

                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function() {
            return h.apply(this, arguments);
        })
    }, {
        key: "_preMyMiniGeoAuth",
        value: (l = n(t.default.mark(function e() {
            var n, r, i, s;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, (0, o.getMyMinSetting)();

                  case 2:
                    if (n = e.sent, r = n.authSetting || {}, void 0 === (i = r.location) && this._miniGeoAuth(), 
                    !1 === i && this.fail("用户已经拒绝授权"), !i) {
                        e.next = 16;
                        break;
                    }
                    if (s = (0, a.getGeoInfo)()) {
                        e.next = 15;
                        break;
                    }
                    return e.next = 12, this._reSetGeoInfo();

                  case 12:
                    this._noticeCall(), e.next = 16;
                    break;

                  case 15:
                    this.success(s.location);

                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function() {
            return l.apply(this, arguments);
        })
    }, {
        key: "_miniGeoAuth",
        value: (c = n(t.default.mark(function e() {
            var n, r;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = Object.create(null), r = (0, s.getMiniType)(), e.prev = 2, "wx" !== r) {
                        e.next = 10;
                        break;
                    }
                    return e.next = 6, this._getWxMinLocationInfo();

                  case 6:
                    "getLocation:ok" === (n = e.sent).errMsg ? (this._saveGeoLocationInfoToCache(n), 
                    this.success({
                        longitude: n.longitude,
                        latitude: n.latitude
                    })) : n && "getLocation:fail system permission denied" === n.errMsg ? this.fail("手机系统权限被拒绝") : this.fail("用户拒绝授权"), 
                    e.next = 14;
                    break;

                  case 10:
                    return e.next = 12, this._getMyMinLocationInfo();

                  case 12:
                    (n = e.sent) && n.longitude && n.latitude ? (this._saveGeoLocationInfoToCache(n), 
                    this.success({
                        longitude: n.longitude,
                        latitude: n.latitude
                    })) : n && 11 === n.error ? this.fail("手机系统权限被拒绝") : this.fail("用户拒绝授权");

                  case 14:
                    e.next = 19;
                    break;

                  case 16:
                    e.prev = 16, e.t0 = e.catch(2), this.fail(e.t0.message);

                  case 19:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 2, 16 ] ]);
        })), function() {
            return c.apply(this, arguments);
        })
    }, {
        key: "_noticeCall",
        value: function() {
            var e = (0, a.getGeoInfo)();
            e ? this.success(e) : this.fail("获取定位出错");
        }
    }, {
        key: "_getWxMinLocationInfo",
        value: function() {
            var e = this;
            return new Promise(function(t) {
                wx.getLocation({
                    type: "gcj02",
                    altitude: !0,
                    success: function(n) {
                        e._authSuccessProcess(), t(n);
                    },
                    fail: function() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e._authFailProcess("wx", n), t(n);
                    }
                });
            });
        }
    }, {
        key: "_getMyMinLocationInfo",
        value: function() {
            var e = this;
            return new Promise(function(t) {
                my.getLocation({
                    type: 1,
                    success: function(n) {
                        e._authSuccessProcess(), t(n);
                    },
                    fail: function() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e._authFailProcess("my", n), t(n);
                    }
                });
            });
        }
    }, {
        key: "_saveGeoLocationInfoToCache",
        value: function(e) {
            (0, a.setGlobalGeoInfo)({
                longitude: e.longitude,
                latitude: e.latitude
            });
        }
    }, {
        key: "_authSuccessProcess",
        value: function() {
            (0, a.setGeoAuthFailFlag)(!1);
        }
    }, {
        key: "_authFailProcess",
        value: function(e, t) {
            switch (e) {
              case "wx":
                this._authFailProcessByWx(t);
                break;

              case "my":
                this._authFailProcessByMy(t);
            }
        }
    }, {
        key: "_authFailProcessByWx",
        value: function(e) {
            var t = e.errMsg, n = this.getLocErrInstance();
            t && [ "getLocation:fail auth deny", "getLocation:fail system permission denied" ].includes(t) ? n.c1 = "wx-".concat(t) : ((0, 
            a.setGeoAuthFailFlag)(!0), n.c1 = "wx-geo auth fail"), this.sendError(n);
        }
    }, {
        key: "_authFailProcessByMy",
        value: function(e) {
            var t = e.errorMessage, n = e.error, r = this.getLocErrInstance();
            t && [ 11, 2001 ].includes(n) ? r.c1 = "my-".concat(t) : ((0, a.setGeoAuthFailFlag)(!0), 
            r.c1 = "my-geo auth fail"), this.sendError(r);
        }
    }, {
        key: "getLocErrInstance",
        value: function() {
            if (this.geoErrorInstance) return this.geoErrorInstance;
            var e = new Error("[saas miniapp]: geo auth fail");
            return e.error_type = "SAAS_ERROR", this.geoErrorInstance = e, e;
        }
    }, {
        key: "sendError",
        value: function(e) {
            try {
                u.logError(e);
            } catch (e) {}
        }
    } ]), e;
}())();

exports.default = c;