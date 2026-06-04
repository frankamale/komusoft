"use client";

import { Book, Settings, Users, Database, Shield, HelpCircle, Download, Code, HardDrive, BarChart3, FileText } from 'lucide-react';
import { Breadcrumb } from './components/Breadcrumb';
import { Header } from './components/Header';
import { DocSections } from './components/DocSections';
import { QuickLinks } from './components/QuickLinks';
import { SupportCTA } from './components/SupportCTA';

export function BusinessManagerDocs() {
  const docSections = [
    {
      title: "Getting Started",
      icon: Book,
      description: "Installation, requirements and initial setup",
      docs: [
        {
          title: "Installation Guide",
          path: "/products/docs/business-manager/installation",
          description: "Step-by-step for Windows servers and clients",
          icon: Download,
          time: "20 min read"
        },
        {
          title: "System Requirements",
          path: "/products/docs/business-manager/requirements",
          description: "Minimum & recommended hardware/software",
          icon: Settings,
          time: "8 min read"
        },
        {
          title: "Quick Start Guide",
          path: "/products/docs/business-manager/quickstart",
          description: "From login to first sale in 30 minutes",
          icon: Book,
          time: "12 min read"
        }
      ]
    },
    {
      title: "Back Office Navigation",
      icon: Database,
      description: "Core inventory, creditors, goods receipt, price manager & stock movements",
      docs: [
        {
          title: "Creditors & Suppliers",
          path: "/products/docs/business-manager/creditors",
          description: "Manage suppliers, TIN verification and credit tracking",
          icon: Users,
          time: "10 min read"
        },
        {
          title: "Goods Receipt",
          path: "/products/docs/business-manager/goods-receipt",
          description: "Record arrivals, consignment vs paid, packaging & expiry",
          icon: Database,
          time: "15 min read"
        },
        {
          title: "Stock Adjustment & Transfers",
          path: "/products/docs/business-manager/stock-adjustment",
          description: "Damages, expiries, shop stock take, inter-store transfers",
          icon: HardDrive,
          time: "14 min read"
        }
      ]
    },
    {
      title: "Sales & Supermarket Module",
      icon: BarChart3,
      description: "Daily sales, cashier shifts, returns, goods returned, cash summaries",
      docs: [
        {
          title: "POS Operations",
          path: "/products/docs/business-manager/pos-operation",
          description: "Transaction processing, hold/retrieve, tender types",
          icon: Database,
          time: "18 min read"
        },
        {
          title: "Cashier Returns & Shifts",
          path: "/products/docs/business-manager/cashier-returns",
          description: "Declarations, float, remittance and audit",
          icon: Users,
          time: "12 min read"
        },
        {
          title: "Damages, Expiries & Outgoing Stock",
          path: "/products/docs/business-manager/inventory",
          description: "Record losses and supermarket stock movements",
          icon: Database,
          time: "10 min read"
        }
      ]
    },
    {
      title: "Finances & Accounting",
      icon: Shield,
      description: "Invoices, A/P, A/R, credit/debit notes, journal entries, bank",
      docs: [
        {
          title: "Invoices & Payments",
          path: "/products/docs/business-manager/invoices",
          description: "A/P goods bought, services, miscellaneous payables",
          icon: Database,
          time: "16 min read"
        },
        {
          title: "Credit & Debit Notes",
          path: "/products/docs/business-manager/credit-notes",
          description: "Vendor credits, customer adjustments and reconciliation",
          icon: FileText,
          time: "14 min read"
        },
        {
          title: "Journal Entries & Bank",
          path: "/products/docs/business-manager/journal-entries",
          description: "General ledger, cheque clearing, loans/advances, interest",
          icon: BarChart3,
          time: "20 min read"
        }
      ]
    },
    {
      title: "Human Resources",
      icon: Users,
      description: "Staff, attendance, clocking and payroll",
      docs: [
        {
          title: "Staff Members & Attendance",
          path: "/products/docs/business-manager/staff",
          description: "Employee records, clocking and daily attendance",
          icon: Users,
          time: "10 min read"
        },
        {
          title: "Payroll Processing",
          path: "/products/docs/business-manager/payroll",
          description: "Allowances, bonuses, payroll runs and payslips",
          icon: Settings,
          time: "15 min read"
        }
      ]
    },
    {
      title: "Configuration & Security",
      icon: Settings,
      description: "Users, roles, privileges, inventory setup, lookups and charts of accounts",
      docs: [
        {
          title: "Configuration Guide",
          path: "/products/docs/business-manager/configuration",
          description: "Complete system setup and customization",
          icon: Settings,
          time: "25 min read"
        },
        {
          title: "User Roles & Privileges",
          path: "/products/docs/business-manager/configuration",
          description: "Create roles and assign granular access rights",
          icon: Shield,
          time: "15 min read"
        },
        {
          title: "Network & EFRIS",
          path: "/products/docs/business-manager/network",
          description: "LAN multi-terminal + URA EFRIS compliance",
          icon: Database,
          time: "18 min read"
        }
      ]
    },
    {
      title: "Reports & Analytics",
      icon: BarChart3,
      description: "Quantitative, qualitative, financial and administrative reports",
      docs: [
        {
          title: "Sales & Stock Reports",
          path: "/products/docs/business-manager/reporting",
          description: "Top sellers, stock status, reorder levels, performance",
          icon: BarChart3,
          time: "12 min read"
        },
        {
          title: "Financial Reports",
          path: "/products/docs/business-manager/financial-reports",
          description: "Income statement, balance sheet, trial balance, cash flow",
          icon: Shield,
          time: "16 min read"
        },
        {
          title: "Administrative Reports",
          path: "/products/docs/business-manager/admin-reports",
          description: "Attendance, audit trail, business value metrics",
          icon: Users,
          time: "10 min read"
        }
      ]
    },
    {
      title: "Point of Sale (POS)",
      icon: Code,
      description: "Front-counter interface, action buttons, tenders and customer tools",
      docs: [
        {
          title: "POS Interface Guide",
          path: "/products/docs/business-manager/pos-operation",
          description: "Header buttons, search, client, hold, tender workflow",
          icon: Code,
          time: "15 min read"
        },
        {
          title: "Hardware Integration",
          path: "/products/docs/business-manager/pos-hardware",
          description: "Printers, scanners, weighing scales and cash drawers",
          icon: HardDrive,
          time: "12 min read"
        }
      ]
    },
    {
      title: "Maintenance & Support",
      icon: HelpCircle,
      description: "Backup, maintenance and troubleshooting",
      docs: [
        {
          title: "Backup & Recovery",
          path: "/products/docs/business-manager/backup",
          description: "Automated schedules and disaster recovery",
          icon: HardDrive,
          time: "10 min read"
        },
        {
          title: "Troubleshooting Guide",
          path: "/products/docs/business-manager/troubleshooting",
          description: "Network, database, printer, EFRIS and performance issues",
          icon: HelpCircle,
          time: "22 min read"
        }
      ]
    }
  ];

  const quickLinks = [
    {
      title: "Download Manual (PDF)",
      description: "Complete official printed manual",
      path: "/manual.pdf",
      icon: Download,
      download: true
    },

    {
      title: "Quick Start Guide",
      description: "From login to your first sale in 30 minutes",
      path: "/products/docs/business-manager/quickstart",
      icon: Book
    },
    {
      title: "Troubleshooting",
      description: "Fixes for network, database and printer issues",
      path: "/products/docs/business-manager/troubleshooting",
      icon: HelpCircle
    },
    {
      title: "Contact Support",
      description: "Get help from our experts",
      path: "/contact",
      icon: HelpCircle
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Breadcrumb />
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <DocSections docSections={docSections} />

        {/* Rich Product Overview & Manual Highlights (drawn from comprehensive user manual) */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Business Manager?</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Business Manager is an <strong>offline-ready</strong> desktop application with full LAN support, purpose-built for retail, supermarkets, pharmacies and hardware stores.
            It delivers complete inventory management, point-of-sale, integrated accounting and over 100 reports — even in areas with unreliable or no internet.
            Data security and privacy are guaranteed because everything runs locally on your servers.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Key Benefits</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-[#05ADEE]">•</span> <strong>Point of Sale (POS)</strong> — Fast dedicated interface with full peripheral support (printers, scanners, scales, cash drawers). Minimises errors with live balance, price &amp; quantity display.</li>
                <li className="flex gap-2"><span className="text-[#05ADEE]">•</span> <strong>Inventory Management</strong> — Goods receipt, stock adjustments, expiries, stock taking, goods returns, transfers and outgoing stock all fully tracked.</li>
                <li className="flex gap-2"><span className="text-[#05ADEE]">•</span> <strong>Integrated Accounting</strong> — Complete A/P, A/R, credit/debit notes, journal entries, bank reconciliation, loans/advances and financial statements.</li>
                <li className="flex gap-2"><span className="text-[#05ADEE]">•</span> <strong>Comprehensive Reporting</strong> — 100+ quantitative, qualitative, financial and administrative reports covering every aspect of the business.</li>
                <li className="flex gap-2"><span className="text-[#05ADEE]">•</span> <strong>Customer &amp; Vendor Management</strong> — Full records, gift vouchers, quotations, purchase orders, invoices and loyalty features.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Who It&apos;s For</h3>
              <p className="text-sm text-gray-700 mb-3">Ideal for any retail or resale business:</p>
              <div className="flex flex-wrap gap-2 text-sm">
                {["Supermarkets", "Pharmacies", "Hardware Shops", "General Retail", "Wholesale", "Multi-branch Operations"].map((b, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-gray-700">{b}</span>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">Three package tiers are available. Review exact feature matrix at <a href="https://www.komusoft.com" className="text-[#05ADEE] underline">www.komusoft.com</a>.</p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700">
            <strong>Real-world impact:</strong> Business owners report dramatically improved financial control, accurate payroll, real-time inventory visibility, seamless EFRIS compliance and faster month-end reporting after switching to Business Manager.
          </div>
        </div>

        <QuickLinks quickLinks={quickLinks} />
        <SupportCTA />
      </div>
    </div>
  );
}

export default function BusinessManagerDocsPage() {
  return <BusinessManagerDocs />;
}