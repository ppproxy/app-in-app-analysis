Component({
    relations: {
        "../g-collapse-pane/index": {
            type: "child"
        }
    },
    properties: {
        accordion: Boolean,
        defaultActiveKeys: {
            type: Array,
            value: [],
            __type__: function(e) {
                return e;
            }
        },
        activeKeys: {
            type: Array,
            value: [],
            __type__: function(e) {
                return e;
            },
            observer: function() {
                this.setByActiveKeys();
            }
        }
    },
    ready: function() {
        this.setByActiveKeys();
    },
    methods: {
        _getAllCollapsePane: function() {
            return this.getRelationNodes("../g-collapse-pane/index");
        },
        _setPaneCollapse: function(e) {
            var t = this, n = this.properties.accordion;
            this._getAllCollapsePane().forEach(function(t) {
                n ? t._setCollapse(t.properties.key !== e) : t.properties.key === e && t._setCollapse();
            }), wx.nextTick ? wx.nextTick(function() {
                return t.triggerChange();
            }) : setTimeout(function() {
                return t.triggerChange();
            }, 0);
        },
        setByActiveKeys: function() {
            var e = this.properties, t = e.defaultActiveKeys, n = e.accordion, i = this.properties.activeKeys, r = this._getAllCollapsePane();
            i && 0 !== i.length || (i = t), n && (i = i.length > 0 ? [ t[0] ] : [ r[0].properties.key ]), 
            r.forEach(function(e) {
                e._setCollapse(!i.includes(e.properties.key));
            });
        },
        triggerChange: function() {
            var e = this._getAllCollapsePane();
            this.triggerEvent("change", {
                value: e.filter(function(e) {
                    return !e.data._isCollapse;
                }).map(function(e) {
                    return e.properties.key;
                })
            });
        }
    }
});