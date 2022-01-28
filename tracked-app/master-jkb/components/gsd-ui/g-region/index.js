require("../../../@babel/runtime/helpers/Arrayincludes");

var t = require("../../gsd-lib/utils/index").debounce;

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
            __type__: function(t) {
                return t;
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
            __type__: function(t) {
                return t;
            }
        },
        excludes: {
            type: Array,
            observer: function() {
                this._regionData ? this.initPicker() : this.initRegionData();
            },
            __type__: function(t) {
                return t;
            }
        }
    },
    data: {
        range: [],
        valueIndex: []
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
            var t = this.properties.value, e = this.data.range, n = "", i = this.getDataByParentCode("", 0);
            if (t.length > 0) {
                var r = this.findItemByName(i, t[0]);
                n = r ? r.code : i[0].code;
            } else n = i[0].code;
            e[0] = i, e = this.getRange(e, 0, n), this.setData({
                range: e
            }), t.length > 0 && this.setValueIndex();
        },
        getRange: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 ? arguments[2] : void 0, i = this.properties, r = i.level, a = i.value;
            if (e + 1 < r) {
                var o = this.getDataByParentCode(n, e + 1);
                t[e + 1] = o;
                var s = this.findItemByName(o, a[e + 1]), u = s && s.code || o[0].code;
                t = this.getRange(t, e + 1, u);
            }
            return t;
        },
        getDataByParentCode: function(t, e) {
            var n = this.properties, i = n.includes, r = n.excludes;
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
        setValueIndex: function() {
            var t = this.properties.value, e = this.data.range, n = t.map(function(t, n) {
                var i = (e[n] || []).map(function(t) {
                    return t.name;
                }).indexOf(t);
                return -1 === i ? 0 : i;
            });
            this.setData({
                valueIndex: n
            });
        },
        findItemByName: function(t, e) {
            var n;
            return t.some(function(t) {
                if (-1 !== t.name.indexOf(e)) return n = t, !0;
            }), n;
        },
        getRegionData: function() {
            var t = this;
            return this._retry = 3, Promise.all([ this.$request("https://fingertip-static.gdbs.gov.cn/static/city/1.json"), this.$request("https://fingertip-static.gdbs.gov.cn/static/city/2.json"), this.$request("https://fingertip-static.gdbs.gov.cn/static/city/3.json") ]).then(function(e) {
                return t.setStorage("region-data", e).catch(function(t) {
                    console.error(t);
                }), e;
            }).catch(function(e) {
                t._retry > 0 ? (t.getRegionData(), t._retry -= 1) : wx.showToast({
                    title: "服务繁忙",
                    icon: "none"
                });
            });
        },
        handleColumnChange: t(function(t) {
            var e = this.properties.level, n = t.detail, i = n.column, r = n.value, a = this.data, o = a.range, s = a.valueIndex, u = o[i][r].code, c = this.getRange(o, i, u);
            s[i] = r;
            for (var g = i + 1; g < e; g++) s[g] = 0;
            this.setData({
                range: c,
                valueIndex: s
            });
        }, 100),
        handleChange: function(t) {
            var e = t.detail.value, n = this.data.range, i = e.map(function(t, e) {
                return t = t || 0, n[e][t];
            });
            this.triggerEvent("change", {
                value: i
            });
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
});