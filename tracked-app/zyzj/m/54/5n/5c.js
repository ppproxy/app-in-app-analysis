var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, r = e(require("../../../@babel/runtime/regenerator")), a = require("../../../@babel/runtime/helpers/objectSpread2"), n = require("../../../@babel/runtime/helpers/asyncToGenerator"), c = require("./zl"), i = {
    cacheTime: 3e5,
    cacheCallback: function() {},
    cacheKey: c.defaultGenerateCacheKey,
    cacheRequestSilent: !1,
    cachePersistent: !1
}, s = {
    name: "cache-middleware",
    action: (t = n(r.default.mark(function e(t, s) {
        var u, p, o, f, l, h, d, v, y, m, b, k, C, q, x;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return x = function(e, r) {
                    var n = e || {}, i = n.finalCacheKey, s = n.cacheData;
                    return n.skip || t.isMock ? r(e) : (t.skipCore ? (t.res = s.data, t.status = !0) : t.res && (t.status ? c.cache.setCache(i, l, a({}, t.res), {
                        persistent: v
                    }) : c.cache.delete(i, {
                        persistent: v
                    })), void r(e));
                }, q = function() {
                    return (q = n(r.default.mark(function e(t, a) {
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, s();

                              case 2:
                                a(t);

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))).apply(this, arguments);
                }, C = function(e, t) {
                    return q.apply(this, arguments);
                }, k = function(e, r) {
                    var a = e || {}, n = a.finalCacheKey, i = a.cacheData;
                    if (a.skip) return r(e);
                    if (i && i.data) {
                        var s = i.data, u = i.startTime, p = new Date().getTime();
                        u + l < p && -1 !== l ? c.cache.delete(n, {
                            persistent: v
                        }) : d && "function" == typeof f ? f(s) : t.skipCore = !0;
                    }
                    r(e);
                }, b = function(e, t) {
                    if (e.skip) return t(e);
                    var r = h(p);
                    t({
                        finalCacheKey: r,
                        cacheData: c.cache.getCache(r, {
                            persistent: v
                        })
                    });
                }, m = function() {
                    return (m = n(r.default.mark(function e(t, a) {
                        var n;
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                n = {}, p.extraOptions && p.extraOptions.useCache || (n.skip = !0), p.retryTime && (n.skip = !0), 
                                a(n);

                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))).apply(this, arguments);
                }, y = function(e, t) {
                    return m.apply(this, arguments);
                }, u = t.req, p = void 0 === u ? {} : u, o = (0, c.defaults)(p.extraOptions || {}, i), 
                f = o.cacheCallback, l = o.cacheTime, h = o.cacheKey, d = o.cacheRequestSilent, 
                v = o.cachePersistent, e.abrupt("return", (0, c.__sequence)([ y, b, k, C, x ]));

              case 10:
              case "end":
                return e.stop();
            }
        }, e);
    })), function(e, r) {
        return t.apply(this, arguments);
    })
};

exports.default = s;