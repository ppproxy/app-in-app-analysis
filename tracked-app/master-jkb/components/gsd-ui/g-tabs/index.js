Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../../gsd-lib/event/index");

Component({
    relations: {
        "../g-tab-pane/index": {
            type: "child"
        }
    },
    externalClasses: [ "tab-header-class" ],
    properties: {
        activeKey: {
            type: String,
            observer: function(t) {
                this.resetStyle(), this.scrollToActive();
            }
        },
        position: {
            type: String,
            value: "fixed"
        },
        animated: {
            type: Boolean,
            value: !0
        },
        scroll: {
            type: Boolean,
            value: !1
        },
        align: String,
        paneHeight: String
    },
    data: {
        _tabs: [],
        _sliderStyle: "",
        _tabContentStyle: "",
        _scrollLeft: 0
    },
    ready: function() {
        var t = this;
        this.initListener(), this.initTabs().then(function() {
            return t.saveInitTabItems();
        }).then(function() {
            t.resetStyle(), t.scrollToActive();
        });
    },
    detached: function() {
        this.removeListener();
    },
    methods: {
        initListener: function() {
            var e = this;
            t.addEventListener("g-tabs__resetStyle", function() {
                e.resetStyle();
            }, this), t.addEventListener("g-tabs__init", function() {
                e.initTabs().then(function() {
                    return e.saveInitTabItems();
                }).then(function() {
                    e.resetStyle(), e.scrollToActive();
                });
            });
        },
        removeListener: function() {
            var e = this;
            t.removeSingleEventListener("g-tabs__resetStyle", function() {
                e.resetStyle();
            }, this);
        },
        getTabPanes: function() {
            return this.getRelationNodes("../g-tab-pane/index");
        },
        initTabs: function() {
            var t = this;
            return new Promise(function(e) {
                var n = t.getTabPanes().map(function(t, e) {
                    return t.calcSelfStyle(e), t.properties;
                });
                t.setData({
                    _tabs: n
                }, function() {
                    return e(!0);
                });
            });
        },
        saveInitTabItems: function() {
            var t = this;
            return new Promise(function(e, n) {
                t.createSelectorQuery().selectAll(".tabs__item__wrap").boundingClientRect(function(n) {
                    n.forEach(function(e, n) {
                        t.data._tabs[n].rect = e;
                    }), t.setData({
                        _tabs: t.data._tabs
                    }, function() {
                        e(!0);
                    });
                }).exec();
            });
        },
        resetStyle: function() {
            var t = this;
            this.getCurrentTabItem().then(function(e) {
                var n = e.node, i = e.index, r = e.scroll;
                n && t.calcSliderStyle(n, r), -1 !== i && t.setTapPaneStyle(i);
            });
        },
        setTapPaneStyle: function(t) {
            var e = this, n = this.createSelectorQuery(), i = this.getTabPanes();
            n.select("#tab-header").boundingClientRect(function(n) {
                i[t].getCurrentStyle().then(function(i) {
                    e.calcTabContentStyle(t, i.height, n.height);
                });
            }).exec();
        },
        getCurrentTabItem: function() {
            var t = this;
            return new Promise(function(e, n) {
                t.createSelectorQuery().selectAll(".tabs__item").fields({
                    size: !0,
                    rect: !0,
                    scrollOffset: !0
                }).exec(function(n) {
                    var i, r = t.properties, a = r.activeKey, s = r.scroll, c = t.data._tabs.findIndex(function(t) {
                        return t.key === a;
                    });
                    -1 !== c && (i = n[0] && n[0][c]), s ? t.getScrollView().then(function(t) {
                        e({
                            node: i,
                            scroll: t,
                            index: c
                        });
                    }) : e({
                        node: i,
                        index: c
                    });
                });
            });
        },
        getScrollView: function() {
            var t = this;
            return new Promise(function(e, n) {
                t.createSelectorQuery().select("#tabs-scroll").scrollOffset().exec(function(t) {
                    var n = t && t[0];
                    e(n);
                });
            });
        },
        calcSliderStyle: function(t, e) {
            var n = this.properties, i = n.animated, r = n.scroll, a = {
                width: t.width + 8,
                left: t.left - 4
            };
            r && (a.left = e.scrollLeft + a.left);
            var s = "width:".concat(a.width, "px;left:").concat(a.left, "px;");
            i && (s += "transition: all .45s;"), this.setData({
                _sliderStyle: s
            });
        },
        calcTabContentStyle: function(t, e, n) {
            var i = this.properties, r = i.animated, a = i.paneHeight, s = i.position, c = "margin-left: -".concat(100 * t, "%;");
            r && (c += "transition: margin-left .45s;"), c += a ? "height:".concat(a, "rpx;") : "height:".concat(e, "px;"), 
            "fixed" === s && (c += "margin-top:".concat(n, "px;")), this.setData({
                _tabContentStyle: c
            });
        },
        handleTabItemTab: function(t) {
            var e = t.currentTarget.dataset.key, n = this.properties.activeKey;
            if (e !== n) {
                var i = this.data._tabs, r = i.findIndex(function(t) {
                    return t.key === e;
                });
                this.resetStyle(), this.triggerEvent("change", {
                    value: i[r]
                });
            }
        },
        scrollToActive: function() {
            var t = this.properties, e = t.activeKey;
            if (t.scroll) {
                var n = this.data._tabs.find(function(t) {
                    return t.key === e;
                });
                n && n.rect && this.setData({
                    _scrollLeft: n.rect.left - 150
                });
            }
        }
    }
});