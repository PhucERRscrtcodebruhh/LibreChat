import { o as e, r as t } from './rolldown-runtime.C0FnF6B9.js';
import { at as n, rt as r } from './advanced-inputs.BJDnsHUg.js';
import {
  $r as i,
  Dn as a,
  Dt as o,
  Ft as s,
  Hn as c,
  Oi as l,
  Ot as u,
  aa as d,
  as as f,
  lr as p,
  wt as m,
} from './vendor.DpBpdTS1.js';
import { r as h, u as g } from './query-devtools.C2qG3_c-.js';
import {
  $c as _,
  $n as v,
  Ah as y,
  Ca as b,
  Eb as x,
  Eh as S,
  Ey as C,
  Fy as ee,
  Gi as te,
  Hf as ne,
  Ii as re,
  Jf as ie,
  Ji as ae,
  Ki as w,
  Kt as oe,
  Li as se,
  Mc as ce,
  Nm as le,
  Ob as T,
  Pc as ue,
  Ph as de,
  Qd as fe,
  Qn as pe,
  Ri as me,
  Rx as he,
  Sg as ge,
  Sl as _e,
  Ty as ve,
  Ui as ye,
  Xb as E,
  Xv as be,
  Yv as xe,
  Yy as Se,
  Zy as D,
  _i as Ce,
  _r as we,
  aa as Te,
  al as Ee,
  ax as De,
  ca as Oe,
  cg as O,
  cx as ke,
  cy as Ae,
  ef as je,
  fb as Me,
  fp as Ne,
  ga as Pe,
  gc as Fe,
  gy as Ie,
  h as Le,
  il as Re,
  jb as ze,
  kl as k,
  my as Be,
  nh as Ve,
  ny as A,
  ox as He,
  pi as Ue,
  pv as We,
  qh as Ge,
  qv as j,
  qy as M,
  ra as Ke,
  rv as qe,
  sn as Je,
  ty as Ye,
  ua as Xe,
  va as Ze,
  vm as Qe,
  wy as $e,
  xh as et,
  xo as tt,
  yo as nt,
} from './hooks.CliY9jTn.js';
import { l as rt, o as it, r as at, s as ot, t as st } from './useBalanceSummary.VOg6l8dt.js';
import { i as ct } from './forms.UHk3QTvM.js';
var N = e(n(), 1),
  P = r();
function lt({ skills: e, source: t = `manual` }) {
  let n = k();
  return !e || e.length === 0
    ? null
    : (0, P.jsx)(`div`, {
        className: `flex flex-wrap gap-1.5 py-0.5`,
        role: `list`,
        'aria-label': n(
          t === `always-apply`
            ? `com_ui_skills_always_apply_invoked`
            : `com_ui_skills_manual_invoked`,
        ),
        children: e.map((e) =>
          (0, P.jsxs)(
            `span`,
            {
              role: `listitem`,
              'data-skill-source': t,
              className: `border-border-chrome bg-surface-secondary text-text-secondary inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs`,
              children: [
                t === `always-apply`
                  ? (0, P.jsx)(c, { className: `text-status-info h-3 w-3`, 'aria-hidden': `true` })
                  : (0, P.jsx)(a, { className: `text-status-info h-3 w-3`, 'aria-hidden': `true` }),
                (0, P.jsx)(`span`, { className: `max-w-[12rem] truncate`, children: e }),
              ],
            },
            e,
          ),
        ),
      });
}
var ut = (0, N.memo)(lt),
  dt = (0, N.memo)(({ message: e }) => {
    let t = ce(),
      { shareId: n } = ue(),
      r = (0, N.useMemo)(() => et(e?.files, void 0, n ? void 0 : t), [e?.files, t, n]),
      i = (0, N.useMemo)(() => r?.filter(S) || [], [r]),
      a = (0, N.useMemo)(() => r?.filter((e) => !S(e)) || [], [r]),
      [o, s] = (0, N.useState)(null),
      c = (0, N.useCallback)((e) => {
        e || s(null);
      }, []);
    return (0, P.jsxs)(P.Fragment, {
      children: [
        a.length > 0 && a.map((e) => (0, P.jsx)(tt, { file: e, onClick: () => s(e) }, e.file_id)),
        i.length > 0 &&
          i.map((e) =>
            (0, P.jsx)(
              nt,
              {
                alignRight: !0,
                imagePath: e.preview ?? e.filepath ?? ``,
                height: e.height ?? 1920,
                width: e.width ?? 1080,
                altText: e.filename ?? `Uploaded Image`,
              },
              e.file_id,
            ),
          ),
        (0, P.jsx)(ae, {
          open: o !== null,
          onOpenChange: c,
          fileName: o?.filename ?? ``,
          fileId: o?.file_id,
          filePath: o?.filepath,
          fileType: o?.type ?? void 0,
          fileSource: o?.source,
          fileSize: o?.bytes,
          deliveryPath: o?.llmDeliveryPath,
        }),
      ],
    });
  }),
  F = ({ children: e, message: t }) =>
    (0, P.jsxs)(`div`, {
      className: `text-message flex min-h-[1.25rem] flex-col items-start gap-3 overflow-visible [.text-message+&]:mt-5`,
      dir: `auto`,
      children: [
        t?.isCreatedByUser === !0 &&
          (0, P.jsxs)(P.Fragment, {
            children: [
              (0, P.jsx)(we, { quotes: t.quotes }),
              (0, P.jsx)(dt, { message: t }),
              (0, P.jsx)(ut, { skills: t.alwaysAppliedSkills, source: `always-apply` }),
              (0, P.jsx)(ut, { skills: t.manualSkills, source: `manual` }),
            ],
          }),
        e,
      ],
    });
function ft(e) {
  if (
    e.length > 64e3 ||
    !e.includes(`
`)
  )
    return e;
  let t = e.split(`
`);
  return t.length > 500
    ? e
    : t.map((e) => {
        let t = e.trim();
        if (
          t.length < 2 ||
          t.length > 8e3 ||
          !((t.startsWith(`{`) && t.endsWith(`}`)) || (t.startsWith(`[`) && t.endsWith(`]`)))
        )
          return e;
        try {
          let n = JSON.parse(t);
          if (typeof n != `object` || !n) return e;
          let r = e.slice(0, e.length - e.trimStart().length);
          return `${r}${JSON.stringify(n, null, 2).replace(/\n/g, `\n${r}`)}`;
        } catch {
          return e;
        }
      }).join(`
`);
}
var pt = new Set([`delivery_scheduled`, `result_persisting`]);
function mt(e) {
  if (e == null) return;
  if (e.kind === `notice`)
    return e.status === `cancelled` ? `cancelled` : pt.has(e.status) ? void 0 : `failed`;
  if (e.kind === `list`) return e.partial || e.warning ? `failed` : void 0;
  let t = e.task.status;
  return t === `cancelled`
    ? `cancelled`
    : t === `error` ||
        t === `failed` ||
        t === `interrupted` ||
        t === `not_running` ||
        t === `control_not_found`
      ? `failed`
      : void 0;
}
var I = (e) => typeof e == `object` && !!e && !Array.isArray(e),
  L = (e) => e === void 0 || typeof e == `string`,
  ht = (e) =>
    e === `cancellation_requested`
      ? `stopping`
      : e === `running` ||
          e === `accepted` ||
          e === `claimed` ||
          e === `not_running` ||
          e === `control_not_found` ||
          e === `completed` ||
          e === `error` ||
          e === `cancelled` ||
          e === `dispatched` ||
          e === `failed` ||
          e === `interrupted`
        ? e
        : null,
  gt = (e) => e === void 0 || e === `pending` || e === `failed` || e === `delivered`,
  _t = new Set([`turn`, `range`, `tool`, `text`]),
  vt = new Set([`running`, `ok`, `error`, `cancelled`]),
  yt = /^\d+(?:\.\d+)*(?:-\d+)?$/,
  bt = 200,
  R = (e) => typeof e == `number` && Number.isFinite(e) && e >= 0,
  z = (e, t) => (typeof e == `string` && e !== `` ? e.slice(0, t) : void 0);
function xt(e) {
  if (
    !I(e) ||
    typeof e.path != `string` ||
    e.path.length > 64 ||
    !yt.test(e.path) ||
    typeof e.kind != `string` ||
    !_t.has(e.kind)
  )
    return null;
  let t = z(e.name, 128),
    n = z(e.label, 256),
    r = z(e.summary, 512);
  return {
    path: e.path,
    kind: e.kind,
    ...(typeof e.status == `string` && vt.has(e.status) ? { status: e.status } : {}),
    ...(t == null ? {} : { name: t }),
    ...(n == null ? {} : { label: n }),
    ...(r == null ? {} : { summary: r }),
    ...(R(e.ms) ? { ms: e.ms } : {}),
    ...(R(e.chars) ? { chars: e.chars } : {}),
    ...(R(e.errors) && e.errors > 0 ? { errors: e.errors } : {}),
    ...(e.folded === !0 ? { folded: !0 } : {}),
    ...(e.evicted === !0 ? { evicted: !0 } : {}),
  };
}
function St(e) {
  if (
    !I(e) ||
    !R(e.turns) ||
    !R(e.tools) ||
    !R(e.errors) ||
    !Array.isArray(e.nodes) ||
    e.nodes.length > bt
  )
    return;
  let t = e.nodes.map(xt);
  if (t.some((e) => e == null)) return;
  let n = z(e.active, 64);
  return {
    turns: e.turns,
    tools: e.tools,
    errors: e.errors,
    nodes: t,
    ...(n != null && yt.test(n) ? { active: n } : {}),
    ...(e.phase === `thinking` ? { phase: `thinking` } : {}),
    ...(R(e.idle_ms) ? { idle_ms: e.idle_ms } : {}),
    ...(e.truncated === !0 ? { truncated: !0 } : {}),
  };
}
function Ct(e) {
  if (!I(e)) return null;
  let t = ht(e.status);
  return typeof e.background_task_id != `string` ||
    e.background_task_id === `` ||
    typeof e.tool != `string` ||
    e.tool === `` ||
    t == null ||
    !L(e.result) ||
    !L(e.error) ||
    !L(e.note) ||
    !L(e.message) ||
    !L(e.subagent_type) ||
    (e.result_available != null && typeof e.result_available != `boolean`) ||
    (e.result_claimed != null && typeof e.result_claimed != `boolean`) ||
    !gt(e.delivery)
    ? null
    : {
        taskId: e.background_task_id,
        toolName: e.tool,
        status: t === `running` && e.cancellation_requested === !0 ? `stopping` : t,
        ...(typeof e.result == `string` ? { result: e.result } : {}),
        ...(typeof e.error == `string` ? { error: e.error } : {}),
        ...(typeof e.note == `string` ? { note: e.note } : {}),
        ...(typeof e.message == `string` ? { message: e.message } : {}),
        ...(typeof e.subagent_type == `string` ? { subagentType: e.subagent_type } : {}),
        ...(e.result_available === !0 ? { resultAvailable: !0 } : {}),
        ...(e.result_claimed === !0 ? { resultClaimed: !0 } : {}),
        ...(e.delivery == null ? {} : { delivery: e.delivery }),
        ...(typeof e.subagent_thread_id == `string` && e.subagent_thread_id !== ``
          ? { threadId: e.subagent_thread_id }
          : {}),
        ...wt(e.activity),
      };
}
function wt(e) {
  let t = e == null ? void 0 : St(e);
  return t == null ? {} : { activity: t };
}
function Tt(e) {
  if (!e || e.length > 2e6) return null;
  let t = e.trim();
  if (!t.startsWith(`{`) || !t.endsWith(`}`)) return null;
  let n;
  try {
    n = JSON.parse(t);
  } catch {
    return null;
  }
  if (!I(n) || (`tasks` in n && !Array.isArray(n.tasks))) return null;
  if (Array.isArray(n.tasks)) {
    let e = n.tasks.map(Ct);
    return e.some((e) => e == null)
      ? null
      : {
          kind: `list`,
          tasks: e,
          partial: n.partial === !0,
          ...(typeof n.warning == `string` ? { warning: n.warning } : {}),
          ...(typeof n.message == `string` ? { message: n.message } : {}),
        };
  }
  let r = Ct(n);
  return r == null
    ? typeof n.status == `string` && typeof n.message == `string`
      ? { kind: `notice`, status: n.status, message: n.message }
      : null
    : { kind: `task`, task: r };
}
var Et = new Set([`py`, `python`]);
function Dt(e, t) {
  if (e === M.BASH_PROGRAMMATIC_TOOL_CALLING) return !0;
  if (e !== M.PROGRAMMATIC_TOOL_CALLING) return !1;
  let n = Ze(t, `lang`) || Ze(t, `runtime`) || Ze(t, `language`);
  return !Et.has(n.toLowerCase());
}
function Ot(e, t) {
  return !t.hasOutput && !t.failed && !t.cancelled && Pe(e);
}
function kt(e) {
  return typeof e == `string` && b(e);
}
function At(e, t, n) {
  return e === `create_file` && n?.startsWith(`Updated `)
    ? `edit_file`
    : Dt(e, t)
      ? x.bash_tool
      : e;
}
function B(e, t, n) {
  if (e == null) return { hasOutput: t, failed: n, cancelled: !1 };
  let r = Ne({
    runStepStatus: e,
    displayProgress: 1,
    reportedProgress: 1,
    isSubmitting: !1,
    hasError: n,
  });
  return { hasOutput: r !== `running`, failed: r === `failed`, cancelled: r === `cancelled` };
}
function jt(e, t, n) {
  if (e.type !== j.TOOL_CALL) return null;
  let r = e[j.TOOL_CALL];
  if (!r) return null;
  let i = r.runStepStatus;
  if (`args` in r && (!r.type || r.type === A.TOOL_CALL)) {
    let e = r,
      a = !!e.output || e.progress === 1,
      o = e.name ?? ``,
      s = At(o, e.args, e.output),
      c = de(t?.[e.id ?? ``], e.agentId, r.stepId, r.stepId == null ? n : void 0),
      l =
        o === `set_memory` || o === `delete_memory`
          ? Ce(o, e.output ?? ``) || (c ?? []).some((e) => e[x.memory]?.type === `error`)
          : kt(e.output) ||
            (o === x.bash_tool &&
              r.executor === `attached_workspace` &&
              Ue(e.output ?? ``)?.failed === !0),
      u = re(e.output),
      { backgroundStatus: d, fileAttachments: f } = se(c, e.id),
      p = d != null || (f?.length ?? 0) > 0,
      m = u != null && d === `error`,
      h = mt(o === M.CHECK_BACKGROUND_TASK ? Tt(e.output) : null),
      g = B(
        e.backgroundTask?.cancelled === !0 || (u != null && d === `cancelled`) || h === `cancelled`
          ? `cancelled`
          : i,
        a,
        l || m || h === `failed`,
      );
    return {
      name: o,
      iconName: s,
      ...(u != null && { background: p ? `finished` : `running` }),
      ...g,
      ...(Ot(e, g) && { preparing: !0 }),
    };
  }
  if (r.type === A.CODE_INTERPRETER) {
    let e = r.code_interpreter;
    return {
      name: `code_interpreter`,
      iconName: `code_interpreter`,
      ...B(i, (e?.outputs?.length ?? 0) > 0, !1),
    };
  }
  if (r.type === A.RETRIEVAL || r.type === A.FILE_SEARCH) {
    let e = r.output;
    return { name: `file_search`, iconName: `file_search`, ...B(i, !!e, kt(e)) };
  }
  if (r.type === A.FUNCTION && A.FUNCTION in r) {
    let e = r.function,
      t = B(i, !!e.output || r.progress === 1, kt(e.output)),
      n = {
        args: e.arguments,
        output: e.output,
        progress: r.progress,
        runStepStatus: i,
        toolPreparationStartedAt: r.toolPreparationStartedAt,
        toolDispatchedAt: r.toolDispatchedAt,
      };
    return { name: e.name, iconName: e.name, ...t, ...(Ot(n, t) && { preparing: !0 }) };
  }
  return null;
}
function Mt({ failed: e, cancelled: t }) {
  if (e > 0) return `failed`;
  if (t > 0) return `cancelled`;
}
var Nt = new WeakMap(),
  Pt = (e) => {
    let t = e[j.TOOL_CALL];
    return { id: t?.id ?? ``, stepId: t?.stepId };
  };
function Ft(e, t) {
  let n,
    r = (r) => {
      if (t?.[r] != null) {
        if (n == null) {
          n = new Map();
          for (let t of e) {
            if (t?.type !== j.TOOL_CALL) continue;
            let e = Pt(t);
            if (e.id === `` || e.stepId == null) continue;
            let r = n.get(e.id) ?? new Set();
            (r.add(e.stepId), n.set(e.id, r));
          }
        }
        return n.get(r);
      }
    },
    i = (e) => {
      if (e.type !== j.TOOL_CALL) return null;
      let { id: n } = Pt(e),
        i = t?.[n],
        a = r(n),
        o = a == null ? `` : Array.from(a).join(`|`),
        s = Nt.get(e);
      if (s != null && s.attachments === i && s.siblings === o) return s.meta;
      let c = jt(e, t, a);
      return (Nt.set(e, { attachments: i, siblings: o, meta: c }), c);
    },
    a = 0,
    o = 0,
    s = 0,
    c = 0,
    l;
  for (let t of e) {
    t?.type === j.AGENT_UPDATE && ((l = void 0), (c = 0));
    let e = t == null ? null : i(t);
    (e != null && ((s += 1), (c = e.iconName === l ? c + 1 : 1), (l = e.iconName)),
      e?.failed === !0 && (a += 1),
      e?.cancelled === !0 && (o += 1));
  }
  return { failed: a, cancelled: o, total: s, trailingToolCount: c, metaOf: i };
}
var It = (e, t) => {
    let n = Ae(e, t);
    return n?.isCreatedByUser === !0 ? n : void 0;
  },
  Lt = (e) =>
    (e.text?.length ?? 0) > 0 ||
    (e.files?.length ?? 0) > 0 ||
    (e.content?.some((e) => e != null && !le(e)) ?? !1),
  Rt = (e) => e.error === !0 || (e.content?.some((e) => e?.type === j.ERROR) ?? !1),
  zt = (e, t) =>
    e
      ? t && !t.isCreatedByUser && Lt(t)
        ? `streaming`
        : `submitted`
      : t && Rt(t)
        ? `error`
        : `ready`,
  Bt = new Set([`added`, `removed`, `updated`]),
  Vt = (e) => {
    let t = h(),
      n = (0, N.useMemo)(() => g([Me.messages, e]), [e]);
    return {
      queryClient: t,
      queryHash: n,
      subscribe: (0, N.useCallback)(
        (e) => {
          let r = !0,
            i = t.getQueryCache().subscribe((t) => {
              t.query.queryHash !== n ||
                !Bt.has(t.type) ||
                queueMicrotask(() => {
                  r && e();
                });
            });
          return () => {
            ((r = !1), i());
          };
        },
        [t, n],
      ),
    };
  },
  Ht = (e, t, n) =>
    (0, N.useCallback)(
      (r) => {
        let i = r?.messageId ?? t,
          a = e()?.find((e) => e.messageId === i);
        n(
          a
            ? {
                messageId: a.messageId,
                parentMessageId: a.parentMessageId,
                isCreatedByUser: a.isCreatedByUser,
              }
            : { messageId: i },
        );
      },
      [e, t, n],
    ),
  Ut = (e, t) => {
    if (!(!e || t == null)) {
      for (let n = e.length - 1; n >= 0; n--) if (e[n].messageId === t) return e[n];
    }
  },
  Wt = (e) => {
    if (!(`parts` in e)) return e;
    let { parentMessageId: t } = e.metadata ?? {};
    return {
      text: e.parts.map((e) => e.text).join(``),
      ...(t !== void 0 && { parentMessageId: t ?? M.NO_PARENT }),
    };
  };
function Gt(e, t) {
  let n = o();
  return {
    sendMessage: (0, N.useCallback)((t, n) => e(Wt(t), n), [e]),
    resumeStream: (0, N.useCallback)(async () => {
      !t || t === M.NEW_CONVO || n.set(Le, (e) => (e.has(t) ? e : new Set(e).add(t)));
    }, [t, n]),
  };
}
function Kt() {
  let {
      conversation: e,
      getMessages: t,
      messagesKey: n,
      latestMessageId: r,
      isSubmitting: i,
      ask: a,
      regenerate: o,
      stopGenerating: s,
    } = Ee(),
    { subscribe: c } = Vt(n),
    l = (0, N.useCallback)(() => zt(i, Ut(t(), r)), [t, i, r]),
    u = (0, N.useSyncExternalStore)(c, l, l),
    d = Ht(t, r, o),
    f = n || e?.conversationId || void 0,
    { sendMessage: p, resumeStream: m } = Gt(a, f);
  return (0, N.useMemo)(
    () => ({ id: f, status: u, sendMessage: p, regenerate: d, stop: s, resumeStream: m }),
    [f, u, p, d, s, m],
  );
}
var qt = u(null),
  Jt = (e) => e != null && e !== `` && !He(e);
function Yt() {
  let { index: e, conversation: t } = Ee(),
    { sendMessage: n, status: r } = Kt(),
    i = r === `submitted` || r === `streaming`,
    a = ne(e),
    [o, s] = m(qt),
    c = t?.conversationId,
    l = c != null && c !== M.NEW_CONVO && c !== M.PENDING_CONVO,
    u = i && o === c,
    d = l && !i && a != null && a.parentMessageId != null && !Be(a),
    f = (0, N.useRef)(i),
    p = (0, N.useRef)(!1);
  return (
    (0, N.useEffect)(() => {
      let e = f.current && !i,
        t = !p.current && !i;
      ((p.current = !0), (f.current = i), (e || t) && o != null && s(null));
    }, [i, o, s]),
    {
      compact: (0, N.useCallback)(() => {
        !d ||
          a == null ||
          c == null ||
          (s(c),
          n(
            { text: ``, conversationId: c, messageId: a.messageId, parentMessageId: a.messageId },
            { compact: !0 },
          ) === !1 && s(null));
      }, [n, d, c, a, s]),
      canCompact: d,
      isCompacting: u,
    }
  );
}
var V = { INVALID_API_KEY: `invalid_api_key`, INSUFFICIENT_QUOTA: `insufficient_quota` };
function H(e, t) {
  let n = e?.[t];
  return typeof n == `string` && n.length > 0 ? n : void 0;
}
function U(e, t) {
  let n = e?.[t];
  if (typeof n == `number` && Number.isFinite(n)) return n;
  if (typeof n == `string` && n.trim() !== `` && Number.isFinite(Number(n))) return Number(n);
}
function W(e, t) {
  let n = e?.[t];
  return typeof n == `object` && n && !Array.isArray(n) ? n : void 0;
}
var G = (e) => ze[e] ?? e;
function Xt(e, t) {
  let n = e?.[he(t)];
  if (n != null) return { agent: n, endpoint: n.provider || void 0, model: n.model ?? void 0 };
  let r = Ie(t) ? $e(t) : void 0;
  return r == null ? {} : { endpoint: r.endpoint, model: r.model };
}
function Zt(e, { partAgentId: t, rowModel: n, conversationAgentId: r }) {
  let i = t ?? r;
  if (i != null) return Xt(e, i);
  if (n == null || n === M.EPHEMERAL_AGENT_ID) return {};
  let a = Xt(e, n);
  return a.endpoint != null || !Ie(n) ? a : { model: n };
}
var Qt = (e) => it(e) || e?.userProvideURL === !0;
function $t(e, t) {
  return t == null ? !1 : e == null ? void 0 : Qt(e[t]);
}
function K(e, t) {
  let n = (0, N.useContext)(Re),
    r = _(),
    i = n != null,
    { data: a } = fe({ enabled: i }),
    { data: o } = je({ enabled: i }),
    s = e ?? n?.conversation ?? void 0,
    c = s?.endpoint ?? void 0,
    l = s?.model ?? void 0,
    u =
      e == null && n?.conversation?.agent_id !== M.EPHEMERAL_AGENT_ID
        ? (n?.conversation?.agent_id ?? void 0)
        : void 0,
    d = e?.partAgentId;
  return (0, N.useMemo)(() => {
    let e = d != null || De(c),
      n = e ? Zt(r, { partAgentId: d, rowModel: l, conversationAgentId: u }) : void 0,
      s = e ? n?.endpoint : c,
      f = t ?? s;
    return {
      endpoint: f,
      endpointType: f ? E(a, f, `type`) : void 0,
      provider: f ? G(f) : void 0,
      model: e ? n?.model : l,
      agent: n?.agent,
      userProvidesCredentials: $t(a, f),
      compactionAvailable:
        i && o?.compactionEnabled === !0 && o.interface?.contextUsage !== !1 && Jt(c),
      endpointsConfig: a,
    };
  }, [i, c, l, u, d, t, r, a, o?.compactionEnabled, o?.interface?.contextUsage]);
}
function q({ children: e }) {
  return (0, P.jsx)(`div`, { className: `flex flex-col gap-2`, children: e });
}
function J({ label: e, children: t }) {
  let [n, r] = (0, N.useState)(!1),
    i = (0, N.useId)(),
    { style: a, ref: o } = oe(n);
  return (0, P.jsxs)(`div`, {
    children: [
      (0, P.jsxs)(`button`, {
        type: `button`,
        onClick: () => r((e) => !e),
        'aria-expanded': n,
        'aria-controls': i,
        className: `text-text-secondary hover:text-text-primary focus-visible:ring-text-primary flex items-center gap-1 rounded-md text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:outline-hidden`,
        children: [
          e,
          (0, P.jsx)(d, {
            className: y(
              `size-3.5 transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none`,
              n && `rotate-90`,
            ),
            'aria-hidden': `true`,
          }),
        ],
      }),
      (0, P.jsx)(`div`, {
        id: i,
        style: a,
        'aria-hidden': !n,
        children: (0, P.jsx)(`div`, {
          ref: o,
          className: `overflow-hidden`,
          children: (0, P.jsx)(`div`, {
            className: `text-text-secondary mt-1 text-xs break-words whitespace-pre-wrap`,
            children: t,
          }),
        }),
      }),
    ],
  });
}
var en = 240;
function tn({ headline: e, detail: t, label: n }) {
  return t == null
    ? (0, P.jsx)(P.Fragment, { children: e })
    : (0, P.jsxs)(q, {
        children: [
          (0, P.jsx)(`div`, { children: e }),
          t.length <= en && !/[\r\n]/.test(t)
            ? (0, P.jsx)(`div`, { className: `text-text-secondary`, children: t })
            : (0, P.jsx)(J, { label: n, children: t }),
        ],
      });
}
function nn({ children: e }) {
  return (0, P.jsx)(`div`, { className: `flex flex-wrap items-center gap-2`, children: e });
}
function rn({ onClick: e, children: t }) {
  return (0, P.jsx)(O, {
    type: `button`,
    size: `sm`,
    className: `rounded-md`,
    onClick: e,
    children: t,
  });
}
var Y = (e) => new Intl.NumberFormat().format(e),
  an = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/;
function on(e) {
  if (typeof e == `string` && !an.test(e)) return e;
  let t = new Date(e);
  return Number.isNaN(t.getTime())
    ? String(e)
    : new Intl.DateTimeFormat(void 0, { dateStyle: `medium`, timeStyle: `short` }).format(t);
}
function sn(e) {
  let t = Math.max(0, Math.ceil(e / 1e3)),
    n = t % 60,
    r = Math.floor(t / 60) % 60,
    i = Math.floor(t / 3600),
    a = (e) => e.toString().padStart(2, `0`);
  return i > 0 ? `${i}:${a(r)}:${a(n)}` : `${r}:${a(n)}`;
}
function cn(e) {
  let t = k();
  if (e != null)
    return e === 1 ? t(`com_error_window_minute`) : t(`com_error_window_minutes`, { 0: Y(e) });
}
function ln(e, t) {
  return t == null
    ? e
    : (0, P.jsxs)(q, {
        children: [
          (0, P.jsx)(`div`, { children: e }),
          (0, P.jsx)(J, { label: t.label, children: t.value }),
        ],
      });
}
function un(e) {
  return H(e, `info`) ?? H(W(W(e, `info`), `stop_details`), `explanation`);
}
function dn(e) {
  return H(e, `error`) ?? H(W(e, `error`), `message`);
}
function X({ json: e, message: t }) {
  let n = k(),
    { provider: r, model: i } = K(t),
    a = H(e, `code`) ?? H(e, `type`);
  if (a === D.REFUSAL) {
    let t = i == null ? n(`com_error_refusal_unknown`) : n(`com_error_refusal`, { 0: i }),
      r = un(e);
    return r == null ? t : ln(t, { label: n(`com_error_refusal_reason`), value: r });
  }
  if (a === D.GOOGLE_ERROR) {
    let t = n(`com_error_google_error`),
      r = H(e, `info`);
    return r == null ? t : ln(t, { label: n(`com_error_details_provider`), value: r });
  }
  if (a === D.INVALID_REQUEST) {
    let t =
        r == null
          ? n(`com_error_invalid_request_error_unknown`)
          : n(`com_error_invalid_request_error`, { 0: r }),
      i =
        [dn(e), H(e, `message`), H(e, `info`)].filter((e) => e != null).join(`

`) || void 0;
    return i == null ? t : ln(t, { label: n(`com_error_details_provider`), value: i });
  }
  return a === D.NO_SYSTEM_MESSAGES
    ? r == null
      ? n(`com_error_no_system_messages_unknown`)
      : n(`com_error_no_system_messages`, { 0: r })
    : (0, P.jsx)(fn, { json: e, text: ``, message: t });
}
function fn({ json: e, text: t, message: n }) {
  let r = k(),
    { provider: i } = K(n),
    a = ot(t),
    o = dn(e) ?? H(e, `message`) ?? H(e, `info`),
    s = a === `` ? t : t.replace(a, () => o ?? ``),
    c = ee(s).trim() || o;
  if (
    c != null &&
    /^This turn exceeds the configured (attachment count|total attachment size|extracted document text) limit \(/.test(
      c,
    )
  )
    return (0, P.jsx)(tn, {
      headline: r(`com_error_attachment_limit`),
      detail: c,
      label: r(`com_error_details_attachment`),
    });
  let l = i == null ? r(`com_error_upstream_model`) : r(`com_error_provider_failed`, { 0: i }),
    u = c == null && e != null ? r(`com_error_unknown`) : l;
  return (0, P.jsx)(tn, { headline: u, detail: c, label: r(`com_error_details_provider`) });
}
var pn = {
  [D.NO_USER_KEY]: `com_error_user_key_add`,
  [D.NO_BASE_URL]: `com_error_user_url_add`,
  [D.INVALID_BASE_URL]: `com_error_user_url_update`,
};
function Z({ json: e, message: t }) {
  let n = k(),
    [r, i] = (0, N.useState)(!1),
    a = H(e, `code`) ?? H(e, `type`),
    {
      endpoint: o,
      endpointType: s,
      provider: c,
      userProvidesCredentials: l,
      endpointsConfig: u,
    } = K(t, a === D.EXPIRED_USER_KEY ? H(e, `endpoint`) : void 0),
    d = H(e, `expiredAt`),
    f = (e, t, r) => (c == null || l == null ? n(e) : n(l ? t : r, { 0: c })),
    p = (e, t) => (l === !0 && c != null ? n(t, { 0: c }) : n(e)),
    m;
  switch (a) {
    case D.NO_USER_KEY:
      m = f(
        `com_error_no_user_key_generic`,
        `com_error_no_user_key`,
        `com_error_no_user_key_admin`,
      );
      break;
    case D.EXPIRED_USER_KEY:
      m =
        d == null
          ? n(`com_error_invalid_user_key`)
          : c == null
            ? n(`com_error_expired_user_key_generic`, { 0: on(d) })
            : n(`com_error_expired_user_key`, { 0: c, 1: on(d) });
      break;
    case D.INVALID_USER_KEY:
      m = p(`com_error_invalid_user_key`, `com_error_invalid_user_key_provider`);
      break;
    case D.NO_BASE_URL:
      m = p(`com_error_no_base_url`, `com_error_no_base_url_provider`);
      break;
    case D.INVALID_BASE_URL:
      m = p(`com_error_invalid_base_url`, `com_error_invalid_base_url_provider`);
      break;
    case V.INVALID_API_KEY:
      m = f(
        `com_error_invalid_api_key_generic`,
        `com_error_invalid_api_key`,
        `com_error_invalid_api_key_admin`,
      );
      break;
    case V.INSUFFICIENT_QUOTA:
      m = f(
        `com_error_insufficient_quota_generic`,
        `com_error_insufficient_quota`,
        `com_error_insufficient_quota_admin`,
      );
      break;
    default:
      m = n(`com_error_invalid_user_key`);
  }
  let h = l === !0 && o != null,
    g = (a == null ? void 0 : pn[a]) ?? `com_error_user_key_update`;
  return (0, P.jsxs)(q, {
    children: [
      m,
      h && (0, P.jsx)(nn, { children: (0, P.jsx)(rn, { onClick: () => i(!0), children: n(g) }) }),
      h &&
        r &&
        o != null &&
        (0, P.jsx)(at, {
          open: r,
          onOpenChange: i,
          endpoint: o,
          endpointType: s,
          userProvideURL: E(u, o, `userProvideURL`),
          userProvideAccessKeyId: E(u, o, `userProvideAccessKeyId`),
          userProvideSecretAccessKey: E(u, o, `userProvideSecretAccessKey`),
          userProvideSessionToken: E(u, o, `userProvideSessionToken`),
          userProvideBearerToken: E(u, o, `userProvideBearerToken`),
        }),
    ],
  });
}
function mn(e) {
  if (typeof e != `object` || !e || Array.isArray(e)) return null;
  let t = H(e, `model`),
    n = U(e, `promptTokens`),
    r = U(e, `completionTokens`);
  if (t == null && n == null && r == null) return null;
  let i = [n == null ? null : Y(n), r == null ? null : Y(r)].filter((e) => e != null);
  return {
    model: t ?? i.join(`, `),
    promptTokens: n == null ? `—` : Y(n),
    completionTokens: r == null ? `—` : Y(r),
  };
}
function hn({ json: e }) {
  let t = k(),
    { display: n, currency: r } = st(),
    i = U(e, `balance`),
    a = U(e, `tokenCost`),
    o = U(e, `promptTokens`),
    s = Array.isArray(e.generations) ? e.generations.map(mn).filter((e) => e != null) : [],
    c = t(`com_error_limit_reached`);
  return (
    a != null &&
      i != null &&
      (c =
        n === `percent`
          ? t(`com_error_token_balance_hidden`)
          : t(n === `currency` ? `com_error_token_balance_currency` : `com_error_token_balance`, {
              0: Qe(a, n, r),
              1: Qe(i, n, r),
            })),
    (0, P.jsxs)(q, {
      children: [
        (0, P.jsx)(`p`, { children: c }),
        o == null
          ? null
          : (0, P.jsx)(`p`, {
              className: `text-text-secondary`,
              children: t(`com_error_token_balance_prompt`, { 0: Y(o) }),
            }),
        s.length > 0
          ? (0, P.jsx)(J, {
              label: t(`com_error_token_balance_generations`),
              children: (0, P.jsx)(`ul`, {
                className: `list-none space-y-0.5`,
                children: s.map((e, n) =>
                  (0, P.jsx)(
                    `li`,
                    {
                      children: t(`com_error_token_balance_generation`, {
                        0: e.model,
                        1: e.promptTokens,
                        2: e.completionTokens,
                      }),
                    },
                    n,
                  ),
                ),
              }),
            })
          : null,
      ],
    })
  );
}
var gn = [
    `Message pruning removed all messages as none fit in the context window.`,
    `Please increase the context window size or make your message shorter.`,
  ],
  _n = {
    disabled: `com_error_compaction_disabled`,
    instructions_exceed_budget: `com_error_compaction_budget`,
    nothing_to_summarize: `com_error_compaction_nothing`,
  };
function vn(e) {
  if (e == null) return;
  let t = e.split(`/`).map((e) => e.trim());
  if (t.length !== 2 || t.some((e) => e === ``)) return;
  let n = t.map(Number);
  return n.every((e) => Number.isFinite(e) && Number.isInteger(e)) ? n : void 0;
}
function yn(e) {
  return e.replace(/\b\d+(?:\.\d+)?\b/g, (e) => {
    let t = Number(e);
    return Number.isFinite(t) ? Y(t) : e;
  });
}
function bn(e) {
  let t = e
    .split(`,`)
    .map((e) => e.trim())
    .filter((e) => e.length > 0);
  return t.length > 1 &&
    /^Token budget\s*:/i.test(t[0]) &&
    t.every((e) => /\b\d+(?:\.\d+)?\b/.test(e))
    ? (0, P.jsx)(`ul`, {
        className: `list-none space-y-0.5`,
        children: t.map((e, t) => (0, P.jsx)(`li`, { children: yn(e) }, `${t}-${e}`)),
      })
    : yn(e);
}
function xn(e, t, n) {
  if (e == null || e.trim() === ``) return !1;
  if (t == null || n == null) return !0;
  let r = vn(e);
  return r == null || r[0] !== t || r[1] !== n;
}
function Sn({ json: e, message: t }) {
  let n = k(),
    { compactionAvailable: r } = K(t),
    i = H(e, `type`),
    a = n(r ? `com_error_context_next_steps_compact` : `com_error_context_next_steps`);
  if (i === D.INPUT_LENGTH) {
    let t = H(e, `info`),
      r = vn(t),
      i =
        r == null
          ? n(`com_error_input_length_unknown`)
          : n(`com_error_input_length`, { 0: Y(r[0]), 1: Y(r[1]) });
    return (0, P.jsxs)(q, {
      children: [
        (0, P.jsx)(`p`, { children: i }),
        (0, P.jsx)(`p`, {
          className: `text-text-secondary`,
          children: n(`com_error_context_next_steps`),
        }),
        t != null &&
          r == null &&
          (0, P.jsx)(J, { label: n(`com_error_context_token_budget`), children: t }),
      ],
    });
  }
  if (i === D.FINAL_CONTEXT_OVERFLOW) {
    let t = U(e, `projectedMessageTokens`),
      r = U(e, `availableMessageTokens`),
      i = H(e, `info`),
      o =
        t != null && r != null
          ? n(`com_error_final_context_overflow`, { 0: Y(t), 1: Y(r) })
          : n(`com_error_final_context_overflow_unknown`);
    return (0, P.jsxs)(q, {
      children: [
        (0, P.jsx)(`p`, { children: o }),
        (0, P.jsx)(`p`, { className: `text-text-secondary`, children: a }),
        xn(i, t, r) && (0, P.jsx)(J, { label: n(`com_error_context_token_budget`), children: i }),
      ],
    });
  }
  if (i === D.EMPTY_MESSAGES) {
    let t = H(e, `info`),
      r = gn.reduce((e, t) => e.replace(t, ``), t ?? ``).trim();
    return (0, P.jsxs)(q, {
      children: [
        (0, P.jsx)(`p`, { children: n(`com_error_empty_messages`) }),
        (0, P.jsx)(`p`, { className: `text-text-secondary`, children: a }),
        r && (0, P.jsx)(J, { label: n(`com_error_context_token_budget`), children: bn(r) }),
      ],
    });
  }
  return i === D.COMPACTION_SKIPPED
    ? n(_n[H(e, `reason`) ?? ``] ?? `com_error_compaction_failed`)
    : n(`com_error_unknown`);
}
function Q({ json: e, message: t }) {
  let n = k(),
    { provider: r } = K(t),
    i = H(e, `code`) ?? H(e, `type`),
    a = H(e, `info`),
    o = a == null ? r : G(a);
  if (i === D.MISSING_MODEL)
    return o == null ? n(`com_error_models_not_loaded`) : n(`com_error_missing_model`, { 0: o });
  if (i === D.ENDPOINT_MODELS_NOT_LOADED)
    return o == null
      ? n(`com_error_models_not_loaded`)
      : n(`com_error_endpoint_models_not_loaded`, { 0: o });
  if (i === T.ILLEGAL_MODEL_REQUEST) {
    let [e, t] = a?.split(`|`) ?? [],
      i = e != null && e !== `` ? G(e) : r;
    return t == null || t === `` || i == null
      ? n(`com_error_model_not_found`)
      : n(`com_error_illegal_model_request`, { 0: t, 1: i });
  }
  if (i === D.CODE_WORKSPACE_UNAVAILABLE) {
    let t = H(e, `reason`);
    return ke(t) ? n(Ve[t]) : n(`com_error_code_workspace_unavailable`);
  }
  let s = U(e, `status`),
    c = s == null ? n(`com_error_upstream_model`) : n(`com_error_upstream_model_status`, { 0: s });
  return (0, P.jsx)(tn, {
    headline: c,
    detail: H(e, `message`),
    label: n(`com_error_details_provider`),
  });
}
function Cn(e) {
  if (e == null) return;
  let t = e instanceof Date ? e.getTime() : new Date(e).getTime();
  return Number.isNaN(t) ? void 0 : t;
}
function wn({ type: e, resetAt: t, retryAfterSeconds: n, createdAt: r, windowInMinutes: i }) {
  if (e !== T.MESSAGE_LIMIT) return;
  let a = Cn(r),
    o = n != null && a != null ? a + n * 1e3 : t;
  if (!(o == null || !Number.isFinite(o)) && !(i != null && o > (a ?? Date.now()) + i * 60 * 1e3))
    return o;
}
function Tn(e) {
  let [t, n] = (0, N.useState)(() => (e == null ? void 0 : Math.max(0, e - Date.now())));
  if (
    ((0, N.useEffect)(() => {
      if (e == null) {
        n(void 0);
        return;
      }
      let t = () => {
        let t = e - Date.now();
        return (n(Math.max(0, t)), t);
      };
      if (t() <= 0) return;
      let r = setInterval(() => {
        t() <= 0 && clearInterval(r);
      }, 1e3);
      return () => clearInterval(r);
    }, [e]),
    e != null)
  )
    return t ?? Math.max(0, e - Date.now());
}
function $({ json: e, message: t }) {
  let n = k(),
    r = H(e, `type`),
    i = t?.createdAt,
    a = U(e, `max`),
    o = U(e, `limit`),
    s = U(e, `windowInMinutes`),
    c = cn(s),
    l = wn({
      type: r,
      resetAt: U(e, `resetAt`),
      retryAfterSeconds: U(e, `retryAfterSeconds`),
      createdAt: i,
      windowInMinutes: s,
    }),
    u = Tn(l),
    d;
  switch (r) {
    case T.MESSAGE_LIMIT:
      d =
        c == null
          ? n(`com_error_limit_reached`)
          : a === 1
            ? n(`com_error_message_limit_one`, { 0: c })
            : a == null
              ? n(`com_error_limit_reached`)
              : n(`com_error_message_limit`, { 0: Y(a), 1: c });
      break;
    case T.CONCURRENT:
      d =
        o != null && o > 1 ? n(`com_error_concurrent`, { 0: Y(o) }) : n(`com_error_concurrent_one`);
      break;
    case T.FILE_UPLOAD_LIMIT:
      d =
        a != null && c != null
          ? n(`com_error_file_upload_limit`, { 0: Y(a), 1: c })
          : n(`com_error_limit_reached`);
      break;
    case T.TTS_LIMIT:
      d =
        a != null && c != null
          ? n(`com_error_tts_limit`, { 0: Y(a), 1: c })
          : n(`com_error_limit_reached`);
      break;
    case T.STT_LIMIT:
      d =
        a != null && c != null
          ? n(`com_error_stt_limit`, { 0: Y(a), 1: c })
          : n(`com_error_limit_reached`);
      break;
    default:
      d = n(`com_error_limit_reached`);
  }
  return (0, P.jsxs)(q, {
    children: [
      (0, P.jsx)(`p`, { children: d }),
      l != null &&
        u != null &&
        (0, P.jsx)(`p`, {
          className: `text-text-secondary`,
          children:
            u > 0
              ? (0, P.jsxs)(P.Fragment, {
                  children: [
                    (0, P.jsx)(`span`, {
                      'aria-hidden': `true`,
                      children: n(`com_error_retry_countdown`, { 0: sn(u) }),
                    }),
                    (0, P.jsx)(`span`, {
                      className: `sr-only`,
                      children: n(`com_error_retry_at`, { 0: on(l) }),
                    }),
                  ],
                })
              : n(`com_error_retry_available`),
        }),
    ],
  });
}
function En({ json: e, message: t }) {
  let n = k(),
    { agent: r, provider: i, endpointsConfig: a } = K(t),
    o = (0, N.useContext)(v)?.user,
    s = pe({ permissionType: xe.AGENTS, permission: be.USE }),
    c = pe({ permissionType: xe.AGENTS, permission: be.CREATE }),
    l = H(e, `info`),
    u = l == null ? i : G(l),
    d = a?.[Se.agents],
    f = d != null && d.disableBuilder !== !0 && s && c,
    p = r != null && f && (r.isEditable !== !1 || o?.role === Ye.ADMIN),
    m = r?.support_contact?.name?.trim() ?? ``,
    h = r?.support_contact?.email?.trim() ?? ``,
    g = r?.owner_contact?.name?.trim() ?? ``,
    _ = m !== `` || h !== `` ? m : g,
    y =
      !p && _ !== ``
        ? n(`com_error_invalid_agent_provider_owner`, { 0: _ })
        : n(
            p
              ? `com_error_invalid_agent_provider_editable`
              : `com_error_invalid_agent_provider_admin`,
          );
  return (0, P.jsxs)(q, {
    children: [
      u ? (0, P.jsx)(`div`, { children: n(`com_error_invalid_agent_provider`, { 0: u }) }) : null,
      (0, P.jsx)(`div`, { children: y }),
      h
        ? (0, P.jsx)(nn, {
            children: (0, P.jsx)(`a`, {
              href: `mailto:${h}`,
              className: `text-link hover:underline`,
              children: n(`com_error_agent_contact_email`, { 0: h }),
            }),
          })
        : null,
    ],
  });
}
var Dn = {
    [D.MODERATION]: `com_error_moderation`,
    [D.INVALID_ACTION]: `com_error_invalid_action_error`,
    [D.MODELS_NOT_LOADED]: `com_error_models_not_loaded`,
    [D.GOOGLE_TOOL_CONFLICT]: `com_error_google_tool_conflict`,
    [D.GOOGLE_VIDEO_UNPROCESSABLE]: `com_error_google_video_unprocessable`,
    [D.RESOURCE_RECOVERY_REQUIRED]: `com_error_resource_recovery_required`,
    [D.STATEFUL_CODE_ENVIRONMENT_NOT_ALLOWED]: `com_error_stateful_code_environment_not_allowed`,
    [D.STREAM_EXPIRED]: `com_error_stream_expired`,
    [D.MODEL_NOT_FOUND]: `com_error_model_not_found`,
    [D.MODEL_RATE_LIMIT]: `com_error_model_rate_limit`,
    [D.MODEL_STREAM_CLOSED]: `com_error_model_stream_closed`,
    [D.MODEL_STREAM_STALLED]: `com_error_model_stream_stalled`,
    [D.COMPACTION_FAILED]: `com_error_compaction_failed`,
    [D.AUTH_FAILED]: `com_error_auth_failed`,
    [D.AUTH_RATE_LIMITED]: `com_error_auth_rate_limited`,
    [D.AUTH_BANNED]: `com_error_auth_banned`,
    [D.AUTH_CROSS_ORIGIN]: `com_auth_error_login_cross_origin`,
    [T.BAN]: `com_error_ban`,
    [T.CONVO_ACCESS]: `com_error_convo_access`,
    [T.TOOL_CALL_LIMIT]: `com_error_tool_call_limit`,
    [T.SHARE_LIMIT]: `com_error_share_limit`,
    [T.LOGINS]: `com_error_logins`,
    [T.REGISTRATIONS]: `com_error_registrations`,
    [T.RESET_PASSWORD_LIMIT]: `com_error_reset_password_limit`,
    [T.VERIFY_EMAIL_LIMIT]: `com_error_verify_email_limit`,
    [T.NON_BROWSER]: `com_error_non_browser`,
    [T.GENERAL]: `com_error_request_blocked`,
  },
  On = {
    [D.NO_USER_KEY]: Z,
    [D.EXPIRED_USER_KEY]: Z,
    [D.INVALID_USER_KEY]: Z,
    [D.NO_BASE_URL]: Z,
    [D.INVALID_BASE_URL]: Z,
    [V.INVALID_API_KEY]: Z,
    [V.INSUFFICIENT_QUOTA]: Z,
    [D.INVALID_AGENT_PROVIDER]: En,
    [D.MISSING_MODEL]: Q,
    [D.ENDPOINT_MODELS_NOT_LOADED]: Q,
    [D.UPSTREAM_MODEL_ERROR]: Q,
    [D.CODE_WORKSPACE_UNAVAILABLE]: Q,
    [T.ILLEGAL_MODEL_REQUEST]: Q,
    [D.REFUSAL]: X,
    [D.GOOGLE_ERROR]: X,
    [D.INVALID_REQUEST]: X,
    [D.NO_SYSTEM_MESSAGES]: X,
    [D.INPUT_LENGTH]: Sn,
    [D.EMPTY_MESSAGES]: Sn,
    [D.FINAL_CONTEXT_OVERFLOW]: Sn,
    [D.COMPACTION_SKIPPED]: Sn,
    [T.TOKEN_BALANCE]: hn,
    [T.MESSAGE_LIMIT]: $,
    [T.CONCURRENT]: $,
    [T.FILE_UPLOAD_LIMIT]: $,
    [T.TTS_LIMIT]: $,
    [T.STT_LIMIT]: $,
  },
  kn = (0, N.createContext)(void 0);
function An(e) {
  let t = { handoffs: [], owners: {} };
  for (let n = 0; n < (e?.length ?? 0); n++) {
    let r = e?.[n];
    if (r?.type === j.ERROR && r.agentId) {
      t.owners[n] = r.agentId;
      continue;
    }
    if (r?.type !== j.AGENT_UPDATE) continue;
    let i = r[j.AGENT_UPDATE]?.agentId;
    i && t.handoffs.push({ index: n, agentId: i });
  }
  return t;
}
function jn({ handoffs: e, owners: t }, n) {
  let r = t[n];
  if (r != null) return r;
  let i;
  for (let t of e) {
    if (t.index >= n) break;
    i = t.agentId;
  }
  return i;
}
function Mn({ message: e, children: t }) {
  let { endpoint: n, model: r, createdAt: i, content: a } = e,
    o = (0, N.useMemo)(() => JSON.stringify(An(a)), [a]),
    s = (0, N.useMemo)(
      () => ({ source: { endpoint: n, model: r, createdAt: i }, positions: JSON.parse(o) }),
      [n, r, i, o],
    );
  return (0, P.jsx)(kn.Provider, { value: s, children: t });
}
function Nn() {
  let e = (0, N.useContext)(kn),
    { partIndex: t } = Fe();
  return (0, N.useMemo)(() => {
    if (e == null) return;
    let n = t == null ? void 0 : jn(e.positions, t);
    return n == null ? e.source : { ...e.source, partAgentId: n };
  }, [e, t]);
}
var Pn = {
  MODEL_NOT_FOUND: `com_error_model_not_found`,
  MODEL_RATE_LIMIT: `com_error_model_rate_limit`,
};
function Fn(e) {
  let t = ve(e);
  return t == null ? void 0 : Pn[t];
}
var In = ({ text: e, message: t }) => {
  let n = k(),
    r = Nn(),
    i = t ?? r,
    a = Fn(e);
  if (a != null) return n(a);
  let o = ot(e);
  if (!rt(o)) return (0, P.jsx)(fn, { text: e, message: i });
  let s = JSON.parse(o),
    c = W(s, `error`),
    l = H(s, `code`) ?? H(s, `type`),
    u = l == null ? (H(c, `code`) ?? H(c, `type`)) : void 0,
    d = u != null && c != null ? c : s,
    f = l ?? u;
  if (f != null) {
    let t = On[f];
    if (t != null) return (0, P.jsx)(t, { json: d, text: e, message: i });
    let r = Dn[f];
    if (r != null) return n(r);
  }
  return (0, P.jsx)(fn, { json: s, text: e, message: i });
};
function Ln({ message: e }) {
  let t = k(),
    n = (0, N.useId)(),
    [r, a] = (0, N.useState)(!1),
    [o, c] = (0, N.useState)(e.messageId);
  o !== e.messageId && (c(e.messageId), a(!1));
  let u = (0, N.useContext)(Re);
  if (r && o === e.messageId) return null;
  let d = u?.ask != null && u.isSubmitting !== !0 && u.latestMessageId === e.messageId,
    f = (e) =>
      u?.ask(
        { text: e },
        {
          overrideFiles: [],
          overrideManualSkills: [],
          overrideQuotes: [],
          overrideReasoning: null,
        },
      );
  return (0, P.jsxs)(`div`, {
    role: `group`,
    'aria-labelledby': n,
    className: `border-border-light bg-surface-secondary relative my-2 flex w-full flex-col rounded-xl border p-3`,
    children: [
      (0, P.jsx)(We, {
        description: t(`com_ui_tool_call_limit_dismiss`),
        side: `left`,
        render: (0, P.jsx)(O, {
          type: `button`,
          variant: `ghost`,
          size: `icon-xs`,
          'aria-label': t(`com_ui_tool_call_limit_dismiss`),
          className: `text-text-secondary absolute top-1.5 right-1.5 focus-visible:ring-offset-0 focus-visible:ring-inset`,
          onClick: () => a(!0),
          children: (0, P.jsx)(s, { className: `h-4 w-4`, 'aria-hidden': `true` }),
        }),
      }),
      (0, P.jsxs)(`p`, {
        id: n,
        className: `text-text-primary flex min-w-0 items-center gap-2 pr-8 text-sm font-medium`,
        children: [
          (0, P.jsx)(i, {
            className: `text-text-secondary h-4 w-4 shrink-0`,
            'aria-hidden': `true`,
          }),
          t(`com_ui_tool_call_limit_title`),
        ],
      }),
      (0, P.jsx)(`p`, {
        className: `text-text-secondary mt-1 mb-3 text-sm`,
        children: t(`com_ui_tool_call_limit_body`),
      }),
      d &&
        (0, P.jsxs)(`div`, {
          className: `flex flex-wrap items-center gap-2`,
          children: [
            (0, P.jsxs)(O, {
              size: `sm`,
              variant: `submit`,
              onClick: () => f(t(`com_ui_tool_call_limit_continue_prompt`)),
              children: [
                (0, P.jsx)(l, { className: `icon-md shrink-0`, 'aria-hidden': `true` }),
                t(`com_ui_tool_call_limit_continue`),
              ],
            }),
            (0, P.jsxs)(O, {
              size: `sm`,
              variant: `outline`,
              onClick: () => f(t(`com_ui_tool_call_limit_answer_prompt`)),
              children: [
                (0, P.jsx)(p, { className: `icon-md shrink-0`, 'aria-hidden': `true` }),
                t(`com_ui_tool_call_limit_answer`),
              ],
            }),
          ],
        }),
    ],
  });
}
var Rn = ({
    text: e,
    message: t,
    isSubmitting: n,
    ask: r,
    enterEdit: i,
    siblingIdx: a,
    setSiblingIdx: o,
  }) => {
    let s = (0, N.useRef)(null),
      c = (0, N.useRef)(null),
      [l, u] = (0, N.useState)(!1),
      { conversation: d } = Ke(),
      { getMessages: p, setMessages: m } = Te(),
      h = (0, N.useRef)(null),
      { conversationId: g, parentMessageId: _, messageId: v } = t,
      b = t.isCreatedByUser === !0,
      x = b || It(p(), _) != null,
      S = _e(g ?? ``),
      C = k(),
      ee = f(ie.chatDirection).toLowerCase() === `rtl`,
      te = Je(),
      {
        register: ne,
        handleSubmit: re,
        setValue: ae,
        formState: { isDirty: w, isValid: oe },
      } = ct({ mode: `onChange`, defaultValues: { text: e ?? `` } });
    (0, N.useEffect)(() => {
      let e = h.current;
      if (e) {
        let t = e.value.length;
        (e.focus(), e.setSelectionRange(t, t));
      }
    }, []);
    let se = (e) => {
        r(
          { text: e.text, parentMessageId: _, conversationId: g },
          {
            overrideFiles: t.files,
            overrideManualSkills: t.manualSkills,
            overrideQuotes: t.quotes,
            overrideReasoning: t.reasoningOverride ?? null,
            addedConvo: te() || void 0,
          },
        ) !== !1 && (o((a ?? 0) - 1), i(!0));
      },
      ce = () => {
        let e = It(p(), _);
        e &&
          r(
            { ...e },
            {
              isRegenerate: !0,
              targetResponseMessageId: v,
              overrideManualSkills: e.manualSkills,
              overrideQuotes: e.quotes,
              overrideReasoning: e.reasoningOverride ?? null,
              addedConvo: te() || void 0,
            },
          ) !== !1 &&
          i(!0);
      },
      le = async (e) => {
        u(!1);
        try {
          await S.mutateAsync({
            conversationId: g ?? ``,
            model: d?.model ?? `gpt-3.5-turbo`,
            text: e.text,
            messageId: v,
          });
          let n = p();
          if (!n) {
            i(!0);
            return;
          }
          (n.some((e) => e.messageId === v)
            ? m(
                n.map((t) =>
                  t.messageId === v ? { ...t, text: e.text, privacyRevision: void 0 } : t,
                ),
              )
            : ((t.text = e.text), (t.privacyRevision = void 0)),
            i(!0));
        } catch {
          u(!0);
        }
      },
      T = (0, N.useCallback)(
        (e) => {
          (e.key === `Enter` &&
            (e.ctrlKey || e.metaKey) &&
            (e.preventDefault(), c.current?.click()),
            e.key === `s` && (e.ctrlKey || e.metaKey) && (e.preventDefault(), s.current?.click()),
            e.key === `Escape` && (e.preventDefault(), i(!0)));
        },
        [i],
      ),
      { ref: ue, ...de } = ne(`text`, {
        required: (t.files?.length ?? 0) === 0,
        onChange: (e) => {
          ae(`text`, e.target.value, { shouldDirty: !0, shouldValidate: !0 });
        },
      }),
      fe = () =>
        w
          ? C(b || !x ? `com_ui_unsaved_changes` : `com_ui_rerun_discards_changes`)
          : x
            ? ``
            : C(`com_ui_rerun_needs_user_turn`);
    return (0, P.jsx)(F, {
      message: t,
      children: (0, P.jsxs)(`section`, {
        'aria-label': C(`com_ui_edit_message`),
        className: `mt-2 flex w-full flex-col gap-2`,
        children: [
          l && (0, P.jsx)(Ge, { variant: `error`, children: C(`com_ui_save_message_error`) }),
          (0, P.jsx)(qe, {
            focusOutline: `hidden`,
            ...de,
            ref: (e) => {
              (ue(e), (h.current = e));
            },
            onKeyDown: T,
            'data-testid': `message-text-editor`,
            className: y(
              `message-editor-text max-h-[65vh] min-h-24 w-full resize-y whitespace-pre-wrap`,
              `border-border-medium bg-surface-tertiary-alt rounded-lg border break-words`,
              `text-text-primary px-3 py-2`,
              ee ? `text-right` : `text-left`,
              `disabled:opacity-50 md:max-h-[75vh]`,
            ),
            'aria-label': C(`com_ui_message_input`),
            'aria-keyshortcuts': x
              ? `Control+Enter Meta+Enter Control+S Meta+S Escape`
              : `Control+S Meta+S Escape`,
            disabled: n || S.isLoading,
            dir: ee ? `rtl` : `ltr`,
          }),
          (0, P.jsxs)(`footer`, {
            className: `flex flex-wrap items-center justify-between gap-2`,
            children: [
              (0, P.jsx)(`span`, {
                className: `text-text-secondary line-clamp-2 min-w-0 flex-1 text-xs`,
                'aria-live': `polite`,
                children: fe(),
              }),
              (0, P.jsxs)(`div`, {
                className: `flex flex-wrap items-center justify-end gap-2`,
                children: [
                  (0, P.jsx)(O, {
                    size: `sm`,
                    variant: `outline`,
                    onClick: () => i(!0),
                    disabled: S.isLoading,
                    children: C(`com_ui_cancel`),
                  }),
                  (0, P.jsx)(O, {
                    ref: s,
                    size: `sm`,
                    variant: `outline`,
                    disabled: n || S.isLoading || !w || !oe,
                    onClick: re(le),
                    children: S.isLoading ? C(`com_ui_saving`) : C(`com_ui_save`),
                  }),
                  x &&
                    (0, P.jsx)(O, {
                      ref: c,
                      size: `sm`,
                      variant: `submit`,
                      disabled: n || S.isLoading || (b && w && !oe),
                      onClick: b ? re(se) : ce,
                      children: C(w && b ? `com_ui_update_rerun` : `com_ui_rerun`),
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  zn = t({
    DisplayMessage: () => qn,
    ErrorMessage: () => Kn,
    UnfinishedMessage: () => Jn,
    default: () => Yn,
  }),
  Bn = `Error connecting to server, try refreshing the page.`,
  Vn = 5500,
  Hn = 250,
  Un = () =>
    (0, P.jsx)(`div`, {
      className: `mb-[0.625rem]`,
      children: (0, P.jsx)(me, { underHeaderIcon: !0 }),
    }),
  Wn = ({ children: e, className: t = `` }) =>
    (0, P.jsx)(`div`, {
      role: `alert`,
      'aria-live': `assertive`,
      className: y(
        `border-status-error-border bg-status-error-subtle text-text-secondary rounded-xl border p-3 text-sm`,
        t,
      ),
      children: e,
    }),
  Gn = ({ message: e }) => {
    let t = k();
    return (0, P.jsx)(N.Suspense, {
      fallback: (0, P.jsx)(Un, {}),
      children: (0, P.jsx)(ge, {
        delay: Vn,
        children: (0, P.jsx)(F, {
          message: e,
          children: (0, P.jsx)(Ge, {
            variant: `error`,
            icon: !1,
            elevation: `raised`,
            className: `text-text-secondary mt-2 transition-all`,
            children: t(`com_ui_error_connection`),
          }),
        }),
      }),
    });
  },
  Kn = ({ text: e, message: t, className: n = `` }) =>
    e === Bn
      ? (0, P.jsx)(Gn, { message: t })
      : (0, P.jsx)(F, {
          message: t,
          children: (0, P.jsx)(Wn, {
            className: n,
            children: (0, P.jsx)(In, { text: e, message: t }),
          }),
        }),
  qn = ({ text: e, isCreatedByUser: t, message: n, showCursor: r }) => {
    let { isSubmitting: i = !1, isLatestMessage: a = !1 } = Fe(),
      o = f(ie.enableUserMsgMarkdown),
      s = f(ie.collapseLongUserMessages),
      c = Oe(),
      l = (0, N.useMemo)(() => r === !0 && i && !(c && !t), [r, i, c, t]),
      u = (0, N.useMemo)(
        () =>
          t
            ? o
              ? (0, P.jsx)(Xe, { content: e })
              : (0, P.jsx)(P.Fragment, { children: e })
            : (0, P.jsx)(w, { content: e, isLatestMessage: a }),
        [t, o, e, a],
      );
    return (0, P.jsx)(F, {
      message: n,
      children: (0, P.jsx)(te, {
        enabled: t && s,
        children: (0, P.jsx)(`div`, {
          className: y(
            `markdown prose message-content dark:prose-invert light w-full break-words`,
            i && `submitting`,
            l && e.length > 0 && `result-streaming`,
            t && !o && `whitespace-pre-wrap`,
            `text-text-primary`,
          ),
          children: u,
        }),
      }),
    });
  },
  Jn = ({ message: e }) => {
    let t = k();
    return e.finish_reason === M.TOOL_CALL_LIMIT_FINISH_REASON
      ? (0, P.jsx)(F, { message: e, children: (0, P.jsx)(Ln, { message: e }) })
      : (0, P.jsx)(F, {
          message: e,
          children: (0, P.jsx)(Wn, { children: t(`com_ui_response_incomplete`) }),
        });
  },
  Yn = (0, N.memo)(
    ({ text: e, edit: t, error: n, unfinished: r, isSubmitting: i, isLast: a, ...o }) => {
      let { message: s } = o,
        { messageId: c } = s,
        { thinkingContent: l, regularContent: u } = (0, N.useMemo)(() => C(e), [e]),
        d = (0, N.useMemo)(() => a && i, [a, i]),
        f = (0, N.useMemo)(
          () =>
            !i && r
              ? (0, P.jsx)(N.Suspense, {
                  children: (0, P.jsx)(ge, { delay: Hn, children: (0, P.jsx)(Jn, { message: s }) }),
                })
              : null,
          [i, r, s],
        );
      return n
        ? (0, P.jsx)(Kn, { message: s, text: e })
        : t
          ? (0, P.jsx)(Rn, { text: e, isSubmitting: i, ...o })
          : (0, P.jsxs)(P.Fragment, {
              children: [
                l.length > 0 && (0, P.jsx)(ye, { children: l }, `thinking-${c}`),
                (0, P.jsx)(qn, { showCursor: d, text: u, ...o }, `display-${c}`),
                f,
              ],
            });
    },
  );
Yn.displayName = `MessageContent`;
export {
  Tt as _,
  Ln as a,
  Yt as c,
  At as d,
  jt as f,
  ft as g,
  mt as h,
  Jn as i,
  It as l,
  Dt as m,
  Yn as n,
  Mn as o,
  Ft as p,
  zn as r,
  Jt as s,
  Kn as t,
  Mt as u,
  F as v,
};
