var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    var r, t, i;
    return t = (r = e).lib.CipherParams, i = r.enc.Hex, r.format.Hex = {
        stringify: function(e) {
            return e.ciphertext.toString(i);
        },
        parse: function(e) {
            var r = i.parse(e);
            return t.create({
                ciphertext: r
            });
        }
    }, e.format.Hex;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./cipher-core")) : "function" == typeof define && define.amd ? define([ "./core", "./cipher-core" ], e) : e((void 0).CryptoJS);