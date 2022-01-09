require("@babel/runtime/helpers/Arrayincludes");

var e = require("A5F26265ACE07ADFC3940A6236C0A2D7.js");

App({
    onLaunch: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                t.globalData.windowWidth = e.windowWidth, t.globalData.rate = 750 / e.windowWidth, 
                t.globalData.windowHeight = e.windowHeight, t.globalData.realWindowHeight = 750 * e.windowHeight / e.windowWidth, 
                t.globalData.platform = e.platform, t.globalData.pixelRatio = e.pixelRatio, t.globalData.device = e.model, 
                t.globalData.SDKVersion = e.SDKVersion, t.globalData.version = e.version;
                var a = 0;
                -1 === e.model.indexOf("RLI-AN00") && -1 === e.model.indexOf("RLI-N29") && -1 === e.model.indexOf("TAH-AN00") && -1 === e.model.indexOf("TAH-N29") && -1 === e.model.indexOf("TAH-AN00m") && -1 === e.model.indexOf("RHA-AN00m") && -1 === e.model.indexOf("HWTAH") && -1 === e.model.indexOf("HWTAH-C") || (console.log("======检测到当前设备为华为折叠屏====="), 
                a = 60, t.globalData.isHuaWeiZheDie = !0), -1 !== e.model.indexOf("iPad") && (a = 50), 
                t.globalData.statusBarHeight = e.statusBarHeight, t.globalData.titleBarHeight = "ios" === e.platform ? 44 + a : 48 + a;
                var i = t.globalData.titleBarHeight + t.globalData.statusBarHeight;
                t.globalData.totalTopHeight = i;
            },
            fail: function() {
                t.globalData.statusBarHeight = 20, t.globalData.titleBarHeight = 48;
                var e = t.globalData.titleBarHeight + t.globalData.statusBarHeight;
                t.globalData.totalTopHeight = e;
            }
        }), wx.setStorage({
            key: "showHotTips",
            data: 1
        }), this.globalData.versionNumber = "1.2.8", wx.getNetworkType({
            success: function(e) {
                t.globalData.networkType = e.networkType || "";
            }
        }), wx.onNetworkStatusChange(function(e) {
            t.globalData.networkType = e.networkType || "";
        }), wx.onMemoryWarning && wx.onMemoryWarning(function(t) {
            var a = t && t.level || "";
            e.track({
                ext: {
                    memoryWarning: a
                }
            });
        });
    },
    onShow: function(e) {
        console.log("scene:", e), this.globalData.scene = e.scene;
        [ 1036, 1007, 1008, 1011, 1012, 1013, 1017, 1069 ].includes(e.scene) || "pages/today/index" != e.path || wx.reLaunch({
            url: "/pages/index/index"
        }), this.globalData.launchFromApp = !1;
    },
    onError: function(t) {
        e.track({
            ext: {
                errMsg: t
            }
        });
    },
    onUnhandledRejection: function(t) {
        e.track({
            ext: {
                errMsg: t
            }
        });
    },
    onPageNotFound: function(t) {
        e.track({
            ext: {
                errMsg: t
            }
        }), wx.redirectTo({
            url: "/pages/index/index"
        });
    },
    judgeIsTopic: function(e) {
        return new RegExp("#").test(e);
    },
    showLoading: function() {
        this.globalData.is_loading || (this.globalData.is_loading = !0, wx.showLoading({
            title: "加载中...",
            mask: !0
        }));
    },
    hideLoading: function() {
        this.globalData.is_loading = !1, wx.hideLoading({
            fail: function() {}
        });
    },
    onCreateIntersectionObserver: function(e, t) {
        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {}, i = this;
        this.globalData.timer = setTimeout(function() {
            clearTimeout(i.globalData.timer), i.globalData.timer = null, wx.createIntersectionObserver().relativeTo(e, {
                bottom: 2
            }).observe(t, function(e) {
                var t = !1;
                e.intersectionRect.top > 0 && (t = !0), a(t);
            });
        }, 100);
    },
    boundingClientRect: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
        wx.createSelectorQuery().select(e).fields({
            size: !0,
            rect: !0
        }, function(e) {
            t(e);
        }).exec();
    },
    globalData: {
        scene: 0,
        oriOpenId: "",
        openId: "",
        vid: "",
        uid: "",
        gsid: "",
        timer: null,
        is_loading: !1,
        windowWidth: 320,
        windowHeight: 504,
        realWindowHeight: 1181,
        statusBarHeight: 0,
        titleBarHeight: 0,
        totalTopHeight: 0,
        rate: 0,
        platform: "",
        pixelRatio: null,
        device: "",
        isHuaWeiZheDie: !1,
        networkType: "",
        versionNumber: "",
        SDKVersion: "",
        version: "",
        launchFromApp: !1,
        is_first_card7: !0,
        is_first_card9: !0,
        api_log: {},
        netWorkError: !1
    }
});