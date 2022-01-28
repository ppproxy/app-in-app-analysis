Component({
    properties: {
        dataList: Object,
        value: Number
    },
    data: {},
    methods: {
        bindChange: function(t) {
            this.triggerEvent("change", t.detail);
        }
    }
});