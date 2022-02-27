var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r, t, a = e(require("../../../@babel/runtime/regenerator")), n = require("../../../@babel/runtime/helpers/asyncToGenerator"), u = require("../../../l/wh.js"), s = e(require("../../../m/z3/z6")), o = e(require("../../../m/zt")), i = {
    name: "beforePayPrecheck",
    dependencies: [ "baseData" ],
    preload: (t = n(a.default.mark(function e() {
        var r, t, n, o;
        return a.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (t = (0, u.getShopScaneFlag)(), n = (0, u.getShopId)(), o = !!t && !!n) {
                    e.next = 7;
                    break;
                }
                return e.next = 6, s.default.isGPSOpenAndGeoAuth();

              case 6:
                r = e.sent;

              case 7:
                return e.abrupt("return", {
                    isGPSOpenAndGeoAuth: r,
                    hasTrustShopId: o
                });

              case 8:
              case "end":
                return e.stop();
            }
        }, e);
    })), function() {
        return t.apply(this, arguments);
    }),
    exec: (r = n(a.default.mark(function e(r, t) {
        var n, u, i;
        return a.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return "AFTER_PAY" === (this.preloadData.baseData || {}).paymentMode || (n = this.preloadData.beforePayPrecheck, 
                u = n.isGPSOpenAndGeoAuth, n.hasTrustShopId || u || (i = "GEO_UNAUTHORIZED", s.default.isGeoSysAuthFail() && (i = "GEO_SYS_AUTH_FAILD"), 
                r.$relaunch("/pages/page-result/index", {
                    fromPage: o.default.MINI_PATH.ORDER_FOOD_PATH,
                    statusCode: i
                }, !0), this.abort("快餐前置检查：未开启GPS授权，跳转到授权提示页面"))), e.next = 5, t();

              case 5:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function(e, t) {
        return r.apply(this, arguments);
    }),
    end: function() {}
};

exports.default = i;