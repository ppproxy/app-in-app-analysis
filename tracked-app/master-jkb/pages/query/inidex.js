var t = require("../../@babel/runtime/helpers/objectSpread2"), a = require("../../@babel/runtime/helpers/defineProperty"), e = getApp(), i = e.request, n = e.wxp, s = e.config;

Page({
    data: {
        historyLogList: [],
        region: "",
        regionText: "请选择",
        list: [],
        array: [ "东城区", "西城区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "怀柔区", "平谷区", "密云区", "延庆区", "经开区" ],
        value: "",
        pageNum: 1
    },
    bindRegionChange: function(t) {
        console.log(t), this.setData({
            region: t.detail.value,
            regionText: this.data.array[parseInt(t.detail.value)],
            list: [],
            pageNum: 1
        });
    },
    handleCheck: function(t) {
        var e = t.currentTarget.dataset.index;
        console.log(t), this.setData(a({}, "list[".concat(e, "].check"), !this.data.list[e].check));
    },
    handleTap: function(a) {
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
    },
    searchInput: function(t) {
        if (t.detail.value != this.data.value) {
            this.setData({
                value: t.detail.value,
                pageNum: 1
            }), this.getList();
        }
    },
    confirm: function(t) {},
    deteleAllLog: function() {
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
    },
    clickLog: function(t) {
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
    },
    onShow: function(t) {
        this.setData({
            historyLogList: wx.getStorageSync("hsjc-search") || []
        });
    },
    getList: function(t) {
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
    },
    onReachBottom: function() {
        this.data.list.length > 0 && this.getList(1);
    },
    getJson: function() {
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
    },
    handleColumnChange: function(t) {
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
    },
    bindopen: function() {
        this.setData({
            visible: !0
        });
    },
    handleClose: function() {
        this.setData({
            visible: !1
        });
    },
    handleChange: function() {
        (this.firstTap || this.difangTap) && (this.setData({
            pageNum: 1,
            list: []
        }), this.getList());
    },
    onLoad: function() {
        this.setData({
            windowHeight: wx.getSystemInfoSync().windowHeight
        }), this.getJson();
    },
    btnleft: function() {
        this.setData({
            showz: !1
        });
    },
    btnright: function() {
        this.setData({
            showz: !1
        }), wx.navigateTo({
            url: "/pages/jxzq/message/index"
        });
    },
    zwkf: function() {
        console.log(1), this.setData({
            showz: !0
        });
    }
});