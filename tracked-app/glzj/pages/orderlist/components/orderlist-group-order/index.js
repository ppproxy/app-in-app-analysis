(0, require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../m/zk/za")).default)({
    name: "orderlist-group-order ",
    data: {},
    properties: {
        isShowTabbar: {
            type: Boolean,
            value: !1
        },
        navigationBarHeight: {
            type: Number,
            value: 0
        }
    },
    ready: function() {
        this.triggerEvent("handlePageInit");
    },
    methods: {
        handleButton: function() {
            this.$root.$tomin("/order/pages/order-list/index", {
                appId: "wx7d26a9e29d2a69c7"
            });
        }
    }
});