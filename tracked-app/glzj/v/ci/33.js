var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getPrecheckData = function(e) {
    return l.apply(this, arguments);
}, exports.queryMarketingGuideInfo = function(e) {
    var r = (0, o.getLoginCustomer)(), t = ((0, o.getBrandInfo)() || {}).brandId, a = (0, 
    o.getShopId)();
    return n.default.request({
        api: "mtop.alsc.saas.play.delivery.order.guide",
        param: {
            customerId: r,
            brandId: t,
            storeId: a,
            mealType: u.default.get("orderfood.type"),
            resourceSpaceCode: e
        }
    }).then(function(e) {
        return e.data;
    });
}, exports.queryOrderDishDiffInfo = function() {
    var e = (0, o.getTableId)() || "", r = ((0, o.getBrandInfo)() || {}).brandId, t = (0, 
    o.getShopId)(), a = (0, o.getLoginCustomer)();
    return n.default.request({
        api: "mtop.alsc.pos.restaurant.DishFacade.queryOrderDishPageDiffInfo",
        param: {
            tableId: e,
            brandId: r,
            storeId: t,
            customerId: a,
            scene: "place_order"
        }
    }).then(function(e) {
        return e.data;
    });
}, exports.queryTableById = function(e) {
    return n.default.request({
        api: "mtop.alsc.pos.restaurant.table.queryTableById",
        param: {
            tableId: e.tableId,
            storeId: e.storeId
        }
    }).then(function(e) {
        return e.data;
    });
};

var r = e(require("../../@babel/runtime/regenerator")), t = require("../../@babel/runtime/helpers/objectSpread2"), a = require("../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../m/zl/5h")), u = e(require("../../m/zl/5o")), o = require("../../l/wh"), s = require("../../l/wa"), i = require("./n"), d = require("../../l/w9");

function l() {
    return (l = a(r.default.mark(function e(a) {
        var n, u, l, p, c, I, f, b, g, h, q, m, y, w, D;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = a.scanAction, u = a.storeId, l = a.tableId, p = u || (0, o.getShopId)(), 
                c = l || (0, o.getTableId)(), I = (0, s.getMiniType)(), f = "wx" === I ? "WECHAT" : "ALIPAY", 
                b = {
                    storeId: p,
                    tableId: c,
                    isGroupDinner: !1
                }, e.prev = 6, e.next = 9, (0, i.getScanDiningStatus)({
                    scanAction: n,
                    storeId: p,
                    tableId: c,
                    appType: f
                });

              case 9:
                g = e.sent, e.next = 15;
                break;

              case 12:
                throw e.prev = 12, e.t0 = e.catch(6), e.t0;

              case 15:
                if (h = g.data, q = h.supportMultiOrder, m = h.tableStatus, y = h.dinnerFlows, w = y && y[0] ? y[0] : null, 
                "TABLE_UNAVAILABLE" === m || w) {
                    e.next = 21;
                    break;
                }
                throw console.error("diningStatusrFlows", h), new Error("接口错误，没有就餐流水！");

              case 21:
                return D = (0, d.getRedirectUrlByTableStatus)({
                    scanAction: n,
                    tableStatus: m,
                    firstDinnerFlow: w
                }), b = t(t({}, b), {}, {
                    data: t(t({}, h), {}, {
                        firstDinnerFlow: w
                    }),
                    supportMultiOrder: q,
                    redirect: D
                }), e.abrupt("return", b);

              case 24:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 6, 12 ] ]);
    }))).apply(this, arguments);
}