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
                                                                                                                                                                                                                                                                   * @file index
                                                                                                                                                                                                                                                                   */ var _adaptOnInit = require("../../util/adaptOnInit");

var _util = require("../../util/util.js");

var _url = require("../../util/url.js");

var _trackTieba = require("../../util/trackTieba");

var _formatIndexData = require("./formatIndexData");

Page((0, _adaptOnInit.adaptOnInit)({
    isBaidu: (0, _util.getGlobalData)("isBaidu"),
    isFirstLoad: 1,
    nothing: false,
    isLoading: false,
    // 统计小程序入口
    scene: "",
    // 统计页面来源
    from: "",
    // 统计端类型
    clientType: "",
    // 统计版本号
    clientVersion: "",
    // 统计网络状态
    netType: "",
    // 统计abtest
    abtest_tag: "",
    data: _extends({
        IMG_CDN: _url.IMG_CDN
    }, (0, _util.getStatusHeight)(getApp().globalData.systemInfo), {
        // showfirstloginpic: false,
        threads: [],
        // 更新了XXX条信息标识
        hasNewInfos: false,
        newInfoNum: 0,
        // 微信的菜单栏
        naviDatas: [],
        stopPullDown: true,
        isToTop: true,
        showToTopBtn: false,
        msgCount: 0,
        token: "",
        homepageWakeupConfig: {
            page: "homepage",
            param: {
                obj_source: "shoubai",
                obj_type: "index",
                locate: "indexbtn_sb",
                track: "indexbtn_sb"
            },
            androidSource: "1025493a"
        }
    }),
    onInit: function onInit(option) {
        // console.log('page init');
        wx.showLoading({
            mask: true,
            title: "加载中"
        });
        var options = (0, _util.urlParamDecode)(option);
        // 统计参数server需要
                this.scene = (0, _util.getGlobalData)("scene") || "";
        this.from = options.from || "";
        var systemInfo = (0, _util.getGlobalData)("systemInfo") || wx.getStorageSync("systemInfo");
        this.clientType = (0, _util.getClientType)(systemInfo.system);
        this.clientVersion = systemInfo.version;
        // 统计参数，使用后置空
                (0, _util.setGlobalData)("scene", "");
        this.getThreadData("append", true, 5);
    },
    onShow: function onShow() {
        (0, _util.updatePoint)();
        var readTids = (0, _util.getGlobalData)("readTids");
        if (this.data.threads.length > 0) {
            this.data.threads.forEach(function(thread) {
                if (readTids[thread.tid]) {
                    thread.isRead = true;
                }
            });
        }
        this.setData({
            canWakeUp: !(0, _util.getGlobalData)("forbidWakeUp"),
            threads: this.data.threads
        });
        this.meta && wx.setPageInfo && wx.setPageInfo(this.meta);
        this.enterTime = new Date().getTime();
        (0, _trackTieba.trackTiebaView)({
            page: "pages/index/index",
            locate: "tb_smallapp_index_view",
            fr: this.from || ""
        });
    },
    onHide: function onHide() {
        this.trackDuration();
    },
    trackDuration: function trackDuration() {
        var duration = new Date().getTime() - this.enterTime;
        (0, _util.track)("duration", {
            duration: duration
        });
    },
    onReady: function onReady() {
        (0, _util.subscribeMsg)(this, "msgCount");
    },
    onPull: function onPull() {
        // 下拉刷新后，清除已读的颜色
        (0, _util.setGlobalData)("readTids", {});
        this.data.threads.forEach(function(thread) {
            thread.isRead = false;
        });
        this.getThreadData("refresh");
    },
    refresh: function refresh() {
        this.isLoading = false;
        this.getThreadData("refresh");
    },
    // 错误页面的重试刷新
    refreshbybtn: function refreshbybtn() {
        wx.showLoading({
            mask: true,
            title: "加载中"
        });
        this.isLoading = false;
        this.getThreadData("refresh");
    },
    scrolltolower: function scrolltolower() {
        if (!this.isLoading) {
            this.getThreadData("append");
        }
    },
    avatarTrack: function avatarTrack() {},
    share: function share() {
        (0, _trackTieba.trackTiebaClick)({
            page: "pages/index/index",
            locate: "share"
        });
    },
    onShareAppMessage: function onShareAppMessage(res) {
        if (res && res.from === "button") {
            var index = res.target.dataset.index;
            var thread = this.data.threads[index];
            var tid = thread.tid, title = thread.title, forumName = thread.forumName, shareImg = thread.shareImg;
            var shareData = {
                title: title ? title : "来" + (forumName || "贴") + "吧，看点好看的！",
                path: "/pages/pb/pb?tid=" + tid
            };
            if (shareImg) {
                shareData.imageUrl = shareImg;
            } else {
                (0, _util.post)(_url.SHARE, {
                    type: 3,
                    tid: tid
                });
            }
            return shareData;
        }
        return {
            title: "来贴吧，看点好看的！",
            path: "/pages/index/index",
            /** ~~weixin only begin~~ */
            imageUrl: "http://imgsrc.baidu.com/forum/pic/item/2982a42f070828385b29691fb699a9014d08f196.jpg"
            /** ~~weixin only end~~ */        };
    },
    /**
   * 进入页面或者下拉刷新 拉取数据
   */
    getThreadData: function getThreadData(type) {
        var _this = this;
        var openFailPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
        var self = this;
        if (this.isLoading) {
            return;
        }
        this.isLoading = true;
        var data = {
            call_type: 1,
            // 接入推荐标识
            load_type: type === "refresh" ? 1 : 2,
            page_thread_count: count,
            net_type: this.netType,
            client_type: this.clientType,
            client_version: this.clientVersion,
            openFailPage: openFailPage
        };
        if (this.isFirstLoad === 1) {
            data.obj_source = this.from;
            data.open_source = this.scene || "";
            this.from = "";
            this.scene = "";
        }
        var urls = _url.INDEX;
        if (!this.isBaidu) {
            urls = _url.INDEX + "?tag_name=" + (this.tagName || "");
        }
        (0, _util.post)(urls, data).then(function(res) {
            self.isLoading = false;
            var token = res.tokens && res.tokens.sb_index_bottom || "";
            self.setData({
                token: token,
                stopPullDown: !self.data.stopPullDown,
                isBroken: false
            });
            self.abtest_tag = res.abtest_tag;
            var result = (0, _formatIndexData.parseData)(res, type);
            _this.meta = result.meta;
            if (type === "refresh") {
                // if (!this.isBaidu) {
                _this.data.threads = [];
                // }
                                result.threads = result.threads.concat(_this.data.threads);
            } else if (type === "append") {
                result.threads = _this.data.threads.concat(result.threads);
            }
            if (type === "refresh" && res.thread_list && res.thread_list.length) {
                setTimeout(function() {
                    self.setData({
                        hasNewInfos: true,
                        newInfoNum: res.thread_list.length
                    });
                }, 500);
                setTimeout(function() {
                    self.setData({
                        hasNewInfos: false
                    });
                }, 2e3);
            }
            self.setData({
                threads: result.threads,
                nothing: !result.threads.length
            }, function() {
                wx.hideLoading();
            });
            if (self.isFirstLoad === 1) {
                /** ~~weixin only begin~~ */
                self.setData({
                    naviDatas: res.tag_list || []
                });
                /** ~~weixin only end~~ */                self.isFirstLoad = 0;
            }
        }).catch(function(err) {
            console.log(err);
            wx.hideLoading();
            self.setData({
                nothing: true,
                isBroken: true,
                err_code: err.errCode || ""
            });
        });
    },
    /**
   * 搜索点击后的Function
   */
    onSearchClick: function onSearchClick() {
        wx.myNavigateTo({
            url: "/pages/search/search"
        });
    },
    /**
   * 点赞
   * @param {*} e 点击事件对象
   */
    addFlower: function addFlower(e) {
        var self = this;
        var _e$currentTarget$data = e.currentTarget.dataset, type = _e$currentTarget$data.type, tid = _e$currentTarget$data.tid, fid = _e$currentTarget$data.fid, pid = _e$currentTarget$data.pid, _e$currentTarget$data2 = _e$currentTarget$data.hasAgree, hasAgree = _e$currentTarget$data2 === undefined ? 0 : _e$currentTarget$data2, index = _e$currentTarget$data.index;
        // if (this.isAddFlowering) {
        //     return;
        // }
                self.isAddFlowering = true;
        (0, _util.authPost)(_url.AGREE, {
            forum_id: fid,
            thread_id: tid,
            post_id: pid || 0,
            // 操作类型， 0：点赞，1：取消点赞
            op_type: +hasAgree,
            // 点赞对象，1：回复点赞，3：主题点赞
            obj_type: type,
            // 点赞类型，1：PERFECT，2：GOOD，3：BAD，4：SHIT
            agree_type: 2
        }, "点赞失败", function() {
            return self.addFlower(e);
        }).then(function() {
            var targetItem = self.data.threads[index];
            if (+type === 3) {
                (0, _util.renderAgree)(targetItem, "threads[" + index + "]");
            } else if (+type === 1) {
                (0, _util.renderAgree)(targetItem.goodReply, "threads[" + index + "].goodReply");
            }
            self.isAddFlowering = false;
        }).catch(function() {
            self.isAddFlowering = false;
        });
        (0, _trackTieba.trackTiebaClick)({
            page: "pages/index/index",
            locate: "like"
        });
    },
    /**
   * 点击跳转pb页
   * @param {Object} e 点击事件对象
   */
    onItemClick: function onItemClick(e) {
        var _e$currentTarget$data3 = e.currentTarget.dataset, index = _e$currentTarget$data3.index, videoinfo = _e$currentTarget$data3.videoinfo;
        var thread = this.data.threads[index];
        var tid = thread.tid, statisticParam = thread.statisticParam;
        if (!!videoinfo && videoinfo.height > videoinfo.width && (0, _util.getGlobalData)("isSupportVideo")) {
            wx.navigateTo({
                url: "/pages/videopb/videopb?tid=" + tid
            });
            return;
        }
        var statisticData = JSON.parse(statisticParam);
        var readTids = (0, _util.getGlobalData)("readTids");
        if (!readTids[tid]) {
            readTids[tid] = true;
        }
        (0, _util.setGlobalData)("readTids", readTids);
        (0, _util.track)("index_click", {
            tid: statisticData.tid,
            fid: statisticData.fid,
            obj_type: statisticData.thread_type === 1 ? "图文" : "视频",
            ab_tag: this.abtest_tag
        });
        if (this.data.threads[index].swanInfo) {
            var swanInfo = this.data.threads[index].swanInfo;
            wx.navigateToSmartProgram({
                appKey: swanInfo.id,
                path: swanInfo.link,
                extraData: {
                    from: "tieba"
                },
                success: function success() {}
            });
        } else {
            wx.myNavigateTo({
                url: "/pages/pb/pb?tid=" + tid + "&from=index&statparam=" + statisticParam
            });
        }
    },
    goFrs: function goFrs(e) {
        var forumName = e.currentTarget.dataset.forumName;
        wx.navigateTo({
            url: "/pages/frs/frs?kw=" + forumName
        });
    },
    toTop: function toTop() {
        this.setData({
            isToTop: !this.data.isToTop
        });
    },
    doubleTap: function doubleTap() {
        this.toTop();
    },
    pageScroll: function pageScroll(e) {
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
                if (+e.detail.scrollTop > +e.detail.scrollHeight - 3e3) {
                    // 距离底部3000的时候就加载下一页
                    self.scrolltolower();
                }
            }, 200);
        } else {
            this.throttle(e);
        }
    },
    // 进入消息页
    goMsg: function goMsg() {
        (0, _util.goHybridMsg)("index");
    },
    goVideoMidPage: function goVideoMidPage(e) {
        var _e$currentTarget$data4 = e.currentTarget.dataset, tid = _e$currentTarget$data4.tid, videoinfo = _e$currentTarget$data4.videoinfo;
        if (videoinfo) {
            // 视频
            if (videoinfo.height > videoinfo.width && (0, _util.getGlobalData)("isSupportVideo")) {
                // 竖版视屏
                wx.navigateTo({
                    url: "/pages/videopb/videopb?tid=" + tid
                });
            } else {
                wx.navigateTo({
                    url: "/pages/videoMidPage/videoMidPage?tid=" + tid
                });
            }
        }
    },
    /** ~~weixin only begin~~ */
    switchNavi: function switchNavi(e) {
        var tagName = e.detail.key;
        this.tagName = tagName;
        this.getThreadData("switchNavi");
    }
}));