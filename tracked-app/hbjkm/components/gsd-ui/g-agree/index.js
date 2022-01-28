Component({
    properties: {
        value: Boolean
    },
    data: {},
    methods: {
        handleChange: function(e) {
            this.triggerEvent("change", {
                value: e.detail.value.length > 0
            });
        }
    }
});