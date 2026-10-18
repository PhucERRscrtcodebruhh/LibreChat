import { o as e } from './rolldown-runtime.C0FnF6B9.js';
import { at as t, rt as n } from './advanced-inputs.BJDnsHUg.js';
import {
  Bi as r,
  Gn as i,
  Ir as a,
  J as o,
  Jn as s,
  Ln as c,
  Na as l,
  Ni as u,
  Qt as d,
  Ut as f,
  W as p,
  Xt as m,
  ao as h,
  hi as g,
  ki as _,
  ma as v,
  mt as y,
  nr as b,
  oo as x,
  ot as S,
  qt as C,
  yi as w,
  yn as T,
} from './vendor.DpBpdTS1.js';
import { d as E, n as D } from './routing.DYGR6PKW.js';
import { r as O } from './query-devtools.C2qG3_c-.js';
import { h as k } from './tanstack-vendor.DDeX4vva.js';
import {
  $v as A,
  Ah as j,
  Bb as M,
  Bn as N,
  C as P,
  E as F,
  Eg as I,
  Gl as ee,
  H_ as te,
  Jd as ne,
  Jv as L,
  K_ as re,
  Mb as ie,
  Pg as ae,
  Qn as oe,
  Qv as R,
  Rg as se,
  Rn as ce,
  T as le,
  Vd as ue,
  Wv as z,
  Xv as B,
  Y_ as de,
  Yv as fe,
  Zn as pe,
  Zv as me,
  _x as he,
  cg as V,
  fb as H,
  fm as ge,
  hb as _e,
  kl as U,
  m_ as ve,
  nv as ye,
  pv as W,
  qb as be,
  qd as xe,
  rv as G,
  s_ as K,
  t_ as q,
  tr as Se,
  vx as Ce,
  wg as J,
} from './hooks.CliY9jTn.js';
import {
  _ as we,
  f as Te,
  i as Ee,
  l as De,
  o as Oe,
  s as ke,
  u as Ae,
} from './markdown-processing.TMtFeQR7.js';
import { c as je } from './date-utils.C_DbPEjY.js';
import { a as Me, i as Y, n as Ne, t as X } from './forms.UHk3QTvM.js';
function Z(e) {
  return Array.isArray(e.pages);
}
function Pe(e, t) {
  e.setQueriesData([H.skills], (e) => {
    if (!e) return e;
    if (Z(e)) {
      let n = e.pages.map((e) => ({ ...e, skills: e.skills.filter((e) => e._id !== t._id) }));
      return { ...e, pages: n.map((e, n) => (n === 0 ? { ...e, skills: [t, ...e.skills] } : e)) };
    }
    return { ...e, skills: [t, ...e.skills.filter((e) => e._id !== t._id)] };
  });
}
function Fe(e, t) {
  e.setQueriesData(
    [H.skills],
    (e) =>
      e &&
      (Z(e)
        ? {
            ...e,
            pages: e.pages.map((e) => ({
              ...e,
              skills: e.skills.map((e) => (e._id === t._id ? t : e)),
            })),
          }
        : { ...e, skills: e.skills.map((e) => (e._id === t._id ? t : e)) }),
  );
}
function Ie(e, t) {
  e.setQueriesData(
    [H.skills],
    (e) =>
      e &&
      (Z(e)
        ? {
            ...e,
            pages: e.pages.map((e) => ({ ...e, skills: e.skills.filter((e) => e._id !== t) })),
          }
        : { ...e, skills: e.skills.filter((e) => e._id !== t) }),
  );
}
var Le = (e) => {
    let t = O(),
      { onSuccess: n, ...r } = e ?? {};
    return k({
      mutationFn: (e) => M.createSkill(e),
      ...r,
      onSuccess: async (e, r, i) => {
        (await t.cancelQueries([H.skills]),
          t.setQueryData([H.skill, e._id], e),
          Pe(t, e),
          t.invalidateQueries([H.skills]),
          n && n(e, r, i));
      },
    });
  },
  Re = (e) => {
    let t = O(),
      { onError: n, onSuccess: r, ...i } = e ?? {};
    return k({
      mutationFn: (e) => M.importSkill(e),
      ...i,
      onSuccess: async (e, n, i) => {
        (await t.cancelQueries([H.skills]),
          t.setQueryData([H.skill, e._id], e),
          Pe(t, e),
          t.invalidateQueries([H.skills]),
          r && r(e, n, i));
      },
      onError: (e, r, i) => {
        let a = e?.response?.data;
        ((a?.error === `skill_import_incomplete` ||
          a?.error === `skill_import_rollback_failed` ||
          a?.error === `skill_import_cleanup_incomplete`) &&
          (t.removeQueries([H.skills], { type: `inactive` }), t.invalidateQueries([H.skills])),
          n && n(e, r, i));
      },
    });
  },
  ze = (e) => {
    let t = O(),
      { onMutate: n, onError: r, onSuccess: i, ...a } = e ?? {};
    return k({
      mutationFn: (e) => M.updateSkill(e),
      ...a,
      onMutate: async (e) => {
        (await t.cancelQueries([H.skill, e.id]), await t.cancelQueries([H.skills]));
        let r = t.getQueryData([H.skill, e.id]),
          i = t.getQueriesData([H.skills]);
        if (r) {
          let n = {
            ...r,
            ...e.payload,
            frontmatter: { ...(r.frontmatter ?? {}), ...(e.payload.frontmatter ?? {}) },
          };
          (t.setQueryData([H.skill, e.id], n), Fe(t, n));
        }
        return { previousSkill: r, previousListSnapshots: i, userContext: await n?.(e) };
      },
      onError: (e, n, i) => {
        if (
          (i?.previousSkill && t.setQueryData([H.skill, n.id], i.previousSkill),
          i?.previousListSnapshots)
        )
          for (let [e, n] of i.previousListSnapshots) t.setQueryData(e, n);
        r && r(e, n, i);
      },
      onSuccess: (e, n, r) => {
        (t.setQueryData([H.skill, e._id], e), Fe(t, e), i && i(e, n, r));
      },
    });
  },
  Be = (e) => {
    let t = O(),
      { onSuccess: n, ...r } = e ?? {};
    return k({
      mutationFn: ({ id: e }) => M.deleteSkill(e),
      ...r,
      onSuccess: (e, r, i) => {
        (t.removeQueries([H.skill, r.id]),
          t.removeQueries([H.skillFiles, r.id]),
          Ie(t, r.id),
          n && n(e, r, i));
      },
    });
  },
  Ve = (e) => {
    let t = O(),
      { onSuccess: n, ...r } = e ?? {};
    return k({
      mutationFn: ({ skillId: e, formData: t }) => M.uploadSkillFile(e, t),
      ...r,
      onSuccess: async (e, r, i) => {
        (await Promise.all([
          t.cancelQueries([H.skillFiles, r.skillId]),
          t.cancelQueries([H.skillFileContent, r.skillId, e.relativePath]),
        ]),
          t.setQueryData(
            [H.skillFiles, r.skillId],
            (t) => t && { files: [...t.files.filter((t) => t.relativePath !== e.relativePath), e] },
          ),
          t.invalidateQueries([H.skill, r.skillId]),
          n && n(e, r, i),
          t.invalidateQueries([H.skillFiles, r.skillId]),
          t.invalidateQueries([H.skillFileContent, r.skillId, e.relativePath]));
      },
    });
  },
  Q = e(t(), 1),
  $ = n();
function He({
  isOpen: e,
  setIsOpen: t,
  defaultName: n = ``,
  defaultDescription: r = ``,
  defaultBody: i = ``,
  onCreated: a,
}) {
  let o = U(),
    s = E(),
    { showToast: c } = z(),
    {
      register: l,
      handleSubmit: u,
      reset: d,
      formState: { isValid: f, isSubmitting: p, errors: m },
    } = Y({ defaultValues: { name: n, description: r, body: i }, mode: `onChange` }),
    h = Le({
      onSuccess: (e) => {
        if ((c({ status: `success`, message: o(`com_ui_skill_created`) }), t(!1), d(), a)) {
          a(e);
          return;
        }
        s(`/skills/${e._id}`);
      },
      onError: (e) => {
        let t = e?.response,
          n = ({ field: e, code: t }) =>
            e === `name` && t === `REQUIRED`
              ? o(`com_ui_skill_name_required`)
              : e === `name` && t === `TOO_LONG`
                ? o(`com_ui_skill_name_too_long`, { 0: 64 })
                : e === `name` && t === `INVALID_FORMAT`
                  ? o(`com_ui_skill_name_invalid`)
                  : e === `name` && (t === `RESERVED_PREFIX` || t === `RESERVED_WORD`)
                    ? o(`com_ui_skill_name_reserved`)
                    : e === `description` && t === `REQUIRED`
                      ? o(`com_ui_skill_description_required`)
                      : e === `description` && t === `TOO_LONG`
                        ? o(`com_ui_skill_description_too_long`, { 0: R })
                        : e === `body` && t === `TOO_LONG`
                          ? o(`com_ui_skill_instructions_too_long`, { 0: me })
                          : o(`com_ui_skill_validation_error`),
          r = t?.data,
          i = r?.message || o(`com_ui_skill_create_error`);
        (t?.status === 409 && (i = o(`com_ui_skill_name_exists`)),
          r?.issues?.length && (i = r.issues.map(n).join(`; `)),
          c({ status: `error`, message: i }));
      },
    }),
    g = (e) => {
      h.isLoading ||
        h.mutate({ name: e.name.trim(), description: e.description.trim(), body: e.body });
    },
    _ = () => {
      (t(!1), d());
    },
    v = (e) => (e.stopPropagation(), u(g)(e)),
    y = !f || p || h.isLoading;
  return (0, $.jsx)(J, {
    open: e,
    onOpenChange: t,
    children: (0, $.jsx)(I, {
      className: `w-11/12 max-w-5xl overflow-hidden`,
      showCloseButton: !1,
      children: (0, $.jsxs)(`form`, {
        onSubmit: v,
        className: `flex max-h-[80vh] min-w-0 flex-col gap-3 overflow-hidden p-1 sm:gap-4 sm:p-2`,
        children: [
          (0, $.jsx)(`h2`, {
            className: `text-text-primary text-lg font-bold`,
            children: o(`com_ui_skill_write_instructions`),
          }),
          (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-1.5`,
            children: [
              (0, $.jsx)(K, {
                htmlFor: `create-skill-name`,
                className: `text-text-secondary text-sm font-medium`,
                children: o(`com_ui_name`),
              }),
              (0, $.jsx)(q, {
                id: `create-skill-name`,
                placeholder: o(`com_ui_skill_name_placeholder`),
                'aria-invalid': m.name ? `true` : `false`,
                autoComplete: `off`,
                className: `border-border-medium text-text-primary placeholder:text-text-secondary focus-visible:ring-ring-primary flex h-10 w-full rounded-xl border bg-transparent px-3 py-2 text-sm focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50`,
                ...l(`name`, {
                  required: o(`com_ui_skill_name_required`),
                  pattern: { value: A, message: o(`com_ui_skill_name_invalid`) },
                  maxLength: { value: 64, message: o(`com_ui_skill_name_too_long`, { 0: `64` }) },
                }),
              }),
              m.name &&
                (0, $.jsx)(`p`, {
                  className: `text-text-destructive text-xs`,
                  children: m.name.message,
                }),
            ],
          }),
          (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-1.5`,
            children: [
              (0, $.jsx)(`label`, {
                htmlFor: `create-skill-description`,
                className: `text-text-secondary text-sm font-medium`,
                children: o(`com_ui_description`),
              }),
              (0, $.jsx)(G, {
                focusOutline: `hidden`,
                id: `create-skill-description`,
                minRows: 2,
                maxRows: 4,
                placeholder: o(`com_ui_skill_description_placeholder`),
                'aria-label': o(`com_ui_description`),
                'aria-invalid': m.description ? `true` : `false`,
                'aria-describedby': m.description ? `create-skill-description-error` : void 0,
                className: `border-border-medium text-text-primary placeholder:text-text-secondary focus-visible:ring-ring-primary w-full resize-none rounded-xl border bg-transparent px-3 py-2 text-sm focus-visible:ring-2`,
                ...l(`description`, {
                  required: o(`com_ui_skill_description_required`),
                  maxLength: {
                    value: R,
                    message: o(`com_ui_skill_description_too_long`, { 0: String(R) }),
                  },
                }),
              }),
              m.description &&
                (0, $.jsx)(`p`, {
                  id: `create-skill-description-error`,
                  className: `text-text-destructive mt-1 text-sm`,
                  role: `alert`,
                  children: m.description.message,
                }),
            ],
          }),
          (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-1.5`,
            children: [
              (0, $.jsx)(`label`, {
                htmlFor: `create-skill-body`,
                className: `text-text-secondary text-sm font-medium`,
                children: o(`com_ui_skill_instructions`),
              }),
              (0, $.jsx)(G, {
                focusOutline: `hidden`,
                id: `create-skill-body`,
                minRows: 6,
                maxRows: 12,
                placeholder: o(`com_ui_skill_instructions_placeholder`),
                'aria-label': o(`com_ui_skill_instructions`),
                className: `border-border-medium text-text-primary placeholder:text-text-secondary focus-visible:ring-ring-primary w-full resize-none rounded-xl border bg-transparent px-3 py-2 text-sm focus-visible:ring-2`,
                ...l(`body`),
              }),
            ],
          }),
          (0, $.jsxs)(`div`, {
            className: `flex items-center justify-end gap-2 pt-2`,
            children: [
              (0, $.jsx)(V, {
                type: `button`,
                variant: `outline`,
                onClick: _,
                children: o(`com_ui_cancel`),
              }),
              (0, $.jsx)(V, {
                type: `submit`,
                variant: `submit`,
                disabled: y,
                'aria-busy': h.isLoading,
                className: j(y && `opacity-50`),
                children: o(h.isLoading ? `com_ui_creating` : `com_ui_create`),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function Ue({ skillId: e, skillName: t, disabled: n, onDelete: r }) {
  let i = U(),
    { showToast: a } = z(),
    o = Be({
      onSuccess: (e) => {
        let t = e.cleanupComplete !== !1;
        (a({
          status: t ? `success` : `error`,
          message: i(t ? `com_ui_skill_deleted` : `com_ui_skill_delete_partial`),
        }),
          r?.());
      },
      onError: () => {
        a({ status: `error`, message: i(`com_ui_skill_delete_error`) });
      },
    }),
    s = () => {
      o.isLoading || o.mutate({ id: e });
    },
    c = n || o.isLoading;
  return (0, $.jsxs)(J, {
    children: [
      (0, $.jsx)(ae, {
        asChild: !0,
        children: (0, $.jsx)(W, {
          description: i(`com_ui_delete`),
          side: `bottom`,
          render: (0, $.jsx)(V, {
            variant: `destructive`,
            size: `icon`,
            className: `size-9`,
            'aria-label': i(`com_ui_delete`),
            disabled: c,
            onClick: (e) => e.stopPropagation(),
            children: (0, $.jsx)(d, { className: `size-5`, 'aria-hidden': `true` }),
          }),
        }),
      }),
      (0, $.jsx)(ve, {
        showCloseButton: !1,
        title: i(`com_ui_delete`),
        className: `max-w-[28.125rem]`,
        main: (0, $.jsx)(`p`, {
          className: `text-text-primary text-left text-sm`,
          children: i(`com_ui_skill_delete_confirm`, { 0: t }),
        }),
        selection: {
          selectHandler: s,
          selectClasses: `bg-surface-destructive hover:bg-surface-destructive-hover transition-colors duration-200 text-text-on-status`,
          selectText: i(`com_ui_delete`),
        },
      }),
    ],
  });
}
var We = (0, Q.memo)(Ue);
function Ge(e) {
  let t = e / he;
  return Number.isInteger(t) ? `${t}` : t.toFixed(1);
}
var Ke = {
  invalid_path: `com_ui_skill_upload_reason_invalid_path`,
  file_too_large: `com_ui_skill_upload_reason_file_too_large`,
  archive_too_large: `com_ui_skill_upload_reason_archive_too_large`,
  archive_entry_changed: `com_ui_skill_upload_reason_archive_entry_changed`,
  persistence_failed: `com_ui_skill_upload_reason_persistence_failed`,
};
function qe(e) {
  let t = e?.response?.data;
  if (typeof t != `object` || !t) return null;
  let n = t;
  return (n.error !== `skill_import_incomplete` &&
    n.error !== `skill_import_rollback_failed` &&
    n.error !== `skill_import_cleanup_incomplete`) ||
    !Array.isArray(n.failedFiles)
    ? null
    : { code: n.error, files: n.failedFiles };
}
function Je(e) {
  return e === `skill_import_rollback_failed`
    ? `com_ui_skill_upload_rollback_failed`
    : e === `skill_import_cleanup_incomplete`
      ? `com_ui_skill_upload_cleanup_incomplete`
      : `com_ui_skill_upload_incomplete`;
}
function Ye(e) {
  return e === `skill_import_rollback_failed`
    ? `com_ui_skill_upload_rollback_failed_files`
    : e === `skill_import_cleanup_incomplete`
      ? `com_ui_skill_upload_cleanup_incomplete_files`
      : `com_ui_skill_upload_failed_files`;
}
function Xe({ isOpen: e, setIsOpen: t }) {
  let n = U(),
    r = E(),
    { showToast: i } = z(),
    a = (0, Q.useRef)(null),
    [o, s] = (0, Q.useState)(!1),
    [c, l] = (0, Q.useState)(null),
    u = (0, Q.useRef)(0),
    d = (0, Q.useRef)(0),
    { data: f = { configuredSizeLimitMb: void 0, fileConfig: be } } = ue({
      select: (e) => ({ configuredSizeLimitMb: e?.skills?.fileSizeLimit, fileConfig: Ce(e) }),
    }),
    { configuredSizeLimitMb: p, fileConfig: m } = f,
    h = m.skills?.fileSizeLimit ?? be.skills?.fileSizeLimit ?? 0,
    g = p === void 0 ? Ge(h) : `${p}`,
    _ = Re({
      onSuccess: (e) => {
        d.current === u.current &&
          (l(null),
          i({ status: `success`, message: n(`com_ui_skill_created`) }),
          t(!1),
          r(`/skills/${e._id}`));
      },
      onError: (e) => {
        if (d.current !== u.current) return;
        let t = qe(e);
        if (t != null) {
          (l(t), i({ status: `error`, message: n(Je(t.code), { 0: `${t.files.length}` }) }));
          return;
        }
        let r = e?.response?.data,
          a = r?.message ?? r?.error ?? n(`com_ui_create_skill_upload_error`);
        (l(null), i({ status: `error`, message: a }));
      },
    }),
    v = (0, Q.useCallback)(
      (e) => {
        if (_.isLoading) return;
        if ((l(null), e.size > h)) {
          i({ status: `error`, message: n(`com_ui_skill_upload_size_error`, { 0: g }) });
          return;
        }
        let t = new FormData();
        (t.append(`file`, e, e.name), (d.current = u.current), _.mutate(t));
      },
      [g, _, n, i, h],
    ),
    y = (0, Q.useCallback)(
      (e) => {
        let t = e.target.files?.[0];
        (t && v(t), (e.target.value = ``));
      },
      [v],
    ),
    b = (0, Q.useCallback)(
      (e) => {
        (e.preventDefault(), s(!1));
        let t = e.dataTransfer.files?.[0];
        t && v(t);
      },
      [v],
    );
  return (0, $.jsx)(J, {
    open: e,
    onOpenChange: (e) => {
      (e || ((u.current += 1), l(null)), t(e));
    },
    children: (0, $.jsx)(I, {
      className: `w-11/12 max-w-lg overflow-hidden`,
      children: (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-6 p-1 sm:p-2`,
        children: [
          (0, $.jsx)(`h2`, {
            className: `text-text-primary text-lg font-bold`,
            children: n(`com_ui_skill_upload_title`),
          }),
          (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-3`,
            children: [
              (0, $.jsxs)(`button`, {
                type: `button`,
                onClick: () => a.current?.click(),
                onDragOver: (e) => {
                  (e.preventDefault(), s(!0));
                },
                onDragLeave: () => s(!1),
                onDrop: b,
                disabled: _.isLoading,
                className: j(
                  `text-text-secondary flex h-[7.5rem] w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed text-sm transition-colors`,
                  o
                    ? `border-border-heavy bg-surface-hover`
                    : `border-border-medium hover:bg-surface-hover`,
                  _.isLoading && `cursor-wait opacity-50`,
                ),
                children: [
                  _.isLoading
                    ? (0, $.jsx)(re, { className: `size-8` })
                    : (0, $.jsx)(C, {
                        className: `text-text-secondary size-8`,
                        'aria-hidden': `true`,
                      }),
                  n(`com_ui_skill_upload_drag`),
                ],
              }),
              c != null &&
                c.files.length > 0 &&
                (0, $.jsxs)(`div`, {
                  role: `alert`,
                  className: `border-border-medium bg-surface-secondary flex flex-col gap-1 rounded-lg border p-3 text-xs`,
                  children: [
                    (0, $.jsx)(`p`, {
                      className: `text-text-destructive font-medium`,
                      children: n(Ye(c.code)),
                    }),
                    (0, $.jsx)(`ul`, {
                      className: `text-text-secondary max-h-40 list-inside list-disc overflow-y-auto`,
                      children: c.files.map((e) =>
                        (0, $.jsxs)(
                          `li`,
                          {
                            children: [
                              (0, $.jsx)(`span`, {
                                className: `text-text-primary font-medium break-all`,
                                children: e.path,
                              }),
                              Ke[e.reason] == null
                                ? ``
                                : ` — ${n(Ke[e.reason], { 0: `${e.limitMb ?? ``}` })}`,
                            ],
                          },
                          e.path,
                        ),
                      ),
                    }),
                  ],
                }),
              (0, $.jsx)(`div`, {
                className: `text-text-secondary flex flex-col gap-3 text-xs`,
                children: (0, $.jsxs)(`div`, {
                  children: [
                    (0, $.jsx)(`p`, {
                      className: `font-medium`,
                      children: n(`com_ui_skill_upload_requirements`),
                    }),
                    (0, $.jsxs)(`ul`, {
                      className: `mt-1 list-inside list-disc`,
                      children: [
                        (0, $.jsx)(`li`, { children: n(`com_ui_skill_upload_req_md`) }),
                        (0, $.jsx)(`li`, { children: n(`com_ui_skill_upload_req_zip`) }),
                        (0, $.jsx)(`li`, { children: n(`com_ui_skill_upload_req_size`, { 0: g }) }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          (0, $.jsx)(`input`, {
            ref: a,
            type: `file`,
            accept: `.zip,.skill,.md`,
            className: `hidden`,
            onChange: y,
          }),
        ],
      }),
    }),
  });
}
var Ze = [
    { permission: B.USE, labelKey: `com_ui_skills_allow_use` },
    { permission: B.CREATE, labelKey: `com_ui_skills_allow_create` },
    { permission: B.SHARE, labelKey: `com_ui_skills_allow_share` },
    { permission: B.SHARE_PUBLIC, labelKey: `com_ui_skills_allow_share_public` },
  ],
  Qe = () => {
    let e = U(),
      { showToast: t } = z(),
      n = ee({
        onSuccess: () => {
          t({ status: `success`, message: e(`com_ui_saved`) });
        },
        onError: () => {
          t({ status: `error`, message: e(`com_ui_error_save_admin_settings`) });
        },
      });
    return (0, $.jsx)(N, {
      permissionType: fe.SKILLS,
      sectionKey: `com_ui_skills`,
      permissions: Ze,
      menuId: `skill-role-dropdown`,
      mutation: n,
    });
  };
function $e({ enabled: e, onChange: t }) {
  let n = U(),
    r = (0, Q.useId)(),
    i = (0, Q.useId)();
  return (0, $.jsx)(W, {
    description: n(`com_ui_skill_available_hint`),
    side: `top`,
    render: (0, $.jsxs)(`span`, {
      onClick: (e) => e.stopPropagation(),
      className: `inline-flex h-9 items-center gap-2 rounded-md px-2 transition-colors hover:bg-surface-hover`,
      children: [
        (0, $.jsx)(de, { id: r, checked: e, onCheckedChange: () => t(), 'aria-labelledby': i }),
        (0, $.jsx)(K, {
          id: i,
          htmlFor: r,
          className: `cursor-pointer select-none whitespace-nowrap text-xs font-medium text-text-secondary`,
          children: n(`com_ui_skill_available`),
        }),
      ],
    }),
  });
}
var et = (0, Q.memo)($e);
function tt({ skill: e, disabled: t }) {
  let n = U(),
    r = P(e),
    i = oe({ permissionType: fe.SKILLS, permission: B.SHARE });
  return r.isLoading || !i || !r.canShare
    ? null
    : (0, $.jsx)(ce, {
        resourceDbId: e._id,
        resourceName: e.name,
        resourceType: _e.SKILL,
        disabled: t,
        children: (0, $.jsx)(W, {
          description: n(`com_ui_share`),
          side: `bottom`,
          render: (0, $.jsx)(V, {
            variant: `outline`,
            size: `icon`,
            className: `size-9 border-border-medium`,
            'aria-label': n(`com_ui_share`),
            disabled: t,
            children: (0, $.jsx)(T, { className: `size-5`, 'aria-hidden': `true` }),
          }),
        }),
      });
}
var nt = (0, Q.memo)(tt);
function rt() {
  let e = U(),
    [t, n] = (0, Q.useState)(!1),
    [r, i] = (0, Q.useState)(!1),
    [a, o] = (0, Q.useState)(!1),
    l = e(`com_ui_create_skill`),
    u = (0, Q.useMemo)(
      () => [
        {
          label: e(`com_ui_skill_write_instructions`),
          onClick: () => i(!0),
          icon: (0, $.jsx)(s, { className: `icon-md`, 'aria-hidden': `true` }),
        },
        {
          label: e(`com_ui_skill_upload`),
          onClick: () => o(!0),
          icon: (0, $.jsx)(C, { className: `icon-md`, 'aria-hidden': `true` }),
        },
      ],
      [e],
    );
  return (0, $.jsxs)($.Fragment, {
    children: [
      (0, $.jsx)(se, {
        gutter: 2,
        menuId: `create-skill-menu`,
        isOpen: t,
        setIsOpen: n,
        unmountOnHide: !0,
        trigger: (0, $.jsx)(W, {
          description: l,
          side: `bottom`,
          render: (0, $.jsx)(x, {
            'aria-label': l,
            className: `text-text-primary hover:bg-surface-hover focus-visible:ring-text-primary inline-flex size-8 shrink-0 items-center justify-center rounded-lg transition-colors focus:outline-hidden focus-visible:ring-2`,
            children: (0, $.jsx)(c, { className: `size-4`, 'aria-hidden': `true` }),
          }),
        }),
        items: u,
      }),
      (0, $.jsx)(He, { isOpen: r, setIsOpen: i }),
      (0, $.jsx)(Xe, { isOpen: a, setIsOpen: o }),
    ],
  });
}
var it = [De, we, [Te, { singleDollarTextMath: !1 }]],
  at = [[Ae], [Ee, { detect: !0, ignoreMissing: !0, subset: ge }]],
  ot = { code: pe },
  st = /^[a-zA-Z][a-zA-Z\d+.-]*:/,
  ct = /^tel:/i;
function lt(e) {
  return (
    e.length > 0 && !e.startsWith(`/`) && !e.startsWith(`#`) && !e.startsWith(`?`) && !st.test(e)
  );
}
function ut(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function dt(e, t) {
  return [...e.split(`/`).slice(0, -1), ...ut(t).split(`/`)]
    .reduce((e, t) => (!t || t === `.` ? e : t === `..` ? (e.pop(), e) : (e.push(t), e)), [])
    .join(`/`);
}
function ft(e, t, n) {
  if (!lt(n)) return null;
  let r = n.search(/[?#]/),
    i = r === -1 ? n : n.slice(0, r),
    a = r === -1 ? `` : n.slice(r),
    o = dt(t, i);
  if (!o) return null;
  let s = `/skills/${encodeURIComponent(e)}?file=${encodeURIComponent(o)}`;
  return a.startsWith(`?`) ? `${s}&${a.slice(1)}` : `${s}${a}`;
}
function pt({ node: e, href: t, skillId: n, currentFilePath: r, children: i, ...a }) {
  let o = t ? ft(n, r, t) : null;
  return o
    ? (0, $.jsx)(D, { to: o, ...a, children: i })
    : (0, $.jsx)(`a`, { href: t, ...a, children: i });
}
function mt(e) {
  return ct.test(e) ? e : ke(e);
}
function ht({ content: e, skillId: t, currentFilePath: n, className: r }) {
  let i = (0, Q.useMemo)(
    () => ({ ...ot, a: (e) => (0, $.jsx)(pt, { ...e, skillId: t, currentFilePath: n }) }),
    [t, n],
  );
  return (0, $.jsx)(Oe, {
    remarkPlugins: it,
    rehypePlugins: at,
    components: i,
    urlTransform: mt,
    className:
      r ??
      `markdown prose dark:prose-invert light w-full break-words leading-[1.65rem] text-text-primary`,
    children: e,
  });
}
var gt = (0, Q.memo)(ht);
function _t(e, t) {
  let n = e.trim();
  if (!n.startsWith(`---`)) return { fields: [], body: e };
  let r = n.slice(3),
    i = r.indexOf(`
---`);
  if (i === -1) return { fields: [], body: e };
  let a = r.slice(0, i),
    o = r.slice(i + 4).trim(),
    s = [],
    c = a.split(`
`);
  for (let e = 0; e < c.length; e++) {
    let n = c[e],
      r = n.indexOf(`:`);
    if (r === -1) continue;
    let i = n.slice(0, r).trim();
    if (!i) continue;
    let a = n.slice(r + 1).trim();
    if (!a) {
      let t = [];
      for (; e + 1 < c.length; ) {
        let n = c[e + 1].trim();
        if (!n.startsWith(`-`)) break;
        (t.push(n.slice(1).trim()), e++);
      }
      a = t.join(`,`);
    }
    t?.has(i.toLowerCase()) || (a && s.push({ key: i, value: a }));
  }
  return { fields: s, body: o };
}
new Set(Object.values(L));
var vt = [
  { mode: `rendered`, Icon: _, labelKey: `com_ui_skill_view_rendered` },
  { mode: `source`, Icon: r, labelKey: `com_ui_skill_view_source` },
];
function yt({ viewMode: e, setViewMode: t }) {
  let n = U();
  return (0, $.jsxs)(`div`, {
    role: `group`,
    'aria-label': `${n(`com_ui_skill_view_rendered`)} / ${n(`com_ui_skill_view_source`)}`,
    className: `bg-surface-tertiary relative inline-flex h-7 rounded-lg p-0.5 text-sm font-medium`,
    children: [
      (0, $.jsx)(`span`, {
        'aria-hidden': `true`,
        className: j(
          `bg-surface-primary absolute start-0.5 top-0.5 h-6 w-7 rounded-md shadow-xs transition-transform duration-200 ease-out motion-reduce:transition-none`,
          e === `source` && `translate-x-7 rtl:-translate-x-7`,
        ),
      }),
      vt.map(({ mode: r, Icon: i, labelKey: a }) =>
        (0, $.jsx)(
          `button`,
          {
            type: `button`,
            onClick: () => t(r),
            className: j(
              `relative flex w-7 items-center justify-center rounded-md transition-colors`,
              e === r ? `text-text-primary` : `text-text-secondary hover:text-text-primary`,
            ),
            'aria-label': n(a),
            'aria-pressed': e === r,
            children: (0, $.jsx)(i, { className: `size-4`, 'aria-hidden': `true` }),
          },
          r,
        ),
      ),
    ],
  });
}
var bt = new Set([`name`, `description`]);
function xt({ skill: e, onEdit: t, onDelete: n }) {
  let r = U(),
    { user: a } = Se(),
    o = P(e),
    { isActive: s, toggle: c } = le(),
    [l, d] = (0, Q.useState)(`rendered`),
    p = s(e),
    m = e.isPublic === !0,
    h = e.author !== a?.id && e.authorName ? e.authorName : r(`com_ui_you`),
    g = e.updatedAt ? je(new Date(e.updatedAt), `MMM d, yyyy`) : void 0,
    { fields: _, body: y } = (0, Q.useMemo)(() => _t(e.body ?? ``, bt), [e.body]);
  return (0, $.jsxs)(`article`, {
    className: `flex h-full min-w-0 flex-col gap-2 overflow-y-auto px-5 pb-5`,
    'aria-label': e.name,
    children: [
      (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-3 pb-1 sm:flex-row sm:items-start sm:gap-4`,
        children: [
          (0, $.jsxs)(`div`, {
            className: `min-w-0 flex-1 overflow-hidden sm:pt-3`,
            children: [
              (0, $.jsxs)(`div`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [
                  (0, $.jsx)(`h2`, {
                    className: `truncate text-xl font-bold text-text-primary`,
                    title: e.name,
                    children: e.name,
                  }),
                  m &&
                    (0, $.jsx)(W, {
                      description: r(`com_ui_skill_sr_public`),
                      side: `top`,
                      render: (0, $.jsx)(u, {
                        className: `size-5 shrink-0 text-accent-primary`,
                        'aria-label': r(`com_ui_skill_sr_public`),
                      }),
                    }),
                ],
              }),
              (0, $.jsxs)(`div`, {
                className: `mt-0.5 flex flex-wrap items-center gap-3 text-xs text-text-secondary`,
                children: [
                  (0, $.jsxs)(`span`, {
                    className: `flex items-center gap-1`,
                    children: [(0, $.jsx)(f, { className: `size-3`, 'aria-hidden': `true` }), h],
                  }),
                  g &&
                    (0, $.jsxs)(`span`, {
                      className: `flex items-center gap-1`,
                      children: [(0, $.jsx)(v, { className: `size-3`, 'aria-hidden': `true` }), g],
                    }),
                ],
              }),
            ],
          }),
          (0, $.jsxs)(`div`, {
            className: `flex shrink-0 flex-wrap items-center gap-2 sm:pt-1`,
            children: [
              (0, $.jsx)(et, { enabled: p, onChange: () => c(e) }),
              (0, $.jsx)(nt, { skill: e }),
              o.canEdit &&
                t &&
                (0, $.jsx)(W, {
                  description: r(`com_ui_edit`),
                  side: `bottom`,
                  render: (0, $.jsx)(V, {
                    variant: `outline`,
                    size: `icon`,
                    className: `size-9 border-border-medium`,
                    'aria-label': r(`com_ui_edit`),
                    onClick: t,
                    children: (0, $.jsx)(i, { className: `size-5`, 'aria-hidden': `true` }),
                  }),
                }),
              o.canDelete &&
                n &&
                (0, $.jsx)(We, { skillId: e._id, skillName: e.name, onDelete: n }),
            ],
          }),
        ],
      }),
      (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [
          (0, $.jsx)(`h3`, {
            className: `text-xs leading-4 text-text-secondary`,
            children: r(`com_ui_description`),
          }),
          (0, $.jsx)(`p`, {
            className: `whitespace-pre-wrap text-sm text-text-secondary`,
            children: e.description,
          }),
        ],
      }),
      (0, $.jsxs)(`div`, {
        className: `flex items-center gap-3 py-1`,
        children: [
          (0, $.jsx)(`hr`, { className: `flex-1 border-border-medium` }),
          (0, $.jsx)(yt, { viewMode: l, setViewMode: d }),
        ],
      }),
      l === `rendered` &&
        _.length > 0 &&
        (0, $.jsx)(`div`, {
          className: `grid grid-cols-[max-content_1fr] items-baseline gap-x-8 gap-y-2 pb-2`,
          children: _.map(({ key: e, value: t }) =>
            (0, $.jsxs)(
              Q.Fragment,
              {
                children: [
                  (0, $.jsx)(`span`, { className: `text-xs text-text-secondary`, children: e }),
                  (0, $.jsx)(`span`, { className: `text-sm text-text-primary`, children: t }),
                ],
              },
              e,
            ),
          ),
        }),
      (0, $.jsx)(`div`, {
        className: `min-h-0 flex-1 overflow-auto`,
        children:
          l === `rendered`
            ? (0, $.jsx)(gt, { content: y, skillId: e._id, currentFilePath: `SKILL.md` })
            : (0, $.jsx)(`pre`, {
                className: `whitespace-pre-wrap font-mono text-sm leading-relaxed text-text-primary`,
                children: e.body ?? ``,
              }),
      }),
    ],
  });
}
function St({ skillId: e, relativePath: t, file: n, canEdit: r, onClose: i }) {
  let a = U(),
    { showToast: o } = z(),
    s = O(),
    [c, l] = (0, Q.useState)(n.content),
    [u, d] = (0, Q.useState)(!1),
    f = Ve({
      onSuccess: (r) => {
        (s.setQueryData([H.skillFileContent, e, t], {
          ...n,
          content: c,
          fileId: r.file_id,
          bytes: new Blob([c]).size,
          filename: r.filename,
          mimeType: r.mimeType,
          isBinary: !1,
        }),
          o({ status: `success`, message: a(`com_ui_edited_file`, { 0: n.filename }) }),
          i());
      },
      onError: (n) => {
        let r = n?.response?.status === 409;
        (d(r),
          r && s.invalidateQueries([H.skillFileContent, e, t]),
          o({
            status: `error`,
            message: a(r ? `com_ui_skill_file_conflict` : `com_ui_skill_file_save_error`),
          }));
      },
    }),
    p = () => {
      if (!r || !n.fileId || u || f.isLoading || c === n.content) return;
      let i = new FormData();
      (i.append(`relativePath`, t),
        i.append(`expectedFileId`, n.fileId),
        i.append(`file`, new File([c], n.filename, { type: n.mimeType })),
        f.mutate({ skillId: e, formData: i }));
    };
  return (0, $.jsxs)(`div`, {
    className: `flex h-full min-h-0 flex-col gap-3`,
    children: [
      (0, $.jsx)(`div`, {
        className: `flex min-h-0 flex-1 font-mono`,
        children: (0, $.jsx)(ye, {
          value: c,
          onChange: (e) => l(e.target.value),
          onKeyDown: (e) => {
            (e.ctrlKey || e.metaKey) && e.key === `s` && (e.preventDefault(), p());
          },
          disabled: f.isLoading,
          spellCheck: !1,
          'aria-label': `${a(`com_ui_edit`)} ${n.filename}`,
          className: `min-h-0 flex-1`,
        }),
      }),
      f.isError &&
        (0, $.jsx)(`p`, {
          role: `alert`,
          className: `text-text-destructive text-sm`,
          children: a(u ? `com_ui_skill_file_conflict` : `com_ui_skill_file_save_error`),
        }),
      !r &&
        (0, $.jsx)(`p`, {
          role: `note`,
          className: `text-text-secondary text-sm`,
          children: a(`com_ui_skill_no_edit_permission`),
        }),
      (0, $.jsxs)(`div`, {
        className: `flex justify-end gap-2`,
        children: [
          (0, $.jsx)(V, {
            type: `button`,
            variant: `outline`,
            onClick: i,
            disabled: f.isLoading,
            children: a(`com_ui_cancel`),
          }),
          (0, $.jsx)(V, {
            type: `button`,
            onClick: p,
            disabled: !r || !n.fileId || u || f.isLoading || c === n.content,
            children: f.isLoading ? a(`com_ui_saving`) : a(`com_ui_save`),
          }),
        ],
      }),
    ],
  });
}
var Ct = new Set([`name`, `description`]);
function wt({ skillId: e, relativePath: t, skill: n }) {
  let r = E(),
    a = U(),
    { showToast: o } = z(),
    { data: s, isLoading: c, isError: u, isFetching: d, refetch: f } = xe(e, t),
    m = P(n),
    [h, _] = (0, Q.useState)(null),
    [v, b] = (0, Q.useState)(`rendered`),
    [x, C] = (0, Q.useState)(!1),
    T = (0, Q.useRef)(null),
    D = t.endsWith(`.md`),
    O = s?.mimeType?.startsWith(`image/`) ?? !1,
    k = t === `SKILL.md`,
    A = s != null && !s.isBinary && s.content != null,
    j = h != null,
    M = n?.source === `inline` && !m.isLoading && m.canEdit && s != null && (k || !!s.fileId),
    N = (0, Q.useMemo)(
      () => `${ie()}/api/skills/${e}/files/${encodeURIComponent(t)}?raw=true`,
      [e, t],
    ),
    F = (0, Q.useMemo)(
      () => (!D || !s?.content ? null : _t(s.content, k ? Ct : void 0)),
      [D, k, s?.content],
    ),
    I = (0, Q.useCallback)(async () => {
      if (!(x || !s?.content))
        try {
          (await navigator.clipboard.writeText(s.content),
            C(!0),
            o({ message: a(`com_ui_copied_to_clipboard`), status: `success` }),
            T.current && clearTimeout(T.current),
            (T.current = setTimeout(() => C(!1), 2e3)));
        } catch {
          o({ message: a(`com_ui_copy_failed`), status: `error` });
        }
    }, [s?.content, x, o, a]);
  return (0, $.jsxs)(`div`, {
    className: `flex h-full flex-col`,
    children: [
      (0, $.jsxs)(`div`, {
        className: `border-border-medium flex h-10 items-center gap-2 border-b px-4`,
        children: [
          (0, $.jsx)(`button`, {
            type: `button`,
            onClick: () => r(`/skills/${e}`),
            className: `text-text-secondary hover:bg-surface-hover hover:text-text-primary rounded-md p-1 transition-colors`,
            'aria-label': a(`com_ui_back`),
            children: (0, $.jsx)(l, { className: `size-4` }),
          }),
          (0, $.jsx)(g, {
            className: `text-text-secondary size-4 shrink-0`,
            'aria-hidden': `true`,
          }),
          (0, $.jsx)(`span`, {
            className: `text-text-primary min-w-0 flex-1 truncate text-sm font-medium`,
            children: s?.filename ?? t,
          }),
          (0, $.jsxs)(`div`, {
            className: `flex shrink-0 items-center gap-1`,
            children: [
              M &&
                !j &&
                !c &&
                (k || A) &&
                (0, $.jsx)(W, {
                  description: a(`com_ui_edit`),
                  render: (0, $.jsx)(`button`, {
                    type: `button`,
                    onClick: () => {
                      k
                        ? r(`/skills/${e}/edit`)
                        : s?.content != null && _({ ...s, content: s.content });
                    },
                    className: `text-text-secondary hover:bg-surface-hover hover:text-text-primary rounded-md p-1 transition-colors`,
                    'aria-label': a(`com_ui_edit`),
                    children: (0, $.jsx)(i, { className: `size-4` }),
                  }),
                }),
              !j &&
                A &&
                (0, $.jsx)(W, {
                  description: a(x ? `com_ui_copied` : `com_ui_copy`),
                  render: (0, $.jsx)(`button`, {
                    type: `button`,
                    onClick: I,
                    className: `text-text-secondary hover:bg-surface-hover hover:text-text-primary rounded-md p-1 transition-colors`,
                    'aria-label': a(`com_ui_copy_to_clipboard`),
                    children: (0, $.jsx)(p, { icon: x ? y : S, className: `size-4` }),
                  }),
                }),
              !j && D && A && (0, $.jsx)(yt, { viewMode: v, setViewMode: b }),
            ],
          }),
        ],
      }),
      (0, $.jsx)(`div`, {
        className: `min-h-0 flex-1 overflow-y-auto px-5 py-4`,
        children: h
          ? (0, $.jsx)(St, {
              skillId: e,
              relativePath: t,
              file: h,
              canEdit: M,
              onClose: () => _(null),
            })
          : (0, $.jsxs)($.Fragment, {
              children: [
                c &&
                  (0, $.jsx)(`div`, {
                    className: `flex items-center justify-center py-12`,
                    children: (0, $.jsx)(re, { className: `text-text-secondary size-6` }),
                  }),
                (u || s === null) &&
                  !s &&
                  (0, $.jsxs)(`div`, {
                    className: `text-text-secondary flex flex-col items-center justify-center gap-2 py-12`,
                    children: [
                      (0, $.jsx)(w, { className: `size-8` }),
                      (0, $.jsx)(`p`, {
                        className: `text-sm`,
                        children: a(`com_ui_skill_file_load_error`),
                      }),
                      (0, $.jsx)(V, {
                        type: `button`,
                        variant: `outline`,
                        onClick: () => void f(),
                        disabled: d,
                        children: a(`com_ui_retry`),
                      }),
                    ],
                  }),
                s &&
                  !c &&
                  (0, $.jsxs)($.Fragment, {
                    children: [
                      s.isBinary &&
                        O &&
                        (0, $.jsx)(`img`, {
                          src: N,
                          alt: s.filename,
                          className: `max-h-[37.5rem] max-w-full rounded-lg object-contain`,
                        }),
                      s.isBinary &&
                        !O &&
                        (0, $.jsxs)(`div`, {
                          className: `text-text-secondary flex flex-col items-center justify-center gap-2 py-12`,
                          children: [
                            (0, $.jsx)(w, { className: `size-8` }),
                            (0, $.jsx)(`p`, {
                              className: `text-sm`,
                              children: a(`com_ui_skill_file_binary`),
                            }),
                            (0, $.jsx)(`a`, {
                              href: N,
                              download: !0,
                              className: `text-text-primary text-sm underline hover:no-underline`,
                              children: a(`com_ui_skill_file_download`),
                            }),
                          ],
                        }),
                      A &&
                        D &&
                        F &&
                        (0, $.jsxs)($.Fragment, {
                          children: [
                            v === `rendered` &&
                              F.fields.length > 0 &&
                              (0, $.jsx)(`div`, {
                                className: `mb-3 grid grid-cols-[max-content_1fr] items-baseline gap-x-8 gap-y-2`,
                                children: F.fields.map(({ key: e, value: t }) =>
                                  (0, $.jsxs)(
                                    Q.Fragment,
                                    {
                                      children: [
                                        (0, $.jsx)(`span`, {
                                          className: `text-text-secondary text-xs capitalize`,
                                          children: e,
                                        }),
                                        (0, $.jsx)(`span`, {
                                          className: `text-text-primary text-sm`,
                                          children: t,
                                        }),
                                      ],
                                    },
                                    e,
                                  ),
                                ),
                              }),
                            v === `rendered`
                              ? (0, $.jsx)(gt, { content: F.body, skillId: e, currentFilePath: t })
                              : (0, $.jsx)(`pre`, {
                                  className: `text-text-primary font-mono text-sm leading-relaxed whitespace-pre-wrap`,
                                  children: s.content,
                                }),
                          ],
                        }),
                      A &&
                        !D &&
                        (0, $.jsx)(`pre`, {
                          className: `text-text-primary font-mono text-sm leading-relaxed whitespace-pre-wrap`,
                          children: s.content,
                        }),
                      !s.isBinary &&
                        s.content == null &&
                        (0, $.jsxs)(`div`, {
                          className: `text-text-secondary flex flex-col items-center justify-center gap-2 py-12`,
                          children: [
                            (0, $.jsx)(g, { className: `size-8` }),
                            (0, $.jsx)(`p`, {
                              className: `text-sm`,
                              children: a(`com_ui_skill_file_download`),
                            }),
                            (0, $.jsx)(`a`, {
                              href: N,
                              download: !0,
                              className: `text-text-primary text-sm underline hover:no-underline`,
                              children: a(`com_ui_skill_file_download`),
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
var Tt = (0, Q.memo)(wt),
  Et = { empty: b, error: m },
  Dt = {
    empty: { icon: `text-text-primary`, wrap: `bg-surface-tertiary` },
    error: { icon: `text-status-warning`, wrap: `bg-status-warning-subtle` },
  };
function Ot({
  title: e,
  description: t,
  actionLabel: n,
  onAction: r,
  variant: i = `empty`,
  className: a = ``,
}) {
  let o = Et[i],
    s = Dt[i];
  return (0, $.jsx)(`div`, {
    className: j(`flex h-full w-full items-center justify-center px-6 py-12`, a),
    children: (0, $.jsxs)(`div`, {
      className: `flex max-w-sm flex-col items-center text-center`,
      children: [
        (0, $.jsx)(`div`, {
          className: j(`mb-4 flex size-12 items-center justify-center rounded-xl`, s.wrap),
          children: (0, $.jsx)(o, { className: j(`size-6`, s.icon), 'aria-hidden': `true` }),
        }),
        (0, $.jsx)(`p`, { className: `text-text-primary text-[15px] font-semibold`, children: e }),
        (0, $.jsx)(`p`, {
          className: `text-text-secondary mt-1.5 text-sm leading-relaxed`,
          children: t,
        }),
        n &&
          r &&
          (0, $.jsx)(V, {
            type: `button`,
            variant: `outline`,
            className: `mt-5`,
            'aria-label': n,
            onClick: r,
            children: n,
          }),
      ],
    }),
  });
}
var kt = ({ className: e = `` }) => {
    let t = U(),
      { control: n, watch: r, setValue: i } = Me(),
      [a, o] = (0, Q.useState)(!1),
      { categories: s, emptyCategory: c } = F({ hasAccess: !0 }),
      l = r(`category`),
      u = (0, Q.useMemo)(() => (s ?? []).find((e) => e.value === l) ?? c, [s, l, c]),
      d = (0, Q.useMemo)(
        () =>
          s
            ? s.map((e) => ({
                id: e.value,
                label: e.label,
                icon: e.icon,
                onClick: () => {
                  (i(`category`, e.value || ``, { shouldDirty: !0 }), o(!1));
                },
              }))
            : [],
        [s, i],
      ),
      f = (0, $.jsxs)(x, {
        className: j(
          `relative inline-flex h-9 items-center justify-between rounded-xl border border-border-medium bg-transparent px-3 text-sm text-text-primary transition-all duration-200 ease-in-out hover:bg-surface-hover hover:text-text-primary focus:ring-2 focus:ring-ring-primary`,
          `gap-2 sm:w-fit`,
          e,
        ),
        onClick: () => o(!a),
        'aria-label': t(`com_ui_category`),
        children: [
          (0, $.jsxs)(`div`, {
            className: `flex items-center space-x-2`,
            children: [
              `icon` in u && u.icon != null && (0, $.jsx)(`span`, { children: u.icon }),
              (0, $.jsx)(`span`, { children: u.value ? u.label : t(`com_ui_category`) }),
            ],
          }),
          (0, $.jsx)(h, {}),
        ],
      });
    return (0, $.jsx)(X, {
      name: `category`,
      control: n,
      render: () =>
        (0, $.jsx)(se, {
          trigger: f,
          items: d,
          isOpen: a,
          setIsOpen: o,
          menuId: `skill-category-selector-menu`,
          className: `mt-2`,
          portal: !0,
        }),
    });
  },
  At = [De, we, [Te, { singleDollarTextMath: !1 }]],
  jt = [[Ae], [Ee, { detect: !0, ignoreMissing: !0, subset: ge }]],
  Mt = { code: pe },
  Nt = (0, Q.memo)(({ name: e, isEditing: t, setIsEditing: n, rules: r }) => {
    let i = U(),
      {
        control: a,
        formState: { errors: s },
      } = Me();
    return (0, $.jsxs)(`div`, {
      className: `flex max-h-[85vh] flex-col sm:max-h-[85vh]`,
      children: [
        (0, $.jsx)(`h2`, { className: `sr-only`, children: i(`com_ui_skill_content`) }),
        (0, $.jsxs)(`div`, {
          className: j(
            `border-border-medium relative w-full flex-1 overflow-auto rounded-xl border p-3 text-left transition-all duration-200 sm:p-4`,
            t ? `` : `hover:bg-surface-tertiary cursor-pointer`,
          ),
          children: [
            (0, $.jsx)(`div`, {
              className: `absolute top-2 right-2 z-10`,
              children: (0, $.jsx)(W, {
                description: i(t ? `com_ui_save` : `com_ui_edit`),
                render: (0, $.jsx)(V, {
                  type: `button`,
                  size: `icon`,
                  variant: `ghost`,
                  onMouseDown: (e) => e.preventDefault(),
                  onClick: () => n((e) => !e),
                  'aria-label': i(t ? `com_ui_save` : `com_ui_edit`),
                  className: `hover:bg-surface-tertiary size-8 p-0`,
                  children: (0, $.jsx)(p, {
                    icon: t ? y : o,
                    className: `text-text-secondary size-4`,
                  }),
                }),
              }),
            }),
            !t &&
              (0, $.jsx)(`button`, {
                type: `button`,
                'aria-label': i(`com_ui_edit`),
                className: `focus-visible:ring-ring-primary absolute inset-0 z-10 rounded-xl focus:outline-hidden focus-visible:ring-2`,
                onClick: () => n(!0),
              }),
            (0, $.jsx)(X, {
              name: e,
              control: a,
              rules: r,
              render: ({ field: e }) =>
                t
                  ? (0, $.jsx)(G, {
                      focusOutline: `hidden`,
                      ...e,
                      autoFocus: !0,
                      className: `text-text-primary placeholder:text-text-secondary focus-visible:ring-ring-primary w-full resize-none overflow-y-auto bg-transparent font-mono text-sm leading-relaxed focus-visible:ring-2 sm:text-base`,
                      minRows: 4,
                      maxRows: 16,
                      onKeyDown: (e) => {
                        e.key === `Escape` && (e.preventDefault(), n(!1));
                      },
                      placeholder: i(`com_ui_skill_content_placeholder`),
                      'aria-label': i(`com_ui_skill_content`),
                    })
                  : (0, $.jsxs)(`div`, {
                      className: `group/preview relative min-h-[6rem] overflow-y-auto text-sm sm:text-base`,
                      style: { maxHeight: `24rem` },
                      children: [
                        e.value
                          ? (0, $.jsx)(Oe, {
                              remarkPlugins: At,
                              rehypePlugins: jt,
                              components: Mt,
                              className: `markdown prose dark:prose-invert light text-text-primary w-full break-words`,
                              children: e.value,
                            })
                          : (0, $.jsx)(`p`, {
                              className: `text-text-secondary italic`,
                              children: i(`com_ui_click_to_edit`),
                            }),
                        (0, $.jsx)(`div`, {
                          className: `pointer-events-none sticky bottom-1/2 z-10 flex translate-y-1/2 items-center justify-center opacity-0 transition-all duration-200 group-hover/preview:opacity-100`,
                          children: (0, $.jsxs)(`div`, {
                            className: `border-border-light bg-surface-primary flex items-center gap-2 rounded-lg border px-3 py-1.5 shadow-md`,
                            children: [
                              (0, $.jsx)(p, { icon: o, className: `text-text-secondary size-4` }),
                              (0, $.jsx)(`span`, {
                                className: `text-text-primary text-sm font-medium`,
                                children: i(`com_ui_click_to_edit`),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
            }),
            s[e] &&
              (0, $.jsx)(`p`, {
                className: `text-text-destructive mt-1 text-sm`,
                role: `alert`,
                children: s[e]?.message,
              }),
          ],
        }),
      ],
    });
  }),
  Pt = {
    name: ``,
    description: ``,
    body: `# Overview

Describe what this skill does and how it should be applied.

## When to use

- List concrete signals that should trigger this skill
- Add examples that make the trigger unambiguous

## How to apply

Walk through the steps the agent should take.
`,
    category: ``,
    invocationMode: L.auto,
  };
function Ft({ defaultValues: e, onCancel: t, onSuccess: n }) {
  let r = U(),
    i = E(),
    { showToast: a } = z(),
    [o, s] = (0, Q.useState)(!0),
    c = Y({ defaultValues: { ...Pt, ...e }, mode: `onChange` }),
    {
      control: l,
      handleSubmit: u,
      setError: d,
      formState: { isSubmitting: f, isValid: p, errors: h },
    } = c,
    g = Le({
      onSuccess: (e) => {
        let t = e.warnings;
        (a({
          status: t && t.length > 0 ? `warning` : `success`,
          message: r(`com_ui_skill_created`),
        }),
          n ? n(e) : i(`/skills/${e._id}`));
      },
      onError: (e) => {
        let t = e?.response?.data?.message ?? r(`com_ui_skill_create_error`);
        a({ status: `error`, message: t });
      },
    }),
    _ = (e) => {
      if (g.isLoading) return;
      let t = {
        name: e.name.trim(),
        description: e.description.trim(),
        body: e.body,
        category: e.category || void 0,
      };
      if (!A.test(t.name)) {
        d(`name`, { message: r(`com_ui_skill_name_invalid`) });
        return;
      }
      g.mutate(t);
    },
    v = () => {
      t ? t() : i(-1);
    },
    y = !p || f || g.isLoading;
  return (0, $.jsx)(Ne, {
    ...c,
    children: (0, $.jsxs)(`form`, {
      onSubmit: u(_),
      className: `w-full px-4 py-2`,
      'aria-label': r(`com_ui_skill_create_title`),
      children: [
        (0, $.jsx)(`h1`, { className: `sr-only`, children: r(`com_ui_skill_create_title`) }),
        (0, $.jsx)(`div`, {
          className: `mb-1 flex flex-col items-center justify-between font-bold sm:text-xl md:mb-0 md:text-2xl`,
          children: (0, $.jsxs)(`div`, {
            className: `flex w-full flex-col items-center justify-between sm:flex-row`,
            children: [
              (0, $.jsx)(X, {
                name: `name`,
                control: l,
                rules: {
                  required: r(`com_ui_skill_name_required`),
                  pattern: { value: A, message: r(`com_ui_skill_name_invalid`) },
                  maxLength: { value: 64, message: r(`com_ui_skill_name_too_long`, { 0: `64` }) },
                },
                render: ({ field: e }) =>
                  (0, $.jsxs)(`div`, {
                    className: `relative mb-1 flex w-full flex-col sm:w-auto md:mb-0`,
                    children: [
                      (0, $.jsx)(q, {
                        ...e,
                        id: `skill-name`,
                        type: `text`,
                        className: `peer border-border-medium text-text-primary mr-2 w-full border p-2 text-2xl`,
                        placeholder: ` `,
                        tabIndex: 0,
                        'aria-label': r(`com_ui_name`),
                        'aria-required': `true`,
                        'aria-invalid': h.name ? `true` : `false`,
                        'aria-describedby': h.name ? `skill-name-error` : void 0,
                      }),
                      (0, $.jsxs)(`label`, {
                        htmlFor: `skill-name`,
                        className: `bg-surface-primary-alt text-text-secondary peer-focus:text-text-primary pointer-events-none absolute -top-1 left-3 origin-[0] translate-y-3 scale-100 rounded px-1 text-base transition-transform duration-200 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-75`,
                        children: [r(`com_ui_name`), `*`],
                      }),
                      (0, $.jsx)(`div`, {
                        id: `skill-name-error`,
                        className: j(
                          `text-text-destructive mt-1 w-56 text-sm`,
                          h.name ? `visible h-auto` : `invisible h-0`,
                        ),
                        role: h.name ? `alert` : void 0,
                        children: h.name ? h.name.message : ` `,
                      }),
                    ],
                  }),
              }),
              (0, $.jsx)(`div`, {
                className: `flex items-center gap-2`,
                children: (0, $.jsx)(kt, {}),
              }),
            ],
          }),
        }),
        (0, $.jsxs)(`div`, {
          className: `flex w-full flex-col gap-4 md:mt-[1.075rem]`,
          children: [
            (0, $.jsx)(X, {
              name: `description`,
              control: l,
              rules: {
                required: r(`com_ui_skill_description_required`),
                maxLength: {
                  value: R,
                  message: r(`com_ui_skill_description_too_long`, { 0: String(R) }),
                },
              },
              render: ({ field: e }) =>
                (0, $.jsxs)(`div`, {
                  className: `flex flex-col`,
                  children: [
                    (0, $.jsxs)(K, {
                      htmlFor: `skill-description`,
                      className: `text-text-secondary mb-1 text-sm font-medium`,
                      children: [
                        r(`com_ui_description`),
                        (0, $.jsx)(`span`, {
                          className: `text-text-destructive ml-0.5`,
                          children: `*`,
                        }),
                      ],
                    }),
                    (0, $.jsx)(G, {
                      focusOutline: `hidden`,
                      ...e,
                      id: `skill-description`,
                      minRows: 2,
                      maxRows: 6,
                      placeholder: r(`com_ui_skill_description_placeholder`),
                      'aria-label': r(`com_ui_description`),
                      'aria-invalid': h.description ? `true` : `false`,
                      'aria-describedby': h.description ? `skill-description-error` : void 0,
                      className: `border-border-medium text-text-primary placeholder:text-text-secondary focus-visible:ring-ring-primary w-full resize-none rounded-xl border bg-transparent p-3 text-sm focus-visible:ring-2`,
                    }),
                    (0, $.jsx)(`p`, {
                      className: `text-text-secondary mt-1 text-xs`,
                      children: r(`com_ui_skill_description_field_hint`),
                    }),
                    h.description &&
                      (0, $.jsx)(`p`, {
                        id: `skill-description-error`,
                        className: `text-text-destructive mt-1 text-sm`,
                        role: `alert`,
                        children: h.description.message,
                      }),
                  ],
                }),
            }),
            (0, $.jsx)(Nt, { name: `body`, isEditing: o, setIsEditing: s }),
            g.error != null &&
              (0, $.jsxs)(`div`, {
                role: `alert`,
                className: `border-status-error-border bg-status-error-subtle text-text-destructive flex items-start gap-2 rounded-md border p-3 text-sm`,
                children: [
                  (0, $.jsx)(m, { className: `mt-0.5 size-4 shrink-0`, 'aria-hidden': `true` }),
                  (0, $.jsx)(`span`, { children: r(`com_ui_skill_create_error`) }),
                ],
              }),
            (0, $.jsxs)(`div`, {
              className: `mt-4 flex items-center justify-end gap-2`,
              children: [
                (0, $.jsx)(V, {
                  type: `button`,
                  variant: `outline`,
                  onClick: v,
                  children: r(`com_ui_cancel`),
                }),
                (0, $.jsx)(V, {
                  'aria-label': r(`com_ui_skill_create_title`),
                  type: `submit`,
                  disabled: y,
                  'aria-disabled': y || void 0,
                  className: j(`w-full sm:w-auto`, y && `opacity-50`),
                  children: r(`com_ui_skill_create_title`),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function It(e) {
  if (e)
    return {
      name: e.name,
      description: e.description,
      body: e.body ?? ``,
      category: e.category ?? ``,
      invocationMode: e.invocationMode ?? L.auto,
    };
}
function Lt({ skillId: e }) {
  let t = U(),
    n = E(),
    { showToast: r } = z(),
    [i, o] = (0, Q.useState)(null),
    s = ne(e),
    c = s.data,
    l = P(c),
    u = (0, Q.useMemo)(() => It(c), [c]),
    [d, f] = (0, Q.useState)(!1),
    p = Y({
      defaultValues: { name: ``, description: ``, body: ``, category: ``, invocationMode: L.auto },
      values: u,
      mode: `onChange`,
    }),
    {
      control: h,
      handleSubmit: g,
      reset: _,
      setError: v,
      formState: { isDirty: y, isValid: b, isSubmitting: x, errors: S },
    } = p;
  (0, Q.useEffect)(() => {
    o(null);
  }, [e]);
  let C = ze({
      onSuccess: (e) => {
        (r({
          status: e.warnings && e.warnings.length > 0 ? `warning` : `success`,
          message: t(`com_ui_skill_updated`),
        }),
          o(e.warnings ?? null),
          _(It(e)));
      },
      onError: (e) => {
        if (e?.response?.status === 409) {
          (r({ status: `warning`, message: t(`com_ui_skill_update_conflict`) }), s.refetch());
          return;
        }
        let n = e?.response?.data?.message ?? t(`com_ui_skill_update_error`);
        r({ status: `error`, message: n });
      },
    }),
    w = (e) => {
      if (!c || C.isLoading) return;
      let n = e.name.trim();
      if (!A.test(n)) {
        v(`name`, { message: t(`com_ui_skill_name_invalid`) });
        return;
      }
      let r = {
        name: n,
        description: e.description.trim(),
        body: e.body,
        category: e.category || void 0,
      };
      C.mutate({ id: c._id, expectedVersion: c.version, payload: r });
    };
  if (s.isLoading || l.isLoading)
    return (0, $.jsxs)(`div`, {
      className: `w-full px-4 py-2`,
      children: [
        (0, $.jsx)(te, { className: `mb-3 h-10 w-72` }),
        (0, $.jsx)(te, { className: `mb-3 h-20 w-full` }),
        (0, $.jsx)(te, { className: `h-64 w-full` }),
      ],
    });
  if (s.isError || !c)
    return (0, $.jsxs)(`div`, {
      className: `text-text-secondary w-full px-4 py-6 text-sm`,
      children: [
        (0, $.jsx)(`p`, {
          className: `text-text-primary font-medium`,
          children: t(`com_ui_skill_not_found`),
        }),
        (0, $.jsx)(`p`, { children: t(`com_ui_skill_not_found_description`) }),
      ],
    });
  let T = !l.canEdit,
    D = !y || !b || x || C.isLoading;
  return (0, $.jsx)(Ne, {
    ...p,
    children: (0, $.jsxs)(`form`, {
      onSubmit: g(w),
      className: `w-full px-4 py-2`,
      'aria-label': t(`com_ui_skill_edit_title`),
      children: [
        (0, $.jsx)(`h1`, { className: `sr-only`, children: t(`com_ui_skill_edit_title`) }),
        (0, $.jsx)(`div`, {
          className: `mb-1 flex flex-col items-center justify-between font-bold sm:text-xl md:mb-0 md:text-2xl`,
          children: (0, $.jsxs)(`div`, {
            className: `flex w-full flex-col items-start justify-between gap-2 sm:flex-row sm:items-center`,
            children: [
              (0, $.jsx)(X, {
                name: `name`,
                control: h,
                rules: {
                  required: t(`com_ui_skill_name_required`),
                  pattern: { value: A, message: t(`com_ui_skill_name_invalid`) },
                  maxLength: { value: 64, message: t(`com_ui_skill_name_too_long`, { 0: `64` }) },
                },
                render: ({ field: e }) =>
                  (0, $.jsxs)(`div`, {
                    className: `relative mb-1 flex w-full flex-col sm:w-auto md:mb-0`,
                    children: [
                      (0, $.jsx)(q, {
                        ...e,
                        id: `skill-name`,
                        type: `text`,
                        readOnly: T,
                        className: `peer border-border-medium text-text-primary mr-2 w-full border p-2 text-2xl`,
                        placeholder: ` `,
                        tabIndex: 0,
                        'aria-label': t(`com_ui_name`),
                        'aria-required': `true`,
                        'aria-invalid': S.name ? `true` : `false`,
                        'aria-describedby': S.name ? `skill-name-error` : void 0,
                      }),
                      (0, $.jsxs)(`label`, {
                        htmlFor: `skill-name`,
                        className: `bg-surface-primary-alt text-text-secondary peer-focus:text-text-primary pointer-events-none absolute -top-1 left-3 origin-[0] translate-y-3 scale-100 rounded px-1 text-base transition-transform duration-200 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-75`,
                        children: [t(`com_ui_name`), `*`],
                      }),
                      (0, $.jsx)(`div`, {
                        id: `skill-name-error`,
                        className: j(
                          `text-text-destructive mt-1 w-56 text-sm`,
                          S.name ? `visible h-auto` : `invisible h-0`,
                        ),
                        role: S.name ? `alert` : void 0,
                        children: S.name ? S.name.message : ` `,
                      }),
                    ],
                  }),
              }),
              (0, $.jsxs)(`div`, {
                className: `flex shrink-0 items-center gap-2`,
                children: [
                  (0, $.jsx)(kt, {}),
                  (0, $.jsx)(nt, { skill: c }),
                  l.canDelete &&
                    (0, $.jsx)(We, {
                      skillId: c._id,
                      skillName: c.name,
                      onDelete: () => n(`/skills`, { replace: !0 }),
                    }),
                ],
              }),
            ],
          }),
        }),
        (0, $.jsxs)(`div`, {
          className: `text-text-secondary mt-1 flex items-center gap-2 text-xs`,
          children: [
            (0, $.jsx)(`span`, { children: t(`com_ui_skill_version`, { 0: String(c.version) }) }),
            (0, $.jsx)(`span`, { 'aria-hidden': `true`, children: `·` }),
            (0, $.jsx)(`span`, { children: c.authorName }),
          ],
        }),
        T &&
          (0, $.jsxs)(`div`, {
            role: `note`,
            className: `border-status-warning-border bg-status-warning-subtle text-status-warning mt-4 flex items-start gap-2 rounded-md border p-3 text-sm`,
            children: [
              (0, $.jsx)(a, { className: `mt-0.5 size-4 shrink-0`, 'aria-hidden': `true` }),
              (0, $.jsx)(`span`, { children: t(`com_ui_skill_no_edit_permission`) }),
            ],
          }),
        i &&
          i.length > 0 &&
          (0, $.jsxs)(`div`, {
            role: `alert`,
            className: `border-status-warning-border bg-status-warning-subtle text-status-warning mt-4 flex flex-col gap-1 rounded-md border p-3 text-sm`,
            children: [
              (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2 font-semibold`,
                children: [
                  (0, $.jsx)(m, { className: `size-4`, 'aria-hidden': `true` }),
                  t(`com_ui_skill_warnings`),
                ],
              }),
              (0, $.jsx)(`ul`, {
                className: `ml-6 list-disc`,
                children: i.map((e) =>
                  (0, $.jsx)(`li`, { children: e.message }, `${e.field}:${e.code}`),
                ),
              }),
            ],
          }),
        (0, $.jsxs)(`div`, {
          className: `mt-4 flex w-full flex-col gap-4`,
          children: [
            (0, $.jsx)(X, {
              name: `description`,
              control: h,
              rules: {
                required: t(`com_ui_skill_description_required`),
                maxLength: {
                  value: R,
                  message: t(`com_ui_skill_description_too_long`, { 0: String(R) }),
                },
              },
              render: ({ field: e }) =>
                (0, $.jsxs)(`div`, {
                  className: `flex flex-col`,
                  children: [
                    (0, $.jsxs)(K, {
                      htmlFor: `skill-description`,
                      className: `text-text-secondary mb-1 text-sm font-medium`,
                      children: [
                        t(`com_ui_description`),
                        (0, $.jsx)(`span`, {
                          className: `text-text-destructive ml-0.5`,
                          children: `*`,
                        }),
                      ],
                    }),
                    (0, $.jsx)(G, {
                      focusOutline: `hidden`,
                      ...e,
                      id: `skill-description`,
                      readOnly: T,
                      minRows: 2,
                      maxRows: 6,
                      'aria-label': t(`com_ui_description`),
                      'aria-invalid': S.description ? `true` : `false`,
                      'aria-describedby': S.description ? `skill-description-error` : void 0,
                      className: `border-border-medium text-text-primary placeholder:text-text-secondary focus-visible:ring-ring-primary w-full resize-none rounded-xl border bg-transparent p-3 text-sm focus-visible:ring-2`,
                    }),
                    (0, $.jsx)(`p`, {
                      className: `text-text-secondary mt-1 text-xs`,
                      children: t(`com_ui_skill_description_field_hint`),
                    }),
                    S.description &&
                      (0, $.jsx)(`p`, {
                        id: `skill-description-error`,
                        className: `text-text-destructive mt-1 text-sm`,
                        role: `alert`,
                        children: S.description.message,
                      }),
                  ],
                }),
            }),
            (0, $.jsx)(Nt, { name: `body`, isEditing: d, setIsEditing: f }),
            !T &&
              (0, $.jsxs)(`div`, {
                className: `mt-4 flex items-center justify-end gap-2`,
                children: [
                  (0, $.jsx)(V, {
                    type: `button`,
                    variant: `outline`,
                    onClick: () => _(u),
                    disabled: !y,
                    className: j(!y && `opacity-50`),
                    children: t(`com_ui_reset`),
                  }),
                  (0, $.jsx)(V, {
                    type: `submit`,
                    disabled: D,
                    'aria-disabled': D || void 0,
                    className: j(`w-full sm:w-auto`, D && `opacity-50`),
                    children: t(`com_ui_save`),
                  }),
                ],
              }),
          ],
        }),
      ],
    }),
  });
}
export { xt as a, He as c, Tt as i, Ft as n, rt as o, Ot as r, Qe as s, Lt as t };
