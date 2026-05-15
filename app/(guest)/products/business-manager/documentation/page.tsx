"use client";

import { ArrowLeft, Book, Settings, Users, Database, Printer, FileText, HelpCircle, Download, Code, Shield, Wifi } from 'lucide-react';
import Link from 'next/link';

export function BusinessManagerDocs() {
  const docSections = [
    {
      title: "Getting Started",
      icon: Book,
      description: "Installation and initial setup guides",
      docs: [
        {
          title: "Installation Guide",
          path: "/products/docs/business-manager/installation",
          description: "Step-by-step installation for Windows/Linux servers",
          icon: Download,
          time: "15 min read"
        },
        {
          title: "System Requirements",
          path: "/products/docs/business-manager/requirements",
          description: "Hardware and software prerequisites",
          icon: Settings,
          time: "5 min read"
        },
        {
          title: "Quick Start Guide",
          path: "/products/docs/business-manager/quickstart",
          description: "Get up and running in 30 minutes",
          icon: Book,
          time: "10 min read"
        }
      ]
    },
    {
      title: "Configuration",
      icon: Settings,
      description: "System setup and customization",
      docs: [
        {
          title: "Configuration Guide",
          path: "/products/docs/business-manager/configuration",
          description: "Complete system configuration walkthrough",
          icon: Settings,
          time: "20 min read"
        },
        {
          title: "User Management",
          path: "/products/docs/business-manager/user-management",
          description: "Creating users, roles, and permissions",
          icon: Users,
          time: "12 min read"
        },
        {
          title: "Network Setup",
          path: "/products/docs/business-manager/network",
          description: "LAN configuration for multi-terminal setup",
          icon: Wifi,
          time: "8 min read"
        }
      ]
    },
    {
      title: "Operations",
      icon: Database,
      description: "Daily operations and workflows",
      docs: [
        {
          title: "POS Operations",
          path: "/products/docs/business-manager/pos-operation",
          description: "Point of sale procedures and best practices",
          icon: Database,
          time: "18 min read"
        },
        {
          title: "Inventory Management",
          path: "/products/docs/business-manager/inventory",
          description: "Stock control and inventory procedures",
          icon: Database,
          time: "15 min read"
        },
        {
          title: "Reporting & Analytics",
          path: "/products/docs/business-manager/reporting",
          description: "Generating reports and business insights",
          icon: FileText,
          time: "14 min read"
        }
      ]
    },
    {
      title: "Compliance & Integration",
      icon: Shield,
      description: "Regulatory compliance and system integration",
      docs: [
        {
          title: "EFRIS Integration",
          path: "/products/docs/business-manager/efris",
          description: "URA EFRIS compliance setup and configuration",
          icon: Shield,
          time: "25 min read"
        },
        {
          title: "Payment Integration",
          path: "/products/docs/business-manager/payments",
          description: "Mobile money and payment processor setup",
          icon: Database,
          time: "16 min read"
        },
        {
          title: "API Documentation",
          path: "/products/docs/business-manager/api",
          description: "REST API reference and integration guide",
          icon: Code,
          time: "30 min read"
        }
      ]
    },
    {
      title: "Maintenance & Support",
      icon: HelpCircle,
      description: "System maintenance and troubleshooting",
      docs: [
        {
          title: "Backup & Recovery",
          path: "/products/docs/business-manager/backup",
          description: "Data backup procedures and disaster recovery",
          icon: Database,
          time: "12 min read"
        },
        {
          title: "System Maintenance",
          path: "/products/docs/business-manager/maintenance",
          description: "Regular maintenance tasks and optimization",
          icon: Settings,
          time: "10 min read"
        },
        {
          title: "Troubleshooting Guide",
          path: "/products/docs/business-manager/troubleshooting",
          description: "Common issues and their solutions",
          icon: HelpCircle,
          time: "20 min read"
        }
      ]
    }
  ];

  const quickLinks = [
    {
      title: "Download Center",
      description: "Latest versions and updates",
      path: "/products/business-manager#download",
      icon: Download
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      path: "/products/docs/videos",
      icon: Book
    },
    {
      title: "Community Forum",
      description: "Ask questions and share knowledge",
      path: "/community",
      icon: Users
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
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/products/docs" className="hover:text-[#05ADEE]">Documentation</Link>
            <span>/</span>
            <span className="text-[#05ADEE]">Business Manager</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link
              href="/products/docs"
              className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Business Manager Documentation</h1>
              <p className="text-gray-600">Complete guide for offline-ready POS and inventory management</p>
            </div>
          </div>

          {/* Product Overview */}
          <div className="bg-[#05ADEE]/5 border border-[#05ADEE]/20 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#05ADEE]/10 rounded-xl flex items-center justify-center">
                <Database className="w-6 h-6 text-[#05ADEE]" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">About Business Manager</h2>
                <p className="text-gray-700 mb-3">
                  Business Manager is a comprehensive on-premise POS and inventory management system designed for retail environments
                  where internet connectivity cannot be guaranteed. It features offline capabilities, LAN synchronization, and full
                  EFRIS compliance for Ugandan businesses.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#05ADEE]/10 text-[#05ADEE] text-xs rounded-full">On-Premise</span>
                  <span className="px-2 py-1 bg-[#05ADEE]/10 text-[#05ADEE] text-xs rounded-full">Offline-First</span>
                  <span className="px-2 py-1 bg-[#05ADEE]/10 text-[#05ADEE] text-xs rounded-full">EFRIS Compliant</span>
                  <span className="px-2 py-1 bg-[#05ADEE]/10 text-[#05ADEE] text-xs rounded-full">LAN Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Documentation Sections */}
        <div className="space-y-8 mb-12">
          {docSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <section.icon className="w-6 h-6 text-[#05ADEE]" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                  <p className="text-gray-600">{section.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
                {section.docs.map((doc, docIndex) => (
                  <Link
                    key={docIndex}
                    href={doc.path}
                    className="group bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-[#05ADEE] hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <doc.icon className="w-5 h-5 text-[#05ADEE] mt-0.5" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-[#05ADEE] transition-colors">
                          {doc.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">{doc.description}</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">{doc.time}</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#05ADEE] hover:shadow-lg transition-all text-center"
              >
                <link.icon className="w-8 h-8 text-[#05ADEE] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{link.title}</h3>
                <p className="text-sm text-gray-600">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Support CTA */}
        <div className="bg-[#0A0947] rounded-xl p-8 text-center">
          <HelpCircle className="w-12 h-12 text-white mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you get the most out of Business Manager.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#05ADEE] text-white rounded-xl hover:bg-[#0496d5] transition-all font-semibold"
            >
              Contact Support
            </Link>
            <Link
              href="mailto:support@komusoft.com"
              className="px-6 py-3 bg-white text-[#0A0947] rounded-xl hover:bg-gray-100 transition-all font-semibold"
            >
              Email Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BusinessManagerDocsPage() {
  return <BusinessManagerDocs />;
}