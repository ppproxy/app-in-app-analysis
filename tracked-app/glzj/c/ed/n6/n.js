var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), n = e(require("../../../@babel/runtime/regenerator")), a = require("../../../@babel/runtime/helpers/asyncToGenerator"), t = e(require("../../../m/zk/za")), o = require("../../../v/3s/3f"), r = require("../../../l/wh"), i = require("../../../l/wa"), s = require("../../../pages/member/common/util/common"), u = (0, 
i.getMiniType)();

(0, t.default)({
    name: "member-send-coupon",
    data: {
        sign: "",
        sendCouponMerchant: "",
        wxSendCouponParams: [],
        alipaySendCouponParams: [],
        whiteListAppId: ""
    },
    localData: {
        init: !0
    },
    properties: {
        auto: {
            type: Boolean,
            value: !1
        },
        voucherIdList: {
            type: Array,
            value: []
        },
        modalId: {
            type: String,
            value: ""
        }
    },
    components: {
        toast: "toast",
        loading: "loading"
    },
    ready: function() {
        this.localData.init = !1, this.$toast = this.getComponentById("toast"), this.$loading = this.getComponentById("loading"), 
        this.handleQueryMerchantCouponInfo(this.data.voucherIdList);
    },
    observers: {
        voucherIdList: function(e) {
            this.localData.init || this.handleQueryMerchantCouponInfo(e);
        }
    },
    methods: {
        handleQueryMerchantCouponInfo: function(e) {
            var t = this;
            return a(n.default.mark(function a() {
                var i, d, p;
                return n.default.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (n.prev = 0, e.length) {
                            n.next = 3;
                            break;
                        }
                        return n.abrupt("return");

                      case 3:
                        return t.$loading && t.$loading.showLoading("正在加载中..."), n.next = 6, (0, o.queryMerchantCouponInfo)({
                            voucherIdList: JSON.stringify(e),
                            appType: (0, s.getAppType)(),
                            storeId: (0, r.getShopId)()
                        });

                      case 6:
                        if (i = n.sent, d = i.data, p = void 0 === d ? {} : d, t.$loading && t.$loading.hideLoading(), 
                        p.needSync) {
                            n.next = 12;
                            break;
                        }
                        return n.abrupt("return");

                      case 12:
                        "wx" === u ? p.wxSendCouponParams = p.sendCouponParams || [] : "my" === u && (p.alipaySendCouponParams = p.sendAlipayCouponParamList || []), 
                        t.setData({
                            sign: p.sign,
                            sendCouponMerchant: p.sendCouponMerchant,
                            wxSendCouponParams: p.wxSendCouponParams,
                            alipaySendCouponParams: p.alipaySendCouponParams,
                            whiteListAppId: p.whiteListAppId
                        }), n.next = 20;
                        break;

                      case 16:
                        n.prev = 16, n.t0 = n.catch(0), t.$loading && t.$loading.hideLoading(), console.error("<<<<<<<<< queryMerchantCouponInfo err", n.t0);

                      case 20:
                      case "end":
                        return n.stop();
                    }
                }, a, null, [ [ 0, 16 ] ]);
            }))();
        },
        handleSendCoupon: function() {
            this.triggerEvent("handleSendCoupon");
        },
        handleSendProccess: function(e) {
            this.triggerEvent("handleSendProccess", e.detail);
        }
    }
});