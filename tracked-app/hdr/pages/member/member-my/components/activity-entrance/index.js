var t, a = require("../../../../../@babel/runtime/helpers/interopRequireDefault"), i = require("../../../../../@babel/runtime/helpers/defineProperty"), e = a(require("../../../../../m/zk/za")), o = require("../../../common/util/auth"), n = "ASSISTANCE", c = "COLLECT_POINT", s = "COUPONBAG";

(0, e.default)({
    name: "activity-entrance",
    data: {
        activities: [],
        imgMap: (t = {}, i(t, n, "https://gw.alicdn.com/imgextra/i2/O1CN01JTc0xn1ijEPVgVDQb_!!6000000004448-2-tps-96-96.png"), 
        i(t, c, "https://gw.alicdn.com/imgextra/i3/O1CN01S5BcCI1FcFWOKts0Y_!!6000000000507-2-tps-96-96.png"), 
        i(t, s, "https://gw.alicdn.com/imgextra/i4/O1CN01ZjQfhh26sR9IKAVRE_!!6000000007717-2-tps-96-96.png"), 
        t)
    },
    localData: {
        options: Object.create(null)
    },
    components: {
        toast: "toast",
        authPhoneModal: "auth-phone-modal"
    },
    logProps: {
        $$expElement: [ ".component-activity-entrance" ]
    },
    ready: function() {
        this.$toast = this.getComponentById("toast");
    },
    methods: {
        init: function(t) {
            return this.localData.options = t, this;
        },
        render: function() {
            var t = this, a = this.localData.options.data, i = a.assistTaskEnable, e = a.assistTaskResult, o = a.collectPointEnable, r = a.collectPointResult, l = a.couponBagEnable, d = a.couponBagResult, g = [];
            if (!1 !== l) {
                var p = d || {}, u = p.available, m = p.activityId, h = p.itemId, v = p.packageName, I = p.price, y = p.couponList, b = void 0 === y ? [] : y, T = "".concat(I / 100, "元限时抢");
                u && g.push({
                    type: s,
                    iconUrl: "https://gw.alicdn.com/imgextra/i2/O1CN01NFR3Oi1gnh0ICIgaz_!!6000000004187-2-tps-80-80.png",
                    title: "".concat(v, "(含").concat(b.length, "张)"),
                    tips: T,
                    activityId: m,
                    itemId: h
                }), setTimeout(function() {
                    t.$root.$logExpo(".quanbao", {
                        itemId: h || ""
                    });
                }, 300);
            }
            if (i) {
                var C = e.activityId, k = e.taskId, f = e.hasOpenedTask, $ = void 0 === f ? 1 : f;
                C && g.push({
                    type: n,
                    iconUrl: "https://img.alicdn.com/imgextra/i4/O1CN01cdwDiI1aoiBuLXQoD_!!6000000003377-2-tps-80-80.png",
                    title: "助力领券",
                    tips: "分享得好礼",
                    hasOpenedTask: $,
                    activityId: C,
                    taskId: k
                });
            }
            if (o) {
                var P = r.voucherTotalValue, O = r.activityId, x = r.taskId, N = "".concat(Number(P) ? P + "元" : "专属", "优惠券限时抢");
                O && g.push({
                    type: c,
                    iconUrl: "https://gw.alicdn.com/imgextra/i2/O1CN01NFR3Oi1gnh0ICIgaz_!!6000000004187-2-tps-80-80.png",
                    title: "集点享好礼",
                    tips: N,
                    activityId: O,
                    taskId: x,
                    logkey: ".grzxbg",
                    spmc: "c1622465095284",
                    spmd: "d1622465095284"
                });
            }
            this.setData({
                activities: g
            }, function() {
                t.$root.$logReinit(t);
            });
        },
        handleTap: function(t) {
            var a = (t.currentTarget.dataset || {}).type;
            a === n ? this.goToAssistancePage(t) : a === c ? this.goToCollectPointPage(t) : a === s && this.goToCouponPage(t);
        },
        goToAssistancePage: function(t) {
            var a = (t.currentTarget.dataset || {}).taskid, i = void 0 === a ? "" : a;
            this.$root.$navigate("/pages/member/member-assistance/index?showBack=true&taskId=".concat(i));
        },
        goToCollectPointPage: function(t) {
            var a = this, i = (t.currentTarget.dataset || {}).activityid, e = void 0 === i ? "" : i;
            this.$root.$logClick(".grzxy", {
                action: "个人中心页-集点活动-点击",
                activityId: e
            }), (0, o.getPhoneAuth)(this, function() {
                var i = t.currentTarget.dataset || {}, e = i.taskid, o = void 0 === e ? "" : e, n = i.activityid, c = "/pages/member/member-collect-point/index?activityId=".concat(void 0 === n ? "" : n);
                o && (c += "&taskId=".concat(o)), a.$root.$navigate(c);
            }, function() {
                a.$toast.show("未获得您的联系方式，将无法有效的为您提供服务");
            });
        },
        goToCouponPage: function() {
            var t = this.localData.options.data.couponBagResult;
            this.$root.$logClick(".quanbaoclick", {
                itemId: t.itemId || ""
            }), this.$root.$navigate("/pages/member/member-coupon-bag/index?id=".concat(t.itemId, "&activityId=").concat(t.activityId));
        }
    }
});