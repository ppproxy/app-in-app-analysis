var t = getApp(), e = t.request;

t.config;

exports.testAPI = function() {
    return e({
        url: "https://www.qq.com"
    });
};