Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.pbRequest = pbRequest;

exports.frsRequest = frsRequest;

var _url = require("./url");

var _util = require("./util");

var onfire = require("./onfire");

function pbRequest(query, scene, context) {
    if (!query || !query.tid || context.prefetchStatus === 1) {
        return;
    }
    context.prefetchStatus = 1;
    var params = {
        rn: 20,
        see_lz: 0,
        r: 0,
        pn: 0,
        fr: "smallapp",
        kz: query.tid,
        open_source: scene || "",
        calltype: ""
    };
    (0, _util.get)(_url.PB, params).then(function(res) {
        onfire.fireSync("pbRequestOK", res);
    }).catch(function(res) {
        context.prefetchStatus = 0;
        onfire.fireSync("pbRequestFail", res);
    });
}

function frsRequest(query, scene, context) {
    if (!query || !query.kw || context.prefetchStatus === 1) {
        return;
    }
    context.prefetchStatus = 1;
    var params = {
        kw: query.kw,
        pnum: 1,
        sort_type: 0,
        res_num: 20,
        default_pro: 1,
        open_source: scene || ""
    };
    (0, _util.get)(_url.FRS, params).then(function(res) {
        onfire.fireSync("frsRequestOK", res);
    }).catch(function(res) {
        context.prefetchStatus = 0;
        onfire.fireSync("frsRequestFail", res);
    });
}