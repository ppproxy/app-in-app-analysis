var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/regenerator")), n = require("../../../@babel/runtime/helpers/objectSpread2"), a = require("../../../@babel/runtime/helpers/asyncToGenerator"), r = e(require("../../../m/zk/za")), i = require("../../../v/3s/3f"), o = require("../../../l/wh"), u = require("../../../l/wa"), d = require("../../../pages/member/common/util/common");

(0, r.default)({
    name: "member-send-coupon-activity",
    data: {
        miniType: (0, u.getMiniType)(),
        needSync: !1,
        sign: "",
        sendCouponMerchant: "",
        wxSendCouponParams: [],
        alipaySendCouponParams: []
    },
    localData: {
        init: !0
    },
    properties: {
        auto: {
            type: Boolean,
            value: !1
        },
        activityTypeId: {
            type: String,
            value: ""
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
        this.handleQueryMerchantCouponInfo(this.data.activityTypeId);
    },
    observers: {
        activityTypeId: function(e) {
            this.localData.init || this.handleQueryMerchantCouponInfo(e);
        }
    },
    methods: {
        handleQueryMerchantCouponInfo: function(e) {
            var r = this;
            return a(t.default.mark(function a() {
                var u, p, s;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (t.prev = 0, e && "wx" === r.data.miniType) {
                            t.next = 3;
                            break;
                        }
                        return t.abrupt("return");

                      case 3:
                        return r.$loading && r.$loading.showLoading("正在加载中..."), t.next = 6, (0, i.queryVoucherNeedSyncByActivityType)({
                            appType: (0, d.getAppType)(),
                            storeId: (0, o.getShopId)(),
                            activityTypeId: e
                        });

                      case 6:
                        if (u = t.sent, p = u.data, s = void 0 === p ? {} : p, r.$loading && r.$loading.hideLoading(), 
                        s.needSync) {
                            t.next = 12;
                            break;
                        }
                        return t.abrupt("return");

                      case 12:
                        r.setData(n({}, s)), t.next = 19;
                        break;

                      case 15:
                        t.prev = 15, t.t0 = t.catch(0), r.$loading && r.$loading.hideLoading(), console.error("<<<<<<<<< queryMerchantCouponInfo err", t.t0);

                      case 19:
                      case "end":
                        return t.stop();
                    }
                }, a, null, [ [ 0, 15 ] ]);
            }))();
        },
        handleSendCoupon: function() {
            this.triggerEvent("handleSendCoupon");
        }
    }
});