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
function back() {
        wx.navigateBack({
            delta: 1
        });
}
