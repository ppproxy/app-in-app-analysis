var e = function() {
    this.listeners = {}, this.count = 0;
};

e.prototype = {
    getGuid: function(e) {
        var s = "" + e + this.count;
        return this.count++, s;
    },
    addEventListener: function(e, s, t) {
        console.log("Event 监听事件：", e), s._guid = this.getGuid(e);
        for (var i = [], n = arguments.length, r = 0; r < n; r++) i.push(arguments[r]);
        i = i.length > 3 ? i.splice(3, i.length - 1) : [], void 0 !== this.listeners[e] ? this.listeners[e].push({
            scope: t,
            callback: s,
            args: i
        }) : this.listeners[e] = [ {
            scope: t,
            callback: s,
            args: i
        } ];
    },
    removeEventListener: function(e) {
        void 0 !== this.listeners[e] && (this.listeners[e] = []);
    },
    removeSingleEventListener: function(e, s, t) {
        var i = this.listeners[e];
        if (i && t) {
            var n = i.findIndex(function(e) {
                return e.scope === t;
            });
            -1 !== n && this.listeners[e].splice(n, 1);
        } else if (i) {
            var r = i.findIndex(function(e) {
                return e.callback._guid === s._guid;
            });
            -1 !== r && this.listeners[e].splice(r, 1);
        }
    },
    hasEventListener: function(e, s, t) {
        if (void 0 !== this.listeners[e]) {
            var i = this.listeners[e].length;
            if (void 0 === s && void 0 === t) return i > 0;
            for (var n = 0; n < i; n++) {
                var r = this.listeners[e][n];
                if ((!t || r.scope == t) && r.callback == s) return !0;
            }
        }
        return !1;
    },
    dispatch: function(e, s) {
        console.log("Event 发布事件：", e, s);
        for (var t = {
            type: e,
            target: s
        }, i = [], n = arguments.length, r = 0; r < n; r++) i.push(arguments[r]);
        if (i = i.length > 2 ? i.splice(2, i.length - 1) : [], i = [ t ].concat(i), void 0 !== this.listeners[e]) for (var l = this.listeners[e].slice(), o = l.length, c = 0; c < o; c++) {
            var a = l[c];
            if (a && a.callback) {
                var h = i.concat(a.args);
                a.callback.apply(a.scope, h);
            }
        }
    },
    getEvents: function() {
        var e = "";
        for (var s in this.listeners) for (var t = this.listeners[s].length, i = 0; i < t; i++) {
            var n = this.listeners[s][i];
            e += n.scope && n.scope.className ? n.scope.className : "anonymous", e += " listen for '" + s + "'\n";
        }
        return e;
    }
}, module.exports = new e();