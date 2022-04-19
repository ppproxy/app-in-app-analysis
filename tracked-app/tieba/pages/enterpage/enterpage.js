var _util = require("../../util/util.js");

var _trackTieba = require("../../util/trackTieba.js");

var _url = require("../../util/url");

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

/**
                                                                                                                                                                                                     * @file frs
                                                                                                                                                                                                     * @author qinhongxu
                                                                                                                                                                                                     */ Page({
    data: {
        IMG_CDN: _url.IMG_CDN,
        regularFrsList: [],
        focusFrsList: [],
        mayLikeFrsList: [],
        topFrsList: [],
        isMenuShow: false,
        isSortEdit: false,
        isEditStatus: false,
        isLogin: false,
        isHideRecent: false,
        isSetTop: false,
        stopPullDown: true,
        recentMenu: [ {
            text: "编辑",
            tabEvent: "toggleEditStatus"
        }, {
            text: "清空",
            tabEvent: "clearAllFrs"
        }, {
            text: "隐藏",
            tabEvent: "hideRecent"
        } ],
        focusMenu: [ {
            text: "等级排序",
            tabEvent: "sortForum"
        }, {
            text: "关注排序",
            tabEvent: "sortForum"
        }, {
            text: "手动置顶",
            tabEvent: "setTop"
        } ]
    },
    isLoading: false,
    mayLikePn: 0,
    allMayLikeFrsList: [],
    tbs: "",
    toggleMenu: function toggleMenu() {
        if (this.data.isHideRecent) {
            this.setData({
                isHideRecent: false
            });
            return;
        }
        this.setData({
            isMenuShow: !this.data.isMenuShow
        });
    },
    toggleSort: function toggleSort() {
        (0, _util.track)("sort");
        this.setData({
            isSortEdit: !this.data.isSortEdit
        });
    },
    setTop: function setTop() {
        this.setData({
            isSetTop: !this.data.isSetTop,
            isSortEdit: false
        });
    },
    sortForum: function sortForum(e) {
        (0, _util.track)("sort_choose");
        var sort = e.currentTarget.dataset.sort;
        var sortWay = sort === "等级排序" ? 0 : 1;
        this.setData({
            isSortEdit: false
        });
        this.getRecommendOrLikedFrs(sortWay);
    },
    changeSort: function changeSort(e) {
        var _e$currentTarget$data = e.currentTarget.dataset, fid = _e$currentTarget$data.fid, istop = _e$currentTarget$data.istop;
        if (!istop) {
            wx.vibrateShort();
        }
        var self = this;
        var sortUrl = istop ? _url.UNSET_TOP : _url.SET_TOP;
        (0, _util.get)(sortUrl, {
            fid: fid,
            tbs: self.tbs
        }).then(function() {
            self.getRecommendOrLikedFrs();
        });
    },
    hideRecent: function hideRecent() {
        this.setData({
            isHideRecent: true,
            isMenuShow: !this.data.isMenuShow
        });
    },
    closeMenuShow: function closeMenuShow() {
        this.setData({
            isMenuShow: false,
            isSortEdit: false
        });
    },
    toggleEditStatus: function toggleEditStatus() {
        this.setData({
            isEditStatus: true,
            isMenuShow: false
        });
    },
    closeEditStatus: function closeEditStatus() {
        this.setData({
            isEditStatus: false
        });
    },
    deleteFrs: function deleteFrs(e) {
        var fid = e.currentTarget.dataset.fid;
        if (fid) {
            for (var i = 0; i < this.data.regularFrsList.length; i++) {
                if (this.data.regularFrsList[i].fid === fid) {
                    this.data.regularFrsList.splice(i, 1);
                    break;
                }
            }
            this.setData({
                regularFrsList: this.data.regularFrsList
            });
            wx.setStorageSync("frsHistory", this.data.regularFrsList);
        }
    },
    clearAllFrs: function clearAllFrs() {
        var self = this;
        wx.showModal({
            title: "删除",
            content: "确认清空全部历史记录？",
            success: function success(res) {
                if (res.confirm) {
                    wx.removeStorage({
                        key: "frsHistory"
                    });
                    self.setData({
                        regularFrsList: []
                    });
                }
            }
        });
    },
    onReady: function onReady() {},
    onShow: function onShow() {
        (0, _util.updatePoint)();
        // 页面曝光打点
                (0, _trackTieba.trackTiebaView)({
            page: "pages/enterpage/enterpage",
            locate: "tb_smallapp_enterpage_view"
        });
    },
    onLoad: function onLoad() {
        // 初始化放在onLoad，避免多次执行
        var regularFrsList = this.getFrsHistory() || [];
        this.setData({
            regularFrsList: regularFrsList
        });
        this.getRecommendOrLikedFrs();
    },
    getRecommendOrLikedFrs: function getRecommendOrLikedFrs(sortWay) {
        var self = this;
        self.isLoading = true;
        (0, _util.post)(_url.FORUM, {
            st: sortWay || 0
        }).then(function(data) {
            self.tbs = data.tbs;
            self.isLoading = false;
            self.setData({
                isLogin: !!(data.login_user_info && data.login_user_info.is_login),
                stopPullDown: !self.data.stopPullDown
            });
            self.topFrsList = data.topForum;
            if (data.recommend_forums && data.recommend_forums.length > 0) {
                self.allMayLikeFrsList = data.recommend_forums;
                self.packageRecommendData();
            } else {
                self.packageLikedData(data.liked_forums);
            }
        }).catch(function(err) {
            self.setData({
                stopPullDown: !self.data.stopPullDown
            });
        });
    },
    packageRecommendData: function packageRecommendData() {
        var rn = 5;
        var totalPage = Math.ceil(this.allMayLikeFrsList.length / rn);
        var pn = this.mayLikePn % totalPage;
        var subArr = this.allMayLikeFrsList.slice(pn * rn, (pn + 1) * rn);
        this.setData({
            focusFrsList: [],
            mayLikeFrsList: subArr
        });
        this.mayLikePn += 1;
    },
    packageLikedData: function packageLikedData(data) {
        var list = data.list || [];
        var tops = this.topFrsList.filter(function(item) {
            return item !== null;
        }) || [];
        // 后端没人改😠
                var showFrsList = [].concat(_toConsumableArray(tops), _toConsumableArray(list));
        var topsIds = tops.map(function(item) {
            return item.forum_id;
        });
        showFrsList.forEach(function(element, index) {
            element.isSetTop = topsIds.indexOf(element.forum_id) !== -1;
            element.levelImg = _url.IMG_CDN + "/" + element.level_id + "_level_icon.png";
            if (element.isSetTop && showFrsList[index + 1] && topsIds.indexOf(showFrsList[index + 1].forum_id) === -1) {
                element.lastTop = true;
            }
        });
        this.setData({
            focusFrsList: showFrsList,
            mayLikeFrsList: []
        });
    },
    changeMayLikeFrs: function changeMayLikeFrs() {
        this.packageRecommendData();
    },
    getFrsHistory: function getFrsHistory() {
        var frsHistory = wx.getStorageSync("frsHistory");
        if (Array.isArray(frsHistory)) {
            return frsHistory.slice(0, 20);
        }
        return [];
    },
    onPull: function onPull() {
        this.getRecommendOrLikedFrs();
    },
    focusFrs: function focusFrs(e, needRefreshList) {
        var self = this;
        var _e$currentTarget$data2 = e.currentTarget.dataset, fid = _e$currentTarget$data2.fid, kw = _e$currentTarget$data2.kw;
        (0, _util.authPost)(_url.FOLLOW, {
            fid: fid,
            kw: kw
        }, "关注失败", function() {
            return self.focusFrs(e, false);
        }).then(function() {
            wx.showToast({
                icon: "none",
                title: "关注成功"
            });
            self.changeFocusStatus(e);
            if (needRefreshList) {
                self.getRecommendOrLikedFrs();
            }
        });
    },
    changeFocusStatus: function changeFocusStatus(e) {
        var _this = this;
        var fid = e.currentTarget.dataset.fid;
        this.allMayLikeFrsList.find(function(frs, index) {
            if (frs.forum_id === fid) {
                _this.allMayLikeFrsList[index].is_liked = true;
            }
        });
        this.data.mayLikeFrsList.find(function(frs, index) {
            if (frs.forum_id === fid) {
                _this.data.mayLikeFrsList[index].is_liked = true;
            }
        });
        this.setData({
            mayLikeFrsList: this.data.mayLikeFrsList
        });
    },
    goSearch: function goSearch() {
        wx.myNavigateTo({
            url: "/pages/search/search?from=enterpage"
        });
    },
    goFrs: function goFrs(e) {
        var _e$currentTarget$data3 = e.currentTarget.dataset, forum = _e$currentTarget$data3.forum, locate = _e$currentTarget$data3.locate, fid = _e$currentTarget$data3.fid;
        if (this.data.isMenuShow || this.data.isSortEdit || this.data.isSetTop) {
            return;
        }
        if (locate === "recent") {
            (0, _util.track)("recently_browse_click", {
                fid: fid
            });
        } else if (locate === "follow") {
            (0, _util.track)("following_click", {
                fid: fid
            });
        }
        if (forum) {
            wx.myNavigateTo({
                url: "/pages/frs/frs?kw=" + forum + "&from=enterpage"
            });
        }
    },
    /**
   * 一个空函数 用来给catch阻止touchstart冒泡用的 兼容手百bug
   */
    empty: function empty() {}
});