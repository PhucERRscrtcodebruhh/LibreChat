const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      './Dialog.Dz-uE-u1.js',
      './rolldown-runtime.C0FnF6B9.js',
      './advanced-inputs.BJDnsHUg.js',
      './vendor.DpBpdTS1.js',
      './runtime-shims.CfYCxqfF.js',
      './query-devtools.C2qG3_c-.js',
      './validation.OCGaXQWG.js',
      './animations.BtPDPo2e.js',
      './react-vtree.nToqO-mh.js',
      './i18n.C6_IvY32.js',
      './routing.DYGR6PKW.js',
      './radix-ui.tIiBXdQR.js',
      './tanstack-vendor.DDeX4vva.js',
      './http-client.D6G8y4MX.js',
      './hooks.CliY9jTn.js',
      './react-interactions.DscxJRRh.js',
      './shared-libs.CKPm2yyl.js',
      './avatars.XYysrFin.js',
      './framer-motion.sQ5ndFcX.js',
      './virtualization.CT5gCaFG.js',
      './headlessui.CdCWEm1u.js',
      './markdown-processing.TMtFeQR7.js',
      './date-utils.C_DbPEjY.js',
      './utilities.Ce8HPfek.js',
      './lazy.ok8MO2Tx.js',
      './forms.UHk3QTvM.js',
      './math-katex.RfU0klHh.js',
      './math-katex.uZ8_QngQ.css',
      './useBalanceSummary.VOg6l8dt.js',
      './duringRun.CRj3RJG2.js',
      './security-ui.5zGvIlor.js',
    ]),
) => i.map((i) => d[i]);
import { o as e } from './rolldown-runtime.C0FnF6B9.js';
import { at as t, rt as n } from './advanced-inputs.BJDnsHUg.js';
import { Ot as r, wt as i } from './vendor.DpBpdTS1.js';
import { c as a } from './runtime-shims.CfYCxqfF.js';
var o = e(t(), 1),
  s = n(),
  c = r(!1),
  l = (0, o.lazy)(() =>
    a(
      () => import(`./Dialog.Dz-uE-u1.js`),
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30,
      ]),
      import.meta.url,
    ),
  );
function u() {
  let [e, t] = i(c);
  return (
    (0, o.useEffect)(() => () => t(!1), [t]),
    e
      ? (0, s.jsx)(o.Suspense, {
          fallback: null,
          children: (0, s.jsx)(l, { open: e, onOpenChange: t }),
        })
      : null
  );
}
export { c as n, u as t };
