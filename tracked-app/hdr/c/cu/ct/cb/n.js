var e = require("../../../../@babel/runtime/helpers/interopRequireDefault");

require("../../../../@babel/runtime/helpers/Arrayincludes");

var t = e(require("../../../../m/zk/za")), i = require("../../../../l/wh"), a = require("../../../../l/wa"), r = require("../ws/n");

(0, t.default)({
    name: "head-carousel",
    data: {
        cur: 0,
        carouselList: [],
        swiperWrapStyle: {},
        swiperDotStyle: {},
        imageHeight: 0
    },
    localData: {
        options: Object.create(null),
        exposedRecord: {}
    },
    methods: {
        init: function(e) {
            return this.localData.options = e, {
                root: this,
                isShow: !0
            };
        },
        render: function() {
            var e = this, t = this.localData.options.data, o = this.localData.options.next, n = void 0 === o ? {} : o, s = n.id && n.id.startsWith("memberGuidComponent");
            if (t) {
                var l = t["carousel-image"];
                if ("wx" === (0, a.getMiniType)() && Array.isArray(l) && (l = l.filter(function(e) {
                    return "promotion" !== e.actionType || "promotion" === e.actionType && e.actionContent && e.actionContent.promotionType && [ "MEMBER_ASSISTANCE", "ONE_VOUCHER", "COUPON_BAG_ACTIVITY" ].includes(e.actionContent.promotionType);
                })), l && l.length) {
                    var c = (0, r.getSwiperWrapDefaultStyle)();
                    Object.assign(c, {
                        width: 750,
                        height: 562,
                        borderRadius: 0,
                        marginBottom: 0
                    });
                    var p = (0, r.getSwiperDotDefaultStyle)();
                    !(0, i.getMemberFlag)() && s ? Object.assign(p, {
                        bottom: 146
                    }) : Object.assign(p, {
                        bottom: 84
                    });
                    var u = t.imageWidth, h = t.imageHeight, d = u && h ? ~~(h / u * c.width) : 0;
                    d && (c.height = d), this.setData({
                        swiperWrapStyle: c,
                        swiperDotStyle: p,
                        carouselList: l
                    }, function() {
                        e.swiperExpose(l, 0);
                    });
                }
            }
        },
        swiperExpose: function(e, t) {
            var i = e[t];
            this.localData.exposedRecord[t] || (this.$root.$logExpo(".home.banner", {
                index: t,
                customType: i.actionType
            }), this.localData.exposedRecord[t] = !0);
        },
        handleSwiperChangeEvent: function(e) {
            r.swiperChangeEvent.call(this, e);
            var t = this.data.carouselList;
            try {
                var i = getCurrentPages();
                this.$root === i[i.length - 1] && this.swiperExpose(t, e.detail.current);
            } catch (e) {}
        },
        handleCarsuleClickEvent: function(e) {
            var t = e.currentTarget.dataset;
            this.$root.$logClick(".home.banner", {
                customType: t.actiontype
            }), r.carsuleClickEvent.call(this, e, "head-carousel-component");
        }
    }
});