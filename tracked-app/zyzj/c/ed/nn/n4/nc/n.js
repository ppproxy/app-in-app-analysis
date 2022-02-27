var e = require("../../../../../@babel/runtime/helpers/interopRequireDefault"), o = require("../../../../../@babel/runtime/helpers/objectSpread2"), n = e(require("../../../../../m/zk/za")), t = require("../../../../../pages/member/common/util/url"), a = require("../../../../../l/wa");

(0, n.default)({
    name: "member-coupon-gify-item",
    properties: {
        couponItem: {
            type: Object,
            value: {}
        }
    },
    data: {
        couponItemCopy: {},
        miniType: (0, a.getMiniType)()
    },
    observers: {
        couponItem: function(e) {
            this._init();
        }
    },
    ready: function() {
        this._init();
    },
    methods: {
        parseSaasToUse: function(e) {
            var o = !1;
            return "SAAS" === (e || {}).couponChannel && (o = e.shopBizAccessOpen || e.shopScanCodeOpen), 
            o;
        },
        _init: function() {
            var e = this.data.couponItem;
            e = o(o({}, e), e.couponTemplate), e = o(o({}, this._parseZero(e)), {}, {
                couponName: this._getCouponName(e.couponName),
                bgImg: e.iconUrl || this._getBgImgByCouponType(e.couponChannel),
                needJumpToUse: e.needJumpToUse || this.parseSaasToUse(e)
            }), this.setData({
                couponItemCopy: e
            });
        },
        _parseZero: function(e) {
            for (var o in e) e[o] && "0" === e[o] && (e[o] = "");
            return e;
        },
        _getBgImgByCouponType: function(e) {
            return {
                ELEME: "https://gw.alicdn.com/tfs/TB1QQ4.XCslXu8jSZFuXXXg7FXa-164-164.png",
                KB: "https://gw.alicdn.com/tfs/TB1GLMGM.z1gK0jSZLeXXb9kVXa-164-164.png",
                SAAS: "https://gw.alicdn.com/tfs/TB1K26MaOpE_u4jSZKbXXbCUVXa-163-163.png"
            }[e || "SAAS"];
        },
        _getCouponName: function(e) {
            return e && e.length > 12 ? e.substring(0, 12) + "..." : e;
        },
        handleItemClick: function() {
            var e = this.data.couponItem, o = e.couponInstanceId, n = (e.couponTemplate || {}).couponChannel;
            this.$root.$navigate("/pages/member/member-coupon-detail/index", {
                couponInstanceId: o,
                couponChannel: n
            });
        },
        crmCouponToUrl: function() {
            var e = this.data.couponItem, o = e.shopBizAccessOpen;
            e.shopScanCodeOpen ? this.$root.$relaunch("/pages/orderfood/index") : o && this.$root.$navigate("/pages/user-paying/index");
        },
        handleBtnClick: function() {
            var e = this.data, o = e.miniType, n = e.couponItemCopy;
            if (this.parseSaasToUse(n)) return this.crmCouponToUrl(), null;
            if ("wx" === o) {
                var a = this.data.couponItem, i = a.shakeCode, p = a.shakeCodeTips, r = a.degradeShakeCodeTips, s = a.couponTemplate, u = a.jumpUrl;
                if ("ELEME" === (s || {}).couponChannel) {
                    var c = u ? "/pages/container/index?q=" + encodeURIComponent(u) : "";
                    wx.navigateToMiniProgram({
                        appId: "wxece3a9a4c82f58c9",
                        path: c,
                        success: function(e) {},
                        fail: function(e) {},
                        complete: function(e) {}
                    });
                } else this.$memberShakeCode = this.$root.getGlobalComponentById("memberShakeCode"), 
                this.$memberShakeCode && this.$memberShakeCode.show({
                    code: i,
                    btnText: p,
                    degradeText: r
                });
            }
            if ("my" === o) {
                var m = this.data.couponItem.jumpUrl;
                m && (0, t.openUrl)({
                    url: m
                });
            }
        }
    }
});