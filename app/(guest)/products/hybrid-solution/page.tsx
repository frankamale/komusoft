"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Cloud, Check, ArrowRight, Download, FileText, Wifi, WifiOff, Shield, HardDrive, Monitor, Globe, Zap, BarChart } from 'lucide-react';

export function HybridManager() {
  const features = [
    {
      icon: WifiOff,
      title: "Offline-First Architecture",
      description: "Full functionality without internet, with automatic cloud sync when connection is restored."
    },
    {
      icon: Cloud,
      title: "Cloud Backup & Sync",
      description: "Real-time data synchronization with secure cloud backup and disaster recovery."
    },
    {
      icon: Globe,
      title: "Remote Access",
      description: "Access your business data from anywhere with secure cloud connectivity."
    },
    {
      icon: Zap,
      title: "Hybrid Performance",
      description: "Lightning-fast local operations combined with cloud-scale processing power."
    },
    {
      icon: BarChart,
      title: "Unified Analytics",
      description: "Combine local and cloud data for comprehensive business intelligence."
    },
    {
      icon: Shield,
      title: "Dual Security",
      description: "On-premise data protection plus enterprise-grade cloud security."
    }
  ];

  const modules = [
    { name: "POS & Inventory", features: ["Offline transactions", "Real-time sync", "Multi-location support", "Cloud reporting"] },
    { name: "Cloud Services", features: ["Remote access", "Automated backups", "Mobile apps", "Web dashboards"] },
    { name: "Integration Hub", features: ["API connectivity", "Third-party apps", "Webhook support", "Data export"] },
    { name: "Business Intelligence", features: ["Real-time analytics", "Custom reports", "KPI dashboards", "Trend analysis"] },
    { name: "Security & Compliance", features: ["Role-based access", "Audit trails", "EFRIS compliance", "Data encryption"] },
    { name: "Team Management", features: ["User permissions", "Team collaboration", "Task automation", "Communication tools"] }
  ];

  const workflow = [
    { step: "01", title: "Choose Deployment", desc: "Select on-premise server or cloud-hosted option" },
    { step: "02", title: "Setup & Configure", desc: "Install locally and connect to cloud services" },
    { step: "03", title: "Data Migration", desc: "Import existing data with cloud backup" },
    { step: "04", title: "Go Hybrid", desc: "Start operating with full offline/cloud capabilities" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-linear-to-br from-green-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
                <Globe className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-600">Hybrid</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Hybrid Manager
              </h1>
              <p className="text-2xl text-green-600 font-semibold mb-6">
                Best of Both Worlds: On-Premise & Cloud
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the reliability of on-premise operations with the flexibility of cloud services.
                Work offline when needed, sync automatically, and access data remotely when required.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 hover:shadow-xl transition-all"
                >
                  Request Demo
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
                src="/assets/hybrid-manager-dashboard.png"
                alt="Hybrid Manager Dashboard"
                className="rounded-3xl shadow-2xl"
                width={540}
                height={360}
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
              Hybrid Features
            </h2>
            <p className="text-xl text-gray-600">
              Seamless integration of local and cloud capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-green-600 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                  <feature.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
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
              Deploy locally, connect globally in four steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {workflow.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
              Hybrid Modules
            </h2>
            <p className="text-xl text-gray-600">
              Complete business management across local and cloud environments
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
                      <Check className="w-4 h-4 text-green-600 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-600">
              Enterprise-grade hybrid solutions with flexible deployment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 hover:border-[#05ADEE] hover:shadow-xl transition-all">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard</h3>
                <p className="text-gray-600 mb-4">For medium businesses</p>
                <div className="text-4xl font-bold text-[#05ADEE] mb-2">UGX 350,000</div>
                <div className="text-gray-600 text-sm">per month</div>
                <div className="text-gray-600 text-sm mt-2">UGX 3,500,000 annually</div>
                <div className="text-gray-600 text-sm mt-2">+ UGX 1,000,000 setup</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Up to 10 POS terminals</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Cloud dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Basic synchronization</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Standard support</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-100 text-gray-900 rounded-xl hover:bg-gray-200 transition-all font-semibold"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-white rounded-3xl border-2 border-[#05ADEE] shadow-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#05ADEE] text-white px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <p className="text-gray-600 mb-4">For enterprise operations</p>
                <div className="text-4xl font-bold text-[#05ADEE] mb-2">UGX 500,000</div>
                <div className="text-gray-600 text-sm">per month</div>
                <div className="text-gray-600 text-sm mt-2">UGX 5,000,000 annually</div>
                <div className="text-gray-600 text-sm mt-2">+ UGX 1,000,000 setup</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Up to 50 POS terminals</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Advanced cloud dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Real-time synchronization</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Multi-location support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Priority support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Custom integrations</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#05ADEE] text-white rounded-xl hover:bg-[#0496d5] transition-all font-semibold"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 hover:border-[#05ADEE] hover:shadow-xl transition-all">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-4">For large-scale deployments</p>
                <div className="text-4xl font-bold text-[#05ADEE] mb-2">Custom Pricing</div>
                <div className="text-gray-600 text-sm">Contact for enterprise quote</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Unlimited POS terminals</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Custom cloud infrastructure</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Advanced synchronization</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Dedicated infrastructure</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">24/7 dedicated support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">White-label options</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-100 text-gray-900 rounded-xl hover:bg-gray-200 transition-all font-semibold"
              >
                Contact Enterprise Sales
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">All plans include:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Automated backups
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Data encryption
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                SLA guarantee
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Deployment Options
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-gray-200">
              <HardDrive className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">On-Premise Server</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Intel Core i5 or equivalent</li>
                <li>8GB RAM minimum</li>
                <li>100GB+ storage</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200">
              <Cloud className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Cloud Hosting</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Managed infrastructure</li>
                <li>Automatic scaling</li>
                <li>99.9% uptime SLA</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200">
              <Monitor className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Client Devices</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Windows/Linux clients</li>
                <li>Web browsers</li>
                <li>Mobile devices</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200">
              <Wifi className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Connectivity</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>LAN for local operations</li>
                <li>Internet for cloud sync</li>
                <li>Offline mode support</li>
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
              <div className="absolute top-0 right-0 w-96 h-96 bg-green-600 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Hybrid Business Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the best of both worlds with our hybrid solution
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 hover:shadow-2xl hover:shadow-green-600/50 transition-all"
              >
                Request Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function HybridManagerPage() {
  return <HybridManager />;
}