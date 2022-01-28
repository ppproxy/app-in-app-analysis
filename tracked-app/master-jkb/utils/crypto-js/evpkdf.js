var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    var r, t, i, n, o, a, c;
    return t = (r = e).lib, i = t.Base, n = t.WordArray, o = r.algo, a = o.MD5, c = o.EvpKDF = i.extend({
        cfg: i.extend({
            keySize: 4,
            hasher: a,
            iterations: 1
        }),
        init: function(e) {
            this.cfg = this.cfg.extend(e);
        },
        compute: function(e, r) {
            for (var t = this.cfg, i = t.hasher.create(), o = n.create(), a = o.words, c = t.keySize, s = t.iterations; a.length < c; ) {
                f && i.update(f);
                var f = i.update(e).finalize(r);
                i.reset();
                for (var u = 1; u < s; u++) f = i.finalize(f), i.reset();
                o.concat(f);
            }
            return o.sigBytes = 4 * c, o;
        }
    }), r.EvpKDF = function(e, r, t) {
        return c.create(t).compute(e, r);
    }, e.EvpKDF;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./sha1"), require("./hmac")) : "function" == typeof define && define.amd ? define([ "./core", "./sha1", "./hmac" ], e) : e((void 0).CryptoJS);