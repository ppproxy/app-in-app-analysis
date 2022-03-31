function onLoad(options) {
    this.data.cardId = options.id
    this.cardMyLogs()
}
function onPullDownRefresh() {
    this.data.page = 1
    this.cardMyLogs()
    wx.stopPullDownRefresh()
}
