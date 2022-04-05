function onLoad(t) {
        this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight
        });
}
function sure() {
        wx.navigateBack({
            delta: 6
        });
}
