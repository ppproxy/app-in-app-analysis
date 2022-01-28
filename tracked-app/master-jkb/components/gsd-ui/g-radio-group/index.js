Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../behaviors/formCheck"), r = require("../behaviors/formController");

Component({
    behaviors: [ e, r ],
    relations: {
        "../g-form/index": {
            type: "ancestor"
        }
    }
});