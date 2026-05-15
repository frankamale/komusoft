"use client";

import Link from 'next/link';
import { ShoppingCart, Cloud, Layers, Check, ArrowRight, Zap, Shield, Globe2, Users, BarChart, Database } from 'lucide-react';

export function ProductsOverview() {
  const products = [
    {
      icon: ShoppingCart,
      name: "Business Manager",
      badge: "On-Premise",
      tagline: "Offline-Ready POS & Inventory System",
      description: "Built for African retail environments where internet connectivity cannot always be guaranteed.",
      features: [
        "Offline POS capabilities",
        "Real-time inventory tracking",
        "LAN-based synchronization",
        "EFRIS-compliant receipting"
      ],
      link: "/products/business-manager",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cloud,
      name: "Business Assistant",
      badge: "SaaS",
      tagline: "Cloud Business Operations Platform",
      description: "Accessible from anywhere with analytics, collaboration tools, and workflow automation.",
      features: [
        "Cloud-based infrastructure",
        "Advanced analytics & reporting",
        "Team collaboration tools",
        "API integrations"
      ],
      link: "/products/business-assistant",
      color: "from-purple-500 to-pink-500",
      recommended: true
    },
    {
      icon: Layers,
      name: "Hybrid Solution",
      badge: "Enterprise",
      tagline: "Integrated Business Ecosystem",
      description: "Combining offline POS with cloud synchronization for enterprises operating across unreliable networks.",
      features: [
        "Offline + cloud sync",
        "Unified command dashboard",
        "Automated backups",
        "Enterprise SSO"
      ],
      link: "/products/hybrid-solution",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const integrations = [
    "EFRIS", "Payment Gateways", "Accounting Software", "Mobile Banking",
    "SMS Providers", "Email Services", "Cloud Storage", "Analytics"
  ];

  const features = [
    { icon: Shield, title: "Enterprise Security", desc: "Bank-grade encryption" },
    { icon: Zap, title: "High Performance", desc: "Built for speed" },
    { icon: Globe2, title: "Multi-Location", desc: "Centralized control" },
    { icon: Users, title: "Team Collaboration", desc: "Work together" },
    { icon: BarChart, title: "Real-time Analytics", desc: "Instant insights" },
    { icon: Database, title: "Data Integrity", desc: "Never lose data" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#05ADEE]/10 backdrop-blur-sm rounded-full mb-6">
              <Zap className="w-4 h-4 text-[#05ADEE]" />
              <span className="text-sm font-semibold text-[#05ADEE]">Enterprise Software Products</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Choose Your Perfect Solution
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              From offline POS to cloud platforms, we have the right tools to power your business operations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#05ADEE] text-white rounded-xl hover:bg-[#0496d5] hover:shadow-xl transition-all"
              >
                Talk to Sales
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/products/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl hover:bg-gray-50 transition-all"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Comparison Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Three Solutions, One Ecosystem
            </h2>
            <p className="text-xl text-gray-600">
              Each product designed for specific business needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link
                key={index}
                href={product.link}
                className="group relative bg-white rounded-3xl border-2 border-gray-200 hover:border-[#05ADEE] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {product.recommended && (
                  <div className="absolute top-4 right-4 px-4 py-1.5 bg-[#05ADEE] text-white text-xs font-semibold rounded-full">
                    Recommended
                  </div>
                )}

                {/* Top colored bar */}
                <div className={`h-2 bg-linear-to-r ${product.color}`}></div>

                <div className="p-8">
                  {/* Icon & Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-linear-to-br ${product.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                      {product.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-[#05ADEE] font-semibold mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-[#05ADEE] shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-[#05ADEE] font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for African Businesses
            </h2>
            <p className="text-xl text-gray-600">
              Features designed to solve real challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-3xl border border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-[#05ADEE]/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-[#05ADEE]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Connect with the tools you already use
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#05ADEE] hover:shadow-lg transition-all text-center"
              >
                <div className="font-semibold text-gray-900">{integration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Ecosystem */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              One Connected Ecosystem
            </h2>
            <p className="text-xl text-gray-600">
              All products work together seamlessly
            </p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-3xl border-2 border-[#05ADEE]/20">
                <ShoppingCart className="w-12 h-12 text-[#05ADEE] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Business Manager</h3>
                <p className="text-gray-600">On-premise POS operations</p>
              </div>

              <div className="p-8 bg-white rounded-3xl border-2 border-[#05ADEE]/20">
                <Cloud className="w-12 h-12 text-[#05ADEE] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Business Assistant</h3>
                <p className="text-gray-600">Cloud analytics & management</p>
              </div>

              <div className="p-8 bg-white rounded-3xl border-2 border-[#05ADEE]/20">
                <Layers className="w-12 h-12 text-[#05ADEE] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hybrid Solution</h3>
                <p className="text-gray-600">Best of both worlds</p>
              </div>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule a demo and see how Komusoft can transform your business operations
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#05ADEE] text-white rounded-xl hover:bg-[#0496d5] hover:shadow-2xl hover:shadow-[#05ADEE]/50 transition-all"
                >
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/products/pricing"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const Products = () => {
  return <ProductsOverview />;
};

export default Products;