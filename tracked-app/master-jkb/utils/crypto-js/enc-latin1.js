var e, r = require("../../@babel/runtime/helpers/typeof");

e = function(e) {
    return e.enc.Latin1;
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) ? module.exports = exports = e(require("./core")) : "function" == typeof define && define.amd ? define([ "./core" ], e) : e((void 0).CryptoJS);