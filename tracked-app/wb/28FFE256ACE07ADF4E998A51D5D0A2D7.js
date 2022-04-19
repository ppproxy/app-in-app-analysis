function r(r) {
    return i(n(a(r), 8 * r.length));
}

function n(r, n) {
    r[n >> 5] |= 128 << n % 32, r[14 + (n + 64 >>> 9 << 4)] = n;
    for (var t = 1732584193, a = -271733879, i = -1732584194, h = 271733878, v = 0; v < r.length; v += 16) {
        var l = t, A = a, d = i, g = h;
        t = u(t, a, i, h, r[v + 0], 7, -680876936), h = u(h, t, a, i, r[v + 1], 12, -389564586), 
        i = u(i, h, t, a, r[v + 2], 17, 606105819), a = u(a, i, h, t, r[v + 3], 22, -1044525330), 
        t = u(t, a, i, h, r[v + 4], 7, -176418897), h = u(h, t, a, i, r[v + 5], 12, 1200080426), 
        i = u(i, h, t, a, r[v + 6], 17, -1473231341), a = u(a, i, h, t, r[v + 7], 22, -45705983), 
        t = u(t, a, i, h, r[v + 8], 7, 1770035416), h = u(h, t, a, i, r[v + 9], 12, -1958414417), 
        i = u(i, h, t, a, r[v + 10], 17, -42063), a = u(a, i, h, t, r[v + 11], 22, -1990404162), 
        t = u(t, a, i, h, r[v + 12], 7, 1804603682), h = u(h, t, a, i, r[v + 13], 12, -40341101), 
        i = u(i, h, t, a, r[v + 14], 17, -1502002290), t = e(t, a = u(a, i, h, t, r[v + 15], 22, 1236535329), i, h, r[v + 1], 5, -165796510), 
        h = e(h, t, a, i, r[v + 6], 9, -1069501632), i = e(i, h, t, a, r[v + 11], 14, 643717713), 
        a = e(a, i, h, t, r[v + 0], 20, -373897302), t = e(t, a, i, h, r[v + 5], 5, -701558691), 
        h = e(h, t, a, i, r[v + 10], 9, 38016083), i = e(i, h, t, a, r[v + 15], 14, -660478335), 
        a = e(a, i, h, t, r[v + 4], 20, -405537848), t = e(t, a, i, h, r[v + 9], 5, 568446438), 
        h = e(h, t, a, i, r[v + 14], 9, -1019803690), i = e(i, h, t, a, r[v + 3], 14, -187363961), 
        a = e(a, i, h, t, r[v + 8], 20, 1163531501), t = e(t, a, i, h, r[v + 13], 5, -1444681467), 
        h = e(h, t, a, i, r[v + 2], 9, -51403784), i = e(i, h, t, a, r[v + 7], 14, 1735328473), 
        t = o(t, a = e(a, i, h, t, r[v + 12], 20, -1926607734), i, h, r[v + 5], 4, -378558), 
        h = o(h, t, a, i, r[v + 8], 11, -2022574463), i = o(i, h, t, a, r[v + 11], 16, 1839030562), 
        a = o(a, i, h, t, r[v + 14], 23, -35309556), t = o(t, a, i, h, r[v + 1], 4, -1530992060), 
        h = o(h, t, a, i, r[v + 4], 11, 1272893353), i = o(i, h, t, a, r[v + 7], 16, -155497632), 
        a = o(a, i, h, t, r[v + 10], 23, -1094730640), t = o(t, a, i, h, r[v + 13], 4, 681279174), 
        h = o(h, t, a, i, r[v + 0], 11, -358537222), i = o(i, h, t, a, r[v + 3], 16, -722521979), 
        a = o(a, i, h, t, r[v + 6], 23, 76029189), t = o(t, a, i, h, r[v + 9], 4, -640364487), 
        h = o(h, t, a, i, r[v + 12], 11, -421815835), i = o(i, h, t, a, r[v + 15], 16, 530742520), 
        t = c(t, a = o(a, i, h, t, r[v + 2], 23, -995338651), i, h, r[v + 0], 6, -198630844), 
        h = c(h, t, a, i, r[v + 7], 10, 1126891415), i = c(i, h, t, a, r[v + 14], 15, -1416354905), 
        a = c(a, i, h, t, r[v + 5], 21, -57434055), t = c(t, a, i, h, r[v + 12], 6, 1700485571), 
        h = c(h, t, a, i, r[v + 3], 10, -1894986606), i = c(i, h, t, a, r[v + 10], 15, -1051523), 
        a = c(a, i, h, t, r[v + 1], 21, -2054922799), t = c(t, a, i, h, r[v + 8], 6, 1873313359), 
        h = c(h, t, a, i, r[v + 15], 10, -30611744), i = c(i, h, t, a, r[v + 6], 15, -1560198380), 
        a = c(a, i, h, t, r[v + 13], 21, 1309151649), t = c(t, a, i, h, r[v + 4], 6, -145523070), 
        h = c(h, t, a, i, r[v + 11], 10, -1120210379), i = c(i, h, t, a, r[v + 2], 15, 718787259), 
        a = c(a, i, h, t, r[v + 9], 21, -343485551), t = f(t, l), a = f(a, A), i = f(i, d), 
        h = f(h, g);
    }
    return Array(t, a, i, h);
}

function t(r, n, t, u, e, o) {
    return f((c = f(f(n, r), f(u, o))) << (a = e) | c >>> 32 - a, t);
    var c, a;
}

function u(r, n, u, e, o, c, f) {
    return t(n & u | ~n & e, r, n, o, c, f);
}

function e(r, n, u, e, o, c, f) {
    return t(n & e | u & ~e, r, n, o, c, f);
}

function o(r, n, u, e, o, c, f) {
    return t(n ^ u ^ e, r, n, o, c, f);
}

function c(r, n, u, e, o, c, f) {
    return t(u ^ (n | ~e), r, n, o, c, f);
}

function f(r, n) {
    var t = (65535 & r) + (65535 & n);
    return (r >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t;
}

function a(r) {
    for (var n = Array(), t = 0; t < 8 * r.length; t += 8) n[t >> 5] |= (255 & r.charCodeAt(t / 8)) << t % 32;
    return n;
}

function i(r) {
    for (var n = "0123456789abcdef", t = "", u = 0; u < 4 * r.length; u++) t += n.charAt(r[u >> 2] >> u % 4 * 8 + 4 & 15) + n.charAt(r[u >> 2] >> u % 4 * 8 & 15);
    return t;
}

module.exports = {
    hex_md5: r
};