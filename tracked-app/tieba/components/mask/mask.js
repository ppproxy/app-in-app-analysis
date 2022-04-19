/**
 * @file mask
 */
Component({
    properties: {
        showmask: {
            type: Boolean,
            value: false
        },
        bgcolor: {
            type: String,
            value: "rgba(0, 0, 0, .65)"
        }
    },
    data: {},
    attached: function attached() {},
    methods: {
        toggle: function toggle() {
            this.triggerEvent("togglemask");
        },
        empty: function empty(e) {}
    }
});