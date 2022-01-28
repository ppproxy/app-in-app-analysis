var e, t = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    var t, r, i, n, o;
    return r = (t = e).lib, i = r.Base, n = r.WordArray, (o = t.x64 = {}).Word = i.extend({
        init: function(e, t) {
            this.high = e, this.low = t;
        }
    }), o.WordArray = i.extend({
        init: function(e, t) {
            e = this.words = e || [], this.sigBytes = null != t ? t : 8 * e.length;
        },
        toX32: function() {
            for (var e = this.words, t = e.length, r = [], i = 0; i < t; i++) {
                var o = e[i];
                r.push(o.high), r.push(o.low);
            }
            return n.create(r, this.sigBytes);
        },
        clone: function() {
            for (var e = i.clone.call(this), t = e.words = this.words.slice(0), r = t.length, n = 0; n < r; n++) t[n] = t[n].clone();
            return e;
        }
    }), e;
}, "object" === ("undefined" == typeof exports ? "undefined" : t(exports)) ? module.exports = exports = e(require("./core")) : "function" == typeof define && define.amd ? define([ "./core" ], e) : e((void 0).CryptoJS);