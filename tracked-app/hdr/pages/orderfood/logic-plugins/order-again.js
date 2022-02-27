var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r, t = e(require("../../../@babel/runtime/regenerator")), a = require("../../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../../m/zl/5o")), o = require("../helper/tools"), i = require("../../../l/wa"), d = require("../../../l/wh"), s = require("../../../v/33/n"), u = {
    name: "orderAgain",
    dependencies: [ "baseData" ],
    exec: (r = a(t.default.mark(function e(r, a) {
        var u, c, p, h, g, f, b, v, m, x, w, y, q, I;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (u = r.data, c = u.openStatus, p = u.showMemberGuid, h = this.options.actionValue, 
                g = r.localData.hasLoadOrderAgain, !c || g || !(0, o.isOrderAgain)(this.options) || !h || p) {
                    e.next = 26;
                    break;
                }
                return f = r.getComponentById("loading"), b = r.getComponentById("toast"), e.prev = 6, 
                f.showLoading("努力加载中..."), v = {
                    mealType: n.default.get("orderfood.type"),
                    appType: "wx" === (0, i.getMiniType)() ? "WECHAT" : "ALIPAY",
                    tableId: (0, d.getTableId)(),
                    storeId: (0, d.getShopId)(),
                    cartId: n.default.get("orderfood.cart.id"),
                    addDishKind: "BY_ORDER",
                    orderNo: h
                }, e.next = 11, (0, s.fetchOrderAgain)(v);

              case 11:
                return m = e.sent, f.hideLoading(), x = m.data.data, w = x.changes, y = void 0 === w ? [] : w, 
                q = x.unavailableOrderDishDTOList, I = void 0 === q ? [] : q, 0 !== y.length && b && b.show("商品信息变动，请核对下单", 1500), 
                e.next = 17, l(r, I);

              case 17:
                e.next = 23;
                break;

              case 19:
                e.prev = 19, e.t0 = e.catch(6), f.hideLoading(), b.show(e.t0.errorMessage, 1e3);

              case 23:
                r.localData.hasLoadOrderAgain = !0, e.next = 28;
                break;

              case 26:
                return e.next = 28, a();

              case 28:
              case "end":
                return e.stop();
            }
        }, e, this, [ [ 6, 19 ] ]);
    })), function(e, t) {
        return r.apply(this, arguments);
    }),
    end: function() {}
};

function l(e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return new Promise(function(t) {
        0 !== r.length ? e.getComponentById("orderfoodOrderRepeatModal").confirm({
            goodsList: r,
            ok: function() {
                t();
            }
        }) : t();
    });
}

exports.default = u;