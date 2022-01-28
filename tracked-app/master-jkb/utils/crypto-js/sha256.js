var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    return function(r) {
        var t = e, n = t.lib, o = n.WordArray, i = n.Hasher, s = t.algo, a = [], c = [];
        !function() {
            function e(e) {
                for (var t = r.sqrt(e), n = 2; n <= t; n++) if (!(e % n)) return !1;
                return !0;
            }
            function t(e) {
                return 4294967296 * (e - (0 | e)) | 0;
            }
            for (var n = 2, o = 0; o < 64; ) e(n) && (o < 8 && (a[o] = t(r.pow(n, .5))), c[o] = t(r.pow(n, 1 / 3)), 
            o++), n++;
        }();
        var f = [], u = s.SHA256 = i.extend({
            _doReset: function() {
                this._hash = new o.init(a.slice(0));
            },
            _doProcessBlock: function(e, r) {
                for (var t = this._hash.words, n = t[0], o = t[1], i = t[2], s = t[3], a = t[4], u = t[5], h = t[6], d = t[7], l = 0; l < 64; l++) {
                    if (l < 16) f[l] = 0 | e[r + l]; else {
                        var p = f[l - 15], _ = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3, v = f[l - 2], H = (v << 15 | v >>> 17) ^ (v << 13 | v >>> 19) ^ v >>> 10;
                        f[l] = _ + f[l - 7] + H + f[l - 16];
                    }
                    var y = n & o ^ n & i ^ o & i, m = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22), w = d + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & u ^ ~a & h) + c[l] + f[l];
                    d = h, h = u, u = a, a = s + w | 0, s = i, i = o, o = n, n = w + (m + y) | 0;
                }
                t[0] = t[0] + n | 0, t[1] = t[1] + o | 0, t[2] = t[2] + i | 0, t[3] = t[3] + s | 0, 
                t[4] = t[4] + a | 0, t[5] = t[5] + u | 0, t[6] = t[6] + h | 0, t[7] = t[7] + d | 0;
            },
            _doFinalize: function() {
                var e = this._data, t = e.words, n = 8 * this._nDataBytes, o = 8 * e.sigBytes;
                return t[o >>> 5] |= 128 << 24 - o % 32, t[14 + (o + 64 >>> 9 << 4)] = r.floor(n / 4294967296), 
                t[15 + (o + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash;
            },
            clone: function() {
                var e = i.clone.call(this);
                return e._hash = this._hash.clone(), e;
            }
        });
        t.SHA256 = i._createHelper(u), t.HmacSHA256 = i._createHmacHelper(u);
    }(Math), e.SHA256;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core")) : "function" == typeof define && define.amd ? define([ "./core" ], e) : e((void 0).CryptoJS);