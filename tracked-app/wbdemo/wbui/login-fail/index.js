var e = require("../../9C7143E2ACE07ADFFA172BE5A541A2D7.js");

Component({
    properties: {
        model: {
            type: Object,
            value: {}
        },
        theme: {
            type: String,
            value: "default"
        }
    },
    data: {},
    ready: function() {
        e.exec(this, "ready", {});
    },
    methods: {
        cancel: function(t) {
            e.exec(this, "cancel", t);
        },
        smslogin: function(t) {
            e.exec(this, "smslogin", t);
        },
        wxlogin: function(t) {
            e.exec(this, "wxlogin", t);
        }
    }
});