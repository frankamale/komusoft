const base = "/products/docs/business-manager";

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
      { label: "Installation Guide", href: `${base}/installation` },
      { label: "System Requirements", href: `${base}/requirements` },
      { label: "Quick Start", href: `${base}/quickstart` },
    ],
  },
  {
    group: "Back Office",
    items: [
      { label: "Creditors & Suppliers", href: `${base}/creditors` },
      { label: "Goods Receipt", href: `${base}/goods-receipt` },
      { label: "Stock Adjustment & Transfers", href: `${base}/stock-adjustment` },
    ],
  },
  {
    group: "Sales & Supermarket",
    items: [
      { label: "POS Operations", href: `${base}/pos-operation` },
      { label: "Cashier Returns & Shifts", href: `${base}/cashier-returns` },
      { label: "Damages, Expiries & Outgoing Stock", href: `${base}/inventory` },
    ],
  },
  {
    group: "Finances",
    items: [
      { label: "Invoices, A/P & A/R", href: `${base}/invoices` },
      { label: "Credit & Debit Notes", href: `${base}/credit-notes` },
      { label: "Journal Entries & Bank", href: `${base}/journal-entries` },
    ],
  },
  {
    group: "Human Resources",
    items: [
      { label: "Staff & Attendance", href: `${base}/staff` },
      { label: "Payroll, Allowances & Bonuses", href: `${base}/payroll` },
    ],
  },
  {
    group: "Configuration & Security",
    items: [
      { label: "Configuration Guide", href: `${base}/configuration` },
      { label: "Network & EFRIS", href: `${base}/network` },
    ],
  },
  {
    group: "Reports & Analytics",
    items: [
      { label: "Sales & Stock Reports", href: `${base}/reporting` },
      { label: "Financial Reports", href: `${base}/financial-reports` },
      { label: "Administrative Reports", href: `${base}/admin-reports` },
    ],
  },
  {
    group: "Point of Sale",
    items: [
      { label: "POS Interface Guide", href: `${base}/pos-operation` },
      { label: "Hardware Integration", href: `${base}/pos-hardware` },
    ],
  },
  {
    group: "Maintenance & Support",
    items: [
      { label: "Backup & Recovery", href: `${base}/backup` },
      { label: "Troubleshooting", href: `${base}/troubleshooting` },
    ],
  },
];

export const docBase = base;
