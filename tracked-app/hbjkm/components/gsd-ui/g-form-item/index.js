var t = wx.getSystemInfoSync().brand.toLowerCase();

Component({
    __timer__: void 0,
    externalClasses: [ "component-class", "static-item-class" ],
    properties: {
        required: Boolean,
        label: String,
        disabled: Boolean,
        status: {
            type: String,
            observer: function(e) {
                var s = this;
                "iphone" === t ? (this.__timer__ && clearTimeout(this.__timer__), this.__timer__ = setTimeout(function() {
                    s.setData({
                        _status: e
                    }), s.__timer__ = void 0;
                }, 500)) : this.setData({
                    _status: e
                });
            }
        },
        statusMessage: {
            type: String,
            value: "输入有误，请检查后重试",
            observer: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "输入有误，请检查后重试";
                this.setData({
                    _statusMessage: t
                });
            }
        }
    },
    data: {
        _status: "",
        _statusMessage: ""
    }
});