function observer() {
                this._setByActiveId();
}
function observer(t) {
                t.length > 0 && this._buildMarkers();
}
function __type__(t) {
                return t;
}
function ready() {
        this._mapContext = wx.createMapContext("map", this), this._initListener();
}
function _initListener() {
            var t = this;
            e.addEventListener("g-map__setLastLocaton", function(e) {
                t._lastLocation = e.target;
            });
}
function _setByActiveId() {
            this._buildMarkers();
}
function _buildMarkers() {
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
}
function _setActiveMarker(t) {
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
}
function _setNormalMarker(t) {
            return t.iconPath = "../static/image/map-icon/normal_marker.png", t.width = 24, 
            t.height = 38, delete t.title, t;
}
function _checkLoadUnit() {
            var t = this.properties.loadUnit;
            if (![ "province", "city", "district" ].includes(t)) throw Error("loadUnit 的参数必须是 province, city, district。\b你填写的是：" + t);
}
function success(n) {
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
}
function fail(t) {
                    console.log("g-map error update:", t);
}
function handleMarkerTap(t) {
            this.triggerEvent("activeMarker", {
                id: t.markerId
            });
}
function handleLocationTap() {
            this._mapContext.moveToLocation();
}
function handleLoadTap() {
            this._lastLocation = this._tempLocation, this.triggerEvent("mapUpdate", this._tempUpdate), 
            this.setData({
                _showLoad: !1
            });
}
