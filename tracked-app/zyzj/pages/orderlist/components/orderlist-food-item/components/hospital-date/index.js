(0, require("../../../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../../../m/zk/za")).default)({
    name: "hospital-date",
    properties: {
        enableDistribution: {
            type: Boolean,
            value: !1
        },
        distribution: {
            type: Object,
            value: {}
        }
    },
    data: {
        isShow: !1
    },
    observers: {
        enableDistribution: function() {
            this._init();
        },
        distribution: function() {
            this._init();
        }
    },
    ready: function() {},
    methods: {
        _init: function() {
            var i = this.data, t = i.enableDistribution, e = void 0 !== t && t, n = i.distribution, s = !1;
            e && (s = Object.keys(n || {}).length > 0);
            this.setData({
                isShow: s
            });
        }
    }
});