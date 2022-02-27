var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../m/zk/za"));

e(require("../../m/5y"));

(0, t.default)({
    name: "popup",
    data: {
        styles: {
            bottom: "nl5",
            top: "nlw",
            left: "nl3",
            right: "nl6",
            active: "nl2"
        }
    },
    properties: {
        show: {
            type: Boolean,
            value: !1
        },
        duration: {
            type: Number,
            value: 300
        },
        width: {
            type: String,
            value: "45vw"
        },
        height: {
            type: String,
            value: "480rpx"
        },
        position: {
            type: String,
            value: "bottom"
        },
        zIndex: {
            type: Number,
            value: 101
        },
        showClose: {
            type: Boolean,
            value: !1
        },
        maskClosable: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        _close: function() {
            this.triggerEvent("handleClose");
        },
        handleClickMask: function() {
            this.data.maskClosable && this._close();
        },
        handleClose: function() {
            this._close();
        }
    }
});