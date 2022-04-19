var t = getApp(), a = 0, e = 0;

Component({
    properties: {
        toolBarData: {
            type: Array,
            value: []
        },
        activeIndex: {
            type: Number,
            value: 0
        },
        scrollX: {
            type: Number,
            value: 0
        },
        isToday: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        statusBarHeight: t.globalData.statusBarHeight
    },
    pageLifetimes: {
        show: function() {
            this.calDomWidth();
        },
        hide: function() {
            a = 0;
        }
    },
    observers: {
        toolBarData: function(t) {
            t && t.length && this.loadTabItems();
        },
        activeIndex: function(t) {
            this.setTabCurrent(!0), this.scrollXFn(t);
        }
    },
    methods: {
        scrollXFn: function(a) {
            var n = t.globalData.windowWidth / 5;
            e = n * a - 2 * n;
            var i = (this.data.toolBarData.length + 1) * n;
            e < 0 ? e = 0 : e >= i && (e = i), this.setData({
                scrollX: e
            });
        },
        setScroll: function(t) {
            this.scrollXFn(t.currentTarget.dataset.index), this.setData({
                activeIndex: t.currentTarget.dataset.index
            });
        },
        switchTap: function(t) {
            this.setScroll(t), this.triggerEvent("switchTap", {
                index: t.currentTarget.dataset.index,
                id: t.currentTarget.dataset.id,
                scrollX: e
            });
        },
        setTabCurrent: function(t) {
            var e = wx.createAnimation({
                duration: t ? 300 : 0
            });
            a && (e.translate("".concat(a * (this.data.activeIndex + .5), "px"), 0).step(), 
            this.setData({
                tabAnimation: e.export()
            }));
        },
        calDomWidth: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}, e = this;
            this.createSelectorQuery().selectAll(".channel-list-view").boundingClientRect(function(n) {
                if (n) for (var i = 0; i < n.length; i++) e.data.activeIndex == i && (a = n[i].width, 
                t(i, e));
            }).exec();
        },
        loadTabItems: function() {
            var t = this;
            this.calDomWidth(function(e, n) {
                var i = wx.createAnimation({
                    duration: 0
                });
                i.translate("".concat(a / 2 * (e + 1), "px"), 0).step(), n.setData({
                    tabAnimation: i.export()
                }, function() {
                    t.setTabCurrent();
                });
            });
        }
    }
});