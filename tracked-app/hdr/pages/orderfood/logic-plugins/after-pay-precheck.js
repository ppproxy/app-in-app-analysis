var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, r = e(require("../../../@babel/runtime/regenerator")), a = require("../../../@babel/runtime/helpers/asyncToGenerator"), n = require("../../../l/wh.js"), i = require("../../../l/w9.js"), o = require("../../../m/z8/zj"), c = {
    name: "afterPayPrecheck",
    dependencies: [ "baseData" ],
    exec: (t = a(r.default.mark(function e(t, a) {
        var c, s, d, u, l, p, b, f;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if ("AFTER_PAY" !== (this.preloadData.baseData || {}).paymentMode) {
                    e.next = 22;
                    break;
                }
                if (s = this.options, d = s.actionType, u = s.actionValue, l = s.fromPage, p = !1, 
                "addSubOrderCart" === d && u && (p = !0, t.setData({
                    orderNo: u
                })), b = (0, o.getCartModel)("orderfood"), f = "ENTER_DINNER_PAGE", p ? f = "ADD_DISH_ORDER" : "qrcode" === l && (f = "SCAN"), 
                !(0, n.getTableId)()) {
                    e.next = 21;
                    break;
                }
                return e.prev = 10, e.next = 13, b.checkTable({
                    scanAction: f
                });

              case 13:
                e.sent || (c = "正餐跳转，中断点餐页面逻辑"), e.next = 19;
                break;

              case 17:
                e.prev = 17, e.t0 = e.catch(10);

              case 19:
                e.next = 22;
                break;

              case 21:
                "SCAN" !== f || t.localData.notEmptyRedirected || b.bindCartListChange(function(e) {
                    var r = e.cartData, a = void 0 === r ? {} : r;
                    if (!t.localData.notEmptyRedirected) {
                        var n = a.list, o = void 0 === n ? [] : n;
                        t.localData.notEmptyRedirected = !0, o.length > 0 && t.$redirect(i.ZC_CART_PAGE_PATH);
                    }
                });

              case 22:
                return c && this.abort(c), e.next = 25, a();

              case 25:
              case "end":
                return e.stop();
            }
        }, e, this, [ [ 10, 17 ] ]);
    })), function(e, r) {
        return t.apply(this, arguments);
    }),
    end: function() {}
};

exports.default = c;