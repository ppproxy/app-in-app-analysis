Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = {
    $version: "3.25.4",
    $projectName: "wam-lightshop-miniapp",
    $projectGroupName: "wam-minapp",
    $env: "develop",
    $mixins: [ require("../x/wl"), require("../x/zd"), require("../x/wq"), require("../x/w0"), require("../x/wr") ],
    $plugins: {
        page: [ require("../p/wx"), require("../p/3z"), require("../p/3e"), require("../p/wj") ],
        component: [ require("../p/3c"), require("../p/34") ],
        app: [ require("../p/w8"), require("../p/3n") ]
    },
    $uploadVersion: "3.596.1644483075",
    cnName: "轻店小程序",
    enName: "wx",
    isMock: !1,
    extEnable: !1,
    isMockParams: !1,
    isDebug: !0,
    mockConfig: {
        type: "cdn",
        projectName: "alsc-merchant-mini-c",
        requestType: "mtop"
    },
    envConfig: {
        dev: {
            prefix: "acs",
            subDomain: "waptest",
            mainDomain: "taobao.com"
        },
        prod: {
            prefix: "mtop",
            subDomain: "",
            mainDomain: "koubei.com"
        },
        pre: {
            prefix: "acs",
            subDomain: "wapa",
            mainDomain: "koubei.com"
        }
    },
    cache: {
        APPID: "wx0ff419efbf920035",
        appName: "",
        xcxTmlCode: "lightshopTemplate"
    }
};

exports.default = e;