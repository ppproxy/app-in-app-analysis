function onLoad(options) {
    var that = this;
    WXAPI.noticeDetail(options.id).then(function (res) {
      if (res.code == 0) {
        that.setData({
          notice: res.data
        });
      }
    })
}