function onLoad(options) {
    this.setData({
      name: options.name,
      cid1: options.cid1,
      cid2: options.cid2
    })
    this.search()
}
function onReady() {

}
function onShow() {

}
function onHide() {

}
function onUnload() {

}
function onPullDownRefresh() {

}
function onReachBottom() {
    this.setData({
      page: this.data.page + 1
    });
    this.search()
}
