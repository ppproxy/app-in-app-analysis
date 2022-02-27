var e = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../m/zk/za")), r = require("../../../l/wh");

(0, e.default)({
    name: "preview-mode-tag",
    data: {
        show: !1
    },
    ready: function() {
        this.setData({
            show: "preview" === (0, r.getPreviewMode)()
        });
    },
    localData: {},
    methods: {}
});