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
      hideShopPopup: false,
      selectSizePrice: this.data.goodsDetail.basicInfo.minPrice,
      selectSizeOPrice: this.data.goodsDetail.basicInfo.originalPrice,
      skuGoodsPic: this.data.goodsDetail.basicInfo.pic
    })
}
function closePopupTap() {
    this.setData({
      hideShopPopup: true
    })
}
function buyNow(e) {
    let that = this
    let shoptype = e.currentTarget.dataset.shoptype
    if (this.data.goodsDetail.properties && !this.data.canSubmit) {
      wx.showToast({
        title: '请选择规格',
        icon: 'none'
      })
      this.bindGuiGeTap()
      return;
    }
    if (this.data.goodsAddition) {
      let canSubmit = true
      this.data.goodsAddition.forEach(ele => {
        if (ele.required) {
          const a = ele.items.find(item => {
            return item.active
          })
          if (!a) {
            canSubmit = false
          }
        }
      })
      if (!canSubmit) {
        wx.showToast({
          title: '请选择配件',
          icon: 'none'
        })
        this.bindGuiGeTap()
        return
      }
    }
    if (this.data.buyNumber < 1) {
      wx.showModal({
        title: '提示',
        content: '购买数量不能为0！',
        showCancel: false
      })
      return;
    }
    //组建立即购买信息
    var buyNowInfo = this.buliduBuyNowInfo(shoptype);
    // 写入本地存储
    wx.setStorage({
      key: "buyNowInfo",
      data: buyNowInfo
    })
    this.closePopupTap();
    if (shoptype == 'toPingtuan') {
      if (this.data.pingtuanopenid) {
        wx.navigateTo({
          url: "/pages/to-pay-order/index?orderType=buyNow&pingtuanOpenId=" + this.data.pingtuanopenid
        })
      } else {
        WXAPI.pingtuanOpen(wx.getStorageSync('token'), that.data.goodsDetail.basicInfo.id).then(function (res) {
          if (res.code == 2000) {
            return
          }
          if (res.code != 0) {
            wx.showToast({
              title: res.msg,
              icon: 'none',
              duration: 2000
            })
            return
          }
          wx.navigateTo({
            url: "/pages/to-pay-order/index?orderType=buyNow&pingtuanOpenId=" + res.data.id
          })
        })
      }
    } else {
      wx.navigateTo({
        url: "/pages/to-pay-order/index?orderType=buyNow"
      })
    }

}
function buliduBuyNowInfo(shoptype) {
    var shopCarMap = {};
    shopCarMap.goodsId = this.data.goodsDetail.basicInfo.id;
    shopCarMap.shopId = this.data.goodsDetail.basicInfo.shopId;
    shopCarMap.pic = this.data.goodsDetail.basicInfo.pic;
    shopCarMap.name = this.data.goodsDetail.basicInfo.name;
    // shopCarMap.label=this.data.goodsDetail.basicInfo.id; 规格尺寸 
    shopCarMap.propertyChildIds = this.data.propertyChildIds;
    shopCarMap.label = this.data.propertyChildNames;
    shopCarMap.price = this.data.selectSizePrice;
    // if (shoptype == 'toPingtuan') { // 20190714 拼团价格注释掉
    //   shopCarMap.price = this.data.goodsDetail.basicInfo.pingtuanPrice;
    // }
    shopCarMap.score = this.data.totalScoreToPay;
    shopCarMap.left = "";
    shopCarMap.active = true;
    shopCarMap.number = this.data.buyNumber;
    shopCarMap.logisticsType = this.data.goodsDetail.basicInfo.logisticsId;
    shopCarMap.logistics = this.data.goodsDetail.logistics;
    shopCarMap.weight = this.data.goodsDetail.basicInfo.weight;

    if (this.data.goodsAddition && this.data.goodsAddition.length > 0) {
      const additions = []
      this.data.goodsAddition.forEach(ele => {
        ele.items.forEach(item => {
          if (item.active) {
            additions.push({
              id: item.id,
              name: item.name,
              pid: ele.id,
              pname: ele.name
            })
          }
        })
      })
      if (additions.length > 0) {
        shopCarMap.additions = additions
      }
    }

    var buyNowInfo = {};
    buyNowInfo.shopNum = 0;
    buyNowInfo.shopList = [];

    buyNowInfo.shopList.push(shopCarMap);
    buyNowInfo.kjId = this.data.kjId;
    if (this.data.shopSubdetail) {
      buyNowInfo.shopInfo = this.data.shopSubdetail.info
    } else {
      buyNowInfo.shopInfo = {
        id: 0,
        name: "其他",
        pic: null,
        serviceDistance: 99999999,
      }
    }

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
    WXAPI.goodsReputationV2({
      goodsId: goodsId
    }).then(function (res) {
      if (res.code == 0) {
        res.data.result.forEach(ele => {
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
      } else {
        if (that.data.tabs && that.data.tabs.length == 3) {
          const tabs = that.data.tabs
          tabs.splice(2, 1)
          that.setData({
            tabs
          })
        }
      }
    })
}
function pingtuanList(goodsId) {
    var that = this;
    WXAPI.pingtuanList({
      goodsId: goodsId,
      status: 0
    }).then(function (res) {
      if (res.code == 0) {
        that.setData({
          pingtuanList: res.data.result
        });
      }
    })
}
function getVideoSrc(videoId) {
    var that = this;
    WXAPI.videoDetail(videoId).then(function (res) {
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
    WXAPI.kanjiaJoin(wx.getStorageSync('token'), _this.data.curGoodsKanjia.id).then(function (res) {
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
