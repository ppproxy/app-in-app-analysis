(0, require("../../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../../m/zk/za")).default)({
    name: "cart-ordered-tip-new",
    properties: {
        title: {
            type: String,
            value: ""
        },
        message: {
            type: String,
            value: ""
        }
    },
    data: {
        right: "24"
    },
    localData: {
        themeIcons: [ "CircleProcessLoading" ]
    },
    ready: function() {
        var e = this;
        this.setData({
            bottom: 116
        }), setTimeout(function() {
            e.setData({
                right: "-100%"
            });
        }, 2200);
    }
});