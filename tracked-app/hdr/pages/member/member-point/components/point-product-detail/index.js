var e = require("../../../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../../../@babel/runtime/regenerator")), a = require("../../../../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../../../../m/zk/za")), o = require("../../../../../l/wh"), r = require("../../../../../v/3s/3k"), i = require("../../../../member/common/util/point/uuid"), c = require("./product-convert"), s = "POINT-PRODUCT-DETAIL:";

(0, n.default)({
    name: "point-product-detail",
    options: {},
    components: {
        loading: "loading",
        toast: "toast"
    },
    properties: {
        showDetail: {
            type: Boolean,
            value: !1
        },
        bottomTabEnable: {
            type: Boolean,
            value: !1
        },
        usePointGoodsComponent: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        themeColor: (0, o.getThemeColor)(),
        itemDetail: {
            itemId: "",
            name: "",
            memberPoint: -1,
            itemStatus: "",
            crowdBizDTO: {
                crowdType: "MEMBER",
                levelList: []
            },
            currentLevel: {
                levelId: "",
                levelNo: 0,
                levelName: ""
            },
            quantity: 0,
            exchangeNotice: "",
            validDateType: "FIXED",
            validDayCount: 5,
            startTime: "",
            endTime: "",
            expiredTime: "",
            todayAvailable: !0,
            availableTime: "",
            instruction: "",
            customerExchangedDTO: {
                exchangedNumber: 0,
                exchangeable: !1,
                inconvertibleReason: "REMOVED"
            },
            availableScope: "",
            crmVoucherInfo: {
                content: "",
                minCharge: 0,
                discount: "",
                crmVoucherType: "GIFT"
            }
        },
        couponFace: null,
        showView: !1,
        exchangeableText: "不可兑换",
        exchangeLoading: !1,
        outOrderNo: "",
        exchangeSuccess: !1,
        hasExchangeSuccessHistory: !1,
        availableTimeText: "",
        availableScopeText: "",
        useConditionText: "",
        minConsumeText: "",
        queryCount: 0,
        orderNo: "",
        itemId: ""
    },
    ready: function() {
        this.$loading = this.getComponentById("loading"), this.$toast = this.getComponentById("toast");
    },
    detached: function() {},
    observers: {
        showDetail: function(e) {
            this.setData({
                showView: e
            }), e && this.getProductDetail();
        }
    },
    methods: {
        startShowDetail: function(e) {
            this.getProductDetail(e);
        },
        isPropsChange: function(e) {
            return null === e || e.itemId !== this.props.itemId || e.showDetail !== this.props.showDetail;
        },
        onPopupClose: function() {
            try {
                this.triggerEvent("handleClosed", {
                    forceRefresh: this.data.hasExchangeSuccessHistory
                });
            } catch (e) {}
            this.setData({
                hasExchangeSuccessHistory: !1
            });
        },
        onPreventTouch: function(e) {
            return !1;
        },
        getProductDetail: function(e) {
            var n = this;
            return a(t.default.mark(function a() {
                var o, u;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return n.$loading.showLoading("正在加载中..."), t.prev = 1, e || (e = n.data.itemId), 
                        t.next = 5, (0, r.getItemDetail)({
                            itemId: e
                        });

                      case 5:
                        o = t.sent, (u = o && o.data ? o.data.data : "") ? n.setData({
                            itemId: e,
                            showView: !0,
                            itemDetail: u,
                            couponFace: (0, c.transferCRMToL100CouponModel)(u),
                            exchangeableText: n.getBtnText(u),
                            validDateText: n.handleValidDate(u),
                            availableTimeText: n.handleAvailableTimePeriod(u),
                            availableScopeText: n.handleAvailableScope(u),
                            useConditionText: n.handleUseConditionText(u),
                            minConsumeText: n.handleMinConsumeText(u),
                            outOrderNo: (0, i.uuid)()
                        }, function() {
                            n.setData({
                                showView: !0
                            });
                        }) : (console.error(s + "getItemDetail no data error"), n.onPopupClose(), n.$toast.show("商品加载失败", 1500)), 
                        t.next = 15;
                        break;

                      case 10:
                        t.prev = 10, t.t0 = t.catch(1), console.error(s + "getItemDetail error:", t.t0), 
                        n.onPopupClose(), n.$toast.show("商品加载失败", 1500);

                      case 15:
                        return t.prev = 15, n.$loading.hideLoading(), t.finish(15);

                      case 18:
                      case "end":
                        return t.stop();
                    }
                }, a, null, [ [ 1, 10, 15, 18 ] ]);
            }))();
        },
        getPointCouponImg: function(e) {
            if (e && e.crmVoucherInfo) switch (e.crmVoucherInfo.voucherSubType) {
              case "KB_FULL_SCENE":
              case "KB_PAY_SCENE":
                return "https://img.alicdn.com/tfs/TB1tjvfD9f2gK0jSZFPXXXsopXa-164-164.png";

              case "ELE_CASH":
              case "ELE_CASH_DELIVERY":
                return "https://img.alicdn.com/tfs/TB1nfvdD2b2gK0jSZK9XXaEgFXa-164-164.png";

              case "SAAS_CASH":
              case "SAAS_DISCOUNT":
              case "SAAS_GIFT":
                return "https://img.alicdn.com/tfs/TB1Ff7ZDHj1gK0jSZFuXXcrHpXa-326-326.png";

              case "ELE_GIFT":
                return e.crmVoucherInfo.imgUrl || "https://img.alicdn.com/tfs/TB1nfvdD2b2gK0jSZK9XXaEgFXa-164-164.png";

              default:
                return "";
            }
        },
        handleValidDate: function(e) {
            switch (e.validDateType) {
              case "FIXED":
                return "".concat(e.startTime, " 至 ").concat(e.endTime);

              case "RELATIVE":
                return "领取后".concat(e.expiredTime, "天内有效");

              default:
                return "";
            }
        },
        handleAvailableTimePeriod: function(e) {
            var t = {
                1: "周一",
                2: "周二",
                3: "周三",
                4: "周四",
                5: "周五",
                6: "周六",
                7: "周日"
            };
            function a(e) {
                for (var a = "", n = 0; n < e.length; n++) a += t[e[n]], n !== e.length - 1 && (a += ",");
                return a;
            }
            if (!e || !e.availableTime) return "";
            try {
                var n = JSON.parse(e.availableTime), o = n.type, r = n.settings;
                switch (o) {
                  case 0:
                    return "不限制";

                  case -1:
                    for (var i = "", c = 0; c < r.length; c++) i += "".concat(a(r[c].week), ":").concat(r[c].dayStartTime, "-").concat(r[c].dayEndTime), 
                    c !== r.length - 1 && (i += "\n");
                    return i;

                  default:
                    return "";
                }
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return console.error(e), "";
            }
        },
        handleAvailableScope: function(e) {
            if (!e || !e.availableScope) return "";
            try {
                var t = JSON.parse(e.availableScope);
                return 2 === t.length ? "堂食，外带" : 1 === t.length ? "仅限".concat({
                    TAKE_OUT: "外带",
                    DINE_IN: "堂食"
                }[t[0]], "使用") : "无限制";
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return console.error(s + "parse availableScope error:", e), "";
            }
        },
        handleUseConditionText: function(e) {
            if (!e || !e.crmVoucherInfo) return "";
            var t = e.crmVoucherInfo.minCharge / 100;
            return 0 === t ? "无门槛" : "满".concat(t, "元可用");
        },
        handleMinConsumeText: function(e) {
            return e.crmVoucherInfo.minCharge / 100 + "元";
        },
        getBtnText: function(e) {
            if (e.customerExchangedDTO) {
                if (e.customerExchangedDTO.exchangeable) return e.customerExchangedDTO.exchangedNumber > 0 ? "".concat(e.memberPoint, "积分再兑换一次") : "".concat(e.memberPoint, "积分兑换");
                if (e.customerExchangedDTO.inconvertibleReason) switch (e.customerExchangedDTO.inconvertibleReason) {
                  case "LEVEL_NO_MATCH":
                    return "等级不足";

                  case "LOW_POINT":
                    return "积分不足";

                  case "OVER_LIMIT":
                    return "暂不可兑";

                  case "SOLD_OUT":
                    return "抢光啦";

                  case "REMOVED":
                  default:
                    return "暂不可兑";
                }
            }
        },
        onClickClose: function() {
            this.setData({
                showView: !1
            }), this.onPopupClose();
        },
        onDetailAppear: function() {},
        onExchangeBtnClick: function() {
            this.clickPointExchange();
        },
        gotoTicketList: function() {
            this.$root.$navigate("/pages/member/member-item-list/index", {});
        },
        clickPointExchange: function() {
            var e = this;
            this.data.exchangeLoading || this.data.itemDetail.customerExchangedDTO.exchangeable && (this.setData({
                exchangeLoading: !0,
                exchangeSuccess: !1
            }, function() {
                e.$loading.showLoading("兑换中...");
            }), (0, r.pointExchange)({
                itemId: this.data.itemId,
                outOrderNo: this.data.outOrderNo
            }).then(function(t) {
                t && t.data && t.data.data && t.data.data.orderNo ? e.queryResultInterval(t.data.data.orderNo) : e.setData({
                    exchangeLoading: !1,
                    exchangeSuccess: !1,
                    outOrderNo: (0, i.uuid)()
                }, function() {
                    e.$loading.hideLoading(), e.$toast.show("兑换失败", 1500);
                });
            }).catch(function(t) {
                console.error(s + "pointExchange error:", t), e.setData({
                    exchangeLoading: !1,
                    exchangeSuccess: !1,
                    outOrderNo: (0, i.uuid)()
                }, function() {
                    e.$loading.hideLoading(), e.$toast.show("兑换失败", 1500);
                }), t && t.response && "FAIL_BIZ_ORDER_STATE_UNKNOWN" === t.response.code ? e.queryResultInterval("") : e.setData({
                    exchangeLoading: !1,
                    exchangeSuccess: !1,
                    outOrderNo: (0, i.uuid)()
                }, function() {
                    e.$loading.hideLoading(), e.$toast.show("兑换失败", 1500);
                });
            }));
        },
        isTimeout: function() {
            var e = this.data.queryCount;
            return e >= 5 ? (console.error(s + "query count > 5"), !0) : (this.setData({
                queryCount: ++e
            }), !1);
        },
        resetTimeout: function() {
            this.setData({
                queryCount: 1
            });
        },
        handleQueryResult: function(e, n, o) {
            var c = this;
            return a(t.default.mark(function a() {
                var u, d, l, h;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (!o.isTimeout()) {
                            t.next = 4;
                            break;
                        }
                        o.setData({
                            exchangeLoading: !1,
                            exchangeSuccess: !1,
                            outOrderNo: (0, i.uuid)()
                        }, function() {
                            c.$loading.hideLoading(), c.$toast.show("兑换异常", 1500);
                        }), t.next = 31;
                        break;

                      case 4:
                        return t.prev = 4, t.next = 7, (0, r.queryExchangeResult)({
                            orderNo: e,
                            outOrderNo: n
                        });

                      case 7:
                        if (!((u = t.sent) && u.data && u.data.data && u.data.data.orderStatus)) {
                            t.next = 22;
                            break;
                        }
                        d = u.data.data, t.t0 = d.orderStatus, t.next = "WAIT_PAY" === t.t0 || "PAID" === t.t0 ? 13 : "SUCCESS" === t.t0 ? 16 : ("REFUND" === t.t0 || t.t0, 
                        18);
                        break;

                      case 13:
                        return l = setTimeout(function() {
                            o.handleQueryResult(e, n, o);
                        }, 1e3), o.setData({
                            queryTaskId: l
                        }), t.abrupt("break", 20);

                      case 16:
                        return o.setData({
                            exchangeLoading: !1,
                            exchangeSuccess: !0,
                            hasExchangeSuccessHistory: !0,
                            outOrderNo: (0, i.uuid)()
                        }, function() {
                            setTimeout(function() {
                                o.onClickClose(), c.$root.$navigate("/pages/member/member-point/member-point-exchange-detail/index", {
                                    orderNo: e
                                });
                            }, 1e3), c.$loading.hideLoading(), c.$toast.show("兑换成功", 1500);
                        }), t.abrupt("break", 20);

                      case 18:
                        return o.setData({
                            exchangeLoading: !1,
                            exchangeSuccess: !1,
                            outOrderNo: (0, i.uuid)()
                        }, function() {
                            c.$loading.hideLoading(), c.$toast.show("兑换失败", 1500);
                        }), t.abrupt("break", 20);

                      case 20:
                        t.next = 25;
                        break;

                      case 22:
                        console.error(s + "[兑换] [轮询] no result!"), h = setTimeout(function() {
                            o.handleQueryResult(e, n, o);
                        }, 1e3), o.setData({
                            queryTaskId: h
                        });

                      case 25:
                        t.next = 31;
                        break;

                      case 27:
                        t.prev = 27, t.t1 = t.catch(4), console.error(s + "[兑换] [轮询]queryExchangeResult error:", t.t1), 
                        o.setData({
                            exchangeLoading: !1,
                            exchangeSuccess: !1,
                            outOrderNo: (0, i.uuid)()
                        }, function() {
                            c.$loading.hideLoading(), c.$toast.show("兑换异常", 1500);
                        });

                      case 31:
                      case "end":
                        return t.stop();
                    }
                }, a, null, [ [ 4, 27 ] ]);
            }))();
        },
        queryResultInterval: function(e) {
            var t = this;
            e || this.data.outOrderNo ? (this.resetTimeout(), this.handleQueryResult(e, this.data.outOrderNo, this)) : this.setData({
                exchangeLoading: !1,
                exchangeSuccess: !1,
                outOrderNo: (0, i.uuid)()
            }, function() {
                t.$loading.hideLoading(), t.$toast.show("兑换失败", 1500);
            });
        }
    }
});