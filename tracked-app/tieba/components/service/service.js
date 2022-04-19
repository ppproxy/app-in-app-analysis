var _util = require("../../util/util");

var _url = require("../../util/url");

/**
 * @file 自定义顶部导航栏
 */ Component({
    properties: {
        isServiceModal: {
            type: Boolean,
            value: false
        },
        title: {
            type: String,
            value: ""
        },
        path: {
            type: String,
            value: ""
        }
    },
    data: {
        IMG_CDN: _url.IMG_CDN,
        isServiceModal: false,
        title: "",
        path: ""
    },
    methods: {
        openService: function openService() {
            this.setData({
                isServiceModal: false
            }, function() {
                (0, _util.track)("customer_service");
            });
        },
        closeService: function closeService() {
            this.setData({
                isServiceModal: false
            });
        }
    }
});