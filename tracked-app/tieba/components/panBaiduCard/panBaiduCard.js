var _filters = require("../../util/filters");

var _util = require("../../util/util");

var _url = require("../../util/url");

var _trackTieba = require("../../util/trackTieba");

/**
 * @file 百度网盘卡片
 */ Component({
    properties: {
        card: {
            type: Object,
            value: function value() {
                return {};
            }
        }
    },
    ready: function ready() {
        (0, _trackTieba.trackTiebaView)({
            page: "pages/pb/pb",
            locate: "pan_card",
            page_type: +(0, _util.getGlobalData)("callNAScene") === 1036 ? "share" : ""
        });
        var card = this.data.card;
        // 如果链接失效， 后面操作不用计算
                if (card.errno !== 0) {
            this.setData({
                expiredDate: this.getTimeValue((card.server_ctime + card.expiredtype) * 1e3)
            });
            return;
        }
        var canPreview = false;
        // category 为以下值时支持预览 1、视频,3、图片
                var canPreviewTypes = [ 1, 3 ];
        var icon = _url.IMG_CDN + "/icon_wangpan.png";
        // 多文件情况下不支持预览，只有单文件才支持预览
                if (card.list.length === 1) {
            if (card.list[0] && canPreviewTypes.includes(+card.list[0].category)) {
                canPreview = true;
            }
            // 如果类型是音频或者文档还需要继续判断文件后缀，category 为以下值 2、音频, 4、文档
                        if (+card.list[0].category === 2) {
                var voiceList = [ "3gp", "aac", "flac", "xmf", "mxmf", "rtttl", "rtx", "ota", "imy", "mp3", "ogg", "wav" ];
                var suffix = card.list[0].server_filename.split(".").pop();
                canPreview = voiceList.includes(suffix);
            }
            if (+card.list[0].category === 4) {
                var docList = [ "doc", "xls", "ppt", "pdf", "docx", "xlsx", "pptx" ];
                var _suffix = card.list[0].server_filename.split(".").pop();
                canPreview = docList.includes(_suffix);
            }
        }
        // 文件名取第一个文件的名字
                var title = "" + card.list[0].server_filename + (card.list.length > 1 ? "...等多个文件" : "");
        // 文件大小取所有文件相加的值
                var size = card.list.reduce(function(total, item) {
            // item.size 是字符串，得转下
            return total + +item.size;
        }, 0);
        var expiredDay = (0, _filters.formatTemp)(card.expiredtype);
        this.setData({
            icon: icon,
            expiredDay: expiredDay >= 1 ? (0, _filters.formatTemp)(card.expiredtype) + "天后过期" : "1天内过期",
            title: title,
            size: size && this.getSizeValue(size),
            canPreview: canPreview
        });
    },
    methods: {
        /**
     * 打开网盘小程序通用方法
     * @param {object} e
     */
        openSmartProgram: function openSmartProgram(e) {
            var data = e.currentTarget.dataset;
            var urlInfo = this.data.card.url_info || {};
            var pwdCode = urlInfo.value.trim();
            pwdCode && wx.setClipboardData({
                data: pwdCode,
                complete: function complete() {
                    wx.hideToast();
                }
            });
            // action含义 -- preview_file: 文件预览、view_list: 查看文件、save: 一键转存、save_view: 保存后查看
                        var params = "?source=tieba_spmini&from=" + data.from + "&url=" + encodeURIComponent(urlInfo.link.trim()) + "&pwdcode=" + pwdCode + "&action=" + data.action;
            wx.navigateToSmartProgram({
                // 打开目标小程序的AppKey，开发版AppKey可在开发者工具中预览获取
                appKey: "OyIvf6LYVhKkbIHS1USP7xnSKYxc36SH",
                // 打开的页面路径，如果为空则打开首页
                path: "/pages/outsite-chain/share-code/index" + params,
                from: data.from,
                success: function success(res) {
                    console.log("navigateToSmartProgram success", res);
                },
                fail: function fail(err) {
                    console.log("navigateToSmartProgram fail", err);
                }
            });
            (0, _trackTieba.trackTiebaClick)({
                page: "pages/pb/pb",
                locate: data.locate,
                obj_source: "shoubai",
                qd: data.from
            });
        },
        /**
     * 获取年月日
     * @param {Number} temp, 时间戳
     * @return {String} 返回number格式的，年 + 月 + 日
     */
        getTimeValue: function getTimeValue(temp) {
            var date = new Date(temp);
            var year = date.getFullYear();
            var month = (0, _util.appendZero)(date.getMonth() + 1);
            var day = (0, _util.appendZero)(date.getDate());
            var timeValue = +("" + year + month + day);
            return timeValue;
        },
        /**
     * 格式化文件大小
     * @param {Number} size, 原始大小，但是b
     * @return {String} 返回格式化后的大小
     */
        getSizeValue: function getSizeValue(size) {
            var formatSize = "";
            // 小于 1KB，显示B
                        if (size < 1024) {
                formatSize = size + "B";
            } // 小于1MB，展示K
             else if (size < 1024 * 1024) {
                formatSize = (size / 1024).toFixed(1) + "K";
            } // 小于1G，展示M
             else if (size < 1024 * 1024 * 1024) {
                formatSize = (size / 1024 / 1024).toFixed(1) + "M";
            } // 大于1GB，展示G
             else {
                formatSize = (size / 1024 / 1024 / 1024).toFixed(1) + "G";
            }
            return formatSize;
        }
    }
});