var e = getApp(), t = (e.request, e.config), a = e.wxp;

exports.fetchOverviewData = function() {
    return a.request({
        url: t.domain + "/qqnews/yqinfo/GetData?name=disease_china_total"
    });
};