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

/**
                                                                                                                                                                                                                                                                   * @file pb
                                                                                                                                                                                                                                                                   * @author zs
                                                                                                                                                                                                                                                                   */ var _adaptOnInit = require("../../util/adaptOnInit");

var _util = require("../../util/util.js");

var _filters = require("../../util/filters.js");

var _eventTracking = require("../../util/eventTracking.js");

var _eventTracking2 = _interopRequireDefault(_eventTracking);

var _pbdata = require("./pbdata");

var _pbdata2 = _interopRequireDefault(_pbdata);

var _url = require("../../util/url");

var _formatPbData = require("../../util/formatPbData");

var _banner = require("../../util/banner");

var _banner2 = _interopRequireDefault(_banner);

var _trackTieba = require("../../util/trackTieba");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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

var globalData = getApp().globalData;

var onfire = require("../../util/onfire.js");

var _require = require("../../util/preRequest"), pbRequest = _require.pbRequest;

var init_flag = false;

Page((0, _adaptOnInit.adaptOnInit)(_extends({
    data: _extends({
        IMG_CDN: _url.IMG_CDN
    }, (0, _util.getStatusHeight)(globalData.systemInfo), _pbdata2.default.pbPagedata, {
        isBaidu: (0, _util.getGlobalData)("isBaidu"),
        isGame: false,
        showBackIcon: true,
        isSilentShow: false,
        buoyConfig: {},
        bannerConfig: {},
        /** ~~weixin only begin~~ */
        isSkeleton: true,
        /** ~~weixin only end~~ */
        from: "",
        openTiebaAppUrl: (0, _util.getGlobalData)("bdLaunchAppFloorFolder") || "https://downpack.baidu.com/baidutieba_AndroidPhone_1023564b.apk",
        isIphoneX: false,
        isWeb: globalData.systemInfo.platform === "web",
        pbContentWidth: globalData.systemInfo.screenWidth,
        COMMENTS_MAX_VALUE: 2,
        placeholderTxt: (0, _util.getRandomTxt)(),
        isPostDeleted: false,
        // ??????banner??????
        bannerAd: [],
        topicList: [],
        // ????????????????????? ?????????
        nestAdLoadFlag: true,
        isBrowser: (0, _util.getGlobalData)("isBrowser") || wx.getStorageSync("isBrowser"),
        myloading: true,
        loadingHeight: "70vh",
        // ???????????????????????????
        videoWakeupConfig: {},
        pbcutWakeupConfig: {},
        contentWakeupConfig: {},
        // ??????????????????????????????????????????????????????????????????true??????????????????
        pending: false,
        // ???????????????0 ?????????????????????1 ?????????2 ??????
        comment_sort_type: 0
    })
}, _pbdata2.default.pbPageInfo, {
    systemData: globalData.systemInfo,
    COMMENTS_DEFAULT_VALUE: 0,
    initData: function initData(option) {
        var _this = this;
        if (init_flag) {
            init_flag = false;
            return;
        }
        // console.log('pb init data');
                init_flag = true;
        var options = (0, _util.urlParamDecode)(option);
        var statparam = options.statparam, to = options.to, word = options.word, fr = options.fr, source_type = options.source_type, source_locate = options.source_locate;
        var tid = options.tid || options.kz || options.scene;
        this.query = word || "";
        this.data.recommendQuery = word || "";
        this.to = to;
        this.statisticParam = statparam;
        this.data.tid = tid;
        this.fr = fr;
        this.sourceType = source_type;
        this.sourceLocate = source_locate;
        this.checkSync();
        // ??????????????????????????????????????????????????????
                this.setData({
            showBackIcon: !(getCurrentPages().length < 2)
        });
        if (options.gameCenterMiniApp && options.gameCenterMiniApp === "gameCenter" && wx.navigateBackSmartProgram) {
            this.setData({
                isGame: true
            });
        }
        // ???????????????????????????????????????
                (0, _util.setGlobalData)("scene", "");
        if (options.toCommentsArea || options.isComment) {
            setTimeout(function() {
                _this.toCommentsArea();
            }, 300);
        }
        // ?????????????????????????????????
                if (fr === "gaokaoala") {
            this.setData({
                isGaokaoAla: true
            });
        }
    },
    onInit: function onInit(option) {
        var _this2 = this;
        if (this.prefetchStatus !== 1 && this.prefetchStatus !== 2) {
            pbRequest(option, "", this);
        }
        onfire.one("pbRequestOK", function(res) {
            _this2.loadThreads({
                app_onlaunch_data: res
            });
        });
        onfire.one("pbRequestFail", function(res) {
            _this2.data.pending = false;
            init_flag = false;
            _this2.removeSkeleton && _this2.removeSkeleton();
            wx.hideLoading();
            _this2.getDataErr(res);
        });
        this.initData(option);
        // ??????pb?????????
                (0, _trackTieba.trackTiebaView)({
            page: "pages/pb/pb",
            locate: "pb_request"
        });
    },
    onHide: function onHide() {
        // ?????????????????????????????????
        var audioContext = (0, _util.getGlobalData)("curAudioCtx");
        if (audioContext) {
            audioContext.stop();
        }
        // ?????????????????????????????????
                if (this.videoContext && typeof this.videoContext.pause === "function") {
            this.videoContext.pause();
        }
        this.trackDuration();
        // this.setData({
        //     isScrollDanmu: false
        // });
                this.exposeTracker && this.exposeTracker.sendExpose([ "hotrecommend_sb", "siterecommend_sb", "topic_list", "viewmore" ]);
    },
    onUnload: function onUnload() {
        this.toIndexTimer && clearTimeout(this.toIndexTimer);
        this.mockReplyTimer && clearTimeout(this.mockReplyTimer);
        this.replyNotFirstTimer && clearTimeout(this.replyNotFirstTimer);
        this.observerBottomEleTimer && clearTimeout(this.observerBottomEleTimer);
        this.intersectionObserver && this.intersectionObserver.disconnect();
        this.intoCommentObserver && this.intoCommentObserver.disconnect();
        this.onHide();
    },
    // ?????????????????????
    toGame: function toGame() {
        wx.navigateBackSmartProgram && wx.navigateBackSmartProgram({
            // 2021/01/12 ????????? FE ?????????from ??????????????? string
            extraData: {
                from: "1261005800000000"
            },
            from: "1261005800000000",
            success: function success(res) {
                console.log("navigateBackSmartProgram success", res);
            },
            fail: function fail(err) {
                console.log("navigateBackSmartProgram fail", err);
            }
        });
    },
    onReady: function onReady() {
        var isIphoneX = (0, _util.getGlobalData)("isIphoneX");
        this.setData({
            isIphoneX: Boolean(isIphoneX),
            canWakeUp: !(0, _util.getGlobalData)("forbidWakeUp")
        });
        this.videoContext = wx.createVideoContext && wx.createVideoContext("myVideo");
        (0, _util.subscribeMsg)(this, "msgCount");
        (0, _util.track)("pb_baoguang", {
            eshow: 1,
            fr: this.fr,
            source_type: this.sourceType,
            source_locate: this.sourceLocate
        });
    },
    onShow: function onShow() {
        init_flag = false;
        var app = (0, _util.getGlobalData)();
        var at_me = app.at_me, reply_me = app.reply_me, agree_me = app.agree_me;
        var msgCount = at_me + reply_me + agree_me;
        if (msgCount > 0) {
            this.setData({
                msgCount: msgCount
            });
        }
        this.enterTime = new Date().getTime();
        if (this.data.failFetchData) {
            this.initOptions();
            this.loadThreads();
        }
        this.meta && wx.setPageInfo && wx.setPageInfo(this.meta);
        (0, _util.track)("pb_expose", {
            tid: this.data.tid
        });
        (0, _trackTieba.trackTiebaView)({
            page: "pages/pb/pb",
            locate: "tb_smallapp_pb_view",
            fr: this.fr || "",
            page_type: +(0, _util.getGlobalData)("callNAScene") === 1036 ? "share" : "",
            event_type: (0, _util.getGlobalData)("__type__") + "_smallapp",
            source_type: this.sourceType || "",
            source_locate: this.sourceLocate || ""
        });
    },
    share: function share() {
        (0, _trackTieba.trackTiebaClick)({
            page: "pages/pb/pb",
            locate: "share"
        });
    },
    inputFocus: function inputFocus() {
        (0, _trackTieba.trackTiebaClick)({
            page: "pages/pb/pb",
            locate: "reply"
        });
    },
    collect: function collect() {
        (0, _trackTieba.trackTiebaClick)({
            page: "pages/pb/pb",
            locate: "favorites"
        });
    },
    onShareAppMessage: function onShareAppMessage(e) {
        // ?????????pb??????feed???????????????????????????????????????tid
        if (e.target && e.target.dataset && e.target.dataset.tid) {
            return this.handleRecommendationShareAppMessage(e);
        }
        // ???????????????pb???????????????
                if (e.target && e.target.dataset && e.target.dataset.track) {
            (0, _util.track)(e.target.dataset.track);
        }
        var title = void 0;
        if (this.data.thread && this.data.thread.title) {
            title = this.data.thread.title + "??????????????????";
        } else if (this.data.mainFloor && this.data.mainFloor.content[0]) {
            title = (0, _filters.filterTag)(this.data.mainFloor.content[0].text);
        } else {
            title = "????????????";
        }
        var data = {
            title: title,
            path: "/pages/pb/pb?tid=" + this.data.tid
        };
        /** ~~weixin only begin~~ */        if (this.data.thread && this.data.thread.swan_t_share_image) {
            data.imageUrl = this.data.thread.swan_t_share_image;
        } else {
            (0, _util.get)(_url.SHARE, {
                type: 3,
                tid: this.data.tid
            });
        }
        /** ~~weixin only end~~ */        return data;
    },
    /**
   * feed????????????????????????
   * @param {*} e
   * @return {object} data
   */
    handleRecommendationShareAppMessage: function handleRecommendationShareAppMessage(e) {
        var dataset = e.target.dataset;
        var item = dataset.item;
        var tid = dataset.tid;
        var title = " " + item.title + "??????????????????";
        var data = {
            title: title,
            path: "/pages/pb/pb?tid=" + tid,
            imageUrl: item.forum.img || item.bk_img,
            content: ""
        };
        (0, _util.get)(_url.SHARE, {
            type: 3,
            tid: tid
        });
        return data;
    },
    // ??????????????????
    toCommentsArea: function toCommentsArea() {
        this.setData({
            toIndex: "comments-area"
        });
    },
    checkSync: function checkSync() {
        this.initOptions();
        if (!(0, _util.getGlobalData)("foldXFloor")) {
            (0, _util.getNewTbs)();
        }
    },
    initOptions: function initOptions() {
        var tid = this.data.tid;
        var platform = (0, _util.getGlobalData)("__type__");
        this.options = {
            rn: 20,
            // ???????????????????????????
            see_lz: 0,
            source_platform: platform,
            r: 0,
            pn: 0,
            kz: tid,
            serverNeedCut: 1
        };
    },
    loadThreads: function loadThreads(options) {
        var _this3 = this;
        if (this.data.pending == true) {
            return;
        }
        this.data.pending = true;
        (0, _util.track)("pb_push_server", {});
        this.isFetchDataComplete = false;
        if (this.prefetchStatus === 1 || this.prefetchStatus === 2 && options && options.app_onlaunch_data && options.app_onlaunch_data.page && options.app_onlaunch_data.forum) {
            this.data.pending = false;
            init_flag = false;
            this.options.rn = 20;
            this.pageInfo = options.app_onlaunch_data.page;
            this.totalnums = +options.app_onlaunch_data.page.total_num;
            this.formatPbData(options.app_onlaunch_data);
            (0, _util.getGroupMsg)();
            this.addVideoPlayNum();
            wx.hideLoading();
            this.setData({
                failFetchData: false,
                myloading: false
            });
            wx.hideLoading();
            this.prefetchStatus = 2;
        } else {
            (0, _util.get)(_url.PB, options || this.options).then(function(res) {
                _this3.prefetchStatus = 2;
                _this3.data.pending = false;
                init_flag = false;
                _this3.options.rn = 20;
                _this3.pageInfo = res.page;
                _this3.totalnums = +res.page.total_num;
                _this3.formatPbData(res);
                (0, _util.getGroupMsg)();
                _this3.addVideoPlayNum();
                _this3.setData({
                    failFetchData: false,
                    myloading: false
                });
                wx.hideLoading();
            }).catch(function(res) {
                _this3.data.pending = false;
                init_flag = false;
                _this3.removeSkeleton && _this3.removeSkeleton();
                wx.hideLoading();
                _this3.getDataErr(res);
                _this3.setData({
                    myloading: false,
                    err_code: res.errCode || ""
                });
            });
            // ??????pb?????????
                        (0, _trackTieba.trackTiebaView)({
                page: "pages/pb/pb",
                locate: "pb_request"
            });
        }
    },
    formatPbData: function formatPbData(res) {
        var _this4 = this;
        var self = this;
        if (!this.data.mainFloor) {
            var tempFloor = res && res.post_list && res.post_list.filter(function(item) {
                return item.floor === 1;
            })[0];
            var mainFloor = tempFloor && tempFloor.content ? JSON.parse(JSON.stringify(tempFloor)) : {};
            if (+mainFloor.is_flash === 1) {
                mainFloor.isVideo = true;
                res.video_info.play_count = (0, _filters.numFormat)(res.video_info.play_count);
            }
            var _parsePbData = (0, _formatPbData.parsePbData)(res, this.data.recommendQuery), forum = _parsePbData.forum;
            var topForumName = (0, _filters.countLen)(forum.name) > 5 ? forum.name.slice(0, 5) + "..." : forum.name;
            var type = mainFloor.isVideo ? "shipin" : "tuwen";
            var browser = (0, _util.getGlobalData)("systemInfo") && (0, _util.getGlobalData)("systemInfo").host || wx.getStorageSync("systemInfo").host || "";
            var objSource = "shoubai";
            var qqWakeupConfig = {
                page: "pb",
                param: {
                    custom: {
                        obj_param1: type || ""
                    },
                    locate: "qqLaunchApp",
                    track: "qqLaunchApp",
                    obj_source: objSource,
                    obj_type: "pb",
                    tid: res.thread.id,
                    qd: "1025493f"
                },
                androidSource: "1025493f"
            };
            this.callApp();
            mainFloor.time = (0, _filters.postTime)(mainFloor.time);
            mainFloor.author.userName = mainFloor.author.show_nickname || mainFloor.author.name_show || mainFloor.author.name;
            // ????????????????????????????????????
                        var imgs = mainFloor && mainFloor.content && mainFloor.content.filter(function(con) {
                return con.type === 3;
            });
            var thumbnail = imgs.length > 0 ? imgs[0] : "";
            thumbnail = thumbnail.static_img || thumbnail.src;
            mainFloor.thumbnail = thumbnail;
            // ????????????????????????
                        var maxW = getApp().globalData.systemInfo.screenWidth - 34;
            mainFloor.content && mainFloor.content.forEach(function(item) {
                if (item.type === 3) {
                    // ?????????????????????????????????
                    item.height = maxW * item.bsize.split(",")[1] / item.bsize.split(",")[0];
                    // ??????gif?????????src??????????????????????????????????????????static_img??????
                                        item.big_pic = item.static_img || item.src;
                    // ??????????????????????????????????????????????????????gif???static????????????????????????????????????????????????gif??????????????????????????????????????????????????????
                                        item.static_img = item.src;
                    item.bsize_height = item.height;
                }
            });
            // ?????????????????????
                        res.hot_threads && res.hot_threads.forEach(function(item) {
                item.hotNum = (item.hot_num / 1e4).toFixed(1);
            });
            var needPbCut = false;
            var maxCommentsLength = this.COMMENTS_DEFAULT_VALUE;
            // ????????????????????????????????? 3????????? + 2???????????????????????????????????????????????????
                        var otherNeedCut = !this.data.isBaidu && res.post_list.length > this.data.COMMENTS_MAX_VALUE + 1;
            var baiduNeedCut = this.data.isBaidu;
            if (otherNeedCut || baiduNeedCut) {
                needPbCut = true;
                maxCommentsLength = this.data.COMMENTS_MAX_VALUE;
            }
            var collectStatus = +res.thread.collect_status;
            var videoWakeupConfig = {
                page: "pb",
                param: {
                    tid: res.thread.id,
                    obj_type: "pb",
                    locate: "video_smallsb",
                    track: "video_smallsb",
                    custom: {
                        obj_param1: type
                    }
                },
                androidSource: "1025493d"
            };
            var pbcutWakeupConfig = {
                page: "pb",
                param: {
                    tid: res.thread.id,
                    obj_type: "pb",
                    locate: "commentcut_sb",
                    track: "commentcut_sb",
                    custom: {
                        obj_param1: type
                    }
                },
                androidSource: "1025493l"
            };
            var contentWakeupConfig = {
                page: "pb",
                param: {
                    tid: res.thread.id,
                    obj_type: "pb",
                    locate: "firstfloor_bd",
                    track: "firstfloor_bd",
                    custom: {
                        obj_param1: type
                    }
                },
                androidSource: "1025493r"
            };
            var silentWakeupConfig = {
                page: "pb",
                param: {
                    tid: res.thread.id,
                    obj_type: "pb",
                    locate: "sb_launchapp",
                    track: "sb_launchapp",
                    custom: {
                        obj_param1: type
                    }
                },
                androidSource: "1026519n"
            };
            var topWakeupConfig = {
                page: "pb",
                param: {
                    tid: res.thread.id,
                    obj_type: "pb",
                    locate: "top_btn_bd",
                    track: "top_btn_bd",
                    custom: {
                        obj_param1: type
                    }
                },
                androidSource: "1025493q"
            };
            // ??????????????????id
                        var portraitId = res.post_list[0] && res.post_list[0].author && res.post_list[0].author.portrait || "";
            if (portraitId) {
                portraitId = portraitId.substring(0, portraitId.indexOf("?t=") > -1 ? portraitId.indexOf("?t=") : 999);
            }
            mainFloor.portraitId = portraitId || "";
            // ?????? ?????? item
                        var mountListOri = mainFloor && mainFloor.content && mainFloor.content.filter(function(con) {
                return con.type === 37;
            }) || [];
            var mountList = mountListOri.map(function(mount) {
                return _extends({}, mount.item, {
                    tags: (mount.item.tags || []).join(" ")
                });
            });
            this.setData({
                mountList: mountList,
                myloading: false,
                mainFloor: mainFloor,
                forum: forum,
                author: res.thread.author,
                videoInfo: res.video_info,
                thread: res.thread,
                tid: res.thread.id
            }, function() {
                _this4.removeSkeleton && _this4.removeSkeleton();
                _this4.setData({
                    myloading: false,
                    topForumName: topForumName,
                    user: res.user,
                    videoWakeupConfig: videoWakeupConfig,
                    pbcutWakeupConfig: pbcutWakeupConfig,
                    contentWakeupConfig: contentWakeupConfig,
                    silentWakeupConfig: silentWakeupConfig,
                    topWakeupConfig: topWakeupConfig,
                    qqWakeupConfig: qqWakeupConfig,
                    // from: this.data.from || '',
                    fid: forum.id || "",
                    pid: mainFloor.pid,
                    isProThread: res.thread.is_pro_thread || false,
                    recommendQuery: _this4.data.recommendQuery,
                    antiReason: res.anti && res.anti.del_reason,
                    showMainCallApp: ![ "1091001510012000", "2001", "1091001510013000", "2003", "10910015" ].includes((0, 
                    _util.getGlobalData)("callNAScene")),
                    needPbCut: needPbCut,
                    maxCommentsLength: maxCommentsLength,
                    isCollect: collectStatus === 1 || collectStatus === 2
                }, function() {
                    _this4.feedTrack(_this4);
                    _this4.removeSkeleton && _this4.removeSkeleton();
                    _this4.observerEles();
                });
            });
            this.adsTrackOnce && this.setQueryAndTrack(res);
            if (res.meta) {
                var meta = res.meta;
                var summary = "";
                mainFloor.content.filter(function(txt) {
                    return txt.type === 0;
                }).forEach(function(txt) {
                    summary += txt.text;
                });
                meta.title = this.data.thread.title || summary.slice(0, 30) || "????????????";
                meta.image = meta.image || _util.metaImage;
                this.meta = meta;
                wx.setPageInfo && wx.setPageInfo(meta);
            }
        }
        setTimeout(function() {
            self.concatDataCached = res;
            self.isUseFloorDatas = true;
            self.isFetchDataComplete = true;
            var orignRes = JSON.parse(JSON.stringify(res));
            var smallRes = JSON.parse(JSON.stringify(res));
            smallRes.post_list = res.post_list.slice(0, 3).concat();
            // floorDatas ??????????????????
                        self.setData({
                isBroken: false,
                /** ~~weixin only begin~~ */
                isSkeleton: false,
                /** ~~weixin only end~~ */
                floorDatas: smallRes
            }, function() {
                // ?????????3???????????????????????????
                self.setData({
                    floorDatas: orignRes
                });
                // Banner ?????????
                                var viewportHeight = (0, _util.getViewportHeight)();
                var os = (0, _util.getSystemTypeInfo)();
                self.banner = new _banner2.default({
                    productId: 2
                }, {
                    ct: 2,
                    ot: os.type === "ios" ? 1 : 2,
                    ver: os.version,
                    viewportHeight: viewportHeight,
                    ad: {
                        da_type: "",
                        da_page: "pb",
                        da_page_num: 1,
                        da_locate: 2,
                        origin_time: Date.now()
                    }
                });
                // ????????????????????????????????? 6 ??? ???????????????????????????????????????
                                self.setData({
                    hideWakeUp: res.thread.valid_post_num <= self.data.COMMENTS_MAX_VALUE + 1
                });
                // ?????????????????????setdata??????????????????
                                self.data.nestAdLoadFlag = false;
            });
            clearTimeout(self.hasMoreTimer);
            var hasMore = true;
            if (self.reverseSort) {
                hasMore = self.options.pn > 0;
                if (!hasMore) {
                    self.setData({
                        showJumpBar: false
                    });
                }
            } else {
                hasMore = res.page.current_page < res.page.total_page;
            }
            self.needScrollToComments && self.goCommentTop();
            self.hasMoreTimer = setTimeout(function() {
                self.setData({
                    hasMore: self.data.needPbCut ? false : hasMore
                });
            }, 400);
        }, 100);
    },
    getTopicList: function getTopicList() {
        var _this5 = this;
        (0, _util.get)(_url.TOPIC_LIST, {
            list_type: "all",
            need_tab_list: 0
        }).then(function(res) {
            var topicList = res.data.topic_bang.topic_list;
            _this5.setData({
                topicList: topicList.slice(0, 5)
            });
        }).catch(function(err) {
            throw err;
        });
    },
    /*
   * ????????????????????????
   * @return {void}
   */
    getNestAdData: function getNestAdData() {
        var _this6 = this;
        var query = {
            // ???????????????1 ?????????2 ??????
            type: 1,
            // ?????????
            title: this.data.thread && this.data.thread.title || "",
            // ??????
            forum_name: this.data.forum && this.data.forum.name || "",
            // ???????????????
            second_dir: this.data.forum && this.data.forum.second_class || "",
            // ???????????????
            source_platform: "baidu",
            // ??????????????????????????????????????????
            page_origin: this.fr || ""
        };
        // ??????banner??????
                (0, _util.get)(_url.PB_NEST_AD, _extends({}, query, {
            place_type: "banner"
        }), "????????????banner????????????").then(function(res) {
            _this6.handleNestAdData("banner", res);
        }).catch(function(err) {
            throw err;
        });
    },
    /*
   * ????????????????????????????????? & ?????????
   * @param {object} res
   * @return {void}
   */
    handleNestAdData: function handleNestAdData(type, res) {
        var _this7 = this;
        try {
            var adData = res;
            // banner ??????
                        if (type === "banner") {
                var bannerAdData = adData && adData.banner && adData.banner.ad_place_data && adData.banner.ad_place_data.ads || [];
                // ????????? banner ????????????
                                if (bannerAdData.length) {
                    bannerAdData = bannerAdData.map(function(ad) {
                        return _this7.formatBannerAdData(ad);
                    });
                }
                this.setData({
                    bannerAd: bannerAdData
                });
            }
        } catch (err) {
            err = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(err);
            throw err;
        }
    },
    /*
   * ?????????????????????
   * ??????????????????????????????????????????????????????????????? ?????????????????????????????????
   * @param {object} ad
   * @return {object}
   */
    formatBannerAdData: function formatBannerAdData(ad) {
        var newAd = {};
        // app ???????????????????????? app ??????
                newAd.appFlag = false;
        newAd.title = ad.title || "";
        newAd.name = ad.showurl && ad.showurl.text || "";
        // ????????????????????????????????????
                newAd.imgList = ad.big_image && [ ad.big_image ] || ad.multi_image && ad.multi_image.imgs || [];
        newAd.imgNum = newAd.imgList.length;
        // ???????????? app ????????????
                if (ad.app) {
            newAd.appFlag = true;
            // ????????????
                        newAd.text = "????????????";
            newAd.appName = ad.app.name || "";
            newAd.appId = ad.app.app_id || "";
            // ??????link
                        newAd.link = ad.app.link || "";
            // ????????????
                        newAd.download = ad.app.unpack_download || "";
            newAd.stars = +ad.app.stars || 0;
            // ?????????????????????
                        var appDevInfo = ad.app.app_reform_data || {};
            newAd.developer = appDevInfo.developer_name || "";
            newAd.version = appDevInfo.version || "";
            newAd.privacyUrl = appDevInfo.privacy_url || "";
            newAd.permissionUrl = appDevInfo.permission_url || "";
        } // ?????? ?????? url_button ??????
         else if (ad.url_button) {
            newAd.text = ad.url_button.text || "????????????";
            newAd.link = ad.url_button.link || "";
        } // ????????????????????????????????? ????????????
         else {
            newAd.text = "????????????";
            newAd.link = ad.url || "";
        }
        newAd.url = ad.url || "";
        // ??????????????????
                newAd.trackInfo = this.getNestAdTrackData(21);
        return newAd;
    },
    /*
   * ????????????????????????
   * @param {object} ad
   * @return {object}
   */
    getNestAdTrackData: function getNestAdTrackData(type) {
        return {
            obj_task: "common_exp",
            type: "show",
            task: "pb_exposure",
            page: "PB",
            locate: "tb_smallapp",
            page_type: "a005",
            // banner: 21, ??????: 22
            obj_adlocate: type,
            obj_floors: 0,
            obj_isads: 1,
            tid: this.data.tid,
            fid: this.data.fid
        };
    },
    getDataErr: function getDataErr(res) {
        if (res.no === 3001) {
            // 2017???????????????????????????????????????
            if (res.data.forum.name) {
                wx.redirectTo({
                    url: "/pages/frs/frs?kw=" + res.data.forum.name
                });
                return;
            }
            wx.switchTab({
                url: "/pages/index/index"
            });
            return;
        } else if (res.no === 350008) {
            this.setData({
                isPostDeleted: true
            });
        }
        this.showErrorPage(res.error);
    },
    showErrorPage: function showErrorPage() {
        var errMsg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        this.setData({
            failFetchData: true,
            /** ~~weixin only begin~~ */
            isSkeleton: false,
            /** ~~weixin only end~~ */
            errorMsg: errMsg
        });
    },
    changeComments: function changeComments(e) {
        if (this.options.see_lz === +e.detail) {
            return;
        }
        this.options.see_lz = +e.detail;
        this.options.pn = 0;
        this.setData({
            hasMore: true,
            hideWakeUp: true
        });
        this.needScrollToComments = true;
        this.loadThreads();
    },
    sortBy: function sortBy(e) {
        // ????????????r=0?????????r=1?????????r=2;
        this.data.comment_sort_type = +e.detail.key;
        if (e.detail.key !== "jumpPage") {
            this.options.r = +e.detail.key;
            if (+this.options.r === 1) {
                // ??????
                this.options.pn = Math.max(this.totalnums - this.options.rn) + 1;
                this.reverseSort = true;
            } else {
                this.options.pn = 0;
                this.reverseSort = false;
            }
            this.setData({
                floorDatas: null,
                hasMore: false
            });
            this.loadThreads();
        } else {
            // ??????
            this.setData({
                isShowPageJumpDialog: true,
                pageInfo: this.pageInfo
            });
        }
    },
    closeJumpPage: function closeJumpPage() {
        this.setData({
            isShowPageJumpDialog: false
        });
    },
    jumpPageNumChange: function jumpPageNumChange(e) {
        var page = +e.detail;
        this.setData({
            jumpPageNum: page
        });
        return page;
    },
    jumpPage: function jumpPage() {
        var reg = /^[1-9]\d*$/;
        if (!reg.test(this.data.jumpPageNum) || this.data.jumpPageNum > this.data.pageInfo.total_page) {
            wx.showToast({
                icon: "none",
                title: "???????????????????????????????????????"
            });
        } else {
            var options = {
                rn: this.options.rn,
                pn: (this.data.jumpPageNum - 1) * 20,
                isJump: true,
                beginPageNum: this.data.jumpPageNum,
                see_lz: this.options.see_lz,
                r: this.options.r,
                kz: this.data.tid,
                serverNeedCut: 1
            };
            this.options.pn = options.pn;
            this.setData({
                showJumpBar: this.data.jumpPageNum > 1,
                floorDatas: null,
                hasMore: false
            });
            this.loadThreads(options);
            this.closeJumpPage();
        }
    },
    // ??????????????????????????? / ??????????????????
    goFirstOrFetchMore: function goFirstOrFetchMore(e) {
        var _this8 = this;
        var type = +e.detail;
        // 0 ???????????????????????? 1????????????????????????
                if (type === 0) {
            // this.initOptions();
            this.loadThreads();
            this.setData({
                showJumpBar: false
            });
        } else {
            // ??????
            if (+this.options.r === 0) {
                this.options.pn = this.options.pn - this.options.rn > 0 ? this.options.pn - this.options.rn : 0;
                (0, _util.track)("pb_push_server", {});
                (0, _util.get)(_url.PB, this.options).then(function(res) {
                    if (_this8.options.pn === 0) {
                        _this8.setData({
                            showJumpBar: false
                        });
                        res.post_list.shift();
                        _this8.options.pn = (_this8.data.jumpPageNum - 1) * 20;
                    }
                    _this8.concatDataCached = res;
                    _this8.isUseFloorDatas = false;
                    _this8.isFetchDataComplete = true;
                    _this8.setData({
                        concatData: res,
                        concatType: "prev"
                    });
                    (0, _trackTieba.trackTiebaView)({
                        page: "pages/pb/pb",
                        locate: "pb_request"
                    });
                });
            } // ??????
             else if (this.options.r === 1) {
                this.options.pn -= this.options.rn;
                this.loadThreads();
            }
        }
    },
    onReachBottom: function onReachBottom() {
        // ??????????????????????????????
        if (this.data.pending || !this.data.hasMore) {
            return;
        }
        if (this.reverseSort) {
            if (this.options.pn <= 0) {
                this.setData({
                    hasMore: false
                });
            } else {
                var pn = this.options.pn;
                this.options.pn = Math.max(this.options.pn - this.options.rn, 0);
                this.options.rn = pn < this.options.rn ? pn - 1 : this.options.rn;
            }
        } else {
            this.options.pn += this.options.rn;
        }
        this.loadThreads();
    },
    trackDuration: function trackDuration() {
        var duration = new Date().getTime() - this.enterTime;
        if (this.data.mainFloor && this.data.mainFloor.is_flash) {
            (0, _util.track)("video_duration", {
                tid: this.data.tid,
                fid: this.data.fid,
                uid: this.data.user.id,
                statistic_param: this.statisticParam,
                duration: duration
            });
        }
        (0, _util.track)("duration", {
            tid: this.data.tid,
            fid: this.data.fid,
            uid: this.data.user.id,
            statistic_param: this.statisticParam,
            duration: duration,
            thread_type: this.data.mainFloor && this.data.mainFloor.is_flash ? 2 : 1
        });
    },
    addVideoPlayNum: function addVideoPlayNum() {
        var tid = this.data.tid;
        (0, _util.get)(_url.PLAY_STAT, {
            tid: tid
        });
    },
    // feed??????
    feedTrack: function feedTrack(self) {
        var scene = (0, _util.getGlobalData)("callNAScene");
        var sceneMap = [ "1091001510012000", "2001", "1091001510013000", "2003", "10910015" ];
        var _self$data = self.data, fid = _self$data.fid, tid = _self$data.tid, forum = _self$data.forum, thread = _self$data.thread, mainFloor = _self$data.mainFloor;
        var param = {
            scene: scene,
            tid: tid,
            first_dir: forum.first_class,
            second_dir: forum.second_class,
            fid: fid,
            fname: forum.name || forum.forumName,
            type: mainFloor.isVideo ? "??????" : "??????",
            title: thread.title
        };
        if (sceneMap.indexOf(scene) !== -1) {
            (0, _util.get)(_url.FEED_TRACK, param);
        }
    },
    observerEles: function observerEles() {
        var _this9 = this;
        this.observerBottomEleTimer && clearTimeout(this.observerBottomEleTimer);
        this.observerBottomEleTimer = setTimeout(function() {
            var intoCommentObserver = wx.createIntersectionObserver(_this9, {
                thresholds: [ 1 ]
            });
            intoCommentObserver.relativeToViewport({
                top: 0
            }).observe("#comments-area", function(res) {
                var isScrollDanmu = true;
                if (res.boundingClientRect.top < 0) {
                    isScrollDanmu = false;
                }
                // this.setData({
                //     isScrollDanmu: isScrollDanmu
                // });
                        });
            _this9.intoCommentObserver = intoCommentObserver;
        }, 500);
    },
    getScrollInfo: function getScrollInfo(e) {
        // Banner ??????
        var self = this;
        var component = self.selectComponent("#pb-comments");
        this.banner && this.banner.traversal(component);
        // ??????
                var windowHeight = this.systemData.windowHeight;
        // if (e.detail.scrollTop > this.scrollTop) {
        //     this.setData({
        //         foldShare: true
        //     });
        // }
                this.scrollTop = e.detail.scrollTop;
        var showToTopBtn = false;
        if (+this.scrollTop > windowHeight && !this.data.isFocus) {
            showToTopBtn = true;
        }
        this.setData({
            showToTopBtn: showToTopBtn
        });
        (0, _util.setGlobalData)("parentScrollTop", e.detail.scrollTop);
        // ?????? ????????????
                var exposeBox = this.selectAllComponents(".ad-expose");
        this.exposeTracker = _eventTracking2.default && _eventTracking2.default.getInstance ? _eventTracking2.default.getInstance(exposeBox, "pb_expose") : null;
        if (this.exposeTracker) {
            this.exposeTracker.exposeTraversal();
        }
    },
    toTop: function toTop() {
        this.setData({
            toIndex: "pb-top"
        });
    },
    doubleTap: function doubleTap() {
        this.toTop();
    },
    callApp: function callApp() {},
    // ????????????
    addFlower: function addFlower() {
        var _this10 = this;
        // if (this.agreeing) {
        //     return;
        // }
        // this.agreeing = true;
                var number = this.data.thread.agree.agree_num;
        var hasAgree = this.data.thread.agree.has_agree ? 1 : 0;
        (0, _util.authPost)(_url.AGREE, {
            // ???ID
            forum_id: this.data.fid,
            // ??????ID
            thread_id: this.data.tid,
            // ?????????id
            post_id: this.data.pid,
            // ??????????????? 0????????????1???????????????
            op_type: hasAgree,
            // ???????????????1??????????????????3???????????????
            obj_type: 3,
            // ???????????????1???PERFECT???2???GOOD???3???BAD???4???SHIT
            agree_type: 2
        }, "????????????", function() {
            return _this10.addFlower();
        }).then(function() {
            var _this10$setData;
            // this.agreeing = false;
                        _this10.setData((_this10$setData = {}, _defineProperty(_this10$setData, "thread.agree.agree_num", hasAgree ? number - 1 : number + 1), 
            _defineProperty(_this10$setData, "thread.agree.agreeNum", hasAgree ? (0, _filters.numFormat)(number - 1) : (0, 
            _filters.numFormat)(number + 1)), _defineProperty(_this10$setData, "thread.agree.has_agree", hasAgree ? 0 : 1), 
            _this10$setData));
        }).catch(function() {// this.agreeing = false;
        });
        (0, _trackTieba.trackTiebaClick)({
            page: "pages/pb/pb",
            locate: "like"
        });
    },
    // ??????
    collectPost: function collectPost(e) {
        var _this11 = this;
        if (this.isLock) {
            return;
        }
        this.isLock = true;
        // 0 ???????????????1 ??????
                var status = this.data.isCollect ? 0 : 1;
        var collectPostUrl = status ? _url.ADDSTORE : _url.RMSTORE;
        var options = {
            pid: this.data.pid,
            tid: this.data.tid,
            fid: this.data.fid,
            status: status
        };
        var errMsg = status ? "????????????" : "??????????????????";
        (0, _util.authPost)(collectPostUrl, options, errMsg, function() {
            return _this11.collect(e);
        }).then(function() {
            _this11.setData({
                isCollect: !!status
            });
            wx.showToast({
                icon: "none",
                title: status ? "????????????" : "???????????????"
            });
            status && (0, _util.track)("pb_collect", {
                tid: _this11.data.tid,
                fid: _this11.data.forum.id,
                obj_source: _this11.thread.is_flash ? 2 : 1
            });
            _this11.isLock = false;
        }).catch(function() {
            _this11.isLock = false;
        });
    },
    // ????????????
    deletePb: function deletePb(e, otherOptions) {
        if (this.isLock) {
            return;
        }
        this.isLock = true;
        var fname = this.data.forum.name || this.data.forum.forumName;
        var options = {
            ntn: "bdKSW",
            tn: "baiduManagerSubmit",
            delete_my_post: 1,
            z: this.data.tid,
            fid: this.data.fid,
            word: fname,
            lp: 6076,
            pid: this.data.pid,
            sc: this.data.pid,
            lm: this.data.fid,
            is_vipdel: 0
        };
        if (otherOptions) {
            options = Object.assign(options, otherOptions);
        }
        var self = this;
        wx.showModal({
            title: "??????",
            content: "?????????????????????????????????????????????????????????",
            success: function success(res) {
                if (res.confirm) {
                    (0, _util.authPost)(_url.DEL, options, "??????????????????????????????", function() {
                        return self.delete();
                    }).then(function() {
                        wx.showToast({
                            icon: "none",
                            title: "????????????",
                            success: function success() {
                                wx._redirectTo({
                                    url: "/pages/frs/frs?kw=" + fname + "&from=pb"
                                });
                            }
                        });
                        self.isLock = false;
                    }).catch(function() {
                        self.isLock = false;
                    });
                } else {
                    self.isLock = false;
                }
            }
        });
    },
    actionSheet: function actionSheet(e) {
        if (e.detail.key === "remove") {
            this.setData({
                showDialog: true
            });
        }
    },
    hideActionSheet: function hideActionSheet() {
        this.setData({
            showActionSheet: false
        });
    },
    closeDialog: function closeDialog() {
        this.setData({
            showDialog: false
        });
    },
    callBawu: function callBawu() {
        this.setData({
            showActionSheet: true
        });
    },
    callPageJumpDialog: function callPageJumpDialog() {
        this.toggleSortModal();
        this.setData({
            isShowPageJumpDialog: true
        });
    },
    selectDeleteReason: function selectDeleteReason(e) {
        var index = e.currentTarget.dataset.index;
        this.data.antiReason[index].active = !this.data.antiReason[index].active;
        this.setData({
            antiReason: this.data.antiReason
        });
    },
    deletePbByBawu: function deletePbByBawu(e) {
        var reasonArr = [];
        this.data.antiReason.map(function(item) {
            if (item.active) {
                reasonArr.push(item.text_id);
            }
        });
        if (!reasonArr.length) {
            wx.showToast({
                icon: "none",
                title: "???????????????"
            });
            return;
        }
        var config = {
            reason: reasonArr
        };
        this.deletePb("", config);
    },
    // ?????????
    goShareApp: function goShareApp(e) {
        var link = e.currentTarget.dataset.appLink;
        var id = e.currentTarget.dataset.appId;
        (0, _util.trackNavToOtherApp)({
            app_key: id,
            location: "pb",
            tid: this.data.tid
        });
        wx.navigateToSmartProgram({
            appKey: id,
            path: link,
            extraData: {
                from: "tieba"
            },
            success: function success(res) {}
        });
    },
    toggleShare: function toggleShare() {// this.setData({
        //     foldShare: !this.data.foldShare
        // });
    },
    wxCallAppFrame: function wxCallAppFrame(e) {
        var _this12 = this;
        var type = void 0;
        if (e.detail.currentTarget) {
            type = e.detail.currentTarget.dataset.type;
        } else {
            type = e.currentTarget.dataset.type;
        }
        (0, _util.setGlobalData)("sharewho", +type === 0 ? "hy" : "pyq");
        (0, _util.post)(_url.GET_WX_SHARE_IMAGE, {
            tid: this.data.tid
        }, "", true).then(function(res) {
            _this12.setData({
                showmask: true,
                frezen: true,
                reportPIcData: res
            });
        });
        if (this.videoContext && typeof this.videoContext.pause === "function") {
            this.videoContext.pause();
        }
    },
    wxCloseFrame: function wxCloseFrame() {
        this.setData({
            showmask: false,
            frezen: false
        });
    },
    toIndexPage: function toIndexPage() {
        (0, _util.track)("back_to_index_side_ball");
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    togglemask: function togglemask() {
        this.setData({
            showmask: !this.data.showmask
        });
    },
    // ????????????????????????
    iknow: function iknow() {
        this.setData({
            showContact: false
        });
    },
    // ???????????????
    goMsg: function goMsg() {
        (0, _util.goHybridMsg)("pb");
    },
    /*
   * 2019 05 31 @pm yancheng @fe shishaokun
   * query ???????????? query > forum name > thread title > thread abstras > thread id
   */
    setQueryAndTrack: function setQueryAndTrack(data) {
        this.adsTrackOnce = false;
        (0, _util.track)("query_check", {
            from: 0,
            exist: this.query ? 1 : 0
        });
        (0, _util.track)("forum_name_check", {
            from: 0,
            exist: data.forum.name ? 1 : 0
        });
        (0, _util.track)("thread_title_check", {
            from: 0,
            exist: data.thread.title ? 1 : 0
        });
        (0, _util.track)("thread_id_check", {
            from: 0,
            exist: data.thread.id ? 1 : 0
        });
        (0, _util.track)("thread_description_check", {
            from: 0,
            exist: data.meta.description ? 1 : 0
        });
        this.query = this.query || data.forum.name || data.thread.title || data.meta.description.substr(0, 31) || data.thread.id;
        (0, _util.track)("ads_query_check", {
            from: 0,
            exist: this.query ? 1 : 0
        });
    },
    onItemClick: function onItemClick() {
        if (!this.data.isBaidu) {
            wx.myNavigateTo({
                url: "/pages/pbComments/pbComments?tid=" + this.data.tid
            });
            return;
        }
        // ????????????
                this.setData({
            replyMainFloor: !this.data.replyMainFloor
        });
    },
    goCommentBottom: function goCommentBottom() {
        var that = this;
        var query = wx.createSelectorQuery().in(this);
        query.select("#pb-top").boundingClientRect();
        query.select(".pb-container").boundingClientRect();
        query.exec(function(res) {
            if (res && res.length > 0 && res[0] && res[0].height && res[1] && res[1].height) {
                that.setData({
                    viewScrollTop: +res[0].height - res[1].height - 40
                });
            }
        });
    },
    goCommentTop: function goCommentTop() {
        var _this13 = this;
        this.needScrollToComments = false;
        this.setData({
            scrollWithAnimation: true,
            toIndex: "comments-area"
        }, function() {
            _this13.setData({
                scrollWithAnimation: false
            });
        });
    },
    goBottomPos: function goBottomPos() {
        this.setData({
            toIndex: "mock-floor"
        });
    },
    goOldPos: function goOldPos(e) {
        this.setData({
            viewScrollTop: +e.detail
        });
    },
    refresh: function refresh() {
        this.initOptions();
        wx.showLoading({
            mask: true,
            title: "?????????"
        });
        this.initOptions();
        this.loadThreads();
    },
    // ??????????????????????????????
    refreshbybtn: function refreshbybtn() {
        if (this.data.isPostDeleted) {
            if (getCurrentPages().length < 2) {
                wx.switchTab({
                    url: "/pages/index/index"
                });
            } else {
                wx.navigateBack();
            }
            return;
        }
        wx.showLoading({
            mask: true,
            title: "?????????"
        });
        this.initOptions();
        this.loadThreads();
    },
    toFrs: function toFrs(e) {
        var name = e.currentTarget.dataset.name;
        if (name) {
            (0, _util.track)("pb_frs_guide_click", {
                fid: this.data.forum.id,
                tid: this.data.tid
            });
            wx.myNavigateTo({
                url: "/pages/frs/frs?kw=" + name + "&from=pb"
            });
        }
    },
    openComment: function openComment(e) {
        var isFocus = e.currentTarget.dataset.type;
        wx.myNavigateTo({
            url: "/pages/pbComments/pbComments?tid=" + this.data.tid + "&isFocus=&" + isFocus
        });
    },
    closeAd: function closeAd() {
        this.setData({
            hideWxAd: true
        });
    },
    qqlaunchapp: function qqlaunchapp() {},
    launchAppError: function launchAppError() {
        (0, _util.track)("pb_wake_up_error", {
            fid: this.data.forum.id,
            tid: this.data.tid
        });
    },
    bannerClickListener: function bannerClickListener(e) {
        var metadata = e.currentTarget.dataset.metadata;
        var locate = e.target.dataset.locate;
        var clickType = locate === "download" ? "download" : "jump";
        this.banner && this.banner.handleBannerClickTrack(clickType, locate, metadata);
        setTimeout(function() {
            if (clickType === "download") {
                var operate = metadata.content.operate;
                (0, _util.createDownloadApp)(operate[0] && operate[0].app_store_id, operate[0] && operate[0].url);
            } else {
                var url = metadata.content.ad_common.jump_url;
                (0, _util.openAdWebPage)(url);
            }
        }, 100);
    }
})));