function e(e) {
    var o = e.data, n = e.watch;
    Object.keys(n).forEach(function(r) {
        for (var c = r.split("."), f = o, u = 0; u < c.length - 1; u++) f = f[c[u]];
        t(f, c[c.length - 1], n[r].handler || n[r], n[r].deep, e);
    });
}

function t(e, n, r, c, f) {
    var u = e[n];
    c && null != u && "object" === (void 0 === u ? "undefined" : o(u)) && Object.keys(u).forEach(function(e) {
        t(u, e, r, c, f);
    });
    Object.defineProperty(e, n, {
        configurable: !0,
        enumerable: !0,
        set: function(o) {
            r.call(f, o, u), u = o, c && t(e, n, r, c, f);
        },
        get: function() {
            return u;
        }
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

exports.setWatcher = e, module.exports = {
    setWatcher: e
};