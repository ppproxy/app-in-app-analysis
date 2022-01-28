var e = getApp(), t = e.request, r = e.config;

e.wxp;

exports.saveCheckPointRegister = function(e) {
    return t({
        url: r[r.env].carCodePath + "/busDriver/v1/saveCheckPointRegister",
        method: "POST",
        data: e
    });
}, exports.updateTravelswitchState = function(e) {
    return t({
        url: r[r.env].carCodePath + "/busDriver/v1/updateTravelswitchState",
        method: "POST",
        data: e
    });
}, exports.getTrafficgateInfo = function(e) {
    return t({
        url: r[r.env].carCodePath + "/busDriver/v1/getTrafficgateInfo",
        method: "GET",
        data: e
    });
}, exports.getTrafficgateList = function(e) {
    return t({
        url: r[r.env].carCodePath + "/busDriver/v1/getTrafficgateList",
        method: "GET",
        data: e
    });
}, exports.getCheckPointRegister = function(e) {
    return t({
        url: r[r.env].carCodePath + "/busDriver/v1/getCheckPointRegister",
        method: "GET",
        data: e
    });
}, exports.getRegisterPassengersListCount = function(e) {
    return t({
        url: r[r.env].carCodePath + "/busDriver/v1/getRegisterPassengersListCount",
        method: "GET",
        data: e
    });
}, exports.getPointRegisterPassengersList = function(e) {
    return t({
        url: r[r.env].carCodePath + "/busDriver/v1/getPointRegisterPassengersList",
        method: "GET",
        data: e
    });
}, exports.deletePassengerById = function(e) {
    return t({
        url: r[r.env].carCodePath + "/trafficgate/checkpointpassenger/v1/deletePassengerById",
        method: "POST",
        data: e
    });
}, exports.deletCheckPointRegister = function(e) {
    return t({
        url: r[r.env].carCodePath + "/busDriver/v1/deletCheckPointRegister/" + e,
        method: "DELETE",
        data: e
    });
}, exports.getBusDriverQr = function(e, a) {
    return t({
        url: r[r.env].carCodePath + "/trafficgate/checkpointpassenger/v1/busDriverQr?page=" + e + "&param=" + a,
        method: "GET"
    });
};