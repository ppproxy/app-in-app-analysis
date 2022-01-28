module.exports = Behavior({
    properties: {
        icon: String,
        disabled: Boolean,
        items: {
            type: Array,
            value: [],
            observer: function(e) {
                var t = this.properties.value;
                e = e.map(function(e) {
                    return e.checked = !1, Array.isArray(t) && -1 !== t.indexOf(String(e.value)) ? e.checked = !0 : String(t) === String(e.value) && (e.checked = !0), 
                    "string" == typeof e.desc && (e.desc = e.desc.split("\n")), e;
                }), this.setData({
                    _items: e
                });
            }
        },
        value: {
            type: [ Array, String ],
            observer: function(e) {
                var t = this.data._items.map(function(t) {
                    return t.checked = !1, Array.isArray(e) ? -1 !== e.indexOf(t.value.toString()) && (t.checked = !0) : String(e) === String(t.value) && (t.checked = !0), 
                    t;
                });
                this.setData({
                    _items: t
                });
            }
        }
    },
    data: {
        _items: []
    },
    methods: {
        handleChange: function(e) {
            this.triggerEvent("change", e.detail);
        },
        handleIconTap: function(e) {
            var t = e.currentTarget.dataset;
            this.triggerEvent("iconTap", t.item);
        }
    }
});