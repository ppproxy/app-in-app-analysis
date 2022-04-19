Component({
    properties: {
        cardData: {
            type: Object,
            value: {}
        }
    },
    data: {
        picLength: 4
    },
    attached: function() {
        var a = 4;
        this.data.cardData.pics ? a = this.data.cardData.pics.length > this.data.cardData.max_item_count ? this.data.cardData.max_item_count : this.data.cardData.pics.length : this.data.cardData.users && (a = this.data.cardData.users.length > this.data.cardData.max_item_count ? this.data.cardData.max_item_count : this.data.cardData.users.length), 
        this.setData({
            picLength: a
        });
    },
    methods: {}
});