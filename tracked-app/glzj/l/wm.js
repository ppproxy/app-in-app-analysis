Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.apply = h, exports.clone = y, exports.debounce = function(r, e, t) {
    var n, o, u, i, l, a = function a() {
        var c = Date.now() - i;
        c < e && c > 0 ? n = setTimeout(a, e - c) : (n = null, t || (l = r.apply(u, o), 
        n || (u = o = null)));
    }, c = function() {
        u = this, o = arguments, i = Date.now();
        var c = t && !n;
        return n || (n = setTimeout(a, e)), c && (l = r.apply(u, o), u = o = null), l;
    };
    return c.cancel = function() {
        clearTimeout(n), n = null;
    }, c;
}, exports.flatten = p, exports.getUrlByParams = function(r) {
    var e = "";
    return function(r, e) {
        void 0 === r && (r = {});
        for (var t in r) if ((!r.hasOwnProperty || r.hasOwnProperty(t)) && "break" === e(t, r[t])) break;
    }(r, function(r, t) {
        e += "" + (e && "&") + r + "=" + t;
    }), e;
}, exports.merge = d, exports.omit = function(r) {
    for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
    return e = p(e), s(r, Object.keys(r).filter(function(r) {
        return e.indexOf(r) < 0;
    }));
}, exports.parseParamsFromUrl = function(r, e) {
    e && (r = decodeURIComponent(r));
    var t = r.split("?");
    if (1 === t.length) return null;
    return g(t[1]);
}, exports.pick = function(r) {
    for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
    return s(r, p(e));
}, exports.setAt = function(r, e, t) {
    if (!r) return;
    var n = r.replace(/\[([^\]]+)]/g, ".$1").split(".").map(function(r) {
        return r.replace(/['"`]/g, "");
    }), o = e;
    for (;;) {
        var u = n.shift();
        try {
            if (0 === n.length) {
                o[u] = t;
                break;
            }
            o = o[u];
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            throw new Error("fail to set value on path " + r);
        }
    }
}, exports.setQueryParamsToUrl = function(r, e) {
    var t = r.split("?"), n = {};
    2 === t.length && (n = g(t[1]));
    e = Object.keys(e).reduce(function(r, t) {
        return void 0 === r && (r = {}), void 0 !== e[t] && "" !== e[t] && (r[t] = e[t]), 
        r;
    }, {}), n = Object.assign(n, e), r = Object.keys(n).length > 0 ? t[0] + "?" + function(r, e) {
        void 0 === e && (e = !0);
        if (!r) return "";
        var t = e ? encodeURIComponent : a;
        function n(r, e) {
            return void 0 === e ? "" : null === e ? r : ("string" == typeof e && (e = t(e)), 
            r + "=" + e);
        }
        return Object.keys(r).map(function(e) {
            var o = r[e];
            return e = t(e), Array.isArray(o) ? o.map(function(r) {
                return n(e, r);
            }).filter(Boolean).join("&") : n(e, o);
        }).filter(Boolean).join("&");
    }(n) : "" + t[0];
    return r;
}, exports.throttle = function(r, e, t) {
    void 0 === t && (t = {});
    var n, o, u, i = null, l = 0, a = function() {
        l = !1 === t.leading ? 0 : Date.now(), i = null, u = h(r, n, o), i || (n = o = null);
    }, c = function() {
        var c = Date.now();
        l || !1 !== t.leading || (l = c);
        var f = e - (c - l);
        return n = this, o = arguments, f <= 0 || f > e ? (i && (clearTimeout(i), i = null), 
        l = c, u = h(r, n, o), i || (n = o = null)) : i || !1 === t.trailing || (i = setTimeout(a, f)), 
        u;
    };
    return c.cancel = function() {
        clearTimeout(i), l = 0, i = n = o = null;
    }, c;
}, exports.toArray = v;

var r = require("../@babel/runtime/helpers/typeof"), e = Object.prototype.toString, t = Array.prototype.slice, n = Array.isArray, o = "[object Object]", u = Object.prototype.hasOwnProperty, i = /&/, l = /\+/g;

function a(r) {
    return r;
}

function c(r) {
    return e.call(r);
}

function f(r, e) {
    return c(r) === e;
}

function s(r, e) {
    for (var t = {}, n = 0, o = e; n < o.length; n++) {
        var i = o[n];
        u.call(r, i) && (t[i] = r[i]);
    }
    return t;
}

function p(r) {
    return r.reduce(function(r, e) {
        return n(e) ? r.concat(e) : (r.push(e), r);
    }, []);
}

function v(r, e, n) {
    return t.call(r, e, n);
}

function y(e) {
    if (null === e) return e;
    var t = r(e);
    return "number" === t || "string" === t || "boolean" === t || "undefined" === t ? e : n(e) ? e.map(y) : function(r) {
        return c(r) === o;
    }(e) ? d({}, e) : f(e, "[object Date]") ? new Date(e.getTime()) : e;
}

function d(r) {
    var e = v(arguments, 1);
    if (0 === e.length) return r;
    for (var t = 0, n = e; t < n.length; t++) {
        var u = n[t];
        if (f(u, o)) for (var i = 0, l = Object.keys(u); i < l.length; i++) {
            var a = l[i], c = u[a];
            f(r[a], o) ? r[a] = d(r[a], c) : r[a] = y(c);
        }
    }
    return r;
}

function h(r, e, t) {
    if (void 0 === t) return r.call(e);
    switch (t.length) {
      case 0:
        return r.call(e);

      case 1:
        return r.call(e, t[0]);

      case 2:
        return r.call(e, t[0], t[1]);

      case 3:
        return r.call(e, t[0], t[1], t[2]);

      default:
        return r.apply(e, t);
    }
}

function g(r, e) {
    void 0 === e && (e = !0);
    var t = {};
    if (!r) return t;
    "?" !== (r = r.trim())[0] && "#" !== r[0] || (r = r.slice(1));
    for (var n = r.split(i), o = e ? decodeURIComponent : a, c = 0, f = n; c < f.length; c++) {
        var s = f[c];
        if (0 !== (s = s.replace(l, "%20")).length) {
            var p = s.indexOf("="), v = void 0, y = void 0;
            p < 0 ? (v = s, y = null) : (v = s.slice(0, p), y = s.slice(p + 1)), v = o(v), null !== y && (y = o(y));
            var d = t[v];
            void 0 !== d && u.call(t, v) ? Array.isArray(d) ? d.push(y) : t[v] = [ d, y ] : t[v] = y;
        }
    }
    return t;
}