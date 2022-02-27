var e = require("../../@babel/runtime/helpers/interopRequireDefault");

require("../../@babel/runtime/helpers/Arrayincludes");

var t = require("../../@babel/runtime/helpers/toConsumableArray"), o = require("../../@babel/runtime/helpers/objectSpread2"), a = e(require("../../@babel/runtime/regenerator")), r = require("../../@babel/runtime/helpers/asyncToGenerator"), i = e(require("../../m/zk/z9")), n = e(require("../../m/zl/5o")), s = require("../../l/wh.js"), u = e(require("../../l/wd/wi.js")), l = e(require("./mixins/index.js")), d = require("../../v/33/n"), c = require("../../v/ci/33"), h = require("../../v/ci/32"), p = e(require("../../m/5s")), f = e(require("../../m/zt")), m = require("../../c/cz/zf/n"), g = e(require("../../l/wv")), v = e(require("./logic-plugins/plugins")), b = require("../../m/z8/zj"), C = e(require("../../p/35")), D = "https://img.alicdn.com/imgextra/i1/O1CN01WggDir1XSJyiLpC15_!!6000000002922-2-tps-96-96.png";

(0, i.default)({
    mixins: [ l.default ],
    spmInfo: {
        spmAPos: "a2f8y",
        spmBPos: "b92902966",
        autoPv: !1
    },
    data: {
        name: "点餐页",
        orderNo: "",
        showOrderedIconOrderNo: "",
        isDinner: !1,
        isLoading: !0,
        isCustomHeader: !1,
        openStatus: !1,
        isShowTabbar: !1,
        shopInfoPickerVisible: !1,
        shopInfoPickerRulesVisible: !1,
        shopBaseInfo: {},
        shopNoticeInfo: {},
        shopActivityList: [],
        showMemberGuid: !1,
        shopCouponList: [],
        shopCouponCanApply: !1,
        shopCouponActiveId: null,
        isCartEmpty: !0,
        isShopEqual: !1,
        rejectMemberFlag: !1,
        couponCount: 0,
        marketingColor: (0, s.getMarketingColor)(),
        dishPage: !0,
        cartDecorationInfo: {},
        orderedTips: "",
        dishListOrderedMap: {},
        tableInfo: null,
        avatarUrl: D
    },
    localData: {
        logType: "商品列表进入",
        isFirstLoad: !0,
        isShow: !0,
        hasLoadOrderAgain: !1,
        actionType: null,
        actionValue: null,
        guideType: "force",
        logicPlugin: null,
        showRegMemberFromCart: !1,
        showCouponModalFlag: !1,
        traceArray: []
    },
    plugins: [ C.default ],
    components: {
        orderfoodOrderRepeatModal: "orderfood-order-repeat-modal",
        memberJoinOrderShowFooterSlotModal: "member-join-order-show-footer-slot-modal",
        orderfoodCouponPopup: "orderfood-coupon-popup",
        orderfoodCart: "orderfood-cart",
        orderfoodDishlist: "orderfood-dishlist",
        bottomTabbar: "bottom-tabbar",
        chooseDefaultDishModal: "choose-default-dish-modal",
        exitconfirmTheme: "exitconfirm-theme",
        shopConfirmModal: "shop-confirm-modal"
    },
    onShareAppMessage: function(e) {
        if (e.target) {
            var t = e.target.dataset.shareinfo;
            return this.$root.$logClick(".orderfood_page_food_share", {
                sharePath: t.path
            }), t;
        }
        var o = (0, s.getShopId)();
        return {
            path: f.default.MINI_PATH.ORDER_FOOD_PATH + "?shopId=".concat(o)
        };
    },
    onLoad: function(e) {
        var t, o = e || {}, a = o.actionType, r = o.actionValue, i = o.couponPopup, u = o.shopId, l = o.dinnerFlowTips;
        u && (0, s.setGlobalShopId)(u), this.localData.logicPlugin = g.default.register(this, v.default, e).preload(), 
        this.localData.actionType = a, this.localData.actionValue = r, this.localData.dinnerFlowTips = decodeURIComponent(l || ""), 
        wx.hideHomeButton(), this.pretrigger = new p.default();
        var d = (0, s.getShopId)(), c = n.default.get("originStoreId") === d, h = n.default.get("historyStoreList"), f = !1;
        h && h.length && (f = h.find(function(e) {
            return e === d;
        })), f && (t = !0), c || t || ((0, s.removeRejectMemberFlag)(), t = (0, s.getRejectMemberGuideFlag)());
        var m = ((0, s.getUserDetlInfo)() || {}).avatarUrl || D;
        this.setData({
            couponPopup: i,
            isShopEqual: c,
            rejectMemberFlag: t,
            avatarUrl: m
        });
    },
    onReady: function() {
        var e = this;
        this.$orderfoodOrderRepeatModal = this.getComponentById("orderfoodOrderRepeatModal"), 
        this.$memberJoinOrderShowFooterSlotModal = this.getComponentById("memberJoinOrderShowFooterSlotModal"), 
        this.$orderfoodCouponPopup = this.getComponentById("orderfoodCouponPopup"), this.$orderfoodCart = this.getComponentById("orderfoodCart"), 
        this.$orderfoodDishlist = this.getComponentById("orderfoodDishlist"), this.$loading = this.getComponentById("loading"), 
        this.$chooseDefaultDishModal = this.getComponentById("chooseDefaultDishModal"), 
        this.$exitconfirmTheme = this.getComponentById("exitconfirmTheme"), this.localData.dinnerFlowTips && this.$toast.show(this.localData.dinnerFlowTips, 3e3);
        var t = (0, b.getCartModel)("orderfood");
        t.bindDefaultDishListChange(function() {
            var o = r(a.default.mark(function o(r) {
                var i, n;
                return a.default.wrap(function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        if (i = r.defaultDishList, n = void 0 === i ? [] : i, r.defaultDishCheckResult || !(n.length > 0)) {
                            o.next = 7;
                            break;
                        }
                        if (!e.localData.showCouponModalFlag) {
                            o.next = 6;
                            break;
                        }
                        return o.next = 6, e.pretrigger.wait("couponModelClose");

                      case 6:
                        e.$chooseDefaultDishModal.confirm({
                            goodsList: n,
                            from: "orderfood",
                            ok: function(e) {
                                var o = e.dishes, a = void 0 === o ? [] : o;
                                a.length > 0 && t.updateCart({
                                    dishes: a,
                                    type: "default-dish"
                                });
                            }
                        });

                      case 7:
                      case "end":
                        return o.stop();
                    }
                }, o);
            }));
            return function(e) {
                return o.apply(this, arguments);
            };
        }()), this.localData.logicPlugin.exec();
    },
    onShow: function() {
        var e = this.$initBottomTabBar();
        if (this.setData({
            isShowTabbar: e
        }), this.localData.isShow = !0, this.localData.isFirstLoad || this.localData.isScanCodeCall || (n.default.get("from_settleaccount_refresh_list") ? (n.default.put("from_settleaccount_refresh_list", !1, {
            keep: !0
        }), this.$orderfoodDishdetail.hide(), this.localData.logicPlugin.preloadAndExec()) : this.localData.logicPlugin.preloadAndExec([ "shopDecoration", "afterPayOrder", "cart" ])), 
        this.localData.isScanCodeCall && (this.localData.isScanCodeCall = !1), n.default.has("rectifySuccess")) {
            var t = "member-join-universal-", o = "".concat(t, "orderfood-shopinfo-picker");
            n.default.has(o) && (this.handleOneKeyGetCoupon(), n.default.remove(o));
            var a = "".concat(t, "orderfood-coupon-popup");
            n.default.has(a) && (this.$orderfoodCouponPopup.handleMemberJoinSuccess(), n.default.remove(a)), 
            n.default.remove("rectifySuccess");
        }
        var r = n.default.get("join_detail_page_flag"), i = n.default.get("open_dish_specs_model_flag");
        if (r || i) {
            var s = this.$root.getTabBar();
            s && s.setData({
                isShow: !1
            });
        }
        n.default.get("orderfood.position.mustAddDish") && (n.default.remove("orderfood.position.mustAddDish"), 
        this.scrollToMustAddDishCate());
    },
    onHide: function() {
        this.localData.isShow = !1, this.localData.isFirstLoad = !1, getApp().PAGE_ORDERFOOD_AVAILABLE_COLD_LOG = !0;
    },
    onUnload: function() {
        delete this.pretrigger, this.localData.logicPlugin = null;
    },
    methods: {
        refresh: function() {
            this.setData({
                isResult: !1,
                isLoading: !0
            }), this.$root.$relaunch("/pages/orderfood/index");
        },
        handleFirstRender: function() {
            this.setData({
                isLoading: !1
            });
            var e = this.localData.traceArray;
            (void 0 === e ? [] : e).push({
                end: +new Date(),
                type: "AVAILABLE"
            });
        },
        handleFirstImageRender: function() {
            var e = this.localData.traceArray, t = void 0 === e ? [] : e;
            t.push({
                end: +new Date(),
                type: "RENDER_TOTAL"
            }), this.$logAvailableTrace(t);
        },
        openDishDetail: function(e) {
            var t = this;
            return r(a.default.mark(function o() {
                var r, i, s, u, l, d, c, h;
                return a.default.wrap(function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        return r = e.dishId, i = e.multiSpecFlag, n.default.put("dish_list_hide_first", !0), 
                        o.next = 4, t.pretrigger.wait("dishList:canScroll");

                      case 4:
                        return o.next = 6, t.$orderfoodDishlist.scrollToDish(r);

                      case 6:
                        if (o.sent) {
                            o.next = 10;
                            break;
                        }
                        return t.$orderfoodDishlist.showFirst(), o.abrupt("return");

                      case 10:
                        return o.prev = 10, s = t.data.openStatus, o.next = 14, (0, m.getDishDetail)({
                            needItemAvailablePromo: !0,
                            dishId: r
                        });

                      case 14:
                        (u = o.sent) ? (l = u.data.data || {}, d = l.cookbookDishSkuList, h = !1, (c = void 0 === d ? [] : d).length && (h = c.every(function(e) {
                            return 0 === e.dishStockDecimal;
                        })), h ? t.$toast.show("当前商品已售完", 1500) : "N" === i ? t.$root.$emit("openSpecs", {
                            dish: l,
                            showSku: c[0],
                            openStatus: s,
                            isSetMeal: !1,
                            btnFlag: !1,
                            isFromDetailPage: !1,
                            setMealCallback: function(e) {
                                t.triggerEvent("handleNumChange", e);
                            }
                        }, t) : t.$orderfoodDishlist.openDishSpecs(r)) : t.$toast.show("请到商品列表选购商品", 1500), 
                        o.next = 20;
                        break;

                      case 18:
                        o.prev = 18, o.t0 = o.catch(10);

                      case 20:
                      case "end":
                        return o.stop();
                    }
                }, o, null, [ [ 10, 18 ] ]);
            }))();
        },
        setShopDetail: function(e) {
            var t = this, o = this.getMemberGuidFlag(e);
            return this.setShopBusinessStatus(e), new Promise(function(a) {
                var r = e.openStatus, i = e.address, n = e.contactMobile, s = e.openTimeDTOList, u = e.currentSystemTime, l = e.storeName, d = e.forceJoinMember, c = e.canJoinMember, h = e.enableCheckSurplus, p = void 0 === h ? 0 : h, f = e.surplusShowNum, m = void 0 === f ? 0 : f;
                t.setData({
                    openStatus: r,
                    shopBaseInfo: {
                        address: i,
                        contactMobile: n,
                        openTimeDTOList: s,
                        currentSystemTime: u,
                        storeName: l,
                        openStatus: r,
                        forceJoinMember: d,
                        enableCheckSurplus: p,
                        surplusShowNum: m,
                        canJoinMember: c
                    },
                    showMemberGuid: o
                }, function() {
                    a(!0);
                });
            }, {
                instant: !0
            });
        },
        setShopBusinessStatus: function(e) {
            var t = "", o = !1, a = e.currentSystemTime, r = e.nextOpenTime, i = void 0 === r ? "" : r, s = e.crossDays, l = void 0 === s ? 0 : s, d = e.openStatus, c = e.openTimeDTOList, h = e.manualClose, p = e.manualCloseTips;
            if (!d) {
                if (i) {
                    var f = l >= 2 ? (0, u.default)(a).add(l, "day").format("M月DD日") : 0 !== l ? "明日" : "今日";
                    t = h && p || "本店已打烊(".concat(f, " ").concat(i, " 开始营业)");
                } else t = h && p || "本店已打烊";
                o = !0;
            }
            if ("AFTER_PAY" !== e.paymentMode && d) {
                var m = (0, u.default)(a).format("YYYY-MM-DD"), g = c.find(function(e) {
                    var t = e.startTime, o = e.endTime, r = (0, u.default)("".concat(m, " ").concat(t)).valueOf(), i = (0, 
                    u.default)("".concat(m, " ").concat(o)).valueOf();
                    return a > r && a < i && i - a <= 6e5;
                });
                o = g && 0 !== g.length, t = "本店将于".concat(g ? g.endTime : "", "打烊");
            }
            o && this.setData({
                tipInfo: t,
                isShowTip: o
            }), n.default.put("ORDERFOOD_TO_SEARCH_OPEN_STATUS", {
                tipInfo: t,
                isShowTip: o,
                openStatus: d
            });
        },
        handleScroll: function(e) {
            var t = this.$navigationBar || {};
            t.handlePageScroll && t.handlePageScroll(e.detail);
        },
        getActivityList: function() {
            var e = this;
            return r(a.default.mark(function t() {
                var o, r, i;
                return a.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, t.next = 3, (0, d.fetchActivityList)("SHOP_FACADE");

                      case 3:
                        o = t.sent, r = o.data.data.activityList, i = void 0 === r ? [] : r, e.setData({
                            shopActivityList: i
                        }), t.next = 10;
                        break;

                      case 8:
                        t.prev = 8, t.t0 = t.catch(0);

                      case 10:
                      case "end":
                        return t.stop();
                    }
                }, t, null, [ [ 0, 8 ] ]);
            }))();
        },
        getActivityDetail: function() {
            var e = this;
            return r(a.default.mark(function t() {
                var o, r, i;
                return a.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, t.next = 3, (0, d.fetchActivityList)("SHOP_FACADE_DETAIL");

                      case 3:
                        o = t.sent, r = o.data.data.activityList, i = void 0 === r ? [] : r, e.setData({
                            shopActivityDetail: i
                        }), t.next = 10;
                        break;

                      case 8:
                        t.prev = 8, t.t0 = t.catch(0);

                      case 10:
                      case "end":
                        return t.stop();
                    }
                }, t, null, [ [ 0, 8 ] ]);
            }))();
        },
        getTableInfo: function() {
            var e = this;
            return r(a.default.mark(function t() {
                var o, r, i, n, u, l, d, h, p;
                return a.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (t.prev = 0, o = (0, s.getTableId)(), r = (0, s.getShopId)(), !o) {
                            t.next = 11;
                            break;
                        }
                        return t.next = 6, (0, c.queryTableById)({
                            tableId: o,
                            storeId: r
                        });

                      case 6:
                        i = t.sent, n = i.data, l = (u = void 0 === n ? {} : n).tableAreaName, d = void 0 === l ? "" : l, 
                        h = u.tableName, p = {
                            tableAreaName: d,
                            tableName: void 0 === h ? "" : h
                        }, e.setData({
                            tableInfo: p
                        });

                      case 11:
                        t.next = 15;
                        break;

                      case 13:
                        t.prev = 13, t.t0 = t.catch(0);

                      case 15:
                      case "end":
                        return t.stop();
                    }
                }, t, null, [ [ 0, 13 ] ]);
            }))();
        },
        queryMemberCouponNum: function() {
            var e = this;
            return r(a.default.mark(function t() {
                var o, r, i;
                return a.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, t.next = 3, (0, d.queryCouponNum)();

                      case 3:
                        o = t.sent, r = o.data, i = void 0 === r ? 0 : r, e.setData({
                            couponCount: Number(i)
                        }), t.next = 10;
                        break;

                      case 8:
                        t.prev = 8, t.t0 = t.catch(0);

                      case 10:
                      case "end":
                        return t.stop();
                    }
                }, t, null, [ [ 0, 8 ] ]);
            }))();
        },
        handleShowTabbar: function(e) {
            var t = e.detail.isShow;
            this.setData({
                isShowTabbar: t
            });
        },
        handleShopInfoCancel: function() {
            this.setData({
                shopInfoPickerVisible: !1
            });
        },
        handleShopHeaderClickMore: function() {
            this.setData({
                shopInfoPickerVisible: !0
            });
        },
        handleRulesCancel: function() {
            this.setData({
                shopInfoPickerRulesVisible: !1
            });
        },
        handleRulesShow: function() {
            this.setData({
                shopInfoPickerRulesVisible: !0
            });
        },
        goToSearchPage: function() {
            var e = this.data.orderNo;
            this.$navigate("/pages/orderfood/search/index", {
                orderNo: e
            });
        },
        getMemberGuidFlag: function(e) {
            var t = e || {}, o = t.forceJoinMember, a = t.canJoinMember, r = !1, i = !1;
            try {
                if (!(0, s.getMemberFlag)()) switch (parseInt(o || 0, 10)) {
                  case 0:
                    break;

                  case 1:
                    r = !0;
                    break;

                  case 2:
                    i = !0;
                }
            } catch (e) {}
            return (0, s.setShowMemberGuideFlag)(r), (0, s.setForceMemberGuideFlag)(i), (0, 
            s.setMemberJoinEnableFlag)(a), i;
        },
        getShopActiveCoupon: function() {
            var e = this;
            return r(a.default.mark(function t() {
                var r, i, n, s, l, c, h;
                return a.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, t.next = 3, (0, d.queryActivityInfo)({
                            activityTypeIds: JSON.stringify([ "12" ]),
                            bizScene: "ENTER_SHOP_HEAD"
                        });

                      case 3:
                        if (r = t.sent, i = r.data, n = i.data) {
                            t.next = 8;
                            break;
                        }
                        return t.abrupt("return");

                      case 8:
                        s = n[0].canApply || !1, l = n[0].activityId || null, c = n[0].activityVoucherTemplate4ClientMDTOList || [], 
                        h = c.map(function(e) {
                            var t = e.endTime, a = void 0 === t ? "" : t, r = a ? (0, u.default)(a).format("YYYY.MM.DD") : "";
                            return o(o({}, e), {}, {
                                formatEndTime: r,
                                shopCouponCanApply: s
                            });
                        }), e.setData({
                            shopCouponList: h,
                            shopCouponCanApply: s,
                            shopCouponActiveId: l
                        }), t.next = 17;
                        break;

                      case 15:
                        t.prev = 15, t.t0 = t.catch(0);

                      case 17:
                      case "end":
                        return t.stop();
                    }
                }, t, null, [ [ 0, 15 ] ]);
            }))();
        },
        handleOneKeyGetCoupon: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.detail || {}, o = t.fetchJoinMember, a = void 0 !== o && o, r = (0, 
            s.getSceneType)(), i = r.sceneType;
            this.refreshJoinMemberSuccess(), this.handleGetCoupon(a), this.$root.$logClick(".keruyun_menu.header_details_click", {
                customScene: i
            });
        },
        handleGetCoupon: function() {
            var e = arguments, t = this;
            return r(a.default.mark(function o() {
                var r, i, n, s, u, l, d, c, p;
                return a.default.wrap(function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        return r = e.length > 0 && void 0 !== e[0] && e[0], t.$loading.showLoading("加载中..."), 
                        i = t.data.shopCouponActiveId, n = r ? "入会成功！\n" : "", o.prev = 4, o.next = 7, (0, 
                        h.queryCouponInfo)(i);

                      case 7:
                        s = o.sent, u = s.data, t.$loading.hideLoading(), l = u.data, t.handleGetCouponSuccess(l), 
                        d = l.some(function(e) {
                            return !1 === e.result && ("VOUCHER_TEMPLATE_NO_INVENTORY" === e.bizCodeList[0] || "VOUCHER_TEMPLATE_INVALID" === e.bizCodeList[0] || "VOUCHER_COUNT_OVER_LIMIT" === e.bizCodeList[0]);
                        }), c = l.some(function(e) {
                            return !1 === e.result && ("NO_ELE_ACCOUNT" === e.bizCodeList[0] || "NO_KB_ACCOUNT" === e.bizCodeList[0] || "NO_TAOBAO_ACCOUNT" === e.bizCodeList[0]);
                        }), p = l.some(function(e) {
                            return !1 === e.result && "APPLY_VOUCHER_ERROR" === e.bizCodeList[0];
                        }), !d || c || p || t.$toast.show(n + "部分券被领完啦，下次早点来哦", 1500), c && t.$toast.show(n + "领取成功！部分券需关联口碑、饿了么账号使用哦", 1500), 
                        p && !c && t.$customShowModal.show({
                            title: n + "发券可能存在延迟或失败，请稍后到券包查看领券结果",
                            bodyText: "",
                            cancelText: "继续点餐",
                            showCancel: !0,
                            confirmText: "去券包",
                            ok: function() {
                                t.$navigate("/pages/member/member-coupon-list/index");
                            }
                        }), l.every(function(e) {
                            return !1 === e.result && ("VOUCHER_TEMPLATE_NO_INVENTORY" === e.bizCodeList[0] || "VOUCHER_TEMPLATE_INVALID" === e.bizCodeList[0] || "VOUCHER_COUNT_OVER_LIMIT" === e.bizCodeList[0]);
                        }) && t.$toast.show(n + "券被领完啦，下次早点来哦", 1500), l.every(function(e) {
                            return !0 === e.result;
                        }) && t.$toast.show(n + "领取成功", 1500), o.next = 29;
                        break;

                      case 24:
                        o.prev = 24, o.t0 = o.catch(4), t.$loading.hideLoading(), t.$toast.show(n + "领券失败"), 
                        t.getShopActiveCoupon();

                      case 29:
                      case "end":
                        return o.stop();
                    }
                }, o, null, [ [ 4, 24 ] ]);
            }))();
        },
        handleGetCouponSuccess: function() {
            var e = arguments, i = this;
            return r(a.default.mark(function r() {
                var n, s, u, l;
                return a.default.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        if (n = e.length > 0 && void 0 !== e[0] ? e[0] : [], a.prev = 1, s = n.filter(function(e) {
                            var t = e.result;
                            return void 0 !== t && t;
                        }).reduce(function(e, o) {
                            var a = o.activityVoucherTemplate, r = (void 0 === a ? {} : a).voucherTemplateId;
                            return [].concat(t(e), [ r ]);
                        }, []), 0 !== (u = i.data.shopCouponList).length || 0 === s.length) {
                            a.next = 7;
                            break;
                        }
                        return i.getShopActiveCoupon(), a.abrupt("return");

                      case 7:
                        return l = u.filter(function(e) {
                            return s.includes(e.voucherTemplateId);
                        }).map(function(e) {
                            return o(o({}, e), {}, {
                                shopCouponCanApply: !1
                            });
                        }), i.setData({
                            shopCouponList: l,
                            shopCouponCanApply: !1
                        }), a.next = 11, i.queryMemberCouponNum();

                      case 11:
                        a.next = 15;
                        break;

                      case 13:
                        a.prev = 13, a.t0 = a.catch(1);

                      case 15:
                      case "end":
                        return a.stop();
                    }
                }, r, null, [ [ 1, 13 ] ]);
            }))();
        },
        handlePopupGetCouponSuccess: function(e) {
            var t = e.detail;
            this.refreshJoinMemberSuccess(), this.handleGetCouponSuccess(t);
        },
        refreshJoinMemberSuccess: function() {
            this.getMemberGuidFlag(this.data.shopBaseInfo), this.setData({
                memberFlag: !0,
                showMemberGuid: !1
            });
        },
        handleShowMemberGuideJoinModel: function(e) {
            var t = (0, s.getShowMemberGuideFlag)(), o = (0, s.getForceMemberGuideFlag)(), a = "";
            t ? a = "guide" : o && (a = "force"), this.$memberJoinOrderShowFooterSlotModal.init({
                type: "guide"
            });
            var r = (e.detail || {}).showRegMemberFromCart, i = void 0 !== r && r;
            this.localData.showRegMemberFromCart = i, this.localData.guideType = a;
        },
        handleMemberJoinOrderSuccess: function() {
            var e = this.localData, t = e.guideType, o = e.showRegMemberFromCart, a = this.data.isDinner;
            (0, b.getCartModel)("orderfood").getCartList(), this.setData({
                memberFlag: !0
            }), "force" === t ? this.setData({
                showMemberGuid: !1
            }) : "guide" === t && !a && o && this.$orderfoodCart.succes();
        },
        handleMemberJoinOrderFail: function(e) {
            this.$memberJoinOrderShowFooterSlotModal.close(), this.$toast.show("加入会员失败", 1500);
        },
        handleCancelJoinMember: function() {
            var e = this.localData, t = e.guideType, o = e.showRegMemberFromCart, a = this.data.isDinner, r = (0, 
            s.getMemberFlag)(), i = (0, s.getShopId)(), u = n.default.get("historyStoreList") || [];
            u.push(i), n.default.put("historyStoreList", u, {
                keep: !0
            }), "force" !== t || r || this.$toast.show("要先入会才能下单哦", 1500), "guide" === t && (n.default.put("originStoreId", i, {
                keep: !0
            }), (0, s.setRejectMemberGuideFlag)(), this.setData({
                rejectMemberFlag: !0
            }), !a && o && this.$orderfoodCart.succes());
        },
        handleLoadDataFail: function(e) {
            this.$memberJoinOrderShowFooterSlotModal.close();
        },
        showCouponModal: function() {
            var e, t = this, o = this.data, i = o.couponPopup, n = void 0 !== i && i, s = o.openStatus;
            !n && s && (this.localData.showCouponModalFlag = !0, this.$orderfoodCouponPopup.init({
                closeCallback: (e = r(a.default.mark(function e() {
                    return a.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t.localData.showCouponModalFlag = !1, e.next = 3, t.pretrigger.done("couponModelClose");

                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                })), function() {
                    return e.apply(this, arguments);
                })
            }).show());
        },
        scrollToMustAddDishCate: function() {
            var e = this;
            return r(a.default.mark(function t() {
                return a.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, e.pretrigger.wait("dishList:canScroll");

                      case 2:
                        e.$orderfoodDishlist.scrollIntoMustAddCate();

                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        }
    }
});