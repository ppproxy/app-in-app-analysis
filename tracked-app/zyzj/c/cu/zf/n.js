var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getCollectVoucher = function(e) {
    return o.default.request({
        api: "mtop.alsc.member.prod.marketing.collectVoucher",
        param: e
    }).catch(function(e) {
        console.error("error", e);
    });
}, exports.getShopMallGoodsListInfo = function(e) {
    return o.default.request({
        api: "mtop.alsc.saas.mall.merchantitem.componentquery",
        param: {
            pageCode: e.pageCode,
            appCode: e.appCode,
            appId: e.appId,
            appType: "wx" === e.appType ? "WECHAT" : "ALIPAY",
            storeId: e.storeId,
            cityCode: e.cityCode,
            longitude: e.longitude,
            latitude: e.latitude,
            appVersion: e.appVersion,
            componentCode: e.componentCode,
            bizCode: e.bizCode,
            params: e.finParams
        }
    }).catch(function(e) {
        console.error("error", e);
    });
}, exports.queryCouponInfo = function(e) {
    return (0, a.queryCouponInfo)(e);
}, exports.queryFatigue = function(e) {
    return p.apply(this, arguments);
}, exports.queryGlobalConfigWithAuth = function() {
    return o.default.request({
        api: "mtop.alsc.saas.cshop.index.IndexQueryService.queryGlobalConfig",
        param: {
            appCode: "KERUYUN_MERCHANT_APP"
        }
    }).then(function(e) {
        return e.data;
    }).catch(function(e) {
        console.error("error", e);
    });
}, exports.queryService = function(e) {
    var r = {
        tableCode: "",
        isFetchData: !0,
        appCode: "KERUYUN_MERCHANT_APP",
        pageCode: "CSHOP_INDEX"
    };
    return Object.assign(r, {
        appId: e.appId,
        componentCode: e.componentCode,
        bizCodes: e.bizCodes,
        appType: "wx" === e.appType ? "WECHAT" : "ALIPAY"
    }), o.default.request({
        api: "mtop.alsc.saas.cshop.index.IndexQueryService.fetchData",
        param: r
    }).then(function(e) {
        return e.data;
    });
};

var r = e(require("../../../@babel/runtime/regenerator")), t = require("../../../@babel/runtime/helpers/asyncToGenerator"), o = e(require("../../../m/zl/5h")), a = require("../../../v/ci/32"), n = require("../../../v/ci/n");

function p() {
    return (p = t(r.default.mark(function e(t) {
        var o;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return "ad-modal-component", o = {
                    customerId: t,
                    bizCode: "LIGHTSTORE_AD_POPUP",
                    uniqueId: "".concat("ad-modal-component"),
                    timeoutSeconds: 86400,
                    setFatigue: !0
                }, e.abrupt("return", (0, n.queryFatigue)(o));

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}