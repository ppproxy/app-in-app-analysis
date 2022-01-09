(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/app-auto-logo/index" ], {
    "1ab8": function(t, e, n) {},
    "1ff0": function(t, e, n) {
        var o = n("1ab8");
        n.n(o).a;
    },
    26500: function(t, e, n) {
        n.r(e);
        var o = n("483c"), a = n.n(o);
        for (var u in o) "default" !== u && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(u);
        e.default = a.a;
    },
    "28fe": function(t, e, n) {
        n.r(e);
        var o = n("b3aa"), a = n("26500");
        for (var u in a) "default" !== u && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(u);
        n("1ff0");
        var i = n("f0c5"), r = Object(i.a)(a.default, o.b, o.c, !1, null, "33d2977e", null, !1, o.a, void 0);
        e.default = r.exports;
    },
    "483c": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("325c"));
        var a = {
            name: "app-auto-logo",
            props: {
                logo: {
                    type: String,
                    default: ""
                },
                defaultLogo: {
                    type: String,
                    default: ""
                },
                name: {
                    type: String,
                    default: "无"
                },
                size: {
                    type: String,
                    default: "64rpx"
                },
                fontSize: {
                    type: String,
                    default: "36rpx"
                },
                radius: {
                    type: String,
                    default: "8rpx"
                },
                number: {
                    type: Number,
                    default: 1
                }
            },
            computed: {
                showText: function() {
                    return this.name && "string" == typeof this.name ? this.name.substr(0, this.number) : "无";
                }
            },
            watch: {
                logo: function() {
                    this.$forceUpdate();
                }
            },
            data: function() {
                return {
                    backgroundColor: "#E79177",
                    loadingLogoSuccess: !0,
                    imageLoaded: !1
                };
            },
            mounted: function() {
                this.backgroundColor = o.default.getRandomColor();
            },
            methods: {
                getLineHeight: function() {
                    var t = this.size;
                    return (t = +t.replace(/px/gi, "")) ? "".concat(t -= 1, "px") : this.size;
                },
                loadImage: function() {
                    this.imageLoaded = !1, this.loadingLogoSuccess = !1;
                }
            }
        };
        e.default = a;
    },
    b3aa: function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
        var o = function() {
            var t = this, e = (t.$createElement, t._self._c, t.loadingLogoSuccess && t.logo || t.defaultLogo ? null : t.getLineHeight());
            t.$mp.data = Object.assign({}, {
                $root: {
                    m0: e
                }
            });
        }, a = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/app-auto-logo/index-create-component", {
    "components/app-auto-logo/index-create-component": function(t, e, n) {
        n("543d").createComponent(n("28fe"));
    }
}, [ [ "components/app-auto-logo/index-create-component" ] ] ]);