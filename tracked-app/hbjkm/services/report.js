var e = getApp().request;

exports.nCovSave = function(r) {
    return e({
        url: "/report/pneumonia/save",
        method: "POST",
        data: r
    });
}, exports.companySave = function(r) {
    return e({
        url: "/report/enterprise/save",
        method: "POST",
        data: r
    });
}, exports.hasReported = function() {
    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = wx.getStorageSync("is_reported");
    return t ? Promise.resolve(t) : e({
        url: "/report/his/pneumonia",
        method: "GET",
        data: r
    }).then(function(e) {
        return wx.setStorageSync("is_reported", !!e), !!e;
    });
};