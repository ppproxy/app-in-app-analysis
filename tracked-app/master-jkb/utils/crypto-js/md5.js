var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    return function(r) {
        var t = e, n = t.lib, o = n.WordArray, a = n.Hasher, i = t.algo, s = [];
        !function() {
            for (var e = 0; e < 64; e++) s[e] = 4294967296 * r.abs(r.sin(e + 1)) | 0;
        }();
        var c = i.MD5 = a.extend({
            _doReset: function() {
                this._hash = new o.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
            },
            _doProcessBlock: function(e, r) {
                for (var t = 0; t < 16; t++) {
                    var n = r + t, o = e[n];
                    e[n] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                }
                var a = this._hash.words, i = e[r + 0], c = e[r + 1], v = e[r + 2], l = e[r + 3], _ = e[r + 4], p = e[r + 5], y = e[r + 6], b = e[r + 7], m = e[r + 8], x = e[r + 9], D = e[r + 10], H = e[r + 11], M = e[r + 12], g = e[r + 13], w = e[r + 14], B = e[r + 15], q = a[0], j = a[1], k = a[2], z = a[3];
                q = u(q, j, k, z, i, 7, s[0]), z = u(z, q, j, k, c, 12, s[1]), k = u(k, z, q, j, v, 17, s[2]), 
                j = u(j, k, z, q, l, 22, s[3]), q = u(q, j, k, z, _, 7, s[4]), z = u(z, q, j, k, p, 12, s[5]), 
                k = u(k, z, q, j, y, 17, s[6]), j = u(j, k, z, q, b, 22, s[7]), q = u(q, j, k, z, m, 7, s[8]), 
                z = u(z, q, j, k, x, 12, s[9]), k = u(k, z, q, j, D, 17, s[10]), j = u(j, k, z, q, H, 22, s[11]), 
                q = u(q, j, k, z, M, 7, s[12]), z = u(z, q, j, k, g, 12, s[13]), k = u(k, z, q, j, w, 17, s[14]), 
                q = f(q, j = u(j, k, z, q, B, 22, s[15]), k, z, c, 5, s[16]), z = f(z, q, j, k, y, 9, s[17]), 
                k = f(k, z, q, j, H, 14, s[18]), j = f(j, k, z, q, i, 20, s[19]), q = f(q, j, k, z, p, 5, s[20]), 
                z = f(z, q, j, k, D, 9, s[21]), k = f(k, z, q, j, B, 14, s[22]), j = f(j, k, z, q, _, 20, s[23]), 
                q = f(q, j, k, z, x, 5, s[24]), z = f(z, q, j, k, w, 9, s[25]), k = f(k, z, q, j, l, 14, s[26]), 
                j = f(j, k, z, q, m, 20, s[27]), q = f(q, j, k, z, g, 5, s[28]), z = f(z, q, j, k, v, 9, s[29]), 
                k = f(k, z, q, j, b, 14, s[30]), q = h(q, j = f(j, k, z, q, M, 20, s[31]), k, z, p, 4, s[32]), 
                z = h(z, q, j, k, m, 11, s[33]), k = h(k, z, q, j, H, 16, s[34]), j = h(j, k, z, q, w, 23, s[35]), 
                q = h(q, j, k, z, c, 4, s[36]), z = h(z, q, j, k, _, 11, s[37]), k = h(k, z, q, j, b, 16, s[38]), 
                j = h(j, k, z, q, D, 23, s[39]), q = h(q, j, k, z, g, 4, s[40]), z = h(z, q, j, k, i, 11, s[41]), 
                k = h(k, z, q, j, l, 16, s[42]), j = h(j, k, z, q, y, 23, s[43]), q = h(q, j, k, z, x, 4, s[44]), 
                z = h(z, q, j, k, M, 11, s[45]), k = h(k, z, q, j, B, 16, s[46]), q = d(q, j = h(j, k, z, q, v, 23, s[47]), k, z, i, 6, s[48]), 
                z = d(z, q, j, k, b, 10, s[49]), k = d(k, z, q, j, w, 15, s[50]), j = d(j, k, z, q, p, 21, s[51]), 
                q = d(q, j, k, z, M, 6, s[52]), z = d(z, q, j, k, l, 10, s[53]), k = d(k, z, q, j, D, 15, s[54]), 
                j = d(j, k, z, q, c, 21, s[55]), q = d(q, j, k, z, m, 6, s[56]), z = d(z, q, j, k, B, 10, s[57]), 
                k = d(k, z, q, j, y, 15, s[58]), j = d(j, k, z, q, g, 21, s[59]), q = d(q, j, k, z, _, 6, s[60]), 
                z = d(z, q, j, k, H, 10, s[61]), k = d(k, z, q, j, v, 15, s[62]), j = d(j, k, z, q, x, 21, s[63]), 
                a[0] = a[0] + q | 0, a[1] = a[1] + j | 0, a[2] = a[2] + k | 0, a[3] = a[3] + z | 0;
            },
            _doFinalize: function() {
                var e = this._data, t = e.words, n = 8 * this._nDataBytes, o = 8 * e.sigBytes;
                t[o >>> 5] |= 128 << 24 - o % 32;
                var a = r.floor(n / 4294967296), i = n;
                t[15 + (o + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                t[14 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                e.sigBytes = 4 * (t.length + 1), this._process();
                for (var s = this._hash, c = s.words, u = 0; u < 4; u++) {
                    var f = c[u];
                    c[u] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8);
                }
                return s;
            },
            clone: function() {
                var e = a.clone.call(this);
                return e._hash = this._hash.clone(), e;
            }
        });
        function u(e, r, t, n, o, a, i) {
            var s = e + (r & t | ~r & n) + o + i;
            return (s << a | s >>> 32 - a) + r;
        }
        function f(e, r, t, n, o, a, i) {
            var s = e + (r & n | t & ~n) + o + i;
            return (s << a | s >>> 32 - a) + r;
        }
        function h(e, r, t, n, o, a, i) {
            var s = e + (r ^ t ^ n) + o + i;
            return (s << a | s >>> 32 - a) + r;
        }
        function d(e, r, t, n, o, a, i) {
            var s = e + (t ^ (r | ~n)) + o + i;
            return (s << a | s >>> 32 - a) + r;
        }
        t.MD5 = a._createHelper(c), t.HmacMD5 = a._createHmacHelper(c);
    }(Math), e.MD5;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core")) : "function" == typeof define && define.amd ? define([ "./core" ], e) : e((void 0).CryptoJS);