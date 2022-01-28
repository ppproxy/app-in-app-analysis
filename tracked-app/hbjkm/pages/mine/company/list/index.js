var t = getApp(), e = t.Anim, o = (t.utils, t.mineStore, t.resetTab, t.request);

e.Page({
    usingComponents: {
        "action-sheet": "wx-miniprogram-actionsheet"
    },
    data: {
        tabIndex: "0",
        todoType: "affair",
        itemList: [],
        actionSheetHidden: !0,
        actionSheetItems: [ {
            value: "1",
            txt: "取消关注"
        } ],
        menu: ""
    },
    onLoad: function(t) {
        this.getData();
    },
    onShow: function() {},
    handleItem: function(t) {
        var e = this;
        console.log(t.currentTarget.dataset.item);
        var n = t.currentTarget.dataset.item, s = n.applyStatus, a = n.id;
        console.log(a), "1" == s && (console.log("111"), wx.showActionSheet({
            itemList: [ "解除关联" ],
            itemColor: "#DC143C",
            success: function(t) {
                console.log(t.tapIndex), 0 == t.tapIndex && wx.showModal({
                    title: "确定解除关联?",
                    content: "解除后不可恢复,请谨慎操作",
                    success: function(t) {
                        t.confirm ? (console.log("用户点击确定"), o({
                            url: "/resumption/user/apply/relieve/" + a,
                            method: "GET"
                        }).then(function(t) {
                            e.getData(), console.log(t);
                        }).catch(function(t) {
                            console.log(t);
                        })) : t.cancel && console.log("用户点击取消");
                    }
                });
            },
            fail: function(t) {
                console.log(t.errMsg);
            }
        }));
    },
    getData: function() {
        var t = this;
        o({
            url: "/resumption/user/apply/companies",
            method: "GET"
        }).then(function(e) {
            console.log("res", e), t.setData({
                itemList: e
            });
        }).catch(function(t) {
            console.log(t);
        });
    }
});