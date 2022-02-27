var e = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../m/zk/za")), t = require("../../../../l/w9");

(0, e.default)({
    name: "recommend-dish-item-v2",
    data: {
        imageUrl: ""
    },
    properties: {
        dish: {
            type: Object,
            value: {}
        },
        memberFlag: {
            type: Boolean,
            value: !1
        },
        aspectWidth: {
            type: Number,
            value: 0
        },
        flexDirection: {
            type: String,
            value: ""
        },
        showContentGap: {
            type: Boolean,
            value: !0
        },
        showCrosssPrice: {
            type: Boolean,
            value: !0
        },
        addBtnType: {
            type: String,
            value: ""
        }
    },
    localData: {
        themeIcons: [ "IconNumControlAdd" ]
    },
    ready: function() {
        var e = this.data.dish, a = (0, t.getImageUrl)(e.skuImgUrl);
        this.setData({
            imageUrl: a
        });
    },
    methods: {}
});