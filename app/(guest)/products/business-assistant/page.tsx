"use client";

import {
  Cloud, BarChart,
  Users, Zap, Shield, Database,
} from "lucide-react";
import { ProductOverview } from "./components/ProductOverview";
import { Features } from "./components/Features";
import { Modules } from "./components/Modules";
import { PricingTable } from "./components/PricingTable";
import { SystemRequirements } from "./components/SystemRequirements";
import { CTA } from "./components/CTA";

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
      cta: "Book Demo",
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
      cta: "Book Demo",
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
      <ProductOverview />
      <Features features={features} />
      <Modules modules={modules} />
      <PricingTable plans={plans} />
      <SystemRequirements browserRows={browserRows} sysRows={sysRows} />
      <CTA />
    </div>
  );
};

export default BusinessAssistant;