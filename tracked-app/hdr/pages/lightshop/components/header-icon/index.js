var a = require("../../../../@babel/runtime/helpers/interopRequireDefault"), e = a(require("../../../../m/zk/za")), t = require("../../../../l/wh"), n = require("../../../../l/wa"), o = require("../../../../l/wm"), i = a(require("../../../../m/zl/59"));

a(require("../../../../m/5y"));

(0, e.default)({
    name: "header-icon",
    data: {
        brandName: "",
        brandLogo: "",
        shopName: "",
        distanceDesc: "",
        showInfo: !0,
        statusBarHeight: 96,
        iconHeight: 100,
        scrollTop: !1,
        animateTextShadow: "0 0 4rpx rgba(0, 0, 0, .5)",
        showModal: !1,
        animateOpacity: 0,
        minType: (0, n.getMiniType)(),
        styles: {
            my: "cnv"
        }
    },
    localData: {
        options: Object.create(null),
        themeIcons: [ "IconBrandIcon" ]
    },
    ready: function() {},
    methods: {
        init: function(a) {
            return this.localData.options = a, this;
        },
        render: function() {
            this.initHeaderContainer();
        },
        initHeaderContainer: function() {
            var a = this.parseCarouselData();
            if (a) {
                var e = void 0 === a.showModal || a.showModal;
                this.setData({
                    showModal: e
                }), this.initHeaderIconContainer();
            }
        },
        parseCarouselData: function() {
            var a = this.localData.options.data;
            if (a && (!a || 0 !== Object.keys(a).length)) return a;
        },
        isSupportPerfectAnimation: function() {
            return "function" == typeof this.$origincomponent.animate;
        },
        initHeaderIconContainer: function() {
            var a = (0, n.isIphoneXOrMore)(), e = (0, t.getBrandInfo)(), o = (0, t.getShopInfo)() || {}, r = i.default.getSync("systemInfo").statusBarHeight;
            if (e || 0 !== Object.keys(o).length) {
                var s, c, h = e.brandLogo, l = e.brandName, d = o.shopName;
                h || this.setData({
                    brandLogo: this.data.IconBrandIcon
                }), o.distanceDesc && (s = "约" + o.distanceDesc), c = a ? 2 * r + 8 : 2 * r + 12, 
                this.setData({
                    brandName: l,
                    brandLogo: h,
                    shopName: d,
                    distanceDesc: s,
                    iconHeight: c,
                    statusBarHeight: 2 * r
                });
            }
        },
        gotoShopList: function() {
            this.$root.$navigate("/pages/store-list/index", {
                origin: "LIGHTSHOP_PAGE"
            });
        },
        handlePageScroll: (0, o.throttle)(function(a) {
            var e = a.scrollTop < 0 ? 0 : a.scrollTop;
            if (!(e > 350)) {
                var t = e > 85 ? 85 : e, n = (e > 70 ? 1 : t / 85).toFixed(2), o = (1 - (1 - .8) * t / 85).toFixed(2), i = 0;
                i = e >= 0 && e <= 10 ? 0 : e >= 10 && e <= 40 ? 1 : e >= 40 && e <= 70 ? 2 : 3;
                this.setData({
                    animateOpacity: n,
                    animateScale: o > 1 ? 1 : o,
                    animationIconBrandColor: [ "rgba(255, 255, 255, 1)", "rgba(242, 242, 242, .5)", "rgb(67, 67, 67, .5)", "rgba(0, 0, 0, .87)" ][i],
                    animationIconfontColor: [ "rgba(255, 255, 255, 1)", "rgba(0, 0, 0, .10)", "rgba(0, 0, 0, .20)", "rgba(0, 0, 0, .38)" ][i],
                    animateTextShadow: [ "0 0 4rpx rgba(0, 0, 0, .5)", "none", "none", "none" ][i]
                });
            }
        }, 50)
    }
});