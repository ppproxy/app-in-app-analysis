var t = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../m/zk/za")), e = require("../../../l/wh"), a = require("../../../l/wt");

(0, t.default)({
    name: "goods-window",
    data: {
        goodsList: [],
        themeColor: "",
        layout: null,
        showSwitch: !1,
        emptyData: !0,
        titleType: "text",
        name: "热卖商品",
        titleImage: "",
        showTitle: !1
    },
    localData: {
        options: Object.create(null),
        result: {}
    },
    methods: {
        init: function(t) {
            this.localData.options = t;
            var e = this.parseListData();
            return this.localData.result = e, {
                root: this,
                isShow: e && e.dataList && e.dataList.length > 0
            };
        },
        render: function() {
            this.initGoodsListContainer();
        },
        initGoodsListContainer: function() {
            var t = this.localData.result;
            if (t && t.dataList && t.dataList.length > 0) {
                var a = void 0 === t.showTitle || t.showTitle;
                this.setData({
                    goodsList: t.dataList,
                    layout: parseInt(t.layout, 10),
                    showSwitch: t.showSwitch,
                    themeColor: (0, e.getThemeColor)(),
                    showTitle: a,
                    titleType: t.titleType || "text",
                    name: t.name,
                    titleImage: t.titleImage
                });
            }
        },
        parseListData: function() {
            var t = this.localData.options.data, e = this.localData.options.origin;
            if (t) {
                var a, i = Object.keys(t);
                if (!t || 0 !== i.length) {
                    var o, s = t.goods;
                    o = !s || 0 === s.length, this.setData({
                        emptyData: o
                    });
                    var l = t.layout, n = t.name;
                    return s && s.length > 6 && "LIGHTSHOP_PAGE" === e && 3 === Number(l) && (a = !0, 
                    s = s.splice(0, 6)), s && (s = s.map(function(t) {
                        return t.saleNum = parseInt(t.saleNum, 10), t;
                    })), {
                        dataList: s,
                        layout: l,
                        showSwitch: a,
                        name: n,
                        showTitle: t.showTitle,
                        titleType: t.titleType,
                        titleImage: t.titleImage
                    };
                }
            }
        },
        chooseGoods: function(t) {
            var e = {
                goods: (2 === this.data.layout ? t.detail : t.currentTarget.dataset).item
            };
            a.jumpMiniGoodsPage.call(this, e);
        },
        switchTabbar: function() {
            this.$root.$switchTab("/pages/shopmall/index", {
                from: "pages/lightshop/index"
            });
        }
    }
});