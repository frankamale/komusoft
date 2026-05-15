"use client";

import { ArrowLeft, Check, Download, Settings, Database, Users, Wifi, Shield, AlertTriangle, Book, Code, HelpCircle, FileText } from 'lucide-react';
import Link from 'next/link';

export function BusinessManagerInstallation() {
  const steps = [
    {
      step: 1,
      title: "System Requirements Check",
      icon: Settings,
      content: [
        "Windows 10/11 or Windows Server 2016+",
        "Intel Core i3 processor or equivalent (i5 recommended)",
        "8GB RAM minimum (16GB recommended)",
        "100GB available disk space",
        "Stable LAN network for multi-terminal setups"
      ]
    },
    {
      step: 2,
      title: "Download Installation Package",
      icon: Download,
      content: [
        "Contact Komusoft support for installation package",
        "Verify download integrity using provided checksums",
        "Extract installation files to a temporary directory"
      ]
    },
    {
      step: 3,
      title: "Database Setup",
      icon: Database,
      content: [
        "Choose between SQL Server Express (free) or full SQL Server",
        "Run database setup script as administrator",
        "Configure database connection settings",
        "Test database connectivity"
      ]
    },
    {
      step: 4,
      title: "Application Installation",
      icon: Settings,
      content: [
        "Right-click installer and select 'Run as Administrator'",
        "Follow installation wizard prompts",
        "Choose installation directory (default recommended)",
        "Select components to install based on your needs"
      ]
    }
  ];

  const postInstallSteps = [
    {
      title: "Initial Configuration",
      icon: Settings,
      items: [
        "Launch Business Manager for first time",
        "Configure company information and settings",
        "Set up user accounts and permissions",
        "Configure receipt templates and EFRIS settings"
      ]
    },
    {
      title: "Network Setup (Multi-terminal)",
      icon: Wifi,
      items: [
        "Configure server IP address and port settings",
        "Set up client terminals to connect to server",
        "Test network connectivity between terminals",
        "Configure firewall settings for LAN communication"
      ]
    },
    {
      title: "Security Configuration",
      icon: Shield,
      items: [
        "Set up administrator password",
        "Configure user roles and access permissions",
        "Enable data encryption options",
        "Set up automatic backup schedules"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/products/docs" className="hover:text-[#05ADEE]">Documentation</Link>
            <span>/</span>
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Business Manager</Link>
            <span>/</span>
            <span className="text-[#05ADEE]">Installation Guide</span>
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
              <h1 className="text-3xl font-bold text-gray-900">Installation Guide</h1>
              <p className="text-gray-600">Step-by-step installation for Business Manager</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#prerequisites"
              className="px-4 py-2 bg-[#05ADEE]/10 text-[#05ADEE] rounded-lg hover:bg-[#05ADEE]/20 transition-colors"
            >
              Prerequisites
            </Link>
            <Link
              href="#installation"
              className="px-4 py-2 bg-[#05ADEE]/10 text-[#05ADEE] rounded-lg hover:bg-[#05ADEE]/20 transition-colors"
            >
              Installation Steps
            </Link>
            <Link
              href="#post-install"
              className="px-4 py-2 bg-[#05ADEE]/10 text-[#05ADEE] rounded-lg hover:bg-[#05ADEE]/20 transition-colors"
            >
              Post-Installation
            </Link>
            <Link
              href="#troubleshooting"
              className="px-4 py-2 bg-[#05ADEE]/10 text-[#05ADEE] rounded-lg hover:bg-[#05ADEE]/20 transition-colors"
            >
              Troubleshooting
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Prerequisites */}
        <section id="prerequisites" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Prerequisites</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Important Notes</h3>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Administrator privileges required for installation</li>
                  <li>• Ensure all antivirus software is temporarily disabled during installation</li>
                  <li>• Close all other applications before starting installation</li>
                  <li>• Have your license key ready (provided by Komusoft support)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Hardware Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Intel Core i3 or equivalent (i5 recommended)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>8GB RAM minimum (16GB recommended)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>100GB available storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Stable power supply</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Software Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Windows 10/11 or Windows Server 2016+</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Microsoft .NET Framework 4.8+</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>SQL Server Express 2019+ or SQL Server</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Administrator privileges</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Installation Steps */}
        <section id="installation" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Installation Steps</h2>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#05ADEE]/10 rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-[#05ADEE]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-[#05ADEE] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                        {step.step}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {step.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Post-Installation */}
        <section id="post-install" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Post-Installation Setup</h2>

          <div className="grid md:grid-cols-1 gap-6">
            {postInstallSteps.map((section, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <section.icon className="w-6 h-6 text-[#05ADEE]" />
                  <h3 className="text-lg font-bold text-gray-900">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Installation Issues</h2>

          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-red-900 mb-2">Installation Fails with Error Code</h3>
              <p className="text-red-800 text-sm mb-3">
                Check that you have administrator privileges and antivirus is disabled.
              </p>
              <div className="bg-red-900 rounded p-3 text-red-100 text-sm font-mono">
                Solution: Right-click installer → Run as administrator
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="font-bold text-yellow-900 mb-2">Database Connection Failed</h3>
              <p className="text-yellow-800 text-sm mb-3">
                Ensure SQL Server is running and firewall allows local connections.
              </p>
              <div className="bg-yellow-900 rounded p-3 text-yellow-100 text-sm font-mono">
                Check: Services.msc → SQL Server → Start service
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-blue-900 mb-2">Application Won't Start</h3>
              <p className="text-blue-800 text-sm mb-3">
                Check Windows Event Viewer for detailed error messages.
              </p>
              <div className="bg-blue-900 rounded p-3 text-blue-100 text-sm">
                Location: Windows + R → eventvwr → Windows Logs → Application
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
          <p className="text-gray-700 mb-6">
            Once installation is complete, proceed with initial configuration and user setup.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/products/docs/business-manager/configuration"
              className="p-4 bg-white border border-gray-200 rounded-xl hover:border-[#05ADEE] hover:shadow-lg transition-all text-left"
            >
              <h3 className="font-bold text-gray-900 mb-2">→ Configuration Guide</h3>
              <p className="text-sm text-gray-600">Set up your system settings and preferences</p>
            </Link>
            <Link
              href="/products/docs/business-manager/user-management"
              className="p-4 bg-white border border-gray-200 rounded-xl hover:border-[#05ADEE] hover:shadow-lg transition-all text-left"
            >
              <h3 className="font-bold text-gray-900 mb-2">→ User Management</h3>
              <p className="text-sm text-gray-600">Create user accounts and set permissions</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function BusinessManagerInstallationPage() {
  return <BusinessManagerInstallation />;
}