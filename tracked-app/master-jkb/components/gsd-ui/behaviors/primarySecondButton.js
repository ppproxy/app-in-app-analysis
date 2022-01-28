module.exports = Behavior({
    properties: {
        primaryText: {
            type: String,
            value: "下一步"
        },
        secondText: String
    },
    methods: {
        handlePrimaryTap: function(e) {
            this.triggerEvent("primaryTap", e.detail);
        },
        handleSecondTap: function(e) {
            this.triggerEvent("secondTap", e.detail);
        }
    }
});