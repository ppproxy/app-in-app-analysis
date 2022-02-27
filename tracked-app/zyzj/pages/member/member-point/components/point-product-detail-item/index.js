(0, require("../../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../../m/zk/za")).default)({
    name: "point-product-detail-item",
    options: {},
    properties: {
        sourceData: {
            type: Object,
            value: {}
        },
        extInfos: {
            type: Object,
            value: {}
        },
        type: {
            type: String,
            value: ""
        },
        onClick: {
            type: Function,
            value: null
        },
        onJoinMember: {
            type: Function,
            value: null
        },
        scene: {
            type: String,
            value: "pointPop"
        },
        spmc: {
            type: String,
            value: ""
        },
        spmd: {
            type: String,
            value: ""
        }
    },
    data: {},
    ready: function() {
        this.init();
    },
    detached: function() {},
    observers: {
        sourceData: function(e) {}
    },
    methods: {
        init: function() {
            this.setData({
                isShowNoGoodsPointsData: this.isShowNoGoodsPoints(this.data.type, this.data.scene, this.data.extra)
            });
        },
        handleClick: function() {
            var e = this.properties.onClick;
            this.tracertClick(), e && e();
        },
        onJoinMember: function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            this.props.onJoinMember(t);
        },
        isShowNoGoodsPoints: function(e) {
            var t = e.type, i = e.scene, n = e.extra, o = (void 0 === n ? {} : n).canExchange;
            return "GIFT_POINTS" === t && !1 === o && "guide" === i;
        }
    }
});