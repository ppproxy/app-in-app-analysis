var e = require("./store/user"), t = require("./store/mine"), i = require("./store/config"), s = require("./components/gsd-lib/anim/anim.min"), n = require("./components/gsd-lib/event/index"), o = require("./config/index"), r = require("./utils/wx-promise"), a = require("./components/gsd-lib/map/index"), u = require("./components/gsd-lib/dayjs/index"), c = require("./components/gsd-lib/utils/index"), h = require("./components/gsd-lib/storage/index"), d = require("./utils/requestHb").requestHb, p = require("./utils/request").request;

App({
    onLaunch: function() {
        var g = this;
        this.systemInfo = wx.getSystemInfoSync(), this.utils = c, this.request = p, this.config = o, 
        this.dayjs = u, this.requestHb = d, this.storage = h, this.wxp = r, this.Anim = s, 
        this.Event = n, this.Map = a, this.resetTab = function() {
            return n.dispatch("g-tabs__resetStyle");
        }, this.userStore = e(this), this.configStore = i(this), this.configStore.fetchWllConfig(), 
        this.userStore.fetchUserInfo().then(function() {
            var e = wx.getLaunchOptionsSync();
            [ "pages/index/index", "pages/stat/index", "pages/buy/notice/index", "pages/mine/index/index", "packages/health-code/pages/report-health/index" ].includes(e.path) || g.userStore.checkAuth();
        }), this.mineStore = t(this);
        var l = wx.getUpdateManager();
        l.onCheckForUpdate(function(e) {
            console.log("updateManager.onCheckForUpdate 请求完新版本信息", e);
        }), l.onUpdateReady(function() {
            console.log("updateManager.onUpdateReady 新版本已准备好"), wx.showModal({
                title: "更新提示",
                content: "新版本已经准备好，请重启应用",
                showCancel: !1,
                success: function() {
                    l.applyUpdate();
                }
            });
        }), wx.removeStorageSync("selfForm__data");
    },
    onShow: function(e) {
        console.log(e), 1092 === e.scene && wx.hideHomeButton();
    }
});