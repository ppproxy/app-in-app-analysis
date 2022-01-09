require("../../utils/util.js");

Page({
    data: {
        avatarUrl: "",
        department: "",
        nickName: "",
        realName: "",
        score: null,
        rank: null,
        workType: "",
        level: null,
        levelStr: ""
    },
    onLoad: function(e) {},
    onReady: function() {},
    onShow: function() {
        var e = wx.getStorageSync("userInfo");
        this.setData({
            avatarUrl: e.avatarUrl,
            nickName: e.nickName,
            realName: e.realName,
            department: e.department,
            score: e.score,
            rank: e.rank,
            workType: e.workType,
            level: e.level
        });
    },
    updateUserInfo: function() {
        wx.navigateTo({
            url: "/pages/update/update"
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    onTabItemTap: function(e) {}
});