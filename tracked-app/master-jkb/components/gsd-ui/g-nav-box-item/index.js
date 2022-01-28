Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../behaviors/navigator");

Component({
    behaviors: [ e ],
    externalClasses: [ "component-class" ],
    properties: {
        disabled: {
            type: Boolean,
            value: !1
        }
    },
    data: {},
    methods: {
        handleTapItem: function() {
            this.properties.disabled || this.navigator();
        }
    }
});