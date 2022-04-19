/**
 * @file dialog组件
 */
Component({
    properties: {
        title: {
            type: String,
            value: "删贴原因"
        },
        subtitle: {
            type: String,
            value: "删贴原因将会以推送形式在贴吧内发送给吧友"
        },
        showDialog: {
            type: Boolean,
            value: false
        },
        isVideo: {
            type: Boolean,
            value: false
        }
    },
    data: {},
    ready: function ready() {},
    methods: {
        empty: function empty() {// kong
        },
        sure: function sure(e) {
            this.triggerEvent("sure", e);
            this.closeDialog();
        },
        closeDialog: function closeDialog(e) {
            this.triggerEvent("closeDialog", e);
        }
    }
});