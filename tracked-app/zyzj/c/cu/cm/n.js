var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/regenerator")), a = require("../../../@babel/runtime/helpers/asyncToGenerator"), i = e(require("../../../m/zk/za")), o = e(require("../../../m/zt")), r = require("../../../l/wt"), n = require("../zf/n"), s = require("../../../l/wh"), u = require("../../../l/wa");

(0, i.default)({
    name: "goods-list",
    data: {
        goodsList: [],
        pageNum: 0,
        pageSize: 6,
        themeColor: "",
        emptyData: !0,
        titleType: "text",
        name: "",
        titleImage: "",
        showTitle: !0
    },
    localData: {
        options: Object.create(null)
    },
    methods: {
        init: function(e) {
            return this.localData.options = e, {
                root: this,
                isShow: !0
            };
        },
        render: function() {
            this.initGoodsListContainer();
        },
        initGoodsListContainer: function() {
            var e = this;
            return a(t.default.mark(function a() {
                var i, o;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return i = e.parseData(), t.next = 3, e.getGoodsList();

                      case 3:
                        o = void 0 === i.showTitle || i.showTitle, i && e.setData({
                            showTitle: o,
                            titleType: i.titleType || "text",
                            name: i.name,
                            titleImage: i.titleImage
                        });

                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, a);
            }))();
        },
        parseData: function() {
            var e = this.localData.options.data;
            if (e && (!e || 0 !== Object.keys(e).length)) return e;
        },
        getGoodsList: function() {
            var e = this;
            return a(t.default.mark(function a() {
                var i, r, l, p, d, c, m, g, f, h, b, I, D, T, y;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return i = (0, s.getAppBaseInfo)(), r = i.appId, l = (0, s.getShopId)(), p = (0, 
                        s.getShopInfo)(), d = p.cityId, c = (0, s.getGeoInfo)() || {}, m = c.longitude, 
                        g = void 0 === m ? o.default.DEF_LONGITUDE : m, f = c.latitude, h = void 0 === f ? o.default.DEF_LATITUDE : f, 
                        b = {
                            pageNum: e.data.pageNum + 1,
                            pageSize: 6
                        }, I = {
                            pageCode: "CSHOP_MALL_INDEX",
                            appCode: "KERUYUN_MERCHANT_APP",
                            appId: r,
                            appType: (0, u.getMiniType)(),
                            longitude: g,
                            latitude: h,
                            appVersion: (0, u.getVersion)(),
                            storeId: l,
                            cityCode: d,
                            componentCode: "goods-list-component",
                            bizCode: "mall_item_koubei_list",
                            finParams: JSON.stringify(b)
                        }, t.next = 8, (0, n.getShopMallGoodsListInfo)(I);

                      case 8:
                        if ((D = t.sent) || e.$redirect("/pages/page-result/index", {
                            fromPage: "pages/shopmall/index"
                        }), !(T = D.data.data.data) || 0 !== Object.keys(T).length) {
                            t.next = 13;
                            break;
                        }
                        return t.abrupt("return");

                      case 13:
                        if (0 !== (y = e.data.goodsList.concat(T.mall_item_koubei_list.itemList)).length) {
                            t.next = 16;
                            break;
                        }
                        return t.abrupt("return");

                      case 16:
                        y.map(function(e) {
                            return e.saleNum = parseInt(e.saleNum, 10), e;
                        }), e.setData({
                            goodsList: y,
                            pageNum: e.data.pageNum + 1,
                            themeColor: (0, s.getThemeColor)(),
                            emptyData: !1
                        });

                      case 18:
                      case "end":
                        return t.stop();
                    }
                }, a);
            }))();
        },
        chooseGoods: function(e) {
            var t = {
                goods: e.detail.item
            };
            r.jumpMiniGoodsPage.call(this, t);
        }
    }
});