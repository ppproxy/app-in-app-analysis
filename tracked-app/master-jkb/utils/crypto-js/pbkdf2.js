var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    var r, t, i, n, o, a, s, c;
    return t = (r = e).lib, i = t.Base, n = t.WordArray, o = r.algo, a = o.SHA1, s = o.HMAC, 
    c = o.PBKDF2 = i.extend({
        cfg: i.extend({
            keySize: 4,
            hasher: a,
            iterations: 1
        }),
        init: function(e) {
            this.cfg = this.cfg.extend(e);
        },
        compute: function(e, r) {
            for (var t = this.cfg, i = s.create(t.hasher, e), o = n.create(), a = n.create([ 1 ]), c = o.words, f = a.words, u = t.keySize, d = t.iterations; c.length < u; ) {
                var h = i.update(r).finalize(a);
                i.reset();
                for (var p = h.words, l = p.length, g = h, y = 1; y < d; y++) {
                    g = i.finalize(g), i.reset();
                    for (var m = g.words, v = 0; v < l; v++) p[v] ^= m[v];
                }
                o.concat(h), f[0]++;
            }
            return o.sigBytes = 4 * u, o;
        }
    }), r.PBKDF2 = function(e, r, t) {
        return c.create(t).compute(e, r);
    }, e.PBKDF2;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./sha1"), require("./hmac")) : "function" == typeof define && define.amd ? define([ "./core", "./sha1", "./hmac" ], e) : e((void 0).CryptoJS);