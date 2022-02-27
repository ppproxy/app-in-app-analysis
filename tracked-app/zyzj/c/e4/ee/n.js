var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), a = t(require("../../../m/zk/za")), o = t(require("../../../m/z3/z6"));

(0, a.default)({
    name: "auth-geo-modal",
    data: {},
    localData: {
        callback: null
    },
    components: {
        customShowModal: "custom-show-modal"
    },
    ready: function() {
        this.$customShowModal = this.getComponentById("customShowModal");
    },
    methods: {
        auth: function(t) {
            var a = this, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this.localData.callback = t, o.default.isMinAuth().then(function(t) {
                void 0 === t ? o.default._miniGeoAuth() : a._show(e);
            });
        },
        _show: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.$customShowModal.show({
                title: t.title || "地理位置未授权",
                bodyText: t.bodyText || "开启授权帮助你定位距离最近的门店",
                showClose: !1,
                maskClosable: !1
            });
        },
        handleCancel: function() {
            this._hide();
        },
        handleOpenSettingClick: function(t) {
            t.detail.authSetting["scope.userLocation"] && (this.localData.callback(), this._hide());
        },
        handleMyOpenSettingClick: function() {
            var t = this;
            my.openSetting({
                success: function(a) {
                    a.authSetting.location ? (t.localData.callback(), t._hide()) : my.getSetting({
                        success: function(a) {
                            a.authSetting.location && (t.localData.callback(), t._hide());
                        }
                    });
                }
            });
        },
        _hide: function() {
            this.$customShowModal.close({}), this.localData.callback = null;
        }
    }
});