var e = require("../../../../@babel/runtime/helpers/interopRequireDefault");

require("../../../../@babel/runtime/helpers/Arrayincludes");

var t = e(require("../../../../m/zk/za")), a = require("../ws/n"), o = require("../../../../l/wa"), i = require("../../../../l/wh");

(0, t.default)({
    name: "advertise-carousel",
    data: {
        cur: 0,
        carouselList: [],
        swiperWrapStyle: {},
        swiperDotStyle: {},
        imageHeight: 0,
        customScene: ""
    },
    properties: {
        render: {
            type: Boolean,
            value: !1
        },
        data: {
            type: Object,
            value: {}
        },
        dishPage: {
            type: Boolean,
            value: !1
        },
        wrapStyle: {
            type: Object,
            value: {}
        },
        dotStyle: {
            type: Object,
            value: {}
        },
        logExposeKey: {
            type: String,
            value: ""
        },
        logClickKey: {
            type: String,
            value: ""
        }
    },
    logProps: {
        $$expElement: [ ".component-advertise-carousel-container" ]
    },
    localData: {
        options: Object.create(null),
        carouselData: [],
        exposedRecord: {}
    },
    observers: {
        "render, data, wrapStyle, dotStyle, logExposeKey, logClickKey, dishPage": function(e, t, a, o, i, r, l) {
            e && (this.init({
                data: t,
                wrapStyle: a,
                dotStyle: o,
                logExposeKey: i,
                logClickKey: r,
                dishPage: l
            }), this.render());
        }
    },
    ready: function() {
        if (this.data.render) {
            var e = this.data, t = e.data, a = e.wrapStyle, o = e.dotStyle, i = e.logExposeKey, r = e.logClickKey, l = e.dishPage;
            this.init({
                data: t,
                wrapStyle: a,
                dotStyle: o,
                logExposeKey: i,
                logClickKey: r,
                dishPage: l
            }), this.render();
        }
    },
    methods: {
        init: function(e) {
            this.localData.options = e;
            var t = e.data, a = !0;
            if (!t) return {
                root: this,
                isShow: !1
            };
            var i = t["carousel-image"];
            return "wx" === (0, o.getMiniType)() && Array.isArray(i) && (i = i.filter(function(e) {
                return "promotion" !== e.actionType || "promotion" === e.actionType && e.actionContent && e.actionContent.promotionType && [ "MEMBER_ASSISTANCE", "ONE_VOUCHER", "COUPON_BAG_ACTIVITY" ].includes(e.actionContent.promotionType);
            })), i || (a = !1), this.localData.carouselData = i, {
                root: this,
                isShow: a
            };
        },
        render: function() {
            var e = this, t = this.localData.options.data, o = this.localData.carouselData;
            if (t && o) {
                var r = (0, a.getSwiperWrapDefaultStyle)(this.localData.options.wrapStyle), l = (0, 
                a.getSwiperDotDefaultStyle)(this.localData.options.dotStyle), s = t.imageWidth, n = t.imageHeight, c = s && n ? ~~(n / s * r.width) : 0, p = (0, 
                i.getSceneType)().sceneType;
                c && (r.height = c), this.setData({
                    swiperWrapStyle: r,
                    swiperDotStyle: l,
                    carouselList: o,
                    customScene: p
                }, function() {
                    e.swiperExpose(o, 0);
                });
            }
        },
        swiperExpose: function(e, t) {
            var a = this.localData.options.logExposeKey || "";
            if (a.length > 0 && !this.localData.exposedRecord[t]) {
                var o = e[t] || {};
                this.$root.$logExpo(a, {
                    index: t,
                    customType: o.actionType ? o.actionType : ""
                }), this.localData.exposedRecord[t] = !0;
            }
        },
        handleSwiperChangeEvent: function(e) {
            a.swiperChangeEvent.call(this, e);
            var t = this.data.carouselList;
            try {
                var o = getCurrentPages();
                this.$root === o[o.length - 1] && this.swiperExpose(t, e.detail.current);
            } catch (e) {}
        },
        handleCarsuleClickEvent: function(e) {
            var t = e.currentTarget.dataset, o = this.localData.options.logClickKey || "";
            o.length > 0 && this.$root.$logClick(o, {
                customType: t.actiontype
            }), a.carsuleClickEvent.call(this, e, "advertise-carousel-component");
        }
    }
});