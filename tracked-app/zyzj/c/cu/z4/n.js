var e = require("../../../@babel/runtime/helpers/interopRequireDefault");

require("../../../@babel/runtime/helpers/Arrayincludes");

var t = e(require("../../../@babel/runtime/regenerator")), a = require("../../../@babel/runtime/helpers/asyncToGenerator"), r = e(require("../../../m/zk/za")), n = require("../../../l/wh"), o = require("../../../l/w9"), i = require("../ct/ws/n"), s = {
    "#EF0E0E": {
        backColor: "#FA741C",
        orderImg: "https://gw.alicdn.com/tfs/TB1Av8j0pY7gK0jSZKzXXaikpXa-200-200.png",
        takeoutImg: "https://gw.alicdn.com/tfs/TB1Si8D0Br0gK0jSZFnXXbRRXXa-200-200.png",
        payingImg: "https://gw.alicdn.com/tfs/TB11i.bo2zO3e4jSZFxXXaP_FXa-200-200.png",
        exchargeImg: "https://gw.alicdn.com/tfs/TB1oIXj0rY1gK0jSZTEXXXDQVXa-200-200.png"
    },
    "#FA741C": {
        orderImg: "https://gw.alicdn.com/tfs/TB1tZls0EY1gK0jSZFCXXcwqXXa-200-200.png",
        takeoutImg: "https://gw.alicdn.com/tfs/TB1FiXm0vb2gK0jSZK9XXaEgFXa-200-200.png",
        payingImg: "https://gw.alicdn.com/tfs/TB1fDWQlSslXu8jSZFuXXXg7FXa-200-200.png",
        exchargeImg: "https://gw.alicdn.com/tfs/TB1Kt8F0pP7gK0jSZFjXXc5aXXa-200-200.png"
    },
    "#FAAD14": {
        orderImg: "https://gw.alicdn.com/tfs/TB1P_VKp8Bh1e4jSZFhXXcC9VXa-200-200.png",
        takeoutImg: "https://gw.alicdn.com/tfs/TB1_d0t0rr1gK0jSZFDXXb9yVXa-200-200.png",
        payingImg: "https://gw.alicdn.com/tfs/TB1tzPQp79l0K4jSZFKXXXFjpXa-200-200.png",
        exchargeImg: "https://gw.alicdn.com/tfs/TB1FFJq0uH2gK0jSZJnXXaT1FXa-200-200.png"
    },
    "#13A8A8": {
        orderImg: "https://gw.alicdn.com/tfs/TB1uiVg0xz1gK0jSZSgXXavwpXa-200-200.png",
        takeoutImg: "https://gw.alicdn.com/tfs/TB1EOXm0vb2gK0jSZK9XXaEgFXa-200-200.png",
        payingImg: "https://gw.alicdn.com/tfs/TB14sdj0rY1gK0jSZTEXXXDQVXa-200-200.png",
        exchargeImg: "https://gw.alicdn.com/tfs/TB1.I0foRFR4u4jSZFPXXanzFXa-200-200.png"
    },
    "#26B6F2": {
        orderImg: "https://gw.alicdn.com/tfs/TB1vg4y0xv1gK0jSZFFXXb0sXXa-200-200.png",
        takeoutImg: "https://gw.alicdn.com/tfs/TB1w6PQp79l0K4jSZFKXXXFjpXa-200-200.png",
        payingImg: "https://img.alicdn.com/tfs/TB1CnMYkWNj0u4jSZFyXXXgMVXa-342-272.png",
        exchargeImg: "https://gw.alicdn.com/tfs/TB1uL8j0pY7gK0jSZKzXXaikpXa-200-200.png"
    },
    "#7602B3": {
        orderImg: "https://gw.alicdn.com/tfs/TB1NMvy0pP7gK0jSZFjXXc5aXXa-200-200.png",
        takeoutImg: "https://gw.alicdn.com/tfs/TB10grm0rr1gK0jSZFDXXb9yVXa-200-200.png",
        payingImg: "https://gw.alicdn.com/tfs/TB1Bwrm0rr1gK0jSZFDXXb9yVXa-200-200.png",
        exchargeImg: "https://gw.alicdn.com/tfs/TB1Gznx0uL2gK0jSZFmXXc7iXXa-200-200.png"
    },
    DEFAULT: {
        orderImg: "https://gw.alicdn.com/tfs/TB1o.Q.ZFP7gK0jSZFjXXc5aXXa-200-200.png",
        takeoutImg: "https://gw.alicdn.com/tfs/TB1N1sSZLb2gK0jSZK9XXaEgFXa-200-200.png",
        payingImg: "https://gw.alicdn.com/tfs/TB1xbIPZFY7gK0jSZKzXXaikpXa-200-200.png",
        exchargeImg: "https://gw.alicdn.com/tfs/TB1r4WgmMgP7K4jSZFqXXamhVXa-200-200.png"
    },
    DEFAULT_SMALL: {
        orderImg: "https://gw.alicdn.com/tfs/TB1NlWDjxvbeK8jSZPfXXariXXa-48-49.png",
        takeoutImg: "https://gw.alicdn.com/tfs/TB1bNkZZQL0gK0jSZFAXXcA9pXa-48-48.png",
        payingImg: "https://gw.alicdn.com/tfs/TB1swMbnmR26e4jSZFEXXbwuXXa-48-49.png",
        exchargeImg: "https://gw.alicdn.com/tfs/TB1YU7QZUz1gK0jSZLeXXb9kVXa-48-48.png"
    }
}, c = [ "1", "2", "3" ];

(0, r.default)({
    name: "service-card",
    logProps: {
        $$expElement: [ ".component-lightshop-order-type-max-pay", ".component-lightshop-order-type-max-order" ]
    },
    data: {
        dishOrder: !1,
        buyOrder: !1,
        takeOut: !1,
        themeColor: "",
        count: 2,
        layout: 1,
        services: [],
        isStation: !1,
        selectedTemplate: "1",
        buttonText: "",
        shopInfo: {},
        showModal: !1,
        boderColor: "",
        shopCount: 0,
        isHeadCarouseNext: !1,
        hasDishOrder: !1
    },
    localData: {
        options: Object.create(null),
        result: {},
        serviceList: []
    },
    methods: {
        init: function(e) {
            var t = [];
            this.localData.options = e;
            var a = this.parseServiceData();
            return this.localData.result = a, a && (t = a.cardData.services ? this.formatNewServices(a.cardData, a.selectedTemplate) : this.transformV1ToV2(a.cardData, a.selectedTemplate), 
            this.localData.serviceList = t), {
                root: this,
                isShow: t.length > 0
            };
        },
        render: function() {
            this.initServiceContainer();
        },
        components: {
            shopInfoComponent: "shop-info-component"
        },
        onTapGoTo: function(e) {
            try {
                var t = e.currentTarget.dataset.indx, a = this.data.buyOrder, r = this.data.services[t];
                this.$root.$logClick(".home.pay", {
                    customType: a
                }), i.gotoCustomizePage.call(this, r.actionType, r.actionContent, "service-card-component");
            } catch (e) {}
        },
        onOneTapGoTo: function(e) {
            try {
                var t = this.data.services[0];
                i.gotoCustomizePage.call(this, t.actionType, t.actionContent, "service-card-component");
            } catch (e) {}
        },
        transformV1ToV2: function(e, t) {
            var a = [], r = [];
            return e["dish-order"] && (r.length += 1), e["buy-order"] && (r.length += 1), e.takeOut && (r.length += 1), 
            e["dish-order"] && (this.setData({
                hasDishOrder: !0
            }), a.push({
                title: "开始点餐",
                subTitle: "在线点单不排队",
                promoType: e.member_menu && e.member_menu.proDishNum ? e.member_menu.proDishNum : "",
                imageUrl: this.getThemeIcon(r.length, "orderImg", e.selectedTemplate),
                actionType: "inner_app",
                actionContent: {
                    pagePath: "INNER_APP_MAKE_ORDER"
                }
            })), e["buy-order"] && a.push({
                title: "买单付款",
                subTitle: "单单省",
                promoType: "",
                imageUrl: this.getThemeIcon(r.length, "payingImg", e.selectedTemplate),
                actionType: "inner_app",
                actionContent: {
                    pagePath: "INNER_APP_CHECK"
                }
            }), e.takeOut && a.push({
                title: "点外卖",
                subTitle: "在线点、送到家",
                promoType: "",
                imageUrl: this.getThemeIcon(r.length, "takeoutImg", t),
                actionType: "inner_app",
                actionContent: {
                    pagePath: "INNER_APP_TAKE_OUT",
                    outerUrl: e.take_out_service_info.url
                }
            }), a;
        },
        getThemeIcon: function(e, t, a) {
            var r = (0, n.getThemeColor)();
            return 2 != +a && 1 == +e ? s.DEFAULT_SMALL[t] : s[r] ? s[r][t] : s.DEFAULT[t];
        },
        getImageBizType: function(e) {
            return Object.keys(s.DEFAULT).find(function(t) {
                return s.DEFAULT[t] === e;
            });
        },
        formatNewServices: function(e, t) {
            var a = this, r = e.services.filter(function(e) {
                var t = e.actionType, r = e.actionContent, n = void 0 === r ? {} : r;
                if ("inner_app" === t) switch (n.pagePath) {
                  case "INNER_APP_MAKE_ORDER":
                    e.restaurant_service_enable && e.restaurant_service_enable.isOpen && a.setData({
                        hasDishOrder: !0
                    });
                    break;

                  case "INNER_APP_CHECK":
                    e.buy_service_enable && e.buy_service_enable.isOpen;
                    break;

                  case "INNER_APP_TAKE_OUT":
                    e.take_out_service_info && e.take_out_service_info.isOpen;
                    break;

                  case "INNER_APP_MY_MEMBER_MALL":
                    e.point_mall_enable && e.point_mall_enable.show;
                    break;

                  case "INNER_APP_EXCHARGE":
                    e.memberRechargeEnable;
                    break;

                  default:
                    !0;
                }
                if ("promotion" === t) switch (n.promotionType) {
                  case "ONE_VOUCHER":
                    n.oneVoucherInfo && n.oneVoucherInfo.activityStatus;
                    break;

                  default:
                    !0;
                }
                return !0;
            });
            r.forEach(function(e) {
                var n = (0, o.getImageUrl)(e.imageUrl);
                n.includes("gw.alicdn.com") && (e.restaurant_service_enable ? n = a.getThemeIcon(r.length, "orderImg", t) : e.buy_service_enable ? n = a.getThemeIcon(r.length, "payingImg", t) : e.take_out_service_info ? n = a.getThemeIcon(r.length, "takeoutImg", t) : "inner_app" === e.actionType && "INNER_APP_EXCHARGE" === e.actionContent.pagePath ? n = a.getThemeIcon(r.length, "exchargeImg", t) : a.getImageBizType(n) && (n = a.getThemeIcon(r.length, a.getImageBizType(n), t)), 
                e.imageUrl = n), e.restaurant_service_enable && (e.promoType = e.member_menu && e.member_menu.proDishNum ? e.member_menu.proDishNum : e.promoType), 
                e.memberRechargeMarketTag && !e.promoType && (e.promoType = e.memberRechargeMarketTag), 
                e.take_out_service_info && e.take_out_service_info.url && (e.actionContent.outerUrl = e.take_out_service_info.url);
            });
            var n = !1;
            return 3 === r.length && (r.forEach(function(e, t) {
                t > 0 && (e.promoType || e.subTitle) && (n = !0);
            }), this.setData({
                isStation: n
            })), r;
        },
        initServiceContainer: function() {
            var e = this;
            return a(t.default.mark(function a() {
                var r, o, i, s, c;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        (r = e.localData.result) && (o = e.localData.serviceList, i = (0, n.getThemeColor)(), 
                        s = e.hexToRgba(i, .1).rgba, c = r.before && r.before.id.startsWith("headCarouselComponent"), 
                        e.setData({
                            selectedTemplate: r.selectedTemplate,
                            services: o,
                            count: o.length,
                            layout: r.cardData.services && o.length === r.cardData.services.length ? r.cardData.layout : 1,
                            themeColor: i,
                            boderColor: s,
                            buttonText: o[0] && o[0].title,
                            shopInfo: r.cardData.closestShop,
                            shopCount: r.cardData.shopCount,
                            showModal: !!r.cardData.closestShop,
                            isHeadCarouseNext: c
                        }));

                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, a);
            }))();
        },
        parseServiceData: function() {
            var e = this.localData.options.data, t = this.localData.options.selectedTemplate, a = void 0 === t ? "1" : t, r = this.localData.options.before;
            if (e) return c.includes("".concat(a)) ? {
                cardData: e,
                selectedTemplate: "".concat(a),
                before: r
            } : void 0;
        },
        hexToRgba: function(e, t) {
            var a = "rgba(" + parseInt("0x" + e.slice(1, 3)) + "," + parseInt("0x" + e.slice(3, 5)) + "," + parseInt("0x" + e.slice(5, 7)) + "," + t + ")";
            return {
                red: parseInt("0x" + e.slice(1, 3)),
                green: parseInt("0x" + e.slice(3, 5)),
                blue: parseInt("0x" + e.slice(5, 7)),
                rgba: a
            };
        }
    }
});