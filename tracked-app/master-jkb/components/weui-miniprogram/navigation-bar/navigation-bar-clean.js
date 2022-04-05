function attached() {
                var t = this, e = !!wx.getMenuButtonBoundingClientRect, n = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null;
                wx.getSystemInfo({
                    success: function(a) {
                        var o = !!(a.system.toLowerCase().search("ios") + 1);
                        t.setData({
                            ios: o,
                            statusBarHeight: a.statusBarHeight,
                            innerWidth: e ? "width:" + n.left + "px" : "",
                            innerPaddingRight: e ? "padding-right:" + (a.windowWidth - n.left) + "px" : "",
                            leftWidth: e ? "width:" + (a.windowWidth - n.left) + "px" : ""
                        });
                    }
                });
}
function _showChange(t) {
                    var e = "";
                    e = this.data.animated ? "opacity: " + (t ? "1" : "0") + ";-webkit-transition:opacity 0.5s;transition:opacity 0.5s;" : "display: " + (t ? "" : "none"), 
                    this.setData({
                        displayStyle: e
                    });
}
function back() {
                    var t = this.data;
                    wx.navigateBack({
                        delta: t.delta
                    }), this.triggerEvent("back", {
                        delta: t.delta
                    }, {});
}
