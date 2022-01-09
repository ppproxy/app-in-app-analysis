getApp();

Component({
    properties: {
        cardData: {
            type: Object,
            value: {}
        },
        no_border_bottom: {
            type: Boolean,
            value: !1
        }
    },
    data: {},
    methods: {
        onClickTap: function(e) {
            var t = e.currentTarget.dataset.scheme, r = e.currentTarget.dataset.query;
            this.triggerEvent("cardClick", {
                query: r,
                scheme: t
            });
        }
    }
});