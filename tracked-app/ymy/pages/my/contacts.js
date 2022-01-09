(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/my/contacts" ], {
    46: function(t, n, e) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e(4);
            n(e(2));
            t(n(e(47)).default);
        }).call(this, e(1).createPage);
    },
    47: function(t, n, e) {
        e.r(n);
        var c = e(48), o = e(50);
        for (var a in o) "default" !== a && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(a);
        var u = e(8), r = Object(u.default)(o.default, c.render, c.staticRenderFns, !1, null, null, null, !1, c.components, void 0);
        r.options.__file = "pages/my/contacts.vue", n.default = r.exports;
    },
    48: function(t, n, e) {
        e.r(n);
        var c = e(49);
        e.d(n, "render", function() {
            return c.render;
        }), e.d(n, "staticRenderFns", function() {
            return c.staticRenderFns;
        }), e.d(n, "recyclableRender", function() {
            return c.recyclableRender;
        }), e.d(n, "components", function() {
            return c.components;
        });
    },
    49: function(t, n, e) {
        e.r(n), e.d(n, "render", function() {
            return o;
        }), e.d(n, "staticRenderFns", function() {
            return u;
        }), e.d(n, "recyclableRender", function() {
            return a;
        }), e.d(n, "components", function() {
            return c;
        });
        var c, o = function() {
            var t = this, n = t.$createElement, e = (t._self._c, t.contactsList && t.contactsList.length > 0 ? t.__map(t.contactsList, function(n, e) {
                return {
                    $orig: t.__get_orig(n),
                    g0: n.Name.substring(0, 1)
                };
            }) : null);
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: e
                }
            });
        }, a = !1, u = [];
        o._withStripped = !0;
    },
    50: function(t, n, e) {
        e.r(n);
        var c = e(51), o = e.n(c);
        for (var a in c) "default" !== a && function(t) {
            e.d(n, t, function() {
                return c[t];
            });
        }(a);
        n.default = o.a;
    },
    51: function(t, n, e) {
        (function(t) {
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = c(e(52)), a = c(e(36)), u = {
                data: function() {
                    return {
                        contactsList: []
                    };
                },
                onLoad: function() {},
                onShow: function() {
                    this.getContacts();
                },
                methods: {
                    bindClick: function(n) {
                        var e = this;
                        t.showModal({
                            title: "提示",
                            content: "确认删除该联系人？",
                            success: function(t) {
                                t.confirm ? e.delContact(n) : t.cancel;
                            }
                        });
                    },
                    delContact: function(t) {
                        var n = this;
                        o.default.del(t).then(function(t) {
                            t && t.success ? (a.default.showToast("删除成功"), n.getContacts()) : a.default.showToast(t.message || "删除失败");
                        });
                    },
                    getContacts: function() {
                        var t = this;
                        o.default.list(1, 1e3).then(function(n) {
                            n && n.success && n.data && n.data.list ? t.contactsList = n.data.list : t.contactsList = [];
                        });
                    }
                }
            };
            n.default = u;
        }).call(this, e(1).default);
    }
}, [ [ 46, "common/runtime", "common/vendor" ] ] ]);