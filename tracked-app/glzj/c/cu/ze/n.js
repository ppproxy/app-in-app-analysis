var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/regenerator")), o = require("../../../@babel/runtime/helpers/asyncToGenerator"), r = e(require("../../../m/zk/za")), a = require("../../../l/wh"), n = e(require("../../../m/z3/z6"));

(0, r.default)({
    name: "shop-info",
    data: {
        shopInfo: {},
        showModal: !1,
        themeColor: "",
        boderColor: "",
        shopCount: 0,
        template: "1",
        titleType: "text",
        name: "",
        titleImage: "",
        showTitle: !1,
        shopInfoTitle: ""
    },
    components: {
        authGeoModal: "auth-geo-modal"
    },
    localData: {
        options: Object.create(null)
    },
    methods: {
        init: function(e) {
            return this.localData.options = e, {
                root: this,
                isShow: !!this.parseCarouselData()
            };
        },
        render: function() {
            this.initShopInfoContainer();
        },
        formatShopInfo: function(e) {
            var t = e.storeCount, o = e.closestStoreCityName;
            return t > 0 ? "最近门店（本市".concat(t, "家门店）") : o ? "本市无门店，最近的门店在".concat(o) : "附近门店";
        },
        initShopInfoContainer: function() {
            var e = this;
            return o(t.default.mark(function o() {
                var r, s, i, l;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return r = e.parseCarouselData(), s = (0, a.getThemeColor)(), i = e.hexToRgba(s, .1).rgba, 
                        t.next = 5, n.default.isGPSOpenAndGeoAuth({
                            valueType: "object"
                        });

                      case 5:
                        l = t.sent, r && e.setData({
                            shopInfo: r.closestShop,
                            shopCount: r.shopCount,
                            themeColor: s,
                            boderColor: i,
                            showModal: !0,
                            showTitle: r.showTitle,
                            titleType: r.titleType || "text",
                            name: r.name,
                            titleImage: r.titleImage,
                            shopInfoTitle: e.formatShopInfo(r.closestShop),
                            locationAuth: l
                        });

                      case 7:
                      case "end":
                        return t.stop();
                    }
                }, o);
            }))();
        },
        parseCarouselData: function() {
            var e = this.localData.options.data;
            if (e && (!e || 0 !== Object.keys(e).length)) return e;
        },
        hexToRgba: function(e, t) {
            var o = "rgba(" + parseInt("0x" + e.slice(1, 3)) + "," + parseInt("0x" + e.slice(3, 5)) + "," + parseInt("0x" + e.slice(5, 7)) + "," + t + ")";
            return {
                red: parseInt("0x" + e.slice(1, 3)),
                green: parseInt("0x" + e.slice(3, 5)),
                blue: parseInt("0x" + e.slice(5, 7)),
                rgba: o
            };
        },
        handleGPSAuth: function(e) {
            var r = this;
            n.default.auth({
                context: this.getComponentById("authGeoModal")
            }, function() {
                var e = o(t.default.mark(function e(o) {
                    return t.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            r.$root.refresh();

                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }));
                return function(t) {
                    return e.apply(this, arguments);
                };
            }(), function(e) {});
        }
    }
});