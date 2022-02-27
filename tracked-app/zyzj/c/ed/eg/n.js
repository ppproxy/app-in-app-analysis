var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = require("../../../@babel/runtime/helpers/objectSpread2"), a = t(require("../../../@babel/runtime/regenerator")), o = require("../../../@babel/runtime/helpers/asyncToGenerator"), i = t(require("../../../m/zk/za")), n = require("../../../pages/member/common/util/common"), r = t(require("../../../m/z3/zs")), s = t(require("../../../m/z3/z7")), c = require("../../../l/wh"), l = require("../../../v/3s/3f"), u = (0, 
n.getAppType)();

(0, i.default)({
    name: "member-assistance-coupon-component",
    properties: {
        activityTypeId: {
            type: String,
            value: ""
        },
        activifyInfo: {
            type: Object,
            value: {}
        }
    },
    components: {
        toast: "toast",
        loading: "loading",
        authPhoneModal: "auth-phone-modal",
        authUserModal: "auth-user-modal"
    },
    logProps: {
        $$expElement: [ ".component-assistance-card-wrapper", ".component-has-coupon", ".component-invite-some-friends", ".component-get-coupon-again" ]
    },
    data: {
        voucherTemplate: {},
        taskInfo: {},
        activeInfo: {},
        currentMember: {},
        showProgress: !1,
        taskId: "",
        memberList: [],
        themecolor: "",
        rangeInfo: {},
        dateInfo: {
            day: 0,
            hour: 0,
            minute: 0,
            millisecond: 0,
            second: 0
        },
        rangeAnimateClass: "",
        name: "会员",
        showTitle: !1,
        titleImage: "",
        titleType: ""
    },
    localData: {
        countDownTimer: null,
        interval: 100,
        countDownEnd: !1
    },
    ready: function() {
        this.setData({
            themecolor: this.data.themecolor || (0, c.getThemeColor)() || ""
        }), this.$toast = this.getComponentById("toast"), this.$loading = this.getComponentById("loading");
    },
    detached: function() {
        this.localData.countDownTimer && clearTimeout(this.localData.countDownTimer);
    },
    methods: {
        init: function(t) {
            return this.localData.options = t, this;
        },
        render: function() {
            var t = this, e = this.localData.options.data, a = e.name, o = e.showTitle, i = e.titleImage, n = e.titleType, r = e.activityTaskInfo;
            r && (this.renderContainer(r), setTimeout(function() {
                t.$root.$logReinit(t);
            }, 200)), this.setData({
                name: a,
                showTitle: o,
                titleImage: i,
                titleType: n
            });
        },
        queryActivityDetails: function() {
            var t = this;
            return o(a.default.mark(function e() {
                var o, i;
                return a.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return o = {
                            appType: u,
                            activityTypeId: 38,
                            shopId: (0, c.getShopId)() || "",
                            taskId: ""
                        }, e.next = 3, (0, l.queryActivityDetailsNoTaskId)(o);

                      case 3:
                        (i = e.sent) && i.data && t.renderContainer(i.data || {});

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        renderContainer: function(t) {
            var i = this;
            return o(a.default.mark(function o() {
                var n, r, s, c, l, u, h, m, d, D, p, f, v, I, T, g, w, y, k, b, C, $, A, S, q, E, x, P, M, N, O, j, F, B;
                return a.default.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        for (r = (n = t || {}).voucherTemplate, s = void 0 === r ? {} : r, c = n.activity, 
                        l = void 0 === c ? {} : c, u = n.taskInfo, h = void 0 === u ? {} : u, m = n.currentMember, 
                        d = void 0 === m ? {} : m, D = l.activityId, p = l.startTime, f = l.extInfo, v = f && JSON.parse(f) || {}, 
                        I = d.currentDate, T = 0, I && (g = new Date().getTime(), T = g - I), d.distance = T, 
                        w = {
                            SUSPENDED: !0,
                            COMPLETED: !0,
                            FINISHED: !0,
                            CLOSED: !0,
                            OUT_OF_INVENTORY: !0
                        }, y = {
                            SUSPENDED: !0,
                            FINISHED: !0,
                            CLOSED: !0
                        }, k = i.setRangeWidthInfo(p, T), b = w[h.state], C = "COMPLETED" === h.state && d.read, 
                        $ = y[h.state], A = !h.taskId || $ && d.read, S = e({
                            activityId: D
                        }, v), q = v.target, E = h.extInfo ? Number(q) - Number(h.extInfo.current) : "", 
                        x = [], P = h.taskMembers, M = void 0 === P ? [] : P, O = (N = q + 1) > 4 ? 4 : N, 
                        j = 0; j < O; j++) x.push({
                            customerAvatar: "https://img.alicdn.com/tfs/TB1epWA1FP7gK0jSZFjXXc5aXXa-84-85.png"
                        });
                        x = Object.assign(x, M.slice(0, 4)), N > 4 && (x[3] = {
                            customerAvatar: "https://img.alicdn.com/tfs/TB1kt7ZmtTfau8jSZFwXXX1mVXa-84-85.png"
                        }), i.setData({
                            rangeInfo: k,
                            memberList: x,
                            activeInfo: S,
                            currentMember: d,
                            taskInfo: e({
                                allFinishState: b,
                                isErrorFinishState: $,
                                initTaskStyle: A,
                                initTaskState: C,
                                remainingNumber: E
                            }, h),
                            voucherTemplate: s,
                            rangeAnimateClass: "range-animate-class"
                        }), F = h.endTime, i.localData.loopCountDown && clearTimeout(i.localData.loopCountDown), 
                        F && (B = new Date(F.replace(/-/g, "/")).getTime(), i.loopCountDown(B, b));

                      case 28:
                      case "end":
                        return a.stop();
                    }
                }, o);
            }))();
        },
        handleAppear: function(t) {
            var e = (t.currentTarget || {}).dataset, a = e.trackLogkey, o = e.trackActivityId;
            a && this.$root.$logExpo(a, {
                activityId: o
            });
        },
        loopCountDown: function(t, e) {
            var a = this;
            this.localData.countDownTimer && clearTimeout(this.localData.countDownTimer), this.localData.countDownTimer = null;
            var o = this.data.taskInfo, i = new Date().getTime(), n = t - i, r = parseInt(n / 1e3 / 60 / 60 / 24), s = parseInt(n / 1e3 / 60 / 60 % 24), c = parseInt(n / 1e3 / 60 % 60), l = parseInt(n / 1e3 % 60), u = parseInt(n % 1e3 / 100), h = "";
            if (n - 864e5 <= 0 ? this.localData.interval = 100 : (this.localData.interval = 6e4, 
            h = r + "天"), n >= 0 && (this.localData.countDownEnd = !1), !this.localData.countDownEnd) {
                n <= 0 ? (this.localData.countDownTimer && clearTimeout(this.localData.countDownTimer), 
                this.localData.countDownTimer = null, r = 0, s = 0, c = 0, l = 0, u = 0, this.localData.countDownEnd = !0, 
                o.allFinishState || this.queryActivityDetails()) : e || (this.localData.countDownTimer = setTimeout(function() {
                    a.loopCountDown(t, e);
                }, this.localData.interval));
                var m = function(t) {
                    return t >= 10 ? t : "0" + t;
                };
                h ? h += m(s) + ":" + m(c) : h = m(s) + ":" + m(c) + ":" + m(l) + "." + m(u), this.setData({
                    dateInfo: {
                        day: r,
                        hour: s,
                        minute: c,
                        millisecond: u,
                        second: l,
                        content: h
                    }
                });
            }
        },
        getUserAuth: function(t) {
            var e = this;
            s.default.auth({
                context: this.getComponentById("authUserModal")
            }, function(a) {
                e.getPhoneAuth(t);
            }, function(t) {});
        },
        getPhoneAuth: function(t) {
            var e = this;
            (0, c.getAuthPhoneFlag)() ? this.$root.$navigate("/pages/member/member-assistance/index?showBack=true&taskId=" + (t || "")) : r.default.auth({
                context: this.getComponentById("authPhoneModal")
            }, function(a) {
                e.$root.$navigate("/pages/member/member-assistance/index?showBack=true&taskId=" + (t || ""));
            }, function(t) {});
        },
        handleGoToAssistanceDetailsPage: function() {
            var t = this.data.taskInfo || {};
            if (!t.initTaskState && !t.initTaskStyle) {
                this.$root.$logClick(".home.ckjx", {
                    action: "轻店首页-助力领券-查看进度-按钮点击",
                    activityId: this.data.activeInfo && this.data.activeInfo.activityId || ""
                }), this.localData.countDownTimer && clearTimeout(this.localData.countDownTimer), 
                this.localData.countDownTimer = null;
                var e = this.data.taskInfo.taskId;
                this.$root.$navigate("/pages/member/member-assistance/index?showBack=true&taskId=" + (e || ""));
            }
        },
        handleCreateAssistanceInit: function() {
            this.$root.$logClick(".home.yqhymfhdq", {
                action: "轻店首页-助力领券-邀请几位好友，免费得优惠券-按钮点击",
                activityId: this.data.activeInfo && this.data.activeInfo.activityId || ""
            }), this.localData.countDownTimer && clearTimeout(this.localData.countDownTimer), 
            this.localData.countDownTimer = null, this.getUserAuth();
        },
        handleCreateAssistance: function() {
            this.$root.$logClick(".home.jxktlq", {
                action: "轻店首页-助力领券-继续开团抢券-按钮点击",
                activityId: this.data.activeInfo && this.data.activeInfo.activityId || ""
            }), this.localData.countDownTimer && clearTimeout(this.localData.countDownTimer), 
            this.localData.countDownTimer = null, this.getUserAuth();
        },
        handleCreateAssistanceAgain: function() {
            this.$root.$logClick(".home.yhdyhqjxktqj", {
                action: "轻店首页-助力领券-已获得优惠券，继续开团抢券-按钮点击",
                activityId: this.data.activeInfo && this.data.activeInfo.activityId || ""
            }), this.localData.countDownTimer && clearTimeout(this.localData.countDownTimer), 
            this.localData.countDownTimer = null, this.getUserAuth();
        },
        handleOpenMyCouponListPage: function() {
            this.$root.$logClick(".home.cckwdddq", {
                action: "轻店首页-助力领券-我的优惠券-按钮点击",
                activityId: this.data.activeInfo && this.data.activeInfo.activityId || ""
            }), this.localData.countDownTimer && clearTimeout(this.localData.countDownTimer), 
            this.localData.countDownTimer = null, this.$root.$navigate("/pages/member/member-coupon-list/index");
        },
        setRangeWidthInfo: function(t, e) {
            if (t) {
                var a = new Date(t.replace(/-/g, "/")).getTime(), o = new Date().getTime() + e - a, i = Math.ceil(o / 1e3 / 60 / 60), n = "90%", r = "即将抢光";
                return o - 612e5 <= 0 && (n = 5 * i + "%", r = ""), {
                    width: n,
                    content: r
                };
            }
        }
    }
});