import { o as e } from './rolldown-runtime.C0FnF6B9.js';
import { at as t, rt as n } from './advanced-inputs.BJDnsHUg.js';
import {
  Aa as r,
  Ft as i,
  Gn as a,
  Ir as o,
  Ln as s,
  Mi as c,
  Na as l,
  Or as u,
  Qn as d,
  Qt as f,
  R as p,
  Yn as m,
  as as h,
  ca as g,
  ci as _,
  ii as v,
  oo as y,
  qt as b,
  ri as x,
  sa as S,
  si as C,
  sr as w,
  ui as ee,
  xi as te,
  xr as ne,
} from './vendor.DpBpdTS1.js';
import { d as re, h as ie, p as ae } from './routing.DYGR6PKW.js';
import { r as oe } from './query-devtools.C2qG3_c-.js';
import {
  Ad as se,
  Ah as T,
  An as ce,
  B as E,
  C_ as D,
  Dd as le,
  Dm as O,
  Dn as ue,
  Ed as de,
  En as fe,
  Gd as pe,
  Gg as me,
  H_ as k,
  Jf as he,
  K_ as A,
  Od as ge,
  Qn as _e,
  Qy as j,
  Rg as M,
  Rh as N,
  Sd as ve,
  Ss as P,
  T_ as F,
  Td as I,
  Uv as ye,
  Vb as be,
  Vg as xe,
  Wg as Se,
  Wm as Ce,
  Wv as L,
  Xv as R,
  Xy as we,
  Yv as Te,
  Zc as Ee,
  _d as De,
  br as z,
  bu as B,
  bv as V,
  cg as H,
  ef as Oe,
  fb as ke,
  jd as U,
  kl as W,
  m_ as Ae,
  nv as G,
  pv as je,
  qh as Me,
  qy as Ne,
  s_ as K,
  vs as Pe,
  w_ as q,
  wg as Fe,
  xd as Ie,
} from './hooks.CliY9jTn.js';
import { a as Le } from './shared-libs.CKPm2yyl.js';
import { i as Re, n as J, r as ze, t as Y } from './virtualization.CT5gCaFG.js';
import {
  C as X,
  S as Be,
  b as Z,
  c as Ve,
  h as He,
  i as Ue,
  n as We,
  o as Ge,
  r as Ke,
  s as qe,
  t as Je,
  y as Ye,
} from './ProjectEditDialog.CTFF-IcJ.js';
import { n as Xe } from './utilities.Ce8HPfek.js';
import { i as Ze } from './forms.UHk3QTvM.js';
var Q = e(t(), 1),
  $ = n();
function Qe(e, t) {
  return function ({ className: n, ...r }) {
    return (0, $.jsxs)(`div`, {
      ...r,
      className: T(n, `justify-between gap-5`),
      children: [
        (0, $.jsx)(`span`, { className: `truncate`, children: e }),
        t
          ? (0, $.jsx)(g, {
              className: `text-text-primary h-4 w-4 shrink-0`,
              'aria-hidden': `true`,
            })
          : (0, $.jsx)(`span`, { className: `h-4 w-4 shrink-0`, 'aria-hidden': `true` }),
      ],
    });
  };
}
function $e({ sortBy: e, onSortChange: t }) {
  let n = W(),
    i = (0, Q.useId)(),
    [a, o] = (0, Q.useState)(!1),
    s = (0, Q.useMemo)(
      () => [
        { value: `lastConversationAt`, label: n(`com_ui_latest_activity`) },
        { value: `createdAt`, label: n(`com_ui_sort_created`) },
        { value: `name`, label: n(`com_ui_name`) },
      ],
      [n],
    ),
    c = s.find((t) => t.value === e)?.label ?? n(`com_ui_latest_activity`),
    l = (0, Q.useMemo)(
      () =>
        s.map((n) => {
          let r = e === n.value;
          return {
            id: `project-sort-${n.value}`,
            ariaLabel: n.label,
            ariaChecked: r,
            onClick: () => t(n.value),
            render: Qe(n.label, r),
          };
        }),
      [t, e, s],
    );
  return (0, $.jsx)(M, {
    portal: !0,
    focusLoop: !0,
    unmountOnHide: !0,
    menuId: i,
    isOpen: a,
    setIsOpen: o,
    className: `z-[125]`,
    minWidth: `14rem`,
    trigger: (0, $.jsxs)(y, {
      'aria-label': n(`com_ui_sort_projects_by`),
      className: T(
        `border-border-light text-text-secondary inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-full border px-3 text-xs font-medium transition-colors`,
        `hover:bg-surface-hover hover:text-text-primary`,
        `focus-visible:ring-text-primary focus-visible:ring-2 focus-visible:outline-hidden`,
        a && `bg-surface-hover text-text-primary`,
      ),
      children: [
        (0, $.jsx)(r, { className: `size-3.5 shrink-0`, 'aria-hidden': `true` }),
        (0, $.jsx)(`span`, { className: `truncate`, children: c }),
      ],
    }),
    items: l,
  });
}
function et({ onCreate: e, search: t, onSearchChange: n }) {
  let r = W(),
    i = Pe();
  return (0, $.jsx)(`header`, {
    className: `border-border-light bg-surface-primary-alt sticky top-0 z-10 border-b`,
    children: (0, $.jsxs)(`div`, {
      className: `flex min-h-14 w-full flex-wrap items-center gap-3 px-4 py-2.5 md:flex-nowrap md:px-6`,
      children: [
        i ? (0, $.jsx)(P, { className: `size-9 shrink-0` }) : null,
        (0, $.jsx)(`h1`, { className: `sr-only`, children: r(`com_ui_projects`) }),
        (0, $.jsx)(me, {
          inputId: `projects-search`,
          type: `text`,
          value: t,
          onChange: (e) => n(e.target.value),
          label: r(`com_ui_search_projects`),
          containerClassName: `order-last w-full min-w-0 md:order-none md:w-auto md:max-w-md md:flex-1`,
        }),
        (0, $.jsx)(`div`, {
          className: `ml-auto flex shrink-0 items-center gap-2`,
          children: (0, $.jsxs)(H, {
            type: `button`,
            variant: `default`,
            size: `sm`,
            shape: `round`,
            onClick: e,
            className: `shrink-0`,
            children: [
              (0, $.jsx)(s, { className: `size-4`, 'aria-hidden': `true` }),
              r(`com_ui_new_project`),
            ],
          }),
        }),
      ],
    }),
  });
}
function tt(e) {
  let t = e.lastConversationAt ?? e.updatedAt ?? e.createdAt;
  if (!t) return null;
  let n = new Date(t);
  return Number.isNaN(n.getTime())
    ? null
    : n.toLocaleDateString(void 0, { month: `short`, day: `numeric`, year: `numeric` });
}
function nt({ project: e, onOpen: t }) {
  let n = W(),
    r = (0, Q.useId)(),
    i = (0, Q.useRef)(null),
    o = (0, Q.useRef)(null),
    [s, l] = (0, Q.useState)(!1),
    u = (e, t) => {
      (e(t), t || l(!1));
    },
    [d, p] = (0, Q.useState)(!1),
    [m, h] = (0, Q.useState)(!1),
    g = tt(e),
    _ = (0, Q.useMemo)(
      () => [
        {
          id: `${r}-edit`,
          label: n(`com_ui_edit_project`),
          icon: (0, $.jsx)(a, { className: `text-text-secondary size-4`, 'aria-hidden': `true` }),
          onClick: () => p(!0),
          hideOnClick: !1,
          ref: i,
          render: (e) => (0, $.jsx)(`button`, { ...e }),
        },
        {
          id: `${r}-delete`,
          label: n(`com_ui_delete`),
          icon: (0, $.jsx)(f, { className: `text-text-secondary size-4`, 'aria-hidden': `true` }),
          onClick: () => h(!0),
          hideOnClick: !1,
          ref: o,
          render: (e) => (0, $.jsx)(`button`, { ...e }),
        },
      ],
      [n, r],
    );
  return (0, $.jsxs)(`article`, {
    className: T(
      `group/project border-border-light bg-surface-secondary relative flex min-h-[8.5rem] max-w-full min-w-0 flex-col rounded-2xl border`,
      `hover:border-border-medium hover:bg-surface-hover transition-colors duration-150 ease-out motion-reduce:transition-none`,
      s && `bg-surface-hover`,
    ),
    children: [
      (0, $.jsxs)(H, {
        type: `button`,
        variant: `card`,
        size: `tile`,
        className: `min-h-[8.5rem] w-full max-w-full min-w-0 flex-1 flex-col items-stretch`,
        onClick: () => t(e._id),
        children: [
          (0, $.jsx)(`span`, {
            className: `bg-surface-tertiary text-text-secondary group-hover/project:text-text-primary flex size-9 shrink-0 items-center justify-center rounded-xl transition-colors`,
            children: (0, $.jsx)(x, { className: `size-4`, 'aria-hidden': `true` }),
          }),
          (0, $.jsx)(`span`, {
            className: `text-text-primary mt-2.5 line-clamp-2 max-w-full min-w-0 text-sm font-semibold tracking-tight wrap-anywhere md:line-clamp-1`,
            children: e.name,
          }),
          e.description
            ? (0, $.jsx)(`span`, {
                className: `text-text-secondary mt-1 line-clamp-2 max-w-full min-w-0 text-sm leading-relaxed text-pretty wrap-anywhere`,
                children: e.description,
              })
            : null,
          (0, $.jsxs)(`span`, {
            className: `text-text-secondary mt-auto flex max-w-full min-w-0 items-center gap-2 pt-3 text-xs tabular-nums`,
            children: [
              (0, $.jsx)(`span`, {
                children:
                  e.conversationCount === 1
                    ? n(`com_ui_project_chat_count_single`)
                    : n(`com_ui_project_chat_count`, { count: e.conversationCount }),
              }),
              g
                ? (0, $.jsxs)($.Fragment, {
                    children: [
                      (0, $.jsx)(`span`, { 'aria-hidden': `true`, children: `·` }),
                      (0, $.jsx)(`time`, {
                        dateTime: e.lastConversationAt ?? e.updatedAt ?? e.createdAt,
                        children: g,
                      }),
                    ],
                  })
                : null,
            ],
          }),
        ],
      }),
      (0, $.jsx)(`div`, {
        className: `absolute top-2 right-2`,
        children: (0, $.jsx)(M, {
          portal: !0,
          focusLoop: !0,
          unmountOnHide: !0,
          menuId: r,
          isOpen: s,
          setIsOpen: l,
          className: `z-[125]`,
          minWidth: `11rem`,
          iconClassName: `mr-2 text-text-secondary`,
          trigger: (0, $.jsx)(y, {
            'aria-label': n(`com_ui_more_options`),
            className: T(
              V({ variant: `row-action`, size: `icon-sm` }),
              `text-text-secondary rounded-lg`,
              s && `bg-surface-hover-alt text-text-primary`,
            ),
            children: (0, $.jsx)(c, { className: `h-4 w-4`, 'aria-hidden': `true` }),
          }),
          items: _,
        }),
      }),
      (0, $.jsx)(Je, { open: d, onOpenChange: (e) => u(p, e), project: e, triggerRef: i }),
      (0, $.jsx)(Ke, { open: m, onOpenChange: (e) => u(h, e), project: e, triggerRef: o }),
    ],
  });
}
function rt() {
  return (0, $.jsx)(`div`, {
    className: `grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-3`,
    'aria-hidden': `true`,
    children: Array.from({ length: 6 }, (e, t) =>
      (0, $.jsxs)(
        `div`,
        {
          className: `bg-surface-secondary flex min-h-[8.5rem] flex-col rounded-2xl p-4`,
          children: [
            (0, $.jsx)(k, { className: `size-9 rounded-xl` }),
            (0, $.jsx)(k, { className: `mt-3 h-5 w-2/3` }),
            (0, $.jsx)(k, { className: `mt-2 h-4 w-full` }),
            (0, $.jsx)(k, { className: `mt-auto h-3 w-24` }),
          ],
        },
        t,
      ),
    ),
  });
}
function it() {
  let e = W(),
    t = re(),
    [n, r] = ie(),
    [i, a] = (0, Q.useState)(``),
    [o, s] = (0, Q.useState)(`lastConversationAt`),
    [c, l] = (0, Q.useState)(n.get(`new`) === `1`),
    u = (0, Q.useDeferredValue)(i),
    d = (0, Q.useRef)(null),
    [f, p] = (0, Q.useState)(null),
    {
      data: m,
      fetchNextPage: h,
      hasNextPage: g,
      isFetching: _,
      isFetchingNextPage: v,
      isLoading: y,
    } = U({ search: u || void 0, sortBy: o, sortDirection: o === `name` ? `asc` : `desc` }),
    b = (0, Q.useMemo)(() => m?.pages.flatMap((e) => e.projects) ?? [], [m?.pages]);
  (0, Q.useEffect)(() => {
    n.get(`new`) === `1` && l(!0);
  }, [n]);
  let x = (e) => {
      if ((l(e), !e && n.get(`new`) === `1`)) {
        let e = new URLSearchParams(n);
        (e.delete(`new`), r(e, { replace: !0 }));
      }
    },
    S = (0, Q.useCallback)(() => {
      g === !0 && !_ && h({ cancelRefetch: !1 });
    }, [h, g, _]);
  return (
    (0, Q.useEffect)(() => {
      let e = d.current;
      if (f == null || e == null) return;
      let t = new IntersectionObserver(
        ([e]) => {
          e.isIntersecting && S();
        },
        { root: e, rootMargin: `600px 0px` },
      );
      return (t.observe(f), () => t.disconnect());
    }, [S, f]),
    (0, $.jsxs)(`main`, {
      ref: d,
      className: `bg-surface-primary-alt text-text-primary flex h-full min-h-0 flex-col overflow-auto`,
      children: [
        (0, $.jsx)(et, { onCreate: () => l(!0), search: i, onSearchChange: a }),
        (0, $.jsxs)(`div`, {
          className: `flex w-full flex-1 flex-col px-4 pt-3 pb-10 md:px-6 md:pt-4`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `flex min-h-8 items-center justify-between gap-3`,
              children: [
                (0, $.jsx)(`h2`, {
                  className: `text-text-primary text-sm font-medium`,
                  children: e(`com_ui_your_projects`),
                }),
                !y && b.length > 0 ? (0, $.jsx)($e, { sortBy: o, onSortChange: s }) : null,
              ],
            }),
            (0, $.jsx)(Ue, { open: c, onOpenChange: x, onCreated: (e) => t(`/projects/${e._id}`) }),
            (0, $.jsxs)(`div`, {
              className: `mt-4 flex flex-1 flex-col`,
              children: [
                y && (0, $.jsx)(rt, {}),
                !y &&
                  b.length > 0 &&
                  (0, $.jsx)(`div`, {
                    className: `grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-3`,
                    children: b.map((e) =>
                      (0, $.jsx)(nt, { project: e, onOpen: (e) => t(`/projects/${e}`) }, e._id),
                    ),
                  }),
                !y &&
                  b.length === 0 &&
                  (0, $.jsxs)(`div`, {
                    className: `bg-surface-secondary flex flex-1 flex-col items-center justify-center rounded-2xl px-6 py-16 text-center`,
                    children: [
                      (0, $.jsx)(`span`, {
                        className: `bg-surface-tertiary text-text-secondary flex h-14 w-14 items-center justify-center rounded-2xl`,
                        children: (0, $.jsx)(C, { className: `h-7 w-7`, 'aria-hidden': `true` }),
                      }),
                      (0, $.jsx)(`h3`, {
                        className: `text-text-primary mt-4 text-base font-semibold text-balance`,
                        children: e(i ? `com_ui_no_matching_projects` : `com_ui_no_projects`),
                      }),
                      i
                        ? null
                        : (0, $.jsxs)($.Fragment, {
                            children: [
                              (0, $.jsx)(`p`, {
                                className: `text-text-secondary mt-1 max-w-sm text-sm text-pretty`,
                                children: e(`com_ui_add_first_project`),
                              }),
                              (0, $.jsxs)(H, {
                                type: `button`,
                                variant: `default`,
                                size: `sm`,
                                className: `mt-5`,
                                onClick: () => l(!0),
                                children: [
                                  (0, $.jsx)(C, { className: `h-4 w-4`, 'aria-hidden': `true` }),
                                  e(`com_ui_new_project`),
                                ],
                              }),
                            ],
                          }),
                    ],
                  }),
              ],
            }),
            g &&
              (0, $.jsx)(`div`, {
                ref: p,
                className: `text-text-primary flex h-16 shrink-0 items-center justify-center`,
                role: `status`,
                'aria-live': `polite`,
                'aria-label': e(`com_ui_loading`),
                children: v ? (0, $.jsx)(A, { className: `size-5` }) : null,
              }),
          ],
        }),
      ],
    })
  );
}
var at = (e) => {
  let { response: t } = e ?? {};
  return t?.status === 409 && t.data?.code === `CHAT_PROJECT_CONFLICT`;
};
function ot({ open: e, onOpenChange: t, project: n, triggerRef: r }) {
  let i = W(),
    a = (0, Q.useId)(),
    { data: s } = Oe(),
    c = s?.projects?.maxInstructionsLength ?? 16e3,
    l = oe(),
    u = de(),
    { showToast: d } = L(),
    f = (0, Q.useRef)(0),
    p = (0, Q.useRef)(e),
    m = (0, Q.useRef)(!1),
    {
      register: h,
      handleSubmit: g,
      reset: _,
      watch: v,
      setFocus: y,
    } = Ze({ defaultValues: { instructions: n.instructions ?? `` } }),
    b = v(`instructions`),
    x = u.isLoading;
  return (
    (0, Q.useEffect)(() => {
      (e && !p.current && (f.current += 1),
        (p.current = e),
        e || (m.current = !1),
        e && !m.current && _({ instructions: n.instructions ?? `` }));
    }, [e, n.instructions, _]),
    (0, $.jsx)(Fe, {
      open: e,
      onOpenChange: (e) => {
        (!e && x) || t(e);
      },
      triggerRef: r,
      children: (0, $.jsx)(Ae, {
        title: i(`com_ui_project_instructions`),
        showCloseButton: !1,
        cancelDisabled: x,
        className: `w-11/12 max-w-3xl`,
        onOpenAutoFocus: (e) => {
          (e.preventDefault(), y(`instructions`));
        },
        onCloseAutoFocus: (e) => {
          r?.current && (e.preventDefault(), r.current.focus());
        },
        onEscapeKeyDown: (e) => {
          x && e.preventDefault();
        },
        onInteractOutside: (e) => {
          x && e.preventDefault();
        },
        main: (0, $.jsx)(`form`, {
          id: a,
          onSubmit: g(({ instructions: e }) => {
            if (x) return;
            let r = f.current;
            u.mutate(
              { projectId: n._id, instructions: e.trim(), contextRevision: n.contextRevision },
              {
                onSuccess: () => {
                  f.current === r && t(!1);
                },
                onError: (e) => {
                  if (at(e)) {
                    ((m.current = !0),
                      l.invalidateQueries({ queryKey: [ke.project, n._id], refetchType: `all` }),
                      d({
                        message: i(`com_ui_project_conflict_error`),
                        severity: N.ERROR,
                        showIcon: !0,
                      }));
                    return;
                  }
                  d({
                    message: i(`com_ui_project_instructions_error`),
                    severity: N.ERROR,
                    showIcon: !0,
                  });
                },
              },
            );
          }),
          'aria-busy': x,
          className: `flex flex-col gap-3`,
          children: (0, $.jsxs)(`div`, {
            className: `space-y-2`,
            children: [
              (0, $.jsxs)(`div`, {
                className: `flex items-center gap-1`,
                children: [
                  (0, $.jsx)(K, {
                    htmlFor: `${a}-instructions`,
                    className: `text-sm font-medium`,
                    children: i(`com_ui_project_instructions_label`),
                  }),
                  (0, $.jsx)(je, {
                    description: i(`com_ui_project_instructions_help`),
                    render: (0, $.jsx)(H, {
                      type: `button`,
                      variant: `section-action`,
                      size: `icon-xs`,
                      className: `relative after:absolute after:-inset-1.5`,
                      'aria-label': i(`com_ui_project_instructions_info`),
                      disabled: x,
                      children: (0, $.jsx)(o, { className: `size-3.5`, 'aria-hidden': `true` }),
                    }),
                  }),
                ],
              }),
              (0, $.jsx)(G, {
                id: `${a}-instructions`,
                rows: 18,
                maxLength: c,
                'aria-describedby': `${a}-instructions-help`,
                variant: `document`,
                className: `h-[clamp(12rem,50dvh,32rem)] wrap-anywhere`,
                readOnly: x,
                ...h(`instructions`),
              }),
              (0, $.jsx)(`p`, {
                id: `${a}-instructions-help`,
                className: `sr-only`,
                children: i(`com_ui_project_instructions_help`),
              }),
              (0, $.jsxs)(`p`, {
                className: `text-text-tertiary text-right text-xs tabular-nums`,
                'aria-live': `polite`,
                children: [b.length, `/`, c],
              }),
            ],
          }),
        }),
        buttons: (0, $.jsx)(H, {
          type: `submit`,
          form: a,
          variant: `submit`,
          disabled: x,
          'aria-label': i(x ? `com_ui_saving` : `com_ui_save`),
          children: x
            ? (0, $.jsx)(A, { className: `size-4`, 'aria-hidden': `true` })
            : i(`com_ui_save`),
        }),
      }),
    })
  );
}
var st = (e, t) => {
    let n = e;
    if (n?.code === `ERR_CANCELED`) return t(`com_error_files_upload_canceled`);
    let r = n?.response?.data;
    return typeof r?.message == `string` && r.message.trim().length > 0
      ? r.message
      : t(`com_error_files_upload`);
  },
  ct = (e, t, n) =>
    e?.response?.status === 409
      ? t(`com_ui_project_file_limit`, { count: n })
      : t(`com_ui_project_file_attach_error`);
function lt(e, t) {
  return e(t === `ready` ? `com_ui_project_file_ready` : `com_ui_project_file_unavailable`);
}
var ut = (e) =>
  e.embedded === !0 &&
  e.context === j.message_attachment &&
  (!e.expiredAt || new Date(e.expiredAt).getTime() > Date.now());
function dt({ project: e }) {
  let t = W(),
    { agentsConfig: n } = fe(),
    { fileSearchEnabled: r } = ue(n?.capabilities ?? be),
    { data: a } = Oe(),
    c = a?.projects?.maxFiles ?? 50,
    l = _e({ permissionType: Te.FILE_SEARCH, permission: R.USE }),
    d = r && l,
    { showToast: p } = L(),
    h = (0, Q.useRef)(null),
    g = (0, Q.useRef)(null),
    _ = (0, Q.useId)(),
    [v, x] = (0, Q.useState)(!1),
    [C, w] = (0, Q.useState)(!1),
    [re, ie] = (0, Q.useState)(``),
    ae = (0, Q.useDeferredValue)(re),
    [oe, se] = (0, Q.useState)(`all`),
    T = (0, Q.useMemo)(() => qe.map((e) => ({ value: e.value, label: t(e.labelKey) })), [t]),
    [ce, E] = (0, Q.useState)([]),
    D = (0, Q.useRef)(new Set()),
    O = (0, Q.useRef)(new Set()),
    [de, me] = (0, Q.useState)([]),
    { data: k, isLoading: he, isError: j, refetch: ve } = ge(e._id),
    P = k?.length,
    [F, ye] = (0, Q.useState)({ projectId: e._id, count: P }),
    [Ce, Ee] = (0, Q.useState)(``);
  if (F.projectId !== e._id || F.count !== P) {
    let n = F.projectId === e._id,
      r = F.count;
    (ye({ projectId: e._id, count: P }),
      Ee(
        !n || r == null || P == null
          ? ``
          : t(P > r ? `com_ui_project_file_added` : `com_ui_project_file_removed`),
      ));
  }
  let {
      data: De,
      isLoading: z,
      isFetchingNextPage: B,
      isError: V,
      hasNextPage: ke,
      fetchNextPage: U,
      refetch: Ae,
    } = le(e._id, { search: ae || void 0, limit: 20 }, { enabled: C }),
    G = `${e._id}\u0000${ae}`,
    [Ne, K] = (0, Q.useState)(() => new Set()),
    Pe = Ne.has(G);
  if (Pe && !V) {
    let e = new Set(Ne);
    (e.delete(G), K(e));
  }
  let q = () => {
      let e = G;
      U().then((t) =>
        K((n) => {
          if (t.isError === n.has(e)) return n;
          let r = new Set(n);
          return (t.isError ? r.add(e) : r.delete(e), r);
        }),
      );
    },
    Re = pe(),
    J = Ie(),
    ze = I(),
    Y = (0, Q.useMemo)(() => new Set((k ?? []).map((e) => e.file_id)), [k]),
    X = (0, Q.useMemo)(() => De?.pages.flatMap((e) => e.files) ?? [], [De?.pages]),
    Be = k?.length ?? e.fileCount ?? 0,
    Z = () => {
      let e = Be + D.current.size;
      for (let t of O.current) Y.has(t) || e++;
      return e;
    },
    He = Z() < c;
  ((0, Q.useEffect)(() => {
    let e = de.filter((e) => !Y.has(e));
    if (e.length !== de.length) {
      let t = new Set(e);
      ((O.current = t), me(e));
    }
  }, [Y, de]),
    (0, Q.useEffect)(() => {
      C && !z && !V && X.length === 0 && ke && !B && U();
    }, [X.length, U, ke, V, z, B, C]),
    (0, Q.useEffect)(() => {
      (ie(``), se(`all`));
    }, [e._id]));
  let Ue = async (n) => {
      try {
        (await J.mutateAsync({ projectId: e._id, file_id: n }), w(!1), x(!1));
      } catch (e) {
        p({ message: ct(e, t, c), severity: N.ERROR, showIcon: !0 });
      }
    },
    We = async (n) => {
      let r = !1;
      try {
        let t = n.fileId;
        if (!t) {
          let e = new FormData();
          (e.append(`file`, n.file),
            e.append(`file_id`, n.id),
            e.append(`endpoint`, `agents`),
            e.append(`message_file`, `true`),
            e.append(`tool_resource`, we.file_search));
          let r = await Re.mutateAsync(e);
          if (!r.file_id || !ut(r)) throw Error(`Uploaded file is not eligible for project search`);
          ((t = r.file_id), E((e) => e.map((e) => (e.id === n.id ? { ...e, fileId: t } : e))));
        }
        ((r = !0),
          await J.mutateAsync({ projectId: e._id, file_id: t }),
          D.current.delete(n.id),
          O.current.add(t),
          me(Array.from(O.current)),
          E((e) => e.filter((e) => e.id !== n.id)));
      } catch (e) {
        D.current.delete(n.id);
        let i = r ? ct(e, t, c) : st(e, t);
        E((e) => e.map((e) => (e.id === n.id ? { ...e, errorMessage: i, status: `failed` } : e)));
      }
    },
    Ke = async (e) => {
      for (let t of e) await We(t);
    },
    Je = (e) => {
      let n = Array.from(e.target.files ?? []);
      if (((e.target.value = ``), !n.length || !d)) return;
      let r = Math.max(0, c - Z()),
        i = n
          .slice(0, r)
          .map((e) => ({ id: Le(), filename: e.name, file: e, status: `processing` }));
      (i.forEach((e) => D.current.add(e.id)),
        i.length && (E((e) => [...e, ...i]), Ke(i)),
        n.length > i.length &&
          p({
            message: t(`com_ui_project_file_excess`, { count: n.length - i.length }),
            severity: N.WARNING,
            showIcon: !0,
          }));
    },
    Ye = async (n) => {
      try {
        await ze.mutateAsync({ projectId: e._id, file_id: n });
      } catch {
        p({ message: t(`com_ui_project_file_remove_error`), severity: N.ERROR, showIcon: !0 });
      }
    },
    Xe = (e) => {
      if (!(D.current.has(e.id) || (!e.fileId && !d))) {
        if (Z() >= c) {
          p({
            message: t(`com_ui_project_file_excess`, { count: 1 }),
            severity: N.WARNING,
            showIcon: !0,
          });
          return;
        }
        (D.current.add(e.id),
          E((t) =>
            t.map((t) =>
              t.id === e.id ? { ...t, errorMessage: void 0, status: `processing` } : t,
            ),
          ),
          We({ ...e, errorMessage: void 0, status: `processing` }));
      }
    },
    Ze = (e) => {
      (D.current.delete(e), E((t) => t.filter((t) => t.id !== e)));
    };
  return (0, $.jsxs)(`section`, {
    className: `border-border-light bg-surface-secondary flex h-full min-h-0 min-w-0 flex-col rounded-2xl border p-4 sm:p-5`,
    'aria-labelledby': `project-resources-heading`,
    children: [
      (0, $.jsxs)(`div`, {
        className: `mb-3 flex items-center justify-between gap-2`,
        children: [
          (0, $.jsxs)(`div`, {
            className: `flex min-w-0 items-center gap-1`,
            children: [
              (0, $.jsx)(`h2`, {
                id: `project-resources-heading`,
                className: `text-text-primary text-sm font-semibold`,
                children: t(`com_ui_project_files`),
              }),
              (0, $.jsx)(je, {
                description: `${t(`com_ui_project_files_help`)} ${t(`com_ui_project_files_retrieval_only`)}`,
                render: (0, $.jsx)(H, {
                  type: `button`,
                  variant: `section-action`,
                  size: `icon-xs`,
                  className: `relative shrink-0 after:absolute after:-inset-1.5`,
                  'aria-label': t(`com_ui_project_files_info`),
                  children: (0, $.jsx)(o, { className: `size-3.5`, 'aria-hidden': `true` }),
                }),
              }),
            ],
          }),
          (0, $.jsx)(Se, {
            ref: h,
            handleFileChange: Je,
            children: (0, $.jsx)(M, {
              portal: !0,
              focusLoop: !0,
              unmountOnHide: !0,
              menuId: _,
              isOpen: v,
              setIsOpen: x,
              trigger: (0, $.jsxs)(y, {
                disabled: !He || Re.isLoading || J.isLoading,
                className: `aria-expanded:bg-surface-hover`,
                render: (0, $.jsx)(H, { type: `button`, variant: `outline`, size: `sm` }),
                children: [
                  (0, $.jsx)(s, { className: `size-4`, 'aria-hidden': `true` }),
                  t(`com_ui_project_add_files`),
                  (0, $.jsx)(S, { className: `size-3.5`, 'aria-hidden': `true` }),
                ],
              }),
              items: [
                ...(d
                  ? [
                      {
                        label: t(`com_ui_project_upload_file`),
                        icon: (0, $.jsx)(b, {
                          className: `text-text-secondary size-4`,
                          'aria-hidden': `true`,
                        }),
                        onClick: () => h.current?.click(),
                      },
                    ]
                  : []),
                {
                  label: t(`com_ui_project_choose_file`),
                  icon: (0, $.jsx)(u, {
                    className: `text-text-secondary size-4`,
                    'aria-hidden': `true`,
                  }),
                  onClick: () => w(!0),
                  hideOnClick: !1,
                  ref: g,
                  render: (e) => (0, $.jsx)(`button`, { ...e }),
                },
              ],
            }),
          }),
        ],
      }),
      !He &&
        (0, $.jsx)(`p`, {
          className: `text-text-secondary mb-3 text-xs`,
          role: `note`,
          children: t(`com_ui_project_file_limit`, { count: c }),
        }),
      j &&
        (0, $.jsxs)(Me, {
          variant: `error`,
          icon: !1,
          role: `alert`,
          className: `flex items-center justify-between`,
          children: [
            (0, $.jsx)(`span`, { children: t(`com_ui_project_files_error`) }),
            (0, $.jsx)(H, {
              type: `button`,
              variant: `outline`,
              size: `sm`,
              onClick: () => ve(),
              children: t(`com_ui_retry`),
            }),
          ],
        }),
      !j &&
        he &&
        (0, $.jsxs)(`div`, {
          className: `border-border-light bg-surface-secondary text-text-secondary flex min-h-16 items-center justify-center rounded-xl border`,
          role: `status`,
          children: [
            (0, $.jsx)(A, { className: `size-4` }),
            (0, $.jsx)(`span`, { className: `sr-only`, children: t(`com_ui_loading`) }),
          ],
        }),
      !j &&
        !he &&
        (0, $.jsxs)($.Fragment, {
          children: [
            (0, $.jsx)(`div`, {
              className: `sr-only`,
              role: `status`,
              'aria-live': `polite`,
              children: Ce,
            }),
            (0, $.jsxs)(`div`, {
              className: `min-h-0 flex-1 space-y-2 overflow-y-auto`,
              role: `list`,
              'aria-label': t(`com_ui_project_files`),
              children: [
                ce.map((e) =>
                  (0, $.jsxs)(
                    `div`,
                    {
                      role: `listitem`,
                      'aria-describedby': e.errorMessage ? `${e.id}-error` : void 0,
                      className: `border-border-light bg-surface-secondary flex flex-wrap items-center gap-3 rounded-xl border px-3.5 py-3`,
                      children: [
                        e.status === `processing`
                          ? (0, $.jsx)(ne, {
                              className: `text-text-secondary size-4 shrink-0 animate-spin`,
                              'aria-hidden': `true`,
                            })
                          : (0, $.jsx)(te, {
                              className: `text-text-destructive size-4 shrink-0`,
                              'aria-hidden': `true`,
                            }),
                        (0, $.jsx)(`span`, {
                          className: `text-text-primary min-w-0 flex-1 truncate text-sm`,
                          children: e.filename,
                        }),
                        (0, $.jsx)(`span`, {
                          className: `text-text-secondary text-xs`,
                          children:
                            e.status === `processing`
                              ? t(`com_ui_project_file_processing`)
                              : t(`com_ui_project_file_failed`),
                        }),
                        e.errorMessage &&
                          (0, $.jsx)(`p`, {
                            id: `${e.id}-error`,
                            role: `alert`,
                            className: `text-text-destructive basis-full text-xs`,
                            children: e.errorMessage,
                          }),
                        e.status === `failed` &&
                          (0, $.jsxs)($.Fragment, {
                            children: [
                              (0, $.jsx)(H, {
                                type: `button`,
                                variant: `ghost`,
                                size: `sm`,
                                disabled: !e.fileId && !d,
                                onClick: () => Xe(e),
                                children: t(`com_ui_retry`),
                              }),
                              (0, $.jsx)(H, {
                                type: `button`,
                                variant: `ghost`,
                                size: `icon`,
                                className: `size-8 shrink-0`,
                                'aria-label': t(`com_ui_project_dismiss_upload`, {
                                  name: e.filename,
                                }),
                                onClick: () => Ze(e.id),
                                children: (0, $.jsx)(i, {
                                  className: `size-4`,
                                  'aria-hidden': `true`,
                                }),
                              }),
                            ],
                          }),
                      ],
                    },
                    e.id,
                  ),
                ),
                k?.map((e) =>
                  (0, $.jsxs)(
                    `div`,
                    {
                      role: `listitem`,
                      className: `border-border-light bg-surface-secondary flex items-center gap-3 rounded-xl border px-3.5 py-3`,
                      children: [
                        (0, $.jsx)(m, {
                          className: `text-text-secondary size-4 shrink-0`,
                          'aria-hidden': `true`,
                        }),
                        (0, $.jsx)(je, {
                          description: e.filename ?? e.file_id,
                          render: (0, $.jsx)(`span`, {
                            className: `text-text-primary min-w-0 flex-1 truncate text-sm`,
                            children: e.filename ?? e.file_id,
                          }),
                        }),
                        (0, $.jsx)(`span`, {
                          className:
                            e.availability === `ready`
                              ? `text-text-secondary text-xs`
                              : `text-text-destructive text-xs`,
                          children: lt(t, e.availability),
                        }),
                        (0, $.jsx)(H, {
                          type: `button`,
                          variant: `ghost`,
                          size: `icon`,
                          className: `size-8 shrink-0`,
                          'aria-label': t(`com_ui_project_remove_file`, {
                            name: e.filename ?? e.file_id,
                          }),
                          onClick: () => void Ye(e.file_id),
                          disabled: ze.isLoading,
                          children: (0, $.jsx)(f, { className: `size-4`, 'aria-hidden': `true` }),
                        }),
                      ],
                    },
                    e.file_id,
                  ),
                ),
                !ce.length &&
                  !k?.length &&
                  (0, $.jsx)(xe, {
                    icon: ee,
                    description: t(`com_ui_project_no_files`),
                    className: `h-full`,
                  }),
              ],
            }),
          ],
        }),
      (0, $.jsx)(Fe, {
        open: C,
        onOpenChange: (e) => {
          (w(e), e || x(!1));
        },
        triggerRef: g,
        children: C
          ? (0, $.jsxs)(Ge, {
              title: t(`com_ui_project_choose_file`),
              searchLabel: t(`com_ui_search_files`),
              search: re,
              onSearchChange: ie,
              filterLabel: t(`com_ui_composer_files_filter`),
              viewOptions: T,
              view: oe,
              onViewChange: (e) => se(e),
              children: [
                (0, $.jsx)(Ve, {
                  query: ae.trim().toLowerCase(),
                  view: oe,
                  onAttach: (e) => void Ue(e.file_id),
                  source: { files: X, isLoading: z || B, isError: V, refetch: () => void Ae() },
                  disabled: J.isLoading || !He,
                  emptyText: t(
                    ae || oe !== `all`
                      ? `com_ui_no_search_results`
                      : `com_ui_project_no_eligible_files`,
                  ),
                }),
                V &&
                  X.length > 0 &&
                  (0, $.jsxs)(Me, {
                    variant: `error`,
                    icon: !1,
                    role: `alert`,
                    className: `mt-3 flex items-center justify-between`,
                    children: [
                      (0, $.jsx)(`span`, { children: t(`com_ui_project_files_error`) }),
                      (0, $.jsx)(H, {
                        type: `button`,
                        variant: `outline`,
                        size: `sm`,
                        disabled: B,
                        onClick: () => (Pe ? q() : void Ae()),
                        children: t(`com_ui_retry`),
                      }),
                    ],
                  }),
                !z &&
                  !V &&
                  ke &&
                  (0, $.jsx)(H, {
                    type: `button`,
                    variant: `outline`,
                    className: `mt-3 w-full`,
                    onClick: q,
                    disabled: B,
                    children: t(B ? `com_ui_loading` : `com_ui_load_more`),
                  }),
              ],
            })
          : null,
      }),
    ],
  });
}
var ft = e(Xe(), 1),
  pt = () => {};
function mt({ conversation: e, isMenuOpen: t, setIsMenuOpen: n }) {
  let r = W(),
    { showToast: i } = L(),
    a = (0, Q.useId)(),
    o = (0, Q.useRef)(null),
    [s, l] = (0, Q.useState)(!1),
    [u, d] = (0, Q.useState)(!1),
    p = e.conversationId ?? ``,
    m = e.chatProjectId ?? null,
    h = ve(),
    g = (0, Q.useMemo)(
      () =>
        p
          ? [
              {
                label: r(`com_ui_change_project`),
                onClick: () => d(!0),
                icon: (0, $.jsx)(_, {
                  className: `text-text-secondary size-4`,
                  'aria-hidden': `true`,
                }),
                hideOnClick: !1,
                render: (e) => (0, $.jsx)(`button`, { ...e }),
              },
              {
                label: r(`com_ui_remove_from_project`),
                show: !!m,
                onClick: () => {
                  h.mutate(
                    { conversationId: p, projectId: null },
                    {
                      onSuccess: () => {
                        (n(!1),
                          i({
                            message: r(`com_ui_project_updated`),
                            severity: N.SUCCESS,
                            showIcon: !0,
                          }));
                      },
                      onError: () => {
                        i({
                          message: r(`com_ui_project_update_error`),
                          severity: N.ERROR,
                          showIcon: !0,
                        });
                      },
                    },
                  );
                },
                hideOnClick: !1,
                icon: h.isLoading
                  ? (0, $.jsx)(A, { className: `size-4` })
                  : (0, $.jsx)(v, {
                      className: `text-text-secondary size-4`,
                      'aria-hidden': `true`,
                    }),
              },
              {
                label: r(`com_ui_delete`),
                onClick: () => l(!0),
                hideOnClick: !1,
                render: (e) => (0, $.jsx)(`button`, { ...e }),
                icon: (0, $.jsx)(f, {
                  className: `text-text-secondary size-4`,
                  'aria-hidden': `true`,
                }),
              },
            ]
          : [],
      [h, m, p, r, n, i],
    );
  return (0, $.jsxs)($.Fragment, {
    children: [
      (0, $.jsx)(M, {
        portal: !0,
        focusLoop: !0,
        unmountOnHide: !0,
        menuId: a,
        isOpen: t,
        setIsOpen: n,
        className: `z-[125]`,
        minWidth: `11rem`,
        iconClassName: `mr-2 text-text-secondary`,
        trigger: (0, $.jsx)(y, {
          ref: o,
          'aria-label': r(`com_nav_convo_menu_options`),
          className: T(
            V({ variant: `row-action`, size: `icon-sm` }),
            `text-text-secondary rounded-lg`,
            t && `bg-surface-hover-alt text-text-primary`,
          ),
          children: (0, $.jsx)(c, { className: `h-4 w-4`, 'aria-hidden': `true` }),
        }),
        items: g,
      }),
      u
        ? (0, $.jsx)(Ye, {
            conversationId: p,
            chatProjectId: m,
            setMenuOpen: n,
            triggerRef: o,
            showProjectDialog: u,
            setShowProjectDialog: d,
          })
        : null,
      s
        ? (0, $.jsx)(Z, {
            title: e.title ?? ``,
            retainView: pt,
            triggerRef: o,
            setMenuOpen: n,
            showDeleteDialog: s,
            conversationId: p,
            setShowDeleteDialog: l,
          })
        : null,
    ],
  });
}
var ht = (0, Q.memo)(mt),
  gt = (0, Q.memo)(({ cache: e, rowKey: t, parent: n, index: r, style: i, children: a }) =>
    (0, $.jsx)(
      ze,
      {
        cache: e,
        columnIndex: 0,
        parent: n,
        rowIndex: r,
        children: ({ registerChild: e }) =>
          (0, $.jsx)(`div`, {
            ref: e,
            style: i,
            role: `row`,
            children: (0, $.jsx)(`div`, { role: `gridcell`, children: a }),
          }),
      },
      t,
    ),
  );
gt.displayName = `ProjectWorkspaceMeasuredRow`;
var _t = (0, Q.memo)(() => {
  let e = W();
  return (0, $.jsxs)(`div`, {
    className: `text-text-secondary flex items-center justify-center gap-2 py-4 text-sm`,
    children: [
      (0, $.jsx)(A, { className: `shrink-0` }),
      (0, $.jsx)(`span`, { children: e(`com_ui_loading`) }),
    ],
  });
});
_t.displayName = `ProjectWorkspaceLoadingRow`;
var vt = (0, Q.memo)(
  ({ conversation: e, isGenerating: t }) => {
    let { navigateToConvo: n } = Ee(),
      r = W(),
      i = z(),
      a = e.conversationId ?? ``,
      o = e.title || r(`com_ui_untitled`),
      s = e.updatedAt || e.createdAt,
      c = s ? new Date(s).toLocaleString(void 0, { hour12: i }) : ``,
      [l, u] = (0, Q.useState)(!1);
    return (0, $.jsxs)(`article`, {
      className: T(
        `group/project-chat border-border-light bg-surface-secondary mb-2 flex items-center rounded-2xl border`,
        `hover:bg-surface-hover transition-colors`,
        l && `bg-surface-hover`,
      ),
      children: [
        (0, $.jsxs)(H, {
          type: `button`,
          variant: `card`,
          size: `row`,
          className: `min-w-0 flex-1`,
          onClick: () => n(e),
          children: [
            (0, $.jsx)(`span`, {
              className: `flex h-10 w-10 shrink-0 items-center justify-center`,
              children: (0, $.jsx)(Be, { conversation: e, size: 40, context: `landing` }),
            }),
            (0, $.jsxs)(`span`, {
              className: `min-w-0 flex-1`,
              children: [
                (0, $.jsx)(`span`, {
                  className: `text-text-primary block truncate text-sm font-medium`,
                  children: o,
                }),
                (0, $.jsx)(`span`, {
                  className: `text-text-secondary block truncate text-xs tabular-nums`,
                  children: c,
                }),
              ],
            }),
            t
              ? (0, $.jsx)(A, {
                  className: `h-4 w-4 shrink-0`,
                  'aria-label': r(`com_ui_generating`),
                })
              : null,
          ],
        }),
        a
          ? (0, $.jsx)(`div`, {
              className: `pr-2`,
              children: (0, $.jsx)(ht, { conversation: e, isMenuOpen: l, setIsMenuOpen: u }),
            })
          : null,
      ],
    });
  },
  (e, t) => X(e.conversation, t.conversation) && e.isGenerating === t.isGenerating,
);
vt.displayName = `ProjectWorkspaceConversationRow`;
var yt = (0, Q.memo)(
    ({
      conversations: e,
      isLoading: t,
      isFetchingNextPage: n,
      hasNextPage: r,
      sortBy: i,
      emptyLabel: a,
      loadMore: o,
    }) => {
      let s = W(),
        { data: c } = De(),
        l = ye(),
        u = (0, Q.useMemo)(() => new Set(c?.activeJobIds ?? []), [c?.activeJobIds]),
        d = (0, Q.useMemo)(() => {
          if (t) return [{ type: `loading` }];
          let r = [];
          return (
            Ce(e, { field: i }).forEach(([e, t]) => {
              (r.push({ type: `date`, groupName: e }),
                t.forEach((e) => r.push({ type: `convo`, convo: e })));
            }),
            n && r.push({ type: `loading` }),
            r
          );
        }, [e, n, t, i]),
        f = (0, Q.useRef)(d);
      f.current = d;
      let p = (0, Q.useMemo)(
          () =>
            new J({
              fixedWidth: !0,
              defaultHeight: Math.round(52 * l),
              keyMapper: (e) => {
                let t = f.current[e];
                return t
                  ? t.type === `date`
                    ? `project-workspace-date-${t.groupName}`
                    : t.type === `convo`
                      ? `project-workspace-convo-${t.convo.conversationId}`
                      : `project-workspace-${t.type}`
                  : `project-workspace-unknown-${e}`;
              },
            }),
          [l],
        ),
        m = (0, Q.useRef)(null);
      (0, Q.useEffect)(() => {
        let e = requestAnimationFrame(() => {
          (p.clearAll(), m.current?.recomputeRowHeights(0));
        });
        return () => cancelAnimationFrame(e);
      }, [p, e.length, i]);
      let h = (0, Q.useMemo)(() => (0, ft.default)(o, 300), [o]),
        g = (0, Q.useCallback)(
          ({ index: e, key: t, parent: n, style: r }) => {
            let i = d[e],
              a = { cache: p, rowKey: t, parent: n, index: e, style: r };
            return i.type === `loading`
              ? (0, $.jsx)(gt, { ...a, children: (0, $.jsx)(_t, {}) }, t)
              : i.type === `date`
                ? (0, $.jsx)(
                    gt,
                    {
                      ...a,
                      children: (0, $.jsx)(`div`, {
                        className: `pb-3`,
                        children: (0, $.jsx)(He, { groupName: i.groupName }),
                      }),
                    },
                    t,
                  )
                : (0, $.jsx)(
                    gt,
                    {
                      ...a,
                      children: (0, $.jsx)(vt, {
                        conversation: i.convo,
                        isGenerating: u.has(i.convo.conversationId ?? ``),
                      }),
                    },
                    t,
                  );
          },
          [u, p, d],
        ),
        _ = (0, Q.useCallback)(({ index: e }) => p.getHeight(e, 0), [p]),
        v = (0, Q.useCallback)(
          ({ stopIndex: e }) => {
            r && e >= d.length - 6 && h();
          },
          [d.length, r, h],
        );
      return !t && !e.length
        ? (0, $.jsx)(`div`, {
            className: `min-h-[280px] flex-1`,
            children: (0, $.jsx)(xe, { icon: w, description: a, className: `h-full` }),
          })
        : (0, $.jsx)(`div`, {
            className: `min-h-[17.5rem] flex-1 overflow-hidden`,
            children: (0, $.jsx)(Re, {
              children: ({ width: e, height: t }) =>
                (0, $.jsx)(Y, {
                  'aria-label': s(`com_ui_chats`),
                  containerRole: `rowgroup`,
                  ref: m,
                  width: e,
                  height: t,
                  rowCount: d.length,
                  rowHeight: _,
                  rowRenderer: g,
                  deferredMeasurementCache: p,
                  overscanRowCount: 8,
                  onRowsRendered: v,
                  className: `outline-hidden`,
                  style: { outline: `none` },
                }),
            }),
          });
    },
  ),
  bt = [`project-details`, `project-chats`],
  xt = [`project-instructions`, `project-files`],
  St = [`project-instructions`],
  Ct = { coarse: 32, fine: 22 },
  wt = 240,
  Tt = 1;
function Et() {
  let e = W(),
    t = re(),
    n = oe(),
    { projectId: i = `` } = ae(),
    [u, m] = ie(),
    [_, v] = (0, Q.useState)(`updatedAt`),
    [b, S] = (0, Q.useState)(null),
    [C, w] = (0, Q.useState)(`name`),
    ee = b === i || u.get(`edit`) === `1`,
    [te, ne] = (0, Q.useState)(!1),
    [T, le] = (0, Q.useState)(!1),
    ue = (0, Q.useId)(),
    de = (0, Q.useId)(),
    [fe, pe] = (0, Q.useState)(!1),
    [me, k] = (0, Q.useState)(!1),
    ge = (0, Q.useRef)(null),
    _e = (0, Q.useRef)(null),
    j = (0, Q.useRef)(null),
    N = (0, Q.useRef)(null),
    ve = (0, Q.useRef)(null),
    { data: I, isLoading: ye } = se(i),
    { data: be } = Oe(),
    Se = be?.ragEnabled === !0,
    Ce = h(he.conversationByIndex(0)),
    { newConversation: L } = ce(),
    R = I?._id,
    we = Pe(),
    Te = p({ id: `project-workspace-layout`, panelIds: bt, storage: localStorage }),
    Ee = p({ id: `project-details-layout`, panelIds: Se ? xt : St, storage: localStorage }),
    { ref: De, height: z } = E(),
    V = `${Math.min(wt, Math.max(0, Math.floor((z - Tt) / 2)))}px`,
    U = (e) => {
      (w(e), S(i));
    },
    Ae = () => {
      if ((S(null), u.has(`edit`))) {
        let e = new URLSearchParams(u);
        (e.delete(`edit`), m(e, { replace: !0 }));
      }
      requestAnimationFrame(() => {
        (C === `description` ? j : _e).current?.focus();
      });
    },
    G = (0, Q.useMemo)(
      () => [
        { value: `updatedAt`, label: e(`com_ui_sort_updated`) },
        { value: `createdAt`, label: e(`com_ui_sort_created`) },
      ],
      [e],
    ),
    Me = G.find((e) => e.value === _)?.label ?? e(`com_ui_sort_updated`),
    {
      data: K,
      fetchNextPage: Fe,
      isFetchingNextPage: Ie,
      isLoading: Le,
    } = B(
      { projectId: R, sortBy: _, sortDirection: `desc` },
      { enabled: !!R, staleTime: 3e4, cacheTime: 3e5 },
    ),
    Re = (0, Q.useMemo)(() => K?.pages.flatMap((e) => e.conversations) ?? [], [K?.pages]),
    J = (0, Q.useMemo)(() => {
      let e = K?.pages;
      return e?.length ? e[e.length - 1].nextCursor !== null : !1;
    }, [K?.pages]),
    ze = (0, Q.useCallback)(() => {
      R &&
        (O(n, Ce?.conversationId),
        n.invalidateQueries([ke.messages]),
        t(`/c/${Ne.NEW_CONVO}?projectId=${encodeURIComponent(R)}`),
        L({ template: { chatProjectId: R } }));
    }, [R, Ce?.conversationId, t, L, n]);
  if (ye)
    return (0, $.jsx)(`div`, {
      className: `bg-surface-primary-alt text-text-primary flex h-full items-center justify-center`,
      children: (0, $.jsx)(A, {}),
    });
  if (!I)
    return (0, $.jsxs)(`div`, {
      className: `bg-surface-primary-alt flex h-full flex-col items-center justify-center gap-3 px-6 text-center`,
      children: [
        (0, $.jsx)(`p`, {
          className: `text-text-secondary text-sm`,
          children: e(`com_ui_project_not_found`),
        }),
        (0, $.jsx)(H, {
          type: `button`,
          variant: `outline`,
          size: `sm`,
          onClick: () => t(`/projects`),
          children: e(`com_ui_all_projects`),
        }),
      ],
    });
  let Y = ee
      ? (0, $.jsx)(We, { project: I, inputRef: ge, initialField: C, onDone: Ae }, I._id)
      : (0, $.jsxs)(`div`, {
          className: `min-w-0`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `flex min-w-0 items-start gap-4`,
              children: [
                (0, $.jsx)(`span`, {
                  className: `bg-surface-secondary text-text-secondary flex size-10 shrink-0 items-center justify-center rounded-xl`,
                  children: (0, $.jsx)(x, { className: `size-5`, 'aria-hidden': `true` }),
                }),
                (0, $.jsx)(`h1`, {
                  className: `min-w-0 flex-1`,
                  children: (0, $.jsxs)(H, {
                    ref: _e,
                    type: `button`,
                    variant: `inline-edit`,
                    onClick: () => U(`name`),
                    className: `min-h-10 w-full min-w-0`,
                    children: [
                      (0, $.jsx)(`span`, {
                        className: `line-clamp-2 min-w-0 text-xl font-semibold tracking-tight wrap-anywhere md:line-clamp-1`,
                        children: I.name,
                      }),
                      (0, $.jsxs)(`span`, {
                        className: `sr-only`,
                        children: [`, `, e(`com_ui_project_edit_name`)],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, $.jsxs)(H, {
              ref: j,
              type: `button`,
              variant: `inline-edit`,
              onClick: () => U(`description`),
              className: `mt-1 min-h-10 w-full min-w-0`,
              children: [
                (0, $.jsx)(`span`, {
                  className: `text-text-secondary line-clamp-3 min-w-0 text-sm leading-relaxed font-normal wrap-anywhere`,
                  children: I.description || e(`com_ui_add_description`),
                }),
                (0, $.jsxs)(`span`, {
                  className: `sr-only`,
                  children: [`, `, e(`com_ui_project_edit_description`)],
                }),
              ],
            }),
          ],
        }),
    X = (0, $.jsxs)(`section`, {
      className: `border-border-light bg-surface-secondary flex h-full min-h-0 min-w-0 flex-col rounded-2xl border p-4`,
      'aria-labelledby': `project-instructions-heading`,
      children: [
        (0, $.jsxs)(`div`, {
          className: `mb-3 flex items-center justify-between gap-2`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `flex min-w-0 items-center gap-1`,
              children: [
                (0, $.jsx)(`h2`, {
                  id: `project-instructions-heading`,
                  className: `text-text-primary text-sm font-semibold`,
                  children: e(`com_ui_project_instructions`),
                }),
                (0, $.jsx)(je, {
                  description: e(`com_ui_project_instructions_future_turns`),
                  render: (0, $.jsx)(H, {
                    type: `button`,
                    variant: `section-action`,
                    size: `icon-xs`,
                    className: `relative shrink-0 after:absolute after:-inset-1.5`,
                    'aria-label': e(`com_ui_project_instructions_info`),
                    children: (0, $.jsx)(o, { className: `size-3.5`, 'aria-hidden': `true` }),
                  }),
                }),
              ],
            }),
            (0, $.jsxs)(H, {
              ref: ve,
              type: `button`,
              variant: `ghost`,
              size: `sm`,
              'aria-label': e(`com_ui_project_edit_instructions`),
              onClick: () => ne(!0),
              children: [
                (0, $.jsx)(a, { className: `size-4`, 'aria-hidden': `true` }),
                e(`com_ui_edit`),
              ],
            }),
          ],
        }),
        (0, $.jsx)(`div`, {
          role: `region`,
          'aria-label': e(`com_ui_project_instructions_preview`),
          tabIndex: I.instructions?.trim() ? 0 : void 0,
          className: `focus-visible:ring-text-primary min-h-0 flex-1 overflow-y-auto rounded-md focus-visible:ring-2 focus-visible:outline-hidden focus-visible:ring-inset`,
          children: I.instructions?.trim()
            ? (0, $.jsx)(`p`, {
                className: `text-text-secondary text-base leading-relaxed wrap-anywhere whitespace-pre-wrap`,
                children: I.instructions,
              })
            : (0, $.jsx)(xe, {
                icon: d,
                description: e(`com_ui_project_no_instructions`),
                className: `h-full`,
              }),
        }),
      ],
    }),
    Be = (0, $.jsxs)(`section`, {
      className: `flex h-full min-h-0 min-w-0 flex-col`,
      'aria-labelledby': `project-chats-heading`,
      children: [
        (0, $.jsxs)(`div`, {
          className: `mb-3 flex items-center justify-between gap-3`,
          children: [
            (0, $.jsxs)(`h2`, {
              id: `project-chats-heading`,
              className: `text-text-primary flex items-baseline gap-2 text-sm font-semibold`,
              children: [
                e(`com_ui_chats`),
                (0, $.jsx)(`span`, {
                  className: `text-text-secondary tabular-nums`,
                  children: I.conversationCount,
                }),
              ],
            }),
            (0, $.jsx)(M, {
              portal: !0,
              focusLoop: !0,
              unmountOnHide: !0,
              menuId: de,
              isOpen: me,
              setIsOpen: k,
              trigger: (0, $.jsxs)(y, {
                'aria-label': e(`com_ui_sort_chats_by`),
                className: `aria-expanded:bg-surface-hover`,
                render: (0, $.jsx)(H, { type: `button`, variant: `ghost`, size: `sm` }),
                children: [(0, $.jsx)(r, { className: `size-4`, 'aria-hidden': `true` }), Me],
              }),
              items: G.map((e) => ({
                label: e.label,
                ariaChecked: _ === e.value,
                icon:
                  _ === e.value
                    ? (0, $.jsx)(g, {
                        className: `text-text-secondary size-4`,
                        'aria-hidden': `true`,
                      })
                    : (0, $.jsx)(`span`, { className: `size-4`, 'aria-hidden': `true` }),
                onClick: () => v(e.value),
              })),
            }),
          ],
        }),
        (0, $.jsx)(yt, {
          conversations: Re,
          isLoading: Le,
          isFetchingNextPage: Ie,
          hasNextPage: J,
          sortBy: _,
          emptyLabel: e(`com_ui_no_project_chats`),
          loadMore: () => Fe(),
        }),
      ],
    }),
    Z = Se ? (0, $.jsx)(dt, { project: I }, I._id) : null;
  return (0, $.jsxs)(`main`, {
    className: `bg-surface-primary-alt text-text-primary flex h-full min-h-0 min-w-0 flex-col`,
    children: [
      (0, $.jsx)(`header`, {
        className: `border-border-light bg-surface-primary-alt sticky top-0 z-10 border-b`,
        children: (0, $.jsxs)(`div`, {
          className: `flex h-14 w-full items-center gap-2 px-4 md:px-6`,
          children: [
            we ? (0, $.jsx)(P, { className: `size-9 shrink-0` }) : null,
            (0, $.jsxs)(H, {
              type: `button`,
              variant: `section-action`,
              size: `sm`,
              onClick: () => t(`/projects`),
              className: `-ml-1.5`,
              children: [
                (0, $.jsx)(l, { className: `size-4`, 'aria-hidden': `true` }),
                e(`com_ui_all_projects`),
              ],
            }),
            (0, $.jsxs)(H, {
              type: `button`,
              size: `sm`,
              shape: `round`,
              className: `ml-auto shrink-0`,
              variant: `default`,
              onClick: ze,
              'aria-label': e(`com_ui_new_chat_in_project`, { name: I.name }),
              children: [
                (0, $.jsx)(s, { className: `size-4`, 'aria-hidden': `true` }),
                (0, $.jsx)(`span`, {
                  className: `hidden sm:inline`,
                  children: e(`com_ui_new_chat`),
                }),
              ],
            }),
            (0, $.jsx)(M, {
              portal: !0,
              focusLoop: !0,
              unmountOnHide: !0,
              menuId: ue,
              isOpen: fe,
              setIsOpen: pe,
              trigger: (0, $.jsx)(y, {
                'aria-label': e(`com_ui_project_options`),
                className: `aria-expanded:bg-surface-hover shrink-0`,
                render: (0, $.jsx)(H, { type: `button`, variant: `outline`, size: `icon` }),
                children: (0, $.jsx)(c, { className: `size-5`, 'aria-hidden': `true` }),
              }),
              items: [
                {
                  label: e(`com_ui_delete_project_action`),
                  icon: (0, $.jsx)(f, {
                    className: `text-text-secondary size-4`,
                    'aria-hidden': `true`,
                  }),
                  onClick: () => le(!0),
                  hideOnClick: !1,
                  ref: N,
                  render: (e) => (0, $.jsx)(`button`, { ...e }),
                },
              ],
            }),
          ],
        }),
      }),
      (0, $.jsx)(Ke, { open: T, onOpenChange: le, project: I, triggerRef: N }),
      (0, $.jsx)(ot, { open: te, onOpenChange: ne, project: I, triggerRef: ve }),
      we
        ? (0, $.jsxs)(`div`, {
            className: `flex min-w-0 flex-1 flex-col gap-4 overflow-y-auto px-4 py-6`,
            children: [
              Y,
              (0, $.jsx)(`div`, { className: `h-72 shrink-0`, children: X }),
              Z != null && (0, $.jsx)(`div`, { className: `h-72 shrink-0`, children: Z }),
              (0, $.jsx)(`div`, { className: `flex min-h-[26.25rem] flex-col`, children: Be }),
            ],
          })
        : (0, $.jsxs)(F, {
            orientation: `horizontal`,
            id: `project-workspace`,
            defaultLayout: Te.defaultLayout,
            onLayoutChanged: Te.onLayoutChanged,
            resizeTargetMinimumSize: Ct,
            className: `min-h-0 flex-1`,
            children: [
              (0, $.jsx)(q, {
                id: `project-details`,
                defaultSize: `45`,
                minSize: `25`,
                maxSize: `70`,
                className: `min-w-0`,
                children: (0, $.jsxs)(`div`, {
                  className: `flex h-full min-h-0 min-w-0 flex-col gap-4 py-6 pl-4 md:pl-6`,
                  children: [
                    (0, $.jsx)(`div`, { className: `pr-3`, children: Y }),
                    (0, $.jsx)(`div`, {
                      ref: De,
                      className: `min-h-0 flex-1`,
                      children: (0, $.jsxs)(F, {
                        orientation: `vertical`,
                        id: `project-details-panels`,
                        defaultLayout: Ee.defaultLayout,
                        onLayoutChanged: Ee.onLayoutChanged,
                        resizeTargetMinimumSize: Ct,
                        className: `h-full`,
                        children: [
                          (0, $.jsx)(q, {
                            id: `project-instructions`,
                            defaultSize: `55`,
                            minSize: V,
                            className: `min-h-0`,
                            children: (0, $.jsx)(`div`, {
                              className: `h-full pr-3 pb-3`,
                              children: X,
                            }),
                          }),
                          Z != null &&
                            (0, $.jsxs)($.Fragment, {
                              children: [
                                (0, $.jsx)(D, { withHandle: !0 }),
                                (0, $.jsx)(q, {
                                  id: `project-files`,
                                  defaultSize: `45`,
                                  minSize: V,
                                  className: `min-h-0`,
                                  children: (0, $.jsx)(`div`, {
                                    className: `h-full pt-3 pr-3`,
                                    children: Z,
                                  }),
                                }),
                              ],
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, $.jsx)(D, { withHandle: !0 }),
              (0, $.jsx)(q, {
                id: `project-chats`,
                defaultSize: `55`,
                minSize: `30`,
                className: `min-w-0`,
                children: (0, $.jsx)(`div`, {
                  className: `flex h-full min-h-0 min-w-0 flex-col py-6 pr-4 pl-3 md:pr-6`,
                  children: Be,
                }),
              }),
            ],
          }),
    ],
  });
}
export { Et as ProjectWorkspace, it as ProjectsView };
