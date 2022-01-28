var e = getApp(), r = e.request;

e.config, e.wxp;

exports.relationUserList = function(e) {
    return r({
        url: "/prominent-citizens/qrcCodeRelation/v1/relationUserList",
        method: "GET",
        data: e
    });
}, exports.createCodeByKey = function(e, t, o) {
    return r({
        url: "/grid-scan/grid-operator/v1/createCodeByKey?key=" + e + "&page=" + t + "&qrCodeKey=" + o,
        method: "GET"
    });
}, exports.getPassQrcCode = function(e, t, o) {
    return r({
        url: "/grid-scan/grid-operator/v1/qrcCode?operatorId=" + e + "&pointId=" + t + "&passRole=" + o,
        method: "GET"
    });
}, exports.findInfoByKey = function(e) {
    return r({
        url: "/grid-scan/grid-operator/v1/findInfoByKey?key=" + e,
        method: "GET"
    });
}, exports.relationUserSave = function(e) {
    return r({
        url: "/grid-scan/communityPassReg/v1/save",
        method: "POST",
        data: e
    });
};