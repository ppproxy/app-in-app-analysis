var _util = require("../../util/util");

var _url = require("../../util/url");

var _trackTieba = require("../../util/trackTieba");

Component({
    properties: {
        showMainCallApp: {
            type: Boolean,
            value: false
        },
        query: {
            type: String,
            value: ""
        },
        isVideo: {
            type: Boolean,
            value: false
        },
        wakeupConfig: {
            type: Object,
            value: {},
            observer: function observer(val) {
                if (!val) {
                    return;
                }
                var text = "打开贴吧APP，查看更多精彩内容";
                if (this.data.isVideo) {
                    text = "高清更流畅，App内打开观看";
                } else if (this.data.query) {
                    text = "打开贴吧APP，查看更多" + this.data.query + "相关内容";
                }
                this.setData({
                    text: text
                });
            }
        },
        page: {
            type: String,
            value: ""
        },
        // 是否使用自定义调起
        isCustomize: {
            type: Boolean,
            value: false
        },
        track: {
            type: String,
            value: ""
        },
        tid: {
            type: Number,
            value: 0
        }
    },
    data: {
        IMG_CDN: _url.IMG_CDN,
        isBaidu: (0, _util.getGlobalData)("isBaidu"),
        isVideo: false,
        text: "打开贴吧APP，查看更多精彩内容",
        platform: (0, _util.getGlobalData)("systemInfo").platform
    },
    ready: function ready() {},
    methods: {
        launchTieBaAppError: function launchTieBaAppError() {
            this.triggerEvent("launchAppError");
        }
    }
});
/**
     * @file 助理吊起app功能
     */