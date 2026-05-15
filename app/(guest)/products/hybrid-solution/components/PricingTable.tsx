"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, X } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

interface PlanFeature {
  label: string;
  value: string | boolean;
}

interface Plan {
  name: string;
  price: string;
  billing: string;
  annual: string;
  setup: string;
  highlight: boolean;
  cta: string;
  features: PlanFeature[];
}

interface PricingTableProps {
  plans: Plan[];
}

export function PricingTable({ plans }: PricingTableProps) {
  return (
    <section className="py-16 sm:py-24" style={{ background: "linear-gradient(135deg,#f0f9ff 0%,#e8f4fd 50%,#f0faff 100%)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12" {...fadeUp()}>
          <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-2" style={{ color: "#05ADEE" }}>Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#0A0947" }}>Enterprise Hybrid Pricing</h2>
          <p className="text-gray-500 mt-3">Monthly subscription + one-time setup fee.</p>
        </motion.div>

        {/* Mobile cards */}
        <div className="flex flex-col gap-6 lg:hidden">
          {plans.map((plan, pi) => (
            <motion.div key={pi} {...fadeUp(pi * 0.08)} className="rounded-2xl p-6 relative"
              style={{
                background: plan.highlight ? "linear-gradient(135deg,#0A0947,#0d1575)" : "white",
                border: plan.highlight ? "none" : "1px solid rgba(5,173,238,0.15)",
                boxShadow: plan.highlight ? "0 20px 60px rgba(5,173,238,0.2)" : undefined,
              }}>
              {plan.highlight && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold" style={{ background: "#05ADEE", color: "white" }}>Most Popular</div>}
              <h3 className="text-xl font-bold mb-1" style={{ color: plan.highlight ? "white" : "#0A0947" }}>{plan.name}</h3>
              <div className="text-3xl font-bold mb-0.5" style={{ color: "#05ADEE" }}>{plan.price}</div>
              <p className="text-xs mb-0.5" style={{ color: plan.highlight ? "rgba(255,255,255,0.5)" : "#9ca3af" }}>{plan.billing}</p>
              {plan.annual && <p className="text-xs" style={{ color: plan.highlight ? "rgba(255,255,255,0.4)" : "#9ca3af" }}>{plan.annual}</p>}
              <p className="text-xs mb-5" style={{ color: plan.highlight ? "rgba(255,255,255,0.35)" : "#9ca3af" }}>{plan.setup}</p>
              <ul className="space-y-2.5 mb-6">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-center justify-between text-sm gap-3">
                    <span style={{ color: plan.highlight ? "rgba(255,255,255,0.6)" : "#6b7280" }}>{f.label}</span>
                    {typeof f.value === "boolean"
                      ? f.value ? <Check className="w-4 h-4 shrink-0" style={{ color: "#05ADEE" }} /> : <X className="w-4 h-4 shrink-0 text-gray-300" />
                      : <span className="font-semibold text-right" style={{ color: plan.highlight ? "white" : "#0A0947" }}>{f.value}</span>}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all"
                style={plan.highlight
                  ? { background: "linear-gradient(135deg,#05ADEE,#0496d5)", color: "white", boxShadow: "0 6px 20px rgba(5,173,238,0.35)" }
                  : { background: "rgba(5,173,238,0.08)", color: "#0A0947" }}>
                {plan.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop table */}
        <motion.div {...fadeUp(0.1)} className="hidden lg:block rounded-3xl overflow-hidden shadow-xl"
          style={{ border: "1px solid rgba(5,173,238,0.12)" }}>
          <table className="w-full">
            <thead>
              <tr style={{ background: "#0A0947" }}>
                <th className="text-left px-7 py-5 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.5)", width: "28%" }}>Feature</th>
                {plans.map((plan, pi) => (
                  <th key={pi} className="px-6 py-5 text-center relative" style={{ width: "24%" }}>
                    {plan.highlight && <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "#05ADEE" }} />}
                    <div className="text-white font-bold text-base">{plan.name}</div>
                    <div className="text-2xl font-bold mt-1" style={{ color: "#05ADEE" }}>{plan.price}</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{plan.billing}</div>
                    {plan.annual && <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{plan.annual}</div>}
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{plan.setup}</div>
                    {plan.highlight && <div className="mt-2 inline-block px-3 py-0.5 rounded-full text-xs font-bold" style={{ background: "rgba(5,173,238,0.2)", color: "#05ADEE" }}>Most Popular</div>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {plans[0].features.map((feat, fi) => (
                <tr key={fi} style={{ background: fi % 2 === 0 ? "white" : "#f8fafc" }}>
                  <td className="px-7 py-4 text-sm font-medium text-gray-600">{feat.label}</td>
                  {plans.map((plan, pi) => {
                    const cell = plan.features[fi];
                    return (
                      <td key={pi} className="px-6 py-4 text-center text-sm"
                        style={{ borderLeft: pi === 1 ? "1px solid rgba(5,173,238,0.12)" : undefined, background: pi === 1 ? "rgba(5,173,238,0.02)" : undefined }}>
                        {typeof cell.value === "boolean"
                          ? cell.value ? <Check className="w-5 h-5 mx-auto" style={{ color: "#05ADEE" }} /> : <X className="w-5 h-5 mx-auto text-gray-200" />
                          : <span className="font-semibold" style={{ color: "#0A0947" }}>{cell.value}</span>}
                      </td>
                    );
                  })}
                </tr>
              ))}
              <tr style={{ background: "#f8fafc" }}>
                <td className="px-7 py-5" />
                {plans.map((plan, pi) => (
                  <td key={pi} className="px-6 py-5 text-center"
                    style={{ borderLeft: pi === 1 ? "1px solid rgba(5,173,238,0.12)" : undefined, background: pi === 1 ? "rgba(5,173,238,0.02)" : undefined }}>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
                      style={plan.highlight
                        ? { background: "linear-gradient(135deg,#05ADEE,#0496d5)", color: "white", boxShadow: "0 4px 16px rgba(5,173,238,0.3)" }
                        : { background: "rgba(5,173,238,0.08)", color: "#0A0947" }}>
                      {plan.cta} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </motion.div>

        <motion.div {...fadeUp(0.15)} className="mt-8 rounded-2xl p-5 sm:p-6" style={{ background: "white", border: "1px solid rgba(5,173,238,0.12)" }}>
          <p className="text-sm font-bold mb-3" style={{ color: "#0A0947" }}>Included in every plan:</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {["14-day free trial", "Automated backups", "Data encryption", "SLA guarantee", "EFRIS compliance"].map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-sm text-gray-500">
                <Check className="w-4 h-4" style={{ color: "#05ADEE" }} /> {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}