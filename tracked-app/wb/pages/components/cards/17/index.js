Component({
    properties: {
        cardData: {
            type: Object,
            value: []
        }
    },
    data: {},
    methods: {
        onClickTap: function(e) {
            var t = e.currentTarget.dataset.query, r = e.currentTarget.dataset.scheme;
            r && this.triggerEvent("cardClick", {
                scheme: r,
                query: t
            });
        }
    }
});