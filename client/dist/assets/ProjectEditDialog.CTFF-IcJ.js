import { o as e } from './rolldown-runtime.C0FnF6B9.js';
import { at as t, rt as n } from './advanced-inputs.BJDnsHUg.js';
import {
  Bi as r,
  En as i,
  Et as a,
  Fn as o,
  Ft as s,
  Hn as c,
  Ht as l,
  Ir as u,
  It as d,
  Jr as f,
  Kn as p,
  Lt as m,
  Mi as h,
  Nr as g,
  Nt as _,
  Or as v,
  Ra as y,
  Sn as b,
  Tn as x,
  Tt as S,
  Un as C,
  Ut as w,
  Xt as T,
  Zt as E,
  as as D,
  bn as O,
  ca as k,
  dr as A,
  er as j,
  fr as ee,
  hi as M,
  ki as N,
  kn as te,
  kr as ne,
  ln as re,
  mr as ie,
  oo as ae,
  ri as P,
  rn as oe,
  sa as se,
  vi as F,
  vn as I,
  vr as ce,
  ya as L,
  za as R,
  zt as le,
} from './vendor.DpBpdTS1.js';
import { n as ue } from './i18n.C6_IvY32.js';
import { a as de, s as fe } from './react-interactions.DscxJRRh.js';
import { d as pe, l as me, p as he } from './routing.DYGR6PKW.js';
import { r as z } from './query-devtools.C2qG3_c-.js';
import {
  $c as ge,
  $g as _e,
  Ah as B,
  An as ve,
  Au as ye,
  B as be,
  Bb as xe,
  Bv as Se,
  Cd as Ce,
  Co as we,
  Dg as Te,
  Ed as V,
  Eg as H,
  Fd as U,
  Fu as Ee,
  H_ as De,
  Hd as Oe,
  Ih as ke,
  It as Ae,
  Iu as je,
  Jf as Me,
  Ji as Ne,
  Jl as Pe,
  K_ as W,
  Km as Fe,
  Kp as Ie,
  Lu as Le,
  Mb as G,
  Mg as K,
  Nu as Re,
  Oh as ze,
  Qd as Be,
  Qn as Ve,
  Rg as He,
  Rh as q,
  Rn as Ue,
  Ru as We,
  Sd as Ge,
  Tg as Ke,
  Uf as qe,
  Uv as Je,
  V as Ye,
  Vf as Xe,
  Vg as Ze,
  Vx as Qe,
  Wm as $e,
  Wv as J,
  Xi as et,
  Xv as tt,
  Y_ as nt,
  Yi as rt,
  Yo as it,
  Yv as at,
  Zc as ot,
  Zi as st,
  Zl as ct,
  _d as lt,
  al as ut,
  bd as dt,
  bo as ft,
  bv as pt,
  c as mt,
  cg as Y,
  cr as ht,
  dc as gt,
  dp as _t,
  e_ as vt,
  ef as yt,
  eu as bt,
  fb as xt,
  fu as St,
  gv as Ct,
  hb as wt,
  jd as Tt,
  kd as Et,
  kg as Dt,
  kl as X,
  ko as Ot,
  m_ as kt,
  mh as At,
  ml as jt,
  nu as Mt,
  nv as Nt,
  or as Pt,
  ou as Ft,
  pc as It,
  pu as Lt,
  pv as Rt,
  qm as zt,
  qy as Bt,
  s_ as Vt,
  su as Ht,
  t_ as Ut,
  tr as Wt,
  ub as Gt,
  up as Kt,
  vg as qt,
  vh as Jt,
  vs as Yt,
  w as Xt,
  wd as Zt,
  wg as Z,
  x_ as Qt,
  z as $t,
  za as en,
  zd as tn,
  zg as nn,
  zu as rn,
} from './hooks.CliY9jTn.js';
import { n as an, r as on, t as sn } from './virtualization.CT5gCaFG.js';
import { n as cn } from './utilities.Ce8HPfek.js';
import { i as ln } from './forms.UHk3QTvM.js';
import { t as un } from './security-ui.5zGvIlor.js';
var dn = (e) => {
    let t = G();
    return new URL(`${t}/share/${e}`, window.location.origin).toString();
  },
  fn = e(cn(), 1),
  Q = e(t(), 1),
  pn = `conversation-item`,
  mn = !1,
  hn = () => {
    mn = !1;
  },
  gn = () => {
    mn = !0;
  },
  _n = () => {
    mn = !1;
  },
  vn = () => mn,
  yn = () => {
    let e = z();
    return (0, Q.useCallback)(
      (t) => {
        if (!t.conversationId) return t.chatProjectId;
        let n = dt(t.conversationId);
        if (n) return n.projectId;
        let r = e.getQueryData([xt.conversation, t.conversationId]);
        return r ? (r.chatProjectId ?? null) : t.chatProjectId;
      },
      [e],
    );
  },
  bn = () => {
    let e = X(),
      { showToast: t } = J(),
      n = Ge();
    return (0, Q.useCallback)(
      (r, i) => {
        let a = r.conversationId;
        return a
          ? n.mutateAsync({ conversationId: a, projectId: i }).then(
              (n) => (
                n.previousProjectId !== n.projectId &&
                  t({ message: e(`com_ui_project_updated`), severity: q.SUCCESS, showIcon: !0 }),
                !0
              ),
              () => (
                t({ message: e(`com_ui_project_update_error`), severity: q.ERROR, showIcon: !0 }),
                !1
              ),
            )
          : Promise.resolve(!1);
      },
      [n, e, t],
    );
  },
  xn = () => {
    let e = X(),
      { showToast: t } = J(),
      n = Ht();
    return (0, Q.useCallback)(
      (r) => {
        let i = r.conversationId;
        !i ||
          r.pinned !== !0 ||
          n.mutate(
            { conversationId: i, pinned: !1 },
            {
              onError: () =>
                t({ message: e(`com_ui_unpin_error`), severity: q.ERROR, showIcon: !0 }),
            },
          );
      },
      [n, e, t],
    );
  },
  Sn = ({ dragIndex: e, hoverIndex: t, pointerY: n, hoverTop: r, hoverBottom: i }) => {
    if (e < 0 || t < 0 || e === t) return !1;
    let a = (i - r) / 2,
      o = n - r;
    return e < t ? o >= a : o <= a;
  },
  Cn = (e) => (e.startsWith(`convo:`) ? `convo` : `favorite`),
  wn = (e, t) => {
    let n = new Set(t);
    return [`favorite`, `convo`].flatMap((r) => {
      let i = e.filter((e) => Cn(e) === r),
        a = t.filter((e) => Cn(e) === r),
        o = [],
        s = 0;
      for (let e of i) {
        if (!n.has(e)) {
          o.push(e);
          continue;
        }
        s < a.length && (o.push(a[s]), (s += 1));
      }
      for (; s < a.length; s += 1) o.push(a[s]);
      return o;
    });
  },
  Tn = `com_ui_running_chats`,
  En = `com_ui_finished_chats`,
  Dn = (e) => e === `com_ui_running_chats` || e === `com_ui_finished_chats`,
  On = [];
function kn(e) {
  return !e.includePinned && e.field === `updatedAt` && e.direction === `desc`;
}
function An(e) {
  return (
    e.isMarkedUnread === !1 &&
    e.lastSeenAt === `1970-01-01T00:00:00.000Z` &&
    e.lastResponseIsManual !== !0 &&
    Fe(e)
  );
}
function jn(e, t) {
  return (t.updatedAt ?? ``).localeCompare(e.updatedAt ?? ``);
}
function Mn(e, t) {
  if (t.size === 0) return On;
  let n = new Set(t);
  for (let [, t] of e) for (let e of t) e.conversationId && n.delete(e.conversationId);
  return n.size === 0 ? On : [...n];
}
function Nn(e, t, n, r = []) {
  if (!kn(n)) return e;
  let i = [],
    a = [],
    o = new Set(),
    s = [];
  for (let [n, r] of e) {
    let e = [];
    for (let n of r) {
      let r = n.conversationId;
      r && t.has(r) ? (i.push(n), o.add(r)) : An(n) ? a.push(n) : e.push(n);
    }
    e.length > 0 && s.push([n, e]);
  }
  let c =
    t.size === 0
      ? []
      : r.filter((e) => {
          let n = e.conversationId;
          return !n || e.isArchived === !0 || zt(e) || !t.has(n) || o.has(n) ? !1 : (o.add(n), !0);
        });
  if (i.length === 0 && a.length === 0 && c.length === 0) return e;
  let l = [];
  if (i.length > 0 || c.length > 0) {
    let e = c.length === 0 ? i : [...i, ...c].sort(jn);
    l.push([Tn, e]);
  }
  a.length > 0 && l.push([En, a]);
  let u = i.length > 0 || a.length > 0;
  return [...l, ...(u ? s : e)];
}
function Pn(e, t) {
  return (
    e.endpoint === t.endpoint &&
    e.endpointType === t.endpointType &&
    e.iconURL === t.iconURL &&
    e.model === t.model &&
    e.modelLabel === t.modelLabel &&
    e.chatGptLabel === t.chatGptLabel &&
    e.spec === t.spec &&
    e.agent_id === t.agent_id &&
    e.assistant_id === t.assistant_id
  );
}
function Fn(e, t) {
  return (
    Pn(e, t) &&
    e.conversationId === t.conversationId &&
    e.title === t.title &&
    e.chatProjectId === t.chatProjectId &&
    e.pinned === t.pinned &&
    e.isArchived === t.isArchived &&
    e.isShared === t.isShared &&
    e.createdAt === t.createdAt &&
    e.updatedAt === t.updatedAt &&
    e.lastResponseAt === t.lastResponseAt &&
    e.lastResponseIsManual === t.lastResponseIsManual &&
    e.isMarkedUnread === t.isMarkedUnread &&
    e.lastSeenAt === t.lastSeenAt
  );
}
function In(e, t) {
  return (
    Fn(e.conversation, t.conversation) &&
    e.isGenerating === t.isGenerating &&
    e.keyShortcuts === t.keyShortcuts &&
    e.showProjectBadge === t.showProjectBadge
  );
}
var $ = n(),
  Ln = {};
function Rn({ conversation: e, className: t, context: n = `menu-item`, size: r = 20 }) {
  let { data: i = Ln } = Be(),
    a = ge(),
    o = It();
  return (0, $.jsx)(Ot, {
    conversation: e,
    endpointsConfig: i,
    assistantMap: o,
    agentsMap: a,
    className: t,
    size: r,
    context: n,
  });
}
var zn = (0, Q.memo)(
    Rn,
    (e, t) =>
      e.className === t.className &&
      e.context === t.context &&
      e.size === t.size &&
      Pn(e.conversation, t.conversation),
  ),
  Bn = `[data-testid="convo-item"],[data-testid="favorite-item"]`,
  Vn = [
    `[data-testid="new-chat-button"]`,
    `[data-testid="nav-new-chat-fab"]`,
    `[data-testid="header-new-chat-button"]`,
  ],
  Hn = () => {
    for (let e of Vn) {
      let t = document.querySelector(e);
      if (t) return t;
    }
    return null;
  },
  Un = (e) =>
    e.matches(`a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])`)
      ? e
      : e.querySelector(`a[href],button:not([disabled])`),
  Wn = (e) => {
    let t = e?.closest(`[data-pinned-section]`);
    if (e && t) {
      let n = Array.from(t.querySelectorAll(Bn)),
        r = n.indexOf(e),
        i = n[r + 1] ?? n[r - 1],
        a = i ? Un(i) : null;
      if (a) return a;
    }
    return t ? Hn() : null;
  },
  Gn = (e) => (e ? Un(e) : null),
  Kn = (e) => {
    let t = e?.querySelector(Bn) ?? null,
      n = (t && Un(t)) ?? Hn();
    return (n?.focus(), n != null && document.activeElement === n);
  };
function qn({ projectId: e, labelId: t }) {
  let n = X(),
    r = Et(e),
    i = r ? n(`com_ui_in_project`, { name: r }) : n(`com_ui_project`);
  return (0, $.jsxs)(`span`, {
    className: `text-text-secondary mr-1 flex shrink-0 items-center`,
    title: i,
    'data-testid': `convo-project-badge`,
    children: [
      (0, $.jsx)(P, { className: `icon-sm`, 'aria-hidden': `true` }),
      (0, $.jsx)(`span`, { id: t, className: `sr-only`, children: i }),
    ],
  });
}
var Jn = (0, Q.memo)(qn);
function Yn({
  setShowDeleteDialog: e,
  conversationId: t,
  currentConversationId: n,
  getCurrentConversationId: r,
  setMenuOpen: i,
  retainView: a,
  title: o,
}) {
  let s = X(),
    c = pe(),
    l = z(),
    { showToast: u } = J(),
    { newConversation: d } = ve(),
    { conversationId: f } = he(),
    p = n ?? f,
    m = bt({
      onSuccess: () => {
        e(!1);
        let n = r ? r() : p;
        ((n === t || n === `new`) && (d(), c(`/c/new`, { replace: !0 })),
          i?.(!1),
          a(),
          u({ message: s(`com_ui_convo_delete_success`), severity: q.SUCCESS, showIcon: !0 }));
      },
      onError: () => {
        u({ message: s(`com_ui_convo_delete_error`), severity: q.ERROR, showIcon: !0 });
      },
    }),
    h = (0, Q.useCallback)(() => {
      let e = l.getQueryData([xt.messages, t]),
        n = e?.[e.length - 1]?.thread_id,
        r = e?.[e.length - 1]?.endpoint;
      m.mutate({ conversationId: t, thread_id: n, endpoint: r, source: `button` });
    }, [t, m, l]);
  return (0, $.jsxs)(H, {
    id: `delete-conversation-dialog`,
    className: `w-11/12 max-w-md`,
    showCloseButton: !1,
    'aria-describedby': `delete-conversation-description`,
    children: [
      (0, $.jsx)(Dt, { children: (0, $.jsx)(K, { children: s(`com_ui_delete_conversation`) }) }),
      (0, $.jsx)(`div`, {
        id: `delete-conversation-description`,
        className: `w-full truncate`,
        children: (0, $.jsx)(ue, {
          i18nKey: `com_ui_delete_confirm_strong`,
          values: { title: o },
          components: { strong: (0, $.jsx)(`strong`, {}) },
        }),
      }),
      (0, $.jsxs)(`div`, {
        className: `flex justify-end gap-4 pt-4`,
        children: [
          (0, $.jsx)(Ke, {
            asChild: !0,
            children: (0, $.jsx)(Y, {
              'aria-label': `cancel`,
              variant: `outline`,
              children: s(`com_ui_cancel`),
            }),
          }),
          (0, $.jsx)(Y, {
            variant: `destructive`,
            onClick: h,
            disabled: m.isLoading,
            children: m.isLoading ? (0, $.jsx)(W, {}) : s(`com_ui_delete`),
          }),
        ],
      }),
    ],
  });
}
function Xn({
  conversationId: e,
  currentConversationId: t,
  getCurrentConversationId: n,
  retainView: r,
  title: i,
  setMenuOpen: a,
  showDeleteDialog: o,
  setShowDeleteDialog: s,
  triggerRef: c,
}) {
  return o === void 0 || s === void 0 || !e
    ? null
    : (0, $.jsx)(Z, {
        open: o,
        onOpenChange: s,
        triggerRef: c,
        children: (0, $.jsx)(Yn, {
          setShowDeleteDialog: s,
          conversationId: e,
          currentConversationId: t,
          getCurrentConversationId: n,
          setMenuOpen: a,
          retainView: r,
          title: i,
        }),
      });
}
function Zn({
  conversationId: e,
  chatProjectId: t,
  setMenuOpen: n,
  setShowProjectDialog: r,
  onAssigned: i,
}) {
  let a = X(),
    { showToast: o } = J(),
    [s, c] = (0, Q.useState)(t ?? ``),
    l = Ge(),
    {
      data: u,
      fetchNextPage: d,
      isFetchingNextPage: f,
    } = Tt({ sortBy: `name`, sortDirection: `asc`, limit: 100 }),
    p = (0, Q.useMemo)(() => u?.pages.flatMap((e) => e.projects) ?? [], [u?.pages]),
    m = u?.pages[u.pages.length - 1]?.nextCursor != null,
    h = p.find((e) => e._id === s),
    g = (0, Q.useMemo)(
      () =>
        p.map((e) => ({
          label: e.name,
          value: e._id,
          icon: (0, $.jsx)(P, { className: `text-text-secondary h-4 w-4`, 'aria-hidden': `true` }),
        })),
      [p],
    ),
    _ = !!s && s !== (t ?? ``) && !l.isLoading;
  return (0, $.jsxs)(H, {
    id: `project-conversation-dialog`,
    className: `w-11/12 max-w-md overflow-visible`,
    showCloseButton: !1,
    children: [
      (0, $.jsx)(Dt, { children: (0, $.jsx)(K, { children: a(`com_ui_change_project`) }) }),
      (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [
          (0, $.jsx)(Vt, {
            htmlFor: `change-project-select`,
            className: `text-text-primary text-sm font-medium`,
            children: a(`com_ui_select_project`),
          }),
          (0, $.jsx)(qt, {
            selectId: `change-project-select`,
            selectedValue: s,
            displayValue: h?.name,
            items: g,
            setValue: c,
            SelectIcon: (0, $.jsx)(P, {
              className: `text-text-secondary h-4 w-4`,
              'aria-hidden': `true`,
            }),
            ariaLabel: a(`com_ui_select_project`),
            searchPlaceholder: a(`com_ui_search_projects`),
            selectPlaceholder: a(`com_ui_select_project`),
            isCollapsed: !1,
            showCarat: !0,
            placement: `bottom-start`,
            portal: !1,
            matchTriggerWidth: !0,
            containerClassName: `w-full px-0`,
            className: `border-border-light bg-surface-tertiary text-text-primary hover:bg-surface-hover h-10 w-full justify-start gap-2 rounded-xl border px-3 text-sm`,
          }),
          m
            ? (0, $.jsx)(Y, {
                type: `button`,
                variant: `link`,
                className: `h-auto justify-start px-0 text-sm`,
                onClick: () => d(),
                disabled: f,
                children: a(f ? `com_ui_loading` : `com_ui_load_more`),
              })
            : null,
        ],
      }),
      (0, $.jsxs)(`div`, {
        className: `flex justify-end gap-2 pt-4`,
        children: [
          (0, $.jsx)(Ke, {
            asChild: !0,
            children: (0, $.jsx)(Y, {
              type: `button`,
              variant: `outline`,
              children: a(`com_ui_cancel`),
            }),
          }),
          (0, $.jsx)(Y, {
            type: `button`,
            variant: `submit`,
            onClick: () => {
              _ &&
                l.mutate(
                  { conversationId: e, projectId: s },
                  {
                    onSuccess: () => {
                      (i?.(s),
                        r(!1),
                        n?.(!1),
                        o({
                          message: a(`com_ui_project_updated`),
                          severity: q.SUCCESS,
                          showIcon: !0,
                        }));
                    },
                    onError: () => {
                      o({
                        message: a(`com_ui_project_update_error`),
                        severity: q.ERROR,
                        showIcon: !0,
                      });
                    },
                  },
                );
            },
            disabled: !_,
            children: l.isLoading ? (0, $.jsx)(W, {}) : a(`com_ui_save`),
          }),
        ],
      }),
    ],
  });
}
function Qn({
  conversationId: e,
  chatProjectId: t,
  setMenuOpen: n,
  showProjectDialog: r,
  setShowProjectDialog: i,
  triggerRef: a,
  onAssigned: o,
}) {
  return r === void 0 || i === void 0 || !e
    ? null
    : (0, $.jsx)(Z, {
        open: r,
        onOpenChange: i,
        triggerRef: a,
        children: (0, $.jsx)(Zn, {
          conversationId: e,
          chatProjectId: t,
          setMenuOpen: n,
          setShowProjectDialog: i,
          onAssigned: o,
        }),
      });
}
function $n({ sharedLink: e }) {
  let t = X(),
    { announcePolite: n } = gt(),
    [r, i] = (0, Q.useState)(!1),
    a = Ae({ text: e });
  return (0, $.jsxs)(`div`, {
    className: `relative`,
    children: [
      (0, $.jsx)(Ut, {
        type: `text`,
        readOnly: !0,
        dir: `ltr`,
        value: e,
        'aria-label': t(`com_ui_shared_link`),
        onFocus: (e) => e.currentTarget.select(),
        className: `h-11 rounded-xl bg-surface-secondary pr-12 text-right text-sm text-text-primary`,
        'data-testid': `shared-link-url`,
      }),
      (0, $.jsx)(it, {
        iconOnly: !0,
        isCopied: r,
        label: t(`com_ui_copy_link`),
        copiedLabel: t(`com_ui_copied`),
        onClick: () => {
          r || (a(i) && n({ message: t(`com_ui_link_copied`), isStatus: !0 }));
        },
        className: `absolute right-1.5 top-1/2 size-8 -translate-y-1/2`,
      }),
    ],
  });
}
var er = (e) => {
    if (typeof e != `object` || !e) return;
    let t = `code` in e ? e.code : void 0;
    if (t === `TARGET_MESSAGE_NOT_FOUND` || t === `NO_MESSAGES`) return t;
    if (!(`response` in e) || e.response == null || typeof e.response != `object`) return;
    let n = `data` in e.response ? e.response.data : void 0;
    if (!(typeof n != `object` || !n || !(`code` in n)))
      return n.code === `TARGET_MESSAGE_NOT_FOUND` || n.code === `NO_MESSAGES` ? n.code : void 0;
  },
  tr = async (e, t) => {
    try {
      return await t(await e());
    } catch (e) {
      let t = er(e);
      if (t !== `TARGET_MESSAGE_NOT_FOUND` && t !== `NO_MESSAGES`) throw e;
    }
    return t(await e());
  };
function nr({
  share: e,
  conversationId: t,
  targetMessageId: n,
  resolveTargetMessageId: r,
  showQR: i,
  setShowQR: a,
  sharedLink: s,
  setSharedLink: c,
  snapshotFiles: u,
}) {
  let d = X(),
    { showToast: f } = J(),
    p = (0, Q.useRef)(null),
    m = (0, Q.useRef)(null),
    [h, g] = (0, Q.useState)(!1),
    [_, v] = (0, Q.useState)(!1),
    [y, b] = (0, Q.useState)(0),
    [x, S] = (0, Q.useState)(!1),
    [C, w] = (0, Q.useState)(!1),
    [T, E] = (0, Q.useState)(``),
    D = e?.shareId ?? ``,
    O = Se(`(max-width: 768px)`);
  (0, Q.useEffect)(() => {
    w(typeof navigator < `u` && typeof navigator.share == `function`);
  }, []);
  let { mutateAsync: k, isLoading: A } = ct(),
    { mutateAsync: j, isLoading: ee } = Lt(),
    M = Mt({
      onSuccess: () => {
        (g(!1),
          setTimeout(() => {
            let e = document
              .getElementById(`share-conversation-dialog`)
              ?.closest(`[role="dialog"]`);
            e instanceof HTMLElement && e.focus();
          }, 0));
      },
      onError: (e) => {
        (console.error(`Delete error:`, e),
          f({ message: d(`com_ui_share_delete_error`), severity: q.ERROR }));
      },
    }),
    N = (e) => dn(e),
    re = (e) => {
      let t = er(e),
        n = d(`com_ui_share_error`);
      (t === `TARGET_MESSAGE_NOT_FOUND`
        ? (n = d(`com_ui_share_target_not_saved`))
        : t === `NO_MESSAGES` && (n = d(`com_ui_share_no_messages`)),
        f({ message: n, severity: q.ERROR, showIcon: !0 }));
    },
    ie = () => r?.() ?? Promise.resolve(n),
    ae = async () => {
      if (D) {
        S(!0);
        try {
          let e = await tr(ie, (e) => j({ shareId: D, targetMessageId: e, snapshotFiles: u }));
          (b((e) => e + 1),
            c(N(e.shareId)),
            v(!1),
            E(d(`com_ui_link_refreshed`)),
            setTimeout(() => {
              E(``);
            }, 1e3));
        } catch (e) {
          (console.error(`Failed to update shared link:`, e), re(e));
        } finally {
          S(!1);
        }
      }
    },
    P = async () => {
      S(!0);
      try {
        let e = await tr(ie, (e) => k({ conversationId: t, targetMessageId: e, snapshotFiles: u }));
        c(N(e.shareId));
      } catch (e) {
        (console.error(`Failed to create shared link:`, e), re(e));
      } finally {
        S(!1);
      }
    },
    oe = async () => {
      if (D)
        try {
          (await M.mutateAsync({ shareId: D }),
            g(!1),
            c(``),
            f({ message: d(`com_ui_shared_link_delete_success`), severity: q.SUCCESS }));
        } catch (e) {
          (console.error(`Failed to delete shared link:`, e),
            f({ message: d(`com_ui_share_delete_error`), severity: q.ERROR }));
        }
    },
    se = async () => {
      if (!(!C || !s))
        try {
          await navigator.share({ title: d(`com_ui_share_link_to_chat`), url: s });
        } catch (e) {
          if (e.name === `AbortError`) return;
          f({ message: d(`com_ui_share_error`), severity: q.ERROR, showIcon: !0 });
        }
    },
    F = Ve({ permissionType: at.SHARED_LINKS, permission: tt.SHARE }),
    { hasPermission: ce, isLoading: L } = Xt(wt.SHARED_LINK, e?._id || ``),
    R = F && !L && ce(Gt.SHARE) && !!e?._id,
    le = d(i ? `com_ui_hide_qr` : `com_ui_show_qr`);
  return (0, $.jsx)($.Fragment, {
    children: (0, $.jsxs)(`div`, {
      className: `flex w-full flex-wrap items-center gap-2`,
      children: [
        !D &&
          (0, $.jsxs)(Y, {
            type: `button`,
            disabled: A || x,
            variant: `submit`,
            onClick: P,
            className: `ml-auto min-w-28`,
            children: [
              !A && !x && d(`com_ui_create_link`),
              (A || x) && (0, $.jsx)(W, { className: `size-4` }),
            ],
          }),
        D &&
          (0, $.jsxs)($.Fragment, {
            children: [
              R &&
                (0, $.jsx)(Ue, {
                  resourceType: wt.SHARED_LINK,
                  resourceDbId: e?._id,
                  resourceName: e?.shareId ?? void 0,
                  children: (0, $.jsx)(Rt, {
                    description: d(`com_ui_shared_link_manage_access`),
                    render: (e) =>
                      (0, $.jsx)(Y, {
                        ...e,
                        type: `button`,
                        size: `icon`,
                        variant: `outline`,
                        className: `size-9 sm:size-10`,
                        'aria-label': d(`com_ui_shared_link_manage_access`),
                        children: (0, $.jsx)(l, { className: `size-4`, 'aria-hidden': `true` }),
                      }),
                  }),
                }),
              (0, $.jsxs)(`div`, {
                className: `ml-auto flex flex-wrap items-center justify-end gap-1.5 sm:gap-2`,
                children: [
                  O &&
                    C &&
                    (0, $.jsx)(Rt, {
                      description: d(`com_ui_share`),
                      render: (e) =>
                        (0, $.jsx)(Y, {
                          ...e,
                          type: `button`,
                          onClick: se,
                          variant: `outline`,
                          size: `icon`,
                          className: `size-9 sm:size-10`,
                          'aria-label': d(`com_ui_share`),
                          children: (0, $.jsx)(I, { className: `size-4`, 'aria-hidden': `true` }),
                        }),
                    }),
                  (0, $.jsx)(`span`, {
                    className: `sr-only`,
                    'aria-live': `polite`,
                    'aria-atomic': `true`,
                    children: T,
                  }),
                  (0, $.jsx)(Rt, {
                    description: d(`com_ui_update_shared_link`),
                    render: (e) =>
                      (0, $.jsx)(Y, {
                        ...e,
                        ref: m,
                        type: `button`,
                        onClick: () => v(!0),
                        variant: `outline`,
                        size: `icon`,
                        className: `size-9 sm:size-10`,
                        disabled: ee || x,
                        'aria-label': d(`com_ui_update_shared_link`),
                        children: (0, $.jsx)(
                          te,
                          {
                            className:
                              y > 0
                                ? `animate-refresh-link-spin size-4 motion-reduce:animate-none`
                                : `size-4`,
                            'aria-hidden': `true`,
                          },
                          y,
                        ),
                      }),
                  }),
                  (0, $.jsx)(Rt, {
                    description: le,
                    render: (e) =>
                      (0, $.jsx)(Y, {
                        ...e,
                        type: `button`,
                        onClick: () => a(!i),
                        variant: `outline`,
                        size: `icon`,
                        className: `size-9 sm:size-10`,
                        'aria-pressed': i,
                        'aria-label': le,
                        children: (0, $.jsx)(o, { className: `size-4`, 'aria-hidden': `true` }),
                      }),
                  }),
                  (0, $.jsx)(Rt, {
                    description: d(`com_ui_delete_link`),
                    render: (e) =>
                      (0, $.jsx)(Y, {
                        ...e,
                        ref: p,
                        type: `button`,
                        onClick: () => g(!0),
                        variant: `destructive`,
                        size: `icon`,
                        className: `size-9 sm:size-10`,
                        'aria-label': d(`com_ui_delete_link`),
                        children: (0, $.jsx)(ne, { className: `size-4`, 'aria-hidden': `true` }),
                      }),
                  }),
                ],
              }),
            ],
          }),
        (0, $.jsx)(Z, {
          open: _,
          triggerRef: m,
          onOpenChange: v,
          children: (0, $.jsxs)(H, {
            className: `w-11/12 max-w-md`,
            showCloseButton: !1,
            children: [
              (0, $.jsxs)(Dt, {
                children: [
                  (0, $.jsx)(K, { children: d(`com_ui_update_shared_link_confirm_title`) }),
                  (0, $.jsx)(Te, {
                    className: `text-text-secondary`,
                    children: d(`com_ui_update_shared_link_confirm_description`),
                  }),
                ],
              }),
              (0, $.jsxs)(`div`, {
                className: `flex justify-end gap-2 pt-4`,
                children: [
                  (0, $.jsx)(Ke, {
                    asChild: !0,
                    children: (0, $.jsx)(Y, { variant: `outline`, children: d(`com_ui_cancel`) }),
                  }),
                  (0, $.jsxs)(Y, {
                    type: `button`,
                    variant: `submit`,
                    onClick: ae,
                    disabled: ee || x,
                    children: [
                      (ee || x) && (0, $.jsx)(W, { className: `size-4` }),
                      d(`com_ui_update_shared_link`),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, $.jsx)(Z, {
          open: h,
          triggerRef: p,
          onOpenChange: g,
          children: (0, $.jsxs)(H, {
            role: `alertdialog`,
            className: `w-11/12 max-w-[28.125rem]`,
            showCloseButton: !1,
            children: [
              (0, $.jsx)(Dt, {
                children: (0, $.jsx)(K, { children: d(`com_ui_delete_shared_link_heading`) }),
              }),
              (0, $.jsx)(`div`, {
                className: `flex w-full flex-col items-center gap-2`,
                children: (0, $.jsx)(`div`, {
                  className: `grid w-full items-center gap-2`,
                  children: (0, $.jsx)(Vt, {
                    htmlFor: `dialog-confirm-delete`,
                    className: `text-left text-sm font-medium`,
                    children: (0, $.jsx)(ue, {
                      i18nKey: `com_ui_delete_confirm_strong`,
                      values: { title: D },
                      components: { strong: (0, $.jsx)(`strong`, {}) },
                    }),
                  }),
                }),
              }),
              (0, $.jsxs)(`div`, {
                className: `flex justify-end gap-4 pt-4`,
                children: [
                  (0, $.jsx)(Ke, {
                    asChild: !0,
                    children: (0, $.jsx)(Y, { variant: `outline`, children: d(`com_ui_cancel`) }),
                  }),
                  (0, $.jsx)(Y, {
                    variant: `destructive`,
                    onClick: oe,
                    disabled: M.isLoading,
                    children: M.isLoading
                      ? (0, $.jsx)(W, { className: `size-4` })
                      : d(`com_ui_delete_link`),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
var rr = (e) => Object.assign(Error(e), { code: e });
function ir({ conversationId: e, open: t, onOpenChange: n, triggerRef: r, children: i }) {
  let a = X(),
    { data: o } = yt(),
    s = o?.sharedLinksSnapshotFilesEnabled === !0,
    c = z(),
    [l, u] = (0, Q.useState)(!0),
    [d, f] = (0, Q.useState)(``),
    [p, m] = (0, Q.useState)(!0),
    h = Q.useRef(null),
    g = D(Me.conversationIdByIndex(0)),
    _ = qe(0),
    v = Xe(0),
    y = g === e,
    b = y ? _ : null,
    x = (0, Q.useCallback)(async () => {
      let t = v()?.messageId ?? b;
      if (
        ((t ||=
          (await c.fetchQuery([xt.messages, e], () => U(e), { staleTime: 0 }),
          v()?.messageId ?? null)),
        !t)
      )
        throw rr(`NO_MESSAGES`);
      if (!(await xe.getMessageById(e, t)).some((e) => e.messageId === t))
        throw rr(`TARGET_MESSAGE_NOT_FOUND`);
      return t;
    }, [e, v, b, c]),
    { data: S, isLoading: C } = jt(e),
    w = S?.shareId ?? ``;
  ((0, Q.useEffect)(() => {
    f(w ? dn(w) : ``);
  }, [e, w]),
    (0, Q.useEffect)(() => {
      m(S?.success === !0 && typeof S.snapshotFiles == `boolean` ? S.snapshotFiles : !0);
    }, [e, S?.success, S?.snapshotFiles]));
  let T =
    C === !0
      ? null
      : (0, $.jsx)(nr, {
          share: S,
          conversationId: e,
          targetMessageId: b ?? void 0,
          resolveTargetMessageId: y ? x : void 0,
          showQR: l,
          setShowQR: u,
          sharedLink: d,
          setSharedLink: f,
          snapshotFiles: s ? p : void 0,
        });
  return (0, $.jsxs)(Z, {
    open: t,
    onOpenChange: n,
    triggerRef: r,
    children: [
      i,
      (0, $.jsxs)(H, {
        className: `flex max-h-[90vh] w-11/12 max-w-md flex-col gap-0 overflow-hidden p-0 shadow-2xl`,
        onOpenAutoFocus: (e) => {
          h.current && (e.preventDefault(), h.current.focus());
        },
        children: [
          (0, $.jsxs)(Dt, {
            className: `shrink-0 px-6 pt-6 pr-14 pb-0 text-left`,
            children: [
              (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, $.jsx)(K, {
                    className: `text-xl font-semibold tracking-tight`,
                    children: a(`com_ui_share_link_to_chat`),
                  }),
                  (0, $.jsx)(vt, {
                    icon: `info`,
                    side: nn.Bottom,
                    text:
                      S?.success === !0
                        ? a(`com_ui_share_update_message`)
                        : a(`com_ui_share_create_message`),
                  }),
                ],
              }),
              (0, $.jsx)(Te, {
                className: `sr-only`,
                children:
                  S?.success === !0
                    ? a(`com_ui_share_update_message`)
                    : a(`com_ui_share_create_message`),
              }),
            ],
          }),
          C === !0
            ? (0, $.jsx)(`div`, {
                className: `flex min-h-72 items-center justify-center px-6 pb-6`,
                children: (0, $.jsx)(W, { className: `size-6` }),
              })
            : (0, $.jsxs)(`div`, {
                id: `share-conversation-dialog`,
                className: `min-h-0 flex-1 space-y-5 overflow-y-auto px-6 pt-6 pb-6`,
                children: [
                  s &&
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center justify-between gap-4`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `flex min-w-0 items-center gap-2`,
                          children: [
                            (0, $.jsx)(Vt, {
                              id: `share-files-label`,
                              htmlFor: `share-files-switch`,
                              className: `text-text-primary cursor-pointer text-sm font-medium`,
                              children: a(`com_ui_share_files`),
                            }),
                            (0, $.jsx)(vt, {
                              icon: `info`,
                              side: nn.Bottom,
                              text: `${a(`com_ui_share_files_description`)}${w ? ` ${a(`com_ui_share_files_update_note`)}` : ``}`,
                            }),
                          ],
                        }),
                        (0, $.jsx)(nt, {
                          ref: h,
                          id: `share-files-switch`,
                          checked: p,
                          onCheckedChange: m,
                          'aria-labelledby': `share-files-label`,
                        }),
                      ],
                    }),
                  l &&
                    w &&
                    (0, $.jsx)(`div`, {
                      className: `flex min-h-56 items-center justify-center py-1`,
                      children: (0, $.jsx)(`div`, {
                        className: `bg-surface-qr min-w-0 rounded-2xl p-3 shadow-xs`,
                        children: (0, $.jsx)(un, {
                          value: d,
                          size: 200,
                          className: `h-auto w-[12.5rem] max-w-full`,
                          marginSize: 1,
                          title: a(`com_ui_share_qr_code_description`),
                        }),
                      }),
                    }),
                  w && (0, $.jsx)($n, { sharedLink: d }),
                  (0, $.jsx)(`div`, { className: `pt-1`, children: T }),
                ],
              }),
        ],
      }),
    ],
  });
}
function ar(e, t, n) {
  return e
    ? (0, $.jsx)(W, { className: `size-4` })
    : t
      ? (0, $.jsx)(R, { className: n, 'aria-hidden': `true` })
      : (0, $.jsx)(y, { className: n, 'aria-hidden': `true` });
}
function or({
  conversationId: e,
  title: t,
  isPinned: n = !1,
  isArchived: r = !1,
  isUnseen: i = !1,
  retainView: a,
  renameHandler: o,
  canRename: s = !0,
  isPopoverActive: l,
  setIsPopoverActive: u,
  isActiveConvo: d,
  isShiftHeld: f = !1,
  isGenerating: m = !1,
  contextMenuPosition: g,
}) {
  let _ = X(),
    v = z(),
    y = Yt(),
    { setConversation: b } = ut(),
    { showToast: x } = J(),
    { announcePolite: S } = gt(),
    C = pe(),
    { conversationId: w } = he(),
    T = (0, Q.useRef)(w);
  T.current = w;
  let { newConversation: D } = ve(),
    O = (0, Q.useId)(),
    k = (0, Q.useRef)(null),
    A = (0, Q.useRef)(null),
    [j, ee] = (0, Q.useState)(!1),
    M = Pe(),
    N = Ht(),
    te = Ft(),
    ne = bt({
      onSuccess: () => {
        ((w === e || w === `new`) && (D(), C(`/c/new`, { replace: !0 })),
          a(),
          x({ message: _(`com_ui_convo_delete_success`), severity: q.SUCCESS, showIcon: !0 }));
      },
      onError: () => {
        x({ message: _(`com_ui_convo_delete_error`), severity: q.ERROR, showIcon: !0 });
      },
    }),
    re = M.isLoading,
    ie = N.isLoading,
    P = ne.isLoading,
    oe = (0, Q.useCallback)(() => {
      ee(!0);
    }, []),
    se = (0, Q.useCallback)(
      (t) => {
        t.stopPropagation();
        let n = e ?? ``;
        if (!n) return;
        let r = v.getQueryData([xt.messages, n]),
          i = r?.[r.length - 1]?.thread_id,
          a = r?.[r.length - 1]?.endpoint;
        ne.mutate({ conversationId: n, thread_id: i, endpoint: a, source: `button` });
      },
      [e, ne, v],
    ),
    F = (0, Q.useCallback)(
      async (t) => {
        t?.stopPropagation();
        let n = e ?? ``;
        n &&
          M.mutate(
            { conversationId: n, isArchived: !r },
            {
              onSuccess: () => {
                (b((e) => (e?.conversationId === n ? { ...e, isArchived: !r } : e)),
                  S({
                    message: _(r ? `com_ui_convo_unarchived` : `com_ui_convo_archived`),
                    isStatus: !0,
                  }));
                let e = T.current;
                (!r && (e === n || e === `new`) && (D(), C(`/c/new`, { replace: !0 })), a(), u(!1));
              },
              onError: () => {
                x({
                  message: _(r ? `com_ui_unarchive_error` : `com_ui_archive_error`),
                  severity: q.ERROR,
                  showIcon: !0,
                });
              },
            },
          );
      },
      [e, r, b, M, C, D, a, u, S, x, _],
    ),
    I = (0, Q.useCallback)(() => {
      let t = e ?? ``;
      t &&
        N.mutate(
          { conversationId: t, pinned: !n },
          {
            onSuccess: () => u(!1),
            onError: () => {
              x({
                message: _(n ? `com_ui_unpin_error` : `com_ui_pin_error`),
                severity: q.ERROR,
                showIcon: !0,
              });
            },
          },
        );
    }, [e, n, N, u, x, _]),
    L = (0, Q.useCallback)(() => {
      let t = e ?? ``;
      t &&
        te.mutate(
          { conversationId: t },
          {
            onSuccess: () => u(!1),
            onError: () => {
              x({ message: _(`com_ui_mark_unread_error`), severity: q.ERROR, showIcon: !0 });
            },
          },
        );
    }, [e, te, u, x, _]),
    R = (0, Q.useMemo)(
      () => [
        {
          label: _(n ? `com_ui_unpin` : `com_ui_pin`),
          onClick: I,
          hideOnClick: !1,
          icon: ie
            ? (0, $.jsx)(W, { className: `size-4` })
            : (0, $.jsx)(c, { className: `icon-sm text-text-primary mr-2`, 'aria-hidden': `true` }),
        },
        {
          label: _(`com_ui_mark_unread`),
          onClick: L,
          show: !d && !i,
          icon: (0, $.jsx)(ce, {
            className: `icon-sm text-text-primary mr-2`,
            'aria-hidden': `true`,
          }),
        },
        {
          label: _(`com_ui_rename`),
          onClick: o,
          disabled: !s,
          icon: (0, $.jsx)(p, {
            className: `icon-sm text-text-primary mr-2`,
            'aria-hidden': `true`,
          }),
        },
        {
          label: _(r ? `com_ui_unarchive` : `com_ui_archive`),
          onClick: F,
          hideOnClick: !1,
          icon: ar(re, r, `icon-sm mr-2 text-text-primary`),
        },
        {
          label: _(`com_ui_delete`),
          onClick: oe,
          icon: (0, $.jsx)(E, {
            className: `icon-sm text-text-primary mr-2`,
            'aria-hidden': `true`,
          }),
          ariaHasPopup: `dialog`,
          ariaControls: `delete-conversation-dialog`,
          hideOnClick: !1,
          ref: A,
          render: (e) => (0, $.jsx)(`button`, { ...e }),
        },
      ],
      [_, n, i, d, ie, o, s, oe, re, r, I, L, F],
    ),
    le = ze({ visible: d === !0 || l || y || m });
  return f && d && !l && !j
    ? (0, $.jsxs)(`div`, {
        className: `flex items-center gap-0.5`,
        children: [
          (0, $.jsx)(`button`, {
            'aria-label': _(r ? `com_ui_unarchive` : `com_ui_archive`),
            className: le,
            onClick: F,
            disabled: re,
            children: ar(re, r, `icon-md text-text-secondary`),
          }),
          (0, $.jsx)(`button`, {
            'aria-label': _(`com_ui_delete`),
            className: le,
            onClick: se,
            disabled: P,
            children: P
              ? (0, $.jsx)(W, { className: `size-4` })
              : (0, $.jsx)(E, { className: `icon-md text-text-secondary`, 'aria-hidden': !0 }),
          }),
        ],
      })
    : (0, $.jsxs)($.Fragment, {
        children: [
          (0, $.jsx)(He, {
            portal: !0,
            getAnchorRect: g ? () => ({ ...g, width: 0, height: 0 }) : void 0,
            menuId: O,
            focusLoop: !0,
            finalFocus: k,
            autoFocusOnShow: !0,
            className: `z-[125]`,
            unmountOnHide: !0,
            isOpen: l,
            setIsOpen: u,
            trigger: (0, $.jsx)(ae, {
              ref: k,
              id: `conversation-menu-${e}`,
              'aria-label': _(`com_nav_convo_menu_options`),
              'aria-expanded': l,
              className: B(le, `gap-2`, l && `bg-surface-active text-text-primary`),
              onClick: (e) => {
                e.stopPropagation();
              },
              onKeyDown: (e) => {
                (e.key === `Enter` || e.key === ` `) && e.stopPropagation();
              },
              children: (0, $.jsx)(h, { className: `icon-md`, 'aria-hidden': !0 }),
            }),
            items: R,
          }),
          j &&
            (0, $.jsx)(Xn, {
              title: t ?? ``,
              retainView: a,
              triggerRef: A,
              setMenuOpen: u,
              showDeleteDialog: j,
              conversationId: e ?? ``,
              setShowDeleteDialog: ee,
            }),
        ],
      });
}
var sr = (0, Q.memo)(
  or,
  (e, t) =>
    e.conversationId === t.conversationId &&
    e.title === t.title &&
    e.canRename === t.canRename &&
    e.isPinned === t.isPinned &&
    e.isArchived === t.isArchived &&
    e.isUnseen === t.isUnseen &&
    e.isPopoverActive === t.isPopoverActive &&
    e.isActiveConvo === t.isActiveConvo &&
    e.isShiftHeld === t.isShiftHeld &&
    e.isGenerating === t.isGenerating &&
    e.contextMenuPosition === t.contextMenuPosition,
);
function cr({
  hasInteracted: e,
  isActiveConvo: t,
  isPopoverActive: n,
  isGenerating: r = !1,
  onOpenChange: i,
  ...a
}) {
  let o = X(),
    s = Yt(),
    [c, l] = (0, Q.useState)(!1);
  (0, Q.useEffect)(() => {
    n && l(!0);
  }, [n]);
  let u = (e) => {
    (e && l(!0), i(e));
  };
  return (s ? n || t || c : n || c || e || t)
    ? (0, $.jsx)(sr, {
        ...a,
        isGenerating: r,
        isActiveConvo: t,
        isPopoverActive: n,
        setIsPopoverActive: u,
      })
    : !s && !r
      ? null
      : (0, $.jsx)(Y, {
          size: `icon`,
          variant: `ghost`,
          'aria-label': o(`com_nav_convo_menu_options`),
          'data-testid': `convo-options-trigger`,
          className: `size-9`,
          onClick: (e) => {
            (e.stopPropagation(), u(!0));
          },
          children: (0, $.jsx)(h, { className: `icon-md`, 'aria-hidden': `true` }),
        });
}
var lr = (0, Q.memo)(cr);
function ur({ onClick: e, onKeyDown: t, testId: n, keepVisible: r = !1, className: i }) {
  let a = X(),
    o = Se(`(hover: hover)`);
  return (0, $.jsx)(Rt, {
    description: a(`com_ui_unpin`),
    side: `top`,
    render: (0, $.jsx)(Y, {
      variant: `row-action`,
      size: `icon-xs`,
      'aria-label': a(`com_ui_unpin`),
      'data-testid': n,
      onClick: e,
      onKeyDown: t,
      className: B(
        `shrink-0 text-text-secondary`,
        o &&
          !r &&
          `pointer-events-none opacity-0 focus-visible:pointer-events-auto focus-visible:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100`,
        i,
      ),
      children: (0, $.jsx)(C, { className: `size-4`, 'aria-hidden': `true` }),
    }),
  });
}
var dr = ({ titleInput: e, setTitleInput: t, onSubmit: n, onCancel: r, localize: i }) => {
    let a = (0, Q.useRef)(null);
    return (
      (0, Q.useEffect)(() => {
        a.current && (a.current.focus(), a.current.select());
      }, []),
      (0, $.jsxs)(`div`, {
        className: `bg-surface-nav-selected absolute inset-0 z-20 flex w-full items-center rounded-lg p-1.5`,
        role: `form`,
        'aria-label': i(`com_ui_rename_conversation`),
        children: [
          (0, $.jsx)(Ut, {
            ref: a,
            type: `text`,
            className: B(
              `h-auto w-full rounded border-0 bg-transparent p-0.5 text-sm leading-tight`,
            ),
            value: e,
            onChange: (e) => t(e.target.value),
            onKeyDown: (t) => {
              switch (t.key) {
                case `Escape`:
                  r();
                  break;
                case `Enter`:
                  n(e);
              }
            },
            maxLength: 100,
            'aria-label': i(`com_ui_new_conversation_title`),
          }),
          (0, $.jsxs)(`div`, {
            className: `flex gap-1`,
            role: `toolbar`,
            children: [
              (0, $.jsx)(Y, {
                variant: `row-action`,
                size: `icon`,
                onClick: () => r(),
                className: B(`focus:ring-text-primary size-auto p-1 focus:ring-2`),
                'aria-label': i(`com_ui_cancel`),
                type: `button`,
                children: (0, $.jsx)(s, { className: `h-4 w-4`, 'aria-hidden': `true` }),
              }),
              (0, $.jsx)(Y, {
                variant: `row-action`,
                size: `icon`,
                onClick: () => n(e),
                className: B(`focus:ring-text-primary size-auto p-1 focus:ring-2`),
                'aria-label': i(`com_ui_save`),
                type: `button`,
                children: (0, $.jsx)(k, { className: `h-4 w-4`, 'aria-hidden': `true` }),
              }),
            ],
          }),
        ],
      })
    );
  },
  fr = 30,
  pr = 600,
  mr = 2e3,
  hr = (e, t) =>
    typeof e.addEventListener == `function`
      ? (e.addEventListener(`change`, t), () => e.removeEventListener(`change`, t))
      : (e.addListener(t), () => e.removeListener(t)),
  gr = ({
    isActiveConvo: e,
    isPopoverActive: t,
    isHovered: n,
    isSharedBadgeVisible: r,
    isUnseen: i,
    isGenerating: a = !1,
    title: o,
    onRename: s,
    isSmallScreen: c,
    localize: l,
    keyShortcuts: u,
    describedBy: d,
    children: f,
  }) => {
    let [p, m] = (0, Q.useState)(!1),
      h = (0, Q.useRef)(null),
      g = (0, Q.useRef)(null),
      _ = o || l(`com_ui_untitled`);
    return (
      (0, Q.useEffect)(() => {
        let e = h.current,
          t = g.current;
        if (!e || !t) return;
        let r = window.matchMedia(`(prefers-reduced-motion: reduce)`),
          i,
          a = 0,
          o = () => {
            (i?.cancel(), cancelAnimationFrame(a), delete e.dataset.titleRevealed);
            let o = t.getBoundingClientRect().width - e.getBoundingClientRect().width;
            if ((m(o > 0), !n || c || r.matches || o <= 0)) return;
            let s = getComputedStyle(e),
              l = s.direction === `rtl` ? 1 : -1,
              u = parseFloat(s.getPropertyValue(`--convo-title-reveal-duration`)),
              d = (o / fr) * 1e3,
              f = d + mr,
              p = `translateX(${l * o}px)`;
            i = t.animate(
              [{ transform: `translateX(0)` }, { transform: p, offset: d / f }, { transform: p }],
              { duration: f, delay: pr, iterations: 1 / 0, easing: `linear` },
            );
            let h = Math.max(0, d - u),
              g = () => {
                let t = (typeof i?.currentTime == `number` ? i.currentTime : 0) - pr;
                ((e.dataset.titleRevealed = String(t > 0 && t % f >= h)),
                  (a = requestAnimationFrame(g)));
              };
            g();
          },
          s = new ResizeObserver(o);
        (s.observe(e), s.observe(t));
        let l = hr(r, o);
        return (
          o(),
          () => {
            (s.disconnect(),
              l(),
              i?.cancel(),
              cancelAnimationFrame(a),
              delete e.dataset.titleRevealed);
          }
        );
      }, [n, c, _]),
      (0, $.jsxs)(`button`, {
        type: `button`,
        className: B(
          `focus-visible:ring-text-primary flex w-full min-w-0 grow cursor-pointer items-center gap-2 self-stretch overflow-hidden rounded-lg px-2 text-left outline-hidden focus-visible:ring-2 focus-visible:ring-inset`,
          e || t ? `bg-surface-nav-selected` : ``,
        ),
        'aria-current': e ? `page` : void 0,
        'aria-keyshortcuts': u,
        'aria-describedby': d,
        'aria-label':
          l(r ? `com_ui_conversation_label_shared` : `com_ui_conversation_label`, {
            title: o || l(`com_ui_untitled`),
          }) +
          (a ? `, ${l(`com_ui_generating`)}` : ``) +
          (i && !a ? `, ${l(`com_ui_unread`)}` : ``),
        children: [
          f,
          (0, $.jsx)(`span`, {
            ref: h,
            className: B(
              i && !a && `font-semibold`,
              `min-w-0 flex-1 overflow-hidden [mask-size:100%_100%] [mask-position:left] [mask-repeat:no-repeat] [text-align:start] whitespace-nowrap [transition-property:mask-size] [transition-duration:0ms] [transition-timing-function:linear] [--convo-title-fade-width:24px] [--convo-title-reveal-duration:800ms] [&:dir(rtl)]:[mask-position:right]`,
              p &&
                `[mask-image:linear-gradient(to_right,currentColor_calc(100%_-_var(--convo-title-fade-width)),transparent)] [&:dir(rtl)]:[mask-image:linear-gradient(to_left,currentColor_calc(100%_-_var(--convo-title-fade-width)),transparent)]`,
              `data-[title-revealed=true]:[mask-size:calc(100%_+_var(--convo-title-fade-width))_100%] data-[title-revealed=true]:[transition-duration:var(--convo-title-reveal-duration)]`,
            ),
            onDoubleClick: (e) => {
              c || (e.preventDefault(), e.stopPropagation(), s());
            },
            children: (0, $.jsx)(`span`, { ref: g, className: `inline-block`, children: _ }),
          }),
        ],
      })
    );
  };
function _r({
  conversation: e,
  retainView: t,
  toggleNav: n,
  isGenerating: r = !1,
  draggable: i = !1,
  onRenamingChange: a,
  keyShortcuts: o,
  showProjectBadge: s = !1,
}) {
  let c = he(),
    l = X(),
    { showToast: u } = J(),
    { navigateToConvo: d } = ot(),
    f = (0, Q.useMemo)(() => c.conversationId, [c.conversationId]),
    p = St(f ?? ``),
    m = Ht(),
    h = D(Me.conversationIdByIndex(0)),
    g = Yt(),
    { data: _ } = yt(),
    y = _?.sharedLinksEnabled === !0,
    b = e.isShared === !0 && y,
    x = (0, Q.useId)(),
    S = s ? e.chatProjectId : void 0,
    C = Fe(e),
    w = Ye(),
    { conversationId: T, title: E = `` } = e,
    O = Qe(_) || (!r && (e.titleSetByUser === !0 || Kt(E))),
    [k, A] = (0, Q.useState)(E || ``),
    [j, ee] = (0, Q.useState)(!1),
    [M, N] = (0, Q.useState)(!1),
    [te, ne] = (0, Q.useState)(),
    [re, ie] = (0, Q.useState)(!1),
    [ae, P] = (0, Q.useState)(!1),
    oe = (0, Q.useRef)(E),
    se = (0, Q.useRef)(null),
    F = (0, Q.useRef)(a);
  F.current = a;
  let I = (0, Q.useCallback)((e) => {
    (ee(e), F.current?.(e));
  }, []);
  (0, Q.useEffect)(
    () => () => {
      F.current?.(!1);
    },
    [],
  );
  let ce = Se(`(hover: hover)`),
    [, L] = fe({
      type: pn,
      item: () => ({
        conversationId: T ?? ``,
        chatProjectId: e.chatProjectId ?? null,
        pinned: e.pinned === !0,
      }),
    });
  (L(i && ce && !j ? se : null),
    (0, Q.useEffect)(() => {
      E !== oe.current && (A(E), (oe.current = E));
    }, [E]));
  let R = (0, Q.useMemo)(
      () => (T === Bt.NEW_CONVO ? f === Bt.NEW_CONVO : f === Bt.NEW_CONVO ? h === T : f === T),
      [f, T, h],
    ),
    le = () => {
      O && (N(!1), ne(void 0), A(E), I(!0));
    },
    ue = async (t) => {
      if (!O || !T || (t === E && e.titleSetByUser === !0)) {
        I(!1);
        return;
      }
      try {
        (await p.mutateAsync({ conversationId: T, title: t.trim() || l(`com_ui_untitled`) }),
          I(!1));
      } catch (e) {
        (ke.error(`Error renaming conversation`, e),
          A(E),
          u({ message: l(`com_ui_rename_failed`), severity: q.ERROR, showIcon: !0 }),
          I(!1));
      }
    },
    de = () => {
      (A(E), I(!1));
    },
    pe = (0, Q.useCallback)(() => {
      P(!0);
    }, []),
    me = (0, Q.useCallback)(() => {
      if (!T) return;
      let e = se.current,
        t = e?.contains(document.activeElement) === !0 ? (Wn(e) ?? Gn(e)) : null;
      m.mutate(
        { conversationId: T, pinned: !1 },
        {
          onSuccess: () => {
            let n = document.activeElement,
              r = e?.contains(n) === !0,
              i = e?.isConnected === !1 && (n === document.body || n === document.documentElement);
            t?.isConnected && (r || i) && t.focus();
          },
          onError: () => {
            u({ message: l(`com_ui_unpin_error`), severity: q.ERROR, showIcon: !0 });
          },
        },
      );
    }, [T, m, u, l]),
    z = (0, Q.useCallback)((e) => {
      (N(e), e || ne(void 0));
    }, []),
    ge = (t) => {
      if (t && !r) {
        n();
        let e = window.location.origin,
          t = `/c/${T}`;
        window.open(e + t, `_blank`);
        return;
      }
      f === T ||
        M ||
        n(() => {
          (_t(E), d(e, { currentConvoId: f }));
        });
    },
    _e = {
      title: E,
      isPinned: e.pinned,
      isArchived: e.isArchived === !0,
      retainView: t,
      renameHandler: le,
      canRename: O,
      isActiveConvo: R,
      isUnseen: C,
      conversationId: T,
      isPopoverActive: M,
      isGenerating: r,
      contextMenuPosition: te,
      onOpenChange: z,
      isShiftHeld: R && !r ? w : !1,
    },
    ve = `pointer-events-none w-0 scale-x-0 opacity-0 group-focus-within:pointer-events-auto group-focus-within:scale-x-100 group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:scale-x-100 group-hover:opacity-100`,
    ye = g ? `group-focus-within:w-9 group-hover:w-9` : `group-focus-within:w-7 group-hover:w-7`;
  r
    ? ((ve = `pointer-events-auto scale-x-100 opacity-100`), (ye = g ? `w-9` : `w-7`))
    : (M || R || g) &&
      ((ve = `pointer-events-auto scale-x-100 opacity-100`),
      (ye = !M && R && w ? `w-[3.75rem]` : g ? `w-9` : `w-7`));
  let be = j ? null : (0, $.jsx)(lr, { ..._e, hasInteracted: ae });
  return (0, $.jsxs)(`div`, {
    ref: se,
    'data-conversation-id': T,
    className: B(
      `group focus-visible:ring-text-primary relative flex h-12 w-full items-center rounded-lg outline-hidden focus-visible:ring-2 focus-visible:outline-hidden focus-visible:ring-inset md:h-9`,
      R || M
        ? `bg-surface-nav-selected before:bg-text-primary before:absolute before:top-1 before:bottom-1 before:left-0 before:w-0.5 before:rounded-full`
        : `hover:bg-surface-nav-hover`,
    ),
    onPointerEnter: (e) => {
      e.pointerType === `mouse` && ie(!0);
    },
    onPointerLeave: () => ie(!1),
    onPointerCancel: () => ie(!1),
    onContextMenu: (e) => {
      j ||
        !(e.target instanceof Node) ||
        !e.currentTarget.contains(e.target) ||
        (e.preventDefault(), e.stopPropagation(), ne({ x: e.clientX, y: e.clientY }), P(!0), N(!0));
    },
    onMouseEnter: pe,
    onFocus: pe,
    onClick: (e) => {
      j || (e.button === 0 && ge(e.ctrlKey || e.metaKey));
    },
    style: { cursor: j ? `default` : `pointer` },
    'data-testid': `convo-item`,
    children: [
      j
        ? (0, $.jsx)(dr, {
            titleInput: k,
            setTitleInput: A,
            onSubmit: ue,
            onCancel: de,
            localize: l,
          })
        : (0, $.jsx)(gr, {
            isActiveConvo: R,
            isPopoverActive: M,
            isHovered: re,
            isSharedBadgeVisible: b,
            isUnseen: C,
            isGenerating: r,
            title: E,
            onRename: le,
            isSmallScreen: g,
            localize: l,
            keyShortcuts: o,
            describedBy: S ? x : void 0,
            children: (0, $.jsxs)(`span`, {
              className: `relative flex size-5 shrink-0 items-center justify-center`,
              children: [
                (0, $.jsx)(zn, { conversation: e, size: 20, context: `menu-item` }),
                r &&
                  (0, $.jsx)(W, {
                    size: 34,
                    strokeWidth: 1.9,
                    bgOpacity: 0.14,
                    className: `pointer-events-none absolute -top-[0.4375rem] -left-[0.4375rem] size-[2.125rem]`,
                  }),
                C &&
                  !r &&
                  (0, $.jsx)(`span`, {
                    'aria-hidden': `true`,
                    className: B(
                      `bg-status-info pointer-events-none absolute -right-0.5 -bottom-0.5 size-2 rounded-full ring-2`,
                      R || M
                        ? `ring-surface-nav-selected`
                        : `ring-surface-primary-alt group-hover:ring-surface-nav-hover`,
                    ),
                  }),
              ],
            }),
          }),
      b &&
        (0, $.jsx)(v, {
          className: `icon-sm text-text-secondary mr-1 shrink-0`,
          'aria-hidden': `true`,
        }),
      S && (0, $.jsx)(Jn, { projectId: S, labelId: x }),
      e.pinned === !0 &&
        (0, $.jsx)(ur, {
          testId: `convo-unpin-button`,
          className: `mr-1`,
          keepVisible: M,
          onClick: (e) => {
            (e.stopPropagation(), me());
          },
        }),
      (0, $.jsx)(`div`, {
        className: B(`mr-1 flex shrink-0 origin-left items-center justify-center`, ve, ye),
        children: be,
      }),
    ],
  });
}
var vr = (0, Q.memo)(_r, In),
  yr = (0, Q.memo)(({ cache: e, rowKey: t, parent: n, index: r, style: i, children: a }) =>
    (0, $.jsx)(
      on,
      {
        cache: e,
        columnIndex: 0,
        parent: n,
        rowIndex: r,
        children: ({ registerChild: e }) =>
          (0, $.jsx)(`div`, {
            ref: e,
            style: i,
            className: `px-3`,
            'data-testid': `convo-list-row`,
            role: `row`,
            children: (0, $.jsx)(`div`, { role: `gridcell`, children: a }),
          }),
      },
      t,
    ),
  );
yr.displayName = `MeasuredRow`;
var br = (0, Q.memo)(() => {
  let e = X();
  return (0, $.jsxs)(`div`, {
    className: `text-text-primary mx-auto mt-2 flex items-center justify-center gap-2`,
    children: [
      (0, $.jsx)(W, { className: `m-0` }),
      (0, $.jsx)(`span`, { className: `shimmer`, children: e(`com_ui_loading`) }),
    ],
  });
});
br.displayName = `LoadingSpinner`;
var xr = (0, Q.memo)(({ isExpanded: e, onToggle: t, trailing: n, highlight: r }) => {
  let i = X();
  return (0, $.jsxs)(`div`, {
    className: B(`flex h-8 w-full items-center pr-1`, r && `bg-surface-nav-selected rounded-lg`),
    children: [
      (0, $.jsxs)(`button`, {
        onClick: t,
        className: B(pt({ variant: `section-header` }), `group min-w-0 flex-1`),
        type: `button`,
        'aria-expanded': e,
        children: [
          (0, $.jsx)(`span`, { className: `truncate select-none`, children: i(`com_ui_chats`) }),
          (0, $.jsx)(se, {
            className: B(
              `h-3 w-3 shrink-0 transition-transform duration-200`,
              e ? `` : `-rotate-90`,
            ),
            'aria-hidden': `true`,
          }),
        ],
      }),
      n,
    ],
  });
});
xr.displayName = `ChatsHeader`;
var Sr = { [Tn]: `com_a11y_chats_running_section`, [En]: `com_a11y_chats_finished_section` },
  Cr = (0, Q.memo)(({ groupName: e, isFirst: t, isAlphabetical: n = !1, count: r }) => {
    let i = X(),
      a = i(e) || e,
      o = Sr[e],
      s;
    return (
      (s = o
        ? i(o, { count: r ?? 0 })
        : n
          ? i(`com_a11y_chats_alpha_section`, { letter: a })
          : i(`com_a11y_chats_date_section`, { date: a })),
      (0, $.jsxs)(`h2`, {
        'aria-label': s,
        className: B(`text-text-secondary pt-0.5 pl-1 text-xs`, t === !0 ? `mt-0` : `mt-1.5`),
        children: [
          a,
          r != null &&
            (0, $.jsxs)(`span`, { className: `text-text-tertiary`, children: [` · `, r] }),
        ],
      })
    );
  });
Cr.displayName = `DateLabel`;
var wr = (0, Q.memo)(
  ({
    conversations: e,
    moveToTop: t,
    toggleNav: n,
    containerRef: r,
    loadMoreConversations: o,
    isLoading: s,
    isSearchLoading: c,
    isChatsExpanded: l,
    setIsChatsExpanded: u,
    chatsHeaderTrailing: d,
    hasNextPage: f = !1,
    isError: p = !1,
    onRetry: m,
    scrollViewport: h,
    scrollContent: g,
    accountHasProjects: _ = !1,
  }) => {
    let v = X(),
      b = D(Me.search),
      x = S(je),
      C = S(We),
      w = S(Re),
      E = S(Ee),
      O = S(Pt),
      k = a(rn),
      j = a(ht),
      M = w + O,
      N = (0, Q.useCallback)(() => {
        (k(), j());
      }, [k, j]),
      te = Yt(),
      ne = bn(),
      re = xn(),
      ie = yn(),
      ae = (0, Q.useRef)(null),
      [{ isDropOver: P, canDrop: oe }, se] = de({
        accept: pn,
        canDrop: (e) => ie(e) != null || e.pinned === !0,
        hover: () => gn(),
        drop: (e) => {
          ne(e, null).then((t) => {
            t && re(e);
          });
        },
        collect: (e) => ({ isDropOver: e.isOver(), canDrop: e.canDrop() }),
      });
    se(ae);
    let F = te ? 44 : 34,
      I = Je(),
      { ref: ce, width: L } = be(),
      { ref: R, height: le, scrollTop: ue, isOnScreen: fe } = $t(h, g),
      pe = (0, Q.useCallback)(
        (e) => {
          (ce(e), R(e));
        },
        [ce, R],
      ),
      { data: me } = lt(),
      he = (0, Q.useRef)(null),
      z = (0, Q.useMemo)(() => {
        let e = me?.activeJobIds ?? [],
          t = new Set(e),
          n = he.current;
        return n && t.size === n.size && e.every((e) => n.has(e)) ? n : ((he.current = t), t);
      }, [me?.activeJobIds]),
      ge = (0, Q.useMemo)(() => e.filter(Boolean), [e]),
      _e = C || !!b.query,
      B = (0, Q.useMemo)(
        () => $e(ge, { field: x.field, direction: x.direction, includePinned: _e }),
        [ge, _e, x.direction, x.field],
      ),
      ve = !b.query && !C && E.length === 0 && O === 0,
      xe = x.field === `updatedAt` && x.direction === `desc`,
      Se = (0, Q.useMemo)(() => (ve && l && xe ? Mn(B, z) : []), [ve, l, xe, B, z]),
      Ce = ye(Se),
      we = (0, Q.useMemo)(
        () =>
          Nn(B, z, { field: x.field, direction: x.direction, includePinned: C }, ve ? Ce : void 0),
        [B, z, C, ve, Ce, x.direction, x.field],
      ),
      Te = (0, Q.useRef)(null);
    ((0, Q.useEffect)(() => {
      l || (Te.current = null);
    }, [l]),
      (0, Q.useEffect)(() => {
        !l || s || c || we.length > 0 || (Te.current !== e && ((Te.current = e), o()));
      }, [l, s, c, we.length, e, o]));
    let V = (0, Q.useMemo)(() => {
        let e = [];
        return (
          l &&
            (we.forEach(([t, n]) => {
              (e.push({ type: `header`, groupName: t, count: Dn(t) ? n.length : void 0 }),
                e.push(...n.map((e) => ({ type: `convo`, convo: e }))));
            }),
            s && e.push({ type: `loading` })),
          e
        );
      }, [we, s, l]),
      H = (0, Q.useRef)(V);
    H.current = V;
    let U = (0, Q.useMemo)(
      () =>
        new an({
          fixedWidth: !0,
          defaultHeight: Math.round(F * I),
          keyMapper: (e) => {
            let t = H.current[e];
            return t
              ? t.type === `header`
                ? `header-${t.groupName}-${e === 0 ? `first` : `sub`}`
                : t.type === `convo`
                  ? `convo-${t.convo.conversationId}`
                  : t.type === `loading`
                    ? `loading`
                    : `unknown-${e}`
              : `unknown-${e}`;
          },
        }),
      [F, I],
    );
    ((0, Q.useEffect)(() => {
      let e = requestAnimationFrame(() => {
        (U.clearAll(),
          r.current && `recomputeRowHeights` in r.current && r.current.recomputeRowHeights(0));
      });
      return () => cancelAnimationFrame(e);
    }, [b.query, I, U, r]),
      (0, Q.useEffect)(() => {
        let e = requestAnimationFrame(() => {
          r.current && `recomputeRowHeights` in r.current && r.current.recomputeRowHeights(0);
        });
        return () => cancelAnimationFrame(e);
      }, [V, r]));
    let De = (0, Q.useRef)(0);
    (0, Q.useEffect)(() => {
      if (L === 0 || L === De.current) return;
      De.current = L;
      let e = requestAnimationFrame(() => {
        (U.clearAll(),
          r.current && `recomputeRowHeights` in r.current && r.current.recomputeRowHeights(0));
      });
      return () => cancelAnimationFrame(e);
    }, [L, U, r]);
    let Oe = (0, Q.useCallback)(
        ({ index: e, key: r, parent: i, style: a }) => {
          let o = V[e],
            s = { cache: U, rowKey: r, parent: i, index: e, style: a };
          if (o.type === `loading`)
            return (0, $.jsx)(yr, { ...s, children: (0, $.jsx)(br, {}) }, r);
          if (o.type === `header`)
            return (0, $.jsx)(
              yr,
              {
                ...s,
                children: (0, $.jsx)(Cr, {
                  groupName: o.groupName,
                  isFirst: e === 0,
                  isAlphabetical: Le(x.field),
                  count: o.count,
                }),
              },
              r,
            );
          if (o.type === `convo`) {
            let e = z.has(o.convo.conversationId ?? ``);
            return (0, $.jsx)(
              yr,
              {
                ...s,
                children: (0, $.jsx)(vr, {
                  conversation: o.convo,
                  retainView: t,
                  toggleNav: n,
                  isGenerating: e,
                  showProjectBadge: !0,
                  draggable: !0,
                }),
              },
              r,
            );
          }
          return null;
        },
        [U, V, t, n, z, x.field],
      ),
      ke = (0, Q.useCallback)(({ index: e }) => U.getHeight(e, 0), [U]),
      Ae = (0, Q.useMemo)(() => (0, fn.default)(o, 300), [o]),
      Ne = (0, Q.useCallback)(
        ({ stopIndex: e }) => {
          fe() && e >= V.length - 8 && Ae();
        },
        [V.length, Ae, fe],
      ),
      Pe = l && p && !s && !c && ge.length === 0,
      Fe = !b.query && E.length === 0 && O === 0 && !C && ge.length > 0,
      Ie = l && !s && !c && !Pe && !f && we.length === 0 && !Fe,
      G = `com_ui_no_chats`,
      K = ee;
    b.query
      ? ((G = `com_ui_no_search_results`), (K = i))
      : E.length > 0 || O > 0
        ? ((G = `com_ui_no_chats_match_filters`), (K = A))
        : C
          ? ((G = `com_ui_no_archived_chats`), (K = y))
          : _ && ((G = `com_ui_no_unassigned_chats`), (K = ee));
    let ze = G === `com_ui_no_chats`,
      Be = (0, $.jsx)(`div`, {
        ref: pe,
        className: `flex-1`,
        children: (0, $.jsx)(sn, {
          ref: r,
          autoHeight: !0,
          width: L,
          height: le,
          scrollTop: ue,
          deferredMeasurementCache: U,
          rowCount: V.length,
          rowHeight: ke,
          rowRenderer: Oe,
          overscanRowCount: 10,
          'aria-readonly': !1,
          className: `outline-hidden`,
          'aria-label': `Conversations`,
          onRowsRendered: Ne,
          tabIndex: -1,
          containerRole: `rowgroup`,
        }),
      });
    return (
      c
        ? (Be = (0, $.jsxs)(`div`, {
            className: `text-text-primary flex flex-1 items-center justify-center`,
            children: [
              (0, $.jsx)(W, { className: `m-0` }),
              (0, $.jsx)(`span`, { className: `shimmer ml-2`, children: v(`com_ui_loading`) }),
            ],
          }))
        : Pe
          ? (Be = (0, $.jsx)(`div`, {
              className: `flex flex-1 items-center justify-center`,
              'data-testid': `convo-list-error`,
              role: `alert`,
              children: (0, $.jsx)(Ze, {
                icon: T,
                title: v(`com_ui_chats_load_error`),
                action:
                  m &&
                  (0, $.jsx)(Y, {
                    type: `button`,
                    variant: `outline`,
                    size: `sm`,
                    onClick: m,
                    children: v(`com_ui_retry`),
                  }),
              }),
            }))
          : Ie &&
            (Be = (0, $.jsx)(`div`, {
              className: `flex flex-1 items-center justify-center`,
              'data-testid': `convo-list-empty`,
              children: (0, $.jsx)(Ze, {
                icon: K,
                title: ze ? v(G) : void 0,
                description: ze ? void 0 : v(G),
                action:
                  M > 0 &&
                  (0, $.jsx)(Y, {
                    type: `button`,
                    variant: `secondary`,
                    size: `xs`,
                    onClick: N,
                    children: v(`com_ui_clear_filters`),
                  }),
              }),
            })),
      (0, $.jsxs)(`div`, {
        ref: ae,
        className: `text-text-primary relative flex flex-1 flex-col pt-3 pb-2 text-sm`,
        children: [
          (0, $.jsx)(`div`, {
            className: `px-3`,
            children: (0, $.jsx)(xr, {
              isExpanded: l,
              onToggle: () => u(!l),
              trailing: d,
              highlight: P && oe,
            }),
          }),
          Be,
        ],
      })
    );
  },
);
function Tr(e) {
  return Array.isArray(e.authConfig) && e.authConfig.length > 0 && e.authenticated !== !0;
}
function Er(e) {
  switch (e.kind) {
    case `builtin`:
      return (
        e.id === `artifacts` ||
        e.id === `execute_code` ||
        e.id === `file_search` ||
        e.id === `context` ||
        e.id === `memory` ||
        e.id === `subagents` ||
        e.id === `handoffs` ||
        (e.id === `web_search` && e.userProvidedAuth === !0)
      );
    case `tool`:
      return Tr(e.plugin);
    case `mcp`:
    case `action`:
      return !0;
    case `skill`:
      return !1;
    default:
      return !1;
  }
}
var Dr = {
    subagents: { Icon: j, colorClass: `bg-series-2/15 text-series-2` },
    handoffs: { Icon: le, colorClass: `bg-series-4/15 text-series-4` },
    execute_code: { Icon: r, colorClass: `bg-series-7/15 text-series-7` },
    web_search: { Icon: f, colorClass: `bg-series-1/15 text-series-1` },
    artifacts: { Icon: re, colorClass: `bg-series-6/15 text-series-6` },
    context: { Icon: M, colorClass: `bg-series-4/15 text-series-4` },
    file_search: { Icon: F, colorClass: `bg-series-5/15 text-series-5` },
    memory: { Icon: L, colorClass: `bg-series-8/15 text-series-8` },
    ask_user_question: { Icon: ie, colorClass: `bg-series-3/15 text-series-3` },
  },
  Or = {
    builtin: { Icon: g, colorClass: `bg-series-7/15 text-series-7` },
    tool: { Icon: d, colorClass: `bg-series-1/15 text-series-1` },
    mcp: { Icon: b, colorClass: `bg-series-6/15 text-series-6` },
    skill: { Icon: _, colorClass: `bg-series-4/15 text-series-4` },
    action: { Icon: m, colorClass: `bg-series-2/15 text-series-2` },
  };
function kr(e) {
  if (e.kind === `tool`) {
    let t = e.plugin?.icon;
    return typeof t == `string` && t.length > 0 ? t : void 0;
  }
  if (e.kind === `mcp`) {
    let t = e.server?.metadata?.icon;
    return typeof t == `string` && t.length > 0 ? t : void 0;
  }
}
function Ar(e) {
  if (e.kind === `builtin`) return Dr[e.iconKey] ?? Or.builtin;
  let t = Or[e.kind],
    n = kr(e);
  return n ? { ...t, iconUrl: n } : t;
}
function jr(e) {
  let t = X();
  return e.kind === `builtin`
    ? { name: t(e.name), description: e.description ? t(e.description) : `` }
    : { name: e.name, description: e.description ?? `` };
}
var Mr = {
  builtin: `com_ui_tools_kind_official`,
  tool: `com_ui_tools_kind_tools`,
  skill: `com_ui_tools_kind_skills`,
  mcp: `com_ui_tools_kind_mcp`,
  action: `com_ui_tools_kind_actions`,
};
function Nr({ item: e, size: t }) {
  let { Icon: n, colorClass: r, iconUrl: i } = Ar(e),
    [a, o] = (0, Q.useState)(!1),
    s = t === `md` ? `h-10 w-10 rounded-xl text-base` : `h-9 w-9 rounded-lg text-sm`;
  return i && !a
    ? (0, $.jsx)(`span`, {
        className: B(
          `bg-surface-fixed flex shrink-0 items-center justify-center overflow-hidden`,
          s,
        ),
        'aria-hidden': `true`,
        children: (0, $.jsx)(`img`, {
          src: i,
          alt: ``,
          className: `h-full w-full object-cover`,
          loading: `lazy`,
          onError: () => o(!0),
        }),
      })
    : (0, $.jsx)(`span`, {
        className: B(`flex shrink-0 items-center justify-center`, s, r),
        'aria-hidden': `true`,
        children: (0, $.jsx)(n, { className: `h-[1.125rem] w-[1.125rem]`, strokeWidth: 1.75 }),
      });
}
function Pr({
  item: e,
  selected: t,
  onToggle: n,
  onConfigure: r,
  isFavorited: i = !1,
  onToggleFavorite: a,
  status: o,
}) {
  let s = X(),
    { name: c, description: l } = jr(e),
    { user: d } = Wt(),
    p = e.kind === `builtin`,
    m = s(Mr[e.kind]),
    h = a !== void 0 && e.kind !== `action`,
    g = Er(e) && r !== void 0,
    _ = e.kind === `skill` ? e.skill : void 0,
    v = _?.isPublic === !0,
    y = _ != null && _.author !== d?.id && !!_.authorName,
    b = e.kind === `builtin` && e.id === `web_search` && !g && r !== void 0,
    x = g ? O : u;
  return (0, $.jsxs)(`div`, {
    className: B(
      `group touch:h-36 relative flex h-32 w-full flex-col overflow-hidden rounded-2xl border`,
      t
        ? `border-status-success bg-status-success/10 shadow-xs`
        : `border-border-light hover:border-border-medium hover:bg-surface-tertiary bg-transparent hover:shadow-xs`,
    ),
    children: [
      (0, $.jsxs)(`button`, {
        type: `button`,
        onClick: () => n(e),
        'aria-pressed': t,
        className: B(
          `touch:pb-9 flex h-full w-full cursor-pointer flex-col gap-2 rounded-2xl p-4 text-left`,
          `focus-visible:ring-ring-primary focus:outline-hidden focus-visible:ring-2`,
        ),
        children: [
          (0, $.jsxs)(`div`, {
            className: `flex w-full items-start gap-3`,
            children: [
              (0, $.jsx)(Nr, { item: e, size: `md` }),
              (0, $.jsxs)(`div`, {
                className: `min-w-0 flex-1`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `flex items-start gap-1.5`,
                    children: [
                      (0, $.jsxs)(`p`, {
                        className: `text-text-primary flex min-w-0 flex-1 items-center gap-1 text-sm font-semibold`,
                        children: [
                          (0, $.jsx)(`span`, { className: `truncate`, children: c }),
                          p &&
                            (0, $.jsx)(Ct, {
                              className: `text-status-verified size-3.5 shrink-0`,
                              'aria-label': s(`com_ui_tools_native`),
                            }),
                        ],
                      }),
                      t &&
                        (0, $.jsx)(`span`, {
                          className: `bg-status-success-strong text-text-on-status flex size-5 shrink-0 items-center justify-center rounded-full`,
                          'aria-hidden': `true`,
                          children: (0, $.jsx)(k, { className: `size-3`, strokeWidth: 3 }),
                        }),
                    ],
                  }),
                  o == null
                    ? (0, $.jsx)(`p`, {
                        className: `text-text-secondary truncate text-[11px] tracking-wide uppercase`,
                        children: m,
                      })
                    : (0, $.jsxs)(`p`, {
                        className: `text-text-secondary flex min-w-0 items-center gap-1.5 text-xs`,
                        children: [
                          (0, $.jsx)(`span`, {
                            'aria-hidden': `true`,
                            className: B(`size-2 shrink-0 rounded-full`, o.tone),
                          }),
                          (0, $.jsx)(`span`, { className: `truncate`, children: o.label }),
                        ],
                      }),
                ],
              }),
            ],
          }),
          l
            ? (0, $.jsx)(`p`, {
                className: `text-text-secondary line-clamp-3 text-xs leading-snug`,
                children: l,
              })
            : (0, $.jsx)(`p`, {
                className: `text-text-tertiary line-clamp-3 text-xs leading-snug italic`,
                children: p ? s(`com_ui_tools_native_short`) : m,
              }),
          (e.kind === `action` && e.endpointCount > 0) || v || y
            ? (0, $.jsxs)(`div`, {
                className: `mt-auto flex w-full flex-wrap items-center gap-1.5`,
                children: [
                  e.kind === `action` &&
                    e.endpointCount > 0 &&
                    (0, $.jsx)(`span`, {
                      className: `bg-surface-tertiary text-text-tertiary inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px]`,
                      children: s(
                        e.endpointCount === 1
                          ? `com_ui_tools_endpoint_count_one`
                          : `com_ui_tools_endpoint_count`,
                        { count: e.endpointCount },
                      ),
                    }),
                  y &&
                    _ &&
                    (0, $.jsxs)(`span`, {
                      className: `bg-surface-tertiary text-text-tertiary inline-flex max-w-[60%] items-center gap-1 rounded-full px-2 py-0.5 text-[10px]`,
                      title: s(`com_ui_tools_shared_by`, { name: _.authorName }),
                      'aria-label': s(`com_ui_tools_shared_by`, { name: _.authorName }),
                      children: [
                        (0, $.jsx)(w, { className: `size-2.5 shrink-0`, 'aria-hidden': `true` }),
                        (0, $.jsx)(`span`, { className: `truncate`, children: _.authorName }),
                      ],
                    }),
                  v &&
                    (0, $.jsx)(`span`, {
                      className: `bg-surface-tertiary text-text-tertiary inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[10px]`,
                      title: s(`com_ui_sr_public_skill`),
                      'aria-label': s(`com_ui_sr_public_skill`),
                      children: (0, $.jsx)(f, { className: `size-2.5`, 'aria-hidden': `true` }),
                    }),
                ],
              })
            : null,
        ],
      }),
      (h || g || b) &&
        (0, $.jsxs)(`div`, {
          className: `absolute right-2 bottom-2 flex items-center gap-1`,
          children: [
            (g || b) &&
              (0, $.jsx)(`button`, {
                type: `button`,
                onClick: (t) => {
                  (t.stopPropagation(), r?.(e));
                },
                'aria-label': s(g ? `com_ui_tools_configure` : `com_ui_tools_info`),
                className: B(
                  `text-text-secondary flex size-7 items-center justify-center rounded-lg`,
                  `hover:bg-surface-hover hover:text-text-primary transition duration-150`,
                  `no-touch:opacity-0 group-focus-within:opacity-100 group-hover:opacity-100`,
                  `focus-visible:ring-ring-primary focus:outline-hidden focus-visible:opacity-100 focus-visible:ring-2`,
                ),
                children: (0, $.jsx)(x, { className: `size-4`, 'aria-hidden': `true` }),
              }),
            h &&
              (0, $.jsx)(`button`, {
                type: `button`,
                onClick: (t) => {
                  (t.stopPropagation(), a?.(e));
                },
                'aria-pressed': i,
                'aria-label': s(i ? `com_ui_unfavorite` : `com_ui_favorite`),
                className: B(
                  `text-text-secondary flex size-7 items-center justify-center rounded-lg`,
                  `hover:bg-surface-hover hover:text-text-primary transition duration-150`,
                  `group-focus-within:opacity-100 group-hover:opacity-100`,
                  `focus-visible:ring-ring-primary focus:outline-hidden focus-visible:opacity-100 focus-visible:ring-2`,
                  !i && `no-touch:opacity-0`,
                  i && `text-series-4 hover:text-series-4`,
                ),
                children: (0, $.jsx)(oe, {
                  className: B(`size-4`, i && `fill-current`),
                  'aria-hidden': `true`,
                }),
              }),
          ],
        }),
    ],
  });
}
var Fr = (0, Q.memo)(Pr),
  Ir = 3,
  Lr = {
    marketplace: `com_ui_tools_search_no_results`,
    mine: `com_ui_tools_view_mine_empty`,
    favorites: `com_ui_tools_view_favorites_empty`,
  };
function Rr() {
  return (0, $.jsxs)(`div`, {
    className: `border-border-light flex h-32 w-full flex-col gap-2 rounded-2xl border p-4`,
    children: [
      (0, $.jsxs)(`div`, {
        className: `flex w-full items-start gap-3`,
        children: [
          (0, $.jsx)(De, { className: `h-10 w-10 shrink-0 rounded-xl` }),
          (0, $.jsxs)(`div`, {
            className: `min-w-0 flex-1 space-y-1.5`,
            children: [
              (0, $.jsx)(De, { className: `h-4 w-2/3` }),
              (0, $.jsx)(De, { className: `h-3 w-1/3` }),
            ],
          }),
        ],
      }),
      (0, $.jsx)(De, { className: `h-3 w-full` }),
      (0, $.jsx)(De, { className: `h-3 w-4/5` }),
    ],
  });
}
function zr({
  items: e,
  selectedIds: t,
  onToggle: n,
  onConfigure: r,
  view: i = `marketplace`,
  isLoadingSkills: a = !1,
  skillsInView: o = !1,
  favoriteKeys: s,
  onToggleFavorite: c,
  emptyKey: l,
  ariaLabel: u,
  statusFor: d,
}) {
  let f = X(),
    p = a && o;
  return e.length === 0 && !p
    ? (0, $.jsxs)(`div`, {
        role: `status`,
        className: `flex flex-col items-center justify-center py-16 text-center`,
        children: [
          (0, $.jsx)(x, {
            className: `text-text-tertiary size-8 opacity-40`,
            'aria-hidden': `true`,
          }),
          (0, $.jsx)(`p`, {
            className: `text-text-secondary mt-3 text-sm`,
            children: f(l ?? Lr[i]),
          }),
        ],
      })
    : (0, $.jsxs)(`ul`, {
        className: `grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3`,
        'aria-label': u ?? f(`com_ui_tools_marketplace`),
        'aria-busy': p,
        children: [
          e.map((e) =>
            (0, $.jsx)(
              `li`,
              {
                children: (0, $.jsx)(Fr, {
                  item: e,
                  selected: t.has(en(e)),
                  onToggle: n,
                  onConfigure: r,
                  isFavorited: s?.has(en(e)) ?? !1,
                  onToggleFavorite: c,
                  status: d?.(e),
                }),
              },
              en(e),
            ),
          ),
          p &&
            Array.from({ length: Ir }, (e, t) =>
              (0, $.jsx)(
                `li`,
                { 'aria-hidden': `true`, children: (0, $.jsx)(Rr, {}) },
                `skeleton:${t}`,
              ),
            ),
        ],
      });
}
function Br(e) {
  if (e.kind === `skill`) return e.skill.category;
}
function Vr(e, t) {
  if (!t) return !0;
  let n = t.toLowerCase();
  return e.name.toLowerCase().includes(n) || e.description.toLowerCase().includes(n);
}
function Hr(e, t) {
  return !t || t === `all` || e.kind === t;
}
function Ur(e, t) {
  return !t || t === `all` || Br(e) === t;
}
function Wr(e, t, n) {
  switch (t) {
    case `mine`:
      return e.ownedByUser === !0;
    case `favorites`:
      return n.favoritedIds?.has(en(e)) === !0;
    default:
      return !0;
  }
}
function Gr(e, t, n = {}) {
  return e.filter(
    (e) => Vr(e, t.search ?? ``) && Hr(e, t.kind) && Ur(e, t.category) && Wr(e, t.view, n),
  );
}
var Kr = [
    { value: `all`, labelKey: `com_ui_all_proper` },
    { value: `images`, labelKey: `com_ui_composer_files_images` },
    { value: `documents`, labelKey: `com_ui_composer_files_documents` },
  ],
  qr = [],
  Jr = (e) => e.type?.startsWith(`image/`) === !0,
  Yr = (e) => !Jr(e) && e.type?.startsWith(`audio/`) !== !0 && e.type?.startsWith(`video/`) !== !0;
function Xr(e) {
  return Jr(e)
    ? `image`
    : st(e.filename ?? ``, e.type ?? void 0, e.source) === `pdf`
      ? `pdf`
      : null;
}
function Zr(e) {
  let t = e.updatedAt ?? e.createdAt;
  return t == null
    ? ``
    : new Date(t).toLocaleDateString(void 0, { day: `numeric`, month: `short`, year: `numeric` });
}
function Qr({ file: e }) {
  let [t, n] = (0, Q.useState)(!1);
  return Jr(e) && !t && e.filepath
    ? (0, $.jsx)(`span`, {
        'aria-hidden': `true`,
        className: `bg-surface-tertiary size-10 shrink-0 overflow-hidden rounded-xl`,
        children: (0, $.jsx)(`img`, {
          src: At(e.filepath, G()),
          alt: ``,
          loading: `lazy`,
          onError: () => n(!0),
          className: `h-full w-full object-cover`,
        }),
      })
    : (0, $.jsx)(`span`, {
        'aria-hidden': `true`,
        className: `shrink-0`,
        children: (0, $.jsx)(we, {
          file: e,
          fileType: Jt(e.type),
          className: `size-10 rounded-xl`,
        }),
      });
}
var $r = (0, Q.memo)(function ({ file: e, onAttach: t, onPreview: n, disabled: r }) {
  let i = X(),
    a = e.filename ?? ``,
    o = [et(i, e.type ?? void 0, a), rt(e.bytes ?? 0)],
    s = Xr(e) != null;
  return (0, $.jsxs)(`div`, {
    className: `group border-border-light hover:border-border-medium hover:bg-surface-tertiary relative flex h-28 w-full flex-col overflow-hidden rounded-2xl border bg-transparent hover:shadow-xs`,
    children: [
      (0, $.jsxs)(`button`, {
        type: `button`,
        onClick: () => t(e),
        disabled: r,
        className: `focus-visible:ring-ring-primary flex h-full w-full cursor-pointer flex-col gap-2 rounded-2xl p-4 text-left focus:outline-hidden focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50`,
        children: [
          (0, $.jsxs)(`span`, {
            className: `flex w-full min-w-0 items-start gap-3`,
            children: [
              (0, $.jsx)(Qr, { file: e }),
              (0, $.jsxs)(`span`, {
                className: `flex min-w-0 flex-1 flex-col`,
                children: [
                  (0, $.jsx)(`span`, {
                    className: `text-text-primary truncate text-sm font-semibold`,
                    children: a,
                  }),
                  (0, $.jsx)(`span`, {
                    className: `text-text-secondary truncate text-xs`,
                    children: o.join(` · `),
                  }),
                ],
              }),
            ],
          }),
          (0, $.jsx)(`span`, { className: `text-text-secondary mt-auto text-xs`, children: Zr(e) }),
        ],
      }),
      s &&
        (0, $.jsx)(`span`, {
          className: `absolute right-2 bottom-2`,
          children: (0, $.jsx)(_e, {
            size: `xs`,
            shape: `square`,
            label: i(`com_ui_composer_preview_file`, { 0: a }),
            onClick: (t) => n(e, t.currentTarget),
            children: (0, $.jsx)(N, {
              className: `text-text-secondary h-4 w-4`,
              'aria-hidden': `true`,
            }),
          }),
        }),
    ],
  });
});
function ei({ loading: e, failed: t, onRetry: n, text: r }) {
  let i = X();
  return e
    ? (0, $.jsxs)(`div`, {
        role: `status`,
        className: `text-text-secondary flex items-center justify-center py-16`,
        children: [
          (0, $.jsx)(W, { size: 24 }),
          (0, $.jsx)(`span`, { className: `sr-only`, children: i(`com_ui_loading`) }),
        ],
      })
    : t
      ? (0, $.jsxs)(`div`, {
          className: `flex flex-col items-center justify-center gap-3 py-16 text-center`,
          children: [
            (0, $.jsx)(`p`, {
              role: `alert`,
              className: `text-text-secondary text-sm`,
              children: i(`com_ui_error_connection`),
            }),
            (0, $.jsx)(Y, {
              type: `button`,
              variant: `outline`,
              size: `sm`,
              onClick: n,
              children: i(`com_ui_retry`),
            }),
          ],
        })
      : (0, $.jsxs)(`div`, {
          role: `status`,
          className: `flex flex-col items-center justify-center py-16 text-center`,
          children: [
            (0, $.jsx)(x, {
              className: `text-text-tertiary size-8 opacity-40`,
              'aria-hidden': `true`,
            }),
            (0, $.jsx)(`p`, {
              className: `text-text-secondary mt-3 text-sm`,
              children: r ?? i(`com_ui_composer_no_results`),
            }),
          ],
        });
}
function ti({ query: e, view: t, onAttach: n, source: r, disabled: i, emptyText: a }) {
  let o = X(),
    s = Oe({ enabled: r == null }),
    c = r?.files ?? s.data ?? qr,
    l = r?.isLoading ?? s.isLoading,
    u = r?.isError ?? s.isError,
    d = r?.refetch ?? s.refetch,
    [f, p] = (0, Q.useState)(null),
    m = (0, Q.useRef)(null),
    h = (e, t) => {
      ((m.current = t), p(e));
    },
    g = (0, Q.useMemo)(
      () =>
        c.filter((n) =>
          e !== `` && n.filename?.toLowerCase().includes(e) !== !0
            ? !1
            : t === `images`
              ? Jr(n)
              : t !== `documents` || Yr(n),
        ),
      [c, e, t],
    ),
    _ = f == null ? null : Xr(f),
    { user: v } = Wt(),
    { refetch: y } = tn(v?.id, f?.file_id),
    { showToast: b } = J(),
    x = (0, Q.useRef)(() => void 0);
  x.current = (e) => {
    (b({ message: o(`com_ui_composer_preview_failed`, { 0: e.filename ?? `` }), status: `error` }),
      p(null));
  };
  let [S, C] = (0, Q.useState)();
  (0, Q.useEffect)(() => {
    if (_ !== `image` || f == null) return;
    let e,
      t = !1;
    return (
      y().then(({ data: n }) => {
        if (t) return;
        if (n != null) {
          ((e = URL.createObjectURL(n)), C(e));
          return;
        }
        let r = () => x.current(f);
        if (!f.filepath) {
          r();
          return;
        }
        let i = At(f.filepath, G()),
          a = new Image();
        ((a.onload = () => !t && C(i)), (a.onerror = () => !t && r()), (a.src = i));
      }),
      () => {
        ((t = !0), e != null && URL.revokeObjectURL(e), C(void 0));
      }
    );
  }, [_, f, y]);
  let w = (e) => {
    e || p(null);
  };
  return (0, $.jsxs)($.Fragment, {
    children: [
      g.length === 0
        ? (0, $.jsx)(ei, {
            loading: l,
            failed: u && c.length === 0,
            onRetry: () => void d(),
            text: a,
          })
        : (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(`p`, {
                className: `sr-only`,
                role: `status`,
                'aria-live': `polite`,
                children: o(`com_ui_search_results_count`, { count: g.length }),
              }),
              (0, $.jsx)(`ul`, {
                className: `grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3`,
                'aria-label': o(`com_ui_composer_files`),
                children: g.map((e) =>
                  (0, $.jsx)(
                    `li`,
                    {
                      children: (0, $.jsx)($r, { file: e, onAttach: n, onPreview: h, disabled: i }),
                    },
                    e.file_id,
                  ),
                ),
              }),
            ],
          }),
      (0, $.jsx)(ft, {
        isOpen: _ === `image` && S != null,
        onOpenChange: w,
        src: S,
        triggerRef: m,
        showDetails: !1,
        title: f?.filename ?? void 0,
        downloadImage: () => {
          S != null && Ie(S, f?.filename ?? `image`);
        },
      }),
      (0, $.jsx)(Ne, {
        open: _ === `pdf`,
        onOpenChange: w,
        fileName: f?.filename ?? ``,
        fileId: f?.file_id,
        filePath: f?.filepath,
        fileType: f?.type ?? void 0,
        fileSource: f?.source,
        fileSize: f?.bytes,
        deliveryPath: f?.llmDeliveryPath,
        triggerRef: m,
      }),
    ],
  });
}
var ni = [
    { value: `marketplace`, labelKey: `com_ui_all_proper` },
    { value: `mine`, labelKey: `com_ui_tools_view_made_by_you` },
    { value: `favorites`, labelKey: `com_ui_tools_view_favorites` },
  ],
  ri = { skill: `com_ui_skills`, mcp: `com_ui_mcp_servers`, files: `com_ui_composer_files` },
  ii = {
    skill: `com_ui_composer_search_skills`,
    mcp: `com_ui_composer_search_mcp`,
    files: `com_ui_composer_search_files`,
  },
  ai = {
    skill: `com_ui_skills_filter`,
    mcp: `com_ui_composer_mcp_filter`,
    files: `com_ui_composer_files_filter`,
  };
function oi(e) {
  return e.section === `skill`
    ? e.skill == null
      ? null
      : {
          kind: `skill`,
          id: e.itemId,
          name: e.label,
          description: e.description ?? ``,
          iconKey: `skill`,
          skill: e.skill,
          ownedByUser: e.ownedByUser,
        }
    : e.section === `mcp`
      ? {
          kind: `mcp`,
          id: e.itemId,
          name: e.label,
          description: e.description ?? ``,
          iconKey: `mcp`,
          ownedByUser: e.ownedByUser,
          toolCount: 0,
          server: {
            serverName: e.itemId,
            tools: [],
            isConfigured: !0,
            isConnected: !0,
            metadata: { name: e.label, pluginKey: e.itemId, icon: e.iconUrl },
          },
        }
      : null;
}
var si = (e, ...t) => e === `` || t.some((t) => t?.toLowerCase().includes(e) === !0);
function ci({ section: e, entries: t, query: n, view: r }) {
  let i = X(),
    { favoriteKeys: a, toggle: o } = mt(),
    {
      items: s,
      selectedIds: c,
      byKey: l,
    } = (0, Q.useMemo)(() => {
      let i = [],
        o = new Set(),
        s = new Map();
      for (let c of t) {
        if (c.section !== e || !si(n, c.label, c.description)) continue;
        let t = oi(c);
        if (t == null || !Wr(t, r, { favoritedIds: a })) continue;
        let l = en(t);
        (i.push(t), s.set(l, c), c.active && o.add(l));
      }
      return { items: i, selectedIds: o, byKey: s };
    }, [t, e, n, r, a]);
  return (0, $.jsx)(zr, {
    items: s,
    selectedIds: c,
    onToggle: (e) => l.get(en(e))?.onSelect(),
    view: r,
    statusFor: (e) => l.get(en(e))?.status,
    favoriteKeys: a,
    onToggleFavorite: o,
    emptyKey: r === `marketplace` || n !== `` ? `com_ui_composer_no_results` : void 0,
    ariaLabel: i(ri[e]),
  });
}
function li({
  title: e,
  searchLabel: t,
  search: n,
  onSearchChange: r,
  filterLabel: i,
  viewOptions: a,
  view: o,
  onViewChange: s,
  children: c,
}) {
  let l = (0, Q.useId)();
  return (0, $.jsx)(H, {
    className: `flex h-[80vh] max-h-[720px] w-11/12 max-w-[960px] flex-col overflow-hidden`,
    children: (0, $.jsxs)(`div`, {
      className: `flex h-full min-h-0 min-w-0 flex-col gap-3`,
      children: [
        (0, $.jsx)(K, { children: e }),
        (0, $.jsx)(Te, { className: `sr-only`, children: t }),
        (0, $.jsxs)(`div`, {
          className: `-mr-5 -ml-1 min-h-0 flex-1 overflow-y-auto pr-5 pl-1`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `bg-surface-dialog sticky top-0 z-10 flex flex-wrap items-center gap-2 pt-1 pb-3`,
              children: [
                (0, $.jsx)(`div`, {
                  className: `min-w-0 flex-1`,
                  children: (0, $.jsx)(Ut, {
                    type: `search`,
                    value: n,
                    onChange: (e) => r(e.target.value),
                    placeholder: t,
                    'aria-label': t,
                  }),
                }),
                (0, $.jsx)(Vt, { id: l, className: `sr-only`, children: i }),
                (0, $.jsx)(Qt, {
                  wrap: !0,
                  options: a,
                  value: o,
                  onChange: s,
                  'aria-labelledby': l,
                }),
              ],
            }),
            c,
          ],
        }),
      ],
    }),
  });
}
function ui({ section: e, onClose: t, entries: n, onAttach: r, returnFocusRef: i }) {
  let a = X(),
    [o, s] = (0, Q.useState)(``),
    [c, l] = (0, Q.useState)(`marketplace`),
    [u, d] = (0, Q.useState)(`all`),
    [f, p] = (0, Q.useState)(e);
  e !== f && (p(e), e != null && (s(``), l(`marketplace`), d(`all`)));
  let m = e ?? f,
    h = (0, Q.useMemo)(
      () => (m === `files` ? Kr : ni).map((e) => ({ value: e.value, label: a(e.labelKey) })),
      [m, a],
    ),
    g = o.trim().toLowerCase(),
    _ = (0, Q.useRef)(null);
  return (
    (0, Q.useEffect)(() => {
      if (e == null) return;
      let t = (e) => {
        _.current = e ? null : i.current;
      };
      t(window.matchMedia(`(pointer: coarse)`).matches);
      let n = (e) => t(e.pointerType !== `mouse`),
        r = () => t(!1);
      return (
        window.addEventListener(`pointerdown`, n, !0),
        window.addEventListener(`keydown`, r, !0),
        () => {
          (window.removeEventListener(`pointerdown`, n, !0),
            window.removeEventListener(`keydown`, r, !0));
        }
      );
    }, [e, i]),
    (0, $.jsx)(Z, {
      open: e != null,
      triggerRef: _,
      onOpenChange: (e) => {
        e || t();
      },
      children:
        m != null &&
        (0, $.jsx)(li, {
          title: a(ri[m]),
          searchLabel: a(ii[m]),
          search: o,
          onSearchChange: s,
          filterLabel: a(ai[m]),
          viewOptions: h,
          view: m === `files` ? u : c,
          onViewChange: (e) => (m === `files` ? d(e) : l(e)),
          children:
            m === `files`
              ? (0, $.jsx)(ti, { query: g, view: u, onAttach: r })
              : (0, $.jsx)(ci, { section: m, entries: n, query: g, view: c }),
        }),
    })
  );
}
function di({ open: e, onOpenChange: t, onCreated: n, children: r, triggerRef: i }) {
  let a = X(),
    o = (0, Q.useId)(),
    s = (0, Q.useRef)(null),
    [c, l] = (0, Q.useState)(``),
    [u, d] = (0, Q.useState)(``),
    f = Ce(),
    { data: p } = yt(),
    m = p?.projects?.maxDescriptionLength ?? 1e3,
    { showToast: h } = J();
  (0, Q.useEffect)(() => {
    if (!e) return;
    let t = requestAnimationFrame(() => s.current?.focus());
    return () => cancelAnimationFrame(t);
  }, [e]);
  let g = () => {
    (l(``), d(``));
  };
  return (0, $.jsxs)(Z, {
    open: e,
    onOpenChange: (e) => {
      (t(e), !e && !f.isLoading && g());
    },
    triggerRef: i,
    children: [
      r,
      (0, $.jsx)(kt, {
        title: a(`com_ui_create_project`),
        showCloseButton: !1,
        className: `w-11/12 max-w-md`,
        main: (0, $.jsxs)(`form`, {
          id: o,
          onSubmit: async (e) => {
            e.preventDefault();
            let r = c.trim();
            if (!(!r || f.isLoading))
              try {
                let e = u.trim(),
                  i = await f.mutateAsync({ name: r, ...(e ? { description: e } : {}) });
                (g(), t(!1), n?.(i));
              } catch {
                h({ message: a(`com_ui_project_create_error`), status: `error` });
              }
          },
          className: `flex flex-col gap-4`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `space-y-2`,
              children: [
                (0, $.jsx)(Vt, {
                  htmlFor: `${o}-name`,
                  className: `text-text-primary text-sm font-medium`,
                  children: a(`com_ui_project_name`),
                }),
                (0, $.jsx)(Ut, {
                  id: `${o}-name`,
                  ref: s,
                  value: c,
                  onChange: (e) => l(e.target.value),
                  placeholder: a(`com_ui_project_name_placeholder`),
                  maxLength: 100,
                  className: `w-full`,
                }),
              ],
            }),
            (0, $.jsxs)(`div`, {
              className: `space-y-2`,
              children: [
                (0, $.jsxs)(Vt, {
                  htmlFor: `${o}-description`,
                  className: `text-text-primary text-sm font-medium`,
                  children: [
                    a(`com_ui_description`),
                    ` `,
                    (0, $.jsx)(`span`, {
                      className: `text-text-secondary font-normal`,
                      children: a(`com_ui_optional`),
                    }),
                  ],
                }),
                (0, $.jsx)(Nt, {
                  id: `${o}-description`,
                  value: u,
                  onChange: (e) => d(e.target.value),
                  rows: 3,
                  maxLength: m,
                  className: `min-h-[4.5rem] bg-transparent`,
                }),
              ],
            }),
          ],
        }),
        buttons: (0, $.jsx)(Y, {
          type: `submit`,
          form: o,
          variant: `submit`,
          disabled: !c.trim() || f.isLoading,
          'aria-label': a(`com_ui_create_project`),
          className: `active:scale-[0.96]`,
          children: f.isLoading
            ? (0, $.jsx)(W, { className: `size-4` })
            : a(`com_ui_create_project`),
        }),
      }),
    ],
  });
}
function fi({ open: e, onOpenChange: t, project: n, triggerRef: r }) {
  let i = X(),
    a = pe(),
    o = me(),
    s = Zt(),
    { showToast: c } = J();
  return (0, $.jsx)(Z, {
    open: e,
    onOpenChange: t,
    triggerRef: r,
    children: (0, $.jsxs)(H, {
      className: `w-11/12 max-w-md`,
      showCloseButton: !1,
      children: [
        (0, $.jsx)(Dt, { children: (0, $.jsx)(K, { children: i(`com_ui_delete_project`) }) }),
        (0, $.jsx)(`div`, {
          className: `text-text-secondary text-sm`,
          children: i(`com_ui_delete_project_confirm`, { name: n.name }),
        }),
        (0, $.jsxs)(`div`, {
          className: `flex justify-end gap-4 pt-4`,
          children: [
            (0, $.jsx)(Ke, {
              asChild: !0,
              children: (0, $.jsx)(Y, {
                'aria-label': i(`com_ui_cancel`),
                variant: `outline`,
                children: i(`com_ui_cancel`),
              }),
            }),
            (0, $.jsx)(Y, {
              variant: `destructive`,
              onClick: () => {
                s.mutate(n._id, {
                  onSuccess: () => {
                    (t(!1), o.pathname === `/projects/${n._id}` && a(`/projects`));
                  },
                  onError: () =>
                    c({
                      message: i(`com_ui_project_delete_error`),
                      severity: q.ERROR,
                      showIcon: !0,
                    }),
                });
              },
              disabled: s.isLoading,
              children: s.isLoading ? (0, $.jsx)(W, { className: `size-4` }) : i(`com_ui_delete`),
            }),
          ],
        }),
      ],
    }),
  });
}
function pi({
  project: e,
  onDone: t,
  layout: n = `workspace`,
  inputRef: r,
  initialField: i = `name`,
  updateProject: a,
  savingRef: o,
}) {
  let s = X(),
    c = V(),
    l = a ?? c,
    { data: u } = yt(),
    d = u?.projects?.maxDescriptionLength ?? 1e3,
    { showToast: f } = J(),
    p = (0, Q.useRef)(!1),
    m = o ?? p,
    h = (0, Q.useRef)(null),
    {
      register: g,
      handleSubmit: _,
      setFocus: v,
      formState: { errors: y },
    } = ln({ defaultValues: { name: e.name, description: e.description ?? `` } }),
    b = g(`name`, {
      validate: (e) => e.trim().length > 0 || s(`com_ui_field_required`),
      maxLength: {
        value: 100,
        message: s(`com_ui_field_max_length`, { field: s(`com_ui_project_name`), length: 100 }),
      },
    }),
    x = g(`description`, {
      maxLength: {
        value: d,
        message: s(`com_ui_field_max_length`, { field: s(`com_ui_description`), length: d }),
      },
    }),
    S = l.isLoading,
    C = n === `workspace`,
    w = C ? `sr-only` : void 0,
    T = C ? `sm` : `default`,
    E = `project-editor-${e._id}-name`,
    D = `project-editor-${e._id}-description`,
    O = `${E}-error`,
    k = `${D}-error`;
  (0, Q.useEffect)(() => {
    let e = () => v(i),
      t = h.current?.closest(`[inert]`);
    if (!t) {
      e();
      return;
    }
    let n = new MutationObserver(() => {
      h.current?.closest(`[inert]`) || (n.disconnect(), e());
    });
    return (n.observe(t, { attributes: !0, attributeFilter: [`inert`] }), () => n.disconnect());
  }, [i, v]);
  let A = (e) => {
    (b.ref(e), (h.current = e), r && (r.current = e));
  };
  return (0, $.jsxs)(`form`, {
    onSubmit: _(({ name: n, description: r }) => {
      if (m.current || l.isLoading) return;
      let i = n.trim(),
        a = r.trim();
      if (i) {
        if (i === e.name && a === (e.description ?? ``).trim()) {
          t();
          return;
        }
        ((m.current = !0),
          l.mutate(
            { projectId: e._id, name: i, description: a },
            {
              onSuccess: () => {
                ((m.current = !1), t());
              },
              onError: () => {
                ((m.current = !1),
                  f({
                    message: s(`com_ui_project_rename_error`),
                    severity: q.ERROR,
                    showIcon: !0,
                  }));
              },
            },
          ));
      }
    }),
    onKeyDown: (e) => {
      e.key === `Escape` &&
        (e.preventDefault(), e.stopPropagation(), !m.current && !l.isLoading && t());
    },
    'aria-busy': S,
    className: B(`flex w-full min-w-0 flex-col`, C ? `gap-4` : `gap-3`),
    children: [
      (0, $.jsxs)(`div`, {
        className: B(
          `min-w-0`,
          C
            ? `grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-3 gap-y-3`
            : `flex flex-col gap-4`,
        ),
        children: [
          C
            ? (0, $.jsx)(`span`, {
                className: `bg-surface-secondary text-text-secondary flex size-12 shrink-0 items-center justify-center rounded-2xl`,
                'aria-hidden': `true`,
                children: (0, $.jsx)(P, { className: `size-6`, 'aria-hidden': `true` }),
              })
            : null,
          (0, $.jsxs)(`div`, {
            className: B(`w-full min-w-0`, !C && `space-y-2`),
            children: [
              (0, $.jsx)(Vt, { htmlFor: E, className: w, children: s(`com_ui_project_name`) }),
              (0, $.jsx)(Ut, {
                ...b,
                ref: A,
                id: E,
                required: !0,
                readOnly: S,
                maxLength: 100,
                'aria-invalid': y.name ? `true` : `false`,
                'aria-describedby': y.name ? O : void 0,
                variant: C ? `title` : void 0,
                className: `w-full max-w-full min-w-0 overflow-hidden wrap-anywhere`,
              }),
              y.name
                ? (0, $.jsx)(`p`, {
                    id: O,
                    role: `alert`,
                    className: `text-text-destructive mt-1 text-xs`,
                    children: y.name.message,
                  })
                : null,
            ],
          }),
          (0, $.jsxs)(`div`, {
            className: B(`w-full min-w-0`, C ? `col-span-2` : `space-y-2`),
            children: [
              (0, $.jsxs)(Vt, {
                htmlFor: D,
                className: w,
                children: [
                  s(`com_ui_description`),
                  ` `,
                  (0, $.jsx)(`span`, {
                    className: B(!C && `text-text-secondary font-normal`),
                    children: s(`com_ui_optional`),
                  }),
                ],
              }),
              (0, $.jsx)(Nt, {
                ...x,
                id: D,
                rows: 3,
                readOnly: S,
                maxLength: d,
                'aria-invalid': y.description ? `true` : `false`,
                'aria-describedby': y.description ? k : void 0,
                variant: `transparent`,
                className: B(
                  `w-full max-w-full min-w-0 resize-none overflow-y-auto wrap-anywhere`,
                  C ? `h-24 max-h-32` : `h-24 max-h-40`,
                ),
              }),
              y.description
                ? (0, $.jsx)(`p`, {
                    id: k,
                    role: `alert`,
                    className: `text-text-destructive mt-1 text-xs`,
                    children: y.description.message,
                  })
                : null,
            ],
          }),
        ],
      }),
      (0, $.jsxs)(`div`, {
        className: B(`flex min-w-0 justify-end`, C ? `gap-2` : `gap-4 pt-2`),
        children: [
          (0, $.jsx)(Y, {
            type: `button`,
            variant: `outline`,
            size: T,
            onClick: t,
            disabled: S,
            children: s(`com_ui_cancel`),
          }),
          (0, $.jsx)(Y, {
            type: `submit`,
            variant: `submit`,
            size: T,
            disabled: S,
            'aria-label': s(`com_ui_save`),
            children: S ? (0, $.jsx)(W, { className: `size-4` }) : s(`com_ui_save`),
          }),
        ],
      }),
    ],
  });
}
function mi({ open: e, onOpenChange: t, project: n, triggerRef: r }) {
  let i = X(),
    a = V(),
    o = (0, Q.useRef)(!1),
    s = () => o.current || a.isLoading;
  return (0, $.jsx)(Z, {
    open: e,
    onOpenChange: (e) => {
      (e || !s()) && t(e);
    },
    triggerRef: r,
    children: (0, $.jsxs)(H, {
      className: `w-11/12 max-w-md`,
      showCloseButton: !1,
      onEscapeKeyDown: (e) => {
        s() && e.preventDefault();
      },
      onInteractOutside: (e) => {
        s() && e.preventDefault();
      },
      children: [
        (0, $.jsx)(Dt, { children: (0, $.jsx)(K, { children: i(`com_ui_edit_project`) }) }),
        e
          ? (0, $.jsx)(pi, {
              project: n,
              layout: `dialog`,
              updateProject: a,
              savingRef: o,
              onDone: () => t(!1),
            })
          : null,
      ],
    }),
  });
}
export {
  Sn as A,
  Fn as C,
  gn as D,
  vn as E,
  yn as M,
  hn as O,
  zn as S,
  _n as T,
  ur as _,
  ui as a,
  Xn as b,
  ti as c,
  Ar as d,
  Er as f,
  vr as g,
  Cr as h,
  di as i,
  bn as j,
  wn as k,
  Gr as l,
  wr as m,
  pi as n,
  li as o,
  Tr as p,
  fi as r,
  Kr as s,
  mi as t,
  zr as u,
  ir as v,
  pn as w,
  Kn as x,
  Qn as y,
};
