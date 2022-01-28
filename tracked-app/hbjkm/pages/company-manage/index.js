var a = getApp().request;

Page({
    data: {
        applyStatus: 0,
        applyUserName: "",
        companyId: "",
        searchValue: "",
        nodo: 0,
        contacted: 1,
        nocontact: 2,
        getarray: {
            applies: [],
            tab: {
                0: 3,
                1: 2,
                2: 1
            }
        },
        winWidth: 0,
        winHeight: 0,
        currentTab: 0
    },
    onLoad: function() {
        var t = this, e = this;
        return this.setData({
            companyId: option.id
        }), wx.getSystemInfo({
            success: function(a) {
                e.setData({
                    winWidth: a.windowWidth,
                    winHeight: a.windowHeight
                });
            }
        }), a({
            url: "/resumption/manager/get/applies",
            method: "POST",
            data: {
                applyStatus: 0,
                applyUserName: this.data.searchValue,
                companyId: this.data.companyId
            }
        }).then(function(a) {
            wx.hideLoading(), t.setData({
                "getarray.applies": a.applies,
                "getarray.tab": a.tab
            });
        }).catch(function(a) {
            wx.hideLoading(), console.error(a);
        });
    },
    swichNav: function(a) {
        var t = this;
        this.data.currentTab === a.target.dataset.current ? a.target.dataset.current : t.setData({
            currentTab: a.target.dataset.current
        });
    },
    bindChange: function(t) {
        var e = this;
        this.setData({
            currentTab: t.detail.current
        });
        var n = t.detail.current;
        return console.log(n), a({
            url: "/resumption/manager/get/applies",
            method: "POST",
            data: {
                applyStatus: n,
                applyUserName: this.data.searchValue,
                companyId: this.data.companyId
            }
        }).then(function(a) {
            wx.hideLoading(), console.log("res", a), e.setData({
                "getarray.applies": a.applies,
                "getarray.tab": a.tab
            });
        }).catch(function(a) {
            wx.hideLoading(), console.error(a);
        });
    },
    newlists: function() {
        var t = this;
        return a({
            url: "/resumption/manager/get/applies",
            method: "POST",
            data: {
                applyStatus: this.data.currentTab,
                applyUserName: this.data.searchValue,
                companyId: this.data.companyId
            }
        }).then(function(a) {
            wx.hideLoading(), console.log("res", a), t.setData({
                "getarray.applies": a.applies,
                "getarray.tab": a.tab
            });
        }).catch(function(a) {
            wx.hideLoading(), console.error(a);
        });
    },
    checkList: function(t) {
        var e = this;
        return a({
            url: "/resumption/manager/update/apply/status",
            method: "POST",
            data: t
        }).then(function(a) {
            wx.hideLoading(), console.log("res", a), e.newlists();
        }).catch(function(a) {
            wx.hideLoading(), console.error(a), e.newlists();
        });
    },
    checkitem: function(a) {
        var t = this, e = a.target.dataset.name.applyUserName, n = a.target.dataset.name.id;
        wx.showModal({
            content: "\r\n是否通过" + e + "的关联申请",
            confirmText: "通过",
            confirmColor: "#4293F4",
            cancelText: "拒绝",
            success: function(a) {
                if (a.confirm) {
                    e = {
                        applyIds: [ n ],
                        applyStatus: 1
                    };
                    console.log("通过"), t.checkList(e);
                } else if (a.cancel) {
                    console.log("拒绝");
                    var e = {
                        applyIds: [ n ],
                        applyStatus: 2
                    };
                    t.checkList(e);
                }
            }
        });
    },
    bindconted: function() {
        console.log(11), wx.showActionSheet({
            itemList: [ "解除关联" ],
            cancelColor: "#4293F4",
            success: function(a) {
                console.log(a.tapIndex);
            },
            fail: function(a) {
                console.log(a.errMsg);
            }
        });
    },
    unbindcont: function() {
        console.log(11), wx.showActionSheet({
            itemList: [ "建立关联" ],
            success: function(a) {
                console.log(a.tapIndex);
            },
            fail: function(a) {
                console.log(a.errMsg);
            }
        });
    },
    handleChange: function(t) {
        var e = this, n = t.detail.value;
        return console.log(t), this.data.searchValue = n, a({
            url: "/resumption/manager/get/applies",
            method: "POST",
            data: {
                applyStatus: this.data.currentTab,
                applyUserName: n,
                companyId: this.data.companyId
            }
        }).then(function(a) {
            wx.hideLoading(), console.log("res", a);
            for (var t in a.tab) a.tab[t] > 0 && e.setData({
                currentTab: a.tab[t]
            });
            e.setData({
                "getarray.applies": a.applies,
                "getarray.tab": a.tab
            });
        }).catch(function(a) {
            wx.hideLoading(), console.error(a);
        });
    },
    handleConfirm: function(t) {
        var e = this, n = t.detail.value;
        return console.log(t, n), a({
            url: "/resumption/manager/get/applies",
            method: "POST",
            data: {
                applyStatus: this.data.currentTab,
                applyUserName: this.data.searchValue,
                companyId: this.data.companyId
            }
        }).then(function(a) {
            wx.hideLoading(), console.log("res", a);
            for (var t in a.tab) a.tab[t] > 0 && e.setData({
                currentTab: a.tab[t]
            });
            e.setData({
                "getarray.applies": a.applies,
                "getarray.tab": a.tab
            });
        }).catch(function(a) {
            wx.hideLoading(), console.error(a);
        });
    }
});