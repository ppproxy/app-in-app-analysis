function goShopCar() {
    wx.reLaunch({
      url: "/pages/shop-cart/index"
    });
}
function toAddShopCar() {
    this.setData({
      shopType: "addShopCar"
    })
    this.bindGuiGeTap();
}
function tobuy() {
    this.setData({
      shopType: "tobuy"
    });
    this.bindGuiGeTap();
}
function toPingtuan(e) {
    let pingtuanopenid = 0
    if (e.currentTarget.dataset.pingtuanopenid) {
      pingtuanopenid = e.currentTarget.dataset.pingtuanopenid
    }
    this.setData({
      shopType: "toPingtuan",
      selectSizePrice: this.data.goodsDetail.basicInfo.pingtuanPrice,
      selectSizeOPrice: this.data.goodsDetail.basicInfo.originalPrice,
      pingtuanopenid: pingtuanopenid,
      
      hideShopPopup: false,
      skuGoodsPic: this.data.goodsDetail.basicInfo.pic
    });
    
}
function bindGuiGeTap() {
    this.setData({
      hideShopPopup: false
    })
}
function closePopupTap() {
    this.setData({
      hideShopPopup: true
    })
}
function buliduBuyNowInfo(shoptype) {
    var shopCarMap = {};
    shopCarMap.goodsId = this.data.goodsId;
    shopCarMap.pic = this.data.imageDomain + this.data.price.pic;
    shopCarMap.name = this.data.price.skuName;
    shopCarMap.price = this.data.price.priceSale;
    shopCarMap.left = "";
    shopCarMap.active = true;
    shopCarMap.number = this.data.buyNumber;
    
    var buyNowInfo = {};
    buyNowInfo.shopNum = 0;
    buyNowInfo.shopList = [shopCarMap];
    
    return buyNowInfo;
}
function success(res) {
        // 转发成功
}
function fail(res) {
        // 转发失败
}
function reputation(goodsId) {
    var that = this;
    WXAPI.goodsReputation({
      goodsId: goodsId
    }).then(function(res) {
      if (res.code == 0) {
        res.data.forEach(ele => {
          if (ele.goods.goodReputation == 0) {
            ele.goods.goodReputation = 1
          } else if (ele.goods.goodReputation == 1) {
            ele.goods.goodReputation = 3
          } else if (ele.goods.goodReputation == 2) {
            ele.goods.goodReputation = 5
          }
        })
        that.setData({
          reputation: res.data
        });
      }
    })
}
function pingtuanList(goodsId) {
    var that = this;
    WXAPI.pingtuanList({
      goodsId: goodsId,
      status: 0
    }).then(function(res) {
      if (res.code == 0) {
        that.setData({
          pingtuanList: res.data.result
        });
      }
    })
}
function getVideoSrc(videoId) {
    var that = this;
    WXAPI.videoDetail(videoId).then(function(res) {
      if (res.code == 0) {
        that.setData({
          videoMp4Src: res.data.fdMp4
        });
      }
    })
}
function doneJoinKanjia() { // 报名参加砍价活动
    const _this = this;
    if (!_this.data.curGoodsKanjia) {
      return;
    }
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    WXAPI.kanjiaJoin(wx.getStorageSync('token'), _this.data.curGoodsKanjia.id).then(function(res) {
      wx.hideLoading()
      if (res.code == 0) {
        _this.setData({
          kjJoinUid: wx.getStorageSync('uid'),
          myHelpDetail: null
        })
        _this.getGoodsDetailAndKanjieInfo(_this.data.goodsDetail.basicInfo.id)
      } else {
        wx.showToast({
          title: res.msg,
          icon: 'none'
        })
      }
    })
}
function joinPingtuan(e) {
    let pingtuanopenid = e.currentTarget.dataset.pingtuanopenid
    wx.navigateTo({
      url: "/pages/to-pay-order/index?orderType=buyNow&pingtuanOpenId=" + pingtuanopenid
    })
}
function goShopCar() {
    wx.reLaunch({
      url: "/pages/shop-cart/index"
    });
}
function toAddShopCar() {
    this.setData({
      shopType: "addShopCar"
    })
    this.bindGuiGeTap();
}
function tobuy() {
    this.setData({
      shopType: "tobuy"
    });
    this.bindGuiGeTap();
}
function toPingtuan(e) {
    let pingtuanopenid = 0
    if (e.currentTarget.dataset.pingtuanopenid) {
      pingtuanopenid = e.currentTarget.dataset.pingtuanopenid
    }
    this.setData({
      shopType: "toPingtuan",
      selectSizePrice: this.data.goodsDetail.basicInfo.pingtuanPrice,
      selectSizeOPrice: this.data.goodsDetail.basicInfo.originalPrice,
      pingtuanopenid: pingtuanopenid,
      
      hideShopPopup: false,
      skuGoodsPic: this.data.goodsDetail.basicInfo.pic
    });
    
}
function bindGuiGeTap() {
    this.setData({
      hideShopPopup: false
    })
}
function closePopupTap() {
    this.setData({
      hideShopPopup: true
    })
}
function buliduBuyNowInfo(shoptype) {
    var shopCarMap = {};
    shopCarMap.goodsId = this.data.goodsId;
    shopCarMap.pic = this.data.imageDomain + this.data.price.pic;
    shopCarMap.name = this.data.price.skuName;
    shopCarMap.price = this.data.price.priceSale;
    shopCarMap.left = "";
    shopCarMap.active = true;
    shopCarMap.number = this.data.buyNumber;
    
    var buyNowInfo = {};
    buyNowInfo.shopNum = 0;
    buyNowInfo.shopList = [shopCarMap];
    
    return buyNowInfo;
}
function success(res) {
        // 转发成功
}
function fail(res) {
        // 转发失败
}
function reputation(goodsId) {
    var that = this;
    WXAPI.goodsReputation({
      goodsId: goodsId
    }).then(function(res) {
      if (res.code == 0) {
        res.data.forEach(ele => {
          if (ele.goods.goodReputation == 0) {
            ele.goods.goodReputation = 1
          } else if (ele.goods.goodReputation == 1) {
            ele.goods.goodReputation = 3
          } else if (ele.goods.goodReputation == 2) {
            ele.goods.goodReputation = 5
          }
        })
        that.setData({
          reputation: res.data
        });
      }
    })
}
function pingtuanList(goodsId) {
    var that = this;
    WXAPI.pingtuanList({
      goodsId: goodsId,
      status: 0
    }).then(function(res) {
      if (res.code == 0) {
        that.setData({
          pingtuanList: res.data.result
        });
      }
    })
}
function getVideoSrc(videoId) {
    var that = this;
    WXAPI.videoDetail(videoId).then(function(res) {
      if (res.code == 0) {
        that.setData({
          videoMp4Src: res.data.fdMp4
        });
      }
    })
}
function doneJoinKanjia() { // 报名参加砍价活动
    const _this = this;
    if (!_this.data.curGoodsKanjia) {
      return;
    }
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    WXAPI.kanjiaJoin(wx.getStorageSync('token'), _this.data.curGoodsKanjia.id).then(function(res) {
      wx.hideLoading()
      if (res.code == 0) {
        _this.setData({
          kjJoinUid: wx.getStorageSync('uid'),
          myHelpDetail: null
        })
        _this.getGoodsDetailAndKanjieInfo(_this.data.goodsDetail.basicInfo.id)
      } else {
        wx.showToast({
          title: res.msg,
          icon: 'none'
        })
      }
    })
}
function joinPingtuan(e) {
    let pingtuanopenid = e.currentTarget.dataset.pingtuanopenid
    wx.navigateTo({
      url: "/pages/to-pay-order/index?orderType=buyNow&pingtuanOpenId=" + pingtuanopenid
    })
}
function goShopCar() {
    wx.reLaunch({
      url: "/pages/shop-cart/index"
    });
}
function toAddShopCar() {
    this.setData({
      shopType: "addShopCar"
    })
    this.bindGuiGeTap();
}
function tobuy() {
    this.setData({
      shopType: "tobuy"
    });
    this.bindGuiGeTap();
}
function toPingtuan(e) {
    let pingtuanopenid = 0
    if (e.currentTarget.dataset.pingtuanopenid) {
      pingtuanopenid = e.currentTarget.dataset.pingtuanopenid
    }
    this.setData({
      shopType: "toPingtuan",
      selectSizePrice: this.data.goodsDetail.basicInfo.pingtuanPrice,
      selectSizeOPrice: this.data.goodsDetail.basicInfo.originalPrice,
      pingtuanopenid: pingtuanopenid,
      
      hideShopPopup: false,
      skuGoodsPic: this.data.goodsDetail.basicInfo.pic
    });
    
}
function bindGuiGeTap() {
    this.setData({
      hideShopPopup: false
    })
}
function closePopupTap() {
    this.setData({
      hideShopPopup: true
    })
}
function buliduBuyNowInfo(shoptype) {
    var shopCarMap = {};
    shopCarMap.goodsId = this.data.goodsId;
    shopCarMap.pic = this.data.imageDomain + this.data.price.pic;
    shopCarMap.name = this.data.price.skuName;
    shopCarMap.price = this.data.price.priceSale;
    shopCarMap.left = "";
    shopCarMap.active = true;
    shopCarMap.number = this.data.buyNumber;
    
    var buyNowInfo = {};
    buyNowInfo.shopNum = 0;
    buyNowInfo.shopList = [shopCarMap];
    
    return buyNowInfo;
}
function success(res) {
        // 转发成功
}
function fail(res) {
        // 转发失败
}
function reputation(goodsId) {
    var that = this;
    WXAPI.goodsReputation({
      goodsId: goodsId
    }).then(function(res) {
      if (res.code == 0) {
        res.data.forEach(ele => {
          if (ele.goods.goodReputation == 0) {
            ele.goods.goodReputation = 1
          } else if (ele.goods.goodReputation == 1) {
            ele.goods.goodReputation = 3
          } else if (ele.goods.goodReputation == 2) {
            ele.goods.goodReputation = 5
          }
        })
        that.setData({
          reputation: res.data
        });
      }
    })
}
function pingtuanList(goodsId) {
    var that = this;
    WXAPI.pingtuanList({
      goodsId: goodsId,
      status: 0
    }).then(function(res) {
      if (res.code == 0) {
        that.setData({
          pingtuanList: res.data.result
        });
      }
    })
}
function getVideoSrc(videoId) {
    var that = this;
    WXAPI.videoDetail(videoId).then(function(res) {
      if (res.code == 0) {
        that.setData({
          videoMp4Src: res.data.fdMp4
        });
      }
    })
}
function doneJoinKanjia() { // 报名参加砍价活动
    const _this = this;
    if (!_this.data.curGoodsKanjia) {
      return;
    }
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    WXAPI.kanjiaJoin(wx.getStorageSync('token'), _this.data.curGoodsKanjia.id).then(function(res) {
      wx.hideLoading()
      if (res.code == 0) {
        _this.setData({
          kjJoinUid: wx.getStorageSync('uid'),
          myHelpDetail: null
        })
        _this.getGoodsDetailAndKanjieInfo(_this.data.goodsDetail.basicInfo.id)
      } else {
        wx.showToast({
          title: res.msg,
          icon: 'none'
        })
      }
    })
}
function joinPingtuan(e) {
    let pingtuanopenid = e.currentTarget.dataset.pingtuanopenid
    wx.navigateTo({
      url: "/pages/to-pay-order/index?orderType=buyNow&pingtuanOpenId=" + pingtuanopenid
    })
}
function goShopCar() {
    wx.reLaunch({
      url: "/pages/shop-cart/index"
    });
}
function toAddShopCar() {
    this.setData({
      shopType: "addShopCar"
    })
    this.bindGuiGeTap();
}
function tobuy() {
    this.setData({
      shopType: "tobuy"
    });
    this.bindGuiGeTap();
}
function toPingtuan(e) {
    let pingtuanopenid = 0
    if (e.currentTarget.dataset.pingtuanopenid) {
      pingtuanopenid = e.currentTarget.dataset.pingtuanopenid
    }
    this.setData({
      shopType: "toPingtuan",
      selectSizePrice: this.data.goodsDetail.basicInfo.pingtuanPrice,
      selectSizeOPrice: this.data.goodsDetail.basicInfo.originalPrice,
      pingtuanopenid: pingtuanopenid,
      
      hideShopPopup: false,
      skuGoodsPic: this.data.goodsDetail.basicInfo.pic
    });
    
}
function bindGuiGeTap() {
    this.setData({
      hideShopPopup: false
    })
}
function closePopupTap() {
    this.setData({
      hideShopPopup: true
    })
}
function buliduBuyNowInfo(shoptype) {
    var shopCarMap = {};
    shopCarMap.goodsId = this.data.goodsId;
    shopCarMap.pic = this.data.imageDomain + this.data.price.pic;
    shopCarMap.name = this.data.price.skuName;
    shopCarMap.price = this.data.price.priceSale;
    shopCarMap.left = "";
    shopCarMap.active = true;
    shopCarMap.number = this.data.buyNumber;
    
    var buyNowInfo = {};
    buyNowInfo.shopNum = 0;
    buyNowInfo.shopList = [shopCarMap];
    
    return buyNowInfo;
}
function success(res) {
        // 转发成功
}
function fail(res) {
        // 转发失败
}
function reputation(goodsId) {
    var that = this;
    WXAPI.goodsReputation({
      goodsId: goodsId
    }).then(function(res) {
      if (res.code == 0) {
        res.data.forEach(ele => {
          if (ele.goods.goodReputation == 0) {
            ele.goods.goodReputation = 1
          } else if (ele.goods.goodReputation == 1) {
            ele.goods.goodReputation = 3
          } else if (ele.goods.goodReputation == 2) {
            ele.goods.goodReputation = 5
          }
        })
        that.setData({
          reputation: res.data
        });
      }
    })
}
function pingtuanList(goodsId) {
    var that = this;
    WXAPI.pingtuanList({
      goodsId: goodsId,
      status: 0
    }).then(function(res) {
      if (res.code == 0) {
        that.setData({
          pingtuanList: res.data.result
        });
      }
    })
}
function getVideoSrc(videoId) {
    var that = this;
    WXAPI.videoDetail(videoId).then(function(res) {
      if (res.code == 0) {
        that.setData({
          videoMp4Src: res.data.fdMp4
        });
      }
    })
}
function doneJoinKanjia() { // 报名参加砍价活动
    const _this = this;
    if (!_this.data.curGoodsKanjia) {
      return;
    }
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    WXAPI.kanjiaJoin(wx.getStorageSync('token'), _this.data.curGoodsKanjia.id).then(function(res) {
      wx.hideLoading()
      if (res.code == 0) {
        _this.setData({
          kjJoinUid: wx.getStorageSync('uid'),
          myHelpDetail: null
        })
        _this.getGoodsDetailAndKanjieInfo(_this.data.goodsDetail.basicInfo.id)
      } else {
        wx.showToast({
          title: res.msg,
          icon: 'none'
        })
      }
    })
}
function joinPingtuan(e) {
    let pingtuanopenid = e.currentTarget.dataset.pingtuanopenid
    wx.navigateTo({
      url: "/pages/to-pay-order/index?orderType=buyNow&pingtuanOpenId=" + pingtuanopenid
    })
}
function goShopCar() {
    wx.reLaunch({
      url: "/pages/shop-cart/index"
    });
}
function toAddShopCar() {
    this.setData({
      shopType: "addShopCar"
    })
    this.bindGuiGeTap();
}
function tobuy() {
    this.setData({
      shopType: "tobuy"
    });
    this.bindGuiGeTap();
}
function toPingtuan(e) {
    let pingtuanopenid = 0
    if (e.currentTarget.dataset.pingtuanopenid) {
      pingtuanopenid = e.currentTarget.dataset.pingtuanopenid
    }
    this.setData({
      shopType: "toPingtuan",
      selectSizePrice: this.data.goodsDetail.basicInfo.pingtuanPrice,
      selectSizeOPrice: this.data.goodsDetail.basicInfo.originalPrice,
      pingtuanopenid: pingtuanopenid,
      
      hideShopPopup: false,
      skuGoodsPic: this.data.goodsDetail.basicInfo.pic
    });
    
}
function bindGuiGeTap() {
    this.setData({
      hideShopPopup: false
    })
}
function closePopupTap() {
    this.setData({
      hideShopPopup: true
    })
}
function buliduBuyNowInfo(shoptype) {
    var shopCarMap = {};
    shopCarMap.goodsId = this.data.goodsId;
    shopCarMap.pic = this.data.imageDomain + this.data.price.pic;
    shopCarMap.name = this.data.price.skuName;
    shopCarMap.price = this.data.price.priceSale;
    shopCarMap.left = "";
    shopCarMap.active = true;
    shopCarMap.number = this.data.buyNumber;
    
    var buyNowInfo = {};
    buyNowInfo.shopNum = 0;
    buyNowInfo.shopList = [shopCarMap];
    
    return buyNowInfo;
}
function success(res) {
        // 转发成功
}
function fail(res) {
        // 转发失败
}
function reputation(goodsId) {
    var that = this;
    WXAPI.goodsReputation({
      goodsId: goodsId
    }).then(function(res) {
      if (res.code == 0) {
        res.data.forEach(ele => {
          if (ele.goods.goodReputation == 0) {
            ele.goods.goodReputation = 1
          } else if (ele.goods.goodReputation == 1) {
            ele.goods.goodReputation = 3
          } else if (ele.goods.goodReputation == 2) {
            ele.goods.goodReputation = 5
          }
        })
        that.setData({
          reputation: res.data
        });
      }
    })
}
function pingtuanList(goodsId) {
    var that = this;
    WXAPI.pingtuanList({
      goodsId: goodsId,
      status: 0
    }).then(function(res) {
      if (res.code == 0) {
        that.setData({
          pingtuanList: res.data.result
        });
      }
    })
}
function getVideoSrc(videoId) {
    var that = this;
    WXAPI.videoDetail(videoId).then(function(res) {
      if (res.code == 0) {
        that.setData({
          videoMp4Src: res.data.fdMp4
        });
      }
    })
}
function doneJoinKanjia() { // 报名参加砍价活动
    const _this = this;
    if (!_this.data.curGoodsKanjia) {
      return;
    }
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    WXAPI.kanjiaJoin(wx.getStorageSync('token'), _this.data.curGoodsKanjia.id).then(function(res) {
      wx.hideLoading()
      if (res.code == 0) {
        _this.setData({
          kjJoinUid: wx.getStorageSync('uid'),
          myHelpDetail: null
        })
        _this.getGoodsDetailAndKanjieInfo(_this.data.goodsDetail.basicInfo.id)
      } else {
        wx.showToast({
          title: res.msg,
          icon: 'none'
        })
      }
    })
}
function joinPingtuan(e) {
    let pingtuanopenid = e.currentTarget.dataset.pingtuanopenid
    wx.navigateTo({
      url: "/pages/to-pay-order/index?orderType=buyNow&pingtuanOpenId=" + pingtuanopenid
    })
}
function goShopCar() {
    wx.reLaunch({
      url: "/pages/shop-cart/index"
    });
}
function toAddShopCar() {
    this.setData({
      shopType: "addShopCar"
    })
    this.bindGuiGeTap();
}
function tobuy() {
    this.setData({
      shopType: "tobuy"
    });
    this.bindGuiGeTap();
}
function toPingtuan(e) {
    let pingtuanopenid = 0
    if (e.currentTarget.dataset.pingtuanopenid) {
      pingtuanopenid = e.currentTarget.dataset.pingtuanopenid
    }
    this.setData({
      shopType: "toPingtuan",
      selectSizePrice: this.data.goodsDetail.basicInfo.pingtuanPrice,
      selectSizeOPrice: this.data.goodsDetail.basicInfo.originalPrice,
      pingtuanopenid: pingtuanopenid,
      
      hideShopPopup: false,
      skuGoodsPic: this.data.goodsDetail.basicInfo.pic
    });
    
}
function bindGuiGeTap() {
    this.setData({
      hideShopPopup: false
    })
}
function closePopupTap() {
    this.setData({
      hideShopPopup: true
    })
}
function buliduBuyNowInfo(shoptype) {
    var shopCarMap = {};
    shopCarMap.goodsId = this.data.goodsId;
    shopCarMap.pic = this.data.imageDomain + this.data.price.pic;
    shopCarMap.name = this.data.price.skuName;
    shopCarMap.price = this.data.price.priceSale;
    shopCarMap.left = "";
    shopCarMap.active = true;
    shopCarMap.number = this.data.buyNumber;
    
    var buyNowInfo = {};
    buyNowInfo.shopNum = 0;
    buyNowInfo.shopList = [shopCarMap];
    
    return buyNowInfo;
}
function success(res) {
        // 转发成功
}
function fail(res) {
        // 转发失败
}
function reputation(goodsId) {
    var that = this;
    WXAPI.goodsReputation({
      goodsId: goodsId
    }).then(function(res) {
      if (res.code == 0) {
        res.data.forEach(ele => {
          if (ele.goods.goodReputation == 0) {
            ele.goods.goodReputation = 1
          } else if (ele.goods.goodReputation == 1) {
            ele.goods.goodReputation = 3
          } else if (ele.goods.goodReputation == 2) {
            ele.goods.goodReputation = 5
          }
        })
        that.setData({
          reputation: res.data
        });
      }
    })
}
function pingtuanList(goodsId) {
    var that = this;
    WXAPI.pingtuanList({
      goodsId: goodsId,
      status: 0
    }).then(function(res) {
      if (res.code == 0) {
        that.setData({
          pingtuanList: res.data.result
        });
      }
    })
}
function getVideoSrc(videoId) {
    var that = this;
    WXAPI.videoDetail(videoId).then(function(res) {
      if (res.code == 0) {
        that.setData({
          videoMp4Src: res.data.fdMp4
        });
      }
    })
}
function doneJoinKanjia() { // 报名参加砍价活动
    const _this = this;
    if (!_this.data.curGoodsKanjia) {
      return;
    }
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    WXAPI.kanjiaJoin(wx.getStorageSync('token'), _this.data.curGoodsKanjia.id).then(function(res) {
      wx.hideLoading()
      if (res.code == 0) {
        _this.setData({
          kjJoinUid: wx.getStorageSync('uid'),
          myHelpDetail: null
        })
        _this.getGoodsDetailAndKanjieInfo(_this.data.goodsDetail.basicInfo.id)
      } else {
        wx.showToast({
          title: res.msg,
          icon: 'none'
        })
      }
    })
}
function joinPingtuan(e) {
    let pingtuanopenid = e.currentTarget.dataset.pingtuanopenid
    wx.navigateTo({
      url: "/pages/to-pay-order/index?orderType=buyNow&pingtuanOpenId=" + pingtuanopenid
    })
}
function selectAddress() {
    wx.navigateTo({
      url: "/pages/select-address/index"
    })
}
function goShopCar() {
    wx.reLaunch({
      url: "/pages/shop-cart/index"
    });
}
function toAddShopCar() {
    this.setData({
      shopType: "addShopCar"
    })
    this.bindGuiGeTap();
}
function tobuy() {
    this.setData({
      shopType: "tobuy"
    });
    this.bindGuiGeTap();
}
function toPingtuan(e) {
    let pingtuanopenid = 0
    if (e.currentTarget.dataset.pingtuanopenid) {
      pingtuanopenid = e.currentTarget.dataset.pingtuanopenid
    }
    this.setData({
      shopType: "toPingtuan",
      selectSizePrice: this.data.goodsDetail.basicInfo.pingtuanPrice,
      selectSizeOPrice: this.data.goodsDetail.basicInfo.originalPrice,
      pingtuanopenid: pingtuanopenid,
      
      hideShopPopup: false,
      skuGoodsPic: this.data.goodsDetail.basicInfo.pic
    });
    
}
function bindGuiGeTap() {
    this.setData({
      hideShopPopup: false
    })
}
function closePopupTap() {
    this.setData({
      hideShopPopup: true
    })
}
function buliduBuyNowInfo(shoptype) {
    var shopCarMap = {};
    shopCarMap.goodsId = this.data.goodsId;
    shopCarMap.pic = this.data.imageDomain + this.data.price.pic;
    shopCarMap.name = this.data.price.skuName;
    shopCarMap.price = this.data.price.priceSale;
    shopCarMap.left = "";
    shopCarMap.active = true;
    shopCarMap.number = this.data.buyNumber;
    
    var buyNowInfo = {};
    buyNowInfo.shopNum = 0;
    buyNowInfo.shopList = [shopCarMap];
    
    return buyNowInfo;
}
function success(res) {
        // 转发成功
}
function fail(res) {
        // 转发失败
}
function reputation(goodsId) {
    var that = this;
    WXAPI.goodsReputation({
      goodsId: goodsId
    }).then(function(res) {
      if (res.code == 0) {
        res.data.forEach(ele => {
          if (ele.goods.goodReputation == 0) {
            ele.goods.goodReputation = 1
          } else if (ele.goods.goodReputation == 1) {
            ele.goods.goodReputation = 3
          } else if (ele.goods.goodReputation == 2) {
            ele.goods.goodReputation = 5
          }
        })
        that.setData({
          reputation: res.data
        });
      }
    })
}
function pingtuanList(goodsId) {
    var that = this;
    WXAPI.pingtuanList({
      goodsId: goodsId,
      status: 0
    }).then(function(res) {
      if (res.code == 0) {
        that.setData({
          pingtuanList: res.data.result
        });
      }
    })
}
function getVideoSrc(videoId) {
    var that = this;
    WXAPI.videoDetail(videoId).then(function(res) {
      if (res.code == 0) {
        that.setData({
          videoMp4Src: res.data.fdMp4
        });
      }
    })
}
function doneJoinKanjia() { // 报名参加砍价活动
    const _this = this;
    if (!_this.data.curGoodsKanjia) {
      return;
    }
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    WXAPI.kanjiaJoin(wx.getStorageSync('token'), _this.data.curGoodsKanjia.id).then(function(res) {
      wx.hideLoading()
      if (res.code == 0) {
        _this.setData({
          kjJoinUid: wx.getStorageSync('uid'),
          myHelpDetail: null
        })
        _this.getGoodsDetailAndKanjieInfo(_this.data.goodsDetail.basicInfo.id)
      } else {
        wx.showToast({
          title: res.msg,
          icon: 'none'
        })
      }
    })
}
function joinPingtuan(e) {
    let pingtuanopenid = e.currentTarget.dataset.pingtuanopenid
    wx.navigateTo({
      url: "/pages/to-pay-order/index?orderType=buyNow&pingtuanOpenId=" + pingtuanopenid
    })
}
