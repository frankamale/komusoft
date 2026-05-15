"use client";

import { useState } from 'react';
import { Search, Book, FileText, Code, HelpCircle, Download, ChevronRight, Terminal, Database, Wifi, Printer, Shield, Users } from 'lucide-react';

export function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      title: "Product Documentation",
      icon: Book,
      docs: [
        { title: "Business Manager Guide", path: "/products/docs/business-manager" },
        { title: "Business Assistant Guide", path: "/products/docs/business-assistant" },
        { title: "Hybrid Solution Guide", path: "/products/docs/hybrid-solution" },
        { title: "API Documentation", path: "api" }
      ]
    },
    {
      title: "Getting Started",
      icon: Book,
      docs: [
        { title: "Installation Guide", path: "installation" },
        { title: "Quick Start", path: "quickstart" },
        { title: "System Requirements", path: "requirements" },
        { title: "First Time Setup", path: "setup" }
      ]
    },
    {
      title: "Configuration",
      icon: Code,
      docs: [
        { title: "LAN Setup", path: "lan-setup" },
        { title: "EFRIS Configuration", path: "efris" },
        { title: "User Permissions", path: "permissions" },
        { title: "Database Setup", path: "database" }
      ]
    },
    {
      title: "Troubleshooting",
      icon: HelpCircle,
      docs: [
        { title: "Cloud Sync Errors", path: "sync-errors" },
        { title: "Printer Issues", path: "printer" },
        { title: "Database Backup", path: "backup" },
        { title: "Common Errors", path: "common-errors" }
      ]
    }
  ];

  const popularDocs = [
    { icon: Wifi, title: "LAN Setup Guide", desc: "Configure local network synchronization", time: "5 min read" },
    { icon: Database, title: "Database Backup Procedures", desc: "Keep your data safe", time: "8 min read" },
    { icon: Printer, title: "Printer Troubleshooting", desc: "Fix common printer issues", time: "3 min read" },
    { icon: Shield, title: "Security Best Practices", desc: "Secure your installation", time: "10 min read" },
    { icon: Users, title: "User Permissions Setup", desc: "Manage roles and access", time: "6 min read" },
    { icon: FileText, title: "EFRIS Configuration", desc: "URA compliance setup", time: "12 min read" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-linear-to-b from-gray-50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Documentation Center
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to know about Komusoft products
            </p>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#05ADEE] focus:border-transparent"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Book, label: "Guides" },
              { icon: Code, label: "API Docs" },
              { icon: HelpCircle, label: "Support" },
              { icon: Download, label: "Downloads" }
            ].map((link, index) => (
              <button
                key={index}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:border-[#05ADEE] hover:shadow-lg transition-all"
              >
                <link.icon className="w-5 h-5 text-[#05ADEE]" />
                <span className="font-semibold text-gray-900">{link.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Documentation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDocs.map((doc, index) => (
              <button
                key={index}
                className="group text-left p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#05ADEE] hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-[#05ADEE]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#05ADEE] transition-colors">
                  <doc.icon className="w-6 h-6 text-[#05ADEE] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{doc.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{doc.desc}</p>
                <span className="text-xs text-gray-500">{doc.time}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-3xl border border-gray-200 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#05ADEE]/10 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-[#05ADEE]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>

                <div className="space-y-3">
                  {category.docs.map((doc, dIndex) => (
                    <button
                      key={dIndex}
                      className="group w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-[#05ADEE]/5 hover:border-[#05ADEE]/20 border border-transparent transition-all"
                    >
                      <span className="text-gray-900 font-medium group-hover:text-[#05ADEE] transition-colors">
                        {doc.title}
                      </span>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#05ADEE] group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Documentation Article */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span>Documentation</span>
              <ChevronRight className="w-4 h-4" />
              <span>Getting Started</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#05ADEE]">Installation Guide</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Installation Guide</h1>
            <p className="text-lg text-gray-600">Step-by-step guide to installing Business Manager</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Prerequisites</h2>
              <ul className="space-y-2 text-gray-700">
                <li>Windows 10/11 or Windows Server 2016+</li>
                <li>Minimum 4GB RAM (8GB recommended)</li>
                <li>50GB available disk space</li>
                <li>Administrator access</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Download Installer</h2>
            <p className="text-gray-700 mb-6">
              Download the latest version of Business Manager from the customer portal or contact support for the installation package.
            </p>

            <div className="bg-gray-900 rounded-xl p-6 mb-6">
              <code className="text-green-400 font-mono text-sm">
                # Verify download integrity<br />
                sha256sum BusinessManager_Setup.exe
              </code>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Run Installer</h2>
            <p className="text-gray-700 mb-6">
              Right-click the installer and select &quot;Run as Administrator&quot;. Follow the installation wizard:
            </p>

            <ol className="space-y-3 text-gray-700 mb-6 list-decimal list-inside">
              <li>Accept the license agreement</li>
              <li>Choose installation directory</li>
              <li>Select components to install</li>
              <li>Configure database settings</li>
              <li>Set up administrator account</li>
            </ol>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-2">💡 Pro Tip</h3>
              <p className="text-gray-700">
                Install on a dedicated server for better performance and easier management across multiple terminals.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Initial Configuration</h2>
            <p className="text-gray-700 mb-6">
              After installation completes, launch the configuration wizard to set up:
            </p>

            <ul className="space-y-2 text-gray-700 mb-6 list-disc list-inside">
              <li>Company information</li>
              <li>Tax settings and EFRIS configuration</li>
              <li>Receipt templates</li>
              <li>Initial inventory</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <button className="p-4 bg-white border border-gray-200 rounded-xl hover:border-[#05ADEE] hover:shadow-lg transition-all text-left">
                <h3 className="font-bold text-gray-900 mb-2">LAN Setup →</h3>
                <p className="text-sm text-gray-600">Configure network terminals</p>
              </button>
              <button className="p-4 bg-white border border-gray-200 rounded-xl hover:border-[#05ADEE] hover:shadow-lg transition-all text-left">
                <h3 className="font-bold text-gray-900 mb-2">User Permissions →</h3>
                <p className="text-sm text-gray-600">Set up roles and access</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-gray-200 p-12 text-center">
            <HelpCircle className="w-16 h-16 text-[#05ADEE] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our support team is here to assist you
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-[#05ADEE] text-white rounded-xl hover:bg-[#0496d5] hover:shadow-xl transition-all">
                Contact Support
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl hover:bg-gray-50 transition-all">
                Schedule Training
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function DocumentationPage() {
  return <Documentation />;
}