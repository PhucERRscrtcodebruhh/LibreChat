import { o as e } from './rolldown-runtime.C0FnF6B9.js';
import { at as t, rt as n } from './advanced-inputs.BJDnsHUg.js';
import {
  Aa as r,
  B as i,
  Fn as a,
  Ft as o,
  Ii as s,
  M as c,
  N as l,
  Oa as u,
  Ot as d,
  Pa as f,
  Pi as p,
  Tr as m,
  as as h,
  gr as g,
  oo as _,
  ss as ee,
  ti as v,
} from './vendor.DpBpdTS1.js';
import { t as y } from './i18n.C6_IvY32.js';
import { $ as b, H as x, L as S, Q as C, V as w, nt as T, z as te } from './radix-ui.tIiBXdQR.js';
import { r as E } from './query-devtools.C2qG3_c-.js';
import {
  a as D,
  h as O,
  i as k,
  n as ne,
  r as re,
  t as ie,
  v as A,
} from './tanstack-vendor.DDeX4vva.js';
import {
  $_ as ae,
  $y as j,
  Ah as M,
  Bb as N,
  Bv as oe,
  Co as se,
  Eg as ce,
  Gg as le,
  H_ as P,
  Hd as ue,
  Ig as F,
  Jf as I,
  K_ as L,
  Mg as de,
  O_ as fe,
  Q_ as R,
  Qf as z,
  Qy as B,
  Rg as pe,
  X_ as me,
  Z_ as he,
  Zf as ge,
  _h as _e,
  a_ as ve,
  b_ as ye,
  cg as V,
  ev as be,
  fb as H,
  h_ as xe,
  i_ as U,
  kg as Se,
  kl as W,
  lb as G,
  lg as Ce,
  mv as we,
  o_ as K,
  og as Te,
  pv as q,
  r_ as Ee,
  t_ as De,
  tv as J,
  vh as Oe,
  vm as Y,
  wg as ke,
  wo as Ae,
  xt as je,
  xv as Me,
  y_ as Ne,
  ym as Pe,
  yr as Fe,
  yv as Ie,
} from './hooks.CliY9jTn.js';
import { n as X } from './framer-motion.sQ5ndFcX.js';
import { a as Le } from './virtualization.CT5gCaFG.js';
import { n as Re } from './useBalanceSummary.VOg6l8dt.js';
import { t as ze } from './security-ui.5zGvIlor.js';
var Be = (e = !0) =>
    A([H.langfuseConnection], () => N.getLangfuseConnection(), {
      enabled: e,
      refetchOnWindowFocus: !1,
    }),
  Ve = (e, t = !0) =>
    A([H.langfuseSessionLink, e], () => N.getLangfuseSessionLink(e), {
      enabled: t,
      refetchOnWindowFocus: !1,
    }),
  He = () => {
    let e = E();
    return O((e) => N.updateLangfuseConnection(e), {
      mutationKey: [G.updateLangfuseConnection],
      onSuccess: (t) => {
        (e.setQueryData([H.langfuseConnection], t), e.removeQueries([H.langfuseSessionLink]));
      },
    });
  },
  Ue = () => O((e) => N.testLangfuseConnection(e), { mutationKey: [G.testLangfuseConnection] }),
  We = (e) =>
    A([H.memories], () => N.getMemories(), {
      refetchOnWindowFocus: !1,
      refetchOnReconnect: !1,
      refetchOnMount: !1,
      ...e,
    }),
  Ge = () => {
    let e = E();
    return O(
      ({ key: e, id: t, agentId: n }) => {
        if (t) return N.deleteMemoryById(t, n);
        if (e) return N.deleteMemory(e, n);
        throw Error(`Memory address is required.`);
      },
      {
        onSuccess: () => {
          e.invalidateQueries([H.memories]);
        },
      },
    );
  },
  Ke = (e) => {
    let t = E();
    return O(
      ({ key: e, id: t, value: n, originalKey: r, agentId: i }) => {
        if (t) return N.updateMemoryById(t, n, e, i);
        if (e) return N.updateMemory(e, n, r, i);
        throw Error(`Memory address is required.`);
      },
      {
        ...e,
        onSuccess: (...n) => {
          (t.invalidateQueries([H.memories]), e?.onSuccess?.(...n));
        },
      },
    );
  },
  qe = (e) => {
    let t = E();
    return O([G.updateMemoryPreferences], (e) => N.updateMemoryPreferences(e), {
      ...e,
      onSuccess: (...n) => {
        (t.invalidateQueries([H.user]), e?.onSuccess?.(...n));
      },
    });
  },
  Je = (e) => {
    let t = E();
    return O(
      ({ key: e, value: t, agentId: n }) => N.createMemory({ key: e, value: t, agentId: n }),
      {
        ...e,
        onSuccess: (n, r, i) => {
          (t.setQueryData([H.memories], (e) => {
            if (!e) return e;
            let t = [...e.memories, n.memory],
              r = t.reduce((e, t) => e + (t.agentId ? 0 : t.tokenCount || 0), 0),
              i = e.tokenLimit,
              a = e.usagePercentage;
            return (
              i && i > 0 && (a = Math.min(100, Math.round((r / i) * 100))),
              { ...e, memories: t, totalTokens: r, usagePercentage: a }
            );
          }),
            e?.onSuccess?.(n, r, i));
        },
      },
    );
  },
  Ye = c(
    `uiScale`,
    1,
    (() => {
      let e = l(() => localStorage);
      return {
        ...e,
        setItem: (t, n) => {
          (e.setItem(t, n), Ie(n));
        },
        subscribe: (t, n, r) =>
          e.subscribe?.(
            t,
            (e) => {
              (Ie(e), n(e));
            },
            r,
          ) ?? (() => void 0),
      };
    })(),
    { getOnInit: !0 },
  ),
  Xe = d((e) => Me(e(Ye))),
  Z = e(t(), 1),
  Q = n(),
  Ze = (e) => /^(?:[a-f0-9]{8}|[a-f0-9]{32})$/.test(e.trim());
function Qe({ value: e, onChange: t }) {
  let n = W();
  return (0, Q.jsx)(De, {
    'aria-label': n(`com_ui_backup_code_verification_required`),
    value: e,
    onChange: (e) => t(e.target.value.trim()),
    autoComplete: `one-time-code`,
    autoCapitalize: `none`,
    spellCheck: !1,
  });
}
var $e = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.2 },
  },
  et = ({ backupCodes: e, onDownload: t, downloaded: n, onNext: r, isCompleting: i = !1 }) => {
    let a = W();
    return (0, Q.jsxs)(X.div, {
      ...$e,
      className: `text-text-primary space-y-6`,
      children: [
        (0, Q.jsx)(`p`, {
          className: `text-text-primary text-sm break-keep`,
          children: a(`com_ui_download_backup_tooltip`),
        }),
        (0, Q.jsx)(`div`, {
          className: `bg-surface-secondary grid grid-cols-1 gap-4 rounded-xl p-4`,
          children: e.map((e, t) =>
            (0, Q.jsx)(
              X.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: t * 0.1 },
                className: `bg-surface-tertiary min-w-0 rounded-lg p-3`,
                children: (0, Q.jsxs)(`div`, {
                  className: `flex items-center justify-between gap-3`,
                  children: [
                    (0, Q.jsxs)(`span`, {
                      className: `text-text-primary shrink-0 text-sm`,
                      children: [`#`, t + 1],
                    }),
                    (0, Q.jsx)(`span`, {
                      className: `text-text-primary min-w-0 font-mono text-sm break-all`,
                      children: e,
                    }),
                  ],
                }),
              },
              e,
            ),
          ),
        }),
        (0, Q.jsxs)(`div`, {
          className: `flex gap-4`,
          children: [
            (0, Q.jsxs)(V, {
              variant: `outline`,
              onClick: t,
              className: `flex-1 gap-2`,
              'aria-label': a(`com_ui_download_backup`),
              children: [
                (0, Q.jsx)(p, { className: `h-4 w-4`, 'aria-hidden': `true` }),
                (0, Q.jsx)(`span`, {
                  className: `hidden sm:inline`,
                  children: a(`com_ui_download_backup`),
                }),
              ],
            }),
            (0, Q.jsx)(V, {
              onClick: r,
              disabled: !n || i,
              className: `flex-1`,
              children: a(i ? `com_ui_loading` : `com_ui_complete_setup`),
            }),
          ],
        }),
      ],
    });
  },
  tt = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.2 },
  },
  nt = ({ secret: e, otpauthUrl: t, onNext: n }) => {
    let r = W();
    return (0, Q.jsxs)(X.div, {
      ...tt,
      className: `text-text-primary space-y-6`,
      children: [
        (0, Q.jsxs)(`div`, {
          className: `flex flex-col items-center space-y-6`,
          children: [
            (0, Q.jsx)(X.div, {
              initial: { scale: 0.8, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              className: `bg-surface-fixed max-w-full min-w-0 rounded-2xl p-4 shadow-lg`,
              children: (0, Q.jsx)(ze, {
                value: t,
                size: 240,
                className: `h-auto w-60 max-w-full`,
                title: r(`com_ui_2fa_scan_qr`),
              }),
            }),
            (0, Q.jsxs)(`div`, {
              className: `w-full space-y-3`,
              children: [
                (0, Q.jsx)(`p`, {
                  className: `text-text-primary text-sm font-medium`,
                  children: r(`com_ui_secret_key`),
                }),
                (0, Q.jsx)(fe, {
                  value: e,
                  readOnly: !0,
                  showCopy: !0,
                  controlsOnHover: !0,
                  'aria-label': r(`com_ui_secret_key`),
                  className: `font-mono text-lg tracking-wider`,
                }),
              ],
            }),
          ],
        }),
        (0, Q.jsx)(V, { onClick: n, className: `w-full`, children: r(`com_ui_continue`) }),
      ],
    });
  },
  rt = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.2 },
  },
  it = ({ token: e, onTokenChange: t, isVerifying: n, onNext: r }) => {
    let a = W();
    return (0, Q.jsxs)(X.div, {
      ...rt,
      className: `text-text-primary space-y-8`,
      children: [
        (0, Q.jsx)(`div`, {
          className: `flex justify-center`,
          children: (0, Q.jsxs)(Ee, {
            'aria-label': a(`com_ui_2fa_verification_required`),
            value: e,
            onChange: t,
            maxLength: 6,
            pattern: i,
            className: `gap-2`,
            children: [
              (0, Q.jsx)(U, {
                children: Array.from({ length: 3 }).map((e, t) => (0, Q.jsx)(K, { index: t }, t)),
              }),
              (0, Q.jsx)(ve, {}),
              (0, Q.jsx)(U, {
                children: Array.from({ length: 3 }).map((e, t) =>
                  (0, Q.jsx)(K, { index: t + 3 }, t + 3),
                ),
              }),
            ],
          }),
        }),
        (0, Q.jsx)(V, {
          onClick: r,
          disabled: n || e.length !== 6,
          className: `w-full`,
          children: a(`com_ui_verify`),
        }),
      ],
    });
  },
  at = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.2 },
  },
  ot = ({ isGenerating: e, onGenerate: t }) => {
    let n = W();
    return (0, Q.jsx)(X.div, {
      ...at,
      className: `text-text-primary space-y-6`,
      children: (0, Q.jsxs)(`div`, {
        className: `bg-surface-secondary rounded-xl p-6 sm:-mx-4`,
        children: [
          (0, Q.jsx)(`h3`, {
            className: `text-text-primary mb-4 flex justify-center text-lg font-medium`,
            children: n(`com_ui_2fa_account_security`),
          }),
          (0, Q.jsxs)(V, {
            variant: `default`,
            onClick: t,
            className: `flex w-full`,
            disabled: e,
            children: [
              e
                ? (0, Q.jsx)(L, { className: `size-5` })
                : (0, Q.jsx)(a, { className: `size-5`, 'aria-hidden': `true` }),
              n(e ? `com_ui_generating` : `com_ui_generate_qrcode`),
            ],
          }),
        ],
      }),
    });
  },
  st = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.2 },
  },
  ct = ({ onDisable: e, isDisabling: t }) => {
    let n = W(),
      [r, a] = (0, Z.useState)(``),
      [o, s] = (0, Z.useState)(!1);
    return (0, Q.jsxs)(X.div, {
      ...st,
      className: `text-text-primary space-y-8`,
      children: [
        (0, Q.jsx)(`div`, {
          className: `flex justify-center`,
          children: o
            ? (0, Q.jsx)(Qe, { value: r, onChange: a })
            : (0, Q.jsx)(Ee, {
                'aria-label': n(`com_ui_2fa_verification_required`),
                value: r,
                onChange: a,
                maxLength: 6,
                pattern: i,
                className: `gap-2`,
                children: (0, Q.jsxs)(Q.Fragment, {
                  children: [
                    (0, Q.jsxs)(U, {
                      children: [
                        (0, Q.jsx)(K, { index: 0 }),
                        (0, Q.jsx)(K, { index: 1 }),
                        (0, Q.jsx)(K, { index: 2 }),
                      ],
                    }),
                    (0, Q.jsx)(ve, {}),
                    (0, Q.jsxs)(U, {
                      children: [
                        (0, Q.jsx)(K, { index: 3 }),
                        (0, Q.jsx)(K, { index: 4 }),
                        (0, Q.jsx)(K, { index: 5 }),
                      ],
                    }),
                  ],
                }),
              }),
        }),
        (0, Q.jsxs)(V, {
          variant: `destructive`,
          onClick: () => e(r, o),
          disabled: t || !(o ? Ze(r) : r.length === 6),
          className: `w-full rounded-xl px-6 py-3 transition-all disabled:opacity-50`,
          children: [
            t && (0, Q.jsx)(L, { className: `mr-2` }),
            n(t ? `com_ui_disabling` : `com_ui_2fa_disable`),
          ],
        }),
        (0, Q.jsx)(V, {
          type: `button`,
          variant: `link`,
          onClick: () => s(!o),
          className: `text-text-primary h-auto p-0 text-sm hover:underline`,
          children: n(o ? `com_ui_use_2fa_code` : `com_ui_use_backup_code`),
        }),
      ],
    });
  },
  lt = ({ theme: e, onChange: t, portal: n = !0, portalElement: r, popoverClassName: i }) => {
    let a = W(),
      o = [
        { value: `system`, label: a(`com_nav_theme_system`) },
        { value: `dark`, label: a(`com_nav_theme_dark`) },
        { value: `light`, label: a(`com_nav_theme_light`) },
        { value: `high-contrast-light`, label: a(`com_nav_theme_high_contrast_light`) },
        { value: `high-contrast-dark`, label: a(`com_nav_theme_high_contrast_dark`) },
      ],
      s = `theme-selector-label`;
    return (0, Q.jsxs)(`div`, {
      className: `flex flex-wrap items-center justify-between gap-2`,
      children: [
        (0, Q.jsx)(`div`, { id: s, children: a(`com_nav_theme`) }),
        (0, Q.jsx)(F, {
          value: e,
          onChange: t,
          options: o,
          sizeClasses: M(`z-50 w-[min(11.25rem,90vw)]`, i),
          testId: `theme-selector`,
          'aria-labelledby': s,
          portal: n,
          portalElement: r,
        }),
      ],
    });
  },
  ut = ({ langcode: e, onChange: t, portal: n = !0, portalElement: r, popoverClassName: i }) => {
    let a = W(),
      o = h(I.languageLoading),
      s = [
        { value: `auto`, label: a(`com_nav_lang_auto`) },
        { value: `en-US`, label: a(`com_nav_lang_english`) },
        { value: `zh-Hans`, label: a(`com_nav_lang_chinese`) },
        { value: `zh-Hant`, label: a(`com_nav_lang_traditional_chinese`) },
        { value: `ar-EG`, label: a(`com_nav_lang_arabic`) },
        { value: `bs`, label: a(`com_nav_lang_bosnian`) },
        { value: `da-DK`, label: a(`com_nav_lang_danish`) },
        { value: `de-DE`, label: a(`com_nav_lang_german`) },
        { value: `es-ES`, label: a(`com_nav_lang_spanish`) },
        { value: `ca-ES`, label: a(`com_nav_lang_catalan`) },
        { value: `et-EE`, label: a(`com_nav_lang_estonian`) },
        { value: `fa-IR`, label: a(`com_nav_lang_persian`) },
        { value: `fr-FR`, label: a(`com_nav_lang_french`) },
        { value: `he-HE`, label: a(`com_nav_lang_hebrew`) },
        { value: `hu-HU`, label: a(`com_nav_lang_hungarian`) },
        { value: `hy-AM`, label: a(`com_nav_lang_armenian`) },
        { value: `is`, label: a(`com_nav_lang_icelandic`) },
        { value: `it-IT`, label: a(`com_nav_lang_italian`) },
        { value: `nb`, label: a(`com_nav_lang_norwegian_bokmal`) },
        { value: `nn`, label: a(`com_nav_lang_norwegian_nynorsk`) },
        { value: `pl-PL`, label: a(`com_nav_lang_polish`) },
        { value: `pt-BR`, label: a(`com_nav_lang_brazilian_portuguese`) },
        { value: `pt-PT`, label: a(`com_nav_lang_portuguese`) },
        { value: `ru-RU`, label: a(`com_nav_lang_russian`) },
        { value: `sk`, label: a(`com_nav_lang_slovak`) },
        { value: `ja-JP`, label: a(`com_nav_lang_japanese`) },
        { value: `ka-GE`, label: a(`com_nav_lang_georgian`) },
        { value: `cs-CZ`, label: a(`com_nav_lang_czech`) },
        { value: `sv-SE`, label: a(`com_nav_lang_swedish`) },
        { value: `ko-KR`, label: a(`com_nav_lang_korean`) },
        { value: `lt-LT`, label: a(`com_nav_lang_lithuanian`) },
        { value: `lv-LV`, label: a(`com_nav_lang_latvian`) },
        { value: `vi-VN`, label: a(`com_nav_lang_vietnamese`) },
        { value: `th-TH`, label: a(`com_nav_lang_thai`) },
        { value: `tr-TR`, label: a(`com_nav_lang_turkish`) },
        { value: `ug`, label: a(`com_nav_lang_uyghur`) },
        { value: `nl-NL`, label: a(`com_nav_lang_dutch`) },
        { value: `id-ID`, label: a(`com_nav_lang_indonesia`) },
        { value: `fi-FI`, label: a(`com_nav_lang_finnish`) },
        { value: `sl`, label: a(`com_nav_lang_slovenian`) },
        { value: `bo`, label: a(`com_nav_lang_tibetan`) },
        { value: `uk-UA`, label: a(`com_nav_lang_ukrainian`) },
      ],
      c = `language-selector-label`;
    return (0, Q.jsxs)(`div`, {
      className: `flex flex-wrap items-center justify-between gap-2`,
      children: [
        (0, Q.jsx)(`div`, { id: c, children: a(`com_nav_language`) }),
        (0, Q.jsxs)(`div`, {
          className: `flex max-w-full min-w-0 items-center gap-2`,
          children: [
            o &&
              (0, Q.jsx)(`span`, {
                role: `status`,
                'aria-label': a(`com_ui_loading`),
                className: `text-text-secondary flex size-5 items-center justify-center`,
                children: (0, Q.jsx)(L, { className: `size-4` }),
              }),
            (0, Q.jsx)(F, {
              value: e,
              onChange: t,
              sizeClasses: M(`z-50 w-[min(13.75rem,90vw)]`, i),
              options: s,
              'aria-labelledby': c,
              portal: n,
              portalElement: r,
              searchable: !0,
              searchPlaceholder: a(`com_ui_search_language`),
              searchEmptyText: a(`com_ui_no_results_found`),
            }),
          ],
        }),
      ],
    });
  };
function dt({ circumference: e, offset: t, circleCSSProperties: n }) {
  return (0, Q.jsx)(`div`, {
    className: `bg-surface-media-overlay/5 text-text-on-media absolute inset-0 flex items-center justify-center`,
    children: (0, Q.jsxs)(`svg`, {
      width: `120`,
      height: `120`,
      viewBox: `0 0 120 120`,
      className: `h-6 w-6`,
      children: [
        (0, Q.jsx)(`circle`, {
          className: `stroke-border-heavy origin-[50%_50%] -rotate-90`,
          strokeWidth: `10`,
          fill: `transparent`,
          r: `55`,
          cx: `60`,
          cy: `60`,
        }),
        (0, Q.jsx)(`circle`, {
          className: `origin-[50%_50%] -rotate-90 transition-[stroke-dashoffset]`,
          stroke: `currentColor`,
          strokeWidth: `10`,
          strokeDasharray: `${e} ${e}`,
          strokeDashoffset: t,
          fill: `transparent`,
          r: `55`,
          cx: `60`,
          cy: `60`,
          style: n,
        }),
      ],
    }),
  });
}
var ft = ({
    imageBase64: e,
    url: t,
    progress: n = 1,
    className: r = ``,
    source: i,
    alt: a = `Preview image`,
  }) => {
    let s = W(),
      [c, l] = (0, Z.useState)(!1),
      [u, d] = (0, Z.useState)(!1),
      [f, p] = (0, Z.useState)(!1),
      m = (0, Z.useRef)(null),
      h = (0, Z.useRef)(null),
      _ = (0, Z.useRef)(null),
      ee = (0, Z.useCallback)(() => {
        l(!0);
      }, []),
      v = (0, Z.useCallback)((e) => {
        (l(e),
          !e &&
            m.current &&
            requestAnimationFrame(() => {
              m.current?.focus({ preventScroll: !0 });
            }));
      }, []),
      y = (0, Z.useCallback)(
        (e) => {
          e.target === e.currentTarget && v(!1);
        },
        [v],
      );
    ((0, Z.useEffect)(
      () => (
        c ? (document.body.style.overflow = `hidden`) : (document.body.style.overflow = `unset`),
        () => {
          document.body.style.overflow = `unset`;
        }
      ),
      [c],
    ),
      (0, Z.useEffect)(() => {
        if (!c) return;
        let e = (e) => {
          e.key === `Escape` && v(!1);
        };
        return (
          document.addEventListener(`keydown`, e),
          () => document.removeEventListener(`keydown`, e)
        );
      }, [c, v]));
    let b = {
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
      },
      C = e ?? t ?? ``,
      T = C ? { ...b, backgroundImage: `url(${C})` } : b;
    if (typeof T.backgroundImage != `string` || T.backgroundImage.length === 0) return null;
    let E = 2 * Math.PI * 55,
      D = E - n * E,
      O = { transition: `stroke-dashoffset 0.3s linear` },
      k = u || f;
    return (0, Q.jsxs)(Q.Fragment, {
      children: [
        (0, Q.jsxs)(`button`, {
          ref: m,
          type: `button`,
          className: M(
            `relative size-14 overflow-hidden rounded-xl transition-shadow`,
            `focus-visible:ring-text-primary focus-visible:ring-offset-surface-primary focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2`,
            r,
          ),
          style: T,
          'aria-label': `View ${a} in full size`,
          'aria-haspopup': `dialog`,
          onClick: (e) => {
            (e.preventDefault(), e.stopPropagation(), ee());
          },
          onMouseEnter: () => d(!0),
          onMouseLeave: () => d(!1),
          onFocus: () => p(!0),
          onBlur: () => p(!1),
          children: [
            n < 1
              ? (0, Q.jsx)(dt, {
                  circumference: E,
                  offset: D,
                  circleCSSProperties: O,
                  'aria-label': `Loading progress: ${Math.round(n * 100)}%`,
                })
              : (0, Q.jsx)(`div`, {
                  className: M(
                    `absolute inset-0 flex transform-gpu cursor-pointer items-center justify-center rounded-xl transition-opacity duration-200 ease-in-out`,
                    k ? `bg-surface-media-overlay/20 opacity-100` : `opacity-0`,
                  ),
                  'aria-hidden': `true`,
                  children: (0, Q.jsx)(g, {
                    className: M(
                      `text-text-on-media size-5 transform-gpu drop-shadow-lg transition-all duration-200`,
                      k ? `scale-110` : ``,
                    ),
                  }),
                }),
            (0, Q.jsx)(Ae, { source: i, 'aria-label': i ? `Source: ${i}` : void 0 }),
          ],
        }),
        (0, Q.jsx)(S, {
          open: c,
          onOpenChange: v,
          children: (0, Q.jsxs)(x, {
            children: [
              (0, Q.jsx)(w, {
                className: `bg-surface-media-overlay/90 fixed inset-0 z-[250]`,
                onClick: y,
              }),
              (0, Q.jsxs)(te, {
                className: `fixed inset-0 z-[250] flex items-center justify-center outline-hidden`,
                onOpenAutoFocus: (e) => {
                  (e.preventDefault(), _.current?.focus());
                },
                onCloseAutoFocus: (e) => {
                  (e.preventDefault(), m.current?.focus());
                },
                onPointerDownOutside: (e) => e.preventDefault(),
                onClick: y,
                children: [
                  (0, Q.jsx)(V, {
                    ref: _,
                    onClick: () => v(!1),
                    variant: `media`,
                    size: `icon`,
                    className: `absolute top-4 right-4 z-20`,
                    'aria-label': s(`com_ui_close`),
                    children: (0, Q.jsx)(o, { className: `size-5`, 'aria-hidden': `true` }),
                  }),
                  (0, Q.jsx)(`div`, {
                    onClick: (e) => e.stopPropagation(),
                    children: (0, Q.jsx)(`img`, {
                      ref: h,
                      src: C,
                      alt: a,
                      className: `max-h-[85vh] max-w-[90vw] object-contain`,
                      draggable: !1,
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  pt = { normal: `default`, warning: `warning`, danger: `error` },
  mt = {
    normal: `text-text-secondary`,
    warning: `text-text-warning`,
    danger: `text-text-destructive`,
  };
function ht(e, t) {
  let n = W(),
    { i18n: r } = y();
  Fe();
  let { display: i, refillAmount: a, refillMode: o, nextRefill: s } = e;
  if (a == null) return n(`com_ui_balance_no_refill`);
  let c = s == null ? null : Pe(s, Date.now(), r.resolvedLanguage);
  if (o === `reset`) {
    if (i === `percent`)
      return c == null ? n(`com_ui_balance_reset_due`) : n(`com_ui_balance_reset_in`, { 0: c });
    let e = Y(a, i, t);
    return c == null
      ? n(`com_ui_balance_reset_amount_due`, { 0: e })
      : n(`com_ui_balance_reset_amount_in`, { 0: e, 1: c });
  }
  if (i === `percent`)
    return c == null
      ? n(`com_ui_balance_refill_when_empty`)
      : n(`com_ui_balance_refill_in`, { 0: c });
  let l = Y(a, i, t);
  return c == null
    ? n(`com_ui_balance_refill_amount_when_empty`, { 0: l })
    : n(`com_ui_balance_refill_amount_in`, { 0: l, 1: c });
}
function gt({ summary: e, currency: t }) {
  let n = W(),
    r = ht(e, t),
    { display: i, credits: a, usedPercent: o, tone: s } = e,
    c;
  c =
    i === `percent`
      ? o == null
        ? n(`com_ui_balance_usage_unavailable`)
        : n(`com_ui_balance_used`, { 0: String(o) })
      : i === `currency`
        ? Y(a, i, t)
        : n(`com_ui_balance_credits`, { 0: Y(a, i, t) });
  let l = null;
  return (
    s === `danger`
      ? (l = n(`com_ui_balance_empty`))
      : i !== `percent` && o != null && (l = n(`com_ui_balance_used`, { 0: String(o) })),
    (0, Q.jsxs)(Q.Fragment, {
      children: [
        (0, Q.jsx)(`span`, {
          className: M(`justify-self-end text-xs font-medium whitespace-nowrap`, mt[s]),
          'data-testid': `balance-value`,
          children: c,
        }),
        o != null &&
          (0, Q.jsx)(Ne, {
            value: o,
            'aria-label': n(`com_ui_balance_used_label`),
            className: `col-span-2`,
            variant: pt[s],
          }),
        (0, Q.jsx)(`span`, {
          className: `text-text-secondary min-w-0 text-xs`,
          'data-testid': `balance-refill`,
          children: r,
        }),
        l != null &&
          (0, Q.jsx)(`span`, {
            className: M(`justify-self-end text-xs whitespace-nowrap`, mt[s]),
            'data-testid': `balance-status`,
            children: l,
          }),
      ],
    })
  );
}
function _t({ state: e, currency: t, className: n }) {
  let r = W(),
    i = (0, Z.useId)();
  if (e.status === `empty`) return null;
  let a = e.status === `success` && e.summary.display === `percent`;
  return (0, Q.jsxs)(`section`, {
    'aria-labelledby': i,
    'aria-busy': e.status === `loading`,
    'data-testid': `balance-summary`,
    className: M(`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-2 gap-y-2`, n),
    children: [
      (0, Q.jsx)(`h3`, {
        id: i,
        className: `text-text-primary text-sm font-medium`,
        children: r(a ? `com_ui_balance_usage_limit` : `com_nav_balance`),
      }),
      e.status === `loading` &&
        (0, Q.jsxs)(Q.Fragment, {
          children: [
            (0, Q.jsx)(P, { className: `h-3 w-16` }),
            (0, Q.jsx)(P, { className: `col-span-2 h-2 w-full rounded-full` }),
          ],
        }),
      e.status === `error` &&
        (0, Q.jsxs)(Q.Fragment, {
          children: [
            (0, Q.jsx)(`span`, {}),
            (0, Q.jsx)(`p`, {
              className: `text-text-destructive col-span-2 text-xs`,
              role: `alert`,
              children: r(`com_ui_balance_error`),
            }),
          ],
        }),
      e.status === `success` && (0, Q.jsx)(gt, { summary: e.summary, currency: t }),
    ],
  });
}
var vt = (0, Z.memo)(_t);
function yt({ className: e }) {
  let { enabled: t, state: n, currency: r } = Re();
  return t ? (0, Q.jsx)(vt, { state: n, currency: r, className: e }) : null;
}
function bt({ provider: e, imageURL: t, size: n = 20, className: r, model: i, alt: a = `` }) {
  return t
    ? (0, Q.jsx)(`img`, { src: t, alt: a, width: n, height: n, className: M(`object-contain`, r) })
    : (0, Q.jsx)(ye, { provider: e, model: i, size: n, className: r });
}
function xt({ column: e, title: t, className: n = ``, filters: r, valueMap: i, ariaLabel: a }) {
  let o = W(),
    s = (0, Z.useId)(),
    [c, l] = (0, Z.useState)(!1),
    u = (0, Z.useMemo)(() => {
      let t = [
        {
          label: o(`com_ui_ascending`),
          onClick: () => e.toggleSorting(!1),
          icon: (0, Q.jsx)(b, { className: `icon-sm text-text-secondary` }),
        },
        {
          label: o(`com_ui_descending`),
          onClick: () => e.toggleSorting(!0),
          icon: (0, Q.jsx)(C, { className: `icon-sm text-text-secondary` }),
        },
      ];
      return (
        r &&
          (t.push({ separate: !0 }),
          Object.entries(r).forEach(([n, r]) => {
            r.forEach((n) => {
              let r = i?.[n ?? ``],
                a = r != null && r.length ? o(r) : String(n);
              if (a) {
                let r = e.getFilterValue() === n;
                t.push({
                  label: a,
                  onClick: () => e.setFilterValue(n),
                  icon: (0, Q.jsx)(m, {
                    className: `icon-sm text-text-secondary`,
                    'aria-hidden': `true`,
                  }),
                  show: !0,
                  className: r ? `border-l-2 border-l-border-xheavy` : ``,
                });
              }
            });
          }),
          t.push({ separate: !0 }),
          t.push({
            label: o(`com_ui_show_all`),
            onClick: () => e.setFilterValue(void 0),
            icon: (0, Q.jsx)(v, { className: `icon-sm text-text-secondary` }),
            show: !0,
          })),
        t
      );
    }, [e, r, i, o]);
  if (!e.getCanSort()) return (0, Q.jsx)(`div`, { className: M(n), children: t });
  let d = e.getIsSorted(),
    f = `none`;
  return (
    d === `desc` ? (f = `descending`) : d === `asc` && (f = `ascending`),
    (0, Q.jsx)(`div`, {
      className: M(`flex items-center space-x-2`, n),
      children: (0, Q.jsx)(pe, {
        portal: !1,
        isOpen: c,
        setIsOpen: l,
        trigger: (0, Q.jsx)(q, {
          description: a || t,
          side: `top`,
          render: (0, Q.jsxs)(_, {
            'aria-sort': f,
            'aria-label': a,
            'aria-pressed': e.getIsFiltered() ? `true` : `false`,
            'aria-current': d ? `true` : `false`,
            className: M(
              `hover:bg-surface-hover focus-visible:ring-text-primary data-[open]:bg-surface-hover inline-flex items-center gap-2 rounded-lg px-2 py-0 text-xs transition-colors focus-visible:ring-2 focus-visible:outline-hidden sm:px-2 sm:py-2 sm:text-sm`,
              e.getIsFiltered() && `border-b-border-xheavy border-b-2`,
            ),
            children: [
              (0, Q.jsx)(`span`, { children: t }),
              e.getIsFiltered()
                ? (0, Q.jsx)(m, { className: `icon-sm`, 'aria-hidden': `true` })
                : (0, Q.jsx)(m, {
                    className: `icon-sm text-text-secondary`,
                    'aria-hidden': `true`,
                  }),
              (() => {
                let t = e.getIsSorted();
                return t === `desc`
                  ? (0, Q.jsx)(C, { className: `icon-sm` })
                  : t === `asc`
                    ? (0, Q.jsx)(b, { className: `icon-sm` })
                    : (0, Q.jsx)(T, { className: `icon-sm` });
              })(),
            ],
          }),
        }),
        items: u,
        menuId: s,
        className: `z-[1001]`,
      }),
    })
  );
}
var St = {
    [B.avatar]: `com_ui_avatar`,
    [B.unknown]: `com_ui_unknown`,
    [B.assistants]: `com_ui_assistants`,
    [B.image_generation]: `com_ui_image_gen`,
    [B.assistants_output]: `com_ui_assistants_output`,
    [B.message_attachment]: `com_ui_attachment`,
    [B.run_artifact]: `com_ui_published_file`,
  },
  Ct = [
    {
      id: `select`,
      size: 40,
      header: ({ table: e }) => {
        let t = W();
        return (0, Q.jsx)(q, {
          description: t(`com_ui_select_all`),
          side: `top`,
          role: `checkbox`,
          render: (0, Q.jsx)(Ce, {
            checked:
              e.getIsAllPageRowsSelected() || (e.getIsSomePageRowsSelected() && `indeterminate`),
            onCheckedChange: (t) => e.toggleAllPageRowsSelected(!!t),
            'aria-label': t(`com_ui_select_all`),
            className: `flex`,
          }),
        });
      },
      cell: ({ row: e }) => {
        let t = W();
        return (0, Q.jsx)(Ce, {
          checked: e.getIsSelected(),
          onCheckedChange: (t) => e.toggleSelected(!!t),
          'aria-label': t(`com_ui_select_row`),
          className: `flex`,
        });
      },
      enableSorting: !1,
      enableHiding: !1,
    },
    {
      meta: { size: `150px` },
      accessorKey: `filename`,
      header: ({ column: e }) => {
        let t = W(),
          n = e.getIsSorted(),
          i = r,
          a = `none`;
        return (
          n === `desc`
            ? ((i = f), (a = `descending`))
            : n === `asc` && ((i = u), (a = `ascending`)),
          (0, Q.jsx)(q, {
            description: t(`com_ui_name_sort`),
            side: `top`,
            render: (0, Q.jsxs)(V, {
              variant: `ghost`,
              className: `hover:bg-surface-hover px-2 py-0 text-xs sm:px-2 sm:py-2 sm:text-sm`,
              onClick: () => e.toggleSorting(e.getIsSorted() === `asc`),
              'aria-sort': a,
              'aria-label': t(`com_ui_name_sort`),
              'aria-hidden': `true`,
              'aria-current': n ? `true` : `false`,
              children: [
                t(`com_ui_name`),
                (0, Q.jsx)(i, { className: `ml-2 h-3 w-4 sm:h-4 sm:w-4` }),
              ],
            }),
          })
        );
      },
      cell: ({ row: e }) => {
        let t = e.original;
        if (t.type?.startsWith(`image`))
          return (0, Q.jsxs)(`div`, {
            className: `flex gap-2`,
            children: [
              (0, Q.jsx)(ft, {
                url: t.filepath,
                className: `relative h-10 w-10 shrink-0 overflow-visible rounded-md`,
                source: t.source,
              }),
              (0, Q.jsx)(`span`, { className: `self-center truncate`, children: t.filename }),
            ],
          });
        let n = Oe(t.type);
        return (0, Q.jsxs)(`div`, {
          className: `flex gap-2`,
          children: [
            n && (0, Q.jsx)(se, { fileType: n, className: `relative`, file: t }),
            (0, Q.jsx)(`span`, { className: `self-center truncate`, children: t.filename }),
          ],
        });
      },
    },
    {
      accessorKey: `updatedAt`,
      header: ({ column: e }) => {
        let t = W(),
          n = e.getIsSorted(),
          i = r,
          a = `none`;
        return (
          n === `desc`
            ? ((i = f), (a = `descending`))
            : n === `asc` && ((i = u), (a = `ascending`)),
          (0, Q.jsx)(q, {
            description: t(`com_ui_date_sort`),
            side: `top`,
            render: (0, Q.jsxs)(V, {
              variant: `ghost`,
              onClick: () => e.toggleSorting(e.getIsSorted() === `asc`),
              className: `hover:bg-surface-hover px-2 py-0 text-xs sm:px-2 sm:py-2 sm:text-sm`,
              'aria-sort': a,
              'aria-label': t(`com_ui_date_sort`),
              'aria-hidden': `true`,
              'aria-current': n ? `true` : `false`,
              children: [
                t(`com_ui_date`),
                (0, Q.jsx)(i, { className: `ml-2 h-3 w-4 sm:h-4 sm:w-4` }),
              ],
            }),
          })
        );
      },
      cell: ({ row: e }) => {
        let t = oe(`(max-width: 768px)`);
        return _e(e.original.updatedAt?.toString() ?? ``, t);
      },
    },
    {
      accessorKey: `filterSource`,
      header: ({ column: e }) => {
        let t = W();
        return (0, Q.jsx)(xt, {
          column: e,
          title: t(`com_ui_storage`),
          ariaLabel: t(`com_ui_storage_filter_sort`),
          filters: {
            Storage: Object.values(j).filter(
              (e) => e === j.local || e === j.openai || e === j.azure,
            ),
          },
          valueMap: {
            [j.azure]: `com_ui_azure`,
            [j.openai]: `com_ui_openai`,
            [j.local]: `com_ui_host`,
          },
        });
      },
      cell: ({ row: e }) => {
        let t = W(),
          { source: n } = e.original;
        return n === j.openai
          ? (0, Q.jsxs)(`div`, {
              className: `flex flex-wrap items-center gap-2`,
              children: [(0, Q.jsx)(xe, { className: `icon-sm` }), `OpenAI`],
            })
          : n === j.azure
            ? (0, Q.jsxs)(`div`, {
                className: `flex flex-wrap items-center gap-2`,
                children: [(0, Q.jsx)(Te, { className: `icon-sm` }), `Azure`],
              })
            : (0, Q.jsxs)(`div`, {
                className: `flex flex-wrap items-center gap-2`,
                children: [
                  (0, Q.jsx)(s, { className: `icon-sm`, 'aria-hidden': `true` }),
                  t(`com_ui_host`),
                ],
              });
      },
    },
    {
      accessorKey: `context`,
      header: ({ column: e }) => {
        let t = W();
        return (0, Q.jsx)(xt, {
          column: e,
          title: t(`com_ui_context`),
          ariaLabel: t(`com_ui_context_filter_sort`),
          filters: { Context: Object.values(B).filter((e) => e === B[e ?? ``]) },
          valueMap: St,
        });
      },
      cell: ({ row: e }) => {
        let { context: t } = e.original,
          n = W();
        return (0, Q.jsx)(`div`, {
          className: `flex flex-wrap items-center gap-2`,
          children: n(St[t ?? B.unknown]),
        });
      },
    },
    {
      accessorKey: `bytes`,
      header: ({ column: e }) => {
        let t = W(),
          n = e.getIsSorted(),
          i = r,
          a = `none`;
        return (
          n === `desc`
            ? ((i = f), (a = `descending`))
            : n === `asc` && ((i = u), (a = `ascending`)),
          (0, Q.jsx)(q, {
            description: t(`com_ui_size_sort`),
            side: `top`,
            render: (0, Q.jsxs)(V, {
              variant: `ghost`,
              className: `hover:bg-surface-hover px-2 py-0 text-xs sm:px-2 sm:py-2 sm:text-sm`,
              onClick: () => e.toggleSorting(e.getIsSorted() === `asc`),
              'aria-sort': a,
              'aria-label': t(`com_ui_size_sort`),
              'aria-hidden': `true`,
              'aria-current': n ? `true` : `false`,
              children: [
                t(`com_ui_size`),
                (0, Q.jsx)(i, { className: `ml-2 h-3 w-4 sm:h-4 sm:w-4` }),
              ],
            }),
          })
        );
      },
      cell: ({ row: e }) => {
        let t = Number((Number(e.original.bytes) / 1024 / 1024).toFixed(2));
        return t < 0.01 ? `< 0.01 MB` : `${t} MB`;
      },
    },
  ];
function wt({ table: e, contextMap: t, isSmallScreen: n }) {
  let r = W(),
    i = (0, Z.useId)(),
    [a, o] = (0, Z.useState)(!1),
    s = (0, Z.useMemo)(
      () =>
        e
          .getAllColumns()
          .filter((e) => e.getCanHide())
          .map((e) => ({
            label: r(t[e.id]),
            onClick: () => e.toggleVisibility(!e.getIsVisible()),
            icon: e.getIsVisible() ? `✓` : ``,
            id: e.id,
          })),
      [e, t, r],
    );
  return (0, Q.jsx)(pe, {
    portal: !1,
    isOpen: a,
    setIsOpen: o,
    trigger: (0, Q.jsx)(_, {
      'aria-label': r(`com_files_filter_by`),
      className: M(
        `border-border-medium ring-offset-surface-primary hover:bg-surface-hover hover:text-text-primary focus-visible:ring-text-primary inline-flex h-9 items-center justify-center gap-2 rounded-md border bg-transparent px-3 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50`,
        n && `px-2 py-1`,
      ),
      children: (0, Q.jsx)(m, { className: `size-3.5 sm:size-4`, 'aria-hidden': `true` }),
    }),
    items: s,
    menuId: i,
    className: `z-50 max-h-[18.75rem] overflow-y-auto`,
  });
}
var Tt = 52,
  Et = {
    [B.filename]: `com_ui_name`,
    [B.updatedAt]: `com_ui_date`,
    [B.filterSource]: `com_ui_storage`,
    [B.context]: `com_ui_context`,
    [B.bytes]: `com_ui_size`,
  };
function Dt({ columns: e, data: t }) {
  let n = W(),
    [r, i] = (0, Z.useState)(!1),
    a = ee(I.filesByIndex(0)),
    { deleteFiles: o } = je(() => i(!1)),
    [s, c] = (0, Z.useState)({}),
    [l, u] = (0, Z.useState)([]),
    d = oe(`(max-width: 768px)`),
    [f, p] = (0, Z.useState)([]),
    [m, h] = (0, Z.useState)({}),
    g = (0, Z.useRef)(null),
    _ = ne({
      data: t,
      columns: e,
      defaultColumn: { minSize: 0, size: 2 ** 53 - 1, maxSize: 2 ** 53 - 1 },
      onSortingChange: u,
      getCoreRowModel: re(),
      getSortedRowModel: D(),
      onColumnFiltersChange: p,
      getFilteredRowModel: k(),
      onColumnVisibilityChange: h,
      onRowSelectionChange: c,
      state: { sorting: l, columnFilters: f, columnVisibility: m, rowSelection: s },
    }),
    { rows: v } = _.getRowModel(),
    y = (0, Z.useCallback)(() => Tt, []),
    b = (0, Z.useCallback)((e) => v[e]?.id ?? e, [v]),
    x = Le({
      count: v.length,
      getScrollElement: () => g.current,
      estimateSize: y,
      getItemKey: b,
      overscan: 8,
    });
  (0, Z.useEffect)(() => {
    g.current && (g.current.scrollTop = 0);
  }, [l, f]);
  let S = x.getVirtualItems(),
    C = S[0]?.start ?? 0,
    w = S.length > 0 ? x.getTotalSize() - (S[S.length - 1]?.end ?? 0) : 0,
    T = _.getVisibleLeafColumns().length;
  return (0, Q.jsxs)(`div`, {
    className: `flex h-full flex-col gap-4`,
    children: [
      (0, Q.jsxs)(`div`, {
        className: `flex flex-wrap items-center gap-2 py-2 sm:gap-4 sm:py-4`,
        children: [
          (0, Q.jsxs)(V, {
            variant: `outline`,
            onClick: () => {
              i(!0);
              let e = _.getFilteredSelectedRowModel().rows.map((e) => e.original);
              (o({ files: e, setFiles: a }), c({}));
            },
            disabled: !_.getFilteredSelectedRowModel().rows.length || r,
            className: M(`min-w-[2.5rem] transition-all duration-200`, d && `px-2 py-1`),
            children: [
              r
                ? (0, Q.jsx)(L, { className: `size-3.5 sm:size-4` })
                : (0, Q.jsx)(we, { className: `text-text-destructive size-3.5 sm:size-4` }),
              !d && (0, Q.jsx)(`span`, { className: `ml-2`, children: n(`com_ui_delete`) }),
            ],
          }),
          (0, Q.jsx)(le, {
            inputId: `files-filter`,
            label: n(`com_files_filter`),
            value: _.getColumn(`filename`)?.getFilterValue() ?? ``,
            onChange: (e) => _.getColumn(`filename`)?.setFilterValue(e.target.value),
            surface: `dialog`,
            containerClassName: `flex-1`,
          }),
          (0, Q.jsx)(`div`, {
            className: `relative focus-within:z-[100]`,
            children: (0, Q.jsx)(wt, { table: _, contextMap: Et, isSmallScreen: d }),
          }),
        ],
      }),
      (0, Q.jsx)(`div`, {
        ref: g,
        className: `relative grid h-full max-h-[calc(100vh-20rem)] min-h-[calc(100vh-20rem)] w-full flex-1 overflow-hidden overflow-x-auto overflow-y-auto rounded-md`,
        children: (0, Q.jsxs)(me, {
          unwrapped: !0,
          'aria-rowcount': v.length > 0 ? v.length + 1 : void 0,
          className: `w-full min-w-[18.75rem] border-separate border-spacing-0`,
          children: [
            (0, Q.jsx)(be, {
              sticky: !0,
              children: _.getHeaderGroups().map((e) =>
                (0, Q.jsx)(
                  J,
                  {
                    'aria-rowindex': 1,
                    children: e.headers.map((e, t) => {
                      let n = e.getSize(),
                        r = { width: n === 2 ** 53 - 1 ? `auto` : n };
                      return (0, Q.jsx)(
                        ae,
                        {
                          size: `sm`,
                          className: `px-2 whitespace-nowrap sm:px-4`,
                          style: { ...r },
                          children: e.isPlaceholder
                            ? null
                            : ie(e.column.columnDef.header, e.getContext()),
                        },
                        e.id,
                      );
                    }),
                  },
                  e.id,
                ),
              ),
            }),
            (0, Q.jsx)(he, {
              className: `w-full`,
              children: v.length
                ? (0, Q.jsxs)(Q.Fragment, {
                    children: [
                      C > 0 &&
                        (0, Q.jsx)(`tr`, {
                          'aria-hidden': `true`,
                          children: (0, Q.jsx)(`td`, { colSpan: T, style: { height: C } }),
                        }),
                      S.map((e) => {
                        let t = v[e.index];
                        return t
                          ? (0, Q.jsx)(
                              J,
                              {
                                ref: x.measureElement,
                                'data-index': e.index,
                                'aria-rowindex': e.index + 2,
                                'data-state': t.getIsSelected() && `selected`,
                                children: t.getVisibleCells().map((e) => {
                                  let t = e.column.getSize(),
                                    n = { width: t === 2 ** 53 - 1 ? `auto` : t };
                                  return (0, Q.jsx)(
                                    R,
                                    {
                                      size: `compact`,
                                      className: M(
                                        `align-start px-2 text-xs sm:px-4 sm:text-sm [tr[data-disabled=true]_&]:opacity-50`,
                                        e.column.id === `select`
                                          ? `overflow-visible`
                                          : `overflow-x-auto`,
                                      ),
                                      style: n,
                                      children: ie(e.column.columnDef.cell, e.getContext()),
                                    },
                                    e.id,
                                  );
                                }),
                              },
                              e.key,
                            )
                          : null;
                      }),
                      w > 0 &&
                        (0, Q.jsx)(`tr`, {
                          'aria-hidden': `true`,
                          children: (0, Q.jsx)(`td`, { colSpan: T, style: { height: w } }),
                        }),
                    ],
                  })
                : (0, Q.jsx)(J, {
                    children: (0, Q.jsx)(R, {
                      colSpan: e.length,
                      className: `h-24 text-center`,
                      children: n(`com_files_no_results`),
                    }),
                  }),
            }),
          ],
        }),
      }),
      (0, Q.jsx)(`div`, {
        className: `flex items-center justify-end gap-2 py-4`,
        children: (0, Q.jsxs)(`div`, {
          className: `text-text-secondary ml-2 flex-1 truncate text-xs sm:ml-4 sm:text-sm`,
          children: [
            (0, Q.jsx)(`span`, {
              className: `hidden sm:inline`,
              children: n(`com_files_number_selected`, {
                0: `${_.getFilteredSelectedRowModel().rows.length}`,
                1: `${_.getFilteredRowModel().rows.length}`,
              }),
            }),
            (0, Q.jsx)(`span`, {
              className: `sm:hidden`,
              children: `${_.getFilteredSelectedRowModel().rows.length}/${_.getFilteredRowModel().rows.length}`,
            }),
          ],
        }),
      }),
    ],
  });
}
(j.openai, j.local, j.local, j.local);
function Ot({ open: e, onOpenChange: t, triggerRef: n }) {
  let r = W(),
    i = (0, Z.useRef)(null),
    a = (0, Z.useCallback)(() => {
      let e = document.activeElement,
        t =
          e instanceof HTMLElement &&
          e !== document.body &&
          e.isConnected &&
          e.closest(`[inert]`) == null &&
          e.closest(`[role="menu"]`) == null;
      i.current = t ? e : (n?.current ?? null);
    }, [n]),
    { data: o = [] } = ue({
      select: (e) =>
        e.map(
          (e) => (
            (e.context = e.context ?? B.unknown),
            (e.filterSource = e.source === j.firebase ? j.local : e.source),
            e
          ),
        ),
    });
  return (0, Q.jsx)(ke, {
    open: e,
    onOpenChange: t,
    triggerRef: i,
    children: (0, Q.jsxs)(ce, {
      title: r(`com_nav_my_files`),
      onOpenAutoFocus: a,
      className: `bg-surface-dialog text-text-primary w-11/12 shadow-2xl`,
      children: [
        (0, Q.jsx)(Se, { children: (0, Q.jsx)(de, { children: r(`com_nav_my_files`) }) }),
        (0, Q.jsx)(Dt, { columns: Ct, data: o }),
      ],
    }),
  });
}
function kt(e, t) {
  return e === `queue`
    ? `queue`
    : e === `interrupt` || (e === `steer` && t)
      ? `interrupt`
      : `steer`;
}
var $ = ge(
    `duringRunAction`,
    kt(z(`duringRunDefaultAction`, `steer`), z(`steerInterruptsByDefault`, !1)),
  ),
  At = d(
    (e) => kt(e($), !1),
    (e, t, n) => t($, n),
  );
export {
  qe as C,
  He as D,
  Ue as E,
  Ke as S,
  Ve as T,
  Ye as _,
  vt as a,
  Ge as b,
  ut as c,
  ot as d,
  it as f,
  Ze as g,
  Qe as h,
  yt as i,
  lt as l,
  et as m,
  Ot as n,
  ft as o,
  nt as p,
  bt as r,
  dt as s,
  At as t,
  ct as u,
  Xe as v,
  Be as w,
  We as x,
  Je as y,
};
