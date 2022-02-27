var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../@babel/runtime/regenerator")), a = require("../../@babel/runtime/helpers/objectSpread2"), r = require("../../@babel/runtime/helpers/asyncToGenerator"), o = e(require("../../m/zk/z9")), i = require("./services/index"), n = require("../../l/wh"), s = require("../../l/w9"), d = e(require("../../m/zl/59")), l = e(require("./business/hospital_orderlist")), h = d.default.getSync("systemInfo").statusBarHeight, u = {
    MEMBER_MY: "pages/member/member-my/index"
};

(0, o.default)({
    spmInfo: {
        spmAPos: "a2f8y",
        spmBPos: "b43169074",
        autoPv: !1
    },
    data: {
        tabs: [],
        showTabs: !1,
        activeTab: "",
        isShowTabbar: !1,
        pageInit: !1,
        navigationBarHeight: 44 + h,
        isShowNavigationBack: !0
    },
    components: {
        orderlistFoodOrder: "orderlist-food-order",
        navigationBar: "navigation-bar"
    },
    localData: {
        tabsData: [ {
            title: "点餐",
            value: "food-order",
            key: "dishOrder"
        }, {
            title: "团购",
            value: "group-order",
            key: "koubeiOrder"
        }, {
            title: "外卖",
            value: "takeout-order",
            key: "takeOutOrder"
        }, {
            title: "券包",
            value: "coupon-dish",
            key: "couponDish"
        } ],
        fromPage: ""
    },
    onShow: function() {
        var e = this.$initBottomTabBar();
        this.setData({
            isShowTabbar: e
        });
        var t = this.data, a = t.pageInit, r = t.activeTab;
        a && "food-order" === r && (this.$orderlistFoodOrder = this.getComponentById("orderlistFoodOrder"), 
        this.$orderlistFoodOrder && this.$orderlistFoodOrder.onShowReloadPage());
        var o = this.$getLogger(), i = (0, n.getSceneType)().sceneType;
        o.setPageParams({
            paymentMode: i
        }), o.onShow(this.spmInfo);
    },
    onHide: function() {
        var e = this.data, t = e.pageInit, a = e.activeTab;
        t && "food-order" === a && (this.$orderlistFoodOrder = this.getComponentById("orderlistFoodOrder"), 
        this.$orderlistFoodOrder && Object.prototype.hasOwnProperty.call(this.$orderlistFoodOrder, "onUnloadPageHandle") && this.$orderlistFoodOrder.onUnloadPageHandle());
    },
    onUnload: function() {
        var e = this.data, t = e.pageInit, a = e.activeTab;
        t && "food-order" === a && (this.$orderlistFoodOrder = this.getComponentById("orderlistFoodOrder"), 
        this.$orderlistFoodOrder && Object.prototype.hasOwnProperty.call(this.$orderlistFoodOrder, "onUnloadPageHandle") && this.$orderlistFoodOrder.onUnloadPageHandle());
    },
    onLoad: function() {
        if (wx.canIUse("hideHomeButton") && wx.hideHomeButton(), (0, s.checkXcxTmlCode)("HOSPITAL")) {
            var e = new l.default(this);
            e.handleTabsForHospital(), e.activeHospitalTabs();
        } else this.getTabsDataByStatus();
    },
    onReady: function() {
        var e = this;
        this.$navigationBar = this.getComponentById("navigationBar");
        var t = (this.query || {}).fromPage;
        this.localData.fromPage = t;
        var a = (0, s.isTabBarPage)("order");
        this.setData({
            isShowNavigationBack: !a
        }, function() {
            e.$logAvailableTrace();
        });
    },
    methods: {
        handleShowTabbar: function(e) {
            var t = e.detail.isShow;
            this.setData({
                isShowTabbar: t
            });
        },
        handleTabChange: function(e) {
            var t = e.detail.tab;
            this.setData({
                activeTab: t.value
            });
        },
        handlePageInit: function() {
            this.setData({
                pageInit: !0
            });
        },
        getTabsDataByStatus: function() {
            var e = this;
            return r(t.default.mark(function r() {
                var o, s, d, l, h, u, c, g, b;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, t.next = 3, (0, i.getTabsByStatus)();

                      case 3:
                        if (o = t.sent, s = o.data, d = a(a({}, (void 0 === s ? {} : s).data), {}, {
                            couponDish: !0
                        }) || {}, l = e.localData.tabsData, 0 !== (h = l.filter(function(e) {
                            return !0 === d[e.key];
                        })).length) {
                            t.next = 12;
                            break;
                        }
                        return e.setData({
                            pageInit: !0
                        }), t.abrupt("return");

                      case 12:
                        u = h[0] || {}, c = u.value || "", e.setData({
                            activeTab: c,
                            tabs: h,
                            showTabs: 1 !== h.length
                        }), g = (0, n.getSceneType)(), b = g.sceneType, e.$root.$logClick(".keruyun_order_list.tab_click", {
                            customType: c,
                            paymentMode: b
                        }), t.next = 22;
                        break;

                      case 19:
                        t.prev = 19, t.t0 = t.catch(0), e.setData({
                            pageInit: !0
                        });

                      case 22:
                      case "end":
                        return t.stop();
                    }
                }, r, null, [ [ 0, 19 ] ]);
            }))();
        },
        handleEmptyButton: function() {
            this.$relaunch("/pages/orderfood/index");
        },
        handleBack: function() {
            var e = getCurrentPages(), t = this.localData.fromPage;
            if (1 === e.length) {
                var a = u[t] || t || "pages/home/index";
                this.$relaunch(decodeURIComponent("/" + a));
            } else this.$back();
        }
    }
});