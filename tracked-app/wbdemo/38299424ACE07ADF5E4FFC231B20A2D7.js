Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(a, i, n, r) {
    var l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    return new Promise(function(c, o) {
        var s = wx.createCanvasContext(i, a), h = l.topic, g = l.pic, u = l.descArr || [], d = l.isSuper || !1, f = [ g ];
        d && f.push("https://h5.sinaimg.cn/upload/1035/467/2020/04/01/ic_super_subject.png"), 
        (0, t.preloadImages)(f).then(function(l) {
            var g = l[0], f = (0, t.clipImage)(n, r, g.width, g.height);
            s.drawImage(g.path, f.left, f.top, f.width, f.height, 0, 0, n, r), s.draw(!1, function() {
                (0, t.gaussBlur)(a, i, 0, 0, n, r).then(function(f) {
                    s.save();
                    var p = "rgba(0, 0, 0, 0.5)";
                    if (f && f.degrade && (p = "rgba(0, 0, 0, 0.7)"), s.fillStyle = p, s.fillRect(0, 0, n, r), 
                    s.restore(), s.save(), (0, t.drawRoundRect)(s, 150, 56, 120, 120, 4, {
                        fillStyle: "#FFFFFF",
                        strokeStyle: "rgba(255, 255, 255, 0.1)"
                    }), s.drawImage(g.path, g.left, g.top, g.width, g.height, 150, 56, 120, 120), s.restore(), 
                    d && (h.length > 8 ? h = "".concat(h.substr(0, 7), "...超话") : h += "超话"), !d && h.length > 12) {
                        var x = "#" === h.charAt(0) && "#" === h.charAt(h.length - 1);
                        h = x ? "#".concat(h.substr(1, 9), "...#") : "".concat(h.substr(0, 11), "...");
                    }
                    if (s.setTextBaseline("middle"), s.setTextAlign("center"), s.fillStyle = "#FFFFFF", 
                    s.font = "32px PingFangSC-Regular", s.fillText(h, d ? 188 : 210, 218.5), d) {
                        var F = s.measureText(h).width, v = l[1];
                        s.drawImage((0, t.fixLocalImageInfoPathBug)(v.path), 0, 0, v.width, v.height, 188 + F / 2 + 4, 198, 40, 40);
                    }
                    s.font = "20px PingFangSC-Regular", s.fillText(u.join("  "), 210, 267), s.draw(!0, function() {
                        wx.canvasToTempFilePath({
                            x: 0,
                            y: 0,
                            width: n,
                            height: r,
                            destWidth: n * e.globalData.pixelRatio,
                            destHeight: r * e.globalData.pixelRatio,
                            canvasId: i,
                            quality: 1,
                            success: function(t) {
                                var e = t && t.tempFilePath || "";
                                c(e);
                            },
                            fail: function(t) {
                                o(t);
                            }
                        }, a);
                    });
                }).catch(function(t) {
                    o(t);
                });
            });
        }).catch(function(t) {
            o(t);
        });
    });
};

var t = require("AA471BB0ACE07ADFCC2173B70930A2D7.js"), e = getApp();