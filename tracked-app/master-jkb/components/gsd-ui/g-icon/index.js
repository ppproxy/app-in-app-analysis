Component({
    properties: {
        type: {
            type: String,
            value: void 0
        },
        spin: {
            type: Boolean,
            value: !1
        },
        color: {
            type: String,
            value: "",
            observer: function(e) {
                var t = e;
                "primary" === e && (t = "#C02C38"), this.setData({
                    _color: t
                });
            }
        },
        size: {
            type: Number,
            value: 36
        }
    },
    data: {
        _color: ""
    },
    methods: {}
});