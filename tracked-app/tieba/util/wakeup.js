Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

exports.getSchema = getSchema;

exports.generateToken = generateToken;

var _util = require("../util/util");

// 获取schema,config格式参照tieba-new-wakeup
function getSchema(config) {
    var systemInfo = (0, _util.getGlobalData)("systemInfo");
    var initPage = (0, _util.getPageFromPath)((0, _util.getGlobalData)("initPath")) || "";
    var param = config.param || {};
    var sampleId = getSid(param.custom);
    var custom = param.custom;
    var source = "shoubai";
    var locate = param.locate || "";
    var browser = systemInfo ? systemInfo.host : "";
    // const qd = param.qd || getAndroidSource(config.androidDownUrl) || '';
        var schemaLocateParams = getSchemaLocateParams(config);
    var schema = "com.baidu.tieba://unidispatch/" + config.page + "?has_token=1&obj_source=" + source;
    schema += browser ? "&obj_param2=" + browser : "";
    schema += sampleId ? "&wise_sample_id=" + sampleId : "";
    schema += initPage ? "&obj_name=" + initPage : "";
    schema += "&qd=scheme";
    schema += schemaLocateParams;
    if (custom && (typeof custom === "undefined" ? "undefined" : _typeof(custom)) === "object") {
        Object.keys(custom).forEach(function(key) {
            if (custom[key]) {
                schema += "&" + key + "=" + custom[key];
            }
        });
    }
    // 处理extdata，为了防止传入的extdata没有序列化
        if (param.extdata) {
        if (typeof param.extdata === "string") {
            schema += "&extdata=" + param.extdata;
        } else if (_typeof(param.extdata) === "object") {
            schema += "&extdata=" + JSON.stringify(param.extdata);
        }
    } else {
        schema += param.locate ? "&obj_locate=" + locate + (sampleId ? "@sid" + sampleId : "") : "";
    }
    return schema;
}

function generateToken(config) {
    if (config.page === "tbwebview") {
        console.log("无法生成tbwebview的token！！！tbwebview页面需要携带h5的url，可能会有超长的情况，所以需要后端下发token哦");
        return "";
    }
    var token = "";
    var source = "shoubai";
    var systemInfo = (0, _util.getGlobalData)("systemInfo");
    var param = config.param || {};
    var androidSource = config.androidSource || getAndroidSource(config.androidDownUrl);
    var objSource = getObjSource(source);
    var objParam1 = getObjParam1(param.custom);
    var browser = systemInfo ? systemInfo.host : "";
    var initPage = param.originSource || (0, _util.getPageFromPath)((0, _util.getGlobalData)("initPath")) || "";
    var locate = param.locate && param.locate.split("@sid")[0];
    var sampleId = getSid(param.custom);
    token += getPageParams(config);
    token += sampleId ? "@sid" + sampleId : "";
    token += androidSource ? "@c" + androidSource : "";
    token += objSource ? "@p" + objSource : "";
    token += objParam1 ? "@1p" + objParam1 : "";
    token += browser ? "@2p" + browser : "";
    token += initPage ? "@m" + initPage : "";
    token += locate ? "@lo" + locate : "";
    // server解析时，识别到_会被认定为redis存储，md5生成的token，所以前端将_替换成@@ya，server会将收到的@@ya再转换为_传给端上；
    // 由于端上token不允许存在特殊字符，所以需要将特殊字符进行转换 目前只有三种:_对应@@ya -对应@@yb .对应@@yc
        token = token.replace(/\_/g, "@@ya");
    token = token.replace(/\-/g, "@@yb");
    token = token.replace(/\./g, "@@yc");
    token = shuffleToken(token);
    return "$" + token + "$";
}

// 从androidDownUrl中获取渠道号
function getAndroidSource(androidDownUrl) {
    if (!androidDownUrl) {
        return "";
    }
    var reg = /(\d*.)\.apk/;
    var androidSource = reg.exec(androidDownUrl)[1] || "";
    return androidSource;
}

// 获取(obj_source)来源缩写值
function getObjSource(ObjSource) {
    var objSourceList = {
        weixin: "c",
        QQ: "Q",
        wise: "w",
        shoubai: "b",
        tbShareH5: "h",
        pc: "p",
        zhongjianye: "z"
    };
    return objSourceList[ObjSource] || "";
}

// 获取objParam1对应值
function getObjParam1(custom) {
    if (!custom) {
        return "";
    }
    var objParam1List = {
        tuwen: 1,
        shipin: 2,
        sph: 3
    };
    return objParam1List[custom.obj_param1] || "";
}

// 获取sid
function getSid(custom) {
    var sid = (0, _util.getGlobalData)("ubs_sample_ids") || "";
    if (!sid && custom && custom.wise_sample_id) {
        sid = custom.wise_sample_id;
    }
    return sid;
}

// 加密token 说明文档：http://wiki.baidu.com/pages/viewpage.action?pageId=1522299317
function shuffleToken(token) {
    var result = [];
    for (var i = token.length - 1; i >= 1; i -= 2) {
        result.push(token.charAt(i - 1), token.charAt(i));
    }
    if (i === 0) {
        result.push(token.charAt(0));
    }
    return result.join("");
}

function getPageParams(config) {
    var param = config.param || {};
    var paramStr = "";
    switch (config.page) {
      case "pb":
        if (param.tid) {
            paramStr += "t" + param.tid;
        } else {
            paramStr += "d" + param.ori_ugc_tid + "@d" + param.ori_ugc_nid + "@n" + param.ori_ugc_type;
            if (param.ori_ugc_vid) {
                paramStr += "@v" + param.ori_ugc_vid;
            }
        }
        break;

      case "frs":
        // 必须使用fid方式生成token，由于吧名编码后会存在特殊字符，（除了数字字母.-_ 其余都属于特殊字符），所以无法用吧名生成token；
        paramStr += param.fid ? "f" + param.fid : "";
        break;

      case "homepage":
        paramStr += "h";
        break;

      case "topicdetail":
        paramStr += "o" + param.topic_id;
        break;

      case "item":
        paramStr += param.item_id ? "i" + param.item_id : "";
        break;

      case "usercenter":
        paramStr += param.portrait ? "u" + param.portrait : "";
        break;

      case "voiceRoom":
        paramStr += "v" + param.room_id;
        break;

      case "searchResultPage":
        paramStr += "s" + param.query;
        break;

      default:
        break;
    }
    return paramStr;
}

// schema中定位相关的参数
function getSchemaLocateParams(config) {
    var param = config.param || {};
    var paramStr = "";
    if (config.page === "pb") {
        if (param.tid) {
            paramStr += "&tid=" + param.tid;
        } else {
            paramStr += "&ori_ugc_nid=" + param.ori_ugc_nid + "&ori_ugc_tid=" + param.ori_ugc_tid + "&ori_ugc_type=" + param.ori_ugc_type;
            if (param.ori_ugc_vid) {
                paramStr += "&ori_ugc_vid=" + param.ori_ugc_vid;
            }
        }
    } else if (config.page === "frs" && param.kw) {
        // 针对IOS的手百，吧名要单独encode一次
        paramStr += config.isIos && config.isShoubai ? "&kw=" + encodeURIComponent(param.kw) : "&kw=" + param.kw;
    } else if (config.page === "tbwebview" && param.url) {
        paramStr += "&url=" + param.url;
    } else if (config.page === "usercenter" && param.portrait) {
        paramStr += "&portrait=" + param.portrait;
    } else if (config.page === "topicdetail" && param.topic_id) {
        paramStr += "&topic_id=" + param.topic_id;
    } else if (config.page === "item" && param.item_id) {
        paramStr += "&item_id=" + param.item_id;
    } else if (config.page === "voiceRoom" && param.room_id) {
        paramStr += "&room_id=" + param.room_id;
    } else if (config.page === "searchResultPage" && param.query) {
        paramStr += "&query=" + param.query;
    }
    return paramStr;
}