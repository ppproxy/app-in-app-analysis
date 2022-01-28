Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../behaviors/primarySecondButton");

Component({
    behaviors: [ e ],
    properties: {
        title: String,
        status: String,
        desc: String,
        primaryText: String,
        secondText: String,
        footerFixed: Boolean
    },
    data: {}
});