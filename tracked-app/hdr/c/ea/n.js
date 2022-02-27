(0, require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../m/zk/za")).default)({
    name: "custom-page-result",
    properties: {
        visible: {
            type: Boolean,
            value: !1
        },
        title: {
            type: String,
            value: "暂无内容~"
        },
        icon: {
            type: String,
            value: ""
        },
        subTitle: {
            type: String,
            value: ""
        },
        buttonText: {
            type: String,
            value: "确定"
        },
        showButton: {
            type: Boolean,
            value: !1
        },
        msgInfo: {
            type: String,
            value: ""
        },
        scene: {
            type: String,
            value: ""
        },
        buttonLeftText: {
            type: String,
            value: ""
        },
        buttonRightText: {
            type: String,
            value: ""
        },
        dishPage: {
            type: Boolean,
            value: !1
        },
        isShowTabbar: {
            type: Boolean,
            value: !1
        },
        isShow: {
            type: Boolean,
            value: !1
        }
    },
    ready: function() {},
    methods: {
        handleOk: function() {
            this.triggerEvent("handleOk");
        },
        handleFresh: function() {
            this.$root.refresh();
        },
        handleBackHome: function() {
            this.$root.$relaunch("/pages/lightshop/index");
        },
        handleSelectShop: function() {
            this.$root.$navigate("/pages/store-list/index", {
                origin: "DINNER_PAGE"
            });
        }
    }
});