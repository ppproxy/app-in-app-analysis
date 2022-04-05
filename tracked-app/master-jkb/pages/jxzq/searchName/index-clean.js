function onLoad(a) {
        this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight,
            keyName: t.userInfo.gongName.name
        });
}
function handleChange(a) {
        var t = this;
        console.log(a);
        var n = a.detail.value;
        this.setData({
            value: a.detail.value,
            keyName: a.detail.value
        }), n.length < 4 ? this.setData({
            searchResultDatas: [],
            searchData: []
        }) : n.length >= 4 && (console.log(n.length), e({
            url: "/jingxinju/jkb/qrCode/queryCompany",
            method: "GET",
            data: {
                logtype: 1,
                companyName: this.data.value,
                startRow: "0",
                endRow: "40"
            }
        }).then(function(a) {
            wx.hideLoading(), console.log(a, n, t.data.value);
            for (var e = a.queryCompanyFeignDTO.date, o = [], s = 0; s < e.length; s++) o.push({
                key: t.data.value,
                name: e[s].org_NAME,
                value: e[s].orgCode,
                id: e[s].uniScid
            }), console.log(o);
            t.setData({
                searchData: o,
                searchResultDatas: o
            }), console.log(t.data.searchResultDatas, t.data.searchData), wx.hideLoading();
        }).catch(function(a) {
            wx.hideLoading();
        }));
}
function search() {
        wx.showLoading({
            title: "加载中",
            mask: !0
        }), t.userInfo.gongName = {
            key: "",
            name: this.data.keyName,
            value: "",
            id: ""
        }, wx.navigateBack({
            delta: 1
        }), wx.hideLoading();
}
function chooseSearchResultAction(a) {
        console.log(a, "dianji "), this.setData({
            keyName: a.currentTarget.dataset.id.name
        }), t.userInfo.gongName = a.currentTarget.dataset.id, wx.navigateBack({
            delta: 1
        });
}
