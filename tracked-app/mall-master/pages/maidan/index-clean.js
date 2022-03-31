function onLoad(options) {
    this.payBillDiscounts()
    this.setData({
      balance_pay_pwd: wx.getStorageSync('balance_pay_pwd')
    })
}
