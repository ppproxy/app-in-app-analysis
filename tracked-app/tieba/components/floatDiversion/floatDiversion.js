var _trackTieba = require("../../util/trackTieba");

var _util = require("../../util/util");

/**
 * @file 可配置浮标
 * @author liuchang61
 */ Component({
    properties: {
        page: {
            type: String,
            value: "pages/pb/pb"
        },
        id: {
            type: String,
            value: ""
        },
        isShow: {
            type: Boolean,
            value: false
        },
        isScrolling: {
            type: Boolean,
            value: false
        },
        link: {
            type: String,
            value: ""
        },
        launchSchemeConfig: {
            type: Object,
            value: {},
            observer: function observer(val) {
                if (val.param) {
                    val.param.locate = "floaticon";
                }
                this.setData({
                    wakeupConfig: val
                });
            }
        },
        imgUrl: {
            type: String,
            value: ""
        }
    },
    attached: function attached() {
        var date = (0, _util.getTimeValue)().toString();
        var floatDiversion = wx.getStorageSync("floatDiversion" + this.data.id).toString().split("#");
        var isCountLimited = floatDiversion[1] !== "";
        var currentCount = floatDiversion[0] === date ? +floatDiversion[1] : 0;
        var leftCount = Number.isNaN(currentCount) ? -1 : currentCount - 1;
        this.setData({
            leftCount: isCountLimited ? leftCount : 1
        });
        wx.setStorageSync("floatDiversion" + this.data.id, date + "#" + (isCountLimited ? leftCount : ""));
        if (leftCount >= 0 || !isCountLimited) {
            (0, _trackTieba.trackTiebaView)({
                page: this.data.page,
                locate: "floaticon"
            });
        }
    },
    data: {
        wakeupConfig: null,
        leftCount: -1
    },
    methods: {
        closeFloatDiversion: function closeFloatDiversion() {
            this.setData({
                isShow: false
            });
            this.triggerEvent("closeFloatDiversion");
        },
        wakeupClick: function wakeupClick() {
            if (this.data.link) {
                (0, _trackTieba.trackTiebaClick)({
                    page: this.data.page,
                    locate: "floaticon"
                });
                wx.navigateTo({
                    url: "/pages/webview/webview?url=" + encodeURIComponent(this.data.link) + "&from=link"
                });
            }
        }
    }
});