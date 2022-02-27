var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../../@babel/runtime/helpers/objectSpread2"), n = e(require("../../../@babel/runtime/regenerator")), r = require("../../../@babel/runtime/helpers/asyncToGenerator"), a = e(require("../../../m/zk/z9")), o = require("../../../v/3s/ed"), m = e(require("../../../x/cu")), i = !0;

(0, a.default)({
    data: {
        decorateComponentList: [],
        selectedTemplateHead: "",
        isLoading: !0
    },
    localData: {},
    spmInfo: {
        spmAPos: "a2f8y",
        spmBPos: "b96776576",
        bizType: "KOUBEI"
    },
    mixins: [ m.default ],
    components: {
        memberMyHeadImage: "member-my-head-image-component",
        memberMyUserInfo: "member-my-user-info-component",
        memberMyMemberCard: "member-my-member-card-component",
        memberMyActivityEntrance: "member-my-activity-entrance-component",
        memberMyFunctionEntrance: "member-my-function-entrance-component"
    },
    onLoad: function() {
        this.getMeberCenterQuery(), this.$initBottomTabBar();
    },
    onReady: function() {
        this.$logAvailableTrace();
    },
    onShow: function() {
        i ? i = !1 : this.getMeberCenterQuery();
    },
    methods: {
        getMeberCenterQuery: function() {
            var e = this;
            return r(n.default.mark(function t() {
                var r, a, m;
                return n.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, r = {
                            pageCode: "PERSONAL_INDEX",
                            isFetchData: !0
                        }, t.next = 4, (0, o.memberCenterQuery)(r);

                      case 4:
                        a = t.sent, m = a.data.componentList, m = e.generateTemplate(m), m = e.generateComponentId(m), 
                        e.setData({
                            decorateComponentList: m
                        }, function() {
                            e.renderComponent(m), e.$logAvailableTrace();
                        }), t.next = 16;
                        break;

                      case 11:
                        t.prev = 11, t.t0 = t.catch(0), console.error("GET_MEMBER_MY_DATA_FAIL"), console.error(t.t0), 
                        e.$redirect("/pages/page-result/index", {
                            fromPage: "pages/member/member-my/index",
                            statusCode: "SERVER_ERROR"
                        });

                      case 16:
                        e.setData({
                            isLoading: !1
                        });

                      case 17:
                      case "end":
                        return t.stop();
                    }
                }, t, null, [ [ 0, 11 ] ]);
            }))();
        },
        generateTemplate: function(e) {
            return e.map(function(e) {
                if (e.dynamicConfig && e.dynamicConfig.useDynamic && e.dynamicConfig.templateName) {
                    var n = e.dynamicConfig.templateName;
                    return t(t({}, e), {}, {
                        componentAppCode: n,
                        componentCode: n
                    });
                }
                return e;
            });
        },
        renderComponent: function(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                n.componentAppCode && "member-my-head-image-component" === n.componentAppCode && n.selectedTemplate ? this.setData({
                    selectedTemplateHead: n.selectedTemplate || "DEFAULT_COLOR"
                }) : this.setData({
                    selectedTemplate: "DEFAULT_COLOR"
                });
                try {
                    var r = this.getComponentById("".concat(n.id));
                    r && r.init(n).render();
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    console.error("装修组件渲染报错，请检查装修组件配置！！", e);
                }
            }
        }
    }
});