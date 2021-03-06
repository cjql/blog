!
function(e) {
	function __webpack_require__(i) {
		if (t[i]) return t[i].exports;
		var n = t[i] = {
			i: i,
			l: !1,
			exports: {}
		};
		return e[i].call(n.exports, n, n.exports, __webpack_require__), n.l = !0, n.exports
	}
	var t = {};
	__webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.i = function(e) {
		return e
	}, __webpack_require__.d = function(e, t, i) {
		__webpack_require__.o(e, t) || Object.defineProperty(e, t, {
			configurable: !1,
			enumerable: !0,
			get: i
		})
	}, __webpack_require__.n = function(e) {
		var t = e && e.__esModule ?
		function() {
			return e.
		default
		} : function() {
			return e
		};
		return __webpack_require__.d(t, "a", t), t
	}, __webpack_require__.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, __webpack_require__.p = "/assets/", __webpack_require__(__webpack_require__.s = 10)
}([function(e, t, i) {
	var n, o;
	!
	function(t, i) {
		"use strict";
		"object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? i(t, !0) : function(e) {
			if (!e.document) throw new Error("jQuery requires a window with a document");
			return i(e)
		} : i(t)
	}("undefined" != typeof window ? window : this, function(i, s) {
		"use strict";

		function DOMEval(e, t) {
			t = t || a;
			var i = t.createElement("script");
			i.text = e, t.head.appendChild(i).parentNode.removeChild(i)
		}
		function isArrayLike(e) {
			var t = !! e && "length" in e && e.length,
				i = b.type(e);
			return "function" !== i && !b.isWindow(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
		}
		function nodeName(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		}
		function winnow(e, t, i) {
			return b.isFunction(t) ? b.grep(e, function(e, n) {
				return !!t.call(e, n, e) !== i
			}) : t.nodeType ? b.grep(e, function(e) {
				return e === t !== i
			}) : "string" != typeof t ? b.grep(e, function(e) {
				return p.call(t, e) > -1 !== i
			}) : D.test(t) ? b.filter(t, e, i) : (t = b.filter(t, e), b.grep(e, function(e) {
				return p.call(t, e) > -1 !== i && 1 === e.nodeType
			}))
		}
		function sibling(e, t) {
			for (;
			(e = e[t]) && 1 !== e.nodeType;);
			return e
		}
		function createOptions(e) {
			var t = {};
			return b.each(e.match(I) || [], function(e, i) {
				t[i] = !0
			}), t
		}
		function Identity(e) {
			return e
		}
		function Thrower(e) {
			throw e
		}
		function adoptValue(e, t, i, n) {
			var o;
			try {
				e && b.isFunction(o = e.promise) ? o.call(e).done(t).fail(i) : e && b.isFunction(o = e.then) ? o.call(e, t, i) : t.apply(void 0, [e].slice(n))
			} catch (e) {
				i.apply(void 0, [e])
			}
		}
		function completed() {
			a.removeEventListener("DOMContentLoaded", completed), i.removeEventListener("load", completed), b.ready()
		}
		function Data() {
			this.expando = b.expando + Data.uid++
		}
		function getData(e) {
			return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : R.test(e) ? JSON.parse(e) : e)
		}
		function dataAttr(e, t, i) {
			var n;
			if (void 0 === i && 1 === e.nodeType) if (n = "data-" + t.replace(_, "-$&").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
				try {
					i = getData(i)
				} catch (e) {}
				z.set(e, t, i)
			} else i = void 0;
			return i
		}
		function adjustCSS(e, t, i, n) {
			var o, s = 1,
				r = 20,
				a = n ?
			function() {
				return n.cur()
			} : function() {
				return b.css(e, t, "")
			}, l = a(), c = i && i[3] || (b.cssNumber[t] ? "" : "px"), d = (b.cssNumber[t] || "px" !== c && +l) && U.exec(b.css(e, t));
			if (d && d[3] !== c) {
				c = c || d[3], i = i || [], d = +l || 1;
				do {
					s = s || ".5", d /= s, b.style(e, t, d + c)
				} while (s !== (s = a() / l) && 1 !== s && --r)
			}
			return i && (d = +d || +l || 0, o = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = d, n.end = o)), o
		}
		function getDefaultDisplay(e) {
			var t, i = e.ownerDocument,
				n = e.nodeName,
				o = Y[n];
			return o || (t = i.body.appendChild(i.createElement(n)), o = b.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), Y[n] = o, o)
		}
		function showHide(e, t) {
			for (var i, n, o = [], s = 0, r = e.length; s < r; s++) n = e[s], n.style && (i = n.style.display, t ? ("none" === i && (o[s] = q.get(n, "display") || null, o[s] || (n.style.display = "")), "" === n.style.display && X(n) && (o[s] = getDefaultDisplay(n))) : "none" !== i && (o[s] = "none", q.set(n, "display", i)));
			for (s = 0; s < r; s++) null != o[s] && (e[s].style.display = o[s]);
			return e
		}
		function getAll(e, t) {
			var i;
			return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && nodeName(e, t) ? b.merge([e], i) : i
		}
		function setGlobalEval(e, t) {
			for (var i = 0, n = e.length; i < n; i++) q.set(e[i], "globalEval", !t || q.get(t[i], "globalEval"))
		}
		function buildFragment(e, t, i, n, o) {
			for (var s, r, a, l, c, d, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++) if ((s = e[f]) || 0 === s) if ("object" === b.type(s)) b.merge(p, s.nodeType ? [s] : s);
			else if (Z.test(s)) {
				for (r = r || u.appendChild(t.createElement("div")), a = (Q.exec(s) || ["", ""])[1].toLowerCase(), l = K[a] || K._default, r.innerHTML = l[1] + b.htmlPrefilter(s) + l[2], d = l[0]; d--;) r = r.lastChild;
				b.merge(p, r.childNodes), r = u.firstChild, r.textContent = ""
			} else p.push(t.createTextNode(s));
			for (u.textContent = "", f = 0; s = p[f++];) if (n && b.inArray(s, n) > -1) o && o.push(s);
			else if (c = b.contains(s.ownerDocument, s), r = getAll(u.appendChild(s), "script"), c && setGlobalEval(r), i) for (d = 0; s = r[d++];) J.test(s.type || "") && i.push(s);
			return u
		}
		function returnTrue() {
			return !0
		}
		function returnFalse() {
			return !1
		}
		function safeActiveElement() {
			try {
				return a.activeElement
			} catch (e) {}
		}
		function on(e, t, i, n, o, s) {
			var r, a;
			if ("object" == typeof t) {
				"string" != typeof i && (n = n || i, i = void 0);
				for (a in t) on(e, a, i, n, t[a], s);
				return e
			}
			if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = returnFalse;
			else if (!o) return e;
			return 1 === s && (r = o, o = function(e) {
				return b().off(e), r.apply(this, arguments)
			}, o.guid = r.guid || (r.guid = b.guid++)), e.each(function() {
				b.event.add(this, t, o, n, i)
			})
		}
		function manipulationTarget(e, t) {
			return nodeName(e, "table") && nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? b(">tbody", e)[0] || e : e
		}
		function disableScript(e) {
			return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
		}
		function restoreScript(e) {
			var t = ae.exec(e.type);
			return t ? e.type = t[1] : e.removeAttribute("type"), e
		}
		function cloneCopyEvent(e, t) {
			var i, n, o, s, r, a, l, c;
			if (1 === t.nodeType) {
				if (q.hasData(e) && (s = q.access(e), r = q.set(t, s), c = s.events)) {
					delete r.handle, r.events = {};
					for (o in c) for (i = 0, n = c[o].length; i < n; i++) b.event.add(t, o, c[o][i])
				}
				z.hasData(e) && (a = z.access(e), l = b.extend({}, a), z.set(t, l))
			}
		}
		function fixInput(e, t) {
			var i = t.nodeName.toLowerCase();
			"input" === i && G.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
		}
		function domManip(e, t, i, n) {
			t = d.apply([], t);
			var o, s, r, a, l, c, u = 0,
				p = e.length,
				f = p - 1,
				h = t[0],
				g = b.isFunction(h);
			if (g || p > 1 && "string" == typeof h && !y.checkClone && re.test(h)) return e.each(function(o) {
				var s = e.eq(o);
				g && (t[0] = h.call(this, o, s.html())), domManip(s, t, i, n)
			});
			if (p && (o = buildFragment(t, e[0].ownerDocument, !1, e, n), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || n)) {
				for (r = b.map(getAll(o, "script"), disableScript), a = r.length; u < p; u++) l = o, u !== f && (l = b.clone(l, !0, !0), a && b.merge(r, getAll(l, "script"))), i.call(e[u], l, u);
				if (a) for (c = r[r.length - 1].ownerDocument, b.map(r, restoreScript), u = 0; u < a; u++) l = r[u], J.test(l.type || "") && !q.access(l, "globalEval") && b.contains(c, l) && (l.src ? b._evalUrl && b._evalUrl(l.src) : DOMEval(l.textContent.replace(le, ""), c))
			}
			return e
		}
		function remove(e, t, i) {
			for (var n, o = t ? b.filter(t, e) : e, s = 0; null != (n = o[s]); s++) i || 1 !== n.nodeType || b.cleanData(getAll(n)), n.parentNode && (i && b.contains(n.ownerDocument, n) && setGlobalEval(getAll(n, "script")), n.parentNode.removeChild(n));
			return e
		}
		function curCSS(e, t, i) {
			var n, o, s, r, a = e.style;
			return i = i || ue(e), i && (r = i.getPropertyValue(t) || i[t], "" !== r || b.contains(e.ownerDocument, e) || (r = b.style(e, t)), !y.pixelMarginRight() && de.test(r) && ce.test(t) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s)), void 0 !== r ? r + "" : r
		}
		function addGetHookIf(e, t) {
			return {
				get: function() {
					return e() ? void delete this.get : (this.get = t).apply(this, arguments)
				}
			}
		}
		function vendorPropName(e) {
			if (e in me) return e;
			for (var t = e[0].toUpperCase() + e.slice(1), i = ve.length; i--;) if ((e = ve[i] + t) in me) return e
		}
		function finalPropName(e) {
			var t = b.cssProps[e];
			return t || (t = b.cssProps[e] = vendorPropName(e) || e), t
		}
		function setPositiveNumber(e, t, i) {
			var n = U.exec(t);
			return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
		}
		function augmentWidthOrHeight(e, t, i, n, o) {
			var s, r = 0;
			for (s = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0; s < 4; s += 2)"margin" === i && (r += b.css(e, i + B[s], !0, o)), n ? ("content" === i && (r -= b.css(e, "padding" + B[s], !0, o)), "margin" !== i && (r -= b.css(e, "border" + B[s] + "Width", !0, o))) : (r += b.css(e, "padding" + B[s], !0, o), "padding" !== i && (r += b.css(e, "border" + B[s] + "Width", !0, o)));
			return r
		}
		function getWidthOrHeight(e, t, i) {
			var n, o = ue(e),
				s = curCSS(e, t, o),
				r = "border-box" === b.css(e, "boxSizing", !1, o);
			return de.test(s) ? s : (n = r && (y.boxSizingReliable() || s === e.style[t]), "auto" === s && (s = e["offset" + t[0].toUpperCase() + t.slice(1)]), (s = parseFloat(s) || 0) + augmentWidthOrHeight(e, t, i || (r ? "border" : "content"), n, o) + "px")
		}
		function Tween(e, t, i, n, o) {
			return new Tween.prototype.init(e, t, i, n, o)
		}
		function schedule() {
			be && (!1 === a.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(schedule) : i.setTimeout(schedule, b.fx.interval), b.fx.tick())
		}
		function createFxNow() {
			return i.setTimeout(function() {
				ye = void 0
			}), ye = b.now()
		}
		function genFx(e, t) {
			var i, n = 0,
				o = {
					height: e
				};
			for (t = t ? 1 : 0; n < 4; n += 2 - t) i = B[n], o["margin" + i] = o["padding" + i] = e;
			return t && (o.opacity = o.width = e), o
		}
		function createTween(e, t, i) {
			for (var n, o = (Animation.tweeners[t] || []).concat(Animation.tweeners["*"]), s = 0, r = o.length; s < r; s++) if (n = o[s].call(i, t, e)) return n
		}
		function defaultPrefilter(e, t, i) {
			var n, o, s, r, a, l, c, d, u = "width" in t || "height" in t,
				p = this,
				f = {},
				h = e.style,
				g = e.nodeType && X(e),
				v = q.get(e, "fxshow");
			i.queue || (r = b._queueHooks(e, "fx"), null == r.unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function() {
				r.unqueued || a()
			}), r.unqueued++, p.always(function() {
				p.always(function() {
					r.unqueued--, b.queue(e, "fx").length || r.empty.fire()
				})
			}));
			for (n in t) if (o = t[n], we.test(o)) {
				if (delete t[n], s = s || "toggle" === o, o === (g ? "hide" : "show")) {
					if ("show" !== o || !v || void 0 === v[n]) continue;
					g = !0
				}
				f[n] = v && v[n] || b.style(e, n)
			}
			if ((l = !b.isEmptyObject(t)) || !b.isEmptyObject(f)) {
				u && 1 === e.nodeType && (i.overflow = [h.overflow, h.overflowX, h.overflowY], c = v && v.display, null == c && (c = q.get(e, "display")), d = b.css(e, "display"), "none" === d && (c ? d = c : (showHide([e], !0), c = e.style.display || c, d = b.css(e, "display"), showHide([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === b.css(e, "float") && (l || (p.done(function() {
					h.display = c
				}), null == c && (d = h.display, c = "none" === d ? "" : d)), h.display = "inline-block")), i.overflow && (h.overflow = "hidden", p.always(function() {
					h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
				})), l = !1;
				for (n in f) l || (v ? "hidden" in v && (g = v.hidden) : v = q.access(e, "fxshow", {
					display: c
				}), s && (v.hidden = !g), g && showHide([e], !0), p.done(function() {
					g || showHide([e]), q.remove(e, "fxshow");
					for (n in f) b.style(e, n, f[n])
				})), l = createTween(g ? v[n] : 0, n, p), n in v || (v[n] = l.start, g && (l.end = l.start, l.start = 0))
			}
		}
		function propFilter(e, t) {
			var i, n, o, s, r;
			for (i in e) if (n = b.camelCase(i), o = t[n], s = e[i], Array.isArray(s) && (o = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), (r = b.cssHooks[n]) && "expand" in r) {
				s = r.expand(s), delete e[n];
				for (i in s) i in e || (e[i] = s[i], t[i] = o)
			} else t[n] = o
		}
		function Animation(e, t, i) {
			var n, o, s = 0,
				r = Animation.prefilters.length,
				a = b.Deferred().always(function() {
					delete l.elem
				}),
				l = function() {
					if (o) return !1;
					for (var t = ye || createFxNow(), i = Math.max(0, c.startTime + c.duration - t), n = i / c.duration || 0, s = 1 - n, r = 0, l = c.tweens.length; r < l; r++) c.tweens[r].run(s);
					return a.notifyWith(e, [c, s, i]), s < 1 && l ? i : (l || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
				},
				c = a.promise({
					elem: e,
					props: b.extend({}, t),
					opts: b.extend(!0, {
						specialEasing: {},
						easing: b.easing._default
					}, i),
					originalProperties: t,
					originalOptions: i,
					startTime: ye || createFxNow(),
					duration: i.duration,
					tweens: [],
					createTween: function(t, i) {
						var n = b.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
						return c.tweens.push(n), n
					},
					stop: function(t) {
						var i = 0,
							n = t ? c.tweens.length : 0;
						if (o) return this;
						for (o = !0; i < n; i++) c.tweens[i].run(1);
						return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
					}
				}),
				d = c.props;
			for (propFilter(d, c.opts.specialEasing); s < r; s++) if (n = Animation.prefilters[s].call(c, e, d, c.opts)) return b.isFunction(n.stop) && (b._queueHooks(c.elem, c.opts.queue).stop = b.proxy(n.stop, n)), n;
			return b.map(d, createTween, c), b.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), b.fx.timer(b.extend(l, {
				elem: e,
				anim: c,
				queue: c.opts.queue
			})), c
		}
		function stripAndCollapse(e) {
			return (e.match(I) || []).join(" ")
		}
		function getClass(e) {
			return e.getAttribute && e.getAttribute("class") || ""
		}
		function buildParams(e, t, i, n) {
			var o;
			if (Array.isArray(t)) b.each(t, function(t, o) {
				i || Ne.test(e) ? n(e, o) : buildParams(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, i, n)
			});
			else if (i || "object" !== b.type(t)) n(e, t);
			else for (o in t) buildParams(e + "[" + o + "]", t[o], i, n)
		}
		function addToPrefiltersOrTransports(e) {
			return function(t, i) {
				"string" != typeof t && (i = t, t = "*");
				var n, o = 0,
					s = t.toLowerCase().match(I) || [];
				if (b.isFunction(i)) for (; n = s[o++];)"+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
			}
		}
		function inspectPrefiltersOrTransports(e, t, i, n) {
			function inspect(r) {
				var a;
				return o[r] = !0, b.each(e[r] || [], function(e, r) {
					var l = r(t, i, n);
					return "string" != typeof l || s || o[l] ? s ? !(a = l) : void 0 : (t.dataTypes.unshift(l), inspect(l), !1)
				}), a
			}
			var o = {},
				s = e === We;
			return inspect(t.dataTypes[0]) || !o["*"] && inspect("*")
		}
		function ajaxExtend(e, t) {
			var i, n, o = b.ajaxSettings.flatOptions || {};
			for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
			return n && b.extend(!0, e, n), e
		}
		function ajaxHandleResponses(e, t, i) {
			for (var n, o, s, r, a = e.contents, l = e.dataTypes;
			"*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
			if (n) for (o in a) if (a[o] && a[o].test(n)) {
				l.unshift(o);
				break
			}
			if (l[0] in i) s = l[0];
			else {
				for (o in i) {
					if (!l[0] || e.converters[o + " " + l[0]]) {
						s = o;
						break
					}
					r || (r = o)
				}
				s = s || r
			}
			if (s) return s !== l[0] && l.unshift(s), i[s]
		}
		function ajaxConvert(e, t, i, n) {
			var o, s, r, a, l, c = {},
				d = e.dataTypes.slice();
			if (d[1]) for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
			for (s = d.shift(); s;) if (e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = d.shift()) if ("*" === s) s = l;
			else if ("*" !== l && l !== s) {
				if (!(r = c[l + " " + s] || c["* " + s])) for (o in c) if (a = o.split(" "), a[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
					!0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], d.unshift(a[1]));
					break
				}
				if (!0 !== r) if (r && e.throws) t = r(t);
				else try {
					t = r(t)
				} catch (e) {
					return {
						state: "parsererror",
						error: r ? e : "No conversion from " + l + " to " + s
					}
				}
			}
			return {
				state: "success",
				data: t
			}
		}
		var r = [],
			a = i.document,
			l = Object.getPrototypeOf,
			c = r.slice,
			d = r.concat,
			u = r.push,
			p = r.indexOf,
			f = {},
			h = f.toString,
			g = f.hasOwnProperty,
			v = g.toString,
			m = v.call(Object),
			y = {},
			b = function(e, t) {
				return new b.fn.init(e, t)
			},
			w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			T = /^-ms-/,
			x = /-([a-z])/g,
			k = function(e, t) {
				return t.toUpperCase()
			};
		b.fn = b.prototype = {
			jquery: "3.2.1",
			constructor: b,
			length: 0,
			toArray: function() {
				return c.call(this)
			},
			get: function(e) {
				return null == e ? c.call(this) : e < 0 ? this[e + this.length] : this[e]
			},
			pushStack: function(e) {
				var t = b.merge(this.constructor(), e);
				return t.prevObject = this, t
			},
			each: function(e) {
				return b.each(this, e)
			},
			map: function(e) {
				return this.pushStack(b.map(this, function(t, i) {
					return e.call(t, i, t)
				}))
			},
			slice: function() {
				return this.pushStack(c.apply(this, arguments))
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			eq: function(e) {
				var t = this.length,
					i = +e + (e < 0 ? t : 0);
				return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
			},
			end: function() {
				return this.prevObject || this.constructor()
			},
			push: u,
			sort: r.sort,
			splice: r.splice
		}, b.extend = b.fn.extend = function() {
			var e, t, i, n, o, s, r = arguments[0] || {},
				a = 1,
				l = arguments.length,
				c = !1;
			for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || b.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++) if (null != (e = arguments[a])) for (t in e) i = r[t], n = e[t], r !== n && (c && n && (b.isPlainObject(n) || (o = Array.isArray(n))) ? (o ? (o = !1, s = i && Array.isArray(i) ? i : []) : s = i && b.isPlainObject(i) ? i : {}, r[t] = b.extend(c, s, n)) : void 0 !== n && (r[t] = n));
			return r
		}, b.extend({
			expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function(e) {
				throw new Error(e)
			},
			noop: function() {},
			isFunction: function(e) {
				return "function" === b.type(e)
			},
			isWindow: function(e) {
				return null != e && e === e.window
			},
			isNumeric: function(e) {
				var t = b.type(e);
				return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
			},
			isPlainObject: function(e) {
				var t, i;
				return !(!e || "[object Object]" !== h.call(e)) && (!(t = l(e)) || "function" == typeof(i = g.call(t, "constructor") && t.constructor) && v.call(i) === m)
			},
			isEmptyObject: function(e) {
				var t;
				for (t in e) return !1;
				return !0
			},
			type: function(e) {
				return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[h.call(e)] || "object" : typeof e
			},
			globalEval: function(e) {
				DOMEval(e)
			},
			camelCase: function(e) {
				return e.replace(T, "ms-").replace(x, k)
			},
			each: function(e, t) {
				var i, n = 0;
				if (isArrayLike(e)) for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
				else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
				return e
			},
			trim: function(e) {
				return null == e ? "" : (e + "").replace(w, "")
			},
			makeArray: function(e, t) {
				var i = t || [];
				return null != e && (isArrayLike(Object(e)) ? b.merge(i, "string" == typeof e ? [e] : e) : u.call(i, e)), i
			},
			inArray: function(e, t, i) {
				return null == t ? -1 : p.call(t, e, i)
			},
			merge: function(e, t) {
				for (var i = +t.length, n = 0, o = e.length; n < i; n++) e[o++] = t[n];
				return e.length = o, e
			},
			grep: function(e, t, i) {
				for (var n = [], o = 0, s = e.length, r = !i; o < s; o++)!t(e[o], o) !== r && n.push(e[o]);
				return n
			},
			map: function(e, t, i) {
				var n, o, s = 0,
					r = [];
				if (isArrayLike(e)) for (n = e.length; s < n; s++) null != (o = t(e[s], s, i)) && r.push(o);
				else for (s in e) null != (o = t(e[s], s, i)) && r.push(o);
				return d.apply([], r)
			},
			guid: 1,
			proxy: function(e, t) {
				var i, n, o;
				if ("string" == typeof t && (i = e[t], t = e, e = i), b.isFunction(e)) return n = c.call(arguments, 2), o = function() {
					return e.apply(t || this, n.concat(c.call(arguments)))
				}, o.guid = e.guid = e.guid || b.guid++, o
			},
			now: Date.now,
			support: y
		}), "function" == typeof Symbol && (b.fn[Symbol.iterator] = r[Symbol.iterator]), b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
			f["[object " + t + "]"] = t.toLowerCase()
		});
		var S = function(e) {
				function Sizzle(e, t, n, o) {
					var s, a, c, d, u, h, m, y = t && t.ownerDocument,
						x = t ? t.nodeType : 9;
					if (n = n || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return n;
					if (!o && ((t ? t.ownerDocument || t : T) !== f && p(t), t = t || f, g)) {
						if (11 !== x && (u = J.exec(e))) if (s = u[1]) {
							if (9 === x) {
								if (!(c = t.getElementById(s))) return n;
								if (c.id === s) return n.push(c), n
							} else if (y && (c = y.getElementById(s)) && b(t, c) && c.id === s) return n.push(c), n
						} else {
							if (u[2]) return O.apply(n, t.getElementsByTagName(e)), n;
							if ((s = u[3]) && i.getElementsByClassName && t.getElementsByClassName) return O.apply(n, t.getElementsByClassName(s)), n
						}
						if (i.qsa && !$[e + " "] && (!v || !v.test(e))) {
							if (1 !== x) y = t, m = e;
							else if ("object" !== t.nodeName.toLowerCase()) {
								for ((d = t.getAttribute("id")) ? d = d.replace(te, ie) : t.setAttribute("id", d = w), h = r(e), a = h.length; a--;) h[a] = "#" + d + " " + toSelector(h[a]);
								m = h.join(","), y = K.test(e) && testContext(t.parentNode) || t
							}
							if (m) try {
								return O.apply(n, y.querySelectorAll(m)), n
							} catch (e) {} finally {
								d === w && t.removeAttribute("id")
							}
						}
					}
					return l(e.replace(R, "$1"), t, n, o)
				}
				function createCache() {
					function cache(t, i) {
						return e.push(t + " ") > n.cacheLength && delete cache[e.shift()], cache[t + " "] = i
					}
					var e = [];
					return cache
				}
				function markFunction(e) {
					return e[w] = !0, e
				}
				function assert(e) {
					var t = f.createElement("fieldset");
					try {
						return !!e(t)
					} catch (e) {
						return !1
					} finally {
						t.parentNode && t.parentNode.removeChild(t), t = null
					}
				}
				function addHandle(e, t) {
					for (var i = e.split("|"), o = i.length; o--;) n.attrHandle[i[o]] = t
				}
				function siblingCheck(e, t) {
					var i = t && e,
						n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
					if (n) return n;
					if (i) for (; i = i.nextSibling;) if (i === t) return -1;
					return e ? 1 : -1
				}
				function createDisabledPseudo(e) {
					return function(t) {
						return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e
					}
				}
				function createPositionalPseudo(e) {
					return markFunction(function(t) {
						return t = +t, markFunction(function(i, n) {
							for (var o, s = e([], i.length, t), r = s.length; r--;) i[o = s[r]] && (i[o] = !(n[o] = i[o]))
						})
					})
				}
				function testContext(e) {
					return e && void 0 !== e.getElementsByTagName && e
				}
				function setFilters() {}
				function toSelector(e) {
					for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
					return n
				}
				function addCombinator(e, t, i) {
					var n = t.dir,
						o = t.next,
						s = o || n,
						r = i && "parentNode" === s,
						a = k++;
					return t.first ?
					function(t, i, o) {
						for (; t = t[n];) if (1 === t.nodeType || r) return e(t, i, o);
						return !1
					} : function(t, i, l) {
						var c, d, u, p = [x, a];
						if (l) {
							for (; t = t[n];) if ((1 === t.nodeType || r) && e(t, i, l)) return !0
						} else for (; t = t[n];) if (1 === t.nodeType || r) if (u = t[w] || (t[w] = {}), d = u[t.uniqueID] || (u[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[n] || t;
						else {
							if ((c = d[s]) && c[0] === x && c[1] === a) return p[2] = c[2];
							if (d[s] = p, p[2] = e(t, i, l)) return !0
						}
						return !1
					}
				}
				function elementMatcher(e) {
					return e.length > 1 ?
					function(t, i, n) {
						for (var o = e.length; o--;) if (!e[o](t, i, n)) return !1;
						return !0
					} : e[0]
				}
				function multipleContexts(e, t, i) {
					for (var n = 0, o = t.length; n < o; n++) Sizzle(e, t[n], i);
					return i
				}
				function condense(e, t, i, n, o) {
					for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++)(s = e[a]) && (i && !i(s, n, o) || (r.push(s), c && t.push(a)));
					return r
				}
				function setMatcher(e, t, i, n, o, s) {
					return n && !n[w] && (n = setMatcher(n)), o && !o[w] && (o = setMatcher(o, s)), markFunction(function(s, r, a, l) {
						var c, d, u, p = [],
							f = [],
							h = r.length,
							g = s || multipleContexts(t || "*", a.nodeType ? [a] : a, []),
							v = !e || !s && t ? g : condense(g, p, e, a, l),
							m = i ? o || (s ? e : h || n) ? [] : r : v;
						if (i && i(v, m, a, l), n) for (c = condense(m, f), n(c, [], a, l), d = c.length; d--;)(u = c[d]) && (m[f[d]] = !(v[f[d]] = u));
						if (s) {
							if (o || e) {
								if (o) {
									for (c = [], d = m.length; d--;)(u = m[d]) && c.push(v[d] = u);
									o(null, m = [], c, l)
								}
								for (d = m.length; d--;)(u = m[d]) && (c = o ? I(s, u) : p[d]) > -1 && (s[c] = !(r[c] = u))
							}
						} else m = condense(m === r ? m.splice(h, m.length) : m), o ? o(null, r, m, l) : O.apply(r, m)
					})
				}
				function matcherFromTokens(e) {
					for (var t, i, o, s = e.length, r = n.relative[e[0].type], a = r || n.relative[" "], l = r ? 1 : 0, d = addCombinator(function(e) {
						return e === t
					}, a, !0), u = addCombinator(function(e) {
						return I(t, e) > -1
					}, a, !0), p = [function(e, i, n) {
						var o = !r && (n || i !== c) || ((t = i).nodeType ? d(e, i, n) : u(e, i, n));
						return t = null, o
					}]; l < s; l++) if (i = n.relative[e[l].type]) p = [addCombinator(elementMatcher(p), i)];
					else {
						if (i = n.filter[e[l].type].apply(null, e[l].matches), i[w]) {
							for (o = ++l; o < s && !n.relative[e[o].type]; o++);
							return setMatcher(l > 1 && elementMatcher(p), l > 1 && toSelector(e.slice(0, l - 1).concat({
								value: " " === e[l - 2].type ? "*" : ""
							})).replace(R, "$1"), i, l < o && matcherFromTokens(e.slice(l, o)), o < s && matcherFromTokens(e = e.slice(o)), o < s && toSelector(e))
						}
						p.push(i)
					}
					return elementMatcher(p)
				}
				function matcherFromGroupMatchers(e, t) {
					var i = t.length > 0,
						o = e.length > 0,
						s = function(s, r, a, l, d) {
							var u, h, v, m = 0,
								y = "0",
								b = s && [],
								w = [],
								T = c,
								k = s || o && n.find.TAG("*", d),
								S = x += null == T ? 1 : Math.random() || .1,
								C = k.length;
							for (d && (c = r === f || r || d); y !== C && null != (u = k[y]); y++) {
								if (o && u) {
									for (h = 0, r || u.ownerDocument === f || (p(u), a = !g); v = e[h++];) if (v(u, r || f, a)) {
										l.push(u);
										break
									}
									d && (x = S)
								}
								i && ((u = !v && u) && m--, s && b.push(u))
							}
							if (m += y, i && y !== m) {
								for (h = 0; v = t[h++];) v(b, w, r, a);
								if (s) {
									if (m > 0) for (; y--;) b[y] || w[y] || (w[y] = P.call(l));
									w = condense(w)
								}
								O.apply(l, w), d && !s && w.length > 0 && m + t.length > 1 && Sizzle.uniqueSort(l)
							}
							return d && (x = S, c = T), b
						};
					return i ? markFunction(s) : s
				}
				var t, i, n, o, s, r, a, l, c, d, u, p, f, h, g, v, m, y, b, w = "sizzle" + 1 * new Date,
					T = e.document,
					x = 0,
					k = 0,
					S = createCache(),
					C = createCache(),
					$ = createCache(),
					A = function(e, t) {
						return e === t && (u = !0), 0
					},
					E = {}.hasOwnProperty,
					D = [],
					P = D.pop,
					N = D.push,
					O = D.push,
					j = D.slice,
					I = function(e, t) {
						for (var i = 0, n = e.length; i < n; i++) if (e[i] === t) return i;
						return -1
					},
					H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
					L = "[\\x20\\t\\r\\n\\f]",
					F = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
					M = "\\[" + L + "*(" + F + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + L + "*\\]",
					q = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
					z = new RegExp(L + "+", "g"),
					R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
					_ = new RegExp("^" + L + "*," + L + "*"),
					W = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
					U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
					B = new RegExp(q),
					X = new RegExp("^" + F + "$"),
					V = {
						ID: new RegExp("^#(" + F + ")"),
						CLASS: new RegExp("^\\.(" + F + ")"),
						TAG: new RegExp("^(" + F + "|[*])"),
						ATTR: new RegExp("^" + M),
						PSEUDO: new RegExp("^" + q),
						CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
						bool: new RegExp("^(?:" + H + ")$", "i"),
						needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
					},
					Y = /^(?:input|select|textarea|button)$/i,
					G = /^h\d$/i,
					Q = /^[^{]+\{\s*\[native \w/,
					J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
					K = /[+~]/,
					Z = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
					ee = function(e, t, i) {
						var n = "0x" + t - 65536;
						return n !== n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
					},
					te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
					ie = function(e, t) {
						return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
					},
					ne = function() {
						p()
					},
					oe = addCombinator(function(e) {
						return !0 === e.disabled && ("form" in e || "label" in e)
					}, {
						dir: "parentNode",
						next: "legend"
					});
				try {
					O.apply(D = j.call(T.childNodes), T.childNodes), D[T.childNodes.length].nodeType
				} catch (e) {
					O = {
						apply: D.length ?
						function(e, t) {
							N.apply(e, j.call(t))
						} : function(e, t) {
							for (var i = e.length, n = 0; e[i++] = t[n++];);
							e.length = i - 1
						}
					}
				}
				i = Sizzle.support = {}, s = Sizzle.isXML = function(e) {
					var t = e && (e.ownerDocument || e).documentElement;
					return !!t && "HTML" !== t.nodeName
				}, p = Sizzle.setDocument = function(e) {
					var t, o, r = e ? e.ownerDocument || e : T;
					return r !== f && 9 === r.nodeType && r.documentElement ? (f = r, h = f.documentElement, g = !s(f), T !== f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ne, !1) : o.attachEvent && o.attachEvent("onunload", ne)), i.attributes = assert(function(e) {
						return e.className = "i", !e.getAttribute("className")
					}), i.getElementsByTagName = assert(function(e) {
						return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
					}), i.getElementsByClassName = Q.test(f.getElementsByClassName), i.getById = assert(function(e) {
						return h.appendChild(e).id = w, !f.getElementsByName || !f.getElementsByName(w).length
					}), i.getById ? (n.filter.ID = function(e) {
						var t = e.replace(Z, ee);
						return function(e) {
							return e.getAttribute("id") === t
						}
					}, n.find.ID = function(e, t) {
						if (void 0 !== t.getElementById && g) {
							var i = t.getElementById(e);
							return i ? [i] : []
						}
					}) : (n.filter.ID = function(e) {
						var t = e.replace(Z, ee);
						return function(e) {
							var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
							return i && i.value === t
						}
					}, n.find.ID = function(e, t) {
						if (void 0 !== t.getElementById && g) {
							var i, n, o, s = t.getElementById(e);
							if (s) {
								if ((i = s.getAttributeNode("id")) && i.value === e) return [s];
								for (o = t.getElementsByName(e), n = 0; s = o[n++];) if ((i = s.getAttributeNode("id")) && i.value === e) return [s]
							}
							return []
						}
					}), n.find.TAG = i.getElementsByTagName ?
					function(e, t) {
						return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0
					} : function(e, t) {
						var i, n = [],
							o = 0,
							s = t.getElementsByTagName(e);
						if ("*" === e) {
							for (; i = s[o++];) 1 === i.nodeType && n.push(i);
							return n
						}
						return s
					}, n.find.CLASS = i.getElementsByClassName &&
					function(e, t) {
						if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
					}, m = [], v = [], (i.qsa = Q.test(f.querySelectorAll)) && (assert(function(e) {
						h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + L + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + L + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + w + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || v.push(".#.+[+~]")
					}), assert(function(e) {
						e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
						var t = f.createElement("input");
						t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + L + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
					})), (i.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && assert(function(e) {
						i.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), m.push("!=", q)
					}), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), t = Q.test(h.compareDocumentPosition), b = t || Q.test(h.contains) ?
					function(e, t) {
						var i = 9 === e.nodeType ? e.documentElement : e,
							n = t && t.parentNode;
						return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
					} : function(e, t) {
						if (t) for (; t = t.parentNode;) if (t === e) return !0;
						return !1
					}, A = t ?
					function(e, t) {
						if (e === t) return u = !0, 0;
						var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
						return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === f || e.ownerDocument === T && b(T, e) ? -1 : t === f || t.ownerDocument === T && b(T, t) ? 1 : d ? I(d, e) - I(d, t) : 0 : 4 & n ? -1 : 1)
					} : function(e, t) {
						if (e === t) return u = !0, 0;
						var i, n = 0,
							o = e.parentNode,
							s = t.parentNode,
							r = [e],
							a = [t];
						if (!o || !s) return e === f ? -1 : t === f ? 1 : o ? -1 : s ? 1 : d ? I(d, e) - I(d, t) : 0;
						if (o === s) return siblingCheck(e, t);
						for (i = e; i = i.parentNode;) r.unshift(i);
						for (i = t; i = i.parentNode;) a.unshift(i);
						for (; r[n] === a[n];) n++;
						return n ? siblingCheck(r[n], a[n]) : r[n] === T ? -1 : a[n] === T ? 1 : 0
					}, f) : f
				}, Sizzle.matches = function(e, t) {
					return Sizzle(e, null, null, t)
				}, Sizzle.matchesSelector = function(e, t) {
					if ((e.ownerDocument || e) !== f && p(e), t = t.replace(U, "='$1']"), i.matchesSelector && g && !$[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))) try {
						var n = y.call(e, t);
						if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
					} catch (e) {}
					return Sizzle(t, f, null, [e]).length > 0
				}, Sizzle.contains = function(e, t) {
					return (e.ownerDocument || e) !== f && p(e), b(e, t)
				}, Sizzle.attr = function(e, t) {
					(e.ownerDocument || e) !== f && p(e);
					var o = n.attrHandle[t.toLowerCase()],
						s = o && E.call(n.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
					return void 0 !== s ? s : i.attributes || !g ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
				}, Sizzle.escape = function(e) {
					return (e + "").replace(te, ie)
				}, Sizzle.error = function(e) {
					throw new Error("Syntax error, unrecognized expression: " + e)
				}, Sizzle.uniqueSort = function(e) {
					var t, n = [],
						o = 0,
						s = 0;
					if (u = !i.detectDuplicates, d = !i.sortStable && e.slice(0), e.sort(A), u) {
						for (; t = e[s++];) t === e[s] && (o = n.push(s));
						for (; o--;) e.splice(n[o], 1)
					}
					return d = null, e
				}, o = Sizzle.getText = function(e) {
					var t, i = "",
						n = 0,
						s = e.nodeType;
					if (s) {
						if (1 === s || 9 === s || 11 === s) {
							if ("string" == typeof e.textContent) return e.textContent;
							for (e = e.firstChild; e; e = e.nextSibling) i += o(e)
						} else if (3 === s || 4 === s) return e.nodeValue
					} else for (; t = e[n++];) i += o(t);
					return i
				}, n = Sizzle.selectors = {
					cacheLength: 50,
					createPseudo: markFunction,
					match: V,
					attrHandle: {},
					find: {},
					relative: {
						">": {
							dir: "parentNode",
							first: !0
						},
						" ": {
							dir: "parentNode"
						},
						"+": {
							dir: "previousSibling",
							first: !0
						},
						"~": {
							dir: "previousSibling"
						}
					},
					preFilter: {
						ATTR: function(e) {
							return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
						},
						CHILD: function(e) {
							return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || Sizzle.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Sizzle.error(e[0]), e
						},
						PSEUDO: function(e) {
							var t, i = !e[6] && e[2];
							return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && B.test(i) && (t = r(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
						}
					},
					filter: {
						TAG: function(e) {
							var t = e.replace(Z, ee).toLowerCase();
							return "*" === e ?
							function() {
								return !0
							} : function(e) {
								return e.nodeName && e.nodeName.toLowerCase() === t
							}
						},
						CLASS: function(e) {
							var t = S[e + " "];
							return t || (t = new RegExp("(^|" + L + ")" + e + "(" + L + "|$)")) && S(e, function(e) {
								return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
							})
						},
						ATTR: function(e, t, i) {
							return function(n) {
								var o = Sizzle.attr(n, e);
								return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.slice(-i.length) === i : "~=" === t ? (" " + o.replace(z, " ") + " ").indexOf(i) > -1 : "|=" === t && (o === i || o.slice(0, i.length + 1) === i + "-"))
							}
						},
						CHILD: function(e, t, i, n, o) {
							var s = "nth" !== e.slice(0, 3),
								r = "last" !== e.slice(-4),
								a = "of-type" === t;
							return 1 === n && 0 === o ?
							function(e) {
								return !!e.parentNode
							} : function(t, i, l) {
								var c, d, u, p, f, h, g = s !== r ? "nextSibling" : "previousSibling",
									v = t.parentNode,
									m = a && t.nodeName.toLowerCase(),
									y = !l && !a,
									b = !1;
								if (v) {
									if (s) {
										for (; g;) {
											for (p = t; p = p[g];) if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
											h = g = "only" === e && !h && "nextSibling"
										}
										return !0
									}
									if (h = [r ? v.firstChild : v.lastChild], r && y) {
										for (p = v, u = p[w] || (p[w] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), c = d[e] || [], f = c[0] === x && c[1], b = f && c[2], p = f && v.childNodes[f]; p = ++f && p && p[g] || (b = f = 0) || h.pop();) if (1 === p.nodeType && ++b && p === t) {
											d[e] = [x, f, b];
											break
										}
									} else if (y && (p = t, u = p[w] || (p[w] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), c = d[e] || [], f = c[0] === x && c[1], b = f), !1 === b) for (;
									(p = ++f && p && p[g] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++b || (y && (u = p[w] || (p[w] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), d[e] = [x, b]), p !== t)););
									return (b -= o) === n || b % n == 0 && b / n >= 0
								}
							}
						},
						PSEUDO: function(e, t) {
							var i, o = n.pseudos[e] || n.setFilters[e.toLowerCase()] || Sizzle.error("unsupported pseudo: " + e);
							return o[w] ? o(t) : o.length > 1 ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? markFunction(function(e, i) {
								for (var n, s = o(e, t), r = s.length; r--;) n = I(e, s[r]), e[n] = !(i[n] = s[r])
							}) : function(e) {
								return o(e, 0, i)
							}) : o
						}
					},
					pseudos: {
						not: markFunction(function(e) {
							var t = [],
								i = [],
								n = a(e.replace(R, "$1"));
							return n[w] ? markFunction(function(e, t, i, o) {
								for (var s, r = n(e, null, o, []), a = e.length; a--;)(s = r[a]) && (e[a] = !(t[a] = s))
							}) : function(e, o, s) {
								return t[0] = e, n(t, null, s, i), t[0] = null, !i.pop()
							}
						}),
						has: markFunction(function(e) {
							return function(t) {
								return Sizzle(e, t).length > 0
							}
						}),
						contains: markFunction(function(e) {
							return e = e.replace(Z, ee), function(t) {
								return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
							}
						}),
						lang: markFunction(function(e) {
							return X.test(e || "") || Sizzle.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function(t) {
								var i;
								do {
									if (i = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
								} while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
						}),
						target: function(t) {
							var i = e.location && e.location.hash;
							return i && i.slice(1) === t.id
						},
						root: function(e) {
							return e === h
						},
						focus: function(e) {
							return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
						},
						enabled: createDisabledPseudo(!1),
						disabled: createDisabledPseudo(!0),
						checked: function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && !! e.checked || "option" === t && !! e.selected
						},
						selected: function(e) {
							return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
						},
						empty: function(e) {
							for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
							return !0
						},
						parent: function(e) {
							return !n.pseudos.empty(e)
						},
						header: function(e) {
							return G.test(e.nodeName)
						},
						input: function(e) {
							return Y.test(e.nodeName)
						},
						button: function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && "button" === e.type || "button" === t
						},
						text: function(e) {
							var t;
							return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
						},
						first: createPositionalPseudo(function() {
							return [0]
						}),
						last: createPositionalPseudo(function(e, t) {
							return [t - 1]
						}),
						eq: createPositionalPseudo(function(e, t, i) {
							return [i < 0 ? i + t : i]
						}),
						even: createPositionalPseudo(function(e, t) {
							for (var i = 0; i < t; i += 2) e.push(i);
							return e
						}),
						odd: createPositionalPseudo(function(e, t) {
							for (var i = 1; i < t; i += 2) e.push(i);
							return e
						}),
						lt: createPositionalPseudo(function(e, t, i) {
							for (var n = i < 0 ? i + t : i; --n >= 0;) e.push(n);
							return e
						}),
						gt: createPositionalPseudo(function(e, t, i) {
							for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
							return e
						})
					}
				}, n.pseudos.nth = n.pseudos.eq;
				for (t in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) n.pseudos[t] = function(e) {
					return function(t) {
						return "input" === t.nodeName.toLowerCase() && t.type === e
					}
				}(t);
				for (t in {
					submit: !0,
					reset: !0
				}) n.pseudos[t] = function(e) {
					return function(t) {
						var i = t.nodeName.toLowerCase();
						return ("input" === i || "button" === i) && t.type === e
					}
				}(t);
				return setFilters.prototype = n.filters = n.pseudos, n.setFilters = new setFilters, r = Sizzle.tokenize = function(e, t) {
					var i, o, s, r, a, l, c, d = C[e + " "];
					if (d) return t ? 0 : d.slice(0);
					for (a = e, l = [], c = n.preFilter; a;) {
						i && !(o = _.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(s = [])), i = !1, (o = W.exec(a)) && (i = o.shift(), s.push({
							value: i,
							type: o[0].replace(R, " ")
						}), a = a.slice(i.length));
						for (r in n.filter)!(o = V[r].exec(a)) || c[r] && !(o = c[r](o)) || (i = o.shift(), s.push({
							value: i,
							type: r,
							matches: o
						}), a = a.slice(i.length));
						if (!i) break
					}
					return t ? a.length : a ? Sizzle.error(e) : C(e, l).slice(0)
				}, a = Sizzle.compile = function(e, t) {
					var i, n = [],
						o = [],
						s = $[e + " "];
					if (!s) {
						for (t || (t = r(e)), i = t.length; i--;) s = matcherFromTokens(t[i]), s[w] ? n.push(s) : o.push(s);
						s = $(e, matcherFromGroupMatchers(o, n)), s.selector = e
					}
					return s
				}, l = Sizzle.select = function(e, t, i, o) {
					var s, l, c, d, u, p = "function" == typeof e && e,
						f = !o && r(e = p.selector || e);
					if (i = i || [], 1 === f.length) {
						if (l = f[0] = f[0].slice(0), l.length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && n.relative[l[1].type]) {
							if (!(t = (n.find.ID(c.matches[0].replace(Z, ee), t) || [])[0])) return i;
							p && (t = t.parentNode), e = e.slice(l.shift().value.length)
						}
						for (s = V.needsContext.test(e) ? 0 : l.length; s-- && (c = l[s], !n.relative[d = c.type]);) if ((u = n.find[d]) && (o = u(c.matches[0].replace(Z, ee), K.test(l[0].type) && testContext(t.parentNode) || t))) {
							if (l.splice(s, 1), !(e = o.length && toSelector(l))) return O.apply(i, o), i;
							break
						}
					}
					return (p || a(e, f))(o, t, !g, i, !t || K.test(e) && testContext(t.parentNode) || t), i
				}, i.sortStable = w.split("").sort(A).join("") === w, i.detectDuplicates = !! u, p(), i.sortDetached = assert(function(e) {
					return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
				}), assert(function(e) {
					return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
				}) || addHandle("type|href|height|width", function(e, t, i) {
					if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
				}), i.attributes && assert(function(e) {
					return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
				}) || addHandle("value", function(e, t, i) {
					if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
				}), assert(function(e) {
					return null == e.getAttribute("disabled")
				}) || addHandle(H, function(e, t, i) {
					var n;
					if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
				}), Sizzle
			}(i);
		b.find = S, b.expr = S.selectors, b.expr[":"] = b.expr.pseudos, b.uniqueSort = b.unique = S.uniqueSort, b.text = S.getText, b.isXMLDoc = S.isXML, b.contains = S.contains, b.escapeSelector = S.escape;
		var C = function(e, t, i) {
				for (var n = [], o = void 0 !== i;
				(e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
					if (o && b(e).is(i)) break;
					n.push(e)
				}
				return n
			},
			$ = function(e, t) {
				for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
				return i
			},
			A = b.expr.match.needsContext,
			E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
			D = /^.[^:#\[\.,]*$/;
		b.filter = function(e, t, i) {
			var n = t[0];
			return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? b.find.matchesSelector(n, e) ? [n] : [] : b.find.matches(e, b.grep(t, function(e) {
				return 1 === e.nodeType
			}))
		}, b.fn.extend({
			find: function(e) {
				var t, i, n = this.length,
					o = this;
				if ("string" != typeof e) return this.pushStack(b(e).filter(function() {
					for (t = 0; t < n; t++) if (b.contains(o[t], this)) return !0
				}));
				for (i = this.pushStack([]), t = 0; t < n; t++) b.find(e, o[t], i);
				return n > 1 ? b.uniqueSort(i) : i
			},
			filter: function(e) {
				return this.pushStack(winnow(this, e || [], !1))
			},
			not: function(e) {
				return this.pushStack(winnow(this, e || [], !0))
			},
			is: function(e) {
				return !!winnow(this, "string" == typeof e && A.test(e) ? b(e) : e || [], !1).length
			}
		});
		var P, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
		(b.fn.init = function(e, t, i) {
			var n, o;
			if (!e) return this;
			if (i = i || P, "string" == typeof e) {
				if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : N.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
				if (n[1]) {
					if (t = t instanceof b ? t[0] : t, b.merge(this, b.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), E.test(n[1]) && b.isPlainObject(t)) for (n in t) b.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
					return this
				}
				return o = a.getElementById(n[2]), o && (this[0] = o, this.length = 1), this
			}
			return e.nodeType ? (this[0] = e, this.length = 1, this) : b.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(b) : b.makeArray(e, this)
		}).prototype = b.fn, P = b(a);
		var O = /^(?:parents|prev(?:Until|All))/,
			j = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
		b.fn.extend({
			has: function(e) {
				var t = b(e, this),
					i = t.length;
				return this.filter(function() {
					for (var e = 0; e < i; e++) if (b.contains(this, t[e])) return !0
				})
			},
			closest: function(e, t) {
				var i, n = 0,
					o = this.length,
					s = [],
					r = "string" != typeof e && b(e);
				if (!A.test(e)) for (; n < o; n++) for (i = this[n]; i && i !== t; i = i.parentNode) if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && b.find.matchesSelector(i, e))) {
					s.push(i);
					break
				}
				return this.pushStack(s.length > 1 ? b.uniqueSort(s) : s)
			},
			index: function(e) {
				return e ? "string" == typeof e ? p.call(b(e), this[0]) : p.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function(e, t) {
				return this.pushStack(b.uniqueSort(b.merge(this.get(), b(e, t))))
			},
			addBack: function(e) {
				return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
			}
		}), b.each({
			parent: function(e) {
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents: function(e) {
				return C(e, "parentNode")
			},
			parentsUntil: function(e, t, i) {
				return C(e, "parentNode", i)
			},
			next: function(e) {
				return sibling(e, "nextSibling")
			},
			prev: function(e) {
				return sibling(e, "previousSibling")
			},
			nextAll: function(e) {
				return C(e, "nextSibling")
			},
			prevAll: function(e) {
				return C(e, "previousSibling")
			},
			nextUntil: function(e, t, i) {
				return C(e, "nextSibling", i)
			},
			prevUntil: function(e, t, i) {
				return C(e, "previousSibling", i)
			},
			siblings: function(e) {
				return $((e.parentNode || {}).firstChild, e)
			},
			children: function(e) {
				return $(e.firstChild)
			},
			contents: function(e) {
				return nodeName(e, "iframe") ? e.contentDocument : (nodeName(e, "template") && (e = e.content || e), b.merge([], e.childNodes))
			}
		}, function(e, t) {
			b.fn[e] = function(i, n) {
				var o = b.map(this, t, i);
				return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (o = b.filter(n, o)), this.length > 1 && (j[e] || b.uniqueSort(o), O.test(e) && o.reverse()), this.pushStack(o)
			}
		});
		var I = /[^\x20\t\r\n\f]+/g;
		b.Callbacks = function(e) {
			e = "string" == typeof e ? createOptions(e) : b.extend({}, e);
			var t, i, n, o, s = [],
				r = [],
				a = -1,
				l = function() {
					for (o = o || e.once, n = t = !0; r.length; a = -1) for (i = r.shift(); ++a < s.length;)!1 === s[a].apply(i[0], i[1]) && e.stopOnFalse && (a = s.length, i = !1);
					e.memory || (i = !1), t = !1, o && (s = i ? [] : "")
				},
				c = {
					add: function() {
						return s && (i && !t && (a = s.length - 1, r.push(i)), function add(t) {
							b.each(t, function(t, i) {
								b.isFunction(i) ? e.unique && c.has(i) || s.push(i) : i && i.length && "string" !== b.type(i) && add(i)
							})
						}(arguments), i && !t && l()), this
					},
					remove: function() {
						return b.each(arguments, function(e, t) {
							for (var i;
							(i = b.inArray(t, s, i)) > -1;) s.splice(i, 1), i <= a && a--
						}), this
					},
					has: function(e) {
						return e ? b.inArray(e, s) > -1 : s.length > 0
					},
					empty: function() {
						return s && (s = []), this
					},
					disable: function() {
						return o = r = [], s = i = "", this
					},
					disabled: function() {
						return !s
					},
					lock: function() {
						return o = r = [], i || t || (s = i = ""), this
					},
					locked: function() {
						return !!o
					},
					fireWith: function(e, i) {
						return o || (i = i || [], i = [e, i.slice ? i.slice() : i], r.push(i), t || l()), this
					},
					fire: function() {
						return c.fireWith(this, arguments), this
					},
					fired: function() {
						return !!n
					}
				};
			return c
		}, b.extend({
			Deferred: function(e) {
				var t = [
					["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2],
					["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"]
				],
					n = "pending",
					o = {
						state: function() {
							return n
						},
						always: function() {
							return s.done(arguments).fail(arguments), this
						},
						catch: function(e) {
							return o.then(null, e)
						},
						pipe: function() {
							var e = arguments;
							return b.Deferred(function(i) {
								b.each(t, function(t, n) {
									var o = b.isFunction(e[n[4]]) && e[n[4]];
									s[n[1]](function() {
										var e = o && o.apply(this, arguments);
										e && b.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, o ? [e] : arguments)
									})
								}), e = null
							}).promise()
						},
						then: function(e, n, o) {
							function resolve(e, t, n, o) {
								return function() {
									var r = this,
										a = arguments,
										l = function() {
											var i, l;
											if (!(e < s)) {
												if ((i = n.apply(r, a)) === t.promise()) throw new TypeError("Thenable self-resolution");
												l = i && ("object" == typeof i || "function" == typeof i) && i.then, b.isFunction(l) ? o ? l.call(i, resolve(s, t, Identity, o), resolve(s, t, Thrower, o)) : (s++, l.call(i, resolve(s, t, Identity, o), resolve(s, t, Thrower, o), resolve(s, t, Identity, t.notifyWith))) : (n !== Identity && (r = void 0, a = [i]), (o || t.resolveWith)(r, a))
											}
										},
										c = o ? l : function() {
											try {
												l()
											} catch (i) {
												b.Deferred.exceptionHook && b.Deferred.exceptionHook(i, c.stackTrace), e + 1 >= s && (n !== Thrower && (r = void 0, a = [i]), t.rejectWith(r, a))
											}
										};
									e ? c() : (b.Deferred.getStackHook && (c.stackTrace = b.Deferred.getStackHook()), i.setTimeout(c))
								}
							}
							var s = 0;
							return b.Deferred(function(i) {
								t[0][3].add(resolve(0, i, b.isFunction(o) ? o : Identity, i.notifyWith)), t[1][3].add(resolve(0, i, b.isFunction(e) ? e : Identity)), t[2][3].add(resolve(0, i, b.isFunction(n) ? n : Thrower))
							}).promise()
						},
						promise: function(e) {
							return null != e ? b.extend(e, o) : o
						}
					},
					s = {};
				return b.each(t, function(e, i) {
					var r = i[2],
						a = i[5];
					o[i[1]] = r.add, a && r.add(function() {
						n = a
					}, t[3 - e][2].disable, t[0][2].lock), r.add(i[3].fire), s[i[0]] = function() {
						return s[i[0] + "With"](this === s ? void 0 : this, arguments), this
					}, s[i[0] + "With"] = r.fireWith
				}), o.promise(s), e && e.call(s, s), s
			},
			when: function(e) {
				var t = arguments.length,
					i = t,
					n = Array(i),
					o = c.call(arguments),
					s = b.Deferred(),
					r = function(e) {
						return function(i) {
							n[e] = this, o[e] = arguments.length > 1 ? c.call(arguments) : i, --t || s.resolveWith(n, o)
						}
					};
				if (t <= 1 && (adoptValue(e, s.done(r(i)).resolve, s.reject, !t), "pending" === s.state() || b.isFunction(o[i] && o[i].then))) return s.then();
				for (; i--;) adoptValue(o[i], r(i), s.reject);
				return s.promise()
			}
		});
		var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
		b.Deferred.exceptionHook = function(e, t) {
			i.console && i.console.warn && e && H.test(e.name) && i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
		}, b.readyException = function(e) {
			i.setTimeout(function() {
				throw e
			})
		};
		var L = b.Deferred();
		b.fn.ready = function(e) {
			return L.then(e).
			catch (function(e) {
				b.readyException(e)
			}), this
		}, b.extend({
			isReady: !1,
			readyWait: 1,
			ready: function(e) {
				(!0 === e ? --b.readyWait : b.isReady) || (b.isReady = !0, !0 !== e && --b.readyWait > 0 || L.resolveWith(a, [b]))
			}
		}), b.ready.then = L.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? i.setTimeout(b.ready) : (a.addEventListener("DOMContentLoaded", completed), i.addEventListener("load", completed));
		var F = function(e, t, i, n, o, s, r) {
				var a = 0,
					l = e.length,
					c = null == i;
				if ("object" === b.type(i)) {
					o = !0;
					for (a in i) F(e, t, a, i[a], !0, s, r)
				} else if (void 0 !== n && (o = !0, b.isFunction(n) || (r = !0), c && (r ? (t.call(e, n), t = null) : (c = t, t = function(e, t, i) {
					return c.call(b(e), i)
				})), t)) for (; a < l; a++) t(e[a], i, r ? n : n.call(e[a], a, t(e[a], i)));
				return o ? e : c ? t.call(e) : l ? t(e[0], i) : s
			},
			M = function(e) {
				return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
			};
		Data.uid = 1, Data.prototype = {
			cache: function(e) {
				var t = e[this.expando];
				return t || (t = {}, M(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
					value: t,
					configurable: !0
				}))), t
			},
			set: function(e, t, i) {
				var n, o = this.cache(e);
				if ("string" == typeof t) o[b.camelCase(t)] = i;
				else for (n in t) o[b.camelCase(n)] = t[n];
				return o
			},
			get: function(e, t) {
				return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][b.camelCase(t)]
			},
			access: function(e, t, i) {
				return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
			},
			remove: function(e, t) {
				var i, n = e[this.expando];
				if (void 0 !== n) {
					if (void 0 !== t) {
						Array.isArray(t) ? t = t.map(b.camelCase) : (t = b.camelCase(t), t = t in n ? [t] : t.match(I) || []), i = t.length;
						for (; i--;) delete n[t[i]]
					}(void 0 === t || b.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
				}
			},
			hasData: function(e) {
				var t = e[this.expando];
				return void 0 !== t && !b.isEmptyObject(t)
			}
		};
		var q = new Data,
			z = new Data,
			R = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			_ = /[A-Z]/g;
		b.extend({
			hasData: function(e) {
				return z.hasData(e) || q.hasData(e)
			},
			data: function(e, t, i) {
				return z.access(e, t, i)
			},
			removeData: function(e, t) {
				z.remove(e, t)
			},
			_data: function(e, t, i) {
				return q.access(e, t, i)
			},
			_removeData: function(e, t) {
				q.remove(e, t)
			}
		}), b.fn.extend({
			data: function(e, t) {
				var i, n, o, s = this[0],
					r = s && s.attributes;
				if (void 0 === e) {
					if (this.length && (o = z.get(s), 1 === s.nodeType && !q.get(s, "hasDataAttrs"))) {
						for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = b.camelCase(n.slice(5)), dataAttr(s, n, o[n])));
						q.set(s, "hasDataAttrs", !0)
					}
					return o
				}
				return "object" == typeof e ? this.each(function() {
					z.set(this, e)
				}) : F(this, function(t) {
					var i;
					if (s && void 0 === t) {
						if (void 0 !== (i = z.get(s, e))) return i;
						if (void 0 !== (i = dataAttr(s, e))) return i
					} else this.each(function() {
						z.set(this, e, t)
					})
				}, null, t, arguments.length > 1, null, !0)
			},
			removeData: function(e) {
				return this.each(function() {
					z.remove(this, e)
				})
			}
		}), b.extend({
			queue: function(e, t, i) {
				var n;
				if (e) return t = (t || "fx") + "queue", n = q.get(e, t), i && (!n || Array.isArray(i) ? n = q.access(e, t, b.makeArray(i)) : n.push(i)), n || []
			},
			dequeue: function(e, t) {
				t = t || "fx";
				var i = b.queue(e, t),
					n = i.length,
					o = i.shift(),
					s = b._queueHooks(e, t),
					r = function() {
						b.dequeue(e, t)
					};
				"inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete s.stop, o.call(e, r, s)), !n && s && s.empty.fire()
			},
			_queueHooks: function(e, t) {
				var i = t + "queueHooks";
				return q.get(e, i) || q.access(e, i, {
					empty: b.Callbacks("once memory").add(function() {
						q.remove(e, [t + "queue", i])
					})
				})
			}
		}), b.fn.extend({
			queue: function(e, t) {
				var i = 2;
				return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? b.queue(this[0], e) : void 0 === t ? this : this.each(function() {
					var i = b.queue(this, e, t);
					b._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && b.dequeue(this, e)
				})
			},
			dequeue: function(e) {
				return this.each(function() {
					b.dequeue(this, e)
				})
			},
			clearQueue: function(e) {
				return this.queue(e || "fx", [])
			},
			promise: function(e, t) {
				var i, n = 1,
					o = b.Deferred(),
					s = this,
					r = this.length,
					a = function() {
						--n || o.resolveWith(s, [s])
					};
				for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(i = q.get(s[r], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
				return a(), o.promise(t)
			}
		});
		var W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			U = new RegExp("^(?:([+-])=|)(" + W + ")([a-z%]*)$", "i"),
			B = ["Top", "Right", "Bottom", "Left"],
			X = function(e, t) {
				return e = t || e, "none" === e.style.display || "" === e.style.display && b.contains(e.ownerDocument, e) && "none" === b.css(e, "display")
			},
			V = function(e, t, i, n) {
				var o, s, r = {};
				for (s in t) r[s] = e.style[s], e.style[s] = t[s];
				o = i.apply(e, n || []);
				for (s in t) e.style[s] = r[s];
				return o
			},
			Y = {};
		b.fn.extend({
			show: function() {
				return showHide(this, !0)
			},
			hide: function() {
				return showHide(this)
			},
			toggle: function(e) {
				return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
					X(this) ? b(this).show() : b(this).hide()
				})
			}
		});
		var G = /^(?:checkbox|radio)$/i,
			Q = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
			J = /^$|\/(?:java|ecma)script/i,
			K = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""]
			};
		K.optgroup = K.option, K.tbody = K.tfoot = K.colgroup = K.caption = K.thead, K.th = K.td;
		var Z = /<|&#?\w+;/;
		!
		function() {
			var e = a.createDocumentFragment(),
				t = e.appendChild(a.createElement("div")),
				i = a.createElement("input");
			i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), t.appendChild(i), y.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !! t.cloneNode(!0).lastChild.defaultValue
		}();
		var ee = a.documentElement,
			te = /^key/,
			ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
			ne = /^([^.]*)(?:\.(.+)|)/;
		b.event = {
			global: {},
			add: function(e, t, i, n, o) {
				var s, r, a, l, c, d, u, p, f, h, g, v = q.get(e);
				if (v) for (i.handler && (s = i, i = s.handler, o = s.selector), o && b.find.matchesSelector(ee, o), i.guid || (i.guid = b.guid++), (l = v.events) || (l = v.events = {}), (r = v.handle) || (r = v.handle = function(t) {
					return void 0 !== b && b.event.triggered !== t.type ? b.event.dispatch.apply(e, arguments) : void 0
				}), t = (t || "").match(I) || [""], c = t.length; c--;) a = ne.exec(t[c]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f && (u = b.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = b.event.special[f] || {}, d = b.extend({
					type: f,
					origType: g,
					data: n,
					handler: i,
					guid: i.guid,
					selector: o,
					needsContext: o && b.expr.match.needsContext.test(o),
					namespace: h.join(".")
				}, s), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, u.setup && !1 !== u.setup.call(e, n, h, r) || e.addEventListener && e.addEventListener(f, r)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), b.event.global[f] = !0)
			},
			remove: function(e, t, i, n, o) {
				var s, r, a, l, c, d, u, p, f, h, g, v = q.hasData(e) && q.get(e);
				if (v && (l = v.events)) {
					for (t = (t || "").match(I) || [""], c = t.length; c--;) if (a = ne.exec(t[c]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f) {
						for (u = b.event.special[f] || {}, f = (n ? u.delegateType : u.bindType) || f, p = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = p.length; s--;) d = p[s], !o && g !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (p.splice(s, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
						r && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, v.handle) || b.removeEvent(e, f, v.handle), delete l[f])
					} else for (f in l) b.event.remove(e, f + t[c], i, n, !0);
					b.isEmptyObject(l) && q.remove(e, "handle events")
				}
			},
			dispatch: function(e) {
				var t, i, n, o, s, r, a = b.event.fix(e),
					l = new Array(arguments.length),
					c = (q.get(this, "events") || {})[a.type] || [],
					d = b.event.special[a.type] || {};
				for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
				if (a.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, a)) {
					for (r = b.event.handlers.call(this, a, c), t = 0;
					(o = r[t++]) && !a.isPropagationStopped();) for (a.currentTarget = o.elem, i = 0;
					(s = o.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (n = ((b.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
					return d.postDispatch && d.postDispatch.call(this, a), a.result
				}
			},
			handlers: function(e, t) {
				var i, n, o, s, r, a = [],
					l = t.delegateCount,
					c = e.target;
				if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
					for (s = [], r = {}, i = 0; i < l; i++) n = t[i], o = n.selector + " ", void 0 === r[o] && (r[o] = n.needsContext ? b(o, this).index(c) > -1 : b.find(o, this, null, [c]).length), r[o] && s.push(n);
					s.length && a.push({
						elem: c,
						handlers: s
					})
				}
				return c = this, l < t.length && a.push({
					elem: c,
					handlers: t.slice(l)
				}), a
			},
			addProp: function(e, t) {
				Object.defineProperty(b.Event.prototype, e, {
					enumerable: !0,
					configurable: !0,
					get: b.isFunction(t) ?
					function() {
						if (this.originalEvent) return t(this.originalEvent)
					} : function() {
						if (this.originalEvent) return this.originalEvent[e]
					},
					set: function(t) {
						Object.defineProperty(this, e, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: t
						})
					}
				})
			},
			fix: function(e) {
				return e[b.expando] ? e : new b.Event(e)
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function() {
						if (this !== safeActiveElement() && this.focus) return this.focus(), !1
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function() {
						if (this === safeActiveElement() && this.blur) return this.blur(), !1
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function() {
						if ("checkbox" === this.type && this.click && nodeName(this, "input")) return this.click(), !1
					},
					_default: function(e) {
						return nodeName(e.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function(e) {
						void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
					}
				}
			}
		}, b.removeEvent = function(e, t, i) {
			e.removeEventListener && e.removeEventListener(t, i)
		}, b.Event = function(e, t) {
			if (!(this instanceof b.Event)) return new b.Event(e, t);
			e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? returnTrue : returnFalse, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && b.extend(this, t), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0
		}, b.Event.prototype = {
			constructor: b.Event,
			isDefaultPrevented: returnFalse,
			isPropagationStopped: returnFalse,
			isImmediatePropagationStopped: returnFalse,
			isSimulated: !1,
			preventDefault: function() {
				var e = this.originalEvent;
				this.isDefaultPrevented = returnTrue, e && !this.isSimulated && e.preventDefault()
			},
			stopPropagation: function() {
				var e = this.originalEvent;
				this.isPropagationStopped = returnTrue, e && !this.isSimulated && e.stopPropagation()
			},
			stopImmediatePropagation: function() {
				var e = this.originalEvent;
				this.isImmediatePropagationStopped = returnTrue, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
			}
		}, b.each({
			altKey: !0,
			bubbles: !0,
			cancelable: !0,
			changedTouches: !0,
			ctrlKey: !0,
			detail: !0,
			eventPhase: !0,
			metaKey: !0,
			pageX: !0,
			pageY: !0,
			shiftKey: !0,
			view: !0,
			char: !0,
			charCode: !0,
			key: !0,
			keyCode: !0,
			button: !0,
			buttons: !0,
			clientX: !0,
			clientY: !0,
			offsetX: !0,
			offsetY: !0,
			pointerId: !0,
			pointerType: !0,
			screenX: !0,
			screenY: !0,
			targetTouches: !0,
			toElement: !0,
			touches: !0,
			which: function(e) {
				var t = e.button;
				return null == e.which && te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ie.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
			}
		}, b.event.addProp), b.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function(e, t) {
			b.event.special[e] = {
				delegateType: t,
				bindType: t,
				handle: function(e) {
					var i, n = this,
						o = e.relatedTarget,
						s = e.handleObj;
					return o && (o === n || b.contains(n, o)) || (e.type = s.origType, i = s.handler.apply(this, arguments), e.type = t), i
				}
			}
		}), b.fn.extend({
			on: function(e, t, i, n) {
				return on(this, e, t, i, n)
			},
			one: function(e, t, i, n) {
				return on(this, e, t, i, n, 1)
			},
			off: function(e, t, i) {
				var n, o;
				if (e && e.preventDefault && e.handleObj) return n = e.handleObj, b(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
				if ("object" == typeof e) {
					for (o in e) this.off(o, t, e[o]);
					return this
				}
				return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = returnFalse), this.each(function() {
					b.event.remove(this, e, i, t)
				})
			}
		});
		var oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
			se = /<script|<style|<link/i,
			re = /checked\s*(?:[^=]|=\s*.checked.)/i,
			ae = /^true\/(.*)/,
			le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
		b.extend({
			htmlPrefilter: function(e) {
				return e.replace(oe, "<$1></$2>")
			},
			clone: function(e, t, i) {
				var n, o, s, r, a = e.cloneNode(!0),
					l = b.contains(e.ownerDocument, e);
				if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e))) for (r = getAll(a), s = getAll(e), n = 0, o = s.length; n < o; n++) fixInput(s[n], r[n]);
				if (t) if (i) for (s = s || getAll(e), r = r || getAll(a), n = 0, o = s.length; n < o; n++) cloneCopyEvent(s[n], r[n]);
				else cloneCopyEvent(e, a);
				return r = getAll(a, "script"), r.length > 0 && setGlobalEval(r, !l && getAll(e, "script")), a
			},
			cleanData: function(e) {
				for (var t, i, n, o = b.event.special, s = 0; void 0 !== (i = e[s]); s++) if (M(i)) {
					if (t = i[q.expando]) {
						if (t.events) for (n in t.events) o[n] ? b.event.remove(i, n) : b.removeEvent(i, n, t.handle);
						i[q.expando] = void 0
					}
					i[z.expando] && (i[z.expando] = void 0)
				}
			}
		}), b.fn.extend({
			detach: function(e) {
				return remove(this, e, !0)
			},
			remove: function(e) {
				return remove(this, e)
			},
			text: function(e) {
				return F(this, function(e) {
					return void 0 === e ? b.text(this) : this.empty().each(function() {
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
					})
				}, null, e, arguments.length)
			},
			append: function() {
				return domManip(this, arguments, function(e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						manipulationTarget(this, e).appendChild(e)
					}
				})
			},
			prepend: function() {
				return domManip(this, arguments, function(e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = manipulationTarget(this, e);
						t.insertBefore(e, t.firstChild)
					}
				})
			},
			before: function() {
				return domManip(this, arguments, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this)
				})
			},
			after: function() {
				return domManip(this, arguments, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
				})
			},
			empty: function() {
				for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (b.cleanData(getAll(e, !1)), e.textContent = "");
				return this
			},
			clone: function(e, t) {
				return e = null != e && e, t = null == t ? e : t, this.map(function() {
					return b.clone(this, e, t)
				})
			},
			html: function(e) {
				return F(this, function(e) {
					var t = this[0] || {},
						i = 0,
						n = this.length;
					if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
					if ("string" == typeof e && !se.test(e) && !K[(Q.exec(e) || ["", ""])[1].toLowerCase()]) {
						e = b.htmlPrefilter(e);
						try {
							for (; i < n; i++) t = this[i] || {}, 1 === t.nodeType && (b.cleanData(getAll(t, !1)), t.innerHTML = e);
							t = 0
						} catch (e) {}
					}
					t && this.empty().append(e)
				}, null, e, arguments.length)
			},
			replaceWith: function() {
				var e = [];
				return domManip(this, arguments, function(t) {
					var i = this.parentNode;
					b.inArray(this, e) < 0 && (b.cleanData(getAll(this)), i && i.replaceChild(t, this))
				}, e)
			}
		}), b.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(e, t) {
			b.fn[e] = function(e) {
				for (var i, n = [], o = b(e), s = o.length - 1, r = 0; r <= s; r++) i = r === s ? this : this.clone(!0), b(o[r])[t](i), u.apply(n, i.get());
				return this.pushStack(n)
			}
		});
		var ce = /^margin/,
			de = new RegExp("^(" + W + ")(?!px)[a-z%]+$", "i"),
			ue = function(e) {
				var t = e.ownerDocument.defaultView;
				return t && t.opener || (t = i), t.getComputedStyle(e)
			};
		!
		function() {
			function computeStyleTests() {
				if (r) {
					r.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", r.innerHTML = "", ee.appendChild(s);
					var a = i.getComputedStyle(r);
					e = "1%" !== a.top, o = "2px" === a.marginLeft, t = "4px" === a.width, r.style.marginRight = "50%", n = "4px" === a.marginRight, ee.removeChild(s), r = null
				}
			}
			var e, t, n, o, s = a.createElement("div"),
				r = a.createElement("div");
			r.style && (r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === r.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(r), b.extend(y, {
				pixelPosition: function() {
					return computeStyleTests(), e
				},
				boxSizingReliable: function() {
					return computeStyleTests(), t
				},
				pixelMarginRight: function() {
					return computeStyleTests(), n
				},
				reliableMarginLeft: function() {
					return computeStyleTests(), o
				}
			}))
		}();
		var pe = /^(none|table(?!-c[ea]).+)/,
			fe = /^--/,
			he = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			ge = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			ve = ["Webkit", "Moz", "ms"],
			me = a.createElement("div").style;
		b.extend({
			cssHooks: {
				opacity: {
					get: function(e, t) {
						if (t) {
							var i = curCSS(e, "opacity");
							return "" === i ? "1" : i
						}
					}
				}
			},
			cssNumber: {
				animationIterationCount: !0,
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {
				float: "cssFloat"
			},
			style: function(e, t, i, n) {
				if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
					var o, s, r, a = b.camelCase(t),
						l = fe.test(t),
						c = e.style;
					if (l || (t = finalPropName(a)), r = b.cssHooks[t] || b.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (o = r.get(e, !1, n)) ? o : c[t];
					s = typeof i, "string" === s && (o = U.exec(i)) && o[1] && (i = adjustCSS(e, t, o), s = "number"), null != i && i === i && ("number" === s && (i += o && o[3] || (b.cssNumber[a] ? "" : "px")), y.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (c[t] = "inherit"), r && "set" in r && void 0 === (i = r.set(e, i, n)) || (l ? c.setProperty(t, i) : c[t] = i))
				}
			},
			css: function(e, t, i, n) {
				var o, s, r, a = b.camelCase(t);
				return fe.test(t) || (t = finalPropName(a)), r = b.cssHooks[t] || b.cssHooks[a], r && "get" in r && (o = r.get(e, !0, i)), void 0 === o && (o = curCSS(e, t, n)), "normal" === o && t in ge && (o = ge[t]), "" === i || i ? (s = parseFloat(o), !0 === i || isFinite(s) ? s || 0 : o) : o
			}
		}), b.each(["height", "width"], function(e, t) {
			b.cssHooks[t] = {
				get: function(e, i, n) {
					if (i) return !pe.test(b.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? getWidthOrHeight(e, t, n) : V(e, he, function() {
						return getWidthOrHeight(e, t, n)
					})
				},
				set: function(e, i, n) {
					var o, s = n && ue(e),
						r = n && augmentWidthOrHeight(e, t, n, "border-box" === b.css(e, "boxSizing", !1, s), s);
					return r && (o = U.exec(i)) && "px" !== (o[3] || "px") && (e.style[t] = i, i = b.css(e, t)), setPositiveNumber(e, i, r)
				}
			}
		}), b.cssHooks.marginLeft = addGetHookIf(y.reliableMarginLeft, function(e, t) {
			if (t) return (parseFloat(curCSS(e, "marginLeft")) || e.getBoundingClientRect().left - V(e, {
				marginLeft: 0
			}, function() {
				return e.getBoundingClientRect().left
			})) + "px"
		}), b.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function(e, t) {
			b.cssHooks[e + t] = {
				expand: function(i) {
					for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) o[e + B[n] + t] = s[n] || s[n - 2] || s[0];
					return o
				}
			}, ce.test(e) || (b.cssHooks[e + t].set = setPositiveNumber)
		}), b.fn.extend({
			css: function(e, t) {
				return F(this, function(e, t, i) {
					var n, o, s = {},
						r = 0;
					if (Array.isArray(t)) {
						for (n = ue(e), o = t.length; r < o; r++) s[t[r]] = b.css(e, t[r], !1, n);
						return s
					}
					return void 0 !== i ? b.style(e, t, i) : b.css(e, t)
				}, e, t, arguments.length > 1)
			}
		}), b.Tween = Tween, Tween.prototype = {
			constructor: Tween,
			init: function(e, t, i, n, o, s) {
				this.elem = e, this.prop = i, this.easing = o || b.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (b.cssNumber[i] ? "" : "px")
			},
			cur: function() {
				var e = Tween.propHooks[this.prop];
				return e && e.get ? e.get(this) : Tween.propHooks._default.get(this)
			},
			run: function(e) {
				var t, i = Tween.propHooks[this.prop];
				return this.options.duration ? this.pos = t = b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Tween.propHooks._default.set(this), this
			}
		}, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = {
			_default: {
				get: function(e) {
					var t;
					return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
				},
				set: function(e) {
					b.fx.step[e.prop] ? b.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[b.cssProps[e.prop]] && !b.cssHooks[e.prop] ? e.elem[e.prop] = e.now : b.style(e.elem, e.prop, e.now + e.unit)
				}
			}
		}, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
			set: function(e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
			}
		}, b.easing = {
			linear: function(e) {
				return e
			},
			swing: function(e) {
				return .5 - Math.cos(e * Math.PI) / 2
			},
			_default: "swing"
		}, b.fx = Tween.prototype.init, b.fx.step = {};
		var ye, be, we = /^(?:toggle|show|hide)$/,
			Te = /queueHooks$/;
		b.Animation = b.extend(Animation, {
			tweeners: {
				"*": [function(e, t) {
					var i = this.createTween(e, t);
					return adjustCSS(i.elem, e, U.exec(t), i), i
				}]
			},
			tweener: function(e, t) {
				b.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(I);
				for (var i, n = 0, o = e.length; n < o; n++) i = e[n], Animation.tweeners[i] = Animation.tweeners[i] || [], Animation.tweeners[i].unshift(t)
			},
			prefilters: [defaultPrefilter],
			prefilter: function(e, t) {
				t ? Animation.prefilters.unshift(e) : Animation.prefilters.push(e)
			}
		}), b.speed = function(e, t, i) {
			var n = e && "object" == typeof e ? b.extend({}, e) : {
				complete: i || !i && t || b.isFunction(e) && e,
				duration: e,
				easing: i && t || t && !b.isFunction(t) && t
			};
			return b.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in b.fx.speeds ? n.duration = b.fx.speeds[n.duration] : n.duration = b.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
				b.isFunction(n.old) && n.old.call(this), n.queue && b.dequeue(this, n.queue)
			}, n
		}, b.fn.extend({
			fadeTo: function(e, t, i, n) {
				return this.filter(X).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, i, n)
			},
			animate: function(e, t, i, n) {
				var o = b.isEmptyObject(e),
					s = b.speed(t, i, n),
					r = function() {
						var t = Animation(this, b.extend({}, e), s);
						(o || q.get(this, "finish")) && t.stop(!0)
					};
				return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
			},
			stop: function(e, t, i) {
				var n = function(e) {
						var t = e.stop;
						delete e.stop, t(i)
					};
				return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
					var t = !0,
						o = null != e && e + "queueHooks",
						s = b.timers,
						r = q.get(this);
					if (o) r[o] && r[o].stop && n(r[o]);
					else for (o in r) r[o] && r[o].stop && Te.test(o) && n(r[o]);
					for (o = s.length; o--;) s[o].elem !== this || null != e && s[o].queue !== e || (s[o].anim.stop(i), t = !1, s.splice(o, 1));
					!t && i || b.dequeue(this, e)
				})
			},
			finish: function(e) {
				return !1 !== e && (e = e || "fx"), this.each(function() {
					var t, i = q.get(this),
						n = i[e + "queue"],
						o = i[e + "queueHooks"],
						s = b.timers,
						r = n ? n.length : 0;
					for (i.finish = !0, b.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
					for (t = 0; t < r; t++) n[t] && n[t].finish && n[t].finish.call(this);
					delete i.finish
				})
			}
		}), b.each(["toggle", "show", "hide"], function(e, t) {
			var i = b.fn[t];
			b.fn[t] = function(e, n, o) {
				return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(genFx(t, !0), e, n, o)
			}
		}), b.each({
			slideDown: genFx("show"),
			slideUp: genFx("hide"),
			slideToggle: genFx("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, t) {
			b.fn[e] = function(e, i, n) {
				return this.animate(t, e, i, n)
			}
		}), b.timers = [], b.fx.tick = function() {
			var e, t = 0,
				i = b.timers;
			for (ye = b.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
			i.length || b.fx.stop(), ye = void 0
		}, b.fx.timer = function(e) {
			b.timers.push(e), b.fx.start()
		}, b.fx.interval = 13, b.fx.start = function() {
			be || (be = !0, schedule())
		}, b.fx.stop = function() {
			be = null
		}, b.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, b.fn.delay = function(e, t) {
			return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var o = i.setTimeout(t, e);
				n.stop = function() {
					i.clearTimeout(o)
				}
			})
		}, function() {
			var e = a.createElement("input"),
				t = a.createElement("select"),
				i = t.appendChild(a.createElement("option"));
			e.type = "checkbox", y.checkOn = "" !== e.value, y.optSelected = i.selected, e = a.createElement("input"), e.value = "t", e.type = "radio", y.radioValue = "t" === e.value
		}();
		var xe, ke = b.expr.attrHandle;
		b.fn.extend({
			attr: function(e, t) {
				return F(this, b.attr, e, t, arguments.length > 1)
			},
			removeAttr: function(e) {
				return this.each(function() {
					b.removeAttr(this, e)
				})
			}
		}), b.extend({
			attr: function(e, t, i) {
				var n, o, s = e.nodeType;
				if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? b.prop(e, t, i) : (1 === s && b.isXMLDoc(e) || (o = b.attrHooks[t.toLowerCase()] || (b.expr.match.bool.test(t) ? xe : void 0)), void 0 !== i ? null === i ? void b.removeAttr(e, t) : o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : o && "get" in o && null !== (n = o.get(e, t)) ? n : (n = b.find.attr(e, t), null == n ? void 0 : n))
			},
			attrHooks: {
				type: {
					set: function(e, t) {
						if (!y.radioValue && "radio" === t && nodeName(e, "input")) {
							var i = e.value;
							return e.setAttribute("type", t), i && (e.value = i), t
						}
					}
				}
			},
			removeAttr: function(e, t) {
				var i, n = 0,
					o = t && t.match(I);
				if (o && 1 === e.nodeType) for (; i = o[n++];) e.removeAttribute(i)
			}
		}), xe = {
			set: function(e, t, i) {
				return !1 === t ? b.removeAttr(e, i) : e.setAttribute(i, i), i
			}
		}, b.each(b.expr.match.bool.source.match(/\w+/g), function(e, t) {
			var i = ke[t] || b.find.attr;
			ke[t] = function(e, t, n) {
				var o, s, r = t.toLowerCase();
				return n || (s = ke[r], ke[r] = o, o = null != i(e, t, n) ? r : null, ke[r] = s), o
			}
		});
		var Se = /^(?:input|select|textarea|button)$/i,
			Ce = /^(?:a|area)$/i;
		b.fn.extend({
			prop: function(e, t) {
				return F(this, b.prop, e, t, arguments.length > 1)
			},
			removeProp: function(e) {
				return this.each(function() {
					delete this[b.propFix[e] || e]
				})
			}
		}), b.extend({
			prop: function(e, t, i) {
				var n, o, s = e.nodeType;
				if (3 !== s && 8 !== s && 2 !== s) return 1 === s && b.isXMLDoc(e) || (t = b.propFix[t] || t, o = b.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
			},
			propHooks: {
				tabIndex: {
					get: function(e) {
						var t = b.find.attr(e, "tabindex");
						return t ? parseInt(t, 10) : Se.test(e.nodeName) || Ce.test(e.nodeName) && e.href ? 0 : -1
					}
				}
			},
			propFix: {
				for :"htmlFor", class: "className"
			}
		}), y.optSelected || (b.propHooks.selected = {
			get: function(e) {
				var t = e.parentNode;
				return t && t.parentNode && t.parentNode.selectedIndex, null
			},
			set: function(e) {
				var t = e.parentNode;
				t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
			}
		}), b.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
			b.propFix[this.toLowerCase()] = this
		}), b.fn.extend({
			addClass: function(e) {
				var t, i, n, o, s, r, a, l = 0;
				if (b.isFunction(e)) return this.each(function(t) {
					b(this).addClass(e.call(this, t, getClass(this)))
				});
				if ("string" == typeof e && e) for (t = e.match(I) || []; i = this[l++];) if (o = getClass(i), n = 1 === i.nodeType && " " + stripAndCollapse(o) + " ") {
					for (r = 0; s = t[r++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
					a = stripAndCollapse(n), o !== a && i.setAttribute("class", a)
				}
				return this
			},
			removeClass: function(e) {
				var t, i, n, o, s, r, a, l = 0;
				if (b.isFunction(e)) return this.each(function(t) {
					b(this).removeClass(e.call(this, t, getClass(this)))
				});
				if (!arguments.length) return this.attr("class", "");
				if ("string" == typeof e && e) for (t = e.match(I) || []; i = this[l++];) if (o = getClass(i), n = 1 === i.nodeType && " " + stripAndCollapse(o) + " ") {
					for (r = 0; s = t[r++];) for (; n.indexOf(" " + s + " ") > -1;) n = n.replace(" " + s + " ", " ");
					a = stripAndCollapse(n), o !== a && i.setAttribute("class", a)
				}
				return this
			},
			toggleClass: function(e, t) {
				var i = typeof e;
				return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : b.isFunction(e) ? this.each(function(i) {
					b(this).toggleClass(e.call(this, i, getClass(this), t), t)
				}) : this.each(function() {
					var t, n, o, s;
					if ("string" === i) for (n = 0, o = b(this), s = e.match(I) || []; t = s[n++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
					else void 0 !== e && "boolean" !== i || (t = getClass(this), t && q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : q.get(this, "__className__") || ""))
				})
			},
			hasClass: function(e) {
				var t, i, n = 0;
				for (t = " " + e + " "; i = this[n++];) if (1 === i.nodeType && (" " + stripAndCollapse(getClass(i)) + " ").indexOf(t) > -1) return !0;
				return !1
			}
		});
		var $e = /\r/g;
		b.fn.extend({
			val: function(e) {
				var t, i, n, o = this[0]; {
					if (arguments.length) return n = b.isFunction(e), this.each(function(i) {
						var o;
						1 === this.nodeType && (o = n ? e.call(this, i, b(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = b.map(o, function(e) {
							return null == e ? "" : e + ""
						})), (t = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
					});
					if (o) return (t = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace($e, "") : null == i ? "" : i)
				}
			}
		}), b.extend({
			valHooks: {
				option: {
					get: function(e) {
						var t = b.find.attr(e, "value");
						return null != t ? t : stripAndCollapse(b.text(e))
					}
				},
				select: {
					get: function(e) {
						var t, i, n, o = e.options,
							s = e.selectedIndex,
							r = "select-one" === e.type,
							a = r ? null : [],
							l = r ? s + 1 : o.length;
						for (n = s < 0 ? l : r ? s : 0; n < l; n++) if (i = o[n], (i.selected || n === s) && !i.disabled && (!i.parentNode.disabled || !nodeName(i.parentNode, "optgroup"))) {
							if (t = b(i).val(), r) return t;
							a.push(t)
						}
						return a
					},
					set: function(e, t) {
						for (var i, n, o = e.options, s = b.makeArray(t), r = o.length; r--;) n = o[r], (n.selected = b.inArray(b.valHooks.option.get(n), s) > -1) && (i = !0);
						return i || (e.selectedIndex = -1), s
					}
				}
			}
		}), b.each(["radio", "checkbox"], function() {
			b.valHooks[this] = {
				set: function(e, t) {
					if (Array.isArray(t)) return e.checked = b.inArray(b(e).val(), t) > -1
				}
			}, y.checkOn || (b.valHooks[this].get = function(e) {
				return null === e.getAttribute("value") ? "on" : e.value
			})
		});
		var Ae = /^(?:focusinfocus|focusoutblur)$/;
		b.extend(b.event, {
			trigger: function(e, t, n, o) {
				var s, r, l, c, d, u, p, f = [n || a],
					h = g.call(e, "type") ? e.type : e,
					v = g.call(e, "namespace") ? e.namespace.split(".") : [];
				if (r = l = n = n || a, 3 !== n.nodeType && 8 !== n.nodeType && !Ae.test(h + b.event.triggered) && (h.indexOf(".") > -1 && (v = h.split("."), h = v.shift(), v.sort()), d = h.indexOf(":") < 0 && "on" + h, e = e[b.expando] ? e : new b.Event(h, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : b.makeArray(t, [e]), p = b.event.special[h] || {}, o || !p.trigger || !1 !== p.trigger.apply(n, t))) {
					if (!o && !p.noBubble && !b.isWindow(n)) {
						for (c = p.delegateType || h, Ae.test(c + h) || (r = r.parentNode); r; r = r.parentNode) f.push(r), l = r;
						l === (n.ownerDocument || a) && f.push(l.defaultView || l.parentWindow || i)
					}
					for (s = 0;
					(r = f[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? c : p.bindType || h, u = (q.get(r, "events") || {})[e.type] && q.get(r, "handle"), u && u.apply(r, t), (u = d && r[d]) && u.apply && M(r) && (e.result = u.apply(r, t), !1 === e.result && e.preventDefault());
					return e.type = h, o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(f.pop(), t) || !M(n) || d && b.isFunction(n[h]) && !b.isWindow(n) && (l = n[d], l && (n[d] = null), b.event.triggered = h, n[h](), b.event.triggered = void 0, l && (n[d] = l)), e.result
				}
			},
			simulate: function(e, t, i) {
				var n = b.extend(new b.Event, i, {
					type: e,
					isSimulated: !0
				});
				b.event.trigger(n, null, t)
			}
		}), b.fn.extend({
			trigger: function(e, t) {
				return this.each(function() {
					b.event.trigger(e, t, this)
				})
			},
			triggerHandler: function(e, t) {
				var i = this[0];
				if (i) return b.event.trigger(e, t, i, !0)
			}
		}), b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
			b.fn[t] = function(e, i) {
				return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
			}
		}), b.fn.extend({
			hover: function(e, t) {
				return this.mouseenter(e).mouseleave(t || e)
			}
		}), y.focusin = "onfocusin" in i, y.focusin || b.each({
			focus: "focusin",
			blur: "focusout"
		}, function(e, t) {
			var i = function(e) {
					b.event.simulate(t, e.target, b.event.fix(e))
				};
			b.event.special[t] = {
				setup: function() {
					var n = this.ownerDocument || this,
						o = q.access(n, t);
					o || n.addEventListener(e, i, !0), q.access(n, t, (o || 0) + 1)
				},
				teardown: function() {
					var n = this.ownerDocument || this,
						o = q.access(n, t) - 1;
					o ? q.access(n, t, o) : (n.removeEventListener(e, i, !0), q.remove(n, t))
				}
			}
		});
		var Ee = i.location,
			De = b.now(),
			Pe = /\?/;
		b.parseXML = function(e) {
			var t;
			if (!e || "string" != typeof e) return null;
			try {
				t = (new i.DOMParser).parseFromString(e, "text/xml")
			} catch (e) {
				t = void 0
			}
			return t && !t.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + e), t
		};
		var Ne = /\[\]$/,
			Oe = /\r?\n/g,
			je = /^(?:submit|button|image|reset|file)$/i,
			Ie = /^(?:input|select|textarea|keygen)/i;
		b.param = function(e, t) {
			var i, n = [],
				o = function(e, t) {
					var i = b.isFunction(t) ? t() : t;
					n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
				};
			if (Array.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function() {
				o(this.name, this.value)
			});
			else for (i in e) buildParams(i, e[i], t, o);
			return n.join("&")
		}, b.fn.extend({
			serialize: function() {
				return b.param(this.serializeArray())
			},
			serializeArray: function() {
				return this.map(function() {
					var e = b.prop(this, "elements");
					return e ? b.makeArray(e) : this
				}).filter(function() {
					var e = this.type;
					return this.name && !b(this).is(":disabled") && Ie.test(this.nodeName) && !je.test(e) && (this.checked || !G.test(e))
				}).map(function(e, t) {
					var i = b(this).val();
					return null == i ? null : Array.isArray(i) ? b.map(i, function(e) {
						return {
							name: t.name,
							value: e.replace(Oe, "\r\n")
						}
					}) : {
						name: t.name,
						value: i.replace(Oe, "\r\n")
					}
				}).get()
			}
		});
		var He = /%20/g,
			Le = /#.*$/,
			Fe = /([?&])_=[^&]*/,
			Me = /^(.*?):[ \t]*([^\r\n]*)$/gm,
			qe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			ze = /^(?:GET|HEAD)$/,
			Re = /^\/\//,
			_e = {},
			We = {},
			Ue = "*/".concat("*"),
			Be = a.createElement("a");
		Be.href = Ee.href, b.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: Ee.href,
				type: "GET",
				isLocal: qe.test(Ee.protocol),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": Ue,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /\bxml\b/,
					html: /\bhtml/,
					json: /\bjson\b/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": JSON.parse,
					"text xml": b.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function(e, t) {
				return t ? ajaxExtend(ajaxExtend(e, b.ajaxSettings), t) : ajaxExtend(b.ajaxSettings, e)
			},
			ajaxPrefilter: addToPrefiltersOrTransports(_e),
			ajaxTransport: addToPrefiltersOrTransports(We),
			ajax: function(e, t) {
				function done(e, t, r, a) {
					var c, p, f, T, x, k = t;
					d || (d = !0, l && i.clearTimeout(l), n = void 0, s = a || "", S.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, r && (T = ajaxHandleResponses(h, S, r)), T = ajaxConvert(h, T, S, c), c ? (h.ifModified && (x = S.getResponseHeader("Last-Modified"), x && (b.lastModified[o] = x), (x = S.getResponseHeader("etag")) && (b.etag[o] = x)), 204 === e || "HEAD" === h.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = T.state, p = T.data, f = T.error, c = !f)) : (f = k, !e && k || (k = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (t || k) + "", c ? m.resolveWith(g, [p, k, S]) : m.rejectWith(g, [S, k, f]), S.statusCode(w), w = void 0, u && v.trigger(c ? "ajaxSuccess" : "ajaxError", [S, h, c ? p : f]), y.fireWith(g, [S, k]), u && (v.trigger("ajaxComplete", [S, h]), --b.active || b.event.trigger("ajaxStop")))
				}
				"object" == typeof e && (t = e, e = void 0), t = t || {};
				var n, o, s, r, l, c, d, u, p, f, h = b.ajaxSetup({}, t),
					g = h.context || h,
					v = h.context && (g.nodeType || g.jquery) ? b(g) : b.event,
					m = b.Deferred(),
					y = b.Callbacks("once memory"),
					w = h.statusCode || {},
					T = {},
					x = {},
					k = "canceled",
					S = {
						readyState: 0,
						getResponseHeader: function(e) {
							var t;
							if (d) {
								if (!r) for (r = {}; t = Me.exec(s);) r[t[1].toLowerCase()] = t[2];
								t = r[e.toLowerCase()]
							}
							return null == t ? null : t
						},
						getAllResponseHeaders: function() {
							return d ? s : null
						},
						setRequestHeader: function(e, t) {
							return null == d && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, T[e] = t), this
						},
						overrideMimeType: function(e) {
							return null == d && (h.mimeType = e), this
						},
						statusCode: function(e) {
							var t;
							if (e) if (d) S.always(e[S.status]);
							else for (t in e) w[t] = [w[t], e[t]];
							return this
						},
						abort: function(e) {
							var t = e || k;
							return n && n.abort(t), done(0, t), this
						}
					};
				if (m.promise(S), h.url = ((e || h.url || Ee.href) + "").replace(Re, Ee.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(I) || [""], null == h.crossDomain) {
					c = a.createElement("a");
					try {
						c.href = h.url, c.href = c.href, h.crossDomain = Be.protocol + "//" + Be.host != c.protocol + "//" + c.host
					} catch (e) {
						h.crossDomain = !0
					}
				}
				if (h.data && h.processData && "string" != typeof h.data && (h.data = b.param(h.data, h.traditional)), inspectPrefiltersOrTransports(_e, h, t, S), d) return S;
				u = b.event && h.global, u && 0 == b.active++ && b.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !ze.test(h.type), o = h.url.replace(Le, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(He, "+")) : (f = h.url.slice(o.length), h.data && (o += (Pe.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Fe, "$1"), f = (Pe.test(o) ? "&" : "?") + "_=" + De+++f), h.url = o + f), h.ifModified && (b.lastModified[o] && S.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && S.setRequestHeader("If-None-Match", b.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && S.setRequestHeader("Content-Type", h.contentType), S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ue + "; q=0.01" : "") : h.accepts["*"]);
				for (p in h.headers) S.setRequestHeader(p, h.headers[p]);
				if (h.beforeSend && (!1 === h.beforeSend.call(g, S, h) || d)) return S.abort();
				if (k = "abort", y.add(h.complete), S.done(h.success), S.fail(h.error), n = inspectPrefiltersOrTransports(We, h, t, S)) {
					if (S.readyState = 1, u && v.trigger("ajaxSend", [S, h]), d) return S;
					h.async && h.timeout > 0 && (l = i.setTimeout(function() {
						S.abort("timeout")
					}, h.timeout));
					try {
						d = !1, n.send(T, done)
					} catch (e) {
						if (d) throw e;
						done(-1, e)
					}
				} else done(-1, "No Transport");
				return S
			},
			getJSON: function(e, t, i) {
				return b.get(e, t, i, "json")
			},
			getScript: function(e, t) {
				return b.get(e, void 0, t, "script")
			}
		}), b.each(["get", "post"], function(e, t) {
			b[t] = function(e, i, n, o) {
				return b.isFunction(i) && (o = o || n, n = i, i = void 0), b.ajax(b.extend({
					url: e,
					type: t,
					dataType: o,
					data: i,
					success: n
				}, b.isPlainObject(e) && e))
			}
		}), b._evalUrl = function(e) {
			return b.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				cache: !0,
				async: !1,
				global: !1,
				throws: !0
			})
		}, b.fn.extend({
			wrapAll: function(e) {
				var t;
				return this[0] && (b.isFunction(e) && (e = e.call(this[0])), t = b(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					for (var e = this; e.firstElementChild;) e = e.firstElementChild;
					return e
				}).append(this)), this
			},
			wrapInner: function(e) {
				return b.isFunction(e) ? this.each(function(t) {
					b(this).wrapInner(e.call(this, t))
				}) : this.each(function() {
					var t = b(this),
						i = t.contents();
					i.length ? i.wrapAll(e) : t.append(e)
				})
			},
			wrap: function(e) {
				var t = b.isFunction(e);
				return this.each(function(i) {
					b(this).wrapAll(t ? e.call(this, i) : e)
				})
			},
			unwrap: function(e) {
				return this.parent(e).not("body").each(function() {
					b(this).replaceWith(this.childNodes)
				}), this
			}
		}), b.expr.pseudos.hidden = function(e) {
			return !b.expr.pseudos.visible(e)
		}, b.expr.pseudos.visible = function(e) {
			return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
		}, b.ajaxSettings.xhr = function() {
			try {
				return new i.XMLHttpRequest
			} catch (e) {}
		};
		var Xe = {
			0: 200,
			1223: 204
		},
			Ve = b.ajaxSettings.xhr();
		y.cors = !! Ve && "withCredentials" in Ve, y.ajax = Ve = !! Ve, b.ajaxTransport(function(e) {
			var t, n;
			if (y.cors || Ve && !e.crossDomain) return {
				send: function(o, s) {
					var r, a = e.xhr();
					if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (r in e.xhrFields) a[r] = e.xhrFields[r];
					e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
					for (r in o) a.setRequestHeader(r, o[r]);
					t = function(e) {
						return function() {
							t && (t = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Xe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
								binary: a.response
							} : {
								text: a.responseText
							}, a.getAllResponseHeaders()))
						}
					}, a.onload = t(), n = a.onerror = t("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
						4 === a.readyState && i.setTimeout(function() {
							t && n()
						})
					}, t = t("abort");
					try {
						a.send(e.hasContent && e.data || null)
					} catch (e) {
						if (t) throw e
					}
				},
				abort: function() {
					t && t()
				}
			}
		}), b.ajaxPrefilter(function(e) {
			e.crossDomain && (e.contents.script = !1)
		}), b.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /\b(?:java|ecma)script\b/
			},
			converters: {
				"text script": function(e) {
					return b.globalEval(e), e
				}
			}
		}), b.ajaxPrefilter("script", function(e) {
			void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
		}), b.ajaxTransport("script", function(e) {
			if (e.crossDomain) {
				var t, i;
				return {
					send: function(n, o) {
						t = b("<script>").prop({
							charset: e.scriptCharset,
							src: e.url
						}).on("load error", i = function(e) {
							t.remove(), i = null, e && o("error" === e.type ? 404 : 200, e.type)
						}), a.head.appendChild(t[0])
					},
					abort: function() {
						i && i()
					}
				}
			}
		});
		var Ye = [],
			Ge = /(=)\?(?=&|$)|\?\?/;
		b.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var e = Ye.pop() || b.expando + "_" + De++;
				return this[e] = !0, e
			}
		}), b.ajaxPrefilter("json jsonp", function(e, t, n) {
			var o, s, r, a = !1 !== e.jsonp && (Ge.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ge.test(e.data) && "data");
			if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = b.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ge, "$1" + o) : !1 !== e.jsonp && (e.url += (Pe.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
				return r || b.error(o + " was not called"), r[0]
			}, e.dataTypes[0] = "json", s = i[o], i[o] = function() {
				r = arguments
			}, n.always(function() {
				void 0 === s ? b(i).removeProp(o) : i[o] = s, e[o] && (e.jsonpCallback = t.jsonpCallback, Ye.push(o)), r && b.isFunction(s) && s(r[0]), r = s = void 0
			}), "script"
		}), y.createHTMLDocument = function() {
			var e = a.implementation.createHTMLDocument("").body;
			return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
		}(), b.parseHTML = function(e, t, i) {
			if ("string" != typeof e) return [];
			"boolean" == typeof t && (i = t, t = !1);
			var n, o, s;
			return t || (y.createHTMLDocument ? (t = a.implementation.createHTMLDocument(""), n = t.createElement("base"), n.href = a.location.href, t.head.appendChild(n)) : t = a), o = E.exec(e), s = !i && [], o ? [t.createElement(o[1])] : (o = buildFragment([e], t, s), s && s.length && b(s).remove(), b.merge([], o.childNodes))
		}, b.fn.load = function(e, t, i) {
			var n, o, s, r = this,
				a = e.indexOf(" ");
			return a > -1 && (n = stripAndCollapse(e.slice(a)), e = e.slice(0, a)), b.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (o = "POST"), r.length > 0 && b.ajax({
				url: e,
				type: o || "GET",
				dataType: "html",
				data: t
			}).done(function(e) {
				s = arguments, r.html(n ? b("<div>").append(b.parseHTML(e)).find(n) : e)
			}).always(i &&
			function(e, t) {
				r.each(function() {
					i.apply(this, s || [e.responseText, t, e])
				})
			}), this
		}, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
			b.fn[t] = function(e) {
				return this.on(t, e)
			}
		}), b.expr.pseudos.animated = function(e) {
			return b.grep(b.timers, function(t) {
				return e === t.elem
			}).length
		}, b.offset = {
			setOffset: function(e, t, i) {
				var n, o, s, r, a, l, c, d = b.css(e, "position"),
					u = b(e),
					p = {};
				"static" === d && (e.style.position = "relative"), a = u.offset(), s = b.css(e, "top"), l = b.css(e, "left"), c = ("absolute" === d || "fixed" === d) && (s + l).indexOf("auto") > -1, c ? (n = u.position(), r = n.top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), b.isFunction(t) && (t = t.call(e, i, b.extend({}, a))), null != t.top && (p.top = t.top - a.top + r), null != t.left && (p.left = t.left - a.left + o), "using" in t ? t.using.call(e, p) : u.css(p)
			}
		}, b.fn.extend({
			offset: function(e) {
				if (arguments.length) return void 0 === e ? this : this.each(function(t) {
					b.offset.setOffset(this, e, t)
				});
				var t, i, n, o, s = this[0];
				if (s) return s.getClientRects().length ? (n = s.getBoundingClientRect(), t = s.ownerDocument, i = t.documentElement, o = t.defaultView, {
					top: n.top + o.pageYOffset - i.clientTop,
					left: n.left + o.pageXOffset - i.clientLeft
				}) : {
					top: 0,
					left: 0
				}
			},
			position: function() {
				if (this[0]) {
					var e, t, i = this[0],
						n = {
							top: 0,
							left: 0
						};
					return "fixed" === b.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), nodeName(e[0], "html") || (n = e.offset()), n = {
						top: n.top + b.css(e[0], "borderTopWidth", !0),
						left: n.left + b.css(e[0], "borderLeftWidth", !0)
					}), {
						top: t.top - n.top - b.css(i, "marginTop", !0),
						left: t.left - n.left - b.css(i, "marginLeft", !0)
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for (var e = this.offsetParent; e && "static" === b.css(e, "position");) e = e.offsetParent;
					return e || ee
				})
			}
		}), b.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(e, t) {
			var i = "pageYOffset" === t;
			b.fn[e] = function(n) {
				return F(this, function(e, n, o) {
					var s;
					if (b.isWindow(e) ? s = e : 9 === e.nodeType && (s = e.defaultView), void 0 === o) return s ? s[t] : e[n];
					s ? s.scrollTo(i ? s.pageXOffset : o, i ? o : s.pageYOffset) : e[n] = o
				}, e, n, arguments.length)
			}
		}), b.each(["top", "left"], function(e, t) {
			b.cssHooks[t] = addGetHookIf(y.pixelPosition, function(e, i) {
				if (i) return i = curCSS(e, t), de.test(i) ? b(e).position()[t] + "px" : i
			})
		}), b.each({
			Height: "height",
			Width: "width"
		}, function(e, t) {
			b.each({
				padding: "inner" + e,
				content: t,
				"": "outer" + e
			}, function(i, n) {
				b.fn[n] = function(o, s) {
					var r = arguments.length && (i || "boolean" != typeof o),
						a = i || (!0 === o || !0 === s ? "margin" : "border");
					return F(this, function(t, i, o) {
						var s;
						return b.isWindow(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === o ? b.css(t, i, a) : b.style(t, i, o, a)
					}, t, r ? o : void 0, r)
				}
			})
		}), b.fn.extend({
			bind: function(e, t, i) {
				return this.on(e, null, t, i)
			},
			unbind: function(e, t) {
				return this.off(e, null, t)
			},
			delegate: function(e, t, i, n) {
				return this.on(t, e, i, n)
			},
			undelegate: function(e, t, i) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
			}
		}), b.holdReady = function(e) {
			e ? b.readyWait++ : b.ready(!0)
		}, b.isArray = Array.isArray, b.parseJSON = JSON.parse, b.nodeName = nodeName, n = [], void 0 !== (o = function() {
			return b
		}.apply(t, n)) && (e.exports = o);
		var Qe = i.jQuery,
			Je = i.$;
		return b.noConflict = function(e) {
			return i.$ === b && (i.$ = Je), e && i.jQuery === b && (i.jQuery = Qe), b
		}, s || (i.jQuery = i.$ = b), b
	})
}, function(e, t, i) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = i(0);
	t.
default = function(e, t) {
		n(e).affix({
			offset: t
		})
	}
}, function(e, t, i) {
	(function(e) {
		if (void 0 === e) throw new Error("Bootstrap's JavaScript requires jQuery"); +
		function(e) {
			"use strict";
			var t = e.fn.jquery.split(" ")[0].split(".");
			if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
		}(e), function(e) {
			"use strict";

			function transitionEnd() {
				var e = document.createElement("bootstrap"),
					t = {
						WebkitTransition: "webkitTransitionEnd",
						MozTransition: "transitionend",
						OTransition: "oTransitionEnd otransitionend",
						transition: "transitionend"
					};
				for (var i in t) if (void 0 !== e.style[i]) return {
					end: t[i]
				};
				return !1
			}
			e.fn.emulateTransitionEnd = function(t) {
				var i = !1,
					n = this;
				e(this).one("bsTransitionEnd", function() {
					i = !0
				});
				var o = function() {
						i || e(n).trigger(e.support.transition.end)
					};
				return setTimeout(o, t), this
			}, e(function() {
				e.support.transition = transitionEnd(), e.support.transition && (e.event.special.bsTransitionEnd = {
					bindType: e.support.transition.end,
					delegateType: e.support.transition.end,
					handle: function(t) {
						if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
					}
				})
			})
		}(e), function(e) {
			"use strict";

			function Plugin(t) {
				return this.each(function() {
					var n = e(this),
						o = n.data("bs.alert");
					o || n.data("bs.alert", o = new i(this)), "string" == typeof t && o[t].call(n)
				})
			}
			var t = '[data-dismiss="alert"]',
				i = function(i) {
					e(i).on("click", t, this.close)
				};
			i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(t) {
				function removeElement() {
					s.detach().trigger("closed.bs.alert").remove()
				}
				var n = e(this),
					o = n.attr("data-target");
				o || (o = n.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
				var s = e("#" === o ? [] : o);
				t && t.preventDefault(), s.length || (s = n.closest(".alert")), s.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (s.removeClass("in"), e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", removeElement).emulateTransitionEnd(i.TRANSITION_DURATION) : removeElement())
			};
			var n = e.fn.alert;
			e.fn.alert = Plugin, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function() {
				return e.fn.alert = n, this
			}, e(document).on("click.bs.alert.data-api", t, i.prototype.close)
		}(e), function(e) {
			"use strict";

			function Plugin(i) {
				return this.each(function() {
					var n = e(this),
						o = n.data("bs.button"),
						s = "object" == typeof i && i;
					o || n.data("bs.button", o = new t(this, s)), "toggle" == i ? o.toggle() : i && o.setState(i)
				})
			}
			var t = function(i, n) {
					this.$element = e(i), this.options = e.extend({}, t.DEFAULTS, n), this.isLoading = !1
				};
			t.VERSION = "3.3.7", t.DEFAULTS = {
				loadingText: "loading..."
			}, t.prototype.setState = function(t) {
				var i = "disabled",
					n = this.$element,
					o = n.is("input") ? "val" : "html",
					s = n.data();
				t += "Text", null == s.resetText && n.data("resetText", n[o]()), setTimeout(e.proxy(function() {
					n[o](null == s[t] ? this.options[t] : s[t]), "loadingText" == t ? (this.isLoading = !0, n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i).prop(i, !1))
				}, this), 0)
			}, t.prototype.toggle = function() {
				var e = !0,
					t = this.$element.closest('[data-toggle="buttons"]');
				if (t.length) {
					var i = this.$element.find("input");
					"radio" == i.prop("type") ? (i.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), e && i.trigger("change")
				} else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
			};
			var i = e.fn.button;
			e.fn.button = Plugin, e.fn.button.Constructor = t, e.fn.button.noConflict = function() {
				return e.fn.button = i, this
			}, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
				var i = e(t.target).closest(".btn");
				Plugin.call(i, "toggle"), e(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
			}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
				e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
			})
		}(e), function(e) {
			"use strict";

			function Plugin(i) {
				return this.each(function() {
					var n = e(this),
						o = n.data("bs.carousel"),
						s = e.extend({}, t.DEFAULTS, n.data(), "object" == typeof i && i),
						r = "string" == typeof i ? i : s.slide;
					o || n.data("bs.carousel", o = new t(this, s)), "number" == typeof i ? o.to(i) : r ? o[r]() : s.interval && o.pause().cycle()
				})
			}
			var t = function(t, i) {
					this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
				};
			t.VERSION = "3.3.7", t.TRANSITION_DURATION = 600, t.DEFAULTS = {
				interval: 5e3,
				pause: "hover",
				wrap: !0,
				keyboard: !0
			}, t.prototype.keydown = function(e) {
				if (!/input|textarea/i.test(e.target.tagName)) {
					switch (e.which) {
					case 37:
						this.prev();
						break;
					case 39:
						this.next();
						break;
					default:
						return
					}
					e.preventDefault()
				}
			}, t.prototype.cycle = function(t) {
				return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
			}, t.prototype.getItemIndex = function(e) {
				return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
			}, t.prototype.getItemForDirection = function(e, t) {
				var i = this.getItemIndex(t);
				if (("prev" == e && 0 === i || "next" == e && i == this.$items.length - 1) && !this.options.wrap) return t;
				var n = "prev" == e ? -1 : 1,
					o = (i + n) % this.$items.length;
				return this.$items.eq(o)
			}, t.prototype.to = function(e) {
				var t = this,
					i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
				if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
					t.to(e)
				}) : i == e ? this.pause().cycle() : this.slide(e > i ? "next" : "prev", this.$items.eq(e))
			}, t.prototype.pause = function(t) {
				return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
			}, t.prototype.next = function() {
				if (!this.sliding) return this.slide("next")
			}, t.prototype.prev = function() {
				if (!this.sliding) return this.slide("prev")
			}, t.prototype.slide = function(i, n) {
				var o = this.$element.find(".item.active"),
					s = n || this.getItemForDirection(i, o),
					r = this.interval,
					a = "next" == i ? "left" : "right",
					l = this;
				if (s.hasClass("active")) return this.sliding = !1;
				var c = s[0],
					d = e.Event("slide.bs.carousel", {
						relatedTarget: c,
						direction: a
					});
				if (this.$element.trigger(d), !d.isDefaultPrevented()) {
					if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
						this.$indicators.find(".active").removeClass("active");
						var u = e(this.$indicators.children()[this.getItemIndex(s)]);
						u && u.addClass("active")
					}
					var p = e.Event("slid.bs.carousel", {
						relatedTarget: c,
						direction: a
					});
					return e.support.transition && this.$element.hasClass("slide") ? (s.addClass(i), s[0].offsetWidth, o.addClass(a), s.addClass(a), o.one("bsTransitionEnd", function() {
						s.removeClass([i, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
							l.$element.trigger(p)
						}, 0)
					}).emulateTransitionEnd(t.TRANSITION_DURATION)) : (o.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(p)), r && this.cycle(), this
				}
			};
			var i = e.fn.carousel;
			e.fn.carousel = Plugin, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function() {
				return e.fn.carousel = i, this
			};
			var n = function(t) {
					var i, n = e(this),
						o = e(n.attr("data-target") || (i = n.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
					if (o.hasClass("carousel")) {
						var s = e.extend({}, o.data(), n.data()),
							r = n.attr("data-slide-to");
						r && (s.interval = !1), Plugin.call(o, s), r && o.data("bs.carousel").to(r), t.preventDefault()
					}
				};
			e(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), e(window).on("load", function() {
				e('[data-ride="carousel"]').each(function() {
					var t = e(this);
					Plugin.call(t, t.data())
				})
			})
		}(e), function(e) {
			"use strict";

			function getTargetFromTrigger(t) {
				var i, n = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
				return e(n)
			}
			function Plugin(i) {
				return this.each(function() {
					var n = e(this),
						o = n.data("bs.collapse"),
						s = e.extend({}, t.DEFAULTS, n.data(), "object" == typeof i && i);
					!o && s.toggle && /show|hide/.test(i) && (s.toggle = !1), o || n.data("bs.collapse", o = new t(this, s)), "string" == typeof i && o[i]()
				})
			}
			var t = function(i, n) {
					this.$element = e(i), this.options = e.extend({}, t.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
				};
			t.VERSION = "3.3.7", t.TRANSITION_DURATION = 350, t.DEFAULTS = {
				toggle: !0
			}, t.prototype.dimension = function() {
				return this.$element.hasClass("width") ? "width" : "height"
			}, t.prototype.show = function() {
				if (!this.transitioning && !this.$element.hasClass("in")) {
					var i, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
					if (!(n && n.length && (i = n.data("bs.collapse")) && i.transitioning)) {
						var o = e.Event("show.bs.collapse");
						if (this.$element.trigger(o), !o.isDefaultPrevented()) {
							n && n.length && (Plugin.call(n, "hide"), i || n.data("bs.collapse", null));
							var s = this.dimension();
							this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
							var r = function() {
									this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
								};
							if (!e.support.transition) return r.call(this);
							var a = e.camelCase(["scroll", s].join("-"));
							this.$element.one("bsTransitionEnd", e.proxy(r, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[s](this.$element[0][a])
						}
					}
				}
			}, t.prototype.hide = function() {
				if (!this.transitioning && this.$element.hasClass("in")) {
					var i = e.Event("hide.bs.collapse");
					if (this.$element.trigger(i), !i.isDefaultPrevented()) {
						var n = this.dimension();
						this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
						var o = function() {
								this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
							};
						if (!e.support.transition) return o.call(this);
						this.$element[n](0).one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)
					}
				}
			}, t.prototype.toggle = function() {
				this[this.$element.hasClass("in") ? "hide" : "show"]()
			}, t.prototype.getParent = function() {
				return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(t, i) {
					var n = e(i);
					this.addAriaAndCollapsedClass(getTargetFromTrigger(n), n)
				}, this)).end()
			}, t.prototype.addAriaAndCollapsedClass = function(e, t) {
				var i = e.hasClass("in");
				e.attr("aria-expanded", i), t.toggleClass("collapsed", !i).attr("aria-expanded", i)
			};
			var i = e.fn.collapse;
			e.fn.collapse = Plugin, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function() {
				return e.fn.collapse = i, this
			}, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
				var i = e(this);
				i.attr("data-target") || t.preventDefault();
				var n = getTargetFromTrigger(i),
					o = n.data("bs.collapse"),
					s = o ? "toggle" : i.data();
				Plugin.call(n, s)
			})
		}(e), function(e) {
			"use strict";

			function getParent(t) {
				var i = t.attr("data-target");
				i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
				var n = i && e(i);
				return n && n.length ? n : t.parent()
			}
			function clearMenus(n) {
				n && 3 === n.which || (e(t).remove(), e(i).each(function() {
					var t = e(this),
						i = getParent(t),
						o = {
							relatedTarget: this
						};
					i.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(i[0], n.target) || (i.trigger(n = e.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (t.attr("aria-expanded", "false"), i.removeClass("open").trigger(e.Event("hidden.bs.dropdown", o)))))
				}))
			}
			function Plugin(t) {
				return this.each(function() {
					var i = e(this),
						o = i.data("bs.dropdown");
					o || i.data("bs.dropdown", o = new n(this)), "string" == typeof t && o[t].call(i)
				})
			}
			var t = ".dropdown-backdrop",
				i = '[data-toggle="dropdown"]',
				n = function(t) {
					e(t).on("click.bs.dropdown", this.toggle)
				};
			n.VERSION = "3.3.7", n.prototype.toggle = function(t) {
				var i = e(this);
				if (!i.is(".disabled, :disabled")) {
					var n = getParent(i),
						o = n.hasClass("open");
					if (clearMenus(), !o) {
						"ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", clearMenus);
						var s = {
							relatedTarget: this
						};
						if (n.trigger(t = e.Event("show.bs.dropdown", s)), t.isDefaultPrevented()) return;
						i.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger(e.Event("shown.bs.dropdown", s))
					}
					return !1
				}
			}, n.prototype.keydown = function(t) {
				if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
					var n = e(this);
					if (t.preventDefault(), t.stopPropagation(), !n.is(".disabled, :disabled")) {
						var o = getParent(n),
							s = o.hasClass("open");
						if (!s && 27 != t.which || s && 27 == t.which) return 27 == t.which && o.find(i).trigger("focus"), n.trigger("click");
						var r = o.find(".dropdown-menu li:not(.disabled):visible a");
						if (r.length) {
							var a = r.index(t.target);
							38 == t.which && a > 0 && a--, 40 == t.which && a < r.length - 1 && a++, ~a || (a = 0), r.eq(a).trigger("focus")
						}
					}
				}
			};
			var o = e.fn.dropdown;
			e.fn.dropdown = Plugin, e.fn.dropdown.Constructor = n, e.fn.dropdown.noConflict = function() {
				return e.fn.dropdown = o, this
			}, e(document).on("click.bs.dropdown.data-api", clearMenus).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
				e.stopPropagation()
			}).on("click.bs.dropdown.data-api", i, n.prototype.toggle).on("keydown.bs.dropdown.data-api", i, n.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", n.prototype.keydown)
		}(e), function(e) {
			"use strict";

			function Plugin(i, n) {
				return this.each(function() {
					var o = e(this),
						s = o.data("bs.modal"),
						r = e.extend({}, t.DEFAULTS, o.data(), "object" == typeof i && i);
					s || o.data("bs.modal", s = new t(this, r)), "string" == typeof i ? s[i](n) : r.show && s.show(n)
				})
			}
			var t = function(t, i) {
					this.options = i, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
						this.$element.trigger("loaded.bs.modal")
					}, this))
				};
			t.VERSION = "3.3.7", t.TRANSITION_DURATION = 300, t.BACKDROP_TRANSITION_DURATION = 150, t.DEFAULTS = {
				backdrop: !0,
				keyboard: !0,
				show: !0
			}, t.prototype.toggle = function(e) {
				return this.isShown ? this.hide() : this.show(e)
			}, t.prototype.show = function(i) {
				var n = this,
					o = e.Event("show.bs.modal", {
						relatedTarget: i
					});
				this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
					n.$element.one("mouseup.dismiss.bs.modal", function(t) {
						e(t.target).is(n.$element) && (n.ignoreBackdropClick = !0)
					})
				}), this.backdrop(function() {
					var o = e.support.transition && n.$element.hasClass("fade");
					n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
					var s = e.Event("shown.bs.modal", {
						relatedTarget: i
					});
					o ? n.$dialog.one("bsTransitionEnd", function() {
						n.$element.trigger("focus").trigger(s)
					}).emulateTransitionEnd(t.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(s)
				}))
			}, t.prototype.hide = function(i) {
				i && i.preventDefault(), i = e.Event("hide.bs.modal"), this.$element.trigger(i), this.isShown && !i.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
			}, t.prototype.enforceFocus = function() {
				e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
					document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
				}, this))
			}, t.prototype.escape = function() {
				this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
					27 == e.which && this.hide()
				}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
			}, t.prototype.resize = function() {
				this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
			}, t.prototype.hideModal = function() {
				var e = this;
				this.$element.hide(), this.backdrop(function() {
					e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
				})
			}, t.prototype.removeBackdrop = function() {
				this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
			}, t.prototype.backdrop = function(i) {
				var n = this,
					o = this.$element.hasClass("fade") ? "fade" : "";
				if (this.isShown && this.options.backdrop) {
					var s = e.support.transition && o;
					if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
						if (this.ignoreBackdropClick) return void(this.ignoreBackdropClick = !1);
						e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
					}, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
					s ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
				} else if (!this.isShown && this.$backdrop) {
					this.$backdrop.removeClass("in");
					var r = function() {
							n.removeBackdrop(), i && i()
						};
					e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : r()
				} else i && i()
			}, t.prototype.handleUpdate = function() {
				this.adjustDialog()
			}, t.prototype.adjustDialog = function() {
				var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
				this.$element.css({
					paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
					paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
				})
			}, t.prototype.resetAdjustments = function() {
				this.$element.css({
					paddingLeft: "",
					paddingRight: ""
				})
			}, t.prototype.checkScrollbar = function() {
				var e = window.innerWidth;
				if (!e) {
					var t = document.documentElement.getBoundingClientRect();
					e = t.right - Math.abs(t.left)
				}
				this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
			}, t.prototype.setScrollbar = function() {
				var e = parseInt(this.$body.css("padding-right") || 0, 10);
				this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
			}, t.prototype.resetScrollbar = function() {
				this.$body.css("padding-right", this.originalBodyPad)
			}, t.prototype.measureScrollbar = function() {
				var e = document.createElement("div");
				e.className = "modal-scrollbar-measure", this.$body.append(e);
				var t = e.offsetWidth - e.clientWidth;
				return this.$body[0].removeChild(e), t
			};
			var i = e.fn.modal;
			e.fn.modal = Plugin, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function() {
				return e.fn.modal = i, this
			}, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
				var i = e(this),
					n = i.attr("href"),
					o = e(i.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
					s = o.data("bs.modal") ? "toggle" : e.extend({
						remote: !/#/.test(n) && n
					}, o.data(), i.data());
				i.is("a") && t.preventDefault(), o.one("show.bs.modal", function(e) {
					e.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
						i.is(":visible") && i.trigger("focus")
					})
				}), Plugin.call(o, s, this)
			})
		}(e), function(e) {
			"use strict";

			function Plugin(i) {
				return this.each(function() {
					var n = e(this),
						o = n.data("bs.tooltip"),
						s = "object" == typeof i && i;
					!o && /destroy|hide/.test(i) || (o || n.data("bs.tooltip", o = new t(this, s)), "string" == typeof i && o[i]())
				})
			}
			var t = function(e, t) {
					this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
				};
			t.VERSION = "3.3.7", t.TRANSITION_DURATION = 150, t.DEFAULTS = {
				animation: !0,
				placement: "top",
				selector: !1,
				template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
				trigger: "hover focus",
				title: "",
				delay: 0,
				html: !1,
				container: !1,
				viewport: {
					selector: "body",
					padding: 0
				}
			}, t.prototype.init = function(t, i, n) {
				if (this.enabled = !0, this.type = t, this.$element = e(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
					click: !1,
					hover: !1,
					focus: !1
				}, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
				for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
					var r = o[s];
					if ("click" == r) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
					else if ("manual" != r) {
						var a = "hover" == r ? "mouseenter" : "focusin",
							l = "hover" == r ? "mouseleave" : "focusout";
						this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
					}
				}
				this.options.selector ? this._options = e.extend({}, this.options, {
					trigger: "manual",
					selector: ""
				}) : this.fixTitle()
			}, t.prototype.getDefaults = function() {
				return t.DEFAULTS
			}, t.prototype.getOptions = function(t) {
				return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
					show: t.delay,
					hide: t.delay
				}), t
			}, t.prototype.getDelegateOptions = function() {
				var t = {},
					i = this.getDefaults();
				return this._options && e.each(this._options, function(e, n) {
					i[e] != n && (t[e] = n)
				}), t
			}, t.prototype.enter = function(t) {
				var i = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
				return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, i)), t instanceof e.Event && (i.inState["focusin" == t.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
					"in" == i.hoverState && i.show()
				}, i.options.delay.show)) : i.show())
			}, t.prototype.isInStateTrue = function() {
				for (var e in this.inState) if (this.inState[e]) return !0;
				return !1
			}, t.prototype.leave = function(t) {
				var i = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
				if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, i)), t instanceof e.Event && (i.inState["focusout" == t.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) {
					if (clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
					i.timeout = setTimeout(function() {
						"out" == i.hoverState && i.hide()
					}, i.options.delay.hide)
				}
			}, t.prototype.show = function() {
				var i = e.Event("show.bs." + this.type);
				if (this.hasContent() && this.enabled) {
					this.$element.trigger(i);
					var n = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
					if (i.isDefaultPrevented() || !n) return;
					var o = this,
						s = this.tip(),
						r = this.getUID(this.type);
					this.setContent(), s.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && s.addClass("fade");
					var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
						l = /\s?auto?\s?/i,
						c = l.test(a);
					c && (a = a.replace(l, "") || "top"), s.detach().css({
						top: 0,
						left: 0,
						display: "block"
					}).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
					var d = this.getPosition(),
						u = s[0].offsetWidth,
						p = s[0].offsetHeight;
					if (c) {
						var f = a,
							h = this.getPosition(this.$viewport);
						a = "bottom" == a && d.bottom + p > h.bottom ? "top" : "top" == a && d.top - p < h.top ? "bottom" : "right" == a && d.right + u > h.width ? "left" : "left" == a && d.left - u < h.left ? "right" : a, s.removeClass(f).addClass(a)
					}
					var g = this.getCalculatedOffset(a, d, u, p);
					this.applyPlacement(g, a);
					var v = function() {
							var e = o.hoverState;
							o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == e && o.leave(o)
						};
					e.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(t.TRANSITION_DURATION) : v()
				}
			}, t.prototype.applyPlacement = function(t, i) {
				var n = this.tip(),
					o = n[0].offsetWidth,
					s = n[0].offsetHeight,
					r = parseInt(n.css("margin-top"), 10),
					a = parseInt(n.css("margin-left"), 10);
				isNaN(r) && (r = 0), isNaN(a) && (a = 0), t.top += r, t.left += a, e.offset.setOffset(n[0], e.extend({
					using: function(e) {
						n.css({
							top: Math.round(e.top),
							left: Math.round(e.left)
						})
					}
				}, t), 0), n.addClass("in");
				var l = n[0].offsetWidth,
					c = n[0].offsetHeight;
				"top" == i && c != s && (t.top = t.top + s - c);
				var d = this.getViewportAdjustedDelta(i, t, l, c);
				d.left ? t.left += d.left : t.top += d.top;
				var u = /top|bottom/.test(i),
					p = u ? 2 * d.left - o + l : 2 * d.top - s + c,
					f = u ? "offsetWidth" : "offsetHeight";
				n.offset(t), this.replaceArrow(p, n[0][f], u)
			}, t.prototype.replaceArrow = function(e, t, i) {
				this.arrow().css(i ? "left" : "top", 50 * (1 - e / t) + "%").css(i ? "top" : "left", "")
			}, t.prototype.setContent = function() {
				var e = this.tip(),
					t = this.getTitle();
				e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
			}, t.prototype.hide = function(i) {
				function complete() {
					"in" != n.hoverState && o.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), i && i()
				}
				var n = this,
					o = e(this.$tip),
					s = e.Event("hide.bs." + this.type);
				if (this.$element.trigger(s), !s.isDefaultPrevented()) return o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", complete).emulateTransitionEnd(t.TRANSITION_DURATION) : complete(), this.hoverState = null, this
			}, t.prototype.fixTitle = function() {
				var e = this.$element;
				(e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
			}, t.prototype.hasContent = function() {
				return this.getTitle()
			}, t.prototype.getPosition = function(t) {
				t = t || this.$element;
				var i = t[0],
					n = "BODY" == i.tagName,
					o = i.getBoundingClientRect();
				null == o.width && (o = e.extend({}, o, {
					width: o.right - o.left,
					height: o.bottom - o.top
				}));
				var s = window.SVGElement && i instanceof window.SVGElement,
					r = n ? {
						top: 0,
						left: 0
					} : s ? null : t.offset(),
					a = {
						scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
					},
					l = n ? {
						width: e(window).width(),
						height: e(window).height()
					} : null;
				return e.extend({}, o, a, l, r)
			}, t.prototype.getCalculatedOffset = function(e, t, i, n) {
				return "bottom" == e ? {
					top: t.top + t.height,
					left: t.left + t.width / 2 - i / 2
				} : "top" == e ? {
					top: t.top - n,
					left: t.left + t.width / 2 - i / 2
				} : "left" == e ? {
					top: t.top + t.height / 2 - n / 2,
					left: t.left - i
				} : {
					top: t.top + t.height / 2 - n / 2,
					left: t.left + t.width
				}
			}, t.prototype.getViewportAdjustedDelta = function(e, t, i, n) {
				var o = {
					top: 0,
					left: 0
				};
				if (!this.$viewport) return o;
				var s = this.options.viewport && this.options.viewport.padding || 0,
					r = this.getPosition(this.$viewport);
				if (/right|left/.test(e)) {
					var a = t.top - s - r.scroll,
						l = t.top + s - r.scroll + n;
					a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l)
				} else {
					var c = t.left - s,
						d = t.left + s + i;
					c < r.left ? o.left = r.left - c : d > r.right && (o.left = r.left + r.width - d)
				}
				return o
			}, t.prototype.getTitle = function() {
				var e = this.$element,
					t = this.options;
				return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
			}, t.prototype.getUID = function(e) {
				do {
					e += ~~ (1e6 * Math.random())
				} while (document.getElementById(e));
				return e
			}, t.prototype.tip = function() {
				if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
				return this.$tip
			}, t.prototype.arrow = function() {
				return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
			}, t.prototype.enable = function() {
				this.enabled = !0
			}, t.prototype.disable = function() {
				this.enabled = !1
			}, t.prototype.toggleEnabled = function() {
				this.enabled = !this.enabled
			}, t.prototype.toggle = function(t) {
				var i = this;
				t && ((i = e(t.currentTarget).data("bs." + this.type)) || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, i))), t ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
			}, t.prototype.destroy = function() {
				var e = this;
				clearTimeout(this.timeout), this.hide(function() {
					e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null
				})
			};
			var i = e.fn.tooltip;
			e.fn.tooltip = Plugin, e.fn.tooltip.Constructor = t, e.fn.tooltip.noConflict = function() {
				return e.fn.tooltip = i, this
			}
		}(e), function(e) {
			"use strict";

			function Plugin(i) {
				return this.each(function() {
					var n = e(this),
						o = n.data("bs.popover"),
						s = "object" == typeof i && i;
					!o && /destroy|hide/.test(i) || (o || n.data("bs.popover", o = new t(this, s)), "string" == typeof i && o[i]())
				})
			}
			var t = function(e, t) {
					this.init("popover", e, t)
				};
			if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
			t.VERSION = "3.3.7", t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
				placement: "right",
				trigger: "click",
				content: "",
				template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
			}), t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), t.prototype.constructor = t, t.prototype.getDefaults = function() {
				return t.DEFAULTS
			}, t.prototype.setContent = function() {
				var e = this.tip(),
					t = this.getTitle(),
					i = this.getContent();
				e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
			}, t.prototype.hasContent = function() {
				return this.getTitle() || this.getContent()
			}, t.prototype.getContent = function() {
				var e = this.$element,
					t = this.options;
				return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
			}, t.prototype.arrow = function() {
				return this.$arrow = this.$arrow || this.tip().find(".arrow")
			};
			var i = e.fn.popover;
			e.fn.popover = Plugin, e.fn.popover.Constructor = t, e.fn.popover.noConflict = function() {
				return e.fn.popover = i, this
			}
		}(e), function(e) {
			"use strict";

			function ScrollSpy(t, i) {
				this.$body = e(document.body), this.$scrollElement = e(e(t).is(document.body) ? window : t), this.options = e.extend({}, ScrollSpy.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
			}
			function Plugin(t) {
				return this.each(function() {
					var i = e(this),
						n = i.data("bs.scrollspy"),
						o = "object" == typeof t && t;
					n || i.data("bs.scrollspy", n = new ScrollSpy(this, o)), "string" == typeof t && n[t]()
				})
			}
			ScrollSpy.VERSION = "3.3.7", ScrollSpy.DEFAULTS = {
				offset: 10
			}, ScrollSpy.prototype.getScrollHeight = function() {
				return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
			}, ScrollSpy.prototype.refresh = function() {
				var t = this,
					i = "offset",
					n = 0;
				this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
					var t = e(this),
						o = t.data("target") || t.attr("href"),
						s = /^#./.test(o) && e(o);
					return s && s.length && s.is(":visible") && [
						[s[i]().top + n, o]
					] || null
				}).sort(function(e, t) {
					return e[0] - t[0]
				}).each(function() {
					t.offsets.push(this[0]), t.targets.push(this[1])
				})
			}, ScrollSpy.prototype.process = function() {
				var e, t = this.$scrollElement.scrollTop() + this.options.offset,
					i = this.getScrollHeight(),
					n = this.options.offset + i - this.$scrollElement.height(),
					o = this.offsets,
					s = this.targets,
					r = this.activeTarget;
				if (this.scrollHeight != i && this.refresh(), t >= n) return r != (e = s[s.length - 1]) && this.activate(e);
				if (r && t < o[0]) return this.activeTarget = null, this.clear();
				for (e = o.length; e--;) r != s[e] && t >= o[e] && (void 0 === o[e + 1] || t < o[e + 1]) && this.activate(s[e])
			}, ScrollSpy.prototype.activate = function(t) {
				this.activeTarget = t, this.clear();
				var i = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
					n = e(i).parents("li").addClass("active");
				n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
			}, ScrollSpy.prototype.clear = function() {
				e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
			};
			var t = e.fn.scrollspy;
			e.fn.scrollspy = Plugin, e.fn.scrollspy.Constructor = ScrollSpy, e.fn.scrollspy.noConflict = function() {
				return e.fn.scrollspy = t, this
			}, e(window).on("load.bs.scrollspy.data-api", function() {
				e('[data-spy="scroll"]').each(function() {
					var t = e(this);
					Plugin.call(t, t.data())
				})
			})
		}(e), function(e) {
			"use strict";

			function Plugin(i) {
				return this.each(function() {
					var n = e(this),
						o = n.data("bs.tab");
					o || n.data("bs.tab", o = new t(this)), "string" == typeof i && o[i]()
				})
			}
			var t = function(t) {
					this.element = e(t)
				};
			t.VERSION = "3.3.7", t.TRANSITION_DURATION = 150, t.prototype.show = function() {
				var t = this.element,
					i = t.closest("ul:not(.dropdown-menu)"),
					n = t.data("target");
				if (n || (n = t.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
					var o = i.find(".active:last a"),
						s = e.Event("hide.bs.tab", {
							relatedTarget: t[0]
						}),
						r = e.Event("show.bs.tab", {
							relatedTarget: o[0]
						});
					if (o.trigger(s), t.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
						var a = e(n);
						this.activate(t.closest("li"), i), this.activate(a, a.parent(), function() {
							o.trigger({
								type: "hidden.bs.tab",
								relatedTarget: t[0]
							}), t.trigger({
								type: "shown.bs.tab",
								relatedTarget: o[0]
							})
						})
					}
				}
			}, t.prototype.activate = function(i, n, o) {
				function next() {
					s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade"), i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
				}
				var s = n.find("> .active"),
					r = o && e.support.transition && (s.length && s.hasClass("fade") || !! n.find("> .fade").length);
				s.length && r ? s.one("bsTransitionEnd", next).emulateTransitionEnd(t.TRANSITION_DURATION) : next(), s.removeClass("in")
			};
			var i = e.fn.tab;
			e.fn.tab = Plugin, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function() {
				return e.fn.tab = i, this
			};
			var n = function(t) {
					t.preventDefault(), Plugin.call(e(this), "show")
				};
			e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
		}(e), function(e) {
			"use strict";

			function Plugin(i) {
				return this.each(function() {
					var n = e(this),
						o = n.data("bs.affix"),
						s = "object" == typeof i && i;
					o || n.data("bs.affix", o = new t(this, s)), "string" == typeof i && o[i]()
				})
			}
			var t = function(i, n) {
					this.options = e.extend({}, t.DEFAULTS, n), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(i), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
				};
			t.VERSION = "3.3.7", t.RESET = "affix affix-top affix-bottom", t.DEFAULTS = {
				offset: 0,
				target: window
			}, t.prototype.getState = function(e, t, i, n) {
				var o = this.$target.scrollTop(),
					s = this.$element.offset(),
					r = this.$target.height();
				if (null != i && "top" == this.affixed) return o < i && "top";
				if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= s.top) && "bottom" : !(o + r <= e - n) && "bottom";
				var a = null == this.affixed,
					l = a ? o : s.top,
					c = a ? r : t;
				return null != i && o <= i ? "top" : null != n && l + c >= e - n && "bottom"
			}, t.prototype.getPinnedOffset = function() {
				if (this.pinnedOffset) return this.pinnedOffset;
				this.$element.removeClass(t.RESET).addClass("affix");
				var e = this.$target.scrollTop(),
					i = this.$element.offset();
				return this.pinnedOffset = i.top - e
			}, t.prototype.checkPositionWithEventLoop = function() {
				setTimeout(e.proxy(this.checkPosition, this), 1)
			}, t.prototype.checkPosition = function() {
				if (this.$element.is(":visible")) {
					var i = this.$element.height(),
						n = this.options.offset,
						o = n.top,
						s = n.bottom,
						r = Math.max(e(document).height(), e(document.body).height());
					"object" != typeof n && (s = o = n), "function" == typeof o && (o = n.top(this.$element)), "function" == typeof s && (s = n.bottom(this.$element));
					var a = this.getState(r, i, o, s);
					if (this.affixed != a) {
						null != this.unpin && this.$element.css("top", "");
						var l = "affix" + (a ? "-" + a : ""),
							c = e.Event(l + ".bs.affix");
						if (this.$element.trigger(c), c.isDefaultPrevented()) return;
						this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(t.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
					}
					"bottom" == a && this.$element.offset({
						top: r - i - s
					})
				}
			};
			var i = e.fn.affix;
			e.fn.affix = Plugin, e.fn.affix.Constructor = t, e.fn.affix.noConflict = function() {
				return e.fn.affix = i, this
			}, e(window).on("load", function() {
				e('[data-spy="affix"]').each(function() {
					var t = e(this),
						i = t.data();
					i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), Plugin.call(t, i)
				})
			})
		}(e)
	}).call(t, i(0))
}, function(e, t) {}, function(e, t, i) {
	var n, o, s;
	!
	function(r) {
		"use strict";
		o = [i(0)], n = r, void 0 !== (s = "function" == typeof n ? n.apply(t, o) : n) && (e.exports = s)
	}(function(e) {
		"use strict";
		var t = window.Slick || {};
		t = function() {
			function Slick(i, n) {
				var o, s = this;
				s.defaults = {
					accessibility: !0,
					adaptiveHeight: !1,
					appendArrows: e(i),
					appendDots: e(i),
					arrows: !0,
					asNavFor: null,
					prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
					nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
					autoplay: !1,
					autoplaySpeed: 3e3,
					centerMode: !1,
					centerPadding: "50px",
					cssEase: "ease",
					customPaging: function(t, i) {
						return e('<button type="button" />').text(i + 1)
					},
					dots: !1,
					dotsClass: "slick-dots",
					draggable: !0,
					easing: "linear",
					edgeFriction: .35,
					fade: !1,
					focusOnSelect: !1,
					focusOnChange: !1,
					infinite: !0,
					initialSlide: 0,
					lazyLoad: "ondemand",
					mobileFirst: !1,
					pauseOnHover: !0,
					pauseOnFocus: !0,
					pauseOnDotsHover: !1,
					respondTo: "window",
					responsive: null,
					rows: 1,
					rtl: !1,
					slide: "",
					slidesPerRow: 1,
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 500,
					swipe: !0,
					swipeToSlide: !1,
					touchMove: !0,
					touchThreshold: 5,
					useCSS: !0,
					useTransform: !0,
					variableWidth: !1,
					vertical: !1,
					verticalSwiping: !1,
					waitForAnimate: !0,
					zIndex: 1e3
				}, s.initials = {
					animating: !1,
					dragging: !1,
					autoPlayTimer: null,
					currentDirection: 0,
					currentLeft: null,
					currentSlide: 0,
					direction: 1,
					$dots: null,
					listWidth: null,
					listHeight: null,
					loadIndex: 0,
					$nextArrow: null,
					$prevArrow: null,
					scrolling: !1,
					slideCount: null,
					slideWidth: null,
					$slideTrack: null,
					$slides: null,
					sliding: !1,
					slideOffset: 0,
					swipeLeft: null,
					swiping: !1,
					$list: null,
					touchObject: {},
					transformsEnabled: !1,
					unslicked: !1
				}, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = e(i), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = e(i).data("slick") || {}, s.options = e.extend({}, s.defaults, n, o), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.instanceUid = t++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
			}
			var t = 0;
			return Slick
		}(), t.prototype.activateADA = function() {
			this.$slideTrack.find(".slick-active").attr({
				"aria-hidden": "false"
			}).find("a, input, button, select").attr({
				tabindex: "0"
			})
		}, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
			var o = this;
			if ("boolean" == typeof i) n = i, i = null;
			else if (i < 0 || i >= o.slideCount) return !1;
			o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : n ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : !0 === n ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, i) {
				e(i).attr("data-slick-index", t)
			}), o.$slidesCache = o.$slides, o.reinit()
		}, t.prototype.animateHeight = function() {
			var e = this;
			if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
				var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
				e.$list.animate({
					height: t
				}, e.options.speed)
			}
		}, t.prototype.animateSlide = function(t, i) {
			var n = {},
				o = this;
			o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
				left: t
			}, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
				top: t
			}, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
				animStart: o.currentLeft
			}).animate({
				animStart: t
			}, {
				duration: o.options.speed,
				easing: o.options.easing,
				step: function(e) {
					e = Math.ceil(e), !1 === o.options.vertical ? (n[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(n))
				},
				complete: function() {
					i && i.call()
				}
			})) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function() {
				o.disableTransition(), i.call()
			}, o.options.speed))
		}, t.prototype.getNavTarget = function() {
			var t = this,
				i = t.options.asNavFor;
			return i && null !== i && (i = e(i).not(t.$slider)), i
		}, t.prototype.asNavFor = function(t) {
			var i = this,
				n = i.getNavTarget();
			null !== n && "object" == typeof n && n.each(function() {
				var i = e(this).slick("getSlick");
				i.unslicked || i.slideHandler(t, !0)
			})
		}, t.prototype.applyTransition = function(e) {
			var t = this,
				i = {};
			!1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
		}, t.prototype.autoPlay = function() {
			var e = this;
			e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
		}, t.prototype.autoPlayClear = function() {
			var e = this;
			e.autoPlayTimer && clearInterval(e.autoPlayTimer)
		}, t.prototype.autoPlayIterator = function() {
			var e = this,
				t = e.currentSlide + e.options.slidesToScroll;
			e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
		}, t.prototype.buildArrows = function() {
			var t = this;
			!0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
				"aria-disabled": "true",
				tabindex: "-1"
			}))
		}, t.prototype.buildDots = function() {
			var t, i, n = this;
			if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
				for (n.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(n.options.dotsClass), t = 0; t <= n.getDotCount(); t += 1) i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
				n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
			}
		}, t.prototype.buildOut = function() {
			var t = this;
			t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
				e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
			}), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
		}, t.prototype.buildRows = function() {
			var e, t, i, n, o, s, r, a = this;
			if (n = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 0) {
				for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), e = 0; e < o; e++) {
					var l = document.createElement("div");
					for (t = 0; t < a.options.rows; t++) {
						var c = document.createElement("div");
						for (i = 0; i < a.options.slidesPerRow; i++) {
							var d = e * r + (t * a.options.slidesPerRow + i);
							s.get(d) && c.appendChild(s.get(d))
						}
						l.appendChild(c)
					}
					n.appendChild(l)
				}
				a.$slider.empty().append(n), a.$slider.children().children().children().css({
					width: 100 / a.options.slidesPerRow + "%",
					display: "inline-block"
				})
			}
		}, t.prototype.checkResponsive = function(t, i) {
			var n, o, s, r = this,
				a = !1,
				l = r.$slider.width(),
				c = window.innerWidth || e(window).width();
			if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
				o = null;
				for (n in r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[n] && (o = r.breakpoints[n]) : s > r.breakpoints[n] && (o = r.breakpoints[n]));
				null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t), a = o), t || !1 === a || r.$slider.trigger("breakpoint", [r, a])
			}
		}, t.prototype.changeSlide = function(t, i) {
			var n, o, s, r = this,
				a = e(t.currentTarget);
			switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), s = r.slideCount % r.options.slidesToScroll != 0, n = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
			case "previous":
				o = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
				break;
			case "next":
				o = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
				break;
			case "index":
				var l = 0 === t.data.index ? 0 : t.data.index || a.index() * r.options.slidesToScroll;
				r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
				break;
			default:
				return
			}
		}, t.prototype.checkNavigable = function(e) {
			var t, i, n = this;
			if (t = n.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1];
			else for (var o in t) {
				if (e < t[o]) {
					e = i;
					break
				}
				i = t[o]
			}
			return e
		}, t.prototype.cleanUpEvents = function() {
			var t = this;
			t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
		}, t.prototype.cleanUpSlideEvents = function() {
			var t = this;
			t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
		}, t.prototype.cleanUpRows = function() {
			var e, t = this;
			t.options.rows > 0 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.empty().append(e))
		}, t.prototype.clickHandler = function(e) {
			!1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
		}, t.prototype.destroy = function(t) {
			var i = this;
			i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
				e(this).attr("style", e(this).data("originalStyling"))
			}), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
		}, t.prototype.disableTransition = function(e) {
			var t = this,
				i = {};
			i[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
		}, t.prototype.fadeSlide = function(e, t) {
			var i = this;
			!1 === i.cssTransitions ? (i.$slides.eq(e).css({
				zIndex: i.options.zIndex
			}), i.$slides.eq(e).animate({
				opacity: 1
			}, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
				opacity: 1,
				zIndex: i.options.zIndex
			}), t && setTimeout(function() {
				i.disableTransition(e), t.call()
			}, i.options.speed))
		}, t.prototype.fadeSlideOut = function(e) {
			var t = this;
			!1 === t.cssTransitions ? t.$slides.eq(e).animate({
				opacity: 0,
				zIndex: t.options.zIndex - 2
			}, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
				opacity: 0,
				zIndex: t.options.zIndex - 2
			}))
		}, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
			var t = this;
			null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
		}, t.prototype.focusHandler = function() {
			var t = this;
			t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
				i.stopImmediatePropagation();
				var n = e(this);
				setTimeout(function() {
					t.options.pauseOnFocus && (t.focussed = n.is(":focus"), t.autoPlay())
				}, 0)
			})
		}, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
			return this.currentSlide
		}, t.prototype.getDotCount = function() {
			var e = this,
				t = 0,
				i = 0,
				n = 0;
			if (!0 === e.options.infinite) if (e.slideCount <= e.options.slidesToShow)++n;
			else for (; t < e.slideCount;)++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
			else if (!0 === e.options.centerMode) n = e.slideCount;
			else if (e.options.asNavFor) for (; t < e.slideCount;)++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
			else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
			return n - 1
		}, t.prototype.getLeft = function(e) {
			var t, i, n, o, s = this,
				r = 0;
			return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, o = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? o = -1.5 : 1 === s.options.slidesToShow && (o = -2)), r = i * s.options.slidesToShow * o), s.slideCount % s.options.slidesToScroll != 0 && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1, r = (s.options.slidesToShow - (e - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, r = s.slideCount % s.options.slidesToScroll * i * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (e + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, r = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), t = !1 === s.options.vertical ? e * s.slideWidth * -1 + s.slideOffset : e * i * -1 + r, !0 === s.options.variableWidth && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow), t = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === s.options.centerMode && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1), t = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (s.$list.width() - n.outerWidth()) / 2)), t
		}, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
			return this.options[e]
		}, t.prototype.getNavigableIndexes = function() {
			var e, t = this,
				i = 0,
				n = 0,
				o = [];
			for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
			return o
		}, t.prototype.getSlick = function() {
			return this
		}, t.prototype.getSlideCount = function() {
			var t, i, n = this;
			return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(o, s) {
				if (s.offsetLeft - i + e(s).outerWidth() / 2 > -1 * n.swipeLeft) return t = s, !1
			}), Math.abs(e(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
		}, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
			this.changeSlide({
				data: {
					message: "index",
					index: parseInt(e)
				}
			}, t)
		}, t.prototype.init = function(t) {
			var i = this;
			e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
		}, t.prototype.initADA = function() {
			var t = this,
				i = Math.ceil(t.slideCount / t.options.slidesToShow),
				n = t.getNavigableIndexes().filter(function(e) {
					return e >= 0 && e < t.slideCount
				});
			t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
				"aria-hidden": "true",
				tabindex: "-1"
			}).find("a, input, button, select").attr({
				tabindex: "-1"
			}), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
				var o = n.indexOf(i);
				if (e(this).attr({
					role: "tabpanel",
					id: "slick-slide" + t.instanceUid + i,
					tabindex: -1
				}), -1 !== o) {
					var s = "slick-slide-control" + t.instanceUid + o;
					e("#" + s).length && e(this).attr({
						"aria-describedby": s
					})
				}
			}), t.$dots.attr("role", "tablist").find("li").each(function(o) {
				var s = n[o];
				e(this).attr({
					role: "presentation"
				}), e(this).find("button").first().attr({
					role: "tab",
					id: "slick-slide-control" + t.instanceUid + o,
					"aria-controls": "slick-slide" + t.instanceUid + s,
					"aria-label": o + 1 + " of " + i,
					"aria-selected": null,
					tabindex: "-1"
				})
			}).eq(t.currentSlide).find("button").attr({
				"aria-selected": "true",
				tabindex: "0"
			}).end());
			for (var o = t.currentSlide, s = o + t.options.slidesToShow; o < s; o++) t.options.focusOnChange ? t.$slides.eq(o).attr({
				tabindex: "0"
			}) : t.$slides.eq(o).removeAttr("tabindex");
			t.activateADA()
		}, t.prototype.initArrowEvents = function() {
			var e = this;
			!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
				message: "previous"
			}, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
				message: "next"
			}, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
		}, t.prototype.initDotEvents = function() {
			var t = this;
			!0 === t.options.dots && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", {
				message: "index"
			}, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
		}, t.prototype.initSlideEvents = function() {
			var t = this;
			t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
		}, t.prototype.initializeEvents = function() {
			var t = this;
			t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
				action: "start"
			}, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
				action: "move"
			}, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
				action: "end"
			}, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
				action: "end"
			}, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
		}, t.prototype.initUI = function() {
			var e = this;
			!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
		}, t.prototype.keyHandler = function(e) {
			var t = this;
			e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
				data: {
					message: !0 === t.options.rtl ? "next" : "previous"
				}
			}) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
				data: {
					message: !0 === t.options.rtl ? "previous" : "next"
				}
			}))
		}, t.prototype.lazyLoad = function() {
			function loadImages(t) {
				e("img[data-lazy]", t).each(function() {
					var t = e(this),
						i = e(this).attr("data-lazy"),
						n = e(this).attr("data-srcset"),
						o = e(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
						r = document.createElement("img");
					r.onload = function() {
						t.animate({
							opacity: 0
						}, 100, function() {
							n && (t.attr("srcset", n), o && t.attr("sizes", o)), t.attr("src", i).animate({
								opacity: 1
							}, 200, function() {
								t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
							}), s.$slider.trigger("lazyLoaded", [s, t, i])
						})
					}, r.onerror = function() {
						t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, i])
					}, r.src = i
				})
			}
			var t, i, n, o, s = this;
			if (!0 === s.options.centerMode ? !0 === s.options.infinite ? (n = s.currentSlide + (s.options.slidesToShow / 2 + 1), o = n + s.options.slidesToShow + 2) : (n = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), o = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (n = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, o = Math.ceil(n + s.options.slidesToShow), !0 === s.options.fade && (n > 0 && n--, o <= s.slideCount && o++)), t = s.$slider.find(".slick-slide").slice(n, o), "anticipated" === s.options.lazyLoad) for (var r = n - 1, a = o, l = s.$slider.find(".slick-slide"), c = 0; c < s.options.slidesToScroll; c++) r < 0 && (r = s.slideCount - 1), t = t.add(l.eq(r)), t = t.add(l.eq(a)), r--, a++;
			loadImages(t), s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"), loadImages(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), loadImages(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), loadImages(i))
		}, t.prototype.loadSlider = function() {
			var e = this;
			e.setPosition(), e.$slideTrack.css({
				opacity: 1
			}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
		}, t.prototype.next = t.prototype.slickNext = function() {
			this.changeSlide({
				data: {
					message: "next"
				}
			})
		}, t.prototype.orientationChange = function() {
			var e = this;
			e.checkResponsive(), e.setPosition()
		}, t.prototype.pause = t.prototype.slickPause = function() {
			var e = this;
			e.autoPlayClear(), e.paused = !0
		}, t.prototype.play = t.prototype.slickPlay = function() {
			var e = this;
			e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
		}, t.prototype.postSlide = function(t) {
			var i = this;
			if (!i.unslicked && (i.$slider.trigger("afterChange", [i, t]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange))) {
				e(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()
			}
		}, t.prototype.prev = t.prototype.slickPrev = function() {
			this.changeSlide({
				data: {
					message: "previous"
				}
			})
		}, t.prototype.preventDefault = function(e) {
			e.preventDefault()
		}, t.prototype.progressiveLazyLoad = function(t) {
			t = t || 1;
			var i, n, o, s, r, a = this,
				l = e("img[data-lazy]", a.$slider);
			l.length ? (i = l.first(), n = i.attr("data-lazy"), o = i.attr("data-srcset"), s = i.attr("data-sizes") || a.$slider.attr("data-sizes"), r = document.createElement("img"), r.onload = function() {
				o && (i.attr("srcset", o), s && i.attr("sizes", s)), i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, n]), a.progressiveLazyLoad()
			}, r.onerror = function() {
				t < 3 ? setTimeout(function() {
					a.progressiveLazyLoad(t + 1)
				}, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad())
			}, r.src = n) : a.$slider.trigger("allImagesLoaded", [a])
		}, t.prototype.refresh = function(t) {
			var i, n, o = this;
			n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
				currentSlide: i
			}), o.init(), t || o.changeSlide({
				data: {
					message: "index",
					index: i
				}
			}, !1)
		}, t.prototype.registerBreakpoints = function() {
			var t, i, n, o = this,
				s = o.options.responsive || null;
			if ("array" === e.type(s) && s.length) {
				o.respondTo = o.options.respondTo || "window";
				for (t in s) if (n = o.breakpoints.length - 1, s.hasOwnProperty(t)) {
					for (i = s[t].breakpoint; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
					o.breakpoints.push(i), o.breakpointSettings[i] = s[t].settings
				}
				o.breakpoints.sort(function(e, t) {
					return o.options.mobileFirst ? e - t : t - e
				})
			}
		}, t.prototype.reinit = function() {
			var t = this;
			t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
		}, t.prototype.resize = function() {
			var t = this;
			e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
				t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
			}, 50))
		}, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
			var n = this;
			if ("boolean" == typeof e ? (t = e, e = !0 === t ? 0 : n.slideCount - 1) : e = !0 === t ? --e : e, n.slideCount < 1 || e < 0 || e > n.slideCount - 1) return !1;
			n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
		}, t.prototype.setCSS = function(e) {
			var t, i, n = this,
				o = {};
			!0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {}, !1 === n.cssTransitions ? (o[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(o)))
		}, t.prototype.setDimensions = function() {
			var e = this;
			!1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
				padding: "0px " + e.options.centerPadding
			}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
				padding: e.options.centerPadding + " 0px"
			})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
			var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
			!1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
		}, t.prototype.setFade = function() {
			var t, i = this;
			i.$slides.each(function(n, o) {
				t = i.slideWidth * n * -1, !0 === i.options.rtl ? e(o).css({
					position: "relative",
					right: t,
					top: 0,
					zIndex: i.options.zIndex - 2,
					opacity: 0
				}) : e(o).css({
					position: "relative",
					left: t,
					top: 0,
					zIndex: i.options.zIndex - 2,
					opacity: 0
				})
			}), i.$slides.eq(i.currentSlide).css({
				zIndex: i.options.zIndex - 1,
				opacity: 1
			})
		}, t.prototype.setHeight = function() {
			var e = this;
			if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
				var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
				e.$list.css("height", t)
			}
		}, t.prototype.setOption = t.prototype.slickSetOption = function() {
			var t, i, n, o, s, r = this,
				a = !1;
			if ("object" === e.type(arguments[0]) ? (n = arguments[0], a = arguments[1], s = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[n] = o;
			else if ("multiple" === s) e.each(n, function(e, t) {
				r.options[e] = t
			});
			else if ("responsive" === s) for (i in o) if ("array" !== e.type(r.options.responsive)) r.options.responsive = [o[i]];
			else {
				for (t = r.options.responsive.length - 1; t >= 0;) r.options.responsive[t].breakpoint === o[i].breakpoint && r.options.responsive.splice(t, 1), t--;
				r.options.responsive.push(o[i])
			}
			a && (r.unload(), r.reinit())
		}, t.prototype.setPosition = function() {
			var e = this;
			e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
		}, t.prototype.setProps = function() {
			var e = this,
				t = document.body.style;
			e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
		}, t.prototype.setSlideClasses = function(e) {
			var t, i, n, o, s = this;
			if (i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode) {
				var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
				t = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t + r, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + e, i.slice(n - t + 1 + r, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")
			} else e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
			"ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
		}, t.prototype.setupInfinite = function() {
			var t, i, n, o = this;
			if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
				for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - n; t -= 1) i = t - 1, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
				for (t = 0; t < n + o.slideCount; t += 1) i = t, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
				o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
					e(this).attr("id", "")
				})
			}
		}, t.prototype.interrupt = function(e) {
			var t = this;
			e || t.autoPlay(), t.interrupted = e
		}, t.prototype.selectHandler = function(t) {
			var i = this,
				n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
				o = parseInt(n.attr("data-slick-index"));
			if (o || (o = 0), i.slideCount <= i.options.slidesToShow) return void i.slideHandler(o, !1, !0);
			i.slideHandler(o)
		}, t.prototype.slideHandler = function(e, t, i) {
			var n, o, s, r, a, l = null,
				c = this;
			if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e)) {
				if (!1 === t && c.asNavFor(e), n = e, l = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) return void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(r, function() {
					c.postSlide(n)
				}) : c.postSlide(n)));
				if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) return void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(r, function() {
					c.postSlide(n)
				}) : c.postSlide(n)));
				if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(s), c.fadeSlide(o, function() {
					c.postSlide(o)
				})) : c.postSlide(o), void c.animateHeight();
				!0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(l, function() {
					c.postSlide(o)
				}) : c.postSlide(o)
			}
		}, t.prototype.startLoad = function() {
			var e = this;
			!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
		}, t.prototype.swipeDirection = function() {
			var e, t, i, n, o = this;
			return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), n = Math.round(180 * i / Math.PI), n < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? !1 === o.options.rtl ? "left" : "right" : n <= 360 && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
		}, t.prototype.swipeEnd = function(e) {
			var t, i, n = this;
			if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1, !1;
			if (n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
			if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
				switch (i = n.swipeDirection()) {
				case "left":
				case "down":
					t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
					break;
				case "right":
				case "up":
					t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
				}
				"vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
			} else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
		}, t.prototype.swipeHandler = function(e) {
			var t = this;
			if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
			case "start":
				t.swipeStart(e);
				break;
			case "move":
				t.swipeMove(e);
				break;
			case "end":
				t.swipeEnd(e)
			}
		}, t.prototype.swipeMove = function(e) {
			var t, i, n, o, s, r, a = this;
			return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + n * o : a.swipeLeft = t + n * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
		}, t.prototype.swipeStart = function(e) {
			var t, i = this;
			if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
			void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
		}, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
			var e = this;
			null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
		}, t.prototype.unload = function() {
			var t = this;
			e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
		}, t.prototype.unslick = function(e) {
			var t = this;
			t.$slider.trigger("unslick", [t, e]), t.destroy()
		}, t.prototype.updateArrows = function() {
			var e = this;
			Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
		}, t.prototype.updateDots = function() {
			var e = this;
			null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
		}, t.prototype.visibility = function() {
			var e = this;
			e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
		}, e.fn.slick = function() {
			var e, i, n = this,
				o = arguments[0],
				s = Array.prototype.slice.call(arguments, 1),
				r = n.length;
			for (e = 0; e < r; e++) if ("object" == typeof o || void 0 === o ? n[e].slick = new t(n[e], o) : i = n[e].slick[o].apply(n[e].slick, s), void 0 !== i) return i;
			return n
		}
	})
}, function(e, t, i) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = i(0);
	t.
default = function() {
		var e = window.location.pathname,
			t = '[href="' + e + '"]';
		n("#nav").find(t).parent().addClass("active")
	}
}, function(e, t, i) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = i(0);
	t.
default = function() {
		n("#highlightSchemesSlider").slick({
			dots: !0,
			centerMode: !0,
			centerPadding: "0",
			slidesToShow: 3,
			initialSlide: 4,
			prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-right"></i></button>',
			responsive: [{
				breakpoint: 768,
				settings: {
					arrows: !1,
					centerMode: !0,
					centerPadding: "0",
					slidesToShow: 3
				}
			}, {
				breakpoint: 480,
				settings: {
					arrows: !1,
					centerMode: !0,
					centerPadding: "0",
					slidesToShow: 1
				}
			}]
		})
	}
}, function(e, t, i) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = i(0),
		o = i(1);
	t.
default = function() {
		o.
	default (".home #nav", {
			top: n("header").height()
		})
	}
}, function(e, t, i) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = i(0);
	t.
default = function() {
		n(".back-to-top").on("click", function(e) {
			e.preventDefault(), n("html, body").animate({
				scrollTop: 0
			}, 800)
		})
	}
}, function(e, t, i) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = i(0),
		o = i(1);
	t.
default = function() {
		n(".next-docs-sidebar").length > 0 && (o.
	default (".next-docs-sidebar", {
			top: n(".next-docs-sections").offset().top,
			bottom: 120
		}), n("body").scrollspy({
			target: ".next-docs-sidebar"
		}))
	}
}, function(e, t, i) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = i(0);
	i(2), i(4), i(3);
	var o = i(6),
		s = i(5),
		r = i(8),
		a = i(7),
		l = i(9);
	n(document).ready(function() {
		a.
	default (), l.
	default (), o.
	default (), s.
	default (), r.
	default ()
	})
}]);