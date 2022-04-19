Object.defineProperty(exports, "__esModule", {
    value: true
});

/**
 * 请求接口路径
 * @file url
 * @author wuzhen
 */ var TB_DOMAIN = exports.TB_DOMAIN = "https://tieba.baidu.com";

var IMG_CDN = exports.IMG_CDN = "https://tb4.bdstatic.com/xcx";

// 用于测试，先留着
// export const TB_DOMAIN = 'http://lmy001.tieba.otp.baidu.com';
var domain = exports.domain = TB_DOMAIN + "/mo/q";

var SMALL_APP = exports.SMALL_APP = domain + "/smallapp";

var DEL = exports.DEL = domain + "/m";

var AGREE = exports.AGREE = domain + "/submit/opAgree";

var APUB = exports.APUB = domain + "/apubpost";

var ADD_STORE = exports.ADD_STORE = domain + "/post_addstore";

var RM_STORE = exports.RM_STORE = domain + "/post_rmstore";

var ALBUM = exports.ALBUM = domain + "/album";

var FOLLOW = exports.FOLLOW = domain + "/favolike";

var PLAY_STAT = exports.PLAY_STAT = domain + "/submit/playStat";

var PB = exports.PB = domain + "/pb/page/m";

var LZL = exports.LZL = domain + "/post/floor";

var LZL_FLR = exports.LZL_FLR = domain + "/flr";

var INDEX = exports.INDEX = SMALL_APP + "/page";

var FORUM = exports.FORUM = SMALL_APP + "/forumPage";

// pb 页 feed 推荐流
var PB_RECOMMENDATION = exports.PB_RECOMMENDATION = domain + "/recommendpb/recomSiteTids";

var SYNC = exports.SYNC = SMALL_APP + "/sync";

var GROUP_MSG = exports.GROUP_MSG = SMALL_APP + "/getGroupMsg";

var LOG = exports.LOG = SMALL_APP + "/log";

var SHARE = exports.SHARE = SMALL_APP + "/getShareImg";

var UNSET_TOP = exports.UNSET_TOP = SMALL_APP + "/unsettop";

var SET_TOP = exports.SET_TOP = SMALL_APP + "/settop";

var MSG = exports.MSG = SMALL_APP + "/msglist";

var TOP_POSTS = exports.TOP_POSTS = SMALL_APP + "/getTopAgreePost";

var RECENT_TIDS = exports.RECENT_TIDS = SMALL_APP + "/getRecentTid";

var AT_LIST = exports.AT_LIST = SMALL_APP + "/atme";

var AGREE_LIST = exports.AGREE_LIST = SMALL_APP + "/agreeme";

var REPLY_LIST = exports.REPLY_LIST = SMALL_APP + "/replyme";

var MY_STORE = exports.MY_STORE = SMALL_APP + "/threadstore";

var MY_POST = exports.MY_POST = SMALL_APP + "/userpost";

var GET_SHARE_IMG = exports.GET_SHARE_IMG = domain + "/smallapp/getShareImg";

var FRS = exports.FRS = domain + "/frs/page/m";

var SIGN = exports.SIGN = domain + "/sign";

var APUBTHREAE = exports.APUBTHREAE = domain + "/apubthread";

var VIDEOUPLOAD = exports.VIDEOUPLOAD = domain + "/videoupload";

var COOLUPLOADPIC = exports.COOLUPLOADPIC = domain + "/cooluploadpic?fr=smallapp&from_zt=1&r=0.10027896050957352";

var ADDSTORE = exports.ADDSTORE = domain + "/post_addstore";

var RMSTORE = exports.RMSTORE = domain + "/post_rmstore";

var SMART_APP_LIST = exports.SMART_APP_LIST = SMALL_APP + "/smartAppList";

var VIDEO_MID_PAGE = exports.VIDEO_MID_PAGE = TB_DOMAIN + "/swan/f/video/getVideoMidPage";

var SMALLFORUM = exports.SMALLFORUM = domain + "/search/smallforum";

var SEARCH_SUG = exports.SEARCH_SUG = domain + "/smallapp/searchSug";

var SMALLHOTLIST = exports.SMALLHOTLIST = domain + "/search/smallhotlist";

var GET_WX_SHARE_IMAGE = exports.GET_WX_SHARE_IMAGE = TB_DOMAIN + "/swan/f/pb/getWxShareImage";

var SMALLMULTSEARCH = exports.SMALLMULTSEARCH = domain + "/search/smallmultsearch";

var FEED_TRACK = exports.FEED_TRACK = TB_DOMAIN + "/swan/f/log/feed";

var TOPIC_LIST = exports.TOPIC_LIST = TB_DOMAIN + "/mo/q/hot/topicList";

var MAIN_URL = exports.MAIN_URL = [ PB, LZL, INDEX, FRS ];

var SEO_PAGE = exports.SEO_PAGE = TB_DOMAIN + "/mo/q/smallapp/getPosts";

var SEO_LZL_COMMENT = exports.SEO_LZL_COMMENT = TB_DOMAIN + "/mo/q/smallapp/getComments";

var ALADING_PAGE = exports.ALADING_PAGE = TB_DOMAIN + "/mo/q/starcard";

// pb页凤巢广告接口
var PB_NEST_AD = exports.PB_NEST_AD = TB_DOMAIN + "/swan/f/adsense/thirdAd";

// 用户头像 cdn 地址前缀
var USER_AVATAR_CDN = exports.USER_AVATAR_CDN = "https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/";

var FRS_BANNER_URL = exports.FRS_BANNER_URL = TB_DOMAIN + "/swan/f/adsense/thirdAd";

var PB_BANNER_URL = exports.PB_BANNER_URL = TB_DOMAIN + "/swan/f/adsense/thirdAd";

var VERSION_INFO = exports.VERSION_INFO = TB_DOMAIN + "/mo/q/getVersionInfo";

var OPERATION_CONFIG = exports.OPERATION_CONFIG = TB_DOMAIN + "/mo/q/getUpConfigData";

var AMIS_CONFIG = exports.AMIS_CONFIG = domain + "/getConfigData";