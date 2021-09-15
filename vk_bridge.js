! function(n) {
    var r = {};

    function o(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
    }
    o.m = n, o.c = r, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) o.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 0)
}([function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1).__importDefault(n(2));
    window.bridge = r.default
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "__extends", function() {
        return o
    }), n.d(t, "__assign", function() {
        return i
    }), n.d(t, "__rest", function() {
        return u
    }), n.d(t, "__decorate", function() {
        return a
    }), n.d(t, "__param", function() {
        return c
    }), n.d(t, "__metadata", function() {
        return f
    }), n.d(t, "__awaiter", function() {
        return p
    }), n.d(t, "__generator", function() {
        return l
    }), n.d(t, "__createBinding", function() {
        return s
    }), n.d(t, "__exportStar", function() {
        return d
    }), n.d(t, "__values", function() {
        return b
    }), n.d(t, "__read", function() {
        return y
    }), n.d(t, "__spread", function() {
        return v
    }), n.d(t, "__spreadArrays", function() {
        return w
    }), n.d(t, "__await", function() {
        return h
    }), n.d(t, "__asyncGenerator", function() {
        return _
    }), n.d(t, "__asyncDelegator", function() {
        return m
    }), n.d(t, "__asyncValues", function() {
        return A
    }), n.d(t, "__makeTemplateObject", function() {
        return g
    }), n.d(t, "__importStar", function() {
        return O
    }), n.d(t, "__importDefault", function() {
        return S
    }), n.d(t, "__classPrivateFieldGet", function() {
        return V
    }), n.d(t, "__classPrivateFieldSet", function() {
        return W
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    var r = function(e, t) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
    };

    function o(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }
    var i = function() {
        return (i = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    };

    function u(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
        return n
    }

    function a(e, t, n, r) {
        var o, i = arguments.length,
            u = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) u = Reflect.decorate(e, t, n, r);
        else
            for (var a = e.length - 1; 0 <= a; a--)(o = e[a]) && (u = (i < 3 ? o(u) : 3 < i ? o(t, n, u) : o(t, n)) || u);
        return 3 < i && u && Object.defineProperty(t, n, u), u
    }

    function c(n, r) {
        return function(e, t) {
            r(e, t, n)
        }
    }

    function f(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    }

    function p(e, u, a, c) {
        return new(a = a || Promise)(function(n, t) {
            function r(e) {
                try {
                    i(c.next(e))
                } catch (e) {
                    t(e)
                }
            }

            function o(e) {
                try {
                    i(c.throw(e))
                } catch (e) {
                    t(e)
                }
            }

            function i(e) {
                var t;
                e.done ? n(e.value) : ((t = e.value) instanceof a ? t : new a(function(e) {
                    e(t)
                })).then(r, o)
            }
            i((c = c.apply(e, u || [])).next())
        })
    }

    function l(n, r) {
        var o, i, u, a = {
                label: 0,
                sent: function() {
                    if (1 & u[0]) throw u[1];
                    return u[1]
                },
                trys: [],
                ops: []
            },
            e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            };
        return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
            return this
        }), e;

        function t(t) {
            return function(e) {
                return function(t) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, i && (u = 2 & t[0] ? i.return : t[0] ? i.throw || ((u = i.return) && u.call(i), 0) : i.next) && !(u = u.call(i, t[1])).done) return u;
                        switch (i = 0, u && (t = [2 & t[0], u.value]), t[0]) {
                            case 0:
                            case 1:
                                u = t;
                                break;
                            case 4:
                                return a.label++, {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, i = t[1], t = [0];
                                continue;
                            case 7:
                                t = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(u = 0 < (u = a.trys).length && u[u.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === t[0] && (!u || t[1] > u[0] && t[1] < u[3])) {
                                    a.label = t[1];
                                    break
                                }
                                if (6 === t[0] && a.label < u[1]) {
                                    a.label = u[1], u = t;
                                    break
                                }
                                if (u && a.label < u[2]) {
                                    a.label = u[2], a.ops.push(t);
                                    break
                                }
                                u[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        t = r.call(n, a)
                    } catch (e) {
                        t = [6, e], i = 0
                    } finally {
                        o = u = 0
                    }
                    if (5 & t[0]) throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }([t, e])
            }
        }
    }

    function s(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n]
    }

    function d(e, t) {
        for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n])
    }

    function b(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && r >= e.length && (e = void 0), {
                    value: e && e[r++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function y(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, o, i = n.call(e),
            u = [];
        try {
            for (;
                (void 0 === t || 0 < t--) && !(r = i.next()).done;) u.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return u
    }

    function v() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(y(arguments[t]));
        return e
    }

    function w() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        for (var r = Array(e), o = 0, t = 0; t < n; t++)
            for (var i = arguments[t], u = 0, a = i.length; u < a; u++, o++) r[o] = i[u];
        return r
    }

    function h(e) {
        return this instanceof h ? (this.v = e, this) : new h(e)
    }

    function _(e, t, n) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var o = n.apply(e, t || []),
            i = [],
            u = {};
        return r("next"), r("throw"), r("return"), u[Symbol.asyncIterator] = function() {
            return this
        }, u;

        function r(r) {
            o[r] && (u[r] = function(n) {
                return new Promise(function(e, t) {
                    1 < i.push([r, n, e, t]) || a(r, n)
                })
            })
        }

        function a(e, t) {
            try {
                (n = o[e](t)).value instanceof h ? Promise.resolve(n.value.v).then(c, f) : p(i[0][2], n)
            } catch (e) {
                p(i[0][3], e)
            }
            var n
        }

        function c(e) {
            a("next", e)
        }

        function f(e) {
            a("throw", e)
        }

        function p(e, t) {
            e(t), i.shift(), i.length && a(i[0][0], i[0][1])
        }
    }

    function m(r) {
        var o, e = {};
        return t("next"), t("throw", function(e) {
            throw e
        }), t("return"), e[Symbol.iterator] = function() {
            return this
        }, e;

        function t(t, n) {
            e[t] = r[t] ? function(e) {
                return (o = !o) ? {
                    value: h(r[t](e)),
                    done: "return" === t
                } : n ? n(e) : e
            } : n
        }
    }

    function A(c) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var e, t = c[Symbol.asyncIterator];
        return t ? t.call(c) : (c = b(c), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
            return this
        }, e);

        function n(a) {
            e[a] = c[a] && function(u) {
                return new Promise(function(e, t) {
                    var n, r, o, i;
                    u = c[a](u), n = e, r = t, o = u.done, i = u.value, Promise.resolve(i).then(function(e) {
                        n({
                            value: e,
                            done: o
                        })
                    }, r)
                })
            }
        }
    }

    function g(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
            value: t
        }) : e.raw = t, e
    }

    function O(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function S(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function V(e, t) {
        if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
        return t.get(e)
    }

    function W(e, t, n) {
        if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
        return t.set(e, n), n
    }
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var a = function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        };

        function c() {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
            var r = Array(e),
                o = 0;
            for (t = 0; t < n; t++)
                for (var i = arguments[t], u = 0, a = i.length; u < a; u++, o++) r[o] = i[u];
            return r
        }

        function r(i, e) {
            var r, o, u = (r = {
                current: 0,
                next: function() {
                    return ++this.current
                }
            }, o = {}, {
                add: function(e, t) {
                    var n = null != t ? t : r.next();
                    return o[n] = e, n
                },
                resolve: function(e, t, n) {
                    var r = o[e];
                    r && (n(t) ? r.resolve(t) : r.reject(t), o[e] = null)
                }
            });
            return e(function(e) {
                    if (e.detail && e.detail.data && "request_id" in e.detail.data) {
                        var t = e.detail.data,
                            n = t.request_id,
                            r = function(e, t) {
                                var n = {};
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                    var o = 0;
                                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                                }
                                return n
                            }(t, ["request_id"]);
                        n && u.resolve(n, r, function(e) {
                            return !("error_type" in e)
                        })
                    }
                }),
                function(r, o) {
                    return void 0 === o && (o = {}), new Promise(function(e, t) {
                        var n = u.add({
                            resolve: e,
                            reject: t
                        }, o.request_id);
                        i(r, a(a({}, o), {
                            request_id: n
                        }))
                    })
                }
        }
        var t = "undefined" != typeof window,
            f = Boolean(t && window.AndroidBridge),
            p = Boolean(t && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.VKWebAppClose),
            l = t && !f && !p,
            n = l && /(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search),
            o = l ? "message" : "VKWebAppEvent",
            s = c(["VKWebAppInit", "VKWebAppGetCommunityAuthToken", "VKWebAppAddToCommunity", "VKWebAppAddToHomeScreenInfo", "VKWebAppClose", "VKWebAppCopyText", "VKWebAppGetUserInfo", "VKWebAppSetLocation", "VKWebAppSendToClient", "VKWebAppGetClientVersion", "VKWebAppGetPhoneNumber", "VKWebAppGetEmail", "VKWebAppGetGroupInfo", "VKWebAppGetGeodata", "VKWebAppGetCommunityToken", "VKWebAppSetTitle", "VKWebAppGetAuthToken", "VKWebAppCallAPIMethod", "VKWebAppJoinGroup", "VKWebAppLeaveGroup", "VKWebAppAllowMessagesFromGroup", "VKWebAppDenyNotifications", "VKWebAppAllowNotifications", "VKWebAppOpenPayForm", "VKWebAppOpenApp", "VKWebAppShare", "VKWebAppShowWallPostBox", "VKWebAppScroll", "VKWebAppShowOrderBox", "VKWebAppShowLeaderBoardBox", "VKWebAppShowInviteBox", "VKWebAppShowRequestBox", "VKWebAppAddToFavorites", "VKWebAppShowCommunityWidgetPreviewBox", "VKWebAppShowStoryBox", "VKWebAppSendToClient", "VKWebAppStorageGet", "VKWebAppStorageGetKeys", "VKWebAppStorageSet", "VKWebAppFlashGetInfo", "VKWebAppSubscribeStoryApp"], l && !n ? ["VKWebAppResizeWindow", "VKWebAppAddToMenu", "VKWebAppShowSubscriptionBox", "VKWebAppShowInstallPushBox", "VKWebAppGetFriends"] : []),
            d = t ? window.AndroidBridge : void 0,
            b = p ? window.webkit.messageHandlers : void 0;

        function i(e, t) {
            var n = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                },
                r = document.createEvent("CustomEvent");
            return r.initCustomEvent(e, !!n.bubbles, !!n.cancelable, n.detail), r
        }
        "undefined" == typeof window || window.CustomEvent || (window.CustomEvent = (i.prototype = Event.prototype, i));
        var u = function(n) {
            var i = void 0,
                u = [];

            function e(e) {
                u.push(e)
            }
            "undefined" != typeof window && "addEventListener" in window && window.addEventListener(o, function(t) {
                if (p || f) return c(u).map(function(e) {
                    return e.call(null, t)
                });
                if (l && t && t.data) {
                    var e = t.data,
                        n = e.type,
                        r = e.data,
                        o = e.frameId;
                    n && "VKWebAppSettings" === n ? i = o : c(u).map(function(e) {
                        return e({
                            detail: {
                                type: n,
                                data: r
                            }
                        })
                    })
                }
            });
            var t = r(function(e, t) {
                d && d[e] ? d[e](JSON.stringify(t)) : b && b[e] && "function" == typeof b[e].postMessage ? b[e].postMessage(t) : l && parent.postMessage({
                    handler: e,
                    params: t,
                    type: "vk-connect",
                    webFrameId: i,
                    connectVersion: n
                }, "*")
            }, e);
            return {
                send: t,
                sendPromise: t,
                subscribe: e,
                unsubscribe: function(e) {
                    var t = u.indexOf(e); - 1 < t && u.splice(t, 1)
                },
                supports: function(e) {
                    return f ? !(!d || "function" != typeof d[e]) : p ? !(!b || !b[e] || "function" != typeof b[e].postMessage) : l && -1 < s.indexOf(e)
                },
                isWebView: function() {
                    return p || f
                }
            }
        }("2.2.8");
        e.applyMiddleware = function e() {
            for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
            return r.includes(void 0) || r.includes(null) ? e.apply(void 0, r.filter(function(e) {
                return "function" == typeof e
            })) : function(n) {
                if (0 === r.length) return n;
                var e, t = {
                    subscribe: n.subscribe,
                    send: function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return n.send.apply(n, e)
                    }
                };
                return e = r.filter(function(e) {
                    return "function" == typeof e
                }).map(function(e) {
                    return e(t)
                }).reduce(function(t, n) {
                    return function(e) {
                        return t(n(e))
                    }
                })(n.send), a(a({}, n), {
                    send: e
                })
            }
        }, e.default = u, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }(t)
}]);