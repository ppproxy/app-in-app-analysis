Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../behaviors/icon");

Component({
    behaviors: [ e ],
    relations: {
        "../g-preview/index": {
            type: "parent"
        }
    },
    properties: {
        label: String,
        textAlign: String,
        type: {
            type: String,
            value: "normal"
        }
    },
    data: {
        _textAlign: "left",
        _labelWidth: 220
    },
    methods: {
        setPreviewItem: function(e) {
            this.setData(e);
        }
    }
});