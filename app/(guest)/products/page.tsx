"use client";

import {
  ShoppingCart,
  Cloud,
  Layers,
  Check,
  ArrowRight,
  Zap,
  Database,
  BarChart,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Products = () => {
  const products = [
    {
      icon: ShoppingCart,
      name: "Business Manager",
      tagline: "Offline-ready POS & Inventory System",
      description:
        "Powerful point-of-sale and inventory management system with LAN support for uninterrupted operations, even without internet connectivity.",
      features: [
        "Offline POS capabilities",
        "Real-time inventory tracking",
        "LAN-based synchronization",
        "Multi-location support",
        "Receipt printing & invoicing",
        "Stock alerts & reporting",
      ],
      image: "/public/about_image.png",
      tags: ["POS", "Inventory", "Offline"],
    },
    {
      icon: Cloud,
      name: "Business Assistant",
      tagline: "Cloud Business Operations Platform",
      description:
        "Web-based platform for comprehensive business operations management, accessible anywhere, anytime with powerful analytics and reporting.",
      features: [
        "Cloud-based infrastructure",
        "Advanced analytics & reporting",
        "Team collaboration tools",
        "API integrations",
        "Mobile responsive design",
        "Automated workflows",
      ],
      image: "/public/about_image.png",
      tags: ["Cloud", "Analytics", "SaaS"],
    },
    {
      icon: Layers,
      name: "Hybrid Solution",
      tagline: "Integrated Business Ecosystem",
      description:
        "Best of both worlds - seamlessly combines offline POS capabilities with cloud business management for ultimate flexibility.",
      features: [
        "Offline + Cloud synchronization",
        "Unified dashboard",
        "Automated backups",
        "Advanced reporting",
        "Multi-device access",
        "Scalable architecture",
      ],
      image: "/public/about_image.png",

      tags: ["Hybrid", "Enterprise", "Integration"],
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Increased Efficiency",
      description: "Automate repetitive tasks",
    },
    {
      icon: BarChart,
      title: "Better Insights",
      description: "Real-time analytics",
    },
    {
      icon: Database,
      title: "Data Security",
      description: "Enterprise-grade protection",
    },
    {
      icon: Cloud,
      title: "Always Accessible",
      description: "Cloud & offline modes",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-32"
        style={{ background: "linear-gradient(135deg, #0A0947 0%, #0d0f5e 40%, #0a2a6e 70%, #0c4a8a 100%)" }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute top-0 right-0 w-150 h-150 rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #05ADEE 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-100 h-100 rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #05ADEE 0%, transparent 70%)", transform: "translate(-40%, 40%)" }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Pill badge */}
            <motion.div
              className="inline-flex items-center gap-2 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span
                className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
                style={{
                  background: "rgba(5,173,238,0.15)",
                  border: "1px solid rgba(5,173,238,0.4)",
                  color: "#05ADEE",
                }}
              >
                Our Products
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold leading-[1.05] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-white">Ready-to-Deploy </span>
              <span
                style={{
                  background: "linear-gradient(90deg, #05ADEE, #38d2f5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Business Solutions
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-12"
              style={{ color: "rgba(255,255,255,0.65)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
            >
              Enterprise software products designed for African
              businesses, combining powerful features with ease
              of use
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {products.map((product, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div
                  className={
                    index % 2 === 1 ? "lg:order-2" : ""
                  }
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#05ADEE]/10 rounded-full mb-6">
                    <product.icon className="w-4 h-4 text-[#05ADEE]" />
                    <span className="text-sm font-semibold text-[#05ADEE]">
                      {product.name}
                    </span>
                  </div>

                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {product.tagline}
                  </h2>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, fIndex) => (
                      <div
                        key={fIndex}
                        className="flex items-center gap-3"
                      >
                        <Check className="w-5 h-5 text-[#05ADEE] shrink-0" />
                        <span className="text-gray-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#05ADEE] text-white rounded-xl hover:bg-[#0496d5] hover:shadow-xl transition-all"
                  >
                    Request Demo
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                <div
                  className={
                    index % 2 === 1 ? "lg:order-1" : ""
                  }
                >
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="rounded-3xl shadow-2xl"
                      width={500}
                      height={600}
                    />
                    <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Products
            </h2>
            <p className="text-xl text-gray-600">
              Built for African businesses, designed for global
              standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-3xl border border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-[#05ADEE]/10 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-[#05ADEE]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
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
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We can customize our products or build entirely
                new solutions tailored to your needs
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#05ADEE] text-white rounded-xl hover:bg-[#0496d5] hover:shadow-2xl hover:shadow-[#05ADEE]/50 transition-all"
                >
                  Request Custom Development
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default Products