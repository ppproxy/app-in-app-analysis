var _util = require("../../util/util.js");

var _url = require("../../util/url.js");

var _filters = require("../../util/filters.js");

var _trackTieba = require("../../util/trackTieba");

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
                                                                                                                                                                                                                   * @file feedRecommendation.js
                                                                                                                                                                                                                   * @desc 推荐 feed 流
                                                                                                                                                                                                                   */ Component({
    properties: {
        tid: {
            type: String,
            value: ""
        },
        // 是否吸顶
        isNeedSticky: {
            type: Boolean,
            value: false
        }
    },
    data: {
        // 聚合推荐列表
        siteList: [],
        // 热门推荐列表
        hotList: [],
        // 图片 cdn 地址
        IMG_CDN: _url.IMG_CDN,
        isBrowser: (0, _util.getGlobalData)("isBrowser") || wx.getStorageSync("isBrowser"),
        sid: (0, _util.getGlobalData)("ubs_sample_ids"),
        token: ""
    },
    ready: function ready() {
        var _this = this;
        var query = {
            // 贴子 tid
            thread_id: this.data.tid,
            pageFr: (0, _util.getGlobalData)("fr") || "",
            eqid: ""
        };
        (0, _util.get)(_url.PB_RECOMMENDATION, query, "获取feed推荐失败").then(function(res) {
            var siteList = _this.handleRecommendationList(res.site_list, res.test_info, "site");
            var hotList = _this.handleRecommendationList(res.hot_list, res.test_info, "hot");
            var source = "shoubai";
            var browser = (0, _util.getGlobalData)("systemInfo") && (0, _util.getGlobalData)("systemInfo").host || "";
            _this.setData({
                siteList: siteList,
                hotList: hotList,
                canWakeUp: !(0, _util.getGlobalData)("forbidWakeUp"),
                sid: (0, _util.getGlobalData)("ubs_sample_ids")
            });
        }).catch(function(err) {
            throw err;
        });
    },
    methods: {
        /**
     * 跳转 frs
     * @param {Object} e event
     * @return {void}
     */
        goFrs: function goFrs(e) {
            var forumName = e.currentTarget.dataset.forumName;
            var tid = e.currentTarget.dataset.tid;
            var fid = e.currentTarget.dataset.fid;
            var objSource = e.currentTarget.dataset.objSource || "";
            /** ~~weixin only begin~~ */
            // 跳转小程序frs页面
                        wx.navigateTo({
                url: "/pages/frs/frs?kw=" + forumName
            });
            /** ~~weixin only end~~ */
            // 打点
                        (0, _util.track)("pb_recommend_click", {
                tid: tid,
                fid: fid,
                from_tid: this.data.tid,
                obj_source: "site",
                obj_locate: 9,
                ab_tag: 6
            });
        },
        /**
     * 点赞
     * @param {Object} e event
     * @return {void}
     */
        addFlower: function addFlower(e) {
            var self = this;
            var dataset = e.currentTarget.dataset;
            var tid = dataset.tid;
            var fid = dataset.fid;
            var hasAgree = dataset.hasAgree;
            var index = dataset.index;
            self.isAddFlowering = true;
            (0, _util.authPost)(_url.AGREE, {
                forum_id: fid,
                thread_id: tid,
                post_id: 0,
                // 操作类型， 0：点赞，1：取消点赞
                op_type: +hasAgree,
                // 点赞对象，1：回复点赞，3：主题点赞
                obj_type: 3,
                // 点赞类型，1：PERFECT，2：GOOD，3：BAD，4：SHIT
                agree_type: 2
            }, "点赞失败", function() {
                self.addFlower(e);
            }).then(function() {
                self.renderAgree(index);
                self.isAddFlowering = false;
            }).catch(function(err) {
                self.isAddFlowering = false;
                throw err;
            });
            // 打点
                        (0, _util.track)("pb_recommend_click", {
                tid: tid,
                fid: fid,
                from_tid: this.data.tid,
                obj_source: "site",
                obj_locate: 13,
                ab_tag: 6
            });
        },
        /**
     * 点击卡片跳转pb或h5
     * @param {Object} e event
     * @return {void}
     */
        onItemClick: function onItemClick(e) {
            var dataset = e.currentTarget.dataset;
            var tid = dataset.tid;
            var fid = dataset.fid;
            var isVideo = dataset.isvideo;
            var isVertival = dataset.isvertival;
            // 打点信息
                        var objSource = dataset.objSource || "";
            // 打点
                        (0, _util.track)("pb_recommend_click", {
                tid: tid,
                fid: fid,
                from_tid: this.data.tid,
                obj_source: objSource,
                obj_locate: 1,
                ab_tag: 6
            });
            // 调起客户端，去pb页
                        var url = this.joinUrl(tid, fid, isVideo, isVertival);
            wx.myNavigateTo({
                url: url
            });
        },
        /**
     * 拼接跳转地址
     * @param {string} tid
     * @param {string} fid
     * @param {boolean} isVideo
     * @param {boolean} isVertical
     * @return {string} url
     */
        joinUrl: function joinUrl(tid, fid, isVideo, isVertival) {
            var url = "";
            if (isVideo && isVertival && (0, _util.getGlobalData)("isSupportVideo")) {
                url = "/pages/videopb/videopb?tid=" + tid;
            } // 跳转 pb
             else if (tid) {
                url = "/pages/pb/pb?tid=" + tid + "&from=frs&fid=" + fid;
            }
            return url;
        },
        /**
     * 处理 推荐列表数据
     * @param {Array} list 列表数据
     * @param {object} strategyInfo 策略信息
     * @param {string} src 来源: site/hot
     * @return {Array} list
     */
        handleRecommendationList: function handleRecommendationList(list, strategyInfo, src) {
            var _this2 = this;
            if (!list || !list.length) {
                return [];
            }
            list.forEach(function(item) {
                // 拼接 cdn 前缀
                item.author.portrait = "" + _url.USER_AVATAR_CDN + item.author.portrait;
                // 图片处理
                                item.feedImg = "";
                item.isVideo = false;
                if (item.video_info) {
                    item.feedImg = item.video_info.thumbnail_url;
                    item.isVideo = true;
                    item.playCount = item.video_info.play_count;
                } // 图片展示顺序：老样式用小图，新样式用大图
                 else if (item.media) {
                    item.feedImg = item.media[0].big_pic;
                }
                // 点赞数需要格式化一下
                                item.agree_num_txt = (0, _filters.numFormat)(+item.agree_num);
                item.forum.member_txt = (0, _filters.numFormat)(+item.forum.member_count);
                item.forum.thread_txt = (0, _filters.numFormat)(+item.forum.thread_count);
                // 增加打点数据
                                item.trackInfo = {
                    tid: item.thread_id,
                    fid: item.forum_id,
                    from_tid: _this2.data.tid,
                    obj_source: src,
                    ab_tag: 6
                };
            });
            return list;
        },
        /**
     * 更新点赞相关字段
     * @param {number} index 列表索引
     * @return {void}
     */
        renderAgree: function renderAgree(index) {
            var _setData;
            var targetItem = this.data.siteList[index];
            var arr = "siteList";
            // 获取真实 index
                        if (+index >= this.data.siteList.length) {
                index = +index - this.data.siteList.length;
                targetItem = this.data.hotList[index];
                arr = "hotList";
            }
            // 计算点赞后相关字段的值
                        var agreeNum = targetItem.has_agree ? +targetItem.agree_num - 1 : +targetItem.agree_num + 1;
            var hasAgree = !targetItem.has_agree;
            this.setData((_setData = {}, _defineProperty(_setData, arr + "[" + index + "].has_agree", hasAgree), 
            _defineProperty(_setData, arr + "[" + index + "].agree_num", agreeNum), _defineProperty(_setData, arr + "[" + index + "].agree_num_txt", (0, 
            _filters.numFormat)(agreeNum)), _setData));
        }
    }
});