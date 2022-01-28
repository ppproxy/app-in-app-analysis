var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    return e.pad.Iso97971 = {
        pad: function(r, o) {
            r.concat(e.lib.WordArray.create([ 2147483648 ], 1)), e.pad.ZeroPadding.pad(r, o);
        },
        unpad: function(r) {
            e.pad.ZeroPadding.unpad(r), r.sigBytes--;
        }
    }, e.pad.Iso97971;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./cipher-core")) : "function" == typeof define && define.amd ? define([ "./core", "./cipher-core" ], e) : e((void 0).CryptoJS);