! function (window, w, l) {
    "use strict";
    var L = "ht";
    if (!window.ht) {
        ! function () {
            for (var B = 0, r = ["ms", "moz", "webkit", "o"], q = 0; q < r.length && !window.requestAnimationFrame; ++q) window.requestAnimationFrame = window[r[q] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[r[q] + "CancelAnimationFrame"] || window[r[q] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function (S) {
                var g = (new Date).getTime(),
                    u = Math.max(0, 16 - (g - B)),
                    c = window.setTimeout(function () {
                        S(g + u)
                    }, u);
                return B = g + u, c
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (n) {
                I(n)
            })
        }();
        var Q, a, c, E, document = window.document,
            V = null,
            o = window.ht = {},
            D = window[L + "config"],
            r = o.Default = D && D.Default || {},
            U = o.Style = D && D.Style || {},
            G = o.Color = D && D.Color || {},
            j = o.IsGetter = D && D.IsGetter || {},
            h = Math,
            K = h.round,
            S = h.floor,
            n = h.ceil,
            B = h.sqrt,
            C = h.max,
            J = h.min,
            O = h.abs,
            A = h.cos,
            R = h.acos,
            N = h.sin,
            d = h.pow,
            M = h.asin,
            y = h.PI,
            X = 2 * y,
            q = y / 2,
            P = h.tan,
            x = h.atan2,
            T = h.random,
            Z = !1,
            u = !1,
            m = window.parseInt || global.parseInt,
            W = "2016-12-15",
            b = function (c) {
                return c * c
            },
            k = window.setTimeout,
            I = window.clearTimeout,
            i = window.location,
            Y = window.navigator ? window.navigator.userAgent.toLowerCase() : "",
            t = function (B) {
                return B.test(Y)
            },
            $ = t(/msie/) || t(/trident/),
            g = t(/msie 10/),
            p = t(/firefox/),
            H = t(/mac/),
            e = r.isTouchable === l ? document ? "ontouchend" in document : !1 : r.isTouchable,
            v = "default",
            _ = "single",
            f = "multiple",
            F = "front",
            Fg = "back",
            Sd = "left",
            yn = "right",
            lp = "top",
            ih = "bottom",
            Sh = "center",
            kc = "eye",
            nk = "middle",
            yd = "east",
            xq = "west",
            Mj = "north",
            uk = "none",
            Fb = "px",
            pj = "absolute",
            Mb = "border",
            Vn = "triangle",
            Uj = "rect",
            zi = "circle",
            Pj = "cylinder",
            aq = "shape",
            zq = "items",
            yp = "normal",
            ok = "remove",
            Be = "clear",
            Xq = "width",
            Im = "height",
            mm = "ingroup",
            ng = "check",
            ae = "uncheck",
            nl = "radio",
            Fh = "radioOn",
            um = "radioOff",
            Lf = "points",
            _l = "values",
            uc = "series",
            vd = "body",
            Fq = "label",
            pf = "label2",
            $e = "note",
            Dq = "note2",
            em = "icons",
            td = "labelFont",
            Ok = "labelColor",
            np = "labelSelectColor",
            Sb = "note.expanded",
            rj = "note2.expanded",
            mk = "edge.expanded",
            jh = "edge.points",
            zl = "edge.type",
            Ff = "rotation",
            xm = "getRotation",
            rh = "setRotation",
            wo = "hidden",
            ak = "visible",
            Ci = "tuv",
            $p = "no",
            sp = "select",
            er = "currentSubGraph",
            tg = "selectBackground",
            ck = "autoMakeVisible",
            go = "autoHideScrollBar",
            ki = "scrollBarColor",
            ij = "scrollBarSize",
            lc = "indent",
            uq = "rowHeight",
            ds = "columnLineColor",
            Hl = "rowLineColor",
            hm = "columnLineVisible",
            Ik = "rowLineVisible",
            ej = "visibleFunc",
            Cd = "expandIcon",
            il = "collapseIcon",
            Ri = "checkMode",
            de = "sortFunc",
            Nl = "editable",
            Cg = "batchEditable",
            Tm = "tristate",
            vo = "asc",
            Hi = "desc",
            Kk = "position",
            Mi = "elevation",
            Zp = "children",
            Gi = "translateX",
            jd = "translateY",
            ze = "dataModel",
            yj = "shape3d",
            Uq = "shape3d.resolution",
            Jb = "shape3d.visible",
            qr = "shape3d.from.visible",
            Bc = "shape3d.to.visible",
            $j = "shape3d.top.visible",
            pd = "shape3d.bottom.visible",
            Rr = "repeat.uv.length",
            Sq = "serializeValue",
            vp = "deserializeValue",
            Pg = "centerUniform",
            qd = "rgba(255,255,255,0)",
            Cn = "style",
            Qo = "attr",
            Gf = "field",
            Xk = "string",
            vs = "boolean",
            Df = "color",
            $q = "int",
            ld = "number",
            Eg = "ew-resize",
            qq = "ns-resize",
            ri = "pointer",
            tm = "auto",
            Hm = "mousedown",
            Vl = "mousemove",
            Bh = "mouseup",
            ef = "mouseout",
            so = "touchstart",
            Zk = "touchmove",
            gh = "touchend",
            zf = "keydown",
            Ei = "keyup",
            Zo = p ? "DOMMouseScroll" : "mousewheel",
            bm = e ? [so, Zk, gh] : [zf, Ei, Hm, Vl, Bh, ef, Zo, "contextmenu"],
            $o = V,
            wp = V,
            If = V,
            eg = Bh.length,
            Md = function () {
                If && (I(If.timeout), If = V)
            },
            Di = function () {
                If && Ob(If.e, If.info)
            };
        window.addEventListener && (e || (window.addEventListener(ef, function () {
            Md()
        }, !1), window.addEventListener(Zo, function () {
            Ij()
        }, !1)), window.addEventListener(Ei, function (x) {
            91 === x.keyCode ? Ih = {} : delete Ih[x.keyCode]
        }, !0), window.addEventListener(zf, function (r) {
            Ih[r.keyCode] = !0
        }, !0));
        var $b, hf, pl, zp = !1,
            ao = V,
            zd = V,
            hs = {},
            Tb = {},
            lk = {},
            Ki = {},
            pb = {},
            Ih = {},
            So = {},
            Pd = {},
            Dl = {},
            Nd = [],
            zn = {},
            Od = V,
            Bi = V,
            eo = function () { },
            Nq = function () {
                throw "Oops!"
            },
            yb = [0, 0, 0],
            Um = [0, 0, 0, 0],
            Yd = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            Xp = V,
            hr = V,
            ln = V,
            Ar = function (z) {
                hr && !z._72O && (ln || (ln = {}), ln[z._72O = Rb()] = z), $b != V ? hl() < .05 && E && !hf && (yf = Md) : yf = vh
            },
            ek = function (i, o, $, x) {
                hr || (hr = {});
                var N = hr[i];
                if (N) {
                    if (N.url === o) return;
                    N.image.onload = eo, N.image.onerror = eo
                }
                var E = new Image;
                hr[i] = {
                    image: E,
                    url: o
                }, E.onload = function () {
                    $ && (E.width = $), x && (E.height = x), r.handleImageLoaded(i, E), Dh(i, E)
                }, E.onerror = function () {
                    Dh(i, r.handleUnfoundImage(i, o) || V)
                }, E.src = o
            },
            Dh = function (z, F) {
                if (Tb[z] = F, delete hr[z], vf(hr) && (hr = V, ln)) {
                    for (var k in ln) {
                        var t = ln[k];
                        t.invalidateAll && t.invalidateAll(), t.redraw && t.redraw(), t.iv(), delete t._72O
                    }
                    ln = V
                }
                if (F && ln)
                    for (var k in ln) {
                        var t = ln[k];
                        t.invalidateAll && t.invalidateAll(), t.redraw && t.redraw(), t.iv()
                    }
            },
            rf = function () {
                return window.performance && window.performance.now ? window.performance.now() : Date.now()
            },
            Af = function (Z, u) {
                u ? I(Z) : window.cancelAnimationFrame(Z)
            },
            Mf = function (d, t, e) {
                return {
                    width: d,
                    height: t,
                    comps: Ue(e) ? e : [e]
                }
            },
            Yb = function (V, x) {
                return {
                    type: zi,
                    rect: [V, x, 1.6, 1.6],
                    borderWidth: 1,
                    borderColor: Dd,
                    gradient: Uf,
                    gradientColor: Br,
                    background: Dd
                }
            },
            Fk = function (e, r) {
                return Mf(16, 16, {
                    type: Vn,
                    rect: [4, 4, 10, 8],
                    background: e,
                    rotation: r ? 1.57 : 3.14
                })
            },
            bd = function (n, h) {
                return Mf(16, 16, {
                    type: Vn,
                    rect: [4, 4, 8, 7],
                    background: n,
                    rotation: h ? 3.14 : 0
                })
            },
            ui = function (u) {
                var L = u._orientation;
                return "horizontal" === L || "h" === L
            },
            Rn = function (r) {
                o.z = a = r
            },
            bj = function (n) {
                var Y = 2,
                    t = 0;
                for (var Q in n) Q.length === Y && m(Q, 32) === vi && (Od = Bi = n[Q]), t++;
                return t
            },
            _i = function (L, b, n) {
                return n ? {
                    x: L - n,
                    y: b - n,
                    width: 2 * n + 1,
                    height: 2 * n + 1
                } : e ? {
                    x: L - 5,
                    y: b - 5,
                    width: 11,
                    height: 11
                } : {
                    x: L - 1,
                    y: b - 1,
                    width: 3,
                    height: 3
                }
            },
            Xl = function (X) {
                return (/ble$/.test(X) || /ed$/.test(X) || j[X] ? "is" : "get") + X.charAt(0).toUpperCase() + X.slice(1)
            },
            yl = function (Z) {
                return "set" + Z.charAt(0).toUpperCase() + Z.slice(1)
            },
            Yp = function (p) {
                return typeof p === Xk || p instanceof String
            },
            _f = function (d) {
                return typeof d === ld
            },
            vh = function (Y) {
                return typeof Y === vs
            },
            bs = function (X) {
                return X && "object" == typeof X
            },
            Wl = function (U) {
                return "function" == typeof U
            },
            Ue = function (D) {
                return D instanceof Array
            },
            Vm = function (b) {
                return b instanceof Io
            },
            rp = function (K) {
                return Ue(K) ? new Io(K) : K
            },
            Zl = function (Q) {
                return Q instanceof Lg
            },
            gj = function (W) {
                return W instanceof Lc
            },
            Bb = function (s) {
                return s instanceof Uk
            },
            og = function (m) {
                return m && "IFRAME" === m.tagName
            },
            oj = function (I) {
                return I == V ? I : parseFloat(I.toFixed(2))
            },
            Of = function (O, r, F) {
                var b, f = r.length;
                if (F)
                    for (var q = 0; F > q; q++)
                        if (3 === f) O.push(r[0]), O.push(r[1]), O.push(r[2]);
                        else
                            for (b = 0; f > b; b++) O.push(r[b]);
                else if (3 === f) O.push(r[0]), O.push(r[1]), O.push(r[2]);
                else
                    for (b = 0; f > b; b++) O.push(r[b])
            },
            sr = function (y) {
                return y ? bs(y) ? y : {} : !1
            },
            Zc = function (a, t, L) {
                var F, z = bs(a) ? a : a.prototype;
                for (F in t) L && z[F] !== l || (z[F] = t[F]);
                return a
            },
            od = function (Y) {
                return String.fromCharCode(Y)
            },
            kg = function (H) {
                for (var n, D = 0, A = ""; D < H.length; D++) n = H[H.length - 1 - D], "%" === n ? n = "'" : "a" === n ? n = '"' : "]" === n && (n = "\\"), A += od(n.charCodeAt(0) - 1);
                return A
            },
            fi = function (s, v, S) {
                s.superClass.constructor.apply(v, S)
            },
            vf = function (k) {
                for (var y in k) return !1;
                return !0
            },
            Qp = function (P) {
                return P ? 0 === P.length : !0
            },
            ue = function (Q, L) {
                return Q.x === L.x && Q.y === L.y && Q.width === L.width && Q.height === L.height
            },
            Oi = function (G, g, B) {
                return g > G ? g : G > B ? B : G
            },
            hl = function () {
                var U = 1e4 * N(eg++);
                return U - S(U)
            },
            ep = function (L, C, a) {
                return nh(L.x, L.y, C.x, C.y, a.x, a.y, a.x + a.width, a.y, !0) || nh(L.x, L.y, C.x, C.y, a.x + a.width, a.y, a.x + a.width, a.y + a.height, !0) || nh(L.x, L.y, C.x, C.y, a.x + a.width, a.y + a.height, a.x, a.y + a.height, !0) || nh(L.x, L.y, C.x, C.y, a.x, a.y + a.height, a.x, a.y, !0)
            },
            nh = function (f, r, w, I, F, g, T, i, q) {
                var c = (T - F) * (r - g) - (i - g) * (f - F),
                    Y = (i - g) * (w - f) - (T - F) * (I - r);
                if (0 !== Y) {
                    var U = c / Y,
                        h = f + U * (w - f),
                        Z = r + U * (I - r);
                    return q && (h + pg < J(f, w) || h - pg > C(f, w) || h + pg < J(F, T) || h - pg > C(F, T) || Z + pg < J(r, I) || Z - pg > C(r, I) || Z + pg < J(g, i) || Z - pg > C(g, i)) ? V : [h, Z]
                }
                return V
            },
            jr = function (b, P, J) {
                if (b && J)
                    if (P) {
                        if (P === Cn) return b.getStyle(J);
                        if (P === Qo) return b.getAttr(J);
                        if (P === Gf) return b[J]
                    } else if (J = Xl(J), b[J]) return b[J]();
                return l
            },
            Tp = function (B, L, x, s) {
                if (B && x)
                    if (L) {
                        if (L === Cn) B.s(x, s);
                        else if (L === Qo) B.a(x, s);
                        else if (L === Gf) {
                            var _ = B[x];
                            B[x] = s, B.fp("f:" + x, _, s)
                        }
                    } else x = yl(x), B[x] && B[x](s)
            },
            Sr = function (v, D, E, N, X) {
                D && Sf(v, E, N, 1, X, D)
            },
            bi = function (h, q, t, l) {
                var p = 1 - h;
                return p * p * q + 2 * h * p * t + h * h * l
            },
            Zf = function (_, w, O, x, J) {
                var Z = 1 - _;
                return Z * Z * Z * w + 3 * Z * Z * _ * O + 3 * Z * _ * _ * x + _ * _ * _ * J
            },
            Rh = function (p) {
                var j, R, n, P, s = 0;
                return p.forEach(function (H) {
                    if (j = H.length, j > 0)
                        for (R = H[0], P = 1; j > P; P++) n = H[P], s += md(R, n), R = n
                }), s
            },
            Fr = function (I, M, m) {
                var R = "__" + I,
                    g = function (c) {
                        m["handle_" + I](c)
                    };
                m[R] || (m[R] = g, M.addEventListener(I, g, !1))
            },
            Nf = function (H, R, M) {
                var P = "__" + H,
                    y = M[P];
                y && (R.removeEventListener(H, y, !1), delete M[P])
            },
            Db = function (d, Z) {
                var c = "_" + Z;
                d[Xl(Z)] = function () {
                    return this[c]
                }, d[yl(Z)] = function (B) {
                    var N = this[c];
                    this[c] = B, this.fp(Z, N, B)
                }
            },
            Co = function (H) {
                return w.create(H)
            },
            mr = function (F) {
                if (!F.element) {
                    var a, e;
                    (a = F.textField) ? e = Qg(Cs.TextField, a) : (a = F.textArea) ? e = Qg(Cs.TextArea, a) : (a = F.button) ? e = Qg(Cs.Button, a) : (a = F.comboBox) ? e = Qg(Cs.ComboBox, a) : (a = F.checkBox) ? e = Qg(Cs.CheckBox, a) : (a = F.radioButton) ? e = Qg(Cs.RadioButton, a) : (a = F.slider) ? e = Qg(Cs.Slider, a) : (a = F.colorPicker) ? e = Qg(Cs.ColorPicker, a) : (a = F.image) && (e = Qg(Cs.Image, a)), e && (F.element = e)
                }
            },
            Xh = function (W) {
                var i = document.createElement("div"),
                    p = i.style;
                return i.tabIndex = -1, i.onkeydown = Mh, p.msTouchAction = uk, p.cursor = v, fn(i, V, 0), e && p.setProperty("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", V), W && (p.overflow = wo), i
            },
            Qk = function (f) {
                var K = document.createElement("canvas"),
                    l = K.style;
                return l.msTouchAction = uk, l.pointerEvents = uk, fn(K, V, 0), f && yk(f, K), K
            },
            fn = function (k, Q, e) {
                var H = k.style;
                H.border = Q ? Q + " solid 1px" : 0, H.outline = 0, H.padding = e ? "0 " + e + Fb : 0, Kn(k)
            },
            Kn = function (S) {
                var C = S.style;
                C.position = pj, C.margin = 0, C.setProperty("box-sizing", "border-box", V), C.setProperty("-moz-box-sizing", "border-box", V)
            },
            Qq = function (z, E, k, D) {
                D || (D = jq), E != V && (z.width = E * D, z.style.width = E + Fb), k != V && (z.height = k * D, z.style.height = k + Fb)
            },
            yk = function (O, C, m) {
                O.appendChild(C), m && (C.style.position = pj)
            },
            Rp = function (b, B) {
                B.split || (B += "");
                for (var _, Y = B.split("\n"), k = 0, P = Y.length, T = 0; P > T; T++) {
                    var A = vr(b.font, Y[T]);
                    A.width > k && (k = A.width), _ || (_ = A.height)
                }
                return b.ss = Y, {
                    width: k,
                    height: _ * P
                }
            },
            tk = function (O, d, E, Y, H, _) {
                var Z = d.length;
                if (1 === Z) jo(O, d[0], E, Y, H);
                else
                    for (var B = E.height / Z, l = {
                        x: E.x,
                        y: E.y,
                        width: E.width,
                        height: B
                    }, n = 0; n < d.length; n++) _ ? ks(O, d[n], Y, H, l.x, l.y, l.width, l.height, _) : jo(O, d[n], l, Y, H), l.y += B
            },
            jo = function (i, R, Y, h, Z) {
                i.font = h ? h : Dp, i.fillStyle = Z ? Z : Nb, i.textAlign = Sh, i.textBaseline = nk;
                var O, n;
                Y ? Y.width === l ? (O = Y.x, n = Y.y) : (O = Y.x + Y.width / 2, n = Y.y + Y.height / 2) : (O = 0, n = 0), i.fillText(R, K(O), K(n))
            },
            Jm = function (M) {
                M.getView && (M = M.getView());
                var x = M.offsetWidth || M.scrollWidth;
                return !x && M.style.width && (x = m(M.style.width)), x
            },
            rl = function (U) {
                U.getView && (U = U.getView());
                var w = U.offsetHeight || U.scrollHeight;
                return !w && U.style.height && (w = m(U.style.height)), w
            },
            le = function () {
                var d = function ($) {
                    Mh($), $.stopPropagation()
                },
                    Z = e ? [so] : [zf, Hm, Zo];
                return function (O) {
                    var $ = Xh(),
                        E = $.style;
                    return E.backgroundColor = r.disabledBackground, O && (E.backgroundImage = "url(" + O + ")", E.backgroundPosition = "50% 50%", E.backgroundRepeat = "no-repeat no-repeat"), Z.forEach(function (t) {
                        $.addEventListener(t, d)
                    }), $
                }
            }(),
            Gg = function (n) {
                var L = n.getContext("2d");
                return L.save(), L.lineCap = Ud, L.lineJoin = sj, L
            },
            yf = function (V, F, S, f) {
                Ze(V, F * jq, S * jq), f *= jq, 1 !== f && V.scale(f, f)
            },
            Ze = function (Q, X, G) {
                Q.translate(X, G)
            },
            Cj = function (H, D) {
                H.rotate(D)
            },
            Jc = function (V) {
                if (document.activeElement !== V)
                    if (e) V.focus();
                    else {
                        var h = wl(),
                            x = h.target;
                        V.focus(), x.scrollLeft = h.left, x.scrollTop = h.top
                    }
            },
            $k = function (J) {
                return J && J.getView ? J.getView() : J
            },
            Xe = function (M, f, Q, b, u) {
                2 === arguments.length && (Q = f.y, b = f.width, u = f.height, f = f.x);
                var y = $k(M),
                    L = y.style;
                (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) !== y && (f !== l && (L.left = f + Fb), Q !== l && (L.top = Q + Fb), b !== l && (L.width = b + Fb), u !== l && (L.height = u + Fb)), M.endEditing && !e && M.endEditing(), M.redraw && M.redraw(), M.invalidate && M.invalidate(), M.onLayouted && M.onLayouted(f, Q, b, u), M._41O && M._41O("layout")
            },
            Vp = function (p) {
                var m = p.touches[0];
                return m ? m : p.changedTouches[0]
            },
            op = function (Q) {
                r.popup && r.popup.close(), r.popup = Q
            },
            _h = V,
            hi = function (z) {
                _h.handleWindowTouchMove(z)
            },
            be = function (q) {
                _h.handleWindowTouchEnd(q), window.removeEventListener(Zk, hi, !1), window.removeEventListener(gh, be, !1), _h = V
            },
            Rd = function (k) {
                _h.handleWindowMouseMove(k)
            },
            $l = function (j) {
                _h.handleWindowMouseUp(j), window.removeEventListener(Vl, Rd, !1), window.removeEventListener(Bh, $l, !1), _h = V
            },
            hn = function (S) {
                return 1 === Yn(S)
            },
            ie = function (U, G) {
                return G ? G.keyCode === U : Ih[U]
            },
            mc = function (b) {
                return im(b) && ie(65, b)
            },
            cg = function (y) {
                return ie(46, y) || ie(8, y)
            },
            Fo = function (f) {
                return function (e) {
                    return e ? e.keyCode === f : Ih[f]
                }
            },
            vi = 573,
            $i = [65, 83, 68, 87, 37, 38, 39, 40, 32, 13, 27],
            fg = Fo($i[0]),
            Ol = Fo($i[1]),
            Ll = Fo($i[2]),
            Zi = Fo($i[3]),
            xb = Fo($i[4]),
            yg = Fo($i[5]),
            Hb = Fo($i[6]),
            _n = Fo($i[7]),
            xe = Fo($i[8]),
            Cr = Fo($i[9]),
            Qb = Fo($i[10]),
            sn = {
                65: 1,
                83: 1,
                68: 1,
                87: 1,
                37: 1,
                38: 1,
                39: 1,
                40: 1
            },
            cb = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7],
            ph = V,
            Pl = V,
            Tl = function (v, g) {
                ph || (ph = Qk()), Qq(ph, v, g, 1);
                var r = Gg(ph);
                return r.clearRect(0, 0, v, g), r
            },
            mi = function () {
                var C, i = {};
                return function (p) {
                    var E, X = i[p];
                    return X || (C || (C = Qk(), Qq(C, 1, 1, 1)), E = C.getContext("2d"), E.clearRect(0, 0, 1, 1), Sf(E, 0, 0, 1, 1, p), X = E.getImageData(0, 0, 1, 1).data, X = i[p] = [X[0], X[1], X[2], X[3]]), X
                }
            }(),
            si = function (K) {
                if (!Yp(K)) return K;
                var H = mi(K);
                return H.CA || (H.CA = [H[0] / 255, H[1] / 255, H[2] / 255, H[3] / 255]), H.CA
            },
            xj = function (G, y, L, K) {
                var V = Qk();
                V.width = L, V.height = K;
                var z = V.getContext("2d");
                z.drawImage(G, 0, 0, L, K);
                try {
                    for (var l = z.getImageData(0, 0, L, K), g = l.data, r = 0, Z = g.length; Z > r; r += 4) {
                        var S = g[r + 0],
                            q = g[r + 1],
                            W = g[r + 2];
                        g[r + 0] = y[0] * S, g[r + 1] = y[1] * q, g[r + 2] = y[2] * W
                    }
                    z.putImageData(l, 0, 0)
                } catch (n) {
                    return G
                }
                return V
            },
            dr = function (X, L, O) {
                return L && (L = "miter" === O ? 8 * L + 20 : L + 1, X && Gb(X, L)), L
            },
            aj = function (m, H) {
                if (H) {
                    var U = new wf(H),
                        l = m.width / 2,
                        B = m.height / 2,
                        O = Aq([U.tf(-l, -B), U.tf(l, -B), U.tf(l, B), U.tf(-l, B)]);
                    return O.x += m.x + l, O.y += m.y + B, O
                }
                return m
            },
            Ed = function (F, Y, p, R, a, w, y, o) {
                R *= Math.PI / 180;
                var e = {
                    x: Math.cos(R) * (F.x - y.x) / 2 + Math.sin(R) * (F.y - y.y) / 2,
                    y: -Math.sin(R) * (F.x - y.x) / 2 + Math.cos(R) * (F.y - y.y) / 2
                },
                    l = Math.pow(e.x, 2) / Math.pow(Y, 2) + Math.pow(e.y, 2) / Math.pow(p, 2);
                l > 1 && (Y *= Math.sqrt(l), p *= Math.sqrt(l));
                var q = (a == w ? -1 : 1) * Math.sqrt((Math.pow(Y, 2) * Math.pow(p, 2) - Math.pow(Y, 2) * Math.pow(e.y, 2) - Math.pow(p, 2) * Math.pow(e.x, 2)) / (Math.pow(Y, 2) * Math.pow(e.y, 2) + Math.pow(p, 2) * Math.pow(e.x, 2)));
                isNaN(q) && (q = 0);
                var $ = {
                    x: q * Y * e.y / p,
                    y: q * -p * e.x / Y
                },
                    L = {
                        x: (F.x + y.x) / 2 + Math.cos(R) * $.x - Math.sin(R) * $.y,
                        y: (F.y + y.y) / 2 + Math.sin(R) * $.x + Math.cos(R) * $.y
                    },
                    b = function (t) {
                        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2))
                    },
                    C = function (Q, m) {
                        return (Q[0] * m[0] + Q[1] * m[1]) / (b(Q) * b(m))
                    },
                    X = function (J, n) {
                        return (J[0] * n[1] < J[1] * n[0] ? -1 : 1) * Math.acos(C(J, n))
                    },
                    Q = X([1, 0], [(e.x - $.x) / Y, (e.y - $.y) / p]),
                    G = [(e.x - $.x) / Y, (e.y - $.y) / p],
                    d = [(-e.x - $.x) / Y, (-e.y - $.y) / p],
                    r = X(G, d);
                C(G, d) <= -1 && (r = Math.PI), C(G, d) >= 1 && (r = 0);
                var C = Y > p ? Y : p,
                    U = Y > p ? 1 : Y / p,
                    m = Y > p ? p / Y : 1;
                if (null == o) {
                    var M = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    };
                    Gb(M, C), M.x *= U, M.width *= U, M.y *= m, M.height *= m;
                    var V = new wf(R);
                    return M = Aq([V.tf(M.x, M.y), V.tf(M.x + M.width, M.y), V.tf(M.x + M.width, M.y + M.height), V.tf(M.x, M.y + M.height)]), M.x += L.x, M.y += L.y, [{
                        x: M.x,
                        y: M.y
                    }, {
                        x: M.x + M.width,
                        y: M.y
                    }, {
                        x: M.x + M.width,
                        y: M.y + M.height
                    }, {
                        x: M.x,
                        y: M.y + M.height
                    }]
                }
                o.translate(L.x, L.y), o.rotate(R), o.scale(U, m), o.arc(0, 0, C, Q, Q + r, 1 - w), o.scale(1 / U, 1 / m), o.rotate(-R), o.translate(-L.x, -L.y)
            },
            Jk = function (q, H) {
                q && q.beginPath();
                for (var X, D, K, k = [], A = function (p) {
                        for (var A, W = /(\-{0,1}[\d\.]+)/gi, b = []; A = W.exec(p) ;) b.push(parseFloat(A[0]));
                        return b
                }, z = /([MmLlHhVvCcSsQqTtAa]{1}[\d\.,\s\-Zz]*)/gi, Z = {
                    x: 0,
                    y: 0
                }; X = z.exec(H) ;) {
                    var N = X[0],
                        E = N.substr(0, 1);
                    if ("M" === E || "m" === E) {
                        for (var L = A(N), s = 0; s < L.length; s += 2) {
                            var G = L[s],
                                p = L[s + 1];
                            "m" === E && (G += Z.x, p += Z.y), q && q.moveTo(G, p), k.push({
                                x: G,
                                y: p
                            }), Z.x = G, Z.y = p
                        }
                        D = K = null
                    } else if ("H" === E || "h" === E) {
                        for (var L = A(N), s = 0; s < L.length; s += 1) {
                            var G = L[s];
                            "h" === E && (G += Z.x), q && q.lineTo(G, Z.y), k.push({
                                x: G,
                                y: Z.y
                            }), Z.x = G
                        }
                        D = K = null
                    } else if ("C" === E || "c" === E) {
                        for (var L = A(N), s = 0; s < L.length; s += 6) {
                            var W = L[s],
                                P = L[s + 1],
                                V = L[s + 2],
                                S = L[s + 3],
                                G = L[s + 4],
                                p = L[s + 5];
                            "c" === E && (W += Z.x, P += Z.y, V += Z.x, S += Z.y, G += Z.x, p += Z.y), q && q.bezierCurveTo(W, P, V, S, G, p), k.push({
                                x: W,
                                y: P
                            }), k.push({
                                x: V,
                                y: S
                            }), k.push({
                                x: G,
                                y: p
                            }), Z.x = G, Z.y = p
                        }
                        D = [W, P, V, S, G, p], K = null
                    } else if ("S" === E || "s" === E) {
                        for (var L = A(N), s = 0; s < L.length; s += 4) {
                            var W, P;
                            D ? (W = 2 * D[4] - D[2], P = 2 * D[5] - D[3]) : (W = Z.x, P = Z.y);
                            var V = L[s],
                                S = L[s + 1],
                                G = L[s + 2],
                                p = L[s + 3];
                            "s" === E && (V += Z.x, S += Z.y, G += Z.x, p += Z.y), q && q.bezierCurveTo(W, P, V, S, G, p), k.push({
                                x: W,
                                y: P
                            }), k.push({
                                x: V,
                                y: S
                            }), k.push({
                                x: G,
                                y: p
                            }), Z.x = G, Z.y = p
                        }
                        D = [W, P, V, S, G, p], K = null
                    } else if ("Q" === E || "q" === E) {
                        for (var L = A(N), s = 0; s < L.length; s += 4) {
                            var W = L[s],
                                P = L[s + 1],
                                G = L[s + 2],
                                p = L[s + 3];
                            "q" === E && (W += Z.x, P += Z.y, G += Z.x, p += Z.y), q && q.quadraticCurveTo(W, P, G, p), k.push({
                                x: W,
                                y: P
                            }), k.push({
                                x: G,
                                y: p
                            }), Z.x = G, Z.y = p
                        }
                        D = null, K = [W, P, G, p]
                    } else if ("T" === E || "t" === E) {
                        for (var L = A(N), s = 0; s < L.length; s += 2) {
                            var W, P;
                            K ? (W = 2 * K[2] - K[0], P = 2 * K[3] - K[1]) : (W = Z.x, P = Z.y);
                            var G = L[s],
                                p = L[s + 1];
                            "t" === E && (G += Z.x, p += Z.y), q && q.quadraticCurveTo(W, P, G, p), k.push({
                                x: W,
                                y: P
                            }), k.push({
                                x: G,
                                y: p
                            }), Z.x = G, Z.y = p
                        }
                        D = null, K = [W, P, G, p]
                    } else if ("V" === E || "v" === E) {
                        for (var L = A(N), s = 0; s < L.length; s += 1) {
                            var p = L[s];
                            "v" === E && (p += Z.y), q && q.lineTo(Z.x, p), k.push({
                                x: Z.x,
                                y: p
                            }), Z.y = p
                        }
                        D = K = null
                    } else if ("L" === E || "l" === E) {
                        for (var L = A(N), s = 0; s < L.length; s += 2) {
                            var G = L[s],
                                p = L[s + 1];
                            "l" === E && (G += Z.x, p += Z.y), q && q.lineTo(G, p), k.push({
                                x: G,
                                y: p
                            }), Z.x = G, Z.y = p
                        }
                        D = K = null
                    } else if ("A" === E || "a" === E) {
                        for (var L = A(N), s = 0; s < L.length; s += 7) {
                            var R = L[s],
                                F = L[s + 1],
                                d = L[s + 2],
                                O = L[s + 3],
                                I = L[s + 4],
                                G = L[s + 5],
                                p = L[s + 6];
                            "a" === E && (G += Z.x, p += Z.y);
                            var g = Ed(Z, R, F, d, O, I, {
                                x: G,
                                y: p
                            }, q);
                            g && (k = k.concat(g)), Z.x = G, Z.y = p
                        }
                        D = K = null
                    }
                    var n = N.substr(N.length - 1);
                    ("z" === n || "Z" === n) && q && q.closePath()
                }
                return k
            },
            Xo = function (m, x, v, n) {
                var W = !1;
                if (m.beginPath ? m.beginPath() : W = !0, Vm(x) && (x = x._as), Vm(v) && (v = v._as), v && v.length) {
                    for (var Z, d, b, N, g = 0, M = 0, c = v.length; c > M; M++) Z = v[M], 1 === Z ? (d = x[g++], m.moveTo(d.x, W ? -d.y : d.y)) : 2 === Z ? (d = x[g++], m.lineTo(d.x, W ? -d.y : d.y)) : 3 === Z ? (d = x[g++], b = x[g++], m.quadraticCurveTo(d.x, W ? -d.y : d.y, b.x, W ? -b.y : b.y)) : 4 === Z ? (d = x[g++], b = x[g++], N = x[g++], m.bezierCurveTo(d.x, W ? -d.y : d.y, b.x, W ? -b.y : b.y, N.x, W ? -N.y : N.y)) : 5 === Z && m.closePath();
                    n && 5 !== Z && m.closePath()
                } else {
                    var t, D, I, U = x.length;
                    if (U > 0) {
                        for (t = x[0], m.moveTo(t.x, W ? -t.y : t.y), D = 1; U > D; D++) I = x[D], m.lineTo(I.x, W ? -I.y : I.y);
                        n && m.closePath()
                    }
                }
            },
            km = function (p, Z, w, D) {
                if (Vm(p) && (p = p._as), Vm(Z) && (Z = Z._as), Z && Z.length) {
                    w = w || cf;
                    for (var _, B, g, M, N, X, $ = [], s = V, v = 0, r = 0, R = Z.length; R > r; r++)
                        if (_ = Z[r], 1 === _) $.push(s = []), s.push(p[v++]);
                        else if (2 === _) s.push(p[v++]);
                        else if (3 === _)
                            for (B = s[s.length - 1], g = p[v++], M = p[v++], X = 1; w >= X; X++) s.push({
                                x: bi(X / w, B.x, g.x, M.x),
                                y: bi(X / w, B.y, g.y, M.y)
                            });
                        else if (4 === _)
                            for (B = s[s.length - 1], g = p[v++], M = p[v++], N = p[v++], X = 1; w >= X; X++) s.push({
                                x: Zf(X / w, B.x, g.x, M.x, N.x),
                                y: Zf(X / w, B.y, g.y, M.y, N.y)
                            });
                        else 5 === _ && s.push(s[0]);
                    return D && 5 !== _ && s && s.length > 2 && s.push(s[0]), $
                }
                return D && p.length > 2 && (p = p.slice(), p.push(p[0])), p ? [p] : []
            },
            Jj = function (R, t, o, l, Z, E) {
                var k, X, C, f = mi(t),
                    m = l,
                    I = f[0],
                    Y = f[1],
                    r = f[2];
                if (o) {
                    var M = mi(o);
                    k = M[0] - I, X = M[1] - Y, C = M[2] - r
                } else k = 255 - I, X = 255 - Y, C = 255 - r;
                for (E || (E = l > 10 ? 1 : .5, E = 1 > Z ? J(E / Z, 2) : E) ;
                    (l -= E) > 0;) {
                    var F = 1 - l / m,
                        p = I + k * F,
                        y = Y + X * F,
                        e = r + C * F;
                    p = J(n(p), 255), y = J(n(y), 255), e = J(n(e), 255), R.strokeStyle = "rgb(" + p + "," + y + "," + e + ")", R.lineWidth = l, R.stroke()
                }
            },
            Hh = function () {
                var z = {};
                return function (T, s) {
                    var g = T + "-" + s,
                        q = z[g];
                    if (q) return q;
                    var M, x, R, Y = mi(T);
                    return 0 > s ? (s = (100 + s) / 100, M = n(Y[0] * s), x = n(Y[1] * s), R = n(Y[2] * s)) : (s /= 100, M = Y[0], x = Y[1], R = Y[2], M += (255 - M) * s, x += (255 - x) * s, R += (255 - R) * s, M = J(n(M), 255), x = J(n(x), 255), R = J(n(R), 255)), z[g] = "rgb(" + M + "," + x + "," + R + ")"
                }
            }(),
            Sf = function (U, S, L, _, I, W) {
                W && (U.fillStyle = W), U.beginPath(), U.rect(S, L, _, I), U.fill()
            },
            Pm = function (f, A, y, T, U, X, M) {
                f.beginPath(), Lb[A](f, y.x, y.y, y.width, y.height, T, U, X, M)
            },
            Dg = function (p, S, t, Y, I) {
                var O = Lb[t];
                p.fillStyle = O ? O(p, S, Y ? Y : Br, I.x, I.y, I.width, I.height) : S
            },
            lh = function (R, S) {
                R.fillStyle = R.createPattern(S, "repeat")
            },
            Lq = function (Y, m, z, d, M, G, E, x) {
                var l, F, h, o, w, T, R, c, f, V, K;
                if (O(M) > 2 * y && (M = 2 * y), w = n(O(M) / (y / 4)), l = M / w, F = -l, h = -d, w > 0) {
                    T = m + A(d) * G, R = z + N(-d) * E, x ? Y.lineTo(T, R) : Y.moveTo(T, R);
                    for (var P = 0; w > P; P++) h += F, o = h - F / 2, c = m + A(h) * G, f = z + N(h) * E, V = m + A(o) * (G / A(F / 2)), K = z + N(o) * (E / A(F / 2)), Y.quadraticCurveTo(V, K, c, f)
                }
            },
            Ap = function ($, e, C, A, S, b, k, O, n) {
                6 === arguments.length && (k = b, O = b, n = b);
                var q = e + A,
                    V = C + S,
                    L = S > A ? 2 * A : 2 * S;
                b = L > b ? b : L, k = L > k ? k : L, O = L > O ? O : L, n = L > n ? n : L;
                var U = .29 * n,
                    Z = .58 * n;
                $.moveTo(q, V - n), $.quadraticCurveTo(q, V - Z, q - U, V - U), $.quadraticCurveTo(q - Z, V, q - n, V), U = .29 * O, Z = .58 * O, $.lineTo(e + O, V), $.quadraticCurveTo(e + Z, V, e + U, V - U), $.quadraticCurveTo(e, V - Z, e, V - O), U = .29 * b, Z = .58 * b, $.lineTo(e, C + b), $.quadraticCurveTo(e, C + Z, e + U, C + U), $.quadraticCurveTo(e + Z, C, e + b, C), U = .29 * k, Z = .58 * k, $.lineTo(q - k, C), $.quadraticCurveTo(q - Z, C, q - U, C + U), $.quadraticCurveTo(q, C + Z, q, C + k), $.lineTo(q, V - n)
            },
            Jf = function (Y, Q, V, O, B, C, j) {
                Q && (V = K(V), O = K(O), j || (j = 1), Y.fillStyle = Q, Y.beginPath(), Y.rect(V, O, j, C), Y.rect(V, O, B, j), Y.rect(V, O + C - j, B, j), Y.rect(V + B - j, O, j, C), Y.fill())
            },
            Gd = function (u, K, l, d) {
                var G = d.x,
                    t = d.y,
                    v = d.width,
                    N = d.height;
                if (!(!K || !l || 0 >= v || 0 >= N)) {
                    var w, L = Mc(K),
                        V = Yg(K),
                        Y = l > 0;
                    1 === l || -1 === l ? (u.fillStyle = Y ? L : V, u.beginPath(), u.rect(G, t, 1, N), u.rect(G, t, v, 1), u.fill(), u.fillStyle = Y ? V : L, u.beginPath(), u.rect(G, t + N - 1, v, 1), u.rect(G + v - 1, t, 1, N), u.fill()) : (l = J(O(l), J(v / 2, N / 2)), w = u.createLinearGradient(G, t, G + l, t), w.addColorStop(0, Y ? L : V), w.addColorStop(1, K), u.fillStyle = w, u.beginPath(), u.moveTo(G, t), u.lineTo(G + l, t + l), u.lineTo(G + l, t + N - l), u.lineTo(G, t + N), u.lineTo(G, t), u.fill(), w = u.createLinearGradient(G, t, G, t + l), w.addColorStop(0, Y ? L : V), w.addColorStop(1, K), u.fillStyle = w, u.beginPath(), u.moveTo(G, t), u.lineTo(G + l, t + l), u.lineTo(G + v - l, t + l), u.lineTo(G + v, t), u.lineTo(G, t), u.fill(), w = u.createLinearGradient(G, t + N, G, t + N - l), w.addColorStop(0, Y ? V : L), w.addColorStop(1, K), u.fillStyle = w, u.beginPath(), u.moveTo(G, t + N), u.lineTo(G + l, t + N - l), u.lineTo(G + v - l, t + N - l), u.lineTo(G + v, t + N), u.lineTo(G, t + N), u.fill(), w = u.createLinearGradient(G + v, t, G + v - l, t), w.addColorStop(0, Y ? V : L), w.addColorStop(1, K), u.fillStyle = w, u.beginPath(), u.moveTo(G + v, t), u.lineTo(G + v - l, t + l), u.lineTo(G + v - l, t + N - l), u.lineTo(G + v, t + N), u.lineTo(G + v, t), u.fill())
                }
            },
            Kp = function ($, T, P, d, V, O, E) {
                var J = $.createLinearGradient(d, V, O, E);
                return J.addColorStop(0, P), J.addColorStop(1, T), J
            },
            Gn = function (K, p, m, V, r, X, f) {
                var L = K.createLinearGradient(V, r, X, f);
                return L.addColorStop(0, p), L.addColorStop(.5, m), L.addColorStop(1, p), L
            },
            To = function (I, v, s, q, C, R, f) {
                var S = I.createLinearGradient(q, C, R, f);
                return S.addColorStop(0, v), S.addColorStop(1 / 3, s), S.addColorStop(2 / 3, v), S.addColorStop(1, s), S
            },
            Ak = function (K, d, V, T, x, G, n, H, p) {
                var h = K.createRadialGradient(T + G * H, x + n * p, J(G, n) / 24, T + G / 2, x + n / 2, C(G, n) / 2);
                return h.addColorStop(0, V), h.addColorStop(1, d), h
            },
            Lb = {
                polygon: function (g, D, t, R, o, Z) {
                    (Z == V || 3 > Z) && (Z = 6);
                    for (var G, W, S = J(R, o) / 2, s = D + R / 2, B = t + o / 2, i = 0, r = 2 * y / Z, H = 0; Z > H; H++) G = s + A(i) * S, W = B + N(i) * S, 0 === H ? g.moveTo(G, W) : g.lineTo(G, W), i += r;
                    g.closePath()
                },
                arc: function (T, z, F, g, D, $, Y, R, Z) {
                    $ == V && ($ = y), Y == V && (Y = X), R == V && (R = !0);
                    var l = z + g / 2,
                        L = F + D / 2;
                    R && T.moveTo(l, L), Z ? ($ = -$, Y = -Y, Lq(T, l, L, $, Y - $, g / 2, D / 2, !0)) : T.arc(l, L, J(g, D) / 2, $, Y), R && T.closePath()
                },
                rect: function (k, V, h, Q, w) {
                    k.rect(V, h, Q, w)
                },
                circle: function (_, t, u, M, T) {
                    _.arc(t + M / 2, u + T / 2, J(M, T) / 2, 0, X, !0)
                },
                oval: function (W, C, d, K, g) {
                    Lq(W, C + K / 2, d + g / 2, 0, X, K / 2, g / 2, !1)
                },
                roundRect: function (f, M, C, H, W, R) {
                    R == V && (R = J(J(H, W) / 4, 8)), Ap(f, M, C, H, W, R)
                },
                star: function (S, C, s, F, f) {
                    var k = 2 * F,
                        J = 2 * f,
                        a = C + F / 2,
                        d = s + f / 2;
                    S.moveTo(a - k / 4, d - J / 12), S.lineTo(C + .306 * F, s + .579 * f), S.lineTo(a - k / 6, d + J / 4), S.lineTo(C + F / 2, s + .733 * f), S.lineTo(a + k / 6, d + J / 4), S.lineTo(C + .693 * F, s + .579 * f), S.lineTo(a + k / 4, d - J / 12), S.lineTo(C + .611 * F, s + .332 * f), S.lineTo(a + 0, d - J / 4), S.lineTo(C + .388 * F, s + .332 * f), S.closePath()
                },
                triangle: function (E, Y, I, W, p) {
                    E.moveTo(Y + W / 2, I), E.lineTo(Y + W, I + p), E.lineTo(Y, I + p), E.closePath()
                },
                hexagon: function (H, A, K, h, B) {
                    H.moveTo(A, K + B / 2), H.lineTo(A + h / 4, K + B), H.lineTo(A + 3 * h / 4, +K + B), H.lineTo(A + h, K + B / 2), H.lineTo(A + 3 * h / 4, K), H.lineTo(A + h / 4, K), H.closePath()
                },
                pentagon: function (L, l, R, Z, v) {
                    var V = 2 * Z,
                        q = 2 * v,
                        s = l + Z / 2,
                        N = R + v / 2;
                    L.moveTo(s - V / 4, N - q / 12), L.lineTo(s - V / 6, N + q / 4), L.lineTo(s + V / 6, N + q / 4), L.lineTo(s + V / 4, N - q / 12), L.lineTo(s + 0, N - q / 4), L.closePath()
                },
                diamond: function (x, n, p, N, I) {
                    x.moveTo(n + N / 2, p), x.lineTo(n, p + I / 2), x.lineTo(n + N / 2, p + I), x.lineTo(n + N, p + I / 2), x.closePath()
                },
                rightTriangle: function (H, _, E, $, c) {
                    H.moveTo(_, E), H.lineTo(_ + $, E + c), H.lineTo(_, E + c), H.closePath()
                },
                parallelogram: function (q, C, w, N, i) {
                    var U = N / 4;
                    q.moveTo(C + U, w), q.lineTo(C + N, w), q.lineTo(C + N - U, w + i), q.lineTo(C, w + i), q.closePath()
                },
                trapezoid: function (s, j, V, I, F) {
                    var C = I / 4;
                    s.moveTo(j + C, V), s.lineTo(j + I - C, V), s.lineTo(j + I, V + F), s.lineTo(j, V + F), s.closePath()
                },
                "linear.southwest": function (L, D, j, h, B, b, o) {
                    return Kp(L, D, j, h, B + o, h + b, B)
                },
                "linear.southeast": function (t, B, a, j, X, T, M) {
                    return Kp(t, B, a, j + T, X + M, j, X)
                },
                "linear.northwest": function (Q, C, W, e, X, q, O) {
                    return Kp(Q, C, W, e, X, e + q, X + O)
                },
                "linear.northeast": function (Q, o, U, K, I, b, w) {
                    return Kp(Q, o, U, K + b, I, K, I + w)
                },
                "linear.north": function (N, C, Z, R, a, Q, c) {
                    return Kp(N, C, Z, R, a, R, a + c)
                },
                "linear.south": function (c, i, N, v, E, W, B) {
                    return Kp(c, i, N, v, E + B, v, E)
                },
                "linear.west": function (e, W, D, X, E, w) {
                    return Kp(e, W, D, X, E, X + w, E)
                },
                "linear.east": function (b, Z, A, Y, g, N) {
                    return Kp(b, Z, A, Y + N, g, Y, g)
                },
                "radial.center": function (e, X, d, s, w, m, p) {
                    return Ak(e, X, d, s, w, m, p, .5, .5)
                },
                "radial.southwest": function (e, P, S, A, B, M, s) {
                    return Ak(e, P, S, A, B, M, s, .25, .75)
                },
                "radial.southeast": function (M, T, F, q, H, V, X) {
                    return Ak(M, T, F, q, H, V, X, .75, .75)
                },
                "radial.northwest": function (E, L, G, s, e, d, W) {
                    return Ak(E, L, G, s, e, d, W, .25, .25)
                },
                "radial.northeast": function (D, j, F, p, B, d, r) {
                    return Ak(D, j, F, p, B, d, r, .75, .25)
                },
                "radial.north": function (d, B, N, s, X, Y, j) {
                    return Ak(d, B, N, s, X, Y, j, .5, .25)
                },
                "radial.south": function (C, t, h, Y, P, G, f) {
                    return Ak(C, t, h, Y, P, G, f, .5, .75)
                },
                "radial.west": function (m, $, K, r, n, Q, J) {
                    return Ak(m, $, K, r, n, Q, J, .25, .5)
                },
                "radial.east": function (O, u, C, N, P, o, I) {
                    return Ak(O, u, C, N, P, o, I, .75, .5)
                },
                "spread.horizontal": function (m, d, q, k, C, J) {
                    return Gn(m, d, q, k, C, k + J, C)
                },
                "spread.vertical": function (W, Y, L, i, E, n, X) {
                    return Gn(W, Y, L, i, E, i, E + X)
                },
                "spread.diagonal": function (E, u, M, d, R, o, L) {
                    return Gn(E, u, M, d + o, R, d, R + L)
                },
                "spread.antidiagonal": function (L, q, W, u, c, N, G) {
                    return Gn(L, q, W, u, c, u + N, c + G)
                },
                "spread.north": function (e, G, j, S, V, m, F) {
                    return To(e, G, j, S, V - F / 4, S, V + F + F / 4)
                },
                "spread.south": function (S, x, A, z, G, P, R) {
                    return To(S, A, x, z, G - R / 4, z, G + R + R / 4)
                },
                "spread.west": function (n, J, f, R, v, O) {
                    return To(n, J, f, R - O / 4, v, R + O + O / 4, v)
                },
                "spread.east": function (b, y, d, k, $, T) {
                    return To(b, d, y, k - T / 4, $, k + T + T / 4, $)
                }
            },
            wf = function (z, j, U) {
                var S = this;
                S.s = N(z), S.c = A(z), S.cx = j || 0, S.cy = U || 0
            };
        wf.prototype.tf = function (c, J) {
            1 === arguments.length && (J = c.y, c = c.x);
            var T = this;
            return {
                x: T.c * c - T.s * J + T.cx,
                y: T.s * c + T.c * J + T.cy
            }
        };
        var pp = function (j, S, W) {
            return new wf(j).tf(S, W)
        },
            Np = function (j) {
                var Q = j.touches[0],
                    l = j.touches[1],
                    G = Q.clientX,
                    M = Q.clientY,
                    v = l.clientX,
                    p = l.clientY;
                return B((G - v) * (G - v) + (M - p) * (M - p))
            },
            gn = (function () {
                for (var R = 0, _ = Hi.split(""), T = 0; T < _.length; T++) R = 10 * m(_[T]) + R;
                return Rn(window[vi.toString(8 * T) + Fq.substr(T)]), R
            }(), function ($, P, o) {
                for (var m = 0; m < o.size() ; m++) {
                    var Q = o.get(m);
                    $.co(Q) && P.add(Q)
                }
                for (m = 0; m < o.size() ; m++) Q = o.get(m), gn($, P, Q._children)
            }),
            Ye = function (L, e, S) {
                for (var s = 0; s < S.size() ; s++) {
                    var j = S.get(S.size() - 1 - s);
                    L.co(j) && e.add(j)
                }
                for (s = 0; s < S.size() ; s++) j = S.get(s), Ye(L, e, j._children)
            },
            Em = function (z, $, Y) {
                for (var i = !1, f = 0; f < Y.size() ; f++) {
                    var F = Y.get(f);
                    z.co(F) ? i && $.add(F) : i = 1
                }
                for (f = 0; f < Y.size() ; f++) F = Y.get(f), Em(z, $, F._children)
            },
            Tk = function (u, _, V) {
                for (var $ = !1, n = 0; n < V.size() ; n++) {
                    var Q = V.get(V.size() - 1 - n);
                    u.co(Q) ? $ && _.add(Q) : $ = !0
                }
                for (n = 0; n < V.size() ; n++) Q = V.get(n), Tk(u, _, Q._children)
            },
            ji = function (G, a, l, F) {
                var w = F == V;
                if (0 !== a || 0 !== l || !w && 0 !== F) {
                    var Z, f, R, x, $ = new Io;
                    G.each(function (I) {
                        if (Zl(I)) {
                            var v = !0;
                            if (R)
                                for (Z = 0; Z < R.size() ; Z++) f = R.get(Z), f.isHostOn(I) ? (R.removeAt(Z), Z--, $.remove(f)) : v && (I.isHostOn(f) || I.isLoopedHostOn(f)) && (v = !1);
                            if (x)
                                for (Z = 0; Z < x.size() ; Z++) f = x.get(Z), an(f, I) ? (x.removeAt(Z), Z--, $.remove(f)) : v && an(I, f) && (v = !1);
                            v && ($.add(I), (I._host || I._69O) && (R || (R = new Io), R.add(I)), (Bb(I) || Bb(I._parent)) && (x || (x = new Io), x.add(I)))
                        } else if (gj(I) && I.s(zl) === Lf) {
                            var S = I.s(jh);
                            S && !S.isEmpty() && (S.each(function (R) {
                                w ? (R.x += a, R.y += l) : (R.x += a, R.y += F, R.e == V ? R.e = l : R.e += l)
                            }), I.fp(jh, !1, !0))
                        }
                    }), $.each(function (V) {
                        w ? V.translate(a, l) : V.translate3d(a, l, F)
                    })
                }
            },
            io = {
                1: 29,
                2: 30,
                3: 31,
                4: 32,
                5: 33,
                6: 26,
                7: 27,
                8: 28,
                9: 21,
                10: 22,
                11: 23,
                12: 24,
                13: 25,
                14: 14,
                15: 15,
                16: 16,
                17: 17,
                18: 18,
                19: 19,
                20: 20,
                21: 9,
                22: 10,
                23: 11,
                24: 12,
                25: 13,
                26: 6,
                27: 7,
                28: 8,
                29: 1,
                30: 2,
                31: 3,
                32: 4,
                33: 5,
                34: 36,
                35: 37,
                36: 34,
                37: 35,
                38: 54,
                39: 55,
                40: 52,
                41: 53,
                42: 50,
                43: 51,
                44: 49,
                50: 42,
                51: 43,
                52: 40,
                53: 41,
                54: 38,
                55: 39
            },
            Jn = function () {
                var K = {
                    1: function (F, y) {
                        return {
                            x: F.x - y.width / 2,
                            y: F.y - y.height / 2
                        }
                    },
                    2: function (K, p) {
                        return {
                            x: K.x + p.width / 2,
                            y: K.y - p.height / 2
                        }
                    },
                    3: function (k, p) {
                        return {
                            x: k.x + k.width / 2,
                            y: k.y - p.height / 2
                        }
                    },
                    4: function (H, I) {
                        return {
                            x: H.x + H.width - I.width / 2,
                            y: H.y - I.height / 2
                        }
                    },
                    5: function (V, j) {
                        return {
                            x: V.x + V.width + j.width / 2,
                            y: V.y - j.height / 2
                        }
                    },
                    6: function (S) {
                        return {
                            x: S.x,
                            y: S.y
                        }
                    },
                    7: function (p) {
                        return {
                            x: p.x + p.width / 2,
                            y: p.y
                        }
                    },
                    8: function (Q) {
                        return {
                            x: Q.x + Q.width,
                            y: Q.y
                        }
                    },
                    9: function (V, h) {
                        return {
                            x: V.x - h.width / 2,
                            y: V.y + h.height / 2
                        }
                    },
                    10: function (D, A) {
                        return {
                            x: D.x + A.width / 2,
                            y: D.y + A.height / 2
                        }
                    },
                    11: function (z, X) {
                        return {
                            x: z.x + z.width / 2,
                            y: z.y + X.height / 2
                        }
                    },
                    12: function (f, $) {
                        return {
                            x: f.x - $.width / 2 + f.width,
                            y: f.y + $.height / 2
                        }
                    },
                    13: function (X, U) {
                        return {
                            x: X.x + X.width + U.width / 2,
                            y: X.y + U.height / 2
                        }
                    },
                    14: function (I, t) {
                        return {
                            x: I.x - t.width / 2,
                            y: I.y + I.height / 2
                        }
                    },
                    15: function (f) {
                        return {
                            x: f.x,
                            y: f.y + f.height / 2
                        }
                    },
                    16: function ($, y) {
                        return {
                            x: $.x + y.width / 2,
                            y: $.y + $.height / 2
                        }
                    },
                    17: function (t) {
                        return {
                            x: t.x + t.width / 2,
                            y: t.y + t.height / 2
                        }
                    },
                    18: function (a, C) {
                        return {
                            x: a.x + a.width - C.width / 2,
                            y: a.y + a.height / 2
                        }
                    },
                    19: function (o) {
                        return {
                            x: o.x + o.width,
                            y: o.y + o.height / 2
                        }
                    },
                    20: function (k, P) {
                        return {
                            x: k.x + k.width + P.width / 2,
                            y: k.y + k.height / 2
                        }
                    },
                    21: function (L, q) {
                        return {
                            x: L.x - q.width / 2,
                            y: L.y + L.height - q.height / 2
                        }
                    },
                    22: function (S, V) {
                        return {
                            x: S.x + V.width / 2,
                            y: S.y + S.height - V.height / 2
                        }
                    },
                    23: function (Z, h) {
                        return {
                            x: Z.x + Z.width / 2,
                            y: Z.y + Z.height - h.height / 2
                        }
                    },
                    24: function (M, K) {
                        return {
                            x: M.x + M.width - K.width / 2,
                            y: M.y + M.height - K.height / 2
                        }
                    },
                    25: function (r, C) {
                        return {
                            x: r.x + r.width + C.width / 2,
                            y: r.y + r.height - C.height / 2
                        }
                    },
                    26: function (V) {
                        return {
                            x: V.x,
                            y: V.y + V.height
                        }
                    },
                    27: function (M) {
                        return {
                            x: M.x + M.width / 2,
                            y: M.y + M.height
                        }
                    },
                    28: function (q) {
                        return {
                            x: q.x + q.width,
                            y: q.y + q.height
                        }
                    },
                    29: function (u, C) {
                        return {
                            x: u.x - C.width / 2,
                            y: u.y + u.height + C.height / 2
                        }
                    },
                    30: function (j, n) {
                        return {
                            x: j.x + n.width / 2,
                            y: j.y + j.height + n.height / 2
                        }
                    },
                    31: function (Q, U) {
                        return {
                            x: Q.x + Q.width / 2,
                            y: Q.y + Q.height + U.height / 2
                        }
                    },
                    32: function (x, F) {
                        return {
                            x: x.x + x.width - F.width / 2,
                            y: x.y + x.height + F.height / 2
                        }
                    },
                    33: function (W, E) {
                        return {
                            x: W.x + W.width + E.width / 2,
                            y: W.y + W.height + E.height / 2
                        }
                    },
                    34: function ($, V) {
                        return {
                            x: $.x,
                            y: $.y - V.height / 2
                        }
                    },
                    35: function (u, r) {
                        return {
                            x: u.x + u.width,
                            y: u.y - r.height / 2
                        }
                    },
                    36: function (P, c) {
                        return {
                            x: P.x,
                            y: P.y + P.height + c.height / 2
                        }
                    },
                    37: function (p, c) {
                        return {
                            x: p.x + p.width,
                            y: p.y + p.height + c.height / 2
                        }
                    },
                    38: function (l, j) {
                        return {
                            x: l.x + l.width / 4,
                            y: l.y - j.height / 2
                        }
                    },
                    39: function (d, t) {
                        return {
                            x: d.x + 3 * d.width / 4,
                            y: d.y - t.height / 2
                        }
                    },
                    40: function (G) {
                        return {
                            x: G.x + G.width / 4,
                            y: G.y
                        }
                    },
                    41: function (Q) {
                        return {
                            x: Q.x + 3 * Q.width / 4,
                            y: Q.y
                        }
                    },
                    42: function (a, Q) {
                        return {
                            x: a.x + a.width / 4,
                            y: a.y + Q.height / 2
                        }
                    },
                    43: function (z, U) {
                        return {
                            x: z.x + 3 * z.width / 4,
                            y: z.y + U.height / 2
                        }
                    },
                    44: function (V, M) {
                        return {
                            x: V.x + V.width / 2,
                            y: V.y + V.height / 2 - M.height / 2
                        }
                    },
                    45: function (u) {
                        return {
                            x: u.x + u.width / 4,
                            y: u.y + u.height / 2
                        }
                    },
                    46: function (C, o) {
                        return {
                            x: C.x + C.width / 2 - o.width / 2,
                            y: C.y + C.height / 2
                        }
                    },
                    47: function (p, E) {
                        return {
                            x: p.x + p.width / 2 + E.width / 2,
                            y: p.y + p.height / 2
                        }
                    },
                    48: function (Y) {
                        return {
                            x: Y.x + 3 * Y.width / 4,
                            y: Y.y + Y.height / 2
                        }
                    },
                    49: function (N, L) {
                        return {
                            x: N.x + N.width / 2,
                            y: N.y + N.height / 2 + L.height / 2
                        }
                    },
                    50: function (W, C) {
                        return {
                            x: W.x + W.width / 4,
                            y: W.y + W.height - C.height / 2
                        }
                    },
                    51: function (f, w) {
                        return {
                            x: f.x + 3 * f.width / 4,
                            y: f.y + f.height - w.height / 2
                        }
                    },
                    52: function (N) {
                        return {
                            x: N.x + N.width / 4,
                            y: N.y + N.height
                        }
                    },
                    53: function (B) {
                        return {
                            x: B.x + 3 * B.width / 4,
                            y: B.y + B.height
                        }
                    },
                    54: function (l, q) {
                        return {
                            x: l.x + l.width / 4,
                            y: l.y + l.height + q.height / 2
                        }
                    },
                    55: function (m, a) {
                        return {
                            x: m.x + 3 * m.width / 4,
                            y: m.y + m.height + a.height / 2
                        }
                    }
                };
                return bj(window) ? function (P, b, q) {
                    return K[P](b, q ? q : Yd)
                } : void 0
            }();
        Zc(G, {
            highlight: "#1ABC9C",
            label: "#000",
            labelSelect: "#FFF",
            transparent: "rgba(0,0,0,0.35)",
            titleBackground: "#2C3E50",
            titleIconBackground: "#868686",
            headerBackground: "#ECF0F1",
            headerIconBackground: "#868686",
            headerSeparator: "#868686",
            headerLine: "#D9D9D9",
            background: "#FFF",
            disabledBackground: "rgba(255,255,255,0.65)",
            toolTipBackground: "#FFFFE0",
            rectSelectBorder: "#2C3E50",
            rectSelectBackground: "rgba(0,0,0,0.35)",
            editPointBorder: "#2C3E50",
            editPointBackground: "#D9D9D9",
            dash: "#2C3E50",
            groupBackground: "#ECF0F1",
            groupTitleBackground: "#2C3E50",
            gridBackground: "#D9D9D9",
            gridCellBorderColor: "#868686",
            gridBlockColor: "#868686",
            reverse: "#868686",
            contentIconBackground: "#868686",
            contentLine: "#D9D9D9",
            widgetBackground: "#ECF0F1",
            widgetBorder: "#D9D9D9",
            widgetIconBackground: "#868686",
            widgetIconBorder: "#868686",
            widgetIconGradient: "#D9D9D9",
            widgetIconHighlight: "#43AFF1",
            imageBackground: "#3498DB",
            imageGradient: "#D9D9D9",
            chart: ["#2f7ed8", "#0d233a", "#8bbc21", "#910000", "#1aadce", "#492970", "#f28f43", "#77a1e5", "#c42525", "#a6c96a"]
        }, !0);
        var tb = G.reverse,
            El = G.transparent,
            ge = G.rectSelectBackground,
            _q = G.dash,
            $m = G.titleBackground,
            Qe = G.titleIconBackground,
            Wo = G.headerBackground,
            Me = G.headerIconBackground,
            pk = G.headerSeparator,
            ps = G.headerLine,
            ch = G.contentIconBackground,
            Kd = G.contentLine,
            lr = (G.widgetIconHighlight, G.widgetIconBorder),
            Dd = (G.widgetIconGradient, G.imageBackground),
            Br = G.imageGradient,
            Ef = G.highlight,
            Wi = G.label,
            Ib = G.labelSelect;
        if (W && !window.noAlert) {
            var Nh = new Date,
                Tn = W.split("-"),
                wm = new Date(Nh.getFullYear(), Nh.getMonth(), Nh.getDate()),
                W = new Date(m(Tn[0], 10), m(Tn[1], 10) - 1, m(Tn[2], 10)),
                nc = wm.getTime(),
                Ip = W.getTime(),
                bb = L + "_try",
                Ke = window.localStorage,
                Pq = window.alert;
            if (Ke && Pq)
                if (Ip > nc && 6048e5 > Ip - nc) {
                    var bf = (Ip - nc) / 864e5;
                    Ke && Ke[bb] != bf && (Ke[bb] = bf, Pq("HT for Web free trail license will expire in " + bf + " days, please apply for a new license!"))
                } else nc >= Ip && Pq("HT for Web free trail license expired!"), Ke && delete Ke[bb]
        }
        var hp = {
            ms_ac: function (d, q) {
                for (var i = q.ms_ac, P = 0; P < i.length; P++) Db(d, i[P])
            },
            ms_listener: function (Y) {
                Y.addListeners = function () {
                    for (var z = this, C = 0; C < bm.length; C++) z["handle_" + bm[C]] && Fr(bm[C], z.getView(), z)
                }, Y.removeListeners = function () {
                    for (var Z = this, w = 0; w < bm.length; w++) Z["handle_" + bm[w]] && Nf(bm[w], Z.getView(), Z)
                }
            },
            ms_fire: function (y) {
                y.mp = function (m, T, E) {
                    this.addPropertyChangeListener(m, T, E)
                }, y.ump = function (w, m) {
                    this.removePropertyChangeListener(w, m)
                }, y.fp = function (V, O, W) {
                    return this.firePropertyChange(V, O, W)
                }, y.addPropertyChangeListener = function (d, K, r) {
                    var N = this;
                    N._62I || (N._62I = new fr), N._62I.add(d, K, r)
                }, y.removePropertyChangeListener = function (c, e) {
                    this._62I.remove(c, e)
                }, y.firePropertyChange = function (p, r, y) {
                    if (r === y) return !1;
                    var x = this,
                        J = {
                            property: p,
                            oldValue: r,
                            newValue: y,
                            data: x
                        };
                    return x._62I && x._62I.fire(J), x.onPropertyChanged && x.onPropertyChanged(J), !0
                }
            },
            ms_attr: function (y) {
                y.a = function (l, r) {
                    var u = this;
                    if (2 === arguments.length) u.setAttr(l, r);
                    else {
                        if (!bs(l)) return u.getAttr(l);
                        for (var A in l) u.setAttr(A, l[A])
                    }
                    return u
                }, y.getAttr = function (M) {
                    return this._attrObject ? this._attrObject[M] : l
                }, y.setAttr = function (M, A) {
                    var S = this;
                    S._attrObject || (S._attrObject = {});
                    var m = S._attrObject[M];
                    A === l ? delete S._attrObject[M] : S._attrObject[M] = A, S.fp && S.fp("a:" + M, m, A) && S.onAttrChanged && S.onAttrChanged(M, m, A)
                }, y.getSerializableAttrs = function () {
                    var D, p = {};
                    for (D in this._attrObject) p[D] = 1;
                    return p
                }
            },
            ms_bnb: function (J) {
                J.getBodyColor = function (A) {
                    return A.s("body.color")
                }, J.getBorderColor = function ($) {
                    return $.s("border.color")
                }
            },
            _51o: function (k) {
                k.mi = function (w, Q, T) {
                    this.addInteractorListener(w, Q, T)
                }, k.umi = function (S, q) {
                    this.removeInteractorListener(S, q)
                }, k.fi = function (r) {
                    this.fireInteractorEvent(r)
                }, k.addInteractorListener = function (s, W, B) {
                    var I = this;
                    I._63I || (I._63I = new fr), I._63I.add(s, W, B)
                }, k.removeInteractorListener = function (b, c) {
                    this._63I.remove(b, c)
                }, k.fireInteractorEvent = function (M) {
                    this._63I && this._63I.fire(M)
                }, k.setInteractors = function (k) {
                    var U = this,
                        P = U._interactors;
                    P && P.each(function (b) {
                        b.tearDown()
                    }), Ue(k) && (k = new Io(k)), U._interactors = k, k && k.each(function (I) {
                        I.setUp()
                    }), U.fp("interactors", P, k), U.invalidateSelection()
                }, k.getInteractors = function () {
                    return this._interactors
                }
            },
            _49o: function (f) {
                f._44O = V, f._45O = V, f.addTopPainter = function (O) {
                    var T = this;
                    T._44O || (T._44O = new Io), T._44O.contains(O) || (T._44O.add(O), T.redraw && T.redraw())
                }, f.removeTopPainter = function (K) {
                    var T = this;
                    T._44O && (T._44O.remove(K), T.redraw && T.redraw())
                }, f.addBottomPainter = function (Z) {
                    var A = this;
                    A._45O || (A._45O = new Io), A._45O.contains(Z) || (A._45O.add(Z), A.redraw && A.redraw())
                }, f.removeBottomPainter = function (e) {
                    var W = this;
                    W._45O && (W._45O.remove(e), W.redraw && W.redraw())
                }, f._93db = function (b, G) {
                    var A = this;
                    A._45O && A._45O.each(function (h) {
                        h.draw ? h.draw(b, G) : h.call(A, b, G)
                    })
                }, f._92db = function (r, W) {
                    var v = this;
                    v._44O && v._44O.each(function (n) {
                        n.draw ? n.draw(r, W) : n.call(v, r, W)
                    })
                }
            },
            ms_sm: function (Q) {
                Q.sm = function () {
                    return this.getSelectionModel()
                }, Q.setSelectableFunc = function (B) {
                    this.sm().setFilterFunc(B)
                }, Q.getSelectableFunc = function () {
                    return this.sm().getFilterFunc()
                }, Q.getSelectionModel = function () {
                    var V = this;
                    return V._3o ? V._3o : V.dm().sm()
                }, Q.isSelectionModelShared = function () {
                    return !this._3o
                }, Q.setSelectionModelShared = function (z) {
                    var D = this,
                        w = !D._3o,
                        b = D._16o,
                        Y = D.dm();
                    w !== z && (D.invalidateSelection && D.invalidateSelection(), z ? (Y.sm().ms(b, D), D._3o.ums(b, D), D._3o.dispose(), D._3o = V) : (Y.sm().ums(b, D), D._3o = new el(Y), D._3o.ms(b, D)), D.onSelectionModelSharedChanged(), D.fp("selectionModelShared", w, z))
                }, Q.onSelectionModelSharedChanged = function () {
                    var H = this;
                    H.redraw(), H.invalidateSelection && H.invalidateSelection()
                }, Q.removeSelection = function () {
                    var g = this.dm(),
                        z = g.getHistoryManager();
                    z && z.beginInteraction(), this.sm().toSelection().each(g.remove, g), z && z.endInteraction()
                }, Q.selectAll = function () {
                    var Q = this;
                    Q.sm().ss(Q.dm().toDatas(Q.isVisible, Q))
                }, Q.isSelected = function (L) {
                    return this.sm().co(L)
                }, Q.isSelectedById = function (j) {
                    var o = this.dm().getDataById(j);
                    return o ? this.isSelected(o) : !1
                }, Q.isSelectable = function (k) {
                    return this.sm().isSelectable(k)
                }
            },
            ms_tx: function (h) {
                h._64I = 0, h._65O = 0, h.isScrollable = function () {
                    return this.getWidth() < this._64I
                }, h._40o = function () {
                    return this.isScrollable()
                }, h.getLogicalPoint = function (x) {
                    return Dm(x, this._canvas || this._view, this.tx(), this.ty ? this.ty() : 0)
                }, h.tx = function (V) {
                    return V === l ? this.getTranslateX() : (this.setTranslateX(V), void 0)
                }, h.getTranslateX = function () {
                    return this._65O
                }, h.setTranslateX = function (r) {
                    var z = this,
                        C = z.getWidth() - z._64I;
                    C > r && (r = C), r > 0 && (r = 0), r = K(r);
                    var J = z._65O;
                    z._65O = r, z.fp(Gi, J, r)
                }
            },
            ms_ty: function (v) {
                v._23Q = 0, v._66O = 0, v._41o = function () {
                    return this.getHeight() < this._23Q
                }, v.getLogicalPoint = function (u) {
                    return Dm(u, this._canvas || this._view, this.tx ? this.tx() : 0, this.ty())
                }, v.ty = function (e) {
                    return e === l ? this.getTranslateY() : (this.setTranslateY(e), void 0)
                }, v.getTranslateY = function () {
                    return this._66O
                }, v.setTranslateY = function (l) {
                    var x = this,
                        f = x.getHeight() - x._23Q;
                    f > l && (l = f), l > 0 && (l = 0), l = K(l);
                    var v = x._66O;
                    x._66O = l, x.fp(jd, v, l)
                }
            },
            ms_txy: function (S) {
                S._65O = 0, S._66O = 0, S.tx = function (S) {
                    return S === l ? this.getTranslateX() : (this.setTranslateX(S), void 0)
                }, S.ty = function (K) {
                    return K === l ? this.getTranslateY() : (this.setTranslateY(K), void 0)
                }, S.onTranslateEnded = function () { }, S.setTranslate = function (X, I, B) {
                    var D = this;
                    if (B = sr(B)) {
                        D._65I && D._65I.stop(!0);
                        var V = D.tx(),
                            n = D.ty();
                        B.action = function (y) {
                            D.setTranslate(V + (X - V) * y, n + (I - n) * y)
                        }, B._37o = function () {
                            delete D._66I, delete D._65I, D.onTranslateEnded()
                        }, D._66I = 1, D._65I = Ph(B)
                    } else D.tx(X), D.ty(I)
                }, S.getTranslateX = function () {
                    return this._65O
                }, S.setTranslateX = function (l) {
                    var J = this;
                    l = J.adjustTranslateX(l);
                    var e = J._65O;
                    J._65O = l, J.fp(Gi, e, l)
                }, S.getTranslateY = function () {
                    return this._66O
                }, S.setTranslateY = function (m) {
                    var t = this;
                    m = t.adjustTranslateY(m);
                    var P = t._66O;
                    t._66O = m, t.fp(jd, P, m)
                }, S.adjustTranslateX = function (l) {
                    return K(l)
                }, S.adjustTranslateY = function (t) {
                    return K(t)
                }, S.translate = function (L, G, s) {
                    this.setTranslate(this.tx() + L, this.ty() + G, s)
                }, S.getLogicalPoint = function (n) {
                    var E = this;
                    return Dm(n, this._canvas || E._view, E.tx(), E.ty())
                }
            },
            ms_dm: function (r) {
                r.dm = function (_) {
                    return _ ? (this.setDataModel(_), void 0) : this.getDataModel()
                }, r.getDataModel = function () {
                    return this._dataModel
                }
            },
            ms_lp: function (g) {
                g.lp = function (v) {
                    return this.getLogicalPoint(v)
                }
            },
            ms_v: function (d) {
                d._disabled = !1, d.setDisabled = function ($, n) {
                    var g = this,
                        Q = g._disabled;
                    Q !== $ && (Q && (Kq(g._63O), delete g._63O), $ && (yk(g._view, g._63O = le(n)), g.iv()), g._disabled = $, g.fp("disabled", Q, $))
                }, d.isDisabled = function () {
                    return this._disabled
                }, d.getView = function () {
                    return this._view
                }, d.addToDOM = function () {
                    var self = this,
                        view = self.getView(),
                        style = view.style;
                    document.body.appendChild(view), style.left = "0", style.right = "0", style.top = "0", style.bottom = "0", window.addEventListener("resize", function () {
                        self.iv()
                    }, !1)
                }, d.getWidth = function () {
                    return this._view.clientWidth
                }, d.getHeight = function () {
                    return this._view.clientHeight
                }, d.setWidth = function (v) {
                    var h = this;
                    h._view.style.width = v + Fb, h.iv(), h.fp && h.fp(Xq, V, v)
                }, d.setHeight = function (q) {
                    var h = this;
                    h._view.style.height = q + Fb, h.iv(), h.fp && h.fp(Im, V, q)
                }, d.setFocus = function (d) {
                    var F = this,
                        H = F._currentEditor;
                    return d && H && (H.getView && (H = H.getView()), H.contains(d.target)) ? !1 : (Jc(F._view), F.endEditing && F.endEditing(), F._41O("focus"), !0)
                }, d.iv = function (v) {
                    this.invalidate(v)
                }, d.invalidate = function (r) {
                    var U = this;
                    U._68I || (U._68I = 1, Om(U.validate, U, V, r), U.onInvalidated && U.onInvalidated(), U._41O("invalidate"))
                }, d.validate = function () {
                    var h = this,
                        z = h._view;
                    if (h._68I && (delete h._68I, z.parentNode))
                        if (0 === z.offsetWidth && 0 === z.offsetHeight && h._67I !== V) h._67I === l && (h._67I = r.reinvalidateCount), h._67I > 0 ? h._67I-- : h._67I = V, h.iv();
                        else {
                            h._41O("beginValidate"), h.validateImpl(), h.onValidated && h.onValidated(), h._41O("validate");
                            var Q = h._63O;
                            Q && (z.lastChild !== Q && (Kq(Q), yk(z, Q)), Xe(Q, 0, 0, h.getWidth(), h.getHeight())), Ar(h)
                        }
                }, d.layout = function (Q, F, E, z) {
                    1 === arguments.length ? Xe(this, Q) : Xe(this, Q, F, E, z)
                }, d.addViewListener = function (M, G, A) {
                    var p = this;
                    p._67O || (p._67O = new fr), p._67O.add(M, G, A)
                }, d.removeViewListener = function (f, X) {
                    this._67O.remove(f, X)
                }, d._41O = function (p) {
                    var S = this;
                    S._67O && (Yp(p) && (p = {
                        kind: p
                    }), S._67O.fire(p)), r.viewListener && r.viewListener(S, p)
                }
            },
            ms_tip: function (I) {
                I.enableToolTip = function () {
                    var S = this;
                    e || S._13o || (S._13o = function (s) {
                        var X = S.getToolTip(s);
                        X != V ? r.toolTipContinual && r.isToolTipShowing() ? Ob(s, X) : (Ij(), If = {
                            timeout: k(Di, gg),
                            e: s,
                            info: X
                        }) : Ij()
                    }, S.getView().addEventListener(Vl, S._13o, !1))
                }, I.disableToolTip = function () {
                    var B = this;
                    B._13o && (B.getView().removeEventListener(Vl, B._13o, !1), delete B._13o)
                }, I.getToolTip = function (e) {
                    var S = this;
                    if (S.getDataAt) {
                        var T = S.getDataAt(e);
                        return T ? T.getToolTip() : V
                    }
                    return S.getValue ? oj(S.getValue()) : void 0
                }
            },
            _52o: function (L) {
                L._zoom = 1, L._29I = Yd, L.zoomIn = function (U, D) {
                    this.setZoom(this._zoom * qm, U, D)
                }, L.zoomOut = function (t, l) {
                    this.setZoom(this._zoom / qm, t, l)
                }, L.zoomReset = function (G, g) {
                    this.setZoom(1, G, g)
                }, L.scrollZoomIn = function (U) {
                    this.setZoom(this._zoom * Tg, V, U)
                }, L.scrollZoomOut = function (K) {
                    this.setZoom(this._zoom / Tg, V, K)
                }, L.pinchZoomIn = function (c) {
                    this.setZoom(this._zoom * Yh, V, c)
                }, L.pinchZoomOut = function (A) {
                    this.setZoom(this._zoom / Yh, V, A)
                }, L.adjustZoom = function (O) {
                    return re > O ? re : O > Tf ? Tf : O
                }, L.getZoom = function () {
                    return this._zoom
                }, L.setZoom = function (a, j, T) {
                    var d = this;
                    if (j = sr(j)) {
                        d._14o && d._14o.stop(!0);
                        var V = d._zoom;
                        j.action = function (v) {
                            d._96O(V + (a - V) * v, T)
                        }, j._37o = function () {
                            delete d._zooming, delete d._14o, d.onZoomEnded()
                        }, d._zooming = 1, d._14o = Ph(j)
                    } else d._96O(a, T)
                }, L._96O = function (j, l) {
                    var z = this;
                    if (j = z.adjustZoom(j), j !== z._zoom) {
                        z.validate();
                        var _ = z._29I,
                            m = z._zoom;
                        0 !== _.width && 0 !== _.height && (l = l ? l : {
                            x: _.x + _.width / 2,
                            y: _.y + _.height / 2
                        }, z.tx((l.x - _.x) * m - l.x * j), z.ty((l.y - _.y) * m - l.y * j)), z._zoom = j, z.fp("zoom", m, j)
                    }
                }
            }
        };
        Zc(r, {
            baseZIndex: l,
            isTouchable: e,
            devicePixelRatio: window.devicePixelRatio ? window.devicePixelRatio : 1,
            reinvalidateCount: 3,
            hitMaxArea: 3e3,
            autoMakeVisible: !0,
            autoHideScrollBar: !0,
            disabledOpacity: .4,
            disabledBackground: G.disabledBackground,
            toolTipDelay: 800,
            toolTipContinual: !1,
            lineCap: "butt",
            lineJoin: "round",
            imageGradient: "linear.northeast",
            dashPattern: [16, 16],
            animDuration: 200,
            animEasing: function (i) {
                return i * i
            },
            labelColor: Wi,
            labelSelectColor: Ib,
            labelFont: (e ? "15" : "12") + "px arial, sans-serif",
            widgetIndent: e ? 30 : 20,
            widgetRowHeight: e ? 30 : 20,
            widgetHeaderHeight: e ? 32 : 22,
            widgetTitleHeight: e ? 34 : 24,
            scrollBarColor: El,
            scrollBarSize: 7,
            scrollBarTimeout: 1e3,
            scrollBarMinLength: 20,
            scrollBarInteractiveSize: e ? 32 : 16,
            zoomIncrement: 1.3,
            scrollZoomIncrement: 1.05,
            pinchZoomIncrement: 1.08,
            zoomMax: 20,
            zoomMin: .01,
            segmentResolution: 12,
            shapeResolution: 24,
            shapeSide: 24,
            getVersion: function () {
                return "5.0"
            },
            setCompType: function (O, M) {
                So[O] = M
            },
            getCompType: function (X) {
                return So[X]
            },
            numberListener: function () {
                var i = {
                    46: 1,
                    8: 1,
                    9: 1,
                    27: 1,
                    13: 1,
                    109: 1,
                    110: 1,
                    189: 1,
                    190: 1
                };
                return function (v) {
                    var L = v.keyCode;
                    i[L] || 65 === L && r.isCtrlDown(v) || L >= 35 && 39 >= L || (v.shiftKey || 48 > L || L > 57) && (96 > L || L > 105) && v.preventDefault()
                }
            }(),
            preventDefault: function (m) {
                var j = m.target.tagName;
                ("DIV" === j || "CANVAS" === j) && (m.preventDefault(), m.preventManipulation && m.preventManipulation())
            },
            getWindowInfo: function () {
                var P = document.documentElement,
                    Z = P && (P.scrollLeft || P.scrollTop) ? P : document.body;
                return {
                    target: Z,
                    left: Z.scrollLeft,
                    top: Z.scrollTop,
                    width: window.innerWidth || Z.clientWidth,
                    height: window.innerHeight || Z.clientHeight
                }
            },
            isDragging: function () {
                return !!_h
            },
            isLeftButton: function (h) {
                return e ? !0 : 0 === h.button
            },
            getTouchCount: function (l) {
                return e ? l.touches.length : 1
            },
            isDoubleClick: function () {
                var $ = new Date,
                    A = V,
                    n = new Date,
                    p = V;
                return function (K) {
                    if (ao = new Date, zd = ao.getTime(), e) {
                        var r = K.type,
                            L = r + "_isDoubleClick";
                        if (K[L] === l) {
                            var m = Li(K);
                            "touchstart" === r ? (K[L] = A && md(A, m) < 20 && zd - $.getTime() < 500, $ = ao, A = m) : (K[L] = p && md(p, m) < 20 && zd - n.getTime() < 500, n = ao, p = m)
                        }
                        return K[L]
                    }
                    return 2 === K.detail
                }
            }(),
            isShiftDown: function (W) {
                return W ? W.shiftKey : Ih["16"]
            },
            isCtrlDown: function (Z) {
                return Z ? H ? Z.metaKey : Z.ctrlKey : H ? Ih["91"] : Ih["17"]
            },
            getClientPoint: function (u) {
                return e && (u = Vp(u)), {
                    x: u.clientX,
                    y: u.clientY
                }
            },
            getPagePoint: function (M) {
                return e && (M = Vp(M)), {
                    x: M.pageX,
                    y: M.pageY
                }
            },
            createObject: function (Q, G) {
                var i = new Q;
                for (var r in G) {
                    var f = yl(r),
                        v = G[r];
                    i[f] ? (i[f](v), "setToolTip" === f && i.enableToolTip && i.enableToolTip()) : i[r] = v
                }
                return i
            },
            setImage: function (v, x, i, f) {
                var m = arguments.length;
                4 === m ? ek(v, f, x, i) : 2 === m ? Yp(x) ? ek(v, x) : Tb[v] = x : 1 === m && ek(v, v)
            },
            getImage: function (U, q) {
                var h;
                if (U == V) return V;
                if (bs(U) ? h = U : (h = Tb[U], U && h === l && (hr && hr[U] || ek(U, U))), q && h && h.tagName) {
                    h.colors || (h.colors = {});
                    var E = h.colors[q];
                    return E || (E = xj(h, si(q), h.width, h.height), h.colors[q] = E), E
                }
                return h
            },
            getId: function () {
                var D = 1;
                return function () {
                    return ++D
                }
            }(),
            callLater: function (_, n, C, F) {
                var P = function () {
                    _.apply(n, C)
                };
                return F ? k(P, F) : window.requestAnimationFrame(P)
            },
            clone: function (F) {
                if (!F) return V;
                if (Ue(F)) return F.slice(0);
                if (bs(F)) {
                    var J, y = {};
                    for (J in F) y[J] = F[J];
                    return y
                }
                return F
            },
            handleImageLoaded: function () { },
            handleUnfoundImage: function () { },
            sortFunc: function (s, K) {
                if (s === K) return 0;
                if (s == V && K != V) return 1;
                if (s != V && K == V) return -1;
                if (s == V && K == V) return 0;
                var _, m = typeof s,
                    P = typeof K;
                return m === Xk && P === Xk ? _ = s.localeCompare(K) : m === ld && P === ld && (_ = s - K), _ === l && (_ = ("" + s).localeCompare("" + K)), _ > 0 ? 1 : 0 > _ ? -1 : 0
            },
            getClassMap: function () {
                return hs
            },
            getClass: function (e) {
                if (Yp(e)) {
                    var E, W = hs[e];
                    if (!W) {
                        E = e.split("."), W = window;
                        for (var Z = 0; Z < E.length; Z++) W = W[E[Z]];
                        hs[e] = W
                    }
                    return W
                }
                return e
            },
            def: function (W, q, o) {
                var t, O, a, h = function () { };
                if (h.prototype = q.prototype, t = new h, Yp(W)) {
                    if (hs[W]) throw "'" + W + "' alreay defined";
                    a = zg(W), t.getClassName = function () {
                        return W
                    }
                } else a = W;
                if (t.constructor = a, t.getClass = function () {
                        return a
                }, t.getSuperClass = function () {
                        return q
                }, o)
                    for (O in o) hp[O] && hp.hasOwnProperty(O) ? hp[O](t, o) : t[O] = o[O];
                a.prototype = t, a.superClass = q.prototype
            },
            startAnim: function () {
                var n = function (t) {
                    t.duration && (t.startTime = rf()), t.timeId = Om(t.tick, V, V, t.interval)
                };
                return function (y) {
                    return y = Zj(y), y.easing = y.easing || r.animEasing, y.duration || y.frames || (y.duration = r.animDuration), y.t = 0, y.duration ? y.interval = 0 : (y.frame = 0, y.interval = y.interval || 10), y.tick = function () {
                        if (y.duration) {
                            var K = (rf() - y.startTime) / y.duration;
                            K > 1 && (K = 1), y.t = K, y.action(y.easing(K), K), 1 === K ? y.stop() : y._isPaused || (y.timeId = Om(y.tick))
                        } else y.frame++, K = y.t = y.frame / y.frames, y.action(y.easing(K), K), y.frame < y.frames ? y._isPaused || (y.timeId = Om(y.tick, V, V, y.interval)) : y.stop()
                    }, y.resume = function () {
                        y._isPaused && (delete y._isPaused, y.duration ? y.t < 1 && (y.startTime = rf() - y.duration * y.t, y.timeId = Om(y.tick)) : y.frame < y.frames && (y.timeId = Om(y.tick, V, V, y.interval)))
                    }, y.pause = function () {
                        y._isPaused = !0
                    }, y.stop = function (J) {
                        y.isRunning() && (y.duration ? y.t < 1 && J && (y.t = 1, y.action(y.easing(1))) : y.frame < y.frames && J && (y.frame = y.frames, y.action(y.easing(1))), y._37o && y._37o(), y.finishFunc && y.finishFunc(), Af(y.timeId, !y.duration), delete y.timeId)
                    }, y.isRunning = function () {
                        return y.timeId != V
                    }, y.delay ? Om(n, V, [y], y.delay) : n(y), y
                }
            }(),
            getTextSize: function () {
                var h = {},
                    R = document ? Qk().getContext("2d") : V;
                return function (J, k) {
                    R.font = J ? J : Dp;
                    var q = h[R.font];
                    return q || (q = 2 * R.measureText("e").width + 4, h[R.font] = q), {
                        width: R.measureText(k).width + 4,
                        height: q
                    }
                }
            }(),
            drawText: function (r, g, d, $, P, v, Z, k, G, j) {
                if (g != V) {
                    var _ = vr(d, g),
                        b = {};
                    b.y = j && j !== nk ? j === lp ? v + _.height / 2 : v + k - _.height / 2 : v + k / 2, b.x = G && G !== Sd ? G === yn ? P + Z - _.width / 2 : P + Z / 2 : P + _.width / 2, jo(r, g, b, d, $)
                }
            },
            getDistance: function (z, k) {
                var S = z.length;
                return k ? 3 === S ? B(b(z[0] - k[0]) + b(z[1] - k[1]) + b(z[2] - k[2])) : 2 === S ? B(b(z[0] - k[0]) + b(z[1] - k[1])) : z.z === l ? B(b(k.x - z.x) + b(k.y - z.y)) : B(b(k.x - z.x) + b(k.y - z.y) + b(k.z - z.z)) : 3 === S ? B(b(z[0]) + b(z[1]) + b(z[2])) : 2 === S ? B(b(z[0]) + b(z[1])) : void 0
            },
            brighter: function (w, f) {
                return Hh(w, f ? f : 40)
            },
            darker: function (J, v) {
                return Hh(J, v ? v : -40)
            },
            unionPoint: function (Q, y) {
                if (!Q) return V;
                if (2 === arguments.length) return Q && y ? {
                    x: J(Q.x, y.x),
                    y: J(Q.y, y.y),
                    width: O(Q.x - y.x),
                    height: O(Q.y - y.y)
                } : V;
                var p = Q;
                if (p._as && (p = p._as), p.length === l) return V;
                var m = p.length;
                if (0 >= m) return V;
                for (var o = 1, r = p[0], v = {
                    x: r.x,
                    y: r.y,
                    width: 0,
                    height: 0
                }; m > o; o++) {
                    r = p[o];
                    var d = J(v.x, r.x),
                        g = C(v.x + v.width, r.x),
                        s = J(v.y, r.y),
                        Y = C(v.y + v.height, r.y);
                    v.x = d, v.y = s, v.width = g - d, v.height = Y - s
                }
                return v
            },
            unionRect: function (L, i) {
                if (L && !i) return Zj(L);
                if (!L && i) return Zj(i);
                if (L && i) {
                    var w = {
                        x: J(L.x, i.x),
                        y: J(L.y, i.y)
                    };
                    return w.width = C(L.x + L.width, i.x + i.width) - w.x, w.height = C(L.y + L.height, i.y + i.height) - w.y, w
                }
                return V
            },
            containsPoint: function (f, u) {
                return !(!f || u.x < f.x || u.y < f.y || u.x > f.x + f.width || u.y > f.y + f.height)
            },
            containsRect: function (U, g) {
                if (!U || !g) return !1;
                var r = g.x,
                    G = g.y,
                    F = g.width,
                    z = g.height,
                    x = U.width,
                    d = U.height;
                if (0 > (x | d | F | z)) return !1;
                var T = U.x,
                    O = U.y;
                if (T > r || O > G) return !1;
                if (x += T, F += r, r >= F) {
                    if (x >= T || F > x) return !1
                } else if (x >= T && F > x) return !1;
                if (d += O, z += G, G >= z) {
                    if (d >= O || z > d) return !1
                } else if (d >= O && z > d) return !1;
                return !0
            },
            intersectsRect: function (i, L) {
                if (!i || !L) return !1;
                var F = L.width,
                    c = L.height,
                    Q = i.width,
                    g = i.height;
                if (0 >= Q || 0 >= g || 0 >= F || 0 >= c) return !1;
                var f = L.x,
                    r = L.y,
                    J = i.x,
                    k = i.y;
                return Q += J, g += k, F += f, c += r, Q > f && g > r && F > J && c > k
            },
            intersection: function (p, H) {
                if (!p || !H) return V;
                var j = H.x,
                    F = H.y,
                    x = p.x,
                    i = p.y,
                    s = j,
                    K = F,
                    w = x,
                    d = i;
                return s += H.width, K += H.height, w += p.width, d += p.height, x > j && (j = x), i > F && (F = i), s > w && (s = w), K > d && (K = d), s -= j, K -= F, 0 >= s || 0 >= K ? V : {
                    x: j,
                    y: F,
                    width: s,
                    height: K
                }
            },
            grow: function (W, f) {
                W.x -= f, W.y -= f, W.width = W.width + 2 * f, W.height = W.height + 2 * f
            },
            getLogicalPoint: function (i, V, I, A, q, c) {
                var X = V.getBoundingClientRect();
                return i = e ? Vp(i) : i, {
                    x: (i.clientX - X.left + V.scrollLeft - (I || 0)) / (q || 1),
                    y: (i.clientY - X.top + V.scrollTop - (A || 0)) / (c || 1)
                }
            },
            removeHTML: function () {
                var H;
                return function (s) {
                    return s && s.parentNode ? H === s ? !0 : (H = s, s.parentNode.removeChild(s), H = V, !0) : !1
                }
            }(),
            getToolTipDiv: function () {
                if (!$o) {
                    $o = Xh(), wp = Xh();
                    var A = $o.style;
                    r.baseZIndex != V && (A.zIndex = m(r.baseZIndex) + 3 + ""), A.whiteSpace = "nowrap", A.color = r.toolTipLabelColor, A.background = r.toolTipBackground, A.font = r.toolTipLabelFont, A.padding = "5px", A.boxShadow = "0px 0px 3px " + r.toolTipShadowColor
                }
                return $o
            },
            isToolTipShowing: function () {
                return $o && $o.parentNode ? !0 : wp && wp.parentNode ? !0 : !1
            },
            hideToolTip: function () {
                Kq($o), Kq(wp), Md()
            },
            showToolTip: function (d, H) {
                if (!d || H == V) return Ij(), void 0;
                r.getToolTipDiv();
                var X, Z;
                if (H.html ? (H = H.html, X = wp, Kq($o)) : (X = $o, Kq(wp)), Z = X.style, X.innerHTML = H, X.parentNode || yk(document.body, X), d.target) {
                    d = wh(d);
                    var q = wl(),
                        C = d.x,
                        D = d.y,
                        J = e ? 60 : 12;
                    if (e) {
                        var z = X.getBoundingClientRect();
                        Z.left = C - z.width / 2 + Fb, Z.top = D - z.height - J < q.top ? D + J + Fb : D - z.height - J + Fb
                    } else {
                        Z.left = C + J + Fb, Z.top = D + J + Fb;
                        var z = X.getBoundingClientRect();
                        z.left + z.width > q.width && (Z.left = C - J - z.width + Fb), z.top + z.height > q.height && (Z.top = D - J - z.height + Fb), z.left < 0 && (Z.left = C + J + Fb), z.top < 0 && (Z.top = D + J + Fb)
                    }
                } else Z.left = d.x + Fb, Z.top = d.y + Fb;
                Md()
            },
            startDragging: function (_, G) {
                _ !== _h && (_h ? e ? _h.handleWindowTouchEnd(G) : _h.handleWindowMouseUp(G) : e ? (window.addEventListener(Zk, hi, !1), window.addEventListener(gh, be, !1)) : (window.addEventListener(Vl, Rd, !1), window.addEventListener(Bh, $l, !1)), _h = _)
            },
            getImageMap: function () {
                return Tb
            },
            toBoundaries: function (a, J, G, m) {
                var H = [];
                return km(a, J, G, m).forEach(function (J) {
                    var o = [];
                    J.forEach(function (k) {
                        o.push(k.x, k.y)
                    }), H.push(o)
                }), H
            },
            getCurrentKeyCodeMap: function () {
                return Ih
            },
            drawCenterImage: function (R, N, G, Y, y, j, v) {
                var Q = Vk(N, y),
                    U = dd(N, y);
                Ko(R, N, K(G - Q / 2), K(Y - U / 2), Q, U, y, j, v)
            },
            drawStretchImage: function (e, u, d, z, a, H, G, O, s, p) {
                var S, U = Vk(u, O),
                    L = dd(u, O);
                "uniform" === d ? (S = J(H / U, G / L), U *= S, L *= S, z += K((H - U) / 2), a += K((G - L) / 2), H = U, G = L) : d === Pg && ((U > H || L > G) && (S = J(H / U, G / L), U *= S, L *= S), z += K((H - U) / 2), a += K((G - L) / 2), H = U, G = L), Ko(e, u, z, a, H, G, O, s, p)
            },
            toCanvas: function (R, U, j, p, m, V, I) {
                R = Bg(R, I), U = U || Vk(R, m), j = j || dd(R, m);
                var A = Qk();
                Qq(A, U, j, 1);
                var J = Gg(A);
                return qp(J, R, p, 0, 0, U, j, m, V, I), J.restore(), A
            },
            createElement: function (c, Q, C, B) {
                var Z = document.createElement(c);
                return fn(Z, Q || G.widgetBorder, 2), Z.style.font = C ? C : Dp, B != V && (Z.value = B), Z
            },
            containedInView: function (G, W) {
                var k = $k(W).getBoundingClientRect();
                return Rq({
                    x: k.left,
                    y: k.top,
                    width: k.width,
                    height: k.height
                }, Li(G))
            },
            isIsolating: function () {
                return zp
            },
            setIsolating: function (w) {
                zp = w
            },
            toColorData: mi
        }, !0), Zc(j, {
            adjustChildrenToTop: 1,
            autoHideScrollBar: 1,
            autoUpdate: 1,
            firstPersonMode: 1,
            ortho: 1,
            strict: 1,
            stickToRight: 1,
            instant: 1,
            closePath: 1,
            hierarchical: 1
        }, !0);
        var _m = r.disabledOpacity,
            gg = r.toolTipDelay,
            jq = r.devicePixelRatio,
            Aj = r.autoMakeVisible,
            rm = r.autoHideScrollBar,
            Uf = r.imageGradient,
            Ob = r.showToolTip,
            Ij = r.hideToolTip,
            jg = r.dashPattern,
            Ud = r.lineCap,
            sj = r.lineJoin,
            Nb = r.labelColor,
            Ul = r.labelSelectColor,
            Dp = r.labelFont,
            vl = r.widgetIndent,
            Bp = r.widgetRowHeight,
            Oj = r.widgetHeaderHeight,
            Wn = r.widgetTitleHeight,
            $h = r.scrollBarColor,
            Ah = r.scrollBarSize,
            pi = r.scrollBarTimeout,
            $g = r.scrollBarMinLength,
            lo = r.scrollBarInteractiveSize,
            qm = r.zoomIncrement,
            Tg = r.scrollZoomIncrement,
            Yh = r.pinchZoomIncrement,
            Tf = r.zoomMax,
            re = r.zoomMin,
            Qg = r.createObject,
            Mh = r.preventDefault,
            Ad = r.setImage,
            Bg = r.getImage,
            Ni = r.drawCenterImage,
            qp = r.drawStretchImage,
            Rb = r.getId,
            Om = r.callLater,
            Zr = r.sortFunc,
            Zj = r.clone,
            zg = r.getClass,
            Ph = r.startAnim,
            Mc = r.brighter,
            Yg = r.darker,
            ks = r.drawText,
            vr = r.getTextSize,
            De = r.isLeftButton,
            Yn = r.getTouchCount,
            Yc = r.isDoubleClick,
            Ag = r.isShiftDown,
            im = r.isCtrlDown,
            Li = r.getClientPoint,
            wh = r.getPagePoint,
            md = r.getDistance,
            Aq = r.unionPoint,
            jm = r.unionRect,
            Rq = r.containsPoint,
            Ac = r.containsRect,
            wk = r.intersectsRect,
            Hr = r.intersection,
            wl = r.getWindowInfo,
            Gb = r.grow,
            Dm = r.getLogicalPoint,
            Le = r.startDragging,
            Kq = r.removeHTML,
            Yq = r.createElement,
            cf = r.segmentResolution,
            rr = r.shapeResolution,
            Ur = r.shapeSide,
            Ui = r.def,
            am = function (a, P, F) {
                Ui(L + "." + a, P, F)
            };
        Zc(r, {
            toolTipLabelColor: Nb,
            toolTipLabelFont: Dp,
            toolTipBackground: G.toolTipBackground,
            toolTipShadowColor: El
        }, !0);
        var pg = 1e-6,
            ob = "undefined" != typeof Uint16Array ? Uint16Array : Array,
            wq = "undefined" != typeof Float32Array ? Float32Array : Array,
            Zn = function (K, d, Z) {
                var p = [K[0] - d[0], K[1] - d[1], K[2] - d[2]];
                if (Z) {
                    var G = md(p);
                    G > 0 && (p[0] /= G, p[1] /= G, p[2] /= G)
                }
                return p
            },
            Gj = function (w) {
                return [-w[0], -w[1], -w[2]]
            },
            Gl = function (W, G) {
                return 3 === W.length ? W[0] * G[0] + W[1] * G[1] + W[2] * G[2] : W[0] * G[0] + W[1] * G[1]
            },
            vj = function () {
                var b = new wq(16);
                return b[0] = 1, b[1] = 0, b[2] = 0, b[3] = 0, b[4] = 0, b[5] = 1, b[6] = 0, b[7] = 0, b[8] = 0, b[9] = 0, b[10] = 1, b[11] = 0, b[12] = 0, b[13] = 0, b[14] = 0, b[15] = 1, b
            },
            mb = vj(),
            oc = function (y) {
                var i = new wq(16);
                return i[0] = y[0], i[1] = y[1], i[2] = y[2], i[3] = y[3], i[4] = y[4], i[5] = y[5], i[6] = y[6], i[7] = y[7], i[8] = y[8], i[9] = y[9], i[10] = y[10], i[11] = y[11], i[12] = y[12], i[13] = y[13], i[14] = y[14], i[15] = y[15], i
            },
            sb = function (O, u) {
                return O[0] = u[0], O[1] = u[1], O[2] = u[2], O[3] = u[3], O[4] = u[4], O[5] = u[5], O[6] = u[6], O[7] = u[7], O[8] = u[8], O[9] = u[9], O[10] = u[10], O[11] = u[11], O[12] = u[12], O[13] = u[13], O[14] = u[14], O[15] = u[15], O
            },
            nn = function (m) {
                return m[0] = 1, m[1] = 0, m[2] = 0, m[3] = 0, m[4] = 0, m[5] = 1, m[6] = 0, m[7] = 0, m[8] = 0, m[9] = 0, m[10] = 1, m[11] = 0, m[12] = 0, m[13] = 0, m[14] = 0, m[15] = 1, m
            },
            xo = function (n, Z) {
                var H = n[0],
                    C = n[1],
                    E = n[2];
                return n[0] = Z[0] * H + Z[4] * C + Z[8] * E + Z[12], n[1] = Z[1] * H + Z[5] * C + Z[9] * E + Z[13], n[2] = Z[2] * H + Z[6] * C + Z[10] * E + Z[14], n
            },
            mp = function (m, W) {
                var g = m[0],
                    N = m[1],
                    l = m[2],
                    $ = m[3];
                return m[0] = W[0] * g + W[4] * N + W[8] * l + W[12] * $, m[1] = W[1] * g + W[5] * N + W[9] * l + W[13] * $, m[2] = W[2] * g + W[6] * N + W[10] * l + W[14] * $, m[3] = W[3] * g + W[7] * N + W[11] * l + W[15] * $, m
            },
            je = function () {
                var O, o, h, i, b = od($i[1] + $i[7]),
                    R = od($i[0] + $i[3] - $i[10]),
                    C = od($i[8] + 2),
                    Y = function () {
                        return o = h.charAt(O), O += 1, o
                    },
                    G = function () {
                        var z = "";
                        if (o === C)
                            for (; Y() ;) {
                                if (o === C) return Y(), z;
                                z += o
                            } else Y()
                    },
                    K = function () {
                        for (; o && " " >= o;) Y()
                    },
                    U = function () {
                        var $, N = {};
                        if (o === b) {
                            if (Y(), K(), o === R) return Y(), N;
                            for (; o;) {
                                if ($ = G(), K(), Y(), N[$] = i(), K(), o === R) return Y(), N;
                                Y(), K()
                            }
                        }
                    };
                return i = function () {
                    switch (K(), o) {
                        case b:
                            return U();
                        default:
                            return G()
                    }
                },
                    function (d) {
                        if (E = {}, d) {
                            var s;
                            if (h = d, O = 0, o = " ", s = i(), K(), !o) return s
                        }
                    }
            }(),
            gr = function (C, o) {
                if (o) {
                    var q = N(o),
                        K = A(o),
                        g = C[4],
                        U = C[5],
                        c = C[6],
                        m = C[7],
                        Q = C[8],
                        X = C[9],
                        f = C[10],
                        i = C[11];
                    C[4] = g * K + Q * q, C[5] = U * K + X * q, C[6] = c * K + f * q, C[7] = m * K + i * q, C[8] = Q * K - g * q, C[9] = X * K - U * q, C[10] = f * K - c * q, C[11] = i * K - m * q
                }
            },
            Ec = function (Q, r) {
                if (r) {
                    var D = N(r),
                        I = A(r),
                        _ = Q[0],
                        p = Q[1],
                        X = Q[2],
                        y = Q[3],
                        w = Q[8],
                        x = Q[9],
                        Z = Q[10],
                        h = Q[11];
                    Q[0] = _ * I - w * D, Q[1] = p * I - x * D, Q[2] = X * I - Z * D, Q[3] = y * I - h * D, Q[8] = _ * D + w * I, Q[9] = p * D + x * I, Q[10] = X * D + Z * I, Q[11] = y * D + h * I
                }
            },
            js = function (q, S) {
                if (S) {
                    var e = N(S),
                        L = A(S),
                        b = q[0],
                        m = q[1],
                        g = q[2],
                        v = q[3],
                        E = q[4],
                        t = q[5],
                        K = q[6],
                        r = q[7];
                    q[0] = b * L + E * e, q[1] = m * L + t * e, q[2] = g * L + K * e, q[3] = v * L + r * e, q[4] = E * L - b * e, q[5] = t * L - m * e, q[6] = K * L - g * e, q[7] = r * L - v * e
                }
            },
            Jl = function (q, H, $) {
                return Ep(V, $ === !1 ? V : q.s3(), q.r3(), q.getRotationMode(), q.p3(), V, H)
            },
            Ep = function (t, y, P, Q, V, H, B) {
                return H || (H = vj()), V && Fn(H, V), Ej(H, P, Q), B && oe(H, H, B), y && he(H, y), t && oe(H, H, t), H
            },
            zb = function (R, U, M) {
                U = m(U), M = m(M);
                var D = this;
                D.g = R, D._84O = U, D._85O = M, D._70I = !0, D.F = 0, D._83O = U + M, D.pen = {
                    x: 0,
                    y: 0
                }
            },
            vm = "lineDashOffset",
            Op = "setLineDash",
            _d = function (P) {
                for (var E in P) 1 === E.length && (vm = P[E]);
                return E ? 1 : 0
            },
            Dc = function (P, S, t) {
                return Qp(S) ? P : P[Op] ? (P[Op](S), t && (P.lineDashOffset = t), P) : new zb(P, S[0], S.length > 1 ? S[1] : S[0])
            },
            Pe = function (F, Q) {
                !Qp(Q) && F[Op] && (F[Op](Nd), F.lineDashOffset = 0)
            };
        if (Ui(zb, w, {
            _69I: 6,
            moveTo: function (P, h) {
                    var T = this,
                        V = T.pen;
                    V.x = P, V.y = h, T.g.moveTo(P, h), T.start || (T.start = {
            x: P,
            y: h
        })
        },
            lineTo: function (w, X) {
                    var a = this,
                        k = a.pen,
                        u = w - k.x,
                        o = X - k.y,
                        L = x(o, u),
                        r = A(L),
                        W = N(L),
                        T = a._23O(k.x, k.y, w, X),
                        z = a._85O,
                        h = a._84O,
                        O = a._83O;
                    if (a.F) {
                        if (a.F > T) return a._70I ? a._72I(w, X) : a.moveTo(w, X), a.F -= T, void 0;
                        if (a._70I ? a._72I(k.x + r * a.F, k.y + W * a.F) : a.moveTo(k.x + r * a.F, k.y + W * a.F), T -= a.F, a.F = 0, a._70I = !a._70I, !T) return
        }
                    var R = S(T / O);
                    if (R) {
                        for (var f = r * h, s = W * h, Q = r * z, l = W * z, B = 0; R > B; B++) a._70I ? (a._72I(k.x + f, k.y + s), a.moveTo(k.x + Q, k.y + l)) : (a.moveTo(k.x + Q, k.y + l), a._72I(k.x + f, k.y + s));
                        T -= O * R
        }
                    a._70I ? T > h ? (a._72I(k.x + r * h, k.y + W * h), a.moveTo(w, X), a.F = z - (T - h), a._70I = !1) : (a._72I(w, X), T === h ? (a.F = 0, a._70I = !a._70I) : (a.F = h - T, a.moveTo(w, X))) : T > z ? (a.moveTo(k.x + r * z, k.y + W * z), a._72I(w, X), a.F = h - (T - z), a._70I = !0) : (a.moveTo(w, X), T === z ? (a.F = 0, a._70I = !a._70I) : a.F = z - T)
        },
            quadraticCurveTo: function (n, m, t, v) {
                    var W, Z = this,
                        M = Z.pen,
                        C = M.x,
                        B = M.y,
                        s = Z._22O(C, B, n, m, t, v),
                        l = 0,
                        $ = 0,
                        K = Z._85O,
                        Q = Z._84O;
                    if (Z.F) {
                        if (Z.F > s) return Z._70I ? Z._71I(n, m, t, v) : Z.moveTo(t, v), Z.F -= s, void 0;
                        if (l = Z.F / s, W = Z._20O(C, B, n, m, t, v, l), Z._70I ? Z._71I(W[2], W[3], W[4], W[5]) : Z.moveTo(W[4], W[5]), Z.F = 0, Z._70I = !Z._70I, !s) return
        }
                    var J = s - s * l,
                        k = S(J / Z._83O),
                        D = Q / s,
                        p = K / s;
                    if (k)
                        for (var x = 0; k > x; x++) Z._70I ? ($ = l + D, W = Z._21O(C, B, n, m, t, v, l, $), Z._71I(W[2], W[3], W[4], W[5]), l = $, $ = l + p, W = Z._21O(C, B, n, m, t, v, l, $), Z.moveTo(W[4], W[5])) : ($ = l + p, W = Z._21O(C, B, n, m, t, v, l, $), Z.moveTo(W[4], W[5]), l = $, $ = l + D, W = Z._21O(C, B, n, m, t, v, l, $), Z._71I(W[2], W[3], W[4], W[5])), l = $;
                    J = s - s * l, Z._70I ? J > Q ? ($ = l + D, W = Z._21O(C, B, n, m, t, v, l, $), Z._71I(W[2], W[3], W[4], W[5]), Z.moveTo(t, v), Z.F = K - (J - Q), Z._70I = !1) : (W = Z._19O(C, B, n, m, t, v, l), Z._71I(W[2], W[3], W[4], W[5]), s === Q ? (Z.F = 0, Z._70I = !Z._70I) : (Z.F = Q - J, Z.moveTo(t, v))) : J > K ? ($ = l + p, W = Z._21O(C, B, n, m, t, v, l, $), Z.moveTo(W[4], W[5]), W = Z._19O(C, B, n, m, t, v, $), Z._71I(W[2], W[3], W[4], W[5]), Z.F = Q - (J - K), Z._70I = !0) : (Z.moveTo(t, v), J === K ? (Z.F = 0, Z._70I = !Z._70I) : Z.F = K - J)
        },
            bezierCurveTo: function () {
                    var v = arguments;
                    this.pen = {
            x: v[4],
            y: v[5]
        }, this.g.bezierCurveTo(v[0], v[1], v[2], v[3], v[4], v[5])
        },
            arc: function (S, r, G, d, T, Y) {
                    Y || (d = -d, T = -T), Lq(this, S, r, d, T - d, G, G, !1)
        },
            rect: function (R, m, y, S) {
                    var d = this;
                    d.pen = {
            x: R,
            y: m
        }, d.moveTo(R, m), d.lineTo(R, m + S), d.lineTo(R + y, m + S), d.lineTo(R + y, m), d.lineTo(R, m)
        },
            beginPath: function () {
                    this.g.beginPath()
        },
            closePath: function () {
                    this.lineTo(this.start.x, this.start.y)
        },
            _23O: function (Z, r, e, U) {
                    var A = e - Z,
                        n = U - r;
                    return B(A * A + n * n)
        },
            _22O: function (U, v, S, m, P, E, C) {
                    for (var G, n, t, W, T, y, $, o = 0, R = U, c = v, u = C > 0 ? C : this._69I, f = 1; u >= f; f++) t = f / u, W = 1 - t, T = W * W, y = 2 * t * W, $ = t * t, G = T * U + y * S + $ * P, n = T * v + y * m + $ * E, o += this._23O(R, c, G, n), R = G, c = n;
                    return o
        },
            _21O: function (W, s, r, G, I, X, T, k) {
                    var J = this;
                    if (0 === T) return J._20O(W, s, r, G, I, X, k);
                    if (1 === k) return J._19O(W, s, r, G, I, X, T);
                    var b = J._20O(W, s, r, G, I, X, k);
                    return b.push(T / k), J._19O.apply(J, b)
        },
            _20O: function (K, L, r, j, R, b, S) {
                    if (1 !== S) {
                        var u = r + (R - r) * S,
                            J = j + (b - j) * S;
                        r = K + (r - K) * S, j = L + (j - L) * S, R = r + (u - r) * S, b = j + (J - j) * S
        }
                    return [K, L, r, j, R, b]
        },
            _19O: function (E, T, C, B, V, n, v) {
                    if (1 !== v) {
                        var z = E + (C - E) * v,
                            d = T + (B - T) * v;
                        C += (V - C) * v, B += (n - B) * v, E = z + (C - z) * v, T = d + (B - d) * v
        }
                    return [E, T, C, B, V, n]
        },
            _72I: function (q, V) {
                    var h = this.pen;
                    (q !== h.x || V !== h.y) && (h.x = q, h.y = V, this.g.lineTo(q, V))
        },
            _71I: function (j, U, n, N) {
                    var M = this.pen;
                    (j !== n || U !== N || n !== M.x || N !== M.y) && (M.x = n, M.y = N, this.g.quadraticCurveTo(j, U, n, N))
        }
        }), Z && i) {
            var ll = i.toString();
            u = ll.indexOf(wo.substr(0, 2)) > 0 && ll.indexOf(lp + lp.substr(1, 1)) > 1 ? !0 : !1
        }
        var Pi = G.chart,
            Nm = r.compStack = [],
            yi = /^style@/,
            Jd = /^attr@/,
            Hq = /^field@/,
            Vk = function (n, D) {
                return n ? Pk(n.width, D) : 0
            },
            dd = function (A, c) {
                return A ? Pk(A.height, c) : 0
            },
            Pk = function (L, v, G) {
                if (!L || !L.func) return L;
                var b, q = L.func,
                    x = L.value;
                return b = Wl(q) ? q(v, G) : v ? yi.test(q) ? v.s(q.slice(6)) : Jd.test(q) ? v.a(q.slice(5)) : Hq.test(q) ? v[q.slice(6)] : v[q] ? v[q](G) : x : x, x !== l && b == V ? x : b
            },
            Ko = r.drawImage = function () {
                var w, H, E, j, l, F = function (M, o, S) {
                    var W = M[o];
                    return W && W.func ? (W = Pk(W, H, E), S && (W = S(W))) : S && (W = M[o] = S(W)), W
                },
                    $ = function (Q, H) {
                        var A = F(Q, H);
                        if (l && A) {
                            var L = si(l);
                            return A = mi(A), "rgba(" + S(A[0] * L[0]) + "," + S(A[1] * L[1]) + "," + S(A[2] * L[2]) + "," + A[3] + ")"
                        }
                        return A
                    },
                    v = function (U) {
                        if (Ue(U)) {
                            for (var o = new Io, N = U.length, r = 0; N > r; r += 2) o.add({
                                x: U[r],
                                y: U[r + 1]
                            });
                            U = o
                        }
                        return U
                    },
                    D = function (p, f) {
                        var O = F(p, Uj);
                        if (Ue(O)) {
                            var z = O.length,
                                Q = F(p, "relative"),
                                b = f.width,
                                N = f.height;
                            if (4 === z) O = {
                                x: O[0],
                                y: O[1],
                                width: O[2],
                                height: O[3]
                            }, Q && (O.x *= b, O.y *= N, O.width *= b, O.height *= N);
                            else if (3 === z) {
                                var S = O[0];
                                O = {
                                    width: O[1],
                                    height: O[2]
                                }, Q && (O.width *= b, O.height *= N), S = Jn(S, f, O), O.x = S.x - O.width / 2, O.y = S.y - O.height / 2
                            }
                            var U = F(p, "offsetX");
                            U && (O.x += U), U = F(p, "offsetY"), U && (O.y += U)
                        }
                        return O
                    },
                    t = function (R) {
                        return Ue(R) ? new Io(R) : R
                    },
                    f = function (A, q) {
                        if (A) {
                            var U = q.x + q.width / 2,
                                N = q.y + q.height / 2;
                            w.save(), Ze(w, U, N), Cj(w, A), Ze(w, -U, -N)
                        }
                    },
                    Y = function (f) {
                        f && w.restore()
                    },
                    c = function (d, Z, h) {
                        var g = F(d, "path"),
                            U = F(d, Ff),
                            q = V,
                            A = Jk(null, g);
                        if (h || (h = d.unionRect, h || (h = Aq(A), d.path.func || (d.unionRect = h)), q = h), h) {
                            q || (q = d.unionRect, q || (q = Aq(A), d.path.func || (d.unionRect = q)));
                            var K = ue(q, h);
                            if (K) f(U, q);
                            else {
                                var s = q.width,
                                    E = q.height,
                                    I = h.width,
                                    M = h.height,
                                    i = I / s,
                                    t = M / E;
                                w.save(), Ze(w, h.x + I / 2, h.y + M / 2), w.scale(i, t), U && Cj(w, U), Ze(w, -q.x - s / 2, -q.y - E / 2)
                            }
                            var L = F(d, "borderPattern"),
                                O = Dc(w, L),
                                Q = $(d, "background"),
                                N = $(d, "borderColor"),
                                b = F(d, "borderWidth"),
                                y = F(d, "gradient"),
                                x = $(d, "gradientColor"),
                                p = F(d, "border3d"),
                                u = F(d, "border3dColor"),
                                _ = F(d, "border3dAccuracy"),
                                m = w.lineJoin,
                                k = w.lineCap;
                            if (w.lineJoin = F(d, "borderJoin") || sj, w.lineCap = F(d, "borderCap") || Ud, Q ? (Dg(w, Q, y, x, q), Jk(w, g), w.fill(), O !== w && Jk(w, g)) : Jk(w, g), b && N && (w.lineWidth = b, w.strokeStyle = N, w.stroke(), p && Jj(w, N, u, b, j, _)), Pe(w, L), F(d, "dash")) {
                                var C = F(d, "dashWidth") || b;
                                if (C > 0) {
                                    L = F(d, "dashPattern") || jg;
                                    var O = Dc(w, L, F(d, "dashOffset")),
                                        S = F(d, "dashColor") || _q;
                                    O !== w && Jk(w, g), w.strokeStyle = S, w.lineWidth = C, w.stroke(), F(d, "dash3d") && Jj(w, S, F(d, "dash3dColor"), C, j, F(d, "dash3dAccuracy")), Pe(w, L)
                                }
                            }
                            Z === Uj && Gd(w, Q, F(d, "depth"), q), w.lineJoin = m, w.lineCap = k, K ? Y(U) : w.restore()
                        }
                    },
                    G = function (u, z, X) {
                        var O = F(u, Lf, v),
                            h = F(u, Ff),
                            R = z === aq,
                            x = V;
                        if (!X && R && (X = u.unionRect, X || (X = Aq(O), u.points.func || (u.unionRect = X)), x = X), X) {
                            R ? x || (x = u.unionRect, x || (x = Aq(O), u.points.func || (u.unionRect = x))) : x = X;
                            var H = ue(x, X);
                            if (H) f(h, x);
                            else {
                                var P = x.width,
                                    A = x.height,
                                    E = X.width,
                                    m = X.height,
                                    r = E / P,
                                    n = m / A;
                                w.save(), Ze(w, X.x + E / 2, X.y + m / 2), w.scale(r, n), h && Cj(w, h), Ze(w, -x.x - P / 2, -x.y - A / 2)
                            }
                            var K, D, Q, e, S = F(u, "borderPattern"),
                                p = Dc(w, S),
                                b = $(u, "background"),
                                B = Bg(F(u, "repeatImage"), l),
                                y = $(u, "borderColor"),
                                G = F(u, "borderWidth"),
                                o = F(u, "segments", t),
                                I = F(u, "gradient"),
                                T = $(u, "gradientColor"),
                                W = F(u, "border3d"),
                                Z = F(u, "border3dColor"),
                                M = F(u, "border3dAccuracy"),
                                U = F(u, "closePath"),
                                k = w.lineJoin,
                                L = w.lineCap;
                            if (w.lineJoin = F(u, "borderJoin") || sj, w.lineCap = F(u, "borderCap") || Ud, R ? b || B ? (B ? lh(w, B) : Dg(w, b, I, T, x), Xo(w, O, o, U), w.fill(), p !== w && Xo(p, O, o, U)) : Xo(p, O, o, U) : ("roundRect" === z ? K = F(u, "cornerRadius") : "polygon" === z ? K = F(u, "polygonSide") : "arc" === z && (K = F(u, "arcFrom"), D = F(u, "arcTo"), Q = F(u, "arcClose"), e = F(u, "arcOval")), b || B ? (B ? lh(w, B) : Dg(w, b, I, T, x), Pm(w, z, x, K, D, Q, e), w.fill(), w !== p && Pm(p, z, x, K, D, Q, e)) : Pm(p, z, x, K, D, Q, e)), G && y && (w.lineWidth = G, w.strokeStyle = y, w.stroke(), W && Jj(w, y, Z, G, j, M)), Pe(w, S), F(u, "dash")) {
                                var c = F(u, "dashWidth") || G;
                                if (c > 0) {
                                    S = F(u, "dashPattern") || jg;
                                    var p = Dc(w, S, F(u, "dashOffset")),
                                        d = F(u, "dashColor") || _q;
                                    p !== w && (R ? Xo(p, O, o, U) : Pm(p, z, x, K, D, Q, e)), w.strokeStyle = d, w.lineWidth = c, w.stroke(), F(u, "dash3d") && Jj(w, d, F(u, "dash3dColor"), c, j, F(u, "dash3dAccuracy")), Pe(w, S)
                                }
                            }
                            z === Uj && Gd(w, b, F(u, "depth"), x), w.lineJoin = k, w.lineCap = L, H ? Y(h) : w.restore()
                        }
                    },
                    h = function (L, b) {
                        var S = l,
                            y = l || F(L, Df),
                            n = Bg(F(L, "name"), y);
                        n && (qp(w, n, F(L, "stretch"), b.x, b.y, b.width, b.height, H, E, y), l = S)
                    },
                    d = function (J, u) {
                        var S = F(J, "text");
                        S != V && ks(w, S, F(J, "font"), $(J, Df), u.x, u.y, u.width, u.height, F(J, "align"), F(J, "vAlign"))
                    },
                    y = function (B, a) {
                        Jf(w, $(B, Df), a.x, a.y, a.width, a.height, F(B, "width"))
                    },
                    K = function (K, j) {
                        var y = F(K, _l),
                            D = 0;
                        if (y && (y.forEach(function (Q) {
                                D += Q
                        }), D > 0)) {
                            for (var g = F(K, "colors") || Pi, c = F(K, "startAngle") || 0, o = F(K, "hollow"), T = F(K, Fq), e = F(K, td), G = F(K, Ok), n = T ? new Io : V, f = j.x, q = j.y, S = j.width, C = j.height, p = f + S / 2, i = q + C / 2, M = J(S, C) / 2, _ = 0, O = 0; O < y.length; O++) {
                                var R = y[O],
                                    s = X * R / D,
                                    I = c + s;
                                if (w.fillStyle = g[_++], _ === g.length && (_ = 0), w.beginPath(), o) {
                                    var E = p + A(c) * M / 2,
                                        B = i + N(c) * M / 2,
                                        m = p + A(I) * M,
                                        Y = i + N(I) * M;
                                    w.moveTo(E, B), w.arc(p, i, M / 2, c, I, !1), w.lineTo(m, Y), w.arc(p, i, M, I, c, !0)
                                } else w.moveTo(p, i), w.arc(p, i, M, I, c, !0);
                                n && (s = (c + I) / 2, n.add({
                                    text: Wl(T) ? T(R, O, D, H) : R,
                                    x: p + .75 * A(s) * M,
                                    y: i + .75 * N(s) * M
                                })), w.closePath(), w.fill(), c = I
                            }
                            n && n.each(function (C) {
                                ks(w, C.text, e, G, C.x, C.y, 0, 0, Sh)
                            })
                        }
                    },
                    W = function (d, X) {
                        var B = F(d, uc);
                        if (B && B.length > 0) {
                            var D = B.length,
                                N = F(d, Fq),
                                p = F(d, td),
                                h = F(d, Ok),
                                e = N ? new Io : V,
                                Q = F(d, "minValue") || 0,
                                E = F(d, "maxValue");
                            if (E == V && (E = 0, B.forEach(function (e) {
                                    e.values.forEach(function (I) {
                                        E = C(E, I)
                            })
                            })), Q === E) return;
                            for (var b = X.height / (E - Q), t = X.y + E * b, j = F(B[0], _l).length, x = X.width / (3 * j + 1), Y = 2 * x / D, q = 0, i = 0; D > i; i++)
                                for (var n = B[i], A = F(n, Df), R = F(n, "colors"), r = F(n, _l), Z = 0; j > Z; Z++) {
                                    R ? w.fillStyle = R[Z] : A ? w.fillStyle = A : (w.fillStyle = Pi[q++], q === Pi.length && (q = 0));
                                    var U = r[Z],
                                        m = U * b,
                                        $ = X.x + (1 + 3 * Z) * x + i * Y;
                                    if (Sf(w, $, t - m, Y, m), e) {
                                        var W = Wl(N) ? N(U, Z, n, H) : U,
                                            f = vr(p, W).height;
                                        e.add({
                                            x: $,
                                            y: t - m - f,
                                            width: Y,
                                            height: f,
                                            text: W
                                        })
                                    }
                                }
                            e && e.each(function (s) {
                                ks(w, s.text, p, h, s.x, s.y, s.width, s.height, Sh)
                            })
                        }
                    },
                    o = function (c, J) {
                        var n = F(c, uc);
                        if (n && n.length > 0) {
                            var Y = n.length,
                                h = F(n[0], _l).length,
                                X = J.width / (3 * h + 1),
                                I = 0,
                                L = F(c, "maxValue"),
                                b = F(c, Fq),
                                B = F(c, td),
                                D = F(c, Ok),
                                t = b ? new Io : V;
                            if (L == V) {
                                L = 0;
                                for (var W = 0; h > W; W++) {
                                    for (var e = 0, N = 0; Y > N; N++) e += F(n[N], _l)[W];
                                    L = C(L, e)
                                }
                            }
                            if (L > 0) {
                                for (var W = 0; h > W; W++)
                                    for (var r = J.y + J.height, N = 0; Y > N; N++) {
                                        var i = n[N],
                                            K = F(i, Df),
                                            S = F(i, _l)[W],
                                            g = S / L * J.height;
                                        K ? w.fillStyle = K : (w.fillStyle = Pi[I++], I === Pi.length && (I = 0)), r -= g;
                                        var E = {
                                            x: J.x + (1 + 3 * W) * X,
                                            y: r,
                                            width: 2 * X,
                                            height: g
                                        };
                                        Sf(w, E.x, E.y, E.width, E.height), t && (E.text = Wl(b) ? b(S, W, i, H) : S, t.add(E))
                                    }
                                t && t.each(function (x) {
                                    ks(w, x.text, B, D, x.x, x.y, x.width, x.height, Sh)
                                })
                            }
                        }
                    },
                    x = function (m, i) {
                        var J = F(m, uc);
                        if (J && J.length > 0) {
                            for (var N = J.length, x = F(J[0], _l).length, U = i.width / (3 * x + 1), O = 0, W = F(m, Fq), $ = F(m, td), E = F(m, Ok), q = W ? new Io : V, z = 0; x > z; z++) {
                                for (var C = 0, X = 0; N > X; X++) C += F(J[X], _l)[z];
                                if (C > 0) {
                                    var Y = i.y + i.height;
                                    for (X = 0; N > X; X++) {
                                        var o = J[X],
                                            v = F(o, Df),
                                            t = F(o, _l)[z],
                                            A = t / C * i.height;
                                        v ? w.fillStyle = v : (w.fillStyle = Pi[O++], O === Pi.length && (O = 0)), Y -= A;
                                        var n = {
                                            x: i.x + (1 + 3 * z) * U,
                                            y: Y,
                                            width: 2 * U,
                                            height: A
                                        };
                                        Sf(w, n.x, n.y, n.width, n.height), q && (n.text = Wl(W) ? W(t, z, o, H) : t, q.add(n))
                                    }
                                }
                            }
                            q && q.each(function (t) {
                                ks(w, t.text, $, E, t.x, t.y, t.width, t.height, Sh)
                            })
                        }
                    },
                    u = function (M, x) {
                        var U = F(M, uc);
                        if (U && U.length > 0) {
                            var T = U.length,
                                l = F(M, "minValue") || 0,
                                m = F(M, "maxValue");
                            if (m == V && (m = 0, U.forEach(function (_) {
                                    _.values.forEach(function ($) {
                                        m = C(m, $)
                            })
                            })), l === m) return;
                            for (var W = x.height / (m - l), A = x.y + m * W, h = F(U[0], _l).length, R = x.width / (3 * h + 1), g = 0, $ = F(M, "lineWidth") || 2, N = F(M, "line3d"), _ = F(M, "linePoint"), J = F(M, Fq), G = F(M, td), r = F(M, Ok), y = 0; T > y; y++) {
                                var e = U[y],
                                    a = F(e, Df),
                                    L = F(e, _l);
                                a ? w.strokeStyle = a : (a = w.strokeStyle = Pi[g++], g === Pi.length && (g = 0)), w.beginPath();
                                for (var Y = 0; h > Y; Y++) {
                                    var f = x.x + (2 + 3 * Y) * R,
                                        v = A - L[Y] * W;
                                    0 === Y ? w.moveTo(f, v) : w.lineTo(f, v)
                                }
                                if (w.lineWidth = $, w.stroke(), N && Jj(w, a, V, $, j), _ || J) {
                                    var I, P = $ / 2 + 2;
                                    for (Y = 0; h > Y; Y++) {
                                        var q = L[Y];
                                        if (f = x.x + (2 + 3 * Y) * R, v = A - q * W, Wl(_) ? _(w, f, v, a, Y, e, H) : _ && (w.fillStyle = a, w.beginPath(), w.arc(f, v, P, 0, X, !0), w.fill()), Wl(J) ? I = J(q, Y, e, H) : J && (I = q), I) {
                                            var z = vr(G, I).height,
                                                o = w.shadowBlur;
                                            if (o) {
                                                var B = w.shadowOffsetX,
                                                    D = w.shadowOffsetY,
                                                    K = w.shadowColor;
                                                w.shadowOffsetX = 0, w.shadowOffsetY = 0, w.shadowBlur = 0, w.shadowColor = V
                                            }
                                            ks(w, I, G, r, f, v - z - P + 2, 0, z, Sh), o && (w.shadowOffsetX = B, w.shadowOffsetY = D, w.shadowColor = K, w.shadowBlur = o)
                                        }
                                    }
                                }
                            }
                        }
                    },
                    T = {
                        border: y,
                        image: h,
                        text: d,
                        pieChart: K,
                        columnChart: W,
                        stackedColumnChart: o,
                        percentageColumnChart: x,
                        lineChart: u
                    };
                return function (n, m, z, S, p, J, g, K, B) {
                    if (m && p && J) {
                        if (w = n, H = g, E = K, j = E ? E._zoom ? E._zoom : 1 : 1, l = B, m.tagName) return w.drawImage(m, z, S, p, J), void 0;
                        if (F(m, "visible") !== !1) {
                            l || (l = Pk(m.color, H, E));
                            var x = Vk(m, H),
                                y = dd(m, H),
                                $ = {
                                    x: 0,
                                    y: 0,
                                    width: x,
                                    height: y
                                },
                                O = F(m, "clip"),
                                b = F(m, "opacity");
                            w.save(), Ze(w, z, S), (x !== p || y !== J) && w.scale(p / x, J / y), O && (Wl(O) ? O(w, x, y, H, E, m) : (w.beginPath(), w.rect(0, 0, x, y), w.clip())), b != V && (w.globalAlpha *= b), F(m, "comps").forEach(function (L) {
                                if (F(L, ak) !== !1) {
                                    Nm.splice(0, 0, L);
                                    var n = F(L, "opacity"),
                                        U = F(L, "shadow"),
                                        I = F(L, "type"),
                                        N = D(L, $);
                                    if (n != V) {
                                        var j = w.globalAlpha;
                                        w.globalAlpha *= n
                                    }
                                    if (U) {
                                        var g = w.shadowOffsetX,
                                            k = w.shadowOffsetY,
                                            S = w.shadowBlur,
                                            K = w.shadowColor,
                                            t = F(L, "shadowOffsetX"),
                                            M = F(L, "shadowOffsetY"),
                                            R = F(L, "shadowBlur"),
                                            O = F(L, "shadowColor");
                                        w.shadowOffsetX = t == V ? 3 : t, w.shadowOffsetY = M == V ? 3 : M, w.shadowBlur = R == V ? 6 : R, w.shadowColor = O || El
                                    }
                                    if (Wl(I)) I(w, N, L, H, E);
                                    else if (r.getCompType(I)) r.getCompType(I)(w, N, L, H, E);
                                    else if (Lb[I] || I === aq) G(L, I, N);
                                    else if ("SVGPath" === I) c(L, I, N);
                                    else if (T[I] && N) {
                                        var s = F(L, Ff);
                                        f(s, N), T[I](L, N), Y(s)
                                    }
                                    U && (w.shadowOffsetX = g, w.shadowOffsetY = k, w.shadowBlur = S, w.shadowColor = K), n != V && (w.globalAlpha = j), Nm.splice(0, 1)
                                }
                            }), w.restore()
                        }
                    }
                }
            }();
        r.getCurrentComp = function () {
            return Nm[0]
        }, r.getParentComp = function () {
            return Nm[1]
        }, r.getInternal = function () {
            return {
                isEnter: Cr,
                isEsc: Qb,
                isSpace: xe,
                isLeft: xb,
                isUp: yg,
                isRight: Hb,
                isDown: _n,
                addMethod: Zc,
                superCall: fi,
                toPointsArray: km,
                translateAndScale: yf,
                appendArray: Of,
                createWorldMatrix: Ep,
                vec3TransformMat4: xo,
                setCanvas: Qq,
                createDiv: Xh,
                createCanvas: Qk,
                createImage: Mf,
                initContext: Gg,
                layout: Xe,
                fillRect: Sf,
                Mat: wf,
                drawBorder: Jf,
                isString: Yp,
                setBorder: fn,
                getPropertyValue: jr,
                setPropertyValue: Tp,
                drawVerticalLine: Sr,
                draw3DRect: Gd,
                getPinchDist: Np,
                isSameRect: ue,
                getPosition: Jn,
                intersectionLineRect: ep,
                getNodeRect: al,
                getImageWidth: Vk,
                getImageHeight: dd,
                formatNumber: oj,
                initItemElement: mr,
                drawPoints: Xo,
                createG2: Dc,
                closePopup: op,
                isH: ui,
                createAnim: sr,
                createNormalMatrix: Il,
                createNormals: th,
                toFloatArray: tj,
                glMV: Si,
                batchShape: me,
                createNodeMatrix: Jl,
                getFaceInfo: Cp,
                transformAppend: ic,
                drawFaceInfo: ts,
                to3dPointsArray: Ch,
                setGLDebugMode: function (O) {
                    rq = O
                },
                cube: function () {
                    return {
                        vs: Yr,
                        is: Bj,
                        uv: Qd
                    }
                },
                ui: function () {
                    return {
                        DataUI: Vf,
                        NodeUI: sh,
                        EdgeUI: is,
                        GroupUI: to,
                        ShapeUI: yh,
                        GridUI: Dk,
                        Data3dUI: Zg,
                        Node3dUI: Qh,
                        Shape3dUI: Th
                    }
                },
                getInternalVersion: function () {
                    return "U2FsdGVkX1/QTawsmlt3DlEmUcgS6FsNrgB9C/MZaEJzllh1fvUR1GbvwT1WIRZE"
                },
                getDragger: function () {
                    return _h
                },
                addMSMap: function (n) {
                    Zc(hp, n)
                },
                k: Q
            }
        },
            function ($) {
                function Z(k, M) {
                    k != V && (M == V && Xk != typeof k ? this._54O(k, 256) : this._54O(k, M))
                }

                function U() {
                    return new Z(V)
                }

                function j(N, M, Q, $, P, J) {
                    for (; --J >= 0;) {
                        var Y = M * this[N++] + Q[$] + P;
                        P = S(Y / 67108864), Q[$++] = 67108863 & Y
                    }
                    return P
                }

                function b(i, G, x, b, z, q) {
                    for (var S = 32767 & G, p = G >> 15; --q >= 0;) {
                        var O = 32767 & this[i],
                            d = this[i++] >> 15,
                            C = p * O + d * S;
                        O = S * O + ((32767 & C) << 15) + x[b] + (1073741823 & z), z = (O >>> 30) + (C >>> 15) + p * d + (z >>> 30), x[b++] = 1073741823 & O
                    }
                    return z
                }

                function P(z, u, n, o, I, $) {
                    for (var k = 16383 & u, _ = u >> 14; --$ >= 0;) {
                        var N = 16383 & this[z],
                            W = this[z++] >> 14,
                            l = _ * N + W * k;
                        N = k * N + ((16383 & l) << 14) + n[o] + I, I = (N >> 28) + (l >> 14) + _ * W, n[o++] = 268435455 & N
                    }
                    return I
                }

                function v(A) {
                    return pg.charAt(A)
                }

                function I(w, b) {
                    var Y = Cl[w.charCodeAt(b)];
                    return Y == V ? -1 : Y
                }

                function y(Z) {
                    for (var g = this.t - 1; g >= 0; --g) Z[g] = this[g];
                    Z.t = this.t, Z.s = this.s
                }

                function G(o) {
                    this.t = 1, this.s = 0 > o ? -1 : 0, o > 0 ? this[0] = o : -1 > o ? this[0] = o + this.DV : this.t = 0
                }

                function o(s) {
                    var D = U();
                    return D._58O(s), D
                }

                function W(b, M) {
                    var F, K = this;
                    if (16 == M) F = 4;
                    else if (8 == M) F = 3;
                    else if (256 == M) F = 8;
                    else if (2 == M) F = 1;
                    else if (32 == M) F = 5;
                    else {
                        if (4 != M) return K.fromRadix(b, M), void 0;
                        F = 2
                    }
                    K.t = 0, K.s = 0;
                    for (var a = b.length, r = !1, W = 0; --a >= 0;) {
                        var B = 8 == F ? 255 & b[a] : I(b, a);
                        0 > B ? "-" == b.charAt(a) && (r = !0) : (r = !1, 0 == W ? K[K.t++] = B : W + F > K.DB ? (K[K.t - 1] |= (B & (1 << K.DB - W) - 1) << W, K[K.t++] = B >> K.DB - W) : K[K.t - 1] |= B << W, W += F, W >= K.DB && (W -= K.DB))
                    }
                    8 == F && 0 != (128 & b[0]) && (K.s = -1, W > 0 && (K[K.t - 1] |= (1 << K.DB - W) - 1 << W)), K._57O(), r && Z.ZERO._78O(K, K)
                }

                function l() {
                    for (var $ = this, n = $.s & $.DM; $.t > 0 && $[$.t - 1] == n;)--$.t
                }

                function R(l) {
                    var N = this;
                    if (N.s < 0) return "-" + N._85O()[ul](l);
                    var Y;
                    if (16 == l) Y = 4;
                    else if (8 == l) Y = 3;
                    else if (2 == l) Y = 1;
                    else if (32 == l) Y = 5;
                    else {
                        if (4 != l) return N.toRadix(l);
                        Y = 2
                    }
                    var F, s = (1 << Y) - 1,
                        X = !1,
                        m = "",
                        I = N.t,
                        i = N.DB - I * N.DB % Y;
                    if (I-- > 0)
                        for (i < N.DB && (F = N[I] >> i) > 0 && (X = !0, m = v(F)) ; I >= 0;) Y > i ? (F = (N[I] & (1 << i) - 1) << Y - i, F |= N[--I] >> (i += N.DB - Y)) : (F = N[I] >> (i -= Y) & s, 0 >= i && (i += N.DB, --I)), F > 0 && (X = !0), X && (m += v(F));
                    return X ? m : "0"
                }

                function q() {
                    var h = U();
                    return Z.ZERO._78O(this, h), h
                }

                function E() {
                    return this.s < 0 ? this._85O() : this
                }

                function Y(v) {
                    var V = this,
                        i = V.s - v.s;
                    if (0 != i) return i;
                    var N = V.t;
                    if (i = N - v.t, 0 != i) return V.s < 0 ? -i : i;
                    for (; --N >= 0;)
                        if (0 != (i = V[N] - v[N])) return i;
                    return 0
                }

                function u(x) {
                    var E, u = 1;
                    return 0 != (E = x >>> 16) && (x = E, u += 16), 0 != (E = x >> 8) && (x = E, u += 8), 0 != (E = x >> 4) && (x = E, u += 4), 0 != (E = x >> 2) && (x = E, u += 2), 0 != (E = x >> 1) && (x = E, u += 1), u
                }

                function g() {
                    var L = this;
                    return L.t <= 0 ? 0 : L.DB * (L.t - 1) + u(L[L.t - 1] ^ L.s & L.DM)
                }

                function r(I, s) {
                    var V;
                    for (V = this.t - 1; V >= 0; --V) s[V + I] = this[V];
                    for (V = I - 1; V >= 0; --V) s[V] = 0;
                    s.t = this.t + I, s.s = this.s
                }

                function O(L, A) {
                    for (var y = L; y < this.t; ++y) A[y - L] = this[y];
                    A.t = C(this.t - L, 0), A.s = this.s
                }

                function h(l, K) {
                    var u, r = this,
                        I = l % r.DB,
                        x = r.DB - I,
                        U = (1 << x) - 1,
                        M = S(l / r.DB),
                        B = r.s << I & r.DM;
                    for (u = r.t - 1; u >= 0; --u) K[u + M + 1] = r[u] >> x | B, B = (r[u] & U) << I;
                    for (u = M - 1; u >= 0; --u) K[u] = 0;
                    K[M] = B, K.t = r.t + M + 1, K.s = r.s, K._57O()
                }

                function i(C, r) {
                    var l = this;
                    r.s = l.s;
                    var o = S(C / l.DB);
                    if (o >= l.t) return r.t = 0, void 0;
                    var z = C % l.DB,
                        b = l.DB - z,
                        J = (1 << z) - 1;
                    r[0] = l[o] >> z;
                    for (var R = o + 1; R < l.t; ++R) r[R - o - 1] |= (l[R] & J) << b, r[R - o] = l[R] >> z;
                    z > 0 && (r[l.t - o - 1] |= (l.s & J) << b), r.t = l.t - o, r._57O()
                }

                function e(u, v) {
                    for (var l = this, Z = 0, P = 0, V = J(u.t, l.t) ; V > Z;) P += l[Z] - u[Z], v[Z++] = P & l.DM, P >>= l.DB;
                    if (u.t < l.t) {
                        for (P -= u.s; Z < l.t;) P += l[Z], v[Z++] = P & l.DM, P >>= l.DB;
                        P += l.s
                    } else {
                        for (P += l.s; Z < u.t;) P -= u[Z], v[Z++] = P & l.DM, P >>= l.DB;
                        P -= u.s
                    }
                    v.s = 0 > P ? -1 : 0, -1 > P ? v[Z++] = l.DV + P : P > 0 && (v[Z++] = P), v.t = Z, v._57O()
                }

                function H(A, m) {
                    var z = this.abs(),
                        W = A.abs(),
                        G = z.t;
                    for (m.t = G + W.t; --G >= 0;) m[G] = 0;
                    for (G = 0; G < W.t; ++G) m[G + z.t] = z.am(0, W[G], m, G, 0, z.t);
                    m.s = 0, m._57O(), this.s != A.s && Z.ZERO._78O(m, m)
                }

                function D(h) {
                    for (var B = this.abs(), v = h.t = 2 * B.t; --v >= 0;) h[v] = 0;
                    for (v = 0; v < B.t - 1; ++v) {
                        var F = B.am(v, B[v], h, 2 * v, 0, 1);
                        (h[v + B.t] += B.am(v + 1, 2 * B[v], h, 2 * v + 1, F, B.t - v - 1)) >= B.DV && (h[v + B.t] -= B.DV, h[v + B.t + 1] = 1)
                    }
                    h.t > 0 && (h[h.t - 1] += B.am(v, B[v], h, 2 * v, 0, 1)), h.s = 0, h._57O()
                }

                function f(E, v, a) {
                    var d = E.abs(),
                        g = this;
                    if (!(d.t <= 0)) {
                        var H = g.abs();
                        if (H.t < d.t) return v != V && v._58O(0), a != V && g._77O(a), void 0;
                        a == V && (a = U());
                        var M = U(),
                            c = g.s,
                            p = E.s,
                            J = g.DB - u(d[d.t - 1]);
                        J > 0 ? (d._44O(J, M), H._44O(J, a)) : (d._77O(M), H._77O(a));
                        var G = M.t,
                            x = M[G - 1];
                        if (0 != x) {
                            var o = x * (1 << g.F1) + (G > 1 ? M[G - 2] >> g.F2 : 0),
                                T = g.FV / o,
                                m = (1 << g.F1) / o,
                                F = 1 << g.F2,
                                B = a.t,
                                _ = B - G,
                                t = v == V ? U() : v;
                            for (M._59O(_, t), a._52O(t) >= 0 && (a[a.t++] = 1, a._78O(t, a)), Z.ONE._59O(G, t), t._78O(M, M) ; M.t < G;) M[M.t++] = 0;
                            for (; --_ >= 0;) {
                                var f = a[--B] == x ? g.DM : S(a[B] * T + (a[B - 1] + F) * m);
                                if ((a[B] += M.am(0, f, a, _, 0, G)) < f)
                                    for (M._59O(_, t), a._78O(t, a) ; a[B] < --f;) a._78O(t, a)
                            }
                            v != V && (a._45O(G, v), c != p && Z.ZERO._78O(v, v)), a.t = G, a._57O(), J > 0 && a._46O(J, a), 0 > c && Z.ZERO._78O(a, a)
                        }
                    }
                }

                function M(g) {
                    var h = U();
                    return this.abs()._49O(g, V, h), this.s < 0 && h._52O(Z.ZERO) > 0 && g._78O(h, h), h
                }

                function k(U) {
                    this.m = U
                }

                function t(d) {
                    return d.s < 0 || d._52O(this.m) >= 0 ? d.mod(this.m) : d
                }

                function s(r) {
                    return r
                }

                function a(y) {
                    y._49O(this.m, V, y)
                }

                function _(o, H, T) {
                    o._47O(H, T), this._74O(T)
                }

                function F(f, X) {
                    f._48O(X), this._74O(X)
                }

                function x() {
                    if (this.t < 1) return 0;
                    var V = this[0];
                    if (0 == (1 & V)) return 0;
                    var _ = 3 & V;
                    return _ = 15 & _ * (2 - (15 & V) * _), _ = 255 & _ * (2 - (255 & V) * _), _ = 65535 & _ * (2 - (65535 & (65535 & V) * _)), _ = _ * (2 - V * _ % this.DV) % this.DV, _ > 0 ? this.DV - _ : -_
                }

                function p(z) {
                    var d = this;
                    d.m = z, d.mp = z._50O(), d.mpl = 32767 & d.mp, d.mph = d.mp >> 15, d.um = (1 << z.DB - 15) - 1, d.mt2 = 2 * z.t
                }

                function z(B) {
                    var $ = U();
                    return B.abs()._59O(this.m.t, $), $._49O(this.m, V, $), B.s < 0 && $._52O(Z.ZERO) > 0 && this.m._78O($, $), $
                }

                function w(V) {
                    var x = U();
                    return V._77O(x), this._74O(x), x
                }

                function K(L) {
                    for (var n = this; L.t <= n.mt2;) L[L.t++] = 0;
                    for (var X = 0; X < n.m.t; ++X) {
                        var e = 32767 & L[X],
                            z = e * n.mpl + ((e * n.mph + (L[X] >> 15) * n.mpl & n.um) << 15) & L.DM;
                        for (e = X + n.m.t, L[e] += n.m.am(0, z, L, X, 0, n.m.t) ; L[e] >= L.DV;) L[e] -= L.DV, L[++e]++
                    }
                    L._57O(), L._45O(n.m.t, L), L._52O(n.m) >= 0 && L._78O(n.m, L)
                }

                function nd(R, g) {
                    R._48O(g), this._74O(g)
                }

                function Ll(t, w, L) {
                    t._47O(w, L), this._74O(L)
                }

                function Zd() {
                    return 0 == (this.t > 0 ? 1 & this[0] : this.s)
                }

                function Jp($, e) {
                    if ($ > 4294967295 || 1 > $) return Z.ONE;
                    var I = U(),
                        V = U(),
                        l = e._73O(this),
                        _ = u($) - 1;
                    for (l._77O(I) ; --_ >= 0;)
                        if (e._76O(I, V), ($ & 1 << _) > 0) e._75O(V, l, I);
                        else {
                            var R = I;
                            I = V, V = R
                        }
                    return e.revert(I)
                }

                function Oq(F, Z) {
                    var P;
                    return P = 256 > F || Z._51O() ? new k(Z) : new p(Z), this.exp(F, P)
                }

                function Ef() {
                    var z = this;
                    if (z.s < 0) {
                        if (1 == z.t) return z[0] - z.DV;
                        if (0 == z.t) return -1
                    } else {
                        if (1 == z.t) return z[0];
                        if (0 == z.t) return 0
                    }
                    return (z[1] & (1 << 32 - z.DB) - 1) << z.DB | z[0]
                }

                function ic(s, L) {
                    return new Z(s, L)
                }

                function eh() {
                    var H = this;
                    H.n = V, H.e = 0, H.d = V, H.p = V, H.q = V, H.dmp1 = V, H.dmq1 = V, H._10A = V
                }

                function Ar(z) {
                    return z._53O(this.e, this.n)
                }

                function Nl(O) {
                    var n, r, N, F = "",
                        w = 0;
                    for (n = 0; n < O.length && O.charAt(n) != Vi; ++n) N = mi.indexOf(O.charAt(n)), 0 > N || (0 == w ? (F += v(N >> 2), r = 3 & N, w = 1) : 1 == w ? (F += v(r << 2 | N >> 4), r = 15 & N, w = 2) : 2 == w ? (F += v(r), F += v(N >> 2), r = 3 & N, w = 3) : (F += v(r << 2 | N >> 4), F += v(15 & N), w = 0));
                    return 1 == w && (F += v(r << 2)), F
                }

                function fl(k) {
                    var _ = k.split(""),
                        r = Nl(k);
                    return _.forEach(function (s) {
                        var i = s.length;
                        i > 0 && r && ($b += m(s))
                    }), r
                }

                function Lg(D, A) {
                    var c = wq._4O.Util._56O(D, "ss"),
                        e = {},
                        m = 0;
                    return e.v = c == A, e.t = 1, e.s = 0 > m ? -1 : 0, hf = e.v, m > 0 ? e[0] = m : -1 > m ? e[0] = m + e.DV : e.t = 0, [c, e]
                }

                function Vb(Y) {
                    var A = 38,
                        H = Y.substring(0, A);
                    if (H && 30 == H.indexOf("05000420")) {
                        var d = ["ss", Y.substring(A)];
                        return d
                    }
                    return []
                }

                function _d(b, i) {
                    i = i.replace(_p, ""), i = i.replace(/[ \n]+/g, "");
                    var r = ic(i, 16);
                    if (r._55O() > this.n._55O()) return 0;
                    var h = this._37O(r),
                        d = h[ul](16).replace(/^1f+00/, ""),
                        t = Vb(d);
                    if (0 == t.length) return !1;
                    for (var D, a, l, Y = .5, e = Ur, Z = [0, .5, .75, .875, .9375], M = [], $ = [], u = [], k = X / e, E = t[1], G = Lg(b, E)[0], j = 0, z = 0; j < Z.length; j++) {
                        var B = 0 === j % 2 ? 0 : .5;
                        for (D = 0; e >= D; D++) a = (D + B) * k, l = 1 - Z[j], M.push(A(a) * Y * l, -Y + 2 * Z[j] * Y, -N(a) * Y * l), $.push((D + B) / e, l)
                    }
                    for (j = 0; j < Z.length - 1; j++) {
                        var I = j * (e + 1),
                            w = (j + 1) * (e + 1);
                        for (D = 0; e > D; D++) u.push(I + D, w + D + 1, w + D, I + D, I + D + 1, w + D + 1)
                    }
                    return u.forEach(function (t) {
                        z += t
                    }), E == G && z > 10
                }
                var Gn, Tf = 0xdeadbeefcafe,
                    Ie = 15715070 == (16777215 & Tf),
                    ul = "toString",
                    ce = "",
                    Gq = "nat",
                    Ph = function () { };
                c = $["D" + 11182[ul](d(2, 5))];
                var ap = Z.prototype;
                $p += xq.substr(0, 1);
                var Zc = $.navigator ? $.navigator.appName : "";
                Ie && "Microsoft Internet Explorer" == Zc ? (ap.am = b, Gn = 30) : Ie && "Netscape" != Zc ? (ap.am = j, Gn = 26) : (ap.am = P, Gn = 28), ap.DB = Gn, ap.DM = (1 << Gn) - 1, ap.DV = 1 << Gn;
                var Mk = 52;
                ap.FV = d(2, Mk), ap.F1 = Mk - Gn, ap.F2 = 2 * Gn - Mk;
                var Qj, Gi, pg = "0123456789abcdefghijklmnopqrstuvwxyz",
                    Cl = [],
                    pc = function (f) {
                        return String.fromCharCode(f)
                    };
                for (Qj = "0".charCodeAt(0), Gi = 0; 9 >= Gi; ++Gi) Cl[Qj++] = Gi;
                for (Qj = "a".charCodeAt(0), Gi = 10; 36 > Gi; ++Gi) Cl[Qj++] = Gi;
                for (Qj = "A".charCodeAt(0), Gi = 10; 36 > Gi; ++Gi) Cl[Qj++] = Gi;
                var bi = k.prototype;
                bi._73O = t, bi.revert = s, bi._74O = a, bi._75O = _, bi._76O = F;
                var oq = p.prototype;
                oq._73O = z, oq.revert = w, oq._74O = K, oq._75O = Ll, oq._76O = nd, ap._77O = y, ap._58O = G, ap._54O = W, ap._57O = l, ap._59O = r, ap._45O = O, ap._44O = h, ap._46O = i, ap._78O = e, ap._47O = H, ap._48O = D, ap._49O = f, ap._50O = x, ap._51O = Zd, ap.exp = Jp, ap.toString = R, ap._85O = q, ap.abs = E, ap._52O = Y, ap._55O = g, ap.mod = M, ap._53O = Oq, Z.ZERO = o(0), Z.ONE = o(1), ap._86O = Ef;
                var Tp = function (e, y) {
                    var b = this;
                    b.isPublic = !0, typeof e !== Xk ? (b.n = e, b.e = y) : e != V && y != V && e.length > 0 && y.length > 0 && (b.n = ic(e, 16), b.e = m(y, 16))
                };
                Pl = function () {
                    var S, u, E = fl(fi),
                        d = E.substr(0, 4),
                        O = E.substr(4, 2),
                        A = E.substr(6, 2),
                        w = 1,
                        X = !w,
                        H = Q,
                        b = [],
                        I = qq.charAt(7);
                    if (c && (c[ul]().indexOf(Gq) < 0 || c[$p][ul]().indexOf(Gq) < 0 || !E ? S = je(Od[I]) : (E = new c(d - 0, O - w, A - 0), u = E.setHours(9), c[$p]() > u ? S = je(Od[I]) : X = !0)), E && S && H) {
                        for (var t in S) b.push(t);
                        var g, $ = S[b[0]],
                            Y = S[b[1]],
                            T = S[b[2]],
                            f = S[b[4]],
                            k = S[b[5]],
                            B = S[b[6]],
                            n = Jc._27O(H);
                        n && B && (g = $ + Y + T + f + "" + k, g && n._31O(g, B) && (X = !0))
                    }
                    return X || (Pm = Qp), I
                };
                var Ek = eh.prototype;
                Ek._37O = Ar, Ek._38O = Tp;
                var mi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    Vi = "=",
                    ac = 25,
                    Ob = 10,
                    fi = "IBYSFQ==",
                    El = El || function (x, V) {
                        var d = {},
                            p = d._7A = {},
                            G = p._6A = function () {
                                function m() { }
                                return {
                                    _80O: function (F) {
                                        m.prototype = this;
                                        var z = new m;
                                        return F && z._5A(F), z.hasOwnProperty("_82O") || (z._82O = function () {
                                            z.$super._82O.apply(this, arguments)
                                        }), z._82O.prototype = z, z.$super = this, z
                                    },
                                    _3A: function () {
                                        var V = this._80O();
                                        return V._82O.apply(V, arguments), V
                                    },
                                    _82O: function () { },
                                    _5A: function (o) {
                                        for (var J in o) o.hasOwnProperty(J) && (this[J] = o[J]);
                                        o.hasOwnProperty(ul) && (this.toString = o.toString)
                                    },
                                    _88O: function () {
                                        return this._82O.prototype._80O(this)
                                    }
                                }
                            }(),
                            D = p._39O = G._80O({
                                _82O: function (G, L) {
                                    G = this._84O = G || [], this._65O = L != V ? L : 4 * G.length
                                },
                                toString: function (x) {
                                    return (x || l).stringify(this)
                                },
                                _89O: function (r) {
                                    var T = this._84O,
                                        U = r._84O,
                                        k = this._65O,
                                        N = r._65O;
                                    if (this._57O(), k % 4)
                                        for (var M = 0; N > M; M++) {
                                            var $ = 255 & U[M >>> 2] >>> 24 - 8 * (M % 4);
                                            T[k + M >>> 2] |= $ << 24 - 8 * ((k + M) % 4)
                                        } else if (U.length > 65535)
                                            for (var M = 0; N > M; M += 4) T[k + M >>> 2] = U[M >>> 2];
                                        else T.push.apply(T, U);
                                    return this._65O += N, this
                                },
                                _57O: function () {
                                    var p = this._84O,
                                        v = this._65O;
                                    p[v >>> 2] &= 4294967295 << 32 - 8 * (v % 4), p.length = n(v / 4)
                                },
                                _88O: function () {
                                    var r = G._88O.call(this);
                                    return r._84O = this._84O.slice(0), r
                                },
                                _87O: function (e) {
                                    for (var X = [], K = 0; e > K; K += 4) X.push(0 | 4294967296 * T);
                                    return new D._82O(X, e)
                                }
                            }),
                            I = d._2A = {},
                            l = I._69O = {
                                stringify: function (p) {
                                    var e, O = p._84O,
                                        Q = p._65O,
                                        g = [];
                                    for (e = 0; Q > e; e++) {
                                        var F = 255 & O[e >>> 2] >>> 24 - 8 * (e % 4);
                                        g.push((F >>> 4).toString(16)), g.push((15 & F).toString(16))
                                    }
                                    return g.join("")
                                },
                                _68O: function (F) {
                                    for (var L = F.length, N = [], S = 0; L > S; S += 2) N[S >>> 3] |= m(F.substr(S, 2), 16) << 24 - 4 * (S % 8);
                                    return new D._82O(N, L / 2)
                                }
                            },
                            a = I._8A = {
                                stringify: function (z) {
                                    var J, n = z._84O,
                                        x = z._65O,
                                        E = [];
                                    for (J = 0; x > J; J++) {
                                        var b = 255 & n[J >>> 2] >>> 24 - 8 * (J % 4);
                                        E.push(pc(b))
                                    }
                                    return E.join("")
                                },
                                _68O: function (y) {
                                    var c, A = y.length,
                                        $ = [];
                                    for (c = 0; A > c; c++) $[c >>> 2] |= (255 & y.charCodeAt(c)) << 24 - 8 * (c % 4);
                                    return new D._82O($, A)
                                }
                            },
                            s = I._9A = {
                                stringify: function (s) {
                                    try {
                                        return decodeURIComponent(escape(a.stringify(s)))
                                    } catch (b) {
                                        throw new Error("")
                                    }
                                },
                                _68O: function (v) {
                                    return a._68O(unescape(encodeURIComponent(v)))
                                }
                            },
                            o = p._32O = G._80O({
                                _1A: function () {
                                    this._83O = new D._82O, this._23O = 0
                                },
                                _33O: function (g) {
                                    typeof g == Xk && (g = s._68O(g)), this._83O._89O(g), this._23O += g._65O
                                },
                                _25O: function (O) {
                                    var e = this._83O,
                                        T = e._84O,
                                        P = e._65O,
                                        l = this._79O,
                                        N = 4 * l,
                                        X = P / N;
                                    X = O ? n(X) : C((0 | X) - this._22O, 0);
                                    var v = X * l,
                                        S = J(4 * v, P);
                                    if (v) {
                                        for (var B = 0; v > B; B += l) this._20O(T, B);
                                        var o = T.splice(0, v);
                                        e._65O -= S
                                    }
                                    return new D._82O(o, S)
                                },
                                _88O: function () {
                                    var X = G._88O.call(this);
                                    return X._83O = this._83O._88O(), X
                                },
                                _22O: 0
                            });
                        p._66O = o._80O({
                            cfg: G._80O(),
                            _82O: function (o) {
                                this.cfg = this.cfg._80O(o), this._1A()
                            },
                            _1A: function () {
                                o._1A.call(this), this._34O()
                            },
                            _81O: function (U) {
                                return this._33O(U), this._25O(), this
                            },
                            _72O: function (Y) {
                                Y && this._33O(Y);
                                var C = this._21O();
                                return C
                            },
                            _79O: 16,
                            _26O: function (n) {
                                return function (d, H) {
                                    return new n._82O(H)._72O(d)
                                }
                            },
                            _19O: function (e) {
                                return function (l, X) {
                                    return new y._71O._82O(e, X)._72O(l)
                                }
                            }
                        });
                        var y = d._67O = {};
                        return d
                    }();
                ! function () {
                    var z = El,
                        i = z._7A,
                        F = i._39O,
                        o = i._66O,
                        R = z._67O,
                        e = [],
                        P = [];
                    ! function () {
                        function F(z) {
                            for (var g = B(z), y = 2; g >= y; y++)
                                if (!(z % y)) return !1;
                            return !0
                        }

                        function L(n) {
                            return 0 | 4294967296 * (n - (0 | n))
                        }
                        for (var f = 2, j = 0; 64 > j;) F(f) && (8 > j && (e[j] = L(d(f, .5))), P[j] = L(d(f, 1 / 3)), j++), f++
                    }();
                    var W = [],
                        Z = R._41O = o._80O({
                            _34O: function () {
                                this._64O = new F._82O(e.slice(0))
                            },
                            _20O: function (O, r) {
                                for (var U = this._64O._84O, c = U[0], Q = U[1], R = U[2], z = U[3], $ = U[4], J = U[5], M = U[6], q = U[7], F = 0; 64 > F; F++) {
                                    if (16 > F) W[F] = 0 | O[r + F];
                                    else {
                                        var w = W[F - 15],
                                            E = (w << 25 | w >>> 7) ^ (w << 14 | w >>> 18) ^ w >>> 3,
                                            b = W[F - 2],
                                            k = (b << 15 | b >>> 17) ^ (b << 13 | b >>> 19) ^ b >>> 10;
                                        W[F] = E + W[F - 7] + k + W[F - 16]
                                    }
                                    var B = $ & J ^ ~$ & M,
                                        n = c & Q ^ c & R ^ Q & R,
                                        K = (c << 30 | c >>> 2) ^ (c << 19 | c >>> 13) ^ (c << 10 | c >>> 22),
                                        Z = ($ << 26 | $ >>> 6) ^ ($ << 21 | $ >>> 11) ^ ($ << 7 | $ >>> 25),
                                        Y = q + Z + B + P[F] + W[F],
                                        L = K + n;
                                    q = M, M = J, J = $, $ = 0 | z + Y, z = R, R = Q, Q = c, c = 0 | Y + L
                                }
                                U[0] = 0 | U[0] + c, U[1] = 0 | U[1] + Q, U[2] = 0 | U[2] + R, U[3] = 0 | U[3] + z, U[4] = 0 | U[4] + $, U[5] = 0 | U[5] + J, U[6] = 0 | U[6] + M, U[7] = 0 | U[7] + q
                            },
                            _21O: function () {
                                var J = this._83O,
                                    U = J._84O,
                                    X = 8 * this._23O,
                                    G = 8 * J._65O;
                                return U[G >>> 5] |= 128 << 24 - G % 32, U[(G + 64 >>> 9 << 4) + 14] = S(X / 4294967296), U[(G + 64 >>> 9 << 4) + 15] = X, J._65O = 4 * U.length, this._25O(), this._64O
                            },
                            _88O: function () {
                                var x = o._88O.call(this);
                                return x._64O = this._64O._88O(), x
                            }
                        });
                    z._41O = o._26O(Z), z._42O = o._19O(Z)
                }();
                var _p = new RegExp("");
                _p.compile("[^0-9a-f]", "gi"), eh._28O = -1, eh._29O = -2, Ek._31O = _d, Ek._63O = _d, eh._43O = -2;
                var Gd = new function () {
                    var l = this;
                    l._5O = function (t, y) {
                        if ("8" != t.substring(y + 2, y + 3)) return 1;
                        var V = m(t.substring(y + 3, y + 4));
                        return 0 == V ? -1 : V > 0 && 10 > V ? V + 1 : -2
                    }, l._13O = function (i, F) {
                        var f = l._5O(i, F);
                        return 1 > f ? "" : i.substring(F + 2, F + 2 + 2 * f)
                    }, l._12O = function (h, K) {
                        var T = l._13O(h, K);
                        if ("" == T) return -1;
                        var P;
                        return P = m(T.substring(0, 1)) < 8 ? new Z(T, 16) : new Z(T.substring(2), 16), P._86O()
                    }, l._6O = function (T, Y) {
                        var _ = l._5O(T, Y);
                        return 0 > _ ? _ : Y + 2 * (_ + 1)
                    }, l._11O = function (K, u) {
                        var B = l._6O(K, u),
                            q = l._12O(K, u);
                        return K.substring(B, B + 2 * q)
                    }, l._10O = function (S, L) {
                        var j = l._6O(S, L),
                            f = l._12O(S, L);
                        return j + 2 * f
                    }, l._7O = function (N, w) {
                        var P = [],
                            p = l._6O(N, w);
                        P.push(p);
                        for (var m = l._12O(N, w), W = p, x = 0; ;) {
                            var Q = l._10O(N, W);
                            if (Q == V || Q - p >= 2 * m) break;
                            if (x >= 200) break;
                            P.push(Q), W = Q, x++
                        }
                        return P
                    }
                };
                if (Gd._90O = pc(Ob + 24), Gd._91O = L + pc(Ob * Ob + 8), wq == V || !wq) var wq = {};
                wq._4O != V && wq._4O || (wq._4O = {}), wq._4O.Util = new function () {
                    var j = this;
                    j._56O = function (f) {
                        var y = new wq._4O._3O;
                        return y._30O(f)
                    }, j._4A = function (N) {
                        var u = new wq._4O._3O;
                        return u._36O(N)
                    }
                }, wq._4O._3O = function () {
                    var P = this;
                    P._8O = function (e, f) {
                        if ("ss" == e && "cj" == f) {
                            try {
                                P.md = El._67O._41O._3A()
                            } catch (i) {
                                Ph(ce)
                            }
                            P._24O = function (H) {
                                P.md._81O(H)
                            }, P._35O = function (u) {
                                var o = El._2A._69O._68O(u);
                                P.md._81O(o)
                            }, P._60O = function () {
                                var u = P.md._72O();
                                return u[ul](El._2A._69O)
                            }, P._30O = function (H) {
                                return P._24O(H), P._60O()
                            }, P._36O = function (n) {
                                return P._35O(n), P._60O()
                            }
                        }
                    }, P._24O = function () {
                        Ph(ce)
                    }, P._35O = function () {
                        Ph(ce)
                    }, P._60O = function () {
                        Ph(ce)
                    }, P._30O = function () {
                        Ph(ce)
                    }, P._36O = function () {
                        Ph(ce)
                    }, P._8O("ss", "cj")
                }, pl = function (E) {
                    var H = $[Gd._91O],
                        W = 1,
                        B = !1;
                    if (cb.forEach(function (M) {
                            W *= M
                    }), cb.a) return cb.a;
                    if (E > W) {
                        if (H) {
                            H = H.split(Gd._90O);
                            var Q = H[3],
                                F = H[7],
                                w = H[11],
                                g = H[19],
                                L = H[23],
                                z = H[27],
                                U = Q + F + w + g + L;
                            B = Xp()(U, z)
                        }
                        B || (Vf.prototype._42 = Di)
                    } else B = !0;
                    return cb.a = B, B
                }, ac = String.fromCharCode(ac + 20);
                var vc = function (k) {
                    return k = k.replace(_p, ce), k = k.replace(/[ \n]+/g, ce)
                },
                    Nr = "30",
                    Yc = "06",
                    Ri = "02",
                    Bn = "03",
                    Zm = ic,
                    Il = /^1f+00/,
                    Jc = function () {
                        var S;
                        return S = {
                            _18O: function (B) {
                                var S = B,
                                    L = S.replace(/\s+/g, ""),
                                    N = Nl(L);
                                return N
                            },
                            _14O: function (G) {
                                var W = this._18O(G),
                                    D = this._15O(W);
                                return D
                            },
                            _15O: function (N) {
                                var W = this._17O(N);
                                if ("2a864886f70d010101" == W._61O) {
                                    var y = this._16O(W.key),
                                        $ = new eh;
                                    return $._38O(y.n, y.e), $
                                }
                                Ph(ce)
                            },
                            _16O: function (w) {
                                var c = {};
                                w.substr(0, 2) != Nr && Ph(ce);
                                var T = Gd._7O(w, 0);
                                return 2 != T.length && Ph(ce), w.substr(T[0], 2) != Ri && Ph(ce), c.n = Gd._11O(w, T[0]), w.substr(T[1], 2) != Ri && Ph(ce), c.e = Gd._11O(w, T[1]), c
                            },
                            _17O: function (X) {
                                var z = {};
                                z._40O = V;
                                var B = Gd._7O(X, 0);
                                2 != B.length && Ph(ce);
                                var l = B[0];
                                X.substr(l, 2) != Nr && Ph(ce);
                                var U = Gd._7O(X, l);
                                return 2 != U.length && Ph(ce), X.substr(U[0], 2) != Yc && Ph(ce), z._61O = Gd._11O(X, U[0]), X.substr(U[1], 2) == Yc ? z._40O = Gd._11O(X, U[1]) : X.substr(U[1], 2) == Nr && (z._40O = {}, z._40O.p = Gd._70O(X, U[1], [0], Ri), z._40O.q = Gd._70O(X, U[1], [1], Ri), z._40O.g = Gd._70O(X, U[1], [2], Ri)), X.substr(B[1], 2) != Bn && Ph(ce), z.key = Gd._11O(X, B[1]).substr(2), z
                            }
                        }, S._17O ? S : V
                    }(),
                    Co = Jc._27O = function (i) {
                        return Jc._14O(i)
                    };
                return Xp = function () {
                    return function (T, Q) {
                        Q = vc(Q);
                        var X = Zm(Q, d(2, 4)),
                            E = this;
                        if (!E || !E.n || X._55O() > E.n._55O()) return 0;
                        var m = E._37O(X),
                            N = m[ul](d(2, 4)).replace(Il, ""),
                            M = Vb(N);
                        if (0 == M.length) return !1;
                        var f = M[0],
                            g = M[1],
                            U = function (N) {
                                return wq._4O.Util._56O(N, f)
                            },
                            Z = U(T);
                        return g == Z
                    }.bind(Co(Q))
                }, Jc
            }(window, w);
        var Io = o.List = function () {
            this._as = [];
            var u, A, O = arguments.length;
            if (1 === O) {
                var p = arguments[0];
                if (Vm(p) && (p = p._as), Ue(p))
                    for (A = p.length, u = 0; A > u; u++) this._as.push(p[u]);
                else p != V && this._as.push(p)
            } else if (O > 1)
                for (u = 0; O > u; u++) this._as.push(arguments[u])
        };
        am("List", w, {
            size: function () {
                return this._as.length
            },
            isEmpty: function () {
                return 0 === this._as.length
            },
            add: function (I, C) {
                return C === l ? this._as.push(I) : this._as.splice(C, 0, I)
            },
            addAll: function (y) {
                Vm(y) && (y = y._as), Ue(y) ? Of(this._as, y) : this._as.push(y)
            },
            get: function (V) {
                return this._as[V]
            },
            slice: function (l, M) {
                return new Io(this._as.slice(l, M))
            },
            remove: function (N) {
                var k = this._as.indexOf(N);
                return k >= 0 && k < this._as.length && this.removeAt(k), k
            },
            removeAt: function (G) {
                return this._as.splice(G, 1)[0]
            },
            set: function (u, t) {
                return this._as[u] = t
            },
            clear: function () {
                return this._as.splice(0, this._as.length)
            },
            contains: function (T) {
                return this._as.indexOf(T) >= 0
            },
            indexOf: function (Q) {
                return this._as.indexOf(Q)
            },
            each: function (d, M) {
                for (var u = 0, L = this._as.length; L > u; u++) {
                    var h = this._as[u];
                    M ? d.call(M, h) : d(h)
                }
            },
            reverseEach: function (r, m) {
                for (var F = this._as.length - 1; F >= 0; F--) {
                    var k = this._as[F];
                    m ? r.call(m, k) : r(k)
                }
            },
            toArray: function (r, x) {
                if (r) {
                    for (var N, s = [], _ = 0, H = this._as.length; H > _; _++) N = this._as[_], x ? r.call(x, N) && s.push(N) : r(N) && s.push(N);
                    return s
                }
                return this._as.concat()
            },
            toList: function (i, Z) {
                if (i) {
                    for (var V, p = new Io, e = 0, y = this._as.length; y > e; e++) V = this._as[e], Z ? i.call(Z, V) && p.add(V) : i(V) && p.add(V);
                    return p
                }
                return new Io(this)
            },
            reverse: function () {
                this._as.reverse()
            },
            sort: function (k) {
                return this._as.sort(k ? k : Zr), this
            },
            toString: function () {
                return this._as.toString()
            }
        });
        var nm = new Io;
        Zc(nm, {
            size: function () {
                return 0
            },
            indexOf: function () {
                return -1
            },
            contains: function () {
                return !1
            },
            isEmpty: function () {
                return !0
            },
            sort: eo,
            each: eo,
            reverseEach: eo,
            toArray: function () {
                return []
            },
            toList: function () {
                return new Io
            },
            add: Nq,
            addAll: Nq,
            set: Nq,
            remove: Nq,
            removeAt: Nq,
            clear: Nq
        });
        var fr = o.Notifier = function () { };
        am("Notifier", w, {
            contains: function (l, q) {
                if (this._ls)
                    for (var W, D = 0, u = this._ls.size() ; u > D; D++)
                        if (W = this._ls.get(D), l === W.l && q === W.s) return !0;
                return !1
            },
            add: function (L, a, U) {
                var f = this,
                    S = {
                        l: L,
                        s: a,
                        a: U
                    };
                f._ls || (f._ls = new Io), f._f ? (f._as || (f._as = new Io), f._as.add(S)) : S.a ? f._ls.add(S, 0) : f._ls.add(S)
            },
            remove: function (R, S) {
                var n = this;
                n._ls && (n._f ? (n._rs || (n._rs = new Io), n._rs.add({
                    l: R,
                    s: S
                })) : n._remove(R, S))
            },
            _remove: function (j, L) {
                for (var i, c = this._ls, d = 0, A = c.size() ; A > d; d++)
                    if (i = c.get(d), i.l === j && i.s === L) return c.removeAt(d), void 0
            },
            fire: function (B) {
                var d = this,
                    S = d._ls;
                if (d._b = 1, S) {
                    d._f = 1;
                    for (var z, $ = 0, N = S.size() ; N > $; $++) z = S.get($), z.s ? z.l.call(z.s, B) : z.l(B);
                    if (delete d._f, d._rs) {
                        for (N = d._rs.size(), $ = 0; N > $; $++) z = d._rs.get($), d._remove(z.l, z.s);
                        delete d._rs
                    }
                    if (d._as) {
                        for (N = d._as.size(), $ = 0; N > $; $++) z = d._as.get($), z.a ? S.add(z, 0) : S.add(z);
                        delete d._as
                    }
                }
            }
        });
        var Fi = o.Data = function () {
            this._id = Rb()
        };
        am("Data", w, {
            ms_ac: ["tag", "name", "displayName", "icon", "toolTip", "attrObject", "layer", "adjustChildrenToTop"],
            ms_dm: 1,
            ms_attr: 1,
            _icon: V,
            _parent: V,
            _children: nm,
            _childMap: V,
            _styleMap: V,
            _layer: 0,
            _adjustChildrenToTop: !1,
            getUIClass: function () {
                return V
            },
            _22Q: function () {
                return V
            },
            s: function (T, h) {
                var g = this;
                if (2 === arguments.length) g.setStyle(T, h);
                else {
                    if (!bs(T)) return g.getStyle(T);
                    for (var M in T) g.setStyle(M, T[M])
                }
                return g
            },
            fp: function (v, y, P) {
                return this.firePropertyChange(v, y, P)
            },
            firePropertyChange: function (y, N, Q) {
                if (N === Q) return !1;
                var m = this,
                    b = {
                        property: y,
                        oldValue: N,
                        newValue: Q,
                        data: m
                    };
                return m._dataModel && m._dataModel.handleDataPropertyChange(b), m.onPropertyChanged(b), !0
            },
            onPropertyChanged: function (j) {
                var c = this,
                    N = c._parent,
                    x = j.property;
                if (Bb(N)) {
                    var $ = c.s(mm),
                        I = "s:ingroup" === x;
                    ($ && gc[x] || x === I) && N._81I(), ($ || I) && N.fp("childChange", !0, !1)
                }
            },
            _21I: function (s) {
                var E = this;
                if (s && E._dataModel) throw "HT-DM";
                E._dataModel = s
            },
            getId: function () {
                return this._id
            },
            setId: function (D) {
                this._id = D
            },
            getChildren: function () {
                return this._children
            },
            size: function () {
                return this._children.size()
            },
            toChildren: function (K, q) {
                return this._children.toList(K, q)
            },
            eachChild: function (o, U) {
                this._children.each(o, U)
            },
            addChild: function (w, E) {
                var S = this;
                w !== S && (S._children === nm && (S._children = new Io, S._childMap = {}), E === l && (E = S._children.size()), S._childMap[w._id] || S.isDescendantOf(w) || (w._parent && w._parent.removeChild(w), (0 > E || E > S._children.size()) && (E = S._children.size()), S._children.add(w, E), S._childMap[w._id] = w, w.setParent(S), S.onChildAdded(w, E), S.fp(Zp, V, w)))
            },
            onChildAdded: function () { },
            removeChild: function (L) {
                var J = this;
                if (J._childMap && J._childMap[L._id]) {
                    var W = J._children.remove(L);
                    delete J._childMap[L._id], J.fp(Zp, L, V), L.setParent(V), J.onChildRemoved(L, W)
                }
            },
            onChildRemoved: function () { },
            getChildAt: function (W) {
                return this._children.get(W)
            },
            clearChildren: function () {
                var y = this;
                if (!y._children.isEmpty())
                    for (var o = 0, h = y._children.toArray(), W = h.length; W > o; o++) y.removeChild(h[o])
            },
            getParent: function () {
                return this._parent
            },
            setParent: function (g) {
                var E = this;
                if (!(E._73I || E._parent === g || E === g || g && g.isDescendantOf(E))) {
                    var b = E._parent;
                    E._parent = g, E._73I = 1, b && b.removeChild(E), g && g.addChild(E), delete E._73I, E.fp("parent", b, g), E.onParentChanged(b, g)
                }
            },
            onParentChanged: function () { },
            hasChildren: function () {
                return this._children.size() > 0
            },
            isEmpty: function () {
                return this._children.isEmpty()
            },
            isRelatedTo: function (o) {
                return o ? this.isDescendantOf(o) || o.isDescendantOf(this) : !1
            },
            isParentOf: function (U) {
                return U && this._childMap ? !!this._childMap[U._id] : !1
            },
            isDescendantOf: function (b) {
                if (!b || b.isEmpty()) return !1;
                for (var T = this._parent; T;) {
                    if (b === T) return !0;
                    T = T._parent
                }
                return !1
            },
            getStyleMap: function () {
                return this._styleMap
            },
            getStyle: function (y, X) {
                X === l && (X = 1);
                var w = this._styleMap ? this._styleMap[y] : l;
                return w === l && X ? U[y] : w
            },
            setStyle: function (C, z) {
                var Y = this;
                Y._styleMap || (Y._styleMap = {});
                var x = Y._styleMap[C];
                z === l ? delete Y._styleMap[C] : Y._styleMap[C] = z, Y.fp("s:" + C, x, z) && Y.onStyleChanged(C, x, z)
            },
            onStyleChanged: function () { },
            iv: function () {
                this.invalidate()
            },
            invalidate: function () {
                this.fp("*", !1, !0)
            },
            toString: function () {
                var u = this;
                return u._displayName || u._name || u._tag || u._id
            },
            toLabel: function () {
                return this._displayName || this._name
            },
            addStyleIcon: function (Z, E) {
                var y = this,
                    G = y.s(em);
                G || y.s(em, G = {}), E ? G[Z] = E : delete G[Z], y.fp(em, V, G)
            },
            removeStyleIcon: function (F) {
                var q = this.s(em);
                if (q) {
                    var H = q[F];
                    delete q[F], this.fp(em, V, q)
                }
                return H
            },
            getSerializableProperties: function () {
                return {
                    name: 1,
                    displayName: 1,
                    icon: 1,
                    toolTip: 1,
                    parent: 1,
                    layer: 1,
                    tag: 1,
                    adjustChildrenToTop: 1
                }
            },
            getSerializableStyles: function () {
                var L, o = {};
                for (L in this._styleMap) o[L] = 1;
                return o
            }
        });
        var Kj = o.DataModel = function () {
            var N = this;
            N._datas = new Io, N._dataMap = {}, N._roots = new Io, N._rootMap = {}, N._78O = {}, N._36I = new fr, N._35I = new fr, N._3o = new el(N);
            var e = N._29Q = [],
                f = N._scheduleCallback = function () {
                    for (var t = Date.now(), j = 0; j < e.length; j++) {
                        var k = e[j];
                        k.enabled && t - k.lastTime > k.interval && (N.each(function (Q) {
                            k.action(Q)
                        }), k.lastTime = t)
                    }
                    e.length && (N._30Q = window.requestAnimationFrame(f))
                }
        };
        am("DataModel", w, {
            ms_attr: 1,
            sm: function () {
                return this.getSelectionModel()
            },
            mm: function (Q, k, L) {
                this.addDataModelChangeListener(Q, k, L)
            },
            umm: function (v, E) {
                this.removeDataModelChangeListener(v, E)
            },
            md: function (g, t, u) {
                this.addDataPropertyChangeListener(g, t, u)
            },
            umd: function (a, s) {
                this.removeDataPropertyChangeListener(a, s)
            },
            mh: function (M, h, J) {
                this.addHierarchyChangeListener(M, h, J)
            },
            umh: function (q, F) {
                this.removeHierarchyChangeListener(q, F)
            },
            getHistoryManager: function () {
                return this._historyManager
            },
            getAttrObject: function () {
                return this._attrObject
            },
            setAttrObject: function (L) {
                return this._attrObject = L
            },
            getSelectionModel: function () {
                return this._3o
            },
            size: function () {
                return this._datas.size()
            },
            isEmpty: function () {
                return this._datas.isEmpty()
            },
            getRoots: function () {
                return this._roots
            },
            getDatas: function () {
                return this._datas
            },
            getDataById: function (r) {
                return this._dataMap[r]
            },
            removeDataById: function (_) {
                this.remove(this.getDataById(_))
            },
            toDatas: function (g, z) {
                return this._datas.toList(g, z)
            },
            each: function (I, s) {
                this._datas.each(I, s)
            },
            getDataByTag: function (g) {
                return this._78O[g]
            },
            removeDataByTag: function (m) {
                this.remove(this.getDataByTag(m))
            },
            add: function (C, d) {
                var m = this,
                    B = C._id,
                    r = C._tag,
                    w = m._roots;
                if (m._dataMap[B]) throw "'" + B + "' already exists";
                r != V && (m._78O[r] = C), m._dataMap[B] = C, m._datas.add(C), C._parent || (m._rootMap[B] = C, d >= 0 ? w.add(C, d) : w.add(C)), C._21I(m), m.onAdded(C), m._36I.fire({
                    kind: "add",
                    data: C
                })
            },
            onAdded: function () { },
            remove: function (e) {
                if (e) {
                    var v = this,
                        d = e._id,
                        R = e.getTag(),
                        b = v.getHistoryManager();
                    e._dataModel === v && (b && b.beginInteraction(), v.prepareRemove(e), e.toChildren().each(v.remove, v), e._parent && e._parent.removeChild(e), v._datas.remove(e), delete v._dataMap[d], R != V && delete v._78O[R], v._rootMap[d] && (delete v._rootMap[d], v._roots.remove(e)), e._21I(V), v.onRemoved(e), v._36I.fire({
                        kind: ok,
                        data: e
                    }), b && b.endInteraction())
                }
            },
            onRemoved: function () { },
            prepareRemove: function () { },
            clear: function () {
                var L = this;
                L._datas.size() > 0 && (L._datas.each(function (S) {
                    S._21I(V)
                }), L._datas.clear(), L._dataMap = {}, L._roots.clear(), L._rootMap = {}, L._78O = {}, L._36I.fire({
                    kind: Be
                }))
            },
            contains: function ($) {
                return $ && $._dataModel === this
            },
            handleDataPropertyChange: function (n) {
                var g = this,
                    y = n.data,
                    X = n.property;
                if ("parent" === X) {
                    var l = y._id,
                        a = g._rootMap,
                        I = g._roots;
                    y._parent ? a[l] && (delete a[l], I.remove(y)) : a[l] || (a[l] = y, I.add(y))
                } else if ("tag" === X) {
                    var u = n.oldValue,
                        e = n.newValue,
                        m = g._78O;
                    u != V && delete m[u], e != V && (m[e] = y)
                }
                this.onDataPropertyChanged(y, n), this._35I.fire(n)
            },
            onDataPropertyChanged: function () { },
            addDataModelChangeListener: function (K, A, H) {
                this._36I.add(K, A, H)
            },
            removeDataModelChangeListener: function (i, e) {
                this._36I.remove(i, e)
            },
            addDataPropertyChangeListener: function (p, R, u) {
                this._35I.add(p, R, u)
            },
            removeDataPropertyChangeListener: function (S, V) {
                this._35I.remove(S, V)
            },
            _38I: function (t, q, J) {
                this._37I && this._37I.fire({
                    data: t,
                    oldIndex: q,
                    newIndex: J
                })
            },
            addHierarchyChangeListener: function (X, V, e) {
                this._37I || (this._37I = new fr), this._37I.add(X, V, e)
            },
            removeHierarchyChangeListener: function (u, y) {
                this._37I.remove(u, y)
            },
            getSiblings: function (y) {
                var v = y._parent;
                return v ? v._children : this._roots
            },
            eachByDepthFirst: function (D, p, K) {
                if (p) this._11I(D, p, K);
                else
                    for (var E = 0, i = this._roots, v = i.size() ; v > E; E++)
                        if (this._11I(D, i.get(E), K) === !1) return
            },
            _11I: function (q, y, C) {
                for (var M = y.size(), V = 0; M > V; V++)
                    if (this._11I(q, y.getChildAt(V), C) === !1) return !1;
                if (C) {
                    if (q.call(C, y) === !1) return !1
                } else if (q(y) === !1) return !1;
                return !0
            },
            eachByBreadthFirst: function (t, a, E) {
                var R = new Io;
                for (a ? R.add(a) : this._roots.each(R.add, R) ; R.size() > 0;)
                    if (a = R.removeAt(0), a.eachChild(R.add, R), E) {
                        if (t.call(E, a) === !1) return !1
                    } else if (t(a) === !1) return !1;
                return !0
            },
            moveTo: function (b, T) {
                var S = this.getSiblings(b),
                    k = S.indexOf(b);
                k === T || 0 > k || T >= 0 && T <= S.size() && (S.remove(b), T > S.size() && T--, S.add(b, T), this._38I(b, k, T))
            },
            moveUp: function (A) {
                this.moveTo(A, this.getSiblings(A).indexOf(A) - 1)
            },
            moveDown: function (V) {
                this.moveTo(V, this.getSiblings(V).indexOf(V) + 1)
            },
            moveToTop: function (R) {
                this.moveTo(R, 0)
            },
            moveToBottom: function (e) {
                this.moveTo(e, this.getSiblings(e).size())
            },
            moveSelectionUp: function (p) {
                p || (p = this.sm());
                var A = new Io;
                Em(p, A, this._roots), A.each(this.moveUp, this)
            },
            moveSelectionDown: function (A) {
                A || (A = this.sm());
                var M = new Io;
                Tk(A, M, this._roots), M.each(this.moveDown, this)
            },
            moveSelectionToTop: function (Z) {
                Z || (Z = this.sm());
                var R = new Io;
                Ye(Z, R, this._roots), R.each(this.moveToTop, this)
            },
            moveSelectionToBottom: function (A) {
                A || (A = this.sm());
                var B = new Io;
                gn(A, B, this._roots), B.each(this.moveToBottom, this)
            },
            addScheduleTask: function (O) {
                var E = this;
                E.removeScheduleTask(O), O.enabled == V && (O.enabled = !0), O.interval == V && (O.interval = 10), O.action == V && (O.action = eo), O.lastTime = Date.now(), E._29Q.push(O), E._30Q == V && (E._30Q = window.requestAnimationFrame(E._scheduleCallback))
            },
            removeScheduleTask: function (O) {
                var D = this,
                    J = D._29Q,
                    K = J.indexOf(O);
                K >= 0 && J.splice(K, 1), J.length || D._30Q == V || (window.cancelAnimationFrame(D._30Q), delete D._30Q)
            }
        });
        var el = o.SelectionModel = function (v) {
            var T = this;
            T._68O = f, T._map = {}, T._73O = new Io, T._74I = new fr, T._21I(v)
        };
        am("SelectionModel", w, {
            ms_fire: 1,
            ms_dm: 1,
            ms: function (N, z, X) {
                this.addSelectionChangeListener(N, z, X)
            },
            ums: function (l, K) {
                this.removeSelectionChangeListener(l, K)
            },
            fd: function () {
                return this.getFirstData()
            },
            ld: function () {
                return this.getLastData()
            },
            sg: function () {
                return this._68O === _
            },
            co: function (y) {
                return this._map[y._id] != V
            },
            ss: function (F) {
                this.setSelection(F)
            },
            as: function (k) {
                this.appendSelection(k)
            },
            rs: function (L) {
                this.removeSelection(L)
            },
            cs: function () {
                this.clearSelection()
            },
            sa: function () {
                this.selectAll()
            },
            getSelectionMode: function () {
                return this._68O
            },
            setSelectionMode: function (j) {
                var $ = this;
                if ($._68O !== j && (j === uk || j === _ || j === f)) {
                    $.cs();
                    var L = $._68O;
                    $._68O = j, $.fp("selectionMode", L, j)
                }
            },
            _21I: function (z) {
                var L = this,
                    D = L._dataModel;
                D !== z && (D && (L.cs(), D.umm(L.handleDataModelChange, L)), L._dataModel = z, z.mm(L.handleDataModelChange, L, !0), L.fp(ze, D, z))
            },
            dispose: function () {
                var h = this;
                h.cs(), h._dataModel.umm(h.handleDataModelChange, h)
            },
            handleDataModelChange: function (h) {
                var G = this;
                if (h.kind === ok) {
                    var $ = h.data;
                    G.co($) && (G._73O.remove($), delete G._map[$._id], G._75I(ok, new Io($)))
                } else h.kind === Be && G.cs()
            },
            getFilterFunc: function () {
                return this._filterFunc
            },
            setFilterFunc: function (s) {
                var C = this;
                if (C._filterFunc !== s) {
                    C.cs();
                    var S = C._filterFunc;
                    C._filterFunc = s, C.fp("filterFunc", S, C._filterFunc)
                }
            },
            _75I: function (y, F, j, a) {
                j && (this._73O.each(function (v) {
                    a[v._id] ? j.remove(v) : j.add(v)
                }), F = j.toList()), this._74I.fire({
                    kind: y,
                    datas: new Io(F)
                })
            },
            addSelectionChangeListener: function (p, _, Q) {
                this._74I.add(p, _, Q)
            },
            removeSelectionChangeListener: function (v, s) {
                this._74I.remove(v, s)
            },
            _97O: function (H, c) {
                for (var g, C = this, d = 0, a = new Io(H) ; d < a.size() ; d++) g = a.get(d), (C._filterFunc && !C._filterFunc(g) || c && C.co(g) || !c && !C.co(g) || !C._dataModel.contains(g)) && (a.removeAt(d), d--);
                return a
            },
            appendSelection: function (X) {
                var t = this;
                if (t._68O !== uk) {
                    var c, R, s = t._73O,
                        O = t._97O(X, !0);
                    O.isEmpty() || (t.sg() && (c = new Io(s), R = t._map, s.clear(), t._map = {}, O = new Io(O.get(O.size() - 1))), O.each(function (a) {
                        s.add(a), t._map[a._id] = a
                    }), t._75I("append", O, c, R))
                }
            },
            removeSelection: function (s) {
                var T = this,
                    e = T._97O(s),
                    R = 0,
                    W = e.size();
                if (0 !== W) {
                    for (; W > R; R++) {
                        var P = e.get(R);
                        T._73O.remove(P), delete T._map[P._id]
                    }
                    T._75I(ok, e)
                }
            },
            toSelection: function (o, I) {
                return this._73O.toList(o, I)
            },
            getSelection: function () {
                return this._73O
            },
            each: function (X, n) {
                this._73O.each(X, n)
            },
            setSelection: function (U) {
                var b = this,
                    M = b._73O;
                if (b._68O !== uk && !(M.isEmpty() && !U || 1 === M.size() && b.ld() === U)) {
                    var c = new Io(M),
                        f = b._map;
                    M.clear(), b._map = {};
                    var A = b._97O(U, !0);
                    b.sg() && A.size() > 1 && (A = new Io(A.get(A.size() - 1))), A.each(function (Q) {
                        M.add(Q), b._map[Q._id] = Q
                    }), b._75I("set", V, c, f)
                }
            },
            clearSelection: function () {
                var t = this,
                    W = t._73O;
                if (W.size() > 0) {
                    var a = W.toList();
                    W.clear(), t._map = {}, t._75I(Be, a)
                }
            },
            selectAll: function () {
                var J = this;
                if (J._68O !== uk) {
                    var U, i, n = J._dataModel.toDatas();
                    if (J._filterFunc)
                        for (U = 0; U < n.size() ; U++) i = n.get(U), J._filterFunc(i) || (n.removeAt(U), U--);
                    var z = J._73O,
                        D = new Io(z),
                        H = J._map;
                    z.clear(), J._map = {}, J.sg() && n.size() > 1 && (n = new Io(n.get(n.size() - 1)));
                    var P = n.size();
                    for (U = 0; P > U; U++) i = n.get(U), z.add(i), J._map[i._id] = i;
                    J._75I("all", V, D, H)
                }
            },
            size: function () {
                return this._73O.size()
            },
            isEmpty: function () {
                return this._73O.isEmpty()
            },
            contains: function (_) {
                return this._map[_._id] != V
            },
            getLastData: function () {
                var d = this._73O;
                return d.size() > 0 ? d.get(d.size() - 1) : V
            },
            getFirstData: function () {
                var L = this._73O;
                return L.size() > 0 ? L.get(0) : V
            },
            isSelectable: function (w) {
                var n = this;
                return w && n._68O !== uk ? n._filterFunc ? n._filterFunc(w) : !0 : !1
            }
        }), Zc(r, {
            edgeGroupAgentFunc: V,
            graphViewAutoScrollZone: 16,
            graphViewResettable: !0,
            graphViewPannable: !0,
            graphViewRectSelectable: !0,
            graphViewScrollBarVisible: !0,
            graphViewRectSelectBorderColor: G.rectSelectBorder,
            graphViewRectSelectBackground: ge,
            graphViewEditPointSize: e ? 17 : 7,
            graphViewEditPointBorderColor: G.editPointBorder,
            graphViewEditPointBackground: G.editPointBackground,
            setEdgeType: function (U, k, e) {
                Pd[U] = k, Dl[U] = e
            },
            getEdgeType: function (P) {
                return Pd[P]
            }
        }, !0), Zc(U, {
            "2d.selectable": !0,
            "2d.visible": !0,
            "2d.movable": !0,
            "2d.editable": !0,
            "2d.move.mode": l,
            "image.stretch": "fill",
            icons: l,
            ingroup: !0,
            "body.color": l,
            opacity: l,
            pixelPerfect: !0,
            "select.color": Ef,
            "select.width": 1,
            "select.padding": 2,
            "select.type": Uj,
            "shadow.blur": 6,
            "shadow.offset.x": 3,
            "shadow.offset.y": 3,
            "shadow.color": Ef,
            "border.color": l,
            "border.width": 2,
            "border.padding": 2,
            "border.type": Uj,
            label: l,
            "label.font": l,
            "label.color": Nb,
            "label.background": l,
            "label.position": 31,
            "label.position.fixed": !1,
            "label.offset.x": 0,
            "label.offset.y": 2,
            "label.rotation": l,
            "label.max": l,
            "label.opacity": l,
            "label.scale": 1,
            "label.align": l,
            label2: l,
            "label2.font": l,
            "label2.color": Nb,
            "label2.background": l,
            "label2.position": 34,
            "label2.position.fixed": !1,
            "label2.offset.x": 0,
            "label2.offset.y": -2,
            "label2.rotation": l,
            "label2.max": l,
            "label2.opacity": l,
            "label2.scale": 1,
            "label2.align": l,
            note: l,
            "note.expanded": !0,
            "note.font": l,
            "note.color": Ul,
            "note.background": Ef,
            "note.position": 8,
            "note.offset.x": -3,
            "note.offset.y": 3,
            "note.max": l,
            "note.toggleable": !0,
            "note.border.width": 1,
            "note.border.color": l,
            "note.opacity": l,
            "note.scale": 1,
            "note.align": l,
            note2: l,
            "note2.expanded": !0,
            "note2.font": l,
            "note2.color": Ul,
            "note2.background": Ef,
            "note2.position": 3,
            "note2.offset.x": 3,
            "note2.offset.y": -3,
            "note2.max": l,
            "note2.toggleable": !0,
            "note2.border.width": 1,
            "note2.border.color": l,
            "note2.opacity": l,
            "note2.scale": 1,
            "note2.align": l,
            "group.type": l,
            "group.image": l,
            "group.image.stretch": "fill",
            "group.repeat.image": l,
            "group.padding": 8,
            "group.padding.left": 0,
            "group.padding.right": 0,
            "group.padding.top": 0,
            "group.padding.bottom": 0,
            "group.position": 17,
            "group.toggleable": !0,
            "group.title.font": l,
            "group.title.color": Ul,
            "group.title.background": G.groupTitleBackground,
            "group.title.align": Sd,
            "group.background": G.groupBackground,
            "group.depth": 1,
            "group.border.width": 1,
            "group.border.pattern": l,
            "group.border.color": Dd,
            "group.border.cap": Ud,
            "group.border.join": sj,
            "group.gradient": V,
            "group.gradient.color": "#FFF",
            shape: l,
            "shape.background": Dd,
            "shape.repeat.image": l,
            "shape.border.width": 0,
            "shape.border.color": Dd,
            "shape.border.3d": !1,
            "shape.border.3d.color": l,
            "shape.border.3d.accuracy": l,
            "shape.border.cap": Ud,
            "shape.border.join": sj,
            "shape.border.pattern": l,
            "shape.gradient": V,
            "shape.gradient.color": "#FFF",
            "shape.depth": 0,
            "shape.dash": !1,
            "shape.dash.pattern": jg,
            "shape.dash.offset": 0,
            "shape.dash.color": _q,
            "shape.dash.width": l,
            "shape.dash.3d": !1,
            "shape.dash.3d.color": l,
            "shape.dash.3d.accuracy": l,
            "shape.polygon.side": 6,
            "shape.arc.from": y,
            "shape.arc.to": X,
            "shape.arc.close": !0,
            "shape.arc.oval": !1,
            "shape.corner.radius": l,
            "edge.type": l,
            "edge.points": l,
            "edge.segments": l,
            "edge.color": Dd,
            "edge.width": 2,
            "edge.offset": 20,
            "edge.group": 0,
            "edge.expanded": !0,
            "edge.gap": 12,
            "edge.toggleable": !0,
            "edge.center": !1,
            "edge.3d": !1,
            "edge.3d.color": l,
            "edge.3d.accuracy": l,
            "edge.cap": Ud,
            "edge.join": sj,
            "edge.source.position": 17,
            "edge.source.offset.x": 0,
            "edge.source.offset.y": 0,
            "edge.target.position": 17,
            "edge.target.offset.x": 0,
            "edge.target.offset.y": 0,
            "edge.pattern": l,
            "edge.dash": !1,
            "edge.dash.pattern": jg,
            "edge.dash.offset": 0,
            "edge.dash.color": _q,
            "edge.dash.width": l,
            "edge.dash.3d": !1,
            "edge.dash.3d.color": l,
            "edge.dash.3d.accuracy": l,
            "edge.independent": !1,
            "attach.row.index": 0,
            "attach.column.index": 0,
            "attach.row.span": 1,
            "attach.column.span": 1,
            "attach.padding": 0,
            "attach.padding.left": 0,
            "attach.padding.right": 0,
            "attach.padding.top": 0,
            "attach.padding.bottom": 0,
            "attach.index": -1,
            "attach.offset": 0,
            "attach.offset.relative": !1,
            "attach.offset.opposite": !1,
            "attach.thickness": l,
            "attach.gap": 0,
            "attach.gap.relative": !1,
            "grid.row.count": 1,
            "grid.column.count": 1,
            "grid.row.percents": l,
            "grid.column.percents": l,
            "grid.border": 1,
            "grid.border.left": 0,
            "grid.border.right": 0,
            "grid.border.top": 0,
            "grid.border.bottom": 0,
            "grid.gap": 1,
            "grid.background": G.gridBackground,
            "grid.depth": 1,
            "grid.cell.depth": -1,
            "grid.cell.border.color": G.gridCellBorderColor,
            "grid.block": l,
            "grid.block.padding": 3,
            "grid.block.width": 1,
            "grid.block.color": G.gridBlockColor
        }, !0), Zc(Kj, {
            _5I: !0,
            isAutoAdjustIndex: function () {
                return this._5I
            },
            setAutoAdjustIndex: function (y) {
                this._5I = y
            },
            _76I: function (H, k, U) {
                this._39I && this._39I.fire({
                    data: H,
                    oldIndex: k,
                    newIndex: U
                })
            },
            addIndexChangeListener: function (d, V, l) {
                var B = this;
                B._39I || (B._39I = new fr), B._39I.add(d, V, l)
            },
            removeIndexChangeListener: function (Q, X) {
                this._39I.remove(Q, X)
            },
            prepareRemove: function (z) {
                gj(z) && (z.setSource(V), z.setTarget(V)), z._70O && z._70O.toList().each(this.remove, this), z._69O && z._69O.toList().each(function (S) {
                    S.setHost(V)
                }), z._host && z.setHost(V)
            },
            onAdded: function (j) {
                this.isAutoAdjustIndex() && this._76O(j)
            },
            onDataPropertyChanged: function (D, y) {
                Wd[y.property] && this.isAutoAdjustIndex() && this._76O(D)
            },
            isAdjustable: function (W) {
                return Zl(W) || gj(W)
            },
            isAdjustedToBottom: function (R) {
                return Bb(R) ? R.isExpanded() && Hn(R) : !1
            },
            _76O: function ($) {
                var c = this;
                c.isAdjustedToBottom($) ? (c.sendToBottom($), $.eachChild(c._76O, c)) : c.sendToTop($)
            },
            sendToTop: function (i) {
                var T = this;
                if (T.contains(i) && T.isAdjustable(i)) {
                    var J = T._datas;
                    if (i !== J.get(T.size() - 1)) {
                        var H = J.indexOf(i);
                        J.removeAt(H), J.add(i), T._76I(i, H, T.size() - 1)
                    }
                    if (gj(i)) {
                        var X = i._40I;
                        X && !T.isAdjustedToBottom(X) && T.sendToTop(X), X = i._41I, X && !T.isAdjustedToBottom(X) && T.sendToTop(X)
                    }
                    i._69O && i._69O.each(function (Z) {
                        Z.isRelatedTo(i) || Zl(i) && Z.isLoopedHostOn(i) || T.sendToTop(Z)
                    }), i.ISubGraph || (!Bb(i) || i.isExpanded()) && i._adjustChildrenToTop && i.eachChild(function (B) {
                        gj(B) || T.sendToTop(B)
                    })
                }
            },
            sendToBottom: function (E, R) {
                var O = this;
                if (E !== R && O.contains(E) && O.isAdjustable(E) && (!R || O.contains(R))) {
                    var B = O._datas,
                        n = B.remove(E),
                        T = R ? O._datas.indexOf(R) : 0;
                    if (B.add(E, T), n !== T) {
                        O._76I(E, n, T);
                        var C = E._parent;
                        !C || C.ISubGraph || gj(C) || O.sendToBottom(E._parent, E)
                    }
                }
            }
        }), Zc(hp, {
            ms_edit: function (y) {
                y._46O = function (K) {
                    var B = this,
                        d = B.gv.dm(),
                        D = d.getHistoryManager(),
                        I = B._index,
                        v = B._89I,
                        S = B._node,
                        O = B._shape,
                        l = B._edge,
                        x = B._77I;
                    S && v ? (this.fi({
                        kind: "endEditRect",
                        event: K,
                        data: S,
                        direction: v
                    }), D && D.endInteraction()) : O && I >= 0 ? (B.fi({
                        kind: "endEditPoint",
                        event: K,
                        data: O,
                        index: I
                    }), D && D.endInteraction()) : l && I >= 0 ? (B.fi({
                        kind: "endEditPoint",
                        event: K,
                        data: l,
                        index: I
                    }), D && D.endInteraction()) : x && (B.fi({
                        kind: "endEditRotation",
                        event: K,
                        data: x
                    }), D && D.endInteraction())
                }, y._78I = function (X) {
                    var C = this;
                    C.autoScroll(X);
                    var c = C.gv.lp(X),
                        e = C._index,
                        o = C._89I,
                        A = C._node,
                        y = C._shape,
                        S = C._edge,
                        f = C._77I;
                    if (A && o) C._80O(c), C.fi({
                        kind: "betweenEditRect",
                        event: X,
                        data: A,
                        direction: o
                    });
                    else if (y && e >= 0) c.e = y.getPoints().get(e).e, y.setPoint(e, c), C.fi({
                        kind: "betweenEditPoint",
                        event: X,
                        data: y,
                        index: e
                    });
                    else if (S && e >= 0) {
                        var d = S.s(jh);
                        c.e = d.get(e).e, d.set(e, c), S.fp(jh, V, d), C.fi({
                            kind: "betweenEditPoint",
                            event: X,
                            data: S,
                            index: e
                        })
                    } else if (f) {
                        var R = f.p(),
                            g = q + x(c.y - R.y, c.x - R.x);
                        O(g) < .04 && (g = 0), f.setRotation(g), C.fi({
                            kind: "betweenEditRotation",
                            event: X,
                            data: f
                        })
                    }
                }, y._80O = function (V) {
                    var p = this,
                        Q = p._rect,
                        l = Q.x,
                        w = Q.y,
                        B = Q.width,
                        W = Q.height,
                        g = p._89I;
                    "northwest" === g ? Q = Aq(V, {
                        x: l + B,
                        y: w + W
                    }) : g === Mj ? Q = Aq({
                        x: l,
                        y: V.y
                    }, {
                        x: l + B,
                        y: w + W
                    }) : "northeast" === g ? Q = Aq({
                        x: l,
                        y: V.y
                    }, {
                        x: V.x,
                        y: w + W
                    }) : g === xq ? Q = Aq({
                        x: V.x,
                        y: w
                    }, {
                        x: l + B,
                        y: w + W
                    }) : g === yd ? Q = Aq({
                        x: l,
                        y: w
                    }, {
                        x: V.x,
                        y: w + W
                    }) : "southwest" === g ? Q = Aq({
                        x: V.x,
                        y: w
                    }, {
                        x: l + B,
                        y: V.y
                    }) : "south" === g ? Q = Aq({
                        x: l,
                        y: w
                    }, {
                        x: l + B,
                        y: V.y
                    }) : "southeast" === g && (Q = Aq({
                        x: l,
                        y: w
                    }, V)), p._node.setRect(Q)
                }, y._80I = function (L, j, R, b, V) {
                    var v = this,
                        Y = v.gv.getEditPointSize() + 2;
                    return Rq({
                        x: j - Y / 2,
                        y: R - Y / 2,
                        width: Y,
                        height: Y
                    }, L) ? (v._89I !== b && (v.setCursor(V), v._89I = b), !0) : !1
                }, y._79I = function (p, T, J) {
                    var w = this,
                        U = w.gv,
                        R = T ? U.getDataUI(T) : V,
                        d = R ? R._55O : V;
                    if (d) {
                        var Z, m, I, y = U.getEditPointSize() + 2,
                            t = U.lp(p);
                        if (Zl(T)) {
                            if (d._56O && Zl(T) && (m = d._98o, Rq({
                                x: m.x - y / 2,
                                y: m.y - y / 2,
                                width: y,
                                height: y
                            }, t))) return w._77I = T, J && w.fi({
                                kind: "beginEditRotation",
                                event: p,
                                data: T
                            }), w.setCursor("crosshair"), !0;
                            if (d._43O && T instanceof Vd)
                                for (I = T.getPoints(), Z = I.size() - 1; Z >= 0; Z--)
                                    if (m = I.get(Z), Rq({
                                        x: m.x - y / 2,
                                        y: m.y - y / 2,
                                        width: y,
                                        height: y
                                    }, t)) return w._index = Z, w._shape = T, J && w.fi({
                                        kind: "beginEditPoint",
                                        event: p,
                                        data: T,
                                        index: Z
                                    }), w.setCursor("crosshair"), !0;
                            if (d._42O) {
                                var C = T.getRect(),
                                    Q = C.x,
                                    Y = C.y,
                                    B = C.width,
                                    X = C.height;
                                if (w._80I(t, Q, Y, "northwest", "nwse-resize") || w._80I(t, Q + B / 2, Y, Mj, qq) || w._80I(t, Q + B, Y, "northeast", "nesw-resize") || w._80I(t, Q, Y + X / 2, xq, Eg) || w._80I(t, Q + B, Y + X / 2, yd, Eg) || w._80I(t, Q, Y + X, "southwest", "nesw-resize") || w._80I(t, Q + B / 2, Y + X, "south", qq) || w._80I(t, Q + B, Y + X, "southeast", "nwse-resize")) return w._node = T, w._rect = T.getRect(), J && w.fi({
                                    kind: "beginEditRect",
                                    event: p,
                                    data: T,
                                    direction: w._89I
                                }), !0
                            }
                        }
                        if (d._43O && gj(T) && T.s(zl) === Lf && (I = T.s(jh)))
                            for (Z = I.size() - 1; Z >= 0; Z--)
                                if (m = I.get(Z), Rq({
                                    x: m.x - y / 2,
                                    y: m.y - y / 2,
                                    width: y,
                                    height: y
                                }, t)) return w._index = Z, w._edge = T, J && w.fi({
                                    kind: "beginEditPoint",
                                    event: p,
                                    data: T,
                                    index: Z
                                }), w.setCursor("crosshair"), !0
                    }
                    return !1
                }
            },
            ms_gv: function (r) {
                r._currentSubGraph = V, r.upSubGraph = function () {
                    this.setCurrentSubGraph(dp(this._currentSubGraph))
                }, r.isVisible = function (k) {
                    var K = this;
                    if (dp(k) !== K._currentSubGraph) return !1;
                    if (gj(k)) {
                        var M = k._40I,
                            g = k._41I;
                        if (!M || !g) return !1;
                        if (!(k.s("edge.independent") || K.isVisible(M) && K.isVisible(g))) return !1;
                        if (k.isEdgeGroupHidden()) return !1
                    } else
                        for (var f = k._parent; f && !f.ISubGraph;) {
                            if (Bb(f) && (!f.isExpanded() || !K.isVisible(f))) return !1;
                            f = f._parent
                        }
                    if (K instanceof Lr) {
                        if (!k.s("3d.visible")) return !1
                    } else if (!k.s("2d.visible")) return !1;
                    return K._visibleFunc ? K._visibleFunc(k) : !0
                }, r._16o = function (R) {
                    var h = this;
                    R.datas.each(function (D) {
                        h.invalidateData(D);
                        var u = D._parent;
                        Bb(u) && Zl(D) && D.s(mm) && (h.invalidateData(u), u._49I && u._49I.each(function (E) {
                            h.invalidateData(E)
                        }))
                    }), h.onSelectionChanged(R)
                }, r.onSelectionChanged = function (z) {
                    var G = this,
                        T = G.sm();
                    if (1 === T.size() && ("set" === z.kind || "append" === z.kind)) {
                        var i = T.ld();
                        G.isAutoMakeVisible() && G.makeVisible(i), G._76O && G._dataModel.isAutoAdjustIndex() && G._76O(i)
                    }
                }, r.makeVisible = function (P) {
                    if (P) {
                        var s = this,
                            F = s.getDataUI ? s.getDataUI(P) : s.getData3dUI(P);
                        if (F) {
                            var d = P,
                                U = dp(P);
                            for (U !== s._currentSubGraph && s.setCurrentSubGraph(U) ;
                                (d = d._parent) && d !== U;) Bb(d) && d.setExpanded(!0);
                            s._23I = P, s.iv()
                        }
                    }
                }, r.getLabel = function (e) {
                    var s = e.getStyle(Fq);
                    return s === l ? e.getName() : s
                }, r.getLabelBackground = function (F) {
                    return F.getStyle("label.background")
                }, r.getLabelColor = function (m) {
                    return m.getStyle("label.color")
                }, r.getLabel2 = function (q) {
                    return q.getStyle("label2")
                }, r.getLabel2Background = function (D) {
                    return D.getStyle("label2.background")
                }, r.getLabel2Color = function (G) {
                    return G.getStyle("label2.color")
                }, r.getNote = function (T) {
                    return T.getStyle($e)
                }, r.getNoteBackground = function (d) {
                    return d.getStyle("note.background")
                }, r.getNote2 = function (q) {
                    return q.getStyle(Dq)
                }, r.getNote2Background = function (U) {
                    return U.getStyle("note2.background")
                }, r.handleClick = function (i, I, z) {
                    var Q = this;
                    I ? (Q.fi({
                        kind: "clickData",
                        event: i,
                        data: I,
                        part: z
                    }), Q.onDataClicked(I, i)) : (Q.fi({
                        kind: "clickBackground",
                        event: i
                    }), Q.onBackgroundClicked(i))
                }, r.handleDoubleClick = function (g, e, y) {
                    var I = this;
                    De(g) && (e ? (I.fi({
                        kind: "doubleClickData",
                        event: g,
                        data: e,
                        part: y
                    }), I.onDataDoubleClicked(e, g, y), I.checkDoubleClickOnNote(g, e, y) || I.checkDoubleClickOnRotation && I.checkDoubleClickOnRotation(g, e, y) || (gj(e) ? I.onEdgeDoubleClicked(e, g, y) : e.ISubGraph ? I.onSubGraphDoubleClicked(e, g, y) : Bb(e) ? I.onGroupDoubleClicked(e, g, y) : e.IDoorWindow ? I.onDoorWindowDoubleClicked(e, g, y) : e.ICSGBox && I.onCSGBoxDoubleClicked(e, g, y))) : (I.fi({
                        kind: "doubleClickBackground",
                        event: g
                    }), I.onBackgroundDoubleClicked(g)))
                }, r.onSubGraphDoubleClicked = function (c) {
                    this.setCurrentSubGraph(c)
                }, r.onEdgeDoubleClicked = function (H, O) {
                    H.ISubGraph && !im(O) ? this.setCurrentSubGraph(H) : H.s("edge.toggleable") && H.toggle()
                }, r.onGroupDoubleClicked = function (C) {
                    C.s("group.toggleable") && C.toggle()
                }, r.onDoorWindowDoubleClicked = function (o) {
                    o.s("dw.toggleable") && o.toggle(!0)
                }, r.onCSGBoxDoubleClicked = function (m, p) {
                    var w = this;
                    if (w instanceof Lr) {
                        var z = w.getHitFaceInfo(p);
                        z && z.face && m.s(z.face + ".toggleable") && m.toggleFace(z.face, !0)
                    }
                }, r.onBackgroundClicked = function () { }, r.onBackgroundDoubleClicked = function () {
                    this.upSubGraph()
                }, r.onDataClicked = function () { }, r.onDataDoubleClicked = function () { }, r.onAutoLayoutEnded = function () { }, r.onMoveEnded = function () { }, r.onPanEnded = function () { }, r.onPinchEnded = function () { }, r.onRectSelectEnded = function () { }, r.onZoomEnded = function () { }
            },
            ms_icons: function (H) {
                H.getRotation = function (C) {
                    return C == V ? 0 : C
                }, H._15O = function () {
                    var Y = this,
                        L = Y.s(em);
                    if (L) {
                        var z = Y,
                            N = Y.data || Y._data,
                            K = Y._38o = {
                                icons: L,
                                rects: {}
                            };
                        for (var P in L) {
                            var p = L[P],
                                O = Pk(p.shape3d, N, z);
                            if (!(Pk(p.visible, N, z) === !1 || Pk(p.for3d, N, z) && !Y.I3d || O && !Y.I3d)) {
                                var w = O ? [O] : Pk(p.names, N, z),
                                    o = w ? w.length : 0,
                                    i = Pk(p.position, N, z) || 3,
                                    R = Pk(p.offsetX, N, z) || 0,
                                    v = Pk(p.offsetY, N, z) || 0,
                                    s = Pk(p.direction, N, z) || yd,
                                    H = Pk(p.gap, N, z),
                                    r = H != V ? H : 1,
                                    J = Pk(p.rotation, N, z),
                                    t = Pk(p.keepOrien, N, z),
                                    l = Pk(p.rotationFixed, N, z) ? J : Y.getRotation(J, t, i),
                                    k = V,
                                    j = K.rects[P] = new Array(o);
                                j.rotation = l;
                                for (var I = 0; o > I; I++) {
                                    var f, U, Q, M, $ = w[I];
                                    if (O) Q = 0, M = 0;
                                    else {
                                        var E = Bg($);
                                        Q = Pk(p.width, N, z), M = Pk(p.height, N, z), Q == V && (Q = Vk(E, N)), M == V && (M = dd(E, N))
                                    }
                                    if (k ? s === yd ? R += Q / 2 : s === xq ? R -= Q / 2 : s === Mj ? v -= M / 2 : v += M / 2 : k = {
                                        width: Q,
                                        height: M
                                    }, Y.I3d) {
                                        var A = -Q / 2,
                                            c = -M / 2;
                                        U = {
                                            width: Q,
                                            height: M,
                                            mat: Y._16O(Pk(p.autorotate, N, z), i, k, Pk(p.face, N, z) || F, Pk(p.t3, N, z), Pk(p.r3, N, z), Pk(p.rotationMode, N, z), R, v),
                                            vs: new wq([A, -c, 0, A, -c - M, 0, A + Q, -c - M, 0, A + Q, -c, 0])
                                        }
                                    } else f = Y.getPosition(i, R, v, k, Pk(p.positionFixed, N, z)), U = {
                                        x: f.x - Q / 2,
                                        y: f.y - M / 2,
                                        width: Q,
                                        height: M
                                    }, Y._68o(U, l);
                                    j[I] = U, s === yd ? R += Q / 2 + r : s === xq ? R -= Q / 2 + r : s === Mj ? v -= M / 2 + r : v += M / 2 + r
                                }
                            }
                        }
                    }
                }
            }
        });
        var Ge = {
            1: 1,
            2: 1,
            6: 1,
            9: 1,
            10: 1,
            14: 1,
            15: 1,
            16: 1,
            21: 1,
            22: 1,
            26: 1,
            29: 1,
            30: 1,
            34: 1,
            36: 1,
            38: 1,
            40: 1,
            42: 1,
            45: 1,
            50: 1,
            52: 1,
            54: 1
        },
            ce = {
                3: 1,
                7: 1,
                11: 1,
                17: 1,
                23: 1,
                27: 1,
                31: 1,
                44: 1,
                46: 1,
                47: 1,
                49: 1
            },
            ro = {
                translateX: 1,
                translateY: 1,
                zoom: 1,
                scrollBarVisible: 1
            },
            Wd = {
                sourceAgent: 1,
                targetAgent: 1,
                expanded: 1,
                parent: 1,
                host: 1
            },
            gc = {
                position: 1,
                width: 1,
                height: 1,
                expanded: 1,
                rotation: 1,
                "s:edge.points": 1
            },
            Gh = {
                "edge.type": 1,
                "edge.group": 1
            },
            Hp = {
                rotation: 1,
                rotationX: 1,
                rotationZ: 1
            },
            Sl = {
                position: 1,
                width: 1,
                height: 1,
                "s:grid.row.count": 1,
                "s:grid.column.count": 1,
                "s:grid.row.percents": 1,
                "s:grid.column.percents": 1,
                "s:grid.border": 1,
                "s:grid.border.left": 1,
                "s:grid.border.right": 1,
                "s:grid.border.top": 1,
                "s:grid.border.bottom": 1,
                "s:grid.gap": 1
            },
            _g = {
                "attach.row.index": 1,
                "attach.column.index": 1,
                "attach.row.span": 1,
                "attach.column.span": 1,
                "attach.padding": 1,
                "attach.padding.left": 1,
                "attach.padding.right": 1,
                "attach.padding.top": 1,
                "attach.padding.bottom": 1,
                "attach.index": 1,
                "attach.offset": 1,
                "attach.offset.relative": 1,
                "attach.offset.opposite": 1,
                "attach.gap": 1,
                "attach.gap.relative": 1,
                "attach.thickness": 1
            },
            qg = {
                shape: 1,
                thickness: 1,
                position: 1
            },
            an = function (A, E) {
                if (!A || !Bb(E) || E.isEmpty()) return !1;
                for (A = A._parent; Bb(A) ;) {
                    if (A === E) return !0;
                    A = A._parent
                }
                return !1
            },
            dp = function (a) {
                if (!a) return V;
                if (gj(a)) {
                    var S = a._40I,
                        D = a._41I;
                    if (!S || !D) return V;
                    var A = dp(S),
                        C = dp(D);
                    return A === C ? A : V
                }
                for (var J = a._parent; gj(J) && !J.ISubGraph;) J = J._parent;
                return J ? J.ISubGraph ? J : dp(J) : V
            },
            db = function (D, k, p, A) {
                var G = k.getStyle(p) * A;
                G && Gb(D, G), G = k.getStyle(p + ".left") * A, G && (D.x -= G, D.width += G), G = k.getStyle(p + ".right") * A, G && (D.width += G), G = k.getStyle(p + ".top") * A, G && (D.y -= G, D.height += G), G = k.getStyle(p + ".bottom") * A, G && (D.height += G), D.width < 0 && (D.width = -D.width, D.x -= D.width), D.height < 0 && (D.height = -D.height, D.y -= D.height)
            },
            Hn = function (z) {
                for (var c, Q = 0, X = z.size() ; X > Q; Q++)
                    if (c = z.getChildAt(Q), Zl(c) && Hn(c)) return !0;
                return z.hasAgentEdges()
            },
            Lk = function (H) {
                if (!H) return V;
                for (var r = H._parent; Bb(r) ;) {
                    if (!Bb(r._parent)) return r.isExpanded() ? H : r;
                    r.isExpanded() || (H = r), r = r._parent
                }
                return H
            },
            Sg = function (D, S) {
                if (!D || !S) return V;
                var F, J, E, M = dp(D),
                    x = dp(S);
                if (M !== x) {
                    for (; x && M !== x;) x = dp(x);
                    if (M === x) return D;
                    F = new Io, F.add(D, 0);
                    for (var $ = D._parent; Zl($) && !S.isDescendantOf($) ;) F.add($, 0), $ = $._parent;
                    for (E = F.size(), J = 0; E > J; J++) {
                        var n = F.get(J);
                        if (Bb(n) && !n.isExpanded()) return n;
                        if (n.ISubGraph) return n
                    }
                    return D
                }
                return D
            },
            ym = function (v) {
                if (v.isLooped()) return v._source;
                var x = Lk(v._source),
                    e = Lk(v._target);
                return x === e ? v._source : Sg(x, e)
            },
            Ji = function (K) {
                if (K.isLooped()) return K._target;
                var O = Lk(K._source),
                    N = Lk(K._target);
                return O === N ? K._target : Sg(N, O)
            },
            al = function (k, K) {
                var P;
                if (Bb(K) && K.isExpanded()) {
                    var V = k.getDataUI(K);
                    V && V._88I && (P = V._88I.rect)
                }
                return P ? P : K.getRect()
            },
            hc = function (B, k, H, S, $) {
                return k ? (H = Jn(H, al(B, k)), H.x += S, H.y += $, H) : V
            },
            Sc = function (l, m) {
                if (!l || !m) return V;
                var O, o, u, S, B, v;
                if (l === m) {
                    if (S = l.getLoopedEdges(), !S) return V;
                    S = new Io(S)
                } else {
                    if (B = l.getAgentEdges(), v = m.getAgentEdges(), !B || !v) return V;
                    for (o = B.size(), O = 0; o > O; O++) u = B.get(O), v.contains(u) && (S || (S = new Io), S.add(u))
                }
                if (S)
                    for (O = 0; O < S.size() ; O++) u = S.get(O), u.getStyle(zl) === Lf && (u._22I(V), S.removeAt(O), O--);
                return S
            },
            tp = function (I, n) {
                var t = Sc(I, n);
                if (t && !t.isEmpty()) {
                    if (1 === t.size()) return t.get(0)._22I(V), void 0;
                    var s = new Io,
                        B = new Io;
                    t.each(function (J) {
                        var P = J.s("edge.group");
                        s.contains(P) || s.add(P)
                    }), s.sort(), s.each(function (i) {
                        B.add(new o.EdgeGroup(t.toList(function (A) {
                            return i === A.s("edge.group")
                        }), B))
                    }), B.each(function (u) {
                        u.each(function (H) {
                            H._22I(u)
                        })
                    })
                }
            },
            Wj = function (F, i) {
                if (i) {
                    var D = i.rect,
                        $ = i.color,
                        Q = i.rotation,
                        s = i.labelWidth,
                        X = i.background,
                        G = i.opacity,
                        Z = i.scale,
                        f = Z != V && 1 !== Z;
                    if (G != V) {
                        var E = F.globalAlpha;
                        F.globalAlpha *= G
                    }
                    if (Q || f) {
                        F.save();
                        var x = D.x + D.width / 2,
                            n = D.y + D.height / 2;
                        Ze(F, x, n), Q && Cj(F, Q), f && F.scale(Z, Z), Ze(F, -x, -n)
                    }
                    if (X && Sf(F, D.x, D.y, D.width, D.height, X), s) {
                        var c = D.width,
                            q = F.createLinearGradient(D.x, D.y, D.x + c, D.y);
                        q.addColorStop(0, $), q.addColorStop(.9, $), q.addColorStop(1, qd), $ = q, D.width = s
                    }
                    tk(F, i.ss, D, i.font, $, i.align), s && (D.width = c), (Q || f) && F.restore(), G != V && (F.globalAlpha = E)
                }
            },
            ti = function (u, M) {
                if (M) {
                    var Q = M.rect,
                        d = Q.x,
                        F = Q.y,
                        G = Q.width,
                        A = Q.height,
                        N = M.background,
                        p = M.backgroundImage,
                        D = M.borderWidth,
                        f = M.borderColor,
                        R = M.labelWidth,
                        o = M.opacity,
                        $ = M.scale,
                        t = $ != V && 1 !== $;
                    if (o != V) {
                        var H = u.globalAlpha;
                        u.globalAlpha *= o
                    }
                    if (t) {
                        u.save();
                        var S = Q.x + Q.width / 2,
                            x = Q.y + Q.height / 2;
                        Ze(u, S, x), u.scale($, $), Ze(u, -S, -x)
                    }
                    if (M.expanded) {
                        var T = J(8, G / 4),
                            B = F + A - 8;
                        if (u.fillStyle = N, u.beginPath(), u.moveTo(d, F), u.lineTo(d, B), u.lineTo(d + G / 2, B), u.lineTo(d + G / 2, F + A), u.lineTo(d + G / 2 + T, B), u.lineTo(d + G, B), u.lineTo(d + G, F), u.closePath(), u.fill(), D && (u.lineWidth = D, u.lineJoin = "round", u.lineCap = "round", u.strokeStyle = f ? f : Yg(N), u.beginPath(), u.moveTo(d + G, F), u.lineTo(d + G, B), u.lineTo(d + G / 2 + T, B), u.lineTo(d + G / 2, F + A), u.stroke(), u.strokeStyle = f ? f : Mc(N), u.beginPath(), u.moveTo(d + G, F), u.lineTo(d, F), u.lineTo(d, B), u.lineTo(d + G / 2, B), u.lineTo(d + G / 2, F + A), u.stroke()), p) qp(u, Bg(p), Pg, Q.x, Q.y, Q.width, Q.height - 8, M.data, M.view);
                        else {
                            if (Q.height -= 8, N = M.color, R) {
                                var c = G,
                                    r = u.createLinearGradient(d, F, d + c, F);
                                r.addColorStop(0, N), r.addColorStop(.9, N), r.addColorStop(1, qd), N = r, Q.width = R
                            }
                            tk(u, M.ss, Q, M.font, N, M.align), R && (Q.width = c), Q.height += 8
                        }
                    } else if (M.icon) Ko(u, Bg(M.icon), d, F, G, A, M.data, M.view);
                    else {
                        var m = G / 2;
                        D && (u.lineWidth = D, u.lineJoin = "round", u.lineCap = "round", u.strokeStyle = f ? f : Yg(N), u.beginPath(), u.arc(d + m, F + m, m, q, 1.6 * y, !0), u.moveTo(d + m, F + A), u.lineTo(d + G - m / 5, F + m), u.stroke(), u.strokeStyle = f ? f : Mc(N), u.beginPath(), u.arc(d + m, F + m, m, 1.6 * y, q, !0), u.moveTo(d + m, F + A), u.lineTo(d + m / 5, F + m), u.stroke()), u.fillStyle = N, u.beginPath(), u.arc(d + m, F + m, m, 0, X, !0), u.moveTo(d + m, F + A), u.lineTo(d + G - m / 5, F + m), u.lineTo(d + m / 5, F + m), u.closePath(), u.fill(), u.fillStyle = M.color, u.beginPath(), u.arc(d + m, F + m, m / 3, 0, X, !0), u.fill()
                    }
                    t && u.restore(), o != V && (u.globalAlpha = H)
                }
            },
            vq = function (n, q) {
                return q > 2 * n ? n : q / 2
            },
            mq = function (k, i, L, D) {
                if (!k || !i) return 0;
                var o = x(i.y - k.y, i.x - k.x);
                return L || (o = i.x < k.x ? o + y : o), o + D
            },
            Jr = function (l, T, n, c, k, a, s) {
                s && (l.x > T.x || l.x === T.x && l.y > T.y) && (n = io[n], k = -k);
                var R = Jn(n, {
                    x: 0,
                    y: 0,
                    width: md(l, T),
                    height: 0
                }, a);
                return R.x += c, R.y += k, R = new wf(x(T.y - l.y, T.x - l.x)).tf(R), R.x += l.x, R.y += l.y, R
            },
            sd = function (X, n, B, S, f) {
                if (X._19Q = !0, !B.getEdgeGroup()) return S ? B.s("edge.gap") : 0;
                var J, v = 0,
                    _ = 0,
                    I = 0;
                if (B.getEdgeGroup().getSiblings().each(function (c) {
                        c.each(function (u) {
                            if (n.isVisible(u) && u.s(zl) == f) {
                                var k = u.s("edge.gap");
                                J ? (_ += I / 2 + k / 2, I = k) : (J = u, I = k), u === B && (v = _)
                }
                })
                }), S) return _ - v + I;
                var L = v - _ / 2;
                return J && B._40I !== J._40I && (X._19Q = !1), L
            },
            yc = function () {
                var T = function (f) {
                    var r = [];
                    return f.forEach(function (s) {
                        r.push({
                            x: s.x,
                            y: s.y
                        }), r.push({
                            x: s.x + s.width,
                            y: s.y + s.height
                        }), r.push({
                            x: s.x + s.width,
                            y: s.y
                        }), r.push({
                            x: s.x,
                            y: s.y + s.height
                        })
                    }), r
                };
                return function (_, G, D) {
                    if ("oval" === _) {
                        var g = 0,
                            k = D.height / D.width,
                            V = k * k,
                            w = D.x + D.width / 2,
                            i = D.y + D.height / 2,
                            S = T(G);
                        S.forEach(function (P) {
                            var H = P.x - w,
                                J = P.y - i,
                                o = H * H + J * J / V;
                            o > g && (g = o)
                        }), g = B(g);
                        var t = k * g;
                        return {
                            x: w - g,
                            y: i - t,
                            width: 2 * g,
                            height: 2 * t
                        }
                    }
                    if ("circle" === _) {
                        var r = 0,
                            w = D.x + D.width / 2,
                            i = D.y + D.height / 2,
                            S = T(G);
                        return S.forEach(function (o) {
                            var G = o.x - w,
                                g = o.y - i,
                                L = G * G + g * g;
                            L > r && (r = L)
                        }), r = B(r), {
                            x: w - r,
                            y: i - r,
                            width: 2 * r,
                            height: 2 * r
                        }
                    }
                    return "roundRect" === _ ? (Gb(D, J(D.width, D.height) / 16), D) : D
                }
            }(),
            dn = o.graph = {},
            pc = function (f, M, C) {
                Ui(L + ".graph." + f, M, C)
            };
        o.layout = {};
        var se = {
            comps: [{
                type: aq,
                points: [85, 50, 70, 115, 100, 71, 86, 107, 88, 49, 43, 88, 49, 84, 110, 85, 89, 82, 98, 114, 69, 118, 66, 99, 90, 114, 117, 70, 65, 83, 76, 51, 112, 86, 53, 57, 117, 81, 69, 50, 120, 55, 74, 120, 79, 57, 57, 107, 115, 54, 111, 110, 76, 90, 54, 87, 98, 83, 102, 110, 65, 120, 51, 98],
                borderWidth: 1,
                borderColor: V
            }]
        };
        se[Xq] = se[Im] = 160, Ad("node_image", Mf(30, 30, [{
            type: Uj,
            rect: [4, 5, 22, 16],
            gradient: Uf,
            gradientColor: Br,
            background: Dd
        }, {
            type: Uj,
            rect: [2, 3, 26, 20],
            borderWidth: 1,
            borderColor: Dd
        }, {
            type: Uj,
            rect: [11, 23, 8, 4],
            background: Dd
        }, {
            type: Uj,
            rect: [6, 27, 18, 2],
            background: Dd
        }])), Ad("node_icon", Mf(16, 16, [{
            type: Uj,
            rect: [2, 2, 12, 10],
            gradient: Uf,
            gradientColor: Br,
            background: Dd
        }, {
            type: Mb,
            rect: [2, 2, 12, 10],
            width: 1,
            color: Dd
        }, {
            type: Uj,
            rect: [6, 12, 4, 2],
            background: Dd
        }, {
            type: Uj,
            rect: [4, 14, 8, 1],
            background: Dd
        }])), Ad("group_image", Mf(66, 39, [{
            type: Uj,
            rect: [44.3, 18, 18.1, 12.8],
            gradient: Uf,
            gradientColor: Br,
            background: Dd
        }, {
            type: Uj,
            rect: [3.3, 17.8, 18.1, 12.8],
            gradient: Uf,
            gradientColor: Br,
            background: Dd
        }, {
            type: Uj,
            rect: [15.8, 3.2, 33.5, 26.4],
            borderWidth: 1,
            borderColor: Dd,
            gradient: Uf,
            gradientColor: Br,
            background: Dd
        }, {
            type: Uj,
            rect: [26.2, 29.4, 12.8, 4.2],
            background: Dd
        }, {
            type: Uj,
            rect: [21.3, 33.5, 22.5, 2.3],
            background: Dd
        }, {
            type: Uj,
            rect: [5.3, 32.7, 14.1, 2.1],
            background: Dd
        }, {
            type: Uj,
            rect: [9, 30.4, 6.7, 2.4],
            background: Dd
        }, {
            type: Uj,
            rect: [50, 30.7, 6.7, 2.4],
            background: Dd
        }, {
            type: Uj,
            rect: [46.3, 33, 14.1, 2.1],
            background: Dd
        }])), Ad("group_icon", Mf(16, 16, [{
            type: Uj,
            rect: [4, 12, 4, 2],
            background: Dd
        }, {
            type: Uj,
            rect: [2, 13, 8, 1],
            background: Dd
        }, {
            type: Uj,
            rect: [12, 12, 2, 1],
            background: Dd
        }, {
            type: Uj,
            rect: [11, 13, 4, 1],
            background: Dd
        }, {
            type: Uj,
            rect: [10, 7, 6, 5],
            gradient: Uf,
            gradientColor: Br,
            background: Dd
        }, {
            type: Uj,
            rect: [1, 2, 10, 10],
            gradient: Uf,
            gradientColor: Br,
            background: Dd
        }, {
            type: Mb,
            rect: [1, 2, 10, 10],
            width: 1,
            color: Dd
        }])), Ad("edge_icon", Mf(16, 16, [{
            type: Uj,
            rect: [2.1, 6.9, 11.5, 2.6],
            rotation: -.79,
            gradient: Uf,
            gradientColor: Br,
            background: Dd
        }, {
            type: Uj,
            rect: [10.8, 1, 4, 4],
            background: Dd
        }, {
            type: Uj,
            rect: [1, 11, 4, 4],
            background: Dd
        }])), Ad("subGraph_image", Mf(72, 45, [{
            type: aq,
            points: [9, 42, .3, 38.4, 2.4, 28.8, 5.7, 21.6, 11.7, 22.5, 11.7, 15.9, 16.8, 13.8, 21.6, 12, 24.3, 15.9, 27.9, 3, 42.3, 2.1, 59.4, 4.5, 57.3, 18.3, 67.5, 18.9, 69.6, 27.3, 69.9, 38.4, 64.2, 41.4],
            segments: [1, 3, 3, 3, 3, 3, 3, 3, 3],
            gradient: Uf,
            gradientColor: Br,
            background: Dd
        }, {
            type: Uj,
            rect: [29.6, 30.7, 3.6, 1.8],
            background: Dd
        }, {
            type: Uj,
            rect: [28.4, 32.3, 6, 1.2],
            background: Dd
        }, {
            type: Uj,
            rect: [37.3, 32, 10.8, 1.8],
            background: Dd
        }, {
            type: Uj,
            rect: [39.1, 29.9, 7.2, 2.3],
            background: Dd
        }, {
            type: Uj,
            rect: [26.6, 23.7, 9.6, 7.2],
            gradient: Uf,
            gradientColor: Br,
            background: Dd
        }, {
            type: Uj,
            rect: [34.3, 16.8, 16.8, 13.2],
            borderWidth: 1,
            borderColor: Dd,
            gradient: Uf,
            gradientColor: Br,
            background: Dd
        }])), Ad("subGraph_icon", Mf(17, 17, [{
            type: aq,
            points: [2.2, 14.6, .2, 11.9, .8, 8.8, 1.8, 5.9, 5.6, 7.4, 3.8, 1.6, 10.3, 3, 14.5, 4.2, 12.2, 7.5, 18.9, 7.2, 14.5, 14.5],
            segments: [1, 3, 3, 3, 3, 3],
            gradient: Uf,
            gradientColor: Br,
            background: Dd
        }])), Ad("shape_icon", Mf(16, 16, [{
            type: aq,
            points: [1.5, 1, 8.4, 1, 8.4, 7.2, 14.6, 7.1, 14.6, 14.9, 1.5, 14.9, 1.5, 1],
            background: Dd
        }])), Ad("polyline_icon", Mf(16, 16, [{
            type: aq,
            points: [1.5, 1, 8.4, 1, 8.4, 7.2, 14.6, 7.1, 14.6, 14.9, 1.5, 14.9, 1.5, 1],
            borderWidth: 1,
            borderColor: Dd
        }, Yb(7.5, .4), Yb(7.5, 6.3), Yb(13.6, 6.3), Yb(13.6, 14), Yb(.7, 13.9), Yb(.7, .3)])), Ad("grid_icon", Mf(16, 16, [{
            type: Uj,
            rect: [1, 1, 4, 4],
            background: Dd,
            gradient: Uf,
            gradientColor: Br
        }, {
            type: Uj,
            rect: [6, 1, 4, 4],
            background: Dd,
            gradient: Uf,
            gradientColor: Br
        }, {
            type: Uj,
            rect: [11, 1, 4, 4],
            background: Dd,
            gradient: Uf,
            gradientColor: Br
        }, {
            type: Uj,
            rect: [11, 6, 4, 4],
            background: Dd,
            gradient: Uf,
            gradientColor: Br
        }, {
            type: Uj,
            rect: [6, 6, 4, 4],
            background: Dd,
            gradient: Uf,
            gradientColor: Br
        }, {
            type: Uj,
            rect: [1, 6, 4, 4],
            background: Dd,
            gradient: Uf,
            gradientColor: Br
        }, {
            type: Uj,
            rect: [11, 11, 4, 4],
            background: Dd,
            gradient: Uf,
            gradientColor: Br
        }, {
            type: Uj,
            rect: [6, 11, 4, 4],
            background: Dd,
            gradient: Uf,
            gradientColor: Br
        }, {
            type: Uj,
            rect: [1, 11, 4, 4],
            background: Dd,
            gradient: Uf,
            gradientColor: Br
        }])), Ad("light_icon", Mf(16, 16, [{
            type: "rect",
            rect: [6, 9, 5, 5],
            borderWidth: 1,
            borderColor: Dd
        }, {
            type: "circle",
            rect: [1, 1, 15, 10],
            borderWidth: 1,
            borderColor: Dd,
            gradient: Uf,
            gradientColor: Br,
            background: {
                func: function (R) {
                    var b = R ? R.s(Yk) : V;
                    return Ue(b) ? "rgb(" + m(255 * b[0]) + "," + m(255 * b[1]) + "," + m(255 * b[2]) + ")" : b || Dd
                }
            }
        }]));
        var Pc = function (w, L) {
            for (var f = w.vertices, G = 0; G < f.length; G++) {
                var n = f[G],
                    F = n.y;
                n.y = n.z, n.z = -F, L && (n.y += L)
            }
        },
            mg = function (C) {
                for (var J, y, h, Q, K, t, M = [], v = [], e = [], b = C.faces, u = 0, w = 0, D = 0, S = b.length; S > u; u++, w += 6, D += 9) {
                    var L = b[u];
                    1 === L.i ? (J || (J = [], y = [], h = []), Zq(L, u, w, D, C, J, h, y)) : 2 === L.i ? (Q || (Q = [], K = [], t = []), Zq(L, u, w, D, C, Q, t, K)) : Zq(L, u, w, D, C, M, e, v)
                }
                return {
                    vs: M,
                    uv: v,
                    ns: e,
                    top_vs: J,
                    top_uv: y,
                    top_ns: h,
                    bottom_vs: Q,
                    bottom_uv: K,
                    bottom_ns: t
                }
            },
            Zq = function (E, F, u, y, z, T, L, G) {
                var t = z.vertices,
                    C = z.faceVertexUvs,
                    U = t[E.a],
                    Z = t[E.b],
                    N = t[E.c];
                T[y] = U.x, T[y + 1] = U.y, T[y + 2] = U.z, T[y + 3] = Z.x, T[y + 4] = Z.y, T[y + 5] = Z.z, T[y + 6] = N.x, T[y + 7] = N.y, T[y + 8] = N.z;
                var b = E.vertexNormals;
                if (3 === b.length) {
                    var W = b[0],
                        A = b[1],
                        R = b[2];
                    L[y] = W.x, L[y + 1] = W.y, L[y + 2] = W.z, L[y + 3] = A.x, L[y + 4] = A.y, L[y + 5] = A.z, L[y + 6] = R.x, L[y + 7] = R.y, L[y + 8] = R.z
                } else {
                    var n = E.normal;
                    L[y] = n.x, L[y + 1] = n.y, L[y + 2] = n.z, L[y + 3] = n.x, L[y + 4] = n.y, L[y + 5] = n.z, L[y + 6] = n.x, L[y + 7] = n.y, L[y + 8] = n.z
                }
                var o = C[0][F][0],
                    p = C[0][F][1],
                    i = C[0][F][2];
                G[u] = o.x, G[u + 1] = o.y, G[u + 2] = p.x, G[u + 3] = p.y, G[u + 4] = i.x, G[u + 5] = i.y
            },
            ol = function (F, h, t, z, r, K, x, U, L) {
                t == V && (t = !0), z == V && (z = !0), x == V && (x = 1), U == V && (U = 0);
                var T = new bp;
                return Xo(T, F, h, L), mg(new Hg(T, {
                    top: t,
                    bottom: z,
                    curveSegments: r,
                    amount: x,
                    repeatUVLength: K
                }, -x / 2 + U))
            },
            gm = function (e, I) {
                this.x = e || 0, this.y = I || 0
            };
        gm.prototype = {
            constructor: gm,
            add: function (E) {
                return this.x += E.x, this.y += E.y, this
            },
            sub: function (l) {
                return this.x -= l.x, this.y -= l.y, this
            },
            equals: function (R) {
                return R.x === this.x && R.y === this.y
            },
            multiplyScalar: function (P) {
                return this.x *= P, this.y *= P, this
            },
            distanceTo: function (t) {
                return B(this.distanceToSquared(t))
            },
            distanceToSquared: function (f) {
                var L = this.x - f.x,
                    d = this.y - f.y;
                return L * L + d * d
            },
            clone: function () {
                return new gm(this.x, this.y)
            }
        };
        var wg = function (d, z, S) {
            this.x = d || 0, this.y = z || 0, this.z = S || 0
        };
        wg.prototype = {
            constructor: wg,
            set: function (i, q, K) {
                return this.x = i, this.y = q, this.z = K, this
            },
            setY: function (W) {
                return this.y = W, this
            },
            copy: function ($) {
                return this.x = $.x, this.y = $.y, this.z = $.z, this
            },
            add: function (o) {
                return this.x += o.x, this.y += o.y, this.z += o.z, this
            },
            addVectors: function (q, W) {
                return this.x = q.x + W.x, this.y = q.y + W.y, this.z = q.z + W.z, this
            },
            sub: function (m) {
                return this.x -= m.x, this.y -= m.y, this.z -= m.z, this
            },
            subVectors: function (K, S) {
                return this.x = K.x - S.x, this.y = K.y - S.y, this.z = K.z - S.z, this
            },
            multiplyScalar: function (j) {
                return this.x *= j, this.y *= j, this.z *= j, this
            },
            applyMatrix4: function (D) {
                var k = this.x,
                    r = this.y,
                    T = this.z,
                    b = D.elements;
                return this.x = b[0] * k + b[4] * r + b[8] * T + b[12], this.y = b[1] * k + b[5] * r + b[9] * T + b[13], this.z = b[2] * k + b[6] * r + b[10] * T + b[14], this
            },
            divideScalar: function (v) {
                if (0 !== v) {
                    var y = 1 / v;
                    this.x *= y, this.y *= y, this.z *= y
                } else this.x = 0, this.y = 0, this.z = 0;
                return this
            },
            dot: function (L) {
                return this.x * L.x + this.y * L.y + this.z * L.z
            },
            length: function () {
                return B(this.x * this.x + this.y * this.y + this.z * this.z)
            },
            normalize: function () {
                return this.divideScalar(this.length())
            },
            cross: function (J) {
                var P = this.x,
                    K = this.y,
                    B = this.z;
                return this.x = K * J.z - B * J.y, this.y = B * J.x - P * J.z, this.z = P * J.y - K * J.x, this
            },
            crossVectors: function (r, i) {
                var p = r.x,
                    k = r.y,
                    X = r.z,
                    j = i.x,
                    e = i.y,
                    U = i.z;
                return this.x = k * U - X * e, this.y = X * j - p * U, this.z = p * e - k * j, this
            },
            distanceTo: function (g) {
                return B(this.distanceToSquared(g))
            },
            distanceToSquared: function (P) {
                var z = this.x - P.x,
                    u = this.y - P.y,
                    s = this.z - P.z;
                return z * z + u * u + s * s
            },
            clone: function () {
                return new wg(this.x, this.y, this.z)
            }
        };
        var Eo = function () {
            this.elements = new Float32Array(16)
        };
        Eo.prototype = {
            constructor: Eo,
            set: function (b, U, u, R, V, I, F, c, B, Y, v, T, G, d, D, _) {
                var E = this.elements;
                return E[0] = b, E[4] = U, E[8] = u, E[12] = R, E[1] = V, E[5] = I, E[9] = F, E[13] = c, E[2] = B, E[6] = Y, E[10] = v, E[14] = T, E[3] = G, E[7] = d, E[11] = D, E[15] = _, this
            },
            makeRotationAxis: function (B, S) {
                var $ = A(S),
                    Y = N(S),
                    O = 1 - $,
                    H = B.x,
                    F = B.y,
                    W = B.z,
                    g = O * H,
                    n = O * F;
                return this.set(g * H + $, g * F - Y * W, g * W + Y * F, 0, g * F + Y * W, n * F + $, n * W - Y * H, 0, g * W - Y * F, n * W + Y * H, O * W * W + $, 0, 0, 0, 0, 1), this
            }
        };
        var Ig = function (D) {
            this.repeatUVLength = D
        };
        Ig.prototype = {
            generateTopUV: function (e, b, v, C, x, D, Z) {
                var n, c, M, s, G = e.vertices,
                    r = G[C].x,
                    T = G[C].y,
                    u = G[x].x,
                    l = G[x].y,
                    S = G[D].x,
                    j = G[D].y,
                    t = this.repeatUVLength;
                if (t) n = 0, c = 0, M = t, s = t;
                else {
                    this._bb || (this._bb = b.getBoundingBox());
                    var _ = this._bb;
                    n = _.minX, c = _.minY, M = _.maxX - n, s = _.maxY - c
                }
                return Z ? [new gm((r - n) / M, (T - c) / s), new gm((u - n) / M, (l - c) / s), new gm((S - n) / M, (j - c) / s)] : [new gm((r - n) / M, 1 - (T - c) / s), new gm((u - n) / M, 1 - (l - c) / s), new gm((S - n) / M, 1 - (j - c) / s)]
            },
            generateBottomUV: function (U, O, w, k, S, C) {
                return this.generateTopUV(U, O, w, k, S, C, !0)
            },
            generateSideWallUV: function (o, R, X, e, q, C, N, O, T, b, Q, D) {
                if (!this._cl) {
                    for (var t, I, m = [], M = 0, A = X.length, Z = 0; A > Z; Z++) {
                        t = X[Z], I = X[(Z + 1) % A];
                        var J = t.x - I.x,
                            L = t.y - I.y,
                            E = B(J * J + L * L);
                        m.push(M), M += E
                    }
                    for (var Z = 0; A > Z; Z++) m[Z] /= M;
                    this._cl = m
                }
                var m = this._cl,
                    $ = 1 - T / b,
                    i = 1 - (T + 1) / b,
                    U = m[Q],
                    w = m[D];
                return w > U && (U += 1), [new gm(U, $), new gm(w, $), new gm(w, i), new gm(U, i)]
            }
        };
        var Kr = function (L, X, _, g, t, R) {
            this.a = L, this.b = X, this.c = _, this.i = R, this.normal = g instanceof wg ? g : new wg, this.vertexNormals = g instanceof Array ? g : []
        };
        Kr.prototype = {
            constructor: Kr
        };
        var _r = function () { },
            Ym = _r.prototype;
        Ym.getPointAt = function (I) {
            var J = this.getUtoTmapping(I);
            return this.getPoint(J)
        }, Ym.getPoints = function (R) {
            R || (R = 5);
            var Z, Q = [];
            for (Z = 0; R >= Z; Z++) Q.push(this.getPoint(Z / R));
            return Q
        }, Ym.getSpacedPoints = function (W) {
            W || (W = 5);
            var Q, J = [];
            for (Q = 0; W >= Q; Q++) J.push(this.getPointAt(Q / W));
            return J
        }, Ym.getLength = function () {
            var d = this.getLengths();
            return d[d.length - 1]
        }, Ym.getLengths = function (o) {
            if (o || (o = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200), this.cacheArcLengths && this.cacheArcLengths.length == o + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            var O, S, w = [],
                K = this.getPoint(0),
                B = 0;
            for (w.push(0), S = 1; o >= S; S++) O = this.getPoint(S / o), B += O.distanceTo(K), w.push(B), K = O;
            return this.cacheArcLengths = w, w
        }, Ym.getUtoTmapping = function ($, A) {
            var p, Z = this.getLengths(),
                U = 0,
                O = Z.length;
            p = A ? A : $ * Z[O - 1];
            for (var X, r = 0, M = O - 1; M >= r;)
                if (U = S(r + (M - r) / 2), X = Z[U] - p, 0 > X) r = U + 1;
                else {
                    if (!(X > 0)) {
                        M = U;
                        break
                    }
                    M = U - 1
                }
            if (U = M, Z[U] == p) {
                var b = U / (O - 1);
                return b
            }
            var d = Z[U],
                k = Z[U + 1],
                z = k - d,
                l = (p - d) / z,
                b = (U + l) / (O - 1);
            return b
        }, Ym.getTangent = function (I) {
            var w = 1e-4,
                $ = I - w,
                f = I + w;
            0 > $ && ($ = 0), f > 1 && (f = 1);
            var K = this.getPoint($),
                Q = this.getPoint(f),
                g = Q.clone().sub(K);
            return g.normalize()
        }, Ym.getTangentAt = function (x) {
            var J = this.getUtoTmapping(x);
            return this.getTangent(J)
        }, _r.create = function (w, U) {
            return w.prototype = Co(_r.prototype), w.prototype.getPoint = U, w
        };
        var eq = function () {
            this.curves = [], this.autoClose = !1
        },
            Vg = eq.prototype = Co(Ym);
        Vg.add = function (l) {
            this.curves.push(l)
        }, Vg.closePath = function () {
            var f = this.curves[0].getPoint(0),
                x = this.curves[this.curves.length - 1].getPoint(1);
            f.equals(x) || this.curves.push(new ei(x, f))
        }, Vg.getPoint = function (e) {
            for (var u, E, r = e * this.getLength(), L = this.getCurveLengths(), K = 0; K < L.length;) {
                if (L[K] >= r) {
                    u = L[K] - r, E = this.curves[K];
                    var H = 1 - u / E.getLength();
                    return E.getPointAt(H)
                }
                K++
            }
            return null
        }, Vg.getLength = function () {
            var L = this.getCurveLengths();
            return L[L.length - 1]
        }, Vg.getCurveLengths = function () {
            if (this.cacheLengths && this.cacheLengths.length == this.curves.length) return this.cacheLengths;
            var h, T = [],
                c = 0,
                m = this.curves.length;
            for (h = 0; m > h; h++) c += this.curves[h].getLength(), T.push(c);
            return this.cacheLengths = T, T
        }, Vg.getTransformedPoints = function (i) {
            return this.getPoints(i)
        }, Vg.getBoundingBox = function () {
            var y, B, O, w, R, G, Z = this.getPoints();
            y = B = Number.NEGATIVE_INFINITY, w = R = Number.POSITIVE_INFINITY;
            var g, k, d, _, s = Z[0] instanceof wg;
            for (_ = s ? new wg : new gm, k = 0, d = Z.length; d > k; k++) g = Z[k], g.x > y && (y = g.x), g.x < w && (w = g.x), g.y > B && (B = g.y), g.y < R && (R = g.y), s && (g.z > O && (O = g.z), g.z < G && (G = g.z)), _.add(g);
            var f = {
                minX: w,
                minY: R,
                maxX: y,
                maxY: B
            };
            return s && (f.maxZ = O, f.minZ = G), f
        };
        var Oh = function (o) {
            eq.call(this), this.actions = [], o && this.fromPoints(o)
        },
            co = Oh.prototype = Co(eq.prototype),
            ud = "moveTo",
            we = "lineTo",
            An = "quadraticCurveTo",
            bo = "bezierCurveTo",
            ug = "arc",
            Xm = "ellipse";
        co.fromPoints = function (h) {
            this.moveTo(h[0].x, h[0].y);
            for (var V = 1, s = h.length; s > V; V++) this.lineTo(h[V].x, h[V].y)
        }, co.moveTo = function () {
            var a = Array.prototype.slice.call(arguments);
            this.actions.push({
                action: ud,
                args: a
            })
        }, co.lineTo = function (L, c) {
            var R = Array.prototype.slice.call(arguments),
                q = this.actions[this.actions.length - 1].args,
                d = q[q.length - 2],
                i = q[q.length - 1],
                o = new ei(new gm(d, i), new gm(L, c));
            this.curves.push(o), this.actions.push({
                action: we,
                args: R
            })
        }, co.quadraticCurveTo = function (L, A, j, c) {
            var X = Array.prototype.slice.call(arguments),
                $ = this.actions[this.actions.length - 1].args,
                n = $[$.length - 2],
                Y = $[$.length - 1],
                B = new Uo(new gm(n, Y), new gm(L, A), new gm(j, c));
            this.curves.push(B), this.actions.push({
                action: An,
                args: X
            })
        }, co.bezierCurveTo = function (K, g, w, T, p, q) {
            var R = Array.prototype.slice.call(arguments),
                z = this.actions[this.actions.length - 1].args,
                J = z[z.length - 2],
                i = z[z.length - 1],
                l = new lb(new gm(J, i), new gm(K, g), new gm(w, T), new gm(p, q));
            this.curves.push(l), this.actions.push({
                action: bo,
                args: R
            })
        }, co.arc = function (f, i, T, Q, t, K) {
            var v = this.actions[this.actions.length - 1].args,
                L = v[v.length - 2],
                M = v[v.length - 1];
            this.absarc(f + L, i + M, T, Q, t, K)
        }, co.absarc = function (W, A, Q, x, v, c) {
            this.absellipse(W, A, Q, Q, x, v, c)
        }, co.ellipse = function (g, n, I, W, Y, F, J) {
            var x = this.actions[this.actions.length - 1].args,
                D = x[x.length - 2],
                q = x[x.length - 1];
            this.absellipse(g + D, n + q, I, W, Y, F, J)
        }, co.absellipse = function (K, l, q, x, r, v, n) {
            var g = Array.prototype.slice.call(arguments),
                N = new nd(K, l, q, x, r, v, n);
            this.curves.push(N);
            var D = N.getPoint(1);
            g.push(D.x), g.push(D.y), this.actions.push({
                action: Xm,
                args: g
            })
        }, co.getSpacedPoints = function (v) {
            v || (v = 40);
            for (var w = [], j = 0; v > j; j++) w.push(this.getPoint(j / v));
            return w
        }, co.getPoints = function (W, P) {
            W = W || 12;
            var Q, I, Y, F, d, h, x, c, j, e, o, u, M, $, z, k, H, m, _ = [];
            for (Q = 0, I = this.actions.length; I > Q; Q++) switch (Y = this.actions[Q], F = Y.action, d = Y.args, F) {
                case ud:
                    _.push(new gm(d[0], d[1]));
                    break;
                case we:
                    _.push(new gm(d[0], d[1]));
                    break;
                case An:
                    for (h = d[2], x = d[3], e = d[0], o = d[1], _.length > 0 ? ($ = _[_.length - 1], u = $.x, M = $.y) : ($ = this.actions[Q - 1].args, u = $[$.length - 2], M = $[$.length - 1]), z = 1; W >= z; z++) k = z / W, H = Am.b2(k, u, e, h), m = Am.b2(k, M, o, x), _.push(new gm(H, m));
                    break;
                case bo:
                    for (h = d[4], x = d[5], e = d[0], o = d[1], c = d[2], j = d[3], _.length > 0 ? ($ = _[_.length - 1], u = $.x, M = $.y) : ($ = this.actions[Q - 1].args, u = $[$.length - 2], M = $[$.length - 1]), z = 1; W >= z; z++) k = z / W, H = Am.b3(k, u, e, c, h), m = Am.b3(k, M, o, j, x), _.push(new gm(H, m));
                    break;
                case ug:
                    var J, B = d[0],
                        i = d[1],
                        V = d[2],
                        b = d[3],
                        R = d[4],
                        v = !!d[5],
                        K = R - b,
                        X = 2 * W;
                    for (z = 1; X >= z; z++) k = z / X, v || (k = 1 - k), J = b + k * K, H = B + V * A(J), m = i + V * N(J), _.push(new gm(H, m));
                    break;
                case Xm:
                    var J, B = d[0],
                        i = d[1],
                        p = d[2],
                        L = d[3],
                        b = d[4],
                        R = d[5],
                        v = !!d[6],
                        K = R - b,
                        X = 2 * W;
                    for (z = 1; X >= z; z++) k = z / X, v || (k = 1 - k), J = b + k * K, H = B + p * A(J), m = i + L * N(J), _.push(new gm(H, m))
            }
            var S = _[_.length - 1],
                r = 1e-10;
            return O(S.x - _[0].x) < r && O(S.y - _[0].y) < r && _.splice(_.length - 1, 1), P && _.push(_[0]), _
        }, co.toShapes = function (M, Z) {
            function n(y) {
                var h, d, R, X, U, M = [],
                    f = new Oh;
                for (h = 0, d = y.length; d > h; h++) R = y[h], U = R.args, X = R.action, X == ud && 0 != f.actions.length && (M.push(f), f = new Oh), f[X].apply(f, U);
                return 0 != f.actions.length && M.push(f), M
            }

            function e(E) {
                for (var G = [], f = 0, Q = E.length; Q > f; f++) {
                    var k = E[f],
                        t = new bp;
                    t.actions = k.actions, t.curves = k.curves, G.push(t)
                }
                return G
            }

            function p(p, d) {
                for (var Z = 1e-10, B = d.length, n = !1, U = B - 1, x = 0; B > x; U = x++) {
                    var i = d[U],
                        $ = d[x],
                        c = $.x - i.x,
                        v = $.y - i.y;
                    if (O(v) > Z) {
                        if (0 > v && (i = d[x], c = -c, $ = d[U], v = -v), p.y < i.y || p.y > $.y) continue;
                        if (p.y == i.y) {
                            if (p.x == i.x) return !0
                        } else {
                            var u = v * (p.x - i.x) - c * (p.y - i.y);
                            if (0 == u) return !0;
                            if (0 > u) continue;
                            n = !n
                        }
                    } else {
                        if (p.y != i.y) continue;
                        if ($.x <= p.x && p.x <= i.x || i.x <= p.x && p.x <= $.x) return !0
                    }
                }
                return n
            }
            var T = n(this.actions);
            if (0 == T.length) return [];
            if (Z === !0) return e(T);
            var _, b, I, B = [];
            if (1 == T.length) return b = T[0], I = new bp, I.actions = b.actions, I.curves = b.curves, B.push(I), B;
            var k = !bp.Utils.isClockWise(T[0].getPoints());
            k = M ? !k : k;
            var m, c = [],
                Q = [],
                u = [],
                a = 0;
            Q[a] = l, u[a] = [];
            var q, L;
            for (q = 0, L = T.length; L > q; q++) b = T[q], m = b.getPoints(), _ = Am.isClockWise(m), _ = M ? !_ : _, _ ? (!k && Q[a] && a++, Q[a] = {
                s: new bp,
                p: m
            }, Q[a].s.actions = b.actions, Q[a].s.curves = b.curves, k && a++, u[a] = []) : u[a].push({
                h: b,
                p: m[0]
            });
            if (!Q[0]) return e(T);
            if (Q.length > 1) {
                for (var i = !1, V = [], x = 0, g = Q.length; g > x; x++) c[x] = [];
                for (var x = 0, g = Q.length; g > x; x++) {
                    Q[x];
                    for (var S = u[x], Y = 0; Y < S.length; Y++) {
                        for (var A = S[Y], h = !0, E = 0; E < Q.length; E++) p(A.p, Q[E].p) && (x != E && V.push({
                            froms: x,
                            tos: E,
                            hole: Y
                        }), h ? (h = !1, c[E].push(A)) : i = !0);
                        h && c[x].push(A)
                    }
                }
                V.length > 0 && (i || (u = c))
            }
            var w, D, v;
            for (q = 0, L = Q.length; L > q; q++)
                for (I = Q[q].s, B.push(I), w = u[q], D = 0, v = w.length; v > D; D++) I.holes.push(w[D].h);
            return B
        };
        var bp = function () {
            Oh.apply(this, arguments), this.holes = []
        },
            Cb = bp.prototype = Co(co);
        Cb.getPointsHoles = function (O) {
            var I, H = this.holes.length,
                n = [];
            for (I = 0; H > I; I++) n[I] = this.holes[I].getTransformedPoints(O);
            return n
        }, Cb.extractAllPoints = function (q) {
            return {
                shape: this.getTransformedPoints(q),
                holes: this.getPointsHoles(q)
            }
        }, Cb.extractPoints = function ($) {
            return this.extractAllPoints($)
        };
        var Am = {
            triangulateShape: function (R, E) {
                function t(n, k, d) {
                    return n.x != k.x ? n.x < k.x ? n.x <= d.x && d.x <= k.x : k.x <= d.x && d.x <= n.x : n.y < k.y ? n.y <= d.y && d.y <= k.y : k.y <= d.y && d.y <= n.y
                }

                function Z(F, c, R, V, S) {
                    var H = 1e-10,
                        P = c.x - F.x,
                        i = c.y - F.y,
                        A = V.x - R.x,
                        v = V.y - R.y,
                        s = F.x - R.x,
                        a = F.y - R.y,
                        q = i * A - P * v,
                        Z = i * s - P * a;
                    if (O(q) > H) {
                        var K;
                        if (q > 0) {
                            if (0 > Z || Z > q) return [];
                            if (K = v * s - A * a, 0 > K || K > q) return []
                        } else {
                            if (Z > 0 || q > Z) return [];
                            if (K = v * s - A * a, K > 0 || q > K) return []
                        }
                        if (0 == K) return !S || 0 != Z && Z != q ? [F] : [];
                        if (K == q) return !S || 0 != Z && Z != q ? [c] : [];
                        if (0 == Z) return [R];
                        if (Z == q) return [V];
                        var w = K / q;
                        return [{
                            x: F.x + w * P,
                            y: F.y + w * i
                        }]
                    }
                    if (0 != Z || v * s != A * a) return [];
                    var G = 0 == P && 0 == i,
                        d = 0 == A && 0 == v;
                    if (G && d) return F.x != R.x || F.y != R.y ? [] : [F];
                    if (G) return t(R, V, F) ? [F] : [];
                    if (d) return t(F, c, R) ? [R] : [];
                    var L, u, e, Y, f, N, y, T;
                    return 0 != P ? (F.x < c.x ? (L = F, e = F.x, u = c, Y = c.x) : (L = c, e = c.x, u = F, Y = F.x), R.x < V.x ? (f = R, y = R.x, N = V, T = V.x) : (f = V, y = V.x, N = R, T = R.x)) : (F.y < c.y ? (L = F, e = F.y, u = c, Y = c.y) : (L = c, e = c.y, u = F, Y = F.y), R.y < V.y ? (f = R, y = R.y, N = V, T = V.y) : (f = V, y = V.y, N = R, T = R.y)), y >= e ? y > Y ? [] : Y == y ? S ? [] : [f] : T >= Y ? [f, u] : [f, N] : e > T ? [] : e == T ? S ? [] : [L] : T >= Y ? [L, u] : [L, N]
                }

                function L(M, x, _, B) {
                    var C = 1e-10,
                        W = x.x - M.x,
                        f = x.y - M.y,
                        R = _.x - M.x,
                        d = _.y - M.y,
                        P = B.x - M.x,
                        z = B.y - M.y,
                        w = W * d - f * R,
                        i = W * z - f * P;
                    if (O(w) > C) {
                        var L = P * d - z * R;
                        return w > 0 ? i >= 0 && L >= 0 : i >= 0 || L >= 0
                    }
                    return i > 0
                }

                function y(a, Q) {
                    function y(j, O) {
                        var c = P.length - 1,
                            H = j - 1;
                        0 > H && (H = c);
                        var E = j + 1;
                        E > c && (E = 0);
                        var z = L(P[j], P[H], P[E], x[O]);
                        if (!z) return !1;
                        var a = x.length - 1,
                            d = O - 1;
                        0 > d && (d = a);
                        var l = O + 1;
                        return l > a && (l = 0), z = L(x[O], x[d], x[l], P[j]), z ? !0 : !1
                    }

                    function u(a, o) {
                        var L, $, N;
                        for (L = 0; L < P.length; L++)
                            if ($ = L + 1, $ %= P.length, N = Z(a, o, P[L], P[$], !0), N.length > 0) return !0;
                        return !1
                    }

                    function S(E, K) {
                        var b, I, n, u, J;
                        for (b = 0; b < X.length; b++)
                            for (I = Q[X[b]], n = 0; n < I.length; n++)
                                if (u = n + 1, u %= I.length, J = Z(E, K, I[n], I[u], !0), J.length > 0) return !0;
                        return !1
                    }
                    for (var x, k, G, $, R, z, e, U, K, m, i, P = a.concat(), X = [], g = [], N = 0, t = Q.length; t > N; N++) X.push(N);
                    for (var q = 0, n = 2 * X.length; X.length > 0 && (n--, !(0 > n)) ;)
                        for (G = q; G < P.length; G++) {
                            $ = P[G], k = -1;
                            for (var N = 0; N < X.length; N++)
                                if (z = X[N], e = $.x + ":" + $.y + ":" + z, g[e] === l) {
                                    x = Q[z];
                                    for (var T = 0; T < x.length; T++)
                                        if (R = x[T], y(G, T) && !u($, R) && !S($, R)) {
                                            k = T, X.splice(N, 1), U = P.slice(0, G + 1), K = P.slice(G), m = x.slice(k), i = x.slice(0, k + 1), P = U.concat(m).concat(i).concat(K), q = G;
                                            break
                                        }
                                    if (k >= 0) break;
                                    g[e] = !0
                                }
                            if (k >= 0) break
                        }
                    return P
                }
                for (var m, o, w, u, S, V, n = {}, i = R.concat(), Y = 0, C = E.length; C > Y; Y++) Array.prototype.push.apply(i, E[Y]);
                for (m = 0, o = i.length; o > m; m++) S = i[m].x + ":" + i[m].y, n[S] !== l, n[S] = m;
                var U = y(R, E),
                    H = cq.Triangulate(U, !1);
                for (m = 0, o = H.length; o > m; m++)
                    for (u = H[m], w = 0; 3 > w; w++) S = u[w].x + ":" + u[w].y, V = n[S], V !== l && (u[w] = V);
                return H.concat()
            },
            isClockWise: function (y) {
                return cq.Triangulate.area(y) < 0
            },
            b2p0: function (v, C) {
                var y = 1 - v;
                return y * y * C
            },
            b2p1: function (f, O) {
                return 2 * (1 - f) * f * O
            },
            b2p2: function (J, g) {
                return J * J * g
            },
            b2: function (h, I, k, B) {
                return this.b2p0(h, I) + this.b2p1(h, k) + this.b2p2(h, B)
            },
            b3p0: function ($, N) {
                var L = 1 - $;
                return L * L * L * N
            },
            b3p1: function (R, c) {
                var F = 1 - R;
                return 3 * F * F * R * c
            },
            b3p2: function (l, J) {
                var g = 1 - l;
                return 3 * g * l * l * J
            },
            b3p3: function (A, i) {
                return A * A * A * i
            },
            b3: function (L, k, s, C, H) {
                return this.b3p0(L, k) + this.b3p1(L, s) + this.b3p2(L, C) + this.b3p3(L, H)
            }
        },
            cq = {
                faces: {},
                face: "helvetiker",
                weight: "normal",
                style: "normal",
                size: 150,
                divisions: 10,
                getFace: function () {
                    try {
                        return this.faces[this.face][this.weight][this.style]
                    } catch (V) {
                        throw "The font " + this.face + " with " + this.weight + " weight and " + this.style + " style is missing."
                    }
                },
                loadFace: function (r) {
                    var K = r.familyName.toLowerCase(),
                        F = this;
                    return F.faces[K] = F.faces[K] || {}, F.faces[K][r.cssFontWeight] = F.faces[K][r.cssFontWeight] || {}, F.faces[K][r.cssFontWeight][r.cssFontStyle] = r, F.faces[K][r.cssFontWeight][r.cssFontStyle] = r, r
                },
                drawText: function (x) {
                    var j, P = this.getFace(),
                        A = this.size / P.resolution,
                        I = 0,
                        N = String(x).split(""),
                        a = N.length,
                        c = [];
                    for (j = 0; a > j; j++) {
                        var i = new Oh,
                            S = this.extractGlyphPoints(N[j], P, A, I, i);
                        I += S.offset, c.push(S.path)
                    }
                    var w = I / 2;
                    return {
                        paths: c,
                        offset: w
                    }
                },
                extractGlyphPoints: function (b, g, i, e, j) {
                    var a, q, $, u, x, L, S, P, v, X, p, I, B, l, R, W, N, t, D, F = [],
                        z = g.glyphs[b] || g.glyphs["?"];
                    if (z) {
                        if (z.o)
                            for (u = z._cachedOutline || (z._cachedOutline = z.o.split(" ")), L = u.length, S = i, P = i, a = 0; L > a;) switch (x = u[a++]) {
                                case "m":
                                    v = u[a++] * S + e, X = u[a++] * P, j.moveTo(v, X);
                                    break;
                                case "l":
                                    v = u[a++] * S + e, X = u[a++] * P, j.lineTo(v, X);
                                    break;
                                case "q":
                                    if (p = u[a++] * S + e, I = u[a++] * P, R = u[a++] * S + e, W = u[a++] * P, j.quadraticCurveTo(R, W, p, I), D = F[F.length - 1])
                                        for (B = D.x, l = D.y, q = 1, $ = this.divisions; $ >= q; q++) {
                                            var _ = q / $;
                                            Am.b2(_, B, R, p), Am.b2(_, l, W, I)
                                        }
                                    break;
                                case "b":
                                    if (p = u[a++] * S + e, I = u[a++] * P, R = u[a++] * S + e, W = u[a++] * P, N = u[a++] * S + e, t = u[a++] * P, j.bezierCurveTo(R, W, N, t, p, I), D = F[F.length - 1])
                                        for (B = D.x, l = D.y, q = 1, $ = this.divisions; $ >= q; q++) {
                                            var _ = q / $;
                                            Am.b3(_, B, R, N, p), Am.b3(_, l, W, t, I)
                                        }
                            }
                        return {
                            offset: z.ha * i,
                            path: j
                        }
                    }
                }
            };
        cq.generateShapes = function (b, N) {
            N = N || {};
            var A = N.size !== l ? N.size : 100,
                R = N.curveSegments !== l ? N.curveSegments : 4,
                W = N.font !== l ? N.font : "helvetiker",
                m = N.weight !== l ? N.weight : "normal",
                w = N.style !== l ? N.style : "normal";
            cq.size = A, cq.divisions = R, cq.face = W, cq.weight = m, cq.style = w;
            for (var j = cq.drawText(b), I = j.paths, Q = [], L = 0, t = I.length; t > L; L++) Array.prototype.push.apply(Q, I[L].toShapes());
            return Q
        },
            function (v) {
                var F = 1e-10,
                    r = function (A, y) {
                        var C = A.length;
                        if (3 > C) return null;
                        var $, P, U, v = [],
                            T = [],
                            I = [];
                        if (V(A) > 0)
                            for (P = 0; C > P; P++) T[P] = P;
                        else
                            for (P = 0; C > P; P++) T[P] = C - 1 - P;
                        var s = C,
                            D = 2 * s;
                        for (P = s - 1; s > 2;) {
                            if (D-- <= 0) return y ? I : v;
                            if ($ = P, $ >= s && ($ = 0), P = $ + 1, P >= s && (P = 0), U = P + 1, U >= s && (U = 0), k(A, $, P, U, s, T)) {
                                var t, B, z, e, G;
                                for (t = T[$], B = T[P], z = T[U], v.push([A[t], A[B], A[z]]), I.push([T[$], T[P], T[U]]), e = P, G = P + 1; s > G; e++, G++) T[e] = T[G];
                                s--, D = 2 * s
                            }
                        }
                        return y ? I : v
                    },
                    V = function (V) {
                        for (var z = V.length, d = 0, Z = z - 1, W = 0; z > W; Z = W++) d += V[Z].x * V[W].y - V[W].x * V[Z].y;
                        return .5 * d
                    },
                    k = function (L, I, O, h, n, c) {
                        var E, T, P, g, J, s, S, M, w;
                        if (T = L[c[I]].x, P = L[c[I]].y, g = L[c[O]].x, J = L[c[O]].y, s = L[c[h]].x, S = L[c[h]].y, F > (g - T) * (S - P) - (J - P) * (s - T)) return !1;
                        var e, N, m, Z, p, r, d, a, _, y, A, G, K, x, u;
                        for (e = s - g, N = S - J, m = T - s, Z = P - S, p = g - T, r = J - P, E = 0; n > E; E++)
                            if (M = L[c[E]].x, w = L[c[E]].y, !(M === T && w === P || M === g && w === J || M === s && w === S) && (d = M - T, a = w - P, _ = M - g, y = w - J, A = M - s, G = w - S, u = e * y - N * _, K = p * a - r * d, x = m * G - Z * A, u >= -F && x >= -F && K >= -F)) return !1;
                        return !0
                    };
                return v.Triangulate = r, v.Triangulate.area = V, v
            }(cq), window._typeface_js = {
                faces: cq.faces,
                loadFace: cq.loadFace
            };
        var sf = function () {
            this.vertices = [], this.faces = [], this.faceVertexUvs = [
                []
            ]
        },
            Pp = sf.prototype = {
                constructor: sf,
                computeFaceNormals: function () {
                    for (var p = new wg, w = new wg, y = 0, J = this.faces.length; J > y; y++) {
                        var K = this.faces[y],
                            r = this.vertices[K.a],
                            W = this.vertices[K.b],
                            c = this.vertices[K.c];
                        p.subVectors(c, W), w.subVectors(r, W), p.cross(w), p.normalize(), K.normal.copy(p)
                    }
                },
                computeVertexNormals: function (i) {
                    var C, l, t, q, x, k;
                    for (k = new Array(this.vertices.length), C = 0, l = this.vertices.length; l > C; C++) k[C] = new wg;
                    if (i) {
                        var f, o, K, m = new wg,
                            v = new wg;
                        for (t = 0, q = this.faces.length; q > t; t++) x = this.faces[t], f = this.vertices[x.a], o = this.vertices[x.b], K = this.vertices[x.c], m.subVectors(K, o), v.subVectors(f, o), m.cross(v), k[x.a].add(m), k[x.b].add(m), k[x.c].add(m)
                    } else
                        for (t = 0, q = this.faces.length; q > t; t++) x = this.faces[t], k[x.a].add(x.normal), k[x.b].add(x.normal), k[x.c].add(x.normal);
                    for (C = 0, l = this.vertices.length; l > C; C++) k[C].normalize();
                    for (t = 0, q = this.faces.length; q > t; t++) x = this.faces[t], x.vertexNormals[0] = k[x.a].clone(), x.vertexNormals[1] = k[x.b].clone(), x.vertexNormals[2] = k[x.c].clone()
                },
                mergeVertices: function () {
                    var M, z, R, D, b, B, t, v, p = {},
                        q = [],
                        E = [],
                        O = 4,
                        F = d(10, O);
                    for (R = 0, D = this.vertices.length; D > R; R++) M = this.vertices[R], z = K(M.x * F) + "_" + K(M.y * F) + "_" + K(M.z * F), p[z] === l ? (p[z] = R, q.push(this.vertices[R]), E[R] = q.length - 1) : E[R] = E[p[z]];
                    var w = [];
                    for (R = 0, D = this.faces.length; D > R; R++) {
                        b = this.faces[R], b.a = E[b.a], b.b = E[b.b], b.c = E[b.c], B = [b.a, b.b, b.c];
                        for (var I = 0; 3 > I; I++)
                            if (B[I] == B[(I + 1) % 3]) {
                                w.push(R);
                                break
                            }
                    }
                    for (R = w.length - 1; R >= 0; R--) {
                        var j = w[R];
                        for (this.faces.splice(j, 1), t = 0, v = this.faceVertexUvs.length; v > t; t++) this.faceVertexUvs[t].splice(j, 1)
                    }
                    var $ = this.vertices.length - q.length;
                    return this.vertices = q, $
                }
            },
            nd = function (c, Q, w, R, X, $, j) {
                this.aX = c, this.aY = Q, this.xRadius = w, this.yRadius = R, this.aStartAngle = X, this.aEndAngle = $, this.aClockwise = j
            };
        nd.prototype = Co(Ym), nd.prototype.getPoint = function (x) {
            var C, F = this.aEndAngle - this.aStartAngle;
            0 > F && (F += X), F > X && (F -= X), C = this.aClockwise === !0 ? this.aEndAngle + (1 - x) * (X - F) : this.aStartAngle + x * F;
            var v = this.aX + this.xRadius * A(C),
                E = this.aY + this.yRadius * N(C);
            return new gm(v, E)
        };
        var ei = function (j, f) {
            this.v1 = j, this.v2 = f
        },
            ip = ei.prototype = Co(Ym);
        ip.getPoint = function (Q) {
            var o = this.v2.clone().sub(this.v1);
            return o.multiplyScalar(Q).add(this.v1), o
        }, ip.getPointAt = function (N) {
            return this.getPoint(N)
        }, ip.getTangent = function () {
            var q = this.v2.clone().sub(this.v1);
            return q.normalize()
        };
        var Uo = function (n, L, h) {
            this.v0 = n, this.v1 = L, this.v2 = h
        };
        Uo.prototype = Co(Ym), Uo.prototype.getPoint = function (K) {
            var h, F;
            return h = Am.b2(K, this.v0.x, this.v1.x, this.v2.x), F = Am.b2(K, this.v0.y, this.v1.y, this.v2.y), new gm(h, F)
        };
        var lb = function (U, V, h, p) {
            this.v0 = U, this.v1 = V, this.v2 = h, this.v3 = p
        };
        lb.prototype = Co(Ym), lb.prototype.getPoint = function (F) {
            var t, U;
            return t = Am.b3(F, this.v0.x, this.v1.x, this.v2.x, this.v3.x), U = Am.b3(F, this.v0.y, this.v1.y, this.v2.y, this.v3.y), new gm(t, U)
        }, _r.create(function (V, p) {
            this.v1 = V, this.v2 = p
        }, function (t) {
            var k = new wg;
            return k.subVectors(this.v2, this.v1), k.multiplyScalar(t), k.add(this.v1), k
        });
        var ac = _r.create(function (C, s, J) {
            this.v0 = C, this.v1 = s, this.v2 = J
        }, function (E) {
            var G, n, e;
            return G = Am.b2(E, this.v0.x, this.v1.x, this.v2.x), n = Am.b2(E, this.v0.y, this.v1.y, this.v2.y), e = Am.b2(E, this.v0.z, this.v1.z, this.v2.z), new wg(G, n, e)
        }),
            gi = _r.create(function (k, u, B, R) {
                this.v0 = k, this.v1 = u, this.v2 = B, this.v3 = R
            }, function (X) {
                var p, o, t;
                return p = Am.b3(X, this.v0.x, this.v1.x, this.v2.x, this.v3.x), o = Am.b3(X, this.v0.y, this.v1.y, this.v2.y, this.v3.y), t = Am.b3(X, this.v0.z, this.v1.z, this.v2.z, this.v3.z), new wg(p, o, t)
            }),
            jf = function (Z, t, y, e, E, v, H, o) {
                sf.call(this), e = e !== l ? e : .5, E = E !== l ? E : .5, o = o !== l ? o : 1, Z = Z || 8, v = v || 0, H = H || X;
                var D, j, c = 1,
                    s = o / 2,
                    u = [],
                    m = [],
                    G = this.vertices,
                    q = this.faces,
                    K = this.faceVertexUvs;
                for (j = 0; c >= j; j++) {
                    var f = [],
                        L = [],
                        b = j / c,
                        C = b * (E - e) + e;
                    for (D = 0; Z >= D; D++) {
                        var d = D / Z,
                            p = new wg,
                            z = -(d * H + v);
                        p.z = C * N(z), p.y = -b * o + s, p.x = C * A(z), G.push(p), f.push(G.length - 1), L.push(new gm(d, b))
                    }
                    u.push(f), m.push(L)
                }
                var O, V, $ = (E - e) / o;
                for (D = 0; Z > D; D++)
                    for (0 !== e ? (O = G[u[0][D]].clone(), V = G[u[0][D + 1]].clone()) : (O = G[u[1][D]].clone(), V = G[u[1][D + 1]].clone()), O.setY(B(O.x * O.x + O.z * O.z) * $).normalize(), V.setY(B(V.x * V.x + V.z * V.z) * $).normalize(), j = 0; c > j; j++) {
                        var R = u[j][D],
                            M = u[j + 1][D],
                            g = u[j + 1][D + 1],
                            Y = u[j][D + 1],
                            T = O.clone(),
                            _ = O.clone(),
                            F = V.clone(),
                            I = V.clone(),
                            S = m[j][D].clone(),
                            P = m[j + 1][D].clone(),
                            i = m[j + 1][D + 1].clone(),
                            r = m[j][D + 1].clone();
                        q.push(new Kr(R, M, Y, [T, _, I])), K[0].push([S, P, r]), q.push(new Kr(M, g, Y, [_.clone(), F, I.clone()])), K[0].push([P.clone(), i, r.clone()])
                    }
                if (t && e > 0)
                    for (this.vertices.push(new wg(0, s, 0)), D = 0; Z > D; D++) {
                        var R = u[0][D],
                            M = u[0][D + 1],
                            g = this.vertices.length - 1,
                            T = new wg(0, 1, 0),
                            _ = new wg(0, 1, 0),
                            F = new wg(0, 1, 0),
                            S = m[0][D].clone(),
                            P = m[0][D + 1].clone(),
                            i = new gm(P.x, 0);
                        q.push(new Kr(R, M, g, [T, _, F], null, 1));
                        var U = D / Z * X,
                            W = A(U),
                            Q = N(U),
                            k = (D + 1) / Z * X,
                            w = A(k),
                            h = N(k);
                        K[0].push([new gm(.5 + .5 * W, .5 + .5 * Q), new gm(.5 + .5 * w, .5 + .5 * h), new gm(.5, .5)])
                    }
                if (y && E > 0)
                    for (this.vertices.push(new wg(0, -s, 0)), D = 0; Z > D; D++) {
                        var R = u[j][D + 1],
                            M = u[j][D],
                            g = G.length - 1,
                            T = new wg(0, -1, 0),
                            _ = new wg(0, -1, 0),
                            F = new wg(0, -1, 0),
                            S = m[j][D + 1].clone(),
                            P = m[j][D].clone();
                        q.push(new Kr(R, M, g, [T, _, F], null, 2));
                        var U = D / Z * X,
                            W = A(U),
                            Q = N(U),
                            k = (D + 1) / Z * X,
                            w = A(k),
                            h = N(k);
                        K[0].push([new gm(.5 + .5 * w, .5 - .5 * h), new gm(.5 + .5 * W, .5 - .5 * Q), new gm(.5, .5)])
                    }
            };
        jf.prototype = Co(Pp);
        var Vj = function (P, a, h, L, f, M, _) {
            sf.call(this), _ = _ || .5, P = P || 16, a = a || 16, h = (h !== l ? h : 0) - y, L = L !== l ? L : X, f = f !== l ? f : 0, M = M !== l ? M : y;
            var G, v, K = [],
                k = [],
                U = this.vertices,
                c = this.faces,
                e = this.faceVertexUvs;
            for (v = 0; a >= v; v++) {
                var J = [],
                    V = [];
                for (G = 0; P >= G; G++) {
                    var r = G / P,
                        z = v / a,
                        F = new wg;
                    F.x = -_ * A(h + r * L) * N(f + z * M), F.y = _ * A(f + z * M), F.z = _ * N(h + r * L) * N(f + z * M), U.push(F), J.push(U.length - 1), V.push(new gm(r, z))
                }
                K.push(J), k.push(V)
            }
            for (v = 0; a > v; v++)
                for (G = 0; P > G; G++) {
                    var E = K[v][G + 1],
                        o = K[v][G],
                        q = K[v + 1][G],
                        w = K[v + 1][G + 1],
                        Q = U[E].clone().normalize(),
                        g = U[o].clone().normalize(),
                        m = U[q].clone().normalize(),
                        D = U[w].clone().normalize(),
                        j = k[v][G + 1].clone(),
                        n = k[v][G].clone(),
                        t = k[v + 1][G].clone(),
                        Z = k[v + 1][G + 1].clone();
                    O(U[E].y) === _ ? (j.x = (j.x + n.x) / 2, c.push(new Kr(E, q, w, [Q, m, D])), e[0].push([j, t, Z])) : O(U[q].y) === _ ? (t.x = (t.x + Z.x) / 2, c.push(new Kr(E, o, q, [Q, g, m])), e[0].push([j, n, t])) : (c.push(new Kr(E, o, w, [Q, g, D])), e[0].push([j, n, Z]), c.push(new Kr(o, q, w, [g.clone(), m, D.clone()])), e[0].push([n.clone(), t, Z.clone()]))
                }
        };
        Vj.prototype = Co(Pp);
        var ff = function (E, b, C, l, g, d) {
            sf.call(this), E = E || .33, b = b || .17, l = l || 8, C = C || 6, g = g || 0, d = d || X;
            for (var L = new wg, J = [], r = [], Y = 0; l >= Y; Y++)
                for (var q = Y / l * X + y, c = 0; C >= c; c++) {
                    var v = c / C * d + g;
                    L.x = E * A(v), L.z = -E * N(v);
                    var H = new wg,
                        V = E + b * A(q);
                    H.x = V * A(v), H.z = -V * N(v), H.y = b * N(q), this.vertices.push(H), J.push(new gm(c / C, 1 - Y / l)), r.push(H.clone().sub(L).normalize())
                }
            for (var Y = 1; l >= Y; Y++)
                for (var c = 1; C >= c; c++) {
                    var T = (C + 1) * Y + c - 1,
                        s = (C + 1) * (Y - 1) + c - 1,
                        G = (C + 1) * (Y - 1) + c,
                        p = (C + 1) * Y + c,
                        P = new Kr(T, s, p, [r[T].clone(), r[s].clone(), r[p].clone()]);
                    this.faces.push(P), this.faceVertexUvs[0].push([J[T].clone(), J[s].clone(), J[p].clone()]), P = new Kr(s, G, p, [r[s].clone(), r[G].clone(), r[p].clone()]), this.faces.push(P), this.faceVertexUvs[0].push([J[s].clone(), J[G].clone(), J[p].clone()])
                }
            this.computeFaceNormals()
        };
        ff.prototype = Co(Pp);
        var Hg = function (N, M, v) {
            return N ? (sf.call(this), N = N instanceof Array ? N : [N], this.addShapeList(N, M), Pc(this, v), this.computeFaceNormals(), void 0) : (N = [], void 0)
        },
            Mq = Hg.prototype = Co(sf.prototype);
        Mq.addShapeList = function (v, D) {
            for (var S = v.length, K = 0; S > K; K++) {
                var Q = v[K];
                this.addShape(Q, D)
            }
        }, Mq.addShape = function (C, p) {
            function c() {
                if (p.bottom)
                    for (var O = 0; y > O; O++) G = J[O], Q(G[2], G[1], G[0], !0);
                if (p.top)
                    for (O = 0; y > O; O++) G = J[O], Q(G[0] + f * N, G[1] + f * N, G[2] + f * N, !1)
            }

            function d() {
                var M = 0;
                for (P($, M), M += $.length, E = 0, k = F.length; k > E; E++) H = F[E], P(H, M), M += H.length
            }

            function P(B, l) {
                for (var r, Q, p = B.length; --p >= 0;) {
                    r = p, Q = p - 1, 0 > Q && (Q = B.length - 1);
                    var s = 0,
                        d = N;
                    for (s = 0; d > s; s++) {
                        var W = f * s,
                            R = f * (s + 1),
                            y = l + r + W,
                            S = l + Q + W,
                            c = l + Q + R,
                            J = l + r + R;
                        m(y, S, c, J, B, s, d, r, Q)
                    }
                }
            }

            function q(w, $, l) {
                W.vertices.push(new wg(w, $, l))
            }

            function Q(G, H, L, r) {
                G += V, H += V, L += V, W.faces.push(new Kr(G, H, L, null, null, r ? 2 : 1));
                var Q = r ? w.generateBottomUV(W, C, p, G, H, L) : w.generateTopUV(W, C, p, G, H, L);
                W.faceVertexUvs[0].push(Q)
            }

            function m(r, x, E, c, z, O, X, F, s) {
                r += V, x += V, E += V, c += V, W.faces.push(new Kr(r, x, c)), W.faces.push(new Kr(x, E, c));
                var U = w.generateSideWallUV(W, C, z, p, r, x, E, c, O, X, F, s);
                W.faceVertexUvs[0].push([U[0], U[1], U[3]]), W.faceVertexUvs[0].push([U[1], U[2], U[3]])
            }
            var i, t, Z, g, U, B = p.amount,
                o = p.curveSegments || rr,
                N = p.steps || 1,
                A = p.extrudePath,
                h = !1,
                w = new Ig(p.repeatUVLength);
            A && (i = A.getSpacedPoints(N), h = !0, t = p.frames !== l ? p.frames : new vk.FrenetFrames(A, N, !1), Z = new wg, g = new wg, U = new wg);
            var H, E, k, W = this,
                V = this.vertices.length,
                v = C.extractPoints(o),
                L = v.shape,
                F = v.holes,
                O = !Am.isClockWise(L);
            if (O) {
                for (L = L.reverse(), E = 0, k = F.length; k > E; E++) H = F[E], Am.isClockWise(H) && (F[E] = H.reverse());
                O = !1
            }
            var J = Am.triangulateShape(L, F),
                $ = L;
            for (E = 0, k = F.length; k > E; E++) H = F[E], L = L.concat(H);
            for (var D, G, f = L.length, y = J.length, X = 0; f > X; X++) D = L[X], h ? (g.copy(t.normals[0]).multiplyScalar(D.x), Z.copy(t.binormals[0]).multiplyScalar(D.y), U.copy(i[0]).add(g).add(Z), q(U.x, U.y, U.z)) : q(D.x, D.y, 0);
            var u;
            for (u = 1; N >= u; u++)
                for (X = 0; f > X; X++) D = L[X], h ? (g.copy(t.normals[u]).multiplyScalar(D.x), Z.copy(t.binormals[u]).multiplyScalar(D.y), U.copy(i[u]).add(g).add(Z), q(U.x, U.y, U.z)) : q(D.x, D.y, B / N * u);
            c(), d()
        };
        var vk = function (R, J, F, c, s) {
            function y(w, F, R) {
                return K.vertices.push(new wg(w, F, R)) - 1
            }
            sf.call(this), J = J || 64, F = F || 1, c = c || 8, s = s || !1;
            var E, P, Z, $, m, B, V, S, G, H, C, r, x, v, Q, p, t, M, Y, g, o = [],
                K = this,
                h = J + 1,
                I = new wg,
                z = new vk.FrenetFrames(R, J, s),
                j = z.tangents,
                a = z.normals,
                w = z.binormals;
            for (this.tangents = j, this.normals = a, this.binormals = w, G = 0; h > G; G++)
                for (o[G] = [], $ = G / (h - 1), S = R.getPointAt($), E = j[G], P = a[G], Z = w[G], H = 0; c > H; H++) m = H / c * X, B = -F * A(m), V = F * N(m), I.copy(S), I.x += B * P.x + V * Z.x, I.y += B * P.y + V * Z.y, I.z += B * P.z + V * Z.z, o[G][H] = y(I.x, I.y, I.z);
            for (G = 0; J > G; G++)
                for (H = 0; c > H; H++) C = s ? (G + 1) % J : G + 1, r = (H + 1) % c, x = o[G][H], v = o[C][H], Q = o[C][r], p = o[G][r], t = new gm(G / J, H / c), M = new gm((G + 1) / J, H / c), Y = new gm((G + 1) / J, (H + 1) / c), g = new gm(G / J, (H + 1) / c), this.faces.push(new Kr(x, v, p)), this.faceVertexUvs[0].push([t, M, g]), this.faces.push(new Kr(v, Q, p)), this.faceVertexUvs[0].push([M.clone(), Y, g.clone()]);
            this.computeFaceNormals(), this.computeVertexNormals()
        };
        vk.prototype = Co(Pp), vk.FrenetFrames = function (y, j, s) {
            function g() {
                f[0] = new wg, L[0] = new wg, S = Number.MAX_VALUE, a = O(A[0].x), t = O(A[0].y), Y = O(A[0].z), S >= a && (S = a, i.set(1, 0, 0)), S >= t && (S = t, i.set(0, 1, 0)), S >= Y && i.set(0, 0, 1), T.crossVectors(A[0], i).normalize(), f[0].crossVectors(A[0], T), L[0].crossVectors(A[0], f[0])
            }
            var q, S, a, t, Y, B, C, i = new wg,
                A = [],
                f = [],
                L = [],
                T = new wg,
                r = new Eo,
                J = j + 1,
                X = 1e-4;
            for (this.tangents = A, this.normals = f, this.binormals = L, B = 0; J > B; B++) C = B / (J - 1), A[B] = y.getTangentAt(C), A[B].normalize();
            for (g(), B = 1; J > B; B++) f[B] = f[B - 1].clone(), L[B] = L[B - 1].clone(), T.crossVectors(A[B - 1], A[B]), T.length() > X && (T.normalize(), q = R(Oi(A[B - 1].dot(A[B]), -1, 1)), f[B].applyMatrix4(r.makeRotationAxis(T, q))), L[B].crossVectors(A[B], f[B]);
            if (s)
                for (q = R(Oi(f[0].dot(f[J - 1]), -1, 1)), q /= J - 1, A[0].dot(T.crossVectors(f[0], f[J - 1])) > 0 && (q = -q), B = 1; J > B; B++) f[B].applyMatrix4(r.makeRotationAxis(A[B], q * B)), L[B].crossVectors(A[B], f[B])
        };
        var Bd = function (I, i, U, d) {
            sf.call(this), i = i || 18, U = U || 0, d = d == V ? X : d;
            for (var j = 1 / (I.length - 1), q = 1 / i, e = 0, z = i; z >= e; e++)
                for (var Q = U + e * q * d, r = A(Q), E = N(Q), p = 0, o = I.length; o > p; p++) {
                    var F = I[p],
                        v = new wg;
                    v.x = r * F.x - E * F.y, v.y = E * F.x + r * F.y, v.z = F.z, this.vertices.push(v)
                }
            for (var t = I.length, e = 0, z = i; z > e; e++)
                for (var p = 0, o = I.length - 1; o > p; p++) {
                    var G = p + t * e,
                        S = G,
                        m = G + t,
                        r = G + 1 + t,
                        f = G + 1,
                        L = e * q,
                        g = p * j,
                        K = L + q,
                        h = g + j;
                    this.faces.push(new Kr(S, f, m)), this.faceVertexUvs[0].push([new gm(L, g), new gm(L, h), new gm(K, g)]), this.faces.push(new Kr(m, f, r)), this.faceVertexUvs[0].push([new gm(K, g), new gm(L, h), new gm(K, h)])
                }
            this.mergeVertices(), Pc(this), this.computeFaceNormals(), this.computeVertexNormals()
        };
        Bd.prototype = Co(Pp);
        var fb = function (T, b) {
            b = b || {};
            var W = cq.generateShapes(T, b);
            b.amount = b.height !== l ? b.height : 50, Hg.call(this, W, b)
        };
        fb.prototype = Co(Mq);
        var Lg = o.Node = function () {
            fi(Lg, this)
        },
            Ii = {
                X: gr,
                Y: Ec,
                Z: js
            },
            ub = {
                xyz: "XYZ",
                xzy: "XZY",
                yxz: "YXZ",
                yzx: "YZX",
                zxy: "ZXY",
                zyx: "ZYX"
            },
            Gm = "xzy",
            Ej = function (g, j, L) {
                if (j) {
                    var n = j[0],
                        t = j[1],
                        O = j[2];
                    "xzy" === L ? (Ec(g, t), js(g, O), gr(g, n)) : "xyz" === L ? (js(g, O), Ec(g, t), gr(g, n)) : "yxz" === L ? (js(g, O), gr(g, n), Ec(g, t)) : "yzx" === L ? (gr(g, n), js(g, O), Ec(g, t)) : "zxy" === L ? (Ec(g, t), gr(g, n), js(g, O)) : "zyx" === L ? (gr(g, n), Ec(g, t), js(g, O)) : (Ec(g, t), js(g, O), gr(g, n))
                }
            };
        am("Node", Fi, {
            ms_ac: ["rotationMode", "tall"],
            _adjustChildrenToTop: !0,
            _icon: "node_icon",
            _image: "node_image",
            _rotationMode: Gm,
            _64O: 0,
            _rotationX: 0,
            _53O: 0,
            _host: V,
            _position: {
                x: 0,
                y: 0
            },
            _tall: 20,
            _54O: 0,
            getUIClass: function () {
                return sh
            },
            _22Q: function () {
                return Qh
            },
            p: function () {
                return 0 === arguments.length ? this.getPosition() : (this.setPosition.apply(this, arguments), this)
            },
            p3: function () {
                return 0 === arguments.length ? this.getPosition3d() : (this.setPosition3d.apply(this, arguments), this)
            },
            s3: function () {
                return 0 === arguments.length ? this.getSize3d() : (this.setSize3d.apply(this, arguments), this)
            },
            r3: function () {
                return 0 === arguments.length ? this.getRotation3d() : (this.setRotation3d.apply(this, arguments), this)
            },
            t3: function () {
                return this.translate3d.apply(this, arguments), this
            },
            translate3dBy: function (a, U) {
                xo(a, Ep(V, V, this.r3(), this.getRotationMode())), this.translate3d(a[0] * U, a[1] * U, a[2] * U)
            },
            translateFront: function (p) {
                this.translate3dBy([0, 0, 1], p)
            },
            translateBack: function (P) {
                this.translate3dBy([0, 0, -1], P)
            },
            translateLeft: function (A) {
                this.translate3dBy([-1, 0, 0], A)
            },
            translateRight: function (p) {
                this.translate3dBy([1, 0, 0], p)
            },
            translateTop: function (D) {
                this.translate3dBy([0, 1, 0], D)
            },
            translateBottom: function (B) {
                this.translate3dBy([0, -1, 0], B)
            },
            getPosition3d: function () {
                return [this._position.x, this._54O, this._position.y]
            },
            setPosition3d: function (b, w, g) {
                1 === arguments.length && (w = b[1], g = b[2], b = b[0]), this.p(b, g), this.setElevation(w)
            },
            translate3d: function (w, r, Z) {
                1 === arguments.length && (r = w[1], Z = w[2], w = w[0]), this.translate(w, Z), this.setElevation(this._54O + r)
            },
            getSize3d: function () {
                return [this.getWidth(), this.getTall(), this.getHeight()]
            },
            setSize3d: function (D, C, V) {
                1 === arguments.length && (C = D[1], V = D[2], D = D[0]), this.setSize(D, V), this.setTall(C)
            },
            getRotation3d: function () {
                return [this._rotationX, -this._64O, this._53O]
            },
            setRotation3d: function (Q, a, S) {
                1 === arguments.length && (a = Q[1], S = Q[2], Q = Q[0]), this.setRotationX(Q), this.setRotation(-a), this.setRotationZ(S)
            },
            setRotationY: function (A) {
                this.setRotation(-A)
            },
            getRotationY: function () {
                return -this._64O
            },
            lookAt: function (s, E) {
                E = E || F;
                var j = this,
                    g = Zn(s, j.p3()),
                    A = md(g);
                E === F ? (j.r3([-M(g[1] / A), -x(g[2], g[0]) + q, 0]), j.setRotationMode("xzy")) : E === yn ? (j.r3(0, -x(g[2], g[0]), M(g[1] / A)), j.setRotationMode("zyx")) : E === Sd ? (j.r3(0, -x(g[2], g[0]) + y, -M(g[1] / A)), j.setRotationMode("zyx")) : E === lp ? (j.r3([-M(g[1] / A) + q, -x(g[2], g[0]) + q, 0]), j.setRotationMode("xzy")) : E === ih && (j.r3([-M(g[1] / A) - q, -x(g[2], g[0]) + q, 0]), j.setRotationMode("xzy")), E === Fg && (j.r3([-M(g[1] / A) + y, -x(g[2], g[0]) + q, y]), j.setRotationMode("zxy"))
            },
            getLoopedEdges: function () {
                return this._45I
            },
            getEdges: function () {
                return this._70O
            },
            getAgentEdges: function () {
                return this._49I
            },
            getHost: function () {
                return this._host
            },
            setHost: function (N) {
                var C = this;
                if (C !== N && C._host !== N) {
                    var u = C._host;
                    u && u._removeAttach(C), C._host = N, C._host && C._host._addAttach(C), C.fp("host", u, N), C.onHostChanged(u, N)
                }
            },
            getAttaches: function () {
                return this._69O
            },
            _addAttach: function (N) {
                var D = this;
                D._69O || (D._69O = new Io), D._69O.add(N), D.fp("attaches", V, N)
            },
            _removeAttach: function (H) {
                var l = this;
                l._69O.remove(H), l._69O.isEmpty() && delete l._69O, l.fp("attaches", H, V)
            },
            getSourceEdges: function () {
                return this._42I
            },
            getTargetEdges: function () {
                return this._43I
            },
            _2I: function (E) {
                var m = this;
                m._44I || (m._44I = new Io), m._42I || (m._42I = new Io), m._44I.add(E), m._42I.add(E), m._20I()
            },
            _4I: function (o) {
                var R = this;
                R._44I || (R._44I = new Io), R._43I || (R._43I = new Io), R._44I.add(o), R._43I.add(o), R._20I()
            },
            _16I: function (Z) {
                var b = this;
                b._44I.remove(Z), b._42I.remove(Z), b._44I.isEmpty() && delete b._44I, b._42I.isEmpty() && delete b._42I, b._20I()
            },
            _18I: function (w) {
                var O = this;
                O._44I.remove(w), O._43I.remove(w), O._44I.isEmpty() && delete O._44I, O._43I.isEmpty() && delete O._43I, O._20I()
            },
            _20I: function () {
                var K = this;
                if (delete K._45I, !K._44I || K._44I.isEmpty()) return delete K._70O, void 0;
                var H;
                K._44I.each(function (r) {
                    r.isLooped() && (H || (H = {}), H[r._id] || (K._45I || (K._45I = new Io), K._45I.add(r), H[r._id] = r))
                }), H ? (K._70O = new Io, K._44I.each(function (C) {
                    H[C._id] ? "A" === H[C._id] || (H[C._id] = "A", K._70O.add(C)) : K._70O.add(C)
                })) : K._70O = K._44I
            },
            hasAgentEdges: function () {
                return !!this._49I && !this._49I.isEmpty()
            },
            getSourceAgentEdges: function () {
                return this._46I
            },
            getTargetAgentEdges: function () {
                return this._47I
            },
            _1I: function (m) {
                var h = this;
                h._46I || (h._46I = new Io), h._48I || (h._48I = new Io), h._46I.add(m), h._48I.add(m), h._19I()
            },
            _3I: function (k) {
                var x = this;
                x._47I || (x._47I = new Io), x._48I || (x._48I = new Io), x._47I.add(k), x._48I.add(k), x._19I()
            },
            _15I: function (r) {
                var t = this;
                t._46I.remove(r), t._48I.remove(r), t._46I.isEmpty() && delete t._46I, t._48I.isEmpty() && delete t._48I, t._19I()
            },
            _17I: function (K) {
                var M = this;
                M._47I.remove(K), M._48I.remove(K), M._47I.isEmpty() && delete M._47I, M._48I.isEmpty() && delete M._48I, M._19I()
            },
            _19I: function () {
                var y = this;
                delete y._49I;
                var e = y._48I;
                if (e && !e.isEmpty()) {
                    var M = {};
                    e.each(function (d) {
                        M[d._id] ? y._49I || (y._49I = new Io) : M[d._id] = d
                    }), y._49I ? e.each(function (g) {
                        M[g._id] && (y._49I.add(g), delete M[g._id])
                    }) : y._49I = e
                }
            },
            getImage: function () {
                return this._image
            },
            setImage: function ($) {
                var O = this,
                    T = O._image,
                    l = O.getWidth(),
                    P = O.getHeight();
                O._image = $, O.fp("image", T, $), O.fp(Xq, l, O.getWidth()), O.fp(Im, P, O.getHeight())
            },
            getElevation: function () {
                return this._54O
            },
            setElevation: function (C) {
                var o = this;
                if (!o._50O) {
                    o._50O = 1;
                    var b = o._54O;
                    o._54O = C, o.fp(Mi, b, C), delete this._50O
                }
            },
            getRotation: function () {
                return this._64O
            },
            setRotation: function (f) {
                var I = this;
                if (!I._49O) {
                    I._49O = 1;
                    var F = I._64O;
                    I._64O = f, I.fp(Ff, F, f), delete I._49O
                }
            },
            getRotationX: function () {
                return this._rotationX
            },
            setRotationX: function (e) {
                var c = this;
                if (!c._51O) {
                    c._51O = 1;
                    var Z = c._rotationX;
                    c._rotationX = e, c.fp("rotationX", Z, e), delete c._51O
                }
            },
            getRotationZ: function () {
                return this._53O
            },
            setRotationZ: function (Y) {
                var u = this;
                if (!u._52O) {
                    u._52O = 1;
                    var S = u._53O;
                    u._53O = Y, u.fp("rotationZ", S, Y), delete u._52O
                }
            },
            getPosition: function () {
                return this._position
            },
            setPosition: function (u, p) {
                var b = this;
                if (!b._50I) {
                    b._50I = 1;
                    var $;
                    if ($ = 2 === arguments.length ? {
                        x: u,
                        y: p
                    } : u, $.x !== b._position.x || $.y !== b._position.y) {
                        var E = b._position;
                        b._position = $, b.fp(Kk, E, $)
                    }
                    delete b._50I
                }
            },
            translate: function (G, O) {
                var i = this._position;
                this.p(i.x + G, i.y + O)
            },
            getWidth: function () {
                var K = this;
                if (K._width >= 0) return K._width;
                var q = Bg(K._image);
                return q ? Vk(q, K) : 20
            },
            setWidth: function (a) {
                var s = this,
                    N = s._width;
                s._width = a, s.fp(Xq, N, a)
            },
            getHeight: function () {
                var J = this;
                if (J._height >= 0) return J._height;
                var p = Bg(J._image);
                return p ? dd(p, J) : 20
            },
            setHeight: function (C) {
                var $ = this,
                    r = $._height;
                $._height = C, $.fp(Im, r, C)
            },
            setSize: function (i, B) {
                var J = this;
                2 === arguments.length ? (J.setWidth(i), J.setHeight(B)) : (J.setWidth(i.width), J.setHeight(i.height))
            },
            getSize: function () {
                return {
                    width: this.getWidth(),
                    height: this.getHeight()
                }
            },
            setRect: function (u, Z, P, b) {
                var T = this;
                1 === arguments.length ? (T.p(u.x + u.width / 2, u.y + u.height / 2), T.setWidth(u.width), T.setHeight(u.height)) : (T.p(u + P / 2, Z + b / 2), T.setWidth(P), T.setHeight(b))
            },
            getRect: function () {
                var P = this,
                    E = P.getWidth(),
                    y = P.getHeight();
                return aj({
                    x: P._position.x - E / 2,
                    y: P._position.y - y / 2,
                    width: E,
                    height: y
                }, P._64O)
            },
            getCorners: function (U, M) {
                U == V && (U = 0), M == V && (M = U);
                var H = this,
                    b = H._position,
                    g = H.getWidth() / 2 + U,
                    W = H.getHeight() / 2 + M,
                    Y = new wf(H._64O, b.x, b.y);
                return [Y.tf(-g, -W), Y.tf(g, -W), Y.tf(g, W), Y.tf(-g, W)]
            },
            rotateAt: function (L, u, d) {
                var c = this,
                    E = c._position,
                    Y = c._64O,
                    f = new wf(Y, E.x, E.y).tf(L, u),
                    T = B(L * L + u * u),
                    Q = x(E.y - f.y, E.x - f.x) + d;
                c.setRotation(Y + d), c.p(f.x + T * A(Q), f.y + T * N(Q))
            },
            onParentChanged: function () {
                Lg.superClass.onParentChanged.apply(this, arguments), this._8I()
            },
            _8I: function () {
                this._70O && this._70O.each(function ($) {
                    $._7I()
                })
            },
            onPropertyChanged: function (C) {
                var N = this;
                Lg.superClass.onPropertyChanged.call(N, C), N._69O && N._69O.each(function (M) {
                    M.handleHostPropertyChange(C)
                }), N._49I && N._49I.each(function (w) {
                    w.fp("agentChange", !0, !1)
                })
            },
            onHostChanged: function () {
                this.updateAttach()
            },
            handleHostPropertyChange: function (S) {
                this.updateAttach(S)
            },
            onStyleChanged: function (f) {
                Lg.superClass.onStyleChanged.apply(this, arguments), _g[f] && this.updateAttach()
            },
            updateAttach: function (O) {
                var v = this;
                v._51I || zp || (v._51I = 1, v._71O(O), delete v._51I)
            },
            _71O: function (J) {
                var A, w, k, K, D, r, G = this,
                    m = G._host,
                    B = J ? J.property : V,
                    q = J ? J.oldValue : V,
                    I = J ? J.newValue : V;
                if (m instanceof ql) {
                    if (B === Mi) G.setElevation(G._54O + I - q);
                    else if (!J || Sl[B]) {
                        if (A = G.s("attach.row.index"), w = G.s("attach.column.index"), k = m.getCellRect(A, w), !k) return;
                        K = G.s("attach.row.span"), D = G.s("attach.column.span"), (1 !== K || 1 !== D) && (k = jm(k, m.getCellRect(A + K - 1, w + D - 1))), db(k, G, "attach.padding", 1), G.setRect(k)
                    }
                } else if (m instanceof Vd && (r = G.s("attach.index")) >= 0 && (!J || qg[B])) {
                    var R = G.s("attach.thickness");
                    R != V && G.setHeight(m.getThickness() * R);
                    var U = G.s("attach.offset"),
                        c = m.getPoints(),
                        X = c.size();
                    if (X > r) {
                        var H = c.get(r),
                            d = X === r + 1 ? c.get(0) : c.get(r + 1),
                            h = [d.x - H.x, d.y - H.y],
                            f = md(h);
                        if (f) {
                            G.s("attach.offset.relative") && (U *= f), G.s("attach.offset.opposite") && (U = f - U);
                            var n = {
                                x: H.x + h[0] / f * U,
                                y: H.y + h[1] / f * U
                            },
                                b = G.s("attach.gap");
                            b && (G.s("attach.gap.relative") && (b *= m.getThickness()), n = Ve(V, n, d, b)), G.p(n), G.setRotation(x(h[1], h[0]))
                        }
                    }
                } else J && (B === Kk ? G.translate(I.x - q.x, I.y - q.y) : B === Mi ? G.setElevation(G._54O + I - q) : Hp[B] && G._11Q(m, B, I - q))
            },
            _11Q: function (P, q, $) {
                var V = this,
                    m = P.p3(),
                    r = Zn(V.p3(), m),
                    Z = vj(),
                    j = ub[V.getRotationMode()],
                    i = j[0],
                    g = j[1],
                    _ = j[2],
                    L = Ii[i],
                    N = Ii[g],
                    T = Ii[_];
                q === Ff && (q = "rotationY", $ = -$), q === Ff + i ? (T(Z, P[xm + _]()), N(Z, P[xm + g]()), L(Z, $), N(Z, -P[xm + g]()), T(Z, -P[xm + _]()), V[rh + i](V[xm + i]() + $)) : q === Ff + g ? (T(Z, P[xm + _]()), N(Z, $), T(Z, -P[xm + _]()), V[rh + g](V[xm + g]() + $)) : q === Ff + _ && (T(Z, $), V[rh + _](V[xm + _]() + $)), xo(r, Z), V.p3(m[0] + r[0], m[1] + r[1], m[2] + r[2])
            },
            isHostOn: function (A) {
                var F = this;
                if (F._host && A && A._69O)
                    for (var z = {}, e = F._host; e && e !== F && !z[e._id];) {
                        if (e === A) return !0;
                        z[e._id] = e, e = e._host
                    }
                return !1
            },
            isLoopedHostOn: function (w) {
                return this.isHostOn(w) && w.isHostOn(this)
            },
            getSerializableProperties: function () {
                var O = Lg.superClass.getSerializableProperties.call(this);
                return Zc(O, {
                    image: 1,
                    host: 1,
                    rotation: 1,
                    rotationX: 1,
                    rotationZ: 1,
                    rotationMode: 1,
                    position: 1,
                    width: 1,
                    height: 1,
                    tall: 1,
                    elevation: 1
                }), O
            }
        });
        var Lc = o.Edge = function (T, p) {
            var e = this;
            fi(Lc, e), e.setSource(T), e.setTarget(p)
        };
        am("Edge", Fi, {
            _icon: "edge_icon",
            getUIClass: function () {
                return is
            },
            _22Q: function () {
                return Uc
            },
            getSource: function () {
                return this._source
            },
            getTarget: function () {
                return this._target
            },
            getSourceAgent: function () {
                return this._40I
            },
            getTargetAgent: function () {
                return this._41I
            },
            setSource: function (q) {
                var r = this;
                if (r._source !== q) {
                    var J = r._source;
                    r._source = q, J && J._16I(r), q && q._2I(r), r._7I(), r.fp("source", J, q)
                }
            },
            setTarget: function (l) {
                var B = this;
                if (B._target !== l) {
                    var A = B._target;
                    B._target = l, A && A._18I(B), l && l._4I(B), B._7I(), B.fp("target", A, l)
                }
            },
            isLooped: function () {
                var b = this;
                return b._source === b._target && !!b._source && !!b._target
            },
            _7I: function () {
                var C, U = this,
                    R = ym(U);
                U._40I !== R && (C = this._40I, C && C._15I(U), U._40I = R, R && R._1I(U), U.fp("sourceAgent", C, R), tp(C, U._41I), tp(R, U._41I));
                var w = Ji(U);
                U._41I !== w && (C = U._41I, C && C._17I(U), U._41I = w, w && w._3I(U), U.fp("targetAgent", C, w), tp(C, U._40I), tp(w, U._40I))
            },
            _22I: function (H) {
                this._52I = H, this.fp("edgeGroup", !0, !1)
            },
            getEdgeGroup: function () {
                return this._52I
            },
            isEdgeGroupHidden: function () {
                var b = this;
                return b._52I && b._52I.get(0) !== b && !b.getStyle(mk)
            },
            getEdgeGroupSize: function () {
                return this._52I ? this._52I.size() : 1
            },
            getEdgeGroupIndex: function () {
                return this._52I ? this._52I.indexOf(this) : 0
            },
            isEdgeGroupAgent: function () {
                var c = this,
                    b = c._52I;
                return b && !c.getStyle(mk) && b.size() > 1 && c === b.get(0)
            },
            toggle: function () {
                var J = this._52I,
                    U = !this.s(mk);
                J && J.size() > 1 && (J.each(function (k) {
                    k.s(mk, U)
                }), J.getSiblings().each(function (r) {
                    r !== J && r.each(function (M) {
                        M.fp("edgeGroup", V, r)
                    })
                }))
            },
            setStyle: function (l, R) {
                (l === jh || "edge.segments" === l) && (R = rp(R)), Lc.superClass.setStyle.call(this, l, R)
            },
            onStyleChanged: function (i) {
                Lc.superClass.onStyleChanged.apply(this, arguments), Gh[i] && tp(this._41I, this._40I)
            },
            getSerializableProperties: function () {
                var x = Lc.superClass.getSerializableProperties.call(this);
                return Zc(x, {
                    source: 1,
                    target: 1
                }), x
            }
        });
        var Uk = o.Group = function () {
            fi(Uk, this)
        };
        am("Group", Lg, {
            _image: "group_image",
            _icon: "group_icon",
            _57O: !1,
            getUIClass: function () {
                return to
            },
            onChildAdded: function () {
                Uk.superClass.onChildAdded.apply(this, arguments), this._81I()
            },
            onChildRemoved: function () {
                Uk.superClass.onChildRemoved.apply(this, arguments), this._81I()
            },
            _81I: function () {
                var m = this;
                if (!m._54I && !zp) {
                    var E = m.getChildrenRect();
                    E && (m._53I = 1, m.p(Jn(m.s("group.position"), E, m.getSize())), delete m._53I)
                }
            },
            getChildrenRect: function () {
                var c, F = this;
                return F.eachChild(function (p) {
                    c = jm(c, F.getChildRect(p))
                }), c
            },
            getChildRect: function (B) {
                var x;
                return Zl(B) && B.s(mm) && (Bb(B) && B.isExpanded() && B.eachChild(function (D) {
                    x = jm(x, B.getChildRect(D))
                }), !x && B.getRect && (x = B.getRect())), x
            },
            setPosition: function (d, x) {
                var P = this;
                if (!P._54I) {
                    var o;
                    o = 2 === arguments.length ? {
                        x: d,
                        y: x
                    } : d, zp || P._53I || (P._54I = 1, ji(P._children, o.x - P._position.x, o.y - P._position.y), delete P._54I), Uk.superClass.setPosition.call(this, o)
                }
            },
            toggle: function () {
                this.setExpanded(!this.isExpanded())
            },
            isExpanded: function () {
                return this._57O
            },
            setExpanded: function (w) {
                var Y = this;
                if (Y._57O !== w) {
                    var P = Y._57O;
                    Y._57O = w, Y.fp("expanded", P, Y._57O), Y._8I()
                }
            },
            _8I: function () {
                Uk.superClass._8I.call(this), this.eachChild(function (g) {
                    Zl(g) && g._8I()
                })
            },
            onStyleChanged: function (V) {
                Uk.superClass.onStyleChanged.apply(this, arguments), "group.position" === V && this._81I()
            },
            getSerializableProperties: function () {
                var E = Uk.superClass.getSerializableProperties.call(this);
                return E.expanded = 1, E
            }
        });
        var ql = o.Grid = function () {
            fi(ql, this)
        };
        am("Grid", Lg, {
            IRotatable: !1,
            _icon: "grid_icon",
            _image: V,
            getUIClass: function () {
                return Dk
            },
            setRotation: function () { },
            getCellRect: function (m, s) {
                var y = this,
                    $ = y.s("grid.row.count"),
                    w = y.s("grid.column.count");
                if (0 >= $ || 0 >= w || 0 > m || m >= $ || 0 > s || s >= w) return V;
                var g, P, h, Y = y.getRect(),
                    K = y.s("grid.row.percents"),
                    G = y.s("grid.column.percents");
                if (db(Y, y, "grid.border", -1), K && K._as && (K = K._as), G && G._as && (G = G._as), K && K.length === $) {
                    for (h = 0, g = 0; m > g; g++) h += Y.height * K[g];
                    Y.y += h, Y.height = Y.height * K[m]
                } else Y.height = Y.height / $, Y.y += Y.height * m;
                if (G && G.length === w) {
                    for (P = 0, g = 0; s > g; g++) P += Y.width * G[g];
                    Y.x += P, Y.width = Y.width * G[s]
                } else Y.width = Y.width / w, Y.x += Y.width * s;
                return Gb(Y, -y.s("grid.gap")), Y
            }
        });
        var Vd = o.Shape = function () {
            fi(Vd, this), this._59O = new Io
        };
        Vd.__de__ = se, am("Shape", Lg, {
            ms_ac: ["thickness", "closePath"],
            _icon: "shape_icon",
            _thickness: 10,
            _closePath: !1,
            getUIClass: function () {
                return yh
            },
            _22Q: function () {
                return Th
            },
            getLength: function (o) {
                return Rh(km(this._59O, this._58O, o, this._closePath))
            },
            getSegments: function () {
                return this._58O
            },
            toSegments: function () {
                var o = this._58O;
                return o ? new Io(o._as.slice(0)) : o
            },
            setSegments: function (N) {
                var i = this._58O;
                N = N ? Ue(N) ? new Io(N.slice(0)) : new Io(N._as.slice(0)) : new Io, (i && N && i._as.join(",") !== N._as.join(",") || i !== N) && (this._58O = N, this.fp("segments", i, N))
            },
            getPoints: function () {
                return this._59O
            },
            toPoints: function () {
                var I = this._59O;
                return new Io(I._as.slice(0))
            },
            setPoints: function (g) {
                var F = this._59O;
                g = g ? Ue(g) ? new Io(g.slice(0)) : new Io(g._as.slice(0)) : new Io, (F && g && F._as.join(",") !== g._as.join(",") || F !== g) && (this._59O = g, this.fs(), this.fp("points", F, g))
            },
            addPoint: function (W, $) {
                var e = this.toPoints();
                e.add(W, $), this.setPoints(e)
            },
            setPoint: function (c, H) {
                var y = this.toPoints();
                y.set(c, H), this.setPoints(y)
            },
            removePointAt: function (Y) {
                var o = this.toPoints();
                o.removeAt(Y), this.setPoints(o)
            },
            setWidth: function (P) {
                var x = this;
                if (1 > P && (P = 1), !x._55I && !zp && x.getWidth()) {
                    x._55I = 1;
                    var g = x._position.x,
                        d = P / x.getWidth(),
                        S = x.toPoints(),
                        s = new Io;
                    S.each(function (G) {
                        s.add({
                            x: (G.x - g) * d + g,
                            y: G.y,
                            e: G.e
                        })
                    }), x.setPoints(s), x.fs(), delete x._55I
                }
                Vd.superClass.setWidth.call(x, P)
            },
            setHeight: function (T) {
                var W = this;
                if (1 > T && (T = 1), !W._55I && !zp && W.getHeight()) {
                    W._55I = 1;
                    var _ = W._position.y,
                        i = T / W.getHeight(),
                        V = W.toPoints(),
                        x = new Io;
                    V.each(function (w) {
                        x.add({
                            x: w.x,
                            y: (w.y - _) * i + _,
                            e: w.e
                        })
                    }), W.setPoints(x), W.fs(), delete W._55I
                }
                Vd.superClass.setHeight.call(W, T)
            },
            setPosition: function (B, u) {
                var Y, Z = this;
                if (!Z._28Q) {
                    if (Z._28Q = 1, !Z._55I && !zp) {
                        Y = 2 === arguments.length ? {
                            x: B,
                            y: u
                        } : B;
                        var N = Y.x - Z._position.x,
                            $ = Y.y - Z._position.y;
                        if (0 === N && 0 === $) return delete Z._28Q, void 0;
                        Z._55I = 1;
                        var P = Z.toPoints(),
                            y = new Io;
                        P.each(function (d) {
                            y.add({
                                x: d.x + N,
                                y: d.y + $,
                                e: d.e
                            })
                        }), Z.setPoints(y), Z.fs(), delete Z._55I
                    }
                    Vd.superClass.setPosition.apply(Z, arguments), delete Z._28Q
                }
            },
            fs: function () {
                this.fireShapeChange()
            },
            fireShapeChange: function () {
                var i = this;
                if (!i._55I && !zp) {
                    var W = Aq(i._59O);
                    W && (i._55I = 1, i.setRect(W), delete i._55I)
                }
                i.fp(aq, !1, !0)
            },
            getSerializableProperties: function () {
                var m = Vd.superClass.getSerializableProperties.call(this);
                return m.segments = 1, m.points = 1, m.thickness = 1, m.closePath = 1, m
            }
        });
        var Ti = o.Polyline = function () {
            fi(Ti, this), this.s({
                "shape.background": null,
                "shape.border.width": 2
            })
        };
        am("Polyline", Vd, {
            IRotatable: !1,
            _icon: "polyline_icon",
            _22Q: function () {
                return Sp
            },
            getUIClass: function () {
                return Lm
            },
            setRotationX: function () { },
            setRotation: function () { },
            setRotationZ: function () { },
            setClosePath: function () { },
            setTall: function (b) {
                var W = this;
                if (!W._24Q && !zp && W.getTall()) {
                    W._24Q = 1;
                    var S = W._54O,
                        n = b / W.getTall();
                    W._59O.each(function (r) {
                        r.e = r.e == V ? S : (r.e - S) * n + S
                    }), W.fs(), delete W._24Q
                }
                Ti.superClass.setTall.call(W, b)
            },
            setElevation: function (I) {
                var F = this;
                if (!F._24Q && !zp) {
                    F._24Q = 1;
                    var w = I - F._54O;
                    F._59O.each(function (h) {
                        h.e == V ? h.e = I : h.e += w
                    }), F.fs(), delete F._24Q
                }
                Ti.superClass.setElevation.apply(F, arguments)
            },
            fireShapeChange: function () {
                var D = this,
                    T = D._59O;
                if (!D._24Q && !zp) {
                    var O = T.size();
                    if (O) {
                        var K = 1,
                            j = T.get(0),
                            l = D._54O;
                        j.e == V && (j.e = l);
                        for (var Z = j.e, k = 0; O > K; K++) {
                            j = T.get(K), j.e == V && (j.e = l);
                            var o = J(Z, j.e),
                                i = C(Z + k, j.e);
                            Z = o, k = i - o
                        }
                        D._24Q = 1, D.setTall(k), D.setElevation(Z + k / 2), delete D._24Q
                    }
                }
                Ti.superClass.fireShapeChange.apply(D, arguments)
            }
        });
        var ko = o.SubGraph = function () {
            fi(ko, this)
        };
        am("SubGraph", Lg, {
            ISubGraph: 1,
            _image: "subGraph_image",
            _icon: "subGraph_icon",
            _8I: function () {
                ko.superClass._8I.call(this), this.eachChild(function (t) {
                    Zl(t) && t._8I()
                })
            }
        }), o.EdgeGroup = function (M, F) {
            this._70O = M, this._siblings = F;
            for (var i, e, A = 0, t = M.size(), N = U[mk]; t > A; A++)
                if (i = M.get(A).getStyle(mk, !1), i != V) {
                    N = i;
                    break
                }
            N == V && (N = !0);
            var J = r.edgeGroupAgentFunc;
            for (J && (e = J(M), e && e !== M.get(0) && (M.remove(e), M.add(e, 0))), A = 0; t > A; A++) M.get(A).s(mk, N)
        }, am("EdgeGroup", w, {
            getEdges: function () {
                return this._70O
            },
            size: function () {
                return this._70O.size()
            },
            get: function (V) {
                return this._70O.get(V)
            },
            indexOf: function (c) {
                return this._70O.indexOf(c)
            },
            each: function (P, L) {
                this._70O.each(P, L)
            },
            getSiblings: function () {
                return this._siblings
            },
            eachSiblingEdge: function (d, M) {
                this._siblings.each(function (f) {
                    f._70O.each(d, M)
                })
            }
        });
        var Vo = o.JSONSerializer = function (b, E) {
            this.dm = this._dataModel = b, this._hierarchical = !!E
        };
        am("JSONSerializer", w, {
            ms_ac: ["hierarchical"],
            serialize: function (M) {
                return JSON.stringify(this.toJSON(), function (Y, V) {
                    return _f(V) ? oj(V) : V
                }, M == V ? 2 : M)
            },
            toJSON: function () {
                var b = this,
                    c = b.dm,
                    K = c.getRoots(),
                    W = b.json = {
                        v: r.getVersion(),
                        d: [],
                        a: {}
                    },
                    Z = c.getSerializableAttrs();
                for (var t in Z) {
                    var p = c.a(t);
                    p !== l && b[Sq](t, p, W.a)
                }
                return vf(W.a) && delete W.a, b._hierarchical ? K.each(b.serializeData, this) : c.each(function (t) {
                    b.serializeData(t)
                }), W
            },
            isSerializable: function () {
                return !0
            },
            getProperties: function (h) {
                return h.getSerializableProperties()
            },
            getStyles: function (A) {
                return A.getSerializableStyles()
            },
            getAttrs: function (J) {
                return J.getSerializableAttrs()
            },
            serializeData: function (l) {
                var C = this;
                if (C.isSerializable(l)) {
                    var q, Z, a, h, M = l.getClass(),
                        E = new M,
                        H = {
                            c: l.getClassName(),
                            i: l.getId(),
                            p: {},
                            s: {},
                            a: {}
                        };
                    C.json.d.push(H), q = C.getProperties(l);
                    for (Z in q) h = Xl(Z), l[h] && (a = l[h](), a !== E[h]() && C[Sq](Z, a, H.p));
                    q = C.getStyles(l);
                    for (Z in q) a = l.s(Z), a !== E.s(Z) && C[Sq](Z, a, H.s);
                    q = C.getAttrs(l);
                    for (Z in q) a = l.a(Z), a !== E.a(Z) && C[Sq](Z, a, H.a);
                    vf(H.p) && delete H.p, vf(H.s) && delete H.s, vf(H.a) && delete H.a
                }
                C._hierarchical && l.getChildren().each(C.serializeData, C)
            },
            serializeValue: function (k, X, f) {
                Vm(X) ? X = {
                    __a: X._as
                } : X instanceof Fi && (X = {
                    __i: X.getId()
                }), f[k] = X
            },
            deserialize: function (x, e, G) {
                zp = !0;
                var t = this;
                x = t.json = Yp(x) ? JSON.parse(x) : x, t._82I = {};
                for (var i = t.dm, K = new Io, U = new Io, s = 0, w = x.d.length; w > s; s++) {
                    var Y = x.d[s],
                        q = zg(Y.c),
                        k = new q,
                        $ = Y.i;
                    G && $ != V && (k._id = $), t._82I[$] = k, K.add(k), U.add(Y)
                }
                for (s = 0; w > s; s++) t.deserializeData(K.get(s), U.get(s));
                K.each(function (L) {
                    e && !L.getParent() && L.setParent(e), i.add(L)
                });
                for (var O in x.a) i.a(O, t[vp](x.a[O]));
                return zp = !1, K
            },
            deserializeData: function (f, p) {
                for (var n in p.p) f[yl(n)](this[vp](p.p[n]));
                for (n in p.s) f.s(n, this[vp](p.s[n]));
                for (n in p.a) f.a(n, this[vp](p.a[n]))
            },
            deserializeValue: function (u) {
                if (bs(u)) {
                    var G = u.__i;
                    if (G != V) return this._82I[G];
                    if (G = u.__a, Ue(G)) return new Io(G)
                }
                return u
            }
        }), Zc(Kj, {
            serialize: function (J, k) {
                return new Vo(this, k).serialize(J)
            },
            toJSON: function (Y) {
                return new Vo(this, Y).toJSON()
            },
            deserialize: function (F, h, i) {
                return new Vo(this).deserialize(F, h, i)
            }
        }), dn.GraphView = function (c) {
            var _ = this;
            _._24I = {}, _._34I = new Io, _._25I = {}, _._56I = {}, _._view = Xh(1), _._canvas = Qk(_._view), _.dm(c ? c : new Kj), _.setEditable(!1), _.setScrollBarVisible(r.graphViewScrollBarVisible)
        }, pc("GraphView", w, {
            ms_v: 1,
            ms_gv: 1,
            ms_bnb: 1,
            ms_tip: 1,
            ms_dm: 1,
            ms_lp: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            _52o: 1,
            _51o: 1,
            ms_ac: ["layers", ki, ij, ck, go, "resettable", "editInteractor", er, "pannable", "rectSelectable", "autoScrollZone", ej, "movableFunc", "editableFunc", "pointEditableFunc", "rectEditableFunc", "rotationEditableFunc", "rectSelectBackground", "rectSelectBorderColor", "editPointSize", "editPointBorderColor", "editPointBackground", "hoverDelay"],
            _resettable: r.graphViewResettable,
            _pannable: r.graphViewPannable,
            _rectSelectable: r.graphViewRectSelectable,
            _autoScrollZone: r.graphViewAutoScrollZone,
            _rectSelectBackground: r.graphViewRectSelectBackground,
            _rectSelectBorderColor: r.graphViewRectSelectBorderColor,
            _editPointSize: r.graphViewEditPointSize,
            _editPointBorderColor: r.graphViewEditPointBorderColor,
            _editPointBackground: r.graphViewEditPointBackground,
            _scrollBarColor: $h,
            _scrollBarSize: Ah,
            _autoHideScrollBar: rm,
            _autoMakeVisible: Aj,
            setEditable: function (T) {
                var K = this,
                    S = dn.XEditInteractor;
                T ? K.setInteractors([new po(K), S ? new S(K) : new Yl(K), new Fe(K), new gd(K), new Gq(K, {
                    editable: !S
                })]) : K.setInteractors([new po(K), new Fe(K), new gd(K), new Gq(K, {
                    editable: !1
                })])
            },
            getCanvas: function () {
                return this._canvas
            },
            _33I: function (j) {
                var J = j.getUIClass();
                return J ? new J(this, j) : V
            },
            getDataUI: function (z) {
                var v = this,
                    s = v._25I[z._id];
                return s === l && (s = v._33I(z), v._25I[z._id] = s), s
            },
            invalidateAll: function (t) {
                var M = this;
                if (t) {
                    for (var s in M._25I) {
                        var v = M._25I[s];
                        v && v.dispose()
                    }
                    M._25I = {}, M._56I = {}, M._24I = {}, M._34I.clear(), M.redraw()
                } else M.dm().each(function (t) {
                    M.invalidateData(t)
                })
            },
            invalidateSelection: function () {
                var $ = this;
                $.sm().each(function (E) {
                    $.invalidateData(E)
                })
            },
            invalidateData: function (g) {
                var l = this;
                l._24I[g._id] = g, l._21Q(g), l.iv()
            },
            _21Q: function (Z) {
                var C = this,
                    r = C._24I;
                if (gj(Z) && Dl[Z.s(zl)]) {
                    var O = Z.getSourceAgent();
                    O && O.getAgentEdges().each(function (A) {
                        r[A._id] = A
                    }), O = Z.getTargetAgent(), O && O.getAgentEdges().each(function (c) {
                        r[c._id] = c
                    }), C.iv()
                }
            },
            redraw: function (q) {
                var D = this;
                D._32I || (q ? D._34I.add(q) : (D._32I = 1, D._34I.clear()), D.iv())
            },
            each: function (b, s) {
                var r, u, B, H = 0,
                    L = this._layers,
                    o = this._dataModel._datas._as,
                    k = o.length;
                if (L)
                    for (var c = L.length; c > H; H++) {
                        B = L[H];
                        for (var D = 0; k > D; D++)
                            if (r = o[D], r._layer === B && (u = s ? b.call(s, r) : b(r), u === !1)) return
                    } else
                    for (; k > H; H++)
                        if (r = o[H], u = s ? b.call(s, r) : b(r), u === !1) return
            },
            reverseEach: function (z, k) {
                var R, j, I, i, t = this._layers,
                    H = this._dataModel._datas._as,
                    O = H.length;
                if (t)
                    for (R = t.length - 1; R >= 0; R--) {
                        i = t[R];
                        for (var x = O - 1; x >= 0; x--)
                            if (j = H[x], j._layer === i && (I = k ? z.call(k, j) : z(j), I === !1)) return
                    } else
                    for (R = O - 1; R >= 0; R--)
                        if (j = H[R], I = k ? z.call(k, j) : z(j), I === !1) return
            },
            getViewRect: function () {
                return this._29I
            },
            getContentRect: function () {
                var c = this,
                    B = c._84I;
                return B || (c.each(function (g) {
                    c.isVisible(g) && (B = jm(B, c.getDataUIBounds(g)))
                }), c._84I = B ? B : Yd), c._84I
            },
            getScrollRect: function () {
                return jm(this.getContentRect(), this._29I)
            },
            fitData: function (U, M, J, C, k) {
                var y = this;
                if (!y.getWidth() || !y.getHeight()) return k || Om(y.fitData, y, [U, M, J, C, !0], 200), void 0;
                y.makeVisible(U), y.validate();
                var x = y.getDataUIBounds(U);
                x && (x = Zj(x), Gb(x, J == V ? 20 : J), y.fitRect(x, M, C))
            },
            fitContent: function (I, M, f, i) {
                var j = this;
                if (!j.getWidth() || !j.getHeight()) return i || Om(j.fitContent, j, [I, M, f, !0], 200), void 0;
                j.validate();
                var G = Zj(j.getContentRect());
                Gb(G, M == V ? 20 : M), j.fitRect(G, I, f)
            },
            fitRect: function (g, X, L) {
                var E = this,
                    x = E.getWidth(),
                    w = E.getHeight(),
                    i = g.x + g.width / 2,
                    S = g.y + g.height / 2,
                    Y = J(x / g.width, w / g.height),
                    k = E._zoom,
                    p = -i * k + x / 2,
                    o = -S * k + w / 2;
                0 === Y || isNaN(Y) || (L && (Y = J(1, Y)), X ? E.setTranslate(p, o, {
                    finishFunc: function () {
                        E.setZoom(Y, X)
                    }
                }) : (E.setTranslate(p, o), E.setZoom(Y)))
            },
            toCanvas: function (R) {
                this.validateImpl();
                var M = this,
                    b = M.getContentRect(),
                    k = Qk(),
                    H = M._zoom,
                    K = b.x * H,
                    F = b.y * H,
                    a = b.width * H,
                    P = b.height * H;
                Qq(k, a, P, 1);
                var Y = Gg(k);
                return R && Sf(Y, 0, 0, a, P, R), Ze(Y, -K, -F), Y.scale(H, H), M._42(Y), Y.restore(), k
            },
            toDataURL: function (y, C) {
                return this.toCanvas(y).toDataURL(C || "image/png", 1)
            },
            getClipBounds: function () {
                return this._74O
            },
            _42: function (b, L) {
                var k, f, T = this;
                T._93db(b, L), T.each(function (v) {
                    T._56I[v._id] && (k = T.getDataUI(v), k && (f = k._79o(), o.HtmlNode && v instanceof o.HtmlNode ? k._42(b) : (!L || wk(L, f)) && k._42(b)))
                }), T._92db(b, L)
            },
            validateImpl: function () {
                var w, o, U, W, f, R = this,
                    M = R.tx(),
                    N = R.ty(),
                    Z = R._zoom,
                    b = R._canvas,
                    $ = this.getWidth(),
                    j = this.getHeight(),
                    y = R._29I,
                    G = {
                        x: -M / Z,
                        y: -N / Z,
                        width: $ / Z,
                        height: j / Z
                    },
                    X = {},
                    l = R._34I,
                    D = R._24I,
                    i = R._32I,
                    q = R._23I;
                ($ !== b.clientWidth || j !== b.clientHeight) && (Qq(b, $, j), i = 1), i || ue(G, y) || (i = 1), R._29I = G, R.each(function (d) {
                    o = d._id;
                    var l = X[o] = R.isVisible(d);
                    l !== R._56I[o] && (D[o] = d, U = R.getDataUI(D[o]), U && U._84o(l), R._84o(d, l))
                }, R);
                for (o in D) U = R.getDataUI(D[o]), U && (!i && R._56I[o] && (f = U._79o(), f && l.add(f)), U.invalidate()), R._83I = 1;
                if (R._56I = X, !i)
                    for (o in D) X[o] && (U = R.getDataUI(D[o]), U && (f = U._79o(), f && l.add(f)));
                if (i ? W = G : (l.each(function (C) {
                        wk(G, C) && (W = jm(W, C))
                }), W && (Gb(W, C(1, 1 / Z)), W.x = S(W.x * Z) / Z, W.y = S(W.y * Z) / Z, W.width = n(W.width * Z) / Z, W.height = n(W.height * Z) / Z, W = Hr(G, W))), R._74O = W, W && (w = Gg(b), yf(w, M, N, Z), w.beginPath(), w.rect(W.x, W.y, W.width, W.height), w.clip(), w.clearRect(W.x, W.y, W.width, W.height), R._42(w, W), w.restore(), delete R._74O), R._24I = {}, l.clear(), delete R._32I, q && $ > 0 && j > 0) {
                    var U = R.getDataUI(q);
                    if (U) {
                        var f = U._79o(),
                            t = R._29I,
                            B = t.x,
                            H = t.y,
                            P = t.width,
                            O = t.height,
                            Z = R._zoom;
                        f && !wk(f, t) && (f.x + f.width < B && R.tx(-f.x * Z), f.x > B + P && R.tx(-(f.x + f.width - P) * Z), f.y + f.height < H && R.ty(-f.y * Z), f.y > H + O && R.ty(-(f.y + f.height - O) * Z))
                    }
                    delete R._23I
                }
                R._83I && (delete R._83I, delete R._84I), R._98O()
            },
            isScrollBarVisible: function () {
                return !!this._79O
            },
            setScrollBarVisible: function (j) {
                var R = this;
                j !== R.isScrollBarVisible() && (j ? (yk(R._view, R._79O = Xh()), yk(R._79O, R._27I = Xh()), yk(R._79O, R._28I = Xh())) : (Kq(R._79O), delete R._79O, delete R._27I, delete R._28I), R.fp("scrollBarVisible", !j, j))
            },
            showScrollBar: function () {
                var y = this;
                y._79O && (y._85I || (k(function () {
                    y._86I()
                }, pi), y.iv()), y._85I = new Date)
            },
            _86I: function () {
                var C = this;
                if (C._85I) {
                    var f = new Date,
                        K = f.getTime();
                    K - C._85I.getTime() >= pi ? (delete C._85I, C.iv()) : k(function () {
                        C._86I()
                    }, pi)
                }
            },
            _98O: function () {
                var Z = this,
                    N = this._27I,
                    b = this._28I;
                if (Z._79O) {
                    if (Z._autoHideScrollBar && !Z._85I) return N.style.visibility = wo, b.style.visibility = wo, void 0;
                    var R = Z.getScrollBarColor(),
                        _ = Z._zoom,
                        F = Z.getScrollBarSize(),
                        A = Z.getViewRect(),
                        X = Z.getScrollRect(),
                        L = A.height * _,
                        C = X.height * _,
                        v = A.width * _ - F - 2,
                        O = L * ((A.y - X.y) * _ / C),
                        J = L * (L / C),
                        r = N.style;
                    C - .5 > L ? ($g > J && (O = O + J / 2 - $g / 2, 0 > O && (O = 0), O + $g > L && (O = L - $g), J = $g), Xe(N, v, O, F, J), r.visibility = ak, r.background = R, r.borderRadius = F / 2 + Fb) : r.visibility = wo;
                    var n = A.width * _,
                        W = X.width * _,
                        O = A.height * _ - F - 2,
                        v = n * ((A.x - X.x) * _ / W),
                        Y = n * (n / W),
                        r = b.style;
                    W - .5 > n ? ($g > Y && (v = v + Y / 2 - $g / 2, 0 > v && (v = 0), v + $g > n && (v = n - $g), Y = $g), Xe(b, v, O, Y, F), r.visibility = ak, r.background = R, r.borderRadius = F / 2 + Fb) : r.visibility = wo
                }
            },
            setDataModel: function (X) {
                var R = this,
                    c = R._dataModel,
                    O = R._3o;
                c !== X && (c && (c.umm(R.handleDataModelChange, R), c.umd(R.handleDataPropertyChange, R), c.removeIndexChangeListener(R._75O, R), O || c.sm().ums(R._16o, R)), R._dataModel = X, X.mm(R.handleDataModelChange, R), X.md(R.handleDataPropertyChange, R), X.addIndexChangeListener(R._75O, R), O ? O._21I(X) : X.sm().ms(R._16o, R), R.invalidateAll(!0), R.fp(ze, c, X))
            },
            handleDataPropertyChange: function ($) {
                this.invalidateData($.data)
            },
            onPropertyChanged: function (l) {
                var d = this,
                    e = l.property;
                d.redraw(), ro[e] ? d.showScrollBar() : e === er && d.onCurrentSubGraphChanged(l)
            },
            onCurrentSubGraphChanged: function () {
                this.reset()
            },
            handleDataModelChange: function (m) {
                var n = this,
                    r = m.kind,
                    G = m.data;
                if (n._83I = 1, "add" === r) n.invalidateData(G), gj(G) && G.getEdgeGroup() && G.getEdgeGroup().eachSiblingEdge(n.invalidateData, n);
                else if (r === ok) {
                    n._21Q(G);
                    var H = G._id,
                        Q = n._25I[H];
                    if (Q) {
                        if (n._56I[H]) {
                            var O = Q._79o();
                            O && n.redraw(O)
                        }
                        Q.dispose(), delete n._25I[H], delete n._24I[H], delete n._56I[H]
                    }
                    G === n._currentSubGraph && n.setCurrentSubGraph(V)
                } else r === Be && (n.invalidateAll(!0), n.setCurrentSubGraph(V))
            },
            _75O: function (R) {
                this.invalidateData(R.data)
            },
            _76O: function (V) {
                var $ = this;
                if ($.isVisible(V)) {
                    for (var e = V; e._parent && $.isVisible(e._parent) ;) e = e._parent;
                    e && e !== V && $._dataModel._76O(e), $._dataModel._76O(V)
                }
            },
            isMovable: function ($) {
                var j = this;
                return gj($) && $.getStyle(zl) !== Lf ? !1 : $.s("2d.movable") ? j._movableFunc ? j._movableFunc($) : !0 : !1
            },
            isSelectable: function (P) {
                return P.s("2d.selectable") && this.sm().isSelectable(P)
            },
            isEditable: function (U) {
                var S = this;
                if (!S._editInteractor || !S.isSelected(U)) return !1;
                if (Bb(U)) {
                    var d = S.getDataUI(U);
                    if (!d || d._88I) return !1
                }
                return gj(U) && U.getStyle(zl) !== Lf ? !1 : U.s("2d.editable") ? S._editableFunc ? S._editableFunc(U) : !0 : !1
            },
            handleDelete: function () {
                this._editInteractor && this.removeSelection()
            },
            isPointEditable: function (A) {
                return Zl(A) && 0 !== A.getRotation() ? !1 : this._pointEditableFunc ? this._pointEditableFunc(A) : !0
            },
            isRectEditable: function (G) {
                return Zl(G) && 0 !== G.getRotation() ? !1 : this._rectEditableFunc ? this._rectEditableFunc(G) : !0
            },
            isRotationEditable: function (k) {
                return k.setRotation && k.IRotatable !== !1 ? this._rotationEditableFunc ? this._rotationEditableFunc(k) : !0 : !1
            },
            getRotationPoint: function (q) {
                var X = pp(q.getRotation(), 0, -q.getHeight() / 2 - (e ? 32 : 16)),
                    c = q.p();
                return X.x += c.x, X.y += c.y, X
            },
            getLogicalPoint: function (n) {
                var Z = this;
                return Dm(n, Z._canvas, Z.tx(), Z.ty(), Z._zoom, Z._zoom)
            },
            getSelectedDataAt: function (p) {
                var h = this;
                return this.getDataAt(p, function (n) {
                    return h.isSelected(n)
                })
            },
            getDataAt: function (C, F, L) {
                C.target && (C = this.lp(C));
                var T;
                return this.reverseEach(function (p) {
                    return (F ? F(p) : this.isSelectable(p)) && this.rectIntersects(p, _i(C.x, C.y, L)) ? (T = p, !1) : void 0
                }, this), T
            },
            getIconInfoAt: function (x, c) {
                var X = this;
                if (x.target && (x = X.lp(x)), c || (c = X.getDataAt(x)), c) {
                    var w = X.getDataUI(c);
                    if (w && w._38o) {
                        var N, o = w._38o,
                            n = new Io;
                        for (N in o.icons) n.add(N);
                        for (var $ = n.size() - 1; $ >= 0; $--) {
                            N = n.get($);
                            for (var d = o.rects[N], j = d.rotation, T = d.length - 1; T >= 0; T--) {
                                var _ = d[T],
                                    q = _.width,
                                    A = _.height,
                                    J = {
                                        x: x.x - _.x - q / 2,
                                        y: x.y - _.y - A / 2
                                    };
                                j != V && (J = pp(-j, J.x, J.y));
                                var _ = {
                                    x: -q / 2,
                                    y: -A / 2,
                                    width: q,
                                    height: A
                                };
                                if (Rq(_, J)) return {
                                    key: N,
                                    index: T,
                                    name: o.icons[N].names[T],
                                    rect: d[T],
                                    point: x,
                                    rotation: j,
                                    relativeRect: _,
                                    relativePoint: J,
                                    data: c
                                }
                            }
                        }
                    }
                }
                return V
            },
            getDatasInRect: function ($, f, W) {
                W === l && (W = 1);
                var j = this,
                    M = new Io;
                return j.reverseEach(function (m) {
                    W && !j.isSelectable(m) || (f ? j.rectIntersects(m, $) : j.rectContains(m, $)) && M.add(m)
                }), M
            },
            moveSelection: function (A, Q) {
                var O, W = this,
                    n = W.dm();
                n && (O = n.getHistoryManager()), O && O.beginInteraction(), ji(W.sm().toSelection(W.isMovable, W), A, Q), O && O.endInteraction()
            },
            getDataUIBounds: function (J) {
                var t = this.getDataUI(J);
                return t ? t._79o() : V
            },
            getBoundsForGroup: function (j) {
                return j.s(mm) ? this.getDataUIBounds(j) : V
            },
            rectIntersects: function (b, H) {
                this.validate();
                var f = V;
                if (this._56I[b._id]) {
                    var n = this._25I[b._id];
                    if (n) {
                        var U = n._79o();
                        if (Ac(H, U)) f = !0;
                        else if ((H = Hr(H, U)) && (n.rectIntersects && (f = n.rectIntersects(H)), f == V)) {
                            if (!b.s("pixelPerfect")) return !0;
                            var A = H.x,
                                D = H.y,
                                l = H.width,
                                J = H.height,
                                t = 1,
                                E = r.hitMaxArea,
                                e = l * J;
                            e > E && (t = E / e);
                            var o = Tl(l * t, J * t);
                            Ze(o, -A * t, -D * t), o.scale(t, t), n._42(o);
                            try {
                                for (var C = 0, N = o.getImageData(0, 0, l * t, J * t).data; C < N.length; C += 4)
                                    if (0 !== N[C + 3]) {
                                        f = !0;
                                        break
                                    }
                                o.restore()
                            } catch (z) {
                                ph = V, f = !0
                            }
                        }
                    }
                }
                return f ? !0 : !1
            },
            rectContains: function (S, u) {
                if (this._56I[S._id]) {
                    var j = this._25I[S._id];
                    if (j) return Ac(u, j._79o())
                }
                return !1
            },
            reset: function () {
                this.setZoom(1), this.setTranslate(0, 0)
            },
            handleKeyDown: function (V) {
                var p = this,
                    N = p._focusData,
                    j = N && p._25I[N._id],
                    n = 0,
                    D = p._dataModel._datas;
                N && N._enabled && N._editable && j && j.onKeyDown && j.onKeyDown(V) === !0 || (9 === V.keyCode && (N && (n = D.indexOf(N), Ag(V) ? -1 === --n && (n = 0) : ++n === D.size() && (n = 0)), p._focusData = N = D.get(n), p.sm().setSelection(N)), mc(V) ? p.selectAll() : xe(V) && p.isResettable() && p.reset(), p.sm().isEmpty() || (cg(V) && p.handleDelete(V), xb(V) && (p.moveSelection(-1, 0), p.fi({
                    kind: "moveLeft"
                })), yg(V) && (p.moveSelection(0, -1), p.fi({
                    kind: "moveUp"
                })), Hb(V) && (p.moveSelection(1, 0), p.fi({
                    kind: "moveRight"
                })), _n(V) && (p.moveSelection(0, 1), p.fi({
                    kind: "moveDown"
                }))))
            },
            handleScroll: function (b, S) {
                Mh(b);
                var e = this.lp(b);
                S > 0 ? this.scrollZoomIn(e) : 0 > S && this.scrollZoomOut(e)
            },
            handlePinch: function (F, v, W) {
                v > W ? this.pinchZoomIn(F) : this.pinchZoomOut(F)
            },
            checkDoubleClickOnNote: function (F, $) {
                var h = this,
                    N = h.lp(F),
                    D = h.getDataUI($),
                    y = D.note2Info;
                return y && $.s("note2.toggleable") && Rq(y.clickRect, N) ? ($.s(rj, !$.s(rj)), h.fi({
                    kind: "toggleNote2",
                    event: F,
                    data: $
                }), !0) : (y = D.noteInfo, y && $.s("note.toggleable") && Rq(y.clickRect, N) ? ($.s(Sb, !$.s(Sb)), h.fi({
                    kind: "toggleNote",
                    event: F,
                    data: $
                }), !0) : !1)
            },
            _84o: function () { },
            isNoteVisible: function () {
                return this._zoom > .15
            },
            isLabelVisible: function () {
                return this._zoom > .15
            },
            isSelectVisible: function () {
                return this._zoom > .15
            },
            isEditVisible: function () {
                return this._zoom > .15
            },
            autoScroll: function (D, J) {
                var X = this,
                    w = X.getAutoScrollZone(),
                    Z = w / X.getZoom(),
                    b = w / 4,
                    M = X._29I,
                    g = X.lp(D),
                    W = {
                        x: X.tx(),
                        y: X.ty()
                    };
                return g && w > 0 && M && (g.x - M.x < Z ? X.translate(b, 0) : M.x + M.width - g.x < Z && X.translate(-b, 0), g.y - M.y < Z ? X.translate(0, b) : M.y + M.height - g.y < Z && X.translate(0, -b)), W.x = X.tx() - W.x, W.y = X.ty() - W.y, J && (J.x += W.x, J.y += W.y), W
            },
            getMoveMode: function (L, N) {
                var c = N.s("2d.move.mode");
                return c ? c : Ih["88"] ? "x" : Ih["89"] ? "y" : "xy"
            }
        });
        var Vf = function (I, K) {
            var y = this;
            y.gv = I, y.s = function (D) {
                return K.getStyle(D)
            }, y._data = K, y._87I = new Io
        };
        Ui(Vf, w, {
            _6I: V,
            ms_icons: 1,
            _84o: function () { },
            dispose: function () { },
            isShadowed: function () {
                return this.gv.isSelected(this._data) && "shadow" === this.s("select.type")
            },
            _2o: function () {
                var L = this,
                    n = L.gv.isSelected(L._data);
                return !n || L.isShadowed() ? 0 : this.s("select.width")
            },
            getBodyColor: function (q) {
                var t = this._data,
                    h = this.gv.getBodyColor(t);
                return h ? h : q ? t.getStyle(q) : V
            },
            _2Q: function (x) {
                return this.s(x)
            },
            _1Q: function (b, W, T, e) {
                var k = this.s,
                    F = k(W + ".dash.color");
                b.strokeStyle = F, b.lineWidth = T, b.stroke(), k(W + ".dash.3d") && Jj(b, F, k(W + ".dash.3d.color"), T, this.gv._zoom, k(W + ".dash.3d.accuracy")), Pe(b, e)
            },
            invalidate: function () {
                this._6I = V
            },
            _79o: function () {
                var z = this;
                if (!z._6I) {
                    z.labelInfo = z.label2Info = z.noteInfo = z.note2Info = z._38o = V, z._87I.clear(), z._3O();
                    var X = z._data,
                        B = z.gv;
                    z._55O = B.isEditable(X) ? {
                        _42O: B.isRectEditable(X),
                        _43O: B.isPointEditable(X),
                        _56O: B.isRotationEditable(X)
                    } : V, z._6I = z._81o()
                }
                return z._6I
            },
            _3O: function () { },
            getPosition: function () {
                return Yd
            },
            _68o: function (d, v) {
                d && this._87I.add(aj(d, v))
            },
            _81o: function () {
                var h = this,
                    B = h.s;
                h._24O(Fq, "getLabel"), h._24O(pf, "getLabel2"), h._26O($e, "getNote"), h._26O(Dq, "getNote2"), h._15O(), h._55O && h._48O();
                var J;
                if (h._87I.each(function (Z) {
                        J = jm(J, Z)
                }), J && h.isShadowed()) {
                    var Z = Zj(J);
                    Z.x += B("shadow.offset.x"), Z.y += B("shadow.offset.y"), Gb(Z, B("shadow.blur")), J = jm(J, Z)
                }
                return h._87I.clear(), J
            },
            _42: function (X) {
                var Q = this,
                    q = Q._data,
                    p = Q.gv,
                    g = Q.s,
                    h = g("opacity"),
                    o = this.isShadowed();
                if (o) {
                    var M = X.shadowOffsetX,
                        B = X.shadowOffsetY,
                        k = X.shadowBlur,
                        N = X.shadowColor;
                    X.shadowOffsetX = g("shadow.offset.x"), X.shadowOffsetY = g("shadow.offset.y"), X.shadowBlur = g("shadow.blur"), X.shadowColor = g("shadow.color")
                }
                if (h != V) {
                    var E = X.globalAlpha;
                    X.globalAlpha = h
                }
                Q._80o(X), p.isLabelVisible(q) && (Wj(X, Q.labelInfo), Wj(X, Q.label2Info)), p.isNoteVisible(q) && (ti(X, Q.noteInfo), ti(X, Q.note2Info)), Q._99O(X), h != V && (X.globalAlpha = E), o && (X.shadowOffsetX = M, X.shadowOffsetY = B, X.shadowBlur = k, X.shadowColor = N), Q._55O && p.isEditVisible(q) && Q._47O(X)
            },
            _80o: function () { },
            _47O: function () { },
            _24O: function (G, v) {
                var E = this,
                    Q = E._data,
                    X = E.gv,
                    I = E.s,
                    h = X[v](Q);
                if (h != V) {
                    var Z = I(G + ".scale"),
                        $ = I(G + ".max"),
                        o = I(G + ".position"),
                        O = E[G + "Info"] = {
                            label: h,
                            scale: Z,
                            color: X[v + "Color"](Q),
                            font: I(G + ".font"),
                            opacity: I(G + ".opacity"),
                            align: I(G + ".align"),
                            rotation: E.getRotation(I(G + ".rotation"), !1, o),
                            background: X[v + "Background"](Q)
                        },
                        n = Rp(O, h);
                    $ > 0 && $ < n.width && (O.labelWidth = n.width, n.width = $), 1 !== Z && (n.width *= Z, n.height *= Z);
                    var J = E.getPosition(o, I(G + ".offset.x"), I(G + ".offset.y"), n, I(G + ".position.fixed"));
                    if (n.x = J.x - n.width / 2, n.y = J.y - n.height / 2, E._68o(O.rect = n, O.rotation), 1 !== Z) {
                        var L = n.width / Z,
                            R = n.height / Z;
                        O.rect = {
                            x: J.x - L / 2,
                            y: J.y - R / 2,
                            width: L,
                            height: R
                        }
                    }
                }
            },
            _26O: function (f, l) {
                var c = this,
                    T = c.gv,
                    P = c._data,
                    $ = c.s,
                    j = T[l](P);
                if (j != V) {
                    var s, Y, H = $(f + ".scale"),
                        t = c[f + "Info"] = {
                            note: j,
                            scale: H,
                            data: P,
                            view: T,
                            expanded: $(f + ".expanded"),
                            font: $(f + ".font"),
                            color: $(f + ".color"),
                            opacity: $(f + ".opacity"),
                            align: $(f + ".align"),
                            icon: $(f + ".icon"),
                            backgroundImage: $(f + ".backgroundImage"),
                            borderWidth: $(f + ".border.width"),
                            borderColor: $(f + ".border.color"),
                            background: T[l + "Background"](P)
                        },
                        A = c.getPosition($(f + ".position"), $(f + ".offset.x"), $(f + ".offset.y")),
                        L = A.x,
                        u = A.y;
                    if (t.expanded) {
                        var X, W = $(f + ".max"),
                            g = $(f + ".backgroundImage");
                        g ? (g = Bg(g), X = {
                            width: Vk(g, P),
                            height: dd(g, P)
                        }) : X = Rp(t, j), X.width += 6, X.height += 2, W > 0 && W < X.width && (t.labelWidth = X.width, X.width = W), s = X.width, Y = X.height + 8, t.clickRect = {
                            x: L - s * H / 2,
                            y: u - Y * H,
                            width: s * H,
                            height: Y * H * X.height / Y
                        }
                    } else {
                        var J = $(f + ".icon");
                        J ? (J = Bg(J), s = Vk(J, P), Y = dd(J, P)) : (s = 12, Y = 18), t.clickRect = {
                            x: L - s * H / 2,
                            y: u - Y * H,
                            width: s * H,
                            height: Y * H
                        }
                    }
                    t.rect = {
                        x: L - s / 2,
                        y: u - Y * H / 2 - Y / 2,
                        width: s,
                        height: Y
                    };
                    var v = n(t.borderWidth / 2) * H;
                    c._68o({
                        x: L - s * H / 2 - v,
                        y: u - Y * H - v,
                        width: s * H + 2 * v,
                        height: Y * H + 2 * v
                    })
                }
            },
            _48O: function () { },
            _99O: function (E) {
                var K = this,
                    C = K._38o;
                if (C) {
                    var f = K.gv,
                        O = K._data,
                        P = C.icons;
                    for (var I in P) {
                        var Z = P[I],
                            L = C.rects[I];
                        if (L) {
                            var D = Pk(Z.opacity, O, f),
                                F = Pk(Z.names, O, f),
                                y = F ? F.length : 0,
                                Q = L.rotation;
                            if (D != V) {
                                var l = E.globalAlpha;
                                E.globalAlpha *= D
                            }
                            for (var g = 0; y > g; g++) {
                                var R = F[g],
                                    S = Bg(R),
                                    r = L[g];
                                if (Q) {
                                    var q = r.x + r.width / 2,
                                        z = r.y + r.height / 2;
                                    E.save(), Ze(E, q, z), Cj(E, Q), Ze(E, -q, -z)
                                }
                                qp(E, S, Pk(Z.stretch, O, f), r.x, r.y, r.width, r.height, K._data, K.gv), Q && E.restore()
                            }
                            D != V && (E.globalAlpha = l)
                        }
                    }
                }
            }
        });
        var sh = function (X, K) {
            fi(sh, this, [X, K])
        };
        Ui(sh, Vf, {
            _40O: function (Z, j) {
                var i = this,
                    T = i.s,
                    M = Z.rect;
                (Z.borderColor = i.gv.getBorderColor(i._data)) && (Z.borderType = T("border.type"), Z.borderWidth = T("border.width"), Z.borderPadding = T("border.padding"), j = C(j, Z.borderPadding + Z.borderWidth / 2)), (Z.selectWidth = i._2o()) && (Z.selectType = T("select.type"), Z._97o = T("select.color"), Z.selectPadding = T("select.padding"), j = C(j, Z.selectPadding + Z.selectWidth / 2)), j > 0 && (M = Zj(M), Gb(M, j)), i._68o(M)
            },
            _39O: function (H, E) {
                var W = E.rect;
                if (E.borderWidth > 0) {
                    var l = E.borderPadding;
                    H.strokeStyle = E.borderColor, H.lineWidth = E.borderWidth, Pm(H, E.borderType, {
                        x: W.x - l,
                        y: W.y - l,
                        width: W.width + 2 * l,
                        height: W.height + 2 * l
                    }), H.stroke()
                }
                E.selectWidth > 0 && (l = E.selectPadding, H.strokeStyle = E._97o, H.lineWidth = E.selectWidth, Pm(H, E.selectType, {
                    x: W.x - l,
                    y: W.y - l,
                    width: W.width + 2 * l,
                    height: W.height + 2 * l
                }), H.stroke())
            },
            _3O: function () {
                var O = this,
                    N = O.s,
                    F = O._data,
                    P = F.getStyle(aq),
                    k = O.getBodyColor(),
                    _ = O._83o = P ? {
                        shape: P,
                        _53o: O.getBodyColor("shape.background"),
                        _27Q: Bg(N("shape.repeat.image"), k),
                        _54o: N("shape.border.width"),
                        _55o: N("shape.border.color"),
                        _56o: N("shape.border.3d"),
                        _57o: N("shape.border.3d.color"),
                        _58o: N("shape.border.3d.accuracy"),
                        shapeGradient: N("shape.gradient"),
                        _59o: N("shape.gradient.color"),
                        _60o: N("shape.border.pattern"),
                        _61o: N("shape.border.cap"),
                        _62o: N("shape.border.join")
                    } : {
                        img: Bg(F.getImage(), k),
                        bodyColor: k,
                        stretch: N("image.stretch")
                    };
                Z && !u || (_.rect = F.getRect(), _.position = F.p(), _.rotation = F.getRotation(), P === Uj && (_._63o = N("shape.depth")), O._40O(_, P ? dr(V, _._54o / 2, _._62o) : 0))
            },
            getPosition: function (o, U, P, f) {
                var O = Jn(o, this._83o.rect, f);
                return O.x += U, O.y += P, O
            },
            _80o: function (b) {
                var B = this,
                    o = B.s,
                    V = B.gv,
                    S = B._data,
                    K = B._83o,
                    l = K.rect,
                    N = l,
                    t = K.position,
                    L = K.rotation,
                    X = K.shape;
                if (l.width > 0 && l.height > 0) {
                    if (L && (b.save(), Ze(b, t.x, t.y), Cj(b, L), Ze(b, -t.x, -t.y), N = S.getSize(), N.x = t.x - N.width / 2, N.y = t.y - N.height / 2), B.freeDraw) B.freeDraw(b, N, K);
                    else if (X) {
                        var c, W, d, P, A = K._60o,
                            f = Dc(b, A),
                            q = K._53o,
                            v = K._27Q,
                            g = K._54o,
                            Q = K._55o,
                            D = b.lineJoin,
                            s = b.lineCap;
                        if ("roundRect" === X ? c = o("shape.corner.radius") : "polygon" === X ? c = o("shape.polygon.side") : "arc" === X && (c = o("shape.arc.from"), W = o("shape.arc.to"), d = o("shape.arc.close"), P = o("shape.arc.oval")), b.lineJoin = K._62o, b.lineCap = K._61o, q || v ? (v ? lh(b, v) : Dg(b, q, K.shapeGradient, K._59o, N), Pm(b, X, N, c, W, d, P), b.fill(), b !== f && Pm(f, X, N, c, W, d, P)) : Pm(f, X, N, c, W, d, P), g > 0 && (b.lineWidth = g, b.strokeStyle = Q, b.stroke(), K._56o && Jj(b, Q, K._57o, g, V._zoom, K._58o)), Pe(b, A), o("shape.dash")) {
                            var h = o("shape.dash.width") || g;
                            if (h > 0) {
                                A = o("shape.dash.pattern");
                                var f = Dc(b, A, B._2Q("shape.dash.offset"));
                                f !== b && Pm(f, X, N, c, W, d, P), B._1Q(b, "shape", h, A)
                            }
                        }
                        Gd(b, q, K._63o, N), b.lineJoin = D, b.lineCap = s
                    } else qp(b, K.img, K.stretch, N.x, N.y, N.width, N.height, S, V, K.bodyColor);
                    L && b.restore()
                }
                B._39O(b, K)
            },
            _48O: function () {
                var e, t = this,
                    j = t._data,
                    k = t.gv,
                    s = t._55O,
                    w = k.getEditPointSize() / 2 + 2;
                if (s._42O && (e = j.getRect(), Gb(e, w)), s._56O) {
                    var A = s._98o = k.getRotationPoint(j);
                    e = jm(e, {
                        x: A.x - w,
                        y: A.y - w,
                        width: 2 * w,
                        height: 2 * w
                    })
                }
                t._68o(e)
            },
            _47O: function (b) {
                var p = this,
                    q = p.gv,
                    s = p._55O,
                    m = p._data.getRect(),
                    K = q.getEditPointSize(),
                    S = s._98o;
                s._42O && (b.fillStyle = q.getEditPointBackground(), b.strokeStyle = q.getEditPointBorderColor(), b.lineWidth = 1, [{
                    x: m.x,
                    y: m.y
                }, {
                    x: m.x + m.width / 2,
                    y: m.y
                }, {
                    x: m.x + m.width,
                    y: m.y
                }, {
                    x: m.x,
                    y: m.y + m.height / 2
                }, {
                    x: m.x + m.width,
                    y: m.y + m.height / 2
                }, {
                    x: m.x,
                    y: m.y + m.height
                }, {
                    x: m.x + m.width / 2,
                    y: m.y + m.height
                }, {
                    x: m.x + m.width,
                    y: m.y + m.height
                }].forEach(function (l) {
                    Sf(b, l.x - K / 2, l.y - K / 2, K, K), b.stroke()
                })), s._56O && (b.fillStyle = q.getEditPointBorderColor(), b.strokeStyle = q.getEditPointBackground(), b.lineWidth = 1, b.beginPath(), b.arc(S.x, S.y, K / 2, 0, X, !0), b.fill(), b.stroke())
            }
        });
        var is = function (P, c) {
            fi(is, this, [P, c])
        },
            ik = function (X, w, m, g) {
                var I = md(X, w);
                return m = g ? J(m, I) : vq(m, I), I ? m /= I : m = 0, {
                    x: X.x + (w.x - X.x) * m,
                    y: X.y + (w.y - X.y) * m
                }
            };
        Ui(is, Vf, {
            _3O: function () {
                var g, p = this,
                    h = p._data,
                    O = p.gv,
                    W = p.s,
                    Z = W(zl),
                    w = h.isLooped(),
                    o = W("edge.width"),
                    G = W("edge.center"),
                    z = W("edge.offset"),
                    C = O.getBorderColor(h),
                    u = C ? W("border.width") : 0,
                    D = p._2o(),
                    B = h._40I,
                    X = h._41I,
                    P = p._78o = B && X ? {
                        looped: w,
                        type: Z,
                        width: o,
                        center: G,
                        color: p.getBodyColor("edge.color"),
                        borderColor: C,
                        borderWidth: u,
                        _97o: D ? W("select.color") : V,
                        selectWidth: D,
                        pattern: W("edge.pattern"),
                        cap: W("edge.cap"),
                        join: W("edge.join"),
                        is3d: W("edge.3d"),
                        _67o: W("edge.3d.color"),
                        _66o: W("edge.3d.accuracy")
                    } : V;
                if (P) {
                    var T = r.getEdgeType(Z);
                    if (T) {
                        var S = T(h, sd(p, O, h, w, Z), O, p._19Q);
                        S.points && S.points.size() > 1 && (P._4O = S, g = Aq(P._4O.points))
                    } else {
                        var M = hc(O, B, W("edge.source.position"), W("edge.source.offset.x"), W("edge.source.offset.y")),
                            k = hc(O, X, W("edge.target.position"), W("edge.target.offset.x"), W("edge.target.offset.y"));
                        if (Z === Lf) {
                            var t = P.points = W(jh) || nm,
                                d = t.size();
                            if (P.segments = W("edge.segments"), !G)
                                if (z) {
                                    var v = ik(M, d ? t.get(0) : k, z, d),
                                        i = ik(k, d ? t.get(d - 1) : M, z, d);
                                    M = v, k = i
                                } else {
                                    var L = al(O, B),
                                        n = al(O, X),
                                        f = ep(M, d ? t.get(0) : k, L);
                                    f && (M = {
                                        x: f[0],
                                        y: f[1]
                                    }), f = ep(d ? t.get(d - 1) : M, k, n), f && (k = {
                                        x: f[0],
                                        y: f[1]
                                    })
                                }
                            g = jm(Aq(P.points), Aq(M, k))
                        } else {
                            var $ = sd(p, O, h, w, Z);
                            if (p._19Q || ($ = -$), w) M = Zj(M), M.x -= B.getWidth() / 2, P.radius = $, g = {
                                x: M.x - $,
                                y: M.y - $,
                                width: 2 * $,
                                height: 2 * $
                            };
                            else {
                                var E = md(M, k),
                                    l = vq(z, E),
                                    v = {
                                        x: l,
                                        y: $
                                    },
                                    i = {
                                        x: E - l,
                                        y: $
                                    },
                                    q = x(k.y - M.y, k.x - M.x),
                                    a = P.mat = new wf(q);
                                if (P.orienAngle = q, P.angle = k.x < M.x ? q + y : q, P.rect = {
                                    x: v.x,
                                    y: v.y,
                                    width: i.x - v.x,
                                    height: 0
                                }, P.origin = M, v = a.tf(v), v.x += M.x, v.y += M.y, i = a.tf(i), i.x += M.x, i.y += M.y, G) {
                                    var R = {
                                        x: E,
                                        y: 0
                                    };
                                    R = a.tf(R), R.x += M.x, R.y += M.y, g = Aq([M, v, i, R]), P.c1 = M, P.c2 = R
                                } else g = Aq(v, i);
                                M = v, k = i
                            }
                        }
                        P._69o = M, P._70o = k
                    }
                    dr(g, o / 2 + u + D, P.join), p._68o(g)
                }
            },
            getRotation: function (L, f, E) {
                L = L || 0;
                var p = this._78o;
                if (p) {
                    var g, P = p.angle,
                        M = p.points,
                        o = p._4O;
                    if (P != V) return f ? p.orienAngle + L : P + L;
                    if (o) {
                        var F = o.points;
                        return g = F.size(), ce[E] ? g && 0 === g % 2 ? mq(F.get(g / 2 - 1), F.get(g / 2), f, L) : L : Ge[E] ? mq(F.get(0), F.get(1), f, L) : mq(F.get(g - 2), F.get(g - 1), f, L)
                    }
                    if (M) return g = M.size(), ce[E] ? g && 0 === g % 2 ? mq(M.get(g / 2 - 1), M.get(g / 2), f, L) : L : Ge[E] ? mq(p._69o, g ? M.get(0) : p._70o, f, L) : mq(g ? M.get(g - 1) : p._69o, p._70o, f, L)
                }
                return L
            },
            getPosition: function (P, i, N, p, c) {
                var l = this._78o;
                if (l) {
                    var J, F = l.type,
                        A = l.points,
                        V = l._4O,
                        m = l._69o,
                        L = l._70o;
                    if (!F) return l.looped ? {
                        x: m.x - l.radius + i,
                        y: m.y + N
                    } : (c && m && L && (m.x > L.x || m.x === L.x && m.y > L.y) && (P = io[P], N = -N), J = Jn(P, l.rect, p), J.x += i, J.y += N, J = l.mat.tf(J), J.x += l.origin.x, J.y += l.origin.y, J);
                    if (A) {
                        var J, u = A.size();
                        if (ce[P]) {
                            if (u) {
                                var H = u % 2;
                                if (0 === H) return Jr(A.get(u / 2 - 1), A.get(u / 2), P, i, N, p, c);
                                J = A.get((u - H) / 2)
                            } else J = {
                                x: (m.x + L.x) / 2,
                                y: (m.y + L.y) / 2
                            };
                            return J = Jn(P, {
                                x: J.x,
                                y: J.y,
                                width: 0,
                                height: 0
                            }, p), J.x += i, J.y += N, J
                        }
                        return Ge[P] ? Jr(m, u ? A.get(0) : L, P, i, N, p, c) : Jr(u ? A.get(u - 1) : m, L, P, i, N, p, c)
                    }
                    if (V) {
                        var z = V.points,
                            u = z.size();
                        if (ce[P]) {
                            var H = u % 2;
                            return 0 === H ? Jr(z.get(u / 2 - 1), z.get(u / 2), P, i, N, p, c) : (J = z.get((u - H) / 2), J = Jn(P, {
                                x: J.x,
                                y: J.y,
                                width: 0,
                                height: 0
                            }, p), J.x += i, J.y += N, J)
                        }
                        return Ge[P] ? Jr(z.get(0), z.get(1), P, i, N, p, c) : Jr(z.get(u - 2), z.get(u - 1), P, i, N, p, c)
                    }
                }
                return Yd
            },
            _42: function (e) {
                this._78o && is.superClass._42.call(this, e)
            },
            drawPath: function (c, U) {
                c.beginPath();
                var w = U.type,
                    E = U.points,
                    M = U.segments,
                    F = U._4O;
                if (!w || E) {
                    var R = U._69o,
                        a = R.x,
                        P = R.y,
                        _ = U._70o,
                        l = _.x,
                        W = _.y;
                    if (w)
                        if (M) {
                            var C = new Io({
                                x: a,
                                y: P
                            });
                            C.addAll(E), C.add({
                                x: l,
                                y: W
                            }), Xo(c, C, M)
                        } else c.moveTo(a, P), E.each(function (S) {
                            c.lineTo(S.x, S.y)
                        }), c.lineTo(l, W);
                    else U.looped ? c.arc(a, P, U.radius, 0, X, !0) : U.center ? (c.moveTo(U.c1.x, U.c1.y), c.lineTo(a, P), c.lineTo(l, W), c.lineTo(U.c2.x, U.c2.y)) : (c.moveTo(a, P), c.lineTo(l, W))
                } else F && Xo(c, F.points, F.segments)
            },
            _80o: function (n) {
                var Y = this,
                    h = Y.s,
                    O = Y._78o,
                    I = O.width,
                    t = O.selectWidth,
                    C = O.borderWidth,
                    R = O.color,
                    e = n.lineJoin,
                    T = n.lineCap,
                    z = O.pattern;
                if (n.lineJoin = O.join, n.lineCap = O.cap, Y.drawPath(Dc(n, z), O), t && (n.strokeStyle = O._97o, n.lineWidth = I + 2 * (C + t), n.stroke()), C && (n.strokeStyle = O.borderColor, n.lineWidth = I + 2 * C, n.stroke()), n.strokeStyle = R, n.lineWidth = I, n.stroke(), O.is3d && Jj(n, R, O._67o, I, Y.gv._zoom, O._66o), Pe(n, z), h("edge.dash")) {
                    z = h("edge.dash.pattern");
                    var Q = Dc(n, z, Y._2Q("edge.dash.offset"));
                    Q !== n && Y.drawPath(Q, O), Y._1Q(n, "edge", h("edge.dash.width") || I, z)
                }
                n.lineJoin = e, n.lineCap = T
            },
            _48O: function () {
                var H = this,
                    X = H._78o;
                if (H._55O._43O && X && X.points) {
                    var Y = Aq(X.points);
                    Y && (Gb(Y, H.gv.getEditPointSize() / 2 + 2), H._68o(Y))
                }
            },
            _47O: function (m) {
                var p = this,
                    h = p.gv,
                    x = p._78o;
                if (p._55O._43O && x && x.points) {
                    var S = h.getEditPointSize() / 2;
                    m.fillStyle = h.getEditPointBackground(), m.strokeStyle = h.getEditPointBorderColor(), m.lineWidth = 1, x.points.each(function (F) {
                        m.beginPath(), m.arc(F.x, F.y, S, 0, X, !0), m.fill(), m.stroke()
                    })
                }
            },
            _71o: function (F, i) {
                var P = this,
                    _ = P._data;
                if (P._19Q = !0, !_.getEdgeGroup()) return F ? _.s("edge.gap") : 0;
                var B, s = 0,
                    R = 0,
                    U = 0;
                if (_.getEdgeGroup().getSiblings().each(function (F) {
                        F.each(function (K) {
                            if (P.gv.isVisible(K) && K.s(zl) == i) {
                                var t = K.s("edge.gap");
                                B ? (R += U / 2 + t / 2, U = t) : (B = K, U = t), K === _ && (s = R)
                }
                })
                }), F) return R - s + U;
                var H = s - R / 2;
                return B && _._40I !== B._40I && (P._19Q = !1), H
            }
        });
        var to = function (X, $) {
            fi(to, this, [X, $])
        };
        Ui(to, sh, {
            _3O: function () {
                var D, c, L = this,
                    g = L.s,
                    M = L._data,
                    $ = L.gv;
                if (L._88I = V, M.isExpanded() && M.eachChild(function (Q) {
                        var X = $.getBoundsForGroup(Q);
                        X && (c || (c = []), c.push(X), D = jm(D, X))
                }), D) {
                    var f = $.getLabel(M),
                        O = g("group.type");
                    D = yc(O, c, D), db(D, M, "group.padding", 1);
                    var G = L._88I = {
                        type: O,
                        rect: D,
                        _64o: D
                    };
                    if (!O && f != V) {
                        var w, Z = L.labelInfo = {
                            label: f,
                            color: g("group.title.color"),
                            font: g("group.title.font")
                        },
                            S = Rp(Z, f),
                            m = S.width,
                            i = S.height,
                            K = g("group.title.align");
                        m > D.width && (D.width = m), Z.rect = {
                            y: D.y - i,
                            width: S.width,
                            height: i
                        }, w = K === Sd ? D.x : K === yn ? D.x + D.width - m : D.x + D.width / 2 - m / 2, Z.rect.x = w, G.titleRect = {
                            x: D.x,
                            y: D.y - i,
                            width: D.width,
                            height: i + 1
                        }, G.rect = {
                            x: D.x,
                            y: D.y - i,
                            width: D.width,
                            height: D.height + i
                        }
                    }
                    L._40O(G, g("group.border.width") / 2)
                } else to.superClass._3O.call(L)
            },
            getPosition: function (j, i, h, w) {
                var O = this._88I;
                if (O) {
                    var K = Jn(j, O.rect, w);
                    return K.x += i, K.y += h, K
                }
                return to.superClass.getPosition.apply(this, arguments)
            },
            _24O: function (L, p) {
                var l = this._88I;
                (!l || l.type || "label2" === L) && to.superClass._24O.call(this, L, p)
            },
            _80o: function (p) {
                var k = this,
                    v = k._88I;
                if (v) {
                    var F = k._data,
                        O = k.s,
                        G = k.gv,
                        _ = v.type,
                        f = v.rect,
                        D = v._64o,
                        U = v.titleRect,
                        q = k.getBodyColor(),
                        b = Bg(O("group.image"), q),
                        m = O("group.image.stretch"),
                        d = k.getBodyColor("group.background"),
                        J = Bg(O("group.repeat.image"), q),
                        l = O("group.gradient"),
                        B = O("group.gradient.color"),
                        i = O("group.depth");
                    if (_) {
                        var P = O("group.border.pattern"),
                            h = O("group.border.width"),
                            E = p.lineJoin,
                            g = p.lineCap;
                        if (p.lineJoin = O("group.border.join"), p.lineCap = O("group.border.cap"), b) {
                            if (p.save(), Pm(p, _, f), p.clip(), qp(p, b, m, f.x, f.y, f.width, f.height, F, G, q), p.restore(), h > 0) {
                                var W = Dc(p, P);
                                Pm(W, _, f), p.lineWidth = h, p.strokeStyle = O("group.border.color"), p.stroke(), Pe(p, P)
                            }
                        } else {
                            var W = Dc(p, P);
                            d || J ? (J ? lh(p, J) : Dg(p, d, l, B, f), Pm(p, _, f), p.fill(), p !== W && Pm(W, _, f)) : Pm(W, _, f), h > 0 && (p.lineWidth = h, p.strokeStyle = O("group.border.color"), p.stroke()), Pe(p, P), _ === Uj && Gd(p, d, i, f)
                        }
                        p.lineJoin = E, p.lineCap = g
                    } else if (b ? qp(p, b, m, D.x, D.y, D.width, D.height, F, G, k.getBodyColor()) : (d || J) && (J ? lh(p, J) : Dg(p, d, l, B, D), Pm(p, Uj, D), p.fill(), Gd(p, d, i, D)), U) {
                        var S = O("group.title.background");
                        Sf(p, U.x, U.y, U.width, U.height, S), Gd(p, S, i, U)
                    }
                    k._39O(p, v)
                } else to.superClass._80o.call(k, p)
            }
        });
        var yh = function (d, x) {
            fi(yh, this, [d, x])
        };
        Ui(yh, sh, {
            _3O: function () {
                var C = this,
                    G = C._data,
                    Q = C.s,
                    $ = C.gv,
                    b = G.getPoints(),
                    A = $.getBorderColor(G),
                    e = A ? Q("border.width") : 0,
                    v = C._2o(),
                    f = Q("shape.border.width"),
                    Y = G.getRect(),
                    h = $.getBodyColor(G),
                    B = C._99o = b.isEmpty() ? V : {
                        rect: Y,
                        rotation: G.getRotation(),
                        position: G.p(),
                        points: b,
                        segments: G.getSegments(),
                        bodyColor: h,
                        borderColor: A,
                        borderWidth: e,
                        _94o: Q("shape.border.3d"),
                        _95o: Q("shape.border.3d.color"),
                        _96o: Q("shape.border.3d.accuracy"),
                        _97o: v ? Q("select.color") : V,
                        selectWidth: v,
                        _53o: Q("shape.background"),
                        _27Q: Bg(Q("shape.repeat.image"), h),
                        _54o: f,
                        _55o: Q("shape.border.color"),
                        shapeGradient: Q("shape.gradient"),
                        _59o: Q("shape.gradient.color"),
                        _60o: Q("shape.border.pattern"),
                        _61o: Q("shape.border.cap"),
                        _62o: Q("shape.border.join")
                    };
                if (B) {
                    var j = f / 2 + e + v;
                    j && (Y = Zj(Y), dr(Y, j, B._62o)), C._68o(Y)
                }
            },
            getPosition: function (Z, z, L, B) {
                var R = this._99o;
                if (R) {
                    var Y = Jn(Z, R.rect, B);
                    return Y.x += z, Y.y += L, Y
                }
                return Yd
            },
            _42: function (m) {
                this._99o && yh.superClass._42.call(this, m)
            },
            _80o: function (d) {
                var R, p = this,
                    L = p.s,
                    N = p._99o,
                    Q = N.position,
                    S = N.rotation,
                    f = N.bodyColor,
                    A = N.borderWidth,
                    b = N.selectWidth,
                    D = N._53o,
                    C = N._27Q,
                    $ = N._54o,
                    r = N.points,
                    Y = N.segments,
                    n = p._data.isClosePath();
                S && (d.save(), Ze(d, Q.x, Q.y), Cj(d, S), Ze(d, -Q.x, -Q.y));
                var s = N._60o,
                    X = Dc(d, s),
                    i = d.lineJoin,
                    E = d.lineCap;
                if (d.lineJoin = N._62o, d.lineCap = N._61o, D || C ? (C ? lh(d, C) : (R = f ? f : D, Dg(d, R, N.shapeGradient, N._59o, N.rect)), Xo(d, r, Y, n), d.fill(), X !== d && Xo(X, r, Y, n)) : Xo(X, r, Y, n), b && (d.strokeStyle = N._97o, d.lineWidth = $ + 2 * (A + b), d.stroke()), A && (d.strokeStyle = N.borderColor, d.lineWidth = $ + 2 * A, d.stroke()), $ && (R = N._55o, !D && f && (R = f), d.strokeStyle = R, d.lineWidth = $, d.stroke(), N._94o && Jj(d, R, N._95o, $, p.gv._zoom, N._96o)), Pe(d, s), L("shape.dash")) {
                    var z = L("shape.dash.width") || $;
                    if (z > 0) {
                        s = L("shape.dash.pattern");
                        var X = Dc(d, s, p._2Q("shape.dash.offset"));
                        X !== d && Xo(X, r, Y, n), p._1Q(d, "shape", z, s)
                    }
                }
                d.lineJoin = i, d.lineCap = E, S && d.restore()
            },
            _48O: function () {
                var l = this;
                if (yh.superClass._48O.call(l), l._55O._43O) {
                    var P = l._data.getRect();
                    Gb(P, l.gv.getEditPointSize() / 2 + 2), l._68o(P)
                }
            },
            _47O: function (f) {
                var o = this;
                if (yh.superClass._47O.call(o, f), o._55O._43O) {
                    var Z = o.gv,
                        K = Z.getEditPointSize() / 2;
                    f.fillStyle = Z.getEditPointBackground(), f.strokeStyle = Z.getEditPointBorderColor(), f.lineWidth = 1, o._data.getPoints().each(function (U) {
                        f.beginPath(), f.arc(U.x, U.y, K, 0, X, !0), f.fill(), f.stroke()
                    })
                }
            }
        });
        var Lm = function (D, S) {
            fi(Lm, this, [D, S])
        };
        Ui(Lm, yh, {
            getRotation: function (W, o, I) {
                W = W || 0;
                var M = this._data.getPoints(),
                    p = M.size();
                return p > 1 ? ce[I] ? p && 0 === p % 2 ? mq(M.get(p / 2 - 1), M.get(p / 2), o, W) : W : Ge[I] ? mq(M.get(0), M.get(1), o, W) : mq(M.get(p - 2), M.get(p - 1), o, W) : W
            },
            getPosition: function ($, e, N, y, f) {
                var r = this._data.getPoints(),
                    S = r.size();
                if (S > 1) {
                    if (ce[$]) {
                        var k = S % 2;
                        if (0 === k) return Jr(r.get(S / 2 - 1), r.get(S / 2), $, e, N, y, f);
                        var D = r.get((S - k) / 2),
                            o = {
                                x: D.x,
                                y: D.y,
                                width: 0,
                                height: 0
                            };
                        return D = Jn($, o, y), D.x += e, D.y += N, D
                    }
                    return Ge[$] ? Jr(r.get(0), r.get(1), $, e, N, y, f) : Jr(r.get(S - 2), r.get(S - 1), $, e, N, y, f)
                }
                return Yd
            }
        });
        var Dk = function (y, Q) {
            fi(Dk, this, [y, Q])
        };
        Ui(Dk, sh, {
            _3O: function () {
                var W = this;
                Dk.superClass._3O.call(W);
                var X = W.s,
                    m = W._83o;
                W._82o = m.img || m.shape ? V : {
                    background: W.getBodyColor("grid.background"),
                    depth: X("grid.depth"),
                    rect: m.rect,
                    _88o: X("grid.cell.depth"),
                    cellBorderColor: X("grid.cell.border.color"),
                    _89o: X("grid.row.count"),
                    _90o: X("grid.column.count"),
                    block: X("grid.block"),
                    _91o: X("grid.block.color"),
                    _92o: X("grid.block.padding"),
                    _93o: X("grid.block.width")
                }
            },
            _80o: function (M) {
                var F = this,
                    u = F._82o;
                if (!u) return Dk.superClass._80o.call(F, M), void 0;
                var k, J, t = F._data,
                    l = u.background,
                    L = u.rect,
                    n = u.block,
                    S = u._91o,
                    s = u._92o,
                    D = u._93o,
                    R = u._88o,
                    A = u.cellBorderColor,
                    X = u._89o,
                    U = u._90o;
                if (l)
                    if (Sf(M, L.x, L.y, L.width, L.height, l), Gd(M, l, u.depth, L), R)
                        for (k = 0; X > k; k++)
                            for (J = 0; U > J; J++) L = t.getCellRect(k, J), L && Gd(M, l, R, L);
                    else if (A) {
                        for (M.beginPath(), k = 0; X > k; k++)
                            for (J = 0; U > J; J++) L = t.getCellRect(k, J), L && M.rect(L.x, L.y, L.width, L.height);
                        M.strokeStyle = A, M.lineWidth = 1, M.stroke()
                    }
                if ("h" === n)
                    for (k = 0; X > k; k++) L = jm(t.getCellRect(k, 0), t.getCellRect(k, U - 1)), Gb(L, s), Jf(M, S, L.x, L.y, L.width, L.height, D);
                else if ("v" === n)
                    for (J = 0; U > J; J++) L = jm(t.getCellRect(0, J), t.getCellRect(X - 1, J)), Gb(L, s), Jf(M, S, L.x, L.y, L.width, L.height, D);
                F._39O(M, F._83o)
            }
        });
        var Er = dn.Interactor = function (f) {
            this.gv = this._graphView = f
        };
        pc("Interactor", w, {
            ms_listener: 1,
            getView: function () {
                return this.gv.getView()
            },
            setUp: function () {
                this.addListeners()
            },
            tearDown: function () {
                this.removeListeners(), this.clear()
            },
            clear: function () { },
            fi: function (q) {
                this.gv.fi(q)
            },
            setCursor: function (G) {
                e || (this.getView().style.cursor = G)
            },
            startDragging: function (v) {
                var a = this;
                a._lastClientPoint = Li(v), a._lastLogicalPoint = a.gv.lp(v), Le(a, v)
            },
            clearDragging: function () {
                var h = this;
                h._lastClientPoint = h._lastLogicalPoint = h._logicalPoint = V
            },
            autoScroll: function (w) {
                return this.gv.autoScroll(w, this._lastClientPoint)
            }
        });
        var gd = dn.DefaultInteractor = function (e) {
            fi(gd, this, [e])
        };
        pc("DefaultInteractor", Er, {
            handle_mousedown: function (x) {
                Mh(x);
                var D = this,
                    O = D.gv,
                    W = O.getDataAt(x);
                O.setFocus(x) && !O._editing && (Yc(x) ? O.handleDoubleClick(x, W) : O.handleClick(x, W), O.isPannable() && !W && De(x) && !im(x) && (D._tx = O.tx(), D._ty = O.ty(), D.startDragging(x)))
            },
            handleWindowMouseUp: function (E) {
                var e = this,
                    l = e.gv;
                l._panning && (delete l._panning, l.onPanEnded(), e.fi({
                    kind: "endPan",
                    event: E
                })), delete e._tx, delete e._ty, e.clearDragging()
            },
            handle_mousemove: function (j) {
                var h = this,
                    z = h.gv;
                h._hoverTimer && (I(h._hoverTimer), delete h._hoverTimer), h._hoverTimer = k(function () {
                    h.fi({
                        kind: "hover",
                        event: j
                    }), I(h._hoverTimer), delete h._hoverTimer
                }, z.getHoverDelay() || 800)
            },
            handle_touchmove: function (i) {
                this.handle_mousemove(i)
            },
            handleWindowMouseMove: function (v) {
                var k = this,
                    $ = k.gv,
                    s = k._lastClientPoint;
                k.fi({
                    kind: $._panning ? "betweenPan" : "beginPan",
                    event: v
                }), $._panning = 1, $.setTranslate(k._tx + v.clientX - s.x, k._ty + v.clientY - s.y)
            },
            handle_mousewheel: function (s) {
                this.gv.handleScroll(s, s.wheelDelta)
            },
            handle_DOMMouseScroll: function (X) {
                2 === X.axis && this.gv.handleScroll(X, -X.detail)
            },
            handle_keydown: function (d) {
                this.gv.handleKeyDown(d)
            }
        });
        var po = dn.SelectInteractor = function (v) {
            fi(po, this, [v])
        };
        pc("SelectInteractor", Er, {
            _42: function () {
                var O = this,
                    C = O.gv,
                    s = C.getZoom(),
                    j = O.mark,
                    b = O.div;
                b || (b = O.div = Xh(), yk(O.getView(), b));
                var q = {};
                q.x = j.x * s + C.tx(), q.y = j.y * s + C.ty(), q.width = j.width * s, q.height = j.height * s, Xe(b, q), this.intersects() ? (b.style.border = "", b.style.background = C.getRectSelectBackground()) : (b.style.background = "", b.style.border = "1px solid " + C.getRectSelectBorderColor())
            },
            handle_mousedown: function (A) {
                var s = this,
                    R = s.gv;
                if (s._57I = V, !R._editing) {
                    var _ = R.getDataAt(A),
                        k = R.sm();
                    _ ? im(A) ? k.co(_) ? k.rs(_) : k.as(_) : k.co(_) || k.ss(_) : im(A) || !R.isPannable() ? De(A) && (im(A) || k.cs(), R.isRectSelectable() && (s.startDragging(A), R._77O = 1)) : s._57I = Li(A)
                }
            },
            handle_mouseup: function (m) {
                var a = this,
                    e = a._57I;
                e && (md(e, Li(m)) <= 1 && a.gv.sm().cs(), a._57I = V)
            },
            handleWindowMouseUp: function (h) {
                this.clear(h)
            },
            handleWindowMouseMove: function (m) {
                var E = this,
                    q = E.gv;
                E._logicalPoint = q.lp(m), E.mark ? (E.fi({
                    kind: "betweenRectSelect",
                    event: m
                }), E.autoScroll(m), E.redraw()) : E.fi({
                    kind: "beginRectSelect",
                    event: m
                }), E.mark = Aq(E._lastLogicalPoint, E._logicalPoint), E.redraw()
            },
            intersects: function () {
                var F = this,
                    l = F._lastLogicalPoint,
                    Z = F._logicalPoint;
                return l.x > Z.x || l.y > Z.y
            },
            clear: function (j) {
                var c = this,
                    i = c.gv,
                    s = c.mark;
                if (c._57I = V, c._lastLogicalPoint) {
                    if (s) {
                        if (0 !== s.width && 0 !== s.height) {
                            var h = i.getDatasInRect(s, c.intersects());
                            if (!h.isEmpty()) {
                                var $ = i.sm(),
                                    b = $.toSelection();
                                h.each(function (H) {
                                    $.co(H) ? b.remove(H) : b.add(H)
                                }), $.ss(b)
                            }
                        }
                        Kq(c.div), delete c.div, delete c.mark, c.redraw(), c.fi({
                            kind: "endRectSelect",
                            event: j
                        }), i.onRectSelectEnded()
                    }
                    c.clearDragging(), delete i._77O
                }
            },
            redraw: function () {
                var R = this;
                R._draw || (R._draw = 1, k(function () {
                    R.mark && R._42(), delete R._draw
                }, 16))
            }
        });
        var Fe = dn.MoveInteractor = function (v) {
            fi(Fe, this, [v])
        };
        pc("MoveInteractor", Er, {
            handle_mousedown: function (p) {
                var $ = this,
                    _ = $.gv;
                if (De(p) && !_._editing) {
                    var I = _.getSelectedDataAt(p);
                    I ? ($._data = I, _.handleMouseDown && _.handleMouseDown(p, I), $.startDragging(p), _.isMovable(I) && (_._moving = 1)) : _._focusData = V
                }
            },
            handleWindowMouseUp: function (p) {
                var E = this,
                    o = E.gv;
                o.handleMouseUp && o.handleMouseUp(p, E._data), E.clear(p)
            },
            handleWindowMouseMove: function (v) {
                var S = this,
                    g = S.gv,
                    R = S._data,
                    w = g.getDataModel(),
                    i = w.getHistoryManager();
                if ((!g._93O || !g._93O(v, R)) && g._moving) {
                    var Y = S._logicalPoint ? "betweenMove" : "beginMove",
                        T = {
                            kind: Y,
                            event: v
                        },
                        f = S._logicalPoint = g.lp(v);
                    i && "beginMove" === Y && i.beginInteraction();
                    var t = f.x - S._lastLogicalPoint.x,
                        I = f.y - S._lastLogicalPoint.y,
                        O = g.getMoveMode(v, R);
                    O && ("x" === O ? I = 0 : "y" === O ? t = 0 : "xy" !== O && (t = I = 0)), g.moveSelection(t, I), S._lastLogicalPoint = f, S.autoScroll(v), S.fi(T)
                }
            },
            clear: function (D) {
                var m = this,
                    i = m.gv,
                    o = i.getDataModel(),
                    N = o.getHistoryManager();
                m._lastLogicalPoint && (m._lastLogicalPoint = m._data = i._moving = V, m._logicalPoint && (m.fi({
                    kind: "endMove",
                    event: D
                }), i.onMoveEnded(), N && N.endInteraction()), m.clearDragging())
            }
        });
        var Yl = dn.EditInteractor = function (P) {
            fi(Yl, this, [P])
        };
        pc("EditInteractor", Er, {
            ms_edit: 1,
            setUp: function () {
                var N = this;
                Yl.superClass.setUp.call(N), e || N.gv.setEditInteractor(N)
            },
            tearDown: function () {
                Yl.superClass.tearDown.call(this), e || this.gv.setEditInteractor(V)
            },
            clear: function () {
                var _ = this,
                    I = _.gv;
                I._editing && (I._editing = _._77I = _._node = _._edge = _._shape = _._rect = _._89I = _._index = V, _.clearDragging(), _.setCursor(v))
            },
            handle_mousedown: function (q) {
                var r = this,
                    j = r.gv.dm(),
                    m = j.getHistoryManager(),
                    O = r._index,
                    d = r._node,
                    v = r._shape,
                    y = r._edge,
                    k = r._77I,
                    B = r._89I;
                De(q) && r.gv._editing && (d && B ? (r._rect = d.getRect(), r.startDragging(q), m && m.beginInteraction(), r.fi({
                    kind: "beginEditRect",
                    event: q,
                    data: d,
                    direction: B
                })) : v && O >= 0 ? (r.startDragging(q), m && m.beginInteraction(), r.fi({
                    kind: "beginEditPoint",
                    event: q,
                    data: v,
                    index: O
                })) : y && O >= 0 ? (r.startDragging(q), m && m.beginInteraction(), r.fi({
                    kind: "beginEditPoint",
                    event: q,
                    data: y,
                    index: O
                })) : k && (r.startDragging(q), m && m.beginInteraction(), r.fi({
                    kind: "beginEditRotation",
                    event: q,
                    data: k
                })))
            },
            handleWindowMouseUp: function (A) {
                this._46O(A), this.clear()
            },
            handleWindowMouseMove: function (g) {
                this._78I(g)
            },
            handle_mousemove: function (R) {
                if (!_h) {
                    var I = this,
                        b = I.gv;
                    I._79I(R, b.getSelectedDataAt(R)) ? b._editing = 1 : I.clear()
                }
            }
        });
        var Gq = dn.TouchInteractor = function (I, k) {
            k = k || {}, k.selectable === l && (k.selectable = !0), k.movable === l && (k.movable = !0), k.pannable === l && (k.pannable = !0), k.pinchable === l && (k.pinchable = !0), k.editable === l && (k.editable = !0), this.params = k, fi(Gq, this, [I])
        };
        pc("TouchInteractor", Er, {
            ms_edit: 1,
            setUp: function () {
                var g = this;
                Gq.superClass.setUp.call(g), e && g.params.editable && g.gv.setEditInteractor(g)
            },
            tearDown: function () {
                var g = this;
                Gq.superClass.tearDown.call(g), e && g.params.editable && g.gv.setEditInteractor(V)
            },
            clear: function (h) {
                var z = this,
                    P = z.gv,
                    g = P.dm().getHistoryManager();
                P._moving && (z.fi({
                    kind: "endMove",
                    event: h
                }), delete P._moving, P.onMoveEnded(), g && g.endInteraction()), P._panning && (z.fi({
                    kind: "endPan",
                    event: h
                }), delete P._panning, P.onPanEnded()), P._pinching && (z.fi({
                    kind: "endPinch",
                    event: h
                }), delete P._pinching, P.onPinchEnded()), P._editing && (z._46O(h), z._77I = z._node = z._edge = z._shape = z._rect = z._89I = z._index = P._editing = V), z._moving = z._panning = z._pinching = z._editing = z._57I = z._data = z._beginHistory = V, z.clearDragging()
            },
            handle_touchstart: function (Z) {
                var s = this;
                if (!s.gv._editing) {
                    Mh(Z), s._57I = V;
                    var w = s.params,
                        R = s.gv,
                        e = R.sm(),
                        C = R.getDataAt(Z),
                        f = Yn(Z);
                    if (1 === f) Yc(Z) ? R.handleDoubleClick(Z, C) : (R.handleClick(Z, C), C && (R.handleMouseDown && R.handleMouseDown(Z, C), s._data = C)), w.selectable || (C = V), C ? (e.co(C) || e.ss(C), w.editable && R.isEditable(C) && s._79I(Z, C, !0) ? (s._editing = 1, s.startDragging(Z)) : w.movable && R.isMovable(C) && (s._moving = 1, s.startDragging(Z))) : (s._57I = Li(Z), w.pannable && R.isPannable() && (s._panning = 1, s.startDragging(Z), s._translate = {
                        x: R.tx(),
                        y: R.ty()
                    }));
                    else if (w.pinchable && 2 === f) {
                        s._pinching = 1, s.startDragging(Z);
                        var i = R.getView(),
                            B = R.getZoom(),
                            r = i.getBoundingClientRect(),
                            c = Z.touches[0],
                            L = Z.touches[1],
                            O = {
                                x: (c.clientX + L.clientX) / 2 - r.left,
                                y: (c.clientY + L.clientY) / 2 - r.top
                            };
                        O.x -= R.tx(), O.y -= R.ty(), O.x /= B, O.y /= B, s._p = O, s._d = Np(Z)
                    }
                }
            },
            handle_touchend: function (H) {
                var P = this,
                    Q = P.gv,
                    d = P._57I,
                    S = P._data;
                d && (md(d, Li(H)) <= 1 && Q.sm().cs(), P._57I = V), S && Q.handleMouseUp && Q.handleMouseUp(H, S)
            },
            handleWindowTouchEnd: function (v) {
                this.clear(v)
            },
            handleWindowTouchMove: function (p) {
                var O = this,
                    P = O.gv,
                    V = P.dm().getHistoryManager(),
                    g = Yn(p);
                if (1 === g) {
                    if (O._editing && (V && !O._beginHistory && (O._beginHistory = 1, V.beginInteraction()), P._editing = 1, O._78I(p)), O._moving) V && !O._beginHistory && (O._beginHistory = 1, V.beginInteraction()), O.handleMove(p);
                    else if (O._panning) {
                        var y = Li(p);
                        P.setTranslate(O._translate.x + y.x - O._lastClientPoint.x, O._translate.y + y.y - O._lastClientPoint.y), O.fi({
                            kind: P._panning ? "betweenPan" : "beginPan",
                            event: p
                        }), P._panning = 1
                    }
                } else if (2 === g && O._pinching) {
                    var s = Np(p);
                    P.handlePinch(O._p, s, O._d), O._d = s, O.fi({
                        kind: P._pinching ? "betweenPinch" : "beginPinch",
                        event: p
                    }), P._pinching = 1
                }
            },
            handleMove: function (p) {
                var M = this,
                    x = M.gv,
                    S = x.lp(p);
                x._93O && x._93O(p, M._data) || (x.moveSelection(S.x - M._lastLogicalPoint.x, S.y - M._lastLogicalPoint.y), M._lastLogicalPoint = S, M.autoScroll(p), M.fi({
                    kind: x._moving ? "betweenMove" : "beginMove",
                    event: p
                }), x._moving = 1)
            }
        });
        var Kf = "directional",
            pn = "point",
            Qm = "spot",
            Yk = "light.color";
        Zc(r, {
            graph3dViewAttributes: V,
            graph3dViewFirstPersonMode: !1,
            graph3dViewMouseRoamable: !0,
            graph3dViewMoveStep: 15,
            graph3dViewRotateStep: y / 60,
            graph3dViewPannable: !0,
            graph3dViewRotatable: !0,
            graph3dViewWalkable: !0,
            graph3dViewResettable: !0,
            graph3dViewZoomable: !0,
            graph3dViewRectSelectable: !0,
            graph3dViewRectSelectBackground: ge,
            graph3dViewGridVisible: !1,
            graph3dViewGridSize: 50,
            graph3dViewGridGap: 50,
            graph3dViewGridColor: [.4, .75, .85, 1],
            graph3dViewOriginAxisVisible: !1,
            graph3dViewCenterAxisVisible: !1,
            graph3dViewAxisXColor: [1, 0, 0, 1],
            graph3dViewAxisYColor: [0, 1, 0, 1],
            graph3dViewAxisZColor: [0, 0, 1, 1],
            graph3dViewEditSizeColor: [1, 1, 0, 1],
            graph3dViewOrtho: !1,
            graph3dViewOrthoWidth: 2e3,
            graph3dViewFovy: y / 4,
            graph3dViewNear: 10,
            graph3dViewFar: 1e4,
            graph3dViewEye: [0, 300, 1e3],
            graph3dViewCenter: [0, 0, 0],
            graph3dViewUp: [0, 1, -1e-7],
            graph3dViewHeadlightRange: 0,
            graph3dViewHeadlightColor: [1, 1, 1, 1],
            graph3dViewHeadlightIntensity: 1,
            graph3dViewHeadlightDisabled: !1,
            graph3dViewFogDisabled: !0,
            graph3dViewFogColor: "white",
            graph3dViewFogNear: 1,
            graph3dViewFogFar: 2e3,
            graph3dViewDashDisabled: !0,
            graph3dViewBatchBlendDisabled: !0,
            graph3dViewBatchBrightnessDisabled: !0,
            graph3dViewBatchColorDisabled: !1,
            setShape3dModel: function (u, P) {
                Ki[u] = P
            },
            getShape3dModel: function (L) {
                return Ki[L]
            },
            createMatrix: function (H, u) {
                Ue(H) || (H = [H]);
                for (var a = H.length - 1; a >= 0; a--) {
                    var K = H[a];
                    u = Ep(K.mat, K.s3, K.r3, K.rotationMode, K.t3, u)
                }
                return u
            },
            transformVec: function (y, l) {
                return xo(y, l)
            },
            createBoxModel: function () {
                return {
                    vs: Yr,
                    ns: Je,
                    uv: Qd,
                    is: Bj
                }
            },
            createRoundRectModel: function (K, m) {
                return qe.roundRect(K, m)
            },
            createStarModel: function (_, B) {
                return qe.star(_, B)
            },
            createRectModel: function (P, n) {
                return qe.rect(P, n)
            },
            createTriangleModel: function (B, F) {
                return qe.triangle(B, F)
            },
            createRightTriangleModel: function (I, N) {
                return qe.rightTriangle(I, N)
            },
            createParallelogramModel: function (k, R) {
                return qe.parallelogram(k, R)
            },
            createTrapezoidModel: function (U, a) {
                return qe.trapezoid(U, a)
            },
            createSmoothSphereModel: function (r, K, s, T, v, M, g) {
                return mg(new Vj(r, K, s, T, v, M, g))
            },
            createSphereModel: function (N, I, z, L, T, F) {
                return N ? Do(N, I, z, L, T, F) : r.createSmoothSphereModel()
            },
            createSmoothConeModel: function (P, v, C, x, E) {
                return jc(P, v, C, x, E)
            },
            createConeModel: function (m, J, X, o, r, i) {
                return m ? uf(m, J, X, o, r, i) : jc(i)
            },
            createSmoothCylinderModel: function (n, V, T, b, B, X, W, U) {
                return mg(new jf(n, V, T, b, B, X, W, U))
            },
            createCylinderModel: function (J, p, I, A, C, W, U) {
                return J ? up(J, p, I, A, C, W, U) : pq(W, U)
            },
            createSmoothTorusModel: function (R, W, L, o, i, J) {
                return mg(new ff(R, W, L, o, i, J))
            },
            createTorusModel: function (B, p, q, y, u, e, f) {
                return B ? Lh(B, p, q, y, u, e, f) : Kh(e, f)
            },
            createExtrusionModel: function (B, T, W, f, $, o, h, Y) {
                return kn(B, T, W, f, $, o, h, Y)
            },
            createSmoothRingModel: function (p, K, y, v, C, B) {
                for (var j = [], W = 0; W < p.length - 1; W += 2) j.push({
                    x: p[W],
                    y: p[W + 1]
                });
                for (p = km(j, K, y)[0], j = [], W = 0; W < p.length; W++) {
                    var k = p[W];
                    j.push(new wg(k.x, 0, k.y))
                }
                return mg(new Bd(j, B, v, C))
            },
            createRingModel: function (h, D, m, q, Z, i, $, w, T, x) {
                for (var U = [], s = 0; s < h.length - 1; s += 2) U.push({
                    x: h[s],
                    y: h[s + 1]
                });
                i = i || r.shapeSide, $ = $ || 0, w = w || i;
                var Q, u, y, W, o, J, C, l, S, F, s, L, O, R, X, e, v, p, c = [],
                    Y = [],
                    K = T ? [] : V,
                    t = T ? [] : V,
                    f = x ? [] : V,
                    d = x ? [] : V,
                    a = q ? [] : V,
                    B = q ? [] : V,
                    E = Z ? [] : V,
                    G = Z ? [] : V,
                    h = km(U, D, m),
                    M = Rh(h),
                    H = 0,
                    I = 2 * Math.PI / i;
                return h.forEach(function (h) {
                    if (y = h.length, y > 1) {
                        if (W = h[0], q)
                            for (J = W.x, l = W.y, s = $; w > s; s++) L = s + 1, O = s * I, R = L * I, X = A(O), e = N(O), v = A(R), p = N(R), a.push(X * J, l, -e * J, v * J, l, -p * J, 0, l, 0), B.push(.5 - .5 * X, .5 - .5 * e, .5 - .5 * v, .5 - .5 * p, .5, .5);
                        for (F = 0; y > F; F++) {
                            for (o = h[F], J = W.x, C = o.x, l = W.y, S = o.y, Q = H / M, H += md(W, o), u = H / M, s = $; w > s; s++) L = s + 1, O = s * I, R = L * I, X = A(O), e = N(O), v = A(R), p = N(R), c.push(X * C, S, -e * C, v * C, S, -p * C, X * J, l, -e * J, v * C, S, -p * C, v * J, l, -p * J, X * J, l, -e * J), Y.push(s / i, u, L / i, u, s / i, Q, L / i, u, L / i, Q, s / i, Q), T && s === $ && (K.push(0, l, 0, 0, S, 0, X * C, S, -e * C, X * C, S, -e * C, X * J, l, -e * J, 0, l, 0), t.push(0, .5 - l, 0, .5 - S, 2 * C, .5 - S, 2 * C, .5 - S, 2 * J, .5 - l, 0, .5 - l)), x && L === w && (f.push(0, l, 0, v * C, S, -p * C, 0, S, 0, v * C, S, -p * C, 0, l, 0, v * J, l, -p * J), d.push(1, .5 - l, 1 - 2 * C, .5 - S, 1, .5 - S, 1 - 2 * C, .5 - S, 1, .5 - l, 1 - 2 * J, .5 - l));
                            W = o
                        }
                        if (Z)
                            for (J = W.x, l = W.y, s = $; w > s; s++) L = s + 1, O = s * I, R = L * I, X = A(O), e = N(O), v = A(R), p = N(R), E.push(v * J, l, -p * J, X * J, l, -e * J, 0, l, 0), G.push(.5 - .5 * v, .5 + .5 * p, .5 - .5 * X, .5 + .5 * e, .5, .5)
                    }
                }), {
                    vs: c,
                    uv: Y,
                    bottom_vs: E,
                    bottom_uv: G,
                    top_vs: a,
                    top_uv: B,
                    from_vs: K,
                    from_uv: t,
                    to_vs: f,
                    to_uv: d
                }
            }
        }, !0), Zc(U, {
            "3d.move.mode": l,
            "3d.selectable": !0,
            "3d.visible": !0,
            "3d.movable": !0,
            "3d.editable": !0,
            "shape.border.gradient.color": l,
            "edge.gradient.color": l,
            "edge.source.t3": l,
            "edge.target.t3": l,
            "light.type": pn,
            "light.center": [0, 0, 0],
            "light.color": [1, 1, 1, 1],
            "light.disabled": !1,
            "light.angle": y / 4,
            "light.range": 0,
            "light.exponent": 1,
            "light.intensity": 1,
            "wf.visible": !1,
            "wf.width": 1,
            "wf.color": Ef,
            "wf.short": !1,
            "wf.mat": l,
            batch: l,
            "transparent.mask": !1,
            brightness: l,
            "select.brightness": .7,
            "repeat.uv.length": l,
            "label.face": F,
            "label.t3": l,
            "label.r3": l,
            "label.texture.scale": 2,
            "label.rotationMode": Gm,
            "label.light": !1,
            "label.blend": l,
            "label.reverse.flip": !1,
            "label.reverse.color": tb,
            "label.reverse.cull": !1,
            "label.transparent": !1,
            "label.autorotate": !1,
            "label2.face": F,
            "label2.t3": l,
            "label2.r3": l,
            "label2.texture.scale": 2,
            "label2.rotationMode": Gm,
            "label2.light": !1,
            "label2.blend": l,
            "label2.reverse.flip": !1,
            "label2.reverse.color": tb,
            "label2.reverse.cull": !1,
            "label2.transparent": !1,
            "label2.autorotate": !1,
            "note.face": F,
            "note.t3": l,
            "note.r3": l,
            "note.texture.scale": 2,
            "note.rotationMode": Gm,
            "note.light": !1,
            "note.blend": l,
            "note.reverse.flip": !1,
            "note.reverse.color": tb,
            "note.reverse.cull": !1,
            "note.transparent": !1,
            "note.autorotate": !1,
            "note2.face": F,
            "note2.t3": l,
            "note2.r3": l,
            "note2.texture.scale": 2,
            "note2.rotationMode": Gm,
            "note2.light": !1,
            "note2.blend": l,
            "note2.reverse.flip": !1,
            "note2.reverse.color": tb,
            "note2.reverse.cull": !1,
            "note2.transparent": !1,
            "note2.autorotate": !1,
            shape3d: l,
            "shape3d.color": Dd,
            "shape3d.top.color": l,
            "shape3d.bottom.color": l,
            "shape3d.from.color": l,
            "shape3d.to.color": l,
            "shape3d.image": l,
            "shape3d.top.image": l,
            "shape3d.bottom.image": l,
            "shape3d.from.image": l,
            "shape3d.to.image": l,
            "shape3d.light": !0,
            "shape3d.side": 0,
            "shape3d.side.from": l,
            "shape3d.side.to": l,
            "shape3d.visible": !0,
            "shape3d.from.visible": !0,
            "shape3d.to.visible": !0,
            "shape3d.top.visible": !0,
            "shape3d.bottom.visible": !0,
            "shape3d.torus.radius": .17,
            "shape3d.resolution": 0,
            "shape3d.blend": l,
            "shape3d.opacity": l,
            "shape3d.reverse.flip": !1,
            "shape3d.reverse.color": tb,
            "shape3d.reverse.cull": !1,
            "shape3d.transparent": !1,
            "shape3d.uv.offset": l,
            "shape3d.uv.scale": l,
            "shape3d.top.uv.offset": l,
            "shape3d.top.uv.scale": l,
            "shape3d.bottom.uv.offset": l,
            "shape3d.bottom.uv.scale": l,
            "shape3d.from.uv.offset": l,
            "shape3d.from.uv.scale": l,
            "shape3d.to.uv.offset": l,
            "shape3d.to.uv.scale": l,
            "shape3d.top.cap": l,
            "shape3d.bottom.cap": l,
            "shape3d.start.angle": 0,
            "shape3d.discard.selectable": !0,
            "shape3d.top.discard.selectable": !0,
            "shape3d.bottom.discard.selectable": !0,
            "shape3d.from.discard.selectable": !0,
            "shape3d.to.discard.selectable": !0,
            "shape3d.scaleable": !0,
            "all.light": !0,
            "all.visible": !0,
            "all.color": Dd,
            "all.image": l,
            "all.blend": l,
            "all.opacity": l,
            "all.reverse.flip": !1,
            "all.reverse.color": tb,
            "all.reverse.cull": !1,
            "all.transparent": !1,
            "all.uv": l,
            "all.uv.offset": l,
            "all.uv.scale": l,
            "all.discard.selectable": !0,
            mat: l,
            "left.mat": l,
            "right.mat": l,
            "top.mat": l,
            "bottom.mat": l,
            "front.mat": l,
            "back.mat": l
        }, !0);
        var rq, Xf = !1,
            xh = [0, 0, 0, 1 / 255],
            rb = {
                left: [1 / 255, 0, 0, 1],
                right: [2 / 255, 0, 0, 1],
                top: [3 / 255, 0, 0, 1],
                bottom: [4 / 255, 0, 0, 1],
                front: [5 / 255, 0, 0, 1],
                back: [6 / 255, 0, 0, 1],
                m: {
                    1: Sd,
                    2: yn,
                    3: lp,
                    4: ih,
                    5: F,
                    6: Fg
                }
            },
            Vc = function (z, s, l, O) {
                if (s.getFaceVisible(z, l)) {
                    Si(s, Jl(z, s.getFaceMat(z, l) || s.getMat(z)));
                    var M = s._26I;
                    s.getFaceReverseCull(z, l) ? M.enable(M.CULL_FACE) : M.disable(M.CULL_FACE), Vb(M, s._prg.uFixPickReverseColor, rb[l]), Eq(M, O, 6), Fl(s)
                }
            },
            ir = function (D) {
                return D instanceof Hd
            },
            Bo = function (d) {
                return [d.x, d.e || 0, d.y]
            },
            rd = function (S, C, i) {
                for (var C = si(C), h = C[0], w = C[1], g = C[2]; i--;) S.push(h, w, g)
            },
            Bn = function (V, U, _) {
                for (var U = si(U), d = U[0], N = U[1], n = U[2], A = U[3]; _--;) V.push(d, N, n, A)
            },
            ic = function (Y, T, S) {
                if (T)
                    for (var t, c, K, k = T[0], w = T[1], V = T[2], P = T[4], v = T[5], M = T[6], r = T[8], F = T[9], O = T[10], R = T[12], p = T[13], H = T[14], E = S.length, j = 0, j = 0; E > j; j += 3) t = S[j], c = S[j + 1], K = S[j + 2], Y.push(k * t + P * c + r * K + R, w * t + v * c + F * K + p, V * t + M * c + O * K + H);
                else Of(Y, S)
            },
            Wm = function (p, u) {
                var B = u.s("light.intensity"),
                    c = si(u.s(Yk)),
                    j = c[0],
                    z = c[1],
                    e = c[2];
                1 !== B && (j *= B, z *= B, e *= B), p.push(j, z, e, u.s("light.disabled") ? 1 : 0)
            },
            Sn = function (b, F, _) {
                Vb(F, _.uHeadlightRange, b._headlightRange);
                var i = b._headlightIntensity,
                    M = si(b._headlightColor);
                1 !== i && (M = [M[0] * i, M[1] * i, M[2] * i]), Vb(F, _.uHeadlightColor, [M[0], M[1], M[2], b._headlightDisabled ? 1 : 0]);
                var p = b._59O,
                    w = b._spots,
                    P = b._dirs;
                if (p.length) {
                    var J = [],
                        o = [],
                        Q = [];
                    p.forEach(function (q) {
                        Wm(J, q), Of(o, q.p3()), Q.push(q.s("light.range"))
                    }), F.uniform4fv(_.uPointColor, J), F.uniform1fv(_.uPointRange, Q), F.uniform3fv(_.uPointPosition, o)
                }
                if (w.length) {
                    var Z = [],
                        z = [],
                        K = [],
                        g = [],
                        L = [],
                        l = [];
                    w.forEach(function (p) {
                        Wm(Z, p), Of(z, p.p3()), Of(K, p.s("light.center")), g.push(p.s("light.range")), L.push(A(p.s("light.angle") / 2)), l.push(p.s("light.exponent"))
                    }), F.uniform4fv(_.uSpotColor, Z), F.uniform1fv(_.uSpotRange, g), F.uniform1fv(_.uSpotAngle, L), F.uniform1fv(_.uSpotExponent, l), F.uniform3fv(_.uSpotPosition, z), F.uniform3fv(_.uSpotCenter, K)
                }
                if (P.length) {
                    var H = [],
                        d = [];
                    P.forEach(function (l) {
                        Wm(H, l), Of(d, l.p3())
                    }), F.uniform4fv(_.uDirColor, H), F.uniform3fv(_.uDirPosition, d)
                }
            },
            Ln = function (R) {
                return R > 0 && 0 === (R - 1 & R)
            },
            Qc = function (E) {
                return E = C(0, J(y, E)), E = C(pg, J(y - pg, E))
            },
            xk = function () {
                return .05 + T() / 2
            },
            mj = function (o, U, A, R) {
                var Q, d = o.getEye();
                return o.isOrtho() ? (Q = Zn(o.getCenter(), d), Q[0] += R[0], Q[1] += R[1], Q[2] += R[2]) : Q = d, id(U, A, R, Q)
            },
            id = function (o, R, x, P) {
                var c = Gl(o, R),
                    C = Zn(P, x, !0),
                    m = Gl(C, R);
                if (O(m) < pg) return V;
                var L = (c - Gl(x, R)) / m;
                return [x[0] + C[0] * L, x[1] + C[1] * L, x[2] + C[2] * L]
            },
            As = function (C, w) {
                return {
                    x: 2 * C.x - w.x,
                    y: 2 * C.y - w.y
                }
            },
            Ve = function (M, C, h, S) {
                var y, q;
                if (!M) return y = x(C.y - h.y, h.x - C.x), {
                    x: C.x + S * N(y),
                    y: C.y + S * A(y)
                };
                if (!h) return y = x(M.y - C.y, C.x - M.x), {
                    x: C.x + S * N(y),
                    y: C.y + S * A(y)
                };
                var X = Zn([M.x, M.y, 0], [C.x, C.y, 0], !0),
                    P = Zn([h.x, h.y, 0], [C.x, C.y, 0], !0),
                    I = -(X[0] + P[0]) / 2,
                    d = -(X[1] + P[1]) / 2,
                    j = B(I * I + d * d);
                return pg > j ? (y = x(M.y - C.y, C.x - M.x), {
                    x: C.x + S * N(y),
                    y: C.y + S * A(y)
                }) : (y = R(Gl(X, P)) / 2, q = X[1] * P[0] - X[0] * P[1] > 0 ? -1 : 1, I /= j, d /= j, j = S / N(y), {
                    x: C.x + q * j * I,
                    y: C.y + q * j * d
                })
            },
            yq = function (p) {
                var u = p[1],
                    n = p[2],
                    l = p[3],
                    E = p[6],
                    j = p[7],
                    g = p[11];
                p[1] = p[4], p[2] = p[8], p[3] = p[12], p[4] = u, p[6] = p[9], p[7] = p[13], p[8] = n, p[9] = E, p[11] = p[14], p[12] = l, p[13] = j, p[14] = g
            },
            bg = function (O) {
                var U = O[0],
                    m = O[1],
                    F = O[2],
                    s = O[3],
                    A = O[4],
                    k = O[5],
                    I = O[6],
                    q = O[7],
                    w = O[8],
                    j = O[9],
                    e = O[10],
                    h = O[11],
                    d = O[12],
                    _ = O[13],
                    P = O[14],
                    g = O[15],
                    o = U * k - m * A,
                    b = U * I - F * A,
                    n = U * q - s * A,
                    M = m * I - F * k,
                    D = m * q - s * k,
                    E = F * q - s * I,
                    C = w * _ - j * d,
                    R = w * P - e * d,
                    v = w * g - h * d,
                    Q = j * P - e * _,
                    G = j * g - h * _,
                    T = e * g - h * P,
                    p = o * T - b * G + n * Q + M * v - D * R + E * C;
                return p ? (p = 1 / p, O[0] = (k * T - I * G + q * Q) * p, O[1] = (F * G - m * T - s * Q) * p, O[2] = (_ * E - P * D + g * M) * p, O[3] = (e * D - j * E - h * M) * p, O[4] = (I * v - A * T - q * R) * p, O[5] = (U * T - F * v + s * R) * p, O[6] = (P * n - d * E - g * b) * p, O[7] = (w * E - e * n + h * b) * p, O[8] = (A * G - k * v + q * C) * p, O[9] = (m * v - U * G - s * C) * p, O[10] = (d * D - _ * n + g * o) * p, O[11] = (j * n - w * D - h * o) * p, O[12] = (k * R - A * Q - I * C) * p, O[13] = (U * Q - m * R + F * C) * p, O[14] = (_ * b - d * M - P * o) * p, O[15] = (w * M - j * b + e * o) * p, void 0) : V
            },
            Fn = function (X, o) {
                if (o) {
                    var J = o[0],
                        h = o[1],
                        g = o[2];
                    X[12] = X[0] * J + X[4] * h + X[8] * g + X[12], X[13] = X[1] * J + X[5] * h + X[9] * g + X[13], X[14] = X[2] * J + X[6] * h + X[10] * g + X[14], X[15] = X[3] * J + X[7] * h + X[11] * g + X[15]
                }
            },
            he = function (F, Y) {
                if (Y) {
                    var M = Y[0],
                        $ = Y[1],
                        l = Y[2];
                    F[0] = F[0] * M, F[1] = F[1] * M, F[2] = F[2] * M, F[3] = F[3] * M, F[4] = F[4] * $, F[5] = F[5] * $, F[6] = F[6] * $, F[7] = F[7] * $, F[8] = F[8] * l, F[9] = F[9] * l, F[10] = F[10] * l, F[11] = F[11] * l
                }
            },
            oe = function (C, P, H) {
                var s = P[0],
                    W = P[1],
                    A = P[2],
                    M = P[3],
                    Z = P[4],
                    e = P[5],
                    t = P[6],
                    O = P[7],
                    p = P[8],
                    _ = P[9],
                    X = P[10],
                    r = P[11],
                    h = P[12],
                    w = P[13],
                    U = P[14],
                    L = P[15],
                    l = H[0],
                    o = H[1],
                    Y = H[2],
                    S = H[3];
                return C[0] = l * s + o * Z + Y * p + S * h, C[1] = l * W + o * e + Y * _ + S * w, C[2] = l * A + o * t + Y * X + S * U, C[3] = l * M + o * O + Y * r + S * L, l = H[4], o = H[5], Y = H[6], S = H[7], C[4] = l * s + o * Z + Y * p + S * h, C[5] = l * W + o * e + Y * _ + S * w, C[6] = l * A + o * t + Y * X + S * U, C[7] = l * M + o * O + Y * r + S * L, l = H[8], o = H[9], Y = H[10], S = H[11], C[8] = l * s + o * Z + Y * p + S * h, C[9] = l * W + o * e + Y * _ + S * w, C[10] = l * A + o * t + Y * X + S * U, C[11] = l * M + o * O + Y * r + S * L, l = H[12], o = H[13], Y = H[14], S = H[15], C[12] = l * s + o * Z + Y * p + S * h, C[13] = l * W + o * e + Y * _ + S * w, C[14] = l * A + o * t + Y * X + S * U, C[15] = l * M + o * O + Y * r + S * L, C
            },
            hk = function (F, P, X, Y) {
                var A, u, $, S, h, I, m, o, z, t, n = P[0],
                    l = P[1],
                    f = P[2],
                    e = Y[0],
                    L = Y[1],
                    r = Y[2],
                    T = X[0],
                    _ = X[1],
                    K = X[2];
                return O(n - T) < pg && O(l - _) < pg && O(f - K) < pg ? nn(F) : (m = n - T, o = l - _, z = f - K, t = 1 / B(m * m + o * o + z * z), m *= t, o *= t, z *= t, A = L * z - r * o, u = r * m - e * z, $ = e * o - L * m, t = B(A * A + u * u + $ * $), t ? (t = 1 / t, A *= t, u *= t, $ *= t) : (A = 0, u = 0, $ = 0), S = o * $ - z * u, h = z * A - m * $, I = m * u - o * A, t = B(S * S + h * h + I * I), t ? (t = 1 / t, S *= t, h *= t, I *= t) : (S = 0, h = 0, I = 0), F[0] = A, F[1] = S, F[2] = m, F[3] = 0, F[4] = u, F[5] = h, F[6] = o, F[7] = 0, F[8] = $, F[9] = I, F[10] = z, F[11] = 0, F[12] = -(A * n + u * l + $ * f), F[13] = -(S * n + h * l + I * f), F[14] = -(m * n + o * l + z * f), F[15] = 1, F)
            },
            cn = function (p, u, L, X, V) {
                var l = 1 / P(u / 2),
                    d = 1 / (X - V);
                return p[0] = l / L, p[1] = 0, p[2] = 0, p[3] = 0, p[4] = 0, p[5] = l, p[6] = 0, p[7] = 0, p[8] = 0, p[9] = 0, p[10] = (V + X) * d, p[11] = -1, p[12] = 0, p[13] = 0, p[14] = 2 * V * X * d, p[15] = 0, p
            },
            ke = function (k, i, K, c, Z, l, E) {
                var z = 1 / (i - K),
                    B = 1 / (c - Z),
                    L = 1 / (l - E);
                return k[0] = -2 * z, k[1] = 0, k[2] = 0, k[3] = 0, k[4] = 0, k[5] = -2 * B, k[6] = 0, k[7] = 0, k[8] = 0, k[9] = 0, k[10] = 2 * L, k[11] = 0, k[12] = (i + K) * z, k[13] = (Z + c) * B, k[14] = (E + l) * L, k[15] = 1, k
            },
            Id = function (A, z) {
                return hk(z ? z : vj(), A._eye, A._center, A._up)
            },
            gp = function (A) {
                var Z = A.getAspect(),
                    l = A._near,
                    Y = A._far,
                    V = vj();
                if (A._ortho) {
                    var L = A._orthoWidth / 2,
                        P = L / Z;
                    ke(V, -L, L, -P, P, l, Y)
                } else cn(V, A._fovy, Z, l, Y);
                return V
            },
            th = function (F, h) {
                if (!F) return V;
                var q = 0,
                    C = 1,
                    P = 2,
                    G = [],
                    T = 0,
                    Y = F.length,
                    W = Y / 3;
                if (h) {
                    for (; Y > T; T++) G[T] = 0;
                    for (T = 0; T < h.length; T += 3) {
                        var _ = [],
                            U = [],
                            p = [];
                        _[q] = F[3 * h[T + 1] + q] - F[3 * h[T] + q], _[C] = F[3 * h[T + 1] + C] - F[3 * h[T] + C], _[P] = F[3 * h[T + 1] + P] - F[3 * h[T] + P], U[q] = F[3 * h[T + 2] + q] - F[3 * h[T + 1] + q], U[C] = F[3 * h[T + 2] + C] - F[3 * h[T + 1] + C], U[P] = F[3 * h[T + 2] + P] - F[3 * h[T + 1] + P], p[q] = _[C] * U[P] - _[P] * U[C], p[C] = _[P] * U[q] - _[q] * U[P], p[P] = _[q] * U[C] - _[C] * U[q];
                        for (var j = 0; 3 > j; j++) G[3 * h[T + j] + q] += p[q], G[3 * h[T + j] + C] += p[C], G[3 * h[T + j] + P] += p[P]
                    }
                } else
                    for (T = 0; W > T; T += 3) {
                        var _ = [],
                            U = [],
                            p = [];
                        _[q] = F[3 * (T + 1) + q] - F[3 * T + q], _[C] = F[3 * (T + 1) + C] - F[3 * T + C], _[P] = F[3 * (T + 1) + P] - F[3 * T + P], U[q] = F[3 * (T + 2) + q] - F[3 * (T + 1) + q], U[C] = F[3 * (T + 2) + C] - F[3 * (T + 1) + C], U[P] = F[3 * (T + 2) + P] - F[3 * (T + 1) + P], p[q] = _[C] * U[P] - _[P] * U[C], p[C] = _[P] * U[q] - _[q] * U[P], p[P] = _[q] * U[C] - _[C] * U[q];
                        for (var j = 0; 3 > j; j++) G[3 * (T + j) + q] = p[q], G[3 * (T + j) + C] = p[C], G[3 * (T + j) + P] = p[P]
                    }
                for (T = 0; Y > T; T += 3) {
                    var X = [];
                    X[q] = G[T + q], X[C] = G[T + C], X[P] = G[T + P];
                    var e = B(X[q] * X[q] + X[C] * X[C] + X[P] * X[P]);
                    0 === e && (e = pg), X[q] = X[q] / e, X[C] = X[C] / e, X[P] = X[P] / e, G[T + q] = X[q], G[T + C] = X[C], G[T + P] = X[P]
                }
                return new wq(G)
            },
            bn = function (T, M, y) {
                if (y || (y = T.createTexture()), M) {
                    var o = T.TEXTURE_2D,
                        p = T.LINEAR,
                        l = T.REPEAT,
                        J = T.CLAMP_TO_EDGE,
                        E = T.TEXTURE_MIN_FILTER;
                    uh(T, y), T.texImage2D(o, 0, T.RGBA, T.RGBA, T.UNSIGNED_BYTE, M), ye(T, T.TEXTURE_MAG_FILTER, p), Ln(M.width) && Ln(M.height) ? (ye(T, T.TEXTURE_WRAP_S, l), ye(T, T.TEXTURE_WRAP_T, l), ye(T, E, T.LINEAR_MIPMAP_LINEAR), T.generateMipmap(o)) : (ye(T, T.TEXTURE_WRAP_S, J), ye(T, T.TEXTURE_WRAP_T, J), ye(T, E, p)), uh(T, V)
                }
                return y
            },
            Ab = function (H) {
                H._26I && H._prg && (H._26I.deleteProgram(H._prg), H._prg = V)
            },
            Ce = function (U, F, V, u) {
                var Y = U.createShader(V);
                return U.shaderSource(Y, u), U.compileShader(Y), U.attachShader(F, Y), Y
            },
            wc = function (i) {
                return i.createBuffer()
            },
            uh = function (W, B) {
                W.bindTexture(W.TEXTURE_2D, B)
            },
            hj = function (C, Y) {
                C.bindFramebuffer(C.FRAMEBUFFER, Y)
            },
            ye = function (G, b, I) {
                G.texParameteri(G.TEXTURE_2D, b, I)
            },
            Pb = function (M, i) {
                if (i) {
                    var i = si(i);
                    M.clearColor(i[0], i[1], i[2], i[3])
                }
            },
            lm = function (z, r) {
                Vb(z, r.uFix, !0), Dn(z, r.aNormal)
            },
            bl = function (M, h) {
                Vb(M, h.uFix, !1), En(M, h.aNormal)
            },
            wd = function (J, B, o, R, p, G, f, c) {
                J._picking || (o ? (Vb(J, B.uBlend, !0), Vb(J, B.uBlendColor, o)) : Vb(J, B.uBlend, !1), Vb(J, B.uLight, R == V ? !0 : R), _f(p) && 1 !== p && Vb(J, B.uPartOpacity, p), Vb(J, B.uReverseFlip, G == V ? !1 : G), Vb(J, B.uFixPickReverseColor, f || tb)), c ? J.enable(J.CULL_FACE) : J.disable(J.CULL_FACE)
            },
            dj = function (j, l) {
                j._picking || Vb(j, l.uPartOpacity, 1)
            },
            pm = function (H, f, W, Y, v, G, C, D) {
                if (W) {
                    Vb(H, f.uTexture, !0), Vb(H, f.uDiscardSelectable, vh(Y) ? Y : !0), En(H, f.aUv), te(H, v, G, f.aUv, 2), H.activeTexture(H.TEXTURE0), uh(H, W), H.uniform1i(f.uSampler, 0);
                    var L = [0, 0, 1, 1];
                    C && (L[0] = C[0], L[1] = C[1]), D && (L[2] = D[0], L[3] = D[1]), Vb(H, f.uOffsetScale, L)
                }
            },
            fo = function (_, M, K) {
                K && (uh(_, V), Dn(_, M.aUv), Vb(_, M.uTexture, !1))
            },
            ul = function (F, W, r, B, k, w) {
                r && !$ && F.lineWidth(r), B && !F._picking && Vb(F, W.uFixPickReverseColor, B), k && te(F, k, w, W.aPosition)
            },
            Tq = function (g, t, K, b) {
                rq && (b = g[rq]), g.drawArrays(b == V ? g.TRIANGLES : b, t, K)
            },
            Eq = function (y, Y, $, N) {
                rq && (N = y[rq]), y.drawElements(N == V ? y.TRIANGLES : N, $, y.UNSIGNED_SHORT, Y == V ? 0 : 2 * Y)
            },
            te = function (U, j, O, m, P) {
                var Z = U.ARRAY_BUFFER;
                U.bindBuffer(Z, j), O && U.bufferData(Z, O, U.STATIC_DRAW), m != V && U.vertexAttribPointer(m, P ? P : 3, U.FLOAT, !1, 0, 0)
            },
            bk = function (q, M, k) {
                var b = q.ELEMENT_ARRAY_BUFFER;
                q.bindBuffer(b, M), k && q.bufferData(b, k, q.STATIC_DRAW)
            },
            Vb = function (y, k, x) {
                if (x != V && k != V) {
                    x = si(x);
                    var F = x.length;
                    3 === F ? y.uniform3fv(k, x) : 4 === F ? y.uniform4fv(k, x) : 16 === F ? y.uniformMatrix4fv(k, !1, x) : vh(x) ? y.uniform1i(k, x ? 1 : 0) : 2 === F ? y.uniform2fv(k, x) : y.uniform1f(k, x)
                }
            },
            En = function (s, t) {
                t != V && t >= 0 && s.enableVertexAttribArray(t)
            },
            Dn = function (B, N) {
                N != V && N >= 0 && B.disableVertexAttribArray(N)
            },
            Fl = function (j, a) {
                var C = j.getGL(),
                    v = j._prg;
                j._7O = j._8O.pop(), a && (Vb(C, v.uMVMatrix, j._7O), j._6O = a, Vb(C, v.uNMatrix, a))
            },
            Il = function (c, $) {
                return $ || ($ = vj()), sb($, c), bg($), yq($), $
            },
            Si = function (E, T) {
                var H = E.getGL(),
                    f = E._prg,
                    t = E._7O;
                T && (E._8O.push(oc(t)), oe(t, t, T)), Vb(H, f.uMVMatrix, t), Vb(H, f.uNMatrix, Il(t, E._6O))
            },
            Xi = function (F, B, q, $, M, r) {
                if (q) {
                    if ($) {
                        var v = q.value++,
                            b = [(255 & v >> 24) / 255, (255 & v >> 16) / 255, (255 & v >> 8) / 255, (255 & v) / 255];
                        q[v] = {
                            data: M,
                            part: r
                        }
                    } else b = xh;
                    return Vb(F, B.uFixPickReverseColor, b), b
                }
            },
            Lp = function () {
                var w = {
                    center: function (o, N, Z, Y, J) {
                        var f = N[1] / 2,
                            k = {
                                x: -N[0] / 2,
                                y: f,
                                width: N[0],
                                height: N[1]
                            },
                            h = Jn(o, k, Z);
                        return [h.x + Y, 2 * f - h.y - J, xk()]
                    },
                    front: function (a, l, m, R, K) {
                        var L = l[1] / 2,
                            c = {
                                x: -l[0] / 2,
                                y: L,
                                width: l[0],
                                height: l[1]
                            },
                            x = Jn(a, c, m);
                        return [x.x + R, 2 * L - x.y - K, l[2] / 2 + xk()]
                    },
                    back: function (r, d, E, H, b) {
                        var Y = d[0] / 2,
                            z = d[1] / 2,
                            l = {
                                x: Y,
                                y: z,
                                width: d[0],
                                height: d[1]
                            },
                            X = Jn(r, l, E);
                        return [2 * Y - X.x - H, 2 * z - X.y - b, -d[2] / 2 - xk()]
                    },
                    left: function (v, H, e, U, l) {
                        var p = H[1] / 2,
                            E = {
                                x: -H[2] / 2,
                                y: p,
                                width: H[2],
                                height: H[1]
                            },
                            s = Jn(v, E, e);
                        return [-H[0] / 2 - xk(), 2 * p - s.y - l, s.x + U]
                    },
                    right: function (D, F, P, Y, g) {
                        var $ = F[2] / 2,
                            b = F[1] / 2,
                            l = {
                                x: $,
                                y: b,
                                width: F[2],
                                height: F[1]
                            },
                            N = Jn(D, l, P);
                        return [F[0] / 2 + xk(), 2 * b - N.y - g, 2 * $ - N.x - Y]
                    },
                    top: function (d, U, c, g, D) {
                        var B = {
                            x: -U[0] / 2,
                            y: -U[2] / 2,
                            width: U[0],
                            height: U[2]
                        },
                            I = Jn(d, B, c);
                        return [I.x + g, U[1] / 2 + xk(), I.y + D]
                    },
                    bottom: function (B, w, T, l, I) {
                        var j = w[2] / 2,
                            S = {
                                x: -w[0] / 2,
                                y: j,
                                width: w[0],
                                height: w[2]
                            },
                            G = Jn(B, S, T);
                        return [G.x + l, -w[1] / 2 - xk(), 2 * j - G.y - I]
                    }
                };
                return function (C, x, p, T, s, b) {
                    return w[T](C, x, p, s || 0, b || 0)
                }
            }(),
            Dj = function (E, Q, Z, w, K, a, U, X, S, F) {
                if (K && (Q[0] += K[0], Q[1] += K[1], Q[2] += K[2]), Fn(E, Z), X) {
                    var j = vj();
                    if (Ej(j, S, F), xo(Q, j), Fn(E, Q), E.auto = X, E.pos = xo([0, 0, 0], E), a) {
                        var Y = E.mat2 = vj();
                        Ej(Y, a, U)
                    }
                } else Ej(E, S, F), Fn(E, Q), w === Sd ? Ec(E, -q) : w === yn ? Ec(E, q) : w === lp ? gr(E, -q) : w === ih ? gr(E, q) : w === Fg && Ec(E, y), Ej(E, a, U);
                return E
            },
            $c = function (e, U) {
                var l = U.auto,
                    v = U.mat2,
                    u = e.gv;
                if (l) {
                    var P = Zn(e.gv.getEye(), U.pos),
                        _ = vj();
                    Ec(_, y / 2 + x(-P[2], P[0])), "y" !== l && gr(_, -x(P[1], B(P[2] * P[2] + P[0] * P[0]))), v && oe(_, _, v), _ = oe(vj(), U, _), Si(u, _)
                } else Si(u, U)
            },
            sl = function (X, C, D, t, N) {
                var z = X.s,
                    M = X.gv,
                    L = M.getGL(),
                    h = M._prg,
                    A = M._buffer,
                    U = M._1O;
                bn(L, ph, U), $c(X, D), wd(L, h, z(C + ".blend"), z(C + ".light"), z(C + ".opacity"), z(C + ".reverse.flip"), z(C + ".reverse.color"), z(C + ".reverse.cull")), pm(L, h, U, N, A.uv, He), te(L, A.vs, t, h.aPosition), te(L, A.ns, Ho, h.aNormal), bk(L, A.is, Km), Eq(L, 0, Km.length), fo(L, h, U), dj(L, h), Fl(M)
            },
            Cp = function (w, O, Y) {
                var R = w.gv,
                    S = w.data,
                    L = w[O] = {
                        blend: R.getBodyColor(S) || R.getFaceBlend(S, O),
                        light: R.getFaceLight(S, O),
                        color: R.getFaceColor(S, O),
                        opacity: R.getFaceOpacity(S, O),
                        transparent: R.getFaceTransparent(S, O),
                        reverseFlip: R.getFaceReverseFlip(S, O),
                        reverseColor: R.getFaceReverseColor(S, O),
                        reverseCull: R.getFaceReverseCull(S, O),
                        texture: R.getFaceImage(S, O),
                        discardSelectable: R.getFaceDiscardSelectable(S, O)
                    };
                if ("csg" !== O) {
                    L.uv = R.getFaceUv(S, O) || Y && Y[O + "Uv"], L.uvScale = R.getFaceUvScale(S, O) || Y && Y[O + "UvScale"], L.uvOffset = R.getFaceUvOffset(S, O) || Y && Y[O + "UvOffset"];
                    var i = R.getFaceMat(S, O);
                    i && (L.mat = Jl(S, i))
                }
                return L
            },
            ts = function (y, c, k, R, I) {
                if (R) {
                    if (!I(R.transparent)) return;
                    var x = y.data,
                        $ = y.gv,
                        d = $._buffer,
                        n = $.getTexture(R.texture, x);
                    pm(c, k, n, R.discardSelectable, d.uv, R.tuv, R.uvOffset, R.uvScale), wd(c, k, R.blend, R.light, R.opacity, R.reverseFlip, R.reverseColor, R.reverseCull), Vb(c, k.uDiffuse, R.color), te(c, d.vs, R.vs, k.aPosition), te(c, d.ns, R.ns, k.aNormal), Tq(c, 0, R.vs.length / 3), dj(c, k), fo(c, k, n)
                }
            },
            Zb = function (T, l, D, e, k, n) {
                var F, v, m, h, B, W, d, x, L, i, t, Y = [e - l, k - D],
                    K = T ? T.length : 0;
                for (m = 0; K > m; m++) {
                    for (h = 2, F = T[m], B = F[0], W = F[1]; h + 1 < F.length;) {
                        if (d = F[h], x = F[h + 1], v = nh(l, D, e, k, B, W, d, x, !0)) {
                            L = [d - B, x - W], i = md(L), L[0] /= i, L[1] /= i, i = Gl(Y, L), i = i > 0 ? n : -n, t = [L[0] * i, L[1] * i];
                            break
                        }
                        B = d, W = x, h += 2
                    }
                    if (t) break
                }
                if (t)
                    for (e = l + t[0], k = D + t[1], m = 0; K > m; m++)
                        for (h = 2, F = T[m], B = F[0], W = F[1]; h + 1 < F.length;) {
                            if (d = F[h], x = F[h + 1], v = nh(l, D, e, k, B, W, d, x, !0)) return [0, 0];
                            B = d, W = x, h += 2
                        }
                return t ? t : [e - l, k - D]
            },
            Xc = o.graph3d = {},
            ne = function (G, H, B) {
                Ui(L + ".graph3d." + G, H, B)
            },
            Vh = "~<yfusfw!+!yjsubNQv!>!opjujtpQ`mh!gjeof$!~<fdobutjEfojMb!>!fdobutjEfojMw|*itbEv)gj!ITBE!gfegj$!!gjeof$!~<ttfouihjsCidubCb!>!ttfouihjsCidubCw|*ttfouihjsCidubCv)gj!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!~<eofmCidubCb!>!eofmCidubCw|*eofmCidubCv)gj!EOFMCIDUBC!gfegj$!!gjeof$!~<spmpDidubCb!>!spmpDidubCw|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!~<x{/fmbdTuftggPv!+!wVb!,!zy/fmbdTuftggPv!>!wVw|*fsvuyfUv)gj~!gjeof$!~~<*^j]opjujtpQupqTw!.!sfuofd)f{jmbnspo!>!^j]opjudfsjEupqTw<**1/2!-^j]sfuofDupqTv)5dfw!+!yjsubNxfjWv)4dfw!>!sfuofd!4dfw<**1/2!-^j]opjujtpQupqTv)5dfw!+!yjsubNxfjWv)4dfw!>!^j]opjujtpQupqTw|*1/1!>>!x/^j]spmpDupqTv)gj|!*,,j!<UPQT`YBN!=!j!<1>j!uoj)spg!1!?!UPQT`YBN!gj$!!gjeof$!~~<**1/2!-^j]opjujtpQuojpQv)5dfw!+!yjsubNxfjWv)4dfw!>!^j]opjujtpQuojpQw|*1/1!>>!x/^j]spmpDuojpQv)gj|!*,,j!<UOJPQ`YBN!=!j!<1>j!uoj)spg!1!?!UOJPQ`YBN!gj$!!gjeof$!~~<*opjujtpQsje!.!sfuofd)f{jmbnspo!>!^j]opjudfsjEsjEw<**1/2!-1/1!-1/1!-1/1)5dfw!+!yjsubNxfjWv)4dfw!>!sfuofd!4dfw<**1/2!-^j]opjujtpQsjEv)5dfw!+!yjsubNxfjWv)4dfw!>!opjujtpQsje!4dfw|*1/1!>>!x/^j]spmpDsjEv)gj|!*,,j!<SJE`YBN!=!j!<1>j!uoj)spg!1!?!SJE`YBN!gj$!<*yfusfw)4dfw!>!yfusfWw<**1/2!-mbnspOb)5dfw!+!yjsubNOv)4dfw!>!mbnspOw|*ldjQva!%%!yjGva)gj<*1/2!-opjujtpQb)5dfw!+!yjsubNWNv!>!yfusfw!5dfw|!*ejpw)ojbn!ejpw!gjeof$!<fdobutjEfojMw!ubpmg!hojzsbw<fdobutjEfojMb!ubpmg!fuvcjsuub<itbEv!mppc!nspgjov!ITBE!gfegj$!!gjeof$!<^UPQT`YBN]opjudfsjEupqTw!4dfw!hojzsbw<^UPQT`YBN]opjujtpQupqTw!4dfw!hojzsbw<^UPQT`YBN]sfuofDupqTv!4dfw!nspgjov<^UPQT`YBN]opjujtpQupqTv!4dfw!nspgjov<^UPQT`YBN]spmpDupqTv!5dfw!nspgjov!1!?!UPQT`YBN!gj$!!gjeof$!<^UOJPQ`YBN]opjujtpQuojpQw!4dfw!hojzsbw<^UOJPQ`YBN]opjujtpQuojpQv!4dfw!nspgjov<^UOJPQ`YBN]spmpDuojpQv!5dfw!nspgjov!1!?!UOJPQ`YBN!gj$!!gjeof$!<^SJE`YBN]opjudfsjEsjEw!4dfw!hojzsbw<^SJE`YBN]opjujtpQsjEv!4dfw!nspgjov<^SJE`YBN]spmpDsjEv!5dfw!nspgjov!1!?!SJE`YBN!gj$!!gjeof$!<eofmCidubCw!4dfw!hojzsbw<eofmCidubCb!4dfw!fuvcjsuub<eofmCidubCv!mppc!nspgjov!EOFMCIDUBC!gfegj$!!gjeof$!<ttfouihjsCidubCw!ubpmg!hojzsbw<ttfouihjsCidubCb!ubpmg!fuvcjsuub<ttfouihjsCidubCv!mppc!nspgjov!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!<spmpDidubCw!5dfw!hojzsbw<spmpDidubCb!5dfw!fuvcjsuub<spmpDidubCv!mppc!nspgjov!SPMPDIDUBC!gfegj$!<yfusfWw!4dfw!hojzsbw<mbnspOw!4dfw!hojzsbw<yjGv!mppc!nspgjov<ldjQv!mppc!nspgjov<yjsubNxfjWv!5ubn!nspgjov<yjsubNOv!5ubn!nspgjov<yjsubNQv!5ubn!nspgjov<yjsubNWNv!5ubn!nspgjov<opjujtpQb!4dfw!fuvcjsuub<mbnspOb!4dfw!fuvcjsuub<wVw!3dfw!hojzsbw<wVb!3dfw!fuvcjsuub<fmbdTuftggPv!5dfw!nspgjov<fsvuyfUv!mppc!nspgjov!YJGFSQ^#CBRBEJxTT87hJFI,,bX1XrIwcn3UM{ZeZ,M6HEN6nLxe2Z72s2:3johr6foKrpqwxNKYkdbJ2CN[mBbf[wXU,T0oGuSEd190ohLZkEn8IuCe[OHoWeKz:Sf,VS7xdSLw23W1YJLU:jdv2{hiDbhDzNNEh9tp3xsuEp94Sl4c3wRzqwShMDRhCLRjCDEBOH5BBVRBCFRE4cJTHrTDH1BNgHJN",
            Jo = "~~<eJ!>!spmpDhbsG`mh!gjeof$!~<ttfouihjsCidubCw!>+!chs/eJ!!!|*ttfouihjsCidubCv)gj!TTFOUIHJSCIDUBC!gfegj$!~<ttfouihjsCv!>+!chs/eJ!!!|*1/2!>a!ttfouihjsCv)gj~~<zujdbqPusbQv!>+!b/eJ!!!|*1/2!>a!zujdbqPusbQv)gj~!gjeof$!<*spudbGhpg!-*x/eJ!-chs/spmpDhpGv)5dfw!-eJ)yjn!>!eJ<*iuqfe!-sbGhpGv!-sbfOhpGv)qfutiuppnt!>!spudbGhpg!ubpmg<x/esppDhbsG`mh0{/esppDhbsG`mh!>!iuqfe!ubpmg!HPG!gfegj$!!gjeof$!~~~~<chs/^j]spmpDupqTv!+!udfggFupqt!+!fhobSm!+!*1/1!-*mbnspOm.!-O)upe)ybn!>,!chs/eJ<*1/1!-*^j]uofopqyFupqTv!-udfggFupqt)xpq)ybn!>!udfggFupqt|*^j]fmhoBupqTv!?!udfggFupqt)gj<*mbnspOm!-^j]opjudfsjEupqTw)upe!>!udfggFupqt!ubpmg<*spudfWm)f{jmbnspo!>!mbnspOm!4dfw|*1/1!?!fhobSm)!gj~<*1/2!-*^j]fhobSupqTv!0!*spudfWm)iuhofm))ojn!.!1/2!>!fhobSm|*1/1!?!^j]fhobSupqTv)!gj<1/2!>!fhobSm!ubpmg<^j]opjujtpQupqTw!.!yfusfWw!>!spudfWm!4dfw|*1/1!>>!x/^j]spmpDupqTv)gj|!*,,j!<UPQT`YBN!=!j!<1>j!uoj)spg!1!?!UPQT`YBN!gj$!!gjeof$!~~~<chs/^j]spmpDuojpQv!+!fhobSm!+!*1/1!-**spudfWm)f{jmbnspo.!-O)upe)ybn!>,!chs/eJ|*1/1!?!fhobSm)!gj~<*1/2!-*^j]fhobSuojpQv!0!*spudfWm)iuhofm))ojn!.!1/2!>!fhobSm|*1/1!?!^j]fhobSuojpQv)!gj<1/2!>!fhobSm!ubpmg<^j]opjujtpQuojpQw!.!yfusfWw!>!spudfWm!4dfw|*1/1!>>!x/^j]spmpDuojpQv)gj|!*,,j!<UOJPQ`YBN!=!j!<1>j!uoj)spg!1!?!UOJPQ`YBN!gj$!!gjeof$!~~<chs/^j]spmpDsjEv!+!*1/1!-**^j]opjudfsjEsjEw)f{jmbnspo.!-O)upe)ybn!>,!chs/eJ|*1/1!>>!x/^j]spmpDsjEv)gj|!*,,j!<SJE`YBN!=!j!<1>j!uoj)spg!1!?!SJE`YBN!gj$!~<chs/spmpDuihjmebfIv!+!nsfUusfcnbm!>+!chs/eJ~<*1/2!-fhobSuihjmebfIv0*yfusfWw)iuhofm)ojn!.!1/2!!>+!nsfUusfcnbm|*1/1!?!fhobSuihjmebfIv)gj<*1/1!-6/1!,!6/1!+!*M.!-O)upe)ybn!>!nsfUusfcnbm!ubpmg|*1/1!>>!x/spmpDuihjmebfIv)gj|*uihjMv)gj~!gjeof$!~<spmpDeofmCv!>+!eJ|*eofmCv)gj!ftmf$!~<spmpDeofmCv!>+!eJ|*eofmCv)gj!ftmf~<eofmCidubCw!>+!chs/eJ|*eofmCidubCv)gj!EOFMCIDUBC!gfegj$!~<spmpd!>!eJ|ftmf~<spmpDwv!>!eJ|*fsvuyfUv)gj|!ftmf~<spmpDftsfwfSldjQyjGv!>!eJ|*qjmGftsfwfSva!%%!ldbCtj)gj~<fvsu!>!ldbCtj<O.!>!O|*1/1!=!*O!-F)upe)gj<ftmbg!>!ldbCtj!mppc<F.!>!M!4dfw<*yfusfWw.)f{jmbnspo!>!F!4dfw<*mbnspOw)f{jmbnspo!>!O!4dfw!gjeof$!<ftvggjEv!>!spmpd!ftmf$!~<ftvggjEv!>!spmpd|ftmf~<spmpDidubCw!>!spmpd|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!<spmpd!5dfw|!ftmf~!gjeof$!~~<ftvggjEv!>!eJ|ftmf~<esbdtje|*1/1!>>!x/ftvggjEv)gj|!*!fdobutjEitbEv!?!*!fdobutjEqbHitbEv!-fdobutjEfojMw!)epn!%%!itbEv)!gj!ITBE!gfegj$!!gjeof$!<spmpDftsfwfSldjQyjGv!>!eJ!ftmf$!~<spmpDftsfwfSldjQyjGv!>!eJ|ftmf~<spmpDidubCw!>!eJ|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!|*yjGv)gj<eJ!5dfw|ftmf~!gjeof$!<spmpDftsfwfSldjQyjGv!>!spmpDhbsG`mh!ftmf$!~<spmpDftsfwfSldjQyjGv!>!spmpDhbsG`mh|ftmf~<spmpDidubCw!>!spmpDhbsG`mh|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!|*ldjQv)gj~~~<1/2!>!b/spmpDwv|ftmf~<esbdtje|*5/1!=!b/spmpDwv)gj|ftmf~~<esbdtje|*1/1!>>!b/spmpDwv)gj|*uofsbqtobsUv)gj<*wVw!-sfmqnbTv)E3fsvuyfu!>!spmpDwv|**fmcbudfmfTesbdtjEv!%%!ldjQv)a!%%!fsvuyfUv)gj<spmpDwv!5dfw|!*ejpw)ojbn!ejpw!gjeof$!<fdobutjEfojMw!ubpmg!hojzsbw<fdobutjEqbHitbEv!ubpmg!nspgjov<fdobutjEitbEv!ubpmg!nspgjov<itbEv!mppc!nspgjov!ITBE!gfegj$!!gjeof$!<sbGhpGv!ubpmg!nspgjov<sbfOhpGv!ubpmg!nspgjov<spmpDhpGv!5dfw!nspgjov!HPG!gfegj$!!gjeof$!<^UPQT`YBN]opjudfsjEupqTw!4dfw!hojzsbw<^UPQT`YBN]opjujtpQupqTw!4dfw!hojzsbw<^UPQT`YBN]fhobSupqTv!ubpmg!nspgjov<^UPQT`YBN]fmhoBupqTv!ubpmg!nspgjov<^UPQT`YBN]uofopqyFupqTv!ubpmg!nspgjov<^UPQT`YBN]spmpDupqTv!5dfw!nspgjov!1!?!UPQT`YBN!gj$!!gjeof$!<^UOJPQ`YBN]opjujtpQuojpQw!4dfw!hojzsbw<^UOJPQ`YBN]fhobSuojpQv!ubpmg!nspgjov<^UOJPQ`YBN]spmpDuojpQv!5dfw!nspgjov!1!?!UOJPQ`YBN!gj$!!gjeof$!<^SJE`YBN]opjudfsjEsjEw!4dfw!hojzsbw<^SJE`YBN]spmpDsjEv!5dfw!nspgjov!1!?!SJE`YBN!gj$!!gjeof$!<eofmCidubCw!4dfw!hojzsbw<eofmCidubCv!mppc!nspgjov!EOFMCIDUBC!gfegj$!!gjeof$!<ttfouihjsCidubCw!ubpmg!hojzsbw<ttfouihjsCidubCv!mppc!nspgjov!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!<spmpDidubCw!5dfw!hojzsbw<spmpDidubCv!mppc!nspgjov!SPMPDIDUBC!gfegj$!<spmpDuihjmebfIv!5dfw!nspgjov<fhobSuihjmebfIv!ubpmg!nspgjov<yfusfWw!4dfw!hojzsbw<mbnspOw!4dfw!hojzsbw<ftvggjEv!5dfw!nspgjov<zujdbqPusbQv!ubpmg!nspgjov<ttfouihjsCv!ubpmg!nspgjov<uihjMv!mppc!nspgjov<spmpDeofmCv!5dfw!nspgjov<eofmCv!mppc!nspgjov<sfmqnbTv!E3sfmqnbt!nspgjov<wVw!3dfw!hojzsbw<fsvuyfUv!mppc!nspgjov<spmpDftsfwfSldjQyjGv!5dfw!nspgjov<qjmGftsfwfSv!mppc!nspgjov<ldjQv!mppc!nspgjov<yjGv!mppc!nspgjov<fmcbudfmfTesbdtjEv!mppc!nspgjov<uofsbqtobsUv!mppc!nspgjov!YJGFSQ!gjeof$!!gjeof$!!<ubpmg!qnvjefn!opjtjdfsq!!ftmf$!!<ubpmg!qihji!opjtjdfsq!!IHJI`OPJTJDFSQ`UOFNHBSG`MH!gfegj$!!TF`MH!gfegj$!";
        Zc(r, {
            setBatchInfo: function (g, r) {
                lk[g] = r
            },
            getBatchInfo: function (P) {
                return lk[P]
            }
        }, !0);
        var os = [1, 1, 1],
            nr = [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0],
            Cc = [-.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5],
            Sk = [.5, .5, -.5, .5, .5, .5, .5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5],
            Bq = [.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5],
            kh = [.5, -.5, .5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, .5],
            Eb = [.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5],
            ls = [-.5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5],
            Ub = function (f, x) {
                Nn(f, x), ns(f, x, "_wireframeModelMap", "_wireframeIndexMap"), ns(f, x, "_polylineModelMap", "_polylineIndexMap")
            },
            Nn = function (u, k) {
                if (k) {
                    var L, j, h = k._id,
                        F = u._33O,
                        $ = u._34O,
                        w = $[h];
                    if (w) {
                        j = w.batch, L = F[j];
                        var E = w.begin,
                            r = w.size,
                            T = 3 * E,
                            M = 3 * r,
                            G = 4 * E,
                            o = 4 * r,
                            c = L.vs,
                            i = L.uv,
                            v = L.cs,
                            R = L.bs,
                            C = L.rs,
                            b = L.ds,
                            Q = w.index;
                        if (L.invalidate = !0, delete $[h], b.splice(Q, 1), Qp(b)) delete F[j];
                        else {
                            for (; Q < b.length; Q++) w = $[b[Q]._id], w.index--, w.begin -= r;
                            c.splice(T, M), L.ns.splice(T, M), L.ps.splice(G, o), i && i.splice(2 * E, 2 * r), v && v.splice(G, o), R && R.splice(T, M), C && C.splice(E, r)
                        }
                    }
                } else u._34O = {}, u._33O = {}
            },
            ns = function (g, B, u, M) {
                if (B) {
                    var X, U, I = B._id,
                        F = g[u],
                        W = g[M],
                        q = W[I];
                    if (q) {
                        U = q.batch, X = F[U];
                        var N = q.begin,
                            G = q.size,
                            r = 3 * N,
                            d = 3 * G,
                            Q = 4 * N,
                            b = 4 * G,
                            z = X.ds,
                            R = q.index;
                        if (X.invalidate = !0, delete W[I], z.splice(R, 1), Qp(z)) delete F[U];
                        else {
                            for (; R < z.length; R++) q = W[z[R]._id], q.index--, q.begin -= G;
                            X.vs.splice(r, d), X.cs.splice(Q, b), X.ps.splice(Q, b), X.ls && X.ls.splice(N, G)
                        }
                    }
                } else g[u] = {}, g[M] = {}
            },
            $r = function (S, Y, X, G) {
                if (!G) return V;
                var F = Y[G];
                if (!F) {
                    var C = lk[G] || zn,
                        B = C.image ? [] : V;
                    F = Y[G] = {
                        vs: [],
                        ns: [],
                        uv: B,
                        cs: B ? V : C.color ? V : [],
                        bs: C.blend ? [] : V,
                        ps: [],
                        rs: C.brightness ? [] : V,
                        ds: []
                    }
                }
                return F.invalidate = !0, S[X._id] = {
                    index: F.ds.length,
                    begin: F.vs.length / 3,
                    batch: G
                }, F.ds.push(X), F
            },
            Tr = function (H, t) {
                return t != V && 1 !== t ? [H[0] * t, H[1] * t, H[2] * t, H[3]] : H
            },
            nj = function (E, B, O) {
                var e = E.getBrightness(B),
                    o = si(O.color || "white"),
                    r = o[3] < 1,
                    n = Math.ceil(O.width) || 1,
                    C = (r ? "T" : "O") + n,
                    $ = E._wireframeIndexMap,
                    S = E._wireframeModelMap,
                    Y = S[C];
                Y || (Y = S[C] = {
                    vs: [],
                    cs: [],
                    ps: [],
                    ds: [],
                    T: r,
                    W: n
                }), Y.invalidate = !0;
                var s = Y.vs,
                    V = Y.cs,
                    p = Y.ds,
                    L = $[B._id] = {
                        index: p.length,
                        begin: s.length / 3,
                        batch: C
                    };
                p.push(B), ic(s, Jl(B, O.mat), O.short ? pr : Ck);
                var y = L.size = s.length / 3 - L.begin;
                Bn(V, Tr(o, e), y)
            },
            Vr = function (A, O, d, m, $, e, l, v, T) {
                var g = A.getBrightness(O);
                g == V && (g = 1);
                var i = Tr(si(m), g),
                    x = i[3] < 1;
                e = Math.ceil(e) || 1;
                var u = (x ? "T" : "O") + e;
                if (l) {
                    var Q = l[0],
                        I = (l[1] || Q) + Q;
                    u += "-" + Q + "-" + I, T && (u += "-" + mi(T) + "-" + g, T = Tr(si(T), g))
                }
                var G = A._polylineIndexMap,
                    J = A._polylineModelMap,
                    B = J[u];
                B || (B = J[u] = {
                    vs: [],
                    cs: [],
                    ps: [],
                    ds: [],
                    ls: l ? [] : V,
                    T: x,
                    W: e
                }, l && (B.D = Q, B.G = I, B.A = T)), B.invalidate = !0;
                var E, h = B.vs,
                    r = B.cs,
                    Z = B.ds,
                    c = B.ls,
                    s = G[O._id] = {
                        index: Z.length,
                        begin: h.length / 3,
                        batch: u
                    };
                Z.push(O), Of(h, d);
                var W, Y = s.size = h.length / 3 - s.begin,
                    q = d.length,
                    F = 0,
                    t = [];
                if (l || $)
                    for (E = 0; q > E; E += 6) W = md([d[E], d[E + 1], d[E + 2]], [d[E + 3], d[E + 4], d[E + 5]]), t.push(W), F += W;
                if (F && $) {
                    var U, n = Tr(si($), g),
                        L = [n[0] - i[0], n[1] - i[1], n[2] - i[2], n[3] - i[3]],
                        f = 0;
                    for (E = 0; q > E; E += 6) U = f / F, Bn(r, [i[0] + L[0] * U, i[1] + L[1] * U, i[2] + L[2] * U, i[3] + L[3] * U], 1), f += t[E / 6], U = f / F, Bn(r, [i[0] + L[0] * U, i[1] + L[1] * U, i[2] + L[2] * U, i[3] + L[3] * U], 1)
                } else Bn(r, i, Y);
                if (l)
                    for (f = v || 0, E = 0; q > E; E += 6) c.push(f), f += t[E / 6], c.push(f)
            },
            ms = function (t, K, $) {
                if (K)
                    for (var A = 4 * K.begin, O = $[K.batch].ps, D = 0; D < K.size; D++) O[A++] = t[0], O[A++] = t[1], O[A++] = t[2], O[A++] = t[3]
            },
            sm = function (Y, C) {
                var r = C + ["32"],
                    e = Y[C],
                    U = Y[r];
                e ? U && U.length === e.length ? U.set(e) : Y[r] = new wq(e) : delete Y[r]
            },
            sg = function (j, N, i, Q, l, P, f, O, A) {
                if (Ue(i)) i.forEach(function (F) {
                    sg(j, N, F, Q, l, P, f, O, A)
                });
                else if (Yp(i)) sg(j, N, fe(Q, i), Q, l, P, f, O, A);
                else if (bs(i)) {
                    var Y, e = Pk(i.mat, N, j),
                        m = Pk(i.s3, N, j),
                        F = Pk(i.t3, N, j),
                        t = Pk(i.r3, N, j);
                    if ((m || t || F || e) && (Y = Ep(e, m, t, Pk(i.rotationMode, N, j), F), P.push(Y)), i.shape3d) sg(j, N, i.shape3d, Q, l, P, f, O, i);
                    else {
                        A = A || zn;
                        var T = P[0],
                            o = P.length,
                            d = Q("shape3d.color", i.color, A.color);
                        if (l || (l = Q("shape3d.blend", i.blend, A.blend)), o > 1) {
                            T = oc(T);
                            for (var X = 1; o > X; X++) oe(T, T, P[X])
                        }
                        i.vs && Q(Jb, i.visible, A.visible) && en(T, f, O, i.vs, i.uv, i.is, l, d), i.top_vs && Q($j, i.topVisible, A.topVisible) && en(T, f, O, i.top_vs, i.top_uv, i.top_is, l, Q("shape3d.top.color", i.topColor, A.topColor) || d), i.bottom_vs && Q(pd, i.bottomVisible, A.bottomVisible) && en(T, f, O, i.bottom_vs, i.bottom_uv, i.bottom_is, l, Q("shape3d.bottom.color", i.bottomColor, A.bottomColor) || d), i.from_vs && Q(qr, i.fromVisible, A.fromVisible) && en(T, f, O, i.from_vs, i.from_uv, i.from_is, l, Q("shape3d.from.color", i.fromColor, A.fromColor) || d), i.to_vs && Q(Bc, i.toVisible, A.toVisible) && en(T, f, O, i.to_vs, i.to_uv, i.to_is, l, Q("shape3d.to.color", i.toColor, A.toColor) || d)
                    }
                    Y && P.pop()
                }
            },
            en = function (o, i, p, f, v, y, K, u) {
                var R, r = i.cs,
                    W = i.uv,
                    Z = i.bs;
                if (y) {
                    R = y.length;
                    for (var O = 0; R > O; O++) {
                        var q = y[O];
                        ic(p, o, [f[3 * q], f[3 * q + 1], f[3 * q + 2]]), W && Of(W, [v[2 * q], v[2 * q + 1]])
                    }
                } else R = f.length / 3, ic(p, o, f), W && Of(W, v);
                r && Bn(r, u, R), Z && (K ? rd(Z, K, R) : Of(Z, os, R))
            },
            me = function (H, Z, o, t) {
                var k = [];
                t ? sg(H.gv, H.data, t, H.s, H.getBodyColor(), [Z], o, k) : (Ne(H, Sd, Z, o, k), Ne(H, yn, Z, o, k), Ne(H, F, Z, o, k), Ne(H, Fg, Z, o, k), Ne(H, lp, Z, o, k), Ne(H, ih, Z, o, k), Ne(H, "csg", Z, o, k)), k.length && (Of(o.vs, k), Of(o.ns, th(k)))
            },
            Ne = function (G, d, Y, p, M) {
                var F = G[d];
                if (F) {
                    var x = F.tuv;
                    if (x) {
                        var I, W, y, Z, w = F.uvScale,
                            k = F.uvOffset;
                        if (w)
                            for (I = x.length, W = w[0], y = w[1], Z = 0; I > Z; Z += 2) x[Z] *= W, x[Z + 1] *= y;
                        if (k)
                            for (I = x.length, W = k[0], y = k[1], Z = 0; I > Z; Z += 2) x[Z] += W, x[Z + 1] += y
                    }
                    en(Y, p, M, F.vs, x, V, F.blend, F.color)
                }
            },
            Al = function (N, n, j, e, v, R, X, G) {
                var K, i = j.cs,
                    C = j.uv,
                    I = j.bs;
                if (N.getFaceVisible(n, R)) {
                    var g = N.getFaceMat(n, R);
                    if (g && (v = Jl(n, g)), ic(X, v, G), i && Bn(i, N.getFaceColor(n, R), 6), C) {
                        var y = N.getFaceUv(n, R) || e[R + "Uv"],
                            s = N.getFaceUvScale(n, R) || e[R + "UvScale"],
                            _ = N.getFaceUvOffset(n, R) || e[R + "UvOffset"];
                        y = y ? [y[6], y[7], y[0], y[1], y[2], y[3], y[2], y[3], y[4], y[5], y[6], y[7]] : nr;
                        var r = y[0],
                            A = y[1],
                            D = y[2],
                            $ = y[3],
                            a = y[4],
                            B = y[5],
                            H = y[6],
                            S = y[7],
                            q = y[8],
                            c = y[9],
                            z = y[10],
                            U = y[11];
                        if (s) {
                            var T = s[0],
                                p = s[1];
                            r *= T, A *= p, D *= T, $ *= p, a *= T, B *= p, H *= T, S *= p, q *= T, c *= p, z *= T, U *= p
                        }
                        if (_) {
                            var F = _[0],
                                W = _[1];
                            r += F, A += W, D += F, $ += W, a += F, B += W, H += F, S += W, q += F, c += W, z += F, U += W
                        }
                        C.push(r, A, D, $, a, B, H, S, q, c, z, U)
                    }
                    I && (K = N.getBodyColor(n) || N.getFaceBlend(n, R), K ? rd(I, K, 6) : Of(I, os, 6))
                }
            },
            Sm = function (b, H, l, x) {
                var j = b.getGL(),
                    S = b._prg,
                    I = b._buffer;
                if (!vf(H)) {
                    Si(b), lm(j, S);
                    for (var C in H) {
                        var Z = H[C];
                        if (!(x && !Z.T || !x && Z.T)) {
                            Z.invalidate ? (Z.invalidate = !1, sm(Z, "vs"), sm(Z, "cs"), sm(Z, "ls"), sm(Z, "ps")) : l && sm(Z, "ps");
                            var P = Z.vs32,
                                y = l ? Z.ps32 : Z.cs32;
                            ul(j, S, Z.W, V, I.vs, P);
                            var D = Z.D,
                                g = !b._dashDisabled && D;
                            g && (Vb(j, S.uDash, !0), Vb(j, S.uDashDistance, D), Vb(j, S.uDashGapDistance, Z.G), En(j, S.aLineDistance), te(j, I.lineDistance, Z.ls32, S.aLineDistance, 1), Vb(j, S.uDiffuse, Z.A || Um));
                            var o = !b._batchColorDisabled;
                            o && (Vb(j, S.uBatchColor, !0), En(j, S.aBatchColor), te(j, I.batchColor, y, S.aBatchColor, 4)), Tq(j, 0, P.length / 3, j.LINES), o && (Vb(j, S.uBatchColor, !1), Dn(j, S.aBatchColor)), g && (Vb(j, S.uDash, !1), Dn(j, S.aLineDistance))
                        }
                    }
                    bl(j, S)
                }
            },
            fm = function (n, P, b) {
                var Y, l, x, O, X, p, A, S, L, v, d, $ = n.getGL(),
                    k = n._prg,
                    T = n._buffer,
                    C = n._33O;
                if (!vf(C)) {
                    Si(n);
                    for (Y in C)
                        if (l = lk[Y] || zn, !(b && !l.transparent || !b && l.transparent) && (x = C[Y], P || !l.transparentMask)) {
                            var j = b && l.autoSort !== !1 && (n._33Q || x.invalidate);
                            if (x.invalidate ? (x.invalidate = !1, sm(x, "vs"), sm(x, "ns"), sm(x, "cs"), sm(x, "rs"), sm(x, "ps"), sm(x, "bs"), sm(x, "uv")) : P && sm(x, "ps"), X = x.vs32, p = P ? x.ps32 : x.cs32, L = x.uv32, A = x.bs32, S = x.rs32, d = X.length / 3, j && (x.is = gl(X, n.getEye())), d) {
                                O = l.light, v = n.getTexture(l.image), wd($, k, V, l.light, l.opacity, l.reverseFlip, l.reverseColor, l.reverseCull), p ? n._batchColorDisabled || (Vb($, k.uBatchColor, !0), En($, k.aBatchColor), te($, T.batchColor, p, k.aBatchColor, 4)) : Vb($, k.uDiffuse, l.color);
                                var f = A && !n._batchBlendDisabled;
                                f && (Vb($, k.uBatchBlend, !0), En($, k.aBatchBlend), te($, T.batchBlend, A, k.aBatchBlend));
                                var Q = S && !n._batchBrightnessDisabled;
                                Q && (Vb($, k.uBatchBrightness, !0), En($, k.aBatchBrightness), te($, T.batchBrightness, S, k.aBatchBrightness, 1)), L && pm($, k, v, l.discardSelectable, T.uv, L, l.uvOffset, l.uvScale), te($, T.vs, X, k.aPosition), te($, T.ns, x.ns32, k.aNormal), x.is ? (bk($, T.is, x.is), Eq($, 0, d)) : Tq($, 0, d), L && fo($, k, v), p && !n._batchColorDisabled && (Vb($, k.uBatchColor, !1), Dn($, k.aBatchColor)), f && (Vb($, k.uBatchBlend, !1), Dn($, k.aBatchBlend)), Q && (Vb($, k.uBatchBrightness, !1), Dn($, k.aBatchBrightness)), dj($, k)
                            }
                        }
                }
            },
            gl = function (L, w) {
                for (var H = L.length / 3, F = new Array(H), D = H / 3, E = new Array(D), i = 0; D > i; i++) E[i] = i;
                E.sort(function (l, h) {
                    var $ = 9 * l,
                        V = [(L[$] + L[$ + 3] + 2 * L[$ + 6]) / 4, (L[$ + 1] + L[$ + 4] + 2 * L[$ + 7]) / 4, (L[$ + 2] + L[$ + 5] + 2 * L[$ + 8]) / 4];
                    $ = 9 * h;
                    var Y = [(L[$] + L[$ + 3] + 2 * L[$ + 6]) / 4, (L[$ + 1] + L[$ + 4] + 2 * L[$ + 7]) / 4, (L[$ + 2] + L[$ + 5] + 2 * L[$ + 8]) / 4],
                        O = md(w, V) - md(w, Y);
                    return O > 0 ? -1 : 0 > O ? 1 : 0
                });
                for (var i = 0; D > i; i++) {
                    var W = 3 * i,
                        O = 3 * E[i];
                    F[W] = O, F[W + 1] = O + 1, F[W + 2] = O + 2
                }
                return new ob(F)
            },
            He = new wq([0, 0, 0, 1, 1, 1, 1, 0]),
            Ho = new wq([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
            Km = new ob([0, 1, 2, 2, 3, 0]),
            Yr = new wq([-.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, .5]),
            Bj = new ob([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23]),
            Qd = new wq([0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0]),
            wi = new wq([0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0]),
            Je = th(Yr, Bj),
            Ck = (new wq([-.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, -.5, -.5, .5, .5, -.5, -.5, -.5, -.5, -.5, .5, -.5]), new ob([0, 1, 2, 3, 0, 7, 5, 4, 6, 7, 5, 3, 2, 4, 6, 1]), [-.5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, .5, .5, .5, .5, .5, -.5, .5, -.5, .5, .5, -.5, -.5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5]),
            pr = [-.5, .5, .5, -.4, .5, .5, -.5, .5, .5, -.5, .4, .5, -.5, .5, .5, -.5, .5, .4, .5, .5, .5, .4, .5, .5, .5, .5, .5, .5, .4, .5, .5, .5, .5, .5, .5, .4, -.5, -.5, .5, -.4, -.5, .5, -.5, -.5, .5, -.5, -.4, .5, -.5, -.5, .5, -.5, -.5, .4, .5, -.5, .5, .4, -.5, .5, .5, -.5, .5, .5, -.4, .5, .5, -.5, .5, .5, -.5, .4, -.5, .5, -.5, -.4, .5, -.5, -.5, .5, -.5, -.5, .4, -.5, -.5, .5, -.5, -.5, .5, -.4, .5, .5, -.5, .4, .5, -.5, .5, .5, -.5, .5, .4, -.5, .5, .5, -.5, .5, .5, -.4, -.5, -.5, -.5, -.4, -.5, -.5, -.5, -.5, -.5, -.5, -.4, -.5, -.5, -.5, -.5, -.5, -.5, -.4, .5, -.5, -.5, .4, -.5, -.5, .5, -.5, -.5, .5, -.4, -.5, .5, -.5, -.5, .5, -.5, -.4],
            Do = function (E, n, M, Z, s, r) {
                r = r || 16, E = E || 16, n = n || 0, M = M || E;
                var F, j, w, Q, C, _, d, l, V = .5,
                    H = [],
                    q = [],
                    T = X / E,
                    x = y / r;
                for (F = 0; r > F; F++)
                    for (C = F + 1, Q = F * x, l = C * x, j = n; M > j; j++) _ = j + 1, w = j * T, d = _ * T, H.push(V * N(Q) * A(w), V * A(Q), -V * N(Q) * N(w), V * N(l) * A(d), V * A(l), -V * N(l) * N(d), V * N(Q) * A(d), V * A(Q), -V * N(Q) * N(d), V * N(Q) * A(w), V * A(Q), -V * N(Q) * N(w), V * N(l) * A(w), V * A(l), -V * N(l) * N(w), V * N(l) * A(d), V * A(l), -V * N(l) * N(d)), q.push(j / E, F / r, _ / E, C / r, _ / E, F / r, j / E, F / r, j / E, C / r, _ / E, C / r);
                if (Z)
                    for (w = n * T, F = 0; r > F; F++) C = F + 1, Q = F * x, l = C * x, H.push(0, 0, 0, V * N(l) * A(w), V * A(l), -V * N(l) * N(w), V * N(Q) * A(w), V * A(Q), -V * N(Q) * N(w)), q.push(0, .5, n / E, C / r, n / E, F / r);
                if (s)
                    for (w = M * T, F = 0; r > F; F++) C = F + 1, Q = F * x, l = C * x, H.push(0, 0, 0, V * N(Q) * A(w), V * A(Q), -V * N(Q) * N(w), V * N(l) * A(w), V * A(l), -V * N(l) * N(w)), q.push(1, .5, M / E, F / r, M / E, C / r);
                return {
                    vs: H,
                    uv: q
                }
            },
            Kh = function (W, t, n) {
                W = W || .17, t = t || 12, n = n || 18, 0 > W ? W = 0 : W > .25 && (W = .25);
                var U, Z, $, H, o, m, h, C = .5,
                    k = [],
                    _ = [],
                    u = [],
                    R = X / n,
                    v = X / t,
                    f = C - W;
                for (Z = 0; t >= Z; Z++)
                    for (H = -y + Z * v, m = A(H), o = N(H), U = 0; n >= U; U++) $ = U * R, h = f + W * m, k.push(A($) * h, o * W, -N($) * h), _.push(U / n, 1 - Z / t);
                for (Z = 0; t > Z; Z++) {
                    var e = Z * (n + 1),
                        r = (Z + 1) * (n + 1);
                    for (U = 0; n > U; U++) u.push(e + U, r + U + 1, r + U, e + U, e + U + 1, r + U + 1)
                }
                return {
                    vs: k,
                    uv: _,
                    is: u
                }
            },
            Lh = function (J, C, z, w, Y, h, G) {
                G = G || 12, J = J || 18, C = C || 0, z = z || J, h = h || .17, 0 > h ? h = 0 : h > .25 && (h = .25);
                var M, _, K, a, F, T, D, c, H, Z, U = .5,
                    S = [],
                    t = [],
                    o = X / J,
                    L = X / G,
                    v = U - h;
                for (K = 0; G > K; K++)
                    for (a = K + 1, D = -y + K * L, c = -y + a * L, M = C; z > M; M++) _ = M + 1, F = M * o, T = _ * o, H = v + h * A(D), Z = v + h * A(c), S.push(A(F) * H, N(D) * h, -N(F) * H, A(T) * H, N(D) * h, -N(T) * H, A(T) * Z, N(c) * h, -N(T) * Z, A(F) * H, N(D) * h, -N(F) * H, A(T) * Z, N(c) * h, -N(T) * Z, A(F) * Z, N(c) * h, -N(F) * Z), t.push(M / J, 1 - K / G, _ / J, 1 - K / G, _ / J, 1 - a / G, M / J, 1 - K / G, _ / J, 1 - a / G, M / J, 1 - a / G);
                if (w) {
                    var j = [],
                        R = [];
                    for (K = 0; G > K; K++) a = K + 1, D = -y + K * L, c = -y + a * L, F = C * o, H = v + h * A(D), Z = v + h * A(c), j.push(A(F) * H, N(D) * h, -N(F) * H, A(F) * Z, N(c) * h, -N(F) * Z, A(F) * v, 0, -N(F) * v), R.push(.5 + .5 * A(D), .5 - .5 * N(D), .5 + .5 * A(c), .5 - .5 * N(c), .5, .5)
                }
                if (Y) {
                    var E = [],
                        O = [];
                    for (K = 0; G > K; K++) a = K + 1, D = -y + K * L, c = -y + a * L, F = z * o, H = v + h * A(D), Z = v + h * A(c), E.push(A(F) * H, N(D) * h, -N(F) * H, A(F) * v, 0, -N(F) * v, A(F) * Z, N(c) * h, -N(F) * Z), O.push(.5 - .5 * A(D), .5 - .5 * N(D), .5, .5, .5 - .5 * A(c), .5 - .5 * N(c))
                }
                return {
                    vs: S,
                    uv: t,
                    from_vs: j,
                    from_uv: R,
                    to_vs: E,
                    to_uv: O
                }
            },
            pq = function (l, x) {
                for (var H, P, n, E = .5, V = 16, u = [], T = [], B = [], C = X / V, s = 0; V >= s; s++) H = s * C, P = A(H) * E, n = N(H) * E, u.push(P, -E, n, P, E, n), T.push(1 - s / V, 1, 1 - s / V, 0);
                for (s = 0; V > s; s++) B.push(2 * s, 2 * s + 1, 2 * s + 3, 2 * s, 2 * s + 3, 2 * s + 2);
                if (x) {
                    var h = [],
                        e = [],
                        r = [];
                    for (h.push(0, -E, 0), e.push(.5, .5), s = 0; V >= s; s++) H = s * C, P = A(H), n = N(H), h.push(P * E, -E, -n * E), e.push(.5 + .5 * P, .5 + .5 * n);
                    for (s = 0; V > s; s++) r.push(0, s + 2, s + 1)
                }
                if (l) {
                    var v = [],
                        y = [],
                        c = [];
                    for (v.push(0, E, 0), y.push(.5, .5), s = 0; V >= s; s++) H = s * C, P = A(H), n = N(H), v.push(P * E, E, -n * E), y.push(.5 + .5 * P, .5 - .5 * n);
                    for (s = 0; V > s; s++) c.push(0, s + 1, s + 2)
                }
                return {
                    vs: u,
                    uv: T,
                    is: B,
                    bottom_vs: h,
                    bottom_uv: e,
                    bottom_is: r,
                    top_vs: v,
                    top_uv: y,
                    top_is: c
                }
            },
            up = function (t, U, B, I, V, Z, T) {
                t = t || 12, U = U || 0, B = B || t;
                for (var o, O, C, h, n, S, i, f, E = .5, y = [], G = [], j = X / t, k = U; B > k; k++) o = k + 1, O = k * j, C = o * j, h = A(O) * E, n = N(O) * E, S = A(C) * E, i = N(C) * E, y.push(h, -E, -n, S, -E, -i, h, E, -n, S, -E, -i, S, E, -i, h, E, -n), G.push(k / t, 1, o / t, 1, k / t, 0, o / t, 1, o / t, 0, k / t, 0);
                if (T) {
                    var u = [],
                        q = [];
                    for (k = U; B > k; k++) O = j * k, C = j * (k + 1), h = A(O), n = N(O), S = A(C), i = N(C), u.push(h * E, -E, -n * E, 0, -E, 0, S * E, -E, -i * E), q.push(.5 + .5 * h, .5 + .5 * n, .5, .5, .5 + .5 * S, .5 + .5 * i)
                }
                if (Z) {
                    var z = [],
                        w = [];
                    for (k = U; B > k; k++) O = j * k, C = j * (k + 1), h = A(O), n = N(O), S = A(C), i = N(C), z.push(h * E, E, -n * E, S * E, E, -i * E, 0, E, 0), w.push(.5 + .5 * h, .5 - .5 * n, .5 + .5 * S, .5 - .5 * i, .5, .5)
                }
                return I && (O = j * U, h = A(O) * E, n = N(O) * E, f = U / t, y.push(0, E, 0, 0, -E, 0, h, -E, -n, h, -E, -n, h, E, -n, 0, E, 0), G.push(0, 0, 0, 1, f, 1, f, 1, f, 0, 0, 0)), V && (O = j * B, h = A(O) * E, n = N(O) * E, f = B / t, y.push(0, -E, 0, 0, E, 0, h, E, -n, h, E, -n, h, -E, -n, 0, -E, 0), G.push(1, 1, 1, 0, f, 0, f, 0, f, 1, 1, 1)), {
                    vs: y,
                    uv: G,
                    bottom_vs: u,
                    bottom_uv: q,
                    top_vs: z,
                    top_uv: w
                }
            },
            jc = function (U, Z, H, T, m) {
                Z = Z || 18, H = H || 0, T = T == V ? X : T, m = m == V ? .5 : m;
                for (var h, O, t, s, w, B, x = [0, .5, .75, .875, .9375], l = [], P = [], g = [], L = T / Z, D = 0; D < x.length; D++) {
                    var z = 0 === D % 2 ? 0 : .5;
                    for (h = 0; Z >= h; h++) O = (h + z) * L + H, t = 1 - x[D], l.push(A(O) * m * t, -m + 2 * x[D] * m, -N(O) * m * t), P.push((h + z) / Z, t)
                }
                for (D = 0; D < x.length - 1; D++) {
                    var C = D * (Z + 1),
                        J = (D + 1) * (Z + 1);
                    for (h = 0; Z > h; h++) g.push(C + h, J + h + 1, J + h, C + h, C + h + 1, J + h + 1)
                }
                for (B = l.length / 3 - (Z + 1), h = 0; Z > h; h++) l.push(0, m, 0), P.push((h + .5) / Z, 0);
                for (h = 0; Z > h; h++) g.push(B + h, B + h + 1, B + (Z + 1) + h);
                if (U) {
                    var E = [],
                        c = [],
                        k = [];
                    for (E.push(0, -m, 0), c.push(.5, .5), h = 0; Z >= h; h++) O = h * L + H, s = A(O), w = N(O), E.push(s * m, -m, -w * m), c.push(.5 + .5 * s, .5 + .5 * w);
                    for (h = 0; Z > h; h++) k.push(0, h + 2, h + 1)
                }
                return {
                    vs: l,
                    uv: P,
                    is: g,
                    bottom_vs: E,
                    bottom_uv: c,
                    bottom_is: k
                }
            },
            uf = function (v, J, R, u, I, U) {
                v = v || 16, J = J || 0, R = R || v;
                for (var x = .5, q = [], K = [], o = X / v, b = J; R > b; b++) {
                    var D = b + 1,
                        T = o * b,
                        k = o * D;
                    q.push(A(T) * x, -x, -N(T) * x, A(k) * x, -x, -N(k) * x, 0, x, 0), K.push(b / v, 1, D / v, 1, (b + D) / 2 / v, 0)
                }
                if (U) {
                    var s = [],
                        g = [];
                    for (b = J; R > b; b++) {
                        T = o * b, k = o * (b + 1);
                        var y = A(T),
                            G = N(T),
                            f = A(k),
                            t = N(k);
                        s.push(y * x, -x, -G * x, 0, -x, 0, f * x, -x, -t * x), g.push(.5 + .5 * y, .5 + .5 * G, .5, .5, .5 + .5 * f, .5 + .5 * t)
                    }
                }
                return u && (T = o * J, q.push(0, x, 0, 0, -x, 0, A(T) * x, -x, -N(T) * x), K.push(0, 0, 0, 1, J / v, 1)), I && (T = o * R, q.push(0, -x, 0, 0, x, 0, A(T) * x, -x, -N(T) * x), K.push(1, 1, 1, 0, R / v, 1)), {
                    vs: q,
                    uv: K,
                    bottom_vs: s,
                    bottom_uv: g
                }
            },
            kn = function (J, V, A, q, h, D, i, t) {
                for (var j = [], H = 0; H < J.length - 1; H += 2) j.push({
                    x: J[H],
                    y: J[H + 1]
                });
                return ol(j, V, A, q, h, D, i, t, !1)
            },
            qe = {
                roundRect: function (f, J) {
                    return kn([.5, .4, .5, .442, .471, .471, .442, .5, .4, .5, -.4, .5, -.442, .5, -.471, .471, -.5, .442, -.5, .4, -.5, -.4, -.5, -.442, -.471, -.471, -.442, -.5, -.4, -.5, .4, -.5, .442, -.5, .471, -.471, .5, -.442, .5, -.4, .5, .4], [1, 3, 3, 2, 3, 3, 2, 3, 3, 2, 3, 3, 2], f, J, 3)
                },
                star: function (v, x) {
                    return kn([.193, .079, .333, .5, 0, .233, -.333, .5, -.194, .079, -.5, -.167, -.112, -.167, 0, -.5, .111, -.167, .5, -.167], [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5], v, x)
                },
                rect: function (s, J) {
                    return kn([.5, -.5, .5, .5, -.5, .5, -.5, -.5], [1, 2, 2, 2, 5], s, J)
                },
                triangle: function (o, C) {
                    return kn([0, -.5, .5, .5, -.5, .5], [1, 2, 2, 5], o, C)
                },
                rightTriangle: function (e, O) {
                    return kn([.5, .5, -.5, .5, -.5, -.5], [1, 2, 2, 5], e, O)
                },
                parallelogram: function (N, z) {
                    return kn([.5, -.5, .25, .5, -.5, .5, -.25, -.5], [1, 2, 2, 2, 5], N, z)
                },
                trapezoid: function (Q, $) {
                    return kn([.25, -.5, .5, .5, -.5, .5, -.25, -.5], [1, 2, 2, 2, 5], Q, $)
                }
            },
            $n = {
                sphere: 1,
                cylinder: 1,
                cone: 1,
                torus: 1
            },
            Pn = {
                torus: 1,
                sphere: 1
            },
            Ql = Zc(Zj(qe), {
                cylinder: 1
            }),
            hg = Zc(Zj(qe), {
                cylinder: 1,
                cone: 1
            }),
            ib = function (q, b, C) {
                var s, n = Pk(q.mat, C, b),
                    v = Pk(q.s3, C, b),
                    h = Pk(q.t3, C, b),
                    I = Pk(q.r3, C, b);
                return (v || I || h || n) && (s = oc(b._6O), Si(b, Ep(n, v, I, Pk(q.rotationMode, C, b), h))), s
            },
            _j = function (t, B, v, e, L, k, d) {
                if (Ue(v)) v.forEach(function (X) {
                    _j(t, B, X, e, L, k, d)
                });
                else if (Yp(v)) _j(t, B, fe(e, v), e, L, k, d);
                else if (bs(v))
                    if (v.shape3d) {
                        var h = ib(v, t, B);
                        _j(t, B, v.shape3d, e, L, k, v), h && Fl(t, h)
                    } else cm(t, B, v, e, L, k, d)
            },
            cm = function (a, R, f, g, s, p, Q) {
                if (Q = Q || zn, !p || p(g("shape3d.transparent", f.transparent, Q.transparent))) {
                    var N = ib(f, a, R);
                    zm(f);
                    var A = a._26I,
                        P = a._prg,
                        W = a._buffer,
                        u = g("shape3d.color", f.color, Q.color);
                    s || (s = g("shape3d.blend", f.blend, Q.blend)), wd(A, P, s, g("shape3d.light", f.light, Q.light), g("shape3d.opacity", f.opacity, Q.opacity), g("shape3d.reverse.flip", f.reverseFlip, Q.reverseFlip), g("shape3d.reverse.color", f.reverseColor, Q.reverseColor), g("shape3d.reverse.cull", f.reverseCull, Q.reverseCull)), f.vs && g(Jb, f.visible, Q.visible) && Hc(A, P, W, u, a.getTexture(g("shape3d.image", f.image, Q.image), R), g("shape3d.discard.selectable", f.discardSelectable, Q.discardSelectable), f.vs, f.uv, f.ns, f.is, g("shape3d.uv.offset", f.uvOffset, Q.uvOffset), g("shape3d.uv.scale", f.uvScale, Q.uvScale)), f.top_vs && g($j, f.topVisible, Q.topVisible) && Hc(A, P, W, g("shape3d.top.color", f.topColor, Q.topColor) || u, a.getTexture(g("shape3d.top.image", f.topImage, Q.topImage), R), g("shape3d.top.discard.selectable", f.topDiscardSelectable, Q.topDiscardSelectable), f.top_vs, f.top_uv, f.top_ns, f.top_is, g("shape3d.top.uv.offset", f.topUvOffset, Q.topUvOffset), g("shape3d.top.uv.scale", f.topUvScale, Q.topUvScale)), f.bottom_vs && g(pd, f.bottomVisible, Q.bottomVisible) && Hc(A, P, W, g("shape3d.bottom.color", f.bottomColor, Q.bottomColor) || u, a.getTexture(g("shape3d.bottom.image", f.bottomImage, Q.bottomImage), R), g("shape3d.bottom.discard.selectable", f.bottomDiscardSelectable, Q.bottomDiscardSelectable), f.bottom_vs, f.bottom_uv, f.bottom_ns, f.bottom_is, g("shape3d.bottom.uv.offset", f.bottomUvOffset, Q.bottomUvOffset), g("shape3d.bottom.uv.scale", f.bottomUvScale, Q.bottomUvScale)), f.from_vs && g(qr, f.fromVisible, Q.fromVisible) && Hc(A, P, W, g("shape3d.from.color", f.fromColor, Q.fromColor) || u, a.getTexture(g("shape3d.from.image", f.fromImage, Q.fromImage), R), g("shape3d.from.discard.selectable", f.fromDiscardSelectable, Q.fromDiscardSelectable), f.from_vs, f.from_uv, f.from_ns, f.from_is, g("shape3d.from.uv.offset", f.fromUvOffset, Q.fromUvOffset), g("shape3d.from.uv.scale", f.fromUvScale, Q.fromUvScale)), f.to_vs && g(Bc, f.toVisible, Q.toVisible) && Hc(A, P, W, g("shape3d.to.color", f.toColor, Q.toColor) || u, a.getTexture(g("shape3d.to.image", f.toImage, Q.toImage), R), g("shape3d.to.discard.selectable", f.toDiscardSelectable, Q.toDiscardSelectable), f.to_vs, f.to_uv, f.to_ns, f.to_is, g("shape3d.to.uv.offset", f.toUvOffset, Q.toUvOffset), g("shape3d.to.uv.scale", f.toUvScale, Q.toUvScale)), dj(A, P), N && Fl(a, N)
                }
            },
            Hc = function (a, R, s, I, H, X, g, l, K, A, f, d) {
                g && (Vb(a, R.uDiffuse, I), l && pm(a, R, H, X, s.uv, l, f, d), te(a, s.vs, g, R.aPosition), te(a, s.ns, K, R.aNormal), A ? (bk(a, s.is, A), Eq(a, 0, A.length)) : Tq(a, 0, g.length / 3), l && fo(a, R, H))
            },
            fe = function (w, i) {
                if (i || (i = w(yj)), !i) return V;
                if (bs(i)) return i;
                var n = Ki[i];
                if (n) return n;
                var N = i;
                if ($n[i]) {
                    var a = w("shape3d.side"),
                        y = w("shape3d.side.from"),
                        O = w("shape3d.side.to"),
                        H = w(qr),
                        c = w(Bc);
                    3 > a ? (a = 0, y = 0, O = 0, H = !1, c = !1) : ((y == V || 0 > y) && (y = 0), (O == V || O > a) && (O = a), 0 === y && O === a && (H = !1, c = !1)), N += "-" + a + "-" + y + "-" + O + "-" + H + "-" + c
                }
                if (Ql[i]) {
                    var G = w($j);
                    N += "-" + G
                }
                if (hg[i]) {
                    var U = w(pd);
                    N += "-" + U
                }
                if ("torus" === i) {
                    var b = w("shape3d.torus.radius");
                    0 > b ? b = 0 : b > .25 && (b = .25), N += "-" + b
                }
                if (Pn[i]) {
                    var f = w(Uq);
                    N += "-" + f
                }
                return n = pb[N], n || ("box" === i ? n = r.createBoxModel() : qe[i] ? n = qe[i](G, U) : "sphere" === i ? n = r.createSphereModel(a, y, O, H, c, f) : i === Pj ? n = r.createCylinderModel(a, y, O, H, c, G, U) : "cone" === i ? n = r.createConeModel(a, y, O, H, c, U) : "torus" === i && (n = r.createTorusModel(a, y, O, H, c, b, f)), pb[N] = n), n
            },
            zm = function () {
                var p = ["vs", "ns", "uv", "top_vs", "top_ns", "top_uv", "bottom_vs", "bottom_ns", "bottom_uv", "from_vs", "from_ns", "from_uv", "to_vs", "to_ns", "to_uv", "er", "al"],
                    o = ["is", "top_is", "bottom_is", "from_is", "to_is"];
                return Q = kg(Vh.substr(Vh.indexOf("^#") + 2)), _d(r[Xl($q + p[15] + "n" + p[16])]()) && Pl() ? function (s) {
                    s && !s._complete_ && (s._complete_ = !0, s.vs && Qp(s.ns) && (s.ns = th(s.vs, s.is)), s.top_vs && Qp(s.top_ns) && (s.top_ns = th(s.top_vs, s.top_is)), s.bottom_vs && Qp(s.bottom_ns) && (s.bottom_ns = th(s.bottom_vs, s.bottom_is)), s.from_vs && Qp(s.from_ns) && (s.from_ns = th(s.from_vs, s.from_is)), s.to_vs && Qp(s.to_ns) && (s.to_ns = th(s.to_vs, s.to_is)), p.forEach(function (q) {
                        var _ = s[q];
                        Ue(_) && (s[q] = new wq(_))
                    }), o.forEach(function (o) {
                        var G = s[o];
                        Ue(G) && (s[o] = new ob(G))
                    }))
                } : void 0
            }(),
            tj = function (Q, t) {
                var K = Q[t];
                Ue(K) && (Q[t] = new wq(K))
            };
        Zc(hp, {
            _25Q: function (Q) {
                Q._16O = function (j, Y, R, m, q, J, y, T, F) {
                    var b = this.info;
                    if (b) {
                        var A, p, z, l, k, B, t = vj();
                        if (ce[Y] ? (A = b.p3, p = b.c1, z = b.c2) : Ge[Y] ? (p = b.s1 || b.c1, z = b.s2 || b.c2) : (p = b.t1 || b.c1, z = b.t2 || b.c2), A) B = Lp(Y, yb, R, m, T, F);
                        else {
                            var c = Zn(z, p),
                                u = md(p, z);
                            l = [0, -x(c[2], c[0]), M(c[1] / u)], k = "zyx", A = [(p[0] + z[0]) / 2, (p[1] + z[1]) / 2, (p[2] + z[2]) / 2], B = Lp(Y, [u, 0, 0], R, m, T, F)
                        }
                        return Dj(t, B, A, m, q, J, y, j, l, k)
                    }
                    return mb
                }, Q._80o = function (K, L, A) {
                    var s = this,
                        P = s.shapeModel;
                    if (P) {
                        var i = s.gv;
                        Si(i), _j(i, s.data, P, s.s, s.getBodyColor(), A)
                    }
                }, Q.createLineModel = function (j, a, c, I, A) {
                    for (var X = this, _ = X.s, s = Ch(j, a, _(Uq)), T = [], D = 0; D < s.length; D++) {
                        var q = s[D],
                            k = q.length;
                        if (k > 1) {
                            var W = q[0];
                            T.push(W.x, W.y, W.z);
                            for (var t = 1; k - 1 > t; t++) W = q[t], T.push(W.x, W.y, W.z), T.push(W.x, W.y, W.z);
                            W = q[k - 1], T.push(W.x, W.y, W.z)
                        }
                    }
                    var P, z, b, C = _(I + ".color"),
                        Y = _(A),
                        N = 0;
                    return Y && (z = _(A + ".color"), P = _(A + ".pattern"), N = _(A + ".offset"), b = C), Vr(X.gv, X.data, T, z || C, b ? V : _(I + ".gradient.color"), c, P || _(I + ".pattern"), N, b), s
                }, Q.createTubeModel = function (X, J, T, Q) {
                    for (var F = this, k = F.s, o = k("shape3d.side") || Ur, w = k("shape3d.start.angle"), _ = k($j) ? k("shape3d.top.cap") : V, E = k(pd) ? k("shape3d.bottom.cap") : V, W = "flat" === _, r = "flat" === E, q = W && (Q ? Q.uv : k("shape3d.top.image")), $ = r && (Q ? Q.uv : k("shape3d.bottom.image")), U = Q ? Q.uv : k("shape3d.image"), h = {
                        vs: [],
                        uv: U ? [] : V,
                        top_vs: W ? [] : V,
                        top_uv: q ? [] : V,
                        bottom_vs: r ? [] : V,
                        bottom_uv: $ ? [] : V
                    }, b = Ch(X, J, k(Uq), T), G = 0, j = b.length; j > G; G++) iq(h, b[G], k(Rr), T, o, w, _, E);
                    if (Q) {
                        var u = [];
                        sg(F.gv, F.data, h, k, F.getBodyColor(), [], Q, u), u.length && (Of(Q.vs, u), Of(Q.ns, th(u)))
                    } else F.shapeModel = h;
                    return b
                }, Q.getCache = function () {
                    var u = this.info;
                    if (u) {
                        var M = u.list;
                        if (M) {
                            var q = u.cache;
                            return q || (q = u.cache = xf(M)), q
                        }
                    }
                    return V
                }
            }
        });
        var In = function (u, X) {
            for (var j, T = 0, i = u.length, o = 0, d = i - 1; d >= o;)
                if (T = S(o + (d - o) / 2), j = u[T].length - X, 0 > j) o = T + 1;
                else {
                    if (!(j > 0)) {
                        d = T;
                        break
                    }
                    d = T - 1
                }
            T = d;
            var a = u[T],
                M = a.point;
            return T === i - 1 || a.length === X || (M = (new wg).subVectors(u[T + 1].point, M).normalize().multiplyScalar(X - a.length).add(M)), {
                point: M,
                tangent: a.tangent
            }
        },
            xf = function (v) {
                for (var y, n, m = [], X = 0, q = 0; q < v.length; q++) {
                    for (var i = v[q], e = 0; e < i.length; e++) {
                        y = i[e], n && (X += n.distanceTo(y));
                        var l = new wg,
                            $ = i[e + 1];
                        $ ? l.subVectors($, y) : n ? l.subVectors(y, n) : l.x = 1, l.normalize(), m.push({
                            point: y,
                            length: X,
                            tangent: l
                        }), n = y
                    }
                    n = null
                }
                return m
            },
            Ch = function (e, K, z, o) {
                z = z || cf;
                for (var s = [], O = 0, _ = e.size() ; _ > O; O++) {
                    var n = e.get(O);
                    s.push(new wg(n.x, n.e || 0, n.y))
                }
                Vm(K) && (K = K._as);
                for (var G, l, w, b, Z, r = [], R = 0, S = 0, U = K ? K.length : _; U > S; S++)
                    if (Z = K ? K[S] : 0 === S ? 1 : 2, 1 === Z) r.push(w = []), w.push(s[R++]);
                    else if (2 === Z || 5 === Z)
                        if (b = 2 === Z ? s[R++] : w[0], o) {
                            var q = K ? K[S + 1] : U > S + 1 ? 2 : V;
                            if (2 === q || 5 === q) {
                                var f = w[w.length - 1],
                                    j = 2 === q ? s[R] : w[0],
                                    A = (new wg).subVectors(f, b),
                                    W = (new wg).subVectors(j, b),
                                    N = A.length(),
                                    E = W.length();
                                if (o > N / 2 && o > E / 2) w.push(b);
                                else
                                    for (A.multiplyScalar(J(o, N / 2) / N).add(b), W.multiplyScalar(J(o, E / 2) / E).add(b), G = new ac(A, b, W).getPoints(z), l = 0; z >= l; l++) w.push(G[l])
                            } else w.push(b)
                        } else w.push(b);
                    else if (3 === Z)
                        for (G = new ac(w[w.length - 1], s[R++], s[R++]).getPoints(z), l = 1; z >= l; l++) w.push(G[l]);
                    else if (4 === Z)
                        for (G = new gi(w[w.length - 1], s[R++], s[R++], s[R++]).getPoints(z), l = 1; z >= l; l++) w.push(G[l]);
                return r
            },
            _e = function (S) {
                for (var c, J, N = new wg, T = [], _ = [], y = [], p = 0, M = S.length; M > p; p++) c = S[p], J = S[p + 1], J ? N.subVectors(J, c) : N.subVectors(c, S[p - 1]), T.push(N.normalize().clone());
                var l, Q, s, H, e = new wg,
                    h = new wg,
                    q = new Eo,
                    I = 1e-4,
                    a = Number.MAX_VALUE,
                    D = T[0],
                    g = _[0] = new wg,
                    Z = y[0] = new wg;
                for (Q = O(D.x), s = O(D.y), H = O(D.z), a >= Q && (a = Q, e.set(1, 0, 0)), a >= s && (a = s, e.set(0, 1, 0)), a >= H && e.set(0, 0, 1), h.crossVectors(D, e).normalize(), g.crossVectors(D, h), Z.crossVectors(D, g), p = 1; M > p; p++) _[p] = _[p - 1].clone(), y[p] = y[p - 1].clone(), h.crossVectors(T[p - 1], T[p]), h.length() > I && (h.normalize(), l = R(Oi(T[p - 1].dot(T[p]), -1, 1)), _[p].applyMatrix4(q.makeRotationAxis(h, l))), y[p].crossVectors(T[p], _[p]);
                return {
                    B: y,
                    T: T,
                    N: _
                }
            },
            iq = function () {
                var k = function (N) {
                    for (var O = 1; O < arguments.length; O++) {
                        var D = arguments[O];
                        N.push(D.x, D.y, D.z)
                    }
                },
                    t = function (m) {
                        for (var L = 1; L < arguments.length; L++) {
                            var b = arguments[L].uv;
                            m.push(b[0], b[1])
                        }
                    },
                    x = function (G, O, o, C, Z) {
                        var U = -C * A(Z),
                            D = C * N(Z);
                        return new wg(G.x + U * o.x + D * O.x, G.y + U * o.y + D * O.y, G.z + U * o.z + D * O.z)
                    },
                    r = function (q, t, T, i, j, $, M) {
                        for (var R = [], W = X / j, l = 0; j >= l; l++) {
                            var s = x(q, t, T, i, l * W + $);
                            R.push(s), M != V && (s.uv = [M, l / j])
                        }
                        return R
                    },
                    Y = function (r, v, O, n, f, m, d, C) {
                        var I = v ? r.top_vs : r.bottom_vs;
                        if (I)
                            for (var R = v ? r.top_uv : r.bottom_uv, s = X / d, p = 0; d > p; p++) {
                                var G, D;
                                v ? (G = p * s + C, D = (p + 1) * s + C) : (D = p * s + C, G = (p + 1) * s + C), k(I, x(O, n, f, m, G), x(O, n, f, m, D), O), R && R.push(.5 - .5 * A(G), .5 - .5 * N(G), .5 - .5 * A(D), .5 - .5 * N(D), .5, .5)
                            }
                    };
                return function (s, Q, K, T, P, m, x, I) {
                    var u = Q.length;
                    if (u > 1) {
                        var F, U, _, S, M, A, H, L = _e(Q),
                            $ = L.T,
                            b = L.N,
                            z = L.B;
                        "flat" === x && Y(s, !0, Q[0], z[0], b[0], T, P, m), "flat" === I && Y(s, !1, Q[u - 1], z[u - 1], b[u - 1], T, P, m);
                        var G, a, N = [],
                            X = n(P / 2),
                            O = "round" === x,
                            i = "round" === I,
                            y = Q[0],
                            W = $[0],
                            h = z[0],
                            o = b[0],
                            R = Q[u - 1],
                            g = $[u - 1],
                            w = z[u - 1],
                            v = b[u - 1];
                        if (O) {
                            for (_ = 1; X >= _; _++) b.splice(0, 0, o), z.splice(0, 0, h), $.splice(0, 0, W), a = -_ / X * T, Q.splice(0, 0, W.clone().multiplyScalar(a).add(y)), N[X - _] = B(T * T - a * a);
                            u += X
                        }
                        if (i) {
                            for (_ = 1; X >= _; _++) b.push(v), z.push(w), $.push(g), a = _ / X * T, Q.push(g.clone().multiplyScalar(a).add(R)), N[Q.length - 1] = B(T * T - a * a);
                            u += X
                        }
                        if (s.uv) {
                            var f = 0,
                                J = 0,
                                C = [];
                            for (K && (f = K), M = Q[0], C[0] = 0, _ = 1; u > _; _++) S = Q[_], C[_] = M.distanceTo(S), M = S, K || (f += C[_]);
                            for (G = [], _ = 0; u > _; _++) J += C[_], G[_] = f ? J / f : 0
                        }
                        for (_ = 0; u > _; _++) {
                            if (S = Q[_], A = z[_], H = b[_], F = r(S, A, H, N[_] === l ? T : N[_], P, m, G ? G[_] : V), U)
                                for (var p = 0; P > p; p++) {
                                    var D = U[p],
                                        e = U[p + 1] || U[0],
                                        q = F[p],
                                        d = F[p + 1] || F[0];
                                    k(s.vs, e, D, q, q, d, e), s.uv && t(s.uv, e, D, q, q, d, e)
                                }
                            U = F
                        }
                    }
                }
            }();
        Zc(r, {
            getLineLength: function (N) {
                return N[N.length - 1].length
            },
            getLineOffset: function (m, v) {
                return In(m, v)
            },
            getLineCacheInfo: function (u, l, G, E) {
                return xf(Ch(u, l, G, E))
            }
        });
        var Hd = o.Light = function () {
            fi(Hd, this), this.s(Yk, U[Yk]), this.s(yj, "sphere"), this.s3(20, 20, 20)
        };
        am("Light", Lg, {
            _image: "light_icon",
            _icon: "light_icon",
            onStyleChanged: function (n, o, P) {
                Hd.superClass.onStyleChanged.apply(this, arguments), n === Yk && this.s("shape3d.color", P)
            }
        });
        var Lr = Xc.Graph3dView = function (Q, u) {
            var j = this;
            j._attributes = u || r.graph3dViewAttributes, j._25I = {}, j._view = Xh(1);
            var k = j._canvas = Qk(j._view);
            k.addEventListener("webglcontextlost", function (y) {
                y.preventDefault(), Ab(j), j._26I = V, j._1o.texture = V, j._35O = !0
            }, !1), k.addEventListener("webglcontextrestored", function () {
                j._35O = !1, j.iv()
            }, !1), j._34O = {}, j._33O = {}, j._wireframeIndexMap = {}, j._wireframeModelMap = {}, j._polylineIndexMap = {}, j._polylineIndexMap = {}, j._8O = [], j._7O = vj(), j._6O = vj(), j._1o = new rk(j), j._30O = new Ng(j), j._31O = new Oc(j), j._32O = new Wc(j), j._33Q = !0, j._eye = Zj(r.graph3dViewEye), j._center = Zj(r.graph3dViewCenter), j._up = Zj(r.graph3dViewUp), j._lightChanged = !1, j._59O = [], j._spots = [], j._dirs = [], j.dm(Q ? Q : new Kj), j.setInteractors([new Nj(j)])
        },
            xr = {
                fogDisabled: 1,
                dashDisabled: 1,
                batchColorDisabled: 1,
                batchBlendDisabled: 1,
                batchBrightnessDisabled: 1
            };
        ne("Graph3dView", w, {
            ms_v: 1,
            ms_tip: 1,
            ms_gv: 1,
            ms_dm: 1,
            ms_lp: 1,
            ms_fire: 1,
            ms_sm: 1,
            _51o: 1,
            ms_ac: ["devicePixelRatio", "boundaries", "moveStep", "rotateStep", "sizeEditableFunc", "rotationEditableFunc", "editableFunc", "rotatable", "zoomable", "pannable", "walkable", "resettable", "mouseRoamable", er, ck, "firstPersonMode", ej, "movableFunc", "gridVisible", "gridSize", "gridGap", "gridColor", "originAxisVisible", "centerAxisVisible", "axisXColor", "axisYColor", "axisZColor", "editSizeColor", "rectSelectable", "rectSelectBackground", "headlightRange", "headlightColor", "headlightIntensity", "headlightDisabled", "ortho", "orthoWidth", "fovy", "near", "far", kc, Sh, "up", "aspect", "fogDisabled", "fogColor", "fogNear", "fogFar", "dashDisabled", "batchColorDisabled", "batchBlendDisabled", "batchBrightnessDisabled"],
            _editable: !1,
            _devicePixelRatio: l,
            _boundaries: l,
            _moveStep: r.graph3dViewMoveStep,
            _rotateStep: r.graph3dViewRotateStep,
            _pannable: r.graph3dViewPannable,
            _rotatable: r.graph3dViewRotatable,
            _walkable: r.graph3dViewWalkable,
            _resettable: r.graph3dViewResettable,
            _zoomable: r.graph3dViewZoomable,
            _firstPersonMode: r.graph3dViewFirstPersonMode,
            _mouseRoamable: r.graph3dViewMouseRoamable,
            _gridVisible: r.graph3dViewGridVisible,
            _gridSize: r.graph3dViewGridSize,
            _gridGap: r.graph3dViewGridGap,
            _gridColor: r.graph3dViewGridColor,
            _originAxisVisible: r.graph3dViewOriginAxisVisible,
            _centerAxisVisible: r.graph3dViewCenterAxisVisible,
            _axisXColor: r.graph3dViewAxisXColor,
            _axisYColor: r.graph3dViewAxisYColor,
            _axisZColor: r.graph3dViewAxisZColor,
            _ortho: r.graph3dViewOrtho,
            _orthoWidth: r.graph3dViewOrthoWidth,
            _fovy: r.graph3dViewFovy,
            _near: r.graph3dViewNear,
            _far: r.graph3dViewFar,
            _headlightColor: r.graph3dViewHeadlightColor,
            _headlightIntensity: r.graph3dViewHeadlightIntensity,
            _headlightRange: r.graph3dViewHeadlightRange,
            _headlightDisabled: r.graph3dViewHeadlightDisabled,
            _rectSelectable: r.graph3dViewRectSelectable,
            _rectSelectBackground: r.graph3dViewRectSelectBackground,
            _editSizeColor: r.graph3dViewEditSizeColor,
            _autoMakeVisible: Aj,
            _fogDisabled: r.graph3dViewFogDisabled,
            _fogColor: r.graph3dViewFogColor,
            _fogNear: r.graph3dViewFogNear,
            _fogFar: r.graph3dViewFogFar,
            _dashDisabled: r.graph3dViewDashDisabled,
            _batchColorDisabled: r.graph3dViewBatchColorDisabled,
            _batchBlendDisabled: r.graph3dViewBatchBlendDisabled,
            _batchBrightnessDisabled: r.graph3dViewBatchBrightnessDisabled,
            setEye: function (O, y, e) {
                1 === arguments.length && (y = O[1], e = O[2], O = O[0]);
                var j = this._eye;
                j[0] = O, j[1] = y, j[2] = e, this.fp(kc, V, j)
            },
            setCenter: function (B, f, U) {
                1 === arguments.length && (f = B[1], U = B[2], B = B[0]);
                var N = this._center;
                N[0] = B, N[1] = f, N[2] = U, this.fp(Sh, V, N)
            },
            setUp: function (D, C, g) {
                1 === arguments.length && (C = D[1], g = D[2], D = D[0]);
                var J = this._up;
                J[0] = D, J[1] = C, J[2] = g, this.fp("up", V, J)
            },
            isTransparentMask: function (P) {
                return P.s("transparent.mask")
            },
            getAspect: function () {
                var e = this,
                    G = e._aspect;
                return G ? G : e.getWidth() / e.getHeight()
            },
            getCanvas: function () {
                return this._canvas
            },
            setDataModel: function (S) {
                var q = this,
                    Y = q._dataModel,
                    X = q._3o;
                Y !== S && (Y && (Y.umm(q.handleDataModelChange, q), Y.umd(q.handleDataPropertyChange, q), X || Y.sm().ums(q._16o, q)), q._dataModel = S, S.mm(q.handleDataModelChange, q), S.md(q.handleDataPropertyChange, q), X ? X._21I(S) : S.sm().ms(q._16o, q), q.invalidateAll(!0), q.invalidateLight(), q.fp(ze, Y, S))
            },
            handleDataPropertyChange: function (m) {
                var k = m.data;
                this.invalidateData(k), ir(k) && "s:light.type" === m.property && this.invalidateLight()
            },
            invalidateLight: function () {
                this._lightChanged || (this._lightChanged = !0, this.iv())
            },
            onPropertyChanged: function (o) {
                var O = this,
                    q = o.property;
                O.iv(), O._18Q = V, "eye" === q ? O._33Q = !0 : "devicePixelRatio" === q ? O._42(V, O._devicePixelRatio || jq) : xr[q] && Ab(O)
            },
            _5O: function (I) {
                var j = I._22Q();
                return j ? new j(this, I) : V
            },
            getData3dUI: function (f) {
                var i = this._25I[f._id];
                return i === l && (i = this._5O(f), this._25I[f._id] = i), i
            },
            invalidateAll: function (N) {
                var o = this;
                if (N) {
                    for (var i in o._25I) {
                        var F = o._25I[i];
                        F && F.dispose()
                    }
                    o._25I = {}, o.iv(), Ub(o)
                } else o.dm().each(function ($) {
                    o.invalidateData($)
                })
            },
            invalidateSelection: function () {
                var I = this;
                I.sm().each(function (x) {
                    I.invalidateData(x)
                })
            },
            invalidateData: function (m) {
                var p = this,
                    f = p.getData3dUI(m);
                f && (f.iv(), p.iv()), Ub(p, m)
            },
            invalidateBatch: function (r) {
                var O = this,
                    Y = O._33O,
                    E = Y[r];
                E && (E.ds.forEach(function (s) {
                    var v = O.getData3dUI(s);
                    v && v.iv(), delete O._34O[s._id]
                }), delete Y[r], O.iv())
            },
            handleDataModelChange: function (u) {
                var z = this,
                    N = u.kind,
                    x = u.data;
                if ("add" === N) z.invalidateData(x), gj(x) && x.getEdgeGroup() && x.getEdgeGroup().eachSiblingEdge(z.invalidateData, z), ir(x) && z.invalidateLight();
                else if (N === ok) {
                    var U = x._id,
                        j = z._25I[U];
                    j && (j.dispose(), delete z._25I[U], z.iv()), x === z._currentSubGraph && z.setCurrentSubGraph(V), Ub(z, x), ir(x) && z.invalidateLight()
                } else N === Be && (z.invalidateAll(!0), z.setCurrentSubGraph(V), Ub(z), z.invalidateLight())
            },
            toCanvas: function (f) {
                var r = this,
                    I = r.getGL();
                if (r.validate(), f) {
                    var E = I.getParameter(I.COLOR_CLEAR_VALUE);
                    Pb(I, f)
                }
                r._42(V, 1);
                var F = r.getWidth(),
                    T = r.getHeight(),
                    t = new Uint8Array(4 * F * T),
                    D = Qk(),
                    u = D.getContext("2d");
                I.readPixels(0, 0, F, T, I.RGBA, I.UNSIGNED_BYTE, t), Qq(D, F, T, 1);
                for (var C = u.getImageData(0, 0, F, T), W = C.data, k = 0; k < W.length; k += 4) {
                    var A = k / 4,
                        P = S(A / F),
                        O = A - P * F;
                    A = 4 * ((T - 1 - P) * F + O), W[A] = t[k], W[A + 1] = t[k + 1], W[A + 2] = t[k + 2], W[A + 3] = t[k + 3]
                }
                return u.putImageData(C, 0, 0), f && Pb(I, E), r._42(V, r._devicePixelRatio || jq), D
            },
            toDataURL: function (T, r) {
                var w = this,
                    U = w.getGL();
                if (w.validate(), T) {
                    var n = U.getParameter(U.COLOR_CLEAR_VALUE);
                    Pb(U, T)
                }
                w._42(V, 1);
                var d = w._canvas.toDataURL(r || "image/png", 1);
                return T && Pb(U, n), w._42(V, w._devicePixelRatio || jq), d
            },
            getGL: function () {
                var J = this,
                    m = J._26I,
                    f = J._prg;
                if (!m) try {
                    J._2O = {}, m = J._26I = J._canvas.getContext("webgl", J._attributes) || J._canvas.getContext("experimental-webgl", J._attributes), J._buffer = {
                        vs: wc(m),
                        ns: wc(m),
                        is: wc(m),
                        uv: wc(m),
                        batchColor: wc(m),
                        batchBlend: wc(m),
                        batchBrightness: wc(m),
                        lineDistance: wc(m)
                    }, J._1O = bn(m);
                    var j = J._cube = {
                        vs: wc(m),
                        ns: wc(m),
                        is: wc(m),
                        uv: wc(m)
                    };
                    te(m, j.vs, Yr), te(m, j.ns, Je), te(m, j.uv, Qd), bk(m, j.is, Bj)
                } catch (n) { }
                if (m && !f) {
                    if (f = J._prg = m.createProgram(), !f) return V;
                    var x = J._dirs.length,
                        a = J._spots.length,
                        r = J._59O.length,
                        P = ["uPMatrix", "uMVMatrix", "uNMatrix", "uViewMatrix", "aNormal", "aUv", "uOffsetScale", "uDiffuse", "uBlend", "uBlendColor", "uBrightness", "uPartOpacity", "uTransparent", "uTexture", "uSampler", "uDiscardSelectable", "uFix", "uPick", "uReverseFlip", "uFixPickReverseColor", "uBatchBrightness", "aBatchBrightness", "uBatchColor", "aBatchColor", "uBatchBlend", "aBatchBlend", "uDash", "aLineDistance", "uDashDistance", "uDashGapDistance", "uLight", "uHeadlightRange", "uHeadlightColor", "uFogColor", "uFogNear", "uFogFar"];
                    x && P.push("uDirColor", "uDirPosition"), a && P.push("uSpotColor", "uSpotRange", "uSpotAngle", "uSpotExponent", "uSpotPosition", "uSpotCenter"), r && P.push("uPointColor", "uPointRange", "uPointPosition"), Pb(m, [0, 0, 0, 0]), m.clearDepth(1), m.enable(m.DEPTH_TEST), m.depthFunc(m.LEQUAL), m.enable(m.BLEND), m.blendFunc(m.SRC_ALPHA, m.ONE_MINUS_SRC_ALPHA), Xf || (Vh = kg(Vh.substring(0, Vh.indexOf("^#"))), Jo = kg(Jo), Xf = !0);
                    var H = ["#define MAX_DIR " + x, "#define MAX_SPOT " + a, "#define MAX_POINT " + r, J._fogDisabled ? "" : "#define FOG", J._dashDisabled ? "" : "#define DASH", J._batchColorDisabled ? "" : "#define BATCHCOLOR", J._batchBlendDisabled ? "" : "#define BATCHBLEND", J._batchBrightnessDisabled ? "" : "#define BATCHBRIGHTNESS", ""].join("\n"),
                        F = Ce(m, f, m.VERTEX_SHADER, Vh.replace("PREFIX", H)),
                        y = Ce(m, f, m.FRAGMENT_SHADER, Jo.replace("PREFIX", H));
                    $ ? P.push("aPosition") : (f.aPosition = 0, m.bindAttribLocation(f, 0, "aPosition")), m.linkProgram(f), P.forEach(function (d) {
                        f[d] = /^u/.test(d) ? m.getUniformLocation(f, d) : m.getAttribLocation(f, d)
                    }), m.useProgram(f), m.deleteShader(F), m.deleteShader(y)
                }
                return m
            },
            getBrightness: function (g) {
                var W = g.s("brightness"),
                    s = this.isSelected(g) ? g.s("select.brightness") : V;
                return W == V ? s : s == V ? W : W * s
            },
            getWireframe: function (p) {
                var f = p.s("wf.visible");
                return f === !0 || "selected" === f && this.isSelected(p) ? {
                    color: p.s("wf.color"),
                    width: p.s("wf.width"),
                    "short": p.s("wf.short"),
                    mat: p.s("wf.mat")
                } : void 0
            },
            getBodyColor: function (N) {
                return N.s("body.color")
            },
            getMat: function (J) {
                return J.getMat ? J.getMat() : J.s("mat")
            },
            getFaceMat: function (C, A) {
                return C.getFaceMat ? C.getFaceMat(A) : C.s(A + ".mat")
            },
            getFaceBlend: function (_, g) {
                return _.s(g + ".blend") || _.s("all.blend")
            },
            getFaceColor: function (N, y) {
                return N.s(y + ".color") || N.s("all.color")
            },
            getFaceImage: function (n, W) {
                return n.s(W + ".image") || n.s("all.image")
            },
            getFaceDiscardSelectable: function (x, o) {
                var g = x.s(o + ".discard.selectable");
                return g == V ? x.s("all.discard.selectable") : g
            },
            getFaceUv: function (b, J) {
                return b.s(J + ".uv") || b.s("all.uv")
            },
            getFaceUvOffset: function (N, i) {
                return N.s(i + ".uv.offset") || N.s("all.uv.offset")
            },
            getFaceUvScale: function (z, h) {
                return z.s(h + ".uv.scale") || z.s("all.uv.scale")
            },
            getFaceLight: function (j, I) {
                var W = j.s(I + ".light");
                return W == V ? j.s("all.light") : W
            },
            getFaceVisible: function (Z, Y) {
                var d = Z.s(Y + ".visible");
                return d == V ? Z.s("all.visible") : d
            },
            getFaceOpacity: function (g, c) {
                var $ = g.s(c + ".opacity");
                return $ == V ? g.s("all.opacity") : $
            },
            getFaceTransparent: function (x, O) {
                var S = x.s(O + ".transparent");
                return S == V ? x.s("all.transparent") : S
            },
            getFaceReverseColor: function (a, f) {
                return a.s(f + ".reverse.color") || a.s("all.reverse.color")
            },
            getFaceReverseFlip: function (F, H) {
                var M = F.s(H + ".reverse.flip");
                return M == V ? F.s("all.reverse.flip") : M
            },
            getFaceReverseCull: function (j, p) {
                var K = j.s(p + ".reverse.cull");
                return K == V ? j.s("all.reverse.cull") : K
            },
            getTextureMap: function () {
                return this._2O
            },
            deleteTexture: function (J) {
                var m = this,
                    F = m._2O[J];
                F && (delete m._2O[J], m.getGL().deleteTexture(F))
            },
            getTexture: function (b, N) {
                if (!b) return V;
                var Q = this,
                    E = Q.getGL(),
                    P = Q._2O[b];
                if (!P) {
                    var D = Bg(b);
                    if (D)
                        if (D.tagName) {
                            if (D.dynamic) return bn(E, D, Q._1O);
                            P = Q._2O[b] = bn(E, D)
                        } else {
                            var S = Vk(D, N),
                                t = dd(D, N);
                            if (S >= 1 && t >= 1) {
                                var c = Tl(S, t);
                                return Ko(c, D, 0, 0, S, t, N, Q), c.restore(), bn(E, ph, Q._1O)
                            }
                        }
                }
                return P
            },
            redraw: function () {
                this.iv()
            },
            validateImpl: function () {
                var l = this;
                if (l._lightChanged) {
                    l._lightChanged = !1;
                    var e = [],
                        z = [],
                        o = [];
                    l.dm().each(function (W) {
                        if (ir(W)) {
                            var i = W.s("light.type");
                            i === pn ? e.push(W) : i === Qm ? z.push(W) : i === Kf && o.push(W)
                        }
                    }), (e.length !== l._59O.length || z.length !== l._spots.length || o.length !== l._dirs.length) && Ab(l), l._59O = e, l._spots = z, l._dirs = o
                }
                l._42(), l._1o.iv()
            },
            _42: function (g, O) {
                var N = this;
                if (!N._35O && (!zd || pl(zd))) {
                    var $, o;
                    g && (g instanceof Lg ? o = g : $ = g);
                    var I = N._canvas,
                        K = N.getWidth(),
                        C = N.getHeight(),
                        M = N.getGL(),
                        X = N._prg;
                    if (M) {
                        if (O ? g || Qq(I, K, C, O) : (O = N._devicePixelRatio || jq, g || K === I.clientWidth && C === I.clientHeight || Qq(I, K, C, O)), M.viewport(0, 0, K * O, C * O), N._81O = V, M.clear(M.COLOR_BUFFER_BIT | M.DEPTH_BUFFER_BIT), Vb(M, X.uBrightness, 1), Vb(M, X.uOpacity, 1), Vb(M, X.uPartOpacity, 1), M._picking = !!g, Vb(M, X.uPick, !!g), Vb(M, X.uTexture, !1), Vb(M, X.uFix, !1), Vb(M, X.uTransparent, !1), Vb(M, X.uBatchColor, !1), Vb(M, X.uBatchBlend, !1), Vb(M, X.uBatchBrightness, !1), g || (Sn(N, M, X), N._fogDisabled || (Vb(M, X.uFogColor, N._fogColor), Vb(M, X.uFogNear, N._fogNear), Vb(M, X.uFogFar, N._fogFar))), En(M, X.aPosition), En(M, X.aNormal), Dn(M, X.aUv), Dn(M, X.aBatchColor), Dn(M, X.aBatchBlend), Dn(M, X.aBatchBrightness), Dn(M, X.aLineDistance), Vb(M, X.uPMatrix, gp(N)), Vb(M, X.uViewMatrix, Id(N, N._7O)), o) {
                            var b = M.getParameter(M.COLOR_CLEAR_VALUE);
                            M.clearColor(0, 0, 0, 0), M.disable(M.BLEND), Dn(M, X.aNormal), te(M, N._cube.vs, V, X.aPosition), bk(M, N._cube.is), Vc(o, N, Sd, 0), Vc(o, N, F, 6), Vc(o, N, yn, 12), Vc(o, N, Fg, 18), Vc(o, N, lp, 24), Vc(o, N, ih, 30), En(M, X.aNormal), Pb(M, b)
                        } else if ($) {
                            $.value = 2;
                            var b = M.getParameter(M.COLOR_CLEAR_VALUE);
                            M.clearColor(0, 0, 0, 0), M.disable(M.BLEND), N._95I(M, X, $), fm(N, $), Sm(N, N._polylineModelMap, $), Sm(N, N._wireframeModelMap, $), Vb(M, X.uTransparent, !0), N._95I(M, X, $, !0), fm(N, $, !0), Sm(N, N._polylineModelMap, $, !0), Sm(N, N._wireframeModelMap, $, !0), Vb(M, X.uTransparent, !1), M.disable(M.DEPTH_TEST), N._30O._42(M, X, $), M.enable(M.DEPTH_TEST), Pb(M, b)
                        } else M.disable(M.BLEND), N._31O._42(M, X), N._95I(M, X), fm(N), Sm(N, N._polylineModelMap), Sm(N, N._wireframeModelMap), M.enable(M.BLEND), M.depthMask(!1), Vb(M, X.uTransparent, !0), N._95I(M, X, V, !0), fm(N, V, !0), Sm(N, N._polylineModelMap, V, !0), Sm(N, N._wireframeModelMap, V, !0), Vb(M, X.uTransparent, !1), M.depthMask(!0), M.disable(M.BLEND), M.disable(M.DEPTH_TEST), N._32O._42(M, X), N._30O._42(M, X), M.enable(M.DEPTH_TEST);
                        te(M, V), bk(M, V), N._33Q = !1
                    }
                }
            },
            _95I: function (L, r, B, C) {
                var s = this,
                    $ = function (q) {
                        return C ? q : !q
                    };
                s.dm().each(function (p) {
                    if (s.isVisible(p) && (!Z || u)) {
                        if (!B && s.isTransparentMask(p)) return;
                        var b = s.getData3dUI(p);
                        b && b._42(L, r, B, $)
                    }
                })
            },
            getLogicalPoint: function (v) {
                return Dm(v, this._canvas)
            },
            getHitFaceInfo: function (Z) {
                Z.target && (Z = this.lp(Z));
                var B = this.getDataInfoAt(Z);
                if (B) {
                    var $ = this._1o.face(B.data, _i(Z.x, Z.y));
                    if ($) return {
                        data: B.data,
                        face: $
                    }
                }
                return V
            },
            getDataAt: function (x) {
                var $ = this.getDataInfoAt(x);
                return $ ? $.data : V
            },
            getDataInfoAt: function (b, w) {
                return b.target && (b = this.lp(b)), this._1o.get(_i(b.x, b.y, w), !0)
            },
            getDatasInRect: function (m) {
                return this._1o.get(m)
            },
            setEditable: function (a) {
                var L = this,
                    N = L._editable;
                L._editable = a, this.fp(Nl, N, a)
            },
            isEditable: function (R) {
                var V = this;
                return V._editable ? Zl(R) ? R.s("3d.editable") ? V._editableFunc ? V._editableFunc(R) : !0 : !1 : !1 : !1
            },
            isSelectable: function (R) {
                return R.s("3d.selectable") && this.sm().isSelectable(R)
            },
            isMovable: function (v) {
                var h = this;
                return gj(v) && v.getStyle(zl) !== Lf ? !1 : v.s("3d.movable") ? h._movableFunc ? h._movableFunc(v) : !0 : !1
            },
            isSizeEditable: function (M) {
                return Zl(M) ? this._sizeEditableFunc ? this._sizeEditableFunc(M) : !0 : !1
            },
            isRotationEditable: function (i) {
                return Zl(i) && i.IRotatable !== !1 ? this._rotationEditableFunc ? this._rotationEditableFunc(i) : !0 : !1
            },
            handleDelete: function () {
                this._editable && this.removeSelection()
            },
            zoomIn: function (u) {
                this.setZoom(qm, u)
            },
            zoomOut: function (A) {
                this.setZoom(1 / qm, A)
            },
            setZoom: function (S, v) {
                if (1 !== S) {
                    var g = this;
                    if (g._ortho) return g.setOrthoZoom(S, v), void 0;
                    g._14o && g._14o.stop(!0);
                    var n = 1 / S,
                        x = g._eye,
                        Z = g._center,
                        O = Z[0] + (x[0] - Z[0]) * n - x[0],
                        T = Z[1] + (x[1] - Z[1]) * n - x[1],
                        P = Z[2] + (x[2] - Z[2]) * n - x[2];
                    if (!(md(x, Z) < g._moveStep && 1 > n)) {
                        if (v = sr(v)) {
                            var _ = Zj(x);
                            return v.action = function (s) {
                                g.fi({
                                    kind: g._zooming ? "betweenZoom" : "beginZoom"
                                }), g._zooming = 1, x[0] = _[0] + O * s, x[1] = _[1] + T * s, x[2] = _[2] + P * s, g.fp(kc, V, x)
                            }, v._37o = function () {
                                delete g._14o, delete g._zooming, g.fi({
                                    kind: "endZoom"
                                }), g.onZoomEnded()
                            }, g._14o = Ph(v)
                        }
                        x[0] += O, x[1] += T, x[2] += P, g.fp(kc, V, x)
                    }
                }
            },
            setOrthoZoom: function (X, p) {
                if (1 !== X) {
                    var k = this;
                    k._14o && k._14o.stop(!0);
                    var i = k._orthoWidth,
                        P = i / X - i;
                    if (!(i < k._moveStep && X > 1)) return (p = sr(p)) ? (p.action = function (Y) {
                        k.fi({
                            kind: k._zooming ? "betweenZoom" : "beginZoom"
                        }), k._zooming = 1, k.setOrthoWidth(i + P * Y)
                    }, p._37o = function () {
                        delete k._14o, delete k._zooming, k.fi({
                            kind: "endZoom"
                        }), k.onZoomEnded()
                    }, k._14o = Ph(p)) : (k.setOrthoWidth(i / X), void 0)
                }
            },
            getPositionInfo: function (L) {
                var f = this,
                    j = f._eye,
                    h = f._center,
                    k = f.getAspect(),
                    x = L ? Gl(Zn(h, j, !0), Zn(L, j)) : md(j, h);
                if (f._ortho) {
                    var b = f._orthoWidth;
                    return {
                        length: x,
                        height: b / k,
                        width: b
                    }
                }
                var y = 2 * P(f._fovy / 2) * x;
                return {
                    length: x,
                    height: y,
                    width: y * k
                }
            },
            getCenterInfo: function () {
                var X = this;
                return X._81O || (X._81O = X.getPositionInfo()), Zj(X._81O)
            },
            rotate: function (F, G, l, m) {
                var I = this;
                if (F || G) {
                    m == V && (m = I._firstPersonMode), I._88O && I._88O.stop(!0);
                    var o = I._center,
                        k = I._eye,
                        L = I.getCenterInfo().length,
                        Q = m ? o : k,
                        q = m ? k : o,
                        P = Zn(Q, q),
                        _ = x(P[0], P[2]),
                        C = x(B(P[0] * P[0] + P[2] * P[2]), P[1]),
                        b = m ? Sh : kc;
                    return m && (G = -G), (l = sr(l)) ? (l.action = function (r) {
                        I.fi({
                            kind: I._rotating ? "betweenRotate" : "beginRotate"
                        }), I._rotating = 1;
                        var D = _ + F * r,
                            v = C + G * r;
                        v = Qc(v), P[0] = L * N(v) * N(D), P[1] = L * A(v), P[2] = L * N(v) * A(D), Q[0] = q[0] + P[0], Q[1] = q[1] + P[1], Q[2] = q[2] + P[2], I.fp(b, V, Q)
                    }, l._37o = function () {
                        delete I._88O, delete I._rotating, I.fi({
                            kind: "endRotate"
                        }), I.onRotateEnded()
                    }, I._88O = Ph(l)) : (_ += F, C += G, C = Qc(C), P[0] = L * N(C) * N(_), P[1] = L * A(C), P[2] = L * N(C) * A(_), Q[0] = q[0] + P[0], Q[1] = q[1] + P[1], Q[2] = q[2] + P[2], I.fp(b, V, Q), void 0)
                }
            },
            pan: function (y, E, A, g) {
                if (y || E) {
                    var l = this;
                    g == V && (g = l._firstPersonMode), l._89O && l._89O.stop(!0);
                    var t = Id(l),
                        $ = [t[0] * y, t[4] * y, t[8] * y],
                        U = [t[1] * E, t[5] * E, t[9] * E],
                        J = $[0] + U[0],
                        v = $[1] + U[1],
                        F = $[2] + U[2],
                        R = l._center,
                        c = l._eye;
                    if (g) {
                        var H = Zb(l.getBoundaries(), c[0], c[2], c[0] + J, c[2] + F, B(J * J + F * F));
                        J = H[0], F = H[1]
                    }
                    if (A = sr(A)) {
                        var w = Zj(c),
                            O = Zj(R);
                        return A.action = function (t) {
                            l.fi({
                                kind: l._panning ? "betweenPan" : "beginPan"
                            }), l._panning = 1, R[0] = O[0] + J * t, R[1] = O[1] + v * t, R[2] = O[2] + F * t, c[0] = w[0] + J * t, c[1] = w[1] + v * t, c[2] = w[2] + F * t, l.fp(kc, V, c), l.fp(Sh, V, R)
                        }, A._37o = function () {
                            delete l._89O, delete l._panning, l.fi({
                                kind: "endPan"
                            }), l.onPanEnded()
                        }, l._89O = Ph(A)
                    }
                    R[0] += J, R[1] += v, R[2] += F, c[0] += J, c[1] += v, c[2] += F, l.fp(kc, V, c), l.fp(Sh, V, R)
                }
            },
            walk: function (z, s, M) {
                if (z) {
                    var $ = this;
                    M == V && (M = $._firstPersonMode), $._90O && $._90O.stop(!0);
                    var G = $._center,
                        y = $._eye,
                        N = Zn(G, y, !0);
                    if (M) {
                        var f = Zb($.getBoundaries(), y[0], y[2], y[0] + N[0] * z, y[2] + N[2] * z, O(z));
                        if (z = md(f), !z) return;
                        N = [f[0] / z, 0, f[1] / z]
                    }
                    if (s = sr(s)) {
                        var p = Zj(y),
                            Y = Zj(G);
                        return s.action = function (o) {
                            $.fi({
                                kind: $._walking ? "betweenWalk" : "beginWalk"
                            }), $._walking = 1;
                            var P = z * o;
                            y[0] = p[0] + N[0] * P, y[1] = p[1] + N[1] * P, y[2] = p[2] + N[2] * P, G[0] = Y[0] + N[0] * P, G[1] = Y[1] + N[1] * P, G[2] = Y[2] + N[2] * P, $.fp(kc, V, y), $.fp(Sh, V, G)
                        }, s._37o = function () {
                            delete $._90O, delete $._walking, $.fi({
                                kind: "endWalk"
                            }), $.onWalkEnded()
                        }, $._90O = Ph(s)
                    }
                    y[0] += N[0] * z, y[1] += N[1] * z, y[2] += N[2] * z, G[0] += N[0] * z, G[1] += N[1] * z, G[2] += N[2] * z, $.fp(kc, V, y), $.fp(Sh, V, G)
                }
            },
            handleScroll: function (R, s) {
                R.preventDefault();
                var q = this,
                    u = q._moveStep;
                q.isFirstPersonMode() ? q.isPannable() && q.pan(0, s > 0 ? u : -u) : q.isZoomable() && q.setZoom(0 > s ? 1 / Tg : Tg)
            },
            handlePinch: function (B, N) {
                this.isZoomable() && this.setZoom(N > B ? 1 / Yh : Yh)
            },
            reset: function () {
                this.setCenter(r.graph3dViewCenter), this.setEye(r.graph3dViewEye), this.setUp(r.graph3dViewUp)
            },
            moveSelection: function (L, O, D) {
                var J, P = this,
                    G = P.dm();
                G && (J = G.getHistoryManager()), J && J.beginInteraction(), ji(this.sm().toSelection(this.isMovable, this), L, O, D), J && J.endInteraction()
            },
            getMoveMode: function (A, v) {
                var S = v.s("3d.move.mode");
                if (S) return S;
                var h = "88",
                    D = "89",
                    k = "90";
                return Ag(A) || Ih[h] && Ih[D] && Ih[k] ? "xyz" : Ih[h] && Ih[D] ? "xy" : Ih[h] && Ih[k] ? "xz" : Ih[D] && Ih[k] ? "yz" : Ih[h] ? "x" : Ih[D] ? "y" : Ih[k] ? "z" : "xz"
            },
            handleTick: function () {
                var N = this,
                    k = !1,
                    d = N._moveStep,
                    X = d,
                    Q = !1,
                    W = !0,
                    D = N._rotateStep * (W ? -1 : 1);
                if (N.isWalkable() || (X = 0), N.isPannable() || (d = 0), N.isRotatable() || (D = 0), N._32Q) {
                    var S = (rf() - N._32Q) / 50;
                    X *= S, d *= S, D *= S
                }
                N._31Q && (Af(N._31Q), delete N._31Q, delete N._32Q), fg() && (k = !0, N.pan(-d, 0, Q, W)), Ll() && (k = !0, N.pan(d, 0, Q, W)), Zi() && (k = !0, Ag() ? N.pan(0, d, Q, W) : N.walk(X, Q, W)), Ol() && (k = !0, Ag() ? N.pan(0, -d, Q, W) : N.walk(-X, Q, W)), xb() && (k = !0, N.rotate(-D, 0, Q, W)), Hb() && (k = !0, N.rotate(D, 0, Q, W)), yg() && (k = !0, N.rotate(0, -D / 2, Q, W)), _n() && (k = !0, N.rotate(0, D / 2, Q, W)), k && (N._32Q = rf(), N._31Q = Om(N.handleTick, N))
            },
            handleKeyDown: function (C) {
                var H = this;
                !im(C) && sn[C.keyCode] ? H.handleTick() : mc(C) ? H.selectAll() : cg(C) ? H.handleDelete(C) : xe(C) && this.isResettable() && H.reset()
            },
            checkDoubleClickOnNote: function (H, K, G) {
                var k = this;
                if (G === $e) {
                    if (K.s("note.toggleable")) return K.s(Sb, !K.s(Sb)), k.fi({
                        kind: "toggleNote",
                        event: H,
                        data: K,
                        part: G
                    }), !0
                } else if (G === Dq && K.s("note2.toggleable")) return K.s(rj, !K.s(rj)), k.fi({
                    kind: "toggleNote2",
                    event: H,
                    data: K,
                    part: G
                }), !0;
                return !1
            },
            checkDoubleClickOnRotation: function (R, p, X) {
                return X === Bm ? (p.setRotationX(0), !0) : X === fs ? (p.setRotationY(0), !0) : X === ar ? (p.setRotationZ(0), !0) : !1
            },
            onRotateEnded: function () { },
            onWalkEnded: function () { },
            toViewPosition: function (D) {
                var z = this,
                    y = z.getWidth() / 2,
                    N = z.getHeight() / 2,
                    d = z._18Q;
                return d || (d = gp(z), z._18Q = oe(d, d, Id(z))), D = mp([D[0], D[1], D[2], 1], d), {
                    x: y + y * D[0] / D[3],
                    y: N - N * D[1] / D[3]
                }
            },
            getHitPosition: function (Y, s, S) {
                var D = this,
                    X = D.getWidth(),
                    l = D.getHeight(),
                    W = Y.target ? D.lp(Y) : Y,
                    n = W.x - X / 2,
                    E = W.y - l / 2,
                    f = D.getCenterInfo(),
                    G = Id(D);
                s = s ? s : [0, 0, 0], S = S ? S : [0, 1, 0], n = n / X * f.width, E = -1 * E / l * f.height;
                var Z = [G[0] * n, G[4] * n, G[8] * n],
                    e = [G[1] * E, G[5] * E, G[9] * E],
                    v = [Z[0] + e[0], Z[1] + e[1], Z[2] + e[2]],
                    t = D.getCenter(),
                    T = mj(D, s, S, [v[0] + t[0], v[1] + t[1], v[2] + t[2]]);
                return T ? T : [0, 0, 0]
            },
            getLineLength: function (i) {
                this.validate();
                var S = this.getData3dUI(i);
                if (S && S.getCache) {
                    var l = S.getCache();
                    if (l) return l[l.length - 1].length
                }
                return 0
            },
            getLineOffset: function (v, G) {
                this.validate();
                var q = this.getData3dUI(v);
                if (q && q.getCache) {
                    var E = q.getCache();
                    if (E) return In(E, G)
                }
                return V
            }
        });
        var rg = Xc.Interactor = function (s) {
            this.gv = s
        };
        ne("Interactor", w, {
            ms_listener: 1,
            getView: function () {
                return this.gv.getView()
            },
            setUp: function () {
                this.addListeners()
            },
            tearDown: function () {
                this.removeListeners()
            }
        });
        var Nj = Xc.DefaultInteractor = function (u) {
            fi(Nj, this, [u])
        };
        ne("DefaultInteractor", rg, {
            handle_contextmenu: function (y) {
                Mh(y)
            },
            handle_mousewheel: function (E) {
                this.gv.handleScroll(E, E.wheelDelta / 40)
            },
            handle_DOMMouseScroll: function (s) {
                2 === s.axis && this.gv.handleScroll(s, -s.detail)
            },
            handle_keydown: function (y) {
                this.gv.handleKeyDown(y)
            },
            handle_mousedown: function (D) {
                this.handle_touchstart(D)
            },
            handle_touchstart: function (T) {
                Mh(T);
                var h = this,
                    r = h.gv,
                    G = De(T),
                    s = r.getDataInfoAt(T),
                    L = s ? s.data : V,
                    w = s ? s.part : V,
                    p = r.sm(),
                    z = hn(T),
                    t = Yn(T);
                r.setFocus(T) && (h._62O = V, h._57I = V, L ? im(T) ? p.co(L) ? p.rs(L) : p.as(L) : p.co(L) || p.ss(L) : G && (im(T) ? r.isRectSelectable() && (h._62O = sp) : h._57I = Li(T)), h._31Q && (Af(h._31Q), delete h._31Q, delete h._32Q), h._62O || (r.isFirstPersonMode() && (Ag(T) || t > 2 ? h._62O = "pan" : r.isMouseRoamable() || e ? (h._62O = "roaming", h.foward = z && De(T), h._32Q = rf(), h._31Q = Om(h.tick, h)) : G || (h._62O = "roaming")), h._62O || (G && z && Nr[w] ? (h._62O = w, h.p3 = L.p3()) : G && z && Zl(L) && r.isSelected(L) && r.isMovable(L) ? (h._62O = "move", h.p3 = L.p3(), h.movedata = L) : e && (t > 2 ? h._62O = "pan" : 2 === t && (h.dist = Np(T), h._62O = "pinch")))), h.point = r.lp(T), Le(h, T), Yc(T) ? r.handleDoubleClick(T, L, w) : r.handleClick(T, L, w))
            },
            tick: function () {
                var D = this,
                    X = D.gv,
                    T = X._moveStep;
                D.point && X.isWalkable() && (D._32Q && (T *= (rf() - D._32Q) / 50), X.walk(D.foward ? T : -T), D._32Q = rf(), D._31Q = Om(D.tick, D))
            },
            handle_mouseup: function (g) {
                this.handle_touchend(g)
            },
            handle_touchend: function ($) {
                var B = this._57I;
                B && (md(B, Li($)) <= 1 && this.gv.sm().cs(), this._57I = V)
            },
            handleWindowMouseMove: function (m) {
                this.handleWindowTouchMove(m)
            },
            handleWindowTouchMove: function (j) {
                var G, M, B = this,
                    S = B.gv,
                    o = B._62O,
                    g = B.point,
                    R = S.dm(),
                    t = R.getHistoryManager(),
                    m = S.lp(j),
                    D = m.x - g.x,
                    u = m.y - g.y,
                    s = -X * D / S.getWidth(),
                    L = -X * u / S.getHeight();
                if ("roaming" === o) B.rotate(j, s / 2, L / 2);
                else if (o === Bm || o === fs || o === ar) t && !S._86O && t.beginInteraction(), S.fi({
                    kind: S._86O ? "betweenEditRotation" : "beginEditRotation",
                    event: j
                }), S._86O = 1, S.sm().each(function (G) {
                    if (Zl(G) && S.isRotationEditable(G)) {
                        var B = O(s) > O(L) ? s : L;
                        o === Bm ? G.setRotationX(G.getRotationX() + B) : o === fs ? G.setRotationY(G.getRotationY() + B) : o === ar && G.setRotationZ(G.getRotationZ() + B)
                    }
                });
                else if ("move" === o || Nr[o]) {
                    o === lf || o === Oo || o === qj ? (t && !S._87O && t.beginInteraction(), S.fi({
                        kind: S._87O ? "betweenEditSize" : "beginEditSize",
                        event: j
                    }), S._87O = 1) : (t && !S._moving && t.beginInteraction(), S.fi({
                        kind: S._moving ? "betweenMove" : "beginMove",
                        event: j
                    }), S._moving = 1);
                    var i, N = B.p3,
                        p = S.getPositionInfo(N),
                        v = Id(S);
                    i = o === Rj ? "x" : o === Og ? "y" : o === gs ? "z" : o === lf ? "sx" : o === Oo ? "sy" : o === qj ? "sz" : S.getMoveMode(j, B.movedata), D = D / S.getWidth() * p.width, u = -1 * u / S.getHeight() * p.height;
                    var x, J, K = [v[0] * D, v[4] * D, v[8] * D],
                        V = [v[1] * u, v[5] * u, v[9] * u],
                        c = K[0] + V[0],
                        e = K[1] + V[1],
                        k = K[2] + V[2],
                        U = [N[0] + c, N[1] + e, N[2] + k],
                        l = Zn(S.getEye(), U, !0);
                    if ("xyz" === i ? (x = U, S.moveSelection(c, e, k)) : "xz" === i ? (x = mj(S, N, [0, 1, 0], U), x && S.moveSelection(x[0] - N[0], 0, x[2] - N[2])) : "xy" === i ? (x = mj(S, N, [0, 0, 1], U), x && S.moveSelection(x[0] - N[0], x[1] - N[1], 0)) : "yz" === i ? (x = mj(S, N, [1, 0, 0], U), x && S.moveSelection(0, x[1] - N[1], x[2] - N[2])) : "x" === i || "sx" === i ? (l[0] = 0, x = mj(S, N, l, U), x && (J = x[0] - N[0], "x" === i ? S.moveSelection(J, 0, 0) : S.sm().each(function (f) {
                            Zl(f) && S.isSizeEditable(f) && (G = C(pg, f.getWidth() + J), M = G / f.getWidth(), f.setWidth(G), Ag(j) && (f.setHeight(f.getHeight() * M), f.setTall(f.getTall() * M)))
                    }))) : "y" === i || "sy" === i ? (l[1] = 0, x = mj(S, N, l, U), x && (J = x[1] - N[1], "y" === i ? S.moveSelection(0, J, 0) : S.sm().each(function (g) {
                            Zl(g) && S.isSizeEditable(g) && (G = C(pg, g.getTall() + J), M = G / g.getTall(), g.setTall(G), Ag(j) && (g.setHeight(g.getHeight() * M), g.setWidth(g.getWidth() * M)))
                    }))) : ("z" === i || "sz" === i) && (l[2] = 0, x = mj(S, N, l, U), x && (J = x[2] - N[2], "z" === i ? S.moveSelection(0, 0, J) : S.sm().each(function (s) {
                            Zl(s) && S.isSizeEditable(s) && (G = C(pg, s.getHeight() + J), M = G / s.getHeight(), s.setHeight(G), Ag(j) && (s.setTall(s.getTall() * M), s.setWidth(s.getWidth() * M)))
                    }))), !x) return;
                    B.p3 = x
                } else if (o === sp) {
                    var F = B.div;
                    F || (F = B.div = Xh(), yk(B.getView(), F), F.op = g, F.style.background = S.getRectSelectBackground()), S.fi({
                        kind: S._rectSelecting ? "betweenRectSelect" : "beginRectSelect",
                        event: j
                    }), S._rectSelecting = 1, F.rect = Aq(F.op, m), Xe(F, F.rect)
                } else if ("pinch" === o && 2 === Yn(j)) {
                    S.fi({
                        kind: S._pinching ? "betweenPinch" : "beginPinch",
                        event: j
                    }), S._pinching = 1;
                    var J = Np(j);
                    S.handlePinch(J, B.dist), B.dist = J
                } else "pan" === o || Ag(j) ? B.pan(j, D, u) : S.isFirstPersonMode() || (De(j) ? B.rotate(j, s, L) : (B.pan(j, D, 0), S.isWalkable() && (S.fi({
                    kind: S._walking ? "betweenWalk" : "beginWalk",
                    event: j
                }), S._walking = 1, S.walk(u / S.getHeight() * S.getCenterInfo().height))));
                B.point = m
            },
            pan: function (T, z, Z) {
                var E = this.gv;
                if (E.isPannable()) {
                    var U = E.getCenterInfo(),
                        o = z / E.getWidth() * U.width,
                        k = -1 * Z / E.getHeight() * U.height;
                    E.fi({
                        kind: E._panning ? "betweenPan" : "beginPan",
                        event: T
                    }), E._panning = 1, E.pan(-o, -k)
                }
            },
            rotate: function (m, e, I) {
                var t = this.gv;
                t.isRotatable() && (t.fi({
                    kind: t._rotating ? "betweenRotate" : "beginRotate",
                    event: m
                }), t._rotating = 1, t.rotate(e, I))
            },
            handleWindowMouseUp: function (h) {
                this.handleWindowTouchEnd(h)
            },
            handleWindowTouchEnd: function (U) {
                var i = this,
                    F = i.gv,
                    H = F.dm(),
                    X = H.getHistoryManager(),
                    S = i.div;
                if (S) {
                    var y = F.getDatasInRect(S.rect);
                    if (!y.isEmpty()) {
                        var $ = F.sm(),
                            g = $.toSelection();
                        y.each(function (I) {
                            $.co(I) ? g.remove(I) : g.add(I)
                        }), $.ss(g)
                    }
                    Kq(S)
                }
                F._moving && (delete F._moving, F.fi({
                    kind: "endMove",
                    event: U
                }), F.onMoveEnded(), X && X.endInteraction()), F._panning && (delete F._panning, F.fi({
                    kind: "endPan",
                    event: U
                }), F.onPanEnded()), F._rotating && (delete F._rotating, F.fi({
                    kind: "endRotate",
                    event: U
                }), F.onRotateEnded()), F._86O && (delete F._86O, F.fi({
                    kind: "endEditRotation",
                    event: U
                }), X && X.endInteraction()), F._87O && (delete F._87O, F.fi({
                    kind: "endEditSize",
                    event: U
                }), X && X.endInteraction()), F._pinching && (delete F._pinching, F.fi({
                    kind: "endPinch",
                    event: U
                }), F.onPinchEnded()), F._rectSelecting && (delete F._rectSelecting, F.fi({
                    kind: "endRectSelect",
                    event: U
                }), F.onRectSelectEnded()), F._walking && (delete F._walking, F.fi({
                    kind: "endWalk",
                    event: U
                }), F.onWalkEnded()), i.dist = i.point = i._62O = i.p3 = i.movedata = i.div = i._57I = i._32Q = i._31Q = i.foward = V
            }
        });
        var rk = function (X) {
            this.gv = X
        };
        Ui(rk, w, {
            _iv: !0,
            iv: function () {
                this._iv = !0
            },
            face: function (e, i) {
                var s = this,
                    t = s.gv.getGL();
                if (!t || !Zl(e)) return V;
                var R = i.x,
                    W = i.width,
                    f = i.height,
                    l = s.height - i.y - f,
                    z = S(W / 2),
                    w = new Uint8Array(4 * W * f),
                    u = 0;
                for (s.iv(), s.validate(e), hj(t, s.frame), t.readPixels(R, l, W, f, t.RGBA, t.UNSIGNED_BYTE, w), hj(t, V), s.iv() ; z >= u; u++)
                    for (var g = z - u, q = z + u, y = g; q >= y; y++)
                        for (var Z = g; q >= Z; Z++)
                            if (y === g || y === q || Z === g || Z === q) {
                                var F = rb.m[w[4 * (y * W + Z)]];
                                if (F) return F
                            }
            },
            get: function (p, R) {
                this.validate();
                var H = this,
                    I = H.gv.getGL();
                if (!I) return V;
                var U, h, T = p.x,
                    x = p.width,
                    _ = p.height,
                    E = H.height - p.y - _,
                    l = S(x / 2),
                    s = new Uint8Array(4 * x * _),
                    F = 0,
                    C = s.length,
                    K = R ? V : new Io,
                    k = R ? V : {};
                if (hj(I, H.frame), I.readPixels(T, E, x, _, I.RGBA, I.UNSIGNED_BYTE, s), hj(I, V), R) {
                    for (; l >= F; F++)
                        for (var Y = l - F, B = l + F, v = Y; B >= v; v++)
                            for (var m = Y; B >= m; m++)
                                if ((v === Y || v === B || m === Y || m === B) && (U = H.info(s, 4 * (v * x + m)))) return U
                } else
                    for (; C > F; F += 4) U = H.info(s, F), U && (h = U.data, k[h._id] || (K.add(h), k[h._id] = h));
                return K
            },
            info: function (r, l) {
                return this.colorMap[(r[l] << 24) + (r[l + 1] << 16) + (r[l + 2] << 8) + r[l + 3]]
            },
            validate: function (j) {
                var l = this,
                    S = l.gv,
                    y = S.getGL();
                if (y) {
                    var b = S.getWidth(),
                        T = S.getHeight(),
                        P = y.RGBA,
                        p = y.TEXTURE_2D,
                        L = y.RENDERBUFFER,
                        R = y.FRAMEBUFFER;
                    l.texture || (l.texture = bn(y), l.render = y.createRenderbuffer(), l.frame = y.createFramebuffer()), (l.width !== b || l.height !== T) && (uh(y, l.texture), y.texImage2D(p, 0, P, b, T, 0, P, y.UNSIGNED_BYTE, V), ye(y, y.TEXTURE_MIN_FILTER, y.LINEAR), y.bindRenderbuffer(L, l.render), y.renderbufferStorage(L, y.DEPTH_COMPONENT16, b, T), hj(y, l.frame), y.framebufferTexture2D(R, y.COLOR_ATTACHMENT0, p, l.texture, 0), y.framebufferRenderbuffer(R, y.DEPTH_ATTACHMENT, L, l.render), uh(y, V), y.bindRenderbuffer(L, V), hj(y, V), l.width = b, l.height = T), l._iv && (l._iv = !1, hj(y, l.frame), S._42(j || (l.colorMap = {}), 1), hj(y, V))
                }
            }
        });
        var Oc = function (g) {
            this.gv = g
        };
        Ui(Oc, w, {
            gap: 0,
            size: 0,
            _42: function (Y, b) {
                var m = this,
                    N = m.gv,
                    F = N._gridGap,
                    s = N._gridSize;
                if (N._gridVisible) {
                    if (m.gap !== F || m.size !== s) {
                        for (var X = [], z = N._gridSize / 2, S = F * z, R = 0; 2 * z + 1 > R; R++) {
                            var c = 6 * R,
                                U = 6 * (2 * z + 1) + c;
                            X[c] = -S, X[c + 1] = 0, X[c + 2] = -S + R * F, X[c + 3] = S, X[c + 4] = 0, X[c + 5] = -S + R * F, X[U] = -S + R * F, X[U + 1] = 0, X[U + 2] = -S, X[U + 3] = -S + R * F, X[U + 4] = 0, X[U + 5] = S
                        }
                        m.vs = new wq(X), m.gap = F, m.size = s
                    }
                    Si(N), lm(Y, b), ul(Y, b, 1, N._gridColor, N._buffer.vs, m.vs), Tq(Y, 0, m.vs.length / 3, Y.LINES), bl(Y, b)
                } else m.vs = m.gap = m.size = V
            }
        });
        var Wc = function (f) {
            this.gv = f
        };
        Ui(Wc, w, {
            _42: function (M, q) {
                var Y = this.gv,
                    l = Y._buffer.vs,
                    I = Y._axisXColor,
                    w = Y._axisYColor,
                    X = Y._axisZColor,
                    F = Y._originAxisVisible,
                    n = Y._centerAxisVisible;
                if (F || n) {
                    var G = $ ? M.TRIANGLES : M.TRIANGLE_FAN,
                        S = M.LINES;
                    if (Si(Y), lm(M, q), F) {
                        var t = Y.getCenterInfo(),
                            C = J(t.width, t.height) / 5,
                            T = .8 * C,
                            y = .05 * C;
                        ul(M, q, 1.5, I, l, new wq([0, 0, 0, C, 0, 0, T, y, 0, T, 0, y, T, -y, 0, T, 0, -y, T, y, 0, 0, 0, 0, 0, C, 0, y, T, 0, 0, T, y, -y, T, 0, 0, T, -y, y, T, 0, 0, 0, 0, 0, 0, C, y, 0, T, 0, y, T, -y, 0, T, 0, -y, T, y, 0, T])), Tq(M, 0, 2, S), Tq(M, 1, 6, G), ul(M, q, V, w), Tq(M, 7, 2, S), Tq(M, 8, 6, G), ul(M, q, V, X), Tq(M, 14, 2, S), Tq(M, 15, 6, G)
                    }
                    if (n) {
                        var v = Y._center,
                            k = v[0],
                            U = v[1],
                            b = v[2],
                            t = Y.getPositionInfo(v);
                        C = J(t.width, t.height) / 20, ul(M, q, 1.5, I, l, new wq([k, U, b, k + C, U, b, k, U, b, k, U + C, b, k, U, b, k, U, b + C])), Tq(M, 0, 2, S), ul(M, q, V, w), Tq(M, 2, 2, S), ul(M, q, V, X), Tq(M, 4, 2, S)
                    }
                    bl(M, q)
                }
            }
        });
        var Ng = function (j) {
            this.gv = j
        },
            Rj = "edit_tx",
            Og = "edit_ty",
            gs = "edit_tz",
            Bm = "edit_rx",
            fs = "edit_ry",
            ar = "edit_rz",
            lf = "edit_sx",
            Oo = "edit_sy",
            qj = "edit_sz",
            Nr = {};
        Nr[Rj] = 1, Nr[Og] = 1, Nr[gs] = 1, Nr[Bm] = 1, Nr[fs] = 1, Nr[ar] = 1, Nr[lf] = 1, Nr[Oo] = 1, Nr[qj] = 1, Ui(Ng, w, {
            _42: function (O, q, v) {
                var g = this,
                    d = g.gv,
                    F = d.sm().ld();
                if (d.isEditable(F) && Zl(F) && (!d.isFirstPersonMode() || !d.isMouseRoamable() && !e)) {
                    Si(d);
                    var t, Y, f = d.isMovable(F),
                        _ = d.isRotationEditable(F),
                        n = d.isSizeEditable(F),
                        N = d._axisXColor,
                        i = d._axisYColor,
                        u = d._axisZColor,
                        Q = d._editSizeColor,
                        B = d.getCenterInfo(),
                        L = J(B.width, B.height) / 10,
                        R = L / (v ? 5 : 10),
                        U = .7 * L,
                        a = .4 * U,
                        s = F.p3(),
                        X = s[0],
                        p = s[1],
                        r = s[2];
                    t = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], f && g._17O(O, q, F, v, Rj, N, t, [X, p - R, r, X + U, p - R, r, X + U, p, r, X + U, p, r, X, p, r, X, p - R, r, X, p - R, r + R, X + U, p - R, r + R, X + U, p - R, r, X + U, p - R, r, X, p - R, r, X, p - R, r + R]), Y = X + U, n && g._17O(O, q, F, v, lf, Q, t, [Y, p - R, r, Y + a, p - R, r, Y + a, p, r, Y + a, p, r, Y, p, r, Y, p - R, r, Y, p - R, r + R, Y + a, p - R, r + R, Y + a, p - R, r, Y + a, p - R, r, Y, p - R, r, Y, p - R, r + R]), Y += a, _ && g._17O(O, q, F, v, Bm, N, t, [Y, p - R, r, Y + a, p - R, r, Y + a, p, r, Y + a, p, r, Y, p, r, Y, p - R, r, Y, p - R, r + R, Y + a, p - R, r + R, Y + a, p - R, r, Y + a, p - R, r, Y, p - R, r, Y, p - R, r + R]), t = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0], f && g._17O(O, q, F, v, Og, i, t, [X, p, r, X, p + U, r, X - R, p + U, r, X - R, p + U, r, X - R, p, r, X, p, r, X, p, r, X, p, r - R, X, p + U, r - R, X, p + U, r - R, X, p + U, r, X, p, r]), Y = p + U, n && g._17O(O, q, F, v, Oo, Q, t, [X, Y, r, X, Y + a, r, X - R, Y + a, r, X - R, Y + a, r, X - R, Y, r, X, Y, r, X, Y, r, X, Y, r - R, X, Y + a, r - R, X, Y + a, r - R, X, Y + a, r, X, Y, r]), Y += a, _ && g._17O(O, q, F, v, fs, i, t, [X, Y, r, X, Y + a, r, X - R, Y + a, r, X - R, Y + a, r, X - R, Y, r, X, Y, r, X, Y, r, X, Y, r - R, X, Y + a, r - R, X, Y + a, r - R, X, Y + a, r, X, Y, r]), t = [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], f && g._17O(O, q, F, v, gs, u, t, [X, p, r, X, p, r + U, X, p - R, r + U, X, p - R, r + U, X, p - R, r, X, p, r, X, p - R, r, X - R, p - R, r, X - R, p - R, r + U, X - R, p - R, r + U, X, p - R, r + U, X, p - R, r]), Y = r + U, n && g._17O(O, q, F, v, qj, Q, t, [X, p, Y, X, p, Y + a, X, p - R, Y + a, X, p - R, Y + a, X, p - R, Y, X, p, Y, X, p - R, Y, X - R, p - R, Y, X - R, p - R, Y + a, X - R, p - R, Y + a, X, p - R, Y + a, X, p - R, Y]), Y += a, _ && g._17O(O, q, F, v, ar, u, t, [X, p, Y, X, p, Y + a, X, p - R, Y + a, X, p - R, Y + a, X, p - R, Y, X, p, Y, X, p - R, Y, X - R, p - R, Y, X - R, p - R, Y + a, X - R, p - R, Y + a, X, p - R, Y + a, X, p - R, Y])
                }
            },
            _17O: function (h, T, f, P, I, G, r, u) {
                var x = this.gv._buffer;
                Xi(h, T, P, !0, f, I), wd(h, T, V, !0, V, !0, V, !1), Vb(h, T.uDiffuse, G), te(h, x.vs, new wq(u), T.aPosition), te(h, x.ns, new wq(r), T.aNormal), Tq(h, 0, 12), dj(h, T)
            }
        });
        var Zg = function (C, Z) {
            this.gv = C, this.s = function (G, e, N) {
                return e == V && (e = N), e == V ? Z.getStyle(G) : Pk(e, Z, C)
            }, this.data = Z
        };
        Ui(Zg, w, {
            I3d: !0,
            ms_icons: 1,
            _iv: !0,
            iv: function () {
                this._iv = !0
            },
            _42: function (i, I, H, D) {
                var g, c, m, b, T, B, k, r = this,
                    C = r.gv,
                    K = r.data,
                    F = K._id,
                    U = r.s("batch"),
                    o = C._34O,
                    W = C._33O,
                    p = C.isSelectable(K),
                    h = C.getBrightness(K),
                    S = h != V && 1 !== h;
                if (r._iv) {
                    if (m = $r(o, W, K, U), r.validate(m, U ? lk[U] || zn : V), m && (b = o[F], T = b.size = m.vs.length / 3 - b.begin, k = m.rs))
                        for (h = S ? h : 1, B = 0; T > B; B++) k.push(h);
                    if (Zl(K)) {
                        var e = C.getWireframe(K);
                        e && nj(C, K, e)
                    }
                    r.labelInfo = r.label2Info = r.noteInfo = r.note2Info = r._38o = V, r._24O(Fq, "getLabel"), r._24O(pf, "getLabel2"), r._26O($e, "getNote"), r._26O(Dq, "getNote2"), r._15O(), r._iv = !1
                }
                S && Vb(i, I.uBrightness, h), c = Xi(i, I, H, p, K, vd), c && (ms(c, o[F], W), ms(c, C._polylineIndexMap[F], C._polylineModelMap), ms(c, C._wireframeIndexMap[F], C._wireframeModelMap)), o[F] || r._80o(i, I, D), (g = r.labelInfo) && (Xi(i, I, H, p, K, Fq), r._28O(g, Fq, D)), (g = r.label2Info) && (Xi(i, I, H, p, K, pf), r._28O(g, pf, D)), (g = r.noteInfo) && (Xi(i, I, H, p, K, $e), r._29O(g, $e, D)), (g = r.note2Info) && (Xi(i, I, H, p, K, Dq), r._29O(g, Dq, D)), (g = r._38o) && r._99O(i, I, g, H, p, D), S && Vb(i, I.uBrightness, 1)
            },
            validate: function () { },
            _16O: function () {
                return mb
            },
            _80o: function () { },
            dispose: function () { },
            getBodyColor: function (f) {
                var E = this.data,
                    s = this.gv.getBodyColor(E);
                return s ? s : f ? E.getStyle(f) : V
            },
            _24O: function (e, D) {
                var f = this,
                    c = f.data,
                    O = f.gv,
                    Z = f.s,
                    w = O[D](c);
                if (w != V) {
                    var g = Z(e + ".scale"),
                        R = Z(e + ".max"),
                        x = f[e + "Info"] = {
                            label: w,
                            textureScale: Z(e + ".texture.scale"),
                            color: O[D + "Color"](c),
                            font: Z(e + ".font"),
                            align: Z(e + ".align"),
                            background: O[D + "Background"](c)
                        },
                        G = x.rect = Rp(x, w);
                    R > 0 && R < G.width && (x.labelWidth = G.width, G.width = R), G.x = G.y = 0, G.width *= g, G.height *= g, x.mat = f._16O(Z(e + ".autorotate"), Z(e + ".position"), G, Z(e + ".face"), Z(e + ".t3"), Z(e + ".r3"), Z(e + ".rotationMode"));
                    var o = G.width / 2,
                        h = G.height / 2;
                    x.vs = new wq([-o, h, 0, -o, -h, 0, o, -h, 0, o, h, 0]), G.width /= g, G.height /= g
                }
            },
            _26O: function (x, c) {
                var d = this,
                    b = d.data,
                    v = d.gv,
                    S = d.s,
                    h = v[c](b);
                if (h != V) {
                    var s = S(x + ".scale"),
                        R = this[x + "Info"] = {
                            note: h,
                            textureScale: S(x + ".texture.scale"),
                            expanded: S(x + ".expanded"),
                            font: S(x + ".font"),
                            color: S(x + ".color"),
                            align: S(x + ".align"),
                            borderWidth: S(x + ".border.width"),
                            borderColor: S(x + ".border.color"),
                            background: v[c + "Background"](b)
                        };
                    if (R.expanded) {
                        var z = S(x + ".max"),
                            O = Rp(R, h);
                        O.width += 6, O.height += 2, z > 0 && z < O.width && (R.labelWidth = O.width, O.width = z);
                        var H = {
                            x: -O.width / 2,
                            y: -8 - O.height,
                            width: O.width,
                            height: O.height + 8
                        }
                    } else H = {
                        x: -6,
                        y: -18,
                        width: 12,
                        height: 18
                    };
                    R.mat = d._16O(S(x + ".autorotate"), S(x + ".position"), V, S(x + ".face"), S(x + ".t3"), S(x + ".r3"), S(x + ".rotationMode")), R.rect = H, 1 !== s && (H = Zj(H), H.x *= s, H.height *= s, H.y = -H.height, H.width *= s);
                    var $ = H.x,
                        n = H.y,
                        G = H.width,
                        r = H.height;
                    R.vs = new wq([$, -n, 0, $, -n - r, 0, $ + G, -n - r, 0, $ + G, -n, 0])
                }
            },
            _28O: function (F, o, w) {
                if (w(this.s(o + ".transparent"))) {
                    var z = F.rect,
                        P = F.textureScale,
                        V = z.width * P,
                        H = z.height * P;
                    if (V >= 1 && H >= 1) {
                        var i = Tl(V, H);
                        1 !== P && (i.translate(i, z.x, z.y), i.scale(P, P), i.translate(i, -z.x, -z.y)), Wj(i, F), i.restore(), sl(this, o, F.mat, F.vs, !0)
                    }
                }
            },
            _29O: function (L, H, Q) {
                if (Q(this.s(H + ".transparent"))) {
                    var G = L.rect,
                        P = L.textureScale,
                        q = G.x,
                        e = G.y,
                        r = G.width * P,
                        n = G.height * P;
                    if (r >= 1 && n >= 1) {
                        G.x = G.y = 0;
                        var c = Tl(r, n);
                        1 !== P && c.scale(P, P), ti(c, L), c.restore(), G.x = q, G.y = e, sl(this, H, L.mat, L.vs, !1)
                    }
                }
            },
            _99O: function (G, C, m, I, k, X) {
                if (m) {
                    var q = this,
                        Y = q.gv,
                        t = q.data,
                        f = Y._buffer,
                        K = Y._1O,
                        E = m.icons;
                    for (var R in E) {
                        var A = E[R],
                            z = m.rects[R];
                        if (z && X(Pk(A.transparent, t, Y))) {
                            Xi(G, C, I, k, t, R);
                            var W = Pk(A.shape3d, t, Y),
                                Q = W ? [W] : Pk(A.names, t, Y),
                                x = Q ? Q.length : 0,
                                n = Pk(A.textureScale, t, Y) || 1,
                                P = Pk(A.light, t, Y);
                            P == V && (P = W ? !0 : !1), wd(G, C, Pk(A.blend, t, Y), P, Pk(A.opacity, t, Y), Pk(A.reverseFlip, t, Y), Pk(A.reverseColor, t, Y), Pk(A.reverseCull, t, Y));
                            for (var g = 0; x > g; g++) {
                                var N = Q[g],
                                    v = z[g];
                                if ($c(q, v.mat), W) _j(Y, t, fe(q.s, W), q.s);
                                else {
                                    var r = Bg(N);
                                    if (r) {
                                        var a = v.width * n,
                                            o = v.height * n;
                                        if (a >= 1 && o >= 1) {
                                            var i = Tl(a, o);
                                            qp(i, r, Pk(A.stretch, t, Y), 0, 0, a, o, t, Y), i.restore(), bn(G, ph, K), pm(G, C, K, Pk(A.discardSelectable, t, Y), f.uv, He), te(G, f.vs, v.vs, C.aPosition), te(G, f.ns, Ho, C.aNormal), bk(G, f.is, Km), Eq(G, 0, Km.length), fo(G, C, K)
                                        }
                                    }
                                }
                                Fl(Y)
                            }
                            dj(G, C)
                        }
                    }
                }
            }
        });
        var Qh = function (y, A) {
            fi(Qh, this, [y, A])
        };
        Ui(Qh, Zg, {
            _16O: function (F, m, b, u, e, t, Z, v, P) {
                var D = this.data,
                    j = Lp(m, D.s3(), b, u, v, P);
                return Dj(vj(), j, D.p3(), u, e, t, Z, F, D.r3(), D.getRotationMode())
            },
            clear: function () {
                var B = this;
                B.faceMat = B.mat = B.shapeModel = B.left = B.right = B.front = B.back = B.top = B.bottom = B.csg = V
            },
            validate: function (M, v) {
                var I = this,
                    A = I.gv,
                    u = I.data,
                    d = fe(I.s),
                    i = Jl(u, A.getMat(u), d ? I.s("shape3d.scaleable") : !0);
                if (I.clear(), M) {
                    var r = [];
                    d ? sg(A, u, d, I.s, I.getBodyColor(), [i], M, r) : (Al(A, u, M, v, i, Sd, r, Cc), Al(A, u, M, v, i, yn, r, Sk), Al(A, u, M, v, i, lp, r, Bq), Al(A, u, M, v, i, ih, r, kh), Al(A, u, M, v, i, F, r, Eb), Al(A, u, M, v, i, Fg, r, ls)), r.length && (Of(M.vs, r), Of(M.ns, th(r)))
                } else I.mat = i, (I.shapeModel = d) || (I.vf(Sd), I.vf(yn), I.vf(F), I.vf(Fg), I.vf(lp), I.vf(ih))
            },
            vf: function (M) {
                var b = this;
                if (b.gv.getFaceVisible(b.data, M)) {
                    var T = Cp(b, M);
                    return T.mat && (b.faceMat = !0), T
                }
            },
            _80o: function (f, B, t) {
                var H = this,
                    w = H.gv,
                    y = H.data,
                    u = w._cube,
                    k = H.shapeModel;
                Si(w, H.mat), k ? _j(w, y, k, H.s, H.getBodyColor(), t) : (te(f, u.vs, V, B.aPosition), te(f, u.ns, V, B.aNormal), bk(f, u.is), H._18O(f, B, H.left, 0, t), H._18O(f, B, H.front, 6, t), H._18O(f, B, H.right, 12, t), H._18O(f, B, H.back, 18, t), H._18O(f, B, H.top, 24, t), H._18O(f, B, H.bottom, 30, t)), Fl(w), H.faceMat && (H._18O(f, B, H.left, 0, t, !0), H._18O(f, B, H.front, 6, t, !0), H._18O(f, B, H.right, 12, t, !0), H._18O(f, B, H.back, 18, t, !0), H._18O(f, B, H.top, 24, t, !0), H._18O(f, B, H.bottom, 30, t, !0))
            },
            _18O: function (k, a, P, I, K, w) {
                if (P) {
                    if (!K(P.transparent)) return;
                    if (w && !P.mat || !w && P.mat) return;
                    w && Si(this.gv, P.mat);
                    var X = this,
                        m = X.data,
                        Y = X.gv,
                        d = Y.getTexture(P.texture, m),
                        $ = P.uv,
                        g = P.uvScale,
                        D = P.uvOffset,
                        f = P.discardSelectable;
                    if (d)
                        if ($) {
                            for (var o = 8 * (I / 6), T = 0; 8 > T; T++) wi[o + T] = $[T];
                            pm(k, a, d, f, Y._buffer.uv, wi, D, g)
                        } else pm(k, a, d, f, Y._cube.uv, V, D, g);
                    wd(k, a, P.blend, P.light, P.opacity, P.reverseFlip, P.reverseColor, P.reverseCull), Vb(k, a.uDiffuse, P.color), Eq(k, I, 6), dj(k, a), fo(k, a, d), w && Fl(Y)
                }
            }
        });
        var Uc = function (j, B) {
            fi(Uc, this, [j, B])
        };
        Ui(Uc, Zg, {
            _25Q: 1,
            validate: function (y) {
                var G = this,
                    F = G.gv,
                    X = G.data,
                    n = G.s,
                    z = n("edge.width"),
                    d = X._40I,
                    c = X._41I;
                if (G.shapeModel = G.info = V, d && c) {
                    var Q, U, o, O, N, s, R, f, W, A, K = X.isLooped(),
                        C = n(zl),
                        L = r.getEdgeType(C);
                    if (L) {
                        var l = L(X, sd(G, F, X, K, C), F, G._19Q);
                        if (!l.points || l.points.isEmpty()) return;
                        s = G.info = {}, R = l.segments, N = l.points, f = N.size();
                        for (var Z = d.getElevation(), u = c.getElevation(), Y = 0; f > Y; Y++) {
                            var $ = N.get(Y);
                            $.e == V && ($.e = Z + (u - Z) * Y / (f - 1))
                        }
                        W = Bo(N.get(0)), A = Bo(N.get(f - 1));
                        var T = f % 2;
                        0 === T ? (s.c1 = Bo(N.get(f / 2 - 1)), s.c2 = Bo(N.get(f / 2))) : s.p3 = Bo(N.get((f - T) / 2)), s.s1 = W, s.s2 = Bo(N.get(1)), s.t1 = Bo(N.get(f - 2)), s.t2 = A
                    } else {
                        N = new Io, s = G.info = {};
                        var b = n("edge.offset"),
                            B = n("edge.center"),
                            _ = n("edge.source.t3"),
                            t = n("edge.target.t3"),
                            a = d.p3(),
                            v = c.p3();
                        if (_ && (a[0] += _[0], a[1] += _[1], a[2] += _[2]), t && (v[0] += t[0], v[1] += t[1], v[2] += t[2]), C === Lf) {
                            R = n("edge.segments");
                            var k = s.points = n(jh) || nm;
                            if (f = k.size()) {
                                W = Bo(k.get(0)), A = Bo(k.get(f - 1)), !B && b && (o = Zn(W, a, !0), b = J(b, md(a, W)), a = [a[0] + o[0] * b, a[1] + o[1] * b, a[2] + o[2] * b], o = Zn(v, A, !0), b = J(b, md(A, v)), v = [v[0] - o[0] * b, v[1] - o[1] * b, v[2] - o[2] * b]);
                                var T = f % 2;
                                0 === T ? (Q = Bo(k.get(f / 2 - 1)), U = Bo(k.get(f / 2))) : s.p3 = Bo(k.get((f - T) / 2)), s.s1 = a, s.s2 = W, s.t1 = A, s.t2 = v
                            } else !B && b && (o = Zn(v, a, !0), O = md(a, v), b = vq(b, O), a = [a[0] + o[0] * b, a[1] + o[1] * b, a[2] + o[2] * b], v = [v[0] - o[0] * b, v[1] - o[1] * b, v[2] - o[2] * b]), Q = a, U = v;
                            N.add({
                                x: a[0],
                                y: a[2],
                                e: a[1]
                            }), N.addAll(k), N.add({
                                x: v[0],
                                y: v[2],
                                e: v[1]
                            })
                        } else {
                            var H = sd(G, F, X, K, C);
                            if (G._19Q || (H = -H), K) {
                                var w = a[0],
                                    h = a[1],
                                    j = a[2],
                                    P = d.getTall() / 2 + H;
                                Q = [w - H, h + P, j], U = [w + H, h + P, j], N.add({
                                    x: w - H,
                                    y: j,
                                    e: h
                                }), N.add({
                                    x: w - H,
                                    y: j,
                                    e: h + P
                                }), N.add({
                                    x: w + H,
                                    y: j,
                                    e: h + P
                                }), N.add({
                                    x: w + H,
                                    y: j,
                                    e: h
                                })
                            } else {
                                o = Zn(v, a, !0), O = md(a, v);
                                var p = {
                                    x: a[0],
                                    y: a[2]
                                },
                                    S = {
                                        x: v[0],
                                        y: v[2]
                                    },
                                    q = Ve(V, p, S, H),
                                    D = q.x - p.x,
                                    e = q.y - p.y;
                                b = vq(b, O), o[0] *= b, o[1] *= b, o[2] *= b, Q = [a[0] + o[0] + D, a[1] + o[1], a[2] + o[2] + e], U = [v[0] - o[0] + D, v[1] - o[1], v[2] - o[2] + e], B ? (N.add({
                                    x: a[0],
                                    y: a[2],
                                    e: a[1]
                                }), N.add({
                                    x: Q[0],
                                    y: Q[2],
                                    e: Q[1]
                                }), N.add({
                                    x: U[0],
                                    y: U[2],
                                    e: U[1]
                                }), N.add({
                                    x: v[0],
                                    y: v[2],
                                    e: v[1]
                                })) : (N.add({
                                    x: Q[0],
                                    y: Q[2],
                                    e: Q[1]
                                }), N.add({
                                    x: U[0],
                                    y: U[2],
                                    e: U[1]
                                }))
                            }
                        }
                        s.c1 = Q, s.c2 = U
                    }
                    s.list = n(yj) === Pj ? G.createTubeModel(N, R, z / 2, y) : G.createLineModel(N, R, z, "edge", "edge.dash")
                }
            }
        });
        var Th = function (M, P) {
            fi(Th, this, [M, P])
        };
        Ui(Th, Qh, {
            _80o: function (c, m, T) {
                var G = this,
                    L = G.gv,
                    y = G.shapeModel;
                Si(L, G.mat), y ? _j(L, G.data, y, G.s, G.getBodyColor(), T) : (ts(G, c, m, G.left, T), ts(G, c, m, G.front, T), ts(G, c, m, G.right, T), ts(G, c, m, G.back, T), ts(G, c, m, G.top, T), ts(G, c, m, G.bottom, T)), Fl(L)
            },
            validate: function (d, v) {
                var t, u, Z = this,
                    c = Z.s,
                    U = Z.data,
                    $ = U.p3(),
                    S = U._thickness / 2,
                    J = U.isClosePath(),
                    p = U.getPoints(),
                    D = U.getSegments(),
                    s = c(Uq),
                    e = d && d.uv;
                if (Z.clear(), 0 > S) u = Z.shapeModel = ol(p, D, c($j), c(pd), s, c(Rr), U.getTall(), U.getElevation(), J), c(Jb) ? c("shape3d.image") || delete u.uv : (delete u.vs, delete u.ns, delete u.uv), c("shape3d.top.image") || delete u.top_uv, c("shape3d.bottom.image") || delete u.bottom_uv;
                else if (c(yj) === Pj) t = km(p, D, s, J), u = Z.shapeModel = {
                    vs: []
                }, c("shape3d.image") && (u.uv = [], u.sum = c(Rr) || Rh(t) || 1, u.len = 0), c($j) && !J && (u.top_vs = [], c("shape3d.top.image") && (u.top_uv = [])), c(pd) && !J && (u.bottom_vs = [], c("shape3d.bottom.image") && (u.bottom_uv = [])), Z._12O(t, S);
                else {
                    var E, I, T, h, C, w, X, k, L, b;
                    t = km(p, D, s, J), C = Z.vf(F, e, !1, v), S && (w = Z.vf(Fg, e, !1, v), X = J ? V : Z.vf(Sd, e, !1, v), k = J ? V : Z.vf(yn, e, !1, v), L = Z.vf(lp, e, !1, v), b = Z.vf(ih, e, !1, v)), S ? Z._12O(t, S) : C && t.forEach(function (r) {
                        if (h = r.length, h > 0)
                            for (E = r[0], T = 1; h > T; T++) I = r[T], Z.addV(C.vs, E, I), E = I
                    }), Z._20Q(t), d || (C && (C.ns = th(C.vs), tj(C, "vs"), tj(C, Ci)), S && (w && (w.ns = th(w.vs), tj(w, "vs"), tj(w, Ci)), X && (X.ns = th(X.vs), tj(X, "vs"), tj(X, Ci)), k && (k.ns = th(k.vs), tj(k, "vs"), tj(k, Ci)), L && (L.ns = th(L.vs), tj(L, "vs"), tj(L, Ci)), b && (b.ns = th(b.vs), tj(b, "vs"), tj(b, Ci))))
                }
                var x = Z.mat = vj();
                Fn(x, $), Ej(x, U.r3(), U.getRotationMode()), Fn(x, Gj($)), d && (me(Z, x, d, u), Z.clear())
            },
            _20Q: function (s) {
                var G, E, n, w, X, r, o, q = this,
                    x = q.front,
                    i = q.back,
                    B = q.top,
                    O = q.bottom,
                    $ = x ? x.tuv : V,
                    P = i ? i.tuv : V,
                    H = B ? B.tuv : V,
                    A = O ? O.tuv : V,
                    J = 0;
                ($ || P || H || A) && (G = q.s(Rr) || Rh(s) || 1, s.forEach(function (A) {
                    if (E = A.length, E > 0)
                        for (r = A[0], n = 1; E > n; n++) o = A[n], w = J / G, J += md(r, o), X = J / G, q._14O(x, w, X), q._14O(i, 1 - X, 1 - w), q._14O(B, w, X), q._14O(O, w, X), r = o
                }))
            },
            _14O: function (s, V, T) {
                if (s) {
                    var H = s.uv,
                        K = s.tuv;
                    if (K) {
                        if (H) var o = H[0] + (H[6] - H[0]) * V,
                            O = H[1] + (H[7] - H[1]) * V,
                            v = H[2] + (H[4] - H[2]) * V,
                            k = H[3] + (H[5] - H[3]) * V,
                            d = H[2] + (H[4] - H[2]) * T,
                            X = H[3] + (H[5] - H[3]) * T,
                            C = H[0] + (H[6] - H[0]) * T,
                            b = H[1] + (H[7] - H[1]) * T;
                        else o = V, O = 0, v = V, k = 1, d = T, X = 1, C = T, b = 0;
                        K.push(v, k, d, X, C, b, C, b, o, O, v, k)
                    }
                }
            },
            _13O: function (I) {
                var T = I.uv,
                    G = I.tuv;
                G && (T ? G.push(T[2], T[3], T[4], T[5], T[6], T[7], T[6], T[7], T[0], T[1], T[2], T[3]) : G.push(0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1))
            },
            _12O: function (w, Z) {
                var c, a, u, h, Q, j = this;
                w.forEach(function (e) {
                    if (Q = e.length, Q > 0)
                        for (c = {
                            p: e[0],
                            n: !0
                        }, h = 1; Q > h; h++) a = e[h], u = Q - 1 > h ? e[h + 1] : V, j.addPoint(c, a, u, Z, e)
                })
            },
            addPoint: function (d, s, K, e, R) {
                var Z, w, C, N, U, W, q, g, o, b = this,
                    B = d.p,
                    z = d.f,
                    l = d.b,
                    j = b.s("shape3d.side") || Ur,
                    E = b.s("shape3d.start.angle"),
                    h = b.shapeModel,
                    Y = b.data.isClosePath();
                if (d.n && (d.n = !1, z = Y && R.length > 2 ? Ve(R[R.length - 2], B, s, e) : Ve(V, B, s, e), l = As(B, z), h ? h.top_vs && b._10O(l, z, j, E, h.top_vs, h.top_uv) : (Z = b.left) && (b.addV(Z.vs, l, z), b._13O(Z))), w = K ? Ve(B, s, K, e) : Y && R.length > 2 ? Ve(B, s, R[1], e) : Ve(B, s, V, e), C = As(s, w), h) {
                    var r, G, T = h.vs,
                        c = h.uv,
                        p = h.sum;
                    for (c && (r = h.len / p, h.len += md(B, s), G = h.len / p), W = b._9O(l, z, j, E), q = b._9O(C, w, j, E), g = 0; j > g; g++) o = g + 1, Of(T, W[o]), Of(T, q[g]), Of(T, W[g]), Of(T, q[g]), Of(T, W[o]), Of(T, q[o]), c && (N = g / j, U = o / j, c.push(r, U, G, N, r, N, G, N, r, U, G, U));
                    !K && h.bottom_vs && b._10O(C, w, j, E, h.bottom_vs, h.bottom_uv, !0)
                } else !K && (Z = b.right) && (b.addV(Z.vs, w, C), b._13O(Z)), (Z = b.front) && b.addV(Z.vs, z, w), (Z = b.back) && b.addV(Z.vs, C, l), (Z = b.top) && b.addH(Z.vs, z, w, C, l, !0), (Z = b.bottom) && b.addH(Z.vs, l, C, w, z);
                d.p = s, d.f = w, d.b = C
            },
            _10O: function (Q, u, y, k, Y, B, o) {
                var j, l, c = this,
                    J = c.data,
                    s = c._9O(Q, u, y, k),
                    T = (Q.x + u.x) / 2,
                    M = (Q.y + u.y) / 2,
                    O = J.getElevation(),
                    a = 0;
                for (a = 0; y > a; a++) o ? (Of(Y, s[a]), Of(Y, s[a + 1])) : (Of(Y, s[a + 1]), Of(Y, s[a])), Of(Y, [T, O, M]), B && (o ? (j = X * (a + 1) / y + k, l = X * a / y + k) : (j = X * a / y + k, l = X * (a + 1) / y + k), B.push(.5 - .5 * A(l), .5 - .5 * N(l), .5 - .5 * A(j), .5 - .5 * N(j), .5, .5))
            },
            _9O: function (P, c, Q, V) {
                for (var B, H, r = this, F = r.data, p = [], i = (P.x + c.x) / 2, x = (P.y + c.y) / 2, $ = F.getTall() / 2, g = F.getElevation(), b = 0; Q >= b; b++) B = X * b / Q + V, H = A(B), p.push([i + (P.x - i) * H, g + $ * N(B), x + (P.y - x) * H]);
                return p
            },
            addV: function (H, c, O) {
                var p = c.x,
                    f = c.y,
                    P = O.x,
                    h = O.y,
                    w = this.data,
                    V = w.getElevation(),
                    d = w.getTall() / 2;
                H.push(p, V - d, f, P, V - d, h, P, V + d, h, P, V + d, h, p, V + d, f, p, V - d, f)
            },
            addH: function (K, y, i, z, k, L) {
                var M = this.data,
                    f = M.getTall() / 2,
                    D = M.getElevation() + (L ? f : -f);
                K.push(y.x, D, y.y, i.x, D, i.y, z.x, D, z.y, z.x, D, z.y, k.x, D, k.y, y.x, D, y.y)
            },
            vf: function (o, k, n, w) {
                var N, Z = this,
                    v = Z.gv.getFaceVisible(Z.data, o);
                return (n || v) && (N = Cp(Z, o, w), N.vs = [], N.tuv = v && (N.texture || k) ? [] : V, N.visible = v), N
            }
        });
        var Sp = function (o, d) {
            fi(Sp, this, [o, d])
        };
        Ui(Sp, Zg, {
            _25Q: 1,
            validate: function (L) {
                var s = this,
                    A = s.data,
                    K = s.s,
                    d = A.getPoints(),
                    $ = d.size();
                if (s.shapeModel = s.info = V, $ > 1) {
                    var x = s.info = {},
                        G = A.getSegments(),
                        h = A.getThickness(),
                        c = Bo(d.get(0)),
                        Y = Bo(d.get($ - 1)),
                        I = $ % 2;
                    0 === I ? (x.c1 = Bo(d.get($ / 2 - 1)), x.c2 = Bo(d.get($ / 2))) : x.p3 = Bo(d.get(($ - I) / 2)), x.s1 = c, x.s2 = Bo(d.get(1)), x.t1 = Bo(d.get($ - 2)), x.t2 = Y, x.list = K(yj) === Pj ? s.createTubeModel(d, G, h / 2, L) : s.createLineModel(d, G, h, "shape.border", "shape.dash")
                }
            }
        }), Zc(r, {
            accordionViewExpandIcon: Fk(Qe),
            accordionViewCollapseIcon: Fk(Qe, !0),
            accordionViewLabelColor: Ul,
            accordionViewLabelFont: Dp,
            accordionViewTitleBackground: $m,
            accordionViewSelectBackground: Ef,
            accordionViewSelectWidth: 3,
            accordionViewSeparatorColor: l,
            splitViewDividerSize: 1,
            splitViewDividerBackground: $m,
            splitViewDragOpacity: .5,
            splitViewToggleIcon: {
                width: 16,
                height: 16,
                comps: [{
                    type: Vn,
                    rect: [2, 2, 12, 12],
                    background: Qe
                }]
            },
            propertyViewLabelColor: Nb,
            propertyViewLabelSelectColor: Ul,
            propertyViewLabelFont: Dp,
            propertyViewExpandIcon: Fk(Me),
            propertyViewCollapseIcon: Fk(Me, !0),
            propertyViewBackground: Wo,
            propertyViewRowLineVisible: !0,
            propertyViewColumnLineVisible: !0,
            propertyViewRowLineColor: Kd,
            propertyViewColumnLineColor: Kd,
            propertyViewSelectBackground: Ef,
            listViewLabelColor: Nb,
            listViewLabelSelectColor: Ul,
            listViewLabelFont: Dp,
            listViewRowLineVisible: !1,
            listViewRowLineColor: Kd,
            listViewSelectBackground: Ef,
            treeViewLabelColor: Nb,
            treeViewLabelSelectColor: Ul,
            treeViewLabelFont: Dp,
            treeViewExpandIcon: Fk(ch),
            treeViewCollapseIcon: Fk(ch, !0),
            treeViewRowLineVisible: !1,
            treeViewRowLineColor: Kd,
            treeViewSelectBackground: Ef,
            tableViewLabelColor: Nb,
            tableViewLabelSelectColor: Ul,
            tableViewLabelFont: Dp,
            tableViewRowLineVisible: !0,
            tableViewColumnLineVisible: !0,
            tableViewRowLineColor: Kd,
            tableViewColumnLineColor: Kd,
            tableViewSelectBackground: Ef,
            treeTableViewLabelColor: Nb,
            treeTableViewLabelSelectColor: Ul,
            treeTableViewLabelFont: Dp,
            treeTableViewExpandIcon: Fk(ch),
            treeTableViewCollapseIcon: Fk(ch, !0),
            treeTableViewRowLineVisible: !0,
            treeTableViewColumnLineVisible: !0,
            treeTableViewRowLineColor: Kd,
            treeTableViewColumnLineColor: Kd,
            treeTableViewSelectBackground: Ef,
            tableHeaderLabelColor: Nb,
            tableHeaderLabelFont: Dp,
            tableHeaderColumnLineVisible: !0,
            tableHeaderColumnLineColor: ps,
            tableHeaderBackground: Wo,
            tableHeaderMoveBackground: El,
            tableHeaderInsertColor: Ef,
            tableHeaderSortDescIcon: bd(Me, !0),
            tableHeaderSortAscIcon: bd(Me),
            tabViewTabGap: 1,
            tabViewLabelColor: Ul,
            tabViewLabelFont: Dp,
            tabViewTabBackground: $m,
            tabViewSelectWidth: 3,
            tabViewSelectBackground: Ef,
            tabViewMoveBackground: El,
            tabViewInsertColor: Ef,
            toolbarLabelColor: Nb,
            toolbarLabelSelectColor: Ul,
            toolbarLabelFont: Dp,
            toolbarBackground: Wo,
            toolbarSelectBackground: Ef,
            toolbarItemGap: 8,
            toolbarSeparatorColor: pk
        }, !0);
        var ai = {
            translateX: 1,
            sortColumn: 1
        },
            mh = {
                sortable: 1,
                sortOrder: 1,
                sortFunc: 1
            },
            _k = {
                focusData: 1
            },
            No = {
                dataModel: 1,
                sortColumn: 1,
                sortFunc: 1,
                visibleFunc: 1,
                rootData: 1,
                rootVisible: 1
            },
            on = {
                dataModel: 1,
                sortFunc: 1,
                visibleFunc: 1,
                categorizable: 1
            },
            Kc = function (x, S) {
                S.add(x), x.hasChildren() && x.eachChild(function (P) {
                    Kc(P, S)
                })
            },
            Wr = function (e, v, a, O, Q, n, X, L, o, l, U) {
                var z, K = a.getValueType(),
                    N = a.getAlign();
                if (a.getEnumValues()) {
                    var f = a.toEnumLabel(v),
                        E = vl || 0,
                        A = 0,
                        J = n,
                        g = r.getTextSize(O, f).width;
                    return z = Bg(a.toEnumIcon(v)), z && (A = n + vl / 2, "center" === N ? A += (L - (E + g)) / 2 : "right" === N && (A = A + L - (E + g)), Ni(e, z, A, X + o / 2), J = A + vl / 2), f != V && (z ? ks(e, f, O, Q, J, X, L - (J - n), o) : ks(e, f, O, Q, n, X, L, o, N)), void 0
                }
                return v = a.formatValue(v), v != V ? K === Df ? (Sf(e, n, X, L, o, v), void 0) : K === vs || !K && vh(v) ? (z = Bg(v ? ng : ae), Ni(e, z, n + L / 2, X + o / 2, l, U), void 0) : (ks(e, v, O, Q, n, X, L, o, N), void 0) : void 0
            },
            Bl = function (H, e) {
                var Z = e.view,
                    N = Z.getDataModel().getHistoryManager(),
                    Q = $k(H),
                    p = e.column || e.property;
                N && N.beginInteraction(), e.editor = H, H.info = e, Z.setCurrentEditor(H), Z.getView().insertBefore(Q, Z._79O), Xe(H, e.editorRect), H.setFocus ? H.setFocus() : Jc(H), H.commitValue = function () {
                    H._17Q && (H = H._17Q), Z.setValue(e.data, p, H.getValue ? H.getValue() : H.value), H.close && H.close(), Kq(Q)
                }, p.onEditorCreated && p.onEditorCreated(e)
            },
            fk = function (T, d, j, B, t) {
                var x = Yq(T, j),
                    O = d.value,
                    f = d.view,
                    W = t.getValueType();
                return x.onblur = x.onchange = function () {
                    f.endEditing()
                }, "input" === T ? (O = t.formatValue(O), O != V && (x.value = O), x.onkeydown = function (J) {
                    Cr(J) && f.endEditing()
                }, (W === $q || W === ld) && x.addEventListener(zf, r.numberListener, !1)) : T === sp && B.forEach(function (b) {
                    var Y = document.createElement("option");
                    Y.innerHTML = t.toEnumLabel(b), Y.value = b, t.isEnumEqual(O, b) && (Y.selected = !0), yk(x, Y)
                }), Bl(x, d), x
            },
            Cs = o.widget = {},
            Te = function (z, Y, H) {
                Ui(L + ".widget." + z, Y, H)
            };
        Zc(hp, {
            ms_value: function (s) {
                s.getValue = function (E) {
                    var a = this.getItemById(E),
                        n = a.element;
                    return n ? n.getValue ? n.getValue() : n.value : a.selected
                }, s.setValue = function (T, o) {
                    var c = this.getItemById(T),
                        i = c.element;
                    i ? i.setValue ? i.setValue(o) : i.value = o : (c.selected = o, this.iv())
                }, s.v = function (b, M) {
                    var e = this;
                    if (2 === arguments.length) e.setValue(b, M);
                    else {
                        if (!bs(b)) return e.getValue(b);
                        for (var V in b) e.setValue(V, b[V])
                    }
                    return e
                }
            },
            _46o: function (X) {
                X._icon = V, X._accessType = V, X._valueType = V, X._editable = !1, X._batchEditable = !0, X._align = Sd, X._nullable = !0, X._emptiable = !1, X.setParent = Nq, X.formatValue = function (H) {
                    var M = this,
                        E = M._valueType;
                    if (M.getEnumValues()) return M.toEnumLabel(H);
                    if (E === vs) return !!H;
                    if (H != V) {
                        if (E === $q) return K(H);
                        if (_f(H)) return oj(H)
                    }
                    return H
                }, X.setEnum = function (x, K, O, G, Z, t) {
                    var g = this;
                    x && x.values && (G = x.editable, O = x.icons, K = x.labels, Z = x.strict, t = x.maxHeight, x = x.values), Vm(x) && (x = x._as), Vm(K) && (K = K._as), Vm(O) && (O = O._as), g._enumValues = x, g._enumLabels = K, g._enumIcons = O, g._enumEditable = G, g._enumStrict = Z == V ? !0 : Z, g._enumMaxHeight = t, x && x.length && _f(x[0]) && (g._valueType = ld), g.fp("enum", !1, !0)
                }, X.getEnumMaxHeight = function () {
                    return this._enumMaxHeight
                }, X.isEnumEditable = function () {
                    return this._enumEditable
                }, X.getEnumValues = function () {
                    return this._enumValues
                }, X.getEnumLabels = function () {
                    return this._enumLabels
                }, X.getEnumIcons = function () {
                    return this._enumIcons
                }, X.isEnumStrict = function () {
                    return this._enumStrict
                }, X.isEnumEqual = function (I, k) {
                    return this._enumStrict ? I === k : I == k
                }, X.toEnumLabel = function (e) {
                    var l = this,
                        B = l._enumValues,
                        b = l._enumLabels;
                    if (B && b)
                        for (var h = 0; h < B.length; h++)
                            if (l.isEnumEqual(e, B[h])) return b[h];
                    return e
                }, X.toEnumIcon = function (v) {
                    var h = this,
                        L = h._enumValues,
                        C = h._enumIcons;
                    if (L && C)
                        for (var n = 0; n < L.length; n++)
                            if (h.isEnumEqual(v, L[n])) return C[n];
                    return l
                }
            },
            _45o: function (q) {
                q._87o = function (B, k, H, $, U, K) {
                    if (B) {
                        var n = this,
                            i = n._90I,
                            R = Xh(1);
                        n._columnLineVisible && (U -= 1), n._rowLineVisible && (K -= 1), 0 >= U || 0 >= K || (n._90I || (i = n._90I = {}), i[k] || (i[k] = new Io), Xe(R, n.tx() + H, n.ty() + $, U, K), yk(R, B), n._view.insertBefore(R, n._79O), B.onParentAdded && B.onParentAdded(R), i[k].add(R))
                    }
                }, q._76o = function () {
                    var k = this,
                        j = k._90I;
                    if (j) {
                        for (var A in j) j[A].each(function (v) {
                            Kq(v)
                        });
                        delete k._90I
                    }
                }, q._77o = function (M) {
                    var X = this;
                    if (X._90I) {
                        var d = X._90I[M];
                        d && (d.each(function (d) {
                            Kq(d)
                        }), delete X._90I[M])
                    }
                }
            },
            _47o: function (b) {
                b.getValue = function (S, j) {
                    return j.getValue ? j.getValue(S, j, this) : jr(S, j.getAccessType(), j.getName())
                }, b.setValue = function (R, s, d) {
                    if (s.isEmptiable() || "" !== d || (d = l), s.isNullable() || d != V) {
                        var p = this,
                            E = s.getName(),
                            F = s.getAccessType(),
                            I = s.getValueType();
                        I === $q && Yp(d) ? d = m(d) : I === ld && Yp(d) ? d = parseFloat(d) : I === vs && Yp(d) && (d = "true" === d), p._batchEditable && s._batchEditable && p.isSelected(R) ? p.sm().each(function (k) {
                            s.setValue ? s.setValue(k, s, d, p) : Tp(k, F, E, d)
                        }) : s.setValue ? s.setValue(R, s, d, p) : Tp(R, F, E, d)
                    }
                }, b.setCurrentEditor = function (k) {
                    this.endEditing(), this._currentEditor = k, this.redraw()
                }, b.isEditing = function (H, z) {
                    var R = this,
                        l = R._currentEditor;
                    if (!l) return !1;
                    if (z) {
                        var F = l.info;
                        return F ? (F.column || F.property) === z && F.data === H : !1
                    }
                    return !0
                }, b.endEditing = function () {
                    var D = this,
                        d = D._currentEditor,
                        W = D.getDataModel().getHistoryManager();
                    d && (delete D._currentEditor, d.commitValue && d.commitValue(d.info), D.redraw(), W && W.endInteraction())
                }, b.beginEditing = function (j) {
                    this.endEditing();
                    var f = this,
                        p = j.column || j.property;
                    if (p.beginEditing) p.beginEditing(j);
                    else {
                        var Y = j.data,
                            i = j.value,
                            a = f.getSelectBackground(Y),
                            Q = p.getEnumValues(),
                            S = p.getSlider(),
                            O = p.getColorPicker();
                        if (S) {
                            var B = Qg(Cs.Slider, S);
                            return B.setValue(i), B.getView().onblur = function () {
                                f.endEditing()
                            }, B.isInstant() && (B.onValueChanged = function () {
                                f.setValue(Y, p, B.getValue())
                            }), Bl(B, j), void 0
                        }
                        if (O || p.getValueType() === Df) {
                            var U = Qg(Cs.ColorPicker, O);
                            return U.setValue(i), U.onClosed = function () {
                                f.endEditing()
                            }, U.isInstant() && (U.onValueChanged = function (r, _) {
                                f.setValue(Y, p, _)
                            }), Bl(U, j), U.open(), void 0
                        }
                        if (Q) {
                            if (Cs.ComboBox) {
                                var M = new Cs.ComboBox;
                                M.setValue(i), M.setValues(Q), M.setLabels(p.getEnumLabels()), M.setIcons(p.getEnumIcons()), M.setEditable(p.isEnumEditable()), M.setStrict(p.isEnumStrict()), M.setMaxHeight(p.getEnumMaxHeight()), M.onClosed = function () {
                                    f.endEditing()
                                }, Bl(M, j), M.open()
                            } else fk(sp, j, a, Q, p);
                            return
                        }
                        var y = p.getValueType();
                        if (y === vs || vh(i)) return f.setValue(Y, p, !i), void 0;
                        if (p.getItemEditor()) {
                            var $ = zg(p.getItemEditor()),
                                q = new $(Y, p, f, j),
                                u = q.getView();
                            return u._17Q = q, q.setValue(i), Kn(u), Bl(u, j), q.editBeginning && q.editBeginning(), void 0
                        }
                        fk("input", j, a, V, p)
                    }
                }
            },
            _44o: function (e) {
                e.init = function (V) {
                    var y = this,
                        j = y.th = new hh(V),
                        f = y._view = Xh(1);
                    y.tv = y._tableView = V, yk(f, j.getView()), yk(f, V.getView()), j.mp(function (e) {
                        e.property === Im && y.iv()
                    }), y.iv()
                }, e.getTableView = function () {
                    return this.tv
                }, e.getTableHeader = function () {
                    return this.th
                }, e.getDataModel = function () {
                    return this.tv.dm()
                }, e.getColumnModel = function () {
                    return this.tv.getColumnModel()
                }, e.setColumns = function (B) {
                    this.tv.setColumns(B)
                }, e.addColumns = function (q) {
                    this.tv.addColumns(q)
                }, e.endEditing = function () {
                    this.tv.endEditing()
                }, e.validateImpl = function () {
                    var f = this,
                        y = f.th,
                        V = rl(y),
                        c = {
                            x: 0,
                            y: 0,
                            width: f.getWidth(),
                            height: V
                        };
                    Xe(y, c), c.y = V, c.height = C(0, f.getHeight() - V), Xe(f.tv, c)
                }
            },
            ms_vs: function (o) {
                o._41o = function () {
                    return this._29I.height < this._59I
                }, o._43o = function () {
                    var s = this;
                    s._41o() && (s._58I || (k(function () {
                        s._94O()
                    }, pi), s.iv()), s._58I = new Date)
                }, o._94O = function () {
                    var D = this;
                    if (D._58I) {
                        var f = new Date;
                        f.getTime() - D._58I.getTime() >= pi ? (delete D._58I, D.iv()) : k(function () {
                            D._94O()
                        }, pi)
                    }
                }, o._93I = function () {
                    var Y = this,
                        S = Y._27I;
                    if (Y._58I || !Y._autoHideScrollBar) {
                        S || yk(Y._79O, S = Y._27I = Xh());
                        var c = Y._29I,
                            o = c.height,
                            v = Y._59I,
                            M = Y.getScrollBarSize(),
                            y = c.width - M - 2,
                            R = o * (-Y.ty() / v),
                            z = o * (o / v),
                            B = S.style;
                        v > o ? ($g > z && (R = R + z / 2 - $g / 2, 0 > R && (R = 0), R + $g > o && (R = o - $g), z = $g), B.visibility = ak, B.background = Y.getScrollBarColor(), B.borderRadius = M / 2 + Fb, Xe(S, y, R, M, z)) : B.visibility = wo
                    } else S && (S.style.visibility = wo)
                }
            },
            ms_hs: function (g) {
                g._40o = function () {
                    return this._29I.width < this._91I
                }, g._42o = function () {
                    var u = this;
                    u._40o() && (u._95O || (k(function () {
                        u._94I()
                    }, pi), u.iv()), u._95O = new Date)
                }, g._94I = function () {
                    var W = this;
                    if (W._95O) {
                        var p = new Date;
                        p.getTime() - W._95O.getTime() >= pi ? (delete W._95O, W.iv()) : k(function () {
                            W._94I()
                        }, pi)
                    }
                }, g._92I = function () {
                    var y = this,
                        L = y._28I;
                    if (y._95O || !y._autoHideScrollBar) {
                        L || yk(y._79O, L = y._28I = Xh());
                        var t = y._29I,
                            c = t.width,
                            v = y._91I,
                            m = y.getScrollBarSize(),
                            g = t.height - m - 2,
                            f = c * (-y.tx() / v),
                            a = c * (c / v),
                            n = L.style;
                        v > c ? ($g > a && (f = f + a / 2 - $g / 2, 0 > f && (f = 0), f + $g > c && (f = c - $g), a = $g), n.visibility = ak, n.background = y.getScrollBarColor(), n.borderRadius = m / 2 + Fb, Xe(L, f, g, a, m)) : n.visibility = wo
                    } else L && (L.style.visibility = wo)
                }
            }
        }), Ad(ng, Mf(16, 16, [{
            type: Uj,
            rect: [1, 1, 14, 14],
            background: Ef
        }, {
            type: Mb,
            rect: [1, 1, 14, 14],
            width: 1,
            color: lr
        }, {
            type: aq,
            points: [13, 3, 7, 12, 4, 8],
            borderWidth: 2,
            borderColor: "#FFF"
        }])), Ad(ae, Mf(16, 16, {
            type: Mb,
            rect: [1, 1, 14, 14],
            width: 1,
            color: lr
        })), Ad(Fh, Mf(16, 16, [{
            type: zi,
            rect: [2, 2, 12, 12],
            borderWidth: 1,
            borderColor: lr,
            background: "#FFF"
        }, {
            type: zi,
            rect: [4, 4, 8, 8],
            background: Ef
        }])), Ad(um, Mf(16, 16, {
            type: zi,
            rect: [2, 2, 12, 12],
            borderWidth: 1,
            borderColor: lr
        })), hp._15Q = function (X) {
            X._29I = Yd, X._59I = 0, X._91I = 0, X._5o = function (R) {
                var V = this;
                V._30I = new Io, V._rows = new Io, V._rowMap = {}, V._31I = 0, V._14I = 0, V._view = Xh(1), V._canvas = Qk(V._view), yk(V._view, V._79O = Xh()), V.dm(R ? R : new Kj)
            }, X.getCheckIcon = function (f) {
                var W = this.sm(),
                    N = W.co(f);
                return W.sg() ? Bg(N ? Fh : um) : Bg(N ? ng : ae)
            }, X.checkData = function (X) {
                var V = this.sm(),
                    O = V.co(X);
                V.sg() && O || (this._32o = 1, O ? V.rs(X) : V.as(X), delete this._32o)
            }, X.getDataAt = function (B) {
                B.target && (B = this.lp(B));
                var v = S(B.y / this._rowHeight),
                    D = this._rows;
                return 0 > v || v >= D.size() ? V : D.get(v)
            }, X.onDataDoubleClicked = function () { }, X.onDataClicked = function () { }, X.adjustTranslateX = function () {
                return 0
            }, X.adjustTranslateY = function (p) {
                var k = this.getHeight() - this._59I;
                return k > p && (p = k), p > 0 ? 0 : K(p)
            }, X.onPropertyChanged = function (m) {
                var j = this,
                    w = m.property;
                No[w] ? j.ivm() : _k[w] || j.redraw(), w === Gi ? j._42o() : w === jd && j._43o()
            }, X.getLabel = function (r) {
                return r.toLabel()
            }, X.getLabelFont = function () {
                return this._labelFont
            }, X.getLabelColor = function (A) {
                var M = this;
                if (M.isCheckMode()) {
                    if (M._focusData === A) return M._labelSelectColor
                } else if (M.isSelected(A)) return M._labelSelectColor;
                return M._labelColor
            }, X.getStartRowIndex = function () {
                return this._31I
            }, X.getEndRowIndex = function () {
                return this._14I
            }, X.getRowDatas = function () {
                return this._rows
            }, X.getRowIndex = function (E) {
                return this._rowMap[E._id]
            }, X.getRowSize = function () {
                return this._rows.size()
            }, X.getViewRect = function () {
                return Zj(this._29I)
            }, X.isVisible = function (v) {
                return this._visibleFunc ? this._visibleFunc(v) : !0
            }, X.getCurrentSortFunc = function () {
                return this._sortFunc
            }, X.setDataModel = function (L) {
                var o = this,
                    B = o._dataModel,
                    K = o._3o;
                B !== L && (B && (B.umm(o.handleDataModelChange, o), B.umd(o.handleDataPropertyChange, o), B.umh(o._15o, o), K || B.sm().ums(o._16o, o)), o._dataModel = L, L.mm(o.handleDataModelChange, o), L.md(o.handleDataPropertyChange, o), L.mh(o._15o, o), K ? K._21I(L) : L.sm().ms(o._16o, o), o.fp("dataModel", B, L))
            }, X.validateModel = function () {
                var N = this;
                N._rows.clear(), N._rowMap = {}, N.buildChildren(N._dataModel._roots);
                var c = N._rows = N._rows.toList(N.isVisible, N),
                    Y = 0,
                    Q = N.getCurrentSortFunc(),
                    h = c.size();
                for (Q && c.sort(Q) ; h > Y; Y++) N._rowMap[c.get(Y)._id] = Y
            }, X.buildChildren = function (K) {
                var N = this;
                K.each(function (x) {
                    N._rows.add(x), N.buildChildren(x._children)
                })
            }, X.handleDataModelChange = function () {
                this.ivm()
            }, X.handleDataPropertyChange = function (q) {
                "parent" === q.property ? this.ivm() : this.invalidateData(q.data)
            }, X._15o = function () {
                this.ivm()
            }, X._16o = function (p) {
                p.datas.each(this.invalidateData, this), this.onSelectionChanged(p)
            }, X.onSelectionChanged = function (j) {
                var K = this,
                    B = K.sm();
                !K.isAutoMakeVisible() || 1 !== B.size() || "set" !== j.kind && "append" !== j.kind || K._32o || K.makeVisible(B.ld())
            }, X.makeVisible = function (Y) {
                Y && (this._23I = Y, this.iv())
            }, X.scrollToIndex = function (j) {
                var Z = this,
                    U = Z._29I,
                    y = U.height,
                    T = Z._rowHeight,
                    K = T * j;
                j >= 0 && j < Z._rows.size() && y > 0 && (K + T > U.y + y ? Z.ty(-K + y - T) : K < U.y && Z.ty(-K))
            }, X.ivm = function () {
                this.invalidateModel()
            }, X.invalidateModel = function () {
                var k = this;
                k._96I || (k._96I = 1, k._32I = 1, delete k._24I, k.iv())
            }, X.redraw = function () {
                var n = this;
                n._32I || (n._32I = 1, delete n._24I, n.iv())
            }, X.invalidateData = function (l) {
                var d = this;
                g ? d.redraw() : d._32I || (d._24I || (d._24I = {}), d._24I[l._id] = l, d.iv())
            }, X.getFocusData = function () {
                return this._focusData
            }, X.setFocusDataById = function (U) {
                this.setFocusData(this.dm().getDataById(U))
            }, X.setFocusData = function (E) {
                var i = this,
                    q = i._focusData;
                q !== E && (i._focusData = E, i.fp("focusData", q, E), q && i.invalidateData(q), E && (i.invalidateData(E), i.isAutoMakeVisible() && i.makeVisible(E)))
            }, X.drawRowBackground = function (w, A, t, z, f, D, Q) {
                var B = this,
                    $ = B.isCheckMode();
                (A === B._focusData && $ || t && !$) && Sf(w, z, f, D, Q, B.getSelectBackground(A))
            }, X.drawData = function (W, j, X) {
                var x = this,
                    v = x._rowHeight,
                    g = v * X,
                    Y = x._29I,
                    G = Y.x,
                    d = Y.width;
                W.save(), W.beginPath(), W.rect(G, g, d, v), W.clip(), x._87o(x.drawRow(W, j, x.isSelected(j), G, g, d, v), X, G, g, d, v), W.restore(), x._rowLineVisible && Sf(W, G, g + v - 1, d, 1, x._rowLineColor)
            }, X._12I = function (b) {
                var G = this,
                    K = G._31I,
                    J = G._29I,
                    U = J.x,
                    W = J.y,
                    i = J.width,
                    X = J.height;
                for (b.beginPath(), b.rect(U, W, i, X), b.clip(), b.clearRect(U, W, i, X), G._76o(), G._93db(b) ; K < G._14I; K++) G.drawData(b, G._rows.get(K), K);
                G._92db(b)
            }, X._13I = function (m) {
                for (var r, o = this, T = o._rowHeight, j = o._29I, i = j.x, E = j.width, _ = o._31I, D = o._30I; _ < o._14I; _++) r = o._rows.get(_), o._24I[r._id] && D.add({
                    data: r,
                    index: _
                });
                D.isEmpty() || (m.beginPath(), D.each(function (X) {
                    m.rect(i, X.index * T, E, T)
                }), m.clip(), D.each(function (l) {
                    m.clearRect(i, l.index * T, E, T)
                }), D.each(function (C) {
                    o._77o(C.index)
                }), o._93db(m), D.each(function (t) {
                    o.drawData(m, t.data, t.index)
                }), o._92db(m), D.clear())
            }, X.validateImpl = function () {
                var r = this,
                    y = r._canvas,
                    I = r.getWidth(),
                    b = r.getHeight(),
                    z = r._rowHeight,
                    R = r._32I;
                (I !== y.clientWidth || b !== y.clientHeight) && (Qq(y, I, b), R = 1);
                var s = Z && !u;
                r._96I && !s && r.validateModel();
                var d = r._29I,
                    _ = {
                        x: -r.tx(),
                        y: -r.ty(),
                        width: I,
                        height: b
                    },
                    e = r._rows.size(),
                    C = Gg(y),
                    q = r._23I;
                R || ue(_, d) || (R = 1), r._29I = _, r._59I = e * z, r._31I = S(_.y / z), r._14I = n((_.y + _.height) / z), r._31I < 0 && (r._31I = 0), r._14I > e && (r._14I = e), r._99I && R && r._99I(), yf(C, r.tx(), r.ty(), 1), R ? r._12I(C) : r._24I && r._13I(C), r._93I(), r._92I(), C.restore(), r._32I = r._24I = r._96I = V, q && (r.scrollToIndex(r.getRowIndex(q)), delete r._23I), r.tx(r.tx()), r.ty(r.ty())
            }
        }, hp._48o = function (G) {
            G._rootVisible = !0, G._rootData = V, G._35o = function () {
                this._expandMap = {}, this._levelMap = {}
            }, G.validateModel = function () {
                var T = this,
                    i = T._rootData;
                T._rows.clear(), T._levelMap = {}, T._rowMap = {}, T._currentLevel = 0, i ? T._rootVisible ? T.isVisible(i) && T.buildData(i) : T.buildChildren(i) : T.buildChildren(), delete T._currentLevel
            }, G.buildData = function (X) {
                var v = this,
                    o = X._id,
                    i = v._rows;
                v._rowMap[o] = i.size(), i.add(X), v._levelMap[o] = v._currentLevel, v.isExpanded(X) && (v._currentLevel++, v.buildChildren(X), v._currentLevel--)
            }, G.buildChildren = function (k) {
                var w = this,
                    x = k ? k._children : w._dataModel._roots,
                    F = w.getCurrentSortFunc();
                F && w.isChildrenSortable(k) ? x.toList(w.isVisible, w).sort(F).each(w.buildData, w) : x.each(function (W) {
                    w.isVisible(W) && w.buildData(W)
                })
            }, G.getLevel = function (X) {
                return this._levelMap[X._id]
            }, G.getToggleIcon = function (H) {
                var y = this,
                    u = y._loader,
                    b = y._collapseIcon;
                return u && !u.isLoaded(H) ? b : H.hasChildren() ? y.isExpanded(H) ? y._expandIcon : b : V
            }, G.isCheckMode = function () {
                return this._checkMode != V
            }, G.isChildrenSortable = function () {
                return !0
            }, G.handleDataModelChange = function (T) {
                var s = this;
                T.kind === ok ? delete s._expandMap[T.data._id] : T.kind === Be && (s._expandMap = {}), s.ivm()
            }, G.toggle = function (Q) {
                var d = this;
                d.isExpanded(Q) ? d.collapse(Q) : d.expand(Q)
            }, G.isExpanded = function (T) {
                return 1 === this._expandMap[T._id]
            }, G.expand = function (D) {
                var W = this,
                    y = W._loader;
                W.isExpanded(D) || (y && !y.isLoaded(D) && y.load(D), W._expandMap[D._id] = 1, W.ivm(), W.onExpanded(D))
            }, G.onExpanded = function () { }, G.collapse = function (X) {
                var p = this;
                p.isExpanded(X) && (delete p._expandMap[X._id], p.ivm(), p.onCollapsed(X))
            }, G.onCollapsed = function () { }, G.expandAll = function () {
                var p = this;
                p._dataModel.each(function (u) {
                    u.hasChildren() && (p._expandMap[u._id] = 1)
                }), p.ivm()
            }, G.collapseAll = function () {
                this._expandMap = {}, this.ivm()
            }, G.makeVisible = function (j) {
                if (j) {
                    var O = this;
                    if (!O._rootData || j.isDescendantOf(O._rootData)) {
                        for (var a = j._parent; a;) O.expand(a), a = a._parent;
                        O._23I = j, O.iv()
                    }
                }
            }, G.checkData = function (H) {
                var J, K = this,
                    c = K._checkMode,
                    a = K.sm(),
                    M = a.co(H);
                if (!a.sg() || !M) {
                    if (K._32o = 1, c === v) M ? a.rs(H) : a.as(H);
                    else if (c === Zp) J = new Io(H), J.addAll(H._children);
                    else if ("descendant" === c) J = new Io, Kc(H, J);
                    else if ("all" === c && (J = new Io, Kc(H, J), !M))
                        for (var C = H._parent; C;) J.add(C), C = C._parent;
                    J && (M ? a.rs(J) : a.as(J)), delete K._32o
                }
            }, G._97I = function (C, T, J, q, U, X, M) {
                var F = this,
                    x = F._indent,
                    R = F._levelMap[T._id],
                    b = F.getIconWidth(T),
                    i = Bg(F.getToggleIcon(T));
                i ? (q += x * R, Ni(C, i, q + x / 2, U + M / 2, T, F), q += x) : q += x * (R + 1), F._checkMode && (Ni(C, F.getCheckIcon(T), q + x / 2, U + M / 2, T, F), q += x), F.drawIcon(C, T, q, U, b, M), F.drawLabel(C, T, q + b, U, M)
            }
        }, hp._14Q = function (N) {
            N.getIcon = function (C) {
                return C.getIcon()
            }, N.getIconWidth = function (R) {
                return this.getIcon(R) ? this._indent : 0
            }, N.drawIcon = function (k, d, R, t, L, D) {
                if (L) {
                    var m = this,
                        g = m.getBodyColor(d),
                        n = Bg(m.getIcon(d), g);
                    n && (D -= m.isRowLineVisible() ? 1 : 0, qp(k, n, Pg, R, t, L, D, d, m, g), Jf(k, m.getBorderColor(d), R, t, L, D))
                }
            }, N.drawLabel = function (v, L, w, X, b) {
                var B = this;
                ks(v, B.getLabel(L), B.getLabelFont(L), B.getLabelColor(L), w, X, 0, b)
            }
        }, hp._50o = function (b) {
            b._98I = function () {
                var x = this,
                    d = x._39o = new Kj;
                x._60I = new Io, d.mm(x._17o, x), d.md(x._18o, x), d.mh(x._19o, x)
            }, b.setColumns = function (U) {
                this._39o.clear(), this.addColumns(U)
            }, b.addColumns = function (Q) {
                var y = this._39o;
                Q.forEach(function (Z) {
                    if (!(Z instanceof Fm)) {
                        var k = zg(Z.className);
                        Z = Qg(k ? k : Fm, Z)
                    }
                    y.add(Z)
                })
            }, b.onColumnClicked = function () { }, b.onCheckColumnClicked = function () { }, b._3Q = function (N) {
                for (var v, Z = 0, p = this._60I, h = p.size() ; h > Z; Z++)
                    if (v = p.get(Z), v.column === N) return v;
                return V
            }, b.getColumnAt = function (Z) {
                var q = this._4Q(Z);
                return q ? q.column : V
            }, b._4Q = function (h) {
                for (var i = this, t = h.target ? i.lp(h).x : h.x, K = i._60I, Z = 0; Z < K.size() ; Z++) {
                    var y = K.get(Z),
                        w = y.startX;
                    if (t >= w && t < w + y.column.getWidth()) return y
                }
                return V
            }, b.getToolTip = function (a) {
                var i = this,
                    I = i.getDataAt(a),
                    w = i.getColumnAt(a);
                return I && w ? w.getToolTip(I, i) : V
            }, b.adjustTranslateX = function (X) {
                var U = this.getWidth() - this._91I;
                return U > X && (X = U), X > 0 ? 0 : K(X)
            }, b._99I = function () {
                var v = this,
                    B = v._29I,
                    S = v._60I;
                S.clear(), v._91I = 0, v._39o._roots.each(function (i) {
                    if (i.isVisible()) {
                        var Y = v._91I + i.getWidth();
                        v._91I <= B.x + B.width && Y >= B.x && S.add({
                            column: i,
                            startX: v._91I
                        }), v._91I = Y
                    }
                })
            }, b.drawData = function (D, U, u) {
                var t = this,
                    j = t._rowHeight,
                    Y = j * u,
                    d = t.isSelected(U),
                    k = t._29I,
                    x = k.x,
                    P = k.width;
                t.drawRowBackground(D, U, d, x, Y, P, j), t._60I.each(function (K) {
                    var B = K.column,
                        T = K.startX,
                        $ = B.getWidth();
                    $ > 0 && !t.isEditing(U, B) && (D.save(), D.beginPath(), D.rect(T, Y, $, j), D.clip(), t._87o(t.drawCell(D, U, d, B, T, Y, $, j), u, T, Y, $, j), t._columnLineVisible && Sf(D, T + $ - 1, Y, 1, j, t._columnLineColor), D.restore())
                }), t._rowLineVisible && Sf(D, x, Y + j - 1, P, 1, t._rowLineColor)
            }, b.drawCell = function (B, D, i, u, P, V, C, M) {
                var Y = this;
                if (u.drawCell) return u.drawCell(B, D, i, u, P, V, C, M, Y);
                var U = Y.getValue(D, u);
                Wr(B, U, u, Y.getLabelFont(D, u, U), Y.getLabelColor(D, u, U), P, V, C, M, D, Y)
            }, b.getColumnModel = function () {
                return this._39o
            }, b._17o = function () {
                this.redraw()
            }, b._18o = function (d) {
                var i = this;
                d.data === i._sortColumn && mh[d.property] ? i.ivm() : (i._42o(), i.redraw())
            }, b._19o = function () {
                this.redraw()
            }, b.getCurrentSortFunc = function () {
                var Y = this,
                    b = Y._sortColumn;
                if (b && b.isSortable()) {
                    var o = b.getSortFunc(),
                        L = vo === b.getSortOrder() ? 1 : -1;
                    return o || (o = Zr),
                        function (z, C) {
                            return o.call(Y, Y.getValue(z, b), Y.getValue(C, b), z, C) * L
                        }
                }
                return Y._sortFunc
            }, b.isCellEditable = function (O, Z) {
                return Z.isEditable() && this.isEditable()
            }, b._37O = function (K, q) {
                if (De(q))
                    for (var B = this, C = B.lp(q), d = B._60I, I = B._rowHeight, y = B._29I, g = y.x, n = y.y, z = y.width, r = y.height, Q = 0; Q < d.size() ; Q++) {
                        var O = d.get(Q),
                            v = O.startX,
                            E = O.column,
                            S = E.getWidth();
                        if (E !== B._31o && E !== B._4o && B.isCellEditable(K, E) && C.x >= v && C.x < v + S) {
                            var i = {
                                x: v,
                                y: B.getRowIndex(K) * I,
                                width: S,
                                height: I
                            },
                                u = {
                                    x: i.x + B.tx(),
                                    y: i.y + B.ty(),
                                    width: i.width,
                                    height: i.height
                                },
                                R = 0,
                                T = 0;
                            return i.x < g ? R = i.x - g : i.x + i.width > g + z && (R = i.x + i.width - g - z), R && (B.tx(B.tx() - R), u.x -= R), i.y < n ? T = i.y - n : i.y + I > n + r && (T = i.y + I - n - r), T && (B.ty(B.ty() - T), u.y -= T), B.beginEditing({
                                data: K,
                                column: E,
                                value: B.getValue(K, E),
                                event: q,
                                rect: i,
                                editorRect: u,
                                view: B
                            }), void 0
                        }
                    }
            }
        }, Cs.BaseItemEditor = function (t, G, c, I) {
            this._data = t, this._column = G, this._master = c, this._editInfo = I
        }, Te("BaseItemEditor", w, {
            ms_ac: ["data", "column", "master", "editInfo"],
            editBeginning: function () { },
            getView: function () { },
            getValue: function () { },
            setValue: function () { }
        });
        var qo = o.Tab = function () {
            fi(qo, this)
        };
        am("Tab", Fi, {
            ms_ac: ["view", "closable", "disabled"],
            _icon: V,
            _closable: !1,
            _disabled: !1,
            setParent: Nq
        });
        var Fm = o.Column = function () {
            fi(Fm, this)
        };
        am("Column", Fi, {
            _46o: 1,
            ms_ac: ["accessType", "valueType", ak, Nl, Cg, Xq, "align", Df, "sortOrder", de, "sortable", "nullable", "emptiable", "slider", "colorPicker", "itemEditor"],
            _visible: !0,
            _width: 80,
            _sortOrder: vo,
            _sortFunc: V,
            _sortable: !0,
            setWidth: function (L) {
                16 > L && (L = 16);
                var m = this._width;
                this._width = L, this.fp(Xq, m, L)
            },
            getToolTip: function (f, q) {
                return this.formatValue(q.getValue(f, this))
            }
        });
        var nq = o.Property = function () {
            fi(nq, this)
        };
        am("Property", Fi, {
            _46o: 1,
            ms_ac: ["accessType", "valueType", Nl, Cg, "categoryName", Df, "align", "nullable", "emptiable", "slider", "itemEditor", "colorPicker"],
            _categoryName: V,
            getToolTip: function (T, U, i) {
                var d = this;
                return U ? d.formatValue(i.getValue(T, d)) : i.getPropertyName(d)
            }
        }), Cs.AccordionView = function () {
            var m = this;
            m._20o = {}, m._21o = new Io, m._10o = V, m._9o = V, m._11o = V, m._view = Xh(), m.iv()
        }, Te("AccordionView", w, {
            ms_v: 1,
            ms_fire: 1,
            ms_ac: [Cd, il, "titleHeight", Ok, td, "titleBackground", "selectWidth", tg, "orientation", "separatorColor"],
            _expandIcon: r.accordionViewExpandIcon,
            _collapseIcon: r.accordionViewCollapseIcon,
            _titleHeight: Wn,
            _labelColor: r.accordionViewLabelColor,
            _labelFont: r.accordionViewLabelFont,
            _titleBackground: r.accordionViewTitleBackground,
            _selectBackground: r.accordionViewSelectBackground,
            _selectWidth: r.accordionViewSelectWidth,
            _orientation: "v",
            _separatorColor: r.accordionViewSeparatorColor,
            onPropertyChanged: function () {
                this.iv()
            },
            getView: function () {
                return this._view
            },
            getTitles: function () {
                return this._21o
            },
            getCurrentTitle: function () {
                return this._10o
            },
            add: function (S, F, n, T) {
                var L = this,
                    i = Xh();
                if (L._20o[S]) throw S + " already exists";
                i.onmousedown = Mh, i.style.cursor = ri, i.addEventListener(e ? so : Hm, function (s) {
                    Mh(s)
                }, !1), i.addEventListener(e ? gh : Bh, function (n) {
                    Mh(n), De(n) && (L._10o === S ? L.collapse() : L.expand(S))
                }, !1), yk(L._view, i), L._20o[S] = {
                    content: F,
                    div: i,
                    canvas: Qk(i),
                    icon: T
                }, L._21o.add(S), n && L.expand(S), L.iv()
            },
            remove: function (U) {
                var L = this,
                    z = L._20o[U];
                z && (Kq(z.div), delete L._20o[U], L._21o.remove(U), L.iv())
            },
            clear: function () {
                var I = this;
                I._20o = {}, I._21o.clear(), I.iv()
            },
            isExpanded: function (E) {
                return this._10o === E
            },
            expand: function (f) {
                var O = this;
                O._20o[f] && O._10o !== f && (O._10o = f, O.onExpanded(f), O.iv())
            },
            onExpanded: function () { },
            collapse: function () {
                var R = this;
                R._10o && (R.onCollapsed(R._10o), delete R._10o, R.iv())
            },
            onCollapsed: function () { },
            initCanvas: function (G, q, i) {
                Qq(G, q, i);
                var P = Gg(G);
                return yf(P, 0, 0, 1), P.clearRect(0, 0, q, i), P
            },
            drawTitle: function (e, R, c, O, _) {
                var g = this,
                    p = Bg(_.icon),
                    z = g.isExpanded(R),
                    S = g._titleHeight,
                    G = g._titleBackground,
                    X = g._selectWidth,
                    d = g._separatorColor,
                    q = Bg(z ? g._expandIcon : g._collapseIcon),
                    f = X + 4;
                Sf(e, 0, 0, c, O, G), z && X && Sf(e, 0, 0, X, O, g._selectBackground), (z || g._21o.get(g._21o.size() - 1) !== R) && Sf(e, 0, O - 1, c, 1, d ? d : Mc(G)), p && (Ni(e, p, f + Vk(p) / 2, S / 2), f += Vk(p) + 2), ks(e, R, g.getLabelFont(R), g.getLabelColor(R), f, 0, 0, S), q && Ni(e, q, c - Vk(q) / 2 - 4, S / 2)
            },
            validateImpl: function () {
                var s = this,
                    h = s._view,
                    R = 0,
                    D = 0,
                    P = s.getWidth(),
                    S = s.getHeight(),
                    z = s._titleHeight,
                    j = s._21o.size() * z,
                    y = s._11o,
                    G = s._9o;
                delete s._11o, delete s._9o, s._21o.each(function (x) {
                    var f, _, y = s._20o[x],
                        X = y.content,
                        L = s._10o === x;
                    ui(s) ? (Xe(y.div, R, 0, z, S), f = s.initCanvas(y.canvas, z, S), Ze(f, 0, S), Cj(f, -q), s.drawTitle(f, x, S, z, y), f.restore(), L ? (_ = C(0, P - j), X && (s._11o = X, s._9o = $k(X), Xe(X, R + z, 0, _, S)), R += z + _) : R += z) : (Xe(y.div, 0, D, P, z), f = s.initCanvas(y.canvas, P, z), s.drawTitle(f, x, P, z, y), f.restore(), L ? (_ = C(0, S - j), X && (s._11o = X, s._9o = $k(X), Xe(X, 0, D + z, P, _)), D += z + _) : D += z)
                });
                var w = s._9o;
                y && y !== s._11o && y.endEditing && y.endEditing(), w && w !== G && yk(h, w), G && G !== w && Kq(G)
            }
        }), Cs.SplitView = function (z, g, S, k) {
            var D = this,
                L = D._dividerDiv = Xh(),
                x = D._60O = Qk(),
                h = D._61O = Qk(),
                B = x.style,
                P = h.style;
            D._view = Xh(1), yk(D._view, L), B.msTouchAction = tm, B.pointerEvents = tm, B.cursor = ri, P.msTouchAction = tm, P.pointerEvents = tm, P.cursor = ri, z && D.setLeftView(z), g && D.setRightView(g), S && D.setOrientation(S), k != V && D.setPosition(k), D.setStatus(yp), new tl(D)
        }, Te("SplitView", w, {
            ms_v: 1,
            ms_fire: 1,
            ms_ac: ["dividerSize", "dividerBackground", "toggleIcon", "togglable", "dragOpacity", "orientation", "draggable", "status"],
            _position: .5,
            _togglable: !0,
            _orientation: "h",
            _draggable: !0,
            _dividerSize: r.splitViewDividerSize,
            _dividerBackground: r.splitViewDividerBackground,
            _dragOpacity: r.splitViewDragOpacity,
            _toggleIcon: r.splitViewToggleIcon,
            onPropertyChanged: function () {
                this.iv()
            },
            getDividerDiv: function () {
                return this._dividerDiv
            },
            getPosition: function () {
                return this._position
            },
            setPosition: function (W, f) {
                var d = this,
                    y = d._position;
                isNaN(W) || (f || (d._82O = 0 > W ? -1 : W > 1 ? 1 : 0), d._position = W, d.fp(Kk, y, W))
            },
            getLeftView: function () {
                return this._leftView
            },
            setLeftView: function (T) {
                var t = this,
                    R = t._leftView,
                    Q = t._view;
                if (t._leftView !== T) {
                    if (R && R !== t._rightView) {
                        var i = $k(R);
                        i.parentNode === Q && Kq(i)
                    }
                    if (t._leftView = T, T) {
                        var J = $k(T);
                        J.parentNode !== Q && Q.insertBefore(J, t._dividerDiv)
                    }
                    t.fp("leftView", R, T)
                }
            },
            getRightView: function () {
                return this._rightView
            },
            setRightView: function (d) {
                var $ = this,
                    K = $._rightView,
                    D = $._view;
                if ($._rightView !== d) {
                    if (K && K !== $._leftView) {
                        var n = $k(K);
                        n.parentNode === D && Kq(n)
                    }
                    if ($._rightView = d, d) {
                        var c = $k(d);
                        c.parentNode !== D && D.insertBefore(c, $._dividerDiv)
                    }
                    $.fp("rightView", K, d)
                }
            },
            validateImpl: function () {
                var n = this,
                    Y = n._draggable,
                    s = n._position,
                    A = n.getWidth(),
                    L = n.getHeight(),
                    Z = n._dividerSize,
                    T = n._dividerBackground,
                    R = e ? 18 : 8,
                    J = n._dividerDiv,
                    N = n._82O,
                    t = n._60O,
                    V = n._61O,
                    D = n._toggleIcon,
                    B = n._status,
                    m = J.style,
                    G = null,
                    S = e ? 20 : 4,
                    h = D.comps[0];
                Z >= R || 0 === Z ? n._coverDiv && (Kq(n._coverDiv), delete n._coverDiv) : n._coverDiv || (n._coverDiv = Xh(), $ && (n._coverDiv.style.background = qd), yk(J, n._coverDiv)), n._togglable ? t.parentNode || (yk(J, t), yk(J, V)) : (Kq(t), Kq(V));
                var j = n._coverDiv,
                    H = n._leftView,
                    i = n._rightView;
                if (ui(n)) {
                    if (Z > A && (Z = A), B === yp)
                        if (1 === N) var F = s,
                            O = C(0, A - Z - F);
                        else -1 === N ? (O = -s, F = C(0, A - Z - O)) : (F = K((A - Z) * s), O = C(0, A - Z - F));
                    else "cl" === B ? (F = 0, O = C(0, A - Z)) : "cr" === B && (O = 0, F = C(0, A - Z));
                    H && Xe(H, 0, 0, F, L), i && Xe(i, F + Z, 0, O, L), Xe(J, F, 0, Z, L), n._22o = F, j && (Xe(j, Z / 2 - R / 2, 0, R, L), j.style.cursor = Y ? Eg : ""), J.style.cursor = Y ? Eg : "";
                    var g = J.clientHeight / 2,
                        I = J.clientWidth;
                    Qq(t, I, I), Xe(t, 0, g - I - S, I, I), G = Gg(t), yf(G, 0, 0, 1), h.rotation = -q, Ko(G, D, 0, 0, I, I), G.restore(), Qq(V, I, I), Xe(V, 0, g + S, I, I), G = Gg(V), yf(G, 0, 0, 1), h.rotation = q, Ko(G, D, 0, 0, I, I), G.restore()
                } else {
                    if (Z > L && (Z = L), B === yp)
                        if (1 === N) var k = s,
                            o = C(0, L - Z - k);
                        else -1 === N ? (o = -s, k = C(0, L - Z - o)) : (k = K((L - Z) * s), o = C(0, L - Z - k));
                    else "cl" === B ? (k = 0, o = C(0, L - Z)) : "cr" === B && (o = 0, k = C(0, L - Z));
                    H && Xe(H, 0, 0, A, k), i && Xe(i, 0, k + Z, A, o), Xe(J, 0, k, A, Z), n._22o = k, j && (Xe(j, 0, Z / 2 - R / 2, A, R), j.style.cursor = Y ? qq : ""), m.cursor = Y ? qq : "";
                    var b = J.clientWidth / 2,
                        I = J.clientHeight;
                    Qq(t, I, I), Xe(t, b - I - S, 0, I, I), G = Gg(t), yf(G, 0, 0, 1), h.rotation = 0, Ko(G, D, 0, 0, I, I), G.restore(), Qq(V, I, I), Xe(V, b + S, 0, I, I), G = Gg(V), yf(G, 0, 0, 1), h.rotation = y, Ko(G, D, 0, 0, I, I), G.restore()
                }
                m.background = T
            }
        });
        var tl = function (e) {
            this.sv = e, this.addListeners()
        };
        Ui(tl, w, {
            ms_listener: 1,
            getView: function () {
                return this.sv.getView()
            },
            handle_touchstart: function (j) {
                var w = this,
                    s = w.sv,
                    U = s._dividerDiv,
                    Z = s._60O,
                    i = s._61O,
                    o = s._status,
                    T = j.target;
                if (T === Z) o === yp ? s.setStatus("cl") : "cr" === o && s.setStatus(yp);
                else if (T === i) o === yp ? s.setStatus("cr") : "cl" === o && s.setStatus(yp);
                else if (hn(j) && (T === U || T === s._coverDiv) && (Mh(j), s.isDraggable())) {
                    w.resizeDiv = Xh();
                    var n = w.resizeDiv.style,
                        h = U.style,
                        b = s.getLeftView(),
                        C = s.getRightView();
                    w._maskViews = [], [b, C].forEach(function (C) {
                        C = C.getView ? C.getView() : C;
                        var n = Xh(),
                            $ = n.style;
                        $.left = C.style.left, $.top = C.style.top, $.width = C.offsetWidth + "px", $.height = C.offsetHeight + "px", s.getView().appendChild(n), w._maskViews.push(n)
                    }), n.left = h.left, n.top = h.top, n.width = h.width, n.height = h.height, n.opacity = s.getDragOpacity(), n.background = s.getDividerBackground(), w._85o = w._86o = ui(s) ? Li(j).x : Li(j).y, yk(w.getView(), w.resizeDiv), w._clientPoint = Li(j), Le(w, j)
                }
            },
            handleWindowTouchMove: function (R) {
                if (hn(R)) {
                    var L = this,
                        U = L.sv,
                        J = U._dividerSize,
                        K = L.resizeDiv.style,
                        n = U.getWidth(),
                        N = U.getHeight(),
                        g = U._22o - L._86o;
                    ui(U) ? (L._85o = Li(R).x, g += L._85o, g > n - J && (g = n - J), 0 > g && (g = 0), K.left = g + Fb) : (L._85o = Li(R).y, g += L._85o, g > N - J && (g = N - J), 0 > g && (g = 0), K.top = g + Fb)
                }
            },
            handleWindowTouchEnd: function (k) {
                var f = this,
                    q = f.sv,
                    l = q._22o - f._86o + f._85o,
                    A = q._dividerSize,
                    L = ui(q) ? q.getWidth() : q.getHeight(),
                    _ = q._82O,
                    b = md(f._clientPoint, Li(k));
                b > 1 && (q.setStatus(yp), 0 > l && (l = 0), l > L - A && (l = L - A), L !== A && (1 === _ ? q.setPosition(l, 1) : -1 === _ ? q.setPosition(l - L + A, 1) : q.setPosition(l / (L - A), 1))), f._maskViews && f._maskViews.forEach(function (t) {
                    Kq(t)
                }), Kq(f.resizeDiv), f.resizeDiv = f._85o = f._clientPoint = V
            },
            handle_mousedown: function (q) {
                De(q) && this.handle_touchstart(q)
            },
            handleWindowMouseMove: function (O) {
                this.handleWindowTouchMove(O)
            },
            handleWindowMouseUp: function (b) {
                this.handleWindowTouchEnd(b)
            }
        }), Cs.TabView = function () {
            var b = this,
                I = b._view = Xh(1),
                v = b._91O = Xh(1),
                Z = b._tabModel = new Kj,
                w = Z.sm(),
                j = b.invalidate;
            b._7o = new Io, b._canvas = Qk(v), yk(I, v), yk(I, b._92O = Xh(1)), w.setSelectionMode(_), w.ms(j, b), Z.mm(j, b), Z.md(j, b), Z.mh(j, b), new xp(b), b.iv()
        }, Te("TabView", w, {
            ms_v: 1,
            ms_fire: 1,
            ms_tx: 1,
            ms_ty: 1,
            ms_lp: 1,
            ms_ac: ["movable", "tabGap", "tabHeight", "tabPosition", Ok, td, "tabBackground", "selectWidth", tg, "moveBackground", "insertColor"],
            _tabPosition: lp,
            _tabHeight: Wn,
            _tabGap: r.tabViewTabGap,
            _labelColor: r.tabViewLabelColor,
            _labelFont: r.tabViewLabelFont,
            _tabBackground: r.tabViewTabBackground,
            _selectWidth: r.tabViewSelectWidth,
            _selectBackground: r.tabViewSelectBackground,
            _moveBackground: r.tabViewMoveBackground,
            _insertColor: r.tabViewInsertColor,
            _movable: !0,
            getContentDiv: function () {
                return this._92O
            },
            getTitleDiv: function () {
                return this._91O
            },
            getTabModel: function () {
                return this._tabModel
            },
            add: function (U, P, D) {
                var f = new qo,
                    k = this._tabModel;
                return f.setName(U), f.setView(P), k.add(f), D && k.sm().ss(f), f
            },
            getLabel: function (P) {
                return P.toLabel()
            },
            onPropertyChanged: function () {
                this.iv()
            },
            _7Q: function (G) {
                this._23o = G, this.iv()
            },
            get: function (w) {
                var s = this,
                    z = s._tabModel;
                if (_f(w)) return z._roots.get(w);
                if (Yp(w)) {
                    var R;
                    return z.each(function (X) {
                        w === s.getLabel(X) && (R = X)
                    }), R
                }
                return w instanceof qo ? w : V
            },
            select: function (d) {
                this._tabModel.sm().ss(this.get(d))
            },
            remove: function (x) {
                var m = this;
                if (x = m.get(x)) {
                    var q = m._tabModel,
                        L = q._roots.indexOf(x);
                    m._tabModel.remove(x), m._12Q(--L)
                }
            },
            getCurrentTab: function () {
                return this._8o
            },
            hideTabView: function (z, l) {
                l.parentNode === this._92O && (og(l) ? (l.style.display = uk, l._tab_ = z) : Kq(l), Ij())
            },
            showTabView: function (A, c) {
                og(c) && (c.style.display = "block", c._tab_ = A), c.parentNode !== this._92O && (yk(this._92O, c), Ij())
            },
            _24o: function () {
                var M, f = this,
                    V = f._8o,
                    p = f._9o,
                    U = f._tabModel.sm().ld();
                U && (M = $k(U.getView())), M !== p && (p && (V.getView().endEditing && V.getView().endEditing(), f.hideTabView(V, p)), M && f.showTabView(U, M)), f._8o = U, f._9o = M, V !== U && f.onTabChanged(V, U)
            },
            onTabChanged: function () { },
            onTabClosed: function (f, b) {
                this._12Q(--b)
            },
            _12Q: function (F) {
                var C = this,
                    q = C._tabModel,
                    x = q.size();
                if (x && !q.sm().ld()) {
                    F == V && (F = 0), F >= x && (F = x - 1), 0 > F && (F = 0);
                    for (var N = F; N >= 0; N--) {
                        var g = C.get(N);
                        if (!g.isDisabled()) return C.select(g), g
                    }
                    for (N = F + 1; x > N; N++)
                        if (g = C.get(N), !g.isDisabled()) return C.select(g), g
                }
            },
            _9Q: function (M) {
                var g = 4,
                    S = Bg(M.getIcon());
                S && (g += Vk(S, M) + 4);
                var n = this.getLabel(M);
                return n && (g += vr(this.getLabelFont(M), n).width + 4), M.isClosable() && (g += 10), g
            },
            _10Q: function (J, K, g, m, b, $, e) {
                var O, D = this,
                    S = D._tabPosition,
                    F = g + 4,
                    N = D._selectWidth,
                    r = Bg(K.getIcon()),
                    _ = K.isDisabled(),
                    V = D.getLabelColor(K),
                    U = D.getLabelFont(K),
                    p = D.getLabel(K),
                    w = D._selectBackground,
                    o = S === Sd + "-vertical",
                    n = S === yn + "-vertical";
                (o || n) && (F = m + 4), _ && (J.globalAlpha = _m), Sf(J, g, m, b, $, e), K === D._8o && N && (S === lp ? Sf(J, g, m + $ - N, b, N, w) : S === Sd ? Sf(J, g + b - N, m, N, $, w) : S === yn ? Sf(J, g, m, N, $, w) : o ? Sf(J, g + b - N, m, N, $, w) : n ? Sf(J, g, m, N, $, w) : Sf(J, g, m, b, N, w));
                var L = b / 2;
                if (o && (Ze(J, L, m + $ / 2), Cj(J, y), Ze(J, -L, -m - $ / 2)), r) {
                    var M = dd(r, K),
                        s = Vk(r, K);
                    if (o || n) {
                        var E = g + b / 2,
                            P = F + M / 2;
                        Ze(J, E, P), Cj(J, q), Ze(J, -E, -P), Ni(J, r, g + b / 2, F + M / 2, K, D), Ze(J, E, P), Cj(J, -q), Ze(J, -E, -P), F += M + 4
                    } else Ni(J, r, F + s / 2, m + $ / 2, K, D), F += s + 4
                }
                return o || n ? (Ze(J, b / 2, F + b / 2), Cj(J, q), Ze(J, -b / 2, -F - b / 2), ks(J, p, U, V, g, F, $, b), Ze(J, b / 2, F + b / 2), Cj(J, -q), Ze(J, -b / 2, -F - b / 2)) : ks(J, p, U, V, F, m, b, $), o && (Ze(J, L, m + $ / 2), Cj(J, -y), Ze(J, -L, -m - $ / 2)), K.isClosable() && (J.strokeStyle = V, J.lineWidth = 1, J.beginPath(), n ? (J.moveTo(g + b - 10, m + $ - 4), J.lineTo(g + b - 4, m + $ - 10), J.moveTo(g + b - 4, m + $ - 4), J.lineTo(g + b - 10, m + $ - 10), J.stroke(), O = {
                    x: g + b - 12,
                    y: m + $ - 12,
                    width: 12,
                    height: 12
                }) : (J.moveTo(g + b - 10, m + 4), J.lineTo(g + b - 4, m + 10), J.moveTo(g + b - 4, m + 4), J.lineTo(g + b - 10, m + 10), J.stroke(), O = {
                    x: g + b - 12,
                    y: m,
                    width: 12,
                    height: 12
                })), _ && (J.globalAlpha = 1), O
            },
            validateImpl: function () {
                var G = this;
                G._24o();
                var L, c = G._canvas,
                    d = G._tabPosition,
                    l = G._91O,
                    z = G._92O,
                    e = G._tabModel,
                    o = G.getWidth(),
                    P = G.getHeight(),
                    w = G._tabHeight,
                    f = G._7o,
                    F = G._tabGap,
                    J = d === lp,
                    y = d === Sd,
                    p = d === ih,
                    H = d === yn,
                    X = d === Sd + "-vertical",
                    r = d === yn + "-vertical",
                    O = G._23o,
                    A = 0;
                if ((y || H) && e._roots.each(function (H) {
                        A = C(G._9Q(H), A)
                }), J ? (Xe(l, 0, 0, o, w), L = {
                    x: 0,
                    y: w,
                    width: o,
                    height: C(0, P - w)
                }) : y ? (Xe(l, 0, 0, A, P), L = {
                    x: A,
                    y: 0,
                    width: C(0, o - A),
                    height: P
                }) : H ? (Xe(l, o - A, 0, A, P), L = {
                    x: 0,
                    y: 0,
                    width: C(0, o - A),
                    height: P
                }) : X ? (Xe(l, 0, 0, w, P), L = {
                    x: w,
                    y: 0,
                    width: C(0, o - w),
                    height: P
                }) : r ? (Xe(l, o - w, 0, w, P), L = {
                    x: 0,
                    y: 0,
                    width: C(0, o - w),
                    height: P
                }) : (Xe(l, 0, P - w, o, w), L = {
                    x: 0,
                    y: 0,
                    width: o,
                    height: C(0, P - w)
                }), Xe(z, L), X || r) {
                    G._9o && (L.x = 0, Xe(G._8o.getView(), L)), Qq(c, w, P);
                    var Z = Gg(c),
                        i = 0;
                    if (yf(Z, 0, G.ty(), 1), Z.clearRect(0, 0, w, P), f.clear(), e._roots.each(function ($) {
                            var L, a = G._9Q($);
                            O && O.tab === $ || (L = G._10Q(Z, $, 0, i, w, a, G._tabBackground), L && r && (L.x = o - 12)), f.add({
                        _75o: L,
                        tab: $,
                        startY: i,
                        endY: i + a,
                        height: a
                    }), i += a + F
                    }), G._23Q = C(0, i - F), O) {
                        var R = O.position;
                        G._10Q(Z, O.tab, 0, O.startY, w, O.height, G._moveBackground), Sf(Z, 0, R, w, 1, G._insertColor)
                    }
                    Z.restore(), G.ty(G.ty())
                } else if (y || H) {
                    G._9o && (L.x = 0, Xe(G._8o.getView(), L)), Qq(c, A, P);
                    var Z = Gg(c),
                        i = 0;
                    if (yf(Z, 0, G.ty(), 1), Z.clearRect(0, 0, A, P), f.clear(), e._roots.each(function (T) {
                            var s;
                            O && O.tab === T || (s = G._10Q(Z, T, 0, i, A, w, G._tabBackground), s && H && (s.x = o - 12)), f.add({
                        _75o: s,
                        tab: T,
                        startY: i,
                        endY: i + w,
                        height: w
                    }), i += w + F
                    }), G._23Q = C(0, i - F), O) {
                        var R = O.position;
                        G._10Q(Z, O.tab, 0, O.startY, A, O.height, G._moveBackground), Sf(Z, 0, R, A, 1, G._insertColor)
                    }
                    Z.restore(), G.ty(G.ty())
                } else {
                    G._9o && (L.y = 0, Xe(G._8o.getView(), L)), Qq(c, o, w);
                    var Z = Gg(c),
                        h = 0;
                    if (yf(Z, G.tx(), 0, 1), Z.clearRect(0, 0, o, w), f.clear(), e._roots.each(function (g) {
                            var X, Y = G._9Q(g);
                            O && O.tab === g || (X = G._10Q(Z, g, h, 0, Y, w, G._tabBackground), X && p && (X.y = P - w)), f.add({
                        _75o: X,
                        tab: g,
                        startX: h,
                        endX: h + Y,
                        width: Y
                    }), h += Y + F
                    }), G._64I = C(0, h - F), O) {
                        var R = O.position;
                        G._10Q(Z, O.tab, O.startX, 0, O.width, w, G._moveBackground), Sr(Z, G._insertColor, R, 0, w)
                    }
                    Z.restore(), G.tx(G.tx())
                }
                for (var j = [], U = z.children, s = 0; s < U.length; s++) {
                    var b = U[s],
                        B = b._tab_;
                    B && !e.contains(B) && j.push(b)
                }
                j.forEach(function (G) {
                    z.removeChild(G)
                })
            }
        });
        var xp = function (C) {
            this.tv = C, this.addListeners()
        };
        Ui(xp, w, {
            ms_listener: 1,
            getView: function () {
                return this.tv._91O
            },
            handle_mousewheel: function (e) {
                this.handleScroll(e, 10 * (e.wheelDelta / 40))
            },
            handle_DOMMouseScroll: function (A) {
                this.handleScroll(A, 10 * -A.detail)
            },
            handleScroll: function (r, H) {
                Mh(r);
                var s = this.tv,
                    t = s._tabPosition;
                !s._40o() || t !== lp && t !== ih || s.tx(this.tv.tx() + H), !s._41o() || t !== Sd && t !== yn && t !== Sd + "-vertical" && t !== yn + "-vertical" || s.ty(this.tv.ty() + H)
            },
            _8Q: function (z) {
                var R, U, G = this.tv,
                    j = G._tabPosition,
                    H = G._7o;
                if (j === lp || j === ih) {
                    var x = G.lp(z).x;
                    for (R = 0; R < H.size() ; R++)
                        if (U = H.get(R), U.startX <= x && x <= U.endX) return U
                } else if (j === Sd || j === yn || j === Sd + "-vertical" || j === yn + "-vertical") {
                    var y = G.lp(z).y;
                    for (R = 0; R < H.size() ; R++)
                        if (U = H.get(R), U.startY <= y && y <= U.endY) return U
                }
                return V
            },
            isClickable: function (e) {
                var K = this.tv,
                    s = K._tabPosition,
                    f = this._73o = this._8Q(e);
                return !K._40o() || s !== lp && s !== ih ? !K._41o() || s !== Sd && s !== yn && s !== Sd + "-vertical" && s !== yn + "-vertical" ? f && (!f.tab.isDisabled() || K.isMovable()) : !0 : !0
            },
            handle_mousemove: function (R) {
                var _ = this;
                _h ? _._74o = _._8Q(R) : _.getView().style.cursor = _.isClickable(R) ? ri : ""
            },
            handle_mousedown: function (Z) {
                this.handle_mousemove(Z), this.handle_touchstart(Z)
            },
            handle_touchstart: function (G) {
                var j = this,
                    t = j.tv,
                    X = t._tabPosition;
                Mh(G), j.isClickable(G) && (X === lp || X === ih ? (j.x = Li(G).x, j.lp = t.lp(G), j.tx = t.tx()) : (j.y = Li(G).y, j.lp = t.lp(G), j.ty = t.ty()), Le(j, G))
            },
            handleWindowMouseMove: function (S) {
                this.handleWindowTouchMove(S)
            },
            handleWindowTouchMove: function (g) {
                var j, k = this,
                    p = k.tv,
                    u = p._tabPosition,
                    i = k._73o;
                if (u === lp || u === ih) {
                    if (j = Li(g).x - k.x, !k._25o && !k.moving && O(j) > 2 && (p._40o() && !im(g) ? k._25o = 1 : i && p.isMovable() && (k.moving = 1)), k._25o) p.tx(k.tx + j);
                    else if (k.moving) {
                        var b = k.lp.x + j,
                            R = p._tabGap / 2;
                        p._7o.each(function (t) {
                            var w = t.endX,
                                Y = b - t.startX < w - b;
                            b >= t.startX && w >= b && p._7Q({
                                tab: i.tab,
                                startX: i.startX + j,
                                width: i.width,
                                front: Y,
                                insertTab: t.tab,
                                position: Y ? C(0, t.startX - R) : J(p._64I, w + R)
                            })
                        })
                    }
                } else if (j = Li(g).y - k.y, !k._25o && !k.moving && O(j) > 2 && (p._41o() && !im(g) ? k._25o = 1 : i && p.isMovable() && (k.moving = 1)), k._25o) p.ty(k.ty + j);
                else if (k.moving) {
                    var e = k.lp.y + j,
                        R = p._tabGap / 2;
                    p._7o.each(function (d) {
                        var Z = d.endY,
                            f = e - d.startY < Z - e;
                        e >= d.startY && Z >= e && p._7Q({
                            tab: i.tab,
                            startY: i.startY + j,
                            height: i.height,
                            front: f,
                            insertTab: d.tab,
                            position: f ? C(0, d.startY - R) : J(p._23Q, Z + R)
                        })
                    })
                }
            },
            handleWindowMouseUp: function (d) {
                this.handleWindowTouchEnd(d)
            },
            handleWindowTouchEnd: function () {
                var A = this,
                    s = A.tv,
                    U = s._tabPosition,
                    T = s.getTabModel(),
                    N = T._roots,
                    m = A._73o;
                if (A.moving) {
                    var Z = s._23o;
                    if (Z && Z.insertTab !== Z.tab) {
                        var R = Z.tab,
                            u = N.remove(R),
                            G = N.indexOf(Z.insertTab);
                        G >= 0 && (Z.front || G++, G <= N.size() && (N.add(R, G), T._38I(R, u, G)))
                    }
                    s._7Q(V), delete A.moving
                } else if (!A._25o && m) {
                    R = m.tab;
                    var S = A._74o;
                    if (!S || S.tab === R)
                        if (!R.isDisabled() && Rq(m._75o, A.lp)) {
                            var q = N.indexOf(R);
                            T.remove(R), s.onTabClosed(R, q)
                        } else R.isDisabled() || s._8o === R || T.sm().ss(R)
                }
                A._25o = A._73o = A._74o = U === lp || U === ih ? A.x = A.lp = A.tx = V : A.y = A.lp = A.ty = V
            }
        }), Cs.PropertyView = function (o) {
            var C = this;
            C._view = Xh(1), C._canvas = Qk(C._view), yk(C._view, C._79O = Xh()), C._rows = new Io, C._28o = new Io, C._26o = {}, C._26Q = {};
            var g = C._propertyModel = new Kj,
                J = C.ivm;
            g.mm(J, C), g.md(J, C), g.mh(J, C), C.dm(o ? o : new Kj), new Sj(C)
        }, Te("PropertyView", w, {
            ms_ac: [Ok, np, td, Nl, Cg, "categorizable", lc, de, ej, Cd, il, ki, ij, go, "selectRowIndex", tg, "background", uq, Ik, Hl, hm, ds],
            ms_v: 1,
            ms_dm: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            _45o: 1,
            _47o: 1,
            ms_tip: 1,
            _29I: Yd,
            _59I: 0,
            _9I: 0,
            _selectRowIndex: -1,
            _editable: !0,
            _batchEditable: !0,
            _categorizable: !0,
            _indent: vl,
            _background: r.propertyViewBackground,
            _expandIcon: r.propertyViewExpandIcon,
            _collapseIcon: r.propertyViewCollapseIcon,
            _scrollBarColor: $h,
            _scrollBarSize: Ah,
            _autoHideScrollBar: rm,
            _selectBackground: r.propertyViewSelectBackground,
            _rowHeight: Bp,
            _rowLineVisible: r.propertyViewRowLineVisible,
            _rowLineColor: r.propertyViewRowLineColor,
            _10I: .5,
            _columnLineVisible: r.propertyViewColumnLineVisible,
            _columnLineColor: r.propertyViewColumnLineColor,
            _labelColor: r.propertyViewLabelColor,
            _labelSelectColor: r.propertyViewLabelSelectColor,
            _labelFont: r.propertyViewLabelFont,
            getRows: function () {
                return this._rows
            },
            getColumnPosition: function () {
                return this._10I
            },
            setColumnPosition: function (w) {
                0 > w && (w = 0), w > 1 && (w = 1);
                var P = this,
                    c = P._10I;
                P._10I = w, P.fp("columnPosition", c, w)
            },
            getPropertyName: function (s) {
                return s.toLabel()
            },
            getLabelFont: function () {
                return this._labelFont
            },
            getLabelColor: function (z, N, g) {
                return g === this._selectRowIndex ? this._labelSelectColor : this._labelColor
            },
            getPropertyFont: function () {
                return this._labelFont
            },
            getPropertyColor: function (L, M) {
                return M === this._selectRowIndex ? this._labelSelectColor : L.getColor() || this._labelColor
            },
            getCategoryFont: function () {
                return this._labelFont
            },
            getCategoryColor: function () {
                return this._labelColor
            },
            adjustTranslateX: function () {
                return 0
            },
            adjustTranslateY: function (P) {
                var p = this.getHeight() - this._59I;
                return p > P && (P = p), P > 0 ? 0 : K(P)
            },
            isExpanded: function (T) {
                if (!T) return !0;
                var X = this._26o[T];
                return X ? X.isExpanded : !(this._26Q[T] === !1)
            },
            toggle: function (m) {
                var D = this;
                D.isExpanded(m) ? D.collapse(m) : D.expand(m)
            },
            expandAll: function () {
                this.validate();
                for (var N in this._26o) this.expand(N)
            },
            expand: function (H) {
                if (H && H !== uk) {
                    var Y = this,
                        p = Y._26o[H];
                    p && !p.isExpanded && (p.isExpanded = !0, Y.onExpanded(H), Y.ivm())
                }
            },
            onExpanded: function () { },
            collapseAll: function () {
                this.validate();
                for (var T in this._26o) this.collapse(T)
            },
            collapse: function (o) {
                if (o && o !== uk) {
                    var r = this,
                        l = r._26o[o];
                    l && l.isExpanded && (l.isExpanded = !1, r.onCollapsed(o), r.ivm())
                }
            },
            onCollapsed: function () { },
            getCategoryName: function (Q) {
                if (!this.isCategorizable()) return uk;
                var w = Q.getCategoryName();
                return w ? w : uk
            },
            getPropertyModel: function () {
                return this._propertyModel
            },
            setDataModel: function (S) {
                var p = this,
                    m = p._dataModel;
                m !== S && (m && (m.umd(p.handlePropertyChange, p), p._3o || m.sm().ums(p.ivm, p)), p._dataModel = S, S.md(p.handlePropertyChange, p), p._3o ? p._3o._21I(S) : S.sm().ms(p.ivm, p), p.fp(ze, m, S))
            },
            isVisible: function (U) {
                return this._visibleFunc ? this._visibleFunc(U) : !0
            },
            onPropertyChanged: function (J) {
                var H = this,
                    U = J.property;
                on[U] ? H.ivm() : H.iv(), U === jd && H._43o()
            },
            getCurrentData: function () {
                return this._27o
            },
            updateCurrentData: function () {
                this._27o = this.sm().ld()
            },
            getRawProperties: function () {
                return this._27o ? this._propertyModel._roots : nm
            },
            handlePropertyChange: function (O) {
                this._27o === O.data && this.iv()
            },
            ivm: function () {
                this.invalidateModel()
            },
            invalidateModel: function () {
                var J = this;
                J._96I || (J.setSelectRowIndex(-1), J._96I = 1, J.iv())
            },
            redraw: function () {
                this.iv()
            },
            validateModel: function () {
                var o = this,
                    x = o._rows,
                    I = o._28o,
                    D = {},
                    _ = new Io,
                    T = o._27o;
                o.updateCurrentData(), T !== o._27o && o.endEditing(), x.clear(), I.clear(), o.getRawProperties().each(function (g) {
                    if (o.isVisible(g)) {
                        _.add(g);
                        var E = o.getCategoryName(g);
                        D[E] || (I.add(E, E === uk ? 0 : l), D[E] = {
                            isExpanded: o.isExpanded(E),
                            properties: new Io
                        })
                    }
                }), o._sortFunc && _.sort(o._sortFunc);
                for (var F in o._26o) o._26Q[F] = o.isExpanded(F);
                o._26o = D, I.each(function (j) {
                    j !== uk && x.add(j);
                    var y = D[j];
                    y.isExpanded && _.each(function (D) {
                        o.getCategoryName(D) === j && (y.properties.add(D), x.add({
                            property: D,
                            data: o._27o
                        }))
                    }, o)
                })
            },
            validateImpl: function () {
                var N = this;
                N._76o(), N._96I && (N.validateModel(), delete N._96I);
                var T = N._canvas,
                    J = N.getWidth(),
                    K = N.getHeight(),
                    G = -N.ty(),
                    z = N._rowHeight,
                    h = N._indent,
                    Q = J - h,
                    r = N._rows,
                    Y = r.size(),
                    j = N._9I = h + Q * N._10I,
                    w = N._59I = Y * z;
                Qq(T, J, K), N._29I = {
                    x: 0,
                    y: G,
                    width: J,
                    height: K
                }, N._31I = S(G / z), N._14I = n((G + K) / z), N._31I < 0 && (N._31I = 0), N._14I > Y && (N._14I = Y);
                var v, O = Gg(T),
                    y = N._background;
                yf(O, 0, -G, 1), O.beginPath(), O.rect(0, G, J, K), O.clip(), O.clearRect(0, G, J, K), N._93db(O), y && Sf(O, 0, 0, h, w, y);
                for (var s = N._31I; s < N._14I; s++) {
                    var i = r.get(s),
                        G = z * s;
                    if (Yp(i)) y && Sf(O, h, G, Q, z, y), v = Bg(N.isExpanded(i) ? N._expandIcon : N._collapseIcon), v && qp(O, v, Pg, 0, G, h, z), O.save(), O.beginPath(), O.rect(h, G, Q, z), O.clip(), N.drawCategoryName(O, i, s, h, G, Q, z), O.restore();
                    else {
                        var e = i.property,
                            E = i.data,
                            v = Bg(e.getIcon()),
                            _ = N._selectRowIndex === s ? N.getSelectBackground() : V;
                        if (v && qp(O, v, Pg, 0, G, h, z), _ && Sf(O, h, G, Q, z, _), O.save(), O.beginPath(), O.rect(h, G, j - h, z), O.clip(), N.drawPropertyName(O, e, s, h, G, j - h, z), O.restore(), !N.isEditing(E, e)) {
                            var k = j + 1,
                                C = J - j - 1;
                            O.save(), O.beginPath(), O.rect(k, G, C, z), O.clip(), N._87o(N.drawPropertyValue(O, e, N.getValue(E, e), s, k, G, C, z, E), s, k, G, C, z), O.restore()
                        }
                    }
                    N._rowLineVisible && Sf(O, h, G + z - 1, Q, 1, N._rowLineColor)
                }
                N._columnLineVisible && (Sf(O, j, 0, 1, w, N._columnLineColor), Sf(O, J - 1, 0, 1, w)), N._92db(O), N._93I(), O.restore(), N.ty(N.ty())
            },
            drawCategoryName: function (z, V, g, j, s, H, c) {
                ks(z, V, this.getCategoryFont(V), this.getCategoryColor(V), j, s, H, c)
            },
            drawPropertyName: function (h, J, f, $, U, Q, X) {
                return J.drawPropertyName ? (J.drawPropertyName(h, J, f, $, U, Q, X, this), void 0) : (ks(h, this.getPropertyName(J), this.getPropertyFont(J, f), this.getPropertyColor(J, f), $, U, Q, X), void 0)
            },
            drawPropertyValue: function (Z, Y, v, l, B, H, g, V, M) {
                return Y.drawPropertyValue ? Y.drawPropertyValue(Z, Y, v, l, B, H, g, V, M, this) : (Wr(Z, v, Y, this.getLabelFont(Y, v, l), this.getLabelColor(Y, v, l), B, H, g, V, M, this), void 0)
            },
            isPropertyEditable: function (E) {
                return E.isEditable() && this.isEditable()
            },
            setProperties: function (I) {
                this._propertyModel.clear(), this.addProperties(I)
            },
            addProperties: function (o) {
                if (o) {
                    var F = this._propertyModel;
                    o.forEach(function (s) {
                        if (!(s instanceof nq)) {
                            var Q = zg(s.className);
                            s = Qg(Q ? Q : nq, s)
                        }
                        F.add(s)
                    })
                }
            },
            getRowIndexAt: function (r) {
                var h = this,
                    z = S(h.lp(r).y / h._rowHeight);
                return z >= 0 && z < h._rows.size() ? z : -1
            },
            getPropertyAt: function (K) {
                var w = this,
                    m = w.getRowIndexAt(K);
                return m >= 0 ? w._rows.get(m).property : V
            },
            getToolTip: function (E) {
                var P = this,
                    N = P.getPropertyAt(E),
                    T = P._27o;
                return N && T ? N.getToolTip(T, P._9I < P.lp(E).x, P) : V
            }
        });
        var Sj = function (u) {
            this.pv = u, this.addListeners()
        };
        Ui(Sj, w, {
            ms_listener: 1,
            getView: function () {
                return this.pv._view
            },
            setCursor: function (C) {
                this.getView().style.cursor = C
            },
            clear: function () {
                var n = this;
                n._62O = n.cp = n.ty = n.p = V, n.setCursor(v)
            },
            handle_mousedown: function (c) {
                this.handle_touchstart(c)
            },
            handle_touchstart: function (T) {
                var f = this,
                    V = f.pv;
                Mh(T), V.setFocus(T) && (De(T) ? (f.cp = Li(T), f.ty = V.ty(), f.p = V.getColumnPosition(), f.handle_touchmove(T)) : V.setSelectRowIndex(V.getRowIndexAt(T)))
            },
            handleWindowMouseUp: function () {
                this.clear()
            },
            handleWindowTouchEnd: function () {
                this.clear()
            },
            handle_mouseup: function (k) {
                this.handle_touchend(k)
            },
            handle_touchend: function (W) {
                var A = this;
                if (A.cp && !A._62O) {
                    var e = A.pv,
                        k = e.lp(W),
                        x = k.x,
                        u = k.y,
                        E = e._indent,
                        z = e.getRowIndexAt(W),
                        F = e._9I;
                    if (z >= 0) {
                        var P = e._rowHeight,
                            t = P * z,
                            D = e._rows.get(z),
                            J = D.property;
                        if (Yp(D)) Bg(e.isExpanded(D) ? e._expandIcon : e._collapseIcon) && x >= 0 && E >= x && u >= t && t + P >= u ? e.toggle(D) : Yc(W) && e.toggle(D);
                        else if (x > F && e.isPropertyEditable(J)) {
                            var m = {
                                x: F + 1,
                                y: t,
                                width: e.getWidth() - F - 1,
                                height: P
                            },
                                M = {
                                    x: m.x + e.tx(),
                                    y: m.y + e.ty(),
                                    width: m.width,
                                    height: m.height
                                },
                                C = 0,
                                S = e._29I;
                            m.y < S.y ? C = m.y - S.y : m.y + P > S.y + S.height && (C = m.y + P - S.y - S.height), C && (e.ty(e.ty() - C), M.y -= C), e.beginEditing({
                                data: D.data,
                                property: J,
                                value: e.getValue(D.data, J),
                                event: W,
                                rect: m,
                                editorRect: M,
                                view: e
                            })
                        }
                    }
                    e.setSelectRowIndex(z)
                }
                A.clear()
            },
            handleWindowMouseMove: function (Q) {
                this.handleWindowTouchMove(Q)
            },
            handleWindowTouchMove: function (F) {
                var O = this,
                    n = O.pv,
                    Z = O.ty,
                    B = O.cp,
                    i = Li(F),
                    m = O._62O;
                if ("p" === m) n.setTranslateY(Z + i.y - B.y);
                else if ("c" === m) {
                    var y = n.getWidth() - n._indent;
                    if (y > 16) {
                        var U = O.p - (B.x - i.x) / y,
                            G = 16 / y;
                        G > U && (U = G), U > 1 - G && (U = 1 - G), n.setColumnPosition(U)
                    }
                } else "s" === m && n.setTranslateY(Z + (B.y - i.y) * n._59I / n._29I.height)
            },
            handle_mousemove: function (V) {
                this.handle_touchmove(V)
            },
            handle_touchmove: function (C) {
                if (!_h && De(C)) {
                    var s = this,
                        z = s.pv,
                        g = O(z.lp(C).x - z._9I) <= (e ? 8 : 3);
                    s.cp ? s._62O || (g ? (s._62O = "c", Le(s)) : O(Li(C).y - s.cp.y) >= 2 && (s._62O = s.isV(C) ? "s" : "p", Le(s))) : (g ? s.setCursor(Eg) : s.setCursor(v), s.isV(C) && z._43o())
                }
            },
            isV: function (F) {
                var H = this.pv,
                    w = H._29I;
                return H._41o() && w.x + w.width - H.lp(F).x < lo
            },
            handle_mousewheel: function (U) {
                this.handleScroll(U, U.wheelDelta / 40)
            },
            handle_DOMMouseScroll: function (O) {
                2 === O.axis && this.handleScroll(O, -O.detail)
            },
            handleScroll: function (Y, B) {
                var W = this.pv;
                Mh(Y), W.endEditing(), W.translate(0, B * W.getRowHeight())
            },
            handle_keydown: function (A) {
                var I = this.pv,
                    w = I._rows.size(),
                    B = I._selectRowIndex + (yg(A) ? -1 : 1);
                (yg(A) || _n(A)) && (0 > B && (B = 0), B >= w && (B = w - 1), I.setSelectRowIndex(B))
            }
        }), Cs.ListView = function (f) {
            this._5o(f), new zk(this)
        }, Te("ListView", w, {
            ms_ac: [Ok, np, td, uq, lc, Ik, Hl, de, ej, ki, ij, go, ck, tg],
            ms_v: 1,
            ms_bnb: 1,
            ms_tip: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            ms_hs: 1,
            _15Q: 1,
            _14Q: 1,
            ms_dm: 1,
            _45o: 1,
            _checkMode: !1,
            _indent: vl,
            _rowHeight: Bp,
            _rowLineVisible: r.listViewRowLineVisible,
            _rowLineColor: r.listViewRowLineColor,
            _scrollBarColor: $h,
            _scrollBarSize: Ah,
            _autoMakeVisible: Aj,
            _autoHideScrollBar: rm,
            _selectBackground: r.listViewSelectBackground,
            _labelColor: r.listViewLabelColor,
            _labelSelectColor: r.listViewLabelSelectColor,
            _labelFont: r.listViewLabelFont,
            isCheckMode: function () {
                return this._checkMode
            },
            setCheckMode: function (M) {
                var x = this,
                    U = x._checkMode;
                x._checkMode = M, x.fp(Ri, U, M)
            },
            drawRow: function (R, J, y, U, N, G, i) {
                var m = this,
                    V = 0,
                    O = m._indent,
                    X = m.getIconWidth(J);
                m.drawRowBackground(R, J, y, U, N, G, i), m._checkMode && (Ni(R, m.getCheckIcon(J), V + O / 2, N + i / 2, J, m), V += O), m.drawIcon(R, J, V, N, X, i), m.drawLabel(R, J, V + X, N, i)
            }
        });
        var zk = function (y) {
            this.list = y, this.addListeners()
        };
        Ui(zk, w, {
            ms_listener: 1,
            getView: function () {
                return this.list._view
            },
            clear: function (p) {
                var _ = this;
                p && "d" === _._62O && _.list.handleDragAndDrop(p, "end"), _._62O = _.cp = _.tx = _.ty = V
            },
            handle_mousedown: function (i) {
                this.handle_touchstart(i)
            },
            handle_touchstart: function (Y) {
                var G = this,
                    V = G.list;
                if (Mh(Y), V.setFocus(Y))
                    if (G.cp = Li(Y), G.tx = V.tx(), G.ty = V.ty(), De(Y)) G.isV(Y) || G.isH(Y) || !V.handleDragAndDrop || V.handleDragAndDrop(Y, "prepare");
                    else {
                        var N = V.getDataAt(Y);
                        N && G._33o(Y, N), G.clear(Y)
                    }
            },
            handleWindowMouseUp: function (D) {
                this.clear(D)
            },
            handleWindowTouchEnd: function (Q) {
                this.clear(Q)
            },
            handle_mouseup: function (t) {
                this.handle_touchend(t)
            },
            handle_touchend: function (q) {
                var j = this,
                    U = j.list;
                if (j.cp && !j._62O) {
                    var B = U.getDataAt(q);
                    B && (U.isCheckMode() ? j._34o(q, B) : j._33o(q, B), Yc(q) ? U.onDataDoubleClicked(B, q) : U.onDataClicked(B, q))
                }
                j.clear(q)
            },
            handleWindowMouseMove: function (B) {
                this.handleWindowTouchMove(B)
            },
            handleWindowTouchMove: function (P) {
                var T = this,
                    p = T.list,
                    n = T._62O,
                    v = T.tx,
                    x = T.ty,
                    W = T.cp,
                    r = Li(P),
                    y = p._29I;
                "p" === n ? p.setTranslate(v + r.x - W.x, x + r.y - W.y) : "v" === n ? p.ty(x + (W.y - r.y) * p._59I / y.height) : "h" === n ? p.tx(v + (W.x - r.x) * p._91I / y.width) : "d" === n && p.handleDragAndDrop(P, "between")
            },
            handle_mousemove: function ($) {
                this.handle_touchmove($)
            },
            handle_touchmove: function (y) {
                if (!_h && De(y)) {
                    var Z = this,
                        E = Z.list,
                        s = Z.isV(y),
                        l = Z.isH(y);
                    if (Z.cp) {
                        if (!Z._62O) {
                            if (md(Li(y), Z.cp) < 2) return;
                            s ? Z._62O = "v" : l ? Z._62O = "h" : E.handleDragAndDrop ? (Z._62O = "d", E.handleDragAndDrop(y, "begin")) : Z._62O = "p", Le(Z)
                        }
                    } else s && E._43o(), l && E._42o()
                }
            },
            isV: function (F) {
                var I = this.list,
                    B = I._29I;
                return I._41o() && B.x + B.width - I.lp(F).x < lo
            },
            isH: function (F) {
                var S = this.list,
                    x = S._29I;
                return S._40o() && x.y + x.height - S.lp(F).y < lo
            },
            handle_mousewheel: function (W) {
                this.handleScroll(W, W.wheelDelta / 40, W.wheelDelta !== W.wheelDeltaX)
            },
            handle_DOMMouseScroll: function (g) {
                this.handleScroll(g, -g.detail, 1)
            },
            handleScroll: function (h, Y, B) {
                var U = this.list;
                Mh(h), U.endEditing && U.endEditing(), B && U._41o() ? U.translate(0, Y * U.getRowHeight()) : U._40o() && U.translate(10 * Y, 0)
            },
            handle_keydown: function (G) {
                var z, o = this.list,
                    T = o.sm(),
                    w = o._rows,
                    W = w.size();
                if (mc(G)) o.selectAll();
                else if (cg(G)) o.handleDelete && o.handleDelete(G);
                else if (xe(G)) o.isCheckMode() && (z = o.getFocusData(), z && o.checkData(z));
                else if (yg(G) || _n(G)) {
                    var c = o.isCheckMode();
                    if (z = c ? o.getFocusData() : T.ld()) {
                        var J = o.getRowIndex(z);
                        J >= 0 && (yg(G) ? 0 !== J && (z = w.get(J - 1), c ? o.setFocusData(z) : T.ss(z)) : J !== W - 1 && (z = w.get(J + 1), c ? o.setFocusData(z) : T.ss(z)))
                    } else W > 0 && (z = w.get(0), c ? o.setFocusData(z) : T.ss(z))
                }
            },
            _34o: function (c, M) {
                var m = this.list,
                    Q = m.lp(c).x;
                return Q >= 0 && Q <= m._indent ? (m.checkData(M), void 0) : (m.setFocusData(M), void 0)
            },
            _33o: function (l, B) {
                var k = this.list,
                    T = k.sm(),
                    n = T.ld();
                if (im(l)) k.isSelected(B) ? T.rs(B) : T.as(B);
                else if (Ag(l))
                    if (n)
                        for (var y = k.getRowIndex(n), u = k.getRowIndex(B) ; y !== u;) y += u > y ? 1 : -1, T.as(k._rows.get(y));
                    else T.ss(B);
                else (De(l) || !T.contains(B)) && T.ss(B)
            }
        }), Cs.TreeView = function (R) {
            var i = this;
            i._35o(), i._5o(R), new sk(i)
        }, Te("TreeView", w, {
            ms_ac: [Ok, np, td, "rootVisible", Ri, "rootData", de, ej, ki, ij, go, lc, uq, Ik, Hl, Cd, il, ck, tg, "loader"],
            ms_v: 1,
            ms_bnb: 1,
            ms_tip: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            ms_hs: 1,
            _15Q: 1,
            ms_dm: 1,
            _48o: 1,
            _14Q: 1,
            _45o: 1,
            _checkMode: V,
            _indent: vl,
            _rowHeight: Bp,
            _rowLineVisible: r.treeViewRowLineVisible,
            _rowLineColor: r.treeViewRowLineColor,
            _scrollBarColor: $h,
            _scrollBarSize: Ah,
            _autoHideScrollBar: rm,
            _expandIcon: r.treeViewExpandIcon,
            _collapseIcon: r.treeViewCollapseIcon,
            _autoMakeVisible: Aj,
            _selectBackground: r.treeViewSelectBackground,
            _labelColor: r.treeViewLabelColor,
            _labelSelectColor: r.treeViewLabelSelectColor,
            _labelFont: r.treeViewLabelFont,
            drawRow: function (B, d, Z, M, x, h, R) {
                var U = this;
                U.drawRowBackground(B, d, Z, M, x, h, R), U._97I(B, d, Z, 0, x, h, R)
            }
        });
        var sk = function ($) {
            fi(sk, this, [$])
        };
        Ui(sk, zk, {
            toggle: function (t, s, V, h) {
                var g = this.list,
                    P = g.lp(t).x;
                if (Bg(g.getToggleIcon(s))) {
                    var z = V * h;
                    if (P >= z && z + V >= P) return g.toggle(s), !0
                }
                return Yc(t) ? (g.toggle(s), !0) : !1
            },
            _34o: function (N, f) {
                var z = this.list,
                    G = z.lp(N).x,
                    U = z._levelMap[f._id],
                    H = z._indent,
                    S = H * (U + 1);
                return G >= S && S + H >= G ? (z.checkData(f), void 0) : (this.toggle(N, f, H, U) || z.setFocusData(f), void 0)
            },
            _33o: function (q, U) {
                var d = this,
                    g = d.list;
                d.toggle(q, U, g._indent, g.getLevel(U)) || sk.superClass._33o.call(d, q, U)
            },
            handle_keydown: function (z) {
                if (xb(z) || Hb(z)) {
                    var t = this.list,
                        N = t._rows,
                        m = t.isCheckMode(),
                        v = t.sm(),
                        Z = m ? t.getFocusData() : v.ld();
                    Z ? Z.hasChildren() && (xb(z) ? t.collapse(Z) : t.expand(Z)) : N.size() > 0 && (Z = N.get(0), m ? t.setFocusData(Z) : v.ss(Z))
                } else sk.superClass.handle_keydown.call(this, z)
            }
        });
        var Wp = Cs.TableView = function (L) {
            this._98I(), this._5o(L), new $f(this)
        };
        Te("TableView", w, {
            ms_ac: [Ok, np, td, "sortMode", Nl, Cg, uq, Ik, Hl, hm, ds, "sortColumn", de, ej, ki, ij, go, ck, tg],
            ms_v: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            ms_hs: 1,
            _15Q: 1,
            ms_dm: 1,
            ms_tip: 1,
            _50o: 1,
            _45o: 1,
            _47o: 1,
            _sortMode: Tm,
            _editable: !0,
            _batchEditable: !1,
            _rowHeight: Bp,
            _rowLineVisible: r.tableViewRowLineVisible,
            _rowLineColor: r.tableViewRowLineColor,
            _columnLineVisible: r.tableViewColumnLineVisible,
            _columnLineColor: r.tableViewColumnLineColor,
            _scrollBarColor: $h,
            _scrollBarSize: Ah,
            _autoHideScrollBar: rm,
            _autoMakeVisible: Aj,
            _selectBackground: r.tableViewSelectBackground,
            _labelColor: r.tableViewLabelColor,
            _labelSelectColor: r.tableViewLabelSelectColor,
            _labelFont: r.tableViewLabelFont,
            getCheckColumn: function () {
                var M = this;
                if (!M._31o) {
                    var t = M._31o = new Fm;
                    t.setEditable(!0), t.setWidth(40), t.getValue = M.getCheckColumValue, t.drawCell = M.drawCheckColumnCell
                }
                return M._31o
            },
            isCheckMode: function () {
                return this._39o.contains(this._31o)
            },
            setCheckMode: function (h) {
                var l = this,
                    b = l._39o,
                    Q = l.getCheckColumn();
                h !== l.isCheckMode() && (h ? b.add(Q, 0) : b.remove(Q), l.fp(Ri, !h, h))
            },
            getCheckColumValue: function (m, u, w) {
                return w.isSelected(m)
            },
            drawCheckColumnCell: function (n, i, O, l, J, c, N, j, T) {
                Ni(n, T.getCheckIcon(i), J + N / 2, c + j / 2, i, T)
            }
        });
        var $f = function (y) {
            fi($f, this, [y])
        };
        Ui($f, zk, {
            _34o: function (G, v) {
                var O = this.list,
                    U = O._31o;
                if (O.isCellEditable(v, U)) {
                    var Y = O._3Q(U),
                        k = O.lp(G).x;
                    if (Y && k >= Y.startX && k < Y.startX + U.getWidth()) return O.checkData(v), void 0
                }
                O.setFocusData(v), O._37O(v, G)
            },
            _33o: function (Q, o) {
                $f.superClass._33o.apply(this, arguments), this.list._37O(o, Q)
            }
        });
        var Se = Cs.TreeTableView = function (w) {
            var a = this,
                B = a._4o = new Fm;
            a._35o(), a._98I(), a._5o(w), B.setDisplayName("Name"), B.setEditable(!0), B.setWidth(180), B.drawCell = qn, B.getValue = Td, a._39o.add(B), new ec(a)
        },
            qn = function (l, n, w, c, J, B, h, r, M) {
                M._97I(l, n, w, J, B, h, r)
            },
            Td = function (U, D, f) {
                return f.getLabel(U)
            };
        Te("TreeTableView", w, {
            ms_ac: [Ok, np, td, "sortMode", Nl, Cg, lc, Ri, "rootData", "rootVisible", de, ej, "sortColumn", Cd, il, ki, ij, go, ck, Hl, uq, Ik, hm, ds, tg, "loader"],
            ms_v: 1,
            ms_bnb: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            ms_hs: 1,
            _15Q: 1,
            ms_dm: 1,
            ms_tip: 1,
            _50o: 1,
            _48o: 1,
            _14Q: 1,
            _45o: 1,
            _47o: 1,
            _sortMode: Tm,
            _checkMode: V,
            _editable: !0,
            _batchEditable: !1,
            _indent: vl,
            _rowHeight: Bp,
            _rowLineVisible: r.treeTableViewRowLineVisible,
            _rowLineColor: r.treeTableViewRowLineColor,
            _columnLineVisible: r.treeTableViewColumnLineVisible,
            _columnLineColor: r.treeTableViewColumnLineColor,
            _expandIcon: r.treeTableViewExpandIcon,
            _collapseIcon: r.treeTableViewCollapseIcon,
            _scrollBarColor: $h,
            _scrollBarSize: Ah,
            _autoHideScrollBar: rm,
            _autoMakeVisible: Aj,
            _selectBackground: r.treeTableViewSelectBackground,
            _labelColor: r.treeTableViewLabelColor,
            _labelSelectColor: r.treeTableViewLabelSelectColor,
            _labelFont: r.treeTableViewLabelFont,
            getTreeColumn: function () {
                return this._4o
            }
        });
        var ec = function (c) {
            fi(ec, this, [c])
        };
        Ui(ec, zk, {
            _34o: function (p, O) {
                var u = this.list,
                    r = u._4o,
                    g = u._3Q(r),
                    m = u.lp(p).x;
                if (g) {
                    var $ = u._indent,
                        x = g.startX + $ * u.getLevel(O);
                    if (Bg(u.getToggleIcon(O)) && m >= x && x + $ >= m) return u.toggle(O), void 0;
                    if (u.isCellEditable(O, r) && (x += $, m >= x && x + $ >= m)) return u.checkData(O), void 0
                }
                u.setFocusData(O), u._37O(O, p)
            },
            _33o: function (z, C) {
                var K = this.list,
                    O = K.lp(z).x;
                if (Bg(K.getToggleIcon(C))) {
                    var N = K._3Q(K._4o);
                    if (N) {
                        var p = K._indent,
                            q = N.startX + p * K.getLevel(C);
                        if (O >= q && q + p >= O) return K.toggle(C), void 0
                    }
                }
                ec.superClass._33o.apply(this, arguments), K._37O(C, z)
            }
        });
        var hh = Cs.TableHeader = function (Z) {
            var H = this,
                E = H._view = Xh(1),
                F = H._39o = Z.getColumnModel(),
                T = H.iv;
            H.tv = H._tableView = Z, H._60I = new Io, H._canvas = Qk(E), E.style.background = r.tableHeaderBackground || "", E.style.height = Oj + Fb, F.mm(T, H), F.md(T, H), F.mh(T, H), Z.mp(function (e) {
                ai[e.property] && H.iv()
            }, H), new Qf(H), H.iv()
        };
        Te("TableHeader", w, {
            ms_v: 1,
            ms_lp: 1,
            ms_fire: 1,
            ms_ac: ["checkIcon", "sortDescIcon", "sortAscIcon", Ok, td, lc, "moveBackground", "insertColor", hm, ds, "resizable", "movable"],
            _checkIcon: ae,
            _movable: !0,
            _resizable: !0,
            _labelColor: r.tableHeaderLabelColor,
            _labelFont: r.tableHeaderLabelFont,
            _columnLineColor: r.tableHeaderColumnLineColor,
            _columnLineVisible: r.tableHeaderColumnLineVisible,
            _sortDescIcon: r.tableHeaderSortDescIcon,
            _sortAscIcon: r.tableHeaderSortAscIcon,
            _moveBackground: r.tableHeaderMoveBackground,
            _insertColor: r.tableHeaderInsertColor,
            _indent: vl,
            getCheckIcon: function () {
                return this._checkIcon
            },
            getTableView: function () {
                return this.tv
            },
            getLabel: function (i) {
                return i.toLabel()
            },
            getLabelFont: function () {
                return this._labelFont
            },
            getLabelColor: function (x) {
                return x.getColor() || this._labelColor
            },
            getLabelAlign: function (j) {
                return j._align
            },
            onPropertyChanged: function () {
                this.iv()
            },
            _5Q: function (a) {
                this._61I = a, this.iv()
            },
            getLogicalPoint: function (S) {
                return Dm(S, this._canvas, this.tv.tx())
            },
            validateImpl: function () {
                var A = this,
                    n = A._canvas,
                    U = A.getWidth(),
                    g = A.getHeight(),
                    z = A.tv,
                    K = A._60I,
                    q = A._61I,
                    T = -z.tx(),
                    N = 0;
                (U !== n.clientWidth || g !== n.clientHeight) && Qq(n, U, g), K.clear(), A._39o._roots.each(function (v) {
                    if (v.isVisible()) {
                        var b = N + v.getWidth();
                        T + U >= N && b >= T && K.add({
                            column: v,
                            startX: N
                        }), N = b
                    }
                });
                var C = Gg(n);
                if (yf(C, -T, 0, 1), C.beginPath(), C.rect(T, 0, U, g), C.clip(), C.clearRect(T, 0, U, g), K.each(function (k) {
                        var t = k.column,
                            T = k.startX,
                            U = t.getWidth();
                        U > 0 && (C.save(), C.beginPath(), C.rect(T, 0, U, g), C.clip(), q && q.column === t || A.drawColumn(C, t, T, 0, U, g), A._columnLineVisible && Sf(C, T + U - 1, 0, 1, g, A._columnLineColor), C.restore())
                }), q) {
                    var P = q.column,
                        N = q.startX,
                        D = q.position,
                        I = P.getWidth();
                    C.save(), C.beginPath(), C.rect(N, 0, I, g), C.clip(), C.fillStyle = A._moveBackground, C.fill(), A.drawColumn(C, P, N, 0, I, g), C.restore(), Sr(C, A._insertColor, D, 0, g)
                }
                C.restore()
            },
            _6Q: function (r) {
                var i = this.tv;
                return i._31o === r && i.sm().getSelectionMode() === f
            },
            drawColumn: function (l, k, O, X, K, i) {
                var Y = this,
                    y = Y.tv,
                    J = Bg(k.getIcon()),
                    j = Y.getLabelAlign(k);
                if (Y._6Q(k)) {
                    var W = Bg(Y._checkIcon);
                    Ni(l, W, O + K / 2, X + i / 2, k, Y)
                } else {
                    var p = Y.getLabel(k),
                        B = Y.getLabelFont(k),
                        V = Y.getLabelColor(k),
                        m = vr(B, p).width,
                        R = J ? Y._indent : 0;
                    j === Sd ? (J && qp(l, J, Pg, O, X, R, i), ks(l, p, B, V, O + R, X, K, i, Sd)) : j === yn ? (J && qp(l, J, Pg, O + K - m - R, X, R, i), ks(l, p, B, V, O, X, K, i, yn)) : (J && qp(l, J, Pg, O + (K - m - R) / 2, X, R, i), ks(l, p, B, V, O + (K - m + R) / 2, X, 0, i, Sd))
                }
                if (k.isSortable() && y.getSortColumn() === k && (J = Bg(k.getSortOrder() === vo ? Y._sortAscIcon : Y._sortDescIcon))) {
                    var N = Vk(J, k) / 2 + 2;
                    Ni(l, J, j === yn ? O + N : O + K - N, X + i / 2, k, y)
                }
            }
        });
        var Qf = function (C) {
            var F = this;
            F.th = C, F.tv = C._tableView, F.addListeners()
        };
        Ui(Qf, w, {
            ms_listener: 1,
            getView: function () {
                return this.th.getView()
            },
            setCursor: function (z) {
                this.getView().style.cursor = z
            },
            handle_mousemove: function (S) {
                if (!_h) {
                    var x = this;
                    delete x._29o, x.setCursor(v);
                    for (var Q = x.th, p = Q._60I, B = Q.lp(S).x, P = p.size() - 1; P >= 0; P--) {
                        var F = p.get(P),
                            b = F.column,
                            I = F.startX + b.getWidth();
                        if (Q.isResizable() && O(I - B) <= (e ? 10 : 3)) return x._29o = F, x.setCursor(Eg), void 0;
                        (b.isSortable() || Q.isMovable() || b === x.tv.getCheckColumn()) && B >= F.startX && I >= B && b.getWidth() > 0 && (x._29o = F, x.setCursor(ri))
                    }
                }
            },
            handle_mousedown: function ($) {
                this.handle_touchstart($)
            },
            handle_touchstart: function (F) {
                var y = this;
                Mh(F), y.tv.endEditing(), y.handle_mousemove(F), y._29o && (y.x = Li(F).x, y.lx = y.th.lp(F).x, y.w = y._29o.column.getWidth(), Le(y, F))
            },
            handleWindowMouseMove: function (Q) {
                this.handleWindowTouchMove(Q)
            },
            handleWindowTouchMove: function (o) {
                var Q = this,
                    C = Q.th,
                    n = Q.getView().style.cursor,
                    K = Q._29o,
                    j = Li(o).x - Q.x;
                if (Q.resizing || Q.moving || (n === Eg ? Q.resizing = 1 : C.isMovable() && n === ri && O(j) > 2 && (Q.moving = 1)), Q.resizing) K.column.setWidth(Q.w + j);
                else if (Q.moving) {
                    var $ = Q.lx + j;
                    C._60I.each(function (B) {
                        var W = B.startX,
                            b = W + B.column.getWidth();
                        if ($ >= W && b >= $) {
                            var Y = {
                                column: K.column,
                                startX: K.startX + j,
                                front: b - $ > $ - W,
                                insertColumn: B.column
                            };
                            Y.position = Y.front ? W : b, C._5Q(Y)
                        }
                    })
                }
            },
            _16Q: function (w, h) {
                var O = this,
                    t = O.tv,
                    $ = O.th,
                    c = $._checkIcon;
                if ($._6Q(w)) {
                    var k = Bg(c),
                        x = O.lx,
                        I = w.getWidth(),
                        H = Vk(k, w);
                    if (x >= h + I / 2 - H && h + I / 2 + H >= x) {
                        $.setCheckIcon(c === ng ? ae : ng);
                        var R = t.sm(),
                            l = t._rows;
                        return c === ng ? R.rs(l) : R.ss(l), t.onCheckColumnClicked(w), !0
                    }
                }
                return !1
            },
            handleWindowMouseUp: function (m) {
                this.handleWindowTouchEnd(m)
            },
            handleWindowTouchEnd: function (t) {
                var w = this,
                    Q = w.tv,
                    k = w.th,
                    I = w._29o;
                if (w.moving) {
                    var o = k._61I;
                    if (o && o.insertColumn !== o.column) {
                        var W = o.column,
                            Z = Q.getColumnModel()._roots,
                            u = Z.remove(W),
                            J = Z.indexOf(o.insertColumn);
                        J >= 0 && (o.front || J++, J <= Z.size() && (Z.add(W, J), Q.getColumnModel()._38I(W, u, J)))
                    }
                    k._5Q(V), delete w.moving
                } else if (!w.resizing && I) {
                    W = I.column;
                    var p = k.lp(t).x,
                        A = I.startX,
                        H = !0;
                    if (k.onColumnClicked) {
                        var P = k.onColumnClicked(W, t);
                        P === !1 && (H = !1)
                    }
                    if (H && p >= A && p <= A + W.getWidth() && !w._16Q(W, A)) {
                        if (W.isSortable()) {
                            var K = Q.getSortMode(),
                                O = W.getSortOrder();
                            K === Tm ? Q.getSortColumn() === W ? (O === Hi && Q.setSortColumn(V), W.setSortOrder(O === vo ? Hi : vo)) : Q.setSortColumn(W) : "bistate" === K && (Q.getSortColumn() === W ? W.setSortOrder(O === vo ? Hi : vo) : Q.setSortColumn(W))
                        }
                        Q.onColumnClicked(W, t)
                    }
                }
                w._29o = w.resizing = w.x = w.lx = w.w = V
            }
        }), Cs.TablePane = function (e) {
            this.init(new Wp(e))
        }, Te("TablePane", w, {
            ms_v: 1,
            _44o: 1
        }), Cs.TreeTablePane = function (c) {
            this.init(new Se(c))
        }, Te("TreeTablePane", w, {
            ms_v: 1,
            _44o: 1
        }), Cs.Toolbar = function (B) {
            var X = this,
                _ = X._view = Xh(1),
                N = _.style;
            N.background = r.toolbarBackground || "", N.height = Wn + Fb, X._canvas = Qk(_), X._30o = new Io, X._90I = new Io, X.setItems(B || []), _.handleGroupSelectedChanged = function (p) {
                if (p.isSelected()) {
                    var S = p.getGroupId();
                    null != S && X._items.forEach(function (V) {
                        var v = V.element;
                        v && v !== p && v.setSelected && v.getGroupId && v.getGroupId() === S && v.setSelected(!1)
                    })
                }
            }, new Ae(X)
        }, Te("Toolbar", w, {
            ms_v: 1,
            ms_fire: 1,
            ms_tx: 1,
            ms_lp: 1,
            ms_tip: 1,
            ms_value: 1,
            ms_ac: [zq, Ok, td, np, tg, "itemGap", "separatorColor", "currentItem", "stickToRight"],
            _labelColor: r.toolbarLabelColor,
            _labelSelectColor: r.toolbarLabelSelectColor,
            _labelFont: r.toolbarLabelFont,
            _selectBackground: r.toolbarSelectBackground,
            _itemGap: r.toolbarItemGap,
            _separatorColor: r.toolbarSeparatorColor,
            _stickToRight: !1,
            getSumWidth: function () {
                return this._64I
            },
            getToolTip: function (U) {
                var F = this.getItemInfoAt(U);
                return F ? F.item.toolTip : V
            },
            getLabelColor: function (k) {
                return k.selected && k.type !== ng && k.type !== nl ? this._labelSelectColor : this._labelColor
            },
            onPropertyChanged: function (P) {
                this.iv(), P.property === zq && this._items.forEach(function (B) {
                    mr(B)
                })
            },
            redraw: function () {
                this.iv()
            },
            addItem: function (H, w) {
                var E = this._items;
                w == V ? E.push(H) : E.splice(w, 0, H), this.fp(zq, V, E)
            },
            removeItem: function (p) {
                if (p)
                    for (var H = this._items, O = 0; O < H.length; O++) p === H[O] && (H.splice(O, 1), this.fp(zq, V, H))
            },
            removeItemById: function (p) {
                if (p != V)
                    for (var B = this._items, c = 0; c < B.length; c++) p === B[c].id && (B.splice(c, 1), this.fp(zq, V, B))
            },
            getItemById: function (n) {
                if (n != V)
                    for (var U = this._items, z = 0; z < U.length; z++) {
                        var i = U[z];
                        if (n === i.id) return i
                    }
            },
            getItemInfos: function () {
                return this._30o
            },
            getItemInfoAt: function (_) {
                var G = this,
                    Z = 0,
                    I = G._30o,
                    N = G.lp(_),
                    e = N.x,
                    l = N.y;
                if (l >= 0 && l <= G.getHeight())
                    for (; Z < I.size() ; Z++) {
                        var z = I.get(Z);
                        if (z.startX <= e && e <= z.endX) return z
                    }
                return V
            },
            drawItem: function (Z, W, j, D, E) {
                if (W.visible === !1) return 0;
                var H = this,
                    h = W.disabled;
                h && (Z.globalAlpha = _m);
                var T = H.drawItemImpl(Z, W, j, D, E),
                    l = H._itemGap;
                return h && (Z.globalAlpha = 1), this._currentItem !== W || "separator" === W || W.unfocusable || Jf(Z, H._separatorColor, j - l / 2, 0, T + l, D), T
            },
            drawItemImpl: function (r, v, $, l, U) {
                var V, _ = this,
                    E = _._view,
                    b = _._itemGap,
                    O = l / 2,
                    t = v.type,
                    S = v.label,
                    C = _.getLabelFont(v),
                    y = _.getLabelColor(v),
                    F = v.selected,
                    K = Bg(v.icon),
                    z = Vk(K, v),
                    s = 0,
                    c = v.element,
                    g = z + (S ? vr(C, S).width : 0);
                if ("separator" === v) return Sr(r, _._separatorColor, $, l / 4, O), 1;
                if (c) {
                    K && Ni(r, K, $ + z / 2, O), ks(r, S, C, y, $ + z, 0, 0, l);
                    var o = $k(c);
                    U || _._90I.add(o), o.parentNode !== E && yk(E, o), c.iv && c.iv(), c.validate && c.validate();
                    var q = o.getBoundingClientRect(),
                        T = q.width,
                        J = o.style;
                    return Kn(o), J.left = _.tx() + $ + g + Fb, J.top = (l - q.height) / 2 + Fb, g + T
                }
                return t === nl ? V = Bg(F ? Fh : um) : t === ng && (V = Bg(F ? ng : ae)), V ? (s = Vk(V, v), Ni(r, V, $ + s / 2, O), $ += s, g += s) : F && Sf(r, $ - b / 2, 0, g + b, l, _.getSelectBackground(v)), K && Ni(r, K, $ + z / 2, O), ks(r, S, C, y, $ + z, 0, 0, l), g
            },
            validateImpl: function () {
                var u = this,
                    G = u._canvas,
                    J = u.getWidth(),
                    f = u.getHeight(),
                    l = u._30o,
                    U = u._items;
                Qq(G, J, f);
                var F = Gg(G),
                    V = u._itemGap,
                    r = V / 2;
                yf(F, u.tx(), 0, 1), F.clearRect(0, 0, J, f);
                var K = u._90I;
                u._90I = new Io, l.clear(), U.forEach(function (n) {
                    var $ = u.drawItem(F, n, r, f);
                    l.add({
                        item: n,
                        startX: r,
                        endX: r + $,
                        width: $
                    }), $ && (r += $ + V)
                }), K.each(function (e) {
                    u._90I.contains(e) || Kq(e)
                }), u._64I = C(0, r), F.restore(), u._stickToRight ? (u._65O = 0, F = Gg(G), r = J - u._64I + V, yf(F, 0, 0, 1), F.clearRect(0, 0, J, f), l.clear(), U.forEach(function (s) {
                    var m = u.drawItem(F, s, r, f, !0);
                    l.add({
                        item: s,
                        startX: r,
                        endX: r + m,
                        width: m
                    }), m && (r += m + V)
                }), F.restore()) : u.tx(u.tx())
            },
            handleClick: function (l) {
                var L = this,
                    S = l.type,
                    I = l.action,
                    y = l.groupId,
                    k = l.selected;
                l.disabled || (y != V ? k || (l.selected = !0, this._items.forEach(function (S) {
                    S.groupId === y && l !== S && (S.selected = !1)
                }), I && l.action(l, L)) : S === ng || "toggle" === S ? (l.selected = !k, I && l.action(l, L)) : I && l.action(l, L)), Ij(), L.iv()
            }
        });
        var Ae = function (y) {
            this.tb = y, this.addListeners()
        };
        Ui(Ae, w, {
            ms_listener: 1,
            getView: function () {
                return this.tb._view
            },
            handle_mousewheel: function (s) {
                this.handleScroll(s, 10 * (s.wheelDelta / 40))
            },
            handle_DOMMouseScroll: function (c) {
                this.handleScroll(c, 10 * -c.detail)
            },
            handleScroll: function (U, p) {
                Mh(U);
                var O = this.tb;
                O.isScrollable() && !O._stickToRight && (O.tx(O.tx() + p), op())
            },
            handle_mousemove: function (X) {
                var c = this;
                _h ? c.info2 = c.tb.getItemInfoAt(X) : c.setItem(X)
            },
            handle_mouseout: function (R) {
                var J = this;
                R.target === J.getView() ? J.tb.setCurrentItem(V) : J.handle_mousemove(R)
            },
            handle_mousedown: function (p) {
                this.handle_mousemove(p), this.handle_touchstart(p)
            },
            handle_touchstart: function (P) {
                var j = this,
                    e = j.tb,
                    y = P.target;
                (y === j.getView() || y === e._canvas) && (Mh(P), e.setFocus(P) && (this.setItem(P), (e.isScrollable() || j.info && !j.info.item.disabled) && (j.x = Li(P).x, j.tx = e.tx(), Le(j, P))))
            },
            handleWindowMouseMove: function (e) {
                this.handleWindowTouchMove(e)
            },
            handleWindowTouchMove: function (h) {
                var J = this,
                    n = J.tb;
                if (!n._stickToRight) {
                    var w = Li(h).x - J.x;
                    !J._25o && O(w) > 2 && n.isScrollable() && (J._25o = 1), J._25o && n.tx(J.tx + w)
                }
            },
            handleWindowMouseUp: function (g) {
                this.handleWindowTouchEnd(g)
            },
            handleWindowTouchEnd: function () {
                var i = this,
                    f = i.tb,
                    R = i.info,
                    H = i.info2;
                if (!i._25o && R) {
                    var K = R.item;
                    H && H.item !== K || f.handleClick(K)
                }
                i._25o = i.x = i.tx = i.info2 = V, i.setItem()
            },
            setItem: function (D) {
                var J = this,
                    w = J.tb,
                    G = J.info = D ? w.getItemInfoAt(D) : V;
                w.setCurrentItem(G ? G.item : V)
            }
        }), Cs.BorderPane = function () {
            this._view = Xh(1), this.iv()
        }, Te("BorderPane", w, {
            ms_v: 1,
            ms_ac: ["topHeight", "bottomHeight", "leftWidth", "rightWidth"],
            ms_fire: 1,
            getLeftView: function () {
                return this._leftView
            },
            setLeftView: function (m, k) {
                this._12o("leftView", m), k != V && this.setLeftWidth(k)
            },
            getRightView: function () {
                return this._rightView
            },
            setRightView: function (D, j) {
                this._12o("rightView", D), j != V && this.setRightWidth(j)
            },
            getTopView: function () {
                return this._topView
            },
            setTopView: function (R, t) {
                this._12o("topView", R), t != V && this.setTopHeight(t)
            },
            getBottomView: function () {
                return this._bottomView
            },
            setBottomView: function (b, i) {
                this._12o("bottomView", b), i != V && this.setBottomHeight(i)
            },
            getCenterView: function () {
                return this._centerView
            },
            setCenterView: function (s) {
                this._12o("centerView", s)
            },
            _12o: function (R, G) {
                var B = this,
                    V = "_" + R,
                    A = B._view,
                    e = B[V];
                e !== G && (e && (e.getView ? Kq(e.getView()) : Kq(e)), B[V] = G, G && (G.getView ? yk(A, G.getView(), 1) : yk(A, G, 1)), B.fp(R, e, G))
            },
            onPropertyChanged: function () {
                this.iv()
            },
            validateImpl: function () {
                var d = this,
                    q = d._topView,
                    i = d._bottomView,
                    m = d._leftView,
                    X = d._rightView,
                    t = d._centerView,
                    c = d.getWidth(),
                    G = d.getHeight(),
                    r = 0,
                    w = 0,
                    k = c,
                    M = G,
                    e = 0,
                    Y = 0,
                    L = 0,
                    E = 0;
                q && (e = d._topHeight == V ? rl(q) : d._topHeight, w = e), i && (Y = d._bottomHeight == V ? rl(i) : d._bottomHeight, M = G - Y), m && (L = d._leftWidth == V ? Jm(m) : d._leftWidth, r = L), X && (E = d._rightWidth == V ? Jm(X) : d._rightWidth, k = c - E);
                var W = C(0, k - r),
                    H = C(0, M - w);
                q && Xe(q, 0, 0, c, e), i && Xe(i, 0, M, c, Y), m && Xe(m, 0, w, L, H), X && Xe(X, k, w, E, H), t && Xe(t, r, w, W, H)
            }
        })
    }
}(this, Object);