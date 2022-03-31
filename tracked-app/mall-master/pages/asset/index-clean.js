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
        this.doneShow();
      }
    })
}
function doneShow() {
    const _this = this
    const token = wx.getStorageSync('token')
    if (!token) {
      this.setData({
        wxlogin: false
      })
      return
    }
    WXAPI.userAmount(token).then(function (res) {
      if (res.code == 700) {
        wx.showToast({
          title: '当前账户存在异常',
          icon: 'none'
        })
        return
      }
      if (res.code == 2000) {
        this.setData({
          wxlogin: false
        })
        return
      }
      if (res.code == 0) {
        _this.setData({
          balance: res.data.balance.toFixed(2),
          freeze: res.data.freeze.toFixed(2),
          totleConsumed: res.data.totleConsumed.toFixed(2),
          score: res.data.score
        });
      }
    })
    this.fetchTabData(this.data.activeIndex)
}
function recharge(e) {
    wx.navigateTo({
      url: "/pages/recharge/index"
    })
}
function withdraw(e) {
    wx.navigateTo({
      url: "/pages/withdraw/index"
    })
}
function payDeposit(e) {
    wx.navigateTo({
      url: "/pages/deposit/pay"
    })
}
function tabClick(e) {
    this.setData({
      activeIndex: e.detail.index
    });
    this.fetchTabData(e.detail.index)
}
