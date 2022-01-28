var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    return e.HmacSHA1;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./sha1"), require("./hmac")) : "function" == typeof define && define.amd ? define([ "./core", "./sha1", "./hmac" ], e) : e((void 0).CryptoJS);