var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    return e.pad.Pkcs7;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./cipher-core")) : "function" == typeof define && define.amd ? define([ "./core", "./cipher-core" ], e) : e((void 0).CryptoJS);