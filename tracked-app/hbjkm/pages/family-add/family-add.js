var t = getApp(), a = t.Anim, i = (t.userStore, t.request, t.config, t.requestHb);

t.configStore, t.wxp;

a.Page({
    store: function(t) {
        return {
            isAuth: t.user.userInfo.isAuth,
            userInfo: t.user.userInfo
        };
    },
    data: {
        list: [],
        imgcolor: 0
    },
    del: function(t) {
        var a = this;
        wx.showModal({
            title: "提示",
            content: "是否删除此条被代领人信息",
            success: function(e) {
                e.confirm ? i({
                    url: "/hbjkm/family/del/" + a.data.userInfo.uid + "/" + t.target.dataset.id,
                    method: "POST"
                }).then(function(t) {
                    i({
                        url: "/hbjkm/family/query/" + a.data.userInfo.uid,
                        method: "POST"
                    }).then(function(t) {
                        t.data.forEach(function(a, i) {
                            1 == a.familyRelationType ? (t.data, a.familyRelationType) : (a.familyRelationType, 
                            a.familyRelationType);
                        }), a.setData({
                            list: t.data
                        });
                    });
                }) : e.cancel && console.log("用户点击取消");
            }
        }), console.log(t);
    },
    add: function() {
        wx.redirectTo({
            url: "/pages/family-add-info/family-add-info"
        });
    },
    familypage: function(t) {
        console.log(t);
        var a = t.target.dataset.ind, i = this.data.list[a].familyName, e = this.data.list[a].familyIdentity, n = 1 == this.data.list[a].familyRelationType ? "配偶" : 2 == this.data.list[a].familyRelationType ? "子女" : "父母";
        console.log(i, e, n), wx.navigateTo({
            url: "/pages/family-page/family-page?id=" + t.target.dataset.id + "&name=" + encodeURIComponent(i) + "&relation=" + encodeURIComponent(n) + "&identity=" + e + "&familyRelationType=" + this.data.list[a].familyRelationType
        });
    },
    down: function() {
        this.setData({
            imgcolor: 1
        });
    },
    up: function() {
        this.setData({
            imgcolor: 0
        });
    },
    onLoad: function(t) {
        this.setData({
            uid: t.uid
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        i({
            url: "/hbjkm/family/query/" + this.data.userInfo.uid,
            method: "POST"
        }).then(function(a) {
            a.data.forEach(function(t, a) {
                1 == t.familyRelationType ? t.familyRelationType : (t.familyRelationType, t.familyRelationType);
            }), t.setData({
                list: a.data
            });
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});