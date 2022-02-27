var t = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.PageFactory = exports.ComponentFactory = exports.AppFactory = void 0;

var e = require("../../@babel/runtime/helpers/possibleConstructorReturn"), n = require("../../@babel/runtime/helpers/assertThisInitialized"), o = require("../../@babel/runtime/helpers/classCallCheck"), i = require("../../@babel/runtime/helpers/createClass"), a = require("../../@babel/runtime/helpers/inherits"), s = require("../../@babel/runtime/helpers/createSuper"), r = require("../../@babel/runtime/helpers/createForOfIteratorHelper"), l = require("../../@babel/runtime/helpers/slicedToArray"), c = require("../../l/wm"), h = t(require("./zy"));

function u(t) {
    return function() {
        this.$page.$broadcast("xcx:".concat(t));
    };
}

function p(t) {
    return function() {
        this.$component && this.$component.$broadcast("xcx:".concat(t));
    };
}

function f(t, e, n, o) {
    Object.defineProperty(t, e, {
        value: n,
        writable: o,
        configurable: !0
    });
}

function g(t) {
    return function() {
        for (var e, n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
        (e = this.$app).$broadcast.apply(e, [ "xcx:".concat(t) ].concat(o));
    };
}

function d(t) {
    if (getApp && "function" == typeof getApp) {
        var e = getApp();
        if (e.onError && t) return e.onError(t);
    }
}

function m(t) {
    for (var e, n = t || {}, o = n.err, i = n.needTrigger, a = void 0 === i || i, s = arguments.length, r = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++) r[l - 1] = arguments[l];
    if ((e = console.error).call.apply(e, [ null ].concat(r)), a) return d(o);
}

function y(t, e) {
    var n, o, i, a = t.length > 1;
    function s(t, e, a) {
        if (clearTimeout(i), "[object Object]" === Object.prototype.toString.call(e) && (a = e), 
        "function" == typeof e && o.push(e), t) {
            for (var s = 0, r = Object.keys(t); s < r.length; s++) {
                var l = r[s];
                void 0 === t[l] ? delete t[l] : (0, c.setAt)(l, this.data, t[l]);
            }
            (0, c.merge)(n, t);
        }
        if (a && a.instant) return u();
        i = setTimeout(u, 0);
    }
    return h(), s.$kill = function() {
        i && (i = clearTimeout(i)), n = null, o.length = 0;
    }, s;
    function h() {
        var t = n, e = o;
        return n = Object.create(null), o = [], [ t, e ];
    }
    function u() {
        var n = h(), o = l(n, 2), i = o[0], s = function(t) {
            return function() {
                var e, n = r(t);
                try {
                    for (n.s(); !(e = n.n()).done; ) {
                        var o = e.value;
                        try {
                            o();
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            m({
                                err: t
                            }, "Uncaught exception in setData callback", t.stack);
                        }
                    }
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    n.e(t);
                } finally {
                    n.f();
                }
            };
        }(o[1]);
        (0, c.apply)(t, e, a ? [ i, s ] : [ i ]), a || s();
    }
}

for (var v = [ "onLaunch", "onShow", "onHide", "onError", "onPageNotFound", "onThemeChange", "onUnhandledRejection" ], $ = [ "onLoad", "onShow", "onReady", "onHide", "onUnload" ], _ = [ "created", "ready", "detached" ], k = {
    name: !0,
    options: !0,
    properties: !0,
    data: !0,
    created: !0,
    ready: !0,
    detached: !0,
    methods: !0,
    _methods: !0,
    observers: !0,
    _observers: !0,
    localData: !0,
    _localData: !0,
    components: !0,
    plugins: !0,
    logProps: !0,
    _logProps: !0
}, b = {
    data: !0,
    methods: !0,
    localData: !0,
    _localData: !0,
    components: !0,
    $getFactory: !0,
    mixins: !0,
    onLoad: !0,
    onShow: !0,
    onReady: !0,
    onHide: !0,
    onUnload: !0,
    onPullDownRefresh: !0,
    onReachBottom: !0,
    onShareAppMessage: !0,
    onPageScroll: !0,
    onResize: !0,
    onTabItemTap: !0,
    handleRootInstance: !0,
    plugins: !0,
    logProps: !0,
    _logProps: !0,
    spmInfo: !0,
    events: !0
}, O = function(t) {
    a(n, t);
    var e = s(n);
    function n(t, i) {
        var a;
        return o(this, n), (a = e.call(this)).components = {}, a.mixins = [], a.plugins = [], 
        a.methods = {}, a._validate(t), a.$originpage = i, t.components && (a.components = t.components), 
        t.localData && (a.localData = t.localData), t.logProps && (a.logProps = t.logProps), 
        a._init(t), a;
    }
    return i(n, [ {
        key: "$id",
        get: function() {
            return this.$root.__wxExparserNodeId__;
        }
    }, {
        key: "name",
        get: function() {
            return this._name ? this._name : this.$root && this.route ? this._name = "@" + this.route.replace(/^pages\/(.+)\/index$/, "$1").replace(/\//g, "_") : "";
        }
    }, {
        key: "data",
        get: function() {
            return this.$root.data;
        }
    }, {
        key: "route",
        get: function() {
            return this.$root.route || this.$root.__route__;
        }
    }, {
        key: "query",
        get: function() {
            return this.$root.options || this.$root.query;
        }
    }, {
        key: "$root",
        get: function() {
            return this.$originpage, this.$originpage;
        }
    }, {
        key: "_validate",
        value: function(t) {
            if (!t) throw new Error("options is undefined");
            var e = Object.keys(t).filter(function(t) {
                return !b[t];
            });
            if (e.length > 0) throw new Error("page not support ".concat(e.join(","), " properties"));
        }
    }, {
        key: "_init",
        value: function(t) {
            this._setInitData(), this._setMixins(t.mixins), this._setPlugins(t.plugins), this._addMethods(t.methods, "page"), 
            this._setRest(t), this._mount(), this._setLifecycleListener();
        }
    }, {
        key: "_setInitData",
        value: function() {
            this.data && (this.data._pid = this.$originpage.__wxWebviewId__);
        }
    }, {
        key: "_setMixins",
        value: function(t) {
            t && (this.mixins = t).forEach(this._mix, this);
        }
    }, {
        key: "_mix",
        value: function(t) {
            "function" == typeof t.data && this.setData(t.data()), this._addMethods(t.methods, "mixins"), 
            t.components && (this.components = Object.assign({}, this.components, t.components)), 
            t.localData && (this.localData = Object.assign({}, this.localData, t.localData)), 
            Object.assign(this, (0, c.omit)(t, "data", "methods", "localData", "components", $));
        }
    }, {
        key: "_setPlugins",
        value: function(t) {
            if (t) {
                var e, n = {}, o = r(t);
                try {
                    for (o.s(); !(e = o.n()).done; ) {
                        var i = e.value;
                        for (var a in this.plugins.push(i), i) {
                            i[a].map(function(t) {
                                return "function" == typeof t.data && Object.assign(n, t.data()), t;
                            });
                        }
                    }
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    o.e(t);
                } finally {
                    o.f();
                }
                Object.keys(n).length > 0 && this.setData(n);
            }
        }
    }, {
        key: "_addMethods",
        value: function(t, e) {
            if (t) for (var n = 0, o = Object.keys(t); n < o.length; n++) {
                var i = o[n];
                "function" == typeof t[i] && (this[i] = this.methods[i] = t[i]);
            }
        }
    }, {
        key: "_setRest",
        value: function(t) {
            Object.assign(this, (0, c.omit)(t, "name", "data", "components", "mixins", "methods", "localData", "_localData", "plugins", "logProps", "_logProps"));
        }
    }, {
        key: "_mount",
        value: function() {
            for (var t = this.$root, e = 0, n = Object.keys((0, c.omit)(this, $)); e < n.length; e++) {
                var o = n[e];
                "function" == typeof this[o] && this._define(t, o, this[o]);
            }
            for (var i = this.mixins || [], a = {}, s = 0; s < i.length; s++) {
                var r = i[s];
                if (r.$rootmethods) {
                    a = r.$rootmethods;
                    break;
                }
            }
            for (var l = 0, h = Object.keys(a); l < h.length; l++) {
                var u = h[l];
                this._define(t, u, a[u]);
            }
        }
    }, {
        key: "_setLifecycleListener",
        value: function() {
            var t, e = r($);
            try {
                for (e.s(); !(t = e.n()).done; ) {
                    var n = t.value;
                    this.$on("xcx:".concat(n), this._lifecycleHandler.bind(this, n));
                }
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                e.e(t);
            } finally {
                e.f();
            }
        }
    }, {
        key: "_lifecycleHandler",
        value: function(t) {
            var e, n = (0, c.toArray)(arguments, 1), o = r(this.mixins);
            try {
                for (o.s(); !(e = o.n()).done; ) {
                    var i = e.value;
                    if (i[t]) try {
                        (0, c.apply)(i[t], this, n);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        m({
                            err: e
                        }, "Fail to execute mixin lifecycle method", t, e.stack);
                    }
                }
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                o.e(t);
            } finally {
                o.f();
            }
            var a, s = r(this.plugins);
            try {
                for (s.s(); !(a = s.n()).done; ) {
                    var l = a.value;
                    if (l.global_plugin) {
                        var h, u = r(l.global_plugin);
                        try {
                            for (u.s(); !(h = u.n()).done; ) {
                                var p = h.value;
                                if (p[t]) try {
                                    (0, c.apply)(p[t], this, n);
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    m({
                                        err: e
                                    }, "Fail to execute page global plugin lifecycle method", t, e.stack);
                                }
                            }
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            u.e(t);
                        } finally {
                            u.f();
                        }
                    }
                    if (l.curr_plugin) {
                        var f, g = r(l.curr_plugin);
                        try {
                            for (g.s(); !(f = g.n()).done; ) {
                                var d = f.value;
                                if (d[t]) try {
                                    (0, c.apply)(d[t], this, n);
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    m({
                                        err: e
                                    }, "Fail to execute page curr plugin lifecycle method", t, e.stack);
                                }
                            }
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            g.e(t);
                        } finally {
                            g.f();
                        }
                    }
                }
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                s.e(t);
            } finally {
                s.f();
            }
            if (this[t]) try {
                (0, c.apply)(this[t], this, n);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                m({
                    err: e
                }, "Fail to execute lifecycle method", t, e.stack);
            }
        }
    }, {
        key: "_define",
        value: function(t, e, n, o) {
            "function" == typeof n && (n = n.bind(this)), f(t, e, n, o);
        }
    }, {
        key: "_unmount",
        value: function() {
            for (var t = this.$root, e = 0, n = Object.keys((0, c.omit)(this, $)); e < n.length; e++) {
                var o = n[e];
                "function" == typeof this[o] && delete t[o];
            }
            for (var i = this.mixins || [], a = {}, s = 0; s < i.length; s++) {
                var r = i[s];
                if (r.$rootmethods) {
                    a = r.$rootmethods;
                    break;
                }
            }
            for (var l = 0, h = Object.keys((0, c.omit)(a, "$on", "$off", "$once", "$emit")); l < h.length; l++) {
                delete t[h[l]];
            }
        }
    }, {
        key: "setData",
        value: function(t, e) {
            this.$root && this.$root.setData(t, e);
        }
    }, {
        key: "getComponentById",
        value: function(t) {
            for (var e = null, n = !1, o = Object.keys(this.components) || [], i = 0; i < o.length; i++) {
                var a = o[i];
                if (t.startsWith(a)) {
                    n = !0;
                    break;
                }
            }
            if (!n) throw new Error(t + " has not registered with components property");
            if (this.$root && (e = this.$root.selectComponent("#" + t)), null === e) throw new Error("no ".concat(t, " component exist"));
            return e;
        }
    }, {
        key: "$kill",
        value: function() {
            this._unmount(), this.$originpage = null;
        }
    }, {
        key: "$broadcast",
        value: function() {
            (0, c.apply)(this.$emit, this, arguments);
        }
    } ]), n;
}(h.default), P = {
    onLoad: function(t) {
        this.query = t;
        try {
            f(this, "setData", y(this.setData, this));
        } catch (t) {}
        f(this, "$page", this.$getFactory().createWPage(this)), this.$page.$broadcast("xcx:onLoad", t);
    },
    onUnload: function() {
        this.$page.$broadcast("xcx:onUnload"), this.$page.$kill(), delete this.$page, this.setData.$kill && this.setData.$kill();
    }
}, x = 0, D = $; x < D.length; x++) {
    var w = D[x];
    P[w] || (P[w] = u(w));
}

var C = function() {
    function t(e) {
        var n = this;
        o(this, t), this.PageOptions = e, this.PageOptions.mixins = (this.PageOptions.mixins || []).concat(t.defaultMixins);
        var i = [];
        this.PageOptions.plugins && this.PageOptions.plugins.length > 0 && (i = this.PageOptions.plugins), 
        this.PageOptions.plugins = [], t.defaultPlugins.length > 0 && this.PageOptions.plugins.push({
            global_plugin: t.defaultPlugins
        }), i.length > 0 && this.PageOptions.plugins.push({
            curr_plugin: i
        }), this.PageOptions.$getFactory = function() {
            return n;
        }, this.PageOptions.handleRootInstance = function(t) {
            t.detail && t.detail.bindRootInstance({
                from: this.name,
                type: "page",
                $root: this.$root,
                $parent: this
            });
        }, this.PageOptions.localData && (this.PageOptions._localData = (0, c.clone)(this.PageOptions.localData)), 
        this.PageOptions.logProps && (this.PageOptions._logProps = (0, c.clone)(this.PageOptions.logProps));
    }
    return i(t, [ {
        key: "create",
        value: function() {
            var t = (0, c.omit)(this.PageOptions, "components", "mixins", "methods", "localData", "_localData", "plugins", "logProps", "_logProps", "spmInfo");
            return Page(Object.assign({}, t, P));
        }
    }, {
        key: "createWPage",
        value: function(t) {
            return this.PageOptions.localData && (this.PageOptions.localData = (0, c.clone)(this.PageOptions._localData)), 
            this.PageOptions.logProps && (this.PageOptions.logProps = (0, c.clone)(this.PageOptions._logProps)), 
            new O(this.PageOptions, t);
        }
    } ], [ {
        key: "createPage",
        value: function(e) {
            return new t(e).create();
        }
    }, {
        key: "addDefaultMixin",
        value: function() {
            for (var t = this.defaultMixins, e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
            for (var i = 0, a = n; i < a.length; i++) {
                var s = a[i];
                t.indexOf(s) < 0 && t.push(s);
            }
        }
    }, {
        key: "addDefaultPlugins",
        value: function() {
            for (var t = this.defaultPlugins, e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
            for (var i = 0, a = n; i < a.length; i++) {
                var s = a[i];
                t.indexOf(s) < 0 && t.push(s);
            }
        }
    } ]), t;
}();

exports.PageFactory = C, C.defaultMixins = [], C.defaultPlugins = [];

for (var j = function(t) {
    a(h, t);
    var l = s(h);
    function h(t, i) {
        var a;
        return o(this, h), (a = l.call(this)).$root = null, a.$parent = null, a.$children = [], 
        a.plugins = [], a.components = {}, a.methods = {}, a._validate(t), a.name = t.name, 
        a.$origincomponent = i, t.properties && (a.properties = t.properties), t.components && (a.components = t.components), 
        t.localData && (a.localData = t.localData), t.logProps && (a.logProps = t.logProps), 
        a._init(t), e(a, n(a));
    }
    return i(h, [ {
        key: "$id",
        get: function() {
            return null === this.$origincomponent ? "" : this.$origincomponent.__wxExparserNodeId__;
        }
    }, {
        key: "route",
        get: function() {
            return null === this.$origincomponent ? "" : this.$origincomponent.is;
        }
    }, {
        key: "data",
        get: function() {
            return null === this.$origincomponent ? {} : this.$origincomponent.data;
        }
    }, {
        key: "_init",
        value: function(t) {
            t._methods && this._addMethods(t._methods), t._observers && this._addObservers(t._observers), 
            this._setPlugins(t.plugins), this._addLifecycle(t), this._mount(), this._setLifecycleListener();
        }
    }, {
        key: "_validate",
        value: function(t) {
            if (!t) throw new Error("options is undefined");
            if (!t.name) throw new Error("component must has name property");
            var e = Object.keys(t).filter(function(t) {
                return !k[t];
            });
            if (e.length > 0) throw new Error("component not support ".concat(e.join(","), " properties"));
        }
    }, {
        key: "getDataset",
        value: function() {
            return null === this.$origincomponent ? {} : this.$origincomponent.dataset;
        }
    }, {
        key: "_setPlugins",
        value: function(t) {
            if (t) {
                var e, n = {}, o = r(t);
                try {
                    for (o.s(); !(e = o.n()).done; ) {
                        var i = e.value;
                        for (var a in this.plugins.push(i), i) {
                            i[a].map(function(t) {
                                return "function" == typeof t.data && Object.assign(n, t.data()), t;
                            });
                        }
                    }
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    o.e(t);
                } finally {
                    o.f();
                }
                Object.keys(n).length > 0 && this.setData(n);
            }
        }
    }, {
        key: "_addMethods",
        value: function(t) {
            if (t) for (var e = 0, n = Object.keys(t); e < n.length; e++) {
                var o = n[e];
                "function" == typeof t[o] && (this[o] = this.methods[o] = t[o]);
            }
        }
    }, {
        key: "_addObservers",
        value: function(t) {
            var e = this;
            t && Object.keys(t).forEach(function(n) {
                e.$on("obs:".concat(n), function() {
                    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                    (0, c.apply)(t[n], e, i);
                });
            });
        }
    }, {
        key: "_addLifecycle",
        value: function(t) {
            var e = (0, c.pick)(t, _);
            Object.assign(this, e);
        }
    }, {
        key: "_mount",
        value: function() {
            for (var t = this.$origincomponent, e = 0, n = Object.keys(this.methods); e < n.length; e++) {
                var o = n[e];
                this._define(t, o, this.methods[o]);
            }
        }
    }, {
        key: "_setLifecycleListener",
        value: function() {
            var t, e = r(_);
            try {
                for (e.s(); !(t = e.n()).done; ) {
                    var n = t.value;
                    this.$on("xcx:".concat(n), this._lifecycleHandler.bind(this, n));
                }
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                e.e(t);
            } finally {
                e.f();
            }
        }
    }, {
        key: "_lifecycleHandler",
        value: function(t) {
            var e, n = (0, c.toArray)(arguments, 1), o = r(this.plugins);
            try {
                for (o.s(); !(e = o.n()).done; ) {
                    var i = e.value;
                    if (i.global_plugin) {
                        var a, s = r(i.global_plugin);
                        try {
                            for (s.s(); !(a = s.n()).done; ) {
                                var l = a.value;
                                if (l[t]) try {
                                    (0, c.apply)(l[t], this, n);
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    m({
                                        err: e
                                    }, "Fail to execute comp global plugin lifecycle method", t, e.stack);
                                }
                            }
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            s.e(t);
                        } finally {
                            s.f();
                        }
                    }
                    if (i.curr_plugin) {
                        var h, u = r(i.curr_plugin);
                        try {
                            for (u.s(); !(h = u.n()).done; ) {
                                var p = h.value;
                                if (p[t]) try {
                                    (0, c.apply)(p[t], this, n);
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    m({
                                        err: e
                                    }, "Fail to execute comp curr plugin lifecycle method", t, e.stack);
                                }
                            }
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            u.e(t);
                        } finally {
                            u.f();
                        }
                    }
                }
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                o.e(t);
            } finally {
                o.f();
            }
            if (this[t]) try {
                (0, c.apply)(this[t], this, n);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                m({
                    err: e
                }, "Fail to execute lifecycle method", t, e.stack);
            }
        }
    }, {
        key: "_define",
        value: function(t, e, n, o) {
            "function" == typeof n && (n = n.bind(this)), f(t, e, n, o);
        }
    }, {
        key: "_unmount",
        value: function() {
            for (var t = this.$origincomponent, e = 0, n = Object.keys(this.methods); e < n.length; e++) {
                delete t[n[e]];
            }
        }
    }, {
        key: "getComponentById",
        value: function(t) {
            for (var e = null, n = !1, o = Object.keys(this.components) || [], i = 0; i < o.length; i++) {
                var a = o[i];
                if (t.startsWith(a)) {
                    n = !0;
                    break;
                }
            }
            if (!n) throw new Error(t + " has not registered with components property");
            if (this.$origincomponent && (e = this.$origincomponent.selectComponent("#" + t)), 
            null === e) throw new Error("no ".concat(t, " component exist"));
            return e;
        }
    }, {
        key: "setData",
        value: function(t, e) {
            this.$origincomponent && this.$origincomponent.setData(t, e);
        }
    }, {
        key: "setRoot",
        value: function(t) {
            null === this.$root && (this.$root = t);
        }
    }, {
        key: "triggerEvent",
        value: function(t, e) {
            this.$origincomponent && this.$origincomponent.triggerEvent(t, e);
        }
    }, {
        key: "addChildren",
        value: function(t) {
            this.$children.indexOf(t) < 0 && t.$component && (t.$component.setParent(this), 
            this.$children.push(t));
        }
    }, {
        key: "setParent",
        value: function(t) {
            null === this.$parent && (this.$parent = t);
        }
    }, {
        key: "initRootToChildren",
        value: function(t, e) {
            if (!t.$root) throw new Error("root instance has not created");
            var n, o = r(e.$children);
            try {
                for (o.s(); !(n = o.n()).done; ) {
                    var i = n.value;
                    i.$component && i.$component.setRoot(t.$root), i.$component.$children.length > 0 && this.initRootToChildren(t, i.$component);
                }
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                o.e(t);
            } finally {
                o.f();
            }
        }
    }, {
        key: "removeFromParent",
        value: function() {
            var t = this, e = this.$parent;
            if (e) {
                var n = e.$children || [];
                0 !== n.length && (this.$parent.$children = n.filter(function(e) {
                    return e !== t.$origincomponent;
                }));
            }
        }
    }, {
        key: "$kill",
        value: function() {
            this._unmount(), this.$origincomponent = null;
        }
    }, {
        key: "$broadcast",
        value: function() {
            (0, c.apply)(this.$emit, this, arguments);
        }
    } ]), h;
}(h.default), A = {
    styleIsolation: "isolated",
    pureDataPattern: /^_/
}, F = {
    created: function() {
        try {
            f(this, "setData", y(this.setData, this));
        } catch (t) {}
        f(this, "$component", this.$getFactory().createWComponent(this)), this.$component && this.$component.$broadcast("xcx:created");
    },
    ready: function() {
        var t = this;
        this.triggerEvent("handleRootInstance", {
            $scope: this,
            bindRootInstance: function(e) {
                if (!e.$root) throw new Error("root instance has not created");
                t.$component && (t.$component.setRoot(e.$root), t.$component.setParent(e.$parent));
            }
        }), this.$component && null !== this.$component.$root && this.$component.initRootToChildren({
            from: this.$component.name,
            type: "comp",
            $root: this.$component.$root
        }, this.$component), this.$component && null !== this.$component.$parent && null !== this.$component.$parent.$root && this.$component.$parent.initRootToChildren && this.$component.$parent.initRootToChildren({
            from: this.$component.$parent.name,
            type: "comp",
            $root: this.$component.$parent.$root
        }, this.$component.$parent), this.$component && this.$component.$broadcast("xcx:ready");
    },
    detached: function() {
        this.$component && this.$component.$broadcast("xcx:detached"), this.$component.removeFromParent(), 
        this.$component && this.$component.$kill(), delete this.$component, this.setData.$kill && this.setData.$kill();
    }
}, R = 0, E = _; R < E.length; R++) {
    var L = E[R];
    F[L] || (F[L] = p(L));
}

var I = function() {
    function t(e) {
        var n = this;
        o(this, t), this.ComponentOptions = e, this.ComponentOptions.options ? this.ComponentOptions.options = Object.assign({}, A, this.ComponentOptions.options) : this.ComponentOptions.options = A, 
        this.ComponentOptions.methods || (this.ComponentOptions.methods = {}), Object.assign(this.ComponentOptions.methods, {
            $getFactory: function() {
                return n;
            },
            handleRootInstance: function(t) {
                var e = t.detail && t.detail.$scope;
                this.addChildren(e);
            }
        }), this.ComponentOptions.observers || (this.ComponentOptions.observers = {});
        var i = {};
        Object.keys(this.ComponentOptions.observers).forEach(function(t) {
            i[t] = function() {
                var e;
                this.$component && (e = this.$component).$broadcast.apply(e, [ "obs:".concat(t) ].concat(Array.prototype.slice.call(arguments)));
            };
        }), this.ComponentOptions._observers = this.ComponentOptions.observers, this.ComponentOptions.observers = i, 
        e.localData && (e._localData = (0, c.clone)(e.localData)), e.logProps && (e._logProps = (0, 
        c.clone)(e.logProps));
        var a = [];
        e.plugins && e.plugins.length > 0 && (a = e.plugins), e.plugins = [], t.defaultPlugins.length > 0 && e.plugins.push({
            global_plugin: t.defaultPlugins
        }), a.length > 0 && e.plugins.push({
            curr_plugin: a
        }), this.ComponentOptions._methods = (0, c.omit)(this.ComponentOptions.methods, "$getFactory"), 
        this.ComponentOptions.methods = (0, c.pick)(this.ComponentOptions.methods, "$getFactory");
    }
    return i(t, [ {
        key: "create",
        value: function() {
            return Component(Object.assign({}, this.ComponentOptions, F));
        }
    }, {
        key: "createWComponent",
        value: function(t) {
            return this.ComponentOptions.localData && (this.ComponentOptions.localData = (0, 
            c.clone)(this.ComponentOptions._localData)), this.ComponentOptions.logProps && (this.ComponentOptions.logProps = (0, 
            c.clone)(this.ComponentOptions._logProps)), new j(this.ComponentOptions, t);
        }
    } ], [ {
        key: "createComponent",
        value: function(e) {
            return new t(e).create();
        }
    }, {
        key: "addDefaultPlugins",
        value: function() {
            for (var t = this.defaultPlugins, e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
            for (var i = 0, a = n; i < a.length; i++) {
                var s = a[i];
                t.indexOf(s) < 0 && t.push(s);
            }
        }
    } ]), t;
}();

exports.ComponentFactory = I, I.defaultPlugins = [];

for (var q = function(t) {
    a(n, t);
    var e = s(n);
    function n(t, i) {
        var a;
        return o(this, n), (a = e.call(this)).plugins = [], a.$originapp = i, a._init(t), 
        a;
    }
    return i(n, [ {
        key: "$root",
        get: function() {
            if (null === this.$originapp) throw new Error("WApp is killed");
            return this.$originapp;
        }
    }, {
        key: "_init",
        value: function(t) {
            this._setPlugins(t.plugins), this._setRest(t), this._mount(), this._setLifecycleListener();
        }
    }, {
        key: "_setPlugins",
        value: function(t) {
            if (t) {
                var e, n = r(t);
                try {
                    for (n.s(); !(e = n.n()).done; ) {
                        var o = e.value;
                        this.plugins.push(o);
                    }
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    n.e(t);
                } finally {
                    n.f();
                }
            }
        }
    }, {
        key: "_setRest",
        value: function(t) {
            Object.assign(this, (0, c.omit)(t, "plugins"));
        }
    }, {
        key: "_mount",
        value: function() {
            for (var t = this.$root, e = 0, n = Object.keys((0, c.omit)(this, v)); e < n.length; e++) {
                var o = n[e];
                "function" == typeof this[o] && this._define(t, o, this[o]);
            }
        }
    }, {
        key: "_setLifecycleListener",
        value: function() {
            var t, e = r(v);
            try {
                for (e.s(); !(t = e.n()).done; ) {
                    var n = t.value;
                    this.$on("xcx:".concat(n), this._lifecycleHandler.bind(this, n));
                }
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                e.e(t);
            } finally {
                e.f();
            }
        }
    }, {
        key: "_lifecycleHandler",
        value: function(t) {
            var e, n = (0, c.toArray)(arguments, 1), o = r(this.plugins);
            try {
                for (o.s(); !(e = o.n()).done; ) {
                    var i = e.value;
                    if (i[t]) try {
                        (0, c.apply)(i[t], this, n);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        console.error("Fail to execute app plugin lifecycle method", t, e.stack);
                    }
                }
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                o.e(t);
            } finally {
                o.f();
            }
            if (this[t]) try {
                (0, c.apply)(this[t], this, n);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                console.error("Fail to execute app origin lifecycle method", t, e.stack);
            }
        }
    }, {
        key: "_define",
        value: function(t, e, n, o) {
            "function" == typeof n && (n = n.bind(this)), f(t, e, n, o);
        }
    }, {
        key: "_unmount",
        value: function() {
            for (var t = this.$root, e = 0, n = Object.keys((0, c.omit)(this, v)); e < n.length; e++) {
                var o = n[e];
                "function" == typeof this[o] && delete t[o];
            }
        }
    }, {
        key: "$kill",
        value: function() {
            this._unmount(), this.$originapp = null;
        }
    }, {
        key: "$broadcast",
        value: function() {
            (0, c.apply)(this.$emit, this, arguments);
        }
    } ]), n;
}(h.default), T = {
    onLaunch: function(t) {
        f(this, "$app", this.$getFactory().createWApp(this)), this.$app.$broadcast("xcx:onLaunch", t);
    },
    onShow: function(t) {
        this.$app.$broadcast("xcx:onShow", t);
    }
}, M = 0, H = v; M < H.length; M++) {
    var W = H[M];
    T[W] || (T[W] = g(W));
}

var S = function() {
    function t(e) {
        var n = this;
        o(this, t), this.AppOptions = e, this.AppOptions.plugins = (this.AppOptions.plugins || []).concat(t.defaultPlugins), 
        this.AppOptions.$getFactory = function() {
            return n;
        };
    }
    return i(t, [ {
        key: "create",
        value: function() {
            var t = (0, c.omit)(this.AppOptions, "plugins");
            return App(Object.assign({}, t, T));
        }
    }, {
        key: "createWApp",
        value: function(t) {
            return new q(this.AppOptions, t);
        }
    } ], [ {
        key: "createApp",
        value: function(e) {
            return new t(e).create();
        }
    }, {
        key: "addDefaultPlugins",
        value: function() {
            for (var t = this.defaultPlugins, e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
            for (var i = 0, a = n; i < a.length; i++) {
                var s = a[i];
                t.indexOf(s) < 0 && t.push(s);
            }
        }
    } ]), t;
}();

exports.AppFactory = S, S.defaultPlugins = [];