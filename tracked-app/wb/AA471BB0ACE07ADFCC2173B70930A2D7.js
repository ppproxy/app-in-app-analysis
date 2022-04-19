var e = require("@babel/runtime/helpers/interopRequireDefault.js")(require("60CBF632ACE07ADF06AD9E35EB10A2D7.js"));

function t(e) {
    return new Promise(function(t, a) {
        wx.getImageInfo({
            src: e || "",
            success: function(e) {
                t(e);
            },
            fail: function(e) {
                a(e);
            }
        });
    });
}

function a() {
    var e = getApp().globalData.device;
    return e && [ "PRO 7-S" ].indexOf(e) > -1;
}

module.exports = {
    preloadImage: t,
    preloadImages: function(e) {
        return Promise.all(e.map(function(e) {
            return t(e);
        }));
    },
    clipImage: function(e, t, a, o) {
        var n = e / t;
        if (n > a / o) {
            var r = a / n;
            return {
                left: 0,
                top: (o - r) / 2,
                width: a,
                height: r
            };
        }
        var i = o * n;
        return {
            left: (a - i) / 2,
            top: 0,
            width: i,
            height: o
        };
    },
    gaussBlur: function(t, o, n, r, i, l) {
        var c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 60, u = a();
        return u ? Promise.resolve({
            degrade: !0
        }) : new Promise(function(a, u) {
            wx.canvasGetImageData({
                canvasId: o,
                x: n,
                y: r,
                width: i,
                height: l,
                success: function(s) {
                    var f = (0, e.default)({
                        data: s.data
                    }, i, l, c);
                    wx.canvasPutImageData({
                        canvasId: o,
                        x: n,
                        y: r,
                        width: i,
                        height: l,
                        data: f.data,
                        success: function() {
                            a();
                        },
                        fail: function(e) {
                            u(e);
                        }
                    }, t);
                },
                fail: function(e) {
                    u(e);
                }
            }, t);
        });
    },
    drawRoundRect: function(e, t, a, o, n, r) {
        var i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {}, l = i.fillStyle, c = i.shadow, u = i.strokeStyle, s = i.dontClip;
        e.beginPath(), l && (e.fillStyle = l), c && (e.shadowOffsetX = c.offsetX, e.shadowOffsetY = c.offsetY, 
        e.shadowColor = c.color, e.shadowBlur = c.blur), e.moveTo(t, a + r), e.arcTo(t, a, t + r, a, r), 
        e.lineTo(t + o - r, a), e.arcTo(t + o, a, t + o, a + r, r), e.lineTo(t + o, a + n - r), 
        e.arcTo(t + o, a + n, t + o - r, a + n, r), e.lineTo(t + r, a + n), e.arcTo(t, a + n, t, a + n - r, r), 
        e.lineTo(t, a + r), l && e.fill(), u && (e.strokeStyle = u, e.stroke()), e.closePath(), 
        s || e.clip();
    },
    fixLocalImageInfoPathBug: function(e) {
        return "/" !== e.charAt(0) ? "/".concat(e) : e;
    }
};