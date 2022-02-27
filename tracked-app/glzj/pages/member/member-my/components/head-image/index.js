var e = require("../../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../../m/zk/za")), t = require("../../../../../l/wh");

(0, e.default)({
    name: "head-image",
    data: {
        selectedTemplate: "DEFAULT_COLOR",
        imageUrl: "",
        brandColor: "#666"
    },
    localData: {
        options: Object.create(null)
    },
    ready: function() {
        this.setData({
            brandColor: (0, t.getThemeColor)()
        });
    },
    methods: {
        init: function(e) {
            return this.localData.options = e, this;
        },
        render: function() {
            var e = this.localData.options, t = e.selectedTemplate, a = e.data.imageUrl;
            this.setData({
                imageUrl: a,
                selectedTemplate: t
            });
        }
    }
});