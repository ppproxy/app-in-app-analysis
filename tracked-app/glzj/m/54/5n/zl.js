var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.hash = exports.defaults = exports.defaultGenerateCacheKey = exports.cache = exports.__sequence = void 0;

var t = require("../../../@babel/runtime/helpers/classCallCheck"), r = require("../../../@babel/runtime/helpers/createClass"), n = e(require("../../zl/5o")), i = function(e, t) {
    var r, n = t || 1315423911;
    for (r = e.length - 1; r >= 0; r--) n ^= (n << 5) + e.charCodeAt(r) + (n >> 2);
    return (2147483647 & n).toString(16);
};

exports.hash = i;

exports.defaults = function(e, t) {
    for (var r in t) void 0 === e[r] && (e[r] = t[r]);
    return e;
};

exports.defaultGenerateCacheKey = function(e) {
    var t = e || {}, r = t.api, n = void 0 === r ? "" : r, a = t.options, o = void 0 === a ? {} : a, c = t.param, s = void 0 === c ? {} : c, u = "".concat(n, "_").concat(JSON.stringify(o), "_").concat(JSON.stringify(s));
    return i(u);
};

var a = new (function() {
    function e() {
        t(this, e), this.cache = n.default, this.prefix = "__mtop_cache";
    }
    return r(e, [ {
        key: "generateKey",
        value: function(e) {
            return "".concat(this.prefix, "_").concat(e);
        }
    }, {
        key: "setCache",
        value: function(e, t, r) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            this.cache && this.cache.put(this.generateKey(e), {
                data: r,
                startTime: new Date().getTime()
            }, n);
        }
    }, {
        key: "getCache",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return this.cache.get(this.generateKey(e), t);
        }
    }, {
        key: "delete",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (this.cache) return this.cache.remove(this.generateKey(e), t);
        }
    } ]), e;
}())();

exports.cache = a;

var o = (Promise || {
    resolve: function() {}
}).resolve();

function c() {
    var e = {};
    return e.promise = new Promise(function(t, r) {
        e.resolve = t, e.reject = r;
    }), e;
}

exports.__sequence = function(e) {
    var t = this, r = [], n = [];
    e.forEach(function e(i) {
        if (i instanceof Array) i.forEach(e); else {
            var a, o = c(), s = c();
            r.push(function(e) {
                return o = c(), (a = i.call(t, e, function(e) {
                    return o.resolve(e), s.promise;
                }, function(e) {
                    return o.reject(e), s.promise;
                })) && (a = a.catch(function(e) {
                    o.reject(e);
                })), o.promise;
            }), n.push(function(e) {
                return s.resolve(e), a;
            });
        }
    });
    for (var i, a = o; i = r.shift(); ) a = a.then(i);
    for (;i = n.pop(); ) a = a.then(i);
    return a;
};