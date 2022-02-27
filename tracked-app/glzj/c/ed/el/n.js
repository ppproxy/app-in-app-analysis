var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../../@babel/runtime/regenerator")), a = require("../../../@babel/runtime/helpers/asyncToGenerator"), o = t(require("../../../m/zk/za")), n = require("../../../l/wh"), i = require("../../../pages/member/common/util/auth"), r = require("../../../pages/member/common/util/common"), l = (t(require("../../../m/5y")), 
require("../../../v/3s/3f")), c = (0, r.getAppType)();

(0, o.default)({
    name: "collection-point-activity-component",
    data: {
        show: !1,
        currentPoint: "",
        chargeLimit: "",
        voucherTotalValue: "",
        points: [],
        collectIconUrlGray: "",
        lineItemNum: "",
        activityId: "",
        styles: {
            three: "eo3",
            four: "eo6",
            five: "eo2",
            six: "eos"
        }
    },
    localData: {
        taskId: "",
        taskTypeId: "47",
        activityId: "",
        intervalStart: 0,
        intervalTimeout: !1,
        intervalFinished: !1,
        intervalStock: [],
        queryRewardStateInterval: 0
    },
    components: {
        toast: "toast",
        loading: "loading",
        authPhoneModal: "auth-phone-modal"
    },
    logProps: {
        $$expElement: [ ".component-member-collect-point" ]
    },
    ready: function() {
        this.setData({
            themecolor: this.data.themecolor || (0, n.getThemeColor)() || ""
        }), this.$toast = this.getComponentById("toast"), this.$loading = this.getComponentById("loading");
    },
    detached: function() {
        this.clearInterval();
    },
    methods: {
        init: function(t) {
            return this.localData.options = t, this;
        },
        render: function() {
            var t = this.localData.options.data.collectionPointActivity;
            this.renderComp(t);
        },
        renderComp: function(t) {
            var e = this, a = t.collectIconUrlGray, o = t.currentPoint, n = void 0 === o ? "" : o, i = t.chargeLimit, r = void 0 === i ? "" : i, l = t.voucherTotalValue, c = t.activityId, s = t.taskId, d = t.status, u = t.title, h = void 0 === u ? "集点享好礼" : u, v = Number(n), p = Number(r), g = this.adaptorPoints(v, p), I = this.getLineItemNum(p);
            this.localData.activityId = c, this.localData.taskId = s, this.setData({
                activityId: c,
                title: h,
                points: g,
                lineItemNum: I,
                collectIconUrlGray: a,
                voucherTotalValue: Number(l),
                currentPoint: v,
                chargeLimit: p,
                show: "ACTIVITY_ENABLED" === d && c
            }, function() {
                e.$root.$logReinit(e);
            });
        },
        queryCollectPoint: function() {
            var t = this;
            return a(e.default.mark(function a() {
                var o, i, r, s, d, u, h, v;
                return e.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, t.$loading && t.$loading.showLoading("加载中..."), o = t.localData, 
                        i = o.activityId, r = o.taskId, s = o.taskTypeId, d = {
                            appType: c,
                            activityId: i,
                            taskTypeId: s,
                            sourceFrom: "CSHOP_INDEX_REQUEST",
                            storeId: (0, n.getShopId)()
                        }, r && (d.taskId = r), e.next = 7, (0, l.queryCollectPoint)(d);

                      case 7:
                        u = e.sent, h = u.data, v = void 0 === h ? {} : h, t.$loading && t.$loading.hideLoading(), 
                        t.renderComp(v), e.next = 17;
                        break;

                      case 14:
                        e.prev = 14, e.t0 = e.catch(0), console.error("<<<<<<<< 查询活动 err", e.t0);

                      case 17:
                        return e.prev = 17, t.$loading && t.$loading.hideLoading(), e.finish(17);

                      case 20:
                      case "end":
                        return e.stop();
                    }
                }, a, null, [ [ 0, 14, 17, 20 ] ]);
            }))();
        },
        handleApplyVoucher: function() {
            var t = this;
            (0, i.getPhoneAuth)(this, function() {
                t.applyVoucher();
            }, this.handlePhoneAuthFail.bind(this));
        },
        applyVoucher: function() {
            var t = this;
            return a(e.default.mark(function a() {
                var o, n, i, r, s, d, u;
                return e.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return o = t.localData, n = o.activityId, i = o.taskId, r = o.taskTypeId, s = {
                            appType: c,
                            activityId: n,
                            taskTypeId: r,
                            taskId: i,
                            sourceFrom: "CSHOP_INDEX_REQUEST"
                        }, e.prev = 2, t.$loading && t.$loading.showLoading("领取中..."), e.next = 6, (0, l.startTask)(s);

                      case 6:
                        d = e.sent, u = d.data, (u = void 0 === u ? {} : u).result ? (t.localData.intervalStart = Date.now(), 
                        t.localData.intervalFinished = !1, t.localData.intervalTimeout = !1, t.localData.intervalStock = [], 
                        t.handleQueryRewardState(), t.localData.queryRewardStateInterval = setInterval(function() {
                            Date.now() - t.localData.intervalStart < 3e3 ? t.handleQueryRewardState() : (t.localData.intervalTimeout = !0, 
                            t.clearInterval(), t.localData.intervalStock.length || (t.$loading && t.$loading.hideLoading(), 
                            t.$toast && t.$toast.show("活动太火爆啦，请再领取试试")));
                        }, 1e3)) : (t.$loading && t.$loading.hideLoading(), t.$toast && t.$toast.show("活动太火爆啦，请再领取试试")), 
                        e.next = 19;
                        break;

                      case 13:
                        e.prev = 13, e.t0 = e.catch(2), console.error("catch,e:::", e.t0), t.$loading && t.$loading.hideLoading(), 
                        "任务不是完成态了" === e.t0.message ? t.$toast && t.$toast.show("已经领过券啦") : t.$toast && t.$toast.show("活动太火爆啦，请再领取试试"), 
                        setTimeout(function() {
                            t.localData.taskId = "", t.queryCollectPoint();
                        }, 1e3);

                      case 19:
                      case "end":
                        return e.stop();
                    }
                }, a, null, [ [ 2, 13 ] ]);
            }))();
        },
        handleQueryRewardState: function() {
            var t = this;
            return a(e.default.mark(function a() {
                var o, n, i, r, s, d, u, h, v, p;
                return e.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return o = t.localData, n = o.activityId, i = o.taskId, r = o.taskTypeId, s = o.intervalStock, 
                        d = {
                            appType: c,
                            activityId: n,
                            taskTypeId: r,
                            taskId: i
                        }, s.push(!0), e.prev = 3, e.next = 6, (0, l.queryRewardState)(d);

                      case 6:
                        if (u = e.sent, h = u.data, v = (h = void 0 === h ? {} : h).code, p = void 0 === v ? "" : v, 
                        !t.localData.intervalFinished) {
                            e.next = 12;
                            break;
                        }
                        return e.abrupt("return");

                      case 12:
                        s.pop(), "FINISHED" === p ? (t.localData.intervalFinished = !0, t.clearInterval(), 
                        t.$loading && t.$loading.hideLoading(), t.$toast && t.$toast.show("领券成功"), setTimeout(function() {
                            t.localData.taskId = "", t.queryCollectPoint();
                        }, 1e3)) : !0 !== t.localData.intervalTimeout || s.length || (t.$loading && t.$loading.hideLoading(), 
                        t.$toast && t.$toast.show("活动太火爆啦，请再领取试试"), t.clearInterval()), e.next = 21;
                        break;

                      case 16:
                        e.prev = 16, e.t0 = e.catch(3), s.pop(), console.error("catch,e:::", e.t0), s.length || (t.$loading && t.$loading.hideLoading(), 
                        t.$toast && t.$toast.show("活动太火爆啦，请再领取试试"), t.clearInterval());

                      case 21:
                      case "end":
                        return e.stop();
                    }
                }, a, null, [ [ 3, 16 ] ]);
            }))();
        },
        clearInterval: function(t) {
            function e() {
                return t.apply(this, arguments);
            }
            return e.toString = function() {
                return t.toString();
            }, e;
        }(function() {
            var t = this.localData.queryRewardStateInterval;
            t && clearInterval(t);
        }),
        adaptorPoints: function(t, e) {
            for (var a = [], o = 0; o < e; o++) a.push({
                index: o + 1,
                status: o < t ? "FINISHED" : "INIT",
                last: o === e - 1
            });
            if (e > 6 && t > 4) for (var n = t === e - 1 ? t - 5 : t - 4, i = 0; i < n; i++) a.shift();
            var r = a.length;
            if (r > 6) for (var l = 0; l < r - 6; l++) a.splice(a.length - 2, 1);
            return a;
        },
        getLineItemNum: function(t) {
            return 3 === t ? "three" : 4 === t ? "four" : 5 === t ? "five" : "six";
        },
        handleGoOrderFood: function() {
            var t = this;
            this.handleLogClick(), (0, i.getPhoneAuth)(this, function() {
                t.$root.$relaunch("/pages/orderfood/index");
            }, this.handlePhoneAuthFail.bind(this));
        },
        handleGoActivityPage: function() {
            var t = this;
            this.handleLogClick(), (0, i.getPhoneAuth)(this, function() {
                var e = t.localData, a = e.activityId, o = e.taskId, n = "/pages/member/member-collect-point/index?activityId=".concat(a);
                o && (n += "&taskId=".concat(o)), t.$root.$navigate(n);
            }, this.handlePhoneAuthFail.bind(this));
        },
        handleLogClick: function() {
            var t = this.localData.activityId;
            this.$root.$logClick(".syrk", {
                action: "轻店首页-集点活动-点击",
                activityId: t
            });
        },
        handlePhoneAuthFail: function() {
            this.$toast.show("未获得您的联系方式，将无法有效的为您提供服务");
        }
    }
});