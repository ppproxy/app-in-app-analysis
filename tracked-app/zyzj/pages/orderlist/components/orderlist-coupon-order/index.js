var e = require("../../../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../../../@babel/runtime/helpers/slicedToArray"), a = e(require("../../../../@babel/runtime/regenerator")), o = require("../../../../@babel/runtime/helpers/asyncToGenerator"), i = e(require("../../../../m/zk/za")), r = e(require("../../../../m/zt")), n = require("../../services/index"), s = e(require("../../../../m/zl/59"));

(0, i.default)({
    name: "orderlist-coupon-order",
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
        timeFormat: "YYYY-MM-DD HH:mm",
        windowHeight: 0,
        pageHeightArr: [],
        currentRenderIndex: 0,
        wholeOrderList: []
    },
    components: {
        loading: "loading",
        toast: "toast"
    },
    created: function() {
        var e = s.default.getSync("systemInfo").windowHeight;
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
        getOrderList: function() {
            var e = arguments, t = this;
            return o(a.default.mark(function o() {
                var i, s, l, d, g, h, c, u, p, f, D, m, w, L, v, H, M, b, $, k, y, I, P, T;
                return a.default.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return i = e.length > 0 && void 0 !== e[0] ? e[0] : {}, s = i.showLoading, l = void 0 !== s && s, 
                        d = i.reload, g = void 0 !== d && d, h = i.raceLoading, c = void 0 !== h && h, u = !1, 
                        p = t.data, f = p.pageNo, D = p.pageSize, m = p.pageInit, l && t.$loading && t.$loading.showLoading("加载中..."), 
                        1, g || c || m || t.setData({
                            showSkeleton: !0
                        }), c && (t.timeoutHandler = setTimeout(function() {
                            u || t.$loading && t.$loading.showLoading("加载中...");
                        }, 800), t.setData({
                            showLoadingMask: !0
                        })), a.prev = 7, a.next = 10, (0, n.getCouponOrderList)({
                            pageNo: g || c ? 1 : f,
                            pageSize: D
                        });

                      case 10:
                        w = a.sent, u = !0, t.$loading && t.$loading.hideLoading(), t.timeoutHandler && clearTimeout(t.timeoutHandler), 
                        t.setData({
                            showSkeleton: !1,
                            showLoadingMask: !1
                        }), (c || g) && t._resetData(), L = (w || {}).data, v = void 0 === L ? {} : L, H = t.data.pageNo, 
                        M = v.data, b = M.totalPage, $ = M.list, k = void 0 === $ ? [] : $, y = H - 1, t.localData.currentRenderIndex = y, 
                        t.localData.wholeOrderList[y] = k, I = {}, P = new Array(H).fill(0), y > 2 ? (P.forEach(function(e, a) {
                            a < P.length - 2 ? P[a] = {
                                height: t.localData.pageHeightArr[a]
                            } : P[a] = t.localData.wholeOrderList[a];
                        }), I.orderList = P) : g || c ? (I.orderList = [ k ], I.scrollTop = 0) : I["orderList[".concat(y, "]")] = k, 
                        t.setData({
                            totalPage: b,
                            loadingMore: !1,
                            hasMoreData: H < +b,
                            pageInit: !0,
                            pageEmptyData: 0 == +b
                        }, {
                            instant: !0
                        }), t.triggerEvent("handlePageInit"), t.setData(I, function() {
                            0 !== b && t.getPageHeight(H);
                        }, {
                            instant: !0
                        }), a.next = 37;
                        break;

                      case 30:
                        a.prev = 30, a.t0 = a.catch(7), t.$loading && t.$loading.hideLoading(), t.timeoutHandler && clearTimeout(t.timeoutHandler), 
                        t.setData({
                            showSkeleton: !1,
                            showLoadingMask: !1
                        }), T = r.default.MINI_PATH, t.$root.$relaunch("/pages/page-result/index", {
                            statusCode: "SERVER_ERROR",
                            fromPage: T.ORDER_LIST_PATH
                        }, !0);

                      case 37:
                      case "end":
                        return a.stop();
                    }
                }, o, null, [ [ 7, 30 ] ]);
            }))();
        },
        scrollToLower: function() {
            var e = this, t = this.data, a = t.pageNo, o = t.loadingMore, i = t.hasMoreData, r = t.pageInit;
            !o && i && r && this.setData({
                pageNo: a + 1,
                loadingMore: !0
            }, function() {
                e.getOrderList();
            }, {
                instant: !0
            });
        },
        scroll: function(e) {
            for (var t = e.detail.scrollTop, a = 0, o = 0, i = this.data.pageNo, r = this.localData, n = r.pageHeightArr, s = r.windowHeight, l = r.currentRenderIndex, d = r.wholeOrderList, g = 0; g < n.length; g++) {
                if ((a += n[g]) > t + s) {
                    o = g;
                    break;
                }
                if (g === n.length - 1) {
                    o = g;
                    break;
                }
            }
            if (o !== l) {
                var h = new Array(i).fill(0);
                h.forEach(function(e, t) {
                    h[t] = o - 1 <= t && t <= o + 1 ? d[t] : {
                        height: n[t]
                    };
                }), this.localData.currentRenderIndex = o, this.setData({
                    orderList: h
                }, {
                    instant: !0
                });
            }
        },
        getPageHeight: function(e) {
            var a = this, o = e - 1;
            wx.createSelectorQuery().in(this.$origincomponent).select("#order-list_page".concat(o)).boundingClientRect().exec(function(e) {
                var i = t(e, 1)[0].height;
                a.localData.pageHeightArr[o] = i;
            });
        },
        goOrderDetail: function(e) {
            var t = e.currentTarget.dataset, a = t.orderno, o = t.id;
            this.$root.$navigate("/pages/orderdetail-coupon/index", {
                orderNo: a,
                id: o
            }), this.$root.$logClick(".orderclick");
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
            this.timeoutHandler && clearTimeout(this.timeoutHandler), this.setData({
                showLoadingMask: !1
            });
        },
        forbidMove: function() {
            return null;
        }
    }
});