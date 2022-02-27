(0, require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../m/zk/za")).default)({
    name: "custom-group-dish-item",
    properties: {
        dishListData: {
            type: Array,
            value: []
        },
        showRequireTag: {
            type: Boolean,
            value: !0
        },
        templateType: {
            type: String,
            value: "normal"
        }
    },
    data: {
        dishList: []
    },
    observers: {
        dishListData: function() {
            this._init();
        }
    },
    ready: function() {},
    methods: {
        _init: function() {
            var t = this.data.dishListData.map(function(t) {
                var e = t.dishAddItemList, i = void 0 === e ? [] : e, a = t.dishSkuName, s = void 0 === a ? "" : a, d = t.multiSpecFlag, n = void 0 !== d && d, o = i.map(function(t) {
                    return t.additionalItemFee && 0 !== t.additionalItemFee ? "".concat(t.additionalItemName, "(+").concat(t.additionalItemFee / 100, "元)") : t.additionalItemName;
                });
                return s && n && o.unshift(s), Object.assign({}, t, {
                    dishAddItemListFormat: 0 !== o.length ? o.join(" | ") : ""
                });
            });
            this.setData({
                dishList: t
            });
        }
    }
});