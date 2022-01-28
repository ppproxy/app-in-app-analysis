var e = function() {
    this.listeners = {}, this.count = 0;
};

e.prototype = {
    getGuid: function(e) {
        var t = "".concat(e).concat(this.count);
        return this.count++, t;
    },
    addEventListener: function(e, t, s) {
        console.log("Event 监听事件：", e), t._guid = this.getGuid(e);
        for (var n = [], i = arguments.length, r = 0; r < i; r++) n.push(arguments[r]);
        n = n.length > 3 ? n.splice(3, n.length - 1) : [], void 0 !== this.listeners[e] ? this.listeners[e].push({
            scope: s,
            callback: t,
            args: n
        }) : this.listeners[e] = [ {
            scope: s,
            callback: t,
            args: n
        } ];
    },
    removeEventListener: function(e) {
        void 0 !== this.listeners[e] && (this.listeners[e] = []);
    },
    removeSingleEventListener: function(e, t, s) {
        var n = this.listeners[e];
        if (n && s) {
            var i = n.findIndex(function(e) {
                return e.scope === s;
            });
            -1 !== i && this.listeners[e].splice(i, 1);
        } else if (n) {
            var r = n.findIndex(function(e) {
                return e.callback._guid === t._guid;
            });
            -1 !== r && this.listeners[e].splice(r, 1);
        }
    },
    hasEventListener: function(e, t, s) {
        if (void 0 !== this.listeners[e]) {
            var n = this.listeners[e].length;
            if (void 0 === t && void 0 === s) return n > 0;
            for (var i = 0; i < n; i++) {
                var r = this.listeners[e][i];
                if ((!s || r.scope == s) && r.callback == t) return !0;
            }
        }
        return !1;
    },
    dispatch: function(e, t) {
        console.log("Event 发布事件：", e, t);
        for (var s = {
            type: e,
            target: t
        }, n = [], i = arguments.length, r = 0; r < i; r++) n.push(arguments[r]);
        if (n = n.length > 2 ? n.splice(2, n.length - 1) : [], n = [ s ].concat(n), void 0 !== this.listeners[e]) for (var l = this.listeners[e].slice(), c = l.length, o = 0; o < c; o++) {
            var a = l[o];
            if (a && a.callback) {
                var h = n.concat(a.args);
                a.callback.apply(a.scope, h);
            }
        }
    },
    getEvents: function() {
        var e = "";
        for (var t in this.listeners) for (var s = this.listeners[t].length, n = 0; n < s; n++) {
            var i = this.listeners[t][n];
            e += i.scope && i.scope.className ? i.scope.className : "anonymous", e += " listen for '" + t + "'\n";
        }
        return e;
    }
}, module.exports = new e();