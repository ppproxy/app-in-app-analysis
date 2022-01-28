var t = getApp(), e = (t.userStore, t.request);

Component({
    properties: {
        background: {
            type: String,
            value: "#f0f",
            observer: function(t, e) {}
        },
        img: {
            type: String,
            value: "0",
            observer: function(t, e) {
                this.setData({
                    img: t
                });
            }
        }
    },
    data: {
        imgList: wx.getStorageSync("home_list").data
    },
    lifetimes: {
        attached: function() {
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
        },
        detached: function() {}
    },
    methods: {
        libiao: function(t) {
            console.log(t), wx.navigateTo({
                url: "/pages/jxzq/xiao-xi-xiang-qing/index?index=" + t.currentTarget.dataset.index
            });
        }
    }
});