var t = getApp(), a = (t.Anim, t.userStore), e = (t.request, t.wxp);

Page({
    data: {
        winWidth: 0,
        winHeight: 0,
        currentTab: 0,
        fourTit: "请选择",
        firstTit: "广东省",
        SecondTit: "请选择",
        ThirdTit: "请选择",
        placeData1: [],
        placeData2: [],
        placeData3: [],
        SecondTitShow: !1,
        ThirdTitShow: !1,
        firstTitId: "",
        SecondTitId: "",
        ThirdTitId: "",
        fourTitId: "",
        height: ""
    },
    onLoad: function(t) {
        var a = this;
        console.log(t), this.getData(t), this.setData({
            firstTit: t.name,
            firstTitId: t.value
        }), wx.getSystemInfo({
            success: function(t) {
                console.log("0----hhhhh----", t), a.setData({
                    winWidth: t.windowWidth,
                    winHeight: t.windowHeight
                });
            }
        });
        var e = wx.createSelectorQuery();
        a = this;
        e.select(".swiper-tab").boundingClientRect(function(t) {
            console.log(t), a.setData({
                height: t.height
            });
        }).exec();
    },
    getData: function(t) {
        var a = this;
        wx.showLoading({
            title: "努力加载中",
            mask: !0
        });
        var i = new Date().getTime();
        e.request({
            url: "https://xcx-static.yqgz.beijing.gov.cn/json/jkb/province.json",
            method: "get"
        }).then(function(e) {
            var r;
            wx.canIUse("reportPerformance") && wx.reportPerformance(1002, Number(new Date().getTime() - i), "https://xcx-static.yqgz.beijing.gov.cn/json/jkb/province.json"), 
            wx.hideLoading(), console.log("0--------", e), e.data.map(function(a, e) {
                a.status = !1, t.value == a.value && (a.status = !0, r = a.child);
            }), a.setData({
                placeData1: e.data,
                placeData2: r,
                currentTab: 1,
                SecondTitShow: !0
            });
        }).catch(function(t) {
            wx.hideLoading();
        });
    },
    handleTapFirst: function(t) {
        console.log(t.currentTarget.dataset.id, t, "oooooooo"), console.log(t.currentTarget), 
        this.data.placeData1.map(function(a, e) {
            a.status = !1, t.currentTarget.dataset.id.value == a.value && (a.status = !0);
        }), 0 == this.data.currentTab ? (this.setData({
            firstTit: t.currentTarget.dataset.id.name,
            firstTitId: t.currentTarget.dataset.id.value,
            currentTab: 1,
            ThirdTit: "请选择",
            ThirdTitShow: !1
        }), this.getData(t.currentTarget.dataset.id)) : this.setData({
            placeData2: t.currentTarget.dataset.id.child,
            currentTab: 1,
            SecondTit: t.currentTarget.dataset.id.name,
            SecondTitId: t.currentTarget.dataset.id.value,
            SecondTitShow: !0,
            placeData1: this.data.placeData1
        });
    },
    handleTapSecond: function(t) {
        console.log(t.currentTarget.dataset.id.child, t, "ooooooo3333333o"), this.data.placeData2.map(function(a) {
            a.status = !1, a.value == t.currentTarget.dataset.id.value && (a.status = !0);
        }), t.currentTarget.dataset.id.child.length < 1 ? (console.log(0xf6b75ab2bc47200), 
        this.setData({
            placeData3: t.currentTarget.dataset.id.child,
            ThirdTit: t.currentTarget.dataset.id.name,
            ThirdTitId: t.currentTarget.dataset.id.value,
            placeData2: this.data.placeData2
        }), a.userInfo.gongName = {
            key: t.currentTarget.dataset.id.name,
            name: this.data.firstTit + t.currentTarget.dataset.id.name,
            firstTit: this.data.firstTit,
            thirdTit: t.currentTarget.dataset.id.name,
            value: t.currentTarget.dataset.id.value,
            arrName: t.currentTarget.dataset.id.name
        }, wx.navigateBack({
            delta: 2
        })) : this.setData({
            placeData3: t.currentTarget.dataset.id.child,
            currentTab: 2,
            ThirdTit: t.currentTarget.dataset.id.name,
            ThirdTitId: t.currentTarget.dataset.id.value,
            ThirdTitShow: !0,
            placeData2: this.data.placeData2
        });
        var e = wx.createSelectorQuery(), i = this;
        e.select(".swiper-tab").boundingClientRect(function(t) {
            console.log(t), i.setData({
                height: t.height
            });
        }).exec();
    },
    handleTapThird: function(t) {
        console.log(t.currentTarget.dataset.id, t, "oooooooo"), this.setData({
            fourTit: t.currentTarget.dataset.id.name,
            fourTitId: t.currentTarget.dataset.id.value
        }), console.log(this.data.firstTit + this.data.ThirdTit + t.currentTarget.dataset.id.name), 
        a.userInfo.gongName = {
            key: t.currentTarget.dataset.id.name,
            name: this.data.firstTit + this.data.ThirdTit + t.currentTarget.dataset.id.name,
            firstTit: this.data.firstTit,
            thirdTit: this.data.ThirdTit,
            value: t.currentTarget.dataset.id.value,
            arrName: t.currentTarget.dataset.id.name
        }, wx.navigateBack({
            delta: 2
        });
    },
    swichNav: function(t) {
        if (this.data.currentTab === t.target.dataset.current) return !1;
        this.setData({
            currentTab: t.target.dataset.current
        });
    },
    bindChange: function(t) {
        this.setData({
            currentTab: t.detail.current
        });
    }
});