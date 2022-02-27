var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), i = e(require("../../../m/zk/za")), t = (e(require("../../../m/5y")), 
require("../../../l/wh")), r = require("../../../l/w9");

(0, i.default)({
    name: "recommend-dish",
    data: {
        dishes: [],
        rightIcon: "https://gw.alicdn.com/tfs/TB176HVc8Bh1e4jSZFhXXcC9VXa-14-24.svg",
        titleType: "text",
        name: "推荐菜品",
        titleImage: "",
        showTitle: !1,
        styles: {
            0: "n84",
            1: "n8e",
            2: "n8n",
            3: "n8c",
            4: "n8z"
        }
    },
    localData: {
        options: Object.create(null),
        result: {}
    },
    methods: {
        init: function(e) {
            this.localData.options = e;
            var i = this.parseDishDataBefore();
            return this.localData.result = i, {
                root: this,
                isShow: i.dishes.length > 0
            };
        },
        render: function() {
            var e = this.localData.result, i = void 0 === e.showTitle || e.showTitle;
            this.setData({
                dishes: e.dishes,
                showContentGap: !!e.dishes.find(function(e) {
                    return e.haveMemberSellPrice;
                }),
                backgroundColor: (0, t.getThemeColor)(),
                showTitle: i,
                titleType: e.titleType || "text",
                name: e.name,
                titleImage: e.titleImage,
                memberFlag: (0, t.getMemberFlag)()
            });
        },
        parseV1ToV2: function(e) {
            return (e || []).filter(function(e) {
                return e.dishLogo;
            });
        },
        parseDishDataBefore: function() {
            var e = this.localData.options.data;
            return e.dishesV2 ? e.dishes = (e.dishesV2 || []).map(function(e) {
                var i = null;
                if (i = "Y" !== e.multiSpecFlag && e.cookbookDishSkuList && e.cookbookDishSkuList[0] ? e.cookbookDishSkuList[0] : (e.cookbookDishSkuList || []).find(function(i) {
                    return i.skuId === e.lowPriceSkuId;
                })) return {
                    dishId: e.dishId,
                    dishName: e.dishName,
                    dishType: e.dishType,
                    multiSpecFlag: e.multiSpecFlag,
                    priceAfterShowCopywriter: e.priceAfterShowCopywriter,
                    storedPayMemberPriceSwitch: e.storedPayMemberPriceSwitch,
                    memberDayTag: e.memberDayTag,
                    sellPrice: i.sellPrice,
                    haveMemberSellPrice: i.haveMemberSellPrice,
                    memberSellPrice: i.memberSellPrice,
                    unitName: i.unitName,
                    skuImgUrl: (0, r.getImageUrl)(i.skuImgUrl, "m_fill,h_300,w_300"),
                    jumpUrl: "pages/orderfood/index?actionType=openDishDetail&actionValue=".concat(e.dishId, "&multiSpecFlag=").concat(e.multiSpecFlag, "&dishType=").concat(e.dishType)
                };
            }).filter(function(e) {
                return e;
            }) : e.dishes = (e.dishes || []).filter(function(e) {
                return e.dishLogo;
            }).map(function(e) {
                return {
                    dishId: e.dishId,
                    dishName: e.dishName,
                    dishType: e.dishType,
                    multiSpecFlag: e.multiSpecFlag,
                    sellPrice: 100 * e.sellPrice,
                    haveMemberSellPrice: "MEMBER_PROMO" === e.bestPricePromoType,
                    memberSellPrice: 100 * e.bestPrice,
                    unitName: e.unitName,
                    skuImgUrl: (0, r.getImageUrl)(e.dishLogo, "m_fill,h_300,w_300"),
                    jumpUrl: e.jumpUrl
                };
            }), e;
        },
        onTapOrder: function() {
            this.$root.$logClick(".home.keruyunorder", {
                customType: !0
            }), this.$root.$relaunch("/pages/orderfood/index");
        },
        onTapOrderInfo: function(e) {
            var i = e.currentTarget.dataset.url;
            this.$root.$relaunch("/".concat(i));
        }
    }
});