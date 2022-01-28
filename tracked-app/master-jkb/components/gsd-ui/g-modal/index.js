Component({
    properties: {
        visible: {
            type: Boolean,
            value: !1,
            observer: function(e) {
                this.setData({
                    _visible: e
                });
            }
        },
        title: {
            type: String,
            value: "提示"
        },
        showCancel: {
            type: Boolean,
            value: !0
        },
        cancelText: {
            type: String,
            value: "取消"
        },
        cancelColor: {
            type: String,
            value: "#000000"
        },
        confirmText: {
            type: String,
            value: "确定"
        },
        confirmColor: {
            type: String,
            value: "#4293F4"
        },
        confirmInfo: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        _visible: !1
    },
    methods: {
        handleCancel: function() {
            this.triggerEvent("cancel");
        },
        handleConfirm: function() {
            this.triggerEvent("confirm");
        }
    }
}), module.exports = {};