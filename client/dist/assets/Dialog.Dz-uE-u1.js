import { o as e } from './rolldown-runtime.C0FnF6B9.js';
import { at as t, rt as n } from './advanced-inputs.BJDnsHUg.js';
import {
  Ai as r,
  E as i,
  Fr as a,
  Ft as o,
  Gn as s,
  Ir as c,
  Ln as l,
  Mt as u,
  Nn as d,
  Qt as f,
  Rr as p,
  Tn as m,
  Xt as h,
  Zt as g,
  aa as _,
  as as v,
  br as y,
  ca as b,
  cr as x,
  gn as S,
  ir as C,
  jt as w,
  kn as T,
  ls as E,
  oa as D,
  os as O,
  qt as k,
  r as A,
  ss as j,
  tr as ee,
  un as M,
  w as N,
  wi as te,
  wt as P,
} from './vendor.DpBpdTS1.js';
import { n as ne } from './i18n.C6_IvY32.js';
import { n as re, u as ie } from './routing.DYGR6PKW.js';
import { c as ae, d as oe, l as se, u as ce } from './radix-ui.tIiBXdQR.js';
import { r as le } from './query-devtools.C2qG3_c-.js';
import { g as ue } from './tanstack-vendor.DDeX4vva.js';
import { t as de } from './http-client.D6G8y4MX.js';
import {
  $h as fe,
  $u as pe,
  A_ as me,
  Af as he,
  Ag as ge,
  Ah as F,
  Al as _e,
  An as ve,
  Bb as ye,
  Bh as be,
  Bn as xe,
  Bv as Se,
  Cf as Ce,
  Df as we,
  Dg as Te,
  Dl as Ee,
  Dx as De,
  Ef as Oe,
  Eg as ke,
  El as Ae,
  En as je,
  Et as Me,
  F_ as Ne,
  G_ as Pe,
  Gp as Fe,
  H_ as Ie,
  Ig as Le,
  Ih as Re,
  It as ze,
  Jc as Be,
  Jf as I,
  Jh as Ve,
  K_ as L,
  Kg as He,
  Ku as Ue,
  Lh as We,
  Lo as Ge,
  Mg as Ke,
  Ml as qe,
  N_ as Je,
  O_ as Ye,
  Of as Xe,
  Og as Ze,
  P_ as Qe,
  Pg as R,
  Qd as $e,
  Qh as et,
  Qn as tt,
  Rf as nt,
  Rh as rt,
  Sf as it,
  Tg as at,
  U_ as ot,
  Uv as st,
  Vd as ct,
  Vh as lt,
  Vv as ut,
  Wl as dt,
  Wv as z,
  Xb as ft,
  Xh as pt,
  Xv as mt,
  Y_ as ht,
  Yo as gt,
  Yu as _t,
  Yv as vt,
  Zd as yt,
  Zh as bt,
  Zu as xt,
  __ as St,
  _h as Ct,
  a_ as wt,
  ap as Tt,
  at as Et,
  bf as Dt,
  bg as Ot,
  br as kt,
  cg as B,
  cl as At,
  dg as jt,
  dp as Mt,
  e_ as V,
  eb as Nt,
  ef as Pt,
  eg as Ft,
  el as It,
  et as Lt,
  fb as Rt,
  fg as zt,
  fl as Bt,
  fn as Vt,
  gb as Ht,
  gu as Ut,
  ho as Wt,
  hu as Gt,
  hv as Kt,
  hx as qt,
  i_ as Jt,
  ih as Yt,
  ip as Xt,
  it as Zt,
  iv as Qt,
  j_ as $t,
  jb as en,
  ju as tn,
  jx as nn,
  kf as rn,
  kg as an,
  kl as H,
  ks as on,
  la as sn,
  lb as cn,
  ll as ln,
  m_ as un,
  n_ as dn,
  ng as fn,
  nu as pn,
  o_ as U,
  ot as mn,
  po as hn,
  pv as gn,
  py as _n,
  qb as vn,
  ql as yn,
  qm as bn,
  qu as xn,
  qy as Sn,
  r as Cn,
  r_ as wn,
  s_ as W,
  sl as Tn,
  sy as En,
  t_ as Dn,
  tg as On,
  tr as kn,
  tt as An,
  ul as jn,
  vf as Mn,
  vm as Nn,
  vx as Pn,
  wg as G,
  x_ as Fn,
  xb as K,
  xf as In,
  xg as Ln,
  xr as Rn,
  xv as zn,
  y_ as Bn,
  yg as Vn,
  yl as Hn,
  zf as Un,
  zg as Wn,
  zy as Gn,
} from './hooks.CliY9jTn.js';
import { n as Kn, r as qn } from './framer-motion.sQ5ndFcX.js';
import { a as Jn, c as Yn, l as Xn, o as Zn, s as Qn } from './headlessui.CdCWEm1u.js';
import { a as $n, i as er, n as tr, r as nr } from './useBalanceSummary.VOg6l8dt.js';
import { s as rr } from './date-utils.C_DbPEjY.js';
import {
  C as ir,
  D as ar,
  E as or,
  _ as sr,
  c as cr,
  d as lr,
  f as ur,
  g as dr,
  h as fr,
  i as pr,
  l as mr,
  m as hr,
  n as gr,
  p as _r,
  r as vr,
  t as yr,
  u as br,
  w as xr,
} from './duringRun.CRj3RJG2.js';
var q = e(t(), 1);
function Sr() {
  let { data: e } = $e(),
    { data: t } = Pt(),
    n = tt({ permissionType: vt.AGENTS, permission: mt.USE });
  return (0, q.useMemo)(
    () => $n({ endpointsConfig: e, modelSpecs: t?.modelSpecs, hasAgentAccess: n === !0 }),
    [e, t?.modelSpecs, n],
  );
}
function Cr() {
  let e = tt({ permissionType: vt.MEMORIES, permission: mt.OPT_OUT });
  return { hasMemoryOptOut: e, hasAnyPersonalizationFeature: e };
}
function wr() {
  let { user: e } = kn(),
    { data: t } = Pt(),
    { agentsConfig: n } = je(),
    { hasAnyPersonalizationFeature: r, hasMemoryOptOut: i } = Cr(),
    a = tt({ permissionType: vt.REMOTE_AGENTS, permission: mt.USE }),
    o = tt({ permissionType: vt.MULTI_CONVO, permission: mt.USE }),
    s = tt({ permissionType: vt.PROMPTS, permission: mt.USE }),
    c = t?.balance?.enabled === !0,
    l = t?.langfuseConnectionAccess === !0,
    u = t?.adminPanelURL ?? ``,
    d = e?.provider === `local`,
    f = t?.emailEnabled === !0,
    p = t?.allowEmailChange === !0,
    m = t?.passkeyLoginEnabled === !0,
    h = e != null && qt(e.provider),
    g = e?.twoFactorEnabled === !0,
    _ = t?.allowAccountDeletion !== !1,
    y = t?.interface?.buildInfo !== !1,
    b = t != null,
    x = t?.interface?.replyNotifications,
    S = b && x?.tabBadge !== !1,
    C = b && x?.desktop !== !1,
    w = b && x?.sound !== !1,
    T = a === !0,
    E = o === !0,
    D = s === !0,
    O = v(I.engineTTS),
    k = Sr().length > 0,
    A = n?.capabilities.includes(Gn.stateful_code_sessions) ?? !1;
  return (0, q.useMemo)(
    () => ({
      balanceEnabled: c,
      hasAnyPersonalizationFeature: r,
      hasMemoryOptOut: i,
      hasStatefulCodeSessions: A,
      hasRemoteAgents: T,
      hasUserProvidedEndpoints: k,
      hasMultiConvo: E,
      hasPrompts: D,
      isLocalProvider: d,
      emailEnabled: f,
      allowEmailChange: p,
      passkeyLoginEnabled: m,
      isTwoFactorPolicyProvider: h,
      twoFactorEnabled: g,
      allowAccountDeletion: _,
      aboutEnabled: y,
      engineTTS: O,
      langfuseConnectionAccess: l,
      adminPanelURL: u,
      replyTabBadgeAllowed: S,
      replyNotificationsAllowed: C,
      replyNotificationSoundAllowed: w,
    }),
    [c, r, i, A, T, k, E, D, d, f, p, m, h, g, _, y, O, l, u, S, C, w],
  );
}
function Tr(e) {
  return (0, q.createElement)(`span`, {
    className: `${e} inline-block shrink-0 bg-current`,
    'aria-hidden': !0,
    style: {
      WebkitMask: `url(/assets/langfuse-icon-monochrome.svg) center / contain no-repeat`,
      mask: `url(/assets/langfuse-icon-monochrome.svg) center / contain no-repeat`,
    },
  });
}
var Er = [
    {
      id: K.GENERAL,
      labelKey: `com_nav_setting_general`,
      icon: (0, q.createElement)(He),
      sections: [
        { id: `appearance`, labelKey: `com_ui_settings_section_appearance` },
        { id: `layout`, labelKey: `com_ui_settings_section_layout` },
        { id: `notifications`, labelKey: `com_ui_settings_section_notifications` },
        { id: `accessibility`, labelKey: `com_ui_settings_section_accessibility` },
        { id: `admin`, labelKey: `com_ui_settings_section_admin` },
      ],
    },
    {
      id: K.CHAT,
      labelKey: `com_nav_setting_chat`,
      icon: (0, q.createElement)(x, { className: `icon-sm`, 'aria-hidden': !0 }),
      sections: [
        { id: `sending`, labelKey: `com_ui_settings_section_sending` },
        { id: `commands`, labelKey: `com_ui_settings_section_commands` },
        { id: `messages`, labelKey: `com_ui_settings_section_messages` },
        { id: `conversations`, labelKey: `com_ui_settings_section_conversations` },
        { id: `prompts`, labelKey: `com_ui_settings_section_prompts` },
      ],
    },
    {
      id: K.SPEECH,
      labelKey: `com_nav_setting_speech`,
      icon: (0, q.createElement)(Pe, { className: `icon-sm` }),
      sections: [
        { id: `stt`, labelKey: `com_ui_settings_section_stt` },
        { id: `tts`, labelKey: `com_ui_settings_section_tts` },
      ],
    },
    {
      id: K.LANGFUSE,
      labelKey: `com_ui_settings_tab_langfuse`,
      icon: Tr(`h-4 w-4`),
      sections: [
        { id: `langfuse`, labelKey: `com_ui_settings_section_langfuse`, icon: Tr(`h-3.5 w-3.5`) },
      ],
      show: (e) => e.langfuseConnectionAccess,
    },
    {
      id: K.DATA,
      labelKey: `com_ui_settings_tab_data`,
      icon: (0, q.createElement)(Ot),
      sections: [
        { id: `memory`, labelKey: `com_ui_settings_section_memory` },
        { id: `codeExecution`, labelKey: `com_ui_settings_section_code_execution` },
        { id: `data`, labelKey: `com_ui_settings_section_data` },
        { id: `apiKeys`, labelKey: `com_ui_settings_section_api_keys` },
        { id: `danger`, labelKey: `com_ui_settings_section_danger_zone`, danger: !0 },
      ],
    },
    {
      id: K.ACCOUNT,
      labelKey: `com_nav_setting_account`,
      icon: (0, q.createElement)(Kt),
      sections: [
        { id: `profile`, labelKey: `com_ui_settings_section_profile` },
        { id: `security`, labelKey: `com_ui_settings_section_security` },
        { id: `billing`, labelKey: `com_ui_settings_section_billing` },
        { id: `danger`, labelKey: `com_ui_settings_section_danger_zone`, danger: !0 },
      ],
    },
    {
      id: K.ABOUT,
      labelKey: `com_nav_setting_about`,
      icon: (0, q.createElement)(c, { className: `icon-sm`, 'aria-hidden': !0 }),
      sections: [{ id: `about`, labelKey: `com_nav_setting_about` }],
      show: (e) => e.aboutEnabled,
    },
  ],
  J = n();
function Dr({
  ctx: e,
  query: t,
  onQueryChange: n,
  onSelectTab: r,
  showChevron: i = !1,
  hideTabs: a = !1,
  stacked: s = !1,
}) {
  let c = H(),
    l = Er.filter((t) => !t.show || t.show(e));
  return (0, J.jsxs)(`div`, {
    className: F(
      `flex min-h-0 w-full flex-col gap-3 overflow-hidden`,
      !s && `w-[14.375rem]`,
      s && !a && `flex-1`,
    ),
    children: [
      (0, J.jsxs)(`div`, {
        className: `relative shrink-0`,
        children: [
          (0, J.jsx)(m, {
            className: `text-text-tertiary pointer-events-none absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2`,
            'aria-hidden': `true`,
          }),
          (0, J.jsx)(`input`, {
            type: `text`,
            value: t,
            onChange: (e) => n(e.target.value),
            onKeyDown: (e) => {
              e.key === `Escape` &&
                t.length > 0 &&
                (e.preventDefault(), e.stopPropagation(), n(``));
            },
            placeholder: c(`com_ui_settings_search_placeholder`),
            'aria-label': c(`com_ui_settings_search_placeholder`),
            className: `bg-surface-secondary text-text-primary w-full rounded-lg py-2 pr-8 pl-8 text-sm focus-visible:outline-hidden`,
          }),
          t.length > 0 &&
            (0, J.jsx)(`button`, {
              type: `button`,
              onClick: () => n(``),
              'aria-label': c(`com_ui_clear_search`),
              className: `text-text-secondary hover:bg-surface-hover hover:text-text-primary focus-visible:ring-text-primary absolute top-1/2 right-1.5 -translate-y-1/2 rounded-md p-1 transition-colors focus-visible:ring-2 focus-visible:outline-hidden`,
              children: (0, J.jsx)(o, { className: `h-4 w-4`, 'aria-hidden': `true` }),
            }),
        ],
      }),
      !a &&
        (0, J.jsx)(se, {
          'aria-label': c(`com_nav_settings`),
          className: `flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto`,
          children: l.map((e) =>
            (0, J.jsxs)(
              oe,
              {
                value: e.id,
                onClick: () => r(e.id),
                className: F(
                  `text-text-secondary hover:bg-surface-hover hover:text-text-primary focus-visible:ring-text-primary rounded-theme-control flex shrink-0 items-center justify-between gap-2 px-3 py-2.5 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-hidden focus-visible:ring-inset md:py-2`,
                  `data-[state=active]:bg-surface-tab-selected data-[state=active]:text-text-primary`,
                ),
                children: [
                  (0, J.jsxs)(`span`, {
                    className: `flex min-w-0 items-center gap-2 [&>svg]:shrink-0`,
                    children: [
                      e.icon,
                      (0, J.jsx)(`span`, {
                        className: `min-w-0 text-left break-words`,
                        children: c(e.labelKey),
                      }),
                    ],
                  }),
                  i &&
                    (0, J.jsx)(_, {
                      className: `text-text-tertiary h-4 w-4 shrink-0`,
                      'aria-hidden': `true`,
                    }),
                ],
              },
              e.id,
            ),
          ),
        }),
    ],
  });
}
function Or(e) {
  return e.normalize(`NFD`).replace(/[̀-ͯ]/g, ``).trim().toLowerCase();
}
function kr(e, t) {
  let n = Or(e);
  return n.length === 0 || Or(t.label).includes(n)
    ? !0
    : (t.keywords ?? []).some((e) => Or(e).includes(n));
}
function Ar(e, t, n, r) {
  let i = [];
  for (let a of e) {
    if (a.show && !a.show(n)) continue;
    let e = r(a.labelKey);
    kr(t, { label: e, keywords: a.keywords }) && i.push({ entry: a, label: e });
  }
  return i;
}
function jr(e) {
  return typeof e == `object` && !!e && `key` in e;
}
var Mr = ({
    stateAtom: e,
    localizationKey: t,
    hoverCardText: n,
    switchId: r,
    onCheckedChange: i,
    disabled: a = !1,
    strongLabel: o = !1,
  }) => {
    let [s, c] = O(e),
      l = H(),
      u = (e) => {
        (c(e), i?.(e));
      },
      d = `${r}-label`;
    return (0, J.jsxs)(`div`, {
      className: `flex items-center justify-between`,
      children: [
        (0, J.jsxs)(`div`, {
          className: `flex items-center space-x-2`,
          children: [
            (0, J.jsx)(`div`, {
              id: d,
              children: o ? (0, J.jsx)(`strong`, { children: l(t) }) : l(t),
            }),
            n && (0, J.jsx)(V, { side: Wn.Bottom, text: l(n) }),
          ],
        }),
        (0, J.jsx)(ht, {
          id: r,
          checked: s,
          onCheckedChange: u,
          disabled: a,
          className: `ml-4`,
          'data-testid': r,
          'aria-labelledby': d,
        }),
      ],
    });
  },
  Nr = ({
    stateAtom: e,
    localizationKey: t,
    hoverCardText: n,
    switchId: r,
    onCheckedChange: i,
    disabled: a = !1,
    strongLabel: o = !1,
  }) => {
    let [s, c] = P(e),
      l = H(),
      u = (e) => {
        (c(e), i?.(e));
      },
      d = `${r}-label`;
    return (0, J.jsxs)(`div`, {
      className: `flex items-center justify-between`,
      children: [
        (0, J.jsxs)(`div`, {
          className: `flex items-center space-x-2`,
          children: [
            (0, J.jsx)(`div`, {
              id: d,
              children: o ? (0, J.jsx)(`strong`, { children: l(t) }) : l(t),
            }),
            n && (0, J.jsx)(V, { side: Wn.Bottom, text: l(n) }),
          ],
        }),
        (0, J.jsx)(ht, {
          id: r,
          checked: s,
          onCheckedChange: u,
          disabled: a,
          className: `ml-4`,
          'data-testid': r,
          'aria-labelledby': d,
        }),
      ],
    });
  },
  Pr = (e) => {
    let { stateAtom: t, showSwitch: n = !0 } = e;
    return n
      ? jr(t)
        ? (0, J.jsx)(Mr, { ...e, stateAtom: t })
        : (0, J.jsx)(Nr, { ...e, stateAtom: t })
      : null;
  };
function Fr({ onCheckedChange: e }) {
  let t = v(I.textToSpeech);
  return (0, J.jsx)(Pr, {
    stateAtom: I.cloudBrowserVoices,
    localizationKey: `com_nav_enable_cloud_browser_voice`,
    switchId: `CloudBrowserVoices`,
    onCheckedChange: e,
    disabled: !t,
  });
}
function Ir({ onCheckedChange: e }) {
  let t = v(I.textToSpeech);
  return (0, J.jsx)(Pr, {
    stateAtom: I.automaticPlayback,
    localizationKey: `com_nav_automatic_playback`,
    switchId: `AutomaticPlayback`,
    onCheckedChange: e,
    disabled: !t,
  });
}
function Lr({ onCheckedChange: e }) {
  return (0, J.jsx)(Pr, {
    stateAtom: I.textToSpeech,
    localizationKey: `com_nav_text_to_speech`,
    switchId: `TextToSpeech`,
    onCheckedChange: e,
    strongLabel: !0,
  });
}
var Rr = ({ external: e }) => {
  let t = H(),
    [n, r] = O(I.engineTTS),
    i = v(I.textToSpeech),
    a = e
      ? [
          { value: `browser`, label: t(`com_nav_browser`) },
          { value: `external`, label: t(`com_nav_external`) },
        ]
      : [{ value: `browser`, label: t(`com_nav_browser`) }],
    o = (e) => {
      r(e);
    },
    s = `engine-tts-dropdown-label`;
  return (0, J.jsxs)(`div`, {
    className: `flex items-center justify-between`,
    children: [
      (0, J.jsx)(`div`, { id: s, children: t(`com_nav_engine`) }),
      (0, J.jsx)(Le, {
        value: n,
        onChange: o,
        options: a,
        sizeClasses: `z-50 w-[min(11.25rem,90vw)]`,
        testId: `EngineTTSDropdown`,
        className: `z-50`,
        'aria-labelledby': s,
        disabled: !i,
      }),
    ],
  });
};
function zr({ onCheckedChange: e }) {
  let t = v(I.textToSpeech);
  return (0, J.jsx)(Pr, {
    stateAtom: I.cacheTTS,
    localizationKey: `com_nav_enable_cache_tts`,
    switchId: `CacheTTS`,
    onCheckedChange: e,
    disabled: !t,
  });
}
function Br({ disabled: e = !1 }) {
  let t = H(),
    { voices: n = [] } = _e(),
    [r, i] = O(I.voice),
    a = (e) => {
      Re.log(`Browser Voice changed:`, e);
      let t = typeof e == `string` ? e : e?.value;
      if (t != null) return i(t.toString());
    },
    o = `browser-voice-dropdown-label`;
  return (0, J.jsxs)(`div`, {
    className: `flex items-center justify-between`,
    children: [
      (0, J.jsx)(`div`, { id: o, children: t(`com_nav_voice_select`) }),
      (0, J.jsx)(
        Le,
        {
          value: r ?? ``,
          options: n,
          onChange: a,
          sizeClasses: `z-50 min-w-[min(12.5rem,90vw)] max-w-[min(25rem,90vw)]`,
          testId: `BrowserVoiceDropdown`,
          className: `z-50`,
          'aria-labelledby': o,
          disabled: e,
        },
        `browser-voice-dropdown-${n.length}`,
      ),
    ],
  });
}
function Vr({ disabled: e = !1 }) {
  let t = H(),
    { voices: n = [] } = qe(),
    [r, i] = O(I.voice),
    a = (e) => {
      Re.log(`External Voice changed:`, e);
      let t = typeof e == `string` ? e : e?.value;
      if (t != null) return i(t.toString());
    },
    o = `external-voice-dropdown-label`;
  return (0, J.jsxs)(`div`, {
    className: `flex items-center justify-between`,
    children: [
      (0, J.jsx)(`div`, { id: o, children: t(`com_nav_voice_select`) }),
      (0, J.jsx)(
        Le,
        {
          value: r ?? ``,
          options: n,
          onChange: a,
          sizeClasses: `z-50 min-w-[min(12.5rem,90vw)] max-w-[min(25rem,90vw)]`,
          testId: `ExternalVoiceDropdown`,
          className: `z-50`,
          'aria-labelledby': o,
          disabled: e,
        },
        `external-voice-dropdown-${n.length}`,
      ),
    ],
  });
}
var Hr = { [lt.browser]: Br, [lt.external]: Vr };
function Ur() {
  let e = v(I.engineTTS),
    t = v(I.textToSpeech),
    n = Hr[e];
  return n ? (0, J.jsx)(n, { disabled: !t }) : null;
}
function Wr() {
  let e = H(),
    t = v(I.textToSpeech),
    [n, r] = O(I.playbackRate);
  return (0, J.jsxs)(`div`, {
    className: `flex items-center justify-between`,
    children: [
      (0, J.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, J.jsx)(`div`, { id: `playback-rate-label`, children: e(`com_nav_playback_rate`) }),
          (0, J.jsx)(`div`, { className: `w-2` }),
          (0, J.jsxs)(`small`, {
            className: `opacity-40 high-contrast:opacity-100`,
            children: [`(`, e(`com_endpoint_default_with_num`, { 0: `1` }), `)`],
          }),
        ],
      }),
      (0, J.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, J.jsx)(ot, {
            value: [n ?? 1],
            onValueChange: (e) => r(e[0]),
            onDoubleClick: () => r(null),
            min: 0.1,
            max: 2,
            step: 0.1,
            className: `ml-4 flex h-4 w-24`,
            disabled: !t,
            'aria-labelledby': `playback-rate-label`,
          }),
          (0, J.jsx)(`div`, { className: `w-2` }),
          (0, J.jsx)(dn, {
            value: n ?? 1,
            disabled: !t,
            onChange: (e) => r(e ? e[0] : 0),
            min: 0.1,
            max: 2,
            'aria-labelledby': `playback-rate-label`,
            className: F(
              Xt,
              F(
                Tt,
                `reset-rc-number-input reset-rc-number-input-text-right h-auto w-12 border-0 group-hover/temp:border-border-light`,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function Gr() {
  let e = H(),
    t = v(I.speechToText),
    [n, r] = O(I.autoSendText),
    [i, a] = (0, q.useState)(n !== -1),
    [o, s] = (0, q.useState)(n === -1 ? 3 : n);
  (0, q.useEffect)(() => {
    (a(n !== -1), n !== -1 && s(n));
  }, [n]);
  let c = (e) => {
      (a(e), r(e ? o : -1));
    },
    l = (e) => {
      let t = e[0];
      (s(t), i && r(t));
    },
    u = (e) => {
      let t = typeof e == `number` ? e : parseInt(String(e ?? ``), 10),
        n = Number.isNaN(t) ? 3 : t;
      (s(n), i && r(n));
    },
    d = `auto-send-text-label`;
  return (0, J.jsxs)(`div`, {
    className: `flex flex-col gap-3`,
    children: [
      (0, J.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, J.jsx)(`div`, {
            className: `flex items-center space-x-2`,
            children: (0, J.jsx)(`div`, { id: d, children: e(`com_nav_auto_send_text`) }),
          }),
          (0, J.jsx)(ht, {
            id: `autoSendTextToggle`,
            checked: i,
            onCheckedChange: c,
            className: `ml-4`,
            'data-testid': `autoSendTextToggle`,
            'aria-labelledby': d,
            disabled: !t,
          }),
        ],
      }),
      i &&
        (0, J.jsxs)(`div`, {
          className: `mt-2 flex items-center justify-between`,
          children: [
            (0, J.jsx)(`div`, {
              className: `flex items-center justify-between`,
              children: (0, J.jsx)(`div`, {
                id: `auto-send-delay-label`,
                className: `text-sm text-text-secondary`,
                children: e(`com_nav_setting_delay`),
              }),
            }),
            (0, J.jsxs)(`div`, {
              className: `flex items-center justify-between`,
              children: [
                (0, J.jsx)(ot, {
                  value: [o],
                  onValueChange: l,
                  onDoubleClick: () => {
                    (s(3), i && r(3));
                  },
                  min: 0,
                  max: 60,
                  step: 1,
                  className: `ml-4 flex h-4 w-24`,
                  disabled: !t || !i,
                  'aria-labelledby': `auto-send-delay-label`,
                }),
                (0, J.jsx)(`div`, { className: `w-2` }),
                (0, J.jsx)(dn, {
                  value: `${o} s`,
                  disabled: !t || !i,
                  onChange: u,
                  min: 0,
                  max: 60,
                  'aria-labelledby': `auto-send-delay-label`,
                  className: F(
                    `rounded-md border border-border-light focus:border-border-heavy focus:bg-surface-secondary bg-transparent text-sm text-text-primary shadow-[0_0_0.625rem_rgba(0,0,0,0.05)] outline-hidden focus-within:placeholder:text-text-primary focus:placeholder:text-text-primary placeholder:text-text-secondary focus:outline-hidden focus:ring-text-primary/20 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
                    F(
                      `p-0 shadow-none text-right pr-1 h-8 border-transparent hover:bg-surface-hover transition-colors`,
                      `reset-rc-number-input reset-rc-number-input-text-right h-auto w-12 border-0 group-hover/temp:border-border-light`,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function Kr({ onCheckedChange: e }) {
  return (0, J.jsx)(Pr, {
    stateAtom: I.speechToText,
    localizationKey: `com_nav_speech_to_text`,
    switchId: `SpeechToText`,
    onCheckedChange: e,
    strongLabel: !0,
  });
}
var qr = ({ external: e }) => {
  let t = H(),
    [n, r] = O(I.engineSTT),
    i = v(I.speechToText),
    a = e
      ? [
          { value: `browser`, label: t(`com_nav_browser`) },
          { value: `external`, label: t(`com_nav_external`) },
        ]
      : [{ value: `browser`, label: t(`com_nav_browser`) }],
    o = (e) => {
      r(e);
    },
    s = `engine-stt-dropdown-label`;
  return (0, J.jsxs)(`div`, {
    className: `flex items-center justify-between`,
    children: [
      (0, J.jsx)(`div`, { id: s, children: t(`com_nav_engine`) }),
      (0, J.jsx)(Le, {
        value: n,
        onChange: o,
        options: a,
        sizeClasses: `z-50 w-[min(11.25rem,90vw)]`,
        testId: `EngineSTTDropdown`,
        className: `z-50`,
        'aria-labelledby': s,
        disabled: !i,
      }),
    ],
  });
};
function Jr() {
  let e = H(),
    t = v(I.speechToText),
    [n, r] = O(I.decibelValue);
  return (0, J.jsxs)(`div`, {
    className: `flex items-center justify-between`,
    children: [
      (0, J.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, J.jsx)(`div`, {
            id: `decibel-selector-label`,
            children: e(`com_nav_db_sensitivity`),
          }),
          (0, J.jsx)(`div`, { className: `w-2` }),
          (0, J.jsxs)(`small`, {
            className: `opacity-40 high-contrast:opacity-100`,
            children: [`(`, e(`com_endpoint_default_with_num`, { 0: `-45` }), `)`],
          }),
        ],
      }),
      (0, J.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, J.jsx)(ot, {
            value: [n ?? -45],
            onValueChange: (e) => r(e[0]),
            onDoubleClick: () => r(-45),
            min: -100,
            max: -30,
            step: 1,
            className: `ml-4 flex h-4 w-24`,
            disabled: !t,
            'aria-labelledby': `decibel-selector-label`,
          }),
          (0, J.jsx)(`div`, { className: `w-2` }),
          (0, J.jsx)(dn, {
            value: n,
            disabled: !t,
            onChange: (e) => r(e ? e[0] : 0),
            min: -100,
            max: -30,
            'aria-labelledby': `decibel-selector-label`,
            className: F(
              Xt,
              F(
                Tt,
                `reset-rc-number-input reset-rc-number-input-text-right h-auto w-12 border-0 group-hover/temp:border-border-light`,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function Yr({ onCheckedChange: e }) {
  let t = v(I.speechToText);
  return (0, J.jsx)(Pr, {
    stateAtom: I.autoTranscribeAudio,
    localizationKey: `com_nav_auto_transcribe_audio`,
    switchId: `AutoTranscribeAudio`,
    onCheckedChange: e,
    disabled: !t,
  });
}
function Xr() {
  let e = H(),
    [t, n] = O(I.languageSTT),
    r = v(I.speechToText),
    i = [
      { value: `af`, label: `Afrikaans` },
      { value: `eu`, label: `Basque` },
      { value: `bg`, label: `Bulgarian` },
      { value: `ca`, label: `Catalan` },
      { value: `ar-EG`, label: `Arabic (Egypt)` },
      { value: `ar-JO`, label: `Arabic (Jordan)` },
      { value: `ar-KW`, label: `Arabic (Kuwait)` },
      { value: `ar-LB`, label: `Arabic (Lebanon)` },
      { value: `ar-QA`, label: `Arabic (Qatar)` },
      { value: `ar-AE`, label: `Arabic (UAE)` },
      { value: `ar-MA`, label: `Arabic (Morocco)` },
      { value: `ar-IQ`, label: `Arabic (Iraq)` },
      { value: `ar-DZ`, label: `Arabic (Algeria)` },
      { value: `ar-BH`, label: `Arabic (Bahrain)` },
      { value: `ar-LY`, label: `Arabic (Libya)` },
      { value: `ar-OM`, label: `Arabic (Oman)` },
      { value: `ar-SA`, label: `Arabic (Saudi Arabia)` },
      { value: `ar-TN`, label: `Arabic (Tunisia)` },
      { value: `ar-YE`, label: `Arabic (Yemen)` },
      { value: `cs`, label: `Czech` },
      { value: `nl-NL`, label: `Dutch` },
      { value: `en-AU`, label: `English (Australia)` },
      { value: `en-CA`, label: `English (Canada)` },
      { value: `en-IN`, label: `English (India)` },
      { value: `en-NZ`, label: `English (New Zealand)` },
      { value: `en-ZA`, label: `English (South Africa)` },
      { value: `en-GB`, label: `English (UK)` },
      { value: `en-US`, label: `English (US)` },
      { value: `et-EE`, label: `Estonian` },
      { value: `fi`, label: `Finnish` },
      { value: `fr-FR`, label: `French` },
      { value: `gl`, label: `Galician` },
      { value: `de-DE`, label: `German` },
      { value: `el-GR`, label: `Greek` },
      { value: `he`, label: `Hebrew` },
      { value: `hu`, label: `Hungarian` },
      { value: `is`, label: `Icelandic` },
      { value: `it-IT`, label: `Italian` },
      { value: `id`, label: `Indonesian` },
      { value: `ja`, label: `Japanese` },
      { value: `ko`, label: `Korean` },
      { value: `la`, label: `Latin` },
      { value: `lv-LV`, label: `Latvian` },
      { value: `lt-LT`, label: `Lithuanian` },
      { value: `zh-CN`, label: `Mandarin Chinese` },
      { value: `zh-TW`, label: `Taiwanese` },
      { value: `zh-HK`, label: `Cantonese` },
      { value: `ms-MY`, label: `Malaysian` },
      { value: `no-NO`, label: `Norwegian` },
      { value: `pl`, label: `Polish` },
      { value: `xx-piglatin`, label: `Pig Latin` },
      { value: `pt-PT`, label: `Portuguese` },
      { value: `pt-br`, label: `Portuguese (Brasil)` },
      { value: `ro-RO`, label: `Romanian` },
      { value: `ru`, label: `Russian` },
      { value: `sr-SP`, label: `Serbian` },
      { value: `sk`, label: `Slovak` },
      { value: `es-AR`, label: `Spanish (Argentina)` },
      { value: `es-BO`, label: `Spanish (Bolivia)` },
      { value: `es-CL`, label: `Spanish (Chile)` },
      { value: `es-CO`, label: `Spanish (Colombia)` },
      { value: `es-CR`, label: `Spanish (Costa Rica)` },
      { value: `es-DO`, label: `Spanish (Dominican Republic)` },
      { value: `es-EC`, label: `Spanish (Ecuador)` },
      { value: `es-SV`, label: `Spanish (El Salvador)` },
      { value: `es-GT`, label: `Spanish (Guatemala)` },
      { value: `es-HN`, label: `Spanish (Honduras)` },
      { value: `es-MX`, label: `Spanish (Mexico)` },
      { value: `es-NI`, label: `Spanish (Nicaragua)` },
      { value: `es-PA`, label: `Spanish (Panama)` },
      { value: `es-PY`, label: `Spanish (Paraguay)` },
      { value: `es-PE`, label: `Spanish (Peru)` },
      { value: `es-PR`, label: `Spanish (Puerto Rico)` },
      { value: `es-ES`, label: `Spanish (Spain)` },
      { value: `es-US`, label: `Spanish (US)` },
      { value: `es-UY`, label: `Spanish (Uruguay)` },
      { value: `es-VE`, label: `Spanish (Venezuela)` },
      { value: `sv-SE`, label: `Swedish` },
      { value: `tr`, label: `Turkish` },
      { value: `zu`, label: `Zulu` },
    ],
    a = (e) => {
      n(e);
    },
    o = `language-stt-dropdown-label`;
  return (0, J.jsxs)(`div`, {
    className: `flex items-center justify-between`,
    children: [
      (0, J.jsx)(`div`, { id: o, children: e(`com_nav_language`) }),
      (0, J.jsx)(Le, {
        value: t,
        onChange: a,
        options: i,
        testId: `LanguageSTTDropdown`,
        sizeClasses: `z-50`,
        className: `z-50`,
        'aria-labelledby': o,
        disabled: !r,
      }),
    ],
  });
}
function Zr() {
  let e = H(),
    [t, n] = O(I.UsernameDisplay);
  return (0, J.jsxs)(`div`, {
    className: `flex items-center justify-between`,
    children: [
      (0, J.jsxs)(`div`, {
        className: `flex items-center space-x-2`,
        children: [
          (0, J.jsx)(W, {
            id: `user-name-display-label`,
            children: e(`com_nav_user_name_display`),
          }),
          (0, J.jsx)(V, { side: Wn.Bottom, text: e(`com_nav_info_user_name_display`) }),
        ],
      }),
      (0, J.jsx)(ht, {
        id: `UsernameDisplay`,
        checked: t,
        onCheckedChange: (e) => {
          n(e);
        },
        className: `ml-4`,
        'data-testid': `UsernameDisplay`,
        'aria-labelledby': `user-name-display-label`,
      }),
    ],
  });
}
function Qr({ onCheckedChange: e }) {
  let t = v(I.speechToText),
    n = v(I.textToSpeech),
    [, r] = O(I.autoSendText),
    [, i] = O(I.decibelValue),
    [, a] = O(I.autoTranscribeAudio);
  return (0, J.jsx)(Pr, {
    stateAtom: I.conversationMode,
    localizationKey: `com_nav_conversation_mode`,
    switchId: `ConversationMode`,
    onCheckedChange: (t) => {
      (a(t), r(3), i(-45), e && e(t));
    },
    disabled: !n || !t,
    strongLabel: !0,
  });
}
var $r = ({ enabled: e, required: t, onChange: n, disabled: r, buttonRef: i }) => {
  let a = H(),
    o = e && t === !0,
    s = a(e ? `com_ui_2fa_disable` : `com_ui_2fa_enable`),
    c = (0, J.jsx)(B, {
      ref: i,
      variant: e ? `destructive` : `outline`,
      onClick: o ? void 0 : n,
      disabled: r,
      'aria-disabled': o || r || void 0,
      className: o ? `cursor-not-allowed` : void 0,
      'aria-haspopup': `dialog`,
      'aria-controls': `two-factor-authentication-dialog`,
      children: s,
    });
  return (0, J.jsxs)(`div`, {
    className: `flex items-center justify-between`,
    children: [
      (0, J.jsx)(`div`, {
        className: `flex items-center space-x-2`,
        children: (0, J.jsx)(`span`, {
          className: `text-text-primary text-sm`,
          children: a(`com_nav_2fa`),
        }),
      }),
      (0, J.jsx)(`div`, {
        className: `flex items-center gap-3`,
        children: o
          ? (0, J.jsx)(gn, {
              description: a(`com_ui_2fa_required`),
              'aria-label': `${s}: ${a(`com_ui_2fa_required`)}`,
              'data-testid': `required-2fa-disable-control`,
              className: `inline-flex cursor-not-allowed`,
              render: c,
            })
          : c,
      }),
    ],
  });
};
function ei(e, t) {
  if (!de.isAxiosError(e) || e.response?.status !== 429) return { key: t };
  let n = e.response.headers?.[`retry-after`],
    r = typeof n == `string` || typeof n == `number` ? Number(n) : NaN;
  return Number.isFinite(r) && r > 0 && r <= 300
    ? { key: `com_ui_2fa_rate_limited_retry`, seconds: Math.ceil(r) }
    : { key: `com_ui_2fa_rate_limited` };
}
function ti() {
  let e = H(),
    { showToast: t } = z();
  return (0, q.useCallback)(
    (n, r) => {
      let { key: i, seconds: a } = ei(n, r);
      t({ message: e(i, { seconds: a }), status: `error` });
    },
    [e, t],
  );
}
var ni = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: `easeOut` } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3, ease: `easeIn` } },
  },
  ri = q.memo(() => {
    let e = H(),
      { user: t } = kn(),
      { data: n } = Pt(),
      r = j(I.user),
      { showToast: i } = z(),
      a = ti(),
      o = (0, q.useRef)(null),
      [s, c] = (0, q.useState)(``),
      [l, u] = (0, q.useState)(``),
      [d, f] = (0, q.useState)(!1),
      [p, m] = (0, q.useState)([]),
      [h, g] = (0, q.useState)(``),
      [_, v] = (0, q.useState)(!1),
      [y, b] = (0, q.useState)(``),
      [x, S] = (0, q.useState)(t?.twoFactorEnabled ? `disable` : `setup`),
      { mutate: C } = Mn(),
      { mutate: w, isLoading: T } = Ce(),
      { mutate: E, isLoading: D } = he(),
      { mutate: O, isLoading: k } = it(),
      A = [
        e(`com_ui_2fa_setup`),
        e(`com_ui_2fa_scan_qr`),
        e(`com_ui_verify`),
        e(`com_ui_backup_codes`),
      ],
      ee = { setup: 0, qr: 1, verify: 2, backup: 3, disable: -1 }[x],
      N = n?.twoFactorAuthenticationRequired === !0 && qt(t?.provider),
      te = (0, q.useCallback)(() => {
        (t?.twoFactorEnabled &&
          l &&
          O(void 0, { onError: (e) => a(e, `com_ui_2fa_disable_error`) }),
          u(``),
          c(``),
          m([]),
          b(``),
          g(``),
          S(t?.twoFactorEnabled ? `disable` : `setup`),
          f(!1));
      }, [t, l, O, a]),
      P = (0, q.useCallback)(() => {
        w(void 0, {
          onSuccess: ({ otpauthUrl: e, backupCodes: t }) => {
            (u(e), c(e.split(`secret=`)[1].split(`&`)[0]), m(t), S(`qr`));
          },
          onError: (e) => a(e, `com_ui_2fa_generate_error`),
        });
      }, [w, a]),
      ne = (0, q.useCallback)(() => {
        y &&
          E(
            { token: y },
            {
              onSuccess: () => {
                (i({ message: e(`com_ui_2fa_verified`) }),
                  C(
                    { token: y },
                    { onSuccess: () => S(`backup`), onError: (e) => a(e, `com_ui_2fa_invalid`) },
                  ));
              },
              onError: (e) => a(e, `com_ui_2fa_invalid`),
            },
          );
      }, [y, E, C, e, i, a]),
      re = (0, q.useCallback)(() => {
        if (!p.length) return;
        let e = new Blob(
            [
              p.join(`
`),
            ],
            { type: `text/plain;charset=utf-8` },
          ),
          t = URL.createObjectURL(e),
          n = document.createElement(`a`);
        ((n.href = t), (n.download = `backup-codes.txt`), n.click(), URL.revokeObjectURL(t), f(!0));
      }, [p]),
      ie = (0, q.useCallback)(() => {
        (v(!1),
          S(`disable`),
          i({ message: e(`com_ui_2fa_enabled`) }),
          r((e) => ({
            ...e,
            backupCodes: p.map((e) => ({ code: e, codeHash: e, used: !1, usedAt: null })),
            twoFactorEnabled: !0,
          })));
      }, [r, e, i, p]),
      ae = (0, q.useCallback)(
        (t, n) => {
          if ((!n && t.trim().length < 6) || (n && t.trim().length < 8)) return;
          let o = {};
          (n ? (o.backupCode = t.trim()) : (o.token = t.trim()),
            O(o, {
              onSuccess: () => {
                (i({ message: e(`com_ui_2fa_disabled`) }),
                  v(!1),
                  r((e) => ({ ...e, totpSecret: ``, backupCodes: [], twoFactorEnabled: !1 })),
                  S(`setup`),
                  u(``));
              },
              onError: (e) => a(e, `com_ui_2fa_invalid`),
            }));
        },
        [O, i, e, r, a],
      );
    return (0, J.jsxs)(G, {
      open: _,
      onOpenChange: (e) => {
        (v(e), e || te());
      },
      triggerRef: o,
      children: [
        (0, J.jsx)($r, {
          enabled: !!t?.twoFactorEnabled,
          required: N,
          onChange: () => v(!0),
          disabled: D || k || T,
          buttonRef: o,
        }),
        (0, J.jsx)(ke, {
          className: `w-11/12 max-w-lg p-6`,
          children: (0, J.jsx)(qn, {
            mode: `wait`,
            children: (0, J.jsxs)(
              Kn.div,
              {
                id: `two-factor-authentication-dialog`,
                variants: ni,
                initial: `initial`,
                animate: `animate`,
                exit: `exit`,
                className: `space-y-6`,
                children: [
                  (0, J.jsxs)(an, {
                    children: [
                      (0, J.jsxs)(Ke, {
                        className: `mb-2 flex items-center gap-3 text-2xl font-bold`,
                        children: [
                          (0, J.jsx)(M, {
                            className: `text-text-primary h-6 w-6`,
                            'aria-hidden': `true`,
                          }),
                          t?.twoFactorEnabled ? e(`com_ui_2fa_disable`) : e(`com_ui_2fa_setup`),
                        ],
                      }),
                      x !== `disable` &&
                        (0, J.jsxs)(`div`, {
                          className: `mt-4 space-y-3`,
                          children: [
                            (0, J.jsx)(Bn, {
                              value: (ee / (A.length - 1)) * 100,
                              className: `h-2 rounded-full`,
                            }),
                            (0, J.jsx)(`div`, {
                              className: `text-text-primary flex justify-between text-sm`,
                              children: A.map((e, t) =>
                                (0, J.jsx)(
                                  Kn.span,
                                  {
                                    animate: { opacity: ee >= t ? 1 : 0.7 },
                                    className: `text-text-primary font-medium`,
                                    children: e,
                                  },
                                  e,
                                ),
                              ),
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, J.jsxs)(qn, {
                    mode: `wait`,
                    children: [
                      x === `setup` &&
                        (0, J.jsx)(lr, {
                          isGenerating: T,
                          onGenerate: P,
                          onNext: () => S(`qr`),
                          onError: (e) => i({ message: e.message, status: `error` }),
                        }),
                      x === `qr` &&
                        (0, J.jsx)(_r, {
                          secret: s,
                          otpauthUrl: l,
                          onNext: () => S(`verify`),
                          onError: (e) => i({ message: e.message, status: `error` }),
                        }),
                      x === `verify` &&
                        (0, J.jsx)(ur, {
                          token: y,
                          onTokenChange: b,
                          isVerifying: D,
                          onNext: ne,
                          onError: (e) => i({ message: e.message, status: `error` }),
                        }),
                      x === `backup` &&
                        (0, J.jsx)(hr, {
                          backupCodes: p,
                          onDownload: re,
                          downloaded: d,
                          onNext: ie,
                          onError: (e) => i({ message: e.message, status: `error` }),
                        }),
                      x === `disable` &&
                        (0, J.jsx)(br, {
                          onDisable: ae,
                          isDisabling: k,
                          onError: (e) => i({ message: e.message, status: `error` }),
                        }),
                    ],
                  }),
                ],
              },
              x,
            ),
          }),
        }),
      ],
    });
  });
function ii(e) {
  if (!(e?.configured !== !0 || !e.destination || !e.publicKey))
    return [e.destination, e.publicKey].join(`\0`);
}
function ai(e) {
  switch (e) {
    case `checking`:
      return `com_ui_langfuse_status_checking`;
    case `connected`:
      return `com_ui_langfuse_status_connected`;
    case `failed`:
      return `com_ui_langfuse_status_failed`;
    case `unverified`:
      return `com_ui_langfuse_status_not_verified`;
    default:
      return `com_ui_langfuse_status_not_configured`;
  }
}
function oi(e) {
  switch (e) {
    case `invalid_credentials`:
      return `com_ui_langfuse_test_invalid_credentials`;
    case `access_denied`:
      return `com_ui_langfuse_test_access_denied`;
    case `rate_limited`:
      return `com_ui_langfuse_test_rate_limited`;
    case `server_error`:
      return `com_ui_langfuse_test_server_error`;
    case `timeout`:
      return `com_ui_langfuse_test_timeout`;
    case `missing_secret`:
      return `com_ui_langfuse_test_missing_secret`;
    case `stored_secret_unavailable`:
      return `com_ui_langfuse_test_stored_secret_unavailable`;
    case `unexpected_response`:
      return `com_ui_langfuse_test_unexpected_response`;
    default:
      return `com_ui_langfuse_test_error`;
  }
}
function si(e) {
  switch (e) {
    case `connected`:
      return `bg-status-success`;
    case `failed`:
      return `bg-status-error`;
    case `checking`:
      return `bg-status-warning`;
    default:
      return `border border-border-medium`;
  }
}
function ci(e) {
  let t = e.trim();
  return t.length <= 12 ? t : `${t.slice(0, 6)}...${t.slice(-4)}`;
}
function li() {
  let e = H(),
    { showToast: t } = z(),
    { data: n, isLoading: r, isError: i, isFetching: a, refetch: o } = xr(),
    s = ar(),
    c = or(),
    [l, u] = (0, q.useState)(),
    [d, f] = (0, q.useState)(``),
    [p, m] = (0, q.useState)(``),
    [h, g] = (0, q.useState)(``),
    [_, v] = (0, q.useState)(!1),
    [y, b] = (0, q.useState)(!1),
    [x, S] = (0, q.useState)(`idle`),
    [C, w] = (0, q.useState)(``),
    T = (0, q.useRef)(),
    E = (0, q.useRef)(0),
    D = (0, q.useRef)(null),
    O = (0, q.useRef)(null);
  ((0, q.useEffect)(() => {
    _ && D.current?.focus();
  }, [_]),
    (0, q.useEffect)(() => {
      y && O.current?.focus();
    }, [y]),
    (0, q.useEffect)(() => {
      n && u(n);
    }, [n]),
    (0, q.useEffect)(() => {
      l && (f(l.destination ?? ``), m(l.publicKey ?? ``));
    }, [l]));
  let k = l?.configured === !0,
    A = l?.destinations ?? [],
    j = A.some(({ key: e }) => e === l?.destination),
    ee = [
      ...(k && l?.destination && !j && l?.destination
        ? [
            {
              value: l.destination,
              label: `${l.destination} - ${e(`com_ui_langfuse_destination_unavailable`)}`,
            },
          ]
        : []),
      ...A.map(({ key: e, baseUrl: t }) => ({ value: e, label: `${e} - ${t}` })),
    ],
    M = p.trim(),
    N = h.trim(),
    te = !k || _,
    P = !k || y,
    ne = ci(p),
    re = d !== (l?.destination ?? ``) || M !== (l?.publicKey ?? ``),
    ie = !k || _ || y || re || N !== ``,
    ae = d !== `` && M !== `` && ((!re && k) || N !== ``),
    oe = c.isLoading || s.isLoading;
  (0, q.useEffect)(() => {
    let t = ii(l);
    if (!l || !t) return;
    if (!l.destinations?.some(({ key: e }) => e === l.destination)) {
      ((E.current += 1), S(`failed`), w(e(`com_ui_langfuse_destination_removed`)));
      return;
    }
    if (T.current === t) return;
    T.current = t;
    let n = ++E.current;
    (S(`checking`),
      c.mutate(
        { destination: l.destination ?? ``, publicKey: l.publicKey ?? `` },
        {
          onSuccess: (t) => {
            n === E.current &&
              (S(t.success ? `connected` : `failed`), w(t.success ? `` : e(oi(t.errorCode))));
          },
          onError: () => {
            n === E.current && (S(`failed`), w(e(`com_ui_langfuse_test_error`)));
          },
        },
      ));
  }, [l, e, c]);
  let se = x === `failed` && C !== `` ? C : e(ai(x)),
    ce = si(x),
    le = x === `failed` ? `text-text-destructive` : `text-text-secondary`,
    ue = x === `failed` ? e(`com_ui_langfuse_status_failed_hover`) : void 0;
  return r && l == null
    ? (0, J.jsxs)(`div`, {
        'data-testid': `langfuse-connection-loading`,
        className: `border-border-light flex items-center justify-center rounded-xl border py-12`,
        children: [
          (0, J.jsx)(L, { className: `text-text-secondary h-6 w-6` }),
          (0, J.jsx)(`span`, { className: `sr-only`, children: e(`com_ui_loading`) }),
        ],
      })
    : i && l == null
      ? (0, J.jsxs)(`div`, {
          className: `border-border-light flex flex-col items-center gap-3 rounded-xl border px-6 py-10 text-center`,
          children: [
            (0, J.jsx)(`p`, {
              className: `text-text-secondary text-sm`,
              children: e(`com_ui_langfuse_load_error`),
            }),
            (0, J.jsx)(B, {
              variant: `outline`,
              size: `sm`,
              onClick: () => o(),
              disabled: a,
              children: e(`com_ui_retry`),
            }),
          ],
        })
      : (0, J.jsxs)(`div`, {
          className: `flex flex-col gap-4`,
          children: [
            (0, J.jsxs)(`div`, {
              className: `flex flex-wrap items-start justify-between gap-x-4 gap-y-2`,
              children: [
                (0, J.jsxs)(`div`, {
                  className: `flex min-w-0 flex-1 flex-wrap items-center gap-2`,
                  children: [
                    (0, J.jsx)(`div`, {
                      className: `font-medium`,
                      children: e(`com_ui_langfuse_title`),
                    }),
                    (0, J.jsx)(`div`, {
                      className: `border-brand-purple/40 bg-brand-purple/10 text-brand-purple rounded-full border px-2 py-0.5 text-xs font-medium`,
                      children: e(`com_ui_beta`),
                    }),
                    (0, J.jsx)(V, {
                      side: Wn.Top,
                      text: e(`com_ui_langfuse_beta_info`),
                      children: (0, J.jsx)(`span`, {
                        className: `text-text-tertiary hover:bg-surface-hover hover:text-text-primary flex size-6 items-center justify-center rounded-md transition-colors`,
                        children: (0, J.jsx)(zt, { className: `h-4 w-4`, 'aria-hidden': `true` }),
                      }),
                    }),
                  ],
                }),
                (0, J.jsxs)(`div`, {
                  'data-testid': `langfuse-connection-status`,
                  className: `ml-auto flex max-w-full shrink-0 items-start justify-end gap-1.5 text-right text-xs sm:max-w-[50%] ${le}`,
                  'aria-live': `polite`,
                  title: ue,
                  children: [
                    x === `checking`
                      ? (0, J.jsx)(L, { className: `h-3 w-3` })
                      : (0, J.jsx)(`span`, {
                          className: `mt-1 h-2 w-2 shrink-0 rounded-full ${ce}`,
                        }),
                    (0, J.jsx)(`span`, { children: se }),
                  ],
                }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: `flex flex-col gap-1.5`,
              children: [
                (0, J.jsx)(W, {
                  id: `langfuse-destination-label`,
                  children: e(`com_ui_langfuse_destination`),
                }),
                (0, J.jsx)(Le, {
                  value: d,
                  label: d === `` ? e(`com_ui_select`) : ``,
                  onChange: (t) => {
                    f(t);
                    let n = ++E.current,
                      r = t !== (l?.destination ?? ``) || M !== (l?.publicKey ?? ``);
                    if ((k && r && b(!0), t === `` || M === `` || ((!k || r) && N === ``))) {
                      (S(r ? `unverified` : `idle`), w(``));
                      return;
                    }
                    (S(`checking`),
                      w(``),
                      c.mutate(
                        { destination: t, publicKey: M, ...(N ? { secretKey: N } : {}) },
                        {
                          onSuccess: (t) => {
                            n === E.current &&
                              (S(t.success ? `connected` : `failed`),
                              w(t.success ? `` : e(oi(t.errorCode))));
                          },
                          onError: () => {
                            n === E.current && (S(`failed`), w(e(`com_ui_langfuse_test_error`)));
                          },
                        },
                      ));
                  },
                  options: ee,
                  disabled: A.length === 0 || oe,
                  className: `w-full`,
                  triggerClassName: `w-full`,
                  sizeClasses: `z-50 w-[var(--popover-anchor-width)]`,
                  testId: `langfuse-destination`,
                  'aria-labelledby': `langfuse-destination-label`,
                }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: `flex flex-col gap-1.5`,
              children: [
                (0, J.jsx)(W, {
                  htmlFor: `langfuse-public-token`,
                  children: e(`com_ui_langfuse_public_key`),
                }),
                k &&
                  !_ &&
                  (0, J.jsx)(`button`, {
                    type: `button`,
                    className: `border-border-light hover:border-border-medium focus-visible:ring-ring-primary w-full rounded-lg border px-3 py-2 text-left focus-visible:ring-2 focus-visible:outline-hidden`,
                    'aria-label': `${e(`com_ui_edit`)} ${e(`com_ui_langfuse_public_key`)}`,
                    disabled: oe,
                    onClick: () => v(!0),
                    children: (0, J.jsx)(`code`, {
                      className: `text-text-primary block min-w-0 truncate font-mono text-sm`,
                      children: ne,
                    }),
                  }),
                te &&
                  (0, J.jsx)(Dn, {
                    ref: D,
                    id: `langfuse-public-token`,
                    autoComplete: `off`,
                    'data-lpignore': `true`,
                    'data-1p-ignore': `true`,
                    'data-bwignore': `true`,
                    'data-form-type': `other`,
                    value: p,
                    disabled: oe,
                    placeholder: `pk-lf-...`,
                    onChange: (e) => {
                      E.current += 1;
                      let t = e.target.value;
                      (m(t),
                        k && t.trim() !== (l?.publicKey ?? ``) && b(!0),
                        S(`unverified`),
                        w(``));
                    },
                  }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: `flex flex-col gap-1.5`,
              children: [
                (0, J.jsx)(W, {
                  htmlFor: `langfuse-private-token`,
                  children: e(`com_ui_langfuse_secret_key`),
                }),
                k &&
                  !y &&
                  (0, J.jsx)(`button`, {
                    type: `button`,
                    className: `border-border-light hover:border-border-medium focus-visible:ring-ring-primary w-full rounded-lg border px-3 py-2 text-left focus-visible:ring-2 focus-visible:outline-hidden`,
                    'aria-label': `${e(`com_ui_edit`)} ${e(`com_ui_langfuse_secret_key`)}`,
                    disabled: oe,
                    onClick: () => b(!0),
                    children: (0, J.jsx)(`code`, {
                      className: `text-text-primary block min-w-0 truncate font-mono text-sm`,
                      children: l?.secretKeyPreview,
                    }),
                  }),
                P &&
                  (0, J.jsx)(Ye, {
                    ref: O,
                    id: `langfuse-private-token`,
                    autoComplete: `off`,
                    'data-lpignore': `true`,
                    'data-1p-ignore': `true`,
                    'data-bwignore': `true`,
                    'data-form-type': `other`,
                    value: h,
                    disabled: oe,
                    placeholder: `sk-lf-...`,
                    onChange: (e) => {
                      ((E.current += 1), g(e.target.value), S(`unverified`), w(``));
                    },
                  }),
              ],
            }),
            (0, J.jsx)(`div`, {
              className: `flex min-h-9 items-center justify-end gap-2`,
              children: ie
                ? (0, J.jsx)(B, {
                    variant: `submit`,
                    disabled: !ae || oe,
                    onClick: () => {
                      let n = {
                        enabled: !k || l?.enabled === !0,
                        destination: d,
                        publicKey: M,
                        ...(N ? { secretKey: N } : {}),
                      };
                      ((E.current += 1),
                        s.mutate(n, {
                          onSuccess: (n) => {
                            ((T.current = ii(n)),
                              u(n),
                              S(`connected`),
                              w(``),
                              g(``),
                              v(!1),
                              b(!1),
                              t({ message: e(`com_ui_langfuse_saved`), status: `success` }));
                          },
                          onError: () => {
                            (S(`failed`),
                              w(e(`com_ui_langfuse_save_error`)),
                              t({ message: e(`com_ui_langfuse_save_error`), status: `error` }));
                          },
                        }));
                    },
                    children: c.isLoading
                      ? (0, J.jsxs)(`span`, {
                          className: `flex items-center gap-2`,
                          children: [
                            (0, J.jsx)(L, { className: `h-4 w-4` }),
                            e(`com_ui_langfuse_testing`),
                          ],
                        })
                      : e(`com_ui_save`),
                  })
                : (0, J.jsx)(B, {
                    variant: l?.enabled === !0 ? `outline` : `submit`,
                    disabled: oe || (l?.enabled !== !0 && !j),
                    onClick: () => {
                      if (!k || !l?.destination || !l.publicKey) return;
                      let n = l.enabled !== !0,
                        r = ++E.current;
                      s.mutate(
                        {
                          enabled: n,
                          destination: l.destination ?? ``,
                          publicKey: l.publicKey ?? ``,
                        },
                        {
                          onSuccess: (n) => {
                            r === E.current &&
                              ((T.current = ii(n)),
                              u(n),
                              t({ message: e(`com_ui_langfuse_saved`), status: `success` }));
                          },
                          onError: () => {
                            r === E.current &&
                              t({ message: e(`com_ui_langfuse_save_error`), status: `error` });
                          },
                        },
                      );
                    },
                    children: e(
                      l?.enabled === !0 ? `com_ui_langfuse_disable` : `com_ui_langfuse_enable`,
                    ),
                  }),
            }),
          ],
        });
}
function ui() {
  let e = H(),
    [t, n] = P(Rn),
    r = [
      { value: `system`, label: e(`com_nav_clock_format_system`) },
      { value: `12h`, label: e(`com_nav_clock_format_12h`) },
      { value: `24h`, label: e(`com_nav_clock_format_24h`) },
    ],
    i = `clock-format-selector-label`;
  return (0, J.jsxs)(`div`, {
    className: `flex w-full flex-wrap items-center justify-between gap-2`,
    children: [
      (0, J.jsx)(`div`, { id: i, children: e(`com_nav_clock_format`) }),
      (0, J.jsx)(Le, {
        value: t,
        options: r,
        onChange: (e) => n(e),
        testId: `clock-format-selector`,
        sizeClasses: `z-50 w-[150px]`,
        className: `z-50`,
        'aria-labelledby': i,
      }),
    ],
  });
}
function di() {
  let e = H(),
    t = le(),
    { showToast: n } = z(),
    r = (0, q.useRef)(null),
    [i, a] = (0, q.useState)(!1),
    o = (0, q.useCallback)(() => {
      (n({ message: e(`com_ui_import_conversation_success`), status: rt.SUCCESS }), a(!1));
    }, [e, n]),
    s = (0, q.useCallback)(
      (t) => {
        (Re.error(`Import error:`, t), a(!1));
        let r = t?.toString().includes(`Unsupported import type`);
        n({
          message: e(
            r ? `com_ui_import_conversation_file_type_error` : `com_ui_import_conversation_error`,
          ),
          status: rt.ERROR,
        });
      },
      [e, n],
    ),
    c = Ut({ onSuccess: o, onError: s, onMutate: () => a(!0) }),
    l = (0, q.useCallback)(
      async (r) => {
        try {
          let i = t.getQueryData(yt(!0))?.conversationImportMaxFileSize;
          if (i && r.size > i) {
            let t = (i / 1048576).toFixed(2);
            (n({ message: e(`com_error_files_upload_too_large`, { 0: t }), status: rt.ERROR }),
              a(!1));
            return;
          }
          let o = new FormData();
          (o.append(`file`, r, encodeURIComponent(r.name || `File`)), c.mutate(o));
        } catch (t) {
          (Re.error(`File processing error:`, t),
            a(!1),
            n({ message: e(`com_ui_import_conversation_upload_error`), status: rt.ERROR }));
        }
      },
      [c, n, e, t],
    ),
    u = (0, q.useCallback)(
      (e) => {
        let t = e.target.files?.[0];
        (t && (a(!0), l(t)), (e.target.value = ``));
      },
      [l],
    ),
    d = (0, q.useCallback)(() => {
      r.current?.click();
    }, []),
    f = (0, q.useCallback)(
      (e) => {
        (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), d());
      },
      [d],
    ),
    m = i;
  return (0, J.jsxs)(`div`, {
    className: `flex items-center justify-between`,
    children: [
      (0, J.jsx)(W, {
        id: `import-conversation-label`,
        children: e(`com_ui_import_conversation_info`),
      }),
      (0, J.jsx)(B, {
        variant: `outline`,
        onClick: d,
        onKeyDown: f,
        disabled: m,
        'aria-label': e(`com_ui_import`),
        'aria-labelledby': `import-conversation-label`,
        children: i
          ? (0, J.jsxs)(J.Fragment, {
              children: [
                (0, J.jsx)(L, { className: `mr-1 w-4` }),
                (0, J.jsx)(`span`, { children: e(`com_ui_importing`) }),
              ],
            })
          : (0, J.jsxs)(J.Fragment, {
              children: [
                (0, J.jsx)(p, {
                  className: `mr-1 flex h-4 w-4 items-center stroke-1`,
                  'aria-hidden': `true`,
                }),
                (0, J.jsx)(`span`, { children: e(`com_ui_import`) }),
              ],
            }),
      }),
      (0, J.jsx)(`input`, {
        ref: r,
        type: `file`,
        className: F(`hidden`),
        accept: `.json`,
        onChange: u,
        'aria-hidden': `true`,
      }),
    ],
  });
}
function fi() {
  let e = H(),
    [t, n] = P(Cn),
    r = [
      { value: `system`, label: e(`com_nav_week_start_system`) },
      { value: `sunday`, label: e(`com_nav_week_start_sunday`) },
      { value: `monday`, label: e(`com_nav_week_start_monday`) },
    ],
    i = `week-start-selector-label`;
  return (0, J.jsxs)(`div`, {
    className: `flex w-full flex-wrap items-center justify-between gap-2`,
    children: [
      (0, J.jsx)(`div`, { id: i, children: e(`com_nav_week_start`) }),
      (0, J.jsx)(Le, {
        value: t,
        options: r,
        onChange: (e) => n(e),
        testId: `week-start-selector`,
        sizeClasses: `z-50 w-[150px]`,
        className: `z-50`,
        'aria-labelledby': i,
      }),
    ],
  });
}
var pi = (e, t) =>
    e != null &&
    e.conversationId != null &&
    e.conversationId !== Sn.NEW_CONVO &&
    e.isArchived !== !0 &&
    !bn(e) &&
    t?.conversationId === e.conversationId &&
    t?.isArchived !== !0 &&
    !bn(t),
  mi = () => {
    let e = H(),
      [t, n] = (0, q.useState)(!1),
      r = (0, q.useRef)(null),
      i = It(),
      { startNewChat: a } = on(),
      { showToast: o } = z(),
      s = ue({ mutationKey: [cn.archiveAllConversations] }),
      c = yn({
        onSuccess: () => {
          let t = r.current,
            n = i();
          ((r.current = null),
            pi(t, n) && a(),
            o({ message: e(`com_ui_archive_all_success`), severity: rt.SUCCESS, showIcon: !0 }));
        },
        onError: async () => {
          let t = r.current,
            n = i();
          if (
            ((r.current = null),
            o({ message: e(`com_ui_archive_all_error`), severity: rt.ERROR, showIcon: !0 }),
            pi(t, n))
          )
            try {
              (await ye.getConversationById(t.conversationId)).isArchived === !0 &&
                pi(t, i()) &&
                a();
            } catch {}
        },
      }),
      l = () => {
        let e = i();
        ((r.current = e?.conversationId
          ? {
              conversationId: e.conversationId,
              isArchived: e.isArchived,
              isTemporary: e.isTemporary,
              expiredAt: e.expiredAt,
            }
          : null),
          c.mutate());
      },
      u = c.isLoading || s > 0;
    return (0, J.jsxs)(`div`, {
      className: `flex items-center justify-between`,
      children: [
        (0, J.jsx)(W, { id: `archive-all-chats-label`, children: e(`com_nav_archive_all_chats`) }),
        (0, J.jsxs)(G, {
          open: t,
          onOpenChange: n,
          children: [
            (0, J.jsx)(R, {
              asChild: !0,
              children: (0, J.jsx)(B, {
                'aria-labelledby': `archive-all-chats-label`,
                variant: `outline`,
                disabled: u,
                onClick: () => n(!0),
                children: e(`com_ui_archive`),
              }),
            }),
            (0, J.jsx)(un, {
              showCloseButton: !1,
              title: e(`com_nav_confirm_archive_all`),
              className: `max-w-[28.125rem]`,
              main: (0, J.jsx)(W, {
                className: `break-words`,
                children: e(`com_nav_archive_all_confirm_message`),
              }),
              selection: (0, J.jsx)(at, {
                asChild: !0,
                children: (0, J.jsx)(B, {
                  'aria-label': e(`com_ui_archive`),
                  'aria-busy': u,
                  disabled: u,
                  variant: `submit`,
                  className: `border-none font-normal max-sm:order-first max-sm:w-full sm:order-none`,
                  onClick: l,
                  children: u ? (0, J.jsx)(L, {}) : e(`com_ui_archive`),
                }),
              }),
            }),
          ],
        }),
      ],
    });
  };
function Y(e) {
  let t = () =>
    (0, J.jsx)(Pr, {
      stateAtom: e.stateAtom,
      localizationKey: e.localizationKey,
      switchId: e.switchId,
      hoverCardText: e.hoverCardText,
      onCheckedChange: e.onCheckedChange,
    });
  return ((t.displayName = `Toggle(${e.switchId})`), t);
}
function hi() {
  let { theme: e, setTheme: t } = (0, q.useContext)(Qt),
    n = (0, q.useCallback)((e) => t(e), [t]);
  return (0, J.jsx)(mr, { theme: e, onChange: n });
}
function gi() {
  let [e, t] = O(I.lang),
    n = (0, q.useCallback)(
      (e) => {
        let n = e === `auto` ? navigator.language || navigator.languages?.[0] || `en-US` : e;
        (requestAnimationFrame(() => {
          document.documentElement.lang = n;
        }),
          t(n),
          i.set(`lang`, n, { expires: 365 }));
      },
      [t],
    );
  return (0, J.jsx)(cr, { langcode: e, onChange: n });
}
var _i = q.memo(() => {
  let e = H(),
    { user: t } = kn(),
    { showToast: n } = z(),
    r = ti(),
    i = j(I.user),
    [a, o] = (0, q.useState)(!1),
    [s, c] = (0, q.useState)(``),
    [l, u] = (0, q.useState)(!1),
    { mutate: f, isLoading: p } = Oe(),
    m = !!t?.twoFactorEnabled,
    h = (t = !1) => {
      let a;
      (m && s.trim() && (a = l ? { backupCode: s.trim() } : { token: s.trim() }),
        f(a, {
          onSuccess: (r) => {
            let a = r.backupCodesHash;
            if (
              (i((e) => ({ ...e, backupCodes: a })),
              c(``),
              n({ message: e(`com_ui_backup_codes_regenerated`), status: `success` }),
              !t && a.length)
            ) {
              let e = r.backupCodes.join(`
`),
                t = new Blob([e], { type: `text/plain;charset=utf-8` }),
                n = URL.createObjectURL(t),
                i = document.createElement(`a`);
              ((i.href = n), (i.download = `backup-codes.txt`), i.click(), URL.revokeObjectURL(n));
            }
          },
          onError: (e) => r(e, `com_ui_backup_codes_regenerate_error`),
        }));
    },
    g = () => {
      h(!1);
    },
    _ = !m || (l ? dr(s) : s.length === 6);
  return (0, J.jsxs)(G, {
    open: a,
    onOpenChange: o,
    children: [
      (0, J.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, J.jsx)(`div`, {
            className: `flex items-center space-x-3`,
            children: (0, J.jsx)(W, {
              className: `font-light`,
              children: e(`com_ui_backup_codes`),
            }),
          }),
          (0, J.jsx)(R, {
            asChild: !0,
            children: (0, J.jsx)(B, {
              'aria-label': `Manage Backup Codes`,
              variant: `outline`,
              children: e(`com_ui_manage`),
            }),
          }),
        ],
      }),
      (0, J.jsxs)(ke, {
        className: `w-11/12 max-w-lg`,
        children: [
          (0, J.jsx)(Ke, {
            className: `mb-6 text-2xl font-semibold`,
            children: e(`com_ui_backup_codes`),
          }),
          (0, J.jsx)(qn, {
            children: (0, J.jsxs)(Kn.div, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -20 },
              className: `mt-4`,
              children: [
                Array.isArray(t?.backupCodes) && t?.backupCodes.length > 0
                  ? (0, J.jsxs)(J.Fragment, {
                      children: [
                        (0, J.jsx)(`div`, {
                          className: `border-status-warning-border bg-status-warning-subtle mb-6 rounded-lg border p-4`,
                          children: (0, J.jsx)(`p`, {
                            className: `text-text-secondary text-sm`,
                            children: e(`com_ui_backup_codes_security_info`),
                          }),
                        }),
                        (0, J.jsx)(`h3`, {
                          className: `mb-4 text-lg font-medium`,
                          children: e(`com_ui_backup_codes_status`),
                        }),
                        (0, J.jsx)(`div`, {
                          className: `grid grid-cols-2 gap-4`,
                          children: t?.backupCodes.map((t, n) => {
                            let r = t.used,
                              i = `Backup code number ${n + 1}, ${r ? `used on ${t.usedAt ? new Date(t.usedAt).toLocaleDateString() : `an unknown date`}` : `not used yet`}`;
                            return (0, J.jsx)(
                              Kn.div,
                              {
                                role: `listitem`,
                                tabIndex: 0,
                                'aria-label': i,
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0 },
                                transition: { delay: n * 0.1 },
                                onFocus: () => {
                                  let e = new CustomEvent(`announce`, { detail: { message: i } });
                                  document.dispatchEvent(e);
                                },
                                className: `focus-visible:ring-text-primary flex flex-col rounded-xl border p-4 backdrop-blur-xs transition-colors focus-visible:ring-2 focus-visible:outline-hidden ${r ? `border-status-error-border bg-status-error-subtle` : `border-status-success-border bg-status-success-subtle`} `,
                                children: (0, J.jsxs)(`div`, {
                                  className: `flex items-center justify-between`,
                                  'aria-hidden': `true`,
                                  children: [
                                    (0, J.jsx)(`span`, {
                                      className: `text-text-secondary text-sm font-medium`,
                                      children: e(`com_ui_backup_code_number`, { number: n + 1 }),
                                    }),
                                    (0, J.jsx)(gn, {
                                      description: t.usedAt
                                        ? new Date(t.usedAt).toLocaleDateString()
                                        : ``,
                                      disabled: !r,
                                      focusable: !1,
                                      className: r ? `cursor-pointer` : `cursor-default`,
                                      render: (0, J.jsx)(`span`, {
                                        className: `rounded-full px-3 py-1 text-sm font-medium ${r ? `bg-status-error-subtle text-status-error` : `bg-status-success-subtle text-status-success`}`,
                                        children: e(r ? `com_ui_used` : `com_ui_not_used`),
                                      }),
                                    }),
                                  ],
                                }),
                              },
                              t.codeHash,
                            );
                          }),
                        }),
                        (0, J.jsx)(`div`, {
                          className: `mt-6 flex justify-center`,
                          children: (0, J.jsxs)(B, {
                            onClick: g,
                            disabled: p || !_,
                            variant: `default`,
                            className: `px-8 py-3 transition-all disabled:opacity-50`,
                            children: [
                              p
                                ? (0, J.jsx)(L, { className: `mr-2` })
                                : (0, J.jsx)(d, {
                                    className: `mr-2 h-4 w-4`,
                                    'aria-hidden': `true`,
                                  }),
                              e(p ? `com_ui_regenerating` : `com_ui_regenerate_backup`),
                            ],
                          }),
                        }),
                      ],
                    })
                  : (0, J.jsx)(`div`, {
                      className: `flex flex-col items-center gap-4 p-6 text-center`,
                      children: (0, J.jsxs)(B, {
                        onClick: g,
                        disabled: p || !_,
                        variant: `default`,
                        className: `px-8 py-3 transition-all disabled:opacity-50`,
                        children: [
                          p && (0, J.jsx)(L, { className: `mr-2` }),
                          e(`com_ui_regenerate_backup`),
                        ],
                      }),
                    }),
                m &&
                  (0, J.jsxs)(`div`, {
                    className: `mt-6 space-y-3`,
                    children: [
                      (0, J.jsx)(W, {
                        className: `text-sm font-medium`,
                        children: e(`com_ui_2fa_verification_required`),
                      }),
                      (0, J.jsx)(`div`, {
                        className: `flex justify-center`,
                        children: l
                          ? (0, J.jsx)(fr, { value: s, onChange: c })
                          : (0, J.jsx)(wn, {
                              value: s,
                              onChange: c,
                              maxLength: 6,
                              pattern: `^\\d+$`,
                              className: `gap-2`,
                              children: (0, J.jsxs)(J.Fragment, {
                                children: [
                                  (0, J.jsxs)(Jt, {
                                    children: [
                                      (0, J.jsx)(U, { index: 0 }),
                                      (0, J.jsx)(U, { index: 1 }),
                                      (0, J.jsx)(U, { index: 2 }),
                                    ],
                                  }),
                                  (0, J.jsx)(wt, {}),
                                  (0, J.jsxs)(Jt, {
                                    children: [
                                      (0, J.jsx)(U, { index: 3 }),
                                      (0, J.jsx)(U, { index: 4 }),
                                      (0, J.jsx)(U, { index: 5 }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                      }),
                      (0, J.jsx)(B, {
                        type: `button`,
                        variant: `link`,
                        onClick: () => {
                          (u(!l), c(``));
                        },
                        className: `text-text-primary h-auto p-0 text-sm hover:underline`,
                        children: e(l ? `com_ui_use_2fa_code` : `com_ui_use_backup_code`),
                      }),
                    ],
                  }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
});
function vi() {
  let { data: e } = Bt();
  return (0, J.jsx)(qr, { external: !!e?.sttExternal });
}
function yi() {
  let { data: e } = Bt();
  return (0, J.jsx)(Rr, { external: !!e?.ttsExternal });
}
var bi = [0.5, 0.67, 0.75, 0.8, 0.9, 1, 1.1, 1.25, 1.5],
  xi = 0.001,
  Si = 260;
function Ci() {
  let e = H(),
    [t, n] = P(sr),
    [r, i] = (0, q.useState)(null),
    a = (0, q.useRef)(null),
    o = (0, q.useRef)(null),
    s = (0, q.useRef)(n);
  ((s.current = n),
    (0, q.useEffect)(() => {
      let e = () => {
          if (
            (a.current != null && (clearTimeout(a.current), (a.current = null)), o.current != null)
          ) {
            let e = o.current;
            ((o.current = null), s.current(e));
          }
        },
        t = () => {
          (e(), i(null));
        };
      return (
        window.addEventListener(`pagehide`, t),
        () => {
          (window.removeEventListener(`pagehide`, t), e());
        }
      );
    }, []));
  let c = zn(r ?? t),
    u = Math.round(c * 100),
    d = bi.find((e) => e > c + xi),
    f = [...bi].reverse().find((e) => e < c - xi),
    p = `ui-scale-selector-label`,
    m = (e) => {
      e != null &&
        (i(e),
        (o.current = e),
        a.current != null && clearTimeout(a.current),
        (a.current = setTimeout(() => {
          ((a.current = null), (o.current = null), i(null), s.current(e));
        }, Si)));
    };
  return (0, J.jsxs)(`div`, {
    className: `flex w-full flex-wrap items-center justify-between gap-2`,
    children: [
      (0, J.jsx)(`div`, { id: p, children: e(`com_nav_ui_scale`) }),
      (0, J.jsxs)(`div`, {
        className: `flex max-w-full flex-wrap items-center gap-2`,
        role: `group`,
        'aria-labelledby': p,
        children: [
          (0, J.jsx)(B, {
            variant: `outline`,
            size: `icon`,
            className: `size-9`,
            onClick: () => m(f),
            disabled: f == null,
            'aria-label': e(`com_nav_ui_scale_decrease`),
            'data-testid': `ui-scale-decrease`,
            children: (0, J.jsx)(C, { className: `size-4`, 'aria-hidden': `true` }),
          }),
          (0, J.jsxs)(`span`, {
            className: `text-text-primary w-12 text-center text-sm tabular-nums`,
            'aria-live': `polite`,
            children: [u, `%`],
          }),
          (0, J.jsx)(B, {
            variant: `outline`,
            size: `icon`,
            className: `size-9`,
            onClick: () => m(d),
            disabled: d == null,
            'aria-label': e(`com_nav_ui_scale_increase`),
            'data-testid': `ui-scale-increase`,
            children: (0, J.jsx)(l, { className: `size-4`, 'aria-hidden': `true` }),
          }),
        ],
      }),
    ],
  });
}
function wi() {
  let e = H(),
    [t, n] = P(hn),
    r = (e) => {
      n(e);
    },
    i = [
      { value: `text-xs`, label: e(`com_nav_font_size_xs`) },
      { value: `text-sm`, label: e(`com_nav_font_size_sm`) },
      { value: `text-base`, label: e(`com_nav_font_size_base`) },
      { value: `text-lg`, label: e(`com_nav_font_size_lg`) },
      { value: `text-xl`, label: e(`com_nav_font_size_xl`) },
    ],
    a = `font-size-selector-label`;
  return (0, J.jsxs)(`div`, {
    className: `flex w-full flex-wrap items-center justify-between gap-2`,
    children: [
      (0, J.jsx)(`div`, { id: a, children: e(`com_nav_font_size`) }),
      (0, J.jsx)(Le, {
        value: t,
        options: i,
        onChange: r,
        testId: `font-size-selector`,
        sizeClasses: `z-50 w-[9.375rem]`,
        className: `z-50`,
        'aria-labelledby': a,
      }),
    ],
  });
}
function Ti() {
  let e = le(),
    t = ie(`/c/:conversationId`)?.params.conversationId,
    n = E(
      ({ snapshot: n }) =>
        (r) => {
          if (!t) return;
          let i = e.getQueryData([Rt.conversation, t]),
            a = n.getLoadable(I.conversationByIndex(0)).getValue(),
            o = i ?? (a?.conversationId === t ? a : void 0);
          Mt(t === Sn.NEW_CONVO ? void 0 : o?.title, r);
        },
      [t, e],
    );
  return (0, J.jsx)(Pr, {
    stateAtom: I.chatTitleInTab,
    localizationKey: `com_nav_chat_title_in_tab`,
    switchId: `chatTitleInTab`,
    onCheckedChange: n,
  });
}
var { promptsEditorMode: Ei, alwaysMakeProd: Di } = I;
function Oi() {
  let e = H(),
    [t, n] = O(Ei),
    r = j(Di),
    i = t === be.ADVANCED,
    a = (0, q.useCallback)(
      (e) => {
        (e || r(!0), n(e ? be.ADVANCED : be.SIMPLE));
      },
      [n, r],
    ),
    o = (0, q.useId)(),
    s = `${o}-label`;
  return (0, J.jsxs)(`div`, {
    className: `flex items-center justify-between`,
    children: [
      (0, J.jsxs)(`div`, {
        className: `flex items-center space-x-2`,
        children: [
          (0, J.jsx)(`div`, { id: s, children: e(`com_nav_advanced_prompts`) }),
          (0, J.jsx)(V, { side: Wn.Bottom, text: e(`com_nav_advanced_prompts_desc`) }),
        ],
      }),
      (0, J.jsx)(ht, {
        id: o,
        checked: i,
        onCheckedChange: a,
        className: `ml-4`,
        'data-testid': `advancedPrompts`,
        'aria-labelledby': s,
      }),
    ],
  });
}
function ki() {
  let [e, t] = P(yr),
    n = H(),
    r = `during-run-action-label`;
  return (0, J.jsxs)(`div`, {
    className: `flex flex-wrap items-center justify-between gap-2`,
    children: [
      (0, J.jsxs)(`div`, {
        className: `flex items-center space-x-2`,
        children: [
          (0, J.jsx)(`span`, { id: r, children: n(`com_nav_during_run_action`) }),
          (0, J.jsx)(V, { side: Wn.Bottom, text: n(`com_nav_info_during_run_action`) }),
        ],
      }),
      (0, J.jsx)(Le, {
        value: e,
        options: [
          { value: `steer`, label: n(`com_ui_steer`) },
          { value: `interrupt`, label: n(`com_ui_interrupt_steer`) },
          { value: `queue`, label: n(`com_ui_queue`) },
        ],
        onChange: (e) => {
          (e === `steer` || e === `interrupt` || e === `queue`) && t(e);
        },
        className: `z-50`,
        sizeClasses: `z-50`,
        testId: `duringRunAction`,
        'aria-labelledby': r,
      }),
    ],
  });
}
var Ai = ({ disabled: e = !1 }) => {
    let t = H(),
      { user: n, logout: r } = kn(),
      { mutate: i, isLoading: a } = In({ onSuccess: () => r() }),
      [o, s] = (0, q.useState)(!1),
      [c, l] = (0, q.useState)(!0),
      [u, d] = (0, q.useState)(``),
      [f, p] = (0, q.useState)(!1),
      m = !!n?.twoFactorEnabled,
      h = () => {
        if (c) return;
        let e;
        (m && u.trim() && (e = f ? { backupCode: u.trim() } : { token: u.trim() }), i(e));
      },
      g = (0, q.useCallback)(
        (e) => {
          let t = e.trim().toLowerCase() === n?.email.trim().toLowerCase();
          l(!t);
        },
        [n?.email],
      ),
      _ = !m || (f ? dr(u) : u.length === 6);
    return (0, J.jsx)(J.Fragment, {
      children: (0, J.jsxs)(G, {
        open: o,
        onOpenChange: s,
        children: [
          (0, J.jsxs)(`div`, {
            className: `flex items-center justify-between`,
            children: [
              (0, J.jsx)(W, { id: `delete-account-label`, children: t(`com_nav_delete_account`) }),
              (0, J.jsx)(R, {
                asChild: !0,
                children: (0, J.jsx)(B, {
                  'aria-labelledby': `delete-account-label`,
                  variant: `destructive`,
                  onClick: () => s(!0),
                  disabled: e,
                  children: t(`com_ui_delete`),
                }),
              }),
            ],
          }),
          (0, J.jsxs)(ke, {
            className: `w-11/12 max-w-md`,
            children: [
              (0, J.jsx)(an, {
                children: (0, J.jsx)(Ke, {
                  className: `text-lg leading-6 font-medium`,
                  children: t(`com_nav_delete_account_confirm`),
                }),
              }),
              (0, J.jsx)(`div`, {
                className: `text-text-primary mb-8 text-sm`,
                children: (0, J.jsxs)(`ul`, {
                  className: `text-text-warning font-semibold`,
                  children: [
                    (0, J.jsx)(`li`, { children: t(`com_nav_delete_warning`) }),
                    (0, J.jsx)(`li`, { children: t(`com_nav_delete_data_info`) }),
                  ],
                }),
              }),
              (0, J.jsxs)(`div`, {
                className: `flex-col items-center justify-center`,
                children: [
                  (0, J.jsx)(`div`, {
                    className: `mb-4`,
                    children: ji(
                      t(`com_nav_delete_account_email_placeholder`),
                      `email-confirm-input`,
                      n?.email ?? ``,
                      (e) => g(e.target.value),
                    ),
                  }),
                  m &&
                    (0, J.jsxs)(`div`, {
                      className: `mb-4 space-y-3`,
                      children: [
                        (0, J.jsx)(W, {
                          className: `text-sm font-medium`,
                          children: t(`com_ui_2fa_verification_required`),
                        }),
                        (0, J.jsx)(`div`, {
                          className: `flex justify-center`,
                          children: f
                            ? (0, J.jsx)(fr, { value: u, onChange: d })
                            : (0, J.jsx)(wn, {
                                value: u,
                                onChange: d,
                                maxLength: 6,
                                pattern: `^\\d+$`,
                                className: `gap-2`,
                                children: (0, J.jsxs)(J.Fragment, {
                                  children: [
                                    (0, J.jsxs)(Jt, {
                                      children: [
                                        (0, J.jsx)(U, { index: 0 }),
                                        (0, J.jsx)(U, { index: 1 }),
                                        (0, J.jsx)(U, { index: 2 }),
                                      ],
                                    }),
                                    (0, J.jsx)(wt, {}),
                                    (0, J.jsxs)(Jt, {
                                      children: [
                                        (0, J.jsx)(U, { index: 3 }),
                                        (0, J.jsx)(U, { index: 4 }),
                                        (0, J.jsx)(U, { index: 5 }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                        }),
                        (0, J.jsx)(B, {
                          type: `button`,
                          variant: `link`,
                          onClick: () => {
                            (p(!f), d(``));
                          },
                          className: `text-text-primary h-auto p-0 text-sm font-normal hover:underline`,
                          children: t(f ? `com_ui_use_2fa_code` : `com_ui_use_backup_code`),
                        }),
                      ],
                    }),
                  Mi(h, a, c || !_, t),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  ji = (e, t, n, r) =>
    (0, J.jsxs)(`div`, {
      className: `mb-4`,
      children: [
        (0, J.jsx)(W, { className: `mb-1 text-sm font-medium`, htmlFor: t, children: e }),
        (0, J.jsx)(Dn, { id: t, onChange: r, placeholder: n }),
      ],
    }),
  Mi = (e, t, n, r) =>
    (0, J.jsx)(B, {
      variant: `destructive`,
      className: F(
        `bg-surface-tertiary text-text-primary hover:bg-surface-tertiary mt-4 w-full gap-0 transition-all duration-200`,
        n
          ? `cursor-not-allowed opacity-30 disabled:opacity-30`
          : `bg-surface-destructive text-text-on-status hover:bg-surface-destructive-hover disabled:opacity-100`,
      ),
      onClick: e,
      disabled: t || n,
      children: t
        ? (0, J.jsx)(`div`, {
            className: `flex h-6 justify-center`,
            children: (0, J.jsx)(L, { className: `icon-sm m-auto` }),
          })
        : (0, J.jsx)(J.Fragment, {
            children: n
              ? (0, J.jsxs)(J.Fragment, {
                  children: [
                    (0, J.jsx)(y, { className: `size-5`, 'aria-hidden': `true` }),
                    (0, J.jsx)(`span`, { className: `ml-2`, children: r(`com_ui_locked`) }),
                  ],
                })
              : (0, J.jsxs)(J.Fragment, {
                  children: [
                    (0, J.jsx)(g, { className: `size-5`, 'aria-hidden': `true` }),
                    (0, J.jsx)(`span`, {
                      className: `ml-2`,
                      children: r(`com_nav_delete_account_button`),
                    }),
                  ],
                }),
          }),
    }),
  Ni = `user`,
  Pi = {
    user: `com_ui_stateful_code_environment_user`,
    'agent-user': `com_ui_stateful_code_environment_agent_user`,
    conversation: `com_ui_stateful_code_environment_conversation`,
  };
function Fi() {
  let e = H(),
    { showToast: t } = z(),
    { data: n } = nt(),
    { agentsConfig: r } = je(),
    i = r?.statefulCodeSessions?.allowedEnvironments,
    a = De(i),
    o = n?.personalization?.statefulCodeEnvironment ?? nn(Ni, i) ?? Ni,
    [s, c] = (0, q.useState)(o);
  (0, q.useEffect)(() => {
    c(o);
  }, [o]);
  let l = rn({
    onSuccess: () => t({ message: e(`com_ui_preferences_updated`), status: `success` }),
    onError: () => {
      (c(o), t({ message: e(`com_ui_error_updating_preferences`), status: `error` }));
    },
  });
  return (0, J.jsxs)(`div`, {
    className: `flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4`,
    children: [
      (0, J.jsxs)(`div`, {
        children: [
          (0, J.jsx)(`label`, {
            id: `default-stateful-workspace-label`,
            htmlFor: `default-stateful-workspace`,
            children: e(`com_ui_default_stateful_workspace`),
          }),
          (0, J.jsx)(`p`, {
            id: `default-stateful-workspace-description`,
            className: `text-text-secondary mt-1 text-xs`,
            children: e(`com_ui_default_stateful_workspace_description`),
          }),
        ],
      }),
      (0, J.jsxs)(me, {
        value: s,
        onValueChange: (e) => {
          let t = e;
          a.includes(t) && (c(t), l.mutate({ statefulCodeEnvironment: t }));
        },
        disabled: l.isLoading,
        children: [
          (0, J.jsx)(Qe, {
            id: `default-stateful-workspace`,
            className: `w-full shrink-0 sm:w-[13.75rem]`,
            'aria-labelledby': `default-stateful-workspace-label`,
            'aria-describedby': `default-stateful-workspace-description`,
            'data-testid': `default-stateful-workspace`,
            children: (0, J.jsx)(Ne, {}),
          }),
          (0, J.jsx)($t, {
            children: Ht.filter((e) => a.includes(e) || e === o).map((t) =>
              (0, J.jsx)(Je, { value: t, disabled: !a.includes(t), children: e(Pi[t]) }, t),
            ),
          }),
        ],
      }),
    ],
  });
}
var Ii = () => {
    let e = H(),
      [t, n] = O(I.forkSetting),
      [r, i] = O(I.splitAtTarget),
      [a, o] = O(I.rememberDefaultFork),
      s = [
        { value: Nt.DIRECT_PATH, label: e(`com_ui_fork_visible`) },
        { value: Nt.INCLUDE_BRANCHES, label: e(`com_ui_fork_branches`) },
        { value: Nt.TARGET_LEVEL, label: e(`com_ui_fork_all_target`) },
      ];
    return (0, J.jsxs)(J.Fragment, {
      children: [
        (0, J.jsx)(`div`, {
          className: `pb-3`,
          children: (0, J.jsxs)(`div`, {
            className: `flex items-center justify-between`,
            children: [
              (0, J.jsxs)(`div`, {
                id: `remember-default-fork-label`,
                children: [` `, e(`com_ui_fork_default`), ` `],
              }),
              (0, J.jsx)(ht, {
                id: `rememberDefaultFork`,
                checked: a,
                onCheckedChange: o,
                className: `ml-4`,
                'data-testid': `rememberDefaultFork`,
                'aria-labelledby': `remember-default-fork-label`,
              }),
            ],
          }),
        }),
        a &&
          (0, J.jsx)(`div`, {
            className: `pb-3`,
            children: (0, J.jsxs)(`div`, {
              className: `flex items-center justify-between`,
              children: [
                (0, J.jsxs)(`div`, {
                  className: `flex items-center space-x-2`,
                  children: [
                    (0, J.jsx)(`div`, {
                      id: `fork-change-default-label`,
                      children: e(`com_ui_fork_change_default`),
                    }),
                    (0, J.jsx)(V, { side: Wn.Bottom, text: e(`com_nav_info_fork_change_default`) }),
                  ],
                }),
                (0, J.jsx)(Le, {
                  value: t,
                  onChange: n,
                  options: s,
                  sizeClasses: `z-[50] w-[min(12.5rem,90vw)]`,
                  testId: `fork-setting-dropdown`,
                  className: `z-[50]`,
                  'aria-labelledby': `fork-change-default-label`,
                }),
              ],
            }),
          }),
        (0, J.jsx)(`div`, {
          className: `pb-3`,
          children: (0, J.jsxs)(`div`, {
            className: `flex items-center justify-between`,
            children: [
              (0, J.jsxs)(`div`, {
                className: `flex items-center space-x-2`,
                children: [
                  (0, J.jsx)(`div`, {
                    id: `split-at-target-label`,
                    children: e(`com_ui_fork_split_target_setting`),
                  }),
                  (0, J.jsx)(V, {
                    side: Wn.Bottom,
                    text: e(`com_nav_info_fork_split_target_setting`),
                  }),
                ],
              }),
              (0, J.jsx)(ht, {
                id: `splitAtTarget`,
                checked: r,
                onCheckedChange: i,
                className: `ml-4`,
                'data-testid': `splitAtTarget`,
                'aria-labelledby': `split-at-target-label`,
              }),
            ],
          }),
        }),
      ],
    });
  },
  Li = () => {
    let [e, t] = O(I.chatDirection),
      n = H();
    return (0, J.jsxs)(`div`, {
      className: `flex flex-wrap items-center justify-between gap-2`,
      children: [
        (0, J.jsx)(`div`, {
          className: `flex items-center space-x-2`,
          children: (0, J.jsx)(`span`, {
            id: `chat-direction-label`,
            children: n(`com_nav_chat_direction`),
          }),
        }),
        (0, J.jsx)(B, {
          variant: `outline`,
          'aria-label': n(`com_nav_chat_direction_selected`, {
            direction: n(
              e === `LTR` ? `chat_direction_left_to_right` : `chat_direction_right_to_left`,
            ),
          }),
          onClick: () => {
            t((e) => (e === `LTR` ? `RTL` : `LTR`));
          },
          'data-testid': `chatDirection`,
          children: e.toLowerCase(),
        }),
      ],
    });
  },
  Ri = ({ disabled: e = !1 }) => {
    let t = H(),
      [n, r] = (0, q.useState)(!1),
      [i, a] = (0, q.useState)(!0),
      [o, s] = (0, q.useState)(!1),
      [c, l] = (0, q.useState)(!1),
      u = (0, q.useRef)(null);
    ut(u, () => o && s(!1), []);
    let d = (0, q.useCallback)(async () => {
      let e = await (await caches.open(`tts-responses`)).keys();
      a(e.length === 0);
    }, []);
    (0, q.useEffect)(() => {
      d();
    }, [d]);
    let f = (0, q.useCallback)(async () => {
      l(!0);
      let e = await caches.open(`tts-responses`);
      (await e.keys().then((t) => Promise.all(t.map((t) => e.delete(t)))), l(!1));
    }, []);
    return (0, J.jsxs)(`div`, {
      className: `flex items-center justify-between`,
      children: [
        (0, J.jsxs)(`div`, {
          className: `flex items-center gap-1.5`,
          children: [
            (0, J.jsx)(W, {
              id: `delete-cache-label`,
              children: t(`com_nav_delete_cache_storage`),
            }),
            (0, J.jsx)(V, { side: We.Top, text: t(`com_nav_delete_cache_storage_info`) }),
          ],
        }),
        (0, J.jsxs)(G, {
          open: n,
          onOpenChange: r,
          children: [
            (0, J.jsx)(R, {
              asChild: !0,
              children: (0, J.jsx)(B, {
                variant: `destructive`,
                onClick: () => r(!0),
                disabled: e || i,
                'aria-labelledby': `delete-cache-label`,
                children: t(`com_ui_delete`),
              }),
            }),
            (0, J.jsx)(un, {
              showCloseButton: !1,
              title: t(`com_nav_confirm_clear`),
              className: `max-w-[28.125rem]`,
              main: (0, J.jsx)(W, {
                className: `text-left text-sm font-medium`,
                children: t(`com_nav_clear_cache_confirm_message`),
              }),
              selection: {
                selectHandler: f,
                selectClasses: `bg-surface-destructive text-text-on-status transition-all duration-200 hover:bg-surface-destructive-hover`,
                selectText: c ? (0, J.jsx)(L, {}) : t(`com_ui_delete`),
              },
            }),
          ],
        }),
      ],
    });
  },
  zi = () => {
    let e = H(),
      [t, n] = (0, q.useState)(!1),
      r = (0, q.useRef)(null);
    return (0, J.jsxs)(`div`, {
      className: `flex items-center justify-between`,
      children: [
        (0, J.jsx)(W, { id: `manage-files-label`, children: e(`com_sidepanel_manage_files`) }),
        (0, J.jsx)(B, {
          ref: r,
          variant: `outline`,
          onClick: () => n(!0),
          'aria-labelledby': `manage-files-label`,
          children: e(`com_ui_manage`),
        }),
        t && (0, J.jsx)(gr, { open: t, onOpenChange: n, triggerRef: r }),
      ],
    });
  },
  Bi = {
    current_password_invalid: `com_ui_email_change_error_password`,
    email_change_disabled: `com_ui_email_change_error_disabled`,
    email_delivery_failed: `com_ui_email_change_error_delivery`,
    email_domain_not_allowed: `com_ui_email_change_error_domain`,
    email_in_use: `com_ui_email_change_error_in_use`,
    email_service_unavailable: `com_ui_email_change_error_unavailable`,
    invalid_request: `com_ui_email_change_error_invalid`,
    local_account_required: `com_ui_email_change_error_local`,
    request_in_progress: `com_ui_email_change_error_in_progress`,
    same_email: `com_ui_email_change_error_same`,
  };
function Vi() {
  let e = H(),
    { user: t } = kn(),
    { showToast: n } = z(),
    [r, i] = (0, q.useState)(!1),
    [a, o] = (0, q.useState)(``),
    [s, c] = (0, q.useState)(``),
    [l, u] = (0, q.useState)(),
    d = Xe({
      onSuccess: () => {
        (n({ message: e(`com_ui_email_change_verification_sent`) }),
          i(!1),
          o(``),
          c(``),
          u(void 0));
      },
      onError: (e) => {
        let t = Yt(e);
        u((t ? Bi[t] : void 0) ?? `com_ui_email_change_error_unexpected`);
      },
    });
  return (0, J.jsxs)(G, {
    open: r,
    onOpenChange: (e) => {
      (i(e), u(void 0), e || (o(``), c(``)));
    },
    children: [
      (0, J.jsxs)(`div`, {
        className: `flex items-center justify-between gap-4`,
        children: [
          (0, J.jsxs)(`div`, {
            className: `min-w-0`,
            children: [
              (0, J.jsx)(W, {
                id: `change-email-label`,
                children: e(`com_ui_settings_label_change_email`),
              }),
              (0, J.jsx)(`p`, {
                className: `text-text-secondary truncate text-xs`,
                children: t?.email,
              }),
            ],
          }),
          (0, J.jsx)(R, {
            asChild: !0,
            children: (0, J.jsx)(B, {
              'aria-label': e(`com_ui_email_change_title`),
              variant: `outline`,
              children: e(`com_ui_email_change_button`),
            }),
          }),
        ],
      }),
      (0, J.jsxs)(ke, {
        id: `change-email-dialog`,
        className: `w-11/12 max-w-md`,
        showCloseButton: !1,
        children: [
          (0, J.jsxs)(an, {
            children: [
              (0, J.jsx)(Ke, { children: e(`com_ui_email_change_title`) }),
              (0, J.jsx)(Te, { children: e(`com_ui_email_change_description`) }),
            ],
          }),
          (0, J.jsxs)(`form`, {
            id: `change-email-form`,
            className: `space-y-5`,
            onSubmit: (e) => {
              if (
                (e.preventDefault(),
                u(void 0),
                a.trim().toLowerCase() === t?.email.trim().toLowerCase())
              ) {
                u(`com_ui_email_change_error_same`);
                return;
              }
              d.mutate({ newEmail: a, currentPassword: s });
            },
            children: [
              (0, J.jsxs)(`div`, {
                className: `space-y-2`,
                children: [
                  (0, J.jsx)(W, {
                    htmlFor: `new-email`,
                    className: `font-medium`,
                    children: e(`com_ui_email_change_new_email`),
                  }),
                  (0, J.jsx)(Dn, {
                    id: `new-email`,
                    type: `email`,
                    autoComplete: `email`,
                    value: a,
                    onChange: (e) => o(e.target.value),
                    disabled: d.isLoading,
                    required: !0,
                  }),
                ],
              }),
              (0, J.jsxs)(`div`, {
                className: `space-y-2`,
                children: [
                  (0, J.jsx)(W, {
                    htmlFor: `current-password`,
                    className: `font-medium`,
                    children: e(`com_ui_email_change_current_password`),
                  }),
                  (0, J.jsx)(Ye, {
                    id: `current-password`,
                    autoComplete: `current-password`,
                    maxLength: 128,
                    value: s,
                    onChange: (e) => c(e.target.value),
                    disabled: d.isLoading,
                    required: !0,
                  }),
                ],
              }),
              l &&
                (0, J.jsx)(`p`, {
                  id: `change-email-error`,
                  className: `text-text-destructive text-sm`,
                  role: `alert`,
                  children: e(l),
                }),
            ],
          }),
          (0, J.jsxs)(Ze, {
            children: [
              (0, J.jsx)(at, {
                asChild: !0,
                children: (0, J.jsx)(B, {
                  type: `button`,
                  variant: `outline`,
                  children: e(`com_ui_cancel`),
                }),
              }),
              (0, J.jsxs)(B, {
                type: `submit`,
                form: `change-email-form`,
                variant: `submit`,
                disabled: !a.trim() || !s || d.isLoading,
                children: [
                  d.isLoading && (0, J.jsx)(L, { className: `size-4`, 'aria-hidden': `true` }),
                  e(
                    d.isLoading
                      ? `com_ui_email_change_sending_verification`
                      : `com_ui_email_change_send_verification`,
                  ),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Hi = ({ disabled: e = !1, setDialogOpen: t }) => {
    let n = H(),
      [r, i] = (0, q.useState)(!1),
      a = Hn(),
      o = () => {
        t && t(!1);
      },
      s = () => {
        a.mutate({}, { onSuccess: o });
      },
      c = a.isLoading;
    return (0, J.jsxs)(`div`, {
      className: `flex items-center justify-between`,
      children: [
        (0, J.jsx)(W, { id: `revoke-info-label`, children: n(`com_ui_revoke_info`) }),
        (0, J.jsxs)(G, {
          open: r,
          onOpenChange: i,
          children: [
            (0, J.jsx)(R, {
              asChild: !0,
              children: (0, J.jsx)(B, {
                variant: `destructive`,
                onClick: () => i(!0),
                disabled: e,
                'aria-labelledby': `revoke-info-label`,
                children: n(`com_ui_revoke`),
              }),
            }),
            (0, J.jsx)(un, {
              showCloseButton: !1,
              title: n(`com_ui_revoke_keys`),
              className: `max-w-[28.125rem]`,
              main: (0, J.jsx)(W, {
                className: `text-left text-sm font-medium`,
                children: n(`com_ui_revoke_keys_confirm`),
              }),
              selection: {
                selectHandler: s,
                selectClasses: `bg-surface-destructive text-text-on-status transition-all duration-200 hover:bg-surface-destructive-hover`,
                selectText: c ? (0, J.jsx)(L, {}) : n(`com_ui_revoke`),
              },
            }),
          ],
        }),
      ],
    });
  },
  Ui = () => {
    let e = H(),
      [t, n] = (0, q.useState)(!1),
      { newConversation: r } = ve(),
      i = Tn();
    return (0, J.jsxs)(`div`, {
      className: `flex items-center justify-between`,
      children: [
        (0, J.jsx)(W, { id: `clear-all-chats-label`, children: e(`com_nav_clear_all_chats`) }),
        (0, J.jsxs)(G, {
          open: t,
          onOpenChange: n,
          children: [
            (0, J.jsx)(R, {
              asChild: !0,
              children: (0, J.jsx)(B, {
                'aria-labelledby': `clear-all-chats-label`,
                variant: `destructive`,
                onClick: () => n(!0),
                children: e(`com_ui_delete`),
              }),
            }),
            (0, J.jsx)(un, {
              showCloseButton: !1,
              title: e(`com_nav_confirm_clear`),
              className: `max-w-[28.125rem]`,
              main: (0, J.jsx)(W, {
                className: `break-words`,
                children: e(`com_nav_clear_conversation_confirm_message`),
              }),
              selection: {
                selectHandler: () => {
                  i.mutate(
                    {},
                    {
                      onSuccess: () => {
                        (Fe(), r());
                      },
                    },
                  );
                },
                selectClasses: `bg-surface-destructive text-text-on-status transition-all duration-200 hover:bg-surface-destructive-hover`,
                selectText: i.isLoading ? (0, J.jsx)(L, {}) : e(`com_ui_delete`),
              },
            }),
          ],
        }),
      ],
    });
  },
  Wi = ({
    refillMode: e = `add`,
    lastRefill: t,
    nextRefill: n,
    refillAmount: r,
    refillIntervalUnit: i,
    refillIntervalValue: a,
  }) => {
    let o = H(),
      s = kt(),
      c = e === `reset`,
      l = t ? new Date(t) : null;
    return (0, J.jsxs)(`div`, {
      className: `space-y-4`,
      children: [
        (0, J.jsx)(`h3`, {
          className: `text-lg font-medium`,
          children: o(
            c ? `com_nav_balance_auto_reset_settings` : `com_nav_balance_auto_refill_settings`,
          ),
        }),
        (0, J.jsxs)(`div`, {
          className: `mb-1 flex justify-between text-sm`,
          children: [
            (0, J.jsx)(`span`, {
              children: o(c ? `com_nav_balance_last_reset` : `com_nav_balance_last_refill`),
            }),
            (0, J.jsx)(`span`, { children: l ? l.toLocaleString(void 0, { hour12: s }) : `-` }),
          ],
        }),
        r != null &&
          (0, J.jsxs)(`div`, {
            className: `mb-1 flex justify-between text-sm`,
            children: [
              (0, J.jsx)(`span`, {
                children: o(c ? `com_nav_balance_reset_amount` : `com_nav_balance_refill_amount`),
              }),
              (0, J.jsx)(`span`, { children: r }),
            ],
          }),
        (0, J.jsxs)(`div`, {
          className: `mb-1 flex justify-between text-sm`,
          children: [
            (0, J.jsx)(`span`, { children: o(`com_nav_balance_interval`) }),
            (0, J.jsxs)(`span`, {
              children: [
                o(`com_nav_balance_every`),
                ` `,
                a,
                ` `,
                ((e, t) => {
                  let n;
                  switch (t) {
                    case `seconds`:
                      n = e === 1 ? `com_nav_balance_second` : `com_nav_balance_seconds`;
                      break;
                    case `minutes`:
                      n = e === 1 ? `com_nav_balance_minute` : `com_nav_balance_minutes`;
                      break;
                    case `hours`:
                      n = e === 1 ? `com_nav_balance_hour` : `com_nav_balance_hours`;
                      break;
                    case `days`:
                      n = e === 1 ? `com_nav_balance_day` : `com_nav_balance_days`;
                      break;
                    case `weeks`:
                      n = e === 1 ? `com_nav_balance_week` : `com_nav_balance_weeks`;
                      break;
                    case `months`:
                      n = e === 1 ? `com_nav_balance_month` : `com_nav_balance_months`;
                      break;
                    default:
                      n = `com_nav_balance_seconds`;
                  }
                  return o(n);
                })(a, i),
              ],
            }),
          ],
        }),
        (0, J.jsxs)(`div`, {
          className: `flex items-center justify-between`,
          children: [
            (0, J.jsxs)(`div`, {
              className: `flex items-center space-x-2`,
              children: [
                (0, J.jsx)(W, {
                  className: `font-light`,
                  children: o(c ? `com_nav_balance_next_reset` : `com_nav_balance_next_refill`),
                }),
                (0, J.jsx)(V, {
                  side: Wn.Bottom,
                  text: o(
                    c ? `com_nav_balance_next_reset_info` : `com_nav_balance_next_refill_info`,
                  ),
                }),
              ],
            }),
            (0, J.jsx)(`span`, {
              className: `text-text-primary text-sm font-medium`,
              role: `note`,
              children: n ? n.toLocaleString(void 0, { hour12: s }) : `-`,
            }),
          ],
        }),
      ],
    });
  };
function Gi() {
  return (0, J.jsx)(pr, {});
}
function Ki() {
  let e = H(),
    { state: t, currency: n, balance: r } = tr();
  if (t.status === `loading`)
    return (0, J.jsxs)(`div`, {
      className: `space-y-2`,
      'aria-busy': `true`,
      'data-testid': `auto-refill-loading`,
      children: [
        (0, J.jsx)(Ie, { className: `h-4 w-1/2` }),
        (0, J.jsx)(Ie, { className: `h-4 w-2/3` }),
      ],
    });
  if (t.status === `error`)
    return (0, J.jsx)(`div`, {
      className: `text-text-destructive text-sm`,
      role: `alert`,
      children: e(`com_nav_balance_auto_refill_error`),
    });
  if (t.status !== `success` || r == null) return null;
  let { summary: i } = t,
    { lastRefill: a, refillIntervalUnit: o, refillIntervalValue: s } = r;
  return !r.autoRefillEnabled || i.refillAmount == null
    ? (0, J.jsx)(`div`, {
        className: `text-text-secondary text-sm`,
        children: e(`com_nav_balance_auto_refill_disabled`),
      })
    : a === void 0 || o === void 0 || s === void 0
      ? (0, J.jsx)(`div`, {
          className: `text-text-destructive text-sm`,
          children: e(`com_nav_balance_auto_refill_error`),
        })
      : (0, J.jsx)(Wi, {
          refillMode: i.refillMode,
          lastRefill: a,
          nextRefill: i.nextRefill,
          refillAmount: i.display === `percent` ? null : Nn(i.refillAmount, i.display, n),
          refillIntervalUnit: o,
          refillIntervalValue: s,
        });
}
function qi() {
  let e = H(),
    { data: t } = Pt(),
    n = t?.adminPanelURL ?? ``;
  return n
    ? (0, J.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, J.jsx)(W, { id: `admin-panel-label`, children: e(`com_ui_admin_panel`) }),
          (0, J.jsx)(B, {
            asChild: !0,
            variant: `outline`,
            'aria-labelledby': `admin-panel-label`,
            children: (0, J.jsxs)(`a`, {
              href: n,
              target: `_blank`,
              rel: `noopener noreferrer`,
              children: [
                e(`com_ui_open_var`, { 0: e(`com_ui_admin_panel`) }),
                (0, J.jsx)(r, { className: `size-4`, 'aria-hidden': `true` }),
              ],
            }),
          }),
        ],
      })
    : null;
}
var Ji = { pageSize: 25, sortBy: `createdAt`, sortDirection: `desc`, search: `` };
function Yi() {
  let e = H(),
    { showToast: t } = z(),
    [n, i] = (0, q.useState)(!1),
    a = (0, q.useRef)(null),
    o = v(I.search),
    [s, c] = (0, q.useState)(!1),
    l = Se(`(max-width: 768px)`),
    [u, d] = (0, q.useState)(null),
    [f, p] = (0, q.useState)(Ji),
    {
      data: m,
      fetchNextPage: h,
      hasNextPage: _,
      isFetchingNextPage: y,
      refetch: b,
      isLoading: S,
      isFetching: C,
    } = tn(f, {
      enabled: n,
      staleTime: 0,
      cacheTime: 3e5,
      refetchOnWindowFocus: !1,
      refetchOnMount: !1,
    }),
    w = (0, q.useCallback)((e) => {
      p((t) => ({ ...t, search: e.trim() }));
    }, []),
    T = (0, q.useCallback)((e) => e.shareId, []),
    E = (0, q.useCallback)((e) => {
      (e.preventDefault(), a.current?.focus());
    }, []),
    D = (0, q.useMemo)(
      () => (m?.pages ? m.pages.flatMap((e) => e.links.filter(Boolean)) : []),
      [m?.pages],
    ),
    O = (0, q.useMemo)(
      () => [{ id: f.sortBy, desc: f.sortDirection === `desc` }],
      [f.sortBy, f.sortDirection],
    ),
    k = (0, q.useCallback)((e) => {
      p((t) => {
        let n = [{ id: t.sortBy, desc: t.sortDirection === `desc` }],
          r = (typeof e == `function` ? e(n) : e)[0];
        return r?.id !== `title` && r?.id !== `createdAt`
          ? { ...t, sortBy: Ji.sortBy, sortDirection: Ji.sortDirection }
          : { ...t, sortBy: r.id, sortDirection: r.desc ? `desc` : `asc` };
      });
    }, []),
    A = pn({
      onSuccess: async () => {
        (c(!1), d(null), await b());
      },
      onError: (n) => {
        (console.error(`Delete error:`, n),
          t({ message: e(`com_ui_share_delete_error`), severity: rt.ERROR }));
      },
    }),
    j = (0, q.useCallback)(
      async (n) => {
        let r = n.filter((e) => typeof e.shareId == `string` && e.shareId.length > 0);
        if (r.length === 0) {
          t({ message: e(`com_ui_no_valid_items`), severity: rt.WARNING });
          return;
        }
        try {
          for (let e of r) await A.mutateAsync({ shareId: e.shareId });
          t({
            message: e(
              r.length === 1
                ? `com_ui_shared_link_delete_success`
                : `com_ui_shared_link_bulk_delete_success`,
            ),
            severity: rt.SUCCESS,
          });
        } catch (n) {
          (console.error(`Failed to delete shared links:`, n),
            t({ message: e(`com_ui_bulk_delete_error`), severity: rt.ERROR }));
        }
      },
      [A, t, e],
    ),
    ee = (0, q.useCallback)(async () => {
      _ !== !0 || y || (await h());
    }, [h, _, y]),
    M = (0, q.useCallback)(async () => {
      u && (await j([u]));
    }, [u, j]),
    N = (0, q.useMemo)(
      () => [
        {
          accessorKey: `title`,
          header: e(`com_ui_name`),
          cell: ({ row: e }) => {
            let { title: t, shareId: n } = e.original,
              i = (0, J.jsxs)(re, {
                to: `/share/${n}`,
                target: `_blank`,
                rel: `noopener noreferrer`,
                className: `group text-text-primary focus-visible:ring-text-primary flex items-center gap-1.5 truncate rounded-sm font-medium underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:outline-hidden`,
                children: [
                  (0, J.jsx)(`span`, { className: `truncate`, children: t }),
                  (0, J.jsx)(r, {
                    className: `text-text-tertiary group-hover:text-text-secondary size-3.5 shrink-0 transition-colors`,
                    'aria-hidden': `true`,
                  }),
                ],
              });
            return (0, J.jsx)(`div`, {
              className: `flex items-center gap-2`,
              children: t ? (0, J.jsx)(gn, { description: t, render: i }) : i,
            });
          },
          meta: { width: 55, isRowHeader: !0 },
        },
        {
          accessorKey: `createdAt`,
          header: e(`com_ui_date`),
          cell: ({ row: e }) => Ct(e.original.createdAt?.toString() ?? ``, l),
          meta: { width: 25, desktopOnly: !0 },
        },
        {
          id: `actions`,
          header: e(`com_assistants_actions`),
          enableSorting: !1,
          meta: { width: 20 },
          cell: ({ row: t }) =>
            (0, J.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, J.jsx)(gn, {
                  description: e(`com_ui_open_source_chat_new_tab`),
                  render: (0, J.jsx)(B, {
                    asChild: !0,
                    variant: `row-action`,
                    size: `icon-sm`,
                    children: (0, J.jsx)(`a`, {
                      href: `/c/${t.original.conversationId}`,
                      target: `_blank`,
                      rel: `noopener noreferrer`,
                      'aria-label': e(`com_ui_open_source_chat_new_tab_title`, {
                        title: t.original.title || e(`com_ui_untitled`),
                      }),
                      children: (0, J.jsx)(x, { className: `size-4`, 'aria-hidden': `true` }),
                    }),
                  }),
                }),
                (0, J.jsx)(gn, {
                  description: e(`com_ui_delete_shared_link_heading`),
                  render: (0, J.jsx)(B, {
                    variant: `row-action`,
                    size: `icon-sm`,
                    onClick: () => {
                      (d(t.original), c(!0));
                    },
                    'aria-label': e(`com_ui_delete_shared_link`, {
                      title: t.original.title || e(`com_ui_untitled`),
                    }),
                    'aria-haspopup': `dialog`,
                    'aria-controls': `delete-shared-link-dialog`,
                    children: (0, J.jsx)(g, { className: `size-4`, 'aria-hidden': `true` }),
                  }),
                }),
              ],
            }),
        },
      ],
      [l, e],
    );
  return (0, J.jsxs)(`div`, {
    className: `flex items-center justify-between`,
    children: [
      (0, J.jsx)(W, { id: `shared-links-label`, children: e(`com_nav_shared_links`) }),
      (0, J.jsxs)(G, {
        open: n,
        onOpenChange: i,
        children: [
          (0, J.jsx)(R, {
            asChild: !0,
            onClick: () => i(!0),
            children: (0, J.jsx)(B, {
              'aria-labelledby': `shared-links-label`,
              variant: `outline`,
              children: e(`com_ui_manage`),
            }),
          }),
          (0, J.jsxs)(ke, {
            focusOutline: `hidden`,
            ref: a,
            tabIndex: -1,
            onOpenAutoFocus: E,
            className: `w-11/12 max-w-3xl shadow-2xl`,
            children: [
              (0, J.jsx)(an, { children: (0, J.jsx)(Ke, { children: e(`com_nav_shared_links`) }) }),
              (0, J.jsx)(Ln, {
                columns: N,
                data: D,
                getRowId: T,
                className: `max-h-[60vh] min-h-80 scrollbar-gutter-stable`,
                hasNextPage: _,
                isFetchingNextPage: y,
                isFetching: C,
                fetchNextPage: ee,
                sorting: O,
                onSortingChange: k,
                onFilterChange: w,
                filterValue: f.search,
                isLoading: S,
                config: {
                  selection: { enableRowSelection: !1, showCheckboxes: !1 },
                  skeleton: { count: 6 },
                  search: { enableSearch: o.enabled === !0, debounce: 300 },
                },
              }),
            ],
          }),
        ],
      }),
      (0, J.jsx)(G, {
        open: s,
        onOpenChange: c,
        children: (0, J.jsx)(un, {
          showCloseButton: !1,
          title: e(`com_ui_delete_shared_link_heading`),
          className: `max-w-[28.125rem]`,
          main: (0, J.jsx)(J.Fragment, {
            children: (0, J.jsx)(`div`, {
              id: `delete-shared-link-dialog`,
              className: `flex w-full flex-col items-center gap-2`,
              children: (0, J.jsx)(`div`, {
                className: `grid w-full items-center gap-2`,
                children: (0, J.jsx)(W, {
                  htmlFor: `dialog-confirm-delete`,
                  className: `text-left text-sm font-medium`,
                  children: (0, J.jsx)(ne, {
                    i18nKey: `com_ui_delete_confirm_strong`,
                    values: { title: u?.title },
                    components: { strong: (0, J.jsx)(`strong`, {}) },
                  }),
                }),
              }),
            }),
          }),
          selection: {
            selectHandler: M,
            selectClasses: `bg-surface-destructive hover:bg-surface-destructive-hover text-text-on-status ${A.isLoading ? `cursor-not-allowed opacity-80` : ``}`,
            selectText: A.isLoading ? (0, J.jsx)(L, {}) : e(`com_ui_delete`),
          },
        }),
      }),
    ],
  });
}
var Xi = (e, t, n) =>
  e
    ? n
      ? `com_nav_info_client_image_resize_unavailable`
      : t
        ? `com_nav_info_client_image_resize_enforced`
        : `com_nav_info_client_image_resize`
    : `com_nav_info_client_image_resize_unsupported`;
function Zi() {
  let e = H(),
    t = j(I.clientImageResize),
    {
      isEnabled: n,
      isEnforced: r,
      isSupported: i,
      isConfigPending: a,
      isConfigUnavailable: o,
    } = Be(),
    s = `clientImageResize-label`,
    c = Xi(i, r, o);
  return (0, J.jsxs)(`div`, {
    className: `flex items-center justify-between`,
    children: [
      (0, J.jsxs)(`div`, {
        className: `flex items-center space-x-2`,
        children: [
          (0, J.jsx)(`div`, { id: s, children: e(`com_nav_client_image_resize`) }),
          (0, J.jsx)(V, { side: Wn.Bottom, text: e(c) }),
        ],
      }),
      (0, J.jsx)(ht, {
        id: `clientImageResize`,
        checked: n,
        onCheckedChange: t,
        disabled: r || !i || o || a,
        'aria-busy': a,
        className: `ml-4`,
        'data-testid': `clientImageResize`,
        'aria-labelledby': s,
      }),
    ],
  });
}
var Qi = 60,
  $i = (e) => {
    e?.select();
  },
  ea = (e) => {
    if (e == null || e === ``) return null;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t.toLocaleDateString();
  },
  ta = (e) => (t) => {
    t && e.current && ((e.current = !1), t.focus());
  };
function na({
  passkey: e,
  isRenaming: t,
  isBusy: n,
  requiresPassword: r,
  onStartRename: i,
  onRename: a,
  onDelete: c,
}) {
  let l = H(),
    [u, d] = (0, q.useState)(e.name),
    [p, m] = (0, q.useState)(!1),
    [h, g] = (0, q.useState)(``),
    [_, v] = (0, q.useState)(!1),
    [y, x] = (0, q.useState)(!1),
    S = r || y,
    C = (0, q.useRef)(null),
    w = (0, q.useRef)(!1),
    T = (0, q.useId)(),
    E = `${T}-password`,
    D = `${T}-password-error`,
    O = ea(e.createdAt),
    k = ea(e.lastUsedAt),
    A = (0, q.useCallback)(() => {
      (d(e.name), i(e.id));
    }, [e.id, e.name, i]),
    j = (0, q.useCallback)(() => {
      (d(e.name), (w.current = !0), i(null));
    }, [e.name, i]),
    ee = (0, q.useCallback)(() => {
      let t = u.trim();
      if (!t || t === e.name) {
        j();
        return;
      }
      a(e.id, t);
    }, [u, e.id, e.name, a, j]),
    M = (0, q.useCallback)((e) => {
      ((C.current = e), e?.focus());
    }, []),
    N = (0, q.useMemo)(() => ta(w), []),
    te = (0, q.useCallback)((e) => {
      (m(e), g(``), v(!1));
    }, []),
    P = (0, q.useCallback)(
      (e) => {
        S && (e.preventDefault(), C.current?.focus());
      },
      [S],
    ),
    ne = (0, q.useCallback)(
      async (t) => {
        (t.preventDefault(), v(!1));
        let n = await c(e.id, h);
        if (n === `removed`) {
          (g(``), m(!1));
          return;
        }
        (n === `incorrect-password` && (v(!0), x(!0)), C.current?.focus());
      },
      [c, e.id, h],
    ),
    re = (0, q.useCallback)(
      (e) => {
        e.key === `Enter`
          ? (e.preventDefault(), ee())
          : e.key === `Escape` && (e.preventDefault(), j());
      },
      [ee, j],
    );
  return (0, J.jsxs)(Ve, {
    open: p,
    onOpenChange: te,
    children: [
      (0, J.jsxs)(`div`, {
        className: `border-border-light bg-surface-secondary flex items-center gap-3 rounded-xl border px-3 py-2`,
        'data-testid': `passkey-item`,
        children: [
          (0, J.jsx)(`span`, {
            className: `text-text-secondary shrink-0`,
            children: (0, J.jsx)(St, { className: `h-5 w-5` }),
          }),
          t
            ? (0, J.jsxs)(`div`, {
                className: `flex min-w-0 flex-1 items-center gap-2`,
                children: [
                  (0, J.jsx)(Dn, {
                    ref: $i,
                    value: u,
                    maxLength: Qi,
                    onChange: (e) => d(e.target.value),
                    onKeyDown: re,
                    'aria-label': l(`com_ui_passkey_name`),
                    variant: `inline`,
                  }),
                  (0, J.jsx)(gn, {
                    description: l(`com_ui_save`),
                    render: (0, J.jsx)(B, {
                      variant: `ghost`,
                      size: `icon`,
                      className: `shrink-0`,
                      onClick: ee,
                      disabled: n,
                      'aria-label': l(`com_ui_save`),
                      children: (0, J.jsx)(b, { className: `h-4 w-4`, 'aria-hidden': `true` }),
                    }),
                  }),
                  (0, J.jsx)(gn, {
                    description: l(`com_ui_cancel`),
                    render: (0, J.jsx)(B, {
                      variant: `secondary`,
                      size: `icon`,
                      className: `shrink-0`,
                      onClick: j,
                      'aria-label': l(`com_ui_cancel`),
                      children: (0, J.jsx)(o, { className: `h-4 w-4`, 'aria-hidden': `true` }),
                    }),
                  }),
                ],
              })
            : (0, J.jsxs)(J.Fragment, {
                children: [
                  (0, J.jsxs)(`div`, {
                    className: `min-w-0 flex-1`,
                    children: [
                      (0, J.jsx)(`p`, {
                        className: `text-text-primary truncate text-sm font-medium`,
                        children: e.name,
                      }),
                      (0, J.jsxs)(`p`, {
                        className: `text-text-secondary truncate text-xs`,
                        children: [
                          O != null && l(`com_ui_passkey_added_on`, { date: O }),
                          O != null && ` · `,
                          k == null
                            ? l(`com_ui_passkey_never_used`)
                            : l(`com_ui_passkey_last_used`, { date: k }),
                        ],
                      }),
                    ],
                  }),
                  e.backedUp &&
                    (0, J.jsx)(`span`, {
                      className: `bg-status-success-subtle text-status-success shrink-0 rounded-full px-2 py-0.5 text-xs font-medium`,
                      children: l(`com_ui_passkey_synced`),
                    }),
                  (0, J.jsx)(gn, {
                    description: l(`com_ui_passkey_rename`),
                    render: (0, J.jsx)(B, {
                      ref: N,
                      variant: `ghost`,
                      size: `icon`,
                      onClick: A,
                      'aria-label': l(`com_ui_passkey_rename`),
                      children: (0, J.jsx)(s, { className: `h-4 w-4`, 'aria-hidden': `true` }),
                    }),
                  }),
                  (0, J.jsx)(gn, {
                    description: l(`com_ui_passkey_remove`),
                    render: (0, J.jsx)(fn, {
                      asChild: !0,
                      children: (0, J.jsx)(B, {
                        variant: `ghost`,
                        size: `icon`,
                        'aria-label': l(`com_ui_passkey_remove`),
                        children: (0, J.jsx)(f, { className: `h-4 w-4`, 'aria-hidden': `true` }),
                      }),
                    }),
                  }),
                ],
              }),
        ],
      }),
      (0, J.jsxs)(bt, {
        className: `w-11/12`,
        onOpenAutoFocus: P,
        children: [
          (0, J.jsxs)(Ft, {
            children: [
              (0, J.jsx)(On, { children: l(`com_ui_passkey_remove_confirm`, { name: e.name }) }),
              (0, J.jsx)(et, { children: l(`com_ui_passkey_remove_description`) }),
            ],
          }),
          (0, J.jsxs)(`form`, {
            onSubmit: ne,
            className: `flex flex-col gap-2`,
            children: [
              S &&
                (0, J.jsxs)(J.Fragment, {
                  children: [
                    (0, J.jsx)(W, {
                      htmlFor: E,
                      className: `text-sm font-medium`,
                      children: l(`com_ui_passkey_confirm_password`),
                    }),
                    (0, J.jsx)(Ye, {
                      id: E,
                      ref: M,
                      name: `password`,
                      autoComplete: `current-password`,
                      value: h,
                      onChange: (e) => g(e.target.value),
                      'aria-invalid': _,
                      'aria-describedby': _ ? D : void 0,
                    }),
                    _ &&
                      (0, J.jsx)(`p`, {
                        id: D,
                        role: `alert`,
                        className: `text-text-destructive text-xs`,
                        children: l(`com_ui_passkey_password_incorrect`),
                      }),
                  ],
                }),
              (0, J.jsxs)(fe, {
                className: `mt-2`,
                children: [
                  (0, J.jsx)(pt, {
                    asChild: !0,
                    children: (0, J.jsx)(B, {
                      type: `button`,
                      variant: `outline`,
                      children: l(`com_ui_cancel`),
                    }),
                  }),
                  (0, J.jsx)(B, {
                    type: `submit`,
                    variant: `destructive`,
                    disabled: n || (S && h === ``),
                    children: n ? (0, J.jsx)(L, { className: `h-4 w-4` }) : l(`com_ui_delete`),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var ra = q.memo(na),
  ia = `passkey-confirm-password`,
  aa = `passkey-confirm-password-error`,
  oa = `passkey-confirm-password-form`,
  sa = `add-passkey-dialog`;
function ca() {
  let e = H(),
    { user: t } = kn(),
    { showToast: n } = z(),
    [r, i] = (0, q.useState)(!1),
    [a, o] = (0, q.useState)(!1),
    [s, c] = (0, q.useState)(null),
    [u, d] = (0, q.useState)(null),
    [f, p] = (0, q.useState)(``),
    m = (0, q.useRef)(null),
    h = (0, q.useRef)(null),
    g = (0, q.useRef)(null),
    { data: _, isLoading: v, isError: y } = Un({ enabled: r }),
    { data: b, refetch: x } = Pt(),
    { registerPasskey: S, isRegistering: C, passwordErrorKey: w, clearPasswordError: T } = Ee(),
    { mutate: E } = we(),
    { mutateAsync: D } = Dt(),
    O = _?.passkeys ?? [],
    k = b?.maxPasskeysPerUser ?? 20,
    A = O.length >= k,
    j = t?.provider === `local`,
    ee = (0, q.useCallback)((e) => {
      ((h.current = e), e?.focus());
    }, []),
    M = (0, q.useCallback)(() => {
      (T(), p(``), o(!0));
    }, [T]),
    N = (0, q.useCallback)(
      (e) => {
        (o(e), e || (p(``), T()));
      },
      [T],
    ),
    te = (0, q.useCallback)((e) => {
      e.preventDefault();
      let t = g.current;
      if (((g.current = null), t != null)) {
        c(t);
        return;
      }
      m.current?.focus();
    }, []),
    P = (0, q.useCallback)(
      async (e) => {
        e.preventDefault();
        let t = await S(f);
        if (!t) {
          h.current?.focus();
          return;
        }
        (p(``), (g.current = t.id), o(!1));
      },
      [f, S],
    ),
    ne = (0, q.useCallback)(
      (t, r) => {
        (d(t),
          E(
            { passkeyId: t, name: r },
            {
              onSuccess: () => c(null),
              onError: () => n({ message: e(`com_ui_passkey_rename_error`), status: `error` }),
              onSettled: () => d(null),
            },
          ));
      },
      [E, e, n],
    ),
    re = (0, q.useCallback)(
      async (t, r) => {
        d(t);
        try {
          return (
            await D({ passkeyId: t, password: r === `` ? void 0 : r }),
            n({ message: e(`com_ui_passkey_removed`) }),
            `removed`
          );
        } catch (t) {
          return Ae(t)
            ? `incorrect-password`
            : (n({ message: e(`com_ui_passkey_remove_error`), status: `error` }), `failed`);
        } finally {
          d(null);
        }
      },
      [D, e, n],
    ),
    ie = (0, q.useCallback)(
      (e) => {
        if ((i(e), e)) {
          x();
          return;
        }
        (p(``), o(!1), c(null), (g.current = null), T());
      },
      [T, x],
    );
  return (0, J.jsxs)(G, {
    open: r,
    onOpenChange: ie,
    children: [
      (0, J.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, J.jsx)(`div`, {
            className: `flex items-center space-x-3`,
            children: (0, J.jsx)(W, { className: `font-light`, children: e(`com_ui_passkeys`) }),
          }),
          (0, J.jsx)(R, {
            asChild: !0,
            children: (0, J.jsx)(B, {
              variant: `outline`,
              'aria-label': e(`com_ui_passkeys`),
              children: e(`com_ui_manage`),
            }),
          }),
        ],
      }),
      (0, J.jsxs)(ke, {
        className: `w-11/12 max-w-lg`,
        showCloseButton: !0,
        children: [
          (0, J.jsxs)(an, {
            children: [
              (0, J.jsx)(Ke, {
                children: (0, J.jsxs)(`div`, {
                  className: `flex items-center gap-3 text-xl font-semibold`,
                  children: [
                    (0, J.jsx)(`span`, {
                      className: `text-text-secondary`,
                      children: (0, J.jsx)(St, { className: `h-5 w-5` }),
                    }),
                    e(`com_ui_passkeys`),
                  ],
                }),
              }),
              (0, J.jsx)(Te, { children: e(`com_ui_passkeys_description`) }),
            ],
          }),
          (0, J.jsxs)(`div`, {
            className: `mt-4`,
            children: [
              v &&
                (0, J.jsxs)(`div`, {
                  className: `space-y-2`,
                  'aria-busy': `true`,
                  children: [
                    (0, J.jsx)(Ie, { className: `h-16 w-full rounded-xl` }),
                    (0, J.jsx)(Ie, { className: `h-16 w-full rounded-xl` }),
                  ],
                }),
              !v &&
                y &&
                (0, J.jsxs)(`div`, {
                  role: `alert`,
                  className: `border-border-light flex flex-col items-center gap-2 rounded-xl border border-dashed p-8 text-center`,
                  children: [
                    (0, J.jsx)(`span`, {
                      className: `text-text-tertiary`,
                      children: (0, J.jsx)(St, { className: `h-6 w-6` }),
                    }),
                    (0, J.jsx)(`p`, {
                      className: `text-text-secondary text-sm`,
                      children: e(`com_ui_passkey_load_error`),
                    }),
                  ],
                }),
              !v &&
                !y &&
                O.length === 0 &&
                (0, J.jsxs)(`div`, {
                  className: `border-border-light flex flex-col items-center gap-2 rounded-xl border border-dashed p-8 text-center`,
                  children: [
                    (0, J.jsx)(`span`, {
                      className: `text-text-tertiary`,
                      children: (0, J.jsx)(St, { className: `h-6 w-6` }),
                    }),
                    (0, J.jsx)(`p`, {
                      className: `text-text-secondary text-sm`,
                      children: e(`com_ui_passkey_empty`),
                    }),
                  ],
                }),
              !v &&
                O.length > 0 &&
                (0, J.jsx)(`ul`, {
                  className: `space-y-1.5`,
                  children: (0, J.jsx)(qn, {
                    initial: !1,
                    children: O.map((e) =>
                      (0, J.jsx)(
                        Kn.li,
                        {
                          layout: !0,
                          initial: { opacity: 0, y: -8 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, y: -8 },
                          transition: { duration: 0.15 },
                          className: `list-none`,
                          children: (0, J.jsx)(ra, {
                            passkey: e,
                            isRenaming: s === e.id,
                            isBusy: u === e.id,
                            requiresPassword: j,
                            onStartRename: c,
                            onRename: ne,
                            onDelete: re,
                          }),
                        },
                        e.id,
                      ),
                    ),
                  }),
                }),
            ],
          }),
          j &&
            (0, J.jsxs)(`div`, {
              className: `mt-6 flex flex-col items-end gap-2`,
              children: [
                (0, J.jsxs)(B, {
                  ref: m,
                  variant: `submit`,
                  onClick: M,
                  disabled: C || A || v,
                  'aria-haspopup': `dialog`,
                  'aria-expanded': a,
                  'aria-controls': sa,
                  children: [
                    (0, J.jsx)(l, { className: `h-4 w-4`, 'aria-hidden': `true` }),
                    e(`com_ui_passkey_add`),
                  ],
                }),
                A &&
                  (0, J.jsx)(`p`, {
                    className: `text-text-secondary text-xs`,
                    children: e(`com_ui_passkey_limit_reached`),
                  }),
              ],
            }),
        ],
      }),
      (0, J.jsx)(G, {
        open: a,
        onOpenChange: N,
        children: (0, J.jsxs)(ke, {
          id: sa,
          className: `w-11/12 max-w-md`,
          showCloseButton: !1,
          onCloseAutoFocus: te,
          children: [
            (0, J.jsxs)(an, {
              children: [
                (0, J.jsx)(Ke, { children: e(`com_ui_passkey_add`) }),
                (0, J.jsx)(Te, { children: e(`com_ui_passkey_confirm_password_description`) }),
              ],
            }),
            (0, J.jsxs)(`form`, {
              id: oa,
              onSubmit: P,
              className: `flex flex-col gap-2`,
              children: [
                (0, J.jsx)(W, {
                  htmlFor: ia,
                  className: `text-sm font-medium`,
                  children: e(`com_ui_passkey_confirm_password`),
                }),
                (0, J.jsx)(Ye, {
                  id: ia,
                  ref: ee,
                  name: `password`,
                  autoComplete: `current-password`,
                  value: f,
                  onChange: (e) => p(e.target.value),
                  'aria-invalid': w != null,
                  'aria-describedby': w == null ? void 0 : aa,
                }),
                w != null &&
                  (0, J.jsx)(`p`, {
                    id: aa,
                    role: `alert`,
                    className: `text-text-destructive text-xs`,
                    children: e(w),
                  }),
                (0, J.jsxs)(Ze, {
                  className: `mt-2`,
                  children: [
                    (0, J.jsx)(at, {
                      asChild: !0,
                      children: (0, J.jsx)(B, {
                        type: `button`,
                        variant: `outline`,
                        children: e(`com_ui_cancel`),
                      }),
                    }),
                    (0, J.jsxs)(B, {
                      type: `submit`,
                      variant: `submit`,
                      disabled: C || f === ``,
                      children: [C && (0, J.jsx)(L, { className: `h-4 w-4` }), e(`com_ui_confirm`)],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
var la = q.memo(ca);
function ua({ endpoint: e, endpointsConfig: t }) {
  let n = H(),
    [r, i] = (0, q.useState)(!1),
    { getExpiry: a, checkExpiry: o } = Vt(e),
    s = ft(t, e, `type`),
    { provider: c, imageURL: l } = Ge({ endpoint: e, endpointsConfig: t }),
    u = (0, q.useMemo)(() => en[e] || e, [e]),
    d = a(),
    f = !!d && o(),
    p = kt(),
    m = (0, q.useMemo)(
      () =>
        d
          ? d === `never`
            ? n(`com_endpoint_config_key_never_expires`)
            : er(n, d, p)
          : n(`com_ui_provider_api_keys_not_set`),
      [d, n, p],
    );
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3 py-2`,
        children: [
          (0, J.jsxs)(`div`, {
            className: `flex min-w-0 items-center gap-3`,
            children: [
              (0, J.jsx)(`div`, {
                className: `flex shrink-0 items-center justify-center`,
                'aria-hidden': `true`,
                children: (0, J.jsx)(vr, {
                  provider: c,
                  imageURL: l,
                  size: 20,
                  className: `icon-md shrink-0`,
                }),
              }),
              (0, J.jsxs)(`div`, {
                className: `min-w-0`,
                children: [
                  (0, J.jsx)(`div`, {
                    className: `truncate font-medium text-text-primary`,
                    children: u,
                  }),
                  (0, J.jsx)(`div`, {
                    className: `truncate text-xs text-text-secondary`,
                    children: m,
                  }),
                ],
              }),
            ],
          }),
          (0, J.jsx)(B, {
            variant: `outline`,
            onClick: () => i(!0),
            children: n(f ? `com_ui_update` : `com_endpoint_config_key`),
          }),
        ],
      }),
      r &&
        (0, J.jsx)(nr, {
          open: r,
          onOpenChange: i,
          endpoint: e,
          endpointType: s,
          userProvideURL: ft(t, e, `userProvideURL`),
          userProvideAccessKeyId: ft(t, e, `userProvideAccessKeyId`),
          userProvideSecretAccessKey: ft(t, e, `userProvideSecretAccessKey`),
          userProvideSessionToken: ft(t, e, `userProvideSessionToken`),
          userProvideBearerToken: ft(t, e, `userProvideBearerToken`),
        }),
    ],
  });
}
function da() {
  let e = H(),
    [t, n] = (0, q.useState)(!1),
    r = (0, q.useRef)(null),
    { data: i } = $e(),
    a = Sr();
  return (0, J.jsxs)(`div`, {
    className: `flex items-center justify-between`,
    children: [
      (0, J.jsx)(W, {
        id: `provider-api-keys-label`,
        children: e(`com_ui_settings_label_provider_api_keys`),
      }),
      (0, J.jsxs)(G, {
        open: t,
        onOpenChange: n,
        children: [
          (0, J.jsx)(R, {
            asChild: !0,
            children: (0, J.jsx)(B, {
              variant: `outline`,
              'aria-labelledby': `provider-api-keys-label`,
              children: e(`com_ui_manage`),
            }),
          }),
          (0, J.jsxs)(ke, {
            focusOutline: `hidden`,
            ref: r,
            tabIndex: -1,
            onOpenAutoFocus: (e) => {
              (e.preventDefault(), r.current?.focus());
            },
            className: `bg-surface-dialog text-text-primary focus-visible:ring-text-primary w-11/12 max-w-2xl shadow-2xl focus-visible:ring-2 focus-visible:ring-inset`,
            'aria-describedby': void 0,
            children: [
              (0, J.jsx)(an, {
                className: `space-y-0 pr-8 text-left`,
                children: (0, J.jsxs)(`div`, {
                  className: `flex items-center gap-1.5`,
                  children: [
                    (0, J.jsx)(Ke, { children: e(`com_ui_settings_label_provider_api_keys`) }),
                    (0, J.jsx)(V, { text: e(`com_ui_provider_api_keys_description`) }),
                  ],
                }),
              }),
              i &&
                (0, J.jsx)(`div`, {
                  className: `divide-border-light divide-y`,
                  children: a.map((e) => (0, J.jsx)(ua, { endpoint: e, endpointsConfig: i }, e)),
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
var fa = e(A(), 1),
  pa = [`.jpeg`, `.jpg`, `.png`],
  ma = new Set([`image/jpeg`, `image/png`]),
  ha = 2,
  ga = (e) => (e == null ? ha : Number((e / 1048576).toFixed(2))),
  _a = (e) => {
    let t = e.name.toLowerCase(),
      n = pa.some((e) => t.endsWith(e)),
      r = e.type === `` || ma.has(e.type.toLowerCase());
    return n && r;
  };
function va() {
  let e = j(I.user),
    [t, n] = (0, q.useState)(1),
    [r, i] = (0, q.useState)(0),
    [a, s] = (0, q.useState)({ x: 0.5, y: 0.5 }),
    [c, l] = (0, q.useState)(!1),
    d = (0, q.useRef)(null),
    f = (0, q.useRef)(null),
    [p, m] = (0, q.useState)(null),
    [h, g] = (0, q.useState)(!1),
    { data: _ = vn } = ct({ select: (e) => Pn(e) }),
    v = H(),
    { showToast: y } = z(),
    b = ga(_.avatarSizeLimit),
    { mutate: x, isLoading: S } = Gt({
      onSuccess: (t) => {
        (y({ message: v(`com_ui_upload_success`) }), e((e) => ({ ...e, avatar: t.url })));
      },
      onError: (e) => {
        (console.error(`Error:`, e), y({ message: v(`com_ui_upload_error`), status: `error` }));
      },
    }),
    C = (e) => {
      let t = e.target.files?.[0];
      E(t);
    },
    E = (0, q.useCallback)(
      (e) => {
        let t = e != null && (_.avatarSizeLimit == null || e.size <= _.avatarSizeLimit);
        e && _a(e) && t
          ? (m(e), n(1), i(0), s({ x: 0.5, y: 0.5 }))
          : y({ message: v(`com_ui_avatar_invalid_file`, { 0: b }), status: `error` });
      },
      [b, _.avatarSizeLimit, v, y],
    ),
    D = (e) => {
      n(e[0]);
    },
    O = () => {
      n((e) => Math.min(e + 0.2, 5));
    },
    A = () => {
      n((e) => Math.max(e - 0.2, 1));
    },
    M = () => {
      i((e) => (e + 90) % 360);
    },
    N = (e) => {
      s(e);
    },
    P = () => {
      d.current &&
        d.current.getImageScaledToCanvas().toBlob((e) => {
          if (e) {
            let t = new FormData();
            (t.append(`file`, e, `avatar.png`), t.append(`manual`, `true`), x(t));
          }
        }, `image/png`);
    },
    ne = (0, q.useCallback)(
      (e) => {
        e.preventDefault();
        let t = e.dataTransfer.files[0];
        E(t);
      },
      [E],
    ),
    re = (0, q.useCallback)((e) => {
      e.preventDefault();
    }, []),
    ie = (e) => {
      (e.preventDefault(), f.current?.click());
    },
    ae = (0, q.useCallback)(() => {
      (m(null), n(1), i(0), s({ x: 0.5, y: 0.5 }));
    }, []);
  return (0, J.jsxs)(G, {
    open: h,
    onOpenChange: (e) => {
      (g(e), e || ae());
    },
    children: [
      (0, J.jsxs)(`div`, {
        className: `flex flex-wrap items-center justify-between gap-2`,
        children: [
          (0, J.jsx)(`span`, { children: v(`com_nav_profile_picture`) }),
          (0, J.jsx)(R, {
            asChild: !0,
            children: (0, J.jsxs)(B, {
              variant: `outline`,
              children: [
                (0, J.jsx)(te, {
                  className: `mr-2 flex w-[1.375rem] items-center`,
                  'aria-hidden': `true`,
                }),
                (0, J.jsx)(`span`, { children: v(`com_nav_change_picture`) }),
              ],
            }),
          }),
        ],
      }),
      (0, J.jsxs)(ke, {
        className: `w-11/12 max-w-md`,
        children: [
          (0, J.jsx)(an, {
            children: (0, J.jsx)(Ke, {
              className: `text-lg leading-6 font-medium`,
              children: v(p == null ? `com_ui_upload_image` : `com_ui_preview`),
            }),
          }),
          (0, J.jsx)(`div`, {
            className: `flex min-w-0 flex-col items-center justify-center p-2`,
            children:
              p == null
                ? (0, J.jsxs)(`div`, {
                    className: `border-border-medium hover:border-border-heavy flex h-72 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed bg-transparent transition-colors`,
                    onDrop: ne,
                    onDragOver: re,
                    children: [
                      (0, J.jsx)(te, {
                        className: `text-text-tertiary mb-4 size-16`,
                        'aria-hidden': `true`,
                      }),
                      (0, J.jsx)(`p`, {
                        className: `text-text-primary mb-2 text-center text-sm font-medium`,
                        children: v(`com_ui_avatar_drop_image`),
                      }),
                      (0, J.jsx)(`p`, {
                        className: `text-text-secondary mb-4 text-center text-xs`,
                        children: v(`com_ui_avatar_file_requirements`, { 0: b }),
                      }),
                      (0, J.jsx)(B, {
                        type: `button`,
                        variant: `secondary`,
                        onClick: ie,
                        children: v(`com_ui_select_file`),
                      }),
                      (0, J.jsx)(`input`, {
                        ref: f,
                        type: `file`,
                        className: `hidden`,
                        accept: `.png, .jpg, .jpeg`,
                        onChange: C,
                        'aria-label': v(`com_ui_file_input_avatar_label`),
                      }),
                    ],
                  })
                : (0, J.jsxs)(J.Fragment, {
                    children: [
                      (0, J.jsxs)(`div`, {
                        className: F(
                          `ring-border-light relative w-full max-w-[17.5rem] overflow-hidden rounded-full ring-4 transition-all`,
                          c && `ring-ring-primary cursor-move`,
                        ),
                        onMouseDown: () => l(!0),
                        onMouseUp: () => l(!1),
                        onMouseLeave: () => l(!1),
                        children: [
                          (0, J.jsx)(fa.default, {
                            ref: d,
                            image: p,
                            width: 280,
                            height: 280,
                            border: 0,
                            borderRadius: 140,
                            color: [255, 255, 255, 0.6],
                            scale: t,
                            rotate: r,
                            position: a,
                            onPositionChange: N,
                            className: `aspect-square h-auto! w-full! cursor-move`,
                          }),
                          !c &&
                            (0, J.jsx)(`div`, {
                              className: `pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100`,
                              children: (0, J.jsx)(`div`, {
                                className: `bg-surface-media-overlay/50 rounded-full p-2`,
                                children: (0, J.jsx)(ee, {
                                  className: `text-text-on-media h-6 w-6`,
                                  'aria-hidden': `true`,
                                }),
                              }),
                            }),
                        ],
                      }),
                      (0, J.jsxs)(`div`, {
                        className: `mt-6 w-full space-y-6`,
                        children: [
                          (0, J.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [
                              (0, J.jsxs)(`div`, {
                                className: `flex items-center justify-between`,
                                children: [
                                  (0, J.jsx)(W, {
                                    htmlFor: `zoom-slider`,
                                    className: `text-sm font-medium`,
                                    children: v(`com_ui_zoom`),
                                  }),
                                  (0, J.jsxs)(`span`, {
                                    className: `text-text-secondary text-sm`,
                                    children: [Math.round(t * 100), `%`],
                                  }),
                                ],
                              }),
                              (0, J.jsxs)(`div`, {
                                className: `flex items-center space-x-3`,
                                children: [
                                  (0, J.jsx)(B, {
                                    type: `button`,
                                    variant: `outline`,
                                    size: `sm`,
                                    onClick: A,
                                    disabled: t <= 1,
                                    'aria-label': v(`com_ui_zoom_out`),
                                    className: `shrink-0`,
                                    children: (0, J.jsx)(w, {
                                      className: `h-4 w-4`,
                                      'aria-hidden': `true`,
                                    }),
                                  }),
                                  (0, J.jsx)(ot, {
                                    id: `zoom-slider`,
                                    value: [t],
                                    min: 1,
                                    max: 5,
                                    step: 0.1,
                                    onValueChange: D,
                                    className: `flex-1`,
                                    'aria-label': v(`com_ui_zoom_level`),
                                  }),
                                  (0, J.jsx)(B, {
                                    type: `button`,
                                    variant: `outline`,
                                    size: `sm`,
                                    onClick: O,
                                    disabled: t >= 5,
                                    'aria-label': v(`com_ui_zoom_in`),
                                    className: `shrink-0`,
                                    children: (0, J.jsx)(u, {
                                      className: `h-4 w-4`,
                                      'aria-hidden': `true`,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, J.jsxs)(`div`, {
                            className: `flex flex-wrap items-center justify-center gap-3`,
                            children: [
                              (0, J.jsxs)(B, {
                                type: `button`,
                                variant: `outline`,
                                onClick: M,
                                className: `flex items-center space-x-2`,
                                'aria-label': v(`com_ui_rotate_90`),
                                children: [
                                  (0, J.jsx)(T, { className: `h-4 w-4`, 'aria-hidden': `true` }),
                                  (0, J.jsx)(`span`, {
                                    className: `text-sm`,
                                    children: v(`com_ui_rotate`),
                                  }),
                                ],
                              }),
                              (0, J.jsxs)(B, {
                                type: `button`,
                                variant: `outline`,
                                onClick: () => {
                                  (n(1), i(0), s({ x: 0.5, y: 0.5 }));
                                },
                                className: `flex items-center space-x-2`,
                                'aria-label': v(`com_ui_reset_adjustments`),
                                children: [
                                  (0, J.jsx)(o, { className: `h-4 w-4`, 'aria-hidden': `true` }),
                                  (0, J.jsx)(`span`, {
                                    className: `text-sm`,
                                    children: v(`com_ui_reset`),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, J.jsx)(`p`, {
                            className: `text-text-tertiary text-center text-xs`,
                            children: v(`com_ui_editor_instructions`),
                          }),
                        ],
                      }),
                      (0, J.jsxs)(`div`, {
                        className: `mt-6 flex w-full flex-wrap gap-3`,
                        children: [
                          (0, J.jsx)(B, {
                            type: `button`,
                            variant: `outline`,
                            className: `flex-1`,
                            onClick: ae,
                            disabled: S,
                            children: v(`com_ui_cancel`),
                          }),
                          (0, J.jsxs)(B, {
                            variant: `submit`,
                            type: `button`,
                            className: F(`flex-1`, S ? `cursor-not-allowed opacity-90` : ``),
                            onClick: P,
                            disabled: S,
                            children: [
                              S
                                ? (0, J.jsx)(L, { className: `icon-sm mr-2` })
                                : (0, J.jsx)(k, {
                                    className: `mr-2 h-4 w-4`,
                                    'aria-hidden': `true`,
                                  }),
                              v(`com_ui_upload`),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
          }),
        ],
      }),
    ],
  });
}
var ya = {
  offline: { label: `com_ui_code_environment_status_offline`, tone: `error` },
  starting: { label: `com_ui_code_environment_status_starting`, tone: `warning` },
  ready: { label: `com_ui_code_environment_status_ready`, tone: `success` },
};
function ba({ environmentId: e }) {
  let t = H(),
    n = Ue(e);
  if (n.isLoading)
    return (0, J.jsx)(jt, {
      tone: `neutral`,
      children: t(`com_ui_code_environment_status_checking`),
    });
  if (n.isError || n.data == null)
    return (0, J.jsx)(jt, {
      tone: `warning`,
      children: t(`com_ui_code_environment_status_unavailable`),
    });
  let r = ya[n.data.status];
  return (0, J.jsxs)(`div`, {
    className: `flex min-w-0 flex-col items-end gap-1`,
    children: [
      (0, J.jsx)(jt, { tone: r.tone, children: t(r.label) }),
      n.data.sandboxProfile != null &&
        (0, J.jsx)(`span`, {
          className: `max-w-48 truncate text-xs text-text-tertiary`,
          children: [n.data.sandboxProfile, ...(n.data.runtimes ?? [])].join(` · `),
        }),
    ],
  });
}
function xa({ pairing: e }) {
  let { showToast: t } = z(),
    n = H(),
    [r, i] = (0, q.useState)(`posix`),
    a = En(e, r, { allowWorkspaceWrites: !0, allowWorkspaceCommands: !0 });
  return (0, J.jsxs)(`div`, {
    className: `flex flex-col gap-2 rounded-lg border border-border-medium bg-surface-secondary p-3`,
    children: [
      (0, J.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3`,
        children: [
          (0, J.jsx)(`p`, {
            className: `text-sm font-medium text-text-primary`,
            children: n(`com_ui_code_environment_pairing_ready`),
          }),
          (0, J.jsxs)(me, {
            value: r,
            onValueChange: (e) => {
              _n(e) && i(e);
            },
            children: [
              (0, J.jsx)(Qe, {
                className: `w-auto min-w-36`,
                'aria-label': n(`com_ui_code_environment_shell`),
                children: (0, J.jsx)(Ne, {}),
              }),
              (0, J.jsxs)($t, {
                children: [
                  (0, J.jsx)(Je, {
                    value: `posix`,
                    children: n(`com_ui_code_environment_shell_posix`),
                  }),
                  (0, J.jsx)(Je, {
                    value: `powershell`,
                    children: n(`com_ui_code_environment_shell_powershell`),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, J.jsx)(`p`, {
        className: `text-xs text-text-secondary`,
        children: n(`com_ui_code_environment_pairing_description`),
      }),
      (0, J.jsx)(`pre`, {
        className: `overflow-x-auto whitespace-pre-wrap break-all rounded-md bg-surface-tertiary p-3 text-xs text-text-primary`,
        children: a,
      }),
      (0, J.jsx)(B, {
        type: `button`,
        variant: `outline`,
        size: `sm`,
        className: `self-start`,
        onClick: async () => {
          try {
            (await navigator.clipboard.writeText(a),
              t({ message: n(`com_ui_copied_to_clipboard`), status: `success` }));
          } catch {
            t({ message: n(`com_ui_copy_failed`), status: `error` });
          }
        },
        children: n(`com_ui_copy_to_clipboard`),
      }),
    ],
  });
}
var Sa = {
  allow: `com_ui_code_environment_permission_allow`,
  ask: `com_ui_code_environment_permission_ask`,
  deny: `com_ui_code_environment_permission_deny`,
};
function Ca(e, t) {
  return t != null && e.allowed.includes(t) ? t : e.default;
}
function wa({ environment: e }) {
  let t = H(),
    { showToast: n } = z(),
    r = pe(),
    i = e.configSchema?.permissions;
  if (i == null || !e.canEdit) return null;
  let a = (i, a) => {
      r.mutate(
        { id: e.id, settings: { permissions: { [i]: a } } },
        {
          onSuccess: () =>
            n({ message: t(`com_ui_code_environment_permissions_saved`), status: `success` }),
          onError: () =>
            n({ message: t(`com_ui_code_environment_permissions_error`), status: `error` }),
        },
      );
    },
    o = [
      { category: `fileWrite`, label: `com_ui_code_environment_file_write`, field: i.fileWrite },
      {
        category: `commandExecution`,
        label: `com_ui_code_environment_command_execution`,
        field: i.commandExecution,
      },
    ].filter((e) => e.field != null);
  return (0, J.jsx)(`div`, {
    className: `mt-3 grid gap-3 border-t border-border-light pt-3 sm:grid-cols-2`,
    children: o.map(({ category: n, label: i, field: o }) => {
      if (o == null) return null;
      let s = Ca(o, e.settings?.permissions?.[n]);
      return (0, J.jsxs)(
        `div`,
        {
          className: `flex flex-col gap-1.5`,
          children: [
            (0, J.jsx)(W, { htmlFor: `${e.id}-${n}`, children: t(i) }),
            (0, J.jsxs)(me, {
              value: s,
              disabled: r.isLoading,
              onValueChange: (e) => a(n, e),
              children: [
                (0, J.jsx)(Qe, { id: `${e.id}-${n}`, children: (0, J.jsx)(Ne, {}) }),
                (0, J.jsx)($t, {
                  children: o.allowed.map((e) =>
                    (0, J.jsx)(Je, { value: e, children: t(Sa[e]) }, e),
                  ),
                }),
              ],
            }),
          ],
        },
        n,
      );
    }),
  });
}
function Ta() {
  let e = H(),
    { showToast: t } = z(),
    n = xn(),
    r = xt(),
    i = _t(),
    [a, o] = (0, q.useState)(``),
    [s, c] = (0, q.useState)(``),
    [l, u] = (0, q.useState)(),
    d = n.data?.controlPlanes ?? [],
    f = s || d[0]?.id || ``;
  (0, q.useEffect)(() => {
    if (l == null) return;
    let e = Date.parse(l.expiresAt) - Date.now(),
      t = Number.isFinite(e) ? Math.max(0, e) : 0,
      n = window.setTimeout(() => u(void 0), t);
    return () => window.clearTimeout(n);
  }, [l]);
  let p = () => {
      let n = a.trim();
      !n ||
        !f ||
        r.mutate(
          { name: n, controlPlaneId: f },
          {
            onSuccess: (n) => {
              (o(``),
                u(n.pairing),
                t({ message: e(`com_ui_code_environment_pairing_created`), status: `success` }));
            },
            onError: () =>
              t({ message: e(`com_ui_code_environment_pairing_error`), status: `error` }),
          },
        );
    },
    m = (0, J.jsx)(`p`, {
      className: `text-sm text-text-secondary`,
      children: e(`com_ui_code_environment_unavailable`),
    });
  return (
    n.isLoading
      ? (m = (0, J.jsxs)(`div`, {
          className: `flex items-center gap-2 text-sm text-text-secondary`,
          children: [(0, J.jsx)(L, {}), e(`com_ui_loading`)],
        }))
      : n.isError
        ? (m = (0, J.jsx)(`p`, {
            className: `text-sm text-text-destructive`,
            children: e(`com_ui_code_environment_load_error`),
          }))
        : d.length > 0 &&
          (m = (0, J.jsxs)(`div`, {
            className: `grid gap-2 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]`,
            children: [
              (0, J.jsx)(Dn, {
                id: `code-environment-name`,
                value: a,
                maxLength: 100,
                placeholder: e(`com_ui_code_environment_name_placeholder`),
                onChange: (e) => o(e.target.value),
              }),
              (0, J.jsxs)(me, {
                value: f,
                onValueChange: c,
                children: [
                  (0, J.jsx)(Qe, {
                    'aria-label': e(`com_ui_code_environment_control_plane`),
                    children: (0, J.jsx)(Ne, {}),
                  }),
                  (0, J.jsx)($t, {
                    children: d.map((e) => (0, J.jsx)(Je, { value: e.id, children: e.name }, e.id)),
                  }),
                ],
              }),
              (0, J.jsx)(B, {
                type: `button`,
                disabled: !a.trim() || r.isLoading,
                onClick: p,
                children: r.isLoading ? (0, J.jsx)(L, {}) : e(`com_ui_code_environment_pair`),
              }),
            ],
          })),
    (0, J.jsxs)(`div`, {
      className: `flex w-full flex-col gap-4`,
      children: [
        (0, J.jsxs)(`div`, {
          children: [
            (0, J.jsx)(W, {
              htmlFor: `code-environment-name`,
              children: e(`com_ui_code_environments`),
            }),
            (0, J.jsx)(`p`, {
              className: `mt-1 text-xs text-text-secondary`,
              children: e(`com_ui_code_environments_description`),
            }),
          ],
        }),
        m,
        l != null && (0, J.jsx)(xa, { pairing: l }),
        (0, J.jsx)(`div`, {
          className: `flex flex-col gap-2`,
          children: (n.data?.environments ?? []).map((n) =>
            (0, J.jsxs)(
              `div`,
              {
                className: `rounded-lg border border-border-medium p-3`,
                children: [
                  (0, J.jsxs)(`div`, {
                    className: `flex items-center justify-between gap-3`,
                    children: [
                      (0, J.jsxs)(`div`, {
                        className: `min-w-0`,
                        children: [
                          (0, J.jsx)(`p`, {
                            className: `truncate text-sm font-medium text-text-primary`,
                            children: n.name,
                          }),
                          (0, J.jsx)(`p`, {
                            className: `truncate text-xs text-text-secondary`,
                            children: n.id,
                          }),
                        ],
                      }),
                      (0, J.jsxs)(`div`, {
                        className: `flex shrink-0 items-center gap-2`,
                        children: [
                          (0, J.jsx)(ba, { environmentId: n.id }),
                          n.canDelete &&
                            (0, J.jsxs)(G, {
                              children: [
                                (0, J.jsx)(R, {
                                  asChild: !0,
                                  children: (0, J.jsx)(B, {
                                    type: `button`,
                                    variant: `outline`,
                                    size: `sm`,
                                    children: e(`com_ui_delete`),
                                  }),
                                }),
                                (0, J.jsx)(un, {
                                  showCloseButton: !1,
                                  title: e(`com_ui_code_environment_remove_title`),
                                  main: (0, J.jsx)(`p`, {
                                    className: `text-sm text-text-secondary`,
                                    children: e(`com_ui_code_environment_remove_description`),
                                  }),
                                  selection: {
                                    selectHandler: () =>
                                      i.mutate(n.id, {
                                        onSuccess: () =>
                                          t({
                                            message: e(`com_ui_code_environment_removed`),
                                            status: `success`,
                                          }),
                                        onError: () =>
                                          t({
                                            message: e(`com_ui_code_environment_remove_error`),
                                            status: `error`,
                                          }),
                                      }),
                                    selectClasses: `bg-surface-destructive text-text-on-status transition-all duration-200 hover:bg-surface-destructive-hover`,
                                    selectText: e(`com_ui_delete`),
                                  },
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, J.jsx)(wa, { environment: n }),
                ],
              },
              n.id,
            ),
          ),
        }),
      ],
    })
  );
}
var Ea = e(N(), 1),
  Da = `—`;
function Oa(e) {
  if (!e) return Da;
  let t = new Date(e);
  return Number.isNaN(t.getTime())
    ? e
    : t
        .toISOString()
        .replace(`T`, ` `)
        .replace(/\.\d{3}Z$/, ` UTC`);
}
function ka(e, t) {
  return [
    `LibreChat version: ${e}`,
    `Commit: ${t?.commit ?? Da}`,
    `Branch: ${t?.branch ?? Da}`,
    `Build date: ${Oa(t?.buildDate)}`,
    `User agent: ${typeof navigator < `u` ? navigator.userAgent : Da}`,
  ].join(`
`);
}
function Aa({ label: e, value: t }) {
  return (0, J.jsxs)(`div`, {
    className: `flex items-center justify-between gap-4 py-2.5 first:pt-0 last:pb-0`,
    children: [
      (0, J.jsx)(`dt`, { className: `text-text-secondary`, children: e }),
      (0, J.jsx)(`dd`, {
        className: `break-all text-right font-mono text-xs text-text-primary`,
        children: t,
      }),
    ],
  });
}
function ja() {
  let e = H(),
    { data: t } = Pt(),
    [n, r] = (0, q.useState)(!1),
    i = (0, q.useRef)(null),
    a = t?.buildInfo,
    o = Sn.VERSION,
    s = (0, q.useMemo)(() => ka(o, a), [o, a]);
  (0, q.useEffect)(
    () => () => {
      i.current && clearTimeout(i.current);
    },
    [],
  );
  let c = (0, q.useCallback)(() => {
    (0, Ea.default)(s, { format: `text/plain` }) &&
      (r(!0), i.current && clearTimeout(i.current), (i.current = setTimeout(() => r(!1), 2e3)));
  }, [s]);
  return (0, J.jsxs)(`div`, {
    className: `flex flex-col text-sm text-text-primary`,
    children: [
      (0, J.jsxs)(`dl`, {
        className: `flex flex-col divide-y divide-border-light`,
        children: [
          (0, J.jsx)(Aa, { label: e(`com_nav_about_version`), value: o }),
          (0, J.jsx)(Aa, { label: e(`com_nav_about_commit`), value: a?.commitShort ?? Da }),
          (0, J.jsx)(Aa, { label: e(`com_nav_about_branch`), value: a?.branch ?? Da }),
          (0, J.jsx)(Aa, { label: e(`com_nav_about_build_date`), value: Oa(a?.buildDate) }),
        ],
      }),
      (0, J.jsxs)(`div`, {
        className: `mt-4 flex flex-col items-start gap-3 border-t border-border-light pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4`,
        children: [
          (0, J.jsx)(`p`, {
            className: `min-w-0 flex-1 text-xs text-text-secondary`,
            children: e(`com_nav_about_diagnostics_description`),
          }),
          (0, J.jsx)(gt, {
            isCopied: n,
            onClick: c,
            label: e(`com_nav_about_diagnostics_copy`),
            className: `ml-0 shrink-0 gap-2 self-start rounded-lg border border-border-light bg-surface-secondary px-3 py-1.5 text-xs font-medium text-text-primary hover:bg-surface-tertiary sm:self-auto`,
          }),
          (0, J.jsx)(`span`, {
            className: `sr-only`,
            role: `status`,
            'aria-live': `polite`,
            'aria-atomic': `true`,
            children: n ? e(`com_ui_copied`) : ``,
          }),
        ],
      }),
    ],
  });
}
var Ma = (0, q.memo)(ja),
  Na = [
    { value: `7`, labelKey: `com_ui_api_key_expire_7d` },
    { value: `30`, labelKey: `com_ui_api_key_expire_30d` },
    { value: `90`, labelKey: `com_ui_api_key_expire_90d` },
    { value: `365`, labelKey: `com_ui_api_key_expire_1y` },
    { value: `never`, labelKey: `com_ui_api_key_expire_never` },
  ],
  Pa = 864e5,
  Fa = 14;
function Ia(e) {
  if (e === `never`) return null;
  let t = Number(e);
  return !Number.isFinite(t) || t <= 0 ? null : new Date(Date.now() + t * Pa).toISOString();
}
function La(e) {
  let t = new Date(e);
  return isNaN(t.getTime())
    ? ``
    : t.toLocaleDateString(void 0, { year: `numeric`, month: `short`, day: `numeric` });
}
function Ra(e) {
  let t = new Date(e);
  return isNaN(t.getTime()) ? `` : rr(t, { addSuffix: !0 });
}
function za(e, t = new Date()) {
  if (!e) return null;
  let n = new Date(e).getTime() - t.getTime();
  if (n <= 0) return { state: `expired` };
  let r = Math.ceil(n / Pa);
  return r <= Fa ? { state: `expiring`, days: r } : null;
}
function Ba({ onCreated: e, onCancel: t }) {
  let n = H(),
    { showToast: r } = z(),
    [i, a] = (0, q.useState)(``),
    [o, s] = (0, q.useState)(!1),
    [c, l] = (0, q.useState)(`30`),
    u = (0, q.useRef)(null),
    d = At(),
    f = Ia(c);
  return (0, J.jsxs)(`form`, {
    onSubmit: async (t) => {
      if ((t.preventDefault(), !d.isLoading)) {
        if (!i.trim()) {
          (s(!0), u.current?.focus());
          return;
        }
        try {
          e(await d.mutateAsync({ name: i.trim(), expiresAt: Ia(c) }));
        } catch {
          r({ message: n(`com_ui_api_key_create_error`), status: `error` });
        }
      }
    },
    className: `space-y-5`,
    children: [
      (0, J.jsxs)(`div`, {
        className: `space-y-2`,
        children: [
          (0, J.jsx)(W, { htmlFor: `api-key-name`, children: n(`com_ui_api_key_name`) }),
          (0, J.jsx)(Dn, {
            id: `api-key-name`,
            ref: u,
            value: i,
            maxLength: 100,
            'aria-invalid': o,
            'aria-describedby': o ? `api-key-name-error` : void 0,
            onChange: (e) => {
              (a(e.target.value), o && s(!1));
            },
            placeholder: n(`com_ui_api_key_name_placeholder`),
          }),
          o &&
            (0, J.jsx)(`p`, {
              id: `api-key-name-error`,
              role: `alert`,
              className: `text-xs text-text-destructive`,
              children: n(`com_ui_api_key_name_required`),
            }),
        ],
      }),
      (0, J.jsxs)(`div`, {
        className: `space-y-2`,
        children: [
          (0, J.jsx)(W, { id: `api-key-expiry-label`, children: n(`com_ui_api_key_expiration`) }),
          (0, J.jsx)(Fn, {
            fullWidth: !0,
            value: c,
            onChange: l,
            'aria-labelledby': `api-key-expiry-label`,
            options: Na.map(({ value: e, labelKey: t }) => ({ value: e, label: n(t) })),
          }),
          (0, J.jsx)(`p`, {
            className: `text-xs text-text-secondary`,
            children:
              f == null
                ? n(`com_ui_api_key_no_expiration`)
                : n(`com_ui_api_key_expires_on`, { 0: La(f) }),
          }),
        ],
      }),
      (0, J.jsxs)(`div`, {
        className: `flex justify-end gap-2`,
        children: [
          (0, J.jsx)(B, {
            type: `button`,
            variant: `outline`,
            onClick: t,
            disabled: d.isLoading,
            children: n(`com_ui_cancel`),
          }),
          (0, J.jsx)(B, {
            type: `submit`,
            variant: `submit`,
            disabled: d.isLoading || !i.trim(),
            'aria-busy': d.isLoading,
            'aria-label': n(`com_ui_create`),
            children: d.isLoading ? (0, J.jsx)(L, { className: `h-4 w-4` }) : n(`com_ui_create`),
          }),
        ],
      }),
    ],
  });
}
function Va({ createdKey: e, onDone: t }) {
  let n = H(),
    [r, i] = (0, q.useState)(!1),
    a = ze({ text: e.key });
  return (0, J.jsxs)(`div`, {
    className: `min-w-0 space-y-4`,
    children: [
      (0, J.jsxs)(`div`, {
        className: `flex gap-2.5 rounded-lg border border-status-warning-border bg-status-warning-subtle p-3`,
        children: [
          (0, J.jsx)(h, {
            className: `mt-0.5 h-4 w-4 shrink-0 text-text-warning`,
            'aria-hidden': `true`,
          }),
          (0, J.jsx)(`p`, {
            className: `text-sm text-text-warning`,
            children: n(`com_ui_api_key_warning`),
          }),
        ],
      }),
      (0, J.jsxs)(`div`, {
        className: `space-y-2`,
        children: [
          (0, J.jsx)(W, { htmlFor: `reveal-api-key`, children: n(`com_ui_your_api_key`) }),
          (0, J.jsx)(Ye, {
            id: `reveal-api-key`,
            readOnly: !0,
            value: e.key,
            className: `font-mono`,
            'aria-label': n(`com_ui_your_api_key`),
            copyButton: (0, J.jsx)(gt, { iconOnly: !0, isCopied: r, onClick: () => a(i) }),
          }),
        ],
      }),
      (0, J.jsx)(`div`, {
        className: `flex justify-end`,
        children: (0, J.jsx)(B, { onClick: t, children: n(`com_ui_done`) }),
      }),
    ],
  });
}
function Ha({ open: e, onOpenChange: t }) {
  let n = H(),
    [r, i] = (0, q.useState)(null),
    [a, o] = (0, q.useState)(e);
  return (
    e !== a && (o(e), e && i(null)),
    (0, J.jsx)(G, {
      open: e,
      onOpenChange: t,
      children: (0, J.jsxs)(ke, {
        showCloseButton: !1,
        className: `w-11/12 max-w-lg`,
        'aria-describedby': void 0,
        children: [
          (0, J.jsx)(an, {
            children: (0, J.jsx)(Ke, {
              children: n(r == null ? `com_ui_create_api_key` : `com_ui_api_key_created`),
            }),
          }),
          r == null
            ? (0, J.jsx)(Ba, { onCreated: i, onCancel: () => t(!1) })
            : (0, J.jsx)(Va, { createdKey: r, onDone: () => t(!1) }),
        ],
      }),
    })
  );
}
var Ua = [
  { permission: mt.USE, labelKey: `com_ui_remote_agents_allow_use` },
  { permission: mt.CREATE, labelKey: `com_ui_remote_agents_allow_create` },
  { permission: mt.SHARE, labelKey: `com_ui_remote_agents_allow_share` },
  { permission: mt.SHARE_PUBLIC, labelKey: `com_ui_remote_agents_allow_share_public` },
];
function Wa() {
  let e = H(),
    { showToast: t } = z(),
    n = dt({
      onSuccess: () => {
        t({ status: `success`, message: e(`com_ui_saved`) });
      },
      onError: () => {
        t({ status: `error`, message: e(`com_ui_error_save_admin_settings`) });
      },
    }),
    r = (0, J.jsxs)(B, {
      variant: `outline`,
      size: `sm`,
      className: `gap-1.5 text-text-secondary`,
      children: [
        (0, J.jsx)(S, { className: `h-4 w-4`, 'aria-hidden': `true` }),
        e(`com_ui_admin_panel`),
      ],
    });
  return (0, J.jsx)(xe, {
    permissionType: vt.REMOTE_AGENTS,
    sectionKey: `com_ui_remote_agents`,
    permissions: Ua,
    menuId: `remote-agents-role-dropdown`,
    mutation: n,
    trigger: r,
  });
}
function Ga({ id: e, name: t, keyPrefix: n, open: r, onOpenChange: i, triggerRef: a }) {
  let o = H(),
    { showToast: s } = z(),
    c = ln();
  return (0, J.jsx)(G, {
    open: r,
    onOpenChange: i,
    triggerRef: a,
    children: (0, J.jsx)(un, {
      showCloseButton: !1,
      title: o(`com_ui_delete_api_key`),
      className: `max-w-[28.125rem]`,
      main: (0, J.jsxs)(`div`, {
        className: `space-y-3 text-left`,
        children: [
          (0, J.jsx)(`p`, {
            className: `text-text-primary text-sm`,
            children: o(`com_ui_api_key_delete_confirm`, { 0: t }),
          }),
          (0, J.jsx)(`div`, {
            className: `border-border-light bg-surface-secondary flex items-center rounded-lg border px-3 py-2`,
            children: (0, J.jsxs)(`code`, {
              className: `text-text-secondary font-mono text-xs break-all`,
              children: [n, `…`],
            }),
          }),
          (0, J.jsx)(`p`, {
            className: `text-text-secondary text-sm`,
            children: o(`com_ui_api_key_delete_warning`),
          }),
        ],
      }),
      selection: {
        selectHandler: () => {
          c.mutate(e, {
            onSuccess: () => {
              (s({ message: o(`com_ui_api_key_deleted`), status: `success` }), i(!1));
            },
            onError: () => {
              s({ message: o(`com_ui_api_key_delete_error`), status: `error` });
            },
          });
        },
        selectClasses: `bg-surface-destructive text-text-on-status transition-all duration-200 hover:bg-surface-destructive-hover`,
        selectText: c.isLoading ? (0, J.jsx)(L, {}) : o(`com_ui_delete`),
      },
    }),
  });
}
function Ka({ apiKey: e }) {
  let t = H(),
    n = (0, q.useRef)(null),
    [r, i] = (0, q.useState)(!1),
    a = za(e.expiresAt);
  return (0, J.jsxs)(`li`, {
    className: `group flex items-start justify-between gap-3 px-4 py-3 transition-colors first:rounded-t-xl last:rounded-b-xl hover:bg-surface-secondary/50`,
    children: [
      (0, J.jsxs)(`div`, {
        className: `min-w-0 flex-1 space-y-1`,
        children: [
          (0, J.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, J.jsx)(`span`, {
                className: `truncate font-medium text-text-primary`,
                children: e.name,
              }),
              a?.state === `expired` &&
                (0, J.jsx)(`span`, {
                  className: `shrink-0 rounded-full border border-status-error-border bg-status-error-subtle px-2 py-0.5 text-xs font-medium text-status-error`,
                  children: t(`com_ui_api_key_expired`),
                }),
              a?.state === `expiring` &&
                (0, J.jsx)(`span`, {
                  className: `shrink-0 rounded-full border border-status-warning-border bg-status-warning-subtle px-2 py-0.5 text-xs font-medium text-status-warning`,
                  children:
                    a.days === 1
                      ? t(`com_ui_api_key_expires_in_day`)
                      : t(`com_ui_api_key_expires_in_days`, { 0: a.days }),
                }),
            ],
          }),
          (0, J.jsxs)(`div`, {
            className: `flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-text-secondary`,
            children: [
              (0, J.jsxs)(`code`, { className: `font-mono`, children: [e.keyPrefix, `…`] }),
              (0, J.jsx)(`span`, {
                'aria-hidden': `true`,
                className: `text-text-tertiary`,
                children: `·`,
              }),
              (0, J.jsx)(`span`, {
                children: e.lastUsedAt
                  ? t(`com_ui_api_key_last_used`, { 0: Ra(e.lastUsedAt) })
                  : t(`com_ui_api_key_never_used`),
              }),
              (0, J.jsx)(`span`, {
                'aria-hidden': `true`,
                className: `text-text-tertiary`,
                children: `·`,
              }),
              (0, J.jsx)(`span`, {
                children: e.expiresAt
                  ? t(`com_ui_api_key_expires_on`, { 0: La(e.expiresAt) })
                  : t(`com_ui_api_key_no_expiration`),
              }),
            ],
          }),
        ],
      }),
      (0, J.jsx)(B, {
        ref: n,
        variant: `destructive`,
        size: `icon`,
        onClick: () => i(!0),
        'aria-label': t(`com_ui_api_key_delete_name`, { 0: e.name }),
        'aria-haspopup': `dialog`,
        className: `size-8 shrink-0 self-center`,
        children: (0, J.jsx)(f, { className: `icon-sm`, 'aria-hidden': `true` }),
      }),
      (0, J.jsx)(Ga, {
        id: e.id,
        name: e.name,
        keyPrefix: e.keyPrefix,
        open: r,
        onOpenChange: i,
        triggerRef: n,
      }),
    ],
  });
}
function qa({ onCreate: e, headingId: t }) {
  let n = H(),
    { data: r, isLoading: i, isError: o, isFetching: s, refetch: c } = jn();
  if (i)
    return (0, J.jsx)(`div`, {
      'data-testid': `api-keys-loading`,
      className: `flex items-center justify-center rounded-xl border border-border-light py-12`,
      children: (0, J.jsx)(L, { className: `h-6 w-6 text-text-secondary` }),
    });
  if (o && r == null)
    return (0, J.jsxs)(`div`, {
      className: `flex flex-col items-center gap-3 rounded-xl border border-border-light px-6 py-10 text-center`,
      children: [
        (0, J.jsx)(`p`, {
          className: `text-sm text-text-secondary`,
          children: n(`com_ui_api_keys_load_error`),
        }),
        (0, J.jsx)(B, {
          variant: `outline`,
          size: `sm`,
          onClick: () => c(),
          disabled: s,
          children: n(`com_ui_retry`),
        }),
      ],
    });
  let u = r?.keys ?? [];
  return u.length === 0
    ? (0, J.jsxs)(`div`, {
        className: `flex flex-col items-center gap-3 rounded-xl border border-border-light px-6 py-12 text-center`,
        children: [
          (0, J.jsx)(`span`, {
            className: `flex h-12 w-12 items-center justify-center rounded-full bg-surface-secondary text-text-secondary`,
            children: (0, J.jsx)(a, { className: `h-5 w-5`, 'aria-hidden': `true` }),
          }),
          (0, J.jsxs)(`div`, {
            className: `space-y-1`,
            children: [
              (0, J.jsx)(`h3`, {
                className: `text-sm font-medium text-text-primary`,
                children: n(`com_ui_api_keys_empty_title`),
              }),
              (0, J.jsx)(`p`, {
                className: `mx-auto max-w-xs text-sm text-text-secondary`,
                children: n(`com_ui_api_keys_empty_text`),
              }),
            ],
          }),
          (0, J.jsxs)(B, {
            size: `sm`,
            className: `mt-1 gap-1.5`,
            onClick: e,
            children: [
              (0, J.jsx)(l, { className: `h-4 w-4`, 'aria-hidden': `true` }),
              n(`com_ui_create_api_key`),
            ],
          }),
        ],
      })
    : (0, J.jsx)(`ul`, {
        className: `divide-y divide-border-light overflow-hidden rounded-xl border border-border-light`,
        'aria-labelledby': t,
        'aria-label': t == null ? n(`com_ui_agent_api_keys`) : void 0,
        children: u.map((e) => (0, J.jsx)(Ka, { apiKey: e }, e.id)),
      });
}
function Ja() {
  let e = H(),
    [t, n] = (0, q.useState)(!1),
    [r, i] = (0, q.useState)(!1),
    a = (0, q.useRef)(null);
  return (0, J.jsxs)(`div`, {
    className: `flex items-center justify-between`,
    children: [
      (0, J.jsx)(W, { id: `agent-api-keys-label`, children: e(`com_ui_agent_api_keys`) }),
      (0, J.jsxs)(G, {
        open: t,
        onOpenChange: n,
        children: [
          (0, J.jsx)(R, {
            asChild: !0,
            children: (0, J.jsx)(B, {
              variant: `outline`,
              'aria-labelledby': `agent-api-keys-label`,
              children: e(`com_ui_manage`),
            }),
          }),
          (0, J.jsxs)(ke, {
            focusOutline: `hidden`,
            ref: a,
            tabIndex: -1,
            onOpenAutoFocus: (e) => {
              (e.preventDefault(), a.current?.focus());
            },
            className: `bg-surface-dialog text-text-primary w-11/12 max-w-2xl shadow-2xl`,
            'aria-describedby': void 0,
            children: [
              (0, J.jsx)(an, {
                className: `space-y-0 pr-8 text-left`,
                children: (0, J.jsxs)(`div`, {
                  className: `flex items-center gap-1.5`,
                  children: [
                    (0, J.jsx)(Ke, { children: e(`com_ui_agent_api_keys`) }),
                    (0, J.jsx)(V, { text: e(`com_ui_api_keys_description`) }),
                  ],
                }),
              }),
              (0, J.jsx)(qa, { onCreate: () => i(!0) }),
              (0, J.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, J.jsx)(Wa, {}),
                  (0, J.jsxs)(B, {
                    size: `sm`,
                    className: `ml-auto gap-1.5`,
                    onClick: () => i(!0),
                    children: [
                      (0, J.jsx)(l, { className: `h-4 w-4`, 'aria-hidden': `true` }),
                      e(`com_ui_create_api_key`),
                    ],
                  }),
                ],
              }),
              (0, J.jsx)(Ha, { open: r, onOpenChange: i }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ya() {
  let e = H(),
    { showToast: t } = z(),
    { data: n } = nt(),
    [r, i] = (0, q.useState)(!0),
    a = ir({
      onSuccess: () => t({ message: e(`com_ui_preferences_updated`), status: `success` }),
      onError: () => {
        (t({ message: e(`com_ui_error_updating_preferences`), status: `error` }), i((e) => !e));
      },
    });
  return (
    (0, q.useEffect)(() => {
      n?.personalization?.memories !== void 0 && i(n.personalization.memories);
    }, [n?.personalization?.memories]),
    (0, J.jsxs)(`div`, {
      className: `flex items-center justify-between`,
      children: [
        (0, J.jsxs)(`div`, {
          children: [
            (0, J.jsx)(`div`, {
              id: `reference-saved-memories-label`,
              children: e(`com_ui_reference_saved_memories`),
            }),
            (0, J.jsx)(`div`, {
              id: `reference-saved-memories-description`,
              className: `mt-1 text-xs text-text-secondary`,
              children: e(`com_ui_reference_saved_memories_description`),
            }),
          ],
        }),
        (0, J.jsx)(ht, {
          checked: r,
          onCheckedChange: (e) => {
            (i(e), a.mutate({ memories: e }));
          },
          disabled: a.isLoading,
          'aria-labelledby': `reference-saved-memories-label`,
          'aria-describedby': `reference-saved-memories-description`,
        }),
      ],
    })
  );
}
var { GENERAL: X, CHAT: Z, SPEECH: Q, DATA: $, ACCOUNT: Xa, ABOUT: Za } = K,
  Qa = [
    {
      id: `theme`,
      tab: X,
      section: `appearance`,
      labelKey: `com_nav_theme`,
      keywords: [
        `dark`,
        `light`,
        `appearance`,
        `color`,
        `contrast`,
        `high contrast`,
        `accessibility`,
      ],
      Component: hi,
    },
    {
      id: `language`,
      tab: X,
      section: `appearance`,
      labelKey: `com_nav_language`,
      keywords: [`locale`, `translation`],
      Component: gi,
    },
    {
      id: `fontSize`,
      tab: X,
      section: `appearance`,
      labelKey: `com_nav_font_size`,
      keywords: [`text`, `zoom`],
      Component: wi,
    },
    {
      id: `uiScale`,
      tab: X,
      section: `appearance`,
      labelKey: `com_nav_ui_scale`,
      keywords: [`zoom`, `scale`, `size`, `interface`, `display`],
      Component: Ci,
    },
    {
      id: `chatDirection`,
      tab: X,
      section: `appearance`,
      labelKey: `com_nav_chat_direction`,
      keywords: [`rtl`, `ltr`],
      Component: Li,
    },
    {
      id: `clockFormat`,
      tab: X,
      section: `appearance`,
      labelKey: `com_nav_clock_format`,
      keywords: [`time`, `12-hour`, `24-hour`, `am`, `pm`, `meridiem`],
      Component: ui,
    },
    {
      id: `weekStart`,
      tab: X,
      section: `appearance`,
      labelKey: `com_nav_week_start`,
      keywords: [`week`, `calendar`, `sunday`, `monday`],
      Component: fi,
    },
    {
      id: `maximizeChatSpace`,
      tab: X,
      section: `layout`,
      labelKey: `com_nav_maximize_chat_space`,
      Component: Y({
        stateAtom: I.maximizeChatSpace,
        localizationKey: `com_nav_maximize_chat_space`,
        switchId: `maximizeChatSpace`,
      }),
    },
    {
      id: `centerFormOnLanding`,
      tab: X,
      section: `layout`,
      labelKey: `com_nav_center_chat_input`,
      Component: Y({
        stateAtom: I.centerFormOnLanding,
        localizationKey: `com_nav_center_chat_input`,
        switchId: `centerFormOnLanding`,
      }),
    },
    {
      id: `showScrollButton`,
      tab: X,
      section: `layout`,
      labelKey: `com_nav_scroll_button`,
      Component: Y({
        stateAtom: I.showScrollButton,
        localizationKey: `com_nav_scroll_button`,
        switchId: `showScrollButton`,
      }),
    },
    {
      id: `mobileDrawerStrip`,
      tab: X,
      section: `layout`,
      labelKey: `com_nav_mobile_drawer_strip`,
      keywords: [`mobile`, `sidebar`, `drawer`, `swipe`],
      Component: Y({
        stateAtom: I.mobileDrawerStrip,
        localizationKey: `com_nav_mobile_drawer_strip`,
        hoverCardText: `com_nav_mobile_drawer_strip_info`,
        switchId: `mobileDrawerStrip`,
      }),
    },
    {
      id: `chatTitleInTab`,
      tab: X,
      section: `layout`,
      labelKey: `com_nav_chat_title_in_tab`,
      keywords: [`tab`, `title`, `browser`, `window`],
      Component: Ti,
    },
    {
      id: `unseenTabBadge`,
      tab: X,
      section: `notifications`,
      show: (e) => e.replyTabBadgeAllowed,
      labelKey: `com_nav_unseen_tab_badge`,
      Component: Y({
        stateAtom: mn,
        localizationKey: `com_nav_unseen_tab_badge`,
        switchId: `unseenTabBadge`,
        hoverCardText: `com_nav_info_unseen_tab_badge`,
      }),
    },
    {
      id: `replyNotifications`,
      tab: X,
      section: `notifications`,
      show: (e) => e.replyNotificationsAllowed,
      labelKey: `com_nav_reply_notifications`,
      Component: Y({
        stateAtom: Et,
        localizationKey: `com_nav_reply_notifications`,
        switchId: `replyNotifications`,
        hoverCardText: `com_nav_info_reply_notifications`,
        onCheckedChange: (e) => {
          e && Lt();
        },
      }),
    },
    {
      id: `replyNotificationSound`,
      tab: X,
      section: `notifications`,
      show: (e) => e.replyNotificationSoundAllowed,
      labelKey: `com_nav_reply_notification_sound`,
      Component: Y({
        stateAtom: Zt,
        localizationKey: `com_nav_reply_notification_sound`,
        switchId: `replyNotificationSound`,
        hoverCardText: `com_nav_info_reply_notification_sound`,
        onCheckedChange: (e) => {
          e && An();
        },
      }),
    },
    {
      id: `keepScreenAwake`,
      tab: X,
      section: `accessibility`,
      labelKey: `com_nav_keep_screen_awake`,
      Component: Y({
        stateAtom: I.keepScreenAwake,
        localizationKey: `com_nav_keep_screen_awake`,
        switchId: `keepScreenAwake`,
      }),
    },
    {
      id: `adminPanel`,
      tab: X,
      section: `admin`,
      labelKey: `com_ui_admin_panel`,
      keywords: [`admin`, `panel`, `dashboard`],
      Component: qi,
      show: (e) => e.adminPanelURL !== ``,
    },
    {
      id: `enterToSend`,
      tab: Z,
      section: `sending`,
      labelKey: `com_nav_enter_to_send`,
      keywords: [`return`, `newline`],
      Component: Y({
        stateAtom: I.enterToSend,
        localizationKey: `com_nav_enter_to_send`,
        switchId: `enterToSend`,
        hoverCardText: `com_nav_info_enter_to_send`,
      }),
    },
    {
      id: `duringRunDefaultAction`,
      tab: Z,
      section: `sending`,
      labelKey: `com_nav_during_run_action`,
      keywords: [`steer`, `queue`, `interrupt`, `generating`],
      Component: ki,
    },
    {
      id: `saveDrafts`,
      tab: Z,
      section: `sending`,
      labelKey: `com_nav_save_drafts`,
      Component: Y({
        stateAtom: I.saveDrafts,
        localizationKey: `com_nav_save_drafts`,
        switchId: `saveDrafts`,
        hoverCardText: `com_nav_info_save_draft`,
      }),
    },
    {
      id: `clientImageResize`,
      tab: Z,
      section: `sending`,
      labelKey: `com_nav_client_image_resize`,
      keywords: [`image`, `resize`, `compress`, `upload`, `attachment`, `photo`],
      Component: Zi,
    },
    {
      id: `pasteLongTextAsFile`,
      tab: Z,
      section: `sending`,
      labelKey: `com_nav_paste_long_text_as_file`,
      keywords: [`paste`, `clipboard`, `attachment`, `file`, `text`],
      Component: Y({
        stateAtom: I.pasteLongTextAsFile,
        localizationKey: `com_nav_paste_long_text_as_file`,
        switchId: `pasteLongTextAsFile`,
        hoverCardText: `com_nav_info_paste_long_text_as_file`,
      }),
    },
    {
      id: `saveBadgesState`,
      tab: Z,
      section: `sending`,
      labelKey: `com_nav_save_badges_state`,
      Component: Y({
        stateAtom: I.saveBadgesState,
        localizationKey: `com_nav_save_badges_state`,
        switchId: `showBadges`,
        hoverCardText: `com_nav_info_save_badges_state`,
      }),
    },
    {
      id: `atCommand`,
      tab: Z,
      section: `commands`,
      labelKey: `com_nav_at_command_description`,
      Component: Y({
        stateAtom: I.atCommand,
        localizationKey: `com_nav_at_command_description`,
        switchId: `atCommand`,
      }),
    },
    {
      id: `plusCommand`,
      tab: Z,
      section: `commands`,
      labelKey: `com_nav_plus_command_description`,
      show: (e) => e.hasMultiConvo,
      Component: Y({
        stateAtom: I.plusCommand,
        localizationKey: `com_nav_plus_command_description`,
        switchId: `plusCommand`,
      }),
    },
    {
      id: `slashCommand`,
      tab: Z,
      section: `commands`,
      labelKey: `com_nav_slash_command_description`,
      show: (e) => e.hasPrompts,
      Component: Y({
        stateAtom: I.slashCommand,
        localizationKey: `com_nav_slash_command_description`,
        switchId: `slashCommand`,
      }),
    },
    {
      id: `enableUserMsgMarkdown`,
      tab: Z,
      section: `messages`,
      labelKey: `com_nav_user_msg_markdown`,
      Component: Y({
        stateAtom: I.enableUserMsgMarkdown,
        localizationKey: `com_nav_user_msg_markdown`,
        switchId: `enableUserMsgMarkdown`,
      }),
    },
    {
      id: `collapseLongUserMessages`,
      tab: Z,
      section: `messages`,
      labelKey: `com_nav_collapse_user_messages`,
      keywords: [`collapse`, `expand`, `long`, `user`, `message`, `truncate`, `show`, `more`],
      Component: Y({
        stateAtom: I.collapseLongUserMessages,
        localizationKey: `com_nav_collapse_user_messages`,
        switchId: `collapseLongUserMessages`,
        hoverCardText: `com_nav_info_collapse_user_messages`,
      }),
    },
    {
      id: `usernameDisplay`,
      tab: Z,
      section: `messages`,
      labelKey: `com_nav_user_name_display`,
      keywords: [`username`, `name`],
      Component: Zr,
    },
    {
      id: `latexParsing`,
      tab: Z,
      section: `messages`,
      labelKey: `com_nav_latex_parsing`,
      Component: Y({
        stateAtom: I.LaTeXParsing,
        localizationKey: `com_nav_latex_parsing`,
        switchId: `latexParsing`,
        hoverCardText: `com_nav_info_latex_parsing`,
      }),
    },
    {
      id: `showThinking`,
      tab: Z,
      section: `messages`,
      labelKey: `com_nav_show_thinking`,
      Component: Y({
        stateAtom: Wt,
        localizationKey: `com_nav_show_thinking`,
        switchId: `showThinking`,
      }),
    },
    {
      id: `smoothStreaming`,
      tab: Z,
      section: `messages`,
      labelKey: `com_nav_smooth_streaming`,
      keywords: [`smooth`, `streaming`, `fade`, `animation`, `animate`],
      Component: Y({
        stateAtom: sn,
        localizationKey: `com_nav_smooth_streaming`,
        switchId: `smoothStreaming`,
        hoverCardText: `com_nav_info_smooth_streaming`,
      }),
    },
    {
      id: `copyRichText`,
      tab: Z,
      section: `messages`,
      labelKey: `com_nav_copy_rich_text`,
      keywords: [`copy`, `clipboard`, `rich`, `html`, `format`, `markdown`, `paste`],
      Component: Y({
        stateAtom: I.copyRichText,
        localizationKey: `com_nav_copy_rich_text`,
        switchId: `copyRichText`,
        hoverCardText: `com_nav_info_copy_rich_text`,
      }),
    },
    {
      id: `autoExpandTools`,
      tab: Z,
      section: `messages`,
      labelKey: `com_nav_auto_expand_tools`,
      Component: Y({
        stateAtom: I.autoExpandTools,
        localizationKey: `com_nav_auto_expand_tools`,
        switchId: `autoExpandTools`,
      }),
    },
    {
      id: `newChatSwitchToHistory`,
      tab: Z,
      section: `conversations`,
      labelKey: `com_nav_new_chat_switch_to_history`,
      Component: Y({
        stateAtom: I.newChatSwitchToHistory,
        localizationKey: `com_nav_new_chat_switch_to_history`,
        switchId: `newChatSwitchToHistory`,
      }),
    },
    {
      id: `autoScroll`,
      tab: Z,
      section: `conversations`,
      labelKey: `com_nav_auto_scroll`,
      Component: Y({
        stateAtom: Me,
        localizationKey: `com_nav_auto_scroll`,
        switchId: `autoScroll`,
      }),
    },
    {
      id: `modularChat`,
      tab: Z,
      section: `conversations`,
      labelKey: `com_nav_modular_chat`,
      Component: Y({
        stateAtom: I.modularChat,
        localizationKey: `com_nav_modular_chat`,
        switchId: `modularChat`,
      }),
    },
    {
      id: `defaultTemporaryChat`,
      tab: Z,
      section: `conversations`,
      labelKey: `com_nav_default_temporary_chat`,
      Component: Y({
        stateAtom: I.defaultTemporaryChat,
        localizationKey: `com_nav_default_temporary_chat`,
        switchId: `defaultTemporaryChat`,
        hoverCardText: `com_nav_info_default_temporary_chat`,
      }),
    },
    {
      id: `forkSettings`,
      tab: Z,
      section: `conversations`,
      labelKey: `com_ui_fork_default`,
      keywords: [`fork`, `branch`, `split`],
      Component: Ii,
    },
    {
      id: `advancedPrompts`,
      tab: Z,
      section: `prompts`,
      labelKey: `com_nav_advanced_prompts`,
      keywords: [`prompt`],
      Component: Oi,
    },
    {
      id: `alwaysMakeProd`,
      tab: Z,
      section: `prompts`,
      labelKey: `com_nav_always_make_prod`,
      Component: Y({
        stateAtom: I.alwaysMakeProd,
        localizationKey: `com_nav_always_make_prod`,
        switchId: `alwaysMakeProd`,
      }),
    },
    {
      id: `autoSendPrompts`,
      tab: Z,
      section: `prompts`,
      labelKey: `com_nav_auto_send_prompts`,
      Component: Y({
        stateAtom: I.autoSendPrompts,
        localizationKey: `com_nav_auto_send_prompts`,
        switchId: `autoSendPrompts`,
        hoverCardText: `com_nav_auto_send_prompts_desc`,
      }),
    },
    {
      id: `speechToText`,
      tab: Q,
      section: `stt`,
      labelKey: `com_nav_speech_to_text`,
      Component: Kr,
    },
    {
      id: `engineSTT`,
      tab: Q,
      section: `stt`,
      labelKey: `com_ui_settings_label_engine_stt`,
      Component: vi,
    },
    {
      id: `languageSTT`,
      tab: Q,
      section: `stt`,
      labelKey: `com_ui_settings_label_language_stt`,
      Component: Xr,
    },
    {
      id: `autoTranscribeAudio`,
      tab: Q,
      section: `stt`,
      labelKey: `com_nav_auto_transcribe_audio`,
      Component: Yr,
    },
    {
      id: `decibelValue`,
      tab: Q,
      section: `stt`,
      labelKey: `com_ui_settings_label_decibel`,
      Component: Jr,
    },
    {
      id: `autoSendText`,
      tab: Q,
      section: `stt`,
      labelKey: `com_nav_auto_send_text`,
      Component: Gr,
    },
    {
      id: `textToSpeech`,
      tab: Q,
      section: `tts`,
      labelKey: `com_nav_text_to_speech`,
      Component: Lr,
    },
    {
      id: `engineTTS`,
      tab: Q,
      section: `tts`,
      labelKey: `com_ui_settings_label_engine_tts`,
      Component: yi,
    },
    { id: `voice`, tab: Q, section: `tts`, labelKey: `com_ui_settings_label_voice`, Component: Ur },
    {
      id: `conversationMode`,
      tab: Q,
      section: `tts`,
      labelKey: `com_ui_settings_label_conversation_mode`,
      Component: Qr,
    },
    {
      id: `automaticPlayback`,
      tab: Q,
      section: `tts`,
      labelKey: `com_nav_automatic_playback`,
      Component: Ir,
    },
    {
      id: `cloudBrowserVoices`,
      tab: Q,
      section: `tts`,
      labelKey: `com_nav_enable_cloud_browser_voice`,
      show: (e) => e.engineTTS === lt.browser,
      Component: Fr,
    },
    {
      id: `playbackRate`,
      tab: Q,
      section: `tts`,
      labelKey: `com_ui_settings_label_playback_rate`,
      Component: Wr,
    },
    { id: `cacheTTS`, tab: Q, section: `tts`, labelKey: `com_nav_enable_cache_tts`, Component: zr },
    {
      id: `referenceSavedMemories`,
      tab: $,
      section: `memory`,
      labelKey: `com_ui_reference_saved_memories`,
      keywords: [`memory`, `personalization`],
      show: (e) => e.hasMemoryOptOut,
      Component: Ya,
    },
    {
      id: `defaultStatefulWorkspace`,
      tab: $,
      section: `codeExecution`,
      labelKey: `com_ui_default_stateful_workspace`,
      keywords: [`agent`, `code`, `environment`, `sandbox`, `stateful`, `workspace`],
      show: (e) => e.hasStatefulCodeSessions,
      Component: Fi,
    },
    {
      id: `codeEnvironments`,
      tab: $,
      section: `codeExecution`,
      labelKey: `com_ui_code_environments`,
      keywords: [`bridge`, `cli`, `code`, `environment`, `sandbox`, `vm`, `worker`],
      show: (e) => e.hasStatefulCodeSessions,
      Component: Ta,
    },
    {
      id: `importConversations`,
      tab: $,
      section: `data`,
      labelKey: `com_ui_settings_label_import`,
      Component: di,
    },
    {
      id: `sharedLinks`,
      tab: $,
      section: `data`,
      labelKey: `com_ui_settings_label_shared_links`,
      Component: Yi,
    },
    {
      id: `manageFiles`,
      tab: $,
      section: `data`,
      labelKey: `com_ui_settings_label_manage_files`,
      keywords: [`file`, `files`, `upload`, `uploads`, `storage`, `attachments`],
      Component: zi,
    },
    {
      id: `archiveAllChats`,
      tab: $,
      section: `data`,
      labelKey: `com_ui_settings_label_archive_all_chats`,
      keywords: [`archive`, `chats`, `conversations`, `bulk`],
      Component: mi,
    },
    {
      id: `providerApiKeys`,
      tab: $,
      section: `apiKeys`,
      labelKey: `com_ui_settings_label_provider_api_keys`,
      keywords: [`api`, `key`, `keys`, `provider`, `endpoint`, `credentials`],
      show: (e) => e.hasUserProvidedEndpoints,
      Component: da,
    },
    {
      id: `agentApiKeys`,
      tab: $,
      section: `apiKeys`,
      labelKey: `com_ui_settings_label_agent_api_keys`,
      show: (e) => e.hasRemoteAgents,
      Component: Ja,
    },
    {
      id: `revokeKeys`,
      tab: $,
      section: `apiKeys`,
      labelKey: `com_ui_settings_label_revoke_keys`,
      Component: Hi,
    },
    {
      id: `langfuseConnection`,
      tab: K.LANGFUSE,
      section: `langfuse`,
      labelKey: `com_ui_langfuse_title`,
      keywords: [`langfuse`, `observability`, `tracing`, `telemetry`, `traces`],
      show: (e) => e.langfuseConnectionAccess,
      Component: li,
    },
    {
      id: `deleteCache`,
      tab: $,
      section: `danger`,
      labelKey: `com_ui_settings_label_delete_cache`,
      Component: Ri,
    },
    {
      id: `clearChats`,
      tab: $,
      section: `danger`,
      labelKey: `com_ui_settings_label_clear_chats`,
      Component: Ui,
    },
    {
      id: `avatar`,
      tab: Xa,
      section: `profile`,
      labelKey: `com_ui_settings_label_avatar`,
      Component: va,
    },
    {
      id: `changeEmail`,
      tab: Xa,
      section: `profile`,
      labelKey: `com_ui_settings_label_change_email`,
      keywords: [`email`, `address`, `account`],
      show: (e) => e.isLocalProvider && e.emailEnabled && e.allowEmailChange,
      Component: Vi,
    },
    {
      id: `twoFactor`,
      tab: Xa,
      section: `security`,
      labelKey: `com_ui_settings_label_2fa`,
      show: (e) => e.isTwoFactorPolicyProvider,
      Component: ri,
    },
    {
      id: `backupCodes`,
      tab: Xa,
      section: `security`,
      labelKey: `com_ui_settings_label_backup_codes`,
      show: (e) => e.isTwoFactorPolicyProvider && e.twoFactorEnabled,
      Component: _i,
    },
    {
      id: `passkeys`,
      tab: Xa,
      section: `security`,
      labelKey: `com_ui_passkeys`,
      keywords: [`passkey`, `webauthn`, `fido`, `security key`, `passwordless`],
      show: (e) => e.passkeyLoginEnabled,
      Component: la,
    },
    {
      id: `tokenCredits`,
      tab: Xa,
      section: `billing`,
      labelKey: `com_ui_settings_label_credits`,
      show: (e) => e.balanceEnabled,
      Component: Gi,
    },
    {
      id: `autoRefill`,
      tab: Xa,
      section: `billing`,
      labelKey: `com_ui_settings_label_auto_refill`,
      show: (e) => e.balanceEnabled,
      Component: Ki,
    },
    {
      id: `deleteAccount`,
      tab: Xa,
      section: `danger`,
      labelKey: `com_ui_settings_label_delete_account`,
      show: (e) => e.allowAccountDeletion,
      Component: Ai,
    },
    {
      id: `about`,
      tab: Za,
      section: `about`,
      labelKey: `com_nav_setting_about`,
      keywords: [`version`, `build`, `diagnostics`],
      show: (e) => e.aboutEnabled,
      Component: Ma,
    },
  ];
function $a({ heading: e, icon: t, danger: n, children: r }) {
  return (0, J.jsxs)(`section`, {
    className: `mb-7`,
    children: [
      (0, J.jsxs)(`h3`, {
        className: F(
          `mb-1 flex items-center gap-1.5 px-1 text-xs font-medium tracking-wide uppercase`,
          n ? `text-text-destructive` : `text-text-secondary`,
        ),
        children: [t, e],
      }),
      (0, J.jsx)(`div`, {
        className: F(
          `text-text-primary overflow-hidden rounded-xl text-sm`,
          n && `border-status-error-border border`,
        ),
        children: r,
      }),
    ],
  });
}
function eo(e, t) {
  return !e.show || e.show(t);
}
function to({ activeTab: e, query: t, ctx: n }) {
  let r = H(),
    i = Er.find((t) => t.id === e),
    a = (0, q.useMemo)(() => (t.trim() ? Ar(Qa, t, n, r) : null), [t, n, r]);
  return a === null
    ? (0, J.jsx)(`div`, {
        children: i.sections.map((t) => {
          let i = Qa.filter((r) => r.tab === e && r.section === t.id && eo(r, n));
          return i.length === 0
            ? null
            : (0, J.jsx)(
                $a,
                {
                  heading: r(t.labelKey),
                  icon: t.icon,
                  danger: t.danger,
                  children: i.map((e) => {
                    let t = e.Component;
                    return (0, J.jsx)(
                      `div`,
                      { className: `px-4 py-3`, children: (0, J.jsx)(t, {}) },
                      e.id,
                    );
                  }),
                },
                t.id,
              );
        }),
      })
    : (0, J.jsx)(`div`, {
        'aria-label': r(`com_ui_settings_results_aria`),
        'aria-live': `polite`,
        children:
          a.length === 0
            ? (0, J.jsx)(`p`, {
                className: `text-text-secondary p-2 text-sm`,
                children: r(`com_ui_settings_no_results`),
              })
            : (0, J.jsx)(`div`, {
                className: `text-text-primary overflow-hidden rounded-xl text-sm`,
                children: a.map(({ entry: e, label: t }) => {
                  let n = e.Component,
                    i = Er.find((t) => t.id === e.tab),
                    a = i.sections.find((t) => t.id === e.section);
                  return (0, J.jsxs)(
                    `div`,
                    {
                      className: `px-4 py-3`,
                      children: [
                        (0, J.jsxs)(`div`, {
                          className: `text-text-tertiary mb-1.5 text-xs`,
                          children: [r(i.labelKey), ` ›`, ` `, a ? r(a.labelKey) : t],
                        }),
                        (0, J.jsx)(n, {}),
                      ],
                    },
                    e.id,
                  );
                }),
              }),
      });
}
function no({ open: e, onOpenChange: t }) {
  let n = H(),
    r = wr(),
    i = st(),
    a = Se(`(max-width: ${767 * i}px)`),
    [s, c] = (0, q.useState)(K.GENERAL),
    [l, u] = (0, q.useState)(``),
    [d, f] = (0, q.useState)(!a),
    p = l.trim().length > 0,
    m = a && d && !p,
    h = !a || !m,
    g = !a || m || p,
    _ = a && p,
    v = Er.filter((e) => !e.show || e.show(r)).some((e) => e.id === s) ? s : K.GENERAL,
    y = Er.find((e) => e.id === v);
  return (0, J.jsx)(Xn, {
    appear: !0,
    show: e,
    children: (0, J.jsxs)(Jn, {
      as: `div`,
      className: `relative z-50`,
      onClose: () => t(!1),
      children: [
        (0, J.jsx)(Yn, {
          enter: `ease-out duration-200`,
          enterFrom: `opacity-0`,
          enterTo: `opacity-100`,
          leave: `ease-in duration-200`,
          leaveFrom: `opacity-100`,
          leaveTo: `opacity-0`,
          children: (0, J.jsx)(`div`, { className: F(`fixed inset-0`, Vn), 'aria-hidden': `true` }),
        }),
        (0, J.jsx)(Yn, {
          enter: `ease-out duration-200`,
          enterFrom: `opacity-0 scale-95`,
          enterTo: `opacity-100 scale-100`,
          leave: `ease-in duration-100`,
          leaveFrom: `opacity-100 scale-100`,
          leaveTo: `opacity-0 scale-95`,
          children: (0, J.jsx)(`div`, {
            className: `fixed inset-0 flex w-screen items-center justify-center p-4`,
            children: (0, J.jsxs)(Zn, {
              className: F(
                `bg-surface-dialog border-border-light high-contrast:border high-contrast:border-solid high-contrast:border-border-medium high-contrast:shadow-none rounded-theme-surface flex max-h-[85vh] w-full flex-col overflow-hidden border-(length:--theme-dialog-stroke) shadow-2xl`,
                !a && `h-[85vh] w-[56.25rem] max-w-[calc(100vw-4rem)]`,
              ),
              children: [
                (0, J.jsxs)(Qn, {
                  as: `div`,
                  className: `border-border-inset flex items-center justify-between border-b p-5`,
                  children: [
                    m
                      ? (0, J.jsxs)(`button`, {
                          type: `button`,
                          onClick: () => f(!1),
                          className: `text-text-primary hover:bg-surface-hover focus:ring-border-xheavy -ml-1 flex items-center gap-1 rounded-lg p-1 transition-colors focus:ring-2 focus:outline-hidden`,
                          'aria-label': n(`com_ui_back`),
                          children: [
                            (0, J.jsx)(D, { className: `h-5 w-5`, 'aria-hidden': `true` }),
                            (0, J.jsx)(`span`, {
                              className: `text-lg font-medium`,
                              children: n(y ? y.labelKey : `com_nav_settings`),
                            }),
                          ],
                        })
                      : (0, J.jsx)(`h2`, {
                          className: `text-text-primary text-lg font-medium`,
                          children: n(`com_nav_settings`),
                        }),
                    (0, J.jsx)(B, {
                      variant: `ghost`,
                      size: `icon`,
                      onClick: () => t(!1),
                      'aria-label': n(`com_ui_close_settings`),
                      className: `text-text-secondary hover:bg-surface-hover hover:text-text-primary focus:ring-border-xheavy h-auto w-auto rounded-lg p-1 transition-colors focus:ring-2`,
                      children: (0, J.jsx)(o, { className: `h-5 w-5`, 'aria-hidden': `true` }),
                    }),
                  ],
                }),
                (0, J.jsx)(ge, {
                  children: (0, J.jsxs)(ce, {
                    value: v,
                    onValueChange: (e) => c(e),
                    orientation: `vertical`,
                    className: F(
                      `flex min-h-0 flex-1 flex-col gap-4 overflow-hidden p-5`,
                      !a && `flex-row gap-6`,
                    ),
                    children: [
                      h &&
                        (0, J.jsx)(Dr, {
                          ctx: r,
                          query: l,
                          onQueryChange: u,
                          onSelectTab: (e) => {
                            (c(e), f(!0));
                          },
                          showChevron: a,
                          hideTabs: _,
                          stacked: a,
                        }),
                      g &&
                        (0, J.jsx)(`div`, {
                          className: F(`flex-1 overflow-y-auto`, !a && `pr-1`),
                          children: p
                            ? (0, J.jsx)(to, { activeTab: v, query: l, ctx: r })
                            : (0, J.jsx)(ae, {
                                value: v,
                                tabIndex: -1,
                                className: `focus:outline-hidden`,
                                children: (0, J.jsx)(to, { activeTab: v, query: l, ctx: r }),
                              }),
                        }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      ],
    }),
  });
}
export { no as default };
