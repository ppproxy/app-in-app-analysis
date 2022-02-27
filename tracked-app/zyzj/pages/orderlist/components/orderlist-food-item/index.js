var e = require("../../../../@babel/runtime/helpers/interopRequireDefault");

require("../../../../@babel/runtime/helpers/Arrayincludes");

var o = e(require("../../../../@babel/runtime/regenerator")), r = require("../../../../@babel/runtime/helpers/asyncToGenerator"), t = e(require("../../../../m/zk/za")), a = require("../../../../l/wh"), i = require("../../../../c/ny/no/zf/n.js"), d = require("../../../../l/w9"), n = e(require("../../business/hospital_orderlist-food-item"));

(0, t.default)({
    name: "order-list-item",
    data: {
        orderStatusTitle: "",
        orderProductConfigMap: {
            SCAN_CODE_ORDER_PRE: "SCAN_CODE_ORDER_PRE",
            SCAN_CODE_ORDER_AFTER: "SCAN_CODE_ORDER_AFTER"
        },
        showAlreadyTaken: !1,
        showOpenCabinet: !1,
        showOrderAgain: !1,
        showCalcOrder: !1,
        showAddMoreFood: !1,
        brandPrimaryColor: "rgba(255,255,255,0)",
        isHighLightOrderStatus: !1,
        actualFeeShow: 0,
        isHospital: (0, d.checkXcxTmlCode)("HOSPITAL")
    },
    properties: {
        orderDetail: {
            type: Object,
            value: {}
        },
        dataPage: {
            type: Number,
            value: void 0
        },
        dataIndex: {
            type: Number,
            value: void 0
        },
        invoiceInfo: {
            type: Object,
            value: {}
        }
    },
    localData: {
        orderStatusMap: {
            WAIT_PAY: "待支付",
            AUTO_CANCEL: "已取消",
            CUSTOMER_CANCEL: "已取消",
            WAIT_RECEIPT: "待接单",
            REJECTED: "已关闭",
            SUCCESS: "已完成",
            REFUND: "已退款",
            PART_REFUND: "部分退款",
            ANTI_SEELEMENT: "已退款",
            UPDATING: "更新中",
            CLOSED: "已关闭",
            EATING: "就餐中",
            RECEIPTED: "已接单",
            COOKING: "制作中",
            WAIT_TAKE: "待取餐"
        },
        needHighlightStatus: [ "RECEIPTED", "COOKING", "WAIT_TAKE", "WAIT_PAY", "WAIT_RECEIPT", "EATING" ],
        themeIcons: [ "IconOrderDetailAddress", "IconOrderDetailPhone" ]
    },
    observers: {
        orderDetail: function() {
            this._init();
        }
    },
    logProps: {
        $$expElement: [ "component-handle-already-taken-btn" ]
    },
    components: {
        customShowModal: "custom_modal",
        toast: "toast"
    },
    ready: function() {
        var e = (0, a.getThemeColor)(), o = (0, d.getHexColorAsRGBArray)(e);
        o.push("0.03"), o && 4 === o.length && this.setData({
            brandPrimaryColor: "rgba(".concat(o.join(","), ")")
        }), this.$customShowModal = this.getComponentById("customShowModal"), this.$toast = this.getComponentById("toast");
    },
    methods: {
        goShopDishMenu: function(e) {
            this.data.canToShopDinnerPage && this.$root.$relaunch("/pages/orderfood/index");
        },
        goToInvoiceMiniapp: function() {
            var e = this, o = this.data.invoiceInfo, r = o.invoiceUrl, t = void 0 === r ? "" : r, a = o.appid, i = void 0 === a ? "" : a;
            t ? wx.navigateToMiniProgram({
                appId: i,
                path: t,
                envVersion: "trial",
                success: function(o) {
                    e.$root.$logClick(".keruyun_order_details.invoice_success", {
                        customType: "电子发票跳转成功"
                    });
                },
                fail: function(o) {
                    o && "navigateToMiniProgram:fail cancel" === o.errMsg ? (e.$toast.show("跳转已取消"), 
                    e.$root.$logClick(".keruyun_order_details.invoice_cancel", {
                        customType: "取消电子发票跳转"
                    })) : (e.$toast.show("跳转失败"), e.$root.$logClick(".keruyun_order_details.invoice_fail", {
                        customType: "电子发票跳转失败"
                    }));
                }
            }) : this.$toast.show("跳转链接不存在");
        },
        handleOpenCabinet: function(e) {
            this.goOrderDetail(e);
        },
        handleShopNumber: function() {
            var e = this.data.orderDetail.shopInfo, o = (void 0 === e ? {} : e).shopPhone, r = (void 0 === o ? "" : o).split(",");
            1 === r.length ? wx.makePhoneCall({
                phoneNumber: r[0]
            }) : r.length > 1 && wx.showActionSheet({
                itemList: r,
                success: function(e) {
                    wx.makePhoneCall({
                        phoneNumber: r[e.tapIndex]
                    });
                }
            }), this.$root.$logClick(".keruyun_order_list.phone_click");
        },
        handleShopAddress: function() {
            var e = this.data.orderDetail.shopInfo, o = e.latitude, r = e.longitude, t = e.shopName, a = e.shopAddress;
            wx.openLocation({
                latitude: o / 1,
                longitude: r / 1,
                name: t,
                address: a,
                scale: 14
            }, function(e) {});
        },
        goOrderDetail: function(e) {
            var t = this;
            return r(o.default.mark(function e() {
                var r, a, i, d, n, s, l;
                return o.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        r = t.data, a = r.orderDetail, i = r.orderProductConfigMap, d = a.orderNo, n = a.orgId, 
                        s = a.orderProductConfig, l = a.orderStatus, t.$root.$logClick(".keruyun_order_list.order_details", {
                            customId: d
                        }), s === i.SCAN_CODE_ORDER_PRE ? t.$root.$navigate("/pages/orderdetail/index", {
                            orderNo: d,
                            orgId: n
                        }) : s === i.SCAN_CODE_ORDER_AFTER && ("EATING" !== l ? t.$root.$navigate("/pages/orderdetail/index", {
                            orderNo: d,
                            orgId: n
                        }) : t.triggerEvent("handleGoOrderDetail", {
                            orderNo: d,
                            orderStatus: l,
                            orgId: n
                        }));

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        goToCommentPage: function() {
            var e = this.data.orderDetail, o = e.orderNo, r = void 0 === o ? "" : o, t = e.orgId, a = void 0 === t ? "" : t, i = e.orgName, d = void 0 === i ? "" : i;
            this.$root.$logClick(".keruyun_order_list.comment_click", {
                orgName: d,
                orgId: a,
                orderNo: r
            }), this.$root.$relaunch("/pages/comment/index", {
                orderNo: r,
                orgName: d,
                originPage: "orderlist"
            });
        },
        _init: function() {
            var e = this.data, o = e.orderDetail, r = e.orderProductConfigMap, t = this.localData, i = t.orderStatusMap, d = t.needHighlightStatus, s = o.supportRepeatOrder, l = void 0 !== s && s, u = o.orderProductConfig, c = o.orderStatus, h = o.allowJumpToAdjustPageAfterDishChange, g = void 0 !== h && h, p = o.takeMealType, _ = o.takeCabinetNum, C = o.takeYourselfMode, E = o.enableVerificationMealCode, A = o.tableName, f = o.actualFee, v = void 0 === f ? 0 : f, T = o.actualFeeShow, m = void 0 === T ? v : T, N = "SELF_TAKE" === p && (0 === C || 3 === C && A) && [ "COOKING", "WAIT_TAKE" ].includes(c) && 1 !== E, I = 2 === C && _ && "WAIT_TAKE" === c, D = l && u === r.SCAN_CODE_ORDER_PRE, O = "EATING" === c && g && u === r.SCAN_CODE_ORDER_AFTER, S = (0, 
            a.getShopId)(), k = "EATING" === c && u === r.SCAN_CODE_ORDER_AFTER, $ = i[c], w = parseInt(o.orgId) === parseInt(S), R = d.includes(c);
            if (this.setData({
                orderStatusTitle: $,
                canToShopDinnerPage: w,
                showAlreadyTaken: N,
                showOpenCabinet: I,
                showOrderAgain: D,
                showCalcOrder: O,
                showAddMoreFood: k,
                isHighLightOrderStatus: R,
                actualFeeShow: m
            }), this.data.isHospital) {
                var y = new n.default(this);
                y.addDeliveryWaitTo(), y.setNotSupportOrderAgain(), y.judgeNeedHighlightStatus();
            }
        },
        handleAlreadyTaken: function() {
            var e, t = this, a = this.data.orderDetail, d = a.orderNo, n = a.orgId;
            this.$customShowModal.show({
                title: "您确定取餐吗？",
                bodyText: "",
                showCancel: !0,
                ok: (e = r(o.default.mark(function e() {
                    return o.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.prev = 0, e.next = 3, (0, i.updateFulfillOrderByShipped)({
                                storeId: n,
                                orderNo: d
                            });

                          case 3:
                            e.sent.data.data && t.triggerEvent("handleFinishOrder", {
                                orderNo: d,
                                page: t.data.dataPage,
                                index: t.data.dataIndex
                            }), e.next = 12;
                            break;

                          case 8:
                            e.prev = 8, e.t0 = e.catch(0), t.$toast.show("操作失败 ".concat(e.t0.errorCode), 1e3), 
                            console.error(e.t0);

                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e, null, [ [ 0, 8 ] ]);
                })), function() {
                    return e.apply(this, arguments);
                })
            }), this.$root && this.$root.$logClick(".keruyun_order_list.fetch_click", {
                action: "订单列表，我已取餐按钮点击",
                orderNo: d
            });
        },
        buyOrderAgain: function() {
            var e = this.data.orderDetail.orderNo;
            this.$root.$relaunch("/pages/orderfood/index", {
                actionType: "orderAgain",
                actionValue: e
            }), this.$root.$logClick(".keruyun_order_list.another_list_click");
        },
        toCalcOrder: function() {
            var e = this;
            return r(o.default.mark(function r() {
                var t, a, i, d;
                return o.default.wrap(function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        t = e.data.orderDetail, a = t.orderNo, i = t.orderStatus, d = t.orgId, e.triggerEvent("handleCalcOrder", {
                            orderNo: a,
                            orderStatus: i,
                            orgId: d
                        }), e.$root.$logClick(".keruyun_order_list.settle_accounts_click");

                      case 4:
                      case "end":
                        return o.stop();
                    }
                }, r);
            }))();
        },
        toAddMoreFood: function() {
            var e = this.data.orderDetail, o = e.orderNo, r = e.orderStatus, t = e.orgId, a = e.tableNo, i = void 0 === a ? "" : a;
            this.triggerEvent("handleAddMore", {
                orderNo: o,
                orderStatus: r,
                orgId: t,
                tableNo: i
            }), this.$root.$logClick(".keruyun_order_list.add_dish_click");
        }
    }
});