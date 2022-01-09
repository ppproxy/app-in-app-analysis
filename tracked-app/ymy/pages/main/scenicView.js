(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/main/scenicView" ], {
    23: function(t, n, e) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e(4);
            n(e(2));
            t(n(e(24)).default);
        }).call(this, e(1).createPage);
    },
    24: function(t, n, e) {
        e.r(n);
        var i = e(25), o = e(27);
        for (var c in o) "default" !== c && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(c);
        var u = e(8), a = Object(u.default)(o.default, i.render, i.staticRenderFns, !1, null, null, null, !1, i.components, void 0);
        a.options.__file = "pages/main/scenicView.vue", n.default = a.exports;
    },
    25: function(t, n, e) {
        e.r(n);
        var i = e(26);
        e.d(n, "render", function() {
            return i.render;
        }), e.d(n, "staticRenderFns", function() {
            return i.staticRenderFns;
        }), e.d(n, "recyclableRender", function() {
            return i.recyclableRender;
        }), e.d(n, "components", function() {
            return i.components;
        });
    },
    26: function(t, n, e) {
        e.r(n), e.d(n, "render", function() {
            return o;
        }), e.d(n, "staticRenderFns", function() {
            return u;
        }), e.d(n, "recyclableRender", function() {
            return c;
        }), e.d(n, "components", function() {
            return i;
        });
        var i, o = function() {
            var t = this, n = t.$createElement;
            t._self._c;
        }, c = !1, u = [];
        o._withStripped = !0;
    },
    27: function(t, n, e) {
        e.r(n);
        var i = e(28), o = e.n(i);
        for (var c in i) "default" !== c && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(c);
        n.default = o.a;
    },
    28: function(t, n, e) {
        (function(t) {
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = i(e(17)), c = i(e(16)), u = {
                data: function() {
                    return {
                        photo: "",
                        scenic: {},
                        name: "",
                        latitude: 0,
                        longitude: 0,
                        distributor: null,
                        scenicId: null,
                        covers: [ {
                            latitude: 0,
                            longitude: 0,
                            iconPath: "/static/images/convert2.png"
                        } ]
                    };
                },
                onLoad: function(t) {
                    this.scenicId = t.scenicId, this.loadScenic();
                },
                onShow: function() {
                    this.loadScenic();
                },
                onPullDownRefresh: function() {
                    this.loadScenic();
                },
                methods: {
                    onShareAppMessage: function(t) {
                        return {
                            title: this.scenic.Name,
                            path: "/pages/main/scenicView",
                            imageUrl: ""
                        };
                    },
                    loadScenic: function() {
                        var n = this;
                        this.distributor = c.default.getDistributor(), this.distributor < 0 && (this.distributor = c.default.base_distributor), 
                        o.default.getScenic(parseInt(this.distributor), this.scenicId).then(function(e) {
                            t.stopPullDownRefresh(), e && e.success && e.data ? (n.photo = e.data.Photo, n.scenic = e.data, 
                            n.latitude = parseFloat(e.data.Latitude), n.longitude = parseFloat(e.data.Longitude), 
                            n.covers[0].latitude = n.latitude, n.covers[0].longitude = n.longitude) : t.showToast({
                                title: e.message || "加载失败",
                                icon: "none",
                                duration: 2e3
                            });
                        }).catch(function(n) {
                            t.stopPullDownRefresh(), t.showToast({
                                title: "出错了，请检查网络连接",
                                icon: "none",
                                duration: 2e3
                            });
                        });
                    },
                    mapClick: function() {
                        t.openLocation({
                            latitude: this.latitude,
                            longitude: this.longitude,
                            name: this.scenic.Name,
                            success: function() {}
                        });
                    }
                }
            };
            n.default = u;
        }).call(this, e(1).default);
    }
}, [ [ 23, "common/runtime", "common/vendor" ] ] ]);