var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../m/zk/za"));

(0, e.default)({
    name: "toast",
    data: {
        visible: !1,
        message: ""
    },
    localData: {
        _timer: null
    },
    methods: {
        show: function(e, t, a) {
            var i = this;
            if (!e) throw new Error("message is must param");
            "number" == typeof t && (a = t), a || (a = 800), clearTimeout(this.localData._timer), 
            this.setData({
                visible: !0,
                message: e
            }), a > 0 && a !== 1 / 0 && (this.localData._timer = setTimeout(function() {
                i._hide(), t && "function" == typeof t && t.apply();
            }, a));
        },
        _hide: function() {
            this.localData._timer = clearTimeout(this.localData._timer), this.setData({
                visible: !1
            });
        }
    }
});