function n(e) {
    if ("object" !== (void 0 === e ? "undefined" : t(e))) return e;
    if (e instanceof Date) return new Date(e);
    if (e instanceof Array) {
        for (var r = [], o = 0, i = e.length; o < i; o++) r[o] = n(e[o]);
        return r;
    }
    if ("object" === (void 0 === e ? "undefined" : t(e))) {
        var u = {};
        for (var a in e) e.hasOwnProperty(a) && (u[a] = n(e[a]));
        return u;
    }
}

var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
    return typeof n;
} : function(n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
};

module.exports = {
    debounce: function(n, t, e) {
        var r = void 0, o = void 0, i = void 0, u = void 0, a = void 0, f = function f() {
            var c = Date.now() - u;
            c < t && c >= 0 ? r = setTimeout(f, t - c) : (r = void 0, e || (a = n.apply(i, o), 
            r || (i = o = void 0)));
        };
        return function() {
            i = this, o = arguments, u = Date.now();
            var c = e && !r;
            return r || (r = setTimeout(f, t)), c && (a = n.apply(i, o), i = o = void 0), a;
        };
    },
    throttle: function(n, t) {
        var e = void 0, r = Date.now();
        return function() {
            var o = this, i = arguments, u = Date.now();
            clearTimeout(e), u - r >= t ? (n.apply(o, i), r = u) : e = setTimeout(function() {
                n.apply(o, i);
            }, t);
        };
    },
    deepClone: n,
    generateGUID: function() {
        for (var n = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = 0; e < 10; e++) n += t.charAt(Math.floor(Math.random() * t.length));
        return n;
    },
    urlJoinParams: function(n, e) {
        return n && e && "object" === (void 0 === e ? "undefined" : t(e)) ? "" + n + (-1 === n.indexOf("?") ? "?" : "&") + Object.keys(e).map(function(n) {
            return "object" === t(e[n]) && (e[n] = JSON.stringify(e[n])), void 0 !== e[n] ? n + "=" + e[n] : "";
        }).filter(function(n) {
            return n;
        }).join("&") : n;
    },
    compareVersion: function(n, t) {
        for (var e = n.split("."), r = t.split("."), o = Math.max(e.length, r.length); e.length < o; ) e.push("0");
        for (;r.length < o; ) r.push("0");
        for (var i = 0; i < o; i++) {
            var u = parseInt(e[i], 10), a = parseInt(r[i], 10);
            if (u > a) return 1;
            if (u < a) return -1;
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
        var e = t || 4, r = new RegExp("(^\\w{" + e + "})(\\w+)(\\w{" + e + "}$)", "g");
        return n.replace(r, function() {
            for (var n = arguments.length, t = Array(n), e = 0; e < n; e++) t[e] = arguments[e];
            var r = "";
            if (t[2] && t[2].length) for (var o = 0, i = t[2].length; o < i; o++) r += "*";
            return t[1] + r + t[3];
        });
    },
    hideName: function(n) {
        return n ? n.replace(/(^.{1})(.+)$/g, function() {
            for (var n = arguments.length, t = Array(n), e = 0; e < n; e++) t[e] = arguments[e];
            var r = "";
            return t[2] && t[2].length && (r = Array.from({
                length: t[2].length + 1
            }).join("*")), t[1] + r;
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