(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/app-launch-app/index" ], {
    "61c43": function(n, o, t) {
        t.r(o);
        var e = t("d41b"), a = t.n(e);
        for (var c in e) "default" !== c && function(n) {
            t.d(o, n, function() {
                return e[n];
            });
        }(c);
        o.default = a.a;
    },
    9827: function(n, o, t) {
        t.d(o, "b", function() {
            return e;
        }), t.d(o, "c", function() {
            return a;
        }), t.d(o, "a", function() {});
        var e = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    a3ef: function(n, o, t) {},
    d41b: function(n, o, t) {
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = void 0;
        var e = {
            data: function() {
                return {
                    show: !1,
                    downloadPop: !1
                };
            },
            components: {
                appDownloadPop: function() {
                    t.e("components/app-download-pop/index").then(function() {
                        return resolve(t("8e35"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            props: {
                isInit: {
                    type: Boolean,
                    default: !1
                }
            },
            watch: {
                isInit: function() {
                    this.showButton();
                }
            },
            computed: {
                appLaunchButtonShow: function() {
                    return this.$store.state.systemInfo.appLaunchButtonShow;
                }
            },
            mounted: function() {
                this.showButton();
            },
            methods: {
                launchAppError: function(n) {
                    this.toDownload();
                },
                hideDownloadPop: function() {
                    this.downloadPop = !1;
                },
                toDownload: function() {
                    this.downloadPop = !0;
                },
                showButton: function() {
                    var n = getCurrentPages();
                    n && n.length && n[n.length - 1] && n[n.length - 1].options && n[n.length - 1].options._sharesource && this.appLaunchButtonShow && (this.show = !0);
                }
            }
        };
        o.default = e;
    },
    d6f1: function(n, o, t) {
        t.r(o);
        var e = t("9827"), a = t("61c43");
        for (var c in a) "default" !== c && function(n) {
            t.d(o, n, function() {
                return a[n];
            });
        }(c);
        t("fe61");
        var u = t("f0c5"), p = Object(u.a)(a.default, e.b, e.c, !1, null, "3c8d4771", null, !1, e.a, void 0);
        o.default = p.exports;
    },
    fe61: function(n, o, t) {
        var e = t("a3ef");
        t.n(e).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/app-launch-app/index-create-component", {
    "components/app-launch-app/index-create-component": function(n, o, t) {
        t("543d").createComponent(t("d6f1"));
    }
}, [ [ "components/app-launch-app/index-create-component" ] ] ]);