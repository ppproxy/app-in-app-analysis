var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), a = e(require("../../../@babel/runtime/regenerator")), t = require("../../../@babel/runtime/helpers/asyncToGenerator"), n = e(require("../../../m/zk/za")), u = e(require("../../../m/z3/z7")), c = require("../../../l/wm");

(0, n.default)({
    name: "auth-user-modal",
    data: {
        visible: !1,
        type: "auth",
        supportGetUserProfile: "undefined" != typeof wx && wx.canIUse && wx.canIUse("getUserProfile")
    },
    localData: {
        success: function() {},
        fail: function() {}
    },
    methods: {
        auth: function(e, n) {
            var c = this;
            this.localData.success = e, this.localData.fail = n, u.default.isMinAuth().then(function(e) {
                e ? u.default.getUserBaseInfo().then(function() {
                    var e = t(a.default.mark(function e(t) {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, u.default._saveUserDetlInfo(t);

                              case 2:
                                c.localData.success && c.localData.success(t);

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }));
                    return function(a) {
                        return e.apply(this, arguments);
                    };
                }()) : c._show();
            });
        },
        bindGetUserUnfoProfile: (0, c.debounce)(function(e) {
            var a = this;
            u.default.auth({}, function(e) {
                a._hide(), a.localData.success && a.localData.success(e);
            }, function(e) {
                a._changeType("re_auth"), a.localData.fail(e);
            });
        }, 300, !0),
        bindGetUserInfo: (0, c.debounce)(function(e) {
            var a = this;
            u.default.auth({
                event: e
            }, function(e) {
                a._hide(), a.localData.success && a.localData.success(e);
            }, function(e) {
                a._changeType("re_auth"), a.localData.fail(e);
            });
        }, 300, !0),
        handleCancel: function() {
            this._hide();
        },
        _show: function() {
            this.setData({
                visible: !0
            });
        },
        _hide: function() {
            var e = this;
            this.setData({
                visible: !1
            }, function() {
                e._changeType("auth"), e.localData.success = null, e.localData.fail = null;
            });
        },
        _changeType: function(e) {
            this.setData({
                type: e
            });
        },
        forbidMove: function() {},
        onGetAuthorize: function(e) {
            var a = this;
            u.default.auth({
                event: e
            }, function(e) {
                a._hide(), a.localData.success && a.localData.success(e);
            }, function(e) {
                a._changeType("re_auth"), a.localData.fail(e);
            });
        },
        onAuthError: function(e) {
            this._changeType("re_auth"), this.localData.fail(e);
        }
    }
});