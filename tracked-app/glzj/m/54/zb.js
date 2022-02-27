Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../../@babel/runtime/helpers/typeof"), r = function() {
    return (r = Object.assign || function(e) {
        for (var r, t = 1, n = arguments.length; t < n; t++) for (var i in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
        return e;
    }).apply(this, arguments);
};

function t() {
    for (var e = 0, r = 0, t = arguments.length; r < t; r++) e += arguments[r].length;
    var n = Array(e), i = 0;
    for (r = 0; r < t; r++) for (var o = arguments[r], u = 0, c = o.length; u < c; u++, 
    i++) n[i] = o[u];
    return n;
}

var n = function(e) {
    this.req = {}, this.res = {
        response: ""
    }, this.status = !0, this.skipCore = !1, this.req = e;
};

function i(r) {
    var t = e(r);
    return null !== r && ("object" === t || "function" === t);
}

function o(e, t) {
    return i(e) && i(t) ? Object.keys(r(r({}, e), t)).reduce(function(r, n) {
        return r[n] = o(e[n], t[n]), r;
    }, Array.isArray(e) ? [] : {}) : void 0 === t ? e : t;
}

var u = [], c = {}, f = {}, a = {}, s = function() {
    function e(e) {
        var i = this;
        this.middlewares = [], this.fetcherMiddleware = {}, this.fetchConfig = {}, this.registerFetcher = function(e, r, t, n) {
            if (void 0 === t && (t = []), void 0 === n && (n = {}), "function" != typeof r) return new Error("中间件需要为function");
            i.fetcherMiddleware[e] = {
                name: e,
                action: r,
                config: n
            }, a[e] = t;
        }, this.setupConfig = function(e) {
            i.fetchConfig = r(r(r({}, c), i.fetchConfig), e || {});
        }, this.use = function(e) {
            void 0 === e && (e = []), i.middlewares = t(i.middlewares, e);
        }, this.request = function(e) {
            try {
                var c, s = function(e, r) {
                    return o({
                        api: "",
                        param: {}
                    }, o(e, r));
                }(i.fetchConfig, e || {
                    param: {}
                }), h = s.adapter, d = void 0 === h ? "mtop" : h, l = function(e, r, n) {
                    void 0 === e && (e = []), void 0 === r && (r = []), void 0 === n && (n = []);
                    var i = t(e, r, n), o = {};
                    i.forEach(function(e) {
                        o[e.name] = e;
                        var r = e.action;
                        r.middlewareName = e.name, r.config = e.config || {};
                    });
                    var u = [];
                    for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && u.push(o[c]);
                    return u;
                }(a[d] || [], u, i.middlewares), v = r(r({}, f), i.fetcherMiddleware);
                if (!v[d]) throw new Error("请准确设置要使用的请求库!");
                c = t(l, [ v[d] ]);
                var p = new n(s), m = (g = c, function(e, r) {
                    var t = -1;
                    return function n(i) {
                        if (i <= t) return Promise.reject(new Error("next() called multiple times"));
                        t = i;
                        var o = g[i] || {}, u = o.action, c = o.config || {};
                        if (e.skipCore && i === g.length - 1 && (u = r), i === g.length && (u = r), !u) return Promise.resolve();
                        try {
                            return Promise.resolve(u(e, n.bind(null, i + 1), c));
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            return Promise.reject(e);
                        }
                    }(0);
                });
                return new Promise(function(e, r) {
                    return m(p).then(function() {
                        p.status ? e(p.res) : r(p.res);
                    }, function(e) {
                        r(e);
                    });
                });
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return Promise.reject(e);
            }
            var g;
        }, this.setupConfig(e);
    }
    return e.setupConfig = function(e) {
        c = r(r({}, c), e || {});
    }, e.use = function(e) {
        void 0 === e && (e = []), u = t(u, e);
    }, e.create = function(r) {
        return new e(r);
    }, e.registerFetcher = function(e, r, t, n) {
        if (void 0 === t && (t = []), void 0 === n && (n = {}), "function" != typeof r) throw new Error("中间件需要为function");
        f[e] = {
            name: e,
            action: r,
            config: n
        }, a[e] = t;
    }, e;
}();

exports.default = s;