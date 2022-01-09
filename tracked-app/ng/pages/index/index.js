getApp(), require("../../utils/util.js");

Page({
    data: {},
    onLoad: function() {},
    gotoExercise: function(o) {
        wx.setStorageSync("choose", "exercise"), "未选择" == wx.getStorageSync("userInfo").workType ? wx.navigateTo({
            url: "/pages/worktype/worktype"
        }) : wx.navigateTo({
            url: "/pages/questionlist/questionlist"
        });
    },
    gotoExam: function(o) {
        wx.setStorageSync("choose", "exam"), "未选择" == wx.getStorageSync("userInfo").workType ? wx.navigateTo({
            url: "/pages/worktype/worktype"
        }) : wx.navigateTo({
            url: "/pages/questionlist/questionlist"
        });
    },
    gotoRank: function(o) {
        wx.navigateTo({
            url: "/pages/rank/rank"
        });
    },
    goCompetitionOne: function() {
        wx.navigateTo({
            url: "/pages/random/random?question=competition1"
        });
    },
    goCompetitionTwo: function() {
        wx.navigateTo({
            url: "/pages/random/random?question=competetion2"
        });
    }
});