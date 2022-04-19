var _util = require("../../util/util");

Component({
    properties: {
        hotThreads: {
            type: Array,
            value: []
        },
        isOpenApp: {
            type: Boolean,
            value: false
        }
    },
    data: {
        currentTid: "",
        launchScheme: "com.baidu.tieba://unidispatch/pb?obj_type=hot&obj_source=weixin",
        canWakeUp: true
    },
    methods: {
        goPb: function goPb(e) {
            var tid = e.currentTarget.dataset.tid;
            wx.myNavigateTo({
                url: "/pages/pb/pb?tid=" + tid + "&from=commentSeoPage"
            });
            (0, _util.track)("seoGoPb");
        },
        wakeUp: function wakeUp() {
            this.setData({
                canWakeUp: false
            });
        }
    }
});
/**
     * @file 贴吧热榜
     */