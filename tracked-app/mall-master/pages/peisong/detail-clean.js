function success(res) {
            if (res.confirm) {
              WXAPI.orderDelivery(wx.getStorageSync('token'), orderId).then(function (res) {
                if (res.code == 0) {
                  that.onShow();                  
                }
              })
            }
}
function bindPickerChange(e) {
      const obj = this.data.peisongMembers[e.detail.value]
      this.setData({
        membersSelectIndex: e.detail.value,
        membersSelectStr: obj.name + ' ' + obj.mobile
      })
}
function success(res) {
            if (res.confirm) {
              WXAPI.orderDelivery(wx.getStorageSync('token'), orderId).then(function (res) {
                if (res.code == 0) {
                  that.onShow();                  
                }
              })
            }
}
function bindPickerChange(e) {
      const obj = this.data.peisongMembers[e.detail.value]
      this.setData({
        membersSelectIndex: e.detail.value,
        membersSelectStr: obj.name + ' ' + obj.mobile
      })
}
function success(res) {
            if (res.confirm) {
              WXAPI.orderDelivery(wx.getStorageSync('token'), orderId).then(function (res) {
                if (res.code == 0) {
                  that.onShow();                  
                }
              })
            }
}
function bindPickerChange(e) {
      const obj = this.data.peisongMembers[e.detail.value]
      this.setData({
        membersSelectIndex: e.detail.value,
        membersSelectStr: obj.name + ' ' + obj.mobile
      })
}
function success(res) {
            if (res.confirm) {
              WXAPI.orderDelivery(wx.getStorageSync('token'), orderId).then(function (res) {
                if (res.code == 0) {
                  that.onShow();                  
                }
              })
            }
}
function bindPickerChange(e) {
      const obj = this.data.peisongMembers[e.detail.value]
      this.setData({
        membersSelectIndex: e.detail.value,
        membersSelectStr: obj.name + ' ' + obj.mobile
      })
}
function onLoad(e){
      // e.peisongOrderId = 54
      var peisongOrderId = e.peisongOrderId;
      this.setData({
        peisongOrderId
      });
      this.peisongOrderDetail()
      this.peisongMemberInfo()
}
function wuliuDetailsTap(e){
      var orderId = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: "/pages/wuliu/index?id=" + orderId
      })
}
function confirmBtnTap(e){
      let that = this;
      let orderId = this.data.orderId;
      wx.showModal({
          title: '确认服务已完成？',
          content: '',
          success: function(res) {
            if (res.confirm) {
              WXAPI.orderDelivery(wx.getStorageSync('token'), orderId).then(function (res) {
                if (res.code == 0) {
                  that.onShow();                  
                }
              })
            }
          }
      })
}
function bindPickerChange(e) {
      const obj = this.data.peisongMembers[e.detail.value]
      this.setData({
        membersSelectIndex: e.detail.value,
        membersSelectStr: obj.name + ' ' + obj.mobile
      })
}
function onLoad(e){
      // e.peisongOrderId = 54
      var peisongOrderId = e.peisongOrderId;
      this.setData({
        peisongOrderId
      });
      this.peisongOrderDetail()
      this.peisongMemberInfo()
}
function wuliuDetailsTap(e){
      var orderId = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: "/pages/wuliu/index?id=" + orderId
      })
}
function confirmBtnTap(e){
      let that = this;
      let orderId = this.data.orderId;
      wx.showModal({
          title: '确认服务已完成？',
          content: '',
          success: function(res) {
            if (res.confirm) {
              WXAPI.orderDelivery(wx.getStorageSync('token'), orderId).then(function (res) {
                if (res.code == 0) {
                  that.onShow();                  
                }
              })
            }
          }
      })
}
function bindPickerChange(e) {
      const obj = this.data.peisongMembers[e.detail.value]
      this.setData({
        membersSelectIndex: e.detail.value,
        membersSelectStr: obj.name + ' ' + obj.mobile
      })
}
function onLoad(e){
      // e.peisongOrderId = 54
      var peisongOrderId = e.peisongOrderId;
      this.setData({
        peisongOrderId
      });
      this.peisongOrderDetail()
      this.peisongMemberInfo()
}
function wuliuDetailsTap(e){
      var orderId = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: "/pages/wuliu/index?id=" + orderId
      })
}
function confirmBtnTap(e){
      let that = this;
      let orderId = this.data.orderId;
      wx.showModal({
          title: '确认服务已完成？',
          content: '',
          success: function(res) {
            if (res.confirm) {
              WXAPI.orderDelivery(wx.getStorageSync('token'), orderId).then(function (res) {
                if (res.code == 0) {
                  that.onShow();                  
                }
              })
            }
          }
      })
}
function submitReputation(e) {
      let that = this;
      let postJsonString = {};
      postJsonString.token = wx.getStorageSync('token');
      postJsonString.orderId = this.data.orderId;
      let reputations = [];
      let i = 0;
      while (e.detail.value["orderGoodsId" + i]) {
        let orderGoodsId = e.detail.value["orderGoodsId" + i];
        let goodReputation = e.detail.value["goodReputation" + i];
        let goodReputationRemark = e.detail.value["goodReputationRemark" + i];

        let reputations_json = {};
        reputations_json.id = orderGoodsId;
        reputations_json.reputation = goodReputation;
        reputations_json.remark = goodReputationRemark;

        reputations.push(reputations_json);
        i++;
      }
      postJsonString.reputations = reputations;
      WXAPI.orderReputation({
        postJsonString: JSON.stringify(postJsonString)
      }).then(function (res) {
        if (res.code == 0) {
          that.onShow();
        }
      })
}
function bindPickerChange(e) {
      const obj = this.data.peisongMembers[e.detail.value]
      this.setData({
        membersSelectIndex: e.detail.value,
        membersSelectStr: obj.name + ' ' + obj.mobile
      })
}
