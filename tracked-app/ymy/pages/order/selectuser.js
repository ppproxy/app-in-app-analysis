(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/order/selectuser" ], {
    72: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n(4);
            e(n(2));
            t(e(n(73)).default);
        }).call(this, n(1).createPage);
    },
    73: function(t, e, n) {
        n.r(e);
        var i = n(74), s = n(76);
        for (var r in s) "default" !== r && function(t) {
            n.d(e, t, function() {
                return s[t];
            });
        }(r);
        var a = n(8), o = Object(a.default)(s.default, i.render, i.staticRenderFns, !1, null, null, null, !1, i.components, void 0);
        o.options.__file = "pages/order/selectuser.vue", e.default = o.exports;
    },
    74: function(t, e, n) {
        n.r(e);
        var i = n(75);
        n.d(e, "render", function() {
            return i.render;
        }), n.d(e, "staticRenderFns", function() {
            return i.staticRenderFns;
        }), n.d(e, "recyclableRender", function() {
            return i.recyclableRender;
        }), n.d(e, "components", function() {
            return i.components;
        });
    },
    75: function(t, e, n) {
        n.r(e), n.d(e, "render", function() {
            return s;
        }), n.d(e, "staticRenderFns", function() {
            return a;
        }), n.d(e, "recyclableRender", function() {
            return r;
        }), n.d(e, "components", function() {
            return i;
        });
        var i, s = function() {
            var t = this, e = t.$createElement, n = (t._self._c, t.contactsList && t.contactsList.length > 0 ? t.__map(t.contactsList, function(e, n) {
                return {
                    $orig: t.__get_orig(e),
                    g0: e.Name.substring(0, 1)
                };
            }) : null);
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: n
                }
            });
        }, r = !1, a = [];
        s._withStripped = !0;
    },
    76: function(t, e, n) {
        n.r(e);
        var i = n(77), s = n.n(i);
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        e.default = s.a;
    },
    77: function(t, e, n) {
        (function(t) {
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = i(n(52)), r = i(n(36)), a = {
                data: function() {
                    return {
                        title: null,
                        number: 0,
                        model: 0,
                        contactsList: []
                    };
                },
                onLoad: function(e) {
                    var n = e.number, i = e.model;
                    void 0 === n || null == n || "" == n || void 0 === i || null == i || "" == i ? t.navigateBack() : (this.number = parseInt(n), 
                    this.model = parseInt(i));
                },
                onShow: function() {
                    this.number <= 0 ? (r.default.showToast("人数不能小于0"), t.navigateBack()) : (0 == this.model ? (this.title = "联系人", 
                    t.setNavigationBarTitle({
                        title: "选择联系人"
                    })) : (this.title = "游玩人", t.setNavigationBarTitle({
                        title: "选择游玩人"
                    })), this.getContacts());
                },
                methods: {
                    getContacts: function() {
                        var t = this;
                        s.default.list(1, 1e3).then(function(e) {
                            if (e && e.success && e.data && e.data.list) {
                                for (var n = 0; n < e.data.list.length; n++) e.data.list[n].IsSelected = !1;
                                t.contactsList = e.data.list;
                            } else t.contactsList = [];
                        });
                    },
                    contactClick: function(t) {
                        for (var e = 0; e < this.contactsList.length; e++) {
                            var n = this.contactsList[e];
                            this.number <= 1 ? (n.IsSelected = !1, n.ID == t && (n.IsSelected = !0)) : n.ID == t && (n.IsSelected = !n.IsSelected);
                        }
                    },
                    createUser: function() {
                        t.navigateTo({
                            url: "../my/newcontacts?backOrder=1&model=" + this.model
                        });
                    },
                    confirm: function() {
                        for (var e = [], n = 0; n < this.contactsList.length; n++) {
                            var i = this.contactsList[n];
                            i.IsSelected && e.push(i);
                        }
                        e.length > this.number ? r.default.showToast("最多选择 " + this.number + " 位" + this.title) : e.length < this.number ? r.default.showToast("请选择 " + this.number + " 位" + this.title) : (t.$emit("updateUser", {
                            users: e,
                            model: this.model,
                            isCancel: !1
                        }), t.navigateBack());
                    }
                }
            };
            e.default = a;
        }).call(this, n(1).default);
    }
}, [ [ 72, "common/runtime", "common/vendor" ] ] ]);