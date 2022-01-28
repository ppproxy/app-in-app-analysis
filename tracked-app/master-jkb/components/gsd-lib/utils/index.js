var n = require("../../../@babel/runtime/helpers/typeof");

module.exports = {
    debounce: function(n, t, e) {
        var r, o, a, i, u, c = function c() {
            var f = Date.now() - i;
            f < t && f >= 0 ? r = setTimeout(c, t - f) : (r = void 0, e || (u = n.apply(a, o), 
            r || (a = o = void 0)));
        };
        return function() {
            a = this, o = arguments, i = Date.now();
            var f = e && !r;
            return r || (r = setTimeout(c, t)), f && (u = n.apply(a, o), a = o = void 0), u;
        };
    },
    throttle: function(n, t) {
        var e, r = Date.now();
        return function() {
            var o = this, a = arguments, i = Date.now();
            clearTimeout(e), i - r >= t ? (n.apply(o, a), r = i) : e = setTimeout(function() {
                n.apply(o, a);
            }, t);
        };
    },
    deepClone: function t(e) {
        if ("object" !== n(e)) return e;
        if (e instanceof Date) return new Date(e);
        if (e instanceof Array) {
            for (var r = [], o = 0, a = e.length; o < a; o++) r[o] = t(e[o]);
            return r;
        }
        if ("object" === n(e)) {
            var i = {};
            for (var u in e) e.hasOwnProperty(u) && (i[u] = t(e[u]));
            return i;
        }
    },
    generateGUID: function() {
        for (var n = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = 0; e < 10; e++) n += t.charAt(Math.floor(Math.random() * t.length));
        return n;
    },
    urlJoinParams: function(t, e) {
        if (!t || !e || "object" !== n(e)) return t;
        var r = -1 === t.indexOf("?") ? "?" : "&", o = Object.keys(e).map(function(t) {
            return "object" === n(e[t]) && (e[t] = JSON.stringify(e[t])), void 0 !== e[t] ? "".concat(t, "=").concat(e[t]) : "";
        }).filter(function(n) {
            return n;
        }).join("&");
        return "".concat(t).concat(r).concat(o);
    },
    compareVersion: function(n, t) {
        for (var e = n.split("."), r = t.split("."), o = Math.max(e.length, r.length); e.length < o; ) e.push("0");
        for (;r.length < o; ) r.push("0");
        for (var a = 0; a < o; a++) {
            var i = parseInt(e[a], 10), u = parseInt(r[a], 10);
            if (i > u) return 1;
            if (i < u) return -1;
        }
        return 0;
    },
    extendMethods: function(n, t, e) {
        n && n.forEach(function(n) {
            t[n] ? e[n] ? console.warn("目标对象已存在重复方法：", n) : e[n] = t[n].bind(t) : console.warn("源对象的方法不存在：", n);
        });
    },
    hideIdCard: function(n, t) {
        if (!n) return n;
        var e = t || 4, r = new RegExp("(^\\w{".concat(e, "})(\\w+)(\\w{").concat(e, "}$)"), "g");
        return n.replace(r, function() {
            for (var n = "", t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            if (e[2] && e[2].length) for (var o = 0, a = e[2].length; o < a; o++) n += "*";
            return e[1] + n + e[3];
        });
    },
    hideName: function(n) {
        return n ? n.replace(/(^.{1})(.+)$/g, function() {
            for (var n = "", t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            return e[2] && e[2].length && (n = Array.from({
                length: e[2].length + 1
            }).join("*")), e[1] + n;
        }) : n;
    },
    navigateBack: function(n) {
        return new Promise(function(t) {
            var e = getCurrentPages().length - n;
            wx.navigateBack({
                delta: n,
                success: function() {
                    !function n() {
                        setTimeout(function() {
                            var r = getCurrentPages().length;
                            e === r || r <= 1 ? (console.log("已回退到指定页面：", getCurrentPages()), t()) : n();
                        }, 100);
                    }();
                }
            });
        });
    },
    uniqBy: function(n, t) {
        var e = n.reduce(function(n, e) {
            var r = t(e);
            return r && !n[r] && (n[r] = e), n;
        }, {});
        return Object.keys(e).map(function(n) {
            return e[n];
        });
    }
};