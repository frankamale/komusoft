"use client";

import { ArrowLeft, Book, Layers, Settings, Database, Cloud, Shield, HelpCircle, Download, Code, Zap, FileText, Wifi, HardDrive } from 'lucide-react';
import Link from 'next/link';

export function HybridSolutionDocs() {
  const docSections = [
    {
      title: "Getting Started",
      icon: Book,
      description: "Deployment and initial setup",
      docs: [
        {
          title: "Deployment Planning",
          path: "/products/docs/hybrid-solution/deployment",
          description: "Plan your hybrid infrastructure deployment",
          icon: Settings,
          time: "20 min read"
        },
        {
          title: "Installation Guide",
          path: "/products/docs/hybrid-solution/installation",
          description: "Step-by-step hybrid system setup",
          icon: Download,
          time: "25 min read"
        },
        {
          title: "Network Configuration",
          path: "/products/docs/hybrid-solution/network",
          description: "Configure hybrid network architecture",
          icon: Wifi,
          time: "18 min read"
        }
      ]
    },
    {
      title: "Core Features",
      icon: Layers,
      description: "Hybrid functionality and integration",
      docs: [
        {
          title: "Synchronization Setup",
          path: "/products/docs/hybrid-solution/sync",
          description: "Configure offline-online data sync",
          icon: Database,
          time: "22 min read"
        },
        {
          title: "Unified Dashboard",
          path: "/products/docs/hybrid-solution/dashboard",
          description: "Manage hybrid operations from single interface",
          icon: Layers,
          time: "15 min read"
        },
        {
          title: "Multi-Location Management",
          path: "/products/docs/hybrid-solution/multilocation",
          description: "Manage distributed business locations",
          icon: HardDrive,
          time: "20 min read"
        }
      ]
    },
    {
      title: "Integration & APIs",
      icon: Code,
      description: "Connect systems and automate workflows",
      docs: [
        {
          title: "API Integration",
          path: "/products/docs/hybrid-solution/api",
          description: "REST API documentation and integration",
          icon: Code,
          time: "30 min read"
        },
        {
          title: "Cloud Synchronization",
          path: "/products/docs/hybrid-solution/cloud-sync",
          description: "Advanced cloud data synchronization",
          icon: Cloud,
          time: "25 min read"
        },
        {
          title: "Third-party Integrations",
          path: "/products/docs/hybrid-solution/integrations",
          description: "Connect with existing business systems",
          icon: Zap,
          time: "28 min read"
        }
      ]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      description: "Enterprise security and compliance",
      docs: [
        {
          title: "Security Configuration",
          path: "/products/docs/hybrid-solution/security",
          description: "Configure enterprise-grade security",
          icon: Shield,
          time: "24 min read"
        },
        {
          title: "Compliance Setup",
          path: "/products/docs/hybrid-solution/compliance",
          description: "EFRIS and regulatory compliance",
          icon: FileText,
          time: "20 min read"
        },
        {
          title: "Data Encryption",
          path: "/products/docs/hybrid-solution/encryption",
          description: "End-to-end data encryption setup",
          icon: Shield,
          time: "16 min read"
        }
      ]
    },
    {
      title: "Maintenance & Support",
      icon: HelpCircle,
      description: "System maintenance and troubleshooting",
      docs: [
        {
          title: "System Maintenance",
          path: "/products/docs/hybrid-solution/maintenance",
          description: "Regular maintenance and optimization",
          icon: Settings,
          time: "18 min read"
        },
        {
          title: "Backup & Recovery",
          path: "/products/docs/hybrid-solution/backup",
          description: "Comprehensive backup and disaster recovery",
          icon: Database,
          time: "22 min read"
        },
        {
          title: "Troubleshooting Guide",
          path: "/products/docs/hybrid-solution/troubleshooting",
          description: "Common hybrid system issues and solutions",
          icon: HelpCircle,
          time: "26 min read"
        }
      ]
    }
  ];

  const quickLinks = [
    {
      title: "Enterprise Demo",
      description: "Schedule a personalized demo",
      path: "/contact",
      icon: Settings
    },
    {
      title: "System Requirements",
      description: "Hybrid infrastructure requirements",
      path: "/products/docs/hybrid-solution/deployment",
      icon: HardDrive
    },
    {
      title: "Migration Guide",
      description: "Migrate from existing systems",
      path: "/products/docs/hybrid-solution/installation",
      icon: Zap
    },
    {
      title: "Contact Enterprise Sales",
      description: "Speak with our enterprise team",
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
            <Link href="/products/docs/hybrid-solution" className="hover:text-[#05ADEE]">Documentation</Link>
            <span>/</span>
            <span className="text-[#05ADEE]">Hybrid Solution</span>
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
              <h1 className="text-3xl font-bold text-gray-900">Hybrid Solution Documentation</h1>
              <p className="text-gray-600">Complete guide for integrated offline-online business ecosystem</p>
            </div>
          </div>

          {/* Product Overview */}
          <div className="bg-[#05ADEE]/5 border border-[#05ADEE]/20 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#05ADEE]/10 rounded-xl flex items-center justify-center">
                <Layers className="w-6 h-6 text-[#05ADEE]" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">About Hybrid Solution</h2>
                <p className="text-gray-700 mb-3">
                  Hybrid Solution combines the reliability of offline POS systems with the power of cloud analytics.
                  Perfect for enterprises needing resilience across unreliable networks while maintaining
                  real-time visibility and advanced business intelligence.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#05ADEE]/10 text-[#05ADEE] text-xs rounded-full">Hybrid Architecture</span>
                  <span className="px-2 py-1 bg-[#05ADEE]/10 text-[#05ADEE] text-xs rounded-full">Enterprise-Grade</span>
                  <span className="px-2 py-1 bg-[#05ADEE]/10 text-[#05ADEE] text-xs rounded-full">Real-time Sync</span>
                  <span className="px-2 py-1 bg-[#05ADEE]/10 text-[#05ADEE] text-xs rounded-full">Multi-Location</span>
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
            Hybrid deployments can be complex. Our enterprise support team specializes in hybrid infrastructure
            and can guide you through every step of your implementation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#05ADEE] text-white rounded-xl hover:bg-[#0496d5] transition-all font-semibold"
            >
              Contact Enterprise Support
            </Link>
            <Link
              href="mailto:enterprise@komusoft.com"
              className="px-6 py-3 bg-white text-[#0A0947] rounded-xl hover:bg-gray-100 transition-all font-semibold"
            >
              Email Enterprise Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HybridSolutionDocsPage() {
  return <HybridSolutionDocs />;
}