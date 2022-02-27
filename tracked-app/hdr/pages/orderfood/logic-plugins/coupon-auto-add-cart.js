var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, r = require("../../../@babel/runtime/helpers/toConsumableArray"), o = e(require("../../../@babel/runtime/regenerator")), i = require("../../../@babel/runtime/helpers/asyncToGenerator"), u = require("../../../v/33/n"), n = require("../../../l/wh"), a = require("../../../l/wa"), s = require("../models/shop-info"), l = require("../../../m/z8/zj"), c = e(require("../../../m/zl/5o")), p = {
    name: "couponAutoAddCart",
    exec: (t = i(o.default.mark(function e(t, r) {
        var i, u, n, a, l, c;
        return o.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (i = this.options, u = i.couponType, n = i.giftFlag, a = i.useCondition, l = i.couponTemplateId, 
                c = "SAAS_GIFT" === u && "false" === n && -1 !== a.indexOf("DINE_IN"), !(0, s.getShopInfoModel)().getOpenStatus() || !c) {
                    e.next = 6;
                    break;
                }
                return e.next = 6, d(t, l);

              case 6:
                return e.next = 8, r();

              case 8:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function(e, r) {
        return t.apply(this, arguments);
    }),
    end: function() {}
};

function d(e, t) {
    return h.apply(this, arguments);
}

function h() {
    return (h = i(o.default.mark(function e(t, i) {
        var s, p, d, h, f, m, g, T, I, b, A, D, y, v, x, C, q, G, _, w, H;
        return o.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return s = {
                    appType: "wx" === (0, a.getMiniType)() ? "WECHAT" : "ALIPAY",
                    storeId: (0, n.getShopId)(),
                    cartId: (0, n.getTableId)() ? c.default.get("orderfood.cart.id") : void 0,
                    voucherTemplateId: i
                }, e.prev = 1, e.next = 4, (0, u.updateCartByVoucherTemplateId)(s);

              case 4:
                p = e.sent, (d = p.data) && (h = d.cartBatchNo, f = d.dishes, m = d.gifts, g = void 0 === m ? [] : m, 
                T = d.highDiscountGuideTip, I = d.enjoyedHighlightDiscountGuideTip, b = d.preConsultVoucherValue, 
                A = d.hasPreConsultVoucherValue, D = d.preDiscountGuideTip, y = d.preHighlightDiscountGuideTip, 
                v = d.memberPrice, x = d.onlyHasMemberPricePromotion, C = d.specialItemWithRecharge, 
                q = d.totalActualAmount, G = d.totalAmount, _ = d.totalDiscountAmount, c.default.put("orderfood.cart.id", h, {
                    persistent: !0
                }), (0, l.getCartModel)("orderfood")._emitCartList({
                    list: [].concat(r(f), r(g)),
                    info: {
                        highDiscountGuideTip: T,
                        enjoyedHighlightDiscountGuideTip: I,
                        preConsultVoucherValue: b,
                        hasPreConsultVoucherValue: A,
                        preDiscountGuideTip: D,
                        preHighlightDiscountGuideTip: y,
                        isMemberDish: v,
                        onlyHasMemberPricePromotion: x,
                        specialItemWithRecharge: C,
                        totalActualAmount: q,
                        totalAmount: G,
                        totalDiscountAmount: _
                    },
                    unfoldCart: !0
                }), t.$toast.show("优惠商品已添加到购物车", 2e3)), e.next = 13;
                break;

              case 9:
                e.prev = 9, e.t0 = e.catch(1), w = e.t0.errorType, H = e.t0.errorMessage, "FAIL_BIZ_DISHCOUNT_DISH_SOLD_OUT" === w && t.$toast.show(H, 3e3);

              case 13:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 9 ] ]);
    }))).apply(this, arguments);
}

exports.default = p;