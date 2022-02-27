Component({
    name: "bottom-tabbar",
    data: {
        isShow: !1,
        selected: "",
        color: "#757575",
        selectedColor: "#333",
        list: [],
        brandLogo: "",
        isKeyBoardOpen: !1,
        fromPage: "",
        isPageResult: "",
        timer: null,
        $root: null,
        themeIcons: [ "IconTabDish", "IconTabHome", "IconTabMall", "IconTabMine", "IconTabOrder" ]
    },
    detached: function() {
        var t = this.data.timer;
        t && clearTimeout(t);
    },
    methods: {
        switchTab: function(t) {
            var e = this.data, a = e.fromPage, o = e.isPageResult, r = e.timer, i = t.currentTarget.dataset.path;
            o && i === a || (r && clearTimeout(r), this.data.timer = setTimeout(function() {
                var t = getApp();
                t && (t.__trace_page_navigate_start_time = +new Date()), wx.switchTab({
                    url: "/".concat(i),
                    fail: function(t) {
                        console.error("[switchTab]:", t.errMsg);
                    }
                });
            }, 100));
        }
    }
});