getApp();

Component({
    properties: {
        cardData: {
            type: Object,
            value: {}
        },
        pageFrom: {
            type: String,
            value: "search"
        }
    },
    data: {},
    attached: function() {},
    methods: {
        cardClick: function(e) {
            var a = e.currentTarget.dataset.query;
            a && wx.navigateTo({
                url: "/pages/comprehensiveSearch/index?q=" + a + "&page_from=" + this.data.pageFrom,
                fail: function() {}
            });
        }
    }
});