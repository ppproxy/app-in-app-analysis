function onLoad(options) {
}
function onShow() {
    AUTH.checkHasLogined().then(isLogined => {
      this.setData({
        wxlogin: isLogined
      })
      if (isLogined) {
        this.goodsFavList()
      }
    })
}
