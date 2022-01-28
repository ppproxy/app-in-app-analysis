var e = getApp(), t = e.request, r = e.config;

e.wxp, e.Anim, e.userStore;

exports.saveOrUpdate = function(e) {
    return t({
        url: r[r.env].carCodePath + "/transportRegister/v1/saveOrUpdate",
        method: "POST",
        data: e
    });
}, exports.getRelationStateByUser = function(e) {
    return t({
        url: r[r.env].carCodePath + "/qrcCode/v1/stateByUser/" + e.uid,
        method: "GET"
    });
};