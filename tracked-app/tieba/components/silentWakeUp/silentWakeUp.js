var _trackTieba = require("../../util/trackTieba");

var _util = require("../../util/util");

/**
 * @file 静默调起
 */ var brands = {
    baiduboxapp: {
        name: "shoubai",
        title: "百度小程序"
    },
    vivobrowser: {
        name: "vivo",
        title: "vivo浏览器"
    },
    // todo: 确定其他端外浏览器的host后进行修改，并在css里面加对应的logo
    oppo: {
        name: "oppo",
        title: "oppo浏览器"
    },
    xiaomi: {
        name: "xiaomi",
        title: "小米浏览器"
    }
};

Component({
    properties: {
        show: {
            type: Boolean,
            value: false,
            observer: function observer(isShow) {
                if (isShow) {
                    this.setData({
                        isShow: isShow
                    });
                    (0, _trackTieba.trackTiebaView)({
                        page: this.data.page,
                        locate: "sb_launchapp"
                    });
                }
            }
        },
        wakeupPopupConfig: {
            type: Object,
            value: {}
        },
        title: {
            type: String,
            value: "百度贴吧"
        },
        subTitle: {
            type: String,
            value: "聊兴趣 上贴吧"
        },
        page: {
            type: String,
            value: "pages/pb/pb"
        }
    },
    data: {
        isShow: false,
        envHostInfo: {}
    },
    attached: function attached() {
        var host = (0, _util.getGlobalData)("systemInfo") && (0, _util.getGlobalData)("systemInfo").host || wx.getStorageSync("systemInfo").host || "baiduboxapp";
        this.setData({
            envHostInfo: brands[host]
        });
    },
    methods: {
        wakeupClick: function wakeupClick() {
            this.triggerEvent("wakeupClick");
            this.setData({
                isShow: false
            });
        },
        cancel: function cancel() {
            this.setData({
                isShow: false
            });
            this.triggerEvent("silentCancel");
            (0, _trackTieba.trackTiebaClick)({
                page: this.data.page,
                locate: "sb_cancel"
            });
        }
    }
});