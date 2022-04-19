getApp();

Component({
    properties: {
        text: String
    },
    data: {},
    methods: {
        retryRequest: function() {
            this.triggerEvent("loadData", {
                params: ""
            }, {
                bubbles: !0
            });
        }
    }
});