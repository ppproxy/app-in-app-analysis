Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

/**
 * @file banner.js
 * @author xiaowensheng
 */ function imageTrack(url) {
    wx.request({
        url: url,
        method: "get",
        defer: true
    });
}

function isPureObject(obj) {
    return obj && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && !Array.isArray(obj);
}

function deepClone(target) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }
    var objectSource = args.filter(function(source) {
        return isPureObject(source);
    });
    objectSource.forEach(function(source) {
        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                if (source[key] && _typeof(source[key]) === "object") {
                    if (!target[key]) {
                        target[key] = {};
                    }
                    target[key] = deepClone(target[key], source[key]);
                } else {
                    target[key] = source[key];
                }
            }
        }
    });
    return target;
}

var BannerTrack = function() {
    /**
   * 构造函数
   * @param {object} alsOptions
   * @param {object} envOptions
   */
    function BannerTrack() {
        var alsOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var envOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        _classCallCheck(this, BannerTrack);
        this.defaultAlsTrackParam = Object.assign({
            productId: 2,
            _client_type: 1,
            _os_type: "",
            _os_version: "",
            baiduId: "",
            ad: {}
        }, {
            productId: alsOptions.productId,
            _client_type: envOptions.ct,
            _os_type: envOptions.ot,
            _os_version: envOptions.ver,
            baiduId: envOptions.baiduId,
            ad: envOptions.ad || {}
        });
        this.viewportHeight = envOptions.viewportHeight;
        this._sentBannerTrack = [];
        this.traversal();
    }
    _createClass(BannerTrack, [ {
        key: "checkInViewport",
        value: function checkInViewport(rect) {
            return rect.top > -rect.height && rect.top < this.viewportHeight;
        }
    }, {
        key: "traversal",
        value: function traversal(ctx) {
            var self = this;
            var selectorQuery = void 0;
            if (ctx) {
                selectorQuery = wx.createSelectorQuery().in(ctx);
            } else {
                selectorQuery = wx.createSelectorQuery();
            }
            selectorQuery.selectAll(".t-banner").boundingClientRect();
            selectorQuery.exec(function(res) {
                res && res[0] && Array.isArray(res[0]) && res[0].forEach(function(banner) {
                    if (self._sentBannerTrack.indexOf(banner.id) === -1 && self.checkInViewport(banner)) {
                        var metadata = banner.dataset.metadata;
                        self._sentBannerTrack.push(banner.id);
                        try {
                            self.send(metadata);
                        } catch (e) {// ignore
                        }
                    }
                });
            });
        }
    }, {
        key: "send",
        value: function send(metadata) {
            this.sendBannerExposureTrack(metadata);
            this.sendBannerAlsExposureTrack(metadata);
        }
    }, {
        key: "sendBannerExposureTrack",
        value: function sendBannerExposureTrack(metadata) {
            var showUrls = metadata.content && metadata.content.show_urls || [];
            var n = 0;
            showUrls.forEach(function(item) {
                setTimeout(function() {
                    imageTrack(item.url);
                }, 50 * n++);
            });
        }
    }, {
        key: "sendBannerAlsExposureTrack",
        value: function sendBannerAlsExposureTrack(metadata) {
            var extraParam = metadata.content && metadata.content.extra_param;
            var params = deepClone({}, this.defaultAlsTrackParam, {
                ad: {
                    da_type: 3,
                    extra_param: extraParam
                }
            });
            this.sendBannerAlsTrack(params);
        }
    }, {
        key: "sendBannerAlsTrack",
        value: function sendBannerAlsTrack(params) {
            params.ad = JSON.stringify([ params.ad ]);
            var paramArr = [];
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    var value = params[key];
                    paramArr.push(key + "=" + encodeURIComponent(value));
                }
            }
            var url = "https://als.baidu.com/clog/clog?" + paramArr.join("&") + "&_rnd=" + Date.now();
            wx.request({
                url: url,
                method: "get",
                defer: true
            });
        }
    }, {
        key: "handleBannerClickTrack",
        value: function handleBannerClickTrack(type, locate, metadata) {
            // 如果是广告，需要单独访问 parallel_charge_url 来完成计费，跳转则不会，因为跳转链接本身就是计费链接
            if (type === "download") {
                try {
                    var url = metadata.content.ad_common.parallel_charge_url;
                    imageTrack(url);
                } catch (error) {}
            }
            this.sendBannerAlsClickTrack(locate, metadata);
        }
    }, {
        key: "sendBannerAlsClickTrack",
        value: function sendBannerAlsClickTrack(locate, metadata) {
            var extraParam = metadata.content && metadata.content.extra_param;
            var params = deepClone({}, this.defaultAlsTrackParam, {
                ad: {
                    da_type: 2,
                    da_area: locate || "card",
                    extra_param: extraParam
                }
            });
            this.sendBannerAlsTrack(params);
        }
    } ]);
    return BannerTrack;
}();

exports.default = BannerTrack;