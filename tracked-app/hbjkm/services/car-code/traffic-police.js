function e(e) {
    return null == e ? "" : e;
}

var t = getApp(), r = t.request, c = t.config, i = (t.wxp, c[c.env].carCodePath);

exports.getInspection = function(t, c, n) {
    return r({
        url: i + "/trafficPolice/v1/inspection?registerId=" + e(t) + "&uid=" + e(c) + "&gridPointId=" + e(n),
        method: "GET"
    });
}, exports.getPassenger = function(t, c) {
    return r({
        url: i + "/trafficPolice/v1/passenger?qrcId=" + e(t) + "&registerId=" + e(c),
        method: "GET"
    });
}, exports.policeCheck = function(e) {
    return r({
        url: i + "/trafficPolice/v1/check_point_police_check",
        method: "POST",
        data: e
    });
};