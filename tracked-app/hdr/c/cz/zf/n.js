var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getDishDetail = function(e) {
    return n.apply(this, arguments);
};

var r = e(require("../../../@babel/runtime/regenerator")), t = require("../../../@babel/runtime/helpers/asyncToGenerator"), a = e(require("../../../m/zl/5h")), u = require("../../../l/wh");

function n() {
    return (n = t(r.default.mark(function e(t) {
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, a.default.request({
                    api: "mtop.alsc.pos.restaurant.dish.queryDishDetail",
                    param: Object.assign({
                        storeId: (0, u.getShopId)(),
                        dinnerSupportStoreMemberPay: !0
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