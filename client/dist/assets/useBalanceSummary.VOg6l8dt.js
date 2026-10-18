import { o as e } from './rolldown-runtime.C0FnF6B9.js';
import { at as t, rt as n } from './advanced-inputs.BJDnsHUg.js';
import { pi as r } from './vendor.DpBpdTS1.js';
import { L as i, z as a } from './validation.OCGaXQWG.js';
import {
  Ah as o,
  By as s,
  Eg as c,
  Ig as l,
  Ih as u,
  K_ as d,
  Mg as f,
  O_ as p,
  Og as m,
  Pd as h,
  Pg as g,
  Rh as _,
  Wv as v,
  Wy as y,
  Yy as b,
  ax as x,
  bl as S,
  bm as C,
  br as w,
  cg as T,
  ef as E,
  fn as ee,
  jb as te,
  kg as D,
  kl as O,
  ox as k,
  s_ as A,
  t_ as j,
  tr as M,
  wg as N,
  yl as P,
} from './hooks.CliY9jTn.js';
import { a as F, i as ne, n as I, t as L } from './forms.UHk3QTvM.js';
function R(e) {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
}
function z(e) {
  try {
    return JSON.stringify(JSON.parse(e), null, 2);
  } catch {
    return e;
  }
}
function B(e) {
  let t = 0,
    n = -1,
    r = !1,
    i = !1;
  for (let a = 0; a < e.length; a++) {
    if (r) {
      i ? (i = !1) : e[a] === `\\` ? (i = !0) : e[a] === `"` && (r = !1);
      continue;
    }
    if (e[a] === `"` && t > 0) r = !0;
    else if (e[a] === `{`) (t === 0 && (n = a), t++);
    else if (e[a] === `}` && t > 0 && (t--, t === 0 && n !== -1)) return e.slice(n, a + 1);
  }
  return ``;
}
function re(e) {
  function t(e, t) {
    return R(t) ? JSON.parse(t)[e] : ``;
  }
  function n(t, n, r) {
    let i = {};
    (R(r) && (i = JSON.parse(r)), (i[t] = n), e(JSON.stringify(i)));
  }
  return { getMultiKey: t, setMultiKey: n };
}
var V = (e) =>
    e
      ? !!e.userProvide ||
        !!e.userProvideAccessKeyId ||
        !!e.userProvideSecretAccessKey ||
        !!e.userProvideSessionToken ||
        !!e.userProvideBearerToken
      : !1,
  ie = ({ endpointsConfig: e, modelSpecs: t, hasAgentAccess: n }) => {
    let r = Object.keys(e),
      i = t?.list ?? [];
    if (i.length === 0) return new Set(r);
    let a = new Set();
    for (let e of i) {
      let t = e.preset?.endpoint;
      t && a.add(t);
    }
    for (let e of t?.addedEndpoints ?? []) a.add(e);
    if (!n || !a.has(b.agents)) return a;
    let o = e[b.agents]?.allowedProviders ?? [];
    if (o.length > 0) {
      for (let e of o) a.add(e);
      return a;
    }
    for (let e of r) !x(e) && !k(e) && a.add(e);
    return a;
  },
  ae = ({ endpointsConfig: e, modelSpecs: t, hasAgentAccess: n }) => {
    if (!e) return [];
    let r = ie({ endpointsConfig: e, modelSpecs: t, hasAgentAccess: n }),
      i = [];
    for (let [t, n] of Object.entries(e)) r.has(t) && V(n) && i.push(t);
    return i;
  },
  H = e(t(), 1);
function U(e, t, n) {
  let r = new Date(t).toLocaleString(void 0, { hour12: n }),
    i = e(`com_endpoint_config_key_encryption`, { 0: r });
  return i.includes(r) ? i : `${i} ${r}`;
}
var W = n(),
  G = (0, H.forwardRef)((e, t) => {
    let {
        id: n,
        value: r,
        label: i,
        secret: a = !1,
        subLabel: s,
        onChange: c,
        labelClassName: l = ``,
        inputClassName: u = ``,
      } = e,
      d = O();
    return (0, W.jsxs)(W.Fragment, {
      children: [
        (0, W.jsxs)(`div`, {
          className: o(`mt-4 flex flex-row`, l),
          children: [
            (0, W.jsx)(A, { htmlFor: n, className: `text-left text-sm font-medium`, children: i }),
            s &&
              (0, W.jsx)(A, {
                className: `mx-1 text-right text-sm text-text-secondary`,
                children: s,
              }),
            (0, W.jsx)(`br`, {}),
          ],
        }),
        (0, W.jsx)(`div`, { className: `h-1` }),
        a
          ? (0, W.jsx)(p, {
              id: n,
              'data-testid': `input-${n}`,
              value: r ?? ``,
              onChange: c,
              ref: t,
              autoComplete: `new-password`,
              'data-lpignore': `true`,
              'data-1p-ignore': `true`,
              controlsOnHover: !0,
              placeholder: `${d(`com_endpoint_config_value`)} ${i}`,
              className: o(`flex h-10 max-h-10 w-full resize-none px-3 py-2`, u),
            })
          : (0, W.jsx)(j, {
              id: n,
              'data-testid': `input-${n}`,
              value: r ?? ``,
              onChange: c,
              ref: t,
              placeholder: `${d(`com_endpoint_config_value`)} ${i}`,
              className: o(`flex h-10 max-h-10 w-full resize-none px-3 py-2`, u),
            }),
      ],
    });
  }),
  K = ({ endpoint: e, userProvideURL: t }) => {
    let { control: n } = F();
    return (0, W.jsxs)(`form`, {
      className: `flex-wrap`,
      children: [
        (0, W.jsx)(L, {
          name: `apiKey`,
          control: n,
          render: ({ field: t }) =>
            (0, W.jsx)(G, {
              id: `apiKey`,
              ...t,
              label: `${e} API Key`,
              labelClassName: `mb-1`,
              inputClassName: `mb-2`,
              secret: !0,
            }),
        }),
        t &&
          (0, W.jsx)(L, {
            name: `baseURL`,
            control: n,
            render: ({ field: t }) =>
              (0, W.jsx)(G, { id: `baseURL`, ...t, label: `${e} API URL`, labelClassName: `mb-1` }),
          }),
      ],
    });
  },
  q = ({
    userProvideAccessKeyId: e,
    userProvideSecretAccessKey: t,
    userProvideSessionToken: n,
    userProvideBearerToken: r,
  }) => {
    let { control: i } = F(),
      a = O();
    return (0, W.jsx)(`form`, {
      className: `flex-wrap`,
      children: (() => {
        let o = [];
        return (
          e &&
            o.push(
              (0, W.jsx)(
                L,
                {
                  name: `bedrockAccessKeyId`,
                  control: i,
                  render: ({ field: e }) =>
                    (0, W.jsx)(G, {
                      id: `bedrockAccessKeyId`,
                      ...e,
                      label: a(`com_endpoint_config_bedrock_access_key_id`),
                      labelClassName: `mb-1`,
                      inputClassName: `mb-2`,
                    }),
                },
                `bedrockAccessKeyId`,
              ),
            ),
          t &&
            (o.length > 0 && o.push((0, W.jsx)(`div`, { className: `mt-3` }, `spacer1`)),
            o.push(
              (0, W.jsx)(
                L,
                {
                  name: `bedrockSecretAccessKey`,
                  control: i,
                  render: ({ field: e }) =>
                    (0, W.jsx)(G, {
                      id: `bedrockSecretAccessKey`,
                      ...e,
                      label: a(`com_endpoint_config_bedrock_secret_access_key`),
                      labelClassName: `mb-1`,
                      inputClassName: `mb-2`,
                    }),
                },
                `bedrockSecretAccessKey`,
              ),
            )),
          n &&
            (o.length > 0 && o.push((0, W.jsx)(`div`, { className: `mt-3` }, `spacer2`)),
            o.push(
              (0, W.jsx)(
                L,
                {
                  name: `bedrockSessionToken`,
                  control: i,
                  render: ({ field: e }) =>
                    (0, W.jsx)(G, {
                      id: `bedrockSessionToken`,
                      ...e,
                      label: a(`com_endpoint_config_bedrock_session_token`),
                      labelClassName: `mb-1`,
                      inputClassName: `mb-2`,
                    }),
                },
                `bedrockSessionToken`,
              ),
            )),
          r &&
            (o.length > 0 && o.push((0, W.jsx)(`div`, { className: `mt-3` }, `spacer3`)),
            o.push(
              (0, W.jsx)(
                L,
                {
                  name: `bedrockBearerToken`,
                  control: i,
                  render: ({ field: e }) =>
                    (0, W.jsx)(G, {
                      id: `bedrockBearerToken`,
                      ...e,
                      label: a(`com_endpoint_config_bedrock_bearer_token`),
                      labelClassName: `mb-1`,
                      inputClassName: `mb-2`,
                    }),
                },
                `bedrockBearerToken`,
              ),
            )),
          (0, W.jsx)(W.Fragment, { children: o })
        );
      })(),
    });
  },
  J = ({
    onFileSelected: e,
    className: t = ``,
    containerClassName: n = ``,
    successText: i = null,
    invalidText: a = null,
    validator: s = null,
    text: c = null,
    id: l = `1`,
  }) => {
    let [u, d] = (0, H.useState)(`text-text-secondary`),
      [f, p] = (0, H.useState)(null),
      m = O(),
      h = (t) => {
        let n = t.target.files?.[0];
        if (!n) return;
        let r = new FileReader();
        ((r.onload = (t) => {
          let n = JSON.parse(t.target?.result);
          if (s && !s(n)) {
            (p(`invalid`), d(`text-text-destructive`));
            return;
          }
          (s && (p(`success`), d(`text-status-success`)), e(n));
        }),
          r.readAsText(n));
      },
      g;
    return (
      (g = f
        ? f === `success`
          ? (i ?? m(`com_ui_upload_success`))
          : (a ?? m(`com_ui_upload_invalid`))
        : (c ?? m(`com_ui_import`))),
      (0, W.jsxs)(W.Fragment, {
        children: [
          (0, W.jsxs)(T, {
            type: `button`,
            variant: `ghost`,
            size: `sm`,
            onClick: () => {
              let e = document.getElementById(`file-upload-${l}`);
              e && e.click();
            },
            className: o(
              `text-text-secondary hover:bg-surface-hover hover:text-status-success focus:ring-text-primary mr-1 flex h-auto cursor-pointer items-center rounded bg-transparent px-2 py-1 text-xs font-normal transition-colors`,
              u,
              n,
            ),
            'aria-label': g,
            children: [
              (0, W.jsx)(r, {
                className: `mr-1 flex size-5.5 items-center stroke-1`,
                'aria-hidden': `true`,
              }),
              (0, W.jsx)(`span`, { className: `flex text-xs`, children: g }),
            ],
          }),
          (0, W.jsx)(`input`, {
            id: `file-upload-${l}`,
            value: ``,
            type: `file`,
            className: o(`hidden`, t),
            accept: `.json`,
            onChange: h,
            tabIndex: -1,
          }),
        ],
      })
    );
  },
  oe = i({ client_email: a().email().min(3), project_id: a().min(3), private_key: a().min(601) }),
  se = (e) => oe.safeParse(e).success,
  ce = ({ userKey: e, setUserKey: t }) => {
    let n = O(),
      { getMultiKey: r, setMultiKey: i } = re(t);
    return (0, W.jsxs)(W.Fragment, {
      children: [
        (0, W.jsxs)(`div`, {
          className: `flex flex-row`,
          children: [
            (0, W.jsx)(A, {
              htmlFor: s.GOOGLE_SERVICE_KEY,
              className: `text-left text-sm font-medium`,
              children: n(`com_endpoint_config_google_service_key`),
            }),
            (0, W.jsx)(A, {
              className: `mx-1 text-right text-sm text-text-secondary`,
              children: n(`com_endpoint_config_google_cloud_platform`),
            }),
            (0, W.jsx)(`br`, {}),
          ],
        }),
        (0, W.jsx)(J, {
          id: s.GOOGLE_SERVICE_KEY,
          className: `w-full`,
          containerClassName: `bg-surface-secondary h-10 max-h-10 w-full resize-none py-2`,
          text: n(`com_endpoint_config_key_import_json_key`),
          successText: n(`com_endpoint_config_key_import_json_key_success`),
          invalidText: n(`com_endpoint_config_key_import_json_key_invalid`),
          validator: se,
          onFileSelected: (t) => {
            i(s.GOOGLE_SERVICE_KEY, JSON.stringify(t), e);
          },
        }),
        (0, W.jsx)(G, {
          id: s.GOOGLE_API_KEY,
          value: r(s.GOOGLE_API_KEY, e) ?? ``,
          onChange: (t) => i(s.GOOGLE_API_KEY, t.target.value ?? ``, e),
          label: n(`com_endpoint_config_google_api_key`),
          subLabel: n(`com_endpoint_config_google_gemini_api`),
          secret: !0,
        }),
      ],
    });
  },
  Y = ({ endpoint: e, userProvideURL: t }) => {
    let { control: n } = F(),
      r = e === b.azureOpenAI;
    return (0, W.jsxs)(`form`, {
      className: `flex-wrap`,
      children: [
        !r &&
          (0, W.jsx)(L, {
            name: `apiKey`,
            control: n,
            render: ({ field: e }) =>
              (0, W.jsx)(G, {
                id: `apiKey`,
                ...e,
                label: `${r ? `Azure q` : ``}OpenAI API Key`,
                labelClassName: `mb-1`,
                inputClassName: `mb-2`,
                secret: !0,
              }),
          }),
        r &&
          (0, W.jsxs)(W.Fragment, {
            children: [
              (0, W.jsx)(L, {
                name: `azureOpenAIApiKey`,
                control: n,
                render: ({ field: e }) =>
                  (0, W.jsx)(G, {
                    id: `azureOpenAIApiKey`,
                    ...e,
                    label: `Azure OpenAI API Key`,
                    labelClassName: `mb-1`,
                    secret: !0,
                  }),
              }),
              (0, W.jsx)(`div`, { className: `mt-3` }),
              (0, W.jsx)(L, {
                name: `azureOpenAIApiInstanceName`,
                control: n,
                render: ({ field: e }) =>
                  (0, W.jsx)(G, {
                    id: `azureOpenAIApiInstanceName`,
                    ...e,
                    label: `Azure OpenAI Instance Name`,
                    labelClassName: `mb-1`,
                  }),
              }),
              (0, W.jsx)(`div`, { className: `mt-3` }),
              (0, W.jsx)(L, {
                name: `azureOpenAIApiDeploymentName`,
                control: n,
                render: ({ field: e }) =>
                  (0, W.jsx)(G, {
                    id: `azureOpenAIApiDeploymentName`,
                    ...e,
                    label: `Azure OpenAI Deployment Name`,
                    labelClassName: `mb-1`,
                  }),
              }),
              (0, W.jsx)(`div`, { className: `mt-3` }),
              (0, W.jsx)(L, {
                name: `azureOpenAIApiVersion`,
                control: n,
                render: ({ field: e }) =>
                  (0, W.jsx)(G, {
                    id: `azureOpenAIApiVersion`,
                    ...e,
                    label: `Azure OpenAI API Version`,
                    labelClassName: `mb-1`,
                  }),
              }),
            ],
          }),
        t &&
          (0, W.jsx)(`div`, {
            className: `mt-3`,
            children: (0, W.jsx)(L, {
              name: `baseURL`,
              control: n,
              render: ({ field: e }) =>
                (0, W.jsx)(G, {
                  id: `baseURL`,
                  ...e,
                  label: `API Base URL`,
                  subLabel: `(Optional)`,
                  labelClassName: `mb-1`,
                }),
            }),
          }),
      ],
    });
  },
  le = ({ userKey: e, setUserKey: t, endpoint: n }) => {
    let r = O();
    return (0, W.jsx)(G, {
      id: n,
      value: e ?? ``,
      onChange: (e) => t(e.target.value ?? ``),
      label: r(`com_endpoint_config_key_name`),
      secret: !0,
    });
  };
function ue({ endpoint: e }) {
  let t = O();
  return (
    {
      [b.google]: (0, W.jsxs)(W.Fragment, {
        children: [
          (0, W.jsxs)(`small`, {
            className: `mt-4 break-all text-text-secondary`,
            children: [
              t(`com_endpoint_config_google_service_key`),
              `: `,
              t(`com_endpoint_config_key_google_need_to`),
              ` `,
              (0, W.jsx)(`a`, {
                target: `_blank`,
                href: `https://console.cloud.google.com/vertex-ai`,
                rel: `noreferrer`,
                className: `text-link underline`,
                children: t(`com_endpoint_config_key_google_vertex_ai`),
              }),
              ` `,
              t(`com_endpoint_config_key_google_vertex_api`),
              ` `,
              (0, W.jsx)(`a`, {
                target: `_blank`,
                href: `https://console.cloud.google.com/projectselector/iam-admin/serviceaccounts/create?walkthrough_id=iam--create-service-account#step_index=1`,
                rel: `noreferrer`,
                className: `text-link underline`,
                children: t(`com_endpoint_config_key_google_service_account`),
              }),
              `. `,
              t(`com_endpoint_config_key_google_vertex_api_role`),
            ],
          }),
          (0, W.jsxs)(`small`, {
            className: `break-all text-text-secondary`,
            children: [
              t(`com_endpoint_config_google_api_key`),
              `: `,
              t(`com_endpoint_config_google_api_info`),
              ` `,
              (0, W.jsx)(`a`, {
                target: `_blank`,
                href: `https://makersuite.google.com/app/apikey`,
                rel: `noreferrer`,
                className: `text-link underline`,
                children: t(`com_endpoint_config_click_here`),
              }),
              ` `,
            ],
          }),
        ],
      }),
    }[e] || null
  );
}
var de = (0, H.memo)(ue),
  X = {
    [b.google]: ce,
    [b.openAI]: Y,
    [b.custom]: K,
    [b.azureOpenAI]: Y,
    [b.assistants]: Y,
    [b.azureAssistants]: Y,
    [b.bedrock]: q,
    default: le,
  },
  Z = new Set([b.openAI, b.custom, b.azureOpenAI, b.assistants, b.azureAssistants, b.bedrock]),
  Q = {
    THIRTY_MINUTES: { label: `in 30 minutes`, value: 18e5 },
    TWO_HOURS: { label: `in 2 hours`, value: 72e5 },
    TWELVE_HOURS: { label: `in 12 hours`, value: 432e5 },
    ONE_DAY: { label: `in 1 day`, value: 864e5 },
    ONE_WEEK: { label: `in 7 days`, value: 6048e5 },
    ONE_MONTH: { label: `in 30 days`, value: 2592e6 },
    NEVER: { label: `never`, value: 0 },
  },
  fe = ({ endpoint: e, disabled: t, setDialogOpen: n }) => {
    let r = O(),
      [i, a] = (0, H.useState)(!1),
      { showToast: o } = v(),
      s = S(e),
      l = P(),
      u = () => {
        (o({ message: r(`com_ui_revoke_key_success`), status: _.SUCCESS }), n && n(!1));
      },
      p = () => {
        o({ message: r(`com_ui_revoke_key_error`), status: _.ERROR });
      },
      h = () => {
        s.mutate({}, { onSuccess: u, onError: p });
      },
      y = s.isLoading || l.isLoading;
    return (0, W.jsx)(`div`, {
      className: `flex items-center justify-between`,
      children: (0, W.jsxs)(N, {
        open: i,
        onOpenChange: a,
        children: [
          (0, W.jsx)(g, {
            asChild: !0,
            children: (0, W.jsx)(T, {
              variant: `destructive`,
              className: `flex items-center justify-center rounded-lg transition-colors duration-200`,
              onClick: () => a(!0),
              disabled: t,
              children: r(`com_ui_revoke`),
            }),
          }),
          (0, W.jsxs)(c, {
            className: `max-w-[28.125rem]`,
            children: [
              (0, W.jsx)(D, {
                children: (0, W.jsx)(f, { children: r(`com_ui_revoke_key_endpoint`, { 0: e }) }),
              }),
              (0, W.jsx)(`div`, {
                className: `py-4`,
                children: (0, W.jsx)(A, {
                  className: `text-left text-sm font-medium`,
                  children: r(`com_ui_revoke_key_confirm`),
                }),
              }),
              (0, W.jsxs)(m, {
                children: [
                  (0, W.jsx)(T, {
                    variant: `outline`,
                    onClick: () => a(!1),
                    children: r(`com_ui_cancel`),
                  }),
                  (0, W.jsx)(T, {
                    variant: `destructive`,
                    onClick: h,
                    disabled: y,
                    className: `bg-surface-destructive text-text-on-status hover:bg-surface-destructive-hover transition-all duration-200`,
                    children: y ? (0, W.jsx)(d, {}) : r(`com_ui_revoke`),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  pe = ({
    open: e,
    onOpenChange: t,
    endpoint: n,
    endpointType: r,
    userProvideURL: i,
    userProvideAccessKeyId: a,
    userProvideSecretAccessKey: o,
    userProvideSessionToken: s,
    userProvideBearerToken: d,
  }) => {
    let p = ne({
        defaultValues: {
          apiKey: ``,
          baseURL: ``,
          azureOpenAIApiKey: ``,
          azureOpenAIApiInstanceName: ``,
          azureOpenAIApiDeploymentName: ``,
          azureOpenAIApiVersion: ``,
          bedrockAccessKeyId: ``,
          bedrockSecretAccessKey: ``,
          bedrockSessionToken: ``,
          bedrockBearerToken: ``,
        },
      }),
      [h, g] = (0, H.useState)(``),
      [y, x] = (0, H.useState)(Q.TWELVE_HOURS.label),
      { getExpiry: S, saveUserKey: C } = ee(n),
      { showToast: E } = v(),
      A = O(),
      j = Object.values(Q),
      M = r ?? n,
      P = (e) => {
        x(e);
      },
      F = () => {
        let e = j.find((e) => e.label === y),
          c;
        c = e?.value === 0 ? null : Date.now() + (e ? e.value : 0);
        let l = (e) => {
          try {
            (C(e, c), E({ message: A(`com_ui_save_key_success`), status: _.SUCCESS }), t(!1));
          } catch (e) {
            (u.error(`Error saving user key:`, e),
              E({ message: A(`com_ui_save_key_error`), status: _.ERROR }));
          }
        };
        if (Z.has(n) || Z.has(r ?? ``)) {
          p.handleSubmit((e) => {
            let n = M === b.azureOpenAI,
              r = M === b.bedrock,
              c = n || M === b.openAI || k(M);
            n && (e.apiKey = `n/a`);
            let u = Object.keys(e).filter((t) =>
              (!n && t.startsWith(`azure`)) ||
              (!r && t.startsWith(`bedrock`)) ||
              (c && t === `baseURL`) ||
              (t === `baseURL` && !(i ?? !1))
                ? !1
                : e[t] === ``,
            );
            if (r) {
              let n = d ? e.bedrockBearerToken?.trim() : ``,
                r = a ? e.bedrockAccessKeyId?.trim() : ``,
                i = o ? e.bedrockSecretAccessKey?.trim() : ``,
                c = s ? e.bedrockSessionToken?.trim() : ``,
                l = A(`com_endpoint_config_bedrock_access_key_id`),
                u = A(`com_endpoint_config_bedrock_secret_access_key`),
                f = A(`com_endpoint_config_bedrock_session_token`),
                p = A(`com_endpoint_config_bedrock_bearer_token`),
                m = !!n,
                h = !!a || !!o || !!s,
                g = [
                  !m && !h && d ? p : ``,
                  !m && a && !r ? l : ``,
                  !m && o && !i ? u : ``,
                  !m && s && !c ? f : ``,
                ].filter(Boolean);
              if (!m && g.length > 0) {
                (E({
                  message: `${A(`com_endpoint_config_required_fields`)} ${g.join(`, `)}`,
                  status: _.ERROR,
                }),
                  t(!0));
                return;
              }
              if (!m && !h) {
                (E({
                  message: A(`com_endpoint_config_bedrock_credentials_required`),
                  status: _.ERROR,
                }),
                  t(!0));
                return;
              }
            } else if (u.length > 0) {
              (E({
                message: `${A(`com_endpoint_config_required_fields`)} ${u.join(`, `)}`,
                status: _.ERROR,
              }),
                t(!0));
              return;
            }
            let {
                apiKey: f,
                baseURL: m,
                bedrockAccessKeyId: h,
                bedrockSecretAccessKey: g,
                bedrockSessionToken: v,
                bedrockBearerToken: y,
                ...x
              } = e,
              S = { apiKey: f, baseURL: m };
            if (n)
              S.apiKey = JSON.stringify({
                azureOpenAIApiKey: x.azureOpenAIApiKey,
                azureOpenAIApiInstanceName: x.azureOpenAIApiInstanceName,
                azureOpenAIApiDeploymentName: x.azureOpenAIApiDeploymentName,
                azureOpenAIApiVersion: x.azureOpenAIApiVersion,
              });
            else if (r) {
              let e = d ? y.trim() : ``,
                t = a ? h.trim() : ``,
                n = o ? g.trim() : ``,
                r = s ? v.trim() : ``;
              S.apiKey = JSON.stringify(
                e
                  ? { bearerToken: e }
                  : {
                      ...(t && { accessKeyId: t }),
                      ...(n && { secretAccessKey: n }),
                      ...(r && { sessionToken: r }),
                    },
              );
            }
            (l(JSON.stringify(S)), p.reset());
          })();
          return;
        }
        if (!h.trim()) {
          E({ message: A(`com_ui_key_required`), status: _.ERROR });
          return;
        }
        (l(h), g(``));
      },
      L = X[M] ?? X.default,
      R = S(),
      z = w(),
      B = null;
    return (
      R === `never`
        ? (B = A(`com_endpoint_config_key_never_expires`))
        : R !== void 0 && (B = U(A, R, z)),
      (0, W.jsx)(N, {
        open: e,
        onOpenChange: t,
        children: (0, W.jsxs)(c, {
          className: `w-11/12 max-w-2xl`,
          children: [
            (0, W.jsx)(D, {
              children: (0, W.jsx)(f, {
                children: `${A(`com_endpoint_config_key_for`)} ${te[n] ?? n}`,
              }),
            }),
            (0, W.jsxs)(`div`, {
              className: `grid w-full items-center gap-2 py-2`,
              children: [
                B && (0, W.jsx)(`small`, { className: `text-text-destructive`, children: B }),
                (0, W.jsx)(l, {
                  label: `${A(`com_endpoint_config_new_key_expiration`)}: `,
                  value: y,
                  onChange: P,
                  options: j.map((e) => e.label),
                  sizeClasses: `w-[min(11.5625rem,90vw)]`,
                  portal: !1,
                }),
                (0, W.jsx)(I, {
                  ...p,
                  children: (0, W.jsx)(L, {
                    userKey: h,
                    endpoint: n,
                    setUserKey: g,
                    userProvideURL: i,
                    userProvideAccessKeyId: a,
                    userProvideSecretAccessKey: o,
                    userProvideSessionToken: s,
                    userProvideBearerToken: d,
                  }),
                }),
                (0, W.jsx)(de, { endpoint: n }),
              ],
            }),
            (0, W.jsxs)(m, {
              children: [
                (0, W.jsx)(fe, { endpoint: n, disabled: !(R ?? ``), setDialogOpen: t }),
                (0, W.jsx)(T, { variant: `submit`, onClick: F, children: A(`com_ui_submit`) }),
              ],
            }),
          ],
        }),
      })
    );
  },
  me = 3e4,
  he = (e) => y.find((t) => t === e) ?? `credits`;
function $() {
  let { data: e } = E();
  return { display: he(e?.balance?.display), currency: e?.interface?.currency };
}
function ge() {
  let { isAuthenticated: e } = M(),
    { data: t } = E(),
    { display: n, currency: r } = $(),
    i = t?.balance,
    a = i?.enabled === !0,
    o = h({ enabled: e === !0 && a, staleTime: me }),
    { data: s, isError: c } = o,
    l = i?.startBalance,
    u = (0, H.useMemo)(
      () =>
        s != null && typeof s.tokenCredits == `number`
          ? { status: `success`, summary: C(s, { display: n, startBalance: l }) }
          : c
            ? { status: `error` }
            : o.isFetched
              ? { status: `empty` }
              : { status: `loading` },
      [s, c, o.isFetched, n, l],
    );
  return { enabled: a, state: u, currency: r, balance: u.status === `success` ? s : void 0 };
}
export { ae as a, z as c, U as i, R as l, ge as n, V as o, pe as r, B as s, $ as t };
