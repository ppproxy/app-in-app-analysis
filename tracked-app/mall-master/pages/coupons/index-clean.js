function onLoad(e) {

}
function onReady() {

}
function onShow() {
    if (this.data.activeIndex == 0) {
      this.sysCoupons()
    }
    AUTH.checkHasLogined().then(isLogined => {
      this.setData({
        isLogined
      })
      if (isLogined) {
        if (this.data.activeIndex == 1) {
          this.getMyCoupons()
        }
        if (this.data.activeIndex == 2) {
          this.invalidCoupons()
        }
      }
    })
}
function onReachBottom() {
    
}
function tabClick(e) {
    this.setData({
      activeIndex: e.detail.index
    });
    if (this.data.activeIndex == 0) {
      this.sysCoupons()
    }
    if (this.data.activeIndex == 1) {
      this.getMyCoupons()
    }
    if (this.data.activeIndex == 2) {
      this.invalidCoupons()
    }
}
function getCounpon(e) {
    const that = this
    if (e.currentTarget.dataset.pwd) {
      this.setData({
        pwdCounponId: e.currentTarget.dataset.id,
        showPwdPop: true
      })
      return
    } else {
      if (!e.kl) {
        this.data.couponPwd = ''
      }
    }
    this.setData({
      showPwdPop: false
    })
    WXAPI.fetchCoupons({
      id: e.currentTarget.dataset.id,
      token: wx.getStorageSync('token'),
      pwd: this.data.couponPwd
    }).then(function (res) {
      if (res.code == 20001 || res.code == 20002) {
        wx.showModal({
          title: '错误',
          content: '来晚了',
          showCancel: false
        })
        return;
      }
      if (res.code == 20003) {
        wx.showModal({
          title: '错误',
          content: '你领过了，别贪心哦~',
          showCancel: false
        })
        return;
      }
      if (res.code == 30001) {
        wx.showModal({
          title: '错误',
          content: '您的积分不足',
          showCancel: false
        })
        return;
      }
      if (res.code == 20004) {
        wx.showModal({
          title: '错误',
          content: '已过期~',
          showCancel: false
        })
        return;
      }
      if (res.code == 0) {
        wx.showToast({
          title: '领取成功',
          icon: 'success'
        })
      } else {
        wx.showModal({
          title: '错误',
          content: res.msg,
          showCancel: false
        })
      }
    })
}
function getMyCoupons() {
    var _this = this;
    wx.showLoading({
      title: '',
    })
    WXAPI.myCoupons({
      token: wx.getStorageSync('token'),
      status: 0
    }).then(function (res) {
      wx.hideLoading({
        success: (res) => {},
      })
      if (res.code == 0) {
        res.data.forEach(ele => {
          if (ele.dateEnd) {
            ele.dateEnd = ele.dateEnd.split(" ")[0]
          }
        })
        _this.setData({
          coupons: res.data
        })
      } else {
        _this.setData({
          coupons: null
        })
      }
    })
}
function invalidCoupons() {
    var _this = this;
    wx.showLoading({
      title: '',
    })
    WXAPI.myCoupons({
      token: wx.getStorageSync('token'),
      status: '1,2,3'
    }).then(function (res) {
      wx.hideLoading({
        success: (res) => {},
      })
      if (res.code == 0) {
        _this.setData({
          coupons: res.data
        })
      } else {
        _this.setData({
          coupons: null
        })
      }
    })
}
function toIndexPage() {
    wx.switchTab({
      url: "/pages/index/index"
    });
}
