(0, require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../m/zk/za")).default)({
    name: "菜单元-剩余售卖量",
    properties: {
        surplusLabel: {
            type: String,
            value: ""
        },
        dishMenuColumn: {
            type: String,
            value: ""
        },
        dish: {
            type: Object,
            value: {}
        },
        containerStyle: {
            type: String,
            value: ""
        },
        txtStyle: {
            type: String,
            value: ""
        },
        clearStatus: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        isShowStartNumber: !1,
        startNumber: 1
    },
    ready: function() {
        var t = this.data.dish, e = void 0 === t ? {} : t, r = "COMBO" === e.dishType, a = 1;
        e.cookbookDishSkuList && e.cookbookDishSkuList.length > 0 && (a = r ? e.cookbookDishSkuList[0].comboStartNumber : e.cookbookDishSkuList[0].startNumber);
        var i = a > 1;
        this.setData({
            isShowStartNumber: i,
            startNumber: a
        });
    },
    methods: {}
});