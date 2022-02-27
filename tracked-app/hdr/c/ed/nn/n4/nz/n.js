(0, require("../../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../../m/zk/za")).default)({
    name: "member-joined-show-alert",
    data: {
        registerTips: ""
    },
    components: {
        customShowModal: "custom-show-modal"
    },
    ready: function() {
        this.$customShowModal = this.getComponentById("customShowModal");
    },
    methods: {
        show: function(e, o) {
            this.setData({
                registerTips: e
            }), this.$customShowModal.show({
                showClose: !0,
                maskClosable: !0,
                zIndex: 888889,
                cancel: function() {
                    o && o();
                }
            });
        }
    }
});