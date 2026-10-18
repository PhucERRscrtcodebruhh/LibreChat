import { rt as e } from './advanced-inputs.BJDnsHUg.js';
import { d as t, h as n, l as r, p as i, r as a } from './routing.DYGR6PKW.js';
import {
  K_ as o,
  Kd as s,
  Qn as c,
  Ss as l,
  Xv as u,
  Yv as d,
  kl as f,
  tr as p,
  vs as m,
} from './hooks.CliY9jTn.js';
import { a as h, i as g, n as _, r as v, t as y } from './forms.BZFBE0UC.js';
var b = e();
function x() {
  let { skillId: e } = i(),
    t = r(),
    n = f(),
    { user: s, roles: l } = p(),
    m = c({ permissionType: d.SKILLS, permission: u.USE }),
    h = c({ permissionType: d.SKILLS, permission: u.CREATE }),
    g = t.pathname.endsWith(`/new`),
    _ = t.pathname.endsWith(`/edit`);
  return s?.role == null || l?.[s.role] == null
    ? (0, b.jsx)(`div`, {
        className: `bg-surface-primary-alt flex h-full w-full items-center justify-center`,
        children: (0, b.jsx)(o, {
          className: `text-text-secondary`,
          'aria-label': n(`com_ui_loading`),
        }),
      })
    : m
      ? g && !h
        ? (0, b.jsx)(a, { to: `/skills`, replace: !0 })
        : g
          ? (0, b.jsx)(S, {})
          : e
            ? _
              ? (0, b.jsx)(w, { skillId: e })
              : (0, b.jsx)(C, { skillId: e })
            : (0, b.jsxs)(`div`, {
                className: `bg-surface-primary-alt flex h-full w-full flex-col`,
                children: [
                  (0, b.jsx)(T, {}),
                  (0, b.jsx)(`div`, {
                    className: `flex flex-1 flex-col items-center justify-center`,
                    children: (0, b.jsx)(v, {
                      title: n(`com_ui_skill_no_selection`),
                      description: n(`com_ui_skill_no_selection_desc`),
                    }),
                  }),
                ],
              })
      : (0, b.jsx)(a, { to: `/c/new`, replace: !0 });
}
function S() {
  return (0, b.jsxs)(`div`, {
    className: `bg-surface-primary-alt flex h-full w-full flex-col overflow-y-auto`,
    children: [(0, b.jsx)(T, {}), (0, b.jsx)(_, {})],
  });
}
function C({ skillId: e }) {
  let r = f(),
    i = t(),
    [a] = n(),
    c = a.get(`file`),
    l = s(e, { enabled: !!e });
  return c
    ? (0, b.jsxs)(`div`, {
        className: `bg-surface-primary-alt flex h-full w-full flex-col`,
        children: [
          (0, b.jsx)(T, {}),
          (0, b.jsx)(g, { skillId: e, relativePath: c, skill: l.data }, `${e}:${c}`),
        ],
      })
    : l.isLoading
      ? (0, b.jsx)(`div`, {
          className: `bg-surface-primary-alt flex h-full w-full items-center justify-center`,
          children: (0, b.jsx)(o, {
            className: `text-text-secondary`,
            'aria-label': r(`com_ui_loading`),
          }),
        })
      : l.isError || !l.data
        ? (0, b.jsxs)(`div`, {
            className: `bg-surface-primary-alt flex h-full w-full flex-col`,
            children: [
              (0, b.jsx)(T, {}),
              (0, b.jsx)(v, {
                variant: `error`,
                title: r(`com_ui_skill_not_found`),
                description: r(`com_ui_skill_not_found_description`),
              }),
            ],
          })
        : (0, b.jsxs)(`div`, {
            className: `bg-surface-primary-alt flex h-full w-full flex-col`,
            children: [
              (0, b.jsx)(T, {}),
              (0, b.jsx)(h, {
                skill: l.data,
                onEdit: () => i(`/skills/${e}/edit`),
                onDelete: () => i(`/skills`, { replace: !0 }),
              }),
            ],
          });
}
function w({ skillId: e }) {
  return (0, b.jsxs)(`div`, {
    className: `bg-surface-primary-alt flex h-full w-full flex-col overflow-y-auto`,
    children: [(0, b.jsx)(T, {}), (0, b.jsx)(y, { skillId: e })],
  });
}
function T() {
  return m()
    ? (0, b.jsx)(`div`, {
        className: `flex shrink-0 items-center px-4 pt-3`,
        children: (0, b.jsx)(l, {}),
      })
    : null;
}
export { x as default };
