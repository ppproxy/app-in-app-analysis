var _util = require("../../util/util");

Component({
    properties: {
        naviDatas: {
            type: Array,
            value: [],
            observer: function observer(newdata, olddata) {
                var mydata = [];
                newdata.forEach(function(item, index) {
                    for (var key in item) {
                        var obj = {};
                        obj.name = item[key];
                        obj.key = key;
                        obj.active = index === 0;
                        mydata.push(obj);
                    }
                });
                this.setData({
                    naviInitData: mydata
                });
            }
        }
    },
    data: {
        isShowMore: false,
        naviInitData: [],
        scrollLeft: 0,
        currOffset: 17
    },
    created: function created() {
        this.mid = getApp().globalData.systemInfo.windowWidth / 2;
    },
    attached: function attached() {},
    methods: {
        changeMove: function changeMove(index) {
            var _this = this;
            // 判断在mid的左右
                        this.getOffset("#scrollto" + index).then(function(res) {
                if (res < _this.mid) {
                    // 左边
                    var offset = _this.mid - res;
                    _this.setData({
                        currOffset: 20 - offset
                    });
                    _this.setData({
                        scrollIntoView: "mid-item"
                    });
                } else {
                    // 右边
                    var _offset = res - _this.mid;
                    _this.setData({
                        currOffset: _offset + 10
                    });
                    _this.setData({
                        scrollIntoView: "mid-item"
                    });
                }
            });
        },
        getOffset: function getOffset(id) {
            var _this2 = this;
            return new Promise(function(resolve, reject) {
                var query = _this2.createSelectorQuery();
                query.select(id).boundingClientRect();
                query.selectViewport().scrollOffset();
                query.exec(function(res) {
                    var currLeft = res[0].left;
                    resolve(currLeft);
                });
            });
        },
        toNavi: function toNavi(e) {
            var currActiveIndex = e.currentTarget.dataset.naviindex;
            var more = e.currentTarget.dataset.type;
            var data = e.currentTarget.dataset.navidata;
            this.changeMove(currActiveIndex);
            this.data.naviInitData.forEach(function(item, index) {
                if (index === currActiveIndex) {
                    item.active = true;
                } else {
                    item.active = false;
                }
            });
            if (more) {
                this.setData({
                    isShowMore: !this.data.isShowMore
                });
            }
            this.setData({
                naviInitData: this.data.naviInitData,
                isShowMore: false
            });
            // swan.showLoading({
            //     mask: true,
            //     title: '加载中'
            // });
                        this.triggerEvent("switchNavi", data);
            (0, _util.track)("index_tab", {
                obj_locate: data.name
            });
        },
        showMore: function showMore(e) {
            this.setData({
                isShowMore: !this.data.isShowMore
            });
        }
    }
});
/**
     * @file 微信顶部的导航栏
     */