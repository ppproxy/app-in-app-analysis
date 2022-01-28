Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../behaviors/primarySecondButton");

Component({
    options: {
        multipleSlots: !0
    },
    behaviors: [ e ],
    properties: {
        disabled: Boolean,
        secondDisabled: Boolean,
        fixed: Boolean,
        agree: Boolean,
        autoAgree: Boolean,
        buttonList: Array,
        direction: {
            type: String,
            value: "horizontal"
        }
    },
    data: {
        _agreeChecked: !1
    },
    ready: function() {
        this.properties.autoAgree && this.setData({
            _agreeChecked: this.properties.autoAgree
        });
    },
    methods: {
        handleAgreeChange: function(e) {
            this.setData({
                _agreeChecked: e.detail.value
            });
        },
        handelButtonListTap: function(e) {
            e.currentTarget.dataset.item && this.triggerEvent("buttonListTap", {
                item: e.currentTarget.dataset.item
            });
        }
    }
});