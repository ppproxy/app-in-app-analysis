(0, require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../m/zk/za")).default)({
    name: "member-shake-code",
    components: {
        toast: "toast"
    },
    data: {
        status: !1,
        code: "",
        btnText: ""
    },
    properties: {},
    ready: function() {},
    methods: {
        show: function(t) {
            var e = t.code, a = void 0 === e ? "" : e, s = t.btnText, o = void 0 === s ? "" : s, i = t.degradeText, n = void 0 === i ? "" : i;
            if (a && o) this.setData({
                status: !0,
                code: a,
                btnText: o,
                copyStatus: !1
            }); else {
                var d = n || "系统开小差了，请稍后重试";
                this.$toast = this.getComponentById("toast"), this.$toast.show(d);
            }
        },
        hide: function() {
            this.setData({
                status: !1,
                code: "",
                btnText: "",
                copyStatus: !1
            });
        },
        handleCopy: function() {
            var t = this, e = t.data.code;
            wx.setClipboardData({
                data: e,
                success: function() {
                    t.setData({
                        copyStatus: !0
                    });
                },
                fail: function() {}
            });
        }
    }
});