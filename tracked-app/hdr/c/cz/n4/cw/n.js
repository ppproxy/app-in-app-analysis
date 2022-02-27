(0, require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../m/zk/za")).default)({
    name: "dish-detail-swiper",
    data: {
        currentIndex: 0
    },
    properties: {
        dataList: {
            type: Array,
            value: []
        },
        dishImgHeight: {
            type: String,
            value: ""
        },
        isSpec: {
            type: Boolean,
            value: !0
        }
    },
    observers: {
        dataList: function() {
            this.setData({
                currentIndex: 0
            });
        }
    },
    ready: function() {
        this.setData({
            currentIndex: 0
        });
    },
    methods: {
        _swiperChange: function(e) {
            var t = e.detail, r = (void 0 === t ? {} : t).current, a = void 0 === r ? 0 : r;
            this.setData({
                currentIndex: a
            });
        }
    }
});