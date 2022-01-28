var e, t = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    var t, i, r;
    i = (t = e).lib.Base, r = t.enc.Utf8, t.algo.HMAC = i.extend({
        init: function(e, t) {
            e = this._hasher = new e.init(), "string" == typeof t && (t = r.parse(t));
            var i = e.blockSize, n = 4 * i;
            t.sigBytes > n && (t = e.finalize(t)), t.clamp();
            for (var s = this._oKey = t.clone(), o = this._iKey = t.clone(), a = s.words, f = o.words, h = 0; h < i; h++) a[h] ^= 1549556828, 
            f[h] ^= 909522486;
            s.sigBytes = o.sigBytes = n, this.reset();
        },
        reset: function() {
            var e = this._hasher;
            e.reset(), e.update(this._iKey);
        },
        update: function(e) {
            return this._hasher.update(e), this;
        },
        finalize: function(e) {
            var t = this._hasher, i = t.finalize(e);
            return t.reset(), t.finalize(this._oKey.clone().concat(i));
        }
    });
}, "object" === ("undefined" == typeof exports ? "undefined" : t(exports)) ? module.exports = exports = e(require("./core")) : "function" == typeof define && define.amd ? define([ "./core" ], e) : e((void 0).CryptoJS);