var e = require("../../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.queryCartAndOperations = function(e) {
    return i.apply(this, arguments);
};

var r = e(require("../../../../@babel/runtime/regenerator")), t = require("../../../../@babel/runtime/helpers/objectSpread2"), a = require("../../../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../../../m/zl/5h")), u = require("../../../../l/wh");

function i() {
    return (i = a(r.default.mark(function e(a) {
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", n.default.request({
                    api: "mtop.alsc.saas.cart.client.dine.in.afterpay.cart.api.pollingCart",
                    param: t(t({}, a), {}, {
                        bizType: "DINE_IN_AFTER_PAY_CART",
                        storeId: (0, u.getShopId)()
                    })
                }).then(function(e) {
                    return e.data.data;
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}