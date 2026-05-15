"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Star } from 'lucide-react';

export function Pricing() {
  const [withEFRIS, setWithEFRIS] = useState(true);

  const packages = [
    {
      name: "Solo Flight",
      features: "CRM + Invoicing",
      users: "1 User",
      tills: "1 Till",
      currency: "1 Currency",
      priceWithEFRIS: "80,000",
      priceWithoutEFRIS: "50,000",
      featureList: [
        "Customer Relationship Management",
        "Basic Invoicing",
        "Single user access",
        "1 Till/Register",
        "Single currency"
      ]
    },
    {
      name: "Deluxe",
      features: "CRM + Invoicing + Inventory",
      users: "3 Users",
      tills: "1 Till",
      currency: "1 Currency",
      priceWithEFRIS: "150,000",
      priceWithoutEFRIS: "120,000",
      featureList: [
        "All Solo Flight features",
        "Inventory Management",
        "Up to 3 users",
        "Stock tracking",
        "Reports & analytics"
      ]
    },
    {
      name: "Classic",
      features: "CRM + Invoicing + Inventory + Accounting",
      users: "6 Users",
      tills: "2 Tills",
      currency: "Multi Currency",
      priceWithEFRIS: "250,000",
      priceWithoutEFRIS: "180,000",
      recommended: true,
      featureList: [
        "All Deluxe features",
        "Full Accounting Module",
        "Up to 6 users",
        "2 Tills/Registers",
        "Multi-currency support",
        "Advanced reporting"
      ]
    },
    {
      name: "Corporate",
      features: "CRM + Invoicing + Inventory + Accounting + Corporate",
      users: "8 Users",
      tills: "3 Tills",
      currency: "Multi Currency",
      priceWithEFRIS: "350,000",
      priceWithoutEFRIS: "300,000",
      featureList: [
        "All Classic features",
        "Corporate Module",
        "Up to 8 users",
        "3 Tills/Registers",
        "Requisition & Purchase Orders",
        "Budgeting & Payroll"
      ]
    },
    {
      name: "Investor",
      features: "CRM + Invoicing + Inventory + Accounting + Production",
      users: "10 Users",
      tills: "4 Tills",
      currency: "Multi Currency",
      priceWithEFRIS: "450,000",
      priceWithoutEFRIS: "400,000",
      featureList: [
        "All Classic features",
        "Production Module",
        "Up to 10 users",
        "4 Tills/Registers",
        "Farming & Production Management"
      ]
    },
    {
      name: "Hospitality",
      features: "CRM + Invoicing + Inventory + Accounting + Hospitality",
      users: "10 Users",
      tills: "4 Tills",
      currency: "Multi Currency",
      priceWithEFRIS: "450,000",
      priceWithoutEFRIS: "400,000",
      featureList: [
        "All Classic features",
        "Hospitality Module",
        "Up to 10 users",
        "4 Tills/Registers",
        "Event management",
        "Room sales & housekeeping"
      ]
    },
    {
      name: "Platinum",
      features: "CRM + Invoicing + Inventory + Accounting + Corporate + Other",
      users: "15-25 Users",
      tills: "6 Tills",
      currency: "Multi Currency",
      priceWithEFRIS: "750,000",
      priceWithoutEFRIS: "700,000",
      featureList: [
        "All modules included",
        "15-25 users",
        "6 Tills/Registers",
        "Priority support",
        "Custom integrations",
        "Dedicated account manager"
      ]
    }
  ];

  const allFeatures = [
    { category: "Core Features", features: ["POS System", "Inventory Management", "CRM", "Invoicing"] },
    { category: "Accounting", features: ["Journals", "AP/AR", "Financial Statements", "Multi-currency"] },
    { category: "Corporate", features: ["Requisition", "Purchase Orders", "Budgeting", "Payroll", "HR Management"] },
    { category: "Production", features: ["Farming Management", "Production Tracking"] },
    { category: "Hospitality", features: ["Event Management", "Room Sales", "Housekeeping", "Night Audit"] },
    { category: "Security", features: ["Role-based Access", "Audit Trails", "2FA", "SSL Encryption"] }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the perfect package for your business needs
            </p>

            {/* EFRIS Toggle */}
            <div className="inline-flex items-center gap-4 p-2 bg-gray-100 rounded-xl">
              <button
                onClick={() => setWithEFRIS(false)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${!withEFRIS ? 'bg-white text-[#05ADEE] shadow-md' : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                Without EFRIS
              </button>
              <button
                onClick={() => setWithEFRIS(true)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${withEFRIS ? 'bg-white text-[#05ADEE] shadow-md' : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                With EFRIS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl border-2 p-8 transition-all duration-300 ${pkg.recommended
                    ? 'border-[#05ADEE] shadow-2xl scale-105'
                    : 'border-gray-200 hover:border-[#05ADEE] hover:shadow-xl'
                  }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#05ADEE] text-white text-sm font-semibold rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Recommended
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-sm text-gray-600 mb-6">{pkg.features}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-gray-600">UGX</span>
                    <span className="text-4xl font-bold text-gray-900">
                      {withEFRIS ? pkg.priceWithEFRIS : pkg.priceWithoutEFRIS}
                    </span>
                    <span className="text-sm text-gray-600">/month</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-[#05ADEE] rounded-full"></div>
                    {pkg.users}
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-[#05ADEE] rounded-full"></div>
                    {pkg.tills}
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-[#05ADEE] rounded-full"></div>
                    {pkg.currency}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.featureList.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#05ADEE] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`block w-full px-6 py-3 rounded-xl text-center font-semibold transition-all ${pkg.recommended
                      ? 'bg-[#05ADEE] text-white hover:bg-[#0496d5] hover:shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Feature Comparison
            </h2>
            <p className="text-xl text-gray-600">
              See what&apos;s included in each package
            </p>
          </div>

          <div className="space-y-8">
            {allFeatures.map((section, index) => (
              <div key={index} className="bg-white rounded-3xl border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{section.category}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {section.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#05ADEE]" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
                Need a Custom Package?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our sales team for enterprise pricing and custom configurations
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#05ADEE] text-white rounded-xl hover:bg-[#0496d5] hover:shadow-2xl hover:shadow-[#05ADEE]/50 transition-all"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function PricingPage() {
  return <Pricing />;
}