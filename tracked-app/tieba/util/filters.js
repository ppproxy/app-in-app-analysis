Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            err = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(err);
            _d = true;
            _e = err;
        } finally {
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally {
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) {
            return arr;
        } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
        } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
    };
}();

exports.postTime = postTime;

exports.numFormat = numFormat;

exports.playDuration = playDuration;

exports.xssFilter = xssFilter;

exports.colorWords = colorWords;

exports.filterTag = filterTag;

exports.removeTag = removeTag;

exports.countLen = countLen;

exports.typeFormat = typeFormat;

exports.formatTemp = formatTemp;

/**
 * @file 过滤器
 */
/**
 * 发贴时间
 *
 * @param  {number} timestamp 发贴时间戳
 * @return {string}           发贴时间
 */ function postTime(timestamp) {
    // 补全为13位
    var arrTimestamp = (timestamp + "").split("");
    for (var start = 0; start < 13; start++) {
        if (!arrTimestamp[start]) {
            arrTimestamp[start] = "0";
        }
    }
    timestamp = arrTimestamp.join("") * 1;
    var minute = 1e3 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    // let halfamonth = day * 15
        var month = day * 30;
    var now = new Date().getTime();
    var diffValue = now - timestamp;
    // 如果本地时间反而小于变量时间
        if (diffValue < 0) {
        return "不久前";
    }
    // 计算差异时间的量级
        var monthC = diffValue / month;
    var dayC = diffValue / day;
    var hourC = diffValue / hour;
    var minC = diffValue / minute;
    // 数值补0方法
        var zero = function zero(value) {
        if (value < 10) {
            return "0" + value;
        }
        return value;
    };
    // 使用
        if (new Date(timestamp).getFullYear() < new Date().getFullYear()) {
        // 超过1年，直接显示年月日
        return function() {
            var date = new Date(timestamp);
            return date.getFullYear() + "-" + zero(date.getMonth() + 1) + "-" + zero(date.getDate());
        }();
    } else if (monthC >= 1) {
        return function() {
            var date = new Date(timestamp);
            return zero(date.getMonth() + 1) + "-" + zero(date.getDate());
        }();
    } else if (dayC >= 1) {
        return parseInt(dayC, 10) + "天前";
    } else if (hourC >= 1) {
        return parseInt(hourC, 10) + "小时前";
    } else if (minC >= 1) {
        return parseInt(minC, 10) + "分钟前";
    }
    return "刚刚";
}

/**
 * 数字格式化
 *
 * @param  {number} value 数字
 * @return {string} value
 */ function numFormat() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    // 小于1万 正常展示
        if (value < 1e4) {
        return value;
    } else if (value < 1e5) {
        // 大于万小于十万 展现x.x万
        return (value / 1e4).toFixed(1) + "万";
    } else if (value < 1e8) {
        // 大于十万小于1亿 展示x万
        return (value / 1e4).toFixed() + "万";
    } else if (value < 1e9) {
        // 大于1亿小于十亿 展示x.x亿
        return (value / 1e8).toFixed(1) + "亿";
    }
    // 大于十亿 展现x亿
        return (value / 1e8).toFixed() + "亿";
}

/**
 * 播放时长
 *
 * @param  {number} time 时间
 * @return {string}      时间
 */ function playDuration(time) {
    var hour = parseInt(time / (60 * 60), 10);
    time = time % (60 * 60);
    var minute = parseInt(time / 60, 10);
    var second = time % 60;
    hour = hour > 9 ? hour : "0" + hour;
    minute = minute > 9 ? minute : "0" + minute;
    second = second > 9 ? second : "0" + second;
    if (hour > 0) {
        return hour + ":" + minute + ":" + second;
    }
    return minute + ":" + second;
}

/**
 * xss
 *
 * @param  {string} content 原字符串
 * @return {string}         替换后的结果
 */ function xssFilter(content) {
    return content.replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function colorWords(content, key) {
    var res = [];
    if (content) {
        var words = content.split(key);
        words.forEach(function(item, index) {
            res.push({
                words: item,
                color: false
            });
            if (index !== words.length - 1) {
                res.push({
                    words: key,
                    color: true
                });
            }
        });
    }
    return res;
}

function filterTag(msg) {
    // 去除HTML Tag
    msg = msg.replace(/<\/?[^>]*>/g, "");
    // 去除行尾空格
        msg = msg.replace(/[|]*\n/, "");
    // 去掉npsp
        msg = msg.replace(/&npsp;/gi, "");
    return msg;
}

/**
 * 过滤字符串中的标签
 * @param {string} str
 * @return {Array} 过滤标签后的字符串
 */ function removeTag(str) {
    var reg = /<\s*\/?\s*[a-zA-z_]([^>]*?["][^"]*["])*[^>"]*>/g;
    return str.replace(reg, "");
}

function countLen(str) {
    var num = 0;
    var reg = new RegExp("[一-龥]+");
    for (var i = 0; i < str.length; i++) {
        if (str[i].match(reg)) {
            num++;
        } else {
            num += .5;
        }
    }
    return Math.floor(num);
}

/**
 * 格式化楼层 content 数据
 * @param {Array} contents
 * @return {Array} 格式化的 content
 */ function typeFormat(contents) {
    var parentWitdh = getApp().globalData.systemInfo.windowWidth - 34;
    var outer = 0;
    // type 映射关系 , 1 => 链接, 2 => 表情, 3 => 图片,10 => 语音, 20 => 野表情, 21 => 小程序卡片
        var link = 1;
    var expression = 2;
    var pic = 3;
    var voice = 10;
    var wildExpression = 20;
    var card = 21;
    var types = [ link, pic, voice, wildExpression, card ];
    var result = [];
    contents.forEach(function(content, index) {
        // 图片类型提前计算好宽高
        if (content.type === pic) {
            var _content$bsize$split = content.bsize.split(","), _content$bsize$split2 = _slicedToArray(_content$bsize$split, 2), width = _content$bsize$split2[0], height = _content$bsize$split2[1];
            content.height = parentWitdh * height / width + "px";
            content.width = parentWitdh + "px";
        }
        // 如果是非文本类内容，直接 push 到数组中，不做任何处理
                if (types.includes(content.type)) {
            result.push([ content ]);
            return;
        }
        var len = result.length - 1;
        var node = void 0;
        // 文本类内容处理
                switch (content.type) {
          // 表情特殊处理
            case expression:
            node = {
                name: "img",
                attrs: {
                    class: "tbemo-img",
                    src: content.src
                }
            };
            break;

          default:
            // 表情之外的文本类内容
            node = {
                type: "text",
                attrs: {
                    class: "content-text"
                },
                // 预防content.text返回null
                text: content.text ? content.text.replace(/<br\/>/g, "") : ""
            };
        }
        // 判断前后是否可以连续且类型相同，如果是连续文本，就整合成一个
                if (index === outer + 1 && !types.includes(result[len][0].type)) {
            result[len].push(node);
            return;
        }
        result.push([ node ]);
        outer = index;
    });
    return result;
}

/**
 * 时间戳格式化天
 * @param {Number} temp 时间戳，单位秒
 * @return {String} 格式化的天数
 */ function formatTemp(temp) {
    if (typeof temp === "number" && !isNaN(temp)) {
        return Math.floor(temp / 60 / 60 / 24);
    }
    return "";
}