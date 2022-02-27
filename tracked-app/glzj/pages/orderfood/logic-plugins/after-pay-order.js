var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r, t = e(require("../../../@babel/runtime/regenerator")), a = require("../../../@babel/runtime/helpers/asyncToGenerator"), n = require("../../../v/33/n"), o = require("../../../l/wh"), d = {
    name: "afterPayOrder",
    dependencies: [ "baseData" ],
    exec: (r = a(t.default.mark(function e(r, a) {
        var d, i, s, u, c, p, l, f, b;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (d = (0, o.getTableId)() || "", "AFTER_PAY" !== (this.preloadData.baseData || {}).paymentMode || !d) {
                    e.next = 14;
                    break;
                }
                return e.prev = 4, r.getTableInfo(), e.next = 8, (0, n.fetchOrderByTable)();

              case 8:
                (i = e.sent).data && (s = i.data.data, c = (u = (void 0 === s ? "" : s) || {}).orderedTips, 
                p = void 0 === c ? "" : c, l = u.orderInfo, f = (void 0 === l ? {} : l).orderNo, 
                (b = void 0 === f ? "" : f) && r.setData({
                    showOrderedIconOrderNo: b,
                    orderNo: b,
                    orderedTips: p
                })), e.next = 14;
                break;

              case 12:
                e.prev = 12, e.t0 = e.catch(4);

              case 14:
                return e.next = 16, a();

              case 16:
              case "end":
                return e.stop();
            }
        }, e, this, [ [ 4, 12 ] ]);
    })), function(e, t) {
        return r.apply(this, arguments);
    }),
    end: function() {}
};

exports.default = d;