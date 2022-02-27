var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../@babel/runtime/helpers/objectSpread2"), o = e(require("../../m/zk/za")), a = {
    visible: !1,
    title: "温馨提示",
    bodyText: "确定退出吗？",
    cancelText: "取消",
    showCancel: !1,
    confirmText: "确定",
    bodyAlignLeft: !1,
    titleList: !1,
    bodyList: !1,
    maskClosable: !1,
    showClose: !1,
    duration: 450,
    zIndex: 100001,
    background: "white",
    width: "600rpx",
    height: "auto",
    closeButtonType: "",
    containerStyle: "",
    bodyStyle: "",
    footerStyle: "",
    headerImg: ""
};

(0, o.default)({
    name: "custom-show-modal",
    options: {
        styleIsolation: "apply-shared",
        multipleSlots: !0
    },
    data: a,
    properties: {
        modalType: {
            type: String,
            value: "base"
        },
        useHeaderSlot: {
            type: Boolean,
            value: !1
        },
        useBodySlot: {
            type: Boolean,
            value: !1
        },
        useFooterSlot: {
            type: Boolean,
            value: !1
        },
        useFullSlot: {
            type: Boolean,
            value: !1
        },
        useBottomSlot: {
            type: Boolean,
            value: !1
        },
        disableScroll: {
            type: Boolean,
            value: !0
        },
        controlVisible: {
            type: Boolean,
            value: void 0
        }
    },
    localData: {
        isConfirm: !1,
        ok: null,
        cancel: null
    },
    observers: {
        controlVisible: function(e) {
            !0 !== e && !1 !== e || this.setData({
                visible: e
            });
        }
    },
    methods: {
        _initDefaultValueWithModalType: function() {
            var e = a;
            switch (this.data.modalType) {
              case "picture":
                e = t(t({}, e), {}, {
                    containerStyle: "max-height: 860rpx;",
                    closeButtonType: "bottom"
                });
                break;

              case "base":
              case "bottom":
                e = t(t({}, e), {}, {
                    closeButtonType: "normal"
                });
            }
            return e;
        },
        show: function(e) {
            var t = this._initDefaultValueWithModalType();
            this._initMethods(e);
            var o = e || {}, a = o.title, l = void 0 === a ? "" : a, i = o.bodyText, n = l instanceof Array, s = (void 0 === i ? "" : i) instanceof Array;
            e && e.zIndex && e.zIndex >= 999999 && console.error("注意，自定义弹窗层级超出999999后会遮挡toast或loading组件，请调整");
            var r = Object.assign({}, t, e, {
                visible: !0,
                titleList: n,
                bodyList: s
            });
            this.setData(r);
        },
        close: function() {
            this.handleCancel();
        },
        confirm: function(e) {
            if (!e) throw new Error("confirm method must has options!");
            this.show(e);
        },
        _hide: function() {
            this.setData({
                visible: !1
            });
        },
        _initMethods: function(e) {
            var t = e || {}, o = t.ok, a = t.cancel;
            this.localData.ok = o, this.localData.cancel = a;
        },
        _resetMethods: function() {
            this.localData = {
                ok: null,
                cancel: null
            };
        },
        handleOk: function() {
            this.localData.ok && (this.localData.ok(), this._resetMethods()), this._hide();
        },
        handleCancel: function() {
            this.localData.cancel && (this.localData.cancel(), this._resetMethods()), this._hide();
        },
        handleClickMask: function() {
            this.data.maskClosable && this.handleCancel();
        },
        noop: function() {
            return null;
        },
        forbidMove: function() {
            return null;
        }
    }
});