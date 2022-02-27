var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.fetchActivityList = function(e) {
    return m.apply(this, arguments);
}, exports.fetchOrderAgain = function(e) {
    return f.apply(this, arguments);
}, exports.fetchOrderByTable = function() {
    return h.apply(this, arguments);
}, exports.mtopCacheRequest = d, exports.orderfoodPreload = w, exports.queryActivityInfo = function(e) {
    return g.apply(this, arguments);
}, exports.queryCouponNum = function() {
    return x.apply(this, arguments);
}, exports.queryShopDecorationProload = function() {
    S || w();
    return v;
}, exports.queryShopIndexDecoration = y, exports.storeBaseConfigPreload = function() {
    S || w();
    return q;
}, exports.updateCartByVoucherTemplateId = function(e) {
    return a.default.request({
        api: "mtop.alsc.pos.restaurant.cart.updateCartByVoucherTemplateId",
        param: r({
            dinnerSupportStoreMemberPay: !0
        }, e)
    }).then(function(e) {
        return e.data || {};
    });
};

var t = e(require("../../@babel/runtime/regenerator")), r = require("../../@babel/runtime/helpers/objectSpread2"), n = require("../../@babel/runtime/helpers/asyncToGenerator"), a = e(require("../../m/zl/5h")), u = e(require("../../m/zl/5o")), o = require("../../l/wh"), p = require("../../l/wa"), s = require("../../l/w9.js"), i = e(require("../../m/zt")), c = {
    useCache: !0,
    cacheTime: 3e4,
    cacheRequestSilent: !0
};

function d(e) {
    return l.apply(this, arguments);
}

function l() {
    return (l = n(t.default.mark(function e(n) {
        var u, o, p;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return u = !1, o = new Promise(function(e, t) {
                    var o = function(t) {
                        !u && (u = !0) && e(t);
                    }, p = n.extraOptions, s = void 0 === p ? {} : p;
                    a.default.request(r(r({}, n), {}, {
                        extraOptions: r(r({}, s), {}, {
                            cacheCallback: function(e) {
                                o(e);
                            }
                        })
                    })).then(function(e) {
                        o(e);
                    }).catch(function(e) {
                        t(e);
                    });
                }), e.next = 4, o;

              case 4:
                return p = e.sent, e.abrupt("return", p);

              case 6:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function f() {
    return (f = n(t.default.mark(function e(n) {
        var u;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return u = (0, o.getShopId)(), e.next = 3, a.default.request({
                    api: "mtop.alsc.pos.restaurant.cart.addKindDish",
                    param: r({
                        storeId: u
                    }, n)
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

function h() {
    return (h = n(t.default.mark(function e() {
        var r, n, u, p, s;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = (0, o.getTableId)() || "", n = (0, o.getBrandInfo)(), u = (n || {}).brandId, 
                p = (0, o.getShopId)(), s = (0, o.getLoginCustomer)(), e.next = 7, a.default.request({
                    api: "mtop.alsc.saas.capp.orderagg.order.queryOrderByTable",
                    param: {
                        tableId: r,
                        brandId: u,
                        storeId: p,
                        customerId: s
                    }
                });

              case 7:
                return e.abrupt("return", e.sent);

              case 8:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function m() {
    return (m = n(t.default.mark(function e(r) {
        var n;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = (0, o.getShopId)(), e.next = 3, a.default.request({
                    api: "mtop.alsc.saas.play.delivery.activity.exposure",
                    param: {
                        storeId: n,
                        mealType: u.default.get("orderfood.type"),
                        activityScene: r
                    }
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

function y(e) {
    return I.apply(this, arguments);
}

function I() {
    return (I = n(t.default.mark(function e(n) {
        var a, u, s, l, f, h, m, y, I, g, x, b, q, v, S, w;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = (0, o.getAppBaseInfo)(), u = a.appId, s = (0, o.getGeoInfo)() || {}, 
                l = s.longitude, f = void 0 === l ? i.default.DEF_LONGITUDE : l, h = s.latitude, 
                m = void 0 === h ? i.default.DEF_LATITUDE : h, y = (0, o.getShopId)(), I = (0, o.getShopInfo)(), 
                g = I.cityId, x = void 0 === g ? "" : g, b = (0, o.getTableId)() || "", q = r({
                    tableCode: "",
                    tableId: b,
                    isFetchData: !0,
                    appCode: "KERUYUN_MERCHANT_APP",
                    storeId: y,
                    cityId: x,
                    pageCode: "CSHOP_ORDER_FOOD_INDEX",
                    appId: u,
                    appType: "wx" === (0, p.getMiniType)() ? "WECHAT" : "ALIPAY",
                    longitude: f,
                    latitude: m,
                    appVersion: (0, p.getVersion)(),
                    currentConfigVersion: "",
                    queryDishMenuFlag: !0,
                    querySalesOneMonthFlag: !0,
                    dinnerSupportStoreMemberPay: !0,
                    recommendQuery: !0
                }, n), e.next = 8, d({
                    api: "mtop.alsc.pos.restaurant.shop.querySDKPageConfig",
                    param: q,
                    extraOptions: c
                });

              case 8:
                return v = e.sent, S = v.data, w = void 0 === S ? {
                    data: {}
                } : S, e.abrupt("return", w.data.components);

              case 12:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function g() {
    return (g = n(t.default.mark(function e(n) {
        var u;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return u = (0, o.getShopId)(), e.abrupt("return", a.default.request({
                    api: "mtop.alsc.saas.play.consult.querySimpleActivities",
                    param: r({
                        shopId: u
                    }, n)
                }).catch(function(e) {}));

              case 2:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function x() {
    return (x = n(t.default.mark(function e() {
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, a.default.request({
                    api: "mtop.alsc.member.prod.customer.coupon.queryNum",
                    param: {}
                }).then(function(e) {
                    return e.data || {};
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

var b, q, v, S = !1;

function w() {
    return S || (S = !0, q = (0, s.getStoreBaseConfig)({
        isForceFetch: !0
    }), v = y(), b = [ q, v ], Promise.all(b).catch(function() {}).then(function() {
        S = !1;
    })), b;
}