var t = getApp();

Component({
    properties: {
        cardData: {
            type: Object,
            value: {}
        }
    },
    data: {
        currentIndex: -1
    },
    observers: {
        cardData: function(t) {
            if (t) for (var e = 0; e < t.items && t.items.length; e++) t.items[e].show = !1;
        }
    },
    methods: {
        showvideo: function(t) {
            this.setData({
                currentIndex: t.currentTarget.dataset.index
            });
        },
        videoPlay: function(t) {
            this.videoContext = wx.createVideoContext(t.target.id, this);
        },
        fullScreenChange: function(e) {
            if (this.videoContext) {
                var a = !0;
                e.detail.fullScreen ? "ios" === t.globalData.platform && this.videoContext.hideStatusBar() : (a = !1, 
                "ios" === t.globalData.platform && this.videoContext.showStatusBar(), this.videoContext.pause()), 
                this.triggerEvent("fullScreenChange", {
                    ignore: a
                }, {
                    bubbles: !0,
                    composed: !0
                });
            }
        }
    }
});