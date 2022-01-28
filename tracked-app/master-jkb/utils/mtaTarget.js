var t = require("./mta_analysis.js");

module.exports = {
    newspapers: function(e) {
        try {
            var s = e.eventId;
            t.Event.stat(s, {});
        } catch (t) {}
    }
};