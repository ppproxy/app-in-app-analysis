(0, require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../m/zk/za")).default)({
    name: "orderlist-takeout-order ",
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
            this.$root.$tomin("/pages/order/list/order-list", {
                appId: "wxece3a9a4c82f58c9"
            });
        }
    }
});