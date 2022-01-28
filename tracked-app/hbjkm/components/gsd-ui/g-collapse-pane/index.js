Component({
    relations: {
        "../g-collapse/index": {
            type: "parent"
        }
    },
    properties: {
        title: String,
        disabled: Boolean,
        key: String
    },
    data: {
        _isCollapse: !0
    },
    methods: {
        _getCollapseNode: function() {
            return this.getRelationNodes("../g-collapse/index")[0];
        },
        _setCollapse: function(e) {
            this.properties.key;
            var t = this.data._isCollapse;
            this._getCollapseNode();
            e = void 0 === e ? !t : e, this.setData({
                _isCollapse: e
            });
        },
        handleToggleCollapse: function() {
            var e = this.properties, t = e.disabled, s = e.key, l = this._getCollapseNode();
            t || l._setPaneCollapse(s);
        }
    }
});