/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var serialize = exports.serialize = function(e) {
    var r = encodeURIComponent;
    return Object.keys(e).sort().map(function(t) {
        return r(t) + "=" + e[t];
    }).join("&");
};