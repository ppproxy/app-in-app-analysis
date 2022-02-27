var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("../../../@babel/runtime/helpers/typeof"), n = e(require("./zg"));

var r, o = function(e, t) {
    return e(t = {
        exports: {}
    }, t.exports), t.exports;
}(function(e) {
    e.exports = function(e) {
        var n = {};
        function r(t) {
            if (n[t]) return n[t].exports;
            var o = n[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
        }
        return r.m = e, r.c = n, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            });
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, r.t = function(e, n) {
            if (1 & n && (e = r(e)), 8 & n) return e;
            if (4 & n && "object" == t(e) && e && e.__esModule) return e;
            var o = Object.create(null);
            if (r.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e) for (var i in e) r.d(o, i, function(t) {
                return e[t];
            }.bind(null, i));
            return o;
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return r.d(t, "a", t), t;
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, r.p = "", r(r.s = 4);
    }([ function(e, t) {
        e.exports = n.default;
    }, function(e, t, n) {
        e.exports = n(2);
    }, function(e, t, n) {
        var r = n(3), o = r.JSON || (r.JSON = {
            stringify: JSON.stringify
        });
        e.exports = function(e) {
            return o.stringify.apply(o, arguments);
        };
    }, function(e, t) {
        var n = e.exports = {
            version: "2.6.11"
        };
        "number" == typeof __e && (__e = n);
    }, function(e, t, n) {
        n.r(t);
        var r = n(1), o = n.n(r);
        function i(e, t) {
            "function" == typeof requestIdleCallback ? requestIdleCallback(e, {
                timeout: t || 1e3
            }) : setTimeout(e, 0);
        }
        function u(e) {
            return "undefined" != typeof Promise && e instanceof Promise;
        }
        var f = {}, a = [], c = [], l = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 20, n = arguments.length > 1 ? arguments[1] : void 0;
            return n = n || "", t ? e(--t, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(60 * Math.random())) + n) : n;
        }, s = {
            sdk_version: "1.0.15",
            pv_id: l()
        };
        function p() {
            if (a.length) {
                var e = a.join("|");
                if (e.length < 4500) return a = [], void f.send(v(e));
                for (var t = ""; a.length; ) {
                    var n = a[0];
                    if (t && (t + "|" + n).length > 4500) break;
                    a.shift(), t += t ? "|" + n : n;
                }
                f.send(v(t)), a.length && p();
            }
        }
        function d(e, t) {
            !1 === t ? i(function() {
                f.send(v(e));
            }) : (a.push(e), i(p));
        }
        function v(e) {
            var t = [ "msg=" + e ];
            for (var n in s) -1 === n.indexOf("plugin_") && "requiredFields" !== n && s.hasOwnProperty(n) && (s[n] || 0 === s[n]) && t.push(n + "=" + encodeURIComponent(s[n]));
            return t.join("&");
        }
        function g() {
            var e = s.requiredFields;
            return e && e.some(function(e) {
                return void 0 === s[e];
            });
        }
        f.setConfig = function(e, t) {
            var n = function() {
                if (void 0 !== t) s[e] = t; else for (var n in e) s[n] = e[n];
            };
            c.length ? (n(), g() || (c.forEach(function(e) {
                d.apply(null, e);
            }), c = [])) : (function() {
                if (void 0 !== t) return t !== s[e];
                for (var n in e) if (e[n] !== s[n]) return !0;
                return !1;
            }() && p(), n());
        }, f.getConfig = function(e) {
            return e ? s[e] : s;
        }, f.updatePVID = function() {
            f.setConfig("pv_id", l());
        }, f.log = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (e) {
                t.ts = t.ts || new Date().getTime(), t.type = e;
                var r = [];
                for (var i in t) {
                    var u = t[i], f = Object.prototype.toString.call(u);
                    "[object String]" !== f && "[object Number]" !== f && "[object Boolean]" !== f && "[object Object]" !== f && "[object Array]" !== f || ("[object Object]" !== f && "[object Array]" !== f || (u = o()(u)), 
                    r.push("".concat(i, "=").concat(encodeURIComponent(u))));
                }
                t = encodeURIComponent(r.join("&")), g() ? c.push([ t, n.combo ]) : d(t, n.combo);
            }
        }, f.before = function(e, t) {
            return function() {
                var n = arguments, r = t.apply(f, n);
                u(r) ? r.then(function(t) {
                    e.apply(f, t || n);
                }) : e.apply(f, r || n);
            };
        }, f.after = function(e, t) {
            return function() {
                var n = arguments;
                e.apply(f, n), t.apply(f, n);
            };
        };
        var y = f, b = n(0), h = !0, m = [], _ = function() {
            h && m.length && (m.forEach(function(e) {
                i(function() {
                    y.send(e);
                });
            }), m = []);
        };
        y.setConfig(function() {
            var e = {}, t = wx.getSystemInfoSync(), n = t.pixelRatio, r = t.windowWidth, o = t.windowHeight;
            return e.dpi = n, e.sr = "".concat(r, "x").concat(o), e;
        }()), wx.getNetworkType({
            success: function(e) {
                e && "string" == typeof e.networkType && y.setConfig({
                    net_type: e.networkType
                }), h = "NOTREACHABLE" !== e.networkType && "none" !== e.networkType, _();
            },
            fail: function(e) {}
        }), wx.onNetworkStatusChange(function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            h = e.isConnected, "string" == typeof e.networkType && y.setConfig({
                net_type: e.networkType
            }), _();
        }), y.log = y.before(y.log, function() {
            var e = {};
            try {
                var t = b.aplus_universal.getPageSPM(), n = t[0], r = t[1];
                "0" !== n && (e.spm_a = n), "0" !== r && (e.spm_b = r);
            } catch (e) {}
            e.url = function() {
                if ("function" == typeof getCurrentPages) try {
                    var e = getCurrentPages() || [], t = e[e.length - 1];
                    return t && t.route;
                } catch (e) {}
            }(), y.setConfig(e);
        }), y.send = function(e) {
            var t = b.aplus_universal && "function" == typeof b.aplus_universal.record;
            if (h && t) try {
                var n = [ "/aes.1.1", "EXP", e, "POST" ];
                b.aplus_universal.record.apply(b.aplus_universal, n);
            } catch (e) {} else m.length > 500 && m.shift(), m.push(e);
        }, t.default = y;
    } ]).default;
}), i = (r = o) && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;

exports.default = i;