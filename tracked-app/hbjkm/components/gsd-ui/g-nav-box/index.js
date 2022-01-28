Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../behaviors/navigator");

Component({
    behaviors: [ e ],
    externalClasses: [ "component-class" ],
    properties: {
        navId: String,
        title: String,
        icon: String,
        disabled: Boolean,
        toText: String,
        footerText: String
    },
    data: {},
    methods: {
        handleTapTitle: function(e) {
            this.properties.disabled || (this.navigator(), this.triggerEvent("tapTitle", e.currentTarget));
        }
    }
});