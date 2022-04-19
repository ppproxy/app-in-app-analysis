var _util = require("../../util/util");

Component({
    properties: {
        config: {
            type: Object,
            value: {}
        },
        page: {
            type: String,
            value: ""
        }
    },
    data: {
        isBrowser: (0, _util.getGlobalData)("isBrowser") || wx.getStorageSync("isBrowser")
    }
});
/**
     * @file 吊起公共组件
     * @author lishuaishuai01
     */