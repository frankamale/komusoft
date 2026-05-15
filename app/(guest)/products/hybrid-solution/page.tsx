"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cloud, Check, ArrowRight, Download, FileText,
  WifiOff, Shield, HardDrive,
  Globe, Zap, BarChart, ChevronRight, X, RefreshCw,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

const HybridManager = () => {
  const features = [
    { icon: WifiOff, title: "Offline-First Architecture", description: "Full functionality without internet, with automatic cloud sync when connection is restored — zero data loss." },
    { icon: Cloud, title: "Cloud Backup & Sync", description: "Real-time data synchronisation with secure cloud backup and disaster recovery built in." },
    { icon: Globe, title: "Remote Access", description: "Access your business data from any device, anywhere, via a secure cloud portal." },
    { icon: Zap, title: "Hybrid Performance", description: "Lightning-fast local operations for POS, combined with cloud-scale processing for analytics." },
    { icon: BarChart, title: "Unified Analytics", description: "Combine local and cloud data into a single analytics layer for comprehensive business intelligence." },
    { icon: Shield, title: "Dual Security", description: "On-premise data protection plus enterprise-grade cloud security — EFRIS compliant throughout." },
  ];

  const modules = [
    { name: "POS & Inventory", features: ["Offline transactions", "Real-time sync", "Multi-location support", "Cloud reporting"] },
    { name: "Cloud Services", features: ["Remote access portal", "Automated backups", "Mobile apps", "Web dashboards"] },
    { name: "Integration Hub", features: ["API connectivity", "Third-party apps", "Webhook support", "Data export"] },
    { name: "Business Intelligence", features: ["Real-time analytics", "Custom reports", "KPI dashboards", "Trend analysis"] },
    { name: "Security & Compliance", features: ["Role-based access", "Audit trails", "EFRIS compliance", "Data encryption"] },
    { name: "Team Management", features: ["User permissions", "Team collaboration", "Task automation", "Notification centre"] },
  ];

  const plans = [
    {
      name: "Standard",
      price: "UGX 350,000",
      billing: "per month",
      annual: "UGX 3,500,000 / year",
      setup: "+ UGX 1,000,000 setup",
      highlight: false,
      cta: "Start Free Trial",
      features: [
        { label: "POS Terminals", value: "Up to 10" },
        { label: "Locations", value: "Up to 3" },
        { label: "Cloud Dashboard", value: "Basic" },
        { label: "Cloud Sync", value: "Basic" },
        { label: "Remote Access", value: true },
        { label: "Custom Integrations", value: false },
        { label: "White-Label", value: false },
        { label: "Support", value: "Standard" },
        { label: "EFRIS Compliance", value: true },
      ],
    },
    {
      name: "Professional",
      price: "UGX 500,000",
      billing: "per month",
      annual: "UGX 5,000,000 / year",
      setup: "+ UGX 1,000,000 setup",
      highlight: true,
      cta: "Start Free Trial",
      features: [
        { label: "POS Terminals", value: "Up to 50" },
        { label: "Locations", value: "Up to 10" },
        { label: "Cloud Dashboard", value: "Advanced" },
        { label: "Cloud Sync", value: "Real-time" },
        { label: "Remote Access", value: true },
        { label: "Custom Integrations", value: true },
        { label: "White-Label", value: false },
        { label: "Support", value: "Priority" },
        { label: "EFRIS Compliance", value: true },
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      billing: "Contact for quote",
      annual: "",
      setup: "Custom infrastructure",
      highlight: false,
      cta: "Contact Sales",
      features: [
        { label: "POS Terminals", value: "Unlimited" },
        { label: "Locations", value: "Unlimited" },
        { label: "Cloud Dashboard", value: "Advanced" },
        { label: "Cloud Sync", value: "Real-time" },
        { label: "Remote Access", value: true },
        { label: "Custom Integrations", value: true },
        { label: "White-Label", value: true },
        { label: "Support", value: "Dedicated 24/7" },
        { label: "EFRIS Compliance", value: true },
      ],
    },
  ];

  const deploymentRows = [
    { aspect: "Local POS Speed", onPrem: "Instant (LAN)", cloud: "~100ms" },
    { aspect: "Works without Internet", onPrem: "✓ Full functionality", cloud: "✗ Limited" },
    { aspect: "Remote Access", onPrem: "VPN required", cloud: "✓ Native" },
    { aspect: "Maintenance", onPrem: "Your team", cloud: "Managed by Komusoft" },
    { aspect: "Data Location", onPrem: "Your premises", cloud: "Komusoft cloud" },
    { aspect: "Scalability", onPrem: "Hardware upgrade", cloud: "Instant scaling" },
    { aspect: "EFRIS Compliance", onPrem: "✓", cloud: "✓" },
    { aspect: "Best For", onPrem: "High-volume retail", cloud: "Multi-branch access" },
  ];

  const specRows = [
    { label: "On-Premise CPU", value: "Intel Core i5 or equivalent" },
    { label: "On-Premise RAM", value: "8 GB minimum, 16 GB recommended" },
    { label: "On-Premise Storage", value: "100 GB+ (SSD recommended)" },
    { label: "Operating System", value: "Windows 10/11, Windows Server 2016+" },
    { label: "Network (Local)", value: "LAN 100 Mbps+" },
    { label: "Internet for Cloud", value: "2 Mbps minimum, 10 Mbps recommended" },
    { label: "Client Devices", value: "Windows,  Web browsers, iOS & Android" },
    { label: "Cloud Hosting", value: "Managed infrastructure — 99.9% uptime SLA" },
  ];

  return (
    <div className="min-h-screen bg-white pt-20" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ─── PRODUCT OVERVIEW ─────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            {...fadeUp()}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10"
          >
            {/* Left */}
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
                style={{
                  background: "rgba(5,173,238,0.08)",
                  border: "1px solid rgba(5,173,238,0.15)",
                  color: "#05ADEE",
                }}
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Hybrid · On-Premise + Cloud
              </div>

              <h1
                className="text-4xl sm:text-5xl font-bold leading-tight mb-5"
                style={{ color: "#0A0947" }}
              >
                Hybrid Manager
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                Experience the reliability of on-premise operations with the flexibility of cloud services.
                Work offline when needed, sync automatically, and access data remotely — all in one platform.
              </p>
            </div>

            {/* Right */}
            <div className="grid grid-cols-2 gap-4 min-w-[300px]">
              {[
                ["Offline + Cloud", "Seamless sync"],
                ["EFRIS Compliant", "URA approved"],
                ["Enterprise Ready", "Unlimited scale"],
                ["Dual Performance", "Local & cloud speed"],
              ].map(([title, desc], i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5"
                  style={{
                    background: "#f8fafc",
                    border: "1px solid rgba(5,173,238,0.1)",
                  }}
                >
                  <p
                    className="font-semibold text-sm mb-1"
                    style={{ color: "#0A0947" }}
                  >
                    {title}
                  </p>

                  <p className="text-xs text-gray-500">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            {...fadeUp(0.1)}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg,#05ADEE,#0496d5)",
                boxShadow: "0 6px 24px rgba(5,173,238,0.2)",
              }}
            >
              Request Demo <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
              style={{
                background: "#f8fafc",
                border: "1px solid rgba(5,173,238,0.1)",
                color: "#0A0947",
              }}
            >
              <Download className="w-4 h-4" />
              Download Brochure
            </button>

            <Link
              href="/products/docs/hybrid-solution"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
              style={{
                background: "#f8fafc",
                border: "1px solid rgba(5,173,238,0.1)",
                color: "#0A0947",
              }}
            >
              <FileText className="w-4 h-4" />
              Documentation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURES ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-12" {...fadeUp()}>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-2" style={{ color: "#05ADEE" }}>Hybrid Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#0A0947" }}>Offline Resilience. Cloud Power.</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {features.map((f, i) => (
              <motion.div key={i} {...fadeUp(i * 0.06)} whileHover={{ y: -5 }}
                className="group rounded-2xl p-6 sm:p-7 cursor-default transition-all duration-300"
                style={{ border: "1px solid #e8edf2" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(5,173,238,0.35)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(5,173,238,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8edf2"; e.currentTarget.style.boxShadow = "none"; }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(5,173,238,0.1)" }}>
                  <f.icon className="w-5 h-5" style={{ color: "#05ADEE" }} />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: "#0A0947" }}>{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MODULES ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-12" {...fadeUp()}>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-2" style={{ color: "#05ADEE" }}>Modules</p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#0A0947" }}>Complete Hybrid Modules</h2>
            <p className="text-gray-500 mt-3">All modules work offline and online — seamlessly.</p>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((mod, i) => (
              <div key={i} className="rounded-2xl p-6 transition-all duration-200 hover:shadow-lg"
                style={{ background: "#f8fafc", border: "1px solid rgba(5,173,238,0.08)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: "#05ADEE" }} />
                  <h3 className="font-bold" style={{ color: "#0A0947" }}>{mod.name}</h3>
                </div>
                <ul className="space-y-2">
                  {mod.features.map((feat, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-sm text-gray-500">
                      <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "#05ADEE" }} /> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* ─── PRICING TABLE ─────────────────────────────────────── */}
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

      {/* ─── SYSTEM REQUIREMENTS ───────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-10" {...fadeUp()}>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-2" style={{ color: "#05ADEE" }}>Technical</p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#0A0947" }}>Deployment Requirements</h2>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="overflow-x-auto rounded-2xl shadow-sm" style={{ border: "1px solid rgba(5,173,238,0.12)" }}>
            <table className="w-full min-w-[440px]">
              <thead>
                <tr style={{ background: "#0A0947" }}>
                  <th className="text-left px-6 py-4 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.5)", width: "35%" }}>Specification</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-white">Requirement</th>
                </tr>
              </thead>
              <tbody>
                {specRows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#f8fafc" }}>
                    <td className="px-6 py-3.5 text-sm font-medium text-gray-500">{row.label}</td>
                    <td className="px-6 py-3.5 text-sm font-semibold" style={{ color: "#0A0947" }}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="relative overflow-hidden rounded-[2rem] p-10 sm:p-16 text-center"
            style={{ background: "linear-gradient(135deg,#0A0947 0%,#0d1168 55%,#0a3070 100%)" }}>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-20"
              style={{ background: "radial-gradient(circle,#05ADEE 0%,transparent 65%)", transform: "translate(30%,-40%)" }} />
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "44px 44px" }} />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready for <span style={{ background: "linear-gradient(90deg,#05ADEE,#38d2f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Hybrid Business Management?</span>
              </h2>
              <p className="text-base sm:text-lg mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
                Get the resilience of on-premise with the power of cloud — in one unified platform.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-2xl"
                style={{ background: "linear-gradient(135deg,#05ADEE,#0496d5)", boxShadow: "0 8px 28px rgba(5,173,238,0.3)" }}>
                Request a Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HybridManager;