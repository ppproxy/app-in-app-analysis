var _util = require("../../util/util");

Component({
    properties: {
        // 广告 list
        adList: {
            type: Array,
            value: []
        }
    },
    methods: {
        // 跳转广告外链
        loadWebview: function loadWebview(e) {
            // 获取跳转链接
            var url = e.currentTarget.dataset.url;
            var trackInfo = e.currentTarget.dataset.trackInfo;
            (0, _util.openAdWebPage)(url);
            // 打点
                        (0, _util.track)("pb_nest_web", trackInfo);
        },
        // 下载 app
        downloadApp: function downloadApp(e) {
            var dataset = e.currentTarget.dataset;
            // 获取跳转链接 和 appId
                        var url = dataset.url;
            var link = dataset.link;
            var appId = dataset.appId;
            var trackInfo = dataset.trackInfo;
            // 打点
                        (0, _util.track)("pb_nest_download", trackInfo);
            // 需单独发送计费请求
                        (0, _util.handleSimpleRequest)(link);
            // app 下载
                        (0, _util.createDownloadApp)(appId, url);
        }
    }
});
/**
     * @file banner 广告组件
     */