const base = "/products/docs/business-assistant";

export interface SearchEntry {
  title: string;
  href: string;
  group: string;
  description: string;
  keywords: string[];
}

export const searchIndex: SearchEntry[] = [
  {
    title: "Account Setup",
    href: `${base}/setup`,
    group: "Getting Started",
    description: "Create your account, choose a plan and configure your workspace.",
    keywords: ["setup", "account", "sign up", "create account", "plan", "billing", "company profile", "demo", "branding"],
  },
  {
    title: "Quick Start",
    href: `${base}/quickstart`,
    group: "Getting Started",
    description: "From sign-in to your first invoice in about 15 minutes.",
    keywords: ["quick start", "sign in", "first invoice", "customer", "crm", "getting started", "workspace"],
  },
  {
    title: "System Requirements",
    href: `${base}/requirements`,
    group: "Getting Started",
    description: "Browser support, connection and mobile device compatibility.",
    keywords: ["requirements", "browser", "chrome", "firefox", "safari", "edge", "internet", "mobile", "offline", "compatibility"],
  },
  {
    title: "Business Modules",
    href: `${base}/modules`,
    group: "Core Features",
    description: "CRM, Invoicing, Inventory, Accounting, Corporate, Production, Hospitality.",
    keywords: ["modules", "crm", "invoicing", "inventory", "accounting", "corporate", "production", "hospitality", "features"],
  },
  {
    title: "Dashboard & Analytics",
    href: `${base}/analytics`,
    group: "Core Features",
    description: "Real-time dashboards, KPIs and business reports.",
    keywords: ["dashboard", "analytics", "reports", "kpi", "widgets", "insights", "metrics", "export"],
  },
  {
    title: "Team & Permissions",
    href: `${base}/collaboration`,
    group: "Core Features",
    description: "Invite members, assign roles and manage access.",
    keywords: ["team", "collaboration", "invite", "members", "roles", "permissions", "access", "users"],
  },
  {
    title: "API & Integrations",
    href: `${base}/api`,
    group: "Integrations",
    description: "REST API, webhooks and third-party connectors.",
    keywords: ["api", "integrations", "rest", "webhooks", "api key", "token", "connectors", "rate limits"],
  },
  {
    title: "Payments & EFRIS",
    href: `${base}/payments`,
    group: "Integrations",
    description: "Payment gateways, mobile money and URA EFRIS compliance.",
    keywords: ["payments", "gateway", "mobile money", "card", "bank transfer", "efris", "ura", "compliance", "currency"],
  },
  {
    title: "Security & Access",
    href: `${base}/security`,
    group: "Security & Compliance",
    description: "Two-factor authentication, roles and account safety.",
    keywords: ["security", "2fa", "two factor", "authentication", "password", "encryption", "access control", "backup codes"],
  },
  {
    title: "Data Privacy & Audit",
    href: `${base}/privacy`,
    group: "Security & Compliance",
    description: "Data handling, backups and audit trails.",
    keywords: ["privacy", "data", "encryption", "ssl", "tls", "data residency", "backup", "export", "audit trail", "compliance"],
  },
  {
    title: "Troubleshooting Guide",
    href: `${base}/troubleshooting`,
    group: "Support",
    description: "Login, performance, sync, integrations and browser issues.",
    keywords: ["troubleshooting", "login", "performance", "sync", "data", "api", "payment", "browser", "mobile app", "support", "diagnostics"],
  },
];
