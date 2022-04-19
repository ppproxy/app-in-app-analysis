var e = require("@babel/runtime/helpers/interopRequireDefault.js")(require("@babel/runtime/regenerator.js")), t = require("@babel/runtime/helpers/asyncToGenerator.js"), r = require("FDCF6404ACE07ADF9BA90C030A01A2D7.js"), a = require("81CC8A51ACE07ADFE7AAE2566711A2D7.js");

function n() {
    return (n = t(e.default.mark(function t(a) {
        var n;
        return e.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (1129 !== (n = getApp()).globalData.scene) {
                    e.next = 3;
                    break;
                }
                return e.abrupt("return");

              case 3:
                if (a.ext.vid = "", 1154 === n.globalData.scene || 1155 === n.globalData.scene) {
                    e.next = 12;
                    break;
                }
                if (e.t0 = n.globalData.vid || wx.getStorageSync("vid"), e.t0) {
                    e.next = 10;
                    break;
                }
                return e.next = 9, r.userManager.vuidLogin();

              case 9:
                e.t0 = e.sent;

              case 10:
                a.ext.vid = e.t0, console.log("vid:", a.ext.vid);

              case 12:
                a.ext.set_elk = 1, a.ext.versionNumber = n.globalData.versionNumber, a.ext.networkType = n.globalData.networkType, 
                a.ext.scene = n.globalData.scene, a.ext.SDKVersion = n.globalData.SDKVersion, a.ext.version = n.globalData.version, 
                a.ext = JSON.stringify(a.ext), wx.request({
                    method: "POST",
                    url: "https://s.weibo.com/ajax_trace/minilog",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    data: a,
                    success: function(e) {}
                });

              case 20:
              case "end":
                return e.stop();
            }
        }, t);
    }))).apply(this, arguments);
}

module.exports = {
    track: function(e) {
        return n.apply(this, arguments);
    },
    logMap: function(e) {
        return {
            2000: "热搜榜",
            2001: "要闻榜",
            2002: "娱乐榜",
            2003: "热议话题",
            2004: "微博热点",
            2005: "潮物榜",
            2006: "时尚美妆榜",
            2007: "数码榜",
            2008: "美味榜",
            2009: "微博榜单",
            2010: "搜索落地页",
            2011: "详情页",
            2014: "评论",
            2015: "评论列表",
            2016: "落地页二级页",
            3000: "网络连接错误",
            3001: "请求错误"
        }[e];
    },
    getModule: function(e) {
        var t = [], r = {};
        function n(e) {
            var t = a.getUrlParam(e.itemid, "cate"), n = a.getUrlParam(e.itemid, "mid");
            r[t] || (r[t] = []), n && r[t].push({
                mid: n
            });
        }
        for (var i in e instanceof Array && e.forEach(function(e) {
            e.itemid && n(e), e.card_group instanceof Array && e.card_group.forEach(function(e) {
                n(e);
            });
        }), r) i && t.push({
            cate: i,
            info: r[i]
        });
        return JSON.stringify(t);
    }
};