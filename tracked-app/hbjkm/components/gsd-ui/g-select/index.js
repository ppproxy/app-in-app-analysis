Component({
    properties: {
        dataList: Object,
        _current: Number,
        width: {
            type: String,
            value: "33.33%"
        }
    },
    externalClasses: [ "my-class-btn" ],
    data: {},
    methods: {
        handleTap: function(t) {
            var e = t.currentTarget.dataset.index;
            this.setData({
                _current: e
            }), this.triggerEvent("selected", t.currentTarget.dataset.index);
        }
    }
});