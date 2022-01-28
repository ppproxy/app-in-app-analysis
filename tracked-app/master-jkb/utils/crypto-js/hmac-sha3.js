var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    return e.HmacSHA3;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./x64-core"), require("./sha3"), require("./hmac")) : "function" == typeof define && define.amd ? define([ "./core", "./x64-core", "./sha3", "./hmac" ], e) : e((void 0).CryptoJS);