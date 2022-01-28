var e = require("../@babel/runtime/helpers/objectSpread2"), n = require("../@babel/runtime/helpers/classCallCheck"), t = require("../@babel/runtime/helpers/createClass"), o = require("../utils/util").apm, r = require("../utils/realtimeLog"), s = require("../utils/mtaTarget.js").newspapers, u = require("../config/index"), i = u.quanjuJson;

u.quanjuJson_test;

module.exports = function(u) {
    var a = u.Anim, c = u.request, l = u.config, g = a.wedux.observe;
    l.domain, l.appid;
    return g(new (function() {
        function u() {
            n(this, u), this.initUserInfo();
        }
        return t(u, [ {
            key: "initUserInfo",
            value: function() {
                this.userInfo = {
                    isAuth: !1,
                    phone: "",
                    isShow: !0,
                    isOpenWu: 1
                }, this.flag = !1;
            }
        }, {
            key: "fetchUserInfo",
            value: function() {
                var e = this;
                return c({
                    url: "/auth/wll/account/getloginuserinfo"
                }).then(function(n) {
                    if (console.log("res", n), null != n.phone) return o.initApmUk(n), e.userInfo.isAuth = !!n.phone, 
                    e.userInfo.phone = n.phone, e.userInfo;
                }).catch(function(e) {
                    wx.hideLoading(), wx.showModal({
                        title: "温馨提示",
                        content: "可能由于信号偏弱、网络不稳等原因，请稍后再试。",
                        showCancel: !1
                    }), console.log(e);
                });
            }
        }, {
            key: "getJson",
            value: function() {
                var e = this;
                wx.request({
                    url: i,
                    success: function(n) {
                        e.userInfo.isOpenWu = n.data.isOpenBDCheck, console.log(n, 1010);
                    },
                    fail: function(n) {
                        e.userInfo.isOpenWu = 1;
                    }
                });
            }
        }, {
            key: "confirmIsOnline",
            value: function() {
                var e = this, n = this;
                return new Promise(function(t, o) {
                    e.getNetworkType1().then(function(e) {
                        e ? t(!0) : (s({
                            eventId: "WhetherOffline_response_false"
                        }), wx.request({
                            url: i + "?time=" + new Date().getTime(),
                            timeout: 3e3,
                            enableCache: !1,
                            success: function(e) {
                                t(!0), s({
                                    eventId: "WhetherOffline_json_true"
                                }), console.log("此时属于微信 getNetworkType 误判，网络状态为 false，但是能请求 CDN 文件", e), n.wuPanReport();
                            },
                            fail: function(e) {
                                t(!1), s({
                                    eventId: "WhetherOffline_json_false"
                                }), console.log("wx.request quanjuJson fail 不能请求 CDN ，离线", e);
                            }
                        }));
                    });
                });
            }
        }, {
            key: "wuPanReport",
            value: function() {
                wx.getNetworkType({
                    success: function(e) {
                        switch (r.info({
                            eventMsg: "此时属于微信 getNetworkType 误判，网络状态为 false，但是能请求 CDN 文件",
                            networkType: e.networkType,
                            isCdnOnline: !0,
                            functionName: "confirmIsOnline"
                        }), r.addFilterMsg("wxNetworkTypeError"), e.networkType) {
                          case "2g":
                            s({
                                eventId: "getNetWorkType_2g_wupan"
                            });
                            break;

                          case "3g":
                            s({
                                eventId: "getNetWorkType_3g_wupan"
                            });
                            break;

                          case "4g":
                            s({
                                eventId: "getNetWorkType_4g_wupan"
                            });
                            break;

                          case "5g":
                            s({
                                eventId: "getNetWorkType_5g_wupan"
                            });
                            break;

                          case "wifi":
                            s({
                                eventId: "getNetWorkType_wifi_wupan"
                            });
                            break;

                          case "none":
                            s({
                                eventId: "getNetWorkType_none_wupan"
                            });
                            break;

                          default:
                            s({
                                eventId: "getNetWorkType_unknow_wupan"
                            });
                        }
                    }
                });
            }
        }, {
            key: "updateUserInfo",
            value: function(e) {
                o.initApmUk(e), this.userInfo = e;
            }
        }, {
            key: "login",
            value: function() {
                console.log("login");
            }
        }, {
            key: "checkAuth",
            value: function(e, n) {
                return !!this.userInfo.isAuth || (wx.hideLoading(), wx.showModal({
                    title: "提示",
                    content: "本次操作需要您进行登录验证",
                    success: function(n) {
                        console.log(n), n.confirm && (console.log(n), wx.navigateTo({
                            url: "/pages/gsd-ui/g-auth/face/face?url=" + e
                        }));
                    }
                }), !1);
            }
        }, {
            key: "getNetworkType1",
            value: function() {
                return new Promise(function(e, n) {
                    var t = [ "2g", "unknown", "none" ];
                    wx.getNetworkType({
                        success: function(n) {
                            switch (console.log(n, "网络状态"), n.networkType) {
                              case "2g":
                                s({
                                    eventId: "getNetWorkType_2g"
                                });
                                break;

                              case "3g":
                                s({
                                    eventId: "getNetWorkType_3g"
                                });
                                break;

                              case "4g":
                                s({
                                    eventId: "getNetWorkType_4g"
                                });
                                break;

                              case "5g":
                                s({
                                    eventId: "getNetWorkType_5g"
                                });
                                break;

                              case "wifi":
                                s({
                                    eventId: "getNetWorkType_wifi"
                                });
                                break;

                              case "none":
                                s({
                                    eventId: "getNetWorkType_none"
                                });
                                break;

                              default:
                                s({
                                    eventId: "getNetWorkType_unknow"
                                });
                            }
                            console.log(">>> getNetworkType1 success", n), -1 == t.indexOf(n.networkType) ? e(!0) : e(!1);
                        },
                        fail: function(n) {
                            console.log(">>> getNetworkType1 fail", n), e(!1);
                        }
                    });
                });
            }
        }, {
            key: "getNetworkType",
            value: function() {
                return wx.getNetworkType();
            }
        }, {
            key: "getIsWork",
            value: function(e) {
                var n = [ "2g", "3g", "unknown", "none" ];
                return console.log(n.indexOf(e), e), -1 == n.indexOf(e);
            }
        }, {
            key: "arraybuffer",
            value: function(e, n, t) {
                wx.downloadFile({
                    url: e,
                    success: function(e) {
                        wx.getFileSystemManager().readFile({
                            filePath: e.tempFilePath,
                            encoding: "base64",
                            success: function(e) {
                                var o = "data:image/png;base64," + e.data;
                                if (t) try {
                                    var r = wx.getStorageSync(t);
                                    r[n] = o, wx.setStorageSync(t, r);
                                } catch (e) {
                                    var s = {};
                                    s[n] = o, wx.setStorageSync(t, s);
                                } else wx.setStorageSync(n, o);
                            }
                        });
                    }
                });
            }
        }, {
            key: "getUserStorage",
            value: function() {
                var n = this;
                return this.getNetworkType1().then(function(t) {
                    if (!t.networkType || 0 === n.userInfo.isOpenWu) {
                        var o = wx.getStorageSync("user-session");
                        n.userInfo = e(e({}, o), {}, {
                            isOpenWu: n.userInfo.isOpenWu
                        });
                    }
                });
            }
        } ]), u;
    }())(), "user");
};