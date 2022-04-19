var _url = require("../../util/url");

Component({
    properties: {},
    data: {
        IMG_CDN: _url.IMG_CDN
    },
    created: function created() {},
    attached: function attached() {},
    methods: {
        toSearch: function toSearch(e) {
            this.triggerEvent("toSearch", e);
        }
    }
});
/**
     * @file 首页顶部搜索框
     */