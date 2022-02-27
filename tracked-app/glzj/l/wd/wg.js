Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

for (var r = function(r, e) {
    return r(e = {
        exports: {}
    }, e.exports), e.exports;
}(function(r) {
    var e = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
    if (e) {
        var n = new Uint8Array(16);
        r.exports = function() {
            return e(n), n;
        };
    } else {
        var o = new Array(16);
        r.exports = function() {
            for (var r, e = 0; e < 16; e++) 0 == (3 & e) && (r = 4294967296 * Math.random()), 
            o[e] = r >>> ((3 & e) << 3) & 255;
            return o;
        };
    }
}), e = [], n = 0; n < 256; ++n) e[n] = (n + 256).toString(16).substr(1);

var o, t, a = function(r, n) {
    var o = n || 0, t = e;
    return [ t[r[o++]], t[r[o++]], t[r[o++]], t[r[o++]], "-", t[r[o++]], t[r[o++]], "-", t[r[o++]], t[r[o++]], "-", t[r[o++]], t[r[o++]], "-", t[r[o++]], t[r[o++]], t[r[o++]], t[r[o++]], t[r[o++]], t[r[o++]] ].join("");
}, s = 0, u = 0;

var i = function(e, n, i) {
    var v = n && i || 0, c = n || [], d = (e = e || {}).node || o, f = void 0 !== e.clockseq ? e.clockseq : t;
    if (null == d || null == f) {
        var l = r();
        null == d && (d = o = [ 1 | l[0], l[1], l[2], l[3], l[4], l[5] ]), null == f && (f = t = 16383 & (l[6] << 8 | l[7]));
    }
    var p = void 0 !== e.msecs ? e.msecs : new Date().getTime(), y = void 0 !== e.nsecs ? e.nsecs : u + 1, m = p - s + (y - u) / 1e4;
    if (m < 0 && void 0 === e.clockseq && (f = f + 1 & 16383), (m < 0 || p > s) && void 0 === e.nsecs && (y = 0), 
    y >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    s = p, u = y, t = f;
    var g = (1e4 * (268435455 & (p += 122192928e5)) + y) % 4294967296;
    c[v++] = g >>> 24 & 255, c[v++] = g >>> 16 & 255, c[v++] = g >>> 8 & 255, c[v++] = 255 & g;
    var w = p / 4294967296 * 1e4 & 268435455;
    c[v++] = w >>> 8 & 255, c[v++] = 255 & w, c[v++] = w >>> 24 & 15 | 16, c[v++] = w >>> 16 & 255, 
    c[v++] = f >>> 8 | 128, c[v++] = 255 & f;
    for (var x = 0; x < 6; ++x) c[v + x] = d[x];
    return n || a(c);
};

var v = function(e, n, o) {
    var t = n && o || 0;
    "string" == typeof e && (n = "binary" === e ? new Array(16) : null, e = null);
    var s = (e = e || {}).random || (e.rng || r)();
    if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, n) for (var u = 0; u < 16; ++u) n[t + u] = s[u];
    return n || a(s);
}, c = v;

c.v1 = i, c.v4 = v;

var d = c;

exports.default = d;