var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../../@babel/runtime/regenerator")), o = require("../../../@babel/runtime/helpers/asyncToGenerator"), n = require("../../../@babel/runtime/helpers/objectSpread2"), a = require("../../../@babel/runtime/helpers/toConsumableArray"), i = t(require("../../../m/zk/za")), r = t(require("../../../m/z3/zs")), s = require("../../../l/wh"), c = require("../../../v/ci/32"), u = require("../../../v/ci/n"), l = (t(require("../../../m/5y")), 
require("../../../l/wa"));

(0, i.default)({
    name: "store-coupon",
    data: {
        showFoldTxt: !0,
        hasUsedInco: !1,
        hasClickGetBtn: !0,
        hasClickGetBtnAfter: !1,
        showModal: !1,
        showGetting: !1,
        showHasGet: !1,
        showFailPop: !1,
        singalClickBefore: !0,
        singalClickAfter: !1,
        counponCanGetList: [],
        couponGetList: [],
        themeColor: "",
        showContainer: !0,
        miniType: (0, l.getMiniType)(),
        titleType: "text",
        name: "",
        titleImage: "",
        showTitle: !1,
        styles: {
            fold: "njw",
            unfold: "nj3",
            other: "nj6"
        },
        voucherIdList: []
    },
    localData: {
        options: Object.create(null),
        data: {}
    },
    components: {
        authPhoneModal: "auth-phone-modal",
        customShowModal: "custom-show-modal"
    },
    logProps: {
        $$expElement: [ ".component-user-counpon-getall-before", ".component-lightshop-user-counpon-right-btn" ]
    },
    ready: function() {
        this.$customShowModal = this.getComponentById("customShowModal");
    },
    methods: {
        init: function(t) {
            this.localData.options = t;
            var e = this.parseCouponDataBefore();
            return this.localData.data = e, {
                root: this,
                isShow: !!e.couponList
            };
        },
        render: function() {
            var t = this.localData.data, e = t.showTitle, o = t.titleType, n = void 0 === o ? "text" : o, i = t.name, r = t.titleImage, s = t.couponList, c = {
                showTitle: e,
                titleType: n,
                name: i,
                titleImage: r
            };
            if (s) {
                c.counponCanGetList = s;
                var u = s.find(function(t) {
                    return void 0 !== t.activityId;
                }), l = !1 === s[0].canApply, h = s.length > 3, d = 1 === s.length;
                u || (c.hasClickGetBtn = !1, c.hasUsedInco = !0), l && (d ? c.singalClickAfter = !0 : (c.hasClickGetBtnAfter = !0, 
                c.hasClickGetBtn = !1, c.hasUsedInco = !0), h && (c.isFold = !0, c.showFoldTxt = !1), 
                c.voucherIdList = s.reduce(function(t, e) {
                    var o = e.voucherInstanceIdList, n = void 0 === o ? [] : o;
                    return [].concat(a(t), a(n));
                }, []));
            } else c.showContainer = !1;
            this.setData(c);
        },
        parseCouponDataBefore: function() {
            var t = this.localData.options.data, e = t.enter_shop_vouchers;
            if (!e) return {};
            var o = e.activityVoucherTemplate4ClientMDTOList, a = e.activityId, i = e.canApply, r = e.activityName, c = (0, 
            s.getThemeColor)();
            return {
                couponList: o.reduce(function(t, e) {
                    return t.push(n(n({}, e), {}, {
                        activityName: r,
                        canApply: i,
                        activityId: a,
                        themeColor: c
                    })), t;
                }, []),
                name: t.name,
                showTitle: t.showTitle,
                titleType: t.titleType,
                titleImage: t.titleImage
            };
        },
        bindPhoneAuthPage: function(t) {
            var e = this;
            (0, s.getAuthPhoneFlag)() ? (this.$root.$logClick(".home.coupons", {
                customType: this.data.counponCanGetList.activityId
            }), this.getCouponInfoConfigDataFetch(t)) : r.default.auth({
                context: this.getComponentById("authPhoneModal")
            }, function(o) {
                e.getCouponInfoConfigDataFetch(t);
            }, function(t) {});
        },
        alipayAddMiniFormld: function(t) {
            var n = this;
            return o(e.default.mark(function o() {
                return e.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (e.prev = 0, "my" !== n.data.miniType || !t.detail || !t.detail.formId) {
                            e.next = 5;
                            break;
                        }
                        return e.next = 5, (0, u.addAliMiniFormld)({
                            formId: t.detail.formId
                        });

                      case 5:
                        e.next = 9;
                        break;

                      case 7:
                        e.prev = 7, e.t0 = e.catch(0);

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, o, null, [ [ 0, 7 ] ]);
            }))();
        },
        getCouponInfoConfigDataFetch: function(t) {
            var n = this;
            return o(e.default.mark(function o() {
                var i, r, s, u, l, h;
                return e.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return i = n.parseCouponDataBefore(), r = i.couponList, s = r[0].activityId, e.next = 4, 
                        (0, c.queryCouponInfo)(s);

                      case 4:
                        u = e.sent, l = n.parseCouponDataAfter(u), n.alipayAddMiniFormld(t), l && n.setData({
                            couponGetList: l
                        }), !0 === u.data.data.every(function(t) {
                            return !1 === t.result;
                        }) ? n.$customShowModal.show({
                            title: "领取失败",
                            bodyText: "当前领券已经超过限制张数，请下次再来",
                            cancelText: "取消",
                            showCancel: !1,
                            confirmColor: n.data.themeColor,
                            confirmText: "我知道了"
                        }) : (h = u.data.data.reduce(function(t, e) {
                            var o = e.voucherInstanceIdList, n = void 0 === o ? [] : o;
                            return [].concat(a(t), a(n));
                        }, []), n.setData({
                            voucherIdList: h,
                            showModal: !0,
                            hasClickGetBtn: !0,
                            showGetting: !0,
                            hasClickGetBtnAfter: !1
                        }), setTimeout(function() {
                            n.setData({
                                showModal: !0,
                                showGetting: !1,
                                showHasGet: !0,
                                hasClickGetBtn: !0,
                                hasClickGetBtnAfter: !1
                            });
                        }, 2e3));

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, o);
            }))();
        },
        parseCouponDataAfter: function(t) {
            var e = t;
            "FAILURE" === t && this.$customShowModal.show({
                title: "领取失败",
                bodyText: "当前领券已经超过限制张数，请下次再来",
                cancelText: "取消",
                showCancel: !1,
                confirmColor: this.data.themeColor,
                confirmText: "我知道了"
            }), "TIMEOUT" === t && this.$customShowModal.show({
                title: "领取超时",
                bodyText: "发券可能存在一定延迟，请前往券包中查看领取结果",
                cancelText: "取消",
                showCancel: !1,
                confirmColor: this.data.themeColor,
                confirmText: "我知道了"
            });
            var o = e.data.data;
            if (o) {
                var a = (0, s.getThemeColor)();
                return o.reduce(function(t, e) {
                    return t.push(n(n(n({}, e.activityVoucherTemplate), e.bizCodeList), {}, {
                        themeColor: a,
                        result: e.result
                    })), t;
                }, []);
            }
        },
        unfoldCoupon: function() {
            this.setData({
                isFold: !this.isFold,
                showFoldTxt: !1
            });
        },
        hidePop: function() {
            var t = this;
            return o(e.default.mark(function o() {
                var a, i, r, s;
                return e.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        a = t.data.couponGetList, i = a.filter(function(t) {
                            return !0 === t.result;
                        }), r = {}, i.length > 1 ? (r.hasUsedInco = !0, r.hasClickGetBtnAfter = !0) : 1 === i.length ? (r.hasClickGetBtnAfter = !1, 
                        r.singalClickAfter = !0) : r.showContainer = !1, s = n(n({}, r), {}, {
                            showModal: !1,
                            isFold: !0,
                            showGetting: !1,
                            showHasGet: !1,
                            hasClickGetBtn: !1,
                            showFoldTxt: !1,
                            counponCanGetList: i
                        }), t.setData(s);

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, o);
            }))();
        },
        hidePopSingal: function() {
            var t = this;
            return o(e.default.mark(function o() {
                var a, i, r, s;
                return e.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        t.setData({
                            showModal: !1,
                            showGetting: !1,
                            showHasGet: !1,
                            hasClickGetBtn: !1,
                            hasUsedInco: !0,
                            singalClickBefore: !1
                        }), a = t.data.couponGetList, i = a.filter(function(t) {
                            return !0 === t.result;
                        }), r = {}, 1 === i.length ? r.singalClickAfter = !0 : r.showContainer = !1, s = n(n({}, r), {}, {
                            counponCanGetList: i
                        }), t.setData(s);

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, o);
            }))();
        },
        goLookCouponByGetAfter: function() {
            this.$root.$navigate("/pages/member/member-coupon-list/index");
        },
        goLookCoupon: function() {
            this.$root.$navigate("/pages/member/member-coupon-list/index");
        },
        singalCouponClickView: function() {
            this.$root.$navigate("/pages/member/member-coupon-list/index");
        },
        preventTouchMove: function() {
            return null;
        },
        handleAppear: function(t) {
            var e = (t.currentTarget || {}).dataset.trackLogkey;
            e && this.$root.$logExpo(e, {
                customType: this.data.counponCanGetList.activityId
            });
        }
    }
});