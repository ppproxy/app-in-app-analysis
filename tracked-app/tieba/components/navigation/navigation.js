var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};

/**
                                                                                                                                                                                                                                                                   * @file 自定义顶部导航栏
                                                                                                                                                                                                                                                                   */ var _util = require("../../util/util");

Component({
    properties: {
        title: {
            type: String,
            value: ""
        },
        statusBg: {
            type: String,
            value: "#fff"
        },
        titleBg: {
            type: String,
            value: ""
        },
        titleColor: {
            type: String,
            value: "black"
        },
        border: {
            type: String,
            value: ""
        },
        showBackIcon: {
            type: Boolean,
            value: true,
            // 防止父组件动态修改 showBackIcon
            observer: function observer() {
                this.handleBackIcon();
            }
        },
        opacity: {
            type: Number,
            value: 1
        },
        commoncolor: {
            type: String,
            value: ""
        },
        lightcolor: {
            type: String,
            value: ""
        },
        darkcolor: {
            type: String,
            value: ""
        },
        hasBg: {
            type: Boolean,
            value: true
        },
        showHomeIcon: {
            type: Boolean,
            value: true
        },
        isFrs: {
            type: Boolean,
            value: false
        },
        customBack: {
            type: Boolean,
            value: false
        },
        showInput: {
            type: Boolean,
            value: false
        },
        forumname: {
            type: String,
            value: ""
        }
    },
    data: _extends({}, (0, _util.getStatusHeight)(getApp().globalData.systemInfo), {
        isSupportHead: true,
        showBackPlace: false
    }),
    created: function created() {
        if (wx.getMenuButtonBoundingClientRect && !getApp().globalData.systemInfo.system.includes("iOS")) {
            this.setData({
                capsule: wx.getMenuButtonBoundingClientRect().width + 25
            });
        }
    },
    attached: function attached() {
        this.handleBackIcon();
    },
    methods: {
        back: function back() {
            if (!this.data.customBack) {
                wx.navigateBack({
                    delta: 1
                });
            } else {
                this.triggerEvent("goback");
            }
        },
        goHome: function goHome() {
            wx.switchTab({
                url: "/pages/index/index"
            });
        },
        clickNav: function clickNav(e) {
            if (this.time && e.timeStamp - this.time < 300) {
                this.time = null;
                this.triggerEvent("doubleTap");
            }
            this.time = e.timeStamp;
        },
        toSearch: function toSearch() {
            var from = this.data.isFrs ? "frs" : "";
            wx.myNavigateTo({
                url: "/pages/search/search?from=" + from + "&forumname=" + this.data.forumname
            });
        },
        handleBackIcon: function handleBackIcon() {
            // 手百小程序，若 swanNativeVersion >= 2.28.0, 小程序框架自带返回按钮，自定义返回按钮隐藏
            var info = (0, _util.getGlobalData)("systemInfo");
            if ((0, _util.getGlobalData)("isBaidu") && (0, _util.compareVersion)(info.swanNativeVersion, "2.28.0") >= 0) {
                this.setData({
                    showBackIcon: false,
                    showBackPlace: true
                });
            }
        }
    }
});