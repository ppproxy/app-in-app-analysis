(0, require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../m/zk/za")).default)({
    name: "num-control",
    properties: {
        num: {
            type: Number,
            value: 0
        },
        startNumber: {
            type: Number,
            value: 0
        },
        step: {
            type: Number,
            value: 1
        },
        plusDisabled: {
            type: Boolean,
            value: !1
        },
        minusDisabled: {
            type: Boolean,
            value: !1
        },
        autoWidth: {
            type: Boolean,
            value: !1
        },
        isJustShowNum: {
            type: Boolean,
            value: !1
        },
        onlyShowAdd: {
            type: Boolean,
            value: !1
        },
        isSoldOut: {
            type: Boolean,
            value: !1
        },
        fromDetailPage: {
            type: Boolean,
            value: !1
        },
        dishMenuColumn: {
            type: String,
            value: "1"
        },
        isInDishList: {
            type: Boolean,
            value: !1
        },
        isNumShrink: {
            type: Boolean,
            value: !1
        },
        dishId: {
            type: String,
            value: ""
        }
    },
    data: {
        isNumShrink: !1
    },
    localData: {
        themeIcons: [ "IconNumControlAdd", "IconNumControlMinus" ]
    },
    methods: {
        minusClick: function() {
            var e = this.data, t = e.num, i = e.step, a = e.startNumber, u = e.minusDisabled, n = e.isSoldOut;
            if (!u && !n) {
                var s = t - i, l = i;
                s < a && (s = 0, l = t), this.triggerEvent("handleMinusDish", {
                    type: "minus",
                    num: s,
                    changeNum: l
                });
            }
        },
        comboMinusClick: function() {
            var e = this.data, t = e.num, i = e.step, a = e.startNumber;
            if (!e.minusDisabled) {
                var u = t - i, n = i;
                u < a && (u = 0, n = t), this.triggerEvent("handleMinusCombo", {
                    isComboMinus: !0,
                    num: u,
                    changeNum: n
                });
            }
        },
        addClick: function(e) {
            var t = this.data, i = t.num, a = t.step, u = t.startNumber, n = t.plusDisabled, s = t.isSoldOut, l = t.dishMenuColumn, o = t.dishId;
            "2" === l && this.setData({
                isNumShrink: !1
            }), n || s || this.triggerEvent("handleAddDish", {
                type: "plus",
                num: 0 === i ? i + u : i + a,
                changeNum: 0 === i ? u : a,
                dishId: o,
                x: e.detail.x || e.detail.clientX,
                y: e.detail.y || e.detail.clientY
            });
        },
        handleShrinkClick: function() {
            this.setData({
                isNumShrink: !1
            });
        }
    }
});