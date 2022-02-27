var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.addAliMiniFormld = function(e) {
    return n.default.request({
        api: "mtop.alsc.saas.promoprod.api.applet.alipay.formid.add",
        param: {
            formId: e.formId
        }
    }).then(function(e) {
        return e.data.data;
    }).catch(function(e) {});
}, exports.checkVerifyCode = function(e) {
    return n.default.request({
        api: "mtop.alsc.member.prod.member.transpassword.checkCode",
        param: e
    }).then(function(e) {
        return e.data;
    });
}, exports.fetchStoreBaseConfig = function(e, t) {
    return o.apply(this, arguments);
}, exports.getScanDiningStatus = function(e) {
    return i.apply(this, arguments);
}, exports.getServerTime = function() {
    return n.default.request({
        api: "mtop.alsc.saas.codec.system.time.get"
    }).then(function(e) {
        return e.data.data;
    });
}, exports.getStoreInfoById = function(e) {
    return s.apply(this, arguments);
}, exports.queryAfterOrderPopInfo = function(e) {
    return n.default.request({
        api: "mtop.alsc.saas.play.delivery.order.finish.window",
        param: e
    }).then(function(e) {
        return e.data;
    }).catch(function(e) {
        console.error("error", e);
    });
}, exports.queryCodeInfo = function(e) {
    var t = (0, u.getQueryPathInfo)();
    t && t.length > 0 && ((0, u.removeQueryPathInfo)(), Object.assign(e, {
        codeUrl: t
    }));
    return n.default.request({
        api: "mtop.alsc.saas.codec.code.attr.query",
        param: e
    }).then(function(e) {
        return e.data;
    }).catch(function(e) {
        console.error("error", e);
    });
}, exports.queryDishEstimate = function(e) {
    return n.default.request({
        api: "mtop.alsc.pos.restaurant.dish.dishEstimate",
        param: {
            storeId: e.storeId,
            dishScene: e.dishScene,
            orderNo: e.orderNo
        }
    }).then(function(e) {
        return e.data.data;
    });
}, exports.queryFatigue = function(e) {
    return n.default.request({
        api: "mtop.alsc.saas.play.fatigue.getCustomerFatigueResult",
        param: e
    }).then(function(e) {
        return e.data;
    }).catch(function(e) {
        console.error(e);
    });
}, exports.queryHomeConfigInfo = function(e, t) {
    var r = {
        tableCode: "",
        isFetchData: !0,
        appCode: "KERUYUN_MERCHANT_APP"
    };
    return Object.assign(r, e), n.default.request({
        api: "mtop.alsc.saas.cshop.index.IndexQueryService.queryConfig",
        param: r,
        extraOptions: t || {}
    }).then(function(e) {
        return e.data;
    });
}, exports.queryOrderAssistInfo = function(e) {
    var t = (0, u.getShopId)();
    return n.default.request({
        api: "mtop.alsc.pos.restaurant.order.batchQueryOrderAssistInfo",
        param: r({
            storeId: t
        }, e)
    }).then(function(e) {
        return e.data;
    });
}, exports.sendVerifyCode = function(e) {
    return n.default.request({
        api: "mtop.alsc.member.prod.customer.sendVerifyCode",
        param: e
    }).then(function(e) {
        return e.data;
    });
};

var t = e(require("../../@babel/runtime/regenerator")), r = require("../../@babel/runtime/helpers/objectSpread2"), a = require("../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../m/zl/5h")), u = require("../../l/wh");

function o() {
    return (o = a(t.default.mark(function e(a, u) {
        var o, s, i;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, n.default.request(r({
                    api: "mtop.alsc.pos.restaurant.shop.getStoreBaseConfig",
                    param: r({}, a)
                }, u));

              case 2:
                return o = e.sent, s = o.data, i = void 0 === s ? {} : s, e.abrupt("return", i);

              case 6:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function s() {
    return (s = a(t.default.mark(function e(r) {
        var a, u, o;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, n.default.request({
                    api: "mtop.alsc.saas.cshop.search.store.getById",
                    param: {
                        shopId: r.shopId,
                        longitude: r.longitude,
                        latitude: r.latitude
                    }
                });

              case 2:
                return a = e.sent, u = a.data, o = void 0 === u ? {} : u, e.abrupt("return", o);

              case 6:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function i() {
    return (i = a(t.default.mark(function e(a) {
        var u, o, s;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, n.default.request({
                    api: "mtop.alsc.pos.restaurant.cart.fetchDinnerStatus",
                    param: r({
                        dinnerSupportStoreMemberPay: !0,
                        queuePreOrderFlag: !0
                    }, a)
                });

              case 2:
                return u = e.sent, o = u.data, s = void 0 === o ? {} : o, e.abrupt("return", s);

              case 6:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}