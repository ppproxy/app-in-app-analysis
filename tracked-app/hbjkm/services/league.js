var t = getApp(), r = t.request, e = t.config, n = (t.wxp, e.domain + "/kylm");

exports.getHomeList = function() {
    return r({
        url: n + "/antiAlliance/v1/current/homelist",
        method: "GET"
    });
}, exports.getProgramList = function() {
    return r({
        url: n + "/antiAlliance/v1/current/programList",
        method: "GET"
    });
}, exports.getProgramDetail = function(t) {
    return r({
        url: n + "/antiAlliance/v1/d/" + t,
        method: "GET"
    });
}, exports.addProgramTest = function(t) {
    return r({
        url: n + "/antiAlliance/v1/add",
        method: "POST",
        data: t
    });
}, exports.getProgramAddInfo = function(t) {
    return r({
        url: n + "/antiAlliance/v1/apply/get/" + t,
        method: "GET"
    });
};