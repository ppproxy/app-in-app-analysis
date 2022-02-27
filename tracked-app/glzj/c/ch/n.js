(0, require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../m/zk/za")).default)({
    name: "overlay",
    properties: {
        show: {
            type: Boolean,
            value: !1
        },
        duration: {
            type: Number,
            value: 300
        },
        zIndex: {
            type: Number,
            value: 100
        },
        disableScroll: {
            type: Boolean,
            value: !0
        }
    },
    methods: {
        handleClick: function() {
            this.triggerEvent("handleClose");
        },
        forbidMove: function() {
            return null;
        }
    }
});