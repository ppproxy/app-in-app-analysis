var e = require("../../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../../@babel/runtime/regenerator")), o = require("../../../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../../../m/zk/za")), a = require("../../../../v/ci/n"), r = require("../../../../v/33/n"), i = require("../../../../v/ci/32"), s = require("../../../../l/wh"), u = e(require("../../../../m/zl/5o"));

(0, n.default)({
    name: "orderfood-coupon-popup",
    data: {
        couponList: [],
        showModal: !1,
        showCoupon: !1,
        themeColor: (0, s.getThemeColor)(),
        customType: ""
    },
    logProps: {
        $$expElement: [ ".component-coupon-popup-show-modal" ]
    },
    localData: {
        options: Object.create(null)
    },
    components: {
        authPhoneModal: "auth-phone-modal",
        customShowModal: "custom-show-modal",
        loading: "loading",
        toast: "toast"
    },
    ready: function() {
        this.$customShowModal = this.getComponentById("customShowModal"), this.$loading = this.getComponentById("loading"), 
        this.$toast = this.getComponentById("toast");
    },
    methods: {
        show: function() {
            this.parseActivityInfo();
        },
        init: function(e) {
            return this.localData.options = e, this;
        },
        parseActivityInfo: function() {
            var e = this;
            return o(t.default.mark(function o() {
                var n, a, i, c, l, d, p, h, C, f;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, t.next = 3, e.FetchFatigue();

                      case 3:
                        if (t.sent) {
                            t.next = 7;
                            break;
                        }
                        return e.execCloseCallback(), t.abrupt("return");

                      case 7:
                        return t.next = 10, (0, r.queryActivityInfo)({
                            activityTypeIds: JSON.stringify([ "12" ]),
                            bizScene: "ENTER_SHOP_POP"
                        });

                      case 10:
                        if (n = t.sent, a = n.data, 0 !== (i = a.data).length) {
                            t.next = 16;
                            break;
                        }
                        return e.execCloseCallback(), t.abrupt("return");

                      case 16:
                        if (c = i[0].activityName, l = i[0].activityDesc, d = i[0].activityVoucherTemplate4ClientMDTOList, 
                        p = i[0].canApply) {
                            t.next = 22;
                            break;
                        }
                        return t.abrupt("return");

                      case 22:
                        return h = i[0].activityId, u.default.put("activityId", h), C = (0, s.getSceneType)(), 
                        f = C.sceneType, e.setData({
                            showModal: !0,
                            showCoupon: !0,
                            activityName: c,
                            activityDesc: l,
                            couponList: d,
                            canApply: p,
                            isHasData: !!i,
                            customScene: f
                        }, function() {
                            e.$root.$logReinit(e);
                        }), t.abrupt("return", i);

                      case 29:
                        t.prev = 29, t.t0 = t.catch(0);

                      case 31:
                      case "end":
                        return t.stop();
                    }
                }, o, null, [ [ 0, 29 ] ]);
            }))();
        },
        handleMemberJoinSuccess: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.detail || {}, o = t.fetchJoinMember, n = void 0 !== o && o, a = (0, 
            s.getSceneType)(), r = a.sceneType;
            this.parseCouponInfo(n), this.$root.$logClick(".keruyun_menu.receive_coupon_click", {
                customType: "领取",
                customScene: r
            });
        },
        handleMemberJoinFail: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.$toast.show(e.errorMessage || "入会失败，请重试");
        },
        parseCouponInfo: function() {
            var e = arguments, n = this;
            return o(t.default.mark(function o() {
                var a, r, s, c, l, d, p, h, C;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return a = e.length > 0 && void 0 !== e[0] && e[0], t.prev = 1, r = u.default.get("activityId"), 
                        t.next = 5, (0, i.queryCouponInfo)(r);

                      case 5:
                        s = t.sent, c = s.data, (l = c.data) || n.$toast.show("网络异常，请稍后再试", 1500), n.triggerEvent("handleGetCouponSuccess", l), 
                        n.setData({
                            showModal: !1,
                            showCoupon: !1
                        }), n.execCloseCallback(), d = l.some(function(e) {
                            return !1 === e.result && ("VOUCHER_TEMPLATE_NO_INVENTORY" === e.bizCodeList[0] || "VOUCHER_TEMPLATE_INVALID" === e.bizCodeList[0] || "VOUCHER_COUNT_OVER_LIMIT" === e.bizCodeList[0]);
                        }), p = l.some(function(e) {
                            return !1 === e.result && ("NO_ELE_ACCOUNT" === e.bizCodeList[0] || "NO_KB_ACCOUNT" === e.bizCodeList[0] || "NO_TAOBAO_ACCOUNT" === e.bizCodeList[0]);
                        }), h = l.some(function(e) {
                            return !1 === e.result && "APPLY_VOUCHER_ERROR" === e.bizCodeList[0];
                        }), C = a ? "入会成功！\n" : "", !d || p || h || n.$toast.show(C + "部分券被领完啦，下次早点来哦", 1500), 
                        p && n.$toast.show(C + "领取成功！部分券需关联口碑、饿了么账号使用哦", 1500), h && !p && n.$customShowModal.show({
                            title: C + "发券可能存在延迟或失败，请稍后到券包查看领券结果",
                            bodyText: "",
                            cancelText: "继续点餐",
                            showCancel: !0,
                            confirmText: "去券包",
                            ok: function() {
                                n.$root.$navigate("/pages/member/member-coupon-list/index");
                            }
                        }), l.every(function(e) {
                            return !1 === e.result && ("VOUCHER_TEMPLATE_NO_INVENTORY" === e.bizCodeList[0] || "VOUCHER_TEMPLATE_INVALID" === e.bizCodeList[0] || "VOUCHER_COUNT_OVER_LIMIT" === e.bizCodeList[0]);
                        }) && n.$toast.show(C + "券被领完啦，下次早点来哦", 1500), l.every(function(e) {
                            return !0 === e.result;
                        }) && n.$toast.show(C + "领取成功", 1500), n.$loading.hideLoading(), t.next = 28;
                        break;

                      case 26:
                        t.prev = 26, t.t0 = t.catch(1);

                      case 28:
                      case "end":
                        return t.stop();
                    }
                }, o, null, [ [ 1, 26 ] ]);
            }))();
        },
        FetchFatigue: function() {
            return o(t.default.mark(function e() {
                var o, n, r, i, u;
                return t.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return o = (0, s.getLoginCustomer)(), n = (0, s.getShopId)(), r = {
                            customerId: o,
                            bizCode: "LIGHTSTORE_ORDER_APPLY_COUPON_POPUP_11",
                            uniqueId: o + n,
                            timeoutSeconds: 10800,
                            setFatigue: !0
                        }, e.next = 5, (0, a.queryFatigue)(r);

                      case 5:
                        return i = e.sent, u = i.data.shouldDo || !1, e.abrupt("return", u);

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        hidePop: function() {
            var e = (0, s.getSceneType)().sceneType;
            this.$root.$logClick(".keruyun_menu.receive_coupon_click", {
                customType: "不领取",
                customScene: e
            }), this.setData({
                showModal: !1,
                showCoupon: !1
            }), this.execCloseCallback();
        },
        forbidMove: function() {
            return null;
        },
        execCloseCallback: function() {
            var e = this.localData.options;
            e.closeCallback && e.closeCallback();
        }
    }
});