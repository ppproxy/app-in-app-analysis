var t = {
    _list: [],
    _keys: [],
    _isTouch: !1,
    _currentKey: "",
    _scrollTop: 0,
    _scrollViewHeight: 0
};

Component({
    __firstIndexTop__: 0,
    __indexHeight__: 0,
    __itemListTop__: [],
    __headerHeight__: 0,
    options: {
        multipleSlots: !0
    },
    externalClasses: [ "component-class" ],
    properties: {
        list: {
            type: Array,
            observer: function() {
                this.initLayout(), this.initList();
            },
            __type__: function(t) {
                return t;
            }
        }
    },
    data: t,
    ready: function() {
        this.initLayout();
    },
    methods: {
        initLayout: function() {
            var t = this, e = this.createSelectorQuery();
            e.selectViewport().boundingClientRect(), e.select(".list__header").boundingClientRect(), 
            e.select(".index__list__key").boundingClientRect(), e.selectAll(".list__item").boundingClientRect(), 
            e.exec(function(e) {
                console.log(e);
                var i = e[0], s = e[1], _ = e[2], n = e[3];
                if (_ && i && n) {
                    var o = i.height - s.height;
                    t.__firstIndexTop__ = _.top, t.__indexHeight__ = _.height, t.__headerHeight__ = s.height, 
                    t.__itemListTop__ = n.map(function(t) {
                        return t.top;
                    }), t.setData({
                        _scrollViewHeight: o
                    });
                }
            });
        },
        initList: function() {
            var t = this.properties.list, e = Array.from(new Set(t.map(function(t) {
                return t.key;
            }))), i = e.map(function(e) {
                var i = {
                    key: e,
                    list: []
                };
                return t.forEach(function(t) {
                    t.key === e && i.list.push(t);
                }), i;
            });
            this.setData({
                _keys: e,
                _list: i
            });
        },
        handleTouch: function(t) {
            var e = this.__firstIndexTop__, i = this.__indexHeight__, s = this.__itemListTop__, _ = this.data, n = _._currentKey, o = _._keys, r = _._isTouch;
            if (t.touches.length > 0 && e > 0 && i > 0) {
                var h = t.touches[0].clientY, a = Math.ceil((h - e) / i) - 1, c = o[a];
                c && (this.setData({
                    _scrollTop: s[a] - this.__headerHeight__
                }), n !== c && (wx.vibrateShort(), this.setData({
                    _currentKey: c
                }))), r || this.setData({
                    _isTouch: !0
                });
            }
        },
        handleTouchEnd: function(t) {
            this.setData({
                _isTouch: !1
            });
        },
        handleChoose: function(t) {
            this.triggerEvent("choose", t.currentTarget.dataset.item);
        }
    }
}), module.exports = {};