var a = getApp();

Component({
    properties: {
        cardData: {
            type: Object,
            value: {}
        }
    },
    data: {},
    ready: function() {
        var t = this;
        if (this.data.cardData && this.data.cardData.desc) {
            var e = this.data.cardData.desc.replace(/↵|\n/g, "<br />");
            if (this.setData({
                "cardData.desc": e
            }), !a.globalData.is_first_card7) return;
            this.createSelectorQuery().select(".card-7").fields({
                size: !0
            }, function(a) {
                wx.setStorage({
                    key: "card_7_height",
                    data: /导语/.test(t.data.cardData.desc) && a ? a.height : 0
                });
            }).exec();
        }
        a.globalData.is_first_card7 = !1;
    },
    methods: {}
});