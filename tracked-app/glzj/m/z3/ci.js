Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getMyMinSetting = function() {
    return new Promise(function(n) {
        my.getSetting({
            success: function(t) {
                n(t);
            },
            fail: function(t) {
                n(t);
            }
        });
    });
}, exports.getWxMinSetting = function() {
    return new Promise(function(n) {
        wx.getSetting({
            success: function(t) {
                n(t);
            },
            fail: function(t) {
                n(t);
            }
        });
    });
}, exports.openMyMinSetting = function() {
    return new Promise(function(n) {
        my.openSetting({
            success: function(t) {
                n(t);
            },
            fail: function() {
                n(null);
            }
        });
    });
}, exports.openWxMinSetting = function() {
    return new Promise(function(n) {
        wx.openSetting({
            success: function(t) {
                n(t);
            },
            fail: function() {
                n(null);
            }
        });
    });
};