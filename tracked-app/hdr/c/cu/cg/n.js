var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../m/zk/za"));

e(require("../../../m/5y"));

(0, t.default)({
    name: "component-title",
    data: {
        themeColor: "",
        boderColor: "",
        styles: {
            left: "nq6",
            center: "nq2",
            right: "nqs"
        }
    },
    localData: {
        options: Object.create(null)
    },
    properties: {
        title: {
            type: String,
            value: ""
        },
        textAlign: {
            type: String,
            value: "left"
        },
        type: {
            type: String,
            value: "text"
        },
        titleUrl: {
            type: String,
            value: ""
        },
        style: {
            type: String,
            value: ""
        },
        imageStyle: {
            type: String,
            value: ""
        },
        imageMode: {
            type: String,
            value: "aspectFit"
        },
        containerStyle: {
            type: String,
            value: ""
        }
    },
    ready: function() {
        this._init();
    },
    observers: {
        title: function() {
            this._init();
        }
    },
    methods: {
        _init: function() {},
        titleOnClick: function() {
            this.triggerEvent("handleClick");
        },
        hexToRgba: function(e, t) {
            var i = "rgba(" + parseInt("0x" + e.slice(1, 3)) + "," + parseInt("0x" + e.slice(3, 5)) + "," + parseInt("0x" + e.slice(5, 7)) + "," + t + ")";
            return {
                red: parseInt("0x" + e.slice(1, 3)),
                green: parseInt("0x" + e.slice(3, 5)),
                blue: parseInt("0x" + e.slice(5, 7)),
                rgba: i
            };
        }
    }
});