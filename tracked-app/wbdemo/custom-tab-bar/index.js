var e = require("../81CC8A51ACE07ADFE7AAE2566711A2D7.js");

Component({
    data: {
        selected: 0,
        color: "#333333",
        selectedColor: "#FF8200",
        list: [ {
            pagePath: "pages/index/index",
            text: "热搜",
            iconPath: "/assets/icons/icon_realtimehot.png",
            selectedIconPath: "/assets/icons/icon_realtimehot_selected.png"
        }, {
            pagePath: "pages/topic/index",
            text: "热议",
            iconPath: "/assets/icons/icon_topic.png",
            selectedIconPath: "/assets/icons/icon_topic_selected.png"
        }, {
            pagePath: "pages/hotflow/index",
            text: "看点",
            iconPath: "/assets/icons/icon_hotflow.png",
            selectedIconPath: "/assets/icons/icon_hotflow_selected.png"
        }, {
            pagePath: "pages/goods/index",
            text: "潮物",
            iconPath: "/assets/icons/icon_goods.png",
            selectedIconPath: "/assets/icons/icon_goods_selected.png"
        } ]
    },
    methods: {
        switchTab: function(t) {
            var o = t.currentTarget.dataset, s = o.path;
            "pages/hotflow/index" === s ? e.goToWeiboHotProgram("click_tabbar_go_hotflow") : s ? (this.setData({
                selected: o.index
            }), wx.switchTab({
                url: "../../" + s
            })) : this.goToWeiboMiniProgram();
        },
        goToWeiboMiniProgram: function() {
            wx.navigateToMiniProgram({
                appId: "wx9074de28009e1111",
                path: "pages/feed/feed",
                success: function() {},
                fail: function() {}
            });
        }
    }
});