var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    var r, t, i, n, o;
    return t = (r = e).lib.WordArray, i = r.algo, n = i.SHA256, o = i.SHA224 = n.extend({
        _doReset: function() {
            this._hash = new t.init([ 3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428 ]);
        },
        _doFinalize: function() {
            var e = n._doFinalize.call(this);
            return e.sigBytes -= 4, e;
        }
    }), r.SHA224 = n._createHelper(o), r.HmacSHA224 = n._createHmacHelper(o), e.SHA224;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./sha256")) : "function" == typeof define && define.amd ? define([ "./core", "./sha256" ], e) : e((void 0).CryptoJS);