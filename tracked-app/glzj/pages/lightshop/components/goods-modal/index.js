var e = require("../../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../../@babel/runtime/regenerator")), o = require("../../../../@babel/runtime/helpers/asyncToGenerator"), r = e(require("../../../../m/zk/za")), a = require("../../../../l/wh"), n = require("../../../../l/wa"), i = require("../../services/index"), s = require("../../../../l/wt");

(0, r.default)({
    name: "goods-modal",
    data: {
        actionName: "",
        actionUrl: "",
        benefitType: "",
        curPrice: "",
        desc: "",
        itemName: "",
        itemId: "",
        itemType: "",
        logo: "",
        orgPrice: "",
        saleNum: 0,
        saleStatus: "",
        themeColor: "",
        support: !0,
        actionContent: {}
    },
    localData: {
        options: Object.create(null)
    },
    components: {
        customShowModal: "custom-show-modal"
    },
    ready: function() {
        this.$customShowModal = this.getComponentById("customShowModal");
    },
    methods: {
        init: function(e) {
            return this.localData.options = e, this;
        },
        render: function() {
            this.initGoodsModalContainer();
        },
        initGoodsModalContainer: function() {
            var e = this;
            return o(t.default.mark(function o() {
                var r, i, s, u, c;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, e.parseListData();

                      case 2:
                        if (r = t.sent) {
                            t.next = 5;
                            break;
                        }
                        return t.abrupt("return");

                      case 5:
                        i = {
                            goods: r
                        }, "my" === (u = (0, n.getMiniType)()) && (s = !0), "wx" === u && (s = !1), e.setData({
                            actionName: r.actionName,
                            actionUrl: r.actionUrl,
                            benefitType: r.benefitType,
                            curPrice: r.curPrice,
                            desc: r.desc,
                            itemName: r.itemName,
                            itemId: r.itemId,
                            itemType: r.itemType,
                            logo: r.logo,
                            orgPrice: r.orgPrice,
                            support: r.supportWechat || s,
                            saleNum: parseInt(r.saleNum, 10),
                            saleStatus: r.saleStatus,
                            themeColor: (0, a.getThemeColor)(),
                            actionContent: i
                        }), c = {
                            showClose: !0,
                            maskClosable: !0,
                            zIndex: 888888
                        }, e.$customShowModal.show(c);

                      case 12:
                      case "end":
                        return t.stop();
                    }
                }, o);
            }))();
        },
        parseListData: function() {
            return o(t.default.mark(function e() {
                var o, r, s, u, c, l, d;
                return t.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (o = (0, a.getGoodsModelInfo)()) {
                            e.next = 3;
                            break;
                        }
                        return e.abrupt("return");

                      case 3:
                        return r = (0, a.getShopId)(), s = (0, a.getShopInfo)() || {}, u = s.cityId, c = {
                            appType: (0, n.getMiniType)(),
                            itemId: o.itemId,
                            cityId: u,
                            storeId: r
                        }, e.next = 8, (0, i.queryGoodsInfos)(c);

                      case 8:
                        if (l = e.sent) {
                            e.next = 11;
                            break;
                        }
                        return e.abrupt("return");

                      case 11:
                        if (l.data) {
                            e.next = 13;
                            break;
                        }
                        return e.abrupt("return");

                      case 13:
                        return d = l.data, e.abrupt("return", d);

                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        hideModal: function() {
            (0, a.removeGoodsModelInfo)(), this.$customShowModal.close({});
        },
        jumpAway: function() {
            (0, a.removeGoodsModelInfo)(), this.$customShowModal.close({}), "ON_SALE" === this.data.saleStatus && s.jumpMiniGoodsPage.call(this, this.data.actionContent);
        }
    }
});