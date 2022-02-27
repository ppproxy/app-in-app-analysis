var t = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.cartTag = function(t) {
    return d.apply(this, arguments);
}, exports.clearCart = function(t) {
    return l.apply(this, arguments);
}, exports.extendBizType = o, exports.getCart = function(t) {
    return n.default.request({
        api: i("mtop.alsc.pos.restaurant.cart.fetchCart"),
        param: o(a({
            dinnerSupportStoreMemberPay: !0
        }, t))
    }).then(function(t) {
        return t.data;
    });
}, exports.getCartApi = i, exports.setDinerNum = function(t) {
    return m.apply(this, arguments);
}, exports.setPrepayDiningNum = function(t) {
    return f.apply(this, arguments);
}, exports.updateCart = function(t) {
    return n.default.request({
        api: i("mtop.alsc.pos.restaurant.cart.updateCart"),
        param: o(t),
        options: {
            type: "post"
        }
    }).then(function(t) {
        return t.data;
    });
};

var r = t(require("../../@babel/runtime/regenerator")), e = require("../../@babel/runtime/helpers/asyncToGenerator"), a = require("../../@babel/runtime/helpers/objectSpread2"), n = t(require("../../m/zl/5h")), p = t(require("../../m/zl/5o")), s = require("../../l/wh"), c = require("../../l/wa"), u = t(require("../../m/zd/n")).default.$ltracker;

function i(t) {
    var r = p.default.get("orderfood.type"), e = {
        "mtop.alsc.pos.restaurant.cart.fetchCart": {
            DINNER: "mtop.alsc.saas.cart.client.dine.in.afterpay.cart.api.fetchCart",
            FAST_FOOD: "mtop.alsc.saas.cart.client.dine.in.prepay.cart.api.fetchCart"
        },
        "mtop.alsc.pos.restaurant.cart.updateCart": {
            DINNER: "mtop.alsc.saas.cart.client.dine.in.afterpay.cart.api.updateCart",
            FAST_FOOD: "mtop.alsc.saas.cart.client.dine.in.prepay.cart.api.updateCart"
        },
        "mtop.alsc.pos.restaurant.cart.clearCart": {
            DINNER: "mtop.alsc.saas.cart.client.dine.in.afterpay.cart.api.clearCart",
            FAST_FOOD: "mtop.alsc.saas.cart.client.dine.in.prepay.cart.api.clearCart"
        },
        "mtop.alsc.pos.restaurant.cart.setDinerNum": {
            DINNER: "mtop.alsc.saas.cart.client.dine.in.afterpay.cart.api.setDineNum",
            FAST_FOOD: "mtop.alsc.saas.cart.client.dine.in.prepay.cart.api.setDiningNum"
        },
        "mtop.alsc.pos.restaurant.cart.cartTag": {
            DINNER: "mtop.alsc.saas.cart.client.dine.in.afterpay.cart.api.cartTag",
            FAST_FOOD: "mtop.alsc.saas.cart.client.dine.in.prepay.cart.api.cartTag"
        },
        "mtop.alsc.pos.restaurant.cart.queryDinerNumByCartId": {
            DINNER: "mtop.alsc.saas.cart.client.dine.in.afterpay.cart.api.getDineNum"
        }
    };
    return "DINNER" === r || "FAST_FOOD" === r ? e[t][r] : (console.error("获取mealType失败:", r), 
    u.logError(new Error({
        msg: "获取mealType失败",
        value: r
    })), e[t].FAST_FOOD);
}

function o(t) {
    var r = {
        DINNER: "DINE_IN_AFTER_PAY_CART",
        FAST_FOOD: "DINE_IN_BEFORE_PAY_CART"
    }[p.default.get("orderfood.type")];
    return a(a({}, t), {}, {
        bizType: r
    });
}

function l() {
    return (l = e(r.default.mark(function t(e) {
        var u, l, d;
        return r.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return u = (0, s.getShopId)(), l = "wx" === (0, c.getMiniType)() ? "WECHAT" : "ALIPAY", 
                d = p.default.get("orderfood.cart.id"), t.next = 5, n.default.request({
                    api: i("mtop.alsc.pos.restaurant.cart.clearCart"),
                    param: o(a({
                        mealType: p.default.get("orderfood.type"),
                        storeId: u,
                        appType: l,
                        cartId: d
                    }, e))
                });

              case 5:
                return t.abrupt("return", t.sent);

              case 6:
              case "end":
                return t.stop();
            }
        }, t);
    }))).apply(this, arguments);
}

function d() {
    return (d = e(r.default.mark(function t(e) {
        var a;
        return r.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, n.default.request({
                    api: i("mtop.alsc.pos.restaurant.cart.cartTag"),
                    param: o(e)
                });

              case 2:
                return a = t.sent, t.abrupt("return", a);

              case 4:
              case "end":
                return t.stop();
            }
        }, t);
    }))).apply(this, arguments);
}

function f() {
    return (f = e(r.default.mark(function t(e) {
        var a;
        return r.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, n.default.request({
                    api: "mtop.alsc.saas.cart.client.dine.in.prepay.cart.api.setDiningNum",
                    param: o(e)
                });

              case 2:
                return a = t.sent, t.abrupt("return", a);

              case 4:
              case "end":
                return t.stop();
            }
        }, t);
    }))).apply(this, arguments);
}

function m() {
    return (m = e(r.default.mark(function t(e) {
        var a;
        return r.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, n.default.request({
                    api: i("mtop.alsc.pos.restaurant.cart.setDinerNum"),
                    param: o(e)
                });

              case 2:
                return a = t.sent, t.abrupt("return", a);

              case 4:
              case "end":
                return t.stop();
            }
        }, t);
    }))).apply(this, arguments);
}