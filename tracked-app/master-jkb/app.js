var e = require("./utils/aegisInstance"), i = require("./agent/tingyun-mp-agent.js"), t = require("./config/index").monitorConfig;

t && i.config(t);

var n = require("./utils/mta_analysis.js"), s = require("./store/user"), r = require("./store/mine"), o = require("./store/config"), a = require("./components/gsd-lib/anim/anim.min"), u = require("./components/gsd-lib/event/index"), c = require("./config/index"), l = require("./utils/wx-promise"), g = require("./components/gsd-lib/map/index"), h = (require("./components/gsd-lib/crypto/index"), 
require("./components/gsd-lib/dayjs/index")), m = require("./components/gsd-lib/utils/index"), p = require("./utils/realtimeLog"), d = require("./utils/mtaTarget.js").newspapers, f = require("./components/gsd-lib/storage/index"), q = require("./utils/request").request, x = (require("./utils/checkUpdate").checkUpdate, 
require("./utils/genDid"));

wx.getStorageSync("wx-did") || wx.setStorageSync("wx-did", x()), App({
    globalData: {
        aegis: e
    },
    onShow: function() {
        wx.onMemoryWarning(function(e) {
            d({
                eventId: "memory_warning"
            }), p.info({
                eventMsg: "内存告警",
                level: e
            });
        });
    },
    onHide: function() {
        wx.canIUse("offMemoryWarning") && wx.offMemoryWarning();
    },
    onLaunch: function() {
        e.setConfig({
            uin: wx.getStorageSync("wx-sessionid")
        }), wx.removeStorageSync("reqTimestamp"), this.removeMa4path(), this.utils = m, 
        this.request = q, this.config = c, this.dayjs = h, this.storage = f, this.wxp = l, 
        this.Anim = a, this.Event = u, this.Map = g, this.resetTab = function() {
            return u.dispatch("g-tabs__resetStyle");
        }, this.userStore = s(this), this.configStore = o(this), this.mineStore = r(this), 
        this.userStore.getJson(), this.getPhone();
        try {
            n.App.init({
                appID: "500724601",
                eventID: "500724602",
                autoReport: !0,
                statParam: !0,
                ignoreParams: [],
                statPullDownFresh: !0,
                statShareApp: !0
            });
        } catch (e) {}
    },
    getPhone: function() {
        q({
            url: "/push/notice/session/backup",
            method: "post",
            disableModalWhenApiError: !0
        }).then(function(e) {}).catch(function(e) {});
    },
    removeMa4path: function() {
        var e = wx.getStorageSync("home_ma4Path");
        console.log(e), e.success && (e.success.map(function(e, i) {
            wx.removeSavedFile({
                filePath: null != e.savedFilePath ? e.savedFilePath : "",
                complete: function(e) {}
            });
        }), e.fail.map(function(e, i) {
            wx.removeSavedFile({
                filePath: null != e.savedFilePath ? e.savedFilePath : "",
                complete: function(e) {}
            });
        }));
    }
});