var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../../@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createDishListModel = function(e) {
    return (0, h.createModel)(new m(e), "dishListModel", "default");
}, exports.destoryDishListModel = function() {
    (0, h.destoryModel)("dishListModel", "default");
}, exports.getDishListModel = function() {
    return (0, h.getModel)("dishListModel", "default");
};

var i = require("../../../@babel/runtime/helpers/objectSpread2"), s = require("../../../@babel/runtime/helpers/classCallCheck"), n = require("../../../@babel/runtime/helpers/createClass"), o = require("../../../@babel/runtime/helpers/inherits"), a = require("../../../@babel/runtime/helpers/createSuper"), h = function(e, i) {
    if (!i && e && e.__esModule) return e;
    if (null === e || "object" !== t(e) && "function" != typeof e) return {
        default: e
    };
    var s = u(i);
    if (s && s.has(e)) return s.get(e);
    var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in e) if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
        var h = o ? Object.getOwnPropertyDescriptor(e, a) : null;
        h && (h.get || h.set) ? Object.defineProperty(n, a, h) : n[a] = e[a];
    }
    n.default = e, s && s.set(e, n);
    return n;
}(require("../../../l/wo")), r = e(require("../../../m/zl/5o")), l = e(require("../../../m/zd/n"));

function u(e) {
    if ("function" != typeof WeakMap) return null;
    var t = new WeakMap(), i = new WeakMap();
    return (u = function(e) {
        return e ? i : t;
    })(e);
}

var d = l.default.$ltracker, c = {
    resultImg: "https://img.alicdn.com/imgextra/i3/O1CN01SD5X0U1ffcPQjMQkd_!!6000000004034-0-tps-792-792.jpg",
    resultTitle: "服务暂不可用",
    resultSubTitle: "去其他门店看看吧",
    resultMsgInfo: "当前服务不可用: DISH_MENU_ERROR",
    resultScene: "JS_ERROR"
}, m = function(e) {
    o(h, e);
    var t = a(h);
    function h(e) {
        var i;
        return s(this, h), (i = t.call(this, e)).dishListGlobalInfo = {}, i.dishListData = [], 
        i.categoryList = [], i.globalComponents = [], i.shopDecorationData = {}, i.collapseCategoryDishData = null, 
        i.currentCollapseCategoryDishData = null, i.initedDishList = !1, i.dishMenuColumn = "", 
        i.showLeftMenuIcon = !1, i.waistRecommendDishes = {}, i;
    }
    return n(h, [ {
        key: "bindDishListChange",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            this._event.$on("dishlist_change", e), t && this.initedDishList && this._emitDishList(this.dishListData);
        }
    }, {
        key: "bindCategoryListChange",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            this._event.$on("category-list-change", e), t && this._emitCategoryListChange(this.categoryList);
        }
    }, {
        key: "bindGlobalComponentsChange",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            this._event.$on("global-before-component-list", e), t && this.initedDishList && this._emitGlobalComponents(this.globalComponents);
        }
    }, {
        key: "bindCollapseDishDataChange",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            this._event.$on("fold-dishIds", e), t && this.initedDishList && this._emitCollapseDishData(this.currentCollapseCategoryDishData);
        }
    }, {
        key: "bindDishMenuColumnChange",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            this._event.$on("dish-menu-column", e), t && this.initedDishList && this._emitDishMenuColumn(this.dishMenuColumn);
        }
    }, {
        key: "bindtWaistRecommendDish",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            this._event.$on("waist-recommend-dishes", e), t && this.waistRecommendDishes && this._emitWaistRecommendDish(this.waistRecommendDishes);
        }
    }, {
        key: "_emitDishList",
        value: function(e) {
            this._event.$emit("dishlist_change", {
                menuAndDish: e,
                shopDecorationData: this.shopDecorationData,
                showLeftMenuIcon: this.showLeftMenuIcon
            });
        }
    }, {
        key: "_emitCategoryListChange",
        value: function(e) {
            this._event.$emit("category-list-change", {
                categoryList: e
            });
        }
    }, {
        key: "_emitGlobalComponents",
        value: function(e) {
            this.globalComponents = e, this._event.$emit("global-before-component-list", {
                globalComponents: e
            });
        }
    }, {
        key: "_emitCollapseDishData",
        value: function(e) {
            this._event.$emit("fold-dishIds", {
                collapseDishData: e
            });
        }
    }, {
        key: "_emitDishMenuColumn",
        value: function(e) {
            this.dishMenuColumn = e, this._event.$emit("dish-menu-column", e);
        }
    }, {
        key: "_emitWaistRecommendDish",
        value: function(e) {
            this.waistRecommendDishes = e, this._event.$emit("waist-recommend-dishes", {
                waistRecommendDishes: e
            });
        }
    }, {
        key: "unbindAll",
        value: function() {
            this._event.$off("dishlist_change"), this._event.$off("global-before-component-list"), 
            this._event.$off("fold-dishIds"), this._event.$off("dish-menu-column"), this._event.$off("category-list-change"), 
            this._event.$off("waist-recommend-dishes");
        }
    }, {
        key: "init",
        value: function(e, t, i) {
            try {
                this.dishListGlobalInfo = e, this.shopDecorationData = t, this.showLeftMenuIcon = i, 
                this.setGlobalComponents(e), e.dishMenu && e.dishMenu.data && (e.dishMenu.data.dishCates && this.setList(e.dishMenu.data.dishCates), 
                e.dishMenu.data.recommendDishDTO && this.setWaistRecommendDish(e.dishMenu.data.recommendDishDTO));
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                var s = this.root;
                s.showResult(c);
                var n = s.$getCustomError("点餐模型菜品解析错误", {
                    c1: e.message
                });
                d.logError(n);
            }
        }
    }, {
        key: "setList",
        value: function(e) {
            var t = this;
            this.initedDishList = !1, this.dishListData = e;
            var s = [], n = [], o = {};
            e.forEach(function(e) {
                var a = i({}, e);
                (a.dishList && delete a.dishList, n.push(a), e.dishList.forEach(function(e) {
                    s.push(e), "2" === t.dishMenuColumn && (e.dishViewHeight = t._calcTwoColumnDishHeight(e));
                }), "RECOMMEND_LABEL" === e.type) && e.dishList.forEach(function(t, i) {
                    i < 3 || (o[e.id] || (o[e.id] = {}), o[e.id][t.dishId] = 1);
                });
            }), this.categoryList = n;
            var a = this.root.localData.traceArray;
            (void 0 === a ? [] : a).push({
                end: +new Date(),
                type: "DISH_MODEL_END"
            }), this._emitDishList(this.dishListData), this._emitCategoryListChange(n), this._emitCollapseDishData(o), 
            this.collapseCategoryDishData = o, this.currentCollapseCategoryDishData = i({}, o), 
            r.default.put("ORDERFOOD_TO_SEARCH_DISH_LIST", s), this.initedDishList = !0;
        }
    }, {
        key: "setGlobalComponents",
        value: function(e) {
            var t = e.globalComponents, i = void 0 === t ? [] : t, s = e.column, n = void 0 === s ? "1" : s;
            this._emitGlobalComponents(i), this._emitDishMenuColumn(n);
        }
    }, {
        key: "setWaistRecommendDish",
        value: function(e) {
            this.waistRecommendDishes = e, this._emitWaistRecommendDish(e);
        }
    }, {
        key: "toggleCategoryCollapseExpand",
        value: function(e) {
            var t = this.currentCollapseCategoryDishData, i = this.collapseCategoryDishData;
            t[e] ? delete t[e] : i[e] && (t[e] = i[e]), this._emitCollapseDishData(t);
        }
    }, {
        key: "getCartDecorationInfo",
        value: function() {
            var e = this.shopDecorationData.dishCartData;
            return void 0 === e ? {} : e;
        }
    }, {
        key: "changeRoot",
        value: function(e) {
            if (!e) throw new Error("context is undefined");
            this.root = e;
        }
    }, {
        key: "_calcTwoColumnDishHeight",
        value: function(e) {
            var t = e.cookbookDishShowSkuInfoDTO, i = void 0 === t ? {} : t, s = e.promotionInfoDTOList, n = void 0 === s ? [] : s, o = e.summaryLabelText, a = void 0 === o ? "" : o, h = e.dishRecommended, r = (void 0 === h ? {} : h).spicyDegree, l = void 0 === r ? 0 : r, u = i.haveMemberSellPrice, d = void 0 !== u && u, c = "middle";
            return a || 0 !== n.length || d || l ? a && (n.length > 0 || d) && (c = "large") : c = "small", 
            {
                small: {
                    contentHeight: "326rpx",
                    infoHeight: "156rpx"
                },
                middle: {
                    contentHeight: "366rpx",
                    infoHeight: "196rpx"
                },
                large: {
                    contentHeight: "406rpx",
                    infoHeight: "236rpx"
                }
            }[c];
        }
    } ]), h;
}(h.default);