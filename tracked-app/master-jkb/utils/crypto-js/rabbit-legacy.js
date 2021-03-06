var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    return function() {
        var r = e, i = r.lib.StreamCipher, t = r.algo, o = [], c = [], s = [], a = t.RabbitLegacy = i.extend({
            _doReset: function() {
                var e = this._key.words, r = this.cfg.iv, i = this._X = [ e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16 ], t = this._C = [ e[2] << 16 | e[2] >>> 16, 4294901760 & e[0] | 65535 & e[1], e[3] << 16 | e[3] >>> 16, 4294901760 & e[1] | 65535 & e[2], e[0] << 16 | e[0] >>> 16, 4294901760 & e[2] | 65535 & e[3], e[1] << 16 | e[1] >>> 16, 4294901760 & e[3] | 65535 & e[0] ];
                this._b = 0;
                for (var o = 0; o < 4; o++) f.call(this);
                for (o = 0; o < 8; o++) t[o] ^= i[o + 4 & 7];
                if (r) {
                    var c = r.words, s = c[0], a = c[1], n = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), d = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), u = n >>> 16 | 4294901760 & d, h = d << 16 | 65535 & n;
                    for (t[0] ^= n, t[1] ^= u, t[2] ^= d, t[3] ^= h, t[4] ^= n, t[5] ^= u, t[6] ^= d, 
                    t[7] ^= h, o = 0; o < 4; o++) f.call(this);
                }
            },
            _doProcessBlock: function(e, r) {
                var i = this._X;
                f.call(this), o[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16, o[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16, 
                o[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16, o[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
                for (var t = 0; t < 4; t++) o[t] = 16711935 & (o[t] << 8 | o[t] >>> 24) | 4278255360 & (o[t] << 24 | o[t] >>> 8), 
                e[r + t] ^= o[t];
            },
            blockSize: 4,
            ivSize: 2
        });
        function f() {
            for (var e = this._X, r = this._C, i = 0; i < 8; i++) c[i] = r[i];
            for (r[0] = r[0] + 1295307597 + this._b | 0, r[1] = r[1] + 3545052371 + (r[0] >>> 0 < c[0] >>> 0 ? 1 : 0) | 0, 
            r[2] = r[2] + 886263092 + (r[1] >>> 0 < c[1] >>> 0 ? 1 : 0) | 0, r[3] = r[3] + 1295307597 + (r[2] >>> 0 < c[2] >>> 0 ? 1 : 0) | 0, 
            r[4] = r[4] + 3545052371 + (r[3] >>> 0 < c[3] >>> 0 ? 1 : 0) | 0, r[5] = r[5] + 886263092 + (r[4] >>> 0 < c[4] >>> 0 ? 1 : 0) | 0, 
            r[6] = r[6] + 1295307597 + (r[5] >>> 0 < c[5] >>> 0 ? 1 : 0) | 0, r[7] = r[7] + 3545052371 + (r[6] >>> 0 < c[6] >>> 0 ? 1 : 0) | 0, 
            this._b = r[7] >>> 0 < c[7] >>> 0 ? 1 : 0, i = 0; i < 8; i++) {
                var t = e[i] + r[i], o = 65535 & t, a = t >>> 16, f = ((o * o >>> 17) + o * a >>> 15) + a * a, n = ((4294901760 & t) * t | 0) + ((65535 & t) * t | 0);
                s[i] = f ^ n;
            }
            e[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0, e[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0, 
            e[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0, e[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0, 
            e[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0, e[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0, 
            e[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0, e[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0;
        }
        r.RabbitLegacy = i._createHelper(a);
    }(), e.RabbitLegacy;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core")) : "function" == typeof define && define.amd ? define([ "./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core" ], e) : e((void 0).CryptoJS);