function observer(e) {
                var s = this;
                "iphone" === t ? (this.__timer__ && clearTimeout(this.__timer__), this.__timer__ = setTimeout(function() {
                    s.setData({
                        _status: e
                    }), s.__timer__ = void 0;
                }, 500)) : this.setData({
                    _status: e
                });
}
function observer() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "输入有误，请检查后重试";
                this.setData({
                    _statusMessage: t
                });
}
