var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    return e.pad.Iso10126 = {
        pad: function(r, o) {
            var t = 4 * o, i = t - r.sigBytes % t;
            r.concat(e.lib.WordArray.random(i - 1)).concat(e.lib.WordArray.create([ i << 24 ], 1));
        },
        unpad: function(e) {
            var r = 255 & e.words[e.sigBytes - 1 >>> 2];
            e.sigBytes -= r;
        }
    }, e.pad.Iso10126;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./cipher-core")) : "function" == typeof define && define.amd ? define([ "./core", "./cipher-core" ], e) : e((void 0).CryptoJS);