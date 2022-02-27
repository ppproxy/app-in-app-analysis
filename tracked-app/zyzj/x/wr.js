Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = {
    onLoad: function() {
        var e, s;
        this.onShareAppMessage && (this.onShareAppMessage = (e = this.onShareAppMessage, 
        s = this, function(r) {
            var t = e.call(s, r);
            return t.imageUrl, t.bgImgUrl, t;
        }), Object.defineProperty(this.$root, "onShareAppMessage", {
            value: this.onShareAppMessage
        }));
    }
};

exports.default = e;