var a = getApp(), t = a.Anim, e = (a.utils, a.mineStore, a.resetTab, a.request), n = a.Event;

t.Page({
    data: {
        activeKey: "0",
        applyStatus: 0,
        applyUserName: "",
        companyId: "",
        searchValue: "",
        applies: [],
        errorpage: !1
    },
    tabChange: function(a) {
        if (this.setData({
            activeKey: a.detail.value.key
        }), this.data.searchValue) this.getSrachData(this.data.searchValue); else {
            var t = {
                applyStatus: a.detail.value.key,
                applyUserName: this.data.searchValue,
                companyId: this.data.companyId
            };
            this.getData(t);
        }
    },
    onLoad: function(a) {
        var t = this;
        this.checkcompanyId(a.gridPointId).then(function(a) {
            var e = {
                applyStatus: 0,
                applyUserName: t.data.searchValue,
                companyId: t.data.companyId
            };
            t.getData(e);
        });
    },
    backtonew: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    checkcompanyId: function(a) {
        var t = this;
        return new Promise(function(n, i) {
            e({
                url: "/resumption/point/company/" + a,
                method: "GET"
            }).then(function(a) {
                a ? (t.setData({
                    companyId: a.id
                }), n()) : (t.setData({
                    errorpage: !0
                }), wx.setNavigationBarTitle({
                    title: "提示"
                })), wx.hideLoading();
            }).catch(function(a) {
                console.error(a), wx.hideLoading();
            });
        });
    },
    handleItem: function(a) {
        var t = this, e = a.target.dataset.item.applyUserName, n = a.target.dataset.item.id;
        wx.showModal({
            content: "\r\n是否通过" + e + "的关联申请",
            confirmText: "通过",
            confirmColor: "#4293F4",
            cancelText: "拒绝",
            success: function(a) {
                var e = {
                    applyIds: [ n ],
                    applyStatus: 0
                };
                a.confirm ? (e.applyStatus = 1, console.log("通过")) : a.cancel && (e.applyStatus = 2, 
                console.log("拒绝")), t.checkList(e);
            }
        });
    },
    getData: function(a) {
        var t = this;
        return wx.showLoading(), e({
            url: "/resumption/manager/get/applies",
            method: "POST",
            data: a
        }).then(function(a) {
            t.setData({
                applies: a.applies,
                tab: a.tab
            }, function() {
                n.dispatch("g-tabs__init");
            }), wx.hideLoading();
        }).catch(function(a) {
            console.error(a), wx.hideLoading();
        });
    },
    checkList: function(a) {
        var t = this;
        wx.showLoading();
        var n = this;
        return e({
            url: "/resumption/manager/update/apply/status",
            method: "POST",
            data: a
        }).then(function(a) {
            var e = {
                applyStatus: t.data.activeKey,
                applyUserName: t.data.searchValue,
                companyId: t.data.companyId
            };
            wx.hideLoading(), n.getData(e);
        }).catch(function(a) {
            var e = {
                applyStatus: t.data.activeKey,
                applyUserName: t.data.searchValue,
                companyId: t.data.companyId
            };
            wx.hideLoading(), console.error(a), n.getData(e);
        });
    },
    handleConfirm: function(a) {
        this.getSrachData(this.data.searchValue);
    },
    handleChange: function(a) {
        this.setData({
            searchValue: a.detail.value
        }), this.getSrachData(a.detail.value);
    },
    getSrachData: function(a) {
        var t = this;
        return e({
            url: "/resumption/manager/get/applies",
            method: "POST",
            data: {
                applyStatus: this.data.activeKey,
                applyUserName: a,
                companyId: this.data.companyId
            }
        }).then(function(a) {
            wx.hideLoading(), console.log("res", a), t.setData({
                applies: a.applies,
                tab: a.tab
            }, function() {
                n.dispatch("g-tabs__init");
            });
        }).catch(function(a) {
            wx.hideLoading(), console.error(a);
        });
    },
    bindChange: function(a) {
        var t = this, e = a.target.dataset.item.id, n = this.data.activeKey;
        "1" == n && wx.showActionSheet({
            itemList: [ "解除关联" ],
            cancelColor: "#4293F4",
            success: function(a) {
                console.log(a.tapIndex);
                var n = {
                    applyIds: [ e ],
                    applyStatus: 2
                };
                t.checkList(n);
            },
            fail: function(a) {
                console.log(a.errMsg);
            }
        }), "2" == n && wx.showActionSheet({
            itemList: [ "建立关联" ],
            success: function(a) {
                var n = {
                    applyIds: [ e ],
                    applyStatus: 1
                };
                t.checkList(n), console.log(a.tapIndex);
            },
            fail: function(a) {
                console.log(a.errMsg);
            }
        });
    }
});