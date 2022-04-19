var a = require("../../../../81CC8A51ACE07ADFE7AAE2566711A2D7.js");

Component({
    properties: {
        cardData: {
            type: Object,
            value: {}
        }
    },
    data: {},
    attached: function() {
        this.data.cardData.line_config.line_color = "#".concat(this.data.cardData.line_config.line_color.substring(3)), 
        this.data.cardData.line_config.point_color = "#".concat(this.data.cardData.line_config.point_color.substring(3)), 
        this.data.cardData.text.color = "#".concat(this.data.cardData.text.color.substring(3)), 
        this.data.cardData.timestamp.color = "#".concat(this.data.cardData.timestamp.color.substring(3)), 
        this.data.cardData.timestamp.value = a.formatTimeToDetail(new Date(1e3 * this.data.cardData.timestamp.value), "-", !1), 
        this.setData({
            cardData: this.data.cardData
        });
    },
    methods: {}
});