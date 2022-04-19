Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};

exports.adaptOnInit = adaptOnInit;

/**
 * @file 合并options，兼容不支持onInit情况
 * @author: lss
 */ function adaptOnInit(pageOptions) {
    var pageOnInit = pageOptions.onInit;
    var onInitCalled = false;
    var myOptions = _extends({}, pageOptions);
    if (pageOnInit) {
        myOptions.onInit = function(option) {
            onInitCalled = true;
            pageOnInit && pageOnInit.call(this, option);
        };
    }
    myOptions.onPrefetch = function(_ref) {
        var query = _ref.query, scene = _ref.scene, trigger = _ref.trigger;
        pageOptions.onPrefetch && pageOptions.onPrefetch.call(this, {
            query: query,
            scene: scene,
            trigger: trigger
        });
    };
    myOptions.onLoad = function(option) {
        if (!onInitCalled) {
            pageOnInit && pageOnInit.call(this, option);
        }
        pageOptions.onLoad && pageOptions.onLoad.call(this, option);
    };
    return myOptions;
}