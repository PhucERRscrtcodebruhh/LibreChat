import { o as e, r as t } from './rolldown-runtime.C0FnF6B9.js';
import { at as n, rt as r } from './advanced-inputs.BJDnsHUg.js';
import { c as i } from './radix-ui.tIiBXdQR.js';
import { $d as a, $o as o, Ec as s, Pc as c, ds as l, ef as u } from './hooks.CliY9jTn.js';
import { n as d, t as f } from './sandpack.D6kRVmoQ.js';
import { n as p, r as m } from './Artifacts.wUOg-YWW.js';
var h = e(n(), 1),
  g = r(),
  _ = (0, h.memo)(function ({
    files: e,
    fileKey: t,
    template: n,
    sharedProps: r,
    previewRef: i,
    currentCode: a,
    startupConfig: s,
  }) {
    let c = (0, h.useMemo)(() => {
        if (Object.keys(e).length === 0) return e;
        let n = a ?? ``;
        return n ? { ...e, [t]: { code: n } } : e;
      }, [a, e, t]),
      u = (0, h.useMemo)(() => o(n, s), [s, n]);
    return Object.keys(c).length === 0
      ? null
      : (0, g.jsx)(d, {
          files: { ...c, ...l },
          options: u,
          ...r,
          template: n,
          children: (0, g.jsx)(f, {
            showOpenInCodeSandbox: !1,
            showRefreshButton: !1,
            tabIndex: 0,
            ref: i,
          }),
        });
  }),
  v = t({ default: () => y });
function y({ artifact: e, previewRef: t, isSharedConvo: n }) {
  let { shareId: r } = c(),
    o = n === !0 && typeof r == `string` && r.length > 0,
    { data: l } = u({ enabled: !o }),
    { data: d } = a(r, { enabled: o }),
    f = o ? d : l,
    v = (0, h.useRef)(null),
    y = s(e.id),
    { files: b, fileKey: x, template: S, sharedProps: C, deriveFiles: w } = m({ artifact: e }),
    T = (0, h.useMemo)(() => (w != null && y ? w(y) : b), [w, y, b]);
  return (0, g.jsxs)(`div`, {
    className: `flex h-full w-full flex-col`,
    children: [
      (0, g.jsx)(i, {
        value: `code`,
        id: `artifacts-code`,
        className: `h-full w-full grow overflow-auto`,
        tabIndex: -1,
        children: (0, g.jsx)(p, { artifact: e, monacoRef: v, readOnly: n === !0 }),
      }),
      (0, g.jsx)(i, {
        value: `preview`,
        className: `h-full w-full grow overflow-hidden`,
        tabIndex: -1,
        children: (0, g.jsx)(_, {
          files: T,
          fileKey: x,
          template: S,
          previewRef: t,
          sharedProps: C,
          currentCode: y,
          startupConfig: f,
        }),
      }),
    ],
  });
}
export { y as default, v as t };
