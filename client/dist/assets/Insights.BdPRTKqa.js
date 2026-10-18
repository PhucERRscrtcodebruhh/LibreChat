import { o as e } from './rolldown-runtime.C0FnF6B9.js';
import { at as t, rt as n } from './advanced-inputs.BJDnsHUg.js';
import { Ir as r, Tn as i, ca as a, ir as o, ta as s } from './vendor.DpBpdTS1.js';
import { t as c } from './i18n.C6_IvY32.js';
import { h as l, r as u } from './routing.DYGR6PKW.js';
import {
  Ah as d,
  K_ as f,
  Ss as p,
  a as ee,
  cg as m,
  ef as te,
  f_ as ne,
  kl as h,
  pv as g,
  t_ as _,
  tr as re,
  vs as v,
  zn as y,
} from './hooks.CliY9jTn.js';
import { n as b } from './queries.GfyTHuBj.js';
var x = e(t(), 1);
function ie(e) {
  let t = new URLSearchParams(e);
  return (t.delete(`agentIds`), t);
}
function S(e, t) {
  return e === 403 && t.length > 0;
}
var C = 864e5;
function w(e, t) {
  let n = new Date(e);
  return { startDate: new Date(e.getTime() - t * C), endDate: n };
}
var T = n(),
  E = [
    { value: `24h`, labelKey: `com_insights_range_24_hours`, days: 1 },
    { value: `7d`, labelKey: `com_insights_range_7_days`, days: 7 },
    { value: `30d`, labelKey: `com_insights_range_30_days`, days: 30 },
  ],
  ae = 350,
  oe = 350;
function D(e, t) {
  return new Intl.NumberFormat(t, { notation: `compact`, maximumFractionDigits: 1 }).format(e);
}
function O(e, t) {
  return new Intl.NumberFormat(t).format(e);
}
function k(e, t) {
  return new Intl.DateTimeFormat(t, { month: `short`, day: `numeric`, year: `numeric` }).format(
    new Date(e),
  );
}
function A(e, t) {
  let n = new Date(e),
    r = new Date(),
    i = Math.floor((r.getTime() - n.getTime()) / 6e4),
    a = new Intl.RelativeTimeFormat(t, { numeric: `auto`, style: `narrow` });
  return i < 1
    ? a.format(0, `minute`)
    : i < 60
      ? a.format(-i, `minute`)
      : i < 1440
        ? a.format(-Math.floor(i / 60), `hour`)
        : i < 10080
          ? a.format(-Math.floor(i / 1440), `day`)
          : new Intl.DateTimeFormat(t, {
              month: `short`,
              day: `numeric`,
              ...(n.getFullYear() === r.getFullYear() ? {} : { year: `numeric` }),
            }).format(n);
}
function j(e, t) {
  return e || t(`com_insights_unknown_user`);
}
function se(e) {
  return e?.response?.status;
}
function ce(e) {
  let t = E.find((t) => t.value === e)?.days ?? 7;
  return w(new Date(), t);
}
function M({ children: e, className: t }) {
  return (0, T.jsx)(`section`, {
    className: d(
      `border-chart-widget-stroke bg-chart-widget-surface min-w-0 rounded-lg border p-5`,
      t,
    ),
    children: e,
  });
}
function N({ message: e }) {
  return (0, T.jsx)(`div`, {
    className: `text-text-secondary flex min-h-40 items-center justify-center text-sm`,
    children: e,
  });
}
function P({ message: e }) {
  return (0, T.jsxs)(M, {
    className: `flex min-h-52 flex-col items-center justify-center gap-3`,
    children: [
      (0, T.jsx)(f, { className: `text-text-secondary size-7` }),
      (0, T.jsx)(`span`, { className: `text-text-secondary text-sm`, children: e }),
    ],
  });
}
function F({ values: e, label: t, locale: n }) {
  let r = (0, x.useId)().replace(/:/g, ``),
    [i, a] = (0, x.useState)(),
    o = (0, x.useMemo)(() => {
      if (e.length < 2) return [];
      let t = Math.max(1, ...e.map((e) => e.value));
      return e.map((n, r) => ({ ...n, x: (r / (e.length - 1)) * 300, y: 52 - (n.value / t) * 46 }));
    }, [e]);
  if (o.length < 2) return (0, T.jsx)(`div`, { className: `h-14` });
  let s = o.map((e) => `${e.x},${e.y}`).join(` `),
    c = `M 0 56 L ${o.map((e) => `${e.x} ${e.y}`).join(` L `)} L 300 56 Z`,
    l = i == null ? void 0 : o[i],
    u = new Intl.DateTimeFormat(n, {
      month: `short`,
      day: `numeric`,
      year: `numeric`,
      timeZone: `UTC`,
    });
  return (0, T.jsxs)(`div`, {
    className: `text-status-info relative mt-2 h-14 w-full outline-hidden`,
    role: `img`,
    tabIndex: 0,
    'aria-label': t,
    onFocus: () => a(o.length - 1),
    onBlur: () => a(void 0),
    onMouseLeave: () => a(void 0),
    onMouseMove: (e) => {
      let t = e.currentTarget.getBoundingClientRect(),
        n = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width));
      a(Math.round(n * (o.length - 1)));
    },
    children: [
      (0, T.jsxs)(`svg`, {
        className: `h-full w-full overflow-visible`,
        viewBox: `0 0 300 56`,
        preserveAspectRatio: `none`,
        'aria-hidden': `true`,
        children: [
          (0, T.jsx)(`defs`, {
            children: (0, T.jsx)(`pattern`, {
              id: r,
              width: `6`,
              height: `6`,
              patternUnits: `userSpaceOnUse`,
              children: (0, T.jsx)(`path`, {
                d: `M-1 1 L1 -1 M0 6 L6 0 M5 7 L7 5`,
                stroke: `currentColor`,
                strokeWidth: `0.8`,
                opacity: `0.22`,
              }),
            }),
          }),
          (0, T.jsx)(`path`, { d: c, fill: `url(#${r})` }),
          (0, T.jsx)(`polyline`, {
            points: s,
            fill: `none`,
            stroke: `currentColor`,
            strokeWidth: `2`,
            vectorEffect: `non-scaling-stroke`,
          }),
        ],
      }),
      l &&
        (0, T.jsxs)(T.Fragment, {
          children: [
            (0, T.jsx)(`span`, {
              className: `bg-border-medium pointer-events-none absolute top-0 h-full w-px`,
              style: { left: `${(l.x / 300) * 100}%` },
            }),
            (0, T.jsx)(`span`, {
              className: `bg-status-info ring-surface-primary pointer-events-none absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2`,
              style: { left: `${(l.x / 300) * 100}%`, top: `${(l.y / 56) * 100}%` },
            }),
            (0, T.jsxs)(`span`, {
              className: `border-border-light bg-surface-primary text-text-primary pointer-events-none absolute bottom-full mb-2 -translate-x-1/2 rounded-lg border px-2.5 py-1.5 text-xs whitespace-nowrap shadow-lg`,
              style: { left: `${Math.max(14, Math.min(86, (l.x / 300) * 100))}%` },
              children: [
                u.format(new Date(l.date)),
                ` `,
                (0, T.jsx)(`strong`, { children: O(l.value, n) }),
              ],
            }),
          ],
        }),
    ],
  });
}
function le({ card: e, locale: t }) {
  let n = h();
  return (0, T.jsxs)(M, {
    children: [
      (0, T.jsxs)(`h2`, {
        className: `text-text-muted inline-flex items-center gap-1.5 text-sm font-normal`,
        children: [
          e.title,
          e.description &&
            (0, T.jsx)(g, {
              description: e.description,
              render: (0, T.jsx)(`button`, {
                type: `button`,
                'aria-label': e.description,
                className: `text-text-muted hover:text-text-secondary`,
                children: (0, T.jsx)(r, { className: `size-3.5`, 'aria-hidden': `true` }),
              }),
            }),
        ],
      }),
      (0, T.jsx)(`div`, {
        className: `text-text-primary mt-3 text-4xl leading-none font-semibold tabular-nums`,
        children: D(e.value, t),
      }),
      (0, T.jsx)(F, {
        values: e.sparkline,
        label: n(`com_insights_sparkline_accessibility`, { label: e.title }),
        locale: t,
      }),
    ],
  });
}
function I({ title: e, children: t }) {
  return (0, T.jsxs)(M, {
    className: `overflow-hidden`,
    children: [
      (0, T.jsx)(`h2`, {
        className: `text-text-primary mb-3 text-base font-semibold`,
        children: e,
      }),
      t,
    ],
  });
}
function L({ name: e, email: t, localize: n }) {
  return (0, T.jsxs)(`div`, {
    className: `min-w-0`,
    children: [
      (0, T.jsx)(`div`, { className: `text-text-primary truncate`, children: j(e, n) }),
      (0, T.jsx)(`div`, { className: `text-text-secondary truncate text-xs`, children: t }),
    ],
  });
}
function ue({ rows: e, localize: t, locale: n }) {
  return (0, T.jsx)(I, {
    title: t(`com_insights_top_users`),
    children:
      e.length === 0
        ? (0, T.jsx)(N, { message: t(`com_insights_no_data`) })
        : (0, T.jsx)(`div`, {
            className: `overflow-x-auto`,
            children: (0, T.jsxs)(`table`, {
              className: `w-full min-w-[26.25rem] text-left text-sm`,
              children: [
                (0, T.jsx)(`thead`, {
                  className: `border-border-medium text-text-secondary border-b text-xs`,
                  children: (0, T.jsxs)(`tr`, {
                    children: [
                      (0, T.jsx)(`th`, {
                        className: `px-2 py-2 font-medium`,
                        children: t(`com_insights_user`),
                      }),
                      (0, T.jsx)(`th`, {
                        className: `px-2 py-2 text-right font-medium`,
                        children: t(`com_insights_messages`),
                      }),
                      (0, T.jsx)(`th`, {
                        className: `px-2 py-2 text-right font-medium`,
                        children: t(`com_insights_chats`),
                      }),
                    ],
                  }),
                }),
                (0, T.jsx)(`tbody`, {
                  className: `divide-border-light divide-y`,
                  children: e.map((e) =>
                    (0, T.jsxs)(
                      `tr`,
                      {
                        className: `hover:bg-surface-hover`,
                        children: [
                          (0, T.jsx)(`td`, {
                            className: `px-2 py-3`,
                            children: (0, T.jsx)(L, { ...e, localize: t }),
                          }),
                          (0, T.jsx)(`td`, {
                            className: `px-2 py-3 text-right tabular-nums`,
                            children: O(e.messages, n),
                          }),
                          (0, T.jsx)(`td`, {
                            className: `px-2 py-3 text-right tabular-nums`,
                            children: O(e.conversations, n),
                          }),
                        ],
                      },
                      e.userId,
                    ),
                  ),
                }),
              ],
            }),
          }),
  });
}
function R({ rows: e, localize: t, locale: n }) {
  let i = t(`com_insights_churned_users_definition`);
  return (0, T.jsx)(I, {
    title: (0, T.jsxs)(`span`, {
      className: `inline-flex items-center gap-1.5`,
      children: [
        t(`com_insights_churned_users`),
        (0, T.jsx)(g, {
          description: i,
          render: (0, T.jsx)(`button`, {
            type: `button`,
            'aria-label': i,
            className: `text-text-secondary hover:text-text-primary`,
            children: (0, T.jsx)(r, { className: `size-4`, 'aria-hidden': `true` }),
          }),
        }),
      ],
    }),
    children:
      e.length === 0
        ? (0, T.jsx)(N, { message: t(`com_insights_no_data`) })
        : (0, T.jsx)(`div`, {
            className: `overflow-x-auto`,
            children: (0, T.jsxs)(`table`, {
              className: `w-full min-w-[35rem] table-fixed text-left text-sm`,
              children: [
                (0, T.jsx)(`thead`, {
                  className: `border-border-medium text-text-secondary border-b text-xs`,
                  children: (0, T.jsxs)(`tr`, {
                    children: [
                      (0, T.jsx)(`th`, {
                        className: `w-[34%] px-2 py-2 font-medium`,
                        children: t(`com_insights_user`),
                      }),
                      (0, T.jsx)(`th`, {
                        className: `w-[12%] px-2 py-2 text-right font-medium`,
                        children: t(`com_insights_messages`),
                      }),
                      (0, T.jsx)(`th`, {
                        className: `w-[12%] px-2 py-2 text-right font-medium`,
                        children: t(`com_insights_chats`),
                      }),
                      (0, T.jsx)(`th`, {
                        className: `w-[21%] px-2 py-2 text-right font-medium`,
                        children: t(`com_insights_first_seen`),
                      }),
                      (0, T.jsx)(`th`, {
                        className: `w-[21%] px-2 py-2 text-right font-medium`,
                        children: t(`com_insights_last_seen`),
                      }),
                    ],
                  }),
                }),
                (0, T.jsx)(`tbody`, {
                  className: `divide-border-light divide-y`,
                  children: e.map((e) =>
                    (0, T.jsxs)(
                      `tr`,
                      {
                        className: `hover:bg-surface-hover`,
                        children: [
                          (0, T.jsx)(`td`, {
                            className: `overflow-hidden px-2 py-3`,
                            children: (0, T.jsx)(L, { ...e, localize: t }),
                          }),
                          (0, T.jsx)(`td`, {
                            className: `px-2 py-3 text-right tabular-nums`,
                            children: O(e.messages, n),
                          }),
                          (0, T.jsx)(`td`, {
                            className: `px-2 py-3 text-right tabular-nums`,
                            children: O(e.conversations, n),
                          }),
                          (0, T.jsx)(`td`, {
                            className: `text-text-secondary px-2 py-3 text-right whitespace-nowrap`,
                            children: k(e.firstSeen, n),
                          }),
                          (0, T.jsx)(`td`, {
                            className: `text-text-secondary px-2 py-3 text-right whitespace-nowrap`,
                            children: k(e.lastSeen, n),
                          }),
                        ],
                      },
                      e.userId,
                    ),
                  ),
                }),
              ],
            }),
          }),
  });
}
function z({
  rows: e,
  search: t,
  activeSearch: n,
  page: r,
  pages: a,
  isFetching: o,
  setPage: s,
  setSearch: c,
  localize: l,
  locale: u,
}) {
  return (0, T.jsxs)(M, {
    className: `overflow-hidden`,
    children: [
      (0, T.jsxs)(`div`, {
        className: `mb-3 flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`,
        children: [
          (0, T.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, T.jsx)(`h2`, {
                className: `text-base font-semibold`,
                children: l(`com_insights_latest_conversations`),
              }),
              o && (0, T.jsx)(f, { className: `text-text-secondary size-4` }),
            ],
          }),
          (0, T.jsxs)(`div`, {
            className: `relative w-full sm:max-w-md`,
            children: [
              (0, T.jsx)(i, {
                className: `text-text-secondary pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2`,
                'aria-hidden': `true`,
              }),
              (0, T.jsx)(_, {
                'aria-label': l(`com_insights_search_placeholder`),
                className: `pl-9`,
                maxLength: 200,
                onChange: (e) => c(e.target.value),
                placeholder: l(`com_insights_search_placeholder`),
                value: t,
              }),
            ],
          }),
        ],
      }),
      (0, T.jsx)(`div`, {
        className: `overflow-x-auto`,
        children: (0, T.jsxs)(`table`, {
          className: `w-full min-w-[56.25rem] table-fixed text-left text-sm`,
          children: [
            (0, T.jsx)(`thead`, {
              className: `border-border-medium text-text-secondary border-b text-xs`,
              children: (0, T.jsxs)(`tr`, {
                children: [
                  (0, T.jsx)(`th`, {
                    className: `w-[7.5rem] px-2 py-2 font-medium`,
                    children: l(`com_insights_date`),
                  }),
                  (0, T.jsx)(`th`, {
                    className: `w-[12rem] px-2 py-2 font-medium`,
                    children: l(`com_insights_user`),
                  }),
                  (0, T.jsx)(`th`, {
                    className: `w-[10rem] px-2 py-2 font-medium`,
                    children: l(`com_insights_agent`),
                  }),
                  (0, T.jsx)(`th`, {
                    className: `px-2 py-2 font-medium`,
                    children: l(`com_insights_first_message`),
                  }),
                  (0, T.jsx)(`th`, {
                    className: `w-20 px-2 py-2 text-right font-medium`,
                    children: l(`com_insights_messages`),
                  }),
                  (0, T.jsx)(`th`, {
                    className: `w-20 px-2 py-2 text-right font-medium`,
                    children: l(`com_insights_total_tokens`),
                  }),
                ],
              }),
            }),
            (0, T.jsx)(`tbody`, {
              className: `divide-border-light divide-y`,
              children: e.map((e) =>
                (0, T.jsxs)(
                  `tr`,
                  {
                    className: `hover:bg-surface-hover`,
                    children: [
                      (0, T.jsx)(`td`, {
                        className: `text-text-secondary px-2 py-3 whitespace-nowrap`,
                        children: A(e.date, u),
                      }),
                      (0, T.jsx)(`td`, {
                        className: `px-2 py-3`,
                        children: (0, T.jsx)(L, { ...e, localize: l }),
                      }),
                      (0, T.jsx)(`td`, {
                        className: `text-text-secondary truncate px-2 py-3`,
                        children: e.agentName,
                      }),
                      (0, T.jsx)(`td`, {
                        className: `max-w-xl px-2 py-3`,
                        children: (0, T.jsx)(`span`, {
                          className: `line-clamp-2`,
                          children: e.firstMessage || l(`com_insights_no_message`),
                        }),
                      }),
                      (0, T.jsx)(`td`, {
                        className: `px-2 py-3 text-right tabular-nums`,
                        children: O(e.messages, u),
                      }),
                      (0, T.jsx)(`td`, {
                        className: `px-2 py-3 text-right tabular-nums`,
                        children: D(e.totalTokens, u),
                      }),
                    ],
                  },
                  `${e.conversationId}:${e.userId}`,
                ),
              ),
            }),
          ],
        }),
      }),
      e.length === 0 &&
        (0, T.jsx)(N, {
          message: l(n ? `com_insights_no_search_results` : `com_insights_no_data`),
        }),
      (0, T.jsxs)(`div`, {
        className: `border-border-light text-text-secondary mt-3 flex items-center justify-between gap-3 border-t pt-3 text-sm`,
        children: [
          (0, T.jsx)(`span`, { children: l(`com_insights_page_of`, { page: r, pages: a }) }),
          (0, T.jsxs)(`div`, {
            className: `flex gap-2`,
            children: [
              (0, T.jsx)(m, {
                variant: `outline`,
                size: `sm`,
                disabled: o || r <= 1,
                onClick: () => s((e) => Math.max(1, e - 1)),
                children: l(`com_ui_prev`),
              }),
              (0, T.jsx)(m, {
                variant: `outline`,
                size: `sm`,
                disabled: o || r >= a,
                onClick: () => s((e) => e + 1),
                children: l(`com_ui_next`),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function B() {
  let e = h(),
    [t, n] = l(),
    { i18n: r } = c(),
    i = r.resolvedLanguage ?? r.language ?? `en`,
    f = Intl.DateTimeFormat().resolvedOptions().timeZone || `UTC`,
    { user: g } = re(),
    { data: _, isLoading: C } = te(),
    [w, D] = (0, x.useState)(`7d`),
    [O, k] = (0, x.useState)(),
    [A, j] = (0, x.useState)(``),
    [N, F] = (0, x.useState)(``),
    [I, L] = (0, x.useState)(1),
    [B, V] = (0, x.useState)(null),
    H = (0, x.useRef)(),
    de = v(),
    U = _?.insightsEnabled === !0,
    W = (0, x.useMemo)(() => [...new Set(t.getAll(`agentIds`).filter(Boolean))].sort(), [t]),
    fe = (0, x.useMemo)(() => {
      let e = {
        page: I,
        pageSize: 10,
        search: N,
        timeZone: f,
        ...(W.length > 0 ? { agentIds: W } : {}),
      };
      return O
        ? {
            ...e,
            range: `custom`,
            fromTimestamp: O.startDate.toISOString(),
            toTimestamp: O.endDate.toISOString(),
          }
        : { ...e, range: w };
    }, [O, I, w, N, W, f]),
    G = (0, x.useMemo)(() => O ?? ce(w), [O, w]),
    K = b(fe, { enabled: !!g && U, retry: !1 }),
    q = K.data,
    J = se(K.error),
    Y = S(J, W),
    X = (0, x.useMemo)(() => {
      if (!q) return [];
      let e = new Map();
      for (let t of q.agents) e.set(t.name, (e.get(t.name) ?? 0) + 1);
      return q.agents.map((t) => ({
        value: t.id,
        label: (e.get(t.name) ?? 0) > 1 ? `${t.name} (${t.id.slice(-6)})` : t.name,
      }));
    }, [q]),
    pe = (0, x.useMemo)(() => (W.length > 0 ? W : X.map((e) => e.value)), [X, W]),
    Z = B ?? pe;
  (ee(`${e(`com_insights_title`)} | LibreChat`),
    (0, x.useEffect)(
      () => () => {
        H.current != null && window.clearTimeout(H.current);
      },
      [],
    ),
    (0, x.useEffect)(() => {
      let e = A.trim().slice(0, 200),
        t = e.length >= 3 ? e : ``;
      if (t === N) return;
      let n = window.setTimeout(() => {
        (F(t), L(1));
      }, oe);
      return () => window.clearTimeout(n);
    }, [N, A]),
    (0, x.useEffect)(() => {
      Y && (n(ie(t), { replace: !0 }), L(1));
    }, [Y, n, t]));
  let me = (0, x.useMemo)(
      () =>
        q
          ? [
              {
                id: `conversations`,
                title: e(`com_insights_total_conversations`),
                description: e(`com_insights_conversations_definition`),
                value: q.summary.totalConversations,
                sparkline: q.daily.map((e) => ({ date: e.date, value: e.conversations })),
              },
              {
                id: `users`,
                title: e(`com_insights_total_users`),
                value: q.summary.totalUsers,
                sparkline: q.daily.map((e) => ({ date: e.date, value: e.users })),
              },
              {
                id: `messages`,
                title: e(`com_insights_messages`),
                value: q.summary.totalMessages,
                sparkline: q.daily.map((e) => ({ date: e.date, value: e.messages })),
              },
              {
                id: `tokens`,
                title: e(`com_insights_total_tokens`),
                value: q.summary.totalTokens,
                sparkline: q.daily.map((e) => ({ date: e.date, value: e.totalTokens })),
              },
            ]
          : [],
      [q, e],
    ),
    he = (e, t) => {
      (H.current != null && window.clearTimeout(H.current),
        (H.current = window.setTimeout(() => {
          (k({ startDate: new Date(e), endDate: new Date(t) }), L(1), (H.current = void 0));
        }, ae)));
    },
    Q = (e) => {
      if (!q) return;
      if (e.length === 0) {
        V([]);
        return;
      }
      V(null);
      let r = [...new Set(e)].sort(),
        i = q.agents.map((e) => e.id).sort(),
        a = new URLSearchParams(t);
      if ((a.delete(`agentIds`), r.length !== i.length || r.some((e, t) => e !== i[t])))
        for (let e of r) a.append(`agentIds`, e);
      (n(a, { replace: !0 }), L(1));
    },
    $ = X.length > 0 && Z.length === X.length,
    ge = Z.length > 0;
  return C || (U && (K.isLoading || Y))
    ? (0, T.jsx)(`div`, {
        className: `bg-surface-primary-alt h-full w-full p-4`,
        children: (0, T.jsx)(P, { message: e(`com_insights_loading`) }),
      })
    : U
      ? (0, T.jsxs)(`div`, {
          className: `bg-surface-primary-alt text-text-primary flex h-full w-full min-w-0 flex-col`,
          children: [
            (0, T.jsxs)(`header`, {
              className: `bg-surface-primary-alt z-20 flex min-h-14 w-full shrink-0 flex-col gap-3 px-4 py-3 sm:px-5 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8`,
              children: [
                (0, T.jsxs)(`div`, {
                  className: `flex min-w-0 items-center gap-3`,
                  children: [
                    de && (0, T.jsx)(p, {}),
                    (0, T.jsx)(`h1`, {
                      className: `text-base font-semibold`,
                      children: e(`com_insights_title`),
                    }),
                  ],
                }),
                (0, T.jsxs)(`div`, {
                  className: `flex max-w-full flex-wrap items-center gap-2 md:flex-nowrap`,
                  children: [
                    q &&
                      (0, T.jsx)(ne, {
                        placeholder: e(`com_ui_agents`),
                        items: X,
                        selectedValues: Z,
                        setSelectedValues: Q,
                        onOpenChange: (e) => {
                          e || V(null);
                        },
                        disabled: X.length <= 1,
                        showSelectedValues: !0,
                        showItemCheckboxes: !0,
                        searchPlaceholder: X.length > 10 ? e(`com_insights_search_agents`) : void 0,
                        searchEmptyText: e(`com_insights_no_agents_found`),
                        className: `w-full min-w-0 sm:w-72`,
                        selectClassName: `h-8 w-full rounded border border-border-medium bg-surface-tertiary px-3 py-1 shadow-none hover:border-border-heavy data-[state=open]:border-border-heavy dark:hover:bg-chart-widget-stroke dark:data-[state=open]:bg-chart-widget-stroke`,
                        itemClassName: `rounded-none px-4 py-1.5`,
                        popoverClassName: `max-h-80 rounded border-border-medium px-0 py-2`,
                        surface: `widget`,
                        renderSelectedValues: (t) =>
                          t.length === 0
                            ? e(`com_insights_no_agents_selected`)
                            : t.length === X.length
                              ? e(`com_insights_all_agents`, { count: X.length })
                              : t.length === 1
                                ? (X.find((e) => e.value === t[0])?.label ?? t[0])
                                : e(`com_insights_agents_selected`, { count: t.length }),
                        popoverHeader: (0, T.jsx)(`div`, {
                          className: `border-border-light border-b`,
                          children: (0, T.jsxs)(m, {
                            type: `button`,
                            size: `sm`,
                            variant: `ghost`,
                            'aria-label':
                              Z.length > 0
                                ? e(`com_ui_clear_all`)
                                : e(`com_insights_select_all_agents`),
                            className: `text-text-primary hover:bg-surface-hover h-10 w-full justify-start gap-2 rounded-none px-4 font-medium`,
                            onClick: () => Q(Z.length > 0 ? [] : X.map((e) => e.value)),
                            children: [
                              (0, T.jsxs)(`span`, {
                                'aria-hidden': `true`,
                                className: d(
                                  `border-border-xheavy flex size-4 shrink-0 items-center justify-center rounded-sm border`,
                                  Z.length > 0 && `bg-surface-inverted text-text-inverted`,
                                ),
                                children: [
                                  $ && (0, T.jsx)(a, { className: `size-3.5`, strokeWidth: 2 }),
                                  ge &&
                                    !$ &&
                                    (0, T.jsx)(o, { className: `size-3.5`, strokeWidth: 2 }),
                                ],
                              }),
                              (0, T.jsx)(`span`, { children: e(`com_insights_all_agents_label`) }),
                              Z.length > 0 &&
                                Z.length < X.length &&
                                (0, T.jsxs)(`span`, {
                                  className: `text-text-secondary`,
                                  children: [`(`, Z.length, `)`],
                                }),
                            ],
                          }),
                        }),
                      }),
                    (0, T.jsx)(`div`, {
                      className: `border-border-light inline-flex rounded-lg border p-0.5`,
                      children: E.map((t) =>
                        (0, T.jsx)(
                          m,
                          {
                            size: `sm`,
                            variant: `ghost`,
                            'aria-pressed': !O && w === t.value,
                            className: d(
                              `h-8 rounded-md px-3`,
                              !O && w === t.value && `bg-surface-active-alt`,
                            ),
                            onClick: () => {
                              (H.current != null &&
                                (window.clearTimeout(H.current), (H.current = void 0)),
                                D(t.value),
                                k(void 0),
                                L(1));
                            },
                            children: e(t.labelKey),
                          },
                          t.value,
                        ),
                      ),
                    }),
                    (0, T.jsx)(`div`, {
                      className: `w-full min-w-0 sm:w-[21.25rem]`,
                      children: (0, T.jsx)(y, {
                        endDate: G.endDate,
                        futureDatesDisabled: !0,
                        labels: {
                          apply: e(`com_ui_done`),
                          cancel: e(`com_ui_cancel`),
                          endDate: e(`com_insights_end_date`),
                          invalidRange: e(`com_insights_invalid_date_range`, { days: 30 }),
                          startDate: e(`com_insights_start_date`),
                        },
                        locale: i,
                        maxRangeLength: 30,
                        onSelectDateRange: he,
                        placeholder: e(`com_insights_date_range_placeholder`),
                        startDate: G.startDate,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, T.jsx)(`main`, {
              className: `min-h-0 flex-1 overflow-x-hidden overflow-y-auto`,
              children: (0, T.jsxs)(`div`, {
                className: `flex w-full min-w-0 flex-col gap-3 px-8 pt-8 pb-4`,
                children: [
                  K.isLoading && (0, T.jsx)(P, { message: e(`com_insights_loading`) }),
                  K.isError &&
                    (0, T.jsxs)(M, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, T.jsx)(s, { className: `text-status-error size-4` }),
                        (0, T.jsx)(`span`, {
                          className: `text-sm`,
                          children: e(
                            J === 403 ? `com_insights_forbidden` : `com_insights_load_error`,
                          ),
                        }),
                      ],
                    }),
                  q &&
                    (0, T.jsxs)(T.Fragment, {
                      children: [
                        (0, T.jsx)(`div`, {
                          className: `grid w-full grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4`,
                          children: me.map((e) => (0, T.jsx)(le, { card: e, locale: i }, e.id)),
                        }),
                        (0, T.jsxs)(`div`, {
                          className: `grid w-full grid-cols-[repeat(auto-fit,minmax(min(100%,36.25rem),1fr))] gap-3`,
                          children: [
                            (0, T.jsx)(ue, { rows: q.topUsers, localize: e, locale: i }),
                            (0, T.jsx)(R, { rows: q.churnedUsers, localize: e, locale: i }),
                          ],
                        }),
                        (0, T.jsx)(z, {
                          rows: q.latest.conversations,
                          search: A,
                          activeSearch: N,
                          page: q.latest.page,
                          pages: q.latest.pages,
                          isFetching: K.isFetching,
                          setPage: L,
                          setSearch: j,
                          localize: e,
                          locale: i,
                        }),
                      ],
                    }),
                ],
              }),
            }),
          ],
        })
      : (0, T.jsx)(u, { to: `/c/new`, replace: !0 });
}
export { B as default };
