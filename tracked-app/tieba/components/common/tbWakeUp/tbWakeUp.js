var _util = require("../../../util/util");

var _wakeup = require("../../../util/wakeup");

var _trackTieba = require("../../../util/trackTieba");

Component({
    properties: {
        // 调起传参，同调起库
        config: {
            type: Object,
            value: {},
            observer: function observer(config) {
                if (!config) {
                    return;
                }
                var schema = (0, _wakeup.getSchema)(config);
                this.setData({
                    launchSchema: schema
                });
            }
        },
        // 小程序的页面
        page: {
            type: String,
            value: ""
        },
        // 能否调起
        isOpenApp: {
            type: Boolean,
            value: true
        },
        // 小程序后台统计
        trackAnalysis: {
            type: String,
            value: ""
        },
        // 是否自定义失败处理
        isCustomizeFail: {
            type: Boolean,
            value: false
        }
    },
    data: {
        launchSchema: "",
        token: ""
    },
    methods: {
        wakeupClick: function wakeupClick() {
            this.triggerEvent("wakeupClick");
            if (!this.data.isOpenApp) {
                return;
            }
            var token = this.data.config.param && this.data.config.param.token ? this.data.config.param.token : (0, 
            _wakeup.generateToken)(this.data.config);
            if (token) {
                this.setData({
                    token: token
                });
                wx.setClipboardData({
                    data: token,
                    complete: function complete() {
                        wx.hideToast();
                    }
                });
            }
            // 打点
                        this.data.trackAnalysis && (0, _util.track)(this.data.trackAnalysis);
            if (this.data.config.param && this.data.config.param.track) {
                (0, _trackTieba.trackTiebaClick)({
                    page: this.data.page,
                    locate: this.data.config.param.track,
                    qd: this.data.config.androidSource
                });
            }
        },
        launchAppError: function launchAppError() {
            this.triggerEvent("launchAppError");
            /** ~~baidu begin~~ */            if (!this.data.isCustomizeFail && (0, _util.getGlobalData)("systemInfo").platform === "android") {
                var scheme = encodeURIComponent(this.data.launchSchema);
                wx.navigateTo({
                    url: "/pages/swanMiddlePage/swanMiddlePage?scheme=" + scheme + "&token=" + this.data.token + "&page=" + this.data.page
                });
            }
            /** ~~baidu begin~~ */        }
    }
});
/**
     * @file 调起公共组件
     * @author liuchang61
     */