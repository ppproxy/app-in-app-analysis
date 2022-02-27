var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/regenerator")), a = require("../../../@babel/runtime/helpers/asyncToGenerator"), s = e(require("../../../m/zk/za")), o = e(require("../../../m/z3/z7")), n = require("../../../l/wh"), i = require("../../../l/wa");

(0, s.default)({
    name: "auth-user-with-agreement-modal",
    components: {
        customShowModal: "custom-show-modal",
        toast: "toast"
    },
    data: {
        type: "auth",
        themeColor: (0, n.getThemeColor)(),
        miniType: (0, i.getMiniType)(),
        supportGetUserProfile: "undefined" != typeof wx && wx.canIUse && wx.canIUse("getUserProfile")
    },
    localData: {
        success: function() {},
        fail: function() {}
    },
    ready: function() {
        this.$customShowModal = this.getComponentById("customShowModal"), this.$toast = this.getComponentById("toast");
    },
    methods: {
        auth: function(e, s) {
            var n = this;
            this.localData.success = e, this.localData.fail = s, o.default.isMinAuth().then(function(e) {
                e ? o.default.getUserBaseInfo().then(function() {
                    var e = a(t.default.mark(function e(a) {
                        return t.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, o.default._saveUserDetlInfo(a);

                              case 2:
                                n.localData.success && n.localData.success(a);

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }()) : n._show();
            });
        },
        bindGetUserUnfoProfile: function() {
            var e = this;
            o.default.auth({
                hasUserAgreement: !0
            }, function(t) {
                e.localData.success && e.localData.success(t), e._hide();
            }, function(t) {
                e.localData.fail(t);
            });
        },
        bindGetUserInfo: function(e) {
            var t = this;
            o.default.auth({
                event: e,
                hasUserAgreement: !0
            }, function(e) {
                t.localData.success && t.localData.success(e), t._hide();
            }, function(e) {
                t.localData.fail(e);
            });
        },
        onGetAuthorize: function(e) {
            var t = this;
            o.default.auth({
                event: e,
                hasUserAgreement: !0
            }, function(e) {
                t.localData.success && t.localData.success(e), t._hide();
            }, function(e) {
                t.localData.fail(e);
            });
        },
        onAuthError: function(e) {
            this.localData.fail(e);
        },
        handleCancel: function() {
            this._hide();
        },
        _show: function() {
            this.$customShowModal.show({
                maskClosable: !0,
                containerStyle: "border-radius:0"
            });
        },
        _hide: function() {
            this.$customShowModal.close(), this._changeType("auth"), this.localData.success = null, 
            this.localData.fail = null;
        },
        _changeType: function(e) {
            this.setData({
                type: e
            });
        }
    }
});