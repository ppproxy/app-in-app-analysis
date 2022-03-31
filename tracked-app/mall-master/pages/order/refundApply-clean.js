function onLoad(e) {
    this.setData({
      orderId: e.id,
      amount: e.amount
    });
}
function reasonChange(e) {
    this.setData({
      reasonIndex: e.detail.value
    })
}
function previewImage(e) {
    const that = this;
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: that.data.files // 需要预览的图片http链接列表
    })
}
