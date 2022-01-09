(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/custom-bar/index" ], {
    "2c39": function(t, n, e) {},
    "358a": function(t, n, e) {
        var o = e("2c39");
        e.n(o).a;
    },
    "6a4f": function(t, n, e) {
        e.r(n);
        var o = e("d04d"), u = e.n(o);
        for (var a in o) "default" !== a && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(a);
        n.default = u.a;
    },
    "805e": function(t, n, e) {
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return u;
        }), e.d(n, "a", function() {});
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c, t._isMounted || (t.e0 = function(n) {
                t.show = !0;
            }, t.e1 = function(n) {
                t.show = !1;
            });
        }, u = [];
    },
    "906e": function(t, n, e) {
        e.r(n);
        var o = e("805e"), u = e("6a4f");
        for (var a in u) "default" !== a && function(t) {
            e.d(n, t, function() {
                return u[t];
            });
        }(a);
        e("358a");
        var i = e("f0c5"), c = Object(i.a)(u.default, o.b, o.c, !1, null, "79ba19e8", null, !1, o.a, void 0);
        n.default = c.exports;
    },
    d04d: function(t, n, e) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(e("0190")), u = e("b291");
            var a = {
                name: "collapse",
                props: {
                    title: {
                        type: String,
                        default: ""
                    },
                    unique: {
                        type: String,
                        default: ""
                    },
                    isPerson: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        show: !1,
                        height: "140rpx"
                    };
                },
                computed: {
                    menuButtonInfo: function() {
                        var t, n;
                        return (null === (t = this.$store.state.systemInfo) || void 0 === t || null === (n = t.menuButtonInfo) || void 0 === n ? void 0 : n.menuButtonInfo) || "";
                    }
                },
                mounted: function() {
                    this.menuButtonInfo && (this.menuButtonInfo.top && this.menuButtonInfo.height ? this.height = this.menuButtonInfo.top + this.menuButtonInfo.height + 5 + "px" : this.height = "85px");
                },
                methods: {
                    toPage: function(n) {
                        var e = n.currentTarget.dataset, o = e.type, a = e.url, i = e.text;
                        o ? t.switchTab({
                            url: a
                        }) : t.navigateTo({
                            url: a
                        }), this.isPerson ? (0, u.track)("personhome_button_click", {
                            "person_detail|人员详情": this.unique,
                            "button_name|按钮名称": "快捷按钮-" + i
                        }) : (0, u.track)("companyhome_button_click", {
                            "company_detail|企业详情": this.unique,
                            "button_name|按钮名称": "快捷按钮-" + i
                        });
                    },
                    back: function() {
                        getCurrentPages().length < 2 ? o.default.toHome() : t.navigateBack({
                            delta: 1
                        });
                    }
                }
            };
            n.default = a;
        }).call(this, e("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/custom-bar/index-create-component", {
    "components/custom-bar/index-create-component": function(t, n, e) {
        e("543d").createComponent(e("906e"));
    }
}, [ [ "components/custom-bar/index-create-component" ] ] ]);