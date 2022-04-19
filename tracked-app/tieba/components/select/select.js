/**
 * @file 助理吊起app功能
 * @author zw
 */
Component({
    properties: {
        selectDatas: {
            type: Array,
            value: [],
            observer: function observer(v) {
                var _this = this;
                v.length && v.forEach(function(item) {
                    if (item.default) {
                        _this.setData({
                            defaultValue: item.value,
                            selfSelectDatas: v
                        });
                    }
                });
            }
        },
        hidenList: {
            type: Boolean,
            value: false,
            observer: function observer(v) {
                if (this.data.selfShowList) {
                    this.setData({
                        selfShowList: false
                    });
                }
            }
        }
    },
    data: {
        defaultValue: "",
        selfShowList: false,
        selfSelectDatas: []
    },
    methods: {
        toggleSpread: function toggleSpread() {
            this.setData({
                selfShowList: !this.data.selfShowList
            });
        },
        close: function close() {
            this.toggleSpread();
        },
        change: function change(e) {
            var item = e.currentTarget.dataset.item;
            if (item.key !== "jumpPage") {
                this.data.selfSelectDatas.forEach(function(v) {
                    if (v.key === item.key) {
                        v.default = 1;
                    } else {
                        v.default = 0;
                    }
                });
                this.setData({
                    defaultValue: item.value,
                    selfSelectDatas: this.data.selfSelectDatas
                });
            }
            this.setData({
                selfShowList: false
            });
            this.triggerEvent("sortBy", item);
        }
    }
});