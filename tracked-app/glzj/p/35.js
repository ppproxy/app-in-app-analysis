var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = e(require("../m/zd/n")).default.$ltracker, a = {
    onLoad: function() {
        try {
            var e = {}, a = 0;
            if (wx.canIUse && wx.canIUse("getUpdateManager")) e = wx.getUpdateManager(), a = Object.keys(e).length;
            a > 0 && (e.onCheckForUpdate(function(e) {}), e.onUpdateReady(function() {
                wx.showModal({
                    title: "更新提示",
                    content: "小程序有新版本啦～",
                    showCancel: !1,
                    confirmText: "好的",
                    success: function(a) {
                        a.confirm && (e.applyUpdate(), t.click(".keruyun_force_update_confirm"));
                    }
                });
            }), e.onUpdateFailed(function() {
                t.other(".keruyun_force_update_fail");
            }));
        } catch (e) {}
    }
};

exports.default = a;