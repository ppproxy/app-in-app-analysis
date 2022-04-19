Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("@babel/runtime/helpers/typeof.js"), t = require("@babel/runtime/helpers/createForOfIteratorHelper.js"), i = require("@babel/runtime/helpers/classCallCheck.js"), n = require("@babel/runtime/helpers/createClass.js"), o = require("1E8CCD17ACE07ADF78EAA5102980A2D7.js"), r = 6291456, a = {}, l = function() {
    function e() {
        i(this, e), getApp().PAINTER_MAX_LRU_SPACE && (r = getApp().PAINTER_MAX_LRU_SPACE), 
        wx.getStorage({
            key: "savedFiles",
            success: function(e) {
                e.data && (a = e.data);
            }
        });
    }
    return n(e, [ {
        key: "download",
        value: function(e, t) {
            return new Promise(function(i, n) {
                if (e && o.isValidUrl(e)) if (t) {
                    var r = function(e) {
                        if (!a[e]) return;
                        return a[e].time = new Date().getTime(), a[e];
                    }(e);
                    r ? wx.getSavedFileInfo({
                        filePath: r.path,
                        success: function(e) {
                            i(r.path);
                        },
                        fail: function(o) {
                            console.error("the file is broken, redownload it, ".concat(JSON.stringify(o))), 
                            c(e, t).then(function(e) {
                                i(e);
                            }, function() {
                                n();
                            });
                        }
                    }) : c(e, t).then(function(e) {
                        i(e);
                    }, function() {
                        n();
                    });
                } else wx.getFileInfo({
                    filePath: e,
                    success: function() {
                        i(e);
                    },
                    fail: function() {
                        c(e, t).then(function(e) {
                            i(e);
                        }, function() {
                            n();
                        });
                    }
                }); else i(e);
            });
        }
    } ]), e;
}();

function c(i, n) {
    return new Promise(function(o, l) {
        wx.downloadFile({
            url: i,
            success: function(c) {
                if (200 !== c.statusCode) return console.error("downloadFile ".concat(i, " failed res.statusCode is not 200")), 
                void l();
                var s = c.tempFilePath;
                wx.getFileInfo({
                    filePath: s,
                    success: function(l) {
                        var c = l.size;
                        n ? function(e) {
                            if (e > r) return Promise.reject();
                            return new Promise(function(i, n) {
                                var o = a.totalSize ? a.totalSize : 0;
                                if (e + o <= r) i(); else {
                                    var l = [], c = JSON.parse(JSON.stringify(a));
                                    delete c.totalSize;
                                    var s, f = Object.keys(c).sort(function(e, t) {
                                        return c[e].time - c[t].time;
                                    }), u = t(f);
                                    try {
                                        for (u.s(); !(s = u.n()).done; ) {
                                            var d = s.value;
                                            if (o -= a[d].size, l.push(a[d].path), delete a[d], o + e < r) break;
                                        }
                                    } catch (e) {
                                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                        u.e(e);
                                    } finally {
                                        u.f();
                                    }
                                    a.totalSize = o;
                                }
                            });
                        }(c).then(function() {
                            (function(i, n, o) {
                                return new Promise(function(r, l) {
                                    wx.saveFile({
                                        tempFilePath: o,
                                        success: function(e) {
                                            var t = a.totalSize ? a.totalSize : 0;
                                            a[i] = {}, a[i].path = e.savedFilePath, a[i].time = new Date().getTime(), a[i].size = n, 
                                            a.totalSize = n + t, r(e.savedFilePath);
                                        },
                                        fail: function(n) {
                                            console.error("saveFile ".concat(i, " failed, then we delete all files, ").concat(JSON.stringify(n))), 
                                            r(o), wx.removeStorage({
                                                key: "savedFiles",
                                                success: function() {
                                                    wx.getSavedFileList({
                                                        success: function(i) {
                                                            !function(i) {
                                                                var n, o = t(i);
                                                                try {
                                                                    var r = function() {
                                                                        var t = n.value, i = t;
                                                                        "object" === e(t) && (i = t.filePath), wx.removeSavedFile({
                                                                            filePath: i,
                                                                            fail: function(e) {
                                                                                console.error("removeSavedFile ".concat(t, " failed, ").concat(JSON.stringify(e)));
                                                                            }
                                                                        });
                                                                    };
                                                                    for (o.s(); !(n = o.n()).done; ) r();
                                                                } catch (e) {
                                                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                                                    o.e(e);
                                                                } finally {
                                                                    o.f();
                                                                }
                                                            }(i.fileList);
                                                        },
                                                        fail: function(e) {
                                                            console.error("getSavedFileList failed, ".concat(JSON.stringify(e)));
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                });
                            })(i, c, s).then(function(e) {
                                o(e);
                            });
                        }, function() {
                            o(s);
                        }) : o(s);
                    },
                    fail: function(e) {
                        console.error("getFileInfo ".concat(c.tempFilePath, " failed, ").concat(JSON.stringify(e))), 
                        o(c.tempFilePath);
                    }
                });
            },
            fail: function(e) {
                console.error("downloadFile failed, ".concat(JSON.stringify(e), " ")), l();
            }
        });
    });
}

exports.default = l;