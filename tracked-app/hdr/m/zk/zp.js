Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("../../l/wm"), e = function(t, n) {
    return (e = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, e) {
        t.__proto__ = e;
    } || function(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    })(t, n);
};

function n(t, n) {
    function i() {
        this.constructor = t;
    }
    e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, 
    new i());
}

var i = function() {
    function e() {
        this._storage = Object.create(null);
    }
    return e.prototype.has = function(t) {
        return t in this._storage;
    }, e.prototype.purge = function() {
        this._storage = Object.create(null);
    }, e.prototype.put = function(t, e, n) {
        return void 0 === e ? this.remove(t) : this._storage[t] = e;
    }, e.prototype.get = function(t) {
        return this._storage[t];
    }, e.prototype.getAll = function() {
        return (0, t.clone)(this._storage);
    }, e.prototype.remove = function(t) {
        delete this._storage[t];
    }, e.prototype.getAndRemove = function(t) {
        var e = this.get(t);
        return void 0 !== e && this.remove(t), e;
    }, e.prototype.destroy = function() {
        this._storage = null;
    }, e.prototype.removeAll = function() {
        throw new Error("can not use removeAll func");
    }, e;
}(), r = function(t) {
    function e(e) {
        void 0 === e && (e = 50);
        var n = t.call(this) || this;
        return n._queue = [], n.capacity = e, n;
    }
    return n(e, t), e.instance = function() {
        return null === this._instance ? (this._instance = new this(), this._instance) : this._instance;
    }, e.prototype.purge = function() {
        t.prototype.purge.call(this), this._queue = [];
    }, e.prototype.put = function(e, n, i) {
        if (void 0 === i && (i = {}), void 0 !== t.prototype.put.call(this, e, n)) {
            if (!0 === i.keep) return n;
            var r = this._queue, o = r.indexOf(e);
            if (o >= 0 && r.splice(o, 1), r.push(e), r.length > this.capacity) for (var s = 0, a = r.length - this.capacity; s < a; s++) t.prototype.remove.call(this, r[s]), 
            r.shift();
            return n;
        }
    }, e.prototype.get = function(e) {
        var n = t.prototype.get.call(this, e);
        if (void 0 !== n) return this._queue.sort(function(t, n) {
            return t === e || n === e ? 1 : 0;
        }), n;
    }, e.prototype.remove = function(e) {
        t.prototype.remove.call(this, e);
        var n = this._queue.indexOf(e);
        n >= 0 && this._queue.splice(n, 1);
    }, e.prototype.destroy = function() {
        t.prototype.destroy.call(this), e._instance = null, this._queue.length = 0;
    }, e._instance = null, e;
}(i), o = function(t) {
    function e(n) {
        void 0 === n && (n = "default");
        var i = this;
        if (e._namespaces[n]) throw new Error('PersistentStorage with namespace "' + n + '" exists');
        return i = t.call(this) || this, e._namespaces[n] = i, i._namespace = "" + n, i._writeTimer = null, 
        i.readSync(), i;
    }
    return n(e, t), e.instance = function(t) {
        if (null === this._instance) {
            var e = "storage." + t + ".default";
            return this._instance = new this(e), this._instance;
        }
        return this._instance;
    }, e.instancePersistent = function() {
        if (null === this._instance_persistent) {
            return this._instance_persistent = new this("storage.default"), this._instance_persistent;
        }
        return this._instance_persistent;
    }, e.create = function(t) {
        return this._namespaces[t] || new e(t);
    }, e.prototype.purge = function() {
        t.prototype.purge.call(this), this.write();
    }, e.prototype.put = function(e, n, i) {
        if (void 0 === i && (i = {}), void 0 !== t.prototype.put.call(this, e, n)) return this.write(i.immediate), 
        n;
    }, e.prototype.remove = function(e) {
        t.prototype.remove.call(this, e), this.write();
    }, e.prototype.destroy = function(n) {
        t.prototype.destroy.call(this);
        var i = this._namespace;
        wx.removeStorageSync(i), e._instance = null, n && (e._instance_persistent = null), 
        delete e._namespaces[this._namespace], this._namespace = "";
    }, e.prototype.readSync = function() {
        try {
            var t = wx.getStorageSync(this._namespace);
            t && (this._storage = t);
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            console.error("has no storage info", t);
        }
    }, e.prototype.write = function(t) {
        var e = this;
        t && this._writeSync(), this._writeTimer && clearTimeout(this._writeTimer), this._writeTimer = setTimeout(function() {
            e._write(), e._writeTimer = null;
        }, 0);
    }, e.prototype._write = function() {
        wx.setStorage({
            key: this._namespace,
            data: this._storage
        });
    }, e.prototype._writeSync = function() {
        wx.setStorageSync(this._namespace, this._storage);
    }, e._instance = null, e._instance_persistent = null, e._namespaces = Object.create(null), 
    e;
}(i), s = {
    has: function(t, e, n) {
        return void 0 === e && (e = {}), e && e.persistent && e.notIsolate ? r.instance().has(t) || o.instancePersistent().has(t) : r.instance().has(t) || o.instance(n).has(t);
    },
    purge: function() {
        throw new Error("Cannot purge a shared cache");
    },
    put: function(t, e, n, i) {
        return void 0 === n && (n = {}), n.persistent ? n.notIsolate ? o.instancePersistent().put(t, e, n) : o.instance(i).put(t, e, n) : r.instance().put(t, e, n);
    },
    get: function(t, e, n) {
        if (void 0 === e && (e = {}), e.persistent) return e.notIsolate ? o.instancePersistent().get(t) : o.instance(n).get(t);
        var i = r.instance().get(t);
        return void 0 === i ? o.instance(n).get(t) : i;
    },
    remove: function(t, e, n) {
        void 0 === e && (e = {}), e.persistent || r.instance().remove(t), e.persistent && e.notIsolate && o.instancePersistent().remove(t), 
        o.instance(n).remove(t);
    },
    getAndRemove: function(t, e, n) {
        if (void 0 === e && (e = {}), e.persistent) return e.notIsolate ? o.instancePersistent().getAndRemove(t) : o.instance(n).getAndRemove(t);
        var i = r.instance().getAndRemove(t);
        return void 0 === i ? o.instance(n).getAndRemove(t) : i;
    },
    removeAll: function(t, e) {
        r.instance().destroy(), o.instance(e).destroy(), t && t.notIsolate && o.instancePersistent().destroy(t.notIsolate);
    }
};

exports.default = s;