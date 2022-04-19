var _util = require("../../util/util");

var _url = require("../../util/url");

/**
 * @file pb自动播报钻
 * @author zw
 */ Component({
    properties: {
        speakData: {
            type: Object,
            value: function value() {
                return {};
            }
        },
        title: {
            type: String,
            value: ""
        },
        portrait: {
            type: String,
            value: ""
        },
        thumbnail: {
            type: String,
            value: ""
        }
    },
    data: {
        showSpeak: false,
        IMG_CDN: _url.IMG_CDN
    },
    ready: function ready() {
        if (wx.getStreamTTSManager) {
            var streamTTSManager = wx.getStreamTTSManager();
            this.streamTTSManager = streamTTSManager;
            this.speakFormatData = this.parseData();
            if (this.speakFormatData && this.speakFormatData.length || this.data.title) {
                this.setData({
                    showSpeak: true
                });
            }
        }
    },
    // detached() {
    //     if(this.streamTTSManager) {
    //         this.streamTTSManager.stop();
    //     }
    // },
    methods: {
        parseData: function parseData() {
            if (this.data.speakData && this.data.speakData.length) {
                var datas = this.data.speakData;
                var paragraph = 0;
                var result = [];
                datas.forEach(function(_ref) {
                    var text = _ref.text, type = _ref.type;
                    var notTextTypes = [ 2, 3, 10, 20, 21 ];
                    if (!notTextTypes.includes(+type)) {
                        if (text && text.match("<br/>")) {
                            var inner = text.split("<br/>");
                            inner.forEach(function(inneritem) {
                                if (inneritem) {
                                    result.push({
                                        data: inneritem,
                                        type: "text",
                                        index: paragraph++
                                    });
                                }
                            });
                        } else {
                            result.push({
                                data: text,
                                type: "text",
                                index: paragraph++
                            });
                        }
                    }
                });
                return result;
            }
        },
        startSpeak: function startSpeak() {
            var _this = this;
            var data = this.speakFormatData;
            // 为了避免在历史播放记录中title为空，所以没有title的话，正文充当title。正文部分用‘。’占位。
                        if (this.streamTTSManager && (data || this.data.title)) {
                var dataLen = 0;
                var datastr = "";
                if (data) {
                    dataLen = function() {
                        return data.reduce(function(prev, curr) {
                            return prev + curr.data.length;
                        }, 0);
                    }();
                    datastr = function() {
                        return data.reduce(function(prev, curr) {
                            return prev + curr.data;
                        }, "");
                    }();
                }
                var content = function() {
                    // 有正文 无title ，正文=‘。’ title=正文 / 无正文 有title  正文=“。” title=title
                    if (data && data.length && !_this.data.title || (!data || !data.length) && _this.data.title) {
                        return [ {
                            data: "。",
                            type: "text",
                            index: 0
                        } ];
                    }
                    // 有正文 有title 正文=正文 title=title
                                        if (data && data.length && _this.data.title) {
                        return data;
                    }
                }();
                var speakData = {
                    title: this.data.title || datastr,
                    context: {
                        paragraphCount: content.length,
                        letterCount: dataLen,
                        imageUrl: this.data.thumbnail || "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564571269672&di=4f07942b01e2d227fa0be5e61c390c8f&imgtype=0&src=http%3A%2F%2Fnews.dahuawang.com%2Ftianxia%2Fpic%2F201907%2F31%2F81db1bd0-13ee-491c-90de-f7a89d2e0f17.jpg",
                        iconImageUrl: this.data.portrait || "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564571324866&di=699d3606e567e52f907865924ed8bcfa&imgtype=0&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2018-11-30%2F022643954.jpg"
                    },
                    content: content
                };
                this.streamTTSManager.playStream(speakData);
            }
            (0, _util.track)("tts_click", {});
        }
    }
});