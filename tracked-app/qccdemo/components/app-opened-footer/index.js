(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/app-opened-footer/index" ], {
    "0a79": function(t, o, n) {
        n.r(o);
        var e = n("7c39"), a = n("17d5");
        for (var s in a) "default" !== s && function(t) {
            n.d(o, t, function() {
                return a[t];
            });
        }(s);
        n("2234");
        var u = n("f0c5"), i = Object(u.a)(a.default, e.b, e.c, !1, null, "efc1e86a", null, !1, e.a, void 0);
        o.default = i.exports;
    },
    "17d5": function(t, o, n) {
        n.r(o);
        var e = n("cf3f"), a = n.n(e);
        for (var s in e) "default" !== s && function(t) {
            n.d(o, t, function() {
                return e[t];
            });
        }(s);
        o.default = a.a;
    },
    2234: function(t, o, n) {
        var e = n("77fa3");
        n.n(e).a;
    },
    "77fa3": function(t, o, n) {},
    "7c39": function(t, o, n) {
        n.d(o, "b", function() {
            return e;
        }), n.d(o, "c", function() {
            return a;
        }), n.d(o, "a", function() {});
        var e = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    cf3f: function(t, o, n) {
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = void 0;
        var e = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("0190"));
        var a = {
            name: "app-opened-footer",
            props: {
                unique: {
                    type: String,
                    default: ""
                },
                name: {
                    type: String,
                    default: ""
                },
                hasFooter: {
                    type: Boolean,
                    default: !1
                },
                hasFooter2: {
                    type: Boolean,
                    default: !1
                },
                bottoms: {
                    type: Number,
                    default: 0
                }
            },
            computed: {
                token: function() {
                    return this.$store.state.userInfo.token || "";
                },
                isIPhone: function() {
                    return this.$store.state.systemInfo.isIPhone || !1;
                },
                isIPhoneX: function() {
                    return this.$store.state.systemInfo.isIPhoneX || !1;
                },
                appLaunchButtonShow: function() {
                    return this.$store.state.systemInfo.appLaunchButtonShow;
                }
            },
            data: function() {
                return {
                    someData: {},
                    btnClick: !1,
                    bottom: 0,
                    paddingBottom: 0,
                    show: !1
                };
            },
            watch: {
                appLaunchButtonShow: function() {
                    this.setShow();
                }
            },
            mounted: function() {
                var t, o = this, n = 0;
                this.bottoms ? t = this.isIPhoneX ? this.bottoms + 20 : this.bottoms : this.hasFooter ? t = this.isIPhoneX ? 68 : 48 : this.hasFooter2 ? t = 133 : this.isIPhoneX ? n = 20 : t = 0, 
                this.paddingBottom = n, this.bottom = t, this.$nextTick(function() {
                    o.setShow();
                });
            },
            methods: {
                setShow: function() {
                    var t = getCurrentPages();
                    this.show = !!(t && t.length && t[t.length - 1] && t[t.length - 1].options && this.appLaunchButtonShow);
                },
                close: function() {
                    this.show = !1;
                },
                toCompany: function(t) {
                    var o = t.currentTarget.dataset, n = o.name, a = o.unique;
                    e.default.toCopDetail(a, n);
                }
            }
        };
        o.default = a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/app-opened-footer/index-create-component", {
    "components/app-opened-footer/index-create-component": function(t, o, n) {
        n("543d").createComponent(n("0a79"));
    }
}, [ [ "components/app-opened-footer/index-create-component" ] ] ]);