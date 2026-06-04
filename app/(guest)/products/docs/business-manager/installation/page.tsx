"use client";

import { Check, Download, Settings, Database, AlertTriangle, Wifi, Shield } from 'lucide-react';
import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-manager";

export function BusinessManagerInstallation() {
  const steps = [
    {
      step: 1,
      title: "System Requirements Check",
      icon: Settings,
      content: [
        "Windows 10/11 or Windows Server 2016+",
        "Intel Core i5 processor or equivalent",
        "8 GB RAM minimum (16 GB recommended)",
        "500 GB SSD recommended",
        "Stable LAN network for multi-terminal setups",
      ],
    },
    {
      step: 2,
      title: "Download Installation Package",
      icon: Download,
      content: [
        "Contact Komusoft support for the installation package",
        "Verify download integrity using the provided checksums",
        "Extract installation files to a temporary directory",
      ],
    },
    {
      step: 3,
      title: "Database Setup",
      icon: Database,
      content: [
        "Choose SQL Server Express (free) or full SQL Server",
        "Run the database setup script as administrator",
        "Configure database connection settings",
        "Test database connectivity",
      ],
    },
    {
      step: 4,
      title: "Application Installation",
      icon: Settings,
      content: [
        "Right-click the installer and select 'Run as Administrator'",
        "Follow the installation wizard prompts",
        "Choose the installation directory (default recommended)",
        "Select the components to install based on your package",
      ],
    },
  ];

  const postInstallSteps = [
    {
      title: "Initial Configuration",
      icon: Settings,
      items: [
        "Launch Business Manager for the first time",
        "Configure company information and settings",
        "Set up user accounts and permissions",
        "Configure receipt templates and EFRIS settings",
      ],
    },
    {
      title: "Network Setup (Multi-terminal)",
      icon: Wifi,
      items: [
        "Configure server IP address and port settings",
        "Set up client terminals to connect to the server",
        "Test network connectivity between terminals",
        "Configure firewall settings for LAN communication",
      ],
    },
    {
      title: "Security Configuration",
      icon: Shield,
      items: [
        "Set up the administrator password",
        "Configure user roles and access permissions",
        "Enable data encryption options",
        "Set up automatic backup schedules",
      ],
    },
  ];

  return (
    <DocLayout
      title="Installation Guide"
      subtitle="Step-by-step installation for Business Manager"
      current="Installation Guide"
      next={{ label: "System Requirements", href: `${base}/requirements` }}
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Prerequisites</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Important Notes</h3>
              <ul className="text-blue-800 text-sm space-y-1 list-disc list-inside">
                <li>Administrator privileges are required for installation</li>
                <li>Temporarily disable antivirus software during installation</li>
                <li>Close all other applications before starting</li>
                <li>Have your license key ready (provided by Komusoft support)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Installation Steps</h2>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#05ADEE]/10 rounded-xl flex items-center justify-center shrink-0">
                  <step.icon className="w-6 h-6 text-[#05ADEE]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#05ADEE] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">
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

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Post-Installation Setup</h2>
        <div className="space-y-6">
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

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Installation Issues</h2>
        <div className="space-y-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="font-bold text-red-900 mb-2">Installation Fails with an Error Code</h3>
            <p className="text-red-800 text-sm mb-3">Check that you have administrator privileges and antivirus is disabled.</p>
            <div className="bg-red-900 rounded p-3 text-red-100 text-sm font-mono">
              Solution: Right-click the installer and Run as administrator
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="font-bold text-yellow-900 mb-2">Database Connection Failed</h3>
            <p className="text-yellow-800 text-sm mb-3">Ensure SQL Server is running and the firewall allows local connections.</p>
            <div className="bg-yellow-900 rounded p-3 text-yellow-100 text-sm font-mono">
              Check: services.msc, then start the SQL Server service
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-2">Application Won&apos;t Start</h3>
            <p className="text-blue-800 text-sm mb-3">Check the Windows Event Viewer for detailed error messages.</p>
            <div className="bg-blue-900 rounded p-3 text-blue-100 text-sm">
              Location: Windows + R, run eventvwr, then Windows Logs &gt; Application
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
}

export default function BusinessManagerInstallationPage() {
  return <BusinessManagerInstallation />;
}
