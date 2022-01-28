Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../behaviors/navigator"), t = require("../behaviors/icon");

Component({
    behaviors: [ e, t ],
    externalClasses: [ "component-class", "prepend-class" ],
    options: {
        multipleSlots: !0
    },
    properties: {
        label: String,
        desc: String,
        access: Boolean,
        disabled: {
            type: Boolean,
            value: !1
        }
    },
    data: {},
    methods: {
        handleTap: function(e) {
            this.properties.disabled || (this.navigator(), this.triggerEvent("tap", e.detail));
        }
    }
});