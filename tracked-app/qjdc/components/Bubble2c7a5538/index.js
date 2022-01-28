var window = window || {};

window.webpackJsonp = require("../../bundle.js"), (window.webpackJsonp = window.webpackJsonp || []).push([ [ 27 ], {
    1114: function(t, e, o) {
        "use strict";
        o.r(e), function(t) {
            t.currentModuleId = "m2c7a5538", t.currentCtor = Component, t.currentResourceType = "component", 
            t.currentCtorType = "component", t.currentSrcMode = "wx", t.currentInject = {
                moduleId: "m2c7a5538",
                render: function() {
                    this._c("bubbleInfo.isShow", this.bubbleInfo.isShow) && (this._c("activeClassName", this.activeClassName), 
                    !this._c("mpxShow", this.mpxShow) && this._c("mpxShow", this.mpxShow), this._c("levelIcon", this.levelIcon) && this._c("levelIcon", this.levelIcon), 
                    this._c("flowText", this.flowText)), this._r();
                }
            };
            o(437);
            t.currentModuleId;
        }.call(this, o(11));
    },
    437: function(t, e, o) {
        "use strict";
        var n = o(2);
        Object(n.b)({
            properties: {
                bubbleInfo: {
                    type: Object
                },
                spotId: {
                    type: String,
                    value: ""
                }
            },
            computed: {
                activeClassName() {
                    return this.spotId;
                },
                flowText() {
                    var t;
                    return this.bubbleInfo && this.bubbleInfo.content && (t = this.bubbleInfo.content), 
                    t;
                }
            },
            data: {
                levelIcon: ""
            },
            method: {
                bubbleAction() {
                    this.bubbleInfo.action && "function" == typeof this.bubbleInfo.action && this.bubbleInfo.action();
                }
            }
        });
    }
}, [ [ 1114, 0 ] ] ]);
//# sourceMappingURL=index.js.map