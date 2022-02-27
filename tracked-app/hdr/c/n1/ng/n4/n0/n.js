(0, require("../../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../../m/zk/za")).default)({
    name: "cart-ordered-tip",
    properties: {
        avatar: {
            type: String,
            value: ""
        },
        name: {
            type: String,
            value: ""
        }
    },
    data: {
        message: "正在提交订单...",
        showProcessLoading: !1
    },
    localData: {
        themeIcons: [ "CircleProcessLoading" ]
    },
    logProps: {
        $$expElement: [ ".component-cart-ordered-tip" ]
    },
    ready: function() {
        var e = this, t = "pages/zccomfirmorder/index" !== this.$root.route;
        this.setData({
            bottom: t ? 116 : 136,
            showProcessLoading: !0
        }), setTimeout(function() {
            e.setData({
                message: t ? "你可以继续加菜了" : "提交成功！",
                name: "",
                showProcessLoading: !1
            });
        }, 2200);
    }
});