function deleteAddress(e) {
    const id = e.currentTarget.dataset.id;
    wx.showModal({
      title: '提示',
      content: '确定要删除该收货地址吗？',
      success: function (res) {
        if (res.confirm) {
          WXAPI.deleteAddress(wx.getStorageSync('token'), id).then(function () {
            wx.navigateBack({})
          })
        } else {
          console.log('用户点击取消')
        }
      }
    })
}
function success(res) {
        // res = {
        //   cityName: '上海市',
        //   countyName: '嘉定区',
        //   detailInfo: '惠民路123号',
        //   errMsg: 'chooseAddress.ok',
        //   nationalCode: '310114',
        //   postalCode: '201800',
        //   provinceName: '上海市',
        //   telNumber: '13500000000',
        //   userName: '测试',
        // }
        const provinceName = res.provinceName;
        const cityName = res.cityName;
        const diatrictName = res.countyName;
        // 读取省
        const pIndex = that.data.provinces.findIndex(ele => {
          return ele.name == provinceName
        })
        if (pIndex != -1) {
          const e = {
            detail: {
              value: pIndex
            }
          }
          that.provinceChange(e, 0, 0).then(() => {
            // 读取市
            let cIndex = that.data.cities.findIndex(ele => {
              return ele.name == cityName
            })
            if (cIndex == -1) {
              cIndex = 1 // 兼容直辖市
            }
            if (cIndex != -1) {
              const e = {
                detail: {
                  value: cIndex
                }
              }
              that.cityChange(e, 0).then(() => {
                // 读取区县
                const aIndex = that.data.areas.findIndex(ele => {
                  return ele.name == diatrictName
                })
                if (aIndex != -1) {
                  const e = {
                    detail: {
                      value: aIndex
                    }
                  }
                  that.areaChange(e)
                }
              })
            }
          })
        }
        that.setData({
          linkMan: res.userName,
          mobile: res.telNumber,
          address: res.detailInfo
        });
}
