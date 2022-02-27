var e = require("../../../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../../../@babel/runtime/helpers/slicedToArray");

require("../../../../@babel/runtime/helpers/Arrayincludes");

var a = require("../../../../@babel/runtime/helpers/defineProperty"), r = e(require("../../../../@babel/runtime/regenerator")), o = require("../../../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../../../m/zk/za")), i = e(require("../../../../m/zt")), s = require("../../services/index"), d = require("../../../../v/ci/n"), l = e(require("../../../../l/wd/wi.js")), u = e(require("../../../../m/zl/59")), c = require("../../../../l/wh"), h = require("../../../../l/w9"), g = [ "WAIT_PAY", "WAIT_RECEIPT", "RECEIPTED", "COOKING", "WAIT_TAKE", "UPDATING", "DELIVERY_WAIT_TO" ];

(0, n.default)({
    name: "点餐订单列表",
    data: {
        orderList: [],
        hasMoreData: !0,
        loadingMore: !1,
        pageEmptyData: !1,
        pageInit: !1,
        showSkeleton: !1,
        showLoadingMask: !1,
        pageNo: 1,
        pageSize: 15,
        totalPage: 0,
        scrollTop: 0
    },
    properties: {
        isShowTabbar: {
            type: Boolean,
            value: !1
        },
        showHeaderTabs: {
            type: Boolean,
            value: !0
        },
        navigationBarHeight: {
            type: Number,
            value: 0
        }
    },
    localData: {
        assistInfoList: [],
        timeFormat: "YYYY-MM-DD HH:mm",
        windowHeight: 0,
        pageHeightArr: [],
        currentRenderIndex: 0,
        wholeOrderList: [],
        needDetailStatus: [ "RECEIPTED", "COOKING", "WAIT_TAKE" ]
    },
    components: {
        orderListItem: "order-list-item",
        loading: "loading",
        toast: "toast"
    },
    created: function() {
        var e = u.default.getSync("systemInfo").windowHeight;
        this.localData.windowHeight = e;
    },
    ready: function() {
        this.$loading = this.getComponentById("loading"), this.$toast = this.getComponentById("toast"), 
        this.getOrderList({}), this.needPolling = !0;
    },
    detached: function() {
        this.onUnloadPageHandle();
    },
    methods: {
        clearBatchTimer: function() {
            this.batchTimer && (clearTimeout(this.batchTimer), this.batchTimer = null);
        },
        finishOrder: function(e) {
            var t = e.detail, a = t.orderNo, r = t.page, o = t.index;
            this.updateOrderStatusInList({
                orderNo: a,
                page: r,
                index: o,
                orderStatus: "SUCCESS",
                needDetailsStatusInOrderList: !1
            });
        },
        getTop5: function() {
            var e = this.data.orderList, t = [];
            if (Array.isArray(e) && e.length > 0) {
                var a = Math.min(e[0].length, 5), r = e[0];
                Array.isArray(r) && r.every(function(e) {
                    return t.length < a && g.includes(e.orderStatus) && t.push({
                        orderNo: e.orderNo,
                        orgId: e.orgId
                    }), !(t.length >= a);
                });
            }
            return t;
        },
        batchQueryOrderAssistInfo: function() {
            var e = this;
            return o(r.default.mark(function t() {
                var a, o, n, i, s;
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (e.clearBatchTimer(), 0 !== (a = e.getTop5()).length) {
                            t.next = 4;
                            break;
                        }
                        return t.abrupt("return");

                      case 4:
                        return t.prev = 4, t.next = 7, (0, d.queryOrderAssistInfo)({
                            orgIdMapOrderNoListStr: JSON.stringify(a),
                            scene: "ORDER_LIST"
                        });

                      case 7:
                        o = t.sent, n = o.data.assistInfoList, (i = void 0 === n ? [] : n).length > 0 && e.handleUpdateOrderStatus(i), 
                        s = !1, i.every(function(e) {
                            return !g.includes(e.orderStatus) || (s = !0, !1);
                        }), (0 === i.length || s) && e.pollingOderStatus(), t.next = 20;
                        break;

                      case 16:
                        t.prev = 16, t.t0 = t.catch(4), console.error(t.t0), e.pollingOderStatus();

                      case 20:
                      case "end":
                        return t.stop();
                    }
                }, t, null, [ [ 4, 16 ] ]);
            }))();
        },
        handleUpdateOrderStatus: function(e) {
            var t = this.data.orderList[0];
            if (e.length > 0) {
                var a = this.localData.needDetailStatus;
                e.forEach(function(e) {
                    for (var r = 0; r < t.length; r++) {
                        var o = t[r];
                        if (e.orderNo === o.orderNo) {
                            o.orderStatus = e.orderStatus, o.tableName = e.tableName, o.mealCode = e.mealCode, 
                            o.takeCabinetNum = e.takeCabinetNum, o.verificationMealBarCode = e.verificationMealBarCode, 
                            o.verificationMealQrCode = e.verificationMealQrCode;
                            var n = (0 === o.takeYourselfMode || 3 === o.takeYourselfMode) && a.includes(o.orderStatus), i = 2 === o.takeYourselfMode && "WAIT_TAKE" === o.orderStatus;
                            o.needDetailsStatusInOrderList = !(!n && !i), t[r] = o;
                            break;
                        }
                    }
                });
                var r = this.data.orderList;
                r[0] = t, this.setData({
                    orderList: r
                });
            }
        },
        updateOrderStatusInList: function(e) {
            var t, r = e.page, o = e.index, n = e.orderStatus, i = e.needDetailsStatusInOrderList;
            this.setData((a(t = {}, "orderList[" + r + "][" + o + "].orderStatus", n), a(t, "orderList[" + r + "][" + o + "].needDetailsStatusInOrderList", i), 
            t));
        },
        pollingOderStatus: function() {
            var e = this;
            return o(r.default.mark(function t() {
                return r.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        e.needPolling && (e.batchTimer = setTimeout(function() {
                            e.batchQueryOrderAssistInfo();
                        }, 2e3));

                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        getOrderList: function() {
            var e = arguments, t = this;
            return o(r.default.mark(function a() {
                var o, n, d, u, c, h, g, f, p, v, m, S, b, w, D, T, I, L, O, $, x, k, N, A, E, M;
                return r.default.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return o = e.length > 0 && void 0 !== e[0] ? e[0] : {}, n = o.showLoading, d = void 0 !== n && n, 
                        u = o.reload, c = void 0 !== u && u, h = o.raceLoading, g = void 0 !== h && h, f = !1, 
                        p = t.data, v = p.pageNo, m = p.pageSize, S = p.pageInit, d && t.$loading && t.$loading.showLoading("加载中..."), 
                        1, c || g || S || t.setData({
                            showSkeleton: !0
                        }), g && (t.timeoutHandler = setTimeout(function() {
                            f || t.$loading && t.$loading.showLoading("加载中...");
                        }, 800), t.setData({
                            showLoadingMask: !0
                        })), a.prev = 7, a.next = 10, (0, s.getOrderList)({
                            pageNo: c || g ? 1 : v,
                            pageSize: m
                        });

                      case 10:
                        b = a.sent, f = !0, t.$loading && t.$loading.hideLoading(), t.timeoutHandler && clearTimeout(t.timeoutHandler), 
                        t.clearBatchTimer(), t.setData({
                            showSkeleton: !1,
                            showLoadingMask: !1
                        }), (g || c) && t._resetData(), w = (b || {}).data, D = void 0 === w ? {} : w, T = t.data.pageNo, 
                        I = D.data, L = I.totalPage, O = I.list, $ = void 0 === O ? [] : O, x = t.localData.needDetailStatus, 
                        $.map(function(e, t) {
                            e.index = t + (10 * v - 10), 1 === v && t < 5 && (0 != +e.takeYourselfMode && 3 != +e.takeYourselfMode || !x.includes(e.orderStatus) ? 2 == +e.takeYourselfMode && "WAIT_TAKE" === e.orderStatus && (e.needDetailsStatusInOrderList = !0) : e.needDetailsStatusInOrderList = !0);
                        }), k = $.map(function(e) {
                            var a = e.bizDate;
                            return Object.assign({}, e, {
                                bizDate: (0, l.default)(a).format(t.localData.timeFormat)
                            });
                        }), N = T - 1, t.localData.currentRenderIndex = N, t.localData.wholeOrderList[N] = k, 
                        A = {}, E = new Array(T).fill(0), N > 2 ? (E.forEach(function(e, a) {
                            a < E.length - 2 ? E[a] = {
                                height: t.localData.pageHeightArr[a]
                            } : E[a] = t.localData.wholeOrderList[a];
                        }), A.orderList = E) : c || g ? (A.orderList = [ k ], A.scrollTop = 0) : A["orderList[".concat(N, "]")] = k, 
                        t.setData({
                            totalPage: L,
                            loadingMore: !1,
                            hasMoreData: T < +L,
                            pageInit: !0,
                            pageEmptyData: 0 == +L
                        }, {
                            instant: !0
                        }), t.triggerEvent("handlePageInit"), t.setData(A, function() {
                            0 !== L && (t.getPageHeight(T), t.pollingOderStatus());
                        }, {
                            instant: !0
                        }), a.next = 41;
                        break;

                      case 34:
                        a.prev = 34, a.t0 = a.catch(7), t.$loading && t.$loading.hideLoading(), t.timeoutHandler && clearTimeout(t.timeoutHandler), 
                        t.setData({
                            showSkeleton: !1,
                            showLoadingMask: !1
                        }), M = i.default.MINI_PATH, t.$root.$relaunch("/pages/page-result/index", {
                            statusCode: "SERVER_ERROR",
                            fromPage: M.ORDER_LIST_PATH
                        }, !0);

                      case 41:
                      case "end":
                        return a.stop();
                    }
                }, a, null, [ [ 7, 34 ] ]);
            }))();
        },
        scrollToLower: function() {
            var e = this, t = this.data, a = t.pageNo, r = t.loadingMore, o = t.hasMoreData, n = t.pageInit;
            !r && o && n && this.setData({
                pageNo: a + 1,
                loadingMore: !0
            }, function() {
                e.getOrderList();
            }, {
                instant: !0
            });
        },
        scroll: function(e) {
            for (var t = e.detail.scrollTop, a = 0, r = 0, o = this.data.pageNo, n = this.localData, i = n.pageHeightArr, s = n.windowHeight, d = n.currentRenderIndex, l = n.wholeOrderList, u = 0; u < i.length; u++) {
                if ((a += i[u]) > t + s) {
                    r = u;
                    break;
                }
                if (u === i.length - 1) {
                    r = u;
                    break;
                }
            }
            if (r !== d) {
                var c = new Array(o).fill(0);
                c.forEach(function(e, t) {
                    c[t] = r - 1 <= t && t <= r + 1 ? l[t] : {
                        height: i[t]
                    };
                }), this.localData.currentRenderIndex = r, this.setData({
                    orderList: c
                }, {
                    instant: !0
                });
            }
        },
        getPageHeight: function(e) {
            var a = this, r = e - 1;
            wx.createSelectorQuery().in(this.$origincomponent).select("#order-list_page".concat(r)).boundingClientRect().exec(function(e) {
                var o = t(e, 1)[0].height;
                a.localData.pageHeightArr[r] = o;
            });
        },
        handleEmptyButton: function() {
            this.$root.$relaunch("/pages/orderfood/index");
        },
        _resetData: function() {
            this.setData({
                pageNo: 1,
                totalPage: 0,
                hasMoreData: !0,
                loadingMore: !1,
                pageEmptyData: !1
            }, {
                instant: !0
            }), this.localData.wholeOrderList = [], this.localData.pageHeightArr = [], this.localData.currentRenderIndex = 0;
        },
        reloadPage: function() {
            var e = this;
            this.setData({
                pageNo: 1
            }, function() {
                e.getOrderList({
                    showLoading: !0,
                    reload: !0
                });
            });
        },
        onShowReloadPage: function() {
            var e = this;
            this.needPolling = !0, this.setData({
                pageNo: 1
            }, function() {
                e.getOrderList({
                    raceLoading: !0
                });
            });
        },
        onUnloadPageHandle: function() {
            this.needPolling = !1, this.timeoutHandler && clearTimeout(this.timeoutHandler), 
            this.clearBatchTimer(), this.setData({
                showLoadingMask: !1
            });
        },
        calcOrder: function(e) {
            var t = this;
            return o(r.default.mark(function a() {
                var o, n, i, s, d, l, u, c, h, g, f;
                return r.default.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return o = e.detail, n = o.orderNo, i = o.orderStatus, s = o.orgId, a.next = 3, 
                        t.getOrderCurrentStatus(n);

                      case 3:
                        if (null !== (d = a.sent)) {
                            a.next = 6;
                            break;
                        }
                        return a.abrupt("return");

                      case 6:
                        u = (l = d || {}).orderStatus, c = l.combineTableOrderFlag, h = void 0 === c ? "false" : c, 
                        g = l.allowJumpToAdjustPageAfterDishChange, f = void 0 !== g && g, u === i ? f ? t.$root.$navigate("/pages/zcsettleaccount/index", {
                            orderId: n,
                            shopId: s
                        }) : t.reloadPage() : "true" === h ? (t.$toast.show("订单已被并入其他桌台，请扫新桌码结账", 2500), 
                        setTimeout(function() {
                            t.$root.$relaunch("/pages/lightshop/index");
                        }, 2500)) : t.handleOrderStatus(u, n);

                      case 8:
                      case "end":
                        return a.stop();
                    }
                }, a);
            }))();
        },
        addMoreFood: function(e) {
            var t = this;
            return o(r.default.mark(function a() {
                var o, n, i, s, d, l, u, g, f, p;
                return r.default.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return o = e.detail, n = o.orderNo, i = o.orderStatus, s = o.tableNo, d = o.orgId, 
                        a.next = 3, t.getOrderCurrentStatus(n);

                      case 3:
                        if (null !== (l = a.sent)) {
                            a.next = 6;
                            break;
                        }
                        return a.abrupt("return");

                      case 6:
                        if (g = (u = l || {}).orderStatus, f = u.combineTableOrderFlag, p = void 0 === f ? "false" : f, 
                        g !== i) {
                            a.next = 16;
                            break;
                        }
                        if ((0, c.getShopId)() === d) {
                            a.next = 12;
                            break;
                        }
                        return a.next = 12, (0, h.switchStore)({
                            shopId: d
                        });

                      case 12:
                        (0, c.setGlobalTableId)(s), t.$root.$relaunch("/pages/orderfood/index", {
                            actionType: "addSubOrderCart",
                            actionValue: n
                        }), a.next = 17;
                        break;

                      case 16:
                        "true" === p ? (t.$toast.show("订单已被并入其他桌台，请扫新桌码加菜", 2500), setTimeout(function() {
                            t.$root.$relaunch("/pages/lightshop/index");
                        }, 2500)) : t.handleOrderStatus(g, n);

                      case 17:
                      case "end":
                        return a.stop();
                    }
                }, a);
            }))();
        },
        goOrderDetail: function(e) {
            var t = this;
            return o(r.default.mark(function a() {
                var o, n, i, s, d, l, u, c;
                return r.default.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return o = e.detail, n = o.orderNo, i = o.orderStatus, a.next = 3, t.getOrderCurrentStatus(n);

                      case 3:
                        if (null !== (s = a.sent)) {
                            a.next = 6;
                            break;
                        }
                        return a.abrupt("return");

                      case 6:
                        l = (d = s || {}).orderStatus, u = d.combineTableOrderFlag, c = void 0 === u ? "false" : u, 
                        l === i ? t.$root.$navigate("/pages/zcordercheck/index", {
                            orderNo: n
                        }) : "true" === c ? (t.$toast.show("订单已被并入其他桌台，请扫新桌码加菜", 2500), setTimeout(function() {
                            t.$root.$relaunch("/pages/lightshop/index");
                        }, 2500)) : t.$root.$navigate("/pages/orderdetail/index", {
                            orderNo: n
                        });

                      case 8:
                      case "end":
                        return a.stop();
                    }
                }, a);
            }))();
        },
        getOrderCurrentStatus: function(e) {
            var t = this;
            return o(r.default.mark(function a() {
                var o, n, i;
                return r.default.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return t.$loading && t.$loading.showLoading("加载中..."), a.prev = 1, a.next = 4, (0, 
                        s.getOrderStatus)({
                            orderNo: e
                        });

                      case 4:
                        return o = a.sent, n = (o || {}).data, i = void 0 === n ? {} : n, t.$loading && t.$loading.hideLoading(), 
                        a.abrupt("return", i.data);

                      case 10:
                        return a.prev = 10, a.t0 = a.catch(1), t.$loading && t.$loading.hideLoading(), t.$toast.show(a.t0.errorMessage, 1e3), 
                        a.abrupt("return", null);

                      case 15:
                      case "end":
                        return a.stop();
                    }
                }, a, null, [ [ 1, 10 ] ]);
            }))();
        },
        handleOrderStatus: function(e, t) {
            var a = this;
            switch (e) {
              case "CLOSED":
                this.$toast.show("订单已被关闭", 1e3), setTimeout(function() {
                    a.$root.$navigate("/pages/orderdetail/index", {
                        orderNo: t
                    });
                }, 1e3);
                break;

              case "SUCCESS":
                this.$toast.show("订单已被支付", 1e3), setTimeout(function() {
                    a.$root.$navigate("/pages/orderdetail/index", {
                        orderNo: t
                    });
                }, 1e3);
                break;

              case "EATING":
                break;

              case "REFUND":
                this.$toast.show("订单已退款", 1e3), setTimeout(function() {
                    a.$root.$navigate("/pages/orderdetail/index", {
                        orderNo: t
                    });
                }, 1e3);
                break;

              default:
                this.reloadPage();
            }
        },
        forbidMove: function() {
            return null;
        }
    }
});