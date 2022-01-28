var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function() {
    var r = {}, e = function(e, o) {
        if (!r[e]) return require(o);
        if (!r[e].status) {
            var n = {
                exports: {}
            };
            r[e].status = 1, r[e].func(r[e].req, n, n.exports), "object" === t(n.exports) ? (r[e].m.exports.__proto__ = n.exports.__proto__, 
            Object.keys(n.exports).forEach(function(t) {
                r[e].m.exports[t] = n.exports[t];
                var o = Object.getOwnPropertyDescriptor(n.exports, t);
                o && o.configurable && Object.defineProperty(n.exports, t, {
                    set: function(o) {
                        r[e].m.exports[t] = o;
                    },
                    get: function() {
                        return r[e].m.exports[t];
                    }
                });
            }), n.exports.__esModule && Object.defineProperty(r[e].m.exports, "__esModule", {
                value: !0
            })) : r[e].m.exports = n.exports;
        }
        return r[e].m.exports;
    };
    return function(t, e, o) {
        var n = {
            exports: {}
        };
        r[t] = {
            status: 0,
            func: e,
            req: o,
            m: n
        };
    }(1583609826393, function(r, e, o) {
        var n = Object.prototype.hasOwnProperty, u = Object.prototype.toString, c = Object.defineProperty, p = Object.getOwnPropertyDescriptor, f = function(t) {
            return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === u.call(t);
        }, i = function(t) {
            if (!t || "[object Object]" !== u.call(t)) return !1;
            var r = n.call(t, "constructor"), e = t.constructor && t.constructor.prototype && n.call(t.constructor.prototype, "isPrototypeOf");
            if (t.constructor && !r && !e) return !1;
            var o;
            for (o in t) ;
            return void 0 === o || n.call(t, o);
        }, s = function(t, r) {
            c && "__proto__" === r.name ? c(t, r.name, {
                enumerable: !0,
                configurable: !0,
                value: r.newValue,
                writable: !0
            }) : t[r.name] = r.newValue;
        }, a = function(t, r) {
            if ("__proto__" === r) {
                if (!n.call(t, r)) return;
                if (p) return p(t, r).value;
            }
            return t[r];
        };
        e.exports = function r() {
            var e, o, n, u, c, p, l = arguments[0], y = 1, b = arguments.length, m = !1;
            for ("boolean" == typeof l && (m = l, l = arguments[1] || {}, y = 2), (null == l || "object" !== (void 0 === l ? "undefined" : t(l)) && "function" != typeof l) && (l = {}); y < b; ++y) if (null != (e = arguments[y])) for (o in e) n = a(l, o), 
            l !== (u = a(e, o)) && (m && u && (i(u) || (c = f(u))) ? (c ? (c = !1, p = n && f(n) ? n : []) : p = n && i(n) ? n : {}, 
            s(l, {
                name: o,
                newValue: r(m, p, u)
            })) : void 0 !== u && s(l, {
                name: o,
                newValue: u
            }));
            return l;
        };
    }, function(t) {
        return e({}[t], t);
    }), e(1583609826393);
}();