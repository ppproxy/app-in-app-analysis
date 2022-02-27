Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.jumpElemePromotionPage = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = (0, 
    i.getMiniType)(), t = e.promotionType, r = e.targetApp, o = e.targetUrl, n = e.businessId, p = e.businessType;
    if ("ONE_VOUCHER" === t && e.oneVoucherInfo && e.oneVoucherInfo.promotionId) {
        var s = e.oneVoucherInfo.promotionId;
        return void this.$root.$navigate("/pages/member/member-coupon-one-click/index?activityId=".concat(s));
    }
    if ("MEMBER_ASSISTANCE" === t) return void this.$root.$navigate("/pages/member/member-assistance/index", {
        showBack: !0
    });
    if ("COUPON_BAG_ACTIVITY" === t) return void this.$root.$navigate("/pages/member/member-coupon-bag/index", {
        showBack: !0
    });
    if (("PRIZE_WHEEL" === t || "ELEME_TAKEOUT" === t) && r && o && "my" === a) return void (/^alipays:\/\/.+$/.test(o) ? this.$root.$mylink(o) : this.$root.$tomin("pages/webview-redirect/webview-redirect?url=".concat(encodeURIComponent(o)), {
        appId: r
    }));
    "ALIPAY_JOIN_GROUP" === t && n && p && "my" === a && my && my.ap && my.ap.navigateToAlipayPage && my.ap.navigateToAlipayPage({
        appCode: "bcGroupChat",
        appParams: {
            url: encodeURIComponent("/www/bc-join.html?businessId=".concat(n, "&businessType=").concat(p))
        }
    });
}, exports.jumpInnerAppPage = function(i) {
    var o = this.$root, n = i.pagePath, p = t[n];
    if ("INNER_APP_TAKE_OUT" === n && i.outerUrl) return void r.call(this, i.outerUrl || "");
    if ("INNER_APP_MY_MEMBER_MALL" === n && !(0, a.getMemberFlag)()) return void o.$navigate(t.INNER_APP_USER_CENTER.path, e({}, t.INNER_APP_USER_CENTER.params));
    if (!p) return;
    var s = p.path, m = p.isTabPage, g = p.params, c = void 0 === g ? {} : g;
    if (s === o.route) return;
    var P = e({}, c);
    if ("INNER_APP_MY_MEMBER_MALL" === n) {
        var d = getCurrentPages(), u = d[d.length - 1].route;
        P = e(e({}, P), {}, {
            from: u
        });
    }
    m ? o.$relaunch("/".concat(s), P) : o.$navigate("/".concat(s), P);
}, exports.jumpMiniAppPage = function(e) {
    var a = "";
    switch ((0, i.getMiniType)()) {
      case "wx":
        a = e.wxAppId;
        break;

      case "my":
        a = e.myAppId;
    }
    "string" != typeof a && (a += "");
    if (0 === a.length) return;
    this.$root.$tomin({
        appId: a
    });
}, exports.jumpMiniDishPage = function(e) {
    var a, i = e.dish || e || {};
    a = void 0 === i.jumpUrl && i.params && i.params.id ? "pages/orderfood/index?actionType=openDishDetail&actionValue=".concat(i.params.id) : i.jumpUrl || "";
    if (!a) return;
    this.$root.$relaunch("/".concat(a));
}, exports.jumpMiniGoodsPage = function(e) {
    var a = (0, i.getMiniType)(), t = (e.goods || {}).actionUrl || "";
    if (0 === t.length) return;
    "wx" === a && this.$root.$tomin(t, {
        appId: "wx7d26a9e29d2a69c7"
    });
    "my" === a && this.$root.$mylink(t);
}, exports.jumpMiniTakeoutApp = r, exports.jumpWxArticlePage = function(e) {
    "wx" === (0, i.getMiniType)() && e.wxUrl && e.wxUrl.length > 0 && this.$root.$navigate("/pages/webview/index?pageUrl=" + encodeURIComponent(e.wxUrl));
};

var e = require("../@babel/runtime/helpers/objectSpread2"), a = require("./wh"), i = require("./wa"), t = {
    INNER_APP_CHECK: {
        path: "pages/user-paying/index",
        isTabPage: !1
    },
    INNER_APP_MAKE_ORDER: {
        path: "pages/orderfood/index",
        isTabPage: !0
    },
    INNER_APP_MALL: {
        path: "pages/shopmall/index",
        isTabPage: !0
    },
    INNER_APP_ME: {
        path: "pages/member/member-my/index",
        isTabPage: !0
    },
    INNER_APP_MY_ORDER: {
        path: "pages/orderlist/index",
        isTabPage: !0
    },
    INNER_APP_STORE_LIST: {
        path: "pages/store-list/index",
        isTabPage: !1
    },
    INNER_APP_USER_CENTER: {
        path: "pages/member/member-index/index",
        params: {
            showBack: !0
        },
        isTabPage: !1
    },
    INNER_APP_MY_COUPON: {
        path: "pages/member/member-coupon-list/index",
        isTabPage: !1
    },
    INNER_APP_MY_MEMBER_MALL: {
        path: "pages/member/member-point/member-point-mall/index",
        isTabPage: !1
    },
    INNER_APP_EXCHARGE: {
        path: "pages/recharge/recharge-payment/index",
        isTabPage: !1
    }
};

function r(e) {
    var a = (0, i.getMiniType)();
    "wx" === a && this.$root.$tomin(e, {
        appId: "wxece3a9a4c82f58c9"
    }), "my" === a && this.$root.$mylink(e);
}