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
                                                                                                                                                                                                                                                                   * @file 下拉组件
                                                                                                                                                                                                                                                                   */ var _util = require("../../util/util");

Component({
    options: {
        multipleSlots: true
    },
    properties: {
        stopPullDown: {
            type: Boolean,
            value: false,
            observer: function observer(newV, oldV) {
                this.setData({
                    scrollDistance: 0
                });
                this.canScroll = true;
            }
        },
        gapHeight: {
            type: Number,
            value: 80
        },
        loadingPadding: {
            // loading上下padding
            type: Number,
            value: 10
        },
        damp: {
            // 阻尼系数
            type: Number,
            value: 5
        },
        hasNaviBg: {
            type: Boolean,
            value: true
        },
        pageName: {
            type: String,
            value: ""
        },
        isToTop: {
            type: Boolean,
            value: "",
            observer: function observer(newV) {
                this.setData({
                    scrollToWhere: "highest"
                });
            }
        }
    },
    data: _extends({}, (0, _util.getStatusHeight)(getApp().globalData.systemInfo), {
        scrollDistance: 0,
        showBg: false,
        frezenPage: false,
        scrollToWhere: ""
    }),
    created: function created() {
        this.scrollTop = 0;
        this.canScroll = true;
        this.setData({
            pageName: this.data.pageName
        });
    },
    methods: {
        tstart: function tstart(e) {
            this.pageY = e.touches[0].pageY;
        },
        tmove: function tmove(e) {
            if (!this.canScroll) {
                return;
            }
            if (this.scrollTop === 0) {
                // 显示背景
                if (!this.data.showBg) {
                    this.setData({
                        showBg: true
                    });
                }
                // 冻结页面
                                if (!this.data.frezenPage && this.data.scrollDistance > 0) {
                    this.setData({
                        frezenPage: true
                    });
                }
                // 移动页面
                                var self = this;
                var distance = self.data.damp * Math.sqrt(e.touches[0].pageY - self.pageY) || 0;
                distance = distance < 0 ? 0 : distance;
                self.setData({
                    scrollDistance: distance
                });
            }
        },
        tend: function tend(e) {
            var _this = this;
            if (this.data.frezenPage) {
                this.setData({
                    frezenPage: false
                });
            }
            var dis = 0;
            if (this.data.scrollDistance >= this.data.gapHeight) {
                dis = this.data.gapHeight;
                this.canScroll = false;
                this.triggerEvent("pull");
                setTimeout(function() {
                    _this.setData({
                        scrollDistance: 0
                    });
                }, 2e4);
            }
            this.setData({
                scrollDistance: dis
            });
        },
        scroll: function scroll(e) {
            this.scrollTop = e.detail.scrollTop < 50 ? 0 : e.detail.scrollTop;
            this.triggerEvent("pageScroll", e.detail);
        },
        scrolltolower: function scrolltolower(e) {
            this.triggerEvent("scrolltolower", e);
        }
    }
});