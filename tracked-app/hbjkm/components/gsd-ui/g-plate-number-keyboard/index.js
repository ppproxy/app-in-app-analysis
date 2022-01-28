Component({
    behaviors: [],
    properties: {
        visible: {
            type: Boolean,
            value: !1,
            observer: function() {
                var t = !0;
                this.data.plateNumber.length >= 1 && (t = !1), this.setData({
                    showProvince: t
                });
            }
        },
        showMain: {
            type: Boolean,
            value: !1
        },
        value: {
            type: String,
            value: "",
            observer: function(t) {
                this.setData({
                    plateNumber: t
                });
            }
        }
    },
    data: {
        provinceHeight: 558,
        numberHieght: 466,
        statusBarHeight: 0,
        plateNumber: "",
        provinceList: {
            line1: [ "京", "沪", "鄂", "湘", "川", "渝", "粤", "闽", "晋", "黑" ],
            line2: [ "津", "浙", "豫", "赣", "贵", "青", "琼", "宁", "吉", "蒙" ],
            line3: [ "冀", "苏", "皖", "桂", "云", "陕", "甘", "藏", "新", "辽" ],
            line4: [ "鲁", "澳", "港", "学", "挂", "领", "试", "超", "练", "警" ],
            line5: [ "应急", "民航" ]
        },
        letterNumberList: {
            line1: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ],
            line2: [ "Q", "W", "E", "R", "T", "Y", "U", "O", "P", "L" ],
            line3: [ "A", "S", "D", "F", "G", "H", "J", "K", "N", "M" ],
            line4: [ "Z", "X", "C", "V", "B" ]
        },
        showProvince: !0,
        animationData: {}
    },
    lifetimes: {
        attached: function() {},
        moved: function() {},
        detached: function() {}
    },
    attached: function() {},
    ready: function() {
        var t = this;
        this.setData({
            plateNumber: this.data.value ? this.data.value : ""
        }), wx.getSystemInfo({
            success: function(e) {
                console.log(e.statusBarHeight), t.setData({
                    statusBarHeight: e.statusBarHeight
                });
            },
            failure: function() {}
        });
    },
    pageLifetimes: {
        show: function() {},
        hide: function() {},
        resize: function() {}
    },
    methods: {
        _clickChangePlane: function() {
            this.setData({
                showProvince: !this.data.showProvince
            });
        },
        _closeKeyboard: function(t) {
            this.setData({
                visible: !1
            }), this.triggerEvent("closeKeyBoard", !1);
        },
        _handleResult: function() {
            var t = {
                value: this.data.plateNumber
            };
            this.triggerEvent("change", t);
        },
        _handleClick: function(t) {
            this.data.showProvince && this.setData({
                showProvince: !1
            });
            var e = this.data.plateNumber, a = t.currentTarget.dataset.text;
            e.length < 10 && (this.setData({
                plateNumber: e + a
            }), this._handleResult());
        },
        _handleDelete: function() {
            var t = this.data.plateNumber;
            if ((t = t.substring(0, t.length - 1)).length >= 0) {
                var e = !0;
                t.length >= 1 && (e = !1), this.setData({
                    showProvince: e,
                    plateNumber: t
                }), this._handleResult();
            }
        },
        _preventDefault: function(t) {}
    }
});