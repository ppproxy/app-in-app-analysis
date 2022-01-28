var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    return function() {
        var r = e, i = r.lib.StreamCipher, t = r.algo, o = t.RC4 = i.extend({
            _doReset: function() {
                for (var e = this._key, r = e.words, i = e.sigBytes, t = this._S = [], o = 0; o < 256; o++) t[o] = o;
                o = 0;
                for (var s = 0; o < 256; o++) {
                    var n = o % i, c = r[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                    s = (s + t[o] + c) % 256;
                    var d = t[o];
                    t[o] = t[s], t[s] = d;
                }
                this._i = this._j = 0;
            },
            _doProcessBlock: function(e, r) {
                e[r] ^= s.call(this);
            },
            keySize: 8,
            ivSize: 0
        });
        function s() {
            for (var e = this._S, r = this._i, i = this._j, t = 0, o = 0; o < 4; o++) {
                i = (i + e[r = (r + 1) % 256]) % 256;
                var s = e[r];
                e[r] = e[i], e[i] = s, t |= e[(e[r] + e[i]) % 256] << 24 - 8 * o;
            }
            return this._i = r, this._j = i, t;
        }
        r.RC4 = i._createHelper(o);
        var n = t.RC4Drop = o.extend({
            cfg: o.cfg.extend({
                drop: 192
            }),
            _doReset: function() {
                o._doReset.call(this);
                for (var e = this.cfg.drop; e > 0; e--) s.call(this);
            }
        });
        r.RC4Drop = i._createHelper(n);
    }(), e.RC4;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core")) : "function" == typeof define && define.amd ? define([ "./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core" ], e) : e((void 0).CryptoJS);