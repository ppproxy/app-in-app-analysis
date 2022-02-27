var t = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../m/zk/za"));

(0, t.default)({
    name: "loading",
    data: {
        visible: !1,
        message: "",
        status: "loading"
    },
    localData: {
        _timer: null
    },
    methods: {
        showLoading: function(t) {
            var i = "加载中";
            t && (i = t), this.data.visible || this.setData({
                visible: !0,
                message: i,
                status: "loading"
            });
        },
        hideLoading: function() {
            this.setData({
                visible: !1
            });
        },
        success: function(t, i) {
            this._showStatus("success", t, i);
        },
        fail: function(t, i) {
            this._showStatus("fail", t, i);
        },
        _showStatus: function(t, i, s) {
            var a = this;
            this.hideLoading(), clearTimeout(this.localData._timer);
            var e = s || 800, u = "success" === t ? "加载成功" : "加载失败";
            i && (u = i), this.data.visible || this.setData({
                visible: !0,
                message: u,
                status: t
            }, function() {
                a.localData._timer = setTimeout(function() {
                    a.hideLoading();
                }, e);
            });
        }
    }
});