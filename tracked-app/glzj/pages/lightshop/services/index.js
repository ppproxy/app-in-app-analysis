var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.queryGoodsInfos = function(e) {
    return n.apply(this, arguments);
};

var r = e(require("../../../@babel/runtime/regenerator")), t = require("../../../@babel/runtime/helpers/asyncToGenerator"), a = e(require("../../../m/zl/5h"));

function n() {
    return (n = t(r.default.mark(function e(t) {
        var n, u;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = {
                    itemId: t.itemId,
                    cityId: t.cityId,
                    storeId: t.storeId,
                    appType: "wx" === t.appType ? "WECHAT" : "ALIPAY"
                }, e.next = 3, a.default.request({
                    api: "mtop.alsc.saas.mall.merchantitem.getByItemId",
                    param: n
                }).catch(function(e) {
                    console.error(e);
                });

              case 3:
                return u = e.sent, e.abrupt("return", u.data);

              case 5:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}