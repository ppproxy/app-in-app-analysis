function onLoad(t) {
        var e = this;
        wx.getSystemInfo({
            success: function(t) {
                console.log(t), e.setData({
                    systemInfo: t
                });
            }
        }), wx.showLoading({
            title: "努力加载中",
            mask: !0
        }), this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight,
            userInfo: a.userInfo
        });
        var n = wx.getStorageSync("img");
        try {
            n.img ? this.getQueryNucleic(0) : this.getQueryNucleic(1);
        } catch (t) {
            this.getQueryNucleic(1);
        }
        this.getJson();
}
function handleTap(t) {
        wx.showLoading({
            title: "努力加载中",
            mask: !0
        }), console.log(this.data.json), s({
            eventId: "detection_tap_HistoricalResults"
        }), this.data.json.length > 1 ? (this.setData({
            params: this.data.json
        }), wx.navigateTo({
            url: "/pages/jxzq/he-suan-li-shi/index"
        })) : wx.showModal({
            title: "提示",
            content: "没有查询到您的历史检测记录。",
            showCancel: !1,
            confirmText: "我知道了"
        }), wx.hideLoading();
}
function onPageScroll(t) {
        var e = parseInt(t.scrollTop) < 40;
        this.setData({
            isShowBg: e
        });
}
function getQueryNucleic(t) {
        var a = this;
        e({
            url: "/jingxinju/gjfw/hsjcSearch?type=" + t,
            method: "POST",
            data: {
                type: t
            }
        }).then(function(e) {
            if (console.log(e, 11), 0 != e.data.length) {
                var n = new Date(), o = n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate(), s = a.datedifference(e.data[0].dtCheck, o);
                console.log(s), a.setData({
                    riqi: s
                });
            }
            if (a.setData({
                json: e.data
            }), 1 == t) {
                console.log(t);
                var g = {
                    img: i(e.image)
                };
                console.log(g), wx.setStorageSync("img", g), a.setData({
                    imgUrl: g.img
                });
            } else a.setData({
                imgUrl: i(wx.getStorageSync("img").img)
            });
            wx.hideLoading();
        }).catch(function(t) {
            wx.hideLoading();
        });
}
function handleOpenRegion() {
        wx.navigateBack({
            delta: 1
        });
}
function datedifference(t, e) {
        console.log(t, e);
        var a = o(t), n = o(e), i = n.diff(a, "day");
        return console.log(a, n, i), i;
}
function xinxi() {
        var t = this;
        wx.getStorageSync("home_list").data.map(function(e, a) {
            e.id == t.data.hsjcJumpToId && wx.navigateTo({
                url: "/pages/jxzq/xiao-xi-xiang-qing/index?index=" + a
            });
        });
}
function getJson() {
        var t = this;
        wx.request({
            url: n.tzJson,
            success: function(e) {
                console.log(e, 1010), t.setData({
                    hsjcJumpToId: e.data.hsjcJumpToId
                });
            },
            fail: function(t) {}
        });
}
function ontao() {
        this.setData({
            daofangWrong: !0
        });
}
function btnDaofangWrong() {
        this.setData({
            daofangWrong: !1
        }), wx.navigateToMiniProgram({
            appId: "wx1c3992cd757fd8fd",
            path: "/pages/home/home",
            success: function(t) {
                console.log(t);
            },
            fail: function() {}
        });
}
