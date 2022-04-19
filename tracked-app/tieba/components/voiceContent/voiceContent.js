var _util = require("../../util/util");

Component({
    properties: {
        duration: {
            type: Number,
            value: 0
        },
        md5: {
            type: String,
            value: ""
        },
        isLzl: {
            type: Boolean,
            value: false
        },
        disablePlay: {
            type: Boolean,
            value: false
        }
    },
    data: {
        duration: 0,
        // 语音时间
        isLzl: false,
        // 是否是楼中楼的语音组件
        md5: "",
        // md5
        duringTime: 0,
        audioStatus: "stop",
        // 播放状态
        voiceLen: "124",
        disablePlay: false
    },
    attached: function attached() {
        var duration = Math.floor(+this.data.duration / 1e3);
        // 秒数
                var duringFormat = "";
        var len = "124";
        if (duration > 60) {
            // 大于1min
            var minutes = Math.floor(duration / 60);
            var seconds = duration % 60;
            duringFormat = minutes + "'" + seconds + '"';
            len = "252";
        } else {
            duringFormat = duration + '"';
        }
        if (duration > 30 && duration <= 60) {
            len = "190";
        }
        if (this.data.isLzl) {
            if (duration < 30) {
                len = "90";
            } else {
                len = "110";
            }
        }
        this.setData({
            duringTime: duringFormat,
            duration: duration,
            voiceLen: len
        });
    },
    methods: {
        /**
     * 点击播放语音
     * @param  {Object} e event
     */
        play: function play(e) {
            if (this.data.disablePlay || this.data.audioStatus === "loading") {
                return;
            }
            var _e$currentTarget$data = e.currentTarget.dataset, md5 = _e$currentTarget$data.md5, during = _e$currentTarget$data.during;
            var cutMd5 = (0, _util.getGlobalData)("curMd5");
            var curAudioCtx = (0, _util.getGlobalData)("curAudioCtx");
            if (cutMd5 && cutMd5 !== md5) {
                curAudioCtx.stop();
            }
            if (this.audioContext && !this.audioContext.paused) {
                this.audioContext.stop();
                if (md5 !== cutMd5) {
                    this.nextAudio = {
                        md5: md5,
                        during: during
                    };
                }
            } else {
                // 没有stop 直接播放下一个语音
                this.playVoice(md5, during);
            }
        },
        /**
     * 播放语音
     * @param  {string} md5 语音md5
     * @param  {string} during 语音during
     */
        playVoice: function playVoice(md5, during) {
            var _this = this;
            var url = "https://tieba.baidu.com/mo/q/voice?md5=";
            var innerAudioContext = this.audioContext = wx.createInnerAudioContext();
            innerAudioContext.src = url + md5;
            innerAudioContext.autoplay = true;
            this.setData({
                audioStatus: "loading"
            });
            innerAudioContext.onPlay(function(res) {
                _this.setData({
                    audioStatus: "playing"
                });
                _this.countDown();
            });
            innerAudioContext.onStop(function(res) {
                _this.stopCountDown();
                _this.setData({
                    audioStatus: "stop"
                });
                if (_this.nextAudio) {
                    _this.playVoice(_this.nextAudio.md5, _this.nextAudio.during);
                }
                _this.nextAudio = null;
            });
            innerAudioContext.onWaiting(function(res) {
                _this.stopCountDown();
                _this.setData({
                    audioStatus: "loading"
                });
            });
            innerAudioContext.onEnded(function(res) {
                _this.stopCountDown();
                _this.setData({
                    audioStatus: "stop"
                });
            });
            innerAudioContext.onError(function(res) {
                _this.stopCountDown();
                _this.setData({
                    audioStatus: "stop"
                });
            });
            (0, _util.setGlobalData)("curMd5", md5);
            (0, _util.setGlobalData)("curAudioCtx", innerAudioContext);
        },
        /**
     * 语音播放倒计时
     */
        countDown: function countDown() {
            var _this2 = this;
            this.stopCountDown();
            this.interval = setInterval(function() {
                var during = _this2.data.duration;
                if (during <= 0) {
                    _this2.stopCountDown();
                } else {
                    _this2.setData({
                        duration: during - 1
                    });
                }
            }, 1e3);
        },
        /**
     * 停止倒计时
     */
        stopCountDown: function stopCountDown() {
            this.interval && clearInterval(this.interval);
            this.interval = null;
        }
    }
});
/**
     * @file 语音组件
     * @author wz
     */