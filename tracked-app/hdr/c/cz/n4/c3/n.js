var e = require("../../../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../../../@babel/runtime/helpers/typeof"), i = e(require("../../../../m/zk/za")), u = require("../../../../l/wu"), r = require("../../../c6/5j/n");

(0, i.default)({
    name: "set-meal-detail",
    properties: {
        comboGroup: {
            type: Object,
            value: {}
        },
        isClearSku: {
            type: Boolean,
            value: !1
        },
        typeName: {
            type: String,
            value: ""
        },
        minNum: {
            type: Number,
            value: 0
        },
        maxNum: {
            type: Number,
            value: 0
        },
        itemTypeList: {
            type: Array,
            value: []
        },
        openStatus: {
            type: Boolean,
            value: !1
        },
        cartDishDot: {
            type: Object,
            value: {}
        },
        groupNewCheck: {
            type: Object,
            value: {}
        }
    },
    data: {
        chooseNum: 0,
        optionalNum: -1,
        disableSku: {}
    },
    localData: {
        groupList: [],
        requiredSku: {}
    },
    ready: function() {
        var e = this;
        this.data.isClearSku ? this.setDisableSku() : this.setDefaultSku(), (0, r.bindEmitter)(this).$on("dishMinus", function(t) {
            var i = t.dishMd5, u = t.groupId, r = t.num, a = e.localData.groupList, o = e.data.maxNum, s = [];
            a.forEach(function(e) {
                e.dishMd5 === i && e.groupId === u && (e.num = r), 0 !== e.num && s.push(e);
            });
            var n = a.reduce(function(e, t) {
                return e + t.num;
            }, 0), d = o - n;
            e.localData.groupList = s, e.setData({
                chooseNum: n,
                optionalNum: d
            }), e.setDisableSku(), e.triggerChange();
        }, this);
    },
    detached: function() {
        (0, r.bindEmitter)(this).$off("dishMinus");
    },
    methods: {
        setDefaultSku: function() {
            var e = this.data.comboGroup, t = this.localData.requiredSku, i = [];
            e.comboDishList.forEach(function(e) {
                var r = e.cookbookDishSkuList[0];
                if (!("Y" !== r.defaultChange && "Y" !== r.required || ("Y" === r.required && (t[r.skuId] = e.dishName), 
                0 === r.dishStockDecimal || r.comboStartNumber > r.overPlusNum))) {
                    var a, o = r.dishId, s = r.skuId, n = {}, d = [], c = 0;
                    r.practiceGroups.length > 0 && r.practiceGroups.forEach(function(e) {
                        var t = {};
                        e.dishProperties.forEach(function(i, u) {
                            "REQURIED" === e.optType && 0 === u && (t = {
                                addPrice: i.addPrice,
                                detailId: i.detailId,
                                name: i.name,
                                uuid: i.uuid
                            }), "Y" === i.kryunPropertyDefault && (t = {
                                addPrice: i.addPrice,
                                detailId: i.detailId,
                                name: i.name,
                                uuid: i.uuid
                            });
                        }), Object.keys(t).length > 0 && (n[e.groupId] = t, d.push(t), c += t.addPrice);
                    }), a = (0, u.createDishMd5)({
                        dishId: o,
                        skuId: s,
                        selectPratices: n
                    });
                    var m = {
                        dishId: e.dishId,
                        dishName: e.dishName,
                        dishType: e.dishType,
                        skuId: r.skuId,
                        skuName: r.skuName,
                        unitId: r.unitId,
                        unitName: r.unitName,
                        dishMd5: a,
                        kryunSkuUuid: r.kryunSkuUuid,
                        skuImgUrl: r.skuImgUrl,
                        startNumber: r.comboStartNumber,
                        comboStartNumber: r.comboStartNumber,
                        startInterval: r.startInterval,
                        cookbookCategoryId: e.cookbookCategoryId,
                        cookbookCategoryName: e.cookbookCategoryName,
                        practices: d,
                        sideDishes: [],
                        multiSpecFlag: e.multiSpecFlag,
                        remarks: [],
                        weighDishFlag: "Y" === r.weighFlag,
                        dishCookWayAccountModel: r.dishCookWayAccountModel,
                        num: r.comboStartNumber,
                        originPrice: r.sellPrice,
                        dishSkuPrice: r.dishSkuPrice,
                        amount: r.dishSkuPrice + c,
                        memberPrice: r.haveMemberSellPrice ? r.memberSellPrice + c : void 0,
                        required: r.required
                    };
                    i.push(m);
                }
            }), this.localData.groupList = i, this.triggerChange();
        },
        setLaveOptionalNum: function() {
            var e = this.localData.groupList, t = this.data, i = t.maxNum, u = t.minNum, r = e.reduce(function(e, t) {
                return e + t.num;
            }, 0), a = i - r;
            return this.setData({
                optionalNum: a < 0 ? 0 : a,
                chooseNum: r
            }, {
                instant: !0
            }), r >= u;
        },
        handleNumChange: function(e) {
            var t = e.detail, i = t.from, u = t.dishes, r = this.localData.groupList, a = r.findIndex(function(e) {
                return e.dishMd5 === u.dishMd5;
            });
            -1 !== a ? u.num < 1 ? r.splice(a, 1) : "orderfood-specs" === i ? r[a].num += u.num : r[a].num = u.num : r.push(u), 
            this.triggerChange(), this.triggerEvent("handleShowJoinMember", {
                showJoinMember: !1
            });
        },
        triggerChange: function() {
            var e = this.data, t = e.comboGroup, i = e.chooseNum, u = this.localData.groupList, r = this.setLaveOptionalNum(), a = this.getFillRequired(), o = a.isFillRequired, s = a.requiredName, n = [], d = u.reduce(function(e, t) {
                return n.push("".concat(t.dishName).concat(t.skuName !== t.dishName ? "(".concat(t.skuName, ")") : "", "X").concat(t.num)), 
                e + t.amount * t.num;
            }, 0);
            this.triggerEvent("handleDishChange", {
                group: {
                    groupId: t.groupId,
                    groupName: t.groupName,
                    groupType: t.groupType,
                    dishCartSkuList: u,
                    chooseNum: i
                },
                groupTotalPrice: d,
                isFillMinChoose: r,
                isFillRequired: o,
                requiredName: s,
                menuName: n
            }), this.setDisableSku();
        },
        getFillRequired: function() {
            var e = this.localData, i = e.groupList, u = e.requiredSku, r = function(e) {
                if (-1 === i.findIndex(function(t) {
                    return t.skuId === e;
                })) return {
                    v: {
                        isFillRequired: !1,
                        requiredName: u[e]
                    }
                };
            };
            for (var a in u) {
                var o = r(a);
                if ("object" === t(o)) return o.v;
            }
            return {
                isFillRequired: !0
            };
        },
        setDisableSku: function() {
            var e = this.data, t = e.comboGroup, i = e.optionalNum, u = e.isClearSku, r = this.localData.groupList, a = t.comboDishList, o = {};
            a.forEach(function(e) {
                var t = e.cookbookDishSkuList[0];
                if (0 === i || u) o[t.skuId] = !0; else {
                    var a = r.filter(function(e) {
                        return e.skuId === t.skuId;
                    }), s = a.map(function(e) {
                        return e.num;
                    }).reduce(function(e, t) {
                        return e + t;
                    }, 0);
                    "N" === t.optional && a.length > 0 && (o[t.skuId] = !0), (0 === s && t.comboStartNumber > i || t.comboStartNumber > t.overPlusNum || s >= t.overPlusNum) && (o[t.skuId] = !0);
                }
            }), this.setData({
                disableSku: o
            }, {
                instant: !0
            });
        }
    }
});