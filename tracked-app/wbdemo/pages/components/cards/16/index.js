Component({
    properties: {
        cardData: {
            type: Object,
            value: {},
            observer: function(t) {
                if (t) for (var o = 0; o < t.group.length; o++) if (t.group[o].buttons) for (var p = 0; p < t.group[o].buttons.length; p++) /default/.test(t.group[o].buttons[p].pic) || (t.group[o].buttons[p].pic = t.group[o].buttons[p].pic.replace(/\.png|jpg|jepg/, ""), 
                t.group[o].buttons[p].pic += "_default.png"), this.setData({
                    cardData: t
                });
            }
        }
    },
    data: {},
    methods: {}
});