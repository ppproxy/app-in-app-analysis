function onLoad(options) {
    this.setData({
      version: CONFIG.version
    })
}
function onShow() {
    this.getUserApiInfo()
}
