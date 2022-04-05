function onLoad(a) {
        this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight,
            url: t.xlsxDomains + a.url
        });
}
function sure() {
        wx.setClipboardData({
            data: this.data.url,
            success: function(t) {
                wx.showToast({
                    title: "链接已复制",
                    icon: "none",
                    duration: 2e3
                }), console.log(t);
            }
        });
}
function back() {
        wx.navigateBack({
            delta: 1
        });
}
