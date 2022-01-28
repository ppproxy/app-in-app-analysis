var t = require("../../../../@babel/runtime/helpers/objectSpread2");

getApp().sdk;

Page({
    data: {
        supportMode: []
    },
    onLoad: function(t) {
        this.successEvent = t.successEvent, this.failEvent = t.failEvent, this.checkAuthSupport();
    },
    checkAuthSupport: function() {
        var t = this;
        this.promiseApi("checkIsSupportSoterAuthentication").then(function(e) {
            console.log("checkIsSupportSoterAuthentication", e), Array.isArray(e.supportMode) && t.setData({
                supportMode: e.supportMode
            });
        }).catch(function(t) {
            console.log("error", t);
        });
    },
    handleTap: function() {
        var t = this;
        this.promiseApi("startSoterAuthentication", {
            requestAuthModes: this.data.supportMode,
            authContent: "生物认证",
            challenge: "sid"
        }).then(function(e) {
            Event.dispatch(t.successEvent, e);
        }).catch(function(e) {
            Event.dispatch(t.failEvent, e);
        });
    },
    promiseApi: function(e, o) {
        return new Promise(function(s, n) {
            wx[e](t(t({}, o), {}, {
                success: s,
                fail: n
            }));
        });
    }
});