var e = require("../../../../81CC8A51ACE07ADFE7AAE2566711A2D7.js"), t = 0;

Component({
    properties: {
        cardData: {
            type: Object,
            value: {}
        }
    },
    data: {
        swiper_height: 75
    },
    attached: function() {
        var e = this;
        this.createSelectorQuery().select(".card-content-120").boundingClientRect(function(t) {
            t && e.setData({
                swiper_height: t.height
            });
        }).exec();
    },
    methods: {
        swiperChange: function(e) {
            t = e.detail.current;
        },
        cardClick: function() {
            var a = this.data.cardData.groups && this.data.cardData.groups[t], i = "";
            a && (/searchall/.test(a.scheme) ? (i = "/pages/comprehensiveSearch/index?q=" + e.parseSchemeByKey(a.scheme, "q") + "&page_from=fun", 
            wx.navigateTo({
                url: i,
                fail: function() {}
            })) : /pageinfo/.test(a.scheme) && a.scheme.indexOf("filter_type%3dfun") > -1 && (i = "/pages/index/index?current=2", 
            wx.reLaunch({
                url: i,
                fail: function() {}
            })));
        }
    }
});