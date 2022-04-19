var _util = require("../../util/util");

var _url = require("../../util/url");

var _filters = require("../../util/filters.js");

var _trackTieba = require("../../util/trackTieba");

/**
 * @file pb竖版视频评论组件弹框
 * @author zw
 */ Component({
    properties: {
        showComments: {
            type: Boolean,
            value: false,
            observer: function observer(v) {
                this.init();
                this.setData({
                    replyMainFloor: !this.data.replyMainFloor
                });
            }
        },
        tid: {
            type: String,
            value: ""
        }
    },
    data: {
        showAds: true,
        frameClick: false,
        floorDatas: null,
        commentsNums: 0,
        jumpPageNum: 1,
        hasMore: true,
        IMG_CDN: _url.IMG_CDN,
        isShowPageJumpDialog: false,
        isIPX: getApp().globalData.isIphoneX
    },
    detached: function detached() {
        clearTimeout(this.loadCommentsTimer);
    },
    methods: {
        init: function init() {
            if (this.data.tid !== this.currentTid) {
                this.options = {
                    rn: 20,
                    see_lz: 0,
                    r: 0,
                    pn: 0,
                    kz: this.data.tid
                };
                this.loadComments();
            }
        },
        loadComments: function loadComments(options) {
            var _this = this;
            this.loading = true;
            (0, _util.get)(_url.PB, options || this.options).then(function(res) {
                _this.options.rn = 20;
                _this.loading = false;
                _this.totalnums = +res.page.total_num;
                _this.pageInfo = res.page;
                var hasMore = true;
                if (_this.reverseSort) {
                    hasMore = _this.options.pn > 1;
                } else {
                    hasMore = res.page.current_page < res.page.total_page;
                }
                _this.setData({
                    floorDatas: res,
                    commentsNums: (0, _filters.numFormat)(_this.totalnums) - 1 || 0
                });
                if (!hasMore) {
                    _this.setData({
                        showJumpBar: false
                    });
                }
                // ‘暂无更多回复’应该在数据渲染完成后过一会儿在出现
                                clearTimeout(_this.loadCommentsTimer);
                _this.loadCommentsTimer = setTimeout(function() {
                    _this.setData({
                        hasMore: hasMore
                    });
                }, 200);
            });
            // 请求pb时打点
                        (0, _trackTieba.trackTiebaView)({
                page: "pages/videoPb/videoPb",
                locate: "pb_request"
            });
        },
        onBottom: function onBottom() {
            // 判断是否还有后续内容
            if (this.loading) {
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
            this.loadComments();
        },
        sortBy: function sortBy(e) {
            // 时间正序r=0，倒序r=1，热门r=2;
            if (e.detail.key !== "jumpPage") {
                this.options.r = +e.detail.key;
                if (+this.options.r === 1) {
                    // 倒序
                    this.options.pn = Math.max(this.totalnums - this.options.rn, 0) + 1;
                    this.reverseSort = true;
                } else {
                    this.options.pn = 0;
                    this.reverseSort = false;
                }
                this.setData({
                    floorDatas: null,
                    hasMore: false
                });
                this.loadComments();
            } else {
                // 跳页
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
                    title: "页码输入不正确，请重新输入"
                });
            } else {
                var options = {
                    rn: this.options.rn,
                    pn: (this.data.jumpPageNum - 1) * 20,
                    isJump: true,
                    beginPageNum: this.data.jumpPageNum,
                    see_lz: this.options.see_lz,
                    r: this.options.r,
                    kz: this.data.tid
                };
                this.options.pn = options.pn;
                this.setData({
                    showJumpBar: this.data.jumpPageNum > 1,
                    floorDatas: null
                });
                this.loadComments(options);
                this.closeJumpPage();
            }
        },
        changeComments: function changeComments(e) {
            if (this.options.see_lz === +e.detail) {
                return;
            }
            this.options.see_lz = +e.detail;
            this.options.pn = 0;
            this.setData({
                floorDatas: null
            });
            this.loadComments();
        },
        togglemask: function togglemask() {
            this.close();
        },
        close: function close() {
            this.triggerEvent("closeComments");
        },
        empty: function empty() {
            this.setData({
                frameClick: !(this.data.frameClick && this.data.showComments)
            });
        },
        share: function share() {
            (0, _trackTieba.trackTiebaClick)({
                page: "pages/videoPb/videoPb",
                locate: "share"
            });
        },
        collect: function collect() {
            (0, _trackTieba.trackTiebaClick)({
                page: "pages/videoPb/videoPb",
                locate: "favorites"
            });
        },
        inputFocus: function inputFocus() {
            (0, _trackTieba.trackTiebaClick)({
                page: "pages/videoPb/videoPb",
                locate: "reply"
            });
        },
        // 跳页后回到顶部刷新 / 加载更多楼层
        goFirstOrFetchMore: function goFirstOrFetchMore(e) {
            var _this2 = this;
            var type = +e.detail;
            // 0 回到顶部并刷新， 1查看之前的楼层。
                        if (type === 0) {
                this.loadComments();
                this.setData({
                    showJumpBar: false,
                    floorDatas: null
                });
            } else {
                // 加载上一页
                // 正序
                if (+this.options.r === 0) {
                    this.options.pn = this.options.pn - this.options.rn > 0 ? this.options.pn - this.options.rn : 0;
                    (0, _util.get)(_url.PB, this.options).then(function(res) {
                        if (_this2.options.pn === 0) {
                            _this2.setData({
                                showJumpBar: false
                            });
                            res.post_list.shift();
                            _this2.options.pn = (_this2.data.jumpPageNum - 1) * 20;
                        }
                        _this2.setData({
                            concatData: res,
                            concatType: "prev"
                        });
                    });
                    // 请求pb时打点
                                        (0, _trackTieba.trackTiebaView)({
                        page: "pages/videoPb/videoPb",
                        locate: "pb_request"
                    });
                } // 倒序
                 else if (+this.options.r === 1) {
                    this.options.pn -= this.options.rn;
                    this.loadComments();
                }
            }
        }
    }
});