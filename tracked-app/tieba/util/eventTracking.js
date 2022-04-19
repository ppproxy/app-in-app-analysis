Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 曝光打点
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @file eventTracking.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author wangchao39
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */ var _util = require("./util");

var _trackTieba = require("./trackTieba");

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

// 页面 tracker
var exposeTracker = null;

var ExposeTrack = function() {
    /**
   * 构造函数
   * @param {Array} trackCtx
   */
    function ExposeTrack(trackCtx) {
        _classCallCheck(this, ExposeTrack);
        // 初始化打点上下文
                this.trackCtx = trackCtx || [];
        // 初始化打点数组 和 map
                this.trackArr = [];
        this.trackMap = {};
        var pages = getCurrentPages();
        this.defaultPage = pages[pages.length - 1].uri;
    }
    /**
   * 单例
   * @param {Array} trackCtx
   * @return {object}
   */    _createClass(ExposeTrack, [ {
        key: "sendTrack",
        /**
     * 发送打点信息
     * @return {void}
     */
        value: function sendTrack() {
            this.trackArr.forEach(function(el) {
                (0, _util.track)(el.trackName, el.trackInfo);
            });
        }
        /**
     * 是否在视口
     * @param {object} rect
     * @return {boolean}
     */    }, {
        key: "checkInViewport",
        value: function checkInViewport(rect) {
            var systemInfo = (0, _util.getGlobalData)("systemInfo") || wx.getStorageSync("systemInfo");
            var viewportHeight = systemInfo.windowHeight;
            return rect.top > -rect.height && rect.top < viewportHeight;
        }
        /**
     * 曝光打点
     * @return {void}
     */    }, {
        key: "exposeTraversal",
        value: function exposeTraversal() {
            var _this = this;
            // 两层遍历，目前没找到更好的办法
                        this.trackCtx.forEach(function(ctx) {
                var selectQuery = ctx ? wx.createSelectorQuery().in(ctx) : wx.createSelectorQuery();
                selectQuery.selectAll(".ad-expose-track").boundingClientRect().exec(function(res) {
                    Array.isArray(res[0]) && res[0].forEach(function(ad) {
                        if (_this.checkInViewport(ad)) {
                            var trackId = ad.dataset.trackId;
                            var trackName = ad.dataset.trackName;
                            var trackInfo = ad.dataset.trackInfo;
                            var trackLocate = ad.dataset.trackLocate;
                            !_this.trackMap[trackId] && _this.trackArr.push({
                                trackName: trackName,
                                trackInfo: trackInfo,
                                trackLocate: trackLocate
                            }) && (_this.trackMap[trackId] = true);
                        }
                    });
                });
            });
        }
        /**
     * 打点的tiebaFE
     * @param {array} locateArr 需要打到tiebaFE的locate数组
     */    }, {
        key: "sendTiebaTrack",
        value: function sendTiebaTrack(locateArr) {
            var _this2 = this;
            this.trackArr.forEach(function(el) {
                if (locateArr.indexOf(el.trackLocate) !== "-1") {
                    (0, _trackTieba.trackTiebaView)({
                        locate: el.trackLocate,
                        page: el.trackInfo.page || _this2.defaultPage
                    });
                }
            });
        }
        /**
     * 发送打点信息 & 清空一些字段
     * @param {array} locateArr 需要打到tiebaFE的locate数组
     */    }, {
        key: "sendExpose",
        value: function sendExpose(locateArr) {
            this.sendTrack();
            locateArr && locateArr.length > 0 && this.sendTiebaTrack(locateArr);
            this.trackArr = [];
            this.trackMap = {};
            exposeTracker = null;
        }
    } ], [ {
        key: "getInstance",
        value: function getInstance(trackCtx) {
            if (!exposeTracker) {
                exposeTracker = new ExposeTrack(trackCtx);
            }
            return exposeTracker;
        }
    } ]);
    return ExposeTrack;
}();

exports.default = ExposeTrack;