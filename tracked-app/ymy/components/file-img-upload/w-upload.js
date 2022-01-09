(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/file-img-upload/w-upload" ], {
    243: function(e, n, t) {
        t.r(n);
        var o = t(244), i = t(246);
        for (var a in i) "default" !== a && function(e) {
            t.d(n, e, function() {
                return i[e];
            });
        }(a);
        t(249);
        var c = t(8), u = Object(c.default)(i.default, o.render, o.staticRenderFns, !1, null, "5f2291c5", null, !1, o.components, void 0);
        u.options.__file = "components/file-img-upload/w-upload.vue", n.default = u.exports;
    },
    244: function(e, n, t) {
        t.r(n);
        var o = t(245);
        t.d(n, "render", function() {
            return o.render;
        }), t.d(n, "staticRenderFns", function() {
            return o.staticRenderFns;
        }), t.d(n, "recyclableRender", function() {
            return o.recyclableRender;
        }), t.d(n, "components", function() {
            return o.components;
        });
    },
    245: function(e, n, t) {
        t.r(n), t.d(n, "render", function() {
            return i;
        }), t.d(n, "staticRenderFns", function() {
            return c;
        }), t.d(n, "recyclableRender", function() {
            return a;
        }), t.d(n, "components", function() {
            return o;
        });
        var o, i = function() {
            var e = this, n = e.$createElement;
            e._self._c;
        }, a = !1, c = [];
        i._withStripped = !0;
    },
    246: function(e, n, t) {
        t.r(n);
        var o = t(247), i = t.n(o);
        for (var a in o) "default" !== a && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        n.default = i.a;
    },
    247: function(e, n, t) {
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = t(248), i = {
                props: {
                    token: {
                        type: String,
                        default: ""
                    },
                    fileShow: {
                        type: Boolean,
                        default: !1
                    },
                    imgShow: {
                        type: Boolean,
                        default: !1
                    },
                    fileList: {
                        type: Array,
                        default: []
                    },
                    imgList: {
                        type: Array,
                        default: []
                    },
                    requestUrl: {
                        type: String,
                        default: ""
                    },
                    uploadName: {
                        type: String,
                        default: "file"
                    },
                    fileType: {
                        type: String,
                        default: ""
                    },
                    imgType: {
                        type: String,
                        default: ""
                    }
                },
                name: "WUpload",
                data: function() {
                    return {
                        isshow: !1,
                        selectList: [ "文档", "图片" ]
                    };
                },
                created: function() {},
                methods: {
                    wclose: function() {
                        this.isshow = !1;
                    },
                    uploadOpen: function() {
                        this.isshow = !0;
                    },
                    wselect: function(e) {
                        0 == e ? this.upLoadFile() : this.upLoadImg(), this.isshow = !1;
                    },
                    wpriven: function(n) {
                        var t = this;
                        e.showLoading({
                            title: "下载中...",
                            mask: !0
                        }), t.udownload(n, "temporary").then(function(n) {
                            e.hideLoading(), t.uopen(n);
                        }).catch(function() {
                            e.hideLoading(), e.showToast({
                                title: "下载失败",
                                icon: "none"
                            });
                        });
                    },
                    wdelete: function(e, n, t) {
                        var o = this;
                        n.forEach(function(n, i) {
                            i == e && (1 == t ? o.$emit("updateFileList", [ i, n ]) : o.$emit("updateImgList", [ i, n ]));
                        });
                    },
                    udownload: function(n) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "temporary", o = this;
                        return new Promise(function(i, a) {
                            e.downloadFile({
                                url: n,
                                success: function(n) {
                                    var c = n.statusCode, u = n.tempFilePath;
                                    200 === c && ("local" == t ? e.saveFile({
                                        tempFilePath: u,
                                        success: function(e) {
                                            var n = e.savedFilePath;
                                            return o.onCommit(i(n));
                                        },
                                        fail: function() {
                                            return o.errorHandler("下载失败", a);
                                        }
                                    }) : o.onCommit(i(u)));
                                },
                                fail: function() {
                                    return o.errorHandler("下载失败", a);
                                }
                            });
                        });
                    },
                    onCommit: function(e) {
                        return e;
                    },
                    errorHandler: function(n, t) {
                        return e.showToast({
                            title: n,
                            icon: "none"
                        }), t(n);
                    },
                    uopen: function(n) {
                        "ios" == e.getSystemInfoSync().platform && (n = encodeURI(n)), e.openDocument({
                            showMenu: !0,
                            filePath: n,
                            success: function(e) {
                                console.log("打开文档成功");
                            },
                            fail: function(t) {
                                e.getImageInfo({
                                    src: n,
                                    success: function(t) {
                                        e.previewImage({
                                            current: n,
                                            urls: [ n ]
                                        });
                                    },
                                    fail: function(n) {
                                        e.showToast({
                                            title: "不支持该格式",
                                            icon: "none"
                                        });
                                    }
                                });
                            }
                        });
                    },
                    upLoadFile: function() {
                        var n = this;
                        e.chooseMessageFile({
                            type: "file",
                            success: function(t) {
                                t.tempFiles[0].size < 5242880 ? (0, o.WUpload)(n.requestUrl, n.uploadName, n.token, {
                                    upload_type: n.fileType
                                }, t).then(function(o) {
                                    if (1 == o.success) {
                                        var i = {};
                                        i.name = t.tempFiles[0].name, i.src = o.data, n.$emit("fileSuccess", i), e.showToast({
                                            title: "上传成功"
                                        });
                                    } else e.showToast({
                                        title: "上传失败",
                                        icon: "none"
                                    });
                                }).catch(function(n) {
                                    console.log(n), e.showToast({
                                        title: "上传失败",
                                        icon: "none"
                                    });
                                }) : e.showToast({
                                    title: "文件过大，无法上传",
                                    icon: "none"
                                });
                            }
                        });
                    },
                    upLoadImg: function(n) {
                        var t = this;
                        e.chooseImage({
                            count: 1,
                            sizeType: [ "original", "compressed" ],
                            sourceType: [ "camera", "album" ],
                            success: function(n) {
                                n.tempFiles[0].size < 2097152 ? e.getImageInfo({
                                    src: n.tempFilePaths[0],
                                    success: function(i) {
                                        (0, o.WUpload)(t.requestUrl, t.uploadName, t.token, {
                                            upload_type: t.imgType
                                        }, n).then(function(o) {
                                            if (1 == o.success) {
                                                var i = {};
                                                i.name = n.tempFilePaths[0], i.src = o.data, t.$emit("imgSuccess", i), e.showToast({
                                                    title: "上传成功"
                                                });
                                            } else e.showToast({
                                                title: "上传失败",
                                                icon: "none"
                                            });
                                        }).catch(function(n) {
                                            console.log(n), e.showToast({
                                                title: "上传失败",
                                                icon: "none"
                                            });
                                        });
                                    },
                                    fail: function(e) {
                                        console.log(e);
                                    }
                                }) : e.showToast({
                                    title: "图片过大，无法上传",
                                    icon: "none"
                                });
                            }
                        });
                    }
                }
            };
            n.default = i;
        }).call(this, t(1).default);
    },
    249: function(e, n, t) {
        t.r(n);
        var o = t(250), i = t.n(o);
        for (var a in o) "default" !== a && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        n.default = i.a;
    },
    250: function(e, n, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/file-img-upload/w-upload-create-component", {
    "components/file-img-upload/w-upload-create-component": function(e, n, t) {
        t("1").createComponent(t(243));
    }
}, [ [ "components/file-img-upload/w-upload-create-component" ] ] ]);