getApp();

Component({
    properties: {
        cardData: {
            type: Object,
            value: {}
        },
        headerBar: {
            type: Boolean,
            value: !1
        }
    },
    data: {},
    methods: {
        cardClick: function(e) {
            var a = e.currentTarget.dataset.query;
            a && wx.navigateTo({
                url: "/pages/comprehensiveSearch/index?q=" + a + "&page_from=topic",
                fail: function() {}
            });
        }
    }
});