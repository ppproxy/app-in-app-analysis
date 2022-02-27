var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    var i = (0, t.getAppBaseInfo)().appId, p = (0, t.getShopId)(), n = ((0, t.getShopInfo)() || {}).cityId, l = (0, 
    t.getGeoInfo)() || {}, I = l.longitude, f = void 0 === I ? 120.16284 : I, g = l.latitude, s = void 0 === g ? 30.25325 : g, q = (0, 
    o.getMiniType)(), b = {
        pageCode: u.default.HIGHT_HOME_PAGE_CODE,
        appId: i,
        appType: "wx" === q ? "WECHAT" : "ALIPAY",
        tableCode: (0, t.getTableId)(),
        appVersion: (0, o.getVersion)(),
        longitude: f,
        latitude: s,
        storeId: p,
        cityCode: n
    };
    if (!b.storeId) {
        var c = new Error("\bQueryHomeConfigInfo StoreId Required");
        throw c.error_type = "SAAS_ERROR", a.logError(c), c;
    }
    return (0, d.queryHomeConfigInfo)(b, r({}, e));
};

var r = require("../../../@babel/runtime/helpers/objectSpread2"), t = require("../../../l/wh"), o = require("../../../l/wa"), i = e(require("../../../m/zd/n")), u = e(require("../../../m/zt")), d = require("../../../v/ci/n"), a = i.default.$ltracker;