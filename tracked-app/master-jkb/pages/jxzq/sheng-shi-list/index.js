var e = getApp(), t = (e.request, e.config, e.wxp);

e.userStore, e.dayjs;

Page({
    data: {
        list: []
    },
    onLoad: function(e) {
        this.getData();
    },
    guojia: function() {
        wx.navigateTo({
            url: "/pages/jxzq/search/index"
        });
    },
    getData: function() {
        var e = this, a = new Date().getTime();
        t.request({
            url: "https://xcx-static.yqgz.beijing.gov.cn/json/jkb/province.json",
            method: "GET"
        }).then(function(t) {
            wx.canIUse("reportPerformance") && wx.reportPerformance(1002, Number(new Date().getTime() - a), "https://xcx-static.yqgz.beijing.gov.cn/json/jkb/province.json"), 
            e.setData({
                list: t.data
            });
        }).catch(function(e) {
            console.log(e);
        });
    },
    detail: function(e) {
        var t = e.currentTarget.dataset.id;
        console.log(e.currentTarget.dataset.id), wx.navigateTo({
            url: "/pages/jxzq/sheng-shi-qu-lian-dong/index?name=" + t.name + "&value=" + t.value
        });
    }
});