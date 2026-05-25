"use client";

import {
  Cloud, BarChart,
  Users, Zap, Shield, Database,
} from "lucide-react";
import { ProductOverview } from "./components/ProductOverview";
import { Features } from "./components/Features";
import { Modules } from "./components/Modules";
import { SystemRequirements } from "./components/SystemRequirements";
import { CTA } from "./components/CTA";

const BusinessAssistant = () => {
  const features = [
    { icon: Cloud, title: "Cloud + Offline Mobile", description: "Full-featured mobile app that works completely offline on POS terminals with automatic sync when back online." },
    { icon: BarChart, title: "Advanced Analytics", description: "Real-time dashboards and reporting with customisable KPIs and built-in business intelligence." },
    { icon: Users, title: "Progressive Business Modules", description: "Start with CRM + Invoicing and unlock Inventory, Accounting, Corporate, Production or Hospitality as you grow." },
    { icon: Zap, title: "EFRIS Ready", description: "Optional integrated EFRIS compliance for Uganda Revenue Authority reporting on supported plans." },
    { icon: Shield, title: "Enterprise Security", description: "Bank-grade encryption, role-based access, two-factor authentication, and comprehensive audit trails." },
    { icon: Database, title: "API & Integrations", description: "Connect with third-party services via REST APIs, webhooks, and a growing library of connectors." },
  ];

  const modules = [
    { name: "CRM + Invoicing", features: ["Customer management", "Quotations & invoices", "Payment tracking", "Sales pipeline"] },
    { name: "Inventory", features: ["Real-time stock control", "Multi-location", "Purchase orders", "Low-stock alerts"] },
    { name: "Accounting", features: ["General ledger", "Financial reports", "Tax & EFRIS compliance", "Bank reconciliation"] },
    { name: "Corporate", features: ["Multi-branch", "Consolidated reporting", "Advanced permissions", "Group management"] },
    { name: "Production", features: ["Bill of materials", "Manufacturing orders", "Costing & planning"] },
    { name: "Hospitality", features: ["Table management", "Reservations", "Kitchen display", "Guest billing"] },
  ];

  // Business Assistant Cloud — updated tiered pricing
  const cloudPlans = [
    {
      license: "Solo Flight",
      features: "CRM + Invoicing",
      maxUsers: "1",
      tills: "1",
      multiCurrency: "1",
      withEFRIS: "80,000",
      withoutEFRIS: "50,000",
      highlight: false,
    },
    {
      license: "Deluxe",
      features: "RM + Invoicing + Inventory",
      maxUsers: "3",
      tills: "1",
      multiCurrency: "1",
      withEFRIS: "150,000",
      withoutEFRIS: "120,000",
      highlight: false,
    },
    {
      license: "Classic",
      features: "RM + Invoicing + Inventory + Accounting",
      maxUsers: "6",
      tills: "2",
      multiCurrency: "X",
      withEFRIS: "250,000",
      withoutEFRIS: "180,000",
      highlight: true,
    },
    {
      license: "Corporate",
      features: "RM + Invoicing + Inventory + Accounting + Corporate",
      maxUsers: "8",
      tills: "3",
      multiCurrency: "X",
      withEFRIS: "350,000",
      withoutEFRIS: "300,000",
      highlight: false,
    },
    {
      license: "Investor",
      features: "RM + Invoicing + Inventory + Accounting + Production",
      maxUsers: "10",
      tills: "4",
      multiCurrency: "X",
      withEFRIS: "450,000",
      withoutEFRIS: "400,000",
      highlight: false,
    },
    {
      license: "Hospitality",
      features: "RM + Invoicing + Inventory + Accounting + Hospitality",
      maxUsers: "10",
      tills: "4",
      multiCurrency: "X",
      withEFRIS: "450,000",
      withoutEFRIS: "400,000",
      highlight: false,
    },
    {
      license: "Platinum",
      features: "RM + Invoicing + Inventory + Accounting + Corporate + Other",
      maxUsers: "15 – 25",
      tills: "6",
      multiCurrency: "X",
      withEFRIS: "750,000",
      withoutEFRIS: "700,000",
      highlight: false,
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
    { label: "Offline Mode", value: "Full offline mobile app for POS terminals with sync" },
  ];

  return (
    <div className="min-h-screen bg-white pt-20" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <ProductOverview />
      <Features features={features} />
      <Modules modules={modules} />

      {/* Business Assistant Cloud Pricing — updated per spec */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-2" style={{ color: "#05ADEE" }}>Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#0A0947" }}>Business Assistant Cloud — Transparent Pricing</h2>
            <p className="text-gray-500 mt-3">All prices in UGX per month. Choose With or Without EFRIS integration.</p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A0947] text-white">
                  <th className="px-4 py-4 text-left font-semibold">License</th>
                  <th className="px-4 py-4 text-left font-semibold">Features</th>
                  <th className="px-4 py-4 text-center font-semibold">Max Users</th>
                  <th className="px-4 py-4 text-center font-semibold">Tills</th>
                  <th className="px-4 py-4 text-center font-semibold">Multi-Currency</th>
                  <th className="px-4 py-4 text-right font-semibold bg-emerald-900/70">With EFRIS (UGX)</th>
                  <th className="px-4 py-4 text-right font-semibold bg-amber-900/60">Without EFRIS (UGX)</th>
                </tr>
              </thead>
              <tbody>
                {cloudPlans.map((plan, idx) => (
                  <tr key={idx} className={plan.highlight ? "bg-[#05ADEE]/5 font-medium" : idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-4 font-semibold" style={{ color: "#0A0947" }}>{plan.license}</td>
                    <td className="px-4 py-4 text-gray-600">{plan.features}</td>
                    <td className="px-4 py-4 text-center">{plan.maxUsers}</td>
                    <td className="px-4 py-4 text-center">{plan.tills}</td>
                    <td className="px-4 py-4 text-center font-mono">{plan.multiCurrency}</td>
                    <td className="px-4 py-4 text-right font-semibold text-emerald-700">{plan.withEFRIS}</td>
                    <td className="px-4 py-4 text-right font-semibold text-amber-700">{plan.withoutEFRIS}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {cloudPlans.map((plan, idx) => (
              <div key={idx} className={`rounded-2xl border p-5 ${plan.highlight ? "border-[#05ADEE] bg-[#05ADEE]/5" : "border-slate-200"}`}>
                <div className="flex items-baseline justify-between mb-3">
                  <div className="font-bold text-lg" style={{ color: "#0A0947" }}>{plan.license}</div>
                  {plan.highlight && <span className="text-xs px-2 py-0.5 rounded-full bg-[#05ADEE] text-white">Popular</span>}
                </div>
                <div className="text-sm text-gray-600 mb-3">{plan.features}</div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm mb-4">
                  <div>Max Users: <span className="font-semibold">{plan.maxUsers}</span></div>
                  <div>Tills: <span className="font-semibold">{plan.tills}</span></div>
                  <div>Multi-Currency: <span className="font-mono">{plan.multiCurrency}</span></div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-1 bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-center">
                    <div className="text-[10px] text-emerald-600 font-medium">WITH EFRIS</div>
                    <div className="text-lg font-bold text-emerald-700">UGX {plan.withEFRIS}</div>
                  </div>
                  <div className="flex-1 bg-amber-50 border border-amber-200 rounded-xl p-3 text-center">
                    <div className="text-[10px] text-amber-600 font-medium">WITHOUT EFRIS</div>
                    <div className="text-lg font-bold text-amber-700">UGX {plan.withoutEFRIS}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-gray-600">
            <strong className="text-[#0A0947]">Mobile App Included:</strong> Every plan comes with the Business Assistant mobile application that works fully offline and can be used on mobile POS terminals. Data syncs automatically when back online.
          </div>

          <div className="mt-8 text-center">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5"
               style={{ background: "linear-gradient(135deg,#05ADEE,#0496d5)" }}>
              Book Demo or Get Started
            </a>
          </div>
        </div>
      </section>

      <SystemRequirements browserRows={browserRows} sysRows={sysRows} />
      <CTA />
    </div>
  );
};

export default BusinessAssistant;