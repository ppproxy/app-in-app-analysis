var e = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../m/zk/za")), t = require("../../../l/wh"), a = require("../../../pages/member/common/util/url");

(0, e.default)({
    name: "point-goods",
    data: {
        themeColor: (0, t.getThemeColor)(),
        brandLogo: "",
        brandName: "",
        btnStyle: "font-size: 30rpx;font-weight: bold;color: #fff;height: 88rpx;line-height: 88rpx;width: 670rpx;border-radius: 44rpx;margin: 80rpx auto 0;position: relative;border: none;",
        visible: !1
    },
    localData: {
        pointMallItem: {}
    },
    properties: {
        goodsList: {
            type: Array,
            value: []
        },
        hideButton: {
            type: Boolean,
            value: !1
        }
    },
    ready: function() {
        var e = (0, t.getBrandInfo)() || {}, a = e.brandName, n = e.brandLogo;
        this.setData({
            brandName: a,
            brandLogo: n || "https://gw.alicdn.com/tfs/TB1NJ88QxD1gK0jSZFsXXbldVXa-320-320.png"
        });
    },
    methods: {
        handlePointMallTap: function(e) {
            this.localData.pointMallItem = e.currentTarget.dataset.item, (0, t.getMemberFlag)() ? this.handleMemberJoinSuccess() : this.setData({
                visible: !0
            });
        },
        handleMemberJoinSuccess: function() {
            this.handleCancel(), this.triggerEvent("handleGoodsPointTap", {
                item: this.localData.pointMallItem
            });
        },
        handleKbGoodsTap: function(e) {
            this.triggerEvent("handleGoodsPointTap", {
                item: e.currentTarget.dataset.item
            });
        },
        handleCancel: function() {
            this.setData({
                visible: !1
            });
        },
        forbidMove: function() {
            return !1;
        },
        openUrl: function() {
            var e = "https://render.koubei.com/p/kbmodmng/UDYLNn0bK_prod/2O1QHGTUP.html";
            "wx" === this.data.miniType ? this.$root.$navigate("/pages/webview/index?pageUrl=" + encodeURIComponent(e)) : (0, 
            a.openUrl)({
                url: e
            });
        }
    }
});