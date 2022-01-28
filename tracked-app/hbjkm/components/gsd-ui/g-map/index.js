var t = {
    _markers: [],
    _showLoad: !1
}, e = require("../../gsd-lib/utils/index").debounce, i = require("../../gsd-lib/event/index"), o = require("../../gsd-lib/map/index");

Component({
    _mapContext: void 0,
    _lastLocation: "",
    _tempUpdate: void 0,
    _tempLocation: "",
    properties: {
        scale: {
            type: Number,
            value: 16
        },
        position: {
            type: Object,
            value: {
                longitude: 116.39694614768342,
                latitude: 39.909666770172194
            }
        },
        activeId: {
            type: Number,
            observer: function() {
                this._setByActiveId();
            }
        },
        markers: {
            type: Array,
            observer: function(t) {
                t.length > 0 && this._buildMarkers();
            },
            __type__: function(t) {
                return t;
            }
        },
        loadUnit: {
            type: String,
            value: "district"
        }
    },
    data: t,
    ready: function() {
        this._mapContext = wx.createMapContext("map", this), this._initListener();
    },
    methods: {
        _initListener: function() {
            var t = this;
            i.addEventListener("g-map__setLastLocaton", function(e) {
                t._lastLocation = e.target;
            });
        },
        _setByActiveId: function() {
            this._buildMarkers();
        },
        _buildMarkers: function() {
            var t = this, e = this.properties, i = e.activeId, o = -1, a = e.markers.map(function(e, a) {
                var n = {
                    id: e.id,
                    title: e.name,
                    longitude: e.position.longitude,
                    latitude: e.position.latitude
                };
                return Number(i) === Number(e.id) ? (console.log("找到激活标记", i), o = a, t._setActiveMarker(n)) : t._setNormalMarker(n), 
                n;
            });
            o >= 0 && (a = a.concat(a.splice(o, 1))), this.setData({
                _markers: a
            });
        },
        _setActiveMarker: function(t) {
            return t.iconPath = "https://imgcache.gzonline.gov.cn/cos/active_marker_c790abc5.png", 
            t.width = 28, t.height = 44, t.callout = {
                content: t.title,
                color: "#ffffff",
                fontSize: 12,
                bgColor: "#000000",
                display: "ALWAYS",
                padding: 5,
                borderRadius: 4
            }, t;
        },
        _setNormalMarker: function(t) {
            return t.iconPath = "https://imgcache.gzonline.gov.cn/cos/normal_marker_07b4d625.png", 
            t.width = 24, t.height = 38, delete t.title, t;
        },
        _checkLoadUnit: function() {
            var t = this.properties.loadUnit;
            if (![ "province", "city", "district" ].includes(t)) throw Error("loadUnit 的参数必须是 province, city, district。\b你填写的是：" + t);
        },
        handleRegionChange: e(function(t) {
            var e = this, i = this.data._showLoad, a = this.properties.loadUnit;
            this._checkLoadUnit(), "start" !== t.type && this._mapContext.getCenterLocation({
                success: function(n) {
                    o.reverseGeocoder({
                        location: n,
                        success: function(o) {
                            var r = o.result.ad_info[a], s = {
                                position: n,
                                info: o.result.ad_info
                            };
                            console.log(e._lastLocation, r), e._lastLocation !== r ? e._lastLocation ? "end" !== t.type && "updated" !== t.type || e.setData({
                                _showLoad: !0
                            }) : (e.triggerEvent("mapUpdate", s), e._lastLocation = r) : i && e.setData({
                                _showLoad: !1
                            }), e._tempLocation = r, e._tempUpdate = s;
                        }
                    });
                },
                fail: function(t) {
                    console.log("g-map error update:", t);
                }
            });
        }, 200),
        handleMarkerTap: function(t) {
            this.triggerEvent("activeMarker", {
                id: t.markerId
            });
        },
        handleLocationTap: function() {
            this._mapContext.moveToLocation();
        },
        handleLoadTap: function() {
            this._lastLocation = this._tempLocation, this.triggerEvent("mapUpdate", this._tempUpdate), 
            this.setData({
                _showLoad: !1
            });
        }
    }
}), module.exports = {};