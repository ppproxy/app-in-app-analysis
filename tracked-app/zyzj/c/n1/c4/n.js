var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/regenerator")), a = require("../../../@babel/runtime/helpers/asyncToGenerator"), i = require("../../../@babel/runtime/helpers/toConsumableArray"), s = e(require("../../../m/zk/za")), r = e(require("../../../m/zl/5o")), o = e(require("../../../l/wd/w1")), u = e(require("../../../m/z3/z7")), n = require("../../../l/wu"), d = require("../../../l/w9"), l = require("../../../m/z8/zj"), h = require("../../cz/zf/n");

(0, s.default)({
    name: "菜品添加购物车组件",
    properties: {
        isSetMeal: {
            type: Boolean,
            value: !1
        },
        setMealGroupId: {
            type: String,
            value: ""
        },
        optionalNum: {
            type: Number,
            value: -1
        },
        disableAdd: {
            type: Boolean,
            value: !1
        },
        dish: {
            type: Object,
            value: {}
        },
        dishDot: {
            type: Object,
            value: {}
        },
        showSurplus: {
            type: Boolean,
            value: !1
        },
        onlyShowAdd: {
            type: Boolean,
            value: !1
        },
        logType: {
            type: String,
            value: ""
        },
        openStatus: {
            type: Boolean,
            value: !1
        },
        fromDetailPage: {
            type: Boolean,
            value: !1
        },
        fromMustDishCate: {
            type: Boolean,
            value: !1
        },
        isInDishList: {
            type: Boolean,
            value: !1
        },
        isInBigRecommendDishList: {
            type: Boolean,
            value: !1
        },
        dishMenuColumn: {
            type: String,
            value: "1"
        },
        groupName: {
            type: String,
            value: ""
        }
    },
    data: {
        show: !1,
        clearStatus: !1,
        isShowChoose: !1,
        isShowStartNumber: !1,
        num: 0,
        disableAddInner: !1,
        isShowMinus: !1,
        defaultDishMin: 0
    },
    localData: {
        isShowStartNumber: !1,
        isFromDetailPage: !1,
        isEnableCheckSurplus: !1,
        customType: ""
    },
    observers: {
        dish: function(e) {
            this.onDishChange(e);
        },
        dishDot: function(e) {
            this.onDishDotChange(e);
        },
        num: function(e) {
            this.onDishNumChange(e);
        }
    },
    ready: function() {
        var e = this, t = this.data, a = t.dish;
        t.dishDot, t.num;
        "2" === t.dishMenuColumn && this.$root && this.$root.$on("numShrink", function(t) {
            var a = t.isNumShrink;
            e.setData({
                isNumShrink: a
            });
        }, this), (0, d.getStoreBaseConfig)().then(function(t) {
            var a = t.enableCheckSurplus, i = void 0 === a ? 0 : a;
            e.localData.isEnableCheckSurplus = !!i;
        });
        var i = a.cookbookDishSkuList && a.cookbookDishSkuList.length && a.cookbookDishSkuList[0] || {};
        "N" === a.multiSpecFlag && i && i.dishMustRule && "FIXED" === i.dishMustRule.mustOrderRule && (0, 
        l.getCartModel)("orderfood").bindCartListChange(function(t) {
            var i = t.cartData.list, s = 0;
            i.forEach(function(e) {
                e.dishId === a.dishId && e.mustOrderDTO && (s = e.mustOrderDTO.minOrderNum);
            }), e.setData({
                defaultDishMin: s
            });
        }, !0);
    },
    detached: function() {
        "2" === this.data.dishMenuColumn && this.$root && this.$root.$off("numShrink", this);
    },
    methods: {
        onDishChange: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if ("cookbookDishSkuList" in t) {
                var a = t.cookbookDishSkuList[0], s = a.practiceGroups, r = a.sideDishGroups, o = a.remarks, u = this.data, d = u.isSetMeal, l = u.num, h = d ? t.cookbookDishSkuList[0].comboStartNumber : t.cookbookDishSkuList[0].startNumber, c = 1 !== h;
                this.localData.isShowStartNumber = c;
                var m = !d && "Y" === t.multiSpecFlag || "COMBO" === t.dishType || [].concat(i(s), i(r), i(o)).length > 0;
                (0, n.getSurplusData)({
                    dish: t,
                    scene: "cart",
                    num: l
                }).then(function(t) {
                    var a = t.isSoldOut, i = t.disableAdd, s = t.disableMinus;
                    e.setData({
                        show: !0,
                        clearStatus: a,
                        disableAddInner: i,
                        isShowMinus: s,
                        isShowStartNumber: c && 0 === l,
                        isShowChoose: m
                    }, function() {
                        return e.triggerReady();
                    });
                });
            } else this.setData({
                show: !1
            }, function() {
                return e.triggerReady();
            });
        },
        triggerReady: function() {
            this.triggerEvent("ready");
        },
        onDishDotChange: function(e) {
            if (e) {
                var t = this.data, a = t.dish, i = void 0 === a ? {} : a, s = t.isShowChoose, o = t.setMealGroupId, u = t.isSetMeal, n = t.fromMustDishCate, d = i.dishId, l = e[d] || 0;
                if (u) {
                    var h = i.cookbookDishSkuList[0].skuId;
                    l = e["".concat(o, "-").concat(h)] || 0;
                }
                n && (l = e["mustAddDish-".concat(d)] || 0);
                var c = r.default.get("orderfood.current.update.dish.sku.id"), m = i.cookbookDishSkuList && i.cookbookDishSkuList[0].dishId || "";
                (s || c !== m) && this.setData({
                    num: l,
                    isShowStartNumber: 0 === l && this.localData.isShowStartNumber
                });
            }
        },
        onDishNumChange: function(e) {
            var t = this, a = this.data.dish;
            (0, n.getSurplusData)({
                dish: a,
                scene: "cart",
                num: e
            }).then(function(a) {
                var i = a.isSoldOut, s = a.disableAdd, r = a.disableMinus;
                t.setData({
                    clearStatus: i,
                    disableAddInner: s,
                    isShowMinus: r,
                    isShowStartNumber: 0 === e && t.localData.isShowStartNumber
                });
            });
        },
        userAuth: function(e) {
            var t = this;
            if ("FAST_FOOD" !== r.default.get("orderfood.type")) {
                var a = this.data.dish, i = (void 0 === a ? {} : a).dishName || "";
                this.$root.$logOther("/dish_add_cart_auth_start", {
                    c1: "加购按钮点击-授权开始",
                    c2: i
                }), u.default.auth({
                    context: this.$root.getGlobalComponentById("authUserModal")
                }, function(a) {
                    e(), t.$root.$logOther("/dish_add_cart_auth_success", {
                        c1: "加购按钮点击-授权成功",
                        c2: i,
                        c3: JSON.stringify(a)
                    });
                }, function(a) {
                    e(), t.$root.$logOther("/dish_add_cart_auth_error", {
                        c1: "加购按钮点击-授权失败",
                        c2: i,
                        c3: a.message
                    });
                });
            } else e();
        },
        handleShowSpecs: function(e) {
            var i = this;
            return a(t.default.mark(function a() {
                var s, r, o, u, n, d, l, c, m, p, S, g, b, k, f, D;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (t.prev = 0, s = i.data.isSetMeal, r = {}, s) {
                            t.next = 13;
                            break;
                        }
                        return o = e.detail && e.detail.dishId || e.currentTarget.dataset && e.currentTarget.dataset.dishid || "", 
                        t.next = 7, (0, h.getDishDetail)({
                            needItemAvailablePromo: !0,
                            dishId: o
                        });

                      case 7:
                        if ((u = t.sent).data) {
                            t.next = 10;
                            break;
                        }
                        return t.abrupt("return");

                      case 10:
                        r = u.data.data || {}, t.next = 14;
                        break;

                      case 13:
                        r = i.data.dish;

                      case 14:
                        if (n = i.data, d = n.setMealGroupId, l = n.optionalNum, c = n.num, m = n.disableAdd, 
                        p = n.clearStatus, S = n.openStatus, g = n.logType, b = n.groupName, i.$origincomponent.props && i.$origincomponent.props.isSetMeal || i.$parent && "商品详情" === i.$parent.$parent.name ? (i.localData.isFromDetailPage = !0, 
                        i.localData.customType = "选套餐浮层") : (i.localData.isFromDetailPage = !1, i.localData.customType = g), 
                        !(m && 0 === c || p)) {
                            t.next = 18;
                            break;
                        }
                        return t.abrupt("return");

                      case 18:
                        if ("COMBO" !== r.dishType) {
                            t.next = 21;
                            break;
                        }
                        return i.$root.$emit("openDishDetail", {
                            dishId: r.dishId,
                            customType: "套餐"
                        }, i), t.abrupt("return");

                      case 21:
                        k = i.localData, f = k.isFromDetailPage, D = k.customType, i.userAuth(function() {
                            i.$root.$emit("openSpecs", {
                                groupName: b,
                                dish: r,
                                isSetMeal: s,
                                setMealGroupId: d,
                                optionalNum: l,
                                currentSelectedNum: c,
                                btnFlag: !0,
                                openStatus: S,
                                isFromDetailPage: f,
                                customType: D,
                                setMealCallback: function(e) {
                                    i.triggerEvent("handleNumChange", e);
                                }
                            }, i);
                        }), t.next = 27;
                        break;

                      case 25:
                        t.prev = 25, t.t0 = t.catch(0);

                      case 27:
                      case "end":
                        return t.stop();
                    }
                }, a, null, [ [ 0, 25 ] ]);
            }))();
        },
        handleChangeNum: function(e) {
            var t = this;
            this.userAuth(function() {
                var a = e.detail, i = a.num, s = a.type, u = void 0 === s ? "plus" : s, n = !1;
                e.currentTarget && e.currentTarget.dataset.startNumber && (i = e.currentTarget.dataset.startNumber, 
                n = !0);
                var d = t.data, h = d.dish, c = d.logType, m = d.isSetMeal, p = d.disableAdd, S = d.isShowChoose, g = d.groupName;
                if (S) {
                    if ("plus" === u) t.handleShowSpecs(e); else if ("minus" === u) return void t.$root.$emit("handleDishListMinus", {
                        dishId: t.data.dish.dishId
                    }, t);
                } else {
                    var b = h.cookbookDishSkuList[0];
                    if (!n || !p) {
                        if (t.localData.isEnableCheckSurplus) {
                            var k = b.overPlusNum;
                            if (void 0 !== k && i > k) return;
                        }
                        var f = t.data, D = f.num, v = f.optionalNum;
                        if (!(m && -1 !== v && i - D > v)) {
                            var N = {
                                toastText: "Y" === b.weighFlag ? "称重商品以实际称重为准" : "",
                                dishes: {
                                    dishId: h.dishId,
                                    dishName: h.dishName,
                                    groupName: h.groupName || "",
                                    skuId: b.skuId,
                                    skuName: b.skuName,
                                    unitId: b.unitId,
                                    unitName: b.unitName,
                                    dishMd5: (0, o.default)("".concat(b.dishId, "-").concat(b.skuId)),
                                    kryunSkuUuid: b.kryunSkuUuid,
                                    skuImgUrl: b.skuImgUrl,
                                    startNumber: b.startNumber,
                                    startInterval: m ? 1 : b.startInterval,
                                    multiSpecFlag: h.multiSpecFlag,
                                    comboStartNumber: b.comboStartNumber,
                                    cookbookCategoryId: h.cookbookCategoryId,
                                    cookbookCategoryName: h.cookbookCategoryName,
                                    practices: [],
                                    sideDishes: [],
                                    remarks: [],
                                    weighDishFlag: "Y" === b.weighFlag,
                                    dishCookWayAccountModel: b.dishCookWayAccountModel,
                                    num: i,
                                    originPrice: b.sellPrice,
                                    dishSkuPrice: b.dishSkuPrice,
                                    amount: m ? b.dishSkuPrice : b.sellPrice,
                                    memberPrice: b.haveMemberSellPrice ? b.memberSellPrice : void 0,
                                    required: b.required,
                                    overPlusNum: b.overPlusNum
                                }
                            };
                            if (b && b.dishMustRule && "MULTI_CHOICE_ONE" === b.dishMustRule.mustOrderRule && (N.dishes.mustOrderDTO = {
                                mustOrderRule: "MULTI_CHOICE_ONE"
                            }), (e.detail.x || e.detail.clientX) && (N.x = e.detail.x || e.detail.clientX, N.y = e.detail.y || e.detail.clientY), 
                            m) t.triggerEvent("handleNumChange", N); else try {
                                var y = (0, l.getCartModel)("orderfood");
                                r.default.put("orderfood.current.update.dish.sku.id", N.dishes.dishId), y.updateCart(N);
                            } catch (e) {}
                            if (t.setData({
                                num: i
                            }, {
                                instant: !0
                            }), c) {
                                var C = N.dishes, I = C.dishId, M = C.dishName, w = C.elemeLableShowText, O = C.dishRecommended;
                                t.$root.$logClick(".keruyun_menu.add_to_cart", {
                                    groupName: g,
                                    dishId: I,
                                    dishName: M,
                                    addScene: c + "中直接加购",
                                    eleLabel: w || "无饿了么标签",
                                    spicyLabel: O && O.spicyDegree || "无辣度标签"
                                });
                            }
                        }
                    }
                }
            });
        },
        handleMinusCombo: function(e) {
            var t = e.detail.isComboMinus;
            this.$root.$emit("handleComboMinus", {
                isComboMinus: t,
                dishId: this.data.dish.dishId
            }, this);
        }
    }
});