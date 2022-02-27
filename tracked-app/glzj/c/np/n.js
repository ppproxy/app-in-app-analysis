var e, t, a, o, n, r, i, l, s = require("../../@babel/runtime/helpers/interopRequireDefault"), c = require("../../@babel/runtime/helpers/objectSpread2"), h = s(require("../../m/zk/za")), u = s(require("../../m/zl/59")), g = require("../../l/wd/wb"), p = require("../../l/wa");

(0, h.default)({
    name: "navigation-bar",
    options: {
        styleIsolation: "apply-shared"
    },
    properties: {
        hidden: {
            type: Boolean,
            value: !1
        },
        dishPage: {
            type: Boolean,
            value: !1
        },
        title: {
            type: String,
            value: ""
        },
        titleStyle: {
            type: String,
            value: ""
        },
        background: {
            type: String,
            value: ""
        },
        color: {
            type: String,
            value: ""
        },
        back: {
            type: Boolean,
            value: !0
        },
        alipayCustomBack: {
            type: Boolean,
            value: !1
        },
        delta: {
            type: Number,
            value: 1
        },
        close: {
            type: Boolean,
            value: !1
        },
        home: {
            type: Boolean,
            value: !1
        },
        homeScroll: {
            type: Boolean,
            value: !1
        },
        search: {
            type: Boolean,
            value: !1
        },
        feintSearch: {
            type: Boolean,
            value: !1
        },
        showBorder: {
            type: Boolean,
            value: !1
        },
        borderColor: {
            type: String,
            value: "#e3e3e3"
        },
        scrollOpacity: {
            type: Boolean,
            value: !1
        },
        startColor: {
            type: String,
            value: "#ffffff"
        },
        backText: {
            type: String,
            value: ""
        },
        backTextStyle: {
            type: String,
            value: ""
        },
        isShowMask: {
            type: Boolean,
            value: !1
        },
        isFromDetailPage: {
            type: Boolean,
            value: !1
        },
        isLoading: {
            type: Boolean,
            value: !1
        },
        isheaderBackgroundWhite: {
            type: Boolean,
            value: !1
        },
        commentPage: {
            type: Boolean,
            value: !1
        }
    },
    data: c({
        iconBack: "",
        iconDown: "",
        iconHome: "",
        iconSearch: "",
        opacity: 0,
        useOriginColor: !1,
        searchValue: "",
        isClearShow: !1,
        minType: (0, p.getMiniType)(),
        searchFocus: !0
    }, (e = u.default.getSync("systemInfo"), t = e.system, a = e.statusBarHeight, o = e.windowWidth, 
    n = e.titleBarHeight, r = /ios/i.test(t), i = (wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : {}).left, 
    l = void 0 === i ? 0 : i, {
        ios: r,
        titleBarHeight: n || 48,
        statusBarHeight: a || 24,
        innerWidth: l ? "width:".concat(l, "px") : "",
        innerPaddingRight: l ? "padding-right:".concat(o - l, "px") : "",
        leftWidth: l ? "width:".concat(o - l - 16, "px") : ""
    })),
    observers: {
        "back, color, useOriginColor, startColor, scrollOpacity": function() {
            this.setIconBack();
        },
        "close, color, useOriginColor, startColor, scrollOpacity": function() {
            this.setIconDown(), this.setIconHome();
        },
        isShowMask: function() {
            this.setIconSearch(), this.setIconHome();
        },
        opacity: function() {
            this.setIconHome();
        },
        isheaderBackgroundWhite: function() {
            this.setIconSearch();
        }
    },
    ready: function() {
        this.setIconDown(), this.setIconSearch(), this.setIconHome();
    },
    methods: {
        setIconBack: function() {
            var e = this.data, t = e.back, a = e.color, o = e.useOriginColor, n = e.startColor, r = e.scrollOpacity && !o ? n : a;
            this.setData({
                iconBack: t ? this.getColorIcon('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24"><path fill="currentColor" d="M10 19.438L8.955 20.5l-7.666-7.79a1.02 1.02 0 0 1 0-1.42L8.955 3.5 10 4.563 2.682 12 10 19.438z"/></svg>', r) : ""
            });
        },
        setIconDown: function() {
            var e = this.data, t = e.close, a = e.color, o = e.useOriginColor, n = e.startColor, r = e.scrollOpacity && !o ? n : a;
            this.setData({
                iconDown: t ? this.getColorIcon('<svg xmlns="http://www.w3.org/2000/svg" width="35" height="37"><path fill="currentColor" d="M29.53 12.8l-2.037-2.036-10.182 10.18-10.182-10.18L5.093 12.8 17.31 25.018z"/></svg>', r) : ""
            });
        },
        setIconSearch: function() {
            var e = this.data.isheaderBackgroundWhite;
            this.setData({
                iconSearch: this.getColorIcon('<svg width="34px" height="36px" viewBox="0 0 34 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd"><g transform="translate(-111.000000, -114.000000)" fill="currentColor" fill-rule="nonzero"><g transform="translate(96.000000, 100.000000)"><g transform="translate(15.000000, 14.000000)"><path d="M32.45581,33.4557846 C31.7302232,34.1814051 30.5537952,34.1814051 29.8282442,33.4557846 L23.702144,27.3294471 C21.3232936,29.1537327 18.3490423,30.2403386 15.1196396,30.2403386 C7.32157563,30.2403386 1,23.9185151 1,16.1201514 C1,8.32182349 7.32161139,2 15.1196396,2 C22.9176679,2 29.2392435,8.32178771 29.2392435,16.1201514 C29.2392435,19.349052 28.1531339,22.3228869 26.3295667,24.7016042 L32.45581,30.8280848 C33.1813967,31.5537054 33.1813967,32.730164 32.45581,33.4557846 Z M15.0000182,5 C8.92488724,5 4,9.92485757 4,15.9999818 C4,22.0751424 8.92488724,27 15.0000182,27 C21.0751128,27 26,22.0751424 26,15.9999818 C26,9.92489393 21.0751128,5 15.0000182,5 Z" id="Shape"></path></g></g></g></g></svg>', e ? "#191919" : "#fff")
            });
        },
        setIconHome: function() {
            var e, t = this.data, a = t.isShowMask, o = t.opacity, n = t.homeScroll, r = t.startColor, i = t.isheaderBackgroundWhite, l = t.feintSearch;
            1 !== o ? a || !i ? e = "#ffffff" : n && (e = r) : e = l && !i ? "#ffffff" : "#191919", 
            this.setData({
                iconHome: this.getColorIcon('<svg width="34px" height="35px" viewBox="0 0 34 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd"><g transform="translate(-31.000000, -113.000000)" fill="currentColor" fill-rule="nonzero"><g transform="translate(16.000000, 100.000000)"><g transform="translate(15.000000, 13.000000)"><path d="M19.3002212,1.82189556 L30.3002212,10.1330067 C31.3007777,10.8889827 31.8888889,12.0704373 31.8888889,13.324476 L31.8888889,30 C31.8888889,32.209139 30.0980279,34 27.8888889,34 L5.88888889,34 C3.67974989,34 1.88888889,32.209139 1.88888889,30 L1.88888889,13.324476 C1.88888889,12.0704373 2.47700007,10.8889827 3.47755653,10.1330067 L14.4775565,1.82189556 C15.9043754,0.743854619 17.8734024,0.743854619 19.3002212,1.82189556 Z M16.3968627,4.14272977 L16.2860558,4.21549753 L5.2860558,12.5266086 C5.06718407,12.6919784 4.92725695,12.9387874 4.89569504,13.2079327 L4.88888889,13.324476 L4.88888889,30 C4.88888889,30.5128358 5.27492908,30.9355072 5.77226776,30.9932723 L5.88888889,31 L27.8888889,31 C28.4017247,31 28.824396,30.6139598 28.8821612,30.1166211 L28.8888889,30 L28.8888889,13.324476 C28.8888889,13.050155 28.7763207,12.7897271 28.580605,12.6022952 L28.491722,12.5266086 L17.491722,4.21549753 C17.1706877,3.97293832 16.7398563,3.9486824 16.3968627,4.14272977 Z M16.8888889,17 C17.9934584,17 18.8888889,17.8954305 18.8888889,19 L18.8888889,27 C18.8888889,28.1045695 17.9934584,29 16.8888889,29 C15.7843194,29 14.8888889,28.1045695 14.8888889,27 L14.8888889,19 C14.8888889,17.8954305 15.7843194,17 16.8888889,17 Z"></path></g></g></g></g></svg>', e)
            });
        },
        getColorIcon: function(e, t) {
            return "data:image/svg+xml;base64,".concat(g.Base64.encode(e.replace(/currentColor/g, t)));
        },
        back: function() {
            var e = this.data;
            e.delta && this.$root.$back(e.delta), this.triggerEvent("handleBack", {
                delta: e.delta
            }, {});
        },
        backCanStop: function() {
            this.triggerEvent("handleBackCanStop");
        },
        close: function() {
            this.triggerEvent("handleClose");
        },
        handleHomeTap: function() {
            this.triggerEvent("handleHomeTap");
        },
        handleBackTextTap: function() {
            this.triggerEvent("handleBackTextTap");
        },
        handleFeintSearch: function() {
            this.triggerEvent("handleFeintSearch");
        },
        handleSearchWarp: function() {
            this.triggerEvent("handleSearchWarp");
        },
        handleSearchInput: function(e) {
            var t = e.detail.value || "", a = !(null == t || 0 === t.length);
            this.data.isClearShow !== a && this.setData({
                isClearShow: a
            }), this.triggerEvent("handleSearchInput", e.detail);
        },
        handleSearch: function(e) {
            this.setData({
                searchFocus: !1
            }), this.triggerEvent("handleSearch", e.detail);
        },
        handleClearSearch: function() {
            this.setData({
                isClearShow: !1,
                searchFocus: !0,
                searchValue: ""
            }), this.triggerEvent("handleClearSearch");
        },
        setSearchFocus: function() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            this.setData({
                searchFocus: e
            });
        },
        setSearchValue: function(e) {
            this.setData({
                searchValue: e,
                isClearShow: !!e
            });
        },
        handlePageScroll: function(e) {
            this.handlePageScrollWx(e);
        },
        handlePageScrollWx: function(e) {
            var t = this.data, a = t.scrollOpacity, o = t.ios, n = t.statusBarHeight, r = t.opacity;
            if (a) {
                var i = (o ? 44 : 48) + n, l = Math.min(e.scrollTop / i, 1), s = e.scrollTop / i > .65;
                r !== l && this.setData({
                    opacity: l,
                    useOriginColor: s
                });
            }
        },
        handlePageScrollMy: function(e) {
            var t = this.data, a = t.scrollOpacity, o = t.titleBarHeight, n = t.statusBarHeight, r = t.opacity;
            if (a) {
                var i = o + n, l = Math.min(e.scrollTop / i, 1), s = e.scrollTop / i > .65;
                r !== l && this.setData({
                    opacity: l,
                    useOriginColor: s
                });
            }
        },
        handleSearchInputFocus: function(e) {
            this.props.onHandleSearchInputFocus && this.props.onHandleSearchInputFocus(e);
        },
        handleSearchInputBlur: function(e) {
            this.props.onHandleSearchInputBlur && this.props.onHandleSearchInputBlur(e);
        }
    }
});