var e = require("../../../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../../../@babel/runtime/helpers/objectSpread2"), i = e(require("../../../../m/zk/za")), a = {};

[ {
    name: "quan",
    value: {
        tip: "券",
        color: "#FF4B33"
    }
}, {
    name: "quan2",
    value: {
        tip: "券",
        color: "#FF4B33"
    }
}, {
    name: "zhe",
    value: {
        tip: "折",
        color: "#FF9100"
    }
}, {
    name: "jian",
    value: {
        tip: "减",
        color: "#FF4B33"
    }
}, {
    name: "zeng",
    value: {
        tip: "赠",
        color: "#FF9100"
    }
}, {
    name: "hui",
    value: {
        tip: "惠",
        color: "#FF4B33"
    }
} ].forEach(function(e, t) {
    var i = e.name, n = void 0 === i ? "" : i, o = e.value, r = void 0 === o ? {} : o;
    r.index = t, a[n] = r;
}), (0, i.default)({
    name: "点餐页门店信息详情",
    data: {
        visible: !1,
        handledNoticeInfo: {},
        activityFormatList: [],
        couponCoverageMap: {
            ALL: "全部商品可用",
            PART_AVAILABLE: "指定商品可用",
            PART_UNAVAILABLE: "指定商品可用"
        },
        isFold: !1
    },
    properties: {
        shopBaseInfo: {
            type: Object,
            value: {
                openTimeDTOList: []
            }
        },
        shopActivityDetail: {
            type: Array,
            value: []
        },
        shopNoticeInfo: {
            type: Object,
            value: {}
        },
        shopCouponList: {
            type: Array,
            value: []
        },
        shopCouponCanApply: {
            type: Boolean,
            value: !1
        }
    },
    observers: {
        shopActivityDetail: function(e) {
            this.initshopActivityDetail();
        }
    },
    ready: function() {
        this.setData({
            visible: !0
        });
    },
    methods: {
        close: function() {
            this.setData({
                visible: !1
            });
        },
        handleCancel: function() {
            var e = this;
            this.close(), setTimeout(function() {
                e.triggerEvent("handleCancel");
            }, 300);
        },
        handleShowRulesModal: function() {
            this.$root.handleRulesShow();
        },
        initshopActivityDetail: function() {
            var e = this.data.shopActivityDetail, i = [];
            (void 0 === e ? [] : e).forEach(function(e) {
                var t = function(e) {
                    switch (!0) {
                      case "FULL_CAPACITY" === e.benefitConditionType && "DISCOUNT" === e.benefitType:
                        return "zhe";

                      case "FULL_CAPACITY" === e.benefitConditionType && "REDUCE" === e.benefitType:
                        return "jian";

                      case "FULL_AMOUNT" === e.benefitConditionType && "GIFT" === e.benefitType:
                        return "zeng";

                      case "NEXT" === e.benefitConditionType:
                      case "NEXT_COMBINE" === e.benefitConditionType:
                        return "hui";

                      case "PAYMENT_AMOUNT" === e.activityType && "PLAY" === e.activityCategory:
                        return "quan";

                      case "COLLECTION_POINT" === e.activityType && "PLAY" === e.activityCategory:
                        return "quan2";

                      default:
                        return "unkown";
                    }
                }(e);
                if ("unkown" !== t) {
                    var a = i.find(function(e) {
                        return e.type === t;
                    });
                    a || (a = {
                        type: t,
                        all: [],
                        part: [],
                        allNext: [],
                        allCoverage: [],
                        partNext: [],
                        partCoverage: [],
                        currentActivityRule: [],
                        activityRuleList: [],
                        activityCategory: [],
                        activityType: []
                    }, i.push(a)), "ITEM_COVERAGE_ALL" === e.itemCoverage ? "NEXT" === e.benefitConditionType ? a.allNext.push(e.showText) : "NEXT_COMBINE" === e.benefitConditionType ? a.allCoverage.push(e.showText) : a.all.push(e.showText) : "NEXT" === e.benefitConditionType ? a.partNext.push(e.showText) : "NEXT_COMBINE" === e.benefitConditionType ? a.partCoverage.push(e.showText) : a.part.push(e.showText), 
                    "PLAY" !== e.activityCategory || "PAYMENT_AMOUNT" !== e.activityType && "COLLECTION_POINT" !== e.activityType || (a.activityRuleList.push(e.activityRuleList), 
                    a.currentActivityRule.push(e.currentActivityRule), a.activityCategory.push(e.activityCategory), 
                    a.activityType.push(e.activityType));
                }
            }), (i = (i = i.filter(function(e) {
                return e.all.length + e.part.length + e.allNext.length + e.allCoverage.length + e.partCoverage.length + e.partNext.length;
            })).map(function(e) {
                return t(t(t({}, a[e.type]), e), {}, {
                    all: e.all.join("、"),
                    allNext: e.allNext.join("、"),
                    allCoverage: e.allCoverage.join("、"),
                    part: e.part.join("、"),
                    partNext: e.partNext.join("、"),
                    partCoverage: e.partCoverage.join("、")
                });
            })).sort(function(e, t) {
                return e.index - t.index;
            }), this.setData({
                activityFormatList: i
            });
        },
        handleToCouponCard: function() {
            this.$root.$navigate("/pages/member/member-coupon-list/index");
        },
        handleMemberJoinSuccess: function() {
            this.triggerEvent("handleOneKeyGetCoupon", {});
        },
        handleMemberJoinFail: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.$toast && this.$toast.show(e.errorMessage || "入会失败，请重试");
        },
        forbidMove: function() {
            return !1;
        },
        handleConsumptionDetailFold: function() {
            var e = this.data.isFold;
            this.setData({
                isFold: !e
            });
        }
    }
});