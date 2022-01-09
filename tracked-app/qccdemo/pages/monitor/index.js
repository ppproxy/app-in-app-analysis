(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/monitor/index" ], {
    3352: function(t, e, n) {},
    "54bf": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("ed6d")).default);
        }).call(this, n("543d").createPage);
    },
    7368: function(t, e, n) {
        var a = n("3352");
        n.n(a).a;
    },
    "847a": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = l(n("325c")), o = n("2f62"), i = l(n("9bad")), r = l(n("0190")), s = n("6a8b"), c = n("1448"), u = n("b291");
            function l(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function p(t) {
                return function(t) {
                    if (Array.isArray(t)) return y(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || d(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function m(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var n = [], a = !0, o = !1, i = void 0;
                        try {
                            for (var r, s = t[Symbol.iterator](); !(a = (r = s.next()).done) && (n.push(r.value), 
                            !e || n.length !== e); a = !0) ;
                        } catch (t) {
                            o = !0, i = t;
                        } finally {
                            try {
                                a || null == s.return || s.return();
                            } finally {
                                if (o) throw i;
                            }
                        }
                        return n;
                    }
                }(t, e) || d(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function d(t, e) {
                if (t) {
                    if ("string" == typeof t) return y(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(t, e) : void 0;
                }
            }
            function y(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
                return a;
            }
            function h(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, a);
                }
                return n;
            }
            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? h(Object(n), !0).forEach(function(e) {
                        g(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function g(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            var L = {
                components: {
                    appBottomLoading: function() {
                        n.e("components/app-bottom-loading/index").then(function() {
                            return resolve(n("c761"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    appVipPop: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/app-vip-pop/index") ]).then(function() {
                            return resolve(n("f446"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    appNoData: function() {
                        n.e("components/app-no-data/index").then(function() {
                            return resolve(n("cc7b"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    filterList: function() {
                        n.e("components/filter-list/index").then(function() {
                            return resolve(n("2eac"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    appAutoLogo: function() {
                        n.e("components/app-auto-logo/index").then(function() {
                            return resolve(n("28fe"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    appMonitorPop: function() {
                        n.e("components/app-monitor-pop/index").then(function() {
                            return resolve(n("d791"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        riskLevel: "",
                        category: "",
                        dateCode: 3,
                        type: "",
                        filterArr: [],
                        swiperIndex: "0",
                        isCompanyRadar: !0,
                        companyDynamicList: [],
                        companyDynamicPageIndex: 1,
                        companyDynamicLoading: !1,
                        companyDynamicRefresh: !1,
                        companyRefresh: !1,
                        reportRefresh: !1,
                        companyDynamicNoData: !1,
                        companyDynamicCanLoadNext: !0,
                        companyList: [],
                        companyTotalNum: "",
                        companyPageIndex: 1,
                        companyLoading: !1,
                        companyNoData: !1,
                        companyCanLoadNext: !0,
                        companySearchKey: "",
                        personList: [],
                        personTotalNum: "",
                        personPageIndex: 1,
                        personLoading: !0,
                        personNoData: !1,
                        personCanLoadNext: !0,
                        personSearchKey: "",
                        reportList: [],
                        reportListNoData: !1,
                        scrollTop: 0,
                        vipTip: "风险监控",
                        vipPop: !1,
                        reportCanLoadNext: !0,
                        reportLoading: !1,
                        companyListScrollTop: 0,
                        personListScrollTop: 0,
                        reportListScrollTop: 0,
                        dynamicItem2Top: 0,
                        categoryFilterTypeList: [],
                        monitorType: "",
                        numItems: [],
                        companyKey: "",
                        personKey: "",
                        radarCompanyCount: 0,
                        radarPersonCount: 0,
                        surplusCompanyCount: 0,
                        surplusPersonCount: 0,
                        RiskDimension: 60,
                        personDynamicScrollTop: 0,
                        DynamicTotalRecords: 0,
                        recommendList: [],
                        monitorShow: !1,
                        monitorShowTextA: "",
                        monitorShowTextB: "",
                        isInit: !1
                    };
                },
                onLoad: function(t) {
                    t && t.swiperIndex && (this.swiperIndex = t.swiperIndex), t && t.isCompanyRadar && (this.isCompanyRadar = "1" === t.isCompanyRadar);
                },
                computed: {
                    token: function() {
                        return this.$store.state.userInfo.token || "";
                    },
                    isLogin: function() {
                        return this.$store.state.userInfo.isLogin || !1;
                    },
                    isVIP: function() {
                        return this.$store.state.userInfo.userInfo.isVIP || !1;
                    },
                    isIPhone: function() {
                        return this.$store.state.systemInfo.isIPhone || !1;
                    },
                    isIPhoneX: function() {
                        return this.$store.state.systemInfo.isIPhoneX || !1;
                    },
                    platform: function() {
                        return this.$store.state.systemInfo.platform;
                    },
                    hasCode: function() {
                        return this.$store.state.userInfo.hasCode;
                    },
                    windowHeight: function() {
                        return this.$store.state.systemInfo.systemInfo.windowHeight || 400;
                    }
                },
                watch: {
                    token: function() {
                        this.isInit = !1, this.init();
                    }
                },
                onShow: function() {
                    var e = this;
                    if (this.hasCode) {
                        if (this.token) t.getStorageSync("monitor1") && (this.isInit = !1, t.removeStorageSync("monitor1"), 
                        this.setData({
                            riskLevel: "",
                            pageIndex: 1,
                            category: "",
                            dateCode: 3,
                            companyDynamicPageIndex: 1,
                            companyDynamicNoData: !1,
                            companyDynamicCanLoadNext: !0,
                            scrollTop: 0,
                            personDynamicScrollTop: 2,
                            companyPageIndex: 1,
                            companyLoading: !0,
                            companyNoData: !1,
                            companyCanLoadNext: !0,
                            companyListScrollTop: 2,
                            personPageIndex: 1,
                            personLoading: !0,
                            personNoData: !1,
                            personCanLoadNext: !0,
                            personListScrollTop: 2,
                            reportListScrollTop: 2,
                            reportListNoData: !1,
                            reportList: []
                        }), setTimeout(function() {
                            e.setData({
                                scrollTop: 0,
                                personDynamicScrollTop: 0,
                                companyListScrollTop: 0,
                                personListScrollTop: 0,
                                reportListScrollTop: 0
                            });
                        }, 300)), this.init();
                        (0, u.track)("corepage_exposure", {
                            "page_name|页面名称": "监控",
                            "page_detail|页面详情": ""
                        });
                    } else this.getToken().then(function() {}).catch(function() {});
                },
                onShareAppMessage: function() {
                    return {
                        title: "推荐你一款专业的企业查询工具，商务精英都在用！",
                        path: "/pages/home/index",
                        imageUrl: "https://eciapp-img.qichacha.com/community/5a607122-4a54-4992-9ebb-5e746cffcca51627524003777.png"
                    };
                },
                methods: f(f({}, (0, o.mapActions)([ "checkLogin", "refreshToken", "getToken" ])), {}, {
                    init: function() {
                        var t = this;
                        this.isInit || (this.isLogin ? (this.getCompanyList(), this.getReportList(), Promise.all([ this.getCategoryTree(), this.getCompanyDynamicList() ]).then(function(e) {
                            var n = m(e, 2), a = n[0], o = n[1];
                            a && o && (t.fillCategory(a, o), t.fillData(o));
                        }).catch(function() {}).finally(function() {
                            t.isInit = !0;
                        })) : this.isInit = !0);
                    },
                    cleverMonitor: function() {
                        var t = this;
                        (0, s.CleverMonitor)().then(function(e) {
                            e.result && (t.recommendList = e.result.slice(0, 3));
                        }).catch(function() {});
                    },
                    changeScrollTop: function() {},
                    fillCategory: function(t, e) {
                        var n = this;
                        if (!this.riskLevel && !this.category && 3 === this.dateCode) {
                            var a = [ {
                                key: "riskLevel",
                                label: "风险等级",
                                desc: "全部",
                                type: 1
                            }, {
                                key: "category",
                                label: "风险类型",
                                desc: "全部",
                                type: 3
                            }, {
                                key: "dateCode",
                                label: "更新时间",
                                desc: "全部",
                                type: 3
                            }, {
                                key: "type",
                                label: "监控对象",
                                desc: "全部",
                                type: 1
                            } ], o = [ {
                                value: "",
                                label: a[3].label,
                                desc: a[3].desc
                            }, {
                                value: "1",
                                label: "企业",
                                desc: "企业"
                            }, {
                                value: "2",
                                label: "人员",
                                desc: "人员"
                            } ];
                            this.filterArr = [ {
                                key: a[0].key,
                                label: a[0].label,
                                value: "",
                                desc: a[0].desc,
                                type: 1,
                                show: !1,
                                list: [ {
                                    value: "",
                                    label: a[0].label,
                                    desc: a[0].desc
                                }, {
                                    value: "1",
                                    label: "高风险",
                                    desc: "高风险"
                                }, {
                                    value: "2",
                                    label: "风险",
                                    desc: "风险"
                                }, {
                                    value: "3",
                                    label: "警示",
                                    desc: "警示"
                                }, {
                                    value: "4",
                                    label: "提示",
                                    desc: "提示"
                                }, {
                                    value: "5",
                                    label: "利好",
                                    desc: "利好"
                                } ]
                            }, {
                                key: a[1].key,
                                label: a[1].label,
                                value: "",
                                subValue: "",
                                subLabel: a[1].label,
                                desc: a[1].desc,
                                selectIndex: 0,
                                type: 3,
                                show: !1,
                                list: [ {
                                    desc: "全部",
                                    value: "",
                                    label: "全部",
                                    list: [ {
                                        value: "",
                                        label: "全部",
                                        desc: "全部"
                                    } ]
                                } ].concat(p(t.result.children.map(function(t) {
                                    var e = t.Desc;
                                    return "全部类型" === t.Desc && (e = ""), {
                                        desc: t.Desc,
                                        value: e,
                                        label: t.Desc,
                                        list: [ {
                                            value: t.NodeId,
                                            label: t.Desc,
                                            desc: "全部"
                                        } ].concat(p(t.children.map(function(t) {
                                            var n;
                                            return n = "全部" === t.Desc ? e : t.Desc, {
                                                value: t.NodeId,
                                                label: n,
                                                desc: t.Desc
                                            };
                                        })))
                                    };
                                })))
                            }, {
                                key: a[2].key,
                                label: "近30天",
                                value: 3,
                                desc: a[2].desc,
                                type: 1,
                                show: !1,
                                list: e.result.SelectDateCodeMapping.map(function(t) {
                                    return {
                                        value: t.DateCode,
                                        label: t.Desc,
                                        desc: t.Desc
                                    };
                                })
                            }, {
                                key: a[3].key,
                                label: o.find(function(t) {
                                    return t.value === n.type;
                                }).label || "",
                                value: o.find(function(t) {
                                    return t.value === n.type;
                                }).value || "",
                                desc: o.find(function(t) {
                                    return t.value === n.type;
                                }).value || "",
                                type: 1,
                                show: !1,
                                list: o
                            } ];
                        }
                    },
                    fillData: function(e) {
                        var n = this;
                        this.companyDynamicLoading = !1, 200 === e.status && (this.companyDynamicRefresh = !1, 
                        (!e.result.Result.RiskInfoList || e.result.Result.RiskInfoList.length < 10) && (this.companyDynamicCanLoadNext = !1), 
                        1 === this.companyDynamicPageIndex ? (this.DynamicTotalRecords = e.result.Paging.TotalRecords, 
                        e.result.Result && e.result.Result.RiskInfoList && e.result.Result.RiskInfoList.length ? (this.companyDynamicNoData = !1, 
                        this.companyDynamicList = e.result.Result.RiskInfoList.map(function(t) {
                            var e = t.CreateDate;
                            return t.CreateDate = e && "string" == typeof e.toLowerCase() ? a.default.getHourTime(e) : "", 
                            t.ImageUrl || (t.color = a.default.getRandomColor(), t.avatarText = t.Name.substr(0, 1)), 
                            t.Desc.Content = (0, i.default)("<div>" + t.Desc.Content + "</div>"), t;
                        }) || []) : (this.companyDynamicNoData = !0, this.companyDynamicList = [])) : (this.companyDynamicList = this.companyDynamicList.concat(e.result.Result.RiskInfoList.map(function(t) {
                            var e = t.CreateDate;
                            return t.CreateDate = e && "string" == typeof e.toLowerCase() ? a.default.getHourTime(e) : "", 
                            t.ImageUrl || (t.color = a.default.getRandomColor(), t.avatarText = t.Name.substr(0, 1)), 
                            t.Desc.Content = (0, i.default)("<div>" + t.Desc.Content + "</div>"), t;
                        })), this.companyDynamicCanLoadNext = 10 === e.result.Result.RiskInfoList.length), 
                        1 === this.companyDynamicPageIndex && this.companyDynamicList && this.companyDynamicList.length > 1 && setTimeout(function() {
                            t.createSelectorQuery().select(".dynamic-item2").boundingClientRect(function(t) {
                                t && t.top && n.setData({
                                    dynamicItem2Top: t.top
                                });
                            }).exec();
                        }, 300));
                    },
                    scrolling: function(t) {},
                    changeMonitorType: function(t) {
                        var e = Number(t.currentTarget.dataset.type);
                        0 === e && (e = ""), e !== this.monitorType && this.setData({
                            monitorType: e,
                            companyPageIndex: 1,
                            companyListScrollTop: 0,
                            companyCanLoadNext: !0
                        }), this.getCompanyList();
                    },
                    toRiskItemList: function() {
                        t.reLaunch({
                            url: "/pages/monitor/index?swiperIndex=1"
                        });
                    },
                    toCheckLogin: function() {
                        this.checkLogin("").then(function() {
                            t.navigateTo({
                                url: "/monitor-subpackages/add/index"
                            });
                        }).catch(function() {});
                    },
                    tabClick: function(t) {
                        this.swiperIndex = t.currentTarget.dataset.index;
                    },
                    swiperChange: function(t) {
                        this.swiperIndex = t.detail.current;
                    },
                    getCategoryTree: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return new Promise(function(e, n) {
                            (0, c.getCategoryTree)(t).then(e).catch(n);
                        });
                    },
                    getCompanyDynamicList: function() {
                        var t = this;
                        return this.companyDynamicLoading = !0, new Promise(function(e, n) {
                            (0, c.getMonitorDynamicList)({
                                riskLevel: t.riskLevel,
                                pageIndex: t.companyDynamicPageIndex,
                                category: t.category,
                                dateCode: t.dateCode,
                                type: t.type
                            }).then(e).catch(n);
                        });
                    },
                    filterCallBack: function(t) {
                        var e = this;
                        this[t.key] = t.value, "type" === t.key && (this.riskLevel = "", this.category = "", 
                        this.dateCode = 3), this.companyDynamicPageIndex = 1, this.companyDynamicList = [], 
                        this.companyDynamicCanLoadNext = !0, this.getCompanyDynamicList().then(function(n) {
                            e.fillData(n), "type" === t.key && e.getCategoryTree({
                                type: t.value
                            }).then(function(t) {
                                e.fillCategory(t, n);
                            });
                        });
                    },
                    loadMoreCompanyDynamic: function() {
                        var t = this;
                        this.companyDynamicCanLoadNext && (this.companyDynamicPageIndex = this.companyDynamicPageIndex + 1, 
                        this.getCompanyDynamicList().then(function(e) {
                            t.fillData(e);
                        }));
                    },
                    refreshRadarTag: function(t, e) {
                        (0, c.readDetail)({
                            keyNo: t,
                            readId: e
                        }).then(function() {}).catch(function() {}).finally(function() {});
                    },
                    toCompany: function(e) {
                        var n = e.currentTarget.dataset.unique, o = e.currentTarget.dataset.name;
                        this.isVIP ? n && (e.currentTarget.dataset.selfcount && "0" !== e.currentTarget.dataset.selfcount ? t.navigateTo({
                            url: "/monitor-subpackages/risk/detail/index?name=" + o + "&unique=" + n + "&index=" + e.currentTarget.dataset.index
                        }) : "p" === n[0] ? a.default.toast("该人员暂无自身风险") : a.default.toast("该企业暂无自身风险")) : this.vipPop = !0;
                    },
                    toCopDetail: function(t) {
                        var e = t.currentTarget.dataset, n = e.unique, a = e.name;
                        r.default.toCopDetail(n, a);
                    },
                    checkVip: function() {
                        this.isVIP || (this.vipPop = !0);
                    },
                    toCompanyRadarDetail: function(e) {
                        if (e.currentTarget.dataset.item) {
                            var n = JSON.parse(e.currentTarget.dataset.item), a = n.KeyNo, o = n.Id, i = n.IsRead, r = n.mpUrl;
                            if (0 === i) {
                                var s = e.currentTarget.dataset.index, c = this.companyDynamicList;
                                c[s].IsRead = 1, this.companyDynamicList = c;
                            }
                            var u = r;
                            if (!this.isVIP) return void (this.vipPop = !0);
                            u && t.navigateTo({
                                url: u
                            }), this.refreshRadarTag(a, o);
                        }
                    },
                    cancelMonitor: function(t) {
                        var e = this, n = t.currentTarget.dataset.unique, o = t.currentTarget.dataset.name, i = t.currentTarget.dataset.index;
                        (0, c.cancelMonitor)({
                            keyNos: n + "|" + o
                        }).then(function(t) {
                            if (200 === t.status) {
                                a.default.toast("取消监控成功"), e.companyTotalNum = e.companyTotalNum - 1;
                                var o = e.companyList;
                                if (e.setData({
                                    companyDynamicPageIndex: 1,
                                    companyDynamicNoData: !1,
                                    companyDynamicCanLoadNext: !0,
                                    scrollTop: 0,
                                    personListScrollTop: 0,
                                    reportListScrollTop: 0,
                                    reportListNoData: !1
                                }), e.getCompanyDynamicList().then(function(t) {
                                    e.fillData(t);
                                }), e.getReportList(), "p" === n[0]) {
                                    var r = e.numItems;
                                    r.forEach(function(t, e) {
                                        2 === t.value && (r[e].count = r[e].count > 0 ? r[e].count - 1 : r[e].count);
                                    }), e.numItems = r;
                                } else {
                                    var s = e.numItems;
                                    s.forEach(function(t, e) {
                                        1 === t.value && (s[e].count = s[e].count > 0 ? s[e].count - 1 : s[e].count);
                                    }), e.numItems = s;
                                }
                                e.companyList.length < 10 ? (e.setData({
                                    companyPageIndex: 1,
                                    companyList: [],
                                    companyNoData: !1,
                                    companyCanLoadNext: !0,
                                    companyListScrollTop: 0
                                }), e.getCompanyList()) : (o.splice(i, 1), e.companyList = o);
                            } else a.default.toast("取消监控失败");
                        }).catch(function() {}).finally(function() {});
                    },
                    getCompanyList: function() {
                        var t = this;
                        this.companyLoading = !0;
                        var e = "";
                        switch (this.monitorType) {
                          case "":
                            e = this.companySearchKey;
                            break;

                          case 1:
                            e = this.companyKey;
                            break;

                          case 2:
                            e = this.personKey;
                        }
                        (0, c.getMonitorList)({
                            pageIndex: this.companyPageIndex,
                            searchKey: e,
                            type: this.monitorType
                        }).then(function(e) {
                            if (200 === e.status) {
                                e.result.Result.length < 10 && (t.companyCanLoadNext = !1);
                                for (var n = 0; n < e.result.Result.length; n++) e.result.Result[n].Name && (e.result.Result[n].avatarText = e.result.Result[n].Name.substr(0, 1)), 
                                e.result.Result[n].color = a.default.getRandomColor();
                                if (t.companyLoading = !1, t.companyRefresh = !1, 1 === t.companyPageIndex) {
                                    if (e.result.Paging && "" === t.monitorType && (t.companyTotalNum = e.result.Paging.TotalRecords || 0), 
                                    e.result.GroupItems && e.result.GroupItems.length) if ("" === t.monitorType) t.companySearchKey || 0 === t.numItems.length && (t.numItems = e.result.GroupItems[0].items); else if (1 === t.monitorType) {
                                        var o = t.numItems;
                                        o.forEach(function(t, n) {
                                            e.result.GroupItems[0].items.forEach(function(a, i) {
                                                t.value === Number(a.value) && 1 === t.value && (o[n].count = Number(e.result.GroupItems[0].items[i].count));
                                            });
                                        }), t.numItems = o;
                                    } else if (2 === t.monitorType) {
                                        var i = t.numItems;
                                        i.forEach(function(t, n) {
                                            e.result.GroupItems[0].items.forEach(function(a, o) {
                                                t.value === Number(a.value) && 2 === t.value && (i[n].count = Number(e.result.GroupItems[0].items[o].count));
                                            });
                                        }), t.numItems = i;
                                    }
                                    e.result.Result.length < 1 ? (t.companyCanLoadNext = !1, t.companyNoData = !0, t.companyList = []) : t.companyList = e.result.Result || [];
                                } else e.result.Result.length < 10 && (t.companyCanLoadNext = !1), t.companyList = t.companyList.concat(e.result.Result);
                                t.companyList.length > 0 && (t.companyNoData = !1);
                            } else t.companyNoData = !0, t.companyList = [], t.companyLoading = !1;
                        }).catch(function() {});
                    },
                    clearCompanyInput: function() {
                        this.pageIndex = 1, 1 === this.monitorType ? this.companyKey = "" : 2 === this.monitorType ? this.personKey = "" : this.companySearchKey = "", 
                        this.getCompanyList();
                    },
                    loadMoreCompany: function() {
                        this.companyCanLoadNext && (this.companyPageIndex = this.companyPageIndex + 1, this.getCompanyList());
                    },
                    companyNameInput: function(t) {
                        this.setData({
                            companyPageIndex: 1,
                            companySearchKey: t.detail.value,
                            companyListScrollTop: 0
                        }), t.detail.value || this.setData({
                            companyCanLoadNext: !0
                        }), 1 !== this.companySearchKey.length && this.getCompanyList();
                    },
                    nameInput: function(t) {
                        var e = t.currentTarget.dataset.type;
                        this.companyPageIndex = 1, this.companyListScrollTop = 0;
                        var n = "";
                        1 === e ? n = "companyKey" : 2 === e && (n = "personKey"), t.detail.value || (this.companyCanLoadNext = !0), 
                        this[n] = t.detail.value, 1 !== this[n].length && this.getCompanyList();
                    },
                    loadMoreReport: function() {
                        this.reportCanLoadNext && this.getReportList();
                    },
                    getReportList: function() {
                        var t = this, e = {};
                        this.reportLoading = !0, this.reportList && this.reportList.length && this.reportList[this.reportList.length - 1] && (this.reportList[this.reportList.length - 1].radarId || this.reportList[this.reportList.length - 1].date) && (e.radarId = this.reportList[this.reportList.length - 1].radarId, 
                        e.date = this.reportList[this.reportList.length - 1].date), (0, c.getRadarDataPage)(e).then(function(e) {
                            try {
                                var n;
                                200 === e.status && (t.reportLoading = !1, t.reportRefresh = !1, t.radarCompanyCount = e.result.radarCompanyCount, 
                                t.radarPersonCount = e.result.radarPersonCount, t.surplusCompanyCount = e.result.surplusCompanyCount, 
                                t.surplusPersonCount = e.result.surplusPersonCount, t.RiskDimension = e.result.RiskDimension, 
                                (null === (n = e.result) || void 0 === n ? void 0 : n.radarDailyData) && (e.result.radarDailyData.length < 5 && (t.reportCanLoadNext = !1), 
                                t.reportList = [].concat(p(t.reportList), p(e.result.radarDailyData.map(function(t) {
                                    var e, n = 0, a = 0, o = 0, r = [];
                                    return (null === (e = t.radarData) || void 0 === e ? void 0 : e.changedata[0]) && (n = t.radarData.changedata[0].detail.dynamiccount, 
                                    a = t.radarData.changedata[0].detail.companychangecountv2, o = t.radarData.changedata[0].detail.personchangecountv2, 
                                    r = t.radarData.changedata[0].detail.changelist.map(function(t) {
                                        return {
                                            name: t.name,
                                            keyNo: t.Companykey,
                                            ChangeCount: t.ChangeCount,
                                            ImageUrl: t.imageUrl
                                        };
                                    })), {
                                        hasRead: t.hasRead,
                                        radarId: t.radarId,
                                        dateStr2: t.dateStr2,
                                        dateStr3: (0, i.default)("<div>" + t.dateStr2.split("|")[0] + (t.dateStr2.split("|")[1] ? '<span style="color:#bbb;">|</span>' + t.dateStr2.split("|")[1] : "") + "</div>"),
                                        dateStr: t.dateStr,
                                        hasInfo: t.dateStr.indexOf("至") > -1,
                                        date: t.date,
                                        Count: n,
                                        CompanyCount: a,
                                        PersonCount: o,
                                        LevelCountInfo: t.radarData.LevelCountInfo,
                                        radarData: {
                                            _id: t.radarData._id
                                        },
                                        Changelist: r
                                    };
                                })))), t.reportList.length < 1 && (t.reportListNoData = !0, t.cleverMonitor()));
                            } catch (t) {}
                        }).catch(function() {}).finally(function() {});
                    },
                    toReportList: function(t) {
                        var e = t.currentTarget.dataset.index, n = this.reportList[e], o = n.radarId, i = n.date, r = n.dateStr, s = n.hasRead;
                        if (n.Count) {
                            if (!s) {
                                var c = t.currentTarget.dataset.index, u = this.reportList;
                                u[c].hasRead = !0, this.reportList = u;
                            }
                            a.default.navigateTo({
                                url: "/monitor-subpackages/report/detail/index/index?id=" + o + "&date=" + i + "&dateStr=" + r
                            });
                        } else a.default.toast("未监控到相关企业/人员的风险出现变化");
                    },
                    refreshCompanyDynamic: function() {
                        var t = this;
                        this.setData({
                            companyDynamicPageIndex: 1,
                            companyDynamicList: [],
                            companyDynamicNoData: !1,
                            companyDynamicCanLoadNext: !0,
                            scrollTop: 0,
                            companyDynamicRefresh: !0
                        }), this.getCompanyDynamicList().then(function(e) {
                            t.fillData(e);
                        });
                    },
                    refreshCompanyList: function() {
                        this.setData({
                            companyPageIndex: 1,
                            companyList: [],
                            companyNoData: !1,
                            companyCanLoadNext: !0,
                            companyListScrollTop: 0,
                            companyRefresh: !0
                        }), this.getCompanyList();
                    },
                    refreshReportList: function() {
                        this.setData({
                            reportList: [],
                            reportListNoData: !1,
                            reportCanLoadNext: !0,
                            reportListScrollTop: 0,
                            reportRefresh: !0
                        }), this.getReportList();
                    },
                    cancel: function() {
                        this.vipPop = !1;
                    },
                    addMonitor: function(t) {
                        var e = this, n = "";
                        t.currentTarget.dataset.param ? n = t.currentTarget.dataset.param : this.recommendList.forEach(function(t, a) {
                            n += t.KeyNo + "|" + t.Name, a !== e.recommendList.length - 1 && (n += ",");
                        }), (0, c.addMonitor)({
                            keyNos: n,
                            isBatch: 0
                        }).then(function(t) {
                            if (t && 200 === t.status) e.monitorShowTextA = "您已监控 " + t.result.monitorCompanyCount + " 家企业", 
                            e.monitorShowTextB = "还可以监控 " + t.result.surplusCompanyCount + " 家企业", e.monitorShow = !0, 
                            e.isMonitored = !0, setTimeout(function() {
                                e.monitorShow = !1, e.isInit = !1, e.init();
                            }, 2e3), a.default.setStorageSync("monitor", !0), a.default.setStorageSync("monitor1", !0); else if (t && t.message) {
                                var n = t.message.replace(/<[^>]+>/g, "");
                                a.default.toast(n);
                            }
                        }).catch(function() {});
                    }
                })
            };
            e.default = L;
        }).call(this, n("543d").default);
    },
    9000: function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var a = function() {
            var t = this, e = (t.$createElement, t._self._c, !0 === t.isLogin && t.isInit ? t.__map(t.companyDynamicList, function(e, n) {
                return {
                    $orig: t.__get_orig(e),
                    g0: JSON.stringify(e),
                    g1: JSON.stringify(e)
                };
            }) : null), n = !0 === t.isLogin && t.isInit ? t.__map(t.reportList, function(e, n) {
                return {
                    $orig: t.__get_orig(e),
                    l1: e.Changelist && e.Changelist.length > 0 ? e.Changelist.slice(0, 4) : null
                };
            }) : null;
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: e,
                    l2: n
                }
            });
        }, o = [];
    },
    d673: function(t, e, n) {
        n.r(e);
        var a = n("847a"), o = n.n(a);
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = o.a;
    },
    ed6d: function(t, e, n) {
        n.r(e);
        var a = n("9000"), o = n("d673");
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n("7368");
        var r = n("f0c5"), s = Object(r.a)(o.default, a.b, a.c, !1, null, "45d98b61", null, !1, a.a, void 0);
        e.default = s.exports;
    }
}, [ [ "54bf", "common/runtime", "common/vendor" ] ] ]);