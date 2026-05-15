"use client";

import { Check, X, Star, Zap, Shield, Users, Database, Wifi, Cloud, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Pricing() {
  const products = [
    {
      name: "Business Manager",
      tagline: "On-Premise POS & Inventory",
      description: "Offline-ready system perfect for retail environments",
      icon: Database,
      pricing: {
        oneTime: 2500000, // UGX 2.5M
        annual: 500000, // UGX 500K/year maintenance
        currency: "UGX"
      },
      features: [
        "Offline POS capabilities",
        "Real-time inventory tracking",
        "LAN synchronization",
        "EFRIS-compliant receipting",
        "Role-based access control",
        "Receipt printing & invoicing",
        "Stock alerts & reporting",
        "Multi-location support"
      ],
      limitations: [],
      popular: false
    },
    {
      name: "Business Assistant",
      tagline: "Cloud Business Platform",
      description: "SaaS solution for modern business operations",
      icon: Cloud,
      pricing: {
        monthly: 150000, // UGX 150K/month
        annual: 1500000, // UGX 1.5M/year (2 months free)
        currency: "UGX"
      },
      features: [
        "Cloud-based infrastructure",
        "Advanced analytics & reporting",
        "Team collaboration tools",
        "API integrations",
        "Mobile responsive design",
        "Automated workflows",
        "Custom dashboards",
        "Audit trail & compliance"
      ],
      limitations: [],
      popular: true
    },
    {
      name: "Hybrid Solution",
      tagline: "Enterprise Integration",
      description: "Best of both worlds with offline + cloud capabilities",
      icon: Zap,
      pricing: {
        monthly: 500000, // UGX 500K/month
        annual: 5000000, // UGX 5M/year
        setup: 1000000, // UGX 1M one-time setup
        currency: "UGX"
      },
      features: [
        "Offline + Cloud synchronization",
        "Unified command dashboard",
        "Automated nightly backups",
        "Advanced reporting suite",
        "Multi-device access",
        "Scalable architecture",
        "Enterprise SSO",
        "Dedicated SLA support"
      ],
      limitations: [],
      popular: false
    }
  ];

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: currency === 'UGX' ? 'UGX' : 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-linear-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Solution
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Transparent pricing designed for African businesses. No hidden fees, flexible payment options, and dedicated support included.
            </p>

            {/* Currency Toggle */}
            <div className="inline-flex items-center bg-white rounded-xl border border-gray-200 p-1 mb-8">
              <button className="px-6 py-2 bg-[#05ADEE] text-white rounded-lg font-semibold">
                UGX (Uganda Shillings)
              </button>
              <button className="px-6 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                USD (US Dollars)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl ${
                  product.popular ? 'border-[#05ADEE] shadow-xl' : 'border-gray-200'
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-[#05ADEE] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-[#05ADEE]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <product.icon className="w-8 h-8 text-[#05ADEE]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-[#05ADEE] font-semibold mb-2">{product.tagline}</p>
                    <p className="text-gray-600 text-sm">{product.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    {product.pricing.oneTime && (
                      <div className="mb-4">
                        <div className="text-3xl font-bold text-gray-900">
                          {formatCurrency(product.pricing.oneTime, product.pricing.currency)}
                        </div>
                        <div className="text-gray-600">One-time license</div>
                      </div>
                    )}

                    {product.pricing.monthly && (
                      <div className="mb-4">
                        <div className="text-3xl font-bold text-gray-900">
                          {formatCurrency(product.pricing.monthly, product.pricing.currency)}
                        </div>
                        <div className="text-gray-600">per month</div>
                      </div>
                    )}

                    {product.pricing.annual && (
                      <div className="text-sm text-gray-600">
                        {product.pricing.monthly
                          ? `${formatCurrency(product.pricing.annual, product.pricing.currency)} annually (${formatCurrency(product.pricing.monthly * 10, product.pricing.currency)} savings)`
                          : `${formatCurrency(product.pricing.annual, product.pricing.currency)} per year`
                        }
                      </div>
                    )}

                    {product.pricing.setup && (
                      <div className="mt-4 text-sm text-gray-600">
                        + {formatCurrency(product.pricing.setup, product.pricing.currency)} setup fee
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all ${
                      product.popular
                        ? 'bg-[#05ADEE] text-white hover:bg-[#0496d5] hover:shadow-xl'
                        : 'bg-white border-2 border-gray-200 text-gray-900 hover:border-[#05ADEE] hover:shadow-lg'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compare All Features
            </h2>
            <p className="text-xl text-gray-600">
              Detailed comparison to help you choose the right solution
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-6 font-bold text-gray-900">Features</th>
                    <th className="text-center p-6 font-bold text-gray-900">Business Manager</th>
                    <th className="text-center p-6 font-bold text-gray-900">Business Assistant</th>
                    <th className="text-center p-6 font-bold text-gray-900">Hybrid Solution</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Offline POS capabilities",
                    "Cloud-based operations",
                    "Real-time inventory tracking",
                    "LAN synchronization",
                    "Advanced analytics & reporting",
                    "Team collaboration tools",
                    "API integrations",
                    "EFRIS compliance",
                    "Role-based access control",
                    "Automated workflows",
                    "Multi-location support",
                    "Enterprise SSO",
                    "Dedicated SLA support",
                    "Mobile responsive design"
                  ].map((feature, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="p-6 font-medium text-gray-900">{feature}</td>
                      <td className="p-6 text-center">
                        {["Offline POS capabilities", "Real-time inventory tracking", "LAN synchronization", "EFRIS compliance", "Role-based access control", "Multi-location support"].includes(feature) ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {["Cloud-based operations", "Advanced analytics & reporting", "Team collaboration tools", "API integrations", "Automated workflows", "Mobile responsive design"].includes(feature) ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )}
                      </td>
                      <td className="p-6 text-center">
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-20 bg-[#0A0947]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#05ADEE] to-blue-600 p-12 md:p-16">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <Shield className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise Solutions Available
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Custom deployments, white-label solutions, and dedicated enterprise support for large organizations
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0A0947] rounded-xl hover:bg-blue-50 hover:shadow-2xl font-semibold transition-all"
              >
                Contact Enterprise Sales
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and products
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Can I switch between plans?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle."
              },
              {
                q: "Do you offer discounts for annual payments?",
                a: "Yes, annual subscriptions receive a 17% discount compared to monthly billing."
              },
              {
                q: "Is there a free trial available?",
                a: "We offer 14-day free trials for Business Assistant and Hybrid Solution. Business Manager requires a demo setup."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept bank transfers, mobile money (MTN/Airtel Money), card payments, and PayPal for international clients."
              },
              {
                q: "Do you provide training and support?",
                a: "Yes, all plans include comprehensive documentation, video tutorials, and email support. Premium support is available for enterprise clients."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function PricingPage() {
  return <Pricing />;
}