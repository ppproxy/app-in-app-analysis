var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), o = e(require("../../../@babel/runtime/regenerator")), n = require("../../../@babel/runtime/helpers/asyncToGenerator"), t = e(require("../../../m/zk/za")), r = require("../../../v/3s/3f"), a = require("../../../l/wa"), i = require("../../../pages/member/common/util/common"), s = (0, 
a.getMiniType)(), u = (0, i.getAppType)(), c = (0, a.getUUID)();

(0, t.default)({
    name: "member-send-coupon-activity",
    data: {
        sendCouponParamsWX: [],
        sendCouponParamsAlipay: [],
        hasWXCoupon: !1,
        hasAlipayCoupon: !1,
        showCoupon: !0,
        centerBoxBounding: {}
    },
    localData: {
        wxInit: !0,
        alipayInit: !0
    },
    properties: {
        auto: {
            type: Boolean,
            value: !1
        },
        wxSendCouponParams: {
            type: Array,
            value: []
        },
        alipaySendCouponParams: {
            type: Array,
            value: []
        },
        sign: {
            type: String,
            value: ""
        },
        sendCouponMerchant: {
            type: String,
            value: ""
        },
        modalId: {
            type: String,
            value: ""
        },
        whiteListAppId: {
            type: String,
            value: ""
        }
    },
    components: {
        toast: "toast",
        loading: "loading"
    },
    logProps: {
        $$expElement: [ ".component-send-coupon-has-button", ".component-send-coupon-sync", ".component-send-coupon-no-sync" ]
    },
    ready: function() {
        var e = this, o = this.data.modalId;
        this.localData.wxInit = !1, this.localData.alipayInit = !1, this.$toast = this.getComponentById("toast"), 
        this.$loading = this.getComponentById("loading"), this.transfromWxSendCouponParams(this.data.wxSendCouponParams), 
        this.transfromAlipaySendCouponParams(this.data.alipaySendCouponParams), this.setData({
            showCoupon: !0
        }, function() {
            e.$root && e.$root.$logReinit && e.$root.$logReinit(e);
        }), "my" === s && o && my.createSelectorQuery().selectAll("#".concat(o)).boundingClientRect().selectViewport().boundingClientRect().exec(function(o) {
            var n = o[0][0], t = o[1];
            e.setData({
                centerBoxBounding: {
                    left: n.left,
                    bottom: t.height - n.bottom
                }
            });
        });
    },
    observers: {
        wxSendCouponParams: function(e) {
            this.localData.wxInit || this.transfromWxSendCouponParams(e);
        },
        alipaySendCouponParams: function(e) {
            this.localData.alipayInit || this.transfromAlipaySendCouponParams(e);
        }
    },
    methods: {
        transfromWxSendCouponParams: function(e) {
            var o = this;
            try {
                if (!Array.isArray(e) || !e.length || "wx" !== s) return;
                var n = this.data, t = n.sign, r = n.sendCouponMerchant, a = e.map(function(e) {
                    var o = e.couponCode, n = e.outRequestNo;
                    return {
                        stock_id: e.stockId,
                        out_request_no: n,
                        coupon_code: o
                    };
                });
                this.setData({
                    hasWXCoupon: t && r,
                    sendCouponParamsWX: a
                }, function() {
                    o.$root && o.$root.$logReinit && o.$root.$logReinit(o);
                });
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                console.error("<<<<<<<<< member-send-coupon-base err", e);
            }
        },
        transfromAlipaySendCouponParams: function(e) {
            var o = this;
            try {
                if (!Array.isArray(e) || !e.length || "my" !== s) return;
                var n = e.map(function(e) {
                    var o = e.activityId, n = e.voucherCode;
                    return {
                        activityId: o,
                        outBizNo: e.outBizNo,
                        voucherCode: n
                    };
                });
                this.setData({
                    hasAlipayCoupon: !0,
                    sendCouponParamsAlipay: n
                }, function() {
                    o.$root && o.$root.$logReinit && o.$root.$logReinit(o);
                });
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                console.error("<<<<<<<<< member-send-coupon-base err", e);
            }
        },
        wxSendCoupon: function(e) {
            var t = this;
            return n(o.default.mark(function n() {
                var a, p, d, l;
                return o.default.wrap(function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        if (a = e.detail, p = a.errcode, d = a.send_coupon_result, l = a.msg, "OK" !== p) {
                            o.next = 16;
                            break;
                        }
                        return o.prev = 3, o.next = 6, (0, r.bindSaasVoucher)({
                            bindRelationList: JSON.stringify(d.map(function(e) {
                                return {
                                    stockId: e.stock_id,
                                    couponCode: e.coupon_code,
                                    voucherId: e.out_request_no
                                };
                            })),
                            appType: u,
                            requestId: c
                        });

                      case 6:
                        t.setData({
                            showCoupon: !1
                        }), t.triggerEvent("handleSendCoupon"), o.next = 14;
                        break;

                      case 10:
                        o.prev = 10, o.t0 = o.catch(3), console.error("<<<<<<<<<< bindSaasVoucher err", o.t0), 
                        t.triggerEvent("handleSendCoupon");

                      case 14:
                        o.next = 18;
                        break;

                      case 16:
                        i.customLog.other("/alsc.saas.miniapp.kbtb-error", {
                            miniType: s,
                            errcode: p,
                            msg: l
                        }), t.triggerEvent("handleSendCoupon");

                      case 18:
                      case "end":
                        return o.stop();
                    }
                }, n, null, [ [ 3, 10 ] ]);
            }))();
        },
        alipaySendCoupon: function(e) {
            var t = this;
            return n(o.default.mark(function n() {
                return o.default.wrap(function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        return o.prev = 0, t.triggerEvent("handleSendProccess", {
                            sendProcess: "begin"
                        }), o.next = 4, (0, r.bindSaasVoucher)({
                            bindRelationList: JSON.stringify(e.filter(function(e) {
                                return e && "SUCCESS" === e.code;
                            }).map(function(e) {
                                var o = e.activityId, n = e.voucherCode;
                                return {
                                    stockId: o,
                                    couponCode: n,
                                    voucherId: n
                                };
                            })),
                            appType: u,
                            requestId: c
                        });

                      case 4:
                        o.next = 11;
                        break;

                      case 6:
                        o.prev = 6, o.t0 = o.catch(0), console.error("<<<<<<<<<< bindSaasVoucher err", o.t0), 
                        t.triggerEvent("handleSendProccess", {
                            sendProcess: "end"
                        }), t.triggerEvent("handleSendCoupon");

                      case 11:
                      case "end":
                        return o.stop();
                    }
                }, n, null, [ [ 0, 6 ] ]);
            }))();
        },
        handleClose: function() {
            this.setData({
                showCoupon: !1
            }), this.triggerEvent("handleSendProccess", {
                sendProcess: "end"
            }), this.handleTap();
        },
        handleAlipayFail: function(e) {
            i.customLog.other("/alsc.saas.miniapp.kbtb-error", {
                miniType: s,
                errcode: e.errorCodeName,
                msg: e.errorMsg
            }), this.handleTap();
        },
        handleTap: function() {
            this.triggerEvent("handleSendCoupon");
        }
    }
});