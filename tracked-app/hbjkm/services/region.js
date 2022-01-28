function e() {
    return console.log("请求的数据是", "" + t.cdnDomain + t[t.env].regionPath + "?t=" + Date.now()), 
    r.request({
        url: "" + t.cdnDomain + t[t.env].regionPath + "?t=" + Date.now()
    }).then(function(e) {
        var n = e.data[0].regionList;
        return getApp().currentRegionSource = n, n;
    });
}

var n = getApp(), t = (n.request, n.config), r = n.wxp;

exports.getRegionData = function(n, t) {
    t = t || getApp().currentRegionSource;
    var r = Promise.resolve(t);
    return t || (r = e()), r.then(function(e) {
        var t = e.find(function(e) {
            return e.regionCode === n;
        });
        return t && t.regionList || [];
    }), r;
};