var _util = require("../../util/util");

var _filters = require("../../util/filters.js");

/**
 * @file 搜索页的输入框组件
 */ Component({
    properties: {
        nextForumInfo: {
            type: Object,
            value: function value() {
                return {};
            },
            observer: function observer(val) {
                if (val.title && val.abstract && val.title.replace(/\s/g, "") === val.abstract.replace(/\s/g, "")) {
                    val.abstract = "";
                }
                this.setData({
                    logo: _util.GEN_PORTRAIT + val.portrait,
                    username: val.user_nickname || val.user_name || val.name_show,
                    time: (0, _filters.postTime)(val.create_time),
                    title: val.title,
                    abstract: val.abstract,
                    contentImage: val.img
                });
            }
        }
    },
    data: {},
    created: function created() {},
    methods: {}
});