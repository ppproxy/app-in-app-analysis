module.exports = {
    regionCode: "440100000000",
    cityCode: "440100",
    wllConfigCacheTime: 600,
    provinceName: "河北省",
    cityName: "河北",
    cityShortName: "冀",
    env: "dev",
    provinceCode: "30846",
    isCard: !1,
    isMedicareCard: !1,
    isSecurityCard: !1,
    domain: "https://sjzhe.tgovcloud.com",
    appid: "microService-HEBEI",
    dev: {
        pharmacyPath: "/cloudsa3/wyj/ypgg_data_prd2020013101.json",
        buyDomain: "https://yzyy.tgovcloud.com",
        electronCard: "https://yunapi.healthcard.qq.com",
        wllConfigPath: "/cloudsa3/wyj/wll_mp_dev_config.json",
        regionPath: "/2020-2-12.json",
        wenzhenPath: "/cloudsa3/wenzhen/config/entry.json",
        carCodePath: "/traffic-gate",
        healthCodePath: "/prominent-citizens",
        realNameSetting: "city"
    },
    prod: {
        pharmacyPath: "/cloudsa3/wyj/ypgg_data_prd2020013101.json",
        buyDomain: "https://skyy.gzonline.gov.cn",
        electronCard: "https://yunapi.healthcard.qq.com",
        wllConfigPath: "/cloudsa3/wyj/wll_mp_prod_config.json",
        regionPath: "/cloudsa3/uc/gz202020201.json",
        wenzhenPath: "/cloudsa3/wenzhen/config/entry.json",
        carCodePath: "/traffic-gate",
        healthCodePath: "/prominent-citizens",
        realNameSetting: "city"
    },
    test: {
        pharmacyPath: "/cloudsa3/wyj/ypgg_data_prd2020013101.json",
        buyDomain: "https://testyy.tgovcloud.com",
        wllConfigPath: "/cloudsa3/wyj/wll_mp_dev_config.json",
        regionPath: "/cloudsa3/uc/gz202020201.json",
        wenzhenPath: "/cloudsa3/wenzhen/config/entry.json",
        carCodePath: "https://testyy.tgovcloud.com/traffic-gate-es",
        healthCodePath: "/prominent-citizens",
        realNameSetting: "city"
    },
    cdnDomain: "https://wyy-1253323744.file.myqcloud.com",
    cosDomain: "https://wyy-1253323744.file.myqcloud.com",
    regionLevel: [ {
        title: "市"
    }, {
        title: "区/街道"
    } ]
};