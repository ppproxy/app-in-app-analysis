Component({
    properties: {
        datas: {
            type: Object,
            observer: "_propertyDataChange"
        }
    },
    data: {
        searchArray: [],
        keyName: ""
    },
    methods: {
        _propertyDataChange: function(e) {
            var t = this.getHilightStrArray(e.name, e.key);
            this.setData({
                keyName: e.key,
                searchArray: t
            });
        },
        getHilightStrArray: function(e, t) {
            return e.replace(new RegExp("".concat(t), "g"), "%%".concat(t, "%%")).split("%%");
        }
    }
});