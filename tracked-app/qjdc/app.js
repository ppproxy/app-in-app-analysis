var window = window || {};

window.webpackJsonp = require("./bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 5 ], {
    324: function(n, e, t) {
        "use strict";
        var r, o = t(1), u = t.n(o), i = t(3), a = t.n(i), s = t(0), c = t.n(s), p = t(2), f = t(695), l = (t(8), 
        t(5)), g = (t(9), t(121), t(104)), d = t(102), v = t(36), h = t(54), m = t(34);
        g.a.init({
            xenv: "qjwxmp",
            forceLogin: function() {
                return l.a.dispatch("login");
            },
            silentLogin: function() {
                return l.a.dispatch("checkLogin");
            },
            getOpenid: (r = a()(c.a.mark(function n() {
                var e, t;
                return c.a.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, l.a.dispatch("getOpenId");

                      case 2:
                        return e = n.sent, t = e.openId, n.abrupt("return", {
                            openid: t
                        });

                      case 5:
                      case "end":
                        return n.stop();
                    }
                }, n);
            })), function() {
                return r.apply(this, arguments);
            }),
            appid: "wx9e9b87595c41dbb7",
            homepage: "/pages/init/init",
            targetPage: "/pages/transfer/transfer",
            tabBarPages: [],
            webviewParams: {},
            productConfig: {
                productPage: {
                    "bike-app": [ "pages/init/init", "subpackages/useBikePreProcess/map_find_bike/map_find_bike" ]
                }
            }
        }), Object(p.a)(u()(u()({
            routerConfig: f
        }, l.a.mapActions({
            login: "login",
            checkLogin: "checkLogin",
            getOpenId: "getOpenId",
            queryApolloConfig: "queryApolloConfig"
        })), {}, {
            onLaunch() {},
            onShow() {
                try {
                    Object(d.sdkInit)({
                        appId: m.p,
                        env: "DEV" === h.b.getEnv() ? "dev" : "product",
                        omega: v.Omega
                    });
                } catch (n) {
                    console.log(n);
                }
            }
        }));
    },
    695: function(n) {
        n.exports = JSON.parse("{}");
    },
    760: function(n, e, t) {
        "use strict";
        t.r(e), function(n, e) {
            e.currentModuleId = "mpx-app-scope", e.i18n || (e.i18n = {
                locale: "en-US",
                version: 0
            }, e.i18nMethods = n), e.currentCtor = App, e.currentResourceType = "app", e.currentCtorType = "app", 
            e.currentSrcMode = "wx", e.currentInject = {
                moduleId: "mpx-app-scope",
                render: function() {
                    this._c("routerConfig", this.routerConfig), this._r();
                }
            };
            t(324);
            e.currentModuleId;
        }.call(this, t(761), t(11));
    },
    761: function(n, e, t) {
        var r;
        function o(n, e) {
            return new RegExp(n, e);
        }
        function u(n) {
            return Array.isArray(n);
        }
        function i(n) {
            return null !== n && "object" == typeof n;
        }
        function a(n) {
            return null != n;
        }
        r = {
            "en-US": {
                message: {
                    hello: "{0} world",
                    test: "test"
                }
            },
            "zh-CN": {
                message: {
                    hello: " 世界",
                    test: "测试"
                }
            }
        };
        var s = o("^[0-9]+"), c = o("^[A-Za-z0-9_]+"), p = {}, f = {};
        function l(n, e) {
            if (!e) return [ n ];
            var t = p[n];
            return t || (t = function(n) {
                for (var e = [], t = 0, r = ""; t < n.length; ) {
                    var o = n[t++];
                    if ("{" === o) {
                        r && e.push({
                            type: "text",
                            value: r
                        }), r = "";
                        var u = "";
                        for (o = n[t++]; void 0 !== o && "}" !== o; ) u += o, o = n[t++];
                        var i = "}" === o, a = s.test(u) ? "list" : i && c.test(u) ? "named" : "unknown";
                        e.push({
                            value: u,
                            type: a
                        });
                    } else "%" === o ? "{" !== n[t] && (r += o) : r += o;
                }
                return r && e.push({
                    type: "text",
                    value: r
                }), e;
            }(n), p[n] = t), function(n, e) {
                var t = [], r = 0, o = u(e) ? "list" : i(e) ? "named" : "unknown";
                if ("unknown" === o) return t;
                for (;r < n.length; ) {
                    var a = n[r];
                    switch (a.type) {
                      case "text":
                        t.push(a.value);
                        break;

                      case "list":
                        t.push(e[parseInt(a.value, 10)]);
                        break;

                      case "named":
                        "named" === o ? t.push(e[a.value]) : console.log("Type of token " + a.type + " and format of value " + o + " do not match!");
                        break;

                      case "unknown":
                        console.log("Detect unknown type of token!");
                    }
                    r++;
                }
                return t;
            }(t, e);
        }
        function g(n, e) {
            if (i(n)) {
                var t = f[e];
                return t || (t = function(n) {
                    function e(n) {
                        r(), u && i.push(u), u = v(n);
                    }
                    function t() {
                        r();
                        var n = "string" === u.type ? "__mpx_str_" + u.value.join("") : u.value;
                        (u = i.pop()).push(n);
                    }
                    function r() {
                        (a = a.trim()) && u.push(a), a = "";
                    }
                    var u = v(), i = [], a = "", s = 0;
                    if (o("^[^[]]+$").test(n)) return n.split(".");
                    for (;s < n.length; ) {
                        var c = n[s];
                        "string" === u.type ? u.mark === c ? t() : u.push(c) : o("['\"[]").test(c) ? e(c) : "]" === c ? t() : "." === c || "+" === c ? (r(), 
                        "+" === c && u.push(c)) : a += c, s++;
                    }
                    return r(), u.value;
                }(e), f[e] = t), d(n, t);
            }
        }
        function d(n, e) {
            for (var t = n, r = e.length, i = 0; i < r; i++) {
                var a, s = e[i];
                if (!t) break;
                if (u(s)) a = d(n, s); else if (o("^__mpx_str_").test(s)) t = s.replace("__mpx_str_", ""); else if (o("^[0-9]+$").test(s)) t = +s; else {
                    if ("+" === s) {
                        t += d(n, e.slice(i + 1));
                        break;
                    }
                    a = s;
                }
                void 0 !== a && (t = t[a]);
            }
            return t;
        }
        function v(n) {
            var e = [];
            return {
                mark: n,
                type: o("['\"]").test(n) ? "string" : "normal",
                value: e,
                push: function(n) {
                    e.push(n);
                }
            };
        }
        function h(n, e, t, r) {
            var o = "";
            if (n && n[e] && t) {
                var u = g(n[e], t);
                a(u) && (o = function(n, e) {
                    return l(n, e).join("");
                }(u, r));
            }
            return o;
        }
        var m = {}, w = {}, k = {};
        function b() {
            return r || m;
        }
        function _(n, e) {
            var t = n.split("|");
            return t[e = function(n, e) {
                if (n = Math.abs(n), 2 === e) return n ? n > 1 ? 1 : 0 : 1;
                return n ? Math.min(n, 2) : 0;
            }(e, t.length)] ? t[e].trim() : n;
        }
        n.exports = {
            t: function(n, e, t) {
                return h(b(), n, e, t);
            },
            tc: function(n, e, t, r) {
                return _(h(b(), n, e, r), t);
            },
            te: function(n, e) {
                return function(n, e, t) {
                    var r = !1;
                    return n && n[e] && t && a(g(n[e], t)) && (r = !0), r;
                }(b(), n, e);
            },
            d: function(n, e, t) {
                return console.log("Datetime localization is not supported!"), e;
            },
            n: function(n, e, t, r) {
                return console.log("Number localization is not supported!"), e;
            }
        }, n.exports.__getMessages = b, n.exports.__getDateTimeFormats = function() {
            return w;
        }, n.exports.__getNumberFormats = function() {
            return k;
        };
    }
}, [ [ 760, 0 ] ] ]);
//# sourceMappingURL=app.js.map