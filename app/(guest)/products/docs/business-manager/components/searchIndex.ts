const base = "/products/docs/business-manager";

export interface SearchEntry {
  title: string;
  href: string;
  group: string;
  description: string;
  keywords: string[];
}

export const searchIndex: SearchEntry[] = [
  {
    title: "Installation Guide",
    href: `${base}/installation`,
    group: "Getting Started",
    description: "Install Business Manager on Windows servers and client terminals.",
    keywords: ["install", "setup", "sql server", "database", "windows", "license", "wizard", "administrator"],
  },
  {
    title: "System Requirements",
    href: `${base}/requirements`,
    group: "Getting Started",
    description: "Minimum and recommended hardware and software prerequisites.",
    keywords: ["requirements", "hardware", "ram", "processor", "ssd", "windows", "net framework", "sql server", "specs"],
  },
  {
    title: "Quick Start",
    href: `${base}/quickstart`,
    group: "Getting Started",
    description: "From login to your first sale in under 30 minutes.",
    keywords: ["quick start", "login", "first sale", "getting started", "sections", "back office"],
  },
  {
    title: "Creditors & Suppliers",
    href: `${base}/creditors`,
    group: "Back Office",
    description: "Manage suppliers, verify TIN numbers and track credit.",
    keywords: ["creditors", "suppliers", "vendor", "tin", "ura", "credit", "contact", "new creditor"],
  },
  {
    title: "Goods Receipt",
    href: `${base}/goods-receipt`,
    group: "Back Office",
    description: "Record incoming inventory and update stock automatically.",
    keywords: ["goods receipt", "receive stock", "consignment", "fully paid", "barcode", "expiry", "cost price", "markup", "rrp", "vat", "efris code"],
  },
  {
    title: "Stock Adjustment & Transfers",
    href: `${base}/stock-adjustment`,
    group: "Back Office",
    description: "Correct stock for damages, expiries and transfer between stores.",
    keywords: ["stock adjustment", "stock take", "transfer", "damages", "expiries", "variance", "donor", "recipient store"],
  },
  {
    title: "POS Operations",
    href: `${base}/pos-operation`,
    group: "Sales & Supermarket",
    description: "Front-counter sales: tender, hold, sundry, client and receipts.",
    keywords: ["pos", "point of sale", "tender", "hold", "sundry", "client", "discount", "paid", "change", "receipt", "sale"],
  },
  {
    title: "Cashier Returns & Shifts",
    href: `${base}/cashier-returns`,
    group: "Sales & Supermarket",
    description: "Cashier declarations, float, remittance and day/night shifts.",
    keywords: ["cashier", "returns", "declaration", "float", "remittance", "shift", "day night", "audit", "reconcile cash"],
  },
  {
    title: "Damages, Expiries & Outgoing Stock",
    href: `${base}/inventory`,
    group: "Sales & Supermarket",
    description: "Record supermarket losses, outgoing stock, supply and shop stock take.",
    keywords: ["damages", "expiries", "outgoing stock", "stock supply", "shop stock take", "supermarket inventory"],
  },
  {
    title: "Invoices, A/P & A/R",
    href: `${base}/invoices`,
    group: "Finances",
    description: "Invoices, accounts payable and accounts receivable.",
    keywords: ["invoices", "accounts payable", "accounts receivable", "ap", "ar", "goods bought", "services", "utilities", "miscellaneous", "payment"],
  },
  {
    title: "Credit & Debit Notes",
    href: `${base}/credit-notes`,
    group: "Finances",
    description: "Adjust vendor and customer balances for returns and corrections.",
    keywords: ["credit note", "debit note", "vendor", "return", "overcharge", "undercharge", "adjustment", "reconcile"],
  },
  {
    title: "Journal Entries & Bank",
    href: `${base}/journal-entries`,
    group: "Finances",
    description: "General ledger, bank transactions, cheque clearing, loans and interest.",
    keywords: ["journal entry", "general ledger", "debit", "credit", "bank", "cheque clearing", "loans", "advances", "interest", "imprest", "financial utilities", "period closure"],
  },
  {
    title: "Staff & Attendance",
    href: `${base}/staff`,
    group: "Human Resources",
    description: "Employee records, clocking and daily attendance.",
    keywords: ["staff", "employees", "human resource", "hr", "attendance", "clocking", "shifts"],
  },
  {
    title: "Payroll, Allowances & Bonuses",
    href: `${base}/payroll`,
    group: "Human Resources",
    description: "Process wages from attendance and manage extra earnings.",
    keywords: ["payroll", "wages", "salary", "allowances", "bonuses", "payslips", "pay run"],
  },
  {
    title: "Configuration Guide",
    href: `${base}/configuration`,
    group: "Configuration & Security",
    description: "Users, roles, privileges, inventory setup, lookups and charts of accounts.",
    keywords: ["configuration", "users", "user roles", "privileges", "permissions", "lookups", "cost centres", "charts of accounts", "inventory setup"],
  },
  {
    title: "Network & EFRIS",
    href: `${base}/network`,
    group: "Configuration & Security",
    description: "Multi-terminal LAN setup and URA EFRIS compliance.",
    keywords: ["network", "lan", "multi terminal", "server", "ip", "firewall", "efris", "ura", "compliance", "vat"],
  },
  {
    title: "Sales & Stock Reports",
    href: `${base}/reporting`,
    group: "Reports & Analytics",
    description: "Quantitative and qualitative reports on sales and inventory.",
    keywords: ["reports", "sales reports", "stock reports", "top selling", "stock status", "reorder", "audit trail", "price history", "teller performance"],
  },
  {
    title: "Financial Reports",
    href: `${base}/financial-reports`,
    group: "Reports & Analytics",
    description: "Income statement, balance sheet, trial balance and cash flow.",
    keywords: ["financial reports", "income statement", "profit loss", "balance sheet", "trial balance", "statement of account", "outstanding invoices", "imprest"],
  },
  {
    title: "Administrative Reports",
    href: `${base}/admin-reports`,
    group: "Reports & Analytics",
    description: "Attendance, data-entry status and business value metrics.",
    keywords: ["administrative reports", "attendance", "data entry", "gross profit", "stock value", "cash flow", "negative stock", "negative profit"],
  },
  {
    title: "Hardware Integration",
    href: `${base}/pos-hardware`,
    group: "Point of Sale",
    description: "Printers, scanners, weighing scales and barcode utilities.",
    keywords: ["hardware", "printer", "scanner", "weighing scale", "barcode", "price tags", "shelf labels", "ip address", "utilities"],
  },
  {
    title: "Backup & Recovery",
    href: `${base}/backup`,
    group: "Maintenance & Support",
    description: "Protect data with regular backups and a recovery plan.",
    keywords: ["backup", "recovery", "restore", "database", "data loss", "offsite", "schedule"],
  },
  {
    title: "Troubleshooting Guide",
    href: `${base}/troubleshooting`,
    group: "Maintenance & Support",
    description: "Network, database, printer, EFRIS and performance issues.",
    keywords: ["troubleshooting", "errors", "network", "database", "printer", "efris", "performance", "login", "support", "diagnostics"],
  },
];
