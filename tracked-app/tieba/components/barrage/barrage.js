var _util = require("../../util/util");

Component({
    properties: {
        scrollDatas: {
            type: Array,
            value: [],
            observer: function observer(newval) {
                if (newval.length > 1) {
                    this.datas = newval;
                    this.startAnimation();
                }
            }
        },
        startScroll: {
            type: Boolean,
            value: true,
            observer: function observer(newval) {
                if (newval) {
                    this.startAnimation();
                } else {
                    this.stopDanmu();
                }
            }
        },
        needPbCut: {
            type: Number,
            value: 0
        }
    },
    data: {
        arr: [],
        isIPX: (0, _util.getGlobalData)("isIphoneX")
    },
    datas: [],
    ready: function ready() {},
    detached: function detached() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    },
    methods: {
        animationFn: function animationFn() {
            var _this = this;
            var curr = this.datas[this.bufferindex];
            curr.timestamp = Date.now();
            // 防止数据为1的时候被diff算法干掉
                        if ((0, _util.getGlobalData)("__type__") === "weixin") {
                if (this.bufferindex >= this.datas.length - 1) {
                    this.clearData = setTimeout(function() {
                        clearTimeout(_this.clearData);
                        _this.bufferindex = 0;
                        _this.data.arr = [];
                    }, 2e3);
                } else {
                    this.data.arr = this.data.arr.concat([ curr ]);
                    this.bufferindex++;
                }
            } else {
                var originData = this.data.arr;
                if (originData.length > 5) {
                    originData.shift();
                }
                this.data.arr = this.data.arr.concat([ curr ]);
                this.bufferindex++;
                if (this.bufferindex >= this.datas.length) {
                    this.bufferindex = 0;
                }
            }
            this.setData({
                arr: this.data.arr
            });
        },
        /**
     * 动画
     */
        startAnimation: function startAnimation() {
            var _this2 = this;
            this.bufferindex = 0;
            if (!this.datas || !this.datas.length || this.datas.length < 2) {
                return false;
            }
            this.stopDanmu();
            this.timer = setInterval(function() {
                _this2.animationFn();
            }, 1450);
            (0, _util.track)("reply_barrage_expose");
        },
        /**
     * 点击弹幕跳lzl
     * @param {*} e
     */
        clickDanMu: function clickDanMu(e) {
            var pid = e.currentTarget.dataset.pid;
            var from = this.properties.from;
            if (!this.data.needPbCut) {
                wx.navigateTo({
                    url: "/pages/lzl/lzl?pid=" + pid + "&from=" + from + "&isProThread=" + this.data.isProThread
                });
            }
            (0, _util.track)("reply_barrage_click");
        },
        /**
     * 停止弹幕
     */
        stopDanmu: function stopDanmu() {
            if (this.timer) {
                clearInterval(this.timer);
                this.setData({
                    arr: []
                });
            }
        }
    }
});
/**
     * @file 弹幕组件
     */