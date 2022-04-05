function onLoad(e) {
        this.getData();
}
function guojia() {
        wx.navigateTo({
            url: "/pages/jxzq/search/index"
        });
}
function getData() {
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
}
function detail(e) {
        var t = e.currentTarget.dataset.id;
        console.log(e.currentTarget.dataset.id), wx.navigateTo({
            url: "/pages/jxzq/sheng-shi-qu-lian-dong/index?name=" + t.name + "&value=" + t.value
        });
}
