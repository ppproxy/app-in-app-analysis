var t;

!function(t) {
    t[t.province = 1] = "province", t[t.city = 2] = "city", t[t.district = 3] = "district";
}(t || (t = {}));

var e = {
    _range: []
}, n = !1;

Component({
    _regionData: void 0,
    _retry: 3,
    properties: {
        visible: Boolean,
        type: {
            type: String,
            value: "district",
            observer: function() {
                this.initRegionData();
            }
        },
        value: {
            type: Array,
            value: [],
            observer: function() {
                this.initRegionData();
            },
            __type__: function(t) {
                return t;
            }
        },
        includes: {
            type: Array,
            observer: function() {
                this.initRegionData();
            },
            __type__: function(t) {
                return t;
            }
        },
        excludes: {
            type: Array,
            observer: function() {
                this.initRegionData();
            },
            __type__: function(t) {
                return t;
            }
        }
    },
    data: e,
    ready: function() {
        this.initRegionData();
    },
    methods: {
        initRegionData: function() {
            var t = this;
            return this.getStorage("region-data").then(function(e) {
                t._regionData = e, t.initPicker();
            }).catch(function(e) {
                console.log("init region data error", e), t.getRegionData().then(function(e) {
                    t._regionData = e, t.initPicker();
                });
            });
        },
        initPicker: function() {
            var t = this.properties, e = (t.type, t.value);
            if (console.log("value", e), !e.length) {
                var n = this.getDataByParentCode();
                this.setData({
                    _range: [ {
                        title: "省份",
                        data: n
                    } ]
                });
            }
        },
        getRange: function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments[2], r = this.properties, a = r.type, o = r.value, s = t[a];
            if (n + 1 < parseInt(s)) {
                var c = this.getDataByParentCode(i, n + 1);
                e[n + 1] = c;
                var u = this.findItemByName(c, o[n + 1]), g = u && u.code || c[0].code;
                e = this.getRange(e, n + 1, g);
            }
            return e;
        },
        getDataByParentCode: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = this.properties, i = n.includes, r = n.excludes;
            return this._regionData[e].filter(function(n) {
                return !(e > 0) || n.parent_code === t;
            }).filter(function(t) {
                return !i[e] || i[e].some(function(e) {
                    return t.name === e;
                });
            }).filter(function(t) {
                return !r[e] || r[e].every(function(e) {
                    return t.name !== e;
                });
            });
        },
        findItemByName: function(t, e) {
            var n = void 0;
            return t.some(function(t) {
                if (-1 !== t.name.indexOf(e)) return n = t, !0;
            }), n;
        },
        getRegionData: function() {
            var t = this;
            return n = !0, this._retry = 3, Promise.all([ this.$request("https://imgcache.qq.com/cloudsa3/gsd/region/1.json"), this.$request("https://imgcache.qq.com/cloudsa3/gsd/region/2.json"), this.$request("https://imgcache.qq.com/cloudsa3/gsd/region/3.json") ]).then(function(e) {
                return n = !1, t.setStorage("region-data", e).catch(function(t) {
                    console.error(t);
                }), e;
            }).catch(function(e) {
                n = !1, t._retry > 0 ? (t.getRegionData(), t._retry -= 1) : wx.showToast({
                    title: "服务繁忙",
                    icon: "none"
                });
            });
        },
        handleColumnChange: function(e) {
            var n = this.properties.type, i = this.data._range, r = e.detail, a = r.index, o = r.item;
            if (parseInt(a) < parseInt(t[n]) - 1) {
                var s = this.getDataByParentCode(o.code, a + 1);
                i[a + 1] = {
                    title: a + 1 === 1 ? "城市" : "区/县",
                    data: s
                };
                var c = i.slice(0, a + 2);
                this.setData({
                    _range: c
                });
            } else this.handleClose();
        },
        handleChange: function(e) {
            var n = this.properties.type, i = t[n];
            e.detail.value.length === i && this.triggerEvent("change", e.detail);
        },
        checkSpecial: function(t) {
            return [ "4419", "4420" ].some(function(e) {
                return -1 !== t.indexOf(e);
            });
        },
        getStorage: function(t) {
            return new Promise(function(e, n) {
                wx.getStorage({
                    key: t,
                    success: function(t) {
                        e(t.data);
                    },
                    fail: function(t) {
                        n(t);
                    }
                });
            });
        },
        setStorage: function(t, e) {
            return new Promise(function(n, i) {
                wx.setStorage({
                    key: t,
                    data: e,
                    success: function(t) {
                        n(t);
                    },
                    fail: function(t) {
                        i(t);
                    }
                });
            });
        },
        handleClose: function() {
            this.triggerEvent("close");
        },
        $request: function(t) {
            return new Promise(function(e, n) {
                wx.request({
                    url: t,
                    success: function(t) {
                        e(t.data);
                    },
                    fail: function(t) {
                        n(t);
                    }
                });
            });
        }
    }
}), module.exports = {};