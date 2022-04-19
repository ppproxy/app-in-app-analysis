Component({
    properties: {
        cardData: {
            type: Object,
            value: {}
        }
    },
    data: {},
    methods: {
        onClickTap: function(e) {
            var t = e.currentTarget.dataset.scheme;
            t && this.triggerEvent("cardClick", {
                scheme: t
            });
        }
    }
});