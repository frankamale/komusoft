"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Cloud, Check, ArrowRight, Download, FileText, BarChart, Users, Zap, Shield, Database, Monitor, Globe } from 'lucide-react';

export function BusinessAssistant() {
  const features = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud platform accessible from anywhere with automatic backups and updates."
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Real-time dashboards and reporting with customizable KPIs and business intelligence."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Multi-user access with role-based permissions and real-time collaboration tools."
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and business processes with customizable workflows."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption, SSO integration, and comprehensive audit trails."
    },
    {
      icon: Database,
      title: "API Integrations",
      description: "Connect with third-party services via REST APIs and webhooks."
    }
  ];

  const modules = [
    { name: "CRM", features: ["Lead management", "Customer database", "Sales pipeline", "Communication tracking"] },
    { name: "Analytics", features: ["Real-time dashboards", "Custom reports", "KPIs & metrics", "Data visualization"] },
    { name: "Collaboration", features: ["Team workspaces", "Document sharing", "Task management", "Notifications"] },
    { name: "Automation", features: ["Workflow builder", "Email automation", "Task scheduling", "Triggers & actions"] },
    { name: "Security", features: ["User permissions", "Audit logs", "Data encryption", "Backup & recovery"] },
    { name: "Integrations", features: ["API access", "Webhook support", "Third-party apps", "Custom connectors"] }
  ];

  const workflow = [
    { step: "01", title: "Sign Up", desc: "Create your account and select a plan" },
    { step: "02", title: "Setup", desc: "Configure your business settings and users" },
    { step: "03", title: "Migrate", desc: "Import your data and customize workflows" },
    { step: "04", title: "Go Live", desc: "Start using the platform immediately" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-linear-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                <Cloud className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-600">SaaS</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Business Assistant
              </h1>
              <p className="text-2xl text-purple-600 font-semibold mb-6">
                Cloud Business Operations Platform
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A comprehensive cloud platform for modern businesses. Access your operations from anywhere,
                collaborate with your team, and gain insights with powerful analytics and automation tools.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 hover:shadow-xl transition-all"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl hover:bg-gray-50 transition-all">
                  <Download className="w-5 h-5" />
                  Download Brochure
                </button>
                <Link
                  href="/products/docs"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl hover:bg-gray-50 transition-all"
                >
                  <FileText className="w-5 h-5" />
                  Documentation
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/assets/business-assistant-dashboard.png"
                alt="Business Assistant Dashboard"
                className="rounded-3xl shadow-2xl"
                height={600}
                width={800}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage your business in the cloud
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-purple-600 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <feature.icon className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get up and running in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {workflow.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                {index < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -ml-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Available Modules
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive functionality for every aspect of your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">{module.name}</h3>
                <ul className="space-y-2">
                  {module.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-purple-600 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              System Requirements
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-gray-200">
              <Monitor className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Browser Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Chrome 90+</li>
                <li>Firefox 88+</li>
                <li>Safari 14+</li>
                <li>Edge 90+</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200">
              <Database className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Internet Connection</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>2Mbps minimum</li>
                <li>10Mbps recommended</li>
                <li>Mobile data compatible</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200">
              <Shield className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Security</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>SSL/TLS encryption</li>
                <li>Two-factor authentication</li>
                <li>Data backup</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200">
              <Globe className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Mobile Access</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Responsive design</li>
                <li>Mobile apps</li>
                <li>Offline sync</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#0A0947] p-12 md:p-16">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial and experience the power of cloud business management
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 hover:shadow-2xl hover:shadow-purple-600/50 transition-all"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function BusinessAssistantPage() {
  return <BusinessAssistant />;
}