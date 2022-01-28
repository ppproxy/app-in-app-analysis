Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../../gsd-lib/map/index"), e = require("../../gsd-lib/event/index");

Component({
    externalClasses: [ "component-item-class", "title-item-class" ],
    properties: {
        list: {
            type: Array,
            observer: function() {
                this.resetTab();
            },
            __type__: function(t) {
                return t;
            }
        },
        mode: {
            type: String,
            value: "navigator"
        },
        showMap: {
            type: Boolean,
            value: !0
        },
        activeId: {
            type: Number,
            observer: function(t) {
                this.setActiveId(t);
            }
        },
        emptyText: {
            type: String,
            value: "当前范围内无网点"
        },
        loadUnit: {
            type: String,
            value: "district"
        },
        regionLevel: {
            type: Number,
            value: 3
        },
        showSelect: {
            type: Boolean,
            value: !0
        },
        canShowMap: {
            type: Boolean,
            value: !0
        },
        regionIncludes: Array,
        regionExcludes: Array
    },
    data: {
        _regionValue: [],
        _tabActiveKey: "list",
        _mapHeight: 0,
        _emptyListHeight: 0,
        _activeIndex: 0,
        _activeId: 0,
        _position: {
            longitude: 113.26436,
            latitude: 23.12908
        }
    },
    ready: function() {
        this.initLocation(), this.initLayout(), this.setActiveId();
    },
    methods: {
        resetTab: function() {
            e.dispatch("g-tabs__resetStyle");
        },
        initLocation: function() {
            var t = this;
            wx.getLocation({
                type: "gcj02",
                success: function(e) {
                    console.log("成功获取当前定位", e);
                    var i = {
                        longitude: e.longitude,
                        latitude: e.latitude
                    };
                    t.setData({
                        _position: i
                    });
                }
            });
        },
        setActiveId: function(t) {
            var e = this, i = this.properties.list;
            if (!i || i.length <= 0) return !1;
            t = t || i[0].id, this.setData({
                _activeId: t
            }, function() {
                var a = i.findIndex(function(e) {
                    return e.id === t;
                }), n = i[a].position;
                e.setData({
                    _activeIndex: a,
                    _position: n
                });
            });
        },
        initLayout: function() {
            var t = this, e = this.properties.showMap, i = this.createSelectorQuery();
            i.select("#map-address-item").boundingClientRect(), i.selectViewport().boundingClientRect(), 
            i.select("#list-title").boundingClientRect(), i.exec(function(i) {
                var a = i[0] && i[0].height || 0, n = i[1].height || 0, s = i[2] && i[2].height || 0, o = i[1].width / 750 * 88, r = n - o - a, c = n - (e ? o : s);
                t.setData({
                    _mapHeight: r,
                    _emptyListHeight: c
                }, function() {
                    t.resetTab();
                });
            });
        },
        handleTabChange: function(t) {
            this.setData({
                _tabActiveKey: t.detail.value.key
            }), this.initLayout();
        },
        handleActiveMarker: function(t) {
            this.properties.list;
            this.setActiveId(t.detail.id);
        },
        handleListItemTap: function(t) {
            var e = this.properties.mode, i = t.currentTarget.dataset.item;
            "selector" === e && this.triggerEvent("choose", i), "navigator" === e && (this.setData({
                _tabActiveKey: "map"
            }), this.setActiveId(i.item.id));
        },
        handleMapItemTap: function(t) {
            console.log(t);
            var e = this.properties.mode, i = t.currentTarget.dataset.item;
            "selector" === e && this.triggerEvent("choose", i);
        },
        handleNavigatorTap: function() {
            var t = this.data._activeIndex, e = this.properties.list[t], i = e.position;
            wx.openLocation({
                latitude: i.latitude,
                longitude: i.longitude,
                name: e.name,
                address: e.address
            });
        },
        handlePhoneTap: function() {
            var t = this.data._activeIndex, e = this.properties.list[t].phone;
            "string" == typeof e ? wx.makePhoneCall({
                phoneNumber: e
            }) : wx.showActionSheet({
                itemList: e,
                success: function(t) {
                    wx.makePhoneCall({
                        phoneNumber: e[t.tapIndex]
                    });
                }
            });
        },
        handleMapUpdate: function(t) {
            if (t.detail.info) {
                var e = t.detail.info, i = [ e.province, e.city, e.district ];
                this.setData({
                    _regionValue: i
                }), this.triggerEvent("mapUpdate", t.detail);
            }
        },
        handleRegionChange: function(i) {
            var a = this, n = this.properties, s = (n.showMap, n.loadUnit);
            this.data._tabActiveKey;
            if (Array.isArray(i.detail.value)) {
                var o = i.detail.value;
                this.setData({
                    _regionValue: o.map(function(t) {
                        return t.name;
                    })
                }), t.geocoder({
                    address: o.map(function(t) {
                        return t.name;
                    }).join(""),
                    success: function(i) {
                        if (0 === i.status) {
                            var n = {
                                longitude: i.result.location.lng,
                                latitude: i.result.location.lat
                            };
                            t.reverseGeocoder({
                                location: n,
                                success: function(t) {
                                    if (0 === t.status) {
                                        var i = t.result.ad_info;
                                        e.dispatch("g-map__setLastLocaton", i[s]), a.setData({
                                            _position: n
                                        }), a.triggerEvent("mapUpdate", {
                                            position: n,
                                            info: i
                                        });
                                    }
                                }
                            });
                        }
                    }
                });
            }
        }
    }
});