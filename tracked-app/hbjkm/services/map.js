function t(t) {
    return 0 === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2) ? Promise.reject(null) : new Promise(function(r, o) {
        return i.request(e({}, t, {
            url: t.url,
            header: e({}, t.header, {
                appid: n
            }),
            timeout: t.timeout || 15e3
        })).then(function(t) {
            t.statusCode;
            var e = t.data;
            return console.log("map data:", e), e && 0 === e.status ? r(e) : o(e);
        });
    });
}

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
}, r = getApp(), o = r.config, i = r.wxp, n = require("../config/index").appid, s = (o[o.env].buyDomain, 
"CS3BZ-HM46F-ZJKJJ-NPNPP-YNN4J-WHFQP");

exports.search = function(e) {
    return t({
        url: "https://apis.map.qq.com/ws/place/v1/search?keyword=" + e.keyword + "&boundary=nearby(" + e.latitude + "," + e.longitude + ",1000)&key=" + s,
        method: "GET"
    });
}, exports.geocoder = function(e) {
    return t({
        url: "https://apis.map.qq.com/ws/geocoder/v1/?location=" + e.latitude + "," + e.longitude + "&get_poi=1&poi_options=radius=500&key=" + s,
        method: "GET"
    });
}, exports.districtCode = function(e) {
    return t({
        url: "https://apis.map.qq.com/ws/district/v1/search?keyword=" + e.keyword + "&key=" + s,
        method: "GET"
    });
}, exports.districtList = function(e) {
    return t({
        url: "https://apis.map.qq.com/ws/district/v1/getchildren?key=" + s + (e ? "&id=" + e : ""),
        method: "GET"
    });
}, exports.district = function(e) {
    return t({
        url: "https://apis.map.qq.com/ws/district/v1/getchildren?id=" + e.id + "&key=" + s,
        method: "GET"
    });
};