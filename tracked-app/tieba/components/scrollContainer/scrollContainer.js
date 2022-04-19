var _util = require("../../util/util");

Component({
    properties: {
        triggerWrapScroll: {
            type: Boolean,
            value: false
        }
    },
    data: {
        scrollDistance: 0,
        isShow: true,
        slideup: false
    },
    created: function created() {
        this.system = getApp().globalData.systemInfo;
        // this.throttle = throttle(this.tmove, 10)
        },
    detached: function detached() {
        this.timer && clearTimeout(this.timer);
        this.setData({
            scrollDistance: 0
        });
    },
    methods: {
        tstart: function tstart(e) {
            this.start = e.touches[0].pageY;
        },
        tmove: function tmove(e) {
            var _this = this;
            if (!this.throttle) {
                this.throttle = (0, _util.throttle)(function(e) {
                    var move = e.touches[0].pageY - _this.start;
                    if (move < 0 && _this.data.triggerWrapScroll) {
                        _this.setData({
                            scrollDistance: move
                        });
                    }
                }, 15);
                return;
            }
            this.throttle(e);
        },
        tend: function tend() {
            this.start = 0;
            if (!this.data.scrollDistance) {
                this.setData({
                    scrollDistance: 0
                });
                return;
            }
            var windowHeight = this.system.windowHeight;
            if (-this.data.scrollDistance > windowHeight / 3) {
                var self = this;
                self.triggerEvent("renderNextForum");
                self.setData({
                    isShow: false,
                    slideup: true
                });
                wx.vibrateShort({
                    success: function success() {
                        self.timer && clearTimeout(self.timer);
                        self.timer = setTimeout(function() {
                            self.setData({
                                isShow: true,
                                scrollDistance: 0
                            });
                        });
                    },
                    fail: function fail() {
                        self.setData({
                            isShow: true,
                            scrollDistance: 0
                        });
                    }
                });
            } else {
                if (this.data.scrollDistance !== 0) {
                    this.setData({
                        scrollDistance: 0
                    });
                }
            }
        }
    }
});
/**
     * @file 下条帖子
     * @author zw
     */