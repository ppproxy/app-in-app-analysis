var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.queryShopConfigInfo = function(e) {
    return p.apply(this, arguments);
};

var r = e(require("../../../@babel/runtime/regenerator")), t = require("../../../@babel/runtime/helpers/asyncToGenerator"), a = e(require("../../../m/zl/5h"));

function p() {
    return (p = t(r.default.mark(function e(t) {
        var p;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return p = {
                    tableCode: "",
                    isFetchData: !0,
                    appCode: "KERUYUN_MERCHANT_APP"
                }, Object.assign(p, {
                    pageCode: t.pageCode,
                    appId: t.appId,
                    appType: "wx" === t.appType ? "WECHAT" : "ALIPAY",
                    cityCode: t.cityCode,
                    storeId: t.storeId,
                    latitude: t.latitude,
                    longitude: t.longitude,
                    appVersion: t.appVersion
                }), e.next = 4, a.default.request({
                    api: "mtop.alsc.saas.mall.merchantitem.pagequery",
                    param: p
                });

              case 4:
                return e.abrupt("return", e.sent);

              case 5:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}