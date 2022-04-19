var _util = require("../../util/util");

var _url = require("../../util/url");

/**
 * @file 回帖框组件
 * @author zw
 */ Component({
    properties: {
        parentPlaceHolder: {
            type: String,
            value: "",
            observer: function observer(v) {
                this.setData({
                    placeholder: v || (0, _util.getRandomTxt)()
                });
            }
        },
        isProThread: {
            type: Boolean,
            value: false
        },
        isFocus: {
            type: Boolean,
            value: false,
            observer: function observer(v) {// console.log('change', v)
            }
        },
        showDanmu: {
            type: Boolean,
            value: false
        },
        isOpenDanmu: {
            type: Boolean,
            value: false
        },
        showCollect: {
            type: Boolean,
            value: false
        },
        isCollect: {
            type: Boolean,
            value: false
        },
        showComment: {
            type: Boolean,
            value: false
        },
        commentNum: {
            type: String,
            value: false
        },
        isShare: {
            type: Boolean,
            value: false
        },
        isOpenApp: {
            type: Boolean,
            value: false
        }
    },
    data: {
        IMG_CDN: _url.IMG_CDN,
        placeholderColor: "#999",
        keyBoardHeight: 0,
        autoHeight: false,
        inputData: "",
        isIPX: (0, _util.getGlobalData)("isIphoneX"),
        isShowBtn: false,
        isBaidu: (0, _util.getGlobalData)("isBaidu")
    },
    attached: function attached() {
        if (!this.data.parentPlaceHolder) {
            this.setData({
                placeholder: (0, _util.getRandomTxt)()
            });
        }
        this.stashValue = "";
    },
    methods: {
        focus: function focus(e) {
            // if(!this.data.keyBoardHeight) {
            //     this.data.keyBoardHeight = e.detail.height;
            // }
            if (this.stashValue) {
                this.setData({
                    inputData: this.stashValue
                });
            }
            this.setData({
                // keyBoardHeight: this.data.keyBoardHeight,
                autoHeight: true,
                isShowBtn: true
            });
            this.triggerEvent("focus");
        },
        keyup: function keyup(e) {
            var data = e.detail.value;
            this.stashValue = data;
            this.setData({
                inputData: data
            });
        },
        blur: function blur(e) {
            this.stashValue = this.data.inputData;
            // clearTimeout(this.timer );
                        this.setData({
                autoHeight: false,
                inputData: "",
                // keyBoardHeight: 0,
                isShowBtn: false
            });
            this.triggerEvent("blur");
        },
        forBidden: function forBidden() {
            wx.showModal({
                title: "",
                content: "小程序暂不支持回复核心区，请下载贴吧App体验完整功能"
            });
        },
        btncommit: function btncommit() {
            (0, _util.track)("pb-reply-sucess-button");
            this.commit();
        },
        commit: function commit() {
            var val = this.data.inputData;
            if (val.trim() === "") {
                return;
            }
            this.stashValue = "";
            this.setData({
                inputData: "",
                placeholder: (0, _util.getRandomTxt)()
            });
            this.triggerEvent("submit", {
                inputVal: val
            });
        },
        /**
     * 仅用于登录成功后的回调
     * @return void
     */
        loginSuccessCommit: function loginSuccessCommit() {
            this.triggerEvent("submit", {
                inputVal: this.stashValue
            });
            // 回复成功后，删除输入框内容，并且随机取 placeholder
                        this.setData({
                inputData: "",
                placeholder: (0, _util.getRandomTxt)()
            });
        },
        /**
     * 点击评论
     */
        toWhere: function toWhere() {
            (0, _util.track)("pb_reply_icon");
            this.triggerEvent("toWhere");
        },
        collect: function collect(e) {
            this.triggerEvent("collect", e.target.dataset);
        },
        share: function share() {
            this.triggerEvent("share");
        },
        toggleDanmu: function toggleDanmu(e) {
            this.triggerEvent("toggleDanmu", e.target.dataset);
        }
    }
});