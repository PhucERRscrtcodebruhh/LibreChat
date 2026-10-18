import { o as e } from './rolldown-runtime.C0FnF6B9.js';
import { at as t, rt as n } from './advanced-inputs.BJDnsHUg.js';
import {
  Ai as r,
  Et as i,
  On as a,
  Pr as o,
  Ra as s,
  Za as c,
  Zt as l,
  _n as u,
  aa as d,
  as as f,
  jr as p,
  oo as m,
  qi as h,
  so as g,
  ss as _,
  to as v,
  ui as y,
  yr as b,
  za as x,
} from './vendor.DpBpdTS1.js';
import { n as S } from './i18n.C6_IvY32.js';
import { n as C } from './routing.DYGR6PKW.js';
import {
  Bv as w,
  Eg as T,
  Ih as E,
  Jf as D,
  Jl as O,
  K_ as k,
  Kg as A,
  Lg as j,
  Mg as M,
  Mo as N,
  Nf as P,
  Pf as F,
  Rh as I,
  Wv as L,
  _h as R,
  ag as z,
  bu as B,
  cg as V,
  ef as H,
  eu as U,
  kg as W,
  kl as G,
  pm as K,
  pv as q,
  tr as J,
  wg as Y,
  xg as X,
} from './hooks.CliY9jTn.js';
import { n as Z } from './Settings.CUowDhqu.js';
var Q = e(t(), 1),
  $ = n(),
  ee = { isArchived: !0, sortBy: `archivedAt`, sortDirection: `desc`, search: `` },
  te = new Set([`title`, `archivedAt`]),
  ne = (e) => e.archivedAt?.toString() ?? e.createdAt?.toString() ?? ``;
function re() {
  let e = G(),
    { showToast: t } = L(),
    n = f(D.search),
    [i, a] = (0, Q.useState)(!1),
    o = w(`(max-width: 768px)`),
    [s, c] = (0, Q.useState)(ee),
    [u, d] = (0, Q.useState)(null),
    {
      data: p,
      fetchNextPage: m,
      hasNextPage: h,
      isFetchingNextPage: g,
      refetch: _,
      isLoading: v,
      isFetching: y,
    } = B(s, { staleTime: 0, cacheTime: 3e5, refetchOnWindowFocus: !1, refetchOnMount: !1 }),
    b = (0, Q.useCallback)((e) => {
      c((t) => ({ ...t, search: e.trim() }));
    }, []),
    A = (0, Q.useCallback)((e, t) => e.conversationId ?? `archived-${t}`, []),
    j = (0, Q.useMemo)(
      () =>
        p?.pages
          ? p.pages.flatMap((e) => e?.conversations?.filter(Boolean) ?? []).map((e) => ({ ...e }))
          : [],
      [p?.pages],
    ),
    P = (0, Q.useMemo)(
      () => [{ id: s.sortBy ?? `archivedAt`, desc: s.sortDirection === `desc` }],
      [s.sortBy, s.sortDirection],
    ),
    F = (0, Q.useCallback)((e) => {
      c((t) => {
        let n = [{ id: t.sortBy ?? `archivedAt`, desc: t.sortDirection === `desc` }],
          r = (typeof e == `function` ? e(n) : e)[0],
          i = r?.id;
        return te.has(i)
          ? { ...t, sortBy: i, sortDirection: r.desc ? `desc` : `asc` }
          : { ...t, sortBy: `archivedAt`, sortDirection: `desc` };
      });
    }, []),
    z = U({
      onSuccess: async () => {
        (a(!1),
          await _(),
          t({ message: e(`com_ui_convo_delete_success`), severity: I.SUCCESS, showIcon: !0 }));
      },
      onError: (n) => {
        (E.error(`Error deleting archived conversation:`, n),
          t({ message: e(`com_ui_archive_delete_error`), severity: I.ERROR }));
      },
    }),
    { mutate: H, isLoading: K } = O({
      onSuccess: async () => {
        await _();
      },
      onError: (n) => {
        (E.error(`Error unarchiving conversation`, n),
          t({ message: e(`com_ui_unarchive_error`), severity: I.ERROR }));
      },
    }),
    J = (0, Q.useCallback)(async () => {
      !h || g || (await m());
    }, [m, h, g]),
    Z = (0, Q.useMemo)(
      () => [
        {
          accessorKey: `title`,
          header: e(`com_nav_archive_name`),
          cell: ({ row: t }) => {
            let { conversationId: n, title: i } = t.original,
              a = (0, $.jsxs)(C, {
                to: `/c/${n ?? ``}`,
                target: `_blank`,
                rel: `noopener noreferrer`,
                className: `group text-text-primary focus-visible:ring-text-primary flex items-center gap-1.5 truncate rounded-sm font-medium underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:outline-hidden`,
                'aria-label': e(`com_ui_open_archived_chat_new_tab_title`, {
                  title: i ?? e(`com_ui_untitled`),
                }),
                children: [
                  (0, $.jsx)(`span`, { className: `truncate`, children: i }),
                  (0, $.jsx)(r, {
                    className: `text-text-tertiary group-hover:text-text-secondary size-3.5 shrink-0 transition-colors`,
                    'aria-hidden': `true`,
                  }),
                ],
              });
            return (0, $.jsxs)(`div`, {
              className: `flex w-0 min-w-full items-center gap-2.5`,
              children: [
                (0, $.jsx)(N, {
                  endpoint: t.original.endpoint,
                  size: 28,
                  isCreatedByUser: !1,
                  iconClassName: `size-4`,
                }),
                i ? (0, $.jsx)(q, { description: i, render: a }) : a,
              ],
            });
          },
          meta: { width: 55, isRowHeader: !0 },
        },
        {
          accessorKey: `archivedAt`,
          header: e(`com_nav_archive_created_at`),
          cell: ({ row: e }) => R(ne(e.original), o),
          meta: { width: 25, desktopOnly: !0 },
        },
        {
          id: `actions`,
          header: e(`com_assistants_actions`),
          enableSorting: !1,
          cell: ({ row: t }) => {
            let n = t.original;
            return (0, $.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, $.jsx)(q, {
                  description: e(`com_ui_unarchive_conversation`),
                  render: (0, $.jsx)(V, {
                    variant: `row-action`,
                    size: `icon-sm`,
                    onClick: () => H({ conversationId: n.conversationId ?? ``, isArchived: !1 }),
                    'aria-label': e(`com_ui_unarchive_conversation`),
                    disabled: K,
                    children: K ? (0, $.jsx)(k, {}) : (0, $.jsx)(x, { className: `size-4` }),
                  }),
                }),
                (0, $.jsx)(q, {
                  description: e(`com_ui_delete_conversation_tooltip`),
                  render: (0, $.jsx)(V, {
                    variant: `row-action`,
                    size: `icon-sm`,
                    onClick: () => {
                      (d(t.original), a(!0));
                    },
                    'aria-label': e(`com_ui_delete_conversation_tooltip`),
                    children: (0, $.jsx)(l, { className: `size-4` }),
                  }),
                }),
              ],
            });
          },
          meta: { width: 20 },
        },
      ],
      [o, e, H, K],
    );
  return (0, $.jsxs)($.Fragment, {
    children: [
      (0, $.jsx)(X, {
        columns: Z,
        data: j,
        getRowId: A,
        className: `max-h-[60vh] min-h-80 scrollbar-gutter-stable`,
        onFilterChange: b,
        filterValue: s.search,
        fetchNextPage: J,
        hasNextPage: h,
        isFetchingNextPage: g,
        isFetching: y,
        isLoading: v,
        sorting: P,
        onSortingChange: F,
        config: {
          selection: { enableRowSelection: !1, showCheckboxes: !1 },
          skeleton: { count: 6 },
          search: { enableSearch: n.enabled === !0, debounce: 300 },
        },
      }),
      (0, $.jsx)(Y, {
        open: i,
        onOpenChange: a,
        children: (0, $.jsxs)(T, {
          showCloseButton: !1,
          className: `w-11/12 max-w-md`,
          children: [
            (0, $.jsx)(W, {
              children: (0, $.jsx)(M, {
                children: (0, $.jsx)(S, {
                  i18nKey: `com_ui_delete_confirm_strong`,
                  values: { title: u?.title },
                  components: { strong: (0, $.jsx)(`strong`, {}) },
                }),
              }),
            }),
            (0, $.jsxs)(`div`, {
              className: `flex justify-end gap-4 pt-4`,
              children: [
                (0, $.jsx)(V, {
                  'aria-label': e(`com_ui_cancel`),
                  variant: `outline`,
                  onClick: () => a(!1),
                  children: e(`com_ui_cancel`),
                }),
                (0, $.jsx)(V, {
                  variant: `destructive`,
                  onClick: () => z.mutate({ conversationId: u?.conversationId ?? `` }),
                  disabled: z.isLoading,
                  children: z.isLoading ? (0, $.jsx)(k, {}) : e(`com_ui_delete`),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function ie({ open: e, onOpenChange: t, triggerRef: n }) {
  let r = G(),
    i = (0, Q.useRef)(null);
  return (0, $.jsx)(Y, {
    open: e,
    onOpenChange: t,
    triggerRef: n,
    children: (0, $.jsxs)(T, {
      focusOutline: `hidden`,
      ref: i,
      tabIndex: -1,
      onOpenAutoFocus: (e) => {
        (e.preventDefault(), i.current?.focus());
      },
      className: `w-11/12 max-w-3xl shadow-2xl`,
      children: [
        (0, $.jsx)(W, { children: (0, $.jsx)(M, { children: r(`com_nav_archived_chats`) }) }),
        (0, $.jsx)(re, {}),
      ],
    }),
  });
}
function ae({ helpAndFaqURL: e, termsOfServiceURL: t, privacyPolicyURL: n, onShowShortcuts: r }) {
  let i = G(),
    s = !!e && e !== `/`,
    l = !!t,
    f = !!n,
    _ = l || f;
  return (0, $.jsxs)(c, {
    placement: `right-start`,
    children: [
      (0, $.jsxs)(v, {
        hideOnClick: !1,
        render: (0, $.jsx)(m, {
          className: `select-item flex w-full cursor-pointer items-center gap-2 text-sm`,
        }),
        children: [
          (0, $.jsx)(h, { className: `icon-md`, 'aria-hidden': `true` }),
          (0, $.jsx)(`span`, { className: `flex-1 text-left`, children: i(`com_nav_help`) }),
          (0, $.jsx)(d, { className: `text-text-secondary h-4 w-4`, 'aria-hidden': `true` }),
        ],
      }),
      (0, $.jsxs)(g, {
        portal: !0,
        gutter: 12,
        className: `account-settings-popover popover-ui popover-from-left z-[126] w-[min(15.25rem,90vw)] rounded-lg`,
        children: [
          s &&
            (0, $.jsxs)(v, {
              onClick: () => K(e),
              className: `select-item text-sm`,
              children: [
                (0, $.jsx)(p, { className: `icon-md`, 'aria-hidden': `true` }),
                i(`com_nav_help_faq`),
              ],
            }),
          (0, $.jsxs)(v, {
            onClick: r,
            className: `select-item text-sm`,
            children: [
              (0, $.jsx)(o, { className: `icon-md`, 'aria-hidden': `true` }),
              i(`com_shortcut_keyboard_shortcuts`),
            ],
          }),
          _ && (l || f) && (0, $.jsx)(j, {}),
          l &&
            (0, $.jsxs)(v, {
              onClick: () => K(t),
              className: `select-item text-sm`,
              children: [
                (0, $.jsx)(a, { className: `icon-md`, 'aria-hidden': `true` }),
                i(`com_ui_terms_of_service`),
              ],
            }),
          f &&
            (0, $.jsxs)(v, {
              onClick: () => K(n),
              className: `select-item text-sm`,
              children: [
                (0, $.jsx)(u, { className: `icon-md`, 'aria-hidden': `true` }),
                i(`com_ui_privacy_policy`),
              ],
            }),
        ],
      }),
    ],
  });
}
function oe({ collapsed: e = !1 }) {
  let t = G(),
    { user: n, logout: r } = J(),
    { data: a } = H(),
    o = i(Z),
    l = i(F),
    u = i(P),
    d = _(D.showShortcutsDialog),
    [f, p] = (0, Q.useState)(!1),
    h = (0, Q.useRef)(null);
  return (0, $.jsxs)(c, {
    placement: e ? `right-end` : void 0,
    children: [
      (0, $.jsxs)(m, {
        ref: h,
        'aria-label': t(`com_nav_account_settings`),
        'data-testid': `nav-user`,
        className: e
          ? `hover:bg-surface-nav-hover aria-[expanded=true]:bg-surface-nav-selected flex h-9 w-9 items-center justify-center rounded-lg transition-colors`
          : `hover:bg-surface-nav-hover aria-[expanded=true]:bg-surface-nav-selected flex h-auto w-full items-center gap-2 rounded-xl p-2 text-sm transition-all duration-200 ease-in-out`,
        children: [
          (0, $.jsx)(`div`, {
            className: e ? `size-7 shrink-0` : `h-8 w-8 shrink-0`,
            children: (0, $.jsx)(`div`, {
              className: `relative flex`,
              children: (0, $.jsx)(z, { user: n, size: e ? 28 : 32 }),
            }),
          }),
          !e &&
            (0, $.jsx)(`div`, {
              className: `text-text-primary mt-2 grow overflow-hidden text-left text-ellipsis whitespace-nowrap`,
              style: { marginTop: `0`, marginLeft: `0` },
              children: n?.name ?? n?.username ?? t(`com_nav_user`),
            }),
        ],
      }),
      (0, $.jsxs)(g, {
        portal: !0,
        className: `account-settings-popover popover-ui z-[125] w-[min(19.0625rem,90vw)] rounded-lg md:w-[min(15.25rem,90vw)]`,
        style: { transformOrigin: e ? `left bottom` : `bottom`, translate: e ? `4px 0` : `0 -4px` },
        children: [
          (0, $.jsx)(`div`, {
            className: `text-text-secondary mr-2 ml-3 py-2 text-sm`,
            role: `note`,
            children: n?.email ?? t(`com_nav_user`),
          }),
          (0, $.jsx)(j, {}),
          (0, $.jsx)(ae, {
            helpAndFaqURL: a?.helpAndFaqURL,
            termsOfServiceURL: a?.interface?.termsOfService?.externalUrl,
            privacyPolicyURL: a?.interface?.privacyPolicy?.externalUrl,
            onShowShortcuts: () => d(!0),
          }),
          (0, $.jsxs)(v, {
            onClick: () => p(!0),
            className: `select-item text-sm`,
            children: [
              (0, $.jsx)(s, { className: `icon-md`, 'aria-hidden': `true` }),
              t(`com_nav_archived_chats`),
            ],
          }),
          (0, $.jsxs)(v, {
            onClick: () => {
              (u(h), l(!0));
            },
            className: `select-item text-sm`,
            'data-testid': `nav-files`,
            children: [
              (0, $.jsx)(y, { className: `icon-md`, 'aria-hidden': `true` }),
              t(`com_nav_my_files`),
            ],
          }),
          (0, $.jsxs)(v, {
            onClick: () => o(!0),
            className: `select-item text-sm`,
            'data-testid': `nav-settings`,
            children: [
              (0, $.jsx)(A, { className: `icon-md`, 'aria-hidden': `true` }),
              t(`com_nav_settings`),
            ],
          }),
          (0, $.jsx)(j, {}),
          (0, $.jsxs)(v, {
            onClick: () => r(),
            className: `select-item text-sm`,
            children: [
              (0, $.jsx)(b, { className: `icon-md`, 'aria-hidden': `true` }),
              t(`com_nav_log_out`),
            ],
          }),
        ],
      }),
      f && (0, $.jsx)(ie, { open: f, onOpenChange: p, triggerRef: h }),
    ],
  });
}
var se = (0, Q.memo)(oe);
export { se as default };
