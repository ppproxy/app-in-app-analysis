var _require = require("./preRequest"), pbRequest = _require.pbRequest, frsRequest = _require.frsRequest;

// 注册app同app.onlaunch，冷启动时执行一次;注册page同page.onshow,热启动执行
// app对应的onPrefetch里面的this对应app的上下文；page对应的onPrefetch里面的this对应page的上下文；在初始化的时候会把对应的属性添加进去
registerOnPrefetch("app", function onPrefetch(_ref) {
    // todo: 一些全局变量可以统一在这里添加在app的上下文
    var path = _ref.path, query = _ref.query, scene = _ref.scene, trigger = _ref.trigger;
});

registerOnPrefetch("pages/pb/pb", function onPrefetch(_ref2) {
    var query = _ref2.query, scene = _ref2.scene, trigger = _ref2.trigger;
    if (trigger === "click") {
        pbRequest(query, scene, this);
    }
});

registerOnPrefetch("pages/frs/frs", function onPrefetch(_ref3) {
    var query = _ref3.query, scene = _ref3.scene, trigger = _ref3.trigger;
    if (trigger === "click") {
        frsRequest(query, scene, this);
    }
});

// 兼容阿拉丁错误路径
registerOnPrefetch("pages/pb/pb/", function onPrefetch(_ref4) {
    var query = _ref4.query, scene = _ref4.scene, trigger = _ref4.trigger;
    if (trigger === "click") {
        pbRequest(query, scene, this);
    }
});

registerOnPrefetch("pages/frs/frs/", function onPrefetch(_ref5) {
    var query = _ref5.query, scene = _ref5.scene, trigger = _ref5.trigger;
    if (trigger === "click") {
        frsRequest(query, scene, this);
    }
});