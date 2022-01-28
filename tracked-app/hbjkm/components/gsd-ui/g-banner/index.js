Component({
    properties: {
        src: {
            type: Array,
            observer: function() {
                this.initBanner();
            },
            __type__: function(t) {
                return t;
            }
        }
    },
    data: {
        _autoplay: !0,
        _showDots: !1
    },
    methods: {
        initBanner: function() {
            this.properties.src.length > 1 ? this.setData({
                _showDots: !0
            }) : this.setData({
                _showDots: !1
            });
        }
    }
});