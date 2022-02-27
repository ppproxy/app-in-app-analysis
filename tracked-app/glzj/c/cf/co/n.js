var t = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../m/zk/za")), e = require("../../../l/wh.js");

(0, t.default)({
    name: "点餐页-门头装修",
    properties: {
        statusBarHeight: {
            type: Number,
            value: 0
        },
        noticeData: {
            type: Object,
            value: {}
        },
        shopBaseInfo: {
            type: Object,
            value: {}
        },
        shopActivityList: {
            type: Array,
            value: []
        },
        shopCouponList: {
            type: Array,
            value: []
        },
        tableInfo: {
            type: Object,
            value: null
        },
        distanceDesc: {
            type: String,
            value: ""
        }
    },
    data: {
        shopActivityFormatList: [],
        showTags: []
    },
    logProps: {
        $$expElement: [ ".component-shop-header-container__table-text" ]
    },
    observers: {
        shopActivityList: function(t) {
            this.initShopActivityList();
        },
        noticeData: function() {
            this.initTages();
        }
    },
    ready: function() {},
    methods: {
        initShopActivityList: function() {
            var t = this.data.shopActivityList, e = void 0 === t ? [] : t;
            if (0 !== e.length) {
                var i = e.filter(function(t) {
                    var e = t.showText;
                    return !!(void 0 === e ? "" : e);
                });
                this.setData({
                    shopActivityFormatList: i
                });
            }
        },
        initTages: function() {
            for (var t = this.data.noticeData.tags, e = void 0 === t ? [] : t, i = [], s = 0, o = 0; o < e.length; o++) {
                if (s < 14) if (s + e[o].length <= 14) i.push(e[o]); else {
                    var a = e[o].slice(0, 14 - s) + "...";
                    i.push(a);
                }
                s += e[o].length;
            }
            this.setData({
                showTags: i
            });
        },
        handleClickMore: function() {
            var t = (0, e.getSceneType)().sceneType;
            this.$root.$logClick(".keruyun_menu.header_coupon_click", {
                customScene: t
            }), this.triggerEvent("handleClickMore");
        },
        jumpToShopList: function() {
            var t = (0, e.getSceneType)().sceneType;
            this.$root.$logClick(".keruyun_menu.switch_stores", {
                customScene: t
            }), this.$root.$navigate("/pages/store-list/index", {
                origin: "DINNER_PAGE"
            });
        }
    }
});