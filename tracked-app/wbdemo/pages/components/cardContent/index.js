Component({
    properties: {
        cardData: {
            type: Object,
            value: []
        },
        key: {
            type: Number,
            value: 0
        },
        query: {
            type: String,
            value: ""
        },
        from: {
            type: String,
            value: ""
        },
        headerBar: {
            type: Boolean,
            value: !1
        },
        pageFrom: {
            type: String,
            value: "search"
        },
        is_show_zone: {
            type: Boolean,
            value: !1
        },
        no_border_bottom: {
            type: Boolean,
            value: !1
        }
    },
    data: {},
    ready: function() {
        this.initIntersectionObserver();
    },
    detached: function() {
        this.disconnectIntersectionObserver();
    },
    methods: {
        searchQuery: function(e) {
            var t = {
                query: e.detail.query
            };
            this.triggerEvent("searchQuery", t);
        },
        cardClick: function(e) {
            this.triggerEvent("cardClick", {
                scheme: e.detail.scheme,
                query: e.detail.query
            });
        },
        initIntersectionObserver: function() {
            var e = this;
            this.intersectionObserver = this.createIntersectionObserver(), this.intersectionObserver.relativeToViewport({
                bottom: 100
            }).observe(".wb-card", function(t) {
                t.intersectionRatio > 0 && e.setData({
                    is_show_zone: !0
                }, function() {
                    e.disconnectIntersectionObserver();
                });
            });
        },
        disconnectIntersectionObserver: function() {
            this.intersectionObserver && (this.intersectionObserver.disconnect(), this.intersectionObserver = null);
        },
        toMiniProgram: function() {}
    }
});