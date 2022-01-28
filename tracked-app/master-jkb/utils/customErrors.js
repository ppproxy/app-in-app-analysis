var e = {
    common: {
        apiServer: {
            statusCode: {
                not_support_status_code_prefix_err: {
                    errcode: "1050-"
                },
                not_support_status_code_prefix_err_gen: function(r) {
                    var o = e.common.apiServer.statusCode.not_support_status_code_prefix_err.errcode, c = r.statusCode;
                    return {
                        errcode: o + c,
                        errmsg: "Server status code 异常. status code:".concat(c)
                    };
                }
            },
            apiBodyErrcode: {
                code_10500_prefix_err: {
                    errcode: "1051-"
                },
                code_10500_prefix_err_gen: function(r) {
                    return {
                        errcode: e.common.apiServer.apiBodyErrcode.code_10500_prefix_err.errcode + r.errcode,
                        errmsg: "Server body errcode 异常:".concat(r.errcode, ", errmsg:").concat(r.errmsg)
                    };
                },
                not_support_api_body_errcode_prefix_err: {
                    errcode: "1052-"
                },
                not_support_api_body_errcode_gen: function(r) {
                    return {
                        errcode: e.common.apiServer.apiBodyErrcode.not_support_api_body_errcode_prefix_err.errcode + r.errcode,
                        errmsg: "Server body 未支持errcode 异常:".concat(r.errcode, ", errmsg:").concat(r.errmsg)
                    };
                }
            },
            gatewayErrcode: {
                gateway_errcode_prefix_err: {
                    errcode: "1056-"
                },
                gateway_errcode_gen: function(r) {
                    return {
                        errcode: e.common.apiServer.gatewayErrcode.gateway_errcode_prefix_err.errcode + r.errcode,
                        errmsg: "Server 网关错误, 网关 errcode:".concat(r.errcode, ", errmsg:").concat(r.errmsg)
                    };
                }
            }
        },
        client: {
            UncaughtExp: {
                errcode: "1040-"
            },
            UncaughtExpGen: function(r) {
                return {
                    errcode: e.common.client.UncaughtExp.errcode,
                    errmsg: "Client wx.request fail, " + (r.errMsg && "errMsg:".concat(r.errMsg)) || "wxErrRes:".concat(JSON.stringify(r))
                };
            }
        }
    },
    auth: {
        login: {
            InvalidResp_NOT_BIS10200: {
                errcode: "1101001"
            },
            UncaughtExp: {
                errcode: "1101999"
            }
        },
        userSession: {
            UncaughtExp: {
                errcode: "1102999"
            }
        },
        check_face_verify_result_ext: {
            UncaughtExp: {
                errcode: "1106999"
            }
        },
        check_other_face_verify_result_ext: {
            UncaughtExp: {
                errcode: "1107999"
            }
        }
    },
    shixiang: {
        benrenHealthStatus: {
            InvalidResp_NoName: {
                errcode: "1203001",
                errmsg: "后端未返回名字"
            },
            UncaughtExp: {
                errcode: "1203999"
            }
        },
        otherHealthStatus: {
            InvalidResp_NoName: {
                errcode: "1204001",
                errmsg: "后端未返回名字"
            },
            InvalidResp_NoCode: {
                errcode: "1204002",
                errmsg: "后端未返回颜色"
            },
            UncaughtExp: {
                errcode: "1204999"
            }
        },
        otherList: {
            UncaughtExp: {
                errcode: "1205999"
            }
        },
        otherDel: {
            UncaughtExp: {
                errcode: "1206999"
            }
        },
        otherBindStatus: {
            UncaughtExp: {
                errcode: "1207999"
            }
        },
        beisanxian: {
            UncaughtExp: {
                errcode: "1208999"
            }
        },
        foreignShow: {
            InvalidResp_NoName: {
                errcode: "1209001",
                errmsg: "后端未返回名字"
            },
            UncaughtExp: {
                errcode: "1209999"
            }
        },
        foreignImage: {
            UncaughtExp: {
                errcode: "1210999"
            }
        },
        businessTravelCheck: {
            UncaughtExp: {
                errcode: "1211999"
            }
        },
        refreshSessionKey: {
            UncaughtExp: {
                errcode: "1213999"
            }
        },
        getPhone: {
            UncaughtExp: {
                errcode: "1213999"
            }
        },
        businessTravelSendSms: {
            UncaughtExp: {
                errcode: "1214999"
            }
        },
        businessTravelSubmit: {
            UncaughtExp: {
                errcode: "1215999"
            }
        },
        businessTravelGetBaseData: {
            UncaughtExp: {
                errcode: "1216999"
            }
        },
        businessTravelGetHealthCode: {
            ApiReturnNotLvSe: {
                errcode: "1218-code-",
                errmsg: "getHealthCode API 返回非绿色"
            },
            ApiReturnNotLvSeGen: function(r) {
                return {
                    errcode: e.shixiang.businessTravelGetHealthCode.ApiReturnNotLvSe.errcode + r.code,
                    errmsg: e.shixiang.businessTravelGetHealthCode.ApiReturnNotLvSe.errmsg
                };
            }
        }
    },
    cdnjson: {
        jkbCountryJson: {
            UncaughtExp: {
                errcode: "1301999"
            }
        }
    }
};

module.exports = e;