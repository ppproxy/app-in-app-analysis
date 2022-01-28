var e = getApp(), r = e.request;

e.config, e.wxp;

exports.canSaveUserList = function(e) {
    return r({
        url: "/prominent-citizens/qrcCodeRelation/v1/canSaveUserList",
        method: "GET",
        data: e
    });
}, exports.getCodeUserList = function(e) {
    return r({
        url: "/prominent-citizens/qrcCodeRelation/v1/userList",
        method: "GET",
        data: e
    });
}, exports.getPassRegisterList = function(e) {
    return r({
        url: "/prominent-citizens/passRecord/v1/list",
        method: "GET",
        data: e
    });
}, exports.getRelationStateByUser = function(e) {
    return r({
        url: "/prominent-citizens/qrcCode/v1/relationStateByUser/" + e.uid + "?verCodes=" + e.verCodes,
        method: "GET"
    });
}, exports.savePssRegisterList = function(e) {
    return r({
        url: "/passRegister/v1/save",
        method: "POST",
        data: e
    });
}, exports.saveCodeUser = function(e) {
    return r({
        url: "/prominent-citizens/qrcCodeRelation/v1/save",
        method: "POST",
        data: e
    });
}, exports.removeCodeUser = function(e) {
    return r({
        url: "/prominent-citizens/qrcCodeRelation/v1/remove/" + e,
        method: "delete"
    });
}, exports.getGridPoint = function(e) {
    return r({
        url: "/prominent-citizens/verify/v1/gridPoint-list",
        method: "POST",
        data: e
    });
}, exports.removeGridPoint = function(e) {
    return r({
        url: "/grid-mgr/grid-operator/v1/relieve",
        method: "POST",
        data: e
    });
}, exports.addGridPoint = function(e) {
    return r({
        url: "/prominent-citizens/verify/v1/add-gridPoint",
        method: "POST",
        data: e
    });
}, exports.passRegisterDays = function(e) {
    return r({
        url: "/prominent-citizens/passRegister/v1/days",
        method: "GET"
    });
}, exports.passRegisterList = function(e) {
    return r({
        url: "/prominent-citizens/passRecord/v1/list?qrcId=" + e + "&time=" + new Date().getTime(),
        method: "GET"
    });
}, exports.passRegisterSave = function(e) {
    return r({
        url: "/prominent-citizens/passRecord/v1/save",
        method: "POST",
        data: e
    });
}, exports.lastUserStatus = function(e) {
    return r({
        url: "/prominent-citizens/helper/v1/getReportByUid?uid=" + e,
        method: "GET"
    });
}, exports.infoByCodeId = function(e) {
    return r({
        url: "/prominent-citizens/qrcCode/v1/infoByCodeId/" + e,
        method: "GET"
    });
}, exports.getUserInfo = function(e) {
    return r({
        url: "/prominent-citizens/helper/v1/getUserInfo?uid=" + e,
        method: "GET"
    });
}, exports.getloginuserinfo = function(e) {
    return r({
        url: "/wll/account/getloginuserinfo",
        method: "GET"
    });
}, exports.saveManagePerson = function(e) {
    return r({
        url: "/grid-mgr/grid-manage/v1/authorize",
        method: "POST",
        data: e
    });
}, exports.deleteManagePerson = function(e) {
    return r({
        url: "/grid-mgr/grid-manage/v1/relieve",
        method: "POST",
        data: e
    });
}, exports.getManagePerson = function(e) {
    return r({
        url: "/grid-mgr/grid-manage/v1/operators/" + e,
        method: "GET"
    });
}, exports.getManageOperators = function(e) {
    return r({
        url: "/grid-mgr/grid-manage/v1/operators/" + e,
        method: "GET"
    });
}, exports.updateGridMonitor = function(e) {
    return r({
        url: "/grid-mgr/grid-monitor/v1",
        method: "POST",
        data: e
    });
}, exports.getGridMonitor = function(e) {
    return r({
        url: "/grid-mgr/grid-monitor/v1/" + e,
        method: "GET"
    });
}, exports.saveGridMonitor = function(e) {
    return r({
        url: "/grid-mgr/grid-monitor/v1/increase",
        method: "POST",
        data: e
    });
}, exports.getOperatorID = function(e) {
    return r({
        url: "/grid-mgr/grid-operator/v1/" + e,
        method: "GET"
    });
}, exports.getGridMonitorList = function(e) {
    return r({
        url: "/grid-mgr/grid-operator/v1/points/" + e,
        method: "GET"
    });
}, exports.getGridMonitorPoints = function(e) {
    return r({
        url: "/grid-mgr/grid-monitor/v1/points/" + e,
        method: "GET"
    });
}, exports.tabGrid = function(e) {
    return r({
        url: "/grid-mgr/grid-operator/v1/choose",
        method: "POST",
        data: e
    });
}, exports.gridManageChoose = function(e) {
    return r({
        url: "/grid-mgr/grid-manage/v1/choose",
        method: "POST",
        data: e
    });
}, exports.delGridMonitors = function(e) {
    return r({
        url: "/grid-mgr/grid-monitor/v1/relieve",
        method: "POST",
        data: e
    });
}, exports.getAdmanageId = function(e) {
    return r({
        url: "/grid-mgr/grid-manage/v1/" + e,
        method: "GET"
    });
}, exports.getAdmanagePoints = function(e) {
    return r({
        url: "/grid-mgr/grid-monitor/v1/points/" + e,
        method: "GET"
    });
}, exports.getOperatorId = function(e) {
    return r({
        url: "/grid-mgr/grid-operator/v1/" + e,
        method: "GET"
    });
}, exports.delGridMonitor = function(e) {
    return r({
        url: "/prominent-citizens/authentication/realname-aut/v1/" + e,
        method: "GET"
    });
}, exports.realnameUser = function(e) {
    return r({
        url: "/authentication/realname-aut/v1/" + e,
        method: "GET"
    });
}, exports.wxAut = function(e, t) {
    return r({
        url: "/authentication/realnameWxAut/v1/wxAut?authCode=" + e,
        method: "POST",
        data: t
    });
}, exports.realnameSave = function(e) {
    return r({
        url: "/authentication/realname-aut/v1",
        method: "POST",
        data: e
    });
}, exports.authindexPara = function(e) {
    return r({
        url: "/authentication/realnameWxAut/v1/authindexPara?openId=" + e,
        method: "GET"
    });
}, exports.getUserCodeId = function(e) {
    return r({
        url: "/prominent-citizens/qrcCode/v1/findCodeIdByInfo",
        method: "GET",
        data: e
    });
}, exports.verifyVerCode = function(e) {
    return r({
        url: "/prominent-citizens/qrcCode/v1/verifyVerCode/" + e,
        method: "GET"
    });
}, exports.getPassQrcCode = function(e, t, o) {
    return r({
        url: "/grid-scan/grid-operator/v1/qrcCode?operatorId=" + e + "&pointId=" + t + "&passRole=" + o,
        method: "GET"
    });
}, exports.relationUserList = function(e) {
    return r({
        url: "/prominent-citizens/qrcCodeRelation/v1/relationUserList",
        method: "GET",
        data: e
    });
}, exports.findInfoByKey = function(e) {
    return r({
        url: "/grid-scan/grid-operator/v1/findInfoByKey?key=" + e,
        method: "GET"
    });
}, exports.relationUserSave = function(e) {
    return r({
        url: "/grid-scan/communityPassReg/v1/save",
        method: "POST",
        data: e
    });
}, exports.refreshloginuserinfo = function() {
    return r({
        url: "/wll/account/refreshloginuserinfo",
        method: "GET"
    });
}, exports.companies = function() {
    return r({
        url: "/resumption/manager/companies",
        method: "GET"
    });
}, exports.applies = function(e) {
    return r({
        url: "/resumption/manager/get/applies",
        method: "POST",
        data: e
    });
}, exports.createCodeByKey = function(e, t, o) {
    return r({
        url: "/grid-scan/grid-operator/v1/createCodeByKey?key=" + e + "&page=" + t + "&qrCodeKey=" + o,
        method: "GET"
    });
}, exports.getCacheInfo = function() {
    return r({
        url: "/hbjkm/xck/getCacheInfo",
        method: "POST"
    });
}, exports.sendMessage = function() {
    return r({
        url: "/hbjkm/xck/sendMessage",
        method: "POST"
    });
}, exports.getXckInfo = function(e) {
    return r({
        url: "/hbjkm/xck/getXckInfo?verification=" + e,
        method: "POST"
    });
};