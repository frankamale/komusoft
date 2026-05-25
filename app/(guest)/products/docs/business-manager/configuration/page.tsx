"use client";

import { ArrowLeft, Database, Users, Shield, BarChart3, Settings } from 'lucide-react';
import Link from 'next/link';

export function BusinessManagerConfiguration() {
  const configSections = [
    {
      title: "Users",
      icon: Users,
      description: "Create and manage system users (must first exist as staff in HR)",
      settings: [
        "Select staff member from HR records",
        "Assign unique login name and strong password",
        "Choose user role",
        "Tick 'Login Permitted' to activate account"
      ]
    },
    {
      title: "User Roles",
      icon: Shield,
      description: "Define the different job functions in your organisation",
      settings: [
        "Create role with ID and descriptive code",
        "Examples: Administrator, Manager, Cashier, Warehouse",
        "Edit or print the complete role list anytime"
      ]
    },
    {
      title: "User Privileges",
      icon: Shield,
      description: "Granular control — decide exactly what each role can see and do",
      settings: [
        "After creating roles, assign permissions per module",
        "Enable or disable menu items, buttons and reports",
        "Review and adjust privileges as staff responsibilities change"
      ]
    },
    {
      title: "Inventory",
      icon: Database,
      description: "Add or edit items without affecting current stock quantities",
      settings: [
        "Enter item code (or scan)",
        "Fill name, category, shop section, status (Active/Retired)",
        "Set measurement unit, VAT category and EFRIS code",
        "Define unit cost and selling prices (retail, wholesale, etc.)",
        "Save — full stock movements still go through Goods Receipt"
      ]
    },
    {
      title: "Lookups",
      icon: Settings,
      description: "Maintain the master lists that power the rest of the system",
      settings: [
        "Cost Centres, Stock Categories, Measurement Units",
        "Designations, Shop Sections, Tracker Items",
        "URA / EFRIS codes",
        "Simply switch subsection and click NEW to add entries"
      ]
    },
    {
      title: "Charts of Accounts",
      icon: BarChart3,
      description: "The complete list of GL accounts used for all financial postings",
      settings: [
        "View, edit, add or delete accounts",
        "Ensure correct mapping for journals, invoices and reports",
        "Changes affect all future financial transactions"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Documentation</Link>
            <span>/</span>
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Business Manager</Link>
            <span>/</span>
            <span className="text-[#05ADEE]">Configuration Guide</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/products/docs/business-manager"
              className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Configuration Guide</h1>
              <p className="text-gray-600">Complete setup and configuration for Business Manager</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-3">Configuration Overview</h2>
          <p className="text-blue-800">
            Proper configuration is essential for optimal performance and compliance. Follow these sections in order,
            starting with company information and progressing through each configuration area.
          </p>
        </div>

        {/* Configuration Sections */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {configSections.map((section, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#05ADEE] hover:shadow-lg transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#05ADEE]/10 rounded-xl flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-[#05ADEE]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{section.title}</h3>
                  <p className="text-gray-600 text-sm">{section.description}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {section.settings.map((setting, settingIndex) => (
                  <li key={settingIndex} className="flex items-start gap-2 text-gray-700 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#05ADEE] rounded-full mt-2 shrink-0"></div>
                    <span>{setting}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Detailed Configuration — following the official Business Manager User Manual */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Configuration (User Manual Style)</h2>

          <div className="space-y-10 text-gray-700">
            {/* 8.1 Users */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">8.1 Users</h3>
              <p className="mb-3">The Users section shows every current user of Business Manager.</p>
              <div className="bg-gray-50 border-l-4 border-[#05ADEE] pl-4 py-2 mb-3">
                <strong>To create a new user:</strong> First create the person in Human Resources → Staff Members. Then return here, click <strong>NEW</strong>, select the staff member, assign a login name and password, choose a role, and tick the “Login Permitted” checkbox.
              </div>
            </div>

            {/* 8.2 User Roles */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">8.2 User Roles</h3>
              <p className="mb-3">Roles define job functions. Click <strong>NEW</strong>, enter Role ID and a descriptive Code (e.g. “CASHIER”, “STOREMAN”). You can edit or print the full list at any time.</p>
            </div>

            {/* 8.3 User Privileges */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">8.3 User Privileges</h3>
              <p className="mb-3">After roles exist, assign exact permissions. Open the privileges screen, select a role, then tick or untick every menu, button and report that role should access. This is the most powerful security control in the system.</p>
            </div>

            {/* 8.4 Inventory */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">8.4 Inventory</h3>
              <p className="mb-3">This screen lets you add or edit items <strong>without</strong> changing stock quantities (use Goods Receipt for actual stock movements).</p>
              <ol className="list-decimal list-inside space-y-1 text-sm ml-4">
                <li>Click NEW or double-click an existing line.</li>
                <li>Enter or scan the item code.</li>
                <li>Fill: Name, Category, Shop Section, Status (Active / Retired), Measurement Unit, VAT Category, EFRIS code.</li>
                <li>Set cost price and all selling prices (Retail, Wholesale, Half-dozen, Dozen, etc.).</li>
                <li>Save.</li>
              </ol>
              <p className="text-xs text-gray-500 mt-2">Tip: You can also reach the same inventory form directly from Goods Receipt → New Item dialogue.</p>
            </div>

            {/* 8.5 Lookups */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">8.5 Lookups</h3>
              <p className="mb-2">Master data tables that appear in dropdowns everywhere:</p>
              <ul className="grid md:grid-cols-2 gap-x-6 text-sm list-disc list-inside ml-4">
                <li>Cost Centres</li>
                <li>Stock Categories</li>
                <li>Measurement Units</li>
                <li>Designations</li>
                <li>Shop Sections</li>
                <li>Tracker Items</li>
                <li>URA / EFRIS Codes</li>
              </ul>
              <p className="mt-2 text-sm">Simply click the subsection tab you need, then press the <strong>NEW</strong> button.</p>
            </div>

            {/* 8.6 Charts of Accounts */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">8.6 Charts of Accounts</h3>
              <p>Complete list of General Ledger accounts. Add, edit or delete accounts here. All journal entries, invoices and financial reports depend on these accounts being correctly configured.</p>
            </div>
          </div>
        </div>

        {/* Configuration Checklist */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-4">Configuration Checklist</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-green-900 mb-2">Essential Settings</h3>
              <ul className="space-y-1 text-green-800 text-sm">
                <li>✅ At least one Administrator user with login permitted</li>
                <li>✅ User Roles created and Privileges assigned</li>
                <li>✅ Core inventory items entered (or imported)</li>
                <li>✅ Lookups populated (categories, units, shop sections)</li>
                <li>✅ Charts of Accounts reviewed for your business</li>
                <li>✅ EFRIS credentials tested</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-green-900 mb-2">Recommended Next</h3>
              <ul className="space-y-1 text-green-800 text-sm">
                <li>🔄 Multi-terminal LAN &amp; firewall rules</li>
                <li>🔄 Printers &amp; weighing scale integration</li>
                <li>🔄 Receipt templates customised</li>
                <li>🔄 Staff clocking &amp; attendance configured</li>
                <li>🔄 First full backup taken</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-red-900 mb-4">Common Configuration Issues</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold text-red-900">User cannot log in after creation</h3>
              <p className="text-red-800">Make sure the staff member exists in HR, “Login Permitted” is ticked, and the chosen role has at least basic privileges.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-900">New inventory items do not appear in POS or sales</h3>
              <p className="text-red-800">Items must be received via Goods Receipt (or have positive stock) before they become available for sale.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-900">Privileges not taking effect</h3>
              <p className="text-red-800">Log the affected user out completely and back in, or restart the client terminal.</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
          <p className="text-gray-700 mb-6">
            With the foundation configured, continue with the official manual flow: add staff, set up the back office, then move to daily sales and reporting.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/products/docs/business-manager/staff"
              className="p-4 bg-white border border-gray-200 rounded-xl hover:border-[#05ADEE] hover:shadow-lg transition-all text-left"
            >
              <h3 className="font-bold text-gray-900 mb-2">→ Human Resources</h3>
              <p className="text-sm text-gray-600">Staff members, attendance &amp; payroll</p>
            </Link>
            <Link
              href="/products/docs/business-manager/goods-receipt"
              className="p-4 bg-white border border-gray-200 rounded-xl hover:border-[#05ADEE] hover:shadow-lg transition-all text-left"
            >
              <h3 className="font-bold text-gray-900 mb-2">→ Back Office → Goods Receipt</h3>
              <p className="text-sm text-gray-600">Start receiving real stock into the system</p>
            </Link>
            <Link
              href="/products/docs/business-manager/troubleshooting"
              className="p-4 bg-white border border-gray-200 rounded-xl hover:border-[#05ADEE] hover:shadow-lg transition-all text-left"
            >
              <h3 className="font-bold text-gray-900 mb-2">→ Troubleshooting</h3>
              <p className="text-sm text-gray-600">Common issues and solutions</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BusinessManagerConfigurationPage() {
  return <BusinessManagerConfiguration />;
}