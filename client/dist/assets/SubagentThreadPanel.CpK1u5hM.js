import { o as e } from './rolldown-runtime.C0FnF6B9.js';
import { at as t, rt as n } from './advanced-inputs.BJDnsHUg.js';
import {
  Dt as r,
  Et as i,
  Ft as a,
  Hi as o,
  Nt as s,
  P as c,
  T as l,
  Tt as u,
  Zn as ee,
  wt as d,
} from './vendor.DpBpdTS1.js';
import { r as f } from './query-devtools.C2qG3_c-.js';
import {
  $c as p,
  Ah as m,
  Bb as h,
  Bv as te,
  Er as ne,
  Fr as re,
  Gr as ie,
  Hr as ae,
  Ir as oe,
  Js as se,
  Kr as ce,
  Ld as le,
  Lr as g,
  Mb as _,
  Nr as ue,
  Pr as de,
  Qs as fe,
  Rr as pe,
  Wr as me,
  Wv as he,
  Zc as ge,
  ai as _e,
  cd as ve,
  cg as v,
  ci as y,
  di as ye,
  eb as be,
  eh as xe,
  ei as Se,
  ey as Ce,
  fb as we,
  gg as Te,
  ii as Ee,
  iu as De,
  kl as Oe,
  kr as ke,
  ld as Ae,
  li as je,
  ni as Me,
  oi as Ne,
  qh as Pe,
  qr as Fe,
  ri as Ie,
  sd as Le,
  si as Re,
  ti as ze,
  tr as Be,
  u as Ve,
  ud as He,
  ui as Ue,
  vg as We,
  wr as Ge,
  ys as Ke,
  zr as qe,
} from './hooks.CliY9jTn.js';
import { a as Je } from './shared-libs.CKPm2yyl.js';
import { T as Ye, f as Xe, n as Ze, p as Qe, r as $e, w as et } from './Footer.BsQyCRgp.js';
var b = e(t(), 1),
  tt = 500,
  x = 5e3,
  S = (e) => {
    if (typeof e != `object` || !e) return !1;
    let t = e;
    return (
      typeof t.subagentRunId == `string` &&
      typeof t.subagentType == `string` &&
      (t.activityEventId == null || typeof t.activityEventId == `string`) &&
      (t.activitySequence == null ||
        (Number.isSafeInteger(t.activitySequence) && t.activitySequence >= 0)) &&
      (t.parentToolCallId == null || typeof t.parentToolCallId == `string`) &&
      typeof t.phase == `string`
    );
  };
function nt(e, t = !0) {
  let { token: n, isAuthenticated: r } = Be(),
    a = f(),
    o = Ue(e.parentMessageId, e.event?.progressKey ?? e.toolCallId, e.partIndex),
    s = u((0, b.useMemo)(() => c(je(o), (e) => e?.activityReplayFrom), [o])),
    ee = (0, b.useRef)(),
    d = i(je(o)),
    p = u(y(o)),
    m = i(y(o)),
    h = (0, b.useRef)(p),
    te = e.durable,
    ne = te?.threadId,
    re = te?.taskId;
  ((0, b.useEffect)(() => {
    ((h.current = p), p || d(Me));
  }, [p, d]),
    (0, b.useEffect)(() => {
      s != null && !p && ee.current?.();
    }, [s, p]),
    (0, b.useEffect)(() => {
      e.isSubmitting && (_e(o), (h.current = !0), m(!0));
    }, [o, e.isSubmitting, m]),
    (0, b.useEffect)(() => {
      if (e.host !== `conversation` || ne == null || re == null || !t || !r || n == null) return;
      let i = [we.subagentThread, e.parentConversationId, ne, re],
        s = `${_()}/api/convos/${encodeURIComponent(e.parentConversationId)}/subagents/${encodeURIComponent(ne)}/tasks/${encodeURIComponent(re)}/activity`,
        c,
        u,
        f = 0,
        p = !1,
        m = !1,
        te = () => {
          let e = c;
          ((c = void 0), e?.close());
        },
        ie = () => {
          if (((u = void 0), p || m)) return;
          let t = new l(s, { method: `GET`, headers: { Authorization: `Bearer ${n}` } });
          ((c = t),
            t.addEventListener(`message`, (n) => {
              if (c !== t || p) return;
              let r;
              try {
                r = JSON.parse(n.data);
              } catch {
                return;
              }
              if (r.final === !0 && r.subagentActivity === !0) {
                ((m = !0), te(), a.invalidateQueries(i));
                return;
              }
              if (r.event === `subagent_activity_replay` && Array.isArray(r.data)) {
                let e = r.data.flatMap((e) =>
                  e.event === Ce.ON_SUBAGENT_UPDATE && S(e.data)
                    ? [
                        {
                          ...e.data,
                          activityDroppedCount:
                            Number.isSafeInteger(e.droppedCount) && e.droppedCount > 0
                              ? e.droppedCount
                              : void 0,
                        },
                      ]
                    : [],
                );
                (_e(o), d((t) => Ee(t, e, h.current)), (f = 0));
                return;
              }
              let s = r.data;
              r.event !== Ce.ON_SUBAGENT_UPDATE ||
                !S(s) ||
                ((e.event != null ||
                  s.parentToolCallId == null ||
                  s.parentToolCallId === e.toolCallId) &&
                  ((f = 0),
                  _e(o),
                  d((e) =>
                    Ie(
                      e,
                      [
                        {
                          ...s,
                          activityDroppedCount:
                            Number.isSafeInteger(r.droppedCount) && r.droppedCount > 0
                              ? r.droppedCount
                              : void 0,
                        },
                      ],
                      `detached`,
                      h.current || e?.activityReplayFrom != null,
                    ),
                  )));
            }),
            t.addEventListener(`error`, () => {
              c === t && ae();
            }));
        },
        ae = () => {
          if (p || m || u != null) return;
          te();
          let e = Math.min(tt * 2 ** f, x);
          ((f += 1), (u = setTimeout(ie, e)));
        };
      return (
        (ee.current = ae),
        ie(),
        () => {
          (ee.current === ae && (ee.current = void 0),
            (p = !0),
            u != null && clearTimeout(u),
            te());
        }
      );
    }, [
      t,
      r,
      o,
      a,
      e.host,
      e.event,
      e.parentConversationId,
      e.parentMessageId,
      e.partIndex,
      e.toolCallId,
      d,
      re,
      ne,
      n,
    ]));
}
var C = n(),
  rt = 3,
  it = new Set([`task_not_running`, `task_completed`, `task_cancelled`, `task_failed`]),
  w = (e) => e != null && it.has(e),
  at = (e) => w(e.reason) || (e.action === `cancel` && e.status === `applied`),
  ot = (e) =>
    typeof e == `object` &&
    e &&
    `response` in e &&
    typeof e.response == `object` &&
    e.response != null &&
    `status` in e.response &&
    typeof e.response.status == `number`
      ? e.response.status
      : void 0,
  st = (e, t) => (e ? `task_inaccessible` : t ? `owner_unavailable` : `invalid_command`),
  ct = { submit: `steer`, other: `queue`, interrupt: `interrupt`, preempt: `interrupt` },
  lt = (e) =>
    e === `task_inaccessible`
      ? `com_ui_subagent_control_reason_task_inaccessible`
      : e === `owner_unavailable`
        ? `com_ui_subagent_control_reason_owner_unavailable`
        : `com_ui_subagent_control_reason_invalid_command`;
function ut({ selection: e }) {
  let t = Ze(),
    n = Oe(),
    c = r(),
    { showToast: l } = he(),
    { navigateToConvo: u } = ge(),
    f = (0, b.useRef)(null),
    _ = Ke(868),
    _e = te(`(hover: none)`),
    {
      enterToSend: y,
      handOffComposerText: Ce,
      composerBindings: { shortcutsEnabled: we, submitOverride: Ee, yieldedChords: je },
    } = ne(),
    [Me, Ie] = (0, b.useState)(!1),
    [Be, tt] = (0, b.useState)(!1),
    [x, S] = (0, b.useState)(``),
    it = Be || x.trim() !== ``,
    w = i(ze),
    ut = (0, b.useCallback)(() => w(null), [w]),
    T = p(),
    { byMessageId: ft, byThreadId: E, refresh: pt } = Se(),
    D = ye(Ue(e.parentMessageId, e.event?.progressKey ?? e.toolCallId, e.partIndex)),
    mt = Fe(
      e.parentConversationId,
      e.parentMessageId,
      n(`com_ui_subagent_parent_agent`),
      e.toolCallId,
      e.partIndex,
      e.durable?.threadId,
    ),
    O = e.durable?.threadId ?? ``,
    k = e.durable?.taskId ?? ``,
    A = Re(e.parentConversationId, O, k),
    [ht, gt] = d(Ne(A)),
    _t = (0, b.useCallback)((e, t) => c.set(Ne(e), t), [c]),
    j = ht?.receipt ?? null,
    M = ht?.retry ?? null,
    N = e.event == null ? void 0 : E.get(O),
    P = N?.tasks.length ?? 0,
    [vt, yt] = (0, b.useState)(() => ({ threadId: O, count: rt, taskCount: N == null ? null : P }));
  (0, b.useEffect)(() => {
    yt((e) => {
      if (e.threadId !== O || e.taskCount == null) return { threadId: O, count: rt, taskCount: P };
      let t = Math.max(0, P - e.taskCount);
      return { threadId: O, count: Math.min(P, e.count + t), taskCount: P };
    });
  }, [P, O]);
  let bt = Math.min(P, vt.threadId === O ? vt.count : rt),
    xt = (0, b.useMemo)(() => (N?.tasks ?? []).slice(0, bt).reverse(), [N?.tasks, bt]),
    St = bt < P,
    Ct = N?.tasks.find((e) => e.taskId === k)?.status === `running`,
    wt = (0, b.useMemo)(() => {
      if (e.event == null) return [];
      let t = new Set();
      return (e.event.siblingParentMessageIds ?? [e.parentMessageId])
        .flatMap((e) => ft.get(e) ?? [])
        .filter((e) => !t.has(e.threadId) && (t.add(e.threadId), !0));
    }, [ft, e.event, e.parentMessageId]),
    Tt = wt.find((e) => e.threadId === O),
    {
      data: Et,
      isLoading: Dt,
      isError: Ot,
      isPreviousData: kt,
      isReadinessPending: At,
      refetch: jt,
    } = He(e.parentConversationId, O, k, {
      keepPreviousData: !0,
      ...(Ct ? { refetchInterval: Le } : {}),
    }),
    F = Et?.threadId === O ? Et : void 0,
    I =
      F?.subagentKind ??
      D?.subagentKind ??
      e.subagentIdentity?.subagentKind ??
      E.get(O)?.subagentKind,
    Mt = ae(e.subagentType, I),
    Nt = I === `graph` ? void 0 : (ue(D, e.subagentIdentity) ?? E.get(O)?.agentId),
    Pt =
      (Nt == null ? void 0 : T?.[Nt])?.name ||
      (Mt ? mt.name : me(e.subagentType, Nt, I)) ||
      n(`com_ui_subagent_actor`),
    Ft =
      (Tt?.agentId == null ? void 0 : T?.[Tt.agentId]?.name) ??
      Tt?.actorId ??
      N?.actorId ??
      e.event?.actorId ??
      Pt,
    L = kt ? void 0 : F,
    R = JSON.stringify([F?.nextCursor ?? null, ...(F?.turns?.map((e) => e.taskId) ?? [])]),
    It = (0, b.useRef)(R);
  It.current = R;
  let z =
      ve(L, k) &&
      (L?.status === `completed` ||
        L?.status === `failed` ||
        L?.status === `interrupted` ||
        L?.status === `cancelled`),
    Lt = (0, b.useRef)(!1);
  (nt(e, !z || Ct),
    (0, b.useEffect)(() => {
      e.event != null && pt();
    }, [pt, e.event, O]),
    (0, b.useEffect)(() => {
      Lt.current = !1;
    }, [k, O]),
    (0, b.useEffect)(() => {
      e.event != null && (z && !Lt.current && pt(), (Lt.current = z));
    }, [z, pt, e.event]),
    (0, b.useEffect)(() => {
      e.event == null || !Ct || !z || jt();
    }, [z, Ct, jt, e.event]),
    (0, b.useEffect)(() => {
      if (
        e.event == null ||
        e.event.pinnedTask === !0 ||
        it ||
        N?.latestTaskId == null ||
        N.latestTaskId === k
      )
        return;
      let t = et(e.parentConversationId, N, e.event.siblingParentMessageIds);
      t != null && w(t);
    }, [N, e, it, w, k]));
  let Rt = e.durable != null && D != null && D.status !== `stop` && D.status !== `error`,
    zt = (0, b.useRef)(x);
  zt.current = x;
  let Bt = (0, b.useRef)(null),
    Vt = De({
      onSuccess: (e) => {
        let t = e.conversation?.conversationId,
          n = Bt.current;
        ((Bt.current = null), tt(!1));
        let r = n?.identity === bn.current,
          i = r ? zt.current.trim() : (n?.text ?? ``);
        (t != null && i !== `` && Ce(t, i), r && S(``), ut(), u(e.conversation));
      },
      onError: () => {
        ((Bt.current = null),
          tt(!1),
          l({ message: n(`com_ui_continue_chat_error`), status: `error` }));
      },
    }),
    [Ht, Ut] = (0, b.useState)(() => new Map()),
    [Wt, Gt] = (0, b.useState)(() => new Map()),
    [Kt, qt] = (0, b.useState)([]),
    [Jt, Yt] = (0, b.useState)([]),
    [Xt, Zt] = (0, b.useState)([]),
    [Qt, $t] = (0, b.useState)([]),
    B = (0, b.useRef)(Qt),
    [V, en] = (0, b.useState)(!1),
    tn = (0, b.useRef)(V),
    [H, nn] = (0, b.useState)(void 0),
    [rn, an] = (0, b.useState)(),
    [U, on] = (0, b.useState)(`idle`),
    [sn, cn] = (0, b.useState)(!1),
    ln = (0, b.useRef)(O),
    un = (0, b.useRef)(O),
    W = (0, b.useRef)(0),
    dn = (0, b.useRef)(0),
    fn = (0, b.useRef)(new Set()),
    pn = (0, b.useRef)(null),
    mn = (0, b.useRef)(!1);
  (un.current !== O && ((un.current = O), (W.current += 1)), (ln.current = O));
  let [hn, gn] = (0, b.useState)(!1),
    [_n, vn] = (0, b.useState)(!1),
    yn = (0, b.useRef)(!1),
    bn = (0, b.useRef)(A);
  ((0, b.useEffect)(
    () => (
      (bn.current = A),
      S(``),
      gn(!1),
      vn(!1),
      (yn.current = !1),
      () => {
        bn.current = ``;
      }
    ),
    [A],
  ),
    (0, b.useEffect)(() => {
      (Ut(new Map()),
        Gt(new Map()),
        qt([]),
        Yt([]),
        Zt([]),
        $t([]),
        (dn.current = W.current),
        (B.current = []),
        en(!1),
        (tn.current = !1),
        nn(void 0),
        an(void 0),
        on(`idle`),
        cn(!1),
        fn.current.clear(),
        (pn.current = null),
        (mn.current = !1));
    }, [O]),
    (0, b.useEffect)(() => {
      F != null &&
        (F.historyUnavailable === !0 || (F.historyTruncated === !0 && F.nextCursor == null)) &&
        cn(!0);
    }, [F]));
  let xn = (0, b.useCallback)(
      async (t) => {
        let n = O,
          r = W.current,
          i = `${r}\u0000${n}\u0000${t}`;
        if (!(Wt.get(t) === `loading` || fn.current.has(i))) {
          (fn.current.add(i), Gt((e) => new Map(e).set(t, `loading`)));
          try {
            let i = await h.getSubagentThread(e.parentConversationId, n, t);
            if (ln.current !== n || W.current !== r) return;
            if (!ve(i, t)) {
              Gt((e) => new Map(e).set(t, `unavailable`));
              return;
            }
            let a = de(i, t);
            (Ut((e) => new Map(e).set(t, a)),
              Gt((e) => new Map(e).set(t, a.activityTruncated === !0 ? `unavailable` : `idle`)));
          } catch {
            if (ln.current !== n || W.current !== r) return;
            Gt((e) => new Map(e).set(t, `error`));
          } finally {
            fn.current.delete(i);
          }
        }
      },
      [e.parentConversationId, O, Wt],
    ),
    Sn = (0, b.useCallback)(async () => {
      let t = O,
        n = W.current,
        r = V ? (rn ?? R) : R,
        i = !V && H !== void 0 && rn !== r,
        a = i || V,
        o = H === void 0 || i ? F?.nextCursor : H,
        s = `${n}\u0000${t}\u0000${o ?? ``}\u0000${r}`;
      if (o != null && U !== `loading` && pn.current == null) {
        ((pn.current = s), on(`loading`));
        try {
          let s = await h.getSubagentThread(e.parentConversationId, t, void 0, o);
          if (ln.current !== t || W.current !== n) return;
          if (!V && It.current !== r) {
            on(`idle`);
            return;
          }
          let c = re(s),
            l = !1;
          if (a) {
            let e = i ? pe(Jt, Xt) : Jt,
              t = g(c, i ? [] : Xt),
              n = new Set(g(Kt, e, B.current).map((e) => e.taskId));
            if (c.some((e) => n.has(e.taskId)) || s.nextCursor == null) {
              l = !0;
              let n = B.current;
              ((B.current = []),
                qt((r) => g(r, e, t, n)),
                Yt([]),
                Zt([]),
                $t([]),
                en(!1),
                (tn.current = !1));
            } else (i && Yt(e), Zt(t), en(!0), (tn.current = !0));
          } else qt((e) => g(c, e));
          ((mn.current = !0),
            nn(s.nextCursor ?? null),
            an(l ? It.current : r),
            cn(
              (e) =>
                e || s.historyUnavailable === !0 || (s.historyTruncated && s.nextCursor == null),
            ),
            on(`idle`));
        } catch {
          if (ln.current !== t || W.current !== n) return;
          on(`error`);
        } finally {
          pn.current === s && (pn.current = null);
        }
      }
    }, [F?.nextCursor, H, rn, V, U, R, Jt, Kt, Xt, e.parentConversationId, O]),
    Cn = Ae({
      onSuccess: ({ receipt: e }, t) => {
        let n = Re(t.parentConversationId, t.threadId, t.command.taskId);
        (_t(n, { receipt: e }),
          bn.current === n &&
            ((yn.current = !1),
            at(e) && vn(!0),
            t.command.action !== `cancel_message` &&
              (e.status === `accepted` || e.status === `applied`) &&
              S(``)));
      },
      onError: (e, t) => {
        let n = ot(e),
          r = n === 404,
          i = n == null || n >= 500,
          a = t.command,
          o = Re(t.parentConversationId, t.threadId, a.taskId);
        (_t(o, {
          receipt: {
            invocationId: a.invocationId,
            ...(a.controlId == null ? {} : { controlId: a.controlId }),
            action: a.action,
            status: `failed`,
            createdAt: t.submittedAt,
            updatedAt: new Date().toISOString(),
            ...(a.message == null ? {} : { message: a.message }),
            reason: st(r, i),
          },
          ...(i ? { retry: a } : {}),
        }),
          bn.current === o && ((yn.current = !1), r && (gn(!0), vn(!0))));
      },
    });
  ((0, b.useEffect)(() => {
    if (j == null) return;
    let e = L?.controlReceipts?.find((e) => e.invocationId === j.invocationId);
    e != null &&
      (M != null &&
        M.action !== `cancel` &&
        M.action !== `cancel_message` &&
        (e.status === `accepted` || e.status === `applied`) &&
        S((e) => (e === M.message ? `` : e)),
      at(e) && vn(!0),
      gt(null));
  }, [M, gt, L?.controlReceipts, j]),
    (0, b.useEffect)(() => {
      L?.controlReceipts?.some(at) && vn(!0);
    }, [L?.controlReceipts]));
  let G = (0, b.useCallback)(
      (t, n, r) => {
        if (e.durable == null || Cn.isLoading || yn.current || (M != null && r == null)) return;
        let i;
        if (
          ((i =
            r ??
            (t === `cancel_message`
              ? { taskId: e.durable.taskId, invocationId: Je(), action: t, controlId: n }
              : t === `cancel`
                ? { taskId: e.durable.taskId, invocationId: Je(), action: t }
                : { taskId: e.durable.taskId, invocationId: Je(), action: t, message: x.trim() })),
          t !== `cancel` && t !== `cancel_message` && (i.message == null || i.message === ``))
        )
          return;
        let a = new Date().toISOString();
        (gt({
          receipt: {
            invocationId: i.invocationId,
            ...(i.controlId == null ? {} : { controlId: i.controlId }),
            action: i.action,
            status: `submitted`,
            createdAt: a,
            updatedAt: a,
            ...(i.message == null ? {} : { message: i.message }),
          },
          retry: i,
        }),
          (yn.current = !0),
          Cn.mutate({
            parentConversationId: e.parentConversationId,
            threadId: e.durable.threadId,
            command: i,
            submittedAt: a,
          }));
      },
      [x, Cn, M, e.durable, e.parentConversationId, gt],
    ),
    wn = (0, b.useCallback)(() => {
      (ut(),
        requestAnimationFrame(() => {
          Array.from(document.querySelectorAll(`[data-subagent-tool-call]`))
            .find(
              (t) =>
                t.dataset.subagentToolCall === e.toolCallId &&
                t.dataset.subagentParentMessage === e.parentMessageId &&
                t.dataset.subagentPartIndex === String(e.partIndex),
            )
            ?.focus();
        }));
    }, [ut, e.parentMessageId, e.partIndex, e.toolCallId]);
  Ve(f, _);
  let Tn = (0, b.useCallback)(
    (e) => {
      !_ || e.key !== `Escape` || e.defaultPrevented || (e.preventDefault(), wn());
    },
    [wn, _],
  );
  (0, b.useEffect)(() => {
    let e = document.activeElement;
    if (!(!_ || !(e instanceof HTMLElement)))
      return () => {
        e.isConnected && e.focus();
      };
  }, [_]);
  let En = e.contentPreview != null,
    Dn = le(
      {
        conversationId: e.parentConversationId,
        messageId: e.parentMessageId,
        partIndex: e.partIndex,
        toolCallId: e.toolCallId || void 0,
        stepId: e.contentPreview?.stepId,
        agentId: e.contentPreview?.agentId,
      },
      { enabled: En },
      e.contentPreview?.revision,
    ),
    On = En ? Dn.data?.tool_call : void 0,
    kn = On?.subagent_content ?? e.persistedContent,
    An = (On == null ? void 0 : Ge(On.args)) ?? e.prompt,
    jn = e.legacyOutput;
  En && jn != null && (jn = On?.output);
  let K = (0, b.useMemo)(
      () =>
        oe({
          title: Pt,
          prompt: An,
          progress: D,
          persistedContent: kn,
          isDetached: e.durable != null,
          legacyOutput: jn,
          initialProgress: e.durable == null ? e.initialProgress : 0,
          isSubmitting: e.durable == null ? e.isSubmitting : Rt,
          runStepStatus: e.durable == null ? e.runStepStatus : void 0,
        }),
      [Rt, Pt, jn, kn, D, An, e],
    ),
    q = (0, b.useMemo)(() => {
      if (e.durable == null) return K;
      if (L == null) {
        let e = D == null ? { ...K, status: `dispatched` } : K;
        return j == null ? e : { ...e, controls: [j] };
      }
      let t = de(L, e.durable.taskId),
        n =
          !((t.status === `running` || t.status === `dispatched`) && K.items.length > 0) &&
          t.items.length > 0
            ? t.items
            : K.items,
        r = { ...t, prompt: t.prompt ?? K.prompt, items: n };
      return j == null || (r.controls ?? []).some((e) => e.invocationId === j.invocationId)
        ? r
        : { ...r, controls: [...(r.controls ?? []), j] };
    }, [K, D, e.durable, L, j]),
    Mn = Tt?.agentId ?? F?.agentId ?? Nt,
    Nn = ie(Mn, e.subagentType, mt.agent, T, I),
    Pn = (0, b.useMemo)(
      () =>
        e.event == null
          ? ce(
              {
                agentId: Mn,
                subagentType: e.subagentType,
                subagentKind: I,
                title: F?.title ?? E.get(O)?.title,
              },
              mt,
              T,
              n(`com_ui_subagent_actor`),
            )
          : qe(Nn, Ft),
      [T, E, I, n, mt, Nn, Mn, Ft, e.event, e.subagentType, O, F?.title],
    ),
    Fn = Pn.name,
    In = (0, b.useMemo)(
      () =>
        e.event == null
          ? []
          : wt
              .filter((e) => e.latestTaskId != null || e.threadId === O)
              .map((e) => {
                let t = e.agentId == null ? void 0 : T?.[e.agentId],
                  r =
                    t?.name ||
                    e.actorId ||
                    me(e.subagentType, e.agentId, e.subagentKind) ||
                    n(`com_ui_subagent_actor`);
                return {
                  value: e.threadId,
                  label: t?.name != null && e.actorId != null ? `${r} · ${e.actorId}` : r,
                  icon: xe(t, { size: `icon`, showBorder: !1 }),
                };
              }),
      [T, wt, n, e.event, O],
    ),
    Ln = In.find((e) => e.value === O)?.label ?? Fn,
    Rn = xe(Nn, { size: `icon`, showBorder: !1 }),
    J = (0, b.useMemo)(() => (F == null ? [] : re(F)), [F]),
    zn = (0, b.useRef)({ threadId: O, generation: R, turns: J });
  (0, b.useEffect)(() => {
    if (F == null) return;
    let e = zn.current;
    if (e.threadId === O) {
      let t = new Set(J.map((e) => e.taskId)),
        n = e.turns.filter((e) => !t.has(e.taskId));
      if (n.length > 0 && mn.current) {
        if (tn.current) {
          let e = pe(B.current, n);
          ((B.current = e), $t(e));
        } else Yt((e) => pe(e, n));
      }
    }
    zn.current = { threadId: O, generation: R, turns: J };
  }, [V, J, R, O, F]);
  let Bn = dn.current === W.current,
    Vn = (0, b.useMemo)(() => {
      let t = Bn ? g(Kt, Jt, Xt, Qt, J) : g(J);
      if (t.length > 0) {
        let n = t.findIndex((e) => e.taskId === k);
        if (n >= 0)
          return t.map((e, t) => {
            let r = t === n ? { ...e, activity: q } : e,
              i = Ht.get(e.taskId);
            return i == null ? r : { ...r, activity: i };
          });
        let r = E.get(O),
          i = r?.tasks.find((e) => e.taskId === k)?.createdAt,
          a = {
            taskId: k || `${e.parentMessageId}:${e.toolCallId}`,
            trigger: {
              kind: e.event == null ? `parent_continuation` : `external_event`,
              summary: An ?? q.prompt ?? ``,
              ...(i == null ? {} : { createdAt: i }),
            },
            activity: q,
          },
          o = t[t.length - 1]?.trigger.createdAt;
        return (
          (i != null && o != null ? i >= o : r?.latestTaskId === k) ? [...t, a] : [a, ...t]
        ).map((e) => {
          let t = Ht.get(e.taskId);
          return t == null ? e : { ...e, activity: t };
        });
      }
      return [
        {
          taskId: k || `${e.parentMessageId}:${e.toolCallId}`,
          trigger: {
            kind: e.event == null ? `parent_dispatch` : `external_event`,
            summary: An ?? q.prompt ?? ``,
          },
          activity: q,
        },
      ];
    }, [q, E, J, Jt, Kt, Qt, An, Xt, Bn, O, e, k, Ht]),
    Hn = (0, b.useMemo)(() => {
      let e = new Map(Wt);
      return (q.activityTruncated === !0 && k !== `` && e.set(k, `unavailable`), e);
    }, [q.activityTruncated, k, Wt]),
    Un = !V && (H === void 0 || rn !== R),
    Wn = Un ? F?.nextCursor : H,
    Gn =
      sn ||
      F?.historyUnavailable === !0 ||
      (Un && F?.historyTruncated === !0 && F.nextCursor == null),
    Kn = e.durable == null || F == null || Array.isArray(F.turns),
    qn = hn || j?.reason === `task_inaccessible`,
    Jn = L != null && ke(L.status),
    Yn = L != null && (L.status === `running` || (L.status === `dispatched` && ve(L, k))),
    Y = e.durable != null && Yn && !qn && !_n,
    X = Cn.isLoading || j?.status === `submitted` || M != null,
    Xn = Y || M != null || j?.reason === `task_inaccessible`,
    Zn =
      e.host === `conversation` &&
      e.durable != null &&
      L?.subagentKind === `agent` &&
      L.agentId != null &&
      L.status === `completed` &&
      ve(L, k) &&
      L.messages.some((e) => e.messageId === `${k}:assistant`),
    Qn = (0, b.useCallback)(() => {
      !Zn ||
        e.durable == null ||
        Vt.isLoading ||
        ((Bt.current = { identity: A, text: x.trim() }),
        tt(!0),
        Vt.mutate({
          conversationId: e.durable.threadId,
          messageId: `${e.durable.taskId}:assistant`,
          option: be.DIRECT_PATH,
        }));
    }, [Zn, Vt, A, x, e.durable]),
    Z = null;
  Y ? (Z = `control`) : Zn && (Z = `continue`);
  let $n = (0, b.useRef)(null);
  Z == null
    ? $n.current != null && $n.current.threadId !== O && ($n.current = null)
    : ($n.current = { threadId: O, mode: Z });
  let er = Z == null && (L == null || (Jn && !_n && !qn)),
    Q = Z;
  Q == null && er && (Q = $n.current?.mode ?? (Jn ? `control` : null));
  let tr = _e || _,
    nr = n(`com_endpoint_message_new`, { 0: Fn }),
    rr = n(Q === `control` ? `com_ui_steer_send` : `com_ui_subagent_continue_new_chat`),
    ir = (0, b.useCallback)(() => G(`cancel`), [G]),
    ar = Y && !X ? { onStop: ir, stopLabel: n(`com_ui_subagent_cancel_task`) } : {},
    or = (0, b.useRef)(!1),
    sr = (0, b.useRef)(null);
  or.current = Q === `control`;
  let cr;
  cr = er ? !1 : Q === `control` ? !X && x.trim() !== `` : !Vt.isLoading;
  let lr = (0, b.useMemo)(() => {
      if (Q !== `control`) return [];
      let e = {
          isComposing: !1,
          isSubmitting: !0,
          allowSubmitWhileGenerating: !0,
          hasDuringRunModifier: !0,
          shortcutsEnabled: we,
          enterToSend: y,
          submitOverride: Ee,
          yieldedChords: je,
        },
        t = { key: `Enter`, altKey: !1, ctrlKey: !1, metaKey: !1, shiftKey: !1 },
        r = fe(t, e),
        i = fe({ ...t, ctrlKey: !se, metaKey: se }, e),
        a = fe({ ...t, altKey: !0 }, e),
        c = se ? `⌘⏎` : `Ctrl ⏎`,
        l = se ? `⌥⏎` : `Alt ⏎`,
        u;
      r === `submit` ? (u = `⏎`) : i === `submit` && (u = c);
      let d = !Y || X || x.trim() === ``;
      return [
        {
          key: `steer`,
          label: n(`com_ui_steer`),
          kbd: u,
          icon: (0, C.jsx)(s, { className: `text-status-warning h-4 w-4`, 'aria-hidden': `true` }),
          disabled: d,
          onClick: () => G(`steer`),
        },
        {
          key: `queue`,
          label: n(`com_ui_queue`),
          kbd: i === `other` ? c : void 0,
          icon: (0, C.jsx)(o, { className: `text-status-info h-4 w-4`, 'aria-hidden': `true` }),
          disabled: d,
          onClick: () => G(`queue`),
        },
        {
          key: `interrupt`,
          label: n(`com_ui_subagent_interrupt`),
          kbd: a === `interrupt` ? l : void 0,
          icon: (0, C.jsx)(ee, { className: `text-status-error h-4 w-4`, 'aria-hidden': `true` }),
          disabled: d,
          onClick: () => G(`interrupt`),
        },
      ];
    }, [Q, Y, x, X, y, n, we, G, Ee, je]),
    ur = (0, b.useCallback)(
      (e, t) => {
        let n = or.current,
          r = fe(e, {
            isComposing: t,
            isSubmitting: n,
            allowSubmitWhileGenerating: n,
            hasDuringRunModifier: n,
            shortcutsEnabled: we,
            enterToSend: y,
            submitOverride: Ee,
            yieldedChords: je,
          }),
          i = ct[r];
        return i == null
          ? r === `newline`
            ? `newline`
            : r === `block`
              ? `block`
              : `none`
          : ((sr.current = { event: e, control: i }), `submit`);
      },
      [y, we, Ee, je],
    ),
    dr = (0, b.useCallback)(
      (e) => {
        if (!Y) {
          Qn();
          return;
        }
        let t = sr.current;
        ((sr.current = null), G(e != null && t?.event === e ? t.control : `steer`));
      },
      [Qn, Y, G],
    ),
    fr = (0, b.useCallback)(
      (t) => {
        let n = wt.find((e) => e.threadId === t);
        if (n == null) return;
        let r = et(e.parentConversationId, n, e.event?.siblingParentMessageIds);
        r != null && w(r);
      },
      [wt, e.event?.siblingParentMessageIds, e.parentConversationId, w],
    ),
    $ = `ready`;
  En && e.durable == null && On == null
    ? ($ = Dn.isError ? `error` : `loading`)
    : e.durable != null && K.items.length === 0 && (Dt || At)
      ? ($ = `loading`)
      : e.durable != null && K.items.length === 0 && Ot && ($ = `error`);
  let pr = (t) =>
      t.taskId === k
        ? (0, C.jsx)(
            Xe,
            {
              activityId: `${e.parentMessageId}\u0000${e.toolCallId}\u0000${t.taskId}`,
              activity: q,
              state: $,
              embedded: !0,
              onCancelControl: Y && !X ? (e) => G(`cancel_message`, e) : void 0,
            },
            t.taskId,
          )
        : (0, C.jsx)(dt, { selection: e, task: t, title: q.title }, t.taskId),
    mr = () => {
      yt({ threadId: O, count: Math.min(P, bt + rt), taskCount: P });
    },
    hr = null;
  St
    ? (hr = (0, C.jsx)(`div`, {
        className: `border-border-light flex justify-center border-b px-4 py-2`,
        children: (0, C.jsx)(v, {
          type: `button`,
          variant: `ghost`,
          size: `sm`,
          onClick: mr,
          children: n(`com_ui_load_more`),
        }),
      }))
    : N?.tasksTruncated === !0 &&
      (hr = (0, C.jsx)(`div`, {
        role: `status`,
        'aria-label': n(`com_ui_subagent_thread_history_truncated`),
        className: `border-border-light text-text-tertiary flex h-7 items-center justify-center border-b`,
        children: (0, C.jsx)(`span`, { 'aria-hidden': !0, children: `•••` }),
      }));
  let gr = (0, b.useMemo)(() => new Map([[k || Vn[0]?.taskId || ``, $]]), [Vn, $, k]),
    _r =
      (D?.droppedCount ?? 0) > 0
        ? (0, C.jsx)(`div`, {
            role: `status`,
            className: `text-text-secondary px-4 py-2 text-sm`,
            children: n(
              D.droppedCount === 1
                ? `com_ui_subagent_activity_dropped_one`
                : `com_ui_subagent_activity_dropped`,
              { count: D.droppedCount },
            ),
          })
        : null,
    vr =
      En && On == null && Dn.isError
        ? (0, C.jsxs)(`div`, {
            role: `alert`,
            className: `flex items-center justify-center gap-2 px-4 py-2 text-sm`,
            children: [
              (0, C.jsx)(`span`, {
                className: `text-text-secondary`,
                children: n(`com_ui_tool_content_error`),
              }),
              (0, C.jsx)(v, {
                type: `button`,
                variant: `ghost`,
                size: `sm`,
                onClick: () => void Dn.refetch(),
                children: n(`com_ui_retry`),
              }),
            ],
          })
        : null,
    yr = _r == null && vr == null ? null : (0, C.jsxs)(C.Fragment, { children: [_r, vr] }),
    br;
  return (
    (br = Kn
      ? (0, C.jsxs)(Qe, {
          padded: !1,
          headerInset: !0,
          children: [
            yr,
            Gn &&
              (0, C.jsx)(`div`, {
                role: `status`,
                'aria-label': n(`com_ui_subagent_thread_history_truncated`),
                className: `border-border-light text-text-tertiary flex h-7 items-center justify-center border-b`,
                children: (0, C.jsx)(`span`, { 'aria-hidden': !0, children: `•••` }),
              }),
            Wn != null &&
              U !== `error` &&
              (0, C.jsx)(`div`, {
                className: `border-border-light flex justify-center border-b px-4 py-2`,
                children: (0, C.jsx)(v, {
                  type: `button`,
                  variant: `ghost`,
                  size: `sm`,
                  disabled: U === `loading`,
                  onClick: () => void Sn(),
                  children: n(
                    U === `loading` ? `com_ui_loading` : `com_ui_subagent_load_earlier_activity`,
                  ),
                }),
              }),
            U === `error` &&
              (0, C.jsx)(`div`, {
                className: `border-border-light flex justify-center border-b px-4 py-2`,
                children: (0, C.jsx)(v, {
                  type: `button`,
                  variant: `ghost`,
                  size: `sm`,
                  onClick: () => void Sn(),
                  children: n(`com_ui_retry`),
                }),
              }),
            (0, C.jsx)($e, {
              turns: Vn,
              author: Pn,
              parentAuthor: Mt && e.event == null ? Pn : mt,
              conversationId: O || e.parentConversationId,
              stateByTask: gr,
              controllableTaskId: Y && !X ? e.durable?.taskId : void 0,
              onCancelControl: (e, t) => G(`cancel_message`, t),
              detailStateByTask: Hn,
              onLoadTurnDetails: xn,
            }),
          ],
        })
      : e.event != null && ((N?.tasks.length ?? 0) > 1 || N?.tasksTruncated === !0)
        ? (0, C.jsxs)(Qe, {
            padded: !1,
            headerInset: !0,
            children: [
              yr,
              (0, C.jsxs)(`div`, {
                'data-subagent-thread-timeline': !0,
                children: [hr, xt.map(pr)],
              }),
            ],
          })
        : (0, C.jsx)(
            Xe,
            {
              activityId: `${e.parentMessageId}\u0000${e.toolCallId}\u0000${e.partIndex}`,
              activity: q,
              state: $,
              showPrompt: !1,
              headerInset: !0,
              notice: yr,
              onCancelControl: Y && !X ? (e) => G(`cancel_message`, e) : void 0,
            },
            `${e.parentMessageId}\u0000${e.toolCallId}\u0000${e.partIndex}`,
          )),
    (0, C.jsxs)(`aside`, {
      ref: f,
      role: _ ? `dialog` : `region`,
      'aria-modal': _ || void 0,
      'aria-label': n(`com_ui_subagent_thread_panel`),
      onKeyDown: Tn,
      className: `bg-surface-primary-alt text-text-primary relative flex h-full w-full flex-col overflow-hidden`,
      children: [
        (0, C.jsxs)(`header`, {
          className: `from-surface-primary-alt via-surface-primary-alt/70 text-text-primary absolute top-0 z-10 flex h-[3.25rem] w-full items-center gap-2 bg-gradient-to-b to-transparent p-2 font-semibold`,
          children: [
            In.length > 1
              ? (0, C.jsx)(`div`, {
                  className: `flex min-w-0 flex-1`,
                  onKeyDown: (e) => {
                    e.key === `Escape` && Me && e.stopPropagation();
                  },
                  children: (0, C.jsx)(We, {
                    isCollapsed: !1,
                    selectedValue: O,
                    setValue: fr,
                    displayValue: Ln,
                    selectPlaceholder: Ln,
                    searchPlaceholder: n(`com_agents_search_name`),
                    ariaLabel: n(`com_ui_subagent_actor`),
                    items: In,
                    SelectIcon: Rn,
                    disabled: Be,
                    portal: !1,
                    onOpenChange: Ie,
                    containerClassName: `min-w-0 flex-1 px-0`,
                    className: `hover:bg-surface-hover h-9 w-full border-transparent bg-transparent font-semibold`,
                    showCarat: !0,
                  }),
                })
              : (0, C.jsxs)(C.Fragment, {
                  children: [
                    (0, C.jsx)(`div`, {
                      className: `flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full`,
                      children: Pn.icon,
                    }),
                    (0, C.jsx)(`h2`, {
                      className: `min-w-0 flex-1 truncate text-sm font-semibold`,
                      title: Fn,
                      children: Fn,
                    }),
                  ],
                }),
            (0, C.jsx)(v, {
              type: `button`,
              variant: `ghost`,
              size: `icon`,
              onClick: wn,
              'aria-label': n(`com_ui_close`),
              className: `h-8 w-8 shrink-0`,
              children: (0, C.jsx)(a, { className: `size-[1.0625rem]`, 'aria-hidden': `true` }),
            }),
          ],
        }),
        (0, C.jsx)(
          Ye,
          { children: br },
          `${e.parentMessageId}\u0000${e.toolCallId}\u0000${e.partIndex}`,
        ),
        (Xn || Q != null) &&
          (0, C.jsxs)(`div`, {
            className: m(`shrink-0 px-3 pt-2`, t ? `pb-10` : `pb-4`),
            children: [
              j?.status === `failed` &&
                (0, C.jsxs)(Pe, {
                  variant: `error`,
                  className: `mb-2 flex items-center gap-2`,
                  children: [
                    (0, C.jsx)(`span`, { className: `min-w-0 flex-1`, children: n(lt(j.reason)) }),
                    M != null &&
                      (0, C.jsx)(v, {
                        type: `button`,
                        size: `sm`,
                        variant: `outline`,
                        disabled: Cn.isLoading,
                        onClick: () => G(M.action, M.controlId, M),
                        children: n(`com_ui_retry`),
                      }),
                  ],
                }),
              Q != null &&
                (0, C.jsx)(Te, {
                  value: x,
                  onChange: S,
                  onSubmit: dr,
                  canSubmit: cr,
                  disabled: Q === `control` && X,
                  submitLabel: rr,
                  ...ar,
                  ariaLabel: n(`com_ui_message_input`),
                  placeholder: nr,
                  submitOnEnter: y,
                  resolveKeyVerdict: ur,
                  maxLength: Q === `control` ? 4096 : void 0,
                  submitActions: tr ? [] : lr,
                  submitActionsLabel: n(`com_ui_during_run_actions`),
                  actions: tr
                    ? lr
                        .filter((e) => e.key !== `steer`)
                        .map((e) =>
                          (0, C.jsx)(
                            v,
                            {
                              type: `button`,
                              size: `icon`,
                              variant: `ghost`,
                              'aria-label': e.label,
                              disabled: e.disabled,
                              onClick: e.onClick,
                              className: `text-text-secondary hover:text-text-primary size-9 rounded-full`,
                              children: e.icon,
                            },
                            e.key,
                          ),
                        )
                    : null,
                }),
            ],
          }),
      ],
    })
  );
}
function dt({ selection: e, task: t, title: n }) {
  let r = e.durable?.threadId ?? ``,
    {
      data: i,
      isLoading: a,
      isError: o,
      isReadinessPending: s,
    } = He(e.parentConversationId, r, t.taskId),
    c = (0, b.useMemo)(
      () => (i == null ? { title: n, status: t.status, items: [], controls: [] } : de(i, t.taskId)),
      [i, t.status, t.taskId, n],
    ),
    l = `ready`;
  return (
    o ? (l = `error`) : (a || s) && (l = `loading`),
    (0, C.jsx)(Xe, {
      activityId: `${e.parentMessageId}\u0000${e.toolCallId}\u0000${t.taskId}`,
      activity: c,
      state: l,
      showPrompt: !1,
      embedded: !0,
    })
  );
}
export { ut as default };
