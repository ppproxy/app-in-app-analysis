var e = require("../../@babel/runtime/helpers/interopRequireDefault");

require("../../@babel/runtime/helpers/Objectvalues");

var t = require("../../@babel/runtime/helpers/objectSpread2"), a = e(require("../../m/zk/za")), s = require("../../l/wu"), i = require("../../l/w9"), r = require("../../l/wh"), o = require("../../m/z8/zj"), c = e(require("../../m/zl/5o")), d = function() {
    return new Promise(function(e) {
        return setTimeout(e, 1e3 / 30);
    });
};

(0, a.default)({
    name: "规格弹窗",
    components: {
        toast: "toast"
    },
    properties: {
        memberFlag: {
            type: Boolean,
            value: !1
        },
        dishImgHeight: {
            type: String,
            value: ""
        }
    },
    logProps: {
        $$expElement: [ ".component-orderfood-specs", ".component-orderfood-specs__to-member" ]
    },
    localData: {
        needSelectPratice: [],
        dishMd5: "",
        cartList: [],
        showAnimationDone: !1,
        setMealCallback: null,
        currentSelectedNum: null,
        setMealCheck: !1,
        resetSurplusStatusId: null,
        isEnableCheckSurplus: !1,
        groupName: "",
        notNeedUpdateCart: !1
    },
    data: {
        setMealDisableAdd: !1,
        display: !1,
        show: !1,
        dish: {},
        isSetMeal: !1,
        num: 1,
        selectSku: {},
        selectSpec: {
            id: "",
            name: "",
            kryunSpecUuids: null
        },
        selectPratice: {},
        selectSideDish: {},
        selectRemarks: {},
        selectedName: "",
        currentPrice: {
            sellPrice: 0,
            memberSellPrice: null,
            addPrice: 0
        },
        disableAddInner: !1,
        totalNumOverflow: !1,
        isShowSurplus: !1,
        surplusLabel: "",
        isShowMinus: !1,
        btnFlag: !1,
        isFromDetailPage: !1,
        calcHeight: 0,
        contentHeight: 0,
        clearStatus: !1,
        openStatus: !1,
        customType: "",
        customScene: "",
        showMember: !1,
        showStartNumTips: !1,
        startNumber: 1,
        addPriceDishHasBuy: !1,
        summaryLabelText: "",
        setMealOptionalNum: null,
        shareInfo: {}
    },
    ready: function() {
        var e = this;
        this.$toast = this.getComponentById("toast");
        var t = (0, o.getCartModel)("orderfood");
        t && (t.bindCartListChange(function(t) {
            var a = t.cartData.list, s = void 0 === a ? [] : a;
            e.data.isSetMeal || e.updateCartListListener(s);
        }), (0, i.getStoreBaseConfig)().then(function(t) {
            var a = t.enableCheckSurplus, s = void 0 === a ? 0 : a;
            e.localData.isEnableCheckSurplus = !!s;
        }));
    },
    detached: function() {
        this.$root && this.$root.$off("bottomTipUpdate", this);
    },
    observers: {
        dish: function() {
            this.resetSurplusStatus();
        },
        num: function() {
            this.resetSurplusStatus();
        },
        selectSku: function() {
            this.resetSurplusStatus();
        }
    },
    methods: {
        resetSurplusStatus: function() {
            var e = this;
            this.localData.resetSurplusStatusId && clearTimeout(this.localData.resetSurplusStatusId), 
            this.localData.resetSurplusStatusId = setTimeout(function() {
                var t = e.data, a = t.dish, i = t.selectSku, r = t.num, o = t.isSetMeal;
                if (a && i) {
                    var c = e.localData, d = c.cartList, n = c.isEnableCheckSurplus, l = void 0 !== n && n, u = d.filter(function(e) {
                        return e.skuId === i.skuId;
                    }).map(function(e) {
                        return e.num;
                    }).reduce(function(e, t) {
                        return e + t;
                    }, 0), h = !!l && u + r > i.overPlusNum;
                    e.setData({
                        totalNumOverflow: h
                    }), (0, s.getSurplusData)({
                        dish: a,
                        currentSku: i,
                        num: r,
                        skuOtherNumSum: u,
                        scene: o ? "detail" : ""
                    }).then(function(t) {
                        var a = t.disableAdd, s = t.isShow, i = t.showLabel, c = t.disableMinus, d = t.isSoldOut, n = a, l = e.localData.setMealCheck;
                        o && !l && r > 0 && (n = !0), e.setData({
                            clearStatus: d,
                            disableAddInner: n,
                            isShowSurplus: s,
                            surplusLabel: i,
                            isShowMinus: c
                        }, {
                            instant: !0
                        });
                    });
                }
            }, 50);
        },
        updateCartListListener: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            this.localData.cartList = e, this.resetSurplusStatus();
        },
        showSpecs: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = arguments.length > 1 ? arguments[1] : void 0, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.$root.$logOther("open_dish_specs_init", {
                c1: "打开规格弹窗初始化",
                c2: t.dishName || ""
            }), c.default.put("open_dish_specs_model_flag", !0, {
                keep: !0
            }), this.localData.cartList = a;
            var o = s.isSetMeal, n = s.setMealCallback, l = s.setMealOptionalNum, u = s.currentSelectedNum, h = s.btnFlag, m = s.isFromDetailPage, p = s.openStatus, S = s.customType, D = s.groupName, k = s.noHideTab, f = void 0 !== k && k, P = s.notNeedUpdateCart, g = void 0 !== P && P, v = s.chooseCallback, b = s.isAddPriceBuy;
            this.localData.groupName = D;
            var N = this.data, y = N.memberFlag, C = N.currentPrice, I = (0, i.isTabBarPage)("dish"), M = !(y || m || !t.haveMemberPrice || !(C.memberSellPrice <= 999999)), $ = this.$root && "pages/orderfood/index" === this.$root.route || this.$origincomponent.$page && "点餐页" === this.$origincomponent.$page.data.name;
            if (this.localData.notNeedUpdateCart = g, this.localData.chooseCallback = v, this.localData.isAddPriceBuy = b, 
            $ && I) {
                var T = this.$root.getTabBar();
                T && T.setData({
                    isShow: !1
                });
            }
            try {
                p || b || this.$root.$emit("bottomTipUpdate", {
                    isUpdate: !0
                }, this), f || this.$root.$emit("cartBottomUpdate", {
                    isUpdate: !0
                }, this);
            } catch (e) {}
            var w = t || {}, _ = w.summaryLabelText, A = void 0 === _ ? "" : _, O = w.dishName, L = void 0 === O ? "" : O, U = (0, 
            r.getSceneType)(), B = U.sceneType;
            this.setData({
                isFromDetailPage: m,
                btnFlag: h,
                openStatus: p,
                customType: S,
                customScene: B,
                showMember: M,
                summaryLabelText: A,
                isAddPriceBuy: this.localData.isAddPriceBuy
            }, function() {
                e.$root.$logReinit(e), e.$root.$logClick(".keruyun_menu.specs_show", {
                    customType: o ? "套餐加购" : "普通菜加购",
                    c1: L
                });
            }), o && (this.localData.setMealCallback = n, this.localData.currentSelectedNum = u, 
            this.localData.setMealCheck = "Y" === t.cookbookDishSkuList[0].optional);
            var R = !o && "Y" === t.multiSpecFlag, E = this.getAndSetClearSpec(t), q = R && E || {};
            b && R && (q = {
                detailId: t.specGroupMapping,
                kryunSpecUuids: t.kryunSpecUuids,
                name: t.skuName
            });
            var F = this.setSku(q.detailId, t.cookbookDishSkuList);
            this.setData({
                display: !0
            }, function() {
                e.$root.$logOther("open_dish_specs_shadow_show", {
                    c1: "打开规格弹窗-遮罩显示",
                    c2: L
                });
            }, {
                instant: !0
            }), Promise.resolve().then(d).then(function() {
                var a = encodeURIComponent("pages/orderfood/index?actionType=openDishDetail&actionValue=".concat(t.dishId, "&shopId=").concat((0, 
                r.getShopId)())), s = {
                    title: t.dishName,
                    imageUrl: F.skuImageList && F.skuImageList[0],
                    path: "/pages/home/index?origin=minpath&path=".concat(a)
                };
                e.setData({
                    show: !0,
                    selectSpec: q,
                    dish: t,
                    isSetMeal: o,
                    setMealOptionalNum: l,
                    shareInfo: s
                }, function() {
                    e.$root.$logOther("open_dish_specs_animation_end", {
                        c1: "打开规格弹窗-动画执行完成",
                        c2: L
                    });
                }, {
                    instant: !0
                }), e.chooseChangeNumCheck(!0), e.countPrice(), e.countSelectedName();
                try {
                    e.$root.$emit("switchSku", F, e);
                } catch (e) {}
                setTimeout(function() {
                    e.localData.showAnimationDone = !0;
                }, 200);
            });
        },
        handleCloseSpecs: function() {
            var e = this;
            if (this.localData.isAddPriceBuy && this.setData({
                addPriceDishHasBuy: !1
            }), this.localData.showAnimationDone) {
                c.default.remove("open_dish_specs_model_flag");
                var t = this.$root && "pages/orderfood/index" === this.$root.route || this.$origincomponent.$page && "点餐页" === this.$origincomponent.$page.data.name, a = (0, 
                i.isTabBarPage)("dish"), s = (0, r.getSceneType)().sceneType, o = this.data, d = o.dish, n = void 0 === d ? {} : d, l = o.openStatus, u = o.isFromDetailPage, h = n.dishName, m = void 0 === h ? "" : h;
                if (t && a && !u) {
                    var p = this.$root.getTabBar();
                    p && p.setData({
                        isShow: !0
                    });
                }
                try {
                    l || this.localData.isAddPriceBuy || this.$root.$emit("bottomTipUpdate", {
                        isUpdate: !1
                    }, this), this.$root.$emit("cartBottomUpdate", {
                        isUpdate: !1
                    }, this);
                } catch (e) {}
                this.setData({
                    show: !1,
                    dish: {},
                    num: 1,
                    selectSku: {},
                    selectSpec: {
                        id: "",
                        name: ""
                    },
                    selectPratice: {},
                    selectSideDish: {},
                    selectRemarks: {},
                    selectedName: "",
                    currentPrice: {
                        sellPrice: 0,
                        memberSellPrice: null,
                        addPrice: 0
                    },
                    isSetMeal: !1,
                    setMealDisableAdd: !1,
                    setMealOptionalNum: null,
                    summaryLabelText: ""
                }, {
                    instant: !0
                }), this.localData.needSelectPratice = [], this.localData.dishMd5 = "", setTimeout(function() {
                    e.setData({
                        display: !1
                    }, {
                        instant: !0
                    }), e.localData.showAnimationDone = !1;
                }, 200), this.$root.$logClick(".keruyun_menu.specs_close", {
                    customScene: s,
                    c1: m
                });
            }
        },
        getAndSetClearSpec: function(e) {
            var t = null;
            if (e.specGroupList && e.specGroupList.length) {
                var a = e.specGroupList[0].specs, s = void 0 === a ? [] : a;
                s.forEach(function(t) {
                    var a = !1, s = e.cookbookDishSkuList.find(function(e) {
                        return e.specGroupMapping === t.detailId;
                    });
                    s && (a = 0 === s.dishStockDecimal, t.isClear = a);
                });
                var i = s.find(function(e) {
                    return e.defaultSpec;
                });
                t || !i || i.isClear || (t = i);
            }
            return t;
        },
        countPrice: function() {
            var e = this.data, t = e.selectPratice, a = e.selectSideDish, s = e.selectSku, i = s.sellPrice, r = s.memberSellPrice, o = s.haveMemberSellPrice, c = 0;
            for (var d in t) Object.prototype.hasOwnProperty.call(t, d) && (c += t[d].addPrice);
            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (c += a[n].addPrice);
            this.setData({
                currentPrice: {
                    sellPrice: i + c,
                    memberSellPrice: o ? r + c : null,
                    addPrice: c
                }
            }, {
                instant: !0
            });
        },
        countSelectedName: function() {
            var e = this.data, t = e.selectSpec, a = e.selectPratice, s = e.selectSideDish, i = e.selectRemarks, r = [];
            for (var o in t.name && r.push(t.name), a) Object.prototype.hasOwnProperty.call(a, o) && r.push(a[o].name);
            for (var c in s) Object.prototype.hasOwnProperty.call(s, c) && r.push(s[c].name);
            for (var d in i) Object.prototype.hasOwnProperty.call(i, d) && r.push(i[d].name);
            this.setData({
                selectedName: r.join("、")
            }, {
                instant: !0
            });
        },
        handleForbidMove: function() {
            return null;
        },
        setSku: function(e, t) {
            var a = this.data, s = a.selectPratice, i = a.selectSideDish, r = a.selectRemarks, o = e ? t.find(function(t) {
                return t.specGroupMapping === e;
            }) : t[0], c = [], d = {};
            o.practiceGroups.forEach(function(e) {
                var t = e.groupId, a = !1;
                e.isAddPrice = !1, e.required = !1, "REQURIED" === e.optType && (e.required = !0, 
                c.push({
                    id: t,
                    name: e.groupName
                })), e.dishProperties.forEach(function(i) {
                    var r = i.detailId;
                    !e.isAddPrice && i.addPrice && (e.isAddPrice = !0), s[t] && s[t].detailId === r && (d[t] = {
                        detailId: r,
                        uuid: i.uuid,
                        name: i.name,
                        addPrice: i.addPrice
                    }, a = !0), a || "Y" !== i.kryunPropertyDefault || (d[t] = {
                        detailId: r,
                        uuid: i.uuid,
                        name: i.name,
                        addPrice: i.addPrice
                    });
                });
            });
            var n = {};
            o.sideDishGroups.forEach(function(e) {
                var t = e.groupId;
                e.isAddPrice = !1, e.sideDishes.forEach(function(a) {
                    var s = a.detailId, r = "".concat(t, "-").concat(s);
                    !e.isAddPrice && a.addPrice && (e.isAddPrice = !0), i[r] && (n[r] = {
                        detailId: s,
                        uuid: a.uuid,
                        name: a.name,
                        addPrice: a.addPrice
                    });
                });
            });
            var l = {};
            return o.remarks.forEach(function(e) {
                r[e.detailId] && (l[e.detailId] = {
                    detailId: e.detailId,
                    uuid: e.uuid,
                    name: e.name
                });
            }), this.setData({
                selectSku: o,
                selectPratice: d,
                selectSideDish: n,
                selectRemarks: l
            }, {
                instant: !0
            }), this.localData.needSelectPratice = c, o;
        },
        handleTapSpec: function(e) {
            var t = e.currentTarget.dataset.spec, a = t.detailId, s = t.name, i = t.kryunSpecUuids, r = t.isClear, o = this.data, c = o.selectSpec, d = o.dish;
            if (a !== c.detailId && !r && !this.localData.isAddPriceBuy) {
                var n = this.setSku(a, d.cookbookDishSkuList);
                this.setData({
                    selectSpec: {
                        detailId: a,
                        name: s,
                        kryunSpecUuids: i
                    }
                }, {
                    instant: !0
                }), this.chooseChangeNumCheck(), this.countPrice(), this.countSelectedName();
                try {
                    this.$root.$emit("switchSku", n, this);
                } catch (e) {}
            }
        },
        handleTapPractise: function(e) {
            var t = this.data.selectPratice, a = e.currentTarget.dataset.praticeGroupId, s = e.currentTarget.dataset.pratices, i = s.detailId;
            t[a] && t[a].detailId === i ? delete t[a] : t[a] = {
                detailId: i,
                uuid: s.uuid,
                name: s.name,
                addPrice: s.addPrice
            }, this.setData({
                selectPratice: t
            }, {
                instant: !0
            }), this.chooseChangeNumCheck(), this.countPrice(), this.countSelectedName();
        },
        handleTapSideDish: function(e) {
            var t = this.data.selectSideDish, a = e.currentTarget.dataset.sideDishGroupId, s = e.currentTarget.dataset.sideDish, i = s.detailId, r = "".concat(a, "-").concat(i);
            0 !== s.sideDishStockDecimal && (t[r] ? delete t[r] : t[r] = {
                detailId: i,
                uuid: s.uuid,
                name: s.name,
                addPrice: s.addPrice
            }, this.setData({
                selectSideDish: t
            }, {
                instant: !0
            }), this.chooseChangeNumCheck(), this.countPrice(), this.countSelectedName());
        },
        handleTapRemark: function(e) {
            var t = this.data.selectRemarks, a = e.currentTarget.dataset.remark, s = a.detailId;
            t[s] ? delete t[s] : t[s] = {
                detailId: s,
                uuid: a.uuid,
                name: a.name
            }, this.setData({
                selectRemarks: t
            }, {
                instant: !0
            }), this.chooseChangeNumCheck(), this.countSelectedName();
        },
        handleAddCart: function(e) {
            var a = this.data, s = a.selectPratice, i = a.isSetMeal, r = a.setMealDisableAdd, c = a.clearStatus, d = a.openStatus, n = a.totalNumOverflow, l = a.num, u = a.addPriceDishHasBuy, h = a.customType, m = this.localData, p = m.needSelectPratice, S = m.setMealCallback, D = m.groupName, k = i && r || n || c || !d;
            if (!(this.localData.isAddPriceBuy && u || k)) {
                var f = p.filter(function(e) {
                    return !s[e.id];
                });
                if (f.length > 0) this.$toast.show("请选择".concat(f[0].name, "!")); else {
                    if (i) return S(this.getSendData(l)), void this.handleCloseSpecs();
                    var P = l + this.findCartNum();
                    try {
                        if (this.localData.isAddPriceBuy) this.$root.$emit("updateCartAddPriceBuy", t({}, this.getSendData(l)), this), 
                        this.setData({
                            addPriceDishHasBuy: !0
                        }); else if (!0 === this.localData.notNeedUpdateCart) {
                            var g = this.getSendData(l);
                            this.localData.chooseCallback && this.localData.chooseCallback(g);
                        } else {
                            (0, o.getCartModel)("orderfood").updateCart(t({}, this.getSendData(P)));
                        }
                        var v = (e.currentTarget.dataset || {}).dish, b = v.dishId, N = v.dishName, y = v.elemeLableShowText, C = v.dishRecommended;
                        this.$root.$logClick(".keruyun_spec.add_to_cart", {
                            dishId: b,
                            dishName: N,
                            groupName: D,
                            addScene: "在".concat(h, "的规格弹框中加购"),
                            eleLabel: y || "无饿了么标签",
                            spicyLabel: C && C.spicyDegree || "无辣度标签"
                        }), this.handleCloseSpecs();
                    } catch (e) {}
                }
            }
        },
        handleChangeNum: function(e) {
            var t = this.data, a = t.selectSku, s = t.isSetMeal, i = t.setMealOptionalNum, r = e.detail.num;
            if (s && r === i && this.$toast.show("最多可购买".concat(i, "份"), 2e3), s && r > i) this.setData({
                setMealDisableAdd: !0
            }); else {
                if (this.localData.isAddPriceBuy && 0 === r && this.setData({
                    addPriceDishHasBuy: !1
                }), this.localData.isEnableCheckSurplus) {
                    var o = a.overPlusNum;
                    if (void 0 !== o && r > o) return;
                }
                var c = r + this.findCartNum(), d = s ? a.comboStartNumber : a.startNumber || 1, n = 1 !== d && c <= d;
                this.setData({
                    num: r,
                    showStartNumTips: n
                }, {
                    instant: !0
                });
            }
        },
        findCartNum: function() {
            var e = this.localData, t = e.dishMd5, a = e.cartList, s = (void 0 === a ? [] : a).find(function(e) {
                return e.dishMd5 === t;
            });
            return s ? s.num : 0;
        },
        getSendData: function(e) {
            var t = this.data, a = t.dish, s = t.selectSku, i = t.selectSpec, r = t.selectPratice, o = t.selectSideDish, c = t.selectRemarks, d = t.currentPrice, n = t.isSetMeal, l = t.selectedName, u = this.localData.dishMd5, h = {
                dishes: {
                    dishId: a.dishId,
                    dishName: a.dishName,
                    skuId: s.skuId,
                    skuName: s.skuName,
                    unitId: s.unitId,
                    unitName: s.unitName,
                    kryunSkuUuid: s.kryunSkuUuid,
                    kryunSpecUuids: i.kryunSpecUuids,
                    skuImgUrl: s.skuImgUrl,
                    startNumber: s.startNumber,
                    startInterval: n ? 1 : s.startInterval,
                    cookbookCategoryId: a.cookbookCategoryId,
                    cookbookCategoryName: a.cookbookCategoryName,
                    practices: Object.values(r),
                    sideDishes: Object.values(o),
                    remarks: Object.values(c),
                    weighDishFlag: "Y" === s.weighFlag,
                    dishCookWayAccountModel: s.dishCookWayAccountModel,
                    num: e,
                    dishMd5: u,
                    originPrice: s.sellPrice,
                    dishSkuPrice: s.dishSkuPrice,
                    amount: n ? s.dishSkuPrice + d.addPrice : s.sellPrice + d.addPrice,
                    memberPrice: s.haveMemberSellPrice ? s.memberSellPrice + d.addPrice : void 0,
                    required: s.required,
                    overPlusNum: s.overPlusNum,
                    comboStartNumber: s.comboStartNumber
                },
                from: "orderfood-specs"
            };
            return n && (h.dishes.dishType = a.dishType, h.dishes.selectedName = l), s && s.dishMustRule && "MULTI_CHOICE_ONE" === s.dishMustRule.mustOrderRule && (h.dishes.mustOrderDTO = {
                mustOrderRule: "MULTI_CHOICE_ONE"
            }), h;
        },
        setCurrentMd5Code: function() {
            var e = this.data, t = e.selectSku, a = void 0 === t ? {} : t, i = e.selectPratice, r = e.selectSideDish, o = e.selectRemarks, c = a.dishId, d = a.skuId, n = (0, 
            s.createDishMd5)({
                dishId: c,
                skuId: d,
                selectPratices: i,
                selectSideDishs: r,
                selectRemarks: o,
                extra: this.localData.isAddPriceBuy ? "ADD_PRICE_BUY" : ""
            });
            return this.localData.dishMd5 = n, n;
        },
        handleToMemberPage: function() {
            var e = (0, r.getSceneType)().sceneType;
            this.$root.$logClick(".keruyun_menu.registered_member_click", {
                customType: "商品详情",
                customScene: e
            }), this.triggerEvent("handleShowMemberJoinModel");
        },
        changeNum: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = /^\d+$/;
            t.test(e) && this.setData({
                num: Number(e)
            });
        },
        chooseChangeNumCheck: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = this.localData, a = t.cartList, s = t.setMealCheck, i = t.isEnableCheckSurplus, r = this.data, o = r.num, c = r.selectSku, d = r.isSetMeal, n = r.setMealOptionalNum, l = this.setCurrentMd5Code(), u = a.find(function(e) {
                return e.dishMd5 === l;
            }), h = u && u.num || 0, m = o;
            !e && i && m > c.overPlusNum - h && (0 === (m = c.overPlusNum - h) ? m = 1 : this.$toast.show("该规格仅剩".concat(c.overPlusNum, "份，已经为您自动调整份数"), 2e3));
            var p = d ? c.comboStartNumber : c.startNumber || 1, S = 1 !== p && h + m <= p, D = d ? 1 : c.startInterval || 1, k = p;
            h >= p ? (k = D, m % D != 0 && (m = m < D ? D : Math.floor(o / D) * D, e || this.$toast.show("该规格".concat(p, "份起售，已经为您自动调整份数"), 2e3))) : m < p ? (m = p - h, 
            k = p - h, e || this.$toast.show("该规格".concat(p, "份起售，已经为您自动调整份数"), 2e3)) : (m - p) % D != 0 && (m -= (m - p) % D, 
            this.$toast.show("该规格".concat(p, "份起售，已经为您自动调整份数"), 2e3));
            var f = !1;
            if (d) {
                var P = a.find(function(e) {
                    return e.skuId === c.skuId;
                });
                (!s && P || k > n) && (f = !0), k > n && this.$toast.show("无法加购本菜品，".concat(p, "份起售，套餐仅剩").concat(n, "可加购"), 2e3), 
                m > n && n >= k && (m = k);
            }
            this.setData({
                num: m,
                startNumber: k,
                showStartNumTips: S,
                setMealDisableAdd: f
            }, {
                instant: !0
            });
        }
    }
});