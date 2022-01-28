var e = getApp(), t = e.request, r = e.config, o = (e.wxp, r[r.env].carCodePath, 
r[r.env].healthCodePath);

exports.getQrCode = function(e) {
    return t({
        url: o + "/qrcCode/v1/stateByUser/" + e.uid,
        method: "GET"
    });
};