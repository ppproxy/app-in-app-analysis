var e = require("@babel/runtime/helpers/createForOfIteratorHelper.js"), t = require("28FFE256ACE07ADF4E998A51D5D0A2D7.js"), a = require("F76D5AA1ACE07ADF910B32A610A0A2D7.js"), n = require("C0AB1682ACE07ADFA6CD7E852490A2D7.js"), c = require("C2B0FE65ACE07ADFA4D696622921A2D7.js"), r = require("487A5DD3ACE07ADF2E1C35D4E9A0A2D7.js"), i = {
    none: "00",
    reposts: "01",
    comments: "10",
    attitudes: "100"
}, o = function(e) {
    if (e) {
        var t = RegExp("^http:", "");
        return e.replace(t, "https:");
    }
    return e;
}, l = function(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}, s = function(e) {
    return e.replace(/(^\s*)|(\s*$)/g, "");
}, D = function(e) {
    var t = "";
    switch (e) {
      case "topic":
        t = '<img src="https://h5.sinaimg.cn/upload/100/959/2020/05/09/timeline_card_small_super_default.png" mode="aspectFill" class="icon" />';
        break;

      case "wenda":
        t = '<img src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_web_default.png" mode="aspectFill" class="icon" />';
        break;

      case "article":
        t = '<img src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_article_default.png" mode="aspectFill" class="icon" />';
        break;

      case "webpage":
        t = '<img src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_web_default.png" mode="aspectFill" class="icon" />';
        break;

      case "video":
        t = '<img src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_video_default.png" mode="aspectFill" class="icon" />';
        break;

      case "audio":
        t = '<img src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_music_default.png" mode="aspectFill" class="icon" />';
        break;

      case "place":
        t = '<img src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_location_default.png" mode="aspectFill" class="icon" />';
        break;

      case "adFeedVideo":
        t = '<img src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_video_default.png" mode="aspectFill" class="icon" />';
        break;

      case "weblink":
        t = '<img src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_web_default.png" mode="aspectFill" class="icon" />';
        break;

      case "movie":
        t = '<img src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_movie_default.png" mode="aspectFill" class="icon" />';
    }
    return t;
};

module.exports = {
    getUrlParam: function(e, t) {
        if (!e) return "";
        var a = new RegExp("(^|&)".concat(t, "=([^&]*)(&|$)")), n = decodeURIComponent(e.replace(/%/g, "%25")).match(a);
        return null != n && n.length >= 2 ? n[2] : "";
    },
    convertToTenThousandIfNeeded: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return null == e ? t ? 0 : "" : e < 1e4 ? e : e < 1e8 ? "".concat((e / 1e4).toFixed(t || 0), "万") : "".concat((e / 1e8).toFixed(t || 0), "亿");
    },
    hasHitNumberDisplayStrategy: function(e, t) {
        return parseInt(e & i[t], 10) == parseInt(i[t], 10);
    },
    formatTime: function(e) {
        var t = e.getFullYear(), a = e.getMonth() + 1, n = e.getDate(), c = e.getHours(), r = e.getMinutes(), i = e.getSeconds();
        return [ t, a, n ].map(l).join("-") + " " + [ c, r, i ].map(l).join(":");
    },
    formatTimeToDetail: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default", a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], n = new Date(), c = Date.parse(e) / 1e3, r = Date.parse(n) / 1e3, i = a ? e.getFullYear() : e.getFullYear().toString().substring(2), o = e.getMonth() + 1, l = e.getDate(), s = e.getHours() < 10 ? "0" + e.getHours() : e.getHours(), D = e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes(), B = a ? n.getFullYear() : n.getFullYear().toString().substring(2), u = n.getDate(), F = "年", d = "月", C = "日";
        return "default" !== t && (F = d = C = t), i === B ? l === u ? r - c <= 600 ? "刚刚" : r - c == 3600 ? "1小时前" : r - c < 3600 ? "".concat(Math.floor((r - c) / 60), "分钟前") : "".concat(Math.floor((r - c) / 3600), "小时前") : l + 1 === u ? "昨天 ".concat(s, ":").concat(D) : "default" === t ? "".concat(o).concat(d).concat(l).concat(C) : "".concat(i).concat(F).concat(o).concat(d).concat(l) : "".concat(i).concat(F).concat(o).concat(d).concat(l).concat("default" === t ? C : "");
    },
    replaceHttps: o,
    parseSchemeByKey: function(e, t) {
        if (e) {
            (e = decodeURIComponent(e)).indexOf("?") > -1 && (e = e.split("?")[1]), e = e.split("&");
            for (var a = {}, n = 0; n < e.length; n++) {
                var c = e[n].split("=");
                a[c[0]] || (a[c[0]] = c[1]);
            }
            return a[t] ? a[t] : "";
        }
    },
    decodeSearchKey: function(t) {
        if (t) {
            var a = [ {
                code: "%",
                encode: "%25"
            }, {
                code: "?",
                encode: "%3F"
            }, {
                code: "#",
                encode: "%23"
            }, {
                code: "&",
                encode: "%26"
            }, {
                code: "=",
                encode: "%3D"
            } ], n = t.replace(/[%?#&=]/g, function(t) {
                var n, c = e(a);
                try {
                    for (c.s(); !(n = c.n()).done; ) {
                        var r = n.value;
                        if (r.code === t) return r.encode;
                    }
                } catch (e) {
                    c.e(e);
                } finally {
                    c.f();
                }
            });
            return decodeURIComponent(n);
        }
    },
    trim: s,
    nourl: function(e) {
        if (!e || "" == e) return "";
        var t = new RegExp("</?[^>]*>", "g");
        return "来自" + e.replace(t, "");
    },
    countNum: function(e) {
        return e > 1e8 ? 10 * (e / 1e8).toFixed(1) / 10 + "亿" : e > 1e4 ? 10 * (e / 1e4).toFixed(1) / 10 + "万" : e;
    },
    dealWithText: function(e, t) {
        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        e = (e = (e = (e = e.replace(/\n|↵/g, "")).replace(/@([\u4e00-\u9fa5a-zA-Z0-9_-]+)/g, function(e) {
            return '<em class="richstyle">' + e + "</em>";
        })).replace(/\#.*?\#/g, function(e) {
            return e.indexOf("[超话]") > -1 ? '<em class="richstyle"><img src="https://h5.sinaimg.cn/upload/100/959/2020/05/09/timeline_card_small_super_default.png" style="display:inline-block;width:14px;height:14px"/></i>' + e.replace("[超话]", "").replace(/\#/g, "") + "</em>" : e.indexOf("[电影]") > -1 ? '<em class="richstyle"><img src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_movie_default.png" style="display:inline-block;width:14px;height:14px"/></i>' + e.replace("[超话]", "").replace(/\#/g, "") + "</em>" : '<a href="javascript:;">' + e + "</a>";
        })).replace(/\[[\u4e00-\u9fa5a-zA-Z0-9]+\]/g, function(e) {
            if (r.emotions[e]) return ' <img src="' + o(r.emotions[e]) + '" mode="aspectFill" class="emotion" />';
        });
        var n = !1;
        if (t && t.length > 0) {
            for (var c = 0; c < t.length; c++) {
                var i = t[c].object && t[c].object.object_type || "";
                if ("" != i && "video" === i) {
                    n = !0;
                    break;
                }
            }
            for (var l = 0; l < t.length; l++) {
                var B = t[l].object && t[l].object.object_type || "";
                if ("" != B) if ("search_topic" === B) {
                    var u = "#" + s(t[l].url_ori) + "#";
                    if (t[l].object.safe_status && 99 == t[l].object.safe_status) continue;
                    e = e.replace(u, '<em class="richstyle">' + u + "</em>");
                } else if ("topic" === B) {
                    var F = "#" + s(t[l].url_ori).replace("[超话]", "") + "#";
                    e = e.replace(F, '<em class="richstyle">' + D(B) + F + "</em>");
                } else {
                    var d = s(t[l].url_ori), C = t[l].object.object && t[l].object.object.display_name || d;
                    e = e.replace(d, '<em class="richstyle">' + D(B) + C + "</em>");
                }
            }
        }
        return a.length <= 0 || a.length >= 3 || n ? '<div class="rich-node">'.concat(e, "</div>") : '<div class="rich-node single-pic">'.concat(e, "</div>");
    },
    crc32To13: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!e) return "";
        var a = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D", n = 0;
        t ^= -1;
        for (var c = 0, r = e.length; c < r; c++) n = 255 & (t ^ e.charCodeAt(c)), t = t >>> 8 ^ "0x" + a.substr(9 * n, 8);
        if ((t = ((-1 ^ t) >>> 0).toString()).length < 13) for (var i = 13 - t.length, o = 0; o < i; o++) t += 0 === o ? "1" : "0"; else t = t.substring(0, 13);
        return t;
    },
    calculateS: function(e) {
        var n = t.hex_md5(e + a.clientPin + a.entry);
        return n[1] + n[4] + n[5] + n[13] + n[16] + n[10] + n[24] + n[26];
    },
    getSaltedP: function(e) {
        var t = n.Base64.decode(a.k), r = new c.WeiboUtil();
        r.setSalt(t);
        for (var i = e.length / 116, o = "", l = 0; l < i; l++) {
            var s = 116 < e.length - 116 * l ? 116 : e.length - 116 * l, D = e.substr(116 * l, s);
            o += r.addSalt(D);
        }
        return o;
    },
    generateSessionId: function(e) {
        var n = new Date().getTime(), c = Math.floor(100 * Math.random());
        return t.hex_md5(a.fromValue + n + e + c);
    },
    getChParams: function() {
        var e = a.k && a.k.split(" "), n = e.length, c = 1e5 * Math.random() >> 0, r = e[c % n], i = Date.parse(new Date()) / 1e3 >> 0, o = "" + c + r + i;
        return {
            ch_r: c,
            ch_s: t.hex_md5(o),
            ch_t: i
        };
    },
    goToWeiboHotProgram: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "click_tabbar_go_hotflow";
        wx.reportAnalytics(e, {}), wx.navigateToMiniProgram({
            appId: "wx993d81bc0fa75897",
            path: "pages/hotflow/index",
            success: function() {},
            fail: function() {}
        });
    },
    uuid: function() {
        for (var e = [], t = 0; t < 36; t++) e[t] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
        return e[14] = "4", e[19] = "0123456789abcdef".substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "-", 
        e.join("");
    }
};