"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShoppingCart, Check, ArrowRight, Download, FileText,
  Wifi, WifiOff, Database, Printer, Users, Shield,
  HardDrive, Monitor, ChevronRight, X,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

const BusinessManager = () => {
  const features = [
    { icon: WifiOff, title: "Offline POS", description: "Complete POS functionality without internet. Built for African retail environments where connectivity is unreliable." },
    { icon: Database, title: "Inventory Tracking", description: "Track stock levels, movements, and valuations across multiple locations in real-time." },
    { icon: Wifi, title: "LAN Synchronisation", description: "Local network sync ensures data consistency across all terminals without needing internet." },
    { icon: Users, title: "Multi-Location", description: "Manage multiple branches with centralised reporting and control from a single interface." },
    { icon: Printer, title: "Receipts & Invoicing", description: "Print professional receipts, invoices, and reports with customisable templates." },
    { icon: Shield, title: "EFRIS Compliance", description: "Fully compliant with Uganda Revenue Authority's EFRIS electronic fiscal receipting requirements." },
  ];

  const modules = [
    { name: "Point of Sale", features: ["Quick sales processing", "Returns & refunds", "Multiple payment methods", "Customer display support"] },
    { name: "Inventory Management", features: ["Stock receipts & issuance", "Stock adjustments", "Inter-branch transfers", "Low-stock alerts"] },
    { name: "Invoicing", features: ["Quotations & proformas", "Sales orders", "Credit notes", "EFRIS receipts"] },
    { name: "Reporting", features: ["Daily sales reports", "Stock valuation reports", "Financial summaries", "Custom dashboards"] },
    { name: "Security", features: ["Role-based access control", "Full audit trails", "Secure login", "Data encryption"] },
    { name: "Customer Management", features: ["Customer database", "Loyalty programmes", "Credit management", "Purchase history"] },
  ];

  const plans = [
    {
      name: "Starter Pack",
      price: "UGX 2,500,000",
      billing: "One-time licence",
      maintenance: "+ UGX 250,000 / year",
      highlight: true,
      cta: "Get Started",
      features: [
        { label: "Dedicated POS", value: true },
        { label: "All-Inclusive Inventory", value: true },
        { label: "Goods Return Support", value: true },
        { label: "Real-Time Change Management", value: true },
        { label: "Automated Shelf Price Tags", value: true },
        { label: "Real-Time Comprehensive Reporting", value: true },
        { label: "Unlimited Users", value: true },
        { label: "Free Support", value: true },
        { label: "Regular Updates", value: true },
      ],
    },
    {
      name: "Power Pack",
      price: "UGX 1,500,000", // Kept as requested
      billing: "One-time licence",
      maintenance: "+ UGX 250,000 / year",
      highlight: false,
      cta: "Get Started",
      features: [
        { label: "All Starter Pack features", value: true },
        { label: "Standard Accounting", value: true },
        { label: "Purchase Order & Consignment", value: true },
        { label: "Bank Transactions Tracking", value: true },
        { label: "Credit Customer Management", value: true },
        { label: "Loyalty Card Printing", value: true },
        { label: "Vendor/Customer Statements", value: true },
        { label: "Barcode Printing", value: true },
      ],
    },
    {
      name: "Ultimate Pack",
      price: "UGX 3,500,000",
      billing: "One-time licence",
      maintenance: "+ UGX 350,000 / year",
      highlight: false,
      cta: "Get Started",
      features: [
        { label: "All Power Pack features", value: true },
        { label: "System Assisted Bank Reconciliation", value: true },
        { label: "Accounting Journal Entries", value: true },
        { label: "Advanced Financial Reports", value: true },
        { label: "Staff Payroll & Attendance", value: true },
        { label: "Staff ID Card Printing", value: true },
        { label: "Multiple Store/Shop Management", value: true },
        { label: "Weighing Scale Automation", value: true },
      ],
    },
  ];

  const comparisonRows = [
    { label: "Dedicated POS", s: true, p: true, u: true },
    { label: "All-Inclusive Inventory", s: true, p: true, u: true },
    { label: "Goods Return Support", s: true, p: true, u: true },
    { label: "Real-Time Change Management", s: true, p: true, u: true },
    { label: "Automated Shelf Price Tags", s: true, p: true, u: true },
    { label: "Real-Time Comprehensive Reporting", s: true, p: true, u: true },
    { label: "Unlimited Users", s: true, p: true, u: true },
    { label: "Free Support", s: true, p: true, u: true },
    { label: "Regular Updates", s: true, p: true, u: true },
    { label: "Standard Accounting", s: false, p: true, u: true },
    { label: "Purchase Order & Consignment", s: false, p: true, u: true },
    { label: "Bank Transactions Tracking", s: false, p: true, u: true },
    { label: "Credit Customer Management", s: false, p: true, u: true },
    { label: "Loyalty Card Printing", s: false, p: true, u: true },
    { label: "Vendor/Customer Statements", s: false, p: true, u: true },
    { label: "Barcode Printing", s: false, p: true, u: true },
    { label: "System Assisted Bank Reconciliation", s: false, p: false, u: true },
    { label: "Accounting Journal Entries", s: false, p: false, u: true },
    { label: "Advanced Financial Reports", s: false, p: false, u: true },
    { label: "Staff Payroll & Attendance", s: false, p: false, u: true },
    { label: "Staff ID Card Printing", s: false, p: false, u: true },
    { label: "Multiple Store/Shop Management", s: false, p: false, u: true },
    { label: "Weighing Scale Automation", s: false, p: false, u: true },
  ];

  const specRows = [
    { label: "Minimum CPU", client: "Intel Core i3", server: "Intel Core i5" },
    { label: "Minimum RAM", client: "4 GB", server: "8 GB" },
    { label: "Storage", client: "50 GB", server: "100 GB+" },
    { label: "OS Support", client: "Windows 10/11", server: "Windows Server 2016+" },
    { label: "Network", client: "LAN (100 Mbps+)", server: "Static IP recommended" },
    { label: "Internet", client: "Optional", server: "Optional" },
  ];

  return (
    <div className="min-h-screen bg-white pt-20" style={{ fontFamily: "'DM Sans', sans-serif" }}>

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
                <ShoppingCart className="w-3.5 h-3.5" />
                Business Manager
              </div>

              <h1
                className="text-4xl sm:text-5xl font-bold leading-tight mb-5"
                style={{ color: "#0A0947" }}
              >
                Offline POS & Inventory
                <br />
                Management System
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                A modern retail management platform built for businesses that need
                reliable offline sales, inventory tracking, EFRIS compliance,
                LAN synchronisation, and multi-branch operations.
              </p>
            </div>

            {/* Right */}
            <div className="grid grid-cols-2 gap-4 min-w-[280px]">
              {[
                ["Offline First", "No internet required"],
                ["EFRIS Ready", "URA compliant"],
                ["Multi-Branch", "Centralised control"],
                ["LAN Sync", "Real-time local sync"],
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

          {/* CTA Row */}
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
              href="/products/docs/business-manager"
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

      <section className="py-16 sm:py-24 " style={{ background: "linear-gradient(135deg,#f0f9ff 0%,#e8f4fd 50%,#f0faff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-12 sm:mb-16" {...fadeUp()}>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-2" style={{ color: "#05ADEE" }}>Core Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#0A0947" }}>Everything You Need to Run Retail</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {features.map((f, i) => (
              <motion.div key={i} {...fadeUp(i * 0.06)}
                whileHover={{ y: -5 }}
                className="group rounded-2xl p-6 sm:p-7 cursor-default transition-all duration-300"
                style={{ border: "1px solid #e8edf2" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(5,173,238,0.35)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(5,173,238,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8edf2"; e.currentTarget.style.boxShadow = "none"; }}>
                <div className="w-11 h-11 rounded-xl flex items-center bg-blue-50 justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                >
                  <f.icon className="w-5 h-5" style={{ color: "#05ADEE" }} />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: "#0A0947" }}>{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── MODULES TABLE ─────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-12" {...fadeUp()}>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-2" style={{ color: "#05ADEE" }}>Modules</p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#0A0947" }}>Comprehensive Functionality</h2>
            <p className="text-gray-500 mt-3">Every module ships standard — no add-on fees.</p>
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
                      <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "#05ADEE" }} />
                      {feat}
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
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#0A0947" }}>Flexible Licensing Options</h2>
            <p className="text-gray-500 mt-3">One-time licence fees — own it forever.</p>
          </motion.div>

          {/* Mobile: card stack */}
          <div className="flex flex-col gap-6 lg:hidden">
            {plans.map((plan, pi) => (
              <motion.div key={pi} {...fadeUp(pi * 0.08)}
                className="rounded-2xl p-6 relative"
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
                {plan.maintenance && <p className="text-xs mb-5" style={{ color: plan.highlight ? "rgba(255,255,255,0.4)" : "#9ca3af" }}>{plan.maintenance}</p>}
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-center justify-between text-sm gap-3">
                      <span style={{ color: plan.highlight ? "rgba(255,255,255,0.6)" : "#6b7280" }}>{f.label}</span>
                      {typeof f.value === "boolean"
                        ? f.value
                          ? <Check className="w-4 h-4 shrink-0" style={{ color: "#05ADEE" }} />
                          : <X className="w-4 h-4 shrink-0 text-gray-300" />
                        : <span className="font-semibold text-right" style={{ color: plan.highlight ? "white" : "#0A0947" }}>{f.value}</span>}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all"
                  style={plan.highlight
                    ? { background: "linear-gradient(135deg,#05ADEE,#0496d5)", color: "white", boxShadow: "0 6px 20px rgba(5,173,238,0.35)" }
                    : { background: "rgba(5,173,238,0.08)", color: "#0A0947" }}>
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop: comparison table */}
          <motion.div {...fadeUp(0.1)} className="hidden lg:block rounded-3xl overflow-hidden shadow-xl"
            style={{ border: "1px solid rgba(5,173,238,0.12)" }}>
            <table className="w-full">
              <thead>
                <tr style={{ background: "#0A0947" }}>
                  <th className="text-left px-7 py-5 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.5)", width: "28%" }}>
                    Feature
                  </th>
                  {plans.map((plan, pi) => (
                    <th key={pi} className="px-6 py-5 text-center relative" style={{ width: "24%" }}>
                      {plan.highlight && (
                        <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "#05ADEE" }} />
                      )}
                      <div className="text-white font-bold text-base">{plan.name}</div>
                      <div className="text-2xl font-bold mt-1" style={{ color: "#05ADEE" }}>{plan.price}</div>
                      <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{plan.billing}</div>
                      {plan.maintenance && <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{plan.maintenance}</div>}
                      {plan.highlight && (
                        <div className="mt-2 inline-block px-3 py-0.5 rounded-full text-xs font-bold"
                          style={{ background: "rgba(5,173,238,0.2)", color: "#05ADEE" }}>Most Popular</div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, fi) => (
                  <tr key={fi} style={{ background: fi % 2 === 0 ? "white" : "#f8fafc" }}>
                    <td className="px-7 py-4 text-sm font-medium text-gray-600">{row.label}</td>
                    {[row.s, row.p, row.u].map((val, pi) => (
                      <td key={pi} className="px-6 py-4 text-center text-sm"
                        style={{ borderLeft: pi === 1 ? "1px solid rgba(5,173,238,0.12)" : undefined, background: pi === 1 ? "rgba(5,173,238,0.02)" : undefined }}>
                        {typeof val === "boolean"
                          ? val
                            ? <Check className="w-5 h-5 mx-auto" style={{ color: "#05ADEE" }} />
                            : <X className="w-5 h-5 mx-auto text-gray-200" />
                          : <span className="font-semibold" style={{ color: "#0A0947" }}>{val}</span>}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr style={{ background: "#f8fafc" }}>
                  <td className="px-7 py-5" />
                  {plans.map((plan, pi) => (
                    <td key={pi} className="px-6 py-5 text-center"
                      style={{ borderLeft: pi === 1 ? "1px solid rgba(5,173,238,0.12)" : undefined, background: pi === 1 ? "rgba(5,173,238,0.02)" : undefined }}>
                      <Link href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
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

          {/* Included in all plans */}
          <motion.div {...fadeUp(0.15)} className="mt-8 rounded-2xl p-5 sm:p-6"
            style={{ background: "white", border: "1px solid rgba(5,173,238,0.12)" }}>
            <p className="text-sm font-bold mb-3" style={{ color: "#0A0947" }}>Included in every plan:</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["EFRIS compliance", "Free updates", "Installation support", "Training materials"].map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-sm text-gray-500">
                  <Check className="w-4 h-4" style={{ color: "#05ADEE" }} /> {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SYSTEM REQUIREMENTS TABLE ─────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-10" {...fadeUp()}>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-2" style={{ color: "#05ADEE" }}>Technical</p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#0A0947" }}>System Requirements</h2>
          </motion.div>

          {/* Scrollable on small screens */}
          <motion.div {...fadeUp(0.1)} className="overflow-x-auto rounded-2xl shadow-sm"
            style={{ border: "1px solid rgba(5,173,238,0.12)" }}>
            <table className="w-full min-w-135">
              <thead>
                <tr style={{ background: "#0A0947" }}>
                  <th className="text-left px-6 py-4 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>Specification</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-white">Client Machine</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-white">Server</th>
                </tr>
              </thead>
              <tbody>
                {specRows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#f8fafc" }}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-500">{row.label}</td>
                    <td className="px-6 py-4 text-sm font-semibold" style={{ color: "#0A0947" }}>{row.client}</td>
                    <td className="px-6 py-4 text-sm font-semibold" style={{ color: "#0A0947" }}>{row.server}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* OS icons row */}
          <motion.div {...fadeUp(0.15)} className="mt-6 flex flex-wrap gap-3">
            {[
              { icon: Monitor, label: "Windows 10 / 11" },
              { icon: HardDrive, label: "Windows Server 2016+" },
            ].map((os, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium"
                style={{ background: "#f8fafc", border: "1px solid rgba(5,173,238,0.1)", color: "#0A0947" }}>
                <os.icon className="w-4 h-4" style={{ color: "#05ADEE" }} /> {os.label}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()}
            className="relative overflow-hidden rounded-[2rem] p-10 sm:p-16 text-center"
            style={{ background: "linear-gradient(135deg,#0A0947 0%,#0d1168 55%,#0a3070 100%)" }}>
            <div className="absolute top-0 right-0 w-100 h-100 rounded-full pointer-events-none opacity-20"
              style={{ background: "radial-gradient(circle,#05ADEE 0%,transparent 65%)", transform: "translate(30%,-40%)" }} />
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "44px 44px" }} />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Transform Your <span style={{ background: "linear-gradient(90deg,#05ADEE,#38d2f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Retail Operations?</span>
              </h2>
              <p className="text-base sm:text-lg mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
                Book a free demo and see Business Manager running live in your store setup.
              </p>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-2xl"
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

export default BusinessManager;