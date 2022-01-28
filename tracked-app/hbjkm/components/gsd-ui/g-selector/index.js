Component({
    properties: {
        dataList: {
            type: Array,
            value: []
        },
        visible: {
            type: Boolean,
            value: !0
        },
        cancelText: {
            type: String,
            value: "取消"
        },
        cancelStyle: {
            type: String,
            value: ""
        },
        confirmText: {
            type: String,
            value: "确定"
        },
        confirmStyle: {
            type: String,
            value: ""
        },
        selectorHeaderStyle: {
            type: String,
            value: ""
        },
        indicatorStyle: {
            type: String,
            value: ""
        },
        maskStyle: {
            type: String,
            value: ""
        },
        itemStyle: {
            type: String,
            value: ""
        },
        defaultValue: {
            type: Array,
            value: []
        }
    },
    data: {
        selectedVal: []
    },
    methods: {
        bindChange: function(e) {
            var t = this, a = e.detail.value.map(function(e, a) {
                return t.data.dataList[a][e];
            });
            this.setData({
                selectedVal: a
            });
        },
        handleClose: function() {
            this.setData({
                visible: !1
            });
        },
        confirm: function() {
            var e = this.data.selectedVal;
            this.triggerEvent("select", {
                value: e.length > 0 ? e : this.defaultSelectedVal()
            }), this.handleClose();
        },
        defaultSelectedVal: function() {
            var e = this.properties.defaultValue;
            return this.data.dataList.map(function(t, a) {
                return t[e[a] || 0];
            });
        }
    }
});