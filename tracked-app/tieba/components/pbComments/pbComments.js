var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};

var _formatPbData = require("../../util/formatPbData");

var _url = require("../../util/url");

var _util = require("../../util/util.js");

var _filters = require("../../util/filters.js");

var _trackTieba = require("../../util/trackTieba");

function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    } else {
        return Array.from(arr);
    }
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

/**
                                                                                                                                                                                                                   * @file **
                                                                                                                                                                                                                   * @author zw
                                                                                                                                                                                                                   */ Component({
    properties: {
        page: {
            type: String,
            value: ""
        },
        showSelect: {
            type: Boolean,
            value: true
        },
        isVertical: {
            type: Boolean,
            value: false
        },
        isNeedSticky: {
            type: Boolean,
            value: false
        },
        showAds: {
            type: Boolean,
            value: false
        },
        floorDatas: {
            type: Object,
            value: null,
            observer: function observer(datas) {
                if (datas) {
                    this.setFloorData(this.formatList(datas));
                } else {
                    this.setData({
                        floorLists: []
                    });
                }
            }
        },
        hasMore: {
            type: Boolean,
            value: true
        },
        showJumpBar: {
            type: Boolean,
            value: false
        },
        commentsNums: {
            type: Number,
            value: 1
        },
        concatData: {
            type: Array,
            value: [],
            observer: function observer(v) {
                if (v.post_list && v.post_list.length) {
                    var concatData = this.formatList(v);
                    var currentPage = concatData && concatData.page && concatData.page.current_page;
                    if (this.data.concatType === "prev") {
                        this.setData(_defineProperty({}, "floorLists[" + (currentPage - 1) + "]", concatData.post_list || []));
                    }
                }
            }
        },
        concatType: {
            type: String,
            value: ""
        },
        needScroll: {
            type: Boolean,
            value: false
        },
        isPb: {
            type: Boolean,
            value: false
        },
        replyMainFloor: {
            type: Boolean,
            value: false,
            observer: function observer(v) {
                this.replyMainFloor("click");
            }
        },
        needPbCut: {
            type: Boolean,
            value: true
        },
        isVideo: {
            type: Boolean,
            value: false
        },
        qqWakeupConfig: {
            type: Object,
            value: {}
        },
        maxCommentsLength: {
            type: Number,
            value: 0
        },
        isOpenApp: {
            type: Boolean,
            value: false
        },
        recommendQuery: {
            type: String,
            value: ""
        },
        // ???????????????????????? bar
        showTypeBar: {
            type: Boolean,
            value: true
        },
        // ????????????
        subchainAd: {
            type: Array,
            value: []
        },
        // ????????????????????????
        scene: {
            type: String,
            value: ""
        },
        // ?????????????????????
        isGaokaoAla: {
            type: Boolean,
            value: false
        }
    },
    data: {
        IMG_CDN: _url.IMG_CDN,
        adCount: 0,
        commentsType: 0,
        selectDatas: [ {
            key: "0",
            value: "????????????",
            default: 1
        }, {
            key: "1",
            value: "????????????"
        }, {
            key: "2",
            value: "????????????"
        } ],
        changeTabLoading: true,
        floorLists: [],
        sortValue: 0,
        mainFloor: {},
        forum: {},
        isVertical: false,
        // ?????????????????????
        tid: "",
        userId: "",
        mainFloorId: "",
        hideMoreGad: false,
        isBaidu: (0, _util.getGlobalData)("isBaidu"),
        statusHeight: 0,
        platform: (0, _util.getGlobalData)("systemInfo").platform,
        canWakeUp: true,
        isBrowser: (0, _util.getGlobalData)("isBrowser") || wx.getStorageSync("isBrowser")
    },
    ready: function ready() {
        var _this = this;
        // ??????scroll-view?????????
                if (this.data.needScroll) {
            var query = this.createSelectorQuery();
            query.select("#floors-scroll").boundingClientRect();
            query.exec(function(res) {
                _this.setData({
                    floorHeight: res[0].height
                });
            });
        }
        this.replyPage = -1;
        this.replyMainFloor();
        var isIphoneX = (0, _util.getGlobalData)("isIphoneX");
        var statusHeight = void 0;
        if (isIphoneX) {
            statusHeight = getApp().globalData.systemInfo.statusBarHeight + 167;
        } else {
            statusHeight = getApp().globalData.systemInfo.statusBarHeight + 133;
        }
        this.setData({
            canWakeUp: !(0, _util.getGlobalData)("forbidWakeUp"),
            statusHeight: statusHeight
        });
    },
    methods: {
        // ???????????????
        formatList: function formatList(res) {
            if (this.data.showAds && this.data.isBaidu) {
                (0, _formatPbData.insertAd)(res);
            }
            (0, _formatPbData.formatPostList)(res);
            return res;
        },
        setFloorData: function setFloorData(res) {
            var _this2 = this;
            var floorlists = res.post_list.filter(function(item) {
                return !item.isAd || item.isAd && item.originBanner && item.originBanner.content.empty_goods !== 1;
            }) || [];
            var currentPage = res && res.page && res.page.current_page || 1;
            if (this.reverseSort) {
                currentPage = res.page.total_page - currentPage + 1;
            }
            // ????????????????????????????????????????????????
                        if (floorlists.length) {
                var main = (0, _formatPbData.filterMain)(floorlists);
                if (!this.data.mainFloorId) {
                    var mainFloorId = main.author.id;
                    var userId = res.user.id;
                    var topPosts = (0, _formatPbData.formatTopAgreePost)(res.top_agree_posts || []);
                    this.user = res.user;
                    this.mainFloor = main;
                    this.isProThread = res.thread.is_pro_thread;
                    this.mainPid = main.pid;
                    this.mainFloorType = main.is_flash ? 1 : 0;
                    // 1 ?????????0 ?????????
                                        this.setData(_extends({
                        forum: res.forum,
                        userId: userId,
                        mainFloorId: mainFloorId,
                        pageInfo: res.page,
                        tid: res.thread.id,
                        commentsType: this.data.commentsType,
                        topPosts: topPosts,
                        getTopPostParam: res.top_agree_post_list || []
                    }, this.setReplyTextarea(res), this.setAdData(res)));
                }
            }
            var isHitLzlTest = false;
            var showLzlCount = 2;
            if (this.data.isBaidu && !this.data.isBrowser) {
                var ubsAbtestConfig = (0, _util.getGlobalData)("ubs_abtest_config");
                var testStrs = [ "lzlsmartapp_2", "lzlsmartapp_3", "lzlsmartapp_4" ];
                var testReg = /lzlsmartapp_(\d)/;
                isHitLzlTest = ubsAbtestConfig.some(function(item) {
                    if (testStrs.includes(item.sid)) {
                        showLzlCount = +item.sid.match(testReg)[1];
                        return true;
                    }
                    return false;
                });
            }
            floorlists.forEach(function(item) {
                if (item.sub_post_list) {
                    item.sub_post_list = item.sub_post_list.slice(0, showLzlCount);
                }
            });
            var adCount = floorlists.filter(function(item, index) {
                return item.isAd && index < _this2.data.maxCommentsLength;
            }).length;
            this.setData(_defineProperty({
                adCount: adCount,
                isHitLzlTest: isHitLzlTest,
                showNomoreIcon: floorlists.length === 0,
                showFloorNum: this.data.isPb,
                robSofa: floorlists.length === 0 && this.data.commentsType === 0,
                changeTabLoading: false
            }, "floorLists[" + (currentPage - 1) + "]", floorlists || []));
        },
        setReplyTextarea: function setReplyTextarea(res) {
            var textareaDatas = {};
            if (this.data.isPb) {
                var danMuDatas = this.handleDanMu(res.barrage_list || []);
                var barrageSwitch = wx.getStorageSync("barrageSwitch");
                var isOpenDanmu = barrageSwitch === "" || barrageSwitch === "open";
                textareaDatas = {
                    showDanmu: danMuDatas.length > 1,
                    isOpenDanmu: isOpenDanmu,
                    danMuDatas: danMuDatas,
                    showComment: true,
                    commentNum: +res.thread.valid_post_num
                };
            }
            return _extends({}, textareaDatas, {
                isCollect: res.thread.collect_status === 1 || res.thread.collect_status === 2,
                showCollect: true,
                isProThread: this.isProThread || false
            });
        },
        setAdData: function setAdData(res) {
            var pbConfig = (0, _util.getGlobalData)("swanSyncConfig");
            var rate = pbConfig ? +pbConfig.third_recom_ad_rate : 0;
            var adParams = JSON.stringify({
                eid: (0, _util.getAdEid)(this.data.needPbCut),
                qe: this.data.recommendQuery,
                ext: JSON.stringify([ {
                    k: "forum_name",
                    v: res.forum.name || ""
                }, {
                    k: "forum_id",
                    v: res.forum.id || ""
                }, {
                    k: "thread_title",
                    v: res.thread.title || ""
                }, {
                    k: "forum_dir",
                    v: res.forum.first_class || ""
                }, {
                    k: "forum_second_dir",
                    v: res.forum.second_class || ""
                } ])
            });
            return {
                adParams: adParams,
                isAdFromFC: Math.random() > 1,
                weiboData: Math.random() * 100 <= rate ? res.third_app_recom || [] : []
            };
        },
        // ???????????????????????????
        lookComments: function lookComments(e) {
            var type = +e.currentTarget.dataset.type;
            this.setData({
                commentsType: type
            });
            this.triggerEvent("changeComments", type);
        },
        // ??????+??????
        sortBy: function sortBy(e) {
            if (e.detail.key !== "jumpPage") {
                this.setData({
                    sortValue: e.detail,
                    changeTabLoading: true
                });
                this.reverseSort = +e.detail.key === 1;
            }
            this.triggerEvent("sortBy", e.detail);
            this.triggerEvent("toCommentsArea");
        },
        // ??????????????????
        scrolltolower: function scrolltolower() {
            if (this.data.hasMore && this.scrolltype !== "hand") {
                var origin = this.data.floorLists;
                if (origin.length && origin[0] && origin[0][0].isMock) {
                    this.setData(_defineProperty({}, "floorLists[0]", null));
                }
                this.triggerEvent("onBottom");
            }
            this.scrolltype = "auto";
        },
        // ??????
        agree: function agree(e) {
            var _this3 = this;
            var _e$currentTarget$data = e.currentTarget.dataset, item = _e$currentTarget$data.item, page = _e$currentTarget$data.page, index = _e$currentTarget$data.index;
            var currentAgree = item.agree;
            var opType = currentAgree.has_agree ? 1 : 0;
            var pid = item.pid;
            // if (this.isLock) {
            //     return;
            // }
                        this.isLock = true;
            (0, _util.authPost)(_url.AGREE, {
                forum_id: this.data.forum.id,
                thread_id: this.data.tid,
                // ????????????id
                post_id: pid,
                // ??????????????? 0????????????1???????????????
                op_type: opType,
                // ???????????????1??????????????????3???????????????
                obj_type: 1,
                // ???????????????1???PERFECT???2???GOOD???3???BAD???4???SHIT
                agree_type: 2
            }, "????????????", function() {
                return _this3.agree(e);
            }).then(function() {
                _this3.agreeRender(page, index, currentAgree, item.id);
                _this3.isLock = false;
            }).catch(function() {
                _this3.isLock = false;
            });
            (0, _trackTieba.trackTiebaClick)({
                page: this.data.page,
                locate: "like"
            });
        },
        // ?????????????????????
        agreeRender: function agreeRender(page, index, agree, id) {
            var agreeNums = agree.has_agree ? agree.agree_num - 1 : agree.agree_num + 1;
            var newAgree = {
                formatAgree: (0, _filters.numFormat)(agreeNums),
                agree_num: (0, _filters.numFormat)(agreeNums),
                has_agree: !agree.has_agree
            };
            if (typeof page == null) {
                // ???????????????
                this.setData(_defineProperty({}, "topPosts[" + index + "].agree", newAgree));
                this.agreeEqual("floor", newAgree, id);
            } else {
                this.setData(_defineProperty({}, "floorLists[" + page + "][" + index + "].agree", newAgree));
                this.agreeEqual("godFloor", newAgree, id);
            }
        },
        // ???????????????????????????????????????????????????
        agreeEqual: function agreeEqual(type, newAgree, id) {
            var _this4 = this;
            if (type === "floor") {
                if (this.isArray(this.data.floorLists)) {
                    this.data.floorLists.forEach(function(items, outerIndex) {
                        if (_this4.isArray(items)) {
                            items.forEach(function(v, inerIndex) {
                                if (v.id === id) {
                                    _this4.setData(_defineProperty({}, "floorLists[" + outerIndex + "][" + inerIndex + "].agree", newAgree));
                                }
                            });
                        }
                    });
                }
            }
            if (type === "godFloor") {
                if (this.isArray(this.data.topPosts)) {
                    this.data.topPosts.forEach(function(item, i) {
                        if (item.id === id) {
                            _this4.setData(_defineProperty({}, "topPosts[" + i + "].agree", newAgree));
                        }
                    });
                }
            }
        },
        showAllTopPosts: function showAllTopPosts() {
            var rqData = {
                kz: this.data.tid,
                post_id: this.data.getTopPostParam.slice(0, 10).toString()
            };
            var self = this;
            (0, _util.get)(_url.TOP_POSTS, rqData, true).then(function(res) {
                var list = (0, _formatPbData.formatTopAgreePost)(res.post_list);
                var tops = self.data.topPosts;
                self.data.topPosts = [].concat(_toConsumableArray(tops), _toConsumableArray(list));
                self.setData({
                    hideMoreGad: true,
                    topPosts: self.data.topPosts
                });
            });
        },
        handleDanMu: function handleDanMu(data) {
            var mydata = [];
            if (data && data.length) {
                data.forEach(function(element) {
                    var obj = {};
                    obj.pid = element.pid;
                    obj.text = function() {
                        var con = element.content;
                        var str = "";
                        con.forEach(function(ele) {
                            switch (ele.type) {
                              case 0:
                                // ????????????????????????
                                str += ele.text;
                                break;

                              case 1:
                                // ??????
                                break;

                              case 2:
                                // ??????
                                str += "[??????]";
                                break;

                              case 3:
                                // ??????
                                str += "[??????]";
                                break;

                              case 4:
                                // @+??????
                                break;

                              case 5:
                                // ??????
                                str += "[??????]";
                                break;

                              case 6:
                                // @+??????
                                str += "[??????]";
                                break;

                              case 7:
                                // ??????
                                break;

                              case 8:
                                // ??????
                                str += "[??????]";
                                break;

                              case 9:
                                // ??????
                                break;

                              case 10:
                                // ??????
                                str += "[??????]";
                                break;

                              case 11:
                                // ????????????????????????
                                str += "[??????]";
                                break;

                              case 12:
                                // ????????????
                                str += "[??????]";
                                break;

                              case 13:
                                // button??????
                                break;

                              case 14:
                                // ????????????
                                break;

                              case 15:
                                // ??????????????????
                                str += "[??????]";
                                break;

                              case 16:
                                // ??????
                                str += "[??????]";
                                break;

                              case 18:
                                // ??????
                                break;

                              case 19:
                                // ??????
                                str += "[??????]";
                                break;

                              case 20:
                                // ?????????
                                str += "[??????]";
                                break;

                              case 21:
                                // ????????????
                                str += "[?????????]";
                                break;
                            }
                        });
                        return (0, _filters.removeTag)(str);
                    }();
                    obj.logo = _util.GEN_PORTRAIT + element.portrait;
                    if (obj.text) {
                        mydata.push(obj);
                    }
                });
            }
            return mydata;
        },
        isArray: function isArray(o) {
            return Object.prototype.toString.call(o) === "[object Array]";
        },
        tolzl: function tolzl(e) {
            var lzlClicked = wx.getStorageSync("floor_app_button_show");
            // ?????????????????????????????????????????????
                        var otherPrevent = !this.data.isBaidu && this.data.isOpenApp && lzlClicked && lzlClicked.date === (0, 
            _util.getTimeValue)() && !lzlClicked.clicked;
            var baiduPrevent = this.data.isBaidu && this.data.needPbCut && this.data.canWakeUp;
            if (otherPrevent || baiduPrevent && !this.data.isHitLzlTest) {
                return;
            }
            var item = e.currentTarget.dataset.item;
            var isVertical = this.data.isVertical;
            var mainFloor = this.mainFloor;
            this.replyPage = -1;
            var text = "?????? " + (mainFloor.author.show_nickname || mainFloor.author.name_show || mainFloor.author.name || mainFloor.username);
            this.setData({
                parentPlaceHolder: text
            });
            wx.myNavigateTo({
                url: "/pages/lzl/lzl?pid=" + item.pid + "&from=pb&isProThread=" + this.isProThread + "&isVertical=" + isVertical + "&threadType=" + this.mainFloorType + "&uid=" + this.data.userId + "&tid=" + this.data.tid + "&fid=" + this.data.forum.id
            });
            return;
        },
        // ??????????????????
        spreadAllFloor: function spreadAllFloor() {
            var newList = this.data.floorLists[0].concat(this.restList);
            this.setData(_defineProperty({}, "floorLists[0]", newList));
        },
        // ?????????????????????
        goFirstOrFetchMore: function goFirstOrFetchMore(e) {
            this.triggerEvent("goFirstOrFetchMore", e.currentTarget.dataset.type);
        },
        // ??????
        collect: function collect(e) {
            var _this5 = this;
            var isCollect = +e.detail.type;
            var url = isCollect ? _url.ADDSTORE : _url.RMSTORE;
            var options = {
                pid: +this.mainPid,
                tid: +this.data.tid,
                fid: +this.data.forum.id,
                status: isCollect
            };
            var errMsg = isCollect ? "????????????" : "??????????????????";
            if (this.isLock) {
                return;
            }
            this.isLock = true;
            (0, _util.authPost)(url, options, errMsg, function() {
                return _this5.collect(e);
            }).then(function() {
                _this5.setData({
                    isCollect: isCollect
                });
                wx.showToast({
                    icon: "none",
                    title: isCollect ? "????????????" : "???????????????"
                });
                if (isCollect) {
                    (0, _util.track)("pb_collect", {
                        tid: _this5.data.tid,
                        fid: _this5.data.forum.id,
                        obj_source: _this5.mainFloorType ? 2 : 1
                    });
                }
                _this5.isLock = false;
            }).catch(function() {
                _this5.isLock = false;
            });
            this.triggerEvent("collect");
        },
        share: function share() {
            this.triggerEvent("share");
        },
        toWhere: function toWhere() {
            this.triggerEvent("toWhere");
        },
        toggleDanmu: function toggleDanmu(e) {
            var isOpen = +e.detail.type;
            var open = isOpen ? "open" : "close";
            wx.setStorageSync("barrageSwitch", open);
            this.setData({
                isOpenDanmu: isOpen
            });
        },
        blur: function blur() {
            this.setData({
                isFocus: false,
                isOpenDanmu: this.oldstatus
            });
        },
        focus: function focus() {
            this.oldstatus = this.data.isOpenDanmu;
            this.setData({
                isFocus: true,
                isOpenDanmu: false
            });
            this.triggerEvent("inputFocus");
        },
        // ????????????
        submit: function submit(e) {
            var _this6 = this;
            var value = e.detail.inputVal;
            var options = {
                co: (0, _filters.xssFilter)(value),
                fid: this.data.forum.id,
                src: 1,
                pid: this.replyPid,
                z: this.data.tid,
                word: this.data.forum.name
            };
            // ????????????
                        if (this.replyPage === -1) {
                options.pid = this.mainPid;
            }
            // ?????????????????????
                        (0, _util.authPost)(_url.APUB, options, "????????????", function() {
                return _this6.submit();
            }).then(function(res) {
                (0, _util.track)("pb_reply_success", {
                    tid: _this6.data.tid
                });
                wx.showToast({
                    icon: "none",
                    title: "????????????"
                });
                // ?????????????????????
                                var origin = void 0;
                if (_this6.replyPage === -1) {
                    origin = _this6.data.floorLists;
                    // ???????????????????????????
                                        if (_this6.data.isPb) {
                        // pb??????????????????????????? ????????????????????????????????????r
                        var lastIndex = origin.length - 1;
                        var innerLastIndex = origin[lastIndex].length - 1;
                        // ??????????????????????????????????????? ?????????
                        // ?????????????????????
                        // if(!(lastIndex === 0 && innerLastIndex === -1) && origin[lastIndex][innerLastIndex].isMock) {
                        //     origin.pop();
                        // }
                                                origin.push([ _this6.mockReplyData(value, res.pid) ]);
                        _this6.setData({
                            robSofa: false,
                            hideBackPos: false,
                            floorLists: origin,
                            commentNum: _this6.data.commentNum + 1
                        });
                        _this6.parentViewScrollTop = (0, _util.getGlobalData)("parentScrollTop") || 0;
                        clearTimeout(_this6.goBottomPosTimer);
                        _this6.goBottomPosTimer = setTimeout(function() {
                            _this6.triggerEvent("goCommentBottom");
                        }, 500);
                    } else {
                        if (origin.length && origin[0].length && origin[0][0].isMock) {
                            origin.shift();
                        }
                        origin.unshift([ _this6.mockReplyData(value, res.pid) ]);
                        _this6.setData({
                            floorLists: origin,
                            robSofa: false
                        });
                        _this6.viewScrollTop = _this6.scrollTop;
                        // ????????????
                                                clearTimeout(_this6.goMockFloorTimer);
                        _this6.goMockFloorTimer = setTimeout(function() {
                            _this6.scrolltype = "hand";
                            _this6.setData({
                                scrollToWhereEle: "mock-floor"
                            });
                        }, 500);
                    }
                } else {
                    // lzl?????????
                    origin = _this6.data.floorLists[_this6.replyPage][_this6.replyIndex];
                    if (!origin.sub_post_list) {
                        origin.sub_post_list = [];
                    }
                    origin.sub_post_list.push(_this6.mockReplyData(value, res.pid));
                    origin.reply_num = (0, _filters.numFormat)((origin.reply_num || 0) + 1);
                    _this6.setData(_defineProperty({}, "floorLists[" + _this6.replyPage + "][" + _this6.replyIndex + "]", origin));
                }
            });
        },
        mockReplyData: function mockReplyData(words, pid) {
            var userInfo = void 0;
            var isFirstMock = true;
            if (this.data.hasMock) {
                isFirstMock = false;
            } else {
                this.setData({
                    hasMock: true
                });
            }
            if (this.user.is_login) {
                userInfo = this.user;
            } else {
                var _getGlobalData = (0, _util.getGlobalData)("tbUser"), name = _getGlobalData.name, portrait = _getGlobalData.portrait;
                userInfo = {
                    name_show: name,
                    portrait: portrait
                };
            }
            return _extends({}, userInfo, {
                isMock: true,
                isFirstMock: isFirstMock,
                author: userInfo,
                time: "??????",
                pid: pid,
                name_show: userInfo.name_show,
                agree: {
                    has_agree: 0,
                    agree_num: 0
                },
                contNodeArr: [ [ {
                    type: "text",
                    text: words
                } ] ],
                node: [ [ {
                    type: "text",
                    text: words
                } ] ]
            });
        },
        relpy: function relpy(e) {
            var _e$currentTarget$data2 = e.currentTarget.dataset, item = _e$currentTarget$data2.item, page = _e$currentTarget$data2.page, index = _e$currentTarget$data2.index;
            this.replyPid = item.pid;
            this.replyPage = page;
            this.replyIndex = index;
            this.setData({
                isFocus: true,
                parentPlaceHolder: "?????? " + (item.author.show_nickname || item.author.name_show || item.author.name || item.username) + ": "
            });
            this.triggerEvent("replyFloor", item);
        },
        replyMainFloor: function replyMainFloor(type) {
            if (this.mainFloor) {
                var item = this.mainFloor;
                this.replyPage = -1;
                var text = type === "click" ? "?????? " + (item.author.show_nickname || item.author.name_show || item.author.name || item.username) + ": " : (0, 
                _util.getRandomTxt)();
                this.setData({
                    isFocus: type === "click",
                    parentPlaceHolder: text
                });
            }
        },
        delete: function _delete(e) {
            if (this.isLock) {
                return;
            }
            this.isLock = true;
            var self = this;
            var _e$currentTarget$data3 = e.currentTarget.dataset, pid = _e$currentTarget$data3.pid, type = _e$currentTarget$data3.type, page = _e$currentTarget$data3.page, index = _e$currentTarget$data3.index, subIndex = _e$currentTarget$data3.subIndex;
            var options = {
                ntn: "bdPLW",
                tn: "baiduManagerSubmit",
                delete_my_post: 1,
                z: self.data.tid,
                fid: this.data.forum.id,
                word: this.data.forum.name,
                lp: 6076,
                pid: pid,
                sc: pid,
                lm: this.data.forum.id,
                is_vipdel: 0
            };
            // lzl ??????
                        if (+type === 3) {
                options.src = type;
            }
            wx.showModal({
                title: "??????",
                content: "?????????????",
                success: function success(res) {
                    if (res.confirm) {
                        (0, _util.authPost)(_url.DEL, options, "??????????????????????????????", function() {
                            return self.delete(e);
                        }).then(function(data) {
                            self.isLock = false;
                            wx.showToast({
                                icon: "none",
                                title: "????????????"
                            });
                            self.renderRemoveForum(page, index, subIndex);
                            if (page === self.replyPage) {
                                self.replyPage = -1;
                                self.setData({
                                    parentPlaceHolder: (0, _util.getRandomTxt)()
                                });
                            }
                        }).catch(function(data) {
                            self.isLock = false;
                        });
                    } else {
                        self.isLock = false;
                    }
                }
            });
        },
        renderRemoveForum: function renderRemoveForum(page, index, subIndex) {
            var origin = void 0;
            if (subIndex != null) {
                // ???????????????
                origin = this.data.floorLists[page][index];
                origin.sub_post_list.splice(subIndex, 1);
                origin.reply_num = (0, _filters.numFormat)(origin.reply_num - 1);
                this.setData(_defineProperty({}, "floorLists[" + page + "][" + index + "]", origin));
            } else {
                // ????????????
                origin = this.data.floorLists[page];
                origin.splice(index, 1);
                this.setData(_defineProperty({}, "floorLists[" + page + "]", origin));
            }
        },
        scroll: function scroll(e) {
            this.scrollTop = e.detail.scrollTop;
        },
        backPrevPos: function backPrevPos(e) {
            var to = e.currentTarget.dataset.to;
            if (to === "down") {
                // ??????????????????
                this.setData({
                    viewScrollTop: this.viewScrollTop
                });
            } else {
                // pb??????
                this.triggerEvent("goOldPos", this.parentViewScrollTop);
            }
            this.setData({
                hideBackPos: true
            });
        },
        toThirdApp: function toThirdApp(e) {
            // ?????????????????????
            (0, _util.track)("recommend_expose", {
                tid: this.data.tid,
                fid: this.data.forum.id
            });
            (0, _util.track)("recommend_click_index", {
                index: +e.detail
            });
        },
        wakeUp: function wakeUp() {
            this.setData({
                canWakeUp: false
            });
        },
        bannerClickHandler: function bannerClickHandler(e) {
            this.triggerEvent("bannerClickListener", e);
        }
    }
});