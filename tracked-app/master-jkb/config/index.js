var t = "PROD";

module.exports = {
    monitorConfig: {
        beacon: "https://beacon-mp.tingyun.com",
        key: "X9DuhHGBFdE",
        id: "Jb8Gp-tiVTk",
        sampleRate: 1
    },
    extConfig: {
        build: {
            version: "2.1.1"
        },
        monitor: {
            dsn: "https://3ba091d2c9334414b40fa0ed911cae06@xcx-monitor.yqgz.beijing.gov.cn/3"
        }
    },
    domain: "https://xcx.yqgz.beijing.gov.cn/ebus/jxjxcxzcfu",
    xlsxDomains: "https://xcx.yqgz.beijing.gov.cn/jxjxcxzcfu",
    websocketDomains: "wss://jkb-push.yqgz.beijing.gov.cn",
    env: t,
    bmCdn: "https://xcx-static.yqgz.beijing.gov.cn/staics",
    cdnPath: "https://xcx-static.yqgz.beijing.gov.cn/images",
    jxxzAreaPath: "/area.json",
    anniuCdn: "https://xcx-static.yqgz.beijing.gov.cn/json/jkb",
    areaPath: "https://xcx-static.yqgz.beijing.gov.cn/json/jkb/beijing-area.json",
    ma4Path: "https://xcx-static.yqgz.beijing.gov.cn/statics/audio/jkb_audio_config.json",
    quanjuJson: "https://xcx-static.yqgz.beijing.gov.cn/json/jkb/jkb-QRCode-config.json",
    quanjuJson_test: "https://xcx-static.yqgz.beijing.gov.cn/json/jkb/jkb-QRCode-config-test.json",
    tzJson: "https://xcx-static.yqgz.beijing.gov.cn/json/jkb/notice-jump-to-test.json",
    provincePath: "/province.json",
    appid: "wxfe0e405895cafdf9",
    isShow: {
        checkDataShow: !0,
        cardDataShow: !0,
        recordsDataShow: !0
    },
    jsonCdn: "https://xcx-static.yqgz.beijing.gov.cn/json/jkb/jkb-config.json",
    hsjcProvince: "https://xcx-static.yqgz.beijing.gov.cn/json/jkb/hsjc/hsjcProvince.json",
    timestampDomains: "https://xcx.yqgz.beijing.gov.cn",
    statusDomains: "https://jkb-static.yqgz.beijing.gov.cn/ebus/jxjxcxzcfu"
};