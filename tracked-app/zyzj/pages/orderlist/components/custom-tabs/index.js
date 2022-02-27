(0, require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../m/zk/za")).default)({
    name: "custom-tabs",
    data: {
        currentView: 0,
        activeTab: 0
    },
    properties: {
        tabs: {
            type: Array,
            value: []
        },
        tabActiveTextColor: {
            type: String,
            value: "#000000"
        },
        tabInactiveTextColor: {
            type: String,
            value: "#000000"
        },
        tabBackgroundColor: {
            type: String,
            value: "#ffffff"
        }
    },
    observers: {
        activeTab: function() {
            this._init();
        }
    },
    ready: function() {},
    methods: {
        _init: function() {
            var t = this.data.tabs.length, e = this.data.activeTab;
            if (0 !== t) {
                var a = e - 1;
                a < 0 && (a = 0), a > t - 1 && (a = t - 1), this.setData({
                    currentView: a
                });
            }
        },
        handleTabClick: function(t) {
            var e = t.currentTarget.dataset.index;
            this.setData({
                activeTab: e
            });
            var a = this.data.tabs[e] || {};
            this.triggerEvent("handleTabClick", {
                index: e,
                tab: a
            });
        }
    }
});