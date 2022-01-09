require("../../../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/search/index/index" ], {
    1933: function(t, e, i) {
        var n = i("b38e");
        i.n(n).a;
    },
    "25c0": function(t, e, i) {
        i.r(e);
        var n = i("5e19"), a = i("4286");
        for (var s in a) "default" !== s && function(t) {
            i.d(e, t, function() {
                return a[t];
            });
        }(s);
        i("1933");
        var l = i("f0c5"), r = Object(l.a)(a.default, n.b, n.c, !1, null, "fa88effc", null, !1, n.a, void 0);
        e.default = r.exports;
    },
    "292c": function(t, e, i) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = u(i("325c")), a = i("2f62"), s = u(i("0190")), l = u(i("9bad")), r = i("b291"), o = i("ab9f"), c = i("7c78");
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function d(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var i = [], n = !0, a = !1, s = void 0;
                        try {
                            for (var l, r = t[Symbol.iterator](); !(n = (l = r.next()).done) && (i.push(l.value), 
                            !e || i.length !== e); n = !0) ;
                        } catch (t) {
                            a = !0, s = t;
                        } finally {
                            try {
                                n || null == r.return || r.return();
                            } finally {
                                if (a) throw s;
                            }
                        }
                        return i;
                    }
                }(t, e) || p(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function h(t) {
                return function(t) {
                    if (Array.isArray(t)) return g(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || p(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function p(t, e) {
                if (t) {
                    if ("string" == typeof t) return g(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? g(t, e) : void 0;
                }
            }
            function g(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n;
            }
            function f(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), i.push.apply(i, n);
                }
                return i;
            }
            function y(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? f(Object(i), !0).forEach(function(e) {
                        m(t, e, i[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : f(Object(i)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                    });
                }
                return t;
            }
            function m(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t;
            }
            var b = {
                data: function() {
                    return {
                        key: "",
                        focus: !0,
                        keyList: [ "", "", [ "", "" ], "", "" ],
                        tabList: [ {
                            id: "company",
                            name: "企业"
                        }, {
                            id: "person",
                            name: "人员"
                        }, {
                            id: "risk",
                            name: "风险"
                        }, {
                            id: "intl",
                            name: "商标专利"
                        }, {
                            id: "financing",
                            name: "投融资"
                        } ],
                        tabIndex: 0,
                        filterArr: [ [], [], [ [], [] ], [], [], [] ],
                        canLoadNext: [ !0, !0, [ !0, !0 ], !0, !0 ],
                        recentList: [ [], [], [], [], [], [] ],
                        recentCopList: [ [], [], [], [], [], [] ],
                        hotList: [ [], [], [], [], [], [] ],
                        showMoreRecent: [ !1, !1, !1, !1, !1 ],
                        recentListExpand: [ !0, !0, !0, !0, !0 ],
                        pageIndex: [ 1, 1, [ 1, 1 ], 1, 1 ],
                        pageSize: [ 40, 20, [ 10, 10 ], 10, 10 ],
                        currentPage: [ 1, 1, [ 1, 1 ], 1, 1 ],
                        allPage: [ 1, 1, [ 1, 1 ], 1, 1 ],
                        loading: [ !1, !1, [ !1, !1 ], !1, !1 ],
                        scrollTop: [ 0, 0, [ 0, 0 ], 0, 0 ],
                        params: [ {}, {}, [ {}, {} ], {}, {} ],
                        sortList: [ [ {
                            key: "sort",
                            label: "排序",
                            value: "",
                            type: 1,
                            show: !1,
                            list: [ {
                                value: "",
                                label: "智能排序"
                            }, {
                                value: "registcapi_false",
                                label: "注册资本从高到底"
                            }, {
                                value: "registcapi_true",
                                label: "注册资本从低到高"
                            }, {
                                value: "startdate_true",
                                label: "成立日期从早到晚"
                            }, {
                                value: "startdate_false",
                                label: "成立日期从晚到早"
                            } ]
                        } ], [], [ {
                            key: "sort",
                            label: "排序",
                            value: "",
                            type: 1,
                            show: !1,
                            list: [ {
                                value: "",
                                label: "默认排序"
                            }, {
                                value: "_true",
                                label: "更新时间从早到晚"
                            }, {
                                value: "_false",
                                label: "更新时间从晚到早"
                            } ]
                        } ], [ {
                            key: "sort",
                            label: "排序",
                            value: "",
                            type: 1,
                            show: !1,
                            list: [ {
                                value: "",
                                label: "默认排序"
                            }, {
                                value: "appdate_true",
                                label: "申请日期从早到晚"
                            }, {
                                value: "appdate_false",
                                label: "申请日期从晚到早"
                            } ]
                        } ], [] ],
                        list0: {
                            person: {
                                count: 0,
                                title: [],
                                list: []
                            },
                            object: {
                                count: 0,
                                title: [],
                                list: []
                            },
                            company: {
                                count: 0,
                                title: [],
                                list: []
                            }
                        },
                        list1: {
                            count: 0,
                            title: [],
                            list: []
                        },
                        list2: {
                            valid1: {
                                count: 0,
                                title: [],
                                list: []
                            },
                            valid0: {
                                count: 0,
                                title: [],
                                list: []
                            }
                        },
                        list2RiskTop: {},
                        list3: {
                            count: 0,
                            title: [],
                            list: []
                        },
                        list4: {
                            count: 0,
                            title: [],
                            list: []
                        },
                        downloadPop: !1,
                        currentUnique: "",
                        currentContact: "",
                        list0FixedShow: [ !1, !1, !1 ],
                        exportPop: !1,
                        exportEmail: "",
                        list2RiskCompanyTop: 0,
                        list2Valid: 1,
                        startTime: 0,
                        endTime: 0,
                        needRefreshKey: !1,
                        list2Count: {
                            valid1: 0,
                            valid0: 0
                        },
                        placeholder: [ "请输入企业名、人名、品牌地址等", "请输入老板、股东、高管姓名", "请输入企业名、人名、案号、案件名称等", "请输入企业名、商标名、著作权名等", "请输入项目名、投资机构、企业名等" ],
                        vipTip: "",
                        paySourceType: "",
                        vipPop: !1,
                        NewCompanyLimitation: !1,
                        isInit: !1
                    };
                },
                components: {
                    appAutoLogo: function() {
                        i.e("components/app-auto-logo/index").then(function() {
                            return resolve(i("28fe"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    appNoData: function() {
                        i.e("components/app-no-data/index").then(function() {
                            return resolve(i("cc7b"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    appVipPop: function() {
                        Promise.all([ i.e("common/vendor"), i.e("components/app-vip-pop/index") ]).then(function() {
                            return resolve(i("f446"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    appBottomLoading: function() {
                        i.e("components/app-bottom-loading/index").then(function() {
                            return resolve(i("c761"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    filterList: function() {
                        i.e("components/filter-list/index").then(function() {
                            return resolve(i("2eac"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    appDownloadPop: function() {
                        i.e("components/app-download-pop/index").then(function() {
                            return resolve(i("8e35"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    sortList: function() {
                        i.e("components/sort-list/index").then(function() {
                            return resolve(i("9e19"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    appMorePhone: function() {
                        Promise.all([ i.e("common/vendor"), i.e("components/app-more-phone/index") ]).then(function() {
                            return resolve(i("26cf"));
                        }.bind(null, i)).catch(i.oe);
                    }
                },
                onLoad: function(e) {
                    var i = this;
                    try {
                        if (e.wxParamData) {
                            var n = decodeURIComponent(e.wxParamData);
                            this.paramData = JSON.parse(n);
                        }
                        e.index && (this.tabIndex = Number(e.index)), e.key && (this.key = decodeURIComponent(e.key) || "", 
                        2 === this.tabIndex ? this.keyList[this.tabIndex][this.list2Valid] = this.key : this.keyList[this.tabIndex] = this.key), 
                        t.$on("vipPop", function(t) {
                            t && (i.vipPop = !0, i.vipTip = "高级筛选", i.paySourceType = "高级筛选", (0, r.track)("fixedpage_searchresult_select_click", {
                                "content_type|筛选类型": i.tabList[i.tabIndex].name + "_更多筛选-VIP"
                            }));
                        }), (0, r.track)("searchpage_exposure", {
                            "page_name|页面名称": this.tabList[this.tabIndex].name
                        });
                    } catch (e) {}
                },
                computed: {
                    token: function() {
                        return this.$store.state.userInfo.token || "";
                    },
                    platform: function() {
                        return this.$store.state.systemInfo.platform;
                    },
                    phone: function() {
                        return this.$store.state.userInfo.userInfo.phone || "";
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
                    windowWidth: function() {
                        return this.$store.state.systemInfo.systemInfo.windowWidth || 375;
                    },
                    windowHeight: function() {
                        return this.$store.state.systemInfo.systemInfo.windowHeight || 400;
                    },
                    reviewStatus: function() {
                        return this.$store.state.systemInfo.reviewStatus;
                    },
                    email: function() {
                        return this.$store.state.userInfo.userInfo.email;
                    }
                },
                watch: {
                    token: function() {
                        this.isInit = !1, this.$refs["app-more-phone"].show && (this.$refs["app-more-phone"].show = !1), 
                        this.dataReset(), this.init();
                    }
                },
                onShow: function() {
                    this.token && (this.init(), this.initSearchCopHistory());
                },
                onShareAppMessage: function() {
                    return {
                        title: "推荐你一款专业的企业查询工具，商务精英都在用！",
                        imageUrl: "https://eciapp-img.qichacha.com/community/5a607122-4a54-4992-9ebb-5e746cffcca51627524003777.png",
                        path: "/pages/home/index"
                    };
                },
                methods: y(y({}, (0, a.mapActions)([ "checkLogin" ])), {}, {
                    init: function() {
                        var e = this;
                        try {
                            var i;
                            if (!this.isInit) this.isInit = !0, this.paramData && "{}" !== JSON.stringify(this.paramData) && (null === (i = this.paramData.slot_list) || void 0 === i ? void 0 : i.length) && (this.key = this.paramData.slot_list[0].value || "", 
                            2 === this.tabIndex ? this.keyList[this.tabIndex][this.list2Valid] = this.key : this.keyList[this.tabIndex] = this.key), 
                            this.reload(), this.email ? this.exportEmail = this.email : t.getStorage({
                                key: "exportEmailStorage",
                                success: function(t) {
                                    t && t.data && (e.exportEmail = t.data);
                                }
                            }), this.getFilterData(), this.initSearchCopHistory();
                        } catch (t) {}
                    },
                    getTateTitle2: function(t) {
                        return n.default.getTateTitle2(t);
                    },
                    getAreaCode: function(t) {
                        return {
                            key: "areaCode",
                            label: "全国",
                            value: "",
                            desc: "全国",
                            type: 4,
                            subValue: "",
                            subLabel: "全国",
                            thirdValue: "",
                            thirdLabel: "",
                            selectIndex: 0,
                            selectSubIndex: 0,
                            selectThirdIndex: 0,
                            show: !1,
                            list: t.result.map(function(t) {
                                return {
                                    value: t.code,
                                    desc: t.name,
                                    list: t.list.map(function(t) {
                                        return {
                                            value: t.code,
                                            desc: t.name,
                                            list: t.list.map(function(t) {
                                                return {
                                                    value: t.code,
                                                    desc: t.name
                                                };
                                            })
                                        };
                                    }) || []
                                };
                            }) || []
                        };
                    },
                    getIndustry: function(t) {
                        return {
                            key: "industryV3",
                            label: "全部行业",
                            value: "",
                            desc: "全部行业",
                            type: 4,
                            subValue: "",
                            subLabel: "全部行业",
                            thirdValue: "",
                            thirdLabel: "",
                            selectIndex: 0,
                            selectSubIndex: 0,
                            selectThirdIndex: 0,
                            show: !1,
                            list: t.result || []
                        };
                    },
                    getMoreOther: function(t) {
                        return {
                            show: !1,
                            key: "other",
                            label: "更多筛选",
                            value: "",
                            showVip: !0,
                            type: 5,
                            list: t.result.searchOpt.map(function(t) {
                                return {
                                    title: t.title,
                                    show: !0,
                                    list: t.options.map(function(t) {
                                        var e = {
                                            liquidation: "hasLQ",
                                            mortgage: "hasMP",
                                            disHonest: "hasShiXin",
                                            copyRight: "hasC",
                                            softCopyRight: "hasSC",
                                            website: "hasW",
                                            regPatent: "hasPatent",
                                            regTrade: "hasTM",
                                            iECredit: "hasCI",
                                            bidding: "hasTE",
                                            regPeache: "hasIPO",
                                            regFinance: "hasFinance",
                                            regEmail: "hasEmail",
                                            regCall: "hasMobilePhone",
                                            regPhone: "hasPhone",
                                            regCapiType: "currencyCode",
                                            comType: "coyType",
                                            regTime: "fundingTime",
                                            searchType: "searchKeyObject"
                                        };
                                        t.category = t.category.slice(0, 1).toLowerCase() + t.category.slice(1), e[t.category] && (t.category = e[t.category]);
                                        var i = {};
                                        return i.key = t.category, i.label = "不限", i.needVip = t.needVip, i.value = "checkbox" === t.type ? [] : "", 
                                        i.start = "", i.desc = "不限", i.type = "checkbox" === t.type ? 2 : 1, i.title = t.itemName, 
                                        i.show = "statusCodeSoc" !== t.category, t.value && (t.value = [ {
                                            itemName: "不限",
                                            itemValue1: "",
                                            itemValue2: ""
                                        } ].concat(h(t.value.filter(function(t) {
                                            return "不限" !== t.itemName;
                                        })))), [ "sureCnt", "fundingTime", "regCapi" ].includes(t.category) ? (i.start = "", 
                                        i.end = "", "fundingTime" === t.category ? i.list = [ {
                                            value: "",
                                            label: "不限",
                                            desc: "不限"
                                        }, {
                                            value: "0_1",
                                            label: "1年内",
                                            desc: "1年内"
                                        }, {
                                            value: "1_2",
                                            label: "1-2年",
                                            desc: "1-2年"
                                        }, {
                                            value: "2_3",
                                            label: "2-3年",
                                            desc: "2-3年"
                                        }, {
                                            value: "3_5",
                                            label: "3-5年",
                                            desc: "3-5年"
                                        }, {
                                            value: "5_10",
                                            label: "5-10年",
                                            desc: "5-10年"
                                        }, {
                                            value: "10_",
                                            label: "10年以上",
                                            desc: "10年以上"
                                        }, {
                                            value: "",
                                            label: "年限",
                                            desc: "年限",
                                            unit: "",
                                            diyDate2: !0
                                        } ] : "sureCnt" === t.category ? i.list = [ {
                                            value: "",
                                            label: "不限",
                                            desc: "不限"
                                        }, {
                                            value: "0,",
                                            label: "0",
                                            desc: "0"
                                        }, {
                                            value: "1,49",
                                            label: "1-49",
                                            desc: "1-49"
                                        }, {
                                            value: "50,99",
                                            label: "50-99",
                                            desc: "50-99"
                                        }, {
                                            value: "100,499",
                                            label: "100-499",
                                            desc: "100-499"
                                        }, {
                                            value: "500,999",
                                            label: "500-999",
                                            desc: "500-999"
                                        }, {
                                            value: "1000,4999",
                                            label: "1000-4999",
                                            desc: "1000-4999"
                                        }, {
                                            value: "5000,9999",
                                            label: "5000-9999",
                                            desc: "5000-9999"
                                        }, {
                                            value: "10000,",
                                            label: "10000以上",
                                            desc: "10000以上"
                                        }, {
                                            value: "",
                                            label: "人数",
                                            desc: "人数",
                                            unit: "人",
                                            maxValue: 1e6,
                                            toast: "参保人数最多输入100万",
                                            maxLength: 7,
                                            diyInput: !0
                                        } ] : "regCapi" === t.category && (i.list = [ {
                                            value: "",
                                            label: "不限",
                                            desc: "不限"
                                        }, {
                                            value: ",100",
                                            label: "100万以内",
                                            desc: "100万以内"
                                        }, {
                                            value: "100,200",
                                            label: "100万到200万",
                                            desc: "100万到200万"
                                        }, {
                                            value: "200,500",
                                            label: "200万到500万",
                                            desc: "200万到500万"
                                        }, {
                                            value: "500,1000",
                                            label: "500万到1000万",
                                            desc: "500万到1000万"
                                        }, {
                                            value: "1000,5000",
                                            label: "1000万到5000万",
                                            desc: "1000万到5000万"
                                        }, {
                                            value: "5000,",
                                            label: "5000万以上",
                                            desc: "5000万以上"
                                        }, {
                                            value: "",
                                            label: "资本",
                                            desc: "资本",
                                            unit: "万",
                                            maxValue: 2e4,
                                            maxLength: 5,
                                            toast: "注册资本最多输入2亿",
                                            diyInput: !0
                                        } ])) : i.list = t.value.map(function(e) {
                                            return {
                                                value: "checkbox" === t.type ? e.itemValue2 : e.itemValue1,
                                                label: e.itemName,
                                                desc: e.itemName
                                            };
                                        }), i;
                                    })
                                };
                            })
                        };
                    },
                    getFilterData: function() {
                        var t = this;
                        try {
                            this.filterArr[this.tabIndex].length || (0 === this.tabIndex ? Promise.all([ this.getIndustryList(), this.getAreaList(), this.getSearchOpt() ]).then(function(e) {
                                var i = d(e, 3), n = i[0], a = i[1], s = i[2];
                                n && a && s && t.filterArr.splice(t.tabIndex, 1, [ t.getAreaCode(a), t.getIndustry(n), t.getMoreOther(s) ]);
                            }).catch(function() {}) : 1 === this.tabIndex && Promise.all([ this.getIndustryList(), this.getAreaList() ]).then(function(e) {
                                var i = d(e, 2), n = i[0], a = i[1];
                                n && a && t.filterArr.splice(t.tabIndex, 1, [ t.getAreaCode(a), t.getIndustry(n) ]);
                            }).catch(function() {}));
                        } catch (t) {}
                    },
                    spChange: function(t) {
                        try {
                            this.tabIndex = Number(t.detail.current), this.inputFocus(), 2 === this.tabIndex ? (this.key !== this.keyList[this.tabIndex][this.list2Valid] || this.key.length < 2) && (this.reload(), 
                            this.getFilterData(), this.dataReset(!0), this.showMoreRecent[this.tabIndex] || this.toggleExpand(this.tabIndex)) : (this.key !== this.keyList[this.tabIndex] || this.key.length < 2) && (this.reload(), 
                            this.getFilterData(), this.dataReset(!0), this.showMoreRecent[this.tabIndex] || this.toggleExpand(this.tabIndex)), 
                            this.recentList[this.tabIndex] = this.recentList[this.tabIndex].map(function(t) {
                                return {
                                    key: t.key
                                };
                            }), (0, r.track)("searchpage_exposure", {
                                "page_name|页面名称": this.tabList[this.tabIndex].name
                            });
                        } catch (t) {}
                    },
                    tabClick: function(t) {
                        try {
                            this.tabIndex = Number(t.currentTarget.dataset.index), "mp-alipay" !== this.platform && "mp-360" !== this.platform || this.spChange({
                                detail: {
                                    current: this.tabIndex
                                }
                            });
                        } catch (t) {}
                    },
                    reload: function() {
                        try {
                            var t, e;
                            2 === this.tabIndex ? this.pageIndex[this.tabIndex][this.list2Valid] = 1 : this.pageIndex[this.tabIndex] = 1, 
                            (null === (t = this.key) || void 0 === t ? void 0 : t.length) > 1 ? (2 === this.tabIndex ? this.loading[this.tabIndex][this.list2Valid] = !0 : this.loading[this.tabIndex] = !0, 
                            this["getList" + this.tabIndex](!0)) : ((null === (e = this.hotList[this.tabIndex]) || void 0 === e ? void 0 : e.length) || (this.getListHot(), 
                            this.initSearchHistory()), this.getSearchDialogKeys());
                        } catch (t) {}
                    },
                    expendRecent: function() {
                        this.recentListExpand.splice(this.tabIndex, 1, !this.recentListExpand[this.tabIndex]);
                    },
                    getIndustryList: function() {
                        return new Promise(function(t, e) {
                            (0, o.getIndustry)().then(t).catch(e);
                        });
                    },
                    getAreaList: function() {
                        return new Promise(function(t, e) {
                            (0, o.getAreaList)().then(t).catch(e);
                        });
                    },
                    getSearchOpt: function() {
                        return new Promise(function(t, e) {
                            (0, c.getSearchOpt)({
                                cat: "ent"
                            }).then(t).catch(e);
                        });
                    },
                    getSearchDialogKeys: function() {
                        var t = this;
                        (0, c.getSearchDialogKeys)({}).then(function(e) {
                            var i, n, a;
                            (null == e || null === (i = e.result) || void 0 === i || null === (n = i.companyKey) || void 0 === n ? void 0 : n.length) && (t.placeholder[0] = null == e || null === (a = e.result) || void 0 === a ? void 0 : a.companyKey[0]);
                        }).catch(function() {});
                    },
                    getList0: function(t) {
                        this.key.length > 1 ? (t && (this.getList0Person(), this.getList0Product()), this.getList0Company()) : this.list0.person.count = 0;
                    },
                    getList1: function() {
                        this.key.length > 1 ? this.getList1Person() : this.list1.count = 0;
                    },
                    getList2: function() {
                        this.key.length > 1 ? (this.getList2Risk(this.list2Valid), this.getList2Count()) : (this.list2.valid1.count = 0, 
                        this.list2.valid0.count = 0);
                    },
                    getList3: function() {
                        this.key.length > 1 ? this.getList3Intl() : this.list3.count = 0;
                    },
                    getList4: function() {
                        this.key.length > 1 ? this.getList4Project() : this.list3.count = 0;
                    },
                    getList4Project: function() {
                        var t = this;
                        (0, c.searchProjectV2)(y(y({
                            pageIndex: this.pageIndex[this.tabIndex]
                        }, this.params[this.tabIndex]), {}, {
                            searchKey: this.key
                        })).then(function(e) {
                            try {
                                var i, a, s, r, o;
                                200 === (null == e ? void 0 : e.status) && e.result ? ((null == e || null === (i = e.result) || void 0 === i || null === (a = i.Paging) || void 0 === a ? void 0 : a.ShowTotal) ? (t.list4.count = e.result.Paging.TotalRecords, 
                                t.list4.title = (0, l.default)('<div>搜索到 <span style="color:#fe5151;">' + e.result.Paging.ShowTotal + "</span>  个投融资信息</div>"), 
                                t.allPage[t.tabIndex] = Math.ceil(e.result.Paging.TotalRecords / e.result.Paging.PageSize)) : t.list4.count = 0, 
                                e.result.FilterOptions && e.result.FilterOptions.length && !t.params[t.tabIndex].type && !t.params[t.tabIndex].startyear && 1 === t.pageIndex[t.tabIndex] && function() {
                                    for (var i = [], n = [ {
                                        key: "type",
                                        label: "全部类型",
                                        desc: "全部类型"
                                    }, {
                                        key: "startyear",
                                        label: "全部年份",
                                        desc: "全部年份"
                                    } ], a = function(t) {
                                        var a, s, l = null === (a = e.result) || void 0 === a || null === (s = a.FilterOptions) || void 0 === s ? void 0 : s.filter(function(e) {
                                            return e.key.toLowerCase() === n[t].key.toLowerCase();
                                        });
                                        l.length && i.push({
                                            key: n[t].key,
                                            label: n[t].label,
                                            value: "",
                                            desc: n[t].desc,
                                            type: 1,
                                            show: !1,
                                            list: l[0].items.map(function(t) {
                                                return {
                                                    value: t.value,
                                                    label: t.desc,
                                                    desc: t.desc
                                                };
                                            })
                                        });
                                    }, s = 0; s < n.length; s++) a(s);
                                    t.filterArr[t.tabIndex] = i;
                                }(), (null === (s = e.result) || void 0 === s ? void 0 : s.Result.length) ? (t.list4.list = [].concat(h(t.list4.list), h(e.result.Result.map(function(e) {
                                    var i, a = "";
                                    e.router = decodeURIComponent(decodeURIComponent(e.router)), e.router.includes("qccfun://InstitutionDetail") ? a = "/company-brand/invest/detail/index?id=" + n.default.getQueryString(e.router, "unique") + "&name=" + n.default.getQueryString(e.router, "comName") : e.router.includes("company/product/detail") ? a = "/company-brand/product/detail/index?id=" + n.default.getQueryString(e.router, "productid") : e.router.includes("group/info") && (a = "/company-group/index/index/index?unique=" + n.default.getQueryString(e.router, "groupId") + "&name=&type=");
                                    var s = [];
                                    return (null == e || null === (i = e.titleElement) || void 0 === i ? void 0 : i.tags) && (s = e.titleElement.tags.map(function(t) {
                                        return t.bg = n.default.colorRgba(t.color, .12), t;
                                    })), {
                                        titleElement: {
                                            tags: s,
                                            title: t.filterRichText(e.titleElement.title.text),
                                            hasImage: e.titleElement.hasImage,
                                            image: e.titleElement.image,
                                            tag: e.titleElement.tag || {}
                                        },
                                        descElement: e.descElement,
                                        contentElement: {
                                            dataList: e.contentElement.dataList.map(function(e) {
                                                var i, a, s = [], r = [];
                                                return (null == e || null === (i = e.highlight) || void 0 === i ? void 0 : i.length) ? (null === (a = s = e.value.split(/([，])|([...])/)) || void 0 === a ? void 0 : a.length) && (s = s.map(function(t) {
                                                    var i = {
                                                        keyNo: ""
                                                    };
                                                    return e.highlight.forEach(function(e, a) {
                                                        e.name === t && (e.name.includes("查看全部") ? i.rich = e.name : i.rich = (0, l.default)('<span style="color:#128BED">' + t.replace(/<em>/g, '<em style="font-style:normal;color:#FF6060">') + "</span>"), 
                                                        e.name.includes("查看全部") ? i.more = !0 : i.keyNo = n.default.getQueryString(e.router, "unique"));
                                                    }), i;
                                                })) : r = t.filterRichText(e.value || "-"), {
                                                    label: e.label,
                                                    value: r,
                                                    highlight: s
                                                };
                                            })
                                        },
                                        mpUrl: a,
                                        hasArrow: e.hasArrow
                                    };
                                }))), t.canLoadNext[t.tabIndex] = !!((null == e || null === (r = e.result) || void 0 === r || null === (o = r.Result) || void 0 === o ? void 0 : o.length) && 10 === e.result.Result.length && t.pageIndex[t.tabIndex] < 10)) : (t.list4 = {
                                    count: 0,
                                    title: [],
                                    list: []
                                }, t.canLoadNext[t.tabIndex] = !1)) : (t.list4 = {
                                    count: 0,
                                    title: [],
                                    list: []
                                }, t.canLoadNext[t.tabIndex] = !1);
                            } catch (e) {
                                t.canLoadNext[t.tabIndex] = !1;
                            }
                            t.$forceUpdate(), t.loading[t.tabIndex] = !1;
                        }).catch(function() {}).finally(function() {
                            t.keyList[t.tabIndex] = t.key;
                        });
                    },
                    getList2Count: function() {
                        var t = this;
                        (0, c.getSearchRiskCount)({
                            searchKey: this.key
                        }).then(function(e) {
                            (null == e ? void 0 : e.result) && 200 === e.status ? (t.list2.valid1.count = e.result.count, 
                            t.list2.valid0.count = e.result.historyCount, t.list2Count.valid0 = e.result.historyCount, 
                            t.list2Count.valid1 = e.result.count) : (t.list2Count.valid0 = 0, t.list2Count.valid1 = 0);
                        });
                    },
                    list2Tab: function(t) {
                        var e = t.currentTarget.dataset.valid;
                        e = Number(e), this.list2Valid = e, this.currentPage[this.tabIndex].splice(this.list2Valid, 1, 1), 
                        this.scrollTop[this.tabIndex].splice(this.list2Valid, 1, 0), (this.key !== this.keyList[this.tabIndex][e] || this.key.length < 2) && (this.loading[this.tabIndex][this.list2Valid] = !0, 
                        this.$forceUpdate(), this.getList2()), (0, r.track)("search_result_button_click", {
                            "search_detail|搜索词详情": this.key,
                            "button_name|按钮名称": 1 === e ? "当前风险" : "历史风险",
                            "page_name|页面名称": this.tabList[this.tabIndex].name
                        });
                    },
                    getList2Risk: function() {
                        var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, i = this.params[this.tabIndex][e];
                        if (null == i ? void 0 : i.sort) {
                            var a = i.sort.split("_");
                            i.sortField = a[0], i.isSortAsc = a[1];
                        } else i.sortField = "", i.isSortAsc = "";
                        i.type ? i.searchType = i.type : i.searchType = "";
                        var s = {};
                        for (var r in i.province && (s.pr = [ i.province ]), i.courtyear && (s.cy = i.courtyear), 
                        s = "{}" === JSON.stringify(s) ? "" : JSON.stringify(s), i) i[r] || delete i[r];
                        (0, c.searchRisk)(y(y({
                            pageIndex: this.pageIndex[this.tabIndex][e]
                        }, i), {}, {
                            filter: s,
                            searchKey: this.key,
                            isShowEm: !0,
                            pageSize: 10,
                            isValid: e
                        })).then(function(a) {
                            var s, r, o, c, u, d;
                            200 === (null == a ? void 0 : a.status) && (null == a || null === (s = a.result) || void 0 === s ? void 0 : s.Result) ? ((null == a || null === (c = a.result) || void 0 === c || null === (u = c.Paging) || void 0 === u ? void 0 : u.TotalRecords) ? (t.list2["valid" + e].count = a.result.Paging.TotalRecords, 
                            t.list2["valid" + e].title = (0, l.default)('<div>搜索到 <span style="color:#fe5151;">' + t.list2["valid" + e].count + "</span> 条风险信息</div>"), 
                            t.allPage[t.tabIndex][e] = Math.ceil(a.result.Paging.TotalRecords / a.result.Paging.PageSize)) : t.list2["valid" + e].count = 0, 
                            (null == a || null === (d = a.result) || void 0 === d ? void 0 : d.riskTop1) && 1 === e ? t.list2RiskTop = {
                                Name: a.result.riskTop1.Name,
                                KeyNo: a.result.riskTop1.KeyNo,
                                ImageUrl: a.result.riskTop1.ImageUrl,
                                ShortStatus: a.result.riskTop1.ShortStatus,
                                StatusColor: a.result.riskTop1.StatusColor,
                                Result: a.result.riskTop1.Result.map(function(t) {
                                    return {
                                        Title: t.Title,
                                        TotalCount: t.TotalCount,
                                        List: t.List.map(function(t) {
                                            return t.desc.length > 14 && (t.desc = t.desc.substring(0, 14 - Math.floor(t.count.toString().length / 2)) + "... "), 
                                            t;
                                        }),
                                        EmptyDataDesc: t.EmptyDataDesc
                                    };
                                })
                            } : 1 === e && (t.list2RiskTop = {}), a.result.GroupItems && a.result.GroupItems.length && !(i.type || i.province || i.courtyear) && 1 === t.pageIndex[t.tabIndex][e] && function() {
                                for (var i = [], n = [ {
                                    key: "type",
                                    label: "全部类型",
                                    desc: "全部类型"
                                }, {
                                    key: "province",
                                    label: "全国",
                                    desc: "全国"
                                }, {
                                    key: "courtyear",
                                    label: "全部年份",
                                    desc: "全部年份"
                                } ], s = function(t) {
                                    var e, s, l = null === (e = a.result) || void 0 === e || null === (s = e.GroupItems) || void 0 === s ? void 0 : s.filter(function(e) {
                                        return e.key.toLowerCase() === n[t].key.toLowerCase();
                                    });
                                    "type" === n[t].key && (l[0].items = l[0].items.sort(function(t, e) {
                                        return e.count - t.count;
                                    }));
                                    var r = l[0].items.map(function(t) {
                                        return {
                                            value: t.value,
                                            label: t.desc,
                                            desc: t.desc
                                        };
                                    }).filter(function(t) {
                                        return t.desc && "1" !== t.desc;
                                    });
                                    l.length && i.push({
                                        key: n[t].key,
                                        label: n[t].label,
                                        value: "",
                                        desc: n[t].desc,
                                        type: 1,
                                        show: !1,
                                        list: [ {
                                            value: "",
                                            label: n[t].label,
                                            desc: n[t].desc
                                        } ].concat(r)
                                    });
                                }, l = 0; l < n.length; l++) s(l);
                                t.filterArr[t.tabIndex][e] = i;
                            }(), t.list2["valid" + e].list = [].concat(h(t.list2["valid" + e].list), h(a.result.Result.map(function(e) {
                                var i, a = {};
                                return (null == e || null === (i = e.HitReason) || void 0 === i ? void 0 : i.Field) && (a.Value = t.filterRichText(e.HitReason.Value.replace(/\n/, "<br/>")), 
                                a.Field = e.HitReason.Field), {
                                    Tags: e.Tags.map(function(t) {
                                        return t.bg = n.default.colorRgba(t.Color, .12), t;
                                    }),
                                    Id: e.Id,
                                    TypeDesc: e.TypeDesc,
                                    Type: e.Type ? Number(e.Type) : "",
                                    DataList: e.DataList.map(function(e) {
                                        return e.Value = e.Value ? e.Value.toString().replace(/\n/, "<br/>") : "", e.Value || (e.Value = "-"), 
                                        {
                                            label: e.Label,
                                            value: t.filterRichText(e.Value)
                                        };
                                    }),
                                    H5Url: e.H5Url,
                                    Title: t.filterRichText(e.Title),
                                    hasArrow: e.hasArrow,
                                    HitReason: a
                                };
                            })))) : (1 === t.pageIndex[t.tabIndex][e] && (t.list2["valid" + e] = {
                                count: 0,
                                title: [],
                                list: []
                            }), 1 === e && (t.list2RiskTop = {})), t.$forceUpdate(), t.canLoadNext[t.tabIndex][e] = !!((null == a || null === (r = a.result) || void 0 === r || null === (o = r.Result) || void 0 === o ? void 0 : o.length) && 10 === a.result.Result.length && t.pageIndex[t.tabIndex][e] < 10), 
                            t.loading[t.tabIndex][e] = !1, t.$forceUpdate(), 1 === e && setTimeout(function() {
                                n.default.getDomInfo("#search-tip2").then(function(e) {
                                    e && e[0] && e[0].height && (t.list2RiskCompanyTop = e[0].height + n.default.rpxToPx(t.windowWidth, 182));
                                });
                            }, 500);
                        }).catch(function() {}).finally(function() {
                            t.keyList[t.tabIndex][t.list2Valid] = t.key;
                        });
                    },
                    getList3Intl: function() {
                        var t = this, e = this.params[this.tabIndex];
                        if (e.sort) {
                            var i = e.sort.split("_");
                            e.sortField = i[0], e.isSortAsc = i[1];
                        } else e.sortField = "", e.isSortAsc = "";
                        (0, c.searchIntl)(y(y({
                            pageIndex: this.pageIndex[this.tabIndex]
                        }, e), {}, {
                            searchKey: this.key,
                            pageSize: 10
                        })).then(function(i) {
                            var a, s, r, o, c;
                            200 === (null == i ? void 0 : i.status) && (null == i || null === (a = i.result) || void 0 === a ? void 0 : a.Result) ? ((null == i || null === (o = i.result) || void 0 === o || null === (c = o.Paging) || void 0 === c ? void 0 : c.ShowTotal) ? (t.list3.count = Number(i.result.Paging.ShowTotal), 
                            t.list3.title = (0, l.default)('<div>搜索到 <span style="color:#fe5151;">' + t.list3.count + "</span> 条商标专利信息</div>"), 
                            t.allPage.splice(t.tabIndex, 1, Math.ceil(i.result.Paging.TotalRecords / i.result.Paging.PageSize))) : t.list3.count = 0, 
                            i.result.FilterOptions && i.result.FilterOptions.length && !e.type && !e.groupyear && 1 === t.pageIndex[t.tabIndex] && function() {
                                for (var e = [], n = [ {
                                    key: "type",
                                    label: "全部类型",
                                    desc: "全部类型"
                                }, {
                                    key: "groupyear",
                                    label: "全部年份",
                                    desc: "全部年份"
                                } ], a = function(t) {
                                    var a, s, l = null === (a = i.result) || void 0 === a || null === (s = a.FilterOptions) || void 0 === s ? void 0 : s.filter(function(e) {
                                        return e.key.toLowerCase() === n[t].key.toLowerCase();
                                    });
                                    l.length && e.push({
                                        key: n[t].key,
                                        label: n[t].label,
                                        value: "",
                                        desc: n[t].desc,
                                        type: 1,
                                        show: !1,
                                        list: l[0].items.map(function(t) {
                                            return {
                                                value: t.value,
                                                label: t.desc,
                                                desc: t.desc
                                            };
                                        }).filter(function(t) {
                                            return t.desc && "1" !== t.desc;
                                        })
                                    });
                                }, s = 0; s < n.length; s++) a(s);
                                t.filterArr[t.tabIndex] = e;
                            }(), t.list3.list = [].concat(h(t.list3.list), h(i.result.Result.map(function(e) {
                                var i, a, s = "";
                                e.router = e.router ? decodeURIComponent(decodeURIComponent(e.router)) : "", e.router.includes("/brand-info/brand-detail") ? (s = "/company-property/brand/detail/index?id=" + n.default.getQueryString(e.router, "id") + "&name=" + n.default.getQueryString(e.router, "p"), 
                                a = 0) : e.router.includes("patent/detail") ? (s = "/company-property/patent/detail/index?id=" + n.default.getQueryString(e.router, "id") + "&name=" + n.default.getQueryString(e.router, "p"), 
                                a = 1) : e.router.includes("software-copyright/detail") ? (s = "/company-property/copyright/detail/index?copyRightNo=" + n.default.getQueryString(e.router, "copyRightNo") + "&name=" + n.default.getQueryString(e.router, "p") + "&type=2", 
                                a = 3) : e.router.includes("copyright/detail") && (s = "/company-property/copyright/detail/index?copyRightNo=" + n.default.getQueryString(e.router, "copyRightNo") + "&name=" + n.default.getQueryString(e.router, "p") + "&type=1", 
                                a = 2);
                                var r = [];
                                return (null == e || null === (i = e.titleElement) || void 0 === i ? void 0 : i.tags) && (r = e.titleElement.tags.map(function(t) {
                                    return t.bg = n.default.colorRgba(t.color, .12), t;
                                })), {
                                    titleElement: {
                                        tags: r,
                                        title: t.filterRichText(e.titleElement.title.text || "-"),
                                        hasImage: e.titleElement.hasImage,
                                        image: e.titleElement.image,
                                        tag: e.titleElement.tag
                                    },
                                    contentElement: {
                                        dataList: e.contentElement.dataList.map(function(e) {
                                            var i, a, s = [], r = [];
                                            return (null == e || null === (i = e.highlight) || void 0 === i ? void 0 : i.length) ? (null === (a = s = e.value.split("，")) || void 0 === a ? void 0 : a.length) && (s = s.map(function(t) {
                                                var i = {
                                                    keyNo: ""
                                                };
                                                return e.highlight.forEach(function(e, a) {
                                                    e.name === t && (i.rich = (0, l.default)('<span style="color:#128BED">' + t.replace(/<em>/g, '<em style="font-style:normal;color:#FF6060">') + "</span>"), 
                                                    i.keyNo = n.default.getQueryString(e.router, "unique"));
                                                }), i;
                                            })) : r = t.filterRichText(e.value || "-"), {
                                                label: e.label,
                                                value: r,
                                                highlight: s
                                            };
                                        })
                                    },
                                    type: a,
                                    mpUrl: s,
                                    hasArrow: e.hasArrow
                                };
                            })))) : t.list3 = {
                                count: 0,
                                title: [],
                                list: []
                            }, t.$forceUpdate(), t.canLoadNext.splice(t.tabIndex, 1, !!((null == i || null === (s = i.result) || void 0 === s || null === (r = s.Result) || void 0 === r ? void 0 : r.length) && 10 === i.result.Result.length && t.pageIndex[t.tabIndex] < 10)), 
                            t.loading.splice(t.tabIndex, 1, !1);
                        }).catch(function() {}).finally(function() {
                            t.keyList.splice(t.tabIndex, 1, t.key);
                        });
                    },
                    searchKeyChange: function(t) {
                        this.key = t.detail.value, this.searchKeyAction();
                    },
                    searchKeyAction: function() {
                        var t, e = this;
                        2 === this.tabIndex ? this.keyList[this.tabIndex][this.list2Valid] = this.key : this.keyList[this.tabIndex] = this.key, 
                        this.key.length > 1 ? (this.resetFilter(), this.paramReset(), this.dataReset(!0), 
                        this.$nextTick(function() {
                            2 === e.tabIndex ? (e.loading[e.tabIndex][e.list2Valid] = !0, e.scrollTop[e.tabIndex][e.list2Valid] = 0) : (e.loading[e.tabIndex] = !0, 
                            e.scrollTop[e.tabIndex] = 0), e["getList" + e.tabIndex](!0);
                        })) : ((null === (t = this.hotList[this.tabIndex]) || void 0 === t ? void 0 : t.length) || this.getListHot(), 
                        this.$refs["sort_" + this.tabIndex] && this.$refs["sort_" + this.tabIndex][0] && this.$refs["sort_" + this.tabIndex][0].overlayClick());
                    },
                    clearInput: function() {
                        var t = this;
                        this.key = "", this.focus = !1, 2 === this.tabIndex ? this.keyList[this.tabIndex] = [ "", "" ] : this.keyList[this.tabIndex] = "", 
                        setTimeout(function() {
                            t.focus = !0;
                        }, 200), this.resetFilter(), this.paramReset(), this.dataReset(!0), this.reload(), 
                        this.needRefreshKey && this.toggleExpandAll();
                    },
                    inputFocus: function() {
                        (this.$refs["filter" + this.tabIndex] && this.$refs["filter" + this.tabIndex][0] || this.$refs["filter" + this.tabIndex + "_" + this.list2Valid] && this.$refs["filter" + this.tabIndex + "_" + this.list2Valid][0]) && (2 === this.tabIndex ? this.$refs["filter" + this.tabIndex + "_" + this.list2Valid][0].overlayClick() : this.$refs["filter" + this.tabIndex][0].overlayClick());
                    },
                    resetFilter: function(t) {
                        this.$refs["filter" + this.tabIndex] && this.$refs["filter" + this.tabIndex][0] && this.$refs["filter" + this.tabIndex][0].reload(this.filterArr[this.tabIndex], t);
                    },
                    toObject: function(t) {
                        var e = t.currentTarget.dataset.url;
                        n.default.navigateTo({
                            url: e
                        }), (0, r.track)("search_result_button_click", {
                            "search_detail|搜索词详情": this.key,
                            "button_name|按钮名称": "集团/投资机构/品牌产品列表",
                            "content_type|内容类型": "企业",
                            "page_name|页面名称": "企业"
                        });
                    },
                    toAllObject: function() {
                        this.tabIndex = 4, (this.key !== this.keyList[this.tabIndex] || this.key.length < 2) && this.reload(), 
                        (0, r.track)("search_result_button_click", {
                            "search_detail|搜索词详情": this.key,
                            "button_name|按钮名称": "集团/投资机构/品牌产品_查看全部",
                            "page_name|页面名称": "企业"
                        });
                    },
                    toAllPerson: function() {
                        this.tabIndex = 1, (this.key !== this.keyList[this.tabIndex] || this.key.length < 2) && this.reload(), 
                        (0, r.track)("search_result_button_click", {
                            "search_detail|搜索词详情": this.key,
                            "button_name|按钮名称": "相关人员_查看全部",
                            "page_name|页面名称": "企业"
                        });
                    },
                    scrolling: function(t) {
                        var e = this;
                        try {
                            !function() {
                                if (2 === e.tabIndex ? e.scrollTop[e.tabIndex][e.list2Valid] = t.detail.scrollTop : e.scrollTop[e.tabIndex] = t.detail.scrollTop, 
                                0 === e.tabIndex) {
                                    var i = e.windowWidth / 375;
                                    e.list0.person.count > 0 && e.list0.object.count > 0 && (t.detail.scrollTop >= 0 && t.detail.scrollTop < 116 * i ? !0 !== e.list0FixedShow[0] && (e.list0FixedShow[0] = !0) : t.detail.scrollTop > 153 * i && t.detail.scrollTop < 252 * i ? !0 !== e.list0FixedShow[1] && (e.list0FixedShow[1] = !0) : t.detail.scrollTop > 292 * i ? !0 !== e.list0FixedShow[2] && (e.list0FixedShow[2] = !0) : e.list0FixedShow = [ !1, !1, !1 ]), 
                                    e.list0.person.count > 0 && e.list0.object.count < 1 && (t.detail.scrollTop >= 0 && t.detail.scrollTop < 116 * i ? !0 !== e.list0FixedShow[0] && (e.list0FixedShow[0] = !0) : t.detail.scrollTop > 153 * i ? !0 !== e.list0FixedShow[2] && (e.list0FixedShow[2] = !0) : e.list0FixedShow = [ !1, !1, !1 ]), 
                                    e.list0.person.count < 1 && e.list0.object.count > 0 && (t.detail.scrollTop >= 0 && t.detail.scrollTop < 104 * i ? !0 !== e.list0FixedShow[1] && (e.list0FixedShow[1] = !0) : t.detail.scrollTop > 146 * i ? !0 !== e.list0FixedShow[2] && (e.list0FixedShow[2] = !0) : e.list0FixedShow = [ !1, !1, !1 ]);
                                }
                                e.$forceUpdate();
                                var a = [], s = e.pageSize[e.tabIndex];
                                0 === e.tabIndex ? a = e["list" + e.tabIndex].company.list.length : 2 === e.tabIndex ? (a = e["list" + e.tabIndex]["valid" + e.list2Valid].list.length, 
                                s = e.pageSize[e.tabIndex][e.list2Valid]) : a = e["list" + e.tabIndex].list.length;
                                for (var l = Math.ceil(a / s), r = [], o = function(t) {
                                    var i;
                                    i = 2 === e.tabIndex ? "#t_" + e.tabIndex + "_" + e.list2Valid + "_" + t * s : "#t_" + e.tabIndex + "_" + t * s, 
                                    n.default.getDomInfo(i).then(function(i) {
                                        if (i && i[0] && i[0].height && r.push(i[0].top), 0 === t) {
                                            var n = r.map(function(t) {
                                                return Math.abs(Number(t));
                                            }).reverse(), a = Math.min.apply(Math, h(Array.from(new Set(n))));
                                            a && (2 === e.tabIndex ? e.currentPage[e.tabIndex].splice(e.list2Valid, 1, n.indexOf(a) + 1) : e.currentPage.splice(e.tabIndex, 1, n.indexOf(a) + 1));
                                        }
                                    });
                                }, c = l - 1; c >= 0; c--) o(c);
                            }();
                        } catch (t) {}
                    },
                    hideDownloadPop: function() {
                        this.downloadPop = !1;
                    },
                    toDownload: function() {
                        this.downloadPop = !0;
                    },
                    fillSearchInput: function(t) {
                        try {
                            this.key = t.currentTarget.dataset.key, 2 === this.tabIndex ? (this.keyList[this.tabIndex][this.list2Valid] = this.key, 
                            this.loading[this.tabIndex][this.list2Valid] = !1) : (this.keyList[this.tabIndex] = this.key, 
                            this.loading.splice(this.tabIndex, 1, !0)), this["getList" + this.tabIndex](!0), 
                            this.setSearchHistory();
                        } catch (t) {}
                    },
                    fillHotSearchInput: function(t) {
                        try {
                            this.fillSearchInput(t), (0, r.track)("search_hotwords_click", {
                                "button_detail|按钮详情": this.key,
                                "page_name|页面名称": this.tabList[this.tabIndex].name
                            });
                        } catch (t) {}
                    },
                    toPersonHotDetail: function(t) {
                        var e = t.currentTarget.dataset, i = e.unique, n = e.name;
                        s.default.toCopDetail(i, n), (0, r.track)("search_hotwords_click", {
                            "button_detail|按钮详情": n,
                            "page_name|页面名称": this.tabList[this.tabIndex].name
                        });
                    },
                    initSearchHistory: function() {
                        var e = t.getStorageSync("recentList");
                        e && (this.recentList = e), this.$forceUpdate(), this.toggleExpandAll();
                    },
                    toggleExpandAll: function() {
                        var t = this;
                        this.needRefreshKey = !1, this.$nextTick(function() {
                            setTimeout(function() {
                                t.tabList.map(function(e, i) {
                                    var n;
                                    (null === (n = t.recentList[i]) || void 0 === n ? void 0 : n.length) && t.toggleExpand(i);
                                });
                            }, 200);
                        });
                    },
                    initSearchCopHistory: function() {
                        var e = t.getStorageSync("recentCopList");
                        e && (this.recentCopList = e);
                    },
                    toggleExpand: function(t) {
                        var e = this;
                        this.recentListExpand[t] = !0, this.showMoreRecent[t] = !1, this.$forceUpdate(), 
                        n.default.getDomInfo("#recent-search" + t).then(function(i) {
                            var a, s;
                            (null === (a = i[0]) || void 0 === a ? void 0 : a.height) && (e.showMoreRecent[t] = (null === (s = i[0]) || void 0 === s ? void 0 : s.height) > n.default.rpxToPx(e.windowWidth, 340), 
                            e.showMoreRecent[t] && (e.recentListExpand[t] = !1), e.$forceUpdate());
                        });
                    },
                    setSearchHistory: function() {
                        var t = this;
                        try {
                            var e = this.key;
                            if (e.length > 1) {
                                var i = this.recentList[this.tabIndex].findIndex(function(e) {
                                    return e.key === t.key;
                                });
                                i < 0 || this.recentList[this.tabIndex].splice(i, 1), this.recentList[this.tabIndex].unshift({
                                    key: e
                                }), this.recentList[this.tabIndex].length > 20 && (this.recentList[this.tabIndex].length = 20), 
                                n.default.setStorageSync("recentList", this.recentList), this.needRefreshKey = !0;
                            } else 0 === this.tabIndex && "请输入企业名、人名、品牌、地址等" !== this.placeholder[0] && (this.key = this.placeholder[0], 
                            this.searchKeyAction());
                        } catch (t) {}
                    },
                    getListHot: function() {
                        var t = this;
                        try {
                            (0, c.getSearchTabs)().then(function(e) {
                                var i;
                                e && 200 === e.status && t.hotList.splice(t.tabIndex, 1, null === (i = e.result.tabs.find(function(e) {
                                    return e.id === t.tabList[t.tabIndex].id;
                                })) || void 0 === i ? void 0 : i.searchHotkey.map(function(t) {
                                    var e, i = {};
                                    return t.value && (i = null === (e = JSON.parse(t.value)) || void 0 === e ? void 0 : e.key), 
                                    {
                                        key: t.key || t,
                                        value: i
                                    };
                                }));
                            }).catch(function() {});
                        } catch (t) {}
                    },
                    getList1Person: function() {
                        var t = this;
                        (0, c.bossSearch)({
                            pageIndex: this.pageIndex[this.tabIndex],
                            areaInfo: this.params[this.tabIndex].areaCode || "",
                            industryInfo: this.params[this.tabIndex].industryV3 || "",
                            name: this.key,
                            pageSize: 20
                        }).then(function(e) {
                            var i, n, a, s;
                            200 === (null == e ? void 0 : e.status) ? ((null == e || null === (i = e.result) || void 0 === i || null === (n = i.Paging) || void 0 === n ? void 0 : n.TotalRecords) ? (t.list1.count = e.result.Paging.TotalRecords, 
                            t.list1.title = (0, l.default)('<div>搜索到 <span style="color:#fe5151;">' + t.list1.count + "</span> 位相关人员</div>")) : t.list1.count = 0, 
                            t.list1.list = [].concat(h(t.list1.list), h(e.result.Result.map(function(t) {
                                return {
                                    provinceinfo: t.provinceinfo,
                                    id: t.id,
                                    avatar: t.avatar,
                                    name: t.name,
                                    partner: t.partner.slice(0, 5),
                                    count: t.count
                                };
                            }))), t.canLoadNext.splice(t.tabIndex, 1, !!((null == e || null === (a = e.result) || void 0 === a || null === (s = a.Result) || void 0 === s ? void 0 : s.length) && 20 === e.result.Result.length && t.pageIndex[t.tabIndex] < 10))) : (t.list1.list = [], 
                            t.canLoadNext.splice(t.tabIndex, 1, !1)), t.$forceUpdate(), t.loading.splice(t.tabIndex, 1, !1), 
                            t.$forceUpdate();
                        }).catch(function() {}).finally(function() {
                            t.keyList[t.tabIndex] = t.key;
                        });
                    },
                    getList0Person: function() {
                        var t = this;
                        this.pageIndex[this.tabIndex] > 1 || (0, c.bossSearch)({
                            name: this.key,
                            pageSize: 20
                        }).then(function(e) {
                            var i, n, a, s;
                            if (200 === (null == e ? void 0 : e.status)) if ((null == e || null === (i = e.result) || void 0 === i || null === (n = i.Paging) || void 0 === n ? void 0 : n.TotalRecords) ? (t.list0.person.count = e.result.Paging.TotalRecords, 
                            t.list0.person.title = (0, l.default)('<div>搜索到 <span style="color:#fe5151;">' + t.list0.person.count + "</span> 位相关人员</div>")) : t.list0.person.count = 0, 
                            null == e || null === (a = e.result) || void 0 === a || null === (s = a.Result) || void 0 === s ? void 0 : s.length) {
                                var r = e.result.Result.slice(0, 10);
                                r = r.map(function(t) {
                                    var e;
                                    if ((null == t || null === (e = t.provinceinfo) || void 0 === e ? void 0 : e.length) > 1) {
                                        var i = 0;
                                        t.provinceinfo.map(function(t) {
                                            i += t.C;
                                        }), t.otherCount = i - t.provinceinfo[0].C;
                                    }
                                    return {
                                        provinceinfo: t.provinceinfo,
                                        name: t.name,
                                        count: t.count,
                                        avatar: t.avatar,
                                        keyNo: t.id,
                                        roleDesc: t.roleDesc,
                                        otherCount: t.otherCount
                                    };
                                }), t.list0.person.list = r;
                            } else t.list0.person.list = []; else t.list0.person.list = [];
                        }).catch(function() {});
                    },
                    filterRichText: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "-", e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "#fe5151", i = arguments.length > 2 ? arguments[2] : void 0;
                        return (0, l.default)('<div style="' + i + '">' + t.toString().replace(/<em>/g, '<em style="font-style:normal;color:' + e + ';">') + "</div>");
                    },
                    getList0Product: function() {
                        var t = this;
                        this.pageIndex[this.tabIndex] > 1 || (0, c.searchProject)({
                            pageIndex: 1,
                            searchKey: this.key
                        }).then(function(e) {
                            try {
                                var i, a, s;
                                200 === e.status && ((null == e || null === (i = e.result) || void 0 === i || null === (a = i.Paging) || void 0 === a ? void 0 : a.TotalRecords) ? (t.list0.object.count = e.result.Paging.TotalRecords, 
                                t.list0.object.title = t.filterRichText(e.result.ShowTotalMsg)) : (t.list0.object.count = 0, 
                                t.list0.object.title = []), (null === (s = e.result) || void 0 === s ? void 0 : s.Result.length) ? t.list0.object.list = e.result.Result.splice(0, 5).map(function(e) {
                                    var i = "";
                                    return e.qccUrl = decodeURIComponent(decodeURIComponent(e.qccUrl)), e.qccUrl.includes("qccfun://InstitutionDetail") ? i = "/company-brand/invest/detail/index?id=" + n.default.getQueryString(e.qccUrl, "unique") + "&name=" + n.default.getQueryString(e.qccUrl, "comName") : e.qccUrl.includes("company/product/detail") ? i = "/company-brand/product/detail/index?id=" + n.default.getQueryString(e.qccUrl, "productid") : e.qccUrl.includes("group/info") && (i = "/company-group/index/index/index?unique=" + n.default.getQueryString(e.qccUrl, "groupId") + "&name=&type="), 
                                    {
                                        name: t.filterRichText(e.Name, "#fe5151", "overflow: hidden;text-overflow:ellipsis; white-space: nowrap;"),
                                        imageUrl: e.ImageUrl,
                                        subTitle: t.filterRichText(e.SubTitle, "#fe5151", "overflow: hidden;text-overflow:ellipsis; white-space: nowrap;"),
                                        subTitle2: t.filterRichText(e.SubTitle2, "#fe5151", "overflow: hidden;text-overflow:ellipsis; white-space: nowrap;"),
                                        typeImg: e.TypeImg,
                                        mpUrl: i
                                    };
                                }) : t.list0.object.list = []);
                            } catch (t) {}
                        }).catch(function() {});
                    },
                    getList0Params: function() {
                        var t, e = this, i = this.params[this.tabIndex];
                        if (i.sureCnt ? (i.insuredCntStart = i.sureCnt.split(",")[0] ? i.sureCnt.split(",")[0] : "", 
                        i.insuredCntEnd = i.sureCnt.split(",")[1] ? i.sureCnt.split(",")[1] : "") : (i.insuredCntStart = "", 
                        i.insuredCntEnd = ""), console.log("params.fundingTime", i.fundingTime), console.log("params.startDateBegin", i.startDateBegin), 
                        console.log("params.startDateEnd", i.startDateEnd), i.fundingTime && i.fundingTime.indexOf(",") > -1 ? (i.startDateBegin = i.fundingTime.split(",")[0], 
                        i.startDateEnd = i.fundingTime.split(",")[1], i.fundingTime.split(",")[0].replace(/-/g, "") > i.fundingTime.split(",")[1].replace(/-/g, "") && (i.startDateBegin = i.fundingTime.split(",")[1], 
                        i.startDateEnd = i.fundingTime.split(",")[0]), i.fundingTime = "") : i.fundingTime && (i.startDateBegin = "", 
                        i.startDateEnd = ""), i.regCapi ? (i.registCapiBegin = i.regCapi.split(",")[0], 
                        i.registCapiEnd = i.regCapi.split(",")[1]) : (i.registCapiBegin = "", i.registCapiEnd = ""), 
                        i.areaCode) {
                            var n = i.areaCode.split("_");
                            n.length && (n[2] ? i.countyCode = n[2] : n[1] ? i.countyCode = n[1] : i.countyCode = "", 
                            n[0] ? i.province = n[0] : i.province = "");
                        } else i.countyCode = "", i.province = "";
                        if (i.sort) {
                            var a = i.sort.split("_");
                            i.sortField = a[0], i.isSortAsc = a[1];
                        } else i.sortField = "", i.isSortAsc = "";
                        if ((null == i || null === (t = i.searchKeyObject) || void 0 === t ? void 0 : t.length) && i.searchKeyObject[0]) {
                            var s = {};
                            i.searchKeyObject.forEach(function(t) {
                                s[t] = e.key;
                            }), i.searchKey = JSON.stringify(s), i.searchIndex = "multicondition";
                        } else i.searchKey = this.key, i.searchIndex = "default";
                        return 0 === i.orgType || i.orgType ? i.searchType = i.orgType : (delete i.orgType, 
                        delete i.searchType), i;
                    },
                    getList0Company: function() {
                        var t = this;
                        try {
                            var e = this.getList0Params();
                            this.params[this.tabIndex] = e, e.fundingTime && e.fundingTime.indexOf(",") > -1 && delete e.fundingTime, 
                            (0, o.advancedSearch)(y(y({
                                pageIndex: this.pageIndex[this.tabIndex],
                                needGroup: "yes"
                            }, e), {}, {
                                industryV3: this.geThirdValue(e.industryV3)
                            })).then(function(e) {
                                var i, a;
                                if (e && 200 === e.status) {
                                    if (e.result) {
                                        var s, r;
                                        if ((null === (s = e.result) || void 0 === s ? void 0 : s.NewCompanyLimitation) ? t.NewCompanyLimitation = e.result.NewCompanyLimitation : t.NewCompanyLimitation = !1, 
                                        null === (r = e.result) || void 0 === r ? void 0 : r.ShowTotal) {
                                            var o = Number(e.result.ShowTotal);
                                            t.list0.company.count = o, t.allPage.splice(t.tabIndex, 1, Math.ceil(o / e.result.Paging.PageSize)), 
                                            t.list0.company.title = (0, l.default)('<div>搜索到 <span style="color:#fe5151;">' + t.list0.company.count + "</span> 个结果</div>");
                                        } else t.list0.company.count = 0;
                                        if (e.result.Result) {
                                            for (var c = 0; c < e.result.Result.length; c++) e.result.Result[c].Name && (e.result.Result[c].richName = (0, 
                                            l.default)("<div>" + e.result.Result[c].Name.replace(/<em>/g, '<em style="font-style:normal;color:#fe5151;">') + "</div>"), 
                                            e.result.Result[c].Name = e.result.Result[c].Name.replace(/(<em>)|(<\/em>)/g, "")), 
                                            e.result.Result[c].HitReason && ("公司名称" === e.result.Result[c].HitReason.Field ? (e.result.Result[c].HitReason.Value = e.result.Result[c].HitReason.Value.replace(/<em>/g, '<em style="font-style:normal;color:#fe5151;">'), 
                                            e.result.Result[c].colorTitle = e.result.Result[c].HitReason.Value) : e.result.Result[c].HitReason && e.result.Result[c].HitReason.Value && (e.result.Result[c].HitReason.Value = e.result.Result[c].HitReason.Value.replace(/<em>/g, '<em style="font-style:normal;color:#fe5151;">'), 
                                            e.result.Result[c].bottomDesc = (0, l.default)('<div style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + e.result.Result[c].HitReason.Field + "：" + e.result.Result[c].HitReason.Value + "</div>")));
                                            t.list0.company.list = t.list0.company.list.concat(e.result.Result.map(function(e) {
                                                var i = null;
                                                return e.RiskSetting && (i = {
                                                    Icon: e.RiskSetting && e.RiskSetting.Icon ? e.RiskSetting.Icon : "",
                                                    Label: (0, l.default)("<div>" + e.RiskSetting.Label.replace(/<em_FF6060>/g, '<em style="font-style:normal;color:#ff6060;">') + "</div>")
                                                }), {
                                                    StatusColor: e.StatusColor,
                                                    StatusBackground: n.default.colorRgba(e.StatusColor, .12),
                                                    IsAuth: e.IsAuth,
                                                    Name: e.Name,
                                                    HitReason: e.HitReason,
                                                    richName: e.richName,
                                                    OperName: e.OperName,
                                                    RegistCapi: e.RegistCapi,
                                                    StartDate: e.StartDate,
                                                    ImageUrl: e.ImageUrl,
                                                    TagsInfo: e.TagsInfo,
                                                    Address: e.Address,
                                                    OperId: e.OperId,
                                                    KeyNo: e.KeyNo,
                                                    RegistCapitalType: e.RegistCapitalType,
                                                    GW: e.GW,
                                                    bottomDesc: e.bottomDesc,
                                                    GWStatus: e.GWStatus,
                                                    PhoneStatus: e.PhoneStatus,
                                                    ContactNumber: e.ContactNumber,
                                                    RiskSetting: i,
                                                    ShortStatus: e.ShortStatus,
                                                    showFields: e.showFields.map(function(e) {
                                                        return e.v && (e.name = e.v.replace(/(<em>)|(<\/em>)/g, "")), e.v = t.filterRichText(e.v || "-", "#fe5151", "overflow: hidden;text-overflow:ellipsis; white-space: nowrap;"), 
                                                        e;
                                                    })
                                                };
                                            })), 1 === t.pageIndex && (t.resultTips = "Oops，小查没有找到相关数据~");
                                        } else t.list0.company.list = [];
                                    }
                                } else 60300 === e.status ? (t.resultTips = "您的搜索词太宽泛，建议更换一下搜索词", t.list0.company.count = 0, 
                                t.list0.company.list = []) : 400 === e.status && e.message ? n.default.toast(e.message) : t.resultTips = "Oops，小查没有找到相关数据~", 
                                t.list0.company.count = 0, t.list0.company.list = [];
                                t.canLoadNext.splice(t.tabIndex, 1, !(!(null == e || null === (i = e.result) || void 0 === i || null === (a = i.Result) || void 0 === a ? void 0 : a.length) || 40 !== e.result.Result.length || !(t.isVIP && t.list0.company.list.length <= 200 || !t.isVIP && t.list0.company.list.length <= 30))), 
                                t.loading.splice(t.tabIndex, 1, !1);
                            }).catch(function() {}).finally(function() {
                                t.keyList[t.tabIndex] = t.key;
                            });
                        } catch (t) {}
                    },
                    filterCallBack: function(t) {
                        var e = this;
                        if (t.isReset) this.paramReset0(); else {
                            var i = this.params[this.tabIndex];
                            1 === this.tabIndex ? i[t.key] = t.label.replace(/_/g, " ").replace(/(全市)|(全省)|(全国)|(全部行业)/g, "") : 2 === this.tabIndex ? i[this.list2Valid][t.key] = t.value : i[t.key] = t.value, 
                            this.dataReset(), 2 === this.tabIndex ? (this.params[this.tabIndex][this.list2Valid] = i[this.list2Valid], 
                            this.canLoadNext[this.tabIndex][this.list2Valid] = !0, this.loading[this.tabIndex][this.list2Valid] = !0, 
                            this.pageIndex[this.tabIndex][this.list2Valid] = 1, this.currentPage[this.tabIndex][this.list2Valid] = 1) : (this.canLoadNext[this.tabIndex] = !0, 
                            this.loading[this.tabIndex] = !0, this.params[this.tabIndex] = i, this.pageIndex[this.tabIndex] = 1, 
                            this.currentPage[this.tabIndex] = 1);
                        }
                        this.$forceUpdate(), this.$nextTick(function() {
                            e["getList" + e.tabIndex]();
                            var i = "";
                            "areaCode" === t.key || "areaInfo" === t.key ? i = "全国" : "industryV3" === t.key || "industryInfo" === t.key || "industryV3" === t.key || "industryV3" === t.key ? i = "全部行业" : 0 === e.tabIndex ? i = "sort" === t.key ? "排序" : "更多筛选" : 2 === e.tabIndex ? "type" === t.key ? i = "风险类型" : "courtyear" === t.key ? i = "全部年份" : "province" === t.key && (i = "全国") : 3 === e.tabIndex ? "type" === t.key ? i = "全部类型" : "groupyear" === t.key && (i = "全部年份") : 3 === e.tabIndex && ("type" === t.key ? i = "全部类型" : "startyear" === t.key && (i = "全部年份")), 
                            (0, r.track)("fixedpage_searchresult_select_click", {
                                "content_type|筛选类型": e.tabList[e.tabIndex].name + "_" + i
                            });
                        });
                    },
                    loadMore: function() {
                        2 === this.tabIndex ? this.canLoadNext[this.tabIndex][this.list2Valid] && !this.loading[this.tabIndex][this.list2Valid] ? (this.pageIndex[this.tabIndex][this.list2Valid] = this.pageIndex[this.tabIndex][this.list2Valid] + 1, 
                        this.loading[this.tabIndex][this.list2Valid] = !0, this["getList" + this.tabIndex]()) : this.loading[this.tabIndex][this.list2Valid] = !1 : this.canLoadNext[this.tabIndex] && !this.loading[this.tabIndex] ? (this.pageIndex.splice(this.tabIndex, 1, this.pageIndex[this.tabIndex] + 1), 
                        this.loading.splice(this.tabIndex, 1, !0), this["getList" + this.tabIndex]()) : this.loading[this.tabIndex] = !1;
                    },
                    legalClick: function(t) {
                        var e = t.currentTarget.dataset, i = e.unique, n = e.name;
                        s.default.toCopDetail(i, n, !0), (0, r.track)("fixedpage_searchresult_content_click", {
                            "search_detail|搜索词详情": this.key,
                            "content_type|内容类型": "企业_法定代表人",
                            "page_name|页面名称": "企业",
                            "content_detail|内容详情": n
                        });
                    },
                    toCopDetail: function(t) {
                        var e = t.currentTarget.dataset, i = e.unique, n = e.name;
                        s.default.toCopDetail(i, n);
                    },
                    toHistoryDetail: function(t) {
                        var e = t.currentTarget.dataset, i = e.unique, n = e.name;
                        s.default.toCopDetail(i, n), (0, r.track)("search_historyviewcontent_click", {
                            "content_detail|内容详情": n || "",
                            "content_type|内容类型": "p" === i[0] ? "人员" : "企业"
                        });
                    },
                    toCompanyDetail: function(t) {
                        var e = t.currentTarget.dataset, i = e.unique, n = e.name;
                        s.default.toCopDetail(i, n), (0, r.track)("fixedpage_searchresult_content_click", {
                            "search_detail|搜索词详情": this.key,
                            "content_type|内容类型": "企业",
                            "page_name|页面名称": "企业",
                            "content_detail|内容详情": n
                        });
                    },
                    toPersonDetail: function(t) {
                        var e = t.currentTarget.dataset, i = e.unique, n = e.name;
                        s.default.toCopDetail(i, n), (0, r.track)("fixedpage_searchresult_content_click", {
                            "search_detail|搜索词详情": this.key,
                            "content_type|内容类型": "人员",
                            "page_name|页面名称": "人员",
                            "content_detail|内容详情": n
                        });
                    },
                    toCompanyRelatedPersonDetail: function(t) {
                        var e = t.currentTarget.dataset, i = e.unique, n = e.name;
                        s.default.toCopDetail(i, n), (0, r.track)("fixedpage_searchresult_content_click", {
                            "search_detail|搜索词详情": this.key,
                            "content_type|内容类型": "相关人员列表",
                            "page_name|页面名称": "企业",
                            "content_detail|内容详情": n
                        });
                    },
                    toBrandDetail: function(t) {
                        var e = t.currentTarget.dataset.url;
                        n.default.navigateTo({
                            url: e
                        });
                    },
                    toRiskDetail: function(e) {
                        var i = e.currentTarget.dataset, a = i.type, s = i.id, l = i.h5;
                        a = Number(a);
                        var r = "";
                        if (l && (l = decodeURIComponent(decodeURIComponent(l))), s || l) if (0 === a) r = "/company-risk/judgement/detail/index?id=" + s; else if (1 === a) r = "/company-risk/zhixing/detail/index?id=" + s; else if (2 === a) r = "/company-risk/shixin/detail/index?id=" + s; else if (3 === a) r = "/company-risk/announcement/detail/index?id=" + s; else if (4 === a) r = "/company-risk/judicial-auction/detail/index?id=" + s; else if (5 === a) r = "/company-risk/court-notice/detail/index?id=" + s; else if (6 === a) r = "/company-risk/owetax/detail/index?id=" + s; else if (7 === a) r = "/company-risk/limit-consumption/detail/index?id=" + s; else if (8 === a) {
                            var o = "4";
                            l.includes("commercial-detail") ? o = "1" : l.includes("revenue-detail") ? o = "2" : l.includes("credit-detail") ? o = "3" : l.includes("other-detail") ? o = "4" : l.includes("antitrust-detail") ? o = "5" : l.includes("detail") && (o = "1"), 
                            r = "4" === o ? "/company-risk/publish/other-detail/index?id=" + s : "/company-risk/publish/detail/index?id=" + s + "&page=" + o;
                        } else if (9 === a) {
                            r = "/company-risk/stock-freeze/detail/index?id=" + s + "&unique=" + n.default.getQueryString(l, "eid");
                        } else if (10 === a) r = "/company-risk/lian/detail/index?id=" + s; else if (11 === a) r = "/company-risk/delivery-notice/detail/index?id=" + s; else if (13 === a) r = "/company-risk/clear-info/index?unique=" + s; else if (14 === a) r = "/company-risk/simple-cancel/detail/index?unique=" + (s = n.default.getQueryString(l, "id")); else if (15 === a) {
                            r = "/company-risk/mortgage/detail/index?id=" + (s = n.default.getQueryString(l, "id")) + "&unique=" + n.default.getQueryString(l, "unique") + "&is_history=" + (this.list2Valid ? "" : "1");
                        } else if (16 === a) r = "/company-risk/land/detail/index?id=" + s + "&name=&is_history=" + (this.list2Valid ? "" : "1"); else if (17 === a) {
                            r = "/company-risk/pledge/detail/index?id=" + s + "&unique=" + n.default.getQueryString(l, "unique") + "&isValid=" + this.list2Valid;
                        } else if (18 === a) {
                            r = "/company-risk/equity-pledge/detail/index?unique=" + n.default.getQueryString(l, "eid") + "&pledgeId=" + s + "&name=NaN";
                        } else if (19 === a) {
                            r = "/company-risk/public-notice/detail/index?name=&id=" + s + "&unique=" + n.default.getQueryString(l, "eid") + "&isMonitor=true";
                        } else if (20 === a) r = "/company-risk/environment/detail/index?id=" + s; else if (21 === a) r = "/company-risk/tax-illegal/detail/index?id=" + s + "&name="; else if (23 === a) r = "/company-risk/final-case/detail/index?id=" + s; else if (24 === a) r = "/company-risk/assessment/detail/index?id=" + s; else if (25 === a) {
                            r = "/company-risk/cancel-record/index?unique=" + n.default.getQueryString(l, "unique");
                        } else if (26 === a) r = "/company-risk/bankruptcy/detail/index?id=" + s + "&isValid=" + this.list2Valid; else if (27 === a) {
                            r = "/company-news/news-flash-detail/index?id=" + n.default.getQueryString(l, "newsId") + "&name=&title=黑名单详情&unique=" + n.default.getQueryString(l, "unique");
                        } else if (29 === a) {
                            r = "/company-risk/product-recall/detail/index?id=" + n.default.getQueryString(l, "key") + "&name=" + n.default.getQueryString(l, "companyName") + "&unique=" + n.default.getQueryString(l, "unique");
                        } else 32 === a ? r = "/company-risk/tax-illegal/detail/index?id=" + s : 33 === a && (r = "/company-risk/lian/detail/index?id=" + s + "&name=&title=诉前调解详情");
                        r && t.navigateTo({
                            url: r
                        });
                    },
                    toPartner: function(t) {
                        var e = t.currentTarget.dataset, i = e.unique, n = e.name;
                        s.default.toCopDetail(i, n), (0, r.track)("fixedpage_searchresult_content_click", {
                            "search_detail|搜索词详情": this.key,
                            "content_type|内容类型": "人员_合作伙伴",
                            "page_name|页面名称": "人员",
                            "content_detail|内容详情": n
                        });
                    },
                    trackEvent: function(t) {
                        try {
                            var e = t.currentTarget.dataset.object;
                            e && (e = JSON.parse(e), (0, r.track)(e.key, e.value));
                        } catch (t) {}
                    },
                    toScan: function(t) {
                        var e = t.currentTarget.dataset, i = e.unique, a = e.name, s = e.index;
                        n.default.navigateTo({
                            url: "/scan-subpackages/company/index/index?unique=" + i + "&name=" + a + "&index=" + (s || 0)
                        }), "企业" === this.tabList[this.tabIndex].name && (0, r.track)("search_result_button_click", {
                            "search_detail|搜索词详情": this.key,
                            "button_name|按钮名称": "风险扫描",
                            "page_name|页面名称": this.tabList[this.tabIndex].name
                        });
                    },
                    paramReset: function() {
                        2 === this.tabIndex ? (this.params[this.tabIndex][this.list2Valid] = {}, this.pageIndex[this.tabIndex][this.list2Valid] = 1) : (this.params[this.tabIndex] = {}, 
                        this.pageIndex[this.tabIndex] = 1);
                    },
                    paramReset0: function() {
                        var t = {};
                        this.params[0].countyCode && (t.countyCode = this.params[0].countyCode), this.params[0].province && (t.province = this.params[0].province), 
                        this.params[0].areaCode && (t.areaCode = this.params[0].areaCode), this.params[0].industryV3 && (t.industryV3 = this.params[0].industryV3), 
                        this.params[0].sort && (t.sort = this.params[0].sort), this.params[0].sortField && (t.sortField = this.params[0].sortField), 
                        this.params[0] = t;
                    },
                    dataReset: function(t) {
                        0 === this.tabIndex ? (t && (this.list0.person = {
                            count: 0,
                            title: [],
                            list: []
                        }, this.list0.object = {
                            count: 0,
                            title: [],
                            list: []
                        }), this.list0.company = {
                            count: this.list0.company.count,
                            title: [],
                            list: []
                        }) : 2 === this.tabIndex ? this.list2["valid" + this.list2Valid] = {
                            count: 0,
                            title: [],
                            list: []
                        } : this["list" + this.tabIndex] = {
                            count: 0,
                            title: [],
                            list: []
                        };
                    },
                    copyText: function(t) {
                        n.default.setClipboardData(t.currentTarget.dataset.text), (0, r.track)("search_result_button_click", {
                            "search_detail|搜索词详情": this.key,
                            "button_name|按钮名称": "官网",
                            "page_name|页面名称": "企业"
                        });
                    },
                    callPhone: function(t) {
                        n.default.makePhoneCall(t.currentTarget.dataset.phone);
                    },
                    openAddress: function(e) {
                        var i = e.currentTarget.dataset, n = i.name, a = i.address;
                        a && (t.navigateTo({
                            url: "/address/index?name=" + n + "&address=" + a
                        }), (0, r.track)("search_result_button_click", {
                            "search_detail|搜索词详情": this.key,
                            "button_name|按钮名称": "地址",
                            "page_name|页面名称": "企业"
                        }));
                    },
                    geThirdValue: function(t) {
                        var e = "";
                        if (t) {
                            var i = t.split("_");
                            i.length && (i[2] ? e = i[2] : i[1] ? e = i[1] : i[0] && (e = i[0]));
                        }
                        return e;
                    },
                    deleteRecentKey: function() {
                        var e = this;
                        t.showModal({
                            title: "删除历史",
                            content: "确定要删除最近搜索？",
                            success: function(t) {
                                t.confirm && (e.recentList[e.tabIndex] = [], e.$forceUpdate(), n.default.setStorageSync("recentList", e.recentList), 
                                (0, r.track)("search_recentsearch_click", {
                                    "button_detail|按钮详情": "全部删除",
                                    "page_name|页面名称": e.tabList[e.tabIndex].name
                                }));
                            }
                        });
                    },
                    deleteScanHistory: function() {
                        var e = this;
                        t.showModal({
                            title: "删除历史",
                            content: "确定要删除浏览历史？",
                            success: function(t) {
                                t.confirm && (e.recentCopList[e.tabIndex] = [], e.$forceUpdate(), n.default.setStorageSync("recentCopList", e.recentCopList));
                            }
                        });
                    },
                    cancelVip: function() {
                        this.list2Valid = 1;
                    },
                    sendDataClick: function() {
                        var t = this;
                        this.checkLogin("").then(function() {
                            t.isVIP ? (t.exportPop = !0, (0, r.track)("search_result_button_click", {
                                "search_detail|搜索词详情": t.key,
                                "button_name|按钮名称": "导出数据",
                                "page_name|页面名称": "企业"
                            })) : (t.vipTip = "导出数据", t.paySourceType = "导出数据", t.vipPop = !0, (0, r.track)("search_result_button_click", {
                                "search_detail|搜索词详情": t.key,
                                "button_name|按钮名称": "立即开通VIP",
                                "page_name|页面名称": "企业"
                            }));
                        }).catch(function() {});
                    },
                    loadMoreCompanyData: function() {
                        var t = this;
                        this.checkLogin("").then(function() {
                            t.vipTip = "查看更多企业", t.paySourceType = "", t.vipPop = !0;
                        }).catch(function() {});
                    },
                    exportCancel: function() {
                        this.exportPop = !1;
                    },
                    exportConfirm: function(t) {
                        var e = this.exportEmail;
                        e ? new RegExp(/^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/).test(e) ? this.exportData(e) : n.default.toast("邮箱格式不正确") : n.default.toast("请输入邮箱地址");
                    },
                    exportData: function(e) {
                        var i = this, a = this.params[this.tabIndex];
                        a.fundingTime && a.fundingTime.indexOf(",") > -1 && delete a.fundingTime, this.exportEmail = e, 
                        (0, o.downloadSearchData)(y(y({
                            email: e,
                            downloadType: 1
                        }, a), {}, {
                            industryV3: this.geThirdValue(a.industryV3)
                        })).then(function(a) {
                            i.exportPop = !1, 201 === a.status ? (n.default.toast("数据发送成功，请留意查看邮箱"), t.setStorage({
                                key: "exportEmailStorage",
                                data: e
                            })) : n.default.toast(a.message || "导出失败");
                        }).catch(function() {});
                    },
                    exportEmailInput: function(t) {
                        this.exportEmail = t.detail.value;
                    },
                    backToHome: function() {
                        s.default.toHome();
                    },
                    toggleSort: function() {
                        this.$refs["sort_" + this.tabIndex][0].sortArr[0].show = !this.$refs["sort_" + this.tabIndex][0].sortArr[0].show;
                    },
                    getMorePhoneUrl: function(t) {
                        var e = this;
                        this.currentUnique = t.currentTarget.dataset.unique, this.currentContact = t.currentTarget.dataset.contact, 
                        this.$nextTick(function() {
                            e.$refs["app-more-phone"].show = !0;
                        }), (0, r.track)("search_result_button_click", {
                            "search_detail|搜索词详情": this.key,
                            "button_name|按钮名称": "电话",
                            "page_name|页面名称": "企业"
                        });
                    },
                    bindTouchStart: function(t) {
                        this.startTime = t.timeStamp;
                    },
                    bindTouchEnd: function(t) {
                        this.endTime = t.timeStamp;
                    },
                    bindKeyTap: function(t) {
                        try {
                            if (this.endTime - this.startTime < 350) {
                                var e, i = Number(t.currentTarget.dataset.index);
                                (null === (e = this.recentList[this.tabIndex][i]) || void 0 === e ? void 0 : e.active) && (this.recentList[this.tabIndex][i].active = !1), 
                                this.fillSearchInput(t), (0, r.track)("search_recentsearch_click", {
                                    "button_detail|按钮详情": this.recentList[this.tabIndex][i].key,
                                    "page_name|页面名称": this.tabList[this.tabIndex].name
                                });
                            }
                        } catch (t) {}
                    },
                    bingLongTap: function(t) {
                        try {
                            var e = Number(t.currentTarget.dataset.index);
                            this.recentList[this.tabIndex][e].active = !this.recentList[this.tabIndex][e].active;
                        } catch (t) {}
                    },
                    deleteRecent: function(e) {
                        var i = this;
                        t.showModal({
                            title: "删除历史",
                            content: "确定要删除最近搜索？",
                            success: function(t) {
                                if (t.confirm) {
                                    var a = Number(e.currentTarget.dataset.index);
                                    i.recentList[i.tabIndex].splice(a, 1), n.default.setStorageSync("recentList", i.recentList), 
                                    i.needRefreshKey = !0, i.toggleExpandAll(), (0, r.track)("search_recentsearch_click", {
                                        "button_detail|按钮详情": "单个删除",
                                        "page_name|页面名称": i.tabList[i.tabIndex].name
                                    });
                                }
                            }
                        });
                    },
                    cancel: function() {
                        this.vipPop = !1;
                    }
                })
            };
            e.default = b;
        }).call(this, i("543d").default);
    },
    4286: function(t, e, i) {
        i.r(e);
        var n = i("292c"), a = i.n(n);
        for (var s in n) "default" !== s && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(s);
        e.default = a.a;
    },
    "5e19": function(t, e, i) {
        i.d(e, "b", function() {
            return n;
        }), i.d(e, "c", function() {
            return a;
        }), i.d(e, "a", function() {});
        var n = function() {
            var t = this, e = (t.$createElement, t._self._c, t.__map(t.tabList, function(e, i) {
                return {
                    $orig: t.__get_orig(e),
                    l0: t.key && t.key.length > 1 && 2 === i && 1 === t.list2Valid ? t.__map(t.list2.valid1.list, function(e, i) {
                        return {
                            $orig: t.__get_orig(e),
                            g0: JSON.stringify({
                                key: "fixedpage_searchresult_content_click",
                                value: {
                                    "search_detail|搜索词详情": t.key,
                                    "content_type|内容类型": "风险",
                                    "page_name|页面名称": "风险",
                                    "content_detail|内容详情": e.TypeDesc
                                }
                            })
                        };
                    }) : null,
                    l1: t.key && t.key.length > 1 ? t.__map(t.list2.valid0.list, function(e, i) {
                        return {
                            $orig: t.__get_orig(e),
                            g1: JSON.stringify({
                                key: "fixedpage_searchresult_content_click",
                                value: {
                                    "search_detail|搜索词详情": t.key,
                                    "content_type|内容类型": "风险",
                                    "page_name|页面名称": "风险",
                                    "content_detail|内容详情": e.TypeDesc
                                }
                            })
                        };
                    }) : null,
                    l2: t.key && t.key.length > 1 && 2 !== i && 0 === i ? t.__map(t.list0.company.list, function(e, i) {
                        return {
                            $orig: t.__get_orig(e),
                            g2: e.bottomDesc || e.ContactNumber || e.GW || e.Address ? JSON.stringify({
                                key: "fixedpage_searchresult_content_click",
                                value: {
                                    "search_detail|搜索词详情": t.key,
                                    "content_type|内容类型": "企业_命中原因",
                                    "page_name|页面名称": "企业",
                                    "content_detail|内容详情": e.Name
                                }
                            }) : null
                        };
                    }) : null,
                    g3: t.key && t.key.length > 1 && 2 !== i && 0 === i && (!t.isVIP && !t.canLoadNext[i] && 1 === t.pageIndex[i] && !t.loading[i] && t.list0.company.list.length >= 40 || t.NewCompanyLimitation) ? t.platform.includes("mp-feishu") : null,
                    g4: t.key && t.key.length > 1 && 2 !== i && 0 === i && (!t.isVIP && !t.canLoadNext[i] && 1 === t.pageIndex[i] && !t.loading[i] && t.list0.company.list.length >= 40 || t.NewCompanyLimitation) ? t.platform.includes("mp-feishu") : null,
                    g5: JSON.stringify({
                        key: "fixedpage_searchresult_content_click",
                        value: {
                            "search_detail|搜索词详情": t.key,
                            "content_type|内容类型": "商标专利",
                            "page_name|页面名称": "商标专利"
                        }
                    }),
                    g6: JSON.stringify({
                        key: "fixedpage_searchresult_content_click",
                        value: {
                            "search_detail|搜索词详情": t.key,
                            "content_type|内容类型": "投融资",
                            "page_name|页面名称": "投融资"
                        }
                    }),
                    l5: t.key && t.key.length > 1 && 2 !== i && 4 === i ? t.__map(t.list4.list, function(e, i) {
                        return {
                            $orig: t.__get_orig(e),
                            l4: t.__map(e.contentElement.dataList, function(e, i) {
                                return {
                                    $orig: t.__get_orig(e),
                                    l3: e.highlight.length ? t.__map(e.highlight, function(e, i) {
                                        return {
                                            $orig: t.__get_orig(e),
                                            g7: e.more ? null : JSON.stringify({
                                                key: "fixedpage_searchresult_content_click",
                                                value: {
                                                    "search_detail|搜索词详情": t.key,
                                                    "content_type|内容类型": "投融资_主体",
                                                    "page_name|页面名称": "投融资"
                                                }
                                            })
                                        };
                                    }) : null
                                };
                            })
                        };
                    }) : null,
                    l6: !(t.key && t.key.length > 1) && t.recentCopList[i].length && i <= 1 ? t.__map(t.recentCopList[i], function(e, i) {
                        return {
                            $orig: t.__get_orig(e),
                            m0: t.getTateTitle2(e.time)
                        };
                    }) : null
                };
            }));
            t.$mp.data = Object.assign({}, {
                $root: {
                    l7: e
                }
            });
        }, a = [];
    },
    b38e: function(t, e, i) {},
    fb03: function(t, e, i) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            i("6cdc"), e(i("66fd")), t(e(i("25c0")).default);
        }).call(this, i("543d").createPage);
    }
}, [ [ "fb03", "common/runtime", "common/vendor" ] ] ]);