require("../../../@babel/runtime/helpers/Arrayincludes");

var t = require("../../gsd-lib/utils/index").debounce, e = require("../../gsd-lib/event/index"), i = require("../../gsd-lib/map/index");

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
    data: {
        _markers: [],
        _showLoad: !1
    },
    ready: function() {
        this._mapContext = wx.createMapContext("map", this), this._initListener();
    },
    methods: {
        _initListener: function() {
            var t = this;
            e.addEventListener("g-map__setLastLocaton", function(e) {
                t._lastLocation = e.target;
            });
        },
        _setByActiveId: function() {
            this._buildMarkers();
        },
        _buildMarkers: function() {
            var t = this, e = this.properties, i = e.activeId, a = e.markers, o = -1, n = a.map(function(e, a) {
                var n = {
                    id: e.id,
                    title: e.name,
                    longitude: e.position.longitude,
                    latitude: e.position.latitude
                };
                return Number(i) === Number(e.id) ? (console.log("找到激活标记", i), o = a, t._setActiveMarker(n)) : t._setNormalMarker(n), 
                n;
            });
            o >= 0 && (n = n.concat(n.splice(o, 1))), this.setData({
                _markers: n
            });
        },
        _setActiveMarker: function(t) {
            return t.iconPath = "../static/image/map-icon/active_marker.png", t.width = 28, 
            t.height = 44, t.callout = {
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
            return t.iconPath = "../static/image/map-icon/normal_marker.png", t.width = 24, 
            t.height = 38, delete t.title, t;
        },
        _checkLoadUnit: function() {
            var t = this.properties.loadUnit;
            if (![ "province", "city", "district" ].includes(t)) throw Error("loadUnit 的参数必须是 province, city, district。\b你填写的是：" + t);
        },
        handleRegionChange: t(function(t) {
            var e = this, a = this.data._showLoad, o = this.properties.loadUnit;
            (this._checkLoadUnit(), "start" !== t.type) && this._mapContext.getCenterLocation({
                success: function(n) {
                    i.reverseGeocoder({
                        location: n,
                        success: function(i) {
                            var r = i.result.ad_info[o], s = {
                                position: n,
                                info: i.result.ad_info
                            };
                            console.log(e._lastLocation, r), e._lastLocation !== r ? e._lastLocation ? "end" !== t.type && "updated" !== t.type || e.setData({
                                _showLoad: !0
                            }) : (e.triggerEvent("mapUpdate", s), e._lastLocation = r) : a && e.setData({
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