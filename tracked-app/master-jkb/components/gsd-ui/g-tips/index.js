Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../behaviors/navigator");

Component({
    _timer: void 0,
    behaviors: [ e ],
    properties: {
        status: {
            type: String,
            value: "default"
        },
        isShow: {
            type: Boolean,
            value: !0,
            observer: function(e) {
                this.setData({
                    _isShow: e
                });
            }
        },
        closeable: Boolean,
        access: Boolean,
        position: String,
        loop: Boolean,
        duration: Number
    },
    data: {
        _isShow: !0
    },
    ready: function() {
        this.initTimer();
    },
    methods: {
        initTimer: function() {
            var e = this, t = this.properties.duration;
            t > 0 && (clearTimeout(this._timer), this._timer = setTimeout(function() {
                e.handleClose();
            }, 1e3 * t));
        },
        handleClose: function() {
            this.setData({
                _isShow: !1
            }), this.triggerEvent("close", {
                isShow: !1
            });
        },
        handleTap: function() {
            this.navigator();
        }
    }
});