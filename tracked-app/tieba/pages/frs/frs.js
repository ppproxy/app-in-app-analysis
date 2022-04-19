var _adaptOnInit;

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
                                                                                                                                                                                                                                                                   * @file frs
                                                                                                                                                                                                                                                                   * @author zhangwei
                                                                                                                                                                                                                                                                   */ var _adaptOnInit2 = require("../../util/adaptOnInit");

var _util = require("../../util/util.js");

var _url = require("../../util/url");

var _trackTieba = require("../../util/trackTieba");

var _filters = require("../../util/filters.js");

var _banner = require("../../util/banner");

var _banner2 = _interopRequireDefault(_banner);

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

var onfire = require("../../util/onfire");

var init_flag = false;

Page((0, _adaptOnInit2.adaptOnInit)((_adaptOnInit = {
    data: _extends({
        IMG_CDN: _url.IMG_CDN
    }, (0, _util.getStatusHeight)(globalData.systemInfo), {
        // 页面加载状态 0：未加载；1：加载成功；-1：加载失败
        status: 0,
        // 吧信息
        forumData: null,
        // 广告需要的字符串
        adParams: "",
        // 广告分流
        isAdFromFC: false,
        // 用户信息
        userData: null,
        fid: "",
        // 贴子列表
        threadList: null,
        // 置顶贴列表
        topList: [],
        // 是否加载更多
        isLoadingMore: -1,
        // 新消息数
        msgCount: 0,
        bottomMenu: null,
        signDatas: null,
        stopPullDown: false,
        bgFilter: false,
        toastData: {
            type: 0
        },
        isToTop: true,
        showBackIcon: true,
        showToTopBtn: false,
        // frs排列方式数组
        frsSortTabData: [],
        // frs tab列表
        frsNavTabList: [],
        // tab默认是全部，id是1, 核心区是0，精华帖是4
        filterTypeId: 0,
        showPostBtn: true,
        showSortNav: true,
        platform: globalData.systemInfo.platform,
        // frs 页是否使用压缩图
        isUseThumbnail: 0,
        isBaidu: globalData.isBaidu,
        showMainCallApp: ![ "1091001510012000", "2001", "1091001510013000", "2003", "10910015" ].includes((0, 
        _util.getGlobalData)("callNAScene")),
        wakeupConfig: {},
        // 判断请求有没有回来，防止重复发
        pending: false
    }),
    // 是否有更多数据
    hasMore: true,
    pnum: 1,
    isLoading: false,
    kw: "",
    // filterComp: null,
    filterTypeId: 0,
    sortType: 0,
    jumpPageControl: false,
    tempIds: [],
    // 逻辑提取出来
    initData: function initData(option) {
        if (init_flag) {
            init_flag = false;
            return;
        }
        // console.log('frs init data');
                init_flag = true;
        var options = (0, _util.urlParamDecode)(option);
        this.options = options;
        if (this.backIndex(options)) {
            return;
        }
        this.query = options.word || options.kw;
        this.kw = options.kw || "";
        // 分配广告
                this.averageAd(options);
        options.pnum && (this.pnum = +options.pnum);
        this.scene = (0, _util.getGlobalData)("scene");
        this.from = options.from || "";
        (0, _util.setGlobalData)("scene", "");
        if (options.frstabid) {
            this.filterTypeId = options.frstabid;
            this.setData({
                filterTypeId: options.frstabid
            });
        }
        // 如果applaunch没有发请求，这里发
                if (this.prefetchStatus !== 1 && this.prefetchStatus !== 2) {
            this.refresh(true, "pageRefresh");
        }
        // 判断是否是高考阿拉丁倒流
                if (options.fr === "gaokaoala") {
            this.setData({
                isGaokaoAla: true
            });
        }
    },
    /** ~~baidu end~~ */
    onInit: function onInit(option) {
        var _this = this;
        // 消息监听
                onfire.one("frsRequestOK", function(res) {
            _this.refresh(true, "pageRefresh", res);
        });
        onfire.one("frsRequestFail", function(res) {
            _this.isLoading = false;
            _this.handError(res, "pageRefresh");
            _this.data.pending = false;
        });
        this.initData(option);
        var pages = getCurrentPages();
        if (pages.length < 2) {
            this.setData({
                showBackIcon: false
            });
        }
        // 设置导航栏 icon 颜色
                wx.setNavigationBarColor({
            // 前景颜色值，必填参数
            frontColor: "#ffffff",
            // 背景颜色值，必填参数
            backgroundColor: "#ffffff"
        });
    },
    onReady: function onReady() {
        this.setData({
            canWakeUp: !(0, _util.getGlobalData)("forbidWakeUp")
        });
        (0, _util.subscribeMsg)(this, "msgCount");
    },
    onShow: function onShow() {
        init_flag = false;
        // if (!this.jumpPageControl) {
                var app = (0, _util.getGlobalData)();
        (0, _util.getGroupMsg)();
        var at_me = app.at_me;
        var reply_me = app.reply_me;
        var agree_me = app.agree_me;
        var msgCount = at_me + reply_me + agree_me;
        if (msgCount > 0) {
            this.setData({
                msgCount: msgCount
            });
        }
        this.meta && wx.setPageInfo && wx.setPageInfo(this.meta);
        this.enterTime = new Date().getTime();
        (0, _util.track)("frs_baoguang", {
            eshow: 1,
            fr: this.options.fr,
            source_type: this.options.source_type,
            source_locate: this.options.source_locate
        });
        // }
        },
    onHide: function onHide() {
        this.trackDuration();
    },
    share: function share() {
        (0, _trackTieba.trackTiebaClick)({
            page: "pages/frs/frs",
            locate: "share"
        });
    },
    onShareAppMessage: function onShareAppMessage(res) {
        var forumName = this.data.forumData ? this.data.forumData.name : "";
        var self = this;
        var dataset = res.target.dataset.item;
        var tid = dataset.tid, abstract = dataset.abstract, shareImg = dataset.shareImg;
        if (res && res.from === "button") {
            var sharePbData = {
                title: forumName ? forumName + "吧——百度贴吧" : "百度贴吧",
                path: "/pages/pb/pb?tid=" + tid
            };
            /** ~~weixin only begin~~ */            if (shareImg) {
                sharePbData.imageUrl = shareImg;
            } else {
                (0, _util.get)(_url.GET_SHARE_IMG, {
                    type: 3,
                    tid: tid
                }).then(function() {});
            }
            /** ~~weixin only end~~ */            return sharePbData;
        }
        var shareFrsData = {
            title: forumName ? forumName + "吧——百度贴吧" : "百度贴吧",
            path: "/pages/frs/frs?kw=" + forumName
        };
        /** ~~weixin only begin~~ */        if (this.data.forumData.shareImg) {
            shareFrsData.imageUrl = this.data.forumData.shareImg;
        } else {
            (0, _util.get)(_url.GET_SHARE_IMG, {
                type: 2,
                tid: tid,
                fid: self.data.forumData.id
            }).then(function() {});
        }
        /** ~~weixin only end~~ */        return shareFrsData;
    },
    trackDuration: function trackDuration() {
        var duration = new Date().getTime() - this.enterTime;
        (0, _util.track)("duration", {
            duration: duration,
            uid: this.data.userData.id
        });
    },
    backSearchRes: function backSearchRes(options) {
        this.jumpPageControl = false;
        getApp().globalData.notRenderSearchResControl = false;
        if (options.word) {
            this.jumpPageControl = true;
            getApp().globalData.notRenderSearchResControl = true;
            var param = (0, _util.urlParamToStr)(options, [], {
                isBack: true,
                from: "frs"
            });
            wx._redirectTo({
                url: "/pages/searchres/searchres?" + param
            });
            return true;
        }
        return false;
    },
    averageAd: function averageAd(options) {
        this.data.isAdFromFC = Math.random() > 1;
        // this.setData({
        //     isAdFromFC: this.data.isAdFromFC
        // });
        // 获取请求参数
        // 2019.5.31 增加query权重覆盖 query > forum_name
                (0, _util.track)("query_check", {
            from: 1,
            exist: options.word ? 1 : 0
        });
        (0, _util.track)("ads_query_check", {
            from: 1,
            exist: options.word || options.kw ? 1 : 0
        });
    },
    backIndex: function backIndex(options) {
        if (!options.kw) {
            wx.switchTab({
                url: "/pages/index/index"
            });
            return true;
        }
        return false;
    },
    /**
   * 一个空函数 用来给catch阻止touchstart冒泡用的 兼容手百bug
   */
    empty: function empty() {},
    /**
   * 请求参数收集
   */
    requestParams: function requestParams(refreshType) {
        if (refreshType === "pull" || refreshType === "listRefresh") {
            this.pnum = 1;
        }
        // 页面刷新的时候初始化
                if (refreshType === "pageRefresh") {
            this.pnum = 1;
            this.data.isLoadingMore = -1;
            this.data.threadList = null;
            this.data.forumData = null;
        }
        var param = {
            kw: this.kw,
            pnum: this.pnum,
            sort_type: this.sortType,
            res_num: 20,
            default_pro: 1
        };
        if (+this.filterTypeId !== 0 && this.data.canWakeUp) {
            this.data.threadList = null;
            param.default_pro = 0;
        }
        if (+this.filterTypeId === 4) {
            param.lm = 4;
        }
        if (this.pnum === 1) {
            param.obj_source = this.from;
            param.open_source = this.scene;
            this.from = "";
            this.scene = "";
            this.hasMore = true;
            this.isLoading = false;
        }
        return param;
    },
    /**
   * 加载数据
   *
   * @param  {Function}  success   成功回调
   * @param  {Function}  fail      失败回调
   * @param  {boolean} showLoading 是否显示loading
   */
    loadData: function loadData(param, showLoading) {
        var _this2 = this;
        var appreqData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var prom = new Promise(function(resolve, reject) {
            if (_this2.data.pending == true) {
                return;
            }
            _this2.data.pending = true;
            var self = _this2;
            _this2.isFetchDataComplete = false;
            // 如果已经从app发请求了，直接拿数据
                        if (_this2.prefetchStatus === 1 && appreqData && appreqData.page && appreqData.frs_data) {
                self.data.pending = false;
                var frsData = appreqData.frs_data || {};
                var meta = appreqData.meta;
                if (meta) {
                    var forumName = frsData.forum.name;
                    meta.title = forumName ? forumName + "吧——百度贴吧" : "百度贴吧";
                    meta.image = meta.image || _util.metaImage;
                    self.meta = meta;
                    wx.setPageInfo && wx.setPageInfo(meta);
                }
                if (appreqData.tokens) {
                    var callAppToken = appreqData.tokens.frs_goodtab_cut;
                    (0, _util.setGlobalData)("callAppToken", callAppToken);
                }
                _this2.prefetchStatus = 2;
                resolve(appreqData);
            } else {
                (0, _util.get)(_url.FRS, param, "", showLoading).then(function(res) {
                    self.removeSkeleton && self.removeSkeleton();
                    _this2.data.pending = false;
                    var frsData = res.frs_data || {};
                    var meta = res.meta;
                    if (meta) {
                        var _forumName = frsData.forum.name;
                        meta.title = _forumName ? _forumName + "吧——百度贴吧" : "百度贴吧";
                        meta.image = meta.image || _util.metaImage;
                        self.meta = meta;
                        wx.setPageInfo && wx.setPageInfo(meta);
                    }
                    if (res.tokens) {
                        var _callAppToken = res.tokens.frs_goodtab_cut;
                        (0, _util.setGlobalData)("callAppToken", _callAppToken);
                    }
                    _this2.prefetchStatus = 2;
                    resolve(res);
                }).catch(function(res) {
                    _this2.setData({
                        err_code: res.errCode || ""
                    });
                    _this2.data.pending = false;
                    // 出错的时候，2001是吧不存在的错误码
                                        reject(res);
                    if (res && res.no == "2002") {
                        _this2.setData({
                            noFrsLite: 1
                        });
                    }
                });
            }
        });
        return prom;
    },
    /**
   * 刷新
   * 下拉刷新，触底刷新，（全部精华）切换 排序
   * @param  {boolean} showLoading 是否显示loading
   */
    refresh: function refresh() {
        var showLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var _this3 = this;
        var refreshType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "pageRefresh";
        var appreqData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        if (refreshType === "onBottom") {
            // 如果是手百，并且是精华帖禁止加载更多
            if (this.data.isBaidu && +this.data.filterTypeId === 4 && this.data.canWakeUp) {
                return;
            }
            // 无更多数据就不再请求了 否则server会一直返回最后一页的数据
                        if (!this.hasMore || this.data.status !== 1) {
                this.setData({
                    isLoadingMore: 0
                });
                return;
            }
            this.setData({
                isLoadingMore: 1
            });
        }
        if (this.isLoading) {
            return;
        }
        this.isLoading = true;
        var param = this.requestParams(refreshType);
        if (refreshType === "pageRefresh") {
            param.openFailPage = true;
            this.data.threadList = [];
        }
        // 下拉时清空
                if (refreshType === "pull") {
            this.data.threadList = [];
        }
        this.loadData(param, showLoading, appreqData).then(function(res) {
            _this3.setData({
                isUseThumbnail: (0, _util.getGlobalData)("isUseThumbnail"),
                isBroken: false
            });
            var frsData = res.frs_data || {};
            var forumData = frsData.forum || {};
            var page = res.page || {};
            _this3.isLoading = false;
            _this3.adFloor = res.ad_floor || [];
            _this3.kw = forumData.name;
            // 格式化贴子列表数据
                        switch (refreshType) {
              case "pageRefresh":
                // 只有页面刷新的时候才会进行一些签到吧名等一些数据的跟新
                _this3.handlePageRefresh(res);
                break;

              case "pull":
                _this3.setData({
                    stopPullDown: !_this3.data.stopPullDown
                });
                break;

              case "listRefresh":
                // 切换tab时，先回到顶上，再更新数据
                _this3.setData({
                    isToTop: !_this3.data.isToTop
                });
            }
            // 处理所有的帖子card信息
                        _this3.threadFormat(frsData.thread_list, refreshType);
            if (page.pnum >= page.total_page) {
                _this3.hasMore = false;
                _this3.setData({
                    isLoadingMore: 0
                });
            }
            // 如果还有更多数据 增加页码
                        if (frsData.thread_list && !frsData.thread_list.length) {
                _this3.setData({
                    isLoadingMore: -1
                });
            }
            if (_this3.hasMore && page.pnum === _this3.pnum) {
                _this3.pnum = _this3.pnum + 1;
            }
        }, function(res) {
            _this3.isLoading = false;
            _this3.handError(res, refreshType);
        });
    },
    handlePageRefresh: function handlePageRefresh(res) {
        var frsData = res.frs_data || {};
        var forumData = frsData.forum || {};
        var frsSortTabData = res.nav_tab_info || [];
        var frsNavTabList = res.nav_tab_list || [];
        var adParams = JSON.stringify({
            qe: this.query,
            ext: JSON.stringify([ {
                k: "forum_name",
                v: this.kw || ""
            }, {
                k: "forum_dir",
                v: forumData.first_class || ""
            }, {
                k: "forum_second_dir",
                v: forumData.second_class || ""
            } ]),
            transformid: "pullCompContent"
        });
        // 测试数据
                if (this.data.isAdFromFC) {
            // 凤巢广告
            adParams = JSON.stringify({
                qw: this.query,
                tiebaname: this.kw,
                transformid: "pullCompContent"
            });
        }
        // current_tab_id值的不是id，是索引的意思。。md
                var filterTypeId = frsNavTabList[res.current_tab_id].tab_id;
        (0, _util.setGlobalData)("user_id", res.user.id);
        this.setData({
            wakeupConfig: {
                page: "frs",
                param: {
                    kw: this.kw,
                    fid: forumData.id,
                    obj_source: "shoubai",
                    obj_type: "frs",
                    locate: "frselite_bd",
                    track: "frselite_bd"
                },
                androidSource: "1025493s"
            },
            floatConfig: {
                page: "frs",
                param: {
                    kw: this.kw,
                    fid: forumData.id,
                    obj_source: "shoubai",
                    obj_type: "frs",
                    locate: "frsbtn_sb",
                    track: "frsbtn_sb"
                },
                androidSource: "1024508z"
            },
            noFrsLite: 0,
            status: 1,
            signDatas: this.signFormat(forumData),
            forumData: this.forumFormat(forumData),
            userData: res.user,
            bottomMenu: res.bottom_menu,
            frsSortTabData: frsSortTabData,
            frsNavTabList: frsNavTabList,
            filterTypeId: filterTypeId,
            adParams: adParams
        });
        this.removeSkeleton && this.removeSkeleton();
        // 上面这块渲染出来吧头
        // 初始化广告曝光逻辑
                var viewportHeight = (0, _util.getViewportHeight)();
        var os = (0, _util.getSystemTypeInfo)();
        this.banner = new _banner2.default({
            productId: 2
        }, {
            ct: 2,
            ot: os.type === "ios" ? 1 : 2,
            ver: os.version,
            viewportHeight: viewportHeight,
            ad: {
                da_type: "",
                da_page: "frs",
                da_page_num: 1,
                da_locate: 2,
                origin_time: Date.now()
            }
        });
        // 第一次访问 记录历史
                if (forumData.name) {
            (0, _util.setFrsHistory)({
                forum: forumData.name,
                avatar: forumData.avatar,
                fid: forumData.id,
                memberNum: this.data.forumData.member_num,
                slogen: forumData.slogan
            });
        }
    },
    handleBefore2017: function handleBefore2017(res) {
        var datas = res.data;
        var frsData = datas.frs_data;
        this.setData({
            status: 1,
            signDatas: frsData.forum,
            forumData: this.forumFormat(frsData.forum),
            userData: frsData.user,
            frsSortTabData: datas.nav_tab_info,
            frsNavTabList: datas.nav_tab_list,
            filterTypeId: datas.nav_tab_list[datas.current_tab_id].tab_id,
            threadList: [],
            // topList: [],
            isLoadingMore: -1,
            // showPostBtn: false,
            showSortNav: false
        });
        wx.showToast({
            icon: "none",
            title: "本吧数据维护中，暂无法访问"
        });
    },
    handError: function handError(data, refreshType) {
        switch (refreshType) {
          case "onBottom":
            if (+data.no === 2005) {
                var page = data.page || {};
                if (page.pnum === this.pnum) {
                    // 如果还有下一页的话 请求下一页
                    if ((!this.noThread || this.noThread < 1) && this.hasMore) {
                        this.pnum = this.pnum + 1;
                        this.scrolltolower();
                        this.noThread = 1;
                    } else {
                        // 如果连续两页都是2005 直接停止翻页
                        this.hasMore = false;
                        this.noThread = 0;
                    }
                }
                wx.showToast({
                    icon: "none",
                    title: "本吧没有更多帖子，请稍候再试 code:2005"
                });
            } else if (+data.no === 2002) {
                this.setData({
                    isLoadingMore: 0,
                    noFrsLite: 1
                });
                return;
            } else {
                wx.showToast({
                    icon: "none",
                    title: data.error || "网络出错了..."
                });
            }
            this.setData({
                isLoadingMore: 0
            });

          case "pull":
            this.setData({
                stopPullDown: !this.data.stopPullDown
            });

          case "pageRefresh":
            if (data.no === 3001) {
                this.handleBefore2017(data);
            } else {
                this.setData({
                    status: -2
                });
            }
            return;

          case "listRefresh":
            if (data.no === 3001) {
                this.handleBefore2017(data);
                return;
            }
        }
        if (this.data.status === 0) {
            this.setData({
                status: -1
            });
        }
    },
    /**
  * 签到信息去掉不必要的字段，目前看就用到了下面几个，其他无关的都去掉
  *  forumData.is_like
  forumData.sign_in_info
  forumData.cur_score
  forumData.levelup_score,
  forumData.level_id
  forumData.id,
  forumData.name,
  * @param  {Object} data 接口返回原始吧信息
  * @return {Object}      签到需要的信息
  */
    signFormat: function signFormat(data) {
        return {
            is_like: data.is_like || 0,
            sign_in_info: {
                user_info: data.sign_in_info.user_info || {}
            } || {},
            cur_score: data.cur_score || 0,
            levelup_score: data.levelup_score || 0,
            level_id: data.level_id || 0,
            id: data.id || 0,
            name: data.name || ""
        };
    },
    /**
   * 吧信息格式化
   *
   * @param  {Object} data 接口返回原始吧信息
   * @return {Object}      吧信息
   */
    forumFormat: function forumFormat(data) {
        // 关注数
        var memberNum = (0, _filters.numFormat)(+data.member_num);
        // 贴子数
                var postNum = (0, _filters.numFormat)(+data.post_num);
        // theme
                var theme = data.theme_color.day;
        return {
            theme: theme,
            id: data.id,
            avatar: data.avatar,
            name: data.name,
            member_num: memberNum,
            post_num: postNum,
            shareImg: data.swan_f_share_image,
            appList: (data.smart_app_list || []).slice(0, 4)
        };
    },
    /**
   * 格式化贴子列表
   *
   * @param  {Object} data 接口返回的原始信息
   * @param  {string} type 操作类型 refresh：刷新
   */
    threadFormat: function threadFormat(data, type) {
        var _this4 = this;
        var self = this;
        data = data || [];
        var threadList = [];
        var topList = [];
        var addList = [];
        if (type === "onBottom") {
            threadList = this.data.threadList;
            var len = this.tempIds.length || 0;
            if (len > 50) {
                this.tempIds = this.tempIds.slice(len - 50);
            }
        } else {
            this.tempIds = [];
        }
        data.map(function(item, index) {
            // 置顶帖
            if (item.is_notice || item.is_top) {
                type === "pageRefresh" && topList.push(_this4.topThreadFormat(item));
            } else {
                /** ~~weixin only begin~~ */
                // 如果是首次加载，有置顶帖，广告位插入要先把置顶贴楼层数减去，如果是非首次加载，没有置顶帖，置顶楼层为0
                var topListLen = type === "pageRefresh" ? topList.length : 0;
                if (self.adFloor.includes(index - topListLen)) {
                    addList.push({
                        isAd: true
                    });
                }
                /** ~~weixin only end~~ */
                // 去重
                                if (!self.tempIds.includes(item.tid)) {
                    self.tempIds.push(item.tid);
                    addList.push(_this4.threadDataFormat(item));
                }
            }
        });
        this.isFetchDataComplete = true;
        this.allThreadListCached = this.data.threadList;
        // 存储已经渲染的数据
                this.threadListCached = addList;
        // 存储上次请求数据
                var frontList = (0, _util.fastConcat)(threadList || [], addList.slice(0, 3), "threadList");
        var endList = (0, _util.fastConcat)(threadList || [], addList, "threadList");
        // 这里分两次渲染，不要一次渲染，影响效率，先渲染前3个，然后渲染整体的
                this.setData(_extends({
            topList: topList.length ? topList : self.data.topList
        }, frontList), function() {
            _this4.setData(_extends({}, endList));
        });
    },
    /**
   * 字典转义
   *
   * @param  {string} key key
   * @return {string}     转义值
   */
    getTextIcon: function getTextIcon(key) {
        var dict = {
            jing: "精",
            zhaomu: "召集",
            zhibo: "直播",
            huati: "话题",
            huodong: "活动",
            gonggao: "公告",
            zhiding: "置顶",
            zhuantie: "转贴",
            yuyin: "&nbsp;",
            meizhi_on: "&nbsp;",
            meizhi_off: "&nbsp;",
            picact: "晒图活动",
            lotteryact: "抽奖活动",
            klose_top: "一呼百应",
            game_appcode: "礼包发放",
            headline: "头条"
        };
        return dict[key];
    },
    /**
   * 格式化置顶贴
   *
   * @param  {Object} data 接口返回的原始信息
   * @return {Object}      置顶贴信息
   */
    topThreadFormat: function topThreadFormat(data) {
        var text = "";
        if (data.is_klose_top) {
            text = this.getTextIcon("klose_top");
        } else if (data.is_notice) {
            text = this.getTextIcon("gonggao");
        } else if (data.game_appcode) {
            text = this.getTextIcon("game_appcode");
        } else {
            text = this.getTextIcon("zhiding");
        }
        return {
            title: data.title,
            topType: text,
            tid: data.tid,
            titleLink: data.title_link
        };
    },
    godContentFormat: function godContentFormat(content, tid) {
        if (!content) {
            return;
        }
        var text = "";
        var pics = [];
        var voice = [];
        var picsLen = 0;
        content.forEach(function(element) {
            element.tid = tid;
            if ((element.type === 0 || element.type === 1 || element.type === 4) && element.text !== "<br/>") {
                text += element.text;
            }
            if (element.type == 3 || element.type == 20) {
                picsLen += 1;
                if (pics.length < 5) {
                    pics.push(element);
                }
            }
            if (element.type === 10) {
                voice.push(element);
            }
        });
        return {
            picsLen: picsLen,
            text: text,
            pics: pics,
            voice: voice
        };
    },
    /**
   * 格式化贴子内容
   *
   * @param  {Object} data 接口返回原始数据
   * @return {Object}      贴子内容数据
   */
    threadDataFormat: function threadDataFormat(data) {
        var _ref;
        var self = this;
        var userInfo = this.userInfoFormat(data);
        var imageMedia = [];
        var videoMedia = [];
        var isTopGad = false;
        var allPicLens = 0;
        var gadUserName = void 0;
        var gadContent = void 0;
        var gadAgree = void 0;
        var gadPortrait = void 0;
        if (data.top_agree_post && data.top_agree_post.tid) {
            isTopGad = true;
            gadUserName = data.top_agree_post.user_nickname || data.top_agree_post.username;
            gadAgree = data.top_agree_post.agree.agree_num;
            gadContent = this.godContentFormat(data.top_agree_post.content, data.top_agree_post.tid);
            gadPortrait = _util.GEN_PORTRAIT + data.top_agree_post.portrait;
        }
        if (data.media) {
            // 图片的最大宽度为  （屏幕总宽度-左右padding宽-2* 间隙）/ 3*2+间隙
            allPicLens = data.media.length;
            for (var i = 0, len = Math.min(data.media.length, 3); i < len; i++) {
                if (data.media.length === 1) {
                    // 单图
                    var picInfo = (0, _util.getSinglePicWH)(data.media[i].width, data.media[i].height);
                    data.media[i].isGif = data.media[i].is_gif;
                    data.media[i].width = picInfo.resultW;
                    data.media[i].height = picInfo.resultH;
                    data.media[i].isSuper = picInfo.picType === "superH" || picInfo.picType === "superW";
                } else if (data.media.length > 1) {
                    data.media[i].isGif = data.media[i].is_gif;
                }
                var mediaData = data.media[i];
                // 图片 图片和视频只显示一组
                                if (mediaData.type === "pic" && !videoMedia.length) {
                    imageMedia.push(mediaData);
                } else if (mediaData.type === "flash" && !imageMedia.length) {
                    // 视频 图片和视频只显示一组
                    if (data.video_info) {
                        mediaData.videoInfo = {
                            data: {
                                duration: (0, _filters.playDuration)(+data.video_info.video_duration || 0),
                                play_count: (0, _filters.numFormat)(+data.video_info.play_count || 0)
                            },
                            thumbnail_url: data.video_info.thumbnail_url,
                            vpic: data.video_info.thumbnail_url,
                            source: data.video_info.video_url,
                            tid: data.tid,
                            isVertical: data.video_info.video_height > data.video_info.video_width
                        };
                    }
                    videoMedia.push(mediaData);
                }
            }
        }
        // 点赞
                var agree = _extends({}, data.agree, {
            formatAgree: data.agree ? (0, _filters.numFormat)(+data.agree.agree_num) : 0,
            agreeNum: data.agree ? +data.agree.agree_num : 0
        });
        // 评论
                var replyNum = (0, _filters.numFormat)(+data.reply_num);
        // 转发
                var shareNum = data.share_num ? (0, _filters.numFormat)(+data.share_num) : 0;
        var voiceInfo = [];
        // 语音
                if (data.thread_type + "" === "11" && data.voice_info.length > 0) {
            data.voice_info.map(function(item) {
                voiceInfo.push({
                    voice_md5: item.voice_md5,
                    during_time: item.during_time,
                    during_format: item.during_time
                });
            });
        }
        var thirdAppInfo = {};
        if (data.third_app_info && data.third_app_info.app_id) {
            thirdAppInfo = data.third_app_info;
        }
        var isPan = /.*((https|http):\/\/pan\.baidu\.com\/[a-zA-Z0-9\/#=%_\?]+)/.exec(data.abstract);
        var abstractArr = [];
        if (isPan) {
            var match = isPan && isPan[1];
            var matchStart = data.abstract.indexOf(match);
            var matchEnd = matchStart + match.length;
            abstractArr = [ data.abstract.slice(0, matchStart), {
                isLink: true,
                match: match
            }, data.abstract.slice(matchEnd) ];
        } else {
            abstractArr.push(data.abstract);
        }
        return _ref = {
            abstract: data.abstract,
            abstractArr: abstractArr,
            agree: data.agree,
            id: data.id,
            tid: data.tid,
            noTitle: !!data.is_ntitle,
            title: data.title,
            content: data.content,
            imageMedia: imageMedia,
            allPicLens: allPicLens,
            videoMedia: videoMedia,
            userInfo: userInfo
        }, _defineProperty(_ref, "agree", agree), _defineProperty(_ref, "isTopGad", isTopGad), 
        _defineProperty(_ref, "gadContent", gadContent), _defineProperty(_ref, "gadUserName", gadUserName), 
        _defineProperty(_ref, "gadPortrait", gadPortrait), _defineProperty(_ref, "gadAgree", gadAgree), 
        _defineProperty(_ref, "replyNum", replyNum), _defineProperty(_ref, "shareNum", shareNum), 
        _defineProperty(_ref, "voiceInfo", voiceInfo), _defineProperty(_ref, "thirdAppInfo", thirdAppInfo), 
        _defineProperty(_ref, "shareImg", data.swan_t_share_image || ""), _defineProperty(_ref, "statisticParam", JSON.stringify({
            tid: data.tid,
            fid: self.data.forumData.id,
            obj_source: videoMedia[0] ? 2 : 1
        })), _ref;
    },
    /**
   * 赞
   */
    addFlower: function addFlower(e) {
        var self = this;
        var index = e.currentTarget.dataset.index;
        var datas = e.currentTarget.dataset.item;
        var tid = e.currentTarget.dataset.tid;
        var hasAgree = datas.agree.has_agree;
        var type = 3;
        var fid = this.data.forumData.id;
        // if (this.isAddFlowering) {
        //     return;
        // }
                self.isAddFlowering = true;
        (0, _util.authPost)(_url.AGREE, {
            forum_id: fid,
            thread_id: tid,
            post_id: 0,
            // 操作类型， 0：点赞，1：取消点赞
            op_type: +hasAgree,
            // 点赞对象，1：回复点赞，3：主题点赞
            obj_type: type,
            // 点赞类型，1：PERFECT，2：GOOD，3：BAD，4：SHIT
            agree_type: 2
        }, "点赞失败", function() {
            self.addFlower(e);
        }).then(function() {
            var targetItem = self.data.threadList[index].agree;
            if (+type === 3) {
                (0, _util.renderAgree)(targetItem, "threadList[" + index + "].agree");
            }
            self.isAddFlowering = false;
        }).catch(function() {
            self.isAddFlowering = false;
        });
        (0, _trackTieba.trackTiebaClick)({
            page: "pages/frs/frs",
            locate: "like"
        });
    },
    /**
   * 格式化用户信息
   *
   * @param  {Object} data 接口返回的原始数据
   * @return {Object}      用户信息
   */
    userInfoFormat: function userInfoFormat(data) {
        var portrait = "https://tb5.bdstatic.com/xcx/icon_mine_wechat.png";
        // 默认头像地址
                var userName = "";
        if (data && data.author) {
            portrait = "https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/" + data.author.portrait;
            userName = data.author.show_nickname || data.author.name_show || "";
        } else if (data && data.user) {
            portrait = "https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/" + data.user.portrait;
            userName = data.user.nick ? data.user.nick : "";
        }
        var time = (0, _filters.postTime)(data.last_time_int);
        // 位置
                var location = data.location && data.location.name;
        var portraitId = data.author.portrait || "";
        if (portraitId) {
            portraitId = data.author.portrait.substring(0, data.author.portrait.indexOf("?t=") > -1 ? data.author.portrait.indexOf("?t=") : 999);
        }
        return {
            portraitId: portraitId,
            portrait: portrait,
            userName: userName,
            time: time,
            location: location
        };
    },
    /**
   * 点击卡片跳转pb或h5
   *
   * @param  {Object} e event
   */
    clickThread: function clickThread(e) {
        var link = e.currentTarget.dataset.link || e.detail.currentTarget && e.detail.currentTarget.dataset.link;
        var tid = e.currentTarget.dataset.tid || e.detail.currentTarget && e.detail.currentTarget.dataset.tid;
        var isvideo = e.currentTarget.dataset.isvideo || e.detail.currentTarget && e.detail.currentTarget.dataset.isvideo;
        var isvertival = e.currentTarget.dataset.isvertival || e.detail.currentTarget && e.detail.currentTarget.dataset.isvertival;
        var clickTarget = e.currentTarget.dataset.clickTarget || e.detail.currentTarget && e.detail.currentTarget.dataset.clickTarget;
        var url = "";
        if (isvideo && isvertival && (0, _util.getGlobalData)("isSupportVideo")) {
            wx.myNavigateTo({
                url: "/pages/videopb/videopb?tid=" + tid
            });
            return;
        }
        // 跳转pb
                if (tid) {
            url = "/pages/pb/pb?tid=" + tid + "&from=frs" + "&fid=" + this.data.forumData.id;
            if (clickTarget) {
                url += "&clicktarget=" + clickTarget;
            }
        } else if (link) {
            // 置顶贴有titleLink的跳h5
            url = "/pages/webview/webview?url=" + link;
        }
        wx.myNavigateTo({
            url: url
        });
    },
    onItemClick: function onItemClick(e) {
        this.clickThread(e);
    }
}, _defineProperty(_adaptOnInit, "onHide", function onHide() {
    var audioContext = (0, _util.getGlobalData)("curAudioCtx");
    if (audioContext) {
        audioContext.stop();
    }
}), _defineProperty(_adaptOnInit, "onUnload", function onUnload() {
    this.onHide();
}), _defineProperty(_adaptOnInit, "goShareApp", function goShareApp(e) {
    var link = String(e.currentTarget.dataset.thirdAppLink);
    var id = String(e.currentTarget.dataset.appId);
    wx.navigateToSmartProgram({
        appKey: id,
        path: link,
        extraData: {
            from: "tieba"
        },
        success: function success(res) {}
    });
}), _defineProperty(_adaptOnInit, "goSmallapp", function goSmallapp(e) {
    var _e$currentTarget$data = e.currentTarget.dataset, key = _e$currentTarget$data.key, path = _e$currentTarget$data.path;
    wx.navigateToSmartProgram({
        appKey: key,
        path: path,
        extraData: {
            from: "tieba"
        },
        success: function success(res) {}
    });
}), _defineProperty(_adaptOnInit, "goMoreSmallapp", function goMoreSmallapp() {
    wx.myNavigateTo({
        url: "/pages/applist/applist?fid=" + this.data.forumData.id
    });
}), _defineProperty(_adaptOnInit, "goMsg", function goMsg(e) {
    (0, _util.goHybridMsg)("frs");
}), _defineProperty(_adaptOnInit, "pull", function pull(e) {
    this.setData({
        isLoadingMore: 1
    });
    this.refresh(false, "pull");
}), _defineProperty(_adaptOnInit, "scrolltolower", function scrolltolower() {
    if (this.data.isLoadingMore === 0) {
        return;
    }
    // 无更多数据就不再请求了 否则server会一直返回最后一页的数据
        this.refresh(false, "onBottom");
}), _defineProperty(_adaptOnInit, "changeTab", function changeTab(e) {
    this.setData({
        threadList: [],
        filterTypeId: +e.detail,
        isLoadingMore: -1
    });
    this.filterTypeId = e.detail;
    this.refresh(true, "listRefresh");
}), _defineProperty(_adaptOnInit, "selectchange", function selectchange(e) {
    this.sortType = e.detail.sort_type;
    this.refresh(true, "listRefresh");
}), _defineProperty(_adaptOnInit, "signAfterLogin", function signAfterLogin() {
    this.refresh(false, "pageRefresh");
}), _defineProperty(_adaptOnInit, "changeToastData", function changeToastData(e) {
    this.setData({
        toastData: e.detail
    });
}), _defineProperty(_adaptOnInit, "showPost", function showPost(e) {
    this.setData({
        bgFilter: e.detail.isShowSelectPic
    });
    (0, _trackTieba.trackTiebaClick)({
        page: "pages/frs/frs",
        locate: "post"
    });
}), _defineProperty(_adaptOnInit, "toTop", function toTop() {
    this.setData({
        isToTop: !this.data.isToTop
    });
}), _defineProperty(_adaptOnInit, "doubleTap", function doubleTap() {
    this.toTop();
}), _defineProperty(_adaptOnInit, "pageScroll", function pageScroll(e) {
    var _this5 = this;
    var self = this;
    if (!this.throttle) {
        this.throttle = (0, _util.throttle)(function(e) {
            var show = false;
            if (+e.detail.scrollTop > getApp().globalData.systemInfo.windowHeight) {
                show = true;
            }
            self.setData({
                showToTopBtn: show
            });
            // banner 曝光
                        _this5.banner && _this5.banner.traversal && _this5.banner.traversal();
            if (+e.detail.scrollTop > +e.detail.scrollHeight - 3e3) {
                // 距离底部3000的时候就加载下一页
                self.scrolltolower();
            }
        }, 200);
    } else {
        this.throttle(e);
    }
}), _defineProperty(_adaptOnInit, "goVideoMidPage", function goVideoMidPage(e) {
    var _e$currentTarget$data2 = e.currentTarget.dataset, tid = _e$currentTarget$data2.tid, isvideo = _e$currentTarget$data2.isvideo, isvertival = _e$currentTarget$data2.isvertival;
    if (isvideo) {
        // 视频
        if (isvertival && (0, _util.getGlobalData)("isSupportVideo")) {
            wx.myNavigateTo({
                url: "/pages/videopb/videopb?tid=" + tid
            });
        } else {
            wx.myNavigateTo({
                url: "/pages/videoMidPage/videoMidPage?tid=" + tid
            });
        }
    }
}), _defineProperty(_adaptOnInit, "bannerClickHandler", function bannerClickHandler(e) {
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
}), _defineProperty(_adaptOnInit, "errBtnclick", function errBtnclick() {
    if (this.data.noFrsLite) {
        this.changeTab({
            detail: 1
        });
        this.setData({
            status: 1
        });
    } else {
        this.refresh();
    }
}), _defineProperty(_adaptOnInit, "closewxad", function closewxad(e) {
    var index = e.currentTarget.dataset.index;
    this.setData(_defineProperty({}, "threadList[" + index + "].closead", true));
}), _adaptOnInit)));