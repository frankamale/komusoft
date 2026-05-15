"use client";

import { ArrowLeft, Settings, Database, Users, Wifi, Shield, Printer, FileText, CreditCard, Building } from 'lucide-react';
import Link from 'next/link';

export function BusinessManagerConfiguration() {
  const configSections = [
    {
      title: "Company Information",
      icon: Building,
      description: "Set up your business details and basic information",
      settings: [
        "Company name and registration details",
        "Business address and contact information",
        "Tax identification numbers",
        "Business logo and branding"
      ]
    },
    {
      title: "Database Configuration",
      icon: Database,
      description: "Configure database settings and connection parameters",
      settings: [
        "Database server connection settings",
        "Backup schedule and retention policies",
        "Database maintenance settings",
        "Performance optimization options"
      ]
    },
    {
      title: "User Management",
      icon: Users,
      description: "Set up user accounts, roles, and access permissions",
      settings: [
        "Create administrator account",
        "Define user roles and permissions",
        "Set password policies",
        "Configure multi-user access"
      ]
    },
    {
      title: "Network Settings",
      icon: Wifi,
      description: "Configure LAN setup for multi-terminal environments",
      settings: [
        "Server IP address configuration",
        "Port settings for client connections",
        "Firewall configuration",
        "Network security settings"
      ]
    },
    {
      title: "EFRIS Integration",
      icon: FileText,
      description: "Configure Uganda Revenue Authority compliance settings",
      settings: [
        "EFRIS server connection details",
        "Tax rates and categories",
        "Receipt numbering sequences",
        "Compliance reporting settings"
      ]
    },
    {
      title: "Payment Methods",
      icon: CreditCard,
      description: "Set up payment processing and tender types",
      settings: [
        "Cash payment configuration",
        "Mobile money integration (MTN/Airtel)",
        "Card payment terminal setup",
        "Payment method fees and charges"
      ]
    },
    {
      title: "Printer Configuration",
      icon: Printer,
      description: "Set up receipt printers and printing preferences",
      settings: [
        "Receipt printer selection",
        "Print templates and formatting",
        "Paper size and quality settings",
        "Printer troubleshooting options"
      ]
    },
    {
      title: "Security Settings",
      icon: Shield,
      description: "Configure system security and data protection",
      settings: [
        "Data encryption options",
        "Audit trail configuration",
        "Session timeout settings",
        "Security logging preferences"
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

        {/* Step-by-Step Guide */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Configuration</h2>

          <div className="space-y-8">
            {/* Company Setup */}
            <div className="border-l-4 border-[#05ADEE] pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Company Information Setup</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 mb-3">Navigate to Settings → Company Information</p>
                <div className="bg-gray-900 rounded p-3 text-green-400 font-mono text-sm">
                  Company Name: [Your Business Name]<br />
                  Registration Number: [URA Registration]<br />
                  Tax ID: [TIN Number]<br />
                  Address: [Business Address]
                </div>
              </div>
            </div>

            {/* Database Setup */}
            <div className="border-l-4 border-[#05ADEE] pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. Database Configuration</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 mb-3">Access via Settings → Database → Configuration</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Set automatic backup schedule (recommended: daily at 2 AM)</li>
                  <li>• Configure backup retention (recommended: 30 days)</li>
                  <li>• Enable database optimization (weekly maintenance)</li>
                  <li>• Set up backup verification checks</li>
                </ul>
              </div>
            </div>

            {/* User Management */}
            <div className="border-l-4 border-[#05ADEE] pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. User Account Creation</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 mb-3">Go to Settings → Users → Add New User</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Default Roles:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Administrator: Full system access</li>
                      <li>• Manager: Sales and inventory management</li>
                      <li>• Cashier: POS operations only</li>
                      <li>• Warehouse: Inventory operations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Security Best Practices:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Use strong passwords (8+ characters)</li>
                      <li>• Enable two-factor authentication</li>
                      <li>• Set automatic session timeouts</li>
                      <li>• Regular password changes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* EFRIS Setup */}
            <div className="border-l-4 border-[#05ADEE] pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. EFRIS Compliance Configuration</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 mb-3">Navigate to Settings → Compliance → EFRIS</p>
                <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mb-3">
                  <p className="text-yellow-800 text-sm">
                    <strong>Important:</strong> Ensure you have valid EFRIS credentials from URA before proceeding.
                  </p>
                </div>
                <div className="bg-gray-900 rounded p-3 text-green-400 font-mono text-sm">
                  Server URL: https://efris.ursb.go.ug<br />
                  Username: [Your EFRIS Username]<br />
                  Private Key: [Your Private Key File]<br />
                  Environment: [Production/Test]
                </div>
              </div>
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
                <li>✅ Company information complete</li>
                <li>✅ Database connection verified</li>
                <li>✅ Administrator account created</li>
                <li>✅ EFRIS credentials configured</li>
                <li>✅ Backup schedule enabled</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-green-900 mb-2">Optional Settings</h3>
              <ul className="space-y-1 text-green-800 text-sm">
                <li>🔄 Multi-terminal network setup</li>
                <li>🔄 Custom receipt templates</li>
                <li>🔄 Advanced reporting configuration</li>
                <li>🔄 Integration with external systems</li>
                <li>🔄 Mobile money payment setup</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-red-900 mb-4">Common Configuration Issues</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-red-900">EFRIS Connection Failed</h3>
              <p className="text-red-800 text-sm mb-2">Verify credentials and network connectivity to URA servers.</p>
              <div className="bg-red-900 rounded p-2 text-red-100 text-sm font-mono">
                Check: Settings → Compliance → Test Connection
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-red-900">Database Connection Error</h3>
              <p className="text-red-800 text-sm mb-2">Ensure SQL Server service is running and firewall allows connections.</p>
              <div className="bg-red-900 rounded p-2 text-red-100 text-sm font-mono">
                Verify: Services.msc → SQL Server → Status: Running
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
          <p className="text-gray-700 mb-6">
            After completing configuration, test your setup and begin adding inventory and users.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/products/docs/business-manager/inventory-setup"
              className="p-4 bg-white border border-gray-200 rounded-xl hover:border-[#05ADEE] hover:shadow-lg transition-all text-left"
            >
              <h3 className="font-bold text-gray-900 mb-2">→ Inventory Setup</h3>
              <p className="text-sm text-gray-600">Add products and manage stock</p>
            </Link>
            <Link
              href="/products/docs/business-manager/pos-operation"
              className="p-4 bg-white border border-gray-200 rounded-xl hover:border-[#05ADEE] hover:shadow-lg transition-all text-left"
            >
              <h3 className="font-bold text-gray-900 mb-2">→ POS Operations</h3>
              <p className="text-sm text-gray-600">Learn to process sales</p>
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