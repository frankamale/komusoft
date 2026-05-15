"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Check, ArrowRight, Download, FileText, Wifi, WifiOff, Database, Printer, Users, Shield, HardDrive, Monitor } from 'lucide-react';

export function BusinessManager() {
  const features = [
    {
      icon: WifiOff,
      title: "Offline POS Capabilities",
      description: "Complete POS functionality without internet connectivity. Built for African retail environments."
    },
    {
      icon: Database,
      title: "Real-time Inventory Tracking",
      description: "Track stock levels, movements, and valuations across multiple locations in real-time."
    },
    {
      icon: Wifi,
      title: "LAN-based Synchronization",
      description: "Local network synchronization ensures data consistency across all terminals."
    },
    {
      icon: Users,
      title: "Multi-location Support",
      description: "Manage multiple branches with centralized reporting and control."
    },
    {
      icon: Printer,
      title: "Receipt Printing & Invoicing",
      description: "Print professional receipts, invoices, and reports with customizable templates."
    },
    {
      icon: Shield,
      title: "EFRIS-compliant Receipting",
      description: "Fully compliant with Uganda Revenue Authority's EFRIS requirements."
    }
  ];

  const modules = [
    { name: "Point of Sale", features: ["Quick sales", "Returns & refunds", "Multiple payment methods", "Customer display"] },
    { name: "Inventory Management", features: ["Stock receipts", "Stock issuance", "Stock adjustments", "Transfers"] },
    { name: "Invoicing", features: ["Quotations", "Proforma", "Sales orders", "Credit notes"] },
    { name: "Reporting", features: ["Sales reports", "Stock reports", "Financial reports", "Custom dashboards"] },
    { name: "Security", features: ["Role-based access", "Audit trails", "Secure login", "Data encryption"] },
    { name: "Customer Management", features: ["Customer database", "Loyalty programs", "Credit management", "Purchase history"] }
  ];

  const workflow = [
    { step: "01", title: "Installation", desc: "Quick setup on Windows/Linux servers" },
    { step: "02", title: "Configuration", desc: "Customize settings, users, and inventory" },
    { step: "03", title: "Training", desc: "Train your team with our comprehensive guides" },
    { step: "04", title: "Go Live", desc: "Start processing transactions immediately" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-linear-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
                <ShoppingCart className="w-4 h-4 text-[#05ADEE]" />
                <span className="text-sm font-semibold text-[#05ADEE]">On-Premise</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Business Manager
              </h1>
              <p className="text-2xl text-[#05ADEE] font-semibold mb-6">
                Offline-Ready POS & Inventory System
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A powerful point-of-sale and inventory management system with LAN support for
                uninterrupted operations, even without internet connectivity. Built for African
                retail environments where internet connectivity cannot always be guaranteed.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#05ADEE] text-white rounded-xl hover:bg-[#0496d5] hover:shadow-xl transition-all"
                >
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl hover:bg-gray-50 transition-all">
                  <Download className="w-5 h-5" />
                  Download Brochure
                </button>
                <Link
                  href="/products/docs/business-manager"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl hover:bg-gray-50 transition-all"
                >
                  <FileText className="w-5 h-5" />
                  Documentation
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
              src="/assets/business-manager-dashboard.png"
                alt="Business Manager Dashboard"
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
              Core Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to run your retail business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-[#05ADEE] hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#05ADEE] transition-colors">
                  <feature.icon className="w-7 h-7 text-[#05ADEE] group-hover:text-white transition-colors" />
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
                  <div className="w-16 h-16 bg-[#05ADEE] rounded-2xl flex items-center justify-center mx-auto mb-6">
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
                      <Check className="w-4 h-4 text-[#05ADEE] shrink-0" />
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
              Flexible licensing options for businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 hover:border-[#05ADEE] hover:shadow-xl transition-all">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Single Location</h3>
                <p className="text-gray-600 mb-4">Perfect for small retail shops</p>
                <div className="text-4xl font-bold text-[#05ADEE] mb-2">UGX 1,500,000</div>
                <div className="text-gray-600 text-sm">One-time license</div>
                <div className="text-gray-600 text-sm mt-2">+ UGX 300,000/year maintenance</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">1 POS terminal</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Basic inventory management</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Receipt printing</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Email support</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-100 text-gray-900 rounded-xl hover:bg-gray-200 transition-all font-semibold"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-white rounded-3xl border-2 border-[#05ADEE] shadow-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#05ADEE] text-white px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Multi-Location</h3>
                <p className="text-gray-600 mb-4">For growing retail chains</p>
                <div className="text-4xl font-bold text-[#05ADEE] mb-2">UGX 2,500,000</div>
                <div className="text-gray-600 text-sm">One-time license</div>
                <div className="text-gray-600 text-sm mt-2">+ UGX 500,000/year maintenance</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Up to 5 POS terminals</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Advanced inventory management</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Multi-location support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">LAN synchronization</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Priority support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Custom reporting</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#05ADEE] text-white rounded-xl hover:bg-[#0496d5] transition-all font-semibold"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 hover:border-[#05ADEE] hover:shadow-xl transition-all">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-4">For large retail operations</p>
                <div className="text-4xl font-bold text-[#05ADEE] mb-2">Custom Pricing</div>
                <div className="text-gray-600 text-sm">Contact for quote</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Unlimited POS terminals</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Advanced analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Custom integrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Dedicated support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">On-site training</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">SLA guarantee</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-100 text-gray-900 rounded-xl hover:bg-gray-200 transition-all font-semibold"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">All plans include:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                EFRIS compliance
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Free updates
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Installation support
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Training materials
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
              System Requirements
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-gray-200">
              <HardDrive className="w-8 h-8 text-[#05ADEE] mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Minimum Hardware</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Intel Core i3 or equivalent</li>
                <li>4GB RAM</li>
                <li>50GB Storage</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200">
              <Database className="w-8 h-8 text-[#05ADEE] mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Server Requirements</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Intel Core i5 or better</li>
                <li>8GB RAM (recommended)</li>
                <li>100GB+ Storage</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200">
              <Monitor className="w-8 h-8 text-[#05ADEE] mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Operating Systems</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Windows 10/11</li>
                <li>Windows Server 2016+</li>
                <li>Ubuntu 20.04+</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200">
              <Wifi className="w-8 h-8 text-[#05ADEE] mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Network</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>LAN (100Mbps+)</li>
                <li>Optional internet</li>
                <li>Static IP recommended</li>
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
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#05ADEE] rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Retail Operations?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get started with Business Manager today
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#05ADEE] text-white rounded-xl hover:bg-[#0496d5] hover:shadow-2xl hover:shadow-[#05ADEE]/50 transition-all"
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

export default function BusinessManagerPage() {
  return <BusinessManager />;
}