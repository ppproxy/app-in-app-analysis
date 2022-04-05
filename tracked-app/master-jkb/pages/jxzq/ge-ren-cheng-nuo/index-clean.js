function onLoad(e) {
        this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight
        });
}
function arge() {
        wx.showLoading({
            title: "努力加载中",
            mask: !0
        }), t.checkAuth("/pages/jxzq/cha-xun-jie-guo/index") && (wx.showLoading({
            title: "努力加载中",
            mask: !0
        }), wx.navigateTo({
            url: "/pages/jxzq/cha-xun-jie-guo/index"
        }), wx.hideLoading());
}
function cancle() {
        wx.navigateBack({
            delta: 1
        });
}
