function observer() {
                this.initBanner();
}
function __type__(t) {
                return t;
}
function initBanner() {
            this.properties.src.length > 1 ? this.setData({
                _showDots: !0
            }) : this.setData({
                _showDots: !1
            });
}
