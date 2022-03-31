function onLoad(options) {

}
function onReady() {

}
function onShow() {
    wx.getLocation({
      type: 'wgs84', //wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: (res) => {
        this.data.latitude = res.latitude
        this.data.longitude = res.longitude
        this.fetchShops(res.latitude, res.longitude, '')
      },
      fail(e){
        console.error(e)
        AUTH.checkAndAuthorize('scope.userLocation')
      }
    })    
}
function onHide() {

}
function onUnload() {

}
function onPullDownRefresh() {

}
function onReachBottom() {

}
