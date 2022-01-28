var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    return e.HmacSHA512;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./x64-core"), require("./sha512"), require("./hmac")) : "function" == typeof define && define.amd ? define([ "./core", "./x64-core", "./sha512", "./hmac" ], e) : e((void 0).CryptoJS);