var _trackTieba = require("../../util/trackTieba");

Component({
    properties: {
        trackInfo: {
            type: Object,
            value: {
                page: "pages/pb/pb"
            }
        },
        page: {
            type: String,
            value: "pages/pb/pb"
        }
    },
    methods: {
        viewMore: function viewMore() {
            this.triggerEvent("viewMore");
            (0, _trackTieba.trackTiebaClick)({
                locate: "viewmore",
                page: this.data.page
            });
        }
    }
});
/**
     * @file 查看更多评论
     * @author liuchang61
     */