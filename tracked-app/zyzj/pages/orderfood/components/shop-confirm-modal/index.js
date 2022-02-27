var e = require("../../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../../@babel/runtime/regenerator")), a = require("../../../../@babel/runtime/helpers/asyncToGenerator"), i = e(require("../../../../m/zk/za")), r = require("../../../../l/wh");

(0, i.default)({
    name: "shop-confirm-modal",
    data: {
        isShow: !1,
        selectedShop: null,
        mapMarkers: [],
        title: "",
        subTitle: "确认订单后将无法修改",
        primaryBtnText: "",
        list: [],
        next: function() {},
        needCallback: !1
    },
    localData: {
        callBack: function() {}
    },
    components: {},
    ready: function() {},
    methods: {
        show: function(e) {
            var t = this, a = e.list, i = e.shop, r = void 0 === i ? {} : i, s = e.title, n = e.primaryBtnText, o = e.singleStore, l = e.needCallback;
            return new Promise(function(e) {
                t.setData({
                    isShow: !0,
                    list: a,
                    selectedShop: r,
                    title: s,
                    singleStore: o,
                    primaryBtnText: n,
                    markers: t.formatMarkers(a, r.shopId),
                    needCallback: l
                }), t.localData.callBack = e;
            });
        },
        handleSelectShop: function(e) {
            var t = e.currentTarget.dataset.item;
            this.setData({
                selectedShop: t,
                markers: this.formatMarkers(this.data.list, t.shopId)
            });
        },
        formatMarkers: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 ? arguments[1] : void 0;
            return e.map(function(e) {
                var a = {
                    id: e.shopId,
                    iconPath: "https://img.alicdn.com/tfs/TB1o7JyhlFR4u4jSZFPXXanzFXa-44-44.png",
                    width: 15,
                    height: 15,
                    longitude: e.longitude,
                    latitude: e.latitude
                };
                if (e.shopId === t) {
                    var i = {
                        content: e.shopName,
                        color: "#fff",
                        bgColor: "#00070F",
                        display: "ALWAYS",
                        padding: "8",
                        borderRadius: "15",
                        textAlign: "center"
                    };
                    a.callout = i;
                }
                return a;
            });
        },
        chooseThis: function() {
            var e = this;
            return a(t.default.mark(function a() {
                var i;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        (i = e.data.selectedShop || {}) && ((0, r.setGlobalShopId)(i.shopId), (0, r.setGlobalShopInfo)({
                            shopId: i.shopId,
                            shopName: i.shopName,
                            address: i.address,
                            distanceDesc: i.distanceDesc,
                            distanceValue: i.distanceValue,
                            latitude: i.latitude,
                            longitude: i.longitude,
                            phone: i.contactMobile,
                            provinceId: i.provinceId,
                            cityId: i.cityId,
                            areaId: i.areaId
                        }), e.dismiss(), e.data.needCallback && e.triggerEvent("handleOK"));

                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, a);
            }))();
        },
        chooseOther: function() {
            this.dismiss(), this.triggerEvent("handleCancel"), this.$root.$navigate("/pages/store-list/index", {
                origin: "DINNER_PAGE"
            });
        },
        dismiss: function() {
            this.localData.callBack && this.localData.callBack(), this.setData({
                isShow: !1
            });
        }
    }
});