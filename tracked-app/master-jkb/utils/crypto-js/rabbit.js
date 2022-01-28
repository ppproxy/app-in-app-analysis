var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    return function() {
        var r = e, i = r.lib.StreamCipher, t = r.algo, o = [], s = [], f = [], c = t.Rabbit = i.extend({
            _doReset: function() {
                for (var e = this._key.words, r = this.cfg.iv, i = 0; i < 4; i++) e[i] = 16711935 & (e[i] << 8 | e[i] >>> 24) | 4278255360 & (e[i] << 24 | e[i] >>> 8);
                var t = this._X = [ e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16 ], o = this._C = [ e[2] << 16 | e[2] >>> 16, 4294901760 & e[0] | 65535 & e[1], e[3] << 16 | e[3] >>> 16, 4294901760 & e[1] | 65535 & e[2], e[0] << 16 | e[0] >>> 16, 4294901760 & e[2] | 65535 & e[3], e[1] << 16 | e[1] >>> 16, 4294901760 & e[3] | 65535 & e[0] ];
                for (this._b = 0, i = 0; i < 4; i++) n.call(this);
                for (i = 0; i < 8; i++) o[i] ^= t[i + 4 & 7];
                if (r) {
                    var s = r.words, f = s[0], c = s[1], a = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8), d = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8), u = a >>> 16 | 4294901760 & d, h = d << 16 | 65535 & a;
                    for (o[0] ^= a, o[1] ^= u, o[2] ^= d, o[3] ^= h, o[4] ^= a, o[5] ^= u, o[6] ^= d, 
                    o[7] ^= h, i = 0; i < 4; i++) n.call(this);
                }
            },
            _doProcessBlock: function(e, r) {
                var i = this._X;
                n.call(this), o[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16, o[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16, 
                o[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16, o[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
                for (var t = 0; t < 4; t++) o[t] = 16711935 & (o[t] << 8 | o[t] >>> 24) | 4278255360 & (o[t] << 24 | o[t] >>> 8), 
                e[r + t] ^= o[t];
            },
            blockSize: 4,
            ivSize: 2
        });
        function n() {
            for (var e = this._X, r = this._C, i = 0; i < 8; i++) s[i] = r[i];
            for (r[0] = r[0] + 1295307597 + this._b | 0, r[1] = r[1] + 3545052371 + (r[0] >>> 0 < s[0] >>> 0 ? 1 : 0) | 0, 
            r[2] = r[2] + 886263092 + (r[1] >>> 0 < s[1] >>> 0 ? 1 : 0) | 0, r[3] = r[3] + 1295307597 + (r[2] >>> 0 < s[2] >>> 0 ? 1 : 0) | 0, 
            r[4] = r[4] + 3545052371 + (r[3] >>> 0 < s[3] >>> 0 ? 1 : 0) | 0, r[5] = r[5] + 886263092 + (r[4] >>> 0 < s[4] >>> 0 ? 1 : 0) | 0, 
            r[6] = r[6] + 1295307597 + (r[5] >>> 0 < s[5] >>> 0 ? 1 : 0) | 0, r[7] = r[7] + 3545052371 + (r[6] >>> 0 < s[6] >>> 0 ? 1 : 0) | 0, 
            this._b = r[7] >>> 0 < s[7] >>> 0 ? 1 : 0, i = 0; i < 8; i++) {
                var t = e[i] + r[i], o = 65535 & t, c = t >>> 16, n = ((o * o >>> 17) + o * c >>> 15) + c * c, a = ((4294901760 & t) * t | 0) + ((65535 & t) * t | 0);
                f[i] = n ^ a;
            }
            e[0] = f[0] + (f[7] << 16 | f[7] >>> 16) + (f[6] << 16 | f[6] >>> 16) | 0, e[1] = f[1] + (f[0] << 8 | f[0] >>> 24) + f[7] | 0, 
            e[2] = f[2] + (f[1] << 16 | f[1] >>> 16) + (f[0] << 16 | f[0] >>> 16) | 0, e[3] = f[3] + (f[2] << 8 | f[2] >>> 24) + f[1] | 0, 
            e[4] = f[4] + (f[3] << 16 | f[3] >>> 16) + (f[2] << 16 | f[2] >>> 16) | 0, e[5] = f[5] + (f[4] << 8 | f[4] >>> 24) + f[3] | 0, 
            e[6] = f[6] + (f[5] << 16 | f[5] >>> 16) + (f[4] << 16 | f[4] >>> 16) | 0, e[7] = f[7] + (f[6] << 8 | f[6] >>> 24) + f[5] | 0;
        }
        r.Rabbit = i._createHelper(c);
    }(), e.Rabbit;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core")) : "function" == typeof define && define.amd ? define([ "./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core" ], e) : e((void 0).CryptoJS);