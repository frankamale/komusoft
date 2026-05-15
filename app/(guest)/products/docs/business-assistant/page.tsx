"use client";

import { ArrowLeft, Book, Settings, Users, Database, Cloud, Shield, HelpCircle, Download, Code, Zap, FileText, CreditCard, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export function BusinessAssistantDocs() {
  const docSections = [
    {
      title: "Getting Started",
      icon: Book,
      description: "Cloud setup and account creation",
      docs: [
        {
          title: "Account Setup",
          path: "/products/docs/business-assistant/setup",
          description: "Create your account and initial configuration",
          icon: Settings,
          time: "10 min read"
        },
        {
          title: "Quick Start Guide",
          path: "/products/docs/business-assistant/quickstart",
          description: "Get up and running in 15 minutes",
          icon: Book,
          time: "8 min read"
        },
        {
          title: "System Requirements",
          path: "/products/docs/business-assistant/requirements",
          description: "Browser and device compatibility",
          icon: Settings,
          time: "5 min read"
        }
      ]
    },
    {
      title: "Core Features",
      icon: Database,
      description: "Using Business Assistant features",
      docs: [
        {
          title: "Dashboard Overview",
          path: "/products/docs/business-assistant/dashboard",
          description: "Navigate and customize your dashboard",
          icon: BarChart3,
          time: "12 min read"
        },
        {
          title: "Team Collaboration",
          path: "/products/docs/business-assistant/collaboration",
          description: "Working with team members and permissions",
          icon: Users,
          time: "15 min read"
        },
        {
          title: "Analytics & Reporting",
          path: "/products/docs/business-assistant/analytics",
          description: "Generate reports and business insights",
          icon: BarChart3,
          time: "18 min read"
        }
      ]
    },
    {
      title: "Integrations",
      icon: Code,
      description: "Connect with external services",
      docs: [
        {
          title: "API Integration",
          path: "/products/docs/business-assistant/api",
          description: "REST API documentation and examples",
          icon: Code,
          time: "25 min read"
        },
        {
          title: "Payment Gateways",
          path: "/products/docs/business-assistant/payments",
          description: "Connect payment processors and mobile money",
          icon: CreditCard,
          time: "20 min read"
        },
        {
          title: "Third-party Integrations",
          path: "/products/docs/business-assistant/integrations",
          description: "Connect with accounting, CRM, and other tools",
          icon: Zap,
          time: "22 min read"
        }
      ]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      description: "Data protection and compliance",
      docs: [
        {
          title: "Security Best Practices",
          path: "/products/docs/business-assistant/security",
          description: "Keep your data safe and secure",
          icon: Shield,
          time: "16 min read"
        },
        {
          title: "Data Privacy",
          path: "/products/docs/business-assistant/privacy",
          description: "GDPR compliance and data handling",
          icon: FileText,
          time: "14 min read"
        },
        {
          title: "Audit Trails",
          path: "/products/docs/business-assistant/audit",
          description: "Track changes and maintain compliance",
          icon: FileText,
          time: "12 min read"
        }
      ]
    },
    {
      title: "Troubleshooting",
      icon: HelpCircle,
      description: "Common issues and solutions",
      docs: [
        {
          title: "Login Issues",
          path: "/products/docs/business-assistant/login-troubleshooting",
          description: "Can't access your account?",
          icon: HelpCircle,
          time: "8 min read"
        },
        {
          title: "Performance Problems",
          path: "/products/docs/business-assistant/performance",
          description: "Slow loading or response times",
          icon: HelpCircle,
          time: "10 min read"
        },
        {
          title: "Data Sync Issues",
          path: "/products/docs/business-assistant/sync-issues",
          description: "Problems with data synchronization",
          icon: HelpCircle,
          time: "12 min read"
        }
      ]
    }
  ];

  const quickLinks = [
    {
      title: "Free Trial",
      description: "Start your 14-day free trial",
      path: "/products/business-assistant",
      icon: Download
    },
    {
      title: "API Reference",
      description: "Complete API documentation",
      path: "/products/docs/business-assistant/api",
      icon: Code
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      path: "/products/docs/videos",
      icon: Book
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
            <Link href="/products/docs/business-assistant" className="hover:text-[#05ADEE]">Documentation</Link>
            <span>/</span>
            <span className="text-[#05ADEE]">Business Assistant</span>
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
              <h1 className="text-3xl font-bold text-gray-900">Business Assistant Documentation</h1>
              <p className="text-gray-600">Complete guide for cloud-based business operations platform</p>
            </div>
          </div>

          {/* Product Overview */}
          <div className="bg-[#05ADEE]/5 border border-[#05ADEE]/20 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#05ADEE]/10 rounded-xl flex items-center justify-center">
                <Cloud className="w-6 h-6 text-[#05ADEE]" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">About Business Assistant</h2>
                <p className="text-gray-700 mb-3">
                  Business Assistant is a comprehensive cloud-based platform for modern business operations management.
                  Accessible anywhere, anytime, with advanced analytics, team collaboration, and automated workflows
                  designed for growing teams and enterprises.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#05ADEE]/10 text-[#05ADEE] text-xs rounded-full">Cloud-Based</span>
                  <span className="px-2 py-1 bg-[#05ADEE]/10 text-[#05ADEE] text-xs rounded-full">SaaS</span>
                  <span className="px-2 py-1 bg-[#05ADEE]/10 text-[#05ADEE] text-xs rounded-full">Mobile Responsive</span>
                  <span className="px-2 py-1 bg-[#05ADEE]/10 text-[#05ADEE] text-xs rounded-full">API-First</span>
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
            Can't find what you're looking for? Our support team is here to help you get the most out of Business Assistant.
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

export default function BusinessAssistantDocsPage() {
  return <BusinessAssistantDocs />;
}