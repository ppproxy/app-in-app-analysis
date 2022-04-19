Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = bannerModifier;

var _filters = require("./filters");

function bannerModifier(bannerList) {
    var banners = bannerList.map(function(banner) {
        if (banner.content.empty_goods === 1) {
            return {
                isAd: true,
                isEmptyGoods: true,
                originBanner: banner
            };
        }
        var isVideo = banner.tpl_name.includes("ad_video");
        var video = {};
        if (isVideo) {
            var iVideo = banner.content.video;
            var iImages = banner.content.ad_common.images.map(function(v) {
                return {
                    src: v.url,
                    width: v.width,
                    height: v.height
                };
            });
            video = iImages[0];
            video.src = iVideo.poster;
            video.duration = (0, _filters.playDuration)(iVideo.duration);
        }
        return {
            isEmptyGoods: false,
            isVertical: banner.tpl_name.includes("vertical"),
            mediaComposeType: isVideo ? 1 : banner.tpl_name.includes("three") ? 3 : 1,
            isAd: true,
            isVideo: isVideo,
            video: video,
            isDownload: banner.tpl_name && banner.tpl_name.includes("download"),
            avatar: banner.content.ad_common.brand.icon,
            name: banner.content.ad_common.brand.name,
            title: banner.content.ad_common.title,
            text: banner.content.ad_common.flag_names[0].text,
            media: banner.content.ad_common.images.map(function(v) {
                return {
                    src: v.url,
                    width: v.width,
                    height: v.height
                };
            }),
            originBanner: banner
        };
    });
    return banners;
}
/**
   * @file bannerModifier.js
   * @author xiaowensheng
   */