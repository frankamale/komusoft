"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cloud, Check, ArrowRight, Download, FileText, BarChart,
  Users, Zap, Shield, Database, Monitor, Globe, ChevronRight, X,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

const BusinessAssistant = () => {
  const features = [
    { icon: Cloud, title: "Cloud Infrastructure", description: "Scalable cloud platform accessible from anywhere with automatic backups, updates, and 99.9% uptime SLA." },
    { icon: BarChart, title: "Advanced Analytics", description: "Real-time dashboards and reporting with customisable KPIs and built-in business intelligence." },
    { icon: Users, title: "Team Collaboration", description: "Multi-user access with role-based permissions, shared workspaces, and real-time collaboration." },
    { icon: Zap, title: "Workflow Automation", description: "Automate repetitive tasks and business processes with a drag-and-drop workflow builder." },
    { icon: Shield, title: "Enterprise Security", description: "Bank-grade encryption, SSO integration, two-factor authentication, and comprehensive audit trails." },
    { icon: Database, title: "API Integrations", description: "Connect with third-party services via REST APIs, webhooks, and a growing library of connectors." },
  ];

  const modules = [
    { name: "CRM", features: ["Lead management", "Customer database", "Sales pipeline", "Communication tracking"] },
    { name: "Analytics", features: ["Real-time dashboards", "Custom reports", "KPIs & metrics", "Data visualisation"] },
    { name: "Collaboration", features: ["Team workspaces", "Document sharing", "Task management", "Notifications"] },
    { name: "Automation", features: ["Workflow builder", "Email automation", "Task scheduling", "Triggers & actions"] },
    { name: "Security", features: ["User permissions", "Audit logs", "Data encryption", "Backup & recovery"] },
    { name: "Integrations", features: ["REST API access", "Webhook support", "Third-party apps", "Custom connectors"] },
  ];

  const plans = [
    {
      name: "Starter",
      price: "UGX 75,000",
      billing: "per month",
      annual: "UGX 750,000 / year",
      highlight: false,
      cta: "Start Free Trial",
      features: [
        { label: "Users", value: "Up to 5" },
        { label: "Storage", value: "5 GB" },
        { label: "Analytics", value: "Basic" },
        { label: "API Access", value: false },
        { label: "Custom Workflows", value: false },
        { label: "SSO / 2FA", value: false },
        { label: "Support", value: "Email" },
        { label: "Uptime SLA", value: "99.9%" },
        { label: "Free Trial", value: "14 days" },
      ],
    },
    {
      name: "Professional",
      price: "UGX 150,000",
      billing: "per month",
      annual: "UGX 1,500,000 / year",
      highlight: true,
      cta: "Start Free Trial",
      features: [
        { label: "Users", value: "Up to 25" },
        { label: "Storage", value: "50 GB" },
        { label: "Analytics", value: "Advanced" },
        { label: "API Access", value: true },
        { label: "Custom Workflows", value: true },
        { label: "SSO / 2FA", value: true },
        { label: "Support", value: "Priority" },
        { label: "Uptime SLA", value: "99.9%" },
        { label: "Free Trial", value: "14 days" },
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      billing: "Contact for quote",
      annual: "",
      highlight: false,
      cta: "Contact Sales",
      features: [
        { label: "Users", value: "Unlimited" },
        { label: "Storage", value: "Unlimited" },
        { label: "Analytics", value: "Advanced" },
        { label: "API Access", value: true },
        { label: "Custom Workflows", value: true },
        { label: "SSO / 2FA", value: true },
        { label: "Support", value: "Dedicated" },
        { label: "Uptime SLA", value: "99.9%" },
        { label: "Free Trial", value: "On request" },
      ],
    },
  ];

  const browserRows = [
    { browser: "Chrome", version: "90+", status: true },
    { browser: "Firefox", version: "88+", status: true },
    { browser: "Safari", version: "14+", status: true },
    { browser: "Edge", version: "90+", status: true },
  ];

  const sysRows = [
    { label: "Internet Connection", value: "2 Mbps minimum, 10 Mbps recommended" },
    { label: "Browser", value: "Any modern browser (see table)" },
    { label: "Mobile", value: "Fully responsive — iOS & Android supported" },
    { label: "Security", value: "SSL/TLS encryption, 2FA available" },
    { label: "Data Residency", value: "Cloud-hosted (region configurable)" },
    { label: "Offline Mode", value: "Partial offline with sync on reconnect" },
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
                <Cloud className="w-3.5 h-3.5" />
                SaaS Platform
              </div>

              <h1
                className="text-4xl sm:text-5xl font-bold leading-tight mb-5"
                style={{ color: "#0A0947" }}
              >
                Business Assistant
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                A cloud-based business operations platform that combines analytics,
                collaboration, CRM, workflow automation, and integrations into one
                modern system accessible from anywhere.
              </p>
            </div>

            {/* Right */}
            <div className="grid grid-cols-2 gap-4 min-w-[300px]">
              {[
                ["Cloud Based", "Accessible anywhere"],
                ["99.9% SLA", "Reliable infrastructure"],
                ["Automation", "Reduce manual work"],
                ["API Ready", "Integrate with systems"],
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
              Start Free Trial <ArrowRight className="w-4 h-4" />
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
              href="/products/docs/business-assistant"
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

      <section className="py-16 sm:py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-12" {...fadeUp()}>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-2" style={{ color: "#05ADEE" }}>Core Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#0A0947" }}>Everything in the Cloud</h2>
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

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-12" {...fadeUp()}>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-2" style={{ color: "#05ADEE" }}>Modules</p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#0A0947" }}>Built-in Business Modules</h2>
            <p className="text-gray-500 mt-3">All modules included — activate what you need.</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#0A0947" }}>Transparent SaaS Pricing</h2>
            <p className="text-gray-500 mt-3">Billed monthly or annually — cancel any time.</p>
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
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                    style={{ background: "#05ADEE", color: "white" }}>Most Popular</div>
                )}
                <h3 className="text-xl font-bold mb-1" style={{ color: plan.highlight ? "white" : "#0A0947" }}>{plan.name}</h3>
                <div className="text-3xl font-bold mb-0.5" style={{ color: "#05ADEE" }}>{plan.price}</div>
                <p className="text-xs mb-0.5" style={{ color: plan.highlight ? "rgba(255,255,255,0.5)" : "#9ca3af" }}>{plan.billing}</p>
                {plan.annual && <p className="text-xs mb-5" style={{ color: plan.highlight ? "rgba(255,255,255,0.4)" : "#9ca3af" }}>{plan.annual}</p>}
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
                      {plan.highlight && (
                        <div className="mt-2 inline-block px-3 py-0.5 rounded-full text-xs font-bold"
                          style={{ background: "rgba(5,173,238,0.2)", color: "#05ADEE" }}>Most Popular</div>
                      )}
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

          <motion.div {...fadeUp(0.15)} className="mt-8 rounded-2xl p-5 sm:p-6"
            style={{ background: "white", border: "1px solid rgba(5,173,238,0.12)" }}>
            <p className="text-sm font-bold mb-3" style={{ color: "#0A0947" }}>Included in every plan:</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["14-day free trial", "SSL security", "99.9% uptime SLA", "Mobile responsive", "Automatic updates"].map((item, i) => (
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
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#0A0947" }}>System Requirements</h2>
            <p className="text-gray-500 mt-2">Cloud-based — no local installation required.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Browser support table */}
            <motion.div {...fadeUp(0.08)} className="overflow-hidden rounded-2xl"
              style={{ border: "1px solid rgba(5,173,238,0.12)" }}>
              <div className="px-6 py-4" style={{ background: "#0A0947" }}>
                <p className="text-white font-semibold flex items-center gap-2">
                  <Monitor className="w-4 h-4" style={{ color: "#05ADEE" }} /> Browser Support
                </p>
              </div>
              <table className="w-full">
                <thead>
                  <tr style={{ background: "#f8fafc" }}>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Browser</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Min. Version</th>
                    <th className="px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {browserRows.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#f8fafc" }}>
                      <td className="px-5 py-3 text-sm font-medium" style={{ color: "#0A0947" }}>{row.browser}</td>
                      <td className="px-5 py-3 text-sm text-gray-500">{row.version}</td>
                      <td className="px-5 py-3 text-center"><Check className="w-4 h-4 mx-auto" style={{ color: "#05ADEE" }} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Requirements list */}
            <motion.div {...fadeUp(0.12)} className="overflow-hidden rounded-2xl"
              style={{ border: "1px solid rgba(5,173,238,0.12)" }}>
              <div className="px-6 py-4" style={{ background: "#0A0947" }}>
                <p className="text-white font-semibold flex items-center gap-2">
                  <Globe className="w-4 h-4" style={{ color: "#05ADEE" }} /> Access Requirements
                </p>
              </div>
              <table className="w-full">
                <tbody>
                  {sysRows.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#f8fafc" }}>
                      <td className="px-5 py-3.5 text-sm font-medium text-gray-500 w-2/5">{row.label}</td>
                      <td className="px-5 py-3.5 text-sm font-semibold" style={{ color: "#0A0947" }}>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
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
                Ready to Move Your Business to the <span style={{ background: "linear-gradient(90deg,#05ADEE,#38d2f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Cloud?</span>
              </h2>
              <p className="text-base sm:text-lg mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
                Start a free 14-day trial — no credit card required, no infrastructure needed.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-2xl"
                style={{ background: "linear-gradient(135deg,#05ADEE,#0496d5)", boxShadow: "0 8px 28px rgba(5,173,238,0.3)" }}>
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BusinessAssistant;