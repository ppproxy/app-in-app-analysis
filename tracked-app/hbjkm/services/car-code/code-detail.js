var e = getApp(), t = e.request, r = e.config, n = r[r.env].carCodePath;

exports.getTrafficgateInfo = function(e) {
    return t({
        url: n + "/transportRegister/v1/getCheckPointRegisterInfo",
        method: "POST",
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        data: e
    });
}, exports.getPointPassengerList = function(e) {
    return t({
        url: n + "/transportRegister/v1/getCheckPointPassagerList",
        method: "POST",
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        data: e
    });
}, exports.getPassengersfromLastWeek = function(e) {
    return t({
        url: n + "/transportRegister/v1/getPassengersfromLastWeek",
        method: "POST",
        data: e
    });
};