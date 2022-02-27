var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = require("../../@babel/runtime/helpers/objectWithoutProperties"), a = t(require("../../@babel/runtime/regenerator")), i = require("../../@babel/runtime/helpers/asyncToGenerator"), o = require("../../@babel/runtime/helpers/toConsumableArray"), s = require("../../@babel/runtime/helpers/objectSpread2"), r = t(require("../../m/zk/za")), n = t(require("../../m/zl/5o")), u = t(require("../../l/wd/w1")), l = require("./zf/n"), d = require("../c6/5j/n"), c = require("../../l/wu"), h = require("../../l/w9"), m = require("../../m/z8/zj"), p = t(require("../../m/zd/n")), g = require("../../l/wh"), k = [ "callback" ], b = p.default.$ltracker;

function f(t) {
    var e = t.dishDetailPromoShowType;
    if (!e) return [];
    var a = [], i = t.cookbookDishSkuList, o = !1;
    return i.forEach(function(t) {
        var i = t.promotionInfoDTOList || [], s = {
            label: "",
            value: []
        };
        if ("ALL_FLAT" === e && 0 === i.length) return s.label = "*规格(".concat(t.skuName, ")不参与以下活动："), 
        void a.push(s);
        "ALL_FLAT" === e && o || ("ALL_FLAT" !== e && (s.label = "".concat(t.skuName, "：")), 
        i.forEach(function(t) {
            o = !0, s.value.push(t.showText);
        }), s.value.length > 0 && a.push(s));
    }), a.sort(function(t, e) {
        return t.value.length - e.value.length;
    }), a;
}

function D() {}

(0, r.default)({
    name: "商品详情",
    data: {
        dishDetail: {},
        discountGroup: [],
        currentSkuDetail: {},
        isClearSku: !1,
        options: {
            visible: !1,
            dishId: null
        },
        pageInit: !1,
        reveal: !1,
        navigationOpacity: 0,
        containerFixed: !1,
        containerFixedTop: 0,
        pageRatio: 0,
        showMG: !1,
        isSetMeal: !1,
        disableAddCart: !1,
        cookbookComboGroupList: [],
        subDishesName: "",
        totalPrice: 0,
        originAfterAddPrice: 0,
        count: 1,
        showOverPlusNum: !1,
        overPlusNumLabel: "",
        disableAddInnner: !1,
        isOversold: !1,
        isShowMinus: !1,
        isTabPage: !1,
        showNavigationBar: !1,
        showDetailCart: !1,
        cartSkuList: [],
        selectTotalNum: 0,
        dishCartSkuList: [],
        cartDishDot: {},
        animationEnd: !0,
        shareInfo: {}
    },
    properties: {
        openStatus: {
            type: Boolean,
            value: !1
        },
        dishDot: {
            type: Object,
            value: {}
        },
        memberFlag: {
            type: Boolean,
            value: !1
        },
        showMemberGuid: {
            type: Boolean,
            value: !1
        },
        logType: {
            type: String,
            value: ""
        }
    },
    localData: {
        touchStartY: 0,
        touchMoveY: 0,
        pageScrollTop: 0,
        scrollChangeHeight: 30,
        scrollContainerFixedHeight: 560,
        setMealSendData: [],
        subDishesPrice: 0,
        groupCheck: {},
        toastName: "",
        themeIcons: [ "IconNumControlAdd", "IconNumControlMinus" ],
        animationTimeId: null,
        isShow: !1
    },
    components: {
        loading: "loading",
        toast: "toast"
    },
    observers: {
        showMemberGuid: function(t) {
            this.resetShowMemberGuid(t);
        },
        count: function() {
            this.resetSurplusStatus();
        },
        dishDetail: function() {
            this.resetSurplusStatus();
        }
    },
    ready: function() {
        var t = this;
        this.$loading = this.getComponentById("loading"), this.$toast = this.getComponentById("toast"), 
        this.$root.$on("switchSku", function(e) {
            t.data.isSetMeal || t.handleSkuDetail(e);
        }, this), this.$root.$on("handleComboMinus", function(e) {
            var a = e.isComboMinus, i = e.dishId;
            a && (t.setData({
                showDetailCart: !0,
                dishIdSelect: i
            }), t.$toast.show("请选择您要去掉的菜品", 2e3));
        }, this);
    },
    detached: function() {
        this.$root && this.$root.$off("switchSku", this), this.$root && this.$root.$off("handleComboMinus", this);
    },
    methods: {
        generateSetMeal: function(t) {
            var e = t.cookbookComboGroupList, a = void 0 === e ? [] : e;
            a.forEach(function(t) {
                var e = [];
                (t.comboDishList || []).forEach(function(t) {
                    "Y" === t.multiSpecFlag ? (t.specGroupList = [], t.cookbookDishSkuList.forEach(function(a) {
                        e.push(s(s({}, t), {}, {
                            skuName: a.skuName,
                            comboStartNumber: a.comboStartNumber,
                            cookbookDishSkuList: [ a ]
                        }));
                    })) : e.push(t);
                }), t.comboDishList = e;
            }), this.setData({
                cookbookComboGroupList: a
            });
        },
        handleModifySubmenu: function() {
            this.setData({
                showDetailCart: !0
            });
        },
        handleClose: function() {
            this.setData({
                showDetailCart: !1,
                dishIdSelect: ""
            });
        },
        setGroupItemList: function() {
            var t = this.data.cookbookComboGroupList, e = [];
            return t.forEach(function(t) {
                t.comboDishList.forEach(function(t) {
                    var a, i = t.cookbookDishSkuList[0], o = i.dishId, s = i.skuId, r = {}, n = [], u = 0;
                    i.practiceGroups.length > 0 && i.practiceGroups.forEach(function(t) {
                        var e = {};
                        t.dishProperties.forEach(function(a, i) {
                            "REQURIED" === t.optType && 0 === i && (e = {
                                addPrice: a.addPrice,
                                detailId: a.detailId,
                                name: a.name,
                                uuid: a.uuid
                            }), "Y" === a.kryunPropertyDefault && (e = {
                                addPrice: a.addPrice,
                                detailId: a.detailId,
                                name: a.name,
                                uuid: a.uuid
                            });
                        }), Object.keys(e).length > 0 && (r[t.groupId] = e, n.push(e), u += e.addPrice);
                    }), a = (0, c.createDishMd5)({
                        dishId: o,
                        skuId: s,
                        selectPratices: r
                    });
                    var l = {
                        dishId: t.dishId,
                        dishName: t.dishName,
                        dishType: t.dishType,
                        skuId: i.skuId,
                        skuName: i.skuName,
                        unitId: i.unitId,
                        unitName: i.unitName,
                        dishMd5: a,
                        kryunSkuUuid: i.kryunSkuUuid,
                        skuImgUrl: i.skuImgUrl,
                        comboStartNumber: i.comboStartNumber,
                        startNumber: i.comboStartNumber,
                        startInterval: i.startInterval,
                        cookbookCategoryId: t.cookbookCategoryId,
                        cookbookCategoryName: t.cookbookCategoryName,
                        practices: n,
                        sideDishes: [],
                        remarks: [],
                        multiSpecFlag: t.multiSpecFlag,
                        weighDishFlag: "Y" === i.weighFlag,
                        dishCookWayAccountModel: i.dishCookWayAccountModel,
                        num: i.comboStartNumber,
                        originPrice: i.sellPrice,
                        dishSkuPrice: i.dishSkuPrice,
                        amount: i.dishSkuPrice + u,
                        memberPrice: i.haveMemberSellPrice ? i.memberSellPrice + u : void 0,
                        required: i.required
                    };
                    e.push(l);
                });
            }), e;
        },
        handleCartListSkuChange: function(t) {
            var e = this, a = t.detail.cartDishSku, i = a.dishMd5, o = a.groupId, s = a.num, r = this.data.cartSkuList;
            (0, d.bindEmitter)(this, "self").$emit("dishMinus", {
                dishMd5: i,
                groupId: o,
                num: s
            }, this), r.forEach(function(t) {
                t.dishMd5 === i && t.groupId === o && (t.num = a.num);
            }), this.setData({
                cartSkuList: r
            }, function() {
                e.setCheckStatusAndTotalPrice();
            });
        },
        handleDishChange: function(t) {
            var e = t.detail, a = this.localData, i = a.setMealSendData, o = a.groupCheck, s = e.group, r = e.groupTotalPrice, u = e.isFillMinChoose, l = e.isFillRequired, d = e.requiredName, c = e.menuName, h = e.chooseNum, m = i.findIndex(function(t) {
                return t.groupId === s.groupId;
            });
            -1 !== m ? i[m] = s : i.push(s), o[s.groupId] = {
                groupTotalPrice: r,
                isFillMinChoose: u,
                isFillRequired: l,
                requiredName: d,
                menuName: c,
                chooseNum: h,
                dishCartSkuList: s.dishCartSkuList
            }, this.setData({
                dishCartSkuList: s.dishCartSkuList
            }), this.setCheckStatusAndTotalPrice(), n.default.put("dish.detail.setMeal.to.specs", i);
        },
        setCheckStatusAndTotalPrice: function() {
            var t = this.data, e = t.currentSkuDetail, a = t.memberFlag, i = this.localData.groupCheck, s = !1, r = "", n = 0, u = e.sellPrice, l = [], d = [], c = function(t) {
                var e = i[t];
                (e.dishCartSkuList || {}).forEach(function(e) {
                    e.groupId = t;
                }), n += e.groupTotalPrice, u += e.groupTotalPrice, l.push.apply(l, o(e.menuName)), 
                d.push.apply(d, o(e.dishCartSkuList)), e.isFillMinChoose || (s = !0), e.isFillRequired || (s = !0, 
                r || (r = e.requiredName));
            };
            for (var h in i) c(h);
            var m = {};
            d.forEach(function(t) {
                if (m["".concat(t.groupId, "-").concat(t.skuId)] ? m["".concat(t.groupId, "-").concat(t.skuId)] += t.num : m["".concat(t.groupId, "-").concat(t.skuId)] = t.num, 
                !t.selectedName) {
                    var e = "";
                    [].concat(t.practices || [], t.sideDishes || [], t.remarks || []).forEach(function(t) {
                        t.name && (e += "".concat(t.name, "、"));
                    }), e = e.slice(0, -1), t.selectedName = e;
                }
            });
            var p = d.reduce(function(t, e) {
                return t + e.num;
            }, 0);
            this.localData.subDishesPrice = n, n += e.haveMemberSellPrice && a ? e.memberSellPrice : e.sellPrice, 
            0 === p && this.setData({
                showDetailCart: !1,
                dishIdSelect: ""
            }), this.setData({
                subDishesName: l.join("+"),
                cartSkuList: d,
                cartDishDot: m,
                selectTotalNum: p,
                disableAddCart: s,
                totalPrice: n,
                originAfterAddPrice: u
            }), this.localData.toastName = r;
        },
        handleSub: function() {
            var t = this.data, e = t.currentSkuDetail, a = t.count, i = e.startInterval;
            a > 1 && this.setData({
                count: a - i,
                disableAddInnner: !1
            });
        },
        handleAdd: function() {
            var t = this.data, e = t.count, a = t.isClearSku, i = t.currentSkuDetail, o = t.disableAddInnner;
            if (!a && !o) {
                var s = e + i.startInterval;
                this.setData({
                    count: s
                });
            }
        },
        getSetMealMd5: function() {
            var t = this.localData.setMealSendData, e = this.data.dishDetail, a = "".concat(e.dishId, "-").concat(e.skuId);
            return t.forEach(function(t) {
                var e = t.dishCartSkuList, i = t.groupId;
                a += i, Object.keys(e).sort(function(t, e) {
                    return t.skuId - e.skuId;
                }).forEach(function(t) {
                    a += "-".concat(e[t].dishMd5, "-").concat(e[t].num);
                });
            }), (0, u.default)(a);
        },
        handleAddCart: function() {
            try {
                var t = this.localData, e = t.setMealSendData, a = t.toastName, i = t.subDishesPrice, o = this.data, s = o.dishDetail, r = o.currentSkuDetail, n = o.count, u = o.disableAddCart, l = o.isClearSku, d = o.isOversold, c = o.logType;
                if (l) return;
                if (d) return void this.$toast.show("商品剩余量不足！");
                if (u) return void (a && this.$toast.show("".concat(a, "商品必选")));
                var h = e.filter(function(t) {
                    return t.dishCartSkuList.length > 0;
                }), p = {
                    dishes: {
                        dishId: s.dishId,
                        dishName: s.dishName,
                        dishType: s.dishType,
                        skuId: r.skuId,
                        skuName: r.skuName,
                        unitId: r.unitId,
                        unitName: r.unitName,
                        dishMd5: this.getSetMealMd5(),
                        kryunSkuUuid: r.kryunSkuUuid,
                        skuImgUrl: r.skuImgUrl,
                        startNumber: r.startNumber,
                        startInterval: r.startInterval,
                        comboStartNumber: r.comboStartNumber,
                        cookbookCategoryId: s.cookbookCategoryId,
                        cookbookCategoryName: s.cookbookCategoryName,
                        practices: [],
                        sideDishes: [],
                        remarks: [],
                        multiSpecFlag: s.multiSpecFlag,
                        weighDishFlag: "Y" === r.weighFlag,
                        dishCookWayAccountModel: r.dishCookWayAccountModel,
                        num: n,
                        originPrice: r.sellPrice,
                        amount: r.sellPrice + i,
                        memberPrice: r.haveMemberSellPrice ? r.memberSellPrice + i : void 0,
                        packageDishGroupList: h,
                        overPlusNum: r.overPlusNum
                    }
                };
                (0, m.getCartModel)("orderfood").updateCart(p);
                var g = s.dishId, k = s.dishName, f = s.elemeLableShowText, D = s.dishRecommended;
                this.$root.$logClick(".keruyun_spec.add_to_cart", {
                    dishId: g,
                    dishName: k,
                    addScene: "在".concat(c, "的套餐详情中加购"),
                    eleLabel: f || "无饿了么标签",
                    spicyLabel: D && D.spicyDegree || "无辣度标签"
                }), this.hide();
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                var S = this.$root.$getCustomError("套餐详情点击添加至购物车异常", {
                    c1: t.message
                });
                b.logError(S);
            }
        },
        fetchDishDetail: function() {
            var t = this;
            return i(a.default.mark(function e() {
                var i, o, s, r, n, u, d, c, m;
                return a.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return i = (0, h.isTabBarPage)("dish"), t.$loading && t.$loading.hideLoading(), 
                        t.setData({
                            dishDetail: {},
                            discountGroup: [],
                            currentSkuDetail: {},
                            pageInit: !1,
                            navigationOpacity: 0,
                            containerFixed: !1,
                            reveal: !1,
                            isTabPage: i
                        }), t.$loading && t.$loading.showLoading("加载中..."), o = t.data.options.dishId, e.prev = 5, 
                        e.next = 8, (0, l.getDishDetail)({
                            dishId: o
                        });

                      case 8:
                        if (s = e.sent, t.$loading && t.$loading.hideLoading(), t.localData.isShow) {
                            e.next = 12;
                            break;
                        }
                        return e.abrupt("return");

                      case 12:
                        r = s.data.data, u = (n = void 0 === r ? {} : r).cookbookDishSkuList.find(function(t) {
                            return t.skuId === n.lowPriceSkuId;
                        }), t.handleSkuDetail(u), d = f(n), c = "", n.summaryLabelText && (c = n.summaryLabelText), 
                        m = !1, "COMBO" === n.dishType && (m = !0, t.generateSetMeal(n), t.setCheckStatusAndTotalPrice()), 
                        t.setData({
                            dishDetail: n,
                            discountGroup: d,
                            isSetMeal: m,
                            summaryLabelText: c,
                            reveal: !1
                        }, function() {
                            t.setData({
                                pageInit: !0
                            });
                        }), e.next = 27;
                        break;

                      case 23:
                        e.prev = 23, e.t0 = e.catch(5), t.setData({
                            reveal: !0,
                            pageInit: !0
                        }), t.$loading && t.$loading.hideLoading();

                      case 27:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 5, 23 ] ]);
            }))();
        },
        show: function(t) {
            var a = this, i = t.callback, o = void 0 === i ? D : i, r = e(t, k);
            this.localData.isShow = !0, this._resetData();
            var u = s(s(s({}, this.data.options), r), {}, {
                visible: !0
            });
            this.setData({
                options: u
            }, function() {
                a.fetchDishDetail(), o();
            }), n.default.put("join_detail_page_flag", !0, {
                keep: !0
            });
        },
        tapOutside: function(t) {
            t.target.dataset.hide && this.hide();
        },
        hide: function() {
            (n.default.remove("join_detail_page_flag"), this._hide(), this.$loading && this.$loading.hideLoading(), 
            (0, h.isTabBarPage)("dish")) && (this.$root.getTabBar() && this.$root.getTabBar().setData({
                isShow: !0
            }));
        },
        _hide: function() {
            var t = this;
            this.localData.isShow = !1, this.setData({
                "options.visible": !1,
                animationEnd: !1
            }, function() {
                t.localData.animationTimeId = setTimeout(function() {
                    t.setData({
                        animationEnd: !0
                    });
                }, 500);
            });
        },
        _clearAnimationTimeout: function() {
            this.localData.animationTimeId && clearTimeout(this.localData.animationTimeId);
        },
        _resetData: function() {
            this._clearAnimationTimeout(), this.setData({
                options: {
                    visible: !1,
                    dishId: null
                },
                pageInit: !1,
                dishDetail: {},
                discountGroup: [],
                currentSkuDetail: {},
                navigationOpacity: 0,
                containerFixed: !1,
                isSetMeal: !1,
                disableAddCart: !1,
                cookbookComboGroupList: [],
                subDishesName: "",
                totalPrice: 0,
                originAfterAddPrice: 0,
                count: 1,
                animationEnd: !0,
                showDetailCart: !1,
                dishIdSelect: ""
            }), this.localData.touchStartY = 0, this.localData.touchMoveY = 0, this.localData.setMealSendData = [], 
            this.localData.subDishesPrice = 0, this.localData.groupCheck = {}, this.localData.toastName = "";
        },
        forbidMove: function(t) {
            return 0 !== this.localData.pageScrollTop && (this.localData.touchStartY = t.touches[0].pageY), 
            this.localData.touchMoveY = t.touches[0].pageY, null;
        },
        touchStart: function(t) {
            this.localData.touchStartY = t.touches[0].pageY, this.localData.touchMoveY = 0;
        },
        touchEnd: function(t) {
            var e = this.localData, a = e.touchStartY, i = e.touchMoveY, o = e.pageScrollTop, s = i - a, r = 80 * this.data.pageRatio;
            1 === Math.sign(s) && s >= r && 0 === o && 0 !== i && this.hide();
        },
        preventTouchMove: function() {
            return null;
        },
        handleSkuDetail: function(t) {
            var e = encodeURIComponent("pages/orderfood/index?actionType=openDishDetail&actionValue=".concat(t.dishId, "&shopId=").concat((0, 
            g.getShopId)())), a = {
                title: t.skuName,
                imageUrl: t.skuImageList && t.skuImageList[0],
                path: "/pages/home/index?origin=minpath&path=".concat(e)
            };
            this.setData({
                currentSkuDetail: t,
                shareInfo: a,
                isClearSku: 0 === t.dishStockDecimal
            }, {
                instant: !0
            });
        },
        viewScroll: function(t) {
            var e = t.detail.scrollTop, a = !1;
            e > 0 && (a = !0), this.localData.pageScrollTop = e;
            var i = this.data, o = i.pageRatio, s = i.containerFixedTop, r = i.isSetMeal;
            this.setData({
                navigationOpacity: e < this.localData.scrollChangeHeight ? 0 : 1,
                containerFixed: !r && e >= (this.localData.scrollContainerFixedHeight - s) / o,
                showNavigationBar: a
            });
        },
        resetShowMemberGuid: function(t) {
            this.setData({
                showMG: t
            });
        },
        handleShowMemberJoinModel: function() {
            this.triggerEvent("handleShowMemberJoinModel");
        },
        resetSurplusStatus: function() {
            var t = this, e = this.data, a = e.dishDetail, i = e.currentSkuDetail, o = e.count;
            if (a && i) {
                var s = (0, m.getCartModel)("orderfood").cartData, r = (void 0 === s ? {} : s).list, n = (void 0 === r ? [] : r).filter(function(t) {
                    return t.skuId === i.skuId && t.dishMd5 !== i.dishMd5;
                }).map(function(t) {
                    return t.num;
                }).reduce(function(t, e) {
                    return t + e;
                }, 0);
                (0, c.getSurplusData)({
                    dish: a,
                    num: o,
                    skuOtherNumSum: n,
                    scene: "detail"
                }).then(function(e) {
                    var a = e.isShow, i = void 0 !== a && a, o = e.disableAdd, s = e.showLabel, r = e.isOversold, n = e.disableMinus;
                    t.setData({
                        showOverPlusNum: i,
                        overPlusNumLabel: s,
                        disableAddInnner: o,
                        isOversold: r,
                        isShowMinus: n
                    });
                });
            }
        }
    }
});