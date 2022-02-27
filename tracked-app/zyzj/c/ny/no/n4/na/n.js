var e = require("../../../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../../../m/zk/za")), a = require("./../../5l/n"), i = e(require("../../../../../l/wd/wi"));

(0, t.default)({
    name: "call-code",
    properties: {
        isFromOrderList: {
            type: Boolean,
            value: !1
        },
        orderDetail: {
            type: Object,
            value: {}
        }
    },
    data: {
        TAKE_YOURSELF_MODE: a.TAKE_YOURSELF_MODE,
        time: null
    },
    localData: {
        timeFormat: "YYYY-MM-DD HH:mm"
    },
    ready: function() {
        this._init();
    },
    methods: {
        _init: function() {
            var e = this.data.orderDetail, t = e.bookFlag, a = e.bookTime;
            this.setData({
                time: t && a ? (0, i.default)(+a).format(this.localData.timeFormat) : ""
            });
        }
    }
});