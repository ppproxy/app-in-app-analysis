var _util = require("../../util/util.js");

var _url = require("../../util/url");

/**
 * @file 选择发帖类型
 */ Component({
    properties: {
        forumData: {
            type: Object,
            value: function value() {
                return {};
            }
        }
    },
    data: {
        IMG_CDN: _url.IMG_CDN,
        selectData: false
    },
    attached: function attached() {},
    methods: {
        /**
     * 显示发帖浮层
     */
        showPost: function showPost() {
            (0, _util.track)("frs_post");
            this.setData({
                selectData: true
            });
            this.triggerEvent("showPost", {
                isShowSelectPic: this.data.selectData
            });
        },
        /**
     * 隐藏发帖覆层
     */
        hidePost: function hidePost() {
            this.setData({
                selectData: false
            });
            this.triggerEvent("showPost", {
                isShowSelectPic: false
            });
        },
        /**
     * 跳转到发帖页面post
     * @param {} e
     */
        intoPost: function intoPost(e) {
            var self = this;
            var type = e.currentTarget.dataset.type;
            // type 1:文字 2 拍摄 3 相册
                        var url = "/pages/post/post?type=" + type + "&fid=" + self.data.forumData.id + "&fname=" + self.data.forumData.name;
            wx.myNavigateTo({
                url: url
            });
        },
        /**
     * 视频号引导
     */
        showVideoGuide: function showVideoGuide() {
            wx.myNavigateTo({
                url: "/pages/videoGuide/videoGuide"
            });
        }
    }
});