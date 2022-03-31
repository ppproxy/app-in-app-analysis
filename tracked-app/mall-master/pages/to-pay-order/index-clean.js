function getDistrictId(obj, aaa) {
    if (!obj) {
      return "";
    }
    if (!aaa) {
      return "";
    }
    return aaa;
}
function addAddress() {
    wx.navigateTo({
      url: "/pages/address-add/index"
    })
}
function selectAddress() {
    wx.navigateTo({
      url: "/pages/select-address/index"
    })
}
function bindChangeCoupon(e) {
    const selIndex = e.detail.value;
    this.setData({
      curCoupon: this.data.coupons[selIndex],
      curCouponShowText: this.data.coupons[selIndex].nameExt
    });
    this.processYunfei()
}
function bindChangeCouponShop(e) {
    const selIndex = e.detail.value;
    const shopIndex = e.currentTarget.dataset.sidx
    const shopList = this.data.shopList
    const curshop = shopList[shopIndex]
    curshop.curCoupon = curshop.coupons[selIndex]
    curshop.curCouponShowText = curshop.coupons[selIndex].nameExt
    shopList.splice(shopIndex, 1, curshop)
    this.setData({
      shopList
    });
    this.processYunfei()
}
