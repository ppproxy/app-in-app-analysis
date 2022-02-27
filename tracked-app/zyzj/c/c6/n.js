var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../@babel/runtime/helpers/slicedToArray"), o = e(require("../../@babel/runtime/regenerator")), i = require("../../@babel/runtime/helpers/asyncToGenerator"), a = e(require("../../m/zk/za")), n = e(require("../../m/zl/59")), r = e(require("../../m/zl/5o")), s = (e(require("../../m/5y")), 
require("../../l/wm")), l = require("../../l/wa"), c = require("./5j/n"), u = require("../../l/wh.js"), h = require("../../m/z8/zj"), d = e(require("./w2")), p = require("../../pages/orderfood/models/dish-list.js");

function m(e) {
    var t = [], o = {}, i = {};
    return e.forEach(function(e) {
        var a = e.id;
        i[a] = 1, e.dishList.forEach(function(e) {
            var i = e.dishId;
            o[i] = a, t.push("".concat(a, "-").concat(i));
        });
    }), {
        dishItemIddList: t,
        dishIdMap: o,
        categoryIdMap: i
    };
}

function f() {}

(0, a.default)((0, d.default)({
    name: "点餐页-列表",
    properties: {
        openStatus: {
            type: Boolean,
            value: !0
        },
        memberFlag: {
            type: Boolean,
            value: !1
        },
        shopBaseInfo: {
            type: Object,
            value: {}
        },
        shopActivityList: {
            type: Array,
            value: []
        },
        showMemberGuid: {
            type: Boolean,
            value: !1
        },
        shopCouponList: {
            type: Array,
            value: []
        },
        couponCount: {
            type: Number,
            value: 0
        },
        dishListOrderedMap: {
            type: Object,
            value: {}
        },
        tableInfo: {
            type: Object,
            value: null
        },
        distanceDesc: {
            type: String,
            value: ""
        }
    },
    observers: {
        showMemberGuid: function(e) {
            this.resetShowMemberGuid(e);
        }
    },
    components: {
        recycleList: "recycle-list",
        advertiseCarousel: "advertise-carousel"
    },
    data: {
        globalComponents: [],
        menuAndDish: [],
        collapseDishData: {},
        shopDecorationData: {},
        showMG: !1,
        isScroll: !1,
        showGotoTop: !1,
        recommendedDish: {},
        dishDot: {},
        customScene: "",
        scrollToViewId: "",
        marketingColor: (0, u.getMarketingColor)(),
        wrapStyle: {
            width: 558
        },
        dotStyle: {
            bottom: 40
        },
        showLeftMenuIcon: !1,
        dishMenuColumn: "",
        themeColor: "",
        showMustAddBg: !1,
        showMustAddTips: !1,
        mustAddDishCheckResult: !1,
        isCartExit: !1
    },
    logProps: {
        $$expElement: [ ".component-recycle-list__admission" ]
    },
    localData: {
        listHeight: 0,
        changeScrollTop: null,
        dishItems: {},
        $observer: null,
        $selectorQuery: null,
        groupInViewport: [],
        scrollTop: 0,
        scrollDirect: "up",
        marketingIcons: [ "IconCouponPackage" ],
        dishIdMap: {},
        categoryIdMap: {},
        cateScrollLinked: !0,
        mistakeTop: 0,
        tempDishIdArr: [],
        dishMenuColumn: "",
        cmpInit: !1
    },
    ready: function() {
        var e = this, t = n.default.getSync("systemInfo").statusBarHeight, o = (0, u.getThemeColor)();
        this.setData({
            themeColor: o,
            statusBarHeight: t,
            navigationBarHeight: 44 + t
        }), (0, c.bindEmitter)(this, "self").$on("changeScrollTop", function(t) {
            var o = t.top, i = t.callback, a = void 0 === i ? f : i;
            e.localData.changeScrollTop = o, e.setData({
                scrollTop: o
            }, function() {
                a();
            });
        }, this);
        var i = (0, p.getDishListModel)();
        i.bindDishMenuColumnChange(function(t) {
            e.setData({
                dishMenuColumn: t
            }), e.localData.dishMenuColumn = t;
        }, !0), i.bindDishListChange(function(t) {
            var o = t.menuAndDish, i = t.shopDecorationData, a = t.showLeftMenuIcon;
            e.init(o, i, a);
        }, !0), i.bindCollapseDishDataChange(function(t) {
            var o = t.collapseDishData;
            e.setData({
                collapseDishData: o
            });
        }, !0), i.bindtWaistRecommendDish(function(t) {
            var o = t.waistRecommendDishes;
            e.setData({
                waistRecommendDishes: o
            });
        }, !0), i.bindGlobalComponentsChange(function(t) {
            var o = t.globalComponents;
            e.setData({
                globalComponents: o
            }, {
                instant: !0
            });
        }, !0), (0, c.bindEmitter)(this, "self").$on("scrollToGroup", function(t) {
            var o = t.id;
            e.setData({
                scrollToViewId: "group-".concat(o),
                isScroll: !1
            }, function() {
                e.calcOffsetMistake(o);
            });
        }, this);
        var a = (0, h.getCartModel)("orderfood");
        a.bindDishDotChange(function(t) {
            var o = t.dishDot, i = Object.keys(o || {});
            e.setData({
                dishDot: o,
                isCartExit: i.length > 0
            });
        }), a.bindMustAddDishCheckResultChange(function(t) {
            var o = t.result, i = {
                mustAddDishCheckResult: o
            };
            o && (i.showMustAddTips = !1), e.setData(i);
        }, !0);
    },
    detached: function() {
        (0, c.bindEmitter)(this, "self").$off("changeScrollTop", this), (0, c.bindEmitter)(this, "self").$off("scrollToGroup", this), 
        this.$root && this.$root.$off("dishDataInit", this), this.distoryObserver(), this.localData.$selectorQuery = null;
    },
    methods: {
        handleOpenDishDetail: function(e) {
            var t = this;
            return i(o.default.mark(function i() {
                var a, n, r, s, l, c;
                return o.default.wrap(function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        return a = t.data.openStatus, n = e.detail, r = {}, s = !1, n.cookbookDishSkuList && n.cookbookDishSkuList.length && (s = n.cookbookDishSkuList.every(function(e) {
                            return 0 === e.dishStockDecimal;
                        })), r = "N" === n.multiSpecFlag ? n.cookbookDishSkuList[0] : n.cookbookDishSkuList, 
                        o.next = 8, t.scrollToDish(n.dishId);

                      case 8:
                        !s && n.cookbookDishSkuList && setTimeout(function() {
                            t.$root.$emit("openSpecs", {
                                dish: n,
                                showSku: r,
                                isSetMeal: !1,
                                btnFlag: !1,
                                isFromDetailPage: !1,
                                openStatus: a,
                                customType: "运营位浮层",
                                setMealCallback: function(e) {
                                    t.triggerEvent("handleNumChange", e);
                                }
                            }, t);
                        }, 1e3), l = (0, u.getSceneType)(), c = l.sceneType, t.$root.$logClick(".keruyun_menu.operation", {
                            customScene: c
                        });

                      case 11:
                      case "end":
                        return o.stop();
                    }
                }, i);
            }))();
        },
        scrollEnd: (0, s.debounce)(function() {
            this.setData({
                isScroll: !1
            });
        }, 1e3),
        handleGotoTop: function() {
            var e = this;
            this.setData({
                scrollToViewId: "dish-list__top-line"
            }), setTimeout(function() {
                (0, c.bindEmitter)(e, "self").$emit("changeCurrentIndex", {
                    groupIndex: 0,
                    animation: !1
                }, e), e.setData({
                    scrollToViewId: ""
                });
            }, 100);
        },
        jumpToCouponListPage: function() {
            this.$root.$navigate("/pages/member/member-coupon-list/index", {
                origin: "CSHOP_ORDER_FOOD_INDEX"
            });
        },
        handleScroll: function(e) {
            try {
                var t = this.data, o = t.isScroll, i = t.dishMenuColumn;
                o || (this.setData({
                    isScroll: !0
                }), "2" === i && this.$root && this.$root.$emit("numShrink", {
                    isNumShrink: !0
                }, this));
                var a = e.detail.scrollTop;
                this.scrollEnd();
                var r = a > this.localData.scrollTop ? "up" : "down";
                this.localData.scrollTop = a, this.localData.scrollDirect !== r && (this.localData.scrollDirect = r);
                var s = n.default.getSync("systemInfo").screenHeight, l = void 0 === s ? 700 : s, c = this.data.showGotoTop;
                a > l ? c || this.setData({
                    showGotoTop: !0
                }) : c && this.setData({
                    showGotoTop: !1
                });
                var u = a - this.localData.mistakeTop;
                this.scrollTopOnChange(u), this.localData.changeScrollTop = null, this.triggerEvent("handleScroll", e.detail);
            } catch (e) {}
        },
        createObserver: function() {
            var e = this, t = this.localData.$observer, o = this.data.navigationBarHeight;
            if (!t) {
                var i = (0, l.getMiniType)(), a = "wx" === i ? this.$origincomponent.createIntersectionObserver({
                    initialRatio: 0,
                    observeAll: !0
                }) : my.createIntersectionObserver({
                    initialRatio: 0,
                    selectAll: !0,
                    dataset: !0
                });
                a.relativeToViewport({
                    top: -o
                }).observe(".".concat("nbv"), function(t) {
                    var a = e.localData, n = a.cateScrollLinked, r = a.scrollTop;
                    if (n && 0 !== r) {
                        var l = t.intersectionRatio, u = t.dataset, h = e.localData.scrollDirect, d = u.next, p = u.current;
                        "my" === i ? (0, s.debounce)(function() {
                            e.localData.$selectorQuery || (e.localData.$selectorQuery = my.createSelectorQuery()), 
                            e.localData.$selectorQuery.selectAll(".".concat("nbv")).boundingClientRect().exec(function(t) {
                                var i = null;
                                t && t.length && t[0] && t[0].length && (i = t[0].findIndex(function(e) {
                                    return e.top <= o && e.bottom > o;
                                })), -1 === i && (i = t[0].findIndex(function(e) {
                                    return e.bottom > 0 && e.bottom < o;
                                }) + 1), (0, c.bindEmitter)(e, "self").$emit("changeCurrentIndex", {
                                    groupIndex: i,
                                    animation: !0
                                }, e);
                            });
                        }, 300, !0)() : (0 === l && "up" === h && (0, c.bindEmitter)(e, "self").$emit("changeCurrentIndex", {
                            groupIndex: d,
                            animation: !0
                        }, e), l > 0 && "down" === h && (0, c.bindEmitter)(e, "self").$emit("changeCurrentIndex", {
                            groupIndex: p,
                            animation: !0
                        }, e));
                    }
                }), this.localData.$observer = a;
            }
        },
        distoryObserver: function() {
            var e = this.localData.$observer;
            e && e.disconnect && e.disconnect(), this.localData.$observer = null;
        },
        getScrollViewRect: function() {
            var e = this;
            return new Promise(function(o) {
                wx.createSelectorQuery().in(e.$origincomponent).select(".".concat("nbt")).boundingClientRect().exec(function(i) {
                    var a = t(i, 1)[0];
                    e.localData.listHeight = a.height;
                    var n = {
                        top: a.top,
                        height: a.height
                    };
                    o(n);
                });
            });
        },
        handleShopHeaderClickMore: function() {
            this.triggerEvent("handleShopHeaderClickMore");
        },
        init: function(e, t, a) {
            var n = this;
            return i(o.default.mark(function i() {
                var s, l, c, u, h, d, p, f;
                return o.default.wrap(function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        e.length && (s = n.localData.dishMenuColumn, l = void 0 === s ? "" : s, c = m(e), 
                        u = c.dishItemIddList, h = c.dishIdMap, d = c.categoryIdMap, n.localData.dishIdMap = h, 
                        n.localData.categoryIdMap = d, n.localData.dishItemIddList = u, "2" === l && e.map(function(e) {
                            return e.dishList = n._resetList(e.dishList, 2), e;
                        }), p = {
                            menuAndDish: e,
                            showLeftMenuIcon: a
                        }, n.localData.cmpInit ? e.some(function(e) {
                            return "MUST_DISH" === e.id;
                        }) && (p.showDetailMap = n.getAllShowDetailMap(u)) : (f = n.getFirstShowDetailMap(u), 
                        p.showDetailMap = f), p.shopDecorationData = t, n.setData(p, function() {
                            if (!n.localData.cmpInit) {
                                n.createObserver();
                                var e = r.default.getAndRemove("dish_list_hide_first");
                                n.updateFakeItemsTop(u, e).then(function(e) {
                                    n.$showFirst = e, n.localData.cmpInit = !0, n.$root.$page.pretrigger.done("dishList:canScroll");
                                }), n.$root.$logReinit(n);
                            }
                            n.triggerEvent("handleFirstRender");
                        }, {
                            instant: !0
                        }));

                      case 1:
                      case "end":
                        return o.stop();
                    }
                }, i);
            }))();
        },
        handleImageRender: function() {
            this.triggerEvent("handleFirstImageRender");
        },
        _resetList: function(e, t) {
            for (var o = t, i = [], a = 0; a < o; ) {
                for (var n = 0; n < e.length; n += o) {
                    var r = e[n + a];
                    void 0 !== r && i.push(r);
                }
                a++;
            }
            return i;
        },
        getFirstShowDetailMap: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = {};
            return e.splice(0, 20).forEach(function(e, o) {
                o < 20 && (t[e] = !0);
            }), t;
        },
        getAllShowDetailMap: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = {};
            return e.forEach(function(e, o) {
                t[e] = !0;
            }), t;
        },
        showFirst: function() {
            this.$showFirst && this.$showFirst();
        },
        openDishSpecs: function(e) {
            var t = this;
            return i(o.default.mark(function i() {
                var a;
                return o.default.wrap(function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        if (!(a = t.localData.dishItems[e])) {
                            o.next = 4;
                            break;
                        }
                        return a.openDishSpecs(), o.abrupt("return");

                      case 4:
                        if (void 0 !== t.localData.dishIdMap[e]) {
                            o.next = 7;
                            break;
                        }
                        return o.abrupt("return");

                      case 7:
                        return t.localData.waitingDishId = e, o.next = 10, t.$root.$page.pretrigger.wait("dishItemReady:".concat(e));

                      case 10:
                        t.openDishSpecs(e);

                      case 11:
                      case "end":
                        return o.stop();
                    }
                }, i);
            }))();
        },
        saveComponent: function(e) {
            var t = e.detail, o = t.dishId, i = t.component;
            this.localData.dishItems[o] = i, o === this.localData.waitingDishId && this.$root.$page.pretrigger.done("dishItemReady:".concat(o));
        },
        calcOffsetMistake: function(e) {
            var o = this;
            wx.createSelectorQuery().in(this.$origincomponent).select(".".concat("nbt")).scrollOffset().exec(function(i) {
                var a = t(i, 1)[0].scrollTop, n = o.data.menuAndDish[e], r = n.dishList[0].dishId, s = "".concat(n.id, "-").concat(r), l = (o._fakeItemTopList || []).filter(function(e) {
                    return e.dishId === s;
                }), c = t(l, 1)[0];
                c && (o.localData.mistakeTop = a - c.top, o.scrollTopOnChange(c.top));
            });
        },
        scrollToDish: function(e) {
            var t = this;
            return i(o.default.mark(function i() {
                var a, n, r, s;
                return o.default.wrap(function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        return o.next = 2, t.$root.$page.pretrigger.wait("dishList:canScroll");

                      case 2:
                        if (void 0 !== (a = t.localData.dishIdMap[e]) || void 0 !== e) {
                            o.next = 6;
                            break;
                        }
                        return t.$root.$page.$toast.show("当前商品已下架", 1e3), o.abrupt("return", !1);

                      case 6:
                        return n = "DISH-".concat(a, "-").concat(e), t.setData({
                            scrollToViewId: n
                        }), r = t.data.menuAndDish, s = r.findIndex(function(e) {
                            return e.id === a;
                        }), setTimeout(function() {
                            (0, c.bindEmitter)(t, "self").$emit("changeCurrentIndex", {
                                groupIndex: s,
                                animation: !1
                            }, t);
                        }, 500), o.abrupt("return", !0);

                      case 12:
                      case "end":
                        return o.stop();
                    }
                }, i);
            }))();
        },
        resetShowMemberGuid: function(e) {
            var t = (0, u.getSceneType)().sceneType;
            this.setData({
                showMG: e,
                customScene: t
            });
        },
        handleFold: function(e) {
            var t = this;
            this.localData.cateScrollLinked = !1, setTimeout(function() {
                t.localData.cateScrollLinked = !0;
            }, 1e3);
            var o = e.currentTarget.dataset.categoryId;
            (0, p.getDishListModel)().toggleCategoryCollapseExpand(o);
        },
        handleShowMemberJoinModel: function() {
            var e = (0, u.getSceneType)().sceneType;
            this.$root.$logClick(".keruyun_menu.registered_member_click", {
                customType: "会员专区",
                customScene: e
            }), this.triggerEvent("handleShowMemberJoinModel");
        },
        scrollIntoMustAddCate: function() {
            var e = this, t = this.data.menuAndDish;
            this.setData({
                showMustAddBg: !0,
                showMustAddTips: !0
            });
            var o = t.findIndex(function(e) {
                return "MUST_DISH" === e.id;
            });
            o > -1 && (this.localData.cateScrollLinked = !1, (0, c.bindEmitter)(this, "self").$emit("scrollToGroup", {
                id: o
            }, this), (0, c.bindEmitter)(this, "self").$emit("changeCurrentIndex", {
                groupIndex: o,
                animation: !1
            }, this), setTimeout(function() {
                e.localData.cateScrollLinked = !0;
            }, 1e3));
        }
    }
}));