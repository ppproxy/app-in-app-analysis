var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/regenerator")), o = require("../../../@babel/runtime/helpers/asyncToGenerator"), n = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"), a = e(require("../../../m/zk/za")), r = e(require("../../../m/zt")), i = require("../../../l/wh"), l = require("../../../l/wa"), u = require("../zf/n"), s = require("../../../v/ci/n"), c = require("../ct/ws/n"), p = require("../../../l/w9");

function d(e, t) {
    var o, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, r = e.replace(/\[(\d+)\]/g, ".$1").split("."), i = t, l = n(r);
    try {
        for (l.s(); !(o = l.n()).done; ) {
            var u = o.value;
            if (void 0 === (i = Object(i)[u])) return a;
        }
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        l.e(e);
    } finally {
        l.f();
    }
    return i;
}

function m(e) {
    var t = e.content, o = !1;
    return "common" === t.contentType && t.actionContent && 0 === Object.keys(t.actionContent).length && (o = !0), 
    "promotion" !== t.actionType || !t.actionContent || "ONE_VOUCHER" !== t.actionContent.promotionType || d("actionContent.oneVoucherInfo.activityStatus", t, !1) && !d("actionContent.oneVoucherInfo.joinStatus", t, !1) || (o = !0), 
    o;
}

function h(e) {
    var t = e.content;
    return parseInt(d("actionContent.goods.saleNum", t, ""), 10);
}

(0, a.default)({
    name: "advertise-modal",
    data: {
        enable: !1,
        actionContent: null,
        actionType: null,
        contentType: null,
        imageUrl: null,
        frequency: null,
        template: null,
        timing: null,
        themeColor: "",
        saleNum: 0,
        totalAmount: "",
        loading: !1
    },
    components: {
        customPictureModal: "custom-picture-modal",
        customFullPictureModal: "custom-full-picture-modal",
        customShowFullSlotModal: "custom-show-full-slot-modal",
        consumptionSendPopup: "consumption-send-popup",
        toast: "toast"
    },
    localData: {
        options: Object.create(null)
    },
    ready: function() {
        this.$customFullPictureModal = this.getComponentById("customFullPictureModal"), 
        this.$customPictureModal = this.getComponentById("customPictureModal"), this.$customShowFullSlotModal = this.getComponentById("customShowFullSlotModal"), 
        this.$consumptionSendPopup = this.getComponentById("consumptionSendPopup"), this.$toast = this.getComponentById("toast"), 
        this.$goodsModalComponent = this.$root.getGlobalComponentById("goodsModalComponent"), 
        this.render();
    },
    methods: {
        init: function(e) {
            return this.localData.options = e, {
                root: this,
                isShow: !1
            };
        },
        render: function() {
            var e, t = ((e = getCurrentPages())[e.length - 1].query || e[e.length - 1].options).orderNo;
            t ? this.$consumptionSendPopup.initConsumptionSendPopupInfo(t) : this.initAdvertiseModalContainer();
        },
        handleConsumptionSendPopup: function(e) {
            e.detail.isShowPop || this.initAdvertiseModalContainer();
        },
        initAdvertiseModalContainer: function() {
            var e = this;
            return o(t.default.mark(function o() {
                var n;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (!(0, i.getGoodsModelInfo)()) {
                            t.next = 4;
                            break;
                        }
                        return e.$goodsModalComponent.render(), t.abrupt("return");

                      case 4:
                        return t.next = 6, e.fetchFatigue();

                      case 6:
                        return n = t.sent, t.next = 9, e.fetchGlobalAdvertiseInfo(n);

                      case 9:
                        e.setData({
                            themeColor: (0, i.getThemeColor)()
                        });

                      case 10:
                      case "end":
                        return t.stop();
                    }
                }, o);
            }))();
        },
        fetchGlobalAdvertiseInfo: function(e) {
            var n = this;
            return o(t.default.mark(function o() {
                var a, u, c, f, g, C, y, I, v, b, w, T, M, P, A, k, S, E, $, q, z, F, x;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (e) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return");

                      case 2:
                        return a = (0, i.getAppBaseInfo)(), u = a.appId, c = (0, i.getShopId)(), f = (0, 
                        i.getShopInfo)() || {}, g = f.cityId, C = (0, i.getGeoInfo)() || {}, y = C.longitude, 
                        I = void 0 === y ? r.default.DEF_LONGITUDE : y, v = C.latitude, b = void 0 === v ? r.default.DEF_LATITUDE : v, 
                        w = (0, l.getMiniType)(), T = {
                            pageCode: "COMMON_PAGE",
                            appId: u,
                            appType: "wx" === w ? "WECHAT" : "ALIPAY",
                            appVersion: (0, l.getVersion)(),
                            storeId: c,
                            cityId: g,
                            longitude: I,
                            latitude: b
                        }, t.next = 10, (0, s.queryHomeConfigInfo)(T);

                      case 10:
                        if (M = t.sent, P = d("data.components[0].data", M, {}), A = d("data.resources[0].components", M, []).filter(function(e) {
                            return "prize-wheel-popup-component" === e.componentCode ? d("data.prizeWheelInfo.prizeWheelEnable", e) : "redenvelopes-component" !== e.componentCode || d("data.member_redenvelops.totalAmount", e);
                        }).sort(function(e, t) {
                            return e.priority - t.priority;
                        }), !(k = A[0]) || "redenvelopes-component" !== k.componentCode) {
                            t.next = 18;
                            break;
                        }
                        return "NORMAL" === k.status && k.data.member_redenvelops && k.data.member_redenvelops.totalAmount && (S = k.data.member_redenvelops.totalAmount, 
                        n.setData({
                            totalAmount: S
                        }, function() {
                            n.redEnvelopeClick();
                        })), t.abrupt("return");

                      case 18:
                        k && "prize-wheel-popup-component" === k.componentCode && k.data && k.data.prizeWheelInfo && k.data.prizeWheelInfo.prizeWheelEnable && (E = k.data.prizeWheelInfo, 
                        $ = E.prizeWheelPopupImage, q = E.prizeWheelAlipayAppId, z = E.prizeWheelUrl, F = E.prizeWheelEnable, 
                        P = {
                            enable: F,
                            template: 1,
                            content: {
                                contentType: "common",
                                imageUrl: $,
                                actionType: "promotion",
                                actionContent: {
                                    promotionType: "PRIZE_WHEEL",
                                    targetApp: q,
                                    targetUrl: z
                                }
                            }
                        }), x = {
                            contentType: P.content.contentType,
                            imageUrl: (0, p.getImageUrl)(P.content.imageUrl),
                            saleNum: h(P),
                            actionType: P.content.actionType,
                            actionContent: P.content.actionContent,
                            template: P.template,
                            enable: P.enable && !m(P)
                        }, n.setData(x, function() {
                            1 !== x.template && (2 !== x.template || "common" !== x.contentType || "inner_app" !== x.actionType && "promotion" !== x.actionType) || n.showPictureModalFullImgClick(), 
                            2 !== x.template || "common" !== x.contentType || "goods" !== x.actionType && "dish" !== x.actionType || n.showPictureModalImgClick();
                        });

                      case 21:
                      case "end":
                        return t.stop();
                    }
                }, o);
            }))();
        },
        fetchFatigue: function() {
            return o(t.default.mark(function e() {
                var o, n, a;
                return t.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (o = (0, i.getLoginCustomer)(), "preview" !== (0, i.getPreviewMode)()) {
                            e.next = 3;
                            break;
                        }
                        return e.abrupt("return", !0);

                      case 3:
                        return e.next = 5, (0, u.queryFatigue)(o);

                      case 5:
                        return n = e.sent, a = n.data.shouldDo, e.abrupt("return", a);

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        jumpApp: function() {
            var e = this.data.actionType, t = this.data.actionContent;
            c.gotoCustomizePage.call(this, e, t, "advertise-modal-component");
        },
        redEnvelopeInfo: function() {
            var e = this;
            return o(t.default.mark(function o() {
                var n, a, r, s;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return e.setData({
                            loading: !0
                        }), t.prev = 1, n = (0, i.getAppBaseInfo)(), a = n.appId, r = "wx" === (0, l.getMiniType)() ? "WECHAT" : "ALIPAY", 
                        t.next = 6, (0, u.getCollectVoucher)({
                            appId: a,
                            appType: r
                        });

                      case 6:
                        s = t.sent, e.$customShowFullSlotModal.handleCancel(), s.data.data && !0 === s.data.data ? e.$toast.show("领取成功,快去点单享优惠吧", 1500) : e.$toast.show("领取失败,明天再来试试吧", 1500), 
                        t.next = 14;
                        break;

                      case 11:
                        t.prev = 11, t.t0 = t.catch(1), e.$toast.show("领取失败,明天再来试试吧", 1500);

                      case 14:
                      case "end":
                        return t.stop();
                    }
                }, o, null, [ [ 1, 11 ] ]);
            }))();
        },
        handleChange: function(e) {},
        showPictureModalImgClick: function() {
            this.data.enable && ("goods" === this.data.actionType && this.$customPictureModal.show({
                headerImg: this.data.actionContent.goods.logo,
                maskClosable: !0,
                showClose: !0
            }), "dish" === this.data.actionType && this.$customPictureModal.show({
                headerImg: this.data.actionContent.dish.dishLogo,
                maskClosable: !0,
                showClose: !0
            }));
        },
        showPictureModalFullImgClick: function() {
            this.data.imageUrl && this.data.enable && ("promotion" !== this.data.actionType || "COUPON_BAG_ACTIVITY" !== this.data.actionContent.promotionType || this.data.actionContent.mallItemResult.available) && this.$customFullPictureModal.show({
                maskClosable: !0,
                showClose: !0,
                background: "none"
            });
        },
        redEnvelopeClick: function() {
            this.$customShowFullSlotModal.show({
                maskClosable: !0,
                showClose: !0,
                background: "none",
                closeButtonType: "bottom"
            });
        }
    }
});