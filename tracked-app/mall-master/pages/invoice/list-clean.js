function onLoad(options) {

}
function onShow() {
    const _this = this
    AUTH.checkHasLogined().then(isLogined => {
      if (isLogined) {
        WXAPI.invoiceList({
          token: wx.getStorageSync('token')
        }).then(res => {
          if (res.code == 0) {
            _this.setData({
              invoiceList: res.data.result
            })
          } else {
            _this.setData({
              invoiceList: []
            })
          }
        })
      } else {
        wx.showModal({
          title: '提示',
          content: '本次操作需要您的登录授权',
          cancelText: '暂不登录',
          confirmText: '前往登录',
          success(res) {
            if (res.confirm) {
              wx.switchTab({
                url: "/pages/my/index"
              })
            } else {
              wx.navigateBack()
            }
          }
        })
      }
    })
}
function success(res) {
            console.log('打开文档成功')
}
