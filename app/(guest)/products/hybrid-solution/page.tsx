"use client";

import {
  WifiOff, Cloud, Globe, Zap, BarChart, Shield,
} from "lucide-react";
import { ProductOverview } from "./components/ProductOverview";
import { Features } from "./components/Features";
import { Modules } from "./components/Modules";
import { PricingTable } from "./components/PricingTable";
import { SystemRequirements } from "./components/SystemRequirements";
import { CTA } from "./components/CTA";

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
      cta: "Book Demo",
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
      cta: "Book Demo",
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
      <ProductOverview />
      <Features features={features} />
      <Modules modules={modules} />
      <PricingTable plans={plans} />
      <SystemRequirements specRows={specRows} />
      <CTA />
    </div>
  );
};

export default HybridManager;