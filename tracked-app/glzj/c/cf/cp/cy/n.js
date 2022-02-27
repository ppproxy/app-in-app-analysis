var e = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../m/zk/za")), t = require("../../../../l/wh.js"), i = require("../../../../m/z8/zj");

(0, e.default)({
    name: "腰封推荐菜item",
    properties: {
        dish: {
            type: Object,
            value: {}
        },
        openStatus: {
            type: Boolean,
            value: !0
        },
        memberFlag: {
            type: Boolean,
            value: !1
        },
        imgStyle: {
            type: String,
            value: ""
        },
        containerStyle: {
            type: String,
            value: ""
        },
        bottomStyle: {
            type: String,
            value: ""
        },
        priceStyle: {
            type: String,
            value: ""
        },
        isInDishList: {
            type: Boolean,
            value: !1
        },
        dishListOrderedMap: {
            type: Object,
            value: {}
        }
    },
    ready: function() {
        var e = this;
        (0, i.getCartModel)("orderfood").bindDishDotChange(function(t) {
            var i = t.dishDot;
            e.setData({
                dishDot: i
            });
        }, !0);
    },
    methods: {
        handleOpenDetail: function() {
            var e = this, i = this.data, o = i.dish, a = i.openStatus, s = null;
            s = "Y" !== o.multiSpecFlag ? o.cookbookDishSkuList[0] : o.cookbookDishSkuList.find(function(e) {
                return e.skuId === o.lowPriceSkuId;
            }), "COMBO" === o.dishType ? this.$root.$emit("openDishDetail", {
                dishId: o.dishId
            }, this) : this.$root.$emit("openSpecs", {
                dish: o,
                showSku: s,
                isSetMeal: !1,
                btnFlag: !1,
                isFromDetailPage: !1,
                openStatus: a,
                customType: "推荐菜浮层",
                setMealCallback: function(t) {
                    e.triggerEvent("handleNumChange", t);
                }
            }, this);
            var n = (0, t.getSceneType)().sceneType;
            this.$root.$logClick(".keruyun_menu.product_details", {
                customScene: n
            });
        }
    }
});