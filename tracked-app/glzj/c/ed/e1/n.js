(0, require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../m/zk/za")).default)({
    name: "complete-personal-information-activity",
    localData: {
        options: Object.create(null)
    },
    data: {
        imgUrl: "",
        isShow: !1
    },
    components: {},
    logProps: {
        $$expElement: [ ".complete-personal-info-activity-component" ]
    },
    properties: {
        completePersonalInformationActivityData: {
            type: Object,
            value: {}
        },
        origin: {
            type: String,
            value: "CSHOP_INDEX"
        }
    },
    observers: {
        completePersonalInformationActivityData: function(t) {
            this.refreshComplete();
        }
    },
    ready: function() {},
    methods: {
        refreshComplete: function() {
            var t = this.data, e = t.origin, o = t.completePersonalInformationActivityData;
            "CSHOP_ORDER_FOOD_INDEX" === e && (this.init({
                data: o
            }), this.render());
        },
        init: function(t) {
            this.localData.options = t;
            var e = t.data, o = (void 0 === e ? {} : e).complete_personal_info_activity, i = ((void 0 === o ? {} : o) || {}).showActivityOrNot, a = void 0 !== i && i;
            return this.setData({
                isShow: a
            }), {
                root: this,
                isShow: a
            };
        },
        render: function() {
            var t = this, e = this.localData.options.data, o = (void 0 === e ? {} : e).complete_personal_info_activity, i = ((void 0 === o ? {} : o) || {}).imgUrl, a = void 0 === i ? "" : i;
            this.setData({
                imgUrl: a
            }, function() {
                t.$root.$logReinit(t);
            });
        },
        gotoMemberPersonalInfo: function() {
            this.$root.$navigate("/pages/member/member-personal-info/index");
        }
    }
});