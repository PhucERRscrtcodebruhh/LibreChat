const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      './SandboxArtifactTabs.9bmJ6YkY.js',
      './rolldown-runtime.C0FnF6B9.js',
      './advanced-inputs.BJDnsHUg.js',
      './radix-ui.tIiBXdQR.js',
      './animations.BtPDPo2e.js',
      './hooks.CliY9jTn.js',
      './vendor.DpBpdTS1.js',
      './runtime-shims.CfYCxqfF.js',
      './query-devtools.C2qG3_c-.js',
      './validation.OCGaXQWG.js',
      './react-vtree.nToqO-mh.js',
      './i18n.C6_IvY32.js',
      './react-interactions.DscxJRRh.js',
      './routing.DYGR6PKW.js',
      './tanstack-vendor.DDeX4vva.js',
      './http-client.D6G8y4MX.js',
      './shared-libs.CKPm2yyl.js',
      './avatars.XYysrFin.js',
      './framer-motion.sQ5ndFcX.js',
      './virtualization.CT5gCaFG.js',
      './headlessui.CdCWEm1u.js',
      './markdown-processing.TMtFeQR7.js',
      './date-utils.C_DbPEjY.js',
      './utilities.Ce8HPfek.js',
      './lazy.ok8MO2Tx.js',
      './forms.UHk3QTvM.js',
      './math-katex.RfU0klHh.js',
      './math-katex.uZ8_QngQ.css',
      './sandpack.D6kRVmoQ.js',
      './codemirror-core.B3ddRMLP.js',
    ]),
) => i.map((i) => d[i]);
import { o as e, r as t } from './rolldown-runtime.C0FnF6B9.js';
import { at as n, rt as r } from './advanced-inputs.BJDnsHUg.js';
import {
  Bi as i,
  Bn as a,
  Et as o,
  Ft as s,
  Mn as c,
  W as l,
  Wn as u,
  Wr as d,
  Xn as f,
  ar as p,
  as as m,
  at as h,
  ca as g,
  cs as ee,
  dt as _,
  gr as v,
  ls as y,
  oo as b,
  os as x,
  ss as S,
  w as C,
  wt as w,
} from './vendor.DpBpdTS1.js';
import { c as T } from './runtime-shims.CfYCxqfF.js';
import { c as E, u as te } from './radix-ui.tIiBXdQR.js';
import {
  Ah as D,
  Bv as O,
  Cc as ne,
  Dc as k,
  Ec as A,
  Ih as j,
  Jf as M,
  Jo as N,
  K_ as P,
  Mv as F,
  Oc as re,
  Pc as ie,
  Qo as I,
  Rg as L,
  Tc as R,
  Tx as z,
  Uv as ae,
  Wv as oe,
  Xo as se,
  Yo as ce,
  Zo as le,
  ah as ue,
  as as B,
  cg as V,
  co as H,
  cs as de,
  ec as fe,
  es as pe,
  fs as me,
  is as he,
  iv as U,
  jv as W,
  kl as G,
  lo as ge,
  ls as _e,
  ns as ve,
  os as ye,
  pv as be,
  qy as xe,
  rs as Se,
  ss as Ce,
  ts as we,
  u as Te,
  us as Ee,
  wc as De,
  x_ as Oe,
  ys as ke,
  zo as Ae,
} from './hooks.CliY9jTn.js';
import { i as je } from './utilities.Ce8HPfek.js';
import { i as Me, t as K } from './markdown.BNlHQ3RP.js';
import { n as Ne } from './lazy.ok8MO2Tx.js';
import {
  c as q,
  f as Pe,
  i as Fe,
  l as Ie,
  o as Le,
  t as Re,
  u as ze,
} from './undockedWindow.C6bWb7Jg.js';
import { t as Be } from './code-editor.DTDPPaEm.js';
var Ve = e(C(), 1),
  J = e(n(), 1),
  Y = (e, t) => {
    let n = e.indexOf(
      `
`,
      t,
    );
    return n === -1 ? e.length : n;
  },
  X = (e, t) => (t >= e.length ? e.length : t + 1),
  He = (e, t) => {
    let n = t;
    for (; n < e.length; ) {
      let t = Y(e, n);
      if (e.slice(n, t).trim().length > 0) return n;
      n = X(e, t);
    }
    return e.length;
  },
  Ue = (e, t) => {
    let n = Y(e, t),
      r = e
        .slice(t, n)
        .trimStart()
        .match(/^(`{3,}|~{3,})/);
    return r ? { marker: r[1][0], length: r[1].length, contentStart: X(e, n) } : null;
  },
  We = (e, t) => {
    let n = e.trim();
    if (n.length < t.length) return !1;
    for (let e of n) if (e !== t.marker) return !1;
    return !0;
  },
  Ge = (e) => {
    let t = e.trimStart();
    return t.startsWith(`:::`) && !t.startsWith(`:::artifact`);
  },
  Ke = (e, t) => {
    let n = He(e, t);
    if (n >= e.length) return !1;
    let r = Y(e, n);
    return Ge(e.slice(n, r));
  },
  qe = (e, t) => {
    let n = t,
      r = null;
    for (; n < e.length; ) {
      let t = Y(e, n),
        i = e.slice(n, t),
        a = Ue(e, n);
      if (Ge(i) && !r) return !0;
      (a && !r ? (r = a) : r && We(i, r) && (r = null), (n = X(e, t)));
    }
    return !1;
  },
  Je = (e) => {
    if (!e.includes(`:::artifact`)) return !1;
    let t = e.trim(),
      n = /:::artifact(?:\{[^}]*\})?/g,
      r = n.exec(t);
    for (; r; ) {
      let e = He(t, X(t, Y(t, r.index))),
        i = Ue(t, e);
      if (!i) {
        if (qe(t, e)) return !0;
        r = n.exec(t);
        continue;
      }
      let a = i.contentStart;
      for (; a < t.length; ) {
        let e = Y(t, a);
        if (We(t.slice(a, e), i)) {
          if (Ke(t, X(t, e))) return !0;
          break;
        }
        a = X(t, e);
      }
      r = n.exec(t);
    }
    return !1;
  };
function Ye() {
  let [e, t] = w(q),
    n = o(ze),
    r = o(Ie),
    { endCodeSession: i } = k(),
    { isSubmitting: a, latestMessageId: s, latestMessageText: c, conversationId: l } = fe(),
    u = m(M.artifactsState),
    d = ee(M.artifactsState),
    f = ee(M.currentArtifactId),
    [p, h] = x(M.currentArtifactId),
    { orderedArtifactIds: g, latestAutoOpenArtifactId: _ } = (0, J.useMemo)(() => {
      let e = Object.keys(u ?? {}).sort(
        (e, t) => (u?.[e]?.lastUpdateTime ?? 0) - (u?.[t]?.lastUpdateTime ?? 0),
      );
      for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (!Ce(u?.[n]?.type)) return { orderedArtifactIds: e, latestAutoOpenArtifactId: n };
      }
      return { orderedArtifactIds: e, latestAutoOpenArtifactId: null };
    }, [u]),
    v = (0, J.useRef)(!1),
    b = (0, J.useRef)(null),
    S = (0, J.useRef)(!1),
    C = (0, J.useRef)(!1),
    T = (0, J.useRef)(null),
    E = (0, J.useRef)(null),
    te = y(
      ({ snapshot: e }) =>
        () =>
          e.getLoadable(M.artifactsVisibility).valueMaybe() !== !0 ||
          e.getLoadable(M.currentArtifactId).valueMaybe() == null,
      [],
    );
  (0, J.useEffect)(() => {
    let e = () => {
      (d(),
        f(),
        t(`preview`),
        r(null),
        i(),
        n(!1),
        (E.current = l),
        (T.current = null),
        (b.current = null),
        (S.current = !1),
        (C.current = !1));
    };
    return (
      ((l !== E.current && E.current != null) || l === xe.NEW_CONVO) && e(),
      (E.current = l),
      () => {
        te() && (j.log(`artifacts_visibility`, `Unmounting artifacts`), e());
      }
    );
  }, [l, te, d, f, t, i, n, r]);
  let D = (0, J.useRef)(p);
  ((D.current = p),
    (0, J.useEffect)(() => {
      if (g.length === 0) return;
      let e = D.current;
      if (!(e != null && g.includes(e))) {
        if (_ == null) {
          e != null && f();
          return;
        }
        h(_);
      }
    }, [_, g, f, h]),
    (0, J.useEffect)(() => {
      let e = v.current && !a;
      if (((v.current = a), (!a && !e) || g.length === 0 || s == null)) return;
      let n = g[g.length - 1],
        r = u?.[n];
      if (
        r?.messageId === s &&
        !(r.content === b.current && !e) &&
        ((b.current = r?.content ?? null), !Ce(r?.type) && (h(n), !S.current && !C.current))
      ) {
        let e = r?.content?.slice(0, 50) ?? ``;
        e.length > 0 && c.includes(e) && (t(`code`), (C.current = !0));
      }
    }, [u, a, s, c, g, t, h]),
    (0, J.useEffect)(() => {
      !a ||
        S.current ||
        (Je(c) &&
          (j.log(`artifacts`, `Enclosed artifact detected during generation, switching to preview`),
          t(`preview`),
          (S.current = !0),
          (C.current = !1)));
    }, [a, c, t]),
    (0, J.useEffect)(() => {
      s !== T.current && ((T.current = s), (S.current = !1), (C.current = !1));
    }, [s]));
  let O = p == null ? null : u?.[p];
  return {
    activeTab: e,
    setActiveTab: t,
    currentIndex: g.indexOf(p ?? ``),
    currentArtifact: O,
    orderedArtifactIds: g,
    setCurrentArtifactId: h,
  };
}
function Z(e, t) {
  if (!e) return e;
  let n = t ? W : F,
    r = (e, t) => {
      let r = n[e]?.trim().split(/\s+/).map(Number);
      return r?.length !== 3 || r.some(Number.isNaN)
        ? t
        : `#${r.map((e) => e.toString(16).padStart(2, `0`)).join(``)}`;
    },
    i = r(`rgb-surface-primary`, t ? `#000000` : `#ffffff`),
    a = r(`rgb-text-primary`, t ? `#ffffff` : `#000000`),
    o = r(`rgb-border-medium`, a),
    s = r(`rgb-surface-active`, i),
    c = r(`rgb-surface-hover`, i),
    l = r(`rgb-surface-hover-alt`, c),
    u = r(`rgb-link`, t ? `#8cc8ff` : `#0000cc`),
    d = `<style>${`
:root {
  color-scheme: ${t ? `dark` : `light`};
  --bg: ${i};
  --fg: ${a};
  --muted: ${a};
  --border: ${o};
  --row-alt: ${s};
  --row-hover: ${c};
  --header-bg: ${l};
  --tab-active-bg: ${l};
  --tab-bg: ${i};
  --link: ${u};
}
/** WCAG 1.4.1: a link in running text must not be colour alone. */
a { text-decoration: underline; }
`}</style>`,
    f = e.toLowerCase().indexOf(`</head>`);
  return f >= 0 ? `${e.slice(0, f)}${d}${e.slice(f)}` : `${d}${e}`;
}
function Q({ artifact: e }) {
  let { resolvedMode: t, highContrast: n } = (0, J.useContext)(U),
    r = t === `dark`,
    [i, a] = (0, J.useMemo)(() => {
      let t = ve(e.type ?? ``, e.language),
        i = e.type ?? ``;
      if (t.includes(`mermaid`)) return [`diagram.mmd`, le(e.content ?? ``, r, n)];
      if (i === I.CODE) {
        let t = e.language ?? Ee(e.title),
          i = me(e.content ?? ``, t);
        return [`content.md`, K(i, r, n)];
      }
      if (i === `text/markdown` || i === `text/md` || i === `text/plain`)
        return [`content.md`, K(e.content ?? ``, r, n)];
      if (i === I.DOCX || i === I.SPREADSHEET || i === I.PRESENTATION) {
        let t = e.content ?? ``;
        return [`index.html`, { 'index.html': n ? Z(t, r) : t }];
      }
      if (_e(i)) return [we(i), B(e.content ?? ``)];
      let a = we(e.type ?? ``, e.language);
      return [a, z({ [a]: e.content })];
    }, [e.type, e.content, e.language, e.title, r, n]);
  return {
    files: a,
    fileKey: i,
    template: (0, J.useMemo)(() => ye(e.type ?? ``, e.language), [e.type, e.language]),
    sharedProps: (0, J.useMemo)(() => he(e.type ?? ``), [e.type]),
    deriveFiles: (0, J.useMemo)(() => (_e(e.type ?? ``) ? B : void 0), [e.type]),
  };
}
function Xe(e) {
  let t = A(e.id),
    { showToast: n } = oe(),
    r = G(),
    [i, a] = (0, J.useState)(!1),
    { fileKey: o } = Q({ artifact: e }),
    s = (0, J.useRef)();
  (0, J.useEffect)(() => () => clearTimeout(s.current), []);
  let { download: c } = e,
    l =
      (c?.filepath != null && c.filepath !== ``) ||
      (c?.file_id != null && c?.user != null && H(c?.source)),
    u = t != null && t !== e.content,
    d = l && (de(e.type) || !u),
    { handleDownload: f } = ge({
      href: c?.filepath ?? ``,
      filename: Se(e, o),
      file_id: c?.file_id,
      user: c?.user,
      source: c?.source,
    }),
    p = (0, J.useCallback)(() => {
      (a(!0), clearTimeout(s.current), (s.current = setTimeout(() => a(!1), 3e3)));
    }, []);
  return {
    isDownloaded: i,
    handleDownload: (0, J.useCallback)(
      async (i) => {
        try {
          if (d) {
            let e = await f(i);
            return (e && p(), e);
          }
          let a = t ?? e.content;
          if (a == null) return (n({ status: `error`, message: r(`com_ui_download_error`) }), !1);
          let s = new Blob([a], { type: `text/plain` }),
            c = window.URL.createObjectURL(s),
            l = document.createElement(`a`);
          return (
            (l.href = c),
            (l.download = pe(e, o, a)),
            document.body.appendChild(l),
            l.click(),
            document.body.removeChild(l),
            window.URL.revokeObjectURL(c),
            p(),
            !0
          );
        } catch (e) {
          return (
            console.error(`Download failed:`, e),
            n({ status: `error`, message: r(`com_ui_download_error`) }),
            !1
          );
        }
      },
      [e, f, d, t, o, r, p, n],
    ),
  };
}
var $ = r(),
  Ze = ({ artifact: e }) => {
    let t = G(),
      { isDownloaded: n, handleDownload: r } = Xe(e);
    return (0, $.jsx)(V, {
      size: `icon`,
      variant: `ghost`,
      className: `h-9 w-9`,
      onClick: r,
      'aria-label': t(`com_ui_download_artifact`),
      children: (0, $.jsx)(l, { icon: n ? _ : h, size: 16 }),
    });
  };
function Qe({ currentIndex: e, totalVersions: t, portalElement: n, onVersionChange: r }) {
  let i = G(),
    [a, o] = (0, J.useState)(!1),
    s = O(`(max-width: 768px)`),
    c = (e) => {
      (r(parseInt(e, 10)), o(!1));
    };
  if (t <= 1) return null;
  let l = Array.from({ length: t }, (e, t) => ({
    value: t.toString(),
    label: i(`com_ui_version_var`, { 0: String(t + 1) }),
  })).map((t) => {
    let n = t.value === String(e);
    return {
      label: t.label,
      onClick: () => c(t.value),
      value: t.value,
      icon: n
        ? (0, $.jsx)(g, { size: 16, className: `text-text-primary`, 'aria-hidden': `true` })
        : void 0,
    };
  });
  return (0, $.jsx)(L, {
    menuId: `version-dropdown-menu`,
    portal: !0,
    portalElement: n,
    focusLoop: !0,
    unmountOnHide: !0,
    isOpen: a,
    setIsOpen: o,
    trigger: (0, $.jsx)(be, {
      description: i(`com_ui_change_version`),
      portalElement: n,
      render: (0, $.jsx)(V, {
        size: `icon`,
        variant: `ghost`,
        asChild: !0,
        'aria-label': i(`com_ui_change_version`),
        children: (0, $.jsx)(b, {
          children: (0, $.jsx)(d, {
            size: 18,
            className: `text-text-secondary`,
            'aria-hidden': `true`,
            focusable: `false`,
          }),
        }),
      }),
    }),
    items: l,
    className: s ? `` : `absolute right-0 top-0 mt-2`,
  });
}
var $e = (0, J.memo)(function ({ artifact: e, exportData: t, portalElement: n }) {
  let r = G(),
    { handleDownload: i } = Xe(e);
  return (0, $.jsx)(
    se,
    {
      svg: t?.svg,
      dimensions: t?.dimensions,
      filename: e.title ?? r(`com_ui_mermaid_diagram`),
      buttonClassName: `h-9 w-9 p-0`,
      portalElement: n,
      onDownloadSource: i,
    },
    e.id,
  );
});
$e.displayName = `ArtifactMermaidExport`;
var et = e(je(), 1),
  tt = 13,
  nt = {
    javascript: `javascript`,
    typescript: `typescript`,
    python: `python`,
    css: `css`,
    json: `json`,
    markdown: `markdown`,
    html: `html`,
    xml: `xml`,
    sql: `sql`,
    yaml: `yaml`,
    shell: `shell`,
    bash: `shell`,
    tsx: `typescript`,
    jsx: `javascript`,
    c: `c`,
    cpp: `cpp`,
    java: `java`,
    go: `go`,
    rust: `rust`,
    kotlin: `kotlin`,
    swift: `swift`,
    php: `php`,
    ruby: `ruby`,
    r: `r`,
    lua: `lua`,
    scala: `scala`,
    perl: `perl`,
  },
  rt = {
    'text/html': `html`,
    'application/vnd.code-html': `html`,
    'application/vnd.react': `typescript`,
    'application/vnd.ant.react': `typescript`,
    'text/markdown': `markdown`,
    'text/md': `markdown`,
    'text/plain': `plaintext`,
    'application/vnd.mermaid': `markdown`,
  },
  it = `librechat-high-contrast-light`,
  at = `librechat-high-contrast-dark`,
  ot = `#1e1e1e`,
  st = (e, t) => {
    let n = e[t];
    if (n == null) throw Error(`Missing Monaco theme token: ${t}`);
    let r = n.split(/\s+/).map((e) => Number(e));
    if (r.length !== 3 || r.some((e) => !Number.isInteger(e)))
      throw Error(`Invalid Monaco theme token: ${t}`);
    return `#${r.map((e) => e.toString(16).padStart(2, `0`)).join(``)}`;
  },
  ct = (e, t, n) => {
    let r = (t) => st(e, t),
      i = (e) => r(e).slice(1);
    return {
      base: t,
      inherit: !1,
      rules: [
        { token: ``, foreground: i(`rgb-syntax-text`) },
        { token: `identifier`, foreground: i(`rgb-syntax-text`) },
        { token: `comment`, foreground: i(`rgb-syntax-comment`) },
        { token: `meta`, foreground: i(`rgb-syntax-meta`) },
        { token: `annotation`, foreground: i(`rgb-syntax-meta`) },
        { token: `delimiter`, foreground: i(`rgb-syntax-meta`) },
        { token: `predefined`, foreground: i(`rgb-syntax-builtin`) },
        { token: `class`, foreground: i(`rgb-syntax-builtin`) },
        { token: `keyword`, foreground: i(`rgb-syntax-keyword`) },
        { token: `literal`, foreground: i(`rgb-syntax-keyword`) },
        { token: `string`, foreground: i(`rgb-syntax-string`) },
        { token: `regexp`, foreground: i(`rgb-syntax-string`) },
        { token: `variable`, foreground: i(`rgb-syntax-attr`) },
        { token: `number`, foreground: i(`rgb-syntax-attr`) },
        { token: `type`, foreground: i(`rgb-syntax-attr`) },
        { token: `attribute.name`, foreground: i(`rgb-syntax-attr`) },
        { token: `tag`, foreground: i(`rgb-syntax-title`) },
        { token: `symbol`, foreground: i(`rgb-syntax-title`) },
      ],
      colors: {
        'editor.background': r(n),
        'editor.foreground': r(`rgb-syntax-text`),
        'editorLineNumber.foreground': r(`rgb-text-secondary`),
        'editorLineNumber.activeForeground': r(`rgb-text-primary`),
        'editorCursor.foreground': r(`rgb-ring-primary`),
        'editor.selectionBackground': r(`rgb-text-primary`),
        'editor.selectionForeground': r(`rgb-surface-primary`),
        'editor.inactiveSelectionBackground': r(`rgb-surface-hover-alt`),
        'editor.selectionHighlightBackground': r(`rgb-surface-hover-alt`),
        'editor.lineHighlightBackground': r(`rgb-surface-hover`),
        'editor.findMatchBackground': r(`rgb-surface-hover-alt`),
        'editor.findMatchBorder': r(`rgb-border-heavy`),
        'editor.findMatchHighlightBackground': r(`rgb-surface-hover-alt`),
        'editorWidget.background': r(`rgb-surface-dialog`),
        'editorWidget.border': r(`rgb-border-medium`),
        'input.background': r(`rgb-surface-primary`),
        'input.foreground': r(`rgb-text-primary`),
        'input.border': r(`rgb-border-medium`),
        focusBorder: r(`rgb-ring-primary`),
        'editorIndentGuide.background1': r(`rgb-border-light`),
        'editorIndentGuide.activeBackground1': r(`rgb-border-heavy`),
        'scrollbarSlider.background': r(`rgb-border-light`),
        'scrollbarSlider.hoverBackground': r(`rgb-border-heavy`),
        'scrollbarSlider.activeBackground': r(`rgb-border-xheavy`),
      },
    };
  },
  lt = ct(F, `vs`, `rgb-surface-primary-alt`),
  ut = ct(W, `vs-dark`, `rgb-presentation`),
  dt = { theme: `vs-dark`, background: ot },
  ft = { theme: it, background: lt.colors[`editor.background`] },
  pt = { theme: at, background: ut.colors[`editor.background`] };
function mt(e, t) {
  return t && nt[t] ? nt[t] : (rt[e ?? ``] ?? `plaintext`);
}
function ht(e) {
  return e.index == null
    ? null
    : { artifactId: e.id, messageId: e.messageId ?? ``, index: e.index };
}
function gt(e, t) {
  return e.artifactId === t.artifactId && e.messageId === t.messageId && e.index === t.index;
}
function _t(e, t) {
  return e.messageId === t.messageId && e.index === t.index;
}
var vt = function ({ artifact: e, monacoRef: t, readOnly: n }) {
    let { resolvedMode: r, highContrast: i } = (0, J.useContext)(U),
      { isSubmitting: a } = fe(),
      o = (n ?? !1) || a,
      {
        currentCode: s,
        codeArtifactId: c,
        retainedCode: l,
        setCurrentCode: u,
        rejectedCode: d,
        setRejectedCode: f,
        clearCode: p,
        codeSession: m,
        savedContent: h,
      } = k(),
      g = c === e.id ? s : l[e.id],
      [ee, _] = (0, J.useState)(null),
      { isMutating: v } = re(),
      y = (0, J.useRef)(e),
      b = (0, J.useRef)(v),
      x = (0, J.useRef)(ee),
      S = (0, J.useRef)(u),
      C = (0, J.useRef)(d),
      w = (0, J.useRef)(null),
      T = (0, J.useRef)(() => {}),
      E = (0, J.useRef)(g),
      te = (0, J.useRef)(m.current),
      D = (0, J.useRef)(null),
      O = (0, J.useRef)(g ?? null),
      A = (0, J.useRef)(null),
      j = () => m.current !== te.current,
      M = Me({
        onMutate: (e) => {
          ((b.current = !0), (x.current = e.updated), _(e.updated));
        },
        onSuccess: (e, t) => {
          if (((x.current = null), De(h, D.current ?? y.current.id, t.original, t.updated), j()))
            return;
          let n = w.current;
          ((w.current = null), _(null));
          let r = D.current ?? y.current.id;
          f(void 0, r);
          let i = ht(y.current);
          if (n == null || i == null || !gt(n, i)) return;
          let a = _t(n, t) ? t.updated : n.original;
          n.code.trim() !== a.trim() && (S.current(n.code, y.current.id), T.current(n.code, a));
        },
        onError: (e) => {
          let t = x.current;
          if (((x.current = null), j())) return;
          let n = w.current;
          ((w.current = null),
            ue(e) === 400 && t != null && f(t, D.current ?? y.current.id),
            _(null));
          let r = ht(y.current);
          n == null ||
            r == null ||
            !gt(n, r) ||
            (n.code.trim() !== n.original.trim() &&
              (S.current(n.code, y.current.id), T.current(n.code, n.original)));
        },
      }),
      N = (0, J.useRef)(M),
      P = (0, J.useRef)(e.content ?? ``),
      F = (0, J.useRef)(e.id),
      ie = (0, J.useRef)(o);
    ((y.current = e),
      (b.current = v),
      (x.current = ee),
      (N.current = M),
      (S.current = u),
      (C.current = d),
      (E.current = g),
      (T.current = (0, J.useCallback)(
        (e, t) => {
          let n = y.current,
            r = ht(n);
          if (o || r == null || e.length === 0) return;
          let i = t ?? R(h, n.id, n.content) ?? ``;
          if ((O.current !== e && (A.current = O.current), b.current)) {
            w.current = { ...r, code: e, original: i };
            return;
          }
          let a = e.trim() !== i.trim(),
            s = x.current == null || e.trim() !== x.current.trim();
          if (!a || !s) return;
          let c = C.current[n.id];
          (c == null || e.trim() !== c.trim()) &&
            ((te.current = m.current),
            (D.current = r.artifactId),
            S.current(e, n.id),
            N.current.mutate({ index: r.index, messageId: r.messageId, original: i, updated: e }));
        },
        [m, o, h],
      )));
    let I = (0, J.useRef)(null),
      L = (0, J.useCallback)((e, t) => {
        let n = e.getModel();
        !n || n.getValue() === t || ((I.current = t), n.setValue(t));
      }, []),
      z = (0, J.useMemo)(
        () =>
          (0, et.default)((e) => {
            T.current(e);
          }, 500),
        [],
      );
    ((0, J.useEffect)(() => () => z.cancel(), [e.id, z]),
      (0, J.useEffect)(() => {
        if (ie.current && !o && e.content != null) {
          let n = t.current;
          n && (L(n, e.content), (P.current = e.content));
        }
        ie.current = o;
      }, [o, e.content, t, L]),
      (0, J.useEffect)(() => {
        if (v || o) return;
        let e = w.current;
        if (e != null) {
          w.current = null;
          let t = ht(y.current);
          if (t != null && gt(e, t)) {
            let n = R(h, t.artifactId, y.current.content) ?? e.original;
            if (e.code.trim() !== n.trim()) {
              (S.current(e.code, y.current.id), T.current(e.code, n));
              return;
            }
          }
        }
        let n = O.current;
        if (n == null || A.current === n) return;
        let r = ht(y.current),
          i = R(h, y.current.id, y.current.content) ?? ``;
        if (n === i) return;
        A.current = n;
        let a = t.current;
        if (ne(h, y.current.id, n)) {
          (p(y.current.id), (P.current = i), a && L(a, i));
          return;
        }
        ((P.current = n), a && L(a, n));
        let s = C.current[y.current.id];
        (r == null || s == null || n.trim() !== s.trim()) && T.current(n, i);
      }, [v, o, h, p, t, L]),
      (0, J.useEffect)(() => {
        R(h, e.id, e.content);
      }, [e.id, e.content, h]),
      (0, J.useEffect)(() => {
        let n = t.current;
        if (!n || !o) return;
        let r = e.content ?? ``,
          i = P.current;
        if (r === i) return;
        let a = n.getModel();
        if (a) {
          if (r.startsWith(i) && i.length > 0) {
            let e = r.slice(i.length),
              t = a.getPositionAt(a.getValueLength());
            a.applyEdits([
              {
                range: {
                  startLineNumber: t.lineNumber,
                  startColumn: t.column,
                  endLineNumber: t.lineNumber,
                  endColumn: t.column,
                },
                text: e,
              },
            ]);
          } else a.setValue(r);
          ((P.current = r), n.revealLine(a.getLineCount()));
        }
      }, [e.content, o, t]),
      (0, J.useEffect)(() => {
        if (e.id === F.current) return;
        ((F.current = e.id), (w.current = null));
        let n = R(h, e.id, e.content),
          r = E.current != null && E.current !== n && ne(h, e.id, E.current);
        r && p(e.id);
        let i = r ? void 0 : E.current,
          a = i ?? n;
        P.current = a ?? ``;
        let o = t.current;
        (o && a != null && L(o, a), i != null && T.current(i));
      }, [e.id, e.content, h, p, t, L]));
    let oe = (0, J.useCallback)(
        (e) => {
          if (e === void 0) return;
          let t = I.current;
          ((I.current = null),
            !o &&
              ((P.current = e),
              (t == null || e !== t) && (u(e, y.current.id), e.length > 0 && z(e))));
        },
        [o, z, u],
      ),
      se = (0, J.useCallback)((e) => {
        (e.editor.defineTheme(it, lt), e.editor.defineTheme(at, ut));
        let { typescriptDefaults: t, javascriptDefaults: n, JsxEmit: r } = e.languages.typescript,
          i = { noSemanticValidation: !0, noSyntaxValidation: !0 },
          a = { allowNonTsExtensions: !0, allowJs: !0, jsx: r.React };
        (t.setDiagnosticsOptions(i),
          n.setDiagnosticsOptions(i),
          t.setCompilerOptions(a),
          n.setCompilerOptions(a));
      }, []),
      ce = (0, J.useCallback)(
        (n) => {
          if (((t.current = n), (P.current = n.getModel()?.getValue() ?? e.content ?? ``), o)) {
            let e = n.getModel();
            e && n.revealLine(e.getLineCount());
          }
        },
        [t],
      ),
      le = mt(e.type, e.language),
      B = dt;
    i && (B = r === `dark` ? pt : ft);
    let V = ae(),
      H = (0, J.useMemo)(
        () => ({
          readOnly: o,
          minimap: { enabled: !1 },
          lineNumbers: `on`,
          scrollBeyondLastLine: !1,
          fontSize: Math.round(tt * V),
          tabSize: 2,
          wordWrap: `on`,
          automaticLayout: !0,
          padding: { top: 8 },
          renderLineHighlight: o ? `none` : `line`,
          cursorStyle: o ? `underline-thin` : `line`,
          scrollbar: {
            vertical: `visible`,
            horizontal: `auto`,
            verticalScrollbarSize: 8,
            horizontalScrollbarSize: 8,
            useShadows: !1,
            alwaysConsumeMouseWheel: !1,
          },
          overviewRulerLanes: 0,
          hideCursorInOverviewRuler: !0,
          overviewRulerBorder: !1,
          folding: !1,
          glyphMargin: !1,
          colorDecorators: !o,
          occurrencesHighlight: o ? `off` : `singleFile`,
          selectionHighlight: !o,
          renderValidationDecorations: o ? `off` : `editable`,
          quickSuggestions: !o,
          suggestOnTriggerCharacters: !o,
          parameterHints: { enabled: !o },
          hover: { enabled: o ? `off` : `on` },
          matchBrackets: o ? `never` : `always`,
        }),
        [o, V],
      );
    return e.content
      ? (0, $.jsx)(`div`, {
          className: `h-full w-full`,
          style: { backgroundColor: B.background },
          children: (0, $.jsx)(Be, {
            height: `100%`,
            language: o ? `plaintext` : le,
            theme: B.theme,
            defaultValue: g ?? e.content,
            onChange: oe,
            beforeMount: se,
            onMount: ce,
            options: H,
          }),
        })
      : null;
  },
  yt = Ne(() =>
    T(
      () => import(`./SandboxArtifactTabs.9bmJ6YkY.js`).then((e) => e.t),
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29,
      ]),
      import.meta.url,
    ),
  );
function bt() {
  let e = G();
  return (0, $.jsxs)(`div`, {
    className: `bg-surface-primary text-text-secondary flex h-full w-full items-center justify-center`,
    role: `status`,
    children: [
      (0, $.jsx)(P, { className: `size-5`, 'aria-hidden': `true` }),
      (0, $.jsx)(`span`, { className: `sr-only`, children: e(`com_ui_loading`) }),
    ],
  });
}
function xt({ artifact: e, isSharedConvo: t, onMermaidExportReady: n }) {
  let r = G(),
    i = A(e.id),
    a = (0, J.useRef)(null),
    o = i ?? e.content ?? ``,
    s = t === !0 || e.index == null;
  return (0, $.jsxs)(`div`, {
    className: `flex h-full w-full flex-col`,
    children: [
      (0, $.jsx)(E, {
        value: `code`,
        id: `artifacts-code`,
        className: `h-full w-full grow overflow-auto`,
        tabIndex: -1,
        children: (0, $.jsx)(vt, { artifact: e, monacoRef: a, readOnly: s }),
      }),
      (0, $.jsx)(E, {
        value: `preview`,
        className: `min-h-0 w-full flex-1 overflow-hidden p-4`,
        tabIndex: -1,
        children: (0, $.jsx)(
          N,
          {
            exportFilename: e.title ?? r(`com_ui_mermaid_diagram`),
            fillContainer: !0,
            onExportReady: n,
            showExpandButton: !1,
            showHeader: !1,
            children: o,
          },
          e.id,
        ),
      }),
    ],
  });
}
function St(e) {
  return e.artifact.type === `application/vnd.mermaid`
    ? (0, $.jsx)(xt, {
        artifact: e.artifact,
        isSharedConvo: e.isSharedConvo,
        onMermaidExportReady: e.onMermaidExportReady,
      })
    : (0, $.jsx)(J.Suspense, { fallback: (0, $.jsx)(bt, {}), children: (0, $.jsx)(yt, { ...e }) });
}
var Ct = t({ default: () => Et }),
  wt = 32,
  Tt = 0.3;
function Et() {
  let e = G(),
    { isMutating: t } = re(),
    { isSharedConvo: n } = ie(),
    { canUndock: r } = fe(),
    [o, l] = w(Pe),
    [d, m] = w(ze),
    h = o != null,
    g = (0, J.useRef)(null),
    _ = ke(868) && !h,
    y = O(`(prefers-reduced-motion: reduce)`),
    b = (0, J.useRef)(),
    x = (0, J.useRef)(null),
    [C, T] = (0, J.useState)(null),
    E = (0, J.useRef)(null),
    ne = (0, J.useRef)(null),
    [k, A] = (0, J.useState)(!1),
    [N, F] = (0, J.useState)(!1),
    [L, R] = (0, J.useState)(!1),
    [z, ae] = (0, J.useState)(!1),
    [se, le] = (0, J.useState)(typeof document > `u` ? !1 : document.fullscreenEnabled),
    [ue, B] = (0, J.useState)(!1),
    [H, pe] = (0, J.useState)(90),
    [me, he] = (0, J.useState)(!1),
    [U, W] = (0, J.useState)(0),
    [ge, _e] = (0, J.useState)(!1),
    [ve, ye] = (0, J.useState)(null),
    be = (0, J.useRef)(0),
    xe = (0, J.useRef)(90),
    Se = S(M.artifactsVisibility),
    we = ee(M.currentArtifactId),
    { showToast: Ee } = oe(),
    De = z || h ? (C ?? void 0) : void 0,
    je = (0, J.useMemo)(
      () => [
        { value: `code`, label: e(`com_ui_code`), icon: (0, $.jsx)(i, { className: `size-4` }) },
        {
          value: `preview`,
          label: e(`com_ui_preview`),
          icon: (0, $.jsx)(a, { className: `size-4` }),
        },
      ],
      [e],
    );
  ((0, J.useEffect)(() => {
    let e = document.activeElement;
    (e instanceof HTMLElement && e !== document.body && (ne.current = e), B(!0));
    let t = setTimeout(() => A(!0), _ ? 50 : 30);
    return () => {
      (clearTimeout(t), B(!1));
    };
  }, [_]),
    (0, J.useEffect)(() => {
      let e = x.current?.ownerDocument ?? document;
      le(e.fullscreenEnabled);
      let t = () => {
        let t = x.current;
        ae(t !== null && e.fullscreenElement === t);
      };
      return (
        e.addEventListener(`fullscreenchange`, t),
        () => e.removeEventListener(`fullscreenchange`, t)
      );
    }, [ue]),
    (0, J.useEffect)(() => {
      if (!_) {
        W(0);
        return;
      }
      if (H <= 50) W(0);
      else if (H >= 100) W(wt);
      else {
        let e = (H - 50) / 50;
        W(Math.round(e * wt));
      }
    }, [H, _]));
  let {
      activeTab: Me,
      setActiveTab: K,
      currentIndex: Ne,
      currentArtifact: q,
      orderedArtifactIds: Be,
      setCurrentArtifactId: Y,
    } = Ye(),
    X = (0, J.useCallback)(() => {
      let e = ne.current,
        t = q?.id;
      requestAnimationFrame(() => {
        if (e?.isConnected) {
          e.focus();
          return;
        }
        Array.from(document.querySelectorAll(`[data-artifact-trigger]`))
          .find((e) => e.dataset.artifactTrigger === t)
          ?.focus();
      });
    }, [q?.id]),
    He = (0, J.useCallback)(
      (e) => {
        q?.id != null && ye({ artifactId: q.id, data: e });
      },
      [q?.id],
    ),
    Ue = ve != null && ve.artifactId === q?.id ? ve.data : null,
    We = q?.type === I.MERMAID,
    Ge = (0, J.useCallback)(() => {
      if (_) {
        (F(!0), A(!1));
        let e = () => {
          (we(), Se(!1), F(!1), pe(90), X());
        };
        y ? e() : setTimeout(e, 250);
        return;
      }
      (we(), Se(!1), X());
    }, [_, y, we, X, Se]),
    Ke = (0, J.useCallback)(() => {
      if (h) {
        (m(!0), l(null));
        return;
      }
      let t = Fe(window);
      if (t == null) {
        Ee({ status: `error`, message: e(`com_ui_undock_artifacts_blocked`) });
        return;
      }
      (m(!0), l({ window: t, root: Le(document, t.document) }));
    }, [h, e, l, m, Ee]);
  ((0, J.useEffect)(() => {
    if (!d || !ue) return;
    let e = g.current;
    e != null && (e.focus(), m(!1));
  }, [d, ue, m]),
    Te(E, _ && k && !N, Ge));
  let qe = de(q?.type),
    Je = Ce(q?.type),
    Z = null;
  qe ? (Z = `preview`) : Je && (Z = `code`);
  let Q = Z ?? Me,
    Xe = (0, J.useMemo)(() => {
      if (Z == null) return je;
      let e = Ae(q?.title),
        t = je.find((e) => e.value === Z);
      return t ? [e ? { ...t, label: e } : t] : je;
    }, [je, Z, q?.title]),
    [et, tt] = w(Ie);
  (0, J.useEffect)(() => {
    let e = q?.id ?? null;
    e !== et && (tt(e), e != null && Z == null && Me !== `preview` && K(`preview`));
  }, [Me, Z, q?.id, et, K, tt]);
  let nt = (0, J.useCallback)(async () => {
      let t = q?.content ?? ``;
      if (!t) return;
      let n = h ? E.current?.ownerDocument : void 0,
        r = !1,
        i = n?.defaultView?.navigator.clipboard;
      if (i != null)
        try {
          (await i.writeText(t), (r = !0));
        } catch (e) {
          j.error(`Failed to copy the artifact through the clipboard API:`, e);
        }
      if (
        (!r && n != null && (r = Re(n, t)),
        !r && n == null && (r = (0, Ve.default)(t, { format: `text/plain` })),
        !r)
      ) {
        Ee({ status: `error`, message: e(`com_ui_copy_failed`) });
        return;
      }
      (_e(!0), setTimeout(() => _e(!1), 3e3));
    }, [q?.content, h, e, Ee]),
    rt = (e) => {
      (he(!0), (be.current = e.clientY), (xe.current = H), e.target.setPointerCapture(e.pointerId));
    },
    it = (e) => {
      if (!me) return;
      let t = ((be.current - e.clientY) / window.innerHeight) * 100,
        n = Math.max(10, Math.min(100, xe.current + t));
      pe(n);
    },
    at = (e) => {
      me &&
        (he(!1),
        e.target.releasePointerCapture(e.pointerId),
        H < 30 ? Ge() : pe(H > 95 ? 100 : H < 60 ? 50 : 90));
    },
    ot = (e) => {
      let t = H;
      if (e.key === `ArrowUp`) t = Math.min(100, H + 10);
      else if (e.key === `ArrowDown`) t = Math.max(10, H - 10);
      else if (e.key === `Home`) t = 10;
      else if (e.key === `End`) t = 100;
      else return;
      (e.preventDefault(), pe(t));
    };
  if (!q || !ue) return null;
  let st = () => {
      R(!0);
      let e = b.current?.getClient();
      (e && e.dispatch({ type: `refresh` }), setTimeout(() => R(!1), 750));
    },
    ct = async () => {
      let e = x.current;
      if (!e) return;
      let t = e.ownerDocument;
      try {
        if (t.fullscreenElement === e) {
          await t.exitFullscreen();
          return;
        }
        await e.requestFullscreen();
      } catch (e) {
        j.error(`Failed to toggle artifact fullscreen mode:`, e);
      }
    },
    lt = U > 0 ? (Math.min(U, wt) / wt) * Tt : 0;
  return (0, $.jsx)(te, {
    value: Q,
    onValueChange: K,
    asChild: !0,
    children: (0, $.jsxs)(`div`, {
      ref: x,
      className: `bg-surface-primary flex h-full w-full flex-col`,
      children: [
        _ &&
          (0, $.jsx)(`div`, {
            className: D(
              `bg-surface-overlay fixed inset-0 z-[99] will-change-[opacity,backdrop-filter] motion-reduce:transition-none`,
              k && !N
                ? `transition-all duration-300`
                : `pointer-events-none opacity-0 backdrop-blur-none transition-opacity duration-150`,
              U < 8 && k && !N ? `pointer-events-none` : ``,
            ),
            style: {
              opacity: k && !N ? lt : 0,
              backdropFilter: k && !N ? `blur(${U}px)` : `none`,
              WebkitBackdropFilter: k && !N ? `blur(${U}px)` : `none`,
            },
            onClick: U >= 8 ? Ge : void 0,
            'aria-hidden': `true`,
          }),
        (0, $.jsxs)(`div`, {
          ref: E,
          id: `artifact-viewer`,
          role: _ ? `dialog` : `region`,
          'aria-modal': _ || void 0,
          'aria-label': q.title ?? e(`com_ui_artifacts`),
          className: D(
            `bg-surface-primary text-text-primary flex w-full flex-col text-xl motion-reduce:transition-none`,
            _
              ? D(
                  `fixed z-[100] shadow-[0_-10px_60px_rgba(0,0,0,0.35)]`,
                  z ? `inset-0 rounded-none` : `inset-x-0 bottom-0 rounded-t-[20px]`,
                  k && !N
                    ? `translate-y-0 opacity-100`
                    : `translate-y-full opacity-0 transition-all`,
                  me ? `` : `transition-all duration-300`,
                )
              : D(
                  `h-full shadow-2xl`,
                  k && !N
                    ? `translate-x-0 opacity-100 transition-all duration-150`
                    : `translate-x-5 opacity-0 transition-all duration-300`,
                ),
          ),
          style: _ ? { height: z ? `100%` : `${H}vh` } : { overflow: `hidden` },
          children: [
            _ &&
              !z &&
              (0, $.jsx)(`div`, {
                role: `separator`,
                tabIndex: 0,
                'aria-label': e(`com_ui_resize_artifact_panel`),
                'aria-orientation': `horizontal`,
                'aria-valuemin': 10,
                'aria-valuemax': 100,
                'aria-valuenow': Math.round(H),
                className: `bg-surface-primary-alt focus-visible:ring-focus-subtle flex shrink-0 cursor-grab items-center justify-center pt-2.5 pb-1.5 focus-visible:ring-2 focus-visible:outline-hidden focus-visible:ring-inset active:cursor-grabbing`,
                onPointerDown: rt,
                onPointerMove: it,
                onPointerUp: at,
                onPointerCancel: at,
                onKeyDown: ot,
                children: (0, $.jsx)(`div`, {
                  className: `bg-border-xheavy high-contrast:opacity-100 h-1 w-12 rounded-full opacity-40 transition-all duration-200 active:opacity-60 motion-reduce:transition-none`,
                }),
              }),
            (0, $.jsxs)(`div`, {
              className: D(
                `border-border-light bg-surface-primary-alt flex h-[3.25rem] shrink-0 items-center justify-between gap-2 border-b p-2 transition-all duration-300 motion-reduce:transition-none`,
                _ ? `justify-center` : `overflow-hidden`,
              ),
              children: [
                !_ &&
                  (0, $.jsx)(`div`, {
                    className: D(
                      `flex items-center transition-all duration-500 motion-reduce:transition-none`,
                      k && !N ? `translate-x-0 opacity-100` : `-translate-x-2 opacity-0`,
                    ),
                    children: (0, $.jsx)(Oe, {
                      options: Xe,
                      value: Q,
                      onChange: K,
                      disabled: t && Q !== `code`,
                      buttonClassName: `h-9 px-3 gap-1.5`,
                    }),
                  }),
                (0, $.jsxs)(`div`, {
                  className: D(
                    `flex items-center gap-2 transition-all duration-500 motion-reduce:transition-none`,
                    _ ? `min-w-max` : ``,
                    k && !N ? `translate-x-0 opacity-100` : `translate-x-2 opacity-0`,
                  ),
                  children: [
                    Q === `preview` &&
                      !We &&
                      (0, $.jsx)(V, {
                        size: `icon`,
                        variant: `ghost`,
                        className: `h-9 w-9`,
                        onClick: st,
                        disabled: L,
                        'aria-label': e(`com_ui_refresh`),
                        children: L
                          ? (0, $.jsx)(P, { className: `m-auto size-4` })
                          : (0, $.jsx)(c, {
                              className: `size-4 transition-transform duration-200 motion-reduce:transition-none`,
                              'aria-hidden': `true`,
                            }),
                      }),
                    (Q === `preview` || z) &&
                      se &&
                      (0, $.jsx)(V, {
                        size: `icon`,
                        variant: `ghost`,
                        className: `h-9 w-9`,
                        onClick: ct,
                        'aria-label': e(z ? `com_ui_exit_full_screen` : `com_ui_enter_full_screen`),
                        children: z
                          ? (0, $.jsx)(p, { className: `size-4`, 'aria-hidden': `true` })
                          : (0, $.jsx)(v, { className: `size-4`, 'aria-hidden': `true` }),
                      }),
                    Q !== `preview` &&
                      t &&
                      (0, $.jsx)(c, { className: `text-text-secondary size-4 animate-spin` }),
                    Be.length > 1 &&
                      (0, $.jsx)(Qe, {
                        currentIndex: Ne,
                        totalVersions: Be.length,
                        portalElement: De,
                        onVersionChange: (e) => {
                          let t = Be[e];
                          t && Y(t);
                        },
                      }),
                    (0, $.jsx)(ce, { isCopied: ge, iconOnly: !0, portalElement: De, onClick: nt }),
                    We
                      ? (0, $.jsx)($e, { artifact: q, exportData: Ue, portalElement: De })
                      : (0, $.jsx)(Ze, { artifact: q }),
                    !_ &&
                      (r || h) &&
                      (0, $.jsx)(V, {
                        ref: g,
                        size: `icon`,
                        variant: `ghost`,
                        className: `h-9 w-9`,
                        onClick: Ke,
                        'aria-label': e(h ? `com_ui_dock_artifacts` : `com_ui_undock_artifacts`),
                        children: h
                          ? (0, $.jsx)(f, { className: `size-4`, 'aria-hidden': `true` })
                          : (0, $.jsx)(u, { className: `size-4`, 'aria-hidden': `true` }),
                      }),
                    (0, $.jsx)(V, {
                      size: `icon`,
                      variant: `ghost`,
                      className: `h-9 w-9`,
                      onClick: Ge,
                      'aria-label': e(`com_ui_close`),
                      children: (0, $.jsx)(s, { className: `size-4`, 'aria-hidden': `true` }),
                    }),
                  ],
                }),
              ],
            }),
            (0, $.jsxs)(`div`, {
              className: `bg-surface-primary relative flex min-h-0 flex-1 flex-col overflow-hidden`,
              children: [
                (0, $.jsx)(`div`, {
                  className: `absolute inset-0 flex flex-col`,
                  children: (0, $.jsx)(St, {
                    artifact: q,
                    previewRef: b,
                    isSharedConvo: n,
                    onMermaidExportReady: He,
                  }),
                }),
                (0, $.jsx)(`div`, {
                  className: D(
                    `bg-surface-media-overlay/70 text-text-on-media absolute inset-0 z-[60] flex items-center justify-center backdrop-blur-xs transition-opacity duration-300 ease-in-out`,
                    L ? `pointer-events-auto opacity-100` : `pointer-events-none opacity-0`,
                  ),
                  'aria-hidden': !L,
                  role: `status`,
                  children: (0, $.jsx)(`div`, {
                    className: D(
                      `transition-transform duration-300 ease-in-out`,
                      L ? `scale-100` : `scale-95`,
                    ),
                    children: (0, $.jsx)(P, { className: `m-auto size-6` }),
                  }),
                }),
              ],
            }),
            _ &&
              (0, $.jsx)(`div`, {
                className: `border-border-light bg-surface-primary-alt shrink-0 border-t p-2`,
                children: (0, $.jsx)(Oe, {
                  fullWidth: !0,
                  options: Xe,
                  value: Q,
                  onChange: K,
                  disabled: t && Q !== `code`,
                }),
              }),
          ],
        }),
        (0, $.jsx)(`div`, {
          ref: T,
          className: `z-[101]`,
          'data-testid': `artifact-fullscreen-portal`,
        }),
      ],
    }),
  });
}
export { Et as default, vt as n, Q as r, Ct as t };
