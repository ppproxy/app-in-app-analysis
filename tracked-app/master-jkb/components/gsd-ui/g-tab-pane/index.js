Component({
    relations: {
        "../g-tabs/index": {
            type: "parent"
        }
    },
    properties: {
        tab: {
            type: String
        },
        key: String
    },
    data: {
        tabPaneStyle: ""
    },
    methods: {
        calcSelfStyle: function(t) {
            var e = "left:".concat(750 * t, "rpx;");
            this.setData({
                tabPaneStyle: e
            });
        },
        getCurrentStyle: function() {
            var t = this;
            return new Promise(function(e, n) {
                t.createSelectorQuery().select(".tab-pane").boundingClientRect().exec(function(t) {
                    e(t && t[0]);
                });
            });
        }
    }
});