function onLoad(){
    const _this = this
    wx.setNavigationBarTitle({
      title: wx.getStorageSync('mallName')
    })
    let shopMod = wx.getStorageSync('shopMod')
    if (!shopMod) {
      shopMod = 0
    }
    const app_show_pic_version = wx.getStorageSync('app_show_pic_version')
    if (app_show_pic_version && app_show_pic_version == CONFIG.version) {
      if (shopMod==1) {
        wx.redirectTo({
          url: '/pages/shop/select',
        });
      } else {
        wx.switchTab({
          url: '/pages/index/index',
        });
      }
    } else {
      // 展示启动页
      WXAPI.banners({
        type: 'app'
      }).then(function (res) {
        if (res.code == 700) {
          if (shopMod==1) {
            wx.redirectTo({
              url: '/pages/shop/select',
            });
          } else {
            wx.switchTab({
              url: '/pages/index/index',
            });
          }
        } else {
          _this.setData({
            banners: res.data,
            swiperMaxNumber: res.data.length
          });
        }
      }).catch(function (e) {
        if (shopMod==1) {
          wx.redirectTo({
            url: '/pages/shop/select',
          });
        } else {
          wx.switchTab({
            url: '/pages/index/index',
          });
        }
      })
    }
}
function onShow(){
    
}
function onLoad(){
    const _this = this
    wx.setNavigationBarTitle({
      title: wx.getStorageSync('mallName')
    })
    let shopMod = wx.getStorageSync('shopMod')
    if (!shopMod) {
      shopMod = 0
    }
    const app_show_pic_version = wx.getStorageSync('app_show_pic_version')
    if (app_show_pic_version && app_show_pic_version == CONFIG.version) {
      if (shopMod==1) {
        wx.redirectTo({
          url: '/pages/shop/select',
        });
      } else {
        wx.switchTab({
          url: '/pages/index/index',
        });
      }
    } else {
      // 展示启动页
      WXAPI.banners({
        type: 'app'
      }).then(function (res) {
        if (res.code == 700) {
          if (shopMod==1) {
            wx.redirectTo({
              url: '/pages/shop/select',
            });
          } else {
            wx.switchTab({
              url: '/pages/index/index',
            });
          }
        } else {
          _this.setData({
            banners: res.data,
            swiperMaxNumber: res.data.length
          });
        }
      }).catch(function (e) {
        if (shopMod==1) {
          wx.redirectTo({
            url: '/pages/shop/select',
          });
        } else {
          wx.switchTab({
            url: '/pages/index/index',
          });
        }
      })
    }
}
function onShow(){
    
}
function onLoad(){
    const _this = this
    wx.setNavigationBarTitle({
      title: wx.getStorageSync('mallName')
    })
    let shopMod = wx.getStorageSync('shopMod')
    if (!shopMod) {
      shopMod = 0
    }
    const app_show_pic_version = wx.getStorageSync('app_show_pic_version')
    if (app_show_pic_version && app_show_pic_version == CONFIG.version) {
      if (shopMod==1) {
        wx.redirectTo({
          url: '/pages/shop/select',
        });
      } else {
        wx.switchTab({
          url: '/pages/index/index',
        });
      }
    } else {
      // 展示启动页
      WXAPI.banners({
        type: 'app'
      }).then(function (res) {
        if (res.code == 700) {
          if (shopMod==1) {
            wx.redirectTo({
              url: '/pages/shop/select',
            });
          } else {
            wx.switchTab({
              url: '/pages/index/index',
            });
          }
        } else {
          _this.setData({
            banners: res.data,
            swiperMaxNumber: res.data.length
          });
        }
      }).catch(function (e) {
        if (shopMod==1) {
          wx.redirectTo({
            url: '/pages/shop/select',
          });
        } else {
          wx.switchTab({
            url: '/pages/index/index',
          });
        }
      })
    }
}
function onShow(){
    
}
function swiperchange(e) {
    //console.log(e.detail.current)
    this.setData({
      swiperCurrent: e.detail.current
    })
}
function goToIndex(e) {
    let shopMod = wx.getStorageSync('shopMod')
    if (!shopMod) {
      shopMod = 0
    }
    if (app.globalData.isConnected) {
      wx.setStorage({
        key: 'app_show_pic_version',
        data: CONFIG.version
      })
      if (shopMod == 1) {
        wx.redirectTo({
          url: '/pages/shop/select',
        });
      } else {
        wx.switchTab({
          url: '/pages/index/index',
        });
      }
    } else {
      wx.showToast({
        title: '当前无网络',
        icon: 'none',
      })
    }
}
