var _util = require("../../util/util");

Component({
    properties: {
        showLoginModal: {
            type: Boolean,
            value: false
        }
    },
    data: {
        isAuth: true,
        appType: (0, _util.getGlobalData)("__type__")
    },
    methods: {
        accountLogin: function accountLogin() {},
        wxLogin: function wxLogin() {},
        close: function close() {
            this.setData({
                showLoginModal: !this.data.showLoginModal
            });
        }
    }
});
/**
     * @file 登录组件
     */