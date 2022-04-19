var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};

/**
                                                                                                                                                                                                                                                                   * @file frs 条件过滤组件
                                                                                                                                                                                                                                                                   */ var _util = require("../../util/util");

var _url = require("../../util/url");

Component({
    properties: {
        sortTabData: {
            type: Array,
            value: []
        },
        navTabList: {
            type: Array,
            value: []
        },
        filterTypeId: {
            // 1是全部，0是核心区、4是精华
            type: Number,
            value: 0
        },
        showSortNav: {
            type: Boolean,
            value: true
        }
    },
    data: _extends({
        IMG_CDN: _url.IMG_CDN
    }, (0, _util.getStatusHeight)(getApp().globalData.systemInfo), {
        position: "static",
        typeData: [],
        showSortComp: false,
        sortType: 0,
        showMask: false
    }),
    attached: function attached() {},
    methods: {
        makefixed: function makefixed() {
            // 筛选条件吸顶
            var self = this;
            var query = this.createSelectorQuery();
            query.select("#content-filter-container-id").boundingClientRect();
            query.selectViewport().scrollOffset();
            query.exec(function(res) {
                if (res[0].top <= self.data.allH && self.data.position !== "fixed") {
                    self.setData({
                        position: "fixed"
                    });
                } else if (res[0].top > self.data.allH && self.data.position !== "static") {
                    self.setData({
                        position: "static"
                    });
                }
            });
        },
        clickFilter: function clickFilter(e) {
            var filterTypeId = e.currentTarget.dataset.id;
            this.setData({
                filterTypeId: filterTypeId
            });
            this.triggerEvent("changeTab", filterTypeId);
        },
        showSort: function showSort() {
            this.setData({
                showSortComp: !this.data.showSortComp,
                showMask: !this.data.showSortComp === true
            });
        },
        select: function select(e) {
            var selectType = e.currentTarget.dataset.item;
            this.showSort();
            this.setData({
                sortType: selectType.sort_type
            });
            this.triggerEvent("select", selectType);
        },
        closeMask: function closeMask() {
            this.setData({
                showMask: false,
                showSortComp: false
            });
        }
    }
});