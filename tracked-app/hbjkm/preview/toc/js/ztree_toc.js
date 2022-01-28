function encode_id_with_array(e, t) {
    for (var o = 0, r = 0; r < t.length; r++) o += factor(e, t.length - r, t[r]);
    return o;
}

function get_parent_id_with_array(e, t) {
    for (var o = [], r = 0; r < t.length; r++) o.push(t[r]);
    o.pop();
    for (var n = 0, r = 0; r < o.length; r++) n += factor(e, o.length - r, o[r]);
    return n;
}

function factor(opts, count, current) {
    if (1 == count) return current;
    for (var str = "", i = count - 1; i > 0; i--) str += current * opts.step + "*";
    return eval(str + "1");
}

!function(e) {
    function t(t) {
        e(t.documment_selector).find(":header").each(function() {
            var o = parseInt(this.nodeName.substring(1), 10);
            r(t, this, o), n(t, e(this));
        });
    }
    function o(t) {
        var o = e(t._zTree);
        o = e.fn.zTree.init(o, t.ztreeSetting, t._header_nodes).expandAll(t.is_expand_all), 
        e(t._zTree).css(t.ztreeStyle);
    }
    function r(t, o, r) {
        if (t._headers.length == r) t._headers[r - 1]++; else if (t._headers.length > r) t._headers = t._headers.slice(0, r), 
        t._headers[r - 1]++; else if (t._headers.length < r) for (var n = 0; n < r - t._headers.length; n++) t._headers.push(1);
        1 == t.is_auto_number && (-1 != e(o).text().indexOf(t._headers.join(".")) || e(o).text(t._headers.join(".") + ". " + e(o).text()));
    }
    function n(t, o) {
        var r = encode_id_with_array(t, t._headers), n = get_parent_id_with_array(t, t._headers);
        e(o).attr("id", r), e(o).text(), t._header_offsets.push(e(o).offset().top - t.highlight_offset), 
        e(o).offset().top, t.highlight_offset, t._header_nodes.push({
            id: r,
            pId: n,
            name: e(o).text() || "null",
            open: !0,
            url: "#" + r,
            target: "_self"
        });
    }
    function s(t) {
        var o, r = function(r) {
            o && clearTimeout(o), o = setTimeout(function() {
                var o = e(window).scrollTop();
                t.debug && console.log("top=" + o);
                for (var r = 0, n = t._header_offsets.length; r < n; r++) if (t._header_offsets[r] >= o + 5) {
                    console.log("opts._header_offsets[" + r + "] = " + t._header_offsets[r]), e("a").removeClass("curSelectedNode");
                    e("#tree_" + (r + 1) + "_a").addClass("curSelectedNode");
                    break;
                }
            }, t.refresh_scroll_time);
        };
        t.highlight_on_scroll && (e(window).bind("scroll", r), r());
    }
    function i(t) {
        t.highlight_offset = e(t.documment_selector).offset().top;
    }
    e.fn.ztree_toc = function(r) {
        var n = e.extend({}, e.fn.ztree_toc.defaults, r);
        return this.each(function() {
            n._zTree = e(this), i(n), t(n), o(n), s(n);
        });
    }, e.fn.ztree_toc.defaults = {
        _zTree: null,
        _headers: [],
        _header_offsets: [],
        _header_nodes: [ {
            id: 1,
            pId: 0,
            name: "Table of Content",
            open: !0
        } ],
        debug: !0,
        highlight_offset: 0,
        highlight_on_scroll: !0,
        refresh_scroll_time: 50,
        documment_selector: "body",
        is_posion_top: !1,
        is_auto_number: !1,
        is_expand_all: !0,
        is_highlight_selected_line: !0,
        step: 100,
        ztreeStyle: {
            width: "260px",
            overflow: "auto",
            position: "fixed",
            "z-index": 2147483647,
            border: "0px none",
            left: "0px",
            bottom: "0px"
        },
        ztreeSetting: {
            view: {
                dblClickExpand: !1,
                showLine: !0,
                showIcon: !1,
                selectedMulti: !1
            },
            data: {
                simpleData: {
                    enable: !0,
                    idKey: "id",
                    pIdKey: "pId"
                }
            },
            callback: {
                beforeClick: function(t, o) {
                    e("a").removeClass("curSelectedNode"), 1 == o.id && console.log("click root table of content"), 
                    1 == e.fn.ztree_toc.defaults.is_highlight_selected_line && e("#" + o.id).css("color", "red").fadeOut("slow", function() {
                        e(this).show().css("color", "black");
                    });
                },
                onRightClick: function(e, t, o) {
                    1 == o.id && console.log("right_click root table of content");
                }
            }
        }
    };
}(jQuery);