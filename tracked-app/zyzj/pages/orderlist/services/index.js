var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getCouponOrderList = function() {
    return o.apply(this, arguments);
}, exports.getOrderList = function(e) {
    return u.apply(this, arguments);
}, exports.getOrderStatus = function(e) {
    return s.apply(this, arguments);
}, exports.getTabsByStatus = function() {
    return p.apply(this, arguments);
};

var r = e(require("../../../@babel/runtime/regenerator")), t = require("../../../@babel/runtime/helpers/asyncToGenerator"), a = e(require("../../../m/zl/5h")), n = require("../../../l/wh");

function u() {
    return (u = t(r.default.mark(function e(t) {
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, a.default.request({
                    api: "mtop.alsc.pos.restaurant.order.queryOrderList",
                    param: Object.assign({
                        storeId: (0, n.getShopId)()
                    }, t || {})
                });

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function s() {
    return (s = t(r.default.mark(function e(t) {
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, a.default.request({
                    api: "mtop.alsc.pos.restaurant.order.queryOrderStatus",
                    param: Object.assign({
                        storeId: (0, n.getShopId)()
                    }, t || {})
                });

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function p() {
    return (p = t(r.default.mark(function e() {
        var t, u = arguments;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = u.length > 0 && void 0 !== u[0] ? u[0] : {}, e.next = 3, a.default.request({
                    api: "mtop.alsc.pos.restaurant.order.queryOrderTabStatus",
                    param: Object.assign({
                        storeId: (0, n.getShopId)()
                    }, t)
                });

              case 3:
                return e.abrupt("return", e.sent);

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function o() {
    return (o = t(r.default.mark(function e() {
        var t, u = arguments;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = u.length > 0 && void 0 !== u[0] ? u[0] : {}, e.next = 3, a.default.request({
                    api: "mtop.alsc.saas.capp.orderagg.orderfictitiou.queryOrderList",
                    param: Object.assign({
                        storeId: (0, n.getShopId)()
                    }, t)
                });

              case 3:
                return e.abrupt("return", e.sent);

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}