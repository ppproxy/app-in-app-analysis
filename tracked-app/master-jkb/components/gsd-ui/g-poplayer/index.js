Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../gsd-lib/event/index");

Component({
    externalClasses: [ "my-class" ],
    properties: {
        visible: {
            type: Boolean,
            observer: function(t, i) {
                t !== i && (t ? e.dispatch("g-textarea__hidden") : setTimeout(function() {
                    e.dispatch("g-textarea__show");
                }, 50), this.setData({
                    _visible: t
                }));
            }
        },
        direction: {
            type: String,
            value: "bottom"
        },
        maxWidth: {
            type: String,
            value: "50%"
        }
    },
    data: {
        _visible: !1,
        __levelDirection: !1
    },
    ready: function() {
        var e = this.properties.direction;
        "left" !== e && "right" !== e || this.setData({
            __levelDirection: !0
        });
    },
    methods: {
        handleCloseSelf: function(e) {
            this.triggerEvent("close", {
                visible: !1
            });
        }
    }
});