var e = require("@babel/runtime/helpers/toConsumableArray.js"), t = require("81CC8A51ACE07ADFE7AAE2566711A2D7.js"), n = require("487A5DD3ACE07ADF2E1C35D4E9A0A2D7.js"), i = {
    image: "https://h5.sinaimg.cn/upload/1035/467/2020/04/01/video_card_small_photo.png",
    url: "https://h5.sinaimg.cn/upload/1035/467/2020/04/01/timeline_card_small_web_default.png",
    webLink: "https://h5.sinaimg.cn/upload/1035/467/2020/04/01/timeline_card_small_web_default.png",
    webPage: "https://h5.sinaimg.cn/upload/1035/467/2020/04/01/timeline_card_small_web_default.png",
    super: "https://h5.sinaimg.cn/upload/1035/467/2020/04/01/super_default.png",
    video: "https://h5.sinaimg.cn/upload/1035/467/2020/04/01/timeline_card_small_video_default.png",
    live: "https://h5.sinaimg.cn/upload/1035/467/2020/04/01/timeline_card_small_video_default.png",
    story: "https://h5.sinaimg.cn/upload/1035/467/2020/04/01/timeline_card_small_video_default.png",
    movie: "https://h5.sinaimg.cn/upload/1035/467/2020/04/01/timeline_card_small_movie_default.png",
    audio: "https://h5.sinaimg.cn/upload/1035/467/2020/04/01/timeline_card_small_music_default.png",
    article: "https://h5.sinaimg.cn/upload/1035/467/2020/04/01/timeline_card_small_article_default.png",
    wenda: "https://h5.sinaimg.cn/upload/1035/467/2020/04/01/wenda_icon_default.png",
    panorama: "https://h5.sinaimg.cn/upload/1035/467/2020/04/01/timeline_card_small_web_default.png",
    place: "https://h5.sinaimg.cn/upload/1035/467/2020/04/01/timeline_card_small_location_default.png",
    mblog: "https://h5.sinaimg.cn/upload/1035/467/2020/06/23/mblog.png"
};

function o(e, t, n) {
    if (e.indexOf(t) > -1) {
        var i = e.split(t);
        if (i.length < n) return !1;
        for (var o = "", a = 0; a < n; a++) o += a === n - 1 ? "".concat(i[a]) : "".concat(i[a]).concat(t);
        return o;
    }
    return !1;
}

function a(e, t) {
    var n = "url";
    return "查看图片" === e.url_title || "查看动图" === e.url_title ? n = "image" : "微博正文" === e.url_title ? n = "mblog" : "" != e.url_type && 0 != e.url_type && 36 != e.url_type && 39 != e.url_type || ("" == e.object_type && "" == e.url_type && -1 != e.short_url.indexOf("[超话]") ? n = "super" : "product" === e.object_type ? n = "product" : "place" === e.object_type ? n = "place" : "movie" === e.object_type ? n = "movie" : "audio" === e.object_type ? n = "audio" : !t || t.page_id != e.page_id || "video" !== t.object_type && "adFeedVideo" !== t.object_type ? t && t.page_id == e.page_id && 26 == t.type && "live" === t.object_type ? n = "live" : !t || t.page_id != e.page_id || 31 != t.type && "0" != t.type || "story" !== t.object_type || 39 != e.url_type ? t && t.page_id == e.page_id && 24 == t.type && "wenda" === t.object_type ? n = "wenda" : !t || t.page_id != e.page_id || 13 != t.type && 29 != t.type || "panorama" !== t.object_type ? t && t.page_id == e.page_id && 0 == t.type && "vote" === t.object_type ? n = "vote" : e.ori_url && -1 != e.ori_url.indexOf("article") ? n = "article" : !t || 5 != t.type && 0 != t.type || "webpage" !== t.object_type ? "webpage" !== e.object_type && e.object_type && -1 == e.page_id.indexOf("230501shop_sc_weibo_col_") ? 0 != e.url_type || "网页链接" !== e.url_title || e.object_type || (n = "webLink") : n = "url" : n = "webPage" : n = "panorama" : n = "story" : n = "video"), 
    n;
}

function r(e, t) {
    return -1 != e.indexOf("http://t.cn/") && 19 == t;
}

function c(e) {
    var t = "horizontal", n = {
        width: 750,
        height: 424
    };
    if (e) {
        var i = e.pic_big || e.pic_middle || e.pic_small || e.url;
        if (i) {
            var o = parseInt(i.height, 10), a = parseInt(i.width, 10), r = 750 * o / a, c = 750;
            if (o == a ? t = "square" : o > a ? (t = "vertical", c = a, r = o) : o < a && (t = "horizontal"), 
            c > 750 && r <= 750 && (r = 750 * r / c, c = 750), r > 750 && c <= 750 && (c = 750 * c / r, 
            r = 750), r > 750 && c > 750) {
                for (;c > 750; ) r = (c - 10) * r / c, c -= 10;
                r > 750 && (c = 750 * c / r, r = 750);
            }
            n = {
                width: c,
                height: r
            };
        }
    }
    return {
        videoSquare: t,
        videoSize: n
    };
}

function l(e, t) {
    var n = getApp(), i = e.href;
    return !i || -1 == i.indexOf("m.weibo.cn") && -1 == i.indexOf("media.weibo.cn") && -1 == i.indexOf("ing.weibo.com") && -1 == i.indexOf("wx3.sinaimg.cn") ? (e.tag = "launchApp", 
    e.href = "sinaweibo://detail/?mblogid=".concat(t, "&luicode=10000360&lfid=miniprogram&userId=").concat(n.globalData.uid)) : e.href = d(e.href), 
    e;
}

function d(e) {
    return -1 == e.indexOf("https") ? e.replace("http", "https") : e;
}

function s(e, t, n) {
    for (var i = !1, o = t + 1; o < e.length; ) {
        if (-1 != n.indexOf(o) && "#" === e[o]) {
            i = !0;
            break;
        }
        if ("#" === e[o]) {
            i = !0;
            break;
        }
        o += 1;
    }
    return o == e.length && "#" === e[o] && (i = !0), i ? o : -1;
}

function p(e, t, n) {
    for (var i = t; i < e.length && "@" !== e[i] && "#" !== e[i] && -1 == n.indexOf(i); ) i += 1;
    return i;
}

function u(e) {
    return e.replace(/http[:]{0,1}[/]{0,1}[/]{0,1}[t]{0,1}[.]{0,1}[a-z]{0,2}[/]{0,1}[a-zA-Z0-9]+/, "");
}

var g = [ "@", " ", ":", "：", " ", "、", ",", "，", ")", "）", "(", "（", "{", "}", "[", "]", "。", ".", "\n" ];

function _(e, t, n) {
    for (var i = !1, o = t + 1; o < e.length; ) {
        if (-1 != n.indexOf(o)) {
            i = !0;
            break;
        }
        if (-1 != g.indexOf(e[o])) {
            i = !0;
            break;
        }
        o += 1;
    }
    return o == e.length && (i = !0), i ? o : -1;
}

function m(e, t) {
    return e.fromIndex - t.fromIndex;
}

module.exports = {
    parseStatus: function g(f, h, v) {
        if (f && (1 != f.deleted || f.text)) {
            var x = 0, b = [], y = [], w = [];
            if (f.pic_ids && f.pic_ids.length > 0 && f.pic_infos) for (var C = f.pic_infos, I = f.pic_ids, L = 0; L < I.length; L++) {
                var O = I[L], T = C[O].object_id, j = C[O].middleplus && C[O].middleplus.url || C[O].bmiddle && C[O].bmiddle.url, S = C[O].large.url, k = C[O].bmiddle.url, z = C[O].largest.url, A = C[O].type, q = parseInt(C[O].largest.width, 10), N = parseInt(C[O].largest.height, 10), U = parseInt(750 * N / q, 10), D = {
                    smallImgSrc: j,
                    imgSrc: S,
                    middleImgSrc: k,
                    bigImgSrc: z,
                    imgType: A,
                    picId: O,
                    objectId: T
                };
                w.push(D), q && N && (x += parseInt(750 * N / q, 10)), y.push({
                    height: U
                }), b.push({
                    show: L < 2 || x < 2400
                });
            }
            var R = {};
            R.blogId = f.id, f.user && (R.userId = f.user.id || "", R.avatar = f.user.avatar_large || "", 
            R.nickname = f.user.screen_name || "", R.isFollow = f.user.following || !1, R.verified = f.user.verified || !1, 
            R.verified_type = f.user.verified_type), R.createdAt = f.timestamp_text ? f.created_at : f.timestamp_text;
            var F = new Date(), P = (F.getFullYear(), F.getMonth() + 1);
            P < 10 && (P = "0".concat(P));
            var H = F.getDate();
            H < 10 && (H = "0".concat(H)), R.text = f.text, R.originAttitudesCount = f.attitudes_count;
            var B = function(e) {
                var n = e.attitudes_count || e.like_counts || 0, i = {
                    repostsCount: t.convertToTenThousandIfNeeded(e.reposts_count),
                    commentsCount: t.convertToTenThousandIfNeeded(e.comments_count),
                    attitudesCount: t.convertToTenThousandIfNeeded(n)
                };
                if (e && e.number_display_strategy) {
                    var o = e.number_display_strategy, a = "";
                    o.apply_scenario_flag && (a = o.apply_scenario_flag.toString(2));
                    var r = o.display_text_min_number, c = o.display_text;
                    i.scenarioFlag = a, i.minNumber = r, i.displayText = c, t.hasHitNumberDisplayStrategy(a, "reposts") && e.reposts_count >= r && (i.repostsCount = c), 
                    t.hasHitNumberDisplayStrategy(a, "comments") && e.comments_count >= r && (i.commentsCount = c), 
                    t.hasHitNumberDisplayStrategy(a, "attitudes") && n >= r && (i.attitudesCount = c);
                }
                return i;
            }(f);
            R.repostsCount = B.repostsCount, R.commentsCount = B.commentsCount, R.attitudesCount = B.attitudesCount, 
            R.scenarioFlag = B.scenarioFlag, R.minNumber = B.minNumber, R.displayText = B.displayText, 
            R.likeStatus = 1 == f.attitudes_status, R.showToggleImg = !(x < 1800), R.visibleType = f.visible ? f.visible.type : 0, 
            R.favorited = f.favorited;
            var W = f.source;
            W && W.length > 0 && -1 != W.indexOf("</a>") && -1 != W.indexOf(">") ? R.createdDevice = "来自 ".concat(W.split("</a>")[0].split(">")[1]) : R.createdDevice = W;
            var M = {
                mediaType: "normal",
                mediaSrc: "",
                showImgList: b,
                imgHeightList: y,
                imageList: w
            }, Z = [], E = [], V = f.text, Y = f.text, G = !1;
            if (f.isLongText) if (!f.longText && v) {
                var J = o(f.text, "\n", 1), K = o(f.text, "\n\n", 2);
                if (K) V = K, K.length > 100 && (V = K.substring(0, 100)), V += "... 全文"; else if (J) {
                    var Q = o(f.text.substring(0, 110), "\n", 2), X = o(f.text.substring(0, 110), "\n\n", 1);
                    X || Q ? (Y = V = X || Q, V += "... 全文") : (Y = V = f.text.substring(0, 100), V += "... 全文");
                } else {
                    var $ = f.text;
                    $.length > 140 && ($ = f.text.substring(0, 136)), V = "".concat($, "... 全文");
                }
            } else if (v) {
                var ee = o(f.text, "\n\n", 1), te = o(f.text, "\n", 2);
                ee || te ? (Y = V = te || ee, V += "... 全文") : f.text.length > 140 ? (Y = V = f.text.substring(0, 140), 
                V += "... 全文") : f.continue_tag && (V = "".concat(f.text, "... 全文"));
            } else f.longText && (V = f.longText.longTextContent || f.longText.content || V); else {
                var ne = o(f.text.substring(0, 110), "\n", 2);
                v && ne !== f.text && (G = !0, ne && (Y = V = ne, V += "... 全文"));
            }
            var ie = V, oe = V, ae = ie.length, re = f.page_info || {};
            if (f.url_struct) for (var ce = 0; ce < f.url_struct.length; ce++) {
                var le = f.url_struct[ce];
                if (!h || -1 != ie.indexOf(le.short_url) || -1 != Y.indexOf(le.short_url)) {
                    var de = ie.indexOf(le.short_url);
                    -1 == ie.indexOf(le.short_url) && -1 != Y.indexOf(le.short_url) && (de = ae, ae += le.short_url.length);
                    var se = a(le, f.page_info), pe = {
                        tag: se,
                        content: le.url_title,
                        shortUrl: le.short_url,
                        href: "#",
                        icon: i[se] || "#",
                        fromIndex: de,
                        contentLength: le.short_url.length,
                        hidden: !1
                    };
                    if ("image" === se) {
                        var ue = le.pic_ids.length > 0 ? le.pic_ids[0] : "#", ge = "#" == ue ? "#" : "https://wx3.sinaimg.cn/woriginal/".concat(ue);
                        ge = "#" == ge ? le.short_url : ge, pe.tag = "image", pe.href = ge;
                    }
                    var _e = "#", me = "#", fe = "";
                    if ("url" === se) pe.href = le.short_url; else if ("webLink" === se) pe.href = le.ori_url; else if ("webPage" === se) {
                        var he = le.short_url;
                        if (r(f.text, f.textLength) && re.cards && re.cards.length > 0) {
                            var ve = re.cards[0];
                            ve.page_pic && (M.mediaType = "webPage", M.imgContent = ve.page_pic, M.mid = f.mid);
                        }
                        re.page_url && (he = re.page_url.replace("sinaweibo://browser?disable_interception=1&url=", ""), 
                        he = decodeURIComponent(he)), pe.href = he;
                    } else if ("super" === se) pe.href = "https://m.weibo.cn/p/index?containerid=".concat(le.page_id); else if ("video" === se || "live" === se) {
                        var xe = re;
                        if ("5" == re.type && re.cards && re.cards.length > 0) for (var be = 0; be < re.cards.length; be++) {
                            var ye = re.cards[be];
                            if (ye && "11" == ye.type && "video" === ye.object_type) {
                                xe = ye;
                                break;
                            }
                        }
                        me = xe.page_pic || "";
                        var we = xe.media_info;
                        we && we.mp4_hd_url ? _e = we.mp4_hd_url : we && we.mp4_sd_url ? _e = we.mp4_sd_url : we && we.stream_url && (_e = we.stream_url), 
                        "live" === se && xe.object_id && (_e = "https://live.weibo.com/show?id=".concat(xe.object_id));
                        var Ce = c(xe.pic_info), Ie = Ce.videoSquare, Le = Ce.videoSize;
                        pe.tag = "live" === se ? se : "video", pe.href = le.short_url, pe.videoSquare = Ie, 
                        pe.videoSize = Le, M.mediaType = "live" === se ? se : "video", M.mediaSrc = _e, 
                        M.mediaImage = me, M.videoSquare = Ie, M.videoSize = Le, M.authorId = xe.author_id || xe.authorid || "";
                    } else if ("story" === se) {
                        fe = re.object_id;
                        var Oe = "#";
                        if (re.slide_cover && re.slide_cover.slide_videos && re.slide_cover.slide_videos.length > 0) {
                            var Te = re.slide_cover.slide_videos[0];
                            Oe = Te.url || Oe, me = Te.cover || me;
                        }
                        if ("#" != Oe) {
                            _e = Oe;
                            var je = c(re.pic_info);
                            M.mediaType = "video", M.videoSquare = je.videoSquare, M.videoSize = je.videoSize;
                        } else _e = "https://m.weibo.cn/c/story/player?oid=".concat(fe), M.mediaType = pe.tag;
                        pe.href = _e, M.mediaSrc = _e, M.mediaImage = me;
                    } else if ("movie" === se) fe = le.page_id, pe.href = "https://m.weibo.cn/p/index?containerid=".concat(fe); else if ("audio" === se) fe = le.page_id, 
                    pe.href = "https://m.weibo.cn/p/index?containerid=".concat(fe); else if ("article" === se) {
                        if ("article" === re.object_type) fe = re.page_id || "", M.mediaType = "article", 
                        M.href = re.target_url || "https://media.weibo.cn/article?id=".concat(fe), M.articleAvatar = re.user && re.user.avatar_large || "", 
                        M.articleBackground = re.page_pic || "", M.articleTitle = re.content1 || "", M.articleAuthor = re.content3 || ""; else {
                            var Se = le.ori_url || "";
                            Se.split("?").length > 1 && (fe = decodeURIComponent(t.getUrlParam(Se.split("?")[1], "object_id")));
                        }
                        pe.href = "https://media.weibo.cn/article?id=".concat(fe);
                    } else if ("wenda" === se) {
                        fe = re.page_id || "", "top_wenda" === re.source_type ? pe.href = "https://media.weibo.cn/wenda?id=".concat(fe) : pe.href = "https://m.weibo.cn/p/".concat(fe), 
                        M.href = pe.href, M.mediaType = "wenda", M.wendaBackground = re.page_pic || "", 
                        M.wendaTitle = re.content1 || "", -1 != re.page_title.indexOf("已回答") && (M.wendaAuthor = re.page_title.replace("@ ", ""), 
                        M.wendaAvatar = re.user && re.user.avatar_large || "");
                        for (var ke = re.content2_html || "", ze = [], Ae = (ke = (ke = ke.replace(/(<[a-zA-z]+ [a-zA-z]+=#[a-zA-Z0-9]+><[a-z]>)/g, "count")).replace(/<\/[a-z]><\/[a-z]+>/g, "info")).split("count"), qe = 0; qe < Ae.length; qe++) {
                            var Ne = Ae[qe];
                            Ne && ze.push({
                                count: Ne.split("info")[0] || "",
                                info: Ne.split("info")[1] || ""
                            });
                        }
                        M.wendaInfoList = ze;
                    } else if ("panorama" === se) fe = re.object_id || "", pe.href = "https://m.weibo.cn/z/panorama?oid=".concat(fe); else if ("vote" === se) pe.href = le.short_url; else if ("product" === se) pe.href = le.short_url; else if ("place" === se) pe.href = le.short_url; else if ("mblog" === se) if (pe.href = le.long_url || "#", 
                    le.ori_url && le.ori_url.split("mblogid=") && le.ori_url.split("mblogid=").length > 1) {
                        var Ue = le.ori_url.split("mblogid=")[1];
                        pe.mblogId = Ue, pe.href = "https://m.weibo.cn/detail/".concat(Ue);
                    } else pe.tag = "url", pe.icon = i.url;
                    var De = re.object_type && re.object_type.toLowerCase() || "";
                    1 == le.hide && "place" !== se && De != se.toLowerCase() && (Y = Y.replace(le.short_url, ""), 
                    oe = oe.replace(le.short_url, "")), "continue" == pe.tag && (oe = oe.replace(pe.content, "")), 
                    -1 == Y.indexOf(le.short_url) && -1 == oe.indexOf(le.short_url) && "continue" != pe.tag || ("super" == pe.tag && (pe.content = pe.content.replace(/#/g, ""), 
                    pe.content = pe.content.replace("[超话]", "")), "place" == pe.tag && (pe.fromIndex = Y.indexOf(le.short_url)), 
                    -1 == E.indexOf(pe.fromIndex) && (E.push(pe.fromIndex), Z.push(l(pe, f.mid))));
                }
            }
            if (f.deleted) {
                R.deleted = f.deleted;
                var Re = f.text;
                if (-1 != Re.indexOf("http://t.cn")) {
                    var Fe = Re.indexOf("http://t.cn"), Pe = {
                        tag: "delete",
                        content: "网页链接",
                        icon: i.url,
                        fromIndex: Fe,
                        contentLength: 19
                    };
                    E.push(Pe.fromIndex), Z.push(l(Pe, f.mid));
                }
            }
            if (f.topic_struct) for (var He = 0; He < f.topic_struct.length; He++) {
                var Be = f.topic_struct[He];
                if (-1 != oe.indexOf(Be.topic_title) && 1 != Be.is_invalid) {
                    var We = {
                        tag: "topic"
                    };
                    We.content = "#".concat(Be.topic_title, "#"), We.fromIndex = oe.indexOf(We.content), 
                    We.contentLength = We.content.length;
                    var Me = "";
                    if (-1 != Be.topic_url.indexOf("?") && -1 != Be.topic_url.indexOf("&")) {
                        var Ze = Be.topic_url.split("?")[1].split("&");
                        Array.isArray(Ze) && Ze.forEach(function(e) {
                            if (-1 != e.indexOf("=")) {
                                var t = e.split("=");
                                "containerid" == t[0] && (Me = t[1]);
                            }
                        });
                    }
                    We.href = "" != Me ? "https://m.weibo.cn/p/searchall?containerid=".concat(encodeURIComponent(encodeURIComponent("".concat(Me, "type=1&q=").concat(We.content)))) : Be.topic_url, 
                    E.push(We.fromIndex), Z.push(We);
                }
            }
            if (f.tag_struct) for (var Ee = f.tag_struct, Ve = 0; Ve < Ee.length; Ve++) {
                var Ye = Ee[Ve];
                if (-1 != Ye.tag_scheme.indexOf("位置") && 1 == Ye.tag_type) {
                    var Ge = {
                        tag: "place"
                    };
                    Ge.icon = i.place || "#";
                    var Je = Ye.tag_name;
                    Ge.content = Je;
                    var Ke = oe.indexOf(Je);
                    if (-1 == Ke && f.longText && f.longText.longTextContent && f.longText.url_objects) for (var Qe = f.longText.url_objects, Xe = 0; Xe < Qe.length; Xe++) {
                        var $e = Qe[Xe];
                        if ($e.object && $e.object.object && "place" === $e.object.object.object_type) {
                            Je = $e.url_ori, Ke = oe.indexOf(Je);
                            break;
                        }
                    }
                    Ge.fromIndex = -1 == Ke ? oe.length : Ke, Ge.contentLength = V.length, E.push(Ge.fromIndex), 
                    Z.push(l(Ge, f.mid));
                }
            }
            if (f.longText && f.longText.url_objects) for (var et = 0; et < f.longText.url_objects.length; et++) {
                var tt = f.longText.url_objects[et];
                if (tt.object && tt.object.object_type && 1 == tt.object.safe_status) {
                    if ("search_topic" == tt.object.object_type) {
                        var nt = {
                            tag: "topic"
                        };
                        nt.content = tt.url_ori ? "#".concat(tt.url_ori, "#") : "#", nt.fromIndex = oe.indexOf(nt.content), 
                        nt.contentLength = nt.content.length, nt.href = "https://m.weibo.cn/p/searchall?containerid=".concat(encodeURIComponent(encodeURIComponent("231522type=1&q=".concat(nt.content)))), 
                        tt.url_ori && -1 != oe.indexOf(nt.content) && -1 == E.indexOf(nt.fromIndex) && (E.push(nt.fromIndex), 
                        Z.push(nt));
                    }
                } else if (tt.url_ori && tt.status && tt.status.mid) {
                    var it = tt.status.mid, ot = {
                        tag: "mblog"
                    };
                    ot.icon = i[ot.tag], ot.content = "微博正文", ot.fromIndex = oe.indexOf(tt.url_ori), 
                    ot.contentLength = tt.url_ori.length, ot.href = "https://m.weibo.cn/detail/".concat(it), 
                    ot.mblogId = it, tt.url_ori && -1 != oe.indexOf(tt.url_ori) && -1 == E.indexOf(ot.fromIndex) && (E.push(ot.fromIndex), 
                    Z.push(ot));
                } else if (tt.url_ori) {
                    var at = {
                        tag: "url"
                    };
                    at.icon = i[at.tag], at.content = "网页链接", at.fromIndex = oe.indexOf(tt.url_ori), 
                    at.contentLength = tt.url_ori.length, at.href = tt.url_ori, tt.url_ori && -1 != oe.indexOf(tt.url_ori) && -1 == E.indexOf(at.fromIndex) && (E.push(at.fromIndex), 
                    Z.push(at));
                }
            }
            if ((f.isLongText || G) && (!f.longText || v) && -1 != oe.lastIndexOf("... 全文")) {
                var rt = {
                    tag: "continue",
                    content: "... 全文",
                    href: "/pages/index/index?blog_id=".concat(f.id),
                    icon: "#",
                    fromIndex: oe.lastIndexOf("... 全文"),
                    contentLength: "... 全文".length
                };
                Z.push(rt), E.push(rt.fromIndex);
            }
            for (var ct = oe.split(/(\[[^[\]]+\])/), lt = 0, dt = 0; dt < ct.length; dt++) {
                var st = ct[dt];
                if ("" != st) {
                    if (-1 != st.indexOf("[") && -1 != st.indexOf("]") && "[超话]" != st && "[地点]" != st) {
                        var pt = {
                            tag: "emotion",
                            icon: n.emotions[st] ? "".concat(n.emotions[st]) : "#",
                            href: "#",
                            content: n.emotions[st] ? "" : st,
                            fromIndex: lt,
                            contentLength: st.length
                        };
                        E.push(lt), Z.push(pt);
                    }
                    lt += st.length;
                }
            }
            (Z = function(e, t, n) {
                var i = 0, o = t;
                for (;i < e.length; ) if (n.length > 0 && -1 != n.indexOf(i)) i += o[n.indexOf(i)].contentLength; else if ("#" == e[i]) {
                    var a = s(e, i, n);
                    if (a > 0) {
                        a += 1;
                        var r = e.slice(i, a), c = {
                            tag: "topic",
                            icon: "#",
                            href: "https://m.weibo.cn/p/searchall?containerid=".concat(encodeURIComponent(encodeURIComponent("231522type=1&q=".concat(r)))),
                            content: r,
                            fromIndex: i,
                            contentLength: a - i
                        };
                        i = a, o.push(c);
                    } else {
                        a = p(e, i + 1, n);
                        var l = e.slice(i, a), d = {
                            tag: "normal",
                            icon: "#",
                            href: "#",
                            content: l = (l = u(l)).replace(/ /g, ""),
                            fromIndex: i,
                            contentLength: a - i
                        };
                        i = a, o.push(d);
                    }
                } else if ("@" == e[i]) {
                    var g = _(e, i, n);
                    if (g > 0) {
                        var m = {
                            tag: "at",
                            icon: "#",
                            href: e.slice(i + 1, g),
                            content: e.slice(i, g),
                            fromIndex: i,
                            contentLength: g - i
                        };
                        i = g, o.push(m);
                    } else i += 1;
                } else if (" " == e[i]) i += 1; else {
                    var f = p(e, i, n), h = e.slice(i, f), v = {
                        tag: "normal",
                        icon: "#",
                        href: "#",
                        content: h = (h = u(h)).replace(/ /g, ""),
                        fromIndex: i,
                        contentLength: f - i
                    };
                    i = f, o.push(v);
                }
                return o;
            }(oe, Z, E)).sort(m);
            for (var ut = [], gt = 0; gt < Z.length; gt++) {
                var _t = Z[gt];
                _t.hidden || ut.push(_t);
            }
            if (ut.sort(m), w && w.length > 0 && "normal" == M.mediaType && (M.mediaType = "image", 
            M.picNum = f.pic_num || 0), M && (M.mediaSrc = d(M.mediaSrc || "")), R.mediaContent = M, 
            R.cardContentList = ut, R.mediaContent.mediaType, f.retweeted_status) {
                var mt = f.retweeted_status;
                mt.page_info = f.page_info, mt.url_struct = f.url_struct, mt.topic_struct = f.topic_struct;
                var ft = g(mt, !!mt.retweeted_status, !0);
                R.mediaContent.mediaType && "normal" != R.mediaContent.mediaType && (R.mediaContent.mediaType = "normal"), 
                ft.user = mt.user, R.retweetedStatus = ft;
            }
            for (var ht = 0, vt = 0; vt < R.cardContentList.length; vt++) if (R.cardContentList[vt].toShowArticle = !1, 
            R.cardContentList[vt].toShowWenda = !1, R && R.mediaContent && ("normal" === R.mediaContent.mediaType || "video" === R.mediaContent.mediaType || "image" === R.mediaContent.mediaType || R.mediaContent.imageList && 0 != R.mediaContent.imageList.length) && ("article" === R.cardContentList[vt].tag && (R.cardContentList[vt].toShowArticle = !0), 
            "wenda" === R.cardContentList[vt].tag && (R.cardContentList[vt].toShowWenda = !0)), 
            R.cardContentList[vt].icon && "#" !== R.cardContentList[vt].icon && "video" !== R.cardContentList[vt].tag && "live" !== R.cardContentList[vt].tag && "article" !== R.cardContentList[vt].tag && "wenda" !== R.cardContentList[vt].tag || "article" === R.cardContentList[vt].tag && R.cardContentList[vt].toShowArticle || "wenda" === R.cardContentList[vt].tag && R.cardContentList[vt].toShowWenda ? R.cardContentList[vt].showIcon = !0 : R.cardContentList[vt].showIcon = !1, 
            "emotion" !== R.cardContentList[vt].tag || R.cardContentList[vt].icon && "#" !== R.cardContentList[vt].icon || (R.cardContentList[vt].tag = "normal"), 
            v) {
                var xt = R.cardContentList[vt], bt = R.cardContentList[vt].tag, yt = xt.content.length;
                if (ht + yt > 42 || 0 === ht && yt > 30) {
                    var wt = vt;
                    if ("normal" === bt) {
                        var Ct = xt.content.replace("... 全文", ""), It = 42 - ht, Lt = Ct.search(/[^\n][\n][^\n]/), Ot = Ct.search(/[\n\n]/), Tt = Lt;
                        -1 !== Lt && -1 !== Ot ? Tt = Math.min(Lt, Ot) : -1 !== Ot && (Tt = Ot), (0 === ht && -1 !== Lt && Lt < 42 && Lt === Tt || Tt <= 0 || Tt > It) && (Tt = It), 
                        xt.content = Ct.substring(0, Tt), wt += 1, ht += xt.content.length;
                    }
                    R.cardContentList = R.cardContentList.slice(0, wt);
                    var jt = {
                        tag: "continue",
                        content: "... 全文",
                        href: "/pages/index/index?blog_id=".concat(f.id),
                        icon: "#",
                        fromIndex: ht + 1,
                        contentLength: "... 全文".length
                    };
                    R.cardContentList.push(jt);
                    break;
                }
                ht += "emotion" === bt ? 1 : yt;
            }
            if (R && R.mediaContent && "video" == R.mediaContent.mediaType && (R.mediaContent.videoPlayNum = f.obj_ext, 
            re.media_info)) {
                var St = re.media_info;
                R.mediaContent.durationSec = St.duration, R.mediaContent.next_title = St.titles && St.titles[0] && St.titles[0].title || St.next_title, 
                R.mediaContent.videoOrientation = St.video_orientation;
            }
            if (R.externSafe = f.extern_safe || 0, f.complaint && (R.complaint = {
                showcontent: f.complaint.showcontent || "",
                url: d(f.complaint.url || ""),
                mlevel: f.mlevel
            }), f.extend_info && f.extend_info.mark && void 0 !== f.extend_info.mark.value && null !== f.extend_info.mark.value) {
                var kt = e(f.extend_info.mark.value);
                kt && kt.length && parseInt(kt[0], 0) > 0 && (R.isHotBlog = !0);
            }
            return R;
        }
    }
};