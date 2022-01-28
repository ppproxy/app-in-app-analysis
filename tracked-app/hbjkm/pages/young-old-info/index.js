var e = getApp(), t = (e.Anim, e.request, e.requestHb), a = (e.dayjs, e.wxp, e.config);

e.utils, e.userStore, require("../../services/index"), require("../../utils/util").navigateToWebview, 
require("../../services/health-code.js"), require("../../services/feedback"), require("../../services/league"), 
a.domain, require("../../utils/util.js"), require("../../utils/weapp.qrcode.js");

Page({
    data: {
        idCard: "",
        name: "",
        userName: "",
        id: "",
        time: 15,
        color: "",
        warnTip: "",
        now: ""
    },
    onLoad: function(e) {
        var a = this, n = Date.parse(new Date()), r = 1e3 * (n /= 1e3), i = new Date(r), s = i.getFullYear() + "-" + (i.getMonth() + 1 < 10 ? "0" + (i.getMonth() + 1) : i.getMonth() + 1) + "-" + (i.getDate() < 10 ? "0" + i.getDate() : i.getDate()) + " " + (i.getHours() < 10 ? "0" + i.getHours() : i.getHours()) + ":" + (i.getMinutes() < 10 ? "0" + i.getMinutes() : i.getMinutes()) + ":" + (i.getSeconds() < 10 ? "0" + i.getSeconds() : i.getSeconds());
        this.setData({
            now: s
        }), this.setData({
            name: e.name,
            idCard: e.idCard
        }), t({
            url: "/hbjkm/lyzc/queryHealthInfo",
            method: "GET",
            data: {
                identity: this.data.idCard,
                name: this.data.name
            }
        }).then(function(e) {
            a.setData({
                color: e.data.color,
                warnTip: e.data.warnTip,
                hsjc: e.data.hsjcjg ? e.data.hsjcjg : "",
                hsjcsj: e.data.hsjcsj ? e.data.hsjcsj : ""
            }), a.drawimg(e.data.imgStream, e.data.width, e.data.color);
        }).catch(function(e) {
            console.log(e);
        }).then(function() {
            var e = a, t = setInterval(function() {
                if (0 === e.data.time) wx.reLaunch({
                    url: "../index/index"
                }), clearInterval(e.data.interVal); else {
                    var t = e.data.time - 1;
                    e.setData({
                        time: t
                    });
                }
            }, 1e3);
            a.setData({
                interVal: t
            });
        }), this.getName();
        var o = this.data.idCard.replace(/^(.{6})(?:\d+)(.{4})$/, "$1****$2");
        this.setData({
            id: o
        });
    },
    encryptIdNo: function(e) {
        if (null != e && void 0 != e) {
            var t = /(\d{4})\d*(\d{4})/;
            return e.replace(t, "$1***********$2");
        }
        return "";
    },
    getName: function() {
        var e = this.data.userName, t = this.data.name;
        2 == t.length ? e = t.substring(0, 1) + "*" : 3 == t.length ? e = t.substring(0, 1) + "*" + t.substring(2, 3) : t.length > 3 && (e = t.substring(0, 1) + "**" + t.substring(3, t.length)), 
        this.setData({
            userName: e,
            name: t
        });
    },
    drawimg: function(e, t, a) {
        console.log(e, t);
        var n = "#000";
        "00" == a ? n = "#39b778" : "01" == a ? n = "#f5d000" : "10" == a && (n = "#d8242b");
        var r = n, i = t, s = wx.createCanvasContext("myQrcode"), o = new Int8Array(wx.base64ToArrayBuffer(e)), d = 3 * (i + 10);
        s.white = s.height = d;
        for (var u = i, c = Math.ceil(u / 8), l = 0; l < u; l++) for (var g = l * c, h = 0; h < u; h++) {
            var f = 0 == (o[g + parseInt(h / 8, 10)] & 1 << 7 - h % 8) ? "#ffffff" : r;
            s.setFillStyle(f), s.fillRect(3 * (h + 5), 3 * (l + 5), 3, 3);
        }
        var m = d, v = d;
        s.drawImage("../../images/logo.png", (m - 48) / 2, (v - 48) / 2), s.draw();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        clearInterval(this.data.interVal);
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});