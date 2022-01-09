var r = arguments, o = {}, e = function(r) {
    o[Symbol.for(r)] && delete o[Symbol.for(r)];
};

module.exports = {
    startRecord: function(r) {
        var e = Symbol.for(r);
        o[e] = Date.now();
    },
    stopRecord: e,
    report: function(t) {
        var n = null;
        r.length > 1 && r[1] && (n = r[1]);
        var a = o[Symbol.for(t)];
        wx.canIUse("reportPerformance") && wx.reportPerformance(t, Date.now() - a, n), e(t);
    }
};