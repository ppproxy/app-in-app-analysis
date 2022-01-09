var a = require("../../../AA471BB0ACE07ADFCC2173B70930A2D7.js"), t = getApp();

Component({
    properties: {
        headData: {
            type: Object,
            value: {}
        },
        cardDesc: {
            type: Object,
            value: {}
        }
    },
    data: {
        canvasId: "topic-bg",
        canvasWidth: 420,
        canvasHeight: 336,
        imagePath: ""
    },
    ready: function() {},
    methods: {
        drawTopicGaussBlur: function(e, i, n, c) {
            var r = this;
            return new Promise(function(o, u) {
                var d = r.data.headData.background_url ? r.data.headData.background_url : r.data.headData.portrait_url, h = wx.createCanvasContext(i, e);
                (0, a.preloadImage)(d).then(function(r) {
                    var d = r, s = (0, a.clipImage)(n, c, d.width, d.height);
                    h.drawImage(d.path, s.left, s.top, s.width, s.height, 0, 0, n, c), h.draw(!1, function() {
                        (0, a.gaussBlur)(e, i, 0, 0, n, c).then(function() {
                            h.restore(), h.draw(!0, function() {
                                wx.canvasToTempFilePath({
                                    x: 0,
                                    y: 0,
                                    width: n,
                                    height: c,
                                    destWidth: n * t.globalData.pixelRatio,
                                    destHeight: c * t.globalData.pixelRatio,
                                    canvasId: i,
                                    quality: 1,
                                    success: function(a) {
                                        var t = a && a.tempFilePath || "";
                                        o(t);
                                    },
                                    fail: function(a) {
                                        u(a);
                                    }
                                }, e);
                            });
                        }).catch(function(a) {
                            u(a);
                        });
                    });
                }).catch(function(a) {
                    u(a);
                });
            });
        }
    }
});