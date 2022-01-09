var e = getApp();

Component({
    properties: {
        cardData: {
            type: Object,
            value: {}
        }
    },
    data: {
        videoContext: null
    },
    observers: {
        cardData: function(e) {
            this.dealAttitudes(e);
        }
    },
    ready: function() {
        var e = this.dealAttitudes(this.data.cardData);
        this.setData({
            cardData: e
        });
    },
    methods: {
        dealAttitudes: function(e) {
            return e && (e.left_element && e.left_element.mblog && e.left_element.mblog.url_objects[0] && e.left_element.mblog.url_objects[0].object && "video" === e.left_element.mblog.url_objects[0].object.object_type && (e.left_element.show = !1), 
            e.right_element && e.right_element.mblog && e.right_element.mblog.url_objects[0] && e.right_element.mblog.url_objects[0].object && "video" === e.right_element.mblog.url_objects[0].object.object_type && (e.right_element.show = !1)), 
            e;
        },
        preview: function(e) {
            for (var t = [], a = 0; a < e.currentTarget.dataset.ids.length; a++) t.push("https://ww1.sinaimg.cn/bmiddle/" + e.currentTarget.dataset.ids[a] + ".jpg");
            wx.previewImage({
                current: "https://ww1.sinaimg.cn/bmiddle/" + e.currentTarget.dataset.ids + ".jpg",
                urls: t
            });
        },
        showvideo: function(e) {
            var t = e.currentTarget.dataset.type;
            "left_element" === t ? this.setData({
                "cardData.left_element.show": !0
            }) : "right_element" === t && this.setData({
                "cardData.right_element.show": !0
            });
        },
        videoPlay: function(e) {
            this.videoContext = wx.createVideoContext(e.target.id, this);
        },
        fullScreenChange: function(t) {
            if (this.videoContext) {
                var a = !0;
                t.detail.fullScreen ? "ios" === e.globalData.platform && this.videoContext.hideStatusBar() : (a = !1, 
                "ios" === e.globalData.platform && this.videoContext.showStatusBar(), this.videoContext.pause()), 
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