function e(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = t, e;
}

var a = getApp(), t = a.Anim, n = (a.Event, a.resetTab, a.config), o = (a.dayjs, 
a.request, a.requestHb), i = (a.systemInfo, a.wxp), d = require("../../services/health-code.js");

require("../../services/map.js");

t.Page({
    store: function(e) {
        return {
            userInfo: e.user.userInfo
        };
    },
    data: {
        selfForm: {
            identityType: 1
        },
        regionRange: [],
        cardTypeRange: [ {
            name: "商超餐饮",
            value: 100
        }, {
            name: "教育机构",
            value: 101
        }, {
            name: "医疗卫生机构",
            value: 102
        }, {
            name: "企业",
            value: 103
        }, {
            name: "居民小区",
            value: 104
        }, {
            name: "公共管理和服务场所",
            value: 105
        }, {
            name: "交通卡口",
            value: 106
        }, {
            name: "公共交通工具",
            value: 2
        }, {
            name: "车站机场码头",
            value: 107
        }, {
            name: "其他",
            value: 1
        } ],
        flag: 1,
        id: "",
        uid: "",
        name: "",
        identity: "",
        phone: "",
        gate_name: "",
        gate_type: 100,
        xzqhmc: "",
        xzqhdm: "",
        longitude: "",
        latitude: "",
        address: "",
        car_no: "",
        createTime: "",
        disabled: "",
        bool: !1
    },
    handleRegionColumnChange: function(e) {
        var a = e.detail.item, t = e.detail.index;
        console.log(e), console.log("当前是第几级", t), 2 === t ? this.handleRegionClose() : 0 == t ? this.getOtherRegionData(a, t + 1) : this.handleRegionClose();
    },
    handleRegionClose: function() {
        this.setData({
            showRegionPicker: !1
        });
    },
    handleRegionChange: function(a) {
        console.log("+++++++++++++++", a);
        var t = a.detail.value;
        if (2 === t.length) {
            var n, o = t[0].regionName + t[1].regionName, i = t[1].regionCode.substring(0, 6);
            this.setData((n = {
                cityone: t[0].regionName,
                areaone: t[1].regionName,
                xzqhdm: i,
                xzqhmc: o
            }, e(n, this.regionPickerForm + ".regionData", t), e(n, this.regionPickerForm + ".street", t.map(function(e) {
                return e.regionName;
            }).join("")), n));
        }
    },
    handleOpenRegion: function(e) {
        this.regionPickerForm = e.target.dataset.form, this.setData({
            showRegionPicker: !0,
            regionRange: this.data.regionRange.slice(0, 1)
        });
    },
    handleFormChange: function(e) {
        this.setData({
            flag: e.detail.value,
            gate_type: e.detail.value
        });
    },
    addre: function(e) {
        console.log(e.detail.value), this.setData({
            address: e.detail.value
        });
    },
    car: function(e) {
        this.setData({
            car_no: e.detail.value
        });
    },
    getRegionData: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, t = this;
        console.log("调用区"), wx.showLoading(), console.log(e.value.regionCode), this.data.place.ins.forEach(function(a, n) {
            a.id == e.value.regionCode && t.setData({
                placesec: a
            });
        });
        var n = this.data.regionRange.slice(0, a);
        console.log("看一下数据", n), void 0 == t.data.placesec.ins ? (t.handleRegionClose(), 
        wx.hideLoading()) : (n[a] = {
            title: 0 === a ? "省/直辖市" : 1 === a ? "市/区" : "区",
            data: t.data.placesec.ins.map(function(e) {
                return {
                    name: e.name,
                    value: {
                        regionName: e.name,
                        regionCode: e.id
                    },
                    regionList: e.regionList
                };
            })
        }, this.setData({
            regionRange: n
        }, function() {
            return wx.hideLoading();
        }));
    },
    getRegionCity: function() {
        var e = this;
        wx.showLoading({
            title: "努力加载中"
        }), i.request({
            url: n.cdnDomain + "/hbjkm/hbxzqh.json?t=" + Date.now()
        }).then(function(a) {
            e.setData({
                tablelist: a.data
            }), console.log("进页面就调用", a);
            var t = e.data.regionRange.slice(0, 0);
            console.log("看一下数据", t), t[0] = {
                title: "省/直辖市",
                data: a.data.map(function(e) {
                    return {
                        name: e.name,
                        value: {
                            regionName: e.name,
                            regionCode: e.id
                        },
                        regionList: e.regionList
                    };
                })
            }, e.setData({
                regionRange: t
            }, function() {
                return wx.hideLoading();
            });
        });
    },
    getOtherRegionData: function(e, a) {
        var t = this;
        wx.showLoading(), console.log("下一级的数据是", e.value.regionCode), this.data.tablelist.forEach(function(a, n) {
            a.id == e.value.regionCode && t.setData({
                place: a
            });
        }), console.log("调用市", t.data.place);
        var n = this.data.regionRange.slice(0, a);
        console.log("看一下数据", n), n[a] = {
            title: 0 === a ? "省/直辖市" : 1 === a ? "市/区" : "区",
            data: t.data.place.ins.map(function(e) {
                return {
                    name: e.name,
                    value: {
                        regionName: e.name,
                        regionCode: e.id
                    },
                    regionList: e.regionList
                };
            })
        }, this.setData({
            regionRange: n
        }, function() {
            return wx.hideLoading();
        });
    },
    inp: function(e) {
        this.setData({
            gate_name: e.detail.value
        });
    },
    bindSelectData: function(e) {
        console.log(e), this.setData({
            address: e.detail.address
        });
    },
    go: function() {
        var e = this, a = this;
        a.setData({
            bool: !0
        }), setTimeout(function() {
            a.setData({
                bool: !1
            });
        }, 2e3), this.data.gate_name ? this.data.gate_type ? 2 != this.data.gate_type ? this.data.xzqhmc ? this.data.address ? o({
            url: "/hbjkm-traffic-gate/trafficgate/add",
            method: "POST",
            data: {
                uid: this.data.userInfo.uid,
                gateName: this.data.gate_name,
                gateType: this.data.gate_type,
                xzqhmc: this.data.xzqhmc,
                xzqhdm: this.data.xzqhdm,
                address: this.data.address
            }
        }).then(function(a) {
            o({
                url: "/hbjkm-traffic-gate/trafficgate/query/" + e.data.userInfo.uid,
                method: "POST"
            }).then(function(a) {
                e.setData({
                    gateName: a.data.gateName,
                    carNo: a.data.carNo,
                    gateType: a.data.gateType,
                    name: a.data.name,
                    phone: a.data.phone,
                    id: a.data.id,
                    address: a.data.address,
                    havePlace: !0
                }), wx.redirectTo({
                    url: "/pages/my-placeCode/my-placeCode?gateName=" + e.data.gateName + "&carNo=" + e.data.carNo + "&gateType=" + e.data.gateType + "&name=" + e.data.name + "&phone=" + e.data.phone + "&id=" + e.data.id + "&address=" + e.data.address
                });
            });
        }) : wx.showToast({
            title: "详细地址不能为空",
            icon: "none",
            duration: 3e3
        }) : wx.showToast({
            title: "所在区域不能为空",
            icon: "none",
            duration: 3e3
        }) : 2 == this.data.gate_type && (this.data.car_no ? o({
            url: "/hbjkm-traffic-gate/trafficgate/add",
            method: "POST",
            data: {
                uid: this.data.userInfo.uid,
                gateName: this.data.gate_name,
                gateType: this.data.gate_type,
                carNo: this.data.car_no
            }
        }).then(function(a) {
            o({
                url: "/hbjkm-traffic-gate/trafficgate/query/" + e.data.userInfo.uid,
                method: "POST"
            }).then(function(a) {
                e.setData({
                    gateName: a.data.gateName,
                    carNo: a.data.carNo,
                    gateType: a.data.gateType,
                    name: a.data.name,
                    phone: a.data.phone,
                    id: a.data.id,
                    address: a.data.address,
                    havePlace: !0
                }), wx.redirectTo({
                    url: "/pages/my-placeCode/my-placeCode?gateName=" + e.data.gateName + "&carNo=" + e.data.carNo + "&gateType=" + e.data.gateType + "&name=" + e.data.name + "&phone=" + e.data.phone + "&id=" + e.data.id + "&address=" + e.data.address
                });
            });
        }) : wx.showToast({
            title: "车牌号码不能为空",
            icon: "none",
            duration: 3e3
        })) : wx.showToast({
            title: "场所类型不能为空",
            icon: "none",
            duration: 3e3
        }) : wx.showToast({
            title: "场所名称不能为空",
            icon: "none",
            duration: 3e3
        });
    },
    onLoad: function(e) {
        var a = this;
        d.realnameUser(this.data.userInfo.uid).then(function(e) {
            console.log(e), a.setData({
                name: e.realnameAut.name,
                phone: e.realnameAut.phone,
                identity: e.realnameAut.identity
            });
        }), this.getRegionCity();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});