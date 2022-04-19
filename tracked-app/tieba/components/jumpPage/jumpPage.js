/**
 * @file 跳页组件
 */
Component({
    properties: {
        currentPage: {
            type: Number,
            value: 1
        },
        totalPage: {
            type: Number,
            value: 1
        },
        showJumpPage: {
            type: Boolean,
            value: false
        },
        isVideo: {
            type: Boolean,
            value: false
        },
        jumpPageNum: {
            type: Number,
            value: 1
        }
    },
    data: {},
    ready: function ready() {},
    methods: {
        empty: function empty() {// kong
        },
        change: function change(e) {
            this.triggerEvent("change", e.detail.value);
        },
        sure: function sure(e) {
            this.triggerEvent("sure", e);
        },
        closeDialog: function closeDialog(e) {
            this.triggerEvent("closeJumpPage", e);
        }
    }
});