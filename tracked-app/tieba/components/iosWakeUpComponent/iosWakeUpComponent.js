var _trackTieba = require("../../util/trackTieba");

Component({
    properties: {
        isCustomize: {
            type: Boolean,
            value: false
        },
        wakeupConfig: {
            type: Object,
            value: {}
        },
        page: {
            type: String,
            value: ""
        }
    },
    data: {
        showDialog: false
    },
    methods: {
        showLaunch: function showLaunch() {
            this.setData({
                showDialog: true
            });
        },
        confirm: function confirm() {
            this.triggerEvent("confirm");
            (0, _trackTieba.trackTiebaClick)({
                page: "pages/pb/pb",
                locate: "commentcuts_sb",
                qd: "1025493t"
            });
            this.setData({
                showDialog: false
            });
        },
        cancel: function cancel() {
            this.triggerEvent("cancel");
            (0, _trackTieba.trackTiebaClick)({
                page: "pages/pb/pb",
                locate: "commentcutf_sb",
                qd: "1025493t"
            });
            this.setData({
                showDialog: false
            });
        },
        launchTieBaAppError: function launchTieBaAppError() {
            this.triggerEvent("launchAppError");
            this.setData({
                showDialog: false
            });
        },
        maskClick: function maskClick() {
            // 阻塞父级点击事件
            return;
        }
    }
});
/**
     * @file iOS 调起封装组件，支持调起时弹窗，用户可以选择确认或者取消
     * @author gaoya11
     */