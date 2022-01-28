module.exports = Behavior({
    data: {
        labelWidth: 105
    },
    methods: {
        setLabelWidth: function(t) {
            Number.isNaN(t) || this.setData({
                labelWidth: t
            });
        }
    }
});