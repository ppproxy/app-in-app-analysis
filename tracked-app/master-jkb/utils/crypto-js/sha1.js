var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    var r, t, o, s, i, n, a;
    return t = (r = e).lib, o = t.WordArray, s = t.Hasher, i = r.algo, n = [], a = i.SHA1 = s.extend({
        _doReset: function() {
            this._hash = new o.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
        },
        _doProcessBlock: function(e, r) {
            for (var t = this._hash.words, o = t[0], s = t[1], i = t[2], a = t[3], h = t[4], c = 0; c < 80; c++) {
                if (c < 16) n[c] = 0 | e[r + c]; else {
                    var d = n[c - 3] ^ n[c - 8] ^ n[c - 14] ^ n[c - 16];
                    n[c] = d << 1 | d >>> 31;
                }
                var f = (o << 5 | o >>> 27) + h + n[c];
                f += c < 20 ? 1518500249 + (s & i | ~s & a) : c < 40 ? 1859775393 + (s ^ i ^ a) : c < 60 ? (s & i | s & a | i & a) - 1894007588 : (s ^ i ^ a) - 899497514, 
                h = a, a = i, i = s << 30 | s >>> 2, s = o, o = f;
            }
            t[0] = t[0] + o | 0, t[1] = t[1] + s | 0, t[2] = t[2] + i | 0, t[3] = t[3] + a | 0, 
            t[4] = t[4] + h | 0;
        },
        _doFinalize: function() {
            var e = this._data, r = e.words, t = 8 * this._nDataBytes, o = 8 * e.sigBytes;
            return r[o >>> 5] |= 128 << 24 - o % 32, r[14 + (o + 64 >>> 9 << 4)] = Math.floor(t / 4294967296), 
            r[15 + (o + 64 >>> 9 << 4)] = t, e.sigBytes = 4 * r.length, this._process(), this._hash;
        },
        clone: function() {
            var e = s.clone.call(this);
            return e._hash = this._hash.clone(), e;
        }
    }), r.SHA1 = s._createHelper(a), r.HmacSHA1 = s._createHmacHelper(a), e.SHA1;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core")) : "function" == typeof define && define.amd ? define([ "./core" ], e) : e((void 0).CryptoJS);