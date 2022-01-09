Component({
    properties: {
        cardData: {
            type: Object,
            value: {}
        }
    },
    data: {},
    methods: {
        showvideo: function() {
            this.setData({
                "video.show": !0
            }), this.videoContext = wx.createVideoContext("myvideo", this), this.videoContext.requestFullScreen({
                direction: 90
            });
        }
    }
});