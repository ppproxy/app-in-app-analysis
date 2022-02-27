var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = require("../../../@babel/runtime/helpers/objectSpread2"), a = t(require("../../../m/zk/za")), o = require("../ct/ws/n");

(0, a.default)({
    name: "hot-spot",
    data: {},
    localData: {
        options: Object.create(null)
    },
    methods: {
        init: function(t) {
            return this.localData.options = t, {
                root: this,
                isShow: !0
            };
        },
        render: function() {
            var t = e(e({}, this.localData.options.data), {}, {
                selectedTemplate: this.localData.options.selectedTemplate,
                carouselList: this.localData.options.data.spots
            });
            this.setData(t);
        },
        handleClick: function(t) {
            o.carsuleClickEvent.call(this, t, "hot-spot-component");
        }
    }
});