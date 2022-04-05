function calcSelfStyle(t) {
            var e = "left:".concat(750 * t, "rpx;");
            this.setData({
                tabPaneStyle: e
            });
}
function getCurrentStyle() {
            var t = this;
            return new Promise(function(e, n) {
                t.createSelectorQuery().select(".tab-pane").boundingClientRect().exec(function(t) {
                    e(t && t[0]);
                });
            });
}
