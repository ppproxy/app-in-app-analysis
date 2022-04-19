var _url = require("../../util/url");

Component({
    properties: {
        total: {
            type: Number,
            value: 5
        },
        active: {
            type: Number,
            value: 0
        }
    },
    data: {
        starList: []
    },
    ready: function ready() {
        this.setStars();
    },
    methods: {
        setStars: function setStars() {
            var starList = [];
            for (var i = 0; i < this.data.total; i++) {
                if (i < this.data.active) {
                    starList.push({
                        src: _url.IMG_CDN + "%2Ficon_star_h%403x.png"
                    });
                } else {
                    starList.push({
                        src: _url.IMG_CDN + "%2Ficon_star_n%403x.png"
                    });
                }
            }
            this.setData({
                starList: starList
            });
        }
    }
});
/**
     * @file 助理吊起app功能
     * @author lss
     */