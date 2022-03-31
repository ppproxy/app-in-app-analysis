function onLoad(options) {

}
function onReady() {

}
function onShow() {
    AUTH.checkHasLogined().then(isLogined => {
      this.setData({
        wxlogin: isLogined
      })
      if (isLogined) {
        this.initData()
      }
    })
}
