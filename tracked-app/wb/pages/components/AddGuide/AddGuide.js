var t = require("../../../7F75DC12ACE07ADF1913B41529B0A2D7.js"), e = getApp();

Component({
    properties: {
        from: String
    },
    data: {
        top: e.globalData.statusBarHeight + e.globalData.titleBarHeight,
        arrowTop: e.globalData.statusBarHeight + e.globalData.titleBarHeight - 5,
        arrowRight: "ios" === e.globalData.platform ? 65 : 75,
        showAddGuide: !1
    },
    methods: {
        checkStorage: function() {
            return new Promise(function(t, e) {
                try {
                    wx.getStorage({
                        key: "shown_add_guide",
                        success: function(a) {
                            a && 1 != a.data ? t() : e();
                        },
                        fail: function() {
                            t();
                        }
                    });
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    wx.reportMonitor("getStorageError", t);
                }
            });
        },
        hideAddGuide: function() {
            wx.setStorage({
                key: "shown_add_guide",
                data: 1
            }), this.setData({
                showAddGuide: !1
            }), this.triggerEvent("showAddGuide", {
                show: !1
            }), t.emit("hideAddGuide");
        }
    },
    attached: function() {
        var e = this;
        this.checkStorage().then(function() {
            e.setData({
                showAddGuide: !0
            }), e.triggerEvent("showAddGuide", {
                show: !0
            });
        }).catch(function() {
            e.triggerEvent("showAddGuide", {
                show: !1
            });
        }), t.on("hideAddGuide", this, function() {
            e.setData({
                showAddGuide: !1
            });
        });
    },
    detached: function() {
        t.clear(this);
    }
});