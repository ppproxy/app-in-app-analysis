var _util = require("../../util/util");

var _url = require("../../util/url");

/**
 * @file 图片预览组件
 * @author wz
 */ Component({
    properties: {
        tid: {
            type: String,
            value: ""
        },
        src: {
            // 图片的src、如果gif则是动图
            type: String,
            value: ""
        },
        mode: {
            type: String,
            value: "aspectFill"
        },
        word: {
            type: String,
            value: ""
        },
        type: {
            type: String,
            value: ""
        },
        seeLz: {
            type: Number,
            value: 1
        },
        imgWidth: {
            type: Number,
            value: 1080
        },
        style: {
            type: String,
            value: ""
        },
        totalNum: {
            type: Number,
            value: 0
        },
        isGif: {
            type: Boolean,
            value: false
        },
        staticImg: {
            // gif的静态图片
            type: String,
            value: ""
        },
        isImg: {
            type: Boolean,
            value: true
        },
        imageHeight: {
            type: String,
            value: ""
        }
    },
    data: {
        IMG_CDN: _url.IMG_CDN,
        tid: "",
        src: "",
        word: "",
        type: "",
        seeLz: 1,
        isGif: false,
        imgWidth: 1080,
        isImg: true,
        staticImg: ""
    },
    methods: {
        preview: function preview() {
            var _this = this;
            if (this.isImageLoading) {
                return;
            }
            var _data = this.data, src = _data.src, type = _data.type, tid = _data.tid, word = _data.word, seeLz = _data.seeLz, imgWidth = _data.imgWidth;
            var strsrc = void 0;
            if (type === 20) {
                return false;
            }
            if (src.indexOf("&src=") === -1) {
                strsrc = encodeURIComponent(src);
            } else {
                strsrc = src.split("&src=")[1];
            }
            var picId = strsrc.split("%2F").pop().split(".").shift();
            (0, _util.get)(_url.ALBUM, {
                word: word,
                // frs、pb
                tid: tid,
                pic_id: picId,
                see_lz: seeLz,
                direction: 2,
                around: 10,
                img_width: imgWidth,
                img_height: 2e3,
                img_quality: 100
            }, "数据加载失败").then(function(data) {
                var curIndex = data.cur_index;
                var urls = [];
                var images = [];
                data.images && data.images.map(function(item) {
                    urls.push(item.url);
                    var imgObj = {
                        url: item.url
                    };
                    if (item.origin_url) {
                        imgObj.origin_url = item.origin_url;
                        (0, _util.track)("preview_origin_img");
                    }
                    images.push(imgObj);
                });
                var cur = 0;
                for (var i = 0; i < data.images.length; i++) {
                    if (+data.images[i].index === +curIndex) {
                        cur = i + 1;
                    }
                }
                var currentUrl = urls[cur - 1];
                wx.previewImage({
                    current: currentUrl,
                    urls: urls,
                    images: images
                });
                _this.isImageLoading = false;
            }).catch(function(err) {
                _this.isImageLoading = false;
            });
        },
        // 微信线上vconsole查看图片报错
        getImgErr: function getImgErr(e) {
            var errMsg = e.detail.errMsg;
            console.log("=>imgErr", this.data.src, JSON.stringify(errMsg));
        }
    }
});