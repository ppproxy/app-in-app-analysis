var e = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../m/zk/za")), t = require("../../../l/wh"), o = require("../ct/ws/n"), r = "https://img.alicdn.com/imgextra/i2/O1CN01Ad0xPZ1XCI8xaV0Vj_!!6000000002887-2-tps-970-1040.png";

(0, e.default)({
    name: "orderfood-guide-component",
    data: {
        barandName: "",
        showChangeShop: !1,
        mainImageUrl: r,
        orderfoodGuideResult: {
            nearbyStore: {
                storeTitle: "",
                sotreId: ""
            },
            switchStoreInfo: {
                jumpUrl: ""
            }
        },
        serviceButton: {
            actionContent: {
                pagePath: "INNER_APP_MAKE_ORDER"
            },
            actionType: "inner_app",
            title: "开始点餐",
            type: "text"
        }
    },
    localData: {
        options: Object.create(null),
        themeIcons: [ "IconArrow" ]
    },
    methods: {
        init: function(e) {
            return this.localData.options = e || {}, {
                root: this,
                isShow: !0
            };
        },
        render: function() {
            var e = ((0, t.getBrandInfo)() || {}).brandName, o = this.localData.options.data, a = this.data.serviceButton, i = o || {}, n = i.mainImageUrl, s = void 0 === n ? "" : n, d = i.orderfoodGuideResult, u = i.serviceButton, c = d || {}, l = c.switchStoreInfo, h = c.nearbyStore, m = l && !!l.jumpUrl;
            this.setData({
                brandName: e,
                showChangeShop: m,
                mainImageUrl: s || r,
                orderfoodGuideResult: {
                    switchStoreInfo: l || {},
                    nearbyStore: h || {}
                },
                serviceButton: u || a
            });
        },
        handleOrderFood: function() {
            var e = this.data.serviceButton;
            o.gotoCustomizePage.call(this, e.actionType, e.actionContent, "orderfood-guide-component");
        },
        gotoShopList: function() {
            var e = this.data.orderfoodGuideResult;
            this.$root.$navigate(e.switchStoreInfo.jumpUrl || "/pages/store-list/index", {
                origin: "LIGHTSHOP_PAGE"
            });
        }
    }
});