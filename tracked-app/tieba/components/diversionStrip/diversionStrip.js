var _trackTieba = require("../../util/trackTieba.js");

Component({
    properties: {
        IMG_CDN: {
            type: String,
            value: ""
        },
        page: {
            type: String,
            value: "pages/pb/pb"
        },
        wakeupConfig: {
            type: Object,
            value: {}
        }
    },
    attached: function attached() {
        (0, _trackTieba.trackTiebaView)({
            locate: "top_btn_bd",
            page: "pages/pb/pb"
        });
    },
    methods: {
        launchAppError: function launchAppError() {
            this.triggerEvent("launchAppError");
        }
    }
});
/**
     * @file 导流条
     * @author zw
     */