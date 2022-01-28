var e = getApp(), t = e.request, r = e.config;

e.wxp;

exports.saveOrUpdate = function(e) {
    return t({
        url: r[r.env].carCodePath + "/transportRegister/v1/saveOrUpdate",
        method: "POST",
        data: e
    });
}, exports.getCheckPointPassagerList = function(e) {
    return t({
        url: r[r.env].carCodePath + "/transportRegister/v1/getCheckPointPassagerList",
        method: "POST",
        data: e
    });
}, exports.getPassengersfromLastWeek = function(e) {
    return t({
        url: r[r.env].carCodePath + "/transportRegister/v1/getPassengersfromLastWeek",
        method: "POST",
        data: e
    });
}, exports.getCurrentUserRegisterList = function(e) {
    return t({
        url: r[r.env].carCodePath + "/transportRegister/v1/getCurrentUserRegisterList",
        method: "Get",
        data: e
    });
}, exports.getCheckPointRegister = function(e) {
    return t({
        url: r[r.env].carCodePath + "/busDriver/v1/getCheckPointRegister?key=" + e,
        method: "GET",
        data: e
    });
}, exports.getUserHealthInfo = function(e) {
    return t({
        url: r[r.env].carCodePath + NaN + e,
        method: "GET",
        data: e
    });
}, exports.getRelationStateByUser = function(e) {
    return t({
        url: r[r.env].carCodePath + "/qrcCode/v1/stateByUser/" + e.uid,
        method: "GET"
    });
};