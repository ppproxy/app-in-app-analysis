Component({
    properties: {
        images: {
            type: Array,
            required: !0
        }
    },
    data: {
        placeholder: ""
    },
    lifetimes: {
        ready: function() {
            var e = this, t = this.data.images;
            for (var i in t) !function(i) {
                wx.createIntersectionObserver(e).relativeToViewport({
                    bottom: 20
                }).observe(".item-" + i, function(r) {
                    r.intersectionRatio > 0 && (t[i].show = !0), e.setData({
                        images: t
                    });
                });
            }(i);
        }
    }
});