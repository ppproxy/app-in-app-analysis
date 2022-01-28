var e = require("../@babel/runtime/helpers/construct"), r = require("../@babel/runtime/helpers/objectSpread2"), t = require("./qrcode"), o = function() {
    for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++) u[c] = arguments[c];
    setTimeout(function() {
        r({}, e(t, u));
    }, 1e3);
};

o.CorrectLevel = t.CorrectLevel, module.exports = o;