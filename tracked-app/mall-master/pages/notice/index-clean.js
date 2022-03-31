function onLoad(options) {
    WXAPI.noticeList().then(res => {
      this.setData({
        noticeList: res.data.dataList
      })
    })
}
function onShow() {

}
