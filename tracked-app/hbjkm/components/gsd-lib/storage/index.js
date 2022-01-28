var e = {
    _storage: wx,
    _expiration_key_prefix: "__expired___storage__",
    getTimestamp: function() {
        return Math.floor(new Date().getTime() / 1e3);
    },
    setStorageSync: function(e, t, r) {
        try {
            this._storage.setStorageSync(e, t);
        } catch (r) {
            this.clearExpiredStorage();
            try {
                this._storage.setStorageSync(e, t);
            } catch (t) {
                return console.error("当前存储的key为" + e + "，其value已超出微信数据缓存限制："), console.error("单个 key 允许存储的最大数据长度为 1MB"), 
                console.error("所有数据存储上限为 10MB。"), t;
            }
        }
        this.updateExpiration(e, r || 604800);
    },
    getStorageSync: function(e) {
        return this.isExpired(e) ? (this.removeStorageSync(e), null) : this._storage.getStorageSync(e) || null;
    },
    peek: function(e) {
        var t = {
            value: this._storage.getStorageSync(e),
            timeLeft: this.getTimeLeft(e)
        };
        return t.isExpired = null !== t.timeLeft && t.timeLeft <= 0, t;
    },
    getTimeLeft: function(e) {
        var t = parseInt(this._storage.getStorageSync(this._expiration_key_prefix + e), 10);
        return t && !isNaN(t) ? t - this.getTimestamp() : null;
    },
    isExpired: function(e) {
        var t = this.getTimeLeft(e);
        return null !== t && t <= 0;
    },
    updateExpiration: function(e, t) {
        return this._storage.setStorageSync(this._expiration_key_prefix + e, this.getTimestamp() + t);
    },
    removeStorageSync: function(e) {
        this._storage.removeStorageSync(e), this._storage.removeStorageSync(this._expiration_key_prefix + e);
    },
    keys: function(e) {
        var t = this, r = [];
        return this._iterKeys(function(i) {
            0 !== i.indexOf(t._expiration_key_prefix) && (!e && t.isExpired(i) || r.push(i));
        }), r;
    },
    _iterKeys: function(e) {
        var t = wx.getStorageInfoSync();
        t.keys && t.keys.forEach(function(t) {
            e(t);
        });
    },
    clearStorageSync: function() {
        try {
            this._storage.clearStorageSync();
        } catch (e) {
            console.log("Storage clear", e);
        }
    },
    clearExpiredStorage: function() {
        var e = this, t = [];
        return this._iterKeys(function(r) {
            if (0 === r.indexOf(e._expiration_key_prefix)) {
                var i = r.substr(e._expiration_key_prefix.length);
                e.isExpired(i) && (e.removeStorageSync(i), t.push(i));
            }
        }), t;
    }
};

module.exports = e;