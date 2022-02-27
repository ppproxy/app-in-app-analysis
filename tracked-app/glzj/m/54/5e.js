Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.libMtopConfig = exports.default = void 0, exports.wxGwMtopAdapter = function(e, r) {
    return o(this, void 0, void 0, function() {
        var o, i, a;
        return n(this, function(n) {
            switch (n.label) {
              case 0:
                o = {}, n.label = 1;

              case 1:
                return n.trys.push([ 1, 3, , 4 ]), console.log("[Alsc Wx Mtop] gwMtop params: ", e.req), 
                [ 4, h(e.req) ];

              case 2:
                return i = n.sent(), o = function(e) {
                    var t = (e || {}).data, r = !0;
                    if (t instanceof Object && !1 === (e = t).success && (r = !1), !r) {
                        var o = e.errorMsg || e.msgInfo, n = new Error(o || "未知错误");
                        throw n.res = e, n.error = -1, n;
                    }
                    return e;
                }(i), console.log("[Alsc Wx Mtop] gwMtop success: ", o), e.status = !0, [ 3, 4 ];

              case 3:
                return a = n.sent(), o = g(e, a), [ 3, 4 ];

              case 4:
                return e.res = t({
                    request: e.req
                }, o), [ 4, r() ];

              case 5:
                return n.sent(), [ 2 ];
            }
        });
    });
}, require("../../@babel/runtime/helpers/Arrayincludes");

var e = require("../../@babel/runtime/helpers/typeof"), t = function() {
    return (t = Object.assign || function(e) {
        for (var t, r = 1, o = arguments.length; r < o; r++) for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
    }).apply(this, arguments);
};

function r(e, t) {
    var r = {};
    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var n = 0;
        for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]]);
    }
    return r;
}

function o(e, t, r, o) {
    return new (r || (r = Promise))(function(n, i) {
        function a(e) {
            try {
                c(o.next(e));
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                i(e);
            }
        }
        function s(e) {
            try {
                c(o.throw(e));
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                i(e);
            }
        }
        function c(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                e(t);
            })).then(a, s);
        }
        c((o = o.apply(e, t || [])).next());
    });
}

function n(e, t) {
    var r, o, n, i, a = {
        label: 0,
        sent: function() {
            if (1 & n[0]) throw n[1];
            return n[1];
        },
        trys: [],
        ops: []
    };
    return i = {
        next: s(0),
        throw: s(1),
        return: s(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
        return this;
    }), i;
    function s(i) {
        return function(s) {
            return function(i) {
                if (r) throw new TypeError("Generator is already executing.");
                for (;a; ) try {
                    if (r = 1, o && (n = 2 & i[0] ? o.return : i[0] ? o.throw || ((n = o.return) && n.call(o), 
                    0) : o.next) && !(n = n.call(o, i[1])).done) return n;
                    switch (o = 0, n && (i = [ 2 & i[0], n.value ]), i[0]) {
                      case 0:
                      case 1:
                        n = i;
                        break;

                      case 4:
                        return a.label++, {
                            value: i[1],
                            done: !1
                        };

                      case 5:
                        a.label++, o = i[1], i = [ 0 ];
                        continue;

                      case 7:
                        i = a.ops.pop(), a.trys.pop();
                        continue;

                      default:
                        if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                            a = 0;
                            continue;
                        }
                        if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                            a.label = i[1];
                            break;
                        }
                        if (6 === i[0] && a.label < n[1]) {
                            a.label = n[1], n = i;
                            break;
                        }
                        if (n && a.label < n[2]) {
                            a.label = n[2], a.ops.push(i);
                            break;
                        }
                        n[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    i = [ 6, e ], o = 0;
                } finally {
                    r = n = 0;
                }
                if (5 & i[0]) throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                };
            }([ i, s ]);
        };
    }
}

var i = {
    mock: {
        useMock: !0,
        resTrace: !0
    },
    dev: {
        prefix: "dev",
        resTrace: !0,
        mtopSubDomain: "waptest"
    },
    sit: {
        prefix: "sit",
        resTrace: !0,
        mtopSubDomain: "waptest"
    },
    pre: {
        prefix: "pre",
        resTrace: !0,
        mtopSubDomain: "wapa"
    },
    prod: {
        mtopSubDomain: "m"
    }
}, a = {
    0: "mtop.koubei.alscwxgw.guide.dispatch.nonLogin",
    1: "mtop.koubei.alscwxgw.guide.dispatch",
    2: "mtop.koubei.alscwxgw.guide.dispatch.login"
};

function s(e) {
    if (e && e.res) {
        var t = e.res.ret;
        if (Array.isArray(t) && (t = t.join(",")), t && (t.indexOf("SESSION_EXPIRED") > -1 || t.indexOf("SID_INVALID") > -1 || t.indexOf("AUTH_REJECT") > -1 || t.indexOf("NEED_LOGIN") > -1)) return !0;
    }
    return !1;
}

var c, u = function(e) {
    return null != e;
}, p = (function(t) {
    !function(r, o) {
        var n = (Promise || {
            resolve: function() {}
        }).resolve();
        function i() {
            var e = {}, t = new Promise(function(t, r) {
                e.resolve = t, e.reject = r;
            });
            return e.promise = t, e;
        }
        function a(e, t) {
            for (var r in t) void 0 === e[r] && (e[r] = t[r]);
            return e;
        }
        function s(e) {
            var t = [];
            for (var r in e) e[r] && t.push(r + "=" + encodeURIComponent(e[r]));
            return t.join("&");
        }
        function c(e) {
            var t = getApp();
            return t && t["__mtop_token__" + e] ? t["__mtop_token__" + e] : wx.getStorageSync(e);
        }
        String.prototype.trim || (String.prototype.trim = function() {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        });
        var u = {
            useJsonpResultType: !1,
            safariGoLogin: !0,
            useAlipayJSBridge: !1,
            showModalWhenNotBaxia: !1
        }, p = [], f = {
            ERROR: -1,
            SUCCESS: 0,
            TOKEN_EXPIRED: 1,
            SESSION_EXPIRED: 2
        };
        u.mainDomain = "taobao.com", u.subDomain = "m", u.prefix = "h5api";
        var l = 0;
        function d(t) {
            this.id = ++l, this.params = a(t || {}, {
                v: "*",
                data: {},
                type: "get",
                dataType: "json"
            }), this.params.type = this.params.type.toLowerCase(), "object" == e(this.params.data) && (this.params.data = JSON.stringify(this.params.data)), 
            this.middlewares = p.slice(0);
        }
        d.prototype.use = function(e) {
            if (!e) throw new Error("middleware is undefined");
            return this.middlewares.push(e), this;
        }, d.prototype.__processRequestMethod = function(e) {
            var t = this.params, r = this.options;
            "get" === t.type && "json" === t.dataType ? r.getJSON = !0 : "post" === t.type && (r.postJSON = !0), 
            e();
        }, d.prototype.__processRequestType = function(e) {
            if (this.params, this.options.H5Request = !0, e) return e();
        };
        var m = "_m_h5_c2";
        d.prototype.__getTokenFromCookie = function() {
            this.params;
            var e = this.options;
            return e.token = (c(m) || "").split(";")[0], e.token && (e.token = e.token.split("_")[0]), 
            Promise.resolve();
        }, d.prototype.__waitWKWebViewCookie = function(e) {
            var t = this.options;
            t.waitWKWebViewCookieFn && t.H5Request && r.webkit && r.webkit.messageHandlers ? t.waitWKWebViewCookieFn(e) : e();
        }, d.prototype.__processToken = function(e) {
            var t = this, r = this.params, o = this.options;
            return o.token && delete o.token, n.then(function() {
                return t.__getTokenFromCookie();
            }).then(e).then(function() {
                var e = o.retJson, n = e.ret;
                if ("[object Array]" === Object.prototype.toString.call(n) && (n = n.join(",")), 
                n.indexOf("TOKEN_EMPTY") > -1 || !0 === o.CDR && n.indexOf("ILLEGAL_ACCESS") > -1 || "2.0" === r.SV && n.indexOf("TOKEN_ILLEGAL") > -1 || n.indexOf("TOKEN_EXOIRED") > -1) {
                    if (o.maxRetryTimes = o.maxRetryTimes || 5, o.failTimes = o.failTimes || 0, o.H5Request && ++o.failTimes < o.maxRetryTimes) return t.__sequence([ t.__waitWKWebViewCookie, t.__processToken, t.__processRequestUrl, t.middlewares, t.__processRequest ]);
                    e.retType = f.TOKEN_EXPIRED;
                }
            });
        }, d.prototype.__processRequestUrl = function(e) {
            var t = this.params, o = this.options;
            if (o.hostSetting && o.hostSetting[r.location.hostname]) {
                var n = o.hostSetting[r.location.hostname];
                n.prefix && (o.prefix = n.prefix), n.subDomain && (o.subDomain = n.subDomain), n.mainDomain && (o.mainDomain = n.mainDomain);
            }
            if (!0 === o.H5Request) {
                var i = "https://" + (o.prefix ? o.prefix + "." : "") + (o.subDomain ? o.subDomain + "." : "") + o.mainDomain + "/h5/" + t.api.toLowerCase() + "/" + t.v.toLowerCase() + "/", a = t.appKey || ("waptest" === o.subDomain ? "4272" : "12574478"), s = new Date().getTime(), u = {
                    jsv: "2.4.12",
                    appKey: a,
                    t: s
                }, p = {
                    data: t.data,
                    ua: t.ua
                };
                "2.0" === t.SV && (i += "2.0/", u.sign = function(e) {
                    function t(e, t) {
                        return e << t | e >>> 32 - t;
                    }
                    function r(e, t) {
                        var r, o, n, i, a;
                        return n = 2147483648 & e, i = 2147483648 & t, a = (1073741823 & e) + (1073741823 & t), 
                        (r = 1073741824 & e) & (o = 1073741824 & t) ? 2147483648 ^ a ^ n ^ i : r | o ? 1073741824 & a ? 3221225472 ^ a ^ n ^ i : 1073741824 ^ a ^ n ^ i : a ^ n ^ i;
                    }
                    function o(e, o, n, i, a, s, c) {
                        return e = r(e, r(r(function(e, t, r) {
                            return e & t | ~e & r;
                        }(o, n, i), a), c)), r(t(e, s), o);
                    }
                    function n(e, o, n, i, a, s, c) {
                        return e = r(e, r(r(function(e, t, r) {
                            return e & r | t & ~r;
                        }(o, n, i), a), c)), r(t(e, s), o);
                    }
                    function i(e, o, n, i, a, s, c) {
                        return e = r(e, r(r(function(e, t, r) {
                            return e ^ t ^ r;
                        }(o, n, i), a), c)), r(t(e, s), o);
                    }
                    function a(e, o, n, i, a, s, c) {
                        return e = r(e, r(r(function(e, t, r) {
                            return t ^ (e | ~r);
                        }(o, n, i), a), c)), r(t(e, s), o);
                    }
                    function s(e) {
                        var t, r = "", o = "";
                        for (t = 0; t <= 3; t++) r += (o = "0" + (e >>> 8 * t & 255).toString(16)).substr(o.length - 2, 2);
                        return r;
                    }
                    var c, u, p, f, l, d, m, h, g, v;
                    for (c = function(e) {
                        for (var t, r = e.length, o = r + 8, n = 16 * ((o - o % 64) / 64 + 1), i = new Array(n - 1), a = 0, s = 0; s < r; ) a = s % 4 * 8, 
                        i[t = (s - s % 4) / 4] = i[t] | e.charCodeAt(s) << a, s++;
                        return a = s % 4 * 8, i[t = (s - s % 4) / 4] = i[t] | 128 << a, i[n - 2] = r << 3, 
                        i[n - 1] = r >>> 29, i;
                    }(e = function(e) {
                        e = e.replace(/\r\n/g, "\n");
                        for (var t = "", r = 0; r < e.length; r++) {
                            var o = e.charCodeAt(r);
                            o < 128 ? t += String.fromCharCode(o) : o > 127 && o < 2048 ? (t += String.fromCharCode(o >> 6 | 192), 
                            t += String.fromCharCode(63 & o | 128)) : (t += String.fromCharCode(o >> 12 | 224), 
                            t += String.fromCharCode(o >> 6 & 63 | 128), t += String.fromCharCode(63 & o | 128));
                        }
                        return t;
                    }(e)), m = 1732584193, h = 4023233417, g = 2562383102, v = 271733878, u = 0; u < c.length; u += 16) p = m, 
                    f = h, l = g, d = v, m = o(m, h, g, v, c[u + 0], 7, 3614090360), v = o(v, m, h, g, c[u + 1], 12, 3905402710), 
                    g = o(g, v, m, h, c[u + 2], 17, 606105819), h = o(h, g, v, m, c[u + 3], 22, 3250441966), 
                    m = o(m, h, g, v, c[u + 4], 7, 4118548399), v = o(v, m, h, g, c[u + 5], 12, 1200080426), 
                    g = o(g, v, m, h, c[u + 6], 17, 2821735955), h = o(h, g, v, m, c[u + 7], 22, 4249261313), 
                    m = o(m, h, g, v, c[u + 8], 7, 1770035416), v = o(v, m, h, g, c[u + 9], 12, 2336552879), 
                    g = o(g, v, m, h, c[u + 10], 17, 4294925233), h = o(h, g, v, m, c[u + 11], 22, 2304563134), 
                    m = o(m, h, g, v, c[u + 12], 7, 1804603682), v = o(v, m, h, g, c[u + 13], 12, 4254626195), 
                    g = o(g, v, m, h, c[u + 14], 17, 2792965006), m = n(m, h = o(h, g, v, m, c[u + 15], 22, 1236535329), g, v, c[u + 1], 5, 4129170786), 
                    v = n(v, m, h, g, c[u + 6], 9, 3225465664), g = n(g, v, m, h, c[u + 11], 14, 643717713), 
                    h = n(h, g, v, m, c[u + 0], 20, 3921069994), m = n(m, h, g, v, c[u + 5], 5, 3593408605), 
                    v = n(v, m, h, g, c[u + 10], 9, 38016083), g = n(g, v, m, h, c[u + 15], 14, 3634488961), 
                    h = n(h, g, v, m, c[u + 4], 20, 3889429448), m = n(m, h, g, v, c[u + 9], 5, 568446438), 
                    v = n(v, m, h, g, c[u + 14], 9, 3275163606), g = n(g, v, m, h, c[u + 3], 14, 4107603335), 
                    h = n(h, g, v, m, c[u + 8], 20, 1163531501), m = n(m, h, g, v, c[u + 13], 5, 2850285829), 
                    v = n(v, m, h, g, c[u + 2], 9, 4243563512), g = n(g, v, m, h, c[u + 7], 14, 1735328473), 
                    m = i(m, h = n(h, g, v, m, c[u + 12], 20, 2368359562), g, v, c[u + 5], 4, 4294588738), 
                    v = i(v, m, h, g, c[u + 8], 11, 2272392833), g = i(g, v, m, h, c[u + 11], 16, 1839030562), 
                    h = i(h, g, v, m, c[u + 14], 23, 4259657740), m = i(m, h, g, v, c[u + 1], 4, 2763975236), 
                    v = i(v, m, h, g, c[u + 4], 11, 1272893353), g = i(g, v, m, h, c[u + 7], 16, 4139469664), 
                    h = i(h, g, v, m, c[u + 10], 23, 3200236656), m = i(m, h, g, v, c[u + 13], 4, 681279174), 
                    v = i(v, m, h, g, c[u + 0], 11, 3936430074), g = i(g, v, m, h, c[u + 3], 16, 3572445317), 
                    h = i(h, g, v, m, c[u + 6], 23, 76029189), m = i(m, h, g, v, c[u + 9], 4, 3654602809), 
                    v = i(v, m, h, g, c[u + 12], 11, 3873151461), g = i(g, v, m, h, c[u + 15], 16, 530742520), 
                    m = a(m, h = i(h, g, v, m, c[u + 2], 23, 3299628645), g, v, c[u + 0], 6, 4096336452), 
                    v = a(v, m, h, g, c[u + 7], 10, 1126891415), g = a(g, v, m, h, c[u + 14], 15, 2878612391), 
                    h = a(h, g, v, m, c[u + 5], 21, 4237533241), m = a(m, h, g, v, c[u + 12], 6, 1700485571), 
                    v = a(v, m, h, g, c[u + 3], 10, 2399980690), g = a(g, v, m, h, c[u + 10], 15, 4293915773), 
                    h = a(h, g, v, m, c[u + 1], 21, 2240044497), m = a(m, h, g, v, c[u + 8], 6, 1873313359), 
                    v = a(v, m, h, g, c[u + 15], 10, 4264355552), g = a(g, v, m, h, c[u + 6], 15, 2734768916), 
                    h = a(h, g, v, m, c[u + 13], 21, 1309151649), m = a(m, h, g, v, c[u + 4], 6, 4149444226), 
                    v = a(v, m, h, g, c[u + 11], 10, 3174756917), g = a(g, v, m, h, c[u + 2], 15, 718787259), 
                    h = a(h, g, v, m, c[u + 9], 21, 3951481745), m = r(m, p), h = r(h, f), g = r(g, l), 
                    v = r(v, d);
                    return (s(m) + s(h) + s(g) + s(v)).toLowerCase();
                }(o.token + "&" + s + "&" + a + "&" + t.data), u.c = c(m)), "3.0" === t.SV && (i += "3.0/"), 
                Object.keys(t).forEach(function(e) {
                    void 0 === u[e] && void 0 === p[e] && "headers" !== e && "ext_headers" !== e && "ext_querys" !== e && (u[e] = t[e]);
                }), t.ext_querys && Object.keys(t.ext_querys).forEach(function(e) {
                    u[e] = t.ext_querys[e];
                }), o.getJSONP ? u.type = "jsonp" : o.getOriginalJSONP ? u.type = "originaljsonp" : (o.getJSON || o.postJSON) && (u.type = "originaljson"), 
                void 0 !== t.valueType && ("original" === t.valueType ? o.getJSONP || o.getOriginalJSONP ? u.type = "originaljsonp" : (o.getJSON || o.postJSON) && (u.type = "originaljson") : "string" === t.valueType && (o.getJSONP || o.getOriginalJSONP ? u.type = "jsonp" : (o.getJSON || o.postJSON) && (u.type = "json"))), 
                !0 === o.useJsonpResultType && "originaljson" === u.type && delete u.type, o.dangerouslySetProtocol && (i = o.dangerouslySetProtocol + ":" + i), 
                u.SV && delete u.SV, delete u.mtopFailCallback, o.querystring = u, o.postdata = p, 
                o.path = i;
            }
            o.$loginClient ? o.$loginClient.getSession(function(r) {
                if (r.cookie2) {
                    var o = JSON.stringify(r);
                    t.ext_headers ? t.ext_headers["x-smallstc"] = o : t.headers ? t.headers["x-smallstc"] = o : t.ext_headers = {
                        "x-smallstc": o
                    };
                }
                e();
            }) : e();
        }, d.prototype.__processUnitPrefix = function(e) {
            e();
        }, d.prototype.__requestJSON = function(e) {
            var t, r, o = i(), n = this.params, a = this.options, c = a.path + "?" + s(a.querystring);
            if (a.getJSON ? (t = "GET", c += "&" + s(a.postdata)) : a.postJSON && (t = "POST", 
            r = s(a.postdata)), "3.0" === n.SV && a.$signClient) {
                var u = a.$signClient.getSign(c.substr(c.indexOf("?") + 1), r);
                c += "&sign=" + encodeURIComponent(u);
            }
            var p = function(e, t) {
                "function" == typeof n.mtopFailCallback && n.mtopFailCallback(e, t);
            }, f = +new Date(), l = wx.request({
                url: c,
                method: t,
                data: r || {},
                header: Object.assign({
                    Accept: "application/json",
                    "x-tap": "wx",
                    "content-type": "application/x-www-form-urlencoded"
                }, n.ext_headers || n.headers || {}),
                success: function(t) {
                    var r = t, n = t.header || "";
                    try {
                        (r = t.data).responseHeaders = n, r.profile = t.profile, r.duration = +new Date() - f, 
                        a.results = [ r ], o.resolve();
                    } catch (r) {
                        r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
                        e("PARSE_JSON_ERROR::解析JSON失败"), p(l, t);
                    }
                },
                fail: function(t) {
                    e(a.abortErrMsg || "ABORT::接口异常退出"), p(l, t);
                }
            });
            return o.promise;
        }, d.prototype.__processRequest = function(e, t) {
            var r = this;
            return n.then(function() {
                return r.options, r.__requestJSON(t);
            }).then(e).then(function() {
                var e = r.options, t = r.params, o = e.results[0], n = o && o.ret || [];
                o.ret = n, "[object Array]" === Object.prototype.toString.call(n) && (n = n.join(","));
                var i, a, s, c = o.c;
                "2.0" === t.SV && c && (i = m, a = c, e.pageDomain, (s = getApp()) && (s["__mtop_token__" + i] = a), 
                wx.setStorageSync(i, a)), n.indexOf("SUCCESS") > -1 ? o.retType = f.SUCCESS : o.retType = f.ERROR, 
                e.retJson = o;
            });
        }, d.prototype.__sequence = function(e) {
            var t = this, r = [], o = [];
            e.forEach(function e(n) {
                if ("[object Array]" === Object.prototype.toString.call(n)) n.forEach(e); else {
                    var a, s = i(), c = i();
                    r.push(function() {
                        return s = i(), (a = n.call(t, function(e) {
                            return s.resolve(e), c.promise;
                        }, function(e) {
                            return s.reject(e), c.promise;
                        })) && (a = a.catch(function(e) {
                            s.reject(e);
                        })), s.promise;
                    }), o.push(function(e) {
                        return c.resolve(e), a;
                    });
                }
            });
            for (var a, s = n; a = r.shift(); ) s = s.then(a);
            for (;a = o.pop(); ) s = s.then(a);
            return s;
        };
        var h = function(e) {
            e();
        }, g = function(e) {
            e();
        };
        d.prototype.request = function(e) {
            var t = this;
            this.options = a(e || {}, u);
            var r = Promise.resolve([ h, g ]).then(function(e) {
                var r = e[0], o = e[1];
                return t.__sequence([ r, t.__processRequestMethod, t.__processRequestType, t.__processToken, t.__processRequestUrl, t.middlewares, t.__processRequest, o ]);
            }).then(function() {
                var e = t.options.retJson;
                return e.retType !== f.SUCCESS ? Promise.reject(e) : t.options.successCallback ? void t.options.successCallback(e) : Promise.resolve(e);
            }).catch(function(e) {
                var r;
                if (e instanceof Error ? (console.error(e.stack), r = {
                    ret: [ e.message ],
                    stack: [ e.stack ],
                    retJson: f.ERROR
                }) : r = "string" == typeof e ? {
                    ret: [ e ],
                    retJson: f.ERROR
                } : void 0 !== e ? e : t.options.retJson, !t.options.failureCallback) return Promise.reject(r);
                t.options.failureCallback(r);
            });
            return this.__processRequestType(), t.options.H5Request && (t.constructor.__firstProcessor || (t.constructor.__firstProcessor = r), 
            h = function(e) {
                t.constructor.__firstProcessor.then(e).catch(e);
            }), r;
        }, o.mtop = function(e) {
            return new d(e);
        }, o.mtop.request = function(e, t, r) {
            var o = {
                $loginClient: e.$loginClient || "",
                H5Request: e.H5Request,
                successCallback: t,
                failureCallback: r || t
            };
            return delete e.$loginClient, new d(e).request(o);
        };
        var v = {
            onLoad: function(e) {
                this.setData({
                    tmpData: {
                        showWebView: "miniprogram" !== e.subType,
                        webViewSrc: decodeURIComponent(e.redirectUrl),
                        canIUse: !!oe.getUserProfile
                    }
                });
            },
            onHide: function() {
                ae();
            },
            onUnload: function() {
                ae();
            },
            onMessage: function(e) {
                var t = e.detail.data[0], r = t.success, o = t.token, n = t.expire;
                r ? (o && R("baxiaToken", {
                    token: o,
                    expire: n
                }), se()) : ae();
            },
            bindGetUserInfo: function(e) {
                R("baxiaUserInfo", e.detail.userInfo), D(), se();
            },
            bindGetUserProfile: function() {
                oe.getUserProfile({
                    desc: "通过授权以进行进一步的安全认证",
                    success: function(e) {
                        R("baxiaUserInfo", e.userInfo), D(), se();
                    },
                    fail: function(e) {
                        D(), ae();
                    }
                });
            }
        };
        o.mtop.middlewares = p, o.mtop.config = u, o.mtop.RESPONSE_TYPE = f, o.mtop.CLASS = d, 
        o.mtop.config.$baxiaMiniprogram = {
            params: v,
            init: function(e) {
                var t;
                void 0 === e && (e = {}), e.getOpenId && "function" == typeof e.getOpenId && (t = e.getOpenId, 
                S = t), e.getOpenId && "function" == typeof e.getOpenId && function(e) {
                    _ = e;
                }(e.checkWhiteList);
                var r = e.path && e.path.substring(0, e.path.lastIndexOf("/"));
                A(r, e.checkWebview), R(X, e);
            }
        }, t && (t.exports = {
            mtop: o.mtop
        });
        var y = function(e, t) {
            return !!e && e.indexOf(t) > -1;
        };
        function w(e, t, r) {
            return e && !y(e, t) ? function(e, t, r) {
                return y(e, t) ? e : e.indexOf("?") > -1 ? e + "&" + t + "=" + r : e + "?" + t + "=" + r;
            }(e, t, r) : e;
        }
        function b(e, t, r) {
            var o = t + "=" + r;
            if (!e) return o;
            if (e.includes(t)) {
                var n = new RegExp(t + "=[^;]*", "gi");
                return e.replace(n, o);
            }
            return ";" === e.substring(e.length - 1) ? "" + e + o : e + ";" + o;
        }
        var x, S, _, O = "2.0.35", C = "undefined" != typeof wx && "function" == typeof wx.request ? (x = "wx", 
        wx) : "undefined" != typeof my && "function" == typeof my.request ? (x = "my", my) : "undefined" != typeof dd && "function" == typeof dd.httpRequest ? (x = "dd", 
        dd) : "undefined" != typeof tt && "function" == typeof tt.request ? (x = "tt", tt) : "undefined" != typeof ks && "function" == typeof ks.request ? (x = "ks", 
        ks) : "undefined" != typeof swan && "function" == typeof swan.request ? (x = "swan", 
        swan) : null, T = {
            platform: C,
            platformType: x,
            request: "dd" === x ? C.httpRequest : C.request,
            scanCode: "dd" === x ? C.scan : C.scanCode
        }, k = T.platform, E = T.platformType, I = function(e) {
            return "my" == E || "dd" == E ? k.getStorageSync({
                key: e
            }).data || "" : k.getStorageSync(e);
        }, R = function(e, t) {
            "my" == E || "dd" == E ? k.setStorageSync({
                key: e,
                data: t
            }) : k.setStorageSync(e, t);
        }, q = function(e) {
            "my" == E || "dd" == E ? k.removeStorageSync({
                key: e
            }) : k.removeStorageSync(e);
        }, N = function(e) {
            k.navigateTo({
                url: e
            });
        }, D = function() {
            k.navigateBack();
        }, M = function() {
            return k.getFileSystemManager && k.getFileSystemManager();
        }, j = function() {
            return k.getSystemInfoSync && k.getSystemInfoSync();
        }, P = function(e) {
            k.showModal(e);
        }, A = function(e, t) {
            void 0 === e && (e = "/pages/baxia/webview"), void 0 === t && (t = !0);
            try {
                var r = M() && M().readdirSync(e);
                if (!r) return t ? void setTimeout(function() {
                    L = I("baxiaWebview") ? O : 1;
                }, 1e3) : void (L = 2);
                L = r.length ? O : 1;
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                if (!t) return void (L = 2);
                L = 1;
            }
        }, L = O, J = function() {
            return L;
        }, W = T.platformType, U = T.request, F = null, B = null, V = null, H = null, G = null;
        try {
            var K = j();
            F = K.brand, B = K.model, V = K.version, H = K.system, G = K.platform;
        } catch (e) {}
        var $ = function(e, t, r, o) {
            if (void 0 === t && (t = 1), void 0 === r && (r = 1), void 0 === o && (o = "baxia"), 
            !(r > 0 && Math.random() >= r)) {
                var n = getCurrentPages && getCurrentPages();
                n && n.length || (n = [ {
                    route: "",
                    options: ""
                } ]);
                var i = n[n.length - 1], a = i.route, s = JSON.stringify(i.options);
                !function(e, t) {
                    var r = [];
                    for (var o in e) r.push(o + "=" + encodeURIComponent(e[o]));
                    U({
                        url: "https://gm.mmstat.com/fsp.1.1?" + r.join("&"),
                        method: "GET"
                    });
                }({
                    code: t,
                    msg: (e + "").substr(0, 1e3) + ";v:" + O,
                    pid: o,
                    page: a,
                    query: s,
                    c1: F,
                    c2: B,
                    c3: V,
                    c4: H,
                    c5: G,
                    c6: W
                });
            }
        };
        function Y(e) {
            $(e, 14, 1, "baxia");
        }
        var X = "baxiaOptions", z = "/pages/baxia/webview/index", Q = T.platform, Z = T.platformType, ee = T.request, te = T.scanCode, re = "检测到未引入霸下 webview，请根据文档完成 WebView 引入，文档：https://yuque.antfin-inc.com/security-base/doc/xe1gec", oe = T.platform, ne = [], ie = !1;
        function ae() {
            if (ie = !1, ne.length) {
                for (var e = 0; e < ne.length; e++) {
                    var t = ne[e], r = t.optionsCallBack, o = t.response;
                    try {
                        r.fail && r.fail(o);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        throw r.complete && r.complete(o), Error(e);
                    }
                    r.complete && r.complete(o);
                }
                ne = [];
            }
        }
        function se() {
            if (ie = !1, ne.length) {
                for (var e = 0; e < ne.length; e++) {
                    var t = ne[e].optionsCallBack;
                    t && oe.request(t);
                }
                ne = [];
            }
        }
        function ce(e) {
            $(e, 12, 1, "spl");
        }
        A(), function() {
            try {
                !function(e) {
                    var t = e.done;
                    if (!Z || "wx" !== Z) return Y("No available for current platform"), void console.warn("[alsc-mini-wx-mtop-adapter] baxia No available for current platform");
                    var r = j().platform;
                    setTimeout(function() {
                        "devtools" === r && 1 === J() && o.mtop.config.showModalWhenNotBaxia && (P({
                            title: "警告",
                            content: re
                        }), Y("INIT: not import baxia webview"));
                    }, 1e3);
                    var n = function(e) {
                        try {
                            var n = J();
                            if (1 === n && "devtools" === r && o.mtop.config.showModalWhenNotBaxia) return e.fail({
                                statusCode: 400,
                                errMsg: re,
                                data: {
                                    ret: [ "FAIL_NO_WEBVIEW", re ],
                                    data: null
                                }
                            }), Y("Request: not import baxia webview"), void console.error(re);
                            e.header = e.header || {};
                            var i = I("baxiaToken"), a = i.token, s = i.expire, c = new Date().valueOf();
                            s && c - parseInt(s) > 0 ? q("baxiaToken") : a && (e.header.cookie = b(e.header.cookie, "x5sec", a));
                            var u = I("punishTestId"), p = u.uniqueId, f = u.expireTime;
                            f && c - parseInt(f) > 0 ? q("punishTestId") : p && (e.header.cookie = b(e.header.cookie, "punish_test_id", p));
                            var l = I("baxiaUserInfo");
                            l && (l = "" + encodeURIComponent(JSON.stringify(l)), e.header = e.header || {}, 
                            e.header.cookie = b(e.header.cookie, "userInfo", l));
                            var d = function() {
                                if (S) return S();
                                var e = I("TB_STORAGE");
                                return e ? e.openId : null;
                            }();
                            if (d && (e.header["bx-openId"] = d), C = e.url, !_ || !_(C)) {
                                var m = I(X), h = m.appendTo, g = m.useBusinessDomain;
                                "header" === h ? (!0 === g && (e.header["_bx-ubd"] = "true"), e.header["_bx-m"] = n.toString()) : (!0 === g && (e.url = w(e.url, "_bx-ubd", "true")), 
                                e.url = w(e.url, "_bx-m", n.toString()));
                            }
                            var v = e.success, y = e.fail, x = e.complete, O = e;
                            e.success = function(e) {
                                var r = e.data;
                                t({
                                    optionsCallBack: O,
                                    response: e,
                                    data: r,
                                    successCallBack: v,
                                    failCallBack: y,
                                    completeCallBack: x
                                });
                            }, e.fail = function(e) {
                                try {
                                    y && y(e);
                                } catch (t) {
                                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                    throw x && x(e), Error(t);
                                }
                                x && x(e);
                            }, e.complete = null;
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            Y("Request Hook MiniProgram Error，Message:" + e.message);
                        }
                        var C;
                        return this(e);
                    }.bind(ee), i = "dd" === Z ? {
                        httpRequest: {
                            value: n
                        }
                    } : {
                        request: {
                            value: n
                        }
                    };
                    Object.defineProperties(Q, i);
                    var a = function(e) {
                        try {
                            var t = e.success, r = e.fail, o = e.complete;
                            e.success = function(e) {
                                var r;
                                if ("string" == typeof (r = "my" === Z || "dd" === Z ? e.code : e.result) && r.indexOf("sync-unique-id.html") > -1 && r.indexOf("bxWebviewDomain=") > -1) {
                                    var o = I(X), n = o && o.path || z, i = r.match(/id=([^&]+)/) && r.match(/id=([^&]+)/)[1], a = r.match(/uniqueId=([^&]+)/) && r.match(/uniqueId=([^&]+)/)[1], s = r.match(/bxWebviewDomain=([^&]+)/) && r.match(/bxWebviewDomain=([^&]+)/)[1];
                                    return i && a && s ? (R("punishTestId", {
                                        uniqueId: a,
                                        expireTime: new Date().valueOf() + 6e5
                                    }), void N(n + "?redirectUrl=" + encodeURIComponent(s + "/baxia-punish-test?id=" + i) + "&subType=")) : void P({
                                        title: "警告",
                                        content: "同步失败，刷新控制台后重新扫码测试"
                                    });
                                }
                                t(e);
                            }, e.fail = function(e) {
                                try {
                                    r && r(e);
                                } catch (t) {
                                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                    throw o && o(e), Error(t);
                                }
                                o && o(e);
                            }, e.complete = null;
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            Y("ScanCode Hook MiniProgram Error，Message:" + e.message);
                        }
                        return this(e);
                    }.bind(te), s = "dd" === Z ? {
                        scan: {
                            value: a
                        }
                    } : {
                        scanCode: {
                            value: a
                        }
                    };
                    Object.defineProperties(Q, s);
                }({
                    done: function(t) {
                        var r = t.optionsCallBack, o = t.response, n = t.data, i = t.successCallBack, a = t.failCallBack, s = t.completeCallBack;
                        if (function(t) {
                            void 0 === t && (t = "");
                            var r = {
                                valid: !1,
                                type: ""
                            };
                            if ("object" == e(t)) t = JSON.stringify(t); else try {
                                JSON.parse(t);
                            } catch (o) {
                                o = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(o);
                                try {
                                    t = function(e) {
                                        if ("string" != typeof e) return e;
                                        var t = e.match(/^\w+\(({[^()]+})\)$/);
                                        return t && (e = t[1]), e;
                                    }(t), JSON.parse(t);
                                } catch (t) {
                                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                    return r.valid = !0, r;
                                }
                            }
                            t = t.toLocaleLowerCase();
                            var o = y(t, "rgv587_"), n = !o && y(t, "assist_flag") && y(t, "url");
                            return o || n || (r.valid = !0), r;
                        }(n).valid) {
                            try {
                                i && i(o);
                            } catch (t) {
                                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                throw s && s(o), Error(t);
                            }
                            s && s(o);
                        } else r.success = i, r.fail = a, r.complete = s, function(e, t, r) {
                            void 0 === r && (r = {});
                            try {
                                if (ne.push(r), ie) return;
                                if (e && -1 === e.indexOf("http")) {
                                    var o = function(e) {
                                        if (!e) return "";
                                        var t = e.match(/(https|http):\/\/([^\/]+)\//i);
                                        return t ? t[0] : "";
                                    }(r.optionsCallBack.url);
                                    e = o + e;
                                }
                                var n = I(X), i = n && n.path || z;
                                N(i + "?redirectUrl=" + encodeURIComponent(e) + "&subType=" + t), ie = !0;
                            } catch (t) {
                                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                ie = !1, Y("handler err，param:" + e + "," + JSON.stringify(r.options) + "," + t.message + t.stack);
                            }
                        }(n.url || n.data && n.data.url, n.subType || n.data && n.data.subType, {
                            optionsCallBack: r,
                            response: o
                        });
                    }
                });
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                Y("Hook MiniProgram Error，Message:" + e.message);
            }
        }(), function() {
            try {
                var t = I("xlly"), r = t.xlly_s, o = t.expire, n = new Date().valueOf();
                if (r && o && n - parseInt(o) < 0) return;
                q("xlly"), setTimeout(function() {
                    return T.platform.request({
                        url: "https://fourier.taobao.com/rp?ext=52",
                        method: "GET",
                        timeout: 1e4,
                        success: function(t) {
                            if (void 0 === (o = t) && (o = ""), "object" == e(o) && (o = JSON.stringify(o)), 
                            (o = o.toLocaleLowerCase()).indexOf("mini_simple") > -1) {
                                var r = new Date().getTime() + 864e5;
                                R("xlly", {
                                    xlly_s: 1,
                                    expire: r
                                });
                            }
                            var o;
                        },
                        fail: function(e) {
                            ce("Send sample ，Message:" + e.errMsg);
                        }
                    });
                });
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                ce("Send sample ，Message:" + t.message);
            }
        }();
    }(window || (window = {}), window.lib || (window.lib = {}));
}(c = {
    exports: {}
}), c.exports).mtop;

function f(e) {
    return o(this, void 0, void 0, function() {
        return n(this, function(o) {
            return [ 2, new Promise(function(o, n) {
                var a = e.api, s = e.param, c = e.method, f = e.type, l = void 0 === f ? "get" : f, d = e.options, m = void 0 === d ? {} : d, h = e.wxRequestEnv, g = void 0 === h ? "prod" : h, v = e.adapterConfig, y = void 0 === v ? {} : v, w = r(e, [ "api", "param", "method", "type", "options", "wxRequestEnv", "adapterConfig" ]), b = e.header || e.headers || {}, x = m.mainDomain, S = m.subDomain, _ = m.prefix, O = m.showModalWhenNotBaxia, C = y.middleWares, T = void 0 === C ? [] : C, k = r(y, [ "middleWares" ]), E = getApp();
                E && E.$tracert && E.$tracert.getCurrentPageId && (b["x-alsc-pageid"] = E.$tracert.getCurrentPageId()), 
                p.config.subDomain = i[g].mtopSubDomain, u(S) && (p.config.subDomain = S), u(x) && (p.config.mainDomain = x), 
                u(_) && (p.config.prefix = _), u(O) && (p.config.showModalWhenNotBaxia = O), T.forEach(function(e) {
                    p.middlewares.some(function(t) {
                        return t === e;
                    }) || p.middlewares.push(e);
                });
                var I = c || l;
                p.request(t(t(t({
                    api: a,
                    v: m.v || "1.0",
                    data: s,
                    SV: "2.0",
                    headers: b,
                    type: I
                }, m), w), k), function(e) {
                    o(e);
                }, function(e) {
                    var t = new Error();
                    t.res = e, n(t);
                });
            }).then(function(e) {
                var t, r, o = e, n = !0, i = e.responseHeaders, a = (t = i, r = {}, Object.keys(t).forEach(function(e) {
                    var o = e.toLocaleLowerCase();
                    r[o] = t[e];
                }), r);
                "[object Object]" !== Object.prototype.toString.call(o) && (o = {
                    errMsg: a.memo,
                    fetchResHeader: a
                }), !1 === o.success && "SUCCESS" !== o.code && (n = !1);
                var s = o.businessDesc || o.errorMessage || o.msg || o.message || decodeURIComponent(a.memo || "");
                if (!n) {
                    var c = new Error(s || "未知错误");
                    throw c.res = o, c.error = -1, c;
                }
                return o;
            }) ];
        });
    });
}

var l = p.config;

function d(e, t) {
    var r = e.sid, o = e.munb, n = e.unb, i = t.needUid, a = void 0 !== i && i, s = {
        SID: r,
        munb: a ? o : void 0,
        unb: a ? n : void 0
    };
    return t.headers = t.headers || {}, t.headers.cookie = function(e) {
        var t = "";
        return Object.keys(e).forEach(function(r) {
            void 0 !== e[r] && (t += r + "=" + e[r] + ";");
        }), t;
    }(s), e = JSON.stringify(e), t.ext_headers ? t.ext_headers["x-smallstc"] = e : t.headers ? t.headers["x-smallstc"] = e : t.ext_headers = {
        "x-smallstc": e
    }, t;
}

function m(e) {
    return e && e.msg && -1 !== e.msg.indexOf("cookie2IsEmpty") || s(e);
}

function h(e, t, r) {
    return void 0 === r && (r = !1), e._reloginTimes = e._reloginTimes || 0, new Promise(function(t, o) {
        var n, c, u = getApp(), p = (n = wx.getSystemInfoSync() || {}, c = "android" === (n.platform || "").toLowerCase() ? "android" : "ios", 
        {
            osVersion: n.system,
            device: c
        } || {}).device, l = e || {}, g = l.wxRequestEnv, v = void 0 === g ? "prod" : g, y = l.loginType, w = void 0 === y ? 0 : y, b = l.ttid, x = l.api, S = l.wxMtopGwUrls, _ = void 0 === S ? {} : S, O = l.noRelogin, C = void 0 !== O && O, T = {}, k = {}, E = "";
        if (e.subDomain = i[v].mtopSubDomain, e.api = x || _[w] || a[w], console.log("[Alsc Wx Mtop] wxGwMtop -> req.api: " + e.api), 
        e.ttid = b || "200001@wechat_" + ("ios" === p ? "iphone" : "android") + "_1.0.0", 
        e.options && (e.options.type = e.options.type || e.options.method), 1 !== w && 2 !== w || (E = (k = (T = u && u.login || {}).getSession && T.getSession() || {}).cookie2), 
        1 !== w && 2 !== w || 1 === w && !E) return f(e).then(function(e) {
            return t(e);
        }).catch(function(e) {
            return o(e);
        });
        if (E && !r) return f(e = d(k, e)).then(function(e) {
            return t(e);
        }).catch(function(e) {
            return o(e);
        });
        if (2 === w) {
            if (e._reloginTimes += 1, !T.goToLogin) {
                var I = new Error();
                return I.msg = "goToLoginIsEmpty", o(I);
            }
            return T.goToLogin().then(function(r) {
                if ((r || {}).cookie2) return f(e = d(r, e)).then(function(e) {
                    return t(e);
                }).catch(function(e) {
                    return o(e);
                });
                var n = new Error();
                n.msg = "cookie2IsEmpty", o(n);
            }).catch(function(t) {
                return s(t) && (T.loginInfo = {}), !C && e._reloginTimes < 3 && m(t) ? h(e, {}, !0) : o(t);
            });
        }
    }).catch(function(t) {
        var r = (e || {}).loginType;
        if (2 === (void 0 === r ? 0 : r)) {
            if (s(t)) {
                var o = getApp();
                (o && o.login || {}).loginInfo = {};
            }
            var n = m(t);
            return !e.noRelogin && e._reloginTimes < 3 && n ? h(e, {}, !0) : ((t && "login-cancle" === t.code || n) && ((t = t || new Error("获取用户信息失败")).error = 20), 
            Promise.reject(t));
        }
        return Promise.reject(t);
    });
}

function g(e, t) {
    var r = e.req.limitLevel, o = void 0 === r ? "none" : r, n = function(e, t) {
        if (!e) return e;
        var r, o, n = e.error, i = e.MtopErrorMsg, a = e.retCode, c = e.ret, u = "";
        (function(e) {
            var t = e.ret, r = void 0 === t ? [] : t, o = e.error, n = e.errorCode, i = e.data, a = e.errCode, s = n;
            if (!n && i && i.errorCode && (s = i.errorCode), "FAIL_SYS_TRAFFIC_LIMIT" === o || "ANDROID_SYS_API_FLOW_LIMIT_LOCKED" === o || 1002 === o || "RATE_LIMITED" === s) return !0;
            if ("SYSTEM_BUSY" === a) return !0;
            var c = "";
            return r && r.length && (c = r[0] || ""), -1 !== (c = c.toLocaleLowerCase()).indexOf("traffic_limit") || -1 !== c.indexOf("hsf_thrown_exception") || -1 !== c.indexOf("fang_xue_feng") || -1 !== c.indexOf("fail_sys_flowlimit") || -1 !== c.indexOf("biz_flow_limit") || -1 !== c.indexOf("hy_failed") && -1 !== (r.retCode || "").indexOf("flow_limit");
        })(e) && (r = "顾客太多挤爆啦", o = "FAIL_SYS_TRAFFIC_LIMIT", u = "limit");
        var p = String(n), f = !1;
        if (p && ("3" !== p && "FAIL_ACCS" !== p && "ANDROID_SYS_NO_NETWORK" !== p || (f = !0, 
        o = "3" === p ? "FAIL_ACCS" : p)), i && "FAIL_ACCS" === i && (f = !0, o = i), "ANDROID_SYS_NETWORK_ERROR" === a && (f = !0, 
        o = a), f && (r = "网络无法连接", u = "no-network"), s({
            res: e
        }) && (r = "SESSION失效", u = "session-expired"), c && c.length > 0) {
            var l = (c[0] || "").match(/(\w+)::([\s\S]+)/);
            if (l && l[1] && l[2]) {
                l[0];
                var d = l[1], m = l[2];
                "SUCCESS" !== d && (o = d, r = m);
            }
        }
        return e.fetchErrorCode = u, r && (e.errorMessage = r), o && (e.error = o), "limit" === u && ("alert" === t ? wx.showModal({
            title: "顾客太多挤爆啦",
            content: "请稍后再来",
            confirmText: "知道了",
            showCancel: !1
        }) : "toast" === t && wx.showToast({
            title: "顾客太多挤爆啦",
            icon: "success",
            duration: 1e3
        })), e;
    }(t.res, o) || {}, i = n.errorMessage || n.message || "未知错误";
    return e.status = !1, {
        errorCode: n.fetchErrorCode,
        errorType: n.error,
        errorMessage: i,
        message: i,
        response: t.res
    };
}

exports.libMtopConfig = l;

var v = function e(r, i, a) {
    return o(this, void 0, void 0, function() {
        var o, s, c;
        return n(this, function(n) {
            switch (n.label) {
              case 0:
                o = e, console.log("middleWare name: " + o.middlewareName), s = {}, n.label = 1;

              case 1:
                return n.trys.push([ 1, 3, , 4 ]), console.log("[Alsc Wx Mtop] mtop params:", r.req), 
                [ 4, f(t(t({}, r.req), {
                    adapterConfig: a || {}
                })) ];

              case 2:
                return s = n.sent(), console.log("[Alsc Wx Mtop] mtop success:", s), r.status = !0, 
                [ 3, 4 ];

              case 3:
                return c = n.sent(), console.error("[Alsc Wx Mtop] mtop error: ", c), s = g(r, c), 
                [ 3, 4 ];

              case 4:
                return r.res = t({
                    request: r.req
                }, s), [ 4, i() ];

              case 5:
                return n.sent(), [ 2 ];
            }
        });
    });
};

exports.default = v;