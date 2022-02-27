(0, require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../m/zk/za")).default)({
    name: "exitconfirmTheme",
    data: {
        btnText: "退出小程序"
    },
    components: {
        customShowModalExit: "custom-show-modal-exit"
    },
    methods: {
        show: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.title, o = void 0 === e ? "请使用最新版小程序" : e, i = t.bodyText, n = void 0 === i ? "您目前的小程序不是最新版本，请退出小程序下拉长按小程序删除，重新扫码进入" : i, s = t.btnText, d = void 0 === s ? "退出小程序" : s;
            this.getComponentById("customShowModalExit").show({
                title: o,
                bodyText: n
            }), d !== this.data.btnText && this.setData({
                btnText: d
            });
        },
        hide: function() {
            this.getComponentById("customShowModalExit").close();
        }
    }
});