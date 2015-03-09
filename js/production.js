!function(a, b) {
    function c(a) {
        var b = a.length, c = fb.type(a);
        return fb.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    function d(a) {
        var b = ob[a] = {};
        return fb.each(a.match(hb) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    function e() {
        Object.defineProperty(this.cache = {}, 0, {get: function() {
                return{}
            }}), this.expando = fb.expando + Math.random()
    }
    function f(a, c, d) {
        var e;
        if (d === b && 1 === a.nodeType)
            if (e = "data-" + c.replace(sb, "-$1").toLowerCase(), d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : rb.test(d) ? JSON.parse(d) : d
                } catch (f) {
                }
                pb.set(a, c, d)
            } else
                d = b;
        return d
    }
    function g() {
        return!0
    }
    function h() {
        return!1
    }
    function i() {
        try {
            return T.activeElement
        } catch (a) {
        }
    }
    function j(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType; )
            ;
        return a
    }
    function k(a, b, c) {
        if (fb.isFunction(b))
            return fb.grep(a, function(a, d) {
                return!!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return fb.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (Cb.test(b))
                return fb.filter(b, a, c);
            b = fb.filter(b, a)
        }
        return fb.grep(a, function(a) {
            return bb.call(b, a) >= 0 !== c
        })
    }
    function l(a, b) {
        return fb.nodeName(a, "table") && fb.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function m(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }
    function n(a) {
        var b = Nb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }
    function o(a, b) {
        for (var c = a.length, d = 0; c > d; d++)
            qb.set(a[d], "globalEval", !b || qb.get(b[d], "globalEval"))
    }
    function p(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (qb.hasData(a) && (f = qb.access(a), g = qb.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++)
                        fb.event.add(b, e, j[e][c])
            }
            pb.hasData(a) && (h = pb.access(a), i = fb.extend({}, h), pb.set(b, i))
        }
    }
    function q(a, c) {
        var d = a.getElementsByTagName ? a.getElementsByTagName(c || "*") : a.querySelectorAll ? a.querySelectorAll(c || "*") : [];
        return c === b || c && fb.nodeName(a, c) ? fb.merge([a], d) : d
    }
    function r(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && Kb.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    function s(a, b) {
        if (b in a)
            return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = _b.length; e--; )
            if (b = _b[e] + c, b in a)
                return b;
        return d
    }
    function t(a, b) {
        return a = b || a, "none" === fb.css(a, "display") || !fb.contains(a.ownerDocument, a)
    }
    function u(b) {
        return a.getComputedStyle(b, null)
    }
    function v(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g], d.style && (f[g] = qb.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && t(d) && (f[g] = qb.access(d, "olddisplay", z(d.nodeName)))) : f[g] || (e = t(d), (c && "none" !== c || !e) && qb.set(d, "olddisplay", e ? c : fb.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function w(a, b, c) {
        var d = Ub.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function x(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += fb.css(a, c + $b[f], !0, e)), d ? ("content" === c && (g -= fb.css(a, "padding" + $b[f], !0, e)), "margin" !== c && (g -= fb.css(a, "border" + $b[f] + "Width", !0, e))) : (g += fb.css(a, "padding" + $b[f], !0, e), "padding" !== c && (g += fb.css(a, "border" + $b[f] + "Width", !0, e)));
        return g
    }
    function y(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = u(a), g = fb.support.boxSizing && "border-box" === fb.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Qb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Vb.test(e))
                return e;
            d = g && (fb.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + x(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function z(a) {
        var b = T, c = Xb[a];
        return c || (c = A(a, b), "none" !== c && c || (Rb = (Rb || fb("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (Rb[0].contentWindow || Rb[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = A(a, b), Rb.detach()), Xb[a] = c), c
    }
    function A(a, b) {
        var c = fb(b.createElement(a)).appendTo(b.body), d = fb.css(c[0], "display");
        return c.remove(), d
    }
    function B(a, b, c, d) {
        var e;
        if (fb.isArray(b))
            fb.each(b, function(b, e) {
                c || bc.test(a) ? d(a, e) : B(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== fb.type(b))
            d(a, b);
        else
            for (e in b)
                B(a + "[" + e + "]", b[e], c, d)
    }
    function C(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(hb) || [];
            if (fb.isFunction(c))
                for (; d = f[e++]; )
                    "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function D(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, fb.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return"string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {}, g = a === sc;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }
    function E(a, c) {
        var d, e, f = fb.ajaxSettings.flatOptions || {};
        for (d in c)
            c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        return e && fb.extend(!0, a, e), a
    }
    function F(a, c, d) {
        for (var e, f, g, h, i = a.contents, j = a.dataTypes; "*" === j[0]; )
            j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("Content-Type"));
        if (e)
            for (f in i)
                if (i[f] && i[f].test(e)) {
                    j.unshift(f);
                    break
                }
        if (j[0]in d)
            g = j[0];
        else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
    }
    function G(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; )
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return{state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
                            }
                }
        return{state: "success", data: b}
    }
    function H() {
        return setTimeout(function() {
            Bc = b
        }), Bc = fb.now()
    }
    function I(a, b, c) {
        for (var d, e = (Hc[b] || []).concat(Hc["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function J(a, b, c) {
        var d, e, f = 0, g = Gc.length, h = fb.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return!1;
            for (var b = Bc || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({elem: a, props: fb.extend({}, b), opts: fb.extend(!0, {specialEasing: {}}, c), originalProperties: b, originalOptions: c, startTime: Bc || H(), duration: c.duration, tweens: [], createTween: function(b, c) {
                var d = fb.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            }, stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }}), k = j.props;
        for (K(k, j.opts.specialEasing); g > f; f++)
            if (d = Gc[f].call(j, a, k, j.opts))
                return d;
        return fb.map(k, I, j), fb.isFunction(j.opts.start) && j.opts.start.call(a, j), fb.fx.timer(fb.extend(i, {elem: a, anim: j, queue: j.opts.queue})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function K(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = fb.camelCase(c), e = b[d], f = a[c], fb.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fb.cssHooks[d], g && "expand"in g) {
                f = g.expand(f), delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c], b[c] = e)
            } else
                b[d] = e
    }
    function L(a, c, d) {
        var e, f, g, h, i, j, k = this, l = {}, m = a.style, n = a.nodeType && t(a), o = qb.get(a, "fxshow");
        d.queue || (i = fb._queueHooks(a, "fx"), null == i.unqueued && (i.unqueued = 0, j = i.empty.fire, i.empty.fire = function() {
            i.unqueued || j()
        }), i.unqueued++, k.always(function() {
            k.always(function() {
                i.unqueued--, fb.queue(a, "fx").length || i.empty.fire()
            })
        })), 1 === a.nodeType && ("height"in c || "width"in c) && (d.overflow = [m.overflow, m.overflowX, m.overflowY], "inline" === fb.css(a, "display") && "none" === fb.css(a, "float") && (m.display = "inline-block")), d.overflow && (m.overflow = "hidden", k.always(function() {
            m.overflow = d.overflow[0], m.overflowX = d.overflow[1], m.overflowY = d.overflow[2]
        }));
        for (e in c)
            if (f = c[e], Dc.exec(f)) {
                if (delete c[e], g = g || "toggle" === f, f === (n ? "hide" : "show")) {
                    if ("show" !== f || !o || o[e] === b)
                        continue;
                    n = !0
                }
                l[e] = o && o[e] || fb.style(a, e)
            }
        if (!fb.isEmptyObject(l)) {
            o ? "hidden"in o && (n = o.hidden) : o = qb.access(a, "fxshow", {}), g && (o.hidden = !n), n ? fb(a).show() : k.done(function() {
                fb(a).hide()
            }), k.done(function() {
                var b;
                qb.remove(a, "fxshow");
                for (b in l)
                    fb.style(a, b, l[b])
            });
            for (e in l)
                h = I(n ? o[e] : 0, e, k), e in o || (o[e] = h.start, n && (h.end = h.start, h.start = "width" === e || "height" === e ? 1 : 0))
        }
    }
    function M(a, b, c, d, e) {
        return new M.prototype.init(a, b, c, d, e)
    }
    function N(a, b) {
        var c, d = {height: a}, e = 0;
        for (b = b?1:0; 4 > e; e += 2 - b)
            c = $b[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }
    function O(a) {
        return fb.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var P, Q, R = typeof b, S = a.location, T = a.document, U = T.documentElement, V = a.jQuery, W = a.$, X = {}, Y = [], Z = "2.0.3", $ = Y.concat, _ = Y.push, ab = Y.slice, bb = Y.indexOf, cb = X.toString, db = X.hasOwnProperty, eb = Z.trim, fb = function(a, b) {
        return new fb.fn.init(a, b, P)
    }, gb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, hb = /\S+/g, ib = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, jb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, kb = /^-ms-/, lb = /-([\da-z])/gi, mb = function(a, b) {
        return b.toUpperCase()
    }, nb = function() {
        T.removeEventListener("DOMContentLoaded", nb, !1), a.removeEventListener("load", nb, !1), fb.ready()
    };
    fb.fn = fb.prototype = {jquery: Z, constructor: fb, init: function(a, c, d) {
            var e, f;
            if (!a)
                return this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : ib.exec(a), !e || !e[1] && c)
                    return!c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                if (e[1]) {
                    if (c = c instanceof fb ? c[0] : c, fb.merge(this, fb.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : T, !0)), jb.test(e[1]) && fb.isPlainObject(c))
                        for (e in c)
                            fb.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                    return this
                }
                return f = T.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = T, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fb.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), fb.makeArray(a, this))
        }, selector: "", length: 0, toArray: function() {
            return ab.call(this)
        }, get: function(a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        }, pushStack: function(a) {
            var b = fb.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function(a, b) {
            return fb.each(this, a, b)
        }, ready: function(a) {
            return fb.ready.promise().done(a), this
        }, slice: function() {
            return this.pushStack(ab.apply(this, arguments))
        }, first: function() {
            return this.eq(0)
        }, last: function() {
            return this.eq(-1)
        }, eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, map: function(a) {
            return this.pushStack(fb.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        }, end: function() {
            return this.prevObject || this.constructor(null)
        }, push: _, sort: [].sort, splice: [].splice}, fb.fn.init.prototype = fb.fn, fb.extend = fb.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || fb.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++)
            if (null != (a = arguments[i]))
                for (c in a)
                    d = h[c], e = a[c], h !== e && (k && e && (fb.isPlainObject(e) || (f = fb.isArray(e))) ? (f ? (f = !1, g = d && fb.isArray(d) ? d : []) : g = d && fb.isPlainObject(d) ? d : {}, h[c] = fb.extend(k, g, e)) : e !== b && (h[c] = e));
        return h
    }, fb.extend({expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""), noConflict: function(b) {
            return a.$ === fb && (a.$ = W), b && a.jQuery === fb && (a.jQuery = V), fb
        }, isReady: !1, readyWait: 1, holdReady: function(a) {
            a ? fb.readyWait++ : fb.ready(!0)
        }, ready: function(a) {
            (a === !0 ? --fb.readyWait : fb.isReady) || (fb.isReady = !0, a !== !0 && --fb.readyWait > 0 || (Q.resolveWith(T, [fb]), fb.fn.trigger && fb(T).trigger("ready").off("ready")))
        }, isFunction: function(a) {
            return"function" === fb.type(a)
        }, isArray: Array.isArray, isWindow: function(a) {
            return null != a && a === a.window
        }, isNumeric: function(a) {
            return!isNaN(parseFloat(a)) && isFinite(a)
        }, type: function(a) {
            return null == a ? String(a) : "object" == typeof a || "function" == typeof a ? X[cb.call(a)] || "object" : typeof a
        }, isPlainObject: function(a) {
            if ("object" !== fb.type(a) || a.nodeType || fb.isWindow(a))
                return!1;
            try {
                if (a.constructor && !db.call(a.constructor.prototype, "isPrototypeOf"))
                    return!1
            } catch (b) {
                return!1
            }
            return!0
        }, isEmptyObject: function(a) {
            var b;
            for (b in a)
                return!1;
            return!0
        }, error: function(a) {
            throw new Error(a)
        }, parseHTML: function(a, b, c) {
            if (!a || "string" != typeof a)
                return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || T;
            var d = jb.exec(a), e = !c && [];
            return d ? [b.createElement(d[1])] : (d = fb.buildFragment([a], b, e), e && fb(e).remove(), fb.merge([], d.childNodes))
        }, parseJSON: JSON.parse, parseXML: function(a) {
            var c, d;
            if (!a || "string" != typeof a)
                return null;
            try {
                d = new DOMParser, c = d.parseFromString(a, "text/xml")
            } catch (e) {
                c = b
            }
            return(!c || c.getElementsByTagName("parsererror").length) && fb.error("Invalid XML: " + a), c
        }, noop: function() {
        }, globalEval: function(a) {
            var b, c = eval;
            a = fb.trim(a), a && (1 === a.indexOf("use strict") ? (b = T.createElement("script"), b.text = a, T.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        }, camelCase: function(a) {
            return a.replace(kb, "ms-").replace(lb, mb)
        }, nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++)
                        ;
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1)
                            break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++)
                    ;
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1)
                        break;
            return a
        }, trim: function(a) {
            return null == a ? "" : eb.call(a)
        }, makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? fb.merge(d, "string" == typeof a ? [a] : a) : _.call(d, a)), d
        }, inArray: function(a, b, c) {
            return null == b ? -1 : bb.call(b, a, c)
        }, merge: function(a, c) {
            var d = c.length, e = a.length, f = 0;
            if ("number" == typeof d)
                for (; d > f; f++)
                    a[e++] = c[f];
            else
                for (; c[f] !== b; )
                    a[e++] = c[f++];
            return a.length = e, a
        }, grep: function(a, b, c) {
            var d, e = [], f = 0, g = a.length;
            for (c = !!c; g > f; f++)
                d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e
        }, map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h)
                for (; g > f; f++)
                    e = b(a[f], f, d), null != e && (i[i.length] = e);
            else
                for (f in a)
                    e = b(a[f], f, d), null != e && (i[i.length] = e);
            return $.apply([], i)
        }, guid: 1, proxy: function(a, c) {
            var d, e, f;
            return"string" == typeof c && (d = a[c], c = a, a = d), fb.isFunction(a) ? (e = ab.call(arguments, 2), f = function() {
                return a.apply(c || this, e.concat(ab.call(arguments)))
            }, f.guid = a.guid = a.guid || fb.guid++, f) : b
        }, access: function(a, c, d, e, f, g, h) {
            var i = 0, j = a.length, k = null == d;
            if ("object" === fb.type(d)) {
                f = !0;
                for (i in d)
                    fb.access(a, c, i, d[i], !0, g, h)
            } else if (e !== b && (f = !0, fb.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function(a, b, c) {
                return k.call(fb(a), c)
            })), c))
                for (; j > i; i++)
                    c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
            return f ? a : k ? c.call(a) : j ? c(a[0], d) : g
        }, now: Date.now, swap: function(a, b, c, d) {
            var e, f, g = {};
            for (f in b)
                g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b)
                a.style[f] = g[f];
            return e
        }}), fb.ready.promise = function(b) {
        return Q || (Q = fb.Deferred(), "complete" === T.readyState ? setTimeout(fb.ready) : (T.addEventListener("DOMContentLoaded", nb, !1), a.addEventListener("load", nb, !1))), Q.promise(b)
    }, fb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        X["[object " + b + "]"] = b.toLowerCase()
    }), P = fb(T), function(a, b) {
        function c(a, b, c, d) {
            var e, f, g, h, i, j, k, l, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a)
                return c;
            if (1 !== (h = b.nodeType) && 9 !== h)
                return[];
            if (I && !d) {
                if (e = tb.exec(a))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode)
                                return c;
                            if (f.id === g)
                                return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)
                            return c.push(f), c
                    } else {
                        if (e[2])
                            return ab.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName)
                            return ab.apply(c, b.getElementsByClassName(g)), c
                    }
                if (x.qsa && (!J || !J.test(a))) {
                    if (l = k = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = m(a), (k = b.getAttribute("id"))?l = k.replace(wb, "\\$&"):b.setAttribute("id", l), l = "[id='" + l + "'] ", i = j.length; i--; )
                            j[i] = l + n(j[i]);
                        o = nb.test(a) && b.parentNode || b, p = j.join(",")
                    }
                    if (p)
                        try {
                            return ab.apply(c, o.querySelectorAll(p)), c
                        } catch (q) {
                        } finally {
                            k || b.removeAttribute("id")
                        }
                }
            }
            return v(a.replace(kb, "$1"), b, c, d)
        }
        function d() {
            function a(c, d) {
                return b.push(c += " ") > z.cacheLength && delete a[b.shift()], a[c] = d
            }
            var b = [];
            return a
        }
        function e(a) {
            return a[N] = !0, a
        }
        function f(a) {
            var b = G.createElement("div");
            try {
                return!!a(b)
            } catch (c) {
                return!1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }
        function g(a, b) {
            for (var c = a.split("|"), d = a.length; d--; )
                z.attrHandle[c[d]] = b
        }
        function h(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || X) - (~a.sourceIndex || X);
            if (d)
                return d;
            if (c)
                for (; c = c.nextSibling; )
                    if (c === b)
                        return-1;
            return a ? 1 : -1
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return"input" === c && b.type === a
            }
        }
        function j(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return("input" === c || "button" === c) && b.type === a
            }
        }
        function k(a) {
            return e(function(b) {
                return b = +b, e(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; )
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function l() {
        }
        function m(a, b) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            for (h = a, i = [], j = z.preFilter; h; ) {
                (!d || (e = lb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = mb.exec(h)) && (d = e.shift(), f.push({value: d, type: e[0].replace(kb, " ")}), h = h.slice(d.length));
                for (g in z.filter)
                    !(e = rb[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({value: d, type: g, matches: e}), h = h.slice(d.length));
                if (!d)
                    break
            }
            return b ? h.length : h ? c.error(a) : S(a, i).slice(0)
        }
        function n(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function o(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d]; )
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = P + " " + f;
                if (g) {
                    for (; b = b[d]; )
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return!0
                } else
                    for (; b = b[d]; )
                        if (1 === b.nodeType || e)
                            if (j = b[N] || (b[N] = {}), (i = j[d]) && i[0] === k) {
                                if ((h = i[1]) === !0 || h === y)
                                    return h === !0
                            } else if (i = j[d] = [k], i[1] = a(b, c, g) || y, i[1] === !0)
                                return!0
            }
        }
        function p(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; )
                    if (!a[e](b, c, d))
                        return!1;
                return!0
            } : a[0]
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }
        function r(a, b, c, d, f, g) {
            return d && !d[N] && (d = r(d)), f && !f[N] && (f = r(f, g)), e(function(e, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = e || u(b || "*", h.nodeType ? [h] : h, []), r = !a || !e && b ? p : q(p, m, a, h, i), s = c ? f || (e ? a : o || d) ? [] : g : r;
                if (c && c(r, s, h, i), d)
                    for (j = q(s, n), d(j, [], h, i), k = j.length; k--; )
                        (l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                if (e) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = s.length; k--; )
                                (l = s[k]) && j.push(r[k] = l);
                            f(null, s = [], j, i)
                        }
                        for (k = s.length; k--; )
                            (l = s[k]) && (j = f ? cb.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l))
                    }
                } else
                    s = q(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : ab.apply(g, s)
            })
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = z.relative[a[0].type], g = f || z.relative[" "], h = f ? 1 : 0, i = o(function(a) {
                return a === b
            }, g, !0), j = o(function(a) {
                return cb.call(b, a) > -1
            }, g, !0), k = [function(a, c, d) {
                    return!f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                }]; e > h; h++)
                if (c = z.relative[a[h].type])
                    k = [o(p(k), c)];
                else {
                    if (c = z.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !z.relative[a[d].type]; d++)
                            ;
                        return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({value: " " === a[h - 2].type ? "*" : ""})).replace(kb, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a))
                    }
                    k.push(c)
                }
            return p(k)
        }
        function t(a, b) {
            var d = 0, f = b.length > 0, g = a.length > 0, h = function(e, h, i, j, k) {
                var l, m, n, o = [], p = 0, r = "0", s = e && [], t = null != k, u = D, v = e || g && z.find.TAG("*", k && h.parentNode || h), w = P += null == u ? 1 : Math.random() || .1;
                for (t && (D = h !== G && h, y = d); null != (l = v[r]); r++) {
                    if (g && l) {
                        for (m = 0; n = a[m++]; )
                            if (n(l, h, i)) {
                                j.push(l);
                                break
                            }
                        t && (P = w, y = ++d)
                    }
                    f && ((l = !n && l) && p--, e && s.push(l))
                }
                if (p += r, f && r !== p) {
                    for (m = 0; n = b[m++]; )
                        n(s, o, h, i);
                    if (e) {
                        if (p > 0)
                            for (; r--; )
                                s[r] || o[r] || (o[r] = $.call(j));
                        o = q(o)
                    }
                    ab.apply(j, o), t && !e && o.length > 0 && p + b.length > 1 && c.uniqueSort(j)
                }
                return t && (P = w, D = u), s
            };
            return f ? e(h) : h
        }
        function u(a, b, d) {
            for (var e = 0, f = b.length; f > e; e++)
                c(a, b[e], d);
            return d
        }
        function v(a, b, c, d) {
            var e, f, g, h, i, j = m(a);
            if (!d && 1 === j.length) {
                if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && z.relative[f[1].type]) {
                    if (b = (z.find.ID(g.matches[0].replace(xb, yb), b) || [])[0], !b)
                        return c;
                    a = a.slice(f.shift().value.length)
                }
                for (e = rb.needsContext.test(a)?0:f.length; e-- && (g = f[e], !z.relative[h = g.type]); )
                    if ((i = z.find[h]) && (d = i(g.matches[0].replace(xb, yb), nb.test(f[0].type) && b.parentNode || b))) {
                        if (f.splice(e, 1), a = d.length && n(f), !a)
                            return ab.apply(c, d), c;
                        break
                    }
            }
            return C(a, j)(d, b, !I, c, nb.test(a)), c
        }
        var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date, O = a.document, P = 0, Q = 0, R = d(), S = d(), T = d(), U = !1, V = function(a, b) {
            return a === b ? (U = !0, 0) : 0
        }, W = typeof b, X = 1 << 31, Y = {}.hasOwnProperty, Z = [], $ = Z.pop, _ = Z.push, ab = Z.push, bb = Z.slice, cb = Z.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] === a)
                    return b;
            return-1
        }, db = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", eb = "[\\x20\\t\\r\\n\\f]", gb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", hb = gb.replace("w", "w#"), ib = "\\[" + eb + "*(" + gb + ")" + eb + "*(?:([*^$|!~]?=)" + eb + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + hb + ")|)|)" + eb + "*\\]", jb = ":(" + gb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ib.replace(3, 8) + ")*)|.*)\\)|)", kb = new RegExp("^" + eb + "+|((?:^|[^\\\\])(?:\\\\.)*)" + eb + "+$", "g"), lb = new RegExp("^" + eb + "*," + eb + "*"), mb = new RegExp("^" + eb + "*([>+~]|" + eb + ")" + eb + "*"), nb = new RegExp(eb + "*[+~]"), ob = new RegExp("=" + eb + "*([^\\]'\"]*)" + eb + "*\\]", "g"), pb = new RegExp(jb), qb = new RegExp("^" + hb + "$"), rb = {ID: new RegExp("^#(" + gb + ")"), CLASS: new RegExp("^\\.(" + gb + ")"), TAG: new RegExp("^(" + gb.replace("w", "w*") + ")"), ATTR: new RegExp("^" + ib), PSEUDO: new RegExp("^" + jb), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + eb + "*(even|odd|(([+-]|)(\\d*)n|)" + eb + "*(?:([+-]|)" + eb + "*(\\d+)|))" + eb + "*\\)|)", "i"), bool: new RegExp("^(?:" + db + ")$", "i"), needsContext: new RegExp("^" + eb + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + eb + "*((?:-\\d)?\\d*)" + eb + "*\\)|)(?=[^-]|$)", "i")}, sb = /^[^{]+\{\s*\[native \w/, tb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ub = /^(?:input|select|textarea|button)$/i, vb = /^h\d$/i, wb = /'|\\/g, xb = new RegExp("\\\\([\\da-f]{1,6}" + eb + "?|(" + eb + ")|.)", "ig"), yb = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        };
        try {
            ab.apply(Z = bb.call(O.childNodes), O.childNodes), Z[O.childNodes.length].nodeType
        } catch (zb) {
            ab = {apply: Z.length ? function(a, b) {
                    _.apply(a, bb.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; )
                        ;
                    a.length = c - 1
                }}
        }
        B = c.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, x = c.support = {}, F = c.setDocument = function(a) {
            var b = a ? a.ownerDocument || a : O, c = b.defaultView;
            return b !== G && 9 === b.nodeType && b.documentElement ? (G = b, H = b.documentElement, I = !B(b), c && c.attachEvent && c !== c.top && c.attachEvent("onbeforeunload", function() {
                F()
            }), x.attributes = f(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), x.getElementsByTagName = f(function(a) {
                return a.appendChild(b.createComment("")), !a.getElementsByTagName("*").length
            }), x.getElementsByClassName = f(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), x.getById = f(function(a) {
                return H.appendChild(a).id = N, !b.getElementsByName || !b.getElementsByName(N).length
            }), x.getById ? (z.find.ID = function(a, b) {
                if (typeof b.getElementById !== W && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, z.filter.ID = function(a) {
                var b = a.replace(xb, yb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete z.find.ID, z.filter.ID = function(a) {
                var b = a.replace(xb, yb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== W && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), z.find.TAG = x.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== W ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++]; )
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, z.find.CLASS = x.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== W && I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (x.qsa = sb.test(b.querySelectorAll)) && (f(function(a) {
                a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || J.push("\\[" + eb + "*(?:value|" + db + ")"), a.querySelectorAll(":checked").length || J.push(":checked")
            }), f(function(a) {
                var c = b.createElement("input");
                c.setAttribute("type", "hidden"), a.appendChild(c).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + eb + "*(?:''|\"\")"), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (x.matchesSelector = sb.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && f(function(a) {
                x.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", jb)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), M = sb.test(H.contains) || H.compareDocumentPosition ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode; )
                        if (b === a)
                            return!0;
                return!1
            }, V = H.compareDocumentPosition ? function(a, c) {
                if (a === c)
                    return U = !0, 0;
                var d = c.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(c);
                return d ? 1 & d || !x.sortDetached && c.compareDocumentPosition(a) === d ? a === b || M(O, a) ? -1 : c === b || M(O, c) ? 1 : E ? cb.call(E, a) - cb.call(E, c) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
            } : function(a, c) {
                var d, e = 0, f = a.parentNode, g = c.parentNode, i = [a], j = [c];
                if (a === c)
                    return U = !0, 0;
                if (!f || !g)
                    return a === b ? -1 : c === b ? 1 : f ? -1 : g ? 1 : E ? cb.call(E, a) - cb.call(E, c) : 0;
                if (f === g)
                    return h(a, c);
                for (d = a; d = d.parentNode; )
                    i.unshift(d);
                for (d = c; d = d.parentNode; )
                    j.unshift(d);
                for (; i[e] === j[e]; )
                    e++;
                return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, b) : G
        }, c.matches = function(a, b) {
            return c(a, null, null, b)
        }, c.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== G && F(a), b = b.replace(ob, "='$1']"), !(!x.matchesSelector || !I || K && K.test(b) || J && J.test(b)))
                try {
                    var d = L.call(a, b);
                    if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {
                }
            return c(b, G, null, [a]).length > 0
        }, c.contains = function(a, b) {
            return(a.ownerDocument || a) !== G && F(a), M(a, b)
        }, c.attr = function(a, c) {
            (a.ownerDocument || a) !== G && F(a);
            var d = z.attrHandle[c.toLowerCase()], e = d && Y.call(z.attrHandle, c.toLowerCase()) ? d(a, c, !I) : b;
            return e === b ? x.attributes || !I ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e
        }, c.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, c.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (U = !x.detectDuplicates, E = !x.sortStable && a.slice(0), a.sort(V), U) {
                for (; b = a[e++]; )
                    b === a[e] && (d = c.push(e));
                for (; d--; )
                    a.splice(c[d], 1)
            }
            return a
        }, A = c.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += A(a)
                } else if (3 === e || 4 === e)
                    return a.nodeValue
            } else
                for (; b = a[d]; d++)
                    c += A(b);
            return c
        }, z = c.selectors = {cacheLength: 50, createPseudo: e, match: rb, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function(a) {
                    return a[1] = a[1].replace(xb, yb), a[3] = (a[4] || a[5] || "").replace(xb, yb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]), a
                }, PSEUDO: function(a) {
                    var c, d = !a[5] && a[2];
                    return rb.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && pb.test(d) && (c = m(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c)), a.slice(0, 3))
                }}, filter: {TAG: function(a) {
                    var b = a.replace(xb, yb).toLowerCase();
                    return"*" === a ? function() {
                        return!0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + eb + ")" + a + "(" + eb + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== W && a.getAttribute("class") || "")
                    })
                }, ATTR: function(a, b, d) {
                    return function(e) {
                        var f = c.attr(e, a);
                        return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                }, CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return!!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p; ) {
                                    for (l = b; l = l[p]; )
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return!1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return!0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); )
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P)
                                m = j[1];
                            else
                                for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h?l.nodeName.toLowerCase() !== r:1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)); )
                                    ;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                }, PSEUDO: function(a, b) {
                    var d, f = z.pseudos[a] || z.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                    return f[N] ? f(b) : f.length > 1 ? (d = [a, a, "", b], z.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, c) {
                        for (var d, e = f(a, b), g = e.length; g--; )
                            d = cb.call(a, e[g]), a[d] = !(c[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, d)
                    }) : f
                }}, pseudos: {not: e(function(a) {
                    var b = [], c = [], d = C(a.replace(kb, "$1"));
                    return d[N] ? e(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--; )
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }), has: e(function(a) {
                    return function(b) {
                        return c(a, b).length > 0
                    }
                }), contains: e(function(a) {
                    return function(b) {
                        return(b.textContent || b.innerText || A(b)).indexOf(a) > -1
                    }
                }), lang: e(function(a) {
                    return qb.test(a || "") || c.error("unsupported lang: " + a), a = a.replace(xb, yb).toLowerCase(), function(b) {
                        var c;
                        do
                            if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return!1
                    }
                }), target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function(a) {
                    return a === H
                }, focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function(a) {
                    return a.disabled === !1
                }, disabled: function(a) {
                    return a.disabled === !0
                }, checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return"input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType)
                            return!1;
                    return!0
                }, parent: function(a) {
                    return!z.pseudos.empty(a)
                }, header: function(a) {
                    return vb.test(a.nodeName)
                }, input: function(a) {
                    return ub.test(a.nodeName)
                }, button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return"input" === b && "button" === a.type || "button" === b
                }, text: function(a) {
                    var b;
                    return"input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                }, first: k(function() {
                    return[0]
                }), last: k(function(a, b) {
                    return[b - 1]
                }), eq: k(function(a, b, c) {
                    return[0 > c ? c + b : c]
                }), even: k(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }), odd: k(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }), lt: k(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }), gt: k(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })}}, z.pseudos.nth = z.pseudos.eq;
        for (w in{radio:!0, checkbox:!0, file:!0, password:!0, image:!0})
            z.pseudos[w] = i(w);
        for (w in{submit:!0, reset:!0})
            z.pseudos[w] = j(w);
        l.prototype = z.filters = z.pseudos, z.setFilters = new l, C = c.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = m(a)), c = b.length; c--; )
                    f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d))
            }
            return f
        }, x.sortStable = N.split("").sort(V).join("") === N, x.detectDuplicates = U, F(), x.sortDetached = f(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), f(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || g("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), x.attributes && f(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || g("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), f(function(a) {
            return null == a.getAttribute("disabled")
        }) || g(db, function(a, b, c) {
            var d;
            return c ? void 0 : (d = a.getAttributeNode(b)) && d.specified ? d.value : a[b] === !0 ? b.toLowerCase() : null
        }), fb.find = c, fb.expr = c.selectors, fb.expr[":"] = fb.expr.pseudos, fb.unique = c.uniqueSort, fb.text = c.getText, fb.isXMLDoc = c.isXML, fb.contains = c.contains
    }(a);
    var ob = {};
    fb.Callbacks = function(a) {
        a = "string" == typeof a ? ob[a] || d(a) : fb.extend({}, a);
        var c, e, f, g, h, i, j = [], k = !a.once && [], l = function(b) {
            for (c = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && h > i; i++)
                if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                    c = !1;
                    break
                }
            f = !1, j && (k ? k.length && l(k.shift()) : c ? j = [] : m.disable())
        }, m = {add: function() {
                if (j) {
                    var b = j.length;
                    !function d(b) {
                        fb.each(b, function(b, c) {
                            var e = fb.type(c);
                            "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
                        })
                    }(arguments), f ? h = j.length : c && (g = b, l(c))
                }
                return this
            }, remove: function() {
                return j && fb.each(arguments, function(a, b) {
                    for (var c; (c = fb.inArray(b, j, c)) > - 1; )
                        j.splice(c, 1), f && (h >= c && h--, i >= c && i--)
                }), this
            }, has: function(a) {
                return a ? fb.inArray(a, j) > -1 : !(!j || !j.length)
            }, empty: function() {
                return j = [], h = 0, this
            }, disable: function() {
                return j = k = c = b, this
            }, disabled: function() {
                return!j
            }, lock: function() {
                return k = b, c || m.disable(), this
            }, locked: function() {
                return!k
            }, fireWith: function(a, b) {
                return!j || e && !k || (b = b || [], b = [a, b.slice ? b.slice() : b], f ? k.push(b) : l(b)), this
            }, fire: function() {
                return m.fireWith(this, arguments), this
            }, fired: function() {
                return!!e
            }};
        return m
    }, fb.extend({Deferred: function(a) {
            var b = [["resolve", "done", fb.Callbacks("once memory"), "resolved"], ["reject", "fail", fb.Callbacks("once memory"), "rejected"], ["notify", "progress", fb.Callbacks("memory")]], c = "pending", d = {state: function() {
                    return c
                }, always: function() {
                    return e.done(arguments).fail(arguments), this
                }, then: function() {
                    var a = arguments;
                    return fb.Deferred(function(c) {
                        fb.each(b, function(b, f) {
                            var g = f[0], h = fb.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = h && h.apply(this, arguments);
                                a && fb.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                }, promise: function(a) {
                    return null != a ? fb.extend(a, d) : d
                }}, e = {};
            return d.pipe = d.then, fb.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function(a) {
            var b, c, d, e = 0, f = ab.call(arguments), g = f.length, h = 1 !== g || a && fb.isFunction(a.promise) ? g : 0, i = 1 === h ? a : fb.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this, d[a] = arguments.length > 1 ? ab.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                }
            };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++)
                    f[e] && fb.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }}), fb.support = function(b) {
        var c = T.createElement("input"), d = T.createDocumentFragment(), e = T.createElement("div"), f = T.createElement("select"), g = f.appendChild(T.createElement("option"));
        return c.type ? (c.type = "checkbox", b.checkOn = "" !== c.value, b.optSelected = g.selected, b.reliableMarginRight = !0, b.boxSizingReliable = !0, b.pixelPosition = !1, c.checked = !0, b.noCloneChecked = c.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled, c = T.createElement("input"), c.value = "t", c.type = "radio", b.radioValue = "t" === c.value, c.setAttribute("checked", "t"), c.setAttribute("name", "t"), d.appendChild(c), b.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked, b.focusinBubbles = "onfocusin"in a, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === e.style.backgroundClip, fb(function() {
            var c, d, f = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", g = T.getElementsByTagName("body")[0];
            g && (c = T.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(e), e.innerHTML = "", e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", fb.swap(g, null != g.style.zoom ? {zoom: 1} : {}, function() {
                b.boxSizing = 4 === e.offsetWidth
            }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(e, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(e, null) || {width: "4px"}).width, d = e.appendChild(T.createElement("div")), d.style.cssText = e.style.cssText = f, d.style.marginRight = d.style.width = "0", e.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), g.removeChild(c))
        }), b) : b
    }({});
    var pb, qb, rb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, sb = /([A-Z])/g;
    e.uid = 1, e.accepts = function(a) {
        return a.nodeType ? 1 === a.nodeType || 9 === a.nodeType : !0
    }, e.prototype = {key: function(a) {
            if (!e.accepts(a))
                return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = e.uid++;
                try {
                    b[this.expando] = {value: c}, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, fb.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        }, set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b)
                f[b] = c;
            else if (fb.isEmptyObject(f))
                fb.extend(this.cache[e], b);
            else
                for (d in b)
                    f[d] = b[d];
            return f
        }, get: function(a, c) {
            var d = this.cache[this.key(a)];
            return c === b ? d : d[c]
        }, access: function(a, c, d) {
            var e;
            return c === b || c && "string" == typeof c && d === b ? (e = this.get(a, c), e !== b ? e : this.get(a, fb.camelCase(c))) : (this.set(a, c, d), d !== b ? d : c)
        }, remove: function(a, c) {
            var d, e, f, g = this.key(a), h = this.cache[g];
            if (c === b)
                this.cache[g] = {};
            else {
                fb.isArray(c) ? e = c.concat(c.map(fb.camelCase)) : (f = fb.camelCase(c), c in h ? e = [c, f] : (e = f, e = e in h ? [e] : e.match(hb) || [])), d = e.length;
                for (; d--; )
                    delete h[e[d]]
            }
        }, hasData: function(a) {
            return!fb.isEmptyObject(this.cache[a[this.expando]] || {})
        }, discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }}, pb = new e, qb = new e, fb.extend({acceptData: e.accepts, hasData: function(a) {
            return pb.hasData(a) || qb.hasData(a)
        }, data: function(a, b, c) {
            return pb.access(a, b, c)
        }, removeData: function(a, b) {
            pb.remove(a, b)
        }, _data: function(a, b, c) {
            return qb.access(a, b, c)
        }, _removeData: function(a, b) {
            qb.remove(a, b)
        }}), fb.fn.extend({data: function(a, c) {
            var d, e, g = this[0], h = 0, i = null;
            if (a === b) {
                if (this.length && (i = pb.get(g), 1 === g.nodeType && !qb.get(g, "hasDataAttrs"))) {
                    for (d = g.attributes; h < d.length; h++)
                        e = d[h].name, 0 === e.indexOf("data-") && (e = fb.camelCase(e.slice(5)), f(g, e, i[e]));
                    qb.set(g, "hasDataAttrs", !0)
                }
                return i
            }
            return"object" == typeof a ? this.each(function() {
                pb.set(this, a)
            }) : fb.access(this, function(c) {
                var d, e = fb.camelCase(a);
                if (g && c === b) {
                    if (d = pb.get(g, a), d !== b)
                        return d;
                    if (d = pb.get(g, e), d !== b)
                        return d;
                    if (d = f(g, e, b), d !== b)
                        return d
                } else
                    this.each(function() {
                        var d = pb.get(this, e);
                        pb.set(this, e, c), -1 !== a.indexOf("-") && d !== b && pb.set(this, a, c)
                    })
            }, null, c, arguments.length > 1, null, !0)
        }, removeData: function(a) {
            return this.each(function() {
                pb.remove(this, a)
            })
        }}), fb.extend({queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = qb.get(a, b), c && (!d || fb.isArray(c) ? d = qb.access(a, b, fb.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function(a, b) {
            b = b || "fx";
            var c = fb.queue(a, b), d = c.length, e = c.shift(), f = fb._queueHooks(a, b), g = function() {
                fb.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return qb.get(a, c) || qb.access(a, c, {empty: fb.Callbacks("once memory").add(function() {
                    qb.remove(a, [b + "queue", c])
                })})
        }}), fb.fn.extend({queue: function(a, c) {
            var d = 2;
            return"string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? fb.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = fb.queue(this, a, c);
                fb._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && fb.dequeue(this, a)
            })
        }, dequeue: function(a) {
            return this.each(function() {
                fb.dequeue(this, a)
            })
        }, delay: function(a, b) {
            return a = fb.fx ? fb.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        }, clearQueue: function(a) {
            return this.queue(a || "fx", [])
        }, promise: function(a, c) {
            var d, e = 1, f = fb.Deferred(), g = this, h = this.length, i = function() {
                --e || f.resolveWith(g, [g])
            };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--; )
                d = qb.get(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c)
        }});
    var tb, ub, vb = /[\t\r\n\f]/g, wb = /\r/g, xb = /^(?:input|select|textarea|button)$/i;
    fb.fn.extend({attr: function(a, b) {
            return fb.access(this, fb.attr, a, b, arguments.length > 1)
        }, removeAttr: function(a) {
            return this.each(function() {
                fb.removeAttr(this, a)
            })
        }, prop: function(a, b) {
            return fb.access(this, fb.prop, a, b, arguments.length > 1)
        }, removeProp: function(a) {
            return this.each(function() {
                delete this[fb.propFix[a] || a]
            })
        }, addClass: function(a) {
            var b, c, d, e, f, g = 0, h = this.length, i = "string" == typeof a && a;
            if (fb.isFunction(a))
                return this.each(function(b) {
                    fb(this).addClass(a.call(this, b, this.className))
                });
            if (i)
                for (b = (a || "").match(hb) || []; h > g; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vb, " ") : " ")) {
                        for (f = 0; e = b[f++]; )
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        c.className = fb.trim(d)
                    }
            return this
        }, removeClass: function(a) {
            var b, c, d, e, f, g = 0, h = this.length, i = 0 === arguments.length || "string" == typeof a && a;
            if (fb.isFunction(a))
                return this.each(function(b) {
                    fb(this).removeClass(a.call(this, b, this.className))
                });
            if (i)
                for (b = (a || "").match(hb) || []; h > g; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vb, " ") : "")) {
                        for (f = 0; e = b[f++]; )
                            for (; d.indexOf(" " + e + " ") >= 0; )
                                d = d.replace(" " + e + " ", " ");
                        c.className = a ? fb.trim(d) : ""
                    }
            return this
        }, toggleClass: function(a, b) {
            var c = typeof a;
            return"boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : fb.isFunction(a) ? this.each(function(c) {
                fb(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if ("string" === c)
                    for (var b, d = 0, e = fb(this), f = a.match(hb) || []; b = f[d++]; )
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else
                    (c === R || "boolean" === c) && (this.className && qb.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : qb.get(this, "__className__") || "")
            })
        }, hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vb, " ").indexOf(b) >= 0)
                    return!0;
            return!1
        }, val: function(a) {
            var c, d, e, f = this[0];
            {
                if (arguments.length)
                    return e = fb.isFunction(a), this.each(function(d) {
                        var f;
                        1 === this.nodeType && (f = e ? a.call(this, d, fb(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : fb.isArray(f) && (f = fb.map(f, function(a) {
                            return null == a ? "" : a + ""
                        })), c = fb.valHooks[this.type] || fb.valHooks[this.nodeName.toLowerCase()], c && "set"in c && c.set(this, f, "value") !== b || (this.value = f))
                    });
                if (f)
                    return c = fb.valHooks[f.type] || fb.valHooks[f.nodeName.toLowerCase()], c && "get"in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(wb, "") : null == d ? "" : d)
            }
        }}), fb.extend({valHooks: {option: {get: function(a) {
                    var b = a.attributes.value;
                    return!b || b.specified ? a.value : a.text
                }}, select: {get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (fb.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && fb.nodeName(c.parentNode, "optgroup"))) {
                            if (b = fb(c).val(), f)
                                return b;
                            g.push(b)
                        }
                    return g
                }, set: function(a, b) {
                    for (var c, d, e = a.options, f = fb.makeArray(b), g = e.length; g--; )
                        d = e[g], (d.selected = fb.inArray(fb(d).val(), f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }}}, attr: function(a, c, d) {
            var e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return typeof a.getAttribute === R ? fb.prop(a, c, d) : (1 === g && fb.isXMLDoc(a) || (c = c.toLowerCase(), e = fb.attrHooks[c] || (fb.expr.match.bool.test(c) ? ub : tb)), d === b ? e && "get"in e && null !== (f = e.get(a, c)) ? f : (f = fb.find.attr(a, c), null == f ? b : f) : null !== d ? e && "set"in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : (fb.removeAttr(a, c), void 0))
        }, removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(hb);
            if (f && 1 === a.nodeType)
                for (; c = f[e++]; )
                    d = fb.propFix[c] || c, fb.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }, attrHooks: {type: {set: function(a, b) {
                    if (!fb.support.radioValue && "radio" === b && fb.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }}}, propFix: {"for": "htmlFor", "class": "className"}, prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h)
                return g = 1 !== h || !fb.isXMLDoc(a), g && (c = fb.propFix[c] || c, f = fb.propHooks[c]), d !== b ? f && "set"in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get"in f && null !== (e = f.get(a, c)) ? e : a[c]
        }, propHooks: {tabIndex: {get: function(a) {
                    return a.hasAttribute("tabindex") || xb.test(a.nodeName) || a.href ? a.tabIndex : -1
                }}}}), ub = {set: function(a, b, c) {
            return b === !1 ? fb.removeAttr(a, c) : a.setAttribute(c, c), c
        }}, fb.each(fb.expr.match.bool.source.match(/\w+/g), function(a, c) {
        var d = fb.expr.attrHandle[c] || fb.find.attr;
        fb.expr.attrHandle[c] = function(a, c, e) {
            var f = fb.expr.attrHandle[c], g = e ? b : (fb.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
            return fb.expr.attrHandle[c] = f, g
        }
    }), fb.support.optSelected || (fb.propHooks.selected = {get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }}), fb.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        fb.propFix[this.toLowerCase()] = this
    }), fb.each(["radio", "checkbox"], function() {
        fb.valHooks[this] = {set: function(a, b) {
                return fb.isArray(b) ? a.checked = fb.inArray(fb(a).val(), b) >= 0 : void 0
            }}, fb.support.checkOn || (fb.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var yb = /^key/, zb = /^(?:mouse|contextmenu)|click/, Ab = /^(?:focusinfocus|focusoutblur)$/, Bb = /^([^.]*)(?:\.(.+)|)$/;
    fb.event = {global: {}, add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q, r = qb.get(a);
            if (r) {
                for (d.handler && (g = d, d = g.handler, f = g.selector), d.guid || (d.guid = fb.guid++), (j = r.events) || (j = r.events = {}), (h = r.handle) || (h = r.handle = function(a) {
                    return typeof fb === R || a && fb.event.triggered === a.type ? b : fb.event.dispatch.apply(h.elem, arguments)
                }, h.elem = a), c = (c || "").match(hb) || [""], k = c.length; k--; )
                    i = Bb.exec(c[k]) || [], o = q = i[1], p = (i[2] || "").split(".").sort(), o && (m = fb.event.special[o] || {}, o = (f ? m.delegateType : m.bindType) || o, m = fb.event.special[o] || {}, l = fb.extend({type: o, origType: q, data: e, handler: d, guid: d.guid, selector: f, needsContext: f && fb.expr.match.needsContext.test(f), namespace: p.join(".")}, g), (n = j[o]) || (n = j[o] = [], n.delegateCount = 0, m.setup && m.setup.call(a, e, p, h) !== !1 || a.addEventListener && a.addEventListener(o, h, !1)), m.add && (m.add.call(a, l), l.handler.guid || (l.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, l) : n.push(l), fb.event.global[o] = !0);
                a = null
            }
        }, remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = qb.hasData(a) && qb.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(hb) || [""], j = b.length; j--; )
                    if (h = Bb.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = fb.event.special[n] || {}, n = (d?l.delegateType:l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; )
                            k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fb.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i)
                            fb.event.remove(a, n + b[j], c, d, !0);
                fb.isEmptyObject(i) && (delete q.handle, qb.remove(a, "events"))
            }
        }, trigger: function(c, d, e, f) {
            var g, h, i, j, k, l, m, n = [e || T], o = db.call(c, "type") ? c.type : c, p = db.call(c, "namespace") ? c.namespace.split(".") : [];
            if (h = i = e = e || T, 3 !== e.nodeType && 8 !== e.nodeType && !Ab.test(o + fb.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), k = o.indexOf(":") < 0 && "on" + o, c = c[fb.expando] ? c : new fb.Event(o, "object" == typeof c && c), c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : fb.makeArray(d, [c]), m = fb.event.special[o] || {}, f || !m.trigger || m.trigger.apply(e, d) !== !1)) {
                if (!f && !m.noBubble && !fb.isWindow(e)) {
                    for (j = m.delegateType || o, Ab.test(j + o) || (h = h.parentNode); h; h = h.parentNode)
                        n.push(h), i = h;
                    i === (e.ownerDocument || T) && n.push(i.defaultView || i.parentWindow || a)
                }
                for (g = 0; (h = n[g++]) && !c.isPropagationStopped(); )
                    c.type = g > 1 ? j : m.bindType || o, l = (qb.get(h, "events") || {})[c.type] && qb.get(h, "handle"), l && l.apply(h, d), l = k && h[k], l && fb.acceptData(h) && l.apply && l.apply(h, d) === !1 && c.preventDefault();
                return c.type = o, f || c.isDefaultPrevented() || m._default && m._default.apply(n.pop(), d) !== !1 || !fb.acceptData(e) || k && fb.isFunction(e[o]) && !fb.isWindow(e) && (i = e[k], i && (e[k] = null), fb.event.triggered = o, e[o](), fb.event.triggered = b, i && (e[k] = i)), c.result
            }
        }, dispatch: function(a) {
            a = fb.event.fix(a);
            var c, d, e, f, g, h = [], i = ab.call(arguments), j = (qb.get(this, "events") || {})[a.type] || [], k = fb.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = fb.event.handlers.call(this, a, j), c = 0; (f = h[c++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = f.elem, d = 0; (g = f.handlers[d++]) && !a.isImmediatePropagationStopped(); )
                        (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((fb.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), e !== b && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        }, handlers: function(a, c) {
            var d, e, f, g, h = [], i = c.delegateCount, j = a.target;
            if (i && j.nodeType && (!a.button || "click" !== a.type))
                for (; j !== this; j = j.parentNode || this)
                    if (j.disabled !== !0 || "click" !== a.type) {
                        for (e = [], d = 0; i > d; d++)
                            g = c[d], f = g.selector + " ", e[f] === b && (e[f] = g.needsContext ? fb(f, this).index(j) >= 0 : fb.find(f, this, null, [j]).length), e[f] && e.push(g);
                        e.length && h.push({elem: j, handlers: e})
                    }
            return i < c.length && h.push({elem: this, handlers: c.slice(i)}), h
        }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }}, mouseHooks: {props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(a, c) {
                var d, e, f, g = c.button;
                return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || T, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }}, fix: function(a) {
            if (a[fb.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = zb.test(e)?this.mouseHooks:yb.test(e)?this.keyHooks:{}), d = g.props?this.props.concat(g.props):this.props, a = new fb.Event(f), b = d.length; b--; )
                c = d[b], a[c] = f[c];
            return a.target || (a.target = T), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        }, special: {load: {noBubble: !0}, focus: {trigger: function() {
                    return this !== i() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"}, blur: {trigger: function() {
                    return this === i() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"}, click: {trigger: function() {
                    return"checkbox" === this.type && this.click && fb.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function(a) {
                    return fb.nodeName(a.target, "a")
                }}, beforeunload: {postDispatch: function(a) {
                    a.result !== b && (a.originalEvent.returnValue = a.result)
                }}}, simulate: function(a, b, c, d) {
            var e = fb.extend(new fb.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? fb.event.trigger(e, null, b) : fb.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }}, fb.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, fb.Event = function(a, b) {
        return this instanceof fb.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.getPreventDefault && a.getPreventDefault() ? g : h) : this.type = a, b && fb.extend(this, b), this.timeStamp = a && a.timeStamp || fb.now(), this[fb.expando] = !0, void 0) : new fb.Event(a, b)
    }, fb.Event.prototype = {isDefaultPrevented: h, isPropagationStopped: h, isImmediatePropagationStopped: h, preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = g, a && a.preventDefault && a.preventDefault()
        }, stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = g, a && a.stopPropagation && a.stopPropagation()
        }, stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = g, this.stopPropagation()
        }}, fb.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function(a, b) {
        fb.event.special[a] = {delegateType: b, bindType: b, handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return(!e || e !== d && !fb.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }}
    }), fb.support.focusinBubbles || fb.each({focus: "focusin", blur: "focusout"}, function(a, b) {
        var c = 0, d = function(a) {
            fb.event.simulate(b, a.target, fb.event.fix(a), !0)
        };
        fb.event.special[b] = {setup: function() {
                0 === c++ && T.addEventListener(a, d, !0)
            }, teardown: function() {
                0 === --c && T.removeEventListener(a, d, !0)
            }}
    }), fb.fn.extend({on: function(a, c, d, e, f) {
            var g, i;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (i in a)
                    this.on(i, c, d, a[i], f);
                return this
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1)
                e = h;
            else if (!e)
                return this;
            return 1 === f && (g = e, e = function(a) {
                return fb().off(a), g.apply(this, arguments)
            }, e.guid = g.guid || (g.guid = fb.guid++)), this.each(function() {
                fb.event.add(this, a, e, d, c)
            })
        }, one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function(a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj)
                return e = a.handleObj, fb(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof a) {
                for (f in a)
                    this.off(f, c, a[f]);
                return this
            }
            return(c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = h), this.each(function() {
                fb.event.remove(this, a, d, c)
            })
        }, trigger: function(a, b) {
            return this.each(function() {
                fb.event.trigger(a, b, this)
            })
        }, triggerHandler: function(a, b) {
            var c = this[0];
            return c ? fb.event.trigger(a, b, c, !0) : void 0
        }});
    var Cb = /^.[^:#\[\.,]*$/, Db = /^(?:parents|prev(?:Until|All))/, Eb = fb.expr.match.needsContext, Fb = {children: !0, contents: !0, next: !0, prev: !0};
    fb.fn.extend({find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a)
                return this.pushStack(fb(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (fb.contains(d[b], this))
                            return!0
                }));
            for (b = 0; e > b; b++)
                fb.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? fb.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        }, has: function(a) {
            var b = fb(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (fb.contains(this, b[a]))
                        return!0
            })
        }, not: function(a) {
            return this.pushStack(k(this, a || [], !0))
        }, filter: function(a) {
            return this.pushStack(k(this, a || [], !1))
        }, is: function(a) {
            return!!k(this, "string" == typeof a && Eb.test(a) ? fb(a) : a || [], !1).length
        }, closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Eb.test(a) || "string" != typeof a ? fb(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fb.find.matchesSelector(c, a))) {
                        c = f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? fb.unique(f) : f)
        }, index: function(a) {
            return a ? "string" == typeof a ? bb.call(fb(a), this[0]) : bb.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function(a, b) {
            var c = "string" == typeof a ? fb(a, b) : fb.makeArray(a && a.nodeType ? [a] : a), d = fb.merge(this.get(), c);
            return this.pushStack(fb.unique(d))
        }, addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }}), fb.each({parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function(a) {
            return fb.dir(a, "parentNode")
        }, parentsUntil: function(a, b, c) {
            return fb.dir(a, "parentNode", c)
        }, next: function(a) {
            return j(a, "nextSibling")
        }, prev: function(a) {
            return j(a, "previousSibling")
        }, nextAll: function(a) {
            return fb.dir(a, "nextSibling")
        }, prevAll: function(a) {
            return fb.dir(a, "previousSibling")
        }, nextUntil: function(a, b, c) {
            return fb.dir(a, "nextSibling", c)
        }, prevUntil: function(a, b, c) {
            return fb.dir(a, "previousSibling", c)
        }, siblings: function(a) {
            return fb.sibling((a.parentNode || {}).firstChild, a)
        }, children: function(a) {
            return fb.sibling(a.firstChild)
        }, contents: function(a) {
            return a.contentDocument || fb.merge([], a.childNodes)
        }}, function(a, b) {
        fb.fn[a] = function(c, d) {
            var e = fb.map(this, b, c);
            return"Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fb.filter(d, e)), this.length > 1 && (Fb[a] || fb.unique(e), Db.test(a) && e.reverse()), this.pushStack(e)
        }
    }), fb.extend({filter: function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fb.find.matchesSelector(d, a) ? [d] : [] : fb.find.matches(a, fb.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        }, dir: function(a, c, d) {
            for (var e = [], f = d !== b; (a = a[c]) && 9 !== a.nodeType; )
                if (1 === a.nodeType) {
                    if (f && fb(a).is(d))
                        break;
                    e.push(a)
                }
            return e
        }, sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }});
    var Gb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Hb = /<([\w:]+)/, Ib = /<|&#?\w+;/, Jb = /<(?:script|style|link)/i, Kb = /^(?:checkbox|radio)$/i, Lb = /checked\s*(?:[^=]|=\s*.checked.)/i, Mb = /^$|\/(?:java|ecma)script/i, Nb = /^true\/(.*)/, Ob = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Pb = {option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]};
    Pb.optgroup = Pb.option, Pb.tbody = Pb.tfoot = Pb.colgroup = Pb.caption = Pb.thead, Pb.th = Pb.td, fb.fn.extend({text: function(a) {
            return fb.access(this, function(a) {
                return a === b ? fb.text(this) : this.empty().append((this[0] && this[0].ownerDocument || T).createTextNode(a))
            }, null, a, arguments.length)
        }, append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = l(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = l(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function(a, b) {
            for (var c, d = a ? fb.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || fb.cleanData(q(c)), c.parentNode && (b && fb.contains(c.ownerDocument, c) && o(q(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                1 === a.nodeType && (fb.cleanData(q(a, !1)), a.textContent = "");
            return this
        }, clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return fb.clone(this, a, b)
            })
        }, html: function(a) {
            return fb.access(this, function(a) {
                var c = this[0] || {}, d = 0, e = this.length;
                if (a === b && 1 === c.nodeType)
                    return c.innerHTML;
                if ("string" == typeof a && !Jb.test(a) && !Pb[(Hb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Gb, "<$1></$2>");
                    try {
                        for (; e > d; d++)
                            c = this[d] || {}, 1 === c.nodeType && (fb.cleanData(q(c, !1)), c.innerHTML = a);
                        c = 0
                    } catch (f) {
                    }
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function() {
            var a = fb.map(this, function(a) {
                return[a.nextSibling, a.parentNode]
            }), b = 0;
            return this.domManip(arguments, function(c) {
                var d = a[b++], e = a[b++];
                e && (d && d.parentNode !== e && (d = this.nextSibling), fb(this).remove(), e.insertBefore(c, d))
            }, !0), b ? this : this.remove()
        }, detach: function(a) {
            return this.remove(a, !0)
        }, domManip: function(a, b, c) {
            a = $.apply([], a);
            var d, e, f, g, h, i, j = 0, k = this.length, l = this, o = k - 1, p = a[0], r = fb.isFunction(p);
            if (r || !(1 >= k || "string" != typeof p || fb.support.checkClone) && Lb.test(p))
                return this.each(function(d) {
                    var e = l.eq(d);
                    r && (a[0] = p.call(this, d, e.html())), e.domManip(a, b, c)
                });
            if (k && (d = fb.buildFragment(a, this[0].ownerDocument, !1, !c && this), e = d.firstChild, 1 === d.childNodes.length && (d = e), e)) {
                for (f = fb.map(q(d, "script"), m), g = f.length; k > j; j++)
                    h = d, j !== o && (h = fb.clone(h, !0, !0), g && fb.merge(f, q(h, "script"))), b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument, fb.map(f, n), j = 0; g > j; j++)
                        h = f[j], Mb.test(h.type || "") && !qb.access(h, "globalEval") && fb.contains(i, h) && (h.src ? fb._evalUrl(h.src) : fb.globalEval(h.textContent.replace(Ob, "")))
            }
            return this
        }}), fb.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function(a, b) {
        fb.fn[a] = function(a) {
            for (var c, d = [], e = fb(a), f = e.length - 1, g = 0; f >= g; g++)
                c = g === f ? this : this.clone(!0), fb(e[g])[b](c), _.apply(d, c.get());
            return this.pushStack(d)
        }
    }), fb.extend({clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = fb.contains(a.ownerDocument, a);
            if (!(fb.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fb.isXMLDoc(a)))
                for (g = q(h), f = q(a), d = 0, e = f.length; e > d; d++)
                    r(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || q(a), g = g || q(h), d = 0, e = f.length; e > d; d++)
                        p(f[d], g[d]);
                else
                    p(a, h);
            return g = q(h, "script"), g.length > 0 && o(g, !i && q(a, "script")), h
        }, buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = 0, l = a.length, m = b.createDocumentFragment(), n = []; l > k; k++)
                if (e = a[k], e || 0 === e)
                    if ("object" === fb.type(e))
                        fb.merge(n, e.nodeType ? [e] : e);
                    else if (Ib.test(e)) {
                        for (f = f || m.appendChild(b.createElement("div")), g = (Hb.exec(e) || ["", ""])[1].toLowerCase(), h = Pb[g] || Pb._default, f.innerHTML = h[1] + e.replace(Gb, "<$1></$2>") + h[2], j = h[0]; j--; )
                            f = f.lastChild;
                        fb.merge(n, f.childNodes), f = m.firstChild, f.textContent = ""
                    } else
                        n.push(b.createTextNode(e));
            for (m.textContent = "", k = 0; e = n[k++]; )
                if ((!d || -1 === fb.inArray(e, d)) && (i = fb.contains(e.ownerDocument, e), f = q(m.appendChild(e), "script"), i && o(f), c))
                    for (j = 0; e = f[j++]; )
                        Mb.test(e.type || "") && c.push(e);
            return m
        }, cleanData: function(a) {
            for (var c, d, f, g, h, i, j = fb.event.special, k = 0; (d = a[k]) !== b; k++) {
                if (e.accepts(d) && (h = d[qb.expando], h && (c = qb.cache[h]))) {
                    if (f = Object.keys(c.events || {}), f.length)
                        for (i = 0; (g = f[i]) !== b; i++)
                            j[g] ? fb.event.remove(d, g) : fb.removeEvent(d, g, c.handle);
                    qb.cache[h] && delete qb.cache[h]
                }
                delete pb.cache[d[pb.expando]]
            }
        }, _evalUrl: function(a) {
            return fb.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }}), fb.fn.extend({wrapAll: function(a) {
            var b;
            return fb.isFunction(a) ? this.each(function(b) {
                fb(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = fb(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild; )
                    a = a.firstElementChild;
                return a
            }).append(this)), this)
        }, wrapInner: function(a) {
            return fb.isFunction(a) ? this.each(function(b) {
                fb(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = fb(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function(a) {
            var b = fb.isFunction(a);
            return this.each(function(c) {
                fb(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function() {
            return this.parent().each(function() {
                fb.nodeName(this, "body") || fb(this).replaceWith(this.childNodes)
            }).end()
        }});
    var Qb, Rb, Sb = /^(none|table(?!-c[ea]).+)/, Tb = /^margin/, Ub = new RegExp("^(" + gb + ")(.*)$", "i"), Vb = new RegExp("^(" + gb + ")(?!px)[a-z%]+$", "i"), Wb = new RegExp("^([+-])=(" + gb + ")", "i"), Xb = {BODY: "block"}, Yb = {position: "absolute", visibility: "hidden", display: "block"}, Zb = {letterSpacing: 0, fontWeight: 400}, $b = ["Top", "Right", "Bottom", "Left"], _b = ["Webkit", "O", "Moz", "ms"];
    fb.fn.extend({css: function(a, c) {
            return fb.access(this, function(a, c, d) {
                var e, f, g = {}, h = 0;
                if (fb.isArray(c)) {
                    for (e = u(a), f = c.length; f > h; h++)
                        g[c[h]] = fb.css(a, c[h], !1, e);
                    return g
                }
                return d !== b ? fb.style(a, c, d) : fb.css(a, c)
            }, a, c, arguments.length > 1)
        }, show: function() {
            return v(this, !0)
        }, hide: function() {
            return v(this)
        }, toggle: function(a) {
            return"boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                t(this) ? fb(this).show() : fb(this).hide()
            })
        }}), fb.extend({cssHooks: {opacity: {get: function(a, b) {
                    if (b) {
                        var c = Qb(a, "opacity");
                        return"" === c ? "1" : c
                    }
                }}}, cssNumber: {columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": "cssFloat"}, style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = fb.camelCase(c), j = a.style;
                return c = fb.cssProps[i] || (fb.cssProps[i] = s(j, i)), h = fb.cssHooks[c] || fb.cssHooks[i], d === b ? h && "get"in h && (f = h.get(a, !1, e)) !== b ? f : j[c] : (g = typeof d, "string" === g && (f = Wb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(fb.css(a, c)), g = "number"), null == d || "number" === g && isNaN(d) || ("number" !== g || fb.cssNumber[i] || (d += "px"), fb.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set"in h && (d = h.set(a, d, e)) === b || (j[c] = d)), void 0)
            }
        }, css: function(a, c, d, e) {
            var f, g, h, i = fb.camelCase(c);
            return c = fb.cssProps[i] || (fb.cssProps[i] = s(a.style, i)), h = fb.cssHooks[c] || fb.cssHooks[i], h && "get"in h && (f = h.get(a, !0, d)), f === b && (f = Qb(a, c, e)), "normal" === f && c in Zb && (f = Zb[c]), "" === d || d ? (g = parseFloat(f), d === !0 || fb.isNumeric(g) ? g || 0 : f) : f
        }}), Qb = function(a, c, d) {
        var e, f, g, h = d || u(a), i = h ? h.getPropertyValue(c) || h[c] : b, j = a.style;
        return h && ("" !== i || fb.contains(a.ownerDocument, a) || (i = fb.style(a, c)), Vb.test(i) && Tb.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i
    }, fb.each(["height", "width"], function(a, b) {
        fb.cssHooks[b] = {get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && Sb.test(fb.css(a, "display")) ? fb.swap(a, Yb, function() {
                    return y(a, b, d)
                }) : y(a, b, d) : void 0
            }, set: function(a, c, d) {
                var e = d && u(a);
                return w(a, c, d ? x(a, b, d, fb.support.boxSizing && "border-box" === fb.css(a, "boxSizing", !1, e), e) : 0)
            }}
    }), fb(function() {
        fb.support.reliableMarginRight || (fb.cssHooks.marginRight = {get: function(a, b) {
                return b ? fb.swap(a, {display: "inline-block"}, Qb, [a, "marginRight"]) : void 0
            }}), !fb.support.pixelPosition && fb.fn.position && fb.each(["top", "left"], function(a, b) {
            fb.cssHooks[b] = {get: function(a, c) {
                    return c ? (c = Qb(a, b), Vb.test(c) ? fb(a).position()[b] + "px" : c) : void 0
                }}
        })
    }), fb.expr && fb.expr.filters && (fb.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, fb.expr.filters.visible = function(a) {
        return!fb.expr.filters.hidden(a)
    }), fb.each({margin: "", padding: "", border: "Width"}, function(a, b) {
        fb.cssHooks[a + b] = {expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + $b[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }}, Tb.test(a) || (fb.cssHooks[a + b].set = w)
    });
    var ac = /%20/g, bc = /\[\]$/, cc = /\r?\n/g, dc = /^(?:submit|button|image|reset|file)$/i, ec = /^(?:input|select|textarea|keygen)/i;
    fb.fn.extend({serialize: function() {
            return fb.param(this.serializeArray())
        }, serializeArray: function() {
            return this.map(function() {
                var a = fb.prop(this, "elements");
                return a ? fb.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !fb(this).is(":disabled") && ec.test(this.nodeName) && !dc.test(a) && (this.checked || !Kb.test(a))
            }).map(function(a, b) {
                var c = fb(this).val();
                return null == c ? null : fb.isArray(c) ? fb.map(c, function(a) {
                    return{name: b.name, value: a.replace(cc, "\r\n")}
                }) : {name: b.name, value: c.replace(cc, "\r\n")}
            }).get()
        }}), fb.param = function(a, c) {
        var d, e = [], f = function(a, b) {
            b = fb.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (c === b && (c = fb.ajaxSettings && fb.ajaxSettings.traditional), fb.isArray(a) || a.jquery && !fb.isPlainObject(a))
            fb.each(a, function() {
                f(this.name, this.value)
            });
        else
            for (d in a)
                B(d, a[d], c, f);
        return e.join("&").replace(ac, "+")
    }, fb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        fb.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), fb.fn.extend({hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function(a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function(a, b) {
            return this.off(a, null, b)
        }, delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }});
    var fc, gc, hc = fb.now(), ic = /\?/, jc = /#.*$/, kc = /([?&])_=[^&]*/, lc = /^(.*?):[ \t]*([^\r\n]*)$/gm, mc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, nc = /^(?:GET|HEAD)$/, oc = /^\/\//, pc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, qc = fb.fn.load, rc = {}, sc = {}, tc = "*/".concat("*");
    try {
        gc = S.href
    } catch (uc) {
        gc = T.createElement("a"), gc.href = "", gc = gc.href
    }
    fc = pc.exec(gc.toLowerCase()) || [], fb.fn.load = function(a, c, d) {
        if ("string" != typeof a && qc)
            return qc.apply(this, arguments);
        var e, f, g, h = this, i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i), a = a.slice(0, i)), fb.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (f = "POST"), h.length > 0 && fb.ajax({url: a, type: f, dataType: "html", data: c}).done(function(a) {
            g = arguments, h.html(e ? fb("<div>").append(fb.parseHTML(a)).find(e) : a)
        }).complete(d && function(a, b) {
            h.each(d, g || [a.responseText, b, a])
        }), this
    }, fb.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        fb.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), fb.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: gc, type: "GET", isLocal: mc.test(fc[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": tc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": fb.parseJSON, "text xml": fb.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function(a, b) {
            return b ? E(E(a, fb.ajaxSettings), b) : E(fb.ajaxSettings, a)
        }, ajaxPrefilter: C(rc), ajaxTransport: C(sc), ajax: function(a, c) {
            function d(a, c, d, h) {
                var j, l, s, t, v, x = c;
                2 !== u && (u = 2, i && clearTimeout(i), e = b, g = h || "", w.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, d && (t = F(m, w, d)), t = G(m, t, w, j), j ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (fb.lastModified[f] = v), v = w.getResponseHeader("etag"), v && (fb.etag[f] = v)), 204 === a || "HEAD" === m.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, k && o.trigger(j ? "ajaxSuccess" : "ajaxError", [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --fb.active || fb.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = fb.ajaxSetup({}, c), n = m.context || m, o = m.context && (n.nodeType || n.jquery) ? fb(n) : fb.event, p = fb.Deferred(), q = fb.Callbacks("once memory"), r = m.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {readyState: 0, getResponseHeader: function(a) {
                    var b;
                    if (2 === u) {
                        if (!h)
                            for (h = {}; b = lc.exec(g); )
                                h[b[1].toLowerCase()] = b[2];
                        b = h[a.toLowerCase()]
                    }
                    return null == b ? null : b
                }, getAllResponseHeaders: function() {
                    return 2 === u ? g : null
                }, setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return u || (a = t[c] = t[c] || a, s[a] = b), this
                }, overrideMimeType: function(a) {
                    return u || (m.mimeType = a), this
                }, statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > u)
                            for (b in a)
                                r[b] = [r[b], a[b]];
                        else
                            w.always(a[w.status]);
                    return this
                }, abort: function(a) {
                    var b = a || v;
                    return e && e.abort(b), d(0, b), this
                }};
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || gc) + "").replace(jc, "").replace(oc, fc[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = fb.trim(m.dataType || "*").toLowerCase().match(hb) || [""], null == m.crossDomain && (j = pc.exec(m.url.toLowerCase()), m.crossDomain = !(!j || j[1] === fc[1] && j[2] === fc[2] && (j[3] || ("http:" === j[1] ? "80" : "443")) === (fc[3] || ("http:" === fc[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = fb.param(m.data, m.traditional)), D(rc, m, c, w), 2 === u)
                return w;
            k = m.global, k && 0 === fb.active++ && fb.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !nc.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (ic.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = kc.test(f) ? f.replace(kc, "$1_=" + hc++) : f + (ic.test(f) ? "&" : "?") + "_=" + hc++)), m.ifModified && (fb.lastModified[f] && w.setRequestHeader("If-Modified-Since", fb.lastModified[f]), fb.etag[f] && w.setRequestHeader("If-None-Match", fb.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + tc + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers)
                w.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u))
                return w.abort();
            v = "abort";
            for (l in{success:1, error:1, complete:1})
                w[l](m[l]);
            if (e = D(sc, m, c, w)) {
                w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function() {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    u = 1, e.send(s, d)
                } catch (x) {
                    if (!(2 > u))
                        throw x;
                    d(-1, x)
                }
            } else
                d(-1, "No Transport");
            return w
        }, getJSON: function(a, b, c) {
            return fb.get(a, b, c, "json")
        }, getScript: function(a, c) {
            return fb.get(a, b, c, "script")
        }}), fb.each(["get", "post"], function(a, c) {
        fb[c] = function(a, d, e, f) {
            return fb.isFunction(d) && (f = f || e, e = d, d = b), fb.ajax({url: a, type: c, dataType: f, data: d, success: e})
        }
    }), fb.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function(a) {
                return fb.globalEval(a), a
            }}}), fb.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), fb.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return{send: function(d, e) {
                    b = fb("<script>").prop({async: !0, charset: a.scriptCharset, src: a.url}).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), T.head.appendChild(b[0])
                }, abort: function() {
                    c && c()
                }}
        }
    });
    var vc = [], wc = /(=)\?(?=&|$)|\?\?/;
    fb.ajaxSetup({jsonp: "callback", jsonpCallback: function() {
            var a = vc.pop() || fb.expando + "_" + hc++;
            return this[a] = !0, a
        }}), fb.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (wc.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && wc.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = fb.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(wc, "$1" + f) : c.jsonp !== !1 && (c.url += (ic.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
            return h || fb.error(f + " was not called"), h[0]
        }, c.dataTypes[0] = "json", g = a[f], a[f] = function() {
            h = arguments
        }, e.always(function() {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, vc.push(f)), h && fb.isFunction(g) && g(h[0]), h = g = b
        }), "script") : void 0
    }), fb.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var xc = fb.ajaxSettings.xhr(), yc = {0: 200, 1223: 204}, zc = 0, Ac = {};
    a.ActiveXObject && fb(a).on("unload", function() {
        for (var a in Ac)
            Ac[a]();
        Ac = b
    }), fb.support.cors = !!xc && "withCredentials"in xc, fb.support.ajax = xc = !!xc, fb.ajaxTransport(function(a) {
        var c;
        return fb.support.cors || xc && !a.crossDomain ? {send: function(d, e) {
                var f, g, h = a.xhr();
                if (h.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (f in a.xhrFields)
                        h[f] = a.xhrFields[f];
                a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType), a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                for (f in d)
                    h.setRequestHeader(f, d[f]);
                c = function(a) {
                    return function() {
                        c && (delete Ac[g], c = h.onload = h.onerror = null, "abort" === a ? h.abort() : "error" === a ? e(h.status || 404, h.statusText) : e(yc[h.status] || h.status, h.statusText, "string" == typeof h.responseText ? {text: h.responseText} : b, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), h.onerror = c("error"), c = Ac[g = zc++] = c("abort"), h.send(a.hasContent && a.data || null)
            }, abort: function() {
                c && c()
            }} : void 0
    });
    var Bc, Cc, Dc = /^(?:toggle|show|hide)$/, Ec = new RegExp("^(?:([+-])=|)(" + gb + ")([a-z%]*)$", "i"), Fc = /queueHooks$/, Gc = [L], Hc = {"*": [function(a, b) {
                var c = this.createTween(a, b), d = c.cur(), e = Ec.exec(b), f = e && e[3] || (fb.cssNumber[a] ? "" : "px"), g = (fb.cssNumber[a] || "px" !== f && +d) && Ec.exec(fb.css(c.elem, a)), h = 1, i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do
                        h = h || ".5", g /= h, fb.style(c.elem, a, g + f);
                    while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]};
    fb.Animation = fb.extend(J, {tweener: function(a, b) {
            fb.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d], Hc[c] = Hc[c] || [], Hc[c].unshift(b)
        }, prefilter: function(a, b) {
            b ? Gc.unshift(a) : Gc.push(a)
        }}), fb.Tween = M, M.prototype = {constructor: M, init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (fb.cssNumber[c] ? "" : "px")
        }, cur: function() {
            var a = M.propHooks[this.prop];
            return a && a.get ? a.get(this) : M.propHooks._default.get(this)
        }, run: function(a) {
            var b, c = M.propHooks[this.prop];
            return this.pos = b = this.options.duration ? fb.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : M.propHooks._default.set(this), this
        }}, M.prototype.init.prototype = M.prototype, M.propHooks = {_default: {get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = fb.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function(a) {
                fb.fx.step[a.prop] ? fb.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[fb.cssProps[a.prop]] || fb.cssHooks[a.prop]) ? fb.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }}}, M.propHooks.scrollTop = M.propHooks.scrollLeft = {set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }}, fb.each(["toggle", "show", "hide"], function(a, b) {
        var c = fb.fn[b];
        fb.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(N(b, !0), a, d, e)
        }
    }), fb.fn.extend({fadeTo: function(a, b, c, d) {
            return this.filter(t).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function(a, b, c, d) {
            var e = fb.isEmptyObject(a), f = fb.speed(b, c, d), g = function() {
                var b = J(this, fb.extend({}, a), f);
                (e || qb.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d)
            };
            return"string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0, c = null != a && a + "queueHooks", f = fb.timers, g = qb.get(this);
                if (c)
                    g[c] && g[c].stop && e(g[c]);
                else
                    for (c in g)
                        g[c] && g[c].stop && Fc.test(c) && e(g[c]);
                for (c = f.length; c--; )
                    f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && fb.dequeue(this, a)
            })
        }, finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = qb.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = fb.timers, g = d ? d.length : 0;
                for (c.finish = !0, fb.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }}), fb.each({slideDown: N("show"), slideUp: N("hide"), slideToggle: N("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function(a, b) {
        fb.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), fb.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? fb.extend({}, a) : {complete: c || !c && b || fb.isFunction(a) && a, duration: a, easing: c && b || b && !fb.isFunction(b) && b};
        return d.duration = fb.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fb.fx.speeds ? fb.fx.speeds[d.duration] : fb.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            fb.isFunction(d.old) && d.old.call(this), d.queue && fb.dequeue(this, d.queue)
        }, d
    }, fb.easing = {linear: function(a) {
            return a
        }, swing: function(a) {
            return.5 - Math.cos(a * Math.PI) / 2
        }}, fb.timers = [], fb.fx = M.prototype.init, fb.fx.tick = function() {
        var a, c = fb.timers, d = 0;
        for (Bc = fb.now(); d < c.length; d++)
            a = c[d], a() || c[d] !== a || c.splice(d--, 1);
        c.length || fb.fx.stop(), Bc = b
    }, fb.fx.timer = function(a) {
        a() && fb.timers.push(a) && fb.fx.start()
    }, fb.fx.interval = 13, fb.fx.start = function() {
        Cc || (Cc = setInterval(fb.fx.tick, fb.fx.interval))
    }, fb.fx.stop = function() {
        clearInterval(Cc), Cc = null
    }, fb.fx.speeds = {slow: 600, fast: 200, _default: 400}, fb.fx.step = {}, fb.expr && fb.expr.filters && (fb.expr.filters.animated = function(a) {
        return fb.grep(fb.timers, function(b) {
            return a === b.elem
        }).length
    }), fb.fn.offset = function(a) {
        if (arguments.length)
            return a === b ? this : this.each(function(b) {
                fb.offset.setOffset(this, a, b)
            });
        var c, d, e = this[0], f = {top: 0, left: 0}, g = e && e.ownerDocument;
        if (g)
            return c = g.documentElement, fb.contains(c, e) ? (typeof e.getBoundingClientRect !== R && (f = e.getBoundingClientRect()), d = O(g), {top: f.top + d.pageYOffset - c.clientTop, left: f.left + d.pageXOffset - c.clientLeft}) : f
    }, fb.offset = {setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = fb.css(a, "position"), l = fb(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = fb.css(a, "top"), i = fb.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), fb.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using"in b ? b.using.call(a, m) : l.css(m)
        }}, fb.fn.extend({position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0, left: 0};
                return"fixed" === fb.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), fb.nodeName(a[0], "html") || (d = a.offset()), d.top += fb.css(a[0], "borderTopWidth", !0), d.left += fb.css(a[0], "borderLeftWidth", !0)), {top: b.top - d.top - fb.css(c, "marginTop", !0), left: b.left - d.left - fb.css(c, "marginLeft", !0)}
            }
        }, offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || U; a && !fb.nodeName(a, "html") && "static" === fb.css(a, "position"); )
                    a = a.offsetParent;
                return a || U
            })
        }}), fb.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function(c, d) {
        var e = "pageYOffset" === d;
        fb.fn[c] = function(f) {
            return fb.access(this, function(c, f, g) {
                var h = O(c);
                return g === b ? h ? h[d] : c[f] : (h ? h.scrollTo(e ? a.pageXOffset : g, e ? g : a.pageYOffset) : c[f] = g, void 0)
            }, c, f, arguments.length, null)
        }
    }), fb.each({Height: "height", Width: "width"}, function(a, c) {
        fb.each({padding: "inner" + a, content: c, "": "outer" + a}, function(d, e) {
            fb.fn[e] = function(e, f) {
                var g = arguments.length && (d || "boolean" != typeof e), h = d || (e === !0 || f === !0 ? "margin" : "border");
                return fb.access(this, function(c, d, e) {
                    var f;
                    return fb.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? fb.css(c, d, h) : fb.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }), fb.fn.size = function() {
        return this.length
    }, fb.fn.andSelf = fb.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = fb : "function" == typeof define && define.amd && define("jquery", [], function() {
        return fb
    }), "object" == typeof a && "object" == typeof a.document && (a.jQuery = a.$ = fb)
}(window), window.Modernizr = function(a, b, c) {
    function d(a) {
        t.cssText = a
    }
    function e(a, b) {
        return d(x.join(a + ";") + (b || ""))
    }
    function f(a, b) {
        return typeof a === b
    }
    function g(a, b) {
        return!!~("" + a).indexOf(b)
    }
    function h(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!g(e, "-") && t[e] !== c)
                return"pfx" == b ? e : !0
        }
        return!1
    }
    function i(a, b, d) {
        for (var e in a) {
            var g = b[a[e]];
            if (g !== c)
                return d === !1 ? a[e] : f(g, "function") ? g.bind(d || b) : g
        }
        return!1
    }
    function j(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + z.join(d + " ") + d).split(" ");
        return f(b, "string") || f(b, "undefined") ? h(e, b) : (e = (a + " " + A.join(d + " ") + d).split(" "), i(e, b, c))
    }
    function k() {
        o.input = function(c) {
            for (var d = 0, e = c.length; e > d; d++)
                E[c[d]] = !!(c[d]in u);
            return E.list && (E.list = !(!b.createElement("datalist") || !a.HTMLDataListElement)), E
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), o.inputtypes = function(a) {
            for (var d, e, f, g = 0, h = a.length; h > g; g++)
                u.setAttribute("type", e = a[g]), d = "text" !== u.type, d && (u.value = v, u.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(e) && u.style.WebkitAppearance !== c ? (q.appendChild(u), f = b.defaultView, d = f.getComputedStyle && "textfield" !== f.getComputedStyle(u, null).WebkitAppearance && 0 !== u.offsetHeight, q.removeChild(u)) : /^(search|tel)$/.test(e) || (d = /^(url|email)$/.test(e) ? u.checkValidity && u.checkValidity() === !1 : u.value != v)), D[a[g]] = !!d;
            return D
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var l, m, n = "2.6.3", o = {}, p = !0, q = b.documentElement, r = "modernizr", s = b.createElement(r), t = s.style, u = b.createElement("input"), v = ":)", w = {}.toString, x = " -webkit- -moz- -o- -ms- ".split(" "), y = "Webkit Moz O ms", z = y.split(" "), A = y.toLowerCase().split(" "), B = {svg: "http://www.w3.org/2000/svg"}, C = {}, D = {}, E = {}, F = [], G = F.slice, H = function(a, c, d, e) {
        var f, g, h, i, j = b.createElement("div"), k = b.body, l = k || b.createElement("body");
        if (parseInt(d, 10))
            for (; d--; )
                h = b.createElement("div"), h.id = e ? e[d] : r + (d + 1), j.appendChild(h);
        return f = ["&#173;", '<style id="s', r, '">', a, "</style>"].join(""), j.id = r, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = q.style.overflow, q.style.overflow = "hidden", q.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), q.style.overflow = i), !!g
    }, I = function(b) {
        var c = a.matchMedia || a.msMatchMedia;
        if (c)
            return c(b).matches;
        var d;
        return H("@media " + b + " { #" + r + " { position: absolute; } }", function(b) {
            d = "absolute" == (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).position
        }), d
    }, J = function() {
        function a(a, e) {
            e = e || b.createElement(d[a] || "div"), a = "on" + a;
            var g = a in e;
            return g || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(a, ""), g = f(e[a], "function"), f(e[a], "undefined") || (e[a] = c), e.removeAttribute(a))), e = null, g
        }
        var d = {select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img"};
        return a
    }(), K = {}.hasOwnProperty;
    m = f(K, "undefined") || f(K.call, "undefined") ? function(a, b) {
        return b in a && f(a.constructor.prototype[b], "undefined")
    } : function(a, b) {
        return K.call(a, b)
    }, Function.prototype.bind || (Function.prototype.bind = function(a) {
        var b = this;
        if ("function" != typeof b)
            throw new TypeError;
        var c = G.call(arguments, 1), d = function() {
            if (this instanceof d) {
                var e = function() {
                };
                e.prototype = b.prototype;
                var f = new e, g = b.apply(f, c.concat(G.call(arguments)));
                return Object(g) === g ? g : f
            }
            return b.apply(a, c.concat(G.call(arguments)))
        };
        return d
    }), C.flexbox = function() {
        return j("flexWrap")
    }, C.flexboxlegacy = function() {
        return j("boxDirection")
    }, C.canvas = function() {
        var a = b.createElement("canvas");
        return!(!a.getContext || !a.getContext("2d"))
    }, C.canvastext = function() {
        return!(!o.canvas || !f(b.createElement("canvas").getContext("2d").fillText, "function"))
    }, C.webgl = function() {
        return!!a.WebGLRenderingContext
    }, C.touch = function() {
        var c;
        return"ontouchstart"in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : H(["@media (", x.join("touch-enabled),("), r, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
            c = 9 === a.offsetTop
        }), c
    }, C.geolocation = function() {
        return"geolocation"in navigator
    }, C.postmessage = function() {
        return!!a.postMessage
    }, C.websqldatabase = function() {
        return!!a.openDatabase
    }, C.indexedDB = function() {
        return!!j("indexedDB", a)
    }, C.hashchange = function() {
        return J("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
    }, C.history = function() {
        return!(!a.history || !history.pushState)
    }, C.draganddrop = function() {
        var a = b.createElement("div");
        return"draggable"in a || "ondragstart"in a && "ondrop"in a
    }, C.websockets = function() {
        return"WebSocket"in a || "MozWebSocket"in a
    }, C.rgba = function() {
        return d("background-color:rgba(150,255,150,.5)"), g(t.backgroundColor, "rgba")
    }, C.hsla = function() {
        return d("background-color:hsla(120,40%,100%,.5)"), g(t.backgroundColor, "rgba") || g(t.backgroundColor, "hsla")
    }, C.multiplebgs = function() {
        return d("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(t.background)
    }, C.backgroundsize = function() {
        return j("backgroundSize")
    }, C.borderimage = function() {
        return j("borderImage")
    }, C.borderradius = function() {
        return j("borderRadius")
    }, C.boxshadow = function() {
        return j("boxShadow")
    }, C.textshadow = function() {
        return"" === b.createElement("div").style.textShadow
    }, C.opacity = function() {
        return e("opacity:.55"), /^0.55$/.test(t.opacity)
    }, C.cssanimations = function() {
        return j("animationName")
    }, C.csscolumns = function() {
        return j("columnCount")
    }, C.cssgradients = function() {
        var a = "background-image:", b = "gradient(linear,left top,right bottom,from(#9f9),to(white));", c = "linear-gradient(left top,#9f9, white);";
        return d((a + "-webkit- ".split(" ").join(b + a) + x.join(c + a)).slice(0, -a.length)), g(t.backgroundImage, "gradient")
    }, C.cssreflections = function() {
        return j("boxReflect")
    }, C.csstransforms = function() {
        return!!j("transform")
    }, C.csstransforms3d = function() {
        var a = !!j("perspective");
        return a && "webkitPerspective"in q.style && H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b) {
            a = 9 === b.offsetLeft && 3 === b.offsetHeight
        }), a
    }, C.csstransitions = function() {
        return j("transition")
    }, C.fontface = function() {
        var a;
        return H('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
            var e = b.getElementById("smodernizr"), f = e.sheet || e.styleSheet, g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
            a = /src/i.test(g) && 0 === g.indexOf(d.split(" ")[0])
        }), a
    }, C.generatedcontent = function() {
        var a;
        return H(["#", r, "{font:0/0 a}#", r, ':after{content:"', v, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
            a = b.offsetHeight >= 3
        }), a
    }, C.video = function() {
        var a = b.createElement("video"), c = !1;
        try {
            (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (d) {
        }
        return c
    }, C.audio = function() {
        var a = b.createElement("audio"), c = !1;
        try {
            (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (d) {
        }
        return c
    }, C.localstorage = function() {
        try {
            return localStorage.setItem(r, r), localStorage.removeItem(r), !0
        } catch (a) {
            return!1
        }
    }, C.sessionstorage = function() {
        try {
            return sessionStorage.setItem(r, r), sessionStorage.removeItem(r), !0
        } catch (a) {
            return!1
        }
    }, C.webworkers = function() {
        return!!a.Worker
    }, C.applicationcache = function() {
        return!!a.applicationCache
    }, C.svg = function() {
        return!!b.createElementNS && !!b.createElementNS(B.svg, "svg").createSVGRect
    }, C.inlinesvg = function() {
        var a = b.createElement("div");
        return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == B.svg
    }, C.smil = function() {
        return!!b.createElementNS && /SVGAnimate/.test(w.call(b.createElementNS(B.svg, "animate")))
    }, C.svgclippaths = function() {
        return!!b.createElementNS && /SVGClipPath/.test(w.call(b.createElementNS(B.svg, "clipPath")))
    };
    for (var L in C)
        m(C, L) && (l = L.toLowerCase(), o[l] = C[L](), F.push((o[l] ? "" : "no-") + l));
    return o.input || k(), o.addTest = function(a, b) {
        if ("object" == typeof a)
            for (var d in a)
                m(a, d) && o.addTest(d, a[d]);
        else {
            if (a = a.toLowerCase(), o[a] !== c)
                return o;
            b = "function" == typeof b ? b() : b, "undefined" != typeof p && p && (q.className += " " + (b ? "" : "no-") + a), o[a] = b
        }
        return o
    }, d(""), s = u = null, function(a, b) {
        function c(a, b) {
            var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }
        function d() {
            var a = r.elements;
            return"string" == typeof a ? a.split(" ") : a
        }
        function e(a) {
            var b = q[a[o]];
            return b || (b = {}, p++, a[o] = p, q[p] = b), b
        }
        function f(a, c, d) {
            if (c || (c = b), k)
                return c.createElement(a);
            d || (d = e(c));
            var f;
            return f = d.cache[a] ? d.cache[a].cloneNode() : n.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), f.canHaveChildren && !m.test(a) ? d.frag.appendChild(f) : f
        }
        function g(a, c) {
            if (a || (a = b), k)
                return a.createDocumentFragment();
            c = c || e(a);
            for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++)
                f.createElement(h[g]);
            return f
        }
        function h(a, b) {
            b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                return r.shivMethods ? f(c, a, b) : b.createElem(c)
            }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/\w+/g, function(a) {
                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
            }) + ");return n}")(r, b.frag)
        }
        function i(a) {
            a || (a = b);
            var d = e(a);
            return!r.shivCSS || j || d.hasCSS || (d.hasCSS = !!c(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), k || h(a, d), a
        }
        var j, k, l = a.html5 || {}, m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, n = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, o = "_html5shiv", p = 0, q = {};
        !function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>", j = "hidden"in a, k = 1 == a.childNodes.length || function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return"undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
                }()
            } catch (c) {
                j = !0, k = !0
            }
        }();
        var r = {elements: l.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video", shivCSS: l.shivCSS !== !1, supportsUnknownElements: k, shivMethods: l.shivMethods !== !1, type: "default", shivDocument: i, createElement: f, createDocumentFragment: g};
        a.html5 = r, i(b)
    }(this, b), o._version = n, o._prefixes = x, o._domPrefixes = A, o._cssomPrefixes = z, o.mq = I, o.hasEvent = J, o.testProp = function(a) {
        return h([a])
    }, o.testAllProps = j, o.testStyles = H, o.prefixed = function(a, b, c) {
        return b ? j(a, b, c) : j(a, "pfx")
    }, q.className = q.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + F.join(" ") : ""), o
}(this, this.document), function(a, b) {
    "object" == typeof exports ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.Spinner = b()
}(this, function() {
    "use strict";
    function a(a, b) {
        var c, d = document.createElement(a || "div");
        for (c in b)
            d[c] = b[c];
        return d
    }
    function b(a) {
        for (var b = 1, c = arguments.length; c > b; b++)
            a.appendChild(arguments[b]);
        return a
    }
    function c(a, b, c, d) {
        var e = ["opacity", b, ~~(100 * a), c, d].join("-"), f = .01 + c / d * 100, g = Math.max(1 - (1 - a) / b * (100 - f), a), h = k.substring(0, k.indexOf("Animation")).toLowerCase(), i = h && "-" + h + "-" || "";
        return m[e] || (n.insertRule("@" + i + "keyframes " + e + "{0%{opacity:" + g + "}" + f + "%{opacity:" + a + "}" + (f + .01) + "%{opacity:1}" + (f + b) % 100 + "%{opacity:" + a + "}100%{opacity:" + g + "}}", n.cssRules.length), m[e] = 1), e
    }
    function d(a, b) {
        var c, d, e = a.style;
        for (b = b.charAt(0).toUpperCase() + b.slice(1), d = 0; d < l.length; d++)
            if (c = l[d] + b, void 0 !== e[c])
                return c;
        return void 0 !== e[b] ? b : void 0
    }
    function e(a, b) {
        for (var c in b)
            a.style[d(a, c) || c] = b[c];
        return a
    }
    function f(a) {
        for (var b = 1; b < arguments.length; b++) {
            var c = arguments[b];
            for (var d in c)
                void 0 === a[d] && (a[d] = c[d])
        }
        return a
    }
    function g(a) {
        for (var b = {x: a.offsetLeft, y: a.offsetTop}; a = a.offsetParent; )
            b.x += a.offsetLeft, b.y += a.offsetTop;
        return b
    }
    function h(a, b) {
        return"string" == typeof a ? a : a[b % a.length]
    }
    function i(a) {
        return"undefined" == typeof this ? new i(a) : (this.opts = f(a || {}, i.defaults, o), void 0)
    }
    function j() {
        function c(b, c) {
            return a("<" + b + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', c)
        }
        n.addRule(".spin-vml", "behavior:url(#default#VML)"), i.prototype.lines = function(a, d) {
            function f() {
                return e(c("group", {coordsize: k + " " + k, coordorigin: -j + " " + -j}), {width: k, height: k})
            }
            function g(a, g, i) {
                b(m, b(e(f(), {rotation: 360 / d.lines * a + "deg", left: ~~g}), b(e(c("roundrect", {arcsize: d.corners}), {width: j, height: d.width, left: d.radius, top: -d.width >> 1, filter: i}), c("fill", {color: h(d.color, a), opacity: d.opacity}), c("stroke", {opacity: 0}))))
            }
            var i, j = d.length + d.width, k = 2 * j, l = 2 * -(d.width + d.length) + "px", m = e(f(), {position: "absolute", top: l, left: l});
            if (d.shadow)
                for (i = 1; i <= d.lines; i++)
                    g(i, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (i = 1; i <= d.lines; i++)
                g(i);
            return b(a, m)
        }, i.prototype.opacity = function(a, b, c, d) {
            var e = a.firstChild;
            d = d.shadow && d.lines || 0, e && b + d < e.childNodes.length && (e = e.childNodes[b + d], e = e && e.firstChild, e = e && e.firstChild, e && (e.opacity = c))
        }
    }
    var k, l = ["webkit", "Moz", "ms", "O"], m = {}, n = function() {
        var c = a("style", {type: "text/css"});
        return b(document.getElementsByTagName("head")[0], c), c.sheet || c.styleSheet
    }(), o = {lines: 12, length: 7, width: 5, radius: 10, rotate: 0, corners: 1, color: "#000", direction: 1, speed: 1, trail: 100, opacity: .25, fps: 20, zIndex: 2e9, className: "spinner", top: "auto", left: "auto", position: "relative"};
    i.defaults = {}, f(i.prototype, {spin: function(b) {
            this.stop();
            var c, d, f = this, h = f.opts, i = f.el = e(a(0, {className: h.className}), {position: h.position, width: 0, zIndex: h.zIndex}), j = h.radius + h.length + h.width;
            if (b && (b.insertBefore(i, b.firstChild || null), d = g(b), c = g(i), e(i, {left: ("auto" == h.left ? d.x - c.x + (b.offsetWidth >> 1) : parseInt(h.left, 10) + j) + "px", top: ("auto" == h.top ? d.y - c.y + (b.offsetHeight >> 1) : parseInt(h.top, 10) + j) + "px"})), i.setAttribute("role", "progressbar"), f.lines(i, f.opts), !k) {
                var l, m = 0, n = (h.lines - 1) * (1 - h.direction) / 2, o = h.fps, p = o / h.speed, q = (1 - h.opacity) / (p * h.trail / 100), r = p / h.lines;
                !function s() {
                    m++;
                    for (var a = 0; a < h.lines; a++)
                        l = Math.max(1 - (m + (h.lines - a) * r) % p * q, h.opacity), f.opacity(i, a * h.direction + n, l, h);
                    f.timeout = f.el && setTimeout(s, ~~(1e3 / o))
                }()
            }
            return f
        }, stop: function() {
            var a = this.el;
            return a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = void 0), this
        }, lines: function(d, f) {
            function g(b, c) {
                return e(a(), {position: "absolute", width: f.length + f.width + "px", height: f.width + "px", background: b, boxShadow: c, transformOrigin: "left", transform: "rotate(" + ~~(360 / f.lines * j + f.rotate) + "deg) translate(" + f.radius + "px,0)", borderRadius: (f.corners * f.width >> 1) + "px"})
            }
            for (var i, j = 0, l = (f.lines - 1) * (1 - f.direction) / 2; j < f.lines; j++)
                i = e(a(), {position: "absolute", top: 1 + ~(f.width / 2) + "px", transform: f.hwaccel ? "translate3d(0,0,0)" : "", opacity: f.opacity, animation: k && c(f.opacity, f.trail, l + j * f.direction, f.lines) + " " + 1 / f.speed + "s linear infinite"}), f.shadow && b(i, e(g("#000", "0 0 4px #000"), {top: "2px"})), b(d, b(i, g(h(f.color, j), "0 0 1px rgba(0,0,0,.1)")));
            return d
        }, opacity: function(a, b, c) {
            b < a.childNodes.length && (a.childNodes[b].style.opacity = c)
        }});
    var p = e(a("group"), {behavior: "url(#default#VML)"});
    return!d(p, "transform") && p.adj ? j() : k = d(p, "animation"), i
}), window.Echo = function(a, b) {
    "use strict";
    var c, d, e, f = [], g = function(d) {
        var e = d.getBoundingClientRect();
        return(e.top >= 0 && e.left >= 0 && e.top) <= (a.innerHeight || b.documentElement.clientHeight) + parseInt(c)
    }, h = function() {
        for (var a = f.length; a--; ) {
            var b = f[a];
            g(b) && (b.src = b.getAttribute("data-echo"), f.splice(a, 1))
        }
    }, i = function() {
        clearTimeout(e), e = setTimeout(h, d)
    }, j = function(e) {
        var g = b.querySelectorAll("[data-echo]"), h = e || {};
        c = h.offset || 0, d = h.throttle || 250;
        for (var j = 0; j < g.length; j++)
            f.push(g[j]);
        i(), b.addEventListener ? a.addEventListener("scroll", i, !1) : a.attachEvent("onscroll", i)
    };
    return{init: j, render: i}
}(window, document), function(a) {
    "use strict";
    a.fn.fitVids = function(b) {
        var c = {customSelector: null};
        if (!document.getElementById("fit-vids-style")) {
            var d = document.createElement("div"), e = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0], f = "&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";
            d.className = "fit-vids-style", d.id = "fit-vids-style", d.style.display = "none", d.innerHTML = f, e.parentNode.insertBefore(d, e)
        }
        return b && a.extend(c, b), this.each(function() {
            var b = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            c.customSelector && b.push(c.customSelector);
            var d = a(this).find(b.join(","));
            d = d.not("object object"), d.each(function() {
                var b = a(this);
                if (!("embed" === this.tagName.toLowerCase() && b.parent("object").length || b.parent(".fluid-width-video-wrapper").length)) {
                    var c = "object" === this.tagName.toLowerCase() || b.attr("height") && !isNaN(parseInt(b.attr("height"), 10)) ? parseInt(b.attr("height"), 10) : b.height(), d = isNaN(parseInt(b.attr("width"), 10)) ? b.width() : parseInt(b.attr("width"), 10), e = c / d;
                    if (!b.attr("id")) {
                        var f = "fitvid" + Math.floor(999999 * Math.random());
                        b.attr("id", f)
                    }
                    b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * e + "%"), b.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto), function(a, b) {
    "use strict";
    function c() {
        if (!d.READY) {
            d.event.determineEventTypes();
            for (var a in d.gestures)
                d.gestures.hasOwnProperty(a) && d.detection.register(d.gestures[a]);
            d.event.onTouch(d.DOCUMENT, d.EVENT_MOVE, d.detection.detect), d.event.onTouch(d.DOCUMENT, d.EVENT_END, d.detection.detect), d.READY = !0
        }
    }
    var d = function(a, b) {
        return new d.Instance(a, b || {})
    };
    d.defaults = {stop_browser_behavior: {userSelect: "none", touchAction: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)"}}, d.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, d.HAS_TOUCHEVENTS = "ontouchstart"in a, d.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i, d.NO_MOUSEEVENTS = d.HAS_TOUCHEVENTS && navigator.userAgent.match(d.MOBILE_REGEX), d.EVENT_TYPES = {}, d.DIRECTION_DOWN = "down", d.DIRECTION_LEFT = "left", d.DIRECTION_UP = "up", d.DIRECTION_RIGHT = "right", d.POINTER_MOUSE = "mouse", d.POINTER_TOUCH = "touch", d.POINTER_PEN = "pen", d.EVENT_START = "start", d.EVENT_MOVE = "move", d.EVENT_END = "end", d.DOCUMENT = document, d.plugins = {}, d.READY = !1, d.Instance = function(a, b) {
        var e = this;
        return c(), this.element = a, this.enabled = !0, this.options = d.utils.extend(d.utils.extend({}, d.defaults), b || {}), this.options.stop_browser_behavior && d.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior), d.event.onTouch(a, d.EVENT_START, function(a) {
            e.enabled && d.detection.startDetect(e, a)
        }), this
    }, d.Instance.prototype = {on: function(a, b) {
            for (var c = a.split(" "), d = 0; d < c.length; d++)
                this.element.addEventListener(c[d], b, !1);
            return this
        }, off: function(a, b) {
            for (var c = a.split(" "), d = 0; d < c.length; d++)
                this.element.removeEventListener(c[d], b, !1);
            return this
        }, trigger: function(a, b) {
            var c = d.DOCUMENT.createEvent("Event");
            c.initEvent(a, !0, !0), c.gesture = b;
            var e = this.element;
            return d.utils.hasParent(b.target, e) && (e = b.target), e.dispatchEvent(c), this
        }, enable: function(a) {
            return this.enabled = a, this
        }};
    var e = null, f = !1, g = !1;
    d.event = {bindDom: function(a, b, c) {
            for (var d = b.split(" "), e = 0; e < d.length; e++)
                a.addEventListener(d[e], c, !1)
        }, onTouch: function(a, b, c) {
            var h = this;
            this.bindDom(a, d.EVENT_TYPES[b], function(i) {
                var j = i.type.toLowerCase();
                if (!j.match(/mouse/) || !g) {
                    (j.match(/touch/) || j.match(/pointerdown/) || j.match(/mouse/) && 1 === i.which) && (f = !0), j.match(/touch|pointer/) && (g = !0);
                    var k = 0;
                    f && (d.HAS_POINTEREVENTS && b != d.EVENT_END ? k = d.PointerEvent.updatePointer(b, i) : j.match(/touch/) ? k = i.touches.length : g || (k = j.match(/up/) ? 0 : 1), k > 0 && b == d.EVENT_END ? b = d.EVENT_MOVE : k || (b = d.EVENT_END), k || null === e ? e = i : i = e, c.call(d.detection, h.collectEventData(a, b, i)), d.HAS_POINTEREVENTS && b == d.EVENT_END && (k = d.PointerEvent.updatePointer(b, i))), k || (e = null, f = !1, g = !1, d.PointerEvent.reset())
                }
            })
        }, determineEventTypes: function() {
            var a;
            a = d.HAS_POINTEREVENTS ? d.PointerEvent.getEvents() : d.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], d.EVENT_TYPES[d.EVENT_START] = a[0], d.EVENT_TYPES[d.EVENT_MOVE] = a[1], d.EVENT_TYPES[d.EVENT_END] = a[2]
        }, getTouchList: function(a) {
            return d.HAS_POINTEREVENTS ? d.PointerEvent.getTouchList() : a.touches ? a.touches : [{identifier: 1, pageX: a.pageX, pageY: a.pageY, target: a.target}]
        }, collectEventData: function(a, b, c) {
            var e = this.getTouchList(c, b), f = d.POINTER_TOUCH;
            return(c.type.match(/mouse/) || d.PointerEvent.matchType(d.POINTER_MOUSE, c)) && (f = d.POINTER_MOUSE), {center: d.utils.getCenter(e), timeStamp: (new Date).getTime(), target: c.target, touches: e, eventType: b, pointerType: f, srcEvent: c, preventDefault: function() {
                    this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault && this.srcEvent.preventDefault()
                }, stopPropagation: function() {
                    this.srcEvent.stopPropagation()
                }, stopDetect: function() {
                    return d.detection.stopDetect()
                }}
        }}, d.PointerEvent = {pointers: {}, getTouchList: function() {
            var a = this, b = [];
            return Object.keys(a.pointers).sort().forEach(function(c) {
                b.push(a.pointers[c])
            }), b
        }, updatePointer: function(a, b) {
            return a == d.EVENT_END ? this.pointers = {} : (b.identifier = b.pointerId, this.pointers[b.pointerId] = b), Object.keys(this.pointers).length
        }, matchType: function(a, b) {
            if (!b.pointerType)
                return!1;
            var c = {};
            return c[d.POINTER_MOUSE] = b.pointerType == b.MSPOINTER_TYPE_MOUSE || b.pointerType == d.POINTER_MOUSE, c[d.POINTER_TOUCH] = b.pointerType == b.MSPOINTER_TYPE_TOUCH || b.pointerType == d.POINTER_TOUCH, c[d.POINTER_PEN] = b.pointerType == b.MSPOINTER_TYPE_PEN || b.pointerType == d.POINTER_PEN, c[a]
        }, getEvents: function() {
            return["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
        }, reset: function() {
            this.pointers = {}
        }}, d.utils = {extend: function(a, c, d) {
            for (var e in c)
                a[e] !== b && d || (a[e] = c[e]);
            return a
        }, hasParent: function(a, b) {
            for (; a; ) {
                if (a == b)
                    return!0;
                a = a.parentNode
            }
            return!1
        }, getCenter: function(a) {
            for (var b = [], c = [], d = 0, e = a.length; e > d; d++)
                b.push(a[d].pageX), c.push(a[d].pageY);
            return{pageX: (Math.min.apply(Math, b) + Math.max.apply(Math, b)) / 2, pageY: (Math.min.apply(Math, c) + Math.max.apply(Math, c)) / 2}
        }, getVelocity: function(a, b, c) {
            return{x: Math.abs(b / a) || 0, y: Math.abs(c / a) || 0}
        }, getAngle: function(a, b) {
            var c = b.pageY - a.pageY, d = b.pageX - a.pageX;
            return 180 * Math.atan2(c, d) / Math.PI
        }, getDirection: function(a, b) {
            var c = Math.abs(a.pageX - b.pageX), e = Math.abs(a.pageY - b.pageY);
            return c >= e ? a.pageX - b.pageX > 0 ? d.DIRECTION_LEFT : d.DIRECTION_RIGHT : a.pageY - b.pageY > 0 ? d.DIRECTION_UP : d.DIRECTION_DOWN
        }, getDistance: function(a, b) {
            var c = b.pageX - a.pageX, d = b.pageY - a.pageY;
            return Math.sqrt(c * c + d * d)
        }, getScale: function(a, b) {
            return a.length >= 2 && b.length >= 2 ? this.getDistance(b[0], b[1]) / this.getDistance(a[0], a[1]) : 1
        }, getRotation: function(a, b) {
            return a.length >= 2 && b.length >= 2 ? this.getAngle(b[1], b[0]) - this.getAngle(a[1], a[0]) : 0
        }, isVertical: function(a) {
            return a == d.DIRECTION_UP || a == d.DIRECTION_DOWN
        }, stopDefaultBrowserBehavior: function(a, b) {
            var c, d = ["webkit", "khtml", "moz", "ms", "o", ""];
            if (b && a.style) {
                for (var e = 0; e < d.length; e++)
                    for (var f in b)
                        b.hasOwnProperty(f) && (c = f, d[e] && (c = d[e] + c.substring(0, 1).toUpperCase() + c.substring(1)), a.style[c] = b[f]);
                "none" == b.userSelect && (a.onselectstart = function() {
                    return!1
                })
            }
        }}, d.detection = {gestures: [], current: null, previous: null, stopped: !1, startDetect: function(a, b) {
            this.current || (this.stopped = !1, this.current = {inst: a, startEvent: d.utils.extend({}, b), lastEvent: !1, name: ""}, this.detect(b))
        }, detect: function(a) {
            if (this.current && !this.stopped) {
                a = this.extendEventData(a);
                for (var b = this.current.inst.options, c = 0, e = this.gestures.length; e > c; c++) {
                    var f = this.gestures[c];
                    if (!this.stopped && b[f.name] !== !1 && f.handler.call(f, a, this.current.inst) === !1) {
                        this.stopDetect();
                        break
                    }
                }
                return this.current && (this.current.lastEvent = a), a.eventType == d.EVENT_END && !a.touches.length - 1 && this.stopDetect(), a
            }
        }, stopDetect: function() {
            this.previous = d.utils.extend({}, this.current), this.current = null, this.stopped = !0
        }, extendEventData: function(a) {
            var b = this.current.startEvent;
            if (b && (a.touches.length != b.touches.length || a.touches === b.touches)) {
                b.touches = [];
                for (var c = 0, e = a.touches.length; e > c; c++)
                    b.touches.push(d.utils.extend({}, a.touches[c]))
            }
            var f = a.timeStamp - b.timeStamp, g = a.center.pageX - b.center.pageX, h = a.center.pageY - b.center.pageY, i = d.utils.getVelocity(f, g, h);
            return d.utils.extend(a, {deltaTime: f, deltaX: g, deltaY: h, velocityX: i.x, velocityY: i.y, distance: d.utils.getDistance(b.center, a.center), angle: d.utils.getAngle(b.center, a.center), direction: d.utils.getDirection(b.center, a.center), scale: d.utils.getScale(b.touches, a.touches), rotation: d.utils.getRotation(b.touches, a.touches), startEvent: b}), a
        }, register: function(a) {
            var c = a.defaults || {};
            return c[a.name] === b && (c[a.name] = !0), d.utils.extend(d.defaults, c, !0), a.index = a.index || 1e3, this.gestures.push(a), this.gestures.sort(function(a, b) {
                return a.index < b.index ? -1 : a.index > b.index ? 1 : 0
            }), this.gestures
        }}, d.gestures = d.gestures || {}, d.gestures.Hold = {name: "hold", index: 10, defaults: {hold_timeout: 500, hold_threshold: 1}, timer: null, handler: function(a, b) {
            switch (a.eventType) {
                case d.EVENT_START:
                    clearTimeout(this.timer), d.detection.current.name = this.name, this.timer = setTimeout(function() {
                        "hold" == d.detection.current.name && b.trigger("hold", a)
                    }, b.options.hold_timeout);
                    break;
                case d.EVENT_MOVE:
                    a.distance > b.options.hold_threshold && clearTimeout(this.timer);
                    break;
                case d.EVENT_END:
                    clearTimeout(this.timer)
                }
        }}, d.gestures.Tap = {name: "tap", index: 100, defaults: {tap_max_touchtime: 250, tap_max_distance: 10, tap_always: !0, doubletap_distance: 20, doubletap_interval: 300}, handler: function(a, b) {
            if (a.eventType == d.EVENT_END) {
                var c = d.detection.previous, e = !1;
                if (a.deltaTime > b.options.tap_max_touchtime || a.distance > b.options.tap_max_distance)
                    return;
                c && "tap" == c.name && a.timeStamp - c.lastEvent.timeStamp < b.options.doubletap_interval && a.distance < b.options.doubletap_distance && (b.trigger("doubletap", a), e = !0), (!e || b.options.tap_always) && (d.detection.current.name = "tap", b.trigger(d.detection.current.name, a))
            }
        }}, d.gestures.Swipe = {name: "swipe", index: 40, defaults: {swipe_max_touches: 1, swipe_velocity: .7}, handler: function(a, b) {
            if (a.eventType == d.EVENT_END) {
                if (b.options.swipe_max_touches > 0 && a.touches.length > b.options.swipe_max_touches)
                    return;
                (a.velocityX > b.options.swipe_velocity || a.velocityY > b.options.swipe_velocity) && (b.trigger(this.name, a), b.trigger(this.name + a.direction, a))
            }
        }}, d.gestures.Drag = {name: "drag", index: 50, defaults: {drag_min_distance: 10, drag_max_touches: 1, drag_block_horizontal: !1, drag_block_vertical: !1, drag_lock_to_axis: !1, drag_lock_min_distance: 25}, triggered: !1, handler: function(a, b) {
            if (d.detection.current.name != this.name && this.triggered)
                return b.trigger(this.name + "end", a), this.triggered = !1, void 0;
            if (!(b.options.drag_max_touches > 0 && a.touches.length > b.options.drag_max_touches))
                switch (a.eventType) {
                    case d.EVENT_START:
                        this.triggered = !1;
                        break;
                    case d.EVENT_MOVE:
                        if (a.distance < b.options.drag_min_distance && d.detection.current.name != this.name)
                            return;
                        d.detection.current.name = this.name, (d.detection.current.lastEvent.drag_locked_to_axis || b.options.drag_lock_to_axis && b.options.drag_lock_min_distance <= a.distance) && (a.drag_locked_to_axis = !0);
                        var c = d.detection.current.lastEvent.direction;
                        a.drag_locked_to_axis && c !== a.direction && (a.direction = d.utils.isVertical(c) ? a.deltaY < 0 ? d.DIRECTION_UP : d.DIRECTION_DOWN : a.deltaX < 0 ? d.DIRECTION_LEFT : d.DIRECTION_RIGHT), this.triggered || (b.trigger(this.name + "start", a), this.triggered = !0), b.trigger(this.name, a), b.trigger(this.name + a.direction, a), (b.options.drag_block_vertical && d.utils.isVertical(a.direction) || b.options.drag_block_horizontal && !d.utils.isVertical(a.direction)) && a.preventDefault();
                        break;
                    case d.EVENT_END:
                        this.triggered && b.trigger(this.name + "end", a), this.triggered = !1
                    }
        }}, d.gestures.Transform = {name: "transform", index: 45, defaults: {transform_min_scale: .01, transform_min_rotation: 1, transform_always_block: !1}, triggered: !1, handler: function(a, b) {
            if (d.detection.current.name != this.name && this.triggered)
                return b.trigger(this.name + "end", a), this.triggered = !1, void 0;
            if (!(a.touches.length < 2))
                switch (b.options.transform_always_block && a.preventDefault(), a.eventType) {
                    case d.EVENT_START:
                        this.triggered = !1;
                        break;
                    case d.EVENT_MOVE:
                        var c = Math.abs(1 - a.scale), e = Math.abs(a.rotation);
                        if (c < b.options.transform_min_scale && e < b.options.transform_min_rotation)
                            return;
                        d.detection.current.name = this.name, this.triggered || (b.trigger(this.name + "start", a), this.triggered = !0), b.trigger(this.name, a), e > b.options.transform_min_rotation && b.trigger("rotate", a), c > b.options.transform_min_scale && (b.trigger("pinch", a), b.trigger("pinch" + (a.scale < 1 ? "in" : "out"), a));
                        break;
                    case d.EVENT_END:
                        this.triggered && b.trigger(this.name + "end", a), this.triggered = !1
                    }
        }}, d.gestures.Touch = {name: "touch", index: -1 / 0, defaults: {prevent_default: !1, prevent_mouseevents: !1}, handler: function(a, b) {
            return b.options.prevent_mouseevents && a.pointerType == d.POINTER_MOUSE ? (a.stopDetect(), void 0) : (b.options.prevent_default && a.preventDefault(), a.eventType == d.EVENT_START && b.trigger(this.name, a), void 0)
        }}, d.gestures.Release = {name: "release", index: 1 / 0, handler: function(a, b) {
            a.eventType == d.EVENT_END && b.trigger(this.name, a)
        }}, "object" == typeof module && "object" == typeof module.exports ? module.exports = d : (a.Hammer = d, "function" == typeof a.define && a.define.amd && a.define("hammer", [], function() {
        return d
    }))
}(this), function(a, b) {
    "use strict";
    a !== b && (Hammer.event.bindDom = function(c, d, e) {
        a(c).on(d, function(a) {
            var c = a.originalEvent || a;
            c.pageX === b && (c.pageX = a.pageX, c.pageY = a.pageY), c.target || (c.target = a.target), c.which === b && (c.which = c.button), c.preventDefault || (c.preventDefault = a.preventDefault), c.stopPropagation || (c.stopPropagation = a.stopPropagation), e.call(this, c)
        })
    }, Hammer.Instance.prototype.on = function(b, c) {
        return a(this.element).on(b, c)
    }, Hammer.Instance.prototype.off = function(b, c) {
        return a(this.element).off(b, c)
    }, Hammer.Instance.prototype.trigger = function(b, c) {
        var d = a(this.element);
        return d.has(c.target).length && (d = a(c.target)), d.trigger({type: b, gesture: c})
    }, a.fn.hammer = function(b) {
        return this.each(function() {
            var c = a(this), d = c.data("hammer");
            d ? d && b && Hammer.utils.extend(d.options, b) : c.data("hammer", new Hammer(this, b || {}))
        })
    })
}(window.jQuery || window.Zepto), function(a) {
    a.flexslider = function(b, c) {
        var d = a(b);
        d.vars = a.extend({}, a.flexslider.defaults, c);
        var e, f = d.vars.namespace, g = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, h = ("ontouchstart"in window || g || window.DocumentTouch && document instanceof DocumentTouch) && d.vars.touch, i = "click touchend MSPointerUp", j = "", k = "vertical" === d.vars.direction, l = d.vars.reverse, m = d.vars.itemWidth > 0, n = "fade" === d.vars.animation, o = "" !== d.vars.asNavFor, p = {}, q = !0;
        a.data(b, "flexslider", d), p = {init: function() {
                d.animating = !1, d.currentSlide = parseInt(d.vars.startAt ? d.vars.startAt : 0, 10), isNaN(d.currentSlide) && (d.currentSlide = 0), d.animatingTo = d.currentSlide, d.atEnd = 0 === d.currentSlide || d.currentSlide === d.last, d.containerSelector = d.vars.selector.substr(0, d.vars.selector.search(" ")), d.slides = a(d.vars.selector, d), d.container = a(d.containerSelector, d), d.count = d.slides.length, d.syncExists = a(d.vars.sync).length > 0, "slide" === d.vars.animation && (d.vars.animation = "swing"), d.prop = k ? "top" : "marginLeft", d.args = {}, d.manualPause = !1, d.stopped = !1, d.started = !1, d.startTimeout = null, d.transitions = !d.vars.video && !n && d.vars.useCSS && function() {
                    var a = document.createElement("div"), b = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var c in b)
                        if (void 0 !== a.style[b[c]])
                            return d.pfx = b[c].replace("Perspective", "").toLowerCase(), d.prop = "-" + d.pfx + "-transform", !0;
                    return!1
                }(), "" !== d.vars.controlsContainer && (d.controlsContainer = a(d.vars.controlsContainer).length > 0 && a(d.vars.controlsContainer)), "" !== d.vars.manualControls && (d.manualControls = a(d.vars.manualControls).length > 0 && a(d.vars.manualControls)), d.vars.randomize && (d.slides.sort(function() {
                    return Math.round(Math.random()) - .5
                }), d.container.empty().append(d.slides)), d.doMath(), d.setup("init"), d.vars.controlNav && p.controlNav.setup(), d.vars.directionNav && p.directionNav.setup(), d.vars.keyboard && (1 === a(d.containerSelector).length || d.vars.multipleKeyboard) && a(document).bind("keyup", function(a) {
                    var b = a.keyCode;
                    if (!d.animating && (39 === b || 37 === b)) {
                        var c = 39 === b ? d.getTarget("next") : 37 === b ? d.getTarget("prev") : !1;
                        d.flexAnimate(c, d.vars.pauseOnAction)
                    }
                }), d.vars.mousewheel && d.bind("mousewheel", function(a, b) {
                    a.preventDefault();
                    var c = 0 > b ? d.getTarget("next") : d.getTarget("prev");
                    d.flexAnimate(c, d.vars.pauseOnAction)
                }), d.vars.pausePlay && p.pausePlay.setup(), d.vars.slideshow && d.vars.pauseInvisible && p.pauseInvisible.init(), d.vars.slideshow && (d.vars.pauseOnHover && d.hover(function() {
                    d.manualPlay || d.manualPause || d.pause()
                }, function() {
                    d.manualPause || d.manualPlay || d.stopped || d.play()
                }), d.vars.pauseInvisible && p.pauseInvisible.isHidden() || (d.vars.initDelay > 0 ? d.startTimeout = setTimeout(d.play, d.vars.initDelay) : d.play())), o && p.asNav.setup(), h && d.vars.touch && p.touch(), (!n || n && d.vars.smoothHeight) && a(window).bind("resize orientationchange focus", p.resize), d.find("img").attr("draggable", "false"), setTimeout(function() {
                    d.vars.start(d)
                }, 200)
            }, asNav: {setup: function() {
                    d.asNav = !0, d.animatingTo = Math.floor(d.currentSlide / d.move), d.currentItem = d.currentSlide, d.slides.removeClass(f + "active-slide").eq(d.currentItem).addClass(f + "active-slide"), g ? (b._slider = d, d.slides.each(function() {
                        var b = this;
                        b._gesture = new MSGesture, b._gesture.target = b, b.addEventListener("MSPointerDown", function(a) {
                            a.preventDefault(), a.currentTarget._gesture && a.currentTarget._gesture.addPointer(a.pointerId)
                        }, !1), b.addEventListener("MSGestureTap", function(b) {
                            b.preventDefault();
                            var c = a(this), e = c.index();
                            a(d.vars.asNavFor).data("flexslider").animating || c.hasClass("active") || (d.direction = d.currentItem < e ? "next" : "prev", d.flexAnimate(e, d.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : d.slides.on(i, function(b) {
                        b.preventDefault();
                        var c = a(this), e = c.index(), g = c.offset().left - a(d).scrollLeft();
                        0 >= g && c.hasClass(f + "active-slide") ? d.flexAnimate(d.getTarget("prev"), !0) : a(d.vars.asNavFor).data("flexslider").animating || c.hasClass(f + "active-slide") || (d.direction = d.currentItem < e ? "next" : "prev", d.flexAnimate(e, d.vars.pauseOnAction, !1, !0, !0))
                    })
                }}, controlNav: {setup: function() {
                    d.manualControls ? p.controlNav.setupManual() : p.controlNav.setupPaging()
                }, setupPaging: function() {
                    var b, c, e = "thumbnails" === d.vars.controlNav ? "control-thumbs" : "control-paging", g = 1;
                    if (d.controlNavScaffold = a('<ol class="' + f + "control-nav " + f + e + '"></ol>'), d.pagingCount > 1)
                        for (var h = 0; h < d.pagingCount; h++) {
                            if (c = d.slides.eq(h), b = "thumbnails" === d.vars.controlNav ? '<img src="' + c.attr("data-thumb") + '"/>' : "<a>" + g + "</a>", "thumbnails" === d.vars.controlNav && !0 === d.vars.thumbCaptions) {
                                var k = c.attr("data-thumbcaption");
                                "" != k && void 0 != k && (b += '<span class="' + f + 'caption">' + k + "</span>")
                            }
                            d.controlNavScaffold.append("<li>" + b + "</li>"), g++
                        }
                    d.controlsContainer ? a(d.controlsContainer).append(d.controlNavScaffold) : d.append(d.controlNavScaffold), p.controlNav.set(), p.controlNav.active(), d.controlNavScaffold.delegate("a, img", i, function(b) {
                        if (b.preventDefault(), "" === j || j === b.type) {
                            var c = a(this), e = d.controlNav.index(c);
                            c.hasClass(f + "active") || (d.direction = e > d.currentSlide ? "next" : "prev", d.flexAnimate(e, d.vars.pauseOnAction))
                        }
                        "" === j && (j = b.type), p.setToClearWatchedEvent()
                    })
                }, setupManual: function() {
                    d.controlNav = d.manualControls, p.controlNav.active(), d.controlNav.bind(i, function(b) {
                        if (b.preventDefault(), "" === j || j === b.type) {
                            var c = a(this), e = d.controlNav.index(c);
                            c.hasClass(f + "active") || (d.direction = e > d.currentSlide ? "next" : "prev", d.flexAnimate(e, d.vars.pauseOnAction))
                        }
                        "" === j && (j = b.type), p.setToClearWatchedEvent()
                    })
                }, set: function() {
                    var b = "thumbnails" === d.vars.controlNav ? "img" : "a";
                    d.controlNav = a("." + f + "control-nav li " + b, d.controlsContainer ? d.controlsContainer : d)
                }, active: function() {
                    d.controlNav.removeClass(f + "active").eq(d.animatingTo).addClass(f + "active")
                }, update: function(b, c) {
                    d.pagingCount > 1 && "add" === b ? d.controlNavScaffold.append(a("<li><a>" + d.count + "</a></li>")) : 1 === d.pagingCount ? d.controlNavScaffold.find("li").remove() : d.controlNav.eq(c).closest("li").remove(), p.controlNav.set(), d.pagingCount > 1 && d.pagingCount !== d.controlNav.length ? d.update(c, b) : p.controlNav.active()
                }}, directionNav: {setup: function() {
                    var b = a('<ul class="' + f + 'direction-nav"><li><a class="' + f + 'prev" href="#">' + d.vars.prevText + '</a></li><li><a class="' + f + 'next" href="#">' + d.vars.nextText + "</a></li></ul>");
                    d.controlsContainer ? (a(d.controlsContainer).append(b), d.directionNav = a("." + f + "direction-nav li a", d.controlsContainer)) : (d.append(b), d.directionNav = a("." + f + "direction-nav li a", d)), p.directionNav.update(), d.directionNav.bind(i, function(b) {
                        b.preventDefault();
                        var c;
                        ("" === j || j === b.type) && (c = a(this).hasClass(f + "next") ? d.getTarget("next") : d.getTarget("prev"), d.flexAnimate(c, d.vars.pauseOnAction)), "" === j && (j = b.type), p.setToClearWatchedEvent()
                    })
                }, update: function() {
                    var a = f + "disabled";
                    1 === d.pagingCount ? d.directionNav.addClass(a).attr("tabindex", "-1") : d.vars.animationLoop ? d.directionNav.removeClass(a).removeAttr("tabindex") : 0 === d.animatingTo ? d.directionNav.removeClass(a).filter("." + f + "prev").addClass(a).attr("tabindex", "-1") : d.animatingTo === d.last ? d.directionNav.removeClass(a).filter("." + f + "next").addClass(a).attr("tabindex", "-1") : d.directionNav.removeClass(a).removeAttr("tabindex")
                }}, pausePlay: {setup: function() {
                    var b = a('<div class="' + f + 'pauseplay"><a></a></div>');
                    d.controlsContainer ? (d.controlsContainer.append(b), d.pausePlay = a("." + f + "pauseplay a", d.controlsContainer)) : (d.append(b), d.pausePlay = a("." + f + "pauseplay a", d)), p.pausePlay.update(d.vars.slideshow ? f + "pause" : f + "play"), d.pausePlay.bind(i, function(b) {
                        b.preventDefault(), ("" === j || j === b.type) && (a(this).hasClass(f + "pause") ? (d.manualPause = !0, d.manualPlay = !1, d.pause()) : (d.manualPause = !1, d.manualPlay = !0, d.play())), "" === j && (j = b.type), p.setToClearWatchedEvent()
                    })
                }, update: function(a) {
                    "play" === a ? d.pausePlay.removeClass(f + "pause").addClass(f + "play").html(d.vars.playText) : d.pausePlay.removeClass(f + "play").addClass(f + "pause").html(d.vars.pauseText)
                }}, touch: function() {
                function a(a) {
                    d.animating ? a.preventDefault() : (window.navigator.msPointerEnabled || 1 === a.touches.length) && (d.pause(), q = k ? d.h : d.w, s = Number(new Date), u = a.touches[0].pageX, v = a.touches[0].pageY, p = m && l && d.animatingTo === d.last ? 0 : m && l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : m && d.currentSlide === d.last ? d.limit : m ? (d.itemW + d.vars.itemMargin) * d.move * d.currentSlide : l ? (d.last - d.currentSlide + d.cloneOffset) * q : (d.currentSlide + d.cloneOffset) * q, j = k ? v : u, o = k ? u : v, b.addEventListener("touchmove", c, !1), b.addEventListener("touchend", e, !1))
                }
                function c(a) {
                    u = a.touches[0].pageX, v = a.touches[0].pageY, r = k ? j - v : j - u, t = k ? Math.abs(r) < Math.abs(u - o) : Math.abs(r) < Math.abs(v - o);
                    var b = 500;
                    (!t || Number(new Date) - s > b) && (a.preventDefault(), !n && d.transitions && (d.vars.animationLoop || (r /= 0 === d.currentSlide && 0 > r || d.currentSlide === d.last && r > 0 ? Math.abs(r) / q + 2 : 1), d.setProps(p + r, "setTouch")))
                }
                function e() {
                    if (b.removeEventListener("touchmove", c, !1), d.animatingTo === d.currentSlide && !t && null !== r) {
                        var a = l ? -r : r, f = a > 0 ? d.getTarget("next") : d.getTarget("prev");
                        d.canAdvance(f) && (Number(new Date) - s < 550 && Math.abs(a) > 50 || Math.abs(a) > q / 2) ? d.flexAnimate(f, d.vars.pauseOnAction) : n || d.flexAnimate(d.currentSlide, d.vars.pauseOnAction, !0)
                    }
                    b.removeEventListener("touchend", e, !1), j = null, o = null, r = null, p = null
                }
                function f(a) {
                    a.stopPropagation(), d.animating ? a.preventDefault() : (d.pause(), b._gesture.addPointer(a.pointerId), w = 0, q = k ? d.h : d.w, s = Number(new Date), p = m && l && d.animatingTo === d.last ? 0 : m && l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : m && d.currentSlide === d.last ? d.limit : m ? (d.itemW + d.vars.itemMargin) * d.move * d.currentSlide : l ? (d.last - d.currentSlide + d.cloneOffset) * q : (d.currentSlide + d.cloneOffset) * q)
                }
                function h(a) {
                    a.stopPropagation();
                    var c = a.target._slider;
                    if (c) {
                        var d = -a.translationX, e = -a.translationY;
                        return w += k ? e : d, r = w, t = k ? Math.abs(w) < Math.abs(-d) : Math.abs(w) < Math.abs(-e), a.detail === a.MSGESTURE_FLAG_INERTIA ? (setImmediate(function() {
                            b._gesture.stop()
                        }), void 0) : ((!t || Number(new Date) - s > 500) && (a.preventDefault(), !n && c.transitions && (c.vars.animationLoop || (r = w / (0 === c.currentSlide && 0 > w || c.currentSlide === c.last && w > 0 ? Math.abs(w) / q + 2 : 1)), c.setProps(p + r, "setTouch"))), void 0)
                    }
                }
                function i(a) {
                    a.stopPropagation();
                    var b = a.target._slider;
                    if (b) {
                        if (b.animatingTo === b.currentSlide && !t && null !== r) {
                            var c = l ? -r : r, d = c > 0 ? b.getTarget("next") : b.getTarget("prev");
                            b.canAdvance(d) && (Number(new Date) - s < 550 && Math.abs(c) > 50 || Math.abs(c) > q / 2) ? b.flexAnimate(d, b.vars.pauseOnAction) : n || b.flexAnimate(b.currentSlide, b.vars.pauseOnAction, !0)
                        }
                        j = null, o = null, r = null, p = null, w = 0
                    }
                }
                var j, o, p, q, r, s, t = !1, u = 0, v = 0, w = 0;
                g ? (b.style.msTouchAction = "none", b._gesture = new MSGesture, b._gesture.target = b, b.addEventListener("MSPointerDown", f, !1), b._slider = d, b.addEventListener("MSGestureChange", h, !1), b.addEventListener("MSGestureEnd", i, !1)) : b.addEventListener("touchstart", a, !1)
            }, resize: function() {
                !d.animating && d.is(":visible") && (m || d.doMath(), n ? p.smoothHeight() : m ? (d.slides.width(d.computedW), d.update(d.pagingCount), d.setProps()) : k ? (d.viewport.height(d.h), d.setProps(d.h, "setTotal")) : (d.vars.smoothHeight && p.smoothHeight(), d.newSlides.width(d.computedW), d.setProps(d.computedW, "setTotal")))
            }, smoothHeight: function(a) {
                if (!k || n) {
                    var b = n ? d : d.viewport;
                    a ? b.animate({height: d.slides.eq(d.animatingTo).height()}, a) : b.height(d.slides.eq(d.animatingTo).height())
                }
            }, sync: function(b) {
                var c = a(d.vars.sync).data("flexslider"), e = d.animatingTo;
                switch (b) {
                    case"animate":
                        c.flexAnimate(e, d.vars.pauseOnAction, !1, !0);
                        break;
                    case"play":
                        c.playing || c.asNav || c.play();
                        break;
                    case"pause":
                        c.pause()
                    }
            }, uniqueID: function(b) {
                return b.find("[id]").each(function() {
                    var b = a(this);
                    b.attr("id", b.attr("id") + "_clone")
                }), b
            }, pauseInvisible: {visProp: null, init: function() {
                    var a = ["webkit", "moz", "ms", "o"];
                    if ("hidden"in document)
                        return"hidden";
                    for (var b = 0; b < a.length; b++)
                        a[b] + "Hidden"in document && (p.pauseInvisible.visProp = a[b] + "Hidden");
                    if (p.pauseInvisible.visProp) {
                        var c = p.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(c, function() {
                            p.pauseInvisible.isHidden() ? d.startTimeout ? clearTimeout(d.startTimeout) : d.pause() : d.started ? d.play() : d.vars.initDelay > 0 ? setTimeout(d.play, d.vars.initDelay) : d.play()
                        })
                    }
                }, isHidden: function() {
                    return document[p.pauseInvisible.visProp] || !1
                }}, setToClearWatchedEvent: function() {
                clearTimeout(e), e = setTimeout(function() {
                    j = ""
                }, 3e3)
            }}, d.flexAnimate = function(b, c, e, g, i) {
            if (d.vars.animationLoop || b === d.currentSlide || (d.direction = b > d.currentSlide ? "next" : "prev"), o && 1 === d.pagingCount && (d.direction = d.currentItem < b ? "next" : "prev"), !d.animating && (d.canAdvance(b, i) || e) && d.is(":visible")) {
                if (o && g) {
                    var j = a(d.vars.asNavFor).data("flexslider");
                    if (d.atEnd = 0 === b || b === d.count - 1, j.flexAnimate(b, !0, !1, !0, i), d.direction = d.currentItem < b ? "next" : "prev", j.direction = d.direction, Math.ceil((b + 1) / d.visible) - 1 === d.currentSlide || 0 === b)
                        return d.currentItem = b, d.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), !1;
                    d.currentItem = b, d.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), b = Math.floor(b / d.visible)
                }
                if (d.animating = !0, d.animatingTo = b, c && d.pause(), d.vars.before(d), d.syncExists && !i && p.sync("animate"), d.vars.controlNav && p.controlNav.active(), m || d.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), d.atEnd = 0 === b || b === d.last, d.vars.directionNav && p.directionNav.update(), b === d.last && (d.vars.end(d), d.vars.animationLoop || d.pause()), n)
                    h ? (d.slides.eq(d.currentSlide).css({opacity: 0, zIndex: 1}), d.slides.eq(b).css({opacity: 1, zIndex: 2}), d.wrapup(t)) : (d.slides.eq(d.currentSlide).css({zIndex: 1}).animate({opacity: 0}, d.vars.animationSpeed, d.vars.easing), d.slides.eq(b).css({zIndex: 2}).animate({opacity: 1}, d.vars.animationSpeed, d.vars.easing, d.wrapup));
                else {
                    var q, r, s, t = k ? d.slides.filter(":first").height() : d.computedW;
                    m ? (q = d.vars.itemMargin, s = (d.itemW + q) * d.move * d.animatingTo, r = s > d.limit && 1 !== d.visible ? d.limit : s) : r = 0 === d.currentSlide && b === d.count - 1 && d.vars.animationLoop && "next" !== d.direction ? l ? (d.count + d.cloneOffset) * t : 0 : d.currentSlide === d.last && 0 === b && d.vars.animationLoop && "prev" !== d.direction ? l ? 0 : (d.count + 1) * t : l ? (d.count - 1 - b + d.cloneOffset) * t : (b + d.cloneOffset) * t, d.setProps(r, "", d.vars.animationSpeed), d.transitions ? (d.vars.animationLoop && d.atEnd || (d.animating = !1, d.currentSlide = d.animatingTo), d.container.unbind("webkitTransitionEnd transitionend"), d.container.bind("webkitTransitionEnd transitionend", function() {
                        d.wrapup(t)
                    })) : d.container.animate(d.args, d.vars.animationSpeed, d.vars.easing, function() {
                        d.wrapup(t)
                    })
                }
                d.vars.smoothHeight && p.smoothHeight(d.vars.animationSpeed)
            }
        }, d.wrapup = function(a) {
            n || m || (0 === d.currentSlide && d.animatingTo === d.last && d.vars.animationLoop ? d.setProps(a, "jumpEnd") : d.currentSlide === d.last && 0 === d.animatingTo && d.vars.animationLoop && d.setProps(a, "jumpStart")), d.animating = !1, d.currentSlide = d.animatingTo, d.vars.after(d)
        }, d.animateSlides = function() {
            !d.animating && q && d.flexAnimate(d.getTarget("next"))
        }, d.pause = function() {
            clearInterval(d.animatedSlides), d.animatedSlides = null, d.playing = !1, d.vars.pausePlay && p.pausePlay.update("play"), d.syncExists && p.sync("pause")
        }, d.play = function() {
            d.playing && clearInterval(d.animatedSlides), d.animatedSlides = d.animatedSlides || setInterval(d.animateSlides, d.vars.slideshowSpeed), d.started = d.playing = !0, d.vars.pausePlay && p.pausePlay.update("pause"), d.syncExists && p.sync("play")
        }, d.stop = function() {
            d.pause(), d.stopped = !0
        }, d.canAdvance = function(a, b) {
            var c = o ? d.pagingCount - 1 : d.last;
            return b ? !0 : o && d.currentItem === d.count - 1 && 0 === a && "prev" === d.direction ? !0 : o && 0 === d.currentItem && a === d.pagingCount - 1 && "next" !== d.direction ? !1 : a !== d.currentSlide || o ? d.vars.animationLoop ? !0 : d.atEnd && 0 === d.currentSlide && a === c && "next" !== d.direction ? !1 : d.atEnd && d.currentSlide === c && 0 === a && "next" === d.direction ? !1 : !0 : !1
        }, d.getTarget = function(a) {
            return d.direction = a, "next" === a ? d.currentSlide === d.last ? 0 : d.currentSlide + 1 : 0 === d.currentSlide ? d.last : d.currentSlide - 1
        }, d.setProps = function(a, b, c) {
            var e = function() {
                var c = a ? a : (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo, e = function() {
                    if (m)
                        return"setTouch" === b ? a : l && d.animatingTo === d.last ? 0 : l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : d.animatingTo === d.last ? d.limit : c;
                    switch (b) {
                        case"setTotal":
                            return l ? (d.count - 1 - d.currentSlide + d.cloneOffset) * a : (d.currentSlide + d.cloneOffset) * a;
                        case"setTouch":
                            return l ? a : a;
                        case"jumpEnd":
                            return l ? a : d.count * a;
                        case"jumpStart":
                            return l ? d.count * a : a;
                        default:
                            return a
                        }
                }();
                return-1 * e + "px"
            }();
            d.transitions && (e = k ? "translate3d(0," + e + ",0)" : "translate3d(" + e + ",0,0)", c = void 0 !== c ? c / 1e3 + "s" : "0s", d.container.css("-" + d.pfx + "-transition-duration", c), d.container.css("transition-duration", c)), d.args[d.prop] = e, (d.transitions || void 0 === c) && d.container.css(d.args), d.container.css("transform", e)
        }, d.setup = function(b) {
            if (n)
                d.slides.css({width: "100%", "float": "left", marginRight: "-100%", position: "relative"}), "init" === b && (h ? d.slides.css({opacity: 0, display: "block", webkitTransition: "opacity " + d.vars.animationSpeed / 1e3 + "s ease", zIndex: 1}).eq(d.currentSlide).css({opacity: 1, zIndex: 2}) : d.slides.css({opacity: 0, display: "block", zIndex: 1}).eq(d.currentSlide).css({zIndex: 2}).animate({opacity: 1}, d.vars.animationSpeed, d.vars.easing)), d.vars.smoothHeight && p.smoothHeight();
            else {
                var c, e;
                "init" === b && (d.viewport = a('<div class="' + f + 'viewport"></div>').css({overflow: "hidden", position: "relative"}).appendTo(d).append(d.container), d.cloneCount = 0, d.cloneOffset = 0, l && (e = a.makeArray(d.slides).reverse(), d.slides = a(e), d.container.empty().append(d.slides))), d.vars.animationLoop && !m && (d.cloneCount = 2, d.cloneOffset = 1, "init" !== b && d.container.find(".clone").remove(), d.container.append(d.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).prepend(d.slides.last().clone().addClass("clone").attr("aria-hidden", "true")), p.uniqueID(d.slides.first().clone().addClass("clone")).appendTo(d.container), p.uniqueID(d.slides.last().clone().addClass("clone")).prependTo(d.container)), d.newSlides = a(d.vars.selector, d), c = l ? d.count - 1 - d.currentSlide + d.cloneOffset : d.currentSlide + d.cloneOffset, k && !m ? (d.container.height(200 * (d.count + d.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                    d.newSlides.css({display: "block"}), d.doMath(), d.viewport.height(d.h), d.setProps(c * d.h, "init")
                }, "init" === b ? 100 : 0)) : (d.container.width(200 * (d.count + d.cloneCount) + "%"), d.setProps(c * d.computedW, "init"), setTimeout(function() {
                    d.doMath(), d.newSlides.css({width: d.computedW, "float": "left", display: "block"}), d.vars.smoothHeight && p.smoothHeight()
                }, "init" === b ? 100 : 0))
            }
            m || d.slides.removeClass(f + "active-slide").eq(d.currentSlide).addClass(f + "active-slide"), d.vars.init(d)
        }, d.doMath = function() {
            var a = d.slides.first(), b = d.vars.itemMargin, c = d.vars.minItems, e = d.vars.maxItems;
            d.w = void 0 === d.viewport ? d.width() : d.viewport.width(), d.h = a.height(), d.boxPadding = a.outerWidth() - a.width(), m ? (d.itemT = d.vars.itemWidth + b, d.minW = c ? c * d.itemT : d.w, d.maxW = e ? e * d.itemT - b : d.w, d.itemW = d.minW > d.w ? (d.w - b * (c - 1)) / c : d.maxW < d.w ? (d.w - b * (e - 1)) / e : d.vars.itemWidth > d.w ? d.w : d.vars.itemWidth, d.visible = Math.floor(d.w / d.itemW), d.move = d.vars.move > 0 && d.vars.move < d.visible ? d.vars.move : d.visible, d.pagingCount = Math.ceil((d.count - d.visible) / d.move + 1), d.last = d.pagingCount - 1, d.limit = 1 === d.pagingCount ? 0 : d.vars.itemWidth > d.w ? d.itemW * (d.count - 1) + b * (d.count - 1) : (d.itemW + b) * d.count - d.w - b) : (d.itemW = d.w, d.pagingCount = d.count, d.last = d.count - 1), d.computedW = d.itemW - d.boxPadding
        }, d.update = function(a, b) {
            d.doMath(), m || (a < d.currentSlide ? d.currentSlide += 1 : a <= d.currentSlide && 0 !== a && (d.currentSlide -= 1), d.animatingTo = d.currentSlide), d.vars.controlNav && !d.manualControls && ("add" === b && !m || d.pagingCount > d.controlNav.length ? p.controlNav.update("add") : ("remove" === b && !m || d.pagingCount < d.controlNav.length) && (m && d.currentSlide > d.last && (d.currentSlide -= 1, d.animatingTo -= 1), p.controlNav.update("remove", d.last))), d.vars.directionNav && p.directionNav.update()
        }, d.addSlide = function(b, c) {
            var e = a(b);
            d.count += 1, d.last = d.count - 1, k && l ? void 0 !== c ? d.slides.eq(d.count - c).after(e) : d.container.prepend(e) : void 0 !== c ? d.slides.eq(c).before(e) : d.container.append(e), d.update(c, "add"), d.slides = a(d.vars.selector + ":not(.clone)", d), d.setup(), d.vars.added(d)
        }, d.removeSlide = function(b) {
            var c = isNaN(b) ? d.slides.index(a(b)) : b;
            d.count -= 1, d.last = d.count - 1, isNaN(b) ? a(b, d.slides).remove() : k && l ? d.slides.eq(d.last).remove() : d.slides.eq(b).remove(), d.doMath(), d.update(c, "remove"), d.slides = a(d.vars.selector + ":not(.clone)", d), d.setup(), d.vars.removed(d)
        }, p.init()
    }, a(window).blur(function() {
        focused = !1
    }).focus(function() {
        focused = !0
    }), a.flexslider.defaults = {namespace: "flex-", selector: ".slides > li", animation: "fade", easing: "swing", direction: "horizontal", reverse: !1, animationLoop: !0, smoothHeight: !1, startAt: 0, slideshow: !0, slideshowSpeed: 7e3, animationSpeed: 600, initDelay: 0, randomize: !1, thumbCaptions: !1, pauseOnAction: !0, pauseOnHover: !1, pauseInvisible: !0, useCSS: !0, touch: !0, video: !1, controlNav: !0, directionNav: !0, prevText: "Previous", nextText: "Next", keyboard: !0, multipleKeyboard: !1, mousewheel: !1, pausePlay: !1, pauseText: "Pause", playText: "Play", controlsContainer: "", manualControls: "", sync: "", asNavFor: "", itemWidth: 0, itemMargin: 0, minItems: 1, maxItems: 0, move: 0, allowOneSlide: !0, start: function() {
        }, before: function() {
        }, after: function() {
        }, end: function() {
        }, added: function() {
        }, removed: function() {
        }, init: function() {
        }}, a.fn.flexslider = function(b) {
        if (void 0 === b && (b = {}), "object" == typeof b)
            return this.each(function() {
                var c = a(this), d = b.selector ? b.selector : ".slides > li", e = c.find(d);
                1 === e.length && b.allowOneSlide === !0 || 0 === e.length ? (e.fadeIn(400), b.start && b.start(c)) : void 0 === c.data("flexslider") && new a.flexslider(this, b)
            });
        var c = a(this).data("flexslider");
        switch (b) {
            case"play":
                c.play();
                break;
            case"pause":
                c.pause();
                break;
            case"stop":
                c.stop();
                break;
            case"next":
                c.flexAnimate(c.getTarget("next"), !0);
                break;
            case"prev":
            case"previous":
                c.flexAnimate(c.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof b && c.flexAnimate(b, !0)
            }
    }
}(jQuery), function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function(a) {
    "use strict";
    function b(b) {
        var c = b.data;
        b.isDefaultPrevented() || (b.preventDefault(), a(b.target).ajaxSubmit(c))
    }
    function c(b) {
        var c = b.target, d = a(c);
        if (!d.is("[type=submit],[type=image]")) {
            var e = d.closest("[type=submit]");
            if (0 === e.length)
                return;
            c = e[0]
        }
        var f = this;
        if (f.clk = c, "image" == c.type)
            if (void 0 !== b.offsetX)
                f.clk_x = b.offsetX, f.clk_y = b.offsetY;
            else if ("function" == typeof a.fn.offset) {
                var g = d.offset();
                f.clk_x = b.pageX - g.left, f.clk_y = b.pageY - g.top
            } else
                f.clk_x = b.pageX - c.offsetLeft, f.clk_y = b.pageY - c.offsetTop;
        setTimeout(function() {
            f.clk = f.clk_x = f.clk_y = null
        }, 100)
    }
    function d() {
        if (a.fn.ajaxSubmit.debug) {
            var b = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(b) : window.opera && window.opera.postError && window.opera.postError(b)
        }
    }
    var e = {};
    e.fileapi = void 0 !== a("<input type='file'/>").get(0).files, e.formdata = void 0 !== window.FormData;
    var f = !!a.fn.prop;
    a.fn.attr2 = function() {
        if (!f)
            return this.attr.apply(this, arguments);
        var a = this.prop.apply(this, arguments);
        return a && a.jquery || "string" == typeof a ? a : this.attr.apply(this, arguments)
    }, a.fn.ajaxSubmit = function(b) {
        function c(c) {
            var d, e, f = a.param(c, b.traditional).split("&"), g = f.length, h = [];
            for (d = 0; g > d; d++)
                f[d] = f[d].replace(/\+/g, " "), e = f[d].split("="), h.push([decodeURIComponent(e[0]), decodeURIComponent(e[1])]);
            return h
        }
        function g(d) {
            for (var e = new FormData, f = 0; f < d.length; f++)
                e.append(d[f].name, d[f].value);
            if (b.extraData) {
                var g = c(b.extraData);
                for (f = 0; f < g.length; f++)
                    g[f] && e.append(g[f][0], g[f][1])
            }
            b.data = null;
            var h = a.extend(!0, {}, a.ajaxSettings, b, {contentType: !1, processData: !1, cache: !1, type: i || "POST"});
            b.uploadProgress && (h.xhr = function() {
                var c = a.ajaxSettings.xhr();
                return c.upload && c.upload.addEventListener("progress", function(a) {
                    var c = 0, d = a.loaded || a.position, e = a.total;
                    a.lengthComputable && (c = Math.ceil(d / e * 100)), b.uploadProgress(a, d, e, c)
                }, !1), c
            }), h.data = null;
            var j = h.beforeSend;
            return h.beforeSend = function(a, c) {
                c.data = b.formData ? b.formData : e, j && j.call(this, a, c)
            }, a.ajax(h)
        }
        function h(c) {
            function e(a) {
                var b = null;
                try {
                    a.contentWindow && (b = a.contentWindow.document)
                } catch (c) {
                    d("cannot get iframe.contentWindow document: " + c)
                }
                if (b)
                    return b;
                try {
                    b = a.contentDocument ? a.contentDocument : a.document
                } catch (c) {
                    d("cannot get iframe.contentDocument: " + c), b = a.document
                }
                return b
            }
            function g() {
                function b() {
                    try {
                        var a = e(r).readyState;
                        d("state = " + a), a && "uninitialized" == a.toLowerCase() && setTimeout(b, 50)
                    } catch (c) {
                        d("Server abort: ", c, " (", c.name, ")"), h(A), w && clearTimeout(w), w = void 0
                    }
                }
                var c = l.attr2("target"), f = l.attr2("action");
                x.setAttribute("target", o), (!i || /post/i.test(i)) && x.setAttribute("method", "POST"), f != m.url && x.setAttribute("action", m.url), m.skipEncodingOverride || i && !/post/i.test(i) || l.attr({encoding: "multipart/form-data", enctype: "multipart/form-data"}), m.timeout && (w = setTimeout(function() {
                    v = !0, h(z)
                }, m.timeout));
                var g = [];
                try {
                    if (m.extraData)
                        for (var j in m.extraData)
                            m.extraData.hasOwnProperty(j) && (a.isPlainObject(m.extraData[j]) && m.extraData[j].hasOwnProperty("name") && m.extraData[j].hasOwnProperty("value") ? g.push(a('<input type="hidden" name="' + m.extraData[j].name + '">').val(m.extraData[j].value).appendTo(x)[0]) : g.push(a('<input type="hidden" name="' + j + '">').val(m.extraData[j]).appendTo(x)[0]));
                    m.iframeTarget || q.appendTo("body"), r.attachEvent ? r.attachEvent("onload", h) : r.addEventListener("load", h, !1), setTimeout(b, 15);
                    try {
                        x.submit()
                    } catch (k) {
                        var n = document.createElement("form").submit;
                        n.apply(x)
                    }
                } finally {
                    x.setAttribute("action", f), c ? x.setAttribute("target", c) : l.removeAttr("target"), a(g).remove()
                }
            }
            function h(b) {
                if (!s.aborted && !F) {
                    if (E = e(r), E || (d("cannot access response document"), b = A), b === z && s)
                        return s.abort("timeout"), y.reject(s, "timeout"), void 0;
                    if (b == A && s)
                        return s.abort("server abort"), y.reject(s, "error", "server abort"), void 0;
                    if (E && E.location.href != m.iframeSrc || v) {
                        r.detachEvent ? r.detachEvent("onload", h) : r.removeEventListener("load", h, !1);
                        var c, f = "success";
                        try {
                            if (v)
                                throw"timeout";
                            var g = "xml" == m.dataType || E.XMLDocument || a.isXMLDoc(E);
                            if (d("isXml=" + g), !g && window.opera && (null === E.body || !E.body.innerHTML) && --G)
                                return d("requeing onLoad callback, DOM not available"), setTimeout(h, 250), void 0;
                            var i = E.body ? E.body : E.documentElement;
                            s.responseText = i ? i.innerHTML : null, s.responseXML = E.XMLDocument ? E.XMLDocument : E, g && (m.dataType = "xml"), s.getResponseHeader = function(a) {
                                var b = {"content-type": m.dataType};
                                return b[a.toLowerCase()]
                            }, i && (s.status = Number(i.getAttribute("status")) || s.status, s.statusText = i.getAttribute("statusText") || s.statusText);
                            var j = (m.dataType || "").toLowerCase(), k = /(json|script|text)/.test(j);
                            if (k || m.textarea) {
                                var l = E.getElementsByTagName("textarea")[0];
                                if (l)
                                    s.responseText = l.value, s.status = Number(l.getAttribute("status")) || s.status, s.statusText = l.getAttribute("statusText") || s.statusText;
                                else if (k) {
                                    var o = E.getElementsByTagName("pre")[0], p = E.getElementsByTagName("body")[0];
                                    o ? s.responseText = o.textContent ? o.textContent : o.innerText : p && (s.responseText = p.textContent ? p.textContent : p.innerText)
                                }
                            } else
                                "xml" == j && !s.responseXML && s.responseText && (s.responseXML = H(s.responseText));
                            try {
                                D = J(s, j, m)
                            } catch (t) {
                                f = "parsererror", s.error = c = t || f
                            }
                        } catch (t) {
                            d("error caught: ", t), f = "error", s.error = c = t || f
                        }
                        s.aborted && (d("upload aborted"), f = null), s.status && (f = s.status >= 200 && s.status < 300 || 304 === s.status ? "success" : "error"), "success" === f ? (m.success && m.success.call(m.context, D, "success", s), y.resolve(s.responseText, "success", s), n && a.event.trigger("ajaxSuccess", [s, m])) : f && (void 0 === c && (c = s.statusText), m.error && m.error.call(m.context, s, f, c), y.reject(s, "error", c), n && a.event.trigger("ajaxError", [s, m, c])), n && a.event.trigger("ajaxComplete", [s, m]), n && !--a.active && a.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, s, f), F = !0, m.timeout && clearTimeout(w), setTimeout(function() {
                            m.iframeTarget ? q.attr("src", m.iframeSrc) : q.remove(), s.responseXML = null
                        }, 100)
                    }
                }
            }
            var j, k, m, n, o, q, r, s, t, u, v, w, x = l[0], y = a.Deferred();
            if (y.abort = function(a) {
                s.abort(a)
            }, c)
                for (k = 0; k < p.length; k++)
                    j = a(p[k]), f ? j.prop("disabled", !1) : j.removeAttr("disabled");
            if (m = a.extend(!0, {}, a.ajaxSettings, b), m.context = m.context || m, o = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (q = a(m.iframeTarget), u = q.attr2("name"), u ? o = u : q.attr2("name", o)) : (q = a('<iframe name="' + o + '" src="' + m.iframeSrc + '" />'), q.css({position: "absolute", top: "-1000px", left: "-1000px"})), r = q[0], s = {aborted: 0, responseText: null, responseXML: null, status: 0, statusText: "n/a", getAllResponseHeaders: function() {
                }, getResponseHeader: function() {
                }, setRequestHeader: function() {
                }, abort: function(b) {
                    var c = "timeout" === b ? "timeout" : "aborted";
                    d("aborting upload... " + c), this.aborted = 1;
                    try {
                        r.contentWindow.document.execCommand && r.contentWindow.document.execCommand("Stop")
                    } catch (e) {
                    }
                    q.attr("src", m.iframeSrc), s.error = c, m.error && m.error.call(m.context, s, c, b), n && a.event.trigger("ajaxError", [s, m, c]), m.complete && m.complete.call(m.context, s, c)
                }}, n = m.global, n && 0 === a.active++ && a.event.trigger("ajaxStart"), n && a.event.trigger("ajaxSend", [s, m]), m.beforeSend && m.beforeSend.call(m.context, s, m) === !1)
                return m.global && a.active--, y.reject(), y;
            if (s.aborted)
                return y.reject(), y;
            t = x.clk, t && (u = t.name, u && !t.disabled && (m.extraData = m.extraData || {}, m.extraData[u] = t.value, "image" == t.type && (m.extraData[u + ".x"] = x.clk_x, m.extraData[u + ".y"] = x.clk_y)));
            var z = 1, A = 2, B = a("meta[name=csrf-token]").attr("content"), C = a("meta[name=csrf-param]").attr("content");
            C && B && (m.extraData = m.extraData || {}, m.extraData[C] = B), m.forceSync ? g() : setTimeout(g, 10);
            var D, E, F, G = 50, H = a.parseXML || function(a, b) {
                return window.ActiveXObject ? (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a)) : b = (new DOMParser).parseFromString(a, "text/xml"), b && b.documentElement && "parsererror" != b.documentElement.nodeName ? b : null
            }, I = a.parseJSON || function(a) {
                return window.eval("(" + a + ")")
            }, J = function(b, c, d) {
                var e = b.getResponseHeader("content-type") || "", f = "xml" === c || !c && e.indexOf("xml") >= 0, g = f ? b.responseXML : b.responseText;
                return f && "parsererror" === g.documentElement.nodeName && a.error && a.error("parsererror"), d && d.dataFilter && (g = d.dataFilter(g, c)), "string" == typeof g && ("json" === c || !c && e.indexOf("json") >= 0 ? g = I(g) : ("script" === c || !c && e.indexOf("javascript") >= 0) && a.globalEval(g)), g
            };
            return y
        }
        if (!this.length)
            return d("ajaxSubmit: skipping submit process - no element selected"), this;
        var i, j, k, l = this;
        "function" == typeof b ? b = {success: b} : void 0 === b && (b = {}), i = b.type || this.attr2("method"), j = b.url || this.attr2("action"), k = "string" == typeof j ? a.trim(j) : "", k = k || window.location.href || "", k && (k = (k.match(/^([^#]+)/) || [])[1]), b = a.extend(!0, {url: k, success: a.ajaxSettings.success, type: i || a.ajaxSettings.type, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"}, b);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, b, m]), m.veto)
            return d("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (b.beforeSerialize && b.beforeSerialize(this, b) === !1)
            return d("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var n = b.traditional;
        void 0 === n && (n = a.ajaxSettings.traditional);
        var o, p = [], q = this.formToArray(b.semantic, p);
        if (b.data && (b.extraData = b.data, o = a.param(b.data, n)), b.beforeSubmit && b.beforeSubmit(q, this, b) === !1)
            return d("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [q, this, b, m]), m.veto)
            return d("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var r = a.param(q, n);
        o && (r = r ? r + "&" + o : o), "GET" == b.type.toUpperCase() ? (b.url += (b.url.indexOf("?") >= 0 ? "&" : "?") + r, b.data = null) : b.data = r;
        var s = [];
        if (b.resetForm && s.push(function() {
            l.resetForm()
        }), b.clearForm && s.push(function() {
            l.clearForm(b.includeHidden)
        }), !b.dataType && b.target) {
            var t = b.success || function() {
            };
            s.push(function(c) {
                var d = b.replaceTarget ? "replaceWith" : "html";
                a(b.target)[d](c).each(t, arguments)
            })
        } else
            b.success && s.push(b.success);
        if (b.success = function(a, c, d) {
            for (var e = b.context || this, f = 0, g = s.length; g > f; f++)
                s[f].apply(e, [a, c, d || l, l])
        }, b.error) {
            var u = b.error;
            b.error = function(a, c, d) {
                var e = b.context || this;
                u.apply(e, [a, c, d, l])
            }
        }
        if (b.complete) {
            var v = b.complete;
            b.complete = function(a, c) {
                var d = b.context || this;
                v.apply(d, [a, c, l])
            }
        }
        var w = a("input[type=file]:enabled", this).filter(function() {
            return"" !== a(this).val()
        }), x = w.length > 0, y = "multipart/form-data", z = l.attr("enctype") == y || l.attr("encoding") == y, A = e.fileapi && e.formdata;
        d("fileAPI :" + A);
        var B, C = (x || z) && !A;
        b.iframe !== !1 && (b.iframe || C) ? b.closeKeepAlive ? a.get(b.closeKeepAlive, function() {
            B = h(q)
        }) : B = h(q) : B = (x || z) && A ? g(q) : a.ajax(b), l.removeData("jqxhr").data("jqxhr", B);
        for (var D = 0; D < p.length; D++)
            p[D] = null;
        return this.trigger("form-submit-notify", [this, b]), this
    }, a.fn.ajaxForm = function(e) {
        if (e = e || {}, e.delegation = e.delegation && a.isFunction(a.fn.on), !e.delegation && 0 === this.length) {
            var f = {s: this.selector, c: this.context};
            return!a.isReady && f.s ? (d("DOM not ready, queuing ajaxForm"), a(function() {
                a(f.s, f.c).ajaxForm(e)
            }), this) : (d("terminating; zero elements found by selector" + (a.isReady ? "" : " (DOM not ready)")), this)
        }
        return e.delegation ? (a(document).off("submit.form-plugin", this.selector, b).off("click.form-plugin", this.selector, c).on("submit.form-plugin", this.selector, e, b).on("click.form-plugin", this.selector, e, c), this) : this.ajaxFormUnbind().bind("submit.form-plugin", e, b).bind("click.form-plugin", e, c)
    }, a.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, a.fn.formToArray = function(b, c) {
        var d = [];
        if (0 === this.length)
            return d;
        var f = this[0], g = b ? f.getElementsByTagName("*") : f.elements;
        if (!g)
            return d;
        var h, i, j, k, l, m, n;
        for (h = 0, m = g.length; m > h; h++)
            if (l = g[h], j = l.name, j && !l.disabled)
                if (b && f.clk && "image" == l.type)
                    f.clk == l && (d.push({name: j, value: a(l).val(), type: l.type}), d.push({name: j + ".x", value: f.clk_x}, {name: j + ".y", value: f.clk_y}));
                else if (k = a.fieldValue(l, !0), k && k.constructor == Array)
                    for (c && c.push(l), i = 0, n = k.length; n > i; i++)
                        d.push({name: j, value: k[i]});
                else if (e.fileapi && "file" == l.type) {
                    c && c.push(l);
                    var o = l.files;
                    if (o.length)
                        for (i = 0; i < o.length; i++)
                            d.push({name: j, value: o[i], type: l.type});
                    else
                        d.push({name: j, value: "", type: l.type})
                } else
                    null !== k && "undefined" != typeof k && (c && c.push(l), d.push({name: j, value: k, type: l.type, required: l.required}));
        if (!b && f.clk) {
            var p = a(f.clk), q = p[0];
            j = q.name, j && !q.disabled && "image" == q.type && (d.push({name: j, value: p.val()}), d.push({name: j + ".x", value: f.clk_x}, {name: j + ".y", value: f.clk_y}))
        }
        return d
    }, a.fn.formSerialize = function(b) {
        return a.param(this.formToArray(b))
    }, a.fn.fieldSerialize = function(b) {
        var c = [];
        return this.each(function() {
            var d = this.name;
            if (d) {
                var e = a.fieldValue(this, b);
                if (e && e.constructor == Array)
                    for (var f = 0, g = e.length; g > f; f++)
                        c.push({name: d, value: e[f]});
                else
                    null !== e && "undefined" != typeof e && c.push({name: this.name, value: e})
            }
        }), a.param(c)
    }, a.fn.fieldValue = function(b) {
        for (var c = [], d = 0, e = this.length; e > d; d++) {
            var f = this[d], g = a.fieldValue(f, b);
            null === g || "undefined" == typeof g || g.constructor == Array && !g.length || (g.constructor == Array ? a.merge(c, g) : c.push(g))
        }
        return c
    }, a.fieldValue = function(b, c) {
        var d = b.name, e = b.type, f = b.tagName.toLowerCase();
        if (void 0 === c && (c = !0), c && (!d || b.disabled || "reset" == e || "button" == e || ("checkbox" == e || "radio" == e) && !b.checked || ("submit" == e || "image" == e) && b.form && b.form.clk != b || "select" == f && -1 == b.selectedIndex))
            return null;
        if ("select" == f) {
            var g = b.selectedIndex;
            if (0 > g)
                return null;
            for (var h = [], i = b.options, j = "select-one" == e, k = j ? g + 1 : i.length, l = j ? g : 0; k > l; l++) {
                var m = i[l];
                if (m.selected) {
                    var n = m.value;
                    if (n || (n = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), j)
                        return n;
                    h.push(n)
                }
            }
            return h
        }
        return a(b).val()
    }, a.fn.clearForm = function(b) {
        return this.each(function() {
            a("input,select,textarea", this).clearFields(b)
        })
    }, a.fn.clearFields = a.fn.clearInputs = function(b) {
        var c = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var d = this.type, e = this.tagName.toLowerCase();
            c.test(d) || "textarea" == e ? this.value = "" : "checkbox" == d || "radio" == d ? this.checked = !1 : "select" == e ? this.selectedIndex = -1 : "file" == d ? /MSIE/.test(navigator.userAgent) ? a(this).replaceWith(a(this).clone(!0)) : a(this).val("") : b && (b === !0 && /hidden/.test(d) || "string" == typeof b && a(this).is(b)) && (this.value = "")
        })
    }, a.fn.resetForm = function() {
        return this.each(function() {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, a.fn.enable = function(a) {
        return void 0 === a && (a = !0), this.each(function() {
            this.disabled = !a
        })
    }, a.fn.selected = function(b) {
        return void 0 === b && (b = !0), this.each(function() {
            var c = this.type;
            if ("checkbox" == c || "radio" == c)
                this.checked = b;
            else if ("option" == this.tagName.toLowerCase()) {
                var d = a(this).parent("select");
                b && d[0] && "select-one" == d[0].type && d.find("option").selected(!1), this.selected = b
            }
        })
    }, a.fn.ajaxSubmit.debug = !1
}), function(a) {
    if ("object" == typeof exports)
        a(require("jquery"), require("spin"));
    else if ("function" == typeof define && define.amd)
        define(["jquery", "spin"], a);
    else {
        if (!window.Spinner)
            throw new Error("Spin.js not present");
        a(window.jQuery, window.Spinner)
    }
}(function(a, b) {
    a.fn.spin = function(c, d) {
        return this.each(function() {
            var e = a(this), f = e.data();
            f.spinner && (f.spinner.stop(), delete f.spinner), c !== !1 && (c = a.extend({color: d || e.css("color")}, a.fn.spin.presets[c] || c), f.spinner = new b(c).spin(this))
        })
    }, a.fn.spin.presets = {tiny: {lines: 8, length: 2, width: 2, radius: 3}, small: {lines: 8, length: 4, width: 3, radius: 5}, large: {lines: 10, length: 8, width: 4, radius: 8}}
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {def: "easeOutQuad", swing: function(a, b, c, d, e) {
        return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
    }, easeInQuad: function(a, b, c, d, e) {
        return d * (b /= e) * b + c
    }, easeOutQuad: function(a, b, c, d, e) {
        return-d * (b /= e) * (b - 2) + c
    }, easeInOutQuad: function(a, b, c, d, e) {
        return(b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
    }, easeInCubic: function(a, b, c, d, e) {
        return d * (b /= e) * b * b + c
    }, easeOutCubic: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c
    }, easeInOutCubic: function(a, b, c, d, e) {
        return(b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
    }, easeInQuart: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b + c
    }, easeOutQuart: function(a, b, c, d, e) {
        return-d * ((b = b / e - 1) * b * b * b - 1) + c
    }, easeInOutQuart: function(a, b, c, d, e) {
        return(b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
    }, easeInQuint: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b * b + c
    }, easeOutQuint: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c
    }, easeInOutQuint: function(a, b, c, d, e) {
        return(b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
    }, easeInSine: function(a, b, c, d, e) {
        return-d * Math.cos(b / e * (Math.PI / 2)) + d + c
    }, easeOutSine: function(a, b, c, d, e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c
    }, easeInOutSine: function(a, b, c, d, e) {
        return-d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
    }, easeInExpo: function(a, b, c, d, e) {
        return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
    }, easeOutExpo: function(a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
    }, easeInOutExpo: function(a, b, c, d, e) {
        return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
    }, easeInCirc: function(a, b, c, d, e) {
        return-d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
    }, easeOutCirc: function(a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
    }, easeInOutCirc: function(a, b, c, d, e) {
        return(b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    }, easeInElastic: function(a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b)
            return c;
        if (1 == (b /= e))
            return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else
            var f = g / (2 * Math.PI) * Math.asin(d / h);
        return-(h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g)) + c
    }, easeOutElastic: function(a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b)
            return c;
        if (1 == (b /= e))
            return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else
            var f = g / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, -10 * b) * Math.sin(2 * (b * e - f) * Math.PI / g) + d + c
    }, easeInOutElastic: function(a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b)
            return c;
        if (2 == (b /= e / 2))
            return c + d;
        if (g || (g = .3 * e * 1.5), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else
            var f = g / (2 * Math.PI) * Math.asin(d / h);
        return 1 > b ? -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) * .5 + d + c
    }, easeInBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
    }, easeOutBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
    }, easeInOutBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
    }, easeInBounce: function(a, b, c, d, e) {
        return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
    }, easeOutBounce: function(a, b, c, d, e) {
        return(b /= e) < 1 / 2.75 ? 7.5625 * d * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
    }, easeInOutBounce: function(a, b, c, d, e) {
        return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
    }}), function(a) {
    var b = "waitForImages";
    a.waitForImages = {hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"]}, a.expr[":"].uncached = function(b) {
        if (!a(b).is('img[src!=""]'))
            return!1;
        var c = new Image;
        return c.src = b.src, !c.complete
    }, a.fn.waitForImages = function(c, d, e) {
        var f = 0, g = 0;
        if (a.isPlainObject(arguments[0]) && (e = arguments[0].waitForAll, d = arguments[0].each, c = arguments[0].finished), c = c || a.noop, d = d || a.noop, e = !!e, !a.isFunction(c) || !a.isFunction(d))
            throw new TypeError("An invalid callback was supplied.");
        return this.each(function() {
            var h = a(this), i = [], j = a.waitForImages.hasImageProperties || [], k = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
            e ? h.find("*").addBack().each(function() {
                var b = a(this);
                b.is("img:uncached") && i.push({src: b.attr("src"), element: b[0]}), a.each(j, function(a, c) {
                    var d, e = b.css(c);
                    if (!e)
                        return!0;
                    for (; d = k.exec(e); )
                        i.push({src: d[2], element: b[0]})
                })
            }) : h.find("img:uncached").each(function() {
                i.push({src: this.src, element: this})
            }), f = i.length, g = 0, 0 === f && c.call(h[0]), a.each(i, function(e, i) {
                var j = new Image;
                a(j).on("load." + b + " error." + b, function(a) {
                    return g++, d.call(i.element, g, f, "load" == a.type), g == f ? (c.call(h[0]), !1) : void 0
                }), j.src = i.src
            })
        })
    }
}(jQuery), function() {
    var a, b, c;
    c = "superslides", a = jQuery, b = function(b, c) {
        var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H = this;
        return null == c && (c = {}), this.options = a.extend({play: !1, slide_speed: "normal", slide_easing: "linear", pagination: !0, hashchange: !1, texthash: !1, scrollable: !0, classes: {preserve: "preserve", nav: "slides-navigation", container: "slides-container", pagination: "slides-pagination"}}, c), D = this, h = a(window), this.el = a(b), e = a("." + this.options.classes.container, b), d = e.children(), g = a("<nav>", {"class": this.options.classes.pagination}), f = a("<div>", {"class": "slides-control"}), s = 1, p = !1, G = h.width(), o = h.height(), q = function() {
            return p ? void 0 : (s = n(), v(), H.mobile = /mobile/i.test(navigator.userAgent), f = e.wrap(f).parent(".slides-control"), B(), A(), E(), i(), H.start(), H)
        }, B = function() {
            return a("body").css({margin: 0}), H.el.css({position: "relative", overflowX: "hidden", width: "100%"}), f.css({position: "relative", transform: "translate3d(0)"}), e.css({display: "none", margin: "0", padding: "0", listStyle: "none", position: "relative"}), e.find("img").not("." + H.options.classes.preserve).css({"-webkit-backface-visibility": "hidden", "-ms-interpolation-mode": "bicubic", position: "absolute", left: "0", top: "0", "z-index": "-1"})
        }, A = function() {
            return a("body").css({margin: 0, overflow: "hidden"}), H.el.css({height: o}), f.css({width: G * s, left: -G}), H.options.scrollable ? d.each(function() {
                return a(".scrollable", this).length ? void 0 : (a(this).wrapInner('<div class="scrollable" />'), a(this).find("img").not("." + H.options.classes.preserve).insertBefore(a(".scrollable", this)))
            }) : void 0
        }, z = function() {
            return d.is("img") && (d.wrap("<div>"), d = e.children()), d.css({display: "none", position: "absolute", overflow: "hidden", top: 0, left: G, zIndex: 0}), l(d)
        }, E = function() {
            return H.size() > 1 ? a("." + H.options.classes.nav).show() : a("." + H.options.classes.nav).hide()
        }, getTextHash = function(a) {
            return d.eq(a).data("href")
        }, getSlideTitle = function(a) {
            return d.eq(a).data("name")
        }, C = function() {
            return a("." + H.options.classes.nav + " a").each(function() {
                return this.hash = a(this).hasClass("next") ? H.options.texthash ? getTextHash(D.next) : D.next : H.options.texthash ? getTextHash(D.prev) : D.prev
            })
        }, j = function(b) {
            b >= 0 || (b = H.size() - 1);
            var c = "";
            return H.options.texthash && (index = b, c = getSlideTitle(b), b = getTextHash(b)), g.append(a("<a>", {html: '<span class="project-title">' + c + "</span>", href: "#" + b, style: "left:" + 64 * index + "px", "class": H.current === g.children().length ? "current" : void 0})).append('<span class="dot" style="left:' + (64 * index + 40) + 'px">&#x2022;</span>')
        }, i = function() {
            var c, e;
            if (H.options.pagination && 1 !== H.size())
                return a(b).find("." + H.options.classes.pagination).length ? (e = g.children().last().index(), c = d) : (e = 0, c = new Array(H.size() - e), g = g.appendTo(H.el)), a.each(c, function(a) {
                    return j(a)
                })
        }, r = function(b, c) {
            return a("<img>", {src: b.attr("src")}).load(function() {
                return c instanceof Function ? c(this) : void 0
            })
        }, y = function(a) {
            var b;
            return b = G / a.data("aspect-ratio"), b >= o ? a.css({top: -(b - o) / 2}) : a.css({top: 0})
        }, x = function(a) {
            var b;
            return b = o * a.data("aspect-ratio"), b >= G ? a.css({left: -(b - G) / 2}) : a.css({left: 0})
        }, k = function(a) {
            return a.data("aspect-ratio") ? (G / o >= a.data("aspect-ratio") ? a.css({height: "auto", width: "100%"}) : a.css({height: "100%", width: "auto"}), x(a), y(a)) : (r(a, function(b) {
                return a.removeAttr("width").removeAttr("height"), a.data("aspect-ratio", b.width / b.height), k(a)
            }), void 0)
        }, l = function(b) {
            return b.each(function() {
                return a(this).width(G).height(o), a(this).css({left: G}), k(a("img", this).not("." + D.options.classes.preserve))
            })
        }, n = function() {
            return 1 === H.size() ? 1 : 3
        }, t = function() {
            var a;
            return a = H.current + 1, a === H.size() && (a = 0), a
        }, w = function() {
            var a;
            return a = H.current - 1, 0 > a && (a = H.size() - 1), a
        }, F = function(a) {
            switch (!0) {
                case / next / .test(a):
                    return t();
                case / prev / .test(a):
                    return w();
                case / \d / .test(a):
                    return a;
                default:
                    return!1
                }
        }, getPosByHash = function(b) {
            var c;
            return d.each(function(d) {
                a(this).data("href") == b && (c = d)
            }), c
        }, u = function(a) {
            return null == a && (a = window.location.hash), a = a.replace(/^#/, ""), a ? H.options.texthash ? +getPosByHash(a) : +a : void 0
        }, v = function(a) {
            return null == a && (a = -1), p && H.current >= 0 && 0 > a && (a = H.current), H.current = a, H.next = t(), H.prev = w(), !1
        }, m = function(b, c) {
            var h, i, j, k, l;
            return l = F(b), l > H.size() - 1 ? void 0 : (j = 2 * G, h = -j, i = H.current, ("prev" === b || i > b) && (j = 0, h = 0), k = j, d.removeClass("current").eq(l).addClass("current").css({left: k, display: "block"}), g.children().removeClass("current").eq(2 * l).addClass("current"), f.animate({useTranslate3d: H.mobile, left: h}, H.options.slide_speed, H.options.slide_easing, function() {
                return v(l), H.size() > 1 && (f.css({left: -G}), d.eq(l).css({left: G, zIndex: 2}), i >= 0 && d.eq(i).css({left: G, display: "none", zIndex: 0})), H.options.hashchange && (window.location.hash = H.options.texthash ? getTextHash(H.current) : H.current), "function" == typeof c && c(), C(), H.animating = !1, p ? e.trigger("animated.slides") : (p = !0, a("body").css("overflow", "visible"), e.fadeIn("slow", function() {
                    a(".slides-container>li:first-child .reveal").css("opacity", 1)
                }), e.trigger("init.slides"))
            }))
        }, this.$el = a(b), this.animate = function(a, b) {
            return null == a && (a = "next"), H.animating ? void 0 : (H.animating = !0, e.trigger("begintransition.slides"), m(a, b))
        }, this.update = function() {
            return v(H.current), i(), E(), e.trigger("updated.slides")
        }, this.destroy = function() {
            return a(b).removeData()
        }, this.size = function() {
            return e.children().length
        }, this.stop = function() {
            return clearInterval(H.play_id), delete H.play_id, e.trigger("stopped.slides")
        }, this.start = function() {
            return z(), H.options.hashchange && h.trigger("hashchange"), H.animate("next"), H.options.play && (H.play_id && H.stop(), H.play_id = setInterval(function() {
                return H.animate("next")
            }, H.options.play)), e.trigger("started.slides")
        }, h.on("hashchange", function() {
            var a;
            return a = u(), a >= 0 && a !== H.current ? H.animate(a) : void 0
        }).on("resize", function() {
            return G = h.width(), o = h.height(), A(), l(d)
        }), a(document).on("click", "." + this.options.classes.nav + " a", function(b) {
            return D.options.hashchange || b.preventDefault(), D.stop(), a(this).hasClass("next") ? D.animate("next") : D.animate("prev")
        }).on("click", "." + this.options.classes.pagination + " a", function(a) {
            var b;
            return D.options.hashchange ? void 0 : (a.preventDefault(), b = u(this.hash), D.animate(b))
        }), q()
    }, a.fn[c] = function(d, e) {
        var f;
        return f = [], this.each(function() {
            var g, h, i;
            return g = a(this), h = g.data(c), i = "object" == typeof d && d, h || (f = g.data(c, h = new b(this, i))), "string" == typeof d && (f = h[d], "function" == typeof f) ? f = f.call(this, e) : void 0
        }), f
    }
}.call(this), function(a) {
    "use strict";
    a.fn.spin.presets.standard = {lines: 13, length: 0, width: 2, radius: 24, corners: 1, rotate: 0, direction: 1, color: "#fff", speed: 1.5, trail: 32, shadow: !1, hwaccel: !0, className: "spinner", zIndex: 2e9, top: "auto", left: "auto"};
    var b = {touchInfoIsVisible: !1, init: function() {
            a(".spinner").spin("standard"), a("body").hasClass("home") && this.initSlideshow(), b.mailchimpInit(), this.bindUIActions()
        }, bindUIActions: function() {
            a(".menu a[href*=#]").on("click", function(a) {
                b.launchPageModal(a)
            }), a(".close-modal").on("click", function() {
                b.pageModalShouldClose()
            }), a(".page-header").on({mouseenter: function() {
                    b.menuShouldBeActive()
                }, mouseleave: function() {
                    b.menuShouldBeInactive()
                }}), a(".slide-info, .play-icon-container").on({mouseenter: function(a) {
                    b.slideInfoShouldBeActive(a)
                }, mouseleave: function(a) {
                    b.slideInfoShouldBeInactive(a)
                }}), a(".slides-pagination a").on("click", function(a) {
                b.paginationShouldToggle(a)
            }), a(".play-media").on("click", function(a) {
                b.mediaShouldPlay(a)
            }), a(".sitename a").on("click", function(a) {
                b.logoWasActioned(a)
            }), a(".touch-info").on("click", function(a) {
                b.touchInfoWasActioned(a)
            }), a(".tab-container button").on("click", function(a) {
                b.tabWasAction(a)
            })
        }, windowLoaded: function() {
            a(".spinner").fadeOut("slow", function() {
                a(this).spin(!1)
            })
        }, debounce: function(a, b) {
            var c = null;
            return function() {
                var d = this, e = arguments;
                clearTimeout(c), c = setTimeout(function() {
                    a.apply(d, e)
                }, b)
            }
        }, mailchimpInit: function() {
            function b() {
                a("#mc_signup_submit").attr("disabled", "disabled")
            }
            function c(b) {
                a("#mc_signup_submit").removeAttr("disabled"), a("#mc_message").html(b);
                var c = new RegExp('class="mc_success_msg"', "i");
                c.test(b) && (a("#mc_signup_form").each(function() {
                    this.reset()
                }), a("#mc_submit_type").val("js"))
            }
            a(".mc_required, .modal.touch #mc-indicates-required, .modal.follow #mc-indicates-required").remove(), Modernizr.input.placeholder && (a(".mc_var_label").remove(), a(".modal.touch #mc_mv_EMAIL, .modal.follow #mc_mv_EMAIL").attr("placeholder", "YOUR EMAIL"), a(".modal.touch #mc_mv_FNAME, .modal.follow #mc_mv_FNAME").attr("placeholder", "FIRST NAME"), a(".modal.touch #mc_mv_LNAME, .modal.follow #mc_mv_LNAME").attr("placeholder", "LAST NAME"));
            var d = {ajax_url: "http://thefilmhouse.qa"};
            a("#mc_submit_type").val("js"), a("#mc_signup_form").ajaxForm({url: d.ajax_url, type: "POST", dataType: "text", beforeSubmit: b, success: c})
        }, launchPageModal: function(c) {
            c.preventDefault(), a(".menu-header .current-menu-item").removeClass("current-menu-item"), a(c.currentTarget).parent().addClass("current-menu-item");
            var d = a(c.currentTarget).attr("href").split("#")[1], e = a(".modal." + d);
            a(".modal").is(":visible") ? (a(".modal:visible").hide(), a(e).show()) : a(e).fadeIn("fast"), a(".close-modal").fadeIn("fast"), a("body").css({overflow: "hidden"});
            var f = a(e).find(".container").height(), g = a(window).height(), h = g / 2 - f / 2;
            a(e).find(">.container").css({marginTop: h}), b.menuShouldBeActive()
        }, pageModalShouldClose: function() {
            b.touchInfoIsVisible ? b.closeTouchInfoWasActioned() : (b.menuShouldBeInactive(), a(".modal.touch").animate({scrollTop: 0}, 400, function() {
                a(".modal:visible").fadeOut("fast", function() {
                    a(this).hasClass("media") && a(this).empty(), a("body").css({overflow: "auto"}), a(".close-modal").fadeOut("fast")
                })
            }), a(".menu-header .current-menu-item").removeClass("current-menu-item"), a(".page-header").attr("style", ""), a("body").hasClass("page-template-default") && a(".menu-header li:last-child").addClass("current-menu-item"))
        }, menuShouldBeActive: function() {
            !Modernizr.touch && a(window).width() > 728 && (a(".page-header").addClass("is-active"), a(".header-grad").fadeIn("fast"))
        }, menuShouldBeInactive: function() {
            //a(".page-header").removeClass("is-active"), 
                    a(".header-grad").fadeOut("fast")
        }, paginationShouldToggle: function(b) {
            a(".slides-pagination .current").removeClass("current"), a(b.currentTarget).addClass("current")
        }, slideInfoShouldBeActive: function(b) {
            if (!Modernizr.touch && a(window).width() > 729) {
                var c = a(b.currentTarget).closest(".container").find(".slide-info"), d = "-" + a(c).outerHeight() + "px";
                a(c).css({marginTop: d})
            }
        }, slideInfoShouldBeInactive: function(b) {
            !Modernizr.touch && a(window).width() > 729 && a(b.currentTarget).closest(".container").find(".slide-info").attr("style", "")
        }, mediaShouldPlay: function(b) {
            var c = a(".modal.media");
            if (a(b.currentTarget).is("[data-video]")) {
                var d, e = '?title=0&byline=0&portrait=0&color=ffffff&autoplay=1&loop=0"', f = a.trim(a(b.currentTarget).data("video")), g = a(window).width(), h = a(window).height(), i = 9 * g / 16;
                d = i > .75 * h ? .75 * h : i;
                var j = ' width="' + g + '" height="' + d + '"', k = '<iframe class="player-frame" src="//player.vimeo.com/video/' + f + e + j + ' frameborder="0"></iframe>';
                a(c).prepend(k), a(c).fadeIn("fast", function() {
                    a(c).fitVids()
                })
            }
            if (a(b.currentTarget).is("[data-slideshow]")) {
                a(".spinner").show().spin("standard");
                var l = a.trim(a(b.currentTarget).data("slideshow"));
                a.ajax({cache: !1, url: l, success: function(b) {
                        a(c).html(b).waitForImages(function() {
                            a(c).show(), a(c).find(".flexslider").flexslider({easing: "easeInOutCubic", animation: "slide", animationSpeed: Modernizr.touch ? 200 : 600, controlNav: !1, slideshow: !1}), a(".spinner").fadeOut("slow", function() {
                                a(this).spin(!1)
                            })
                        })
                    }})
            }
            a(".close-modal").fadeIn("fast"), a("body").css({overflow: "hidden"})
        }, initSlideshow: function() {
            var c = a(".slides-pagination"), d = 0;
            a(".slides-container li").each(function() {
                var b = a(this).data("title"), e = "#" + a(this).data("href");
                a(c).find(".title[data-title=" + d + "]").text(b).parent().attr("href", e).css({display: "inline-block"}), d++
            });
            var e = window.location.hash;
            e.length > 0 && (a(c).find(".current").removeClass("current"), a(c).find("a[href=" + e + "]").addClass("current")), !Modernizr.touch && a(window).width() > 728 && (Echo.init(), a(".img-swap").fadeTo(0, 0)), a(".slides").superslides({slide_easing: "easeInOutCubic", slide_speed: Modernizr.touch ? 200 : 600, pagination: !1, hashchange: !0, texthash: !0, scrollable: !0}), a(".slides").hammer().on("swipeleft", function() {
                a(this).superslides("animate", "next")
            }), a(".slides").hammer().on("swiperight", function() {
                a(this).superslides("animate", "prev")
            }), a(".slides-navigation").attr("style", ""), !Modernizr.touch && a(window).width() > 728 && a(".slides-container li").mousemove(b.debounce(function(a) {
                b.hoverSlideshow(a)
            }, 50))
        }, logoWasActioned: function(c) {
            a(".modal").is(":visible") || b.touchInfoIsVisible ? (a(".modal").is(":visible") && (c.preventDefault(), b.pageModalShouldClose()), b.touchInfoIsVisible && (c.preventDefault(), b.closeTouchInfoWasActioned())) : (Modernizr.touch || a(window).width() < 729) && (c.preventDefault(), a(".close-modal").fadeIn("fast"), a(".modal.touch").fadeIn("fast", function() {
                a("body").css({overflow: "hidden"}), a(".page-header").css({width: "100%", background: "#000", margin: "0", left: "0", zIndex: "11"})
            }))
        }, touchInfoWasActioned: function(c) {
            (Modernizr.touch || a(window).width() < 729) && (c.preventDefault(), a(c.currentTarget).closest(".container").find(".slide-info").addClass("show-touch"), a(".slides-navigation").fadeOut("fast"), a(".close-modal").fadeIn("fast"), a("body").css({overflow: "hidden"}), a(".page-header").css({width: "100%", background: "#000", margin: "0", left: "0"}), b.touchInfoIsVisible = !0)
        }, closeTouchInfoWasActioned: function() {
            a(".slide-info.show-touch").animate({scrollTop: 0}, 400, function() {
                a(".page-header").attr("style", ""), b.touchInfoIsVisible = !1, a(this).removeClass("show-touch"), a(".slides-navigation").fadeIn("fast", function() {
                    a(".close-modal").fadeOut("fast"), a("body").css({overflow: "auto"})
                })
            })
        }, hoverSlideshow: function(b) {
            var c = a(window).width(), d = a(".slides-container li:visible"), e = 800;
            b.pageX <= c / 3 ? (a(d).find(".img-swap.left").fadeTo(e, 1), a(d).find(".img-swap.right").fadeTo(e, 0)) : b.pageX >= c / 3 * 2 ? (a(d).find(".img-swap.right").fadeTo(e, 1), a(d).find(".img-swap.left").fadeTo(e, 0)) : a(d).find(".img-swap").fadeTo(e, 0)
        }, tabWasAction: function(b) {
            var c = a(b.currentTarget).closest(".tab-container"), d = "." + a(b.currentTarget).data("action");
            a(c).find(".tab").hide(), a(c).find(d).show(), a(c).find(".selected").removeClass("selected"), a(b.currentTarget).addClass("selected")
        }};
    a(function() {
        b.init()
    }), a(window).load(function() {
        b.windowLoaded()
    })
}(jQuery);
$(document).ready(function(){
 $(".page-header").addClass("is-active");
 //$(".header-grad").fadeOut("fast")
});