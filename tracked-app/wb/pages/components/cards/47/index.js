var t = require("../../../../81CC8A51ACE07ADFE7AAE2566711A2D7.js");

Component({
    properties: {
        cardData: {
            type: Object,
            value: {}
        }
    },
    data: {},
    methods: {
        preview: function() {
            for (var a = [], e = this.data.cardData && this.data.cardData.pics, r = 0; r < e.length; r++) a.push(t.replaceHttps(e[r].pic_big));
            wx.previewImage({
                current: a[0],
                urls: a
            });
        }
    }
});