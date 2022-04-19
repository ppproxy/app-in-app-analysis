var _util = require("../../util/util.js");

Component({
    properties: {
        itemList: {
            type: Array,
            value: []
        },
        showActionSheet: {
            type: Boolean,
            value: false
        },
        currentKey: {
            type: String,
            value: ""
        }
    },
    data: {
        isIphoneX: false
    },
    ready: function ready() {
        if ((0, _util.getGlobalData)("isIphoneX")) {
            this.setData({
                isIphoneX: true
            });
        }
        this.animation = wx.createAnimation({
            duration: 100
        });
        this.animation.translateY(0).step();
        this.setData({
            animation: this.animation.export()
        });
    },
    methods: {
        clickItem: function clickItem(e) {
            this.triggerEvent("actionSheet", e.currentTarget.dataset.item);
            this.closeMask();
        },
        closeMask: function closeMask() {
            this.triggerEvent("hideActionSheet");
        }
    }
});
/**
     * @file 自定义下拉抽屉组件
     */