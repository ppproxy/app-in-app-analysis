var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    return e.HmacRIPEMD160;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core"), require("./ripemd160"), require("./hmac")) : "function" == typeof define && define.amd ? define([ "./core", "./ripemd160", "./hmac" ], e) : e((void 0).CryptoJS);