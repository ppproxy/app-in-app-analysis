var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function() {
    var t = {}, o = function(e, o, r) {
        var n = {
            exports: {},
            _tempexports: {}
        };
        t[e] = {
            status: 0,
            func: o,
            req: r,
            m: n
        };
    }, r = function(o, r) {
        if (!t[o]) return require(r);
        if (!t[o].status) {
            var n = t[o].m;
            n._exports = n._tempexports;
            var a = Object.getOwnPropertyDescriptor(n, "exports");
            a && a.configurable && Object.defineProperty(n, "exports", {
                set: function(t) {
                    "object" === (void 0 === t ? "undefined" : e(t)) && t !== n._exports && (n._exports.__proto__ = t.__proto__, 
                    Object.keys(t).forEach(function(e) {
                        n._exports[e] = t[e];
                    })), n._tempexports = t;
                },
                get: function() {
                    return n._tempexports;
                }
            }), t[o].status = 1, t[o].func(t[o].req, n, n.exports);
        }
        return t[o].m.exports;
    };
    return o(1582902163595, function(e, t, o) {
        o.__esModule || Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = e("./promise");
        Object.defineProperty(o, "promisify", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return r.promisify;
            }
        }), Object.defineProperty(o, "promisifyAll", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return r.promisifyAll;
            }
        });
    }, function(e) {
        return r({
            "./promise": 1582902163596
        }[e], e);
    }), o(1582902163596, function(t, o, r) {
        function n(t) {
            if (!t || "object" !== (void 0 === t ? "undefined" : e(t))) return !1;
            var o = [ "success", "fail", "complete" ], r = !0, n = !1, a = void 0;
            try {
                for (var i, s = o[Symbol.iterator](); !(r = (i = s.next()).done); r = !0) if ("function" == typeof t[i.value]) return !0;
            } catch (e) {
                n = !0, a = e;
            } finally {
                try {
                    !r && s.return && s.return();
                } finally {
                    if (n) throw a;
                }
            }
            return !1;
        }
        function a(e) {
            return "function" != typeof e ? fn : function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return new Promise(function(o, r) {
                    e(Object.assign(t, {
                        success: o,
                        fail: r
                    }));
                });
            };
        }
        var i = t("./method").asyncMethods;
        r.__esModule || Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.promisifyAll = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            Object.keys(e).forEach(function(o) {
                var r = e[o];
                "function" == typeof r && i.indexOf(o) >= 0 ? t[o] = function(e) {
                    if (!n(e)) return a(r)(e);
                    r(e);
                } : t[o] = r;
            });
        }, r.__esModule || Object.defineProperty(r, "__esModule", {
            value: !0
        });
        r.promisify = a;
    }, function(e) {
        return r({
            "./method": 1582902163597
        }[e], e);
    }), o(1582902163597, function(e, t, o) {
        o.__esModule || Object.defineProperty(o, "__esModule", {
            value: !0
        });
        o.asyncMethods = [ "canvasGetImageData", "canvasPutImageData", "canvasToTempFilePath", "setEnableDebug", "startAccelerometer", "stopAccelerometer", "getBatteryInfo", "getClipboardData", "setClipboardData", "startCompass", "stopCompass", "addPhoneContact", "startGyroscope", "stopGyroscope", "startBeaconDiscovery", "stopBeaconDiscovery", "getBeacons", "startLocalServiceDiscovery", "stopLocalServiceDiscovery", "startDeviceMotionListening", "stopDeviceMotionListening", "getNetworkType", "makePhoneCall", "scanCode", "getSystemInfo", "vibrateShort", "vibrateLong", "getExtConfig", "chooseLocation", "getLocation", "openLocation", "chooseMessageFile", "loadFontFace", "chooseImage", "previewImage", "getImageInfo", "saveImageToPhotosAlbum", "compressImage", "chooseVideo", "saveVideoToPhotosAlbum", "downloadFile", "request", "connectSocket", "closeSocket", "sendSocketMessage", "uploadFile", "login", "checkSession", "chooseAddress", "authorize", "addCard", "openCard", "chooseInvoice", "chooseInvoiceTitle", "getUserInfo", "requestPayment", "getWeRunData", "showModal", "showToast", "hideToast", "showLoading", "hideLoading", "showActionSheet", "pageScrollTo", "startPullDownRefresh", "stopPullDownRefresh", "setBackgroundColor", "setBackgroundTextStyle", "setTabBarBadge", "removeTabBarBadge", "showTabBarRedDot", "hideTabBarRedDot", "showTabBar", "hideTabBar", "setTabBarStyle", "setTabBarItem", "setTopBarText", "saveFile", "openDocument", "getSavedFileList", "getSavedFileInfo", "removeSavedFile", "getFileInfo", "getStorage", "setStorage", "removeStorage", "clearStorage", "getStorageInfo", "closeBLEConnection", "closeBluetoothAdapter", "createBLEConnection", "getBLEDeviceCharacteristics", "getBLEDeviceServices", "getBluetoothAdapterState", "getBluetoothDevices", "getConnectedBluetoothDevices", "notifyBLECharacteristicValueChange", "openBluetoothAdapter", "readBLECharacteristicValue", "startBluetoothDevicesDiscovery", "stopBluetoothDevicesDiscovery", "writeBLECharacteristicValue", "getHCEState", "sendHCEMessage", "startHCE", "stopHCE", "getScreenBrightness", "setKeepScreenOn", "setScreenBrightness", "connectWifi", "getConnectedWifi", "getWifiList", "setWifiList", "startWifi", "stopWifi", "getBackgroundAudioPlayerState", "playBackgroundAudio", "pauseBackgroundAudio", "seekBackgroundAudio", "stopBackgroundAudio", "getAvailableAudioSources", "startRecord", "stopRecord", "setInnerAudioOption", "playVoice", "pauseVoice", "stopVoice", "getSetting", "openSetting", "getShareInfo", "hideShareMenu", "showShareMenu", "updateShareMenu", "checkIsSoterEnrolledInDevice", "checkIsSupportSoterAuthentication", "startSoterAuthentication", "navigateBackMiniProgram", "navigateToMiniProgram", "setNavigationBarTitle", "showNavigationBarLoading", "hideNavigationBarLoading", "setNavigationBarColor", "redirectTo", "reLaunch", "navigateTo", "switchTab", "navigateBack" ];
    }, function(e) {
        return r({}[e], e);
    }), r(1582902163595);
}();