var t = getApp();

Component({
    properties: {
        actionSheetData: {
            type: Array,
            value: []
        },
        show: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        windowWidth: t.globalData.windowWidth
    },
    methods: {
        cancelAction: function() {
            this.setData({
                show: !1
            });
        },
        buttonAction: function(t) {
            var e = t.currentTarget.dataset;
            e.openType || this.triggerEvent("sheetAction", e), this.cancelAction();
        }
    }
});