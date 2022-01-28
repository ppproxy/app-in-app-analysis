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
};