var e = getApp(), t = e.request, r = e.config;

exports.getRegionData = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.regionUUID;
    return t({
        url: "/uum/api/region/list",
        method: "POST",
        data: {
            pageNo: 1,
            pageSize: 9999,
            sortBy: "sortNumber",
            order: "ASC",
            status: "1",
            parentId: e
        }
    });
};