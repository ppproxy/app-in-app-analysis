(0, require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../m/zk/za")).default)({
    name: "点餐页-底部提示",
    properties: {
        tipInfo: {
            type: String,
            value: ""
        },
        openStatus: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        isUpdate: !1
    },
    ready: function() {
        var e = this;
        this.$root.$on("bottomTipUpdate", function(t) {
            var a = t.isUpdate;
            e.setData({
                isUpdate: a
            });
        }, this);
    }
});