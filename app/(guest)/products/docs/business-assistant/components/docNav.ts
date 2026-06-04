const base = "/products/docs/business-assistant";

export interface DocNavItem {
  label: string;
  href: string;
}

export interface DocNavGroup {
  group: string;
  items: DocNavItem[];
}

export const docNav: DocNavGroup[] = [
  {
    group: "Getting Started",
    items: [
      { label: "Account Setup", href: `${base}/setup` },
      { label: "Quick Start", href: `${base}/quickstart` },
      { label: "System Requirements", href: `${base}/requirements` },
    ],
  },
  {
    group: "Core Features",
    items: [
      { label: "Business Modules", href: `${base}/modules` },
      { label: "Dashboard & Analytics", href: `${base}/analytics` },
      { label: "Team & Permissions", href: `${base}/collaboration` },
    ],
  },
  {
    group: "Integrations",
    items: [
      { label: "API & Integrations", href: `${base}/api` },
      { label: "Payments & EFRIS", href: `${base}/payments` },
    ],
  },
  {
    group: "Security & Compliance",
    items: [
      { label: "Security & Access", href: `${base}/security` },
      { label: "Data Privacy & Audit", href: `${base}/privacy` },
    ],
  },
  {
    group: "Support",
    items: [
      { label: "Troubleshooting", href: `${base}/troubleshooting` },
    ],
  },
];

export const docBase = base;
