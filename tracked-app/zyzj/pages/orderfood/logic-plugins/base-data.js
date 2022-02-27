var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, r, a = e(require("../../../@babel/runtime/regenerator")), o = require("../../../@babel/runtime/helpers/asyncToGenerator"), n = require("../../../l/wh.js"), s = require("../../../v/33/n"), i = e(require("../../../m/zl/5o")), u = require("../models/shop-info"), p = require("../common/orderfood-error"), l = {
    name: "baseData",
    preload: (r = o(a.default.mark(function e(t) {
        var r, o;
        return a.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, (0, s.storeBaseConfigPreload)();

              case 2:
                return r = e.sent, o = "AFTER_PAY" === r.paymentMode, i.default.put("orderfood.type", o ? "DINNER" : "FAST_FOOD", {
                    persistent: !0
                }), (0, u.createShopInfoModel)().init(r), t.getActivityList(), t.getShopActiveCoupon(), 
                e.abrupt("return", r);

              case 10:
              case "end":
                return e.stop();
            }
        }, e);
    })), function(e) {
        return r.apply(this, arguments);
    }),
    exec: (t = o(a.default.mark(function e(t, r) {
        var o, s, i, u, l, c, d, f, h;
        return a.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return setTimeout(function() {
                    var e = (0, n.getSceneType)().sceneType, r = t.$getLogger();
                    r.setPageParams({
                        paymentMode: e
                    }), r.onShow(t.spmInfo);
                }, 0), this.preloadError.baseData && (o = this.preloadError.baseData.response.data), 
                o && !this.preloadData.baseData && p.pageErrorShow.call(this, t, o.extInfo), s = this.preloadData.baseData || {}, 
                i = "AFTER_PAY" === s.paymentMode, u = (0, n.getShopInfo)(), l = u.distanceDesc, 
                c = void 0 === l ? "" : l, t.setData({
                    isDinner: i,
                    memberFlag: 1 === s.customerType,
                    distanceDesc: c
                }), d = s.openStatus, f = s.manualClose, h = !d || f, (0, n.setGlobalShopState)(h ? "CLOSED" : "OPEN"), 
                e.next = 13, t.setShopDetail(s);

              case 13:
                return e.next = 15, r();

              case 15:
                t.getActivityDetail(), i || t.getMarketingGuideInfo(), t.queryMemberCouponNum();

              case 18:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function(e, r) {
        return t.apply(this, arguments);
    }),
    end: function() {
        (0, u.destoryShopInfoModel)();
    }
};

exports.default = l;