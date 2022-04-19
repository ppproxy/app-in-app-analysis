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
        searchQuery: function(e) {},
        onClickTap: function(e) {
            var t = e.currentTarget.dataset.query, r = e.currentTarget.dataset.scheme;
            r && this.triggerEvent("cardClick", {
                scheme: r,
                query: t
            });
        }
    }
});