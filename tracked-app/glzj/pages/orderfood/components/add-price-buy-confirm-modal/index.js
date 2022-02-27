var o = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../m/zk/za")), t = require("../../../../l/wh");

(0, o.default)({
    name: "add-price-buy-confirm-modal",
    data: {
        themeColor: (0, t.getThemeColor)()
    },
    localData: {
        ok: function() {},
        cancel: function() {}
    },
    components: {
        customShowModal: "custom-show-modal"
    },
    ready: function() {
        this.$customShowModal = this.getComponentById("customShowModal");
    },
    methods: {
        show: function(o) {
            var t = o.title, a = o.bodyText, e = o.ok, l = o.cancel;
            this.$customShowModal.show({
                title: t,
                bodyText: a
            }), this.localData.ok = e, this.localData.cancel = l;
        },
        handleOK: function() {
            this.localData.ok(), this.$customShowModal.close();
        },
        handleCancel: function() {
            this.localData.cancel(), this.$customShowModal.close();
        }
    }
});