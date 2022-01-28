var e = require("../../gsd-lib/utils/index").debounce, t = {
    range: [],
    valueIndex: []
};

Component({
    _regionData: void 0,
    _retry: 3,
    properties: {
        level: {
            type: Number,
            value: 3
        },
        value: {
            type: Array,
            value: [],
            observer: function() {
                this._regionData ? this.initPicker() : this.initRegionData();
            },
            __type__: function(e) {
                return e;
            }
        },
        type: {
            type: String,
            value: ""
        },
        includes: {
            type: Array,
            observer: function() {
                this._regionData ? this.initPicker() : this.initRegionData();
            },
            __type__: function(e) {
                return e;
            }
        },
        excludes: {
            type: Array,
            observer: function() {
                this._regionData ? this.initPicker() : this.initRegionData();
            },
            __type__: function(e) {
                return e;
            }
        }
    },
    data: t,
    methods: {
        initRegionData: function() {
            var e = this;
            return this.getStorage("region-data").then(function(t) {
                e._regionData = t, e.initPicker();
            }).catch(function(t) {
                console.log("init region data error", t), e.getRegionData().then(function(t) {
                    e._regionData = t, e.initPicker();
                });
            });
        },
        initPicker: function() {
            var e = this.properties.value, t = this.data.range, n = "", i = this.getDataByParentCode("", 0);
            if (e.length > 0) {
                var r = this.findItemByName(i, e[0]);
                n = r ? r.code : i[0].code;
            } else n = i[0].code;
            t[0] = i, t = this.getRange(t, 0, n), this.setData({
                range: t
            }), e.length > 0 && this.setValueIndex();
        },
        getRange: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments[2], i = this.properties, r = i.level, a = i.value;
            if (t + 1 < r) {
                var o = this.getDataByParentCode(n, t + 1);
                e[t + 1] = o;
                var u = this.findItemByName(o, a[t + 1]), s = u && u.code || o[0].code;
                e = this.getRange(e, t + 1, s);
            }
            return e;
        },
        getDataByParentCode: function(e, t) {
            var n = this.properties, i = n.includes, r = n.excludes;
            return this._regionData[t].filter(function(n) {
                return !(t > 0) || n.parent_code === e;
            }).filter(function(e) {
                return !i[t] || i[t].some(function(t) {
                    return e.name === t;
                });
            }).filter(function(e) {
                return !r[t] || r[t].every(function(t) {
                    return e.name !== t;
                });
            });
        },
        setValueIndex: function() {
            var e = this.properties.value, t = this.data.range, n = e.map(function(e, n) {
                var i = (t[n] || []).map(function(e) {
                    return e.name;
                }).indexOf(e);
                return -1 === i ? 0 : i;
            });
            this.setData({
                valueIndex: n
            });
        },
        findItemByName: function(e, t) {
            var n = void 0;
            return e.some(function(e) {
                if (-1 !== e.name.indexOf(t)) return n = e, !0;
            }), n;
        },
        getRegionData: function() {
            var e = this;
            return this._retry = 3, Promise.all([ this.$request("https://imgcache.qq.com/cloudsa3/gsd/region/1.json"), this.$request("https://imgcache.qq.com/cloudsa3/gsd/region/2.json"), this.$request("https://imgcache.qq.com/cloudsa3/gsd/region/3.json") ]).then(function(t) {
                return e.setStorage("region-data", t).catch(function(e) {
                    console.error(e);
                }), t;
            }).catch(function(t) {
                e._retry > 0 ? (e.getRegionData(), e._retry -= 1) : wx.showToast({
                    title: "服务繁忙",
                    icon: "none"
                });
            });
        },
        handleColumnChange: e(function(e) {
            var t = this.properties.level, n = e.detail, i = n.column, r = n.value, a = this.data, o = a.range, u = a.valueIndex, s = o[i][r].code, c = this.getRange(o, i, s);
            u[i] = r;
            for (var g = i + 1; g < t; g++) u[g] = 0;
            this.setData({
                range: c,
                valueIndex: u
            });
        }, 100),
        handleChange: function(e) {
            var t = e.detail.value, n = this.data.range, i = t.map(function(e, t) {
                return e = e || 0, n[t][e];
            });
            this.triggerEvent("change", {
                value: i
            });
        },
        checkSpecial: function(e) {
            return [ "4419", "4420" ].some(function(t) {
                return -1 !== e.indexOf(t);
            });
        },
        getStorage: function(e) {
            return new Promise(function(t, n) {
                wx.getStorage({
                    key: e,
                    success: function(e) {
                        t(e.data);
                    },
                    fail: function(e) {
                        n(e);
                    }
                });
            });
        },
        setStorage: function(e, t) {
            return new Promise(function(n, i) {
                wx.setStorage({
                    key: e,
                    data: t,
                    success: function(e) {
                        n(e);
                    },
                    fail: function(e) {
                        i(e);
                    }
                });
            });
        },
        $request: function(e) {
            return new Promise(function(t, n) {
                wx.request({
                    url: e,
                    success: function(e) {
                        t(e.data);
                    },
                    fail: function(e) {
                        n(e);
                    }
                });
            });
        }
    }
});