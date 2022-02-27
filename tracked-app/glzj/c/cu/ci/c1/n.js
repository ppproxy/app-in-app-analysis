(0, require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../m/zk/za")).default)({
    name: "shop-info-item",
    data: {},
    properties: {
        shopInfo: {
            type: Object,
            value: {}
        },
        shopInfoTitle: {
            type: String,
            value: ""
        },
        showModal: {
            type: Boolean,
            value: !1
        },
        locationAuth: {
            type: Object,
            value: {}
        },
        themeColor: {
            type: String,
            value: ""
        },
        boderColor: {
            type: String,
            value: ""
        },
        shopCount: {
            type: String,
            value: ""
        },
        type: {
            type: String,
            value: "service-card"
        },
        buttonText: {
            type: String,
            value: ""
        },
        onButtonClick: {
            type: Function,
            value: function() {}
        },
        needCustomToShop: {
            type: Boolean,
            value: !1
        },
        gotoShopList: {
            type: Function,
            value: function() {}
        }
    },
    ready: function() {
        this._init();
    },
    observers: {
        title: function() {
            this._init();
        }
    },
    localData: {
        options: Object.create(null),
        themeIcons: [ "IconSwitch", "IconLightning", "IconJianTou" ]
    },
    methods: {
        _init: function() {},
        gotoShopList: function() {
            if (this.data.needCustomToShop) return this.triggerEvent("gotoShopList");
            this.$root.$navigate("/pages/store-list/index", {
                origin: "LIGHTSHOP_PAGE"
            });
        },
        gotoOrder: function() {
            this.$root.$relaunch("/pages/orderfood/index");
        },
        gotoCustomizePage: function() {
            this.triggerEvent("onButtonClick");
        },
        handleGEOAuth: function() {
            this.data.locationAuth.isMiniGeoAuth ? this.$root.$navigate("/pages/page-result/index", {
                fromPage: "pages/store-list/index",
                statusCode: "GEO_UNAUTHORIZED"
            }, !0) : this.triggerEvent("onButtonClick", {
                type: "geo_auth"
            });
        },
        showShopMap: function(t) {
            var e = t.currentTarget.dataset.item, o = e.latitude, i = e.longitude, n = e.shopName, a = e.address;
            this.$root.$logClick(".storelist.map_click", {}), wx.openLocation({
                latitude: o,
                longitude: i,
                name: n,
                address: a,
                scale: 14
            });
        },
        onCallPhone: function(t) {
            this.$root.$logClick(".storelist.tel_click", {});
            var e = t.currentTarget.dataset.phone;
            if (e) {
                var o = e.toString().split(",");
                if (o.length) return o.length >= 2 ? wx.showActionSheet({
                    itemList: o,
                    success: function(t) {
                        wx.makePhoneCall({
                            phoneNumber: o[t.tapIndex]
                        });
                    },
                    fail: function(t) {}
                }) : void wx.makePhoneCall({
                    phoneNumber: o[0]
                });
            }
        }
    }
});