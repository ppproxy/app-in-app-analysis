Component({
    externalClasses: [ "component-class" ],
    properties: {
        count: {
            type: [ Number, String ],
            observer: function(o) {
                this.isShowOverflowCount(o);
            }
        },
        dot: {
            type: Boolean,
            value: !1
        },
        overflowCount: {
            type: Number,
            value: 99
        },
        position: {
            type: String,
            value: "none"
        }
    },
    data: {
        showOverflowCount: !1
    },
    methods: {
        isShowOverflowCount: function(o) {
            "number" == typeof o && o >= this.properties.overflowCount ? this.setData({
                showOverflowCount: !0
            }) : this.setData({
                showOverflowCount: !1
            });
        }
    }
});