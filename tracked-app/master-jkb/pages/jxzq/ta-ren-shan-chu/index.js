var e = getApp(), t = e.request, a = (e.config, e.wxp, e.userStore, e.dayjs, require("../../../utils/util")), i = (a.apiErrorAndNavigateBack, 
a.apiError), n = require("../../../utils/customErrors"), s = require("../../../utils/mtaTarget.js").newspapers;

Page({
    data: {
        title_disabled: !0,
        management_good: !1,
        middlearr: [],
        items: [],
        windowHeight: ""
    },
    onLoad: function(e) {
        this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight
        }), this.res();
    },
    management: function() {
        this.setData({
            management_good: !0
        });
    },
    finish_management: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    select: function(e) {
        console.log(e);
        var t = [], a = this.data.items, i = e.currentTarget.dataset.id;
        a[i].checked = !a[i].checked;
        for (var n = 0; n < this.data.items.length; n++) a[n].checked && t.push(a[n].id);
        console.log(t), console.log(a), this.setData({
            items: a,
            middlearr: t
        }), -1 != this.data.items.findIndex(function(e) {
            return !0 === e.checked;
        }) ? this.setData({
            management_good: !0
        }) : this.setData({
            management_good: !1
        });
    },
    deleteitem: function() {
        var e = this, t = e.data.items, a = [];
        wx.showModal({
            title: "提示",
            content: "是否要删除？",
            showCancel: !0,
            confirmText: "确定",
            success: function(i) {
                if (i.confirm) {
                    for (var n = [], s = 0; s < t.length; s++) 0 == t[s].checked ? a.push(t[s].id) : n.push(t[s].id);
                    e.getDelete(n), console.log("用户点击确定");
                } else i.cancel && console.log("用户点击取消");
            }
        });
    },
    getDelete: function(e) {
        var a = this;
        s({
            eventId: "DeleteOthers_tap_Submitted"
        }), console.log("删除", e);
        var o = {
            url: "/jingxinju/jkb/other/others/del",
            method: "post",
            data: e
        };
        t(o).then(function(e) {
            console.log(e), a.setData({
                management_good: !1
            }), a.res();
        }).catch(function(e) {
            i(o, e, n.shixiang.otherDel.UncaughtExp);
        });
    },
    res: function() {
        var e = this, a = {
            url: "/jingxinju/jkb/other/others/list",
            method: "GET",
            data: {}
        };
        t(a).then(function(t) {
            if (console.log(t), null != t.othersList && t.othersList) {
                var a = t.othersList.map(function(e, t) {
                    return {
                        id: e.id,
                        name: t,
                        checked: !1,
                        userName: e.userName,
                        hideIdCard: e.hideIdCard,
                        activeStatus: e.activeStatus,
                        checkFaceTime: e.checkFaceTime,
                        delFlag: e.delFlag
                    };
                });
                console.log(a), e.setData({
                    items: a
                });
            } else e.setData({
                items: []
            });
        }).catch(function(e) {
            i(a, e, n.shixiang.otherList.UncaughtExp);
        });
    }
});