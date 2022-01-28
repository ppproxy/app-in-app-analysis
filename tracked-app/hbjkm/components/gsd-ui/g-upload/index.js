Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../behaviors/formController");

Component({
    __value__: [],
    behaviors: [ e ],
    relations: {
        "../g-form-item/index": {
            type: "child"
        },
        "../g-form/index": {
            type: "ancestor"
        }
    },
    properties: {
        label: String,
        action: String,
        value: {
            type: Array,
            value: [],
            __type__: function(e) {
                return e;
            },
            observer: function(e, t) {
                e && (this.__value__ = e);
            }
        },
        maxSize: Number,
        name: {
            type: String,
            name: "file"
        },
        header: Object,
        formData: Object,
        maxNumber: Number,
        showCount: Boolean,
        sizeType: {
            type: Array,
            value: [ "original", "compressed" ],
            __type__: function(e) {
                return e;
            }
        },
        sourceType: {
            type: Array,
            value: [ "album", "camera" ],
            __type__: function(e) {
                return e;
            }
        }
    },
    data: {},
    methods: {
        chooseImage: function() {
            var e = this, t = this.properties, r = t.value, a = t.sizeType, n = t.sourceType, i = t.maxNumber, o = t.maxSize;
            if (i > 0 && r.length >= i) return wx.showModal({
                title: "温馨提示",
                content: "图片已超过上限",
                showCancel: !1
            }), !1;
            var u = i - r.length;
            wx.chooseImage({
                count: u,
                sizeType: a,
                sourceType: n,
                success: function(t) {
                    console.log("选择图片", t);
                    var a = t.tempFiles.map(function(e) {
                        var t = {
                            filePath: e.path,
                            status: "uploading",
                            progress: 0,
                            data: {}
                        };
                        return o && e.size > o && (t.status = "maxSize"), t;
                    }), n = r.concat(a);
                    e.__value__ = n, e.triggerEvent("change", {
                        value: n
                    }), e.uploadFiles(a.filter(function(e) {
                        return "uploading" === e.status;
                    }));
                },
                fail: function(e) {
                    console.error(e);
                }
            });
        },
        uploadFiles: function(e) {
            var t = this, r = e.map(function(e) {
                var r = Object.assign({}, e);
                return t._upload(e).then(function(e) {
                    return console.log("上传", e), 200 === e.statusCode ? (r.data = e.data, r.status = "done", 
                    r.progress = 100) : (r.data = e.data, r.status = "error"), r;
                }).catch(function(e) {
                    return r.data = e.message, r.status = "error", r;
                });
            });
            Promise.all(r).then(function(e) {
                return t.__value__ = t.__value__.map(function(t) {
                    return e.some(function(e) {
                        return e.filePath === t.filePath && (t = e, !0);
                    }), t;
                }), t.__value__;
            }).then(function(e) {
                t.triggerEvent("change", {
                    value: e
                });
            }).catch(function(e) {
                console.error(e);
            });
        },
        _upload: function(e) {
            var t = this;
            return new Promise(function(r, a) {
                var n = t.properties, i = n.action, o = n.name, u = n.formData, s = n.header;
                return wx.uploadFile({
                    url: i,
                    filePath: e.filePath,
                    name: o,
                    formData: u,
                    header: s,
                    success: function(e) {
                        r(e);
                    },
                    fail: function(e) {
                        a(e);
                    }
                });
            });
        },
        removeFile: function(e) {
            var t = e.currentTarget.dataset.item;
            this.__value__ = this.__value__.filter(function(e) {
                return e.filePath !== t.filePath;
            }), this.triggerEvent("remove", {
                value: t
            }), this.triggerEvent("change", {
                value: this.__value__
            });
        },
        handleClickImage: function(e) {
            var t = e.currentTarget.dataset.item, r = this.properties.value;
            if ("error" === t.status) {
                var a = r.map(function(e) {
                    return e.filePath === t.filePath ? (t.status = "uploading", t) : e;
                });
                this.triggerEvent("change", {
                    value: a
                }), this.uploadFiles([ t ]);
            } else this.previewImage(t.filePath);
        },
        previewImage: function(e) {
            var t = this.properties.value;
            wx.previewImage({
                current: e,
                urls: t.map(function(e) {
                    return e.filePath;
                })
            });
        }
    }
});