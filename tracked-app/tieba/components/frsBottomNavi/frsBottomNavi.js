/**
 * @file frs 底部导航
 */
Component({
    properties: {
        bottomMenu: {
            type: Array,
            value: []
        }
    },
    data: {
        // 底导二级菜单是否展现
        isShowMenu: false,
        // 展现底导菜单的index
        showMenuIndex: null,
        // 二级菜单动画样式
        menuAnimation: ""
    },
    methods: {
        /**
     * 底导跳转
     *
     * @param  {string} url 跳转url
     */
        tabJump: function tabJump(type, url) {
            if (type + "" === "1") {
                wx.myNavigateTo({
                    url: "/pages/webview/webview?url=" + url
                });
            } // 内部路由 frs 或 pb
             else if (type + "" === "2") {
                wx.myNavigateTo({
                    url: url
                });
            } // 外部小程序
             else if (type + "" === "3") {
                try {
                    var data = JSON.parse(url);
                    wx.navigateToSmartProgram({
                        appKey: data.appid,
                        path: data.path,
                        extraData: data.extraData || {},
                        fail: function fail(res) {
                            wx.showToast({
                                icon: "none",
                                title: "小程序加载失败"
                            });
                        }
                    });
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    wx.showToast({
                        icon: "none",
                        title: "小程序加载失败"
                    });
                }
            }
        },
        /**
     * 隐藏展现二级菜单
     *
     * @param  {boolean} isShow 是否展现
     * @param  {number}  index  底导index
     */
        toggleMenu: function toggleMenu(isShow, index) {
            var _this = this;
            if (isShow) {
                this.setData({
                    isShowMenu: true,
                    showMenuIndex: index
                });
            } else {
                this.setData({
                    menuAnimation: "fade-out"
                });
                setTimeout(function() {
                    _this.setData({
                        isShowMenu: false,
                        menuAnimation: "",
                        showMenuIndex: null
                    });
                }, 100);
            }
        },
        /**
     * 点击菜单遮罩
     */
        clickModel: function clickModel() {
            this.toggleMenu(false);
        },
        /**
     * 点击底导菜单
     *
     * @param  {Object} e event
     */
        clickMenu: function clickMenu(e) {
            var _e$currentTarget$data = e.currentTarget.dataset, url = _e$currentTarget$data.url, type = _e$currentTarget$data.type;
            if (url) {
                this.tabJump(type, url);
            }
        },
        /**
     * 点击底导
     *
     * @param  {Object} e event
     */
        clickTab: function clickTab(e) {
            var _this2 = this;
            var _e$currentTarget$data2 = e.currentTarget.dataset, index = _e$currentTarget$data2.index, url = _e$currentTarget$data2.url, type = _e$currentTarget$data2.type, hasSubmenu = _e$currentTarget$data2.hasSubmenu;
            if (!hasSubmenu && url) {
                this.tabJump(type, url);
                this.toggleMenu(false);
            } else if (hasSubmenu) {
                var currentIndex = this.data.showMenuIndex;
                this.toggleMenu(!this.data.isShowMenu, index);
                if (index !== currentIndex) {
                    setTimeout(function() {
                        _this2.toggleMenu(true, index);
                    }, 200);
                }
            }
        }
    }
});