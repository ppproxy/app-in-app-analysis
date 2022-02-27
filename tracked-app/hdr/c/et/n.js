var i = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../m/zk/za")), t = require("./../../l/wh"), e = require("../../l/w9");

(0, i.default)({
    name: "loading-animation",
    data: {
        isLoadingGif: !1,
        imgUrl: "",
        width: "300rpx",
        height: "300rpx"
    },
    localData: {
        defaultUrl: "https://img.alicdn.com/imgextra/i2/O1CN01zUlk1x1Zrd7yvbODP_!!6000000003248-1-tps-750-1334.gif",
        width: "750rpx",
        height: "1334rpx"
    },
    ready: function() {
        this.init();
    },
    methods: {
        init: function() {
            var i = (0, t.getLoadingGifUrl)(), a = (0, e.getImageUrl)(i);
            i && a ? this.setGifUrlFromGlobalConfig(a) : this.setDefaultGifUrl();
        },
        setGifUrlFromGlobalConfig: function(i) {
            this.setData({
                isLoadingGif: !0,
                imgUrl: i
            });
        },
        setDefaultGifUrl: function() {
            var i = this.localData, t = i.defaultUrl, e = i.width, a = i.height;
            this.setData({
                isLoadingGif: !1,
                imgUrl: t,
                width: e,
                height: a
            });
        }
    }
});