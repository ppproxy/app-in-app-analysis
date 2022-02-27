var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, r, a = e(require("../../../@babel/runtime/regenerator")), n = require("../../../@babel/runtime/helpers/asyncToGenerator"), i = require("../../../v/ci/36"), s = e(require("../../../m/zt")), o = e(require("../../../m/zl/5o")), u = {
    name: "distanceReminder",
    dependencies: [],
    preload: (r = n(a.default.mark(function e() {
        var t, r, n, s, u;
        return a.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = this.options || {}, r = t.couponTemplateId, n = t.couponBizTag, r && ("couponList" === n && o.default.put("shop.list.last.biz", "VOUCHER_TEMPLATE"), 
                "couponPackage" === n && o.default.put("shop.list.last.biz", "VOUCHER_BAG")), e.next = 6, 
                (0, i.getSmartStores)({
                    fromBizId: r || "",
                    bizCode: "ORDER_PAGE"
                });

              case 6:
                return s = e.sent, u = s.data || {}, e.abrupt("return", {
                    nearbyShopsInfo: u
                });

              case 9:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function() {
        return r.apply(this, arguments);
    }),
    exec: (t = n(a.default.mark(function e(t, r) {
        var n, i, u, l, c, p, d, b, f;
        return a.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                n = this.preloadData.distanceReminder || {}, i = n.nearbyShopsInfo, u = "PASS", 
                l = "", c = "请确认下单门店", p = i && i.total || 1, d = 1 === p, b = i && i.list || [], 
                i.action && (u = i.action.actionCode || "PASS", l = i.action.actionType || "", c = i.action.actionTitle || "请确认下单门店"), 
                o.default.remove("shop.list.last.biz"), f = t.getComponentById("shopConfirmModal"), 
                e.t0 = u, e.next = "POPUP" === e.t0 ? 14 : "OPEN_PAGE" === e.t0 ? 24 : "PASS" === e.t0 ? 34 : 37;
                break;

              case 14:
                if ("CLOSE_MULTI_STORES" !== l) {
                    e.next = 19;
                    break;
                }
                return e.next = 17, f.show({
                    list: b,
                    shop: b[0] || {},
                    title: "附近多家门店，请确认",
                    primaryBtnText: "开始点餐",
                    singleStore: d,
                    needCallback: !0
                });

              case 17:
                e.next = 21;
                break;

              case 19:
                return e.next = 21, f.show({
                    list: [ b[0] ],
                    shop: b[0] || {},
                    title: c,
                    primaryBtnText: "选择该门店",
                    singleStore: d,
                    needCallback: !1
                });

              case 21:
                return e.next = 23, r();

              case 23:
                return e.abrupt("break", 40);

              case 24:
                if ("TOO_FAR" !== l) {
                    e.next = 29;
                    break;
                }
                t.$jumpDelay({
                    method: "$redirect",
                    url: "/pages/store-list/index",
                    params: {
                        origin: "DINNER_PAGE"
                    }
                }, 0), this.abort("距离大于".concat(s.default.DEF_NEARBY_DISTANCE, "KM，跳门店列表")), e.next = 31;
                break;

              case 29:
                return e.next = 31, f.show({
                    list: b,
                    shop: b[0] || {},
                    title: c,
                    primaryBtnText: "选择该门店",
                    singleStore: d,
                    needCallback: !1
                });

              case 31:
                return e.next = 33, r();

              case 33:
                return e.abrupt("break", 40);

              case 34:
                return e.next = 36, r();

              case 36:
                return e.abrupt("break", 40);

              case 37:
                return e.next = 39, f.show({
                    list: b,
                    shop: b[0] || {},
                    title: c,
                    primaryBtnText: "选择该门店",
                    singleStore: d,
                    needCallback: !1
                });

              case 39:
                return e.abrupt("break", 40);

              case 40:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function(e, r) {
        return t.apply(this, arguments);
    }),
    end: function() {}
};

exports.default = u;