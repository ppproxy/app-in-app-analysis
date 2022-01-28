var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    return e.HmacSHA224;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./sha256"), require("./sha224"), require("./hmac")) : "function" == typeof define && define.amd ? define([ "./core", "./sha256", "./sha224", "./hmac" ], e) : e((void 0).CryptoJS);