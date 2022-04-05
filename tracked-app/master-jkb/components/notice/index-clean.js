function observer(t, e) {}
function observer(t, e) {
                this.setData({
                    img: t
                });
}
function attached() {
            var t = this;
            console.log(this.data.imgList, 1010);
            var a = this;
            console.log(wx.getStorageSync("home_list"));
            var o = wx.getStorageSync("home_list") ? wx.getStorageSync("home_list").hashCode : "";
            e({
                url: "/jingxinju/jkb/notice/list",
                method: "get",
                data: {
                    hashCode: o
                }
            }).then(function(e) {
                console.log(e, "顶部通告"), e.valid && t.setData({
                    imgList: wx.getStorageSync("home_list").data
                }), e && e.data && e.data.length > 0 && (wx.setStorageSync("home_list", e), a.setData({
                    imgList: e.data
                }));
            }).catch(function(t) {
                console.log(t);
            });
}
function detached() {}
function libiao(t) {
            console.log(t), wx.navigateTo({
                url: "/pages/jxzq/xiao-xi-xiang-qing/index?index=" + t.currentTarget.dataset.index
            });
}
