var _url = require("../../util/url");

var globalData = getApp().globalData;

/**
                                       * @file 三方小程序pb换量卡片
                                       */ Component({
    properties: {
        adParams: {
            type: Object,
            value: function value() {
                return {};
            }
        },
        tid: {
            type: String,
            value: ""
        },
        weiboCards: {
            type: Array,
            value: [],
            observer: function observer(data) {
                this.setData({
                    allCards: data.splice(0, 2)
                });
            }
        }
    },
    data: {
        allCards: [],
        IMG_CDN: _url.IMG_CDN,
        platform: globalData.systemInfo.platform
    },
    methods: {
        goThirdApp: function goThirdApp(e) {
            var index = e.currentTarget.dataset.index;
            var tid = e.currentTarget.dataset.tid;
            if (tid) {
                // 推荐的是贴吧的帖子
                wx.navigateTo({
                    url: "/pages/pb/pb?tid=" + tid
                });
                return;
            }
            var cardInfo = this.data.allCards[index];
            this.triggerEvent("toThirdApp", index);
            wx.navigateToSmartProgram({
                appKey: cardInfo.swan_app_key,
                path: cardInfo.app_url,
                extraData: {
                    from: "tieba"
                },
                success: function success(res) {}
            });
        }
    }
});