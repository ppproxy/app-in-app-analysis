Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        data: {
            type: Array,
            value: []
        }
    },
    data: {},
    ready: function() {
        console.log(this.data.textArray);
    },
    methods: {}
});