function bindRegionChange(t) {
        console.log(t), this.setData({
            region: t.detail.value,
            regionText: this.data.array[parseInt(t.detail.value)],
            list: [],
            pageNum: 1
        });
}
function handleCheck(t) {
        var e = t.currentTarget.dataset.index;
        console.log(t), this.setData(a({}, "list[".concat(e, "].check"), !this.data.list[e].check));
}
function handleTap(a) {
        console.log(a), wx.showLoading({
            title: "加载中...",
            mask: !0
        });
        var e = a.currentTarget.dataset.id.samplePointName;
        e.length > 10 && (e = e.substring(0, 10) + "...");
        var i = wx.getStorageSync("hsjc-search") || [];
        i.push(t({
            value: e
        }, a.currentTarget.dataset.id));
        var n = {}, s = i.reduce(function(t, a) {
            return !n[a.samplePointName] && (n[a.samplePointName] = t.push(a)), t;
        }, []);
        wx.setStorageSync("hsjc-search", s);
        var o = getCurrentPages();
        o[o.length - 2].data.params = a.currentTarget.dataset.id, this.setData({
            params: a.currentTarget.dataset.id
        }), wx.redirectTo({
            url: "/pages/hsjc/add-num/index"
        }), wx.hideLoading();
}
function searchInput(t) {
        if (t.detail.value != this.data.value) {
            this.setData({
                value: t.detail.value,
                pageNum: 1
            }), this.getList();
        }
}
function confirm(t) {}
function deteleAllLog() {
        var t = this;
        wx.showModal({
            title: "提示",
            content: "确定删除历史记录？",
            success: function(a) {
                console.log(a), a.confirm && (t.setData({
                    historyLogList: []
                }), wx.removeStorageSync("hsjc-search"));
            },
            fail: function() {}
        });
}
function clickLog(t) {
        var a = this;
        console.log("点击历史记录"), console.log(t);
        var e = {
            url: "/hsjc/jkb/appointment/getSampling",
            method: "get",
            disableModalWhenApiError: !0,
            data: {
                area: "",
                samplePointType: "2",
                instId: "",
                keyword: t.currentTarget.dataset.id.samplePointName,
                pageNum: this.data.pageNum,
                pageSize: "15"
            }
        };
        i(e).then(function(e) {
            a.setData({
                value: t.currentTarget.dataset.id.samplePointName
            }), a.setData({
                list: e.samplings
            }), wx.hideLoading(), 0 != e.samplings.length || 1 == a.data.pageNum ? (a.setData({
                pageNum: a.data.pageNum + 1
            }), console.log(e)) : wx.showToast({
                title: "已加载全部",
                icon: "none",
                duration: 2e3
            });
        }).catch(function() {
            wx.hideLoading();
        });
}
function onShow(t) {
        this.setData({
            historyLogList: wx.getStorageSync("hsjc-search") || []
        });
}
function getList(t) {
        var a = this;
        wx.showLoading({
            title: "加载中...",
            mask: !0
        });
        var e = {
            url: "/hsjc/jkb/appointment/getSampling",
            method: "get",
            disableModalWhenApiError: !0,
            data: {
                area: this.firstTap ? this.firstTap.name : "",
                subdistrictName: this.difangTap ? this.difangTap.name : "",
                samplePointType: "2",
                instId: "",
                keyword: this.data.value,
                pageNum: this.data.pageNum,
                pageSize: "15"
            }
        };
        i(e).then(function(e) {
            t ? a.setData({
                list: a.data.list.concat(e.samplings)
            }) : a.setData({
                list: e.samplings
            }), 0 != e.samplings.length || 1 == a.data.pageNum ? (a.setData({
                pageNum: a.data.pageNum + 1
            }), wx.hideLoading(), console.log(e)) : wx.showToast({
                title: "已加载全部",
                icon: "none",
                duration: 2e3
            });
        }).catch(function() {
            wx.hideLoading();
        });
}
function onReachBottom() {
        this.data.list.length > 0 && this.getList(1);
}
function getJson() {
        var t = this;
        n.request({
            url: s.hsjcProvince,
            method: "get"
        }).then(function(a) {
            console.log(a), t.firstData = {
                title: "区",
                data: a.data.child
            }, setTimeout(function() {
                t.setData({
                    range: [ t.firstData ]
                }), console.log(t.data.range);
            }, 300);
        });
}
function handleColumnChange(t) {
        var a = this;
        console.log(t);
        var e = t.detail, i = e.item, n = e.index;
        console.log(i, n), 0 === n && (this.difangData = {
            title: "街道",
            data: i.child
        }, this.firstTap = i, setTimeout(function() {
            a.setData({
                range: [ a.firstData, a.difangData ]
            });
        }, 300)), 1 === n && (this.difangTap = i, this.handleClose()), this.setData({
            regionText: i.name
        });
}
function bindopen() {
        this.setData({
            visible: !0
        });
}
function handleClose() {
        this.setData({
            visible: !1
        });
}
function handleChange() {
        (this.firstTap || this.difangTap) && (this.setData({
            pageNum: 1,
            list: []
        }), this.getList());
}
function onLoad() {
        this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight
        }), this.getJson();
}
function btnleft() {
        this.setData({
            showz: !1
        });
}
function btnright() {
        this.setData({
            showz: !1
        }), wx.navigateTo({
            url: "/pages/jxzq/message/index"
        });
}
function zwkf() {
        console.log(1), this.setData({
            showz: !0
        });
}
