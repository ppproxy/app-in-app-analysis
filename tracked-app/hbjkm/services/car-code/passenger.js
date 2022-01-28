var e = getApp(), t = e.request, r = e.config, n = (e.wxp, r[r.env].carCodePath), s = r[r.env].healthCodePath;

exports.getTravelswitchState = function(e) {
    return t({
        url: n + "/busDriver/v1/verificationTravelswitchState",
        method: "GET",
        data: e
    });
}, exports.deletePassengerById = function(e) {
    return t({
        url: n + "/trafficgate/checkpointpassenger/v1/deletePassengerById",
        method: "GET",
        data: e
    });
}, exports.SavePointPassenger = function(e) {
    return t({
        url: n + "/trafficgate/checkpointpassenger/v1/SavePointPassenger",
        method: "POST",
        data: e
    });
}, exports.getPointPassengerList = function(e) {
    return t({
        url: n + "/trafficgate/checkpointpassenger/v1/getPointPassengerList",
        method: "POST",
        data: e
    });
}, exports.getPointPassengerCount = function(e) {
    return t({
        url: n + "trafficgate/checkpointpassenger/v1/getPointPassengerCount",
        method: "POST",
        data: e
    });
}, exports.passengerPushNew = function(e) {
    return t({
        url: n + "/trafficgate/checkpointpassenger/v1/PassengerPushNew",
        method: "GET",
        data: e
    });
}, exports.getTravelInfoById = function(e) {
    return t({
        url: n + "/busDriver/v1/getTrafficgateInfo",
        method: "GET",
        data: e
    });
}, exports.getQRByRegister = function(e) {
    return t({
        url: n + "/busDriver/v1/getCheckPointRegister",
        method: "GET",
        data: e
    });
}, exports.getTrafficgateList = function(e) {
    return t({
        url: n + "/busDriver/v1/getTrafficgateList",
        method: "GET",
        data: e
    });
}, exports.getCheckPointRegisterByCarnumber = function(e) {
    return t({
        url: n + "/busDriver/v1/getCheckPointRegisterByCarnumber",
        method: "GET",
        data: e
    });
}, exports.getUserHealthInfo = function(e) {
    return t({
        url: s + "/qrcCode/v1/infoByUser/" + e,
        method: "GET",
        data: e
    });
}, exports.getPassengersfromLastWeek = function(e) {
    return t({
        url: n + "/transportRegister/v1/getPassengersfromLastWeek",
        method: "POST"
    });
}, exports.getqrcCodefromLastWeek = function(e) {
    return t({
        url: s + "/qrcCode/v1/reportUserList",
        method: "GET"
    });
}, exports.getPointPassengerState = function() {
    return t({
        url: n + "/trafficgate/checkpointpassenger/v1/getPointPassengerState",
        method: "GET"
    });
};