var _util = require("../../util/util.js");

Component({
    properties: {
        animText: {
            type: String,
            value: "",
            observer: function observer() {
                if ((0, _util.getGlobalData)("__type__") === "baidu") {
                    this.getComponentWidth();
                }
            }
        }
    },
    data: {
        speed: 0,
        wrapWidth: 0,
        contentWidth: 0,
        offset: 0,
        isOver: false
    },
    ready: function ready() {
        if ((0, _util.getGlobalData)("__type__") === "weixin") {
            this.getComponentWidth();
        }
    },
    detached: function detached() {
        this.timer && clearInterval(this.timer);
    },
    methods: {
        startToAnimate: function startToAnimate(rate) {
            var _this = this;
            return new Promise(function(resolve) {
                if (!_this.data.animText.length) {
                    return;
                }
                // 字符串越长滚动时间越长
                                var time = parseInt(_this.data.animText.length * 300, 10);
                // 字符串越短停留时间越长
                                var animation = wx.createAnimation({
                    duration: time,
                    timingFunction: "linear"
                });
                animation.translateX(0).translateX("-" + rate + "%").step({
                    duration: time
                });
                animation.translateX(0).step({
                    duration: 0
                });
                _this.setData({
                    animationData: animation.export()
                }, function() {
                    resolve(time);
                });
            });
        },
        getComponentWidth: function getComponentWidth() {
            var _this2 = this;
            var query = wx.createSelectorQuery().in(this);
            query.select(".wrap").boundingClientRect(function(rect) {
                _this2.setData({
                    wrapWidth: rect.width
                });
            });
            query.select(".anim-block").boundingClientRect(function(rect) {
                _this2.setData({
                    contentWidth: rect.width
                });
            });
            query.exec(function() {
                if (_this2.data.contentWidth > _this2.data.wrapWidth) {
                    // 判断内容是否超出容器长度
                    _this2.setData({
                        isOver: true
                    });
                    var rate = (_this2.data.contentWidth - _this2.data.wrapWidth) / _this2.data.contentWidth * 100;
                    _this2.startToAnimate(rate).then(function(t) {
                        var emptyAni = wx.createAnimation({
                            duration: 0
                        });
                        _this2.timer && clearInterval(_this2.timer);
                        _this2.timer = setInterval(function() {
                            _this2.setData({
                                animationData: emptyAni.export()
                            }, function() {
                                _this2.startToAnimate(rate);
                            });
                        }, t + 2e3);
                    });
                }
            });
        }
    }
});
/**
     * @file 助理吊起app功能
     * @author zw
     */