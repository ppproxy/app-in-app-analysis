Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = observable;

var _util = require("./util");

/**
 * @file    util
 * @author  wz
 */
/**
 * 使对象可观察，主要是storage
 * @param {object} subject  // 被观察主体
 */ function observable(subject, context) {
    subject.observers = [];
    // 观察者
    // 订阅观察者
        subject.subscribe = function(observer) {
        subject.observers.push(observer);
        return observer;
    };
    // 广播数据 publish/broadcast
        subject.multicast = function() {
        var subscriber = {};
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        [].concat(args).forEach(function(arg) {
            subscriber[arg] = (0, _util.getGlobalData)(arg, context);
        });
        subject.observers.forEach(function(observer) {
            observer && observer(subscriber);
        });
    };
    // 取消订阅
        subject.unsubscribe = function(subscription) {
        var index = subject.observers.indexOf(subscription);
        if (index >= 0) {
            subject.observers.splice(index, 1);
        }
    };
}