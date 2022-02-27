var e = require("../../../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../../../@babel/runtime/regenerator")), r = require("../../../../../@babel/runtime/helpers/asyncToGenerator"), o = e(require("../../../../../m/zk/za")), a = require("./../../5l/n"), n = require("../../zf/n");

(0, o.default)({
    name: "order-detail-code",
    properties: {
        enableTakeStatus: {
            type: Boolean,
            value: !1
        },
        code: {
            type: String,
            value: ""
        },
        time: {
            type: String,
            value: ""
        },
        bookFlag: {
            type: Boolean,
            value: !1
        },
        orderStatus: {
            type: String,
            value: ""
        },
        orderNo: {
            type: String,
            value: ""
        },
        orgId: {
            type: String,
            value: ""
        },
        takeYourselfMode: {
            type: Number,
            value: 0
        },
        enableVerificationMealCode: {
            type: Number,
            value: 0
        },
        barCode: {
            type: String,
            value: ""
        },
        takeCabinetNum: {
            type: Array,
            value: []
        },
        tableName: {
            type: String,
            value: ""
        },
        orderFlowNo: {
            type: String,
            value: ""
        },
        isFromOrderList: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        TAKE_YOURSELF_MODE: a.TAKE_YOURSELF_MODE,
        ORDER_STATUS: a.ORDER_STATUS
    },
    logProps: {
        $$expElement: [ "component-handle-already-taken-btn" ]
    },
    components: {
        customShowModal: "custom-show-modal",
        toast: "toast"
    },
    ready: function() {
        this.$customShowModal = this.getComponentById("customShowModal"), this.$toast = this.getComponentById("toast");
    },
    methods: {
        showVerificationModal: function() {
            this.triggerEvent("handleShowVerificationCodeModal");
        },
        handleOpenCabinet: function() {
            this.triggerEvent("handleOpenCabinet");
        },
        handleAlreadyTaken: function() {
            var e, o = this, a = this.data, i = a.orgId, l = a.orderNo;
            this.$customShowModal.show({
                title: "您确定取餐吗？",
                bodyText: "",
                showCancel: !0,
                ok: (e = r(t.default.mark(function e() {
                    return t.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.prev = 0, e.next = 3, (0, n.updateFulfillOrderByShipped)({
                                storeId: i,
                                orderNo: l
                            });

                          case 3:
                            o.triggerEvent("handleFinishOrder"), e.next = 10;
                            break;

                          case 6:
                            e.prev = 6, e.t0 = e.catch(0), o.$toast.show("操作失败 ".concat(e.t0.errorCode), 1e3), 
                            console.error(e.t0);

                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e, null, [ [ 0, 6 ] ]);
                })), function() {
                    return e.apply(this, arguments);
                })
            }), this.$root && this.$root.$logClick(".keruyun_order_details.fetch_click", {
                action: "订单详情，我已取餐按钮点击",
                orderNo: l
            });
        },
        noop: function() {
            return null;
        }
    }
});