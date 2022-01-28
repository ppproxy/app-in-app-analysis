var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    return e.HmacSHA256;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./sha256"), require("./hmac")) : "function" == typeof define && define.amd ? define([ "./core", "./sha256", "./hmac" ], e) : e((void 0).CryptoJS);