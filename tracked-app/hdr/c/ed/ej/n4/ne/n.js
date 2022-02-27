var e = require("../../../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../../../m/zk/za"));

e(require("../../../../../m/5y"));

(0, t.default)({
    name: "benefit-free",
    properties: {
        summaryList: {
            type: Array,
            value: []
        },
        themeColor: {
            type: String,
            value: ""
        },
        memberCardTemplate: {
            type: Object,
            value: {}
        }
    },
    data: {
        level: "",
        styles: {
            level1: "n3s",
            level2: "n3f",
            level3: "n37",
            level4: "n3k"
        }
    },
    ready: function() {
        this._init();
    },
    observers: {
        summaryList: function() {
            this._init();
        }
    },
    methods: {
        _init: function() {
            var e = this.data.summaryList;
            this.setData({
                level: this._getLevel(e.length)
            });
        },
        _getLevel: function(e) {
            return [ 1 ].indexOf(e) > -1 ? "level1" : [ 2 ].indexOf(e) > -1 ? "level2" : [ 3, 5, 6 ].indexOf(e) > -1 ? "level3" : [ 4, 7, 8 ].indexOf(e) > -1 ? "level4" : void 0;
        }
    }
});