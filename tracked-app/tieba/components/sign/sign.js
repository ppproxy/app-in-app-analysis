var _util = require("../../util/util");

var _url = require("../../util/url");

/**
 * @file 签到按钮
 */ Component({
    properties: {
        forumData: {
            type: Object,
            value: null,
            observer: function observer(newV, oldV) {
                this.setData({
                    levelData: this.levelFormat(newV),
                    signStatus: this.setSignStatus(newV)
                });
            }
        },
        userData: {
            type: Object,
            value: null
        }
    },
    data: {
        IMG_CDN: _url.IMG_CDN,
        levelData: {
            // 当前分数
            curScore: 0,
            // 当前等级分数
            levelupScore: 0,
            // 当前等级
            levelId: 0
        },
        // 签到状态 0:未关注 1:未签到 2:已签到
        signStatus: 0,
        // 是否展示发贴选择页
        // 自定义toast数据
        toastData: {
            // toast 类型 0 隐藏  1 图片 2 标题+摘要
            type: 0,
            // toast 图片
            src: _url.IMG_CDN + "/pic_level1@3x.png",
            // toast 标题
            title: "这是标题",
            // 扩展数据
            extend: {
                // 等级
                userLevel: 0,
                // 增加值
                addNum: 0,
                // 当前值
                currentNum: 0,
                // 总值
                totalNum: 0
            }
        }
    },
    attached: function attached() {},
    methods: {
        /*
     * 设置frs初始关注状态
     */
        setSignStatus: function setSignStatus() {
            var forumData = this.data.forumData;
            if (!forumData) {
                return 0;
            } else if (forumData.is_like && forumData.is_like === 1) {
                if (forumData.sign_in_info && forumData.sign_in_info.user_info && forumData.sign_in_info.user_info.is_sign_in && forumData.sign_in_info.user_info.is_sign_in === 1) {
                    return 2;
                }
                return 1;
            }
            return 0;
        },
        /**
     * 等级数据格式化
     * @param {Object} forumData
     */
        levelFormat: function levelFormat() {
            var forumData = this.data.forumData;
            return {
                curScore: forumData.cur_score,
                levelupScore: forumData.levelup_score,
                levelId: forumData.level_id
            };
        },
        /*
     * 点击关注
     */
        clickLike: function clickLike() {
            var self = this;
            (0, _util.authPost)(_url.FOLLOW, {
                fid: this.data.forumData.id,
                kw: this.data.forumData.name,
                uid: this.data.userData.id
            }, "关注失败", function() {
                self.clickLike();
            }).then(function() {
                self.triggerEvent("signAfterLogin");
                wx.showToast({
                    icon: "none",
                    title: "关注成功"
                });
                self.setData({
                    signStatus: 1
                });
            });
        },
        /*
     * 点击签到
     */
        clickSign: function clickSign() {
            var self = this;
            (0, _util.get)(_url.SIGN, {
                fid: this.data.forumData.id,
                kw: this.data.forumData.name,
                is_like: 1
            }, "操作失败，请再试一次").then(function(res) {
                self.setSignProgress(res);
                self.setData({
                    signStatus: 2
                });
            });
        },
        /*
     * 设置签到进度,msg是增长的经验
     */
        setSignProgress: function setSignProgress(data) {
            var self = this;
            // 增加经验
                        var addNum = parseInt(data.msg, 10);
            // 计算增加后的经验
                        var curScore = addNum + self.data.levelData.curScore;
            // 获取当前等级总经验
                        var levelupScore = self.data.levelData.levelupScore;
            // 获取当前等级
                        var levelId = self.data.levelData.levelId;
            var levelNewData = void 0;
            var toastNewDataOne = void 0;
            var toastNewDataTwo = void 0;
            // 判断是否提升等级
                        if (curScore > levelupScore) {
                // 计算增加的等级
                levelId += 1;
                // 计算下一个等级的当前经验
                                curScore = curScore - levelupScore;
                // 下一个等级的经验总值
                                levelupScore = data.forum_sign_info_data.levelup_score;
                // 设置level数据
                                levelNewData = {
                    // 当前分数
                    curScore: curScore,
                    // 当前等级分数, !!!粗略计算，因为接口没有返回下一个等级的经验总值
                    levelupScore: levelupScore,
                    // 当前等级
                    levelId: levelId
                };
                // 设置贴吧自定义 toast数据
                                toastNewDataOne = {
                    type: 1,
                    src: this.data.IMG_CDN + "/" + levelId + "@3x.png"
                };
                toastNewDataTwo = {
                    type: 2,
                    title: "签到成功",
                    extend: {
                        // 等级
                        userLevel: levelId,
                        // 增加值
                        addNum: addNum,
                        // 当前值
                        currentNum: curScore,
                        // 总值
                        totalNum: levelupScore
                    }
                };
                self.setData({
                    levelData: levelNewData
                });
                self.tiebaToast(toastNewDataOne, toastNewDataTwo, function(data) {
                    self.tiebaToast(data);
                });
            } else {
                levelNewData = {
                    // 当前分数
                    curScore: curScore,
                    // 当前等级分数
                    levelupScore: levelupScore,
                    // 当前等级
                    levelId: levelId
                };
                toastNewDataOne = {
                    type: 2,
                    title: "签到成功",
                    extend: {
                        // 等级
                        userLevel: levelId,
                        // 增加值
                        addNum: addNum,
                        // 当前值
                        currentNum: curScore,
                        // 总值
                        totalNum: levelupScore
                    }
                };
                self.setData({
                    levelData: levelNewData
                });
                self.tiebaToast(toastNewDataOne);
            }
        },
        /**
     * 自定义签到弹窗
     * @param {Object} dataOne
     * @param {Object} dataTwo
     * @param {Function} callback
     */
        tiebaToast: function tiebaToast(dataOne, dataTwo, callback) {
            var _this = this;
            this.triggerEvent("changeToastData", dataOne);
            setTimeout(function() {
                _this.triggerEvent("changeToastData", {
                    type: 0
                });
                if (dataTwo && callback) {
                    callback(dataTwo);
                }
            }, 2e3);
        }
    }
});