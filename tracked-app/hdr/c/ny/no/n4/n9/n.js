var o = require("../../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../../m/zk/za")), t = require("./../../5l/n");

(0, o.default)({
    name: "code-verification",
    properties: {
        isFromOrderList: {
            type: Boolean,
            value: !1
        },
        orderDetail: {
            type: Object,
            value: {}
        }
    },
    data: {
        TAKE_YOURSELF_MODE: t.TAKE_YOURSELF_MODE,
        ORDER_STATUS: t.ORDER_STATUS
    },
    localData: {},
    ready: function() {
        this.$customShowModal = this.getComponentById("customShowModal");
    },
    components: {
        customShowModal: "custom-show-modal"
    },
    observers: {
        orderDetail: function(o) {
            o && o.orderStatus === t.ORDER_STATUS.SUCCESS && this.$customShowModal && this.$customShowModal.close();
        }
    },
    methods: {
        _init: function() {},
        showVerificationModal: function() {
            this.$customShowModal.show({
                title: "核销码",
                showClose: !0,
                closeButtonType: "bottom"
            }), this.data.isFromOrderList ? this.$root.$logClick(".keruyun_order_list.write_off_click") : this.$root.$logClick(".keruyun_order_details.write_off_click");
        },
        noop: function() {
            return null;
        }
    }
});