function onLoad(a) {
        console.log(a.id), wx.setNavigationBarTitle({
            title: "国家政务服务平台信息查询"
        }), this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight
        });
}
function handleChange(a) {
        var t = this;
        console.log(a);
        var s = a.detail.value;
        if (this.setData({
            value: a.detail.value,
            keyName: a.detail.value
        }), "" != s) {
            console.log(s.length);
            var r = new Date().getTime(), n = {
                url: "https://xcx-static.yqgz.beijing.gov.cn/json/jkb/jkb-country.json",
                method: "GET"
            };
            e.request(n).then(function(a) {
                wx.canIUse("reportPerformance") && wx.reportPerformance(1002, Number(new Date().getTime() - r), n.url), 
                console.log(a.data);
                for (var e = a.data, s = [], o = 0, i = 0; i < e.length; i++) {
                    if (o >= 10) return t.setData({
                        searchData: s,
                        searchResultDatas: s
                    });
                    -1 != e[i].name.indexOf(t.data.value) && (s.push({
                        key: t.data.value,
                        name: e[i].name,
                        value: e[i].id,
                        arrName: e[i].name
                    }), o++);
                }
                s.length < 1 ? t.setData({
                    flag: !0
                }) : t.setData({
                    searchData: s,
                    searchResultDatas: s,
                    flag: !1
                }), console.log(t.data.searchResultDatas, t.data.searchData);
            }).catch(function(a) {});
        } else this.setData({
            searchResultDatas: [],
            searchData: [],
            flag: !1
        });
}
function search() {
        this.setData({
            keyName: ""
        }), t.userInfo.gongName = "";
}
function chooseSearchResultAction(a) {
        console.log(a, "dianji "), wx.navigateBack({
            delta: 2
        }), this.setData({
            keyName: a.currentTarget.dataset.id.name
        }), t.userInfo.gongName = a.currentTarget.dataset.id;
}
