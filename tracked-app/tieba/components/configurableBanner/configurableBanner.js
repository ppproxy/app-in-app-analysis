var _util = require("../../util/util");

var _trackTieba = require("../../util/trackTieba.js");

/**
 * @file pb可配置banner
 * @author liuchang61
 */ Component({
    properties: {
        page: {
            type: String,
            value: "pages/pb/pb"
        },
        wakeupConfig: {
            type: Object,
            value: {}
        },
        imgUrl: {
            type: String,
            value: ""
        }
    },
    attached: function attached() {
        (0, _trackTieba.trackTiebaView)({
            locate: "top_btn_bd",
            page: this.data.page
        });
    }
});