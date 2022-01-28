var t = require("../../gsd-lib/event/index");

module.exports = Behavior({
    relations: {
        "../g-form-item/index": {
            type: "child"
        },
        "../g-form/index": {
            type: "ancestor"
        }
    },
    properties: {
        required: Boolean,
        disabled: Boolean,
        status: {
            type: String,
            observer: function(t) {
                this.setData({
                    _status: t
                });
            }
        },
        statusMessage: {
            type: String,
            observer: function(t) {
                this.setData({
                    _statusMessage: t
                });
            }
        }
    },
    data: {
        _status: "",
        _statusMessage: ""
    },
    methods: {
        getFormNode: function() {
            var t = this.getRelationNodes("../g-form/index");
            return t && t[0];
        },
        warn: function(e) {
            this.setData({
                _status: "warn",
                _statusMessage: e.message || "填写有误"
            }, function() {
                t.dispatch("g-form__warn");
            });
        }
    }
});