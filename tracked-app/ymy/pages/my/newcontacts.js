(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/my/newcontacts" ], {
    53: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n(4);
            e(n(2));
            t(e(n(54)).default);
        }).call(this, n(1).createPage);
    },
    54: function(t, e, n) {
        n.r(e);
        var o = n(55), a = n(57);
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        var s = n(8), c = Object(s.default)(a.default, o.render, o.staticRenderFns, !1, null, null, null, !1, o.components, void 0);
        c.options.__file = "pages/my/newcontacts.vue", e.default = c.exports;
    },
    55: function(t, e, n) {
        n.r(e);
        var o = n(56);
        n.d(e, "render", function() {
            return o.render;
        }), n.d(e, "staticRenderFns", function() {
            return o.staticRenderFns;
        }), n.d(e, "recyclableRender", function() {
            return o.recyclableRender;
        }), n.d(e, "components", function() {
            return o.components;
        });
    },
    56: function(t, e, n) {
        n.r(e), n.d(e, "render", function() {
            return a;
        }), n.d(e, "staticRenderFns", function() {
            return s;
        }), n.d(e, "recyclableRender", function() {
            return i;
        }), n.d(e, "components", function() {
            return o;
        });
        var o, a = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, i = !1, s = [];
        a._withStripped = !0;
    },
    57: function(t, e, n) {
        n.r(e);
        var o = n(58), a = n.n(o);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = a.a;
    },
    58: function(t, e, n) {
        (function(t) {
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = o(n(52)), i = o(n(36)), s = n(21), c = t.getSystemInfoSync(), u = {
                components: {
                    kpsImageCutter: function() {
                        n.e("components/ksp-image-cutter/ksp-image-cutter").then(function() {
                            return resolve(n(211));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        BackOrder: 0,
                        Model: 0,
                        ID: 0,
                        Name: "",
                        Mobile: "",
                        IDCard: "",
                        photo: "",
                        IsSelf: !1,
                        originPhoto: "",
                        cutWidth: 310 * c.pixelRatio,
                        cutHeight: 310 * c.pixelRatio,
                        isCutting: !1
                    };
                },
                onLoad: function(e) {
                    var n = e.userid;
                    this.BackOrder = parseInt(e.backOrder), this.Model = parseInt(e.model), void 0 === n || null == n || "" == n ? (t.setNavigationBarTitle({
                        title: "新建联系人"
                    }), this.ID = 0) : (t.setNavigationBarTitle({
                        title: "编辑联系人"
                    }), this.ID = parseInt(n), this.getuser(this.ID));
                },
                methods: {
                    getuser: function(e) {
                        var n = this;
                        a.default.get(e).then(function(e) {
                            e && e.success && e.data ? (n.ID = e.data.ID, n.Name = e.data.Name, n.Mobile = e.data.Mobile, 
                            n.IDCard = e.data.IDCard, n.photo = e.data.Photo, n.IsSelf = e.data.IsSelf) : t.showToast({
                                title: e.message || "查找联系人失败",
                                icon: "none",
                                duration: 2e3
                            });
                        });
                    },
                    selectaction: function() {
                        this.IsSelf = !this.IsSelf;
                    },
                    save: function() {
                        this.ID > 0 ? this.updateUser() : this.addUser();
                    },
                    del: function() {
                        var e = this;
                        t.showModal({
                            title: "提示",
                            content: "确认删除该联系人？",
                            success: function(t) {
                                t.confirm ? a.default.del(e.ID).then(function(t) {
                                    t && t.success ? (i.default.showToast("删除成功"), e.gotoContacts()) : i.default.showToast(t.message || "删除失败");
                                }) : t.cancel;
                            }
                        });
                    },
                    addUser: function() {
                        var e = this;
                        this.Name ? this.Mobile ? this.IDCard ? 0 != i.default.checkIdCard(this.IDCard) ? a.default.add(this.Name, this.Mobile, this.IDCard, this.IsSelf, this.photo).then(function(n) {
                            n && n.success ? (console.log("返回：" + e.BackOrder), e.gotoContacts()) : t.showToast({
                                title: n.message || "保存失败",
                                icon: "none",
                                duration: 2e3
                            });
                        }) : i.default.showToast("请输入合法身份证") : i.default.showToast("请输入联系人身份证") : i.default.showToast("请输入联系人手机号") : i.default.showToast("请输入联系人姓名");
                    },
                    updateUser: function() {
                        var e = this;
                        a.default.update(this.ID, this.Name, this.Mobile, this.IDCard, this.IsSelf, this.photo).then(function(n) {
                            n && n.success ? e.gotoContacts() : t.showToast({
                                title: n.message || "保存失败",
                                icon: "none",
                                duration: 2e3
                            });
                        });
                    },
                    gotoContacts: function() {
                        t.navigateBack();
                    },
                    choosePhoto: function() {
                        var e = this;
                        t.chooseImage({
                            count: 1,
                            mediaType: [ "image" ],
                            sourceType: [ "camera" ],
                            maxDuration: 30,
                            camera: "back",
                            success: function(t) {
                                e.originPhoto = t.tempFilePaths[0], e.isCutting = !0;
                            }
                        });
                    },
                    handlePhotoOk: function(e) {
                        var n = this;
                        this.isCutting = !1, this.originPhoto = "", t.showLoading({
                            title: "上传中..."
                        }), (0, s.uploadFile)({
                            url: "system/upload",
                            filePath: e.path
                        }).then(function(e) {
                            e && e.success ? (n.photo = e.data, t.showToast({
                                title: "上传成功" + e.data,
                                icon: "none",
                                duration: 2e3
                            })) : t.showToast({
                                title: e.message || "上传失败",
                                icon: "none",
                                duration: 2e3
                            });
                        });
                    },
                    handlePhotoCancel: function() {
                        this.isCutting = !1, this.originPhoto = "";
                    }
                }
            };
            e.default = u;
        }).call(this, n(1).default);
    }
}, [ [ 53, "common/runtime", "common/vendor" ] ] ]);