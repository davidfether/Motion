! function () {
  "use strict";

  function t(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
  }

  function e(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
  }
  /*!
   * GSAP 3.11.3
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */
  var r, i, n, s, a, o, u, h, f, l, c, p, _, d, m, g = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: {
        lineHeight: ""
      }
    },
    v = {
      duration: .5,
      overwrite: !1,
      delay: 0
    },
    y = 1e8,
    T = 1e-8,
    x = 2 * Math.PI,
    w = x / 4,
    b = 0,
    M = Math.sqrt,
    O = Math.cos,
    k = Math.sin,
    A = function (t) {
      return "string" == typeof t
    },
    C = function (t) {
      return "function" == typeof t
    },
    D = function (t) {
      return "number" == typeof t
    },
    S = function (t) {
      return void 0 === t
    },
    E = function (t) {
      return "object" == typeof t
    },
    P = function (t) {
      return !1 !== t
    },
    R = function () {
      return "undefined" != typeof window
    },
    z = function (t) {
      return C(t) || A(t)
    },
    F = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
    B = Array.isArray,
    L = /(?:-?\.?\d|\.)+/gi,
    I = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    U = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Y = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    N = /[+-]=-?[.\d]+/,
    X = /[^,'"\[\]\s]+/gi,
    q = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    V = {},
    j = {},
    G = function (t) {
      return (j = wt(t, V)) && wr
    },
    W = function (t, e) {
      return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    },
    Q = function (t, e) {
      return !e && console.warn(t)
    },
    H = function (t, e) {
      return t && (V[t] = e) && j && (j[t] = e) || V
    },
    Z = function () {
      return 0
    },
    J = {
      suppressEvents: !0,
      isStart: !0,
      kill: !1
    },
    K = {
      suppressEvents: !0,
      kill: !1
    },
    tt = {
      suppressEvents: !0
    },
    et = {},
    rt = [],
    it = {},
    nt = {},
    st = {},
    at = 30,
    ot = [],
    ut = "",
    ht = function (t) {
      var e, r, i = t[0];
      if (E(i) || C(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
        for (r = ot.length; r-- && !ot[r].targetTest(i););
        e = ot[r]
      }
      for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Le(t[r], e))) || t.splice(r, 1);
      return t
    },
    ft = function (t) {
      return t._gsap || ht(ee(t))[0]._gsap
    },
    lt = function (t, e, r) {
      return (r = t[e]) && C(r) ? t[e]() : S(r) && t.getAttribute && t.getAttribute(e) || r
    },
    ct = function (t, e) {
      return (t = t.split(",")).forEach(e) || t
    },
    pt = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0
    },
    _t = function (t) {
      return Math.round(1e7 * t) / 1e7 || 0
    },
    dt = function (t, e) {
      var r = e.charAt(0),
        i = parseFloat(e.substr(2));
      return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
    },
    mt = function (t, e) {
      for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
      return i < r
    },
    gt = function () {
      var t, e, r = rt.length,
        i = rt.slice(0);
      for (it = {}, rt.length = 0, t = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    },
    vt = function (t, e, r, n) {
      rt.length && gt(), t.render(e, r, n || i && e < 0 && (t._initted || t._startAt)), rt.length && gt()
    },
    yt = function (t) {
      var e = parseFloat(t);
      return (e || 0 === e) && (t + "").match(X).length < 2 ? e : A(t) ? t.trim() : t
    },
    Tt = function (t) {
      return t
    },
    xt = function (t, e) {
      for (var r in e) r in t || (t[r] = e[r]);
      return t
    },
    wt = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t
    },
    bt = function t(e, r) {
      for (var i in r) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (e[i] = E(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
      return e
    },
    Mt = function (t, e) {
      var r, i = {};
      for (r in t) r in e || (i[r] = t[r]);
      return i
    },
    Ot = function (t) {
      var e, r = t.parent || s,
        i = t.keyframes ? (e = B(t.keyframes), function (t, r) {
          for (var i in r) i in t || "duration" === i && e || "ease" === i || (t[i] = r[i])
        }) : xt;
      if (P(t.inherit))
        for (; r;) i(t, r.vars.defaults), r = r.parent || r._dp;
      return t
    },
    kt = function (t, e, r, i, n) {
      void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
      var s, a = t[i];
      if (n)
        for (s = e[n]; a && a[n] > s;) a = a._prev;
      return a ? (e._next = a._next, a._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = a, e.parent = e._dp = t, e
    },
    At = function (t, e, r, i) {
      void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
      var n = e._prev,
        s = e._next;
      n ? n._next = s : t[r] === e && (t[r] = s), s ? s._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
    },
    Ct = function (t, e) {
      t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
    },
    Dt = function (t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0))
        for (var r = t; r;) r._dirty = 1, r = r.parent;
      return t
    },
    St = function (t) {
      for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
      return t
    },
    Et = function (t, e, r, n) {
      return t._startAt && (i ? t._startAt.revert(K) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n))
    },
    Pt = function t(e) {
      return !e || e._ts && t(e.parent)
    },
    Rt = function (t) {
      return t._repeat ? zt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    },
    zt = function (t, e) {
      var r = Math.floor(t /= e);
      return t && r === t ? r - 1 : r
    },
    Ft = function (t, e) {
      return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    },
    Bt = function (t) {
      return t._end = _t(t._start + (t._tDur / Math.abs(t._ts || t._rts || T) || 0))
    },
    Lt = function (t, e) {
      var r = t._dp;
      return r && r.smoothChildTiming && t._ts && (t._start = _t(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Bt(t), r._dirty || Dt(r, t)), t
    },
    It = function (t, e) {
      var r;
      if ((e._time || e._initted && !e._dur) && (r = Ft(t.rawTime(), e), (!e._dur || Zt(0, e.totalDuration(), r) - e._tTime > T) && e.render(r, !0)), Dt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
        if (t._dur < t.duration())
          for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
        t._zTime = -1e-8
      }
    },
    Ut = function (t, e, r, i) {
      return e.parent && Ct(e), e._start = _t((D(r) ? r : r || t !== s ? Wt(t, r, e) : t._time) + e._delay), e._end = _t(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), kt(t, e, "_first", "_last", t._sort ? "_start" : 0), qt(e) || (t._recent = e), i || It(t, e), t._ts < 0 && Lt(t, t._tTime), t
    },
    Yt = function (t, e) {
      return (V.ScrollTrigger || W("scrollTrigger", e)) && V.ScrollTrigger.create(e, t)
    },
    Nt = function (t, e, r, n, s) {
      return je(t, e, s), t._initted ? !r && t._pt && !i && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Me.frame ? (rt.push(t), t._lazy = [s, n], 1) : void 0 : 1
    },
    Xt = function t(e) {
      var r = e.parent;
      return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
    },
    qt = function (t) {
      var e = t.data;
      return "isFromStart" === e || "isStart" === e
    },
    Vt = function (t, e, r, i) {
      var n = t._repeat,
        s = _t(e) || 0,
        a = t._tTime / t._tDur;
      return a && !i && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : _t(s * (n + 1) + t._rDelay * n) : s, a > 0 && !i && Lt(t, t._tTime = t._tDur * a), t.parent && Bt(t), r || Dt(t.parent, t), t
    },
    jt = function (t) {
      return t instanceof Ue ? Dt(t) : Vt(t, t._dur)
    },
    Gt = {
      _start: 0,
      endTime: Z,
      totalDuration: Z
    },
    Wt = function t(e, r, i) {
      var n, s, a, o = e.labels,
        u = e._recent || Gt,
        h = e.duration() >= y ? u.endTime(!1) : e._dur;
      return A(r) && (isNaN(r) || r in o) ? (s = r.charAt(0), a = "%" === r.substr(-1), n = r.indexOf("="), "<" === s || ">" === s ? (n >= 0 && (r = r.replace(/=/, "")), ("<" === s ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (a ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (r in o || (o[r] = h), o[r]) : (s = parseFloat(r.charAt(n - 1) + r.substr(n + 1)), a && i && (s = s / 100 * (B(i) ? i[0] : i).totalDuration()), n > 1 ? t(e, r.substr(0, n - 1), i) + s : h + s)) : null == r ? h : +r
    },
    Qt = function (t, e, r) {
      var i, n, s = D(e[1]),
        a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
        o = e[a];
      if (s && (o.duration = e[1]), o.parent = r, t) {
        for (i = o, n = r; n && !("immediateRender" in i);) i = n.vars.defaults || {}, n = P(n.vars.inherit) && n.parent;
        o.immediateRender = P(i.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
      }
      return new Ze(e[0], o, e[a + 1])
    },
    Ht = function (t, e) {
      return t || 0 === t ? e(t) : e
    },
    Zt = function (t, e, r) {
      return r < t ? t : r > e ? e : r
    },
    $t = function (t, e) {
      return A(t) && (e = q.exec(t)) ? e[1] : ""
    },
    Jt = [].slice,
    Kt = function (t, e) {
      return t && E(t) && "length" in t && (!e && !t.length || t.length - 1 in t && E(t[0])) && !t.nodeType && t !== a
    },
    te = function (t, e, r) {
      return void 0 === r && (r = []), t.forEach((function (t) {
        var i;
        return A(t) && !e || Kt(t, 1) ? (i = r).push.apply(i, ee(t)) : r.push(t)
      })) || r
    },
    ee = function (t, e, r) {
      return n && !e && n.selector ? n.selector(t) : !A(t) || r || !o && Oe() ? B(t) ? te(t, r) : Kt(t) ? Jt.call(t, 0) : t ? [t] : [] : Jt.call((e || u).querySelectorAll(t), 0)
    },
    re = function (t) {
      return t = ee(t)[0] || Q("Invalid scope") || {},
        function (e) {
          var r = t.current || t.nativeElement || t;
          return ee(e, r.querySelectorAll ? r : r === t ? Q("Invalid scope") || u.createElement("div") : t)
        }
    },
    ie = function (t) {
      return t.sort((function () {
        return .5 - Math.random()
      }))
    },
    ne = function (t) {
      if (C(t)) return t;
      var e = E(t) ? t : {
          each: t
        },
        r = Pe(e.ease),
        i = e.from || 0,
        n = parseFloat(e.base) || 0,
        s = {},
        a = i > 0 && i < 1,
        o = isNaN(i) || a,
        u = e.axis,
        h = i,
        f = i;
      return A(i) ? h = f = {
          center: .5,
          edges: .5,
          end: 1
        } [i] || 0 : !a && o && (h = i[0], f = i[1]),
        function (t, a, l) {
          var c, p, _, d, m, g, v, T, x, w = (l || e).length,
            b = s[w];
          if (!b) {
            if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, y])[1])) {
              for (v = -1e8; v < (v = l[x++].getBoundingClientRect().left) && x < w;);
              x--
            }
            for (b = s[w] = [], c = o ? Math.min(x, w) * h - .5 : i % x, p = x === y ? 0 : o ? w * f / x - .5 : i / x | 0, v = 0, T = y, g = 0; g < w; g++) _ = g % x - c, d = p - (g / x | 0), b[g] = m = u ? Math.abs("y" === u ? d : _) : M(_ * _ + d * d), m > v && (v = m), m < T && (T = m);
            "random" === i && ie(b), b.max = v - T, b.min = T, b.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (x > w ? w - 1 : u ? "y" === u ? w / x : x : Math.max(x, w / x)) || 0) * ("edges" === i ? -1 : 1), b.b = w < 0 ? n - w : n, b.u = $t(e.amount || e.each) || 0, r = r && w < 0 ? Se(r) : r
          }
          return w = (b[t] - b.min) / b.max || 0, _t(b.b + (r ? r(w) : w) * b.v) + b.u
        }
    },
    se = function (t) {
      var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (r) {
        var i = _t(Math.round(parseFloat(r) / t) * t * e);
        return (i - i % 1) / e + (D(r) ? 0 : $t(r))
      }
    },
    ae = function (t, e) {
      var r, i, n = B(t);
      return !n && E(t) && (r = n = t.radius || y, t.values ? (t = ee(t.values), (i = !D(t[0])) && (r *= r)) : t = se(t.increment)), Ht(e, n ? C(t) ? function (e) {
        return i = t(e), Math.abs(i - e) <= r ? i : e
      } : function (e) {
        for (var n, s, a = parseFloat(i ? e.x : e), o = parseFloat(i ? e.y : 0), u = y, h = 0, f = t.length; f--;)(n = i ? (n = t[f].x - a) * n + (s = t[f].y - o) * s : Math.abs(t[f] - a)) < u && (u = n, h = f);
        return h = !r || u <= r ? t[h] : e, i || h === e || D(e) ? h : h + $t(e)
      } : se(t))
    },
    oe = function (t, e, r, i) {
      return Ht(B(t) ? !e : !0 === r ? !!(r = 0) : !i, (function () {
        return B(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
      }))
    },
    ue = function (t, e, r) {
      return Ht(r, (function (r) {
        return t[~~e(r)]
      }))
    },
    he = function (t) {
      for (var e, r, i, n, s = 0, a = ""; ~(e = t.indexOf("random(", s));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? X : L), a += t.substr(s, e - s) + oe(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), s = i + 1;
      return a + t.substr(s, t.length - s)
    },
    fe = function (t, e, r, i, n) {
      var s = e - t,
        a = i - r;
      return Ht(n, (function (e) {
        return r + ((e - t) / s * a || 0)
      }))
    },
    le = function (t, e, r) {
      var i, n, s, a = t.labels,
        o = y;
      for (i in a)(n = a[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (s = i, o = n);
      return s
    },
    ce = function (t, e, r) {
      var i, s, a, o = t.vars,
        u = o[e],
        h = n,
        f = t._ctx;
      if (u) return i = o[e + "Params"], s = o.callbackScope || t, r && rt.length && gt(), f && (n = f), a = i ? u.apply(s, i) : u.call(s), n = h, a
    },
    pe = function (t) {
      return Ct(t), t.scrollTrigger && t.scrollTrigger.kill(!!i), t.progress() < 1 && ce(t, "onInterrupt"), t
    },
    _e = function (t) {
      var e = (t = !t.name && t.default || t).name,
        r = C(t),
        i = e && !r && t.init ? function () {
          this._props = []
        } : t,
        n = {
          init: Z,
          render: sr,
          add: qe,
          kill: or,
          modifier: ar,
          rawVars: 0
        },
        s = {
          targetTest: 0,
          get: 0,
          getSetter: er,
          aliases: {},
          register: 0
        };
      if (Oe(), t !== i) {
        if (nt[e]) return;
        xt(i, xt(Mt(t, n), s)), wt(i.prototype, wt(n, Mt(t, s))), nt[i.prop = e] = i, t.targetTest && (ot.push(i), et[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
      }
      H(e, i), t.register && t.register(wr, i, fr)
    },
    de = 255,
    me = {
      aqua: [0, de, de],
      lime: [0, de, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, de],
      navy: [0, 0, 128],
      white: [de, de, de],
      olive: [128, 128, 0],
      yellow: [de, de, 0],
      orange: [de, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [de, 0, 0],
      pink: [de, 192, 203],
      cyan: [0, de, de],
      transparent: [de, de, de, 0]
    },
    ge = function (t, e, r) {
      return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * de + .5 | 0
    },
    ve = function (t, e, r) {
      var i, n, s, a, o, u, h, f, l, c, p = t ? D(t) ? [t >> 16, t >> 8 & de, t & de] : 0 : me.black;
      if (!p) {
        if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), me[t]) p = me[t];
        else if ("#" === t.charAt(0)) {
          if (t.length < 6 && (i = t.charAt(1), n = t.charAt(2), s = t.charAt(3), t = "#" + i + i + n + n + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & de, p & de, parseInt(t.substr(7), 16) / 255];
          p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & de, t & de]
        } else if ("hsl" === t.substr(0, 3))
          if (p = c = t.match(L), e) {
            if (~t.indexOf("=")) return p = t.match(I), r && p.length < 4 && (p[3] = 1), p
          } else a = +p[0] % 360 / 360, o = +p[1] / 100, i = 2 * (u = +p[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), p.length > 3 && (p[3] *= 1), p[0] = ge(a + 1 / 3, i, n), p[1] = ge(a, i, n), p[2] = ge(a - 1 / 3, i, n);
        else p = t.match(L) || me.transparent;
        p = p.map(Number)
      }
      return e && !c && (i = p[0] / de, n = p[1] / de, s = p[2] / de, u = ((h = Math.max(i, n, s)) + (f = Math.min(i, n, s))) / 2, h === f ? a = o = 0 : (l = h - f, o = u > .5 ? l / (2 - h - f) : l / (h + f), a = h === i ? (n - s) / l + (n < s ? 6 : 0) : h === n ? (s - i) / l + 2 : (i - n) / l + 4, a *= 60), p[0] = ~~(a + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * u + .5)), r && p.length < 4 && (p[3] = 1), p
    },
    ye = function (t) {
      var e = [],
        r = [],
        i = -1;
      return t.split(xe).forEach((function (t) {
        var n = t.match(U) || [];
        e.push.apply(e, n), r.push(i += n.length + 1)
      })), e.c = r, e
    },
    Te = function (t, e, r) {
      var i, n, s, a, o = "",
        u = (t + o).match(xe),
        h = e ? "hsla(" : "rgba(",
        f = 0;
      if (!u) return t;
      if (u = u.map((function (t) {
          return (t = ve(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        })), r && (s = ye(t), (i = r.c).join(o) !== s.c.join(o)))
        for (a = (n = t.replace(xe, "1").split(U)).length - 1; f < a; f++) o += n[f] + (~i.indexOf(f) ? u.shift() || h + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
      if (!n)
        for (a = (n = t.split(xe)).length - 1; f < a; f++) o += n[f] + u[f];
      return o + n[a]
    },
    xe = function () {
      var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in me) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi")
    }(),
    we = /hsl[a]?\(/,
    be = function (t) {
      var e, r = t.join(" ");
      if (xe.lastIndex = 0, xe.test(r)) return e = we.test(r), t[1] = Te(t[1], e), t[0] = Te(t[0], e, ye(t[1])), !0
    },
    Me = function () {
      var t, e, r, i, n, s, f = Date.now,
        l = 500,
        p = 33,
        _ = f(),
        d = _,
        m = 1e3 / 240,
        g = m,
        v = [],
        y = function r(a) {
          var o, u, h, c, y = f() - d,
            T = !0 === a;
          if (y > l && (_ += y - p), ((o = (h = (d += y) - _) - g) > 0 || T) && (c = ++i.frame, n = h - 1e3 * i.time, i.time = h /= 1e3, g += o + (o >= m ? 4 : m - o), u = 1), T || (t = e(r)), u)
            for (s = 0; s < v.length; s++) v[s](h, n, c, a)
        };
      return i = {
        time: 0,
        frame: 0,
        tick: function () {
          y(!0)
        },
        deltaRatio: function (t) {
          return n / (1e3 / (t || 60))
        },
        wake: function () {
          h && (!o && R() && (a = o = window, u = a.document || {}, V.gsap = wr, (a.gsapVersions || (a.gsapVersions = [])).push(wr.version), G(j || a.GreenSockGlobals || !a.gsap && a || {}), r = a.requestAnimationFrame), t && i.sleep(), e = r || function (t) {
            return setTimeout(t, g - 1e3 * i.time + 1 | 0)
          }, c = 1, y(2))
        },
        sleep: function () {
          (r ? a.cancelAnimationFrame : clearTimeout)(t), c = 0, e = Z
        },
        lagSmoothing: function (t, e) {
          l = t || 1e8, p = Math.min(e, l, 0)
        },
        fps: function (t) {
          m = 1e3 / (t || 240), g = 1e3 * i.time + m
        },
        add: function (t, e, r) {
          var n = e ? function (e, r, s, a) {
            t(e, r, s, a), i.remove(n)
          } : t;
          return i.remove(t), v[r ? "unshift" : "push"](n), Oe(), n
        },
        remove: function (t, e) {
          ~(e = v.indexOf(t)) && v.splice(e, 1) && s >= e && s--
        },
        _listeners: v
      }
    }(),
    Oe = function () {
      return !c && Me.wake()
    },
    ke = {},
    Ae = /^[\d.\-M][\d.\-,\s]/,
    Ce = /["']/g,
    De = function (t) {
      for (var e, r, i, n = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, u = s.length; o < u; o++) r = s[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[a] = isNaN(i) ? i.replace(Ce, "").trim() : +i, a = r.substr(e + 1).trim();
      return n
    },
    Se = function (t) {
      return function (e) {
        return 1 - t(1 - e)
      }
    },
    Ee = function t(e, r) {
      for (var i, n = e._first; n;) n instanceof Ue ? t(n, r) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === r || (n.timeline ? t(n.timeline, r) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = r)), n = n._next
    },
    Pe = function (t, e) {
      return t && (C(t) ? t : ke[t] || function (t) {
        var e, r, i, n, s = (t + "").split("("),
          a = ke[s[0]];
        return a && s.length > 1 && a.config ? a.config.apply(null, ~t.indexOf("{") ? [De(s[1])] : (e = t, r = e.indexOf("(") + 1, i = e.indexOf(")"), n = e.indexOf("(", r), e.substring(r, ~n && n < i ? e.indexOf(")", i + 1) : i)).split(",").map(yt)) : ke._CE && Ae.test(t) ? ke._CE("", t) : a
      }(t)) || e
    },
    Re = function (t, e, r, i) {
      void 0 === r && (r = function (t) {
        return 1 - e(1 - t)
      }), void 0 === i && (i = function (t) {
        return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
      });
      var n, s = {
        easeIn: e,
        easeOut: r,
        easeInOut: i
      };
      return ct(t, (function (t) {
        for (var e in ke[t] = V[t] = s, ke[n = t.toLowerCase()] = r, s) ke[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = ke[t + "." + e] = s[e]
      })), s
    },
    ze = function (t) {
      return function (e) {
        return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
      }
    },
    Fe = function t(e, r, i) {
      var n = r >= 1 ? r : 1,
        s = (i || (e ? .3 : .45)) / (r < 1 ? r : 1),
        a = s / x * (Math.asin(1 / n) || 0),
        o = function (t) {
          return 1 === t ? 1 : n * Math.pow(2, -10 * t) * k((t - a) * s) + 1
        },
        u = "out" === e ? o : "in" === e ? function (t) {
          return 1 - o(1 - t)
        } : ze(o);
      return s = x / s, u.config = function (r, i) {
        return t(e, r, i)
      }, u
    },
    Be = function t(e, r) {
      void 0 === r && (r = 1.70158);
      var i = function (t) {
          return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        },
        n = "out" === e ? i : "in" === e ? function (t) {
          return 1 - i(1 - t)
        } : ze(i);
      return n.config = function (r) {
        return t(e, r)
      }, n
    };
  ct("Linear,Quad,Cubic,Quart,Quint,Strong", (function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Re(t + ",Power" + (r - 1), e ? function (t) {
      return Math.pow(t, r)
    } : function (t) {
      return t
    }, (function (t) {
      return 1 - Math.pow(1 - t, r)
    }), (function (t) {
      return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
    }))
  })), ke.Linear.easeNone = ke.none = ke.Linear.easeIn, Re("Elastic", Fe("in"), Fe("out"), Fe()), p = 7.5625, d = 1 / (_ = 2.75), Re("Bounce", (function (t) {
    return 1 - m(1 - t)
  }), m = function (t) {
    return t < d ? p * t * t : t < .7272727272727273 ? p * Math.pow(t - 1.5 / _, 2) + .75 : t < .9090909090909092 ? p * (t -= 2.25 / _) * t + .9375 : p * Math.pow(t - 2.625 / _, 2) + .984375
  }), Re("Expo", (function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0
  })), Re("Circ", (function (t) {
    return -(M(1 - t * t) - 1)
  })), Re("Sine", (function (t) {
    return 1 === t ? 1 : 1 - O(t * w)
  })), Re("Back", Be("in"), Be("out"), Be()), ke.SteppedEase = ke.steps = V.SteppedEase = {
    config: function (t, e) {
      void 0 === t && (t = 1);
      var r = 1 / t,
        i = t + (e ? 0 : 1),
        n = e ? 1 : 0;
      return function (t) {
        return ((i * Zt(0, .99999999, t) | 0) + n) * r
      }
    }
  }, v.ease = ke["quad.out"], ct("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function (t) {
    return ut += t + "," + t + "Params,"
  }));
  var Le = function (t, e) {
      this.id = b++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : lt, this.set = e ? e.getSetter : er
    },
    Ie = function () {
      function t(t) {
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Vt(this, +t.duration, 1, 1), this.data = t.data, n && (this._ctx = n, n.data.push(this)), c || Me.wake()
      }
      var e = t.prototype;
      return e.delay = function (t) {
        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
      }, e.duration = function (t) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
      }, e.totalDuration = function (t) {
        return arguments.length ? (this._dirty = 0, Vt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
      }, e.totalTime = function (t, e) {
        if (Oe(), !arguments.length) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
          for (Lt(this, t), !r._dp || r.parent || It(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
          !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Ut(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === T || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), vt(this, t, e)), this
      }, e.time = function (t, e) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Rt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
      }, e.totalProgress = function (t, e) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
      }, e.progress = function (t, e) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Rt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
      }, e.iteration = function (t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? zt(this._tTime, r) + 1 : 1
      }, e.timeScale = function (t) {
        if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
        if (this._rts === t) return this;
        var e = this.parent && this._ts ? Ft(this.parent._time, this) : this._tTime;
        return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(Zt(-this._delay, this._tDur, e), !0), Bt(this), St(this)
      }, e.paused = function (t) {
        return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Oe(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== T && (this._tTime -= T)))), this) : this._ps
      }, e.startTime = function (t) {
        if (arguments.length) {
          this._start = t;
          var e = this.parent || this._dp;
          return e && (e._sort || !this.parent) && Ut(e, this, t - this._delay), this
        }
        return this._start
      }, e.endTime = function (t) {
        return this._start + (P(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
      }, e.rawTime = function (t) {
        var e = this.parent || this._dp;
        return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ft(e.rawTime(t), this) : this._tTime : this._tTime
      }, e.revert = function (t) {
        void 0 === t && (t = tt);
        var e = i;
        return i = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), i = e, this
      }, e.globalTime = function (t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
        return !this.parent && this.vars.immediateRender ? -1 : r
      }, e.repeat = function (t) {
        return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, jt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
      }, e.repeatDelay = function (t) {
        if (arguments.length) {
          var e = this._time;
          return this._rDelay = t, jt(this), e ? this.time(e) : this
        }
        return this._rDelay
      }, e.yoyo = function (t) {
        return arguments.length ? (this._yoyo = t, this) : this._yoyo
      }, e.seek = function (t, e) {
        return this.totalTime(Wt(this, t), P(e))
      }, e.restart = function (t, e) {
        return this.play().totalTime(t ? -this._delay : 0, P(e))
      }, e.play = function (t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
      }, e.reverse = function (t, e) {
        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
      }, e.pause = function (t, e) {
        return null != t && this.seek(t, e), this.paused(!0)
      }, e.resume = function () {
        return this.paused(!1)
      }, e.reversed = function (t) {
        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
      }, e.invalidate = function () {
        return this._initted = this._act = 0, this._zTime = -1e-8, this
      }, e.isActive = function () {
        var t, e = this.parent || this._dp,
          r = this._start;
        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - T))
      }, e.eventCallback = function (t, e, r) {
        var i = this.vars;
        return arguments.length > 1 ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
      }, e.then = function (t) {
        var e = this;
        return new Promise((function (r) {
          var i = C(t) ? t : Tt,
            n = function () {
              var t = e.then;
              e.then = null, C(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), r(i), e.then = t
            };
          e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? n() : e._prom = n
        }))
      }, e.kill = function () {
        pe(this)
      }, t
    }();
  xt(Ie.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1
  });
  var Ue = function (r) {
    function n(e, i) {
      var n;
      return void 0 === e && (e = {}), (n = r.call(this, e) || this).labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = P(e.sortChildren), s && Ut(e.parent || s, t(n), i), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && Yt(t(n), e.scrollTrigger), n
    }
    e(n, r);
    var a = n.prototype;
    return a.to = function (t, e, r) {
      return Qt(0, arguments, this), this
    }, a.from = function (t, e, r) {
      return Qt(1, arguments, this), this
    }, a.fromTo = function (t, e, r, i) {
      return Qt(2, arguments, this), this
    }, a.set = function (t, e, r) {
      return e.duration = 0, e.parent = this, Ot(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ze(t, e, Wt(this, r), 1), this
    }, a.call = function (t, e, r) {
      return Ut(this, Ze.delayedCall(0, t, e), r)
    }, a.staggerTo = function (t, e, r, i, n, s, a) {
      return r.duration = e, r.stagger = r.stagger || i, r.onComplete = s, r.onCompleteParams = a, r.parent = this, new Ze(t, r, Wt(this, n)), this
    }, a.staggerFrom = function (t, e, r, i, n, s, a) {
      return r.runBackwards = 1, Ot(r).immediateRender = P(r.immediateRender), this.staggerTo(t, e, r, i, n, s, a)
    }, a.staggerFromTo = function (t, e, r, i, n, s, a, o) {
      return i.startAt = r, Ot(i).immediateRender = P(i.immediateRender), this.staggerTo(t, e, i, n, s, a, o)
    }, a.render = function (t, e, r) {
      var n, a, o, u, h, f, l, c, p, _, d, m, g = this._time,
        v = this._dirty ? this.totalDuration() : this._tDur,
        y = this._dur,
        x = t <= 0 ? 0 : _t(t),
        w = this._zTime < 0 != t < 0 && (this._initted || !y);
      if (this !== s && x > v && t >= 0 && (x = v), x !== this._tTime || r || w) {
        if (g !== this._time && y && (x += this._time - g, t += this._time - g), n = x, p = this._start, f = !(c = this._ts), w && (y || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
          if (d = this._yoyo, h = y + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * h + t, e, r);
          if (n = _t(x % h), x === v ? (u = this._repeat, n = y) : ((u = ~~(x / h)) && u === x / h && (n = y, u--), n > y && (n = y)), _ = zt(this._tTime, h), !g && this._tTime && _ !== u && (_ = u), d && 1 & u && (n = y - n, m = 1), u !== _ && !this._lock) {
            var b = d && 1 & _,
              M = b === (d && 1 & u);
            if (u < _ && (b = !b), g = b ? 0 : y, this._lock = 1, this.render(g || (m ? 0 : _t(u * h)), e, !y)._lock = 0, this._tTime = x, !e && this.parent && ce(this, "onRepeat"), this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1), g && g !== this._time || f !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
            if (y = this._dur, v = this._tDur, M && (this._lock = 2, g = b ? y : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !m && this.invalidate()), this._lock = 0, !this._ts && !f) return this;
            Ee(this, m)
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2 && (l = function (t, e, r) {
            var i;
            if (r > e)
              for (i = t._first; i && i._start <= r;) {
                if ("isPause" === i.data && i._start > e) return i;
                i = i._next
              } else
                for (i = t._last; i && i._start >= r;) {
                  if ("isPause" === i.data && i._start < e) return i;
                  i = i._prev
                }
          }(this, _t(g), _t(n)), l && (x -= n - (n = l._start))), this._tTime = x, this._time = n, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && n && !e && (ce(this, "onStart"), this._tTime !== x)) return this;
        if (n >= g && t >= 0)
          for (a = this._first; a;) {
            if (o = a._next, (a._act || n >= a._start) && a._ts && l !== a) {
              if (a.parent !== this) return this.render(t, e, r);
              if (a.render(a._ts > 0 ? (n - a._start) * a._ts : (a._dirty ? a.totalDuration() : a._tDur) + (n - a._start) * a._ts, e, r), n !== this._time || !this._ts && !f) {
                l = 0, o && (x += this._zTime = -1e-8);
                break
              }
            }
            a = o
          } else {
            a = this._last;
            for (var O = t < 0 ? t : n; a;) {
              if (o = a._prev, (a._act || O <= a._end) && a._ts && l !== a) {
                if (a.parent !== this) return this.render(t, e, r);
                if (a.render(a._ts > 0 ? (O - a._start) * a._ts : (a._dirty ? a.totalDuration() : a._tDur) + (O - a._start) * a._ts, e, r || i && (a._initted || a._startAt)), n !== this._time || !this._ts && !f) {
                  l = 0, o && (x += this._zTime = O ? -1e-8 : T);
                  break
                }
              }
              a = o
            }
          }
        if (l && !e && (this.pause(), l.render(n >= g ? 0 : -1e-8)._zTime = n >= g ? 1 : -1, this._ts)) return this._start = p, Bt(this), this.render(t, e, r);
        this._onUpdate && !e && ce(this, "onUpdate", !0), (x === v && this._tTime >= this.totalDuration() || !x && g) && (p !== this._start && Math.abs(c) === Math.abs(this._ts) || this._lock || ((t || !y) && (x === v && this._ts > 0 || !x && this._ts < 0) && Ct(this, 1), e || t < 0 && !g || !x && !g && v || (ce(this, x === v && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(x < v && this.timeScale() > 0) && this._prom())))
      }
      return this
    }, a.add = function (t, e) {
      var r = this;
      if (D(e) || (e = Wt(this, e, t)), !(t instanceof Ie)) {
        if (B(t)) return t.forEach((function (t) {
          return r.add(t, e)
        })), this;
        if (A(t)) return this.addLabel(t, e);
        if (!C(t)) return this;
        t = Ze.delayedCall(0, t)
      }
      return this !== t ? Ut(this, t, e) : this
    }, a.getChildren = function (t, e, r, i) {
      void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -1e8);
      for (var n = [], s = this._first; s;) s._start >= i && (s instanceof Ze ? e && n.push(s) : (r && n.push(s), t && n.push.apply(n, s.getChildren(!0, e, r)))), s = s._next;
      return n
    }, a.getById = function (t) {
      for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
        if (e[r].vars.id === t) return e[r]
    }, a.remove = function (t) {
      return A(t) ? this.removeLabel(t) : C(t) ? this.killTweensOf(t) : (At(this, t), t === this._recent && (this._recent = this._last), Dt(this))
    }, a.totalTime = function (t, e) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = _t(Me.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), r.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
    }, a.addLabel = function (t, e) {
      return this.labels[t] = Wt(this, e), this
    }, a.removeLabel = function (t) {
      return delete this.labels[t], this
    }, a.addPause = function (t, e, r) {
      var i = Ze.delayedCall(0, e || Z, r);
      return i.data = "isPause", this._hasPause = 1, Ut(this, i, Wt(this, t))
    }, a.removePause = function (t) {
      var e = this._first;
      for (t = Wt(this, t); e;) e._start === t && "isPause" === e.data && Ct(e), e = e._next
    }, a.killTweensOf = function (t, e, r) {
      for (var i = this.getTweensOf(t, r), n = i.length; n--;) Ye !== i[n] && i[n].kill(t, e);
      return this
    }, a.getTweensOf = function (t, e) {
      for (var r, i = [], n = ee(t), s = this._first, a = D(e); s;) s instanceof Ze ? mt(s._targets, n) && (a ? (!Ye || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && i.push(s) : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r), s = s._next;
      return i
    }, a.tweenTo = function (t, e) {
      e = e || {};
      var r, i = this,
        n = Wt(i, t),
        s = e,
        a = s.startAt,
        o = s.onStart,
        u = s.onStartParams,
        h = s.immediateRender,
        f = Ze.to(i, xt({
          ease: e.ease || "none",
          lazy: !1,
          immediateRender: !1,
          time: n,
          overwrite: "auto",
          duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || T,
          onStart: function () {
            if (i.pause(), !r) {
              var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
              f._dur !== t && Vt(f, t, 0, 1).render(f._time, !0, !0), r = 1
            }
            o && o.apply(f, u || [])
          }
        }, e));
      return h ? f.render(0) : f
    }, a.tweenFromTo = function (t, e, r) {
      return this.tweenTo(e, xt({
        startAt: {
          time: Wt(this, t)
        }
      }, r))
    }, a.recent = function () {
      return this._recent
    }, a.nextLabel = function (t) {
      return void 0 === t && (t = this._time), le(this, Wt(this, t))
    }, a.previousLabel = function (t) {
      return void 0 === t && (t = this._time), le(this, Wt(this, t), 1)
    }, a.currentLabel = function (t) {
      return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + T)
    }, a.shiftChildren = function (t, e, r) {
      void 0 === r && (r = 0);
      for (var i, n = this._first, s = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
      if (e)
        for (i in s) s[i] >= r && (s[i] += t);
      return Dt(this)
    }, a.invalidate = function (t) {
      var e = this._first;
      for (this._lock = 0; e;) e.invalidate(t), e = e._next;
      return r.prototype.invalidate.call(this, t)
    }, a.clear = function (t) {
      void 0 === t && (t = !0);
      for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
      return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Dt(this)
    }, a.totalDuration = function (t) {
      var e, r, i, n = 0,
        a = this,
        o = a._last,
        u = y;
      if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
      if (a._dirty) {
        for (i = a.parent; o;) e = o._prev, o._dirty && o.totalDuration(), (r = o._start) > u && a._sort && o._ts && !a._lock ? (a._lock = 1, Ut(a, o, r - o._delay, 1)._lock = 0) : u = r, r < 0 && o._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), u = 0), o._end > n && o._ts && (n = o._end), o = e;
        Vt(a, a === s && a._time > n ? a._time : n, 1, 1), a._dirty = 0
      }
      return a._tDur
    }, n.updateRoot = function (t) {
      if (s._ts && (vt(s, Ft(t, s)), f = Me.frame), Me.frame >= at) {
        at += g.autoSleep || 120;
        var e = s._first;
        if ((!e || !e._ts) && g.autoSleep && Me._listeners.length < 2) {
          for (; e && !e._ts;) e = e._next;
          e || Me.sleep()
        }
      }
    }, n
  }(Ie);
  xt(Ue.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var Ye, Ne, Xe = function (t, e, r, i, n, s, a) {
      var o, u, h, f, l, c, p, _, d = new fr(this._pt, t, e, 0, 1, nr, null, n),
        m = 0,
        g = 0;
      for (d.b = r, d.e = i, r += "", (p = ~(i += "").indexOf("random(")) && (i = he(i)), s && (s(_ = [r, i], t, e), r = _[0], i = _[1]), u = r.match(Y) || []; o = Y.exec(i);) f = o[0], l = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === l.substr(-5) && (h = 1), f !== u[g++] && (c = parseFloat(u[g - 1]) || 0, d._pt = {
        _next: d._pt,
        p: l || 1 === g ? l : ",",
        s: c,
        c: "=" === f.charAt(1) ? dt(c, f) - c : parseFloat(f) - c,
        m: h && h < 4 ? Math.round : 0
      }, m = Y.lastIndex);
      return d.c = m < i.length ? i.substring(m, i.length) : "", d.fp = a, (N.test(i) || p) && (d.e = 0), this._pt = d, d
    },
    qe = function (t, e, r, i, n, s, a, o, u, h) {
      C(i) && (i = i(n || 0, t, s));
      var f, l = t[e],
        c = "get" !== r ? r : C(l) ? u ? t[e.indexOf("set") || !C(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : l,
        p = C(l) ? u ? Ke : Je : $e;
      if (A(i) && (~i.indexOf("random(") && (i = he(i)), "=" === i.charAt(1) && ((f = dt(c, i) + ($t(c) || 0)) || 0 === f) && (i = f)), !h || c !== i || Ne) return isNaN(c * i) || "" === i ? (!l && !(e in t) && W(e, i), Xe.call(this, t, e, c, i, p, o || g.stringFilter, u)) : (f = new fr(this._pt, t, e, +c || 0, i - (c || 0), "boolean" == typeof l ? ir : rr, 0, p), u && (f.fp = u), a && f.modifier(a, this, t), this._pt = f)
    },
    Ve = function (t, e, r, i, n, s) {
      var a, o, u, h;
      if (nt[t] && !1 !== (a = new nt[t]).init(n, a.rawVars ? e[t] : function (t, e, r, i, n) {
          if (C(t) && (t = We(t, n, e, r, i)), !E(t) || t.style && t.nodeType || B(t) || F(t)) return A(t) ? We(t, n, e, r, i) : t;
          var s, a = {};
          for (s in t) a[s] = We(t[s], n, e, r, i);
          return a
        }(e[t], i, n, s, r), r, i, s) && (r._pt = o = new fr(r._pt, n, t, 0, 1, a.render, a, 0, a.priority), r !== l))
        for (u = r._ptLookup[r._targets.indexOf(n)], h = a._props.length; h--;) u[a._props[h]] = o;
      return a
    },
    je = function t(e, n, a) {
      var o, u, h, f, l, c, p, _, d, m, g, x, w, b = e.vars,
        M = b.ease,
        O = b.startAt,
        k = b.immediateRender,
        A = b.lazy,
        C = b.onUpdate,
        D = b.onUpdateParams,
        S = b.callbackScope,
        E = b.runBackwards,
        R = b.yoyoEase,
        z = b.keyframes,
        F = b.autoRevert,
        B = e._dur,
        L = e._startAt,
        I = e._targets,
        U = e.parent,
        Y = U && "nested" === U.data ? U.vars.targets : I,
        N = "auto" === e._overwrite && !r,
        X = e.timeline;
      if (X && (!z || !M) && (M = "none"), e._ease = Pe(M, v.ease), e._yEase = R ? Se(Pe(!0 === R ? M : R, v.ease)) : 0, R && e._yoyo && !e._repeat && (R = e._yEase, e._yEase = e._ease, e._ease = R), e._from = !X && !!b.runBackwards, !X || z && !b.stagger) {
        if (x = (_ = I[0] ? ft(I[0]).harness : 0) && b[_.prop], o = Mt(b, et), L && (L._zTime < 0 && L.progress(1), n < 0 && E && k && !F ? L.render(-1, !0) : L.revert(E && B ? K : J), L._lazy = 0),
          O) {
          if (Ct(e._startAt = Ze.set(I, xt({
              data: "isStart",
              overwrite: !1,
              parent: U,
              immediateRender: !0,
              lazy: P(A),
              startAt: null,
              delay: 0,
              onUpdate: C,
              onUpdateParams: D,
              callbackScope: S,
              stagger: 0
            }, O))), e._startAt._dp = 0, n < 0 && (i || !k && !F) && e._startAt.revert(K), k && B && n <= 0 && a <= 0) return void(n && (e._zTime = n))
        } else if (E && B && !L)
          if (n && (k = !1), h = xt({
              overwrite: !1,
              data: "isFromStart",
              lazy: k && P(A),
              immediateRender: k,
              stagger: 0,
              parent: U
            }, o), x && (h[_.prop] = x), Ct(e._startAt = Ze.set(I, h)), e._startAt._dp = 0, n < 0 && (i ? e._startAt.revert(K) : e._startAt.render(-1, !0)), e._zTime = n, k) {
            if (!n) return
          } else t(e._startAt, T, T);
        for (e._pt = e._ptCache = 0, A = B && P(A) || A && !B, u = 0; u < I.length; u++) {
          if (p = (l = I[u])._gsap || ht(I)[u]._gsap, e._ptLookup[u] = m = {}, it[p.id] && rt.length && gt(), g = Y === I ? u : Y.indexOf(l), _ && !1 !== (d = new _).init(l, x || o, e, g, Y) && (e._pt = f = new fr(e._pt, l, d.name, 0, 1, d.render, d, 0, d.priority), d._props.forEach((function (t) {
              m[t] = f
            })), d.priority && (c = 1)), !_ || x)
            for (h in o) nt[h] && (d = Ve(h, o, e, g, l, Y)) ? d.priority && (c = 1) : m[h] = f = qe.call(e, l, h, "get", o[h], g, Y, 0, b.stringFilter);
          e._op && e._op[u] && e.kill(l, e._op[u]), N && e._pt && (Ye = e, s.killTweensOf(l, m, e.globalTime(n)), w = !e.parent, Ye = 0), e._pt && A && (it[p.id] = 1)
        }
        c && hr(e), e._onInit && e._onInit(e)
      }
      e._onUpdate = C, e._initted = (!e._op || e._pt) && !w, z && n <= 0 && X.render(y, !0, !0)
    },
    Ge = function (t, e, r, i) {
      var n, s, a = e.ease || i || "power1.inOut";
      if (B(e)) s = r[t] || (r[t] = []), e.forEach((function (t, r) {
        return s.push({
          t: r / (e.length - 1) * 100,
          v: t,
          e: a
        })
      }));
      else
        for (n in e) s = r[n] || (r[n] = []), "ease" === n || s.push({
          t: parseFloat(t),
          v: e[n],
          e: a
        })
    },
    We = function (t, e, r, i, n) {
      return C(t) ? t.call(e, r, i, n) : A(t) && ~t.indexOf("random(") ? he(t) : t
    },
    Qe = ut + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    He = {};
  ct(Qe + ",id,stagger,delay,duration,paused,scrollTrigger", (function (t) {
    return He[t] = 1
  }));
  var Ze = function (n) {
    function a(e, i, a, o) {
      var u;
      "number" == typeof i && (a.duration = i, i = a, a = null);
      var h, f, l, c, p, _, d, m, v = (u = n.call(this, o ? i : Ot(i)) || this).vars,
        y = v.duration,
        T = v.delay,
        x = v.immediateRender,
        w = v.stagger,
        b = v.overwrite,
        M = v.keyframes,
        O = v.defaults,
        k = v.scrollTrigger,
        A = v.yoyoEase,
        C = i.parent || s,
        S = (B(e) || F(e) ? D(e[0]) : "length" in i) ? [e] : ee(e);
      if (u._targets = S.length ? ht(S) : Q("GSAP target " + e + " not found. https://greensock.com", !g.nullTargetWarn) || [], u._ptLookup = [], u._overwrite = b, M || w || z(y) || z(T)) {
        if (i = u.vars, (h = u.timeline = new Ue({
            data: "nested",
            defaults: O || {},
            targets: C && "nested" === C.data ? C.vars.targets : S
          })).kill(), h.parent = h._dp = t(u), h._start = 0, w || z(y) || z(T)) {
          if (c = S.length, d = w && ne(w), E(w))
            for (p in w) ~Qe.indexOf(p) && (m || (m = {}), m[p] = w[p]);
          for (f = 0; f < c; f++)(l = Mt(i, He)).stagger = 0, A && (l.yoyoEase = A), m && wt(l, m), _ = S[f], l.duration = +We(y, t(u), f, _, S), l.delay = (+We(T, t(u), f, _, S) || 0) - u._delay, !w && 1 === c && l.delay && (u._delay = T = l.delay, u._start += T, l.delay = 0), h.to(_, l, d ? d(f, _, S) : 0), h._ease = ke.none;
          h.duration() ? y = T = 0 : u.timeline = 0
        } else if (M) {
          Ot(xt(h.vars.defaults, {
            ease: "none"
          })), h._ease = Pe(M.ease || i.ease || "none");
          var R, L, I, U = 0;
          if (B(M)) M.forEach((function (t) {
            return h.to(S, t, ">")
          })), h.duration();
          else {
            for (p in l = {}, M) "ease" === p || "easeEach" === p || Ge(p, M[p], l, M.easeEach);
            for (p in l)
              for (R = l[p].sort((function (t, e) {
                  return t.t - e.t
                })), U = 0, f = 0; f < R.length; f++)(I = {
                ease: (L = R[f]).e,
                duration: (L.t - (f ? R[f - 1].t : 0)) / 100 * y
              })[p] = L.v, h.to(S, I, U), U += I.duration;
            h.duration() < y && h.to({}, {
              duration: y - h.duration()
            })
          }
        }
        y || u.duration(y = h.duration())
      } else u.timeline = 0;
      return !0 !== b || r || (Ye = t(u), s.killTweensOf(S), Ye = 0), Ut(C, t(u), a), i.reversed && u.reverse(), i.paused && u.paused(!0), (x || !y && !M && u._start === _t(C._time) && P(x) && Pt(t(u)) && "nested" !== C.data) && (u._tTime = -1e-8, u.render(Math.max(0, -T) || 0)), k && Yt(t(u), k), u
    }
    e(a, n);
    var o = a.prototype;
    return o.render = function (t, e, r) {
      var n, s, a, o, u, h, f, l, c, p = this._time,
        _ = this._tDur,
        d = this._dur,
        m = t < 0,
        g = t > _ - T && !m ? _ : t < T ? 0 : t;
      if (d) {
        if (g !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m) {
          if (n = g, l = this.timeline, this._repeat) {
            if (o = d + this._rDelay, this._repeat < -1 && m) return this.totalTime(100 * o + t, e, r);
            if (n = _t(g % o), g === _ ? (a = this._repeat, n = d) : ((a = ~~(g / o)) && a === g / o && (n = d, a--), n > d && (n = d)), (h = this._yoyo && 1 & a) && (c = this._yEase, n = d - n), u = zt(this._tTime, o), n === p && !r && this._initted) return this._tTime = g, this;
            a !== u && (l && this._yEase && Ee(l, h), !this.vars.repeatRefresh || h || this._lock || (this._lock = r = 1, this.render(_t(o * a), !0).invalidate()._lock = 0))
          }
          if (!this._initted) {
            if (Nt(this, m ? t : n, r, e, g)) return this._tTime = 0, this;
            if (p !== this._time) return this;
            if (d !== this._dur) return this.render(t, e, r)
          }
          if (this._tTime = g, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = f = (c || this._ease)(n / d), this._from && (this.ratio = f = 1 - f), n && !p && !e && (ce(this, "onStart"), this._tTime !== g)) return this;
          for (s = this._pt; s;) s.r(f, s.d), s = s._next;
          l && l.render(t < 0 ? t : !n && h ? -1e-8 : l._dur * l._ease(n / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (m && Et(this, t, 0, r), ce(this, "onUpdate")), this._repeat && a !== u && this.vars.onRepeat && !e && this.parent && ce(this, "onRepeat"), g !== this._tDur && g || this._tTime !== g || (m && !this._onUpdate && Et(this, t, 0, !0), (t || !d) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && Ct(this, 1), e || m && !p || !(g || p || h) || (ce(this, g === _ ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < _ && this.timeScale() > 0) && this._prom()))
        }
      } else ! function (t, e, r, n) {
        var s, a, o, u = t.ratio,
          h = e < 0 || !e && (!t._start && Xt(t) && (t._initted || !qt(t)) || (t._ts < 0 || t._dp._ts < 0) && !qt(t)) ? 0 : 1,
          f = t._rDelay,
          l = 0;
        if (f && t._repeat && (l = Zt(0, t._tDur, e), a = zt(l, f), t._yoyo && 1 & a && (h = 1 - h), a !== zt(t._tTime, f) && (u = 1 - h, t.vars.repeatRefresh && t._initted && t.invalidate())), h !== u || i || n || t._zTime === T || !e && t._zTime) {
          if (!t._initted && Nt(t, e, n, r, l)) return;
          for (o = t._zTime, t._zTime = e || (r ? T : 0), r || (r = e && !o), t.ratio = h, t._from && (h = 1 - h), t._time = 0, t._tTime = l, s = t._pt; s;) s.r(h, s.d), s = s._next;
          e < 0 && Et(t, e, 0, !0), t._onUpdate && !r && ce(t, "onUpdate"), l && t._repeat && !r && t.parent && ce(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === h && (h && Ct(t, 1), r || i || (ce(t, h ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
        } else t._zTime || (t._zTime = e)
      }(this, t, e, r);
      return this
    }, o.targets = function () {
      return this._targets
    }, o.invalidate = function (t) {
      return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), n.prototype.invalidate.call(this, t)
    }, o.resetTo = function (t, e, r, i) {
      c || Me.wake(), this._ts || this.play();
      var n = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
      return this._initted || je(this, n),
        function (t, e, r, i, n, s, a) {
          var o, u, h, f, l = (t._pt && t._ptCache || (t._ptCache = {}))[e];
          if (!l)
            for (l = t._ptCache[e] = [], h = t._ptLookup, f = t._targets.length; f--;) {
              if ((o = h[f][e]) && o.d && o.d._pt)
                for (o = o.d._pt; o && o.p !== e && o.fp !== e;) o = o._next;
              if (!o) return Ne = 1, t.vars[e] = "+=0", je(t, a), Ne = 0, 1;
              l.push(o)
            }
          for (f = l.length; f--;)(o = (u = l[f])._pt || u).s = !i && 0 !== i || n ? o.s + (i || 0) + s * o.c : i, o.c = r - o.s, u.e && (u.e = pt(r) + $t(u.e)), u.b && (u.b = o.s + $t(u.b))
        }(this, t, e, r, i, this._ease(n / this._dur), n) ? this.resetTo(t, e, r, i) : (Lt(this, 0), this.parent || kt(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, o.kill = function (t, e) {
      if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? pe(this) : this;
      if (this.timeline) {
        var r = this.timeline.totalDuration();
        return this.timeline.killTweensOf(t, e, Ye && !0 !== Ye.vars.overwrite)._first || pe(this), this.parent && r !== this.timeline.totalDuration() && Vt(this, this._dur * this.timeline._tDur / r, 0, 1), this
      }
      var i, n, s, a, o, u, h, f = this._targets,
        l = t ? ee(t) : f,
        c = this._ptLookup,
        p = this._pt;
      if ((!e || "all" === e) && function (t, e) {
          for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
          return r < 0
        }(f, l)) return "all" === e && (this._pt = 0), pe(this);
      for (i = this._op = this._op || [], "all" !== e && (A(e) && (o = {}, ct(e, (function (t) {
          return o[t] = 1
        })), e = o), e = function (t, e) {
          var r, i, n, s, a = t[0] ? ft(t[0]).harness : 0,
            o = a && a.aliases;
          if (!o) return e;
          for (i in r = wt({}, e), o)
            if (i in r)
              for (n = (s = o[i].split(",")).length; n--;) r[s[n]] = r[i];
          return r
        }(f, e)), h = f.length; h--;)
        if (~l.indexOf(f[h]))
          for (o in n = c[h], "all" === e ? (i[h] = e, a = n, s = {}) : (s = i[h] = i[h] || {}, a = e), a)(u = n && n[o]) && ("kill" in u.d && !0 !== u.d.kill(o) || At(this, u, "_pt"), delete n[o]), "all" !== s && (s[o] = 1);
      return this._initted && !this._pt && p && pe(this), this
    }, a.to = function (t, e) {
      return new a(t, e, arguments[2])
    }, a.from = function (t, e) {
      return Qt(1, arguments)
    }, a.delayedCall = function (t, e, r, i) {
      return new a(e, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: t,
        onComplete: e,
        onReverseComplete: e,
        onCompleteParams: r,
        onReverseCompleteParams: r,
        callbackScope: i
      })
    }, a.fromTo = function (t, e, r) {
      return Qt(2, arguments)
    }, a.set = function (t, e) {
      return e.duration = 0, e.repeatDelay || (e.repeat = 0), new a(t, e)
    }, a.killTweensOf = function (t, e, r) {
      return s.killTweensOf(t, e, r)
    }, a
  }(Ie);
  xt(Ze.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  }), ct("staggerTo,staggerFrom,staggerFromTo", (function (t) {
    Ze[t] = function () {
      var e = new Ue,
        r = Jt.call(arguments, 0);
      return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
    }
  }));
  var $e = function (t, e, r) {
      return t[e] = r
    },
    Je = function (t, e, r) {
      return t[e](r)
    },
    Ke = function (t, e, r, i) {
      return t[e](i.fp, r)
    },
    tr = function (t, e, r) {
      return t.setAttribute(e, r)
    },
    er = function (t, e) {
      return C(t[e]) ? Je : S(t[e]) && t.setAttribute ? tr : $e
    },
    rr = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
    },
    ir = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    },
    nr = function (t, e) {
      var r = e._pt,
        i = "";
      if (!t && e.b) i = e.b;
      else if (1 === t && e.e) i = e.e;
      else {
        for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
        i += e.c
      }
      e.set(e.t, e.p, i, e)
    },
    sr = function (t, e) {
      for (var r = e._pt; r;) r.r(t, r.d), r = r._next
    },
    ar = function (t, e, r, i) {
      for (var n, s = this._pt; s;) n = s._next, s.p === i && s.modifier(t, e, r), s = n
    },
    or = function (t) {
      for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? At(this, i, "_pt") : i.dep || (e = 1), i = r;
      return !e
    },
    ur = function (t, e, r, i) {
      i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    },
    hr = function (t) {
      for (var e, r, i, n, s = t._pt; s;) {
        for (e = s._next, r = i; r && r.pr > s.pr;) r = r._next;
        (s._prev = r ? r._prev : n) ? s._prev._next = s: i = s, (s._next = r) ? r._prev = s : n = s, s = e
      }
      t._pt = i
    },
    fr = function () {
      function t(t, e, r, i, n, s, a, o, u) {
        this.t = e, this.s = i, this.c = n, this.p = r, this.r = s || rr, this.d = a || this, this.set = o || $e, this.pr = u || 0, this._next = t, t && (t._prev = this)
      }
      return t.prototype.modifier = function (t, e, r) {
        this.mSet = this.mSet || this.set, this.set = ur, this.m = t, this.mt = r, this.tween = e
      }, t
    }();
  ct(ut + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function (t) {
    return et[t] = 1
  })), V.TweenMax = V.TweenLite = Ze, V.TimelineLite = V.TimelineMax = Ue, s = new Ue({
    sortChildren: !1,
    defaults: v,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
  }), g.stringFilter = be;
  var lr = [],
    cr = {},
    pr = [],
    _r = 0,
    dr = function (t) {
      return (cr[t] || pr).map((function (t) {
        return t()
      }))
    },
    mr = function () {
      var t = Date.now(),
        e = [];
      t - _r > 2 && (dr("matchMediaInit"), lr.forEach((function (t) {
        var r, i, n, s, o = t.queries,
          u = t.conditions;
        for (i in o)(r = a.matchMedia(o[i]).matches) && (n = 1), r !== u[i] && (u[i] = r, s = 1);
        s && (t.revert(), n && e.push(t))
      })), dr("matchMediaRevert"), e.forEach((function (t) {
        return t.onMatch(t)
      })), _r = t, dr("matchMedia"))
    },
    gr = function () {
      function t(t, e) {
        this.selector = e && re(e), this.data = [], this._r = [], this.isReverted = !1, t && this.add(t)
      }
      var e = t.prototype;
      return e.add = function (t, e, r) {
        C(t) && (r = e, e = t, t = C);
        var i = this,
          s = function () {
            var t, s = n,
              a = i.selector;
            return s && s !== i && s.data.push(i), r && (i.selector = re(r)), n = i, t = e.apply(i, arguments), C(t) && i._r.push(t), n = s, i.selector = a, i.isReverted = !1, t
          };
        return i.last = s, t === C ? s(i) : t ? i[t] = s : s
      }, e.ignore = function (t) {
        var e = n;
        n = null, t(this), n = e
      }, e.getTweens = function () {
        var e = [];
        return this.data.forEach((function (r) {
          return r instanceof t ? e.push.apply(e, r.getTweens()) : r instanceof Ze && !(r.parent && "nested" === r.parent.data) && e.push(r)
        })), e
      }, e.clear = function () {
        this._r.length = this.data.length = 0
      }, e.kill = function (t, e) {
        var r = this;
        if (t) {
          var i = this.getTweens();
          this.data.forEach((function (t) {
            "isFlip" === t.data && (t.revert(), t.getChildren(!0, !0, !1).forEach((function (t) {
              return i.splice(i.indexOf(t), 1)
            })))
          })), i.map((function (t) {
            return {
              g: t.globalTime(0),
              t: t
            }
          })).sort((function (t, e) {
            return e.g - t.g || -1
          })).forEach((function (e) {
            return e.t.revert(t)
          })), this.data.forEach((function (e) {
            return !(e instanceof Ie) && e.revert && e.revert(t)
          })), this._r.forEach((function (e) {
            return e(t, r)
          })), this.isReverted = !0
        } else this.data.forEach((function (t) {
          return t.kill && t.kill()
        }));
        if (this.clear(), e) {
          var n = lr.indexOf(this);
          ~n && lr.splice(n, 1)
        }
      }, e.revert = function (t) {
        this.kill(t || {})
      }, t
    }(),
    vr = function () {
      function t(t) {
        this.contexts = [], this.scope = t
      }
      var e = t.prototype;
      return e.add = function (t, e, r) {
        E(t) || (t = {
          matches: t
        });
        var i, n, s, o = new gr(0, r || this.scope),
          u = o.conditions = {};
        for (n in this.contexts.push(o), e = o.add("onMatch", e), o.queries = t, t) "all" === n ? s = 1 : (i = a.matchMedia(t[n])) && (lr.indexOf(o) < 0 && lr.push(o), (u[n] = i.matches) && (s = 1), i.addListener ? i.addListener(mr) : i.addEventListener("change", mr));
        return s && e(o), this
      }, e.revert = function (t) {
        this.kill(t || {})
      }, e.kill = function (t) {
        this.contexts.forEach((function (e) {
          return e.kill(t, !0)
        }))
      }, t
    }(),
    yr = {
      registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        e.forEach((function (t) {
          return _e(t)
        }))
      },
      timeline: function (t) {
        return new Ue(t)
      },
      getTweensOf: function (t, e) {
        return s.getTweensOf(t, e)
      },
      getProperty: function (t, e, r, i) {
        A(t) && (t = ee(t)[0]);
        var n = ft(t || {}).get,
          s = r ? Tt : yt;
        return "native" === r && (r = ""), t ? e ? s((nt[e] && nt[e].get || n)(t, e, r, i)) : function (e, r, i) {
          return s((nt[e] && nt[e].get || n)(t, e, r, i))
        } : t
      },
      quickSetter: function (t, e, r) {
        if ((t = ee(t)).length > 1) {
          var i = t.map((function (t) {
              return wr.quickSetter(t, e, r)
            })),
            n = i.length;
          return function (t) {
            for (var e = n; e--;) i[e](t)
          }
        }
        t = t[0] || {};
        var s = nt[e],
          a = ft(t),
          o = a.harness && (a.harness.aliases || {})[e] || e,
          u = s ? function (e) {
            var i = new s;
            l._pt = 0, i.init(t, r ? e + r : e, l, 0, [t]), i.render(1, i), l._pt && sr(1, l)
          } : a.set(t, o);
        return s ? u : function (e) {
          return u(t, o, r ? e + r : e, a, 1)
        }
      },
      quickTo: function (t, e, r) {
        var i, n = wr.to(t, wt(((i = {})[e] = "+=0.1", i.paused = !0, i), r || {})),
          s = function (t, r, i) {
            return n.resetTo(e, t, r, i)
          };
        return s.tween = n, s
      },
      isTweening: function (t) {
        return s.getTweensOf(t, !0).length > 0
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = Pe(t.ease, v.ease)), bt(v, t || {})
      },
      config: function (t) {
        return bt(g, t || {})
      },
      registerEffect: function (t) {
        var e = t.name,
          r = t.effect,
          i = t.plugins,
          n = t.defaults,
          s = t.extendTimeline;
        (i || "").split(",").forEach((function (t) {
          return t && !nt[t] && !V[t] && Q(e + " effect requires " + t + " plugin.")
        })), st[e] = function (t, e, i) {
          return r(ee(t), xt(e || {}, n), i)
        }, s && (Ue.prototype[e] = function (t, r, i) {
          return this.add(st[e](t, E(r) ? r : (i = r) && {}, this), i)
        })
      },
      registerEase: function (t, e) {
        ke[t] = Pe(e)
      },
      parseEase: function (t, e) {
        return arguments.length ? Pe(t, e) : ke
      },
      getById: function (t) {
        return s.getById(t)
      },
      exportRoot: function (t, e) {
        void 0 === t && (t = {});
        var r, i, n = new Ue(t);
        for (n.smoothChildTiming = P(t.smoothChildTiming), s.remove(n), n._dp = 0, n._time = n._tTime = s._time, r = s._first; r;) i = r._next, !e && !r._dur && r instanceof Ze && r.vars.onComplete === r._targets[0] || Ut(n, r, r._start - r._delay), r = i;
        return Ut(s, n, 0), n
      },
      context: function (t, e) {
        return t ? new gr(t, e) : n
      },
      matchMedia: function (t) {
        return new vr(t)
      },
      matchMediaRefresh: function () {
        return lr.forEach((function (t) {
          var e, r, i = t.conditions;
          for (r in i) i[r] && (i[r] = !1, e = 1);
          e && t.revert()
        })) || mr()
      },
      addEventListener: function (t, e) {
        var r = cr[t] || (cr[t] = []);
        ~r.indexOf(e) || r.push(e)
      },
      removeEventListener: function (t, e) {
        var r = cr[t],
          i = r && r.indexOf(e);
        i >= 0 && r.splice(i, 1)
      },
      utils: {
        wrap: function t(e, r, i) {
          var n = r - e;
          return B(e) ? ue(e, t(0, e.length), r) : Ht(i, (function (t) {
            return (n + (t - e) % n) % n + e
          }))
        },
        wrapYoyo: function t(e, r, i) {
          var n = r - e,
            s = 2 * n;
          return B(e) ? ue(e, t(0, e.length - 1), r) : Ht(i, (function (t) {
            return e + ((t = (s + (t - e) % s) % s || 0) > n ? s - t : t)
          }))
        },
        distribute: ne,
        random: oe,
        snap: ae,
        normalize: function (t, e, r) {
          return fe(t, e, 0, 1, r)
        },
        getUnit: $t,
        clamp: function (t, e, r) {
          return Ht(r, (function (r) {
            return Zt(t, e, r)
          }))
        },
        splitColor: ve,
        toArray: ee,
        selector: re,
        mapRange: fe,
        pipe: function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
          return function (t) {
            return e.reduce((function (t, e) {
              return e(t)
            }), t)
          }
        },
        unitize: function (t, e) {
          return function (r) {
            return t(parseFloat(r)) + (e || $t(r))
          }
        },
        interpolate: function t(e, r, i, n) {
          var s = isNaN(e + r) ? 0 : function (t) {
            return (1 - t) * e + t * r
          };
          if (!s) {
            var a, o, u, h, f, l = A(e),
              c = {};
            if (!0 === i && (n = 1) && (i = null), l) e = {
              p: e
            }, r = {
              p: r
            };
            else if (B(e) && !B(r)) {
              for (u = [], h = e.length, f = h - 2, o = 1; o < h; o++) u.push(t(e[o - 1], e[o]));
              h--, s = function (t) {
                t *= h;
                var e = Math.min(f, ~~t);
                return u[e](t - e)
              }, i = r
            } else n || (e = wt(B(e) ? [] : {}, e));
            if (!u) {
              for (a in r) qe.call(c, e, a, "get", r[a]);
              s = function (t) {
                return sr(t, c) || (l ? e.p : e)
              }
            }
          }
          return Ht(i, s)
        },
        shuffle: ie
      },
      install: G,
      effects: st,
      ticker: Me,
      updateRoot: Ue.updateRoot,
      plugins: nt,
      globalTimeline: s,
      core: {
        PropTween: fr,
        globals: H,
        Tween: Ze,
        Timeline: Ue,
        Animation: Ie,
        getCache: ft,
        _removeLinkedListItem: At,
        reverting: function () {
          return i
        },
        context: function (t) {
          return t && n && (n.data.push(t), t._ctx = n), n
        },
        suppressOverwrites: function (t) {
          return r = t
        }
      }
    };
  ct("to,from,fromTo,delayedCall,set,killTweensOf", (function (t) {
    return yr[t] = Ze[t]
  })), Me.add(Ue.updateRoot), l = yr.to({}, {
    duration: 0
  });
  var Tr = function (t, e) {
      for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
      return r
    },
    xr = function (t, e) {
      return {
        name: t,
        rawVars: 1,
        init: function (t, r, i) {
          i._onInit = function (t) {
            var i, n;
            if (A(r) && (i = {}, ct(r, (function (t) {
                return i[t] = 1
              })), r = i), e) {
              for (n in i = {}, r) i[n] = e(r[n]);
              r = i
            }! function (t, e) {
              var r, i, n, s = t._targets;
              for (r in e)
                for (i = s.length; i--;)(n = t._ptLookup[i][r]) && (n = n.d) && (n._pt && (n = Tr(n, r)), n && n.modifier && n.modifier(e[r], t, s[i], r))
            }(t, r)
          }
        }
      }
    },
    wr = yr.registerPlugin({
      name: "attr",
      init: function (t, e, r, i, n) {
        var s, a, o;
        for (s in this.tween = r, e) o = t.getAttribute(s) || "", (a = this.add(t, "setAttribute", (o || 0) + "", e[s], i, n, 0, 0, s)).op = s, a.b = o, this._props.push(s)
      },
      render: function (t, e) {
        for (var r = e._pt; r;) i ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
      }
    }, {
      name: "endArray",
      init: function (t, e) {
        for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
      }
    }, xr("roundProps", se), xr("modifiers"), xr("snap", ae)) || yr;
  Ze.version = Ue.version = wr.version = "3.11.3", h = 1, R() && Oe(), ke.Power0, ke.Power1, ke.Power2, ke.Power3, ke.Power4, ke.Linear, ke.Quad, ke.Cubic, ke.Quart, ke.Quint, ke.Strong, ke.Elastic, ke.Back, ke.SteppedEase, ke.Bounce, ke.Sine, ke.Expo, ke.Circ;
  /*!
   * CSSPlugin 3.11.3
   * https://greensock.com
   *
   * Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */
  var br, Mr, Or, kr, Ar, Cr, Dr, Sr, Er = {},
    Pr = 180 / Math.PI,
    Rr = Math.PI / 180,
    zr = Math.atan2,
    Fr = /([A-Z])/g,
    Br = /(left|right|width|margin|padding|x)/i,
    Lr = /[\s,\(]\S/,
    Ir = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity"
    },
    Ur = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    },
    Yr = function (t, e) {
      return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    },
    Nr = function (t, e) {
      return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    },
    Xr = function (t, e) {
      var r = e.s + e.c * t;
      e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    },
    qr = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e)
    },
    Vr = function (t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    },
    jr = function (t, e, r) {
      return t.style[e] = r
    },
    Gr = function (t, e, r) {
      return t.style.setProperty(e, r)
    },
    Wr = function (t, e, r) {
      return t._gsap[e] = r
    },
    Qr = function (t, e, r) {
      return t._gsap.scaleX = t._gsap.scaleY = r
    },
    Hr = function (t, e, r, i, n) {
      var s = t._gsap;
      s.scaleX = s.scaleY = r, s.renderTransform(n, s)
    },
    Zr = function (t, e, r, i, n) {
      var s = t._gsap;
      s[e] = r, s.renderTransform(n, s)
    },
    $r = "transform",
    Jr = $r + "Origin",
    Kr = function (t, e) {
      var r = this,
        i = this.target,
        n = i.style;
      if (t in Er) {
        if (this.tfm = this.tfm || {}, "transform" !== t && (~(t = Ir[t] || t).indexOf(",") ? t.split(",").forEach((function (t) {
            return r.tfm[t] = gi(i, t)
          })) : this.tfm[t] = i._gsap.x ? i._gsap[t] : gi(i, t)), this.props.indexOf($r) >= 0) return;
        i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(Jr, e, "")), t = $r
      }(n || e) && this.props.push(t, e, n[t])
    },
    ti = function (t) {
      t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
    },
    ei = function () {
      var t, e, r = this.props,
        i = this.target,
        n = i.style,
        s = i._gsap;
      for (t = 0; t < r.length; t += 3) r[t + 1] ? i[r[t]] = r[t + 2] : r[t + 2] ? n[r[t]] = r[t + 2] : n.removeProperty(r[t].replace(Fr, "-$1").toLowerCase());
      if (this.tfm) {
        for (e in this.tfm) s[e] = this.tfm[e];
        s.svg && (s.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), !(t = Dr()) || t.isStart || n[$r] || (ti(n), s.uncache = 1)
      }
    },
    ri = function (t, e) {
      var r = {
        target: t,
        props: [],
        revert: ei,
        save: Kr
      };
      return e && e.split(",").forEach((function (t) {
        return r.save(t)
      })), r
    },
    ii = function (t, e) {
      var r = Mr.createElementNS ? Mr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Mr.createElement(t);
      return r.style ? r : Mr.createElement(t)
    },
    ni = function t(e, r, i) {
      var n = getComputedStyle(e);
      return n[r] || n.getPropertyValue(r.replace(Fr, "-$1").toLowerCase()) || n.getPropertyValue(r) || !i && t(e, ai(r) || r, 1) || ""
    },
    si = "O,Moz,ms,Ms,Webkit".split(","),
    ai = function (t, e, r) {
      var i = (e || Ar).style,
        n = 5;
      if (t in i && !r) return t;
      for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(si[n] + t in i););
      return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? si[n] : "") + t
    },
    oi = function () {
      "undefined" != typeof window && window.document && (br = window, Mr = br.document, Or = Mr.documentElement, Ar = ii("div") || {
        style: {}
      }, ii("div"), $r = ai($r), Jr = $r + "Origin", Ar.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Sr = !!ai("perspective"), Dr = wr.core.reverting, kr = 1)
    },
    ui = function t(e) {
      var r, i = ii("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        n = this.parentNode,
        s = this.nextSibling,
        a = this.style.cssText;
      if (Or.appendChild(i), i.appendChild(this), this.style.display = "block", e) try {
        r = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
      } catch (t) {} else this._gsapBBox && (r = this._gsapBBox());
      return n && (s ? n.insertBefore(this, s) : n.appendChild(this)), Or.removeChild(i), this.style.cssText = a, r
    },
    hi = function (t, e) {
      for (var r = e.length; r--;)
        if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
    },
    fi = function (t) {
      var e;
      try {
        e = t.getBBox()
      } catch (r) {
        e = ui.call(t, !0)
      }
      return e && (e.width || e.height) || t.getBBox === ui || (e = ui.call(t, !0)), !e || e.width || e.x || e.y ? e : {
        x: +hi(t, ["x", "cx", "x1"]) || 0,
        y: +hi(t, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
      }
    },
    li = function (t) {
      return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !fi(t))
    },
    ci = function (t, e) {
      if (e) {
        var r = t.style;
        e in Er && e !== Jr && (e = $r), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Fr, "-$1").toLowerCase())) : r.removeAttribute(e)
      }
    },
    pi = function (t, e, r, i, n, s) {
      var a = new fr(t._pt, e, r, 0, 1, s ? Vr : qr);
      return t._pt = a, a.b = i, a.e = n, t._props.push(r), a
    },
    _i = {
      deg: 1,
      rad: 1,
      turn: 1
    },
    di = {
      grid: 1,
      flex: 1
    },
    mi = function t(e, r, i, n) {
      var s, a, o, u, h = parseFloat(i) || 0,
        f = (i + "").trim().substr((h + "").length) || "px",
        l = Ar.style,
        c = Br.test(r),
        p = "svg" === e.tagName.toLowerCase(),
        _ = (p ? "client" : "offset") + (c ? "Width" : "Height"),
        d = 100,
        m = "px" === n,
        g = "%" === n;
      return n === f || !h || _i[n] || _i[f] ? h : ("px" !== f && !m && (h = t(e, r, i, "px")), u = e.getCTM && li(e), !g && "%" !== f || !Er[r] && !~r.indexOf("adius") ? (l[c ? "width" : "height"] = d + (m ? f : n), a = ~r.indexOf("adius") || "em" === n && e.appendChild && !p ? e : e.parentNode, u && (a = (e.ownerSVGElement || {}).parentNode), a && a !== Mr && a.appendChild || (a = Mr.body), (o = a._gsap) && g && o.width && c && o.time === Me.time && !o.uncache ? pt(h / o.width * d) : ((g || "%" === f) && !di[ni(a, "display")] && (l.position = ni(e, "position")), a === e && (l.position = "static"), a.appendChild(Ar), s = Ar[_], a.removeChild(Ar), l.position = "absolute", c && g && ((o = ft(a)).time = Me.time, o.width = a[_]), pt(m ? s * h / d : s && h ? d / s * h : 0))) : (s = u ? e.getBBox()[c ? "width" : "height"] : e[_], pt(g ? h / s * d : h / 100 * s)))
    },
    gi = function (t, e, r, i) {
      var n;
      return kr || oi(), e in Ir && "transform" !== e && ~(e = Ir[e]).indexOf(",") && (e = e.split(",")[0]), Er[e] && "transform" !== e ? (n = Ci(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Di(ni(t, Jr)) + " " + n.zOrigin + "px") : (!(n = t.style[e]) || "auto" === n || i || ~(n + "").indexOf("calc(")) && (n = xi[e] && xi[e](t, e, r) || ni(t, e) || lt(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? mi(t, e, n, r) + r : n
    },
    vi = function (t, e, r, i) {
      if (!r || "none" === r) {
        var n = ai(e, t, 1),
          s = n && ni(t, n, 1);
        s && s !== r ? (e = n, r = s) : "borderColor" === e && (r = ni(t, "borderTopColor"))
      }
      var a, o, u, h, f, l, c, p, _, d, m, v = new fr(this._pt, t.style, e, 0, 1, nr),
        y = 0,
        T = 0;
      if (v.b = r, v.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = ni(t, e) || i, t.style[e] = r), be(a = [r, i]), r = a[0], i = a[1], u = r.match(U) || [], (i.match(U) || []).length) {
        for (; o = U.exec(i);) c = o[0], _ = i.substring(y, o.index), f ? f = (f + 1) % 5 : "rgba(" !== _.substr(-5) && "hsla(" !== _.substr(-5) || (f = 1), c !== (l = u[T++] || "") && (h = parseFloat(l) || 0, m = l.substr((h + "").length), "=" === c.charAt(1) && (c = dt(h, c) + m), p = parseFloat(c), d = c.substr((p + "").length), y = U.lastIndex - d.length, d || (d = d || g.units[e] || m, y === i.length && (i += d, v.e += d)), m !== d && (h = mi(t, e, l, d) || 0), v._pt = {
          _next: v._pt,
          p: _ || 1 === T ? _ : ",",
          s: h,
          c: p - h,
          m: f && f < 4 || "zIndex" === e ? Math.round : 0
        });
        v.c = y < i.length ? i.substring(y, i.length) : ""
      } else v.r = "display" === e && "none" === i ? Vr : qr;
      return N.test(i) && (v.e = 0), this._pt = v, v
    },
    yi = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%"
    },
    Ti = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var r, i, n, s = e.t,
          a = s.style,
          o = e.u,
          u = s._gsap;
        if ("all" === o || !0 === o) a.cssText = "", i = 1;
        else
          for (n = (o = o.split(",")).length; --n > -1;) r = o[n], Er[r] && (i = 1, r = "transformOrigin" === r ? Jr : $r), ci(s, r);
        i && (ci(s, $r), u && (u.svg && s.removeAttribute("transform"), Ci(s, 1), u.uncache = 1, ti(a)))
      }
    },
    xi = {
      clearProps: function (t, e, r, i, n) {
        if ("isFromStart" !== n.data) {
          var s = t._pt = new fr(t._pt, e, r, 0, 0, Ti);
          return s.u = i, s.pr = -10, s.tween = n, t._props.push(r), 1
        }
      }
    },
    wi = [1, 0, 0, 1, 0, 0],
    bi = {},
    Mi = function (t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    },
    Oi = function (t) {
      var e = ni(t, $r);
      return Mi(e) ? wi : e.substr(7).match(I).map(pt)
    },
    ki = function (t, e) {
      var r, i, n, s, a = t._gsap || ft(t),
        o = t.style,
        u = Oi(t);
      return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? wi : u : (u !== wi || t.offsetParent || t === Or || a.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (s = 1, i = t.nextElementSibling, Or.appendChild(t)), u = Oi(t), n ? o.display = n : ci(t, "display"), s && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : Or.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    },
    Ai = function (t, e, r, i, n, s) {
      var a, o, u, h = t._gsap,
        f = n || ki(t, !0),
        l = h.xOrigin || 0,
        c = h.yOrigin || 0,
        p = h.xOffset || 0,
        _ = h.yOffset || 0,
        d = f[0],
        m = f[1],
        g = f[2],
        v = f[3],
        y = f[4],
        T = f[5],
        x = e.split(" "),
        w = parseFloat(x[0]) || 0,
        b = parseFloat(x[1]) || 0;
      r ? f !== wi && (o = d * v - m * g) && (u = w * (-m / o) + b * (d / o) - (d * T - m * y) / o, w = w * (v / o) + b * (-g / o) + (g * T - v * y) / o, b = u) : (w = (a = fi(t)).x + (~x[0].indexOf("%") ? w / 100 * a.width : w), b = a.y + (~(x[1] || x[0]).indexOf("%") ? b / 100 * a.height : b)), i || !1 !== i && h.smooth ? (y = w - l, T = b - c, h.xOffset = p + (y * d + T * g) - y, h.yOffset = _ + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = b, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[Jr] = "0px 0px", s && (pi(s, h, "xOrigin", l, w), pi(s, h, "yOrigin", c, b), pi(s, h, "xOffset", p, h.xOffset), pi(s, h, "yOffset", _, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + b)
    },
    Ci = function (t, e) {
      var r = t._gsap || new Le(t);
      if ("x" in r && !e && !r.uncache) return r;
      var i, n, s, a, o, u, h, f, l, c, p, _, d, m, v, y, T, x, w, b, M, O, k, A, C, D, S, E, P, R, z, F, B = t.style,
        L = r.scaleX < 0,
        I = "px",
        U = "deg",
        Y = getComputedStyle(t),
        N = ni(t, Jr) || "0";
      return i = n = s = u = h = f = l = c = p = 0, a = o = 1, r.svg = !(!t.getCTM || !li(t)), Y.translate && ("none" === Y.translate && "none" === Y.scale && "none" === Y.rotate || (B[$r] = ("none" !== Y.translate ? "translate3d(" + (Y.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== Y.rotate ? "rotate(" + Y.rotate + ") " : "") + ("none" !== Y.scale ? "scale(" + Y.scale.split(" ").join(",") + ") " : "") + ("none" !== Y[$r] ? Y[$r] : "")), B.scale = B.rotate = B.translate = "none"), m = ki(t, r.svg), r.svg && (r.uncache ? (C = t.getBBox(), N = r.xOrigin - C.x + "px " + (r.yOrigin - C.y) + "px", A = "") : A = !e && t.getAttribute("data-svg-origin"), Ai(t, A || N, !!A || r.originIsAbsolute, !1 !== r.smooth, m)), _ = r.xOrigin || 0, d = r.yOrigin || 0, m !== wi && (x = m[0], w = m[1], b = m[2], M = m[3], i = O = m[4], n = k = m[5], 6 === m.length ? (a = Math.sqrt(x * x + w * w), o = Math.sqrt(M * M + b * b), u = x || w ? zr(w, x) * Pr : 0, (l = b || M ? zr(b, M) * Pr + u : 0) && (o *= Math.abs(Math.cos(l * Rr))), r.svg && (i -= _ - (_ * x + d * b), n -= d - (_ * w + d * M))) : (F = m[6], R = m[7], S = m[8], E = m[9], P = m[10], z = m[11], i = m[12], n = m[13], s = m[14], h = (v = zr(F, P)) * Pr, v && (A = O * (y = Math.cos(-v)) + S * (T = Math.sin(-v)), C = k * y + E * T, D = F * y + P * T, S = O * -T + S * y, E = k * -T + E * y, P = F * -T + P * y, z = R * -T + z * y, O = A, k = C, F = D), f = (v = zr(-b, P)) * Pr, v && (y = Math.cos(-v), z = M * (T = Math.sin(-v)) + z * y, x = A = x * y - S * T, w = C = w * y - E * T, b = D = b * y - P * T), u = (v = zr(w, x)) * Pr, v && (A = x * (y = Math.cos(v)) + w * (T = Math.sin(v)), C = O * y + k * T, w = w * y - x * T, k = k * y - O * T, x = A, O = C), h && Math.abs(h) + Math.abs(u) > 359.9 && (h = u = 0, f = 180 - f), a = pt(Math.sqrt(x * x + w * w + b * b)), o = pt(Math.sqrt(k * k + F * F)), v = zr(O, k), l = Math.abs(v) > 2e-4 ? v * Pr : 0, p = z ? 1 / (z < 0 ? -z : z) : 0), r.svg && (A = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Mi(ni(t, $r)), A && t.setAttribute("transform", A))), Math.abs(l) > 90 && Math.abs(l) < 270 && (L ? (a *= -1, l += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, l += l <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + I, r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + I, r.z = s + I, r.scaleX = pt(a), r.scaleY = pt(o), r.rotation = pt(u) + U, r.rotationX = pt(h) + U, r.rotationY = pt(f) + U, r.skewX = l + U, r.skewY = c + U, r.transformPerspective = p + I, (r.zOrigin = parseFloat(N.split(" ")[2]) || 0) && (B[Jr] = Di(N)), r.xOffset = r.yOffset = 0, r.force3D = g.force3D, r.renderTransform = r.svg ? Bi : Sr ? Fi : Ei, r.uncache = 0, r
    },
    Di = function (t) {
      return (t = t.split(" "))[0] + " " + t[1]
    },
    Si = function (t, e, r) {
      var i = $t(e);
      return pt(parseFloat(e) + parseFloat(mi(t, "x", r + "px", i))) + i
    },
    Ei = function (t, e) {
      e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Fi(t, e)
    },
    Pi = "0deg",
    Ri = "0px",
    zi = ") ",
    Fi = function (t, e) {
      var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        s = r.x,
        a = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        f = r.rotationX,
        l = r.skewX,
        c = r.skewY,
        p = r.scaleX,
        _ = r.scaleY,
        d = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        T = "auto" === m && t && 1 !== t || !0 === m;
      if (v && (f !== Pi || h !== Pi)) {
        var x, w = parseFloat(h) * Rr,
          b = Math.sin(w),
          M = Math.cos(w);
        w = parseFloat(f) * Rr, x = Math.cos(w), s = Si(g, s, b * x * -v), a = Si(g, a, -Math.sin(w) * -v), o = Si(g, o, M * x * -v + v)
      }
      d !== Ri && (y += "perspective(" + d + zi), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), (T || s !== Ri || a !== Ri || o !== Ri) && (y += o !== Ri || T ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + zi), u !== Pi && (y += "rotate(" + u + zi), h !== Pi && (y += "rotateY(" + h + zi), f !== Pi && (y += "rotateX(" + f + zi), l === Pi && c === Pi || (y += "skew(" + l + ", " + c + zi), 1 === p && 1 === _ || (y += "scale(" + p + ", " + _ + zi), g.style[$r] = y || "translate(0, 0)"
    },
    Bi = function (t, e) {
      var r, i, n, s, a, o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        f = o.x,
        l = o.y,
        c = o.rotation,
        p = o.skewX,
        _ = o.skewY,
        d = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        T = o.xOffset,
        x = o.yOffset,
        w = o.forceCSS,
        b = parseFloat(f),
        M = parseFloat(l);
      c = parseFloat(c), p = parseFloat(p), (_ = parseFloat(_)) && (p += _ = parseFloat(_), c += _), c || p ? (c *= Rr, p *= Rr, r = Math.cos(c) * d, i = Math.sin(c) * d, n = Math.sin(c - p) * -m, s = Math.cos(c - p) * m, p && (_ *= Rr, a = Math.tan(p - _), n *= a = Math.sqrt(1 + a * a), s *= a, _ && (a = Math.tan(_), r *= a = Math.sqrt(1 + a * a), i *= a)), r = pt(r), i = pt(i), n = pt(n), s = pt(s)) : (r = d, s = m, i = n = 0), (b && !~(f + "").indexOf("px") || M && !~(l + "").indexOf("px")) && (b = mi(g, "x", f, "px"), M = mi(g, "y", l, "px")), (v || y || T || x) && (b = pt(b + v - (v * r + y * n) + T), M = pt(M + y - (v * i + y * s) + x)), (u || h) && (a = g.getBBox(), b = pt(b + u / 100 * a.width), M = pt(M + h / 100 * a.height)), a = "matrix(" + r + "," + i + "," + n + "," + s + "," + b + "," + M + ")", g.setAttribute("transform", a), w && (g.style[$r] = a)
    },
    Li = function (t, e, r, i, n) {
      var s, a, o = 360,
        u = A(n),
        h = parseFloat(n) * (u && ~n.indexOf("rad") ? Pr : 1) - i,
        f = i + h + "deg";
      return u && ("short" === (s = n.split("_")[1]) && (h %= o) !== h % 180 && (h += h < 0 ? o : -360), "cw" === s && h < 0 ? h = (h + 36e9) % o - ~~(h / o) * o : "ccw" === s && h > 0 && (h = (h - 36e9) % o - ~~(h / o) * o)), t._pt = a = new fr(t._pt, e, r, i, h, Yr), a.e = f, a.u = "deg", t._props.push(r), a
    },
    Ii = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t
    },
    Ui = function (t, e, r) {
      var i, n, s, a, o, u, h, f = Ii({}, r._gsap),
        l = r.style;
      for (n in f.svg ? (s = r.getAttribute("transform"), r.setAttribute("transform", ""), l[$r] = e, i = Ci(r, 1), ci(r, $r), r.setAttribute("transform", s)) : (s = getComputedStyle(r)[$r], l[$r] = e, i = Ci(r, 1), l[$r] = s), Er)(s = f[n]) !== (a = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = $t(s) !== (h = $t(a)) ? mi(r, n, s, h) : parseFloat(s), u = parseFloat(a), t._pt = new fr(t._pt, i, n, o, u - o, Ur), t._pt.u = h || 0, t._props.push(n));
      Ii(i, f)
    };
  ct("padding,margin,Width,Radius", (function (t, e) {
    var r = "Top",
      i = "Right",
      n = "Bottom",
      s = "Left",
      a = (e < 3 ? [r, i, n, s] : [r + s, r + i, n + i, n + s]).map((function (r) {
        return e < 2 ? t + r : "border" + r + t
      }));
    xi[e > 1 ? "border" + t : t] = function (t, e, r, i, n) {
      var s, o;
      if (arguments.length < 4) return s = a.map((function (e) {
        return gi(t, e, r)
      })), 5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o;
      s = (i + "").split(" "), o = {}, a.forEach((function (t, e) {
        return o[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
      })), t.init(e, o, n)
    }
  }));
  var Yi, Ni, Xi, qi = {
    name: "css",
    register: oi,
    targetTest: function (t) {
      return t.style && t.nodeType
    },
    init: function (t, e, r, i, n) {
      var s, a, o, u, h, f, l, c, p, _, d, m, v, y, T, x, w, b, M, O, k = this._props,
        C = t.style,
        D = r.vars.startAt;
      for (l in kr || oi(), this.styles = this.styles || ri(t), x = this.styles.props, this.tween = r, e)
        if ("autoRound" !== l && (a = e[l], !nt[l] || !Ve(l, e, r, i, t, n)))
          if (h = typeof a, f = xi[l], "function" === h && (h = typeof (a = a.call(r, i, t, n))), "string" === h && ~a.indexOf("random(") && (a = he(a)), f) f(this, t, l, a, r) && (T = 1);
          else if ("--" === l.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(l) + "").trim(), a += "", xe.lastIndex = 0, xe.test(s) || (c = $t(s), p = $t(a)), p ? c !== p && (s = mi(t, l, s, p) + p) : c && (a += c), this.add(C, "setProperty", s, a, i, n, 0, 0, l), k.push(l), x.push(l, 0, C[l]);
      else if ("undefined" !== h) {
        if (D && l in D ? (s = "function" == typeof D[l] ? D[l].call(r, i, t, n) : D[l], A(s) && ~s.indexOf("random(") && (s = he(s)), $t(s + "") || (s += g.units[l] || $t(gi(t, l)) || ""), "=" === (s + "").charAt(1) && (s = gi(t, l))) : s = gi(t, l), u = parseFloat(s), (_ = "string" === h && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), o = parseFloat(a), l in Ir && ("autoAlpha" === l && (1 === u && "hidden" === gi(t, "visibility") && o && (u = 0), x.push("visibility", 0, C.visibility), pi(this, C, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== l && "transform" !== l && ~(l = Ir[l]).indexOf(",") && (l = l.split(",")[0])), d = l in Er)
          if (this.styles.save(l), m || ((v = t._gsap).renderTransform && !e.parseTransform || Ci(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (m = this._pt = new fr(this._pt, C, $r, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === l) this._pt = new fr(this._pt, v, "scaleY", u, (_ ? dt(u, _ + o) : o) - u || 0, Ur), this._pt.u = 0, k.push("scaleY", l), l += "X";
          else {
            if ("transformOrigin" === l) {
              x.push(Jr, 0, C[Jr]), b = void 0, M = void 0, O = void 0, b = (w = a).split(" "), M = b[0], O = b[1] || "50%", "top" !== M && "bottom" !== M && "left" !== O && "right" !== O || (w = M, M = O, O = w), b[0] = yi[M] || M, b[1] = yi[O] || O, a = b.join(" "), v.svg ? Ai(t, a, 0, y, 0, this) : ((p = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && pi(this, v, "zOrigin", v.zOrigin, p), pi(this, C, l, Di(s), Di(a)));
              continue
            }
            if ("svgOrigin" === l) {
              Ai(t, a, 1, y, 0, this);
              continue
            }
            if (l in bi) {
              Li(this, v, l, u, _ ? dt(u, _ + a) : a);
              continue
            }
            if ("smoothOrigin" === l) {
              pi(this, v, "smooth", v.smooth, a);
              continue
            }
            if ("force3D" === l) {
              v[l] = a;
              continue
            }
            if ("transform" === l) {
              Ui(this, a, t);
              continue
            }
          }
        else l in C || (l = ai(l) || l);
        if (d || (o || 0 === o) && (u || 0 === u) && !Lr.test(a) && l in C) o || (o = 0), (c = (s + "").substr((u + "").length)) !== (p = $t(a) || (l in g.units ? g.units[l] : c)) && (u = mi(t, l, s, p)), this._pt = new fr(this._pt, d ? v : C, l, u, (_ ? dt(u, _ + o) : o) - u, d || "px" !== p && "zIndex" !== l || !1 === e.autoRound ? Ur : Xr), this._pt.u = p || 0, c !== p && "%" !== p && (this._pt.b = s, this._pt.r = Nr);
        else if (l in C) vi.call(this, t, l, s, _ ? _ + a : a);
        else {
          if (!(l in t)) {
            W(l, a);
            continue
          }
          this.add(t, l, s || t[l], _ ? _ + a : a, i, n)
        }
        d || (l in C ? x.push(l, 0, C[l]) : x.push(l, 1, s || t[l])), k.push(l)
      }
      T && hr(this)
    },
    render: function (t, e) {
      if (e.tween._time || !Dr())
        for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
      else e.styles.revert()
    },
    get: gi,
    aliases: Ir,
    getSetter: function (t, e, r) {
      var i = Ir[e];
      return i && i.indexOf(",") < 0 && (e = i), e in Er && e !== Jr && (t._gsap.x || gi(t, "x")) ? r && Cr === r ? "scale" === e ? Qr : Wr : (Cr = r || {}) && ("scale" === e ? Hr : Zr) : t.style && !S(t.style[e]) ? jr : ~e.indexOf("-") ? Gr : er(t, e)
    },
    core: {
      _removeProperty: ci,
      _getMatrix: ki
    }
  };
  wr.utils.checkPrefix = ai, wr.core.getStyleSaver = ri, Xi = ct((Yi = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Ni = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function (t) {
    Er[t] = 1
  })), ct(Ni, (function (t) {
    g.units[t] = "deg", bi[t] = 1
  })), Ir[Xi[13]] = Yi + "," + Ni, ct("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function (t) {
    var e = t.split(":");
    Ir[e[1]] = Xi[e[0]]
  })), ct("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function (t) {
    g.units[t] = "px"
  })), wr.registerPlugin(qi);
  var Vi = wr.registerPlugin(qi) || wr;
  Vi.core.Tween, console.log(Vi), Vi.from("header", {
    duration: .25,
    alpha: 0,
    y: -300
  }), Vi.from("ticket-door", {
    duration: .25,
    alpha: 0,
    x: -100
  })
}();